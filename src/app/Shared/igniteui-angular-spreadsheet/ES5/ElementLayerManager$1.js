/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, fromEnum, markType } from "../../igniteui-angular-core/ES5/type";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { ElementLayer$1 } from "./ElementLayer$1";
import { CoreUtilities } from "./CoreUtilities";
import { ElementLayerInfo } from "./ElementLayerInfo";
import { Dictionary$2 } from "../../igniteui-angular-core/ES5/Dictionary$2";
import { ISupportPositioning_$type } from "./ISupportPositioning";
import { ElementLayerInfo_ElementOrderInfo } from "./ElementLayerInfo_ElementOrderInfo";
import { Enumerable } from "../../igniteui-angular-core/ES5/Enumerable";
import { PositionSorter } from "./PositionSorter";
/**
 * @hidden
 */
var ElementLayerManager$1 = /** @class */ (function (_super) {
    tslib_1.__extends(ElementLayerManager$1, _super);
    function ElementLayerManager$1($tViewModel, a, b) {
        var _this = _super.call(this) || this;
        _this.$tViewModel = null;
        _this.b = null;
        _this.g = null;
        _this.e = null;
        _this.c = null;
        _this.f = null;
        _this.$tViewModel = $tViewModel;
        _this.$type = _this.$type.specialize(_this.$tViewModel);
        CoreUtilities.y(a);
        CoreUtilities.y(b);
        _this.b = a;
        _this.g = b;
        _this.e = new Dictionary$2(String_$type, ElementLayer$1.$.specialize(_this.$tViewModel), 2, ElementLayerInfo.e);
        _this.f = new List$1(ElementLayer$1.$.specialize(_this.$tViewModel), 0);
        return _this;
    }
    Object.defineProperty(ElementLayerManager$1.prototype, "d", {
        get: function () {
            return this.c;
        },
        enumerable: true,
        configurable: true
    });
    ElementLayerManager$1.prototype.a = function (a) {
        var _this = this;
        CoreUtilities.z(a, "info");
        var b;
        if (!((function () { var c = _this.e.tryGetValue(a.g, b); b = c.p1; return c.ret; })())) {
            return null;
        }
        return b;
    };
    ElementLayerManager$1.prototype.k = function (a) {
        var e_1, _a;
        if (a === void 0) { a = null; }
        try {
            for (var _c = tslib_1.__values(fromEnum(this.f)), _e = _c.next(); !_e.done; _e = _c.next()) {
                var b = _e.value;
                if (a == null || a(b._b)) {
                    b._f();
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    ElementLayerManager$1.prototype.i = function (a) {
        this.h();
        this.c = a;
        this.j();
    };
    ElementLayerManager$1.prototype.h = function () {
        var a = this.f.toArray();
        this.f.clear();
        this.e.clear();
        for (var c = 0; c < a.length; c++) {
            var b = a[c];
            this.c.removeChild(b);
            b.dispose();
            b._d.detach(b);
        }
    };
    ElementLayerManager$1.prototype.j = function () {
        var e_2, _a;
        this.h();
        if (this.c == null) {
            return;
        }
        var a = this.g(this.b);
        var b = Enumerable.g(ElementLayer$1.$.specialize(this.$tViewModel), String_$type, a, function (c) { return c._b.g; });
        var c = Enumerable.z(ISupportPositioning_$type, Enumerable.h(ISupportPositioning_$type, Enumerable.o(ElementLayer$1.$.specialize(this.$tViewModel), ElementLayerInfo_ElementOrderInfo.$, a, function (d) { return d._b.d; })));
        try {
            for (var _c = tslib_1.__values(fromEnum(b)), _e = _c.next(); !_e.done; _e = _c.next()) {
                var d = _e.value;
                this.e.item(d.key, d.value);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var e;
        var f = PositionSorter.n(c, e);
        e = f.p1;
        for (var g = c.count - 1; g >= 0; g--) {
            var h = c._inner[g];
            var i = this.e.item(h.key);
            this.f.add(i);
            i._d.attach(i);
            this.c.addChild(i);
        }
    };
    ElementLayerManager$1.$t = markType(ElementLayerManager$1, 'ElementLayerManager$1');
    return ElementLayerManager$1;
}(Base));
export { ElementLayerManager$1 };
//# sourceMappingURL=ElementLayerManager$1.js.map
