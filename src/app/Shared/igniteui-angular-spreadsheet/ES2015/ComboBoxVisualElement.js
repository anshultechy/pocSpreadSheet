/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { VisualElement } from "./VisualElement";
import { EventArgs, typeCast, runOn, delegateRemove, delegateCombine, markType } from "../../igniteui-angular-core/ES2015/type";
import { INotifyCollectionChanged_$type } from "../../igniteui-angular-core/ES2015/INotifyCollectionChanged";
/**
 * @hidden
 */
export class ComboBoxVisualElement extends VisualElement {
    constructor(a, b) {
        super(a, b);
        this.cj = null;
        this.cf = false;
        this.cm = null;
        this.cg = false;
        this.valueChanged = null;
    }
    bz() {
        if (typeCast(INotifyCollectionChanged_$type, this.cj) !== null) {
            let a = this.cj;
            a.collectionChanged = delegateRemove(a.collectionChanged, runOn(this, this.cp));
        }
        super.bz();
    }
    get ck() {
        return this.cj;
    }
    set ck(a) {
        if (a != this.cj) {
            if (typeCast(INotifyCollectionChanged_$type, this.cj) !== null) {
                let b = this.cj;
                b.collectionChanged = delegateRemove(b.collectionChanged, runOn(this, this.cp));
            }
            this.cj = a;
            if (typeCast(INotifyCollectionChanged_$type, this.cj) !== null) {
                let c = this.cj;
                c.collectionChanged = delegateCombine(c.collectionChanged, runOn(this, this.cp));
            }
            this.ch = true;
        }
    }
    get ch() {
        return this.cf;
    }
    set ch(a) {
        if (a != this.cf) {
            this.cf = a;
            if (a) {
                this.b1();
            }
        }
    }
    get co() {
        return this.cm;
    }
    set co(a) {
        if (a != this.cm) {
            this.cm = a;
            this.ci = true;
        }
    }
    get ci() {
        return this.cg;
    }
    set ci(a) {
        if (a != this.cg) {
            this.cg = a;
            if (a) {
                this.b1();
            }
        }
    }
    cp(a, b) {
        this.ch = true;
    }
    cq() {
        let a = this.valueChanged;
        if (a != null) {
            a(this, EventArgs.empty);
        }
    }
}
ComboBoxVisualElement.$t = markType(ComboBoxVisualElement, 'ComboBoxVisualElement', VisualElement.$);
//# sourceMappingURL=ComboBoxVisualElement.js.map
