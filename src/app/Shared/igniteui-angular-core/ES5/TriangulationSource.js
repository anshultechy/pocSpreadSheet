/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { TriangulationSourcePointRecord } from "./TriangulationSourcePointRecord";
import { Triangle } from "./Triangle";
import { Triangulator } from "./Triangulator";
import { boxArray$1 } from "./array";
/**
 * @hidden
 */
var TriangulationSource = /** @class */ (function (_super) {
    tslib_1.__extends(TriangulationSource, _super);
    function TriangulationSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._points = null;
        _this._triangles = null;
        return _this;
    }
    TriangulationSource.create = function (a, b, c) {
        var d = new TriangulationSource();
        var e = new Array(a);
        var f;
        var g;
        var h = new Array(a);
        var i = new Array(a);
        var j = 0;
        var k = 0;
        for (var l = 0; l < a; l++) {
            f = new TriangulationSourcePointRecord();
            g = b(l);
            j = g.x;
            k = g.y;
            f.pointX = j;
            f.pointY = k;
            f.value = c(l);
            e[l] = f;
            h[l] = j;
            i[l] = k;
        }
        d.points = e;
        var m = new Triangulator(a, boxArray$1(h), boxArray$1(i));
        m.x();
        d.triangles = m.n();
        return d;
    };
    TriangulationSource.loadItf = function (a) {
        a.readBytes(5);
        var b = a.readInt32();
        var c = a.readInt32();
        var d = a.readInt32();
        var e = a.readInt32();
        a.readBytes(e);
        var f = new TriangulationSource();
        var g = new Array(b);
        var h;
        for (var i = 0; i < b; i++) {
            h = new TriangulationSourcePointRecord();
            h.pointX = a.readDouble();
            h.pointY = a.readDouble();
            h.value = a.readSingle();
            g[i] = h;
        }
        f.points = g;
        var j = new Array(c);
        var k;
        for (var l = 0; l < c; l++) {
            k = new Triangle();
            k.v1 = a.readInt32();
            k.v2 = a.readInt32();
            k.v3 = a.readInt32();
            j[l] = k;
        }
        f.triangles = boxArray$1(j);
        return f;
    };
    Object.defineProperty(TriangulationSource.prototype, "points", {
        get: function () {
            return this._points;
        },
        set: function (a) {
            this._points = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TriangulationSource.prototype, "triangles", {
        get: function () {
            return this._triangles;
        },
        set: function (a) {
            this._triangles = a;
        },
        enumerable: true,
        configurable: true
    });
    TriangulationSource.$t = markType(TriangulationSource, 'TriangulationSource');
    return TriangulationSource;
}(Base));
export { TriangulationSource };
//# sourceMappingURL=TriangulationSource.js.map