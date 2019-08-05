/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Stream, typeCast, markType } from "../../igniteui-angular-core/ES5/type";
import { IPackageFactory_$type } from "../../igniteui-angular-excel/ES5/documents.core";
import { IGExcelSerializationProvider_SyncZipFile } from "./IGExcelSerializationProvider_SyncZipFile";
import { Package } from "../../igniteui-angular-excel/ES5/documents.openxml";
import { MemoryStream } from "../../igniteui-angular-core/ES5/MemoryStream";
import { b64toUint8Array } from "../../igniteui-angular-core/ES5/stringExtended";
/**
 * @hidden
 */
var IGExcelSerializationProvider_SyncPackageFactory = /** @class */ (function (_super) {
    tslib_1.__extends(IGExcelSerializationProvider_SyncPackageFactory, _super);
    function IGExcelSerializationProvider_SyncPackageFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IGExcelSerializationProvider_SyncPackageFactory.prototype.open = function (stream, packageMode) {
        arguments[0] = (typeof arguments[0] === 'string' ? b64toUint8Array(arguments[0]) : arguments[0]);
        arguments[0] = (typeCast(Stream.$, arguments[0]) ? arguments[0] : new MemoryStream(2, arguments[0]));
        return this._open$i.apply(this, arguments);
    };
    IGExcelSerializationProvider_SyncPackageFactory.prototype._open$i = function (a, b) {
        return Package._e(a, b, new IGExcelSerializationProvider_SyncZipFile());
    };
    IGExcelSerializationProvider_SyncPackageFactory.$t = markType(IGExcelSerializationProvider_SyncPackageFactory, 'IGExcelSerializationProvider_SyncPackageFactory', Base.$, [IPackageFactory_$type]);
    return IGExcelSerializationProvider_SyncPackageFactory;
}(Base));
export { IGExcelSerializationProvider_SyncPackageFactory };
//# sourceMappingURL=IGExcelSerializationProvider_SyncPackageFactory.js.map
