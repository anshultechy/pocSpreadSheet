/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
export class EventArgs {
}
export var ListSortDirection;
(function (ListSortDirection) {
    ListSortDirection[ListSortDirection["Ascending"] = 0] = "Ascending";
    ListSortDirection[ListSortDirection["Descending"] = 1] = "Descending";
})(ListSortDirection || (ListSortDirection = {}));
export class SortDescription {
    get propertyName() {
        return this._propertyName;
    }
    set propertName(value) {
        this._propertyName = value;
    }
    get direction() {
        return this._direction;
    }
    set direction(value) {
        this._direction = value;
    }
}
//# sourceMappingURL=IgUI.js.map