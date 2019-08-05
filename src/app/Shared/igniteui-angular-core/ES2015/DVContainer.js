/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, BaseError, String_$type, Delegate_$type, markType, TypeRegistrar } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
/**
 * @hidden
 */
export class DVContainer extends Base {
    constructor() {
        super();
        this.d = new Dictionary$2(String_$type, Delegate_$type, 0);
    }
    static get instance() {
        if (DVContainer.a == null) {
            DVContainer.a = new DVContainer();
        }
        return DVContainer.a;
    }
    registerFactory(a, b) {
        this.d.addItem(a.typeName, b);
    }
    createInstance(a, b) {
        if (this.d.containsKey(a.typeName)) {
            return this.d.item(a.typeName)();
        }
        throw new BaseError(1, b());
    }
    registerIfLoaded(typeName_) {
        if (TypeRegistrar.isRegistered(typeName_)) {
            TypeRegistrar.callRegister(typeName_);
        }
    }
    checkLoaded(typeName_) {
        if (TypeRegistrar.isRegistered(typeName_)) {
            return true;
        }
        return false;
    }
}
DVContainer.$t = markType(DVContainer, 'DVContainer');
DVContainer.a = null;
//# sourceMappingURL=DVContainer.js.map