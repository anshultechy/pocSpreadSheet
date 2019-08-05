/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, typeCast, Array_$type, markType } from "./type";
import { List$1 } from "./List$1";
import { HashSet$1 } from "./HashSet$1";
import { DescriptionTreeNode } from "./DescriptionTreeNode";
import { Description } from "./Description";
/**
 * @hidden
 */
var DescriptionTreeBuilder = /** @class */ (function (_super) {
    tslib_1.__extends(DescriptionTreeBuilder, _super);
    function DescriptionTreeBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DescriptionTreeBuilder.b = function (item_) {
        var propertyKey_ = null;
        var ret_ = new List$1(String_$type, 0);
        var seen_ = new HashSet$1(String_$type, 0);
        var exclusions_ = {};
        var seen = new Set();
        var comp = item_;
        while (comp = (comp.prototype || Object.getPrototypeOf(comp))) {
            if (comp == Base.prototype) {
                break;
            }
            var props = Object.getOwnPropertyNames(comp.constructor.prototype);
            for (var i = 0; i < props.length; i++) {
                if (!seen.has(props[i])) {
                    seen.add(props[i]);
                    ret_.add(props[i]);
                }
            }
        }
        ;
        return ret_;
    };
    DescriptionTreeBuilder.createTree = function (a, description_) {
        var b = new DescriptionTreeNode();
        if (description_ == null) {
            return null;
        }
        var c = DescriptionTreeBuilder.b(description_);
        for (var d = 0; d < c.count; d++) {
            var key_ = c._inner[d];
            if (key_.toLowerCase() != "type" && !description_.a(DescriptionTreeBuilder.c(key_))) {
                continue;
            }
            var e = description_[key_];
            if (typeCast(Description.$, e) !== null) {
                var f = DescriptionTreeBuilder.createTree(a, e);
                e = f;
            }
            if (typeCast(Array_$type, e) !== null) {
                var g = e;
                var h = new Array(g.length);
                for (var i = 0; i < h.length; i++) {
                    var j = g[i];
                    if (typeCast(Description.$, j) !== null) {
                        var k = DescriptionTreeBuilder.createTree(a, j);
                        h[i] = k;
                    }
                    else {
                        h[i] = j;
                    }
                }
                e = h;
            }
            if (key_.toLowerCase() == "type") {
                b.h = e;
            }
            b.i(DescriptionTreeBuilder.c(key_), e);
        }
        if (b.b("type")) {
            var l = b.a("type").b;
            var m = b.e();
            for (var n = 0; n < m.count; n++) {
                var o = m._inner[n];
                o.a = a.b(l, o.c);
            }
        }
        return b;
    };
    DescriptionTreeBuilder.c = function (key_) {
        if (key_ == null) {
            return null;
        }
        return key_.substr(0, 1).toUpperCase() + key_.substr(1);
    };
    DescriptionTreeBuilder.$t = markType(DescriptionTreeBuilder, 'DescriptionTreeBuilder');
    return DescriptionTreeBuilder;
}(Base));
export { DescriptionTreeBuilder };
//# sourceMappingURL=DescriptionTreeBuilder.js.map