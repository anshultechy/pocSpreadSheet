/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { IDataSourceSchema_$type } from "./IDataSourceSchema";
/**
 * @hidden
 */
export class ODataDataSourceSchema extends Base {
    constructor(a, b, c) {
        super();
        this.a = null;
        this.c = null;
        this.d = null;
        this.b = null;
        this.c = a;
        this.d = b;
        this.a = c;
    }
    get propertyNames() {
        return this.c;
    }
    get primaryKey() {
        return this.a;
    }
    get propertyTypes() {
        return this.d;
    }
    get propertyDataIntents() {
        return this.b;
    }
}
ODataDataSourceSchema.$t = markType(ODataDataSourceSchema, 'ODataDataSourceSchema', Base.$, [IDataSourceSchema_$type]);
//# sourceMappingURL=ODataDataSourceSchema.js.map