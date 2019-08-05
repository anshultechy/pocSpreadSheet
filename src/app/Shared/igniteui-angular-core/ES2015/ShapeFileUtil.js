/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
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
export class ShapeFileUtil extends Base {
    static a(a, b) {
        if (ShapeFileUtil.j == null) {
            ShapeFileUtil.m();
        }
        let c = new Header();
        let d = ShapeFileUtil.k(a.readInt32());
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
        let e = PointUtil.create();
        let f = PointUtil.create();
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
            let g = b.readByte();
            if (g != 3) {
                throw new BaseError(1, "Corrupt Dbf file - wrong version number");
            }
            b.readByte();
            b.readByte();
            b.readByte();
            b.readUInt32();
            b.readUInt16();
            let h = b.readUInt16();
            b.readBytes(2);
            b.readBytes(1);
            b.readBytes(1);
            b.readBytes(4);
            b.readBytes(8);
            b.readBytes(1);
            b.readBytes(1);
            b.readBytes(2);
            let i = 0;
            while (i < h - 1) {
                let j = new XBaseField();
                j.c = stringReplace(Encoding.uTF8.getString1(b.readBytes(11), 0, 10), "\0", "");
                let k = Encoding.uTF8.getString1(b.readBytes(1), 0, 1).charAt(0);
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
    }
    static e(a, b, c) {
        let d = ShapeFileUtil.k(b.readInt32());
        let e = ShapeFileUtil.k(b.readInt32());
        let f = b.readInt32();
        let g = null;
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
            for (let h of fromEnum(a.b)) {
                g.fieldsNames.add(h.c);
                let i = c.readBytes(h.b);
                let j = Encoding.uTF8.getString1(i, 0, h.b);
                switch (h.a) {
                    case 1:
                        g.fieldsTypes.add("double");
                        let k = parseFloat(j);
                        if (!isNaN_(k)) {
                            g.fields.addItem(h.c, k);
                            ShapeFileUtil.l(g, h.c, k);
                        }
                        break;
                    case 5:
                        g.fieldsTypes.add("float");
                        let l = parseFloat(j);
                        if (!isNaN_(l)) {
                            g.fields.addItem(h.c, l);
                            ShapeFileUtil.l(g, h.c, l);
                        }
                        break;
                    case 0:
                        g.fieldsTypes.add("string");
                        let m = j.trim();
                        g.fields.addItem(h.c, m);
                        ShapeFileUtil.l(g, h.c, m);
                        break;
                    case 3:
                        g.fieldsTypes.add("date");
                        let str_ = j;
                        let n = Date.parse(str_);
                        g.fields.addItem(h.c, n);
                        ShapeFileUtil.l(g, h.c, n);
                        break;
                    default: throw new BaseError(1, "Unrecognized field type: " + enumGetBox(XBaseDataType_$type, h.a));
                }
            }
        }
        return g;
    }
    static l(row_, property_, val_) {
        if (!row_.fieldValues) {
            row_.fieldValues = {};
        }
        ;
        row_.fieldValues[property_] = val_;
    }
    static k(a) {
        return (((a & 255) << 24) | ((a & 65280) << 8) | ((a & 16711680) >> 8) | ((u32BitwiseAnd(a, 4278190080)) >> 24));
    }
    static i(a) {
        let b = ((() => {
            let $ret = PointUtil.create();
            $ret.x = a.readDouble();
            $ret.y = a.readDouble();
            return $ret;
        })());
        return ((() => {
            let $ret = new ShapefileRecord();
            $ret.points = new List$1(List$1.$.specialize(Point_$type), 1, [new List$1(Point_$type, 1, [b])]);
            return $ret;
        })());
    }
    static d(a) {
        let b, c;
        let d = ((() => { let e = ShapeFileUtil.c(a, b, c); b = e.p1; c = e.p2; return e.ret; })());
        a.readDouble();
        a.readDouble();
        for (let e = 0; e < c; e++) {
            a.readDouble();
        }
        a.readDouble();
        a.readDouble();
        for (let f = 0; f < c; f++) {
            a.readDouble();
        }
        return d;
    }
    static c(a, b, c) {
        let d = PointUtil.create();
        let e = ((() => {
            let $ret = PointUtil.create();
            $ret.x = a.readDouble();
            $ret.y = a.readDouble();
            return $ret;
        })());
        let f = ((() => {
            let $ret = PointUtil.create();
            $ret.x = a.readDouble();
            $ret.y = a.readDouble();
            return $ret;
        })());
        let g = new Rect(0, e.x, e.y, f.x - e.x, f.y - e.y);
        b = a.readInt32();
        c = a.readInt32();
        let h = new Array(b);
        for (let i = 0; i < b; ++i) {
            h[i] = a.readInt32();
        }
        let j = new List$1(List$1.$.specialize(Point_$type), 0);
        for (let k = 0; k < b; ++k) {
            let l = (k < b - 1 ? h[k + 1] : c) - h[k];
            let m = new List$1(Point_$type, 2, l - 1);
            for (let n = 0; n < l; ++n) {
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
            ret: ((() => {
                let $ret = new ShapefileRecord();
                $ret.points = j;
                return $ret;
            })()),
            p1: b,
            p2: c
        };
    }
    static b(a) {
        let b, c;
        return ((() => { let d = ShapeFileUtil.c(a, b, c); b = d.p1; c = d.p2; return d.ret; })());
    }
    static h(a) {
        let b, c;
        let d = ((() => { let e = ShapeFileUtil.g(a, b, c); b = e.p1; c = e.p2; return e.ret; })());
        a.readDouble();
        a.readDouble();
        for (let e = 0; e < c; e++) {
            a.readDouble();
        }
        a.readDouble();
        a.readDouble();
        for (let f = 0; f < c; f++) {
            a.readDouble();
        }
        return d;
    }
    static f(a) {
        let b, c;
        return ((() => { let d = ShapeFileUtil.g(a, b, c); b = d.p1; c = d.p2; return d.ret; })());
    }
    static g(a, b, c) {
        let d = ((() => {
            let $ret = PointUtil.create();
            $ret.x = a.readDouble();
            $ret.y = a.readDouble();
            return $ret;
        })());
        let e = ((() => {
            let $ret = PointUtil.create();
            $ret.x = a.readDouble();
            $ret.y = a.readDouble();
            return $ret;
        })());
        let f = new Rect(0, d.x, d.y, e.x - d.x, e.y - d.y);
        let g = PointUtil.create();
        b = a.readInt32();
        c = a.readInt32();
        let h = new Array(b);
        for (let i = 0; i < b; ++i) {
            h[i] = a.readInt32();
        }
        let j = new List$1(List$1.$.specialize(Point_$type), 0);
        for (let k = 0; k < b; ++k) {
            let l = (k < b - 1 ? h[k + 1] : c) - h[k];
            let m = new List$1(Point_$type, 2, l);
            g = PointUtil.create();
            g.x = a.readDouble();
            g.y = a.readDouble();
            for (let n = 1; n < l; ++n) {
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
            ret: ((() => {
                let $ret = new ShapefileRecord();
                $ret.points = j;
                return $ret;
            })()),
            p1: b,
            p2: c
        };
    }
    static m() {
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
    }
    static staticInit() {
        ShapeFileUtil.m();
    }
}
ShapeFileUtil.$t = markType(ShapeFileUtil, 'ShapeFileUtil');
ShapeFileUtil.j = null;
callStaticConstructors();
//# sourceMappingURL=ShapeFileUtil.js.map