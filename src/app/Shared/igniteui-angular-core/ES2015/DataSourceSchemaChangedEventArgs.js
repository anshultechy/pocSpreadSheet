/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { EventArgs, markType } from "./type";
/**
 * @hidden
 */
export class DataSourceSchemaChangedEventArgs extends EventArgs {
    constructor(a, b) {
        super();
        this.d = 0;
        this.b = null;
        this.b = a;
        this.d = b;
    }
    get schema() {
        return this.b;
    }
    get count() {
        return this.d;
    }
}
DataSourceSchemaChangedEventArgs.$t = markType(DataSourceSchemaChangedEventArgs, 'DataSourceSchemaChangedEventArgs', EventArgs.$);
//# sourceMappingURL=DataSourceSchemaChangedEventArgs.js.map