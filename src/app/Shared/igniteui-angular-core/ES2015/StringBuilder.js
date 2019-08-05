/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { NotImplementedException } from "./NotImplementedException";
import { Environment } from "./Environment";
import { stringFormat, stringFormat1, stringFormat2 } from "./stringExtended";
/**
 * @hidden
 */
export class StringBuilder extends Base {
    constructor(a, ..._rest) {
        super();
        this._internal = null;
        this.b = 0;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    this.internal = "";
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    {
                        this.internal = "";
                    }
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    this.internal = c;
                }
                break;
        }
    }
    get internal() {
        return this._internal;
    }
    set internal(a) {
        this._internal = a;
    }
    k(a) {
        if (a != null) {
            this.l(a.toString());
        }
        return this;
    }
    l(str_) {
        if (str_ != null) {
            this.internal = this.internal.concat(str_);
        }
        ;
        return this;
    }
    n(a) {
        let str_ = a.toString();
        this.internal = this.internal.concat(str_);
        return this;
    }
    h(chr_) {
        this.internal = this.internal.concat(chr_);
        return this;
    }
    i(chr_, count_) {
        if (chr_.repeat) {
            this.internal = this.internal.concat(chr_.repeat(count_));
        }
        else {
            for (let a = 0; a < count_; a++) {
                this.internal = this.internal.concat(chr_);
            }
        }
        return this;
    }
    j(value_) {
        this.internal = this.internal.concat(value_.toString());
        return this;
    }
    m(value_, startIndex_, count_) {
        this.internal = this.internal.concat(value_.substr(startIndex_, count_));
        return this;
    }
    g(value_, startIndex_, charCount_) {
        this.internal = this.internal.concat(value_.slice(startIndex_, startIndex_ + charCount_).join(''));
        return this;
    }
    t() {
        return this.u("");
    }
    u(str_) {
        if (str_ != null) {
            this.internal = this.internal.concat(str_);
        }
        this.internal = this.internal.concat(Environment.newLine);
        return this;
    }
    v() {
        this.internal = "";
        return this;
    }
    w(index_, chr_) {
        if (index_ == this.c) {
            this.h(chr_);
        }
        else {
            this.internal = this.internal.substring(0, index_).concat(chr_).concat(this.internal.substring(index_, this.internal.length));
        }
        return this;
    }
    x(index_, str_) {
        if (index_ == this.c) {
            this.l(str_);
        }
        else {
            this.internal = this.internal.substring(0, index_).concat(str_).concat(this.internal.substring(index_, this.internal.length));
        }
        return this;
    }
    y(startIndex_, length_) {
        this.internal = this.internal.substring(0, startIndex_).concat(this.internal.substring(startIndex_ + length_, this.internal.length));
        return this;
    }
    z(oldCh_, newCh_) {
        this.internal = this.internal.replace(oldCh_, newCh_);
        return this;
    }
    toString() {
        return this.internal;
    }
    f(a, b) {
        return this.internal.substr(a, b);
    }
    get c() {
        return this.internal.length;
    }
    set c(a) {
        if (a <= this.c) {
            this.internal = this.internal.substring(0, a);
        }
        else {
            throw new NotImplementedException(0);
        }
    }
    item(index_, a) {
        if (arguments.length === 2) {
            this.internal = this.internal.substring(0, index_).concat(a).concat(this.internal.substring(index_ + 1, this.internal.length));
            return a;
        }
        else {
            return this.internal.charAt(index_);
        }
    }
    q(a, b) {
        return this.l(stringFormat(a, b));
    }
    p(a, ...b) {
        return this.l(stringFormat1(a, ...b));
    }
    o(a, b, ...c) {
        return this.l(stringFormat2(a, b, ...c));
    }
    r(a, b, c) {
        return this.l(stringFormat(a, b, c));
    }
    s(a, b, c, d) {
        return this.l(stringFormat(a, b, c, d));
    }
}
StringBuilder.$t = markType(StringBuilder, 'StringBuilder');
//# sourceMappingURL=StringBuilder.js.map