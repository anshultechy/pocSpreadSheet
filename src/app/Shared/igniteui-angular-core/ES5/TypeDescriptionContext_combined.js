/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Type, String_$type, Delegate_$type, EnumUtil, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { TypeDescriptionMetadata } from "./TypeDescriptionMetadata";
import { TypeDescriptionWellKnownType_$type } from "./TypeDescriptionWellKnownType";
import { stringReplace } from "./string";
/**
 * @hidden
 */
var TypeDescriptionContext = /** @class */ (function (_super) {
    tslib_1.__extends(TypeDescriptionContext, _super);
    function TypeDescriptionContext(a, b) {
        var _this = _super.call(this) || this;
        _this.e = new Dictionary$2(String_$type, Base.$, 0);
        _this.d = new Dictionary$2(String_$type, Delegate_$type, 0);
        _this.a = null;
        _this.c = 0;
        _this.a = a;
        _this.c = b;
        return _this;
    }
    TypeDescriptionContext.prototype.m = function (a, b) {
        this.e.item(a, b);
    };
    TypeDescriptionContext.prototype.n = function (a, b) {
        this.d.item(a, b);
    };
    TypeDescriptionContext.l = function (key_) {
        if (key_ == null) {
            return null;
        }
        return key_.substr(0, 1).toUpperCase() + key_.substr(1);
    };
    TypeDescriptionContext.k = function (key_) {
        if (key_ == null) {
            return null;
        }
        return key_.substr(0, 1).toLowerCase() + key_.substr(1);
    };
    TypeDescriptionContext.prototype.b = function (a, b) {
        if (this.e.containsKey(a + "@@" + b)) {
            return this.e.item(a + "@@" + b);
        }
        if (this.e.containsKey(a)) {
            var c = new TypeDescriptionMetadata();
            c.owningType = a;
            c.propertyName = b;
            var d = this.e.item(a);
            if (!d.containsKey(b)) {
                this.e.item(a + "@@" + b, null);
                return null;
            }
            var e = d.item(b);
            var f = "Unknown";
            var g = null;
            var h = null;
            var i = null;
            var j = e.split(')');
            if (j.length > 1) {
                var k = j[0];
                e = j[1];
                k = stringReplace(k, "(", "");
                var l = k.split(',');
                for (var n = 0; n < l.length; n++) {
                    var m = l[n];
                    var o = m.split(':');
                    var p = o[0];
                    var q = o[1];
                    var r = 3;
                    switch (p) {
                        case "web":
                            c.m(3, q);
                            c.m(2, q);
                            c.m(4, q);
                            c.m(1, q);
                            continue;
                        case "w":
                            r = 0;
                            break;
                        case "a":
                            r = 3;
                            break;
                        case "r":
                            r = 2;
                            break;
                        case "j":
                            r = 1;
                            break;
                        case "wc":
                            r = 4;
                            break;
                        case "xf":
                            r = 5;
                            break;
                        case "xa":
                            r = 6;
                            break;
                        case "xi":
                            r = 7;
                            break;
                        case "wf":
                            r = 8;
                            break;
                    }
                    c.m(r, q);
                }
            }
            var s = e.split(':');
            if (s.length >= 4) {
                i = s[3];
            }
            if (s.length >= 3) {
                g = s[2];
            }
            if (s.length >= 2) {
                h = s[1];
            }
            if (s.length >= 1) {
                f = s[0];
            }
            c.knownType = EnumUtil.getEnumValue(TypeDescriptionWellKnownType_$type, EnumUtil.parse(TypeDescriptionWellKnownType_$type, f, true));
            c.specificExternalType = h;
            c.specificType = g;
            c.collectionElementType = i;
            this.e.item(a + "@@" + b, c);
            return c;
        }
        return null;
    };
    TypeDescriptionContext.prototype.i = function (a) {
        if (this.d.containsKey(a)) {
            return this.d.item(a)();
        }
        return null;
    };
    TypeDescriptionContext.prototype.o = function (a, b, c) {
        if (TypeDescriptionMetadata.shouldCamelize(this.c)) {
            b = TypeDescriptionContext.k(b);
        }
        else {
            b = TypeDescriptionContext.l(b);
        }
        this.a.setPropertyValue(a, b, c, null);
    };
    TypeDescriptionContext.prototype.h = function (a) {
        return this.a.createColorCollection(a);
    };
    TypeDescriptionContext.prototype.g = function (a) {
        return this.a.createBrushCollection(a);
    };
    TypeDescriptionContext.prototype.j = function (a, b) {
        return this.a.createObject(a, b, this);
    };
    TypeDescriptionContext.prototype.f = function (a, b) {
        return this.a.coerceToEnum(a, this, b);
    };
    TypeDescriptionContext.$t = markType(TypeDescriptionContext, 'TypeDescriptionContext');
    return TypeDescriptionContext;
}(Base));
export { TypeDescriptionContext };
/**
 * @hidden
 */
export var IComponentRendererAdapter_$type = new Type(null, 'IComponentRendererAdapter');
//# sourceMappingURL=TypeDescriptionContext_combined.js.map