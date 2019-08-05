/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { GridCellEventArgsDescription } from "./GridCellEventArgsDescription";
import { SectionHeaderDescriptionMetadata } from "./SectionHeaderDescriptionMetadata";
import { RowSeparatorDescriptionMetadata } from "./RowSeparatorDescriptionMetadata";
import { GridAnimationSettingsDescriptionMetadata } from "./GridAnimationSettingsDescriptionMetadata";
import { GridFilterExpressionsEventArgsDescriptionMetadata } from "./GridFilterExpressionsEventArgsDescriptionMetadata";
import { GridColumnsAutoGeneratedEventArgsDescriptionMetadata } from "./GridColumnsAutoGeneratedEventArgsDescriptionMetadata";
import { GridSelectedItemsChangedEventArgsDescriptionMetadata } from "./GridSelectedItemsChangedEventArgsDescriptionMetadata";
import { GridSelectedKeysChangedEventArgsDescriptionMetadata } from "./GridSelectedKeysChangedEventArgsDescriptionMetadata";
import { LiveGridDescription } from "./LiveGridDescription";
/**
 * @hidden
 */
var GridCellEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(GridCellEventArgsDescriptionMetadata, _super);
    function GridCellEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GridCellEventArgsDescriptionMetadata.b = function (a) {
        if (GridCellEventArgsDescriptionMetadata.a == null) {
            GridCellEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            GridCellEventArgsDescriptionMetadata.c(a, GridCellEventArgsDescriptionMetadata.a);
            LiveGridDescriptionMetadata.d(a);
        }
    };
    GridCellEventArgsDescriptionMetadata.c = function (a, b) {
        b.item("Grid", "ExportedType");
    };
    GridCellEventArgsDescriptionMetadata.d = function (a) {
        GridCellEventArgsDescriptionMetadata.b(a);
        a.n("GridCellEventArgs", function () { return new GridCellEventArgsDescription(); });
        a.m("GridCellEventArgs", GridCellEventArgsDescriptionMetadata.a);
    };
    GridCellEventArgsDescriptionMetadata.$t = markType(GridCellEventArgsDescriptionMetadata, 'GridCellEventArgsDescriptionMetadata');
    GridCellEventArgsDescriptionMetadata.a = null;
    return GridCellEventArgsDescriptionMetadata;
}(Base));
export { GridCellEventArgsDescriptionMetadata };
/**
 * @hidden
 */
var LiveGridDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(LiveGridDescriptionMetadata, _super);
    function LiveGridDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LiveGridDescriptionMetadata.b = function (a) {
        if (LiveGridDescriptionMetadata.a == null) {
            LiveGridDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            LiveGridDescriptionMetadata.c(a, LiveGridDescriptionMetadata.a);
            SectionHeaderDescriptionMetadata.d(a);
            RowSeparatorDescriptionMetadata.d(a);
            GridAnimationSettingsDescriptionMetadata.d(a);
            GridFilterExpressionsEventArgsDescriptionMetadata.d(a);
            GridCellEventArgsDescriptionMetadata.d(a);
            GridColumnsAutoGeneratedEventArgsDescriptionMetadata.d(a);
            GridSelectedItemsChangedEventArgsDescriptionMetadata.d(a);
            GridSelectedKeysChangedEventArgsDescriptionMetadata.d(a);
        }
    };
    LiveGridDescriptionMetadata.c = function (a, b) {
        b.item("SectionHeader", "ExportedType");
        b.item("RowSeparator", "ExportedType");
        b.item("DataSourceDesiredProperties", "Array:string");
        b.item("RowHeight", "Number:int");
        b.item("DefaultColumnMinWidth", "Number:double");
        b.item("HeaderHeight", "Number:int");
        b.item("HeaderClickAction", "ExportedType:string:HeaderClickAction");
        b.item("AutoGenerateColumns", "Boolean");
        b.item("RowSeparatorHeight", "Number:int");
        b.item("IsPlaceholderRenderingEnabled", "Boolean");
        b.item("ColumnAddingAnimationMode", "ExportedType:string:ColumnShowingAnimationMode");
        b.item("ColumnPropertyUpdatingAnimationMode", "ExportedType:string:ColumnPropertyUpdatingAnimationMode");
        b.item("CellDataLoadedAnimationMode", "ExportedType:string:CellDataLoadedAnimationMode");
        b.item("RowSelectionAnimationMode", "ExportedType:string:RowSelectionAnimationMode");
        b.item("AnimationSettings", "ExportedType");
        b.item("ColumnShowingAnimationMode", "ExportedType:string:ColumnShowingAnimationMode");
        b.item("ColumnMovingAnimationMode", "ExportedType:string:ColumnMovingAnimationMode");
        b.item("ColumnHidingAnimationMode", "ExportedType:string:ColumnHidingAnimationMode");
        b.item("ColumnExchangingAnimationMode", "ExportedType:string:ColumnExchangingAnimationMode");
        b.item("SelectionMode", "ExportedType:string:GridSelectionMode");
        b.item("IsFilterUIEnabled", "Boolean");
        b.item("IsGroupRowSticky", "Boolean");
        b.item("CellSelectedBackground", "Brush");
        b.item("SectionHeaderSelectedBackground", "Brush");
        b.item("PinnedRowOpacity", "Number:double");
        b.item("StickyRowBackground", "Brush");
        b.item("PinnedRowBackground", "Brush");
        b.item("LastStickyRowBackground", "Brush");
        b.item("CellBackground", "Brush");
        b.item("CellTextColor", "Brush");
        b.item("CellFontFamily", "(w:CellFontFamily/FontFamilyTransform,wf:CellFontFamily,web:cellTextStyle/FontFamilyTransform)String");
        b.item("CellFontSize", "(w:CellFontSize,wf:CellFontSize,web:cellTextStyle/FontSizeTransform)Number:double");
        b.item("CellFontStyle", "(w:CellFontStyle/FontStyleTransform,wf:CellFontFamily/FontStyleTransform,web:cellTextStyle/FontStyleTransform)String");
        b.item("CellFontWeight", "(w:CellFontWeight/FontWeightTransform,wf:CellFontFamily/FontWeightTransform,web:cellTextStyle/FontWeightTransform)String");
        b.item("SectionHeaderBackground", "Brush");
        b.item("SectionHeaderTextColor", "Brush");
        b.item("SectionHeaderFontFamily", "(w:SectionHeaderFontFamily/FontFamilyTransform,wf:SectionHeaderFontFamily,web:sectionHeaderTextStyle/FontFamilyTransform)String");
        b.item("SectionHeaderFontSize", "(w:SectionHeaderFontSize,wf:SectionHeaderFontSize,web:sectionHeaderTextStyle/FontSizeTransform)Number:double");
        b.item("SectionHeaderFontStyle", "(w:SectionHeaderFontStyle/FontStyleTransform,wf:SectionHeaderFontFamily/FontStyleTransform,web:sectionHeaderTextStyle/FontStyleTransform)String");
        b.item("SectionHeaderFontWeight", "(w:SectionHeaderFontWeight/FontWeightTransform,wf:SectionHeaderFontFamily/FontWeightTransform,web:sectionHeaderTextStyle/FontWeightTransform)String");
        b.item("HeaderBackground", "Brush");
        b.item("HeaderTextColor", "Brush");
        b.item("HeaderFontFamily", "(w:HeaderFontFamily/FontFamilyTransform,wf:HeaderFontFamily,web:headerTextStyle/FontFamilyTransform)String");
        b.item("HeaderFontSize", "(w:HeaderFontSize,wf:HeaderFontSize,web:headerTextStyle/FontSizeTransform)Number:double");
        b.item("HeaderFontStyle", "(w:HeaderFontStyle/FontStyleTransform,wf:HeaderFontFamily/FontStyleTransform,web:headerTextStyle/FontStyleTransform)String");
        b.item("HeaderFontWeight", "(w:HeaderFontWeight/FontWeightTransform,wf:HeaderFontFamily/FontWeightTransform,web:headerTextStyle/FontWeightTransform)String");
        b.item("RowSeparatorBackground", "Brush");
        b.item("RowSeparatorStickyRowBackground", "Brush");
        b.item("RowSeparatorLastStickyRowBackground", "Brush");
        b.item("RowSeparatorPinnedRowBackground", "Brush");
        b.item("PrimaryKey", "Array:string");
        b.item("ActualPrimaryKey", "Array:string");
        b.item("FilterExpressionsChangingRef", "EventRef::filterExpressionsChanging");
        b.item("FilterExpressionsChangedRef", "EventRef::filterExpressionsChanged");
        b.item("CellPreviewPointerDownRef", "EventRef::cellPreviewPointerDown");
        b.item("CellPreviewPointerUpRef", "EventRef::cellPreviewPointerUp");
        b.item("CellPointerDownRef", "EventRef::cellPointerDown");
        b.item("CellPointerUpRef", "EventRef::cellPointerUp");
        b.item("CellClickedRef", "EventRef::cellClicked");
        b.item("ColumnsAutoGeneratedRef", "EventRef::columnsAutoGenerated");
        b.item("SelectedItemsChangedRef", "EventRef::selectedItemsChanged");
        b.item("SelectedKeysChangedRef", "EventRef::selectedKeysChanged");
    };
    LiveGridDescriptionMetadata.d = function (a) {
        LiveGridDescriptionMetadata.b(a);
        a.n("LiveGrid", function () { return new LiveGridDescription(); });
        a.m("LiveGrid", LiveGridDescriptionMetadata.a);
    };
    LiveGridDescriptionMetadata.$t = markType(LiveGridDescriptionMetadata, 'LiveGridDescriptionMetadata');
    LiveGridDescriptionMetadata.a = null;
    return LiveGridDescriptionMetadata;
}(Base));
export { LiveGridDescriptionMetadata };
//# sourceMappingURL=GridCellEventArgsDescriptionMetadata_combined.js.map