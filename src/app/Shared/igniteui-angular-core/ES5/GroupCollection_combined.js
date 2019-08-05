/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, ICollection_$type, IEnumerable_$type, markType, getEnumeratorObject } from "./type";
import { Group } from "./Group";
import { arrayCopyTo } from "./array";
import { StringBuilder } from "./StringBuilder";
import { netRegexToJS } from "./stringExtended";
/**
 * @hidden
 */
var GroupCollection = /** @class */ (function (_super) {
    tslib_1.__extends(GroupCollection, _super);
    function GroupCollection(a) {
        var _this = _super.call(this) || this;
        _this.f = null;
        _this.a = null;
        _this.f = a;
        var b = _this.f.j;
        var c = _this.f.p.a;
        _this.a = new Array((c.length));
        for (var d = 0; d < _this.a.length; d++) {
            var e = (c[d]);
            for (var f = 0; f < e.length; f++) {
                var g = (b[e[f]]);
                if (g != null) {
                    _this.a[d] = new Group(true, -1, g.length, g);
                }
            }
        }
        return _this;
    }
    Object.defineProperty(GroupCollection.prototype, "count", {
        get: function () {
            return this.a.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GroupCollection.prototype, "b", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GroupCollection.prototype, "isSynchronized", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GroupCollection.prototype, "syncRoot", {
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    GroupCollection.prototype.item = function (a) {
        return this.a[a] || GroupCollection.c;
    };
    GroupCollection.prototype.item1 = function (a) {
        return this.item((this.f.p.e[a]));
    };
    GroupCollection.prototype.copyTo = function (a, b) {
        arrayCopyTo(this.a, a, b);
    };
    GroupCollection.prototype.getEnumeratorObject = function () {
        return getEnumeratorObject(this.a);
    };
    GroupCollection.$t = markType(GroupCollection, 'GroupCollection', Base.$, [ICollection_$type, IEnumerable_$type]);
    GroupCollection.c = new Group(false, -1, 0, "");
    return GroupCollection;
}(Base));
export { GroupCollection };
/**
 * @hidden
 */
var Match = /** @class */ (function (_super) {
    tslib_1.__extends(Match, _super);
    function Match(a, b, c) {
        var _this = _super.call(this, c != null, c == null ? 0 : (c.index), c == null ? 0 : c[0].length, c == null ? "" : c[0]) || this;
        _this.j = null;
        _this.p = null;
        _this.k = null;
        _this.l = null;
        _this.j = c;
        _this.p = a;
        _this.k = b;
        return _this;
    }
    Object.defineProperty(Match, "n", {
        get: function () {
            return new Match(null, null, null);
        },
        enumerable: true,
        configurable: true
    });
    Match.prototype.get_m = function () {
        if (this.l == null) {
            this.l = new GroupCollection(this);
        }
        return this.l;
    };
    Object.defineProperty(Match.prototype, "m", {
        get: function () {
            return this.get_m();
        },
        enumerable: true,
        configurable: true
    });
    Match.prototype.o = function () {
        if (this.i == false) {
            return this;
        }
        return this.p.j(this.k, this.b + this.d);
    };
    Match.$t = markType(Match, 'Match', Group.$);
    return Match;
}(Group));
export { Match };
/**
 * @hidden
 */
var Regex = /** @class */ (function (_super) {
    tslib_1.__extends(Regex, _super);
    function Regex(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.d = null;
        _this.e = null;
        _this.a = null;
        _this.c = false;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    var d = [c, 0];
                    {
                        var f = d[0];
                        var g = d[1];
                        var h = "g";
                        if ((g & 1) != 0) {
                            h += "i";
                        }
                        if ((g & 2) != 0) {
                            h += "m";
                        }
                        var i = (netRegexToJS(f));
                        _this.e = i.nameToNetGroupIndexMap;
                        _this.a = (i.netToJSGroupIndexMap);
                        _this.c = (i.matchMustStartAtCurrentPosition);
                        _this.d = new RegExp(i.pattern, h);
                    }
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = "g";
                    if ((d & 1) != 0) {
                        e += "i";
                    }
                    if ((d & 2) != 0) {
                        e += "m";
                    }
                    var f = (netRegexToJS(c));
                    _this.e = f.nameToNetGroupIndexMap;
                    _this.a = (f.netToJSGroupIndexMap);
                    _this.c = (f.matchMustStartAtCurrentPosition);
                    _this.d = new RegExp(f.pattern, e);
                }
                break;
        }
        return _this;
    }
    Regex.f = function (a) {
        for (var b = 0; b < a.length; b++) {
            if (Regex.b(a.charAt(b)) == false) {
                continue;
            }
            var c = new StringBuilder(0);
            var d = a.charAt(b);
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
                var e = b;
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
    };
    Regex.b = function (a) {
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
    };
    Regex.prototype.i = function (a) {
        return this.j(a, 0);
    };
    Regex.prototype.j = function (a, b) {
        this.d.lastIndex = b;
        var c = (this.d.exec(a));
        if (c != null && this.c && b != (c.index)) {
            c = null;
        }
        return new Match(this, a, c);
    };
    Regex.prototype.g = function (a, b) {
        return (a.replace(this.d, b));
    };
    Regex.h = function (a, b, c, d) {
        var e = new Regex(1, b, d);
        return e.g(a, c);
    };
    Regex.$t = markType(Regex, 'Regex');
    return Regex;
}(Base));
export { Regex };
//# sourceMappingURL=GroupCollection_combined.js.map