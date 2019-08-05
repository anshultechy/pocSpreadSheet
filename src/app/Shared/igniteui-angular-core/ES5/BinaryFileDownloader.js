/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { BinaryUtil } from "./binary";
/**
 * @hidden
 */
var BinaryFileDownloader = /** @class */ (function (_super) {
    tslib_1.__extends(BinaryFileDownloader, _super);
    function BinaryFileDownloader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BinaryFileDownloader.a = function (uri_, callback_, errorCallback_) {
        BinaryUtil.getBinary(uri_, callback_, errorCallback_);
    };
    BinaryFileDownloader.$t = markType(BinaryFileDownloader, 'BinaryFileDownloader');
    return BinaryFileDownloader;
}(Base));
export { BinaryFileDownloader };
//# sourceMappingURL=BinaryFileDownloader.js.map