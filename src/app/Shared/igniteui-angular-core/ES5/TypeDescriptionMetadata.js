/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { TypeDescriptionPlatform_$type } from "./TypeDescriptionPlatform";
import { Dictionary$2 } from "./Dictionary$2";
import { stringContains } from "./string";
/**
 * @hidden
 */
var TypeDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(TypeDescriptionMetadata, _super);
    function TypeDescriptionMetadata() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._owningType = null;
        _this._propertyName = null;
        _this._knownType = 0;
        _this._specificType = null;
        _this._specificExternalType = null;
        _this._collectionElementType = null;
        _this.c = new Dictionary$2(TypeDescriptionPlatform_$type, String_$type, 0);
        _this.d = new Dictionary$2(TypeDescriptionPlatform_$type, String_$type, 0);
        return _this;
    }
    Object.defineProperty(TypeDescriptionMetadata.prototype, "owningType", {
        get: function () {
            return this._owningType;
        },
        set: function (a) {
            this._owningType = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeDescriptionMetadata.prototype, "propertyName", {
        get: function () {
            return this._propertyName;
        },
        set: function (a) {
            this._propertyName = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeDescriptionMetadata.prototype, "knownType", {
        get: function () {
            return this._knownType;
        },
        set: function (a) {
            this._knownType = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeDescriptionMetadata.prototype, "specificType", {
        get: function () {
            return this._specificType;
        },
        set: function (a) {
            this._specificType = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeDescriptionMetadata.prototype, "specificExternalType", {
        get: function () {
            return this._specificExternalType;
        },
        set: function (a) {
            this._specificExternalType = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeDescriptionMetadata.prototype, "collectionElementType", {
        get: function () {
            return this._collectionElementType;
        },
        set: function (a) {
            this._collectionElementType = a;
        },
        enumerable: true,
        configurable: true
    });
    TypeDescriptionMetadata.prototype.m = function (a, b) {
        if (stringContains(b, "/")) {
            var c = b.split('/');
            this.d.item(a, c[1].trim());
            this.c.item(a, c[0].trim());
        }
        else {
            this.c.item(a, b.trim());
        }
    };
    TypeDescriptionMetadata.camelize = function (a) {
        return a.substr(0, 1).toLowerCase() + a.substr(1);
    };
    TypeDescriptionMetadata.prototype.g = function (a) {
        var b = "";
        if (this.c.containsKey(a)) {
            b = this.c.item(a);
        }
        else {
            b = this.propertyName;
        }
        if (TypeDescriptionMetadata.shouldCamelize(a)) {
            return TypeDescriptionMetadata.camelize(b);
        }
        return b;
    };
    TypeDescriptionMetadata.shouldCamelize = function (a) {
        if (a == 3 || a == 1 || a == 4 || a == 2) {
            return true;
        }
        return false;
    };
    TypeDescriptionMetadata.prototype.h = function (a) {
        if (this.d.containsKey(a)) {
            return this.d.item(a);
        }
        else {
            return null;
        }
    };
    TypeDescriptionMetadata.$t = markType(TypeDescriptionMetadata, 'TypeDescriptionMetadata');
    return TypeDescriptionMetadata;
}(Base));
export { TypeDescriptionMetadata };
//# sourceMappingURL=TypeDescriptionMetadata.js.map