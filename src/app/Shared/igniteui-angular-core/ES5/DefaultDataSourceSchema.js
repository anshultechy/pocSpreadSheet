/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { IDataSourceSchema_$type } from "./IDataSourceSchema";
/**
 * @hidden
 */
var DefaultDataSourceSchema = /** @class */ (function (_super) {
    tslib_1.__extends(DefaultDataSourceSchema, _super);
    function DefaultDataSourceSchema(a, b, c, d) {
        var _this = _super.call(this) || this;
        _this.c = null;
        _this.d = null;
        _this.a = null;
        _this.b = null;
        _this.c = a;
        _this.d = b;
        _this.a = c;
        _this.b = d;
        return _this;
    }
    Object.defineProperty(DefaultDataSourceSchema.prototype, "primaryKey", {
        get: function () {
            return this.a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultDataSourceSchema.prototype, "propertyNames", {
        get: function () {
            return this.c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultDataSourceSchema.prototype, "propertyTypes", {
        get: function () {
            return this.d;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultDataSourceSchema.prototype, "propertyDataIntents", {
        get: function () {
            return this.b;
        },
        enumerable: true,
        configurable: true
    });
    DefaultDataSourceSchema.$t = markType(DefaultDataSourceSchema, 'DefaultDataSourceSchema', Base.$, [IDataSourceSchema_$type]);
    return DefaultDataSourceSchema;
}(Base));
export { DefaultDataSourceSchema };
//# sourceMappingURL=DefaultDataSourceSchema.js.map