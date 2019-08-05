/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Stream, typeCast, markType } from "../../igniteui-angular-core/ES5/type";
import { IDataObject_$type } from "../../igniteui-angular-core/ES5/IDataObject";
import { DataFormats } from "../../igniteui-angular-core/ES5/DataFormats";
import { DocCoreUtils } from "../../igniteui-angular-excel/ES5/documents.core";
import { Convert } from "../../igniteui-angular-core/ES5/Convert";
import { stringIsNullOrEmpty } from "../../igniteui-angular-core/ES5/string";
/**
 * @hidden
 */
var JSDataObject = /** @class */ (function (_super) {
    tslib_1.__extends(JSDataObject, _super);
    function JSDataObject(a, b) {
        var _this = _super.call(this) || this;
        _this._c = null;
        _this._b = false;
        _this._c = a;
        _this._b = b;
        return _this;
    }
    JSDataObject.prototype._f = function (a) {
        if (a == DataFormats.d || a == DataFormats.c || a == DataFormats.e) {
            return this._b ? "Text" : "text/plain";
        }
        else if (this._b) {
            return null;
        }
        else if (a == DataFormats.b) {
            return "text/html";
        }
        else if (a == DataFormats.a) {
            return "text/csv";
        }
        return null;
    };
    JSDataObject.prototype.getData = function (a) {
        var b = this._f(a);
        if (stringIsNullOrEmpty(b)) {
            return JSDataObject._e;
        }
        try {
            return this._c.getData(b);
        }
        catch (c) {
            return JSDataObject._d;
        }
    };
    JSDataObject.prototype.getDataPresent = function (a) {
        var b = this._f(a);
        if (!stringIsNullOrEmpty(b)) {
            if ((this._c.types)) {
                var c = (this._c.types.length);
                for (var d = 0; d < c; d++) {
                    if (b == (this._c.types[d])) {
                        return true;
                    }
                }
            }
            else if (this._b) {
                try {
                    this._c.getData(b);
                    return true;
                }
                catch (e) {
                }
            }
        }
        return false;
    };
    JSDataObject.prototype.setData = function (a, b) {
        var c = this._f(a);
        if (!stringIsNullOrEmpty(c)) {
            var d = void 0;
            if (b == null) {
                d = null;
            }
            else if (typeof b === 'string') {
                d = b;
            }
            else if (typeCast(Stream.$, b) !== null) {
                d = Convert.toBase64String(DocCoreUtils.c(b));
            }
            else {
                d = b.toString();
            }
            try {
                this._c.setData(c, d);
            }
            catch (e) {
            }
        }
    };
    JSDataObject._a = function (a) {
        var b = a.originalEvent;
        var c = b.clipboardData;
        if (c != null) {
            return new JSDataObject(c, false);
        }
        c = window.clipboardData;
        return c == null ? null : new JSDataObject(c, true);
    };
    JSDataObject.$t = markType(JSDataObject, 'JSDataObject', Base.$, [IDataObject_$type]);
    JSDataObject._e = {};
    JSDataObject._d = {};
    return JSDataObject;
}(Base));
export { JSDataObject };
//# sourceMappingURL=JSDataObject.js.map
