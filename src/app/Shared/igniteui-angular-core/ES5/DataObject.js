/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { IDataObject_$type } from "./IDataObject";
import { Dictionary$2 } from "./Dictionary$2";
/**
 * @hidden
 */
var DataObject = /** @class */ (function (_super) {
    tslib_1.__extends(DataObject, _super);
    function DataObject() {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.a = new Dictionary$2(String_$type, Base.$, 0);
        return _this;
    }
    DataObject.prototype.getData = function (a) {
        var _this = this;
        var b;
        if (((function () { var c = _this.a.tryGetValue(a, b); b = c.p1; return c.ret; })())) {
            return b;
        }
        return null;
    };
    DataObject.prototype.getDataPresent = function (a) {
        return this.a.containsKey(a);
    };
    DataObject.prototype.setData = function (a, b) {
        this.a.item(a, b);
    };
    DataObject.$t = markType(DataObject, 'DataObject', Base.$, [IDataObject_$type]);
    return DataObject;
}(Base));
export { DataObject };
//# sourceMappingURL=DataObject.js.map