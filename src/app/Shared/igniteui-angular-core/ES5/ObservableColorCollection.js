/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ObservableCollection$1 } from "./ObservableCollection$1";
import { Color } from "./Color";
import { NotifyCollectionChangedEventArgs } from "./NotifyCollectionChangedEventArgs";
import { fromEnum, markType } from "./type";
/**
 * @hidden
 */
var ObservableColorCollection = /** @class */ (function (_super) {
    tslib_1.__extends(ObservableColorCollection, _super);
    function ObservableColorCollection() {
        var _this = _super.call(this, Color.$, 0) || this;
        _this.ae = 0;
        return _this;
    }
    Object.defineProperty(ObservableColorCollection.prototype, "af", {
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
    ObservableColorCollection.prototype.equals = function (a) {
        if (a == null) {
            return false;
        }
        var b = a;
        if (b.count != this.count) {
            return false;
        }
        for (var c = 0; c < b.count; c++) {
            if (!b._inner[c].equals(this._inner[c])) {
                return false;
            }
        }
        return true;
    };
    ObservableColorCollection.ag = function (a) {
        var e_1, _a;
        var b = new ObservableColorCollection();
        try {
            for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                var d = new Color();
                d.colorString = c;
                b.add(d);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return b;
    };
    ObservableColorCollection.$t = markType(ObservableColorCollection, 'ObservableColorCollection', ObservableCollection$1.$.specialize(Color.$));
    return ObservableColorCollection;
}(ObservableCollection$1));
export { ObservableColorCollection };
//# sourceMappingURL=ObservableColorCollection.js.map