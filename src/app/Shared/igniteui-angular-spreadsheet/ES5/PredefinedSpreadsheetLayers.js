/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
import { ElementLayerInfo } from "./ElementLayerInfo";
/**
 * @hidden
 */
var PredefinedSpreadsheetLayers = /** @class */ (function (_super) {
    tslib_1.__extends(PredefinedSpreadsheetLayers, _super);
    function PredefinedSpreadsheetLayers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PredefinedSpreadsheetLayers, "k", {
        get: function () {
            return PredefinedSpreadsheetLayers.a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PredefinedSpreadsheetLayers, "l", {
        get: function () {
            return PredefinedSpreadsheetLayers.b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PredefinedSpreadsheetLayers, "m", {
        get: function () {
            return PredefinedSpreadsheetLayers.c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PredefinedSpreadsheetLayers, "n", {
        get: function () {
            return PredefinedSpreadsheetLayers.d;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PredefinedSpreadsheetLayers, "o", {
        get: function () {
            return PredefinedSpreadsheetLayers.e;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PredefinedSpreadsheetLayers, "p", {
        get: function () {
            return PredefinedSpreadsheetLayers.f;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PredefinedSpreadsheetLayers, "r", {
        get: function () {
            return PredefinedSpreadsheetLayers.h;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PredefinedSpreadsheetLayers, "q", {
        get: function () {
            return PredefinedSpreadsheetLayers.g;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PredefinedSpreadsheetLayers, "s", {
        get: function () {
            return PredefinedSpreadsheetLayers.i;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PredefinedSpreadsheetLayers, "t", {
        get: function () {
            return PredefinedSpreadsheetLayers.j;
        },
        enumerable: true,
        configurable: true
    });
    PredefinedSpreadsheetLayers.$t = markType(PredefinedSpreadsheetLayers, 'PredefinedSpreadsheetLayers');
    PredefinedSpreadsheetLayers.a = new ElementLayerInfo(0, "Background", null, null);
    PredefinedSpreadsheetLayers.e = new ElementLayerInfo(1, "CellValues", null, ["Background", "CellBackgrounds", "Gridlines"], null, null);
    PredefinedSpreadsheetLayers.d = new ElementLayerInfo(0, "CellBorders", null, ["Background", "CellBackgrounds", "Gridlines", "CellValues"]);
    PredefinedSpreadsheetLayers.f = new ElementLayerInfo(0, "Gridlines", null, ["Background", "CellBackgrounds"]);
    PredefinedSpreadsheetLayers.c = new ElementLayerInfo(0, "CellBackgrounds", ["CellValues", "Gridlines", "Selection"], ["Background"]);
    PredefinedSpreadsheetLayers.i = new ElementLayerInfo(0, "Selection", null, ["Buttons", "CellValues", "CellBorders", "Gridlines"]);
    PredefinedSpreadsheetLayers.b = new ElementLayerInfo(0, "Buttons", null, ["CellValues", "CellBorders", "Gridlines"]);
    PredefinedSpreadsheetLayers.j = new ElementLayerInfo(0, "Shapes", null, ["Selection", "Buttons"]);
    PredefinedSpreadsheetLayers.h = new ElementLayerInfo(0, "InvalidData", ["InteractionOverlay"], ["Shapes", "Selection", "Buttons"]);
    PredefinedSpreadsheetLayers.g = new ElementLayerInfo(0, "InteractionOverlay", null, ["Shapes", "Selection", "Buttons"]);
    return PredefinedSpreadsheetLayers;
}(Base));
export { PredefinedSpreadsheetLayers };
//# sourceMappingURL=PredefinedSpreadsheetLayers.js.map
