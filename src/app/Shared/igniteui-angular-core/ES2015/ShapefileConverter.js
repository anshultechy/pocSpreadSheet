/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { DependencyObjectNotifier } from "./DependencyObjectNotifier";
import { IList$1_$type, BaseError, delegateCombine, typeCast, markType } from "./type";
import { ShapefileRecord } from "./ShapefileRecord";
import { INotifyCollectionChanged_$type } from "./INotifyCollectionChanged";
import { Rect } from "./Rect";
import { Uri } from "./Uri";
import { DependencyProperty } from "./DependencyProperty";
import { ObservableCollection$1 } from "./ObservableCollection$1";
import { List$1 } from "./List$1";
import { AsyncCompletedEventArgs } from "./AsyncCompletedEventArgs";
import { BinaryReader } from "./BinaryReader";
import { BinaryFileDownloader } from "./BinaryFileDownloader";
import { ShapeFileUtil } from "./ShapeFileUtil";
import { PropertyMetadata } from "./PropertyMetadata";
/**
 * @hidden
 */
export class ShapefileConverter extends DependencyObjectNotifier {
    constructor() {
        super();
        this.ab = null;
        this._shapeHeader = null;
        this.importCompleted = null;
        this.n = null;
        this.collectionChanged = null;
        this.records = new ObservableCollection$1(ShapefileRecord.$, 0);
        let a = this.records;
        a.collectionChanged = delegateCombine(a.collectionChanged, (a, b) => {
            if (this.collectionChanged != null) {
                this.collectionChanged(this, b);
            }
        });
    }
    get worldRect() {
        return this.ab;
    }
    set worldRect(a) {
        if (Rect.l_op_Inequality(this.ab, a)) {
            let b = this.ab;
            this.ab = a;
            this.y("WorldRect", b, this.ab);
        }
    }
    get shapeType() {
        return this.shapeHeader.a;
    }
    get shapeHeader() {
        return this._shapeHeader;
    }
    set shapeHeader(a) {
        this._shapeHeader = a;
    }
    get shapefileSource() {
        return typeCast(Uri.$, this.c(ShapefileConverter.shapefileSourceProperty));
    }
    set shapefileSource(a) {
        this.h(ShapefileConverter.shapefileSourceProperty, a);
    }
    get databaseSource() {
        return typeCast(Uri.$, this.c(ShapefileConverter.databaseSourceProperty));
    }
    set databaseSource(a) {
        this.h(ShapefileConverter.databaseSourceProperty, a);
    }
    y(a, b, c) {
        switch (a) {
            case "ShapefileSource":
            case "DatabaseSource":
                if (this.shapefileSource != null && this.databaseSource != null) {
                    this.v();
                }
                break;
        }
        this.j(a);
    }
    w(a) {
        if (this.importCompleted != null) {
            this.importCompleted(this, a);
        }
    }
    v() {
        let a = null;
        let b = null;
        let c = () => {
            if (a != null && b != null) {
                this.x(a, b);
                this.w(new AsyncCompletedEventArgs(null, false, null));
            }
        };
        BinaryFileDownloader.a(this.shapefileSource.value, (d) => {
            a = new BinaryReader(0, d, false);
            c();
        }, (d) => {
            throw new BaseError(1, "shape file download error: " + d);
        });
        BinaryFileDownloader.a(this.databaseSource.value, (d) => {
            b = new BinaryReader(0, d, false);
            c();
        }, (d) => {
            throw new BaseError(1, "dbf file download error: " + d);
        });
    }
    x(a, b) {
        this.shapeHeader = ShapeFileUtil.a(a, b);
        this.worldRect = this.shapeHeader.e;
        let c = a.currentPosition;
        let d = a.length;
        while (c < d) {
            let e = ShapeFileUtil.e(this.shapeHeader, a, b);
            let record_ = e;
            this.records.add(e);
            c = a.currentPosition;
            d = a.length;
        }
    }
    get records() {
        return this.n;
    }
    set records(a) {
        this.n = a;
    }
    indexOf(a) {
        return this.n.indexOf(a);
    }
    insert(a, b) {
        this.n.insert(a, b);
    }
    removeAt(a) {
        this.n.removeAt(a);
    }
    item(a, b) {
        if (arguments.length === 2) {
            this.n.item(a, b);
            return b;
        }
        else {
            return this.n._inner[a];
        }
    }
    add(a) {
        this.n.add(a);
    }
    clear() {
        this.n.clear();
    }
    contains(a) {
        return this.n.contains(a);
    }
    copyTo(a, b) {
        this.n.copyTo(a, b);
    }
    get count() {
        return this.n.count;
    }
    get isReadOnly() {
        return this.n.isReadOnly;
    }
    remove(a) {
        return this.n.remove(a);
    }
    getEnumerator() {
        return this.n.getEnumerator();
    }
    getEnumeratorObject() {
        return this.n.getEnumerator();
    }
    getPointData() {
        return new List$1(ShapefileRecord.$, 1, this.records);
    }
}
ShapefileConverter.$t = markType(ShapefileConverter, 'ShapefileConverter', DependencyObjectNotifier.$, [IList$1_$type.specialize(ShapefileRecord.$), INotifyCollectionChanged_$type]);
ShapefileConverter.shapefileSourceProperty = DependencyProperty.i("ShapefileSource", Uri.$, ShapefileConverter.$, new PropertyMetadata(2, null, (a, b) => (typeCast(ShapefileConverter.$, a)).y("ShapefileSource", b.oldValue, b.newValue)));
ShapefileConverter.databaseSourceProperty = DependencyProperty.i("DatabaseSource", Uri.$, ShapefileConverter.$, new PropertyMetadata(2, null, (a, b) => (typeCast(ShapefileConverter.$, a)).y("DatabaseSource", b.oldValue, b.newValue)));
//# sourceMappingURL=ShapefileConverter.js.map