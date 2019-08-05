/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "./type";
/**
 * Indicates the priority for a page request.
 */
export var DataSourcePageRequestPriority;
(function (DataSourcePageRequestPriority) {
    /**
     * Indicates a request with low priority.
     */
    DataSourcePageRequestPriority[DataSourcePageRequestPriority["Low"] = 0] = "Low";
    /**
     * Indicates a request with normal priority.
     */
    DataSourcePageRequestPriority[DataSourcePageRequestPriority["Normal"] = 1] = "Normal";
    /**
     * Indicates a request with high priority.
     */
    DataSourcePageRequestPriority[DataSourcePageRequestPriority["High"] = 2] = "High";
})(DataSourcePageRequestPriority || (DataSourcePageRequestPriority = {}));
/**
 * @hidden
 */
export let DataSourcePageRequestPriority_$type = markEnum('DataSourcePageRequestPriority', 'Low,0|Normal,1|High,2');
//# sourceMappingURL=DataSourcePageRequestPriority.js.map