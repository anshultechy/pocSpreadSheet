/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { LinkedListNode$1 } from "./LinkedListNode$1";
/**
 * @hidden
 */
var LinkedList$1 = /** @class */ (function (_super) {
    tslib_1.__extends(LinkedList$1, _super);
    function LinkedList$1($t) {
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this.a = null;
        _this.b = null;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        return _this;
    }
    Object.defineProperty(LinkedList$1.prototype, "c", {
        get: function () {
            return this.a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkedList$1.prototype, "d", {
        get: function () {
            return this.b;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList$1.prototype.e = function (a) {
        if (this.a == null) {
            this.a = new LinkedListNode$1(this.$t, 1, a);
            this.b = this.a;
        }
        else {
            var b = this.a;
            this.a = new LinkedListNode$1(this.$t, 1, a);
            this.a.a = b;
            b.b = this.a;
        }
    };
    LinkedList$1.prototype.f = function (a) {
        if (this.b == null) {
            this.a = new LinkedListNode$1(this.$t, 1, a);
            this.b = this.a;
        }
        else {
            var b = this.b;
            this.b = new LinkedListNode$1(this.$t, 1, a);
            this.b.b = b;
            b.a = this.b;
        }
    };
    LinkedList$1.prototype.i = function () {
        this.h(this.c);
    };
    LinkedList$1.prototype.g = function () {
        this.a = null;
        this.b = null;
    };
    LinkedList$1.prototype.h = function (a) {
        if (this.a == a) {
            this.a = a.a;
            if (a.a != null) {
                a.a.b = null;
            }
        }
        if (this.b == a) {
            this.b = a.b;
            if (a.b != null) {
                a.b.a = null;
            }
        }
        if (a.b != null) {
            a.b.a = a.a;
        }
        if (a.a != null) {
            a.a.b = a.b;
        }
        a.a = null;
        a.b = null;
    };
    LinkedList$1.$t = markType(LinkedList$1, 'LinkedList$1');
    return LinkedList$1;
}(Base));
export { LinkedList$1 };
//# sourceMappingURL=LinkedList$1.js.map