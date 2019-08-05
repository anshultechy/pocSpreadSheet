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
var SectionDataUndisplacedStartIndexComparer = /** @class */ (function (_super) {
    tslib_1.__extends(SectionDataUndisplacedStartIndexComparer, _super);
    function SectionDataUndisplacedStartIndexComparer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SectionDataUndisplacedStartIndexComparer.prototype.compare = function (a, b) {
        return Base.compareSimple((a.g - a.c), (b.g - a.c));
    };
    SectionDataUndisplacedStartIndexComparer.$t = markType(SectionDataUndisplacedStartIndexComparer, 'SectionDataUndisplacedStartIndexComparer', Base.$, [IComparer$1_$type.specialize(SectionData.$)]);
    return SectionDataUndisplacedStartIndexComparer;
}(Base));
export { SectionDataUndisplacedStartIndexComparer };
//# sourceMappingURL=SectionDataUndisplacedStartIndexComparer.js.map