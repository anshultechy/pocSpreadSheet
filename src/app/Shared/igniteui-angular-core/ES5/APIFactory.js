/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Point_$type, markType } from "./type";
import { Rect } from "./Rect";
import { Size } from "./Size";
import { Color } from "./Color";
/**
 * @hidden
 */
var APIFactory = /** @class */ (function (_super) {
    tslib_1.__extends(APIFactory, _super);
    function APIFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    APIFactory.createPoint = function (a, b) {
        return { $type: Point_$type, x: a, y: b };
    };
    APIFactory.createRect = function (a, b, c, d) {
        return new Rect(0, a, b, c, d);
    };
    APIFactory.createSize = function (a, b) {
        return new Size(1, a, b);
    };
    APIFactory.createColor = function (a) {
        var b = new Color();
        b.colorString = a;
        return b;
    };
    APIFactory.$t = markType(APIFactory, 'APIFactory');
    return APIFactory;
}(Base));
export { APIFactory };
//# sourceMappingURL=APIFactory.js.map