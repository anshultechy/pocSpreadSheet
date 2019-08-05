/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Stream, typeCast, fromEn, markType } from "../../igniteui-angular-core/ES5/type";
import { IZipEntry_$type, IZipFile_$type } from "../../igniteui-angular-excel/ES5/documents.openxml";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { MemoryStream } from "../../igniteui-angular-core/ES5/MemoryStream";
import { DocCoreUtils, WorkItem } from "../../igniteui-angular-excel/ES5/documents.core";
import { IOPath } from "../../igniteui-angular-core/ES5/IOPath";
import { IGExcelSerializationProvider_SyncZipEntry } from "./IGExcelSerializationProvider_SyncZipEntry";
import { b64toUint8Array } from "../../igniteui-angular-core/ES5/stringExtended";
import { stringReplace } from "../../igniteui-angular-core/ES5/string";
import * as UZIP from "uzip/UZIP";
/**
 * @hidden
 */
var IGExcelSerializationProvider_SyncZipFile = /** @class */ (function (_super) {
    tslib_1.__extends(IGExcelSerializationProvider_SyncZipFile, _super);
    function IGExcelSerializationProvider_SyncZipFile() {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.a = new List$1(IZipEntry_$type, 0);
        return _this;
    }
    Object.defineProperty(IGExcelSerializationProvider_SyncZipFile.prototype, "entries", {
        get: function () {
            return this.a;
        },
        enumerable: true,
        configurable: true
    });
    IGExcelSerializationProvider_SyncZipFile.prototype.createFile = function (fileName, directoryName, stream) {
        arguments[2] = (typeof arguments[2] === 'string' ? b64toUint8Array(arguments[2]) : arguments[2]);
        arguments[2] = (typeCast(Stream.$, arguments[2]) ? arguments[2] : new MemoryStream(2, arguments[2]));
        return this._createFile$i.apply(this, arguments);
    };
    IGExcelSerializationProvider_SyncZipFile.prototype._createFile$i = function (a, b, c) {
        var d = typeCast(MemoryStream.$, c);
        if (d == null) {
            var e = DocCoreUtils.c(c);
            d = new MemoryStream(2, e);
        }
        return new IGExcelSerializationProvider_SyncZipEntry(stringReplace(IOPath.combine1(b, a), '\\', '/'), false, d);
    };
    IGExcelSerializationProvider_SyncZipFile.prototype.load = function (stream) {
        arguments[0] = (typeof arguments[0] === 'string' ? b64toUint8Array(arguments[0]) : arguments[0]);
        arguments[0] = (typeCast(Stream.$, arguments[0]) ? arguments[0] : new MemoryStream(2, arguments[0]));
        return this._load$i.apply(this, arguments);
    };
    IGExcelSerializationProvider_SyncZipFile.prototype._load$i = function (a) {
        var e_1, _a;
        var b = null;
        var c = typeCast(MemoryStream.$, a);
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
        var d = new Uint8Array(b).buffer;
        var e = UZIP.parse(d);
        var f = (Object.getOwnPropertyNames(e));
        try {
            for (var _b = tslib_1.__values(fromEn(f)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var g = _c.value;
                var h = g;
                var i = (e[g]);
                var j = new IGExcelSerializationProvider_SyncZipEntry(h, false, new MemoryStream(2, i));
                this.entries.add(j);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return WorkItem.h(IZipFile_$type, this);
    };
    IGExcelSerializationProvider_SyncZipFile.prototype.save = function (stream) {
        arguments[0] = (typeof arguments[0] === 'string' ? b64toUint8Array(arguments[0]) : arguments[0]);
        arguments[0] = (typeCast(Stream.$, arguments[0]) ? arguments[0] : new MemoryStream(2, arguments[0]));
        return this._save$i.apply(this, arguments);
    };
    IGExcelSerializationProvider_SyncZipFile.prototype._save$i = function (a) {
        var b = {};
        for (var c = 0; c < this.a.count; c++) {
            var d = this.a._inner[c];
            if (!d.isDirectory) {
                var e = d.name;
                if (e.charAt(0) == '/') {
                    e = e.substr(1);
                }
                var f = new Uint8Array(d.b.toArray());
                b[e] = f;
            }
        }
        var g = (new Uint8Array(UZIP.encode(b)));
        a.write(g, 0, g.length);
        return null;
    };
    IGExcelSerializationProvider_SyncZipFile.$t = markType(IGExcelSerializationProvider_SyncZipFile, 'IGExcelSerializationProvider_SyncZipFile', Base.$, [IZipFile_$type]);
    return IGExcelSerializationProvider_SyncZipFile;
}(Base));
export { IGExcelSerializationProvider_SyncZipFile };
//# sourceMappingURL=IGExcelSerializationProvider_SyncZipFile.js.map
