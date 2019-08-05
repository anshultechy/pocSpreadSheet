/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { CellInfoDescription } from "./CellInfoDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class DateTimeCellInfoDescription extends CellInfoDescription {
    constructor() {
        super();
        this.c4 = new Date();
        this.c7 = null;
        this.c6 = null;
        this.c2 = false;
    }
    get_type() {
        return "DateTimeCellInfo";
    }
    get dateTimeValue() {
        return this.c4;
    }
    set dateTimeValue(a) {
        this.c4 = a;
        this.e("DateTimeValue");
    }
    get formatOverrideRef() {
        return this.c7;
    }
    set formatOverrideRef(a) {
        this.c7 = a;
        this.e("FormatOverrideRef");
    }
    get dateTimeFormat() {
        return this.c6;
    }
    set dateTimeFormat(a) {
        this.c6 = a;
        this.e("DateTimeFormat");
    }
    get isOffsetValue() {
        return this.c2;
    }
    set isOffsetValue(a) {
        this.c2 = a;
        this.e("IsOffsetValue");
    }
}
DateTimeCellInfoDescription.$t = markType(DateTimeCellInfoDescription, 'DateTimeCellInfoDescription', CellInfoDescription.$);
//# sourceMappingURL=DateTimeCellInfoDescription.js.map