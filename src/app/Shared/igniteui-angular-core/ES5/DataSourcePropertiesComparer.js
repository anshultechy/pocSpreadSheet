/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, typeGetValue, markType } from "./type";
import { IComparer$1_$type } from "./IComparer$1";
import { Dictionary$2 } from "./Dictionary$2";
import { DataSourceSchemaPropertyType_$type } from "./DataSourceSchemaPropertyType";
import { boolCompare } from "./bool";
import { dateMinValue } from "./date";
import { CompareUtil } from "./compareUtil";
import { stringCompare } from "./string";
/**
 * @hidden
 */
var DataSourcePropertiesComparer = /** @class */ (function (_super) {
    tslib_1.__extends(DataSourcePropertiesComparer, _super);
    function DataSourcePropertiesComparer(a, b, c, d) {
        var _this = _super.call(this) || this;
        _this.e = null;
        _this.b = null;
        _this.a = null;
        _this.g = 0;
        _this.f = null;
        _this.d = null;
        _this.c = null;
        _this.b = a;
        if (_this.b != null) {
            _this.g = _this.b.length;
        }
        _this.a = b;
        _this.e = d;
        _this.f = d.actualSchema;
        if (_this.b != null) {
            _this.d = new Array(_this.g);
        }
        _this.c = c;
        if (_this.c == null) {
            _this.c = new Array(_this.g);
        }
        var e = new Dictionary$2(String_$type, DataSourceSchemaPropertyType_$type, 0);
        for (var f = 0; f < _this.f.propertyNames.length; f++) {
            e.item(_this.f.propertyNames[f], _this.f.propertyTypes[f]);
        }
        if (_this.b != null) {
            for (var g = 0; g < _this.b.length; g++) {
                if (e.containsKey(_this.b[g])) {
                    _this.d[g] = e.item(_this.b[g]);
                }
                else {
                    _this.d[g] = d.resolveSchemaPropertyType(_this.b[g]);
                }
            }
        }
        return _this;
    }
    DataSourcePropertiesComparer.prototype.compare = function (a, b) {
        if (this.b == null) {
            if (a == b) {
                return 0;
            }
            return -1;
        }
        var c = null;
        var d = null;
        var e = null;
        var f = null;
        var x_ = a;
        if ((x_ != null && x_.$$isSpecialRow !== undefined)) {
            e = x_;
        }
        var y_ = b;
        if ((y_ != null && y_.$$isSpecialRow !== undefined)) {
            f = y_;
        }
        var g = null;
        var h = false;
        var i = this.g;
        for (var j = 0; j < i; j++) {
            g = this.b[j];
            h = this.a[j] == 1;
            if (e != null) {
                c = e.getValue(g);
            }
            else {
                c = this.e.getItemProperty(a, g);
            }
            if (f != null) {
                d = f.getValue(g);
            }
            else {
                d = this.e.getItemProperty(b, g);
            }
            var k = this.j(c, d, h, this.d[j], this.c[j]);
            if (k != 0) {
                return k;
            }
        }
        return 0;
    };
    DataSourcePropertiesComparer.prototype.h = function (a, b) {
        if (this.b == null) {
            for (var c = 0; c < a.length; c++) {
                if (a[c] != b[c]) {
                    return -1;
                }
            }
            return 0;
        }
        var d = null;
        var e = null;
        var f = false;
        var g = this.g;
        for (var h = 0; h < g; h++) {
            f = this.a[h] == 1;
            d = a[h];
            e = b[h];
            var i = this.j(d, e, f, this.d[h], this.c[h]);
            if (i != 0) {
                return i;
            }
        }
        return 0;
    };
    DataSourcePropertiesComparer.prototype.i = function (a, b) {
        if (this.b == null) {
            if (b.length == 1) {
                if (a == b[0]) {
                    return 0;
                }
            }
            return -1;
        }
        var c = null;
        var d = null;
        var e = null;
        var f = false;
        var g = this.g;
        for (var h = 0; h < g; h++) {
            e = this.b[h];
            f = this.a[h] == 1;
            c = this.e.getItemProperty(a, e);
            d = b[h];
            var i = this.j(c, d, f, this.d[h], this.c[h]);
            if (i != 0) {
                return i;
            }
        }
        return 0;
    };
    DataSourcePropertiesComparer.prototype.j = function (a, b, c, d, e) {
        if (c) {
            var f = a;
            a = b;
            b = f;
        }
        var g = 0;
        switch (d) {
            case 2:
                a = a == null ? false : a;
                b = b == null ? false : b;
                g = boolCompare(a, b);
                break;
            case 8:
                a = a == null ? dateMinValue() : a;
                b = b == null ? dateMinValue() : b;
                var xVal_ = a;
                var yVal_ = b;
                xVal_ = +xVal_;
                yVal_ = +yVal_;
                var h = typeGetValue(xVal_);
                var i = typeGetValue(yVal_);
                g = Base.compareSimple(h, i);
                break;
            case 5:
                a = a == null ? -1.7976931348623157E+308 : a;
                b = b == null ? -1.7976931348623157E+308 : b;
                g = Base.compareSimple(a, b);
                break;
            case 10:
                a = a == null ? 0 : a;
                b = b == null ? 0 : b;
                g = Base.compareSimple(a, b);
                break;
            case 6:
                a = a == null ? -7.9228162514264338E+28 : a;
                b = b == null ? -7.9228162514264338E+28 : b;
                g = Base.compareSimple(a, b);
                break;
            case 7:
                a = a == null ? -3.4028230607370965E+38 : a;
                b = b == null ? -3.4028230607370965E+38 : b;
                g = Base.compareSimple(b, b);
                break;
            case 1:
                a = a == null ? -2147483648 : a;
                b = b == null ? -2147483648 : b;
                g = Base.compareSimple((typeGetValue(a)), typeGetValue(b));
                break;
            case 3:
                a = a == null ? -9.2233720368547758E+18 : a;
                b = b == null ? -9.2233720368547758E+18 : b;
                g = Base.compareSimple((typeGetValue(a)), typeGetValue(b));
                break;
            case 11:
                if (e) {
                    var j = a;
                    var k = b;
                    if (j != null) {
                        g = CompareUtil.compareToObject(j, k);
                    }
                    else if (k != null) {
                        g = -1;
                    }
                    else {
                        g = 0;
                    }
                }
                else {
                    a = a == null ? "" : a;
                    b = b == null ? "" : b;
                    g = stringCompare(a.toString(), b.toString());
                }
                break;
            case 4:
                a = a == null ? -32768 : a;
                b = b == null ? -32768 : b;
                g = Base.compareSimple((typeGetValue(a)), typeGetValue(b));
                break;
            case 0:
                a = a == null ? "" : a;
                b = b == null ? "" : b;
                g = stringCompare(a, b);
                break;
        }
        return g;
    };
    DataSourcePropertiesComparer.$t = markType(DataSourcePropertiesComparer, 'DataSourcePropertiesComparer', Base.$, [IComparer$1_$type.specialize(Base.$)]);
    return DataSourcePropertiesComparer;
}(Base));
export { DataSourcePropertiesComparer };
//# sourceMappingURL=DataSourcePropertiesComparer.js.map