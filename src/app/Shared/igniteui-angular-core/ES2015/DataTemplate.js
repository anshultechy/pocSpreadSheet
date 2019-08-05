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
export class DataTemplate extends Base {
    constructor() {
        super(...arguments);
        this._render = null;
        this._measure = null;
        this._passStarting = null;
        this._passCompleted = null;
    }
    get render() {
        return this._render;
    }
    set render(a) {
        this._render = a;
    }
    get measure() {
        return this._measure;
    }
    set measure(a) {
        this._measure = a;
    }
    get passStarting() {
        return this._passStarting;
    }
    set passStarting(a) {
        this._passStarting = a;
    }
    get passCompleted() {
        return this._passCompleted;
    }
    set passCompleted(a) {
        this._passCompleted = a;
    }
}
DataTemplate.$t = markType(DataTemplate, 'DataTemplate');
//# sourceMappingURL=DataTemplate.js.map