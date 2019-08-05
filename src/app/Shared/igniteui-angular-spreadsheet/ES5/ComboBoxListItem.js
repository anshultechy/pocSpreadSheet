/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
/**
 * An object that contains a DataValue and DisplayText for lists (such as ComboBoxes) in the UI.
 */
var ComboBoxListItem = /** @class */ (function (_super) {
    tslib_1.__extends(ComboBoxListItem, _super);
    function ComboBoxListItem(dataValue, displayText) {
        var _this = _super.call(this) || this;
        _this._a = null;
        _this._e = null;
        _this._c = null;
        _this._a = dataValue;
        _this._e = displayText;
        return _this;
    }
    Object.defineProperty(ComboBoxListItem.prototype, "dataValue", {
        /**
         * The data value of the item.
         */
        get: function () {
            return this._a;
        },
        /**
         * The data value of the item.
         */
        set: function (a) {
            if (a == this._a) {
                return;
            }
            if (a != null) {
                if (Base.equalsStatic(a, this._a)) {
                    return;
                }
            }
            this._a = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComboBoxListItem.prototype, "displayText", {
        /**
         * The text to display for the item.
         */
        get: function () {
            return this._e;
        },
        /**
         * The text to display for the item.
         */
        set: function (a) {
            if (a == this._e) {
                return;
            }
            this._e = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComboBoxListItem.prototype, "tag", {
        /**
         * an object that stores extra data related to the item.
         */
        get: function () {
            return this._c;
        },
        /**
         * an object that stores extra data related to the item.
         */
        set: function (a) {
            if (a == this._c) {
                return;
            }
            this._c = a;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a string that represents the current object.
     * @return A string that represents the current object.
     */
    ComboBoxListItem.prototype.toString = function () {
        return this.displayText;
    };
    ComboBoxListItem.$t = markType(ComboBoxListItem, 'ComboBoxListItem');
    return ComboBoxListItem;
}(Base));
export { ComboBoxListItem };
//# sourceMappingURL=ComboBoxListItem.js.map
