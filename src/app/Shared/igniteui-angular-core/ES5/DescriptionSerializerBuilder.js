/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { StringBuilder } from "./StringBuilder";
/**
 * @hidden
 */
var DescriptionSerializerBuilder = /** @class */ (function (_super) {
    tslib_1.__extends(DescriptionSerializerBuilder, _super);
    function DescriptionSerializerBuilder() {
        var _this = _super.call(this) || this;
        _this.d = null;
        _this.b = 0;
        _this.a = false;
        _this.d = new StringBuilder(0);
        return _this;
    }
    DescriptionSerializerBuilder.prototype.toString = function () {
        return this.d.toString();
    };
    DescriptionSerializerBuilder.prototype.e = function (a) {
        this.g();
        this.d.l(a);
    };
    DescriptionSerializerBuilder.prototype.f = function (a) {
        this.g();
        this.d.u(a);
        this.a = true;
    };
    DescriptionSerializerBuilder.prototype.g = function () {
        if (this.a) {
            for (var a = 0; a < this.b; a++) {
                this.d.l("\t");
            }
            this.a = false;
        }
    };
    DescriptionSerializerBuilder.prototype.i = function () {
        this.b++;
    };
    DescriptionSerializerBuilder.prototype.h = function () {
        this.b--;
    };
    DescriptionSerializerBuilder.$t = markType(DescriptionSerializerBuilder, 'DescriptionSerializerBuilder');
    return DescriptionSerializerBuilder;
}(Base));
export { DescriptionSerializerBuilder };
//# sourceMappingURL=DescriptionSerializerBuilder.js.map