import { ValueType, Type, Base, Stream, IEnumerator, IDisposable, IEnumerable, IEnumerable$1, SeekOrigin, Nullable$1 } from "../../igniteui-angular-core/ES5/type";
import { Uri } from "../../igniteui-angular-core/ES5/Uri";
import { TextReader } from "../../igniteui-angular-core/ES5/TextReader";
import { IPackagePart, IPackage, WorkItem$1, FileMode, FileAccess, IPackageRelationship, RelationshipTargetMode, WorkItem, IInvalidPackageRelationshipTarget, IPackagePartEx, IPackageFactory, ST_Angle, CT_Transform2D, CT_GroupTransform2D, ST_PositiveCoordinate, ST_Coordinate, ST_ShapeType, ST_UniversalMeasure, CT_TextBodyPropertiesBase, IShallowCloneable, RoundTripControlData, ContextStack, ST_UniversalMeasure_UnitType, ImageFormat, CT_PositiveSize2D, CT_Point2D, ST_CellType, ST_IconSetType, ST_FilterOperator, ST_DateTimeGrouping, ST_DynamicFilterType, ST_SortBy, ST_TotalsRowFunction, ST_TableStyleType } from "./documents.core";
import { Encoding } from "../../igniteui-angular-core/ES5/Encoding";
import { StringBuilder } from "../../igniteui-angular-core/ES5/StringBuilder";
import { Decoder } from "../../igniteui-angular-core/ES5/Decoder";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { Dictionary$2 } from "../../igniteui-angular-core/ES5/Dictionary$2";
import { XmlNameTable } from "../../igniteui-angular-core/ES5/XmlNameTable";
import { XmlNodeType } from "../../igniteui-angular-core/ES5/xml";
import { XmlSpace } from "../../igniteui-angular-core/ES5/XmlSpace";
import { XmlReader } from "../../igniteui-angular-core/ES5/XmlReader";
import { TextWriter } from "../../igniteui-angular-core/ES5/TextWriter";
import { WhitespaceHandling } from "../../igniteui-angular-core/ES5/WhitespaceHandling";
import { ReadState } from "../../igniteui-angular-core/ES5/ReadState";
import { XmlWriter } from "../../igniteui-angular-core/ES5/XmlWriter";
import { IDictionary$2 } from "../../igniteui-angular-core/ES5/IDictionary$2";
import { Regex } from "../../igniteui-angular-core/ES5/Regex";
import { Tuple$2 } from "../../igniteui-angular-core/ES5/Tuple$2";
import { Stack$1 } from "../../igniteui-angular-core/ES5/Stack$1";
import { HashSet$1 } from "../../igniteui-angular-core/ES5/HashSet$1";
import { Color } from "../../igniteui-angular-core/ES5/Color";
import { Guid } from "../../igniteui-angular-core/ES5/Guid";
/**
 * @hidden
 */
export declare const enum ST_DataBarAxisPosition {
    automatic = 0,
    middle = 1,
    none = 2
}
/**
 * @hidden
 */
export declare let ST_DataBarAxisPosition_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_DataBarDirection {
    context = 0,
    leftToRight = 1,
    rightToLeft = 2
}
/**
 * @hidden
 */
export declare let ST_DataBarDirection_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_Visibility {
    visible = 0,
    hidden = 1,
    veryHidden = 2
}
/**
 * @hidden
 */
export declare let ST_Visibility_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_VerticalAlignment {
    top = 0,
    center = 1,
    bottom = 2,
    justify = 3,
    distributed = 4
}
/**
 * @hidden
 */
export declare let ST_VerticalAlignment_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_UpdateLinks {
    userSet = 0,
    never = 1,
    always = 2
}
/**
 * @hidden
 */
export declare let ST_UpdateLinks_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_UnderlineValues {
    _single = 0,
    _double = 1,
    singleAccounting = 2,
    doubleAccounting = 3,
    none = 4
}
/**
 * @hidden
 */
export declare let ST_UnderlineValues_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_TimePeriod {
    today = 0,
    yesterday = 1,
    tomorrow = 2,
    last7Days = 3,
    thisMonth = 4,
    lastMonth = 5,
    nextMonth = 6,
    thisWeek = 7,
    lastWeek = 8,
    nextWeek = 9
}
/**
 * @hidden
 */
export declare let ST_TimePeriod_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_TableType {
    worksheet = 0,
    xml = 1,
    queryTable = 2
}
/**
 * @hidden
 */
export declare let ST_TableType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_SortMethod {
    none = 0,
    pinYin = 1,
    stroke = 2
}
/**
 * @hidden
 */
export declare let ST_SortMethod_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_SheetViewType {
    normal = 0,
    pageBreakPreview = 1,
    pageLayout = 2
}
/**
 * @hidden
 */
export declare let ST_SheetViewType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_SheetState {
    visible = 0,
    hidden = 1,
    veryHidden = 2
}
/**
 * @hidden
 */
export declare let ST_SheetState_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_RefMode {
    A1 = 0,
    R1C1 = 1
}
/**
 * @hidden
 */
export declare let ST_RefMode_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_PrintError {
    displayed = 0,
    blank = 1,
    dash = 2,
    NA = 3
}
/**
 * @hidden
 */
export declare let ST_PrintError_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_PatternType {
    none = 0,
    solid = 1,
    mediumGray = 2,
    darkGray = 3,
    lightGray = 4,
    darkHorizontal = 5,
    darkVertical = 6,
    darkDown = 7,
    darkUp = 8,
    darkGrid = 9,
    darkTrellis = 10,
    lightHorizontal = 11,
    lightVertical = 12,
    lightDown = 13,
    lightUp = 14,
    lightGrid = 15,
    lightTrellis = 16,
    gray125 = 17,
    gray0625 = 18
}
/**
 * @hidden
 */
export declare let ST_PatternType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_PaneState {
    split = 0,
    frozen = 1,
    frozenSplit = 2
}
/**
 * @hidden
 */
export declare let ST_PaneState_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_Pane {
    bottomRight = 0,
    topRight = 1,
    bottomLeft = 2,
    topLeft = 3
}
/**
 * @hidden
 */
export declare let ST_Pane_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_PageOrder {
    downThenOver = 0,
    overThenDown = 1
}
/**
 * @hidden
 */
export declare let ST_PageOrder_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_Orientation {
    _default = 0,
    portrait = 1,
    landscape = 2,
    minMax = 3,
    maxMin = 4
}
/**
 * @hidden
 */
export declare let ST_Orientation_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_ObjectType {
    Button = 0,
    Checkbox = 1,
    Dialog = 2,
    Drop = 3,
    Edit = 4,
    GBox = 5,
    Label = 6,
    LineA = 7,
    List = 8,
    Movie = 9,
    Note = 10,
    Pict = 11,
    Radio = 12,
    RectA = 13,
    Scroll = 14,
    Spin = 15,
    Shape = 16,
    Group = 17,
    Rect = 18
}
/**
 * @hidden
 */
export declare let ST_ObjectType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_Objects {
    all = 0,
    placeholders = 1,
    none = 2
}
/**
 * @hidden
 */
export declare let ST_Objects_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_HorizontalAlignment {
    general = 0,
    left = 1,
    center = 2,
    right = 3,
    fill = 4,
    justify = 5,
    centerContinuous = 6,
    distributed = 7
}
/**
 * @hidden
 */
export declare let ST_HorizontalAlignment_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_GradientType {
    linear = 0,
    path = 1
}
/**
 * @hidden
 */
export declare let ST_GradientType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_FontScheme {
    none = 0,
    major = 1,
    minor = 2
}
/**
 * @hidden
 */
export declare let ST_FontScheme_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_EditAs {
    twoCell = 0,
    oneCell = 1,
    absolute = 2
}
/**
 * @hidden
 */
export declare let ST_EditAs_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_DataValidationType {
    none = 0,
    whole = 1,
    _decimal = 2,
    list = 3,
    date = 4,
    time = 5,
    textLength = 6,
    custom = 7
}
/**
 * @hidden
 */
export declare let ST_DataValidationType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_DataValidationOperator {
    between = 0,
    notBetween = 1,
    equal = 2,
    notEqual = 3,
    lessThan = 4,
    lessThanOrEqual = 5,
    greaterThan = 6,
    greaterThanOrEqual = 7
}
/**
 * @hidden
 */
export declare let ST_DataValidationOperator_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_DataValidationImeMode {
    noControl = 0,
    off = 1,
    on = 2,
    disabled = 3,
    hiragana = 4,
    fullKatakana = 5,
    halfKatakana = 6,
    fullAlpha = 7,
    halfAlpha = 8,
    fullHangul = 9,
    halfHangul = 10
}
/**
 * @hidden
 */
export declare let ST_DataValidationImeMode_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_DataValidationErrorStyle {
    stop = 0,
    warning = 1,
    information = 2
}
/**
 * @hidden
 */
export declare let ST_DataValidationErrorStyle_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_ConditionalFormattingOperator {
    lessThan = 0,
    lessThanOrEqual = 1,
    equal = 2,
    notEqual = 3,
    greaterThanOrEqual = 4,
    greaterThan = 5,
    between = 6,
    notBetween = 7,
    containsText = 8,
    notContains = 9,
    beginsWith = 10,
    endsWith = 11
}
/**
 * @hidden
 */
export declare let ST_ConditionalFormattingOperator_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_Comments {
    commNone = 0,
    commIndicator = 1,
    commIndAndComment = 2
}
/**
 * @hidden
 */
export declare let ST_Comments_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_CfvoType {
    num = 0,
    percent = 1,
    max = 2,
    min = 3,
    formula = 4,
    percentile = 5,
    autoMin = 6,
    autoMax = 7
}
/**
 * @hidden
 */
export declare let ST_CfvoType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_CfType {
    expression = 0,
    cellIs = 1,
    colorScale = 2,
    dataBar = 3,
    iconSet = 4,
    top10 = 5,
    uniqueValues = 6,
    duplicateValues = 7,
    containsText = 8,
    notContainsText = 9,
    beginsWith = 10,
    endsWith = 11,
    containsBlanks = 12,
    notContainsBlanks = 13,
    containsErrors = 14,
    notContainsErrors = 15,
    timePeriod = 16,
    aboveAverage = 17
}
/**
 * @hidden
 */
export declare let ST_CfType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_CellFormulaType {
    normal = 0,
    array = 1,
    dataTable = 2,
    shared = 3
}
/**
 * @hidden
 */
export declare let ST_CellFormulaType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_CellComments {
    none = 0,
    asDisplayed = 1,
    atEnd = 2
}
/**
 * @hidden
 */
export declare let ST_CellComments_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_CalendarType {
    gregorian = 0,
    gregorianArabic = 1,
    gregorianMeFrench = 2,
    gregorianUs = 3,
    gregorianXlitEnglish = 4,
    gregorianXlitFrench = 5,
    hebrew = 6,
    hijri = 7,
    japan = 8,
    korea = 9,
    none = 10,
    saka = 11,
    taiwan = 12,
    thai = 13
}
/**
 * @hidden
 */
export declare let ST_CalendarType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_CalcMode {
    manual = 0,
    auto = 1,
    autoNoTable = 2
}
/**
 * @hidden
 */
export declare let ST_CalcMode_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_BorderStyle {
    none = 0,
    thin = 1,
    medium = 2,
    dashed = 3,
    dotted = 4,
    thick = 5,
    _double = 6,
    hair = 7,
    mediumDashed = 8,
    dashDot = 9,
    mediumDashDot = 10,
    dashDotDot = 11,
    mediumDashDotDot = 12,
    slantDashDot = 13
}
/**
 * @hidden
 */
export declare let ST_BorderStyle_$type: Type;
/**
 * @hidden
 */
export declare const enum XmlNamespaceDefinitionBase_PreserveSpaceMode {
    None = 0,
    HonorLeadingWhitespace = 2,
    HonorTrailingWhitespace = 4,
    HonorBoth = 6
}
/**
 * @hidden
 */
export declare let XmlNamespaceDefinitionBase_PreserveSpaceMode_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_VerticalAlignRun {
    baseline = 0,
    superscript = 1,
    subscript = 2
}
/**
 * @hidden
 */
export declare let ST_VerticalAlignRun_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_VectorBaseType {
    variant = 0,
    i1 = 1,
    i2 = 2,
    i4 = 3,
    i8 = 4,
    ui1 = 5,
    ui2 = 6,
    ui4 = 7,
    ui8 = 8,
    r4 = 9,
    r8 = 10,
    lpstr = 11,
    lpwstr = 12,
    bstr = 13,
    date = 14,
    filetime = 15,
    _bool = 16,
    cy = 17,
    error = 18,
    clsid = 19
}
/**
 * @hidden
 */
export declare let ST_VectorBaseType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_TileFlipMode {
    none = 0,
    x = 1,
    y = 2,
    xy = 3
}
/**
 * @hidden
 */
export declare let ST_TileFlipMode_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_TextWrappingType {
    none = 0,
    square = 1
}
/**
 * @hidden
 */
export declare let ST_TextWrappingType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_TextVertOverflowType {
    overflow = 0,
    ellipsis = 1,
    clip = 2
}
/**
 * @hidden
 */
export declare let ST_TextVertOverflowType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_TextVerticalType {
    horz = 0,
    vert = 1,
    vert270 = 2,
    wordArtVert = 3,
    eaVert = 4,
    mongolianVert = 5,
    wordArtVertRtl = 6
}
/**
 * @hidden
 */
export declare let ST_TextVerticalType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_TextUnderlineType {
    none = 0,
    words = 1,
    sng = 2,
    dbl = 3,
    heavy = 4,
    dotted = 5,
    dottedHeavy = 6,
    dash = 7,
    dashHeavy = 8,
    dashLong = 9,
    dashLongHeavy = 10,
    dotDash = 11,
    dotDashHeavy = 12,
    dotDotDash = 13,
    dotDotDashHeavy = 14,
    wavy = 15,
    wavyHeavy = 16,
    wavyDbl = 17
}
/**
 * @hidden
 */
export declare let ST_TextUnderlineType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_TextStrikeType {
    noStrike = 0,
    sngStrike = 1,
    dblStrike = 2
}
/**
 * @hidden
 */
export declare let ST_TextStrikeType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_TextHorzOverflowType {
    overflow = 0,
    clip = 1
}
/**
 * @hidden
 */
export declare let ST_TextHorzOverflowType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_TextFontAlignType {
    auto = 0,
    t = 1,
    ctr = 2,
    _base = 3,
    b = 4
}
/**
 * @hidden
 */
export declare let ST_TextFontAlignType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_TextCapsType {
    none = 0,
    small = 1,
    all = 2
}
/**
 * @hidden
 */
export declare let ST_TextCapsType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_TextAnchoringType {
    t = 0,
    ctr = 1,
    b = 2,
    just = 3,
    dist = 4
}
/**
 * @hidden
 */
export declare let ST_TextAnchoringType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_TextAlignType {
    l = 0,
    ctr = 1,
    r = 2,
    just = 3,
    justLow = 4,
    dist = 5,
    thaiDist = 6
}
/**
 * @hidden
 */
export declare let ST_TextAlignType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_SystemColorVal {
    activeBorder = 0,
    activeCaption = 1,
    captionText = 2,
    appWorkspace = 3,
    btnFace = 4,
    _3dDkShadow = 5,
    btnShadow = 6,
    _3dLight = 7,
    btnHighlight = 8,
    btnText = 9,
    background = 10,
    gradientActiveCaption = 11,
    gradientInactiveCaption = 12,
    grayText = 13,
    highlight = 14,
    highlightText = 15,
    hotLight = 16,
    inactiveBorder = 17,
    inactiveCaption = 18,
    inactiveCaptionText = 19,
    infoText = 20,
    infoBk = 21,
    menu = 22,
    menuBar = 23,
    menuHighlight = 24,
    menuText = 25,
    scrollBar = 26,
    window = 27,
    windowFrame = 28,
    windowText = 29
}
/**
 * @hidden
 */
export declare let ST_SystemColorVal_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_StrokeLineStyle {
    single = 0,
    thinThin = 1,
    thinThick = 2,
    thickThin = 3,
    thickBetweenThin = 4
}
/**
 * @hidden
 */
export declare let ST_StrokeLineStyle_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_StrokeJoinStyle {
    round = 0,
    bevel = 1,
    miter = 2
}
/**
 * @hidden
 */
export declare let ST_StrokeJoinStyle_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_StrokeEndCap {
    flat = 0,
    square = 1,
    round = 2
}
/**
 * @hidden
 */
export declare let ST_StrokeEndCap_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_StrokeArrowWidth {
    narrow = 0,
    medium = 1,
    wide = 2
}
/**
 * @hidden
 */
export declare let ST_StrokeArrowWidth_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_StrokeArrowType {
    none = 0,
    block = 1,
    classic = 2,
    oval = 3,
    diamond = 4,
    open = 5
}
/**
 * @hidden
 */
export declare let ST_StrokeArrowType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_StrokeArrowLength {
    _short = 0,
    medium = 1,
    _long = 2
}
/**
 * @hidden
 */
export declare let ST_StrokeArrowLength_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_ShadowType {
    single = 0,
    _double = 1,
    emboss = 2,
    perspective = 3
}
/**
 * @hidden
 */
export declare let ST_ShadowType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_SchemeColorVal {
    bg1 = 0,
    tx1 = 1,
    bg2 = 2,
    tx2 = 3,
    accent1 = 4,
    accent2 = 5,
    accent3 = 6,
    accent4 = 7,
    accent5 = 8,
    accent6 = 9,
    hlink = 10,
    folHlink = 11,
    phClr = 12,
    dk1 = 13,
    lt1 = 14,
    dk2 = 15,
    lt2 = 16
}
/**
 * @hidden
 */
export declare let ST_SchemeColorVal_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_RectAlignment {
    tl = 0,
    t = 1,
    tr = 2,
    l = 3,
    ctr = 4,
    r = 5,
    bl = 6,
    b = 7,
    br = 8
}
/**
 * @hidden
 */
export declare let ST_RectAlignment_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_PresetPatternVal {
    pct5 = 0,
    pct10 = 1,
    pct20 = 2,
    pct25 = 3,
    pct30 = 4,
    pct40 = 5,
    pct50 = 6,
    pct60 = 7,
    pct70 = 8,
    pct75 = 9,
    pct80 = 10,
    pct90 = 11,
    horz = 12,
    vert = 13,
    ltHorz = 14,
    ltVert = 15,
    dkHorz = 16,
    dkVert = 17,
    narHorz = 18,
    narVert = 19,
    dashHorz = 20,
    dashVert = 21,
    cross = 22,
    dnDiag = 23,
    upDiag = 24,
    ltDnDiag = 25,
    ltUpDiag = 26,
    dkDnDiag = 27,
    dkUpDiag = 28,
    wdDnDiag = 29,
    wdUpDiag = 30,
    dashDnDiag = 31,
    dashUpDiag = 32,
    diagCross = 33,
    smCheck = 34,
    lgCheck = 35,
    smGrid = 36,
    lgGrid = 37,
    dotGrid = 38,
    smConfetti = 39,
    lgConfetti = 40,
    horzBrick = 41,
    diagBrick = 42,
    solidDmnd = 43,
    openDmnd = 44,
    dotDmnd = 45,
    plaid = 46,
    sphere = 47,
    weave = 48,
    divot = 49,
    shingle = 50,
    wave = 51,
    trellis = 52,
    zigZag = 53
}
/**
 * @hidden
 */
export declare let ST_PresetPatternVal_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_PresetLineDashVal {
    solid = 0,
    dot = 1,
    dash = 2,
    lgDash = 3,
    dashDot = 4,
    lgDashDot = 5,
    lgDashDotDot = 6,
    sysDash = 7,
    sysDot = 8,
    sysDashDot = 9,
    sysDashDotDot = 10
}
/**
 * @hidden
 */
export declare let ST_PresetLineDashVal_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_PresetColorVal {
    aliceBlue = 0,
    antiqueWhite = 1,
    aqua = 2,
    aquamarine = 3,
    azure = 4,
    beige = 5,
    bisque = 6,
    black = 7,
    blanchedAlmond = 8,
    blue = 9,
    blueViolet = 10,
    brown = 11,
    burlyWood = 12,
    cadetBlue = 13,
    chartreuse = 14,
    chocolate = 15,
    coral = 16,
    cornflowerBlue = 17,
    cornsilk = 18,
    crimson = 19,
    cyan = 20,
    dkBlue = 21,
    dkCyan = 22,
    dkGoldenrod = 23,
    dkGray = 24,
    dkGreen = 25,
    dkKhaki = 26,
    dkMagenta = 27,
    dkOliveGreen = 28,
    dkOrange = 29,
    dkOrchid = 30,
    dkRed = 31,
    dkSalmon = 32,
    dkSeaGreen = 33,
    dkSlateBlue = 34,
    dkSlateGray = 35,
    dkTurquoise = 36,
    dkViolet = 37,
    deepPink = 38,
    deepSkyBlue = 39,
    dimGray = 40,
    dodgerBlue = 41,
    firebrick = 42,
    floralWhite = 43,
    forestGreen = 44,
    fuchsia = 45,
    gainsboro = 46,
    ghostWhite = 47,
    gold = 48,
    goldenrod = 49,
    gray = 50,
    green = 51,
    greenYellow = 52,
    honeydew = 53,
    hotPink = 54,
    indianRed = 55,
    indigo = 56,
    ivory = 57,
    khaki = 58,
    lavender = 59,
    lavenderBlush = 60,
    lawnGreen = 61,
    lemonChiffon = 62,
    ltBlue = 63,
    ltCoral = 64,
    ltCyan = 65,
    ltGoldenrodYellow = 66,
    ltGray = 67,
    ltGreen = 68,
    ltPink = 69,
    ltSalmon = 70,
    ltSeaGreen = 71,
    ltSkyBlue = 72,
    ltSlateGray = 73,
    ltSteelBlue = 74,
    ltYellow = 75,
    lime = 76,
    limeGreen = 77,
    linen = 78,
    magenta = 79,
    maroon = 80,
    medAquamarine = 81,
    medBlue = 82,
    medOrchid = 83,
    medPurple = 84,
    medSeaGreen = 85,
    medSlateBlue = 86,
    medSpringGreen = 87,
    medTurquoise = 88,
    medVioletRed = 89,
    midnightBlue = 90,
    mintCream = 91,
    mistyRose = 92,
    moccasin = 93,
    navajoWhite = 94,
    navy = 95,
    oldLace = 96,
    olive = 97,
    oliveDrab = 98,
    orange = 99,
    orangeRed = 100,
    orchid = 101,
    paleGoldenrod = 102,
    paleGreen = 103,
    paleTurquoise = 104,
    paleVioletRed = 105,
    papayaWhip = 106,
    peachPuff = 107,
    peru = 108,
    pink = 109,
    plum = 110,
    powderBlue = 111,
    purple = 112,
    red = 113,
    rosyBrown = 114,
    royalBlue = 115,
    saddleBrown = 116,
    salmon = 117,
    sandyBrown = 118,
    seaGreen = 119,
    seaShell = 120,
    sienna = 121,
    silver = 122,
    skyBlue = 123,
    slateBlue = 124,
    slateGray = 125,
    snow = 126,
    springGreen = 127,
    steelBlue = 128,
    tan = 129,
    teal = 130,
    thistle = 131,
    tomato = 132,
    turquoise = 133,
    violet = 134,
    wheat = 135,
    white = 136,
    whiteSmoke = 137,
    yellow = 138,
    yellowGreen = 139
}
/**
 * @hidden
 */
export declare let ST_PresetColorVal_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_PenAlignment {
    ctr = 0,
    _in = 1
}
/**
 * @hidden
 */
export declare let ST_PenAlignment_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_PathFillMode {
    none = 0,
    norm = 1,
    lighten = 2,
    lightenLess = 3,
    darken = 4,
    darkenLess = 5
}
/**
 * @hidden
 */
export declare let ST_PathFillMode_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_LineEndType {
    none = 0,
    triangle = 1,
    stealth = 2,
    diamond = 3,
    oval = 4,
    arrow = 5
}
/**
 * @hidden
 */
export declare let ST_LineEndType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_LineEndWidth {
    sm = 0,
    med = 1,
    lg = 2
}
/**
 * @hidden
 */
export declare let ST_LineEndWidth_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_LineEndLength {
    sm = 0,
    med = 1,
    lg = 2
}
/**
 * @hidden
 */
export declare let ST_LineEndLength_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_LineCap {
    rnd = 0,
    sq = 1,
    flat = 2
}
/**
 * @hidden
 */
export declare let ST_LineCap_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_InsetMode {
    auto = 0,
    custom = 1
}
/**
 * @hidden
 */
export declare let ST_InsetMode_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_ImageAspect {
    ignore = 0,
    atMost = 1,
    atLeast = 2
}
/**
 * @hidden
 */
export declare let ST_ImageAspect_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_HrAlign {
    left = 0,
    right = 1,
    center = 2
}
/**
 * @hidden
 */
export declare let ST_HrAlign_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_FontCollectionIndex {
    major = 0,
    minor = 1,
    none = 2
}
/**
 * @hidden
 */
export declare let ST_FontCollectionIndex_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_FillType {
    gradientCenter = 0,
    solid = 1,
    pattern = 2,
    tile = 3,
    frame = 4,
    gradientUnscaled = 5,
    gradientRadial = 6,
    gradient = 7,
    background = 8
}
/**
 * @hidden
 */
export declare let ST_FillType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_FillMethod {
    none = 0,
    linear = 1,
    sigma = 2,
    any = 3,
    linearsigma = 4
}
/**
 * @hidden
 */
export declare let ST_FillMethod_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_Ext {
    view = 0,
    edit = 1,
    backwardCompatible = 2
}
/**
 * @hidden
 */
export declare let ST_Ext_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_ConnectType {
    none = 0,
    rect = 1,
    segments = 2,
    custom = 3
}
/**
 * @hidden
 */
export declare let ST_ConnectType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_ConnectorType {
    none = 0,
    straight = 1,
    elbow = 2,
    curved = 3
}
/**
 * @hidden
 */
export declare let ST_ConnectorType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_ConformanceClass {
    transitional = 0,
    strict = 1
}
/**
 * @hidden
 */
export declare let ST_ConformanceClass_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_CompoundLine {
    sng = 0,
    dbl = 1,
    thickThin = 2,
    thinThick = 3,
    tri = 4
}
/**
 * @hidden
 */
export declare let ST_CompoundLine_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_CF {
    PictOld = 0,
    Pict = 1,
    Bitmap = 2,
    PictPrint = 3,
    PictScreen = 4
}
/**
 * @hidden
 */
export declare let ST_CF_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_BWMode {
    color = 0,
    auto = 1,
    grayScale = 2,
    lightGrayscale = 3,
    inverseGray = 4,
    grayOutline = 5,
    highContrast = 6,
    black = 7,
    white = 8,
    hide = 9,
    undrawn = 10,
    blackTextAndLines = 11
}
/**
 * @hidden
 */
export declare let ST_BWMode_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_BlipCompression {
    none = 0,
    email = 1,
    hqprint = 2,
    print = 3,
    screen = 4
}
/**
 * @hidden
 */
export declare let ST_BlipCompression_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_BlackWhiteMode {
    clr = 0,
    auto = 1,
    gray = 2,
    ltGray = 3,
    invGray = 4,
    grayWhite = 5,
    blackGray = 6,
    blackWhite = 7,
    black = 8,
    white = 9,
    hidden = 10
}
/**
 * @hidden
 */
export declare let ST_BlackWhiteMode_$type: Type;
/**
 * @hidden
 */
export declare const enum XmlReadManager_AlternateContentStatus {
    NotInAlternateContent = 0,
    InAlternateContentPendingAcceptableChoice = 1,
    InAlternateContentChoiceAccepted = 2
}
/**
 * @hidden
 */
export declare let XmlReadManager_AlternateContentStatus_$type: Type;
/**
 * @hidden
 */
export declare const enum ElementPropertyIds {
    AbbreviatedCaseNumber = 0,
    AbsSizeAnchor = 1,
    AbsoluteAnchor = 2,
    AbstractNum = 3,
    AbstractNumId = 4,
    Acc = 5,
    AccPr = 6,
    Accent1 = 7,
    Accent2 = 8,
    Accent3 = 9,
    Accent4 = 10,
    Accent5 = 11,
    Accent6 = 12,
    Active = 13,
    ActiveRecord = 14,
    ActiveTabTopLevelEntity = 15,
    ActiveWritingStyle = 16,
    AdditionalCharacteristics = 17,
    Address = 18,
    AddressFieldName = 19,
    Adj = 20,
    AdjustRightInd = 21,
    Aggregation = 22,
    AhLst = 23,
    AlbumTitle = 24,
    Align = 25,
    AlignBordersAndEdges = 26,
    Alignment = 27,
    AllowPNG = 28,
    Aln = 29,
    AlnScr = 30,
    Alpha = 31,
    AlphaBiLevel = 32,
    AlphaCeiling = 33,
    AlphaFloor = 34,
    AlphaInv = 35,
    AlphaMod = 36,
    AlphaModFix = 37,
    AlphaOff = 38,
    AlphaOutset = 39,
    AlphaRepl = 40,
    AltChunk = 41,
    AltChunkPr = 42,
    AlwaysMergeEmptyNamespace = 43,
    AlwaysShowPlaceholderText = 44,
    Anchor = 45,
    Anchorlock = 46,
    AnimLvl = 47,
    AnimOne = 48,
    AnnotationRef = 49,
    ApplyToEnd = 50,
    ApplyToFront = 51,
    ApplyToSides = 52,
    Arc = 53,
    Area3DChart = 54,
    AreaChart = 55,
    ArgPr = 56,
    ArgSz = 57,
    Array = 58,
    Artist = 59,
    AttachedSchema = 60,
    AttachedTemplate = 61,
    Attr = 62,
    AttrName = 63,
    AttrNameLst = 64,
    AudioCd = 65,
    AudioFile = 66,
    Author = 67,
    Authors = 68,
    Auto = 69,
    AutoCaption = 70,
    AutoCaptions = 71,
    AutoFilter = 72,
    AutoFormatOverride = 73,
    AutoHyphenation = 74,
    AutoSpaceDE = 75,
    AutoSpaceDN = 76,
    AutoSortScope = 77,
    AutoTitleDeleted = 78,
    AutoUpdate = 79,
    AvLst = 80,
    AxId = 81,
    AxPos = 82,
    AxisColor = 83,
    AxisId = 84,
    AxisTitle = 85,
    B = 86,
    BCs = 87,
    BackWall = 88,
    Backdrop = 89,
    Background = 90,
    Backward = 91,
    Band1H = 92,
    Band1V = 93,
    Band2H = 94,
    Band2V = 95,
    BandFmt = 96,
    BandFmts = 97,
    Bar = 98,
    Bar3DChart = 99,
    BarChart = 100,
    BarDir = 101,
    BarPr = 102,
    BaseJc = 103,
    BaseTimeUnit = 104,
    Bdr = 105,
    BegChr = 106,
    Between = 107,
    Bevel = 108,
    BevelB = 109,
    BevelT = 110,
    Bg = 111,
    BgClr = 112,
    BgColor = 113,
    BgFillStyleLst = 114,
    BgPr = 115,
    BgRef = 116,
    BiLevel = 117,
    Bidi = 118,
    BidiVisual = 119,
    Binning = 120,
    Bk = 121,
    BldChart = 122,
    BldDgm = 123,
    BldLst = 124,
    Blend = 125,
    Blinds = 126,
    Blip = 127,
    BlipFill = 128,
    Blob = 129,
    BlockQuote = 130,
    Blue = 131,
    BlueMod = 132,
    BlueOff = 133,
    Blur = 134,
    BodyDiv = 135,
    BodyPr = 136,
    BodyStyle = 137,
    Bold = 138,
    BoldItalic = 139,
    BookAuthor = 140,
    BookFoldPrinting = 141,
    BookFoldPrintingSheets = 142,
    BookFoldRevPrinting = 143,
    BookTitle = 144,
    BookViews = 145,
    BookmarkEnd = 146,
    BookmarkStart = 147,
    Bool = 148,
    Border = 149,
    BorderBox = 150,
    BorderBoxPr = 151,
    BorderColor = 152,
    Borderbottom = 153,
    Borderleft = 154,
    Borderright = 155,
    Borders = 156,
    BordersDoNotSurroundFooter = 157,
    BordersDoNotSurroundHeader = 158,
    Bordertop = 159,
    Bottom = 160,
    Bounds = 161,
    Box = 162,
    BoxPr = 163,
    Br = 164,
    Brk = 165,
    BrkBin = 166,
    BrkBinSub = 167,
    BroadcastTitle = 168,
    Broadcaster = 169,
    Browse = 170,
    Bstr = 171,
    BuAutoNum = 172,
    BuBlip = 173,
    BuChar = 174,
    BuClr = 175,
    BuClrTx = 176,
    BuFont = 177,
    BuFontTx = 178,
    BuNone = 179,
    BuSzPct = 180,
    BuSzPts = 181,
    BuSzTx = 182,
    Bubble3D = 183,
    BubbleChart = 184,
    BubbleScale = 185,
    BubbleSize = 186,
    BuiltInUnit = 187,
    BulletEnabled = 188,
    By = 189,
    C = 190,
    CalculatedItems = 191,
    CalculatedMembers = 192,
    CategoryFilterException = 193,
    CBhvr = 194,
    CGp = 195,
    CGpRule = 196,
    CMediaNode = 197,
    CNvCxnSpPr = 198,
    CNvGraphicFramePr = 199,
    CNvGrpSpPr = 200,
    CNvPicPr = 201,
    CNvPr = 202,
    CNvSpPr = 203,
    CSld = 204,
    CSldViewPr = 205,
    CSp = 206,
    CTn = 207,
    CViewPr = 208,
    CacheField = 209,
    CacheFields = 210,
    CacheHierarchy = 211,
    CacheHierarchies = 212,
    CacheSource = 213,
    CachedUniqueName = 214,
    CachedUniqueNames = 215,
    CalcChain = 216,
    CalcPr = 217,
    CalculatedColumnFormula = 218,
    CalculatedItem = 219,
    CalculatedMember = 220,
    CalculatedTimeColumn = 221,
    Calendar = 222,
    Callout = 223,
    Camera = 224,
    Caps = 225,
    Caption = 226,
    Captions = 227,
    CaseNumber = 228,
    Cat = 229,
    CatAx = 230,
    CatLst = 231,
    CatScaling = 232,
    CategoryAxis = 233,
    Cell = 234,
    Cell3D = 235,
    CellDel = 236,
    CellIns = 237,
    CellMerge = 238,
    CellMetadata = 239,
    CellSmartTag = 240,
    CellSmartTags = 241,
    CellSmartTagPr = 242,
    CellStyle = 243,
    CellStyleXfs = 244,
    CellStyles = 245,
    CellWatch = 246,
    CellWatches = 247,
    CellXfs = 248,
    Cf = 249,
    CfIcon = 250,
    CfRule = 251,
    Cfvo = 252,
    ChExt = 253,
    ChMax = 254,
    ChOff = 255,
    ChPref = 256,
    ChapterNumber = 257,
    CharacterSpacingControl = 258,
    Characteristic = 259,
    Charset = 260,
    Chart = 261,
    ChartArea = 262,
    ChartFormat = 263,
    ChartFormats = 264,
    ChartObject = 265,
    ChartSpace = 266,
    ChartStyle = 267,
    Chartsheet = 268,
    CheckErrors = 269,
    Checked = 270,
    Checker = 271,
    ChildTnLst = 272,
    Chr = 273,
    Circle = 274,
    City = 275,
    ClickAndTypeStyle = 276,
    ClientData = 277,
    Clippath = 278,
    ClrChange = 279,
    ClrData = 280,
    ClrFrom = 281,
    ClrMap = 282,
    ClrMapOvr = 283,
    ClrMru = 284,
    ClrRepl = 285,
    ClrScheme = 286,
    ClrSchemeMapping = 287,
    ClrTo = 288,
    Clsid = 289,
    Cm = 290,
    CmAuthor = 291,
    CmAuthorLst = 292,
    CmLst = 293,
    CnfStyle = 294,
    Col = 295,
    ColBreaks = 296,
    ColDelim = 297,
    ColFields = 298,
    ColHierarchiesUsage = 299,
    ColHierarchyUsage = 300,
    ColItems = 301,
    Color = 302,
    ColorAxis = 303,
    ColorFirst = 304,
    ColorHigh = 305,
    ColorLast = 306,
    ColorLow = 307,
    ColorMarkers = 308,
    ColorNegative = 309,
    ColorScale = 310,
    ColorSeries = 311,
    ColorStyle = 312,
    Colors = 313,
    ColorsDef = 314,
    ColorsDefHdr = 315,
    ColorsDefHdrLst = 316,
    Cols = 317,
    Column = 318,
    Comb = 319,
    Comment = 320,
    CommentList = 321,
    CommentRangeEnd = 322,
    CommentRangeStart = 323,
    CommentReference = 324,
    Comments = 325,
    Comp = 326,
    Compat = 327,
    Compiler = 328,
    Complex = 329,
    Composer = 330,
    Cond = 331,
    Condense = 332,
    ConditionalFormat = 333,
    ConditionalFormats = 334,
    ConditionalFormatting = 335,
    ConditionalFormattings = 336,
    Conductor = 337,
    ConferenceName = 338,
    ConnectString = 339,
    Connection = 340,
    Connections = 341,
    ConsecutiveHyphenLimit = 342,
    Constr = 343,
    Cont = 344,
    ContextualSpacing = 345,
    ContinuationSeparator = 346,
    ContourClr = 347,
    Control = 348,
    Controls = 349,
    Copyright = 350,
    Copyrights = 351,
    Corporate = 352,
    Counsel = 353,
    Count = 354,
    CountryRegion = 355,
    Court = 356,
    Cover = 357,
    Cr = 358,
    CrossAx = 359,
    CrossBetween = 360,
    Crosses = 361,
    CrossesAt = 362,
    Cs = 363,
    CtrlPr = 364,
    Curve = 365,
    CustClr = 366,
    CustClrLst = 367,
    CustDash = 368,
    CustData = 369,
    CustDataLst = 370,
    CustGeom = 371,
    CustShow = 372,
    CustShowLst = 373,
    CustSplit = 374,
    CustUnit = 375,
    CustomFilter = 376,
    CustomFilters = 377,
    CustomPr = 378,
    CustomProperties = 379,
    CustomSheetView = 380,
    CustomSheetViews = 381,
    CustomWorkbookView = 382,
    CustomWorkbookViews = 383,
    CustomXmlDelRangeEnd = 384,
    CustomXmlDelRangeStart = 385,
    CustomXmlInsRangeEnd = 386,
    CustomXmlInsRangeStart = 387,
    CustomXmlMoveFromRangeEnd = 388,
    CustomXmlMoveFromRangeStart = 389,
    CustomXmlMoveToRangeEnd = 390,
    CustomXmlMoveToRangeStart = 391,
    CustomXmlPr = 392,
    Cut = 393,
    Cxn = 394,
    CxnLst = 395,
    CxnSp = 396,
    CxnSpLocks = 397,
    Cy = 398,
    D = 399,
    DdeLink = 400,
    DLbl = 401,
    DlblFieldTableCache = 402,
    DlblFTEntry = 403,
    DLblPos = 404,
    DlblRangeCache = 405,
    DLbls = 406,
    DPr = 407,
    DPt = 408,
    DTable = 409,
    Data = 410,
    DataBar = 411,
    DataBinding = 412,
    DataConsolidate = 413,
    DataField = 414,
    DataFields = 415,
    DataId = 416,
    DataLabel = 417,
    DataLabelCallout = 418,
    DataLabelHidden = 419,
    DataLabels = 420,
    DataLabelsRange = 421,
    DataModel = 422,
    DataPoint = 423,
    DataPoint3D = 424,
    DataPointLine = 425,
    DataPointMarker = 426,
    DataPointMarkerLayout = 427,
    DataPointWireframe = 428,
    DataPt = 429,
    DataRef = 430,
    DataRefs = 431,
    DataSource = 432,
    DataTable = 433,
    DataType = 434,
    DataValidation = 435,
    DataValidations = 436,
    DatastoreItem = 437,
    Date = 438,
    Date1904 = 439,
    DateAx = 440,
    DateFormat = 441,
    DateGroupItem = 442,
    Day = 443,
    DayAccessed = 444,
    DayLong = 445,
    DayShort = 446,
    DbTable = 447,
    DbTables = 448,
    DdeItem = 449,
    DdeItems = 450,
    Decimal = 451,
    DecimalSymbol = 452,
    DefJc = 453,
    DefPPr = 454,
    DefRPr = 455,
    Default = 456,
    DefaultTabStop = 457,
    DefaultTableStyle = 458,
    DefaultTextStyle = 459,
    DefinedName = 460,
    DefinedNames = 461,
    Deg = 462,
    DegHide = 463,
    Del = 464,
    DelInstrText = 465,
    DelText = 466,
    del = 467,
    DeletedField = 468,
    Den = 469,
    Department = 470,
    DepthPercent = 471,
    Desc = 472,
    DescriptionPr = 473,
    Destination = 474,
    Dgm = 475,
    Diagonal = 476,
    Diagram = 477,
    Dialogsheet = 478,
    Diamond = 479,
    Diff = 480,
    Dimension = 481,
    Dimensions = 482,
    Dir = 483,
    Director = 484,
    Dirty = 485,
    DiscretePr = 486,
    DispBlanksAs = 487,
    DispDef = 488,
    DispEq = 489,
    DispRSqr = 490,
    DispUnits = 491,
    DispUnitsLbl = 492,
    DisplayBackgroundShape = 493,
    DisplayHorizontalDrawingGridEvery = 494,
    DisplayVerticalDrawingGridEvery = 495,
    Dissolve = 496,
    Distributor = 497,
    Div = 498,
    DivBdr = 499,
    DivId = 500,
    Divs = 501,
    DivsChild = 502,
    Dk1 = 503,
    Dk2 = 504,
    DoNotAutoCompressPictures = 505,
    DoNotDemarcateInvalidXml = 506,
    DoNotDisplayPageBoundaries = 507,
    DoNotEmbedSmartTags = 508,
    DoNotHyphenateCaps = 509,
    DoNotIncludeSubdocsInStats = 510,
    DoNotOrganizeInFolder = 511,
    DoNotRelyOnCSS = 512,
    DoNotSaveAsSingleFile = 513,
    DoNotShadeFormData = 514,
    DoNotSuppressBlankLines = 515,
    DoNotTrackFormatting = 516,
    DoNotTrackMoves = 517,
    DoNotUseLongFileNames = 518,
    DoNotUseMarginsForDrawingGridOrigin = 519,
    DoNotValidateAgainstSchema = 520,
    DocDefaults = 521,
    DocGrid = 522,
    DocPartBody = 523,
    DocPartCategory = 524,
    DocPartGallery = 525,
    DocPartPr = 526,
    DocPartUnique = 527,
    DocPr = 528,
    DocVar = 529,
    DocVars = 530,
    Document = 531,
    DocumentProtection = 532,
    DocumentType = 533,
    DoughnutChart = 534,
    DownBar = 535,
    DownBars = 536,
    Drawing = 537,
    DrawingGridHorizontalOrigin = 538,
    DrawingGridHorizontalSpacing = 539,
    DrawingGridVerticalOrigin = 540,
    DrawingGridVerticalSpacing = 541,
    DropLine = 542,
    DropLines = 543,
    Ds = 544,
    Dstrike = 545,
    Duotone = 546,
    Dxf = 547,
    Dxfs = 548,
    DynamicAddress = 549,
    E = 550,
    Ea = 551,
    EastAsianLayout = 552,
    EditValue = 553,
    Edition = 554,
    Editor = 555,
    Effect = 556,
    EffectClrLst = 557,
    EffectDag = 558,
    EffectExtent = 559,
    EffectLst = 560,
    EffectRef = 561,
    EffectStyle = 562,
    EffectStyleLst = 563,
    Else = 564,
    Em = 565,
    EmbedSystemFonts = 566,
    EmbedTrueTypeFonts = 567,
    EmbeddedFont = 568,
    EmbeddedFontLst = 569,
    Emboss = 570,
    Empty = 571,
    Encoding = 572,
    End = 573,
    EndChr = 574,
    EndCondLst = 575,
    EndCxn = 576,
    EndParaRPr = 577,
    EndSync = 578,
    Endnote = 579,
    EndnotePr = 580,
    EndnoteRef = 581,
    EndnoteReference = 582,
    Endnotes = 583,
    EntityType = 584,
    Entries = 585,
    Entry = 586,
    EqArr = 587,
    EqArrPr = 588,
    ErrBarType = 589,
    ErrBars = 590,
    ErrDir = 591,
    ErrValType = 592,
    Error = 593,
    ErrorBar = 594,
    EvenAndOddHeaders = 595,
    EvenFooter = 596,
    EvenHeader = 597,
    Explosion = 598,
    Ext = 599,
    Extend = 600,
    ExtLst = 601,
    Extent = 602,
    ExternalBook = 603,
    ExternalData = 604,
    ExternalLink = 605,
    ExternalReference = 606,
    ExternalReferences = 607,
    ExtraClrScheme = 608,
    ExtraClrSchemeLst = 609,
    Extrusion = 610,
    ExtrusionClr = 611,
    F = 612,
    FHdr = 613,
    FName = 614,
    FPr = 615,
    Fade = 616,
    Family = 617,
    FgClr = 618,
    FgColor = 619,
    Field = 620,
    FieldCodes = 621,
    FieldGroup = 622,
    FieldMapData = 623,
    FieldUsage = 624,
    FieldsUsage = 625,
    FileRecoveryPr = 626,
    FileSharing = 627,
    FileVersion = 628,
    Filetime = 629,
    Fill = 630,
    FillClrLst = 631,
    FillColor = 632,
    FillOverlay = 633,
    FillRect = 634,
    FillRef = 635,
    FillStyleLst = 636,
    FillToRect = 637,
    Fills = 638,
    Filter = 639,
    FilterColumn = 640,
    Filters = 641,
    First = 642,
    FirstCol = 643,
    FirstFooter = 644,
    FirstHeader = 645,
    FirstRow = 646,
    FirstSliceAng = 647,
    FitText = 648,
    FlatBorders = 649,
    FlatTx = 650,
    Fld = 651,
    FldChar = 652,
    FldData = 653,
    Floor = 654,
    FmtId = 655,
    FmtOvr = 656,
    FmtScheme = 657,
    FolHlink = 658,
    Font = 659,
    FontRef = 660,
    FontScheme = 661,
    Fonts = 662,
    FooterReference = 663,
    Footnote = 664,
    FootnotePr = 665,
    FootnoteRef = 666,
    FootnoteReference = 667,
    Footnotes = 668,
    ForceUpgrade = 669,
    FormControlPr = 670,
    FormProt = 671,
    Format = 672,
    FormatCode = 673,
    Formats = 674,
    Formatting = 675,
    FormsDesign = 676,
    Formula = 677,
    Formula1 = 678,
    Formula2 = 679,
    Formulas = 680,
    Forward = 681,
    Frame = 682,
    FrameLayout = 683,
    FramePr = 684,
    Frameset = 685,
    FramesetSplitbar = 686,
    From = 687,
    Ftr = 688,
    Func = 689,
    FuncPr = 690,
    FunctionGroup = 691,
    FunctionGroups = 692,
    FutureMetadata = 693,
    Gallery = 694,
    Gamma = 695,
    GapDepth = 696,
    GapWidth = 697,
    Gd = 698,
    GdLst = 699,
    GeoCache = 700,
    GeoChildEntities = 701,
    GeoChildEntitiesQuery = 702,
    GeoChildEntitiesQueryResult = 703,
    GeoChildEntitiesQueryResults = 704,
    GeoChildTypes = 705,
    GeoData = 706,
    GeoDataEntityQuery = 707,
    GeoDataEntityQueryResult = 708,
    GeoDataEntityQueryResults = 709,
    GeoDataPointQuery = 710,
    GeoDataPointToEntityQuery = 711,
    GeoDataPointToEntityQueryResult = 712,
    GeoDataPointToEntityQueryResults = 713,
    GeoHierarchyEntity = 714,
    GeoLocation = 715,
    GeoLocationQuery = 716,
    GeoLocationQueryResult = 717,
    GeoLocationQueryResults = 718,
    GeoLocations = 719,
    GeoPolygon = 720,
    GeoPolygons = 721,
    Geography = 722,
    GlossaryDocument = 723,
    Glow = 724,
    GradFill = 725,
    GradientFill = 726,
    Graphic = 727,
    GraphicData = 728,
    GraphicFrame = 729,
    GraphicFrameLocks = 730,
    Gray = 731,
    Grayscl = 732,
    Green = 733,
    GreenMod = 734,
    GreenOff = 735,
    GridCol = 736,
    GridSpacing = 737,
    GridSpan = 738,
    GridlineMajor = 739,
    GridlineMinor = 740,
    Group = 741,
    GroupChr = 742,
    GroupChrPr = 743,
    GroupItems = 744,
    GroupLevel = 745,
    GroupLevels = 746,
    GroupMember = 747,
    GroupMembers = 748,
    Grouping = 749,
    Groups = 750,
    Grow = 751,
    GrpFill = 752,
    GrpSp = 753,
    GrpSpLocks = 754,
    GrpSpPr = 755,
    Gs = 756,
    GsLst = 757,
    Guid = 758,
    Guide = 759,
    GuideLst = 760,
    GutterAtTop = 761,
    H = 762,
    HMerge = 763,
    HMode = 764,
    HPercent = 765,
    Handles = 766,
    HandoutMaster = 767,
    HandoutMasterId = 768,
    HandoutMasterIdLst = 769,
    Hdr = 770,
    HdrShapeDefaults = 771,
    HeadEnd = 772,
    Header = 773,
    HeaderFooter = 774,
    HeaderReference = 775,
    HeaderSource = 776,
    Headers = 777,
    Hf = 778,
    HiLoLine = 779,
    HiLowLines = 780,
    HideBot = 781,
    HideGrammaticalErrors = 782,
    HideLeft = 783,
    HideMark = 784,
    HideRight = 785,
    HideSpellingErrors = 786,
    HideTop = 787,
    HierBranch = 788,
    Highlight = 789,
    Hlink = 790,
    HlinkClick = 791,
    HlinkHover = 792,
    HlinkMouseOver = 793,
    HoleSize = 794,
    Horizontal = 795,
    Hps = 796,
    HpsBaseText = 797,
    HpsRaise = 798,
    Hsl = 799,
    HslClr = 800,
    HtmlPubPr = 801,
    Hue = 802,
    HueMod = 803,
    HueOff = 804,
    Hyperlink = 805,
    Hyperlinks = 806,
    HyphenationZone = 807,
    I = 808,
    I1 = 809,
    I2 = 810,
    I4 = 811,
    I8 = 812,
    ICs = 813,
    IconFilter = 814,
    IconSet = 815,
    Id = 816,
    Idx = 817,
    If = 818,
    IgnoreMixedContent = 819,
    IgnoredError = 820,
    IgnoredErrors = 821,
    Ilvl = 822,
    Image = 823,
    Imagedata = 824,
    Imprint = 825,
    Ind = 826,
    IndexedColors = 827,
    Ink = 828,
    Inline = 829,
    InnerShdw = 830,
    InputCells = 831,
    Ins = 832,
    InsideH = 833,
    InsideV = 834,
    Institution = 835,
    InstrText = 836,
    Int = 837,
    IntLim = 838,
    InterSp = 839,
    Intercept = 840,
    InternetSiteTitle = 841,
    Interviewee = 842,
    Interviewer = 843,
    IntraSp = 844,
    Inv = 845,
    InvGamma = 846,
    Inventor = 847,
    InvertIfNegative = 848,
    Is = 849,
    Iscomment = 850,
    Issue = 851,
    Italic = 852,
    Item = 853,
    ItemLst = 854,
    Items = 855,
    Iterate = 856,
    Jc = 857,
    JournalName = 858,
    K = 859,
    KeepLines = 860,
    KeepNext = 861,
    Kern = 862,
    Kinsoku = 863,
    Kiosk = 864,
    Kpi = 865,
    Kpis = 866,
    LCID = 867,
    LMargin = 868,
    Lang = 869,
    Last = 870,
    LastCol = 871,
    LastRenderedPageBreak = 872,
    LastRow = 873,
    LatentStyles = 874,
    Latin = 875,
    Layout = 876,
    LayoutDef = 877,
    LayoutDefHdr = 878,
    LayoutDefHdrLst = 879,
    LayoutNode = 880,
    LayoutPr = 881,
    LayoutTarget = 882,
    LblAlgn = 883,
    LblOffset = 884,
    LeaderLine = 885,
    LeaderLines = 886,
    Left = 887,
    LegacyDrawing = 888,
    LegacyDrawingHF = 889,
    Legend = 890,
    LegendEntry = 891,
    LegendPos = 892,
    Level = 893,
    Levels = 894,
    Lid = 895,
    LightRig = 896,
    Lim = 897,
    LimLoc = 898,
    LimLow = 899,
    LimLowPr = 900,
    LimUpp = 901,
    LimUppPr = 902,
    Lin = 903,
    LinClrLst = 904,
    Line = 905,
    Line3DChart = 906,
    LineChart = 907,
    LineTo = 908,
    LineWidthScale = 909,
    LinkStyles = 910,
    LinkToQuery = 911,
    LinkType = 912,
    LinkedToFile = 913,
    ListEntry = 914,
    ListItem = 915,
    ListSeparator = 916,
    Lit = 917,
    Ln = 918,
    LnB = 919,
    LnBlToTr = 920,
    LnDef = 921,
    LnL = 922,
    LnNumType = 923,
    LnR = 924,
    LnRef = 925,
    LnSpc = 926,
    LnStyleLst = 927,
    LnT = 928,
    LnTlToBr = 929,
    Location = 930,
    Lock = 931,
    LockedCanvas = 932,
    LockedField = 933,
    LogBase = 934,
    Lpstr = 935,
    Lpwstr = 936,
    LsdException = 937,
    LstStyle = 938,
    Lt1 = 939,
    Lt2 = 940,
    Lum = 941,
    LumMod = 942,
    LumOff = 943,
    Lvl = 944,
    Lvl1pPr = 945,
    Lvl2pPr = 946,
    Lvl3pPr = 947,
    Lvl4pPr = 948,
    Lvl5pPr = 949,
    Lvl6pPr = 950,
    Lvl7pPr = 951,
    Lvl8pPr = 952,
    Lvl9pPr = 953,
    LvlOverride = 954,
    M = 955,
    MPr = 956,
    MailAsAttachment = 957,
    MailMerge = 958,
    MailSubject = 959,
    Main = 960,
    MainDocumentType = 961,
    MajorFont = 962,
    MajorGridlines = 963,
    MajorTickMark = 964,
    MajorTickMarks = 965,
    MajorTimeUnit = 966,
    MajorUnit = 967,
    ManualLayout = 968,
    Map = 969,
    Maps = 970,
    MapInfo = 971,
    MappedName = 972,
    MarBottom = 973,
    MarH = 974,
    MarLeft = 975,
    MarRight = 976,
    MarTop = 977,
    MarW = 978,
    Marker = 979,
    MasterClrMapping = 980,
    MatchSrc = 981,
    MathFont = 982,
    MathPr = 983,
    Max = 984,
    MaxColor = 985,
    MaxDist = 986,
    MaxLength = 987,
    Mc = 988,
    McJc = 989,
    McPr = 990,
    Mcs = 991,
    Mdx = 992,
    MdxMetadata = 993,
    MeasureGroup = 994,
    MeasureGroups = 995,
    Medium = 996,
    Member = 997,
    Members = 998,
    MergeCell = 999,
    MergeCells = 1000,
    Metadata = 1001,
    MetadataStrings = 1002,
    MetadataType = 1003,
    MetadataTypes = 1004,
    Mid = 1005,
    MidColor = 1006,
    Middle = 1007,
    Min = 1008,
    MinColor = 1009,
    MinorFont = 1010,
    MinorGridlines = 1011,
    MinorTickMark = 1012,
    MinorTickMarks = 1013,
    MinorTimeUnit = 1014,
    MinorUnit = 1015,
    Minus = 1016,
    MirrorIndents = 1017,
    MirrorMargins = 1018,
    Miter = 1019,
    ModelRelationship = 1020,
    ModelTable = 1021,
    ModelTimeGrouping = 1022,
    ModelTimeGroupings = 1023,
    ModifyVerifier = 1024,
    Month = 1025,
    MonthAccessed = 1026,
    MonthLong = 1027,
    MonthShort = 1028,
    MoveFrom = 1029,
    MoveFromRangeEnd = 1030,
    MoveFromRangeStart = 1031,
    MoveTo = 1032,
    MoveToRangeEnd = 1033,
    MoveToRangeStart = 1034,
    Mp = 1035,
    Mps = 1036,
    MpMap = 1037,
    Mr = 1038,
    MruColors = 1039,
    Ms = 1040,
    MultiLevelType = 1041,
    MultiLvlStrCache = 1042,
    MultiLvlStrRef = 1043,
    N = 1044,
    Name1 = 1045,
    NameList = 1046,
    Nary = 1047,
    NaryLim = 1048,
    NaryPr = 1049,
    Nc = 1050,
    Ndxf = 1051,
    NeCell = 1052,
    NegativeBorderColor = 1053,
    NegativeFillColor = 1054,
    Newsflash = 1055,
    NextCondLst = 1056,
    NoAutofit = 1057,
    NoBorder = 1058,
    NoBreak = 1059,
    NoBreakHyphen = 1060,
    NoEndCap = 1061,
    NoEndnote = 1062,
    NoFill = 1063,
    NoLineBreaksAfter = 1064,
    NoLineBreaksBefore = 1065,
    NoMultiLvlLbl = 1066,
    NoProof = 1067,
    NoPunctuationKerning = 1068,
    NoResizeAllowed = 1069,
    NoWrap = 1070,
    Nor = 1071,
    Norm = 1072,
    NormAutofit = 1073,
    NormalViewPr = 1074,
    Notes = 1075,
    NotesMaster = 1076,
    NotesMasterId = 1077,
    NotesMasterIdLst = 1078,
    NotesStyle = 1079,
    NotesSz = 1080,
    NotesTextViewPr = 1081,
    NotesViewPr = 1082,
    Nsid = 1083,
    Null = 1084,
    Num = 1085,
    NumCache = 1086,
    NumDim = 1087,
    NumFmt = 1088,
    NumFmts = 1089,
    NumId = 1090,
    NumIdMacAtCleanup = 1091,
    NumLit = 1092,
    NumPicBullet = 1093,
    NumPr = 1094,
    NumRef = 1095,
    NumRestart = 1096,
    NumStart = 1097,
    NumStyleLink = 1098,
    NumberVolumes = 1099,
    Numbering = 1100,
    NumberingChange = 1101,
    NvCxnSpPr = 1102,
    NvGraphicFramePr = 1103,
    NvGrpSpPr = 1104,
    NvPicPr = 1105,
    NvSpPr = 1106,
    NwCell = 1107,
    OLEObject = 1108,
    OMath = 1109,
    OMathPara = 1110,
    OMathParaPr = 1111,
    ObjDist = 1112,
    object1 = 1113,
    ObjectDefaults = 1114,
    Oblob = 1115,
    Oc = 1116,
    OddFooter = 1117,
    OddHeader = 1118,
    Odso = 1119,
    Odxf = 1120,
    OfPieChart = 1121,
    OfPieType = 1122,
    Off = 1123,
    OldFormula = 1124,
    OleItem = 1125,
    OleItems = 1126,
    OleLink = 1127,
    OleObj = 1128,
    OleObject = 1129,
    OleObjects = 1130,
    OleSize = 1131,
    OneCellAnchor = 1132,
    OpEmu = 1133,
    OptimizeForBrowser = 1134,
    Order = 1135,
    OrgChart = 1136,
    Orientation = 1137,
    Origin = 1138,
    Ostorage = 1139,
    Ostream = 1140,
    OtherStyle = 1141,
    OuterShdw = 1142,
    Outline = 1143,
    OutlineLvl = 1144,
    OutlinePr = 1145,
    OutlineViewPr = 1146,
    Oval = 1147,
    OverflowPunct = 1148,
    Overlap = 1149,
    Overlay = 1150,
    OverrideClrMapping = 1151,
    P = 1152,
    PBdr = 1153,
    PPr = 1154,
    PPrDefault = 1155,
    PStyle = 1156,
    Page = 1157,
    PageBreakBefore = 1158,
    PageField = 1159,
    PageFields = 1160,
    PageItem = 1161,
    PageMargins = 1162,
    PageSetUpPr = 1163,
    PageSetup = 1164,
    Pages = 1165,
    Pane = 1166,
    PaperSrc = 1167,
    Param = 1168,
    Parameter = 1169,
    ParentLabelLayout = 1170,
    PatentNumber = 1171,
    Path = 1172,
    PathLst = 1173,
    PattFill = 1174,
    PatternFill = 1175,
    PenClr = 1176,
    Performer = 1177,
    Period = 1178,
    PeriodicalTitle = 1179,
    PermEnd = 1180,
    PermStart = 1181,
    Person = 1182,
    Perspective = 1183,
    PgBorders = 1184,
    PgMar = 1185,
    PgNum = 1186,
    PgNumType = 1187,
    PgSz = 1188,
    Ph = 1189,
    Phant = 1190,
    PhantPr = 1191,
    PhoneticPr = 1192,
    PhotoAlbum = 1193,
    Pic = 1194,
    PicLocks = 1195,
    Pict = 1196,
    Picture = 1197,
    PictureFormat = 1198,
    PictureOptions = 1199,
    PictureStackUnit = 1200,
    Pie3DChart = 1201,
    PieChart = 1202,
    PivotArea = 1203,
    PivotAreas = 1204,
    PivotCache = 1205,
    PivotCacheDefinition = 1206,
    PivotCacheIdVersion = 1207,
    PivotCacheRecords = 1208,
    PivotCaches = 1209,
    PivotChange = 1210,
    PivotChanges = 1211,
    PivotEdit = 1212,
    PivotEdits = 1213,
    PivotField = 1214,
    PivotFields = 1215,
    PivotFilter = 1216,
    PivotFmt = 1217,
    PivotFmts = 1218,
    PivotHierarchies = 1219,
    PivotHierarchy = 1220,
    PivotRow = 1221,
    PivotSelection = 1222,
    PivotSource = 1223,
    PivotTable = 1224,
    PivotTableData = 1225,
    PivotTableDefinition = 1226,
    PivotTableReference = 1227,
    PivotTableReferences = 1228,
    PivotTableStyleInfo = 1229,
    PivotTableUISettings = 1230,
    PivotTables = 1231,
    PixelsPerInch = 1232,
    Placeholder = 1233,
    PlcHide = 1234,
    PlotArea = 1235,
    PlotArea3D = 1236,
    PlotSurface = 1237,
    PlotVisOnly = 1238,
    Plus = 1239,
    Polyline = 1240,
    Pos = 1241,
    PosOffset = 1242,
    Position = 1243,
    PositionH = 1244,
    PositionV = 1245,
    PostSp = 1246,
    PrSet = 1247,
    PreSp = 1248,
    PresLayoutVars = 1249,
    Present = 1250,
    Presentation = 1251,
    PresentationPr = 1252,
    PrevCondLst = 1253,
    PrintFormsData = 1254,
    PrintFractionalCharacterWidth = 1255,
    PrintOptions = 1256,
    PrintPostScriptOverText = 1257,
    PrintSettings = 1258,
    PrintTwoOnOne = 1259,
    PrinterSettings = 1260,
    PrnPr = 1261,
    ProducerName = 1262,
    ProductionCompany = 1263,
    Progress = 1264,
    ProofErr = 1265,
    ProofState = 1266,
    Properties = 1267,
    Property = 1268,
    ProtectedRange = 1269,
    ProtectedRanges = 1270,
    Protection = 1271,
    PrstClr = 1272,
    PrstDash = 1273,
    PrstGeom = 1274,
    PrstShdw = 1275,
    PrstTxWarp = 1276,
    Pt = 1277,
    PtCount = 1278,
    PtLst = 1279,
    Ptab = 1280,
    PublicationTitle = 1281,
    Publisher = 1282,
    Pull = 1283,
    Push = 1284,
    Query = 1285,
    QueryCache = 1286,
    QueryTable = 1287,
    QueryTableDeletedFields = 1288,
    QueryTableField = 1289,
    QueryTableFields = 1290,
    QueryTableRefresh = 1291,
    Question = 1292,
    QuestionPr = 1293,
    Questions = 1294,
    QuestionsPr = 1295,
    QuickTimeFile = 1296,
    R = 1297,
    R4 = 1298,
    R8 = 1299,
    RAngAx = 1300,
    RCtr = 1301,
    RFonts = 1302,
    RMargin = 1303,
    RPh = 1304,
    RPr = 1305,
    RPrChange = 1306,
    RPrDefault = 1307,
    RSp = 1308,
    RSpRule = 1309,
    RStyle = 1310,
    Rad = 1311,
    RadPr = 1312,
    RadarChart = 1313,
    RadarStyle = 1314,
    Random = 1315,
    RandomBar = 1316,
    Range = 1317,
    RangePr = 1318,
    RangeSet = 1319,
    RangeSets = 1320,
    Ranges = 1321,
    Rc = 1322,
    Rcc = 1323,
    Rcmt = 1324,
    Rcv = 1325,
    ReadModeInkLockDown = 1326,
    RecipientData = 1327,
    Recipients = 1328,
    RecordingNumber = 1329,
    Rect = 1330,
    Red = 1331,
    RedMod = 1332,
    RedOff = 1333,
    Ref = 1334,
    RefOrder = 1335,
    Reference = 1336,
    References = 1337,
    Reflection = 1338,
    RegionLabelLayout = 1339,
    Regular = 1340,
    Rel = 1341,
    RelIds = 1342,
    RelOff = 1343,
    RelSizeAnchor = 1344,
    Relationtable = 1345,
    RelyOnVML = 1346,
    RemoveDateAndTime = 1347,
    RemovePersonalInformation = 1348,
    Reporter = 1349,
    ResizeHandles = 1350,
    RestoredLeft = 1351,
    RestoredTop = 1352,
    Result = 1353,
    Reviewed = 1354,
    ReviewedList = 1355,
    RevisionPtr = 1356,
    RevisionView = 1357,
    Revisions = 1358,
    Rfmt = 1359,
    RFont = 1360,
    RgbColor = 1361,
    Rich = 1362,
    Right = 1363,
    Ris = 1364,
    Raf = 1365,
    Rdn = 1366,
    Rcft = 1367,
    Rqt = 1368,
    Rm = 1369,
    Rot = 1370,
    RotX = 1371,
    RotY = 1372,
    Round = 1373,
    RoundedCorners = 1374,
    Roundrect = 1375,
    Row = 1376,
    RowBreaks = 1377,
    RowFields = 1378,
    RowHierarchiesUsage = 1379,
    RowHierarchyUsage = 1380,
    RowItem = 1381,
    RowItems = 1382,
    Rows = 1383,
    Rrc = 1384,
    Rsid = 1385,
    RsidRoot = 1386,
    Rsids = 1387,
    Rsnm = 1388,
    Rt = 1389,
    Rtl = 1390,
    RtlGutter = 1391,
    Ruby = 1392,
    RubyAlign = 1393,
    RubyBase = 1394,
    RubyPr = 1395,
    Rule = 1396,
    S = 1397,
    SPre = 1398,
    SPrePr = 1399,
    SSub = 1400,
    SSubPr = 1401,
    SSubSup = 1402,
    SSubSupPr = 1403,
    SSup = 1404,
    SSupPr = 1405,
    SampData = 1406,
    Sat = 1407,
    SatMod = 1408,
    SatOff = 1409,
    SaveFormsData = 1410,
    SaveInvalidXml = 1411,
    SavePreviewPicture = 1412,
    SaveSmartTagsAsXml = 1413,
    SaveSubsetFonts = 1414,
    SaveThroughXslt = 1415,
    SaveXmlDataOnly = 1416,
    Scale = 1417,
    Scaling = 1418,
    ScatterChart = 1419,
    ScatterStyle = 1420,
    Scenario = 1421,
    Scenarios = 1422,
    Scene3d = 1423,
    Schema = 1424,
    SchemaLibrary = 1425,
    SchemaRef = 1426,
    SchemaRefs = 1427,
    Scheme = 1428,
    SchemeClr = 1429,
    Scr = 1430,
    ScrgbClr = 1431,
    Scrollbar = 1432,
    Sdt = 1433,
    SdtContent = 1434,
    SdtEndPr = 1435,
    SdtPr = 1436,
    SeCell = 1437,
    SecondPiePt = 1438,
    SecondPieSize = 1439,
    SectPr = 1440,
    SectPrChange = 1441,
    Selection = 1442,
    Selections = 1443,
    SepChr = 1444,
    Separator = 1445,
    Ser = 1446,
    SerAx = 1447,
    SerLines = 1448,
    Series = 1449,
    SeriesAxis = 1450,
    SeriesLine = 1451,
    ServerFormat = 1452,
    ServerFormats = 1453,
    Set = 1454,
    SetLevel = 1455,
    SetLevels = 1456,
    Sets = 1457,
    Settings = 1458,
    Shade = 1459,
    Shadow = 1460,
    Shape = 1461,
    ShapeDefaults = 1462,
    Shapedefaults = 1463,
    Shapelayout = 1464,
    Shapetype = 1465,
    SharedItems = 1466,
    Shd = 1467,
    Sheet = 1468,
    SheetCalcPr = 1469,
    SheetData = 1470,
    SheetDataSet = 1471,
    SheetFormatPr = 1472,
    SheetId = 1473,
    SheetIdMap = 1474,
    SheetName = 1475,
    SheetNames = 1476,
    SheetPr = 1477,
    SheetProtection = 1478,
    SheetView = 1479,
    SheetViews = 1480,
    Sheets = 1481,
    ShortTitle = 1482,
    Show = 1483,
    ShowBubbleSize = 1484,
    ShowCatName = 1485,
    ShowDataLabelsRange = 1486,
    ShowDLblsOverMax = 1487,
    ShowEnvelope = 1488,
    ShowHorzBorder = 1489,
    ShowKeys = 1490,
    ShowLeaderLines = 1491,
    ShowLegendKey = 1492,
    ShowNegBubbles = 1493,
    ShowOutline = 1494,
    ShowPercent = 1495,
    ShowPr = 1496,
    ShowSerName = 1497,
    ShowVal = 1498,
    ShowVertBorder = 1499,
    ShowXMLTags = 1500,
    Shp = 1501,
    Si = 1502,
    SideWall = 1503,
    Signatureline = 1504,
    SimplePos = 1505,
    SingleXmlCell = 1506,
    SingleXmlCells = 1507,
    Size = 1508,
    SizeAuto = 1509,
    SizeRepresents = 1510,
    Skew = 1511,
    Sld = 1512,
    SldAll = 1513,
    SldId = 1514,
    SldIdLst = 1515,
    SldLayout = 1516,
    SldLayoutId = 1517,
    SldLayoutIdLst = 1518,
    SldLst = 1519,
    SldMaster = 1520,
    SldMasterId = 1521,
    SldMasterIdLst = 1522,
    SldRg = 1523,
    SldSyncPr = 1524,
    SldSz = 1525,
    Slicer = 1526,
    SlicerCache = 1527,
    SlicerCacheDefinition = 1528,
    SlicerCacheHideItemsWithNoData = 1529,
    SlicerCacheOlapLevelName = 1530,
    SlicerCachePivotTables = 1531,
    SlicerCaches = 1532,
    SlicerList = 1533,
    SlicerStyle = 1534,
    SlicerStyleElement = 1535,
    SlicerStyleElements = 1536,
    SlicerStyles = 1537,
    Slicers = 1538,
    SlideViewPr = 1539,
    SmallCaps = 1540,
    SmallFrac = 1541,
    SmartTag = 1542,
    SmartTagPr = 1543,
    SmartTagType = 1544,
    SmartTagTypes = 1545,
    SmartTags = 1546,
    Smooth = 1547,
    SnapToGrid = 1548,
    Snd = 1549,
    SndAc = 1550,
    SoftEdge = 1551,
    SoftHyphen = 1552,
    SolidFill = 1553,
    SortByTuple = 1554,
    SortCondition = 1555,
    SortState = 1556,
    SorterViewPr = 1557,
    Source = 1558,
    SourceConnection = 1559,
    SourceFileName = 1560,
    SourceType = 1561,
    Sources = 1562,
    Sp = 1563,
    Sp3d = 1564,
    SpAutoFit = 1565,
    SpcPct = 1566,
    SpcPts = 1567,
    SpDef = 1568,
    SpLocks = 1569,
    SpPr = 1570,
    SpTree = 1571,
    Spacing = 1572,
    Sparkline = 1573,
    SparklineGroup = 1574,
    SparklineGroups = 1575,
    Sparklines = 1576,
    SpcAft = 1577,
    SpcBef = 1578,
    SpecVanish = 1579,
    Split = 1580,
    SplitPos = 1581,
    SplitType = 1582,
    Sqref = 1583,
    Src = 1584,
    SrcRect = 1585,
    SrgbClr = 1586,
    Sst = 1587,
    St = 1588,
    StCondLst = 1589,
    StCxn = 1590,
    StandardNumber = 1591,
    Start = 1592,
    StartOverride = 1593,
    State = 1594,
    StateProvince = 1595,
    Station = 1596,
    Statistics = 1597,
    StockChart = 1598,
    Stop = 1599,
    Storage = 1600,
    StoreMappedDataAs = 1601,
    Stp = 1602,
    StrCache = 1603,
    StrDim = 1604,
    StrLit = 1605,
    StrRef = 1606,
    Stream = 1607,
    Stretch = 1608,
    StrictFirstAndLastChars = 1609,
    Strike = 1610,
    StrikeBLTR = 1611,
    StrikeH = 1612,
    StrikeTLBR = 1613,
    StrikeV = 1614,
    Strips = 1615,
    Stroke = 1616,
    Sty = 1617,
    Style = 1618,
    StyleClr = 1619,
    StyleData = 1620,
    StyleDef = 1621,
    StyleDefHdr = 1622,
    StyleDefHdrLst = 1623,
    StyleLbl = 1624,
    StyleLink = 1625,
    StyleLockQFSet = 1626,
    StyleLockTheme = 1627,
    StylePaneFormatFilter = 1628,
    StylePaneSortMethod = 1629,
    StyleSheet = 1630,
    Styles = 1631,
    Sub = 1632,
    SubDoc = 1633,
    SubHide = 1634,
    SubTnLst = 1635,
    Subtotals = 1636,
    SummaryLength = 1637,
    Sup = 1638,
    SupHide = 1639,
    SuppressAutoHyphens = 1640,
    SuppressLineNumbers = 1641,
    SuppressOverlap = 1642,
    Surface3DChart = 1643,
    SurfaceChart = 1644,
    Survey = 1645,
    SurveyPr = 1646,
    SwCell = 1647,
    Sx = 1648,
    Sy = 1649,
    Sym = 1650,
    Symbol = 1651,
    SysClr = 1652,
    Sz = 1653,
    SzCs = 1654,
    T = 1655,
    Tab = 1656,
    TabColor = 1657,
    TabLst = 1658,
    Table = 1659,
    TableColumn = 1660,
    TableColumns = 1661,
    TablePart = 1662,
    TableParts = 1663,
    TableSlicerCache = 1664,
    TableStyle = 1665,
    TableStyleElement = 1666,
    TableStyleId = 1667,
    TableStyleInfo = 1668,
    TableStyles = 1669,
    Tables = 1670,
    Tabs = 1671,
    Tag = 1672,
    TagLst = 1673,
    Tags = 1674,
    TailEnd = 1675,
    TargetScreenSz = 1676,
    Tav = 1677,
    TavLst = 1678,
    Tbl = 1679,
    TblBg = 1680,
    TblBorders = 1681,
    TblCellMar = 1682,
    TblCellSpacing = 1683,
    TblGrid = 1684,
    TblInd = 1685,
    TblLayout = 1686,
    TblLook = 1687,
    TblOverlap = 1688,
    TblPr = 1689,
    TblStyle = 1690,
    TblStyleColBandSize = 1691,
    TblStyleLst = 1692,
    TblStyleRowBandSize = 1693,
    TblW = 1694,
    TblpPr = 1695,
    Tc = 1696,
    TcBdr = 1697,
    TcBorders = 1698,
    TcFitText = 1699,
    TcMar = 1700,
    TcPr = 1701,
    TcStyle = 1702,
    TcTxStyle = 1703,
    TcW = 1704,
    Text = 1705,
    TextAlignment = 1706,
    TextDirection = 1707,
    TextField = 1708,
    TextFields = 1709,
    Textbox = 1710,
    TextboxTightWrap = 1711,
    Textdata = 1712,
    Textpath = 1713,
    TgtEl = 1714,
    Theater = 1715,
    Theme = 1716,
    ThemeElements = 1717,
    ThemeFontLang = 1718,
    ThemeManager = 1719,
    ThemeOverride = 1720,
    ThesisType = 1721,
    Thickness = 1722,
    TickLabels = 1723,
    TickLblPos = 1724,
    TickLblSkip = 1725,
    TickMarkSkip = 1726,
    Tile = 1727,
    TileRect = 1728,
    Timeline = 1729,
    TimelineCacheDefinition = 1730,
    TimelineCachePivotCaches = 1731,
    TimelineCacheRef = 1732,
    TimelineCacheRefs = 1733,
    TimelinePivotCacheDefinition = 1734,
    TimelinePivotFilter = 1735,
    TimelineRef = 1736,
    TimelineRefs = 1737,
    TimelineStyle = 1738,
    TimelineStyleElement = 1739,
    TimelineStyleElements = 1740,
    TimelineStyles = 1741,
    Timelines = 1742,
    Timing = 1743,
    Tint = 1744,
    Title = 1745,
    TitlePg = 1746,
    TitlePr = 1747,
    TitleStyle = 1748,
    Tl2br = 1749,
    Tmpl = 1750,
    TmplLst = 1751,
    TnLst = 1752,
    To = 1753,
    Top = 1754,
    TopLinePunct = 1755,
    TotalsRowFormula = 1756,
    Tp = 1757,
    Tpl = 1758,
    Tpls = 1759,
    Tr = 1760,
    Tr2bl = 1761,
    TrPr = 1762,
    TrackRevisions = 1763,
    Transition = 1764,
    Translator = 1765,
    Transp = 1766,
    Trendline = 1767,
    TrendlineLabel = 1768,
    TrendlineLbl = 1769,
    TrendlineType = 1770,
    TupleCache = 1771,
    TupleItem = 1772,
    TupleItems = 1773,
    TupleSet = 1774,
    TwoCellAnchor = 1775,
    Tx = 1776,
    TxBody = 1777,
    TxData = 1778,
    TxDef = 1779,
    TxEffectClrLst = 1780,
    TxFillClrLst = 1781,
    TxLinClrLst = 1782,
    TxPr = 1783,
    TxSp = 1784,
    TxStyles = 1785,
    TxbxContent = 1786,
    TxfldGUID = 1787,
    Type = 1788,
    U = 1789,
    UFill = 1790,
    UFillTx = 1791,
    ULn = 1792,
    ULnTx = 1793,
    Undo = 1794,
    URL = 1795,
    Udl = 1796,
    Ui1 = 1797,
    Ui2 = 1798,
    Ui4 = 1799,
    Ui8 = 1800,
    UiCompat97To2003 = 1801,
    Uint = 1802,
    UniqueTag = 1803,
    Units = 1804,
    UnitsLabel = 1805,
    Up = 1806,
    UpBar = 1807,
    UpBars = 1808,
    UpDownBars = 1809,
    UpdateFields = 1810,
    UseSpRect = 1811,
    UseXSLTWhenSaving = 1812,
    UserEdit = 1813,
    UserInfo = 1814,
    UserInterface = 1815,
    UserShapes = 1816,
    Users = 1817,
    V = 1818,
    VAlign = 1819,
    VMerge = 1820,
    Val = 1821,
    ValAx = 1822,
    ValScaling = 1823,
    Value = 1824,
    ValueAxis = 1825,
    ValueColorPositions = 1826,
    ValueColors = 1827,
    ValueMetadata = 1828,
    Values = 1829,
    Vanish = 1830,
    Variant = 1831,
    Variation = 1832,
    VaryColors = 1833,
    Vector = 1834,
    Version = 1835,
    VertAlign = 1836,
    VertJc = 1837,
    Vertical = 1838,
    VideoFile = 1839,
    View = 1840,
    View3D = 1841,
    ViewMergedData = 1842,
    ViewPr = 1843,
    Visibility = 1844,
    VolType = 1845,
    VolTypes = 1846,
    Volume = 1847,
    Vstream = 1848,
    W = 1849,
    WMode = 1850,
    Wall = 1851,
    WavAudioFile = 1852,
    WebExtension = 1853,
    WebExtensions = 1854,
    WebHidden = 1855,
    WebPr = 1856,
    WebPublishItem = 1857,
    WebPublishItems = 1858,
    WebPublishObject = 1859,
    WebPublishObjects = 1860,
    WebPublishing = 1861,
    WebSettings = 1862,
    Wedge = 1863,
    Wheel = 1864,
    Whole = 1865,
    WholeTbl = 1866,
    WidowControl = 1867,
    Wipe = 1868,
    Wireframe = 1869,
    WordWrap = 1870,
    Workbook = 1871,
    WorkbookPr = 1872,
    WorkbookProtection = 1873,
    WorkbookView = 1874,
    Worksheet = 1875,
    Wrap = 1876,
    WrapIndent = 1877,
    WrapNone = 1878,
    WrapPolygon = 1879,
    WrapRight = 1880,
    WrapSquare = 1881,
    WrapThrough = 1882,
    WrapTight = 1883,
    WrapTopAndBottom = 1884,
    WriteProtection = 1885,
    Writer = 1886,
    WsDr = 1887,
    X = 1888,
    XMode = 1889,
    XVal = 1890,
    Xf = 1891,
    Xfrm = 1892,
    XmlCellPr = 1893,
    XmlColumnPr = 1894,
    XmlPr = 1895,
    Y = 1896,
    YMode = 1897,
    YVal = 1898,
    Year = 1899,
    YearAccessed = 1900,
    YearLong = 1901,
    YearShort = 1902,
    ZeroAsc = 1903,
    ZeroDesc = 1904,
    ZeroWid = 1905,
    Zoom = 1906,
    Nf = 1907,
    ChartData = 1908,
    FmtOvrs = 1909,
    BinSize = 1910,
    BinCount = 1911,
    Number = 1912,
    Percent = 1913,
    ExtremeValue = 1914,
    PlotAreaRegion = 1915,
    Axis = 1916,
    Binary = 1917,
    Clear = 1918
}
/**
 * @hidden
 */
export declare let ElementPropertyIds_$type: Type;
/**
 * @hidden
 */
export declare const enum UnknownElementAction {
    Ignore = 0,
    CacheXml = 1,
    CacheStructure = 2,
    LoadChildrenNormally = 3
}
/**
 * @hidden
 */
export declare let UnknownElementAction_$type: Type;
/**
 * @hidden
 */
export declare const enum ShapeType {
    NotPrimitive = 0,
    Rectangle = 1,
    RoundRectangle = 2,
    Ellipse = 3,
    Diamond = 4,
    IsocelesTriangle = 5,
    RightTriangle = 6,
    Parallelogram = 7,
    Trapezoid = 8,
    Hexagon = 9,
    Octagon = 10,
    Plus = 11,
    Star = 12,
    Arrow = 13,
    ThickArrow = 14,
    HomePlate = 15,
    Cube = 16,
    Balloon = 17,
    Seal = 18,
    Arc = 19,
    Line = 20,
    Plaque = 21,
    Can = 22,
    Donut = 23,
    TextSimple = 24,
    TextOctagon = 25,
    TextHexagon = 26,
    TextCurve = 27,
    TextWave = 28,
    TextRing = 29,
    TextOnCurve = 30,
    TextOnRing = 31,
    StraightConnector1 = 32,
    BentConnector2 = 33,
    BentConnector3 = 34,
    BentConnector4 = 35,
    BentConnector5 = 36,
    CurvedConnector2 = 37,
    CurvedConnector3 = 38,
    CurvedConnector4 = 39,
    CurvedConnector5 = 40,
    Callout1 = 41,
    Callout2 = 42,
    Callout3 = 43,
    AccentCallout1 = 44,
    AccentCallout2 = 45,
    AccentCallout3 = 46,
    BorderCallout1 = 47,
    BorderCallout2 = 48,
    BorderCallout3 = 49,
    AccentBorderCallout1 = 50,
    AccentBorderCallout2 = 51,
    AccentBorderCallout3 = 52,
    Ribbon = 53,
    Ribbon2 = 54,
    Chevron = 55,
    Pentagon = 56,
    NoSmoking = 57,
    Seal8 = 58,
    Seal16 = 59,
    Seal32 = 60,
    WedgeRectCallout = 61,
    WedgeRRectCallout = 62,
    WedgeEllipseCallout = 63,
    Wave = 64,
    FoldedCorner = 65,
    LeftArrow = 66,
    DownArrow = 67,
    UpArrow = 68,
    LeftRightArrow = 69,
    UpDownArrow = 70,
    IrregularSeal1 = 71,
    IrregularSeal2 = 72,
    LightningBolt = 73,
    Heart = 74,
    PictureFrame = 75,
    QuadArrow = 76,
    LeftArrowCallout = 77,
    RightArrowCallout = 78,
    UpArrowCallout = 79,
    DownArrowCallout = 80,
    LeftRightArrowCallout = 81,
    UpDownArrowCallout = 82,
    QuadArrowCallout = 83,
    Bevel = 84,
    LeftBracket = 85,
    RightBracket = 86,
    LeftBrace = 87,
    RightBrace = 88,
    LeftUpArrow = 89,
    BentUpArrow = 90,
    BentArrow = 91,
    Seal24 = 92,
    StripedRightArrow = 93,
    NotchedRightArrow = 94,
    BlockArc = 95,
    SmileyFace = 96,
    VerticalScroll = 97,
    HorizontalScroll = 98,
    CircularArrow = 99,
    NotchedCircularArrow = 100,
    UturnArrow = 101,
    CurvedRightArrow = 102,
    CurvedLeftArrow = 103,
    CurvedUpArrow = 104,
    CurvedDownArrow = 105,
    CloudCallout = 106,
    EllipseRibbon = 107,
    EllipseRibbon2 = 108,
    FlowChartProcess = 109,
    FlowChartDecision = 110,
    FlowChartInputOutput = 111,
    FlowChartPredefinedProcess = 112,
    FlowChartInternalStorage = 113,
    FlowChartDocument = 114,
    FlowChartMultidocument = 115,
    FlowChartTerminator = 116,
    FlowChartPreparation = 117,
    FlowChartManualInput = 118,
    FlowChartManualOperation = 119,
    FlowChartConnector = 120,
    FlowChartPunchedCard = 121,
    FlowChartPunchedTape = 122,
    FlowChartSummingJunction = 123,
    FlowChartOr = 124,
    FlowChartCollate = 125,
    FlowChartSort = 126,
    FlowChartExtract = 127,
    FlowChartMerge = 128,
    FlowChartOfflineStorage = 129,
    FlowChartOnlineStorage = 130,
    FlowChartMagneticTape = 131,
    FlowChartMagneticDisk = 132,
    FlowChartMagneticDrum = 133,
    FlowChartDisplay = 134,
    FlowChartDelay = 135,
    TextPlainText = 136,
    TextStop = 137,
    TextTriangle = 138,
    TextTriangleInverted = 139,
    TextChevron = 140,
    TextChevronInverted = 141,
    TextRingInside = 142,
    TextRingOutside = 143,
    TextArchUpCurve = 144,
    TextArchDownCurve = 145,
    TextCircleCurve = 146,
    TextButtonCurve = 147,
    TextArchUpPour = 148,
    TextArchDownPour = 149,
    TextCirclePour = 150,
    TextButtonPour = 151,
    TextCurveUp = 152,
    TextCurveDown = 153,
    TextCascadeUp = 154,
    TextCascadeDown = 155,
    TextWave1 = 156,
    TextWave2 = 157,
    TextWave3 = 158,
    TextWave4 = 159,
    TextInflate = 160,
    TextDeflate = 161,
    TextInflateBottom = 162,
    TextDeflateBottom = 163,
    TextInflateTop = 164,
    TextDeflateTop = 165,
    TextDeflateInflate = 166,
    TextDeflateInflateDeflate = 167,
    TextFadeRight = 168,
    TextFadeLeft = 169,
    TextFadeUp = 170,
    TextFadeDown = 171,
    TextSlantUp = 172,
    TextSlantDown = 173,
    TextCanUp = 174,
    TextCanDown = 175,
    FlowChartAlternateProcess = 176,
    FlowChartOffpageConnector = 177,
    Callout90 = 178,
    AccentCallout90 = 179,
    BorderCallout90 = 180,
    AccentBorderCallout90 = 181,
    LeftRightUpArrow = 182,
    Sun = 183,
    Moon = 184,
    BracketPair = 185,
    BracePair = 186,
    Seal4 = 187,
    DoubleWave = 188,
    ActionButtonBlank = 189,
    ActionButtonHome = 190,
    ActionButtonHelp = 191,
    ActionButtonInformation = 192,
    ActionButtonForwardNext = 193,
    ActionButtonBackPrevious = 194,
    ActionButtonEnd = 195,
    ActionButtonBeginning = 196,
    ActionButtonReturn = 197,
    ActionButtonDocument = 198,
    ActionButtonSound = 199,
    ActionButtonMovie = 200,
    HostControl = 201,
    TextBox = 202
}
/**
 * @hidden
 */
export declare let ShapeType_$type: Type;
/**
 * @hidden
 */
export declare const enum OverwriteRoundTripDataResult {
    NothingWritten = 0,
    ElementStartWritten = 1,
    ElementAndDescendantsWritten = 2
}
/**
 * @hidden
 */
export declare let OverwriteRoundTripDataResult_$type: Type;
/**
 * @hidden
 */
export declare const enum OfficeApplication {
    Excel = 0,
    Word = 1,
    PowerPoint = 2
}
/**
 * @hidden
 */
export declare let OfficeApplication_$type: Type;
/**
 * @hidden
 */
export declare const enum State {
    Initial = 0,
    Markup = 1,
    EndTag = 2,
    Attr = 3,
    AttrValue = 4,
    Text = 5,
    PartialTag = 6,
    AutoClose = 7,
    CData = 8,
    PartialText = 9,
    PseudoStartTag = 10,
    Eof = 11
}
/**
 * @hidden
 */
export declare let State_$type: Type;
/**
 * @hidden
 */
export declare const enum CaseFolding {
    None = 0,
    ToUpper = 1,
    ToLower = 2
}
/**
 * @hidden
 */
export declare let CaseFolding_$type: Type;
/**
 * @hidden
 */
export declare const enum AttributePresence {
    DEFAULT = 0,
    FIXED = 1,
    REQUIRED = 2,
    IMPLIED = 3
}
/**
 * @hidden
 */
export declare let AttributePresence_$type: Type;
/**
 * @hidden
 */
export declare const enum AttributeType {
    DEFAULT = 0,
    CDATA = 1,
    ENTITY = 2,
    ENTITIES = 3,
    ID = 4,
    IDREF = 5,
    IDREFS = 6,
    NAME = 7,
    NAMES = 8,
    NMTOKEN = 9,
    NMTOKENS = 10,
    NUMBER = 11,
    NUMBERS = 12,
    NUTOKEN = 13,
    NUTOKENS = 14,
    NOTATION = 15,
    ENUMERATION = 16
}
/**
 * @hidden
 */
export declare let AttributeType_$type: Type;
/**
 * @hidden
 */
export declare const enum Occurrence {
    Required = 0,
    Optional = 1,
    ZeroOrMore = 2,
    OneOrMore = 3
}
/**
 * @hidden
 */
export declare let Occurrence_$type: Type;
/**
 * @hidden
 */
export declare const enum GroupType {
    None = 0,
    And = 1,
    Or = 2,
    Sequence = 3
}
/**
 * @hidden
 */
export declare let GroupType_$type: Type;
/**
 * @hidden
 */
export declare const enum DeclaredContent {
    Default = 0,
    CDATA = 1,
    RCDATA = 2,
    EMPTY = 3
}
/**
 * @hidden
 */
export declare let DeclaredContent_$type: Type;
/**
 * @hidden
 */
export declare const enum LiteralType {
    CDATA = 0,
    SDATA = 1,
    PI = 2
}
/**
 * @hidden
 */
export declare let LiteralType_$type: Type;
/**
 * @hidden
 */
export declare class Entity extends Base {
    static $t: Type;
    v: string;
    u: string;
    e: boolean;
    w: string;
    aa: string;
    t: string;
    c: LiteralType;
    b: Entity;
    d: boolean;
    n: number;
    j: string;
    g: boolean;
    private ab;
    private ad;
    private q;
    private h;
    private p;
    private m;
    constructor(a: number, b: string, c: string, d: string, e: string);
    constructor(a: number, b: string, c: string);
    constructor(a: number, b: string, c: Uri, d: TextReader, e: string);
    constructor(a: number, ..._rest: any[]);
    readonly ae: Uri;
    readonly o: number;
    k(): string;
    ak(a: Entity, b: Uri): void;
    ac(): Encoding;
    af(): void;
    l(): string;
    z(a: StringBuilder, b: string, c: boolean): string;
    x(a: StringBuilder, b: string): string;
    y(a: StringBuilder, b: string, c: string): string;
    s(): string;
    private static a;
    ag(a: string): void;
    ah(a: string, b: string): void;
    ai(a: string, b: number): void;
    aj(a: string, b: string): void;
    r(): string;
    static f(a: string): boolean;
    al(a: string): void;
}
/**
 * @hidden
 */
export declare class HtmlStream extends TextReader {
    static $t: Type;
    private _x;
    private _l;
    private _r;
    private _s;
    private _ah;
    private _ae;
    private _k;
    private _v;
    private _q;
    constructor(a: Stream, b: Encoding);
    readonly _ai: Encoding;
    private _w;
    _aj(): void;
    static _ad(a: number[], b: number, c: number): {
        ret: Decoder;
        p1?: number;
    };
    private _t;
    private _p;
    private _m;
    private _an;
    private _ab;
    private _z;
    private _aa;
    private _am;
    _af(): Decoder;
    _ag(): Decoder;
    _ac(): string;
    _al(): void;
    _ak(a: string): void;
    _y(): string;
    a(): number;
    b(): number;
    c(a: string[], b: number, c: number): number;
    d(a: string[], b: number, c: number): number;
    _u(a: string[], b: number, c: number): number;
    h(): string;
    protected dispose1(a: boolean): void;
}
/**
 * @hidden
 */
export declare abstract class Ucs4Decoder extends Decoder {
    static $t: Type;
    _g: number[];
    _j: number;
    a(a: number[], b: number, c: number): number;
    abstract _i(a: number[], b: number, c: number, d: string[], e: number): number;
    c(a: number[], b: number, c: number, d: string[], e: number): number;
    _h(a: number): string;
}
/**
 * @hidden
 */
export declare class Ucs4DecoderBigEngian extends Ucs4Decoder {
    static $t: Type;
    _i(a: number[], b: number, c: number, d: string[], e: number): number;
}
/**
 * @hidden
 */
export declare class Ucs4DecoderLittleEndian extends Ucs4Decoder {
    static $t: Type;
    _i(a: number[], b: number, c: number, d: string[], e: number): number;
}
/**
 * @hidden
 */
export declare class ElementDecl extends Base {
    static $t: Type;
    constructor(a: string, b: boolean, c: boolean, d: ContentModel, e: string[], f: string[]);
    i: string;
    h: boolean;
    g: boolean;
    e: ContentModel;
    b: string[];
    a: string[];
    d: AttList;
    c(a: string): AttDef;
    j(a: AttList): void;
    f(a: string, b: SgmlDtd): boolean;
}
/**
 * @hidden
 */
export declare class ContentModel extends Base {
    static $t: Type;
    a: DeclaredContent;
    d: number;
    b: Group;
    constructor();
    i(): void;
    e(): number;
    h(a: string): void;
    f(a: string): void;
    g(a: string): void;
    j(a: string): void;
    c(a: string, b: SgmlDtd): boolean;
}
/**
 * @hidden
 */
export declare class Group extends Base {
    static $t: Type;
    a: Group;
    g: List$1<any>;
    b: GroupType;
    c: Occurrence;
    e: boolean;
    readonly f: boolean;
    constructor(a: Group);
    i(a: Group): void;
    k(a: string): void;
    h(a: string): void;
    j(a: string): void;
    d(a: string, b: SgmlDtd): boolean;
}
/**
 * @hidden
 */
export declare class AttDef extends Base {
    static $t: Type;
    f: string;
    c: AttributeType;
    a: string[];
    e: string;
    b: AttributePresence;
    constructor(a: string);
    g(a: string): void;
    d(a: string): boolean;
}
/**
 * @hidden
 */
export declare class AttList extends Base implements IEnumerable {
    static $t: Type;
    private _b;
    constructor();
    _c(a: AttDef): void;
    _item(a: string): AttDef;
    getEnumeratorObject(): IEnumerator;
}
/**
 * @hidden
 */
export declare class SgmlDtd extends Base {
    static $t: Type;
    r: string;
    private m;
    private o;
    private n;
    private w;
    private e;
    private am;
    constructor(a: string, b: XmlNameTable);
    readonly an: XmlNameTable;
    static j(a: Uri, b: string, c: string, d: string, e: string, f: string, g: XmlNameTable): SgmlDtd;
    static i(a: Uri, b: string, c: string, d: TextReader, e: string, f: string, g: XmlNameTable): SgmlDtd;
    f(a: string): Entity;
    d(a: string): ElementDecl;
    private al;
    private ak;
    private x;
    private ah;
    private l;
    private k;
    private ag;
    private af;
    private ae;
    private u;
    private h;
    private g;
    private static v;
    private ad;
    private ac;
    private static s;
    private a;
    private aj;
    private static q;
    private c;
    private static p;
    private ai;
    private z;
    private static t;
    private aa;
    private b;
    private ab;
    private y;
}
/**
 * @hidden
 */
export declare class StringUtilitiesSgml extends Base {
    static $t: Type;
    static a(a: string, b: string): boolean;
}
/**
 * @hidden
 */
export declare class HWStack extends Base {
    static $t: Type;
    private a;
    private e;
    private b;
    private d;
    constructor(a: number);
    c: number;
    readonly f: number;
    item(a: number, b?: any): any;
    h(): any;
    i(): any;
    j(a: number): void;
}
/**
 * @hidden
 */
export declare class Attribute extends Base {
    static $t: Type;
    e: string;
    a: AttDef;
    c: string;
    d: string;
    g(a: string, b: string, c: string): void;
    f: string;
    readonly b: boolean;
}
/**
 * @hidden
 */
export declare class Node extends Base {
    static $t: Type;
    p: XmlNodeType;
    k: string;
    q: XmlSpace;
    l: string;
    f: boolean;
    j: string;
    c: ElementDecl;
    e: State;
    g: boolean;
    private d;
    o(a: string, b: XmlNodeType, c: string): void;
    a(a: string, b: string, c: string, d: boolean): Attribute;
    n(a: string): void;
    m(a: Node): void;
    readonly h: number;
    i(a: string): number;
    b(a: number): Attribute;
}
/**
 * @hidden
 */
export declare class SgmlReader extends XmlReader {
    static $t: Type;
    private _bk;
    private _bc;
    private _bm;
    private _dh;
    private _b2;
    private _ca;
    private _be;
    private _bg;
    private _a9;
    private _b3;
    private _c0;
    private _cz;
    private _cy;
    private _b9;
    private _bn;
    private _bf;
    private _b4;
    private _b5;
    private _bo;
    private _cp;
    private _ci;
    private _bd;
    private _cm;
    private _b6;
    private _ct;
    private _cn;
    private _cs;
    private _cf;
    private _de;
    private _bb;
    private _b0;
    private _dg;
    constructor();
    _bl: SgmlDtd;
    private _c3;
    _cg: string;
    _co: string;
    _cu: string;
    _ck: string;
    _b7: TextReader;
    _cw: string;
    _c9(a: string): void;
    _cj: string;
    _b1: boolean;
    _ba: CaseFolding;
    _b8: TextWriter;
    private _c4;
    private _c5;
    private c2;
    private _bi;
    private _da;
    private _bh;
    private _c8;
    private _bj;
    protected get_a7(): XmlNodeType;
    readonly a7: XmlNodeType;
    protected get_ai(): string;
    readonly ai: string;
    protected get_ag(): string;
    readonly ag: string;
    protected get_aj(): string;
    readonly aj: string;
    protected get_ak(): string;
    readonly ak: string;
    protected get_f(): boolean;
    readonly f: boolean;
    protected get_ar(): string;
    readonly ar: string;
    protected get_x(): number;
    readonly x: number;
    protected get_z(): string;
    readonly z: string;
    protected get_i(): boolean;
    readonly i: boolean;
    protected get_h(): boolean;
    readonly h: boolean;
    protected get_v(): string;
    readonly v: string;
    protected get_a8(): XmlSpace;
    readonly a8: XmlSpace;
    protected get_as(): string;
    readonly as: string;
    _df: WhitespaceHandling;
    protected get_w(): number;
    readonly w: number;
    ab(a: string): string;
    ac(a: string, b: string): string;
    aa(a: number): string;
    item(a: number): string;
    item1(a: string): string;
    item2(a: string, b: string): string;
    o(a: string): boolean;
    p(a: string, b: string): boolean;
    aw(a: number): void;
    r(): boolean;
    s(): boolean;
    q(): boolean;
    private readonly _bp;
    _cx(): Encoding;
    private _c6;
    t(): boolean;
    private _bv;
    private static _ce;
    private _by;
    private _cr;
    private static _cv;
    private static _cb;
    private static _cc;
    private _bx;
    private _bu;
    private _bq;
    private _bs;
    private static _cd;
    private _bt;
    private static _ch;
    private _c7;
    private static _cl;
    private _bw;
    private _bz;
    _cq(a: StringBuilder, b: string): string;
    private _br;
    private _c1;
    protected get_d(): boolean;
    readonly d: boolean;
    au(): void;
    protected disposeCore(a: boolean): void;
    protected get_a3(): ReadState;
    readonly a3: ReadState;
    aq(): string;
    ao(): string;
    ap(): string;
    protected get_a5(): XmlNameTable;
    readonly a5: XmlNameTable;
    ah(a: string): string;
    a1(): void;
    u(): boolean;
    private _db;
    private _dc;
    private _dd;
}
/**
 * @hidden
 */
export declare class OverrideContentTypePart extends Base implements IPackagePart {
    static $t: Type;
    private readonly b;
    private readonly a;
    constructor(a: IPackagePart, b: string);
    readonly $package: IPackage;
    readonly uri: Uri;
    readonly contentType: string;
    getStream(a: FileMode, b: FileAccess): WorkItem$1<Stream>;
    createRelationship(a: Uri, b: RelationshipTargetMode, c: string, d: string): IPackageRelationship;
    getRelationships(): IEnumerable$1<IPackageRelationship>;
    getRelationship(a: string): IPackageRelationship;
}
/**
 * @hidden
 */
export interface IZipFile {
    load(stream: string | Uint8Array): WorkItem$1<IZipFile>;
    _load$i(a: Stream): WorkItem$1<IZipFile>;
    save(stream: string | Uint8Array): WorkItem;
    _save$i(a: Stream): WorkItem;
    readonly entries: List$1<IZipEntry>;
    createFile(fileName: string, directoryName: string, stream: string | Uint8Array): IZipEntry;
    _createFile$i(a: string, b: string, c: Stream): IZipEntry;
}
/**
 * @hidden
 */
export declare let IZipFile_$type: Type;
/**
 * @hidden
 */
export interface IZipEntry {
    readonly name: string;
    readonly isDirectory: boolean;
    openReader(): WorkItem$1<Stream>;
}
/**
 * @hidden
 */
export declare let IZipEntry_$type: Type;
/**
 * @hidden
 */
export declare class InvalidPackage extends Base implements IPackage {
    static $t: Type;
    createPart(a: Uri, b: string): IPackagePart;
    createRelationship(a: Uri, b: RelationshipTargetMode, c: string, d: string): IPackageRelationship;
    dispose(): void;
    getPart(a: Uri): IPackagePart;
    getParts(): IEnumerable$1<IPackagePart>;
    getRelationship(a: string): IPackageRelationship;
    getRelationships(): IEnumerable$1<IPackageRelationship>;
    partExists(a: Uri): boolean;
}
/**
 * @hidden
 */
export declare class ZipFile extends Base implements IZipFile {
    static $t: Type;
    private a;
    private b;
    constructor();
    createFile(fileName: string, directoryName: string, stream: string | Uint8Array): IZipEntry;
    _createFile$i(a: string, b: string, c: Stream): IZipEntry;
    load(stream: string | Uint8Array): WorkItem$1<IZipFile>;
    _load$i(a: Stream): WorkItem$1<IZipFile>;
    readonly entries: List$1<IZipEntry>;
    save(stream: string | Uint8Array): WorkItem;
    _save$i(a: Stream): WorkItem;
}
/**
 * @hidden
 */
export declare class ZipEntry extends Base implements IZipEntry {
    static $t: Type;
    readonly c: any;
    readonly b: Stream;
    private _name;
    name: string;
    private _isDirectory;
    isDirectory: boolean;
    constructor(a: number, b: any);
    constructor(a: number, b: string, c: Stream);
    constructor(a: number, ..._rest: any[]);
    static a(a: string, b: string, c: Stream): ZipEntry;
    openReader(): WorkItem$1<Stream>;
}
/**
 * @hidden
 */
export declare class PackagePartExposedStream extends Stream {
    static $t: Type;
    private _o;
    constructor(a: Stream);
    protected get_canRead(): boolean;
    readonly canRead: boolean;
    protected get_canSeek(): boolean;
    readonly canSeek: boolean;
    protected get_canWrite(): boolean;
    readonly canWrite: boolean;
    flush(): void;
    protected get_length(): number;
    readonly length: number;
    protected get_position(): number;
    protected set_position(a: number): void;
    position: number;
    read(a: number[], b: number, c: number): number;
    seek(a: number, b: SeekOrigin): number;
    setLength(a: number): void;
    write(a: number[], b: number, c: number): void;
}
/**
 * @hidden
 */
export declare class PackageRelationship extends Base implements IPackageRelationship {
    static $t: Type;
    constructor(a: number, b: Uri, c: RelationshipTargetMode, d: string, e: string);
    constructor(a: number, b: Uri, c: Uri, d: RelationshipTargetMode, e: string, f: string);
    constructor(a: number, ..._rest: any[]);
    private _sourceUri;
    sourceUri: Uri;
    private _targetUri;
    protected get_targetUri(): Uri;
    protected set_targetUri(a: Uri): void;
    targetUri: Uri;
    private _id;
    id: string;
    private _relationshipType;
    relationshipType: string;
    private _targetMode;
    targetMode: RelationshipTargetMode;
}
/**
 * @hidden
 */
export declare class InvalidTargetPackageRelationship extends PackageRelationship implements IInvalidPackageRelationshipTarget {
    static $t: Type;
    constructor(a: Uri, b: string, c: RelationshipTargetMode, d: string, e: string);
    protected get_targetUri(): Uri;
    protected set_targetUri(a: Uri): void;
    private _targetString;
    targetString: string;
}
/**
 * @hidden
 */
export declare class PackagePart extends Base implements IPackagePart, IPackagePartEx {
    static $t: Type;
    f: Stream;
    private d;
    constructor(a: IPackage, b: Uri, c: string);
    private _$package;
    $package: IPackage;
    private _uri;
    uri: Uri;
    private _contentType;
    contentType: string;
    b: IZipEntry;
    getStream(a: FileMode, b: FileAccess): WorkItem$1<Stream>;
    createRelationship(a: Uri, b: RelationshipTargetMode, c: string, d: string): IPackageRelationship;
    createExternalRelationship(a: string, b: string, c: string): IPackageRelationship;
    private a;
    getRelationships(): IEnumerable$1<IPackageRelationship>;
    getRelationship(a: string): IPackageRelationship;
    readonly e: IEnumerable$1<IPackageRelationship>;
    c(): WorkItem;
    private j;
}
/**
 * @hidden
 */
export declare class Package extends Base implements IPackage {
    static $t: Type;
    private static readonly _v;
    private _i;
    private _j;
    private _s;
    private _t;
    private _r;
    private readonly _m;
    private _p;
    private _k;
    _l: Dictionary$2<string, string>;
    constructor();
    readonly _o: IEnumerable$1<IPackageRelationship>;
    readonly _n: IDictionary$2<string, PackagePart>;
    _q: FileMode;
    _c: IZipFile;
    _b: IZipEntry;
    _a: IZipEntry;
    _h: WorkItem;
    static _d(a: Stream, b: FileMode): WorkItem$1<IPackage>;
    static _e(a: Stream, b: FileMode, c: IZipFile): WorkItem$1<IPackage>;
    createPart(a: Uri, b: string): IPackagePart;
    createRelationship(a: Uri, b: RelationshipTargetMode, c: string, d: string): IPackageRelationship;
    getRelationships(): IEnumerable$1<IPackageRelationship>;
    getPart(a: Uri): IPackagePart;
    getParts(): IEnumerable$1<IPackagePart>;
    getRelationship(a: string): IPackageRelationship;
    private _aa;
    private _f;
    private _g;
    partExists(a: Uri): boolean;
    dispose(): void;
    private _ah;
    private _ai;
}
/**
 * @hidden
 */
export declare class PackageFactory extends Base implements IPackageFactory {
    static $t: Type;
    open(stream: string | Uint8Array, packageMode: FileMode): WorkItem$1<IPackage>;
    _open$i(a: Stream, b: FileMode): WorkItem$1<IPackage>;
}
/**
 * @hidden
 */
export declare class ContentTypesWriter extends Base {
    static $t: Type;
    private static readonly d;
    private static readonly b;
    private static k;
    private static l;
    static j(a: Package, b: Stream): void;
}
/**
 * @hidden
 */
export declare class RelationshipsWriter extends Base {
    static $t: Type;
    private static readonly c;
    private static readonly a;
    static j(a: IEnumerable$1<IPackageRelationship>, b: Stream): void;
}
/**
 * @hidden
 */
export declare class DocCoreExtensions extends Base {
    static $t: Type;
    static fixDirectoryPath(a: string): string;
}
/**
 * @hidden
 */
export declare class PackageUtilities extends Base {
    static $t: Type;
    private static z;
    private static ab;
    private static ad;
    private static x;
    private static v;
    static j(a: string, b: string): string;
    static ag(a: Uri, b: Uri): Uri;
    static a(a: Stream, b: boolean): WorkItem$1<IPackage>;
    static k(a: Date): string;
    static m(a: string): string;
    static n(a: string): string;
    static ah(a: Uri): Uri;
    static o(a: string): string;
    static e(a: string): number;
    static ai(a: Uri, b: Uri): Uri;
    static aj(a: Uri, b: Uri, c: string): Uri;
    static p(a: string, b: string): string;
    static q(a: string, b: string, c: string, d: boolean): string;
    static g(a: string): List$1<string>;
    static h(a: string, b: string): List$1<string>;
    static ak(a: IPackageRelationship): Uri;
    static b(a: string): boolean;
    static c(a: Uri): boolean;
    static d(a: string): boolean;
    static i(a: string): Date;
    static readonly aa: Regex;
    static readonly ac: Regex;
    static readonly ae: Regex;
    static readonly y: Regex;
    static readonly w: Regex;
    static al(a: string): void;
}
/**
 * @hidden
 */
export declare class AlternateContentChoice extends Base {
    static $t: Type;
    a: () => void;
    b: IEnumerable$1<XmlNamespaceDefinitionBase>;
    constructor(a: number, b: XmlNamespaceDefinitionBase, c: () => void);
    constructor(a: number, b: IEnumerable$1<XmlNamespaceDefinitionBase>, c: () => void);
    constructor(a: number, ..._rest: any[]);
}
/**
 * @hidden
 */
export declare class AttributeValue extends ValueType {
    static $t: Type;
    constructor(a: number, b: string, c: string, d: string, e: string);
    constructor(a: number, b: QualifiedNameInfo, c: string);
    constructor();
    constructor(a: number, ..._rest: any[]);
    a: QualifiedNameInfo;
    d: string;
    toString(): string;
    e(a: string, b: string, c: string, d: string): void;
    readonly b: boolean;
    readonly c: boolean;
}
/**
 * @hidden
 */
export declare class CT_GraphicalObject extends Base {
    static $t: Type;
    a: CT_GraphicalObjectData;
}
/**
 * @hidden
 */
export interface IGraphicalObjectContent {
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IGraphicalObjectContentVisitor$2<TArg, TResult>, b: TArg): TResult;
    getStrictElementName(a: OfficeDocumentManager): string;
}
/**
 * @hidden
 */
export declare let IGraphicalObjectContent_$type: Type;
/**
 * @hidden
 */
export declare class AlternateGraphicalObjectContent extends Base implements IGraphicalObjectContent {
    static $t: Type;
    b: List$1<Tuple$2<XmlNamespaceDefinitionBase[], IGraphicalObjectContent>>;
    a: IGraphicalObjectContent;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IGraphicalObjectContentVisitor$2<TArg, TResult>, b: TArg): TResult;
    getStrictElementName(a: OfficeDocumentManager): string;
}
/**
 * @hidden
 */
export declare class CT_AdjustHandleList extends Base {
    static $t: Type;
    private a;
    readonly b: List$1<IAdjustHandle>;
}
/**
 * @hidden
 */
export declare class CT_AdjPoint2D extends Base {
    static $t: Type;
    a: ST_AdjCoordinate;
    b: ST_AdjCoordinate;
    c(a: XmlPartManagerBase, b: string): void;
    private static d;
}
/**
 * @hidden
 */
export declare class CT_Angle extends Base {
    static $t: Type;
    a: ST_Angle;
}
/**
 * @hidden
 */
export declare class CT_Blip extends Base {
    static $t: Type;
    a: Nullable$1<ST_BlipCompression>;
    b: string;
    c: string;
}
/**
 * @hidden
 */
export declare class CT_BlipFillPropertiesBase extends Base {
    static $t: Type;
    b: Nullable$1<number>;
    c: Nullable$1<boolean>;
    a: CT_RelativeRect;
}
/**
 * @hidden
 */
export interface IEG_FillProperties {
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_FillPropertiesVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare let IEG_FillProperties_$type: Type;
/**
 * @hidden
 */
export declare class CT_BlipFillProperties extends CT_BlipFillPropertiesBase implements IEG_FillProperties {
    static $t: Type;
    d: CT_Blip;
    e: IEG_FillModeProperties;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_FillPropertiesVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class CT_Color extends Base {
    static $t: Type;
    a: EG_ColorChoice;
}
/**
 * @hidden
 */
export declare class CT_ComplementTransform extends Base {
    static $t: Type;
}
/**
 * @hidden
 */
export declare class CT_Connection extends Base {
    static $t: Type;
    a: number;
    b: number;
}
/**
 * @hidden
 */
export declare class CT_ConnectionSite extends Base {
    static $t: Type;
    a: CT_AdjPoint2D;
    b: ST_AdjAngle;
}
/**
 * @hidden
 */
export declare class CT_ConnectionSiteList extends Base {
    static $t: Type;
    private a;
    readonly b: List$1<CT_ConnectionSite>;
}
/**
 * @hidden
 */
export interface ICT_ShapePropertiesOwner {
    spPr: CT_ShapeProperties;
}
/**
 * @hidden
 */
export declare let ICT_ShapePropertiesOwner_$type: Type;
/**
 * @hidden
 */
export interface ICT_ShapeStyleOwner {
    style: CT_ShapeStyle;
}
/**
 * @hidden
 */
export declare let ICT_ShapeStyleOwner_$type: Type;
/**
 * @hidden
 */
export declare class CT_Connector extends Base implements IGraphicalObjectContent, ICT_ShapePropertiesOwner, ICT_ShapeStyleOwner {
    static $t: Type;
    b: boolean;
    c: string;
    a: CT_ConnectorNonVisual;
    private _spPr;
    spPr: CT_ShapeProperties;
    private _style;
    style: CT_ShapeStyle;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IGraphicalObjectContentVisitor$2<TArg, TResult>, b: TArg): TResult;
    getStrictElementName(a: OfficeDocumentManager): string;
}
/**
 * @hidden
 */
export declare class CT_ConnectorLocking extends Base {
    static $t: Type;
    f: boolean;
    j: boolean;
    i: boolean;
    c: boolean;
    g: boolean;
    h: boolean;
    e: boolean;
    a: boolean;
    b: boolean;
    d: boolean;
}
/**
 * @hidden
 */
export declare abstract class CT_NonVisualBase extends Base {
    static $t: Type;
    a: CT_NonVisualDrawingProps;
}
/**
 * @hidden
 */
export declare class CT_ConnectorNonVisual extends CT_NonVisualBase {
    static $t: Type;
    b: CT_NonVisualConnectorProperties;
}
/**
 * @hidden
 */
export interface IEG_Geometry {
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_GeometryVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare let IEG_Geometry_$type: Type;
/**
 * @hidden
 */
export declare class CT_CustomGeometry2D extends Base implements IEG_Geometry {
    static $t: Type;
    c: CT_GeomGuideList;
    d: CT_GeomGuideList;
    a: CT_AdjustHandleList;
    b: CT_ConnectionSiteList;
    e: CT_GeomRect;
    f: CT_Path2DList;
    g: string;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_GeometryVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class CT_DashStop extends Base {
    static $t: Type;
    a: ST_PositivePercentage;
    b: ST_PositivePercentage;
}
/**
 * @hidden
 */
export interface IEG_LineDashProperties {
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_LineDashPropertiesVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare let IEG_LineDashProperties_$type: Type;
/**
 * @hidden
 */
export declare class CT_DashStopList extends Base implements IEG_LineDashProperties {
    static $t: Type;
    private a;
    readonly b: List$1<CT_DashStop>;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_LineDashPropertiesVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class CT_EmbeddedWAVAudioFile extends Base {
    static $t: Type;
    static a: boolean;
    constructor();
    c: string;
    d: string;
    b: Nullable$1<boolean>;
}
/**
 * @hidden
 */
export declare class CT_FixedPercentage extends Base {
    static $t: Type;
    a: ST_FixedPercentage;
}
/**
 * @hidden
 */
export declare class CT_FontReference extends Base {
    static $t: Type;
    a: EG_ColorChoice;
    b: ST_FontCollectionIndex;
}
/**
 * @hidden
 */
export declare class CT_GeomGuide extends Base {
    static $t: Type;
    a: string;
    b: string;
    static c(a: XmlPartManagerBase, b: string, c: string): {
        p1: string;
        p2: string;
    };
}
/**
 * @hidden
 */
export declare class CT_GeomGuideList extends Base {
    static $t: Type;
    private a;
    readonly b: List$1<CT_GeomGuide>;
}
/**
 * @hidden
 */
export declare class CT_GeomRect extends Base {
    static $t: Type;
    b: ST_AdjCoordinate;
    d: ST_AdjCoordinate;
    c: ST_AdjCoordinate;
    a: ST_AdjCoordinate;
}
/**
 * @hidden
 */
export interface IShapesOwner {
    addShape(a: OfficeDocumentManager, b: IGraphicalObjectContent): void;
}
/**
 * @hidden
 */
export declare let IShapesOwner_$type: Type;
/**
 * @hidden
 */
export declare class CT_GraphicalObjectData extends Base implements IShapesOwner {
    static $t: Type;
    private a;
    b: List$1<Tuple$2<string, any>>;
    c: string;
    addShape(a: OfficeDocumentManager, b: IGraphicalObjectContent): void;
}
/**
 * @hidden
 */
export declare class CT_GraphicalObjectFrame extends Base implements IGraphicalObjectContent {
    static $t: Type;
    d: boolean;
    a: CT_GraphicalObject;
    e: string;
    b: CT_GraphicalObjectFrameNonVisual;
    c: CT_Transform2D;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IGraphicalObjectContentVisitor$2<TArg, TResult>, b: TArg): TResult;
    getStrictElementName(a: OfficeDocumentManager): string;
}
/**
 * @hidden
 */
export declare class CT_GraphicalObjectFrameLocking extends Base {
    static $t: Type;
    c: boolean;
    b: boolean;
    f: boolean;
    a: boolean;
    d: boolean;
    e: boolean;
}
/**
 * @hidden
 */
export declare class CT_GraphicalObjectFrameNonVisual extends CT_NonVisualBase {
    static $t: Type;
    b: CT_NonVisualGraphicFrameProperties;
}
/**
 * @hidden
 */
export declare class CT_GrayscaleTransform extends Base {
    static $t: Type;
}
/**
 * @hidden
 */
export interface ISaveToXLSX {
    readonly elementName: string;
    saveX(a: XmlPartManagerBase, b: XmlWriteManager, c: string, d: any): void;
}
/**
 * @hidden
 */
export declare let ISaveToXLSX_$type: Type;
/**
 * @hidden
 */
export declare class CT_GroupFillProperties extends Base implements IEG_FillProperties, ISaveToXLSX {
    static $t: Type;
    readonly elementName: string;
    saveX(a: XmlPartManagerBase, b: XmlWriteManager, c: string, d: any): void;
    a: ISaveToXLSX;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_FillPropertiesVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class CT_GroupLocking extends Base {
    static $t: Type;
    b: boolean;
    g: boolean;
    f: boolean;
    e: boolean;
    a: boolean;
    c: boolean;
    d: boolean;
}
/**
 * @hidden
 */
export declare class CT_GroupShape extends Base implements IGraphicalObjectContent, IShapesOwner {
    static $t: Type;
    b: CT_GroupShapeProperties;
    a: CT_GroupShapeNonVisual;
    private c;
    readonly d: List$1<IGraphicalObjectContent>;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IGraphicalObjectContentVisitor$2<TArg, TResult>, b: TArg): TResult;
    getStrictElementName(a: OfficeDocumentManager): string;
    addShape(a: OfficeDocumentManager, b: IGraphicalObjectContent): void;
}
/**
 * @hidden
 */
export declare class CT_GroupShapeNonVisual extends CT_NonVisualBase {
    static $t: Type;
    b: CT_NonVisualGroupDrawingShapeProps;
}
/**
 * @hidden
 */
export declare abstract class CT_ShapePropertiesBase extends Base {
    static $t: Type;
    b: Nullable$1<ST_BlackWhiteMode>;
    a: IEG_FillProperties;
}
/**
 * @hidden
 */
export declare class CT_GroupShapeProperties extends CT_ShapePropertiesBase {
    static $t: Type;
    c: CT_GroupTransform2D;
}
/**
 * @hidden
 */
export interface ISupportSetProperty {
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare let ISupportSetProperty_$type: Type;
/**
 * @hidden
 */
export declare class CT_Hyperlink extends Base implements ISupportSetProperty {
    static $t: Type;
    constructor();
    f: string;
    b: Nullable$1<boolean>;
    c: Nullable$1<boolean>;
    d: Nullable$1<boolean>;
    g: string;
    h: string;
    a: CT_EmbeddedWAVAudioFile;
    i: string;
    j: string;
    e: any;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class CT_InverseTransform extends Base {
    static $t: Type;
}
/**
 * @hidden
 */
export declare class CT_LineEndProperties extends Base {
    static $t: Type;
    a: Nullable$1<ST_LineEndLength>;
    b: Nullable$1<ST_LineEndType>;
    c: Nullable$1<ST_LineEndWidth>;
}
/**
 * @hidden
 */
export interface IEG_LineJoinProperties {
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_LineJoinPropertiesVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare let IEG_LineJoinProperties_$type: Type;
/**
 * @hidden
 */
export declare class CT_LineJoinBevel extends Base implements IEG_LineJoinProperties {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_LineJoinPropertiesVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class ST_PositivePercentage extends ValueType {
    static $t: Type;
    constructor(a: number, b: ST_Percentage);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly a;
    equals(a: any): boolean;
    getHashCode(): number;
    toString(): string;
    s(a: ST_ConformanceClass): string;
    static f(a: string, b: ST_ConformanceClass): ST_PositivePercentage;
    static r(a: string, b: ST_ConformanceClass): Nullable$1<ST_PositivePercentage>;
    static g(a: ST_PositivePercentage, b: ST_PositivePercentage): boolean;
    static h(a: Nullable$1<ST_PositivePercentage>, b: Nullable$1<ST_PositivePercentage>): boolean;
    static i(a: ST_PositivePercentage, b: ST_PositivePercentage): boolean;
    static j(a: Nullable$1<ST_PositivePercentage>, b: Nullable$1<ST_PositivePercentage>): boolean;
    static d(a: ST_Percentage): ST_PositivePercentage;
    static q(a: Nullable$1<ST_Percentage>): Nullable$1<ST_PositivePercentage>;
    static b(a: ST_PositivePercentage): ST_Percentage;
    static p(a: Nullable$1<ST_PositivePercentage>): Nullable$1<ST_Percentage>;
    static m(a: ST_PositivePercentage): number;
    static o(a: Nullable$1<ST_PositivePercentage>): Nullable$1<number>;
}
/**
 * @hidden
 */
export declare class CT_LineJoinMiterProperties extends Base implements IEG_LineJoinProperties {
    static $t: Type;
    a: Nullable$1<ST_PositivePercentage>;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_LineJoinPropertiesVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class CT_LineJoinRound extends Base implements IEG_LineJoinProperties {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_LineJoinPropertiesVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class ST_LineWidth extends ValueType {
    static $t: Type;
    constructor(a: number, b: ST_Coordinate32Unqualified);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly a;
    equals(a: any): boolean;
    getHashCode(): number;
    toString(): string;
    static f(a: string): ST_LineWidth;
    static t(a: string): Nullable$1<ST_LineWidth>;
    static g(a: ST_LineWidth, b: ST_LineWidth): boolean;
    static h(a: Nullable$1<ST_LineWidth>, b: Nullable$1<ST_LineWidth>): boolean;
    static i(a: ST_LineWidth, b: ST_LineWidth): boolean;
    static j(a: Nullable$1<ST_LineWidth>, b: Nullable$1<ST_LineWidth>): boolean;
    static d(a: ST_Coordinate32Unqualified): ST_LineWidth;
    static s(a: Nullable$1<ST_Coordinate32Unqualified>): Nullable$1<ST_LineWidth>;
    static b(a: ST_LineWidth): ST_Coordinate32Unqualified;
    static r(a: Nullable$1<ST_LineWidth>): Nullable$1<ST_Coordinate32Unqualified>;
    static m(a: ST_LineWidth): number;
    static q(a: Nullable$1<ST_LineWidth>): Nullable$1<number>;
}
/**
 * @hidden
 */
export declare class CT_LinePropertiesBase extends Base {
    static $t: Type;
    e: Nullable$1<ST_PenAlignment>;
    f: Nullable$1<ST_LineCap>;
    g: Nullable$1<ST_CompoundLine>;
    a: CT_LineEndProperties;
    c: IEG_LineDashProperties;
    d: IEG_LineJoinProperties;
    b: CT_LineEndProperties;
    h: Nullable$1<ST_LineWidth>;
}
/**
 * @hidden
 */
export declare class CT_LineProperties extends CT_LinePropertiesBase {
    static $t: Type;
    i: IEG_LineFillProperties;
}
/**
 * @hidden
 */
export interface IEG_LineFillProperties {
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_LineFillPropertiesVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare let IEG_LineFillProperties_$type: Type;
/**
 * @hidden
 */
export declare class CT_NoFillProperties extends Base implements IEG_FillProperties, IEG_LineFillProperties, ISaveToXLSX {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_FillPropertiesVisitor$2<TArg, TResult>, b: TArg): TResult;
    _accept$21$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_LineFillPropertiesVisitor$2<TArg, TResult>, b: TArg): TResult;
    readonly elementName: string;
    saveX(a: XmlPartManagerBase, b: XmlWriteManager, c: string, d: any): void;
}
/**
 * @hidden
 */
export declare class CT_NonVisualConnectorProperties extends Base {
    static $t: Type;
    c: CT_ConnectorLocking;
    a: CT_Connection;
    b: CT_Connection;
}
/**
 * @hidden
 */
export declare class CT_NonVisualDrawingProps extends Base {
    static $t: Type;
    e: string;
    d: boolean;
    a: CT_Hyperlink;
    b: CT_Hyperlink;
    c: ST_DrawingElementId;
    f: string;
    g: string;
}
/**
 * @hidden
 */
export declare class CT_NonVisualGraphicFrameProperties extends Base {
    static $t: Type;
    a: CT_GraphicalObjectFrameLocking;
}
/**
 * @hidden
 */
export declare class CT_NonVisualGroupDrawingShapeProps extends Base {
    static $t: Type;
    a: CT_GroupLocking;
}
/**
 * @hidden
 */
export declare class CT_NonVisualPictureProperties extends Base {
    static $t: Type;
    constructor();
    a: CT_PictureLocking;
    b: boolean;
}
/**
 * @hidden
 */
export declare class CT_NonVisualDrawingShapeProps extends Base {
    static $t: Type;
    a: CT_ShapeLocking;
    b: boolean;
}
/**
 * @hidden
 */
export declare class CT_Path2D extends Base {
    static $t: Type;
    private a;
    readonly b: List$1<IPath2DCommand>;
    g: Nullable$1<ST_PositiveCoordinate>;
    e: Nullable$1<ST_PositiveCoordinate>;
    d: Nullable$1<ST_PathFillMode>;
    f: Nullable$1<boolean>;
    c: Nullable$1<boolean>;
}
/**
 * @hidden
 */
export interface IPath2DCommand {
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IPath2DCommandVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare let IPath2DCommand_$type: Type;
/**
 * @hidden
 */
export declare class CT_Path2DArcTo extends Base implements IPath2DCommand, ISaveToXLSX {
    static $t: Type;
    d: ST_AdjCoordinate;
    c: ST_AdjCoordinate;
    a: ST_AdjAngle;
    b: ST_AdjAngle;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IPath2DCommandVisitor$2<TArg, TResult>, b?: TArg): TResult;
    readonly elementName: string;
    saveX(a: XmlPartManagerBase, b: XmlWriteManager, c: string, d: any): void;
    static e(a: XmlPartManagerBase, b: string, c: CT_Path2DArcTo): void;
}
/**
 * @hidden
 */
export declare class CT_Path2DClose extends Base implements IPath2DCommand, ISaveToXLSX {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IPath2DCommandVisitor$2<TArg, TResult>, b?: TArg): TResult;
    readonly elementName: string;
    saveX(a: XmlPartManagerBase, b: XmlWriteManager, c: string, d: any): void;
}
/**
 * @hidden
 */
export declare class CT_Path2DCubicBezierTo extends Base implements IPath2DCommand, ISaveToXLSX {
    static $t: Type;
    a: CT_AdjPoint2D;
    b: CT_AdjPoint2D;
    c: CT_AdjPoint2D;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IPath2DCommandVisitor$2<TArg, TResult>, b?: TArg): TResult;
    readonly elementName: string;
    saveX(a: XmlPartManagerBase, b: XmlWriteManager, c: string, d: any): void;
}
/**
 * @hidden
 */
export declare class CT_Path2DLineTo extends Base implements IPath2DCommand, ISaveToXLSX {
    static $t: Type;
    a: CT_AdjPoint2D;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IPath2DCommandVisitor$2<TArg, TResult>, b?: TArg): TResult;
    readonly elementName: string;
    saveX(a: XmlPartManagerBase, b: XmlWriteManager, c: string, d: any): void;
}
/**
 * @hidden
 */
export declare class CT_Path2DList extends Base {
    static $t: Type;
    private a;
    readonly b: List$1<CT_Path2D>;
}
/**
 * @hidden
 */
export declare class CT_Path2DMoveTo extends Base implements IPath2DCommand, ISaveToXLSX {
    static $t: Type;
    a: CT_AdjPoint2D;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IPath2DCommandVisitor$2<TArg, TResult>, b?: TArg): TResult;
    readonly elementName: string;
    saveX(a: XmlPartManagerBase, b: XmlWriteManager, c: string, d: any): void;
}
/**
 * @hidden
 */
export declare class CT_Path2DQuadBezierTo extends Base implements IPath2DCommand, ISaveToXLSX {
    static $t: Type;
    a: CT_AdjPoint2D;
    b: CT_AdjPoint2D;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IPath2DCommandVisitor$2<TArg, TResult>, b?: TArg): TResult;
    readonly elementName: string;
    saveX(a: XmlPartManagerBase, b: XmlWriteManager, c: string, d: any): void;
}
/**
 * @hidden
 */
export declare class CT_Percentage extends Base {
    static $t: Type;
    a: ST_Percentage;
}
/**
 * @hidden
 */
export declare class CT_Picture extends Base implements IGraphicalObjectContent, ICT_ShapePropertiesOwner {
    static $t: Type;
    a: CT_BlipFillProperties;
    c: boolean;
    d: string;
    b: CT_PictureNonVisual;
    private _spPr;
    spPr: CT_ShapeProperties;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IGraphicalObjectContentVisitor$2<TArg, TResult>, b: TArg): TResult;
    getStrictElementName(a: OfficeDocumentManager): string;
}
/**
 * @hidden
 */
export declare class CT_PictureLocking extends Base {
    static $t: Type;
    a: boolean;
    b: boolean;
    c: boolean;
    d: boolean;
    e: boolean;
    f: boolean;
    g: boolean;
    h: boolean;
    i: boolean;
    j: boolean;
    k: boolean;
}
/**
 * @hidden
 */
export declare class CT_PictureNonVisual extends CT_NonVisualBase {
    static $t: Type;
    b: CT_NonVisualPictureProperties;
}
/**
 * @hidden
 */
export declare class ST_GeomGuideName extends ValueType {
    static $t: Type;
    constructor(a: number, b: string);
    constructor();
    constructor(a: number, ..._rest: any[]);
    readonly a: string;
}
/**
 * @hidden
 */
export declare class ST_AdjCoordinate extends ValueType {
    static $t: Type;
    constructor(a: number, b: string);
    constructor(a: number, b: ST_Coordinate);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly b;
    private readonly c;
    readonly e: Nullable$1<ST_GeomGuideName>;
    readonly d: Nullable$1<ST_Coordinate>;
    static a(a: string): ST_AdjCoordinate;
    static f(a: ST_AdjCoordinate): string;
}
/**
 * @hidden
 */
export declare class ST_AdjAngle extends ValueType {
    static $t: Type;
    constructor(a: number, b: string);
    constructor(a: number, b: ST_Angle);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly b;
    private readonly c;
    readonly e: Nullable$1<ST_GeomGuideName>;
    readonly d: Nullable$1<ST_Angle>;
    static a(a: string): ST_AdjAngle;
    static f(a: ST_AdjAngle): string;
}
/**
 * @hidden
 */
export interface IAdjustHandle {
}
/**
 * @hidden
 */
export declare let IAdjustHandle_$type: Type;
/**
 * @hidden
 */
export declare class CT_PolarAdjustHandle extends Base implements IAdjustHandle {
    static $t: Type;
    a: CT_AdjPoint2D;
    c: Nullable$1<ST_GeomGuideName>;
    g: Nullable$1<ST_AdjCoordinate>;
    e: Nullable$1<ST_AdjCoordinate>;
    b: Nullable$1<ST_GeomGuideName>;
    f: Nullable$1<ST_AdjAngle>;
    d: Nullable$1<ST_AdjAngle>;
}
/**
 * @hidden
 */
export declare class CT_PositiveFixedAngle extends Base {
    static $t: Type;
    a: ST_PositiveFixedAngle;
}
/**
 * @hidden
 */
export declare class CT_PositiveFixedPercentage extends Base {
    static $t: Type;
    a: ST_PositiveFixedPercentage;
}
/**
 * @hidden
 */
export declare class CT_PositivePercentage extends Base {
    static $t: Type;
    a: ST_PositivePercentage;
}
/**
 * @hidden
 */
export interface IEG_ColorChoice {
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorChoiceVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare let IEG_ColorChoice_$type: Type;
/**
 * @hidden
 */
export declare abstract class EG_ColorChoice extends Base implements IEG_ColorChoice {
    static $t: Type;
    abstract _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorChoiceVisitor$2<TArg, TResult>, b: TArg): TResult;
    private a;
    readonly b: List$1<IEG_ColorTransform>;
}
/**
 * @hidden
 */
export declare class CT_PresetColor_Core extends EG_ColorChoice implements IEG_ColorChoice {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorChoiceVisitor$2<TArg, TResult>, b: TArg): TResult;
    c: ST_PresetColorVal;
}
/**
 * @hidden
 */
export declare class CT_PresetGeometry2D extends Base implements IEG_Geometry {
    static $t: Type;
    a: CT_GeomGuideList;
    b: ST_ShapeType;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_GeometryVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class CT_PresetLineDashProperties extends Base implements IEG_LineDashProperties {
    static $t: Type;
    a: Nullable$1<ST_PresetLineDashVal>;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_LineDashPropertiesVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export interface IEG_TextRun {
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_TextRunVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare let IEG_TextRun_$type: Type;
/**
 * @hidden
 */
export declare class CT_RegularTextRun extends Base implements IEG_TextRun {
    static $t: Type;
    a: CT_TextCharacterProperties;
    b: string;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_TextRunVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class CT_RelId extends Base {
    static $t: Type;
    a: string;
}
/**
 * @hidden
 */
export declare class CT_RelativeRect extends Base {
    static $t: Type;
    a: ST_Percentage;
    b: ST_Percentage;
    c: ST_Percentage;
    d: ST_Percentage;
    readonly e: boolean;
}
/**
 * @hidden
 */
export declare class CT_SchemeColor extends EG_ColorChoice implements IEG_ColorChoice {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorChoiceVisitor$2<TArg, TResult>, b: TArg): TResult;
    c: ST_SchemeColorVal;
}
/**
 * @hidden
 */
export declare class CT_Shape extends Base implements IGraphicalObjectContent, ICT_ShapePropertiesOwner, ICT_ShapeStyleOwner {
    static $t: Type;
    c: boolean;
    d: boolean;
    e: string;
    f: string;
    a: CT_ShapeNonVisual;
    private _spPr;
    spPr: CT_ShapeProperties;
    private _style;
    style: CT_ShapeStyle;
    b: CT_TextBody;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IGraphicalObjectContentVisitor$2<TArg, TResult>, b: TArg): TResult;
    getStrictElementName(a: OfficeDocumentManager): string;
}
/**
 * @hidden
 */
export declare class CT_ShapeLocking extends Base {
    static $t: Type;
    f: boolean;
    j: boolean;
    i: boolean;
    c: boolean;
    g: boolean;
    h: boolean;
    e: boolean;
    a: boolean;
    b: boolean;
    d: boolean;
    k: boolean;
}
/**
 * @hidden
 */
export declare class CT_ShapeNonVisual extends CT_NonVisualBase {
    static $t: Type;
    b: CT_NonVisualDrawingShapeProps;
}
/**
 * @hidden
 */
export declare class CT_ShapeProperties extends CT_ShapePropertiesBase {
    static $t: Type;
    e: IEG_Geometry;
    c: CT_LineProperties;
    d: CT_Transform2D;
    static f(a: XmlPartManagerBase, b: Nullable$1<ST_BlackWhiteMode>): {
        p1: Nullable$1<ST_BlackWhiteMode>;
    };
}
/**
 * @hidden
 */
export declare class CT_ShapeStyle extends Base {
    static $t: Type;
    c: CT_StyleMatrixReference;
    b: CT_StyleMatrixReference;
    d: CT_StyleMatrixReference;
    a: CT_FontReference;
}
/**
 * @hidden
 */
export declare class CT_Slicer extends Base {
    static $t: Type;
    a: string;
}
/**
 * @hidden
 */
export declare class CT_SolidFillProperties extends Base implements IEG_FillProperties, IEG_LineFillProperties {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_FillPropertiesVisitor$2<TArg, TResult>, b: TArg): TResult;
    _accept$21$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_LineFillPropertiesVisitor$2<TArg, TResult>, b: TArg): TResult;
    a: EG_ColorChoice;
}
/**
 * @hidden
 */
export declare class CT_SRgbColor extends EG_ColorChoice implements IEG_ColorChoice {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorChoiceVisitor$2<TArg, TResult>, b?: TArg): TResult;
    c: ST_HexColorRGB;
    static d(a: XmlPartManagerBase, b: ST_HexColorRGB): {
        p1: ST_HexColorRGB;
    };
}
/**
 * @hidden
 */
export interface IEG_FillModeProperties {
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_FillModePropertiesVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare let IEG_FillModeProperties_$type: Type;
/**
 * @hidden
 */
export declare class CT_StretchInfoProperties extends Base implements IEG_FillModeProperties {
    static $t: Type;
    a: CT_RelativeRect;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_FillModePropertiesVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class CT_StyleMatrixReference extends Base {
    static $t: Type;
    a: EG_ColorChoice;
    b: number;
}
/**
 * @hidden
 */
export declare class CT_SysColor extends EG_ColorChoice implements IEG_ColorChoice {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorChoiceVisitor$2<TArg, TResult>, b?: TArg): TResult;
    c: ST_HexColorRGB;
    d: ST_SystemColorVal;
}
/**
 * @hidden
 */
export declare class CT_TextBody extends Base {
    static $t: Type;
    a: CT_TextBodyProperties;
    b: CT_TextListStyle;
    private c;
    readonly d: List$1<CT_TextParagraph>;
}
/**
 * @hidden
 */
export declare class ST_Coordinate32Unqualified extends ValueType {
    static $t: Type;
    constructor(a: number, b: number);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly d;
    readonly g: number;
    static c(a: string): ST_Coordinate32Unqualified;
    static j(a: string): Nullable$1<ST_Coordinate32Unqualified>;
    toString(): string;
    static e(a: ST_Coordinate32Unqualified): number;
    static h(a: Nullable$1<ST_Coordinate32Unqualified>): Nullable$1<number>;
    static a(a: number): ST_Coordinate32Unqualified;
    static i(a: Nullable$1<number>): Nullable$1<ST_Coordinate32Unqualified>;
}
/**
 * @hidden
 */
export declare class ST_Coordinate32 extends ValueType {
    static $t: Type;
    constructor(a: number, b: ST_Coordinate32Unqualified);
    constructor(a: number, b: ST_UniversalMeasure);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private k;
    private l;
    j(): number;
    static g(a: string): ST_Coordinate32;
    static q(a: string): Nullable$1<ST_Coordinate32>;
    toString(): string;
    static a(a: number): ST_Coordinate32;
    static n(a: Nullable$1<number>): Nullable$1<ST_Coordinate32>;
    static b(a: ST_Coordinate32Unqualified): ST_Coordinate32;
    static o(a: Nullable$1<ST_Coordinate32Unqualified>): Nullable$1<ST_Coordinate32>;
    static h(a: ST_Coordinate32): ST_Coordinate32Unqualified;
    static m(a: Nullable$1<ST_Coordinate32>): Nullable$1<ST_Coordinate32Unqualified>;
    static c(a: ST_UniversalMeasure): ST_Coordinate32;
    static p(a: Nullable$1<ST_UniversalMeasure>): Nullable$1<ST_Coordinate32>;
}
/**
 * @hidden
 */
export declare class CT_TextBodyProperties extends CT_TextBodyPropertiesBase {
    static $t: Type;
    d: Nullable$1<ST_TextAnchoringType>;
    e: Nullable$1<boolean>;
    f: Nullable$1<ST_Coordinate32>;
    g: Nullable$1<boolean>;
    h: Nullable$1<boolean>;
    i: Nullable$1<boolean>;
    j: Nullable$1<ST_Coordinate32>;
    k: Nullable$1<number>;
    l: Nullable$1<boolean>;
    m: Nullable$1<ST_Coordinate32>;
    n: Nullable$1<number>;
    o: Nullable$1<number>;
    p: Nullable$1<ST_TextHorzOverflowType>;
    c: boolean;
    q: Nullable$1<ST_TextVertOverflowType>;
    r: Nullable$1<ST_TextWrappingType>;
    s: Nullable$1<ST_Coordinate32>;
    t: Nullable$1<ST_TextVerticalType>;
    static b(a: CT_TextBodyPropertiesBase): CT_TextBodyProperties;
}
/**
 * @hidden
 */
export declare class ST_TextPointUnqualified extends ValueType {
    static $t: Type;
    constructor(a: number, b: number);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly d;
    static c(a: string): ST_TextPointUnqualified;
    static i(a: string): Nullable$1<ST_TextPointUnqualified>;
    toString(): string;
    static e(a: ST_TextPointUnqualified): number;
    static g(a: Nullable$1<ST_TextPointUnqualified>): Nullable$1<number>;
    static a(a: number): ST_TextPointUnqualified;
    static h(a: Nullable$1<number>): Nullable$1<ST_TextPointUnqualified>;
}
/**
 * @hidden
 */
export declare class ST_TextPoint extends ValueType {
    static $t: Type;
    constructor(a: number, b: ST_TextPointUnqualified);
    constructor(a: number, b: ST_UniversalMeasure);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly b;
    private readonly c;
    toString(): string;
    static a(a: string): ST_TextPoint;
}
/**
 * @hidden
 */
export declare class ST_Percentage extends ValueType {
    static $t: Type;
    constructor(a: number, b: number);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly k;
    equals(a: any): boolean;
    getHashCode(): number;
    toString(): string;
    r(a: ST_ConformanceClass): string;
    static d(a: string, b: ST_ConformanceClass): ST_Percentage;
    static q(a: string, b: ST_ConformanceClass): Nullable$1<ST_Percentage>;
    static n(a: ST_Percentage): number;
    static a(a: number): ST_Percentage;
    static e(a: ST_Percentage, b: ST_Percentage): boolean;
    static f(a: Nullable$1<ST_Percentage>, b: Nullable$1<ST_Percentage>): boolean;
    static g(a: ST_Percentage, b: ST_Percentage): boolean;
    static h(a: Nullable$1<ST_Percentage>, b: Nullable$1<ST_Percentage>): boolean;
    static b(a: number): ST_Percentage;
    static p(a: Nullable$1<number>): Nullable$1<ST_Percentage>;
    static l(a: ST_Percentage): number;
    static o(a: Nullable$1<ST_Percentage>): Nullable$1<number>;
}
/**
 * @hidden
 */
export declare class CT_TextCharacterPropertiesBase extends Base {
    static $t: Type;
    c: CT_TextFont;
    b: CT_TextFont;
    a: CT_TextFont;
    k: Nullable$1<boolean>;
    v: string;
    t: string;
    r: Nullable$1<number>;
    d: Nullable$1<boolean>;
    i: Nullable$1<boolean>;
    s: Nullable$1<ST_TextUnderlineType>;
    q: Nullable$1<ST_TextStrikeType>;
    j: Nullable$1<number>;
    f: Nullable$1<ST_TextCapsType>;
    p: Nullable$1<ST_TextPoint>;
    m: Nullable$1<boolean>;
    e: Nullable$1<ST_Percentage>;
    l: Nullable$1<boolean>;
    g: Nullable$1<boolean>;
    h: Nullable$1<boolean>;
    n: Nullable$1<boolean>;
    o: Nullable$1<number>;
    u: string;
}
/**
 * @hidden
 */
export declare class CT_TextCharacterProperties extends CT_TextCharacterPropertiesBase implements IShallowCloneable {
    static $t: Type;
    cloneShallow(): CT_TextCharacterProperties;
    y: IEG_FillProperties;
    w: CT_LineProperties;
}
/**
 * @hidden
 */
export declare class CT_TextFont extends Base {
    static $t: Type;
    d: string;
    a: ST_Panose;
    c: Nullable$1<number>;
    b: Nullable$1<number>;
}
/**
 * @hidden
 */
export declare class CT_TextListStyle extends Base implements ISupportSetProperty {
    static $t: Type;
    a: CT_TextParagraphProperties;
    b: CT_TextParagraphProperties;
    c: CT_TextParagraphProperties;
    d: CT_TextParagraphProperties;
    e: CT_TextParagraphProperties;
    f: CT_TextParagraphProperties;
    g: CT_TextParagraphProperties;
    h: CT_TextParagraphProperties;
    i: CT_TextParagraphProperties;
    j: CT_TextParagraphProperties;
    k: any;
    setProperty(a: ElementPropertyIds, b: any): void;
}
/**
 * @hidden
 */
export declare class CT_TextParagraph extends Base {
    static $t: Type;
    a: CT_TextParagraphProperties;
    private b;
    readonly c: List$1<IEG_TextRun>;
}
/**
 * @hidden
 */
export declare class ST_TextMargin extends ValueType {
    static $t: Type;
    constructor(a: number, b: number);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly d;
    static c(a: string): ST_TextMargin;
    static i(a: string): Nullable$1<ST_TextMargin>;
    toString(): string;
    static e(a: ST_TextMargin): number;
    static g(a: Nullable$1<ST_TextMargin>): Nullable$1<number>;
    static a(a: number): ST_TextMargin;
    static h(a: Nullable$1<number>): Nullable$1<ST_TextMargin>;
}
/**
 * @hidden
 */
export declare class ST_TextIndentLevelType extends ValueType {
    static $t: Type;
    constructor(a: number, b: number);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly d;
    static c(a: string): ST_TextIndentLevelType;
    static i(a: string): Nullable$1<ST_TextIndentLevelType>;
    toString(): string;
    static e(a: ST_TextIndentLevelType): number;
    static g(a: Nullable$1<ST_TextIndentLevelType>): Nullable$1<number>;
    static a(a: number): ST_TextIndentLevelType;
    static h(a: Nullable$1<number>): Nullable$1<ST_TextIndentLevelType>;
}
/**
 * @hidden
 */
export declare class ST_TextIndent extends ValueType {
    static $t: Type;
    constructor(a: number, b: number);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly d;
    static c(a: string): ST_TextIndent;
    static i(a: string): Nullable$1<ST_TextIndent>;
    toString(): string;
    static e(a: ST_TextIndent): number;
    static g(a: Nullable$1<ST_TextIndent>): Nullable$1<number>;
    static a(a: number): ST_TextIndent;
    static h(a: Nullable$1<number>): Nullable$1<ST_TextIndent>;
}
/**
 * @hidden
 */
export declare class CT_TextParagraphProperties extends Base {
    static $t: Type;
    k: Nullable$1<ST_TextMargin>;
    l: Nullable$1<ST_TextMargin>;
    j: Nullable$1<ST_TextIndentLevelType>;
    h: Nullable$1<ST_TextIndent>;
    c: Nullable$1<ST_TextAlignType>;
    d: Nullable$1<ST_Coordinate32>;
    m: Nullable$1<boolean>;
    e: Nullable$1<boolean>;
    f: Nullable$1<ST_TextFontAlignType>;
    i: Nullable$1<boolean>;
    g: Nullable$1<boolean>;
    a: CT_TextCharacterPropertiesBase;
    static b(a: XmlPartManagerBase): CT_TextParagraphProperties;
}
/**
 * @hidden
 */
export declare class CT_TileInfoProperties extends Base implements IEG_FillModeProperties {
    static $t: Type;
    a: Nullable$1<ST_RectAlignment>;
    b: Nullable$1<ST_TileFlipMode>;
    c: Nullable$1<ST_Percentage>;
    d: Nullable$1<ST_Percentage>;
    e: Nullable$1<ST_Coordinate>;
    f: Nullable$1<ST_Coordinate>;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_FillModePropertiesVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class CT_XYAdjustHandle extends Base implements IAdjustHandle {
    static $t: Type;
    a: CT_AdjPoint2D;
    b: Nullable$1<ST_GeomGuideName>;
    f: Nullable$1<ST_AdjCoordinate>;
    d: Nullable$1<ST_AdjCoordinate>;
    c: Nullable$1<ST_GeomGuideName>;
    g: Nullable$1<ST_AdjCoordinate>;
    e: Nullable$1<ST_AdjCoordinate>;
}
/**
 * @hidden
 */
export interface IEG_ColorChoiceVisitor$2<TArg, TResult> {
    _visitCT_SchemeColor$i(a: CT_SchemeColor, b: TArg): TResult;
    _visitCT_SRgbColor$i(a: CT_SRgbColor, b: TArg): TResult;
    _visitCT_SysColor$i(a: CT_SysColor, b: TArg): TResult;
    _visitCT_PresetColor$i(a: CT_PresetColor_Core, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare let IEG_ColorChoiceVisitor$2_$type: Type;
/**
 * @hidden
 */
export interface IEG_ColorTransform {
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorTransformVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare let IEG_ColorTransform_$type: Type;
/**
 * @hidden
 */
export interface IEG_ColorTransformVisitor$2<TArg, TResult> {
    _visitColorTransform_Alpha$i(a: ColorTransform_Alpha, b: TArg): TResult;
    _visitColorTransform_AlphaMod$i(a: ColorTransform_AlphaMod, b: TArg): TResult;
    _visitColorTransform_AlphaOff$i(a: ColorTransform_AlphaOff, b: TArg): TResult;
    _visitColorTransform_Blue$i(a: ColorTransform_Blue, b: TArg): TResult;
    _visitColorTransform_BlueMod$i(a: ColorTransform_BlueMod, b: TArg): TResult;
    _visitColorTransform_BlueOff$i(a: ColorTransform_BlueOff, b: TArg): TResult;
    _visitColorTransform_Comp$i(a: ColorTransform_Comp, b: TArg): TResult;
    _visitColorTransform_Gray$i(a: ColorTransform_Gray, b: TArg): TResult;
    _visitColorTransform_Green$i(a: ColorTransform_Green, b: TArg): TResult;
    _visitColorTransform_GreenMod$i(a: ColorTransform_GreenMod, b: TArg): TResult;
    _visitColorTransform_GreenOff$i(a: ColorTransform_GreenOff, b: TArg): TResult;
    _visitColorTransform_Hue$i(a: ColorTransform_Hue, b: TArg): TResult;
    _visitColorTransform_HueMod$i(a: ColorTransform_HueMod, b: TArg): TResult;
    _visitColorTransform_HueOff$i(a: ColorTransform_HueOff, b: TArg): TResult;
    _visitColorTransform_Inv$i(a: ColorTransform_Inv, b: TArg): TResult;
    _visitColorTransform_Lum$i(a: ColorTransform_Lum, b: TArg): TResult;
    _visitColorTransform_LumMod$i(a: ColorTransform_LumMod, b: TArg): TResult;
    _visitColorTransform_LumOff$i(a: ColorTransform_LumOff, b: TArg): TResult;
    _visitColorTransform_Red$i(a: ColorTransform_Red, b: TArg): TResult;
    _visitColorTransform_RedMod$i(a: ColorTransform_RedMod, b: TArg): TResult;
    _visitColorTransform_RedOff$i(a: ColorTransform_RedOff, b: TArg): TResult;
    _visitColorTransform_Sat$i(a: ColorTransform_Sat, b: TArg): TResult;
    _visitColorTransform_SatMod$i(a: ColorTransform_SatMod, b: TArg): TResult;
    _visitColorTransform_SatOff$i(a: ColorTransform_SatOff, b: TArg): TResult;
    _visitColorTransform_Shade$i(a: ColorTransform_Shade, b: TArg): TResult;
    _visitColorTransform_Tint$i(a: ColorTransform_Tint, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare let IEG_ColorTransformVisitor$2_$type: Type;
/**
 * @hidden
 */
export interface IEG_FillModePropertiesVisitor$2<TArg, TResult> {
    _visitCT_StretchInfoProperties$i(a: CT_StretchInfoProperties, b: TArg): TResult;
    _visitCT_TileInfoProperties$i(a: CT_TileInfoProperties, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare let IEG_FillModePropertiesVisitor$2_$type: Type;
/**
 * @hidden
 */
export interface IEG_FillPropertiesVisitor$2<TArg, TResult> {
    _visitCT_BlipFillProperties$i(a: CT_BlipFillProperties, b: TArg): TResult;
    _visitCT_GroupFillProperties$i(a: CT_GroupFillProperties, b: TArg): TResult;
    _visitCT_NoFillProperties$i(a: CT_NoFillProperties, b: TArg): TResult;
    _visitCT_SolidFillProperties$i(a: CT_SolidFillProperties, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare let IEG_FillPropertiesVisitor$2_$type: Type;
/**
 * @hidden
 */
export interface IEG_GeometryVisitor$2<TArg, TResult> {
    _visitCT_PresetGeometry2D$i(a: CT_PresetGeometry2D, b: TArg): TResult;
    _visitCT_CustomGeometry2D$i(a: CT_CustomGeometry2D, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare let IEG_GeometryVisitor$2_$type: Type;
/**
 * @hidden
 */
export interface IEG_LineDashPropertiesVisitor$2<TArg, TResult> {
    _visitCT_DashStopList$i(a: CT_DashStopList, b: TArg): TResult;
    _visitCT_PresetLineDashProperties$i(a: CT_PresetLineDashProperties, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare let IEG_LineDashPropertiesVisitor$2_$type: Type;
/**
 * @hidden
 */
export interface IEG_LineFillPropertiesVisitor$2<TArg, TResult> {
    _visitCT_NoFillProperties$i(a: CT_NoFillProperties, b: TArg): TResult;
    _visitCT_SolidFillProperties$i(a: CT_SolidFillProperties, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare let IEG_LineFillPropertiesVisitor$2_$type: Type;
/**
 * @hidden
 */
export interface IEG_LineJoinPropertiesVisitor$2<TArg, TResult> {
    _visitCT_LineJoinBevel$i(a: CT_LineJoinBevel, b: TArg): TResult;
    _visitCT_LineJoinMiterProperties$i(a: CT_LineJoinMiterProperties, b: TArg): TResult;
    _visitCT_LineJoinRound$i(a: CT_LineJoinRound, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare let IEG_LineJoinPropertiesVisitor$2_$type: Type;
/**
 * @hidden
 */
export interface IEG_TextRunVisitor$2<TArg, TResult> {
    _visitCT_RegularTextRun$i(a: CT_RegularTextRun, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare let IEG_TextRunVisitor$2_$type: Type;
/**
 * @hidden
 */
export interface IGraphicalObjectContentVisitor$2<TArg, TResult> {
    _visitAlternateGraphicalObjectContent$i(a: AlternateGraphicalObjectContent, b: TArg): TResult;
    _visitCT_Connector$i(a: CT_Connector, b: TArg): TResult;
    _visitCT_GraphicalObjectFrame$i(a: CT_GraphicalObjectFrame, b: TArg): TResult;
    _visitCT_GroupShape$i(a: CT_GroupShape, b: TArg): TResult;
    _visitCT_Picture$i(a: CT_Picture, b: TArg): TResult;
    _visitCT_Shape$i(a: CT_Shape, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare let IGraphicalObjectContentVisitor$2_$type: Type;
/**
 * @hidden
 */
export interface IPath2DCommandVisitor$2<TArg, TResult> {
    _visitCT_Path2DClose$i(a: CT_Path2DClose, b: TArg): TResult;
    _visitCT_Path2DMoveTo$i(a: CT_Path2DMoveTo, b: TArg): TResult;
    _visitCT_Path2DLineTo$i(a: CT_Path2DLineTo, b: TArg): TResult;
    _visitCT_Path2DArcTo$i(a: CT_Path2DArcTo, b: TArg): TResult;
    _visitCT_Path2DQuadBezierTo$i(a: CT_Path2DQuadBezierTo, b: TArg): TResult;
    _visitCT_Path2DCubicBezierTo$i(a: CT_Path2DCubicBezierTo, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare let IPath2DCommandVisitor$2_$type: Type;
/**
 * @hidden
 */
export declare class ColorTransform_Alpha extends CT_PositiveFixedPercentage implements IEG_ColorTransform {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorTransformVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class ColorTransform_AlphaOff extends CT_FixedPercentage implements IEG_ColorTransform {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorTransformVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class ColorTransform_AlphaMod extends CT_PositivePercentage implements IEG_ColorTransform {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorTransformVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class ColorTransform_Blue extends CT_Percentage implements IEG_ColorTransform {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorTransformVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class ColorTransform_BlueOff extends CT_Percentage implements IEG_ColorTransform {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorTransformVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class ColorTransform_BlueMod extends CT_Percentage implements IEG_ColorTransform {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorTransformVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class ColorTransform_Comp extends CT_ComplementTransform implements IEG_ColorTransform {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorTransformVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class ColorTransform_Gray extends CT_GrayscaleTransform implements IEG_ColorTransform {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorTransformVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class ColorTransform_Green extends CT_Percentage implements IEG_ColorTransform {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorTransformVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class ColorTransform_GreenOff extends CT_Percentage implements IEG_ColorTransform {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorTransformVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class ColorTransform_GreenMod extends CT_Percentage implements IEG_ColorTransform {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorTransformVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class ColorTransform_Hue extends CT_PositiveFixedAngle implements IEG_ColorTransform {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorTransformVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class ColorTransform_HueOff extends CT_Angle implements IEG_ColorTransform {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorTransformVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class ColorTransform_HueMod extends CT_PositivePercentage implements IEG_ColorTransform {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorTransformVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class ColorTransform_Inv extends CT_InverseTransform implements IEG_ColorTransform {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorTransformVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class ColorTransform_Lum extends CT_Percentage implements IEG_ColorTransform {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorTransformVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class ColorTransform_LumOff extends CT_Percentage implements IEG_ColorTransform {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorTransformVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class ColorTransform_LumMod extends CT_Percentage implements IEG_ColorTransform {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorTransformVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class ColorTransform_Red extends CT_Percentage implements IEG_ColorTransform {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorTransformVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class ColorTransform_RedOff extends CT_Percentage implements IEG_ColorTransform {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorTransformVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class ColorTransform_RedMod extends CT_Percentage implements IEG_ColorTransform {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorTransformVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class ColorTransform_Sat extends CT_Percentage implements IEG_ColorTransform {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorTransformVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class ColorTransform_SatOff extends CT_Percentage implements IEG_ColorTransform {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorTransformVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class ColorTransform_SatMod extends CT_Percentage implements IEG_ColorTransform {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorTransformVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class ColorTransform_Shade extends CT_PositiveFixedPercentage implements IEG_ColorTransform {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorTransformVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class ColorTransform_Tint extends CT_PositiveFixedPercentage implements IEG_ColorTransform {
    static $t: Type;
    _accept$2$i<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_ColorTransformVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class ElementLoadCallbacks extends ValueType {
    static $t: Type;
    constructor(a: number, b: (arg1: XmlPartManagerBase) => void, c: (arg1: XmlPartManagerBase) => void);
    constructor();
    constructor(a: number, ..._rest: any[]);
    readonly b: (arg1: XmlPartManagerBase) => void;
    readonly a: (arg1: XmlPartManagerBase) => void;
    readonly c: boolean;
}
/**
 * @hidden
 */
export declare abstract class OfficeDocumentManager extends Base implements IDisposable {
    static $t: Type;
    private static readonly _a9;
    private static readonly _a8;
    private _c;
    private _ap;
    private readonly _ab;
    private readonly _aj;
    private _al;
    private readonly _ag;
    private readonly _am;
    private readonly _aq;
    private readonly _ah;
    private readonly _ai;
    private _y;
    private _a;
    private readonly _ao;
    _h: RoundTripControlData;
    _i: RoundTripControlData;
    readonly _m: WorkItem;
    constructor(a: IPackageFactory, b: Stream, c: boolean, d: Nullable$1<ST_ConformanceClass>);
    dispose(): void;
    _a0(a: Uri, b: PartManagerBase): string;
    _a1(a: Uri, b: string): string;
    _az(a: Uri, b: string): string;
    _ay(a: string, b: string): string;
    _j(a: PartManagerBase, b?: any, c?: string): WorkItem$1<Tuple$2<Uri, string>>;
    private _k;
    _l(a: string, b: string, c?: any, d?: string): WorkItem$1<Tuple$2<Uri, string>>;
    _a5(): string;
    _u(a: string): XmlNamespaceDefinitionBase;
    _e(a: Uri): IPackagePart;
    _ar(a: IPackagePart): any;
    _as(a: IPackageRelationship): any;
    _bd(a: any): Uri;
    _au(a: string): any;
    _bc<TData>($tData: Type, a: PartManagerBase): Tuple$2<string, TData>;
    _g(a: string): IPackageRelationship;
    _f(a: any): IPackageRelationship;
    _a7(a: ST_ConformanceClass, b: string): string;
    _bh(): void;
    _ad(a: string): boolean;
    _n(): WorkItem;
    _bj(): void;
    private _ax;
    private _av;
    private _aw;
    _bb(a: string): string;
    _r(): WorkItem;
    _bn(a: ST_ConformanceClass): void;
    protected disposeCore(a: boolean): void;
    protected abstract _aa(): ST_ConformanceClass;
    protected _o(): WorkItem;
    protected _bi(a: IPackagePart): void;
    protected _bk(a: XmlNamespaceDefinitionBase): void;
    protected _bl(a: PartManagerBase, b?: boolean): void;
    protected abstract _s(): WorkItem;
    private _a2;
    private _be;
    static _a3(a: number): string;
    private _ak;
    _a4(): string;
    private _a6;
    private _at;
    private _w;
    private _x;
    private _ae;
    private _p;
    private _q;
    private _bm;
    readonly _d: IPackagePart;
    abstract readonly _v: OfficeApplication;
    readonly _z: ST_ConformanceClass;
    readonly _ac: boolean;
    _af: boolean;
    readonly _an: Stack$1<IPackagePart>;
    abstract readonly _t: DrawingNamespaceDefinitionBase;
    readonly _b: IPackage;
}
/**
 * @hidden
 */
export declare class OfficeDocumentManager_PartRelationshipCounter extends Base {
    static $t: Type;
    private a;
    constructor();
    c(): void;
    readonly b: number;
}
/**
 * @hidden
 */
export declare class QualifiedNameInfo extends ValueType {
    static $t: Type;
    constructor(a: number, b: string, c: string, d: string);
    constructor();
    constructor(a: number, ..._rest: any[]);
    static readonly a: QualifiedNameInfo;
    h: string;
    g: string;
    f: string;
    toString(): string;
    private static d;
    e(a: OfficeDocumentManager): string;
    i(a: string, b: string, c: string): void;
    b(a: OfficeDocumentManager): QualifiedNameInfo;
    readonly c: boolean;
}
/**
 * @hidden
 */
export declare class UnknownElementCache extends Base {
    static $t: Type;
    private h;
    private i;
    private readonly a;
    private m;
    private o;
    constructor(a: QualifiedNameInfo, b: string);
    l(a: string, b: OfficeDocumentManager): Nullable$1<AttributeValue>;
    c(a: string, b: OfficeDocumentManager): UnknownElementCache;
    f(a: string, b: OfficeDocumentManager): IEnumerable$1<UnknownElementCache>;
    private _g;
    g(a: string, b: OfficeDocumentManager): IEnumerable$1<UnknownElementCache>;
    readonly j: List$1<AttributeValue>;
    readonly d: boolean;
    readonly k: List$1<UnknownElementCache>;
    readonly e: boolean;
    readonly b: QualifiedNameInfo;
    n: any;
    p: string;
}
/**
 * @hidden
 */
export declare class UnknownStructure extends Base {
    static $t: Type;
    private readonly a;
    constructor(a: UnknownElementCache);
    readonly b: UnknownElementCache;
}
/**
 * @hidden
 */
export declare class XmlReadManager extends Base {
    static $t: Type;
    readonly u: List$1<AttributeValue>;
    ab: number;
    k: QualifiedNameInfo;
    ad: string;
    private readonly v;
    private z;
    private m;
    private b;
    private readonly i;
    readonly j: XmlPartManagerBase;
    private readonly ao;
    private aa;
    private w;
    private x;
    private readonly a;
    private y;
    constructor(a: XmlPartManagerBase, b: XmlReader);
    q(a: string): boolean;
    r(a: string): boolean;
    d(): WorkItem;
    private f;
    private e;
    ae(a: string): string;
    aj(): void;
    an(): void;
    private ah;
    private c;
    private o;
    private p;
    private ai;
    private t;
    private l;
    private ak;
    private al;
    private am;
    ag(a: string): string;
    private g;
    private h;
    readonly n: UnknownElementCache;
    readonly s: boolean;
    readonly af: string;
}
/**
 * @hidden
 */
export declare class XmlReadManager_AlternateContentChoiceContext extends Base {
    static $t: Type;
    a: boolean;
}
/**
 * @hidden
 */
export declare class XmlReadManager_ElementContext extends ValueType {
    static $t: Type;
    constructor(a: number, b: XmlReadManager);
    constructor();
    constructor(a: number, ..._rest: any[]);
    readonly e: number;
    readonly f: any;
    private c;
    b: boolean;
    a(a: string): boolean;
    readonly d: HashSet$1<string>;
}
/**
 * @hidden
 */
export declare class XmlReadManager_LoadChildContext extends ValueType {
    static $t: Type;
    constructor();
    h: number;
    c: XmlReadManager_AlternateContentStatus;
    b: QualifiedNameInfo;
    a: ElementLoadCallbacks;
    g: boolean;
    f: boolean;
    e: boolean;
    d: boolean;
}
/**
 * @hidden
 */
export declare class XmlReadManager_LoadFastContext extends ValueType {
    static $t: Type;
    constructor();
    c: number;
    b: QualifiedNameInfo;
    a: ElementLoadCallbacks;
}
/**
 * @hidden
 */
export declare class ST_DecimalNumber extends ValueType {
    static $t: Type;
    constructor(a: number, b: number);
    constructor();
    constructor(a: number, ..._rest: any[]);
    static readonly a: ST_DecimalNumber;
    private readonly e;
    static d(a: string): ST_DecimalNumber;
    static j(a: string): Nullable$1<ST_DecimalNumber>;
    toString(): string;
    static f(a: ST_DecimalNumber): number;
    static h(a: Nullable$1<ST_DecimalNumber>): Nullable$1<number>;
    static b(a: number): ST_DecimalNumber;
    static i(a: Nullable$1<number>): Nullable$1<ST_DecimalNumber>;
}
/**
 * @hidden
 */
export declare class ST_DecimalNumberOrPercent extends ValueType {
    static $t: Type;
    constructor(a: number, b: ST_Percentage, c?: boolean);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly b;
    private readonly a;
    equals(a: any): boolean;
    getHashCode(): number;
    toString(): string;
    k(a: ST_ConformanceClass): string;
    i(a: boolean): {
        ret: number;
        p0: boolean;
    };
    static j(a: string, b: ST_ConformanceClass): Nullable$1<ST_DecimalNumberOrPercent>;
    static c(a: ST_DecimalNumberOrPercent, b: ST_DecimalNumberOrPercent): boolean;
    static d(a: Nullable$1<ST_DecimalNumberOrPercent>, b: Nullable$1<ST_DecimalNumberOrPercent>): boolean;
    static e(a: ST_DecimalNumberOrPercent, b: ST_DecimalNumberOrPercent): boolean;
    static f(a: Nullable$1<ST_DecimalNumberOrPercent>, b: Nullable$1<ST_DecimalNumberOrPercent>): boolean;
}
/**
 * @hidden
 */
export declare class ST_DrawingElementId extends ValueType {
    static $t: Type;
    constructor(a: number, b: number);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly g;
    static c(a: string): ST_DrawingElementId;
    static f(a: string): Nullable$1<ST_DrawingElementId>;
    toString(): string;
    static h(a: ST_DrawingElementId): number;
    static e(a: Nullable$1<ST_DrawingElementId>): Nullable$1<number>;
    static a(a: number): ST_DrawingElementId;
    static d(a: Nullable$1<number>): Nullable$1<ST_DrawingElementId>;
}
/**
 * @hidden
 */
export declare class ST_EighthPointMeasure extends ValueType {
    static $t: Type;
    constructor(a: number, b: ST_UnsignedDecimalNumber);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly d;
    equals(a: any): boolean;
    getHashCode(): number;
    toString(): string;
    static c(a: string): ST_EighthPointMeasure;
    static p(a: string): Nullable$1<ST_EighthPointMeasure>;
    static g(a: ST_EighthPointMeasure, b: ST_EighthPointMeasure): boolean;
    static h(a: Nullable$1<ST_EighthPointMeasure>, b: Nullable$1<ST_EighthPointMeasure>): boolean;
    static i(a: ST_EighthPointMeasure, b: ST_EighthPointMeasure): boolean;
    static j(a: Nullable$1<ST_EighthPointMeasure>, b: Nullable$1<ST_EighthPointMeasure>): boolean;
    static a(a: ST_UnsignedDecimalNumber): ST_EighthPointMeasure;
    static m(a: Nullable$1<ST_UnsignedDecimalNumber>): Nullable$1<ST_EighthPointMeasure>;
    static e(a: ST_EighthPointMeasure): ST_UnsignedDecimalNumber;
    static n(a: Nullable$1<ST_EighthPointMeasure>): Nullable$1<ST_UnsignedDecimalNumber>;
    static q(a: ST_EighthPointMeasure): number;
    static o(a: Nullable$1<ST_EighthPointMeasure>): Nullable$1<number>;
}
/**
 * @hidden
 */
export declare class ST_FixedAngle extends ValueType {
    static $t: Type;
    constructor(a: number, b: ST_Angle);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly a;
    equals(a: any): boolean;
    getHashCode(): number;
    toString(): string;
    static d(a: number): ST_FixedAngle;
    static g(a: string): ST_FixedAngle;
    s(): number;
    static r(a: string): Nullable$1<ST_FixedAngle>;
    static h(a: ST_FixedAngle, b: ST_FixedAngle): boolean;
    static i(a: Nullable$1<ST_FixedAngle>, b: Nullable$1<ST_FixedAngle>): boolean;
    static j(a: ST_FixedAngle, b: ST_FixedAngle): boolean;
    static k(a: Nullable$1<ST_FixedAngle>, b: Nullable$1<ST_FixedAngle>): boolean;
    static e(a: ST_Angle): ST_FixedAngle;
    static q(a: Nullable$1<ST_Angle>): Nullable$1<ST_FixedAngle>;
    static b(a: ST_FixedAngle): ST_Angle;
    static p(a: Nullable$1<ST_FixedAngle>): Nullable$1<ST_Angle>;
}
/**
 * @hidden
 */
export declare class ST_FixedPercentage extends ValueType {
    static $t: Type;
    constructor(a: number, b: ST_Percentage);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly d;
    equals(a: any): boolean;
    getHashCode(): number;
    toString(): string;
    s(a: ST_ConformanceClass): string;
    static c(a: string, b: ST_ConformanceClass): ST_FixedPercentage;
    static r(a: string, b: ST_ConformanceClass): Nullable$1<ST_FixedPercentage>;
    static g(a: ST_FixedPercentage, b: ST_FixedPercentage): boolean;
    static h(a: Nullable$1<ST_FixedPercentage>, b: Nullable$1<ST_FixedPercentage>): boolean;
    static i(a: ST_FixedPercentage, b: ST_FixedPercentage): boolean;
    static j(a: Nullable$1<ST_FixedPercentage>, b: Nullable$1<ST_FixedPercentage>): boolean;
    static a(a: ST_Percentage): ST_FixedPercentage;
    static p(a: Nullable$1<ST_Percentage>): Nullable$1<ST_FixedPercentage>;
    static e(a: ST_FixedPercentage): ST_Percentage;
    static q(a: Nullable$1<ST_FixedPercentage>): Nullable$1<ST_Percentage>;
    static m(a: ST_FixedPercentage): number;
    static o(a: Nullable$1<ST_FixedPercentage>): Nullable$1<number>;
}
/**
 * @hidden
 */
export declare class ST_HexColorRGB extends ValueType {
    static $t: Type;
    constructor(a: number, b: Color);
    constructor(a: number, b: number, c: number, d: number);
    constructor();
    constructor(a: number, ..._rest: any[]);
    static readonly a: ST_HexColorRGB;
    private readonly m;
    private readonly l;
    private readonly k;
    equals(a: any): boolean;
    getHashCode(): number;
    static d(a: string): ST_HexColorRGB;
    static p(a: string): Nullable$1<ST_HexColorRGB>;
    toString(): string;
    readonly r: Color;
    q(): string;
    static e(a: ST_HexColorRGB, b: ST_HexColorRGB): boolean;
    static f(a: Nullable$1<ST_HexColorRGB>, b: Nullable$1<ST_HexColorRGB>): boolean;
    static g(a: ST_HexColorRGB, b: ST_HexColorRGB): boolean;
    static h(a: Nullable$1<ST_HexColorRGB>, b: Nullable$1<ST_HexColorRGB>): boolean;
    static s(a: ST_HexColorRGB): Color;
    static n(a: Nullable$1<ST_HexColorRGB>): Nullable$1<Color>;
    static b(a: Color): ST_HexColorRGB;
    static o(a: Nullable$1<Color>): Nullable$1<ST_HexColorRGB>;
}
/**
 * @hidden
 */
export declare class ST_HexColorAuto extends ValueType {
    static $t: Type;
    constructor();
    static readonly a: ST_HexColorAuto;
    equals(a: any): boolean;
    getHashCode(): number;
    static b(a: string): ST_HexColorAuto;
    static i(a: string): Nullable$1<ST_HexColorAuto>;
    toString(): string;
    static c(a: ST_HexColorAuto, b: ST_HexColorAuto): boolean;
    static d(a: Nullable$1<ST_HexColorAuto>, b: Nullable$1<ST_HexColorAuto>): boolean;
    static e(a: ST_HexColorAuto, b: ST_HexColorAuto): boolean;
    static f(a: Nullable$1<ST_HexColorAuto>, b: Nullable$1<ST_HexColorAuto>): boolean;
}
/**
 * @hidden
 */
export declare class ST_HexColor extends ValueType {
    static $t: Type;
    constructor(a: number, b: ST_HexColorRGB);
    constructor(a: number, b: ST_HexColorAuto);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly p;
    private readonly q;
    equals(a: any): boolean;
    getHashCode(): number;
    static e(a: string): ST_HexColor;
    static u(a: string): Nullable$1<ST_HexColor>;
    toString(): string;
    readonly h: boolean;
    readonly i: boolean;
    static j(a: ST_HexColor, b: ST_HexColor): boolean;
    static k(a: Nullable$1<ST_HexColor>, b: Nullable$1<ST_HexColor>): boolean;
    static l(a: ST_HexColor, b: ST_HexColor): boolean;
    static m(a: Nullable$1<ST_HexColor>, b: Nullable$1<ST_HexColor>): boolean;
    static b(a: ST_HexColorRGB): ST_HexColor;
    static t(a: Nullable$1<ST_HexColorRGB>): Nullable$1<ST_HexColor>;
    static f(a: ST_HexColor): ST_HexColorRGB;
    static r(a: Nullable$1<ST_HexColor>): Nullable$1<ST_HexColorRGB>;
    static a(a: ST_HexColorAuto): ST_HexColor;
    static s(a: Nullable$1<ST_HexColorAuto>): Nullable$1<ST_HexColor>;
}
/**
 * @hidden
 */
export declare class ST_PositiveUniversalMeasure extends ValueType {
    static $t: Type;
    constructor(a: number, b: number, c: ST_UniversalMeasure_UnitType);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly b;
    private readonly c;
    toString(): string;
    d(): number;
    static a(a: string): ST_PositiveUniversalMeasure;
    static e(a: string): Nullable$1<ST_PositiveUniversalMeasure>;
}
/**
 * @hidden
 */
export declare class ST_UnsignedDecimalNumber extends ValueType {
    static $t: Type;
    constructor(a: number, b: number);
    constructor();
    constructor(a: number, ..._rest: any[]);
    static readonly a: ST_UnsignedDecimalNumber;
    private readonly g;
    static f(a: string): Nullable$1<ST_UnsignedDecimalNumber>;
    toString(): string;
    static h(a: ST_UnsignedDecimalNumber): number;
    static e(a: Nullable$1<ST_UnsignedDecimalNumber>): Nullable$1<number>;
    static b(a: number): ST_UnsignedDecimalNumber;
    static d(a: Nullable$1<number>): Nullable$1<ST_UnsignedDecimalNumber>;
}
/**
 * @hidden
 */
export declare class ST_HpsMeasure extends ValueType {
    static $t: Type;
    constructor(a: number, b: number);
    constructor(a: number, b: ST_PositiveUniversalMeasure);
    constructor(a: number, b: ST_UnsignedDecimalNumber);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private g;
    private h;
    toString(): string;
    f(): number;
    static e(a: string): ST_HpsMeasure;
    static k(a: string): Nullable$1<ST_HpsMeasure>;
    static a(a: ST_PositiveUniversalMeasure): ST_HpsMeasure;
    static i(a: Nullable$1<ST_PositiveUniversalMeasure>): Nullable$1<ST_HpsMeasure>;
    static b(a: ST_UnsignedDecimalNumber): ST_HpsMeasure;
    static j(a: Nullable$1<ST_UnsignedDecimalNumber>): Nullable$1<ST_HpsMeasure>;
}
/**
 * @hidden
 */
export declare class ST_LongHexNumber extends ValueType {
    static $t: Type;
    constructor(a: number, b: number);
    constructor();
    constructor(a: number, ..._rest: any[]);
    static readonly a: ST_LongHexNumber;
    private readonly e;
    static d(a: string): ST_LongHexNumber;
    toString(): string;
    static b(a: number): ST_LongHexNumber;
    static f(a: Nullable$1<number>): Nullable$1<ST_LongHexNumber>;
}
/**
 * @hidden
 */
export declare class ST_MeasurementOrPercent extends ValueType {
    static $t: Type;
    constructor(a: number, b: ST_DecimalNumberOrPercent);
    constructor(a: number, b: ST_UniversalMeasure);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly m;
    private readonly n;
    equals(a: any): boolean;
    getHashCode(): number;
    toString(): string;
    r(a: ST_ConformanceClass): string;
    o(a: boolean): {
        ret: Nullable$1<number>;
        p0: boolean;
    };
    static e(a: string, b: ST_ConformanceClass): ST_MeasurementOrPercent;
    readonly f: boolean;
    static g(a: ST_MeasurementOrPercent, b: ST_MeasurementOrPercent): boolean;
    static h(a: Nullable$1<ST_MeasurementOrPercent>, b: Nullable$1<ST_MeasurementOrPercent>): boolean;
    static i(a: ST_MeasurementOrPercent, b: ST_MeasurementOrPercent): boolean;
    static j(a: Nullable$1<ST_MeasurementOrPercent>, b: Nullable$1<ST_MeasurementOrPercent>): boolean;
    static a(a: ST_DecimalNumberOrPercent): ST_MeasurementOrPercent;
    static p(a: Nullable$1<ST_DecimalNumberOrPercent>): Nullable$1<ST_MeasurementOrPercent>;
    static b(a: ST_UniversalMeasure): ST_MeasurementOrPercent;
    static q(a: Nullable$1<ST_UniversalMeasure>): Nullable$1<ST_MeasurementOrPercent>;
}
/**
 * @hidden
 */
export declare class ST_OnOff extends ValueType {
    static $t: Type;
    constructor(a: number, b: boolean);
    constructor();
    constructor(a: number, ..._rest: any[]);
    static readonly a: ST_OnOff;
    static readonly c: ST_OnOff;
    private readonly d;
    static e(a: string): boolean;
    toString(): string;
    static g(a: boolean): string;
    static b(a: boolean): ST_OnOff;
    f(): boolean;
}
/**
 * @hidden
 */
export declare class ST_Panose extends Base {
    static $t: Type;
    private readonly a;
    constructor(a: number[]);
    toString(): string;
    static b(a: string): ST_Panose;
}
/**
 * @hidden
 */
export declare class ST_PointMeasure extends ValueType {
    static $t: Type;
    constructor(a: number, b: ST_UnsignedDecimalNumber);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly d;
    equals(a: any): boolean;
    getHashCode(): number;
    toString(): string;
    static c(a: string): ST_PointMeasure;
    static p(a: string): Nullable$1<ST_PointMeasure>;
    static g(a: ST_PointMeasure, b: ST_PointMeasure): boolean;
    static h(a: Nullable$1<ST_PointMeasure>, b: Nullable$1<ST_PointMeasure>): boolean;
    static i(a: ST_PointMeasure, b: ST_PointMeasure): boolean;
    static j(a: Nullable$1<ST_PointMeasure>, b: Nullable$1<ST_PointMeasure>): boolean;
    static a(a: ST_UnsignedDecimalNumber): ST_PointMeasure;
    static m(a: Nullable$1<ST_UnsignedDecimalNumber>): Nullable$1<ST_PointMeasure>;
    static e(a: ST_PointMeasure): ST_UnsignedDecimalNumber;
    static n(a: Nullable$1<ST_PointMeasure>): Nullable$1<ST_UnsignedDecimalNumber>;
    static q(a: ST_PointMeasure): number;
    static o(a: Nullable$1<ST_PointMeasure>): Nullable$1<number>;
}
/**
 * @hidden
 */
export declare class ST_PositiveFixedAngle extends ValueType {
    static $t: Type;
    constructor(a: number, b: ST_Angle);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly a;
    equals(a: any): boolean;
    getHashCode(): number;
    toString(): string;
    static d(a: number): ST_PositiveFixedAngle;
    q(): number;
    static g(a: string): ST_PositiveFixedAngle;
    static p(a: string): Nullable$1<ST_PositiveFixedAngle>;
    static h(a: ST_PositiveFixedAngle, b: ST_PositiveFixedAngle): boolean;
    static i(a: Nullable$1<ST_PositiveFixedAngle>, b: Nullable$1<ST_PositiveFixedAngle>): boolean;
    static j(a: ST_PositiveFixedAngle, b: ST_PositiveFixedAngle): boolean;
    static k(a: Nullable$1<ST_PositiveFixedAngle>, b: Nullable$1<ST_PositiveFixedAngle>): boolean;
    static e(a: ST_Angle): ST_PositiveFixedAngle;
    static o(a: Nullable$1<ST_Angle>): Nullable$1<ST_PositiveFixedAngle>;
    static b(a: ST_PositiveFixedAngle): ST_Angle;
    static n(a: Nullable$1<ST_PositiveFixedAngle>): Nullable$1<ST_Angle>;
}
/**
 * @hidden
 */
export declare class ST_PositiveFixedPercentage extends ValueType {
    static $t: Type;
    constructor(a: number, b: ST_Percentage);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly a;
    equals(a: any): boolean;
    getHashCode(): number;
    toString(): string;
    u(a: ST_ConformanceClass): string;
    static f(a: string, b: ST_ConformanceClass): ST_PositiveFixedPercentage;
    static t(a: string, b: ST_ConformanceClass): Nullable$1<ST_PositiveFixedPercentage>;
    static o(a: number): number;
    static p(a: number): number;
    static g(a: ST_PositiveFixedPercentage, b: ST_PositiveFixedPercentage): boolean;
    static h(a: Nullable$1<ST_PositiveFixedPercentage>, b: Nullable$1<ST_PositiveFixedPercentage>): boolean;
    static i(a: ST_PositiveFixedPercentage, b: ST_PositiveFixedPercentage): boolean;
    static j(a: Nullable$1<ST_PositiveFixedPercentage>, b: Nullable$1<ST_PositiveFixedPercentage>): boolean;
    static d(a: ST_Percentage): ST_PositiveFixedPercentage;
    static s(a: Nullable$1<ST_Percentage>): Nullable$1<ST_PositiveFixedPercentage>;
    static b(a: ST_PositiveFixedPercentage): ST_Percentage;
    static r(a: Nullable$1<ST_PositiveFixedPercentage>): Nullable$1<ST_Percentage>;
    static m(a: ST_PositiveFixedPercentage): number;
    static q(a: Nullable$1<ST_PositiveFixedPercentage>): Nullable$1<number>;
}
/**
 * @hidden
 */
export declare class ST_SignedHpsMeasure extends ValueType {
    static $t: Type;
    constructor(a: number, b: number);
    constructor(a: number, b: ST_UniversalMeasure);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly c;
    private readonly d;
    toString(): string;
    b(): number;
    static a(a: string): ST_SignedHpsMeasure;
}
/**
 * @hidden
 */
export declare class ST_SignedTwipsMeasure extends ValueType {
    static $t: Type;
    constructor(a: number, b: number);
    constructor(a: number, b: number);
    constructor(a: number, b: ST_UniversalMeasure);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly c;
    private readonly d;
    toString(): string;
    b(): number;
    static a(a: string): ST_SignedTwipsMeasure;
}
/**
 * @hidden
 */
export declare class ST_TextFontSize extends ValueType {
    static $t: Type;
    constructor(a: number, b: number);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly d;
    static c(a: string): ST_TextFontSize;
    static i(a: string): Nullable$1<ST_TextFontSize>;
    toString(): string;
    static e(a: ST_TextFontSize): number;
    static g(a: Nullable$1<ST_TextFontSize>): Nullable$1<number>;
    static a(a: number): ST_TextFontSize;
    static h(a: Nullable$1<number>): Nullable$1<ST_TextFontSize>;
}
/**
 * @hidden
 */
export declare class ST_TrueFalse extends ValueType {
    static $t: Type;
    constructor(a: number, b: boolean);
    constructor();
    constructor(a: number, ..._rest: any[]);
    static readonly a: ST_TrueFalse;
    static readonly e: ST_TrueFalse;
    private readonly f;
    static d(a: string): ST_TrueFalse;
    toString(): string;
    static k(a: ST_TrueFalse): string;
    static g(a: ST_TrueFalse): boolean;
    static i(a: Nullable$1<ST_TrueFalse>): Nullable$1<boolean>;
    static b(a: boolean): ST_TrueFalse;
    static j(a: Nullable$1<boolean>): Nullable$1<ST_TrueFalse>;
}
/**
 * @hidden
 */
export declare class ST_TrueFalseBlank extends ValueType {
    static $t: Type;
    constructor(a: number, b: boolean);
    constructor();
    constructor(a: number, ..._rest: any[]);
    static readonly a: ST_TrueFalseBlank;
    static readonly b: ST_TrueFalseBlank;
    private readonly c;
    static d(a: string): boolean;
    toString(): string;
    static e(a: ST_TrueFalseBlank): string;
    static f(a: boolean): string;
}
/**
 * @hidden
 */
export declare class ST_TwipsMeasure extends ValueType {
    static $t: Type;
    constructor(a: number, b: number);
    constructor(a: number, b: ST_UnsignedDecimalNumber);
    constructor(a: number, b: ST_PositiveUniversalMeasure);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly c;
    private readonly d;
    toString(): string;
    b(): number;
    static a(a: string): ST_TwipsMeasure;
}
/**
 * @hidden
 */
export declare class ST_UcharHexNumber extends ValueType {
    static $t: Type;
    constructor(a: number, b: number);
    constructor();
    constructor(a: number, ..._rest: any[]);
    static readonly a: ST_UcharHexNumber;
    private readonly e;
    static d(a: string): ST_UcharHexNumber;
    toString(): string;
    static b(a: number): ST_UcharHexNumber;
    static i(a: Nullable$1<number>): Nullable$1<ST_UcharHexNumber>;
    static f(a: ST_UcharHexNumber): number;
    static h(a: Nullable$1<ST_UcharHexNumber>): Nullable$1<number>;
}
/**
 * @hidden
 */
export declare class ST_UnsignedIntHex extends ValueType {
    static $t: Type;
    constructor(a: number, b: number);
    constructor();
    constructor(a: number, ..._rest: any[]);
    static readonly a: ST_UnsignedIntHex;
    private readonly g;
    static d(a: string): ST_UnsignedIntHex;
    toString(): string;
    static b(a: number): ST_UnsignedIntHex;
    static e(a: Nullable$1<number>): Nullable$1<ST_UnsignedIntHex>;
    static h(a: ST_UnsignedIntHex): number;
    static f(a: Nullable$1<ST_UnsignedIntHex>): Nullable$1<number>;
}
/**
 * @hidden
 */
export declare class ST_UnsignedShortHex extends ValueType {
    static $t: Type;
    constructor(a: number, b: number);
    constructor();
    constructor(a: number, ..._rest: any[]);
    static readonly a: ST_UnsignedShortHex;
    private readonly c;
    static d(a: string): number;
    static b(a: string): ST_UnsignedShortHex;
    toString(): string;
    e(): number;
}
/**
 * @hidden
 */
export declare class XmlWriteManager extends Base {
    static $t: Type;
    private readonly a;
    private readonly c;
    private readonly b;
    private readonly w;
    constructor(a: XmlPartManagerBase, b: XmlWriter);
    d(a: XmlNamespaceDefinitionBase): string;
    private e;
    private f;
    g(a: IEnumerable$1<AlternateContentChoice>, b?: () => void, c?: boolean): void;
    h(a: string, b: string): void;
    i(a: string, b: string, c: string, d: string): void;
    j(a: string, b: string): void;
    k(): void;
    o(a: string): void;
    p(a: string, b: string): void;
    q(a: string, b: string, c: string): void;
    r(a: string): void;
    l(a: XmlNamespaceDefinitionBase, b?: boolean): void;
    private m;
    n(a: string): void;
    t(a: UnknownStructure): void;
    private s;
    u(a: string): void;
    v(a: string, b: string, c: string): void;
}
/**
 * @hidden
 */
export declare abstract class PartManagerBase extends Base {
    static $t: Type;
    private c;
    private k;
    constructor();
    abstract a(): WorkItem$1<any>;
    abstract b(a: any): WorkItem;
    e(a: OfficeDocumentManager, b: Stream): PartManagerBase;
    j(): Dictionary$2<PartManagerBase, number>;
    abstract n(a: OfficeApplication): string;
    f(a: IPackagePart, b: IPackageRelationship): PartManagerBase;
    abstract o(a: ST_ConformanceClass): string;
    protected p(): void;
    q(): void;
    i(a: PartManagerBase): boolean;
    abstract readonly m: string;
    readonly d: OfficeDocumentManager;
    abstract readonly g: boolean;
    protected get_h(): boolean;
    readonly h: boolean;
    l: Stream;
}
/**
 * @hidden
 */
export declare abstract class ActiveXBinaryPartManager extends PartManagerBase {
    static $t: Type;
    static readonly u: string;
    static readonly t: string;
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare abstract class ActiveXPartManager extends PartManagerBase {
    static $t: Type;
    static readonly u: string;
    static readonly t: string;
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare abstract class ImagePartManagerBase extends PartManagerBase {
    static $t: Type;
    private static readonly x;
    private static readonly w;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
    a(): WorkItem$1<any>;
    protected get_h(): boolean;
    b(a: any): WorkItem;
    abstract readonly s: string;
    abstract readonly t: string;
    abstract readonly u: string;
    abstract r(a: string): ImageFormat;
    static v(a: ST_ConformanceClass): string;
}
/**
 * @hidden
 */
export declare class BmpPartManager extends ImagePartManagerBase {
    static $t: Type;
    static readonly y: BmpPartManager;
    static readonly z: BmpPartManager;
    private readonly aa;
    constructor(a: boolean);
    protected get_s(): string;
    readonly s: string;
    protected get_t(): string;
    readonly t: string;
    protected get_u(): string;
    readonly u: string;
    protected get_m(): string;
    readonly m: string;
    r(a: string): ImageFormat;
}
/**
 * @hidden
 */
export declare abstract class XmlPartManagerBase extends PartManagerBase {
    static $t: Type;
    private r;
    private am;
    private al;
    private aa;
    private ac;
    constructor();
    protected p(): void;
    a(): WorkItem$1<any>;
    b(a: any): WorkItem;
    as(): void;
    at(): void;
    ar(a: string): void;
    w(a: QualifiedNameInfo): ElementLoadCallbacks;
    private readonly v;
    x(a: string): ElementLoadCallbacks;
    z(a: string): UnknownElementAction;
    au(a: UnknownElementCache): void;
    av(a: UnknownStructure): void;
    aw(a: string, b: string): void;
    ax(a: string, b: (arg1: XmlPartManagerBase) => void, c?: boolean): void;
    private static ag;
    ay(a: string, b: (arg1: XmlPartManagerBase) => void, c?: boolean): void;
    ah(a: string): boolean;
    ai(a: string): boolean;
    y(a: UnknownElementCache, b: Stack$1<UnknownElementCache>): OverwriteRoundTripDataResult;
    az(a: string): void;
    protected a0(): XmlReader;
    protected a1(): XmlWriter;
    protected t(): WorkItem$1<any>;
    protected abstract u(a: any): WorkItem;
    readonly s: ContextStack;
    an: any;
    ae: boolean;
    readonly af: boolean;
    protected get_aj(): boolean;
    protected readonly aj: boolean;
    readonly ab: XmlReadManager;
    readonly ad: XmlWriteManager;
}
/**
 * @hidden
 */
export declare abstract class CorePropertiesPartManager extends XmlPartManagerBase {
    static $t: Type;
    static readonly a2: string;
    private static readonly a5;
    private static readonly a4;
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare abstract class CustomXmlItemPartManager extends PartManagerBase {
    static $t: Type;
    static readonly u: string;
    static readonly t: string;
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare abstract class CustomXmlItemPropsPartManager extends PartManagerBase {
    static $t: Type;
    static readonly s: string;
    static readonly u: string;
    static readonly t: string;
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare abstract class DownRevPartManager extends XmlPartManagerBase {
    static $t: Type;
    static readonly a2: string;
    private static readonly a4;
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare class DrawingPartManagerHelpers extends Base {
    static $t: Type;
    private static a;
    private static b;
    private static c;
    private static g;
    private static d;
    private static e;
    private static f;
    private static h;
    private static i;
    private static j;
    private static k;
    private static l;
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
    private static z;
    private static x;
    private static y;
    private static aa;
    private static ac;
    private static ad;
    private static ae;
    private static af;
    private static ag;
    private static ah;
    private static ai;
    private static aj;
    private static ak;
    private static al;
    private static an;
    private static am;
    private static ao;
    private static ap;
    private static aq;
    private static ar;
    private static as;
    private static at;
    private static au;
    private static av;
    private static aw;
    private static ax;
    private static ay;
    private static az;
    private static a0;
    private static a1;
    private static a2;
    private static a3;
    private static a4;
    private static a5;
    private static a6;
    private static ba;
    private static ab;
    private static a7;
    private static a8;
    private static a9;
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
    static ce(a: XmlPartManagerBase): void;
    static cf(a: XmlPartManagerBase, b: ColorTransform_Alpha): void;
    static cg(a: XmlPartManagerBase, b: ColorTransform_AlphaMod): void;
    static ch(a: XmlPartManagerBase, b: ColorTransform_AlphaOff): void;
    static ci(a: XmlPartManagerBase, b: AlternateGraphicalObjectContent): void;
    private static cj;
    private static ck;
    static cl(a: XmlPartManagerBase, b: CT_BlipFillProperties, c?: boolean): void;
    static cm(a: XmlPartManagerBase, b: ColorTransform_Blue): void;
    static cn(a: XmlPartManagerBase, b: ColorTransform_BlueMod): void;
    static co(a: XmlPartManagerBase, b: ColorTransform_BlueOff): void;
    private static cp;
    private static cq;
    private static cr;
    private static cs;
    private static ct;
    private static cu;
    private static cv;
    private static cw;
    private static cx;
    static cy(a: XmlPartManagerBase, b: ColorTransform_Comp): void;
    private static cz;
    private static c0;
    private static c1;
    static c2(a: XmlPartManagerBase, b: CT_CustomGeometry2D): void;
    static c3(a: XmlPartManagerBase, b: CT_Connector): void;
    private static c4;
    private static c5;
    private static c6;
    private static c7;
    private static c8;
    private static c9;
    private static da;
    private static db;
    private static dc;
    static de(a: XmlPartManagerBase, b: Tuple$2<string, any>): void;
    private static df;
    static dg(a: XmlPartManagerBase, b: CT_GraphicalObject): void;
    static dh(a: XmlPartManagerBase, b: CT_GraphicalObjectFrame): void;
    private static di;
    static dj(a: XmlPartManagerBase, b: ColorTransform_Gray): void;
    static dk(a: XmlPartManagerBase, b: ColorTransform_Green): void;
    static dl(a: XmlPartManagerBase, b: ColorTransform_GreenMod): void;
    static dm(a: XmlPartManagerBase, b: ColorTransform_GreenOff): void;
    static dn(a: XmlPartManagerBase, b: CT_GroupShape): void;
    private static dp;
    private static dq;
    private static dr;
    static ds(a: XmlPartManagerBase, b: ColorTransform_Hue): void;
    static dt(a: XmlPartManagerBase, b: ColorTransform_HueMod): void;
    static du(a: XmlPartManagerBase, b: ColorTransform_HueOff): void;
    static dv(a: XmlPartManagerBase, b: ColorTransform_Inv): void;
    private static dw;
    private static dx;
    private static dy;
    static dz(a: XmlPartManagerBase, b: ColorTransform_Lum): void;
    static d0(a: XmlPartManagerBase, b: ColorTransform_LumMod): void;
    static d1(a: XmlPartManagerBase, b: ColorTransform_LumOff): void;
    static d2(a: XmlPartManagerBase, b: CT_NoFillProperties): void;
    private static d3;
    private static d4;
    private static d5;
    private static d6;
    private static d7;
    private static d8;
    private static d9;
    static ea(a: XmlPartManagerBase, b: CT_Picture): void;
    private static eb;
    private static ec;
    static ed(a: XmlPartManagerBase, b: CT_PresetColor_Core): void;
    static ee(a: XmlPartManagerBase, b: CT_PresetGeometry2D): void;
    static ef(a: XmlPartManagerBase, b: ColorTransform_Red): void;
    static eg(a: XmlPartManagerBase, b: ColorTransform_RedMod): void;
    static eh(a: XmlPartManagerBase, b: ColorTransform_RedOff): void;
    static ei(a: XmlPartManagerBase, b: CT_RegularTextRun): void;
    private static ej;
    static ek(a: XmlPartManagerBase, b: ColorTransform_Sat): void;
    static el(a: XmlPartManagerBase, b: ColorTransform_SatMod): void;
    static em(a: XmlPartManagerBase, b: ColorTransform_SatOff): void;
    static en(a: XmlPartManagerBase, b: CT_SchemeColor): void;
    static dd(a: XmlPartManagerBase, b: IGraphicalObjectContent): void;
    static ep(a: XmlPartManagerBase, b: CT_SolidFillProperties): void;
    static eq(a: XmlPartManagerBase, b: CT_Shape): void;
    private static er;
    private static es;
    private static et;
    static eo(a: XmlPartManagerBase, b: ColorTransform_Shade): void;
    static eu(a: XmlPartManagerBase, b: CT_SRgbColor): void;
    private static ev;
    static ew(a: XmlPartManagerBase, b: CT_StretchInfoProperties): void;
    private static ex;
    static ey(a: XmlPartManagerBase, b: CT_SysColor): void;
    private static ez;
    static e0(a: XmlPartManagerBase, b: ColorTransform_Tint): void;
    private static e1;
    private static e3;
    private static e2;
}
/**
 * @hidden
 */
export declare class DrawingPartManagerHelpers_DrawingSerializationHelper extends Base implements IEG_ColorChoiceVisitor$2<XmlPartManagerBase, boolean>, IEG_ColorTransformVisitor$2<XmlPartManagerBase, boolean>, IEG_FillModePropertiesVisitor$2<XmlPartManagerBase, boolean>, IEG_FillPropertiesVisitor$2<XmlPartManagerBase, boolean>, IEG_GeometryVisitor$2<XmlPartManagerBase, boolean>, IEG_LineDashPropertiesVisitor$2<XmlPartManagerBase, boolean>, IEG_LineFillPropertiesVisitor$2<XmlPartManagerBase, boolean>, IEG_LineJoinPropertiesVisitor$2<XmlPartManagerBase, boolean>, IEG_TextRunVisitor$2<XmlPartManagerBase, boolean>, IGraphicalObjectContentVisitor$2<XmlPartManagerBase, boolean> {
    static $t: Type;
    static readonly a: DrawingPartManagerHelpers_DrawingSerializationHelper;
    constructor();
    _visitCT_SchemeColor$i(a: CT_SchemeColor, b: XmlPartManagerBase): boolean;
    _visitCT_SRgbColor$i(a: CT_SRgbColor, b: XmlPartManagerBase): boolean;
    _visitCT_SysColor$i(a: CT_SysColor, b: XmlPartManagerBase): boolean;
    _visitCT_PresetColor$i(a: CT_PresetColor_Core, b: XmlPartManagerBase): boolean;
    _visitColorTransform_Alpha$i(a: ColorTransform_Alpha, b: XmlPartManagerBase): boolean;
    _visitColorTransform_AlphaMod$i(a: ColorTransform_AlphaMod, b: XmlPartManagerBase): boolean;
    _visitColorTransform_AlphaOff$i(a: ColorTransform_AlphaOff, b: XmlPartManagerBase): boolean;
    _visitColorTransform_Blue$i(a: ColorTransform_Blue, b: XmlPartManagerBase): boolean;
    _visitColorTransform_BlueMod$i(a: ColorTransform_BlueMod, b: XmlPartManagerBase): boolean;
    _visitColorTransform_BlueOff$i(a: ColorTransform_BlueOff, b: XmlPartManagerBase): boolean;
    _visitColorTransform_Comp$i(a: ColorTransform_Comp, b: XmlPartManagerBase): boolean;
    _visitColorTransform_Gray$i(a: ColorTransform_Gray, b: XmlPartManagerBase): boolean;
    _visitColorTransform_Green$i(a: ColorTransform_Green, b: XmlPartManagerBase): boolean;
    _visitColorTransform_GreenMod$i(a: ColorTransform_GreenMod, b: XmlPartManagerBase): boolean;
    _visitColorTransform_GreenOff$i(a: ColorTransform_GreenOff, b: XmlPartManagerBase): boolean;
    _visitColorTransform_Hue$i(a: ColorTransform_Hue, b: XmlPartManagerBase): boolean;
    _visitColorTransform_HueMod$i(a: ColorTransform_HueMod, b: XmlPartManagerBase): boolean;
    _visitColorTransform_HueOff$i(a: ColorTransform_HueOff, b: XmlPartManagerBase): boolean;
    _visitColorTransform_Inv$i(a: ColorTransform_Inv, b: XmlPartManagerBase): boolean;
    _visitColorTransform_Lum$i(a: ColorTransform_Lum, b: XmlPartManagerBase): boolean;
    _visitColorTransform_LumMod$i(a: ColorTransform_LumMod, b: XmlPartManagerBase): boolean;
    _visitColorTransform_LumOff$i(a: ColorTransform_LumOff, b: XmlPartManagerBase): boolean;
    _visitColorTransform_Red$i(a: ColorTransform_Red, b: XmlPartManagerBase): boolean;
    _visitColorTransform_RedMod$i(a: ColorTransform_RedMod, b: XmlPartManagerBase): boolean;
    _visitColorTransform_RedOff$i(a: ColorTransform_RedOff, b: XmlPartManagerBase): boolean;
    _visitColorTransform_Sat$i(a: ColorTransform_Sat, b: XmlPartManagerBase): boolean;
    _visitColorTransform_SatMod$i(a: ColorTransform_SatMod, b: XmlPartManagerBase): boolean;
    _visitColorTransform_SatOff$i(a: ColorTransform_SatOff, b: XmlPartManagerBase): boolean;
    _visitColorTransform_Shade$i(a: ColorTransform_Shade, b: XmlPartManagerBase): boolean;
    _visitColorTransform_Tint$i(a: ColorTransform_Tint, b: XmlPartManagerBase): boolean;
    _visitCT_StretchInfoProperties$i(a: CT_StretchInfoProperties, b: XmlPartManagerBase): boolean;
    _visitCT_TileInfoProperties$i(a: CT_TileInfoProperties, b: XmlPartManagerBase): boolean;
    _visitCT_BlipFillProperties$i(a: CT_BlipFillProperties, b: XmlPartManagerBase): boolean;
    _visitCT_GroupFillProperties$i(a: CT_GroupFillProperties, b: XmlPartManagerBase): boolean;
    _visitCT_NoFillProperties$i(a: CT_NoFillProperties, b: XmlPartManagerBase): boolean;
    _visitCT_SolidFillProperties$i(a: CT_SolidFillProperties, b: XmlPartManagerBase): boolean;
    _visitCT_PresetGeometry2D$i(a: CT_PresetGeometry2D, b: XmlPartManagerBase): boolean;
    _visitCT_CustomGeometry2D$i(a: CT_CustomGeometry2D, b: XmlPartManagerBase): boolean;
    _visitCT_DashStopList$i(a: CT_DashStopList, b: XmlPartManagerBase): boolean;
    _visitCT_PresetLineDashProperties$i(a: CT_PresetLineDashProperties, b: XmlPartManagerBase): boolean;
    _visitCT_NoFillProperties1$i(a: CT_NoFillProperties, b: XmlPartManagerBase): boolean;
    _visitCT_SolidFillProperties1$i(a: CT_SolidFillProperties, b: XmlPartManagerBase): boolean;
    _visitCT_LineJoinBevel$i(a: CT_LineJoinBevel, b: XmlPartManagerBase): boolean;
    _visitCT_LineJoinMiterProperties$i(a: CT_LineJoinMiterProperties, b: XmlPartManagerBase): boolean;
    _visitCT_LineJoinRound$i(a: CT_LineJoinRound, b: XmlPartManagerBase): boolean;
    _visitCT_RegularTextRun$i(a: CT_RegularTextRun, b: XmlPartManagerBase): boolean;
    _visitAlternateGraphicalObjectContent$i(a: AlternateGraphicalObjectContent, b: XmlPartManagerBase): boolean;
    _visitCT_Connector$i(a: CT_Connector, b: XmlPartManagerBase): boolean;
    _visitCT_GraphicalObjectFrame$i(a: CT_GraphicalObjectFrame, b: XmlPartManagerBase): boolean;
    _visitCT_GroupShape$i(a: CT_GroupShape, b: XmlPartManagerBase): boolean;
    _visitCT_Picture$i(a: CT_Picture, b: XmlPartManagerBase): boolean;
    _visitCT_Shape$i(a: CT_Shape, b: XmlPartManagerBase): boolean;
}
/**
 * @hidden
 */
export declare class EmfPartManager extends ImagePartManagerBase {
    static $t: Type;
    static readonly y: EmfPartManager;
    constructor();
    protected get_s(): string;
    readonly s: string;
    protected get_t(): string;
    readonly t: string;
    protected get_u(): string;
    readonly u: string;
    protected get_m(): string;
    readonly m: string;
    r(a: string): ImageFormat;
}
/**
 * @hidden
 */
export declare abstract class ExtendedPropertiesPartManager extends XmlPartManagerBase {
    static $t: Type;
    static readonly a2: string;
    private static readonly a5;
    private static readonly a4;
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare abstract class OfficeExtensibilityPartManagerBase extends XmlPartManagerBase {
    static $t: Type;
    protected get_m(): string;
    readonly m: string;
    protected get_g(): boolean;
    readonly g: boolean;
    f(a: IPackagePart, b: IPackageRelationship): PartManagerBase;
    a(): WorkItem$1<any>;
    b(a: any): WorkItem;
    protected u(a: any): WorkItem;
    protected abstract a2: RoundTripControlData;
}
/**
 * @hidden
 */
export declare class Office2007ExtensibilityPartManager extends OfficeExtensibilityPartManagerBase {
    static $t: Type;
    private static readonly a6;
    static readonly a4: Office2007ExtensibilityPartManager;
    constructor();
    protected get_a2(): RoundTripControlData;
    protected set_a2(a: RoundTripControlData): void;
    protected a2: RoundTripControlData;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
}
/**
 * @hidden
 */
export declare class Office2010ExtensibilityPartManager extends OfficeExtensibilityPartManagerBase {
    static $t: Type;
    private static readonly a6;
    static readonly a4: Office2010ExtensibilityPartManager;
    constructor();
    protected get_a2(): RoundTripControlData;
    protected set_a2(a: RoundTripControlData): void;
    protected a2: RoundTripControlData;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
}
/**
 * @hidden
 */
export declare class GifPartManager extends ImagePartManagerBase {
    static $t: Type;
    static readonly y: GifPartManager;
    constructor();
    protected get_s(): string;
    readonly s: string;
    protected get_t(): string;
    readonly t: string;
    protected get_u(): string;
    readonly u: string;
    protected get_m(): string;
    readonly m: string;
    r(a: string): ImageFormat;
}
/**
 * @hidden
 */
export declare class JpegPartManager extends ImagePartManagerBase {
    static $t: Type;
    static readonly y: JpegPartManager;
    constructor();
    protected get_s(): string;
    readonly s: string;
    protected get_t(): string;
    readonly t: string;
    protected get_u(): string;
    readonly u: string;
    protected get_m(): string;
    readonly m: string;
    r(a: string): ImageFormat;
}
/**
 * @hidden
 */
export declare class PngPartManager extends ImagePartManagerBase {
    static $t: Type;
    static readonly y: PngPartManager;
    constructor();
    protected get_s(): string;
    readonly s: string;
    protected get_t(): string;
    readonly t: string;
    protected get_u(): string;
    readonly u: string;
    protected get_m(): string;
    readonly m: string;
    r(a: string): ImageFormat;
}
/**
 * @hidden
 */
export declare abstract class PrinterSettingsPartManager extends XmlPartManagerBase {
    static $t: Type;
    static readonly a3: string;
    static readonly a4: string;
    private static readonly a6;
    private static readonly a5;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
    a(): WorkItem$1<any>;
    b(a: any): WorkItem;
    protected u(a: any): WorkItem;
}
/**
 * @hidden
 */
export declare class RoundTripDataPartManager extends PartManagerBase {
    static $t: Type;
    private readonly u;
    private readonly v;
    private readonly w;
    private t;
    constructor(a: string, b: string, c: string, d: OfficeDocumentManager);
    a(): WorkItem$1<any>;
    b(a: any): WorkItem;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_m(): string;
    readonly m: string;
    protected get_g(): boolean;
    readonly g: boolean;
    static r(a: OfficeDocumentManager, b: Stream, c: string): RoundTripControlData;
    static s(a: RoundTripControlData, b: OfficeDocumentManager, c: Stream, d?: boolean): WorkItem;
}
/**
 * @hidden
 */
export declare abstract class ThemeManagerPartManager extends XmlPartManagerBase {
    static $t: Type;
    static readonly a2: string;
    static readonly a5: string;
    static readonly a4: string;
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare abstract class ThemePartManager extends XmlPartManagerBase {
    static $t: Type;
    static readonly a6: string;
    static readonly a8: string;
    static readonly a7: string;
    private readonly a2;
    constructor(a: boolean);
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
    a(): WorkItem$1<any>;
}
/**
 * @hidden
 */
export declare class TiffPartManager extends ImagePartManagerBase {
    static $t: Type;
    static readonly y: TiffPartManager;
    constructor();
    protected get_s(): string;
    readonly s: string;
    protected get_t(): string;
    readonly t: string;
    protected get_u(): string;
    readonly u: string;
    protected get_m(): string;
    readonly m: string;
    r(a: string): ImageFormat;
}
/**
 * @hidden
 */
export declare abstract class VbaProjectPartManager extends PartManagerBase {
    static $t: Type;
    static readonly u: string;
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare abstract class VmlDrawingPartManager extends XmlPartManagerBase {
    static $t: Type;
    static readonly a6: string;
    static readonly a7: string;
    private readonly a2;
    constructor(a: boolean);
    protected get_m(): string;
    readonly m: string;
    protected a0(): XmlReader;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare class WmfPartManager extends ImagePartManagerBase {
    static $t: Type;
    static readonly y: WmfPartManager;
    constructor();
    protected get_s(): string;
    readonly s: string;
    protected get_t(): string;
    readonly t: string;
    protected get_u(): string;
    readonly u: string;
    protected get_m(): string;
    readonly m: string;
    r(a: string): ImageFormat;
}
/**
 * @hidden
 */
export declare abstract class XmlNamespaceDefinitionBase extends Base {
    static $t: Type;
    abstract i(a: ST_ConformanceClass): string;
    abstract readonly j: string;
    protected static k(a: XmlPartManagerBase, b: AttributeValue): void;
    static g<T>($t: Type, a: T, b: T, c: boolean): string;
    static f<T>($t: Type, value_: T): string;
    protected static h(a: string): string;
    static b<T>($t: Type, a: string, b?: T): T;
    static c<T>($t: Type, a: AttributeValue, b: T, c: (arg1: string) => T): T;
    static e<T>($t: Type, a: string, b: (arg1: string) => T): List$1<T>;
    protected static l(a: XmlPartManagerBase, b: string, c: boolean): {
        p2: boolean;
    };
    protected static z(a: XmlPartManagerBase, b: string, c: string, d: boolean): void;
    protected static m(a: XmlPartManagerBase, b: string, c: number): {
        p2: number;
    };
    protected static aa(a: XmlPartManagerBase, b: string, c: string, d: number): void;
    protected static n(a: XmlPartManagerBase, b: string, c: Date): {
        p2: Date;
    };
    protected static ab(a: XmlPartManagerBase, b: string, c: string, d: Date): void;
    protected static o(a: XmlPartManagerBase, b: string, c: number): {
        p2: number;
    };
    protected static ac(a: XmlPartManagerBase, b: string, c: string, d: number): void;
    protected static p(a: XmlPartManagerBase, b: string, c: number): {
        p2: number;
    };
    protected static ad(a: XmlPartManagerBase, b: string, c: string, d: number): void;
    protected static q(a: XmlPartManagerBase, b: string, c: number): {
        p2: number;
    };
    protected static ae(a: XmlPartManagerBase, b: string, c: string, d: number): void;
    protected static r(a: XmlPartManagerBase, b: string, c: number): {
        p2: number;
    };
    protected static af(a: XmlPartManagerBase, b: string, c: string, d: number): void;
    protected static s(a: XmlPartManagerBase, b: string, c: number): {
        p2: number;
    };
    protected static ag(a: XmlPartManagerBase, b: string, c: string, d: number): void;
    protected static t(a: XmlPartManagerBase, b: string, c: number): {
        p2: number;
    };
    protected static ah(a: XmlPartManagerBase, b: string, c: string, d: number): void;
    private static readonly a;
    private static d;
    protected static u(a: XmlPartManagerBase, b: string, c: string, d?: XmlNamespaceDefinitionBase_PreserveSpaceMode): {
        p2: string;
    };
    protected static ai(a: XmlPartManagerBase, b: string, c: string, d: string, e?: () => void, f?: XmlNamespaceDefinitionBase_PreserveSpaceMode): void;
    protected static v(a: XmlPartManagerBase, b: string, c: number): {
        p2: number;
    };
    protected static aj(a: XmlPartManagerBase, b: string, c: string, d: number): void;
    protected static w(a: XmlPartManagerBase, b: string, c: number): {
        p2: number;
    };
    protected static ak(a: XmlPartManagerBase, b: string, c: string, d: number): void;
    protected static x(a: XmlPartManagerBase, b: string, c: number): {
        p2: number;
    };
    protected static al(a: XmlPartManagerBase, b: string, c: string, d: number): void;
    protected static y(a: XmlPartManagerBase, b: string, c: number): {
        p2: number;
    };
    protected static am(a: XmlPartManagerBase, b: string, c: string, d: number): void;
}
/**
 * @hidden
 */
export declare class CoreProperties extends XmlNamespaceDefinitionBase {
    static $t: Type;
    private static readonly au;
    static readonly ap: string;
    static readonly aq: string;
    static readonly ar: string;
    static readonly as: string;
    static readonly at: string;
    static readonly av: string;
    static readonly aw: string;
    static readonly an: CoreProperties;
    constructor();
    i(a: ST_ConformanceClass): string;
    protected get_j(): string;
    readonly j: string;
    static ax(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static a4(a: XmlPartManagerBase, b: string): void;
    static ay(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static a5(a: XmlPartManagerBase, b: string): void;
    static az(a: XmlPartManagerBase): void;
    static a6(a: XmlPartManagerBase): void;
    static a0(a: XmlPartManagerBase, b: string, c: string): {
        p1: string;
        p2: string;
    };
    static a7(a: XmlPartManagerBase, b: string, c: string): void;
    static a1(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static a8(a: XmlPartManagerBase, b: string): void;
    static a2(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static a9(a: XmlPartManagerBase, b: string): void;
    static a3(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static ba(a: XmlPartManagerBase, b: string): void;
}
/**
 * @hidden
 */
export declare class DcDcmiType extends XmlNamespaceDefinitionBase {
    static $t: Type;
    static readonly an: DcDcmiType;
    constructor();
    i(a: ST_ConformanceClass): string;
    protected get_j(): string;
    readonly j: string;
}
/**
 * @hidden
 */
export declare class DcElements extends XmlNamespaceDefinitionBase {
    static $t: Type;
    static readonly aq: string;
    static readonly an: DcElements;
    constructor();
    i(a: ST_ConformanceClass): string;
    protected get_j(): string;
    readonly j: string;
    static au(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static ay(a: XmlPartManagerBase, b: string): void;
    static av(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static az(a: XmlPartManagerBase, b: string): void;
    static aw(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static a0(a: XmlPartManagerBase, b: string): void;
    static ax(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static a1(a: XmlPartManagerBase, b: string): void;
}
/**
 * @hidden
 */
export declare class DcTerms extends XmlNamespaceDefinitionBase {
    static $t: Type;
    static readonly an: DcTerms;
    constructor();
    i(a: ST_ConformanceClass): string;
    protected get_j(): string;
    readonly j: string;
    static at(a: XmlPartManagerBase, b: Date): {
        p1: Date;
    };
    static av(a: XmlPartManagerBase, b: Date): void;
    static au(a: XmlPartManagerBase, b: Date): {
        p1: Date;
    };
    static aw(a: XmlPartManagerBase, b: Date): void;
}
/**
 * @hidden
 */
export declare class Drawing2010Main extends XmlNamespaceDefinitionBase {
    static $t: Type;
    private static readonly ap;
    static readonly an: Drawing2010Main;
    constructor();
    i(a: ST_ConformanceClass): string;
    protected get_j(): string;
    readonly j: string;
}
/**
 * @hidden
 */
export declare class Drawing2010Slicer extends XmlNamespaceDefinitionBase {
    static $t: Type;
    private static readonly ar;
    static readonly as: string;
    static readonly an: Drawing2010Slicer;
    constructor();
    i(a: ST_ConformanceClass): string;
    protected get_j(): string;
    readonly j: string;
    static at(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static au(a: XmlPartManagerBase, b: string): void;
}
/**
 * @hidden
 */
export declare class DrawingMLChart extends XmlNamespaceDefinitionBase {
    static $t: Type;
    private static readonly dx;
    private static readonly dw;
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
    static readonly bl: string;
    static readonly bm: string;
    static readonly bn: string;
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
    static readonly cg: string;
    static readonly ch: string;
    static readonly ci: string;
    static readonly cj: string;
    static readonly ck: string;
    static readonly cl: string;
    static readonly cm: string;
    static readonly cn: string;
    static readonly co: string;
    static readonly cp: string;
    static readonly cq: string;
    static readonly cr: string;
    static readonly cs: string;
    static readonly ct: string;
    static readonly cu: string;
    static readonly cv: string;
    static readonly cw: string;
    static readonly cx: string;
    static readonly cy: string;
    static readonly cz: string;
    static readonly c0: string;
    static readonly c1: string;
    static readonly c2: string;
    static readonly c3: string;
    static readonly c4: string;
    static readonly c5: string;
    static readonly c6: string;
    static readonly c7: string;
    static readonly c8: string;
    static readonly c9: string;
    static readonly da: string;
    static readonly db: string;
    static readonly dc: string;
    static readonly dd: string;
    static readonly de: string;
    static readonly df: string;
    static readonly dg: string;
    static readonly dh: string;
    static readonly di: string;
    static readonly dj: string;
    static readonly dk: string;
    static readonly dl: string;
    static readonly dm: string;
    static readonly dn: string;
    static readonly dp: string;
    static readonly dq: string;
    static readonly dr: string;
    static readonly ds: string;
    static readonly dt: string;
    static readonly du: string;
    static readonly dv: string;
    static readonly dy: string;
    static readonly dz: string;
    static readonly d0: string;
    static readonly d1: string;
    static readonly d2: string;
    static readonly d3: string;
    static readonly d4: string;
    static readonly d5: string;
    static readonly d6: string;
    static readonly d7: string;
    static readonly d8: string;
    static readonly d9: string;
    static readonly ea: string;
    static readonly eb: string;
    static readonly ec: string;
    static readonly ed: string;
    static readonly ee: string;
    static readonly ef: string;
    static readonly eg: string;
    static readonly eh: string;
    static readonly ei: string;
    static readonly ej: string;
    static readonly ek: string;
    static readonly el: string;
    static readonly em: string;
    static readonly en: string;
    static readonly eo: string;
    static readonly ep: string;
    static readonly eq: string;
    static readonly er: string;
    static readonly es: string;
    static readonly et: string;
    static readonly eu: string;
    static readonly ev: string;
    static readonly ew: string;
    static readonly ex: string;
    static readonly ey: string;
    static readonly ez: string;
    static readonly e0: string;
    static readonly e1: string;
    static readonly e2: string;
    static readonly e3: string;
    static readonly e4: string;
    static readonly e5: string;
    static readonly e6: string;
    static readonly e7: string;
    static readonly e8: string;
    static readonly e9: string;
    static readonly fa: string;
    static readonly fb: string;
    static readonly fc: string;
    static readonly fd: string;
    static readonly fe: string;
    static readonly ff: string;
    static readonly fg: string;
    static readonly fh: string;
    static readonly fi: string;
    static readonly fj: string;
    static readonly fk: string;
    static readonly fl: string;
    static readonly fm: string;
    static readonly fn: string;
    static readonly fo: string;
    static readonly fp: string;
    static readonly fq: string;
    static readonly fr: string;
    static readonly fs: string;
    static readonly ft: string;
    static readonly fu: string;
    static readonly fv: string;
    static readonly fw: string;
    static readonly fx: string;
    static readonly fy: string;
    static readonly fz: string;
    static readonly f0: string;
    static readonly f1: string;
    static readonly f2: string;
    static readonly f3: string;
    static readonly f4: string;
    static readonly f5: string;
    static readonly f6: string;
    static readonly f7: string;
    static readonly f8: string;
    static readonly f9: string;
    static readonly ga: string;
    static readonly gb: string;
    static readonly gc: string;
    static readonly gd: string;
    static readonly ge: string;
    static readonly gf: string;
    static readonly gg: string;
    static readonly gh: string;
    static readonly gi: string;
    static readonly gj: string;
    static readonly gk: string;
    static readonly gl: string;
    static readonly gm: string;
    static readonly gn: string;
    static readonly go: string;
    static readonly gp: string;
    static readonly gq: string;
    static readonly gr: string;
    static readonly gs: string;
    static readonly gt: string;
    static readonly gu: string;
    static readonly gv: string;
    static readonly gw: string;
    static readonly an: DrawingMLChart;
    constructor();
    i(a: ST_ConformanceClass): string;
    protected get_j(): string;
    readonly j: string;
    static gx(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static gy(a: XmlPartManagerBase, b?: string): void;
}
/**
 * @hidden
 */
export declare class DrawingMLChart2012 extends XmlNamespaceDefinitionBase {
    static $t: Type;
    private static readonly bl;
    private static readonly bk;
    static readonly bj: string;
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
    static readonly bm: string;
    static readonly bn: string;
    static readonly bo: string;
    static readonly bp: string;
    static readonly bq: string;
    static readonly br: string;
    static readonly bs: string;
    static readonly bt: string;
    static readonly bu: string;
    static readonly bv: string;
    static readonly an: DrawingMLChart2012;
    constructor();
    i(a: ST_ConformanceClass): string;
    protected get_j(): string;
    readonly j: string;
}
/**
 * @hidden
 */
export declare class DrawingMLChart2014 extends XmlNamespaceDefinitionBase {
    static $t: Type;
    private static readonly as;
    private static readonly ar;
    static readonly aq: string;
    static readonly ap: string;
    static readonly an: DrawingMLChart2014;
    constructor();
    i(a: ST_ConformanceClass): string;
    protected get_j(): string;
    readonly j: string;
    static at(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static au(a: XmlPartManagerBase, b?: string): void;
}
/**
 * @hidden
 */
export declare class DrawingMLChartEx2015_9_8 extends XmlNamespaceDefinitionBase {
    static $t: Type;
    private static readonly ar;
    private static readonly aq;
    static readonly ap: string;
    static readonly an: DrawingMLChartEx2015_9_8;
    constructor();
    i(a: ST_ConformanceClass): string;
    protected get_j(): string;
    readonly j: string;
}
/**
 * @hidden
 */
export declare class DrawingMLChartEx2015_10_21 extends XmlNamespaceDefinitionBase {
    static $t: Type;
    private static readonly ar;
    private static readonly aq;
    static readonly ap: string;
    static readonly an: DrawingMLChartEx2015_10_21;
    constructor();
    i(a: ST_ConformanceClass): string;
    protected get_j(): string;
    readonly j: string;
}
/**
 * @hidden
 */
export declare class DrawingMLChartEx2016_5_10 extends XmlNamespaceDefinitionBase {
    static $t: Type;
    private static readonly ar;
    private static readonly aq;
    static readonly ap: string;
    static readonly an: DrawingMLChartEx2016_5_10;
    constructor();
    i(a: ST_ConformanceClass): string;
    protected get_j(): string;
    readonly j: string;
}
/**
 * @hidden
 */
export declare class DrawingMLMain extends XmlNamespaceDefinitionBase {
    static $t: Type;
    private static readonly gp;
    private static readonly go;
    static readonly aq: string;
    static readonly ar: string;
    static readonly as: string;
    static readonly at: string;
    static readonly au: string;
    static readonly av: string;
    static readonly ay: string;
    static readonly az: string;
    static readonly a1: string;
    static readonly a6: string;
    static readonly a8: string;
    static readonly bf: string;
    static readonly bg: string;
    static readonly bs: string;
    static readonly bt: string;
    static readonly bu: string;
    static readonly bv: string;
    static readonly bw: string;
    static readonly bz: string;
    static readonly cg: string;
    static readonly ch: string;
    static readonly ci: string;
    static readonly cm: string;
    static readonly cp: string;
    static readonly ct: string;
    static readonly cv: string;
    static readonly cw: string;
    static readonly cx: string;
    static readonly cz: string;
    static readonly c9: string;
    static readonly da: string;
    static readonly de: string;
    static readonly dj: string;
    static readonly dq: string;
    static readonly dr: string;
    static readonly ds: string;
    static readonly dt: string;
    static readonly dy: string;
    static readonly dz: string;
    static readonly d7: string;
    static readonly d8: string;
    static readonly d9: string;
    static readonly eb: string;
    static readonly ec: string;
    static readonly eg: string;
    static readonly ek: string;
    static readonly el: string;
    static readonly em: string;
    static readonly en: string;
    static readonly ep: string;
    static readonly eq: string;
    static readonly er: string;
    static readonly es: string;
    static readonly ew: string;
    static readonly e1: string;
    static readonly e2: string;
    static readonly e8: string;
    static readonly e9: string;
    static readonly fa: string;
    static readonly fg: string;
    static readonly fq: string;
    static readonly fw: string;
    static readonly fx: string;
    static readonly f0: string;
    static readonly f1: string;
    static readonly f2: string;
    static readonly f3: string;
    static readonly f4: string;
    static readonly f5: string;
    static readonly f6: string;
    static readonly gh: string;
    static readonly gk: string;
    static readonly gm: string;
    static readonly gy: string;
    static readonly ha: string;
    static readonly hb: string;
    static readonly hd: string;
    static readonly hi: string;
    static readonly hl: string;
    static readonly hn: string;
    static readonly hp: string;
    static readonly hs: string;
    static readonly ht: string;
    static readonly hu: string;
    static readonly hx: string;
    static readonly hy: string;
    static readonly hz: string;
    static readonly h7: string;
    static readonly ia: string;
    static readonly ib: string;
    static readonly ic: string;
    static readonly ie: string;
    static readonly ii: string;
    static readonly io: string;
    static readonly iy: string;
    static readonly iz: string;
    static readonly i0: string;
    static readonly i2: string;
    static readonly i8: string;
    static readonly ja: string;
    static readonly je: string;
    static readonly jg: string;
    static readonly jh: string;
    static readonly ji: string;
    static readonly jm: string;
    static readonly j8: string;
    static readonly gr: string;
    static readonly g5: string;
    static readonly hr: string;
    static readonly id: string;
    static readonly ip: string;
    static readonly iq: string;
    static readonly bi: string;
    static readonly bl: string;
    static readonly bm: string;
    static readonly cd: string;
    static readonly ft: string;
    static readonly hc: string;
    static readonly bc: string;
    static readonly g3: string;
    static readonly jy: string;
    static readonly h3: string;
    static readonly cs: string;
    static readonly du: string;
    static readonly e7: string;
    static readonly ig: string;
    static readonly ef: string;
    static readonly fi: string;
    static readonly dh: string;
    static readonly di: string;
    static readonly ej: string;
    static readonly ey: string;
    static readonly e3: string;
    static readonly hh: string;
    static readonly i7: string;
    static readonly ju: string;
    static readonly jv: string;
    static readonly jw: string;
    static readonly jx: string;
    static readonly a2: string;
    static readonly a3: string;
    static readonly a4: string;
    static readonly a5: string;
    static readonly a7: string;
    static readonly ba: string;
    static readonly a9: string;
    static readonly br: string;
    static readonly jj: string;
    static readonly bp: string;
    static readonly bx: string;
    static readonly cj: string;
    static readonly cl: string;
    static readonly dd: string;
    static readonly dg: string;
    static readonly dw: string;
    static readonly dx: string;
    static readonly eo: string;
    static readonly e6: string;
    static readonly ck: string;
    static readonly cn: string;
    static readonly ei: string;
    static readonly ff: string;
    static readonly hq: string;
    static readonly h0: string;
    static readonly im: string;
    static readonly eu: string;
    static readonly fu: string;
    static readonly hf: string;
    static readonly jk: string;
    static readonly et: string;
    static readonly il: string;
    static readonly bk: string;
    static readonly cy: string;
    static readonly ho: string;
    static readonly gl: string;
    static readonly h6: string;
    static readonly dc: string;
    static readonly bn: string;
    static readonly dv: string;
    static readonly ax: string;
    static readonly c2: string;
    static readonly eh: string;
    static readonly hg: string;
    static readonly hw: string;
    static readonly c1: string;
    static readonly hk: string;
    static readonly d2: string;
    static readonly bo: string;
    static readonly dl: string;
    static readonly d0: string;
    static readonly fz: string;
    static readonly cr: string;
    static readonly d1: string;
    static readonly dk: string;
    static readonly h1: string;
    static readonly c4: string;
    static readonly f8: string;
    static readonly f9: string;
    static readonly ga: string;
    static readonly gb: string;
    static readonly gc: string;
    static readonly gd: string;
    static readonly ge: string;
    static readonly gf: string;
    static readonly gg: string;
    static readonly fy: string;
    static readonly is: string;
    static readonly it: string;
    static readonly iw: string;
    static readonly ix: string;
    static readonly b4: string;
    static readonly b5: string;
    static readonly b6: string;
    static readonly b7: string;
    static readonly b9: string;
    static readonly ca: string;
    static readonly cb: string;
    static readonly b1: string;
    static readonly b8: string;
    static readonly b2: string;
    static readonly b3: string;
    static readonly c5: string;
    static readonly jc: string;
    static readonly b0: string;
    static readonly d3: string;
    static readonly dm: string;
    static readonly jd: string;
    static readonly an: DrawingMLMain;
    constructor();
    i(a: ST_ConformanceClass): string;
    protected get_j(): string;
    readonly j: string;
    private static kv;
    private static nw;
    private static kw;
    private static nx;
    private static kx;
    private static ny;
    private static ky;
    private static nz;
    static kz(a: XmlPartManagerBase, b: string, c: ST_DrawingElementId, d: string, e: string, f: boolean, g: string): {
        p2: ST_DrawingElementId;
        p3: string;
        p4: string;
        p5: boolean;
        p6: string;
    };
    static n0(a: XmlPartManagerBase, b: string, c: ST_DrawingElementId, d: string, e: string, f: boolean, g: string): void;
    private static k0;
    private static n1;
    static k1(a: XmlPartManagerBase, b: string, c: ST_Coordinate, d: ST_Coordinate): {
        p2: ST_Coordinate;
        p3: ST_Coordinate;
    };
    static n2(a: XmlPartManagerBase, b: string, c: ST_Coordinate, d: ST_Coordinate): void;
    private static k2;
    private static n3;
    private static k3;
    private static n4;
    private static k4;
    private static n5;
    static k5(a: XmlPartManagerBase, b: string, c: ST_PositiveCoordinate, d: ST_PositiveCoordinate): {
        p2: ST_PositiveCoordinate;
        p3: ST_PositiveCoordinate;
    };
    static n6(a: XmlPartManagerBase, b: string, c: ST_PositiveCoordinate, d: ST_PositiveCoordinate): void;
    private static k6;
    private static n7;
    static k7(a: XmlPartManagerBase, b: string, c: number): {
        p2: number;
    };
    static n8(a: XmlPartManagerBase, b: string, c: number): void;
    static k8(a: XmlPartManagerBase, b: string, c: string, d: ST_Panose, e: Nullable$1<number>, f: Nullable$1<number>, g?: boolean): {
        p2: string;
        p3: ST_Panose;
        p4: Nullable$1<number>;
        p5: Nullable$1<number>;
    };
    private static n9;
    static ka(a: XmlPartManagerBase): void;
    static nb(a: XmlPartManagerBase): void;
    static kb(a: XmlPartManagerBase): void;
    static nc(a: XmlPartManagerBase): void;
    static kc(a: XmlPartManagerBase): void;
    static nd(a: XmlPartManagerBase): void;
    static kd(a: XmlPartManagerBase): void;
    static ne(a: XmlPartManagerBase): void;
    static ke(a: XmlPartManagerBase): void;
    static nf(a: XmlPartManagerBase): void;
    static kf(a: XmlPartManagerBase): void;
    static ng(a: XmlPartManagerBase): void;
    static kg(a: XmlPartManagerBase, b: ST_PositiveFixedPercentage): {
        p1: ST_PositiveFixedPercentage;
    };
    static nh(a: XmlPartManagerBase, b: ST_PositiveFixedPercentage): void;
    static kh(a: XmlPartManagerBase, b: ST_PositivePercentage): {
        p1: ST_PositivePercentage;
    };
    static ni(a: XmlPartManagerBase, b: ST_PositivePercentage): void;
    static ki(a: XmlPartManagerBase, b: ST_FixedPercentage): {
        p1: ST_FixedPercentage;
    };
    static nj(a: XmlPartManagerBase, b: ST_FixedPercentage): void;
    static kj(a: XmlPartManagerBase): void;
    static nk(a: XmlPartManagerBase): void;
    static kk(a: XmlPartManagerBase, b: string, c: string, d: Nullable$1<ST_BlipCompression>, e?: boolean): {
        p1: string;
        p2: string;
        p3: Nullable$1<ST_BlipCompression>;
    };
    static nl(a: XmlPartManagerBase, b: string, c: string, d: Nullable$1<ST_BlipCompression>): void;
    static kl(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<boolean>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<boolean>;
    };
    static nm(a: XmlPartManagerBase, b?: Nullable$1<number>, c?: Nullable$1<boolean>): void;
    static km(a: XmlPartManagerBase, b: ST_Percentage): {
        p1: ST_Percentage;
    };
    static nn(a: XmlPartManagerBase, b: ST_Percentage): void;
    static kn(a: XmlPartManagerBase, b: ST_Percentage): {
        p1: ST_Percentage;
    };
    static no(a: XmlPartManagerBase, b: ST_Percentage): void;
    static ko(a: XmlPartManagerBase, b: ST_Percentage): {
        p1: ST_Percentage;
    };
    static np(a: XmlPartManagerBase, b: ST_Percentage): void;
    static kp(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<boolean>, d: Nullable$1<ST_TextVertOverflowType>, e: Nullable$1<ST_TextHorzOverflowType>, f: Nullable$1<ST_TextVerticalType>, g: Nullable$1<ST_TextWrappingType>, h: Nullable$1<ST_Coordinate32>, i: Nullable$1<ST_Coordinate32>, j: Nullable$1<ST_Coordinate32>, k: Nullable$1<ST_Coordinate32>, l: Nullable$1<number>, m: Nullable$1<number>, n: Nullable$1<boolean>, o: Nullable$1<boolean>, p: Nullable$1<ST_TextAnchoringType>, q: Nullable$1<boolean>, r: Nullable$1<boolean>, s: boolean, t: Nullable$1<boolean>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<boolean>;
        p3: Nullable$1<ST_TextVertOverflowType>;
        p4: Nullable$1<ST_TextHorzOverflowType>;
        p5: Nullable$1<ST_TextVerticalType>;
        p6: Nullable$1<ST_TextWrappingType>;
        p7: Nullable$1<ST_Coordinate32>;
        p8: Nullable$1<ST_Coordinate32>;
        p9: Nullable$1<ST_Coordinate32>;
        p10: Nullable$1<ST_Coordinate32>;
        p11: Nullable$1<number>;
        p12: Nullable$1<number>;
        p13: Nullable$1<boolean>;
        p14: Nullable$1<boolean>;
        p15: Nullable$1<ST_TextAnchoringType>;
        p16: Nullable$1<boolean>;
        p17: Nullable$1<boolean>;
        p18: boolean;
        p19: Nullable$1<boolean>;
    };
    static nq(a: XmlPartManagerBase, b?: Nullable$1<number>, c?: Nullable$1<boolean>, d?: Nullable$1<ST_TextVertOverflowType>, e?: Nullable$1<ST_TextHorzOverflowType>, f?: Nullable$1<ST_TextVerticalType>, g?: Nullable$1<ST_TextWrappingType>, h?: Nullable$1<ST_Coordinate32>, i?: Nullable$1<ST_Coordinate32>, j?: Nullable$1<ST_Coordinate32>, k?: Nullable$1<ST_Coordinate32>, l?: Nullable$1<number>, m?: Nullable$1<number>, n?: Nullable$1<boolean>, o?: Nullable$1<boolean>, p?: Nullable$1<ST_TextAnchoringType>, q?: Nullable$1<boolean>, r?: Nullable$1<boolean>, s?: boolean, t?: Nullable$1<boolean>): void;
    static kq(a: XmlPartManagerBase, b: ST_PositiveCoordinate, c: ST_PositiveCoordinate): {
        p1: ST_PositiveCoordinate;
        p2: ST_PositiveCoordinate;
    };
    static nr(a: XmlPartManagerBase, b: ST_PositiveCoordinate, c: ST_PositiveCoordinate): void;
    static kr(a: XmlPartManagerBase, b: ST_Coordinate, c: ST_Coordinate): {
        p1: ST_Coordinate;
        p2: ST_Coordinate;
    };
    static ns(a: XmlPartManagerBase, b: ST_Coordinate, c: ST_Coordinate): void;
    static ks(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static nt(a: XmlPartManagerBase, b: string): void;
    static kt(a: XmlPartManagerBase): void;
    static nu(a: XmlPartManagerBase): void;
    static ku(a: XmlPartManagerBase, b: string, c: ST_Panose, d: Nullable$1<number>, e: Nullable$1<number>, f?: boolean): {
        p1: string;
        p2: ST_Panose;
        p3: Nullable$1<number>;
        p4: Nullable$1<number>;
    };
    static nv(a: XmlPartManagerBase, b: string, c?: ST_Panose, d?: Nullable$1<number>, e?: number): void;
    static k9(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static oa(a: XmlPartManagerBase, b?: string): void;
    static la(a: XmlPartManagerBase): void;
    static ob(a: XmlPartManagerBase): void;
    static lb(a: XmlPartManagerBase): void;
    static oc(a: XmlPartManagerBase): void;
    static lc(a: XmlPartManagerBase): void;
    static od(a: XmlPartManagerBase): void;
    static ld(a: XmlPartManagerBase, b: string, c: ST_Panose, d: Nullable$1<number>, e: number): {
        p1: string;
        p2: ST_Panose;
        p3: Nullable$1<number>;
        p4: number;
    };
    static oe(a: XmlPartManagerBase, b: string, c?: ST_Panose, d?: Nullable$1<number>, e?: number): void;
    static le(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static of(a: XmlPartManagerBase, b: number): void;
    static lf(a: XmlPartManagerBase, b: ST_PositiveCoordinate, c: ST_PositiveCoordinate): {
        p1: ST_PositiveCoordinate;
        p2: ST_PositiveCoordinate;
    };
    static og(a: XmlPartManagerBase, b: ST_PositiveCoordinate, c: ST_PositiveCoordinate): void;
    static lg(a: XmlPartManagerBase): void;
    static oh(a: XmlPartManagerBase): void;
    static lh(a: XmlPartManagerBase): void;
    static oi(a: XmlPartManagerBase): void;
    static li(a: XmlPartManagerBase): void;
    static oj(a: XmlPartManagerBase): void;
    static lj(a: XmlPartManagerBase, b: ST_Percentage, c: ST_Percentage, d: ST_Percentage, e: ST_Percentage): {
        p1: ST_Percentage;
        p2: ST_Percentage;
        p3: ST_Percentage;
        p4: ST_Percentage;
    };
    static ok(a: XmlPartManagerBase, b: ST_Percentage, c: ST_Percentage, d: ST_Percentage, e: ST_Percentage): void;
    static lk(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static ol(a: XmlPartManagerBase, b: number): void;
    static ll(a: XmlPartManagerBase): void;
    static om(a: XmlPartManagerBase): void;
    static lm(a: XmlPartManagerBase, b: string, c: string): {
        p1: string;
        p2: string;
    };
    static on(a: XmlPartManagerBase, b: string, c: string): void;
    static ln(a: XmlPartManagerBase, b: ST_FontCollectionIndex): {
        p1: ST_FontCollectionIndex;
    };
    static oo(a: XmlPartManagerBase, b: ST_FontCollectionIndex): void;
    static lo(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static op(a: XmlPartManagerBase, b: string): void;
    static lp(a: XmlPartManagerBase, b: string, c: string): {
        p1: string;
        p2: string;
    };
    static oq(a: XmlPartManagerBase, b: string, c: string): void;
    static lq(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static or(a: XmlPartManagerBase, b: string): void;
    static lr(a: XmlPartManagerBase): void;
    static os(a: XmlPartManagerBase): void;
    static ls(a: XmlPartManagerBase, b: boolean, c: boolean, d: boolean, e: boolean, f: boolean, g: boolean): {
        p1: boolean;
        p2: boolean;
        p3: boolean;
        p4: boolean;
        p5: boolean;
        p6: boolean;
    };
    static ot(a: XmlPartManagerBase, b?: boolean, c?: boolean, d?: boolean, e?: boolean, f?: boolean, g?: boolean): void;
    static lt(a: XmlPartManagerBase): void;
    static ou(a: XmlPartManagerBase): void;
    static lu(a: XmlPartManagerBase, b: ST_Percentage): {
        p1: ST_Percentage;
    };
    static ov(a: XmlPartManagerBase, b: ST_Percentage): void;
    static lv(a: XmlPartManagerBase, b: ST_Percentage): {
        p1: ST_Percentage;
    };
    static ow(a: XmlPartManagerBase, b: ST_Percentage): void;
    static lw(a: XmlPartManagerBase, b: ST_Percentage): {
        p1: ST_Percentage;
    };
    static ox(a: XmlPartManagerBase, b: ST_Percentage): void;
    static lx(a: XmlPartManagerBase): void;
    static oy(a: XmlPartManagerBase): void;
    static ly(a: XmlPartManagerBase, b: Nullable$1<ST_LineEndType>, c: Nullable$1<ST_LineEndWidth>, d: Nullable$1<ST_LineEndLength>): {
        p1: Nullable$1<ST_LineEndType>;
        p2: Nullable$1<ST_LineEndWidth>;
        p3: Nullable$1<ST_LineEndLength>;
    };
    static oz(a: XmlPartManagerBase, b: Nullable$1<ST_LineEndType>, c: Nullable$1<ST_LineEndWidth>, d: Nullable$1<ST_LineEndLength>): void;
    static lz(a: XmlPartManagerBase, b: string, c: string, d: string, e: string, f: string, g: boolean, h: boolean, i: boolean): {
        p1: string;
        p2: string;
        p3: string;
        p4: string;
        p5: string;
        p6: boolean;
        p7: boolean;
        p8: boolean;
    };
    static o0(a: XmlPartManagerBase, b?: string, c?: string, d?: string, e?: string, f?: string, g?: boolean, h?: boolean, i?: boolean): void;
    static l0(a: XmlPartManagerBase): void;
    static o1(a: XmlPartManagerBase): void;
    static l1(a: XmlPartManagerBase, b: ST_PositiveFixedAngle): {
        p1: ST_PositiveFixedAngle;
    };
    static o2(a: XmlPartManagerBase, b: ST_PositiveFixedAngle): void;
    static l2(a: XmlPartManagerBase, b: ST_PositivePercentage): {
        p1: ST_PositivePercentage;
    };
    static o3(a: XmlPartManagerBase, b: ST_PositivePercentage): void;
    static l3(a: XmlPartManagerBase, b: ST_Angle): {
        p1: ST_Angle;
    };
    static o4(a: XmlPartManagerBase, b: ST_Angle): void;
    static l4(a: XmlPartManagerBase): void;
    static o5(a: XmlPartManagerBase): void;
    static l5(a: XmlPartManagerBase, b: string, c: ST_Panose, d: Nullable$1<number>, e: number): {
        p1: string;
        p2: ST_Panose;
        p3: Nullable$1<number>;
        p4: number;
    };
    static o6(a: XmlPartManagerBase, b: string, c?: ST_Panose, d?: Nullable$1<number>, e?: number): void;
    static l6(a: XmlPartManagerBase, b: Nullable$1<ST_LineWidth>, c: Nullable$1<ST_LineCap>, d: Nullable$1<ST_CompoundLine>, e: Nullable$1<ST_PenAlignment>): {
        p1: Nullable$1<ST_LineWidth>;
        p2: Nullable$1<ST_LineCap>;
        p3: Nullable$1<ST_CompoundLine>;
        p4: Nullable$1<ST_PenAlignment>;
    };
    static o7(a: XmlPartManagerBase, b: Nullable$1<ST_LineWidth>, c: Nullable$1<ST_LineCap>, d: Nullable$1<ST_CompoundLine>, e: Nullable$1<ST_PenAlignment>): void;
    static l7(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static o8(a: XmlPartManagerBase, b: number): void;
    static l8(a: XmlPartManagerBase): void;
    static o9(a: XmlPartManagerBase): void;
    static l9(a: XmlPartManagerBase): void;
    static pa(a: XmlPartManagerBase): void;
    static ma(a: XmlPartManagerBase): void;
    static pb(a: XmlPartManagerBase): void;
    static mb(a: XmlPartManagerBase, b: ST_Percentage): {
        p1: ST_Percentage;
    };
    static pc(a: XmlPartManagerBase, b: ST_Percentage): void;
    static mc(a: XmlPartManagerBase, b: ST_Percentage): {
        p1: ST_Percentage;
    };
    static pd(a: XmlPartManagerBase, b: ST_Percentage): void;
    static md(a: XmlPartManagerBase, b: ST_Percentage): {
        p1: ST_Percentage;
    };
    static pe(a: XmlPartManagerBase, b: ST_Percentage): void;
    static me(a: XmlPartManagerBase): void;
    static pf(a: XmlPartManagerBase): void;
    static mf(a: XmlPartManagerBase): void;
    static pg(a: XmlPartManagerBase): void;
    static mg(a: XmlPartManagerBase): void;
    static ph(a: XmlPartManagerBase): void;
    static mh(a: XmlPartManagerBase): void;
    static pi(a: XmlPartManagerBase): void;
    static mi(a: XmlPartManagerBase, b: ST_Coordinate, c: ST_Coordinate): {
        p1: ST_Coordinate;
        p2: ST_Coordinate;
    };
    static pj(a: XmlPartManagerBase, b: ST_Coordinate, c: ST_Coordinate): void;
    static mj(a: XmlPartManagerBase): void;
    static pk(a: XmlPartManagerBase): void;
    static mk(a: XmlPartManagerBase, b: boolean, c: boolean, d: boolean, e: boolean, f: boolean, g: boolean, h: boolean, i: boolean, j: boolean, k: boolean, l: boolean): {
        p1: boolean;
        p2: boolean;
        p3: boolean;
        p4: boolean;
        p5: boolean;
        p6: boolean;
        p7: boolean;
        p8: boolean;
        p9: boolean;
        p10: boolean;
        p11: boolean;
    };
    static pl(a: XmlPartManagerBase, b?: boolean, c?: boolean, d?: boolean, e?: boolean, f?: boolean, g?: boolean, h?: boolean, i?: boolean, j?: boolean, k?: boolean, l?: boolean): void;
    static ml(a: XmlPartManagerBase, b: Nullable$1<ST_TextMargin>, c: Nullable$1<ST_TextMargin>, d: Nullable$1<ST_TextIndentLevelType>, e: Nullable$1<ST_TextIndent>, f: Nullable$1<ST_TextAlignType>, g: Nullable$1<ST_Coordinate32>, h: Nullable$1<boolean>, i: Nullable$1<boolean>, j: Nullable$1<ST_TextFontAlignType>, k: Nullable$1<boolean>, l: Nullable$1<boolean>): {
        p1: Nullable$1<ST_TextMargin>;
        p2: Nullable$1<ST_TextMargin>;
        p3: Nullable$1<ST_TextIndentLevelType>;
        p4: Nullable$1<ST_TextIndent>;
        p5: Nullable$1<ST_TextAlignType>;
        p6: Nullable$1<ST_Coordinate32>;
        p7: Nullable$1<boolean>;
        p8: Nullable$1<boolean>;
        p9: Nullable$1<ST_TextFontAlignType>;
        p10: Nullable$1<boolean>;
        p11: Nullable$1<boolean>;
    };
    static pm(a: XmlPartManagerBase, b?: Nullable$1<ST_TextMargin>, c?: Nullable$1<ST_TextMargin>, d?: Nullable$1<ST_TextIndentLevelType>, e?: Nullable$1<ST_TextIndent>, f?: Nullable$1<ST_TextAlignType>, g?: Nullable$1<ST_Coordinate32>, h?: Nullable$1<boolean>, i?: Nullable$1<boolean>, j?: Nullable$1<ST_TextFontAlignType>, k?: Nullable$1<boolean>, l?: Nullable$1<boolean>): void;
    static mm(a: XmlPartManagerBase, b: ST_PresetColorVal): {
        p1: ST_PresetColorVal;
    };
    static pn(a: XmlPartManagerBase, b: ST_PresetColorVal): void;
    static mn(a: XmlPartManagerBase, b: ST_ShapeType): {
        p1: ST_ShapeType;
    };
    static po(a: XmlPartManagerBase, b: ST_ShapeType): void;
    static mo(a: XmlPartManagerBase, b: ST_Percentage): {
        p1: ST_Percentage;
    };
    static pp(a: XmlPartManagerBase, b: ST_Percentage): void;
    static mp(a: XmlPartManagerBase, b: ST_Percentage): {
        p1: ST_Percentage;
    };
    static pq(a: XmlPartManagerBase, b: ST_Percentage): void;
    static mq(a: XmlPartManagerBase, b: ST_Percentage): {
        p1: ST_Percentage;
    };
    static pr(a: XmlPartManagerBase, b: ST_Percentage): void;
    static mr(a: XmlPartManagerBase): void;
    static ps(a: XmlPartManagerBase): void;
    static ms(a: XmlPartManagerBase, b: Nullable$1<boolean>, c: string, d: string, e: Nullable$1<ST_TextFontSize>, f: Nullable$1<boolean>, g: Nullable$1<boolean>, h: Nullable$1<ST_TextUnderlineType>, i: Nullable$1<ST_TextStrikeType>, j: Nullable$1<number>, k: Nullable$1<ST_TextCapsType>, l: Nullable$1<ST_TextPoint>, m: Nullable$1<boolean>, n: Nullable$1<ST_Percentage>, o: Nullable$1<boolean>, p: Nullable$1<boolean>, q: Nullable$1<boolean>, r: Nullable$1<boolean>, s: Nullable$1<number>, t: string, u?: string, v?: boolean): {
        p1: Nullable$1<boolean>;
        p2: string;
        p3: string;
        p4: Nullable$1<ST_TextFontSize>;
        p5: Nullable$1<boolean>;
        p6: Nullable$1<boolean>;
        p7: Nullable$1<ST_TextUnderlineType>;
        p8: Nullable$1<ST_TextStrikeType>;
        p9: Nullable$1<number>;
        p10: Nullable$1<ST_TextCapsType>;
        p11: Nullable$1<ST_TextPoint>;
        p12: Nullable$1<boolean>;
        p13: Nullable$1<ST_Percentage>;
        p14: Nullable$1<boolean>;
        p15: Nullable$1<boolean>;
        p16: Nullable$1<boolean>;
        p17: Nullable$1<boolean>;
        p18: Nullable$1<number>;
        p19: string;
    };
    static pt(a: XmlPartManagerBase, b?: Nullable$1<boolean>, c?: string, d?: string, e?: Nullable$1<ST_TextFontSize>, f?: Nullable$1<boolean>, g?: Nullable$1<boolean>, h?: Nullable$1<ST_TextUnderlineType>, i?: Nullable$1<ST_TextStrikeType>, j?: Nullable$1<number>, k?: Nullable$1<ST_TextCapsType>, l?: Nullable$1<ST_TextPoint>, m?: Nullable$1<boolean>, n?: Nullable$1<ST_Percentage>, o?: Nullable$1<boolean>, p?: Nullable$1<boolean>, q?: Nullable$1<boolean>, r?: Nullable$1<boolean>, s?: Nullable$1<number>, t?: string): void;
    static mt(a: XmlPartManagerBase, b: ST_Percentage): {
        p1: ST_Percentage;
    };
    static pu(a: XmlPartManagerBase, b: ST_Percentage): void;
    static mu(a: XmlPartManagerBase, b: ST_Percentage): {
        p1: ST_Percentage;
    };
    static pv(a: XmlPartManagerBase, b: ST_Percentage): void;
    static mv(a: XmlPartManagerBase, b: ST_Percentage): {
        p1: ST_Percentage;
    };
    static pw(a: XmlPartManagerBase, b: ST_Percentage): void;
    static mw(a: XmlPartManagerBase, b: ST_SchemeColorVal): {
        p1: ST_SchemeColorVal;
    };
    static px(a: XmlPartManagerBase, b: ST_SchemeColorVal): void;
    static mx(a: XmlPartManagerBase, b: ST_PositiveFixedPercentage): {
        p1: ST_PositiveFixedPercentage;
    };
    static py(a: XmlPartManagerBase, b: ST_PositiveFixedPercentage): void;
    static my(a: XmlPartManagerBase): void;
    static pz(a: XmlPartManagerBase): void;
    static mz(a: XmlPartManagerBase, b: boolean, c: boolean, d: boolean, e: boolean, f: boolean, g: boolean, h: boolean, i: boolean, j: boolean, k: boolean, l: boolean): {
        p1: boolean;
        p2: boolean;
        p3: boolean;
        p4: boolean;
        p5: boolean;
        p6: boolean;
        p7: boolean;
        p8: boolean;
        p9: boolean;
        p10: boolean;
        p11: boolean;
    };
    static p0(a: XmlPartManagerBase, b?: boolean, c?: boolean, d?: boolean, e?: boolean, f?: boolean, g?: boolean, h?: boolean, i?: boolean, j?: boolean, k?: boolean, l?: boolean): void;
    static m0(a: XmlPartManagerBase, b: ST_Percentage, c: ST_Percentage, d: ST_Percentage, e: ST_Percentage): {
        p1: ST_Percentage;
        p2: ST_Percentage;
        p3: ST_Percentage;
        p4: ST_Percentage;
    };
    static p1(a: XmlPartManagerBase, b: ST_Percentage, c: ST_Percentage, d: ST_Percentage, e: ST_Percentage): void;
    static m1(a: XmlPartManagerBase, b: ST_HexColorRGB): {
        p1: ST_HexColorRGB;
    };
    static p2(a: XmlPartManagerBase, b: ST_HexColorRGB): void;
    static m2(a: XmlPartManagerBase): void;
    static p3(a: XmlPartManagerBase): void;
    static m3(a: XmlPartManagerBase, b: ST_SystemColorVal, c: ST_HexColorRGB): {
        p1: ST_SystemColorVal;
        p2: ST_HexColorRGB;
    };
    static p4(a: XmlPartManagerBase, b: ST_SystemColorVal, c: ST_HexColorRGB): void;
    static m4(a: XmlPartManagerBase, b: Nullable$1<ST_LineEndType>, c: Nullable$1<ST_LineEndWidth>, d: Nullable$1<ST_LineEndLength>): {
        p1: Nullable$1<ST_LineEndType>;
        p2: Nullable$1<ST_LineEndWidth>;
        p3: Nullable$1<ST_LineEndLength>;
    };
    static p5(a: XmlPartManagerBase, b: Nullable$1<ST_LineEndType>, c: Nullable$1<ST_LineEndWidth>, d: Nullable$1<ST_LineEndLength>): void;
    static m5(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static p6(a: XmlPartManagerBase, b: string): void;
    static m6(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static p7(a: XmlPartManagerBase, b: string): void;
    static m7(a: XmlPartManagerBase): void;
    static p8(a: XmlPartManagerBase): void;
    static m8(a: XmlPartManagerBase): void;
    static p9(a: XmlPartManagerBase): void;
    static m9(a: XmlPartManagerBase, b: ST_PositiveFixedPercentage): {
        p1: ST_PositiveFixedPercentage;
    };
    static qa(a: XmlPartManagerBase, b: ST_PositiveFixedPercentage): void;
    static na(a: XmlPartManagerBase, b: ST_Angle, c: boolean, d: boolean): {
        p1: ST_Angle;
        p2: boolean;
        p3: boolean;
    };
    static qb(a: XmlPartManagerBase, b?: ST_Angle, c?: boolean, d?: boolean): void;
}
/**
 * @hidden
 */
export declare abstract class DrawingNamespaceDefinitionBase extends XmlNamespaceDefinitionBase {
    static $t: Type;
    readonly an: string;
    readonly ap: string;
    readonly aq: string;
    readonly ar: string;
    readonly as: string;
    readonly at: string;
    readonly au: string;
    readonly av: string;
    readonly aw: string;
    readonly ay: string;
    readonly a3: string;
    readonly a4: string;
    readonly a5: string;
    readonly a6: string;
    readonly bn: string;
    readonly bo: string;
    readonly bp: string;
    readonly bq: string;
    readonly br: string;
    readonly bs: string;
    readonly bw: string;
    readonly bx: string;
    readonly by: string;
    readonly bz: string;
    readonly b1: string;
    readonly b3: string;
    constructor(a: string, b: string);
    i(a: ST_ConformanceClass): string;
    private cb;
    private c2;
    static da(a: XmlPartManagerBase, b: string): void;
    b4(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<boolean>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<boolean>;
    };
    cv(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<boolean>): void;
    b5(a: XmlPartManagerBase): void;
    cw(a: XmlPartManagerBase): void;
    b6(a: XmlPartManagerBase): void;
    cx(a: XmlPartManagerBase): void;
    b7(a: XmlPartManagerBase): void;
    cy(a: XmlPartManagerBase): void;
    b8(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    cz(a: XmlPartManagerBase, b?: boolean): void;
    b9(a: XmlPartManagerBase, b: ST_DrawingElementId, c: string, d: string, e: boolean, f: string): {
        p1: ST_DrawingElementId;
        p2: string;
        p3: string;
        p4: boolean;
        p5: string;
    };
    c0(a: XmlPartManagerBase, b: ST_DrawingElementId, c: string, d?: string, e?: boolean, f?: string): void;
    ca(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    c1(a: XmlPartManagerBase, b?: boolean): void;
    cc(a: XmlPartManagerBase, b: string, c: boolean): {
        p1: string;
        p2: boolean;
    };
    c3(a: XmlPartManagerBase, b?: string, c?: boolean): void;
    cd(a: XmlPartManagerBase, b: boolean, c: boolean, d: boolean, e: boolean, f: boolean, g: boolean, h: boolean, i: boolean, j: boolean, k: boolean): {
        p1: boolean;
        p2: boolean;
        p3: boolean;
        p4: boolean;
        p5: boolean;
        p6: boolean;
        p7: boolean;
        p8: boolean;
        p9: boolean;
        p10: boolean;
    };
    c4(a: XmlPartManagerBase, b?: boolean, c?: boolean, d?: boolean, e?: boolean, f?: boolean, g?: boolean, h?: boolean, i?: boolean, j?: boolean, k?: boolean): void;
    ce(a: XmlPartManagerBase, b: number, c: number): {
        p1: number;
        p2: number;
    };
    c5(a: XmlPartManagerBase, b?: number, c?: number): void;
    cf(a: XmlPartManagerBase, b: string, c: boolean): {
        p1: string;
        p2: boolean;
    };
    c6(a: XmlPartManagerBase, b?: string, c?: boolean): void;
    cg(a: XmlPartManagerBase): void;
    c7(a: XmlPartManagerBase): void;
    ch(a: XmlPartManagerBase, b: boolean, c: boolean, d: boolean, e: boolean, f: boolean, g: boolean, h: boolean): {
        p1: boolean;
        p2: boolean;
        p3: boolean;
        p4: boolean;
        p5: boolean;
        p6: boolean;
        p7: boolean;
    };
    c8(a: XmlPartManagerBase, b?: boolean, c?: boolean, d?: boolean, e?: boolean, f?: boolean, g?: boolean, h?: boolean): void;
    ci(a: XmlPartManagerBase, b: Nullable$1<ST_BlackWhiteMode>): {
        p1: Nullable$1<ST_BlackWhiteMode>;
    };
    c9(a: XmlPartManagerBase, b?: Nullable$1<ST_BlackWhiteMode>): void;
    cj(a: XmlPartManagerBase): void;
    db(a: XmlPartManagerBase): void;
    ck(a: XmlPartManagerBase): void;
    dc(a: XmlPartManagerBase): void;
    cl(a: XmlPartManagerBase): void;
    dd(a: XmlPartManagerBase): void;
    cm(a: XmlPartManagerBase): void;
    de(a: XmlPartManagerBase): void;
    cn(a: XmlPartManagerBase): void;
    df(a: XmlPartManagerBase): void;
    co(a: XmlPartManagerBase, b: string, c: boolean): {
        p1: string;
        p2: boolean;
    };
    dg(a: XmlPartManagerBase, b?: string, c?: boolean): void;
    cp(a: XmlPartManagerBase, b: string, c: string, d: boolean, e: boolean): {
        p1: string;
        p2: string;
        p3: boolean;
        p4: boolean;
    };
    dh(a: XmlPartManagerBase, b?: string, c?: string, d?: boolean, e?: boolean): void;
    cq(a: XmlPartManagerBase, b: Nullable$1<ST_BlackWhiteMode>): {
        p1: Nullable$1<ST_BlackWhiteMode>;
    };
    di(a: XmlPartManagerBase, b?: Nullable$1<ST_BlackWhiteMode>): void;
    cr(a: XmlPartManagerBase, b: number, c: number): {
        p1: number;
        p2: number;
    };
    dj(a: XmlPartManagerBase, b?: number, c?: number): void;
    cs(a: XmlPartManagerBase): void;
    dk(a: XmlPartManagerBase): void;
    ct(a: XmlPartManagerBase): void;
    dl(a: XmlPartManagerBase): void;
    cu(a: XmlPartManagerBase, b: ST_Angle, c: boolean, d: boolean): {
        p1: ST_Angle;
        p2: boolean;
        p3: boolean;
    };
    dm(a: XmlPartManagerBase, b?: ST_Angle, c?: boolean, d?: boolean): void;
    protected readonly ba: string;
    protected readonly bb: string;
}
/**
 * @hidden
 */
export declare class EmptyNamespace extends XmlNamespaceDefinitionBase {
    static $t: Type;
    static readonly an: EmptyNamespace;
    constructor();
    i(a: ST_ConformanceClass): string;
    protected get_j(): string;
    readonly j: string;
    static ap(a: XmlPartManagerBase): void;
    static aq(a: XmlPartManagerBase, b?: Nullable$1<number>, c?: Nullable$1<number>): void;
}
/**
 * @hidden
 */
export declare class IGOfficeExtensions extends XmlNamespaceDefinitionBase {
    static $t: Type;
    private static readonly ar;
    static readonly ap: string;
    static readonly aq: string;
    static readonly as: string;
    static readonly at: string;
    static readonly an: IGOfficeExtensions;
    constructor();
    i(a: ST_ConformanceClass): string;
    protected get_j(): string;
    readonly j: string;
}
/**
 * @hidden
 */
export declare class MarkupCompatibility2006 extends XmlNamespaceDefinitionBase {
    static $t: Type;
    static readonly at: string;
    static readonly ap: string;
    static readonly aq: string;
    static readonly ar: string;
    static readonly as: string;
    static readonly an: MarkupCompatibility2006;
    constructor();
    i(a: ST_ConformanceClass): string;
    protected get_j(): string;
    readonly j: string;
    static av(a: XmlPartManagerBase): void;
    static ay(a: XmlPartManagerBase): void;
    static aw(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static az(a: XmlPartManagerBase, b: IEnumerable$1<XmlNamespaceDefinitionBase>): void;
    static a0(a: XmlPartManagerBase, b: string): void;
    static ax(a: XmlPartManagerBase): void;
    static a1(a: XmlPartManagerBase): void;
}
/**
 * @hidden
 */
export declare class OfficeDocumentDocPropsVTypes extends XmlNamespaceDefinitionBase {
    static $t: Type;
    private static readonly a1;
    private static readonly a0;
    static readonly at: string;
    static readonly ao: string;
    static readonly au: string;
    static readonly av: string;
    static readonly aw: string;
    static readonly ax: string;
    static readonly ap: string;
    static readonly a2: string;
    static readonly a3: string;
    static readonly a5: string;
    static readonly a6: string;
    static readonly a7: string;
    static readonly a8: string;
    static readonly ar: string;
    static readonly ay: string;
    static readonly az: string;
    static readonly a9: string;
    static readonly ba: string;
    static readonly an: OfficeDocumentDocPropsVTypes;
    constructor();
    i(a: ST_ConformanceClass): string;
    protected get_j(): string;
    readonly j: string;
    static bt(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static cf(a: XmlPartManagerBase, b: number): void;
    static bu(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static cg(a: XmlPartManagerBase, b: number): void;
    static bv(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static ch(a: XmlPartManagerBase, b: number): void;
    static bw(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static ci(a: XmlPartManagerBase, b: number): void;
    static bx(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static cj(a: XmlPartManagerBase, b: number): void;
    static by(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static ck(a: XmlPartManagerBase, b: number): void;
    static bz(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static cl(a: XmlPartManagerBase, b: number): void;
    static b0(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static cm(a: XmlPartManagerBase, b: string): void;
    static b1(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static cn(a: XmlPartManagerBase, b: string): void;
    static b2(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static co(a: XmlPartManagerBase, b: number): void;
    static b3(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static cp(a: XmlPartManagerBase, b: number): void;
    static b4(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static cq(a: XmlPartManagerBase, b: number): void;
    static b5(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static cr(a: XmlPartManagerBase, b: number): void;
    static b6(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static cs(a: XmlPartManagerBase, b: number): void;
    static b7(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static ct(a: XmlPartManagerBase, b: number): void;
    static b8(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static cu(a: XmlPartManagerBase, b: number): void;
    static b9(a: XmlPartManagerBase): void;
    static cv(a: XmlPartManagerBase): void;
    static ca(a: XmlPartManagerBase, b: ST_VectorBaseType, c: number): {
        p1: ST_VectorBaseType;
        p2: number;
    };
    static cw(a: XmlPartManagerBase, b: ST_VectorBaseType, c: number): void;
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
    static cb(a: XmlPartManagerBase): void;
    static cc(a: XmlPartManagerBase, b: any): void;
    static cd(a: XmlPartManagerBase, b: any): void;
    static ce(a: XmlPartManagerBase, b: CT_Vector): void;
}
/**
 * @hidden
 */
export interface IVariantValueContainer {
    setValue(a: any, b: number): void;
}
/**
 * @hidden
 */
export declare let IVariantValueContainer_$type: Type;
/**
 * @hidden
 */
export declare class OfficeDocumentDocPropsVTypes_VariantPlaceholder extends Base implements IVariantValueContainer {
    static $t: Type;
    private readonly a;
    private readonly b;
    constructor(a: IVariantValueContainer, b: number);
    setValue(a: any, b: number): void;
}
/**
 * @hidden
 */
export declare class CT_Vector extends Base implements IVariantValueContainer {
    static $t: Type;
    readonly b: ST_VectorBaseType;
    readonly a: any[];
    constructor(a: number, b: number, c?: ST_VectorBaseType);
    constructor(a: number, b: List$1<any>, c?: ST_VectorBaseType);
    constructor(a: number, ..._rest: any[]);
    setValue(a: any, b: number): void;
}
/**
 * @hidden
 */
export declare class OfficeDocumentExtendedProperties extends XmlNamespaceDefinitionBase {
    static $t: Type;
    private static readonly a4;
    private static readonly a3;
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
    static readonly a5: string;
    static readonly a6: string;
    static readonly a7: string;
    static readonly a9: string;
    static readonly a8: string;
    static readonly ba: string;
    static readonly bb: string;
    static readonly bc: string;
    static readonly bd: string;
    static readonly be: string;
    static readonly bf: string;
    static readonly bg: string;
    static readonly an: OfficeDocumentExtendedProperties;
    constructor();
    i(a: ST_ConformanceClass): string;
    protected get_j(): string;
    readonly j: string;
    static bh(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static b8(a: XmlPartManagerBase, b: string): void;
    static bi(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static b9(a: XmlPartManagerBase, b: string): void;
    static bj(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static ca(a: XmlPartManagerBase, b: number): void;
    static bk(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static cb(a: XmlPartManagerBase, b: number): void;
    static bl(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static cc(a: XmlPartManagerBase, b: string): void;
    static bm(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static cd(a: XmlPartManagerBase, b: number): void;
    static bn(a: XmlPartManagerBase): void;
    static ce(a: XmlPartManagerBase): void;
    static bo(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static cf(a: XmlPartManagerBase, b: number): void;
    static bp(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static cg(a: XmlPartManagerBase, b: string): void;
    static bq(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static ch(a: XmlPartManagerBase, b: boolean): void;
    static br(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static ci(a: XmlPartManagerBase, b: number): void;
    static bs(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static cj(a: XmlPartManagerBase, b: boolean): void;
    static bt(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static ck(a: XmlPartManagerBase, b: string): void;
    static bu(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static cl(a: XmlPartManagerBase, b: number): void;
    static bv(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static cm(a: XmlPartManagerBase, b: number): void;
    static bw(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static cn(a: XmlPartManagerBase, b: number): void;
    static bx(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static co(a: XmlPartManagerBase, b: number): void;
    static by(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static cp(a: XmlPartManagerBase, b: string): void;
    static bz(a: XmlPartManagerBase): void;
    static cq(a: XmlPartManagerBase): void;
    static b0(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static cr(a: XmlPartManagerBase, b: boolean): void;
    static b1(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static cs(a: XmlPartManagerBase, b: boolean): void;
    static b2(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static b7(a: XmlPartManagerBase, b: number): void;
    static b3(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static ct(a: XmlPartManagerBase, b: string): void;
    static b4(a: XmlPartManagerBase): void;
    static cu(a: XmlPartManagerBase): void;
    static b5(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static cv(a: XmlPartManagerBase, b: number): void;
    static b6(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static cw(a: XmlPartManagerBase, b: number): void;
}
/**
 * @hidden
 */
export declare class OfficeDocumentRelationships extends XmlNamespaceDefinitionBase {
    static $t: Type;
    private static readonly au;
    private static readonly at;
    static readonly ap: string;
    static readonly aq: string;
    static readonly ar: string;
    static readonly as: string;
    static readonly av: string;
    static readonly an: OfficeDocumentRelationships;
    constructor();
    i(a: ST_ConformanceClass): string;
    protected get_j(): string;
    readonly j: string;
}
/**
 * @hidden
 */
export declare class OfficeNamespace extends XmlNamespaceDefinitionBase {
    static $t: Type;
    static readonly br: string;
    static readonly ao: string;
    static readonly b6: string;
    static readonly ar: string;
    static readonly at: string;
    static readonly as: string;
    static readonly a1: string;
    static readonly a2: string;
    static readonly a3: string;
    static readonly av: string;
    static readonly aw: string;
    static readonly ax: string;
    static readonly ay: string;
    static readonly az: string;
    static readonly a0: string;
    static readonly a4: string;
    static readonly a5: string;
    static readonly a6: string;
    static readonly a7: string;
    static readonly a8: string;
    static readonly a9: string;
    static readonly bc: string;
    static readonly bd: string;
    static readonly be: string;
    static readonly bf: string;
    static readonly bg: string;
    static readonly bh: string;
    static readonly bi: string;
    static readonly bj: string;
    static readonly bl: string;
    static readonly bm: string;
    static readonly bn: string;
    static readonly bo: string;
    static readonly bp: string;
    static readonly bq: string;
    static readonly bs: string;
    static readonly bt: string;
    static readonly bv: string;
    static readonly bw: string;
    static readonly bx: string;
    static readonly by: string;
    static readonly bz: string;
    static readonly b1: string;
    static readonly b2: string;
    static readonly b3: string;
    static readonly b8: string;
    static readonly b9: string;
    static readonly ca: string;
    static readonly cc: string;
    static readonly ce: string;
    static readonly cf: string;
    static readonly an: OfficeNamespace;
    constructor();
    i(a: ST_ConformanceClass): string;
    protected get_j(): string;
    readonly j: string;
    static ch(a: XmlPartManagerBase, b: Nullable$1<ST_Ext>, c: string): {
        p1: Nullable$1<ST_Ext>;
        p2: string;
    };
    static ck(a: XmlPartManagerBase, b?: Nullable$1<ST_Ext>, c?: string): void;
    static ci(a: XmlPartManagerBase, b: Nullable$1<ST_Ext>, c: Nullable$1<boolean>, d: Nullable$1<boolean>, e: Nullable$1<boolean>, f: Nullable$1<boolean>, g: Nullable$1<boolean>, h: Nullable$1<boolean>, i: Nullable$1<boolean>, j: Nullable$1<boolean>, k: Nullable$1<boolean>, l: Nullable$1<boolean>, m: Nullable$1<boolean>): {
        p1: Nullable$1<ST_Ext>;
        p2: Nullable$1<boolean>;
        p3: Nullable$1<boolean>;
        p4: Nullable$1<boolean>;
        p5: Nullable$1<boolean>;
        p6: Nullable$1<boolean>;
        p7: Nullable$1<boolean>;
        p8: Nullable$1<boolean>;
        p9: Nullable$1<boolean>;
        p10: Nullable$1<boolean>;
        p11: Nullable$1<boolean>;
        p12: Nullable$1<boolean>;
    };
    static cl(a: XmlPartManagerBase, b?: Nullable$1<ST_Ext>, c?: Nullable$1<boolean>, d?: Nullable$1<boolean>, e?: Nullable$1<boolean>, f?: Nullable$1<boolean>, g?: Nullable$1<boolean>, h?: Nullable$1<boolean>, i?: Nullable$1<boolean>, j?: Nullable$1<boolean>, k?: Nullable$1<boolean>, l?: Nullable$1<boolean>, m?: Nullable$1<boolean>): void;
    static cj(a: XmlPartManagerBase, b: Nullable$1<ST_Ext>): {
        p1: Nullable$1<ST_Ext>;
    };
    static cm(a: XmlPartManagerBase, b?: Nullable$1<ST_Ext>): void;
}
/**
 * @hidden
 */
export declare class VmlNamespace extends XmlNamespaceDefinitionBase {
    static $t: Type;
    static readonly aw: string;
    static readonly an: VmlNamespace;
    constructor();
    i(a: ST_ConformanceClass): string;
    protected get_j(): string;
    readonly j: string;
    static dn(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<number>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<number>;
    };
    static dx(a: XmlPartManagerBase, b?: Nullable$1<number>, c?: Nullable$1<number>): void;
    static dp(a: XmlPartManagerBase, b: string, c: Nullable$1<ST_FillType>, d: Nullable$1<boolean>, e: string, f: string, g: string, h: string, i: string, j: string, k: string, l: string, m: string, n: Nullable$1<ST_ImageAspect>, o: string, p: Nullable$1<number>, q: Nullable$1<boolean>, r: string, s: string, t: string, u: Nullable$1<ST_FillMethod>, v: Nullable$1<boolean>, w: string, x: string, y: Nullable$1<boolean>, z: Nullable$1<boolean>, aa: string, ab: string): {
        p1: string;
        p2: Nullable$1<ST_FillType>;
        p3: Nullable$1<boolean>;
        p4: string;
        p5: string;
        p6: string;
        p7: string;
        p8: string;
        p9: string;
        p10: string;
        p11: string;
        p12: string;
        p13: Nullable$1<ST_ImageAspect>;
        p14: string;
        p15: Nullable$1<number>;
        p16: Nullable$1<boolean>;
        p17: string;
        p18: string;
        p19: string;
        p20: Nullable$1<ST_FillMethod>;
        p21: Nullable$1<boolean>;
        p22: string;
        p23: string;
        p24: Nullable$1<boolean>;
        p25: Nullable$1<boolean>;
        p26: string;
        p27: string;
    };
    static dy(a: XmlPartManagerBase, b?: string, c?: Nullable$1<ST_FillType>, d?: Nullable$1<boolean>, e?: string, f?: string, g?: string, h?: string, i?: string, j?: string, k?: string, l?: string, m?: string, n?: Nullable$1<ST_ImageAspect>, o?: string, p?: Nullable$1<number>, q?: Nullable$1<boolean>, r?: string, s?: string, t?: string, u?: Nullable$1<ST_FillMethod>, v?: Nullable$1<boolean>, w?: string, x?: string, y?: Nullable$1<boolean>, z?: Nullable$1<boolean>, aa?: string, ab?: string): void;
    static dq(a: XmlPartManagerBase, b: string, c: string, d: string, e: string, f: string, g: string, h: string, i: string, j: string, k: Nullable$1<boolean>, l: Nullable$1<boolean>, m: string, n: string, o: string, p: string, q: string, r: string, s: Nullable$1<number>, t: Nullable$1<boolean>, u: Nullable$1<number>, v: string, w: string, x: string, y: string): {
        p1: string;
        p2: string;
        p3: string;
        p4: string;
        p5: string;
        p6: string;
        p7: string;
        p8: string;
        p9: string;
        p10: Nullable$1<boolean>;
        p11: Nullable$1<boolean>;
        p12: string;
        p13: string;
        p14: string;
        p15: string;
        p16: string;
        p17: string;
        p18: Nullable$1<number>;
        p19: Nullable$1<boolean>;
        p20: Nullable$1<number>;
        p21: string;
        p22: string;
        p23: string;
        p24: string;
    };
    static dz(a: XmlPartManagerBase, b?: string, c?: string, d?: string, e?: string, f?: string, g?: string, h?: string, i?: string, j?: string, k?: Nullable$1<boolean>, l?: Nullable$1<boolean>, m?: string, n?: string, o?: string, p?: string, q?: string, r?: string, s?: Nullable$1<number>, t?: Nullable$1<boolean>, u?: Nullable$1<number>, v?: string, w?: string, x?: string, y?: string): void;
    static dr(a: XmlPartManagerBase, b: string, c: string, d: string, e: string, f: Nullable$1<boolean>, g: Nullable$1<boolean>, h: Nullable$1<boolean>, i: Nullable$1<boolean>, j: Nullable$1<boolean>, k: Nullable$1<boolean>, l: Nullable$1<boolean>, m: Nullable$1<ST_ConnectType>, n: string, o: string, p: Nullable$1<boolean>): {
        p1: string;
        p2: string;
        p3: string;
        p4: string;
        p5: Nullable$1<boolean>;
        p6: Nullable$1<boolean>;
        p7: Nullable$1<boolean>;
        p8: Nullable$1<boolean>;
        p9: Nullable$1<boolean>;
        p10: Nullable$1<boolean>;
        p11: Nullable$1<boolean>;
        p12: Nullable$1<ST_ConnectType>;
        p13: string;
        p14: string;
        p15: Nullable$1<boolean>;
    };
    static d0(a: XmlPartManagerBase, b?: string, c?: string, d?: string, e?: string, f?: Nullable$1<boolean>, g?: Nullable$1<boolean>, h?: Nullable$1<boolean>, i?: Nullable$1<boolean>, j?: Nullable$1<boolean>, k?: Nullable$1<boolean>, l?: Nullable$1<boolean>, m?: Nullable$1<ST_ConnectType>, n?: string, o?: string, p?: Nullable$1<boolean>): void;
    static ds(a: XmlPartManagerBase, b: string, c: Nullable$1<boolean>, d: Nullable$1<ST_ShadowType>, e: Nullable$1<boolean>, f: string, g: string, h: string, i: string, j: string, k: string, l: string): {
        p1: string;
        p2: Nullable$1<boolean>;
        p3: Nullable$1<ST_ShadowType>;
        p4: Nullable$1<boolean>;
        p5: string;
        p6: string;
        p7: string;
        p8: string;
        p9: string;
        p10: string;
        p11: string;
    };
    static d1(a: XmlPartManagerBase, b?: string, c?: Nullable$1<boolean>, d?: Nullable$1<ST_ShadowType>, e?: Nullable$1<boolean>, f?: string, g?: string, h?: string, i?: string, j?: string, k?: string, l?: string): void;
    static dt(a: XmlPartManagerBase, b: string, c: string, d: string, e: string, f: string, g: string, h: string, i: string, j: string, k: string, l: Nullable$1<boolean>, m: string, n: Nullable$1<boolean>, o: string, p: Nullable$1<boolean>, q: Nullable$1<boolean>, r: Nullable$1<boolean>, s: Nullable$1<boolean>, t: Nullable$1<boolean>, u: Nullable$1<boolean>, v: Nullable$1<boolean>, w: Nullable$1<number>, x: Nullable$1<ST_HrAlign>, y: Nullable$1<boolean>, z: Nullable$1<boolean>, aa: Nullable$1<boolean>, ab: string, ac: string, ad: string, ae: string, af: string, ag: string, ah: string, ai: Nullable$1<ST_InsetMode>, aj: string, ak: Nullable$1<boolean>, al: string, am: string, an: Nullable$1<boolean>, ao: string, ap: string, aq: Nullable$1<boolean>, ar: Nullable$1<number>, as: Nullable$1<ST_ConnectorType>, at: Nullable$1<ST_BWMode>, au: Nullable$1<ST_BWMode>, av: Nullable$1<ST_BWMode>, aw: Nullable$1<boolean>, ax: Nullable$1<boolean>, ay: Nullable$1<boolean>, az: Nullable$1<boolean>, a0: Nullable$1<boolean>, a1: Nullable$1<boolean>, a2: string, a3: string, a4: string, a5: string, a6: string): {
        p1: string;
        p2: string;
        p3: string;
        p4: string;
        p5: string;
        p6: string;
        p7: string;
        p8: string;
        p9: string;
        p10: string;
        p11: Nullable$1<boolean>;
        p12: string;
        p13: Nullable$1<boolean>;
        p14: string;
        p15: Nullable$1<boolean>;
        p16: Nullable$1<boolean>;
        p17: Nullable$1<boolean>;
        p18: Nullable$1<boolean>;
        p19: Nullable$1<boolean>;
        p20: Nullable$1<boolean>;
        p21: Nullable$1<boolean>;
        p22: Nullable$1<number>;
        p23: Nullable$1<ST_HrAlign>;
        p24: Nullable$1<boolean>;
        p25: Nullable$1<boolean>;
        p26: Nullable$1<boolean>;
        p27: string;
        p28: string;
        p29: string;
        p30: string;
        p31: string;
        p32: string;
        p33: string;
        p34: Nullable$1<ST_InsetMode>;
        p35: string;
        p36: Nullable$1<boolean>;
        p37: string;
        p38: string;
        p39: Nullable$1<boolean>;
        p40: string;
        p41: string;
        p42: Nullable$1<boolean>;
        p43: Nullable$1<number>;
        p44: Nullable$1<ST_ConnectorType>;
        p45: Nullable$1<ST_BWMode>;
        p46: Nullable$1<ST_BWMode>;
        p47: Nullable$1<ST_BWMode>;
        p48: Nullable$1<boolean>;
        p49: Nullable$1<boolean>;
        p50: Nullable$1<boolean>;
        p51: Nullable$1<boolean>;
        p52: Nullable$1<boolean>;
        p53: Nullable$1<boolean>;
        p54: string;
        p55: string;
        p56: string;
        p57: string;
        p58: string;
    };
    static d2(a: XmlPartManagerBase, b?: string, c?: string, d?: string, e?: string, f?: string, g?: string, h?: string, i?: string, j?: string, k?: string, l?: Nullable$1<boolean>, m?: string, n?: Nullable$1<boolean>, o?: string, p?: Nullable$1<boolean>, q?: Nullable$1<boolean>, r?: Nullable$1<boolean>, s?: Nullable$1<boolean>, t?: Nullable$1<boolean>, u?: Nullable$1<boolean>, v?: Nullable$1<boolean>, w?: Nullable$1<number>, x?: Nullable$1<ST_HrAlign>, y?: Nullable$1<boolean>, z?: Nullable$1<boolean>, aa?: Nullable$1<boolean>, ab?: string, ac?: string, ad?: string, ae?: string, af?: string, ag?: string, ah?: string, ai?: Nullable$1<ST_InsetMode>, aj?: string, ak?: Nullable$1<boolean>, al?: string, am?: string, an?: Nullable$1<boolean>, ao?: string, ap?: string, aq?: Nullable$1<boolean>, ar?: Nullable$1<number>, as?: Nullable$1<ST_ConnectorType>, at?: Nullable$1<ST_BWMode>, au?: Nullable$1<ST_BWMode>, av?: Nullable$1<ST_BWMode>, aw?: Nullable$1<boolean>, ax?: Nullable$1<boolean>, ay?: Nullable$1<boolean>, az?: Nullable$1<boolean>, a0?: Nullable$1<boolean>, a1?: Nullable$1<boolean>, a2?: string, a3?: string, a4?: string, a5?: string, a6?: string): void;
    static du(a: XmlPartManagerBase, b: string, c: string, d: string, e: string, f: string, g: string, h: string, i: string, j: string, k: string, l: Nullable$1<boolean>, m: string, n: Nullable$1<boolean>, o: string, p: Nullable$1<boolean>, q: Nullable$1<boolean>, r: Nullable$1<boolean>, s: Nullable$1<boolean>, t: Nullable$1<boolean>, u: Nullable$1<boolean>, v: Nullable$1<boolean>, w: Nullable$1<number>, x: Nullable$1<ST_HrAlign>, y: Nullable$1<boolean>, z: Nullable$1<boolean>, aa: Nullable$1<boolean>, ab: string, ac: string, ad: string, ae: string, af: string, ag: string, ah: string, ai: Nullable$1<ST_InsetMode>, aj: string, ak: Nullable$1<boolean>, al: string, am: string, an: Nullable$1<boolean>, ao: string, ap: string, aq: Nullable$1<boolean>, ar: Nullable$1<number>, as: Nullable$1<ST_ConnectorType>, at: Nullable$1<ST_BWMode>, au: Nullable$1<ST_BWMode>, av: Nullable$1<ST_BWMode>, aw: Nullable$1<boolean>, ax: Nullable$1<boolean>, ay: Nullable$1<boolean>, az: Nullable$1<boolean>, a0: Nullable$1<boolean>, a1: Nullable$1<boolean>, a2: string, a3: string, a4: string): {
        p1: string;
        p2: string;
        p3: string;
        p4: string;
        p5: string;
        p6: string;
        p7: string;
        p8: string;
        p9: string;
        p10: string;
        p11: Nullable$1<boolean>;
        p12: string;
        p13: Nullable$1<boolean>;
        p14: string;
        p15: Nullable$1<boolean>;
        p16: Nullable$1<boolean>;
        p17: Nullable$1<boolean>;
        p18: Nullable$1<boolean>;
        p19: Nullable$1<boolean>;
        p20: Nullable$1<boolean>;
        p21: Nullable$1<boolean>;
        p22: Nullable$1<number>;
        p23: Nullable$1<ST_HrAlign>;
        p24: Nullable$1<boolean>;
        p25: Nullable$1<boolean>;
        p26: Nullable$1<boolean>;
        p27: string;
        p28: string;
        p29: string;
        p30: string;
        p31: string;
        p32: string;
        p33: string;
        p34: Nullable$1<ST_InsetMode>;
        p35: string;
        p36: Nullable$1<boolean>;
        p37: string;
        p38: string;
        p39: Nullable$1<boolean>;
        p40: string;
        p41: string;
        p42: Nullable$1<boolean>;
        p43: Nullable$1<number>;
        p44: Nullable$1<ST_ConnectorType>;
        p45: Nullable$1<ST_BWMode>;
        p46: Nullable$1<ST_BWMode>;
        p47: Nullable$1<ST_BWMode>;
        p48: Nullable$1<boolean>;
        p49: Nullable$1<boolean>;
        p50: Nullable$1<boolean>;
        p51: Nullable$1<boolean>;
        p52: Nullable$1<boolean>;
        p53: Nullable$1<boolean>;
        p54: string;
        p55: string;
        p56: string;
    };
    static d3(a: XmlPartManagerBase, b?: string, c?: string, d?: string, e?: string, f?: string, g?: string, h?: string, i?: string, j?: string, k?: string, l?: Nullable$1<boolean>, m?: string, n?: Nullable$1<boolean>, o?: string, p?: Nullable$1<boolean>, q?: Nullable$1<boolean>, r?: Nullable$1<boolean>, s?: Nullable$1<boolean>, t?: Nullable$1<boolean>, u?: Nullable$1<boolean>, v?: Nullable$1<boolean>, w?: Nullable$1<number>, x?: Nullable$1<ST_HrAlign>, y?: Nullable$1<boolean>, z?: Nullable$1<boolean>, aa?: Nullable$1<boolean>, ab?: string, ac?: string, ad?: string, ae?: string, af?: string, ag?: string, ah?: string, ai?: Nullable$1<ST_InsetMode>, aj?: string, ak?: Nullable$1<boolean>, al?: string, am?: string, an?: Nullable$1<boolean>, ao?: string, ap?: string, aq?: Nullable$1<boolean>, ar?: Nullable$1<number>, as?: Nullable$1<ST_ConnectorType>, at?: Nullable$1<ST_BWMode>, au?: Nullable$1<ST_BWMode>, av?: Nullable$1<ST_BWMode>, aw?: Nullable$1<boolean>, ax?: Nullable$1<boolean>, ay?: Nullable$1<boolean>, az?: Nullable$1<boolean>, a0?: Nullable$1<boolean>, a1?: Nullable$1<boolean>, a2?: string, a3?: string, a4?: string): void;
    static dv(a: XmlPartManagerBase, b: string, c: Nullable$1<boolean>, d: string, e: string, f: string, g: Nullable$1<ST_StrokeLineStyle>, h: Nullable$1<number>, i: Nullable$1<ST_StrokeJoinStyle>, j: Nullable$1<ST_StrokeEndCap>, k: string, l: Nullable$1<ST_FillType>, m: string, n: Nullable$1<ST_ImageAspect>, o: string, p: Nullable$1<boolean>, q: string, r: Nullable$1<ST_StrokeArrowType>, s: Nullable$1<ST_StrokeArrowWidth>, t: Nullable$1<ST_StrokeArrowLength>, u: Nullable$1<ST_StrokeArrowType>, v: Nullable$1<ST_StrokeArrowWidth>, w: Nullable$1<ST_StrokeArrowLength>, x: string, y: string, z: string, aa: Nullable$1<boolean>, ab: string, ac: Nullable$1<boolean>, ad: string): {
        p1: string;
        p2: Nullable$1<boolean>;
        p3: string;
        p4: string;
        p5: string;
        p6: Nullable$1<ST_StrokeLineStyle>;
        p7: Nullable$1<number>;
        p8: Nullable$1<ST_StrokeJoinStyle>;
        p9: Nullable$1<ST_StrokeEndCap>;
        p10: string;
        p11: Nullable$1<ST_FillType>;
        p12: string;
        p13: Nullable$1<ST_ImageAspect>;
        p14: string;
        p15: Nullable$1<boolean>;
        p16: string;
        p17: Nullable$1<ST_StrokeArrowType>;
        p18: Nullable$1<ST_StrokeArrowWidth>;
        p19: Nullable$1<ST_StrokeArrowLength>;
        p20: Nullable$1<ST_StrokeArrowType>;
        p21: Nullable$1<ST_StrokeArrowWidth>;
        p22: Nullable$1<ST_StrokeArrowLength>;
        p23: string;
        p24: string;
        p25: string;
        p26: Nullable$1<boolean>;
        p27: string;
        p28: Nullable$1<boolean>;
        p29: string;
    };
    static d4(a: XmlPartManagerBase, b?: string, c?: Nullable$1<boolean>, d?: string, e?: string, f?: string, g?: Nullable$1<ST_StrokeLineStyle>, h?: Nullable$1<number>, i?: Nullable$1<ST_StrokeJoinStyle>, j?: Nullable$1<ST_StrokeEndCap>, k?: string, l?: Nullable$1<ST_FillType>, m?: string, n?: Nullable$1<ST_ImageAspect>, o?: string, p?: Nullable$1<boolean>, q?: string, r?: Nullable$1<ST_StrokeArrowType>, s?: Nullable$1<ST_StrokeArrowWidth>, t?: Nullable$1<ST_StrokeArrowLength>, u?: Nullable$1<ST_StrokeArrowType>, v?: Nullable$1<ST_StrokeArrowWidth>, w?: Nullable$1<ST_StrokeArrowLength>, x?: string, y?: string, z?: string, aa?: Nullable$1<boolean>, ab?: string, ac?: Nullable$1<boolean>, ad?: string): void;
    static dw(a: XmlPartManagerBase, b: string, c: string, d: string, e: Nullable$1<boolean>, f: Nullable$1<ST_InsetMode>): {
        p1: string;
        p2: string;
        p3: string;
        p4: Nullable$1<boolean>;
        p5: Nullable$1<ST_InsetMode>;
    };
    static d5(a: XmlPartManagerBase, b?: string, c?: string, d?: string, e?: Nullable$1<boolean>, f?: Nullable$1<ST_InsetMode>): void;
}
/**
 * @hidden
 */
export declare class XmlNamespace extends XmlNamespaceDefinitionBase {
    static $t: Type;
    static readonly ap: string;
    static readonly ar: string;
    static readonly an: XmlNamespace;
    constructor();
    i(a: ST_ConformanceClass): string;
    protected get_j(): string;
    readonly j: string;
    static as(a: XmlWriteManager): void;
}
/**
 * @hidden
 */
export declare class XmlSchemaInstance extends XmlNamespaceDefinitionBase {
    static $t: Type;
    private static readonly ap;
    static readonly aq: string;
    static readonly an: XmlSchemaInstance;
    constructor();
    i(a: ST_ConformanceClass): string;
    protected get_j(): string;
    readonly j: string;
}
/**
 * @hidden
 */
export declare abstract class EG_Anchor extends Base {
    static $t: Type;
    a: CT_AnchorClientData;
    abstract b<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_AnchorVisitor$2<TArg, TResult>, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare class CT_AbsoluteAnchor extends EG_Anchor {
    static $t: Type;
    c: CT_Point2D;
    d: CT_PositiveSize2D;
    b<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_AnchorVisitor$2<TArg, TResult>, b?: TArg): TResult;
}
/**
 * @hidden
 */
export declare class CT_AnchorClientData extends Base {
    static $t: Type;
    a: boolean;
    b: boolean;
}
/**
 * @hidden
 */
export declare class CT_OneCellAnchor extends EG_Anchor {
    static $t: Type;
    d: CT_Marker;
    c: CT_PositiveSize2D;
    b<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_AnchorVisitor$2<TArg, TResult>, b?: TArg): TResult;
}
/**
 * @hidden
 */
export declare class CT_TwoCellAnchor extends EG_Anchor {
    static $t: Type;
    e: ST_EditAs;
    c: CT_Marker;
    d: CT_Marker;
    b<TArg, TResult>($tArg: Type, $tResult: Type, a: IEG_AnchorVisitor$2<TArg, TResult>, b?: TArg): TResult;
}
/**
 * @hidden
 */
export interface IEG_AnchorVisitor$2<TArg, TResult> {
    _visitCT_AbsoluteAnchor$i(a: CT_AbsoluteAnchor, b: TArg): TResult;
    _visitCT_OneCellAnchor$i(a: CT_OneCellAnchor, b: TArg): TResult;
    _visitCT_TwoCellAnchor$i(a: CT_TwoCellAnchor, b: TArg): TResult;
}
/**
 * @hidden
 */
export declare let IEG_AnchorVisitor$2_$type: Type;
/**
 * @hidden
 */
export declare abstract class ExcelDocumentManager extends OfficeDocumentManager {
    static $t: Type;
    private static readonly _bp;
    private static readonly _bo;
    private static readonly _bt;
    private static readonly _bs;
    constructor(a: IPackageFactory, b: Stream, c: boolean, d: Nullable$1<ST_ConformanceClass>);
    protected get__v(): OfficeApplication;
    readonly _v: OfficeApplication;
    protected _aa(): ST_ConformanceClass;
    _bh(): void;
    protected get__t(): DrawingNamespaceDefinitionBase;
    readonly _t: DrawingNamespaceDefinitionBase;
    _bq(): string;
    _br(): string;
}
/**
 * @hidden
 */
export declare class XLOpenXmlUtilities extends Base {
    static $t: Type;
    static a(a: ST_CellType): string;
}
/**
 * @hidden
 */
export declare class CT_Marker extends Base {
    static $t: Type;
    c: number;
    a: ST_Coordinate;
    d: number;
    b: ST_Coordinate;
}
/**
 * @hidden
 */
export declare class ST_Guid extends ValueType {
    static $t: Type;
    constructor(a: number, b: Guid);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly d;
    static c(a: string): ST_Guid;
    toString(): string;
    static a(a: Guid): ST_Guid;
    static h(a: Nullable$1<Guid>): Nullable$1<ST_Guid>;
    static e(a: ST_Guid): Guid;
    static g(a: Nullable$1<ST_Guid>): Nullable$1<Guid>;
}
/**
 * @hidden
 */
export declare abstract class CalcChainPartManager extends XmlPartManagerBase {
    static $t: Type;
    static readonly a2: string;
    static readonly a5: string;
    static readonly a4: string;
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare abstract class ChartColorStylePartManager extends XmlPartManagerBase {
    static $t: Type;
    static readonly a3: string;
    static readonly a5: string;
    static readonly a4: string;
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare abstract class ChartExPartManager extends XmlPartManagerBase {
    static $t: Type;
    static readonly a6: string;
    static readonly a5: string;
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare abstract class ChartPartManager extends XmlPartManagerBase {
    static $t: Type;
    static readonly a4: string;
    static readonly a6: string;
    static readonly a5: string;
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare abstract class ChartsheetPartManager extends XmlPartManagerBase {
    static $t: Type;
    static readonly a3: string;
    static readonly a5: string;
    static readonly a4: string;
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare abstract class ChartStylePartManager extends XmlPartManagerBase {
    static $t: Type;
    static readonly a3: string;
    static readonly a5: string;
    static readonly a4: string;
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare abstract class ChartUserShapePartManager extends PartManagerBase {
    static $t: Type;
    static readonly s: string;
    static readonly u: string;
    static readonly t: string;
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare abstract class CommentsPartManager extends XmlPartManagerBase {
    static $t: Type;
    static readonly a3: string;
    static readonly a5: string;
    static readonly a4: string;
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare abstract class ConnectionsPartManager extends XmlPartManagerBase {
    static $t: Type;
    static readonly a2: string;
    static readonly a5: string;
    static readonly a4: string;
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare abstract class CtrlPropPartManager extends PartManagerBase {
    static $t: Type;
    static readonly s: string;
    static readonly u: string;
    static readonly t: string;
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare abstract class DrawingPartManager extends XmlPartManagerBase {
    static $t: Type;
    static readonly a3: string;
    static readonly a5: string;
    static readonly a4: string;
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare abstract class ExternalLinkPartManager extends XmlPartManagerBase {
    static $t: Type;
    static readonly a3: string;
    static readonly a5: string;
    static readonly a4: string;
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare abstract class PivotCacheDefinitionPartManager extends XmlPartManagerBase {
    static $t: Type;
    static readonly a3: string;
    static readonly a5: string;
    static readonly a4: string;
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare abstract class PivotCacheRecordsPartManager extends XmlPartManagerBase {
    static $t: Type;
    static readonly a3: string;
    static readonly a5: string;
    static readonly a4: string;
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare abstract class PivotTablePartManager extends XmlPartManagerBase {
    static $t: Type;
    static readonly a3: string;
    static readonly a5: string;
    static readonly a4: string;
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare abstract class SharedStringsPartManager extends XmlPartManagerBase {
    static $t: Type;
    static readonly a2: string;
    static readonly a5: string;
    static readonly a4: string;
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare abstract class SlicerCachePartManager extends XmlPartManagerBase {
    static $t: Type;
    static readonly a3: string;
    static readonly a4: string;
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare abstract class SlicerPartManager extends XmlPartManagerBase {
    static $t: Type;
    static readonly a4: string;
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare abstract class ExcelStylesPartManager extends XmlPartManagerBase {
    static $t: Type;
    static readonly a2: string;
    static readonly a5: string;
    static readonly a4: string;
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare abstract class TablePartManager extends XmlPartManagerBase {
    static $t: Type;
    static readonly a3: string;
    static readonly a5: string;
    static readonly a4: string;
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare abstract class WorkbookPartManagerBase extends XmlPartManagerBase {
    static $t: Type;
    static readonly a3: string;
    static readonly a4: string;
    static readonly a7: string;
    static readonly a8: string;
    static readonly a6: string;
    static readonly a5: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare abstract class WorksheetPartManager extends XmlPartManagerBase {
    static $t: Type;
    static readonly a3: string;
    static readonly a5: string;
    static readonly a4: string;
    protected get_m(): string;
    readonly m: string;
    n(a: OfficeApplication): string;
    o(a: ST_ConformanceClass): string;
    protected get_g(): boolean;
    readonly g: boolean;
}
/**
 * @hidden
 */
export declare class DrawingMLSpreadsheetDrawing extends DrawingNamespaceDefinitionBase {
    static $t: Type;
    private static readonly dr;
    private static readonly dq;
    static readonly ds: string;
    static readonly dt: string;
    static readonly dw: string;
    static readonly dx: string;
    static readonly d0: string;
    static readonly d3: string;
    static readonly ea: string;
    static readonly ec: string;
    static readonly ed: string;
    static readonly ee: string;
    static readonly ei: string;
    static readonly ej: string;
    static readonly el: string;
    static readonly dy: string;
    static readonly d4: string;
    static readonly d5: string;
    static readonly eb: string;
    static readonly ef: string;
    static readonly d9: string;
    static readonly du: string;
    static readonly dv: string;
    static readonly eg: string;
    static readonly ek: string;
    static readonly dn: DrawingMLSpreadsheetDrawing;
    constructor();
    protected get_j(): string;
    readonly j: string;
    private static eq;
    private static e5;
    private static ex;
    private static fc;
    static em(a: XmlPartManagerBase): void;
    static e1(a: XmlPartManagerBase): void;
    static en(a: XmlPartManagerBase, b: boolean, c: boolean): {
        p1: boolean;
        p2: boolean;
    };
    static e2(a: XmlPartManagerBase, b?: boolean, c?: boolean): void;
    static eo(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static e3(a: XmlPartManagerBase, b: number): void;
    static ep(a: XmlPartManagerBase, b: ST_Coordinate): {
        p1: ST_Coordinate;
    };
    static e4(a: XmlPartManagerBase, b: ST_Coordinate): void;
    static er(a: XmlPartManagerBase, b: ST_PositiveCoordinate, c: ST_PositiveCoordinate): {
        p1: ST_PositiveCoordinate;
        p2: ST_PositiveCoordinate;
    };
    static e6(a: XmlPartManagerBase, b: ST_PositiveCoordinate, c: ST_PositiveCoordinate): void;
    static es(a: XmlPartManagerBase): void;
    static e7(a: XmlPartManagerBase): void;
    static et(a: XmlPartManagerBase): void;
    static e8(a: XmlPartManagerBase): void;
    static eu(a: XmlPartManagerBase, b: ST_Coordinate, c: ST_Coordinate): {
        p1: ST_Coordinate;
        p2: ST_Coordinate;
    };
    static e9(a: XmlPartManagerBase, b: ST_Coordinate, c: ST_Coordinate): void;
    static ev(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static fa(a: XmlPartManagerBase, b: number): void;
    static ew(a: XmlPartManagerBase, b: ST_Coordinate): {
        p1: ST_Coordinate;
    };
    static fb(a: XmlPartManagerBase, b: ST_Coordinate): void;
    static ey(a: XmlPartManagerBase): void;
    static fd(a: XmlPartManagerBase): void;
    static ez(a: XmlPartManagerBase, b: ST_EditAs): {
        p1: ST_EditAs;
    };
    static fe(a: XmlPartManagerBase, b?: ST_EditAs): void;
    static e0(a: XmlPartManagerBase): void;
    static ff(a: XmlPartManagerBase): void;
}
/**
 * @hidden
 */
export declare class Excel2006Main extends XmlNamespaceDefinitionBase {
    static $t: Type;
    static readonly aq: string;
    static readonly ap: string;
    static readonly ar: string;
    static readonly an: Excel2006Main;
    constructor();
    i(a: ST_ConformanceClass): string;
    protected get_j(): string;
    readonly j: string;
    static as(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static au(a: XmlPartManagerBase, b: string): void;
    static at(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static av(a: XmlPartManagerBase, b: string): void;
}
/**
 * @hidden
 */
export declare class ExcelNamespace extends XmlNamespaceDefinitionBase {
    static $t: Type;
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
    static readonly bk: string;
    static readonly bj: string;
    static readonly bn: string;
    static readonly bl: string;
    static readonly bm: string;
    static readonly bo: string;
    static readonly bp: string;
    static readonly br: string;
    static readonly bs: string;
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
    static readonly b9: string;
    static readonly b6: string;
    static readonly b7: string;
    static readonly b8: string;
    static readonly an: ExcelNamespace;
    constructor();
    i(a: ST_ConformanceClass): string;
    protected get_j(): string;
    readonly j: string;
    private static dm;
    private static e7;
    static ca(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static dv(a: XmlPartManagerBase, b: string): void;
    static cb(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static dw(a: XmlPartManagerBase, b: boolean): void;
    static cc(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static dx(a: XmlPartManagerBase, b: boolean): void;
    static cd(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static dy(a: XmlPartManagerBase, b: boolean): void;
    static ce(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static dz(a: XmlPartManagerBase, b: boolean): void;
    static cf(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static d0(a: XmlPartManagerBase, b: boolean): void;
    static cg(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static d1(a: XmlPartManagerBase, b: boolean): void;
    static ch(a: XmlPartManagerBase, b: ST_CF): {
        p1: ST_CF;
    };
    static d2(a: XmlPartManagerBase, b: ST_CF): void;
    static ci(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static d3(a: XmlPartManagerBase, b: number): void;
    static cj(a: XmlPartManagerBase, b: ST_ObjectType): {
        p1: ST_ObjectType;
    };
    static d4(a: XmlPartManagerBase, b: ST_ObjectType): void;
    static ck(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static d5(a: XmlPartManagerBase, b: boolean): void;
    static cl(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static d6(a: XmlPartManagerBase, b: boolean): void;
    static cm(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static d7(a: XmlPartManagerBase, b: number): void;
    static cn(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static d8(a: XmlPartManagerBase, b: boolean): void;
    static co(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static d9(a: XmlPartManagerBase, b: boolean): void;
    static cp(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static ea(a: XmlPartManagerBase, b: boolean): void;
    static cq(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static eb(a: XmlPartManagerBase, b: boolean): void;
    static cr(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static ec(a: XmlPartManagerBase, b: boolean): void;
    static cs(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static ed(a: XmlPartManagerBase, b: number): void;
    static ct(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static ee(a: XmlPartManagerBase, b: string): void;
    static cu(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static ef(a: XmlPartManagerBase, b: number): void;
    static cv(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static eg(a: XmlPartManagerBase, b: boolean): void;
    static cw(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static eh(a: XmlPartManagerBase, b: string): void;
    static cx(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static ei(a: XmlPartManagerBase, b: string): void;
    static cy(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static ej(a: XmlPartManagerBase, b: string): void;
    static cz(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static ek(a: XmlPartManagerBase, b: boolean): void;
    static c0(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static el(a: XmlPartManagerBase, b: boolean): void;
    static c1(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static em(a: XmlPartManagerBase, b: number): void;
    static c2(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static en(a: XmlPartManagerBase, b: boolean): void;
    static c3(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static eo(a: XmlPartManagerBase, b: string): void;
    static c5(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static eq(a: XmlPartManagerBase, b: boolean): void;
    static c4(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static ep(a: XmlPartManagerBase, b: boolean): void;
    static c6(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static er(a: XmlPartManagerBase, b: boolean): void;
    static c7(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static es(a: XmlPartManagerBase, b: number): void;
    static c8(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static et(a: XmlPartManagerBase, b: number): void;
    static c9(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static eu(a: XmlPartManagerBase, b: boolean): void;
    static da(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static ev(a: XmlPartManagerBase, b: boolean): void;
    static dc(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static ex(a: XmlPartManagerBase, b: boolean): void;
    static db(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static ew(a: XmlPartManagerBase, b: boolean): void;
    static dd(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static ey(a: XmlPartManagerBase, b: number): void;
    static de(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static ez(a: XmlPartManagerBase, b: boolean): void;
    static df(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static e0(a: XmlPartManagerBase, b: boolean): void;
    static dg(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static e1(a: XmlPartManagerBase, b: number): void;
    static dh(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static e2(a: XmlPartManagerBase, b: boolean): void;
    static di(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static e3(a: XmlPartManagerBase, b: boolean): void;
    static dj(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static e4(a: XmlPartManagerBase, b: number): void;
    static dk(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static e5(a: XmlPartManagerBase, b: string): void;
    static dl(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static e6(a: XmlPartManagerBase, b: boolean): void;
    static dn(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static e8(a: XmlPartManagerBase, b: string): void;
    static dp(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static e9(a: XmlPartManagerBase, b: string): void;
    static dq(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static fa(a: XmlPartManagerBase, b: boolean): void;
    static du(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static fe(a: XmlPartManagerBase, b: boolean): void;
    static ds(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static fc(a: XmlPartManagerBase, b: boolean): void;
    static dr(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static fb(a: XmlPartManagerBase, b: number): void;
    static dt(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static fd(a: XmlPartManagerBase, b: boolean): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetML2009Main extends XmlNamespaceDefinitionBase {
    static $t: Type;
    static readonly b0: string;
    static readonly ar: string;
    static readonly au: string;
    static readonly a8: string;
    static readonly a9: string;
    static readonly av: string;
    static readonly aw: string;
    static readonly ax: string;
    static readonly ay: string;
    static readonly a6: string;
    static readonly bc: string;
    static readonly bd: string;
    static readonly be: string;
    static readonly bi: string;
    static readonly bm: string;
    static readonly bn: string;
    static readonly bo: string;
    static readonly br: string;
    static readonly bt: string;
    static readonly bv: string;
    static readonly b3: string;
    static readonly b4: string;
    static readonly b5: string;
    static readonly b7: string;
    static readonly cf: string;
    static readonly cg: string;
    static readonly ch: string;
    static readonly cj: string;
    static readonly cl: string;
    static readonly cm: string;
    static readonly cn: string;
    static readonly co: string;
    static readonly cq: string;
    static readonly az: string;
    static readonly a0: string;
    static readonly a1: string;
    static readonly a2: string;
    static readonly a3: string;
    static readonly a4: string;
    static readonly a5: string;
    static readonly a7: string;
    static readonly an: SpreadsheetML2009Main;
    constructor();
    i(a: ST_ConformanceClass): string;
    protected get_j(): string;
    readonly j: string;
    static cy(a: XmlPartManagerBase, b: ST_DataValidationType, c: ST_DataValidationErrorStyle, d: ST_DataValidationImeMode, e: ST_DataValidationOperator, f: boolean, g: boolean, h: boolean, i: boolean, j: string, k: string, l: string, m: string): {
        p1: ST_DataValidationType;
        p2: ST_DataValidationErrorStyle;
        p3: ST_DataValidationImeMode;
        p4: ST_DataValidationOperator;
        p5: boolean;
        p6: boolean;
        p7: boolean;
        p8: boolean;
        p9: string;
        p10: string;
        p11: string;
        p12: string;
    };
    static dg(a: XmlPartManagerBase, b?: ST_DataValidationType, c?: ST_DataValidationErrorStyle, d?: ST_DataValidationImeMode, e?: ST_DataValidationOperator, f?: boolean, g?: boolean, h?: boolean, i?: boolean, j?: string, k?: string, l?: string, m?: string): void;
    static cz(a: XmlPartManagerBase, b: boolean, c: Nullable$1<number>, d: Nullable$1<number>, e: Nullable$1<number>): {
        p1: boolean;
        p2: Nullable$1<number>;
        p3: Nullable$1<number>;
        p4: Nullable$1<number>;
    };
    static dh(a: XmlPartManagerBase, b?: boolean, c?: Nullable$1<number>, d?: Nullable$1<number>, e?: Nullable$1<number>): void;
    static c0(a: XmlPartManagerBase): void;
    static di(a: XmlPartManagerBase): void;
    static c1(a: XmlPartManagerBase): void;
    static dj(a: XmlPartManagerBase): void;
    static c2(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static dk(a: XmlPartManagerBase, b: string): void;
    static de(a: XmlPartManagerBase): void;
    static cw(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static dd(a: XmlPartManagerBase, b: string, c: Nullable$1<boolean>): void;
    static dc(a: XmlPartManagerBase): void;
    static da(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_CfType>, d?: number, e?: boolean, f?: Nullable$1<ST_ConditionalFormattingOperator>, g?: Nullable$1<boolean>): void;
    static cv(a: XmlPartManagerBase, b: ST_CfvoType, c: string, d: boolean): {
        p1: ST_CfvoType;
        p2: string;
        p3: boolean;
    };
    static db(a: XmlPartManagerBase, b: ST_CfvoType, c?: boolean): void;
    static cx(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<number>, d: Nullable$1<boolean>, e: Nullable$1<boolean>, f: Nullable$1<boolean>, g: Nullable$1<ST_DataBarDirection>, h: Nullable$1<boolean>, i: Nullable$1<boolean>, j: Nullable$1<ST_DataBarAxisPosition>): {
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
    static df(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<number>, d: Nullable$1<boolean>, e: Nullable$1<boolean>, f: Nullable$1<boolean>, g: Nullable$1<ST_DataBarDirection>, h: Nullable$1<boolean>, i: Nullable$1<boolean>, j: Nullable$1<ST_DataBarAxisPosition>): void;
    static cu(a: XmlPartManagerBase, b: ST_IconSetType, c: number): {
        p1: ST_IconSetType;
        p2: number;
    };
    static c9(a: XmlPartManagerBase, b: ST_IconSetType, c: number): void;
    static c3(a: XmlPartManagerBase, b: string, c: boolean, d: boolean, e: boolean): {
        p1: string;
        p2: boolean;
        p3: boolean;
        p4: boolean;
    };
    static dl(a: XmlPartManagerBase, b?: string, c?: boolean, d?: boolean, e?: boolean): void;
    static c4(a: XmlPartManagerBase): void;
    static dm(a: XmlPartManagerBase): void;
    static c7(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static dq(a: XmlPartManagerBase, b: string): void;
    static c5(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static dn(a: XmlPartManagerBase, b: string): void;
    static c6(a: XmlPartManagerBase): void;
    static dp(a: XmlPartManagerBase): void;
    static c8(a: XmlPartManagerBase): void;
    static dr(a: XmlPartManagerBase): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetMLMain extends XmlNamespaceDefinitionBase {
    static $t: Type;
    private static readonly lg;
    private static readonly lf;
    static readonly cj: string;
    static readonly co: string;
    static readonly cz: string;
    static readonly c1: string;
    static readonly c5: string;
    static readonly dc: string;
    static readonly dg: string;
    static readonly dj: string;
    static readonly dk: string;
    static readonly dm: string;
    static readonly dn: string;
    static readonly dq: string;
    static readonly dt: string;
    static readonly d0: string;
    static readonly d1: string;
    static readonly d4: string;
    static readonly d7: string;
    static readonly d8: string;
    static readonly d9: string;
    static readonly ea: string;
    static readonly ef: string;
    static readonly eg: string;
    static readonly ei: string;
    static readonly ep: string;
    static readonly eq: string;
    static readonly et: string;
    static readonly ex: string;
    static readonly eu: string;
    static readonly ew: string;
    static readonly ey: string;
    static readonly e0: string;
    static readonly e2: string;
    static readonly e3: string;
    static readonly e6: string;
    static readonly e7: string;
    static readonly fc: string;
    static readonly fd: string;
    static readonly fe: string;
    static readonly fj: string;
    static readonly fk: string;
    static readonly fp: string;
    static readonly fq: string;
    static readonly fs: string;
    static readonly ft: string;
    static readonly fu: string;
    static readonly fx: string;
    static readonly fy: string;
    static readonly f1: string;
    static readonly f4: string;
    static readonly f5: string;
    static readonly f6: string;
    static readonly gg: string;
    static readonly gh: string;
    static readonly gq: string;
    static readonly gv: string;
    static readonly g1: string;
    static readonly g2: string;
    static readonly g5: string;
    static readonly g7: string;
    static readonly g8: string;
    static readonly ha: string;
    static readonly hh: string;
    static readonly hi: string;
    static readonly hj: string;
    static readonly hk: string;
    static readonly hl: string;
    static readonly hm: string;
    static readonly hn: string;
    static readonly ho: string;
    static readonly hp: string;
    static readonly hq: string;
    static readonly hr: string;
    static readonly hs: string;
    static readonly ht: string;
    static readonly hu: string;
    static readonly hv: string;
    static readonly hx: string;
    static readonly hy: string;
    static readonly h0: string;
    static readonly h3: string;
    static readonly h6: string;
    static readonly h7: string;
    static readonly id: string;
    static readonly ig: string;
    static readonly ij: string;
    static readonly ip: string;
    static readonly iq: string;
    static readonly ir: string;
    static readonly is: string;
    static readonly ix: string;
    static readonly i4: string;
    static readonly jg: string;
    static readonly jm: string;
    static readonly jn: string;
    static readonly jo: string;
    static readonly jq: string;
    static readonly js: string;
    static readonly j1: string;
    static readonly b7: string;
    static readonly kc: string;
    static readonly ke: string;
    static readonly kf: string;
    static readonly k4: string;
    static readonly k5: string;
    static readonly ld: string;
    static readonly lh: string;
    static readonly lj: string;
    static readonly ll: string;
    static readonly lm: string;
    static readonly lo: string;
    static readonly lp: string;
    static readonly lq: string;
    static readonly lu: string;
    static readonly lz: string;
    static readonly l1: string;
    static readonly l3: string;
    static readonly l4: string;
    static readonly l5: string;
    static readonly mb: string;
    static readonly mh: string;
    static readonly mk: string;
    static readonly ml: string;
    static readonly mm: string;
    static readonly ms: string;
    static readonly my: string;
    static readonly mz: string;
    static readonly m0: string;
    static readonly m7: string;
    static readonly nv: string;
    static readonly nx: string;
    static readonly n1: string;
    static readonly n4: string;
    static readonly n5: string;
    static readonly n6: string;
    static readonly oe: string;
    static readonly oh: string;
    static readonly om: string;
    static readonly oo: string;
    static readonly op: string;
    static readonly oq: string;
    static readonly or: string;
    static readonly ot: string;
    static readonly ou: string;
    static readonly ov: string;
    static readonly ow: string;
    static readonly ox: string;
    static readonly oy: string;
    static readonly oz: string;
    static readonly ok: string;
    static readonly pv: string;
    static readonly p1: string;
    static readonly p3: string;
    static readonly p7: string;
    static readonly p8: string;
    static readonly qc: string;
    static readonly qe: string;
    static readonly qg: string;
    static readonly qm: string;
    static readonly qn: string;
    static readonly qp: string;
    static readonly qq: string;
    static readonly qt: string;
    static readonly qu: string;
    static readonly qv: string;
    static readonly qw: string;
    static readonly qx: string;
    static readonly qy: string;
    static readonly qz: string;
    static readonly q0: string;
    static readonly q4: string;
    static readonly re: string;
    static readonly rg: string;
    static readonly rm: string;
    static readonly rt: string;
    static readonly r3: string;
    static readonly r7: string;
    static readonly r8: string;
    static readonly sj: string;
    static readonly so: string;
    static readonly sp: string;
    static readonly ss: string;
    static readonly su: string;
    static readonly sx: string;
    static readonly s0: string;
    static readonly ao: SpreadsheetMLMain;
    constructor();
    i(a: ST_ConformanceClass): string;
    protected get_j(): string;
    readonly j: string;
    private static tj;
    private static hg;
    private static rv;
    private static uq;
    private static aab;
    static ur(a: XmlPartManagerBase, b: string, c: ST_BorderStyle): {
        p2: ST_BorderStyle;
    };
    static aac(a: XmlPartManagerBase, b: string, c?: ST_BorderStyle): void;
    static us(a: XmlPartManagerBase, b: string, c: Nullable$1<boolean>, d: Nullable$1<number>, e: Nullable$1<ST_UnsignedIntHex>, f: Nullable$1<number>, g: number): {
        p2: Nullable$1<boolean>;
        p3: Nullable$1<number>;
        p4: Nullable$1<ST_UnsignedIntHex>;
        p5: Nullable$1<number>;
        p6: number;
    };
    static aad(a: XmlPartManagerBase, b: string, c?: Nullable$1<boolean>, d?: Nullable$1<number>, e?: Nullable$1<ST_UnsignedIntHex>, f?: Nullable$1<number>, g?: number): void;
    private static ut;
    private static aae;
    private static uu;
    private static aaf;
    private static uv;
    private static aag;
    static tk(a: XmlPartManagerBase, b: Nullable$1<ST_HorizontalAlignment>, c: Nullable$1<ST_VerticalAlignment>, d: Nullable$1<number>, e: boolean, f: Nullable$1<number>, g: Nullable$1<number>, h: boolean, i: boolean, j: Nullable$1<number>): {
        p1: Nullable$1<ST_HorizontalAlignment>;
        p2: Nullable$1<ST_VerticalAlignment>;
        p3: Nullable$1<number>;
        p4: boolean;
        p5: Nullable$1<number>;
        p6: Nullable$1<number>;
        p7: boolean;
        p8: boolean;
        p9: Nullable$1<number>;
    };
    static y5(a: XmlPartManagerBase, b?: Nullable$1<ST_HorizontalAlignment>, c?: Nullable$1<ST_VerticalAlignment>, d?: Nullable$1<number>, e?: boolean, f?: Nullable$1<number>, g?: Nullable$1<number>, h?: boolean, i?: boolean, j?: Nullable$1<number>): void;
    static tl(a: XmlPartManagerBase, b: boolean, c: boolean): {
        p1: boolean;
        p2: boolean;
    };
    static y6(a: XmlPartManagerBase, b?: boolean, c?: boolean): void;
    static tm(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static y7(a: XmlPartManagerBase, b: string): void;
    static tn(a: XmlPartManagerBase): void;
    static y8(a: XmlPartManagerBase): void;
    static to(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static y9(a: XmlPartManagerBase, b: string): void;
    static tp(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static za(a: XmlPartManagerBase, b?: boolean): void;
    static tq(a: XmlPartManagerBase, b: Nullable$1<boolean>, c: Nullable$1<number>, d: Nullable$1<ST_UnsignedIntHex>, e: Nullable$1<number>, f: number): {
        p1: Nullable$1<boolean>;
        p2: Nullable$1<number>;
        p3: Nullable$1<ST_UnsignedIntHex>;
        p4: Nullable$1<number>;
        p5: number;
    };
    static zb(a: XmlPartManagerBase, b?: Nullable$1<boolean>, c?: Nullable$1<number>, d?: Nullable$1<ST_UnsignedIntHex>, e?: Nullable$1<number>, f?: number): void;
    static tr(a: XmlPartManagerBase): void;
    static zc(a: XmlPartManagerBase): void;
    static ts(a: XmlPartManagerBase, b: boolean, c: boolean, d: boolean): {
        p1: boolean;
        p2: boolean;
        p3: boolean;
    };
    static zd(a: XmlPartManagerBase, b?: boolean, c?: boolean, d?: boolean): void;
    static tt(a: XmlPartManagerBase, b: Nullable$1<number>): {
        p1: Nullable$1<number>;
    };
    static ze(a: XmlPartManagerBase, b?: Nullable$1<number>): void;
    static tu(a: XmlPartManagerBase, b: ST_BorderStyle): {
        p1: ST_BorderStyle;
    };
    static zf(a: XmlPartManagerBase, b?: ST_BorderStyle): void;
    static tv(a: XmlPartManagerBase, b: number, c: Nullable$1<number>, d: Nullable$1<number>, e: boolean, f: boolean): {
        p1: number;
        p2: Nullable$1<number>;
        p3: Nullable$1<number>;
        p4: boolean;
        p5: boolean;
    };
    static zg(a: XmlPartManagerBase, b?: number, c?: Nullable$1<number>, d?: Nullable$1<number>, e?: boolean, f?: boolean): void;
    static tw(a: XmlPartManagerBase, b: Nullable$1<number>, c: ST_CalcMode, d: boolean, e: ST_RefMode, f: boolean, g: number, h: number, i: boolean, j: boolean, k: boolean, l: boolean, m: Nullable$1<number>, n: Nullable$1<boolean>): {
        p1: Nullable$1<number>;
        p2: ST_CalcMode;
        p3: boolean;
        p4: ST_RefMode;
        p5: boolean;
        p6: number;
        p7: number;
        p8: boolean;
        p9: boolean;
        p10: boolean;
        p11: boolean;
        p12: Nullable$1<number>;
        p13: Nullable$1<boolean>;
    };
    static zh(a: XmlPartManagerBase, b?: Nullable$1<number>, c?: ST_CalcMode, d?: boolean, e?: ST_RefMode, f?: boolean, g?: number, h?: number, i?: boolean, j?: boolean, k?: boolean, l?: boolean, m?: Nullable$1<number>, n?: Nullable$1<boolean>): void;
    static tx(a: XmlPartManagerBase, b: string, c: boolean): {
        p1: string;
        p2: boolean;
    };
    static zi(a: XmlPartManagerBase, b: string, c?: boolean): void;
    static ty(a: XmlPartManagerBase, b: string, c: number, d: ST_CellType, e: number, f: number, g: boolean): {
        p1: string;
        p2: number;
        p3: ST_CellType;
        p4: number;
        p5: number;
        p6: boolean;
    };
    static aq(a: string): ST_CellType;
    static zj(a: XmlPartManagerBase, b: string, c?: number, d?: ST_CellType, e?: number, f?: number, g?: boolean): void;
    static tz(a: XmlPartManagerBase, b: string, c: ST_CellType, d: number): {
        p1: string;
        p2: ST_CellType;
        p3: number;
    };
    static zk(a: XmlPartManagerBase, b?: string, c?: ST_CellType, d?: number): void;
    static t0(a: XmlPartManagerBase, b: number, c: string, d: Nullable$1<number>, e: Nullable$1<number>, f: boolean, g: boolean): {
        p1: number;
        p2: string;
        p3: Nullable$1<number>;
        p4: Nullable$1<number>;
        p5: boolean;
        p6: boolean;
    };
    static zl(a: XmlPartManagerBase, b: number, c?: string, d?: Nullable$1<number>, e?: Nullable$1<number>, f?: boolean, g?: boolean): void;
    static t1(a: XmlPartManagerBase, b: Nullable$1<number>): {
        p1: Nullable$1<number>;
    };
    static zm(a: XmlPartManagerBase, b?: Nullable$1<number>): void;
    static t2(a: XmlPartManagerBase, b: Nullable$1<number>): {
        p1: Nullable$1<number>;
    };
    static zn(a: XmlPartManagerBase, b?: Nullable$1<number>): void;
    static t3(a: XmlPartManagerBase, b: Nullable$1<number>): {
        p1: Nullable$1<number>;
    };
    static zo(a: XmlPartManagerBase, b?: Nullable$1<number>): void;
    static t4(a: XmlPartManagerBase, b: string, c: Nullable$1<ST_CfType>, d: Nullable$1<number>, e: Nullable$1<number>, f: Nullable$1<boolean>, g: boolean, h: boolean, i: boolean, j: Nullable$1<ST_ConditionalFormattingOperator>, k: string, l: Nullable$1<ST_TimePeriod>, m: Nullable$1<number>, n: Nullable$1<number>, o: boolean, p: string, q: Nullable$1<boolean>): {
        p2: Nullable$1<ST_CfType>;
        p3: Nullable$1<number>;
        p4: Nullable$1<number>;
        p5: Nullable$1<boolean>;
        p6: boolean;
        p7: boolean;
        p8: boolean;
        p9: Nullable$1<ST_ConditionalFormattingOperator>;
        p10: string;
        p11: Nullable$1<ST_TimePeriod>;
        p12: Nullable$1<number>;
        p13: Nullable$1<number>;
        p14: boolean;
        p15: string;
        p16: Nullable$1<boolean>;
    };
    static zp(a: XmlPartManagerBase, b: string, c?: Nullable$1<ST_CfType>, d?: Nullable$1<number>, e?: number, f?: boolean, g?: Nullable$1<boolean>, h?: Nullable$1<boolean>, i?: Nullable$1<boolean>, j?: Nullable$1<ST_ConditionalFormattingOperator>, k?: string, l?: Nullable$1<ST_TimePeriod>, m?: Nullable$1<number>, n?: Nullable$1<number>, o?: Nullable$1<boolean>, p?: string, q?: Nullable$1<boolean>): void;
    static t5(a: XmlPartManagerBase, b: ST_CfvoType, c: string, d: boolean): {
        p1: ST_CfvoType;
        p2: string;
        p3: boolean;
    };
    static t6(a: XmlPartManagerBase, b: string, c: ST_CfvoType, d: string, e: boolean): {
        p2: ST_CfvoType;
        p3: string;
        p4: boolean;
    };
    static zq(a: XmlPartManagerBase, b: ST_CfvoType, c?: string, d?: boolean): void;
    static t7(a: XmlPartManagerBase): void;
    static zr(a: XmlPartManagerBase): void;
    static ub(a: XmlPartManagerBase, b: number, c: boolean, d: number, e: boolean): {
        p1: number;
        p2: boolean;
        p3: number;
        p4: boolean;
    };
    static zv(a: XmlPartManagerBase, b: number, c?: boolean, d?: number, e?: boolean): void;
    static t8(a: XmlPartManagerBase, b: boolean, c: string): {
        p1: boolean;
        p2: string;
    };
    static zs(a: XmlPartManagerBase, b?: boolean, c?: string): void;
    static t9(a: XmlPartManagerBase, b: Nullable$1<ST_UnsignedShortHex>, c: boolean, d: boolean): {
        p1: Nullable$1<ST_UnsignedShortHex>;
        p2: boolean;
        p3: boolean;
    };
    static zt(a: XmlPartManagerBase, b?: Nullable$1<ST_UnsignedShortHex>, c?: boolean, d?: boolean): void;
    static ua(a: XmlPartManagerBase, b: string, c: string, d: string, e: Nullable$1<number>, f: boolean, g: boolean): {
        p1: string;
        p2: string;
        p3: string;
        p4: Nullable$1<number>;
        p5: boolean;
        p6: boolean;
    };
    static zu(a: XmlPartManagerBase, b?: string, c?: string, d?: string, e?: Nullable$1<number>, f?: boolean, g?: boolean): void;
    static uc(a: XmlPartManagerBase, b: number, c: number): {
        p1: number;
        p2: number;
    };
    static zw(a: XmlPartManagerBase, b: number, c: number): void;
    static ud(a: XmlPartManagerBase, b: number, c: number, d: Nullable$1<number>, e: number, f: boolean, g: boolean, h: boolean, i: boolean, j: number, k: boolean): {
        p1: number;
        p2: number;
        p3: Nullable$1<number>;
        p4: number;
        p5: boolean;
        p6: boolean;
        p7: boolean;
        p8: boolean;
        p9: number;
        p10: boolean;
    };
    static zx(a: XmlPartManagerBase, b: number, c: number, d?: Nullable$1<number>, e?: number, f?: boolean, g?: boolean, h?: boolean, i?: boolean, j?: number, k?: boolean): void;
    static ue(a: XmlPartManagerBase, b: Nullable$1<boolean>, c: Nullable$1<number>, d: Nullable$1<ST_UnsignedIntHex>, e: Nullable$1<number>, f: number): {
        p1: Nullable$1<boolean>;
        p2: Nullable$1<number>;
        p3: Nullable$1<ST_UnsignedIntHex>;
        p4: Nullable$1<number>;
        p5: number;
    };
    static zy(a: XmlPartManagerBase, b?: Nullable$1<boolean>, c?: Nullable$1<number>, d?: Nullable$1<ST_UnsignedIntHex>, e?: Nullable$1<number>, f?: number): void;
    static uf(a: XmlPartManagerBase, b: Nullable$1<number>, c: boolean): {
        p1: Nullable$1<number>;
        p2: boolean;
    };
    static zz(a: XmlPartManagerBase, b?: Nullable$1<number>, c?: boolean): void;
    static z0(a: XmlPartManagerBase): void;
    static ug(a: XmlPartManagerBase): void;
    static z1(a: XmlPartManagerBase): void;
    static uh(a: XmlPartManagerBase): void;
    static z2(a: XmlPartManagerBase): void;
    static ui(a: XmlPartManagerBase, b: string, c: number, d: Nullable$1<ST_Guid>, e: Nullable$1<number>): {
        p1: string;
        p2: number;
        p3: Nullable$1<ST_Guid>;
        p4: Nullable$1<number>;
    };
    static z3(a: XmlPartManagerBase, b: string, c: number, d?: Nullable$1<ST_Guid>, e?: Nullable$1<number>): void;
    static uj(a: XmlPartManagerBase): void;
    static z4(a: XmlPartManagerBase): void;
    static uk(a: XmlPartManagerBase): void;
    static z5(a: XmlPartManagerBase): void;
    static ul(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static z6(a: XmlPartManagerBase, b?: boolean): void;
    static um(a: XmlPartManagerBase, b: List$1<string>, c: boolean): {
        p1: List$1<string>;
        p2: boolean;
    };
    static z7(a: XmlPartManagerBase, b: List$1<string>, c?: boolean): void;
    static un(a: XmlPartManagerBase, b: number, c: string, d: string): {
        p1: number;
        p2: string;
        p3: string;
    };
    static z8(a: XmlPartManagerBase, b: number, c: string, d?: string): void;
    static uo(a: XmlPartManagerBase, b: boolean, c: boolean, d: boolean, e: boolean, f: boolean, g: boolean, h: boolean, i: boolean, j: boolean, k: string, l: string, m: string, n: string, o: string, p: string): {
        p1: boolean;
        p2: boolean;
        p3: boolean;
        p4: boolean;
        p5: boolean;
        p6: boolean;
        p7: boolean;
        p8: boolean;
        p9: boolean;
        p10: string;
        p11: string;
        p12: string;
        p13: string;
        p14: string;
        p15: string;
    };
    static z9(a: XmlPartManagerBase, b?: boolean, c?: boolean, d?: boolean, e?: boolean, f?: boolean, g?: boolean, h?: boolean, i?: boolean, j?: boolean, k?: string, l?: string, m?: string, n?: string, o?: string, p?: string): void;
    static up(a: XmlPartManagerBase): void;
    static aaa(a: XmlPartManagerBase): void;
    static uw(a: XmlPartManagerBase, b: ST_Guid, c: number, d: ST_SheetState, e: boolean): {
        p1: ST_Guid;
        p2: number;
        p3: ST_SheetState;
        p4: boolean;
    };
    static aah(a: XmlPartManagerBase, b: ST_Guid, c?: number, d?: ST_SheetState, e?: boolean): void;
    static ux(a: XmlPartManagerBase, b: string, c: ST_FilterOperator): {
        p1: string;
        p2: ST_FilterOperator;
    };
    static aai(a: XmlPartManagerBase, b: string, c?: ST_FilterOperator): void;
    static uy(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static aaj(a: XmlPartManagerBase, b?: boolean): void;
    static uz(a: XmlPartManagerBase, b: ST_Guid, c: number, d: number, e: boolean, f: boolean, g: boolean, h: boolean, i: boolean, j: boolean, k: boolean, l: boolean, m: boolean, n: boolean, o: boolean, p: boolean, q: ST_SheetState, r: boolean, s: ST_SheetViewType, t: boolean, u: string): {
        p1: ST_Guid;
        p2: number;
        p3: number;
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
        p16: ST_SheetState;
        p17: boolean;
        p18: ST_SheetViewType;
        p19: boolean;
        p20: string;
    };
    static aak(a: XmlPartManagerBase, b: ST_Guid, c?: number, d?: number, e?: boolean, f?: boolean, g?: boolean, h?: boolean, i?: boolean, j?: boolean, k?: boolean, l?: boolean, m?: boolean, n?: boolean, o?: boolean, p?: boolean, q?: ST_SheetState, r?: boolean, s?: ST_SheetViewType, t?: boolean, u?: string): void;
    static u0(a: XmlPartManagerBase): void;
    static aal(a: XmlPartManagerBase): void;
    static u1(a: XmlPartManagerBase, b: string, c: ST_Guid, d: number, e: number, f: number, g: boolean, h: Nullable$1<number>, i: boolean, j: boolean, k: boolean, l: boolean, m: boolean, n: boolean, o: boolean, p: boolean, q: boolean, r: boolean, s: number, t: number, u: number, v: boolean, w: boolean, x: ST_Comments, y: ST_Objects): {
        p1: string;
        p2: ST_Guid;
        p3: number;
        p4: number;
        p5: number;
        p6: boolean;
        p7: Nullable$1<number>;
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
        p18: number;
        p19: number;
        p20: number;
        p21: boolean;
        p22: boolean;
        p23: ST_Comments;
        p24: ST_Objects;
    };
    static aam(a: XmlPartManagerBase, b: string, c: ST_Guid, d: number, e: number, f: number, g?: boolean, h?: Nullable$1<number>, i?: boolean, j?: boolean, k?: boolean, l?: boolean, m?: boolean, n?: boolean, o?: boolean, p?: boolean, q?: boolean, r?: boolean, s?: number, t?: number, u?: number, v?: boolean, w?: boolean, x?: ST_Comments, y?: ST_Objects): void;
    static u2(a: XmlPartManagerBase): void;
    static aan(a: XmlPartManagerBase): void;
    static u3(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<number>, d: Nullable$1<boolean>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<number>;
        p3: Nullable$1<boolean>;
    };
    static aao(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<number>, d: Nullable$1<boolean>): void;
    static u4(a: XmlPartManagerBase, b: List$1<string>, c: ST_DataValidationType, d: ST_DataValidationErrorStyle, e: ST_DataValidationImeMode, f: ST_DataValidationOperator, g: boolean, h: boolean, i: boolean, j: boolean, k: string, l: string, m: string, n: string): {
        p1: List$1<string>;
        p2: ST_DataValidationType;
        p3: ST_DataValidationErrorStyle;
        p4: ST_DataValidationImeMode;
        p5: ST_DataValidationOperator;
        p6: boolean;
        p7: boolean;
        p8: boolean;
        p9: boolean;
        p10: string;
        p11: string;
        p12: string;
        p13: string;
    };
    static aap(a: XmlPartManagerBase, b: List$1<string>, c?: ST_DataValidationType, d?: ST_DataValidationErrorStyle, e?: ST_DataValidationImeMode, f?: ST_DataValidationOperator, g?: boolean, h?: boolean, i?: boolean, j?: boolean, k?: string, l?: string, m?: string, n?: string): void;
    static u5(a: XmlPartManagerBase, b: string, c: ST_DataValidationType, d: ST_DataValidationErrorStyle, e: ST_DataValidationImeMode, f: ST_DataValidationOperator, g: boolean, h: boolean, i: boolean, j: boolean, k: string, l: string, m: string, n: string): {
        p1: string;
        p2: ST_DataValidationType;
        p3: ST_DataValidationErrorStyle;
        p4: ST_DataValidationImeMode;
        p5: ST_DataValidationOperator;
        p6: boolean;
        p7: boolean;
        p8: boolean;
        p9: boolean;
        p10: string;
        p11: string;
        p12: string;
        p13: string;
    };
    static aaq(a: XmlPartManagerBase, b: string, c?: ST_DataValidationType, d?: ST_DataValidationErrorStyle, e?: ST_DataValidationImeMode, f?: ST_DataValidationOperator, g?: boolean, h?: boolean, i?: boolean, j?: boolean, k?: string, l?: string, m?: string, n?: string): void;
    static u6(a: XmlPartManagerBase, b: boolean, c: Nullable$1<number>, d: Nullable$1<number>, e: Nullable$1<number>): {
        p1: boolean;
        p2: Nullable$1<number>;
        p3: Nullable$1<number>;
        p4: Nullable$1<number>;
    };
    static aar(a: XmlPartManagerBase, b?: boolean, c?: Nullable$1<number>, d?: Nullable$1<number>, e?: Nullable$1<number>): void;
    static u7(a: XmlPartManagerBase, b: ST_DateTimeGrouping, c: number, d: Nullable$1<number>, e: Nullable$1<number>, f: Nullable$1<number>, g: Nullable$1<number>, h: Nullable$1<number>): {
        p1: ST_DateTimeGrouping;
        p2: number;
        p3: Nullable$1<number>;
        p4: Nullable$1<number>;
        p5: Nullable$1<number>;
        p6: Nullable$1<number>;
        p7: Nullable$1<number>;
    };
    static aas(a: XmlPartManagerBase, b: ST_DateTimeGrouping, c: number, d?: Nullable$1<number>, e?: Nullable$1<number>, f?: Nullable$1<number>, g?: Nullable$1<number>, h?: Nullable$1<number>): void;
    static u8(a: XmlPartManagerBase, b: string, c: boolean, d: boolean, e: boolean): {
        p1: string;
        p2: boolean;
        p3: boolean;
        p4: boolean;
    };
    static aat(a: XmlPartManagerBase, b?: string, c?: boolean, d?: boolean, e?: boolean): void;
    static u9(a: XmlPartManagerBase): void;
    static aau(a: XmlPartManagerBase): void;
    static va(a: XmlPartManagerBase, b: string, c: string): {
        p1: string;
        p2: string;
    };
    static aav(a: XmlPartManagerBase, b?: string, c?: string): void;
    static vc(a: XmlPartManagerBase, b: string, c: string, d: string, e: string, f: string, g: string, h: string, i: Nullable$1<number>, j: boolean, k: boolean, l: boolean, m: boolean, n: Nullable$1<number>, o: string, p: boolean, q: boolean): {
        p1: string;
        p2: string;
        p3: string;
        p4: string;
        p5: string;
        p6: string;
        p7: string;
        p8: Nullable$1<number>;
        p9: boolean;
        p10: boolean;
        p11: boolean;
        p12: boolean;
        p13: Nullable$1<number>;
        p14: string;
        p15: boolean;
        p16: boolean;
    };
    static aax(a: XmlPartManagerBase, b: string, c: string, d?: string, e?: string, f?: string, g?: string, h?: string, i?: Nullable$1<number>, j?: boolean, k?: boolean, l?: boolean, m?: boolean, n?: Nullable$1<number>, o?: string, p?: boolean, q?: boolean): void;
    static vb(a: XmlPartManagerBase, b: string, c: string, d: Nullable$1<number>): {
        p1: string;
        p2: string;
        p3: Nullable$1<number>;
    };
    static aaw(a: XmlPartManagerBase, b: string, c?: string, d?: Nullable$1<number>): void;
    static vd(a: XmlPartManagerBase): void;
    static aay(a: XmlPartManagerBase): void;
    static ve(a: XmlPartManagerBase, b: ST_BorderStyle): {
        p1: ST_BorderStyle;
    };
    static aaz(a: XmlPartManagerBase, b?: ST_BorderStyle): void;
    static vf(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static aa0(a: XmlPartManagerBase, b: string): void;
    static vg(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static aa1(a: XmlPartManagerBase, b: string): void;
    static vh(a: XmlPartManagerBase, b: string, c: Nullable$1<number>, d: Nullable$1<number>, e: Nullable$1<number>, f: Nullable$1<number>, g: Nullable$1<number>, h: Nullable$1<number>, i: Nullable$1<number>, j: Nullable$1<number>, k: Nullable$1<number>, l: Nullable$1<number>, m: Nullable$1<number>, n: Nullable$1<number>, o: Nullable$1<number>, p: Nullable$1<number>, q: Nullable$1<number>, r: Nullable$1<number>, s: Nullable$1<number>, t: Nullable$1<number>): {
        p1: string;
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
        p13: Nullable$1<number>;
        p14: Nullable$1<number>;
        p15: Nullable$1<number>;
        p16: Nullable$1<number>;
        p17: Nullable$1<number>;
        p18: Nullable$1<number>;
        p19: Nullable$1<number>;
    };
    static aa2(a: XmlPartManagerBase, b: string, c?: Nullable$1<number>, d?: Nullable$1<number>, e?: Nullable$1<number>, f?: Nullable$1<number>, g?: Nullable$1<number>, h?: Nullable$1<number>, i?: Nullable$1<number>, j?: Nullable$1<number>, k?: Nullable$1<number>, l?: Nullable$1<number>, m?: Nullable$1<number>, n?: Nullable$1<number>, o?: Nullable$1<number>, p?: Nullable$1<number>, q?: Nullable$1<number>, r?: Nullable$1<number>, s?: Nullable$1<number>, t?: Nullable$1<number>): void;
    static vi(a: XmlPartManagerBase, b?: string): void;
    static aa3(a: XmlPartManagerBase, b?: string): void;
    static vj(a: XmlPartManagerBase, b: Nullable$1<number>): {
        p1: Nullable$1<number>;
    };
    static aa4(a: XmlPartManagerBase, b?: Nullable$1<number>): void;
    static vk(a: XmlPartManagerBase, b: ST_DynamicFilterType, c: Nullable$1<number>, d: Nullable$1<number>): {
        p1: ST_DynamicFilterType;
        p2: Nullable$1<number>;
        p3: Nullable$1<number>;
    };
    static aa5(a: XmlPartManagerBase, b: ST_DynamicFilterType, c?: Nullable$1<number>, d?: Nullable$1<number>): void;
    static vl(a: XmlPartManagerBase, b: ST_DynamicFilterType, c: Nullable$1<number>, d: Nullable$1<Date>, e: Nullable$1<Date>): {
        p1: ST_DynamicFilterType;
        p2: Nullable$1<number>;
        p3: Nullable$1<Date>;
        p4: Nullable$1<Date>;
    };
    static aa6(a: XmlPartManagerBase, b: ST_DynamicFilterType, c?: Nullable$1<number>, d?: Nullable$1<Date>, e?: Nullable$1<Date>): void;
    static vm(a: XmlPartManagerBase, b: ST_BorderStyle): {
        p1: ST_BorderStyle;
    };
    static aa7(a: XmlPartManagerBase, b?: ST_BorderStyle): void;
    static vn(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static aa8(a: XmlPartManagerBase, b: string): void;
    static vo(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static aa9(a: XmlPartManagerBase, b: string): void;
    static vp(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static aba(a: XmlPartManagerBase, b: string, c?: string): void;
    static vq(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static abb(a: XmlPartManagerBase, b?: boolean): void;
    static vr(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static abc(a: XmlPartManagerBase, b: string): void;
    static vs(a: XmlPartManagerBase): void;
    static abd(a: XmlPartManagerBase): void;
    static vt(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static abe(a: XmlPartManagerBase, b: string): void;
    static vu(a: XmlPartManagerBase): void;
    static abf(a: XmlPartManagerBase): void;
    static vv(a: XmlPartManagerBase): void;
    static abg(a: XmlPartManagerBase): void;
    static vw(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static abh(a: XmlPartManagerBase, b: number): void;
    static vx(a: XmlPartManagerBase, b: ST_CellFormulaType, c: boolean, d: string, e: boolean, f: boolean, g: boolean, h: boolean, i: string, j: string, k: boolean, l: Nullable$1<number>, m: boolean, n: string): {
        p1: ST_CellFormulaType;
        p2: boolean;
        p3: string;
        p4: boolean;
        p5: boolean;
        p6: boolean;
        p7: boolean;
        p8: string;
        p9: string;
        p10: boolean;
        p11: Nullable$1<number>;
        p12: boolean;
        p13: string;
    };
    static abi(a: XmlPartManagerBase, b: string, c?: ST_CellFormulaType, d?: boolean, e?: string, f?: boolean, g?: boolean, h?: boolean, i?: boolean, j?: string, k?: string, l?: boolean, m?: Nullable$1<number>, n?: boolean): void;
    static vy(a: XmlPartManagerBase, b: Nullable$1<boolean>, c: Nullable$1<number>, d: Nullable$1<ST_UnsignedIntHex>, e: Nullable$1<number>, f: number): {
        p1: Nullable$1<boolean>;
        p2: Nullable$1<number>;
        p3: Nullable$1<ST_UnsignedIntHex>;
        p4: Nullable$1<number>;
        p5: number;
    };
    static abj(a: XmlPartManagerBase, b?: Nullable$1<boolean>, c?: Nullable$1<number>, d?: Nullable$1<ST_UnsignedIntHex>, e?: Nullable$1<number>, f?: number): void;
    static v0(a: XmlPartManagerBase, b: string, c: boolean, d: number): {
        p1: string;
        p2: boolean;
        p3: number;
    };
    static abl(a: XmlPartManagerBase, b: string, c?: boolean, d?: number): void;
    static vz(a: XmlPartManagerBase, b: string, c: boolean, d: string, e: number[], f: number[], g: Nullable$1<number>): {
        p1: string;
        p2: boolean;
        p3: string;
        p4: number[];
        p5: number[];
        p6: Nullable$1<number>;
    };
    static abk(a: XmlPartManagerBase, b: string, c?: boolean, d?: string, e?: number[], f?: number[], g?: Nullable$1<number>): void;
    static v1(a: XmlPartManagerBase, b: string, c: string, d: string, e: string, f: string): {
        p1: string;
        p2: string;
        p3: string;
        p4: string;
        p5: string;
    };
    static abm(a: XmlPartManagerBase, b?: string, c?: string, d?: string, e?: string, f?: string): void;
    static v2(a: XmlPartManagerBase): void;
    static abn(a: XmlPartManagerBase): void;
    static v3(a: XmlPartManagerBase, b: Nullable$1<number>): {
        p1: Nullable$1<number>;
    };
    static abo(a: XmlPartManagerBase, b?: Nullable$1<number>): void;
    static v4(a: XmlPartManagerBase, b: number, c: boolean, d: boolean): {
        p1: number;
        p2: boolean;
        p3: boolean;
    };
    static abp(a: XmlPartManagerBase, b: number, c?: boolean, d?: boolean): void;
    static v5(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static abq(a: XmlPartManagerBase, b: string): void;
    static v6(a: XmlPartManagerBase, b: boolean, c: ST_CalendarType): {
        p1: boolean;
        p2: ST_CalendarType;
    };
    static abr(a: XmlPartManagerBase, b?: boolean, c?: ST_CalendarType): void;
    static v7(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static abs(a: XmlPartManagerBase, b: string): void;
    static v8(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static abt(a: XmlPartManagerBase, b: string): void;
    static v9(a: XmlPartManagerBase): void;
    static abu(a: XmlPartManagerBase): void;
    static wa(a: XmlPartManagerBase, b: Nullable$1<number>): {
        p1: Nullable$1<number>;
    };
    static abv(a: XmlPartManagerBase, b?: Nullable$1<number>): void;
    static wd(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static aby(a: XmlPartManagerBase, b: string): void;
    static wb(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static abw(a: XmlPartManagerBase, b: string): void;
    static wc(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static abx(a: XmlPartManagerBase, b: string): void;
    static we(a: XmlPartManagerBase, b: ST_GradientType, c: number, d: number, e: number, f: number, g: number): {
        p1: ST_GradientType;
        p2: number;
        p3: number;
        p4: number;
        p5: number;
        p6: number;
    };
    static abz(a: XmlPartManagerBase, b?: ST_GradientType, c?: number, d?: number, e?: number, f?: number, g?: number): void;
    static wf(a: XmlPartManagerBase, b: boolean, c: boolean, d: boolean, e: boolean): {
        p1: boolean;
        p2: boolean;
        p3: boolean;
        p4: boolean;
    };
    static ab0(a: XmlPartManagerBase, b?: boolean, c?: boolean, d?: boolean, e?: boolean): void;
    static wg(a: XmlPartManagerBase, b: ST_BorderStyle): {
        p1: ST_BorderStyle;
    };
    static ab1(a: XmlPartManagerBase, b?: ST_BorderStyle): void;
    static wh(a: XmlPartManagerBase, b: string, c: string, d: string, e: string, f: string): {
        p1: string;
        p2: string;
        p3: string;
        p4: string;
        p5: string;
    };
    static ab2(a: XmlPartManagerBase, b?: string, c?: string, d?: string, e?: string, f?: string): void;
    static wi(a: XmlPartManagerBase): void;
    static ab3(a: XmlPartManagerBase): void;
    static wj(a: XmlPartManagerBase, b: ST_IconSetType, c: Nullable$1<number>): {
        p1: ST_IconSetType;
        p2: Nullable$1<number>;
    };
    static ab4(a: XmlPartManagerBase, b: ST_IconSetType, c?: Nullable$1<number>): void;
    private static ab5;
    static wk(a: XmlPartManagerBase, b: ST_IconSetType, c: boolean, d: boolean, e: Nullable$1<boolean>, f: boolean): {
        p1: ST_IconSetType;
        p2: boolean;
        p3: boolean;
        p4: Nullable$1<boolean>;
        p5: boolean;
    };
    static ab6(a: XmlPartManagerBase, b: string, c: Nullable$1<ST_IconSetType>, d: Nullable$1<boolean>, e: Nullable$1<boolean>, f: Nullable$1<boolean>, g: Nullable$1<boolean>): void;
    static wl(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static ab7(a: XmlPartManagerBase, b?: boolean): void;
    static wm(a: XmlPartManagerBase): void;
    static ab8(a: XmlPartManagerBase): void;
    static wn(a: XmlPartManagerBase): void;
    static ab9(a: XmlPartManagerBase): void;
    static wo(a: XmlPartManagerBase, b: ST_BorderStyle): {
        p1: ST_BorderStyle;
    };
    static aca(a: XmlPartManagerBase, b?: ST_BorderStyle): void;
    static wp(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static acb(a: XmlPartManagerBase, b: string): void;
    static wq(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static acc(a: XmlPartManagerBase, b: string): void;
    static wr(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static acd(a: XmlPartManagerBase, b: string): void;
    static ws(a: XmlPartManagerBase, b: Nullable$1<number>): {
        p1: Nullable$1<number>;
    };
    static ace(a: XmlPartManagerBase, b?: Nullable$1<number>): void;
    static wt(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static acf(a: XmlPartManagerBase, b: string): void;
    static wu(a: XmlPartManagerBase, b: number, c: string): {
        p1: number;
        p2: string;
    };
    static acg(a: XmlPartManagerBase, b: number, c: string): void;
    static wv(a: XmlPartManagerBase, b: Nullable$1<number>): {
        p1: Nullable$1<number>;
    };
    static ach(a: XmlPartManagerBase, b?: Nullable$1<number>): void;
    static ww(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static aci(a: XmlPartManagerBase, b: string): void;
    static wx(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static acj(a: XmlPartManagerBase, b: string): void;
    static wy(a: XmlPartManagerBase, b: string, c: boolean, d: boolean, e: boolean): {
        p1: string;
        p2: boolean;
        p3: boolean;
        p4: boolean;
    };
    static ack(a: XmlPartManagerBase, b?: string, c?: boolean, d?: boolean, e?: boolean): void;
    static wz(a: XmlPartManagerBase): void;
    static acl(a: XmlPartManagerBase): void;
    static w0(a: XmlPartManagerBase, b: string, c: string): {
        p1: string;
        p2: string;
    };
    static acm(a: XmlPartManagerBase, b?: string, c?: string): void;
    static w1(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static acn(a: XmlPartManagerBase, b?: boolean): void;
    static w2(a: XmlPartManagerBase, b: boolean, c: boolean, d: boolean, e: boolean): {
        p1: boolean;
        p2: boolean;
        p3: boolean;
        p4: boolean;
    };
    static aco(a: XmlPartManagerBase, b?: boolean, c?: boolean, d?: boolean, e?: boolean): void;
    static w3(a: XmlPartManagerBase, b: number, c: number, d: number, e: number, f: number, g: number): {
        p1: number;
        p2: number;
        p3: number;
        p4: number;
        p5: number;
        p6: number;
    };
    static acp(a: XmlPartManagerBase, b: number, c: number, d: number, e: number, f: number, g: number): void;
    static w4(a: XmlPartManagerBase, b: number, c: string, d: string, e: number, f: number, g: number, h: number, i: ST_PageOrder, j: ST_Orientation, k: boolean, l: boolean, m: boolean, n: ST_CellComments, o: boolean, p: ST_PrintError, q: number, r: number, s: number, t: string): {
        p1: number;
        p2: string;
        p3: string;
        p4: number;
        p5: number;
        p6: number;
        p7: number;
        p8: ST_PageOrder;
        p9: ST_Orientation;
        p10: boolean;
        p11: boolean;
        p12: boolean;
        p13: ST_CellComments;
        p14: boolean;
        p15: ST_PrintError;
        p16: number;
        p17: number;
        p18: number;
        p19: string;
    };
    static acq(a: XmlPartManagerBase, b?: number, c?: string, d?: string, e?: number, f?: number, g?: number, h?: number, i?: ST_PageOrder, j?: ST_Orientation, k?: boolean, l?: boolean, m?: boolean, n?: ST_CellComments, o?: boolean, p?: ST_PrintError, q?: number, r?: number, s?: number, t?: string): void;
    static w5(a: XmlPartManagerBase, b: boolean, c: boolean): {
        p1: boolean;
        p2: boolean;
    };
    static acr(a: XmlPartManagerBase, b?: boolean, c?: boolean): void;
    static w6(a: XmlPartManagerBase, b: number, c: number, d: string, e: ST_Pane, f: ST_PaneState): {
        p1: number;
        p2: number;
        p3: string;
        p4: ST_Pane;
        p5: ST_PaneState;
    };
    static acs(a: XmlPartManagerBase, b?: number, c?: number, d?: string, e?: ST_Pane, f?: ST_PaneState): void;
    static w7(a: XmlPartManagerBase, b: Nullable$1<ST_PatternType>): {
        p1: Nullable$1<ST_PatternType>;
    };
    static act(a: XmlPartManagerBase, b?: Nullable$1<ST_PatternType>): void;
    static w8(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static acu(a: XmlPartManagerBase, b: string): void;
    static w9(a: XmlPartManagerBase, b: number, c: string): {
        p1: number;
        p2: string;
    };
    static acv(a: XmlPartManagerBase, b: number, c: string): void;
    static xa(a: XmlPartManagerBase): void;
    static acw(a: XmlPartManagerBase): void;
    static xb(a: XmlPartManagerBase, b: boolean, c: boolean, d: boolean, e: boolean, f: boolean): {
        p1: boolean;
        p2: boolean;
        p3: boolean;
        p4: boolean;
        p5: boolean;
    };
    static acx(a: XmlPartManagerBase, b?: boolean, c?: boolean, d?: boolean, e?: boolean, f?: boolean): void;
    static xc(a: XmlPartManagerBase, b: string, c: string, d: string, e: Nullable$1<ST_UnsignedShortHex>): {
        p1: string;
        p2: string;
        p3: string;
        p4: Nullable$1<ST_UnsignedShortHex>;
    };
    static xd(a: XmlPartManagerBase, b: string, c: string, d: string, e: string, f: string, g: string, h: Nullable$1<number>): {
        p1: string;
        p2: string;
        p3: string;
        p4: string;
        p5: string;
        p6: string;
        p7: Nullable$1<number>;
    };
    static acy(a: XmlPartManagerBase, b: string, c: string, d: string, e?: Nullable$1<ST_UnsignedShortHex>): void;
    static acz(a: XmlPartManagerBase, b: string, c: string, d: string, e?: string, f?: string, g?: string, h?: Nullable$1<number>): void;
    static xe(a: XmlPartManagerBase): void;
    static ac0(a: XmlPartManagerBase): void;
    static xf(a: XmlPartManagerBase, b: Nullable$1<boolean>, c: Nullable$1<boolean>): {
        p1: Nullable$1<boolean>;
        p2: Nullable$1<boolean>;
    };
    static ac1(a: XmlPartManagerBase, b?: Nullable$1<boolean>, c?: Nullable$1<boolean>): void;
    static xg(a: XmlPartManagerBase): void;
    static ac2(a: XmlPartManagerBase): void;
    static xh(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static ac3(a: XmlPartManagerBase, b: string): void;
    static xi(a: XmlPartManagerBase, b: Nullable$1<ST_UnsignedIntHex>): {
        p1: Nullable$1<ST_UnsignedIntHex>;
    };
    static ac4(a: XmlPartManagerBase, b?: Nullable$1<ST_UnsignedIntHex>): void;
    static xj(a: XmlPartManagerBase, b: ST_BorderStyle): {
        p1: ST_BorderStyle;
    };
    static ac5(a: XmlPartManagerBase, b?: ST_BorderStyle): void;
    static xk(a: XmlPartManagerBase, b: number, c: number): {
        p1: number;
        p2: number;
    };
    static ac6(a: XmlPartManagerBase, b: number, c: number): void;
    static xm(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static ac8(a: XmlPartManagerBase, b: number): void;
    static xl(a: XmlPartManagerBase, b: Nullable$1<number>, c: List$1<string>, d: number, e: boolean, f: Nullable$1<number>, g: boolean, h: boolean, i: number, j: boolean, k: boolean, l: boolean, m: boolean, n?: boolean): {
        p1: Nullable$1<number>;
        p2: List$1<string>;
        p3: number;
        p4: boolean;
        p5: Nullable$1<number>;
        p6: boolean;
        p7: boolean;
        p8: number;
        p9: boolean;
        p10: boolean;
        p11: boolean;
        p12: boolean;
    };
    static ac7(a: XmlPartManagerBase, b?: Nullable$1<number>, c?: List$1<string>, d?: number, e?: boolean, f?: Nullable$1<number>, g?: boolean, h?: boolean, i?: number, j?: boolean, k?: boolean, l?: boolean, m?: boolean): void;
    static xn(a: XmlPartManagerBase): void;
    static ac9(a: XmlPartManagerBase): void;
    static xo(a: XmlPartManagerBase, b: ST_FontScheme): {
        p1: ST_FontScheme;
    };
    static ada(a: XmlPartManagerBase, b: ST_FontScheme): void;
    static xp(a: XmlPartManagerBase, b: ST_Pane, c: string, d: number, e: List$1<string>): {
        p1: ST_Pane;
        p2: string;
        p3: number;
        p4: List$1<string>;
    };
    static adb(a: XmlPartManagerBase, b?: ST_Pane, c?: string, d?: number, e?: List$1<string>): void;
    static xq(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static adc(a: XmlPartManagerBase, b?: boolean): void;
    static xr(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static add(a: XmlPartManagerBase, b?: boolean): void;
    static xs(a: XmlPartManagerBase): void;
    static ade(a: XmlPartManagerBase): void;
    static xt(a: XmlPartManagerBase, b: number, c: boolean): {
        p1: number;
        p2: boolean;
    };
    static adf(a: XmlPartManagerBase, b: number, c?: boolean): void;
    static xu(a: XmlPartManagerBase): void;
    static adg(a: XmlPartManagerBase): void;
    static xv(a: XmlPartManagerBase, b: string, c: number, d: ST_SheetState, e: string): {
        p1: string;
        p2: number;
        p3: ST_SheetState;
        p4: string;
    };
    static adh(a: XmlPartManagerBase, b: string, c: number, d: ST_SheetState, e: string): void;
    static xw(a: XmlPartManagerBase, b: number, c: number, d: Nullable$1<number>, e: boolean, f: boolean, g: boolean, h: boolean, i: number, j: number): {
        p1: number;
        p2: number;
        p3: Nullable$1<number>;
        p4: boolean;
        p5: boolean;
        p6: boolean;
        p7: boolean;
        p8: number;
        p9: number;
    };
    static adi(a: XmlPartManagerBase, b: number, c?: number, d?: Nullable$1<number>, e?: boolean, f?: boolean, g?: boolean, h?: boolean, i?: number, j?: number): void;
    static xx(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static adj(a: XmlPartManagerBase, b: string): void;
    static xy(a: XmlPartManagerBase): void;
    static adk(a: XmlPartManagerBase): void;
    static xz(a: XmlPartManagerBase, b: boolean, c: boolean, d: string, e: boolean, f: boolean, g: boolean, h: string, i: boolean, j: boolean): {
        p1: boolean;
        p2: boolean;
        p3: string;
        p4: boolean;
        p5: boolean;
        p6: boolean;
        p7: string;
        p8: boolean;
        p9: boolean;
    };
    static adl(a: XmlPartManagerBase, b?: boolean, c?: boolean, d?: string, e?: boolean, f?: boolean, g?: boolean, h?: string, i?: boolean, j?: boolean): void;
    static x0(a: XmlPartManagerBase, b: Nullable$1<ST_UnsignedShortHex>, c: boolean, d: boolean, e: boolean, f: boolean, g: boolean, h: boolean, i: boolean, j: boolean, k: boolean, l: boolean, m: boolean, n: boolean, o: boolean, p: boolean, q: boolean, r: boolean): {
        p1: Nullable$1<ST_UnsignedShortHex>;
        p2: boolean;
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
    static adm(a: XmlPartManagerBase, b?: Nullable$1<ST_UnsignedShortHex>, c?: boolean, d?: boolean, e?: boolean, f?: boolean, g?: boolean, h?: boolean, i?: boolean, j?: boolean, k?: boolean, l?: boolean, m?: boolean, n?: boolean, o?: boolean, p?: boolean, q?: boolean, r?: boolean): void;
    static b3(a: XmlPartManagerBase): boolean;
    static x1(a: XmlPartManagerBase, b: string, c: string, d: string, e: Nullable$1<number>, f: boolean, g: boolean, h: boolean, i: boolean, j: boolean, k: boolean, l: boolean, m: boolean, n: boolean, o: boolean, p: boolean, q: boolean, r: boolean, s: boolean, t: boolean, u: boolean): {
        p1: string;
        p2: string;
        p3: string;
        p4: Nullable$1<number>;
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
        p18: boolean;
        p19: boolean;
        p20: boolean;
    };
    static adn(a: XmlPartManagerBase, b?: string, c?: string, d?: string, e?: Nullable$1<number>, f?: boolean, g?: boolean, h?: boolean, i?: boolean, j?: boolean, k?: boolean, l?: boolean, m?: boolean, n?: boolean, o?: boolean, p?: boolean, q?: boolean, r?: boolean, s?: boolean, t?: boolean, u?: boolean): void;
    static x2(a: XmlPartManagerBase): void;
    static ado(a: XmlPartManagerBase): void;
    static x3(a: XmlPartManagerBase, b: number, c: boolean, d: boolean, e: boolean, f: boolean, g: boolean, h: boolean, i: boolean, j: boolean, k: boolean, l: boolean, m: boolean, n: ST_SheetViewType, o: string, p: number, q: number, r: number, s: number, t: number): {
        p1: number;
        p2: boolean;
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
        p13: ST_SheetViewType;
        p14: string;
        p15: number;
        p16: number;
        p17: number;
        p18: number;
        p19: number;
    };
    static adp(a: XmlPartManagerBase, b: number, c?: boolean, d?: boolean, e?: boolean, f?: boolean, g?: boolean, h?: boolean, i?: boolean, j?: boolean, k?: boolean, l?: boolean, m?: boolean, n?: ST_SheetViewType, o?: string, p?: number, q?: number, r?: number, s?: number, t?: number): void;
    static x4(a: XmlPartManagerBase): void;
    static adq(a: XmlPartManagerBase): void;
    static x5(a: XmlPartManagerBase): void;
    static adr(a: XmlPartManagerBase): void;
    static x6(a: XmlPartManagerBase, b: string, c: boolean, d: ST_SortBy, e: string, f: Nullable$1<number>, g: ST_IconSetType, h: Nullable$1<number>): {
        p1: string;
        p2: boolean;
        p3: ST_SortBy;
        p4: string;
        p5: Nullable$1<number>;
        p6: ST_IconSetType;
        p7: Nullable$1<number>;
    };
    static ads(a: XmlPartManagerBase, b: string, c?: boolean, d?: ST_SortBy, e?: string, f?: Nullable$1<number>, g?: ST_IconSetType, h?: Nullable$1<number>): void;
    private static adt;
    static x7(a: XmlPartManagerBase, b: string, c: boolean, d: boolean, e: ST_SortMethod): {
        p1: string;
        p2: boolean;
        p3: boolean;
        p4: ST_SortMethod;
    };
    static adu(a: XmlPartManagerBase, b: string, c?: boolean, d?: boolean, e?: ST_SortMethod): void;
    static x8(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<number>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<number>;
    };
    static adv(a: XmlPartManagerBase, b?: Nullable$1<number>, c?: Nullable$1<number>): void;
    static x9(a: XmlPartManagerBase, b: ST_BorderStyle): {
        p1: ST_BorderStyle;
    };
    static adw(a: XmlPartManagerBase, b?: ST_BorderStyle): void;
    static ya(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static adx(a: XmlPartManagerBase, b: number): void;
    static yb(a: XmlPartManagerBase, b: boolean): {
        p1: boolean;
    };
    static ady(a: XmlPartManagerBase, b?: boolean): void;
    static yc(a: XmlPartManagerBase): void;
    static adz(a: XmlPartManagerBase): void;
    static yd(a: XmlPartManagerBase, b: number): {
        p1: number;
    };
    static ad0(a: XmlPartManagerBase, b: number): void;
    static ye(a: XmlPartManagerBase, b: Nullable$1<boolean>, c: Nullable$1<number>, d: Nullable$1<ST_UnsignedIntHex>, e: Nullable$1<number>, f: number): {
        p1: Nullable$1<boolean>;
        p2: Nullable$1<number>;
        p3: Nullable$1<ST_UnsignedIntHex>;
        p4: Nullable$1<number>;
        p5: number;
    };
    static ad1(a: XmlPartManagerBase, b: Nullable$1<boolean>, c: Nullable$1<number>, d: Nullable$1<ST_UnsignedIntHex>, e: Nullable$1<number>, f: number): void;
    static yf(a: XmlPartManagerBase, b: number, c: string, d: string, e: ST_TotalsRowFunction, f: string, g: Nullable$1<number>, h: Nullable$1<number>, i: Nullable$1<number>, j: Nullable$1<number>, k: string, l: string, m: string): {
        p1: number;
        p2: string;
        p3: string;
        p4: ST_TotalsRowFunction;
        p5: string;
        p6: Nullable$1<number>;
        p7: Nullable$1<number>;
        p8: Nullable$1<number>;
        p9: Nullable$1<number>;
        p10: string;
        p11: string;
        p12: string;
    };
    static ad2(a: XmlPartManagerBase, b: number, c?: string, d?: string, e?: ST_TotalsRowFunction, f?: string, g?: Nullable$1<number>, h?: Nullable$1<number>, i?: Nullable$1<number>, j?: Nullable$1<number>, k?: string, l?: string, m?: string): void;
    static yg(a: XmlPartManagerBase, b: Nullable$1<number>): {
        p1: Nullable$1<number>;
    };
    static ad3(a: XmlPartManagerBase, b?: Nullable$1<number>): void;
    static yh(a: XmlPartManagerBase, b: number, c: string, d: string, e: string, f: string, g: ST_TableType, h: number, i: boolean, j: boolean, k: number, l: boolean, m: boolean, n: Nullable$1<number>, o: Nullable$1<number>, p: Nullable$1<number>, q: Nullable$1<number>, r: Nullable$1<number>, s: Nullable$1<number>, t: string, u: string, v: string, w: Nullable$1<number>): {
        p1: number;
        p2: string;
        p3: string;
        p4: string;
        p5: string;
        p6: ST_TableType;
        p7: number;
        p8: boolean;
        p9: boolean;
        p10: number;
        p11: boolean;
        p12: boolean;
        p13: Nullable$1<number>;
        p14: Nullable$1<number>;
        p15: Nullable$1<number>;
        p16: Nullable$1<number>;
        p17: Nullable$1<number>;
        p18: Nullable$1<number>;
        p19: string;
        p20: string;
        p21: string;
        p22: Nullable$1<number>;
    };
    static ad4(a: XmlPartManagerBase, b: number, c: string, d: string, e: string, f: string, g?: ST_TableType, h?: number, i?: boolean, j?: boolean, k?: number, l?: boolean, m?: boolean, n?: Nullable$1<number>, o?: Nullable$1<number>, p?: Nullable$1<number>, q?: Nullable$1<number>, r?: Nullable$1<number>, s?: Nullable$1<number>, t?: string, u?: string, v?: string, w?: Nullable$1<number>): void;
    static yi(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static ad5(a: XmlPartManagerBase, b?: string): void;
    static yj(a: XmlPartManagerBase, b: Nullable$1<number>): {
        p1: Nullable$1<number>;
    };
    static ad6(a: XmlPartManagerBase, b?: Nullable$1<number>): void;
    static yk(a: XmlPartManagerBase, b: string, c: boolean, d: boolean, e: Nullable$1<number>): {
        p1: string;
        p2: boolean;
        p3: boolean;
        p4: Nullable$1<number>;
    };
    static ad7(a: XmlPartManagerBase, b: string, c?: boolean, d?: boolean, e?: Nullable$1<number>): void;
    static yl(a: XmlPartManagerBase, b: ST_TableStyleType, c: number, d: Nullable$1<number>): {
        p1: ST_TableStyleType;
        p2: number;
        p3: Nullable$1<number>;
    };
    static ad8(a: XmlPartManagerBase, b: ST_TableStyleType, c?: number, d?: Nullable$1<number>): void;
    static ym(a: XmlPartManagerBase, b: string, c: Nullable$1<boolean>, d: Nullable$1<boolean>, e: Nullable$1<boolean>, f: Nullable$1<boolean>): {
        p1: string;
        p2: Nullable$1<boolean>;
        p3: Nullable$1<boolean>;
        p4: Nullable$1<boolean>;
        p5: Nullable$1<boolean>;
    };
    static ad9(a: XmlPartManagerBase, b: string, c: Nullable$1<boolean>, d: Nullable$1<boolean>, e: Nullable$1<boolean>, f: Nullable$1<boolean>): void;
    static yn(a: XmlPartManagerBase, b: Nullable$1<number>, c: string, d: string): {
        p1: Nullable$1<number>;
        p2: string;
        p3: string;
    };
    static aea(a: XmlPartManagerBase, b?: Nullable$1<number>, c?: string, d?: string): void;
    static yo(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static aeb(a: XmlPartManagerBase, b: string): void;
    static yp(a: XmlPartManagerBase): void;
    static aec(a: XmlPartManagerBase): void;
    static yr(a: XmlPartManagerBase, b: ST_BorderStyle): {
        p1: ST_BorderStyle;
    };
    static aee(a: XmlPartManagerBase, b?: ST_BorderStyle): void;
    static yq(a: XmlPartManagerBase, b: number, c: boolean, d: boolean, e: Nullable$1<number>): {
        p1: number;
        p2: boolean;
        p3: boolean;
        p4: Nullable$1<number>;
    };
    static aed(a: XmlPartManagerBase, b: number, c?: boolean, d?: boolean, e?: Nullable$1<number>): void;
    static ys(a: XmlPartManagerBase, b: string, c: boolean): {
        p1: string;
        p2: boolean;
    };
    static aef(a: XmlPartManagerBase, b: string, c?: boolean): void;
    static yt(a: XmlPartManagerBase, b: ST_UnderlineValues): {
        p1: ST_UnderlineValues;
    };
    static aeg(a: XmlPartManagerBase, b?: ST_UnderlineValues): void;
    static yu(a: XmlPartManagerBase, b: string): {
        p1: string;
    };
    static aeh(a: XmlPartManagerBase, b: string): void;
    static aei(a: XmlPartManagerBase, b: string, c: boolean): void;
    static yv(a: XmlPartManagerBase, b: ST_VerticalAlignRun): {
        p1: ST_VerticalAlignRun;
    };
    static aej(a: XmlPartManagerBase, b: ST_VerticalAlignRun): void;
    static yw(a: XmlPartManagerBase, b: ST_BorderStyle): {
        p1: ST_BorderStyle;
    };
    static aek(a: XmlPartManagerBase, b?: ST_BorderStyle): void;
    static yx(a: XmlPartManagerBase, b: ST_ConformanceClass): {
        p1: ST_ConformanceClass;
    };
    static ael(a: XmlPartManagerBase, b?: ST_ConformanceClass): void;
    static yy(a: XmlPartManagerBase, b: boolean, c: ST_Objects, d: boolean, e: boolean, f: boolean, g: boolean, h: boolean, i: boolean, j: ST_UpdateLinks, k: string, l: boolean, m: boolean, n: boolean, o: boolean, p: boolean, q: boolean, r: boolean, s: Nullable$1<number>, t: boolean): {
        p1: boolean;
        p2: ST_Objects;
        p3: boolean;
        p4: boolean;
        p5: boolean;
        p6: boolean;
        p7: boolean;
        p8: boolean;
        p9: ST_UpdateLinks;
        p10: string;
        p11: boolean;
        p12: boolean;
        p13: boolean;
        p14: boolean;
        p15: boolean;
        p16: boolean;
        p17: boolean;
        p18: Nullable$1<number>;
        p19: boolean;
    };
    static aem(a: XmlPartManagerBase, b?: boolean, c?: ST_Objects, d?: boolean, e?: boolean, f?: boolean, g?: boolean, h?: boolean, i?: boolean, j?: ST_UpdateLinks, k?: string, l?: boolean, m?: boolean, n?: boolean, o?: boolean, p?: boolean, q?: boolean, r?: boolean, s?: Nullable$1<number>, t?: boolean): void;
    static yz(a: XmlPartManagerBase, b: boolean, c: boolean, d: boolean, e: Nullable$1<number>, f: Nullable$1<number>): {
        p1: boolean;
        p2: boolean;
        p3: boolean;
        p4: Nullable$1<number>;
        p5: Nullable$1<number>;
    };
    static aen(a: XmlPartManagerBase, b?: boolean, c?: boolean, d?: boolean, e?: Nullable$1<number>, f?: Nullable$1<number>): void;
    static y0(a: XmlPartManagerBase, b: boolean, c: boolean, d: boolean, e: string, f: string, g: string, h: Nullable$1<number>, i: string, j: string, k: string, l: Nullable$1<number>): {
        p1: boolean;
        p2: boolean;
        p3: boolean;
        p4: string;
        p5: string;
        p6: string;
        p7: Nullable$1<number>;
        p8: string;
        p9: string;
        p10: string;
        p11: Nullable$1<number>;
    };
    static aeo(a: XmlPartManagerBase, b?: boolean, c?: boolean, d?: boolean, e?: string, f?: string, g?: string, h?: Nullable$1<number>, i?: string, j?: string, k?: string, l?: Nullable$1<number>): void;
    static y1(a: XmlPartManagerBase, b: ST_Visibility, c: boolean, d: boolean, e: boolean, f: boolean, g: Nullable$1<number>, h: Nullable$1<number>, i: Nullable$1<number>, j: Nullable$1<number>, k: number, l: number, m: number, n: boolean): {
        p1: ST_Visibility;
        p2: boolean;
        p3: boolean;
        p4: boolean;
        p5: boolean;
        p6: Nullable$1<number>;
        p7: Nullable$1<number>;
        p8: Nullable$1<number>;
        p9: Nullable$1<number>;
        p10: number;
        p11: number;
        p12: number;
        p13: boolean;
    };
    static aep(a: XmlPartManagerBase, b?: ST_Visibility, c?: boolean, d?: boolean, e?: boolean, f?: boolean, g?: Nullable$1<number>, h?: Nullable$1<number>, i?: Nullable$1<number>, j?: Nullable$1<number>, k?: number, l?: number, m?: number, n?: boolean): void;
    static y2(a: XmlPartManagerBase): void;
    static aeq(a: XmlPartManagerBase): void;
    static y3(a: XmlPartManagerBase, b: Nullable$1<number>, c: Nullable$1<number>, d: Nullable$1<number>, e: Nullable$1<number>, f: Nullable$1<number>, g: boolean, h: boolean, i: Nullable$1<boolean>, j: Nullable$1<boolean>, k: Nullable$1<boolean>, l: Nullable$1<boolean>, m: Nullable$1<boolean>, n: Nullable$1<boolean>): {
        p1: Nullable$1<number>;
        p2: Nullable$1<number>;
        p3: Nullable$1<number>;
        p4: Nullable$1<number>;
        p5: Nullable$1<number>;
        p6: boolean;
        p7: boolean;
        p8: Nullable$1<boolean>;
        p9: Nullable$1<boolean>;
        p10: Nullable$1<boolean>;
        p11: Nullable$1<boolean>;
        p12: Nullable$1<boolean>;
        p13: Nullable$1<boolean>;
    };
    static aer(a: XmlPartManagerBase, b?: Nullable$1<number>, c?: Nullable$1<number>, d?: Nullable$1<number>, e?: Nullable$1<number>, f?: Nullable$1<number>, g?: boolean, h?: boolean, i?: Nullable$1<boolean>, j?: Nullable$1<boolean>, k?: Nullable$1<boolean>, l?: Nullable$1<boolean>, m?: Nullable$1<boolean>, n?: Nullable$1<boolean>): void;
    static y4(a: XmlPartManagerBase, b: number, c: string, d: string, e: boolean): {
        p1: number;
        p2: string;
        p3: string;
        p4: boolean;
    };
    static aes(a: XmlPartManagerBase, b: number, c: string, d: string, e?: boolean): void;
}
