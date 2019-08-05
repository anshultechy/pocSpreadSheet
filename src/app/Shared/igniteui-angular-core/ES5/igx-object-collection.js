import * as tslib_1 from "tslib";
import { IgCollection } from './IgCollection';
import { SyncableObservableCollection$2 } from './SyncableObservableCollection$2';
import { Base } from "../../igniteui-angular-core/ES5/type";
var ObjectCollection = /** @class */ (function (_super) {
    tslib_1.__extends(ObjectCollection, _super);
    function ObjectCollection(list) {
        var _this = _super.call(this) || this;
        if (list) {
            for (var i = 0; i < list.length; i++) {
                _this.add(list[i]);
            }
        }
        return _this;
    }
    ObjectCollection.prototype._createInnerColl = function () {
        var coll = new SyncableObservableCollection$2(Base.$type, Base.$type, 0);
        coll.compare = function (ext, int) {
            var comp = ext;
            if (comp.equals) {
                return comp.equals(int);
            }
            return comp === int;
        };
        coll.createTo = function (ext) {
            return ext;
        };
        coll.createFrom = function (int) {
            return int;
        };
        return coll;
    };
    return ObjectCollection;
}(IgCollection));
export { ObjectCollection };
//# sourceMappingURL=igx-object-collection.js.map
