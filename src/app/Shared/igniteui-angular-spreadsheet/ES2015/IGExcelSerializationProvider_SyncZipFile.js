/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Stream, typeCast, fromEn, markType } from "../../igniteui-angular-core/ES2015/type";
import { IZipEntry_$type, IZipFile_$type } from "../../igniteui-angular-excel/ES2015/documents.openxml";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { MemoryStream } from "../../igniteui-angular-core/ES2015/MemoryStream";
import { DocCoreUtils, WorkItem } from "../../igniteui-angular-excel/ES2015/documents.core";
import { IOPath } from "../../igniteui-angular-core/ES2015/IOPath";
import { IGExcelSerializationProvider_SyncZipEntry } from "./IGExcelSerializationProvider_SyncZipEntry";
import { b64toUint8Array } from "../../igniteui-angular-core/ES2015/stringExtended";
import { stringReplace } from "../../igniteui-angular-core/ES2015/string";
import * as UZIP from "uzip/UZIP";
 
/**
 * @hidden
 */
export class IGExcelSerializationProvider_SyncZipFile extends Base {
    constructor() {
        super();
        this.a = null;
        this.a = new List$1(IZipEntry_$type, 0);
    }
    get entries() {
        return this.a;
    }
    createFile(fileName, directoryName, stream) {
        arguments[2] = (typeof arguments[2] === 'string' ? b64toUint8Array(arguments[2]) : arguments[2]);
        arguments[2] = (typeCast(Stream.$, arguments[2]) ? arguments[2] : new MemoryStream(2, arguments[2]));
        return this._createFile$i.apply(this, arguments);
    }
    _createFile$i(a, b, c) {
        let d = typeCast(MemoryStream.$, c);
        if (d == null) {
            let e = DocCoreUtils.c(c);
            d = new MemoryStream(2, e);
        }
        return new IGExcelSerializationProvider_SyncZipEntry(stringReplace(IOPath.combine1(b, a), '\\', '/'), false, d);
    }
    load(stream) {
        arguments[0] = (typeof arguments[0] === 'string' ? b64toUint8Array(arguments[0]) : arguments[0]);
        arguments[0] = (typeCast(Stream.$, arguments[0]) ? arguments[0] : new MemoryStream(2, arguments[0]));
        return this._load$i.apply(this, arguments);
    }
    _load$i(a) {
        let b = null;
        let c = typeCast(MemoryStream.$, a);
        if (c != null) {
            b = c.getBuffer();
            if (b.length != a.length) {
                b = null;
            }
        }
        if (b == null) {
            b = new Array(a.length);
            a.read(b, 0, b.length);
        }
        let d = new Uint8Array(b).buffer;
        let e = UZIP.parse(d);
        let f = (Object.getOwnPropertyNames(e));
        for (let g of fromEn(f)) {
            let h = g;
            let i = (e[g]);
            let j = new IGExcelSerializationProvider_SyncZipEntry(h, false, new MemoryStream(2, i));
            this.entries.add(j);
        }
        return WorkItem.h(IZipFile_$type, this);
    }
    save(stream) {
        arguments[0] = (typeof arguments[0] === 'string' ? b64toUint8Array(arguments[0]) : arguments[0]);
        arguments[0] = (typeCast(Stream.$, arguments[0]) ? arguments[0] : new MemoryStream(2, arguments[0]));
        return this._save$i.apply(this, arguments);
    }
    _save$i(a) {
        let b = {};
        for (let c = 0; c < this.a.count; c++) {
            let d = this.a._inner[c];
            if (!d.isDirectory) {
                let e = d.name;
                if (e.charAt(0) == '/') {
                    e = e.substr(1);
                }
                let f = new Uint8Array(d.b.toArray());
                b[e] = f;
            }
        }
        let g = (new Uint8Array(UZIP.encode(b)));
        a.write(g, 0, g.length);
        return null;
    }
}
IGExcelSerializationProvider_SyncZipFile.$t = markType(IGExcelSerializationProvider_SyncZipFile, 'IGExcelSerializationProvider_SyncZipFile', Base.$, [IZipFile_$type]);
//# sourceMappingURL=IGExcelSerializationProvider_SyncZipFile.js.map
