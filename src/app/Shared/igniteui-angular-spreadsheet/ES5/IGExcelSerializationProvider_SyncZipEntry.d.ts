import { Base, Stream, Type } from "../../igniteui-angular-core/ES5/type";
import { IZipEntry } from "../../igniteui-angular-excel/ES5/documents.openxml";
import { MemoryStream } from "../../igniteui-angular-core/ES5/MemoryStream";
import { WorkItem$1 } from "../../igniteui-angular-excel/ES5/documents.core";
/**
 * @hidden
 */
export declare class IGExcelSerializationProvider_SyncZipEntry extends Base implements IZipEntry {
    static $t: Type;
    private readonly c;
    private readonly a;
    readonly b: MemoryStream;
    constructor(a: string, b: boolean, c: MemoryStream);
    readonly name: string;
    readonly isDirectory: boolean;
    openReader(): WorkItem$1<Stream>;
}
