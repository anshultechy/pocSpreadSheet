/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { TypeDescriptionPlatform_$type } from "./TypeDescriptionPlatform";
import { Dictionary$2 } from "./Dictionary$2";
import { stringContains } from "./string";
/**
 * @hidden
 */
export class TypeDescriptionMetadata extends Base {
    constructor() {
        super(...arguments);
        this._owningType = null;
        this._propertyName = null;
        this._knownType = 0;
        this._specificType = null;
        this._specificExternalType = null;
        this._collectionElementType = null;
        this.c = new Dictionary$2(TypeDescriptionPlatform_$type, String_$type, 0);
        this.d = new Dictionary$2(TypeDescriptionPlatform_$type, String_$type, 0);
    }
    get owningType() {
        return this._owningType;
    }
    set owningType(a) {
        this._owningType = a;
    }
    get propertyName() {
        return this._propertyName;
    }
    set propertyName(a) {
        this._propertyName = a;
    }
    get knownType() {
        return this._knownType;
    }
    set knownType(a) {
        this._knownType = a;
    }
    get specificType() {
        return this._specificType;
    }
    set specificType(a) {
        this._specificType = a;
    }
    get specificExternalType() {
        return this._specificExternalType;
    }
    set specificExternalType(a) {
        this._specificExternalType = a;
    }
    get collectionElementType() {
        return this._collectionElementType;
    }
    set collectionElementType(a) {
        this._collectionElementType = a;
    }
    m(a, b) {
        if (stringContains(b, "/")) {
            let c = b.split('/');
            this.d.item(a, c[1].trim());
            this.c.item(a, c[0].trim());
        }
        else {
            this.c.item(a, b.trim());
        }
    }
    static camelize(a) {
        return a.substr(0, 1).toLowerCase() + a.substr(1);
    }
    g(a) {
        let b = "";
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
    }
    static shouldCamelize(a) {
        if (a == 3 || a == 1 || a == 4 || a == 2) {
            return true;
        }
        return false;
    }
    h(a) {
        if (this.d.containsKey(a)) {
            return this.d.item(a);
        }
        else {
            return null;
        }
    }
}
TypeDescriptionMetadata.$t = markType(TypeDescriptionMetadata, 'TypeDescriptionMetadata');
//# sourceMappingURL=TypeDescriptionMetadata.js.map