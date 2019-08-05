/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ObservableCollection$1 } from "./ObservableCollection$1";
import { UIElement } from "./UIElement";
import { fromEn, fromEnum, markType } from "./type";
/**
 * @hidden
 */
var UIElementCollection = /** @class */ (function (_super) {
    tslib_1.__extends(UIElementCollection, _super);
    function UIElementCollection(a) {
        var _this = _super.call(this, UIElement.$, 0) || this;
        _this.ae = null;
        _this.ae = a;
        return _this;
    }
    UIElementCollection.prototype.ac = function (a) {
        var e_1, _a, e_2, _b;
        _super.prototype.ac.call(this, a);
        if (a.oldItems != null) {
            try {
                for (var _c = tslib_1.__values(fromEn(a.oldItems)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var b = _d.value;
                    b.x = null;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        if (a.newItems != null) {
            try {
                for (var _e = tslib_1.__values(fromEn(a.newItems)), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var c = _f.value;
                    c.x = this.ae;
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
    };
    UIElementCollection.prototype.p = function () {
        var e_3, _a;
        try {
            for (var _b = tslib_1.__values(fromEnum(this)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var a = _c.value;
                a.x = null;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        _super.prototype.p.call(this);
    };
    UIElementCollection.$t = markType(UIElementCollection, 'UIElementCollection', ObservableCollection$1.$.specialize(UIElement.$));
    return UIElementCollection;
}(ObservableCollection$1));
export { UIElementCollection };
//# sourceMappingURL=UIElementCollection.js.map