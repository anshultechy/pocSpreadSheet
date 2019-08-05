/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "./type";
/**
 * The row type.
 */
export var DataSourceRowType;
(function (DataSourceRowType) {
    /**
     * Normal row
     */
    DataSourceRowType[DataSourceRowType["Normal"] = 0] = "Normal";
    /**
     * Section header
     */
    DataSourceRowType[DataSourceRowType["SectionHeader"] = 1] = "SectionHeader";
    /**
     * Section footer
     */
    DataSourceRowType[DataSourceRowType["SectionFooter"] = 2] = "SectionFooter";
    /**
     * A shited row
     */
    DataSourceRowType[DataSourceRowType["ShiftedRow"] = 3] = "ShiftedRow";
    /**
     * Custom
     */
    DataSourceRowType[DataSourceRowType["Custom"] = 4] = "Custom";
})(DataSourceRowType || (DataSourceRowType = {}));
/**
 * @hidden
 */
export let DataSourceRowType_$type = markEnum('DataSourceRowType', 'Normal,0|SectionHeader,1|SectionFooter,2|ShiftedRow,3|Custom,4');
//# sourceMappingURL=DataSourceRowType.js.map