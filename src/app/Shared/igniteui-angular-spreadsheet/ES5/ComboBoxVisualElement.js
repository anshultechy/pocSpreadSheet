/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { VisualElement } from "./VisualElement";
import { EventArgs, typeCast, runOn, delegateRemove, delegateCombine, markType } from "../../igniteui-angular-core/ES5/type";
import { INotifyCollectionChanged_$type } from "../../igniteui-angular-core/ES5/INotifyCollectionChanged";
/**
 * @hidden
 */
var ComboBoxVisualElement = /** @class */ (function (_super) {
    tslib_1.__extends(ComboBoxVisualElement, _super);
    function ComboBoxVisualElement(a, b) {
        var _this = _super.call(this, a, b) || this;
        _this.cj = null;
        _this.cf = false;
        _this.cm = null;
        _this.cg = false;
        _this.valueChanged = null;
        return _this;
    }
    ComboBoxVisualElement.prototype.bz = function () {
        if (typeCast(INotifyCollectionChanged_$type, this.cj) !== null) {
            var a = this.cj;
            a.collectionChanged = delegateRemove(a.collectionChanged, runOn(this, this.cp));
        }
        _super.prototype.bz.call(this);
    };
    Object.defineProperty(ComboBoxVisualElement.prototype, "ck", {
        get: function () {
            return this.cj;
        },
        set: function (a) {
            if (a != this.cj) {
                if (typeCast(INotifyCollectionChanged_$type, this.cj) !== null) {
                    var b = this.cj;
                    b.collectionChanged = delegateRemove(b.collectionChanged, runOn(this, this.cp));
                }
                this.cj = a;
                if (typeCast(INotifyCollectionChanged_$type, this.cj) !== null) {
                    var c = this.cj;
                    c.collectionChanged = delegateCombine(c.collectionChanged, runOn(this, this.cp));
                }
                this.ch = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComboBoxVisualElement.prototype, "ch", {
        get: function () {
            return this.cf;
        },
        set: function (a) {
            if (a != this.cf) {
                this.cf = a;
                if (a) {
                    this.b1();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComboBoxVisualElement.prototype, "co", {
        get: function () {
            return this.cm;
        },
        set: function (a) {
            if (a != this.cm) {
                this.cm = a;
                this.ci = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComboBoxVisualElement.prototype, "ci", {
        get: function () {
            return this.cg;
        },
        set: function (a) {
            if (a != this.cg) {
                this.cg = a;
                if (a) {
                    this.b1();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ComboBoxVisualElement.prototype.cp = function (a, b) {
        this.ch = true;
    };
    ComboBoxVisualElement.prototype.cq = function () {
        var a = this.valueChanged;
        if (a != null) {
            a(this, EventArgs.empty);
        }
    };
    ComboBoxVisualElement.$t = markType(ComboBoxVisualElement, 'ComboBoxVisualElement', VisualElement.$);
    return ComboBoxVisualElement;
}(VisualElement));
export { ComboBoxVisualElement };
//# sourceMappingURL=ComboBoxVisualElement.js.map
