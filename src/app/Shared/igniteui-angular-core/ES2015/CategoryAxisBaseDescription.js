/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { AxisDescription } from "./AxisDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class CategoryAxisBaseDescription extends AxisDescription {
    constructor() {
        super();
        this.c6 = 0;
        this.c2 = 0;
        this.c3 = 0;
        this.c0 = false;
        this.c8 = null;
    }
    get_type() {
        return "CategoryAxisBase";
    }
    get itemsCount() {
        return this.c6;
    }
    set itemsCount(a) {
        this.c6 = a;
        this.e("ItemsCount");
    }
    get gap() {
        return this.c2;
    }
    set gap(a) {
        this.c2 = a;
        this.e("Gap");
    }
    get overlap() {
        return this.c3;
    }
    set overlap(a) {
        this.c3 = a;
        this.e("Overlap");
    }
    get useClusteringMode() {
        return this.c0;
    }
    set useClusteringMode(a) {
        this.c0 = a;
        this.e("UseClusteringMode");
    }
    get dataSourceRef() {
        return this.c8;
    }
    set dataSourceRef(a) {
        this.c8 = a;
        this.e("DataSourceRef");
    }
}
CategoryAxisBaseDescription.$t = markType(CategoryAxisBaseDescription, 'CategoryAxisBaseDescription', AxisDescription.$);
//# sourceMappingURL=CategoryAxisBaseDescription.js.map