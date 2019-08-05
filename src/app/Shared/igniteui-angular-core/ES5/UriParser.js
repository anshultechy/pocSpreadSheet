/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { List$1 } from "./List$1";
/**
 * @hidden
 */
var UriParser = /** @class */ (function (_super) {
    tslib_1.__extends(UriParser, _super);
    function UriParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UriParser.a = function (a) {
        return UriParser.b.contains(a.toLowerCase());
    };
    UriParser.$t = markType(UriParser, 'UriParser');
    UriParser.b = new List$1(String_$type, 1, ["http", "https", "ws", "wss", "ftp", "file", "gopher", "nntp", "news", "mailto", "uuid", "telnet", "ldap", "net.tcp", "net.pipe"]);
    return UriParser;
}(Base));
export { UriParser };
//# sourceMappingURL=UriParser.js.map