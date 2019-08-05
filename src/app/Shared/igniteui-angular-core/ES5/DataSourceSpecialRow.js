/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, fromEnum, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
/**
 * @hidden
 */
var DataSourceSpecialRow = /** @class */ (function (_super) {
    tslib_1.__extends(DataSourceSpecialRow, _super);
    function DataSourceSpecialRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.$$isSpecialRow = true;
        _this.e = new Dictionary$2(String_$type, Base.$, 0);
        _this.d = new Dictionary$2(String_$type, Base.$, 0);
        _this._rowType = 0;
        _this._targetRow = null;
        return _this;
    }
    Object.defineProperty(DataSourceSpecialRow.prototype, "rowType", {
        get: function () {
            return this._rowType;
        },
        set: function (a) {
            this._rowType = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceSpecialRow.prototype, "targetRow", {
        get: function () {
            return this._targetRow;
        },
        set: function (a) {
            this._targetRow = a;
        },
        enumerable: true,
        configurable: true
    });
    DataSourceSpecialRow.prototype.getValue = function (a) {
        var _this = this;
        if (a == "SectionInformation") {
            return this.d;
        }
        var b;
        if (((function () { var c = _this.e.tryGetValue(a, b); b = c.p1; return c.ret; })())) {
            return b;
        }
        return null;
    };
    DataSourceSpecialRow.prototype.getSectionValue = function (a) {
        var _this = this;
        var b;
        if (((function () { var c = _this.d.tryGetValue(a, b); b = c.p1; return c.ret; })())) {
            return b;
        }
        return null;
    };
    DataSourceSpecialRow.prototype.setValue = function (a, b) {
        this.e.item(a, b);
    };
    DataSourceSpecialRow.prototype.setSectionValue = function (a, b) {
        this.d.item(a, b);
    };
    DataSourceSpecialRow.prototype.getSectionKeys = function () {
        var e_1, _a;
        var a = new Array(this.d.keys.count);
        var b = 0;
        try {
            for (var _b = tslib_1.__values(fromEnum(this.d.keys)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                a[b] = c;
                b++;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return a;
    };
    DataSourceSpecialRow.$t = markType(DataSourceSpecialRow, 'DataSourceSpecialRow');
    return DataSourceSpecialRow;
}(Base));
export { DataSourceSpecialRow };
//# sourceMappingURL=DataSourceSpecialRow.js.map