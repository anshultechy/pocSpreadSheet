/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, fromEnum, markType } from "../../igniteui-angular-core/ES5/type";
import { ISupportPositioning_$type } from "./ISupportPositioning";
import { WeakList$1 } from "./WeakList$1";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { Dictionary$2 } from "../../igniteui-angular-core/ES5/Dictionary$2";
import { PositionOrderHelper_EmptySortPosition$1 } from "./PositionOrderHelper_EmptySortPosition$1";
import { PositionOrderHelper_DefaultMeasureComparer$1 } from "./PositionOrderHelper_DefaultMeasureComparer$1";
import { PositionSorter } from "./PositionSorter";
import { CoreUtilities } from "./CoreUtilities";
/**
 * @hidden
 */
var PositionOrderHelper$1 = /** @class */ (function (_super) {
    tslib_1.__extends(PositionOrderHelper$1, _super);
    function PositionOrderHelper$1($tChild, a, b) {
        var _this = _super.call(this) || this;
        _this.$tChild = null;
        _this.a = null;
        _this.b = null;
        _this.d = null;
        _this.e = null;
        _this.$tChild = $tChild;
        _this.$type = _this.$type.specialize(_this.$tChild);
        _this.d = a;
        _this.e = b;
        _this.a = new WeakList$1(_this.$tChild);
        _this.b = new WeakList$1(_this.$tChild);
        return _this;
    }
    PositionOrderHelper$1.prototype.f = function () {
        var e_1, _a, e_2, _b;
        this.a.clear();
        this.b.clear();
        var a = new List$1(ISupportPositioning_$type, 0);
        var b = new List$1(ISupportPositioning_$type, 0);
        var c = new Dictionary$2(ISupportPositioning_$type, this.$tChild, 0);
        try {
            for (var _c = tslib_1.__values(fromEnum(this.d)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var d = _d.value;
                this.a._add(d);
                var e = this.e(d) || new PositionOrderHelper_EmptySortPosition$1(this.$tChild);
                a.add(e);
                b.add(e);
                c.item(e, d);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var f;
        var g = PositionSorter.n(a, f, new PositionOrderHelper_DefaultMeasureComparer$1(this.$tChild, b));
        f = g.p1;
        if (!f) {
            a = b;
        }
        try {
            for (var _e = tslib_1.__values(fromEnum(a)), _f = _e.next(); !_f.done; _f = _e.next()) {
                var h = _f.value;
                this.b._add(c.item(h));
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    PositionOrderHelper$1.prototype.c = function () {
        if (!CoreUtilities.d(this.$tChild, this.a, this.d)) {
            this.f();
        }
        return this.b;
    };
    PositionOrderHelper$1.$t = markType(PositionOrderHelper$1, 'PositionOrderHelper$1');
    return PositionOrderHelper$1;
}(Base));
export { PositionOrderHelper$1 };
//# sourceMappingURL=PositionOrderHelper$1.js.map
