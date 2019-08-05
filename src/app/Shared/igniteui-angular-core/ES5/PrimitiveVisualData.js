/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { IVisualData_$type } from "./IVisualData";
import { PrimitiveAppearanceData } from "./PrimitiveAppearanceData";
import { ShapeTags } from "./ShapeTags";
import { List$1 } from "./List$1";
import { PointData } from "./PointData";
import { StringBuilder } from "./StringBuilder";
/**
 * @hidden
 */
var PrimitiveVisualData = /** @class */ (function (_super) {
    tslib_1.__extends(PrimitiveVisualData, _super);
    function PrimitiveVisualData(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this._appearance = null;
        _this._tags = null;
        _this._name = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    var c = _rest[0];
                    _this.name = c;
                    _this.tags = new ShapeTags();
                    _this.appearance = new PrimitiveAppearanceData();
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(PrimitiveVisualData.prototype, "appearance", {
        get: function () {
            return this._appearance;
        },
        set: function (a) {
            this._appearance = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrimitiveVisualData.prototype, "tags", {
        get: function () {
            return this._tags;
        },
        set: function (a) {
            this._tags = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrimitiveVisualData.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (a) {
            this._name = a;
        },
        enumerable: true,
        configurable: true
    });
    PrimitiveVisualData.prototype.scaleByViewport = function (a) {
        this.appearance.m(a);
    };
    PrimitiveVisualData.prototype.getPoints = function (a) {
        var b = new List$1(List$1.$.specialize(PointData.$), 0);
        this.getPointsOverride(b, a);
        return b;
    };
    PrimitiveVisualData.prototype.serialize = function () {
        var a = new StringBuilder(0);
        a.u("{");
        a.u("appearance: " + (this.appearance != null ? this.appearance.serialize() : "null") + ", ");
        a.u("tags: [");
        for (var b = 0; b < this.tags.count; b++) {
            if (b != 0) {
                a.l(", ");
            }
            a.l("\"" + this.tags._inner[b] + "\"");
        }
        a.u("],");
        a.u("type: \"" + this.type + "\", ");
        a.u("name: \"" + this.name + "\", ");
        a.u(this.e());
        a.u("}");
        return a.toString();
    };
    PrimitiveVisualData.prototype.e = function () {
        return "";
    };
    PrimitiveVisualData.$t = markType(PrimitiveVisualData, 'PrimitiveVisualData', Base.$, [IVisualData_$type]);
    return PrimitiveVisualData;
}(Base));
export { PrimitiveVisualData };
//# sourceMappingURL=PrimitiveVisualData.js.map