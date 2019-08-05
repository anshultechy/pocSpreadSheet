/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Stream, markType } from "../../igniteui-angular-core/ES2015/type";
import { IZipEntry_$type } from "../../igniteui-angular-excel/ES2015/documents.openxml";
import { WorkItem } from "../../igniteui-angular-excel/ES2015/documents.core";
/**
 * @hidden
 */
export class IGExcelSerializationProvider_SyncZipEntry extends Base {
    constructor(a, b, c) {
        super();
        this.c = null;
        this.a = false;
        this.b = null;
        this.c = a;
        this.a = b;
        this.b = c;
    }
    get name() {
        return this.c;
    }
    get isDirectory() {
        return this.a;
    }
    openReader() {
        return WorkItem.h(Stream.$, this.b);
    }
}
IGExcelSerializationProvider_SyncZipEntry.$t = markType(IGExcelSerializationProvider_SyncZipEntry, 'IGExcelSerializationProvider_SyncZipEntry', Base.$, [IZipEntry_$type]);
//# sourceMappingURL=IGExcelSerializationProvider_SyncZipEntry.js.map
