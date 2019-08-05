/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "./type";
export var RegexOptions;
(function (RegexOptions) {
    RegexOptions[RegexOptions["None"] = 0] = "None";
    RegexOptions[RegexOptions["IgnoreCase"] = 1] = "IgnoreCase";
    RegexOptions[RegexOptions["Multiline"] = 2] = "Multiline";
    RegexOptions[RegexOptions["ExplicitCapture"] = 4] = "ExplicitCapture";
    RegexOptions[RegexOptions["Compiled"] = 8] = "Compiled";
    RegexOptions[RegexOptions["Singleline"] = 16] = "Singleline";
    RegexOptions[RegexOptions["IgnorePatternWhitespace"] = 32] = "IgnorePatternWhitespace";
    RegexOptions[RegexOptions["RightToLeft"] = 64] = "RightToLeft";
    RegexOptions[RegexOptions["ECMAScript"] = 256] = "ECMAScript";
    RegexOptions[RegexOptions["CultureInvariant"] = 512] = "CultureInvariant";
})(RegexOptions || (RegexOptions = {}));
/**
 * @hidden
 */
export let RegexOptions_$type = markEnum('RegexOptions', 'None,0|IgnoreCase,1|Multiline,2|ExplicitCapture,4|Compiled,8|Singleline,16|IgnorePatternWhitespace,32|RightToLeft,64|ECMAScript,256|CultureInvariant,512');
//# sourceMappingURL=RegexOptions.js.map