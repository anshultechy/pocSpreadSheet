/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { IDataSeriesAdapterRule_$type } from "./IDataSeriesAdapterRule";
/**
 * @hidden
 */
export class SubCollectionsRule extends Base {
    constructor() {
        super();
        this._priority = 0;
        this._collectionTransformationThreshold = 0;
        this.priority = 0;
        this.collectionTransformationThreshold = 50;
    }
    get priority() {
        return this._priority;
    }
    set priority(a) {
        this._priority = a;
    }
    get collectionTransformationThreshold() {
        return this._collectionTransformationThreshold;
    }
    set collectionTransformationThreshold(a) {
        this._collectionTransformationThreshold = a;
    }
    evaluate(a) {
        let b = a.getCurrentDataSource();
        if (b == null) {
            return;
        }
        if (b.actualCount == 0 || b.actualCount > this.collectionTransformationThreshold) {
            return;
        }
        let c = b.getItemAtIndex(0);
        if (a.analyzer.isCollection(c)) {
            for (let d = 0; d < b.actualCount; d++) {
                if (a.analyzer.isCollection(b.getItemAtIndex(d))) {
                    let e = a.analyzer.getTitleString(b.getItemAtIndex(d), null);
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
    }
}
SubCollectionsRule.$t = markType(SubCollectionsRule, 'SubCollectionsRule', Base.$, [IDataSeriesAdapterRule_$type]);
//# sourceMappingURL=SubCollectionsRule.js.map