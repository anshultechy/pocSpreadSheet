import { ValueType, Type, Nullable$1, Base, IEnumerator$1, IEnumerable$1, IDisposable, IEqualityComparer$1, FormatException, Stream, IFormatProvider, BaseError, SeekOrigin, IEquatable$1 } from "../../igniteui-angular-core/ES5/type";
import { Encoding } from "../../igniteui-angular-core/ES5/Encoding";
import { Dictionary$2 } from "../../igniteui-angular-core/ES5/Dictionary$2";
import { StringComparison, CompareOptions } from "../../igniteui-angular-core/ES5/string";
import { Guid } from "../../igniteui-angular-core/ES5/Guid";
import { CultureInfo } from "../../igniteui-angular-core/ES5/culture";
import { Color } from "../../igniteui-angular-core/ES5/Color";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { IComparer$1 } from "../../igniteui-angular-core/ES5/IComparer$1";
import { BinaryReader } from "../../igniteui-angular-core/ES5/BinaryReader";
import { BinaryWriter } from "../../igniteui-angular-core/ES5/BinaryWriter";
import { InvalidOperationException } from "../../igniteui-angular-core/ES5/InvalidOperationException";
import { StringComparer } from "../../igniteui-angular-core/ES5/StringComparer";
import { Uri } from "../../igniteui-angular-core/ES5/Uri";
/**
 * @hidden
 */
export declare const enum RelationshipTargetMode {
    Internal = 0,
    External = 1
}
/**
 * @hidden
 */
export declare let RelationshipTargetMode_$type: Type;
/**
 * @hidden
 */
export declare const enum VariantType {
    Empty = 0,
    Null = 1,
    I2 = 2,
    I4 = 3,
    R4 = 4,
    R8 = 5,
    CY = 6,
    Date = 7,
    Bstr = 8,
    Dispatch = 9,
    Error = 10,
    Bool = 11,
    Variant = 12,
    Unknown = 13,
    Decimal = 14,
    I1 = 16,
    UI1 = 17,
    UI2 = 18,
    UI4 = 19,
    I8 = 20,
    UI8 = 21,
    INT = 22,
    UINT = 23,
    VOID = 24,
    Hresult = 25,
    PTR = 26,
    SafeArray = 27,
    CARRAY = 28,
    UserDefined = 29,
    LPSTR = 30,
    LPWSTR = 31,
    FileTime = 64,
    BLOB = 65,
    Stream = 66,
    Storage = 67,
    StreamedObject = 68,
    BLOBObject = 69,
    CF = 70,
    CLSID = 71,
    Vector = 4096,
    Array = 8192,
    ByRef = 16384,
    Reserved = 32768
}
/**
 * @hidden
 */
export declare let VariantType_$type: Type;
/**
 * @hidden
 */
export declare const enum UserDefinedPropertyType {
    Dictionary = 0,
    SelfDefStructure = 16777218,
    StructureInstance = 16777220,
    Locale = -2147483648
}
/**
 * @hidden
 */
export declare let UserDefinedPropertyType_$type: Type;
/**
 * @hidden
 */
export declare const enum SummaryPropertyType {
    Title = 2,
    Subject = 3,
    Author = 4,
    Keywords = 5,
    Comments = 6,
    Template = 7,
    LastSavedBy = 8,
    RevisionNumber = 9,
    TotalEditingTime = 10,
    LastPrinted = 11,
    CreatedDateTime = 12,
    LastSavedDateTime = 13,
    NumberOfPages = 14,
    NumberOfWords = 15,
    NumberOfCharacters = 16,
    Thumbnail = 17,
    NameOfCreatingApplication = 18,
    Security = 19
}
/**
 * @hidden
 */
export declare let SummaryPropertyType_$type: Type;
/**
 * @hidden
 */
export declare const enum DocumentSummaryPropertyType {
    Category = 2,
    PresentationTarget = 3,
    Bytes = 4,
    Lines = 5,
    Paragraphs = 6,
    Slides = 7,
    Notes = 8,
    HiddenSlides = 9,
    MMClips = 10,
    ScaleCrop = 11,
    HeadingPairs = 12,
    TitlesOfParts = 13,
    Manager = 14,
    Company = 15,
    LinksUpToData = 16,
    Status = 27
}
/**
 * @hidden
 */
export declare let DocumentSummaryPropertyType_$type: Type;
/**
 * @hidden
 */
export declare const enum StructuredStorageStream_StreamType {
    Normal = 0,
    SAT = 1,
    MasterSAT = 2
}
/**
 * @hidden
 */
export declare let StructuredStorageStream_StreamType_$type: Type;
/**
 * @hidden
 */
export declare const enum DirectoryStream_PropertyType {
    Empty = 0,
    Ole2Storage = 1,
    Ole2Stream = 2,
    RootEntry = 5
}
/**
 * @hidden
 */
export declare let DirectoryStream_PropertyType_$type: Type;
/**
 * @hidden
 */
export declare const enum DirectoryStream_NodeColor {
    Red = 0,
    Black = 1
}
/**
 * @hidden
 */
export declare let DirectoryStream_NodeColor_$type: Type;
/**
 * @hidden
 */
export declare const enum OleDataSpacesEncryptionMode {
    Standard = 0,
    Agile = 1,
    Latest = 1
}
/**
 * @hidden
 */
export declare let OleDataSpacesEncryptionMode_$type: Type;
/**
 * @hidden
 */
export declare const enum Utilities_ColorIndex {
    PaletteIndex = 1,
    PaletteRGB = 2,
    SystemRGB = 4,
    SchemeIndex = 8,
    SysIndex = 16
}
/**
 * @hidden
 */
export declare let Utilities_ColorIndex_$type: Type;
/**
 * @hidden
 */
export declare const enum EscherSysIndex {
    SystemColorButtonFace = 0,
    SystemColorWindowText = 1,
    SystemColorMenu = 2,
    SystemColorHighlight = 3,
    SystemColorHighlightText = 4,
    SystemColorCaptionText = 5,
    SystemColorActiveCaption = 6,
    SystemColorButtonHighlight = 7,
    SystemColorButtonShadow = 8,
    SystemColorButtonText = 9,
    SystemColorGrayText = 10,
    SystemColorInactiveCaption = 11,
    SystemColorInactiveCaptionText = 12,
    SystemColorInfoBackground = 13,
    SystemColorInfoText = 14,
    SystemColorMenuText = 15,
    SystemColorScrollbar = 16,
    SystemColorWindow = 17,
    SystemColorWindowFrame = 18,
    SystemColor3DLight = 19,
    SystemColorMax = 20,
    FillColor = 240,
    LineOrFillColor = 241,
    LineColor = 242,
    ShadowColor = 243,
    This = 244,
    FillBackColor = 245,
    LineBackColor = 246,
    FillThenLine = 247,
    IndexMask = 255,
    ProcessMask = 16776960,
    ModificationMask = 3840,
    ModFlagMask = 61440,
    Darken = 256,
    Lighten = 512,
    Add = 768,
    Subtract = 1024,
    ReverseSubtract = 1280,
    BlackWhite = 1536,
    Invert = 8192,
    Invert128 = 16384,
    Gray = 32768,
    BParamMask = 16711680,
    BParamShift = 16
}
/**
 * @hidden
 */
export declare let EscherSysIndex_$type: Type;
/**
 * @hidden
 */
export declare const enum WorkItemContinuationType {
    Default = 0,
    Synchronous = 1,
    Asynchronous = 2
}
/**
 * @hidden
 */
export declare let WorkItemContinuationType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_UniversalMeasure_UnitType {
    centimeters = 0,
    millimeters = 1,
    inches = 2,
    points = 3,
    pc = 4,
    pi = 5
}
/**
 * @hidden
 */
export declare let ST_UniversalMeasure_UnitType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_ShapeType {
    line = 0,
    lineInv = 1,
    triangle = 2,
    rtTriangle = 3,
    rect = 4,
    diamond = 5,
    parallelogram = 6,
    trapezoid = 7,
    nonIsoscelesTrapezoid = 8,
    pentagon = 9,
    hexagon = 10,
    heptagon = 11,
    octagon = 12,
    decagon = 13,
    dodecagon = 14,
    star4 = 15,
    star5 = 16,
    star6 = 17,
    star7 = 18,
    star8 = 19,
    star10 = 20,
    star12 = 21,
    star16 = 22,
    star24 = 23,
    star32 = 24,
    roundRect = 25,
    round1Rect = 26,
    round2SameRect = 27,
    round2DiagRect = 28,
    snipRoundRect = 29,
    snip1Rect = 30,
    snip2SameRect = 31,
    snip2DiagRect = 32,
    plaque = 33,
    ellipse = 34,
    teardrop = 35,
    homePlate = 36,
    chevron = 37,
    pieWedge = 38,
    pie = 39,
    blockArc = 40,
    donut = 41,
    noSmoking = 42,
    rightArrow = 43,
    leftArrow = 44,
    upArrow = 45,
    downArrow = 46,
    stripedRightArrow = 47,
    notchedRightArrow = 48,
    bentUpArrow = 49,
    leftRightArrow = 50,
    upDownArrow = 51,
    leftUpArrow = 52,
    leftRightUpArrow = 53,
    quadArrow = 54,
    leftArrowCallout = 55,
    rightArrowCallout = 56,
    upArrowCallout = 57,
    downArrowCallout = 58,
    leftRightArrowCallout = 59,
    upDownArrowCallout = 60,
    quadArrowCallout = 61,
    bentArrow = 62,
    uturnArrow = 63,
    circularArrow = 64,
    leftCircularArrow = 65,
    leftRightCircularArrow = 66,
    curvedRightArrow = 67,
    curvedLeftArrow = 68,
    curvedUpArrow = 69,
    curvedDownArrow = 70,
    swooshArrow = 71,
    cube = 72,
    can = 73,
    lightningBolt = 74,
    heart = 75,
    sun = 76,
    moon = 77,
    smileyFace = 78,
    irregularSeal1 = 79,
    irregularSeal2 = 80,
    foldedCorner = 81,
    bevel = 82,
    frame = 83,
    halfFrame = 84,
    corner = 85,
    diagStripe = 86,
    chord = 87,
    arc = 88,
    leftBracket = 89,
    rightBracket = 90,
    leftBrace = 91,
    rightBrace = 92,
    bracketPair = 93,
    bracePair = 94,
    straightConnector1 = 95,
    bentConnector2 = 96,
    bentConnector3 = 97,
    bentConnector4 = 98,
    bentConnector5 = 99,
    curvedConnector2 = 100,
    curvedConnector3 = 101,
    curvedConnector4 = 102,
    curvedConnector5 = 103,
    callout1 = 104,
    callout2 = 105,
    callout3 = 106,
    accentCallout1 = 107,
    accentCallout2 = 108,
    accentCallout3 = 109,
    borderCallout1 = 110,
    borderCallout2 = 111,
    borderCallout3 = 112,
    accentBorderCallout1 = 113,
    accentBorderCallout2 = 114,
    accentBorderCallout3 = 115,
    wedgeRectCallout = 116,
    wedgeRoundRectCallout = 117,
    wedgeEllipseCallout = 118,
    cloudCallout = 119,
    cloud = 120,
    ribbon = 121,
    ribbon2 = 122,
    ellipseRibbon = 123,
    ellipseRibbon2 = 124,
    leftRightRibbon = 125,
    verticalScroll = 126,
    horizontalScroll = 127,
    wave = 128,
    doubleWave = 129,
    plus = 130,
    flowChartProcess = 131,
    flowChartDecision = 132,
    flowChartInputOutput = 133,
    flowChartPredefinedProcess = 134,
    flowChartInternalStorage = 135,
    flowChartDocument = 136,
    flowChartMultidocument = 137,
    flowChartTerminator = 138,
    flowChartPreparation = 139,
    flowChartManualInput = 140,
    flowChartManualOperation = 141,
    flowChartConnector = 142,
    flowChartPunchedCard = 143,
    flowChartPunchedTape = 144,
    flowChartSummingJunction = 145,
    flowChartOr = 146,
    flowChartCollate = 147,
    flowChartSort = 148,
    flowChartExtract = 149,
    flowChartMerge = 150,
    flowChartOfflineStorage = 151,
    flowChartOnlineStorage = 152,
    flowChartMagneticTape = 153,
    flowChartMagneticDisk = 154,
    flowChartMagneticDrum = 155,
    flowChartDisplay = 156,
    flowChartDelay = 157,
    flowChartAlternateProcess = 158,
    flowChartOffpageConnector = 159,
    actionButtonBlank = 160,
    actionButtonHome = 161,
    actionButtonHelp = 162,
    actionButtonInformation = 163,
    actionButtonForwardNext = 164,
    actionButtonBackPrevious = 165,
    actionButtonEnd = 166,
    actionButtonBeginning = 167,
    actionButtonReturn = 168,
    actionButtonDocument = 169,
    actionButtonSound = 170,
    actionButtonMovie = 171,
    gear6 = 172,
    gear9 = 173,
    funnel = 174,
    mathPlus = 175,
    mathMinus = 176,
    mathMultiply = 177,
    mathDivide = 178,
    mathEqual = 179,
    mathNotEqual = 180,
    cornerTabs = 181,
    squareTabs = 182,
    plaqueTabs = 183,
    chartX = 184,
    chartStar = 185,
    chartPlus = 186
}
/**
 * @hidden
 */
export declare let ST_ShapeType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_TotalsRowFunction {
    none = 0,
    average = 1,
    count = 2,
    countNums = 3,
    max = 4,
    min = 5,
    sum = 6,
    stdDev = 7,
    $var = 8,
    custom = 9
}
/**
 * @hidden
 */
export declare let ST_TotalsRowFunction_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_TableStyleType {
    wholeTable = 0,
    headerRow = 1,
    totalRow = 2,
    firstColumn = 3,
    lastColumn = 4,
    firstRowStripe = 5,
    secondRowStripe = 6,
    firstColumnStripe = 7,
    secondColumnStripe = 8,
    firstHeaderCell = 9,
    lastHeaderCell = 10,
    firstTotalCell = 11,
    lastTotalCell = 12,
    firstSubtotalColumn = 13,
    secondSubtotalColumn = 14,
    thirdSubtotalColumn = 15,
    firstSubtotalRow = 16,
    secondSubtotalRow = 17,
    thirdSubtotalRow = 18,
    blankRow = 19,
    firstColumnSubheading = 20,
    secondColumnSubheading = 21,
    thirdColumnSubheading = 22,
    firstRowSubheading = 23,
    secondRowSubheading = 24,
    thirdRowSubheading = 25,
    pageFieldLabels = 26,
    pageFieldValues = 27
}
/**
 * @hidden
 */
export declare let ST_TableStyleType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_SortBy {
    value = 0,
    cellColor = 1,
    fontColor = 2,
    icon = 3
}
/**
 * @hidden
 */
export declare let ST_SortBy_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_FilterOperator {
    lessThan = 1,
    equal = 2,
    lessThanOrEqual = 3,
    greaterThan = 4,
    notEqual = 5,
    greaterThanOrEqual = 6
}
/**
 * @hidden
 */
export declare let ST_FilterOperator_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_IconSetType {
    _3Arrows = 0,
    _3ArrowsGray = 1,
    _3Flags = 2,
    _3TrafficLights1 = 3,
    _3TrafficLights2 = 4,
    _3Signs = 5,
    _3Symbols = 6,
    _3Symbols2 = 7,
    _4Arrows = 8,
    _4ArrowsGray = 9,
    _4RedToBlack = 10,
    _4Rating = 11,
    _4TrafficLights = 12,
    _5Arrows = 13,
    _5ArrowsGray = 14,
    _5Rating = 15,
    _5Quarters = 16,
    _3Stars = 17,
    _3Triangles = 18,
    _5Boxes = 19,
    _NoIcons = 20
}
/**
 * @hidden
 */
export declare let ST_IconSetType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_DynamicFilterType {
    _null = 0,
    aboveAverage = 1,
    belowAverage = 2,
    tomorrow = 8,
    today = 9,
    yesterday = 10,
    nextWeek = 11,
    thisWeek = 12,
    lastWeek = 13,
    nextMonth = 14,
    thisMonth = 15,
    lastMonth = 16,
    nextQuarter = 17,
    thisQuarter = 18,
    lastQuarter = 19,
    nextYear = 20,
    thisYear = 21,
    lastYear = 22,
    yearToDate = 23,
    Q1 = 24,
    Q2 = 25,
    Q3 = 26,
    Q4 = 27,
    M1 = 28,
    M2 = 29,
    M3 = 30,
    M4 = 31,
    M5 = 32,
    M6 = 33,
    M7 = 34,
    M8 = 35,
    M9 = 36,
    M10 = 37,
    M11 = 38,
    M12 = 39
}
/**
 * @hidden
 */
export declare let ST_DynamicFilterType_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_DateTimeGrouping {
    year = 0,
    month = 1,
    day = 2,
    hour = 3,
    minute = 4,
    second = 5
}
/**
 * @hidden
 */
export declare let ST_DateTimeGrouping_$type: Type;
/**
 * @hidden
 */
export declare const enum ST_CellType {
    b = 0,
    d = 1,
    n = 2,
    e = 3,
    s = 4,
    str = 5,
    inlineStr = 6
}
/**
 * @hidden
 */
export declare let ST_CellType_$type: Type;
/**
 * @hidden
 */
export declare const enum FileMode {
    CreateNew = 1,
    Create = 2,
    Open = 3,
    OpenOrCreate = 4,
    Truncate = 5,
    Append = 6
}
/**
 * @hidden
 */
export declare let FileMode_$type: Type;
/**
 * @hidden
 */
export declare const enum FileAccess {
    Read = 1,
    Write = 2,
    ReadWrite = 3
}
/**
 * @hidden
 */
export declare let FileAccess_$type: Type;
/**
 * @hidden
 */
export declare abstract class CodePageEncoding extends Encoding {
    static $t: Type;
    abstract readonly _codePage: number;
    static _ab(a: number, b: number[]): Nullable$1<string>[];
    static _getCodePage(a: Encoding): number;
}
/**
 * @hidden
 */
export declare class CodePageDoubleByte extends CodePageEncoding {
    static $t: Type;
    private _ag;
    private _ae;
    private _af;
    constructor(a: number, b: Dictionary$2<number, Nullable$1<string>[]>);
    protected get__codePage(): number;
    readonly _codePage: number;
    getChars(a: number[], b: number, c: number, d: string[], e: number): number;
    getMaxByteCount(a: number): number;
    getMaxCharCount(a: number): number;
    getByteCount(a: string[], b: number, c: number): number;
    getBytes2(a: string[], b: number, c: number, d: number[], e: number): number;
    getCharCount1(a: number[], b: number, c: number): number;
    getString1(a: number[], b: number, c: number): string;
}
/**
 * @hidden
 */
export declare class CodePageSingleByte extends CodePageEncoding {
    static $t: Type;
    private readonly _ae;
    private _af;
    private _ag;
    constructor(a: number, b: Nullable$1<string>[]);
    protected get__codePage(): number;
    readonly _codePage: number;
    getChars(a: number[], b: number, c: number, d: string[], e: number): number;
    getMaxByteCount(a: number): number;
    getMaxCharCount(a: number): number;
    getByteCount(a: string[], b: number, c: number): number;
    getBytes2(a: string[], b: number, c: number, d: number[], e: number): number;
    getCharCount1(a: number[], b: number, c: number): number;
    getString1(a: number[], b: number, c: number): string;
}
/**
 * @hidden
 */
export declare class Windows1252Encoding extends CodePageSingleByte {
    static $t: Type;
    private static readonly _ah;
    constructor();
}
/**
 * @hidden
 */
export declare class Windows932Encoding extends CodePageDoubleByte {
    static $t: Type;
    private static readonly _ah;
    private static readonly _ai;
    private static readonly _aj;
    private static readonly _ak;
    private static readonly _al;
    private static readonly _am;
    private static readonly _an;
    private static readonly _ao;
    private static readonly _ap;
    private static readonly _aq;
    private static readonly _ar;
    private static readonly _as;
    private static readonly _at;
    private static readonly _au;
    private static readonly _av;
    private static readonly _aw;
    private static readonly _ax;
    private static readonly _ay;
    private static readonly _az;
    private static readonly _a0;
    private static readonly _a1;
    private static readonly _a2;
    private static readonly _a3;
    private static readonly _a4;
    private static readonly _a5;
    private static readonly _a6;
    private static readonly _a7;
    private static readonly _a8;
    private static readonly _a9;
    private static readonly _ba;
    private static readonly _bb;
    private static readonly _bc;
    private static readonly _bd;
    private static readonly _be;
    private static readonly _bf;
    private static readonly _bg;
    private static readonly _bh;
    private static readonly _bi;
    private static readonly _bj;
    private static readonly _bk;
    private static readonly _bl;
    private static readonly _bm;
    private static readonly _bn;
    private static readonly _bo;
    private static readonly _bp;
    private static readonly _bq;
    private static _br;
    static staticInit(): void;
    constructor();
}
/**
 * @hidden
 */
export declare class Windows936Encoding extends CodePageDoubleByte {
    static $t: Type;
    private static readonly _ah;
    private static readonly _ai;
    private static readonly _aj;
    private static readonly _ak;
    private static readonly _al;
    private static readonly _am;
    private static readonly _an;
    private static readonly _ao;
    private static readonly _ap;
    private static readonly _aq;
    private static readonly _ar;
    private static readonly _as;
    private static readonly _at;
    private static readonly _au;
    private static readonly _av;
    private static readonly _aw;
    private static readonly _ax;
    private static readonly _ay;
    private static readonly _az;
    private static readonly _a0;
    private static readonly _a1;
    private static readonly _a2;
    private static readonly _a3;
    private static readonly _a4;
    private static readonly _a5;
    private static readonly _a6;
    private static readonly _a7;
    private static readonly _a8;
    private static readonly _a9;
    private static readonly _ba;
    private static readonly _bb;
    private static readonly _bc;
    private static readonly _bd;
    private static readonly _be;
    private static readonly _bf;
    private static readonly _bg;
    private static readonly _bh;
    private static readonly _bi;
    private static readonly _bj;
    private static readonly _bk;
    private static readonly _bl;
    private static readonly _bm;
    private static readonly _bn;
    private static readonly _bo;
    private static readonly _bp;
    private static readonly _bq;
    private static readonly _br;
    private static readonly _bs;
    private static readonly _bt;
    private static readonly _bu;
    private static readonly _bv;
    private static readonly _bw;
    private static readonly _bx;
    private static readonly _by;
    private static readonly _bz;
    private static readonly _b0;
    private static readonly _b1;
    private static readonly _b2;
    private static readonly _b3;
    private static readonly _b4;
    private static readonly _b5;
    private static readonly _b6;
    private static readonly _b7;
    private static readonly _b8;
    private static readonly _b9;
    private static readonly _ca;
    private static readonly _cb;
    private static readonly _cc;
    private static readonly _cd;
    private static readonly _ce;
    private static readonly _cf;
    private static readonly _cg;
    private static readonly _ch;
    private static readonly _ci;
    private static readonly _cj;
    private static readonly _ck;
    private static readonly _cl;
    private static readonly _cm;
    private static readonly _cn;
    private static readonly _co;
    private static readonly _cp;
    private static readonly _cq;
    private static readonly _cr;
    private static readonly _cs;
    private static readonly _ct;
    private static readonly _cu;
    private static readonly _cv;
    private static readonly _cw;
    private static readonly _cx;
    private static readonly _cy;
    private static readonly _cz;
    private static readonly _c0;
    private static readonly _c1;
    private static readonly _c2;
    private static readonly _c3;
    private static readonly _c4;
    private static readonly _c5;
    private static readonly _c6;
    private static readonly _c7;
    private static readonly _c8;
    private static readonly _c9;
    private static readonly _da;
    private static readonly _db;
    private static readonly _dc;
    private static readonly _dd;
    private static readonly _de;
    private static readonly _df;
    private static readonly _dg;
    private static readonly _dh;
    private static readonly _di;
    private static readonly _dj;
    private static readonly _dk;
    private static readonly _dl;
    private static readonly _dm;
    private static readonly _dn;
    private static readonly _dp;
    private static readonly _dq;
    private static readonly _dr;
    private static readonly _ds;
    private static readonly _dt;
    private static readonly _du;
    private static readonly _dv;
    private static readonly _dw;
    private static readonly _dx;
    private static readonly _dy;
    private static readonly _dz;
    private static readonly _d0;
    private static _d1;
    static staticInit(): void;
    constructor();
}
/**
 * @hidden
 */
export declare class LfuCache$2<TKey, TValue> extends Base {
    static $t: Type;
    protected $tKey: Type;
    protected $tValue: Type;
    private e;
    private readonly d;
    private b;
    constructor($tKey: Type, $tValue: Type, a: number, b: IEqualityComparer$1<TKey>);
    f: number;
    readonly g: number;
    item(a: TKey): TValue;
    h(a: TKey, b: TValue): void;
    i(): void;
    private j;
    c(a: TKey): boolean;
    private k;
    private l;
}
/**
 * @hidden
 */
export declare class LinkedListNode extends Base {
    static $t: Type;
    private a;
    private c;
    private d;
    readonly b: LinkedList;
    readonly e: LinkedListNode;
    readonly f: LinkedListNode;
    g(a: LinkedListNode): void;
    h(a: LinkedListNode): void;
    i(): void;
    j(a: LinkedList): void;
    k(): void;
    l(a: LinkedList): void;
    m(): void;
}
/**
 * @hidden
 */
export declare class LfuCache_FrequencyNode$2<TKey, TValue> extends LinkedListNode {
    static $t: Type;
    protected $tKey: Type;
    protected $tValue: Type;
    o: number;
    readonly n: LinkedList;
    constructor($tKey: Type, $tValue: Type);
}
/**
 * @hidden
 */
export declare class LfuCache_CacheNode$2<TKey, TValue> extends LinkedListNode {
    static $t: Type;
    protected $tKey: Type;
    protected $tValue: Type;
    constructor($tKey: Type, $tValue: Type);
    p: LfuCache_FrequencyNode$2<TKey, TValue>;
    n: TKey;
    o: TValue;
}
/**
 * @hidden
 */
export declare class LinkedList extends Base {
    static $t: Type;
    private a;
    private b;
    c: LinkedListNode;
    d: LinkedListNode;
    e(a?: boolean): void;
}
/**
 * @hidden
 */
export declare class LruCache$2<TKey, TValue> extends Base {
    static $t: Type;
    protected $tKey: Type;
    protected $tValue: Type;
    private e;
    private readonly d;
    private a;
    constructor($tKey: Type, $tValue: Type, a: number, b: IEqualityComparer$1<TKey>);
    f: number;
    readonly g: number;
    item(a: TKey): TValue;
    h(a: TKey, b: TValue): void;
    i(): void;
    c(a: TKey): boolean;
}
/**
 * @hidden
 */
export declare class LruCache_LruCacheNode$2<TKey, TValue> extends LinkedListNode {
    static $t: Type;
    protected $tKey: Type;
    protected $tValue: Type;
    constructor($tKey: Type, $tValue: Type);
    n: TKey;
    o: TValue;
}
/**
 * @hidden
 */
export declare class ImageFormat extends Base {
    static $t: Type;
    static readonly j: Guid;
    static readonly k: Guid;
    static readonly l: Guid;
    static readonly m: Guid;
    static readonly o: Guid;
    static readonly p: Guid;
    static readonly q: Guid;
    static readonly r: Guid;
    static readonly a: ImageFormat;
    static readonly b: ImageFormat;
    static readonly c: ImageFormat;
    static readonly e: ImageFormat;
    static readonly f: ImageFormat;
    static readonly g: ImageFormat;
    static readonly h: ImageFormat;
    static readonly i: ImageFormat;
    constructor(a: Guid);
    n: Guid;
    static d(a: string): ImageFormat;
    static s(a: ImageFormat): string;
}
/**
 * @hidden
 */
export declare class ST_Angle extends ValueType {
    static $t: Type;
    constructor(a: number, b: number);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly k;
    equals(a: any): boolean;
    getHashCode(): number;
    toString(): string;
    static a(a: number): ST_Angle;
    static l(a: number): number;
    static b(a: string): ST_Angle;
    static j(a: number): number;
    n(): number;
    static m(a: string): Nullable$1<ST_Angle>;
    static c(a: ST_Angle, b: ST_Angle): boolean;
    static d(a: ST_Angle, b: ST_Angle): boolean;
    static e(a: Nullable$1<ST_Angle>, b: Nullable$1<ST_Angle>): boolean;
    static f(a: ST_Angle, b: ST_Angle): boolean;
    static g(a: Nullable$1<ST_Angle>, b: Nullable$1<ST_Angle>): boolean;
}
/**
 * @hidden
 */
export declare class DocCoreUtils extends Base {
    static $t: Type;
    static staticInit(): void;
    static a(a: number[]): number[];
    static n<T>($t: Type, a: string): FormatException;
    static al(a: Nullable$1<number>, b: Nullable$1<number>, c: Nullable$1<Color>, d: Nullable$1<number>, e: Nullable$1<EscherSysIndex>, f: Nullable$1<number>): {
        p2: Nullable$1<Color>;
        p3: Nullable$1<number>;
        p4: Nullable$1<EscherSysIndex>;
        p5: Nullable$1<number>;
    };
    static v(a: number): number;
    static am(a: Nullable$1<Color>, b: Nullable$1<number>, c: Nullable$1<EscherSysIndex>, d: Nullable$1<number>, e: Nullable$1<number>, f: Nullable$1<number>): {
        p4: Nullable$1<number>;
        p5: Nullable$1<number>;
    };
    static ah(a: number): number;
    static aj(a: boolean, b?: string): void;
    static ak(a: string): void;
    static an<T>($t: Type, a: IEnumerable$1<T>, b: (arg1: T) => void): void;
    static i(a: number): number;
    static ae(a: number): Encoding;
    static q(a: Encoding): number;
    static x(a: Encoding): string;
    static o(a: number): CultureInfo;
    static r(a: string): number;
    static z(a: string): string;
    static aa(a: string, ...b: any[]): string;
    static d(a: string): boolean;
    static e(a: any): boolean;
    static ao(a: string, b?: number, c?: string): void;
    static w(a: number): number;
    static j(a: number): number;
    private static b;
    static k(a: number, b: number): number;
    static ai(a: number, b: number): number;
    static s(a: number, b: number): number;
    static ar<T>($t: Type, a: List$1<T>, b: IComparer$1<T>): void;
    static ap<T>($t: Type, a: T[], b: T[], c: IComparer$1<T>): void;
    static aq<T>($t: Type, a: T[], b: T[], c: IComparer$1<T>, d: number, e: number): void;
    private static as;
    static c(a: Stream): number[];
    static at<T>($t: Type, a: T, b: T): {
        p0?: T;
        p1?: T;
    };
    static l(a: number): number;
    static u(a: string, b: string, c: string): {
        ret: Stream;
        p2: string;
    };
    static g(a: string, b: string, c: IFormatProvider, d: Date): {
        ret: boolean;
        p3: Date;
    };
    static t(a: number): number;
    static au(a: any, b: string): void;
    static av<T>($t: Type, a: number, b: string, c: number, d: number): void;
    static readonly p: number;
    static readonly ad: Encoding;
    static f: boolean;
    static y(a: Stream): string;
    static ab(a: Encoding, b: number[]): string;
    static af(a: Encoding, b: number): Encoding;
    static ac(a: BinaryReader): string;
    static aw(a: BinaryWriter, b: string): void;
}
/**
 * @hidden
 */
export declare class CT_Transform2D extends Base {
    static $t: Type;
    static c: ST_Angle;
    constructor();
    b: CT_PositiveSize2D;
    i: Nullable$1<boolean>;
    a: CT_Point2D;
    j: Nullable$1<ST_Angle>;
    k: Nullable$1<boolean>;
    g(): boolean;
    h(): boolean;
    d(): ST_Angle;
}
/**
 * @hidden
 */
export declare class CT_GroupTransform2D extends CT_Transform2D {
    static $t: Type;
    m: CT_PositiveSize2D;
    l: CT_Point2D;
}
/**
 * @hidden
 */
export declare class CT_Point2D extends Base {
    static $t: Type;
    a: ST_Coordinate;
    b: ST_Coordinate;
}
/**
 * @hidden
 */
export declare class ST_PositiveCoordinate extends ValueType {
    static $t: Type;
    constructor(a: number, b: number);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly m;
    equals(a: any): boolean;
    getHashCode(): number;
    toString(): string;
    n(): number;
    j(): number;
    static c(a: string): ST_PositiveCoordinate;
    static s(a: string): Nullable$1<ST_PositiveCoordinate>;
    static d(a: ST_PositiveCoordinate, b: ST_PositiveCoordinate): boolean;
    static e(a: Nullable$1<ST_PositiveCoordinate>, b: Nullable$1<ST_PositiveCoordinate>): boolean;
    static f(a: ST_PositiveCoordinate, b: ST_PositiveCoordinate): boolean;
    static g(a: Nullable$1<ST_PositiveCoordinate>, b: Nullable$1<ST_PositiveCoordinate>): boolean;
    static a(a: number): ST_PositiveCoordinate;
    static r(a: Nullable$1<number>): Nullable$1<ST_PositiveCoordinate>;
    static o(a: ST_PositiveCoordinate): number;
    static q(a: Nullable$1<ST_PositiveCoordinate>): Nullable$1<number>;
}
/**
 * @hidden
 */
export declare class CT_PositiveSize2D extends Base {
    static $t: Type;
    a: ST_PositiveCoordinate;
    b: ST_PositiveCoordinate;
}
/**
 * @hidden
 */
export declare class CT_TextBodyPropertiesBase extends Base {
    static $t: Type;
    a: Nullable$1<boolean>;
}
/**
 * @hidden
 */
export declare class IgnoreChildrenMarker extends Base {
    static $t: Type;
    static readonly a: IgnoreChildrenMarker;
    constructor();
}
/**
 * @hidden
 */
export declare class ST_CoordinateUnqualified extends ValueType {
    static $t: Type;
    constructor(a: number, b: number);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly e;
    f(): number;
    d(): number;
    static c(a: string): ST_CoordinateUnqualified;
    static k(a: string): Nullable$1<ST_CoordinateUnqualified>;
    toString(): string;
    static g(a: ST_CoordinateUnqualified): number;
    static i(a: Nullable$1<ST_CoordinateUnqualified>): Nullable$1<number>;
    static a(a: number): ST_CoordinateUnqualified;
    static j(a: Nullable$1<number>): Nullable$1<ST_CoordinateUnqualified>;
}
/**
 * @hidden
 */
export declare class ST_UniversalMeasure extends ValueType {
    static $t: Type;
    constructor(a: number, b: number, c: ST_UniversalMeasure_UnitType);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly a;
    private readonly j;
    equals(a: any): boolean;
    getHashCode(): number;
    toString(): string;
    n(): Nullable$1<number>;
    m(): number;
    k(): number;
    static o(a: string): Nullable$1<ST_UniversalMeasure>;
    static l(a: number, b: ST_UniversalMeasure_UnitType): number;
    static i(a: string, b: number, c: ST_UniversalMeasure_UnitType): {
        ret: boolean;
        p1: number;
        p2: ST_UniversalMeasure_UnitType;
    };
    static p(a: number, b: ST_UniversalMeasure_UnitType): string;
    static b(a: ST_UniversalMeasure, b: ST_UniversalMeasure): boolean;
    static c(a: ST_UniversalMeasure, b: ST_UniversalMeasure): boolean;
    static d(a: Nullable$1<ST_UniversalMeasure>, b: Nullable$1<ST_UniversalMeasure>): boolean;
    static e(a: ST_UniversalMeasure, b: ST_UniversalMeasure): boolean;
    static f(a: Nullable$1<ST_UniversalMeasure>, b: Nullable$1<ST_UniversalMeasure>): boolean;
}
/**
 * @hidden
 */
export declare class ST_Coordinate extends ValueType {
    static $t: Type;
    constructor(a: number, b: ST_CoordinateUnqualified);
    constructor(a: number, b: ST_UniversalMeasure);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private m;
    private n;
    l(): number;
    k(): number;
    static h(a: string): ST_Coordinate;
    static s(a: string): Nullable$1<ST_Coordinate>;
    toString(): string;
    static a(a: number): ST_Coordinate;
    static b(a: number): ST_Coordinate;
    static p(a: Nullable$1<number>): Nullable$1<ST_Coordinate>;
    static c(a: ST_CoordinateUnqualified): ST_Coordinate;
    static q(a: Nullable$1<ST_CoordinateUnqualified>): Nullable$1<ST_Coordinate>;
    static i(a: ST_Coordinate): ST_CoordinateUnqualified;
    static o(a: Nullable$1<ST_Coordinate>): Nullable$1<ST_CoordinateUnqualified>;
    static d(a: ST_UniversalMeasure): ST_Coordinate;
    static r(a: Nullable$1<ST_UniversalMeasure>): Nullable$1<ST_Coordinate>;
}
/**
 * @hidden
 */
export declare class Async extends Base {
    static $t: Type;
    static c(a: number, b: number, c: number, d: (arg1: number) => WorkItem): WorkItem;
    static f(a: number, b: number, c: number, d: (arg1: number) => boolean): WorkItem;
    static d<T>($t: Type, a: IEnumerable$1<T>, b: (arg1: T) => WorkItem): WorkItem;
    static e<T>($t: Type, a: IEnumerable$1<T>, b: (arg1: T) => boolean): WorkItem;
    static g(a: boolean, b: () => WorkItem, c?: () => WorkItem): WorkItem;
    static h(a: () => WorkItem, b: () => void): WorkItem;
    static i<TResult>($tResult: Type, a: () => WorkItem$1<TResult>, b: () => void): WorkItem$1<TResult>;
    static j<TException extends BaseError>($tException: Type, a: () => WorkItem, b: (arg1: TException) => void, c?: () => void): WorkItem;
    static k<TException extends BaseError, TResult>($tException: Type, $tResult: Type, a: () => WorkItem$1<TResult>, b: (arg1: TException) => void, c?: () => void): WorkItem$1<TResult>;
    static l<TException1 extends BaseError, TException2 extends BaseError>($tException1: Type, $tException2: Type, a: () => WorkItem, b: (arg1: TException1) => void, c: (arg1: TException2) => void, d?: () => void): WorkItem;
    static m<TException1 extends BaseError, TException2 extends BaseError, TException3 extends BaseError>($tException1: Type, $tException2: Type, $tException3: Type, a: () => WorkItem, b: (arg1: TException1) => void, c: (arg1: TException2) => void, d: (arg1: TException3) => void, e?: () => void): WorkItem;
    private static a;
    private static b;
    static o<T extends IDisposable>($t: Type, a: WorkItem$1<T>, b: (arg1: T) => WorkItem): WorkItem;
    static n<T extends IDisposable>($t: Type, a: T, b: (arg1: T) => WorkItem): WorkItem;
    static p<T extends IDisposable, TResult>($t: Type, $tResult: Type, a: T, b: (arg1: T) => WorkItem$1<TResult>): WorkItem$1<TResult>;
    static q<T extends IDisposable, TResult>($t: Type, $tResult: Type, a: WorkItem$1<T>, b: (arg1: T) => WorkItem$1<TResult>): WorkItem$1<TResult>;
    static r(a: () => boolean, b: () => WorkItem): WorkItem;
    static s(a: () => boolean, b: () => boolean): WorkItem;
}
/**
 * @hidden
 */
export declare class Async_ForHelper extends Base {
    static $t: Type;
    private readonly e;
    private readonly c;
    private readonly f;
    private readonly d;
    private g;
    constructor(a: number, b: number, c: number, d: (arg1: number) => WorkItem);
    a(): WorkItem;
    private b;
}
/**
 * @hidden
 */
export declare class Async_ForSliceHelper extends Base {
    static $t: Type;
    private readonly d;
    private readonly b;
    private readonly e;
    private readonly c;
    private f;
    constructor(a: number, b: number, c: number, d: (arg1: number) => boolean);
    a(): WorkItem;
}
/**
 * @hidden
 */
export declare class Async_ForEachHelper$1<T> extends Base {
    static $t: Type;
    protected $t: Type;
    private readonly c;
    private readonly d;
    private readonly e;
    constructor($t: Type, a: IEnumerator$1<T>, b: (arg1: T) => WorkItem);
    a(): WorkItem;
    private b;
}
/**
 * @hidden
 */
export declare class Async_ForEachSliceHelper$1<T> extends Base {
    static $t: Type;
    protected $t: Type;
    private readonly c;
    private readonly d;
    private readonly e;
    constructor($t: Type, a: IEnumerator$1<T>, b: (arg1: T) => boolean);
    a(): WorkItem;
    private b;
}
/**
 * @hidden
 */
export declare class Async_UsingHelper$1<T extends IDisposable> extends Base {
    static $t: Type;
    protected $t: Type;
    private readonly a;
    private readonly c;
    constructor($t: Type, a: T, b: (arg1: T) => WorkItem);
    b(): WorkItem;
}
/**
 * @hidden
 */
export declare class Async_UsingHelper$2<T extends IDisposable, TResult> extends Base {
    static $t: Type;
    protected $t: Type;
    protected $tResult: Type;
    private readonly a;
    private readonly c;
    constructor($t: Type, $tResult: Type, a: T, b: (arg1: T) => WorkItem$1<TResult>);
    b(): WorkItem$1<TResult>;
}
/**
 * @hidden
 */
export declare class Async_WhileHelper extends Base {
    static $t: Type;
    private readonly c;
    private readonly b;
    private readonly d;
    constructor(a: () => boolean, b: () => WorkItem);
    a(): WorkItem;
}
/**
 * @hidden
 */
export declare class Async_WhileSliceHelper extends Base {
    static $t: Type;
    private readonly b;
    private readonly c;
    private readonly d;
    constructor(a: () => boolean, b: () => boolean);
    a(): WorkItem;
}
/**
 * @hidden
 */
export declare abstract class WorkItem extends Base {
    static $t: Type;
    private static readonly m;
    private j;
    private n;
    private readonly o;
    private a;
    private b;
    private k;
    constructor(a: WorkItemContinuationType, b: WorkItem, c: boolean);
    static c(a: () => void, b?: WorkItemContinuationType): WorkItem;
    static d(a: () => WorkItem, b?: WorkItemContinuationType): WorkItem;
    static e<TResult>($tResult: Type, a: () => TResult, b?: WorkItemContinuationType): WorkItem$1<TResult>;
    static f<TResult>($tResult: Type, a: () => WorkItem$1<TResult>, b?: WorkItemContinuationType): WorkItem$1<TResult>;
    w(a: WorkItemScheduler): void;
    protected abstract p(a: WorkItemScheduler): boolean;
    q(a: WorkItem, b: WorkItemScheduler): boolean;
    static g<T>($t: Type, a: T): WorkItem$1<T>;
    static h<T>($t: Type, a: T): WorkItem$1<T>;
    protected x(a: WorkItem): void;
    y(): void;
    private z;
    protected aa(a: WorkItem_ExceptionInfo): void;
    private ab;
    private ac;
    protected u(a: WorkItem_ExceptionInfo): {
        ret: boolean;
        p0?: WorkItem_ExceptionInfo;
    };
    readonly v: BaseError;
    protected get_s(): boolean;
    protected readonly s: boolean;
    r: boolean;
    protected get_t(): boolean;
    readonly t: boolean;
    readonly i: WorkItem;
    readonly l: WorkItemContinuationType;
}
/**
 * @hidden
 */
export declare class WorkItem_ExceptionInfo extends Base {
    static $t: Type;
    private readonly a;
    constructor(a: BaseError);
    c(): void;
    readonly b: BaseError;
}
/**
 * @hidden
 */
export declare class WorkItem_WorkItemSync extends WorkItem {
    static $t: Type;
    private readonly ad;
    constructor(a: () => void, b: WorkItemContinuationType, c: WorkItem, d: boolean);
    protected p(a: WorkItemScheduler): boolean;
}
/**
 * @hidden
 */
export declare abstract class WorkItem$1<TResult> extends WorkItem {
    static $t: Type;
    protected $tResult: Type;
    constructor($tResult: Type, a: WorkItemContinuationType, b: WorkItem, c: boolean);
    ad: TResult;
}
/**
 * @hidden
 */
export declare class WorkItem_WorkItemSync$1<TResult> extends WorkItem$1<TResult> {
    static $t: Type;
    protected $tResult: Type;
    private readonly ae;
    constructor($tResult: Type, a: () => TResult, b: WorkItemContinuationType, c: WorkItem, d: boolean);
    protected p(a: WorkItemScheduler): boolean;
}
/**
 * @hidden
 */
export declare class WorkItem_WorkItemAsync extends WorkItem {
    static $t: Type;
    private ad;
    private readonly ae;
    constructor(a: () => WorkItem, b: WorkItemContinuationType, c: WorkItem, d: boolean);
    protected p(a: WorkItemScheduler): boolean;
}
/**
 * @hidden
 */
export declare class WorkItem_WorkItemAsync$1<TResult> extends WorkItem$1<TResult> {
    static $t: Type;
    protected $tResult: Type;
    private af;
    private readonly ag;
    constructor($tResult: Type, a: () => WorkItem$1<TResult>, b: WorkItemContinuationType, c: WorkItem, d: boolean);
    protected p(a: WorkItemScheduler): boolean;
    protected x(a: WorkItem): void;
    ae: WorkItem$1<TResult>;
}
/**
 * @hidden
 */
export declare class WorkItem_WorkItemCatch$1<TException extends BaseError> extends WorkItem {
    static $t: Type;
    protected $tException: Type;
    private readonly ad;
    private readonly ae;
    constructor($tException: Type, a: (arg1: TException) => void, b: WorkItem, c: boolean);
    protected get_s(): boolean;
    protected p(a: WorkItemScheduler): boolean;
    protected u(a: WorkItem_ExceptionInfo): {
        ret: boolean;
        p0?: WorkItem_ExceptionInfo;
    };
}
/**
 * @hidden
 */
export declare class ExternalEventWorkItem extends WorkItem {
    static $t: Type;
    private ae;
    private ad;
    constructor();
    protected p(a: WorkItemScheduler): boolean;
    protected get_t(): boolean;
    af(a?: BaseError): void;
}
/**
 * @hidden
 */
export declare class ExternalEventWorkItem$1<T> extends WorkItem$1<T> {
    static $t: Type;
    protected $t: Type;
    private af;
    private ae;
    constructor($t: Type);
    protected p(a: WorkItemScheduler): boolean;
    protected get_t(): boolean;
    ag(a: T, b?: BaseError): void;
}
/**
 * @hidden
 */
export declare abstract class WorkItemScheduler extends Base {
    static $t: Type;
    abstract d(a: WorkItem): void;
    abstract e(a: WorkItem): void;
    static a(): WorkItemScheduler;
    static b(): WorkItemScheduler;
    static c(): WorkItemScheduler;
}
/**
 * @hidden
 */
export declare class WorkItemScheduler_SynchronousImpl extends WorkItemScheduler {
    static $t: Type;
    private readonly f;
    constructor();
    d(a: WorkItem): void;
    e(a: WorkItem): void;
}
/**
 * @hidden
 */
export declare class WorkItemScheduler_TimeSlicedImpl extends WorkItemScheduler {
    static $t: Type;
    private readonly f;
    constructor();
    d(a: WorkItem): void;
    e(a: WorkItem): void;
}
/**
 * @hidden
 */
export declare class WorkItemExtensions extends Base {
    static $t: Type;
    static n(a: WorkItem): void;
    static o(a: WorkItem): void;
    static m<TResult>($tResult: Type, a: WorkItem$1<TResult>): TResult;
    static a(a: WorkItem, b: () => void, c?: WorkItemContinuationType): WorkItem;
    static b(a: WorkItem, b: (arg1: WorkItem) => void, c?: WorkItemContinuationType): WorkItem;
    static e<T>($t: Type, a: WorkItem$1<T>, b: (arg1: WorkItem$1<T>) => void, c?: WorkItemContinuationType): WorkItem;
    static c(a: WorkItem, b: () => WorkItem, c?: WorkItemContinuationType): WorkItem;
    static d(a: WorkItem, b: (arg1: WorkItem) => WorkItem, c?: WorkItemContinuationType): WorkItem;
    static f<T>($t: Type, a: WorkItem$1<T>, b: (arg1: WorkItem$1<T>) => WorkItem, c?: WorkItemContinuationType): WorkItem;
    static g<TResult>($tResult: Type, a: WorkItem, b: () => TResult, c?: WorkItemContinuationType): WorkItem$1<TResult>;
    static h<TResult>($tResult: Type, a: WorkItem, b: (arg1: WorkItem) => TResult, c?: WorkItemContinuationType): WorkItem$1<TResult>;
    static k<T, TResult>($t: Type, $tResult: Type, a: WorkItem$1<T>, b: (arg1: WorkItem$1<T>) => TResult, c?: WorkItemContinuationType): WorkItem$1<TResult>;
    static i<TResult>($tResult: Type, a: WorkItem, b: () => WorkItem$1<TResult>, c?: WorkItemContinuationType): WorkItem$1<TResult>;
    static j<TResult>($tResult: Type, a: WorkItem, b: (arg1: WorkItem) => WorkItem$1<TResult>, c?: WorkItemContinuationType): WorkItem$1<TResult>;
    static l<T, TResult>($t: Type, $tResult: Type, a: WorkItem$1<T>, b: (arg1: WorkItem$1<T>) => WorkItem$1<TResult>, c?: WorkItemContinuationType): WorkItem$1<TResult>;
}
/**
 * @hidden
 */
export declare class WorkItemExtensions_WorkItemCompleted extends WorkItem {
    static $t: Type;
    static readonly ad: WorkItemExtensions_WorkItemCompleted;
    constructor();
    protected p(a: WorkItemScheduler): boolean;
    protected x(a: WorkItem): void;
}
/**
 * @hidden
 */
export declare class WorkItemExtensions_WorkItemCompleted$1<T> extends WorkItem$1<T> {
    static $t: Type;
    protected $t: Type;
    constructor($t: Type);
    protected p(a: WorkItemScheduler): boolean;
    protected x(a: WorkItem): void;
}
/**
 * @hidden
 */
export declare class BinaryData extends Base {
    static $t: Type;
    readonly a: number[];
    constructor(a: number[]);
}
/**
 * @hidden
 */
export declare class ContextStack extends Base {
    static $t: Type;
    private d;
    private b;
    constructor();
    i(a: number): void;
    j(a: number, b: any): void;
    a<T>($t: Type): T;
    m(a: any, b: any): void;
    h(): any;
    k(a: any): void;
    g(a: (arg1: any) => boolean): any;
    l(a: any): void;
    readonly e: number;
    readonly f: any;
    readonly c: boolean;
}
/**
 * @hidden
 */
export declare class ImageData extends Base {
    static $t: Type;
    private readonly a;
    private readonly c;
    constructor(a: number, b: ImageFormat, c: number[]);
    constructor(a: number, b: ImageFormat, c: Stream);
    constructor(a: number, ..._rest: any[]);
    readonly b: number[];
    readonly d: ImageFormat;
    e: any;
    f(a: Stream): void;
}
/**
 * @hidden
 */
export declare class RoundTripControlData extends Base {
    static $t: Type;
    readonly c: List$1<RoundTripPartData>;
    a: number[];
    d: string;
    b: boolean;
    e: string;
    constructor(a: string, b: string, c: number[]);
}
/**
 * @hidden
 */
export declare class RoundTripPartData extends Base {
    static $t: Type;
    b: string;
    a: BinaryData;
    c: string;
    d: string;
    e: string;
}
/**
 * @hidden
 */
export declare class SeekableBufferedStream extends Stream {
    static $t: Type;
    private _w;
    private _u;
    private _v;
    private _o;
    private _r;
    private _s;
    private _p;
    private _q;
    constructor(a: Stream);
    protected get_canRead(): boolean;
    readonly canRead: boolean;
    protected get_canSeek(): boolean;
    readonly canSeek: boolean;
    protected get_canWrite(): boolean;
    readonly canWrite: boolean;
    protected disposeCore(a: boolean): void;
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
export declare class StringUtilities extends Base {
    static $t: Type;
    static readonly g: StringComparison;
    static readonly e: StringComparer;
    static readonly f: StringComparison;
    static readonly d: StringComparer;
    static c(a: string, b: string, c: CultureInfo, d: CompareOptions): number;
    static a(a: string, b: CultureInfo): string;
    static b(a: string, b: CultureInfo): string;
}
/**
 * @hidden
 */
export declare class UriUtilities extends Base {
    static $t: Type;
    static b(a: string): Uri;
    static a(a: string, b: Uri): {
        ret: boolean;
        p1: Uri;
    };
}
/**
 * @hidden
 */
export interface IShallowCloneable {
    cloneShallow(): IShallowCloneable;
}
/**
 * @hidden
 */
export declare let IShallowCloneable_$type: Type;
/**
 * @hidden
 */
export declare class ValueTuple extends Base {
    static $t: Type;
    static a<T1, T2>($t1: Type, $t2: Type, a: T1, b: T2): ValueTuple$2<T1, T2>;
}
/**
 * @hidden
 */
export declare class ValueTuple$2<T1, T2> extends ValueType implements IEquatable$1<ValueTuple$2<T1, T2>> {
    static $t: Type;
    protected $t1: Type;
    protected $t2: Type;
    constructor($t1: Type, $t2: Type, a: number, b: T1, c: T2);
    constructor($t1: Type, $t2: Type);
    constructor($t1: Type, $t2: Type, a: number, ..._rest: any[]);
    readonly _a: T1;
    readonly _b: T2;
    private readonly _k;
    equals(a: ValueTuple$2<T1, T2>): boolean;
    equals1(a: any): boolean;
    getHashCode(): number;
    static _c<T1, T2>($t1: Type, $t2: Type, a: ValueTuple$2<T1, T2>, b: ValueTuple$2<T1, T2>): boolean;
    static _d<T1, T2>($t1: Type, $t2: Type, a: Nullable$1<ValueTuple$2<T1, T2>>, b: Nullable$1<ValueTuple$2<T1, T2>>): boolean;
    static _e<T1, T2>($t1: Type, $t2: Type, a: ValueTuple$2<T1, T2>, b: ValueTuple$2<T1, T2>): boolean;
    static _f<T1, T2>($t1: Type, $t2: Type, a: Nullable$1<ValueTuple$2<T1, T2>>, b: Nullable$1<ValueTuple$2<T1, T2>>): boolean;
}
/**
 * @hidden
 */
export declare class VariantUtilities extends Base {
    static $t: Type;
    static a(a: any): VariantType;
    private static d;
    static b(a: BinaryReader, b: Encoding): any;
    static c(a: BinaryReader, b: VariantType, c: Encoding): any;
    private static e;
    static f(a: BinaryWriter, b: Encoding, c: any): void;
    static g(a: BinaryWriter, b: Encoding, c: any, d: boolean): void;
    static h(a: BinaryWriter, b: VariantType, c: Encoding, d: any, e: boolean): void;
}
/**
 * Represents an error that occurs when no password is used to open an encrypted document.
 */
export declare class DocumentEncryptedException extends InvalidOperationException {
    static $t: Type;
    constructor();
    constructor(message: string);
    constructor(message: string, innerException: BaseError);
    constructor(..._rest: any[]);
}
/**
 * @hidden
 */
export declare class CryptoUtilities extends Base {
    static $t: Type;
    static d<T>($t: Type, a: T[], b: T): void;
    static c(a: number[]): string;
    static a(a: BinaryReader): string;
    static g(a: string, b: BinaryWriter): void;
    static b(a: BinaryReader): string;
    static h(a: string, b: BinaryWriter): void;
    static e(a: Stream, b: number): void;
    static f(a: Stream, b: number): void;
}
/**
 * @hidden
 */
export declare abstract class InPlaceTransform extends Base {
    static $t: Type;
    private static a;
    static readonly b: InPlaceTransform;
    private e;
    readonly c: boolean;
    f(): void;
    protected get_d(): boolean;
    readonly d: boolean;
    g(a: Stream, b: number): void;
    protected h(a: Stream, b: number): void;
    i(): void;
    j(a: number): void;
    k(): void;
    l(a: number, b: number[], c: number, d: number): void;
    protected abstract m(a: number, b: number[], c: number, d: number): void;
}
/**
 * @hidden
 */
export declare class InPlaceTransform_NoTransformImpl extends InPlaceTransform {
    static $t: Type;
    protected m(a: number, b: number[], c: number, d: number): void;
}
/**
 * @hidden
 */
export declare class OleDataSpaces extends Base {
    static $t: Type;
    static a(a: Stream, b: OleDataSpacesEncryptionMode, c: number[], d: (arg1: Stream) => WorkItem): WorkItem;
    static c(a: StructuredStorageManager): boolean;
    static b(a: Stream, b: () => number[], c: (arg1: Stream, arg2: OleDataSpacesEncryptionMode) => WorkItem, d: () => void, e: () => void): WorkItem$1<boolean>;
}
/**
 * @hidden
 */
export declare abstract class ProtectionValidationInfo extends Base {
    static $t: Type;
    static c(a: number): ProtectionValidationInfo;
    static b(a: string, b: number[], c: number[], d: number): ProtectionValidationInfo;
    static a(a: number[], b: string, c: number[], d: number): {
        ret: number[];
        p1: string;
        p2: number[];
        p3: number;
    };
    abstract d(a: string, b: number[], c: number[], d: Nullable$1<number>): {
        ret: boolean;
        p0: string;
        p1: number[];
        p2: number[];
        p3: Nullable$1<number>;
    };
    abstract f(): Nullable$1<number>;
    e(): boolean;
}
/**
 * @hidden
 */
export declare class ProtectionValidationInfo_XorObfuscation extends ProtectionValidationInfo {
    static $t: Type;
    private readonly g;
    constructor(a: number);
    d(a: string, b: number[], c: number[], d: Nullable$1<number>): {
        ret: boolean;
        p0: string;
        p1: number[];
        p2: number[];
        p3: Nullable$1<number>;
    };
    f(): Nullable$1<number>;
}
/**
 * @hidden
 */
export declare class ProtectionValidationInfo_Strict extends ProtectionValidationInfo {
    static $t: Type;
    private readonly k;
    private readonly g;
    private readonly h;
    private readonly m;
    constructor(a: string, b: number[], c: number[], d: number);
    d(a: string, b: number[], c: number[], d: Nullable$1<number>): {
        ret: boolean;
        p0: string;
        p1: number[];
        p2: number[];
        p3: Nullable$1<number>;
    };
    f(): Nullable$1<number>;
}
/**
 * @hidden
 */
export declare abstract class DirectoryEntry extends Base {
    static $t: Type;
    private o;
    private s;
    private q;
    private a;
    private c;
    private e;
    private g;
    private i;
    private k;
    constructor(a: string, b: DirectoryStream_DirectoryEntryNode);
    private static u;
    p: number;
    readonly t: string;
    readonly l: DirectoryStream_DirectoryEntryNode;
    j: Directory;
    r: number;
    b: number[];
    d: number[];
    f: number[];
    h: number[];
    private static m;
    static readonly n: IComparer$1<DirectoryEntry>;
}
/**
 * @hidden
 */
export declare class Directory extends DirectoryEntry {
    static $t: Type;
    private x;
    constructor(a: string, b: DirectoryStream_DirectoryEntryNode);
    v(a: string, b: DirectoryStream): File;
    w(a: string, b: string): File;
    readonly y: List$1<DirectoryEntry>;
}
/**
 * @hidden
 */
export declare class DirectoryEntry_NameComparer extends Base implements IComparer$1<DirectoryEntry> {
    static $t: Type;
    compare(a: DirectoryEntry, b: DirectoryEntry): number;
}
/**
 * @hidden
 */
export declare abstract class StructuredStorageStream extends Stream {
    static $t: Type;
    private _q;
    private _aj;
    private _y;
    protected _ag: number;
    protected _t: boolean;
    private _ab;
    private _ac;
    private _w;
    private _x;
    private _ad;
    private _ai;
    private _o;
    constructor(a: number, b: StructuredStorageManager, c: number, d: number);
    constructor(a: number, b: StructuredStorageManager, c: number, d: number, e: boolean);
    constructor(a: number, ..._rest: any[]);
    protected get_canRead(): boolean;
    readonly canRead: boolean;
    protected get_canSeek(): boolean;
    readonly canSeek: boolean;
    protected get_canWrite(): boolean;
    readonly canWrite: boolean;
    protected disposeCore(a: boolean): void;
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
    protected _v(a: number): number;
    _aa(a: number, b: number): {
        ret: number;
        p1?: number;
    };
    _readBytes(a: number): number[];
    private _ae;
    _readInt16(): number;
    _readInt32(): number;
    _readUInt16(): number;
    protected _al(): void;
    protected _am(a: number): void;
    _an(a: number): void;
    private _ao;
    private _ap;
    _writeInt16(a: number): void;
    _writeInt32(a: number): void;
    private _ah;
    readonly _z: number;
    readonly _storageManager: StructuredStorageManager;
    protected get__s(): StructuredStorageStream_StreamType;
    protected readonly _s: StructuredStorageStream_StreamType;
}
/**
 * @hidden
 */
export declare class DirectoryEntryStream extends StructuredStorageStream {
    static $t: Type;
    private _as;
    private _at;
    constructor(a: number, b: StructuredStorageManager, c: DirectoryEntry);
    constructor(a: number, b: StructuredStorageManager, c: DirectoryEntry, d: boolean);
    constructor(a: number, ..._rest: any[]);
    protected disposeCore(a: boolean): void;
    protected _am(a: number): void;
    _an(a: number): void;
    write(a: number[], b: number, c: number): void;
}
/**
 * @hidden
 */
export declare class DirectoryStream extends StructuredStorageStream {
    static $t: Type;
    private _as;
    private _av;
    private readonly _az;
    constructor(a: number, b: StructuredStorageManager);
    constructor(a: number, b: StructuredStorageManager, c: number);
    constructor(a: number, ..._rest: any[]);
    protected disposeCore(a: boolean): void;
    _addFile(a: string): File;
    _a0(): void;
    private _a1;
    _readDirectoryEntryHeaders(): void;
    private _a3;
    private _a4;
    private _a5;
    readonly _aw: List$1<DirectoryStream_DirectoryEntryNode>;
    readonly _at: Directory;
}
/**
 * @hidden
 */
export declare class DirectoryStream_DirectoryEntryNode extends Base {
    static $t: Type;
    constructor();
    a: DirectoryEntry;
    d: number;
    e: number;
    c: number;
    b: DirectoryStream_NodeColor;
}
/**
 * @hidden
 */
export declare class File extends DirectoryEntry {
    static $t: Type;
    constructor(a: string, b: DirectoryStream_DirectoryEntryNode);
}
/**
 * @hidden
 */
export declare class MasterSATStream extends StructuredStorageStream {
    static $t: Type;
    private readonly _a0;
    private _as;
    private _aw;
    private _ax;
    private _av;
    private _au;
    constructor(a: StructuredStorageManager, b: number, c: number, d: number[]);
    protected _v(a: number): number;
    protected disposeCore(a: boolean): void;
    _aa(a: number, b: number): {
        ret: number;
        p1?: number;
    };
    protected get__s(): StructuredStorageStream_StreamType;
    _a1(a: number): void;
    _ay(a: number): number;
    _az(a: number): number;
    readonly _headerMasterSAT: number[];
}
/**
 * @hidden
 */
export declare abstract class SATStreamBase extends StructuredStorageStream {
    static $t: Type;
    protected readonly _aw: number;
    private _as;
    private _at;
    constructor(a: StructuredStorageManager, b: number, c: number);
    protected disposeCore(a: boolean): void;
    _au(a: number, b: StructuredStorageStream_StreamType): number;
    _getNextSectorIdInSAT(a: number, b: number): {
        ret: number;
        p1?: number;
    };
    protected _ax(a: number, b: number): void;
    _ay(a: StructuredStorageStream): void;
    protected _az(a: List$1<SATStreamBase_SATEntry>): void;
}
/**
 * @hidden
 */
export declare class SATStream extends SATStreamBase {
    static $t: Type;
    private _a0;
    constructor(a: number, b: StructuredStorageManager, c: MasterSATStream);
    constructor(a: number, b: StructuredStorageManager, c: number, d: number, e: MasterSATStream);
    constructor(a: number, ..._rest: any[]);
    protected _v(a: number): number;
    protected disposeCore(a: boolean): void;
    _aa(a: number, b: number): {
        ret: number;
        p1?: number;
    };
    protected get__s(): StructuredStorageStream_StreamType;
    readonly _masterSATStream: MasterSATStream;
}
/**
 * @hidden
 */
export declare class SATStreamBase_SATEntry extends Base {
    static $t: Type;
    c: number;
    b: number;
    constructor(a: number, b: number);
    static readonly a: SATStreamBase_SATEntry;
}
/**
 * @hidden
 */
export declare class ShortSATStream extends SATStreamBase {
    static $t: Type;
    constructor(a: StructuredStorageManager, b: number, c: number);
}
/**
 * @hidden
 */
export declare class StructuredStorageManager extends Base implements IDisposable {
    static $t: Type;
    private _k;
    private _ag;
    private _ah;
    private _w;
    private _x;
    private _u;
    private _ae;
    private _b;
    private _d;
    private _e;
    private _c;
    private _h;
    private _f;
    constructor(a: Stream, b: boolean);
    _ab(a: string): Stream;
    _ac(a: string): Stream;
    static _j(a: Stream): boolean;
    protected _dispose1(a: boolean): void;
    _l(a: number, b: boolean, c: StructuredStorageStream_StreamType): number;
    _y(a: number, b: number, c: boolean): number;
    _ad(a: boolean): Stream;
    _o(a: number, b: number, c: boolean): {
        ret: number;
        p1?: number;
    };
    _p(a: boolean): number;
    _i(a: number): boolean;
    _z(a: number, b: boolean): number;
    _aa(a: number, b: number, c: boolean): number;
    _am(a: UserFileStream): void;
    _g: boolean;
    readonly _a: Directory;
    dispose(): void;
}
/**
 * @hidden
 */
export declare class UserFileStream extends DirectoryEntryStream {
    static $t: Type;
    private _au;
    constructor(a: StructuredStorageManager, b: File);
    setLength(a: number): void;
    readonly _isShortStream: boolean;
}
/**
 * @hidden
 */
export declare abstract class InformationBase extends Base {
    static $t: Type;
    private a;
    private g;
    private c;
    constructor();
    protected static h(a: List$1<string>): Encoding;
    k(a: Stream): void;
    protected l(a: List$1<InformationBase_PropertySectionDefinition>): void;
    protected e(a: BinaryReader, b: InformationBase_PropertyDefinition): any;
    protected m(a: BinaryReader, b: InformationBase_PropertySectionDefinition): void;
    protected i(a: BinaryReader, b: InformationBase_PropertySectionDefinition): Encoding;
    protected n(a: BinaryReader, b: InformationBase_PropertySectionDefinition): void;
    o(a: Stream): void;
    protected p(): void;
    protected q(a: BinaryWriter, b: InformationBase_PropertySectionDefinition): void;
    protected r(a: BinaryWriter, b: InformationBase_PropertySectionDefinition): void;
    readonly b: Dictionary$2<number, any>;
    protected abstract readonly f: string;
}
/**
 * @hidden
 */
export declare class DocumentSummaryInformation extends InformationBase {
    static $t: Type;
    private s;
    private u;
    private x;
    private w;
    private ab;
    constructor();
    protected get_f(): string;
    protected readonly f: string;
    protected l(a: List$1<InformationBase_PropertySectionDefinition>): void;
    protected n(a: BinaryReader, b: InformationBase_PropertySectionDefinition): void;
    protected p(): void;
    protected r(a: BinaryWriter, b: InformationBase_PropertySectionDefinition): void;
    protected ac(a: BinaryReader, b: InformationBase_PropertyDefinition): void;
    protected ad(a: BinaryWriter, b: InformationBase_PropertyDefinition): void;
    readonly t: DocumentSummaryInformation_DocumentSummaryInformationProperties;
    readonly v: Dictionary$2<UserDefinedPropertyType, any>;
}
/**
 * @hidden
 */
export declare class DocumentSummaryInformation_DocumentSummaryInformationProperties extends Base {
    static $t: Type;
    private a;
    constructor(a: DocumentSummaryInformation);
    private static b;
    private static c;
    item(a: DocumentSummaryPropertyType, b?: any): any;
    item1(a: UserDefinedPropertyType, b?: any): any;
}
/**
 * @hidden
 */
export declare class InformationBase_PropertyDefinition extends Base {
    static $t: Type;
    b: number;
    a: number;
}
/**
 * @hidden
 */
export declare class InformationBase_PropertySectionDefinition extends Base {
    static $t: Type;
    b: Guid;
    e: number;
    c: number;
    d: number;
    a: List$1<InformationBase_PropertyDefinition>;
}
/**
 * @hidden
 */
export declare class SummaryInformation extends InformationBase {
    static $t: Type;
    private s;
    protected get_f(): string;
    protected readonly f: string;
    readonly t: SummaryInformation_SummaryInformationProperties;
}
/**
 * @hidden
 */
export declare class SummaryInformation_SummaryInformationProperties extends Base {
    static $t: Type;
    private a;
    constructor(a: SummaryInformation);
    private static b;
    item(a: SummaryPropertyType, b?: any): any;
}
/**
 * @hidden
 */
export interface IPackageFactory {
    open(stream: string | Uint8Array, packageMode: FileMode): WorkItem$1<IPackage>;
    _open$i(a: Stream, b: FileMode): WorkItem$1<IPackage>;
}
/**
 * @hidden
 */
export declare let IPackageFactory_$type: Type;
/**
 * @hidden
 */
export interface IPackage extends IDisposable {
    createPart(a: Uri, b: string): IPackagePart;
    createRelationship(a: Uri, b: RelationshipTargetMode, c: string, d: string): IPackageRelationship;
    getRelationships(): IEnumerable$1<IPackageRelationship>;
    getRelationship(a: string): IPackageRelationship;
    getPart(a: Uri): IPackagePart;
    getParts(): IEnumerable$1<IPackagePart>;
    partExists(a: Uri): boolean;
}
/**
 * @hidden
 */
export declare let IPackage_$type: Type;
/**
 * @hidden
 */
export interface IPackagePart {
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
export declare let IPackagePart_$type: Type;
/**
 * @hidden
 */
export interface IPackagePartEx extends IPackagePart {
    createExternalRelationship(a: string, b: string, c: string): IPackageRelationship;
}
/**
 * @hidden
 */
export declare let IPackagePartEx_$type: Type;
/**
 * @hidden
 */
export interface IPackageRelationship {
    readonly sourceUri: Uri;
    readonly targetUri: Uri;
    readonly id: string;
    readonly relationshipType: string;
    readonly targetMode: RelationshipTargetMode;
}
/**
 * @hidden
 */
export declare let IPackageRelationship_$type: Type;
/**
 * @hidden
 */
export interface IInvalidPackageRelationshipTarget extends IPackageRelationship {
    readonly targetString: string;
}
/**
 * @hidden
 */
export declare let IInvalidPackageRelationshipTarget_$type: Type;
