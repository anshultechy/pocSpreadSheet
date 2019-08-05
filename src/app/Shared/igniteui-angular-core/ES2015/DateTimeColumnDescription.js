/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ColumnDescription } from "./ColumnDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class DateTimeColumnDescription extends ColumnDescription {
    constructor() {
        super();
        this.cc = null;
        this.cd = null;
    }
    get_type() {
        return "DateTimeColumn";
    }
    get dateTimeFormat() {
        return this.cc;
    }
    set dateTimeFormat(a) {
        this.cc = a;
        this.e("DateTimeFormat");
    }
    get formatOverrideRef() {
        return this.cd;
    }
    set formatOverrideRef(a) {
        this.cd = a;
        this.e("FormatOverrideRef");
    }
}
DateTimeColumnDescription.$t = markType(DateTimeColumnDescription, 'DateTimeColumnDescription', ColumnDescription.$);
//# sourceMappingURL=DateTimeColumnDescription.js.map