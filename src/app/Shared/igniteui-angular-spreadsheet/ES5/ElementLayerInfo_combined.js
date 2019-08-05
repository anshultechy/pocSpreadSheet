/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
import { CoreUtilities } from "./CoreUtilities";
import { StringComparer } from "../../igniteui-angular-core/ES5/StringComparer";
import { ISupportPositioning_$type } from "./ISupportPositioning";
/**
 * @hidden
 */
var ElementLayerInfo = /** @class */ (function (_super) {
    tslib_1.__extends(ElementLayerInfo, _super);
    function ElementLayerInfo(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.f = null;
        _this.b = null;
        _this.a = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    var f = [c, d, e, null, null];
                    {
                        var h = f[0];
                        var i = f[1];
                        var j = f[2];
                        var k = f[3];
                        var l = f[4];
                        CoreUtilities.z(h, "identifier");
                        _this.f = h;
                        _this.b = new ElementLayerInfo_ElementOrderInfo(_this, j, i);
                        _this.a = new ElementLayerInfo_ElementOrderInfo(_this, k, l);
                    }
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    var f = _rest[3];
                    var g = _rest[4];
                    CoreUtilities.z(c, "identifier");
                    _this.f = c;
                    _this.b = new ElementLayerInfo_ElementOrderInfo(_this, e, d);
                    _this.a = new ElementLayerInfo_ElementOrderInfo(_this, f, g);
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(ElementLayerInfo.prototype, "g", {
        get: function () {
            return this.f;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementLayerInfo.prototype, "c", {
        get: function () {
            return this.a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementLayerInfo.prototype, "d", {
        get: function () {
            return this.b;
        },
        enumerable: true,
        configurable: true
    });
    ElementLayerInfo.$t = markType(ElementLayerInfo, 'ElementLayerInfo');
    ElementLayerInfo.e = StringComparer.e;
    return ElementLayerInfo;
}(Base));
export { ElementLayerInfo };
/**
 * @hidden
 */
var ElementLayerInfo_ElementOrderInfo = /** @class */ (function (_super) {
    tslib_1.__extends(ElementLayerInfo_ElementOrderInfo, _super);
    function ElementLayerInfo_ElementOrderInfo(a, b, c) {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.c = null;
        _this.b = null;
        _this.a = a;
        _this.c = b;
        _this.b = c;
        return _this;
    }
    Object.defineProperty(ElementLayerInfo_ElementOrderInfo.prototype, "after", {
        get: function () {
            return this.b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementLayerInfo_ElementOrderInfo.prototype, "before", {
        get: function () {
            return this.c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementLayerInfo_ElementOrderInfo.prototype, "key", {
        get: function () {
            return this.a.f;
        },
        enumerable: true,
        configurable: true
    });
    ElementLayerInfo_ElementOrderInfo.$t = markType(ElementLayerInfo_ElementOrderInfo, 'ElementLayerInfo_ElementOrderInfo', Base.$, [ISupportPositioning_$type]);
    return ElementLayerInfo_ElementOrderInfo;
}(Base));
export { ElementLayerInfo_ElementOrderInfo };
//# sourceMappingURL=ElementLayerInfo_combined.js.map
