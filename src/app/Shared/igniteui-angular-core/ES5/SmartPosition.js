/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "./type";
/**
 * Describes available positions for smart label placement with respect to the notional rectangle's
 * origin
 */
export var SmartPosition;
(function (SmartPosition) {
    /**
     * Specifies left top as a valid smart placement position.
     */
    SmartPosition[SmartPosition["LeftTop"] = 0] = "LeftTop";
    /**
     * Specifies center top as a valid smart placement position.
     */
    SmartPosition[SmartPosition["CenterTop"] = 1] = "CenterTop";
    /**
     * Specifies right top as a valid smart placement position.
     */
    SmartPosition[SmartPosition["RightTop"] = 2] = "RightTop";
    /**
     * Specifies left center as a valid smart placement position.
     */
    SmartPosition[SmartPosition["LeftCenter"] = 3] = "LeftCenter";
    /**
     * Specifies center center as a valid smart placement position.
     */
    SmartPosition[SmartPosition["CenterCenter"] = 4] = "CenterCenter";
    /**
     * Specifies right center as a valid smart placement position.
     */
    SmartPosition[SmartPosition["RightCenter"] = 5] = "RightCenter";
    /**
     * Specifies left bottom as a valid smart placement position.
     */
    SmartPosition[SmartPosition["LeftBottom"] = 6] = "LeftBottom";
    /**
     * Specifies center bottom as a valid smart placement position.
     */
    SmartPosition[SmartPosition["CenterBottom"] = 7] = "CenterBottom";
    /**
     * Specifies right bottom as a valid smart placement position.
     */
    SmartPosition[SmartPosition["RightBottom"] = 8] = "RightBottom";
})(SmartPosition || (SmartPosition = {}));
/**
 * @hidden
 */
export var SmartPosition_$type = markEnum('SmartPosition', 'LeftTop,0|CenterTop,1|RightTop,2|LeftCenter,3|CenterCenter,4|RightCenter,5|LeftBottom,6|CenterBottom,7|RightBottom,8');
//# sourceMappingURL=SmartPosition.js.map