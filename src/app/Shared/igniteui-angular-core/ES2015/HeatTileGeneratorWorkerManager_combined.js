/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
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
export class HeatTileGeneratorWorkerManager extends Base {
    constructor() {
        super();
        this.b = true;
        this.o = null;
        this.k = null;
        this._supportsTransferable = false;
        this.d = false;
        this._worker = null;
        this.a = false;
        this.j = 0;
        this.g = new Dictionary$2(String_$type, TileWorkSettings.$, 0);
        this.h = new Dictionary$2(String_$type, Delegate_$type, 0);
        this.i = new LinkedList$1(HeatTileGeneratorWorker.$);
        this.f = new Dictionary$2(String_$type, List$1.$.specialize(LinkedListNode$1.$.specialize(HeatTileGeneratorWorker.$)), 0);
    }
    get e() {
        return this.b;
    }
    set e(a) {
        this.b = a;
    }
    get p() {
        return this.o;
    }
    set p(a) {
        this.o = a;
    }
    get n() {
        return this.k;
    }
    set n(a) {
        this.k = a;
    }
    u() {
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
    }
    v() {
        if (this.p == null && this.n == null) {
            throw new Error('HeatTileGenerator wants to use web workers, but webWorkerScriptPath and webWorkerInstance were not specified. Either specify the path, an instance, or set allowWebWorkers to false');
        }
        if (this.n != null) {
            this._worker = this.n;
        }
        else {
            let path_ = this.p;
            this._worker = new Worker(path_);
        }
        this._worker.postMessage = this._worker.webkitPostMessage || this._worker.postMessage;
        let onMessage_ = runOn(this, this.z);
        this._worker.onmessage = onMessage_;
    }
    z(args_) {
        let data_ = args_.data;
        let a = new HeatTileImageCreatedEventArgs();
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
        let b = (data_.messageId.toString());
        if (!this.g.containsKey(b)) {
            return;
        }
        let c = this.g.item(b);
        let d = this.h.item(b);
        this.g.removeItem(b);
        this.h.removeItem(b);
        a.image = c.image;
        d(this, a);
    }
    x() {
        this.u();
        if (this.e && this._worker == null) {
            this.v();
        }
        if (!this.e && this._worker != null) {
            this._worker.terminate();
            this._worker.onmessage = null;
            this._worker = null;
        }
    }
    toDoubleArray(arr_) {
        return new Float64Array(arr_).buffer;
    }
    r(a, b, c) {
        this.j++;
        if (this.j >= 0x7FFFFFFF) {
            this.j = 1;
        }
        this.g.addItem(this.j.toString(), a);
        this.h.addItem(this.j.toString(), b);
        let messageId_ = this.j;
        let innerSettings_ = a.flatten();
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
    }
    t(z_, x_, y_) {
        let cancelMsg_ = {
            cancelTile: true,
            z: z_,
            x: x_,
            y: y_
        };
        this._worker.postMessage(cancelMsg_);
    }
    y(a, b, c) {
        this.x();
        if (this.e) {
            this.r(a, b, c);
        }
        else {
            this.q(a, b, c);
        }
    }
    aa() {
        if (this.i.c != null) {
            let a = this.i.c;
            this.i.h(a);
            let b = a.c.g;
            if (this.f.containsKey(b.z + "_" + b.x + "_" + b.y)) {
                let c = this.f.item(b.z + "_" + b.x + "_" + b.y);
                c.remove(a);
                if (c.count == 0) {
                    this.f.removeItem(b.z + "_" + b.x + "_" + b.y);
                }
            }
            a.c.doWork();
        }
        if (this.i.c != null) {
            window.setTimeout(() => this.aa(), 16);
        }
    }
    q(a, b, c) {
        {
            let d = new HeatTileGeneratorWorker(a);
            d.completedSink = new TileWorkCompletedSink(this, b);
            this.i.f(d);
            let e;
            let f = d.g.z + "_" + d.g.x + "_" + d.g.y;
            if (this.f.containsKey(f)) {
                e = this.f.item(f);
            }
            else {
                e = new List$1(LinkedListNode$1.$.specialize(HeatTileGeneratorWorker.$), 0);
                this.f.addItem(f, e);
            }
            e.add(this.i.d);
            window.setTimeout(() => this.aa(), 16);
        }
    }
    w() {
        if (this._worker != null) {
            this._worker.terminate();
            this._worker = null;
        }
        this.g.clear();
        this.h.clear();
    }
    s(a, b, c) {
        this.x();
        if (this.e) {
            this.t(a, b, c);
        }
        else {
            if (this.f.containsKey(a + "_" + b + "_" + c)) {
                let d = this.f.item(a + "_" + b + "_" + c);
                for (let e = d.count - 1; e >= 0; e--) {
                    let f = d._inner[e];
                    if (f.c.g.testRun) {
                        continue;
                    }
                    d.removeAt(e);
                    let g = f.c;
                    this.i.h(f);
                    g.completedSink = null;
                }
            }
        }
    }
}
HeatTileGeneratorWorkerManager.$t = markType(HeatTileGeneratorWorkerManager, 'HeatTileGeneratorWorkerManager');
/**
 * @hidden
 */
export class TileWorkCompletedSink extends Base {
    constructor(a, b) {
        super();
        this.a = null;
        this.b = null;
        this.a = a;
        this.b = b;
    }
    onCompleted(a) {
        this.b(this.a, a);
    }
}
TileWorkCompletedSink.$t = markType(TileWorkCompletedSink, 'TileWorkCompletedSink', Base.$, [ITileWorkCompletedSink_$type]);
//# sourceMappingURL=HeatTileGeneratorWorkerManager_combined.js.map