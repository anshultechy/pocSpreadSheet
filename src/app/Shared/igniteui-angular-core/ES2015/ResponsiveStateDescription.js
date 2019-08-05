/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Description } from "./Description";
import { markType } from "./type";
/**
 * @hidden
 */
export class ResponsiveStateDescription extends Description {
    constructor() {
        super();
        this.l = null;
        this.i = 0;
        this.h = 0;
        this.f = false;
        this.n = null;
        this.m = null;
        this.o = null;
    }
    get_type() {
        return "ResponsiveState";
    }
    get type() {
        return this.get_type();
    }
    get name() {
        return this.l;
    }
    set name(a) {
        this.l = a;
        this.e("Name");
    }
    get minimumWidth() {
        return this.i;
    }
    set minimumWidth(a) {
        this.i = a;
        this.e("MinimumWidth");
    }
    get maximumWidth() {
        return this.h;
    }
    set maximumWidth(a) {
        this.h = a;
        this.e("MaximumWidth");
    }
    get isManualState() {
        return this.f;
    }
    set isManualState(a) {
        this.f = a;
        this.e("IsManualState");
    }
    get StateEnteringRef() {
        return this.n;
    }
    set StateEnteringRef(a) {
        this.n = a;
        this.e("StateEnteringRef");
    }
    get StateEnteredRef() {
        return this.m;
    }
    set StateEnteredRef(a) {
        this.m = a;
        this.e("StateEnteredRef");
    }
    get StateExitedRef() {
        return this.o;
    }
    set StateExitedRef(a) {
        this.o = a;
        this.e("StateExitedRef");
    }
}
ResponsiveStateDescription.$t = markType(ResponsiveStateDescription, 'ResponsiveStateDescription', Description.$);
//# sourceMappingURL=ResponsiveStateDescription.js.map