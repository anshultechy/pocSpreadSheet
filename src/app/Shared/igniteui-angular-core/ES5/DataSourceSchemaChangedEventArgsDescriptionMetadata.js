/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { DataSourceSchemaChangedEventArgsDescription } from "./DataSourceSchemaChangedEventArgsDescription";
/**
 * @hidden
 */
var DataSourceSchemaChangedEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(DataSourceSchemaChangedEventArgsDescriptionMetadata, _super);
    function DataSourceSchemaChangedEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataSourceSchemaChangedEventArgsDescriptionMetadata.b = function (a) {
        if (DataSourceSchemaChangedEventArgsDescriptionMetadata.a == null) {
            DataSourceSchemaChangedEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            DataSourceSchemaChangedEventArgsDescriptionMetadata.c(a, DataSourceSchemaChangedEventArgsDescriptionMetadata.a);
        }
    };
    DataSourceSchemaChangedEventArgsDescriptionMetadata.c = function (a, b) {
    };
    DataSourceSchemaChangedEventArgsDescriptionMetadata.d = function (a) {
        DataSourceSchemaChangedEventArgsDescriptionMetadata.b(a);
        a.n("DataSourceSchemaChangedEventArgs", function () { return new DataSourceSchemaChangedEventArgsDescription(); });
        a.m("DataSourceSchemaChangedEventArgs", DataSourceSchemaChangedEventArgsDescriptionMetadata.a);
    };
    DataSourceSchemaChangedEventArgsDescriptionMetadata.$t = markType(DataSourceSchemaChangedEventArgsDescriptionMetadata, 'DataSourceSchemaChangedEventArgsDescriptionMetadata');
    DataSourceSchemaChangedEventArgsDescriptionMetadata.a = null;
    return DataSourceSchemaChangedEventArgsDescriptionMetadata;
}(Base));
export { DataSourceSchemaChangedEventArgsDescriptionMetadata };
//# sourceMappingURL=DataSourceSchemaChangedEventArgsDescriptionMetadata.js.map