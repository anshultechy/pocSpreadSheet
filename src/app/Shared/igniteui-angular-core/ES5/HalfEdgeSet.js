/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IEnumerable$1_$type, markType, getEnumerator } from "./type";
import { HalfEdge } from "./HalfEdge";
import { Dictionary$2 } from "./Dictionary$2";
import { EdgeComparer } from "./EdgeComparer";
/**
 * @hidden
 */
var HalfEdgeSet = /** @class */ (function (_super) {
    tslib_1.__extends(HalfEdgeSet, _super);
    function HalfEdgeSet() {
        var _this = _super.call(this) || this;
        _this.b = null;
        _this.b = new Dictionary$2(HalfEdge.$, Base.$, 2, new EdgeComparer());
        return _this;
    }
    HalfEdgeSet.prototype.getEnumerator = function () {
        return getEnumerator(this.b.keys);
    };
    HalfEdgeSet.prototype.getEnumeratorObject = function () {
        return this.getEnumerator();
    };
    HalfEdgeSet.prototype.d = function (a) {
        this.b.addItem(a, null);
    };
    HalfEdgeSet.prototype.f = function (a) {
        this.b.removeItem(a);
    };
    HalfEdgeSet.prototype.e = function () {
        this.b.clear();
    };
    Object.defineProperty(HalfEdgeSet.prototype, "c", {
        get: function () {
            return this.b.count;
        },
        enumerable: true,
        configurable: true
    });
    HalfEdgeSet.prototype.a = function (a) {
        return this.b.containsKey(a);
    };
    HalfEdgeSet.$t = markType(HalfEdgeSet, 'HalfEdgeSet', Base.$, [IEnumerable$1_$type.specialize(HalfEdge.$)]);
    return HalfEdgeSet;
}(Base));
export { HalfEdgeSet };
//# sourceMappingURL=HalfEdgeSet.js.map