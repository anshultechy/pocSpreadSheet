/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Stream, typeCast, markType } from "../../igniteui-angular-core/ES2015/type";
import { IPackageFactory_$type } from "../../igniteui-angular-excel/ES2015/documents.core";
import { IGExcelSerializationProvider_SyncZipFile } from "./IGExcelSerializationProvider_SyncZipFile";
import { Package } from "../../igniteui-angular-excel/ES2015/documents.openxml";
import { MemoryStream } from "../../igniteui-angular-core/ES2015/MemoryStream";
import { b64toUint8Array } from "../../igniteui-angular-core/ES2015/stringExtended";
/**
 * @hidden
 */
export class IGExcelSerializationProvider_SyncPackageFactory extends Base {
    open(stream, packageMode) {
        arguments[0] = (typeof arguments[0] === 'string' ? b64toUint8Array(arguments[0]) : arguments[0]);
        arguments[0] = (typeCast(Stream.$, arguments[0]) ? arguments[0] : new MemoryStream(2, arguments[0]));
        return this._open$i.apply(this, arguments);
    }
    _open$i(a, b) {
        return Package._e(a, b, new IGExcelSerializationProvider_SyncZipFile());
    }
}
IGExcelSerializationProvider_SyncPackageFactory.$t = markType(IGExcelSerializationProvider_SyncPackageFactory, 'IGExcelSerializationProvider_SyncPackageFactory', Base.$, [IPackageFactory_$type]);
//# sourceMappingURL=IGExcelSerializationProvider_SyncPackageFactory.js.map
