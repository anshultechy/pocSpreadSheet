/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
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
export class HeatTileGeneratorWebWorker extends Base {
    static get postmessage() {
        return HeatTileGeneratorWebWorker._postmessage;
    }
    static set postmessage(a) {
        HeatTileGeneratorWebWorker._postmessage = a;
    }
    static onmessage(args_) {
        let data_ = args_.data;
        let a = (data_.cancelTile);
        let b = (data_.z);
        let c = (data_.y);
        let d = (data_.x);
        if (a) {
            for (let i_ = 0; i_ < HeatTileGeneratorWebWorker.b.length; i_++) {
                let e = HeatTileGeneratorWebWorker.b[i_];
                if (e.g.testRun) {
                    continue;
                }
                if (e.g.z == b && e.g.x == d && e.g.y == c) {
                    let workers_ = HeatTileGeneratorWebWorker.b;
                    workers_.splice(i_, 1);
                    i_--;
                }
            }
        }
        let f = new TileWorkSettings();
        let g = data_;
        if (!g["messageId"]) {
            return;
        }
        if (g["isNewData"]) {
            let yValues_ = g["yValues"];
            let xValues_ = g["xValues"];
            let values_ = g["values"];
            HeatTileGeneratorWebWorker._yValues = (new Float64Array(yValues_));
            HeatTileGeneratorWebWorker._xValues = (new Float64Array(xValues_));
            HeatTileGeneratorWebWorker._values = (new Float64Array(values_));
        }
        let h = g["scaleColors"];
        let i = new Array(h.length);
        for (let j = 0; j < h.length; j++) {
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
        let k = new HeatTileGeneratorWorker(f);
        k.u = typeGetValue(g["messageId"]);
        k.h = true;
        k.completedSink = new CompletedSinkImpl(k);
        let workersl_ = HeatTileGeneratorWebWorker.b;
        let worker_ = k;
        workersl_.push(worker_);
    }
    static start() {
        let workers_ = HeatTileGeneratorWebWorker.b;
        setInterval(function () {
            if (workers_.length > 0) {
                var worker = workers_.shift();
                worker.doWork();
                worker.completedSink = null;
            }
        }, 16);
        ;
    }
}
HeatTileGeneratorWebWorker.$t = markType(HeatTileGeneratorWebWorker, 'HeatTileGeneratorWebWorker');
HeatTileGeneratorWebWorker.e = new HeatTileScaler();
HeatTileGeneratorWebWorker.b = [];
HeatTileGeneratorWebWorker._postmessage = null;
HeatTileGeneratorWebWorker._yValues = null;
HeatTileGeneratorWebWorker._xValues = null;
HeatTileGeneratorWebWorker._values = null;
/**
 * @hidden
 */
export class CompletedSinkImpl extends Base {
    constructor(a) {
        super();
        this.a = null;
        this.a = a;
    }
    onCompleted(a) {
        let b = a;
        let c = {};
        let imageData_ = b.imageData;
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
    }
}
CompletedSinkImpl.$t = markType(CompletedSinkImpl, 'CompletedSinkImpl', Base.$, [ITileWorkCompletedSink_$type]);
//# sourceMappingURL=HeatTileGeneratorWebWorker_combined.js.map