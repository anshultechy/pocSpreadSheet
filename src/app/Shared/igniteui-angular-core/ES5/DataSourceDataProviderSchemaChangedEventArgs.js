/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { EventArgs, markType } from "./type";
/**
 * @hidden
 */
var DataSourceDataProviderSchemaChangedEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(DataSourceDataProviderSchemaChangedEventArgs, _super);
    function DataSourceDataProviderSchemaChangedEventArgs(a, b) {
        var _this = _super.call(this) || this;
        _this.d = 0;
        _this.b = null;
        _this.b = a;
        _this.d = b;
        return _this;
    }
    Object.defineProperty(DataSourceDataProviderSchemaChangedEventArgs.prototype, "schema", {
        get: function () {
            return this.b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceDataProviderSchemaChangedEventArgs.prototype, "count", {
        get: function () {
            return this.d;
        },
        enumerable: true,
        configurable: true
    });
    DataSourceDataProviderSchemaChangedEventArgs.$t = markType(DataSourceDataProviderSchemaChangedEventArgs, 'DataSourceDataProviderSchemaChangedEventArgs', EventArgs.$);
    return DataSourceDataProviderSchemaChangedEventArgs;
}(EventArgs));
export { DataSourceDataProviderSchemaChangedEventArgs };
//# sourceMappingURL=DataSourceDataProviderSchemaChangedEventArgs.js.map