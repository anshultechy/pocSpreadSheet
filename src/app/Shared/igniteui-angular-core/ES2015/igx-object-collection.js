import { IgCollection } from './IgCollection';
import { SyncableObservableCollection$2 } from './SyncableObservableCollection$2';
import { Base } from "../../igniteui-angular-core/ES2015/type";
export class ObjectCollection extends IgCollection {
    constructor(list) {
        super();
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }
    _createInnerColl() {
        let coll = new SyncableObservableCollection$2(Base.$type, Base.$type, 0);
        coll.compare = (ext, int) => {
            let comp = ext;
            if (comp.equals) {
                return comp.equals(int);
            }
            return comp === int;
        };
        coll.createTo = (ext) => {
            return ext;
        };
        coll.createFrom = (int) => {
            return int;
        };
        return coll;
    }
}
//# sourceMappingURL=igx-object-collection.js.map