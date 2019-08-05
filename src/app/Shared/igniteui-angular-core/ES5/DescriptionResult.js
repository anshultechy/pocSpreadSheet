/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { List$1 } from "./List$1";
/**
 * @hidden
 */
var DescriptionResult = /** @class */ (function (_super) {
    tslib_1.__extends(DescriptionResult, _super);
    function DescriptionResult() {
        var _this = _super.call(this) || this;
        _this.c = new List$1(String_$type, 0);
        _this._result = null;
        return _this;
    }
    DescriptionResult.prototype.d = function (a) {
        this.c.add(a);
    };
    DescriptionResult.prototype.e = function (a) {
        for (var b = 0; b < a.c.count; b++) {
            this.c.add(a.c._inner[b]);
        }
    };
    Object.defineProperty(DescriptionResult.prototype, "result", {
        get: function () {
            return this._result;
        },
        set: function (a) {
            this._result = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DescriptionResult.prototype, "warnings", {
        get: function () {
            return this.c.toArray();
        },
        enumerable: true,
        configurable: true
    });
    DescriptionResult.$t = markType(DescriptionResult, 'DescriptionResult');
    return DescriptionResult;
}(Base));
export { DescriptionResult };
//# sourceMappingURL=DescriptionResult.js.map