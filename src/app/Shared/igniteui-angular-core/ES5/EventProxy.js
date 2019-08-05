/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
/**
 * @hidden
 */
var EventProxy = /** @class */ (function (_super) {
    tslib_1.__extends(EventProxy, _super);
    function EventProxy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onMouseWheel = null;
        _this.onPinchStarted = null;
        _this.onPinchDelta = null;
        _this.onGestureCompleted = null;
        _this.onZoomStarted = null;
        _this.onZoomDelta = null;
        _this.onZoomCompleted = null;
        _this.onFlingStarted = null;
        _this.onContactStarted = null;
        _this.onDragStarted = null;
        _this.onContactMoved = null;
        _this.onDragDelta = null;
        _this.onContactCompleted = null;
        _this.onDragCompleted = null;
        _this.onMouseLeave = null;
        _this.onMouseOver = null;
        _this.onMouseEnter = null;
        _this.onMouseDown = null;
        _this.onMouseUp = null;
        _this.onDoubleTap = null;
        _this.onHold = null;
        _this.onKeyDown = null;
        _this.onKeyUp = null;
        _this.bd = null;
        _this.ba = 0;
        _this.ag = false;
        _this.ai = null;
        _this.ak = null;
        _this.al = null;
        _this.am = null;
        _this.y = false;
        _this.z = false;
        _this.aj = null;
        return _this;
    }
    EventProxy.prototype.aa = function (a, b, c) {
        if (this.ak != null) {
            return this.ak(a, b, c);
        }
        return this.ai(a);
    };
    EventProxy.prototype.get_ah = function () {
        return false;
    };
    Object.defineProperty(EventProxy.prototype, "ah", {
        get: function () {
            return this.get_ah();
        },
        enumerable: true,
        configurable: true
    });
    EventProxy.prototype.af = function (a, b) {
        if (this.onMouseWheel != null && !this.ab) {
            return this.onMouseWheel(a, b);
        }
        return false;
    };
    EventProxy.prototype.a5 = function (a, b) {
        if (this.onPinchStarted != null && !this.ab) {
            this.onPinchStarted(a, b);
        }
    };
    EventProxy.prototype.a8 = function (a, b, c, d) {
        if (this.onZoomStarted != null && !this.ab) {
            this.onZoomStarted(a, b, c, d);
        }
    };
    EventProxy.prototype.ac = function (a, b, c) {
        if (this.onFlingStarted != null && !this.ab) {
            return this.onFlingStarted(a, b, c);
        }
        return true;
    };
    EventProxy.prototype.a4 = function (a, b) {
        if (this.onPinchDelta != null && !this.ab) {
            this.onPinchDelta(a, b);
        }
    };
    EventProxy.prototype.a7 = function (a, b, c, d) {
        if (this.onZoomDelta != null && !this.ab) {
            this.onZoomDelta(a, b, c, d);
        }
    };
    EventProxy.prototype.a6 = function (a, b, c, d) {
        if (this.onZoomCompleted != null && !this.ab) {
            this.onZoomCompleted(a, b, c, d);
        }
    };
    EventProxy.prototype.ax = function (a, b) {
        if (this.onGestureCompleted != null && !this.ab) {
            this.onGestureCompleted(a, b);
        }
    };
    EventProxy.prototype.as = function (a, b) {
        if (this.onContactStarted != null && !this.ab) {
            this.onContactStarted(a, b);
        }
    };
    EventProxy.prototype.aw = function (a) {
        if (this.onDragStarted != null && !this.ab) {
            this.onDragStarted(a);
        }
    };
    EventProxy.prototype.ar = function (a, b) {
        if (this.onContactMoved != null && !this.ab) {
            this.onContactMoved(a, b);
        }
    };
    EventProxy.prototype.av = function (a) {
        if (this.onDragDelta != null && !this.ab) {
            this.onDragDelta(a);
        }
    };
    EventProxy.prototype.aq = function (a, b) {
        if (this.onContactCompleted != null && !this.ab) {
            this.onContactCompleted(a, b);
        }
    };
    EventProxy.prototype.au = function (a) {
        if (this.onDragCompleted != null && !this.ab) {
            this.onDragCompleted(a);
        }
    };
    EventProxy.prototype.a1 = function (a) {
        if (this.onMouseLeave != null && !this.ab) {
            this.onMouseLeave(a);
        }
    };
    EventProxy.prototype.a2 = function (a, b, c) {
        if (this.onMouseOver != null && !this.ab) {
            this.onMouseOver(a, b, c);
        }
    };
    EventProxy.prototype.a0 = function (a) {
        if (this.onMouseEnter != null && !this.ab) {
            this.onMouseEnter(a);
        }
    };
    EventProxy.prototype.az = function (a) {
        if (this.onMouseDown != null && !this.ab) {
            this.onMouseDown(a);
        }
    };
    EventProxy.prototype.a3 = function (a) {
        if (this.onMouseUp != null && !this.ab) {
            this.onMouseUp(a);
        }
    };
    EventProxy.prototype.ad = function (a) {
        if (this.onKeyDown != null && !this.ab) {
            return this.onKeyDown(a);
        }
        return false;
    };
    EventProxy.prototype.ae = function (a) {
        if (this.onKeyUp != null && !this.ab) {
            return this.onKeyUp(a);
        }
        return false;
    };
    EventProxy.prototype.at = function (a) {
        if (this.onDoubleTap != null && !this.ab) {
            this.onDoubleTap(a);
        }
    };
    EventProxy.prototype.ay = function (a) {
        if (this.onHold != null && !this.ab) {
            this.onHold(a);
        }
    };
    Object.defineProperty(EventProxy.prototype, "ab", {
        get: function () {
            return this.y;
        },
        set: function (a) {
            this.y = a;
            this.ap();
        },
        enumerable: true,
        configurable: true
    });
    EventProxy.prototype.ap = function () {
    };
    EventProxy.$t = markType(EventProxy, 'EventProxy');
    return EventProxy;
}(Base));
export { EventProxy };
//# sourceMappingURL=EventProxy.js.map