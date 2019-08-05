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
export class GetTileImageUriArgs extends EventArgs {
    constructor(a, b, c) {
        super();
        this._tileLevel = 0;
        this._tilePositionX = 0;
        this._tilePositionY = 0;
        this._tileImageUri = null;
        this.tileLevel = a;
        this.tilePositionX = b;
        this.tilePositionY = c;
    }
    get tileLevel() {
        return this._tileLevel;
    }
    set tileLevel(a) {
        this._tileLevel = a;
    }
    get tilePositionX() {
        return this._tilePositionX;
    }
    set tilePositionX(a) {
        this._tilePositionX = a;
    }
    get tilePositionY() {
        return this._tilePositionY;
    }
    set tilePositionY(a) {
        this._tilePositionY = a;
    }
    get tileImageUri() {
        return this._tileImageUri;
    }
    set tileImageUri(a) {
        this._tileImageUri = a;
    }
}
GetTileImageUriArgs.$t = markType(GetTileImageUriArgs, 'GetTileImageUriArgs', EventArgs.$);
//# sourceMappingURL=GetTileImageUriArgs.js.map