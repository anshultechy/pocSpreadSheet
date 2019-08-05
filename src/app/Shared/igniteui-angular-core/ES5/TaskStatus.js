/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "./type";
export var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["Created"] = 0] = "Created";
    TaskStatus[TaskStatus["RanToCompletion"] = 5] = "RanToCompletion";
    TaskStatus[TaskStatus["Canceled"] = 6] = "Canceled";
    TaskStatus[TaskStatus["Faulted"] = 7] = "Faulted";
})(TaskStatus || (TaskStatus = {}));
/**
 * @hidden
 */
export var TaskStatus_$type = markEnum('TaskStatus', 'Created,0|RanToCompletion,5|Canceled,6|Faulted,7');
//# sourceMappingURL=TaskStatus.js.map