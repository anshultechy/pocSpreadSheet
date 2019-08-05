/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, BaseError, String_$type, Delegate_$type, markType, TypeRegistrar } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
/**
 * @hidden
 */
var DVContainer = /** @class */ (function (_super) {
    tslib_1.__extends(DVContainer, _super);
    function DVContainer() {
        var _this = _super.call(this) || this;
        _this.d = new Dictionary$2(String_$type, Delegate_$type, 0);
        return _this;
    }
    Object.defineProperty(DVContainer, "instance", {
        get: function () {
            if (DVContainer.a == null) {
                DVContainer.a = new DVContainer();
            }
            return DVContainer.a;
        },
        enumerable: true,
        configurable: true
    });
    DVContainer.prototype.registerFactory = function (a, b) {
        this.d.addItem(a.typeName, b);
    };
    DVContainer.prototype.createInstance = function (a, b) {
        if (this.d.containsKey(a.typeName)) {
            return this.d.item(a.typeName)();
        }
        throw new BaseError(1, b());
    };
    DVContainer.prototype.registerIfLoaded = function (typeName_) {
        if (TypeRegistrar.isRegistered(typeName_)) {
            TypeRegistrar.callRegister(typeName_);
        }
    };
    DVContainer.prototype.checkLoaded = function (typeName_) {
        if (TypeRegistrar.isRegistered(typeName_)) {
            return true;
        }
        return false;
    };
    DVContainer.$t = markType(DVContainer, 'DVContainer');
    DVContainer.a = null;
    return DVContainer;
}(Base));
export { DVContainer };
//# sourceMappingURL=DVContainer.js.map