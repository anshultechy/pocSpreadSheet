/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { ISectionInformation_$type } from "./ISectionInformation";
/**
 * @hidden
 */
export class DefaultSectionInformation extends Base {
    constructor(a, b, c, d) {
        super();
        this.d = 0;
        this.c = 0;
        this.a = null;
        this.b = null;
        this.d = a;
        this.c = b;
        this.a = c;
        this.b = d;
    }
    get startIndex() {
        return this.d;
    }
    get endIndex() {
        return this.c;
    }
    get groupKeyValues() {
        return this.b;
    }
    get groupKeyProperties() {
        return this.a;
    }
}
DefaultSectionInformation.$t = markType(DefaultSectionInformation, 'DefaultSectionInformation', Base.$, [ISectionInformation_$type]);
//# sourceMappingURL=DefaultSectionInformation.js.map