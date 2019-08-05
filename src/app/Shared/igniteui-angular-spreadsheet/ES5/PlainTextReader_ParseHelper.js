/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, Array_$type, markType } from "../../igniteui-angular-core/ES5/type";
import { StringBuilder } from "../../igniteui-angular-core/ES5/StringBuilder";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { intDivide } from "../../igniteui-angular-core/ES5/number";
import { stringEmpty } from "../../igniteui-angular-core/ES5/string";
/**
 * @hidden
 */
var PlainTextReader_ParseHelper = /** @class */ (function (_super) {
    tslib_1.__extends(PlainTextReader_ParseHelper, _super);
    function PlainTextReader_ParseHelper(a, b) {
        var _this = _super.call(this) || this;
        _this.g = null;
        _this.j = 0;
        _this.e = '\0';
        _this.f = null;
        _this.k = null;
        _this.d = false;
        _this.h = 0;
        _this.b = 0;
        _this.e = a;
        _this.d = b;
        _this.k = new StringBuilder(0);
        _this.f = new List$1(String_$type, 0);
        _this.g = new List$1(Array_$type, 0);
        _this.b = 0;
        return _this;
    }
    Object.defineProperty(PlainTextReader_ParseHelper.prototype, "c", {
        get: function () {
            return this.b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlainTextReader_ParseHelper.prototype, "i", {
        get: function () {
            return this.k.c;
        },
        enumerable: true,
        configurable: true
    });
    PlainTextReader_ParseHelper.prototype.l = function (a) {
        if (this.b == 0) {
            this.b = 2;
        }
        this.h = 0;
        this.k.h(a);
    };
    PlainTextReader_ParseHelper.prototype.n = function (a) {
        if (a === void 0) { a = false; }
        if (this.b != 0 || (a == false && this.d == false)) {
            if (this.k.c == 0) {
                this.f.add(stringEmpty());
            }
            else {
                this.f.add(this.k.toString());
            }
        }
        if (a == false && this.k.c == 0) {
            this.h++;
        }
        this.k.v();
        this.b = 0;
    };
    PlainTextReader_ParseHelper.prototype.o = function () {
        if (this.f.count > 0) {
            this.g.add(this.f.toArray());
            this.f.clear();
        }
        else if (this.b != 0 || this.h > 0) {
            this.g.add(PlainTextReader_ParseHelper.a);
        }
        this.h = 0;
    };
    PlainTextReader_ParseHelper.prototype.m = function () {
        this.p();
        this.n(true);
        this.o();
    };
    PlainTextReader_ParseHelper.prototype.p = function () {
        if (this.j > 0) {
            switch (this.b) {
                case 0:
                    if (this.j % 2 == 1) {
                        this.b = 1;
                    }
                    else {
                        this.j -= 2;
                        this.b = 2;
                    }
                    if (this.j > 1) {
                        this.k.i(this.e, intDivide(this.j, 2));
                    }
                    break;
                case 1:
                    if (this.j % 2 == 1) {
                        this.b = 2;
                    }
                    if (this.j > 1) {
                        this.k.i(this.e, intDivide(this.j, 2));
                    }
                    break;
                case 2:
                    this.k.i(this.e, this.j);
                    break;
            }
            this.j = 0;
        }
    };
    PlainTextReader_ParseHelper.$t = markType(PlainTextReader_ParseHelper, 'PlainTextReader_ParseHelper');
    PlainTextReader_ParseHelper.a = [stringEmpty()];
    return PlainTextReader_ParseHelper;
}(Base));
export { PlainTextReader_ParseHelper };
//# sourceMappingURL=PlainTextReader_ParseHelper.js.map
