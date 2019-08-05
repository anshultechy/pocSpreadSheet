/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Description } from "./Description";
import { markType } from "./type";
/**
 * @hidden
 */
var CellStyleRequestedEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(CellStyleRequestedEventArgsDescription, _super);
    function CellStyleRequestedEventArgsDescription() {
        var _this = _super.call(this) || this;
        _this.i = null;
        _this.h = null;
        _this.f = 0;
        return _this;
    }
    CellStyleRequestedEventArgsDescription.prototype.get_type = function () {
        return "CellStyleRequestedEventArgs";
    };
    Object.defineProperty(CellStyleRequestedEventArgsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellStyleRequestedEventArgsDescription.prototype, "styleKey", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
            this.e("StyleKey");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellStyleRequestedEventArgsDescription.prototype, "resolvedValueRef", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("ResolvedValueRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellStyleRequestedEventArgsDescription.prototype, "rowNumber", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("RowNumber");
        },
        enumerable: true,
        configurable: true
    });
    CellStyleRequestedEventArgsDescription.$t = markType(CellStyleRequestedEventArgsDescription, 'CellStyleRequestedEventArgsDescription', Description.$);
    return CellStyleRequestedEventArgsDescription;
}(Description));
export { CellStyleRequestedEventArgsDescription };
//# sourceMappingURL=CellStyleRequestedEventArgsDescription.js.map