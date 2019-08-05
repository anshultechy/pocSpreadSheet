/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ScrollInfo } from "./ScrollInfo";
import { IPropertyChangeListener_$type } from "./IPropertyChangeListener";
import { Base, fromEnum, markType } from "../../igniteui-angular-core/ES5/type";
import { Dictionary$2 } from "../../igniteui-angular-core/ES5/Dictionary$2";
/**
 * @hidden
 */
var MergedScrollInfo = /** @class */ (function (_super) {
    tslib_1.__extends(MergedScrollInfo, _super);
    function MergedScrollInfo() {
        var _this = _super.call(this) || this;
        _this._aw = false;
        _this._av = false;
        _this._az = null;
        _this._at = null;
        _this._az = new Dictionary$2(ScrollInfo.$, Base.$, 0);
        return _this;
    }
    MergedScrollInfo.prototype._ak = function (a) {
        this._a1();
        _super.prototype._ak.call(this, a);
    };
    Object.defineProperty(MergedScrollInfo.prototype, "_au", {
        get: function () {
            return this._at;
        },
        set: function (a) {
            this._at = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MergedScrollInfo.prototype, "_ax", {
        get: function () {
            return this._av;
        },
        enumerable: true,
        configurable: true
    });
    MergedScrollInfo.prototype._a0 = function (a) {
        if (!this._az.containsKey(a)) {
            this._az.addItem(a, null);
            var b = a;
            b.addListener(this, true);
        }
    };
    MergedScrollInfo.prototype._a1 = function () {
        if (!this._av) {
            this._av = true;
            if (this._at != null) {
                this._at();
            }
        }
    };
    MergedScrollInfo.prototype._ay = function (a) {
        var b = this._az.removeItem(a);
        if (b) {
            var c = a;
            c.removeListener(this);
        }
        return b;
    };
    MergedScrollInfo.prototype._a2 = function () {
        var e_1, _a, e_2, _b;
        if (!this._av) {
            return;
        }
        this._aw = true;
        try {
            var a = 0;
            var b = 0;
            try {
                for (var _c = tslib_1.__values(fromEnum(this._az.keys)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var c = _d.value;
                    if (!c._i) {
                        continue;
                    }
                    a = Math.max(a, c._af);
                    b = Math.max(b, c._t);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this._aj(a, b, this._ac);
            try {
                for (var _e = tslib_1.__values(fromEnum(this._az.keys)), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var d = _f.value;
                    if (!d._i) {
                        continue;
                    }
                    d._ac = this._ac;
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        finally {
            this._aw = false;
            this._av = false;
        }
    };
    MergedScrollInfo.prototype.onPropertyValueChanged = function (a, b, c) {
        if (b == "Offset") {
            return;
        }
        this._a1();
    };
    MergedScrollInfo.$t = markType(MergedScrollInfo, 'MergedScrollInfo', ScrollInfo.$, [IPropertyChangeListener_$type]);
    return MergedScrollInfo;
}(ScrollInfo));
export { MergedScrollInfo };
//# sourceMappingURL=MergedScrollInfo.js.map
