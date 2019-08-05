/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var SpreadsheetCursorHelper = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetCursorHelper, _super);
    function SpreadsheetCursorHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpreadsheetCursorHelper.a = function (a) {
        var b = false;
        switch (a) {
            case 0: return "default";
            case 1: return "url(data:application/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAIAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAkAAAAJAAAACQAAAAkAAAH5+AABAAgAAQAIAAH5+AAACQAAAAkAAAAJAAAACQAAAA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////w////8P////D////w////8P///gAH//4AB//+AAf//gAH///w////8P////D////w////8P/////////////////////////////////////////////////8=), crosshair";
            case 2: return b ? "move" : "url(data:application/cur;base64,AAACAAEAICAAABAACQAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAIAAAAAAAAA////AAAAFVQAACqqAAAQBAAAIAIAABAEAAAhggAAEYQAACMKAAATFAAABgAAAIYAAADMAAAA7AAAAPwAAAD/gAAA/wAAAP4AAAD8AAAA+cAAAPFAAADncAAAxBAAAIdwAAABQAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///AAf//wAH//8/5///P+f//znn//8w5///MOf//yGH//shB//5w///+MP///gH///4B///+AB///gA///4Af//+AP///gH///4CP//+Bj///ggP//4YD//+OA///n4////+P/////////////////////////////////////8=), copy";
            case 3: return "url(data:application/cur;base64,AAACAAEAICAAAA8ACgAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAIAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAwAAAAYAAAAGAAAADAAAAIwAAADYAAAA+AAAAP8AAAL+AAAE/AAACPgAAA7wAAAA4AAAYMwAAKCKAAE8eQACBECAATx5AACjigAAYowAAAKAAAAO4AAACCAAAARAAAACgAAAAQAA/////////////////////////H////h////4f///8P///vD///5h///+If///gP///4AP//+AH///AD///gB///wA///8Af///4P//+eE///HjH//gIA//wCgH/+A4D//xxx//+cc////H////Af///wH///+D////x////+//8=), move";
            case 4: return "url(data:application/cur;base64,AAACAAEAICAAAA8ACQAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAIAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAwAAAAIAAAAGAAAABAAAAIwAAADIAAAA+AAAAP8AAAD+AAAA/AAAAPgAAADwAAAe6AAAHtgAAB64AAAeeAAAHvgAAB/4AAAf+AAAH/gAAB/4AAAf+AAAH8AAAB/QAAAfwAAAAAAA/////////////////////////P////x////4f///+P///vD///5x///+If///gP///4AP//+AH///gD///4B///+A///wAP//8AD///AA///wAP//8AD///AA///wAP//8AD///AA///wAP//8AD///AA///wAf//8AP///AH/8=), pointer";
            case 17:
            case 19: return "pointer";
            case 5: return b ? "ne-resize" : "url(data:application/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAIAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAJAAAACQAAAAkAAAAJAAAAyTAAAUkoAAJ55AAEAAIABAACAAJ55AABSSgAAMkwAAAJAAAACQAAAAkAAAAJAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////////////////////////////////////8P////D////w////8P////D///8wz//+MMf//AAD//gAAf/4AAH//AAD//4wx///MM////D////w////8P////D////w///////////////////////////////////////8=), ew-resize";
            case 14:
            case 18:
            case 13: return b ? "nw-resize" : "url(data:application/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAIAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+AAAAWgAAAFoAAABaAAAAWgAABlpgAApaUAAT28gAIBgEACAYBAAT28gAClpQAAZaYAAAWgAAAFoAAABaAAAAWgAAAH4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////////////////////////////////////4H///+B////gf///4H///+B///5gZ//8YGP/+AAB//AAAP/wAAD/+AAB//xgY//+YGf//+B////gf///4H///+B////gf//////////////////////////////////////8=), col-resize";
            case 15:
            case 12: return b ? "sw-resize" : "url(data:application/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAIAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAkAAAAQgAAAIEAAADnAAAAJAAAACQAAB/n+AAQAAgAH//4AB//+AAQAAgAH+f4AAAkAAAAJAAAAOcAAACBAAAAQgAAACQAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////5////8P///+B////AP///wD////D////w///4AAH/+AAB//gAAf/4AAH/+AAB//gAAf//8P////D////AP///wD///+B////w////+f/////////////////////////////////8=), row-resize";
            case 16: return "url(data:application/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAIAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAJAAAAEIAAACBAAAA5wAAAyTAAAUkoAAJ55AAEAAIABAACAAJ55AABSSgAAMkwAAA5wAAAIEAAABCAAAAJAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////////////////////////////////////+f////D////gf///wD///8A///8wz//+MMf//AAD//gAAf/4AAH//AAD//4wx///MM///8A////AP///4H////D////5///////////////////////////////////////8=), move";
            case 6: return b ? "se-resize" : "url(data:application/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAIAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAJAAAAEIAAACBAAAA5wAAACQAAAAkAAAf5/gAEAAIABAACAAf5/gAACQAAAAkAAAA5wAAAIEAAABCAAAAJAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////////////////////////////////////+f////D////gf///wD///8A////w////8P//+AAB//gAAf/4AAH/+AAB///w////8P///8A////AP///4H////D////5///////////////////////////////////////8=), ns-resize";
            case 7: return b ? "pointer" : "url(data:application/cur;base64,AAACAAEAICAAAA8AEAAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAIAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgAAAMGAAAEAQAACPiAAAkEgAASAkAAEgJAABICQAASA8AAEsJAAAmnwAAIlIAABA+AAAMIAAAAkAAAAKAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////B////AH///gA///wAH//8Ph//+H8P//h/D//4fw//+H8P//hPD//8Bg///AIf//4AH///Af///8P////H////z///////////////////////////////////////8=), grab";
            case 8: return b ? "pointer" : "url(data:application/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAIAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAUAAAHZAAAGUMAACFAgABHZEAAzBZAAAILIACEASAASAEgADAB4AAAAAAAeADAAEgBIABIAhAASQQIACaDMAAiTiAAEChAAAwpgAACTgAAAoAAAAEAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////9////+P///iD///ggP//wIB//4CAP/8D4D//AfQf/wP+H/+H/h//z/4f//////+H/z//h/4f/4f8D/+G+Af/wHwP/8AwH//gED//8BB///wx///8f////v///////////////////////8=), grabbing";
            case 9: return b ? "pointer" : "url(data:application/cur;base64,AAACAAEAICAAAA8AEAAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAIAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAoAAAARAAAAIIAAAEBAAABxwAAAEQAAABEAAAARAAAAEQAAABEAAAAfAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////////////////////////////////////7////8f///+D////Af///gD///4A////g////4P///+D////g////4P///+D////////////////////////////8=), cell";
            case 10: return b ? "crosshair" : "url(data:application/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAIAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAPAAAADwAAAA8AAAD/8AAA//AAAP/wAAD/8AAADwAAAA8AAAAPAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////A////gP///4D///+A///8AA//+AAP//gAD//4AA//+AAP//gAD//4AB///4D///+A////gP///4H/////////////////////////////////////////////////8=), cell";
            case 11: return b ? "pointer" : "url(data:application/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAIAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAKAAAD+QAAAgCAAAIAQAACAIAAA/kAAAAKAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////8/////H///wA///8AH///AA///wAf//8AP////H////z/////////////////////////////////////////////////////////////8=), cell";
            default: return "help";
        }
    };
    SpreadsheetCursorHelper.$t = markType(SpreadsheetCursorHelper, 'SpreadsheetCursorHelper');
    return SpreadsheetCursorHelper;
}(Base));
export { SpreadsheetCursorHelper };
//# sourceMappingURL=SpreadsheetCursorHelper.js.map
