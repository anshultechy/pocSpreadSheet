/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Stream, markType } from "../../igniteui-angular-core/ES5/type";
import { IZipEntry_$type } from "../../igniteui-angular-excel/ES5/documents.openxml";
import { WorkItem } from "../../igniteui-angular-excel/ES5/documents.core";
/**
 * @hidden
 */
var IGExcelSerializationProvider_SyncZipEntry = /** @class */ (function (_super) {
    tslib_1.__extends(IGExcelSerializationProvider_SyncZipEntry, _super);
    function IGExcelSerializationProvider_SyncZipEntry(a, b, c) {
        var _this = _super.call(this) || this;
        _this.c = null;
        _this.a = false;
        _this.b = null;
        _this.c = a;
        _this.a = b;
        _this.b = c;
        return _this;
    }
    Object.defineProperty(IGExcelSerializationProvider_SyncZipEntry.prototype, "name", {
        get: function () {
            return this.c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IGExcelSerializationProvider_SyncZipEntry.prototype, "isDirectory", {
        get: function () {
            return this.a;
        },
        enumerable: true,
        configurable: true
    });
    IGExcelSerializationProvider_SyncZipEntry.prototype.openReader = function () {
        return WorkItem.h(Stream.$, this.b);
    };
    IGExcelSerializationProvider_SyncZipEntry.$t = markType(IGExcelSerializationProvider_SyncZipEntry, 'IGExcelSerializationProvider_SyncZipEntry', Base.$, [IZipEntry_$type]);
    return IGExcelSerializationProvider_SyncZipEntry;
}(Base));
export { IGExcelSerializationProvider_SyncZipEntry };
//# sourceMappingURL=IGExcelSerializationProvider_SyncZipEntry.js.map
