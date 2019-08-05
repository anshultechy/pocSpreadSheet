/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { IDataSeriesAdapterRule_$type } from "./IDataSeriesAdapterRule";
/**
 * @hidden
 */
var SubCollectionsRule = /** @class */ (function (_super) {
    tslib_1.__extends(SubCollectionsRule, _super);
    function SubCollectionsRule() {
        var _this = _super.call(this) || this;
        _this._priority = 0;
        _this._collectionTransformationThreshold = 0;
        _this.priority = 0;
        _this.collectionTransformationThreshold = 50;
        return _this;
    }
    Object.defineProperty(SubCollectionsRule.prototype, "priority", {
        get: function () {
            return this._priority;
        },
        set: function (a) {
            this._priority = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubCollectionsRule.prototype, "collectionTransformationThreshold", {
        get: function () {
            return this._collectionTransformationThreshold;
        },
        set: function (a) {
            this._collectionTransformationThreshold = a;
        },
        enumerable: true,
        configurable: true
    });
    SubCollectionsRule.prototype.evaluate = function (a) {
        var b = a.getCurrentDataSource();
        if (b == null) {
            return;
        }
        if (b.actualCount == 0 || b.actualCount > this.collectionTransformationThreshold) {
            return;
        }
        var c = b.getItemAtIndex(0);
        if (a.analyzer.isCollection(c)) {
            for (var d = 0; d < b.actualCount; d++) {
                if (a.analyzer.isCollection(b.getItemAtIndex(d))) {
                    var e = a.analyzer.getTitleString(b.getItemAtIndex(d), null);
                    if (e != null) {
                        a.pushParentTitle(e);
                    }
                    a.recurseRules(b.getItemAtIndex(d), "[" + d + "]", false);
                    if (e != null) {
                        a.popParentTitle();
                    }
                }
            }
        }
    };
    SubCollectionsRule.$t = markType(SubCollectionsRule, 'SubCollectionsRule', Base.$, [IDataSeriesAdapterRule_$type]);
    return SubCollectionsRule;
}(Base));
export { SubCollectionsRule };
//# sourceMappingURL=SubCollectionsRule.js.map