/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
var EventArgs = /** @class */ (function () {
    function EventArgs() {
    }
    return EventArgs;
}());
export { EventArgs };
export var ListSortDirection;
(function (ListSortDirection) {
    ListSortDirection[ListSortDirection["Ascending"] = 0] = "Ascending";
    ListSortDirection[ListSortDirection["Descending"] = 1] = "Descending";
})(ListSortDirection || (ListSortDirection = {}));
var SortDescription = /** @class */ (function () {
    function SortDescription() {
    }
    Object.defineProperty(SortDescription.prototype, "propertyName", {
        get: function () {
            return this._propertyName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortDescription.prototype, "propertName", {
        set: function (value) {
            this._propertyName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortDescription.prototype, "direction", {
        get: function () {
            return this._direction;
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: true,
        configurable: true
    });
    return SortDescription;
}());
export { SortDescription };
//# sourceMappingURL=IgUI.js.map