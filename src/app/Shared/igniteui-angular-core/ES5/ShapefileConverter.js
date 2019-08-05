/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
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
var ShapefileConverter = /** @class */ (function (_super) {
    tslib_1.__extends(ShapefileConverter, _super);
    function ShapefileConverter() {
        var _this = _super.call(this) || this;
        _this.ab = null;
        _this._shapeHeader = null;
        _this.importCompleted = null;
        _this.n = null;
        _this.collectionChanged = null;
        _this.records = new ObservableCollection$1(ShapefileRecord.$, 0);
        var a = _this.records;
        a.collectionChanged = delegateCombine(a.collectionChanged, function (a, b) {
            if (_this.collectionChanged != null) {
                _this.collectionChanged(_this, b);
            }
        });
        return _this;
    }
    Object.defineProperty(ShapefileConverter.prototype, "worldRect", {
        get: function () {
            return this.ab;
        },
        set: function (a) {
            if (Rect.l_op_Inequality(this.ab, a)) {
                var b = this.ab;
                this.ab = a;
                this.y("WorldRect", b, this.ab);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShapefileConverter.prototype, "shapeType", {
        get: function () {
            return this.shapeHeader.a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShapefileConverter.prototype, "shapeHeader", {
        get: function () {
            return this._shapeHeader;
        },
        set: function (a) {
            this._shapeHeader = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShapefileConverter.prototype, "shapefileSource", {
        get: function () {
            return typeCast(Uri.$, this.c(ShapefileConverter.shapefileSourceProperty));
        },
        set: function (a) {
            this.h(ShapefileConverter.shapefileSourceProperty, a);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShapefileConverter.prototype, "databaseSource", {
        get: function () {
            return typeCast(Uri.$, this.c(ShapefileConverter.databaseSourceProperty));
        },
        set: function (a) {
            this.h(ShapefileConverter.databaseSourceProperty, a);
        },
        enumerable: true,
        configurable: true
    });
    ShapefileConverter.prototype.y = function (a, b, c) {
        switch (a) {
            case "ShapefileSource":
            case "DatabaseSource":
                if (this.shapefileSource != null && this.databaseSource != null) {
                    this.v();
                }
                break;
        }
        this.j(a);
    };
    ShapefileConverter.prototype.w = function (a) {
        if (this.importCompleted != null) {
            this.importCompleted(this, a);
        }
    };
    ShapefileConverter.prototype.v = function () {
        var _this = this;
        var a = null;
        var b = null;
        var c = function () {
            if (a != null && b != null) {
                _this.x(a, b);
                _this.w(new AsyncCompletedEventArgs(null, false, null));
            }
        };
        BinaryFileDownloader.a(this.shapefileSource.value, function (d) {
            a = new BinaryReader(0, d, false);
            c();
        }, function (d) {
            throw new BaseError(1, "shape file download error: " + d);
        });
        BinaryFileDownloader.a(this.databaseSource.value, function (d) {
            b = new BinaryReader(0, d, false);
            c();
        }, function (d) {
            throw new BaseError(1, "dbf file download error: " + d);
        });
    };
    ShapefileConverter.prototype.x = function (a, b) {
        this.shapeHeader = ShapeFileUtil.a(a, b);
        this.worldRect = this.shapeHeader.e;
        var c = a.currentPosition;
        var d = a.length;
        while (c < d) {
            var e = ShapeFileUtil.e(this.shapeHeader, a, b);
            var record_ = e;
            this.records.add(e);
            c = a.currentPosition;
            d = a.length;
        }
    };
    Object.defineProperty(ShapefileConverter.prototype, "records", {
        get: function () {
            return this.n;
        },
        set: function (a) {
            this.n = a;
        },
        enumerable: true,
        configurable: true
    });
    ShapefileConverter.prototype.indexOf = function (a) {
        return this.n.indexOf(a);
    };
    ShapefileConverter.prototype.insert = function (a, b) {
        this.n.insert(a, b);
    };
    ShapefileConverter.prototype.removeAt = function (a) {
        this.n.removeAt(a);
    };
    ShapefileConverter.prototype.item = function (a, b) {
        if (arguments.length === 2) {
            this.n.item(a, b);
            return b;
        }
        else {
            return this.n._inner[a];
        }
    };
    ShapefileConverter.prototype.add = function (a) {
        this.n.add(a);
    };
    ShapefileConverter.prototype.clear = function () {
        this.n.clear();
    };
    ShapefileConverter.prototype.contains = function (a) {
        return this.n.contains(a);
    };
    ShapefileConverter.prototype.copyTo = function (a, b) {
        this.n.copyTo(a, b);
    };
    Object.defineProperty(ShapefileConverter.prototype, "count", {
        get: function () {
            return this.n.count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShapefileConverter.prototype, "isReadOnly", {
        get: function () {
            return this.n.isReadOnly;
        },
        enumerable: true,
        configurable: true
    });
    ShapefileConverter.prototype.remove = function (a) {
        return this.n.remove(a);
    };
    ShapefileConverter.prototype.getEnumerator = function () {
        return this.n.getEnumerator();
    };
    ShapefileConverter.prototype.getEnumeratorObject = function () {
        return this.n.getEnumerator();
    };
    ShapefileConverter.prototype.getPointData = function () {
        return new List$1(ShapefileRecord.$, 1, this.records);
    };
    ShapefileConverter.$t = markType(ShapefileConverter, 'ShapefileConverter', DependencyObjectNotifier.$, [IList$1_$type.specialize(ShapefileRecord.$), INotifyCollectionChanged_$type]);
    ShapefileConverter.shapefileSourceProperty = DependencyProperty.i("ShapefileSource", Uri.$, ShapefileConverter.$, new PropertyMetadata(2, null, function (a, b) { return (typeCast(ShapefileConverter.$, a)).y("ShapefileSource", b.oldValue, b.newValue); }));
    ShapefileConverter.databaseSourceProperty = DependencyProperty.i("DatabaseSource", Uri.$, ShapefileConverter.$, new PropertyMetadata(2, null, function (a, b) { return (typeCast(ShapefileConverter.$, a)).y("DatabaseSource", b.oldValue, b.newValue); }));
    return ShapefileConverter;
}(DependencyObjectNotifier));
export { ShapefileConverter };
//# sourceMappingURL=ShapefileConverter.js.map