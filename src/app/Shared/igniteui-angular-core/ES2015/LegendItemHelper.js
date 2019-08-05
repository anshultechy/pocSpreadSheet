/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType, getInstanceType } from "./type";
import { DataTemplateMeasureInfo } from "./DataTemplateMeasureInfo";
import { DataTemplateRenderInfo } from "./DataTemplateRenderInfo";
import { isNaN_ } from "./number";
import { stringEndsWith } from "./string";
import { numberToString2 } from "./numberExtended";
/**
 * @hidden
 */
export class LegendItemHelper extends Base {
    static get b() {
        if (isNaN_(LegendItemHelper.a)) {
            LegendItemHelper.a = window.devicePixelRatio == undefined ? 1 : window.devicePixelRatio;
        }
        return LegendItemHelper.a;
    }
    static set b(a) {
        LegendItemHelper.a = a;
    }
    static c(a, b, c, d, e, f, g, h, i) {
        LegendItemHelper.d(a, b, c, d, e, f, g, h, i, false);
    }
    static d(a, b, c, d, e, f, g, h, i, j, ...k) {
        let l = a;
        let m = f;
        if (m != null && m.series != null) {
            if (h != null) {
                let n = 18, o = 16;
                let p = l.createElement("canvas");
                if (j) {
                    p.setStyleProperty("vertical-align", "middle");
                }
                p.setAttribute("width", (n * LegendItemHelper.b).toString());
                p.setAttribute("height", (o * LegendItemHelper.b).toString());
                p.setStyleProperty("width", n.toString() + "px");
                p.setStyleProperty("height", o.toString() + "px");
                let q = j ? l.createElement("span") : l.createElement("td");
                q.addClass("ui-legend-item-badge");
                q.append(p);
                let r = l.get2DCanvasContext(p);
                let s = new DataTemplateMeasureInfo();
                s.passInfo = i;
                s.context = r;
                s.width = n;
                s.height = o;
                s.data = m;
                h.measure(s);
                let t = new DataTemplateRenderInfo();
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
                let u = l.createElement("label");
                u.addClass("ui-legend-item-text");
                u.setText(g);
                l.append(u);
                let v = k[0];
                let w = k[1];
                let x = stringEndsWith(getInstanceType(m.series).typeName, "Overlay");
                if (!isNaN_(v) && !x) {
                    u.setText(u.getText() + ": ");
                    let y = l.createElement("label");
                    y.setStyleProperty("font-weight", "bold");
                    y.setText(numberToString2(v, "0.00") + (isNaN_(w) ? "" : " "));
                    l.append(y);
                }
                if (!isNaN_(w) && !x) {
                    let z = l.createElement("label");
                    z.setText("(" + numberToString2(w, "0.00") + "%)");
                    l.append(z);
                }
            }
            else {
                let aa = l.createElement("td");
                let ab = l.createElement("span");
                ab.setText(g);
                aa.append(ab);
                aa.addClass("ui-legend-item-text");
                l.append(aa);
            }
        }
    }
}
LegendItemHelper.$t = markType(LegendItemHelper, 'LegendItemHelper');
LegendItemHelper.a = NaN;
//# sourceMappingURL=LegendItemHelper.js.map