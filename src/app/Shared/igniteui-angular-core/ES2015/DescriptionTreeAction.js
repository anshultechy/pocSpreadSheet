/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { TypeDescriptionMetadata } from "./TypeDescriptionMetadata";
import { stringEndsWith } from "./string";
/**
 * @hidden
 */
export class DescriptionTreeAction extends Base {
    constructor() {
        super(...arguments);
        this.a = 0;
        this.b = null;
        this.c = null;
        this.i = null;
        this.g = null;
        this.f = null;
        this.e = 0;
        this.d = 0;
    }
    h(a) {
        let b = this.i;
        if (this.c != null) {
            b = this.c.g(a);
        }
        else {
            if (TypeDescriptionMetadata.shouldCamelize(a)) {
                b = TypeDescriptionMetadata.camelize(this.i);
            }
        }
        if (stringEndsWith(b, "Ref")) {
            b = b.substr(0, b.length - ("Ref").length);
        }
        return b;
    }
}
DescriptionTreeAction.$t = markType(DescriptionTreeAction, 'DescriptionTreeAction');
//# sourceMappingURL=DescriptionTreeAction.js.map