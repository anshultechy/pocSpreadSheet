import { Base, Stream, Type } from "../../igniteui-angular-core/ES5/type";
import { IZipFile, IZipEntry } from "../../igniteui-angular-excel/ES5/documents.openxml";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { WorkItem$1, WorkItem } from "../../igniteui-angular-excel/ES5/documents.core";
/**
 * @hidden
 */
export declare class IGExcelSerializationProvider_SyncZipFile extends Base implements IZipFile {
    static $t: Type;
    private readonly a;
    constructor();
    readonly entries: List$1<IZipEntry>;
    createFile(fileName: string, directoryName: string, stream: string | Uint8Array): IZipEntry;
    _createFile$i(a: string, b: string, c: Stream): IZipEntry;
    load(stream: string | Uint8Array): WorkItem$1<IZipFile>;
    _load$i(a: Stream): WorkItem$1<IZipFile>;
    save(stream: string | Uint8Array): WorkItem;
    _save$i(a: Stream): WorkItem;
}
