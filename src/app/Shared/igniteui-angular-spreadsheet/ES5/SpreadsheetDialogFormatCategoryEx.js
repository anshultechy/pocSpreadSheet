/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { SpreadsheetDialogFormatCategory } from "./SpreadsheetDialogFormatCategory";
import { delegateCombine, fromEnum, markType } from "../../igniteui-angular-core/ES5/type";
import { Regex } from "../../igniteui-angular-core/ES5/Regex";
import { StringBuilder } from "../../igniteui-angular-core/ES5/StringBuilder";
import { stringContains, stringEmpty, stringReplace, stringIsNullOrEmpty } from "../../igniteui-angular-core/ES5/string";
/**
 * @hidden
 */
var SpreadsheetDialogFormatCategoryEx = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetDialogFormatCategoryEx, _super);
    function SpreadsheetDialogFormatCategoryEx() {
        var _this = _super.call(this) || this;
        _this.propertyChanged = delegateCombine(_this.propertyChanged, function (a, b) {
            if (b.propertyName == "DecimalPlaces") {
                _this._ai();
            }
        });
        return _this;
    }
    SpreadsheetDialogFormatCategoryEx.prototype._ai = function () {
        var e_1, _a;
        var a = new Regex(0, "\\" + "." + "(\\d+)?");
        var b = new Regex(0, "((\\d+[,]\\d+))|(\\d+)|([#]+[0]+[,]?([#]+)?)");
        var c = new StringBuilder(0);
        var d = new StringBuilder(0);
        if (this._y > 0) {
            c.l(".");
            d.l(".");
            for (var e = 0; e < this._y; e++) {
                c.l("1");
                d.l("0");
            }
        }
        try {
            for (var _b = tslib_1.__values(fromEnum(this._w)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var f = _c.value;
                if (!stringContains(f._g, ".") && this._y > 0) {
                    var g = stringEmpty();
                    var h = stringEmpty();
                    if (this._r) {
                        var i = this._ah(f._g, g, h);
                        g = i.p1;
                        h = i.p2;
                    }
                    else {
                        g = f._g;
                    }
                    var j = b.i(g);
                    if (j.d > 0) {
                        f._g = stringReplace(g, j.g, j.g + c.toString()) + h;
                    }
                    g = stringEmpty();
                    h = stringEmpty();
                    if (this._r) {
                        var k = this._ah(f._e, g, h);
                        g = k.p1;
                        h = k.p2;
                    }
                    else {
                        g = f._e;
                    }
                    var l = b.i(g);
                    while (null != l) {
                        if (false == stringIsNullOrEmpty(l.g)) {
                            f._e = stringReplace(g, l.g, l.g + d.toString()) + h;
                        }
                        var m = l.o();
                        if (null != m) {
                            if (l.g == m.g) {
                                break;
                            }
                            l = m;
                        }
                    }
                    continue;
                }
                var n = a.i(f._g);
                if (n.d > 0) {
                    f._g = stringReplace(f._g, n.g, c.toString());
                }
                var o = a.i(f._e);
                if (n.d > 0) {
                    f._e = stringReplace(f._e, o.g, d.toString());
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
    };
    SpreadsheetDialogFormatCategoryEx.prototype._ah = function (a, b, c) {
        var d = a.split('E');
        b = d[0];
        c = "E" + d[1];
        return {
            p1: b,
            p2: c
        };
    };
    SpreadsheetDialogFormatCategoryEx.$t = markType(SpreadsheetDialogFormatCategoryEx, 'SpreadsheetDialogFormatCategoryEx', SpreadsheetDialogFormatCategory.$);
    return SpreadsheetDialogFormatCategoryEx;
}(SpreadsheetDialogFormatCategory));
export { SpreadsheetDialogFormatCategoryEx };
//# sourceMappingURL=SpreadsheetDialogFormatCategoryEx.js.map
