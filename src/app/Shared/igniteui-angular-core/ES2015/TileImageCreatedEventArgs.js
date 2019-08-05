/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { EventArgs, markType } from "./type";
/**
 * @hidden
 */
export class TileImageCreatedEventArgs extends EventArgs {
    constructor() {
        super(...arguments);
        this._imageData = null;
        this._image = null;
        this._z = 0;
        this._x = 0;
        this._y = 0;
        this._url = null;
    }
    get imageData() {
        return this._imageData;
    }
    set imageData(a) {
        this._imageData = a;
    }
    get image() {
        return this._image;
    }
    set image(a) {
        this._image = a;
    }
    get z() {
        return this._z;
    }
    set z(a) {
        this._z = a;
    }
    get x() {
        return this._x;
    }
    set x(a) {
        this._x = a;
    }
    get y() {
        return this._y;
    }
    set y(a) {
        this._y = a;
    }
    get url() {
        return this._url;
    }
    set url(a) {
        this._url = a;
    }
}
TileImageCreatedEventArgs.$t = markType(TileImageCreatedEventArgs, 'TileImageCreatedEventArgs', EventArgs.$);
//# sourceMappingURL=TileImageCreatedEventArgs.js.map