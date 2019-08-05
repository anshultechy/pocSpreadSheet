/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
import { ISpreadsheetDialog_$type } from "./ISpreadsheetDialog";
import { NotImplementedException } from "../../igniteui-angular-core/ES5/NotImplementedException";
/**
 * @hidden
 */
var IgDialogWrapper = /** @class */ (function (_super) {
    tslib_1.__extends(IgDialogWrapper, _super);
    function IgDialogWrapper(a) {
        var _this = _super.call(this) || this;
        _this.b = null;
        _this.c = 0;
        _this.closing = null;
        _this.closed = null;
        _this.b = a;
        return _this;
    }
    IgDialogWrapper.prototype.close = function (a) {
        this.c++;
        try {
            throw new NotImplementedException(0);
        }
        finally {
            this.c--;
        }
    };
    IgDialogWrapper.prototype.e = function (a, b) {
        throw new NotImplementedException(0);
        return null;
    };
    IgDialogWrapper.prototype.d = function (a, b) {
        throw new NotImplementedException(0);
        return null;
    };
    IgDialogWrapper.a = function (a, b, c) {
        if (c === void 0) { c = false; }
        var d = new IgDialogWrapper(a);
        throw new NotImplementedException(0);
        return d;
    };
    IgDialogWrapper.$t = markType(IgDialogWrapper, 'IgDialogWrapper', Base.$, [ISpreadsheetDialog_$type]);
    return IgDialogWrapper;
}(Base));
export { IgDialogWrapper };
//# sourceMappingURL=IgDialogWrapper.js.map
