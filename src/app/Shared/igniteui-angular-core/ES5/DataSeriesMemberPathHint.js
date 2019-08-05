/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, typeCast, enumGetBox, markType } from "./type";
import { DataSeriesIntent_$type } from "./DataSeriesIntent";
import { stringIsNullOrEmpty, stringReplace } from "./string";
/**
 * @hidden
 */
var DataSeriesMemberPathHint = /** @class */ (function (_super) {
    tslib_1.__extends(DataSeriesMemberPathHint, _super);
    function DataSeriesMemberPathHint() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._path = null;
        _this._intent = 0;
        return _this;
    }
    Object.defineProperty(DataSeriesMemberPathHint.prototype, "path", {
        get: function () {
            return this._path;
        },
        set: function (a) {
            this._path = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSeriesMemberPathHint.prototype, "intent", {
        get: function () {
            return this._intent;
        },
        set: function (a) {
            this._intent = a;
        },
        enumerable: true,
        configurable: true
    });
    DataSeriesMemberPathHint.prototype.equals = function (a) {
        var b = typeCast(DataSeriesMemberPathHint.$, a);
        if (b == null) {
            return false;
        }
        if (!Base.equalsStatic(this.path, b.path)) {
            return false;
        }
        if (this.intent != b.intent) {
            return false;
        }
        return true;
    };
    DataSeriesMemberPathHint.prototype.toString = function () {
        return enumGetBox(DataSeriesIntent_$type, this.intent) + " Path = '" + this.path + "'";
    };
    DataSeriesMemberPathHint.prototype.update1 = function (a, b) {
        if (b === void 0) { b = null; }
        this.path = stringIsNullOrEmpty(b) ? a : stringReplace(b, "NAME", a);
    };
    DataSeriesMemberPathHint.prototype.update = function (a, b) {
        if (b === void 0) { b = null; }
        if (a.count == 0) {
            return;
        }
        this.update1(a._inner[0], b);
    };
    DataSeriesMemberPathHint.prototype.hasPath = function () {
        return !stringIsNullOrEmpty(this.path);
    };
    DataSeriesMemberPathHint.prototype.clone = function () {
        var _this = this;
        return ((function () {
            var $ret = new DataSeriesMemberPathHint();
            $ret.intent = _this.intent;
            $ret.path = _this.path;
            return $ret;
        })());
    };
    DataSeriesMemberPathHint.$t = markType(DataSeriesMemberPathHint, 'DataSeriesMemberPathHint');
    return DataSeriesMemberPathHint;
}(Base));
export { DataSeriesMemberPathHint };
//# sourceMappingURL=DataSeriesMemberPathHint.js.map