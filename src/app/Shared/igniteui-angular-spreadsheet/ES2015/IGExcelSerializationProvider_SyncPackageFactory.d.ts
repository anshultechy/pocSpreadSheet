import { Base, Stream, Type } from "../../igniteui-angular-core/ES2015/type";
import { IPackageFactory, WorkItem$1, IPackage, FileMode } from "../../igniteui-angular-excel/ES2015/documents.core";
/**
 * @hidden
 */
export declare class IGExcelSerializationProvider_SyncPackageFactory extends Base implements IPackageFactory {
    static $t: Type;
    open(stream: string | Uint8Array, packageMode: FileMode): WorkItem$1<IPackage>;
    _open$i(a: Stream, b: FileMode): WorkItem$1<IPackage>;
}
