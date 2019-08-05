/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
import { DomRenderer_$type } from "../../igniteui-angular-core/ES5/dom";
import { Stack$1 } from "../../igniteui-angular-core/ES5/Stack$1";
/**
 * @hidden
 */
var SpreadsheetMeasureHelper_MeasureStack = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetMeasureHelper_MeasureStack, _super);
    function SpreadsheetMeasureHelper_MeasureStack(a) {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.a = new Stack$1(DomRenderer_$type);
        _this.a.h(a);
        return _this;
    }
    Object.defineProperty(SpreadsheetMeasureHelper_MeasureStack.prototype, "b", {
        get: function () {
            return this.a.d();
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetMeasureHelper_MeasureStack.prototype.e = function (a, b) {
        if (b === void 0) { b = null; }
        var c = this.b.createElement(a);
        if (b != null) {
            c.addClass(b);
        }
        return this.d(c);
    };
    SpreadsheetMeasureHelper_MeasureStack.prototype.f = function () {
        while (this.a.f > 2) {
            this.a.e();
        }
        if (this.a.f > 1) {
            var a = this.a.e();
            a.rootWrapper.remove();
        }
    };
    SpreadsheetMeasureHelper_MeasureStack.prototype.d = function (a) {
        this.b.append(a);
        this.a.h(this.b.getSubRenderer(a));
        return this.b;
    };
    SpreadsheetMeasureHelper_MeasureStack.prototype.c = function () {
        var a = this.a.e();
        a.rootWrapper.remove();
        return this.b;
    };
    SpreadsheetMeasureHelper_MeasureStack.$t = markType(SpreadsheetMeasureHelper_MeasureStack, 'SpreadsheetMeasureHelper_MeasureStack');
    return SpreadsheetMeasureHelper_MeasureStack;
}(Base));
export { SpreadsheetMeasureHelper_MeasureStack };
//# sourceMappingURL=SpreadsheetMeasureHelper_MeasureStack.js.map
