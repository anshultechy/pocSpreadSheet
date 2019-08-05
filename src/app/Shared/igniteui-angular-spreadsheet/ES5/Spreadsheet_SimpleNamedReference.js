/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ValueType, IComparable$1_$type, markStruct } from "../../igniteui-angular-core/ES5/type";
import { WorksheetRegionAddress } from "../../igniteui-angular-excel/ES5/excel.core";
import { stringCompare1 } from "../../igniteui-angular-core/ES5/stringExtended";
/**
 * @hidden
 */
var Spreadsheet_SimpleNamedReference = /** @class */ (function (_super) {
    tslib_1.__extends(Spreadsheet_SimpleNamedReference, _super);
    function Spreadsheet_SimpleNamedReference(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this._a = null;
        _this._b = new WorksheetRegionAddress();
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this._a = c;
                    _this._b = d;
                }
                break;
        }
        return _this;
    }
    Spreadsheet_SimpleNamedReference.prototype.compareTo = function (a) {
        return stringCompare1(this._a.name, a._a.name, 1);
    };
    Spreadsheet_SimpleNamedReference.$t = markStruct(Spreadsheet_SimpleNamedReference, 'Spreadsheet_SimpleNamedReference', ValueType.$, [IComparable$1_$type.specialize(-1)]).initSelfReferences();
    return Spreadsheet_SimpleNamedReference;
}(ValueType));
export { Spreadsheet_SimpleNamedReference };
//# sourceMappingURL=Spreadsheet_SimpleNamedReference.js.map
