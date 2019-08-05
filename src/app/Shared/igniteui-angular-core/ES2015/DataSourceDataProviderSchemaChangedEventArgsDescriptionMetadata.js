/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { DataSourceDataProviderSchemaChangedEventArgsDescription } from "./DataSourceDataProviderSchemaChangedEventArgsDescription";
/**
 * @hidden
 */
export class DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata.a == null) {
            DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata.c(a, DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
    }
    static d(a) {
        DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata.b(a);
        a.n("DataSourceDataProviderSchemaChangedEventArgs", () => new DataSourceDataProviderSchemaChangedEventArgsDescription());
        a.m("DataSourceDataProviderSchemaChangedEventArgs", DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata.a);
    }
}
DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata.$t = markType(DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata, 'DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata');
DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata.js.map