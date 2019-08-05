/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { List$1 } from "./List$1";
import { DescriptionPropertyValue } from "./DescriptionPropertyValue";
import { Dictionary$2 } from "./Dictionary$2";
/**
 * @hidden
 */
var DescriptionTreeNode = /** @class */ (function (_super) {
    tslib_1.__extends(DescriptionTreeNode, _super);
    function DescriptionTreeNode() {
        var _this = _super.call(this) || this;
        _this.f = 0;
        _this.d = new List$1(DescriptionPropertyValue.$, 0);
        _this.c = new Dictionary$2(String_$type, DescriptionPropertyValue.$, 0);
        _this.h = null;
        _this.f = DescriptionTreeNode.g;
        DescriptionTreeNode.g++;
        if (DescriptionTreeNode.g >= 0x7FFFFFFFFFFFFFFF) {
            DescriptionTreeNode.g = 0;
        }
        return _this;
    }
    DescriptionTreeNode.prototype.i = function (a, b) {
        var c = new DescriptionPropertyValue();
        c.c = a;
        c.b = b;
        this.c.addItem(a.toLowerCase(), c);
        this.d.add(c);
    };
    DescriptionTreeNode.prototype.a = function (a) {
        return this.c.item(a.toLowerCase());
    };
    DescriptionTreeNode.prototype.b = function (a) {
        return this.c.containsKey(a.toLowerCase());
    };
    DescriptionTreeNode.prototype.k = function (a) {
        if (this.c.containsKey(a.toLowerCase())) {
            var b = this.c.item(a.toLowerCase());
            this.c.removeItem(a.toLowerCase());
            this.d.remove(b);
        }
    };
    DescriptionTreeNode.prototype.j = function () {
        this.c.clear();
        this.d.clear();
    };
    DescriptionTreeNode.prototype.e = function () {
        return this.d;
    };
    DescriptionTreeNode.$t = markType(DescriptionTreeNode, 'DescriptionTreeNode');
    DescriptionTreeNode.g = 0;
    return DescriptionTreeNode;
}(Base));
export { DescriptionTreeNode };
//# sourceMappingURL=DescriptionTreeNode.js.map