/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { InvalidOperationException } from "./InvalidOperationException";
import { NotImplementedException } from "./NotImplementedException";
import { isLetter, isLetterOrDigit } from "./stringExtended";
/**
 * @hidden
 */
var Uri = /** @class */ (function (_super) {
    tslib_1.__extends(Uri, _super);
    function Uri(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this._value = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    var d = [c, 1, true];
                    {
                        var f = d[0];
                        var g = d[1];
                        var h = d[2];
                        _this.value = f;
                    }
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = [c, d, true];
                    {
                        var g = e[0];
                        var h = e[1];
                        var i = e[2];
                        _this.value = g;
                    }
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this.value = c;
                }
                break;
            case 3:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    throw new NotImplementedException(0);
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(Uri.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (a) {
            this._value = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "isAbsoluteUri", {
        get: function () {
            var a = this.value;
            var b = a.length;
            if (b != 0 && isLetter(a.charAt(0))) {
                for (var c = 1; c < b; c++) {
                    var d = a.charAt(c);
                    if (d == ':') {
                        return true;
                    }
                    if (d != '+' && d != '-' && d != '.' && !isLetterOrDigit(d)) {
                        break;
                    }
                }
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "scheme", {
        get: function () {
            var a = this.value;
            var b = a.length;
            if (b != 0 && isLetter(a.charAt(0))) {
                for (var c = 1; c < b; c++) {
                    var d = a.charAt(c);
                    if (d == ':') {
                        return a.substr(0, c);
                    }
                    if (d != '+' && d != '-' && d != '.' && !isLetterOrDigit(d)) {
                        break;
                    }
                }
            }
            throw new InvalidOperationException(1, "The scheme cannot be obtained from a relative Uri.");
        },
        enumerable: true,
        configurable: true
    });
    Uri.encodeURIComponent = function (a) {
        return null;
    };
    Uri.escapeUriString = function (a) {
        if ((/^([A-Z]:)|(\\\\)/i.test(a))) {
            return a;
        }
        return (encodeURI(a));
    };
    Uri.tryCreate = function (a, b, c) {
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
    };
    Uri.isWellFormedUriString = function (a, b) {
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
    };
    Uri.prototype.toString = function () {
        if ((/^([A-Z]:)|(\\\\)/i.test(this.value))) {
            return this.value;
        }
        var a = (decodeURI(this.value));
        if ((/^(http|ftp|https):\/\/[\w-]+(\.[\w-]*)+?$/i.test(a))) {
            a += "/";
        }
        return a;
    };
    Object.defineProperty(Uri.prototype, "absolutePath", {
        get: function () {
            throw new NotImplementedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "absoluteUri", {
        get: function () {
            throw new NotImplementedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "localPath", {
        get: function () {
            var a = (/^(((http|ftp|https):\/\/[\w-]+(\.[\w-]*)+)|(file:\/\/\/?))([\w\\$()!'.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?$/i.exec(this.value));
            if (a == null) {
                throw new InvalidOperationException(0);
            }
            if (a[6] != null) {
                return (decodeURI(a[6]));
            }
            return "/";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "originalString", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    Uri.prototype.isWellFormedOriginalString = function () {
        return Uri.isWellFormedUriString(this.value, 0);
    };
    Uri.$t = markType(Uri, 'Uri');
    Uri.schemeDelimiter = "://";
    return Uri;
}(Base));
export { Uri };
//# sourceMappingURL=Uri.js.map