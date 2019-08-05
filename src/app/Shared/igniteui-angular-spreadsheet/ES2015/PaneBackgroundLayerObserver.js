/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { SpreadsheetPaneLayerObserver } from "./SpreadsheetPaneLayerObserver";
import { markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class PaneBackgroundLayerObserver extends SpreadsheetPaneLayerObserver {
    constructor(a, b) {
        super(a);
        this._g = null;
        this._g = b;
        this._b(a.columnScrollRegion._x);
        this._b(a.rowScrollRegion._x);
        this._b(a);
    }
    _d(a, b, c) {
        let d = false;
        switch (b != null ? b : "") {
            case "":
            case "Offset":
                if (this._f._ac != null) {
                    if (a == this._f.rowScrollRegion._x || a == this._f.columnScrollRegion._x) {
                        d = true;
                    }
                }
                break;
            case "Background":
                if (a == this._f) {
                    d = true;
                }
                break;
        }
        if (d) {
            this._g();
        }
    }
    dispose() {
        this._e(this._f.columnScrollRegion._x);
        this._e(this._f.rowScrollRegion._x);
        this._e(this._f);
    }
}
PaneBackgroundLayerObserver.$t = markType(PaneBackgroundLayerObserver, 'PaneBackgroundLayerObserver', SpreadsheetPaneLayerObserver.$);
//# sourceMappingURL=PaneBackgroundLayerObserver.js.map