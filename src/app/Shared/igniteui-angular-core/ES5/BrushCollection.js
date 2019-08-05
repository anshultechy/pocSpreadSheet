/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ObservableCollection$1 } from "./ObservableCollection$1";
import { Brush } from "./Brush";
import { NotifyCollectionChangedEventArgs } from "./NotifyCollectionChangedEventArgs";
import { Random } from "./Random";
import { markType } from "./type";
/**
 * @hidden
 */
var BrushCollection = /** @class */ (function (_super) {
    tslib_1.__extends(BrushCollection, _super);
    function BrushCollection() {
        var _this = _super.call(this, Brush.$, 0) || this;
        _this.ae = 0;
        return _this;
    }
    BrushCollection.prototype.ai = function () {
        return this.item(BrushCollection.ag.next1(this.count));
    };
    Object.defineProperty(BrushCollection.prototype, "af", {
        get: function () {
            return this.ae;
        },
        set: function (a) {
            if (this.ae != a) {
                this.ae = a;
                this.ac(new NotifyCollectionChangedEventArgs(0, 4));
            }
        },
        enumerable: true,
        configurable: true
    });
    BrushCollection.prototype.item = function (a, b) {
        if (arguments.length === 2) {
            _super.prototype.item.call(this, a, b);
            return b;
        }
        else {
            if (a < 0 || a >= this.count) {
                return null;
            }
            return _super.prototype.item.call(this, a);
        }
    };
    BrushCollection.prototype.equals = function (a) {
        if (a == null) {
            return false;
        }
        var b = a;
        if (b.count != this.count) {
            return false;
        }
        for (var c = 0; c < b.count; c++) {
            if (!b.item(c).equals(this.item(c))) {
                return false;
            }
        }
        return true;
    };
    BrushCollection.$t = markType(BrushCollection, 'BrushCollection', ObservableCollection$1.$.specialize(Brush.$));
    BrushCollection.ag = new Random(0);
    return BrushCollection;
}(ObservableCollection$1));
export { BrushCollection };
//# sourceMappingURL=BrushCollection.js.map