/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, BaseError, markType } from "./type";
import { WebHeaderCollection } from "./WebHeaderCollection";
import { UploadStringCompletedEventArgs } from "./UploadStringCompletedEventArgs";
import { UploadDataCompletedEventArgs } from "./UploadDataCompletedEventArgs";
import { NotImplementedException } from "./NotImplementedException";
/**
 * @hidden
 */
var WebClient = /** @class */ (function (_super) {
    tslib_1.__extends(WebClient, _super);
    function WebClient() {
        var _this = _super.call(this) || this;
        _this.e = null;
        _this.d = null;
        _this.a = null;
        _this.uploadStringCompleted = null;
        _this.uploadDataCompleted = null;
        _this.d = new WebHeaderCollection();
        return _this;
    }
    WebClient.prototype.k = function (a, b, c, d) {
        var _this = this;
        this.g(a, b, c).i(function (e) {
            if (_this.uploadStringCompleted != null) {
                var f = null;
                var g = null;
                try {
                    f = e.m;
                }
                catch (h) {
                    g = (h);
                }
                _this.uploadStringCompleted(_this, new UploadStringCompletedEventArgs(f, g, e.g == 6, d));
            }
        });
    };
    WebClient.prototype.g = function (a, b, c) {
        var url_ = a.value;
        var method_ = b;
        var data_ = c;
        var contentType_ = this.d.item("Content-Type");
        var credentials_ = this.a;
        throw new NotImplementedException(0);
    };
    WebClient.prototype.j = function (a, b, c, d) {
        var _this = this;
        this.f(a, b, c).i(function (e) {
            if (_this.uploadDataCompleted != null) {
                var f = null;
                var g = null;
                try {
                    f = e.m;
                }
                catch (h) {
                    g = (h);
                }
                _this.uploadDataCompleted(_this, new UploadDataCompletedEventArgs(f, g, e.g == 6, d));
            }
        });
    };
    WebClient.prototype.f = function (a, b, c) {
        var url_ = a.value;
        var method_ = b;
        var data_ = c;
        var contentType_ = this.d.item("Content-Type");
        var credentials_ = this.a;
        throw new NotImplementedException(0);
    };
    WebClient.prototype.i = function (a, b, c, d) {
        a.e(b);
    };
    WebClient.prototype.h = function (a, b, c, d) {
        a.d(new BaseError(1, d));
    };
    WebClient.$t = markType(WebClient, 'WebClient');
    return WebClient;
}(Base));
export { WebClient };
//# sourceMappingURL=WebClient.js.map