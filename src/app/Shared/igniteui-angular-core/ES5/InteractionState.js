/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "./type";
/**
 * Describes available interaction states of the chart or geographic map control.
 */
export var InteractionState;
(function (InteractionState) {
    /**
     * User gesture will not change the state of the chart.
     */
    InteractionState[InteractionState["None"] = 0] = "None";
    /**
     * User gesture will start a drag rectangle to zoom the chart.
     */
    InteractionState[InteractionState["DragZoom"] = 1] = "DragZoom";
    /**
     * User gesture will start a pan action to move the chart's window.
     */
    InteractionState[InteractionState["DragPan"] = 2] = "DragPan";
    /**
     * User gesture will start a pan action in a touch environment and a drag rectangle in a mouse environment.
     */
    InteractionState[InteractionState["Auto"] = 3] = "Auto";
})(InteractionState || (InteractionState = {}));
/**
 * @hidden
 */
export var InteractionState_$type = markEnum('InteractionState', 'None,0|DragZoom,1|DragPan,2|Auto,3');
//# sourceMappingURL=InteractionState.js.map