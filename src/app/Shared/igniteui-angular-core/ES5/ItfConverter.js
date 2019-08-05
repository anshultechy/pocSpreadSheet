/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { DependencyObject } from "./DependencyObject";
import { INotifyPropertyChanged_$type, BaseError, PropertyChangedEventArgs, typeCast, markType } from "./type";
import { Uri } from "./Uri";
import { DependencyProperty } from "./DependencyProperty";
import { TriangulationSource } from "./TriangulationSource";
import { BinaryReader } from "./BinaryReader";
import { BinaryFileDownloader } from "./BinaryFileDownloader";
import { AsyncCompletedEventArgs } from "./AsyncCompletedEventArgs";
import { List$1 } from "./List$1";
import { TriangulationSourcePointRecord } from "./TriangulationSourcePointRecord";
import { Triangle } from "./Triangle";
import { PropertyMetadata } from "./PropertyMetadata";
/**
 * @hidden
 */
var ItfConverter = /** @class */ (function (_super) {
    tslib_1.__extends(ItfConverter, _super);
    function ItfConverter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.j = null;
        _this.importCompleted = null;
        _this.propertyChanged = null;
        return _this;
    }
    Object.defineProperty(ItfConverter.prototype, "source", {
        get: function () {
            return typeCast(Uri.$, this.c(ItfConverter.sourceProperty));
        },
        set: function (a) {
            this.h(ItfConverter.sourceProperty, a);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItfConverter.prototype, "triangulationSource", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            var b = a != this.triangulationSource;
            if (b) {
                var c = this.j;
                this.j = a;
                this.t("TriangulationSource", c, this.triangulationSource);
            }
        },
        enumerable: true,
        configurable: true
    });
    ItfConverter.prototype.r = function () {
        var _this = this;
        var a = null;
        var b = function () {
            if (a != null) {
                _this.triangulationSource = TriangulationSource.loadItf(a);
            }
            _this.s(new AsyncCompletedEventArgs(null, false, null));
        };
        BinaryFileDownloader.a(this.source.value, function (c) {
            a = new BinaryReader(0, c, false);
            b();
        }, function (c) {
            throw new BaseError(1, "itf file download error: " + c);
        });
    };
    ItfConverter.prototype.s = function (a) {
        if (this.importCompleted != null) {
            this.importCompleted(this, a);
        }
    };
    ItfConverter.prototype.u = function (a, b, c) {
        switch (a) {
            case "Source":
                if (this.source != null) {
                    this.r();
                }
                break;
        }
    };
    ItfConverter.prototype.t = function (a, b, c) {
        if (this.propertyChanged != null) {
            this.propertyChanged(this, new PropertyChangedEventArgs(a));
        }
        this.u(a, b, c);
    };
    ItfConverter.prototype.getPointData = function () {
        if (this.j == null) {
            return null;
        }
        return new List$1(TriangulationSourcePointRecord.$, 1, this.j.points);
    };
    ItfConverter.prototype.getTriangleData = function () {
        if (this.j == null) {
            return null;
        }
        return new List$1(Triangle.$, 1, this.j.triangles);
    };
    ItfConverter.$t = markType(ItfConverter, 'ItfConverter', DependencyObject.$, [INotifyPropertyChanged_$type]);
    ItfConverter.sourceProperty = DependencyProperty.i("Source", Uri.$, ItfConverter.$, new PropertyMetadata(2, null, function (a, b) { return (typeCast(ItfConverter.$, a)).u("Source", b.oldValue, b.newValue); }));
    return ItfConverter;
}(DependencyObject));
export { ItfConverter };
//# sourceMappingURL=ItfConverter.js.map