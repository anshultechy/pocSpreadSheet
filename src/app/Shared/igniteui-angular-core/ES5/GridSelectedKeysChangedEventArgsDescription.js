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
var GridSelectedKeysChangedEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(GridSelectedKeysChangedEventArgsDescription, _super);
    function GridSelectedKeysChangedEventArgsDescription() {
        var _this = _super.call(this) || this;
        _this.f = null;
        _this.g = null;
        return _this;
    }
    GridSelectedKeysChangedEventArgsDescription.prototype.get_type = function () {
        return "GridSelectedKeysChangedEventArgs";
    };
    Object.defineProperty(GridSelectedKeysChangedEventArgsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridSelectedKeysChangedEventArgsDescription.prototype, "addedKeys", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("AddedKeys");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridSelectedKeysChangedEventArgsDescription.prototype, "removedKeys", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("RemovedKeys");
        },
        enumerable: true,
        configurable: true
    });
    GridSelectedKeysChangedEventArgsDescription.$t = markType(GridSelectedKeysChangedEventArgsDescription, 'GridSelectedKeysChangedEventArgsDescription', Description.$);
    return GridSelectedKeysChangedEventArgsDescription;
}(Description));
export { GridSelectedKeysChangedEventArgsDescription };
//# sourceMappingURL=GridSelectedKeysChangedEventArgsDescription.js.map