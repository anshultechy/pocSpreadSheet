/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { SpreadsheetCellEditManager } from "./SpreadsheetCellEditManager";
import { SpreadsheetCommandExecutingEventArgs } from "./SpreadsheetCommandExecutingEventArgs";
import { SpreadsheetCommandExecutedEventArgs } from "./SpreadsheetCommandExecutedEventArgs";
import { SpreadsheetUtilities } from "./SpreadsheetUtilities";
import { Nullable$1, Boolean_$type, markType } from "../../igniteui-angular-core/ES5/type";
import { nullableEquals } from "../../igniteui-angular-core/ES5/nullable";
/**
 * @hidden
 */
var SpreadsheetCellEditManager$1 = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetCellEditManager$1, _super);
    function SpreadsheetCellEditManager$1($tEditor, a) {
        var _this = _super.call(this, a) || this;
        _this.$tEditor = null;
        _this.$tEditor = $tEditor;
        _this.$type = _this.$type.specialize(_this.$tEditor);
        return _this;
    }
    SpreadsheetCellEditManager$1.prototype.ab = function (a) {
        var _this = this;
        var b;
        if (!((function () { var c = _this.a3(b); b = c.p0; return c.ret; })())) {
            return false;
        }
        return this.a1(a, b);
    };
    SpreadsheetCellEditManager$1.prototype.ag = function (a, b) {
        var _this = this;
        if (b === void 0) { b = true; }
        var c;
        if (!((function () { var d = _this.a3(c); c = d.p0; return d.ret; })())) {
            return false;
        }
        switch (a) {
            case 86:
            case 85:
                b = false;
                break;
        }
        if (b) {
            var d = new SpreadsheetCommandExecutingEventArgs(a, null, c);
            this.g._gu(d);
            if (d.cancel) {
                return true;
            }
        }
        if (!this.a2(a, c)) {
            return false;
        }
        if (b) {
            this.g._gt(new SpreadsheetCommandExecutedEventArgs(a, null, c));
        }
        return true;
    };
    SpreadsheetCellEditManager$1.prototype.a1 = function (a, b) {
        if (this.g.isInEditMode) {
            switch (a) {
                case 198:
                case 125:
                case 126:
                case 119:
                case 161:
                case 120:
                case 121:
                case 163:
                case 162:
                case 160: return true;
            }
        }
        return true;
    };
    SpreadsheetCellEditManager$1.prototype.a2 = function (a, b) {
        if (this.g.isInEditMode) {
            var c = this.g.activeSelectionCellRangeFormat.font;
            switch (a) {
                case 119:
                    c._bold$i = Nullable$1.toNullable(Boolean_$type, nullableEquals(c._bold$i, true) ? false : true);
                    return true;
                case 120:
                    c._italic$i = Nullable$1.toNullable(Boolean_$type, nullableEquals(c._italic$i, true) ? false : true);
                    return true;
                case 121:
                    c._strikeout$i = Nullable$1.toNullable(Boolean_$type, nullableEquals(c._strikeout$i, true) ? false : true);
                    return true;
                case 125:
                    c.height = SpreadsheetUtilities.cj(c.height, true);
                    return true;
                case 126:
                    c.height = SpreadsheetUtilities.cj(c.height, false);
                    return true;
                case 163:
                    c.superscriptSubscriptStyle = c.superscriptSubscriptStyle == 2 ? 0 : 2;
                    return true;
                case 162:
                    c.superscriptSubscriptStyle = c.superscriptSubscriptStyle == 1 ? 0 : 1;
                    return true;
                case 161:
                    c.underlineStyle = SpreadsheetUtilities.ak(c.underlineStyle, this.g._d3());
                    return true;
                case 160:
                    c.underlineStyle = SpreadsheetUtilities.al(c.underlineStyle, this.g._d3());
                    return true;
                case 198:
                    this.g._il();
                    return true;
            }
        }
        return false;
    };
    SpreadsheetCellEditManager$1.prototype.a3 = function (a) {
        if (!this.g.isInEditMode) {
            a = null;
            return {
                ret: false,
                p0: a
            };
        }
        else {
            a = this.a0;
            return {
                ret: a != null,
                p0: a
            };
        }
    };
    SpreadsheetCellEditManager$1.$t = markType(SpreadsheetCellEditManager$1, 'SpreadsheetCellEditManager$1', SpreadsheetCellEditManager.$);
    return SpreadsheetCellEditManager$1;
}(SpreadsheetCellEditManager));
export { SpreadsheetCellEditManager$1 };
//# sourceMappingURL=SpreadsheetCellEditManager$1.js.map
