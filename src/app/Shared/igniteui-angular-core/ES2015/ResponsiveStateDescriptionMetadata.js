/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ResponsiveStateEnteringEventArgsDescriptionMetadata } from "./ResponsiveStateEnteringEventArgsDescriptionMetadata";
import { ResponsiveStateEnteredEventArgsDescriptionMetadata } from "./ResponsiveStateEnteredEventArgsDescriptionMetadata";
import { ResponsiveStateExitedEventArgsDescriptionMetadata } from "./ResponsiveStateExitedEventArgsDescriptionMetadata";
import { ResponsiveStateDescription } from "./ResponsiveStateDescription";
/**
 * @hidden
 */
export class ResponsiveStateDescriptionMetadata extends Base {
    static b(a) {
        if (ResponsiveStateDescriptionMetadata.a == null) {
            ResponsiveStateDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ResponsiveStateDescriptionMetadata.c(a, ResponsiveStateDescriptionMetadata.a);
            ResponsiveStateEnteringEventArgsDescriptionMetadata.d(a);
            ResponsiveStateEnteredEventArgsDescriptionMetadata.d(a);
            ResponsiveStateExitedEventArgsDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        b.item("Name", "String");
        b.item("MinimumWidth", "Number:double");
        b.item("MaximumWidth", "Number:double");
        b.item("IsManualState", "Boolean");
        b.item("StateEnteringRef", "EventRef::stateEntering");
        b.item("StateEnteredRef", "EventRef::stateEntered");
        b.item("StateExitedRef", "EventRef::stateExited");
    }
    static d(a) {
        ResponsiveStateDescriptionMetadata.b(a);
        a.n("ResponsiveState", () => new ResponsiveStateDescription());
        a.m("ResponsiveState", ResponsiveStateDescriptionMetadata.a);
    }
}
ResponsiveStateDescriptionMetadata.$t = markType(ResponsiveStateDescriptionMetadata, 'ResponsiveStateDescriptionMetadata');
ResponsiveStateDescriptionMetadata.a = null;
//# sourceMappingURL=ResponsiveStateDescriptionMetadata.js.map