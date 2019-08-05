/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
/**
 * @hidden
 */
export class DeferredOperation extends Base {
    constructor(a) {
        super();
        this.h = null;
        this.g = 0;
        this.b = null;
        this.c = false;
        this.b = a;
    }
    get d() {
        return this.h != null;
    }
    get e() {
        return this.c;
    }
    k() {
        if (this.h == null) {
            return;
        }
        this.h = null;
        let a = this.c;
        this.c = true;
        try {
            this.b();
        }
        finally {
            this.c = a;
        }
    }
    i() {
        if (this.h != null) {
            this.h = null;
            if (this == DeferredOperation.a) {
                window.clearTimeout(this.g);
            }
            else if (DeferredOperation.f.remove(this) && DeferredOperation.f.count == 0) {
                DeferredOperation.a.i();
            }
        }
    }
    m() {
        if (this.h != null) {
            return;
        }
        if (DeferredOperation.a == null) {
            DeferredOperation.j();
        }
        let a = {};
        this.h = a;
        if (this == DeferredOperation.a) {
            this.g = window.setTimeout(() => this.l(a), 0);
        }
        else {
            DeferredOperation.f.add(this);
            DeferredOperation.a.m();
        }
    }
    static j() {
        if (DeferredOperation.a == null) {
            DeferredOperation.f = new List$1(DeferredOperation.$, 0);
            DeferredOperation.a = new DeferredOperation(() => {
                let a = DeferredOperation.f.toArray();
                DeferredOperation.f.clear();
                for (let b = 0; b < a.length; b++) {
                    if (a[b] != null) {
                        a[b].k();
                    }
                }
            });
        }
    }
    l(a) {
        if (a != this.h) {
            return;
        }
        this.k();
    }
}
DeferredOperation.$t = markType(DeferredOperation, 'DeferredOperation');
DeferredOperation.f = null;
DeferredOperation.a = null;
//# sourceMappingURL=DeferredOperation.js.map
