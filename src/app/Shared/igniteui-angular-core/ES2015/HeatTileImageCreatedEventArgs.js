/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { TileImageCreatedEventArgs } from "./TileImageCreatedEventArgs";
import { markType } from "./type";
/**
 * @hidden
 */
export class HeatTileImageCreatedEventArgs extends TileImageCreatedEventArgs {
    constructor() {
        super(...arguments);
        this._globalMinimumValue = 0;
        this._globalMaximumValue = 0;
        this._globalMaximumValueLongitude = 0;
        this._globalMaximumValueLatitude = 0;
        this._globalMinimumValueLongitude = 0;
        this._globalMinimumValueLatitude = 0;
    }
    get globalMinimumValue() {
        return this._globalMinimumValue;
    }
    set globalMinimumValue(a) {
        this._globalMinimumValue = a;
    }
    get globalMaximumValue() {
        return this._globalMaximumValue;
    }
    set globalMaximumValue(a) {
        this._globalMaximumValue = a;
    }
    get globalMaximumValueLongitude() {
        return this._globalMaximumValueLongitude;
    }
    set globalMaximumValueLongitude(a) {
        this._globalMaximumValueLongitude = a;
    }
    get globalMaximumValueLatitude() {
        return this._globalMaximumValueLatitude;
    }
    set globalMaximumValueLatitude(a) {
        this._globalMaximumValueLatitude = a;
    }
    get globalMinimumValueLongitude() {
        return this._globalMinimumValueLongitude;
    }
    set globalMinimumValueLongitude(a) {
        this._globalMinimumValueLongitude = a;
    }
    get globalMinimumValueLatitude() {
        return this._globalMinimumValueLatitude;
    }
    set globalMinimumValueLatitude(a) {
        this._globalMinimumValueLatitude = a;
    }
}
HeatTileImageCreatedEventArgs.$t = markType(HeatTileImageCreatedEventArgs, 'HeatTileImageCreatedEventArgs', TileImageCreatedEventArgs.$);
//# sourceMappingURL=HeatTileImageCreatedEventArgs.js.map