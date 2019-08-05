/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { List$1 } from "./List$1";
/**
 * @hidden
 */
export class UriParser extends Base {
    static a(a) {
        return UriParser.b.contains(a.toLowerCase());
    }
}
UriParser.$t = markType(UriParser, 'UriParser');
UriParser.b = new List$1(String_$type, 1, ["http", "https", "ws", "wss", "ftp", "file", "gopher", "nntp", "news", "mailto", "uuid", "telnet", "ldap", "net.tcp", "net.pipe"]);
//# sourceMappingURL=UriParser.js.map