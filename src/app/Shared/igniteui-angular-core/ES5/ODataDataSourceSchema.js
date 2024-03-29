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
var ODataDataSourceSchema = /** @class */ (function (_super) {
    tslib_1.__extends(ODataDataSourceSchema, _super);
    function ODataDataSourceSchema(a, b, c) {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.c = null;
        _this.d = null;
        _this.b = null;
        _this.c = a;
        _this.d = b;
        _this.a = c;
        return _this;
    }
    Object.defineProperty(ODataDataSourceSchema.prototype, "propertyNames", {
        get: function () {
            return this.c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ODataDataSourceSchema.prototype, "primaryKey", {
        get: function () {
            return this.a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ODataDataSourceSchema.prototype, "propertyTypes", {
        get: function () {
            return this.d;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ODataDataSourceSchema.prototype, "propertyDataIntents", {
        get: function () {
            return this.b;
        },
        enumerable: true,
        configurable: true
    });
    ODataDataSourceSchema.$t = markType(ODataDataSourceSchema, 'ODataDataSourceSchema', Base.$, [IDataSourceSchema_$type]);
    return ODataDataSourceSchema;
}(Base));
export { ODataDataSourceSchema };
//# sourceMappingURL=ODataDataSourceSchema.js.map