/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { CancelEventArgs } from "../../igniteui-angular-core/ES2015/CancelEventArgs";
import { markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class SpreadsheetHyperlinkExecutingEventArgs extends CancelEventArgs {
    constructor(a) {
        super(0);
        this._c = null;
        this._workingDirectory = null;
        this._c = a;
    }
    get hyperlink() {
        return this._c;
    }
    get workingDirectory() {
        return this._workingDirectory;
    }
    set workingDirectory(a) {
        this._workingDirectory = a;
    }
}
SpreadsheetHyperlinkExecutingEventArgs.$t = markType(SpreadsheetHyperlinkExecutingEventArgs, 'SpreadsheetHyperlinkExecutingEventArgs', CancelEventArgs.$);
//# sourceMappingURL=SpreadsheetHyperlinkExecutingEventArgs.js.map