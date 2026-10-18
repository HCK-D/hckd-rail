# RailBase - Europa-Umriss fuer die internationale Einsatzkarte erzeugen
# Quelle: countries-50m.json aus dem Paket world-atlas 2.0.2 (https://github.com/topojson/world-atlas, ISC-Lizenz),
#         Daten von Natural Earth 1:50m (gemeinfrei, https://www.naturalearthdata.com/about/terms-of-use/).
# Schneidet Mitteleuropa aus, vereinfacht die Grenzen und schreibt js\daten\europa.js.
# Aufruf im Projektordner:  powershell -ExecutionPolicy Bypass -File werkzeuge\europa-karte.ps1 -Quelle <Pfad zu countries-50m.json>
param([Parameter(Mandatory = $true)][string]$Quelle)
$ErrorActionPreference = 'Stop'
$root = Split-Path $PSScriptRoot -Parent
Add-Type -AssemblyName System.Web.Extensions
Add-Type -ReferencedAssemblies System.Web.Extensions, System.Core -TypeDefinition @'
using System; using System.Collections.Generic; using System.Linq; using System.Text; using System.Globalization;
using System.Web.Script.Serialization;
public static class EuropaKarte {
  // map frame: longitude -1..21, latitude 42.6..54.6 (Hamburg to Livorno, Paris edge to Vienna)
  public const double LonMin = -1, LonMax = 21, LatMin = 42.6, LatMax = 54.6, LatMitte = 48.6;
  public static double C = Math.Cos(LatMitte * Math.PI / 180), K, W, H;
  static double[] P(double lon, double lat) { return new[] { (lon - LonMin) * C * K, (LatMax - lat) * K }; }

  public static string[] Erzeuge(string json, double breite, double toleranz) {
    W = breite; K = breite / ((LonMax - LonMin) * C); H = (LatMax - LatMin) * K;
    var ser = new JavaScriptSerializer(); ser.MaxJsonLength = int.MaxValue;
    var topo = (Dictionary<string, object>)ser.DeserializeObject(json);
    var tr = (Dictionary<string, object>)topo["transform"];
    var sc = (object[])tr["scale"]; var tl = (object[])tr["translate"];
    double sx = Convert.ToDouble(sc[0]), sy = Convert.ToDouble(sc[1]), tx = Convert.ToDouble(tl[0]), ty = Convert.ToDouble(tl[1]);
    var arcs = new List<List<double[]>>();
    foreach (object[] a in (object[])topo["arcs"]) {
      long x = 0, y = 0; bool nah = false; var pts = new List<double[]>();
      foreach (object[] d in a) {
        x += Convert.ToInt64(d[0]); y += Convert.ToInt64(d[1]);
        double lon = x * sx + tx, lat = y * sy + ty;
        if (lon > LonMin - 10 && lon < LonMax + 10 && lat > LatMin - 10 && lat < LatMax + 10) nah = true;
        pts.Add(new[] { lon, lat });
      }
      arcs.Add(nah ? DP(pts.Select(q => P(q[0], q[1])).ToList(), toleranz) : null);
    }
    var alle = new StringBuilder(); var ch = new StringBuilder();
    var geoms = (object[])((Dictionary<string, object>)((Dictionary<string, object>)topo["objects"])["countries"])["geometries"];
    foreach (Dictionary<string, object> g in geoms) {
      if (!g.ContainsKey("type") || g["type"] == null || !g.ContainsKey("arcs")) continue;
      string id = g.ContainsKey("id") && g["id"] != null ? g["id"].ToString() : "";
      var polys = (string)g["type"] == "Polygon" ? new object[] { g["arcs"] } : (object[])g["arcs"];
      foreach (object[] poly in polys) foreach (object[] ring in poly) {
        var pts = new List<double[]>(); bool fehlt = false;
        foreach (object ai in ring) {
          int i = Convert.ToInt32(ai); var arc = arcs[i < 0 ? ~i : i];
          if (arc == null) { fehlt = true; break; }
          var folge = i < 0 ? Enumerable.Reverse(arc).ToList() : arc;
          for (int j = pts.Count > 0 ? 1 : 0; j < folge.Count; j++) pts.Add(folge[j]);
        }
        if (fehlt) continue;
        var c = Clip(pts, -300, -300, W + 300, H + 300);
        if (c.Count < 3) continue;
        double bx = c.Max(q => q[0]) - c.Min(q => q[0]), by = c.Max(q => q[1]) - c.Min(q => q[1]);
        if (bx < 60 && by < 60) continue; // tiny islands
        string d = Pfad(c); alle.Append(d); if (id == "756") ch.Append(d);
      }
    }
    return new[] { alle.ToString(), ch.ToString(), Math.Round(K, 3).ToString(CultureInfo.InvariantCulture), Math.Round(H).ToString(CultureInfo.InvariantCulture) };
  }

  // Douglas-Peucker, keeps both ends (arcs are shared between neighbours)
  static List<double[]> DP(List<double[]> p, double tol) {
    if (p.Count < 3) return p;
    var keep = new bool[p.Count]; keep[0] = keep[p.Count - 1] = true;
    var st = new Stack<int[]>(); st.Push(new[] { 0, p.Count - 1 });
    while (st.Count > 0) {
      var r = st.Pop(); int a = r[0], b = r[1]; double max = 0; int idx = -1;
      double dx = p[b][0] - p[a][0], dy = p[b][1] - p[a][1], len = Math.Sqrt(dx * dx + dy * dy);
      for (int i = a + 1; i < b; i++) {
        double dist = len == 0 ? Math.Sqrt(Math.Pow(p[i][0] - p[a][0], 2) + Math.Pow(p[i][1] - p[a][1], 2))
                               : Math.Abs(dy * p[i][0] - dx * p[i][1] + p[b][0] * p[a][1] - p[b][1] * p[a][0]) / len;
        if (dist > max) { max = dist; idx = i; }
      }
      if (max > tol && idx > 0) { keep[idx] = true; st.Push(new[] { a, idx }); st.Push(new[] { idx, b }); }
    }
    var o = new List<double[]>(); for (int i = 0; i < p.Count; i++) if (keep[i]) o.Add(p[i]); return o;
  }

  // Sutherland-Hodgman against a rectangle
  static List<double[]> Clip(List<double[]> pts, double x0, double y0, double x1, double y1) {
    var o = pts;
    for (int kante = 0; kante < 4 && o.Count > 0; kante++) {
      var inp = o; o = new List<double[]>();
      Func<double[], bool> drin = q => kante == 0 ? q[0] >= x0 : kante == 1 ? q[0] <= x1 : kante == 2 ? q[1] >= y0 : q[1] <= y1;
      Func<double[], double[], double[]> schnitt = (a, b) => {
        double t = kante == 0 ? (x0 - a[0]) / (b[0] - a[0]) : kante == 1 ? (x1 - a[0]) / (b[0] - a[0]) : kante == 2 ? (y0 - a[1]) / (b[1] - a[1]) : (y1 - a[1]) / (b[1] - a[1]);
        return new[] { a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t };
      };
      for (int i = 0; i < inp.Count; i++) {
        var cur = inp[i]; var prev = inp[(i + inp.Count - 1) % inp.Count];
        bool ci = drin(cur), pi = drin(prev);
        if (ci) { if (!pi) o.Add(schnitt(prev, cur)); o.Add(cur); } else if (pi) o.Add(schnitt(prev, cur));
      }
    }
    return o;
  }

  // compact SVG path: absolute start, then relative steps in whole units
  static string Pfad(List<double[]> c) {
    var sb = new StringBuilder(); long px = (long)Math.Round(c[0][0]), py = (long)Math.Round(c[0][1]);
    sb.Append('M').Append(px).Append(' ').Append(py).Append('l');
    bool erste = true;
    for (int i = 1; i < c.Count; i++) {
      long x = (long)Math.Round(c[i][0]), y = (long)Math.Round(c[i][1]);
      if (x == px && y == py) continue;
      if (!erste) sb.Append(' '); erste = false;
      sb.Append(x - px).Append(' ').Append(y - py); px = x; py = y;
    }
    return sb.Append('z').ToString();
  }
}
'@
$json = [IO.File]::ReadAllText((Resolve-Path $Quelle).Path)
$r = [EuropaKarte]::Erzeuge($json, 18000, 18)
$k = $r[2]; $h = $r[3]; $c = [Math]::Round([EuropaKarte]::C, 5).ToString([Globalization.CultureInfo]::InvariantCulture)
$text = "/* RailBase - Umriss Mitteleuropas fuer die internationale Einsatzkarte. Automatisch erzeugt mit werkzeuge\europa-karte.ps1, nicht von Hand bearbeiten.`n" +
  "   Laendergrenzen: Natural Earth 1:50m (gemeinfrei) via world-atlas 2.0.2 (ISC-Lizenz).`n" +
  "   Projektion: x = (Laenge - lon0) * c * k, y = (lat0 - Breite) * k */`n'use strict';`n" +
  "const EUROPA = { b: 18000, h: $h, lon0: $([EuropaKarte]::LonMin), lat0: $([EuropaKarte]::LatMax), c: $c, k: $k,`n" +
  "  land: '$($r[0])',`n  ch: '$($r[1])' };`n"
[IO.File]::WriteAllText((Join-Path $root 'js\daten\europa.js'), $text, (New-Object Text.UTF8Encoding $false))
"europa.js: {0} KB (Land {1} KB, Schweiz {2} KB), Hoehe {3}, k {4}" -f [int]($text.Length / 1KB), [int]($r[0].Length / 1KB), [int]($r[1].Length / 1KB), $h, $k
