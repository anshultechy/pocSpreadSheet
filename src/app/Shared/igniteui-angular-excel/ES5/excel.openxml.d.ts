import { ValueType, Type, Base, Nullable$1, Stream, Point, BaseError, SeekOrigin, IList$1, ICollection$1, IEnumerable$1, IList } from "../../igniteui-angular-core/ES5/type";
import { CT_GroupTransform2D, CT_Transform2D, CT_Point2D, CT_PositiveSize2D, ImageData, ImageFormat, ST_TableStyleType, IPackageFactory, WorkItem, WorkItem$1, ST_CellType, ST_FilterOperator, ST_IconSetType, IPackage } from "./documents.core";
import { WorksheetShapeGroup, WorksheetShape, ImageHolder, ExcelImage, CalculationMode, CalendarType, CellBorderLineStyle, CellReferenceMode, DataValidationErrorStyle, DataValidationOperatorType, DataValidationType, FillPatternStyle, FontSuperscriptSubscriptStyle, FontUnderlineStyle, HorizontalCellAlignment, HorizontalTextAlignment, PaneLocation, ObjectDisplayStyle, Orientation, PageOrder, PrintErrors, PrintNotes, ShapePositioningMode, WorkbookThemeColorType, WorksheetVisibility, WorksheetView, SortMethod, WorksheetTableStyleArea, VerticalTextAlignment, VerticalCellAlignment, WorkbookColorInfo, Workbook, WorksheetCellAddress, Worksheet, WorkbookColorTransform, WorkbookFontData, WorkbookSaveManager, ColorableItem, WorkbookLoadManager, NamedReference, Excel2007ChartData, WorkbookFormat, WorksheetCellFormatData, WorkbookStyle, WorkbookBuiltInStyle, WorksheetCellFormatOptions, IWorkbookFont, CellFill, CellFillPattern, CellFillGradient, SingleTargetFormula, Formula, WorkbookReferenceBase, StringElement, IWorkbookFontDefaultsResolver, FormattedString, Sheet, CellFillGradientStop, Filter, ConditionalOperator, CustomFilterCondition, CustomFilter, WorksheetTable, SortCondition, WorksheetRegion, WorksheetTableStyle, ConditionBase, ConditionalFormatCollection, FormatConditionType, FormatConditionOperator, FormatConditionTextOperator, FormatConditionTimePeriod, FormatConditionValueType, DataBarDirection, DataBarAxisPosition, DataBarFillType, FormatConditionIcon, FormatConditionIconSet, IconSetConditionalFormat, IconSetCriterionCollection, IconCriterion, DataValidationRule, ILegacyShapeData, WorksheetCellComment, WorksheetSerializationCache, OperatorConditionalFormat, FormulaConditionalFormat, ColorScaleConditionalFormat, DataBarConditionalFormat, ConditionValue, SparklineGroup, Sparkline, SparklineDisplayBlanksAs, SparklineType, SparklineAxisMinMax, WorksheetShapeCollection, UnknownShape, FormulaContext, PrintOptionsBase, SheetSerializationCache, WorksheetChart, WorkbookLoadOptions, FormulaTokenVisitor, CellReferenceToken, WorkbookSaveOptions, DisplayUnit, AxisType, CategoryType, SeriesType, SeriesValues, ChartType, IFormattedStringOwner, FormattedStringFont, ErrorBars, ChartGradientFill, GradientType, ChartSolidFill, ChartEmptyFill, ChartFillBase, SeriesChartTypeGroup, ChartGridLines, GridLineType, IChartObject, ChartTickLines, SeriesValuesBase, XValues, SeriesName, Legend, SeriesCollection, ElementPosition, ChartBorder, LegendEntry, IWorkbookProvider, LegendPosition, AxisPosition, Axis, VerticalTitleAlignment, BorderLineStyle, LineStyle, TextDirection, TextHorizontalOverflow, TextVerticalOverflow, TimeUnit, AxisCrosses, TickMark, TickLabelPosition, TickLabelAlignment, ChartLineBase, BarShape, ErrorBarDirection, ErrorValueType, MarkerStyle, PictureType, ChartLine, DisplayBlanksAs, ReadingOrder, TrendlineType, DataLabelPosition, AxisGroup, Series, ParentLabelLayout, ChartTitle, DisplayUnitLabel, GeographicMapProjection, GeographicMappingArea, GeographicMapLabels, ChartDeserializationCache, CategoryAxisBinning, BoxAndWhiskerSettings, Wall, ChartSeriesLines, ChartHighLowLines, ChartDropLines, UpDownBars, SeriesDataLabels, DataPoint, Trendline, TrendlineLabel, ChartLabelBase, DataLabel, UpDownBar, GeographicMapSettings, WallType, Chartsheet, ShapeFill, ShapeOutline, FormattedTextParagraph, FormattedTextRun, ShapeFillSolid, ShapeOutlineSolid, ShapeFillImage, IShapeFillVisitor$2, ShapeFillNoFill, IShapeOutlineVisitor$2, ShapeOutlineNoOutline, WorksheetShapeVisitor$2 } from "./excel.core";
import { ST_CalcMode, ST_CalendarType, ST_BorderStyle, ST_RefMode, ST_DataValidationErrorStyle, ST_DataValidationOperator, ST_DataValidationType, ST_PatternType, ST_VerticalAlignRun, ST_UnderlineValues, ST_TextUnderlineType, ST_HorizontalAlignment, ST_TextAlignType, ST_Pane, ST_Objects, ST_Orientation, ST_PageOrder, ST_PrintError, ST_CellComments, ST_EditAs, ST_SchemeColorVal, ST_SheetState, ST_SheetViewType, ST_SortMethod, ST_SystemColorVal, ST_TextAnchoringType, ST_VerticalAlignment, EG_ColorChoice, IEG_FillProperties, CT_Marker, ST_PresetColorVal, IEG_ColorTransformVisitor$2, ColorTransform_Alpha, ColorTransform_AlphaMod, ColorTransform_AlphaOff, ColorTransform_Blue, ColorTransform_BlueMod, ColorTransform_BlueOff, ColorTransform_Comp, ColorTransform_Gray, ColorTransform_Green, ColorTransform_GreenMod, ColorTransform_GreenOff, ColorTransform_Hue, ColorTransform_HueMod, CT_Angle, ColorTransform_HueOff, ColorTransform_Inv, ColorTransform_Lum, CT_PositiveFixedAngle, ColorTransform_LumMod, ColorTransform_LumOff, ST_Percentage, ColorTransform_Red, CT_Percentage, ColorTransform_RedMod, ColorTransform_RedOff, CT_FixedPercentage, ColorTransform_Sat, ColorTransform_SatMod, ColorTransform_SatOff, CT_PositivePercentage, ColorTransform_Shade, CT_PositiveFixedPercentage, ST_PositiveFixedPercentage, ColorTransform_Tint, IEG_ColorChoiceVisitor$2, IEG_FillPropertiesVisitor$2, CT_SchemeColor, CT_SRgbColor, ST_HexColorRGB, CT_SysColor, CT_PresetColor_Core, CT_BlipFillProperties, CT_GroupFillProperties, CT_NoFillProperties, CT_SolidFillProperties, ST_UnsignedIntHex, ExcelDocumentManager, ST_ConformanceClass, XmlPartManagerBase, PartManagerBase, CT_AbsoluteAnchor, CT_TwoCellAnchor, EG_Anchor, CT_OneCellAnchor, ST_FontScheme, XmlWriteManager, ST_GradientType, TablePartManager, ST_CfType, ST_ConditionalFormattingOperator, ST_TimePeriod, ST_CfvoType, ST_DataBarDirection, ST_DataBarAxisPosition, IEG_AnchorVisitor$2, ST_CF, ST_InsetMode, ST_ObjectType, UnknownStructure, CommentsPartManager, WorksheetPartManager, UnknownElementAction, UnknownElementCache, OverwriteRoundTripDataResult, ST_DataValidationImeMode, ActiveXPartManager, ExcelStylesPartManager, WorkbookPartManagerBase, ISupportSetProperty, ElementPropertyIds, CT_ComplementTransform, CT_GrayscaleTransform, CT_InverseTransform, CT_StretchInfoProperties, CT_RelativeRect, ST_TileFlipMode, ST_RectAlignment, CT_LineJoinBevel, CT_DashStopList, CT_LineEndProperties, CT_LinePropertiesBase, CT_LineJoinMiterProperties, CT_PresetLineDashProperties, CT_LineJoinRound, CT_DashStop, ISaveToXLSX, ST_TextVertOverflowType, ST_TextHorzOverflowType, ST_TextVerticalType, ST_TextWrappingType, ST_FontCollectionIndex, CT_Slicer, CT_TextFont, CT_NonVisualDrawingProps, CT_NonVisualDrawingShapeProps, CT_ShapeStyle, CT_NonVisualConnectorProperties, CT_NonVisualPictureProperties, CT_NonVisualGraphicFrameProperties, CT_GraphicalObject, CT_NonVisualGroupDrawingShapeProps, CT_GroupShapeProperties, ST_PresetPatternVal, CT_GeomGuide, ST_BlackWhiteMode, CT_CustomGeometry2D, CT_PresetGeometry2D, CT_FontReference, CT_TileInfoProperties, CT_BlipFillPropertiesBase, CT_TextCharacterPropertiesBase, CT_Hyperlink, ST_TextFontSize, ST_TextStrikeType, ST_TextCapsType, ST_TextPoint, CT_Blip, ST_BlipCompression, CT_TextParagraphProperties, ST_Coordinate32, ST_TextFontAlignType, CT_StyleMatrixReference, CT_EmbeddedWAVAudioFile, ST_PresetLineDashVal, CT_GeomRect, CT_ConnectionSite, CT_AdjPoint2D, CT_Path2D, CT_PolarAdjustHandle, CT_XYAdjustHandle, CT_Path2DArcTo, CT_GeomGuideList, CT_AdjustHandleList, CT_ConnectionSiteList, CT_Path2DList, CT_RelId, CT_ShapeNonVisual, CT_Shape, CT_GroupShape, CT_Connector, CT_Picture, ST_StrokeJoinStyle, ST_ConnectType, ST_Ext, ChartExPartManager, ChartsheetPartManager, ActiveXBinaryPartManager, CalcChainPartManager, ChartColorStylePartManager, ChartPartManager, ChartStylePartManager, ChartUserShapePartManager, ConnectionsPartManager, CorePropertiesPartManager, CtrlPropPartManager, CustomXmlItemPartManager, CustomXmlItemPropsPartManager, DrawingPartManager, ST_DrawingElementId, CT_NonVisualBase, CT_LineProperties, CT_GraphicalObjectFrame, CT_RegularTextRun, CT_TextCharacterProperties, AlternateGraphicalObjectContent, IGraphicalObjectContentVisitor$2, IEG_TextRunVisitor$2, IEG_LineFillPropertiesVisitor$2, IEG_GeometryVisitor$2, ExtendedPropertiesPartManager, ExternalLinkPartManager, PivotCacheDefinitionPartManager, PivotCacheRecordsPartManager, PivotTablePartManager, PrinterSettingsPartManager, SharedStringsPartManager, SlicerCachePartManager, SlicerPartManager, ThemeManagerPartManager, ThemePartManager, VbaProjectPartManager, VmlDrawingPartManager } from "./documents.openxml";
import { Color } from "../../igniteui-angular-core/ES5/Color";
import { Tuple$2 } from "../../igniteui-angular-core/ES5/Tuple$2";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { Dictionary$2 } from "../../igniteui-angular-core/ES5/Dictionary$2";
import { HashSet$1 } from "../../igniteui-angular-core/ES5/HashSet$1";
import { Uri } from "../../igniteui-angular-core/ES5/Uri";
import { ReadOnlyCollection$1 } from "../../igniteui-angular-core/ES5/ReadOnlyCollection$1";
import { IDictionary$2 } from "../../igniteui-angular-core/ES5/IDictionary$2";
import { IComparer$1 } from "../../igniteui-angular-core/ES5/IComparer$1";
import { Stack$1 } from "../../igniteui-angular-core/ES5/Stack$1";
import { XmlElement } from "../../igniteui-angular-core/ES5/xml";
import { XmlReader } from "../../igniteui-angular-core/ES5/XmlReader";
/**
 * @hidden
 */
export declare const enum CompressionMode {
    Decompress = 0,
    Compress = 1
}
/**
 * @hidden
 */
export declare let CompressionMode_$type: Type;
/**
 * @hidden
 */
export declare const enum SparklinesDeserializer_ContextFlags {
    None = 0,
    Sparklines = 1
}
/**
 * @hidden
 */
export declare let SparklinesDeserializer_ContextFlags_$type: Type;
/**
 * For internal use only.
 */
export declare enum OpenPackagingNonConformanceReason {
    /**
     * The IPackage.GetPart method threw an exception.
     */
    CouldNotGetPackagePart = -1,
    /**
     * The IPackagePart conforms fully to the ECMA TC45 Open Packaging Conventions.
     */
    Conformant = 0,
    /**
     * The package implementer shall require a part name. [M1.1]
     */
    NameMissing = 1,
    /**
     * The package implementer shall require a content type and
     * the format designer shall specify the content type. [M1.2], [M1.13]
     */
    ContentTypeMissing = 2,
    /**
     * A part name shall not have empty segments. [M1.3]
     */
    SegmentEmpty = 3,
    /**
     * A part name shall start with a forward slash (“/”) character. [M1.4]
     */
    NameDoesNotStartWithForwardSlash = 4,
    /**
     * A part name shall not have a forward slash as the last character. [M1.5]
     */
    NameEndsWithForwardSlash = 5,
    /**
     * A segment shall not hold any characters other than pchar characters. [M1.6]
     */
    SegmentHasNonPCharCharacters = 6,
    /**
     * A segment shall not contain percent-encoded forward slash (“/”),
     * or backward slash (“\”) characters. [M1.7]
     */
    SegmentHasPercentEncodedSlashCharacters = 7,
    /**
     * A segment shall not contain percent-encoded unreserved characters. [M1.8]
     */
    SegmentHasPercentEncodedUnreservedCharacters = 8,
    /**
     * A segment shall not end with a dot (“.”) character. [M1.9]
     */
    SegmentEndsWithDotCharacter = 9,
    /**
     * A segment shall include at least one non-dot character. [M1.10]
     */
    SegmentMissingNonDotCharacter = 10,
    /**
     * A package implementer shall neither create nor recognize
     * a part with a part name derived from another part name by
     * appending segments to it. [M1.11]
     */
    NameDerivesFromExistingPartName = 11,
    /**
     * Part name equivalence is determined by comparing part names as
     * case-insensitive ASCII strings. Packages shall not contain equivalent
     * part names and package implementers shall neither create nor recognize
     * packages with equivalent part names. [M1.12]
     */
    DuplicateName = 12,
    /**
     * IPackage implementers shall only create and only recognize parts with a content type;
     * format designers shall specify a content type for each part included in the format.
     * Content types for package parts shall fit the definition and syntax for media types
     * as specified in RFC 2616, §3.7. [M1.13]
     */
    ContentTypeHasInvalidSyntax = 13,
    /**
     * Content types shall not use linear white space either between the type and subtype or
     * between an attribute and its value. Content types also shall not have leading or
     * trailing white spaces. IPackage implementers shall create only such content types
     * and shall require such content types when retrieving a part from a package;
     * format designers shall specify only such content types for inclusion in the format. [M1.14]
     */
    ContentTypeHasInvalidWhitespace = 14,
    /**
     * The package implementer shall require a content type that does not include comments
     * and the format designer shall specify such a content type. [M1.15]
     */
    ContentTypeHasComments = 15,
    /**
     * IPackage implementers and format designers shall not create content types
     * with parameters for the package specific parts defined in this Open Packaging
     * specification and shall treat the presence of parameters in these content types
     * as an error. [M1.22]
     */
    ContentTypeHasParameters = 16,
    /**
     * If the package implementer specifies a growth hint, it is set when a
     * part is created and the package implementer shall not change the growth
     * hint after the part has been created. [M1.16]
     * <p class="body">The PackageConformanceManager does not verify this convention.</p>
     */
    GrowthHintChanged = 17,
    /**
     * XML content shall be encoded using either UTF-8 or UTF-16.
     * If any part includes an encoding declaration, as defined in
     * §4.3.3 of the XML 1.0 specification, that declaration shall
     * not name any encoding other than UTF-8 or UTF-16. IPackage
     * implementers shall enforce this requirement upon creation
     * and retrieval of the XML content. [M1.17]
     */
    XmlEncodingUnsupported = 18,
    /**
     * XML content shall be valid against the corresponding XSD schema defined
     * in this Open Packaging specification. In particular, the XML content shall
     * not contain elements or attributes drawn from namespaces that are not explicitly
     * defined in the corresponding XSD unless the XSD allows elements or attributes drawn
     * from any namespace to be present in particular locations in the XML markup. IPackage
     * implementers  shall enforce this requirement upon creation and retrieval of the
     * XML content. [M1.20]
     */
    XmlContentInvalidForSchema = 19,
    /**
     * XML content shall not contain elements or attributes drawn from “xml” or “xsi”
     * namespaces unless they are explicitly defined in the XSD schema or by other means
     * described in this Open Packaging specification. IPackage implementers shall enforce
     * this requirement upon creation and retrieval of the XML content. [M1.21]
     */
    XmlContentDrawsOnUndefinedNamespace = 20,
    /**
     * The Relationships part shall not have relationships to any other part. IPackage
     * implementers shall enforce this requirement upon the attempt to create such a
     * relationship and shall treat any such relationship as invalid. [M1.25]
     */
    RelationshipTargetsOtherRelationship = 21,
    /**
     * The package implementer shall require that every Relationship element
     * has an Id attribute, the value of which is unique within the Relationships
     * part, and that the Id type is xsd:ID, the value of which conforms to the naming
     * restrictions for xsd:IDas described in the W3C Recommendation “XML Schema Part 2:
     * Datatypes.” [M1.26]
     */
    RelationshipIdInvalid = 22,
    /**
     * The package implementer shall require the Type attribute to be a URI
     * that defines the role of the relationship and the format designer shall
     * specify such a Type. [M1.27]
     */
    RelationshipTypeInvalid = 23,
    /**
     * The package implementer shall require the Target attribute to be a URI
     * reference pointing to a target resource. The URI reference shall be a URI
     * or a relative reference. [M1.28]
     */
    RelationshipTargetInvalid = 24,
    /**
     * When set to Internal, the Target attribute shall be a relative reference and
     * that reference is interpreted relative to the “parent” part. For package
     * relationships, the package implementer shallresolve relative references in
     * the Target attribute against the pack URI that identifies the entire package
     * resource. [M1.29]
     */
    RelationshipTargetNotRelativeReference = 25,
    /**
     * The package implementer shall name relationship parts according to the special
     * relationships part naming convention and require that parts with names that
     * conform to this naming convention have the content type for a Relationships
     * part. [M1.30]
     */
    RelationshipNameInvalid = 26
}
/**
 * @hidden
 */
export declare let OpenPackagingNonConformanceReason_$type: Type;
/**
 * @hidden
 */
export declare const enum X14Serialization {
    None = 0,
    X14Only = 1,
    Both = 2
}
/**
 * @hidden
 */
export declare let X14Serialization_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_ColorStyleMethodEnum {
    cycle = 0,
    withinLinear = 1,
    acrossLinear = 2,
    withinLinearReversed = 3,
    acrossLinearReversed = 4
}
/**
 * @hidden
 */
export declare let ST_ColorStyleMethodEnum_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_StyleReferenceModifierEnum {
    ignoreCSTransforms = 0
}
/**
 * @hidden
 */
export declare let ST_StyleReferenceModifierEnum_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_StyleColorEnum {
    auto = 0
}
/**
 * @hidden
 */
export declare let ST_StyleColorEnum_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_StyleEntryModifierEnum {
    allowNoFillOverride = 0,
    allowNoLineOverride = 1
}
/**
 * @hidden
 */
export declare let ST_StyleEntryModifierEnum_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_PageOrientation {
    _default = 0,
    portrait = 1,
    landscape = 2
}
/**
 * @hidden
 */
export declare let ST_PageOrientation_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_SidePos {
    l = 0,
    t = 1,
    r = 2,
    b = 3
}
/**
 * @hidden
 */
export declare let ST_SidePos_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_PosAlign {
    min = 0,
    ctr = 1,
    max = 2
}
/**
 * @hidden
 */
export declare let ST_PosAlign_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_TickMarksType {
    _in = 0,
    _out = 1,
    cross = 2,
    none = 3
}
/**
 * @hidden
 */
export declare let ST_TickMarksType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_FormulaDirection {
    col = 0,
    row = 1
}
/**
 * @hidden
 */
export declare let ST_FormulaDirection_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_AxisUnit {
    hundreds = 0,
    thousands = 1,
    tenThousands = 2,
    hundredThousands = 3,
    millions = 4,
    tenMillions = 5,
    hundredMillions = 6,
    billions = 7,
    trillions = 8,
    percentage = 9
}
/**
 * @hidden
 */
export declare let ST_AxisUnit_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_QuartileMethod {
    inclusive = 0,
    exclusive = 1
}
/**
 * @hidden
 */
export declare let ST_QuartileMethod_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_EntityType {
    Address = 0,
    AdminDistrict = 1,
    AdminDistrict2 = 2,
    AdminDistrict3 = 3,
    Continent = 4,
    CountryRegion = 5,
    Locality = 6,
    Ocean = 7,
    Planet = 8,
    PostalCode = 9,
    Region = 10,
    Unsupported = 11
}
/**
 * @hidden
 */
export declare let ST_EntityType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_GeoProjectionType {
    mercator = 0,
    miller = 1,
    robinson = 2,
    albers = 3
}
/**
 * @hidden
 */
export declare let ST_GeoProjectionType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_GeoMappingLevel {
    dataOnly = 0,
    postalCode = 1,
    county = 2,
    state = 3,
    countryRegion = 4,
    countryRegionList = 5,
    world = 6
}
/**
 * @hidden
 */
export declare let ST_GeoMappingLevel_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_IntervalClosedSide {
    l = 0,
    r = 1
}
/**
 * @hidden
 */
export declare let ST_IntervalClosedSide_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_RegionLabelLayout {
    none = 0,
    bestFitOnly = 1,
    showAll = 2
}
/**
 * @hidden
 */
export declare let ST_RegionLabelLayout_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_ParentLabelLayout {
    none = 0,
    banner = 1,
    overlapping = 2
}
/**
 * @hidden
 */
export declare let ST_ParentLabelLayout_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_DataLabelPos {
    bestFit = 0,
    b = 1,
    ctr = 2,
    inBase = 3,
    inEnd = 4,
    l = 5,
    outEnd = 6,
    r = 7,
    t = 8
}
/**
 * @hidden
 */
export declare let ST_DataLabelPos_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_SeriesLayout {
    boxWhisker = 0,
    clusteredColumn = 1,
    funnel = 2,
    paretoLine = 3,
    regionMap = 4,
    sunburst = 5,
    treemap = 6,
    waterfall = 7
}
/**
 * @hidden
 */
export declare let ST_SeriesLayout_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_StringDimensionType {
    cat = 0,
    colorStr = 1
}
/**
 * @hidden
 */
export declare let ST_StringDimensionType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_NumericDimensionType {
    val = 0,
    x = 1,
    y = 2,
    size = 3,
    colorVal = 4
}
/**
 * @hidden
 */
export declare let ST_NumericDimensionType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_PageSetupOrientation {
    $default = 0,
    portrait = 1,
    landscape = 2
}
/**
 * @hidden
 */
export declare let ST_PageSetupOrientation_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_LegendPos {
    b = 0,
    tr = 1,
    l = 2,
    r = 3,
    t = 4
}
/**
 * @hidden
 */
export declare let ST_LegendPos_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_LayoutTarget {
    inner = 0,
    outer = 1
}
/**
 * @hidden
 */
export declare let ST_LayoutTarget_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_LayoutMode {
    edge = 0,
    factor = 1
}
/**
 * @hidden
 */
export declare let ST_LayoutMode_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_AxPos {
    b = 0,
    l = 1,
    r = 2,
    t = 3
}
/**
 * @hidden
 */
export declare let ST_AxPos_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_TickMark {
    cross = 0,
    $in = 1,
    none = 2,
    out = 3
}
/**
 * @hidden
 */
export declare let ST_TickMark_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_TickLblPos {
    high = 0,
    low = 1,
    nextTo = 2,
    none = 3
}
/**
 * @hidden
 */
export declare let ST_TickLblPos_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_Crosses {
    autoZero = 0,
    max = 1,
    min = 2
}
/**
 * @hidden
 */
export declare let ST_Crosses_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_TimeUnit {
    days = 0,
    months = 1,
    years = 2
}
/**
 * @hidden
 */
export declare let ST_TimeUnit_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_LblAlgn {
    ctr = 0,
    l = 1,
    r = 2
}
/**
 * @hidden
 */
export declare let ST_LblAlgn_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_BuiltInUnit {
    hundreds = 0,
    thousands = 1,
    tenThousands = 2,
    hundredThousands = 3,
    millions = 4,
    tenMillions = 5,
    hundredMillions = 6,
    billions = 7,
    trillions = 8
}
/**
 * @hidden
 */
export declare let ST_BuiltInUnit_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_CrossBetween {
    between = 0,
    midCat = 1
}
/**
 * @hidden
 */
export declare let ST_CrossBetween_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_SizeRepresents {
    area = 0,
    w = 1
}
/**
 * @hidden
 */
export declare let ST_SizeRepresents_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_PictureFormat {
    stretch = 0,
    stack = 1,
    stackScale = 2
}
/**
 * @hidden
 */
export declare let ST_PictureFormat_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_DLblPos {
    bestFit = 0,
    b = 1,
    ctr = 2,
    inBase = 3,
    inEnd = 4,
    l = 5,
    outEnd = 6,
    r = 7,
    t = 8
}
/**
 * @hidden
 */
export declare let ST_DLblPos_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_TrendlineType {
    exp = 0,
    linear = 1,
    log = 2,
    movingAvg = 3,
    poly = 4,
    power = 5
}
/**
 * @hidden
 */
export declare let ST_TrendlineType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_ErrDir {
    x = 0,
    y = 1
}
/**
 * @hidden
 */
export declare let ST_ErrDir_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_ErrBarType {
    both = 0,
    minus = 1,
    plus = 2
}
/**
 * @hidden
 */
export declare let ST_ErrBarType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_ErrValType {
    cust = 0,
    fixedVal = 1,
    percentage = 2,
    stdDev = 3,
    stdErr = 4
}
/**
 * @hidden
 */
export declare let ST_ErrValType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_SplitType {
    auto = 0,
    cust = 1,
    percent = 2,
    pos = 3,
    val = 4
}
/**
 * @hidden
 */
export declare let ST_SplitType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_OfPieType {
    pie = 0,
    bar = 1
}
/**
 * @hidden
 */
export declare let ST_OfPieType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_BarDir {
    bar = 0,
    col = 1
}
/**
 * @hidden
 */
export declare let ST_BarDir_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_BarGrouping {
    percentStacked = 0,
    clustered = 1,
    standard = 2,
    stacked = 3
}
/**
 * @hidden
 */
export declare let ST_BarGrouping_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_Shape {
    cone = 0,
    coneToMax = 1,
    box = 2,
    cylinder = 3,
    pyramid = 4,
    pyramidToMax = 5
}
/**
 * @hidden
 */
export declare let ST_Shape_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_ScatterStyle {
    none = 0,
    line = 1,
    lineMarker = 2,
    marker = 3,
    smooth = 4,
    smoothMarker = 5
}
/**
 * @hidden
 */
export declare let ST_ScatterStyle_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_RadarStyle {
    standard = 0,
    marker = 1,
    filled = 2
}
/**
 * @hidden
 */
export declare let ST_RadarStyle_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_Grouping {
    percentStacked = 0,
    standard = 1,
    stacked = 2
}
/**
 * @hidden
 */
export declare let ST_Grouping_$type: Type;
/**
 * @hidden
 */
export declare const enum ItemsChoiceType {
    close = 0,
    moveTo = 1,
    lnTo = 2,
    arcTo = 3,
    quadBezTo = 4,
    cubicBezTo = 5
}
/**
 * @hidden
 */
export declare let ItemsChoiceType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_TextTabAlignType {
    l = 0,
    ctr = 1,
    r = 2,
    dec = 3
}
/**
 * @hidden
 */
export declare let ST_TextTabAlignType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_TextAutonumberScheme {
    alphaLcParenBoth = 0,
    alphaUcParenBoth = 1,
    alphaLcParenR = 2,
    alphaUcParenR = 3,
    alphaLcPeriod = 4,
    alphaUcPeriod = 5,
    arabicParenBoth = 6,
    arabicParenR = 7,
    arabicPeriod = 8,
    arabicPlain = 9,
    romanLcParenBoth = 10,
    romanUcParenBoth = 11,
    romanLcParenR = 12,
    romanUcParenR = 13,
    romanLcPeriod = 14,
    romanUcPeriod = 15,
    circleNumDbPlain = 16,
    circleNumWdBlackPlain = 17,
    circleNumWdWhitePlain = 18,
    arabicDbPeriod = 19,
    arabicDbPlain = 20,
    ea1ChsPeriod = 21,
    ea1ChsPlain = 22,
    ea1ChtPeriod = 23,
    ea1ChtPlain = 24,
    ea1JpnChsDbPeriod = 25,
    ea1JpnKorPlain = 26,
    ea1JpnKorPeriod = 27,
    arabic1Minus = 28,
    arabic2Minus = 29,
    hebrew2Minus = 30,
    thaiAlphaPeriod = 31,
    thaiAlphaParenR = 32,
    thaiAlphaParenBoth = 33,
    thaiNumPeriod = 34,
    thaiNumParenR = 35,
    thaiNumParenBoth = 36,
    hindiAlphaPeriod = 37,
    hindiNumPeriod = 38,
    hindiNumParenR = 39,
    hindiAlpha1Period = 40
}
/**
 * @hidden
 */
export declare let ST_TextAutonumberScheme_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_OnOffStyleType {
    on = 0,
    off = 1,
    def = 2
}
/**
 * @hidden
 */
export declare let ST_OnOffStyleType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_TextShapeType {
    textNoShape = 0,
    textPlain = 1,
    textStop = 2,
    textTriangle = 3,
    textTriangleInverted = 4,
    textChevron = 5,
    textChevronInverted = 6,
    textRingInside = 7,
    textRingOutside = 8,
    textArchUp = 9,
    textArchDown = 10,
    textCircle = 11,
    textButton = 12,
    textArchUpPour = 13,
    textArchDownPour = 14,
    textCirclePour = 15,
    textButtonPour = 16,
    textCurveUp = 17,
    textCurveDown = 18,
    textCanUp = 19,
    textCanDown = 20,
    textWave1 = 21,
    textWave2 = 22,
    textDoubleWave1 = 23,
    textWave4 = 24,
    textInflate = 25,
    textDeflate = 26,
    textInflateBottom = 27,
    textDeflateBottom = 28,
    textInflateTop = 29,
    textDeflateTop = 30,
    textDeflateInflate = 31,
    textDeflateInflateDeflate = 32,
    textFadeRight = 33,
    textFadeLeft = 34,
    textFadeUp = 35,
    textFadeDown = 36,
    textSlantUp = 37,
    textSlantDown = 38,
    textCascadeUp = 39,
    textCascadeDown = 40
}
/**
 * @hidden
 */
export declare let ST_TextShapeType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_PresetShadowVal {
    shdw1 = 0,
    shdw2 = 1,
    shdw3 = 2,
    shdw4 = 3,
    shdw5 = 4,
    shdw6 = 5,
    shdw7 = 6,
    shdw8 = 7,
    shdw9 = 8,
    shdw10 = 9,
    shdw11 = 10,
    shdw12 = 11,
    shdw13 = 12,
    shdw14 = 13,
    shdw15 = 14,
    shdw16 = 15,
    shdw17 = 16,
    shdw18 = 17,
    shdw19 = 18,
    shdw20 = 19
}
/**
 * @hidden
 */
export declare let ST_PresetShadowVal_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_PathShadeType {
    shape = 0,
    circle = 1,
    rect = 2
}
/**
 * @hidden
 */
export declare let ST_PathShadeType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_BlendMode {
    over = 0,
    mult = 1,
    screen = 2,
    darken = 3,
    lighten = 4
}
/**
 * @hidden
 */
export declare let ST_BlendMode_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_EffectContainerType {
    sib = 0,
    tree = 1
}
/**
 * @hidden
 */
export declare let ST_EffectContainerType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_BevelPresetType {
    relaxedInset = 0,
    circle = 1,
    slope = 2,
    cross = 3,
    angle = 4,
    softRound = 5,
    convex = 6,
    coolSlant = 7,
    divot = 8,
    riblet = 9,
    hardEdge = 10,
    artDeco = 11
}
/**
 * @hidden
 */
export declare let ST_BevelPresetType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_PresetMaterialType {
    legacyMatte = 0,
    legacyPlastic = 1,
    legacyMetal = 2,
    legacyWireframe = 3,
    matte = 4,
    plastic = 5,
    metal = 6,
    warmMatte = 7,
    translucentPowder = 8,
    powder = 9,
    dkEdge = 10,
    softEdge = 11,
    clear = 12,
    flat = 13,
    softmetal = 14
}
/**
 * @hidden
 */
export declare let ST_PresetMaterialType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_LightRigDirection {
    tl = 0,
    t = 1,
    tr = 2,
    l = 3,
    r = 4,
    bl = 5,
    b = 6,
    br = 7
}
/**
 * @hidden
 */
export declare let ST_LightRigDirection_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_LightRigType {
    legacyFlat1 = 0,
    legacyFlat2 = 1,
    legacyFlat3 = 2,
    legacyFlat4 = 3,
    legacyNormal1 = 4,
    legacyNormal2 = 5,
    legacyNormal3 = 6,
    legacyNormal4 = 7,
    legacyHarsh1 = 8,
    legacyHarsh2 = 9,
    legacyHarsh3 = 10,
    legacyHarsh4 = 11,
    threePt = 12,
    balanced = 13,
    soft = 14,
    harsh = 15,
    flood = 16,
    contrasting = 17,
    morning = 18,
    sunrise = 19,
    sunset = 20,
    chilly = 21,
    freezing = 22,
    flat = 23,
    twoPt = 24,
    glow = 25,
    brightRoom = 26
}
/**
 * @hidden
 */
export declare let ST_LightRigType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_PresetCameraType {
    legacyObliqueTopLeft = 0,
    legacyObliqueTop = 1,
    legacyObliqueTopRight = 2,
    legacyObliqueLeft = 3,
    legacyObliqueFront = 4,
    legacyObliqueRight = 5,
    legacyObliqueBottomLeft = 6,
    legacyObliqueBottom = 7,
    legacyObliqueBottomRight = 8,
    legacyPerspectiveTopLeft = 9,
    legacyPerspectiveTop = 10,
    legacyPerspectiveTopRight = 11,
    legacyPerspectiveLeft = 12,
    legacyPerspectiveFront = 13,
    legacyPerspectiveRight = 14,
    legacyPerspectiveBottomLeft = 15,
    legacyPerspectiveBottom = 16,
    legacyPerspectiveBottomRight = 17,
    orthographicFront = 18,
    isometricTopUp = 19,
    isometricTopDown = 20,
    isometricBottomUp = 21,
    isometricBottomDown = 22,
    isometricLeftUp = 23,
    isometricLeftDown = 24,
    isometricRightUp = 25,
    isometricRightDown = 26,
    isometricOffAxis1Left = 27,
    isometricOffAxis1Right = 28,
    isometricOffAxis1Top = 29,
    isometricOffAxis2Left = 30,
    isometricOffAxis2Right = 31,
    isometricOffAxis2Top = 32,
    isometricOffAxis3Left = 33,
    isometricOffAxis3Right = 34,
    isometricOffAxis3Bottom = 35,
    isometricOffAxis4Left = 36,
    isometricOffAxis4Right = 37,
    isometricOffAxis4Bottom = 38,
    obliqueTopLeft = 39,
    obliqueTop = 40,
    obliqueTopRight = 41,
    obliqueLeft = 42,
    obliqueRight = 43,
    obliqueBottomLeft = 44,
    obliqueBottom = 45,
    obliqueBottomRight = 46,
    perspectiveFront = 47,
    perspectiveLeft = 48,
    perspectiveRight = 49,
    perspectiveAbove = 50,
    perspectiveBelow = 51,
    perspectiveAboveLeftFacing = 52,
    perspectiveAboveRightFacing = 53,
    perspectiveContrastingLeftFacing = 54,
    perspectiveContrastingRightFacing = 55,
    perspectiveHeroicLeftFacing = 56,
    perspectiveHeroicRightFacing = 57,
    perspectiveHeroicExtremeLeftFacing = 58,
    perspectiveHeroicExtremeRightFacing = 59,
    perspectiveRelaxed = 60,
    perspectiveRelaxedModerately = 61
}
/**
 * @hidden
 */
export declare let ST_PresetCameraType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_AnimationBuildType_IGEXT {
    allAtOnce = 0,
    one = 1,
    lvlOne = 2,
    lvlAtOnce = 3
}
/**
 * @hidden
 */
export declare let ST_AnimationBuildType_IGEXT_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_ChartBuildStep {
    category = 0,
    ptInCategory = 1,
    series = 2,
    ptInSeries = 3,
    allPts = 4,
    gridLegend = 5
}
/**
 * @hidden
 */
export declare let ST_ChartBuildStep_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_DgmBuildStep {
    sp = 0,
    bg = 1
}
/**
 * @hidden
 */
export declare let ST_DgmBuildStep_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_AnimationBuildType {
    allAtOnce = 0
}
/**
 * @hidden
 */
export declare let ST_AnimationBuildType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_AnimationDgmOnlyBuildType {
    one = 0,
    lvlOne = 1,
    lvlAtOnce = 2
}
/**
 * @hidden
 */
export declare let ST_AnimationDgmOnlyBuildType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_AnimationChartOnlyBuildType {
    series = 0,
    category = 1,
    seriesEl = 2,
    categoryEl = 3
}
/**
 * @hidden
 */
export declare let ST_AnimationChartOnlyBuildType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_ColorSchemeIndex {
    dk1 = 0,
    lt1 = 1,
    dk2 = 2,
    lt2 = 3,
    accent1 = 4,
    accent2 = 5,
    accent3 = 6,
    accent4 = 7,
    accent5 = 8,
    accent6 = 9,
    hlink = 10,
    folHlink = 11
}
/**
 * @hidden
 */
export declare let ST_ColorSchemeIndex_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_PivotAreaType {
    none = 0,
    normal = 1,
    data = 2,
    all = 3,
    origin = 4,
    button = 5,
    topRight = 6
}
/**
 * @hidden
 */
export declare let ST_PivotAreaType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_Axis {
    axisRow = 0,
    axisCol = 1,
    axisPage = 2,
    axisValues = 3
}
/**
 * @hidden
 */
export declare let ST_Axis_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_DdeValueType {
    nil = 0,
    b = 1,
    n = 2,
    e = 3,
    str = 4
}
/**
 * @hidden
 */
export declare let ST_DdeValueType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_Type {
    none = 0,
    all = 1,
    row = 2,
    column = 3
}
/**
 * @hidden
 */
export declare let ST_Type_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_Scope {
    selection = 0,
    data = 1,
    field = 2
}
/**
 * @hidden
 */
export declare let ST_Scope_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_TabularSlicerCacheSortOrder {
    ascending = 0,
    descending = 1
}
/**
 * @hidden
 */
export declare let ST_TabularSlicerCacheSortOrder_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_SlicerCacheCrossFilter {
    none = 0,
    showItemsWithDataAtTop = 1,
    showItemsWithNoData = 2
}
/**
 * @hidden
 */
export declare let ST_SlicerCacheCrossFilter_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_Checked {
    Unchecked = 0,
    Checked = 1,
    Mixed = 2
}
/**
 * @hidden
 */
export declare let ST_Checked_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_DropStyle {
    combo = 0,
    comboedit = 1,
    simple = 2
}
/**
 * @hidden
 */
export declare let ST_DropStyle_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_SelType {
    single = 0,
    multi = 1,
    extended = 2
}
/**
 * @hidden
 */
export declare let ST_SelType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_TextHAlign {
    left = 0,
    center = 1,
    right = 2,
    justify = 3,
    distributed = 4
}
/**
 * @hidden
 */
export declare let ST_TextHAlign_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_TextVAlign {
    top = 0,
    center = 1,
    bottom = 2,
    justify = 3,
    distributed = 4
}
/**
 * @hidden
 */
export declare let ST_TextVAlign_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_EditValidation {
    text = 0,
    integer = 1,
    number = 2,
    reference = 3,
    formula = 4
}
/**
 * @hidden
 */
export declare let ST_EditValidation_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_SlicerStyleType {
    unselectedItemWithData = 0,
    selectedItemWithData = 1,
    unselectedItemWithNoData = 2,
    selectedItemWithNoData = 3,
    hoveredUnselectedItemWithData = 4,
    hoveredSelectedItemWithData = 5,
    hoveredUnselectedItemWithNoData = 6,
    hoveredSelectedItemWithNoData = 7
}
/**
 * @hidden
 */
export declare let ST_SlicerStyleType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_PivotEditValueType {
    number = 0,
    dateTime = 1,
    string1 = 2,
    boolean1 = 3,
    error = 4
}
/**
 * @hidden
 */
export declare let ST_PivotEditValueType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_AllocationMethod {
    equalAllocation = 0,
    equalIncrement = 1,
    weightedAllocation = 2,
    weightedIncrement = 3
}
/**
 * @hidden
 */
export declare let ST_AllocationMethod_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_PivotShowAs {
    percentOfParent = 0,
    percentOfParentRow = 1,
    percentOfParentCol = 2,
    percentOfRunningTotal = 3,
    rankAscending = 4,
    rankDescending = 5
}
/**
 * @hidden
 */
export declare let ST_PivotShowAs_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_SparklineType {
    line = 0,
    column = 1,
    stacked = 2
}
/**
 * @hidden
 */
export declare let ST_SparklineType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_SparklineAxisMinMax {
    individual = 0,
    group = 1,
    custom = 2
}
/**
 * @hidden
 */
export declare let ST_SparklineAxisMinMax_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_OlapSlicerCacheSortOrder {
    natural = 0,
    ascending = 1,
    descending = 2
}
/**
 * @hidden
 */
export declare let ST_OlapSlicerCacheSortOrder_$type: Type;
/**
 * @hidden
 */
export declare const enum ElementNamespaceContext {
    None = 0,
    DML = 1,
    SML = 2,
    Chart = 3
}
/**
 * @hidden
 */
export declare let ElementNamespaceContext_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_MarkerStyle {
    none = 0,
    circle = 1,
    dash = 2,
    diamond = 3,
    dot = 4,
    plus = 5,
    picture = 6,
    square = 7,
    star = 8,
    triangle = 9,
    x = 10
}
/**
 * @hidden
 */
export declare let ST_MarkerStyle_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_DispBlanksAs {
    span = 0,
    gap = 1,
    zero = 2
}
/**
 * @hidden
 */
export declare let ST_DispBlanksAs_$type: Type;
/**
 * @hidden
 */
export declare const enum XlsxUtilities_ColorTransformsApplicator_ColorChannelHSL {
    H = 0,
    S = 1,
    L = 2
}
/**
 * @hidden
 */
export declare let XlsxUtilities_ColorTransformsApplicator_ColorChannelHSL_$type: Type;
/**
 * @hidden
 */
export declare const enum XlsxUtilities_ColorTransformsApplicator_ColorChannelRGB {
    A = 0,
    R = 1,
    G = 2,
    B = 3
}
/**
 * @hidden
 */
export declare let XlsxUtilities_ColorTransformsApplicator_ColorChannelRGB_$type: Type;
/**
 * @hidden
 */
export declare class XlsxUtilities extends Base {
    static $t: Type;
    static af(a: WorksheetShapeGroup): CT_GroupTransform2D;
    static ag(a: WorksheetShape): CT_Transform2D;
    static u(a: ImageData): ImageHolder;
    private static v;
    static a(a: ST_CalcMode): CalculationMode;
    static f(a: ST_CalendarType): CalendarType;
    static b(a: ST_BorderStyle): CellBorderLineStyle;
    static c(a: ST_RefMode): CellReferenceMode;
    static d(a: ST_DataValidationErrorStyle): DataValidationErrorStyle;
    static s(a: ST_DataValidationOperator): DataValidationOperatorType;
    static t(a: ST_DataValidationType): DataValidationType;
    static a7(a: Nullable$1<boolean>): Nullable$1<boolean>;
    static a6(a: boolean): Nullable$1<boolean>;
    static a8(a: Nullable$1<ST_PatternType>): Nullable$1<FillPatternStyle>;
    static e(a: ST_PatternType): FillPatternStyle;
    static g(a: ST_VerticalAlignRun): FontSuperscriptSubscriptStyle;
    static i(a: ST_UnderlineValues): FontUnderlineStyle;
    static h(a: ST_TextUnderlineType): FontUnderlineStyle;
    static k(a: Nullable$1<ST_HorizontalAlignment>): HorizontalCellAlignment;
    static j(a: ST_HorizontalAlignment): HorizontalCellAlignment;
    static l(a: ST_TextAlignType): HorizontalTextAlignment;
    static p(a: ST_Pane): PaneLocation;
    static m(a: ST_Objects): ObjectDisplayStyle;
    static n(a: ST_Orientation): Orientation;
    static o(a: ST_PageOrder): PageOrder;
    static q(a: ST_PrintError): PrintErrors;
    static r(a: ST_CellComments): PrintNotes;
    static w(a: ST_EditAs): ShapePositioningMode;
    static am(a: CellBorderLineStyle): ST_BorderStyle;
    static aq(a: DataValidationErrorStyle): ST_DataValidationErrorStyle;
    static ar(a: DataValidationOperatorType): ST_DataValidationOperator;
    static as(a: DataValidationType): ST_DataValidationType;
    static an(a: CalculationMode): ST_CalcMode;
    static ao(a: CalendarType): ST_CalendarType;
    static ap(a: PrintNotes): ST_CellComments;
    static at(a: ShapePositioningMode): ST_EditAs;
    static a9(a: HorizontalCellAlignment): Nullable$1<ST_HorizontalAlignment>;
    static au(a: ObjectDisplayStyle): ST_Objects;
    static av(a: Orientation): ST_Orientation;
    static aw(a: PageOrder): ST_PageOrder;
    static ax(a: PaneLocation): ST_Pane;
    static ba(a: Nullable$1<FillPatternStyle>): Nullable$1<ST_PatternType>;
    static ay(a: FillPatternStyle): ST_PatternType;
    static az(a: PrintErrors): ST_PrintError;
    static a0(a: CellReferenceMode): ST_RefMode;
    static ah(a: WorkbookThemeColorType): ST_SchemeColorVal;
    static a1(a: WorksheetVisibility): ST_SheetState;
    static a2(a: WorksheetView): ST_SheetViewType;
    static a3(a: SortMethod): ST_SortMethod;
    static bb(a: Color): Nullable$1<ST_SystemColorVal>;
    static a4(a: WorksheetTableStyleArea): ST_TableStyleType;
    static ai(a: HorizontalTextAlignment): ST_TextAlignType;
    static aj(a: VerticalTextAlignment): ST_TextAnchoringType;
    static ak(a: FontUnderlineStyle): ST_TextUnderlineType;
    static a5(a: FontUnderlineStyle): ST_UnderlineValues;
    static bc(a: VerticalCellAlignment): Nullable$1<ST_VerticalAlignment>;
    static al(a: FontSuperscriptSubscriptStyle): ST_VerticalAlignRun;
    static bf(a: ST_SystemColorVal): Color;
    static y(a: Nullable$1<ST_VerticalAlignment>): VerticalCellAlignment;
    static x(a: ST_VerticalAlignment): VerticalCellAlignment;
    static z(a: ST_TextAnchoringType): VerticalTextAlignment;
    static aa(a: EG_ColorChoice, b: Workbook): WorkbookColorInfo;
    static ab(a: IEG_FillProperties, b: Workbook): WorkbookColorInfo;
    static ac(a: ST_SchemeColorVal): WorkbookThemeColorType;
    static bd(a: CT_Marker, b: Worksheet): Tuple$2<WorksheetCellAddress, Point>;
    static ad(a: ST_SheetViewType): WorksheetView;
    static ae(a: ST_SheetState): WorksheetVisibility;
    static be(a: ST_PresetColorVal): Color;
}
/**
 * @hidden
 */
export declare class XlsxUtilities_ColorTransformsApplicator extends Base implements IEG_ColorTransformVisitor$2<Color, Color> {
    static $t: Type;
    static readonly a: XlsxUtilities_ColorTransformsApplicator;
    constructor();
    _visitColorTransform_Alpha$i(a: ColorTransform_Alpha, b: Color): Color;
    _visitColorTransform_AlphaMod$i(a: ColorTransform_AlphaMod, b: Color): Color;
    _visitColorTransform_AlphaOff$i(a: ColorTransform_AlphaOff, b: Color): Color;
    _visitColorTransform_Blue$i(a: ColorTransform_Blue, b: Color): Color;
    _visitColorTransform_BlueMod$i(a: ColorTransform_BlueMod, b: Color): Color;
    _visitColorTransform_BlueOff$i(a: ColorTransform_BlueOff, b: Color): Color;
    _visitColorTransform_Comp$i(a: ColorTransform_Comp, b: Color): Color;
    _visitColorTransform_Gray$i(a: ColorTransform_Gray, b: Color): Color;
    _visitColorTransform_Green$i(a: ColorTransform_Green, b: Color): Color;
    _visitColorTransform_GreenMod$i(a: ColorTransform_GreenMod, b: Color): Color;
    _visitColorTransform_GreenOff$i(a: ColorTransform_GreenOff, b: Color): Color;
    _visitColorTransform_Hue$i(a: ColorTransform_Hue, b: Color): Color;
    _visitColorTransform_HueMod$i(a: ColorTransform_HueMod, b: Color): Color;
    _visitColorTransform_HueOff$i(a: ColorTransform_HueOff, b: Color): Color;
    _visitColorTransform_Inv$i(a: ColorTransform_Inv, b: Color): Color;
    _visitColorTransform_Lum$i(a: ColorTransform_Lum, b: Color): Color;
    _visitColorTransform_LumMod$i(a: ColorTransform_LumMod, b: Color): Color;
    _visitColorTransform_LumOff$i(a: ColorTransform_LumOff, b: Color): Color;
    _visitColorTransform_Red$i(a: ColorTransform_Red, b: Color): Color;
    _visitColorTransform_RedMod$i(a: ColorTransform_RedMod, b: Color): Color;
    _visitColorTransform_RedOff$i(a: ColorTransform_RedOff, b: Color): Color;
    _visitColorTransform_Sat$i(a: ColorTransform_Sat, b: Color): Color;
    _visitColorTransform_SatMod$i(a: ColorTransform_SatMod, b: Color): Color;
    _visitColorTransform_SatOff$i(a: ColorTransform_SatOff, b: Color): Color;
    _visitColorTransform_Shade$i(a: ColorTransform_Shade, b: Color): Color;
    _visitColorTransform_Tint$i(a: ColorTransform_Tint, b: Color): Color;
    private static c;
    private static b;
}
/**
 * @hidden
 */
export declare class XlsxUtilities_WorkbookColorInfoCreator extends Base implements IEG_ColorChoiceVisitor$2<Workbook, WorkbookColorInfo>, IEG_FillPropertiesVisitor$2<Workbook, WorkbookColorInfo> {
    static $t: Type;
    static readonly a: XlsxUtilities_WorkbookColorInfoCreator;
    constructor();
    _visitCT_SchemeColor$i(a: CT_SchemeColor, b: Workbook): WorkbookColorInfo;
    _visitCT_SRgbColor$i(a: CT_SRgbColor, b: Workbook): WorkbookColorInfo;
    _visitCT_SysColor$i(a: CT_SysColor, b: Workbook): WorkbookColorInfo;
    _visitCT_PresetColor$i(a: CT_PresetColor_Core, b: Workbook): WorkbookColorInfo;
    _visitCT_BlipFillProperties$i(a: CT_BlipFillProperties, b: Workbook): WorkbookColorInfo;
    _visitCT_GroupFillProperties$i(a: CT_GroupFillProperties, b: Workbook): WorkbookColorInfo;
    _visitCT_NoFillProperties$i(a: CT_NoFillProperties, b: Workbook): WorkbookColorInfo;
    _visitCT_SolidFillProperties$i(a: CT_SolidFillProperties, b: Workbook): WorkbookColorInfo;
    private static b;
}
/**
 * @hidden
 */
export declare class ColorInfo extends Base {
    static $t: Type;
    private static readonly b;
    equals(a: any): boolean;
    getHashCode(): number;
    i: Nullable$1<boolean>;
    j: Nullable$1<number>;
    k: Nullable$1<ST_UnsignedIntHex>;
    l: Nullable$1<number>;
    g: number;
    readonly f: boolean;
    d: WorkbookFontData;
    static a(a: WorkbookSaveManager, b: WorkbookColorInfo, c: ColorableItem): ColorInfo;
    c(a: WorkbookLoadManager): WorkbookColorInfo;
    m(a: ColorInfo, b: Workbook): void;
}
/**
 * @hidden
 */
export declare class WorkbookLoadManagerExcel2007_FontCollection extends Base {
    static $t: Type;
    private readonly b;
    private readonly c;
    constructor();
    f(a: string, b: string): void;
    e(): string;
    d: string;
    a(a: number, b: string, c: string): {
        ret: boolean;
        p1: string;
        p2: string;
    };
}
/**
 * @hidden
 */
export declare class WorkbookLoadManagerExcel2007_NamedReferenceInfo extends ValueType {
    static $t: Type;
    constructor();
    b: boolean;
    a: NamedReference;
}
/**
 * @hidden
 */
export declare abstract class ExcelWorkbookDocumentManager extends ExcelDocumentManager {
    static $t: Type;
    private readonly _bx;
    constructor(a: Workbook, b: WorkbookLoadManagerExcel2007_FontCollection, c: WorkbookLoadManagerExcel2007_FontCollection, d: IPackageFactory, e: Stream, f: boolean, g: Nullable$1<ST_ConformanceClass>);
    readonly _bv: WorkbookLoadManagerExcel2007_FontCollection;
    readonly _bw: WorkbookLoadManagerExcel2007_FontCollection;
    readonly _by: Workbook;
    _bu: ThemePartInfo;
}
/**
 * @hidden
 */
export declare class ObjectModelExcelDocumentManager extends ExcelWorkbookDocumentManager {
    static $t: Type;
    private readonly _b6;
    private readonly _b8;
    constructor(a: number, b: WorkbookLoadManagerExcel2007, c: IPackageFactory, d: Stream, e?: Nullable$1<ST_ConformanceClass>);
    constructor(a: number, b: WorkbookSaveManagerExcel2007, c: IPackageFactory, d: Stream, e: Nullable$1<ST_ConformanceClass>);
    constructor(a: number, ..._rest: any[]);
    _bh(): void;
    protected _o(): WorkItem;
    protected _s(): WorkItem;
    _b0(a: ExcelImage, b: ImageFormat, c?: string): WorkItem$1<Tuple$2<Uri, string>>;
    _bz(a: ImageData, b?: string): WorkItem$1<Tuple$2<Uri, string>>;
    _cd(): string;
    _b4(): DeserializedChartInfo;
    private _b1;
    private _b5;
    private _b2;
    readonly _b7: WorkbookLoadManagerExcel2007;
    readonly _b9: WorkbookSaveManagerExcel2007;
    _b3: Excel2007ChartData;
    _ca: HashSet$1<string>;
}
/**
 * @hidden
 */
export declare class ThemePartInfo extends Base {
    static $t: Type;
    a: WorkbookLoadManagerExcel2007_FontCollection;
    b: WorkbookLoadManagerExcel2007_FontCollection;
    c: CT_StyleMatrix;
}
/**
 * @hidden
 */
export declare class WorkbookSerializationDataExcel2007 extends ValueType {
    static $t: Type;
    constructor(a: number, b: ObjectModelExcelDocumentManager);
    constructor();
    constructor(a: number, ..._rest: any[]);
    readonly b: List$1<BorderInfo>;
    readonly c: List$1<StyleInfo>;
    readonly d: List$1<FormatInfo>;
    readonly e: List$1<FormatInfo>;
    readonly a: ObjectModelExcelDocumentManager;
    readonly f: List$1<FillInfo>;
}
/**
 * @hidden
 */
export declare class BorderInfo extends Base {
    static $t: Type;
    private h;
    private j;
    private l;
    private b;
    private d;
    private f;
    private n;
    private p;
    private r;
    private u;
    equals(a: any): boolean;
    getHashCode(): number;
    readonly i: BorderStyleInfo;
    readonly k: BorderStyleInfo;
    readonly m: BorderStyleInfo;
    readonly c: BorderStyleInfo;
    readonly e: BorderStyleInfo;
    readonly g: BorderStyleInfo;
    readonly o: BorderStyleInfo;
    q: boolean;
    s: boolean;
    v: boolean;
    x(a: WorksheetCellFormatData, b: WorkbookLoadManager): void;
    static a(a: WorkbookSaveManager, b: WorksheetCellFormatData): BorderInfo;
    private static y;
}
/**
 * @hidden
 */
export declare class StyleInfo extends Base {
    static $t: Type;
    private g;
    private a;
    private c;
    private i;
    private k;
    private f;
    constructor(a: number);
    constructor(a: number, b: WorkbookSaveManager, c: WorkbookStyle);
    constructor(a: number, ..._rest: any[]);
    h: Nullable$1<number>;
    b: boolean;
    d: boolean;
    j: Nullable$1<number>;
    l: string;
    e: number;
}
/**
 * @hidden
 */
export declare class FormatInfo extends Base {
    static $t: Type;
    private h;
    private n;
    private q;
    private s;
    private u;
    private j;
    private l;
    private w;
    private c;
    private a;
    private f;
    i: WorksheetCellFormatOptions;
    o: Nullable$1<number>;
    r: Nullable$1<number>;
    t: Nullable$1<number>;
    v: Nullable$1<number>;
    k: boolean;
    m: boolean;
    p: Nullable$1<number>;
    d: ProtectionInfo;
    b: AlignmentInfo;
    g: WorksheetCellFormatData;
    e(a: WorkbookLoadManagerExcel2007, b: boolean, c: boolean): WorksheetCellFormatData;
}
/**
 * @hidden
 */
export declare class FillInfo extends Base {
    static $t: Type;
    private e;
    private c;
    equals(a: any): boolean;
    getHashCode(): number;
    d: PatternFillInfo;
    b: GradientFillInfo;
    h(a: WorksheetCellFormatData, b: WorkbookLoadManager): void;
    static a(a: WorkbookSaveManager, b: WorksheetCellFormatData): FillInfo;
}
/**
 * @hidden
 */
export declare class GZipStream extends Stream {
    static $t: Type;
    private _o;
    private _entryStream;
    constructor(a: Stream, b: CompressionMode);
    readonly _baseStream: Stream;
    protected get_canRead(): boolean;
    readonly canRead: boolean;
    protected get_canSeek(): boolean;
    readonly canSeek: boolean;
    protected get_canWrite(): boolean;
    readonly canWrite: boolean;
    protected get_length(): number;
    readonly length: number;
    protected get_position(): number;
    protected set_position(a: number): void;
    position: number;
    protected disposeCore(a: boolean): void;
    flush(): void;
    read(a: number[], b: number, c: number): number;
    seek(a: number, b: SeekOrigin): number;
    setLength(a: number): void;
    write(a: number[], b: number, c: number): void;
}
/**
 * @hidden
 */
export declare class DxfInfo extends Base {
    static $t: Type;
    constructor(a: number);
    constructor(a: number, b: WorkbookSaveManager, c: WorksheetCellFormatData);
    constructor(a: number, ..._rest: any[]);
    h(a: WorkbookLoadManager): WorksheetCellFormatData;
    b: AlignmentInfo;
    c: BorderInfo;
    e: FillInfo;
    a: IWorkbookFont;
    d: ColorInfo;
    g: SerializationNumberFormatInfo;
    f: ProtectionInfo;
}
/**
 * @hidden
 */
export declare class AlignmentInfo extends Base {
    static $t: Type;
    static f: AlignmentInfo;
    private b;
    private aa;
    private p;
    private ac;
    private ae;
    private r;
    private ag;
    private h;
    private t;
    static staticInit(): void;
    constructor(a: number);
    constructor(a: number, b: HorizontalCellAlignment, c: Nullable$1<number>, d: boolean, e: Nullable$1<number>, f: Nullable$1<number>, g: Nullable$1<number>, h: Nullable$1<boolean>, i: VerticalCellAlignment, j: Nullable$1<boolean>);
    constructor(a: number, ..._rest: any[]);
    equals(a: any): boolean;
    getHashCode(): number;
    c: HorizontalCellAlignment;
    ab: Nullable$1<number>;
    q: boolean;
    ad: Nullable$1<number>;
    af: Nullable$1<number>;
    s: boolean;
    ah: Nullable$1<number>;
    i: VerticalCellAlignment;
    u: boolean;
    readonly o: boolean;
    ai(a: WorksheetCellFormatData, b?: boolean): void;
    static d(a: WorksheetCellFormatData): AlignmentInfo;
    static e(a: WorksheetCellFormatData, b: boolean): AlignmentInfo;
    static n(a: AlignmentInfo, b: AlignmentInfo): boolean;
}
/**
 * @hidden
 */
export declare class PatternFillInfo extends Base {
    static $t: Type;
    private c;
    private d;
    private i;
    equals(a: any): boolean;
    getHashCode(): number;
    b: ColorInfo;
    e: ColorInfo;
    j: Nullable$1<FillPatternStyle>;
    static f(a: WorkbookSaveManager, b: WorksheetCellFormatData, c: CellFillPattern): PatternFillInfo;
    a(a: WorkbookLoadManager, b: WorksheetCellFormatData): CellFillPattern;
}
/**
 * @hidden
 */
export declare class ObjectModelCommonPartHelpers extends Base {
    static $t: Type;
    static e(a: string, b: string): string;
    private static b;
    private static f;
    private static g;
    private static h;
    private static i;
    private static j;
    private static k;
    private static l;
    static c(a: XmlPartManagerBase, b: (partManager: XmlPartManagerBase, autoValue: Nullable$1<boolean>, indexedValue: Nullable$1<number>, rgbValue: Nullable$1<ST_UnsignedIntHex>, themeValue: Nullable$1<number>, tintValue: number) => {
        p1: Nullable$1<boolean>;
        p2: Nullable$1<number>;
        p3: Nullable$1<ST_UnsignedIntHex>;
        p4: Nullable$1<number>;
        p5: number;
    }): WorkbookColorInfo;
    static a(a: XmlPartManagerBase, b: (partManager: XmlPartManagerBase, autoValue: Nullable$1<boolean>, indexedValue: Nullable$1<number>, rgbValue: Nullable$1<ST_UnsignedIntHex>, themeValue: Nullable$1<number>, tintValue: number) => {
        p1: Nullable$1<boolean>;
        p2: Nullable$1<number>;
        p3: Nullable$1<ST_UnsignedIntHex>;
        p4: Nullable$1<number>;
        p5: number;
    }): ColorInfo;
    private static m;
    private static n;
    private static o;
    private static p;
    private static q;
    private static r;
    private static s;
    private static t;
    private static u;
    private static v;
    private static w;
    private static x;
    private static y;
    private static z;
    private static aa;
    private static ac;
    private static ad;
    private static ae;
    private static af;
    private static ag;
    private static ah;
    static d(a: XmlPartManagerBase, b: number): any;
    private static ai;
    private static ab;
    static aj(a: XmlPartManagerBase): void;
    static ak(a: XmlPartManagerBase, b: string, c: (partManager: XmlPartManagerBase, valValue: string) => {
        p1: string;
    }): void;
    static al(a: XmlPartManagerBase): void;
    static am(a: XmlPartManagerBase): void;
    static ao(a: XmlPartManagerBase, b: WorkbookColorInfo, c: ColorableItem, d: (arg1: XmlPartManagerBase, arg2: Nullable$1<boolean>, arg3: Nullable$1<number>, arg4: Nullable$1<ST_UnsignedIntHex>, arg5: Nullable$1<number>, arg6: number) => void): void;
    static an(a: XmlPartManagerBase, b: ColorInfo, c: (arg1: XmlPartManagerBase, arg2: Nullable$1<boolean>, arg3: Nullable$1<number>, arg4: Nullable$1<ST_UnsignedIntHex>, arg5: Nullable$1<number>, arg6: number) => void): void;
    private static ap;
    static aq(a: XmlPartManagerBase, b: WorkbookReferenceBase): void;
    static as(a: XmlPartManagerBase, b: IWorkbookFont): void;
    static ar(a: XmlPartManagerBase, b: IWorkbookFont): void;
    private static at;
    static au(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: StringElement, d: (arg1: XmlPartManagerBase) => void): void;
    private static av;
    static aw(a: XmlPartManagerBase, b: IWorkbookFont): void;
}
/**
 * @hidden
 */
export declare class BorderStyleInfo extends Base {
    static $t: Type;
    private c;
    private b;
    equals(a: any): boolean;
    getHashCode(): number;
    readonly f: boolean;
    d: ColorInfo;
    a: CellBorderLineStyle;
}
/**
 * @hidden
 */
export declare class GradientFillInfo extends Base {
    static $t: Type;
    private g;
    private i;
    private v;
    private t;
    private r;
    private p;
    private d;
    equals(a: any): boolean;
    getHashCode(): number;
    readonly h: List$1<StopInfo>;
    j: number;
    w: number;
    s: number;
    u: number;
    q: number;
    e: ST_GradientType;
    static b(a: WorkbookSaveManager, b: CellFillGradient): GradientFillInfo;
    a(a: WorkbookLoadManager): CellFill;
}
/**
 * @hidden
 */
export declare class StopInfo extends Base {
    static $t: Type;
    private f;
    private b;
    g: number;
    c: ColorInfo;
    equals(a: any): boolean;
    getHashCode(): number;
    static d(a: WorkbookSaveManager, b: CellFillGradientStop): StopInfo;
    a(a: WorkbookLoadManager): CellFillGradientStop;
}
/**
 * @hidden
 */
export declare class SerializationNumberFormatInfo extends Base {
    static $t: Type;
    b: string;
    c: number;
    d(a: WorksheetCellFormatData): void;
    static a(a: WorksheetCellFormatData): SerializationNumberFormatInfo;
}
/**
 * @hidden
 */
export declare class ProtectionInfo extends Base {
    static $t: Type;
    private g;
    private i;
    equals(a: any): boolean;
    getHashCode(): number;
    h: Nullable$1<boolean>;
    j: Nullable$1<boolean>;
    readonly e: boolean;
    k(a: WorksheetCellFormatData): void;
    static a(a: WorksheetCellFormatData): ProtectionInfo;
    static b(a: WorksheetCellFormatData, b: boolean): ProtectionInfo;
    static d(a: ProtectionInfo, b: ProtectionInfo): boolean;
}
/**
 * @hidden
 */
export declare class ObjectModelStylesPartManager_TableStylesCollectionInfo extends Base {
    static $t: Type;
    readonly a: string;
    constructor(a: string);
}
/**
 * @hidden
 */
export declare class ObjectModelTablePartManager_FilterColumnElementContext extends Base {
    static $t: Type;
    private readonly c;
    private a;
    constructor(a: number);
    readonly d: number;
    b: Filter;
}
/**
 * @hidden
 */
export declare class ObjectModelTablePartManager_CustomFilterContext extends Base {
    static $t: Type;
    private readonly a;
    private c;
    private d;
    constructor(a: ConditionalOperator);
    e(a: CustomFilterCondition): void;
    b(): CustomFilter;
}
/**
 * @hidden
 */
export declare class ObjectModelTablePartManager_TableContext extends Base {
    static $t: Type;
    private b;
    private c;
    private readonly a;
    constructor(a: WorksheetTable);
    d(a: number, b: Filter): void;
    e(a: number, b: SortCondition): void;
    f(): void;
}
/**
 * @hidden
 */
export declare class ObjectModelTablePartManager extends TablePartManager {
    static $t: Type;
    static readonly a9: ObjectModelTablePartManager;
    constructor();
    protected u(a: any): WorkItem;
    private static ba;
    private static bb;
    private static bc;
    private static bd;
    static be(a: XmlPartManagerBase): void;
    static bf(a: XmlPartManagerBase): void;
    static bg(a: XmlPartManagerBase): void;
    static bh(a: XmlPartManagerBase): void;
    static bi(a: XmlPartManagerBase): void;
    static bj(a: XmlPartManagerBase): void;
    static bm(a: XmlPartManagerBase): void;
    static bk(a: XmlPartManagerBase): void;
    static bl(a: XmlPartManagerBase): void;
    static bn(a: XmlPartManagerBase): void;
    static bo(a: XmlPartManagerBase): void;
    private static bp;
    private static bq;
    private static bt;
    private static bu;
    private static br;
    private static bs;
    private static bv;
    static bw(a: XmlPartManagerBase): void;
    private static bx;
    private static a6;
    private static by;
    private static bz;
    private b0;
    static b5(a: XmlPartManagerBase, b: ObjectModelExcelDocumentManager, c: WorkbookSaveManagerExcel2007, d: Filter): void;
    private static b1;
    private static b2;
    private static b3;
    private static b4;
    private static b6;
    private static b7;
    private b8;
    private b9;
    private ca;
    private static cb;
    readonly a7: ObjectModelExcelDocumentManager;
    private static a8;
}
/**
 * @hidden
 */
export declare class ConditionalFormatInfo extends Base {
    static $t: Type;
    private g;
    private i;
    constructor(a: Worksheet, b: WorkbookLoadManagerExcel2007);
    readonly h: IDictionary$2<string, CfRuleInfo>;
    c: WorkbookLoadManagerExcel2007;
    d: Worksheet;
    readonly a: CellReferenceMode;
    o(): void;
    m(): void;
    j: List$1<WorksheetRegion>;
    b: CfRuleInfo;
    k: List$1<CfRuleInfo>;
    readonly l: List$1<CfRuleInfo>;
    f: boolean;
    static e(a: ConditionalFormatInfo): boolean;
    static n(a: ConditionalFormatInfo, b: List$1<string>): void;
}
/**
 * @hidden
 */
export declare class CfRuleInfo extends Base {
    static $t: Type;
    private d;
    private w;
    private x;
    private v;
    private i;
    private f;
    q: boolean;
    h: DxfInfo;
    s: boolean;
    aa: List$1<WorksheetRegion>;
    ap(a: ConditionalFormatInfo): void;
    r: boolean;
    c: CfRuleInfo;
    aq(a: CfRuleInfo): void;
    readonly e: CfRuleInfo_ResolvedValues;
    readonly ad: number;
    readonly u: boolean;
    al: Nullable$1<ST_CfType>;
    ae: Nullable$1<number>;
    ag: Nullable$1<number>;
    aj: Nullable$1<boolean>;
    k: boolean;
    t: boolean;
    n: boolean;
    af: Nullable$1<ST_ConditionalFormattingOperator>;
    ao: string;
    ak: Nullable$1<ST_TimePeriod>;
    ah: Nullable$1<number>;
    ai: Nullable$1<number>;
    p: boolean;
    an: string;
    readonly j: IconSetWrapper;
    readonly g: DatabarWrapper;
    readonly z: List$1<string>;
    readonly ab: List$1<CfvoWrapper>;
    readonly y: List$1<ColorInfo>;
    am: string;
    static b(a: ConditionalFormatInfo, b: XmlPartManagerBase): CfRuleInfo;
    static a(a: XmlPartManagerBase, b: ConditionalFormatInfo, c?: boolean, d?: string): CfRuleInfo;
    static l(a: CfRuleInfo): boolean;
    static m(a: CfRuleInfo): boolean;
}
/**
 * @hidden
 */
export declare class EnumConverter extends Base {
    static $t: Type;
    static e(a: ST_CfType): FormatConditionType;
    static g(a: FormatConditionType, b: Nullable$1<FormatConditionTextOperator>): ST_CfType;
    static d(a: Nullable$1<ST_TimePeriod>): FormatConditionTimePeriod;
    static n(a: FormatConditionTimePeriod): ST_TimePeriod;
    static q(a: ST_ConditionalFormattingOperator, b: Nullable$1<FormatConditionOperator>, c: Nullable$1<FormatConditionTextOperator>): {
        p1: Nullable$1<FormatConditionOperator>;
        p2: Nullable$1<FormatConditionTextOperator>;
    };
    static j(a: FormatConditionOperator): ST_ConditionalFormattingOperator;
    static k(a: FormatConditionTextOperator): ST_ConditionalFormattingOperator;
    static f(a: ST_CfvoType): FormatConditionValueType;
    static h(a: FormatConditionValueType): ST_CfvoType;
    static b(a: ST_DataBarDirection): DataBarDirection;
    static m(a: DataBarDirection): ST_DataBarDirection;
    static a(a: ST_DataBarAxisPosition): DataBarAxisPosition;
    static l(a: DataBarAxisPosition): ST_DataBarAxisPosition;
    static c(a: boolean): DataBarFillType;
    static o(a: DataBarFillType): boolean;
    static p(a: FormatConditionIcon, b: FormatConditionIconSet, c: ST_IconSetType, d: number): {
        p2: ST_IconSetType;
        p3: number;
    };
    static i(a: FormatConditionTextOperator): ST_ConditionalFormattingOperator;
}
/**
 * @hidden
 */
export declare class CfRuleInfo_ResolvedValues extends Base {
    static $t: Type;
    a: FormatConditionType;
    b: Nullable$1<FormatConditionOperator>;
    c: Nullable$1<FormatConditionTextOperator>;
}
/**
 * @hidden
 */
export declare class CfvoWrapper extends Base {
    static $t: Type;
    a: ST_CfvoType;
    c: string;
    b: boolean;
}
/**
 * @hidden
 */
export declare class IconSetWrapper extends Base {
    static $t: Type;
    private g;
    m: Nullable$1<ST_IconSetType>;
    j: Nullable$1<boolean>;
    k: Nullable$1<boolean>;
    l: Nullable$1<boolean>;
    i: Nullable$1<boolean>;
    readonly h: List$1<IconCriterionWrapper>;
    static a(a: CfRuleInfo): IconSetWrapper;
    n(a: CfRuleInfo, b: IconSetConditionalFormat): void;
}
/**
 * @hidden
 */
export declare class DatabarWrapper extends Base {
    static $t: Type;
    w: Nullable$1<number>;
    v: Nullable$1<number>;
    z: Nullable$1<boolean>;
    t: Nullable$1<boolean>;
    u: Nullable$1<boolean>;
    s: Nullable$1<ST_DataBarDirection>;
    y: Nullable$1<boolean>;
    x: Nullable$1<boolean>;
    r: Nullable$1<ST_DataBarAxisPosition>;
    a: ColorInfo;
    b: ColorInfo;
    c: ColorInfo;
    e: ColorInfo;
    d: ColorInfo;
    static f(a: CfRuleInfo): DatabarWrapper;
}
/**
 * @hidden
 */
export declare class IconCriterionWrapper extends Base {
    static $t: Type;
    a: ST_IconSetType;
    b: number;
}
/**
 * @hidden
 */
export declare class ObjectModelWorksheetPartManager_DVInfo extends Base {
    static $t: Type;
    a: DataValidationRule;
    c: string;
    b: boolean;
    d: string;
    e: string;
}
/**
 * @hidden
 */
export declare class WorkbookLoadManagerExcel2007_ShapeAnchorApplicator extends Base implements IEG_AnchorVisitor$2<Tuple$2<Sheet, WorksheetShape>, boolean> {
    static $t: Type;
    static readonly a: WorkbookLoadManagerExcel2007_ShapeAnchorApplicator;
    _visitCT_AbsoluteAnchor$i(a: CT_AbsoluteAnchor, b: Tuple$2<Sheet, WorksheetShape>): boolean;
    _visitCT_OneCellAnchor$i(a: CT_OneCellAnchor, b: Tuple$2<Sheet, WorksheetShape>): boolean;
    _visitCT_TwoCellAnchor$i(a: CT_TwoCellAnchor, b: Tuple$2<Sheet, WorksheetShape>): boolean;
}
/**
 * @hidden
 */
export declare class LegacyShapeData extends Base implements ILegacyShapeData {
    static $t: Type;
    n: Nullable$1<boolean>;
    o: Nullable$1<boolean>;
    p: Nullable$1<boolean>;
    q: Nullable$1<ST_CF>;
    r: Nullable$1<number>;
    s: Nullable$1<boolean>;
    t: Nullable$1<number>;
    u: Nullable$1<boolean>;
    v: Nullable$1<number>;
    an: string;
    w: Nullable$1<number>;
    x: Nullable$1<boolean>;
    ao: string;
    private _fmlaMacro;
    fmlaMacro: Formula;
    ap: string;
    k: boolean;
    aq: string;
    y: Nullable$1<number>;
    z: Nullable$1<ST_InsetMode>;
    c: LegacyShapeLockData;
    ar: string;
    ab: Nullable$1<number>;
    ac: Nullable$1<number>;
    aa: Nullable$1<boolean>;
    ad: Nullable$1<boolean>;
    ae: Nullable$1<boolean>;
    j: ST_ObjectType;
    af: Nullable$1<number>;
    d: LegacyShapePathData;
    ag: Nullable$1<boolean>;
    ah: Nullable$1<number>;
    ai: Nullable$1<boolean>;
    m: number;
    as: string;
    at: string;
    aj: Nullable$1<boolean>;
    au: string;
    aw: string;
    ak: Nullable$1<boolean>;
    av: string;
    i: UnknownStructure;
    ax: string;
    ay: string;
    az: string;
    al: Nullable$1<number>;
    am: Nullable$1<boolean>;
    private a;
    private e;
    private g;
    constructor();
    a0(a: WorksheetShape): void;
    readonly b: number[];
    f: ImageHolder;
    readonly h: WorksheetShape;
    readonly l: boolean;
}
/**
 * @hidden
 */
export declare class WorksheetCellCommentData extends Base {
    static $t: Type;
    private g;
    private c;
    private a;
    private e;
    constructor(a: WorksheetCellComment, b: number, c: number, d: number);
    readonly h: number;
    readonly d: number;
    readonly b: WorksheetCellComment;
    readonly f: number;
}
/**
 * @hidden
 */
export declare class ObjectModelCommentsPartManager extends CommentsPartManager {
    static $t: Type;
    static readonly a8: ObjectModelCommentsPartManager;
    constructor();
    protected t(): WorkItem$1<any>;
    protected u(a: any): WorkItem;
    private static a9;
    private static ba;
    private static bb;
    private static bc;
    private static bd;
    private static be;
    readonly a6: ObjectModelExcelDocumentManager;
    private static a7;
}
/**
 * @hidden
 */
export declare class LegacyDrawingHFInfo extends Base {
    static $t: Type;
    readonly a: number[];
    readonly b: List$1<LegacyShapeData>;
    constructor(a: number[], b: List$1<LegacyShapeData>);
}
/**
 * @hidden
 */
export declare class ObjectModelCommonPartHelpers_DoubleValueCache extends Base {
    static $t: Type;
    private static b;
    private readonly c;
    private readonly a;
    private d;
    static f(a: string): any;
}
/**
 * @hidden
 */
export declare class ConditionSortContext extends Base {
    static $t: Type;
    b: number;
    a: ConditionBase;
}
/**
 * @hidden
 */
export declare class ConditionFactory_XLSX extends Base {
    static $t: Type;
    static d(a: ConditionalFormatInfo, b: CfRuleInfo): ConditionBase;
    private static m;
    private static i;
    private static n;
    private static a;
    private static p;
    private static g;
    private static b;
    private static k;
    private static h;
    private static l;
    private static o;
    private static f;
    private static c;
    private static j;
    private static e;
    private static t;
    private static u;
    static q(a: string, b: ConditionalFormatInfo, c: ConditionBase): SingleTargetFormula;
    static r(a: string): string;
    private static s;
}
/**
 * @hidden
 */
export declare class ConditionValueExtensions extends Base {
    static $t: Type;
    static a(a: ConditionValue, b: CfvoWrapper, c: Worksheet): void;
    static b(a: ConditionValue, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: Worksheet, f: boolean, g?: Nullable$1<boolean>): void;
}
/**
 * @hidden
 */
export declare class ColorInfoExtensions extends Base {
    static $t: Type;
    static a(a: ColorInfo, b: ConditionalFormatInfo): WorkbookColorInfo;
    static d(a: WorkbookColorInfo, b: XmlPartManagerBase, c: XmlWriteManager, d: Worksheet, e: string): void;
    private static c;
    private static b;
}
/**
 * @hidden
 */
export declare class IconCriterionExtensions extends Base {
    static $t: Type;
    static a(a: IconCriterion, b: IconCriterionWrapper, c: CfvoWrapper): void;
}
/**
 * @hidden
 */
export declare class IconSetCriterionCollectionExtensions extends Base {
    static $t: Type;
    static a(a: IconSetCriterionCollection, b: IList$1<CfvoWrapper>, c: Worksheet): void;
}
/**
 * @hidden
 */
export declare class ConditionSortContextComparer extends Base implements IComparer$1<ConditionSortContext> {
    static $t: Type;
    compare(a: ConditionSortContext, b: ConditionSortContext): number;
    static _a(a: IList$1<ConditionSortContext>): IList$1<ConditionBase>;
}
/**
 * @hidden
 */
export declare class SparklinesDeserializer extends Base {
    static $t: Type;
    private d;
    private h;
    private c;
    constructor(a: Worksheet);
    private readonly e;
    readonly i: List$1<CT_SparklineGroup>;
    private static a;
    private static b;
    static z(a: ObjectModelWorksheetPartManager): void;
    static v(a: XmlPartManagerBase): void;
    static w(a: XmlPartManagerBase): void;
    static u(a: XmlPartManagerBase): void;
    static m(a: XmlPartManagerBase, b: string): void;
    static k(a: XmlPartManagerBase): void;
    static l(a: XmlPartManagerBase): void;
    static n(a: XmlPartManagerBase): void;
    static o(a: XmlPartManagerBase): void;
    static p(a: XmlPartManagerBase): void;
    static q(a: XmlPartManagerBase): void;
    static r(a: XmlPartManagerBase): void;
    static s(a: XmlPartManagerBase): void;
    static x(a: XmlPartManagerBase): void;
    static y(a: XmlPartManagerBase): void;
    static t(a: XmlPartManagerBase): void;
    static f(a: XmlPartManagerBase): boolean;
    static g(a: XmlPartManagerBase): boolean;
    private j;
}
/**
 * @hidden
 */
export declare class CT_Sparkline extends Base {
    static $t: Type;
    private d;
    private b;
    constructor();
    c: string;
    a: CT_Sqref;
    static e(a: XmlPartManagerBase): void;
    static f(a: XmlPartManagerBase, b: string): void;
}
/**
 * @hidden
 */
export declare class CT_Sqref extends Base {
    static $t: Type;
    private f;
    private h;
    private c;
    private d;
    private j;
    constructor();
    e: boolean;
    g: boolean;
    b: boolean;
    a: boolean;
    i: List$1<string>;
}
/**
 * @hidden
 */
export declare class CT_SparklineGroup extends Base {
    static $t: Type;
    private p;
    private n;
    private b;
    private l;
    private d;
    private h;
    private f;
    private j;
    private bg;
    private af;
    private a0;
    private a2;
    private aw;
    private be;
    private ai;
    private ak;
    private a4;
    private as;
    private ay;
    private aq;
    private au;
    private ba;
    private ao;
    private am;
    private a8;
    private a6;
    private bc;
    constructor();
    o: ColorInfo;
    m: ColorInfo;
    a: ColorInfo;
    k: ColorInfo;
    c: ColorInfo;
    g: ColorInfo;
    e: ColorInfo;
    i: ColorInfo;
    bf: string;
    ae: List$1<CT_Sparkline>;
    az: Nullable$1<number>;
    a1: Nullable$1<number>;
    av: Nullable$1<number>;
    bd: Nullable$1<ST_SparklineType>;
    ah: Nullable$1<boolean>;
    aj: Nullable$1<ST_DispBlanksAs>;
    a3: Nullable$1<boolean>;
    ar: Nullable$1<boolean>;
    ax: Nullable$1<boolean>;
    ap: Nullable$1<boolean>;
    at: Nullable$1<boolean>;
    a9: Nullable$1<boolean>;
    an: Nullable$1<boolean>;
    al: Nullable$1<boolean>;
    a7: Nullable$1<ST_SparklineAxisMinMax>;
    a5: Nullable$1<ST_SparklineAxisMinMax>;
    bb: Nullable$1<boolean>;
    static bh(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<number>, d: Nullable$1<number>, e: Nullable$1<ST_SparklineType>, f: Nullable$1<boolean>, g: Nullable$1<ST_DispBlanksAs>, h: Nullable$1<boolean>, i: Nullable$1<boolean>, j: Nullable$1<boolean>, k: Nullable$1<boolean>, l: Nullable$1<boolean>, m: Nullable$1<boolean>, n: Nullable$1<boolean>, o: Nullable$1<boolean>, p: Nullable$1<ST_SparklineAxisMinMax>, q: Nullable$1<ST_SparklineAxisMinMax>, r: Nullable$1<boolean>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<number>;
        p3: Nullable$1<number>;
        p4: Nullable$1<ST_SparklineType>;
        p5: Nullable$1<boolean>;
        p6: Nullable$1<ST_DispBlanksAs>;
        p7: Nullable$1<boolean>;
        p8: Nullable$1<boolean>;
        p9: Nullable$1<boolean>;
        p10: Nullable$1<boolean>;
        p11: Nullable$1<boolean>;
        p12: Nullable$1<boolean>;
        p13: Nullable$1<boolean>;
        p14: Nullable$1<boolean>;
        p15: Nullable$1<ST_SparklineAxisMinMax>;
        p16: Nullable$1<ST_SparklineAxisMinMax>;
        p17: Nullable$1<boolean>;
    };
    static bi(a: XmlPartManagerBase, b: string, c?: Nullable$1<boolean>, d?: Nullable$1<ST_DispBlanksAs>, e?: Nullable$1<boolean>, f?: Nullable$1<boolean>, g?: Nullable$1<boolean>, h?: Nullable$1<boolean>, i?: Nullable$1<boolean>, j?: Nullable$1<number>, k?: Nullable$1<boolean>, l?: Nullable$1<number>, m?: Nullable$1<number>, n?: Nullable$1<boolean>, o?: Nullable$1<ST_SparklineAxisMinMax>, p?: Nullable$1<ST_SparklineAxisMinMax>, q?: Nullable$1<boolean>, r?: Nullable$1<boolean>, s?: Nullable$1<ST_SparklineType>): void;
}
/**
 * @hidden
 */
export declare class SparklineExtensions extends Base {
    static $t: Type;
    static h(a: SparklineGroup, b: CT_SparklineGroup, c: Worksheet, d: WorkbookLoadManagerExcel2007): void;
    static g(a: Sparkline, b: CT_Sparkline, c: Worksheet, d: List$1<WorkbookReferenceBase>): void;
    static e(a: ST_DispBlanksAs): SparklineDisplayBlanksAs;
    static c(a: SparklineDisplayBlanksAs): ST_DispBlanksAs;
    static f(a: ST_SparklineType): SparklineType;
    static b(a: SparklineType): ST_SparklineType;
    static d(a: ST_SparklineAxisMinMax): SparklineAxisMinMax;
    static a(a: SparklineAxisMinMax): ST_SparklineAxisMinMax;
}
/**
 * @hidden
 */
export declare class ObjectModelWorksheetPartManager extends WorksheetPartManager {
    static $t: Type;
    static readonly bi: ObjectModelWorksheetPartManager;
    private bs;
    private bu;
    private bj;
    private bt;
    private br;
    private bq;
    private bk;
    private bv;
    private bn;
    private bm;
    be: ConditionalFormatInfo;
    constructor();
    z(a: string): UnknownElementAction;
    protected t(): WorkItem$1<any>;
    av(a: UnknownStructure): void;
    protected u(a: any): WorkItem;
    ai(a: string): boolean;
    y(a: UnknownElementCache, b: Stack$1<UnknownElementCache>): OverwriteRoundTripDataResult;
    private b4;
    private static b0;
    private static b1;
    private b3;
    private static bx;
    private bo;
    private static b6;
    private static b7;
    private static cd;
    private static ce;
    private static co;
    private static cq;
    private cp;
    private static cv;
    private static c0;
    private static cx;
    private static cw;
    private static cy;
    private static cz;
    private static ch;
    private static cj;
    private static cg;
    private static ci;
    private static cl;
    private static cn;
    private static ck;
    private static cm;
    private static ct;
    static cr(a: XmlPartManagerBase): void;
    private static bd;
    private static dp;
    static d6(a: XmlPartManagerBase): void;
    static d5(a: XmlPartManagerBase): void;
    private static d7;
    private static cf;
    private static cu;
    static c8(a: XmlPartManagerBase): void;
    static c9(a: XmlPartManagerBase): void;
    static dr(a: XmlPartManagerBase): void;
    static ca(a: XmlPartManagerBase): void;
    static b8(a: XmlPartManagerBase): void;
    static ej(a: XmlPartManagerBase): void;
    static ei(a: XmlPartManagerBase): void;
    static cs(a: XmlPartManagerBase): void;
    static d8(a: XmlPartManagerBase): void;
    private static di;
    private static dj;
    private static b5;
    private static cb;
    private static cc;
    private static ds;
    private static eu;
    private static d0;
    private static b9;
    private static dq;
    private static ek;
    private static e1;
    private static du;
    private static dz;
    private static c1;
    private static c2;
    private static c3;
    private static c4;
    private static c6;
    private c5;
    private static c7;
    private static db;
    private da;
    private static dd;
    private dc;
    private static de;
    private static df;
    private static dh;
    private dg;
    private static dk;
    private static dl;
    private static dm;
    private static dn;
    private static dt;
    private static dw;
    private static dv;
    private static dy;
    private static dx;
    static d1(a: XmlPartManagerBase): void;
    private static d3;
    private d2;
    private static d4;
    private static d9;
    private static ea;
    private static ec;
    private eb;
    private static ee;
    private ed;
    private static eg;
    private ef;
    private static eh;
    static el(a: XmlPartManagerBase): void;
    static em(a: XmlPartManagerBase): void;
    private static eo;
    private en;
    static ep(a: XmlPartManagerBase): void;
    static eq(a: XmlPartManagerBase): void;
    private static es;
    private er;
    private static et;
    private static ew;
    private ev;
    private static ex;
    private static ez;
    private ey;
    private static e0;
    private static e4;
    private e3;
    private static e2;
    private static e5;
    private static e6;
    private static e7;
    private static e9;
    private e8;
    private static fb;
    private fa;
    private static fd;
    private fc;
    private static ff;
    private fe;
    private static fh;
    private fg;
    private static fi;
    private static fk;
    private fj;
    private static fl;
    private static fm;
    private static fn;
    private static fo;
    private static fq;
    private fp;
    private static fs;
    private fr;
    private static ft;
    private static fu;
    private static fw;
    private fv;
    private static fy;
    private fx;
    private static by;
    fz(a: Worksheet, b: WorksheetSerializationCache): void;
    static f0(a: WorksheetShapeCollection, b: List$1<UnknownShape>, c: List$1<WorksheetShape>): void;
    private f1;
    private f2;
    private f3;
    private f4;
    private f5;
    private f6;
    private f7;
    private a6;
    private a7;
    private f8;
    private f9;
    private ga;
    private gb;
    private gc;
    private gd;
    static ge(u: XmlPartManagerBase, v: string): void;
    private gf;
    private a8;
    private a9;
    private gg;
    static gh(u: XmlPartManagerBase, v: PrintOptionsBase): void;
    private gi;
    private gj;
    static gk(u: XmlPartManagerBase, v: string): void;
    static gl(u: XmlPartManagerBase, v: string): void;
    private gm;
    private gn;
    private go;
    static gp(u: XmlPartManagerBase, v: PrintOptionsBase): void;
    static gq(u: XmlPartManagerBase, v: PrintOptionsBase): void;
    private gr;
    private gs;
    static gt(u: XmlPartManagerBase, v: WorkbookSaveManagerExcel2007, w: SheetSerializationCache): void;
    private gu;
    private gv;
    private gw;
    private bw;
    private gx;
    private gy;
    private gz;
    private ba;
    private g0;
    private g1;
    private g2;
    private g3;
    private g4;
    private g5;
    private bb;
    private g6;
    private g7;
    private g8;
    private static bp;
    private bc;
    private static bf;
    readonly bg: ObjectModelExcelDocumentManager;
    private static bh;
    readonly bl: Worksheet;
}
/**
 * @hidden
 */
export declare class ObjectModelStylesPartManager extends ExcelStylesPartManager {
    static $t: Type;
    static readonly a8: ObjectModelStylesPartManager;
    constructor();
    protected u(a: any): WorkItem;
    static a9(a: XmlPartManagerBase): void;
    static ba(a: XmlPartManagerBase): void;
    static bb(a: XmlPartManagerBase): void;
    private static bc;
    static bd(a: XmlPartManagerBase, b: (partManager: XmlPartManagerBase, style: ST_BorderStyle) => {
        p1: ST_BorderStyle;
    }, c: (arg1: BorderInfo) => BorderStyleInfo, d?: Nullable$1<ST_ConformanceClass>): void;
    private static be;
    private static bf;
    private static bg;
    private static bh;
    private static bi;
    private static bj;
    private static bk;
    private static bl;
    static bm(a: XmlPartManagerBase): void;
    static bn(a: XmlPartManagerBase): void;
    private static bo;
    static bp(a: XmlPartManagerBase): void;
    private static bq;
    static br(a: XmlPartManagerBase): void;
    private static bs;
    private static bt;
    static bu(a: XmlPartManagerBase): void;
    private static bv;
    static bw(a: XmlPartManagerBase): void;
    static bx(a: XmlPartManagerBase): void;
    private static by;
    private static bz;
    private static b0;
    private static b1;
    private static b2;
    private static b3;
    private static b4;
    private static b5;
    private static b6;
    private static b7;
    private static b8;
    private b9;
    static ca(a: XmlPartManagerBase, b: AlignmentInfo): void;
    private cb;
    static cc(a: XmlPartManagerBase, b: ColorInfo): void;
    private cd;
    static ce(a: XmlPartManagerBase, b: BorderInfo): void;
    private cf;
    private cg;
    static ch(a: XmlPartManagerBase, b: BorderStyleInfo, c: (arg1: XmlPartManagerBase, arg2: ST_BorderStyle) => void): void;
    private ci;
    static cj(a: XmlPartManagerBase, b: BorderStyleInfo): void;
    private ck;
    private cl;
    private cm;
    private cn;
    private co;
    private cp;
    static cq(a: XmlPartManagerBase, b: BorderStyleInfo): void;
    private cr;
    static cs(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: WorksheetCellFormatData, d: string): void;
    private ct;
    private cu;
    static cv(a: XmlPartManagerBase, b: BorderStyleInfo): void;
    private cw;
    static cx(a: XmlPartManagerBase, b: ColorInfo): void;
    private cy;
    static cz(a: XmlPartManagerBase, b: FillInfo): void;
    private c0;
    private c1;
    private c2;
    static c3(a: XmlPartManagerBase, b: GradientFillInfo): void;
    private c4;
    private c5;
    private c6;
    static c7(a: XmlPartManagerBase, b: SerializationNumberFormatInfo, c: boolean): void;
    private c8;
    private c9;
    static da(a: XmlPartManagerBase, b: PatternFillInfo): void;
    private db;
    static dc(a: XmlPartManagerBase, b: ProtectionInfo): void;
    private dd;
    private de;
    static df(a: XmlPartManagerBase, b: BorderStyleInfo): void;
    private dg;
    static dh(a: XmlPartManagerBase, b: StopInfo): void;
    private di;
    private dj;
    private dk;
    private dl;
    private dm;
    static dn(a: XmlPartManagerBase, b: BorderStyleInfo): void;
    private dp;
    private dq;
    readonly a6: ObjectModelExcelDocumentManager;
    private static a7;
}
/**
 * @hidden
 */
export declare class ExcelThemeDocumentManager extends ExcelWorkbookDocumentManager {
    static $t: Type;
    constructor(a: Workbook, b: WorkbookLoadManagerExcel2007_FontCollection, c: WorkbookLoadManagerExcel2007_FontCollection, d: IPackageFactory, e: Stream, f: boolean, g: Nullable$1<ST_ConformanceClass>);
    _bh(): void;
    protected _s(): WorkItem;
}
/**
 * @hidden
 */
export declare class WorkbookLoadManagerExcel2007 extends WorkbookLoadManager {
    static $t: Type;
    private _an;
    private readonly _a8;
    private readonly _ax;
    private readonly _ay;
    private readonly _aj;
    private readonly _ak;
    private readonly _a9;
    private readonly _ba;
    private readonly _az;
    private readonly _a0;
    readonly _a1: Dictionary$2<WorksheetShape, CT_Transform2D>;
    private readonly _a3;
    private readonly _a2;
    readonly _au: boolean;
    static staticInit(): void;
    constructor(a: Workbook, b: Stream, c: WorkbookLoadOptions, d: Nullable$1<ST_ConformanceClass>);
    protected disposeCore(a: boolean): void;
    _r(): WorksheetCellFormatData;
    protected _p(): WorkItem;
    _z(): void;
    _bo(a: Sheet, b: string): void;
    _bp(a: Sheet, b: WorksheetShape): void;
    _at(a: WorksheetShape): EG_Anchor;
    _aq(a: WorksheetShape): CT_Transform2D;
    _ao(a: string): Sheet;
    _ap(a: string): Worksheet;
    static _bs(a: string): {
        p0?: string;
    };
    _bu(a: WorksheetShape, b: EG_Anchor): void;
    _bv(a: WorksheetShape, b: CT_Transform2D): void;
    static _aw(a: UnknownElementCache, b: ObjectModelExcelDocumentManager, c: WorksheetCellFormatData): {
        ret: boolean;
        p2: WorksheetCellFormatData;
    };
    static _bl(a: IPackage): Nullable$1<WorkbookFormat>;
    static _bq(a: List$1<WorkbookBuiltInStyle>): void;
    static _af(a: List$1<WorksheetTableStyle>): WorkItem;
    static _ah(a: Workbook, b: Stream, c: WorkbookLoadOptions): WorkItem;
    private static _ag;
    private static _bm;
    private static _bj;
    private static _ar;
    private static _bn;
    private static _bk;
    private static _as;
    private _br;
    private _bt;
    readonly _bb: List$1<BorderInfo>;
    readonly _bc: List$1<StyleInfo>;
    readonly _bd: List$1<FormatInfo>;
    readonly _be: List$1<FormatInfo>;
    readonly _ai: ObjectModelExcelDocumentManager;
    readonly _bf: List$1<FillInfo>;
    readonly _bg: List$1<ColorInfo>;
    _av: boolean;
    readonly _a4: Dictionary$2<string, number[]>;
    readonly _a5: Dictionary$2<number, UnknownShape>;
    readonly _al: WorkbookLoadManagerExcel2007_FontCollection;
    readonly _am: WorkbookLoadManagerExcel2007_FontCollection;
    readonly _bh: List$1<WorkbookLoadManagerExcel2007_NamedReferenceInfo>;
    readonly _bi: List$1<WorkbookReferenceBase>;
    readonly _a6: Dictionary$2<string, List$1<WorksheetShape>>;
    readonly _a7: Dictionary$2<number, WorkbookStyle>;
}
/**
 * @hidden
 */
export declare class WorkbookLoadManagerExcel2007_UpdateIndexedWorkbookReferencesVisitor extends FormulaTokenVisitor {
    static $t: Type;
    private static a0;
    private az;
    constructor();
    g(): void;
    x(a: CellReferenceToken): void;
    static a1(a: FormulaContext, b: WorkbookLoadManager): WorkbookLoadManagerExcel2007_UpdateIndexedWorkbookReferencesVisitor;
    private a2;
}
/**
 * @hidden
 */
export declare class WorkbookLoadManagerExcel2007_PresetTableStylesPartManager extends ObjectModelStylesPartManager {
    static $t: Type;
    private readonly dr;
    constructor(a: List$1<WorksheetTableStyle>);
    z(a: string): UnknownElementAction;
    protected t(): WorkItem$1<any>;
}
/**
 * @hidden
 */
export declare class WorkbookSaveManagerExcel2007 extends WorkbookSaveManager {
    static $t: Type;
    private readonly _cb;
    private _ca;
    private readonly _cd;
    private readonly _ce;
    private _cu;
    private readonly _cj;
    private readonly _cg;
    _cc: Dictionary$2<Worksheet, ConditionalFormattingSerializer>;
    _ch: Dictionary$2<Worksheet, SparklinesSerializer>;
    private _cf;
    static staticInit(): void;
    constructor(a: Workbook, b: Stream, c: WorkbookSaveOptions, d: ST_ConformanceClass);
    protected disposeCore(a: boolean): void;
    _a6(a: WorksheetCellFormatData): number;
    _a7(a: WorkbookStyle): number;
    _bk(): void;
    _br(): void;
    protected get__ag(): boolean;
    protected readonly _ag: boolean;
    protected _b4(a: WorksheetShape): {
        p0?: WorksheetShape;
    };
    protected _p(): WorkItem;
    protected _bl(a: Worksheet): void;
    protected _bm(a: Worksheet): void;
    static _cy(a: any, b: ST_CellType, c: string): {
        p1: ST_CellType;
        p2: string;
    };
    _cs(a: DisplayUnit): string;
    _ct(a: Formula): string;
    _cv(a: Worksheet, b: Formula, c: boolean, d: WorksheetRegion): {
        ret: number;
        p2: boolean;
        p3: WorksheetRegion;
    };
    _b6(a: WorksheetShapeCollection, b: Dictionary$2<ExcelImage, string>): WorkItem;
    private _cq;
    private _cr;
    private _cw;
    private _cx;
    static _b7(a: Workbook, b: Stream, c: WorkbookSaveOptions): WorkItem;
    private static _b8;
    readonly _ck: List$1<BorderInfo>;
    readonly _cl: List$1<StyleInfo>;
    readonly _cm: List$1<FormatInfo>;
    readonly _cn: List$1<FormatInfo>;
    readonly _b9: ObjectModelExcelDocumentManager;
    readonly _ci: Dictionary$2<WorkbookReferenceBase, number>;
    readonly _co: List$1<FillInfo>;
    readonly _cp: List$1<SerializationNumberFormatInfo>;
}
/**
 * @hidden
 */
export declare class CT_CommonTypeBase extends Base {
    static $t: Type;
    constructor(a: ElementNamespaceContext);
    a: ElementNamespaceContext;
}
/**
 * @hidden
 */
export declare class CT_Extension extends Base {
    static $t: Type;
    b: string;
    static c(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static e(a: XmlPartManagerBase, b: string, c: string): void;
    toString(): string;
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: Type): void;
}
/**
 * @hidden
 */
export declare class CT_ExtensionList extends Base implements ISupportSetProperty {
    static $t: Type;
    private c;
    constructor();
    readonly e: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    static d(a: CT_ExtensionList): List$1<CT_Extension>;
    static a(a: List$1<CT_Extension>): CT_ExtensionList;
}
/**
 * @hidden
 */
export declare class CT_X extends Base {
    static $t: Type;
    constructor();
    b: number;
    static d(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static e(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Boolean extends CT_CommonTypeBase implements ISupportSetProperty {
    static $t: Type;
    constructor(a: ElementNamespaceContext);
    m: Nullable$1<boolean>;
    readonly k: boolean;
    l: List$1<CT_X>;
    j: boolean;
    i: boolean;
    f: boolean;
    n: string;
    o: number;
    static d(a: XmlPartManagerBase, b: ElementNamespaceContext): CT_Boolean;
    private static p;
    static r(a: XmlPartManagerBase, b: string, c: string, d: CT_Boolean): void;
    static s(a: XmlPartManagerBase, b: string, c: string, d: ElementNamespaceContext, e: string, f: number, g: boolean, h: boolean, i: boolean, j: boolean): void;
    q(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string, e: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    static g(a: CT_Boolean): boolean;
    static b(a: boolean): CT_Boolean;
}
/**
 * @hidden
 */
export declare class CT_UnsignedInt extends Base {
    static $t: Type;
    g: number;
    static c(a: XmlPartManagerBase, b?: boolean): CT_UnsignedInt;
    private static h;
    static j(a: XmlPartManagerBase, b: string, c: string, d: number): void;
    i(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string, e: string): void;
    toString(): string;
    static e(a: CT_UnsignedInt): number;
    static a(a: number): CT_UnsignedInt;
}
/**
 * @hidden
 */
export declare class CT_Double extends Base {
    static $t: Type;
    f: number;
    static c(a: XmlPartManagerBase): CT_Double;
    private static h;
    static j(a: XmlPartManagerBase, b: string, c: string, d: number): void;
    i(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string, e?: string): void;
    toString(): string;
    static d(a: CT_Double): number;
    static a(a: number): CT_Double;
}
/**
 * @hidden
 */
export declare class CommonAttributes extends Base {
    static $t: Type;
}
/**
 * @hidden
 */
export declare class SerializationUtils extends Base {
    static $t: Type;
    static x(a: XmlPartManagerBase, b?: boolean): void;
    static ac(a: XmlPartManagerBase, b?: boolean): void;
    static ae(a: XmlPartManagerBase, b?: boolean): void;
    static am(a: XmlPartManagerBase, b?: boolean): void;
    static an(a: XmlPartManagerBase, b?: boolean): void;
    static ao(a: XmlPartManagerBase, b?: boolean): void;
    static av(a: XmlPartManagerBase, b?: boolean): void;
    static a7(a: XmlPartManagerBase, b?: boolean): void;
    static ba(a: XmlPartManagerBase, b?: boolean): void;
    static bc(a: XmlPartManagerBase, b?: boolean): void;
    static bd(a: XmlPartManagerBase, b?: boolean): void;
    static be(a: XmlPartManagerBase, b?: boolean): void;
    static bk(a: XmlPartManagerBase, b?: boolean): void;
    static bl(a: XmlPartManagerBase, b?: boolean): void;
    static bm(a: XmlPartManagerBase, b?: boolean): void;
    static bo(a: XmlPartManagerBase, b?: boolean): void;
    static bp(a: XmlPartManagerBase, b?: boolean): void;
    static bs(a: XmlPartManagerBase, b?: boolean): void;
    static bt(a: XmlPartManagerBase, b?: boolean): void;
    static bu(a: XmlPartManagerBase, b?: boolean): void;
    static b2(a: XmlPartManagerBase, b?: boolean): void;
    static b3(a: XmlPartManagerBase, b?: boolean): void;
    static b4(a: XmlPartManagerBase, b?: boolean): void;
    static b8(a: XmlPartManagerBase, b?: boolean): void;
    static b9(a: XmlPartManagerBase, b?: boolean): void;
    static ca(a: XmlPartManagerBase, b?: boolean): void;
    static ce(a: XmlPartManagerBase, b?: boolean): void;
    static cl(a: XmlPartManagerBase, b?: boolean): void;
    static as(a: XmlPartManagerBase): void;
    static au(a: XmlPartManagerBase): void;
    static a5(a: XmlPartManagerBase): void;
    static br(a: XmlPartManagerBase): void;
    static by(a: XmlPartManagerBase): void;
    static ck(a: XmlPartManagerBase): void;
    static bf(a: XmlPartManagerBase): void;
    static a6(a: XmlPartManagerBase): void;
    static ak(a: XmlPartManagerBase): void;
    static a2(a: XmlPartManagerBase): void;
    static a0(a: XmlPartManagerBase): void;
    static a9(a: XmlPartManagerBase): void;
    static cb(a: XmlPartManagerBase): void;
    static cg(a: XmlPartManagerBase): void;
    static a8(a: XmlPartManagerBase): void;
    static y(a: XmlPartManagerBase, b?: Type[]): void;
    static z(a: XmlPartManagerBase, b?: Type[]): void;
    static aa(a: XmlPartManagerBase, b?: Type[]): void;
    static ab(a: XmlPartManagerBase, b?: Type[]): void;
    static ad(a: XmlPartManagerBase, b?: Type[]): void;
    static af(a: XmlPartManagerBase, b?: Type[]): void;
    static al(a: XmlPartManagerBase, b?: Type[]): void;
    static ap(a: XmlPartManagerBase, b?: Type[]): void;
    static ar(a: XmlPartManagerBase, b?: Type[]): void;
    static at(a: XmlPartManagerBase, b?: Type[]): void;
    static az(a: XmlPartManagerBase, b?: Type[]): void;
    static a4(a: XmlPartManagerBase, b?: Type[]): void;
    static bb(a: XmlPartManagerBase, b?: Type[]): void;
    static bi(a: XmlPartManagerBase, b?: Type[]): void;
    static bn(a: XmlPartManagerBase): void;
    static bx(a: XmlPartManagerBase): void;
    static b1(a: XmlPartManagerBase): void;
    static b5(a: XmlPartManagerBase): void;
    static cf(a: XmlPartManagerBase): void;
    static aq(a: XmlPartManagerBase): void;
    static bq(a: XmlPartManagerBase): void;
    static ag(a: XmlPartManagerBase): void;
    static bw(a: XmlPartManagerBase): void;
    static cm(a: XmlPartManagerBase): void;
    static b6(a: XmlPartManagerBase): void;
    static ai(a: XmlPartManagerBase): void;
    static aj(a: XmlPartManagerBase): void;
    static aw(a: XmlPartManagerBase): void;
    static a1(a: XmlPartManagerBase): void;
    static bj(a: XmlPartManagerBase): void;
    static bz(a: XmlPartManagerBase): void;
    static cc(a: XmlPartManagerBase): void;
    static cd(a: XmlPartManagerBase): void;
    static ch(a: XmlPartManagerBase): void;
    static ci(a: XmlPartManagerBase): void;
    static ah(a: XmlPartManagerBase): void;
    static ax(a: XmlPartManagerBase): void;
    static bh(a: XmlPartManagerBase): void;
    static bv(a: XmlPartManagerBase): void;
    static b0(a: XmlPartManagerBase): void;
    static b7(a: XmlPartManagerBase): void;
    static cj(a: XmlPartManagerBase): void;
    static ay(a: XmlPartManagerBase): void;
    static bg(a: XmlPartManagerBase): void;
    static a3<T extends ISaveToXLSX>($t: Type, a: XmlPartManagerBase, b: T, c: ElementPropertyIds): void;
    static m<T>($t: Type, a: T, b: List$1<T>): List$1<T>;
    static h<T>($t: Type, a: List$1<T>): T;
    static i<T>($t: Type, a: XmlPartManagerBase, b?: boolean): T;
    static j(a: XmlPartManagerBase, b: Type[], c?: boolean): ISupportSetProperty;
    static a(a: ObjectModelChartStylePartManager, b: string): ColorInfo;
    static f(a: XmlPartManagerBase): CT_TextBodyProperties_DML;
    static d(a: XmlPartManagerBase): CT_StyleReference;
    static c(a: XmlPartManagerBase): CT_StyleEntry;
    static b(a: XmlPartManagerBase): CT_FontReference_ChartStyle;
    static e(a: XmlPartManagerBase): CT_Shape3D;
    static g(a: XmlPartManagerBase): CT_Vector3D;
    static w(a: Type[]): void;
    static k(a: XmlPartManagerBase): ST_ConformanceClass;
    static t(a: Uri): string;
    static s(a: string): string;
    static v(a: string): string;
    static o(a: number): number;
    static n(a: number): number;
    static p(a: number): number;
    static u(a: string): string;
    static l(a: string): boolean;
    static q(a: CT_Boolean): Nullable$1<boolean>;
    static r(a: Nullable$1<boolean>): Nullable$1<boolean>;
}
/**
 * @hidden
 */
export declare class CT_SlicerCacheDefinition extends Base {
    static $t: Type;
    private d;
    private b;
    private f;
    private h;
    private j;
    constructor();
    c: List$1<CT_SlicerCachePivotTable>;
    a: CT_SlicerCacheData;
    e: any;
    g: string;
    i: string;
    static k(a: XmlPartManagerBase, b: string, c: string): {
        p1: string;
        p2: string;
    };
    static l(a: XmlPartManagerBase, b: string, c: string, d: string): void;
}
/**
 * @hidden
 */
export declare class CT_SlicerCachePivotTable extends Base {
    static $t: Type;
    private d;
    private b;
    c: number;
    a: string;
    static e(a: XmlPartManagerBase, b: number, c: string): {
        p1: number;
        p2: string;
    };
    static f(a: XmlPartManagerBase, b: string, c: string, d: number): void;
}
/**
 * @hidden
 */
export declare class CT_FormControlPr extends Base {
    static $t: Type;
    private d;
    private b;
    private ay;
    private s;
    private u;
    private w;
    private y;
    private aa;
    private ae;
    private bi;
    private bk;
    private bm;
    private bo;
    private ag;
    private ai;
    private ak;
    private am;
    private ao;
    private aq;
    private bq;
    private aw;
    private av;
    private a0;
    private a4;
    private a6;
    private a8;
    private ba;
    private bc;
    private bg;
    private ac;
    private as;
    private be;
    private a2;
    constructor();
    c: CT_ListItems;
    a: CT_ExtensionList;
    ax: Nullable$1<ST_ObjectType>;
    r: Nullable$1<ST_Checked>;
    t: Nullable$1<boolean>;
    v: Nullable$1<number>;
    x: Nullable$1<ST_DropStyle>;
    z: Nullable$1<number>;
    ad: Nullable$1<boolean>;
    bh: string;
    bj: string;
    bl: string;
    bn: string;
    af: Nullable$1<boolean>;
    ah: Nullable$1<number>;
    aj: Nullable$1<boolean>;
    al: Nullable$1<boolean>;
    an: Nullable$1<number>;
    ap: Nullable$1<number>;
    bp: string;
    at: Nullable$1<boolean>;
    au: Nullable$1<boolean>;
    az: Nullable$1<number>;
    a3: Nullable$1<number>;
    a5: Nullable$1<ST_SelType>;
    a7: Nullable$1<ST_TextHAlign>;
    a9: Nullable$1<ST_TextVAlign>;
    bb: Nullable$1<number>;
    bf: Nullable$1<number>;
    ab: Nullable$1<ST_EditValidation>;
    ar: Nullable$1<boolean>;
    bd: Nullable$1<boolean>;
    a1: Nullable$1<boolean>;
    static bv(a: XmlPartManagerBase, b: Nullable$1<ST_ObjectType>, c: Nullable$1<ST_Checked>, d: Nullable$1<boolean>, e: Nullable$1<number>, f: Nullable$1<ST_DropStyle>, g: Nullable$1<number>, h: Nullable$1<boolean>, i: string, j: string, k: string, l: string, m: Nullable$1<boolean>, n: Nullable$1<number>, o: Nullable$1<boolean>, p: Nullable$1<boolean>, q: Nullable$1<number>, r: Nullable$1<number>, s: string, t: Nullable$1<boolean>, u: Nullable$1<boolean>, v: Nullable$1<number>, w: Nullable$1<number>, x: Nullable$1<ST_SelType>, y: Nullable$1<ST_TextHAlign>, z: Nullable$1<ST_TextVAlign>, aa: Nullable$1<number>, ab: Nullable$1<number>, ac: Nullable$1<ST_EditValidation>, ad: Nullable$1<boolean>, ae: Nullable$1<boolean>, af: Nullable$1<boolean>): {
        p1: Nullable$1<ST_ObjectType>;
        p2: Nullable$1<ST_Checked>;
        p3: Nullable$1<boolean>;
        p4: Nullable$1<number>;
        p5: Nullable$1<ST_DropStyle>;
        p6: Nullable$1<number>;
        p7: Nullable$1<boolean>;
        p8: string;
        p9: string;
        p10: string;
        p11: string;
        p12: Nullable$1<boolean>;
        p13: Nullable$1<number>;
        p14: Nullable$1<boolean>;
        p15: Nullable$1<boolean>;
        p16: Nullable$1<number>;
        p17: Nullable$1<number>;
        p18: string;
        p19: Nullable$1<boolean>;
        p20: Nullable$1<boolean>;
        p21: Nullable$1<number>;
        p22: Nullable$1<number>;
        p23: Nullable$1<ST_SelType>;
        p24: Nullable$1<ST_TextHAlign>;
        p25: Nullable$1<ST_TextVAlign>;
        p26: Nullable$1<number>;
        p27: Nullable$1<number>;
        p28: Nullable$1<ST_EditValidation>;
        p29: Nullable$1<boolean>;
        p30: Nullable$1<boolean>;
        p31: Nullable$1<boolean>;
    };
    static bw(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_Checked>, d?: Nullable$1<boolean>, e?: Nullable$1<number>, f?: Nullable$1<ST_DropStyle>, g?: Nullable$1<number>, h?: Nullable$1<ST_EditValidation>, i?: Nullable$1<boolean>, j?: string, k?: string, l?: string, m?: string, n?: Nullable$1<boolean>, o?: Nullable$1<number>, p?: Nullable$1<boolean>, q?: Nullable$1<boolean>, r?: Nullable$1<number>, s?: Nullable$1<number>, t?: Nullable$1<boolean>, u?: string, v?: Nullable$1<boolean>, w?: Nullable$1<boolean>, x?: Nullable$1<ST_ObjectType>, y?: Nullable$1<number>, z?: Nullable$1<boolean>, aa?: Nullable$1<number>, ab?: Nullable$1<ST_SelType>, ac?: Nullable$1<ST_TextHAlign>, ad?: Nullable$1<ST_TextVAlign>, ae?: Nullable$1<number>, af?: Nullable$1<boolean>, ag?: Nullable$1<number>): void;
}
/**
 * @hidden
 */
export declare class CT_ListItems extends Base {
    static $t: Type;
    private d;
    private b;
    constructor();
    item: List$1<CT_ListItem>;
    a: CT_ExtensionList;
    static e(a: XmlPartManagerBase): void;
    static f(a: XmlPartManagerBase, b: string): void;
}
/**
 * @hidden
 */
export declare class CT_ListItem extends Base {
    static $t: Type;
    private b;
    a: string;
    static c(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static d(a: XmlPartManagerBase, b: string, c: string): void;
}
/**
 * @hidden
 */
export declare class CT_DatastoreItem extends Base {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: CT_ExtensionList;
    c: string;
    static e(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static f(a: XmlPartManagerBase, b: string, c: string): void;
}
/**
 * @hidden
 */
export declare class CT_SourceConnection extends Base {
    static $t: Type;
    private b;
    a: string;
    static c(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static d(a: XmlPartManagerBase, b: string, c: string): void;
}
/**
 * @hidden
 */
export declare class CT_CacheSourceExt extends Base {
    static $t: Type;
    private b;
    constructor();
    a: CT_SourceConnection;
    static c(a: XmlPartManagerBase): void;
    static d(a: XmlPartManagerBase, b: string): void;
}
/**
 * @hidden
 */
export declare class CT_CustomFilters_SML2009 extends Base {
    static $t: Type;
    private c;
    private e;
    constructor();
    b: List$1<CT_CustomFilter>;
    d: Nullable$1<boolean>;
    static f(a: XmlPartManagerBase, b: Nullable$1<boolean>): {
        p1: Nullable$1<boolean>;
    };
    static g(a: XmlPartManagerBase, b: string, c?: Nullable$1<boolean>): void;
}
/**
 * @hidden
 */
export declare class CT_ProtectedRange_SML2009 extends Base {
    static $t: Type;
    private b;
    private l;
    private f;
    private h;
    private n;
    private d;
    private j;
    private p;
    constructor();
    a: CT_Sqref;
    k: string;
    e: string;
    g: string;
    m: string;
    c: Nullable$1<number>;
    i: string;
    o: string;
    static q(a: XmlPartManagerBase, b: string, c: string, d: string, e: string, f: Nullable$1<number>, g: string, h: string): {
        p1: string;
        p2: string;
        p3: string;
        p4: string;
        p5: Nullable$1<number>;
        p6: string;
        p7: string;
    };
    static r(a: XmlPartManagerBase, b: string, c: string, d: string, e: string, f: string, g: string, h: Nullable$1<number>, i: string): void;
}
/**
 * @hidden
 */
export declare class CT_IgnoredError_SML2009 extends Base {
    static $t: Type;
    private b;
    private q;
    private aa;
    private y;
    private s;
    private u;
    private ac;
    private o;
    private w;
    private m;
    constructor();
    a: CT_Sqref;
    p: Nullable$1<boolean>;
    z: Nullable$1<boolean>;
    x: Nullable$1<boolean>;
    r: Nullable$1<boolean>;
    t: Nullable$1<boolean>;
    ab: Nullable$1<boolean>;
    n: Nullable$1<boolean>;
    v: Nullable$1<boolean>;
    l: Nullable$1<boolean>;
    static ad(a: XmlPartManagerBase, b: Nullable$1<boolean>, c: Nullable$1<boolean>, d: Nullable$1<boolean>, e: Nullable$1<boolean>, f: Nullable$1<boolean>, g: Nullable$1<boolean>, h: Nullable$1<boolean>, i: Nullable$1<boolean>, j: Nullable$1<boolean>): {
        p1: Nullable$1<boolean>;
        p2: Nullable$1<boolean>;
        p3: Nullable$1<boolean>;
        p4: Nullable$1<boolean>;
        p5: Nullable$1<boolean>;
        p6: Nullable$1<boolean>;
        p7: Nullable$1<boolean>;
        p8: Nullable$1<boolean>;
        p9: Nullable$1<boolean>;
    };
    static ae(a: XmlPartManagerBase, b: string, c?: Nullable$1<boolean>, d?: Nullable$1<boolean>, e?: Nullable$1<boolean>, f?: Nullable$1<boolean>, g?: Nullable$1<boolean>, h?: Nullable$1<boolean>, i?: Nullable$1<boolean>, j?: Nullable$1<boolean>, k?: Nullable$1<boolean>): void;
}
/**
 * @hidden
 */
export declare class CT_IgnoredErrors_SML2009 extends Base {
    static $t: Type;
    private d;
    private b;
    constructor();
    c: List$1<CT_IgnoredError>;
    a: CT_ExtensionList;
    static e(a: XmlPartManagerBase): void;
    static f(a: XmlPartManagerBase, b: string): void;
}
/**
 * @hidden
 */
export declare class CT_SlicerStyles extends Base {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: List$1<CT_SlicerStyle>;
    c: string;
    static e(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static f(a: XmlPartManagerBase, b: string, c: string): void;
}
/**
 * @hidden
 */
export declare class CT_SlicerStyle extends Base {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: List$1<CT_SlicerStyleElement>;
    c: string;
    static e(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static f(a: XmlPartManagerBase, b: string, c: string): void;
}
/**
 * @hidden
 */
export declare class CT_SlicerStyleElement extends Base {
    static $t: Type;
    private b;
    private d;
    a: ST_SlicerStyleType;
    c: Nullable$1<number>;
    static e(a: XmlPartManagerBase, b: ST_SlicerStyleType, c: Nullable$1<number>): {
        p1: ST_SlicerStyleType;
        p2: Nullable$1<number>;
    };
    static f(a: XmlPartManagerBase, b: string, c: Nullable$1<number>, d: ST_SlicerStyleType): void;
}
/**
 * @hidden
 */
export declare class CT_CacheField_SML2009 extends Base {
    static $t: Type;
    private c;
    constructor();
    b: Nullable$1<boolean>;
    static d(a: XmlPartManagerBase, b: Nullable$1<boolean>): {
        p1: Nullable$1<boolean>;
    };
    static e(a: XmlPartManagerBase, b: string, c?: Nullable$1<boolean>): void;
}
/**
 * @hidden
 */
export declare class CT_PivotHierarchy_SML2009 extends Base {
    static $t: Type;
    private c;
    constructor();
    b: Nullable$1<boolean>;
    static d(a: XmlPartManagerBase, b: Nullable$1<boolean>): {
        p1: Nullable$1<boolean>;
    };
    static e(a: XmlPartManagerBase, b: string, c?: Nullable$1<boolean>): void;
}
/**
 * @hidden
 */
export declare class CT_OleItem extends Base {
    static $t: Type;
    constructor();
    g: string;
    e: Nullable$1<boolean>;
    d: Nullable$1<boolean>;
    f: Nullable$1<boolean>;
    static i(a: XmlPartManagerBase, b: string, c: Nullable$1<boolean>, d: Nullable$1<boolean>, e: Nullable$1<boolean>): {
        p1: string;
        p2: Nullable$1<boolean>;
        p3: Nullable$1<boolean>;
        p4: Nullable$1<boolean>;
    };
    static j(a: XmlPartManagerBase, b: string, c: Nullable$1<boolean>, d: Nullable$1<boolean>, e: Nullable$1<boolean>, f: string): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_OleItem_SML2009 extends CT_OleItem {
    static $t: Type;
    private l;
    constructor();
    k: CT_DdeValues;
    static p(a: XmlPartManagerBase, b: string, c: Nullable$1<boolean>, d: Nullable$1<boolean>, e: Nullable$1<boolean>): {
        p1: string;
        p2: Nullable$1<boolean>;
        p3: Nullable$1<boolean>;
        p4: Nullable$1<boolean>;
    };
    static q(a: XmlPartManagerBase, b: string, c: Nullable$1<boolean>, d: Nullable$1<boolean>, e: Nullable$1<boolean>, f: string): void;
}
/**
 * @hidden
 */
export declare class CT_Table_SML2009 extends Base {
    static $t: Type;
    private b;
    private d;
    a: string;
    c: string;
    static e(a: XmlPartManagerBase, b: string, c: string): {
        p1: string;
        p2: string;
    };
    static f(a: XmlPartManagerBase, b: string, c?: string, d?: string): void;
}
/**
 * @hidden
 */
export declare class CT_PivotCacheDefinition_SML2009 extends Base {
    static $t: Type;
    private h;
    private f;
    private n;
    private l;
    private j;
    constructor();
    g: Nullable$1<boolean>;
    e: Nullable$1<number>;
    m: Nullable$1<boolean>;
    k: Nullable$1<boolean>;
    i: Nullable$1<boolean>;
    static o(a: XmlPartManagerBase, b: Nullable$1<boolean>, c: Nullable$1<number>, d: Nullable$1<boolean>, e: Nullable$1<boolean>, f: Nullable$1<boolean>): {
        p1: Nullable$1<boolean>;
        p2: Nullable$1<number>;
        p3: Nullable$1<boolean>;
        p4: Nullable$1<boolean>;
        p5: Nullable$1<boolean>;
    };
    static p(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>, d?: Nullable$1<boolean>, e?: Nullable$1<boolean>, f?: Nullable$1<boolean>, g?: Nullable$1<boolean>): void;
}
/**
 * @hidden
 */
export declare class CT_ConditionalFormat_SML2009 extends Base {
    static $t: Type;
    private d;
    private b;
    private j;
    private l;
    private h;
    private n;
    constructor();
    c: CT_PivotAreas;
    a: CT_ExtensionList;
    i: Nullable$1<ST_Scope>;
    k: Nullable$1<ST_Type>;
    g: Nullable$1<number>;
    m: string;
    static o(a: XmlPartManagerBase, b: Nullable$1<ST_Scope>, c: Nullable$1<ST_Type>, d: Nullable$1<number>, e: string): {
        p1: Nullable$1<ST_Scope>;
        p2: Nullable$1<ST_Type>;
        p3: Nullable$1<number>;
        p4: string;
    };
    static p(a: XmlPartManagerBase, b: string, c: Nullable$1<number>, d: Nullable$1<ST_Scope>, e: Nullable$1<ST_Type>, f: string): void;
}
/**
 * @hidden
 */
export declare class CT_ConditionalFormats_SML2009 extends Base {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: List$1<CT_ConditionalFormat>;
    c: Nullable$1<number>;
    static e(a: XmlPartManagerBase, b: Nullable$1<number>): {
        p1: Nullable$1<number>;
    };
    static f(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>): void;
}
/**
 * @hidden
 */
export declare class CT_PivotChange extends Base {
    static $t: Type;
    private d;
    private i;
    private b;
    private f;
    private k;
    constructor();
    c: CT_PivotEditValue;
    h: List$1<string>;
    a: CT_ExtensionList;
    e: ST_AllocationMethod;
    j: string;
    static l(a: XmlPartManagerBase, b: ST_AllocationMethod, c: string): {
        p1: ST_AllocationMethod;
        p2: string;
    };
    static m(a: XmlPartManagerBase, b: string, c: string, d: ST_AllocationMethod): void;
}
/**
 * @hidden
 */
export declare class CT_PivotEditValue extends Base {
    static $t: Type;
    private b;
    private d;
    a: ST_PivotEditValueType;
    c: string;
}
/**
 * @hidden
 */
export declare class CT_PivotUserEdit extends Base {
    static $t: Type;
    private b;
    item: any;
}
/**
 * @hidden
 */
export declare class CT_PivotEdit extends Base {
    static $t: Type;
    private f;
    private h;
    private d;
    private b;
    constructor();
    e: CT_PivotUserEdit;
    g: List$1<string>;
    c: CT_PivotArea;
    a: CT_ExtensionList;
    static i(a: XmlPartManagerBase): void;
    static j(a: XmlPartManagerBase, b: string): void;
}
/**
 * @hidden
 */
export declare class CT_PivotTableDefinition extends Base {
    static $t: Type;
    private m;
    private k;
    private b;
    private w;
    private aa;
    private s;
    private ac;
    private ae;
    private u;
    private q;
    private o;
    private ag;
    private y;
    constructor();
    l: List$1<CT_PivotEdit>;
    j: List$1<CT_PivotChange>;
    a: CT_ConditionalFormats;
    v: Nullable$1<boolean>;
    z: Nullable$1<boolean>;
    r: Nullable$1<boolean>;
    ab: string;
    ad: string;
    t: Nullable$1<boolean>;
    p: Nullable$1<boolean>;
    n: Nullable$1<ST_AllocationMethod>;
    af: string;
    x: Nullable$1<boolean>;
    static ah(a: XmlPartManagerBase, b: Nullable$1<boolean>, c: Nullable$1<boolean>, d: Nullable$1<boolean>, e: string, f: string, g: Nullable$1<boolean>, h: Nullable$1<boolean>, i: Nullable$1<ST_AllocationMethod>, j: string, k: Nullable$1<boolean>): {
        p1: Nullable$1<boolean>;
        p2: Nullable$1<boolean>;
        p3: Nullable$1<boolean>;
        p4: string;
        p5: string;
        p6: Nullable$1<boolean>;
        p7: Nullable$1<boolean>;
        p8: Nullable$1<ST_AllocationMethod>;
        p9: string;
        p10: Nullable$1<boolean>;
    };
    static ai(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_AllocationMethod>, d?: string, e?: string, f?: Nullable$1<boolean>, g?: Nullable$1<boolean>, h?: Nullable$1<boolean>, i?: Nullable$1<boolean>, j?: Nullable$1<boolean>, k?: Nullable$1<boolean>, l?: string): void;
}
/**
 * @hidden
 */
export declare class CT_PivotField_SML2009 extends Base {
    static $t: Type;
    private d;
    private f;
    constructor();
    c: Nullable$1<boolean>;
    e: Nullable$1<boolean>;
    static g(a: XmlPartManagerBase, b: Nullable$1<boolean>, c: Nullable$1<boolean>): {
        p1: Nullable$1<boolean>;
        p2: Nullable$1<boolean>;
    };
    static h(a: XmlPartManagerBase, b: string, c?: Nullable$1<boolean>, d?: Nullable$1<boolean>): void;
}
/**
 * @hidden
 */
export declare class CT_DataField_SML2009 extends Base {
    static $t: Type;
    private b;
    private d;
    private f;
    a: Nullable$1<ST_PivotShowAs>;
    c: Nullable$1<number>;
    e: string;
    static g(a: XmlPartManagerBase, b: Nullable$1<ST_PivotShowAs>, c: Nullable$1<number>, d: string): {
        p1: Nullable$1<ST_PivotShowAs>;
        p2: Nullable$1<number>;
        p3: string;
    };
    static h(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_PivotShowAs>, d?: Nullable$1<number>, e?: string): void;
}
/**
 * @hidden
 */
export declare class CT_CacheHierarchy_SML2009 extends Base {
    static $t: Type;
    private b;
    private h;
    private n;
    private j;
    private l;
    constructor();
    a: CT_SetLevels;
    g: Nullable$1<boolean>;
    m: Nullable$1<boolean>;
    i: Nullable$1<boolean>;
    k: Nullable$1<boolean>;
    static o(a: XmlPartManagerBase, b: Nullable$1<boolean>, c: Nullable$1<boolean>, d: Nullable$1<boolean>, e: Nullable$1<boolean>): {
        p1: Nullable$1<boolean>;
        p2: Nullable$1<boolean>;
        p3: Nullable$1<boolean>;
        p4: Nullable$1<boolean>;
    };
    static p(a: XmlPartManagerBase, b: string, c?: Nullable$1<boolean>, d?: Nullable$1<boolean>, e?: Nullable$1<boolean>, f?: Nullable$1<boolean>): void;
}
/**
 * @hidden
 */
export declare class CT_SetLevels extends Base {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: List$1<CT_SetLevel>;
    c: Nullable$1<number>;
    static e(a: XmlPartManagerBase, b: Nullable$1<number>): {
        p1: Nullable$1<number>;
    };
    static f(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>): void;
}
/**
 * @hidden
 */
export declare class CT_SetLevel extends Base {
    static $t: Type;
    private b;
    a: number;
    static c(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static d(a: XmlPartManagerBase, b: string, c: number): void;
}
/**
 * @hidden
 */
export declare class CT_TupleSetRowItem extends Base {
    static $t: Type;
    private d;
    private b;
    c: string;
    a: string;
    static e(a: XmlPartManagerBase, b: string, c: string): {
        p1: string;
        p2: string;
    };
    static f(a: XmlPartManagerBase, b: string, c?: string, d?: string): void;
}
/**
 * @hidden
 */
export declare class CT_TupleSetHeader extends Base {
    static $t: Type;
    private d;
    private b;
    c: string;
    a: string;
    static e(a: XmlPartManagerBase, b: string, c: string): {
        p1: string;
        p2: string;
    };
    static f(a: XmlPartManagerBase, b: string, c?: string, d?: string): void;
}
/**
 * @hidden
 */
export declare class CT_TupleSet extends Base {
    static $t: Type;
    private b;
    private d;
    private h;
    private f;
    constructor();
    a: List$1<CT_TupleSetHeader>;
    c: List$1<CT_TupleSetRowItem>;
    g: Nullable$1<number>;
    e: Nullable$1<number>;
    static k(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<number>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<number>;
    };
    static l(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>, d?: Nullable$1<number>): void;
}
/**
 * @hidden
 */
export declare class CT_CalculatedMember_SML2009 extends Base {
    static $t: Type;
    private b;
    private m;
    private i;
    private g;
    private k;
    private o;
    constructor();
    a: CT_TupleSet;
    l: string;
    h: Nullable$1<boolean>;
    f: Nullable$1<boolean>;
    j: Nullable$1<boolean>;
    n: string;
    static p(a: XmlPartManagerBase, b: string, c: Nullable$1<boolean>, d: Nullable$1<boolean>, e: Nullable$1<boolean>, f: string): {
        p1: string;
        p2: Nullable$1<boolean>;
        p3: Nullable$1<boolean>;
        p4: Nullable$1<boolean>;
        p5: string;
    };
    static q(a: XmlPartManagerBase, b: string, c?: string, d?: Nullable$1<boolean>, e?: Nullable$1<boolean>, f?: Nullable$1<boolean>, g?: string): void;
}
/**
 * @hidden
 */
export declare class CT_SlicerCache extends Base {
    static $t: Type;
    private b;
    a: string;
    static c(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static d(a: XmlPartManagerBase, b: string, c: string): void;
}
/**
 * @hidden
 */
export declare class CT_SlicerRef extends Base {
    static $t: Type;
    private b;
    a: string;
    static c(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static d(a: XmlPartManagerBase, b: string, c: string): void;
}
/**
 * @hidden
 */
export declare class CT_WorkbookPr_SML2009 extends Base {
    static $t: Type;
    private i;
    private c;
    private e;
    constructor();
    h: number;
    b: boolean;
    d: number;
    static j(a: XmlPartManagerBase, b: number, c: boolean, d: number): {
        p1: number;
        p2: boolean;
        p3: number;
    };
    static k(a: XmlPartManagerBase, b: string, c: number, d: number, e: boolean): void;
}
/**
 * @hidden
 */
export declare class CT_DataValidationFormula extends Base {
    static $t: Type;
    private b;
    a: string;
    static c(a: XmlPartManagerBase): void;
    static d(a: XmlPartManagerBase, b: string): void;
}
/**
 * @hidden
 */
export declare class CT_DataValidation_SML2009 extends Base {
    static $t: Type;
    private d;
    private f;
    private b;
    private z;
    private n;
    private p;
    private r;
    private l;
    private t;
    private x;
    private v;
    private ad;
    private ab;
    private ah;
    private af;
    constructor();
    c: CT_DataValidationFormula;
    e: CT_DataValidationFormula;
    a: CT_Sqref;
    y: Nullable$1<ST_DataValidationType>;
    m: Nullable$1<ST_DataValidationErrorStyle>;
    o: Nullable$1<ST_DataValidationImeMode>;
    q: Nullable$1<ST_DataValidationOperator>;
    k: Nullable$1<boolean>;
    s: Nullable$1<boolean>;
    w: Nullable$1<boolean>;
    u: Nullable$1<boolean>;
    ac: string;
    aa: string;
    ag: string;
    ae: string;
    static ai(a: XmlPartManagerBase, b: Nullable$1<ST_DataValidationType>, c: Nullable$1<ST_DataValidationErrorStyle>, d: Nullable$1<ST_DataValidationImeMode>, e: Nullable$1<ST_DataValidationOperator>, f: Nullable$1<boolean>, g: Nullable$1<boolean>, h: Nullable$1<boolean>, i: Nullable$1<boolean>, j: string, k: string, l: string, m: string): {
        p1: Nullable$1<ST_DataValidationType>;
        p2: Nullable$1<ST_DataValidationErrorStyle>;
        p3: Nullable$1<ST_DataValidationImeMode>;
        p4: Nullable$1<ST_DataValidationOperator>;
        p5: Nullable$1<boolean>;
        p6: Nullable$1<boolean>;
        p7: Nullable$1<boolean>;
        p8: Nullable$1<boolean>;
        p9: string;
        p10: string;
        p11: string;
        p12: string;
    };
    static aj(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_DataValidationOperator>, d?: Nullable$1<boolean>, e?: string, f?: Nullable$1<ST_DataValidationErrorStyle>, g?: string, h?: Nullable$1<ST_DataValidationImeMode>, i?: string, j?: string, k?: Nullable$1<boolean>, l?: Nullable$1<boolean>, m?: Nullable$1<boolean>, n?: Nullable$1<ST_DataValidationType>): void;
}
/**
 * @hidden
 */
export declare class CT_DataValidations_SML2009 extends Base {
    static $t: Type;
    private c;
    private g;
    private i;
    private k;
    private e;
    constructor();
    b: List$1<CT_DataValidation>;
    f: Nullable$1<boolean>;
    h: Nullable$1<number>;
    j: Nullable$1<number>;
    d: Nullable$1<number>;
    static l(a: XmlPartManagerBase, b: Nullable$1<boolean>, c: Nullable$1<number>, d: Nullable$1<number>, e: Nullable$1<number>): {
        p1: Nullable$1<boolean>;
        p2: Nullable$1<number>;
        p3: Nullable$1<number>;
        p4: Nullable$1<number>;
    };
    static m(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>, d?: Nullable$1<boolean>, e?: Nullable$1<number>, f?: Nullable$1<number>): void;
}
/**
 * @hidden
 */
export declare class CT_CfIcon extends Base {
    static $t: Type;
    private b;
    private d;
    a: ST_IconSetType;
    c: number;
    static e(a: XmlPartManagerBase, b: ST_IconSetType, c: number): {
        p1: ST_IconSetType;
        p2: number;
    };
    static f(a: XmlPartManagerBase, b: string, c: number, d: ST_IconSetType): void;
}
/**
 * @hidden
 */
export declare class CT_IconSet_SML2009 extends Base {
    static $t: Type;
    private h;
    private f;
    private l;
    private r;
    private n;
    private p;
    private j;
    constructor();
    g: List$1<CT_Cfvo>;
    e: List$1<CT_CfIcon>;
    k: Nullable$1<ST_IconSetType>;
    q: Nullable$1<boolean>;
    m: Nullable$1<boolean>;
    o: Nullable$1<boolean>;
    i: Nullable$1<boolean>;
    static s(a: XmlPartManagerBase, b: Nullable$1<ST_IconSetType>, c: Nullable$1<boolean>, d: Nullable$1<boolean>, e: Nullable$1<boolean>, f: Nullable$1<boolean>): {
        p1: Nullable$1<ST_IconSetType>;
        p2: Nullable$1<boolean>;
        p3: Nullable$1<boolean>;
        p4: Nullable$1<boolean>;
        p5: Nullable$1<boolean>;
    };
    static t(a: XmlPartManagerBase, b: string, c?: Nullable$1<boolean>, d?: Nullable$1<ST_IconSetType>, e?: Nullable$1<boolean>, f?: Nullable$1<boolean>, g?: Nullable$1<boolean>): void;
}
/**
 * @hidden
 */
export declare class CT_Cfvo_SML2009 extends Base {
    static $t: Type;
    private i;
    private b;
    private d;
    private g;
    constructor();
    h: string;
    a: CT_ExtensionList;
    c: ST_CfvoType;
    f: Nullable$1<boolean>;
    static j(a: XmlPartManagerBase, b: ST_CfvoType, c: Nullable$1<boolean>): {
        p1: ST_CfvoType;
        p2: Nullable$1<boolean>;
    };
    static k(a: XmlPartManagerBase, b: string, c: Nullable$1<boolean>, d: ST_CfvoType): void;
}
/**
 * @hidden
 */
export declare class CT_DataBar_SML2009 extends Base {
    static $t: Type;
    private q;
    private f;
    private d;
    private j;
    private h;
    private b;
    private ac;
    private aa;
    private ai;
    private u;
    private y;
    private w;
    private ag;
    private ae;
    private s;
    constructor();
    p: List$1<CT_Cfvo>;
    e: ColorInfo;
    c: ColorInfo;
    i: ColorInfo;
    g: ColorInfo;
    a: ColorInfo;
    ab: Nullable$1<number>;
    z: Nullable$1<number>;
    ah: Nullable$1<boolean>;
    t: Nullable$1<boolean>;
    x: Nullable$1<boolean>;
    v: Nullable$1<ST_DataBarDirection>;
    af: Nullable$1<boolean>;
    ad: Nullable$1<boolean>;
    r: Nullable$1<ST_DataBarAxisPosition>;
    static al(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<number>, d: Nullable$1<boolean>, e: Nullable$1<boolean>, f: Nullable$1<boolean>, g: Nullable$1<ST_DataBarDirection>, h: Nullable$1<boolean>, i: Nullable$1<boolean>, j: Nullable$1<ST_DataBarAxisPosition>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<number>;
        p3: Nullable$1<boolean>;
        p4: Nullable$1<boolean>;
        p5: Nullable$1<boolean>;
        p6: Nullable$1<ST_DataBarDirection>;
        p7: Nullable$1<boolean>;
        p8: Nullable$1<boolean>;
        p9: Nullable$1<ST_DataBarAxisPosition>;
    };
    static am(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_DataBarAxisPosition>, d?: Nullable$1<boolean>, e?: Nullable$1<ST_DataBarDirection>, f?: Nullable$1<boolean>, g?: Nullable$1<number>, h?: Nullable$1<number>, i?: Nullable$1<boolean>, j?: Nullable$1<boolean>, k?: Nullable$1<boolean>): void;
}
/**
 * @hidden
 */
export declare class CT_ColorScale_SML2009 extends Base {
    static $t: Type;
    private d;
    private b;
    constructor();
    c: List$1<CT_Cfvo>;
    a: ColorInfo;
    static e(a: XmlPartManagerBase): void;
    static f(a: XmlPartManagerBase, b: string): void;
}
/**
 * @hidden
 */
export declare class CT_CfRule_SML2009 extends Base {
    static $t: Type;
    private r;
    private d;
    private f;
    private j;
    private h;
    private b;
    private ap;
    private af;
    private al;
    private t;
    private ad;
    private x;
    private ab;
    private at;
    private an;
    private ah;
    private aj;
    private z;
    private v;
    private ar;
    constructor();
    q: List$1<string>;
    c: CT_ColorScale;
    e: CT_DataBar;
    i: CT_IconSet;
    g: CT_Dxf;
    a: CT_ExtensionList;
    ao: Nullable$1<ST_CfType>;
    ae: Nullable$1<number>;
    ak: Nullable$1<boolean>;
    s: Nullable$1<boolean>;
    ac: Nullable$1<boolean>;
    w: Nullable$1<boolean>;
    aa: Nullable$1<ST_ConditionalFormattingOperator>;
    as: string;
    am: Nullable$1<ST_TimePeriod>;
    ag: Nullable$1<number>;
    ai: Nullable$1<number>;
    y: Nullable$1<boolean>;
    u: Nullable$1<boolean>;
    aq: string;
    static au(a: XmlPartManagerBase, b: Nullable$1<ST_CfType>, c: Nullable$1<number>, d: Nullable$1<boolean>, e: Nullable$1<boolean>, f: Nullable$1<boolean>, g: Nullable$1<boolean>, h: Nullable$1<ST_ConditionalFormattingOperator>, i: string, j: Nullable$1<ST_TimePeriod>, k: Nullable$1<number>, l: Nullable$1<number>, m: Nullable$1<boolean>, n: Nullable$1<boolean>, o: string): {
        p1: Nullable$1<ST_CfType>;
        p2: Nullable$1<number>;
        p3: Nullable$1<boolean>;
        p4: Nullable$1<boolean>;
        p5: Nullable$1<boolean>;
        p6: Nullable$1<boolean>;
        p7: Nullable$1<ST_ConditionalFormattingOperator>;
        p8: string;
        p9: Nullable$1<ST_TimePeriod>;
        p10: Nullable$1<number>;
        p11: Nullable$1<number>;
        p12: Nullable$1<boolean>;
        p13: Nullable$1<boolean>;
        p14: string;
    };
    static av(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_ConditionalFormattingOperator>, d?: Nullable$1<boolean>, e?: Nullable$1<boolean>, f?: Nullable$1<boolean>, g?: Nullable$1<boolean>, h?: string, i?: Nullable$1<boolean>, j?: Nullable$1<number>, k?: Nullable$1<number>, l?: Nullable$1<number>, m?: Nullable$1<boolean>, n?: string, o?: Nullable$1<ST_TimePeriod>, p?: Nullable$1<ST_CfType>): void;
}
/**
 * @hidden
 */
export declare class CT_ConditionalFormatting_SML2009 extends Base {
    static $t: Type;
    private g;
    private d;
    private b;
    private i;
    constructor();
    f: List$1<CT_CfRule>;
    c: CT_Sqref;
    a: CT_ExtensionList;
    h: Nullable$1<boolean>;
    static j(a: XmlPartManagerBase, b: Nullable$1<boolean>): {
        p1: Nullable$1<boolean>;
    };
    static k(a: XmlPartManagerBase, b: string, c?: Nullable$1<boolean>): void;
}
/**
 * @hidden
 */
export declare class CT_TabularSlicerCacheItem extends Base {
    static $t: Type;
    private h;
    private f;
    private d;
    constructor();
    g: number;
    e: Nullable$1<boolean>;
    c: Nullable$1<boolean>;
    static i(a: XmlPartManagerBase, b: number, c: Nullable$1<boolean>, d: Nullable$1<boolean>): {
        p1: number;
        p2: Nullable$1<boolean>;
        p3: Nullable$1<boolean>;
    };
    static j(a: XmlPartManagerBase, b: string, c: Nullable$1<boolean>, d: Nullable$1<boolean>, e: number): void;
}
/**
 * @hidden
 */
export declare class CT_TabularSlicerCacheItems extends Base {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: List$1<CT_TabularSlicerCacheItem>;
    c: Nullable$1<number>;
    static e(a: XmlPartManagerBase, b: Nullable$1<number>): {
        p1: Nullable$1<number>;
    };
    static f(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>): void;
}
/**
 * @hidden
 */
export declare class CT_TabularSlicerCache extends Base {
    static $t: Type;
    private d;
    private b;
    private r;
    private p;
    private l;
    private n;
    private j;
    constructor();
    c: CT_TabularSlicerCacheItems;
    a: CT_ExtensionList;
    q: number;
    o: Nullable$1<ST_TabularSlicerCacheSortOrder>;
    k: Nullable$1<boolean>;
    m: Nullable$1<boolean>;
    i: Nullable$1<ST_SlicerCacheCrossFilter>;
    static s(a: XmlPartManagerBase, b: number, c: Nullable$1<ST_TabularSlicerCacheSortOrder>, d: Nullable$1<boolean>, e: Nullable$1<boolean>, f: Nullable$1<ST_SlicerCacheCrossFilter>): {
        p1: number;
        p2: Nullable$1<ST_TabularSlicerCacheSortOrder>;
        p3: Nullable$1<boolean>;
        p4: Nullable$1<boolean>;
        p5: Nullable$1<ST_SlicerCacheCrossFilter>;
    };
    static t(a: XmlPartManagerBase, b: string, c: Nullable$1<ST_SlicerCacheCrossFilter>, d: Nullable$1<boolean>, e: Nullable$1<boolean>, f: Nullable$1<ST_TabularSlicerCacheSortOrder>, g: number): void;
}
/**
 * @hidden
 */
export declare class CT_OlapSlicerCacheSelection extends Base {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: List$1<CT_OlapSlicerCacheItemParent>;
    c: string;
    static e(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static f(a: XmlPartManagerBase, b: string, c: string): void;
}
/**
 * @hidden
 */
export declare class CT_OlapSlicerCacheItemParent extends Base {
    static $t: Type;
    private b;
    a: string;
    static c(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static d(a: XmlPartManagerBase, b: string, c: string): void;
}
/**
 * @hidden
 */
export declare class CT_OlapSlicerCacheSelections extends Base {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: List$1<CT_OlapSlicerCacheSelection>;
    c: Nullable$1<number>;
    static e(a: XmlPartManagerBase, b: Nullable$1<number>): {
        p1: Nullable$1<number>;
    };
    static f(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>): void;
}
/**
 * @hidden
 */
export declare class CT_OlapSlicerCacheItem extends Base {
    static $t: Type;
    private c;
    private i;
    private g;
    private e;
    constructor();
    b: List$1<CT_OlapSlicerCacheItemParent>;
    h: string;
    f: string;
    d: Nullable$1<boolean>;
    static j(a: XmlPartManagerBase, b: string, c: string, d: Nullable$1<boolean>): {
        p1: string;
        p2: string;
        p3: Nullable$1<boolean>;
    };
    static k(a: XmlPartManagerBase, b: string, c: string, d: Nullable$1<boolean>, e: string): void;
}
/**
 * @hidden
 */
export declare class CT_OlapSlicerCacheRange extends Base {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: List$1<CT_OlapSlicerCacheItem>;
    c: number;
    static e(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static f(a: XmlPartManagerBase, b: string, c: number): void;
}
/**
 * @hidden
 */
export declare class CT_OlapSlicerCacheLevelData extends Base {
    static $t: Type;
    private d;
    private l;
    private j;
    private n;
    private h;
    private f;
    constructor();
    c: List$1<CT_OlapSlicerCacheRange>;
    k: string;
    i: string;
    m: number;
    g: Nullable$1<ST_OlapSlicerCacheSortOrder>;
    e: Nullable$1<ST_SlicerCacheCrossFilter>;
    static o(a: XmlPartManagerBase, b: string, c: string, d: number, e: Nullable$1<ST_OlapSlicerCacheSortOrder>, f: Nullable$1<ST_SlicerCacheCrossFilter>): {
        p1: string;
        p2: string;
        p3: number;
        p4: Nullable$1<ST_OlapSlicerCacheSortOrder>;
        p5: Nullable$1<ST_SlicerCacheCrossFilter>;
    };
    static p(a: XmlPartManagerBase, b: string, c: Nullable$1<ST_SlicerCacheCrossFilter>, d: Nullable$1<ST_OlapSlicerCacheSortOrder>, e: string, f: number, g: string): void;
}
/**
 * @hidden
 */
export declare class CT_OlapSlicerCacheLevelsData extends Base {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: List$1<CT_OlapSlicerCacheLevelData>;
    c: Nullable$1<number>;
    static e(a: XmlPartManagerBase, b: Nullable$1<number>): {
        p1: Nullable$1<number>;
    };
    static f(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>): void;
}
/**
 * @hidden
 */
export declare class CT_OlapSlicerCache extends Base {
    static $t: Type;
    private d;
    private f;
    private b;
    private h;
    constructor();
    c: CT_OlapSlicerCacheLevelsData;
    e: CT_OlapSlicerCacheSelections;
    a: CT_ExtensionList;
    g: number;
    static i(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static j(a: XmlPartManagerBase, b: string, c: number): void;
}
/**
 * @hidden
 */
export declare class CT_SlicerCacheData extends Base {
    static $t: Type;
    private b;
    item: any;
}
/**
 * @hidden
 */
export declare class CT_ConditionalFormattings extends Base {
    static $t: Type;
    private b;
    constructor();
    a: List$1<CT_ConditionalFormatting>;
    static c(a: XmlPartManagerBase): void;
    static d(a: XmlPartManagerBase, b: string): void;
}
/**
 * @hidden
 */
export declare class CT_SparklineGroups extends Base {
    static $t: Type;
    private b;
    constructor();
    a: List$1<CT_SparklineGroup>;
    static c(a: XmlPartManagerBase): void;
    static d(a: XmlPartManagerBase, b: string): void;
}
/**
 * @hidden
 */
export declare class CT_SlicerRefs extends Base {
    static $t: Type;
    private b;
    constructor();
    a: List$1<CT_SlicerRef>;
    static c(a: XmlPartManagerBase): void;
    static d(a: XmlPartManagerBase, b: string): void;
}
/**
 * @hidden
 */
export declare class CT_ProtectedRanges_SML2009 extends Base {
    static $t: Type;
    private b;
    constructor();
    a: List$1<CT_ProtectedRange>;
    static c(a: XmlPartManagerBase): void;
    static d(a: XmlPartManagerBase, b: string): void;
}
/**
 * @hidden
 */
export declare class CT_SlicerCaches extends Base {
    static $t: Type;
    private b;
    constructor();
    a: List$1<CT_SlicerCache>;
    static c(a: XmlPartManagerBase): void;
    static d(a: XmlPartManagerBase, b: string): void;
}
/**
 * @hidden
 */
export declare class CT_Slicers extends Base {
    static $t: Type;
    private b;
    constructor();
    a: List$1<CT_Slicer>;
    static c(a: XmlPartManagerBase): void;
    static d(a: XmlPartManagerBase, b: string): void;
}
/**
 * @hidden
 */
export declare class CT_SlicerCachePivotTables extends Base {
    static $t: Type;
    private b;
    constructor();
    a: List$1<CT_SlicerCachePivotTable>;
    static c(a: XmlPartManagerBase): void;
    static d(a: XmlPartManagerBase, b: string): void;
}
/**
 * @hidden
 */
export declare class CT_OlapSlicerCacheRanges extends Base {
    static $t: Type;
    private b;
    constructor();
    a: List$1<CT_OlapSlicerCacheRange>;
    static c(a: XmlPartManagerBase): void;
    static d(a: XmlPartManagerBase, b: string): void;
}
/**
 * @hidden
 */
export declare class CT_Sparklines extends Base {
    static $t: Type;
    private b;
    constructor();
    a: List$1<CT_Sparkline>;
    static c(a: XmlPartManagerBase): void;
    static d(a: XmlPartManagerBase, b: string): void;
}
/**
 * @hidden
 */
export declare class CT_TupleSetHeaders extends Base {
    static $t: Type;
    private b;
    constructor();
    a: List$1<CT_TupleSetHeader>;
    static c(a: XmlPartManagerBase): void;
    static d(a: XmlPartManagerBase, b: string): void;
}
/**
 * @hidden
 */
export declare class CT_TupleSetRows extends Base {
    static $t: Type;
    private b;
    constructor();
    a: List$1<CT_TupleSetRowItem>;
    static c(a: XmlPartManagerBase): void;
    static d(a: XmlPartManagerBase, b: string): void;
}
/**
 * @hidden
 */
export declare class CT_TupleSetRow extends Base {
    static $t: Type;
    private b;
    constructor();
    a: List$1<CT_TupleSetRowItem>;
    static c(a: XmlPartManagerBase): void;
    static d(a: XmlPartManagerBase, b: string): void;
}
/**
 * @hidden
 */
export declare class CT_PivotEdits extends Base {
    static $t: Type;
    private b;
    constructor();
    a: List$1<CT_PivotEdit>;
    static c(a: XmlPartManagerBase): void;
    static d(a: XmlPartManagerBase, b: string): void;
}
/**
 * @hidden
 */
export declare class CT_PivotChanges extends Base {
    static $t: Type;
    private b;
    constructor();
    a: List$1<CT_PivotChange>;
    static c(a: XmlPartManagerBase): void;
    static d(a: XmlPartManagerBase, b: string): void;
}
/**
 * @hidden
 */
export declare class CT_TupleItems extends Base {
    static $t: Type;
    private b;
    constructor();
    a: List$1<string>;
    static c(a: XmlPartManagerBase): void;
    static d(a: XmlPartManagerBase, b: string): void;
}
/**
 * @hidden
 */
export declare class CT_SlicerStyleElements extends Base {
    static $t: Type;
    private b;
    constructor();
    a: List$1<CT_SlicerStyleElement>;
    static c(a: XmlPartManagerBase): void;
    static d(a: XmlPartManagerBase, b: string): void;
}
/**
 * @hidden
 */
export declare class SML2009Attributes extends Base {
    static $t: Type;
}
/**
 * @hidden
 */
export declare class Excel2006Elements extends Base {
    static $t: Type;
    static readonly b: string;
    static readonly a: string;
    static readonly c: string;
    static readonly d: string;
}
/**
 * @hidden
 */
export declare class CT_Ref extends Base {
    static $t: Type;
    private f;
    private c;
    private d;
    private h;
    e: boolean;
    b: boolean;
    a: boolean;
    g: string;
}
/**
 * @hidden
 */
export declare class CT_CustomFilter extends Base {
    static $t: Type;
    private a;
    private e;
    constructor();
    b: Nullable$1<ST_FilterOperator>;
    d: string;
    static f(a: XmlPartManagerBase, b: Nullable$1<ST_FilterOperator>, c: string): {
        p1: Nullable$1<ST_FilterOperator>;
        p2: string;
    };
    static g(a: XmlPartManagerBase, b: string, c: Nullable$1<ST_FilterOperator>, d: string): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_IgnoredError extends Base {
    static $t: Type;
    private b;
    private q;
    private aa;
    private y;
    private s;
    private u;
    private ac;
    private o;
    private w;
    private m;
    constructor();
    a: ST_Sqref;
    p: Nullable$1<boolean>;
    z: Nullable$1<boolean>;
    x: Nullable$1<boolean>;
    r: Nullable$1<boolean>;
    t: Nullable$1<boolean>;
    ab: Nullable$1<boolean>;
    n: Nullable$1<boolean>;
    v: Nullable$1<boolean>;
    l: Nullable$1<boolean>;
    static ae(a: XmlPartManagerBase, b: ST_Sqref, c: Nullable$1<boolean>, d: Nullable$1<boolean>, e: Nullable$1<boolean>, f: Nullable$1<boolean>, g: Nullable$1<boolean>, h: Nullable$1<boolean>, i: Nullable$1<boolean>, j: Nullable$1<boolean>, k: Nullable$1<boolean>): {
        p1: ST_Sqref;
        p2: Nullable$1<boolean>;
        p3: Nullable$1<boolean>;
        p4: Nullable$1<boolean>;
        p5: Nullable$1<boolean>;
        p6: Nullable$1<boolean>;
        p7: Nullable$1<boolean>;
        p8: Nullable$1<boolean>;
        p9: Nullable$1<boolean>;
        p10: Nullable$1<boolean>;
    };
    static af(a: XmlPartManagerBase, b: string, c: Nullable$1<boolean>, d: Nullable$1<boolean>, e: Nullable$1<boolean>, f: Nullable$1<boolean>, g: Nullable$1<boolean>, h: Nullable$1<boolean>, i: Nullable$1<boolean>, j: Nullable$1<boolean>, k: Nullable$1<boolean>, l: ST_Sqref): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class ST_Sqref extends Base {
    static $t: Type;
    private c;
    d: List$1<string>;
    static a(a: string): ST_Sqref;
    e(): string;
    static b(a: string): ST_Sqref;
    f(): string;
}
/**
 * @hidden
 */
export declare class CT_DdeValues extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    a: List$1<CT_DdeValue>;
    c: Nullable$1<number>;
    b: Nullable$1<number>;
    static g(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<number>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<number>;
    };
    static h(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>, d?: Nullable$1<number>): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_DdeValue extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    d: string;
    b: Nullable$1<ST_DdeValueType>;
    static e(a: XmlPartManagerBase, b: Nullable$1<ST_DdeValueType>): {
        p1: Nullable$1<ST_DdeValueType>;
    };
    static f(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_DdeValueType>): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_PivotArea extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    private b;
    private af;
    private g;
    private m;
    private z;
    private x;
    private v;
    private i;
    private ab;
    private aj;
    private k;
    private ad;
    private ah;
    constructor();
    c: CT_PivotAreaReferences;
    a: CT_ExtensionList;
    ae: Nullable$1<number>;
    f: ST_PivotAreaType;
    l: boolean;
    y: boolean;
    w: boolean;
    u: boolean;
    h: boolean;
    aa: boolean;
    ai: string;
    j: boolean;
    ac: Nullable$1<ST_Axis>;
    ag: Nullable$1<number>;
    static al(a: XmlPartManagerBase, b: Nullable$1<number>, c: ST_PivotAreaType, d: boolean, e: boolean, f: boolean, g: boolean, h: boolean, i: boolean, j: string, k: boolean, l: Nullable$1<ST_Axis>, m: Nullable$1<number>): {
        p1: Nullable$1<number>;
        p2: ST_PivotAreaType;
        p3: boolean;
        p4: boolean;
        p5: boolean;
        p6: boolean;
        p7: boolean;
        p8: boolean;
        p9: string;
        p10: boolean;
        p11: Nullable$1<ST_Axis>;
        p12: Nullable$1<number>;
    };
    static am(a: XmlPartManagerBase, b: string, c: Nullable$1<ST_Axis>, d: Nullable$1<number>, e: Nullable$1<number>, f: boolean, g: boolean, h: boolean, i: boolean, j: boolean, k: boolean, l: string, m: boolean, n: ST_PivotAreaType): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_PivotAreas extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private e;
    constructor();
    a: List$1<CT_PivotArea>;
    d: number;
    static f(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static g(a: XmlPartManagerBase, b: string, c: number): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_PivotAreaReference extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    af: List$1<CT_Index>;
    a: CT_ExtensionList;
    ag: Nullable$1<number>;
    ai: number;
    z: boolean;
    c: boolean;
    y: boolean;
    r: boolean;
    ac: boolean;
    d: boolean;
    b: boolean;
    v: boolean;
    w: boolean;
    x: boolean;
    e: boolean;
    ab: boolean;
    aa: boolean;
    ae: boolean;
    ad: boolean;
    static aj(a: XmlPartManagerBase, b: Nullable$1<number>, c: number, d: boolean, e: boolean, f: boolean, g: boolean, h: boolean, i: boolean, j: boolean, k: boolean, l: boolean, m: boolean, n: boolean, o: boolean, p: boolean, q: boolean, r: boolean): {
        p1: Nullable$1<number>;
        p2: number;
        p3: boolean;
        p4: boolean;
        p5: boolean;
        p6: boolean;
        p7: boolean;
        p8: boolean;
        p9: boolean;
        p10: boolean;
        p11: boolean;
        p12: boolean;
        p13: boolean;
        p14: boolean;
        p15: boolean;
        p16: boolean;
        p17: boolean;
    };
    static ak(a: XmlPartManagerBase, b: string, c: Nullable$1<number>, d: boolean, e: boolean, f: number, g: boolean, h: boolean, i: boolean, j: boolean, k: boolean, l: boolean, m: boolean, n: boolean, o: boolean, p: boolean, q: boolean, r: boolean, s: boolean): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_PivotAreaReferences extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    a: List$1<CT_PivotAreaReference>;
    c: number;
    static d(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static e(a: XmlPartManagerBase, b: string, c: number): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Index extends Base {
    static $t: Type;
    b: number;
    static c(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static d(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ConditionalFormats extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    a: List$1<CT_ConditionalFormat>;
    c: number;
    static e(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static f(a: XmlPartManagerBase, b: string, c: number): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ConditionalFormat extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    b: CT_PivotAreas;
    a: CT_ExtensionList;
    d: ST_Scope;
    f: ST_Type;
    h: number;
    static i(a: XmlPartManagerBase, b: ST_Scope, c: ST_Type, d: number): {
        p1: ST_Scope;
        p2: ST_Type;
        p3: number;
    };
    static j(a: XmlPartManagerBase, b: string, c: number, d: ST_Scope, e: ST_Type): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_DataValidation extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    p: string;
    q: string;
    m: Nullable$1<ST_DataValidationType>;
    g: Nullable$1<ST_DataValidationErrorStyle>;
    h: Nullable$1<ST_DataValidationImeMode>;
    i: Nullable$1<ST_DataValidationOperator>;
    f: Nullable$1<boolean>;
    j: Nullable$1<boolean>;
    l: Nullable$1<boolean>;
    k: Nullable$1<boolean>;
    o: string;
    n: string;
    s: string;
    r: string;
    a: ST_Sqref;
    static u(a: XmlPartManagerBase, b: Nullable$1<ST_DataValidationType>, c: Nullable$1<ST_DataValidationErrorStyle>, d: Nullable$1<ST_DataValidationImeMode>, e: Nullable$1<ST_DataValidationOperator>, f: Nullable$1<boolean>, g: Nullable$1<boolean>, h: Nullable$1<boolean>, i: Nullable$1<boolean>, j: string, k: string, l: string, m: string, n: ST_Sqref): {
        p1: Nullable$1<ST_DataValidationType>;
        p2: Nullable$1<ST_DataValidationErrorStyle>;
        p3: Nullable$1<ST_DataValidationImeMode>;
        p4: Nullable$1<ST_DataValidationOperator>;
        p5: Nullable$1<boolean>;
        p6: Nullable$1<boolean>;
        p7: Nullable$1<boolean>;
        p8: Nullable$1<boolean>;
        p9: string;
        p10: string;
        p11: string;
        p12: string;
        p13: ST_Sqref;
    };
    static v(a: XmlPartManagerBase, b: string, c: Nullable$1<ST_DataValidationOperator>, d: Nullable$1<boolean>, e: string, f: Nullable$1<ST_DataValidationErrorStyle>, g: string, h: Nullable$1<ST_DataValidationImeMode>, i: string, j: string, k: Nullable$1<boolean>, l: Nullable$1<boolean>, m: Nullable$1<boolean>, n: Nullable$1<ST_DataValidationType>, o: ST_Sqref): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ColorScale extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    a: List$1<CT_Cfvo>;
    b: List$1<ColorInfo>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_CfRule extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    k: List$1<string>;
    b: CT_ColorScale;
    c: CT_DataBar;
    d: CT_IconSet;
    a: CT_ExtensionList;
    e: ST_CfType;
    o: Nullable$1<number>;
    l: number;
    u: Nullable$1<boolean>;
    m: Nullable$1<boolean>;
    r: Nullable$1<boolean>;
    n: Nullable$1<boolean>;
    q: Nullable$1<ST_ConditionalFormattingOperator>;
    w: string;
    v: Nullable$1<ST_TimePeriod>;
    s: Nullable$1<number>;
    t: Nullable$1<number>;
    p: Nullable$1<boolean>;
    static y(a: XmlPartManagerBase, b: ST_CfType, c: Nullable$1<number>, d: number, e: Nullable$1<boolean>, f: Nullable$1<boolean>, g: Nullable$1<boolean>, h: Nullable$1<boolean>, i: Nullable$1<ST_ConditionalFormattingOperator>, j: string, k: Nullable$1<ST_TimePeriod>, l: Nullable$1<number>, m: Nullable$1<number>, n: Nullable$1<boolean>): {
        p1: ST_CfType;
        p2: Nullable$1<number>;
        p3: number;
        p4: Nullable$1<boolean>;
        p5: Nullable$1<boolean>;
        p6: Nullable$1<boolean>;
        p7: Nullable$1<boolean>;
        p8: Nullable$1<ST_ConditionalFormattingOperator>;
        p9: string;
        p10: Nullable$1<ST_TimePeriod>;
        p11: Nullable$1<number>;
        p12: Nullable$1<number>;
        p13: Nullable$1<boolean>;
    };
    static z(a: XmlPartManagerBase, b: string, c: Nullable$1<ST_ConditionalFormattingOperator>, d: Nullable$1<boolean>, e: Nullable$1<boolean>, f: Nullable$1<number>, g: Nullable$1<boolean>, h: Nullable$1<boolean>, i: Nullable$1<number>, j: Nullable$1<number>, k: Nullable$1<boolean>, l: string, m: Nullable$1<ST_TimePeriod>, n: number, o: ST_CfType): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Cfvo extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    a: CT_ExtensionList;
    b: ST_CfvoType;
    f: string;
    d: Nullable$1<boolean>;
    static g(a: XmlPartManagerBase, b: ST_CfvoType, c: string, d: Nullable$1<boolean>): {
        p1: ST_CfvoType;
        p2: string;
        p3: Nullable$1<boolean>;
    };
    static h(a: XmlPartManagerBase, b: string, c: Nullable$1<boolean>, d: string, e: ST_CfvoType): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_DataBar extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    c: List$1<CT_Cfvo>;
    a: ColorInfo;
    e: Nullable$1<number>;
    d: Nullable$1<number>;
    f: Nullable$1<boolean>;
    static j(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<number>, d: Nullable$1<boolean>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<number>;
        p3: Nullable$1<boolean>;
    };
    static k(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>, d?: Nullable$1<number>, e?: Nullable$1<boolean>): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_IconSet extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    e: List$1<CT_Cfvo>;
    f: Nullable$1<ST_IconSetType>;
    h: Nullable$1<boolean>;
    d: boolean;
    g: Nullable$1<boolean>;
    static j(a: XmlPartManagerBase, b: Nullable$1<ST_IconSetType>, c: Nullable$1<boolean>, d: boolean, e: Nullable$1<boolean>): {
        p1: Nullable$1<ST_IconSetType>;
        p2: Nullable$1<boolean>;
        p3: boolean;
        p4: Nullable$1<boolean>;
    };
    static k(a: XmlPartManagerBase, b: string, c: Nullable$1<ST_IconSetType>, d: Nullable$1<boolean>, e: Nullable$1<boolean>, f: boolean): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Font extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    i: CT_FontName;
    l: CT_IntProperty;
    m: CT_IntProperty;
    b: CT_BooleanProperty;
    e: CT_BooleanProperty;
    h: CT_BooleanProperty;
    f: CT_BooleanProperty;
    g: CT_BooleanProperty;
    c: CT_BooleanProperty;
    d: CT_BooleanProperty;
    a: ColorInfo;
    k: CT_FontSize;
    n: CT_UnderlineProperty;
    o: CT_VerticalAlignFontProperty;
    j: CT_FontScheme_SML;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Dxf extends Base implements ISupportSetProperty {
    static $t: Type;
    private l;
    private n;
    private j;
    private f;
    private d;
    private h;
    private b;
    constructor();
    k: CT_Font;
    m: CT_NumFmt;
    i: CT_Fill;
    e: CT_CellAlignment;
    c: CT_Border;
    g: CT_CellProtection;
    a: CT_ExtensionList;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_BooleanProperty extends Base {
    static $t: Type;
    constructor();
    c: Nullable$1<boolean>;
    readonly b: boolean;
    static e(a: XmlPartManagerBase, b: Nullable$1<boolean>): {
        p1: Nullable$1<boolean>;
    };
    static f(a: XmlPartManagerBase, b: string, c?: Nullable$1<boolean>): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_IntProperty extends Base {
    static $t: Type;
    a: number;
    static c(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static d(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_FontName extends Base {
    static $t: Type;
    b: string;
    static c(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static d(a: XmlPartManagerBase, b: string, c: string): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_FontScheme_SML extends Base {
    static $t: Type;
    a: ST_FontScheme;
    static c(a: XmlPartManagerBase, b: ST_FontScheme): {
        p1: ST_FontScheme;
    };
    static d(a: XmlPartManagerBase, b: string, c: ST_FontScheme): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_FontSize extends Base {
    static $t: Type;
    a: number;
    static c(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static d(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_UnderlineProperty extends Base {
    static $t: Type;
    constructor();
    a: Nullable$1<ST_UnderlineValues>;
    static c(a: XmlPartManagerBase, b: Nullable$1<ST_UnderlineValues>): {
        p1: Nullable$1<ST_UnderlineValues>;
    };
    static d(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_UnderlineValues>): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_VerticalAlignFontProperty extends Base {
    static $t: Type;
    a: ST_VerticalAlignRun;
    static c(a: XmlPartManagerBase, b: ST_VerticalAlignRun): {
        p1: ST_VerticalAlignRun;
    };
    static d(a: XmlPartManagerBase, b: string, c: ST_VerticalAlignRun): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ConditionalFormatting extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    e: List$1<CT_CfRule>;
    a: CT_ExtensionList;
    d: boolean;
    b: ST_Sqref;
    static g(a: XmlPartManagerBase, b: boolean, c: ST_Sqref): {
        p1: boolean;
        p2: ST_Sqref;
    };
    static h(a: XmlPartManagerBase, b: string, c: boolean, d: ST_Sqref): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ProtectedRange extends Base {
    static $t: Type;
    constructor();
    c: string;
    a: ST_Sqref;
    b: string;
    d: string;
    static f(a: XmlPartManagerBase, b: string, c: ST_Sqref, d: string, e: string): {
        p1: string;
        p2: ST_Sqref;
        p3: string;
        p4: string;
    };
    static g(a: XmlPartManagerBase, b: string, c: string, d: string, e: string, f: ST_Sqref): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_NumFmt extends Base {
    static $t: Type;
    c: number;
    a: string;
    static d(a: XmlPartManagerBase, b: number, c: string): {
        p1: number;
        p2: string;
    };
    static e(a: XmlPartManagerBase, b: string, c: string, d: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Fill extends Base implements ISupportSetProperty {
    static $t: Type;
    b: CT_PatternFill;
    a: CT_GradientFill;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GradientFill extends Base implements ISupportSetProperty {
    static $t: Type;
    private a;
    constructor();
    b: List$1<CT_GradientStop>;
    m: Nullable$1<ST_GradientType>;
    i: Nullable$1<number>;
    j: Nullable$1<number>;
    k: Nullable$1<number>;
    l: Nullable$1<number>;
    h: Nullable$1<number>;
    static o(a: XmlPartManagerBase, b: Nullable$1<ST_GradientType>, c: Nullable$1<number>, d: Nullable$1<number>, e: Nullable$1<number>, f: Nullable$1<number>, g: Nullable$1<number>): {
        p1: Nullable$1<ST_GradientType>;
        p2: Nullable$1<number>;
        p3: Nullable$1<number>;
        p4: Nullable$1<number>;
        p5: Nullable$1<number>;
        p6: Nullable$1<number>;
    };
    static p(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>, d?: Nullable$1<number>, e?: Nullable$1<number>, f?: Nullable$1<number>, g?: Nullable$1<number>, h?: Nullable$1<ST_GradientType>): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_PatternFill extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    b: ColorInfo;
    a: ColorInfo;
    c: Nullable$1<ST_PatternType>;
    static e(a: XmlPartManagerBase, b: Nullable$1<ST_PatternType>): {
        p1: Nullable$1<ST_PatternType>;
    };
    static f(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_PatternType>): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_CellAlignment extends Base {
    static $t: Type;
    a: Nullable$1<ST_HorizontalAlignment>;
    h: Nullable$1<ST_VerticalAlignment>;
    g: Nullable$1<number>;
    i: Nullable$1<boolean>;
    b: Nullable$1<number>;
    e: Nullable$1<number>;
    c: Nullable$1<boolean>;
    f: Nullable$1<boolean>;
    d: Nullable$1<number>;
    static k(a: XmlPartManagerBase, b: Nullable$1<ST_HorizontalAlignment>, c: Nullable$1<ST_VerticalAlignment>, d: Nullable$1<number>, e: Nullable$1<boolean>, f: Nullable$1<number>, g: Nullable$1<number>, h: Nullable$1<boolean>, i: Nullable$1<boolean>, j: Nullable$1<number>): {
        p1: Nullable$1<ST_HorizontalAlignment>;
        p2: Nullable$1<ST_VerticalAlignment>;
        p3: Nullable$1<number>;
        p4: Nullable$1<boolean>;
        p5: Nullable$1<number>;
        p6: Nullable$1<number>;
        p7: Nullable$1<boolean>;
        p8: Nullable$1<boolean>;
        p9: Nullable$1<number>;
    };
    static l(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_HorizontalAlignment>, d?: Nullable$1<number>, e?: Nullable$1<boolean>, f?: Nullable$1<number>, g?: Nullable$1<number>, h?: Nullable$1<boolean>, i?: Nullable$1<number>, j?: Nullable$1<ST_VerticalAlignment>, k?: Nullable$1<boolean>): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Border extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    d: CT_BorderPr;
    e: CT_BorderPr;
    f: CT_BorderPr;
    a: CT_BorderPr;
    b: CT_BorderPr;
    g: CT_BorderPr;
    c: CT_BorderPr;
    j: Nullable$1<boolean>;
    i: Nullable$1<boolean>;
    k: Nullable$1<boolean>;
    static m(a: XmlPartManagerBase, b: Nullable$1<boolean>, c: Nullable$1<boolean>, d: Nullable$1<boolean>): {
        p1: Nullable$1<boolean>;
        p2: Nullable$1<boolean>;
        p3: Nullable$1<boolean>;
    };
    static n(a: XmlPartManagerBase, b: string, c?: Nullable$1<boolean>, d?: Nullable$1<boolean>, e?: Nullable$1<boolean>): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_BorderPr extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    a: ColorInfo;
    b: Nullable$1<ST_BorderStyle>;
    static d(a: XmlPartManagerBase, b: Nullable$1<ST_BorderStyle>): {
        p1: Nullable$1<ST_BorderStyle>;
    };
    static e(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_BorderStyle>): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_CellProtection extends Base {
    static $t: Type;
    b: Nullable$1<boolean>;
    a: Nullable$1<boolean>;
    static d(a: XmlPartManagerBase, b: Nullable$1<boolean>, c: Nullable$1<boolean>): {
        p1: Nullable$1<boolean>;
        p2: Nullable$1<boolean>;
    };
    static e(a: XmlPartManagerBase, b: string, c?: Nullable$1<boolean>, d?: Nullable$1<boolean>): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class ST_CellSpans extends Base {
    static $t: Type;
    constructor();
    c: List$1<string>;
    static a(a: string): ST_CellSpans;
    d(): string;
    static b(a: string): ST_CellSpans;
    e(): string;
}
/**
 * @hidden
 */
export declare class SMLAttributes extends Base {
    static $t: Type;
}
/**
 * @hidden
 */
export declare class CT_AudioFile extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: CT_OfficeArtExtensionList;
    c: string;
    static f(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static g(a: XmlPartManagerBase, b: string, c: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_VideoFile extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: CT_OfficeArtExtensionList;
    c: string;
    static f(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static g(a: XmlPartManagerBase, b: string, c: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_QuickTimeFile extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: CT_OfficeArtExtensionList;
    c: string;
    static f(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static g(a: XmlPartManagerBase, b: string, c: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_AudioCDTime extends Base {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: number;
    c: Nullable$1<number>;
    static g(a: XmlPartManagerBase, b: number, c: Nullable$1<number>): {
        p1: number;
        p2: Nullable$1<number>;
    };
    static h(a: XmlPartManagerBase, b: string, c: Nullable$1<number>, d: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_AudioCD extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    private b;
    private f;
    constructor();
    c: CT_AudioCDTime;
    a: CT_AudioCDTime;
    e: CT_OfficeArtExtensionList;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ColorScheme extends Base implements ISupportSetProperty {
    static $t: Type;
    private n;
    private v;
    private p;
    private x;
    private b;
    private d;
    private f;
    private h;
    private j;
    private l;
    private t;
    private r;
    private z;
    private ab;
    constructor();
    m: CT_Color_DML;
    u: CT_Color_DML;
    o: CT_Color_DML;
    w: CT_Color_DML;
    a: CT_Color_DML;
    c: CT_Color_DML;
    e: CT_Color_DML;
    g: CT_Color_DML;
    i: CT_Color_DML;
    k: CT_Color_DML;
    s: CT_Color_DML;
    q: CT_Color_DML;
    y: CT_OfficeArtExtensionList;
    aa: string;
    static ad(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static ae(a: XmlPartManagerBase, b: string, c: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_CustomColor extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    private a;
    constructor();
    c: string;
    readonly b: EG_ColorChoice_DML;
    static f(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static g(a: XmlPartManagerBase, b: string, c?: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_SupplementalFont extends Base {
    static $t: Type;
    private b;
    private e;
    a: string;
    d: string;
    static f(a: XmlPartManagerBase, b: string, c: string): {
        p1: string;
        p2: string;
    };
    static g(a: XmlPartManagerBase, b: string, c: string, d: string): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_CustomColorList extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    constructor();
    a: List$1<CT_CustomColor>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_FontCollection extends Base implements ISupportSetProperty {
    static $t: Type;
    private h;
    private f;
    private d;
    private j;
    private b;
    constructor();
    g: CT_TextFont;
    e: CT_TextFont;
    c: CT_TextFont;
    i: List$1<CT_SupplementalFont>;
    a: CT_OfficeArtExtensionList;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_EffectStyleItem extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    private e;
    constructor();
    a: CT_Scene3D;
    c: CT_Shape3D;
    readonly f: EG_EffectProperties;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_FontScheme extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    private f;
    private h;
    constructor();
    a: CT_FontCollection;
    c: CT_FontCollection;
    e: CT_OfficeArtExtensionList;
    g: string;
    static j(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static k(a: XmlPartManagerBase, b: string, c: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_EffectStyleList extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    constructor();
    c: List$1<CT_EffectStyleItem>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    static e(a: CT_EffectStyleList): List$1<CT_EffectStyleItem>;
    static a(a: List$1<CT_EffectStyleItem>): CT_EffectStyleList;
}
/**
 * @hidden
 */
export declare class CT_BaseStyles extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    private h;
    private f;
    constructor();
    a: CT_ColorScheme;
    c: CT_FontScheme;
    g: CT_StyleMatrix;
    e: CT_OfficeArtExtensionList;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_OfficeArtExtension extends Base {
    static $t: Type;
    private h;
    private c;
    g: XmlElement;
    b: string;
    static d(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static f(a: XmlPartManagerBase, b: string, c: string): void;
    toString(): string;
    e(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
}
/**
 * @hidden
 */
export declare class CT_Ratio extends Base {
    static $t: Type;
    private d;
    private b;
    c: number;
    a: number;
    static f(a: XmlPartManagerBase, b: number, c: number): {
        p1: number;
        p2: number;
    };
    static g(a: XmlPartManagerBase, b: string, c: number, d: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GammaTransform extends Base {
    static $t: Type;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_InverseGammaTransform extends Base {
    static $t: Type;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_OfficeArtExtensionList extends Base implements ISupportSetProperty {
    static $t: Type;
    private a;
    constructor();
    readonly b: EG_OfficeArtExtensionList;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
}
/**
 * @hidden
 */
export declare class CT_Scale2D extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: CT_Ratio;
    c: CT_Ratio;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Point3D extends Base {
    static $t: Type;
    private b;
    private d;
    private f;
    a: number;
    c: number;
    e: number;
    static h(a: XmlPartManagerBase, b: number, c: number, d: number): {
        p1: number;
        p2: number;
        p3: number;
    };
    static i(a: XmlPartManagerBase, b: string, c: number, d: number, e: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Vector3D extends Base {
    static $t: Type;
    private c;
    private e;
    private g;
    b: number;
    d: number;
    f: number;
    static a(a: XmlPartManagerBase): CT_Vector3D;
    static i(a: XmlPartManagerBase, b: number, c: number, d: number): {
        p1: number;
        p2: number;
        p3: number;
    };
    static j(a: XmlPartManagerBase, b: string, c: number, d: number, e: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_SphereCoords extends Base {
    static $t: Type;
    private b;
    private d;
    private f;
    a: number;
    c: number;
    e: number;
    static h(a: XmlPartManagerBase, b: number, c: number, d: number): {
        p1: number;
        p2: number;
        p3: number;
    };
    static i(a: XmlPartManagerBase, b: string, c: number, d: number, e: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Color_DML extends Base implements ISupportSetProperty {
    static $t: Type;
    private a;
    constructor();
    readonly b: EG_ColorChoice_DML;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
}
/**
 * @hidden
 */
export declare class CT_ColorMRU extends Base implements ISupportSetProperty {
    static $t: Type;
    private a;
    constructor();
    readonly b: EG_ColorChoice_DML;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_AnimationDgmElement extends Base {
    static $t: Type;
    private f;
    private c;
    constructor();
    e: string;
    b: Nullable$1<ST_DgmBuildStep>;
    static h(a: XmlPartManagerBase, b: string, c: Nullable$1<ST_DgmBuildStep>): {
        p1: string;
        p2: Nullable$1<ST_DgmBuildStep>;
    };
    static i(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_DgmBuildStep>, d?: string): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_AnimationChartElement extends Base {
    static $t: Type;
    private h;
    private f;
    private b;
    constructor();
    g: Nullable$1<number>;
    e: Nullable$1<number>;
    a: ST_ChartBuildStep;
    static j(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<number>, d: ST_ChartBuildStep): {
        p1: Nullable$1<number>;
        p2: Nullable$1<number>;
        p3: ST_ChartBuildStep;
    };
    static k(a: XmlPartManagerBase, b: string, c: Nullable$1<number>, d: Nullable$1<number>, e: ST_ChartBuildStep): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_AnimationElementChoice extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    item: any;
    toString(): string;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class CT_AnimationDgmBuildProperties extends Base {
    static $t: Type;
    private b;
    private e;
    constructor();
    a: ST_AnimationDgmBuildType;
    d: Nullable$1<boolean>;
    static g(a: XmlPartManagerBase, b: ST_AnimationDgmBuildType, c: Nullable$1<boolean>): {
        p1: ST_AnimationDgmBuildType;
        p2: Nullable$1<boolean>;
    };
    static h(a: XmlPartManagerBase, b: string, c?: ST_AnimationDgmBuildType, d?: Nullable$1<boolean>): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_AnimationChartBuildProperties extends Base {
    static $t: Type;
    private b;
    private e;
    constructor();
    a: ST_AnimationChartBuildType;
    d: Nullable$1<boolean>;
    static g(a: XmlPartManagerBase, b: ST_AnimationChartBuildType, c: Nullable$1<boolean>): {
        p1: ST_AnimationChartBuildType;
        p2: Nullable$1<boolean>;
    };
    static h(a: XmlPartManagerBase, b: string, c?: Nullable$1<boolean>, d?: ST_AnimationChartBuildType): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_AnimationGraphicalObjectBuildProperties extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    item: any;
    toString(): string;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class ST_AnimationDgmBuildType extends Base {
    static $t: Type;
    private c;
    private d;
    e: Nullable$1<ST_AnimationBuildType>;
    f: Nullable$1<ST_AnimationDgmOnlyBuildType>;
    static a(a: string): ST_AnimationDgmBuildType;
    g(): string;
    static b(a: string): ST_AnimationDgmBuildType;
    h(): string;
}
/**
 * @hidden
 */
export declare class ST_AnimationChartBuildType extends Base {
    static $t: Type;
    private c;
    private d;
    e: Nullable$1<ST_AnimationBuildType>;
    f: Nullable$1<ST_AnimationChartOnlyBuildType>;
    static a(a: string): ST_AnimationChartBuildType;
    g(): string;
    static b(a: string): ST_AnimationChartBuildType;
    h(): string;
}
/**
 * @hidden
 */
export declare class CT_BackgroundFormatting extends Base implements ISupportSetProperty {
    static $t: Type;
    private c;
    private a;
    constructor();
    readonly d: EG_FillProperties;
    readonly b: EG_EffectProperties;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_WholeE2oFormatting extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private c;
    constructor();
    a: CT_LineProperties_DML;
    readonly d: EG_EffectProperties;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GvmlUseShapeRectangle extends Base {
    static $t: Type;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GvmlTextShape extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    private f;
    private b;
    constructor();
    c: CT_TextBody_DML;
    item: any;
    a: CT_OfficeArtExtensionList;
    toString(): string;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class CT_GvmlShapeNonVisual extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: CT_NonVisualDrawingProps;
    c: CT_NonVisualDrawingShapeProps;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GvmlShape extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private h;
    private d;
    private j;
    private f;
    constructor();
    a: CT_GvmlShapeNonVisual;
    g: CT_ShapeProperties_DML;
    c: CT_GvmlTextShape;
    i: CT_ShapeStyle;
    e: CT_OfficeArtExtensionList;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GvmlConnectorNonVisual extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    private b;
    constructor();
    c: CT_NonVisualDrawingProps;
    a: CT_NonVisualConnectorProperties;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GvmlConnector extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private f;
    private h;
    private d;
    constructor();
    a: CT_GvmlConnectorNonVisual;
    e: CT_ShapeProperties_DML;
    g: CT_ShapeStyle;
    c: CT_OfficeArtExtensionList;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GvmlPictureNonVisual extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: CT_NonVisualDrawingProps;
    c: CT_NonVisualPictureProperties;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GvmlPicture extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    private b;
    private h;
    private j;
    private f;
    constructor();
    c: CT_GvmlPictureNonVisual;
    a: CT_BlipFillProperties_DML;
    g: CT_ShapeProperties_DML;
    i: CT_ShapeStyle;
    e: CT_OfficeArtExtensionList;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GvmlGraphicFrameNonVisual extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: CT_NonVisualDrawingProps;
    c: CT_NonVisualGraphicFrameProperties;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GvmlGraphicalObjectFrame extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private f;
    private h;
    private d;
    constructor();
    a: CT_GvmlGraphicFrameNonVisual;
    e: CT_GraphicalObject;
    g: CT_Transform2D;
    c: CT_OfficeArtExtensionList;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GvmlGroupShapeNonVisual extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: CT_NonVisualDrawingProps;
    c: CT_NonVisualGroupDrawingShapeProps;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GvmlGroupShape extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private f;
    private h;
    private d;
    constructor();
    a: CT_GvmlGroupShapeNonVisual;
    e: CT_GroupShapeProperties;
    g: List$1<any>;
    c: CT_OfficeArtExtensionList;
    toString(): string;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class CT_Camera extends Base implements ISupportSetProperty {
    static $t: Type;
    private c;
    private e;
    private h;
    private j;
    constructor();
    b: CT_SphereCoords;
    d: ST_PresetCameraType;
    g: Nullable$1<number>;
    i: Nullable$1<number>;
    static a(a: XmlPartManagerBase): CT_Camera;
    static l(a: XmlPartManagerBase, b: ST_PresetCameraType, c: Nullable$1<number>, d: Nullable$1<number>): {
        p1: ST_PresetCameraType;
        p2: Nullable$1<number>;
        p3: Nullable$1<number>;
    };
    static m(a: XmlPartManagerBase, b: string, c: Nullable$1<number>, d: Nullable$1<number>, e: ST_PresetCameraType): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_LightRig extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private f;
    private d;
    constructor();
    a: CT_SphereCoords;
    e: ST_LightRigType;
    c: ST_LightRigDirection;
    static h(a: XmlPartManagerBase, b: ST_LightRigType, c: ST_LightRigDirection): {
        p1: ST_LightRigType;
        p2: ST_LightRigDirection;
    };
    static i(a: XmlPartManagerBase, b: string, c: ST_LightRigDirection, d: ST_LightRigType): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Scene3D extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    private f;
    private b;
    private h;
    constructor();
    c: CT_Camera;
    e: CT_LightRig;
    a: CT_Backdrop;
    g: CT_OfficeArtExtensionList;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Backdrop extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    private f;
    private h;
    private b;
    constructor();
    c: CT_Point3D;
    e: CT_Vector3D;
    g: CT_Vector3D;
    a: CT_OfficeArtExtensionList;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Bevel extends Base {
    static $t: Type;
    private j;
    private f;
    private h;
    constructor();
    i: Nullable$1<number>;
    e: Nullable$1<number>;
    g: Nullable$1<ST_BevelPresetType>;
    static a(a: XmlPartManagerBase): CT_Bevel;
    static l(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<number>, d: Nullable$1<ST_BevelPresetType>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<number>;
        p3: Nullable$1<ST_BevelPresetType>;
    };
    static m(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>, d?: Nullable$1<ST_BevelPresetType>, e?: Nullable$1<number>): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Shape3D extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    private b;
    private h;
    private f;
    private j;
    private w;
    private s;
    private q;
    private u;
    constructor();
    c: CT_Bevel;
    a: CT_Bevel;
    g: CT_Color_DML;
    e: CT_Color_DML;
    i: CT_OfficeArtExtensionList;
    v: Nullable$1<number>;
    r: Nullable$1<number>;
    p: Nullable$1<number>;
    t: Nullable$1<ST_PresetMaterialType>;
    static k(a: XmlPartManagerBase): CT_Shape3D;
    static y(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<number>, d: Nullable$1<number>, e: Nullable$1<ST_PresetMaterialType>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<number>;
        p3: Nullable$1<number>;
        p4: Nullable$1<ST_PresetMaterialType>;
    };
    static z(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>, d?: Nullable$1<number>, e?: Nullable$1<ST_PresetMaterialType>, f?: Nullable$1<number>): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_FlatText extends Base {
    static $t: Type;
    private c;
    constructor();
    b: Nullable$1<number>;
    static e(a: XmlPartManagerBase, b: Nullable$1<number>): {
        p1: Nullable$1<number>;
    };
    static f(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_AlphaBiLevelEffect extends Base {
    static $t: Type;
    private b;
    a: number;
    static d(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static e(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TransformEffect extends Base {
    static $t: Type;
    private m;
    private o;
    private i;
    private k;
    private q;
    private s;
    constructor();
    l: Nullable$1<number>;
    n: Nullable$1<number>;
    h: Nullable$1<number>;
    j: Nullable$1<number>;
    p: Nullable$1<number>;
    r: Nullable$1<number>;
    static a(a: XmlPartManagerBase): CT_TransformEffect;
    static u(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<number>, d: Nullable$1<number>, e: Nullable$1<number>, f: Nullable$1<number>, g: Nullable$1<number>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<number>;
        p3: Nullable$1<number>;
        p4: Nullable$1<number>;
        p5: Nullable$1<number>;
        p6: Nullable$1<number>;
    };
    static v(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>, d?: Nullable$1<number>, e?: Nullable$1<number>, f?: Nullable$1<number>, g?: Nullable$1<number>, h?: Nullable$1<number>): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TintEffect extends Base {
    static $t: Type;
    private f;
    private d;
    constructor();
    e: Nullable$1<number>;
    c: Nullable$1<number>;
    static h(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<number>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<number>;
    };
    static i(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>, d?: Nullable$1<number>): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_SoftEdgesEffect extends Base {
    static $t: Type;
    private b;
    a: number;
    static d(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static e(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_RelativeOffsetEffect extends Base {
    static $t: Type;
    private d;
    private f;
    constructor();
    c: Nullable$1<number>;
    e: Nullable$1<number>;
    static h(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<number>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<number>;
    };
    static i(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>, d?: Nullable$1<number>): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ReflectionEffect extends Base {
    static $t: Type;
    private r;
    private aj;
    private al;
    private x;
    private z;
    private v;
    private t;
    private ab;
    private an;
    private ap;
    private ad;
    private af;
    private p;
    private ah;
    constructor();
    q: Nullable$1<number>;
    ai: Nullable$1<number>;
    ak: Nullable$1<number>;
    w: Nullable$1<number>;
    y: Nullable$1<number>;
    u: Nullable$1<number>;
    s: Nullable$1<number>;
    aa: Nullable$1<number>;
    am: Nullable$1<number>;
    ao: Nullable$1<number>;
    ac: Nullable$1<number>;
    ae: Nullable$1<number>;
    o: Nullable$1<ST_RectAlignment>;
    ag: Nullable$1<boolean>;
    static a(a: XmlPartManagerBase): CT_ReflectionEffect;
    static ar(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<number>, d: Nullable$1<number>, e: Nullable$1<number>, f: Nullable$1<number>, g: Nullable$1<number>, h: Nullable$1<number>, i: Nullable$1<number>, j: Nullable$1<number>, k: Nullable$1<number>, l: Nullable$1<number>, m: Nullable$1<number>, n: Nullable$1<ST_RectAlignment>, o: Nullable$1<boolean>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<number>;
        p3: Nullable$1<number>;
        p4: Nullable$1<number>;
        p5: Nullable$1<number>;
        p6: Nullable$1<number>;
        p7: Nullable$1<number>;
        p8: Nullable$1<number>;
        p9: Nullable$1<number>;
        p10: Nullable$1<number>;
        p11: Nullable$1<number>;
        p12: Nullable$1<number>;
        p13: Nullable$1<ST_RectAlignment>;
        p14: Nullable$1<boolean>;
    };
    static as(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_RectAlignment>, d?: Nullable$1<number>, e?: Nullable$1<number>, f?: Nullable$1<number>, g?: Nullable$1<number>, h?: Nullable$1<number>, i?: Nullable$1<number>, j?: Nullable$1<number>, k?: Nullable$1<number>, l?: Nullable$1<boolean>, m?: Nullable$1<number>, n?: Nullable$1<number>, o?: Nullable$1<number>, p?: Nullable$1<number>): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_LuminanceEffect extends Base {
    static $t: Type;
    private d;
    private f;
    constructor();
    c: Nullable$1<number>;
    e: Nullable$1<number>;
    static h(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<number>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<number>;
    };
    static i(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>, d?: Nullable$1<number>): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_HSLEffect extends Base {
    static $t: Type;
    private e;
    private i;
    private g;
    constructor();
    d: Nullable$1<number>;
    h: Nullable$1<number>;
    f: Nullable$1<number>;
    static k(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<number>, d: Nullable$1<number>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<number>;
        p3: Nullable$1<number>;
    };
    static l(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>, d?: Nullable$1<number>, e?: Nullable$1<number>): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GrayscaleEffect extends Base {
    static $t: Type;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_FillOverlayEffect extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    private a;
    constructor();
    c: ST_BlendMode;
    readonly b: EG_FillProperties;
    static f(a: XmlPartManagerBase, b: ST_BlendMode): {
        p1: ST_BlendMode;
    };
    static h(a: XmlPartManagerBase, b: string, c: ST_BlendMode): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    g(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
}
/**
 * @hidden
 */
export declare class CT_SolidColorFillProperties extends Base implements ISupportSetProperty, ISaveToXLSX {
    static $t: Type;
    private a;
    constructor();
    readonly b: EG_ColorChoice_DML;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    save1(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    readonly elementName: string;
    saveX(a: XmlPartManagerBase, b: XmlWriteManager, c: string, d: any): void;
}
/**
 * @hidden
 */
export declare class CT_GradientFillProperties extends Base implements ISupportSetProperty, ISaveToXLSX {
    static $t: Type;
    private f;
    private d;
    private h;
    private j;
    private a;
    constructor();
    e: List$1<CT_GradientStop>;
    c: CT_RelativeRect;
    g: Nullable$1<ST_TileFlipMode>;
    i: Nullable$1<boolean>;
    readonly b: EG_ShadeProperties;
    static l(a: XmlPartManagerBase, b: Nullable$1<ST_TileFlipMode>, c: Nullable$1<boolean>): {
        p1: Nullable$1<ST_TileFlipMode>;
        p2: Nullable$1<boolean>;
    };
    static n(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_TileFlipMode>, d?: Nullable$1<boolean>): void;
    toString(): string;
    save1(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    readonly elementName: string;
    saveX(a: XmlPartManagerBase, b: XmlWriteManager, c: string, d: any): void;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class CT_LinearShadeProperties extends Base {
    static $t: Type;
    private b;
    private d;
    a: Nullable$1<number>;
    c: Nullable$1<boolean>;
    static f(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<boolean>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<boolean>;
    };
    static h(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>, d?: Nullable$1<boolean>): void;
    toString(): string;
    g(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
}
/**
 * @hidden
 */
export declare class CT_PathShadeProperties extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: CT_RelativeRect;
    c: Nullable$1<ST_PathShadeType>;
    static f(a: XmlPartManagerBase, b: Nullable$1<ST_PathShadeType>): {
        p1: Nullable$1<ST_PathShadeType>;
    };
    static h(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_PathShadeType>): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    g(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
}
/**
 * @hidden
 */
export declare class CT_PatternFillProperties extends Base implements ISupportSetProperty, ISaveToXLSX {
    static $t: Type;
    private d;
    private b;
    private f;
    constructor();
    c: CT_Color_DML;
    a: CT_Color_DML;
    e: Nullable$1<ST_PresetPatternVal>;
    static h(a: XmlPartManagerBase, b: Nullable$1<ST_PresetPatternVal>): {
        p1: Nullable$1<ST_PresetPatternVal>;
    };
    static j(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_PresetPatternVal>): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    readonly elementName: string;
    saveX(a: XmlPartManagerBase, b: XmlWriteManager, c: string, d: any): void;
    save1(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
}
/**
 * @hidden
 */
export declare class CT_FillEffect extends Base implements ISupportSetProperty {
    static $t: Type;
    private a;
    constructor();
    readonly b: EG_FillProperties;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ColorChangeEffect extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    private g;
    constructor();
    a: CT_Color_DML;
    c: CT_Color_DML;
    f: Nullable$1<boolean>;
    static i(a: XmlPartManagerBase, b: Nullable$1<boolean>): {
        p1: Nullable$1<boolean>;
    };
    static j(a: XmlPartManagerBase, b: string, c?: Nullable$1<boolean>): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_BlurEffect extends Base {
    static $t: Type;
    private f;
    private d;
    constructor();
    e: Nullable$1<number>;
    c: Nullable$1<boolean>;
    static h(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<boolean>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<boolean>;
    };
    static i(a: XmlPartManagerBase, b: string, c?: Nullable$1<boolean>, d?: Nullable$1<number>): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_BlendEffect extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: CT_EffectContainer;
    c: ST_BlendMode;
    static f(a: XmlPartManagerBase, b: ST_BlendMode): {
        p1: ST_BlendMode;
    };
    static g(a: XmlPartManagerBase, b: string, c: ST_BlendMode): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_EffectContainer extends Base implements ISupportSetProperty {
    static $t: Type;
    private f;
    private h;
    private j;
    private b;
    constructor();
    e: List$1<any>;
    g: Nullable$1<ST_EffectContainerType>;
    i: string;
    readonly c: EG_Effect;
    static a(a: XmlPartManagerBase): CT_EffectContainer;
    static l(a: XmlPartManagerBase, b: Nullable$1<ST_EffectContainerType>, c: string): {
        p1: Nullable$1<ST_EffectContainerType>;
        p2: string;
    };
    static m(a: XmlPartManagerBase, b: string, c?: string, d?: Nullable$1<ST_EffectContainerType>): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_AlphaCeilingEffect extends Base {
    static $t: Type;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_AlphaFloorEffect extends Base {
    static $t: Type;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_AlphaModulateEffect extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    constructor();
    a: CT_EffectContainer;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_AlphaModulateFixedEffect extends Base {
    static $t: Type;
    private c;
    constructor();
    b: Nullable$1<number>;
    static e(a: XmlPartManagerBase, b: Nullable$1<number>): {
        p1: Nullable$1<number>;
    };
    static f(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_AlphaOutsetEffect extends Base {
    static $t: Type;
    private c;
    constructor();
    b: Nullable$1<number>;
    static e(a: XmlPartManagerBase, b: Nullable$1<number>): {
        p1: Nullable$1<number>;
    };
    static f(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_AlphaReplaceEffect extends Base {
    static $t: Type;
    private b;
    a: number;
    static d(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static e(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_BiLevelEffect extends Base {
    static $t: Type;
    private b;
    a: number;
    static d(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static e(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_EffectReference extends Base {
    static $t: Type;
    private b;
    a: string;
    static d(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static e(a: XmlPartManagerBase, b: string, c: string): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GradientStopList extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    constructor();
    c: List$1<CT_GradientStop>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    static e(a: CT_GradientStopList): List$1<CT_GradientStop>;
    static a(a: List$1<CT_GradientStop>): CT_GradientStopList;
}
/**
 * @hidden
 */
export declare class CT_FillProperties extends Base implements ISupportSetProperty {
    static $t: Type;
    private a;
    constructor();
    readonly b: EG_FillProperties;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_EffectList extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    private f;
    private h;
    private j;
    private l;
    private n;
    private p;
    constructor();
    a: CT_BlurEffect;
    c: CT_FillOverlayEffect;
    e: CT_GlowEffect;
    g: CT_InnerShadowEffect;
    i: CT_OuterShadowEffect;
    k: CT_PresetShadowEffect;
    m: CT_ReflectionEffect;
    o: CT_SoftEdgesEffect;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_EffectProperties extends Base implements ISupportSetProperty {
    static $t: Type;
    private a;
    constructor();
    readonly b: EG_EffectProperties;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_PresetTextShape extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    private b;
    constructor();
    c: List$1<CT_GeomGuide>;
    a: ST_TextShapeType;
    static f(a: XmlPartManagerBase, b: ST_TextShapeType): {
        p1: ST_TextShapeType;
    };
    static g(a: XmlPartManagerBase, b: string, c: ST_TextShapeType): void;
    toString(): string;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class CT_ShapeProperties_DML extends Base implements ISupportSetProperty {
    static $t: Type;
    private p;
    private b;
    private f;
    private h;
    private d;
    private r;
    private m;
    private k;
    private i;
    constructor();
    o: CT_Transform2D;
    a: CT_LineProperties_DML;
    e: CT_Scene3D;
    g: CT_Shape3D;
    c: CT_OfficeArtExtensionList;
    q: Nullable$1<ST_BlackWhiteMode>;
    readonly n: EG_Geometry;
    readonly l: EG_FillProperties;
    readonly j: EG_EffectProperties;
    static t(a: XmlPartManagerBase, b: Nullable$1<ST_BlackWhiteMode>): {
        p1: Nullable$1<ST_BlackWhiteMode>;
    };
    static u(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_BlackWhiteMode>): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_StyleMatrixReference_DML extends Base implements ISupportSetProperty {
    static $t: Type;
    private e;
    private a;
    constructor();
    d: number;
    readonly b: EG_ColorChoice_DML;
    static f(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static g(a: XmlPartManagerBase, b: string, c: number): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_DefaultShapeDefinition extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    private f;
    private h;
    private j;
    private b;
    constructor();
    c: CT_ShapeProperties_DML;
    e: CT_TextBodyProperties_DML;
    g: CT_TextListStyle_DML;
    i: CT_ShapeStyle;
    a: CT_OfficeArtExtensionList;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ObjectStyleDefaults extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    private b;
    private f;
    private h;
    constructor();
    c: CT_DefaultShapeDefinition;
    a: CT_DefaultShapeDefinition;
    e: CT_DefaultShapeDefinition;
    g: CT_OfficeArtExtensionList;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_OfficeStyleSheet extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    private j;
    private h;
    private f;
    private l;
    constructor();
    a: CT_BaseStyles;
    c: CT_ObjectStyleDefaults;
    i: List$1<CT_ColorSchemeAndMapping>;
    g: List$1<CT_CustomColor>;
    e: CT_OfficeArtExtensionList;
    k: string;
    static n(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static o(a: XmlPartManagerBase, b: string, c?: string): void;
    toString(): string;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class CT_ColorSchemeAndMapping extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    private b;
    constructor();
    c: CT_ColorScheme;
    a: CT_ColorMapping;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ColorMapping extends Base implements ISupportSetProperty {
    static $t: Type;
    private c;
    private q;
    private y;
    private s;
    private aa;
    private e;
    private g;
    private i;
    private k;
    private m;
    private o;
    private w;
    private u;
    constructor();
    b: CT_OfficeArtExtensionList;
    p: ST_ColorSchemeIndex;
    x: ST_ColorSchemeIndex;
    r: ST_ColorSchemeIndex;
    z: ST_ColorSchemeIndex;
    d: ST_ColorSchemeIndex;
    f: ST_ColorSchemeIndex;
    h: ST_ColorSchemeIndex;
    j: ST_ColorSchemeIndex;
    l: ST_ColorSchemeIndex;
    n: ST_ColorSchemeIndex;
    v: ST_ColorSchemeIndex;
    t: ST_ColorSchemeIndex;
    static a(a: XmlPartManagerBase): CT_ColorMapping;
    static ac(a: XmlPartManagerBase, b: ST_ColorSchemeIndex, c: ST_ColorSchemeIndex, d: ST_ColorSchemeIndex, e: ST_ColorSchemeIndex, f: ST_ColorSchemeIndex, g: ST_ColorSchemeIndex, h: ST_ColorSchemeIndex, i: ST_ColorSchemeIndex, j: ST_ColorSchemeIndex, k: ST_ColorSchemeIndex, l: ST_ColorSchemeIndex, m: ST_ColorSchemeIndex): {
        p1: ST_ColorSchemeIndex;
        p2: ST_ColorSchemeIndex;
        p3: ST_ColorSchemeIndex;
        p4: ST_ColorSchemeIndex;
        p5: ST_ColorSchemeIndex;
        p6: ST_ColorSchemeIndex;
        p7: ST_ColorSchemeIndex;
        p8: ST_ColorSchemeIndex;
        p9: ST_ColorSchemeIndex;
        p10: ST_ColorSchemeIndex;
        p11: ST_ColorSchemeIndex;
        p12: ST_ColorSchemeIndex;
    };
    static ad(a: XmlPartManagerBase, b: string, c: ST_ColorSchemeIndex, d: ST_ColorSchemeIndex, e: ST_ColorSchemeIndex, f: ST_ColorSchemeIndex, g: ST_ColorSchemeIndex, h: ST_ColorSchemeIndex, i: ST_ColorSchemeIndex, j: ST_ColorSchemeIndex, k: ST_ColorSchemeIndex, l: ST_ColorSchemeIndex, m: ST_ColorSchemeIndex, n: ST_ColorSchemeIndex): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_BaseStylesOverride extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    private f;
    constructor();
    a: CT_ColorScheme;
    c: CT_FontScheme;
    e: CT_StyleMatrix;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_EmptyElement extends Base {
    static $t: Type;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ColorMappingOverride extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    item: any;
    toString(): string;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class CT_ColorSchemeList extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    constructor();
    a: List$1<CT_ColorSchemeAndMapping>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ClipboardStyleSheet extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: CT_BaseStyles;
    c: CT_ColorMapping;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Table extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    private f;
    constructor();
    a: CT_TableProperties;
    c: List$1<CT_TableCol>;
    e: List$1<CT_TableRow>;
    toString(): string;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class CT_TableProperties extends Base implements ISupportSetProperty {
    static $t: Type;
    private ac;
    private b;
    private aa;
    private u;
    private s;
    private y;
    private w;
    private q;
    private o;
    private e;
    private c;
    constructor();
    item: any;
    a: CT_OfficeArtExtensionList;
    z: Nullable$1<boolean>;
    t: Nullable$1<boolean>;
    r: Nullable$1<boolean>;
    x: Nullable$1<boolean>;
    v: Nullable$1<boolean>;
    p: Nullable$1<boolean>;
    n: Nullable$1<boolean>;
    readonly f: EG_FillProperties;
    readonly d: EG_EffectProperties;
    static ae(a: XmlPartManagerBase, b: Nullable$1<boolean>, c: Nullable$1<boolean>, d: Nullable$1<boolean>, e: Nullable$1<boolean>, f: Nullable$1<boolean>, g: Nullable$1<boolean>, h: Nullable$1<boolean>): {
        p1: Nullable$1<boolean>;
        p2: Nullable$1<boolean>;
        p3: Nullable$1<boolean>;
        p4: Nullable$1<boolean>;
        p5: Nullable$1<boolean>;
        p6: Nullable$1<boolean>;
        p7: Nullable$1<boolean>;
    };
    static af(a: XmlPartManagerBase, b: string, c?: Nullable$1<boolean>, d?: Nullable$1<boolean>, e?: Nullable$1<boolean>, f?: Nullable$1<boolean>, g?: Nullable$1<boolean>, h?: Nullable$1<boolean>, i?: Nullable$1<boolean>): void;
    toString(): string;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class CT_TableCol extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: CT_OfficeArtExtensionList;
    c: number;
    static f(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static g(a: XmlPartManagerBase, b: string, c: number): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TableRow extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    private b;
    private f;
    constructor();
    c: List$1<CT_TableCell>;
    a: CT_OfficeArtExtensionList;
    e: number;
    static h(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static i(a: XmlPartManagerBase, b: string, c: number): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TableCell extends Base implements ISupportSetProperty {
    static $t: Type;
    private f;
    private d;
    private b;
    private p;
    private l;
    private n;
    private r;
    constructor();
    e: CT_TextBody_DML;
    c: CT_TableCellProperties;
    a: CT_OfficeArtExtensionList;
    o: Nullable$1<number>;
    k: Nullable$1<number>;
    m: Nullable$1<boolean>;
    q: Nullable$1<boolean>;
    static t(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<number>, d: Nullable$1<boolean>, e: Nullable$1<boolean>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<number>;
        p3: Nullable$1<boolean>;
        p4: Nullable$1<boolean>;
    };
    static u(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>, d?: Nullable$1<boolean>, e?: Nullable$1<number>, f?: Nullable$1<boolean>): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TableCellProperties extends Base implements ISupportSetProperty {
    static $t: Type;
    private h;
    private j;
    private l;
    private d;
    private n;
    private f;
    private b;
    private p;
    private ag;
    private ai;
    private ak;
    private ae;
    private am;
    private aa;
    private z;
    private ac;
    private q;
    constructor();
    g: CT_LineProperties_DML;
    i: CT_LineProperties_DML;
    k: CT_LineProperties_DML;
    c: CT_LineProperties_DML;
    m: CT_LineProperties_DML;
    e: CT_LineProperties_DML;
    a: CT_Cell3D;
    o: CT_OfficeArtExtensionList;
    af: Nullable$1<number>;
    ah: Nullable$1<number>;
    aj: Nullable$1<number>;
    ad: Nullable$1<number>;
    al: Nullable$1<ST_TextVerticalType>;
    x: Nullable$1<ST_TextAnchoringType>;
    y: Nullable$1<boolean>;
    ab: Nullable$1<ST_TextHorzOverflowType>;
    readonly r: EG_FillProperties;
    static ao(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<number>, d: Nullable$1<number>, e: Nullable$1<number>, f: Nullable$1<ST_TextVerticalType>, g: Nullable$1<ST_TextAnchoringType>, h: Nullable$1<boolean>, i: Nullable$1<ST_TextHorzOverflowType>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<number>;
        p3: Nullable$1<number>;
        p4: Nullable$1<number>;
        p5: Nullable$1<ST_TextVerticalType>;
        p6: Nullable$1<ST_TextAnchoringType>;
        p7: Nullable$1<boolean>;
        p8: Nullable$1<ST_TextHorzOverflowType>;
    };
    static ap(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_TextAnchoringType>, d?: Nullable$1<boolean>, e?: Nullable$1<ST_TextHorzOverflowType>, f?: Nullable$1<number>, g?: Nullable$1<number>, h?: Nullable$1<number>, i?: Nullable$1<number>, j?: Nullable$1<ST_TextVerticalType>): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TableGrid extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    constructor();
    a: List$1<CT_TableCol>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TableStyleList extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: List$1<CT_TableStyle>;
    c: string;
    static f(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static g(a: XmlPartManagerBase, b: string, c: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TableStyle extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    private ad;
    private f;
    private j;
    private h;
    private l;
    private r;
    private n;
    private t;
    private z;
    private ab;
    private p;
    private v;
    private x;
    private b;
    private af;
    private ah;
    constructor();
    c: CT_TableBackgroundStyle;
    ac: CT_TablePartStyle;
    e: CT_TablePartStyle;
    i: CT_TablePartStyle;
    g: CT_TablePartStyle;
    k: CT_TablePartStyle;
    q: CT_TablePartStyle;
    m: CT_TablePartStyle;
    s: CT_TablePartStyle;
    y: CT_TablePartStyle;
    aa: CT_TablePartStyle;
    o: CT_TablePartStyle;
    u: CT_TablePartStyle;
    w: CT_TablePartStyle;
    a: CT_OfficeArtExtensionList;
    ae: string;
    ag: string;
    static aj(a: XmlPartManagerBase, b: string, c: string): {
        p1: string;
        p2: string;
    };
    static ak(a: XmlPartManagerBase, b: string, c: string, d: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TableBackgroundStyle extends Base implements ISupportSetProperty {
    static $t: Type;
    private c;
    private a;
    constructor();
    readonly d: EG_ThemeableFillStyle;
    readonly b: EG_ThemeableEffectStyle;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TablePartStyle extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    private b;
    constructor();
    c: CT_TableStyleTextStyle;
    a: CT_TableStyleCellStyle;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TableStyleTextStyle extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private j;
    private l;
    private e;
    private c;
    constructor();
    a: CT_OfficeArtExtensionList;
    i: Nullable$1<ST_OnOffStyleType>;
    k: Nullable$1<ST_OnOffStyleType>;
    readonly f: EG_ThemeableFontStyles;
    readonly d: EG_ColorChoice_DML;
    static n(a: XmlPartManagerBase, b: Nullable$1<ST_OnOffStyleType>, c: Nullable$1<ST_OnOffStyleType>): {
        p1: Nullable$1<ST_OnOffStyleType>;
        p2: Nullable$1<ST_OnOffStyleType>;
    };
    static o(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_OnOffStyleType>, d?: Nullable$1<ST_OnOffStyleType>): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TableStyleCellStyle extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    private b;
    private e;
    constructor();
    c: CT_TableCellBorderStyle;
    a: CT_Cell3D;
    readonly f: EG_ThemeableFillStyle;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TableCellBorderStyle extends Base implements ISupportSetProperty {
    static $t: Type;
    private j;
    private l;
    private p;
    private d;
    private f;
    private h;
    private n;
    private r;
    private b;
    constructor();
    i: CT_ThemeableLineStyle;
    k: CT_ThemeableLineStyle;
    o: CT_ThemeableLineStyle;
    c: CT_ThemeableLineStyle;
    e: CT_ThemeableLineStyle;
    g: CT_ThemeableLineStyle;
    m: CT_ThemeableLineStyle;
    q: CT_ThemeableLineStyle;
    a: CT_OfficeArtExtensionList;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ThemeableLineStyle extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    item: any;
    toString(): string;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class CT_Cell3D extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    private f;
    private i;
    constructor();
    a: CT_Bevel;
    c: CT_LightRig;
    e: CT_OfficeArtExtensionList;
    h: Nullable$1<ST_PresetMaterialType>;
    static k(a: XmlPartManagerBase, b: Nullable$1<ST_PresetMaterialType>): {
        p1: Nullable$1<ST_PresetMaterialType>;
    };
    static l(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_PresetMaterialType>): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TextListStyle_DML extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    private f;
    private h;
    private j;
    private l;
    private n;
    private p;
    private r;
    private t;
    private v;
    private b;
    constructor();
    c: CT_TextParagraphProperties_DML;
    e: CT_TextParagraphProperties_DML;
    g: CT_TextParagraphProperties_DML;
    i: CT_TextParagraphProperties_DML;
    k: CT_TextParagraphProperties_DML;
    m: CT_TextParagraphProperties_DML;
    o: CT_TextParagraphProperties_DML;
    q: CT_TextParagraphProperties_DML;
    s: CT_TextParagraphProperties_DML;
    u: CT_TextParagraphProperties_DML;
    a: CT_OfficeArtExtensionList;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TextNormalAutofit extends Base {
    static $t: Type;
    private d;
    private f;
    constructor();
    c: Nullable$1<number>;
    e: Nullable$1<number>;
    static h(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<number>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<number>;
    };
    static i(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>, d?: Nullable$1<number>): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TextShapeAutofit extends Base {
    static $t: Type;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TextNoAutofit extends Base {
    static $t: Type;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TextBodyProperties_DML extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    private f;
    private b;
    private ag;
    private am;
    private au;
    private y;
    private as;
    private aw;
    private aa;
    private ao;
    private ae;
    private q;
    private ac;
    private ak;
    private ai;
    private w;
    private o;
    private n;
    private u;
    private aq;
    private s;
    private i;
    private g;
    constructor();
    c: CT_PresetTextShape;
    e: CT_Scene3D;
    a: CT_OfficeArtExtensionList;
    af: Nullable$1<number>;
    al: Nullable$1<boolean>;
    at: Nullable$1<ST_TextVertOverflowType>;
    x: Nullable$1<ST_TextHorzOverflowType>;
    ar: Nullable$1<ST_TextVerticalType>;
    av: Nullable$1<ST_TextWrappingType>;
    z: Nullable$1<number>;
    an: Nullable$1<number>;
    ad: Nullable$1<number>;
    p: Nullable$1<number>;
    ab: Nullable$1<number>;
    aj: Nullable$1<number>;
    ah: Nullable$1<boolean>;
    v: Nullable$1<boolean>;
    l: Nullable$1<ST_TextAnchoringType>;
    m: Nullable$1<boolean>;
    t: Nullable$1<boolean>;
    ap: Nullable$1<boolean>;
    r: Nullable$1<boolean>;
    readonly j: EG_TextAutofit;
    readonly h: EG_Text3D;
    static ay(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<boolean>, d: Nullable$1<ST_TextVertOverflowType>, e: Nullable$1<ST_TextHorzOverflowType>, f: Nullable$1<ST_TextVerticalType>, g: Nullable$1<ST_TextWrappingType>, h: Nullable$1<number>, i: Nullable$1<number>, j: Nullable$1<number>, k: Nullable$1<number>, l: Nullable$1<number>, m: Nullable$1<number>, n: Nullable$1<boolean>, o: Nullable$1<boolean>, p: Nullable$1<ST_TextAnchoringType>, q: Nullable$1<boolean>, r: Nullable$1<boolean>, s: Nullable$1<boolean>, t: Nullable$1<boolean>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<boolean>;
        p3: Nullable$1<ST_TextVertOverflowType>;
        p4: Nullable$1<ST_TextHorzOverflowType>;
        p5: Nullable$1<ST_TextVerticalType>;
        p6: Nullable$1<ST_TextWrappingType>;
        p7: Nullable$1<number>;
        p8: Nullable$1<number>;
        p9: Nullable$1<number>;
        p10: Nullable$1<number>;
        p11: Nullable$1<number>;
        p12: Nullable$1<number>;
        p13: Nullable$1<boolean>;
        p14: Nullable$1<boolean>;
        p15: Nullable$1<ST_TextAnchoringType>;
        p16: Nullable$1<boolean>;
        p17: Nullable$1<boolean>;
        p18: Nullable$1<boolean>;
        p19: Nullable$1<boolean>;
    };
    static az(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_TextAnchoringType>, d?: Nullable$1<boolean>, e?: Nullable$1<number>, f?: Nullable$1<boolean>, g?: Nullable$1<boolean>, h?: Nullable$1<boolean>, i?: Nullable$1<ST_TextHorzOverflowType>, j?: Nullable$1<number>, k?: Nullable$1<number>, l?: Nullable$1<number>, m?: Nullable$1<number>, n?: Nullable$1<boolean>, o?: Nullable$1<number>, p?: Nullable$1<boolean>, q?: Nullable$1<number>, r?: Nullable$1<boolean>, s?: Nullable$1<ST_TextVerticalType>, t?: Nullable$1<ST_TextVertOverflowType>, u?: Nullable$1<ST_TextWrappingType>): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TextBulletColorFollowText extends Base {
    static $t: Type;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TextBulletSizeFollowText extends Base {
    static $t: Type;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TextBulletSizePercent extends Base {
    static $t: Type;
    private b;
    a: number;
    static d(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static e(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TextBulletSizePoint extends Base {
    static $t: Type;
    private b;
    a: number;
    static d(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static e(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TextBulletTypefaceFollowText extends Base {
    static $t: Type;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TextAutonumberBullet extends Base {
    static $t: Type;
    private b;
    private e;
    constructor();
    a: ST_TextAutonumberScheme;
    d: Nullable$1<number>;
    static g(a: XmlPartManagerBase, b: ST_TextAutonumberScheme, c: Nullable$1<number>): {
        p1: ST_TextAutonumberScheme;
        p2: Nullable$1<number>;
    };
    static h(a: XmlPartManagerBase, b: string, c: Nullable$1<number>, d: ST_TextAutonumberScheme): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TextCharBullet extends Base {
    static $t: Type;
    private b;
    a: string;
    static d(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static e(a: XmlPartManagerBase, b: string, c: string): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TextBlipBullet extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    constructor();
    a: CT_Blip_DML;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TextNoBullet extends Base {
    static $t: Type;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TextUnderlineLineFollowText extends Base {
    static $t: Type;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TextUnderlineFillFollowText extends Base {
    static $t: Type;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TextUnderlineFillGroupWrapper extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    private a;
    item: any;
    readonly b: EG_FillProperties;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TextSpacingPercent extends Base {
    static $t: Type;
    private b;
    a: number;
    static d(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static e(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TextSpacingPoint extends Base {
    static $t: Type;
    private b;
    a: number;
    static d(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static e(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TextTabStop extends Base {
    static $t: Type;
    private d;
    private b;
    c: Nullable$1<number>;
    a: Nullable$1<ST_TextTabAlignType>;
    static f(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<ST_TextTabAlignType>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<ST_TextTabAlignType>;
    };
    static g(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_TextTabAlignType>, d?: Nullable$1<number>): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TextTabStopList extends Base implements ISupportSetProperty {
    static $t: Type;
    private f;
    constructor();
    e: List$1<CT_TextTabStop>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    static c(a: CT_TextTabStopList): List$1<CT_TextTabStop>;
    static a(a: List$1<CT_TextTabStop>): CT_TextTabStopList;
}
/**
 * @hidden
 */
export declare class CT_TextLineBreak extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    constructor();
    a: CT_TextCharacterProperties_DML;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TextSpacing extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    item: any;
    toString(): string;
    a: CT_TextSpacingPercent;
    b: CT_TextSpacingPoint;
    setProperty(a: ElementPropertyIds, b: any): void;
    f(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
}
/**
 * @hidden
 */
export declare class CT_TextField extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    private h;
    private f;
    private k;
    constructor();
    a: CT_TextCharacterProperties_DML;
    c: CT_TextParagraphProperties_DML;
    g: string;
    e: string;
    j: string;
    static l(a: XmlPartManagerBase, b: string, c: string): {
        p1: string;
        p2: string;
    };
    static m(a: XmlPartManagerBase, b: string, c: string, d: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_RegularTextRun_DML extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: CT_TextCharacterProperties_DML;
    c: string;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class DMLAttributes extends Base {
    static $t: Type;
}
/**
 * @hidden
 */
export declare class EG_EffectProperties extends Base {
    static $t: Type;
    a: CT_EffectContainer;
    b: CT_EffectList;
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    e(a: ElementPropertyIds, b: any): void;
    c(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class EG_OfficeArtExtensionList extends Base {
    static $t: Type;
    constructor();
    b: List$1<CT_OfficeArtExtension>;
    c(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    d(a: ElementPropertyIds, b: any): void;
    a(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class EG_FillPropertiesBase extends Base {
    static $t: Type;
    a: CT_GradientFillProperties;
    d: CT_NoFillProperties;
    b: CT_PatternFillProperties;
    c: CT_SolidColorFillProperties;
    h(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    j(a: ElementPropertyIds, b: any): void;
    f(a: ElementPropertyIds): boolean;
    protected get_e(): boolean;
    readonly e: boolean;
    i(): void;
    g(): void;
}
/**
 * @hidden
 */
export declare class EG_FillProperties extends EG_FillPropertiesBase {
    static $t: Type;
    k: CT_BlipFillProperties_DML;
    l: CT_GroupFillProperties;
    h(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    j(a: ElementPropertyIds, b: any): void;
    f(a: ElementPropertyIds): boolean;
    protected get_e(): boolean;
    g(): void;
}
/**
 * @hidden
 */
export declare class EG_ShadeProperties extends Base {
    static $t: Type;
    a: CT_LinearShadeProperties;
    b: CT_PathShadeProperties;
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    e(a: ElementPropertyIds, b: any): void;
    c(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class EG_Effect extends Base {
    static $t: Type;
    a: CT_AlphaBiLevelEffect;
    b: CT_AlphaCeilingEffect;
    c: CT_AlphaFloorEffect;
    d: CT_AlphaInverseEffect;
    e: CT_AlphaModulateEffect;
    f: CT_AlphaModulateFixedEffect;
    g: CT_AlphaOutsetEffect;
    h: CT_AlphaReplaceEffect;
    i: CT_BiLevelEffect;
    j: CT_BlendEffect;
    k: CT_BlurEffect;
    l: CT_ColorChangeEffect;
    m: CT_ColorReplaceEffect;
    o: CT_EffectContainer;
    n: CT_DuotoneEffect;
    p: CT_EffectReference;
    q: CT_FillEffect;
    r: CT_FillOverlayEffect;
    s: CT_GlowEffect;
    t: CT_GrayscaleEffect;
    u: CT_HSLEffect;
    v: CT_InnerShadowEffect;
    w: CT_LuminanceEffect;
    x: CT_OuterShadowEffect;
    y: CT_PresetShadowEffect;
    z: CT_ReflectionEffect;
    aa: CT_RelativeOffsetEffect;
    ab: CT_SoftEdgesEffect;
    ac: CT_TintEffect;
    ad: CT_TransformEffect;
    af(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    ag(a: ElementPropertyIds, b: any): void;
    ae(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class EG_Geometry extends Base {
    static $t: Type;
    a: CT_CustomGeometry2D;
    b: CT_PresetGeometry2D;
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    e(a: ElementPropertyIds, b: any): void;
    c(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class EG_ThemeableFillStyle extends Base {
    static $t: Type;
    a: CT_FillProperties;
    b: CT_StyleMatrixReference_DML;
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    e(a: ElementPropertyIds, b: any): void;
    c(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class EG_ThemeableEffectStyle extends Base {
    static $t: Type;
    a: CT_EffectProperties;
    b: CT_StyleMatrixReference_DML;
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    e(a: ElementPropertyIds, b: any): void;
    c(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class EG_ThemeableFontStyles extends Base {
    static $t: Type;
    a: CT_FontCollection;
    b: CT_FontReference;
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    e(a: ElementPropertyIds, b: any): void;
    c(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class EG_ColorChoice_DML extends Base {
    static $t: Type;
    constructor();
    a: CT_HslColor;
    b: CT_PresetColor;
    c: CT_SchemeColor_DML;
    d: CT_ScRgbColor;
    e: CT_SRgbColor_DML;
    f: CT_SystemColor;
    h(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    i(a: ElementPropertyIds, b: any): void;
    g(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class EG_TextAutofit extends Base {
    static $t: Type;
    a: CT_TextNoAutofit;
    b: CT_TextNormalAutofit;
    c: CT_TextShapeAutofit;
    e(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    f(a: ElementPropertyIds, b: any): void;
    d(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class EG_Text3D extends Base {
    static $t: Type;
    a: CT_FlatText;
    b: CT_Shape3D;
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    e(a: ElementPropertyIds, b: any): void;
    c(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class EG_FillModeProperties extends Base {
    static $t: Type;
    constructor();
    a: CT_StretchInfoProperties;
    b: CT_TileInfoProperties;
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    e(a: ElementPropertyIds, b: any): void;
    c(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class EG_ColorTransform extends Base {
    static $t: Type;
    constructor();
    y: CT_PositiveFixedPercentage;
    ab: CT_PositivePercentage;
    f: CT_FixedPercentage;
    i: CT_Percentage;
    j: CT_Percentage;
    k: CT_Percentage;
    e: CT_ComplementTransform;
    a: CT_GammaTransform;
    g: CT_GrayscaleTransform;
    l: CT_Percentage;
    m: CT_Percentage;
    n: CT_Percentage;
    x: CT_PositiveFixedAngle;
    ac: CT_PositivePercentage;
    d: CT_Angle;
    h: CT_InverseTransform;
    b: CT_InverseGammaTransform;
    o: CT_Percentage;
    p: CT_Percentage;
    q: CT_Percentage;
    r: CT_Percentage;
    s: CT_Percentage;
    t: CT_Percentage;
    u: CT_Percentage;
    v: CT_Percentage;
    w: CT_Percentage;
    z: CT_PositiveFixedPercentage;
    aa: CT_PositiveFixedPercentage;
    af(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    ag(a: ElementPropertyIds, b: any): void;
    ad(a: ElementPropertyIds): boolean;
    c(): WorkbookColorTransform;
    ae(a: WorkbookColorTransform): void;
}
/**
 * @hidden
 */
export declare class EG_LineFillProperties extends EG_FillPropertiesBase {
    static $t: Type;
    constructor();
    h(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    j(a: ElementPropertyIds, b: any): void;
    f(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class EG_LineDashProperties extends Base {
    static $t: Type;
    constructor();
    a: CT_DashStopList;
    b: CT_PresetLineDashProperties;
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    e(a: ElementPropertyIds, b: any): void;
    c(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class EG_LineJoinProperties extends Base {
    static $t: Type;
    constructor();
    a: CT_LineJoinBevel;
    b: CT_LineJoinMiterProperties;
    c: CT_LineJoinRound;
    e(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    f(a: ElementPropertyIds, b: any): void;
    d(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class EG_TextUnderlineLine extends Base {
    static $t: Type;
    constructor();
    a: CT_LineProperties_DML;
    b: CT_TextUnderlineLineFollowText;
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    e(a: ElementPropertyIds, b: any): void;
    c(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class EG_TextUnderlineFill extends Base {
    static $t: Type;
    constructor();
    b: CT_TextUnderlineFillGroupWrapper;
    a: CT_TextUnderlineFillFollowText;
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    e(a: ElementPropertyIds, b: any): void;
    c(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class EG_TextBulletColor extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    b: CT_TextBulletColorFollowText;
    a: CT_Color_DML;
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    c(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class EG_TextBulletSize extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    a: CT_TextBulletSizeFollowText;
    b: CT_TextBulletSizePercent;
    c: CT_TextBulletSizePoint;
    e(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    d(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class EG_TextBulletTypeface extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    a: CT_TextBulletTypefaceFollowText;
    b: CT_TextFont;
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    c(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class EG_TextBullet extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    d: CT_TextNoBullet;
    a: CT_TextAutonumberBullet;
    c: CT_TextCharBullet;
    b: CT_TextBlipBullet;
    f(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    e(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class EG_TextRun extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    a: CT_RegularTextRun_DML;
    c: CT_TextLineBreak;
    b: CT_TextField;
    e(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    d(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class ST_HexBinary3 extends Base {
    static $t: Type;
    d: number;
    c: number;
    b: number;
    constructor(a: number, b: number, c: number);
    static a(a: string): ST_HexBinary3;
    f(): string;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_BlipFillProperties_DML extends CT_BlipFillPropertiesBase implements ISaveToXLSX, ISupportSetProperty {
    static $t: Type;
    private f;
    d: CT_Blip_DML;
    readonly g: EG_FillModeProperties;
    setProperty(a: ElementPropertyIds, b: any): void;
    static e(a: XmlPartManagerBase): CT_BlipFillProperties_DML;
    static i(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>, d?: Nullable$1<boolean>): void;
    save1(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    readonly elementName: string;
    saveX(a: XmlPartManagerBase, b: XmlWriteManager, c: string, d: any): void;
}
/**
 * @hidden
 */
export declare class CT_TextCharacterProperties_DML extends CT_TextCharacterPropertiesBase implements ISupportSetProperty {
    static $t: Type;
    private ac;
    private aa;
    private ag;
    private ae;
    constructor();
    readonly ad: EG_FillProperties;
    readonly ab: EG_EffectProperties;
    readonly ah: EG_TextUnderlineLine;
    readonly af: EG_TextUnderlineFill;
    x: CT_LineProperties_DML;
    w: CT_Color_DML;
    ak: CT_TextFont;
    ai: CT_Hyperlink;
    aj: CT_Hyperlink;
    y: CT_OfficeArtExtensionList;
    static z(a: XmlPartManagerBase, b: string): CT_TextCharacterProperties_DML;
    static ap(a: XmlPartManagerBase, b: string, c: Nullable$1<boolean>, d: string, e: string, f: Nullable$1<ST_TextFontSize>, g: Nullable$1<boolean>, h: Nullable$1<boolean>, i: Nullable$1<ST_TextUnderlineType>, j: Nullable$1<ST_TextStrikeType>, k: Nullable$1<number>, l: Nullable$1<ST_TextCapsType>, m: Nullable$1<ST_TextPoint>, n: Nullable$1<boolean>, o: Nullable$1<ST_Percentage>, p: Nullable$1<boolean>, q: Nullable$1<boolean>, r: Nullable$1<boolean>, s: Nullable$1<boolean>, t: Nullable$1<number>, u: string): {
        p2: Nullable$1<boolean>;
        p3: string;
        p4: string;
        p5: Nullable$1<ST_TextFontSize>;
        p6: Nullable$1<boolean>;
        p7: Nullable$1<boolean>;
        p8: Nullable$1<ST_TextUnderlineType>;
        p9: Nullable$1<ST_TextStrikeType>;
        p10: Nullable$1<number>;
        p11: Nullable$1<ST_TextCapsType>;
        p12: Nullable$1<ST_TextPoint>;
        p13: Nullable$1<boolean>;
        p14: Nullable$1<ST_Percentage>;
        p15: Nullable$1<boolean>;
        p16: Nullable$1<boolean>;
        p17: Nullable$1<boolean>;
        p18: Nullable$1<boolean>;
        p19: Nullable$1<number>;
        p20: string;
    };
    static ar(a: XmlPartManagerBase, b: string, c?: string, d?: Nullable$1<boolean>, e?: Nullable$1<ST_Percentage>, f?: string, g?: Nullable$1<ST_TextCapsType>, h?: Nullable$1<boolean>, i?: Nullable$1<boolean>, j?: Nullable$1<boolean>, k?: Nullable$1<number>, l?: Nullable$1<boolean>, m?: string, n?: Nullable$1<boolean>, o?: Nullable$1<boolean>, p?: Nullable$1<boolean>, q?: Nullable$1<number>, r?: Nullable$1<ST_TextPoint>, s?: Nullable$1<ST_TextStrikeType>, t?: Nullable$1<number>, u?: Nullable$1<ST_TextUnderlineType>): void;
    aq(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class CT_Blip_DML extends CT_Blip implements ISupportSetProperty {
    static $t: Type;
    constructor();
    d: CT_AlphaBiLevelEffect;
    e: CT_AlphaCeilingEffect;
    f: CT_AlphaFloorEffect;
    g: CT_AlphaInverseEffect;
    h: CT_AlphaModulateEffect;
    i: CT_AlphaModulateFixedEffect;
    j: CT_AlphaReplaceEffect;
    k: CT_BiLevelEffect;
    m: CT_BlurEffect;
    n: CT_ColorChangeEffect;
    o: CT_ColorReplaceEffect;
    p: CT_DuotoneEffect;
    u: CT_OfficeArtExtensionList;
    q: CT_FillOverlayEffect;
    r: CT_GrayscaleEffect;
    s: CT_HSLEffect;
    t: CT_LuminanceEffect;
    v: CT_TintEffect;
    setProperty(a: ElementPropertyIds, b: any): void;
    static l(a: XmlPartManagerBase): CT_Blip_DML;
    static x(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_BlipCompression>): void;
}
/**
 * @hidden
 */
export declare class CT_LineStyleList extends Base {
    static $t: Type;
    constructor();
    a: List$1<CT_LineProperties_DML>;
}
/**
 * @hidden
 */
export declare class CT_LineProperties_DML extends CT_LinePropertiesBase implements ISupportSetProperty {
    static $t: Type;
    private m;
    private k;
    private o;
    readonly n: EG_LineFillProperties;
    readonly l: EG_LineDashProperties;
    readonly p: EG_LineJoinProperties;
    q: Nullable$1<number>;
    j: CT_OfficeArtExtensionList;
    static i(a: XmlPartManagerBase): CT_LineProperties_DML;
    private static s;
    r(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare abstract class CT_DMLColorBase extends Base {
    static $t: Type;
    constructor();
    private a;
    readonly b: EG_ColorTransform;
    abstract d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_SRgbColor_DML extends CT_DMLColorBase implements ISupportSetProperty {
    static $t: Type;
    f: ST_HexColorRGB;
    static e(a: XmlPartManagerBase): CT_SRgbColor_DML;
    private static g;
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager): void;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class CT_ScRgbColor extends CT_DMLColorBase implements ISupportSetProperty {
    static $t: Type;
    h: number;
    g: number;
    f: number;
    static e(a: XmlPartManagerBase): CT_ScRgbColor;
    private static i;
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager): void;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class CT_HslColor extends CT_DMLColorBase implements ISupportSetProperty {
    static $t: Type;
    f: number;
    h: number;
    g: number;
    static e(a: XmlPartManagerBase): CT_HslColor;
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    private static i;
}
/**
 * @hidden
 */
export declare class CT_SystemColor extends CT_DMLColorBase implements ISupportSetProperty {
    static $t: Type;
    f: ST_SystemColorVal;
    g: Nullable$1<ST_HexColorRGB>;
    static e(a: XmlPartManagerBase): CT_SystemColor;
    private static h;
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager): void;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class CT_SchemeColor_DML extends CT_DMLColorBase implements ISupportSetProperty {
    static $t: Type;
    g: ST_SchemeColorVal;
    static f(a: XmlPartManagerBase): CT_SchemeColor_DML;
    static h(a: XmlPartManagerBase, b: ST_SchemeColorVal): void;
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    static e(a: ST_SchemeColorVal, b?: Nullable$1<number>, c?: Nullable$1<number>): CT_SchemeColor_DML;
}
/**
 * @hidden
 */
export declare class CT_PresetColor extends CT_DMLColorBase implements ISupportSetProperty {
    static $t: Type;
    f: ST_PresetColorVal;
    static e(a: XmlPartManagerBase): CT_PresetColor;
    static g(a: XmlPartManagerBase, b: ST_PresetColorVal): void;
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager): void;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class CT_StyleMatrix extends Base {
    static $t: Type;
    constructor();
    c: CT_FillStyleList;
    d: CT_LineStyleList;
    b: CT_EffectStyleList;
    a: CT_BackgroundFillStyleList;
    e: string;
    static g(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static h(a: XmlPartManagerBase, b: string, c?: string): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_FillStyleList extends Base implements ISupportSetProperty {
    static $t: Type;
    private a;
    constructor();
    readonly b: List$1<ISaveToXLSX>;
    static c(a: number, b: boolean): {
        ret: number;
        p1: boolean;
    };
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_BackgroundFillStyleList extends CT_FillStyleList {
    static $t: Type;
    constructor();
}
/**
 * @hidden
 */
export declare class CT_ColorEffectBase extends Base {
    static $t: Type;
    private a;
    readonly b: EG_ColorChoice_DML;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_PresetShadowEffect extends CT_ColorEffectBase implements ISupportSetProperty {
    static $t: Type;
    private e;
    private k;
    private i;
    constructor();
    d: ST_PresetShadowVal;
    j: Nullable$1<number>;
    h: Nullable$1<number>;
    m(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    static l(a: XmlPartManagerBase, b: ST_PresetShadowVal, c: Nullable$1<number>, d: Nullable$1<number>): {
        p1: ST_PresetShadowVal;
        p2: Nullable$1<number>;
        p3: Nullable$1<number>;
    };
    static n(a: XmlPartManagerBase, b: string, c: Nullable$1<number>, d: Nullable$1<number>, e: ST_PresetShadowVal): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_OuterShadowEffect extends CT_ColorEffectBase implements ISupportSetProperty {
    static $t: Type;
    private q;
    private u;
    private s;
    private ac;
    private ae;
    private w;
    private y;
    private o;
    private aa;
    constructor();
    p: Nullable$1<number>;
    t: Nullable$1<number>;
    r: Nullable$1<number>;
    ab: Nullable$1<number>;
    ad: Nullable$1<number>;
    v: Nullable$1<number>;
    x: Nullable$1<number>;
    n: Nullable$1<ST_RectAlignment>;
    z: Nullable$1<boolean>;
    ag(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    static d(a: XmlPartManagerBase): CT_OuterShadowEffect;
    static af(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<number>, d: Nullable$1<number>, e: Nullable$1<number>, f: Nullable$1<number>, g: Nullable$1<number>, h: Nullable$1<number>, i: Nullable$1<ST_RectAlignment>, j: Nullable$1<boolean>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<number>;
        p3: Nullable$1<number>;
        p4: Nullable$1<number>;
        p5: Nullable$1<number>;
        p6: Nullable$1<number>;
        p7: Nullable$1<number>;
        p8: Nullable$1<ST_RectAlignment>;
        p9: Nullable$1<boolean>;
    };
    static ah(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_RectAlignment>, d?: Nullable$1<number>, e?: Nullable$1<number>, f?: Nullable$1<number>, g?: Nullable$1<number>, h?: Nullable$1<number>, i?: Nullable$1<boolean>, j?: Nullable$1<number>, k?: Nullable$1<number>): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_InnerShadowEffect extends CT_ColorEffectBase implements ISupportSetProperty {
    static $t: Type;
    private h;
    private l;
    private j;
    constructor();
    g: Nullable$1<number>;
    k: Nullable$1<number>;
    i: Nullable$1<number>;
    n(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    static m(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<number>, d: Nullable$1<number>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<number>;
        p3: Nullable$1<number>;
    };
    static o(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>, d?: Nullable$1<number>, e?: Nullable$1<number>): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GlowEffect extends CT_ColorEffectBase implements ISupportSetProperty {
    static $t: Type;
    private f;
    constructor();
    e: Nullable$1<number>;
    h(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    static g(a: XmlPartManagerBase, b: Nullable$1<number>): {
        p1: Nullable$1<number>;
    };
    static i(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>): void;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class CT_GradientStop extends CT_ColorEffectBase implements ISupportSetProperty {
    static $t: Type;
    constructor();
    d: ST_PositiveFixedPercentage;
    f(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    static e(a: XmlPartManagerBase, b: ST_PositiveFixedPercentage): {
        p1: ST_PositiveFixedPercentage;
    };
    static g(a: XmlPartManagerBase, b: string, c: ST_PositiveFixedPercentage): void;
}
/**
 * @hidden
 */
export declare class CT_DuotoneEffect extends CT_ColorEffectBase implements ISupportSetProperty {
    static $t: Type;
    constructor();
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class CT_ColorReplaceEffect extends CT_ColorEffectBase implements ISupportSetProperty {
    static $t: Type;
    constructor();
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class CT_AlphaInverseEffect extends CT_ColorEffectBase implements ISupportSetProperty {
    static $t: Type;
    constructor();
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class CT_TextParagraphProperties_DML extends CT_TextParagraphProperties implements ISupportSetProperty {
    static $t: Type;
    private u;
    private w;
    private y;
    private s;
    constructor();
    p: CT_TextSpacing;
    r: CT_TextSpacing;
    q: CT_TextSpacing;
    aa: List$1<CT_TextTabStop>;
    n: CT_OfficeArtExtensionList;
    readonly v: EG_TextBulletColor;
    readonly x: EG_TextBulletSize;
    readonly z: EG_TextBulletTypeface;
    readonly t: EG_TextBullet;
    static o(a: XmlPartManagerBase): CT_TextParagraphProperties_DML;
    private static ab;
    static ad(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_TextAlignType>, d?: Nullable$1<ST_Coordinate32>, e?: Nullable$1<boolean>, f?: Nullable$1<ST_TextFontAlignType>, g?: Nullable$1<boolean>, h?: Nullable$1<number>, i?: Nullable$1<boolean>, j?: Nullable$1<number>, k?: Nullable$1<number>, l?: Nullable$1<number>, m?: Nullable$1<boolean>): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    ac(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TextParagraph_DML extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    private b;
    private e;
    constructor();
    c: CT_TextParagraphProperties_DML;
    a: CT_TextCharacterProperties_DML;
    readonly f: List$1<EG_TextRun>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TextBody_DML extends Base implements ISupportSetProperty {
    static $t: Type;
    private c;
    a: CT_TextBodyProperties_DML;
    b: CT_TextListStyle_DML;
    readonly d: List$1<CT_TextParagraph_DML>;
    e(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class DMLUtils extends Base {
    static $t: Type;
    static q(a: XmlPartManagerBase): CT_PositivePercentage;
    static ar(a: XmlPartManagerBase, b: CT_PositivePercentage, c: string): void;
    static av(a: XmlPartManagerBase, b: CT_StyleMatrixReference, c: string): void;
    static p(a: XmlPartManagerBase): CT_PositiveFixedPercentage;
    static aq(a: XmlPartManagerBase, b: CT_PositiveFixedPercentage, c: string): void;
    static f(a: XmlPartManagerBase): CT_FixedPercentage;
    static af(a: XmlPartManagerBase, b: CT_FixedPercentage, c: string): void;
    static l(a: XmlPartManagerBase): CT_Percentage;
    static am(a: XmlPartManagerBase, b: CT_Percentage, c: string): void;
    static o(a: XmlPartManagerBase): CT_PositiveFixedAngle;
    static ap(a: XmlPartManagerBase, b: CT_PositiveFixedAngle, c: string): void;
    static b(a: XmlPartManagerBase): CT_Angle;
    static ab(a: XmlPartManagerBase, b: CT_Angle, c: string): void;
    static v(a: XmlPartManagerBase, b: string): CT_TextFont;
    static h(a: XmlPartManagerBase, b: string): CT_Hyperlink;
    static u(a: XmlPartManagerBase): CT_RelativeRect;
    static w(a: XmlPartManagerBase): CT_TileInfoProperties;
    static e(a: XmlPartManagerBase): CT_EmbeddedWAVAudioFile;
    static i(a: XmlPartManagerBase): CT_LineEndProperties;
    static j(a: XmlPartManagerBase): CT_LineJoinMiterProperties;
    static t(a: XmlPartManagerBase): CT_PresetLineDashProperties;
    static d(a: XmlPartManagerBase): CT_DashStop;
    static s(a: XmlPartManagerBase): CT_PresetGeometry2D;
    static x(a: XmlPartManagerBase): CT_Transform2D;
    static g(a: XmlPartManagerBase): CT_GeomRect;
    static c(a: XmlPartManagerBase): CT_ConnectionSite;
    static a(a: XmlPartManagerBase): CT_AdjPoint2D;
    static m(a: XmlPartManagerBase): CT_Point2D;
    static r(a: XmlPartManagerBase): CT_PositiveSize2D;
    static aa(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: CT_Color_DML, d: string): void;
    static au(a: XmlPartManagerBase, b: CT_RelativeRect, c: string): void;
    static ax(a: XmlPartManagerBase, b: CT_TileInfoProperties, c: string): void;
    static aj(a: XmlPartManagerBase, b: CT_LineEndProperties, c: string): void;
    static ak(a: XmlPartManagerBase, b: CT_LineJoinMiterProperties, c: string): void;
    static at(a: XmlPartManagerBase, b: CT_PresetLineDashProperties, c: string): void;
    static ad(a: XmlPartManagerBase, b: CT_DashStop, c: string): void;
    static aw(a: XmlPartManagerBase, b: string, c: CT_TextFont): void;
    static ai(a: XmlPartManagerBase, b: string, c: CT_Hyperlink): void;
    static ae(a: XmlPartManagerBase, b: string, c: CT_EmbeddedWAVAudioFile): void;
    static ay(a: XmlPartManagerBase, b: string, c: CT_Transform2D): void;
    static ag(a: XmlPartManagerBase, b: string, c: CT_GeomGuide): void;
    static as(a: XmlPartManagerBase, b: string, c: CT_PresetGeometry2D): void;
    static al(a: XmlPartManagerBase, b: string, c: CT_Path2D): void;
    static ah(a: XmlPartManagerBase, b: CT_GeomRect, c: string): void;
    static ao(a: XmlPartManagerBase, b: CT_PolarAdjustHandle, c: string): void;
    static az(a: XmlPartManagerBase, b: CT_XYAdjustHandle, c: string): void;
    static ac(a: XmlPartManagerBase, b: CT_ConnectionSite, c: string): void;
    static an(a: XmlPartManagerBase, b: CT_Point2D, c: string): void;
    static y(a: XmlPartManagerBase): CT_XYAdjustHandle;
    static n(a: XmlPartManagerBase): CT_PolarAdjustHandle;
    static k(a: XmlPartManagerBase): CT_Path2DArcTo;
}
/**
 * @hidden
 */
export declare class DMLExtensions extends Base {
    static $t: Type;
    static cu(a: CT_StretchInfoProperties, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cw(a: CT_TileInfoProperties, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ct(a: CT_RelativeRect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static n(a: CT_Blip_DML, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e?: string): void;
    static d(a: CT_AlphaInverseEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e?: string): void;
    static e(a: CT_AlphaModulateEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e?: string): void;
    static f(a: CT_AlphaModulateFixedEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e?: string): void;
    static h(a: CT_AlphaReplaceEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e?: string): void;
    static l(a: CT_BiLevelEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e?: string): void;
    static a(a: CT_AlphaBiLevelEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e?: string): void;
    static b(a: CT_AlphaCeilingEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e?: string): void;
    static p(a: CT_BlurEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e?: string): void;
    static s(a: CT_ColorChangeEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e?: string): void;
    static a9(a: CT_StyleMatrix, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static j(a: CT_BackgroundFillStyleList, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static aa(a: CT_EffectStyleList, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ae(a: CT_FillStyleList, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static aq(a: CT_LineStyleList, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static o(a: CT_BlipFillProperties_DML, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cb(a: CT_GroupFillProperties, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ci(a: CT_NoFillProperties, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static aw(a: CT_PatternFillProperties, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static a7(a: CT_SolidColorFillProperties, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static c(a: CT_AlphaFloorEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static t(a: CT_ColorReplaceEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static u(a: CT_DuotoneEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static at(a: CT_OfficeArtExtensionList, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ac(a: CT_FillOverlayEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ak(a: CT_GrayscaleEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static al(a: CT_HSLEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ar(a: CT_LuminanceEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bu(a: CT_TintEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cp(a: CT_PositiveFixedPercentage, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static b6(a: CT_FixedPercentage, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cl(a: CT_Percentage, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bz(a: CT_ComplementTransform, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ag(a: CT_GammaTransform, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ca(a: CT_GrayscaleTransform, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static co(a: CT_PositiveFixedAngle, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cq(a: CT_PositivePercentage, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static by(a: CT_Angle, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cd(a: CT_InverseTransform, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static an(a: CT_InverseGammaTransform, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static v(a: CT_EffectContainer, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static g(a: CT_AlphaOutsetEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static m(a: CT_BlendEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static y(a: CT_EffectReference, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ab(a: CT_FillEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ah(a: CT_GlowEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static am(a: CT_InnerShadowEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static au(a: CT_OuterShadowEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ay(a: CT_PresetShadowEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static a0(a: CT_ReflectionEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static a2(a: CT_RelativeOffsetEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static a6(a: CT_SoftEdgesEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bv(a: CT_TransformEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static r(a: CT_Color_DML, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static as(a: CT_OfficeArtExtension, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static aj(a: CT_GradientStopList, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ap(a: CT_LinearShadeProperties, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static av(a: CT_PathShadeProperties, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ai(a: CT_GradientStop, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static z(a: CT_EffectStyleItem, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static w(a: CT_EffectList, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static a3(a: CT_Scene3D, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static a4(a: CT_Shape3D, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static i(a: CT_Backdrop, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static q(a: CT_Camera, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ao(a: CT_LightRig, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ax(a: CT_Point3D, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bw(a: CT_Vector3D, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static a8(a: CT_SphereCoords, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static k(a: CT_Bevel, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cf(a: CT_LineJoinBevel, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static b4(a: CT_DashStopList, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ce(a: CT_LineEndProperties, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cg(a: CT_LineJoinMiterProperties, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cs(a: CT_PresetLineDashProperties, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ch(a: CT_LineJoinRound, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static b3(a: CT_DashStop, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static br(a: CT_TextUnderlineFillFollowText, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bt(a: CT_TextUnderlineLineFollowText, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bs(a: CT_TextUnderlineFillGroupWrapper, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cv(a: CT_TextFont, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cc(a: CT_Hyperlink, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static b5(a: CT_EmbeddedWAVAudioFile, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ad(a: CT_FillProperties, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ba(a: CT_StyleMatrixReference_DML, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static x(a: CT_EffectProperties, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static be(a: CT_TextBulletColorFollowText, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bf(a: CT_TextBulletSizeFollowText, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bg(a: CT_TextBulletSizePercent, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bh(a: CT_TextBulletSizePoint, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bi(a: CT_TextBulletTypefaceFollowText, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bm(a: CT_TextNoBullet, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bb(a: CT_TextAutonumberBullet, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bj(a: CT_TextCharBullet, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bc(a: CT_TextBlipBullet, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bk(a: CT_TextListStyle_DML, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bd(a: CT_TextBodyProperties_DML, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bq(a: CT_TextTabStop, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bo(a: CT_TextParagraph_DML, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cx(a: CT_Transform2D, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static a5(a: CT_ShapeProperties_DML, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static af(a: CT_FlatText, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bl(a: CT_TextNoAutofit, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bn(a: CT_TextNormalAutofit, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static az(a: CT_PresetTextShape, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bp(a: CT_TextShapeAutofit, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static b8(a: CT_GeomGuideList, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static b7(a: CT_GeomGuide, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static b2(a: CT_CustomGeometry2D, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cr(a: CT_PresetGeometry2D, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bx(a: CT_AdjustHandleList, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static b1(a: CT_ConnectionSiteList, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ck(a: CT_Path2DList, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cj(a: CT_Path2D, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static b9(a: CT_GeomRect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cn(a: CT_PolarAdjustHandle, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cy(a: CT_XYAdjustHandle, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static b0(a: CT_ConnectionSite, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cm(a: CT_Point2D, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static a1(a: CT_RegularTextRun_DML, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cz(a: string, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string, f: string): void;
}
/**
 * @hidden
 */
export declare class CT_Drawing_SpreadsheetDrawing extends Base {
    static $t: Type;
    private a;
    constructor();
    readonly b: EG_Anchor_SpreadsheetDrawing;
    toString(): string;
}
/**
 * @hidden
 */
export declare class SpreadsheetDrawingAttributes extends Base {
    static $t: Type;
}
/**
 * @hidden
 */
export declare class EG_Anchor_SpreadsheetDrawing extends Base {
    static $t: Type;
    constructor();
    c: CT_TwoCellAnchor;
    b: CT_OneCellAnchor;
    a: CT_AbsoluteAnchor;
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
}
/**
 * @hidden
 */
export declare class DMLSpreadsheetDrawingUtils extends Base {
    static $t: Type;
}
/**
 * @hidden
 */
export declare class CT_FullRef extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    a: string;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_LevelRef extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    a: string;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_FormulaRef extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    a: string;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_FilteredCategoryTitle extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    constructor();
    a: CT_AxDataSource;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_FilteredAreaSer extends Base implements ISupportSetProperty {
    static $t: Type;
    private c;
    private a;
    constructor();
    b: CT_AreaSer;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_FilteredBarSer extends Base implements ISupportSetProperty {
    static $t: Type;
    private c;
    private a;
    constructor();
    b: CT_BarSer;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_FilteredBubbleSer extends Base implements ISupportSetProperty {
    static $t: Type;
    private c;
    private a;
    constructor();
    b: CT_BubbleSer;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_FilteredLineSer extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    constructor();
    a: CT_LineSer;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_FilteredPieSer extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    constructor();
    a: CT_PieSer;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_FilteredRadarSer extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    constructor();
    a: CT_RadarSer;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_FilteredScatterSer extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    constructor();
    a: CT_ScatterSer;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_FilteredSurfaceSer extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    constructor();
    a: CT_SurfaceSer;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_SeriesDataLabelsRange extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    private b;
    constructor();
    c: string;
    a: CT_StrData;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_CategoryFilterExceptions extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    constructor();
    a: List$1<CT_CategoryFilterException>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_CategoryFilterException extends Base implements ISupportSetProperty {
    static $t: Type;
    private n;
    private l;
    private f;
    private d;
    private b;
    private j;
    private h;
    constructor();
    m: string;
    k: CT_ShapeProperties_DML;
    e: CT_UnsignedInt;
    c: CT_Boolean;
    a: CT_Boolean;
    i: CT_Marker_Chart;
    g: CT_DLbl;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_DataLabelFieldTable extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    constructor();
    a: List$1<CT_DataLabelFieldTableEntry>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_DataLabelFieldTableEntry extends Base implements ISupportSetProperty {
    static $t: Type;
    private g;
    private d;
    private b;
    constructor();
    f: string;
    c: string;
    a: CT_StrData;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_FilteredSeriesTitle extends Base implements ISupportSetProperty {
    static $t: Type;
    private a;
    constructor();
    b: CT_Tx;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class ChartAttributes extends Base {
    static $t: Type;
}
/**
 * @hidden
 */
export declare class EG_BarChartShared extends Base {
    static $t: Type;
    constructor();
    b: CT_BarDir;
    c: CT_BarGrouping;
    a: CT_Boolean;
    f: List$1<CT_BarSer>;
    d: CT_DLbls;
    g(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    h(a: ElementPropertyIds, b: any): void;
    e(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class EG_PieChartShared extends Base {
    static $t: Type;
    constructor();
    a: CT_Boolean;
    d: List$1<CT_PieSer>;
    b: CT_DLbls;
    e(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    f(a: ElementPropertyIds, b: any): void;
    c(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class EG_DLblShared extends Base {
    static $t: Type;
    constructor();
    h: CT_NumFmt_Chart;
    i: CT_ShapeProperties_DML;
    j: CT_TextBody_DML;
    g: CT_DLblPos;
    c: CT_Boolean;
    f: CT_Boolean;
    b: CT_Boolean;
    e: CT_Boolean;
    d: CT_Boolean;
    a: CT_Boolean;
    l: string;
    n(a: ElementPropertyIds, b: any): void;
    k(a: ElementPropertyIds): boolean;
    m(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
}
/**
 * @hidden
 */
export declare class Group_DLbl extends Base {
    static $t: Type;
    private c;
    constructor();
    a: CT_Layout;
    b: CT_Tx;
    readonly d: EG_DLblShared;
    g(a: ElementPropertyIds, b: any): void;
    e(a: ElementPropertyIds): boolean;
    f(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
}
/**
 * @hidden
 */
export declare class Group_DLbls extends Base {
    static $t: Type;
    private c;
    constructor();
    a: CT_Boolean;
    b: CT_ChartLines;
    readonly d: EG_DLblShared;
    f(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    g(a: ElementPropertyIds, b: any): void;
    e(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class EG_LegendEntryData extends Base {
    static $t: Type;
    constructor();
    a: CT_TextBody_DML;
    c(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    d(a: ElementPropertyIds, b: any): void;
    b(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class EG_AxShared extends Base {
    static $t: Type;
    constructor();
    c: CT_UnsignedInt;
    j: CT_Scaling;
    a: CT_Boolean;
    e: CT_AxPos;
    f: CT_ChartLines;
    g: CT_ChartLines;
    n: CT_Title;
    i: CT_NumFmt_Chart;
    l: CT_TickMark;
    m: CT_TickMark;
    k: CT_TickLblPos;
    o: CT_ShapeProperties_DML;
    p: CT_TextBody_DML;
    d: CT_UnsignedInt;
    h: CT_Crosses;
    b: CT_Double;
    r(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    s(a: ElementPropertyIds, b: any): void;
    q(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class EG_SerShared extends Base {
    static $t: Type;
    constructor();
    a: CT_UnsignedInt;
    b: CT_UnsignedInt;
    c: CT_SerTx;
    d: CT_ShapeProperties_DML;
    f(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    g(a: ElementPropertyIds, b: any): void;
    e(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class EG_AreaChartShared extends Base {
    static $t: Type;
    constructor();
    d: CT_Grouping;
    a: CT_Boolean;
    f: List$1<CT_AreaSer>;
    c: CT_DLbls;
    b: CT_ChartLines;
    g(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    h(a: ElementPropertyIds, b: any): void;
    e(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class EG_SurfaceChartShared extends Base {
    static $t: Type;
    constructor();
    a: CT_Boolean;
    d: List$1<CT_SurfaceSer>;
    b: CT_BandFmts;
    e(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    f(a: ElementPropertyIds, b: any): void;
    c(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class EG_LineChartShared extends Base {
    static $t: Type;
    constructor();
    d: CT_Grouping;
    a: CT_Boolean;
    f: List$1<CT_LineSer>;
    c: CT_DLbls;
    b: CT_ChartLines;
    g(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    h(a: ElementPropertyIds, b: any): void;
    e(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class CT_ChartSpace extends Base implements ISupportSetProperty {
    static $t: Type;
    private c;
    private s;
    private e;
    private q;
    private u;
    private k;
    private o;
    private g;
    private w;
    private y;
    private i;
    private m;
    private aa;
    private ac;
    constructor();
    b: CT_Boolean;
    r: CT_TextLanguageID;
    d: CT_Boolean;
    p: CT_Style;
    t: CT_ColorMapping;
    j: CT_PivotSource;
    n: CT_Protection;
    f: CT_Chart;
    v: CT_ShapeProperties_DML;
    x: CT_TextBody_DML;
    h: CT_ExternalData;
    l: CT_PrintSettings;
    z: CT_RelId;
    ab: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    a: Excel2007ChartData;
}
/**
 * @hidden
 */
export declare class CT_PageSetup_Chart extends Base {
    static $t: Type;
    private t;
    private n;
    private r;
    private h;
    private l;
    private v;
    private p;
    private x;
    private j;
    constructor();
    s: Nullable$1<number>;
    m: Nullable$1<number>;
    q: Nullable$1<ST_PageSetupOrientation>;
    g: Nullable$1<boolean>;
    k: Nullable$1<boolean>;
    u: Nullable$1<boolean>;
    o: Nullable$1<number>;
    w: Nullable$1<number>;
    i: Nullable$1<number>;
    static ac(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<number>, d: Nullable$1<ST_PageSetupOrientation>, e: Nullable$1<boolean>, f: Nullable$1<boolean>, g: Nullable$1<boolean>, h: Nullable$1<number>, i: Nullable$1<number>, j: Nullable$1<number>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<number>;
        p3: Nullable$1<ST_PageSetupOrientation>;
        p4: Nullable$1<boolean>;
        p5: Nullable$1<boolean>;
        p6: Nullable$1<boolean>;
        p7: Nullable$1<number>;
        p8: Nullable$1<number>;
        p9: Nullable$1<number>;
    };
    static ad(a: XmlPartManagerBase, b: string, c?: Nullable$1<boolean>, d?: Nullable$1<number>, e?: Nullable$1<boolean>, f?: Nullable$1<number>, g?: Nullable$1<number>, h?: Nullable$1<ST_PageSetupOrientation>, i?: Nullable$1<number>, j?: Nullable$1<boolean>, k?: Nullable$1<number>): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_PageMargins_Chart extends Base {
    static $t: Type;
    private i;
    private k;
    private m;
    private c;
    private g;
    private e;
    h: number;
    j: number;
    l: number;
    b: number;
    f: number;
    d: number;
    static a(a: XmlPartManagerBase): CT_PageMargins_Chart;
    static o(a: XmlPartManagerBase, b: number, c: number, d: number, e: number, f: number, g: number): {
        p1: number;
        p2: number;
        p3: number;
        p4: number;
        p5: number;
        p6: number;
    };
    static p(a: XmlPartManagerBase, b: string, c: number, d: number, e: number, f: number, g: number, h: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_HeaderFooter_Chart extends Base implements ISupportSetProperty {
    static $t: Type;
    private u;
    private s;
    private m;
    private k;
    private q;
    private o;
    private b;
    private i;
    private g;
    constructor();
    t: string;
    r: string;
    l: string;
    j: string;
    p: string;
    n: string;
    a: boolean;
    h: boolean;
    f: boolean;
    static w(a: XmlPartManagerBase, b: boolean, c: boolean, d: boolean): {
        p1: boolean;
        p2: boolean;
        p3: boolean;
    };
    static x(a: XmlPartManagerBase, b: string, c: boolean, d: boolean, e: boolean): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_PrintSettings extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    private f;
    private h;
    constructor();
    a: CT_HeaderFooter_Chart;
    c: CT_PageMargins_Chart;
    e: CT_PageSetup_Chart;
    g: CT_RelId;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ExternalData extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: CT_Boolean;
    c: string;
    static f(a: XmlPartManagerBase, b: Nullable$1<boolean>, c: string): {
        p1: Nullable$1<boolean>;
        p2: string;
    };
    static g(a: XmlPartManagerBase, b: string, c: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_DispBlanksAs extends Base {
    static $t: Type;
    private c;
    constructor();
    b: ST_DispBlanksAs;
    static e(a: XmlPartManagerBase, b: ST_DispBlanksAs): {
        p1: ST_DispBlanksAs;
    };
    static f(a: XmlPartManagerBase, b: string, c: ST_DispBlanksAs): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_LegendEntry extends Base implements ISupportSetProperty {
    static $t: Type;
    private c;
    private i;
    private g;
    private d;
    constructor();
    b: CT_UnsignedInt;
    item: any;
    f: List$1<CT_Extension>;
    readonly e: EG_LegendEntryData;
    toString(): string;
    a: CT_Boolean;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class CT_LegendPos extends Base {
    static $t: Type;
    private c;
    constructor();
    b: ST_LegendPos;
    static e(a: XmlPartManagerBase, b: ST_LegendPos): {
        p1: ST_LegendPos;
    };
    static f(a: XmlPartManagerBase, b: string, c: ST_LegendPos): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Legend extends Base implements ISupportSetProperty {
    static $t: Type;
    private f;
    private n;
    private d;
    private b;
    private h;
    private j;
    private l;
    constructor();
    e: CT_LegendPos;
    m: List$1<CT_LegendEntry>;
    c: CT_Layout;
    a: CT_Boolean;
    g: CT_ShapeProperties_DML;
    i: CT_TextBody_DML;
    k: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Layout extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: CT_ManualLayout;
    c: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ManualLayout extends Base implements ISupportSetProperty {
    static $t: Type;
    private r;
    private n;
    private p;
    private l;
    private j;
    private f;
    private h;
    private d;
    private b;
    private t;
    constructor();
    q: CT_LayoutTarget;
    m: CT_LayoutMode;
    o: CT_LayoutMode;
    k: CT_LayoutMode;
    i: CT_LayoutMode;
    e: CT_Double;
    g: CT_Double;
    c: CT_Double;
    a: CT_Double;
    s: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_LayoutTarget extends Base {
    static $t: Type;
    private c;
    constructor();
    b: ST_LayoutTarget;
    static e(a: XmlPartManagerBase, b: ST_LayoutTarget): {
        p1: ST_LayoutTarget;
    };
    static f(a: XmlPartManagerBase, b: string, c: ST_LayoutTarget): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_LayoutMode extends Base {
    static $t: Type;
    private c;
    constructor();
    b: ST_LayoutMode;
    static e(a: XmlPartManagerBase, b: ST_LayoutMode): {
        p1: ST_LayoutMode;
    };
    static f(a: XmlPartManagerBase, b: string, c: ST_LayoutMode): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_DTable extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private h;
    private f;
    private d;
    private j;
    private l;
    private n;
    constructor();
    a: CT_Boolean;
    g: CT_Boolean;
    e: CT_Boolean;
    c: CT_Boolean;
    i: CT_ShapeProperties_DML;
    k: CT_TextBody_DML;
    m: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export interface IAxis {
    readonly axisType: AxisType;
    readonly id: number;
    readonly crossAxId: number;
    readonly sharedProps: EG_AxShared;
    readonly axisCrossesBetween: boolean;
    readonly baseUnit: Tuple$2<Nullable$1<ST_TimeUnit>, boolean>;
    readonly dispUnits: CT_DispUnits;
    readonly tickLabelAlignment: ST_LblAlgn | null;
    readonly _tickLabelAlignment$i: Nullable$1<ST_LblAlgn>;
    readonly tickLabelMultiLevel: boolean | null;
    readonly _tickLabelMultiLevel$i: Nullable$1<boolean>;
    readonly tickMarkSkipValue: number | null;
    readonly _tickMarkSkipValue$i: Nullable$1<number>;
    readonly tickLabelSkip: number | null;
    readonly _tickLabelSkip$i: Nullable$1<number>;
    readonly tickLabelOffset: number | null;
    readonly _tickLabelOffset$i: Nullable$1<number>;
    readonly categoryType: CategoryType | null;
    readonly _categoryType$i: Nullable$1<CategoryType>;
    save(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager): void;
    tryGetMajorMinorUnit(major: number | null, minor: number | null): {
        ret: boolean;
        p0: Nullable$1<number>;
        p1: Nullable$1<number>;
    };
    _tryGetMajorMinorUnit$i(a: Nullable$1<number>, b: Nullable$1<number>): {
        ret: boolean;
        p0: Nullable$1<number>;
        p1: Nullable$1<number>;
    };
    tryGetMajorMinorTimeUnit(major: ST_TimeUnit | null, minor: ST_TimeUnit | null): {
        ret: boolean;
        p0: Nullable$1<ST_TimeUnit>;
        p1: Nullable$1<ST_TimeUnit>;
    };
    _tryGetMajorMinorTimeUnit$i(a: Nullable$1<ST_TimeUnit>, b: Nullable$1<ST_TimeUnit>): {
        ret: boolean;
        p0: Nullable$1<ST_TimeUnit>;
        p1: Nullable$1<ST_TimeUnit>;
    };
}
/**
 * @hidden
 */
export declare let IAxis_$type: Type;
/**
 * @hidden
 */
export declare class CT_SerAx extends Base implements ISupportSetProperty, IAxis {
    static $t: Type;
    private j;
    private b;
    private d;
    private h;
    private e;
    constructor();
    item: any;
    a: CT_Skip;
    c: CT_Skip;
    g: List$1<CT_Extension>;
    readonly f: EG_AxShared;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    readonly axisType: AxisType;
    readonly id: number;
    readonly crossAxId: number;
    readonly sharedProps: EG_AxShared;
    readonly axisCrossesBetween: boolean;
    readonly baseUnit: Tuple$2<Nullable$1<ST_TimeUnit>, boolean>;
    readonly dispUnits: CT_DispUnits;
    readonly tickLabelAlignment: ST_LblAlgn | null;
    readonly _tickLabelAlignment$i: Nullable$1<ST_LblAlgn>;
    readonly tickLabelMultiLevel: boolean | null;
    readonly _tickLabelMultiLevel$i: Nullable$1<boolean>;
    readonly tickLabelSkip: number | null;
    readonly _tickLabelSkip$i: Nullable$1<number>;
    readonly tickMarkSkipValue: number | null;
    readonly _tickMarkSkipValue$i: Nullable$1<number>;
    readonly tickLabelOffset: number | null;
    readonly _tickLabelOffset$i: Nullable$1<number>;
    readonly categoryType: CategoryType | null;
    readonly _categoryType$i: Nullable$1<CategoryType>;
    save(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager): void;
    tryGetMajorMinorUnit(major: number | null, minor: number | null): {
        ret: boolean;
        p0: Nullable$1<number>;
        p1: Nullable$1<number>;
    };
    _tryGetMajorMinorUnit$i(a: Nullable$1<number>, b: Nullable$1<number>): {
        ret: boolean;
        p0: Nullable$1<number>;
        p1: Nullable$1<number>;
    };
    tryGetMajorMinorTimeUnit(major: ST_TimeUnit | null, minor: ST_TimeUnit | null): {
        ret: boolean;
        p0: Nullable$1<ST_TimeUnit>;
        p1: Nullable$1<ST_TimeUnit>;
    };
    _tryGetMajorMinorTimeUnit$i(a: Nullable$1<ST_TimeUnit>, b: Nullable$1<ST_TimeUnit>): {
        ret: boolean;
        p0: Nullable$1<ST_TimeUnit>;
        p1: Nullable$1<ST_TimeUnit>;
    };
}
/**
 * @hidden
 */
export declare class CT_Scaling extends Base implements ISupportSetProperty {
    static $t: Type;
    private f;
    private h;
    private b;
    private d;
    private j;
    constructor();
    e: CT_LogBase;
    g: CT_Orientation;
    a: CT_Double;
    c: CT_Double;
    i: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_LogBase extends Base {
    static $t: Type;
    private b;
    a: number;
    static d(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static e(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Orientation extends Base {
    static $t: Type;
    private b;
    constructor();
    a: ST_Orientation;
    static d(a: XmlPartManagerBase, b: ST_Orientation): {
        p1: ST_Orientation;
    };
    static e(a: XmlPartManagerBase, b: string, c: ST_Orientation): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_AxPos extends Base {
    static $t: Type;
    private b;
    a: ST_AxPos;
    static d(a: XmlPartManagerBase, b: ST_AxPos): {
        p1: ST_AxPos;
    };
    static e(a: XmlPartManagerBase, b: string, c: ST_AxPos): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ChartLines extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    constructor();
    a: CT_ShapeProperties_DML;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Title extends Base implements ISupportSetProperty {
    static $t: Type;
    private f;
    private d;
    private b;
    private h;
    private j;
    private l;
    constructor();
    e: CT_Tx;
    c: CT_Layout;
    a: CT_Boolean;
    g: CT_ShapeProperties_DML;
    i: CT_TextBody_DML;
    k: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Tx extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    item: any;
    toString(): string;
    a: CT_StrRef;
    b: CT_TextBody_DML;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class CT_StrRef extends Base implements ISupportSetProperty {
    static $t: Type;
    private f;
    private b;
    private d;
    constructor();
    e: string;
    a: CT_StrData;
    c: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export interface IProvideXValuesData {
    getValues(): any[];
    getIndexAndValue(a: any, b: number, c: any): {
        p1: number;
        p2: any;
    };
}
/**
 * @hidden
 */
export declare let IProvideXValuesData_$type: Type;
/**
 * @hidden
 */
export declare class CT_StrData extends Base implements ISupportSetProperty, IProvideXValuesData {
    static $t: Type;
    private c;
    private g;
    private e;
    constructor();
    b: CT_UnsignedInt;
    f: List$1<CT_StrVal>;
    d: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    static a(a: IProvideXValuesData, b: CT_UnsignedInt, c: IList): any[];
    getIndexAndValue(a: any, b: number, c: any): {
        p1: number;
        p2: any;
    };
    getValues(): any[];
}
/**
 * @hidden
 */
export declare class CT_StrVal extends Base implements ISupportSetProperty {
    static $t: Type;
    private c;
    private e;
    b: string;
    d: number;
    static f(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static g(a: XmlPartManagerBase, b: string, c: number): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_NumFmt_Chart extends Base {
    static $t: Type;
    private d;
    private b;
    c: string;
    a: boolean;
    static f(a: XmlPartManagerBase, b: string, c: boolean): {
        p1: string;
        p2: boolean;
    };
    static g(a: XmlPartManagerBase, b: string, c: string, d: boolean): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TickMark extends Base {
    static $t: Type;
    private c;
    constructor();
    b: ST_TickMark;
    static e(a: XmlPartManagerBase, b: ST_TickMark): {
        p1: ST_TickMark;
    };
    static f(a: XmlPartManagerBase, b: string, c: ST_TickMark): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TickLblPos extends Base {
    static $t: Type;
    private c;
    constructor();
    b: ST_TickLblPos;
    static e(a: XmlPartManagerBase, b: ST_TickLblPos): {
        p1: ST_TickLblPos;
    };
    static f(a: XmlPartManagerBase, b: string, c: ST_TickLblPos): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Crosses extends Base {
    static $t: Type;
    private b;
    a: ST_Crosses;
    static d(a: XmlPartManagerBase, b: ST_Crosses): {
        p1: ST_Crosses;
    };
    static e(a: XmlPartManagerBase, b: string, c: ST_Crosses): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Skip extends Base {
    static $t: Type;
    private c;
    b: number;
    static d(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static e(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TimeUnit extends Base {
    static $t: Type;
    private c;
    constructor();
    b: ST_TimeUnit;
    static e(a: XmlPartManagerBase, b: ST_TimeUnit): {
        p1: ST_TimeUnit;
    };
    static f(a: XmlPartManagerBase, b: string, c: ST_TimeUnit): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_DateAx extends Base implements ISupportSetProperty, IAxis {
    static $t: Type;
    private t;
    private b;
    private h;
    private j;
    private d;
    private l;
    private f;
    private n;
    private r;
    private o;
    constructor();
    item: any;
    a: CT_Boolean;
    g: CT_LblOffset;
    i: CT_TimeUnit;
    c: CT_AxisUnit;
    k: CT_TimeUnit;
    e: CT_AxisUnit;
    m: CT_TimeUnit;
    q: List$1<CT_Extension>;
    readonly p: EG_AxShared;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    readonly axisType: AxisType;
    readonly id: number;
    readonly crossAxId: number;
    readonly sharedProps: EG_AxShared;
    readonly axisCrossesBetween: boolean;
    readonly baseUnit: Tuple$2<Nullable$1<ST_TimeUnit>, boolean>;
    readonly dispUnits: CT_DispUnits;
    readonly tickLabelAlignment: ST_LblAlgn | null;
    readonly _tickLabelAlignment$i: Nullable$1<ST_LblAlgn>;
    readonly tickLabelMultiLevel: boolean | null;
    readonly _tickLabelMultiLevel$i: Nullable$1<boolean>;
    readonly tickLabelSkip: number | null;
    readonly _tickLabelSkip$i: Nullable$1<number>;
    readonly tickMarkSkipValue: number | null;
    readonly _tickMarkSkipValue$i: Nullable$1<number>;
    readonly tickLabelOffset: number | null;
    readonly _tickLabelOffset$i: Nullable$1<number>;
    readonly categoryType: CategoryType | null;
    readonly _categoryType$i: Nullable$1<CategoryType>;
    save(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager): void;
    tryGetMajorMinorUnit(major: number | null, minor: number | null): {
        ret: boolean;
        p0: Nullable$1<number>;
        p1: Nullable$1<number>;
    };
    _tryGetMajorMinorUnit$i(a: Nullable$1<number>, b: Nullable$1<number>): {
        ret: boolean;
        p0: Nullable$1<number>;
        p1: Nullable$1<number>;
    };
    tryGetMajorMinorTimeUnit(major: ST_TimeUnit | null, minor: ST_TimeUnit | null): {
        ret: boolean;
        p0: Nullable$1<ST_TimeUnit>;
        p1: Nullable$1<ST_TimeUnit>;
    };
    _tryGetMajorMinorTimeUnit$i(a: Nullable$1<ST_TimeUnit>, b: Nullable$1<ST_TimeUnit>): {
        ret: boolean;
        p0: Nullable$1<ST_TimeUnit>;
        p1: Nullable$1<ST_TimeUnit>;
    };
}
/**
 * @hidden
 */
export declare class CT_LblOffset extends Base {
    static $t: Type;
    private d;
    constructor();
    c: number;
    static e(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static f(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_AxisUnit extends Base {
    static $t: Type;
    private b;
    a: number;
    static d(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static e(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_LblAlgn extends Base {
    static $t: Type;
    private b;
    a: ST_LblAlgn;
    static d(a: XmlPartManagerBase, b: ST_LblAlgn): {
        p1: ST_LblAlgn;
    };
    static e(a: XmlPartManagerBase, b: string, c: ST_LblAlgn): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_CatAx extends Base implements ISupportSetProperty, IAxis {
    static $t: Type;
    private r;
    private b;
    private f;
    private h;
    private j;
    private l;
    private d;
    private p;
    private m;
    constructor();
    item: any;
    a: CT_Boolean;
    e: CT_LblAlgn;
    g: CT_LblOffset;
    i: CT_Skip;
    k: CT_Skip;
    c: CT_Boolean;
    o: List$1<CT_Extension>;
    readonly n: EG_AxShared;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    readonly axisType: AxisType;
    readonly id: number;
    readonly crossAxId: number;
    readonly sharedProps: EG_AxShared;
    readonly axisCrossesBetween: boolean;
    readonly baseUnit: Tuple$2<Nullable$1<ST_TimeUnit>, boolean>;
    readonly dispUnits: CT_DispUnits;
    readonly tickLabelAlignment: ST_LblAlgn | null;
    readonly _tickLabelAlignment$i: Nullable$1<ST_LblAlgn>;
    readonly tickLabelMultiLevel: boolean | null;
    readonly _tickLabelMultiLevel$i: Nullable$1<boolean>;
    readonly tickLabelSkip: number | null;
    readonly _tickLabelSkip$i: Nullable$1<number>;
    readonly tickMarkSkipValue: number | null;
    readonly _tickMarkSkipValue$i: Nullable$1<number>;
    readonly tickLabelOffset: number | null;
    readonly _tickLabelOffset$i: Nullable$1<number>;
    readonly categoryType: CategoryType | null;
    readonly _categoryType$i: Nullable$1<CategoryType>;
    save(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager): void;
    tryGetMajorMinorUnit(major: number | null, minor: number | null): {
        ret: boolean;
        p0: Nullable$1<number>;
        p1: Nullable$1<number>;
    };
    _tryGetMajorMinorUnit$i(a: Nullable$1<number>, b: Nullable$1<number>): {
        ret: boolean;
        p0: Nullable$1<number>;
        p1: Nullable$1<number>;
    };
    tryGetMajorMinorTimeUnit(major: ST_TimeUnit | null, minor: ST_TimeUnit | null): {
        ret: boolean;
        p0: Nullable$1<ST_TimeUnit>;
        p1: Nullable$1<ST_TimeUnit>;
    };
    _tryGetMajorMinorTimeUnit$i(a: Nullable$1<ST_TimeUnit>, b: Nullable$1<ST_TimeUnit>): {
        ret: boolean;
        p0: Nullable$1<ST_TimeUnit>;
        p1: Nullable$1<ST_TimeUnit>;
    };
}
/**
 * @hidden
 */
export declare class CT_DispUnitsLbl extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    private f;
    private h;
    constructor();
    a: CT_Layout;
    c: CT_Tx;
    e: CT_ShapeProperties_DML;
    g: CT_TextBody_DML;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_BuiltInUnit extends Base {
    static $t: Type;
    private c;
    constructor();
    b: ST_BuiltInUnit;
    static e(a: XmlPartManagerBase, b: ST_BuiltInUnit): {
        p1: ST_BuiltInUnit;
    };
    static f(a: XmlPartManagerBase, b: string, c: ST_BuiltInUnit): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_DispUnits extends Base implements ISupportSetProperty {
    static $t: Type;
    private h;
    private d;
    private f;
    constructor();
    item: any;
    c: CT_DispUnitsLbl;
    e: List$1<CT_Extension>;
    toString(): string;
    a: CT_Double;
    b: CT_BuiltInUnit;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class CT_CrossBetween extends Base {
    static $t: Type;
    private b;
    a: ST_CrossBetween;
    static d(a: XmlPartManagerBase, b: ST_CrossBetween): {
        p1: ST_CrossBetween;
    };
    static e(a: XmlPartManagerBase, b: string, c: ST_CrossBetween): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ValAx extends Base implements ISupportSetProperty, IAxis {
    static $t: Type;
    private n;
    private f;
    private b;
    private d;
    private h;
    private l;
    private i;
    constructor();
    item: any;
    e: CT_CrossBetween;
    a: CT_AxisUnit;
    c: CT_AxisUnit;
    dispUnits: CT_DispUnits;
    k: List$1<CT_Extension>;
    readonly j: EG_AxShared;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    readonly axisType: AxisType;
    readonly id: number;
    readonly crossAxId: number;
    readonly sharedProps: EG_AxShared;
    readonly axisCrossesBetween: boolean;
    readonly baseUnit: Tuple$2<Nullable$1<ST_TimeUnit>, boolean>;
    readonly tickLabelAlignment: ST_LblAlgn | null;
    readonly _tickLabelAlignment$i: Nullable$1<ST_LblAlgn>;
    readonly tickLabelMultiLevel: boolean | null;
    readonly _tickLabelMultiLevel$i: Nullable$1<boolean>;
    readonly tickLabelSkip: number | null;
    readonly _tickLabelSkip$i: Nullable$1<number>;
    readonly tickMarkSkipValue: number | null;
    readonly _tickMarkSkipValue$i: Nullable$1<number>;
    readonly tickLabelOffset: number | null;
    readonly _tickLabelOffset$i: Nullable$1<number>;
    readonly categoryType: CategoryType | null;
    readonly _categoryType$i: Nullable$1<CategoryType>;
    save(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager): void;
    tryGetMajorMinorUnit(major: number | null, minor: number | null): {
        ret: boolean;
        p0: Nullable$1<number>;
        p1: Nullable$1<number>;
    };
    _tryGetMajorMinorUnit$i(a: Nullable$1<number>, b: Nullable$1<number>): {
        ret: boolean;
        p0: Nullable$1<number>;
        p1: Nullable$1<number>;
    };
    tryGetMajorMinorTimeUnit(major: ST_TimeUnit | null, minor: ST_TimeUnit | null): {
        ret: boolean;
        p0: Nullable$1<ST_TimeUnit>;
        p1: Nullable$1<ST_TimeUnit>;
    };
    _tryGetMajorMinorTimeUnit$i(a: Nullable$1<ST_TimeUnit>, b: Nullable$1<ST_TimeUnit>): {
        ret: boolean;
        p0: Nullable$1<ST_TimeUnit>;
        p1: Nullable$1<ST_TimeUnit>;
    };
}
/**
 * @hidden
 */
export declare class CT_SizeRepresents extends Base {
    static $t: Type;
    private c;
    constructor();
    b: ST_SizeRepresents;
    static e(a: XmlPartManagerBase, b: ST_SizeRepresents): {
        p1: ST_SizeRepresents;
    };
    static f(a: XmlPartManagerBase, b: string, c: ST_SizeRepresents): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_BubbleScale extends Base {
    static $t: Type;
    private d;
    constructor();
    c: number;
    static e(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static f(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export interface ISeries {
    readonly index: number;
    readonly chart: IChart;
    readonly seriesType: SeriesType;
    readonly sharedProps: EG_SerShared;
    getBubbleSizes(a: Sheet, b: WorkbookLoadManagerExcel2007): SeriesValues;
    readonly cT_ErrBars: CT_ErrBars;
    readonly invertIfNegativeValue: boolean;
    readonly cT_NumDataSource: CT_NumDataSource;
    readonly cT_AxDataSource: CT_AxDataSource;
    readonly cT_Marker: CT_Marker_Chart;
    readonly cT_PictureOptions: CT_PictureOptions;
    getExplosion(): CT_UnsignedInt;
    getSmooth(): CT_Boolean;
    getTrendlines(): List$1<CT_Trendline>;
    getDLbls(a: CT_Extension_DataLabelsRange): {
        ret: CT_DLbls;
        p0: CT_Extension_DataLabelsRange;
    };
    getDataPoints(): List$1<CT_DPt>;
    readonly isExplicitlyNoFill: boolean;
    readonly isBubble3D: boolean;
    getSeriesChartType(a: ChartType, b: SeriesType): ChartType;
}
/**
 * @hidden
 */
export declare let ISeries_$type: Type;
/**
 * @hidden
 */
export declare class CT_BubbleSer extends Base implements ISupportSetProperty, ISeries {
    static $t: Type;
    private d;
    private q;
    private h;
    private w;
    private s;
    private f;
    private l;
    private j;
    private b;
    private u;
    private m;
    constructor();
    c: CT_Boolean;
    p: List$1<CT_DPt>;
    g: CT_DLbls;
    v: List$1<CT_Trendline>;
    r: List$1<CT_ErrBars>;
    e: CT_AxDataSource;
    k: CT_NumDataSource;
    i: CT_NumDataSource;
    a: CT_Boolean;
    t: List$1<CT_Extension>;
    readonly n: EG_SerShared;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    o: IChart;
    readonly chart: IChart;
    readonly seriesType: SeriesType;
    readonly sharedProps: EG_SerShared;
    getBubbleSizes(a: Sheet, b: WorkbookLoadManagerExcel2007): SeriesValues;
    readonly cT_ErrBars: CT_ErrBars;
    readonly invertIfNegativeValue: boolean;
    readonly cT_NumDataSource: CT_NumDataSource;
    readonly cT_AxDataSource: CT_AxDataSource;
    readonly cT_Marker: CT_Marker_Chart;
    readonly cT_PictureOptions: CT_PictureOptions;
    getExplosion(): CT_UnsignedInt;
    getSmooth(): CT_Boolean;
    readonly index: number;
    getTrendlines(): List$1<CT_Trendline>;
    getDLbls(a: CT_Extension_DataLabelsRange): {
        ret: CT_DLbls;
        p0: CT_Extension_DataLabelsRange;
    };
    getDataPoints(): List$1<CT_DPt>;
    readonly isExplicitlyNoFill: boolean;
    readonly isBubble3D: boolean;
    getSeriesChartType(a: ChartType, b: SeriesType): ChartType;
}
/**
 * @hidden
 */
export declare class CT_SerTx extends Base implements ISupportSetProperty {
    static $t: Type;
    private c;
    item: any;
    toString(): string;
    a: CT_StrRef;
    e: string;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class CT_DPt extends Base implements ISupportSetProperty {
    static $t: Type;
    private h;
    private d;
    private j;
    private b;
    private f;
    private n;
    private l;
    private p;
    constructor();
    g: CT_UnsignedInt;
    c: CT_Boolean;
    i: CT_Marker_Chart;
    a: CT_Boolean;
    e: CT_UnsignedInt;
    m: CT_ShapeProperties_DML;
    k: CT_PictureOptions;
    o: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Marker_Chart extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    private b;
    private f;
    private i;
    constructor();
    c: CT_MarkerStyle;
    a: CT_MarkerSize;
    e: CT_ShapeProperties_DML;
    h: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    j: Nullable$1<boolean>;
    static g(a: XmlPartManagerBase, b: boolean): {
        ret: boolean;
        p1: boolean;
    };
    static l(a: XmlPartManagerBase, b: string, c: boolean): void;
}
/**
 * @hidden
 */
export declare class CT_MarkerStyle extends Base {
    static $t: Type;
    private b;
    a: ST_MarkerStyle;
    static d(a: XmlPartManagerBase, b: ST_MarkerStyle): {
        p1: ST_MarkerStyle;
    };
    static e(a: XmlPartManagerBase, b: string, c: ST_MarkerStyle): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_MarkerSize extends Base {
    static $t: Type;
    private c;
    constructor();
    b: number;
    static e(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static f(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_PictureOptions extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    private f;
    private b;
    private h;
    private j;
    constructor();
    c: CT_Boolean;
    e: CT_Boolean;
    a: CT_Boolean;
    g: CT_PictureFormat;
    i: CT_PictureStackUnit;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_PictureFormat extends Base {
    static $t: Type;
    private b;
    a: ST_PictureFormat;
    static d(a: XmlPartManagerBase, b: ST_PictureFormat): {
        p1: ST_PictureFormat;
    };
    static e(a: XmlPartManagerBase, b: string, c: ST_PictureFormat): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_PictureStackUnit extends Base {
    static $t: Type;
    private b;
    a: number;
    static d(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static e(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_DLblPos extends Base {
    static $t: Type;
    private b;
    a: ST_DLblPos;
    static d(a: XmlPartManagerBase, b: ST_DLblPos): {
        p1: ST_DLblPos;
    };
    static e(a: XmlPartManagerBase, b: string, c: ST_DLblPos): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Trendline extends Base implements ISupportSetProperty {
    static $t: Type;
    private x;
    private t;
    private r;
    private l;
    private n;
    private h;
    private f;
    private j;
    private d;
    private b;
    private p;
    private v;
    constructor();
    w: string;
    s: CT_ShapeProperties_DML;
    q: CT_TrendlineType;
    k: CT_Order;
    m: CT_Period;
    g: CT_Double;
    e: CT_Double;
    i: CT_Double;
    c: CT_Boolean;
    a: CT_Boolean;
    o: CT_TrendlineLbl;
    u: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TrendlineType extends Base {
    static $t: Type;
    private c;
    constructor();
    b: ST_TrendlineType;
    static e(a: XmlPartManagerBase, b: ST_TrendlineType): {
        p1: ST_TrendlineType;
    };
    static f(a: XmlPartManagerBase, b: string, c: ST_TrendlineType): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Order extends Base {
    static $t: Type;
    private c;
    constructor();
    b: number;
    static e(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static f(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Period extends Base {
    static $t: Type;
    private c;
    constructor();
    b: number;
    static e(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static f(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TrendlineLbl extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private f;
    private d;
    private h;
    private j;
    private l;
    constructor();
    a: CT_Layout;
    e: CT_Tx;
    c: CT_NumFmt_Chart;
    g: CT_ShapeProperties_DML;
    i: CT_TextBody_DML;
    k: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ErrBars extends Base implements ISupportSetProperty {
    static $t: Type;
    private h;
    private f;
    private j;
    private b;
    private n;
    private l;
    private d;
    private p;
    private r;
    constructor();
    g: CT_ErrDir;
    e: CT_ErrBarType;
    i: CT_ErrValType;
    a: CT_Boolean;
    m: CT_NumDataSource;
    k: CT_NumDataSource;
    c: CT_Double;
    o: CT_ShapeProperties_DML;
    q: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ErrDir extends Base {
    static $t: Type;
    private b;
    a: ST_ErrDir;
    static d(a: XmlPartManagerBase, b: ST_ErrDir): {
        p1: ST_ErrDir;
    };
    static e(a: XmlPartManagerBase, b: string, c: ST_ErrDir): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ErrBarType extends Base {
    static $t: Type;
    private c;
    constructor();
    b: ST_ErrBarType;
    static e(a: XmlPartManagerBase, b: ST_ErrBarType): {
        p1: ST_ErrBarType;
    };
    static f(a: XmlPartManagerBase, b: string, c: ST_ErrBarType): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ErrValType extends Base {
    static $t: Type;
    private c;
    constructor();
    b: ST_ErrValType;
    static e(a: XmlPartManagerBase, b: ST_ErrValType): {
        p1: ST_ErrValType;
    };
    static f(a: XmlPartManagerBase, b: string, c: ST_ErrValType): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_NumDataSource extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    item: any;
    toString(): string;
    b: CT_NumRef;
    a: CT_NumData;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class CT_NumData extends Base implements ISupportSetProperty, IProvideXValuesData {
    static $t: Type;
    private h;
    private b;
    private f;
    private d;
    constructor();
    g: string;
    a: CT_UnsignedInt;
    e: List$1<CT_NumVal>;
    c: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    getIndexAndValue(a: any, b: number, c: any): {
        p1: number;
        p2: any;
    };
    getValues(): any[];
}
/**
 * @hidden
 */
export declare class CT_NumVal extends Base implements ISupportSetProperty {
    static $t: Type;
    private e;
    private g;
    private b;
    d: string;
    f: number;
    a: string;
    static h(a: XmlPartManagerBase, b: number, c: string): {
        p1: number;
        p2: string;
    };
    static i(a: XmlPartManagerBase, b: string, c: string, d: number): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_NumRef extends Base implements ISupportSetProperty {
    static $t: Type;
    private f;
    private b;
    private d;
    constructor();
    e: string;
    a: CT_NumData;
    c: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_AxDataSource extends Base implements ISupportSetProperty {
    static $t: Type;
    private g;
    item: any;
    toString(): string;
    a: CT_MultiLvlStrRef;
    c: CT_NumRef;
    b: CT_NumData;
    e: CT_StrRef;
    d: CT_StrData;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class CT_MultiLvlStrRef extends Base implements ISupportSetProperty {
    static $t: Type;
    private f;
    private b;
    private d;
    constructor();
    e: string;
    a: CT_MultiLvlStrData;
    c: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export interface IChart {
    getChartType(a: CT_ChartSpace, b: ISeries): ChartType;
    readonly seriesType: SeriesType;
    readonly sT_Shape: ST_Shape | null;
    readonly _sT_Shape$i: Nullable$1<ST_Shape>;
    getSeries(): List$1<ISeries>;
    getHoleSize(): number | null;
    _getHoleSize$i(): Nullable$1<number>;
    getFirstSliceAngle(): number | null;
    _getFirstSliceAngle$i(): Nullable$1<number>;
    getSerLines(): CT_ChartLines;
    getOverlap(): number | null;
    _getOverlap$i(): Nullable$1<number>;
    getVaryColors(): boolean | null;
    _getVaryColors$i(): Nullable$1<boolean>;
    getGap(a: CT_GapAmount, b: CT_GapAmount): {
        p0: CT_GapAmount;
        p1: CT_GapAmount;
    };
    readonly axisIds: List$1<CT_UnsignedInt>;
}
/**
 * @hidden
 */
export declare let IChart_$type: Type;
/**
 * @hidden
 */
export declare class CT_BubbleChart extends Base implements ISupportSetProperty, IChart {
    static $t: Type;
    private f;
    private r;
    private j;
    private b;
    private h;
    private d;
    private l;
    private n;
    private p;
    constructor();
    e: CT_Boolean;
    q: List$1<CT_BubbleSer>;
    i: CT_DLbls;
    a: CT_Boolean;
    g: CT_BubbleScale;
    c: CT_Boolean;
    k: CT_SizeRepresents;
    m: List$1<CT_UnsignedInt>;
    o: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    getChartType(a: CT_ChartSpace, b: ISeries): ChartType;
    readonly seriesType: SeriesType;
    readonly sT_Shape: ST_Shape | null;
    readonly _sT_Shape$i: Nullable$1<ST_Shape>;
    getSeries(): List$1<ISeries>;
    getHoleSize(): number | null;
    _getHoleSize$i(): Nullable$1<number>;
    getFirstSliceAngle(): number | null;
    _getFirstSliceAngle$i(): Nullable$1<number>;
    getSerLines(): CT_ChartLines;
    getOverlap(): number | null;
    _getOverlap$i(): Nullable$1<number>;
    getVaryColors(): boolean | null;
    _getVaryColors$i(): Nullable$1<boolean>;
    getGap(a: CT_GapAmount, b: CT_GapAmount): {
        p0: CT_GapAmount;
        p1: CT_GapAmount;
    };
    readonly axisIds: List$1<CT_UnsignedInt>;
}
/**
 * @hidden
 */
export interface IChart3D {
}
/**
 * @hidden
 */
export declare let IChart3D_$type: Type;
/**
 * @hidden
 */
export declare class CT_Surface3DChart extends Base implements ISupportSetProperty, IChart, IChart3D {
    static $t: Type;
    private d;
    private f;
    private a;
    constructor();
    c: List$1<CT_UnsignedInt>;
    e: List$1<CT_Extension>;
    readonly b: EG_SurfaceChartShared;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    getChartType(a: CT_ChartSpace, b: ISeries): ChartType;
    readonly seriesType: SeriesType;
    readonly sT_Shape: ST_Shape | null;
    readonly _sT_Shape$i: Nullable$1<ST_Shape>;
    getSeries(): List$1<ISeries>;
    getGap(a: CT_GapAmount, b: CT_GapAmount): {
        p0: CT_GapAmount;
        p1: CT_GapAmount;
    };
    getHoleSize(): number | null;
    _getHoleSize$i(): Nullable$1<number>;
    getFirstSliceAngle(): number | null;
    _getFirstSliceAngle$i(): Nullable$1<number>;
    getSerLines(): CT_ChartLines;
    getOverlap(): number | null;
    _getOverlap$i(): Nullable$1<number>;
    getVaryColors(): boolean | null;
    _getVaryColors$i(): Nullable$1<boolean>;
    readonly axisIds: List$1<CT_UnsignedInt>;
}
/**
 * @hidden
 */
export declare class CT_SurfaceSer extends Base implements ISupportSetProperty, ISeries {
    static $t: Type;
    private b;
    private d;
    private i;
    private e;
    constructor();
    a: CT_AxDataSource;
    c: CT_NumDataSource;
    h: List$1<CT_Extension>;
    readonly f: EG_SerShared;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    g: IChart;
    readonly chart: IChart;
    readonly seriesType: SeriesType;
    readonly sharedProps: EG_SerShared;
    getBubbleSizes(a: Sheet, b: WorkbookLoadManagerExcel2007): SeriesValues;
    readonly cT_ErrBars: CT_ErrBars;
    readonly invertIfNegativeValue: boolean;
    readonly cT_NumDataSource: CT_NumDataSource;
    readonly cT_AxDataSource: CT_AxDataSource;
    readonly cT_Marker: CT_Marker_Chart;
    readonly cT_PictureOptions: CT_PictureOptions;
    getExplosion(): CT_UnsignedInt;
    getSmooth(): CT_Boolean;
    readonly index: number;
    getTrendlines(): List$1<CT_Trendline>;
    getDLbls(a: CT_Extension_DataLabelsRange): {
        ret: CT_DLbls;
        p0: CT_Extension_DataLabelsRange;
    };
    getDataPoints(): List$1<CT_DPt>;
    readonly isExplicitlyNoFill: boolean;
    readonly isBubble3D: boolean;
    getSeriesChartType(a: ChartType, b: SeriesType): ChartType;
}
/**
 * @hidden
 */
export declare class CT_BandFmt extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: CT_UnsignedInt;
    c: CT_ShapeProperties_DML;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_SurfaceChart extends Base implements ISupportSetProperty, IChart {
    static $t: Type;
    private d;
    private f;
    private a;
    constructor();
    c: List$1<CT_UnsignedInt>;
    e: List$1<CT_Extension>;
    readonly b: EG_SurfaceChartShared;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    getChartType(a: CT_ChartSpace, b: ISeries): ChartType;
    readonly seriesType: SeriesType;
    readonly sT_Shape: ST_Shape | null;
    readonly _sT_Shape$i: Nullable$1<ST_Shape>;
    getSeries(): List$1<ISeries>;
    getHoleSize(): number | null;
    _getHoleSize$i(): Nullable$1<number>;
    getFirstSliceAngle(): number | null;
    _getFirstSliceAngle$i(): Nullable$1<number>;
    getSerLines(): CT_ChartLines;
    getOverlap(): number | null;
    _getOverlap$i(): Nullable$1<number>;
    getVaryColors(): boolean | null;
    _getVaryColors$i(): Nullable$1<boolean>;
    getGap(a: CT_GapAmount, b: CT_GapAmount): {
        p0: CT_GapAmount;
        p1: CT_GapAmount;
    };
    readonly axisIds: List$1<CT_UnsignedInt>;
}
/**
 * @hidden
 */
export declare class CT_SecondPieSize extends Base {
    static $t: Type;
    private d;
    constructor();
    c: number;
    static e(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static f(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_SplitType extends Base {
    static $t: Type;
    private c;
    constructor();
    b: ST_SplitType;
    static e(a: XmlPartManagerBase, b: ST_SplitType): {
        p1: ST_SplitType;
    };
    static f(a: XmlPartManagerBase, b: string, c: ST_SplitType): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_OfPieType extends Base {
    static $t: Type;
    private c;
    constructor();
    b: ST_OfPieType;
    static e(a: XmlPartManagerBase, b: ST_OfPieType): {
        p1: ST_OfPieType;
    };
    static f(a: XmlPartManagerBase, b: string, c: ST_OfPieType): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_OfPieChart extends Base implements ISupportSetProperty, IChart {
    static $t: Type;
    private f;
    private d;
    private j;
    private b;
    private n;
    private h;
    private r;
    private p;
    private k;
    constructor();
    e: CT_OfPieType;
    c: CT_GapAmount;
    i: CT_SplitType;
    a: CT_Double;
    m: List$1<CT_UnsignedInt>;
    g: CT_SecondPieSize;
    q: List$1<CT_ChartLines>;
    o: List$1<CT_Extension>;
    readonly l: EG_PieChartShared;
    toString(): string;
    setProperty(a: ElementPropertyIds, b: any): void;
    getChartType(a: CT_ChartSpace, b: ISeries): ChartType;
    readonly seriesType: SeriesType;
    readonly sT_Shape: ST_Shape | null;
    readonly _sT_Shape$i: Nullable$1<ST_Shape>;
    getSeries(): List$1<ISeries>;
    getHoleSize(): number | null;
    _getHoleSize$i(): Nullable$1<number>;
    getFirstSliceAngle(): number | null;
    _getFirstSliceAngle$i(): Nullable$1<number>;
    getSerLines(): CT_ChartLines;
    getOverlap(): number | null;
    _getOverlap$i(): Nullable$1<number>;
    getVaryColors(): boolean | null;
    _getVaryColors$i(): Nullable$1<boolean>;
    getGap(a: CT_GapAmount, b: CT_GapAmount): {
        p0: CT_GapAmount;
        p1: CT_GapAmount;
    };
    readonly axisIds: List$1<CT_UnsignedInt>;
}
/**
 * @hidden
 */
export declare class CT_PieSer extends Base implements ISupportSetProperty, ISeries {
    static $t: Type;
    private b;
    private m;
    private f;
    private d;
    private h;
    private o;
    private i;
    constructor();
    a: CT_UnsignedInt;
    l: List$1<CT_DPt>;
    e: CT_DLbls;
    c: CT_AxDataSource;
    g: CT_NumDataSource;
    n: List$1<CT_Extension>;
    readonly j: EG_SerShared;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    k: IChart;
    readonly chart: IChart;
    readonly seriesType: SeriesType;
    readonly sharedProps: EG_SerShared;
    getBubbleSizes(a: Sheet, b: WorkbookLoadManagerExcel2007): SeriesValues;
    readonly cT_ErrBars: CT_ErrBars;
    readonly invertIfNegativeValue: boolean;
    readonly cT_NumDataSource: CT_NumDataSource;
    readonly cT_AxDataSource: CT_AxDataSource;
    readonly cT_Marker: CT_Marker_Chart;
    readonly cT_PictureOptions: CT_PictureOptions;
    getExplosion(): CT_UnsignedInt;
    getSmooth(): CT_Boolean;
    readonly index: number;
    getTrendlines(): List$1<CT_Trendline>;
    getDLbls(a: CT_Extension_DataLabelsRange): {
        ret: CT_DLbls;
        p0: CT_Extension_DataLabelsRange;
    };
    getDataPoints(): List$1<CT_DPt>;
    readonly isExplicitlyNoFill: boolean;
    readonly isBubble3D: boolean;
    getSeriesChartType(a: ChartType, b: SeriesType): ChartType;
}
/**
 * @hidden
 */
export declare class CT_GapAmount extends Base {
    static $t: Type;
    private d;
    constructor();
    c: number;
    static e(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static f(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Bar3DChart extends Base implements ISupportSetProperty, IChart, IChart3D {
    static $t: Type;
    private d;
    private b;
    private f;
    private j;
    private l;
    private g;
    constructor();
    c: CT_GapAmount;
    a: CT_GapAmount;
    e: CT_Shape_Chart;
    i: List$1<CT_UnsignedInt>;
    k: List$1<CT_Extension>;
    readonly h: EG_BarChartShared;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    getChartType(a: CT_ChartSpace, b: ISeries): ChartType;
    readonly seriesType: SeriesType;
    readonly sT_Shape: ST_Shape | null;
    readonly _sT_Shape$i: Nullable$1<ST_Shape>;
    getSeries(): List$1<ISeries>;
    getGap(a: CT_GapAmount, b: CT_GapAmount): {
        p0: CT_GapAmount;
        p1: CT_GapAmount;
    };
    getHoleSize(): number | null;
    _getHoleSize$i(): Nullable$1<number>;
    getFirstSliceAngle(): number | null;
    _getFirstSliceAngle$i(): Nullable$1<number>;
    getSerLines(): CT_ChartLines;
    getOverlap(): number | null;
    _getOverlap$i(): Nullable$1<number>;
    getVaryColors(): boolean | null;
    _getVaryColors$i(): Nullable$1<boolean>;
    readonly axisIds: List$1<CT_UnsignedInt>;
}
/**
 * @hidden
 */
export declare class CT_BarDir extends Base {
    static $t: Type;
    private c;
    constructor();
    b: ST_BarDir;
    static e(a: XmlPartManagerBase, b: ST_BarDir): {
        p1: ST_BarDir;
    };
    static f(a: XmlPartManagerBase, b: string, c: ST_BarDir): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_BarGrouping extends Base {
    static $t: Type;
    private c;
    constructor();
    b: ST_BarGrouping;
    static e(a: XmlPartManagerBase, b: ST_BarGrouping): {
        p1: ST_BarGrouping;
    };
    static f(a: XmlPartManagerBase, b: string, c: ST_BarGrouping): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_BarSer extends Base implements ISupportSetProperty, ISeries {
    static $t: Type;
    private b;
    private l;
    private s;
    private f;
    private w;
    private h;
    private d;
    private j;
    private n;
    private u;
    private o;
    constructor();
    a: CT_Boolean;
    k: CT_PictureOptions;
    r: List$1<CT_DPt>;
    e: CT_DLbls;
    v: List$1<CT_Trendline>;
    g: CT_ErrBars;
    c: CT_AxDataSource;
    i: CT_NumDataSource;
    m: CT_Shape_Chart;
    t: List$1<CT_Extension>;
    readonly p: EG_SerShared;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    q: IChart;
    readonly chart: IChart;
    readonly seriesType: SeriesType;
    readonly sharedProps: EG_SerShared;
    getBubbleSizes(a: Sheet, b: WorkbookLoadManagerExcel2007): SeriesValues;
    readonly cT_ErrBars: CT_ErrBars;
    readonly invertIfNegativeValue: boolean;
    readonly cT_NumDataSource: CT_NumDataSource;
    readonly cT_AxDataSource: CT_AxDataSource;
    readonly cT_Marker: CT_Marker_Chart;
    readonly cT_PictureOptions: CT_PictureOptions;
    getExplosion(): CT_UnsignedInt;
    getSmooth(): CT_Boolean;
    readonly index: number;
    getTrendlines(): List$1<CT_Trendline>;
    getDLbls(a: CT_Extension_DataLabelsRange): {
        ret: CT_DLbls;
        p0: CT_Extension_DataLabelsRange;
    };
    getDataPoints(): List$1<CT_DPt>;
    readonly isExplicitlyNoFill: boolean;
    readonly isBubble3D: boolean;
    getSeriesChartType(a: ChartType, b: SeriesType): ChartType;
}
/**
 * @hidden
 */
export declare class CT_Shape_Chart extends Base {
    static $t: Type;
    private c;
    constructor();
    b: ST_Shape;
    static e(a: XmlPartManagerBase, b: ST_Shape): {
        p1: ST_Shape;
    };
    static f(a: XmlPartManagerBase, b: string, c: ST_Shape): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Overlap extends Base {
    static $t: Type;
    private c;
    constructor();
    b: number;
    static e(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static f(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_BarChart extends Base implements ISupportSetProperty, IChart {
    static $t: Type;
    private b;
    private d;
    private l;
    private h;
    private j;
    private e;
    constructor();
    a: CT_GapAmount;
    c: CT_Overlap;
    k: List$1<CT_ChartLines>;
    g: List$1<CT_UnsignedInt>;
    i: List$1<CT_Extension>;
    readonly f: EG_BarChartShared;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    getChartType(a: CT_ChartSpace, b: ISeries): ChartType;
    readonly seriesType: SeriesType;
    readonly sT_Shape: ST_Shape | null;
    readonly _sT_Shape$i: Nullable$1<ST_Shape>;
    getSeries(): List$1<ISeries>;
    getHoleSize(): number | null;
    _getHoleSize$i(): Nullable$1<number>;
    getFirstSliceAngle(): number | null;
    _getFirstSliceAngle$i(): Nullable$1<number>;
    getSerLines(): CT_ChartLines;
    getOverlap(): number | null;
    _getOverlap$i(): Nullable$1<number>;
    getVaryColors(): boolean | null;
    _getVaryColors$i(): Nullable$1<boolean>;
    getGap(a: CT_GapAmount, b: CT_GapAmount): {
        p0: CT_GapAmount;
        p1: CT_GapAmount;
    };
    readonly axisIds: List$1<CT_UnsignedInt>;
}
/**
 * @hidden
 */
export declare class CT_HoleSize extends Base {
    static $t: Type;
    private c;
    constructor();
    b: number;
    static e(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static f(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_DoughnutChart extends Base implements ISupportSetProperty, IChart {
    static $t: Type;
    private b;
    private d;
    private h;
    private e;
    constructor();
    a: CT_FirstSliceAng;
    c: CT_HoleSize;
    g: List$1<CT_Extension>;
    readonly f: EG_PieChartShared;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    getChartType(a: CT_ChartSpace, b: ISeries): ChartType;
    readonly seriesType: SeriesType;
    readonly sT_Shape: ST_Shape | null;
    readonly _sT_Shape$i: Nullable$1<ST_Shape>;
    getSeries(): List$1<ISeries>;
    getHoleSize(): number | null;
    _getHoleSize$i(): Nullable$1<number>;
    getFirstSliceAngle(): number | null;
    _getFirstSliceAngle$i(): Nullable$1<number>;
    getSerLines(): CT_ChartLines;
    getOverlap(): number | null;
    _getOverlap$i(): Nullable$1<number>;
    getVaryColors(): boolean | null;
    _getVaryColors$i(): Nullable$1<boolean>;
    getGap(a: CT_GapAmount, b: CT_GapAmount): {
        p0: CT_GapAmount;
        p1: CT_GapAmount;
    };
    readonly axisIds: List$1<CT_UnsignedInt>;
}
/**
 * @hidden
 */
export declare class CT_FirstSliceAng extends Base {
    static $t: Type;
    private d;
    constructor();
    c: number;
    static e(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static f(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Pie3DChart extends Base implements ISupportSetProperty, IChart, IChart3D {
    static $t: Type;
    private d;
    private a;
    constructor();
    c: List$1<CT_Extension>;
    readonly b: EG_PieChartShared;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    getChartType(a: CT_ChartSpace, b: ISeries): ChartType;
    readonly seriesType: SeriesType;
    readonly sT_Shape: ST_Shape | null;
    readonly _sT_Shape$i: Nullable$1<ST_Shape>;
    getSeries(): List$1<ISeries>;
    getGap(a: CT_GapAmount, b: CT_GapAmount): {
        p0: CT_GapAmount;
        p1: CT_GapAmount;
    };
    getHoleSize(): number | null;
    _getHoleSize$i(): Nullable$1<number>;
    getFirstSliceAngle(): number | null;
    _getFirstSliceAngle$i(): Nullable$1<number>;
    getSerLines(): CT_ChartLines;
    getOverlap(): number | null;
    _getOverlap$i(): Nullable$1<number>;
    getVaryColors(): boolean | null;
    _getVaryColors$i(): Nullable$1<boolean>;
    readonly axisIds: List$1<CT_UnsignedInt>;
}
/**
 * @hidden
 */
export declare class CT_PieChart extends Base implements ISupportSetProperty, IChart {
    static $t: Type;
    private b;
    private f;
    private c;
    constructor();
    a: CT_FirstSliceAng;
    e: List$1<CT_Extension>;
    readonly d: EG_PieChartShared;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    getChartType(a: CT_ChartSpace, b: ISeries): ChartType;
    readonly seriesType: SeriesType;
    readonly sT_Shape: ST_Shape | null;
    readonly _sT_Shape$i: Nullable$1<ST_Shape>;
    getSeries(): List$1<ISeries>;
    getHoleSize(): number | null;
    _getHoleSize$i(): Nullable$1<number>;
    getFirstSliceAngle(): number | null;
    _getFirstSliceAngle$i(): Nullable$1<number>;
    getSerLines(): CT_ChartLines;
    getOverlap(): number | null;
    _getOverlap$i(): Nullable$1<number>;
    getVaryColors(): boolean | null;
    _getVaryColors$i(): Nullable$1<boolean>;
    getGap(a: CT_GapAmount, b: CT_GapAmount): {
        p0: CT_GapAmount;
        p1: CT_GapAmount;
    };
    readonly axisIds: List$1<CT_UnsignedInt>;
}
/**
 * @hidden
 */
export declare class CT_ScatterSer extends Base implements ISupportSetProperty, ISeries {
    static $t: Type;
    private h;
    private o;
    private f;
    private u;
    private q;
    private d;
    private j;
    private b;
    private s;
    private k;
    constructor();
    g: CT_Marker_Chart;
    n: List$1<CT_DPt>;
    e: CT_DLbls;
    t: List$1<CT_Trendline>;
    p: List$1<CT_ErrBars>;
    c: CT_AxDataSource;
    i: CT_NumDataSource;
    a: CT_Boolean;
    r: List$1<CT_Extension>;
    readonly l: EG_SerShared;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    m: IChart;
    readonly chart: IChart;
    readonly seriesType: SeriesType;
    readonly sharedProps: EG_SerShared;
    getBubbleSizes(a: Sheet, b: WorkbookLoadManagerExcel2007): SeriesValues;
    readonly cT_ErrBars: CT_ErrBars;
    readonly invertIfNegativeValue: boolean;
    readonly cT_NumDataSource: CT_NumDataSource;
    readonly cT_AxDataSource: CT_AxDataSource;
    readonly cT_Marker: CT_Marker_Chart;
    readonly cT_PictureOptions: CT_PictureOptions;
    getExplosion(): CT_UnsignedInt;
    getSmooth(): CT_Boolean;
    readonly index: number;
    getTrendlines(): List$1<CT_Trendline>;
    getDLbls(a: CT_Extension_DataLabelsRange): {
        ret: CT_DLbls;
        p0: CT_Extension_DataLabelsRange;
    };
    getDataPoints(): List$1<CT_DPt>;
    readonly isExplicitlyNoFill: boolean;
    readonly isBubble3D: boolean;
    getSeriesChartType(a: ChartType, b: SeriesType): ChartType;
}
/**
 * @hidden
 */
export declare class CT_ScatterStyle extends Base {
    static $t: Type;
    private c;
    constructor();
    b: ST_ScatterStyle;
    static e(a: XmlPartManagerBase, b: ST_ScatterStyle): {
        p1: ST_ScatterStyle;
    };
    static f(a: XmlPartManagerBase, b: string, c: ST_ScatterStyle): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ScatterChart extends Base implements ISupportSetProperty, IChart {
    static $t: Type;
    private f;
    private b;
    private l;
    private d;
    private h;
    private j;
    constructor();
    e: CT_ScatterStyle;
    a: CT_Boolean;
    k: List$1<CT_ScatterSer>;
    c: CT_DLbls;
    g: List$1<CT_UnsignedInt>;
    i: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    getChartType(a: CT_ChartSpace, b: ISeries): ChartType;
    readonly seriesType: SeriesType;
    readonly sT_Shape: ST_Shape | null;
    readonly _sT_Shape$i: Nullable$1<ST_Shape>;
    getSeries(): List$1<ISeries>;
    getHoleSize(): number | null;
    _getHoleSize$i(): Nullable$1<number>;
    getFirstSliceAngle(): number | null;
    _getFirstSliceAngle$i(): Nullable$1<number>;
    getSerLines(): CT_ChartLines;
    getOverlap(): number | null;
    _getOverlap$i(): Nullable$1<number>;
    getVaryColors(): boolean | null;
    _getVaryColors$i(): Nullable$1<boolean>;
    getGap(a: CT_GapAmount, b: CT_GapAmount): {
        p0: CT_GapAmount;
        p1: CT_GapAmount;
    };
    readonly axisIds: List$1<CT_UnsignedInt>;
}
/**
 * @hidden
 */
export declare class CT_RadarSer extends Base implements ISupportSetProperty, ISeries {
    static $t: Type;
    private f;
    private m;
    private d;
    private b;
    private h;
    private o;
    private i;
    constructor();
    e: CT_Marker_Chart;
    l: List$1<CT_DPt>;
    c: CT_DLbls;
    a: CT_AxDataSource;
    g: CT_NumDataSource;
    n: List$1<CT_Extension>;
    readonly j: EG_SerShared;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    k: IChart;
    readonly chart: IChart;
    readonly seriesType: SeriesType;
    readonly sharedProps: EG_SerShared;
    getBubbleSizes(a: Sheet, b: WorkbookLoadManagerExcel2007): SeriesValues;
    readonly cT_ErrBars: CT_ErrBars;
    readonly invertIfNegativeValue: boolean;
    readonly cT_NumDataSource: CT_NumDataSource;
    readonly cT_AxDataSource: CT_AxDataSource;
    readonly cT_Marker: CT_Marker_Chart;
    readonly cT_PictureOptions: CT_PictureOptions;
    getExplosion(): CT_UnsignedInt;
    getSmooth(): CT_Boolean;
    readonly index: number;
    getTrendlines(): List$1<CT_Trendline>;
    getDLbls(a: CT_Extension_DataLabelsRange): {
        ret: CT_DLbls;
        p0: CT_Extension_DataLabelsRange;
    };
    getDataPoints(): List$1<CT_DPt>;
    readonly isExplicitlyNoFill: boolean;
    readonly isBubble3D: boolean;
    getSeriesChartType(a: ChartType, b: SeriesType): ChartType;
}
/**
 * @hidden
 */
export declare class CT_RadarStyle extends Base {
    static $t: Type;
    private c;
    constructor();
    b: ST_RadarStyle;
    static e(a: XmlPartManagerBase, b: ST_RadarStyle): {
        p1: ST_RadarStyle;
    };
    static f(a: XmlPartManagerBase, b: string, c: ST_RadarStyle): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_RadarChart extends Base implements ISupportSetProperty, IChart {
    static $t: Type;
    private f;
    private b;
    private l;
    private d;
    private h;
    private j;
    constructor();
    e: CT_RadarStyle;
    a: CT_Boolean;
    k: List$1<CT_RadarSer>;
    c: CT_DLbls;
    g: List$1<CT_UnsignedInt>;
    i: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    getChartType(a: CT_ChartSpace, b: ISeries): ChartType;
    readonly seriesType: SeriesType;
    readonly sT_Shape: ST_Shape | null;
    readonly _sT_Shape$i: Nullable$1<ST_Shape>;
    getSeries(): List$1<ISeries>;
    getHoleSize(): number | null;
    _getHoleSize$i(): Nullable$1<number>;
    getFirstSliceAngle(): number | null;
    _getFirstSliceAngle$i(): Nullable$1<number>;
    getSerLines(): CT_ChartLines;
    getOverlap(): number | null;
    _getOverlap$i(): Nullable$1<number>;
    getVaryColors(): boolean | null;
    _getVaryColors$i(): Nullable$1<boolean>;
    getGap(a: CT_GapAmount, b: CT_GapAmount): {
        p0: CT_GapAmount;
        p1: CT_GapAmount;
    };
    readonly axisIds: List$1<CT_UnsignedInt>;
}
/**
 * @hidden
 */
export declare class CT_StockChart extends Base implements ISupportSetProperty, IChart {
    static $t: Type;
    private n;
    private f;
    private b;
    private d;
    private h;
    private j;
    private l;
    constructor();
    m: List$1<CT_LineSer>;
    e: CT_DLbls;
    a: CT_ChartLines;
    c: CT_ChartLines;
    g: CT_UpDownBars;
    i: List$1<CT_UnsignedInt>;
    k: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    getChartType(a: CT_ChartSpace, b: ISeries): ChartType;
    readonly seriesType: SeriesType;
    readonly sT_Shape: ST_Shape | null;
    readonly _sT_Shape$i: Nullable$1<ST_Shape>;
    getSeries(): List$1<ISeries>;
    getHoleSize(): number | null;
    _getHoleSize$i(): Nullable$1<number>;
    getFirstSliceAngle(): number | null;
    _getFirstSliceAngle$i(): Nullable$1<number>;
    getSerLines(): CT_ChartLines;
    getOverlap(): number | null;
    _getOverlap$i(): Nullable$1<number>;
    getVaryColors(): boolean | null;
    _getVaryColors$i(): Nullable$1<boolean>;
    getGap(a: CT_GapAmount, b: CT_GapAmount): {
        p0: CT_GapAmount;
        p1: CT_GapAmount;
    };
    readonly axisIds: List$1<CT_UnsignedInt>;
}
/**
 * @hidden
 */
export declare class CT_LineSer extends Base implements ISupportSetProperty, ISeries {
    static $t: Type;
    private j;
    private q;
    private f;
    private u;
    private h;
    private d;
    private l;
    private b;
    private s;
    private m;
    constructor();
    i: CT_Marker_Chart;
    p: List$1<CT_DPt>;
    e: CT_DLbls;
    t: List$1<CT_Trendline>;
    g: CT_ErrBars;
    c: CT_AxDataSource;
    k: CT_NumDataSource;
    a: CT_Boolean;
    r: List$1<CT_Extension>;
    readonly n: EG_SerShared;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    o: IChart;
    readonly chart: IChart;
    readonly seriesType: SeriesType;
    readonly sharedProps: EG_SerShared;
    getBubbleSizes(a: Sheet, b: WorkbookLoadManagerExcel2007): SeriesValues;
    readonly cT_ErrBars: CT_ErrBars;
    readonly invertIfNegativeValue: boolean;
    readonly cT_NumDataSource: CT_NumDataSource;
    readonly cT_AxDataSource: CT_AxDataSource;
    readonly cT_Marker: CT_Marker_Chart;
    readonly cT_PictureOptions: CT_PictureOptions;
    getExplosion(): CT_UnsignedInt;
    getSmooth(): CT_Boolean;
    readonly index: number;
    getTrendlines(): List$1<CT_Trendline>;
    getDLbls(a: CT_Extension_DataLabelsRange): {
        ret: CT_DLbls;
        p0: CT_Extension_DataLabelsRange;
    };
    getDataPoints(): List$1<CT_DPt>;
    readonly isExplicitlyNoFill: boolean;
    readonly isBubble3D: boolean;
    getSeriesChartType(a: ChartType, b: SeriesType): ChartType;
}
/**
 * @hidden
 */
export declare class CT_UpDownBars extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private f;
    private d;
    private h;
    constructor();
    a: CT_GapAmount;
    e: CT_UpDownBar;
    c: CT_UpDownBar;
    g: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_UpDownBar extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    constructor();
    a: CT_ShapeProperties_DML;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Line3DChart extends Base implements ISupportSetProperty, IChart, IChart3D {
    static $t: Type;
    private b;
    private f;
    private h;
    private c;
    constructor();
    a: CT_GapAmount;
    e: List$1<CT_UnsignedInt>;
    g: List$1<CT_Extension>;
    readonly d: EG_LineChartShared;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    getChartType(a: CT_ChartSpace, b: ISeries): ChartType;
    readonly seriesType: SeriesType;
    readonly sT_Shape: ST_Shape | null;
    readonly _sT_Shape$i: Nullable$1<ST_Shape>;
    getSeries(): List$1<ISeries>;
    getGap(a: CT_GapAmount, b: CT_GapAmount): {
        p0: CT_GapAmount;
        p1: CT_GapAmount;
    };
    getHoleSize(): number | null;
    _getHoleSize$i(): Nullable$1<number>;
    getFirstSliceAngle(): number | null;
    _getFirstSliceAngle$i(): Nullable$1<number>;
    getSerLines(): CT_ChartLines;
    getOverlap(): number | null;
    _getOverlap$i(): Nullable$1<number>;
    getVaryColors(): boolean | null;
    _getVaryColors$i(): Nullable$1<boolean>;
    readonly axisIds: List$1<CT_UnsignedInt>;
}
/**
 * @hidden
 */
export declare class CT_Grouping extends Base {
    static $t: Type;
    private c;
    constructor();
    b: ST_Grouping;
    static e(a: XmlPartManagerBase, b: ST_Grouping): {
        p1: ST_Grouping;
    };
    static f(a: XmlPartManagerBase, b: string, c: ST_Grouping): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_LineChart extends Base implements ISupportSetProperty, IChart {
    static $t: Type;
    private d;
    private h;
    private f;
    private b;
    private l;
    private n;
    private i;
    constructor();
    c: CT_ChartLines;
    g: CT_UpDownBars;
    e: CT_Marker_Chart;
    a: CT_Boolean;
    k: List$1<CT_UnsignedInt>;
    m: List$1<CT_Extension>;
    readonly j: EG_LineChartShared;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    getChartType(a: CT_ChartSpace, b: ISeries): ChartType;
    readonly seriesType: SeriesType;
    readonly sT_Shape: ST_Shape | null;
    readonly _sT_Shape$i: Nullable$1<ST_Shape>;
    getSeries(): List$1<ISeries>;
    getHoleSize(): number | null;
    _getHoleSize$i(): Nullable$1<number>;
    getFirstSliceAngle(): number | null;
    _getFirstSliceAngle$i(): Nullable$1<number>;
    getSerLines(): CT_ChartLines;
    getOverlap(): number | null;
    _getOverlap$i(): Nullable$1<number>;
    o: Nullable$1<boolean>;
    getVaryColors(): boolean | null;
    _getVaryColors$i(): Nullable$1<boolean>;
    getGap(a: CT_GapAmount, b: CT_GapAmount): {
        p0: CT_GapAmount;
        p1: CT_GapAmount;
    };
    readonly axisIds: List$1<CT_UnsignedInt>;
}
/**
 * @hidden
 */
export declare class CT_Area3DChart extends Base implements ISupportSetProperty, IChart, IChart3D {
    static $t: Type;
    private b;
    private f;
    private h;
    private c;
    constructor();
    a: CT_GapAmount;
    e: List$1<CT_UnsignedInt>;
    g: List$1<CT_Extension>;
    readonly d: EG_AreaChartShared;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    getChartType(a: CT_ChartSpace, b: ISeries): ChartType;
    readonly seriesType: SeriesType;
    readonly sT_Shape: ST_Shape | null;
    readonly _sT_Shape$i: Nullable$1<ST_Shape>;
    getSeries(): List$1<ISeries>;
    getGap(a: CT_GapAmount, b: CT_GapAmount): {
        p0: CT_GapAmount;
        p1: CT_GapAmount;
    };
    getHoleSize(): number | null;
    _getHoleSize$i(): Nullable$1<number>;
    getFirstSliceAngle(): number | null;
    _getFirstSliceAngle$i(): Nullable$1<number>;
    getSerLines(): CT_ChartLines;
    getOverlap(): number | null;
    _getOverlap$i(): Nullable$1<number>;
    getVaryColors(): boolean | null;
    _getVaryColors$i(): Nullable$1<boolean>;
    readonly axisIds: List$1<CT_UnsignedInt>;
}
/**
 * @hidden
 */
export declare class CT_AreaSer extends Base implements ISupportSetProperty, ISeries {
    static $t: Type;
    private h;
    private m;
    private d;
    private s;
    private o;
    private b;
    private f;
    private q;
    private i;
    constructor();
    g: CT_PictureOptions;
    l: List$1<CT_DPt>;
    c: CT_DLbls;
    r: List$1<CT_Trendline>;
    n: List$1<CT_ErrBars>;
    a: CT_AxDataSource;
    e: CT_NumDataSource;
    p: List$1<CT_Extension>;
    readonly j: EG_SerShared;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    k: IChart;
    readonly chart: IChart;
    readonly seriesType: SeriesType;
    readonly sharedProps: EG_SerShared;
    getBubbleSizes(a: Sheet, b: WorkbookLoadManagerExcel2007): SeriesValues;
    readonly cT_ErrBars: CT_ErrBars;
    readonly invertIfNegativeValue: boolean;
    readonly cT_NumDataSource: CT_NumDataSource;
    readonly cT_AxDataSource: CT_AxDataSource;
    readonly cT_Marker: CT_Marker_Chart;
    readonly cT_PictureOptions: CT_PictureOptions;
    getExplosion(): CT_UnsignedInt;
    getSmooth(): CT_Boolean;
    readonly index: number;
    getTrendlines(): List$1<CT_Trendline>;
    getDLbls(a: CT_Extension_DataLabelsRange): {
        ret: CT_DLbls;
        p0: CT_Extension_DataLabelsRange;
    };
    getDataPoints(): List$1<CT_DPt>;
    readonly isExplicitlyNoFill: boolean;
    readonly isBubble3D: boolean;
    getSeriesChartType(a: ChartType, b: SeriesType): ChartType;
}
/**
 * @hidden
 */
export declare class CT_AreaChart extends Base implements ISupportSetProperty, IChart {
    static $t: Type;
    private d;
    private f;
    private a;
    constructor();
    c: List$1<CT_UnsignedInt>;
    e: List$1<CT_Extension>;
    readonly b: EG_AreaChartShared;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    getChartType(a: CT_ChartSpace, b: ISeries): ChartType;
    readonly seriesType: SeriesType;
    readonly sT_Shape: ST_Shape | null;
    readonly _sT_Shape$i: Nullable$1<ST_Shape>;
    getSeries(): List$1<ISeries>;
    getHoleSize(): number | null;
    _getHoleSize$i(): Nullable$1<number>;
    getFirstSliceAngle(): number | null;
    _getFirstSliceAngle$i(): Nullable$1<number>;
    getSerLines(): CT_ChartLines;
    getOverlap(): number | null;
    _getOverlap$i(): Nullable$1<number>;
    getVaryColors(): boolean | null;
    _getVaryColors$i(): Nullable$1<boolean>;
    getGap(a: CT_GapAmount, b: CT_GapAmount): {
        p0: CT_GapAmount;
        p1: CT_GapAmount;
    };
    readonly axisIds: List$1<CT_UnsignedInt>;
}
/**
 * @hidden
 */
export declare class CT_Surface extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private f;
    private d;
    private h;
    constructor();
    a: CT_UnsignedInt;
    e: CT_ShapeProperties_DML;
    c: CT_PictureOptions;
    g: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Perspective extends Base {
    static $t: Type;
    private c;
    constructor();
    b: number;
    static e(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static f(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_DepthPercent extends Base {
    static $t: Type;
    private d;
    constructor();
    c: number;
    static e(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static f(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_RotY extends Base {
    static $t: Type;
    private d;
    constructor();
    c: number;
    static e(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static f(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_HPercent extends Base {
    static $t: Type;
    private d;
    constructor();
    c: number;
    static e(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static f(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_RotX extends Base {
    static $t: Type;
    private c;
    constructor();
    b: number;
    static e(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static f(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_View3D extends Base implements ISupportSetProperty {
    static $t: Type;
    private j;
    private f;
    private l;
    private d;
    private b;
    private h;
    private n;
    constructor();
    i: CT_RotX;
    e: CT_HPercent;
    k: CT_RotY;
    c: CT_DepthPercent;
    a: CT_Boolean;
    g: CT_Perspective;
    m: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_PivotFmt extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private h;
    private j;
    private f;
    private d;
    private l;
    constructor();
    a: CT_UnsignedInt;
    g: CT_ShapeProperties_DML;
    i: CT_TextBody_DML;
    e: CT_Marker_Chart;
    c: CT_DLbl;
    k: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Chart extends Base implements ISupportSetProperty {
    static $t: Type;
    private t;
    private b;
    private z;
    private v;
    private p;
    private r;
    private n;
    private l;
    private j;
    private d;
    private h;
    private f;
    private x;
    constructor();
    s: CT_Title;
    a: CT_Boolean;
    y: List$1<CT_PivotFmt>;
    u: CT_View3D;
    o: CT_Surface;
    q: CT_Surface;
    m: CT_Surface;
    k: CT_PlotArea;
    i: CT_Legend;
    c: CT_Boolean;
    g: CT_DispBlanksAs;
    e: CT_Boolean;
    w: List$1<CT_Extension>;
    toString(): string;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class CT_Protection extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    private f;
    private h;
    private j;
    constructor();
    a: CT_Boolean;
    c: CT_Boolean;
    e: CT_Boolean;
    g: CT_Boolean;
    i: CT_Boolean;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_PivotSource extends Base implements ISupportSetProperty {
    static $t: Type;
    private f;
    private b;
    private d;
    constructor();
    e: string;
    a: CT_UnsignedInt;
    c: List$1<CT_Extension>;
    toString(): string;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class CT_Style extends Base {
    static $t: Type;
    private b;
    a: number;
    static d(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static e(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TextLanguageID extends Base {
    static $t: Type;
    private c;
    b: string;
    static d(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static e(a: XmlPartManagerBase, b: string, c: string): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Lvl extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    constructor();
    a: List$1<CT_StrVal>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_CustSplit extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    constructor();
    a: List$1<CT_UnsignedInt>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_BandFmts extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    constructor();
    a: List$1<CT_BandFmt>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_PivotFmts extends Base implements ISupportSetProperty {
    static $t: Type;
    private f;
    constructor();
    e: List$1<CT_PivotFmt>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    static c(a: CT_PivotFmts): List$1<CT_PivotFmt>;
    static a(a: List$1<CT_PivotFmt>): CT_PivotFmts;
}
/**
 * @hidden
 */
export declare class CT_DLbls extends Base implements ISupportSetProperty {
    static $t: Type;
    private g;
    private d;
    constructor();
    a: CT_Boolean;
    readonly f: List$1<CT_DLbl>;
    b: CT_ExtensionList;
    readonly e: Group_DLbls;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    static c(a: CT_ExtensionList): CT_Extension_DataLabels;
}
/**
 * @hidden
 */
export declare class CT_DLbl extends Base implements ISupportSetProperty {
    static $t: Type;
    private c;
    constructor();
    b: CT_UnsignedInt;
    a: CT_Boolean;
    e: List$1<CT_Extension>;
    readonly d: Group_DLbl;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_PlotArea extends Base implements ISupportSetProperty {
    static $t: Type;
    private ag;
    private ai;
    l: CT_Layout;
    c: CT_AreaChart;
    b: CT_Area3DChart;
    n: CT_LineChart;
    m: CT_Line3DChart;
    ac: CT_StockChart;
    u: CT_RadarChart;
    y: CT_ScatterChart;
    s: CT_PieChart;
    r: CT_Pie3DChart;
    i: CT_DoughnutChart;
    f: CT_BarChart;
    e: CT_Bar3DChart;
    p: CT_OfPieChart;
    ae: CT_SurfaceChart;
    ad: CT_Surface3DChart;
    h: CT_BubbleChart;
    d: CT_AreaChart;
    o: CT_LineChart;
    v: CT_RadarChart;
    w: CT_RadarChart;
    x: CT_RadarChart;
    z: CT_ScatterChart;
    aa: CT_ScatterChart;
    ab: CT_ScatterChart;
    g: CT_BarChart;
    t: CT_PieChart;
    j: CT_DoughnutChart;
    q: CT_OfPieChart;
    readonly ah: List$1<IAxis>;
    readonly aj: List$1<IChart>;
    k: CT_DTable;
    af: CT_ShapeProperties_DML;
    a: CT_ExtensionList;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_MultiLvlStrData extends Base implements ISupportSetProperty {
    static $t: Type;
    b: CT_UnsignedInt;
    private c;
    readonly d: List$1<CT_Lvl>;
    a: CT_ExtensionList;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class CT_Extension_DataLabels extends CT_Extension implements ISupportSetProperty {
    static $t: Type;
    static i(a: string): CT_Extension_DataLabels;
    setProperty(a: ElementPropertyIds, b: any): void;
    g: CT_Boolean;
    f: CT_Boolean;
    h: CT_ChartLines;
    l: CT_ShapeProperties_DML;
    k: CT_Tx;
    j: CT_Layout;
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: Type): void;
}
/**
 * @hidden
 */
export declare class CT_Extension_DataLabelsRange extends CT_Extension implements ISupportSetProperty {
    static $t: Type;
    static g(a: string): CT_Extension_DataLabelsRange;
    setProperty(a: ElementPropertyIds, b: any): void;
    h: CT_SeriesDataLabelsRange;
    static f(a: CT_ExtensionList): CT_Extension_DataLabelsRange;
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: Type): void;
}
/**
 * @hidden
 */
export declare class DMLChartUtils extends Base {
    static $t: Type;
    static ak(a: XmlPartManagerBase): CT_RelId;
    static t(a: CT_Tx, b: IFormattedStringOwner): FormattedString;
    static u(a: CT_TextBody_DML, b: IFormattedStringOwner): FormattedString;
    static k(a: CT_ErrBars, b: Sheet): ErrorBars;
    static af(a: CT_SolidColorFillProperties): WorkbookColorInfo;
    static ai(a: EG_ColorChoice_DML): WorkbookColorInfo;
    private static aj;
    static ab(a: CT_HslColor): WorkbookColorInfo;
    static ac(a: CT_PresetColor): WorkbookColorInfo;
    static ad(a: CT_SchemeColor_DML): WorkbookColorInfo;
    static ae(a: CT_ScRgbColor): WorkbookColorInfo;
    static ag(a: CT_SRgbColor_DML): WorkbookColorInfo;
    static ah(a: CT_SystemColor): WorkbookColorInfo;
    static a6(a: FormattedStringFont, b: CT_TextCharacterProperties_DML): void;
    static a5(a: IWorkbookFont, b: CT_TextCharacterProperties_DML): void;
    static az(a: CT_TextCharacterProperties_DML): string;
    static a3(a: CT_TextCharacterPropertiesBase): string;
    static e(a: CT_GradientFillProperties): ChartGradientFill;
    static h(a: CT_SolidColorFillProperties): ChartSolidFill;
    static b(a: CT_NoFillProperties): ChartEmptyFill;
    static d(a: EG_LineFillProperties): ChartFillBase;
    static c(a: EG_FillProperties): ChartFillBase;
    static j(a: CT_DispUnits, b: Nullable$1<number>): {
        ret: DisplayUnit;
        p1: Nullable$1<number>;
    };
    static aw(a: DisplayUnit): Nullable$1<ST_BuiltInUnit>;
    static aa(a: ChartType): ST_Grouping;
    static v(a: ChartType): CT_RadarStyle;
    static w(a: SeriesChartTypeGroup): CT_RadarStyle;
    static x(a: ChartType): CT_ScatterStyle;
    static y(a: SeriesChartTypeGroup): CT_ScatterStyle;
    static f(a: CT_ChartLines, b: GridLineType, c: IChartObject): ChartGridLines;
    static g(a: CT_ShapeProperties_DML, b: GridLineType, c: IChartObject, d?: boolean): ChartGridLines;
    static i(a: CT_LineProperties_DML): ChartTickLines;
    static p(a: CT_NumRef, b: Sheet, c: WorkbookLoadManagerExcel2007, d: boolean): SeriesValuesBase;
    static s(a: CT_StrRef, b: Sheet, c: WorkbookLoadManagerExcel2007): XValues;
    static q(a: CT_MultiLvlStrRef, b: Sheet, c: WorkbookLoadManagerExcel2007): XValues;
    static r(a: CT_StrData, b: Sheet, c: WorkbookLoadManagerExcel2007): XValues;
    static o(a: CT_NumData, b: Sheet, c: WorkbookLoadManagerExcel2007, d: boolean): SeriesValuesBase;
    static aq<T extends ISeries>($t: Type, a: List$1<T>): List$1<ISeries>;
    static n(a: CT_SerTx, b: Sheet, c: WorkbookLoadManagerExcel2007): SeriesName;
    static z(a: SeriesName, b: Sheet, c: WorkbookSaveManagerExcel2007): CT_SerTx;
    static l(a: CT_Legend, b: SeriesCollection, c: Sheet): Legend;
    static a7(a: Legend, b: CT_TextBody_DML, c: Sheet): void;
    static m(a: CT_LegendEntry, b: Sheet): LegendEntry;
    static a8(a: CT_Layout, b: ElementPosition, c: number, d: number, e: number, f: number, g: Nullable$1<boolean>): {
        p1: ElementPosition;
        p2: number;
        p3: number;
        p4: number;
        p5: number;
        p6: Nullable$1<boolean>;
    };
    private static a9;
    static a4(a: WorkbookColorInfo, b: IWorkbookProvider, c: CT_SchemeColor_DML, d: CT_SystemColor, e: CT_SRgbColor_DML): {
        p2: CT_SchemeColor_DML;
        p3: CT_SystemColor;
        p4: CT_SRgbColor_DML;
    };
    static ao(a: EG_SerShared): boolean;
    static ap(a: CT_LineProperties_DML): boolean;
    static al(a: IChart): boolean;
    static an(a: IChart): boolean;
    private static am;
    static au(a: ISeries): Nullable$1<ST_MarkerStyle>;
    static a<T>($t: Type, a: HashSet$1<T>): T[];
    static av(a: EG_SerShared): Nullable$1<boolean>;
}
/**
 * @hidden
 */
export declare class DMLChartExtensions extends Base {
    static $t: Type;
    static b(a: ST_AxPos): AxisPosition;
    static av(a: AxisPosition, b: Axis): Nullable$1<ST_AxPos>;
    private static aa;
    static y(a: ST_TextAnchoringType): VerticalTitleAlignment;
    static aq(a: VerticalTitleAlignment): ST_TextAnchoringType;
    static z(a: ST_TextUnderlineType): FontUnderlineStyle;
    static a1(a: FontUnderlineStyle): Nullable$1<ST_TextUnderlineType>;
    static k(a: ST_PathShadeType): GradientType;
    static a0(a: GradientType): Nullable$1<ST_PathShadeType>;
    static ay(a: BorderLineStyle): Nullable$1<ST_PresetLineDashVal>;
    static e(a: ST_PresetLineDashVal): BorderLineStyle;
    static n(a: ST_PresetLineDashVal): LineStyle;
    static az(a: LineStyle): Nullable$1<ST_PresetLineDashVal>;
    static m(a: BorderLineStyle): LineStyle;
    static d(a: LineStyle): BorderLineStyle;
    static q(a: ST_TextVerticalType): TextDirection;
    static as(a: TextDirection): ST_TextVerticalType;
    static r(a: ST_TextHorzOverflowType): TextHorizontalOverflow;
    static ar(a: TextHorizontalOverflow): ST_TextHorzOverflowType;
    static s(a: ST_TextVertOverflowType): TextVerticalOverflow;
    static at(a: TextVerticalOverflow): ST_TextVertOverflowType;
    static w(a: ST_TimeUnit): TimeUnit;
    static al(a: TimeUnit): ST_TimeUnit;
    static aw(a: AxisCrosses): Nullable$1<ST_Crosses>;
    static a(a: ST_Crosses): AxisCrosses;
    static v(a: ST_TickMark): TickMark;
    static ak(a: TickMark): ST_TickMark;
    static u(a: ST_TickLblPos): TickLabelPosition;
    static aj(a: TickLabelPosition): ST_TickLblPos;
    static t(a: ST_LblAlgn): TickLabelAlignment;
    static ag(a: TickLabelAlignment): ST_LblAlgn;
    static a8(a: ChartTickLines, b: CT_LineProperties_DML): void;
    static a5(a: ChartGridLines, b: CT_LineProperties_DML): void;
    static c(a: ST_Shape): BarShape;
    static ai(a: BarShape): ST_Shape;
    static i(a: ST_ErrBarType): ErrorBarDirection;
    static ae(a: ErrorBarDirection): ST_ErrBarType;
    static j(a: ST_ErrValType): ErrorValueType;
    static af(a: ErrorValueType): ST_ErrValType;
    static o(a: ST_MarkerStyle): MarkerStyle;
    static ap(a: MarkerStyle): ST_MarkerStyle;
    static p(a: ST_PictureFormat): PictureType;
    static ah(a: PictureType): ST_PictureFormat;
    static l(a: ST_LegendPos): LegendPosition;
    static ax(a: LegendPosition): Nullable$1<ST_LegendPos>;
    static ab(a: ChartType): ST_BarDir;
    static ac(a: ChartType): ST_BarGrouping;
    static a7(a: ChartLineBase, b: CT_LineProperties_DML, c: Sheet): void;
    private static a3;
    static a6(a: ChartLine, b: CT_LineProperties_DML, c: Sheet): void;
    static a4(a: ChartBorder, b: CT_LineProperties_DML, c: Sheet): void;
    static h(a: ST_DispBlanksAs): DisplayBlanksAs;
    static ao(a: DisplayBlanksAs): ST_DispBlanksAs;
    static an(a: WorkbookColorInfo, b: Sheet): CT_SolidColorFillProperties;
    static ba(a: EG_FillProperties, b: WorkbookColorInfo, c: Sheet): void;
    static a9(a: EG_ColorChoice_DML, b: WorkbookColorInfo, c: Sheet): void;
    static a2(a: ReadingOrder): Nullable$1<boolean>;
    static am(a: TrendlineType): ST_TrendlineType;
    static x(a: ST_TrendlineType): TrendlineType;
    static ad(a: DataLabelPosition): ST_DLblPos;
    static g(a: ST_DLblPos): DataLabelPosition;
    static f(a: DataLabelPosition, b: ChartType): DataLabelPosition;
    static au(a: IWorkbookFont): boolean;
    static b1(a: CT_LblAlgn, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static b2(a: CT_LblOffset, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cu(a: CT_Skip, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bn(a: CT_DispUnits, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bl(a: CT_CrossBetween, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static be(a: CT_AxisUnit, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bj(a: CT_BuiltInUnit, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bi(a: CT_BarSer, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static b3(a: CT_LineSer, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cn(a: CT_PieSer, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bc(a: CT_AreaSer, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cy(a: CT_SurfaceSer, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cq(a: CT_ScatterSer, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bs(a: CT_DPt, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cl(a: CT_PictureOptions, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static by(a: CT_Layout, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static b6(a: CT_ManualLayout, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static b0(a: CT_LayoutTarget, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bz(a: CT_LayoutMode, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static c6(a: CT_Tx, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cw(a: CT_StrRef, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cv(a: CT_StrData, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cx(a: CT_StrVal, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bo(a: CT_DispUnitsLbl, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cp(a: CT_ScatterChart, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cr(a: CT_ScatterStyle, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cs(a: CT_SerTx, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static br(a: CT_DLbls, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static c3(a: CT_Trendline, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ch(a: CT_Order, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bt(a: CT_ErrBars, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bd(a: CT_AxDataSource, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cd(a: CT_NumDataSource, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ct(a: CT_Shape_Chart, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static e9(a: CT_CustomGeometry2D, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static dk(a: CT_BlipFillProperties_DML, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static d7(a: CT_PatternFillProperties, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static dt(a: CT_EffectList, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ds(a: CT_EffectContainer, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ed(a: CT_Scene3D, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ee(a: CT_Shape3D, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static d5(a: CT_OfficeArtExtensionList, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static fb(a: CT_GeomGuideList, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static e8(a: CT_ComplementTransform, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static fd(a: CT_InverseTransform, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static fc(a: CT_GrayscaleTransform, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static dy(a: CT_GammaTransform, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static d3(a: CT_InverseGammaTransform, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static dj(a: CT_Blip_DML, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static c8(a: CT_AlphaBiLevelEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static c9(a: CT_AlphaCeilingEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static da(a: CT_AlphaFloorEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static db(a: CT_AlphaInverseEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static dc(a: CT_AlphaModulateFixedEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static de(a: CT_AlphaReplaceEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static dh(a: CT_BiLevelEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static dl(a: CT_BlurEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static dp(a: CT_ColorChangeEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static dq(a: CT_ColorReplaceEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static dr(a: CT_DuotoneEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static dw(a: CT_FillOverlayEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static d0(a: CT_GrayscaleEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static d1(a: CT_HSLEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static du(a: CT_EffectReference, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static dd(a: CT_AlphaOutsetEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static di(a: CT_BlendEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static dv(a: CT_FillEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static dz(a: CT_GlowEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static d2(a: CT_InnerShadowEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static d6(a: CT_OuterShadowEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static d9(a: CT_PresetShadowEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static eb(a: CT_ReflectionEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ec(a: CT_RelativeOffsetEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ef(a: CT_SoftEdgesEffect, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static fa(a: CT_DashStopList, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ff(a: CT_LineJoinRound, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static fe(a: CT_LineJoinBevel, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static dm(a: CT_Camera, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static d4(a: CT_LightRig, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static df(a: CT_Backdrop, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static eg(a: CT_SphereCoords, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static d8(a: CT_Point3D, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static e7(a: CT_Vector3D, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static dg(a: CT_Bevel, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static dn(a: CT_Color_DML, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ck(a: CT_PictureFormat, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cm(a: CT_PictureStackUnit, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static b7(a: CT_Marker_Chart, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static b9(a: CT_MarkerStyle, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static b8(a: CT_MarkerSize, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bp(a: CT_DLbl, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ce(a: CT_NumFmt_Chart, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ej(a: CT_TextBody_DML, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bq(a: CT_DLblPos, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bk(a: CT_ChartLines, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static es(a: CT_TextListStyle_DML, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ew(a: CT_TextParagraph_DML, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ea(a: CT_PresetTextShape, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static et(a: CT_TextNoAutofit, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ev(a: CT_TextNormalAutofit, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ey(a: CT_TextShapeAutofit, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static dx(a: CT_FlatText, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ez(a: CT_TextSpacing, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ek(a: CT_TextBulletColorFollowText, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static el(a: CT_TextBulletSizeFollowText, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static em(a: CT_TextBulletSizePercent, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static en(a: CT_TextBulletSizePoint, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static eo(a: CT_TextBulletTypefaceFollowText, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static eu(a: CT_TextNoBullet, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static eh(a: CT_TextAutonumberBullet, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ep(a: CT_TextCharBullet, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ei(a: CT_TextBlipBullet, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static e3(a: CT_TextTabStopList, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static e0(a: CT_TextSpacingPercent, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static e1(a: CT_TextSpacingPoint, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static e2(a: CT_TextTabStop, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static e6(a: CT_TextUnderlineLineFollowText, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static e4(a: CT_TextUnderlineFillFollowText, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static e5(a: CT_TextUnderlineFillGroupWrapper, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ex(a: CT_TextParagraphProperties_DML, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static er(a: CT_TextLineBreak, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static eq(a: CT_TextField, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static c5(a: CT_TrendlineType, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cj(a: CT_Period, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static c4(a: CT_TrendlineLbl, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bv(a: CT_ErrDir, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bu(a: CT_ErrBarType, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bw(a: CT_ErrValType, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cf(a: CT_NumRef, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cg(a: CT_NumVal, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cc(a: CT_NumData, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cb(a: CT_MultiLvlStrRef, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ca(a: CT_MultiLvlStrData, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static b5(a: CT_Lvl, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static co(a: CT_Scaling, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static b4(a: CT_LogBase, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ci(a: CT_Orientation, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bf(a: CT_AxPos, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static c2(a: CT_Title, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static c0(a: CT_TickMark, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cz(a: CT_TickLblPos, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bm(a: CT_Crosses, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bx(a: CT_Grouping, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bh(a: CT_BandFmts, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bg(a: CT_BandFmt, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static c1(a: CT_TimeUnit, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bb(a: CT_ExtensionList, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e?: string): void;
    static fg(a: List$1<CT_Extension>, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e?: string): void;
    static c7(a: CT_SeriesDataLabelsRange, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e?: string): void;
}
/**
 * @hidden
 */
export declare class ISeriesSortComparer extends Base implements IComparer$1<ISeries> {
    static $t: Type;
    compare(a: ISeries, b: ISeries): number;
}
/**
 * @hidden
 */
export declare class ChartExAttributes extends Base {
    static $t: Type;
}
/**
 * @hidden
 */
export declare class ChartExElements extends Base {
    static $t: Type;
    static readonly bl: string;
    static readonly a: string;
    static readonly b: string;
    static readonly c: string;
    static readonly d: string;
    static readonly e: string;
    static readonly f: string;
    static readonly g: string;
    static readonly h: string;
    static readonly i: string;
    static readonly j: string;
    static readonly k: string;
    static readonly l: string;
    static readonly m: string;
    static readonly n: string;
    static readonly o: string;
    static readonly p: string;
    static readonly q: string;
    static readonly r: string;
    static readonly s: string;
    static readonly t: string;
    static readonly u: string;
    static readonly v: string;
    static readonly w: string;
    static readonly x: string;
    static readonly y: string;
    static readonly z: string;
    static readonly aa: string;
    static readonly ab: string;
    static readonly ac: string;
    static readonly ad: string;
    static readonly ae: string;
    static readonly af: string;
    static readonly ag: string;
    static readonly ah: string;
    static readonly ai: string;
    static readonly aj: string;
    static readonly ak: string;
    static readonly al: string;
    static readonly am: string;
    static readonly an: string;
    static readonly ao: string;
    static readonly ap: string;
    static readonly aq: string;
    static readonly ar: string;
    static readonly as: string;
    static readonly at: string;
    static readonly au: string;
    static readonly av: string;
    static readonly aw: string;
    static readonly ax: string;
    static readonly ay: string;
    static readonly az: string;
    static readonly a0: string;
    static readonly a1: string;
    static readonly a2: string;
    static readonly a3: string;
    static readonly a4: string;
    static readonly a5: string;
    static readonly a6: string;
    static readonly a7: string;
    static readonly a8: string;
    static readonly a9: string;
    static readonly ba: string;
    static readonly bb: string;
    static readonly bc: string;
    static readonly bd: string;
    static readonly be: string;
    static readonly bf: string;
    static readonly bg: string;
    static readonly bh: string;
    static readonly bi: string;
    static readonly bj: string;
    static readonly bk: string;
    static readonly bn: string;
    static readonly bm: string;
    static readonly bo: string;
    static readonly bp: string;
    static readonly bq: string;
    static readonly br: string;
    static readonly bs: string;
    static readonly bt: string;
    static readonly bu: string;
    static readonly bv: string;
    static readonly bw: string;
    static readonly bx: string;
    static readonly by: string;
    static readonly bz: string;
    static readonly b0: string;
    static readonly b1: string;
    static readonly b2: string;
    static readonly b3: string;
    static readonly b4: string;
    static readonly b5: string;
    static readonly b6: string;
    static readonly b7: string;
    static readonly b8: string;
    static readonly b9: string;
    static readonly ca: string;
    static readonly cb: string;
    static readonly cc: string;
    static readonly cd: string;
    static readonly ce: string;
    static readonly cf: string;
    static readonly ch: string;
    static readonly cg: string;
    static readonly ci: string;
    static readonly cj: string;
    static readonly ck: string;
}
/**
 * @hidden
 */
export declare class CT_ChartSpaceEx extends Base implements ISupportSetProperty {
    static $t: Type;
    private c;
    private e;
    private i;
    private g;
    constructor();
    l: Dictionary$2<string, NamedReference>;
    a: Excel2007ChartData;
    b: CT_ChartData;
    d: CT_ChartEx;
    j: CT_ShapeProperties_DML;
    k: CT_TextBody_DML;
    h: CT_ColorMapping;
    n: List$1<CT_FormatOverride>;
    f: CT_PrintSettingsEx;
    m: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ChartData extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    a: CT_ExternalDataEx;
    c: List$1<CT_Data>;
    b: Dictionary$2<Series, CT_Data>;
    d: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ExternalDataEx extends CT_ExternalData {
    static $t: Type;
}
/**
 * @hidden
 */
export declare class CT_PageSetup extends Base {
    static $t: Type;
    private u;
    private o;
    private s;
    private i;
    private m;
    private w;
    private q;
    private y;
    private k;
    constructor();
    t: Nullable$1<number>;
    n: Nullable$1<number>;
    r: Nullable$1<ST_PageOrientation>;
    h: Nullable$1<boolean>;
    l: Nullable$1<boolean>;
    v: Nullable$1<boolean>;
    p: Nullable$1<number>;
    x: Nullable$1<number>;
    j: Nullable$1<number>;
    static a(a: XmlPartManagerBase): CT_PageSetup;
    static ad(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<number>, d: Nullable$1<ST_PageOrientation>, e: Nullable$1<boolean>, f: Nullable$1<boolean>, g: Nullable$1<boolean>, h: Nullable$1<number>, i: Nullable$1<number>, j: Nullable$1<number>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<number>;
        p3: Nullable$1<ST_PageOrientation>;
        p4: Nullable$1<boolean>;
        p5: Nullable$1<boolean>;
        p6: Nullable$1<boolean>;
        p7: Nullable$1<number>;
        p8: Nullable$1<number>;
        p9: Nullable$1<number>;
    };
    static ae(a: XmlPartManagerBase, b: string, c?: Nullable$1<boolean>, d?: Nullable$1<number>, e?: Nullable$1<boolean>, f?: Nullable$1<number>, g?: Nullable$1<number>, h?: Nullable$1<ST_PageOrientation>, i?: Nullable$1<number>, j?: Nullable$1<boolean>, k?: Nullable$1<number>): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_PageMargins extends Base {
    static $t: Type;
    private h;
    private j;
    private l;
    private b;
    private f;
    private d;
    g: number;
    i: number;
    k: number;
    a: number;
    e: number;
    c: number;
    static n(a: XmlPartManagerBase, b: number, c: number, d: number, e: number, f: number, g: number): {
        p1: number;
        p2: number;
        p3: number;
        p4: number;
        p5: number;
        p6: number;
    };
    static o(a: XmlPartManagerBase, b: string, c: number, d: number, e: number, f: number, g: number, h: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_HeaderFooter extends Base implements ISupportSetProperty {
    static $t: Type;
    private u;
    private s;
    private m;
    private k;
    private q;
    private o;
    private e;
    private i;
    private g;
    constructor();
    t: string;
    r: string;
    l: string;
    j: string;
    p: string;
    n: string;
    d: Nullable$1<boolean>;
    h: Nullable$1<boolean>;
    f: Nullable$1<boolean>;
    static w(a: XmlPartManagerBase, b: Nullable$1<boolean>, c: Nullable$1<boolean>, d: Nullable$1<boolean>): {
        p1: Nullable$1<boolean>;
        p2: Nullable$1<boolean>;
        p3: Nullable$1<boolean>;
    };
    static x(a: XmlPartManagerBase, b: string, c?: Nullable$1<boolean>, d?: Nullable$1<boolean>, e?: Nullable$1<boolean>): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_PrintSettingsEx extends CT_PrintSettings {
    static $t: Type;
    j: CT_PageSetup;
}
/**
 * @hidden
 */
export declare class CT_FormatOverride extends Base implements ISupportSetProperty {
    static $t: Type;
    private e;
    constructor();
    a: CT_ShapeProperties_DML;
    b: List$1<CT_Extension>;
    d: number;
    static f(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static g(a: XmlPartManagerBase, b: string, c: number): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_LegendEx extends Base implements ISupportSetProperty {
    static $t: Type;
    private m;
    private i;
    private k;
    constructor();
    d: CT_ShapeProperties_DML;
    e: CT_TextBody_DML;
    g: List$1<CT_Extension>;
    l: Nullable$1<ST_SidePos>;
    h: Nullable$1<ST_PosAlign>;
    j: Nullable$1<boolean>;
    static a(a: XmlPartManagerBase): CT_LegendEx;
    static o(a: XmlPartManagerBase, b: Nullable$1<ST_SidePos>, c: Nullable$1<ST_PosAlign>, d: Nullable$1<boolean>): {
        p1: Nullable$1<ST_SidePos>;
        p2: Nullable$1<ST_PosAlign>;
        p3: Nullable$1<boolean>;
    };
    static p(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_PosAlign>, d?: Nullable$1<boolean>, e?: Nullable$1<ST_SidePos>): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TickLabels extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    a: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TickMarks extends Base implements ISupportSetProperty {
    static $t: Type;
    private c;
    constructor();
    a: List$1<CT_Extension>;
    b: Nullable$1<ST_TickMarksType>;
    static e(a: XmlPartManagerBase, b: Nullable$1<ST_TickMarksType>): {
        p1: Nullable$1<ST_TickMarksType>;
    };
    static f(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_TickMarksType>): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Gridlines extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    a: CT_ShapeProperties_DML;
    b: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_AxisUnitsLabel extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    a: CT_Text;
    b: CT_ShapeProperties_DML;
    c: CT_TextBody_DML;
    d: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Text extends Base implements ISupportSetProperty {
    static $t: Type;
    private c;
    a: CT_TextData;
    b: CT_TextBody_DML;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_TextData extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    a: CT_Formula;
    c: string;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Formula extends Base {
    static $t: Type;
    constructor();
    b: ST_FormulaDirection;
    d: string;
    toString(): string;
    static a(a: XmlPartManagerBase): CT_Formula;
    static e(a: XmlPartManagerBase, b: ST_FormulaDirection): {
        p1: ST_FormulaDirection;
    };
    static f(a: XmlPartManagerBase, b: ST_FormulaDirection, c: string): void;
}
/**
 * @hidden
 */
export declare class CT_AxisUnits extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private e;
    constructor();
    a: CT_AxisUnitsLabel;
    c: List$1<CT_Extension>;
    d: Nullable$1<ST_AxisUnit>;
    static g(a: XmlPartManagerBase, b: Nullable$1<ST_AxisUnit>): {
        p1: Nullable$1<ST_AxisUnit>;
    };
    static h(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_AxisUnit>): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class ChartExTitleBase extends Base {
    static $t: Type;
    constructor();
    a: CT_Text;
    b: CT_ShapeProperties_DML;
    c: CT_TextBody_DML;
    e: List$1<CT_Extension>;
    d(a: ElementPropertyIds, b: any): boolean;
}
/**
 * @hidden
 */
export declare class CT_AxisTitle extends ChartExTitleBase implements ISupportSetProperty {
    static $t: Type;
    constructor();
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ValueAxisScaling extends Base {
    static $t: Type;
    private c;
    private e;
    private g;
    private i;
    b: ST_DoubleOrAutomatic;
    d: ST_DoubleOrAutomatic;
    f: ST_ValueAxisUnit;
    h: ST_ValueAxisUnit;
    static a(a: XmlPartManagerBase): CT_ValueAxisScaling;
    static k(a: XmlPartManagerBase, b: ST_DoubleOrAutomatic, c: ST_DoubleOrAutomatic, d: ST_ValueAxisUnit, e: ST_ValueAxisUnit): {
        p1: ST_DoubleOrAutomatic;
        p2: ST_DoubleOrAutomatic;
        p3: ST_ValueAxisUnit;
        p4: ST_ValueAxisUnit;
    };
    static l(a: XmlPartManagerBase, b: string, c?: ST_ValueAxisUnit, d?: ST_DoubleOrAutomatic, e?: ST_DoubleOrAutomatic, f?: ST_ValueAxisUnit): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_CategoryAxisScaling extends Base {
    static $t: Type;
    private b;
    a: ST_GapWidthRatio;
    static d(a: XmlPartManagerBase, b: ST_GapWidthRatio): {
        p1: ST_GapWidthRatio;
    };
    static e(a: XmlPartManagerBase, b: string, c?: ST_GapWidthRatio): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Axis extends Base implements ISupportSetProperty {
    static $t: Type;
    private y;
    private b;
    private d;
    private g;
    private i;
    private o;
    private q;
    private m;
    private k;
    private ab;
    private x;
    constructor();
    e: CT_CategoryAxisScaling;
    r: CT_ValueAxisScaling;
    a: CT_AxisTitle;
    c: CT_AxisUnits;
    f: CT_Gridlines;
    h: CT_Gridlines;
    n: CT_TickMarks;
    p: CT_TickMarks;
    l: CT_TickLabels;
    j: CT_NumberFormat;
    s: CT_ShapeProperties_DML;
    t: CT_TextBody_DML;
    v: List$1<CT_Extension>;
    aa: number;
    w: Nullable$1<boolean>;
    static ac(a: XmlPartManagerBase, b: number, c: Nullable$1<boolean>): {
        p1: number;
        p2: Nullable$1<boolean>;
    };
    static ad(a: XmlPartManagerBase, b: string, c: Nullable$1<boolean>, d: number): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_NumberFormat extends Base {
    static $t: Type;
    private d;
    private b;
    c: string;
    a: Nullable$1<boolean>;
    static f(a: XmlPartManagerBase, b: string, c: Nullable$1<boolean>): {
        p1: string;
        p2: Nullable$1<boolean>;
    };
    static g(a: XmlPartManagerBase, b: string, c: Nullable$1<boolean>, d: string): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Statistics extends Base {
    static $t: Type;
    private b;
    a: Nullable$1<ST_QuartileMethod>;
    static d(a: XmlPartManagerBase, b: Nullable$1<ST_QuartileMethod>): {
        p1: Nullable$1<ST_QuartileMethod>;
    };
    static e(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_QuartileMethod>): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GeoHierarchyEntity extends Base {
    static $t: Type;
    private g;
    private e;
    private c;
    f: string;
    d: string;
    b: ST_EntityType;
    static a(a: XmlPartManagerBase): CT_GeoHierarchyEntity;
    static i(a: XmlPartManagerBase, b: string, c: string, d: ST_EntityType): {
        p1: string;
        p2: string;
        p3: ST_EntityType;
    };
    static j(a: XmlPartManagerBase, b: string, c: string, d: string, e: ST_EntityType): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GeoChildEntitiesQuery extends Base implements ISupportSetProperty {
    static $t: Type;
    private c;
    constructor();
    a: List$1<ST_EntityType>;
    b: string;
    static e(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static f(a: XmlPartManagerBase, b: string, c: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GeoChildEntitiesQueryResult extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    constructor();
    a: CT_GeoChildEntitiesQuery;
    c: List$1<CT_GeoHierarchyEntity>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GeoDataPointToEntityQuery extends Base {
    static $t: Type;
    private c;
    private e;
    b: ST_EntityType;
    d: string;
    static a(a: XmlPartManagerBase): CT_GeoDataPointToEntityQuery;
    static g(a: XmlPartManagerBase, b: ST_EntityType, c: string): {
        p1: ST_EntityType;
        p2: string;
    };
    static h(a: XmlPartManagerBase, b: string, c: string, d: ST_EntityType): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GeoDataPointQuery extends Base {
    static $t: Type;
    private c;
    private e;
    private g;
    b: ST_EntityType;
    d: number;
    f: number;
    static a(a: XmlPartManagerBase): CT_GeoDataPointQuery;
    static i(a: XmlPartManagerBase, b: ST_EntityType, c: number, d: number): {
        p1: ST_EntityType;
        p2: number;
        p3: number;
    };
    static j(a: XmlPartManagerBase, b: string, c: ST_EntityType, d: number, e: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GeoDataPointToEntityQueryResult extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: CT_GeoDataPointQuery;
    c: CT_GeoDataPointToEntityQuery;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GeoPolygon extends Base {
    static $t: Type;
    d: string;
    b: number;
    c: string;
    static a(a: XmlPartManagerBase): CT_GeoPolygon;
    static f(a: XmlPartManagerBase, b: string, c: number, d: string): {
        p1: string;
        p2: number;
        p3: string;
    };
    static g(a: XmlPartManagerBase, b: string, c: number, d: string, e: string): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GeoData extends Base implements ISupportSetProperty {
    static $t: Type;
    private c;
    private p;
    private n;
    private f;
    private l;
    private h;
    private j;
    constructor();
    d: List$1<CT_GeoPolygon>;
    b: List$1<string>;
    o: string;
    m: string;
    e: number;
    k: number;
    g: number;
    i: number;
    static a(a: XmlPartManagerBase): CT_GeoData;
    static r(a: XmlPartManagerBase, b: string, c: string, d: number, e: number, f: number, g: number): {
        p1: string;
        p2: string;
        p3: number;
        p4: number;
        p5: number;
        p6: number;
    };
    static s(a: XmlPartManagerBase, b: string, c: number, d: string, e: string, f: number, g: number, h: number): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GeoDataEntityQuery extends Base {
    static $t: Type;
    private b;
    private d;
    a: ST_EntityType;
    c: string;
    static f(a: XmlPartManagerBase, b: ST_EntityType, c: string): {
        p1: ST_EntityType;
        p2: string;
    };
    static g(a: XmlPartManagerBase, b: string, c: string, d: ST_EntityType): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GeoDataEntityQueryResult extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    private b;
    constructor();
    c: CT_GeoDataEntityQuery;
    a: CT_GeoData;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Address extends Base {
    static $t: Type;
    private c;
    private i;
    private e;
    private g;
    private o;
    private m;
    private k;
    b: string;
    h: string;
    d: string;
    f: string;
    n: string;
    l: string;
    j: string;
    static a(a: XmlPartManagerBase): CT_Address;
    static q(a: XmlPartManagerBase, b: string, c: string, d: string, e: string, f: string, g: string, h: string): {
        p1: string;
        p2: string;
        p3: string;
        p4: string;
        p5: string;
        p6: string;
        p7: string;
    };
    static r(a: XmlPartManagerBase, b: string, c?: string, d?: string, e?: string, f?: string, g?: string, h?: string, i?: string): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GeoLocation extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private f;
    private h;
    private j;
    private d;
    constructor();
    a: CT_Address;
    e: Nullable$1<number>;
    g: Nullable$1<number>;
    i: string;
    c: ST_EntityType;
    static l(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<number>, d: string, e: ST_EntityType): {
        p1: Nullable$1<number>;
        p2: Nullable$1<number>;
        p3: string;
        p4: ST_EntityType;
    };
    static m(a: XmlPartManagerBase, b: string, c: Nullable$1<number>, d: Nullable$1<number>, e: string, f: ST_EntityType): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GeoLocations extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    constructor();
    a: CT_GeoLocation;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GeoLocationQuery extends Base {
    static $t: Type;
    private h;
    private d;
    private f;
    private j;
    private b;
    g: string;
    c: string;
    e: string;
    i: string;
    a: ST_EntityType;
    static l(a: XmlPartManagerBase, b: string, c: string, d: string, e: string, f: ST_EntityType): {
        p1: string;
        p2: string;
        p3: string;
        p4: string;
        p5: ST_EntityType;
    };
    static m(a: XmlPartManagerBase, b: string, c: string, d: string, e: string, f: string, g: ST_EntityType): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GeoLocationQueryResult extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: CT_GeoLocationQuery;
    c: CT_GeoLocations;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Clear extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    d: List$1<CT_GeoLocationQueryResult>;
    b: List$1<CT_GeoDataEntityQueryResult>;
    c: List$1<CT_GeoDataPointToEntityQueryResult>;
    a: List$1<CT_GeoChildEntitiesQueryResult>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GeoCache extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    constructor();
    b: string;
    a: CT_Clear;
    c: string;
    static f(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static g(a: XmlPartManagerBase, b: string, c: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Geography extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private e;
    private g;
    private k;
    private m;
    private i;
    constructor();
    a: CT_GeoCache;
    d: Nullable$1<ST_GeoProjectionType>;
    f: Nullable$1<ST_GeoMappingLevel>;
    j: string;
    l: string;
    h: string;
    static c(a: XmlPartManagerBase): CT_Geography;
    static o(a: XmlPartManagerBase, b: Nullable$1<ST_GeoProjectionType>, c: Nullable$1<ST_GeoMappingLevel>, d: string, e: string, f: string): {
        p1: Nullable$1<ST_GeoProjectionType>;
        p2: Nullable$1<ST_GeoMappingLevel>;
        p3: string;
        p4: string;
        p5: string;
    };
    static p(a: XmlPartManagerBase, b: string, c: Nullable$1<ST_GeoProjectionType>, d: Nullable$1<ST_GeoMappingLevel>, e: string, f: string, g: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Binning extends Base implements ISupportSetProperty {
    static $t: Type;
    private j;
    private i;
    private g;
    private e;
    a: CT_Double;
    b: CT_UnsignedInt;
    h: Nullable$1<ST_IntervalClosedSide>;
    f: ST_DoubleOrAutomatic;
    d: ST_DoubleOrAutomatic;
    static c(a: XmlPartManagerBase): CT_Binning;
    static l(a: XmlPartManagerBase, b: Nullable$1<ST_IntervalClosedSide>, c: ST_DoubleOrAutomatic, d: ST_DoubleOrAutomatic): {
        p1: Nullable$1<ST_IntervalClosedSide>;
        p2: ST_DoubleOrAutomatic;
        p3: ST_DoubleOrAutomatic;
    };
    static m(a: XmlPartManagerBase, b: Nullable$1<number>): {
        p1: Nullable$1<number>;
    };
    static n(a: XmlPartManagerBase, b: Nullable$1<number>): {
        p1: Nullable$1<number>;
    };
    static o(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_IntervalClosedSide>, d?: ST_DoubleOrAutomatic, e?: ST_DoubleOrAutomatic): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Aggregation extends Base {
    static $t: Type;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_SeriesElementVisibilities extends Base {
    static $t: Type;
    private c;
    private e;
    private g;
    private i;
    private k;
    b: Nullable$1<boolean>;
    d: Nullable$1<boolean>;
    f: Nullable$1<boolean>;
    h: Nullable$1<boolean>;
    j: Nullable$1<boolean>;
    static a(a: XmlPartManagerBase): CT_SeriesElementVisibilities;
    static m(a: XmlPartManagerBase, b: Nullable$1<boolean>, c: Nullable$1<boolean>, d: Nullable$1<boolean>, e: Nullable$1<boolean>, f: Nullable$1<boolean>): {
        p1: Nullable$1<boolean>;
        p2: Nullable$1<boolean>;
        p3: Nullable$1<boolean>;
        p4: Nullable$1<boolean>;
        p5: Nullable$1<boolean>;
    };
    static n(a: XmlPartManagerBase, b: string, c?: Nullable$1<boolean>, d?: Nullable$1<boolean>, e?: Nullable$1<boolean>, f?: Nullable$1<boolean>, g?: Nullable$1<boolean>): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_RegionLabelLayout extends Base {
    static $t: Type;
    private b;
    a: ST_RegionLabelLayout;
    static d(a: XmlPartManagerBase, b: ST_RegionLabelLayout): {
        p1: ST_RegionLabelLayout;
    };
    static e(a: XmlPartManagerBase, b: string, c: ST_RegionLabelLayout): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ParentLabelLayout extends Base {
    static $t: Type;
    private b;
    a: ST_ParentLabelLayout;
    static d(a: XmlPartManagerBase, b: ST_ParentLabelLayout): {
        p1: ST_ParentLabelLayout;
    };
    static e(a: XmlPartManagerBase, b: string, c: ST_ParentLabelLayout): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_SeriesLayoutProperties extends Base implements ISupportSetProperty {
    static $t: Type;
    private f;
    private h;
    private j;
    private d;
    private l;
    constructor();
    e: CT_ParentLabelLayout;
    g: CT_RegionLabelLayout;
    i: CT_SeriesElementVisibilities;
    a: CT_Aggregation;
    b: CT_Binning;
    c: CT_Geography;
    k: CT_Statistics;
    m: CT_Subtotals;
    n: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_DataId extends Base {
    static $t: Type;
    private c;
    b: number;
    static d(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static e(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_DataLabelHidden extends Base {
    static $t: Type;
    private c;
    b: number;
    static d(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static e(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class ChartExDataLabelBase extends Base {
    static $t: Type;
    constructor();
    b: CT_NumberFormat;
    c: CT_ShapeProperties_DML;
    d: CT_TextBody_DML;
    a: CT_DataLabelVisibilities;
    h: string;
    f: List$1<CT_Extension>;
    g: Nullable$1<ST_DataLabelPos>;
    e(a: ElementPropertyIds, b: any): boolean;
}
/**
 * @hidden
 */
export declare class CT_DataLabels extends ChartExDataLabelBase implements ISupportSetProperty {
    static $t: Type;
    constructor();
    i: List$1<CT_DataLabel>;
    j: List$1<CT_DataLabelHidden>;
    static k(a: XmlPartManagerBase, b: Nullable$1<ST_DataLabelPos>): {
        p1: Nullable$1<ST_DataLabelPos>;
    };
    static l(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_DataLabelPos>): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_DataLabel extends ChartExDataLabelBase implements ISupportSetProperty {
    static $t: Type;
    constructor();
    i: number;
    static j(a: XmlPartManagerBase, b: number, c: Nullable$1<ST_DataLabelPos>): {
        p1: number;
        p2: Nullable$1<ST_DataLabelPos>;
    };
    static k(a: XmlPartManagerBase, b: string, c: Nullable$1<ST_DataLabelPos>, d: number): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_DataLabelVisibilities extends Base {
    static $t: Type;
    private d;
    private b;
    private f;
    c: Nullable$1<boolean>;
    a: Nullable$1<boolean>;
    e: Nullable$1<boolean>;
    static h(a: XmlPartManagerBase, b: Nullable$1<boolean>, c: Nullable$1<boolean>, d: Nullable$1<boolean>): {
        p1: Nullable$1<boolean>;
        p2: Nullable$1<boolean>;
        p3: Nullable$1<boolean>;
    };
    static i(a: XmlPartManagerBase, b: string, c?: Nullable$1<boolean>, d?: Nullable$1<boolean>, e?: Nullable$1<boolean>): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_DataPoint extends Base implements ISupportSetProperty {
    static $t: Type;
    private e;
    constructor();
    a: CT_ShapeProperties_DML;
    b: List$1<CT_Extension>;
    d: number;
    static f(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static g(a: XmlPartManagerBase, b: string, c: number): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ValueColorMiddlePosition extends Base implements ISupportSetProperty {
    static $t: Type;
    a: CT_NumberColorPosition;
    b: CT_PercentageColorPosition;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_NumberColorPosition extends Base {
    static $t: Type;
    private b;
    a: number;
    static d(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static e(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_PercentageColorPosition extends Base {
    static $t: Type;
    private b;
    a: number;
    static d(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static e(a: XmlPartManagerBase, b: string, c: number): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ExtremeValueColorPosition extends Base {
    static $t: Type;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ValueColorEndPosition extends Base implements ISupportSetProperty {
    static $t: Type;
    a: CT_ExtremeValueColorPosition;
    b: CT_NumberColorPosition;
    c: CT_PercentageColorPosition;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ValueColorPositions extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    private f;
    private b;
    private i;
    constructor();
    c: CT_ValueColorEndPosition;
    e: CT_ValueColorMiddlePosition;
    a: CT_ValueColorEndPosition;
    h: Nullable$1<number>;
    static k(a: XmlPartManagerBase, b: Nullable$1<number>): {
        p1: Nullable$1<number>;
    };
    static l(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ValueColors extends Base implements ISupportSetProperty {
    static $t: Type;
    private f;
    private d;
    private b;
    constructor();
    e: CT_SolidColorFillProperties;
    c: CT_SolidColorFillProperties;
    a: CT_SolidColorFillProperties;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Series extends Base implements ISupportSetProperty {
    static $t: Type;
    private h;
    private l;
    private j;
    private b;
    private f;
    private n;
    private x;
    private z;
    private ac;
    private v;
    constructor();
    t: number;
    g: CT_Text;
    o: CT_ShapeProperties_DML;
    k: CT_ValueColors;
    i: CT_ValueColorPositions;
    r: List$1<CT_DataPoint>;
    c: CT_DataLabels;
    a: CT_DataId;
    e: CT_SeriesLayoutProperties;
    q: List$1<ST_AxisId>;
    s: List$1<CT_Extension>;
    m: ST_SeriesLayout;
    w: Nullable$1<boolean>;
    y: Nullable$1<number>;
    ab: string;
    u: Nullable$1<number>;
    static d(a: XmlPartManagerBase): CT_Series;
    static ad(a: XmlPartManagerBase, b: ST_SeriesLayout, c: Nullable$1<boolean>, d: Nullable$1<number>, e: string, f: Nullable$1<number>): {
        p1: ST_SeriesLayout;
        p2: Nullable$1<boolean>;
        p3: Nullable$1<number>;
        p4: string;
        p5: Nullable$1<number>;
    };
    static ae(a: XmlPartManagerBase, b: string, c: Nullable$1<number>, d: Nullable$1<boolean>, e: Nullable$1<number>, f: string, g: ST_SeriesLayout): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_PlotSurface extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    a: CT_ShapeProperties_DML;
    b: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_PlotAreaRegion extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    a: CT_PlotSurface;
    c: List$1<CT_Series>;
    b: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_PlotAreaEx extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    constructor();
    a: CT_PlotAreaRegion;
    d: List$1<CT_Axis>;
    c: CT_ShapeProperties_DML;
    e: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ChartTitle extends ChartExTitleBase implements ISupportSetProperty {
    static $t: Type;
    constructor();
    l: Nullable$1<ST_SidePos>;
    j: Nullable$1<ST_PosAlign>;
    k: Nullable$1<boolean>;
    static f(a: XmlPartManagerBase): CT_ChartTitle;
    static m(a: XmlPartManagerBase, b: Nullable$1<ST_SidePos>, c: Nullable$1<ST_PosAlign>, d: Nullable$1<boolean>): {
        p1: Nullable$1<ST_SidePos>;
        p2: Nullable$1<ST_PosAlign>;
        p3: Nullable$1<boolean>;
    };
    static n(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_PosAlign>, d?: Nullable$1<boolean>, e?: Nullable$1<ST_SidePos>): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ChartEx extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private f;
    private d;
    constructor();
    a: CT_ChartTitle;
    e: CT_PlotAreaEx;
    c: CT_LegendEx;
    g: List$1<CT_Extension>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_StringValue extends Base {
    static $t: Type;
    private e;
    private c;
    d: number;
    b: string;
    toString(): string;
    static f(a: XmlPartManagerBase, b: number, c: string): void;
}
/**
 * @hidden
 */
export declare class CT_StringLevel extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private g;
    private d;
    constructor();
    a: List$1<CT_StringValue>;
    f: number;
    c: string;
    static h(a: XmlPartManagerBase, b: number, c: string): {
        p1: number;
        p2: string;
    };
    static i(a: XmlPartManagerBase, b: string, c: string, d: number): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_StringDimension extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    constructor();
    a: CT_Formula;
    b: CT_Formula;
    e: List$1<CT_StringLevel>;
    c: ST_StringDimensionType;
    static g(a: XmlPartManagerBase, b: ST_StringDimensionType): {
        p1: ST_StringDimensionType;
    };
    static h(a: XmlPartManagerBase, b: string, c: ST_StringDimensionType): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_NumericValue extends Base {
    static $t: Type;
    d: number;
    b: number;
    toString(): string;
    static a(a: XmlPartManagerBase): CT_NumericValue;
    static e(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static f(a: XmlPartManagerBase, b: number, c: string): void;
}
/**
 * @hidden
 */
export declare class CT_NumericLevel extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private i;
    private d;
    private f;
    constructor();
    a: List$1<CT_NumericValue>;
    h: number;
    c: string;
    e: string;
    static j(a: XmlPartManagerBase, b: number, c: string, d: string): {
        p1: number;
        p2: string;
        p3: string;
    };
    static k(a: XmlPartManagerBase, b: string, c: string, d: string, e: number): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_NumericDimension extends Base implements ISupportSetProperty {
    static $t: Type;
    private d;
    constructor();
    a: CT_Formula;
    b: CT_Formula;
    e: List$1<CT_NumericLevel>;
    c: ST_NumericDimensionType;
    static g(a: XmlPartManagerBase, b: ST_NumericDimensionType): {
        p1: ST_NumericDimensionType;
    };
    static h(a: XmlPartManagerBase, b: string, c: ST_NumericDimensionType): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Data extends Base implements ISupportSetProperty {
    static $t: Type;
    private g;
    constructor();
    d: List$1<CT_Extension>;
    f: number;
    a: CT_NumericDimension;
    b: CT_StringDimension;
    c: CT_StringDimension;
    static h(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static i(a: XmlPartManagerBase, b: string, c: number): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GeoLocationQueryResults extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    constructor();
    a: List$1<CT_GeoLocationQueryResult>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GeoPolygons extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    constructor();
    a: List$1<CT_GeoPolygon>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Copyrights extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    constructor();
    a: List$1<string>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GeoDataEntityQueryResults extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    constructor();
    a: List$1<CT_GeoDataEntityQueryResult>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GeoDataPointToEntityQueryResults extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    constructor();
    a: List$1<CT_GeoDataPointToEntityQueryResult>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GeoChildTypes extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    a: List$1<ST_EntityType>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GeoChildEntities extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    constructor();
    a: List$1<CT_GeoHierarchyEntity>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GeoChildEntitiesQueryResults extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    constructor();
    a: List$1<CT_GeoChildEntitiesQueryResult>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Subtotals extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    a: List$1<number>;
    static b(a: XmlPartManagerBase): Nullable$1<number>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_FormatOverrides extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    constructor();
    a: List$1<CT_FormatOverride>;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class DoubleOrAutoBase extends Base {
    static $t: Type;
    constructor();
    readonly a: boolean;
    b: Nullable$1<number>;
    static e(a: string, b: Nullable$1<number>): {
        p1: Nullable$1<number>;
    };
    d(): string;
}
/**
 * @hidden
 */
export declare class ST_DoubleOrAutomatic extends DoubleOrAutoBase {
    static $t: Type;
    static f(a: string): ST_DoubleOrAutomatic;
}
/**
 * @hidden
 */
export declare class ST_GapWidthRatio extends DoubleOrAutoBase {
    static $t: Type;
    static f(a: string): ST_GapWidthRatio;
}
/**
 * @hidden
 */
export declare class ST_ValueAxisUnit extends DoubleOrAutoBase {
    static $t: Type;
    static f(a: string): ST_ValueAxisUnit;
}
/**
 * @hidden
 */
export declare class ST_AxisId extends ValueType {
    static $t: Type;
    constructor();
    h: number;
    static c(a: XmlPartManagerBase): ST_AxisId;
    private static i;
    static k(a: XmlPartManagerBase, b: number, c?: boolean): void;
    j(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    toString(): string;
    static f(a: ST_AxisId): number;
    static e(a: Nullable$1<ST_AxisId>): Nullable$1<number>;
    static a(a: number): ST_AxisId;
    static d(a: Nullable$1<number>): Nullable$1<ST_AxisId>;
}
/**
 * @hidden
 */
export declare class ChartExExtensions extends Base {
    static $t: Type;
    static ag(a: CT_ChartSpaceEx, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ae(a: CT_ChartData, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static af(a: CT_ChartEx, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static au(a: CT_FormatOverrides, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static by(a: CT_PrintSettingsEx, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ar(a: CT_ExternalDataEx, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ak(a: CT_Data, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bo(a: CT_NumericDimension, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static b4(a: CT_StringDimension, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static av(a: CT_Formula, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static b6(a: CT_StringValue, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bq(a: CT_NumericValue, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bp(a: CT_NumericLevel, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ah(a: CT_ChartTitle, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bv(a: CT_PlotAreaEx, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bl(a: CT_LegendEx, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static b8(a: CT_Text, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static b9(a: CT_TextData, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bw(a: CT_PlotAreaRegion, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static y(a: CT_Axis, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static z(a: CT_AxisTitle, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bx(a: CT_PlotSurface, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static b0(a: CT_Series, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cg(a: CT_ValueColors, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cf(a: CT_ValueColorPositions, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static aq(a: CT_DataPoint, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ao(a: CT_DataLabels, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static al(a: CT_DataId, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static b2(a: CT_SeriesLayoutProperties, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static b1(a: CT_SeriesElementVisibilities, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cd(a: CT_ValueColorEndPosition, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ce(a: CT_ValueColorMiddlePosition, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static as(a: CT_ExtremeValueColorPosition, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bm(a: CT_NumberColorPosition, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bu(a: CT_PercentageColorPosition, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bn(a: CT_NumberFormat, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ap(a: CT_DataLabelVisibilities, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cw(a: string, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static am(a: CT_DataLabel, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static an(a: CT_DataLabelHidden, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bt(a: CT_ParentLabelLayout, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bz(a: CT_RegionLabelLayout, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static x(a: CT_Aggregation, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ac(a: CT_Binning, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ba(a: CT_Geography, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static b3(a: CT_Statistics, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static b7(a: CT_Subtotals, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static aw(a: CT_GeoCache, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ai(a: CT_Clear, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bf(a: CT_GeoLocationQueryResults, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static a5(a: CT_GeoDataEntityQueryResults, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static a9(a: CT_GeoDataPointToEntityQueryResults, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static a0(a: CT_GeoChildEntitiesQueryResults, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static be(a: CT_GeoLocationQueryResult, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bd(a: CT_GeoLocationQuery, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bg(a: CT_GeoLocations, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bc(a: CT_GeoLocation, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static w(a: CT_Address, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static a4(a: CT_GeoDataEntityQueryResult, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static a3(a: CT_GeoDataEntityQuery, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static a2(a: CT_GeoData, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bi(a: CT_GeoPolygons, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e?: string): void;
    static aj(a: CT_Copyrights, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bh(a: CT_GeoPolygon, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static a8(a: CT_GeoDataPointToEntityQueryResult, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static a6(a: CT_GeoDataPointQuery, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static a7(a: CT_GeoDataPointToEntityQuery, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static az(a: CT_GeoChildEntitiesQueryResult, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ay(a: CT_GeoChildEntitiesQuery, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ax(a: CT_GeoChildEntities, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static a1(a: CT_GeoChildTypes, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ch(a: ST_EntityType, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bb(a: CT_GeoHierarchyEntity, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ad(a: CT_CategoryAxisScaling, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cc(a: CT_ValueAxisScaling, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static aa(a: CT_AxisUnits, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bj(a: CT_Gridlines, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cb(a: CT_TickMarks, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ca(a: CT_TickLabels, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ab(a: CT_AxisUnitsLabel, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static at(a: CT_FormatOverride, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bk(a: CT_HeaderFooter, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static br(a: CT_PageMargins, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static bs(a: CT_PageSetup, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static v(a: CT_Extension, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static b5(a: CT_StringLevel, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ci(a: CT_ColorMapping, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static cs(a: List$1<CT_FormatOverride>, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e?: string): void;
    static ct(a: List$1<CT_Extension>, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e?: string): void;
    static cj(a: List$1<CT_Data>, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager): void;
    static ck(a: List$1<CT_NumericLevel>, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager): void;
    static cl(a: List$1<CT_StringLevel>, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager): void;
    static cm(a: List$1<ST_AxisId>, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager): void;
    static cn(a: List$1<CT_GeoLocationQueryResult>, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager): void;
    static co(a: List$1<CT_GeoDataEntityQueryResult>, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager): void;
    static cp(a: List$1<CT_GeoDataPointToEntityQueryResult>, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager): void;
    static cq(a: List$1<CT_GeoChildEntitiesQueryResult>, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager): void;
    static cu(a: List$1<CT_GeoHierarchyEntity>, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string, f: string): void;
    static cr(a: List$1<CT_GeoPolygon>, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager): void;
    static cv(a: List$1<string>, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string, f: string, g: string): void;
    static a(a: ST_DataLabelPos): DataLabelPosition;
    static k(a: DataLabelPosition): ST_DataLabelPos;
    static f(a: ST_SidePos, b: ST_PosAlign): LegendPosition;
    static s(a: LegendPosition): Tuple$2<ST_SidePos, ST_PosAlign>;
    static h(a: ST_TickMarksType): TickMark;
    static q(a: TickMark): ST_TickMarksType;
    static b(a: ST_AxisUnit): DisplayUnit;
    static i(a: CT_Text): CT_Tx;
    static g(a: ST_ParentLabelLayout): ParentLabelLayout;
    static n(a: ParentLabelLayout): ST_ParentLabelLayout;
    static p(a: ChartType): ST_SeriesLayout;
    static u(a: List$1<CT_Axis>, b: WorksheetChart, c: Sheet, d: WorkbookSaveManagerExcel2007): void;
    static t(a: CT_Axis, b: Axis, c: WorksheetChart, d: Sheet, e: WorkbookSaveManagerExcel2007): void;
    private static j;
    static r(a: DisplayUnit): Nullable$1<ST_AxisUnit>;
    static e(a: ST_GeoProjectionType): GeographicMapProjection;
    static m(a: GeographicMapProjection): ST_GeoProjectionType;
    static d(a: ST_GeoMappingLevel): GeographicMappingArea;
    static l(a: GeographicMappingArea): ST_GeoMappingLevel;
    static c(a: ST_RegionLabelLayout): GeographicMapLabels;
    static o(a: GeographicMapLabels): ST_RegionLabelLayout;
}
/**
 * @hidden
 */
export declare class ChartExUtils extends Base {
    static $t: Type;
    static a(a: ChartType): boolean;
    static b(a: ChartType): boolean;
    static c(a: ChartType): string;
}
/**
 * @hidden
 */
export declare class ChartDrawingAttributes extends Base {
    static $t: Type;
}
/**
 * @hidden
 */
export declare class ChartDrawingElements extends Base {
    static $t: Type;
    static readonly o: string;
    static readonly a: string;
    static readonly b: string;
    static readonly c: string;
    static readonly d: string;
    static readonly e: string;
    static readonly f: string;
    static readonly g: string;
    static readonly h: string;
    static readonly i: string;
    static readonly j: string;
    static readonly k: string;
    static readonly l: string;
    static readonly m: string;
    static readonly n: string;
    static readonly p: string;
    static readonly q: string;
    static readonly r: string;
    static readonly s: string;
    static readonly t: string;
    static readonly u: string;
    static readonly v: string;
    static readonly w: string;
    static readonly x: string;
    static readonly y: string;
    static readonly z: string;
    static readonly aa: string;
    static readonly ab: string;
    static readonly ac: string;
    static readonly ad: string;
}
/**
 * @hidden
 */
export declare class CT_GraphicFrameNonVisual extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private d;
    constructor();
    a: CT_NonVisualDrawingProps;
    c: CT_NonVisualGraphicFrameProperties;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_GraphicFrame extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private f;
    private d;
    private k;
    private i;
    constructor();
    a: CT_GraphicFrameNonVisual;
    e: CT_Transform2D;
    c: CT_GraphicalObject;
    j: string;
    h: Nullable$1<boolean>;
    static m(a: XmlPartManagerBase, b: string, c: Nullable$1<boolean>): {
        p1: string;
        p2: Nullable$1<boolean>;
    };
    static n(a: XmlPartManagerBase, b: string, c?: Nullable$1<boolean>, d?: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Shape_ChartDrawing extends Base implements ISupportSetProperty {
    static $t: Type;
    private o;
    private p;
    private k;
    private l;
    private e;
    private a;
    private g;
    private c;
    constructor();
    q: string;
    r: string;
    m: Nullable$1<boolean>;
    n: Nullable$1<boolean>;
    f: CT_ShapeNonVisual;
    b: CT_ShapeProperties_DML;
    h: CT_ShapeStyle;
    d: CT_TextBody_DML;
    static t(a: XmlPartManagerBase, b: string, c: string, d: Nullable$1<boolean>, e: Nullable$1<boolean>): {
        p1: string;
        p2: string;
        p3: Nullable$1<boolean>;
        p4: Nullable$1<boolean>;
    };
    static u(a: XmlPartManagerBase, b: string, c?: Nullable$1<boolean>, d?: Nullable$1<boolean>, e?: string, f?: string): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class EG_ObjectChoices extends Base {
    static $t: Type;
    constructor();
    e: CT_Shape;
    c: CT_GroupShape;
    a: CT_GraphicFrame;
    b: CT_Connector;
    d: CT_Picture;
    g(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    h(a: ElementPropertyIds, b: any): void;
    f(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class EG_Anchor_ChartDrawing extends Base {
    static $t: Type;
    constructor();
    b: CT_RelSizeAnchor;
    a: CT_AbsSizeAnchor;
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: string): void;
    e(a: ElementPropertyIds, b: any): void;
    c(a: ElementPropertyIds): boolean;
}
/**
 * @hidden
 */
export declare class CT_ChartDrawingAnchorBase extends Base {
    static $t: Type;
    private a;
    constructor();
    c: CT_Marker;
    readonly b: EG_ObjectChoices;
}
/**
 * @hidden
 */
export declare class CT_RelSizeAnchor extends CT_ChartDrawingAnchorBase {
    static $t: Type;
    constructor();
    d: CT_Marker;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_AbsSizeAnchor extends Base {
    static $t: Type;
    private r;
    private c;
    private o;
    private k;
    private m;
    private g;
    private a;
    private e;
    private i;
    constructor();
    item: any;
    readonly d: EG_ObjectChoices;
    p: CT_Marker;
    l: CT_PositiveSize2D;
    n: CT_Shape;
    h: CT_GroupShape;
    b: CT_GraphicFrame;
    f: CT_Connector;
    j: CT_Picture;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_Drawing_ChartDrawing extends Base {
    static $t: Type;
    private a;
    constructor();
    readonly b: List$1<CT_ChartDrawingAnchorBase>;
    toString(): string;
}
/**
 * @hidden
 */
export declare class DMLChartDrawingUtils extends Base {
    static $t: Type;
}
/**
 * @hidden
 */
export declare class CT_StyleReference extends Base implements ISupportSetProperty {
    static $t: Type;
    private b;
    private i;
    private d;
    private e;
    constructor();
    a: CT_StyleColor;
    h: number;
    c: ST_StyleReferenceModifierList;
    readonly f: EG_ColorChoice_DML;
    static j(a: XmlPartManagerBase, b: number, c: ST_StyleReferenceModifierList): {
        p1: number;
        p2: ST_StyleReferenceModifierList;
    };
    static k(a: XmlPartManagerBase, b: string, c: ST_StyleReferenceModifierList, d: number): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_FontReference_ChartStyle extends Base implements ISupportSetProperty {
    static $t: Type;
    private c;
    private i;
    private e;
    private f;
    constructor();
    b: CT_StyleColor;
    h: ST_FontCollectionIndex;
    d: ST_StyleReferenceModifierList;
    readonly g: EG_ColorChoice_DML;
    static k(a: XmlPartManagerBase, b: ST_FontCollectionIndex, c: ST_StyleReferenceModifierList): {
        p1: ST_FontCollectionIndex;
        p2: ST_StyleReferenceModifierList;
    };
    static l(a: XmlPartManagerBase, b: string, c: ST_StyleReferenceModifierList, d: ST_FontCollectionIndex): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    static a(a: ST_FontCollectionIndex, b: ST_SchemeColorVal, c?: Nullable$1<number>, d?: Nullable$1<number>): CT_FontReference_ChartStyle;
}
/**
 * @hidden
 */
export declare class CT_MarkerLayout extends Base {
    static $t: Type;
    private d;
    private b;
    c: Nullable$1<ST_MarkerStyle>;
    a: Nullable$1<number>;
    static f(a: XmlPartManagerBase, b: Nullable$1<ST_MarkerStyle>, c: Nullable$1<number>): {
        p1: Nullable$1<ST_MarkerStyle>;
        p2: Nullable$1<number>;
    };
    static g(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>, d?: Nullable$1<ST_MarkerStyle>): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_StyleEntry extends Base implements ISupportSetProperty {
    static $t: Type;
    private j;
    private f;
    private x;
    private e;
    private d;
    private b;
    private p;
    private t;
    private r;
    private n;
    constructor();
    k: ST_StyleEntryModifierList;
    i: CT_StyleReference;
    y: number;
    h: CT_StyleReference;
    g: CT_StyleReference;
    c: CT_FontReference_ChartStyle;
    q: CT_ShapeProperties_DML;
    u: CT_TextCharacterProperties_DML;
    s: CT_TextBodyProperties_DML;
    o: CT_OfficeArtExtensionList;
    static ab(a: XmlPartManagerBase, b: ST_StyleEntryModifierList): {
        p1: ST_StyleEntryModifierList;
    };
    static ac(a: XmlPartManagerBase, b: string, c?: ST_StyleEntryModifierList): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    w: ISaveToXLSX;
    v: ISaveToXLSX;
    l: CT_EffectStyleItem;
    m: CT_LineProperties_DML;
    private a;
    aa(a: ThemePartInfo): void;
}
/**
 * @hidden
 */
export declare class CT_ChartStyle extends Base implements ISupportSetProperty {
    static $t: Type;
    private bi;
    private e;
    private f;
    private g;
    private h;
    private i;
    private j;
    private k;
    private l;
    private m;
    private c;
    private n;
    private o;
    private p;
    private q;
    private r;
    private s;
    private t;
    private u;
    private v;
    private w;
    private x;
    private y;
    private z;
    private aa;
    private ab;
    private ac;
    private ad;
    private ae;
    private af;
    private ag;
    private ah;
    private be;
    constructor();
    bj: Nullable$1<number>;
    ai: CT_StyleEntry;
    aj: CT_StyleEntry;
    ak: CT_StyleEntry;
    al: CT_StyleEntry;
    am: CT_StyleEntry;
    an: CT_StyleEntry;
    ao: CT_StyleEntry;
    ap: CT_StyleEntry;
    aq: CT_StyleEntry;
    d: CT_MarkerLayout;
    ar: CT_StyleEntry;
    as: CT_StyleEntry;
    at: CT_StyleEntry;
    au: CT_StyleEntry;
    av: CT_StyleEntry;
    aw: CT_StyleEntry;
    ax: CT_StyleEntry;
    ay: CT_StyleEntry;
    az: CT_StyleEntry;
    a0: CT_StyleEntry;
    a1: CT_StyleEntry;
    a2: CT_StyleEntry;
    a3: CT_StyleEntry;
    a4: CT_StyleEntry;
    a5: CT_StyleEntry;
    a6: CT_StyleEntry;
    a7: CT_StyleEntry;
    a8: CT_StyleEntry;
    a9: CT_StyleEntry;
    ba: CT_StyleEntry;
    bb: CT_StyleEntry;
    bf: CT_OfficeArtExtensionList;
    static bl(a: XmlPartManagerBase, b: Nullable$1<number>): {
        p1: Nullable$1<number>;
    };
    static bn(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
    readonly a: CT_StyleEntry[];
    static b(): CT_ChartStyle;
    static bc(): ST_StyleEntryModifierList;
    static bd(a: ST_StyleEntryModifierEnum[]): ST_StyleEntryModifierList;
    static bg(a: ST_SchemeColorVal, b?: Nullable$1<number>, c?: Nullable$1<number>): CT_ShapeProperties_DML;
    static bh(a: ST_SchemeColorVal, b?: Nullable$1<number>, c?: Nullable$1<number>): CT_SolidColorFillProperties;
    bm(a: ChartType): void;
}
/**
 * @hidden
 */
export declare class ST_ColorStyleMethod extends Base {
    static $t: Type;
    private c;
    private e;
    d: Nullable$1<ST_ColorStyleMethodEnum>;
    h: string;
    static a(a: string): ST_ColorStyleMethod;
    f(): string;
    static b(a: string): ST_ColorStyleMethod;
    g(): string;
}
/**
 * @hidden
 */
export declare class ST_StyleReferenceModifier extends Base {
    static $t: Type;
    private c;
    private e;
    d: Nullable$1<ST_StyleReferenceModifierEnum>;
    h: string;
    static a(a: string): ST_StyleReferenceModifier;
    f(): string;
    static b(a: string): ST_StyleReferenceModifier;
    g(): string;
}
/**
 * @hidden
 */
export declare class ST_StyleColorVal extends Base {
    static $t: Type;
    private c;
    private d;
    private g;
    e: Nullable$1<number>;
    f: Nullable$1<ST_StyleColorEnum>;
    j: string;
    static a(a: string): ST_StyleColorVal;
    h(): string;
    static b(a: string): ST_StyleColorVal;
    i(): string;
}
/**
 * @hidden
 */
export declare class ST_StyleEntryModifier extends Base {
    static $t: Type;
    private c;
    private e;
    d: Nullable$1<ST_StyleEntryModifierEnum>;
    h: string;
    static a(a: string): ST_StyleEntryModifier;
    f(): string;
    static b(a: string): ST_StyleEntryModifier;
    g(): string;
}
/**
 * @hidden
 */
export declare class ST_StyleReferenceModifierList extends Base {
    static $t: Type;
    private c;
    d: List$1<ST_StyleReferenceModifier>;
    static a(a: string): ST_StyleReferenceModifierList;
    e(): string;
    static b(a: string): ST_StyleReferenceModifierList;
    f(): string;
}
/**
 * @hidden
 */
export declare class ST_StyleEntryModifierList extends Base {
    static $t: Type;
    private c;
    d: List$1<ST_StyleEntryModifier>;
    static a(a: string): ST_StyleEntryModifierList;
    e(): string;
    static b(a: string): ST_StyleEntryModifierList;
    f(): string;
}
/**
 * @hidden
 */
export declare class ChartStyleAttributes extends Base {
    static $t: Type;
}
/**
 * @hidden
 */
export declare class ChartStyleElements extends Base {
    static $t: Type;
    static readonly af: string;
    static readonly a: string;
    static readonly b: string;
    static readonly c: string;
    static readonly d: string;
    static readonly e: string;
    static readonly f: string;
    static readonly g: string;
    static readonly h: string;
    static readonly i: string;
    static readonly j: string;
    static readonly k: string;
    static readonly l: string;
    static readonly m: string;
    static readonly n: string;
    static readonly o: string;
    static readonly p: string;
    static readonly q: string;
    static readonly r: string;
    static readonly s: string;
    static readonly t: string;
    static readonly u: string;
    static readonly v: string;
    static readonly w: string;
    static readonly x: string;
    static readonly y: string;
    static readonly z: string;
    static readonly aa: string;
    static readonly ab: string;
    static readonly ac: string;
    static readonly ad: string;
    static readonly ae: string;
    static readonly ag: string;
    static readonly ah: string;
    static readonly ai: string;
    static readonly aj: string;
    static readonly ak: string;
    static readonly al: string;
    static readonly am: string;
    static readonly an: string;
    static readonly ao: string;
    static readonly ap: string;
    static readonly aq: string;
    static readonly ar: string;
    static readonly as: string;
}
/**
 * @hidden
 */
export declare class CT_ColorStyleVariation extends CT_DMLColorBase implements ISupportSetProperty {
    static $t: Type;
    constructor();
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_StyleColor extends CT_DMLColorBase implements ISupportSetProperty {
    static $t: Type;
    constructor();
    f: ST_StyleColorVal;
    static e(a: XmlPartManagerBase): CT_StyleColor;
    d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager): void;
    setProperty(a: ElementPropertyIds, b: any): void;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CT_ColorStyle extends Base {
    static $t: Type;
    constructor();
    d: List$1<CT_DMLColorBase>;
    e: List$1<CT_ColorStyleVariation>;
    c: CT_OfficeArtExtensionList;
    b: ST_ColorStyleMethod;
    f: Nullable$1<number>;
    static h(a: XmlPartManagerBase, b: ST_ColorStyleMethod, c: Nullable$1<number>): {
        p1: ST_ColorStyleMethod;
        p2: Nullable$1<number>;
    };
    static i(a: XmlPartManagerBase, b: string, c: Nullable$1<number>, d: ST_ColorStyleMethod): void;
    static a(): CT_ColorStyle;
    toString(): string;
}
/**
 * @hidden
 */
export declare class ChartStyleExtensions extends Base {
    static $t: Type;
    static b(a: CT_ColorStyle, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static c(a: CT_ColorStyleVariation, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static a(a: CT_ChartStyle, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static f(a: CT_StyleEntry, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static e(a: CT_MarkerLayout, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static g(a: CT_StyleReference, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static d(a: CT_FontReference_ChartStyle, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
}
/**
 * @hidden
 */
export declare class ChartStyleUtils extends Base {
    static $t: Type;
    static b(a: XmlPartManagerBase, b: string, c: ST_StyleColorVal): void;
}
/**
 * @hidden
 */
export declare class ChartDeserializer extends Base {
    static $t: Type;
    static lm(a: ObjectModelChartPartManager): void;
    static by(a: XmlPartManagerBase): void;
    static bx(a: XmlPartManagerBase): void;
    static bz(a: XmlPartManagerBase): void;
    static cn(a: XmlPartManagerBase): void;
    static e9(a: XmlPartManagerBase): void;
    static io(a: XmlPartManagerBase): void;
    static ka(a: XmlPartManagerBase): void;
    static b3(a: XmlPartManagerBase): void;
    static hq(a: XmlPartManagerBase): void;
    static hx(a: XmlPartManagerBase): void;
    static bv(a: XmlPartManagerBase): void;
    static j2(a: XmlPartManagerBase): void;
    static kw(a: XmlPartManagerBase): void;
    static dm(a: XmlPartManagerBase): void;
    static hw(a: XmlPartManagerBase): void;
    static k5(a: XmlPartManagerBase): void;
    static dn(a: XmlPartManagerBase): void;
    static dp(a: XmlPartManagerBase): void;
    static dl(a: XmlPartManagerBase): void;
    static gq(a: XmlPartManagerBase): void;
    static d4(a: XmlPartManagerBase): void;
    static bw(a: XmlPartManagerBase): void;
    static cl(a: XmlPartManagerBase): void;
    static d6(a: XmlPartManagerBase): void;
    static i1(a: XmlPartManagerBase): void;
    static k4(a: XmlPartManagerBase): void;
    static kr(a: XmlPartManagerBase): void;
    static ak(a: XmlPartManagerBase): void;
    static hp(a: XmlPartManagerBase): void;
    static la(a: XmlPartManagerBase): void;
    static d3(a: XmlPartManagerBase): void;
    static jn(a: XmlPartManagerBase): void;
    static aq(a: XmlPartManagerBase): void;
    static hr(a: XmlPartManagerBase): void;
    static fj(a: XmlPartManagerBase): void;
    static hs(a: XmlPartManagerBase): void;
    static ct(a: XmlPartManagerBase): void;
    static jb(a: XmlPartManagerBase): void;
    static kv(a: XmlPartManagerBase): void;
    private static n;
    private static k;
    static fb(a: XmlPartManagerBase): void;
    static ha(a: XmlPartManagerBase): void;
    static j9(a: XmlPartManagerBase): void;
    static ii(a: XmlPartManagerBase): void;
    static dr(a: XmlPartManagerBase): void;
    static j6(a: XmlPartManagerBase): void;
    static h5(a: XmlPartManagerBase): void;
    static h3(a: XmlPartManagerBase): void;
    private static l;
    private static g;
    static k6(a: XmlPartManagerBase): void;
    static ba(a: XmlPartManagerBase): void;
    static fu(a: XmlPartManagerBase): void;
    static hb(a: XmlPartManagerBase): void;
    static h2(a: XmlPartManagerBase): void;
    static gr(a: XmlPartManagerBase): void;
    static gw(a: XmlPartManagerBase): void;
    static jv(a: XmlPartManagerBase): void;
    static iw(a: XmlPartManagerBase): void;
    static ju(a: XmlPartManagerBase): void;
    static d1(a: XmlPartManagerBase): void;
    static am(a: XmlPartManagerBase): void;
    static eb(a: XmlPartManagerBase): void;
    static bs(a: XmlPartManagerBase): void;
    static fm(a: XmlPartManagerBase): void;
    static ap(a: XmlPartManagerBase): void;
    static ij(a: XmlPartManagerBase): void;
    static ac(a: XmlPartManagerBase): void;
    static gv(a: XmlPartManagerBase): void;
    static k1(a: XmlPartManagerBase): void;
    static a0(a: XmlPartManagerBase): void;
    static az(a: XmlPartManagerBase): void;
    static dq(a: XmlPartManagerBase): void;
    static b8(a: XmlPartManagerBase): void;
    static iy(a: XmlPartManagerBase): void;
    static j4(a: XmlPartManagerBase): void;
    static ez(a: XmlPartManagerBase): void;
    static kf(a: XmlPartManagerBase): void;
    static ix(a: XmlPartManagerBase): void;
    static hy(a: XmlPartManagerBase): void;
    static kq(a: XmlPartManagerBase): void;
    static i6(a: XmlPartManagerBase): void;
    static b6(a: XmlPartManagerBase): void;
    static e6(a: XmlPartManagerBase): void;
    static ef(a: XmlPartManagerBase): void;
    static s(a: XmlPartManagerBase): void;
    static z(a: XmlPartManagerBase): void;
    static x(a: XmlPartManagerBase): void;
    static e0(a: XmlPartManagerBase): void;
    static e2(a: XmlPartManagerBase): void;
    static e1(a: XmlPartManagerBase): void;
    static iq(a: XmlPartManagerBase): void;
    static is(a: XmlPartManagerBase): void;
    static ir(a: XmlPartManagerBase): void;
    static fv(a: XmlPartManagerBase): void;
    static fx(a: XmlPartManagerBase): void;
    static fw(a: XmlPartManagerBase): void;
    static ic(a: XmlPartManagerBase): void;
    static ie(a: XmlPartManagerBase): void;
    static id(a: XmlPartManagerBase): void;
    static eh(a: XmlPartManagerBase): void;
    static ej(a: XmlPartManagerBase): void;
    static ei(a: XmlPartManagerBase): void;
    static a6(a: XmlPartManagerBase): void;
    static a8(a: XmlPartManagerBase): void;
    static a7(a: XmlPartManagerBase): void;
    static d8(a: XmlPartManagerBase): void;
    static e8(a: XmlPartManagerBase): void;
    static cp(a: XmlPartManagerBase): void;
    static fz(a: XmlPartManagerBase): void;
    static f0(a: XmlPartManagerBase): void;
    static f1(a: XmlPartManagerBase): void;
    static f2(a: XmlPartManagerBase): void;
    static f3(a: XmlPartManagerBase): void;
    static f4(a: XmlPartManagerBase): void;
    static f5(a: XmlPartManagerBase): void;
    static f6(a: XmlPartManagerBase): void;
    static f7(a: XmlPartManagerBase): void;
    static fr(a: XmlPartManagerBase): void;
    static jx(a: XmlPartManagerBase): void;
    static jw(a: XmlPartManagerBase): void;
    static bk(a: XmlPartManagerBase): void;
    static bj(a: XmlPartManagerBase): void;
    static br(a: XmlPartManagerBase): void;
    static bp(a: XmlPartManagerBase): void;
    static bq(a: XmlPartManagerBase): void;
    static bm(a: XmlPartManagerBase): void;
    static bl(a: XmlPartManagerBase): void;
    static bo(a: XmlPartManagerBase): void;
    static bc(a: XmlPartManagerBase): void;
    static bi(a: XmlPartManagerBase): void;
    static bh(a: XmlPartManagerBase): void;
    static ki(a: XmlPartManagerBase): void;
    static cq(a: XmlPartManagerBase): void;
    static jy(a: XmlPartManagerBase): void;
    static jz(a: XmlPartManagerBase): void;
    static a4(a: XmlPartManagerBase): void;
    static t(a: XmlPartManagerBase): void;
    static u(a: XmlPartManagerBase): void;
    static v(a: XmlPartManagerBase): void;
    static w(a: XmlPartManagerBase): void;
    static y(a: XmlPartManagerBase): void;
    static ab(a: XmlPartManagerBase): void;
    static a2(a: XmlPartManagerBase): void;
    static a9(a: XmlPartManagerBase): void;
    static b1(a: XmlPartManagerBase): void;
    static b4(a: XmlPartManagerBase): void;
    static c7(a: XmlPartManagerBase): void;
    static dv(a: XmlPartManagerBase): void;
    static eg(a: XmlPartManagerBase): void;
    static ey(a: XmlPartManagerBase): void;
    static b7(a: XmlPartManagerBase): void;
    static c9(a: XmlPartManagerBase): void;
    static aa(a: XmlPartManagerBase): void;
    static a3(a: XmlPartManagerBase): void;
    static du(a: XmlPartManagerBase): void;
    static ed(a: XmlPartManagerBase): void;
    static e4(a: XmlPartManagerBase): void;
    static g8(a: XmlPartManagerBase): void;
    static h1(a: XmlPartManagerBase): void;
    static ig(a: XmlPartManagerBase): void;
    static ih(a: XmlPartManagerBase): void;
    static js(a: XmlPartManagerBase): void;
    static lf(a: XmlPartManagerBase): void;
    static gt(a: XmlPartManagerBase): void;
    static jt(a: XmlPartManagerBase): void;
    static ee(a: XmlPartManagerBase): void;
    static a5(a: XmlPartManagerBase): void;
    static hg(a: XmlPartManagerBase): void;
    static el(a: XmlPartManagerBase): void;
    static en(a: XmlPartManagerBase): void;
    static fn(a: XmlPartManagerBase): void;
    static he(a: XmlPartManagerBase): void;
    static kp(a: XmlPartManagerBase): void;
    static em(a: XmlPartManagerBase): void;
    static dx(a: XmlPartManagerBase): void;
    static j3(a: XmlPartManagerBase): void;
    static ko(a: XmlPartManagerBase): void;
    static j7(a: XmlPartManagerBase): void;
    static dw(a: XmlPartManagerBase): void;
    static dt(a: XmlPartManagerBase): void;
    static a1(a: XmlPartManagerBase): void;
    static b2(a: XmlPartManagerBase): void;
    static b5(a: XmlPartManagerBase): void;
    static kh(a: XmlPartManagerBase): void;
    static fq(a: XmlPartManagerBase): void;
    static db(a: XmlPartManagerBase): void;
    static da(a: XmlPartManagerBase): void;
    static er(a: XmlPartManagerBase): void;
    static k0(a: XmlPartManagerBase): void;
    static kz(a: XmlPartManagerBase): void;
    static ky(a: XmlPartManagerBase): void;
    static kx(a: XmlPartManagerBase): void;
    static fa(a: XmlPartManagerBase): void;
    static c8(a: XmlPartManagerBase): void;
    static cd(a: XmlPartManagerBase): void;
    static kd(a: XmlPartManagerBase): void;
    static et(a: XmlPartManagerBase): void;
    static eu(a: XmlPartManagerBase): void;
    static hz(a: XmlPartManagerBase): void;
    static cf(a: XmlPartManagerBase): void;
    static im(a: XmlPartManagerBase): void;
    static ay(a: XmlPartManagerBase): void;
    static gm(a: XmlPartManagerBase): void;
    static ep(a: XmlPartManagerBase): void;
    static kj(a: XmlPartManagerBase): void;
    static c5(a: XmlPartManagerBase): void;
    static jr(a: XmlPartManagerBase): void;
    static hv(a: XmlPartManagerBase): void;
    static h7(a: XmlPartManagerBase): void;
    static bb(a: XmlPartManagerBase): void;
    static d2(a: XmlPartManagerBase): void;
    static dc(a: XmlPartManagerBase): void;
    static ip(a: XmlPartManagerBase): void;
    static kg(a: XmlPartManagerBase): void;
    static gd(a: XmlPartManagerBase): void;
    static fd(a: XmlPartManagerBase): void;
    static lg(a: XmlPartManagerBase): void;
    static lj(a: XmlPartManagerBase): void;
    static ld(a: XmlPartManagerBase): void;
    static ev(a: XmlPartManagerBase): void;
    static le(a: XmlPartManagerBase): void;
    static li(a: XmlPartManagerBase): void;
    static lb(a: XmlPartManagerBase): void;
    static eo(a: XmlPartManagerBase): void;
    static ho(a: XmlPartManagerBase): void;
    static e3(a: XmlPartManagerBase): void;
    static ge(a: XmlPartManagerBase): void;
    static cy(a: XmlPartManagerBase): void;
    static ke(a: XmlPartManagerBase): void;
    static jo(a: XmlPartManagerBase): void;
    static cr(a: XmlPartManagerBase): void;
    static gy(a: XmlPartManagerBase): void;
    static cz(a: XmlPartManagerBase): void;
    static jg(a: XmlPartManagerBase): void;
    static jl(a: XmlPartManagerBase): void;
    static i9(a: XmlPartManagerBase): void;
    static jk(a: XmlPartManagerBase): void;
    static jj(a: XmlPartManagerBase): void;
    static i8(a: XmlPartManagerBase): void;
    static i2(a: XmlPartManagerBase): void;
    static ik(a: XmlPartManagerBase): void;
    static ex(a: XmlPartManagerBase): void;
    static il(a: XmlPartManagerBase): void;
    static cs(a: XmlPartManagerBase): void;
    static ia(a: XmlPartManagerBase): void;
    static hi(a: XmlPartManagerBase): void;
    static kk(a: XmlPartManagerBase): void;
    static hk(a: XmlPartManagerBase): void;
    static ae(a: XmlPartManagerBase): void;
    static af(a: XmlPartManagerBase): void;
    static ad(a: XmlPartManagerBase): void;
    static hj(a: XmlPartManagerBase): void;
    static hl(a: XmlPartManagerBase): void;
    static ai(a: XmlPartManagerBase): void;
    static ah(a: XmlPartManagerBase): void;
    static fp(a: XmlPartManagerBase): void;
    static fo(a: XmlPartManagerBase): void;
    static j5(a: XmlPartManagerBase): void;
    static h8(a: XmlPartManagerBase): void;
    static iu(a: XmlPartManagerBase): void;
    static hn(a: XmlPartManagerBase): void;
    static hm(a: XmlPartManagerBase): void;
    static c1(a: XmlPartManagerBase): void;
    static av(a: XmlPartManagerBase): void;
    static au(a: XmlPartManagerBase): void;
    static g4(a: XmlPartManagerBase): void;
    static kc(a: XmlPartManagerBase): void;
    static kb(a: XmlPartManagerBase): void;
    static be(a: XmlPartManagerBase): void;
    static k8(a: XmlPartManagerBase): void;
    static bu(a: XmlPartManagerBase): void;
    static co(a: XmlPartManagerBase): void;
    static i4(a: XmlPartManagerBase): void;
    static c6(a: XmlPartManagerBase): void;
    static ek(a: XmlPartManagerBase): void;
    static k9(a: XmlPartManagerBase): void;
    static i3(a: XmlPartManagerBase): void;
    private static c;
    private static d;
    private static e;
    private static f;
    private static h;
    private static i;
    private static j;
    private static m;
    static c0(a: XmlPartManagerBase): void;
    static c4(a: XmlPartManagerBase): void;
    static an(a: XmlPartManagerBase): void;
    static g6(a: XmlPartManagerBase): void;
    static c3(a: XmlPartManagerBase): void;
    static ks(a: XmlPartManagerBase): void;
    static dd(a: XmlPartManagerBase): void;
    static bt(a: XmlPartManagerBase): void;
    static k7(a: XmlPartManagerBase): void;
    static e7(a: XmlPartManagerBase): void;
    static bd(a: XmlPartManagerBase): void;
    static dj(a: XmlPartManagerBase): void;
    static ku(a: XmlPartManagerBase): void;
    static hh(a: XmlPartManagerBase): void;
    static d7(a: XmlPartManagerBase): void;
    static ar(a: XmlPartManagerBase): void;
    static e5(a: XmlPartManagerBase): void;
    static cv(a: XmlPartManagerBase): void;
    static cu(a: XmlPartManagerBase): void;
    static kt(a: XmlPartManagerBase): void;
    static df(a: XmlPartManagerBase): void;
    static de(a: XmlPartManagerBase): void;
    static dg(a: XmlPartManagerBase): void;
    static gs(a: XmlPartManagerBase): void;
    static ht(a: XmlPartManagerBase): void;
    static gl(a: XmlPartManagerBase): void;
    static g0(a: XmlPartManagerBase): void;
    static gz(a: XmlPartManagerBase): void;
    static gx(a: XmlPartManagerBase): void;
    static d5(a: XmlPartManagerBase): void;
    static gp(a: XmlPartManagerBase): void;
    static j8(a: XmlPartManagerBase): void;
    static go(a: XmlPartManagerBase): void;
    static fy(a: XmlPartManagerBase): void;
    static je(a: XmlPartManagerBase): void;
    static fg(a: XmlPartManagerBase): void;
    static d9(a: XmlPartManagerBase): void;
    static es(a: XmlPartManagerBase): void;
    static k3(a: XmlPartManagerBase): void;
    static jq(a: XmlPartManagerBase): void;
    static ea(a: XmlPartManagerBase): void;
    static k2(a: XmlPartManagerBase): void;
    static c2(a: XmlPartManagerBase): void;
    static h9(a: XmlPartManagerBase): void;
    static iv(a: XmlPartManagerBase): void;
    static lh(a: XmlPartManagerBase): void;
    static lk(a: XmlPartManagerBase): void;
    static d0(a: XmlPartManagerBase): void;
    static ew(a: XmlPartManagerBase): void;
    static aw(a: XmlPartManagerBase): void;
    static g9(a: XmlPartManagerBase): void;
    static i5(a: XmlPartManagerBase): void;
    static i7(a: XmlPartManagerBase): void;
    static g5(a: XmlPartManagerBase): void;
    static j1(a: XmlPartManagerBase): void;
    static j0(a: XmlPartManagerBase): void;
    static ch(a: XmlPartManagerBase): void;
    static i0(a: XmlPartManagerBase): void;
    static iz(a: XmlPartManagerBase): void;
    static lc(a: XmlPartManagerBase): void;
    static at(a: XmlPartManagerBase): void;
    static as(a: XmlPartManagerBase): void;
    static bf(a: XmlPartManagerBase): void;
    static jh(a: XmlPartManagerBase): void;
    static jp(a: XmlPartManagerBase): void;
    static bg(a: XmlPartManagerBase): void;
    static it(a: XmlPartManagerBase): void;
    static ao(a: XmlPartManagerBase): void;
    static f9(a: XmlPartManagerBase): void;
    static gh(a: XmlPartManagerBase): void;
    static ga(a: XmlPartManagerBase): void;
    static gi(a: XmlPartManagerBase): void;
    static kl(a: XmlPartManagerBase): void;
    static b9(a: XmlPartManagerBase): void;
    static cb(a: XmlPartManagerBase): void;
    static cc(a: XmlPartManagerBase): void;
    static ca(a: XmlPartManagerBase): void;
    static gc(a: XmlPartManagerBase): void;
    static gk(a: XmlPartManagerBase): void;
    static cw(a: XmlPartManagerBase): void;
    static ft(a: XmlPartManagerBase): void;
    static g7(a: XmlPartManagerBase): void;
    static gf(a: XmlPartManagerBase): void;
    static gg(a: XmlPartManagerBase): void;
    static ci(a: XmlPartManagerBase): void;
    static bn(a: XmlPartManagerBase): void;
    static cx(a: XmlPartManagerBase): void;
    static aj(a: XmlPartManagerBase): void;
    static fe(a: XmlPartManagerBase): void;
    static ff(a: XmlPartManagerBase): void;
    static km(a: XmlPartManagerBase): void;
    static kn(a: XmlPartManagerBase): void;
    static gu(a: XmlPartManagerBase): void;
    static ax(a: XmlPartManagerBase): void;
    static gb(a: XmlPartManagerBase): void;
    static gj(a: XmlPartManagerBase): void;
    static jc(a: XmlPartManagerBase): void;
    static jm(a: XmlPartManagerBase): void;
    static ji(a: XmlPartManagerBase): void;
    static jd(a: XmlPartManagerBase): void;
    static fl(a: XmlPartManagerBase): void;
    static fk(a: XmlPartManagerBase): void;
    static cg(a: XmlPartManagerBase): void;
    static h0(a: XmlPartManagerBase): void;
    static g3(a: XmlPartManagerBase): void;
    static ec(a: XmlPartManagerBase): void;
    static p(a: XmlPartManagerBase): void;
    static ck(a: XmlPartManagerBase): void;
    static ib(a: XmlPartManagerBase): void;
    static hf(a: XmlPartManagerBase): void;
    static r(a: XmlPartManagerBase): void;
    static q(a: XmlPartManagerBase): void;
    static hu(a: XmlPartManagerBase): void;
    static cj(a: XmlPartManagerBase): void;
    static b0(a: XmlPartManagerBase): void;
    static gn(a: XmlPartManagerBase): void;
    static fs(a: XmlPartManagerBase): void;
    static ag(a: XmlPartManagerBase): void;
    static h6(a: XmlPartManagerBase): void;
    static ce(a: XmlPartManagerBase): void;
    static h4(a: XmlPartManagerBase): void;
    static al(a: XmlPartManagerBase): void;
    static eq(a: XmlPartManagerBase): void;
    static hc(a: XmlPartManagerBase): void;
    static hd(a: XmlPartManagerBase): void;
    static fi(a: XmlPartManagerBase): void;
    static g2(a: XmlPartManagerBase): void;
    static g1(a: XmlPartManagerBase): void;
    static di(a: XmlPartManagerBase): void;
    static dh(a: XmlPartManagerBase): void;
    static dz(a: XmlPartManagerBase): void;
    static dy(a: XmlPartManagerBase): void;
    static dk(a: XmlPartManagerBase): void;
    static jf(a: XmlPartManagerBase): void;
    static ja(a: XmlPartManagerBase): void;
    static fh(a: XmlPartManagerBase): void;
    static fc(a: XmlPartManagerBase): void;
    static cm(a: XmlPartManagerBase): void;
    static ds(a: XmlPartManagerBase): void;
    b: Workbook;
    o: string;
    private static a;
    private static ll;
    static f8(a: XmlPartManagerBase, b: ElementPropertyIds): void;
}
/**
 * @hidden
 */
export declare class ChartExDeserializer extends Base {
    static $t: Type;
    constructor(a: ObjectModelChartExPartManager);
    static h1(a: ObjectModelChartExPartManager): void;
    static bb(a: XmlPartManagerBase): void;
    static bc(a: XmlPartManagerBase): void;
    static ba(a: XmlPartManagerBase): void;
    static a9(a: XmlPartManagerBase): void;
    static g1(a: XmlPartManagerBase): void;
    static hl(a: XmlPartManagerBase): void;
    static bh(a: XmlPartManagerBase): void;
    static cv(a: XmlPartManagerBase): void;
    static fy(a: XmlPartManagerBase): void;
    static cg(a: XmlPartManagerBase): void;
    static cf(a: XmlPartManagerBase): void;
    static bv(a: XmlPartManagerBase): void;
    static ff(a: XmlPartManagerBase): void;
    static g5(a: XmlPartManagerBase): void;
    static ck(a: XmlPartManagerBase): void;
    static e9(a: XmlPartManagerBase): void;
    static en(a: XmlPartManagerBase): void;
    static f4(a: XmlPartManagerBase): void;
    static hi(a: XmlPartManagerBase): void;
    static ft(a: XmlPartManagerBase): void;
    static ed(a: XmlPartManagerBase): void;
    static hj(a: XmlPartManagerBase): void;
    static hk(a: XmlPartManagerBase): void;
    static gf(a: XmlPartManagerBase): void;
    static ht(a: XmlPartManagerBase): void;
    static au(a: XmlPartManagerBase): void;
    static ej(a: XmlPartManagerBase): void;
    static fl(a: XmlPartManagerBase): void;
    static f3(a: XmlPartManagerBase): void;
    static fa(a: XmlPartManagerBase): void;
    static fd(a: XmlPartManagerBase): void;
    static gw(a: XmlPartManagerBase): void;
    static gm(a: XmlPartManagerBase): void;
    static gv(a: XmlPartManagerBase): void;
    static cs(a: XmlPartManagerBase): void;
    static ch(a: XmlPartManagerBase): void;
    static ab(a: XmlPartManagerBase): void;
    static cx(a: XmlPartManagerBase): void;
    static a7(a: XmlPartManagerBase): void;
    static ee(a: XmlPartManagerBase): void;
    static ae(a: XmlPartManagerBase): void;
    static gg(a: XmlPartManagerBase): void;
    static z(a: XmlPartManagerBase): void;
    static fc(a: XmlPartManagerBase): void;
    static hs(a: XmlPartManagerBase): void;
    static ah(a: XmlPartManagerBase): void;
    static ag(a: XmlPartManagerBase): void;
    static cj(a: XmlPartManagerBase): void;
    static bm(a: XmlPartManagerBase): void;
    static go(a: XmlPartManagerBase): void;
    static g3(a: XmlPartManagerBase): void;
    static d3(a: XmlPartManagerBase): void;
    static g9(a: XmlPartManagerBase): void;
    static gn(a: XmlPartManagerBase): void;
    static fz(a: XmlPartManagerBase): void;
    static hh(a: XmlPartManagerBase): void;
    static gr(a: XmlPartManagerBase): void;
    static bk(a: XmlPartManagerBase): void;
    static d9(a: XmlPartManagerBase): void;
    static dp(a: XmlPartManagerBase): void;
    static p(a: XmlPartManagerBase): void;
    static w(a: XmlPartManagerBase): void;
    static u(a: XmlPartManagerBase): void;
    static d4(a: XmlPartManagerBase): void;
    static d6(a: XmlPartManagerBase): void;
    static d5(a: XmlPartManagerBase): void;
    static gj(a: XmlPartManagerBase): void;
    static gl(a: XmlPartManagerBase): void;
    static gk(a: XmlPartManagerBase): void;
    static ek(a: XmlPartManagerBase): void;
    static em(a: XmlPartManagerBase): void;
    static el(a: XmlPartManagerBase): void;
    static f9(a: XmlPartManagerBase): void;
    static gb(a: XmlPartManagerBase): void;
    static ga(a: XmlPartManagerBase): void;
    static dr(a: XmlPartManagerBase): void;
    static dt(a: XmlPartManagerBase): void;
    static ds(a: XmlPartManagerBase): void;
    static aq(a: XmlPartManagerBase): void;
    static as(a: XmlPartManagerBase): void;
    static ar(a: XmlPartManagerBase): void;
    static cw(a: XmlPartManagerBase): void;
    static ea(a: XmlPartManagerBase): void;
    static ce(a: XmlPartManagerBase): void;
    static b1(a: XmlPartManagerBase): void;
    static eo(a: XmlPartManagerBase): void;
    static ep(a: XmlPartManagerBase): void;
    static eq(a: XmlPartManagerBase): void;
    static er(a: XmlPartManagerBase): void;
    static es(a: XmlPartManagerBase): void;
    static et(a: XmlPartManagerBase): void;
    static eu(a: XmlPartManagerBase): void;
    static ev(a: XmlPartManagerBase): void;
    static ew(a: XmlPartManagerBase): void;
    static eh(a: XmlPartManagerBase): void;
    static gy(a: XmlPartManagerBase): void;
    static gx(a: XmlPartManagerBase): void;
    static a0(a: XmlPartManagerBase): void;
    static az(a: XmlPartManagerBase): void;
    static a6(a: XmlPartManagerBase): void;
    static a4(a: XmlPartManagerBase): void;
    static a5(a: XmlPartManagerBase): void;
    static a2(a: XmlPartManagerBase): void;
    static a1(a: XmlPartManagerBase): void;
    static a3(a: XmlPartManagerBase): void;
    static aw(a: XmlPartManagerBase): void;
    static ay(a: XmlPartManagerBase): void;
    static ax(a: XmlPartManagerBase): void;
    static hc(a: XmlPartManagerBase): void;
    static b2(a: XmlPartManagerBase): void;
    static gz(a: XmlPartManagerBase): void;
    static g0(a: XmlPartManagerBase): void;
    static ao(a: XmlPartManagerBase): void;
    static q(a: XmlPartManagerBase): void;
    static r(a: XmlPartManagerBase): void;
    static s(a: XmlPartManagerBase): void;
    static t(a: XmlPartManagerBase): void;
    static v(a: XmlPartManagerBase): void;
    static y(a: XmlPartManagerBase): void;
    static aj(a: XmlPartManagerBase): void;
    static at(a: XmlPartManagerBase): void;
    static bf(a: XmlPartManagerBase): void;
    static bi(a: XmlPartManagerBase): void;
    static b4(a: XmlPartManagerBase): void;
    static cn(a: XmlPartManagerBase): void;
    static dq(a: XmlPartManagerBase): void;
    static d2(a: XmlPartManagerBase): void;
    static bl(a: XmlPartManagerBase): void;
    static b6(a: XmlPartManagerBase): void;
    static x(a: XmlPartManagerBase): void;
    static an(a: XmlPartManagerBase): void;
    static cm(a: XmlPartManagerBase): void;
    static dm(a: XmlPartManagerBase): void;
    static d8(a: XmlPartManagerBase): void;
    static fk(a: XmlPartManagerBase): void;
    static f2(a: XmlPartManagerBase): void;
    static gc(a: XmlPartManagerBase): void;
    static ge(a: XmlPartManagerBase): void;
    static gt(a: XmlPartManagerBase): void;
    static hy(a: XmlPartManagerBase): void;
    static fb(a: XmlPartManagerBase): void;
    static gu(a: XmlPartManagerBase): void;
    static dn(a: XmlPartManagerBase): void;
    static ap(a: XmlPartManagerBase): void;
    static fr(a: XmlPartManagerBase): void;
    static du(a: XmlPartManagerBase): void;
    static dw(a: XmlPartManagerBase): void;
    static ef(a: XmlPartManagerBase): void;
    static fp(a: XmlPartManagerBase): void;
    static hg(a: XmlPartManagerBase): void;
    static dv(a: XmlPartManagerBase): void;
    static cp(a: XmlPartManagerBase): void;
    static g2(a: XmlPartManagerBase): void;
    static hf(a: XmlPartManagerBase): void;
    static g6(a: XmlPartManagerBase): void;
    static co(a: XmlPartManagerBase): void;
    static cl(a: XmlPartManagerBase): void;
    static ai(a: XmlPartManagerBase): void;
    static bg(a: XmlPartManagerBase): void;
    static bj(a: XmlPartManagerBase): void;
    static hb(a: XmlPartManagerBase): void;
    static eg(a: XmlPartManagerBase): void;
    static b8(a: XmlPartManagerBase): void;
    static b7(a: XmlPartManagerBase): void;
    static dz(a: XmlPartManagerBase): void;
    static hp(a: XmlPartManagerBase): void;
    static ho(a: XmlPartManagerBase): void;
    static hn(a: XmlPartManagerBase): void;
    static hm(a: XmlPartManagerBase): void;
    static eb(a: XmlPartManagerBase): void;
    static b5(a: XmlPartManagerBase): void;
    static bp(a: XmlPartManagerBase): void;
    static g8(a: XmlPartManagerBase): void;
    static d0(a: XmlPartManagerBase): void;
    static d1(a: XmlPartManagerBase): void;
    static f0(a: XmlPartManagerBase): void;
    static br(a: XmlPartManagerBase): void;
    static gh(a: XmlPartManagerBase): void;
    static af(a: XmlPartManagerBase): void;
    static e7(a: XmlPartManagerBase): void;
    static dx(a: XmlPartManagerBase): void;
    static hd(a: XmlPartManagerBase): void;
    static b3(a: XmlPartManagerBase): void;
    static gs(a: XmlPartManagerBase): void;
    static fx(a: XmlPartManagerBase): void;
    static f7(a: XmlPartManagerBase): void;
    static av(a: XmlPartManagerBase): void;
    static ct(a: XmlPartManagerBase): void;
    static b9(a: XmlPartManagerBase): void;
    static gi(a: XmlPartManagerBase): void;
    static ha(a: XmlPartManagerBase): void;
    static fu(a: XmlPartManagerBase): void;
    static ac(a: XmlPartManagerBase): void;
    static fv(a: XmlPartManagerBase): void;
    static gq(a: XmlPartManagerBase): void;
    static hw(a: XmlPartManagerBase): void;
    static hv(a: XmlPartManagerBase): void;
    static b0(a: XmlPartManagerBase): void;
    static bz(a: XmlPartManagerBase): void;
    static bw(a: XmlPartManagerBase): void;
    static ec(a: XmlPartManagerBase): void;
    static ad(a: XmlPartManagerBase): void;
    static e4(a: XmlPartManagerBase): void;
    static e2(a: XmlPartManagerBase): void;
    static e0(a: XmlPartManagerBase): void;
    static e3(a: XmlPartManagerBase): void;
    static e1(a: XmlPartManagerBase): void;
    static ez(a: XmlPartManagerBase): void;
    static ci(a: XmlPartManagerBase): void;
    static fe(a: XmlPartManagerBase): void;
    static fs(a: XmlPartManagerBase): void;
    static fg(a: XmlPartManagerBase): void;
    static hx(a: XmlPartManagerBase): void;
    static gp(a: XmlPartManagerBase): void;
    static bx(a: XmlPartManagerBase): void;
    static by(a: XmlPartManagerBase): void;
    static fo(a: XmlPartManagerBase): void;
    static gd(a: XmlPartManagerBase): void;
    static l(a: XmlPartManagerBase): void;
    static al(a: XmlPartManagerBase): void;
    static dd(a: XmlPartManagerBase): void;
    static g4(a: XmlPartManagerBase): void;
    static g7(a: XmlPartManagerBase): void;
    static am(a: XmlPartManagerBase): void;
    static ak(a: XmlPartManagerBase): void;
    static cz(a: XmlPartManagerBase): void;
    static bd(a: XmlPartManagerBase): void;
    static di(a: XmlPartManagerBase): void;
    static c8(a: XmlPartManagerBase): void;
    static dc(a: XmlPartManagerBase): void;
    static c3(a: XmlPartManagerBase): void;
    static dh(a: XmlPartManagerBase): void;
    static dg(a: XmlPartManagerBase): void;
    static dj(a: XmlPartManagerBase): void;
    static df(a: XmlPartManagerBase): void;
    static k(a: XmlPartManagerBase): void;
    static c7(a: XmlPartManagerBase): void;
    static c6(a: XmlPartManagerBase): void;
    static c5(a: XmlPartManagerBase): void;
    static dl(a: XmlPartManagerBase): void;
    static bo(a: XmlPartManagerBase): void;
    static dk(a: XmlPartManagerBase): void;
    static bn(a: XmlPartManagerBase): void;
    static db(a: XmlPartManagerBase): void;
    static c9(a: XmlPartManagerBase): void;
    static da(a: XmlPartManagerBase): void;
    static c2(a: XmlPartManagerBase): void;
    static c1(a: XmlPartManagerBase): void;
    static c0(a: XmlPartManagerBase): void;
    static c4(a: XmlPartManagerBase): void;
    static ca(a: XmlPartManagerBase): void;
    static de(a: XmlPartManagerBase): void;
    static d7(a: XmlPartManagerBase): void;
    static a8(a: XmlPartManagerBase): void;
    static hu(a: XmlPartManagerBase): void;
    static hq(a: XmlPartManagerBase): void;
    static ex(a: XmlPartManagerBase): void;
    static e5(a: XmlPartManagerBase): void;
    static ey(a: XmlPartManagerBase): void;
    static e6(a: XmlPartManagerBase): void;
    static he(a: XmlPartManagerBase): void;
    static hr(a: XmlPartManagerBase): void;
    static bs(a: XmlPartManagerBase): void;
    static f1(a: XmlPartManagerBase): void;
    static fj(a: XmlPartManagerBase): void;
    static cy(a: XmlPartManagerBase): void;
    static m(a: XmlPartManagerBase): void;
    static bu(a: XmlPartManagerBase): void;
    static f8(a: XmlPartManagerBase): void;
    static fq(a: XmlPartManagerBase): void;
    static o(a: XmlPartManagerBase): void;
    static n(a: XmlPartManagerBase): void;
    static fw(a: XmlPartManagerBase): void;
    static bt(a: XmlPartManagerBase): void;
    static be(a: XmlPartManagerBase): void;
    static e8(a: XmlPartManagerBase): void;
    static ei(a: XmlPartManagerBase): void;
    static aa(a: XmlPartManagerBase): void;
    static f6(a: XmlPartManagerBase): void;
    static bq(a: XmlPartManagerBase): void;
    static f5(a: XmlPartManagerBase): void;
    static cu(a: XmlPartManagerBase): void;
    static dy(a: XmlPartManagerBase): void;
    static fm(a: XmlPartManagerBase): void;
    static fn(a: XmlPartManagerBase): void;
    static fi(a: XmlPartManagerBase): void;
    static fh(a: XmlPartManagerBase): void;
    static cc(a: XmlPartManagerBase): void;
    static cb(a: XmlPartManagerBase): void;
    static cr(a: XmlPartManagerBase): void;
    static cq(a: XmlPartManagerBase): void;
    static cd(a: XmlPartManagerBase): void;
    d: Workbook;
    h: string;
    private static c;
    private static h0;
    private static f;
    private static i;
    private static g;
    private static hz;
    static e(a: ChartType): boolean;
    static b(a: CT_Binning): CategoryAxisBinning;
    static a(a: CT_SeriesLayoutProperties): BoxAndWhiskerSettings;
    static j(a: Series): void;
}
/**
 * @hidden
 */
export declare class ChartSerializer extends Base {
    static $t: Type;
    constructor(a: Sheet);
    bc: Sheet;
    bw(a: WorksheetChart, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager): void;
    static bx(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: Sheet, e: string, f: ElementPosition, g: number, h: number, i: number, j: number, k?: boolean): void;
    private static by;
    private static bm;
    private static bn;
    private static bg;
    private static be;
    private static bl;
    private static bo;
    private static bv;
    private static bp;
    private static as;
    private static y;
    private static o;
    private static q;
    private static r;
    private static p;
    private static n;
    private static s;
    private static a1;
    private static a0;
    private static bq;
    private static br;
    private static j;
    private static i;
    private static h;
    private static z;
    private static ak;
    private static aa;
    private static c;
    private static b;
    private static ap;
    private static al;
    private static aj;
    private static v;
    private static an;
    private static l;
    private static au;
    private static at;
    private static ar;
    private static bu;
    private static bz;
    private static bf;
    private static bi;
    static k(a: WorksheetChart, b: Series, c: number, d: boolean, e: WorkbookSaveManagerExcel2007): CT_BarSer;
    static ab(a: WorksheetChart, b: Series, c: number, d: WorkbookSaveManagerExcel2007): CT_LineSer;
    static d(a: WorksheetChart, b: Series, c: number, d: WorkbookSaveManagerExcel2007): CT_AreaSer;
    static am(a: WorksheetChart, b: Series, c: number, d: WorkbookSaveManagerExcel2007): CT_PieSer;
    static aq(a: WorksheetChart, b: Series, c: Series, d: number, e: WorkbookSaveManagerExcel2007, f?: boolean): CT_ScatterSer;
    static ao(a: WorksheetChart, b: Series, c: number, d: WorkbookSaveManagerExcel2007): CT_RadarSer;
    private static m;
    private static av;
    private static bh;
    private static g;
    private static bt;
    private static bs;
    static a(a: IChartObject, b: number): ChartSolidFill;
    private static w;
    private static e;
    private static f;
    private static ad;
    private static ae;
    private static af;
    static ai(a: any[]): CT_NumRef;
    static a6(a: Sheet, b: ChartSolidFill): CT_SolidColorFillProperties;
    static a2(a: Sheet, b: ChartGradientFill): CT_GradientFillProperties;
    static bd(a: Sheet, b: ChartEmptyFill): CT_NoFillProperties;
    static x(a: Sheet, b: ElementPosition, c: number, d: number, e: Nullable$1<number>, f: Nullable$1<number>, g?: boolean, h?: boolean): CT_Layout;
    private static ba;
    static a9(a: Sheet, b: number, c: Nullable$1<TextHorizontalOverflow>, d: Nullable$1<TextVerticalOverflow>, e: TextDirection, f: boolean, g: Nullable$1<VerticalTitleAlignment>): CT_TextBodyProperties_DML;
    static ay(a: Sheet, b: CT_TextBodyProperties_DML, c: IWorkbookFont, d: ChartFillBase, e: FormattedString, f: ReadingOrder, g: SingleTargetFormula): CT_Tx;
    static a7(a: CT_TextBodyProperties_DML, b: IWorkbookFont, c: FormattedString, d: ReadingOrder, e: Sheet, f?: ChartFillBase, g?: boolean): CT_TextBody_DML;
    static a8(a: Sheet, b: CT_TextBodyProperties_DML, c: IWorkbookFont, d: ChartFillBase, e: ReadingOrder): CT_TextBody_DML;
    static bb(a: Sheet, b: IWorkbookFont, c: ReadingOrder): CT_TextParagraphProperties_DML;
    static a3(a: Sheet, b: ChartBorder): CT_LineProperties_DML;
    static a4(a: Sheet, b: ChartLineBase, c: Nullable$1<BorderLineStyle>): CT_LineProperties_DML;
    static a5(a: Sheet, b: ChartFillBase, c: ChartLineBase, d: Nullable$1<BorderLineStyle>): CT_ShapeProperties_DML;
    static aw(a: Sheet, b: ChartTitle): CT_Title;
    static ax(a: Sheet, b: Trendline): CT_Trendline;
    static bj(a: Sheet, b: Series): List$1<CT_Trendline>;
    static u(a: Sheet, b: Series): CT_DLbls;
    static t(a: DataLabel, b: Series, c: number, d: Sheet): CT_DLbl;
    static ac(a: Sheet, b: MarkerStyle, c: Nullable$1<number>, d: ChartFillBase, e: ChartBorder, f: Nullable$1<ChartType>): CT_Marker_Chart;
    static ag(a: ChartLabelBase): CT_NumFmt_Chart;
    static ah(a: string, b: boolean, c?: boolean): CT_NumFmt_Chart;
    static az(a: UpDownBars, b: Sheet): CT_UpDownBars;
    static bk(a: List$1<Axis>, b?: Nullable$1<AxisGroup>, c?: boolean): List$1<CT_UnsignedInt>;
}
/**
 * @hidden
 */
export declare class ChartExSerializer extends Base {
    static $t: Type;
    constructor(a: Sheet);
    k: Sheet;
    p(a: WorksheetChart, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager): void;
    private static l;
    private static h;
    private static q;
    private static m;
    private static g;
    private static d;
    private static e;
    private static i;
    private static c;
    static a(a: ChartTitle, b: Sheet): CT_AxisTitle;
    private static o;
    private static n;
    private static b;
    private static j;
    static f(a: Legend, b: Sheet): CT_LegendEx;
    private static r;
}
/**
 * @hidden
 */
export declare class ComboChartSerializer extends Base {
    static $t: Type;
    static e(a: SeriesCollection): IEnumerable$1<SeriesGroup>;
    static g(a: WorksheetChart, b: Sheet, c: List$1<Axis>, d: CT_PlotArea, e: SeriesGroup, f: WorkbookSaveManagerExcel2007): void;
    private static d;
    private static c;
    static a(a: ChartType): ChartType;
    private static f;
    static b(a: SeriesChartTypeGroup): SeriesType;
}
/**
 * @hidden
 */
export declare class SeriesGroup extends Base {
    static $t: Type;
    private c;
    constructor(a: SeriesChartTypeGroup, b: AxisGroup);
    readonly e: string;
    d: List$1<Series>;
    b: SeriesChartTypeGroup;
    a: AxisGroup;
    toString(): string;
    h(a: Series, b: number, c: number): void;
    g(a: Series): number;
}
/**
 * @hidden
 */
export declare class ChartSerializerExtensions extends Base {
    static $t: Type;
    static a(a: EG_DLblShared, b: DataLabel, c: Series, d: Sheet): void;
    static a6(a: CT_PictureOptions, b: Series): void;
    static a5(a: CT_PictureOptions, b: Series): void;
    static a4(a: CT_PictureOptions, b: DataPoint): void;
    static a3<T extends EG_FillPropertiesBase>($t: Type, a: T, b: ChartFillBase, c: Sheet): void;
    static s(a: CT_Layout, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static aa(a: CT_ManualLayout, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static t(a: CT_LayoutMode, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static u(a: CT_LayoutTarget, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ax(a: CT_TextLanguageID, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static k(a: CT_ChartSpace, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string, f?: boolean): void;
    static i(a: CT_Chart, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static m(a: CT_DispBlanksAs, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static v(a: CT_Legend, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static w(a: CT_LegendEntry, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static x(a: CT_LegendPos, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static at(a: CT_Surface, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static af(a: CT_PictureFormat, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ag(a: CT_PictureStackUnit, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static aj(a: CT_PlotArea, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static e(a: CT_BarChart, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static z(a: CT_LineChart, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static c(a: CT_AreaChart, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ai(a: CT_PieChart, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static n(a: CT_DoughnutChart, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static q(a: CT_HoleSize, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static o(a: CT_FirstSliceAng, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static j(a: CT_ChartLines, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static p(a: CT_GapAmount, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ad(a: CT_Overlap, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ay(a: CT_Title, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static az(a: CT_Tx, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static a2(a: CT_View3D, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static an(a: CT_RotX, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static r(a: CT_HPercent, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ao(a: CT_RotY, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static l(a: CT_DepthPercent, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ae(a: CT_Perspective, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ak(a: CT_RadarChart, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static am(a: CT_RadarStyle, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static al(a: CT_RadarSer, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static f(a: CT_BubbleChart, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static h(a: CT_BubbleSer, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static g(a: CT_BubbleScale, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static aq(a: CT_SizeRepresents, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static av(a: CT_SurfaceChart, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static aw(a: CT_SurfaceSer, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static d(a: CT_Bar3DChart, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static y(a: CT_Line3DChart, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ah(a: CT_Pie3DChart, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static au(a: CT_Surface3DChart, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ab(a: CT_OfPieChart, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ac(a: CT_OfPieType, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ar(a: CT_SplitType, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static b(a: CT_Area3DChart, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static ap(a: CT_SecondPieSize, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static as(a: CT_StockChart, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static a1(a: CT_UpDownBars, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
    static a0(a: CT_UpDownBar, b: XmlPartManagerBase, c: WorkbookSaveManagerExcel2007, d: XmlWriteManager, e: string): void;
}
/**
 * @hidden
 */
export declare class WorksheetChartExtensions extends Base {
    static $t: Type;
    static aq(a: WorksheetChart, b: CT_ChartSpace, c: Sheet, d: WorkbookLoadManagerExcel2007): void;
    static ap(a: Wall, b: CT_Surface, c: WallType, d: Sheet): void;
    static aa(a: ChartTitle, b: CT_Title, c: CT_Chart, d: IAxis, e: Sheet, f: WorkbookLoadManagerExcel2007): void;
    static ag(a: DisplayUnitLabel, b: CT_DispUnitsLbl, c: Sheet, d: WorkbookLoadManagerExcel2007): void;
    static ah(a: DisplayUnitLabel, b: CT_ShapeProperties_DML, c: CT_Tx, d: CT_TextBody_DML, e: CT_Layout, f: Sheet, g: WorkbookLoadManagerExcel2007): void;
    static z(a: ChartSeriesLines, b: CT_ChartLines, c: Sheet, d: WorkbookLoadManagerExcel2007): void;
    static al(a: Trendline, b: CT_Trendline, c: Sheet, d: WorkbookLoadManagerExcel2007): void;
    static am(a: TrendlineLabel, b: CT_Trendline, c: Sheet, d: WorkbookLoadManagerExcel2007): void;
    static ab(a: DataLabel, b: CT_DLbl, c: CT_Extension_DataLabels, d: Sheet, e: WorkbookLoadManagerExcel2007): void;
    static ac(a: DataLabel, b: CT_DLbls, c: CT_Extension_DataLabels, d: Sheet, e: WorkbookLoadManagerExcel2007): void;
    static ad(a: DataLabel, b: EG_DLblShared, c: CT_Tx, d: CT_Extension_DataLabels, e: Sheet, f: WorkbookLoadManagerExcel2007): void;
    static af(a: DataPoint, b: Series, c: CT_DPt, d: Sheet, e: WorkbookLoadManagerExcel2007): void;
    static y(a: ChartLineBase, b: CT_ChartLines, c: Sheet, d: WorkbookLoadManagerExcel2007): void;
    static w(a: ChartDropLines, b: CT_ChartLines, c: Sheet, d: WorkbookLoadManagerExcel2007): void;
    static x(a: ChartHighLowLines, b: CT_ChartLines, c: Sheet, d: WorkbookLoadManagerExcel2007): void;
    static ao(a: UpDownBars, b: CT_UpDownBars, c: Sheet, d: WorkbookLoadManagerExcel2007): void;
    static an(a: UpDownBar, b: CT_UpDownBar, c: Sheet, d: WorkbookLoadManagerExcel2007): void;
    static ar(a: WorksheetChart, b: CT_ChartSpaceEx, c: Sheet, d: WorkbookLoadManagerExcel2007): void;
    static aj(a: Series, b: WorksheetChart, c: CT_Series, d: CT_ChartSpaceEx, e: Sheet, f: WorkbookLoadManagerExcel2007, g: Dictionary$2<number, CT_Data>, h: Dictionary$2<number, Axis>, i: Dictionary$2<number, CT_Series>): void;
    static ai(a: Legend, b: CT_LegendEx, c: WorksheetChart, d: Sheet, e: WorkbookLoadManagerExcel2007): void;
    static ak(a: SeriesDataLabels, b: ChartExDataLabelBase, c: CT_SeriesLayoutProperties, d: Sheet, e: WorkbookLoadManagerExcel2007): void;
    static ae(a: DataLabel, b: ChartExDataLabelBase, c: Sheet, d: WorkbookLoadManagerExcel2007): void;
    static au(a: DataLabel, b: CT_DataLabelVisibilities, c: Sheet, d: WorkbookLoadManagerExcel2007): void;
    static v(a: Axis, b: CT_Axis, c: CT_ChartSpaceEx, d: Sheet, e: WorkbookLoadManagerExcel2007): void;
    static as(a: Axis, b: CT_CategoryAxisScaling, c: CT_ValueAxisScaling, d: Sheet, e: WorkbookLoadManagerExcel2007): void;
    static c(a: ChartExTitleBase, b: CT_ChartSpaceEx, c: Sheet, d: WorkbookLoadManagerExcel2007): ChartTitle;
    static ax(a: Axis, b: CT_AxisTitle, c: CT_ChartSpaceEx, d: Sheet, e: WorkbookLoadManagerExcel2007): void;
    static ay(a: WorksheetChart, b: CT_ChartTitle, c: CT_ChartSpaceEx, d: Sheet, e: WorkbookLoadManagerExcel2007): void;
    private static h;
    static e(a: CT_ChartSpaceEx, b: List$1<CT_Series>): ChartType;
    static f(a: ST_SeriesLayout): ChartType;
    static i(a: CT_Geography, b: CT_ValueColors, c: CT_ValueColorPositions, d: CT_RegionLabelLayout, e: Sheet): GeographicMapSettings;
    private static aw;
    static l(a: CT_NumFmt_Chart, b: string, c: boolean): {
        ret: boolean;
        p1: string;
        p2: boolean;
    };
    private static az;
    private static m;
    static o(a: List$1<IChart>, b?: boolean): List$1<ISeries>;
    static n(a: CT_PlotArea): List$1<IChart>;
    private static t;
    private static r;
    private static s;
    static at(a: Axis, b: CT_TextBody_DML, c: Workbook, d: boolean): void;
    private static av;
    private static u;
    private static g;
    static p(a: CT_Marker_Chart, b: Sheet, c: ChartFillBase, d: ChartBorder, e: Nullable$1<number>, f: Nullable$1<MarkerStyle>): {
        p2: ChartFillBase;
        p3: ChartBorder;
        p4: Nullable$1<number>;
        p5: Nullable$1<MarkerStyle>;
    };
    private static d;
    private static b;
    private static a;
    private static j;
    private static k;
    static q(a: CT_TextBodyProperties_DML, b: number, c: TextDirection): {
        p1: number;
        p2: TextDirection;
    };
}
/**
 * @hidden
 */
export declare class InvalidXLSXElementException extends BaseError {
    static $t: Type;
    constructor(a: string);
    private _elementName_1;
    _elementName: string;
}
/**
 * @hidden
 */
export declare class DeserializedChartInfo extends Base {
    static $t: Type;
    constructor();
    c: Dictionary$2<string, CT_ChartSpace>;
    d: Dictionary$2<string, CT_ChartSpaceEx>;
    f: Dictionary$2<string, CT_ChartStyle>;
    b: CT_StyleMatrix;
    e: Dictionary$2<string, CT_ColorStyle>;
    g: number;
    static a(a: ChartDeserializationCache): DeserializedChartInfo;
}
/**
 * @hidden
 */
export declare class ConditionalFormattingSerializer extends Base {
    static $t: Type;
    private static o;
    private p;
    private s;
    static a(a: Worksheet): ConditionalFormattingSerializer;
    constructor(a: Worksheet);
    m: Worksheet;
    readonly n: boolean;
    w(a: WorkbookSaveManagerExcel2007, b: ConditionalFormatCollection): void;
    x(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager): void;
    y(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d?: boolean): void;
    private l;
    private i;
    private g;
    private b;
    private j;
    private k;
    private f;
    private d;
    private e;
    private h;
    private c;
    static z(a: XmlPartManagerBase, b: XmlWriteManager, c: Worksheet, d: WorkbookColorInfo, e: string): void;
    private aa;
    static ae(a: XmlPartManagerBase, b: XmlWriteManager, c: string): void;
    private static q;
    private static r;
    private t;
    private static v;
    static u(a: number): string;
    static ab(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: Formula): void;
    static ac(a: XmlPartManagerBase, b: XmlWriteManager, c: number): void;
    static ad(a: XmlPartManagerBase, b: XmlWriteManager, c: string): void;
}
/**
 * @hidden
 */
export declare class ConditionalFormattingWrapperBase extends Base {
    static $t: Type;
    constructor(a: ReadOnlyCollection$1<WorksheetRegion>);
    a: boolean;
    b: boolean;
    c: ReadOnlyCollection$1<WorksheetRegion>;
    static d(a: string, b: boolean): string;
}
/**
 * @hidden
 */
export declare class ConditionalFormattingWrapper extends ConditionalFormattingWrapperBase {
    static $t: Type;
    constructor(a: ReadOnlyCollection$1<WorksheetRegion>);
    e: List$1<ConditionBase>;
}
/**
 * @hidden
 */
export declare class ConditionalFormattingX14Wrapper extends ConditionalFormattingWrapperBase {
    static $t: Type;
    constructor(a: ReadOnlyCollection$1<WorksheetRegion>);
    e: List$1<ConditionX14Wrapper>;
}
/**
 * @hidden
 */
export declare class ConditionX14Wrapper extends Base {
    static $t: Type;
    a: ConditionBase;
    d: string;
    b: boolean;
    static c(): string;
}
/**
 * @hidden
 */
export declare class X14Serializer extends Base {
    static $t: Type;
    static f(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: ConditionX14Wrapper): void;
    static a(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: ColorScaleConditionalFormat, e: string): void;
    static b(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: DataBarConditionalFormat, e: string, f: boolean): void;
    static d(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: IconSetConditionalFormat, e: string): void;
    static e(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: OperatorConditionalFormat, e: string): void;
    static c(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager, d: FormulaConditionalFormat, e: string): void;
}
/**
 * @hidden
 */
export declare class ConditionBaseExtensions extends Base {
    static $t: Type;
    static a(a: ConditionBase): X14Serialization;
    static b(a: ConditionBase): boolean;
}
/**
 * @hidden
 */
export declare class FormatSchemeDeserializer extends Base {
    static $t: Type;
    c: CT_StyleMatrix;
    static cp(a: ObjectModelThemePartManager): void;
    static a0(a: XmlPartManagerBase): void;
    static a1(a: XmlPartManagerBase): void;
    static v(a: XmlPartManagerBase): void;
    static ar(a: XmlPartManagerBase): void;
    static ay(a: XmlPartManagerBase): void;
    static bp(a: XmlPartManagerBase): void;
    static y(a: XmlPartManagerBase): void;
    static a4(a: XmlPartManagerBase): void;
    static ba(a: XmlPartManagerBase): void;
    static bu(a: XmlPartManagerBase): void;
    static by(a: XmlPartManagerBase): void;
    static cg(a: XmlPartManagerBase): void;
    static x(a: XmlPartManagerBase): void;
    static ci(a: XmlPartManagerBase): void;
    static cj(a: XmlPartManagerBase): void;
    static cl(a: XmlPartManagerBase): void;
    static h(a: XmlPartManagerBase): void;
    static i(a: XmlPartManagerBase): void;
    static j(a: XmlPartManagerBase): void;
    static k(a: XmlPartManagerBase): void;
    static l(a: XmlPartManagerBase): void;
    static m(a: XmlPartManagerBase): void;
    static o(a: XmlPartManagerBase): void;
    static w(a: XmlPartManagerBase): void;
    static ac(a: XmlPartManagerBase): void;
    static ae(a: XmlPartManagerBase): void;
    static ag(a: XmlPartManagerBase): void;
    static an(a: XmlPartManagerBase): void;
    static at(a: XmlPartManagerBase): void;
    static aw(a: XmlPartManagerBase): void;
    static a6(a: XmlPartManagerBase): void;
    static be(a: XmlPartManagerBase): void;
    static bq(a: XmlPartManagerBase): void;
    static cn(a: XmlPartManagerBase): void;
    static bf(a: XmlPartManagerBase): void;
    static bz(a: XmlPartManagerBase): void;
    static cc(a: XmlPartManagerBase): void;
    static cd(a: XmlPartManagerBase): void;
    static e(a: XmlPartManagerBase): boolean;
    static f(a: XmlPartManagerBase): boolean;
    static g(a: XmlPartManagerBase): void;
    static n(a: XmlPartManagerBase): void;
    static z(a: XmlPartManagerBase): void;
    static aa(a: XmlPartManagerBase): void;
    static ab(a: XmlPartManagerBase): void;
    static ai(a: XmlPartManagerBase): void;
    static a2(a: XmlPartManagerBase): void;
    static a5(a: XmlPartManagerBase): void;
    static a7(a: XmlPartManagerBase): void;
    static a8(a: XmlPartManagerBase): void;
    static a9(a: XmlPartManagerBase): void;
    static bg(a: XmlPartManagerBase): void;
    static bh(a: XmlPartManagerBase): void;
    static bi(a: XmlPartManagerBase): void;
    static bk(a: XmlPartManagerBase): void;
    static bl(a: XmlPartManagerBase): void;
    static br(a: XmlPartManagerBase): void;
    static bs(a: XmlPartManagerBase): void;
    static b2(a: XmlPartManagerBase): void;
    static b3(a: XmlPartManagerBase): void;
    static b4(a: XmlPartManagerBase): void;
    static b8(a: XmlPartManagerBase): void;
    static b9(a: XmlPartManagerBase): void;
    static ca(a: XmlPartManagerBase): void;
    static ce(a: XmlPartManagerBase): void;
    static aj(a: XmlPartManagerBase): void;
    static af(a: XmlPartManagerBase): void;
    static ah(a: XmlPartManagerBase): void;
    static as(a: XmlPartManagerBase): void;
    static ax(a: XmlPartManagerBase): void;
    static bc(a: XmlPartManagerBase): void;
    static bn(a: XmlPartManagerBase): void;
    static bx(a: XmlPartManagerBase): void;
    static cm(a: XmlPartManagerBase): void;
    static bb(a: XmlPartManagerBase): void;
    static az(a: XmlPartManagerBase): void;
    static u(a: XmlPartManagerBase): void;
    static av(a: XmlPartManagerBase): void;
    static aq(a: XmlPartManagerBase): void;
    static ao(a: XmlPartManagerBase): void;
    static ap(a: XmlPartManagerBase): void;
    static cb(a: XmlPartManagerBase): void;
    static ch(a: XmlPartManagerBase): void;
    static a3(a: XmlPartManagerBase): void;
    static bj(a: XmlPartManagerBase): void;
    static bw(a: XmlPartManagerBase): void;
    static b1(a: XmlPartManagerBase): void;
    static b5(a: XmlPartManagerBase): void;
    static cf(a: XmlPartManagerBase): void;
    static q(a: XmlPartManagerBase): void;
    static ad(a: XmlPartManagerBase): void;
    static bm(a: XmlPartManagerBase): void;
    static p(a: XmlPartManagerBase): void;
    static bv(a: XmlPartManagerBase): void;
    static co(a: XmlPartManagerBase): void;
    static b6(a: XmlPartManagerBase): void;
    static s(a: XmlPartManagerBase): void;
    static t(a: XmlPartManagerBase): void;
    static ak(a: XmlPartManagerBase): void;
    static au(a: XmlPartManagerBase): void;
    static bo(a: XmlPartManagerBase): void;
    static r(a: XmlPartManagerBase): void;
    static al(a: XmlPartManagerBase): void;
    static bd(a: XmlPartManagerBase): void;
    static bt(a: XmlPartManagerBase): void;
    static b0(a: XmlPartManagerBase): void;
    static b7(a: XmlPartManagerBase): void;
    static ck(a: XmlPartManagerBase): void;
    static am(a: XmlPartManagerBase): void;
    static d(a: XmlPartManagerBase): boolean;
    private static b;
    private static a;
}
/**
 * @hidden
 */
export declare class FormatSchemeSerializer extends Base {
    static $t: Type;
    constructor(a: Worksheet);
    a: Worksheet;
    static b(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: CT_StyleMatrix): void;
}
/**
 * @hidden
 */
export declare class LegacyShapeTypeData extends Base {
    static $t: Type;
    f: string;
    e: string;
    d: Nullable$1<number>;
    g: string;
    c: LegacyShapeStrokeData;
    b: LegacyShapePathData;
    a: LegacyShapeLockData;
}
/**
 * @hidden
 */
export declare class LegacyShapeStrokeData extends Base {
    static $t: Type;
    a: Nullable$1<ST_StrokeJoinStyle>;
}
/**
 * @hidden
 */
export declare class LegacyShapePathData extends Base {
    static $t: Type;
    e: Nullable$1<boolean>;
    b: Nullable$1<boolean>;
    f: Nullable$1<boolean>;
    c: Nullable$1<boolean>;
    d: Nullable$1<boolean>;
    a: Nullable$1<ST_ConnectType>;
}
/**
 * @hidden
 */
export declare class LegacyShapeLockData extends Base {
    static $t: Type;
    a: Nullable$1<ST_Ext>;
    b: Nullable$1<boolean>;
    c: Nullable$1<boolean>;
}
/**
 * @hidden
 */
export declare class SparklinesSerializer extends Base {
    static $t: Type;
    private a;
    constructor(a: Worksheet);
    b(a: XmlPartManagerBase, b: WorkbookSaveManagerExcel2007, c: XmlWriteManager): void;
    static c(a: XmlPartManagerBase): void;
    static d(a: XmlPartManagerBase, b: string): void;
}
/**
 * @hidden
 */
export declare class ObjectModelChartExPartManager extends ChartExPartManager {
    static $t: Type;
    private ba;
    private bc;
    private bf;
    static readonly a9: ObjectModelChartExPartManager;
    constructor();
    protected u(a: any): WorkItem;
    protected t(): WorkItem$1<any>;
    a(): WorkItem$1<any>;
    b(a: any): WorkItem;
    readonly bb: CT_ChartStyle;
    readonly bd: CT_ColorStyle;
    readonly a7: ObjectModelExcelDocumentManager;
    private static a8;
    be: CT_ChartSpaceEx;
}
/**
 * @hidden
 */
export declare class ObjectModelChartsheetPartManager extends ChartsheetPartManager {
    static $t: Type;
    static readonly ba: ObjectModelChartsheetPartManager;
    private bc;
    private bb;
    private bd;
    private a7;
    constructor();
    protected t(): WorkItem$1<any>;
    protected u(a: any): WorkItem;
    ai(a: string): boolean;
    readonly a8: ObjectModelExcelDocumentManager;
    private static a9;
    private static bf;
    private be;
    private static bh;
    private bg;
    private static bj;
    private bi;
    private static bk;
    private static bm;
    private bl;
    private static bo;
    private bn;
    private static bq;
    private bp;
    private static bu;
    private bt;
    private static bv;
    private static bs;
    private br;
    private static bx;
    private bw;
    by(a: Chartsheet, b: SheetSerializationCache): void;
    private a6;
    private b1;
    private bz;
    private b0;
    private b2;
    private b3;
    private b4;
    private b5;
    private b6;
}
/**
 * @hidden
 */
export declare class ObjectModelActiveXBinaryPartManager extends ActiveXBinaryPartManager {
    static $t: Type;
    static readonly x: ObjectModelActiveXBinaryPartManager;
    constructor();
    a(): WorkItem$1<any>;
    b(a: any): WorkItem;
    readonly v: ObjectModelExcelDocumentManager;
    private static w;
}
/**
 * @hidden
 */
export declare class ObjectModelActiveXPartManager extends ActiveXPartManager {
    static $t: Type;
    static readonly x: ObjectModelActiveXPartManager;
    constructor();
    a(): WorkItem$1<any>;
    b(a: any): WorkItem;
    readonly v: ObjectModelExcelDocumentManager;
    private static w;
}
/**
 * @hidden
 */
export declare class ObjectModelCalcChainPartManager extends CalcChainPartManager {
    static $t: Type;
    static readonly a6: ObjectModelCalcChainPartManager;
    constructor();
    protected u(a: any): WorkItem;
}
/**
 * @hidden
 */
export declare class ObjectModelChartColorStylePartManager extends ChartColorStylePartManager {
    static $t: Type;
    static readonly a8: ObjectModelChartColorStylePartManager;
    constructor();
    protected get_aj(): boolean;
    a(): WorkItem$1<any>;
    b(a: any): WorkItem;
    protected u(a: any): WorkItem;
    readonly a6: ObjectModelExcelDocumentManager;
    private static a7;
}
/**
 * @hidden
 */
export declare class ObjectModelChartPartManager extends ChartPartManager {
    static $t: Type;
    static readonly ba: ObjectModelChartPartManager;
    constructor();
    protected u(a: any): WorkItem;
    protected t(): WorkItem$1<any>;
    a(): WorkItem$1<any>;
    b(a: any): WorkItem;
    readonly a8: ObjectModelExcelDocumentManager;
    private static a9;
    bb: CT_ChartStyle;
    bc: CT_ColorStyle;
    static a7(a: Stream, b: ObjectModelExcelDocumentManager, c: number[]): {
        ret: Excel2007ChartData;
        p2: number[];
    };
}
/**
 * @hidden
 */
export declare class ObjectModelChartStylePartManager extends ChartStylePartManager {
    static $t: Type;
    static readonly a8: ObjectModelChartStylePartManager;
    constructor();
    readonly a6: ObjectModelExcelDocumentManager;
    private static a7;
    a(): WorkItem$1<any>;
    protected u(a: any): WorkItem;
    b(a: any): WorkItem;
    protected get_aj(): boolean;
}
/**
 * @hidden
 */
export declare class ObjectModelChartUserShapePartManager extends ChartUserShapePartManager {
    static $t: Type;
    static readonly v: ObjectModelChartUserShapePartManager;
    constructor();
    a(): WorkItem$1<any>;
    b(a: any): WorkItem;
}
/**
 * @hidden
 */
export declare class ObjectModelConnectionsPartManager extends ConnectionsPartManager {
    static $t: Type;
    static readonly a8: ObjectModelConnectionsPartManager;
    constructor();
    a(): WorkItem$1<any>;
    b(a: any): WorkItem;
    protected u(a: any): WorkItem;
    readonly a6: ObjectModelExcelDocumentManager;
    private static a7;
}
/**
 * @hidden
 */
export declare class ObjectModelCorePropertiesPartManager extends CorePropertiesPartManager {
    static $t: Type;
    static readonly a8: ObjectModelCorePropertiesPartManager;
    constructor();
    protected u(a: any): WorkItem;
    private static a9;
    private static ba;
    private static bb;
    private static bc;
    private static bd;
    private static be;
    private static bf;
    private static bg;
    private static bh;
    private static bi;
    private static bj;
    readonly a6: ObjectModelExcelDocumentManager;
    private static a7;
}
/**
 * @hidden
 */
export declare class ObjectModelCtrlPropPartManager extends CtrlPropPartManager {
    static $t: Type;
    static readonly x: ObjectModelCtrlPropPartManager;
    constructor();
    a(): WorkItem$1<any>;
    b(a: any): WorkItem;
    readonly v: ObjectModelExcelDocumentManager;
    private static w;
}
/**
 * @hidden
 */
export declare class ObjectModelCustomXmlItemPartManager extends CustomXmlItemPartManager {
    static $t: Type;
    static readonly x: ObjectModelCustomXmlItemPartManager;
    constructor();
    a(): WorkItem$1<any>;
    b(a: any): WorkItem;
    readonly v: ObjectModelExcelDocumentManager;
    private static w;
}
/**
 * @hidden
 */
export declare class ObjectModelCustomXmlItemPropsPartManager extends CustomXmlItemPropsPartManager {
    static $t: Type;
    static readonly x: ObjectModelCustomXmlItemPropsPartManager;
    constructor();
    a(): WorkItem$1<any>;
    b(a: any): WorkItem;
    readonly v: ObjectModelExcelDocumentManager;
    private static w;
}
/**
 * @hidden
 */
export declare class ObjectModelDrawingPartManager extends DrawingPartManager {
    static $t: Type;
    static readonly bf: ObjectModelDrawingPartManager;
    private bt;
    private bh;
    private bq;
    private bp;
    private bg;
    constructor();
    z(a: string): UnknownElementAction;
    protected p(): void;
    protected t(): WorkItem$1<any>;
    aw(a: string, b: string): void;
    protected u(a: any): WorkItem;
    private by;
    private bx;
    private bi;
    private a6;
    private static bw;
    private bo;
    private a7;
    private bj;
    private bk;
    static bm(a: WorkbookColorInfo): CT_SolidFillProperties;
    private bn;
    private static bl;
    private a8;
    private a9;
    private static bz;
    private b0;
    private static b1;
    private static b2;
    private static b3;
    private static b4;
    private b5;
    private static b6;
    private b7;
    private ba;
    private b8;
    private b9;
    private ca;
    private cb;
    private cc;
    private bb;
    private cd;
    private ce;
    private cf;
    private cg;
    private ch;
    private bc;
    private ci;
    private cj;
    readonly bd: ObjectModelExcelDocumentManager;
    private static be;
}
/**
 * @hidden
 */
export declare class ObjectModelDrawingPartManager_ShapeIdentity extends Base {
    static $t: Type;
    readonly c: number;
    readonly a: string;
    constructor(a: WorksheetShape, b: number);
    private static b;
}
/**
 * @hidden
 */
export declare class ObjectModelDrawingPartManager_ShapeLoadContext extends Base {
    static $t: Type;
    b: ICollection$1<WorksheetShape>;
    a: Sheet;
}
/**
 * @hidden
 */
export declare class ObjectModelDrawingPartManager_ShapeLoader extends Base implements IGraphicalObjectContentVisitor$2<ObjectModelDrawingPartManager_ShapeLoadContext, WorksheetShape> {
    static $t: Type;
    readonly d: WorkbookLoadManagerExcel2007;
    private readonly b;
    private readonly c;
    constructor(a: ObjectModelDrawingPartManager);
    _visitAlternateGraphicalObjectContent$i(a: AlternateGraphicalObjectContent, b: ObjectModelDrawingPartManager_ShapeLoadContext): WorksheetShape;
    _visitCT_Connector$i(a: CT_Connector, b: ObjectModelDrawingPartManager_ShapeLoadContext): WorksheetShape;
    _visitCT_GraphicalObjectFrame$i(a: CT_GraphicalObjectFrame, b: ObjectModelDrawingPartManager_ShapeLoadContext): WorksheetShape;
    _visitCT_GroupShape$i(a: CT_GroupShape, b: ObjectModelDrawingPartManager_ShapeLoadContext): WorksheetShape;
    _visitCT_Picture$i(a: CT_Picture, b: ObjectModelDrawingPartManager_ShapeLoadContext): WorksheetShape;
    _visitCT_Shape$i(a: CT_Shape, b: ObjectModelDrawingPartManager_ShapeLoadContext): WorksheetShape;
    private j;
    private k;
    private l;
    private a;
    static g(a: CT_NonVisualBase): boolean;
    static h(a: CT_NonVisualBase): Nullable$1<ST_DrawingElementId>;
    static i(a: CT_NonVisualBase): string;
    private f;
    private e;
}
/**
 * @hidden
 */
export declare class ObjectModelDrawingPartManager_ShapeLoader_RunCreator extends Base implements IEG_TextRunVisitor$2<FormattedTextParagraph, FormattedTextRun> {
    static $t: Type;
    private readonly a;
    private readonly c;
    private readonly b;
    constructor(a: ObjectModelDrawingPartManager, b: WorkbookColorInfo);
    _visitCT_RegularTextRun$i(a: CT_RegularTextRun, b: FormattedTextParagraph): FormattedTextRun;
}
/**
 * @hidden
 */
export declare class ObjectModelDrawingPartManager_ShapeLoader_ShapeFillCreator extends Base implements IEG_FillPropertiesVisitor$2<Workbook, ShapeFill> {
    static $t: Type;
    private readonly a;
    constructor(a: ObjectModelDrawingPartManager_ShapeLoader);
    _visitCT_BlipFillProperties$i(a: CT_BlipFillProperties, b: Workbook): ShapeFill;
    _visitCT_GroupFillProperties$i(a: CT_GroupFillProperties, b: Workbook): ShapeFill;
    _visitCT_NoFillProperties$i(a: CT_NoFillProperties, b: Workbook): ShapeFill;
    _visitCT_SolidFillProperties$i(a: CT_SolidFillProperties, b: Workbook): ShapeFill;
}
/**
 * @hidden
 */
export declare class ObjectModelDrawingPartManager_ShapeLoader_ShapeOutlineCreator extends Base implements IEG_LineFillPropertiesVisitor$2<Workbook, ShapeOutline> {
    static $t: Type;
    static readonly a: ObjectModelDrawingPartManager_ShapeLoader_ShapeOutlineCreator;
    constructor();
    _visitCT_NoFillProperties$i(a: CT_NoFillProperties, b: Workbook): ShapeOutline;
    _visitCT_SolidFillProperties$i(a: CT_SolidFillProperties, b: Workbook): ShapeOutline;
}
/**
 * @hidden
 */
export declare class ObjectModelDrawingPartManager_ShapeLoader_ShapeTypeCreator extends Base implements IEG_GeometryVisitor$2<boolean, WorksheetShape> {
    static $t: Type;
    static readonly a: ObjectModelDrawingPartManager_ShapeLoader_ShapeTypeCreator;
    constructor();
    _visitCT_PresetGeometry2D$i(a: CT_PresetGeometry2D, b: boolean): WorksheetShape;
    _visitCT_CustomGeometry2D$i(a: CT_CustomGeometry2D, b: boolean): WorksheetShape;
}
/**
 * @hidden
 */
export declare class IEG_ShapeFillVisitor extends Base implements IShapeFillVisitor$2<ObjectModelExcelDocumentManager, IEG_FillProperties> {
    static $t: Type;
    static readonly a: IEG_ShapeFillVisitor;
    _visitImage$i(a: ShapeFillImage, b: ObjectModelExcelDocumentManager): IEG_FillProperties;
    _visitNoFill$i(a: ShapeFillNoFill, b: ObjectModelExcelDocumentManager): IEG_FillProperties;
    _visitSolid$i(a: ShapeFillSolid, b: ObjectModelExcelDocumentManager): IEG_FillProperties;
}
/**
 * @hidden
 */
export declare class CT_ShapeOutlineVisitor extends Base implements IShapeOutlineVisitor$2<ObjectModelExcelDocumentManager, CT_LineProperties> {
    static $t: Type;
    static readonly a: CT_ShapeOutlineVisitor;
    private static b;
    visitNoOutline(outline: ShapeOutlineNoOutline, argument: ObjectModelExcelDocumentManager): CT_LineProperties;
    _visitNoOutline$i(a: ShapeOutlineNoOutline, b: ObjectModelExcelDocumentManager): CT_LineProperties;
    visitSolid(outline: ShapeOutlineSolid, argument: ObjectModelExcelDocumentManager): CT_LineProperties;
    _visitSolid$i(a: ShapeOutlineSolid, b: ObjectModelExcelDocumentManager): CT_LineProperties;
}
/**
 * @hidden
 */
export declare class DefRprFontResolver extends Base implements IWorkbookFontDefaultsResolver {
    static $t: Type;
    private a;
    private d;
    private b;
    constructor(a: CT_TextCharacterProperties, b: Workbook);
    resolveDefaults(a: WorkbookFontData): void;
    private static c;
}
/**
 * @hidden
 */
export declare class ObjectModelExtendedPropertiesPartManager extends ExtendedPropertiesPartManager {
    static $t: Type;
    static readonly a8: ObjectModelExtendedPropertiesPartManager;
    constructor();
    protected u(a: any): WorkItem;
    private static bh;
    private static bg;
    private static bi;
    private static bj;
    private static bk;
    private static bl;
    private static bm;
    private static bn;
    private static bo;
    private static bp;
    private static bq;
    private static br;
    private static bs;
    readonly a6: ObjectModelExcelDocumentManager;
    private static a7;
}
/**
 * @hidden
 */
export declare class ObjectModelExternalLinkPartManager extends ExternalLinkPartManager {
    static $t: Type;
    static readonly a8: ObjectModelExternalLinkPartManager;
    private a9;
    constructor();
    protected u(a: any): WorkItem;
    private static ba;
    private static bb;
    private static bc;
    private static bd;
    private static be;
    private static bf;
    private static bj;
    private static bg;
    private static bh;
    private static bi;
    private static bk;
    private static bl;
    private static bm;
    private static bn;
    private static bo;
    private bp;
    private bq;
    private br;
    readonly a6: ObjectModelExcelDocumentManager;
    private static a7;
}
/**
 * @hidden
 */
export declare abstract class ObjectModelWorkbookPartManagerBase extends WorkbookPartManagerBase {
    static $t: Type;
    private bg;
    constructor();
    j(): Dictionary$2<PartManagerBase, number>;
    protected t(): WorkItem$1<any>;
    protected u(a: any): WorkItem;
    i(a: PartManagerBase): boolean;
    ai(a: string): boolean;
    private static bh;
    private static bi;
    private static bj;
    private static bk;
    private static bl;
    private static bm;
    private static bn;
    private static bo;
    private static bp;
    private static bq;
    private static bs;
    private static br;
    private static bt;
    private static bu;
    private static bv;
    private static bw;
    private static bx;
    private static by;
    private static bz;
    private static b0;
    private b1;
    private a9;
    private ba;
    private bb;
    private b2;
    private b3;
    private b4;
    private b5;
    private bc;
    private bd;
    private b6;
    readonly be: ObjectModelExcelDocumentManager;
    private static bf;
}
/**
 * @hidden
 */
export declare class ObjectModelMacroEnabledTemplatePartManager extends ObjectModelWorkbookPartManagerBase {
    static $t: Type;
    static readonly b7: ObjectModelMacroEnabledTemplatePartManager;
    constructor();
    protected get_m(): string;
    readonly m: string;
}
/**
 * @hidden
 */
export declare class ObjectModelMacroEnabledWorkbookPartManager extends ObjectModelWorkbookPartManagerBase {
    static $t: Type;
    static readonly b7: ObjectModelMacroEnabledWorkbookPartManager;
    constructor();
    protected get_m(): string;
    readonly m: string;
}
/**
 * @hidden
 */
export declare class ObjectModelPivotCacheDefinitionPartManager extends PivotCacheDefinitionPartManager {
    static $t: Type;
    static readonly a8: ObjectModelPivotCacheDefinitionPartManager;
    constructor();
    a(): WorkItem$1<any>;
    b(a: any): WorkItem;
    protected u(a: any): WorkItem;
    readonly a6: ObjectModelExcelDocumentManager;
    private static a7;
}
/**
 * @hidden
 */
export declare class ObjectModelPivotCacheRecordsPartManager extends PivotCacheRecordsPartManager {
    static $t: Type;
    static readonly a8: ObjectModelPivotCacheRecordsPartManager;
    constructor();
    a(): WorkItem$1<any>;
    b(a: any): WorkItem;
    protected u(a: any): WorkItem;
    readonly a6: ObjectModelExcelDocumentManager;
    private static a7;
}
/**
 * @hidden
 */
export declare class ObjectModelPivotTablePartManager extends PivotTablePartManager {
    static $t: Type;
    static readonly a9: ObjectModelPivotTablePartManager;
    constructor();
    z(a: string): UnknownElementAction;
    av(a: UnknownStructure): void;
    protected u(a: any): WorkItem;
    y(a: UnknownElementCache, b: Stack$1<UnknownElementCache>): OverwriteRoundTripDataResult;
    private a6;
    private ba;
    private bb;
    readonly a7: ObjectModelExcelDocumentManager;
    private static a8;
}
/**
 * @hidden
 */
export declare class ObjectModelPrinterSettingsPartManager extends PrinterSettingsPartManager {
    static $t: Type;
    static readonly a7: ObjectModelPrinterSettingsPartManager;
    constructor();
    protected get_m(): string;
    readonly m: string;
}
/**
 * @hidden
 */
export declare class ObjectModelSharedStringsPartManager extends SharedStringsPartManager {
    static $t: Type;
    static readonly a8: ObjectModelSharedStringsPartManager;
    constructor();
    protected u(a: any): WorkItem;
    private static a9;
    private static ba;
    private static bb;
    private bc;
    readonly a6: ObjectModelExcelDocumentManager;
    private static a7;
}
/**
 * @hidden
 */
export declare class ObjectModelSlicerCachePartManager extends SlicerCachePartManager {
    static $t: Type;
    static readonly a7: ObjectModelSlicerCachePartManager;
    constructor();
    a(): WorkItem$1<any>;
    b(a: any): WorkItem;
    protected u(a: any): WorkItem;
    readonly a5: ObjectModelExcelDocumentManager;
    private static a6;
}
/**
 * @hidden
 */
export declare class ObjectModelSlicerPartManager extends SlicerPartManager {
    static $t: Type;
    static readonly a7: ObjectModelSlicerPartManager;
    constructor();
    a(): WorkItem$1<any>;
    b(a: any): WorkItem;
    protected u(a: any): WorkItem;
    readonly a5: ObjectModelExcelDocumentManager;
    private static a6;
}
/**
 * @hidden
 */
export declare class ObjectModelTemplatePartManager extends ObjectModelWorkbookPartManagerBase {
    static $t: Type;
    static readonly b7: ObjectModelTemplatePartManager;
    constructor();
    protected get_m(): string;
    readonly m: string;
}
/**
 * @hidden
 */
export declare class ObjectModelThemeManagerPartManager extends ThemeManagerPartManager {
    static $t: Type;
    static readonly a6: ObjectModelThemeManagerPartManager;
    constructor();
    av(a: UnknownStructure): void;
    protected u(a: any): WorkItem;
    private static a7;
}
/**
 * @hidden
 */
export declare class ObjectModelThemePartManager extends ThemePartManager {
    static $t: Type;
    static readonly bb: ObjectModelThemePartManager;
    static readonly bc: ObjectModelThemePartManager;
    constructor(a: boolean);
    protected a0(): XmlReader;
    private static be;
    private static bd;
    b(a: any): WorkItem;
    private b1;
    protected u(a: any): WorkItem;
    private static bf;
    private static bg;
    private static bh;
    private static bi;
    private static bj;
    private static bk;
    private static bl;
    private static bm;
    private static bn;
    private static bo;
    private static bp;
    private static bq;
    private static br;
    private static bs;
    private static bt;
    private static bu;
    private static bv;
    private static bw;
    private static bx;
    private static by;
    private static bz;
    private static b0;
    readonly a9: ExcelWorkbookDocumentManager;
    private static ba;
}
/**
 * @hidden
 */
export declare class ObjectModelVbaProjectPartManager extends VbaProjectPartManager {
    static $t: Type;
    static readonly x: ObjectModelVbaProjectPartManager;
    constructor();
    a(): WorkItem$1<any>;
    b(a: any): WorkItem;
    readonly v: ObjectModelExcelDocumentManager;
    private static w;
}
/**
 * @hidden
 */
export declare class ObjectModelVmlDrawingPartManager extends VmlDrawingPartManager {
    static $t: Type;
    static readonly ba: ObjectModelVmlDrawingPartManager;
    constructor();
    z(a: string): UnknownElementAction;
    a(): WorkItem$1<any>;
    av(a: UnknownStructure): void;
    protected u(a: any): WorkItem;
    protected get_aj(): boolean;
    private static bb;
    private static bc;
    private static bd;
    private static be;
    private static bf;
    private static bg;
    private static bh;
    private static bi;
    private static bj;
    private static bk;
    private static bl;
    private static bm;
    private static bn;
    private static bo;
    private static bp;
    private static bq;
    private static br;
    private static bs;
    private static bt;
    private static bu;
    private static bv;
    private static bw;
    private static bx;
    private static by;
    private static bz;
    private static b0;
    private static b1;
    private static b2;
    private static b3;
    private static b4;
    private static b5;
    private static b6;
    private static b7;
    private static b8;
    private static b9;
    private static ca;
    private static cb;
    private static cc;
    private static cd;
    private static ce;
    private static cf;
    private static cg;
    private static ch;
    private ci;
    private cj;
    private ck;
    private cl;
    private cm;
    private cn;
    private co;
    private cp;
    private cq;
    private cr;
    private cs;
    private ct;
    private cu;
    private cv;
    private cw;
    private cx;
    private cy;
    private cz;
    private c0;
    private c1;
    private c3;
    private c4;
    private c2;
    private c5;
    private c6;
    private c7;
    private c8;
    private c9;
    private da;
    private db;
    private dc;
    private dd;
    private de;
    private df;
    private dg;
    private dh;
    private di;
    private dj;
    private dk;
    private dl;
    private dm;
    private dn;
    readonly a8: ObjectModelExcelDocumentManager;
    private static a9;
}
/**
 * @hidden
 */
export declare class ObjectModelVmlDrawingPartManager_UpdateLegacyShapeData extends WorksheetShapeVisitor$2<LegacyShapeData, boolean> {
    static $t: Type;
    static readonly d: ObjectModelVmlDrawingPartManager_UpdateLegacyShapeData;
    constructor();
    visitWorksheetCellComment(value: WorksheetCellComment, shapeData: LegacyShapeData): boolean;
    _visitWorksheetCellComment$i(a: WorksheetCellComment, b: LegacyShapeData): boolean;
    b(a: WorksheetShape, b: LegacyShapeData): boolean;
}
/**
 * @hidden
 */
export declare class ObjectModelWorkbookPartManager extends ObjectModelWorkbookPartManagerBase {
    static $t: Type;
    static readonly b7: ObjectModelWorkbookPartManager;
    constructor();
    protected get_m(): string;
    readonly m: string;
}
/**
 * @hidden
 */
export declare class SheetRelationships extends Base {
    static $t: Type;
    a: string;
    c: string;
    b: string;
}
