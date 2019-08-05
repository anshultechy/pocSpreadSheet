/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { IComparer$1_$type } from "./IComparer$1";
import { SectionData } from "./SectionData";
/**
 * @hidden
 */
var SectionDataStartIndexComparer = /** @class */ (function (_super) {
    tslib_1.__extends(SectionDataStartIndexComparer, _super);
    function SectionDataStartIndexComparer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SectionDataStartIndexComparer.prototype.compare = function (a, b) {
        return Base.compareSimple(a.g, b.g);
    };
    SectionDataStartIndexComparer.$t = markType(SectionDataStartIndexComparer, 'SectionDataStartIndexComparer', Base.$, [IComparer$1_$type.specialize(SectionData.$)]);
    return SectionDataStartIndexComparer;
}(Base));
export { SectionDataStartIndexComparer };
//# sourceMappingURL=SectionDataStartIndexComparer.js.map