/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType, getInstanceType } from "./type";
import { DataTemplateMeasureInfo } from "./DataTemplateMeasureInfo";
import { DataTemplateRenderInfo } from "./DataTemplateRenderInfo";
import { isNaN_ } from "./number";
import { stringEndsWith } from "./string";
import { numberToString2 } from "./numberExtended";
/**
 * @hidden
 */
var LegendItemHelper = /** @class */ (function (_super) {
    tslib_1.__extends(LegendItemHelper, _super);
    function LegendItemHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(LegendItemHelper, "b", {
        get: function () {
            if (isNaN_(LegendItemHelper.a)) {
                LegendItemHelper.a = window.devicePixelRatio == undefined ? 1 : window.devicePixelRatio;
            }
            return LegendItemHelper.a;
        },
        set: function (a) {
            LegendItemHelper.a = a;
        },
        enumerable: true,
        configurable: true
    });
    LegendItemHelper.c = function (a, b, c, d, e, f, g, h, i) {
        LegendItemHelper.d(a, b, c, d, e, f, g, h, i, false);
    };
    LegendItemHelper.d = function (a, b, c, d, e, f, g, h, i, j) {
        var k = [];
        for (var _i = 10; _i < arguments.length; _i++) {
            k[_i - 10] = arguments[_i];
        }
        var l = a;
        var m = f;
        if (m != null && m.series != null) {
            if (h != null) {
                var n = 18, o = 16;
                var p = l.createElement("canvas");
                if (j) {
                    p.setStyleProperty("vertical-align", "middle");
                }
                p.setAttribute("width", (n * LegendItemHelper.b).toString());
                p.setAttribute("height", (o * LegendItemHelper.b).toString());
                p.setStyleProperty("width", n.toString() + "px");
                p.setStyleProperty("height", o.toString() + "px");
                var q = j ? l.createElement("span") : l.createElement("td");
                q.addClass("ui-legend-item-badge");
                q.append(p);
                var r = l.get2DCanvasContext(p);
                var s = new DataTemplateMeasureInfo();
                s.passInfo = i;
                s.context = r;
                s.width = n;
                s.height = o;
                s.data = m;
                h.measure(s);
                var t = new DataTemplateRenderInfo();
                t.availableWidth = (isNaN_(s.width) ? n : Math.min(s.width, n));
                t.availableHeight = (isNaN_(s.height) ? o : Math.min(s.height, o));
                t.passInfo = i;
                t.context = r;
                t.data = m;
                t.xPosition = 0;
                t.yPosition = 0;
                if (LegendItemHelper.b != 1) {
                    r.save();
                    r.scale(LegendItemHelper.b, LegendItemHelper.b);
                }
                h.render(t);
                if (LegendItemHelper.b != 1) {
                    r.restore();
                }
                l.append(q);
            }
            if (j) {
                var u = l.createElement("label");
                u.addClass("ui-legend-item-text");
                u.setText(g);
                l.append(u);
                var v = k[0];
                var w = k[1];
                var x = stringEndsWith(getInstanceType(m.series).typeName, "Overlay");
                if (!isNaN_(v) && !x) {
                    u.setText(u.getText() + ": ");
                    var y = l.createElement("label");
                    y.setStyleProperty("font-weight", "bold");
                    y.setText(numberToString2(v, "0.00") + (isNaN_(w) ? "" : " "));
                    l.append(y);
                }
                if (!isNaN_(w) && !x) {
                    var z = l.createElement("label");
                    z.setText("(" + numberToString2(w, "0.00") + "%)");
                    l.append(z);
                }
            }
            else {
                var aa = l.createElement("td");
                var ab = l.createElement("span");
                ab.setText(g);
                aa.append(ab);
                aa.addClass("ui-legend-item-text");
                l.append(aa);
            }
        }
    };
    LegendItemHelper.$t = markType(LegendItemHelper, 'LegendItemHelper');
    LegendItemHelper.a = NaN;
    return LegendItemHelper;
}(Base));
export { LegendItemHelper };
//# sourceMappingURL=LegendItemHelper.js.map