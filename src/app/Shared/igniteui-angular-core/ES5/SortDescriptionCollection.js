/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { SyncableObservableCollection$1 } from "./SyncableObservableCollection$1";
import { SortDescription } from "./SortDescription";
/**
 * @hidden
 */
var SortDescriptionCollection = /** @class */ (function (_super) {
    tslib_1.__extends(SortDescriptionCollection, _super);
    function SortDescriptionCollection() {
        var _this = _super.call(this) || this;
        _this.d = null;
        _this.f = null;
        _this.f = new SyncableObservableCollection$1(SortDescription.$);
        return _this;
    }
    SortDescriptionCollection.prototype.g = function () {
        return this.f;
    };
    Object.defineProperty(SortDescriptionCollection.prototype, "syncTarget", {
        get: function () {
            return this.d;
        },
        set: function (a) {
            if (a == null) {
                this.f.syncTarget = null;
                this.d = null;
                return;
            }
            this.d = a;
            this.f.syncTarget = this.d.f;
        },
        enumerable: true,
        configurable: true
    });
    SortDescriptionCollection.prototype.add = function (a) {
        return this.f.add(a);
    };
    SortDescriptionCollection.prototype.insert = function (a, b) {
        this.f.add1(a, b);
    };
    SortDescriptionCollection.prototype.clear = function () {
        this.f.clear();
    };
    SortDescriptionCollection.prototype.get = function (a) {
        return this.f.get(a);
    };
    SortDescriptionCollection.prototype.indexOf = function (a) {
        return this.f.indexOf(a);
    };
    SortDescriptionCollection.prototype.remove = function (a) {
        return this.f.remove1(a);
    };
    SortDescriptionCollection.prototype.removeAt = function (a) {
        return this.f.remove(a);
    };
    SortDescriptionCollection.prototype.set = function (a, b) {
        return this.f.set(a, b);
    };
    SortDescriptionCollection.prototype.size = function () {
        return this.f.size();
    };
    SortDescriptionCollection.prototype.n = function (a) {
        this.f.addListener(a);
    };
    SortDescriptionCollection.prototype.q = function (a) {
        this.f.removeListener(a);
    };
    Object.defineProperty(SortDescriptionCollection.prototype, "onChanged", {
        get: function () {
            return this.f.f;
        },
        set: function (a) {
            this.f.f = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortDescriptionCollection.prototype, "k", {
        get: function () {
            return this.f.all;
        },
        enumerable: true,
        configurable: true
    });
    SortDescriptionCollection.$t = markType(SortDescriptionCollection, 'SortDescriptionCollection');
    return SortDescriptionCollection;
}(Base));
export { SortDescriptionCollection };
//# sourceMappingURL=SortDescriptionCollection.js.map