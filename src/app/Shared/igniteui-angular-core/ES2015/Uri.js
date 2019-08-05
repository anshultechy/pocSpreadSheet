/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { InvalidOperationException } from "./InvalidOperationException";
import { NotImplementedException } from "./NotImplementedException";
import { isLetter, isLetterOrDigit } from "./stringExtended";
/**
 * @hidden
 */
export class Uri extends Base {
    constructor(a, ..._rest) {
        super();
        this._value = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    let d = [c, 1, true];
                    {
                        let f = d[0];
                        let g = d[1];
                        let h = d[2];
                        this.value = f;
                    }
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = [c, d, true];
                    {
                        let g = e[0];
                        let h = e[1];
                        let i = e[2];
                        this.value = g;
                    }
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    this.value = c;
                }
                break;
            case 3:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    throw new NotImplementedException(0);
                }
                break;
        }
    }
    get value() {
        return this._value;
    }
    set value(a) {
        this._value = a;
    }
    get isAbsoluteUri() {
        let a = this.value;
        let b = a.length;
        if (b != 0 && isLetter(a.charAt(0))) {
            for (let c = 1; c < b; c++) {
                let d = a.charAt(c);
                if (d == ':') {
                    return true;
                }
                if (d != '+' && d != '-' && d != '.' && !isLetterOrDigit(d)) {
                    break;
                }
            }
        }
        return false;
    }
    get scheme() {
        let a = this.value;
        let b = a.length;
        if (b != 0 && isLetter(a.charAt(0))) {
            for (let c = 1; c < b; c++) {
                let d = a.charAt(c);
                if (d == ':') {
                    return a.substr(0, c);
                }
                if (d != '+' && d != '-' && d != '.' && !isLetterOrDigit(d)) {
                    break;
                }
            }
        }
        throw new InvalidOperationException(1, "The scheme cannot be obtained from a relative Uri.");
    }
    static encodeURIComponent(a) {
        return null;
    }
    static escapeUriString(a) {
        if ((/^([A-Z]:)|(\\\\)/i.test(a))) {
            return a;
        }
        return (encodeURI(a));
    }
    static tryCreate(a, b, c) {
        if (Uri.isWellFormedUriString(a, b)) {
            c = new Uri(2, a, b, false);
            return {
                ret: true,
                p2: c
            };
        }
        c = null;
        return {
            ret: false,
            p2: c
        };
    }
    static isWellFormedUriString(a, b) {
        switch (b) {
            case 1:
                if (!(/^(((http|ftp|https):\/\/[\w-]+(\.[\w-]*)+)|(file:\/\/\/?))([\w\\$()!'.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?$/i.test(a))) {
                    return false;
                }
                break;
            case 2:
                if (!(/^([\w\\$()!'.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?$/i.test(a))) {
                    return false;
                }
                break;
            default:
            case 0:
                if (!(/^((((http|ftp|https):\/\/[\w-]+(\.[\w-]*)+)|(file:\/\/\/?)))?([\w\\$()!'.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?$/i.test(a))) {
                    return false;
                }
                break;
        }
        return true;
    }
    toString() {
        if ((/^([A-Z]:)|(\\\\)/i.test(this.value))) {
            return this.value;
        }
        let a = (decodeURI(this.value));
        if ((/^(http|ftp|https):\/\/[\w-]+(\.[\w-]*)+?$/i.test(a))) {
            a += "/";
        }
        return a;
    }
    get absolutePath() {
        throw new NotImplementedException(0);
    }
    get absoluteUri() {
        throw new NotImplementedException(0);
    }
    get localPath() {
        let a = (/^(((http|ftp|https):\/\/[\w-]+(\.[\w-]*)+)|(file:\/\/\/?))([\w\\$()!'.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?$/i.exec(this.value));
        if (a == null) {
            throw new InvalidOperationException(0);
        }
        if (a[6] != null) {
            return (decodeURI(a[6]));
        }
        return "/";
    }
    get originalString() {
        return this.value;
    }
    isWellFormedOriginalString() {
        return Uri.isWellFormedUriString(this.value, 0);
    }
}
Uri.$t = markType(Uri, 'Uri');
Uri.schemeDelimiter = "://";
//# sourceMappingURL=Uri.js.map