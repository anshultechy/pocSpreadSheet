/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { DefinitionBaseDescription } from "./DefinitionBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class SectionHeaderDescription extends DefinitionBaseDescription {
    constructor() {
        super();
        this.bj = null;
        this.bi = null;
        this.bb = 0;
        this.bd = 0;
        this.bc = 0;
        this.ba = 0;
    }
    get_type() {
        return "SectionHeader";
    }
    get selectedBackground() {
        return this.bj;
    }
    set selectedBackground(a) {
        this.bj = a;
        this.e("SelectedBackground");
    }
    get actualSelectedBackground() {
        return this.bi;
    }
    set actualSelectedBackground(a) {
        this.bi = a;
        this.e("ActualSelectedBackground");
    }
    get paddingLeft() {
        return this.bb;
    }
    set paddingLeft(a) {
        this.bb = a;
        this.e("PaddingLeft");
    }
    get paddingTop() {
        return this.bd;
    }
    set paddingTop(a) {
        this.bd = a;
        this.e("PaddingTop");
    }
    get paddingRight() {
        return this.bc;
    }
    set paddingRight(a) {
        this.bc = a;
        this.e("PaddingRight");
    }
    get paddingBottom() {
        return this.ba;
    }
    set paddingBottom(a) {
        this.ba = a;
        this.e("PaddingBottom");
    }
}
SectionHeaderDescription.$t = markType(SectionHeaderDescription, 'SectionHeaderDescription', DefinitionBaseDescription.$);
//# sourceMappingURL=SectionHeaderDescription.js.map