/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { DataSourceDataProviderSchemaChangedEventArgsDescription } from "./DataSourceDataProviderSchemaChangedEventArgsDescription";
/**
 * @hidden
 */
var DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata, _super);
    function DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata.b = function (a) {
        if (DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata.a == null) {
            DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata.c(a, DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata.a);
        }
    };
    DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata.c = function (a, b) {
    };
    DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata.d = function (a) {
        DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata.b(a);
        a.n("DataSourceDataProviderSchemaChangedEventArgs", function () { return new DataSourceDataProviderSchemaChangedEventArgsDescription(); });
        a.m("DataSourceDataProviderSchemaChangedEventArgs", DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata.a);
    };
    DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata.$t = markType(DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata, 'DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata');
    DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata.a = null;
    return DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata;
}(Base));
export { DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata };
//# sourceMappingURL=DataSourceDataProviderSchemaChangedEventArgsDescriptionMetadata.js.map