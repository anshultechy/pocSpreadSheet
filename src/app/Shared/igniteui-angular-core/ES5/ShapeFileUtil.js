/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, BaseError, EnumUtil, String_$type, enumGetBox, fromEnum, Point_$type, callStaticConstructors, markType, PointUtil } from "./type";
import { Header } from "./Header";
import { XBaseField } from "./XBaseField";
import { Dictionary$2 } from "./Dictionary$2";
import { XBaseDataType_$type } from "./XBaseDataType";
import { Rect } from "./Rect";
import { Encoding } from "./Encoding";
import { List$1 } from "./List$1";
import { ShapefileRecord } from "./ShapefileRecord";
import { ShapeType_$type } from "./ShapeType";
import { u32BitwiseAnd } from "./numberExtended";
import { stringReplace } from "./string";
import { isNaN_ } from "./number";
/**
 * @hidden
 */
var ShapeFileUtil = /** @class */ (function (_super) {
    tslib_1.__extends(ShapeFileUtil, _super);
    function ShapeFileUtil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShapeFileUtil.a = function (a, b) {
        if (ShapeFileUtil.j == null) {
            ShapeFileUtil.m();
        }
        var c = new Header();
        var d = ShapeFileUtil.k(a.readInt32());
        if (d != 9994) {
            throw new BaseError(1, "Corrupt Shp file - incorrect file code");
        }
        a.readInt32();
        a.readInt32();
        a.readInt32();
        a.readInt32();
        a.readInt32();
        ShapeFileUtil.k(a.readInt32());
        a.readInt32();
        c.a = a.readInt32();
        var e = PointUtil.create();
        var f = PointUtil.create();
        e.x = a.readDouble();
        e.y = a.readDouble();
        f.x = a.readDouble();
        f.y = a.readDouble();
        a.readDouble();
        a.readDouble();
        a.readDouble();
        a.readDouble();
        c.e = new Rect(0, e.x, e.y, f.x - e.x, f.y - e.y);
        if (b != null) {
            var g = b.readByte();
            if (g != 3) {
                throw new BaseError(1, "Corrupt Dbf file - wrong version number");
            }
            b.readByte();
            b.readByte();
            b.readByte();
            b.readUInt32();
            b.readUInt16();
            var h = b.readUInt16();
            b.readBytes(2);
            b.readBytes(1);
            b.readBytes(1);
            b.readBytes(4);
            b.readBytes(8);
            b.readBytes(1);
            b.readBytes(1);
            b.readBytes(2);
            var i = 0;
            while (i < h - 1) {
                var j = new XBaseField();
                j.c = stringReplace(Encoding.uTF8.getString1(b.readBytes(11), 0, 10), "\0", "");
                var k = Encoding.uTF8.getString1(b.readBytes(1), 0, 1).charAt(0);
                j.a = ShapeFileUtil.j.item(k);
                b.readBytes(4);
                j.b = b.readByte();
                b.readBytes(15);
                c.b.add(j);
                i += j.b;
            }
            if (b.readByte() != 13) {
                throw new BaseError(1, "Corrupt Dbf file - Missing field descriptor array terminator");
            }
        }
        return c;
    };
    ShapeFileUtil.e = function (a, b, c) {
        var e_1, _a;
        var d = ShapeFileUtil.k(b.readInt32());
        var e = ShapeFileUtil.k(b.readInt32());
        var f = b.readInt32();
        var g = null;
        switch (f) {
            case 0: break;
            case 1:
                g = ShapeFileUtil.i(b);
                break;
            case 3:
                g = ShapeFileUtil.b(b);
                break;
            case 5:
                g = ShapeFileUtil.f(b);
                break;
            case 8: break;
            case 11: break;
            case 13:
                g = ShapeFileUtil.d(b);
                break;
            case 15:
                g = ShapeFileUtil.h(b);
                break;
            case 18: break;
            case 21: break;
            case 23: break;
            case 25: break;
            case 28: break;
            case 31: break;
            default: break;
        }
        if (g == null) {
            throw new BaseError(1, "Corrupt Shp file - failed to read " + EnumUtil.getName(ShapeType_$type, f));
        }
        g.shapeType = f;
        if (c != null) {
            c.readBytes(1);
            g.fields = new Dictionary$2(String_$type, Base.$, 0);
            try {
                for (var _b = tslib_1.__values(fromEnum(a.b)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var h = _c.value;
                    g.fieldsNames.add(h.c);
                    var i = c.readBytes(h.b);
                    var j = Encoding.uTF8.getString1(i, 0, h.b);
                    switch (h.a) {
                        case 1:
                            g.fieldsTypes.add("double");
                            var k = parseFloat(j);
                            if (!isNaN_(k)) {
                                g.fields.addItem(h.c, k);
                                ShapeFileUtil.l(g, h.c, k);
                            }
                            break;
                        case 5:
                            g.fieldsTypes.add("float");
                            var l = parseFloat(j);
                            if (!isNaN_(l)) {
                                g.fields.addItem(h.c, l);
                                ShapeFileUtil.l(g, h.c, l);
                            }
                            break;
                        case 0:
                            g.fieldsTypes.add("string");
                            var m = j.trim();
                            g.fields.addItem(h.c, m);
                            ShapeFileUtil.l(g, h.c, m);
                            break;
                        case 3:
                            g.fieldsTypes.add("date");
                            var str_ = j;
                            var n = Date.parse(str_);
                            g.fields.addItem(h.c, n);
                            ShapeFileUtil.l(g, h.c, n);
                            break;
                        default: throw new BaseError(1, "Unrecognized field type: " + enumGetBox(XBaseDataType_$type, h.a));
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return g;
    };
    ShapeFileUtil.l = function (row_, property_, val_) {
        if (!row_.fieldValues) {
            row_.fieldValues = {};
        }
        ;
        row_.fieldValues[property_] = val_;
    };
    ShapeFileUtil.k = function (a) {
        return (((a & 255) << 24) | ((a & 65280) << 8) | ((a & 16711680) >> 8) | ((u32BitwiseAnd(a, 4278190080)) >> 24));
    };
    ShapeFileUtil.i = function (a) {
        var b = ((function () {
            var $ret = PointUtil.create();
            $ret.x = a.readDouble();
            $ret.y = a.readDouble();
            return $ret;
        })());
        return ((function () {
            var $ret = new ShapefileRecord();
            $ret.points = new List$1(List$1.$.specialize(Point_$type), 1, [new List$1(Point_$type, 1, [b])]);
            return $ret;
        })());
    };
    ShapeFileUtil.d = function (a) {
        var b, c;
        var d = ((function () { var e = ShapeFileUtil.c(a, b, c); b = e.p1; c = e.p2; return e.ret; })());
        a.readDouble();
        a.readDouble();
        for (var e = 0; e < c; e++) {
            a.readDouble();
        }
        a.readDouble();
        a.readDouble();
        for (var f = 0; f < c; f++) {
            a.readDouble();
        }
        return d;
    };
    ShapeFileUtil.c = function (a, b, c) {
        var d = PointUtil.create();
        var e = ((function () {
            var $ret = PointUtil.create();
            $ret.x = a.readDouble();
            $ret.y = a.readDouble();
            return $ret;
        })());
        var f = ((function () {
            var $ret = PointUtil.create();
            $ret.x = a.readDouble();
            $ret.y = a.readDouble();
            return $ret;
        })());
        var g = new Rect(0, e.x, e.y, f.x - e.x, f.y - e.y);
        b = a.readInt32();
        c = a.readInt32();
        var h = new Array(b);
        for (var i = 0; i < b; ++i) {
            h[i] = a.readInt32();
        }
        var j = new List$1(List$1.$.specialize(Point_$type), 0);
        for (var k = 0; k < b; ++k) {
            var l = (k < b - 1 ? h[k + 1] : c) - h[k];
            var m = new List$1(Point_$type, 2, l - 1);
            for (var n = 0; n < l; ++n) {
                d = PointUtil.create();
                d.x = a.readDouble();
                d.y = a.readDouble();
                m.add(d);
            }
            if (m.count > 0) {
                j.add(m);
            }
        }
        return {
            ret: ((function () {
                var $ret = new ShapefileRecord();
                $ret.points = j;
                return $ret;
            })()),
            p1: b,
            p2: c
        };
    };
    ShapeFileUtil.b = function (a) {
        var b, c;
        return ((function () { var d = ShapeFileUtil.c(a, b, c); b = d.p1; c = d.p2; return d.ret; })());
    };
    ShapeFileUtil.h = function (a) {
        var b, c;
        var d = ((function () { var e = ShapeFileUtil.g(a, b, c); b = e.p1; c = e.p2; return e.ret; })());
        a.readDouble();
        a.readDouble();
        for (var e = 0; e < c; e++) {
            a.readDouble();
        }
        a.readDouble();
        a.readDouble();
        for (var f = 0; f < c; f++) {
            a.readDouble();
        }
        return d;
    };
    ShapeFileUtil.f = function (a) {
        var b, c;
        return ((function () { var d = ShapeFileUtil.g(a, b, c); b = d.p1; c = d.p2; return d.ret; })());
    };
    ShapeFileUtil.g = function (a, b, c) {
        var d = ((function () {
            var $ret = PointUtil.create();
            $ret.x = a.readDouble();
            $ret.y = a.readDouble();
            return $ret;
        })());
        var e = ((function () {
            var $ret = PointUtil.create();
            $ret.x = a.readDouble();
            $ret.y = a.readDouble();
            return $ret;
        })());
        var f = new Rect(0, d.x, d.y, e.x - d.x, e.y - d.y);
        var g = PointUtil.create();
        b = a.readInt32();
        c = a.readInt32();
        var h = new Array(b);
        for (var i = 0; i < b; ++i) {
            h[i] = a.readInt32();
        }
        var j = new List$1(List$1.$.specialize(Point_$type), 0);
        for (var k = 0; k < b; ++k) {
            var l = (k < b - 1 ? h[k + 1] : c) - h[k];
            var m = new List$1(Point_$type, 2, l);
            g = PointUtil.create();
            g.x = a.readDouble();
            g.y = a.readDouble();
            for (var n = 1; n < l; ++n) {
                g = PointUtil.create();
                g.x = a.readDouble();
                g.y = a.readDouble();
                m.add(g);
            }
            if (m.count > 1) {
                j.add(m);
            }
        }
        return {
            ret: ((function () {
                var $ret = new ShapefileRecord();
                $ret.points = j;
                return $ret;
            })()),
            p1: b,
            p2: c
        };
    };
    ShapeFileUtil.m = function () {
        ShapeFileUtil.j = new Dictionary$2(String_$type, XBaseDataType_$type, 0);
        ShapeFileUtil.j.item('C', 0);
        ShapeFileUtil.j.item('N', 1);
        ShapeFileUtil.j.item('L', 2);
        ShapeFileUtil.j.item('D', 3);
        ShapeFileUtil.j.item('M', 4);
        ShapeFileUtil.j.item('F', 5);
        ShapeFileUtil.j.item('B', 6);
        ShapeFileUtil.j.item('G', 7);
        ShapeFileUtil.j.item('P', 8);
        ShapeFileUtil.j.item('Y', 9);
        ShapeFileUtil.j.item('T', 10);
        ShapeFileUtil.j.item('I', 11);
        ShapeFileUtil.j.item('V', 12);
        ShapeFileUtil.j.item('X', 13);
        ShapeFileUtil.j.item('@', 14);
        ShapeFileUtil.j.item('O', 15);
        ShapeFileUtil.j.item('+', 16);
    };
    ShapeFileUtil.staticInit = function () {
        ShapeFileUtil.m();
    };
    ShapeFileUtil.$t = markType(ShapeFileUtil, 'ShapeFileUtil');
    ShapeFileUtil.j = null;
    return ShapeFileUtil;
}(Base));
export { ShapeFileUtil };
callStaticConstructors();
//# sourceMappingURL=ShapeFileUtil.js.map