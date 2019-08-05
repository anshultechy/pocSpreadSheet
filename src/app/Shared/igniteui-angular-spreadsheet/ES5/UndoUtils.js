/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
import { Localization } from "../../igniteui-angular-core/ES5/Localization";
/**
 * @hidden
 */
var UndoUtils = /** @class */ (function (_super) {
    tslib_1.__extends(UndoUtils, _super);
    function UndoUtils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UndoUtils.a = function (a) {
        return Localization.c("undo", a);
    };
    UndoUtils.b = function (a) {
        var b = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            b[_i - 1] = arguments[_i];
        }
        return Localization.c.apply(Localization, tslib_1.__spread(["undo", a], b));
    };
    UndoUtils.$t = markType(UndoUtils, 'UndoUtils');
    return UndoUtils;
}(Base));
export { UndoUtils };
//# sourceMappingURL=UndoUtils.js.map
