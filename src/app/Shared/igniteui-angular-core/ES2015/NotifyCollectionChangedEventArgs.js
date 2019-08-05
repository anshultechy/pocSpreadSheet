/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { EventArgs, Base, markType } from "./type";
import { List$1 } from "./List$1";
/**
 * @hidden
 */
export class NotifyCollectionChangedEventArgs extends EventArgs {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    super();
                    this.f = 0;
                    this.b = null;
                    this.h = 0;
                    this.c = null;
                    this.i = 0;
                    this.f = c;
                    this.c = new List$1(Base.$, 0);
                    this.b = new List$1(Base.$, 0);
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    super();
                    this.f = 0;
                    this.b = null;
                    this.h = 0;
                    this.c = null;
                    this.i = 0;
                    this.f = c;
                    this.c = new List$1(Base.$, 0);
                    if (this.f == 1 || this.f == 2) {
                        this.c.add(d);
                        this.i = e;
                    }
                    if (this.f != 1) {
                        this.b = ((() => {
                            let $ret = new List$1(Base.$, 0);
                            $ret.add1(d);
                            return $ret;
                        })());
                    }
                    else {
                        this.b = new List$1(Base.$, 0);
                    }
                    this.h = e;
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    let f = _rest[3];
                    super();
                    this.f = 0;
                    this.b = null;
                    this.h = 0;
                    this.c = null;
                    this.i = 0;
                    this.f = c;
                    this.h = f;
                    this.i = f;
                    this.b = ((() => {
                        let $ret = new List$1(Base.$, 0);
                        $ret.add1(d);
                        return $ret;
                    })());
                    this.c = ((() => {
                        let $ret = new List$1(Base.$, 0);
                        $ret.add1(e);
                        return $ret;
                    })());
                }
                break;
        }
    }
    get action() {
        return this.f;
    }
    get newItems() {
        return this.b;
    }
    get newStartingIndex() {
        return this.h;
    }
    get oldItems() {
        return this.c;
    }
    get oldStartingIndex() {
        return this.i;
    }
}
NotifyCollectionChangedEventArgs.$t = markType(NotifyCollectionChangedEventArgs, 'NotifyCollectionChangedEventArgs', EventArgs.$);
//# sourceMappingURL=NotifyCollectionChangedEventArgs.js.map