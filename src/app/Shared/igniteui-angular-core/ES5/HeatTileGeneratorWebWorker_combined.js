/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, typeGetValue, markType } from "./type";
import { TileWorkSettings } from "./TileWorkSettings";
import { Color } from "./Color";
import { HeatTileGeneratorWorker } from "./HeatTileGeneratorWorker";
import { HeatTileScaler } from "./HeatTileScaler";
import { Rect } from "./Rect";
import { ITileWorkCompletedSink_$type } from "./ITileWorkCompletedSink";
/**
 * @hidden
 */
var HeatTileGeneratorWebWorker = /** @class */ (function (_super) {
    tslib_1.__extends(HeatTileGeneratorWebWorker, _super);
    function HeatTileGeneratorWebWorker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HeatTileGeneratorWebWorker, "postmessage", {
        get: function () {
            return HeatTileGeneratorWebWorker._postmessage;
        },
        set: function (a) {
            HeatTileGeneratorWebWorker._postmessage = a;
        },
        enumerable: true,
        configurable: true
    });
    HeatTileGeneratorWebWorker.onmessage = function (args_) {
        var data_ = args_.data;
        var a = (data_.cancelTile);
        var b = (data_.z);
        var c = (data_.y);
        var d = (data_.x);
        if (a) {
            for (var i_ = 0; i_ < HeatTileGeneratorWebWorker.b.length; i_++) {
                var e = HeatTileGeneratorWebWorker.b[i_];
                if (e.g.testRun) {
                    continue;
                }
                if (e.g.z == b && e.g.x == d && e.g.y == c) {
                    var workers_ = HeatTileGeneratorWebWorker.b;
                    workers_.splice(i_, 1);
                    i_--;
                }
            }
        }
        var f = new TileWorkSettings();
        var g = data_;
        if (!g["messageId"]) {
            return;
        }
        if (g["isNewData"]) {
            var yValues_ = g["yValues"];
            var xValues_ = g["xValues"];
            var values_ = g["values"];
            HeatTileGeneratorWebWorker._yValues = (new Float64Array(yValues_));
            HeatTileGeneratorWebWorker._xValues = (new Float64Array(xValues_));
            HeatTileGeneratorWebWorker._values = (new Float64Array(values_));
        }
        var h = g["scaleColors"];
        var i = new Array(h.length);
        for (var j = 0; j < h.length; j++) {
            i[j] = Color.u(typeGetValue(h[j]["a"]), typeGetValue(h[j]["r"]), typeGetValue(h[j]["g"]), typeGetValue(h[j]["b"]));
        }
        f.scaler = HeatTileGeneratorWebWorker.e;
        f.blurRadius = g["blurRadius"];
        f.maxBlurRadius = g["maxBlurRadius"];
        f.useBlurRadiusAdjustedForZoom = (g["useBlurRadiusAdjustedForZoom"]);
        f.minimumColor = Color.u(typeGetValue(g["minimumColor"]["a"]), typeGetValue(g["minimumColor"]["r"]), typeGetValue(g["minimumColor"]["g"]), typeGetValue(g["minimumColor"]["b"]));
        f.maximumColor = Color.u(typeGetValue(g["maximumColor"]["a"]), typeGetValue(g["maximumColor"]["r"]), typeGetValue(g["maximumColor"]["g"]), typeGetValue(g["maximumColor"]["b"]));
        f.tileViewport = new Rect(0, g["tileViewport"]["left"], g["tileViewport"]["top"], g["tileViewport"]["width"], g["tileViewport"]["height"]);
        f.yValues = HeatTileGeneratorWebWorker._yValues;
        f.xValues = HeatTileGeneratorWebWorker._xValues;
        f.values = HeatTileGeneratorWebWorker._values;
        f.minimumVisibleLatitude = g["minimumVisibleLatitude"];
        f.minimumVisibleLongitude = g["minimumVisibleLongitude"];
        f.maximumVisibleLatitude = g["maximumVisibleLatitude"];
        f.maximumVisibleLongitude = g["maximumVisibleLongitude"];
        f.z = typeGetValue(g["z"]);
        f.x = typeGetValue(g["x"]);
        f.y = typeGetValue(g["y"]);
        f.window = new Rect(0, g["window"]["left"], g["window"]["top"], g["window"]["width"], g["window"]["height"]);
        f.testRun = g["testRun"];
        f.globalMinimum = g["globalMinimum"];
        f.globalMaximum = g["globalMaximum"];
        f.useGlobalMinMax = g["useGlobalMinMax"];
        f.minimumValue = g["minimumValue"];
        f.maximumValue = g["maximumValue"];
        f.scaleColorOffsets = g["scaleColorOffsets"];
        f.scaleColors = i;
        f.useLogarithmicScale = g["useLogarithmicScale"];
        f.logarithmBase = g["logarithmBase"];
        var k = new HeatTileGeneratorWorker(f);
        k.u = typeGetValue(g["messageId"]);
        k.h = true;
        k.completedSink = new CompletedSinkImpl(k);
        var workersl_ = HeatTileGeneratorWebWorker.b;
        var worker_ = k;
        workersl_.push(worker_);
    };
    HeatTileGeneratorWebWorker.start = function () {
        var workers_ = HeatTileGeneratorWebWorker.b;
        setInterval(function () {
            if (workers_.length > 0) {
                var worker = workers_.shift();
                worker.doWork();
                worker.completedSink = null;
            }
        }, 16);
        ;
    };
    HeatTileGeneratorWebWorker.$t = markType(HeatTileGeneratorWebWorker, 'HeatTileGeneratorWebWorker');
    HeatTileGeneratorWebWorker.e = new HeatTileScaler();
    HeatTileGeneratorWebWorker.b = [];
    HeatTileGeneratorWebWorker._postmessage = null;
    HeatTileGeneratorWebWorker._yValues = null;
    HeatTileGeneratorWebWorker._xValues = null;
    HeatTileGeneratorWebWorker._values = null;
    return HeatTileGeneratorWebWorker;
}(Base));
export { HeatTileGeneratorWebWorker };
/**
 * @hidden
 */
var CompletedSinkImpl = /** @class */ (function (_super) {
    tslib_1.__extends(CompletedSinkImpl, _super);
    function CompletedSinkImpl(a) {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.a = a;
        return _this;
    }
    CompletedSinkImpl.prototype.onCompleted = function (a) {
        var b = a;
        var c = {};
        var imageData_ = b.imageData;
        c["messageId"] = this.a.u;
        c["imageData"] = (b.imageData == null ? null : (new Uint8ClampedArray(imageData_))["buffer"]);
        c["z"] = b.z;
        c["x"] = b.x;
        c["y"] = b.y;
        c["url"] = b.url;
        c["globalMinimumValue"] = b.globalMinimumValue;
        c["globalMaximumValue"] = b.globalMaximumValue;
        c["globalMaximumValueLongitude"] = b.globalMaximumValueLongitude;
        c["globalMaximumValueLatitude"] = b.globalMaximumValueLatitude;
        c["globalMinimumValueLongitude"] = b.globalMinimumValueLongitude;
        c["globalMinimumValueLatitude"] = b.globalMinimumValueLatitude;
        if (this.a.h && c["imageData"] != null) {
            HeatTileGeneratorWebWorker.postmessage(c, [c["imageData"]]);
        }
        else {
            HeatTileGeneratorWebWorker.postmessage(c);
        }
    };
    CompletedSinkImpl.$t = markType(CompletedSinkImpl, 'CompletedSinkImpl', Base.$, [ITileWorkCompletedSink_$type]);
    return CompletedSinkImpl;
}(Base));
export { CompletedSinkImpl };
//# sourceMappingURL=HeatTileGeneratorWebWorker_combined.js.map