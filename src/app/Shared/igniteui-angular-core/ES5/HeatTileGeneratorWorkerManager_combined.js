/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, runOn, String_$type, Delegate_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { TileWorkSettings } from "./TileWorkSettings";
import { LinkedList$1 } from "./LinkedList$1";
import { HeatTileGeneratorWorker } from "./HeatTileGeneratorWorker";
import { List$1 } from "./List$1";
import { LinkedListNode$1 } from "./LinkedListNode$1";
import { HeatTileImageCreatedEventArgs } from "./HeatTileImageCreatedEventArgs";
import { ITileWorkCompletedSink_$type } from "./ITileWorkCompletedSink";
/**
 * @hidden
 */
var HeatTileGeneratorWorkerManager = /** @class */ (function (_super) {
    tslib_1.__extends(HeatTileGeneratorWorkerManager, _super);
    function HeatTileGeneratorWorkerManager() {
        var _this = _super.call(this) || this;
        _this.b = true;
        _this.o = null;
        _this.k = null;
        _this._supportsTransferable = false;
        _this.d = false;
        _this._worker = null;
        _this.a = false;
        _this.j = 0;
        _this.g = new Dictionary$2(String_$type, TileWorkSettings.$, 0);
        _this.h = new Dictionary$2(String_$type, Delegate_$type, 0);
        _this.i = new LinkedList$1(HeatTileGeneratorWorker.$);
        _this.f = new Dictionary$2(String_$type, List$1.$.specialize(LinkedListNode$1.$.specialize(HeatTileGeneratorWorker.$)), 0);
        return _this;
    }
    Object.defineProperty(HeatTileGeneratorWorkerManager.prototype, "e", {
        get: function () {
            return this.b;
        },
        set: function (a) {
            this.b = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGeneratorWorkerManager.prototype, "p", {
        get: function () {
            return this.o;
        },
        set: function (a) {
            this.o = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGeneratorWorkerManager.prototype, "n", {
        get: function () {
            return this.k;
        },
        set: function (a) {
            this.k = a;
        },
        enumerable: true,
        configurable: true
    });
    HeatTileGeneratorWorkerManager.prototype.u = function () {
        if (!this.a) {
            this.a = true;
            if ((window.Worker)) {
                this.d = true;
            }
            if (this.d && this.e) {
                this.v();
                var test = new ArrayBuffer(1);
                this._worker.postMessage(test, [test]);
                if (test.byteLength == 0) {
                    this._supportsTransferable = true;
                }
                ;
            }
            if (!this._supportsTransferable) {
                this.b = false;
            }
        }
    };
    HeatTileGeneratorWorkerManager.prototype.v = function () {
        if (this.p == null && this.n == null) {
            throw new Error('HeatTileGenerator wants to use web workers, but webWorkerScriptPath and webWorkerInstance were not specified. Either specify the path, an instance, or set allowWebWorkers to false');
        }
        if (this.n != null) {
            this._worker = this.n;
        }
        else {
            var path_ = this.p;
            this._worker = new Worker(path_);
        }
        this._worker.postMessage = this._worker.webkitPostMessage || this._worker.postMessage;
        var onMessage_ = runOn(this, this.z);
        this._worker.onmessage = onMessage_;
    };
    HeatTileGeneratorWorkerManager.prototype.z = function (args_) {
        var data_ = args_.data;
        var a = new HeatTileImageCreatedEventArgs();
        a.imageData = (data_.imageData == null ? null : new Uint8ClampedArray(data_.imageData));
        a.z = (data_.z);
        a.x = (data_.x);
        a.y = (data_.y);
        a.url = (data_.url);
        a.globalMinimumValue = (data_.globalMinimumValue);
        a.globalMaximumValue = (data_.globalMaximumValue);
        a.globalMaximumValueLongitude = (data_.globalMaximumValueLongitude);
        a.globalMaximumValueLatitude = (data_.globalMaximumValueLatitude);
        a.globalMinimumValueLongitude = (data_.globalMinimumValueLongitude);
        a.globalMinimumValueLatitude = (data_.globalMinimumValueLatitude);
        var b = (data_.messageId.toString());
        if (!this.g.containsKey(b)) {
            return;
        }
        var c = this.g.item(b);
        var d = this.h.item(b);
        this.g.removeItem(b);
        this.h.removeItem(b);
        a.image = c.image;
        d(this, a);
    };
    HeatTileGeneratorWorkerManager.prototype.x = function () {
        this.u();
        if (this.e && this._worker == null) {
            this.v();
        }
        if (!this.e && this._worker != null) {
            this._worker.terminate();
            this._worker.onmessage = null;
            this._worker = null;
        }
    };
    HeatTileGeneratorWorkerManager.prototype.toDoubleArray = function (arr_) {
        return new Float64Array(arr_).buffer;
    };
    HeatTileGeneratorWorkerManager.prototype.r = function (a, b, c) {
        this.j++;
        if (this.j >= 0x7FFFFFFF) {
            this.j = 1;
        }
        this.g.addItem(this.j.toString(), a);
        this.h.addItem(this.j.toString(), b);
        var messageId_ = this.j;
        var innerSettings_ = a.flatten();
        innerSettings_.messageId = messageId_;
        innerSettings_.transferableSupported = this._supportsTransferable;
        if (a.isNewData) {
            innerSettings_.latitudes = this.toDoubleArray(innerSettings_.latitudes);
            innerSettings_.longitudes = this.toDoubleArray(innerSettings_.longitudes);
            innerSettings_.values = this.toDoubleArray(innerSettings_.values);
        }
        else {
            innerSettings_.latitudes = null;
            innerSettings_.longitudes = null;
            innerSettings_.values = null;
        }
        if (this._supportsTransferable && a.isNewData) {
            this._worker.postMessage(innerSettings_, [innerSettings_.latitudes,
                innerSettings_.longitudes,
                innerSettings_.values]);
        }
        else {
            this._worker.postMessage(innerSettings_);
        }
    };
    HeatTileGeneratorWorkerManager.prototype.t = function (z_, x_, y_) {
        var cancelMsg_ = {
            cancelTile: true,
            z: z_,
            x: x_,
            y: y_
        };
        this._worker.postMessage(cancelMsg_);
    };
    HeatTileGeneratorWorkerManager.prototype.y = function (a, b, c) {
        this.x();
        if (this.e) {
            this.r(a, b, c);
        }
        else {
            this.q(a, b, c);
        }
    };
    HeatTileGeneratorWorkerManager.prototype.aa = function () {
        var _this = this;
        if (this.i.c != null) {
            var a = this.i.c;
            this.i.h(a);
            var b = a.c.g;
            if (this.f.containsKey(b.z + "_" + b.x + "_" + b.y)) {
                var c = this.f.item(b.z + "_" + b.x + "_" + b.y);
                c.remove(a);
                if (c.count == 0) {
                    this.f.removeItem(b.z + "_" + b.x + "_" + b.y);
                }
            }
            a.c.doWork();
        }
        if (this.i.c != null) {
            window.setTimeout(function () { return _this.aa(); }, 16);
        }
    };
    HeatTileGeneratorWorkerManager.prototype.q = function (a, b, c) {
        var _this = this;
        {
            var d = new HeatTileGeneratorWorker(a);
            d.completedSink = new TileWorkCompletedSink(this, b);
            this.i.f(d);
            var e = void 0;
            var f = d.g.z + "_" + d.g.x + "_" + d.g.y;
            if (this.f.containsKey(f)) {
                e = this.f.item(f);
            }
            else {
                e = new List$1(LinkedListNode$1.$.specialize(HeatTileGeneratorWorker.$), 0);
                this.f.addItem(f, e);
            }
            e.add(this.i.d);
            window.setTimeout(function () { return _this.aa(); }, 16);
        }
    };
    HeatTileGeneratorWorkerManager.prototype.w = function () {
        if (this._worker != null) {
            this._worker.terminate();
            this._worker = null;
        }
        this.g.clear();
        this.h.clear();
    };
    HeatTileGeneratorWorkerManager.prototype.s = function (a, b, c) {
        this.x();
        if (this.e) {
            this.t(a, b, c);
        }
        else {
            if (this.f.containsKey(a + "_" + b + "_" + c)) {
                var d = this.f.item(a + "_" + b + "_" + c);
                for (var e = d.count - 1; e >= 0; e--) {
                    var f = d._inner[e];
                    if (f.c.g.testRun) {
                        continue;
                    }
                    d.removeAt(e);
                    var g = f.c;
                    this.i.h(f);
                    g.completedSink = null;
                }
            }
        }
    };
    HeatTileGeneratorWorkerManager.$t = markType(HeatTileGeneratorWorkerManager, 'HeatTileGeneratorWorkerManager');
    return HeatTileGeneratorWorkerManager;
}(Base));
export { HeatTileGeneratorWorkerManager };
/**
 * @hidden
 */
var TileWorkCompletedSink = /** @class */ (function (_super) {
    tslib_1.__extends(TileWorkCompletedSink, _super);
    function TileWorkCompletedSink(a, b) {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.b = null;
        _this.a = a;
        _this.b = b;
        return _this;
    }
    TileWorkCompletedSink.prototype.onCompleted = function (a) {
        this.b(this.a, a);
    };
    TileWorkCompletedSink.$t = markType(TileWorkCompletedSink, 'TileWorkCompletedSink', Base.$, [ITileWorkCompletedSink_$type]);
    return TileWorkCompletedSink;
}(Base));
export { TileWorkCompletedSink };
//# sourceMappingURL=HeatTileGeneratorWorkerManager_combined.js.map