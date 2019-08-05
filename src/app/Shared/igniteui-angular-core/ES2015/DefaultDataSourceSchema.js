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
export class DefaultDataSourceSchema extends Base {
    constructor(a, b, c, d) {
        super();
        this.c = null;
        this.d = null;
        this.a = null;
        this.b = null;
        this.c = a;
        this.d = b;
        this.a = c;
        this.b = d;
    }
    get primaryKey() {
        return this.a;
    }
    get propertyNames() {
        return this.c;
    }
    get propertyTypes() {
        return this.d;
    }
    get propertyDataIntents() {
        return this.b;
    }
}
DefaultDataSourceSchema.$t = markType(DefaultDataSourceSchema, 'DefaultDataSourceSchema', Base.$, [IDataSourceSchema_$type]);
//# sourceMappingURL=DefaultDataSourceSchema.js.map