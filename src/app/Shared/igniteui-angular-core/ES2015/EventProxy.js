/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
/**
 * @hidden
 */
export class EventProxy extends Base {
    constructor() {
        super(...arguments);
        this.onMouseWheel = null;
        this.onPinchStarted = null;
        this.onPinchDelta = null;
        this.onGestureCompleted = null;
        this.onZoomStarted = null;
        this.onZoomDelta = null;
        this.onZoomCompleted = null;
        this.onFlingStarted = null;
        this.onContactStarted = null;
        this.onDragStarted = null;
        this.onContactMoved = null;
        this.onDragDelta = null;
        this.onContactCompleted = null;
        this.onDragCompleted = null;
        this.onMouseLeave = null;
        this.onMouseOver = null;
        this.onMouseEnter = null;
        this.onMouseDown = null;
        this.onMouseUp = null;
        this.onDoubleTap = null;
        this.onHold = null;
        this.onKeyDown = null;
        this.onKeyUp = null;
        this.bd = null;
        this.ba = 0;
        this.ag = false;
        this.ai = null;
        this.ak = null;
        this.al = null;
        this.am = null;
        this.y = false;
        this.z = false;
        this.aj = null;
    }
    aa(a, b, c) {
        if (this.ak != null) {
            return this.ak(a, b, c);
        }
        return this.ai(a);
    }
    get_ah() {
        return false;
    }
    get ah() {
        return this.get_ah();
    }
    af(a, b) {
        if (this.onMouseWheel != null && !this.ab) {
            return this.onMouseWheel(a, b);
        }
        return false;
    }
    a5(a, b) {
        if (this.onPinchStarted != null && !this.ab) {
            this.onPinchStarted(a, b);
        }
    }
    a8(a, b, c, d) {
        if (this.onZoomStarted != null && !this.ab) {
            this.onZoomStarted(a, b, c, d);
        }
    }
    ac(a, b, c) {
        if (this.onFlingStarted != null && !this.ab) {
            return this.onFlingStarted(a, b, c);
        }
        return true;
    }
    a4(a, b) {
        if (this.onPinchDelta != null && !this.ab) {
            this.onPinchDelta(a, b);
        }
    }
    a7(a, b, c, d) {
        if (this.onZoomDelta != null && !this.ab) {
            this.onZoomDelta(a, b, c, d);
        }
    }
    a6(a, b, c, d) {
        if (this.onZoomCompleted != null && !this.ab) {
            this.onZoomCompleted(a, b, c, d);
        }
    }
    ax(a, b) {
        if (this.onGestureCompleted != null && !this.ab) {
            this.onGestureCompleted(a, b);
        }
    }
    as(a, b) {
        if (this.onContactStarted != null && !this.ab) {
            this.onContactStarted(a, b);
        }
    }
    aw(a) {
        if (this.onDragStarted != null && !this.ab) {
            this.onDragStarted(a);
        }
    }
    ar(a, b) {
        if (this.onContactMoved != null && !this.ab) {
            this.onContactMoved(a, b);
        }
    }
    av(a) {
        if (this.onDragDelta != null && !this.ab) {
            this.onDragDelta(a);
        }
    }
    aq(a, b) {
        if (this.onContactCompleted != null && !this.ab) {
            this.onContactCompleted(a, b);
        }
    }
    au(a) {
        if (this.onDragCompleted != null && !this.ab) {
            this.onDragCompleted(a);
        }
    }
    a1(a) {
        if (this.onMouseLeave != null && !this.ab) {
            this.onMouseLeave(a);
        }
    }
    a2(a, b, c) {
        if (this.onMouseOver != null && !this.ab) {
            this.onMouseOver(a, b, c);
        }
    }
    a0(a) {
        if (this.onMouseEnter != null && !this.ab) {
            this.onMouseEnter(a);
        }
    }
    az(a) {
        if (this.onMouseDown != null && !this.ab) {
            this.onMouseDown(a);
        }
    }
    a3(a) {
        if (this.onMouseUp != null && !this.ab) {
            this.onMouseUp(a);
        }
    }
    ad(a) {
        if (this.onKeyDown != null && !this.ab) {
            return this.onKeyDown(a);
        }
        return false;
    }
    ae(a) {
        if (this.onKeyUp != null && !this.ab) {
            return this.onKeyUp(a);
        }
        return false;
    }
    at(a) {
        if (this.onDoubleTap != null && !this.ab) {
            this.onDoubleTap(a);
        }
    }
    ay(a) {
        if (this.onHold != null && !this.ab) {
            this.onHold(a);
        }
    }
    get ab() {
        return this.y;
    }
    set ab(a) {
        this.y = a;
        this.ap();
    }
    ap() {
    }
}
EventProxy.$t = markType(EventProxy, 'EventProxy');
//# sourceMappingURL=EventProxy.js.map