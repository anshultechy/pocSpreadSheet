/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Stream, typeCast, String_$type, markType } from "../../igniteui-angular-core/ES5/type";
import { ISpreadsheetEditInfo_$type } from "./ISpreadsheetEditInfo";
import { ArgumentNullException } from "../../igniteui-angular-core/ES5/ArgumentNullException";
import { CoreUtilities } from "./CoreUtilities";
import { StreamReader } from "../../igniteui-angular-core/ES5/StreamReader";
import { WorkbookSerializationLoadException } from "./WorkbookSerializationLoadException";
import { stringIsNullOrEmpty } from "../../igniteui-angular-core/ES5/string";
/**
 * @hidden
 */
var WorkbookDataObjectLoadContext = /** @class */ (function (_super) {
    tslib_1.__extends(WorkbookDataObjectLoadContext, _super);
    function WorkbookDataObjectLoadContext(a, b, c) {
        var _this = _super.call(this) || this;
        _this.n = null;
        _this.c = null;
        _this.k = null;
        _this._workbook = null;
        CoreUtilities.z(a, "workbook");
        _this.workbook = a;
        _this.o = b;
        _this.c = c;
        return _this;
    }
    Object.defineProperty(WorkbookDataObjectLoadContext.prototype, "b", {
        get: function () {
            return this.c != null ? this.c.b : 8370167;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookDataObjectLoadContext.prototype, "o", {
        get: function () {
            return this.n;
        },
        set: function (a) {
            if (this.n != a) {
                if (a == null) {
                    throw new ArgumentNullException(1);
                }
                this.n = a;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookDataObjectLoadContext.prototype, "f", {
        get: function () {
            var a = this.workbook.windowOptions.selectedWorksheet;
            var b = a != null ? a.displayOptions : null;
            if (b != null && b._ai) {
                var c = b._af.a(b._z);
                if (c != null && c.d.count > 1) {
                    return true;
                }
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookDataObjectLoadContext.prototype, "a", {
        get: function () {
            return this.c != null ? this.c.a : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookDataObjectLoadContext.prototype, "g", {
        get: function () {
            return this.c != null && this.c.d;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookDataObjectLoadContext.prototype, "workbook", {
        get: function () {
            return this._workbook;
        },
        set: function (a) {
            this._workbook = a;
        },
        enumerable: true,
        configurable: true
    });
    WorkbookDataObjectLoadContext.prototype.j = function (a) {
        return this.n.getData(a);
    };
    WorkbookDataObjectLoadContext.prototype.l = function (a) {
        var b = this.e(a) ? this.j(a) : null;
        if (b == null) {
            return null;
        }
        var c = typeCast(Stream.$, b);
        var d = null;
        if (null != c) {
            {
                var e = new StreamReader(c);
                try {
                    d = e.h();
                }
                finally {
                    if (e != null) {
                        e.dispose();
                    }
                }
            }
        }
        else {
            d = typeCast(String_$type, b);
        }
        if (stringIsNullOrEmpty(d)) {
            return null;
        }
        return d;
    };
    WorkbookDataObjectLoadContext.prototype.e = function (a) {
        return this.n.getDataPresent(a);
    };
    WorkbookDataObjectLoadContext.prototype.m = function (a) {
        throw new WorkbookSerializationLoadException(a);
    };
    WorkbookDataObjectLoadContext.prototype.h = function (a) {
        var b = this.c.e;
        if (b != null && !b(a)) {
            return false;
        }
        return true;
    };
    WorkbookDataObjectLoadContext.prototype.i = function (a, b, c) {
        var d = this.c.f;
        if (d != null && !d(a, b, c)) {
            return false;
        }
        return true;
    };
    Object.defineProperty(WorkbookDataObjectLoadContext.prototype, "isFixedDecimalEnabled", {
        get: function () {
            return this.c != null ? this.c.c : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookDataObjectLoadContext.prototype, "fixedDecimalPlaceCount", {
        get: function () {
            return this.c != null ? this.c.g : 2;
        },
        enumerable: true,
        configurable: true
    });
    WorkbookDataObjectLoadContext.$t = markType(WorkbookDataObjectLoadContext, 'WorkbookDataObjectLoadContext', Base.$, [ISpreadsheetEditInfo_$type]);
    return WorkbookDataObjectLoadContext;
}(Base));
export { WorkbookDataObjectLoadContext };
//# sourceMappingURL=WorkbookDataObjectLoadContext.js.map
