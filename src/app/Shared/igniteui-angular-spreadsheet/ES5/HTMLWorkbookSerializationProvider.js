/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { WorkbookSerializationProviderBase } from "./WorkbookSerializationProviderBase";
import { DataFormats } from "../../igniteui-angular-core/ES5/DataFormats";
import { markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var HTMLWorkbookSerializationProvider = /** @class */ (function (_super) {
    tslib_1.__extends(HTMLWorkbookSerializationProvider, _super);
    function HTMLWorkbookSerializationProvider() {
        return _super.call(this, 0, DataFormats.b) || this;
    }
    HTMLWorkbookSerializationProvider.prototype.c = function (a) {
        return false;
    };
    HTMLWorkbookSerializationProvider.prototype.d = function (a) {
        return false;
    };
    HTMLWorkbookSerializationProvider.$t = markType(HTMLWorkbookSerializationProvider, 'HTMLWorkbookSerializationProvider', WorkbookSerializationProviderBase.$);
    return HTMLWorkbookSerializationProvider;
}(WorkbookSerializationProviderBase));
export { HTMLWorkbookSerializationProvider };
//# sourceMappingURL=HTMLWorkbookSerializationProvider.js.map
