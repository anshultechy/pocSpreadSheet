/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, ICollection_$type, IEnumerable_$type, markType, getEnumeratorObject } from "./type";
import { Group } from "./Group";
import { arrayCopyTo } from "./array";
import { StringBuilder } from "./StringBuilder";
import { netRegexToJS } from "./stringExtended";
/**
 * @hidden
 */
export class GroupCollection extends Base {
    constructor(a) {
        super();
        this.f = null;
        this.a = null;
        this.f = a;
        let b = this.f.j;
        let c = this.f.p.a;
        this.a = new Array((c.length));
        for (let d = 0; d < this.a.length; d++) {
            let e = (c[d]);
            for (let f = 0; f < e.length; f++) {
                let g = (b[e[f]]);
                if (g != null) {
                    this.a[d] = new Group(true, -1, g.length, g);
                }
            }
        }
    }
    get count() {
        return this.a.length;
    }
    get b() {
        return true;
    }
    get isSynchronized() {
        return false;
    }
    get syncRoot() {
        return null;
    }
    item(a) {
        return this.a[a] || GroupCollection.c;
    }
    item1(a) {
        return this.item((this.f.p.e[a]));
    }
    copyTo(a, b) {
        arrayCopyTo(this.a, a, b);
    }
    getEnumeratorObject() {
        return getEnumeratorObject(this.a);
    }
}
GroupCollection.$t = markType(GroupCollection, 'GroupCollection', Base.$, [ICollection_$type, IEnumerable_$type]);
GroupCollection.c = new Group(false, -1, 0, "");
/**
 * @hidden
 */
export class Match extends Group {
    constructor(a, b, c) {
        super(c != null, c == null ? 0 : (c.index), c == null ? 0 : c[0].length, c == null ? "" : c[0]);
        this.j = null;
        this.p = null;
        this.k = null;
        this.l = null;
        this.j = c;
        this.p = a;
        this.k = b;
    }
    static get n() {
        return new Match(null, null, null);
    }
    get_m() {
        if (this.l == null) {
            this.l = new GroupCollection(this);
        }
        return this.l;
    }
    get m() {
        return this.get_m();
    }
    o() {
        if (this.i == false) {
            return this;
        }
        return this.p.j(this.k, this.b + this.d);
    }
}
Match.$t = markType(Match, 'Match', Group.$);
/**
 * @hidden
 */
export class Regex extends Base {
    constructor(a, ..._rest) {
        super();
        this.d = null;
        this.e = null;
        this.a = null;
        this.c = false;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    let d = [c, 0];
                    {
                        let f = d[0];
                        let g = d[1];
                        let h = "g";
                        if ((g & 1) != 0) {
                            h += "i";
                        }
                        if ((g & 2) != 0) {
                            h += "m";
                        }
                        let i = (netRegexToJS(f));
                        this.e = i.nameToNetGroupIndexMap;
                        this.a = (i.netToJSGroupIndexMap);
                        this.c = (i.matchMustStartAtCurrentPosition);
                        this.d = new RegExp(i.pattern, h);
                    }
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = "g";
                    if ((d & 1) != 0) {
                        e += "i";
                    }
                    if ((d & 2) != 0) {
                        e += "m";
                    }
                    let f = (netRegexToJS(c));
                    this.e = f.nameToNetGroupIndexMap;
                    this.a = (f.netToJSGroupIndexMap);
                    this.c = (f.matchMustStartAtCurrentPosition);
                    this.d = new RegExp(f.pattern, e);
                }
                break;
        }
    }
    static f(a) {
        for (let b = 0; b < a.length; b++) {
            if (Regex.b(a.charAt(b)) == false) {
                continue;
            }
            let c = new StringBuilder(0);
            let d = a.charAt(b);
            c.m(a, 0, b);
            do {
                c.h('\\');
                switch (d) {
                    case '\t':
                        d = 't';
                        break;
                    case '\n':
                        d = 'n';
                        break;
                    case '\f':
                        d = 'f';
                        break;
                    case '\r':
                        d = 'r';
                        break;
                }
                c.h(d);
                b++;
                let e = b;
                while (b < a.length) {
                    d = a.charAt(b);
                    if (Regex.b(d)) {
                        break;
                    }
                    b++;
                }
                c.m(a, e, b - e);
            } while (b < a.length);
            return c.toString();
        }
        return a;
    }
    static b(a) {
        switch (a.charCodeAt(0)) {
            case 9:
            case 10:
            case 12:
            case 13:
            case 32:
            case 35:
            case 36:
            case 40:
            case 41:
            case 42:
            case 43:
            case 46:
            case 63:
            case 91:
            case 92:
            case 94:
            case 123:
            case 124: return true;
            default: return false;
        }
    }
    i(a) {
        return this.j(a, 0);
    }
    j(a, b) {
        this.d.lastIndex = b;
        let c = (this.d.exec(a));
        if (c != null && this.c && b != (c.index)) {
            c = null;
        }
        return new Match(this, a, c);
    }
    g(a, b) {
        return (a.replace(this.d, b));
    }
    static h(a, b, c, d) {
        let e = new Regex(1, b, d);
        return e.g(a, c);
    }
}
Regex.$t = markType(Regex, 'Regex');
//# sourceMappingURL=GroupCollection_combined.js.map