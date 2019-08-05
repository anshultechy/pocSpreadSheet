import { ValueType, Type, Base, Stream, Nullable$1, IList$1, SeekOrigin } from "../../igniteui-angular-core/ES5/type";
import { WorkbookLoadManager, WorkbookSaveManager, CellContext, CellDataContext, WorksheetCellFormatData, WorkbookStyle, Workbook, WorkbookSaveOptions, SingleTargetFormula, WorksheetCell, BuiltInStyleType, IWorksheetImage, ExcelImage, WorksheetShape, Worksheet, Formula, WorksheetRow, FormulaContext, FormulaToken, FormulaTokenVisitor$1, FormulaTokenVisitor, BIFF8RecordType, Sheet, WorksheetTable, WorksheetTableColumn, WorksheetRegion, ArrayFormula, WorkbookReferenceBase, WorksheetTableStyle, ExtProp, XFProp, WorksheetSerializationCache, WorksheetCellComment, SortedList$2, Filter, SortSettings$1, RelativeIndex, ConditionBase, CellAddressRange, WorkbookColorInfo, Area3DToken, AreaErrToken, AreaToken, ArrayToken, AttrChooseToken, AttrIfToken, AttrSkipToken, AttrSpaceToken, AttrSumToken, AttrVolatileToken, BinaryOperatorToken, BoolToken, ErrToken, ExpToken, FunctionOperator, FunctionVOperator, IntToken, MemAreaOperator, MemErrOperator, MemFuncOperator, MemNoMemOperator, MissArgToken, NameToken, NameXToken, NumberToken, ParenToken, Ref3DToken, RefErrToken, RefToken, StrToken, StructuredTableReference, TblToken, UnaryOperatorToken, LengthType, WorksheetShapeVisitor$2, PropertyTableBase_PropertyValue, WorksheetShapeWithText, UnknownShape, WorksheetImage, CellAddress, WorksheetReference, WorksheetCellAddress, ExcelCalcValue, WorkbookLoadOptions, WorksheetShapeGroup, NamedReference, FormulaType, FormatConditionType, FtRboData, Obj, FtCmo, StringElement, FormulaTokenVisitor$2, IBiffRecordStream, ColorableItem, CellFillGradient, FormattedStringElement, IWorkbookFont, CfType, CfOperator, CfTemplate, CfTextOperator, CfDateOperator, CfValueType, IconSet, DataBarConditionalFormat, ColorScaleConditionalFormat, IconSetConditionalFormat, FormatConditionAboveBelow, FormatConditionOperator, FormatConditionTextOperator, FormatConditionTimePeriod, FormatConditionValueType, FormatConditionIconSet, ConditionValue, ColorScaleCriterion, IconSetCriterionCollection, IconCriterion, CustomFilterCondition, FixedDateGroup, IFilterable, SortCondition, SortDirection, ISortable, Rgce, HorizontalCellAlignment, VerticalCellAlignment, FontSuperscriptSubscriptStyle, FontScheme, WorksheetProtectedRange, FullColorExtInfo, GradStopInfo, CellFillGradientStop, WorksheetRegionAddress, XFExtGradientInfo, XFPropColorInfo, XFPropGradientFill, XFPropGradientStop, XFPropGradientStopLoaded, FtGmo, FtCf, FtPioGrbit, FtCbls, FtRbo, FtSbs, FtNts, FtMacro, FtPictFmla, ObjLinkFmla, FtCblsData, FtLbsData, FtEdoData, FtGboData, ObjFmla, LbsDropData, PictFmlaKey, ObjectParsedFormula, PictFmlaEmbedInfo, OBJRecordType, IEscherRecord, EscherRecordType, BLIPType, ICalloutRule, PositioningOptions } from "./excel.core";
import { Dictionary$2 } from "../../igniteui-angular-core/ES5/Dictionary$2";
import { WorkItem, ContextStack, SeekableBufferedStream, InPlaceTransform, IPackageFactory, DocumentSummaryInformation, SummaryInformation, ST_FilterOperator, ST_IconSetType, ST_SortBy } from "./documents.core";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { BinaryReader } from "../../igniteui-angular-core/ES5/BinaryReader";
import { Rect } from "../../igniteui-angular-core/ES5/Rect";
import { MemoryStream } from "../../igniteui-angular-core/ES5/MemoryStream";
import { IComparer$1 } from "../../igniteui-angular-core/ES5/IComparer$1";
import { Guid } from "../../igniteui-angular-core/ES5/Guid";
/**
 * @hidden
 */
export declare const enum LIST12Record_LIST12DataType {
    BlockLevelFormatting = 0,
    StyleInfo = 1,
    DisplayName = 2
}
/**
 * @hidden
 */
export declare let LIST12Record_LIST12DataType_$type: Type;
/**
 * @hidden
 */
export declare const enum BOFRecord_BiffVersion {
    Biff2_1 = 0,
    Biff2_2 = 7,
    Biff2_3 = 512,
    Biff3 = 768,
    Biff4 = 1024,
    Biff5 = 1280,
    Biff7 = 1280,
    Biff8 = 1536
}
/**
 * @hidden
 */
export declare let BOFRecord_BiffVersion_$type: Type;
/**
 * @hidden
 */
export declare abstract class BiffRecordBase$3<RecordTypeEnum, LoadContextType extends WorkbookLoadManager, SaveContextType extends WorkbookSaveManager> extends Base {
    static $t: Type;
    protected $recordTypeEnum: Type;
    protected $loadContextType: Type;
    protected $saveContextType: Type;
    constructor($recordTypeEnum: Type, $loadContextType: Type, $saveContextType: Type);
    protected get_e(): boolean;
    readonly e: boolean;
    abstract h(a: LoadContextType): void;
    a(a: LoadContextType): WorkItem;
    abstract i(a: SaveContextType): void;
    b(a: SaveContextType): WorkItem;
    abstract readonly d: RecordTypeEnum;
    private static g;
    static c<RecordTypeEnum, LoadContextType extends WorkbookLoadManager, SaveContextType extends WorkbookSaveManager>($recordTypeEnum: Type, $loadContextType: Type, $saveContextType: Type, a: RecordTypeEnum, b: (type: RecordTypeEnum) => BiffRecordBase$3<RecordTypeEnum, LoadContextType, SaveContextType>): BiffRecordBase$3<RecordTypeEnum, LoadContextType, SaveContextType>;
}
/**
 * @hidden
 */
export declare class WorkbookSaveManagerExcel2003 extends WorkbookSaveManager {
    static $t: Type;
    private _cs;
    private _ck;
    private readonly _ct;
    private _cz;
    private readonly _cq;
    private readonly _cr;
    private readonly _cu;
    private readonly _cp;
    private _co;
    static staticInit(): void;
    constructor(a: Workbook, b: Stream, c: string, d: WorkbookSaveOptions);
    protected disposeCore(a: boolean): void;
    protected get__r(): CellContext;
    protected set__r(a: CellContext): void;
    protected get__q(): CellDataContext;
    protected set__q(a: CellDataContext): void;
    _a6(a: WorksheetCellFormatData): number;
    _a7(a: WorkbookStyle): number;
    _bk(): void;
    protected _bo(a: IWorksheetImage): void;
    protected get__ag(): boolean;
    protected readonly _ag: boolean;
    protected _b4(a: WorksheetShape): {
        p0?: WorksheetShape;
    };
    protected _p(): WorkItem;
    _c0(a: number): number;
    _cl(a: Formula): SingleTargetFormula;
    _cm(a: WorksheetRow, b: number, c: Formula): WorksheetCell;
    _c8(a: Biff8RecordStream): void;
    _c9(a: Biff8RecordStream): void;
    _da(a: WorksheetShape): void;
    static _b9(a: Workbook, b: Stream, c: WorkbookSaveOptions): WorkItem;
    _c2(a: Formula, b: boolean, c: boolean, d?: boolean): number;
    _dp(a: BIFF8RecordType): void;
    _cc(a: BIFF8RecordType): WorkItem;
    private _c5;
    private _c6;
    private _c7;
    private _ca;
    private _cb;
    private static _cn;
    private _db;
    private _dc;
    private _c3;
    private _dd;
    private _df;
    private _dg;
    private _dh;
    private _di;
    private _dj;
    private _dk;
    private _dl;
    private _dm;
    private _dn;
    private _dq;
    private _dr;
    private _cd;
    private _ds;
    private _dt;
    private _du;
    private _ce;
    private _cf;
    private _dv;
    private _dw;
    private _de;
    readonly _b7: ContextStack;
    _cj: CellContext;
    private _cg;
    _ch: CellDataContext;
    _ci: Biff8RecordStream;
    readonly _cv: List$1<WorkbookSaveManagerExcel2003_ExtSstItem>;
    readonly _cw: List$1<WorksheetCellFormatData>;
    readonly _cx: List$1<WorkbookSerializationDataExcel2003_ImageHolder>;
    readonly _cy: List$1<WorkbookStyle>;
    readonly _c4: Stream;
    _b8: InPlaceTransform;
    readonly _b6: number[];
}
/**
 * @hidden
 */
export declare class WorkbookSaveManagerExcel2003_ExtSstItem extends ValueType {
    static $t: Type;
    constructor();
    b: number;
    a: number;
}
/**
 * @hidden
 */
export declare class WorkbookSaveManagerExcel2003_FormatHolder extends Base {
    static $t: Type;
    private a;
    private c;
    constructor(a: number, b: string);
    readonly d: string;
    readonly b: number;
}
/**
 * @hidden
 */
export declare class WorkbookSaveManagerExcel2003_GetSizeTokenVisitor extends FormulaTokenVisitor$1<number> {
    static $t: Type;
    private static a4;
    private a6;
    private a3;
    private a2;
    constructor();
    d(a: FormulaToken): number;
    a1(): void;
    f(a: Area3DToken): number;
    h(a: AreaErrToken): number;
    j(a: AreaToken): number;
    k(a: ArrayToken): number;
    l(a: AttrChooseToken): number;
    m(a: AttrIfToken): number;
    n(a: AttrSkipToken): number;
    o(a: AttrSpaceToken): number;
    p(a: AttrSumToken): number;
    q(a: AttrVolatileToken): number;
    r(a: BinaryOperatorToken): number;
    s(a: BoolToken): number;
    u(a: ErrToken): number;
    v(a: ExpToken): number;
    w(a: FunctionOperator): number;
    y(a: FunctionVOperator): number;
    z(a: IntToken): number;
    aa(a: MemAreaOperator): number;
    ab(a: MemErrOperator): number;
    ac(a: MemFuncOperator): number;
    ad(a: MemNoMemOperator): number;
    ae(a: MissArgToken): number;
    af(a: NameToken): number;
    ag(a: NameXToken): number;
    ah(a: NumberToken): number;
    aj(a: ParenToken): number;
    al(a: Ref3DToken): number;
    ao(a: RefErrToken): number;
    aq(a: RefToken): number;
    ar(a: StrToken): number;
    as(a: StructuredTableReference): number;
    at(a: TblToken): number;
    au(a: UnaryOperatorToken): number;
    static a5(a: FormulaContext, b: BiffRecordStream, c: boolean, d: number[]): WorkbookSaveManagerExcel2003_GetSizeTokenVisitor;
    static a7(a: AttrChooseToken): number;
}
/**
 * @hidden
 */
export declare class WorkbookSaveManagerExcel2003_PopuplateShapeKnownPropertiesVisitor extends WorksheetShapeVisitor$2<WorkbookSaveManagerExcel2003, boolean> {
    static $t: Type;
    static readonly d: WorkbookSaveManagerExcel2003_PopuplateShapeKnownPropertiesVisitor;
    constructor();
    b(a: WorksheetShape, b: WorkbookSaveManagerExcel2003): boolean;
    c(a: WorksheetShapeWithText, b: WorkbookSaveManagerExcel2003): boolean;
}
/**
 * @hidden
 */
export declare class WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor extends WorksheetShapeVisitor$2<WorkbookSaveManagerExcel2003, boolean> {
    static $t: Type;
    static readonly d: WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor;
    constructor();
    visitUnknownShape(shape: UnknownShape, saveManager: WorkbookSaveManagerExcel2003): boolean;
    _visitUnknownShape$i(a: UnknownShape, b: WorkbookSaveManagerExcel2003): boolean;
    visitWorksheetCellComment(shape: WorksheetCellComment, saveManager: WorkbookSaveManagerExcel2003): boolean;
    _visitWorksheetCellComment$i(a: WorksheetCellComment, b: WorkbookSaveManagerExcel2003): boolean;
    visitWorksheetImage(shape: WorksheetImage, saveManager: WorkbookSaveManagerExcel2003): boolean;
    _visitWorksheetImage$i(a: WorksheetImage, b: WorkbookSaveManagerExcel2003): boolean;
    b(a: WorksheetShape, b: WorkbookSaveManagerExcel2003): boolean;
    private static f;
    private e;
}
/**
 * @hidden
 */
export declare class WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor extends FormulaTokenVisitor {
    static $t: Type;
    private static a0;
    private az;
    constructor();
    g(): void;
    o(a: ArrayToken): void;
    ae(a: MemAreaOperator): void;
    static a1(a: FormulaContext, b: BiffRecordStream): WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor;
}
/**
 * @hidden
 */
export declare class WorkbookSaveManagerExcel2003_SaveTokenVisitor extends FormulaTokenVisitor {
    static $t: Type;
    private static a4;
    private static readonly az;
    private static readonly a0;
    private a6;
    private a1;
    private a3;
    private a2;
    constructor();
    e(a: FormulaToken): void;
    g(): void;
    h(): void;
    j(a: Area3DToken): void;
    l(a: AreaErrToken): void;
    n(a: AreaToken): void;
    o(a: ArrayToken): void;
    p(a: AttrChooseToken): void;
    q(a: AttrIfToken): void;
    r(a: AttrSkipToken): void;
    s(a: AttrSpaceToken): void;
    t(a: AttrSumToken): void;
    u(a: AttrVolatileToken): void;
    v(a: BinaryOperatorToken): void;
    w(a: BoolToken): void;
    y(a: ErrToken): void;
    z(a: ExpToken): void;
    aa(a: FunctionOperator): void;
    ac(a: FunctionVOperator): void;
    ad(a: IntToken): void;
    ae(a: MemAreaOperator): void;
    af(a: MemErrOperator): void;
    ag(a: MemFuncOperator): void;
    ah(a: MemNoMemOperator): void;
    ai(a: MissArgToken): void;
    aj(a: NameToken): void;
    ak(a: NameXToken): void;
    al(a: NumberToken): void;
    an(a: ParenToken): void;
    ap(a: Ref3DToken): void;
    as(a: RefErrToken): void;
    au(a: RefToken): void;
    av(a: StrToken): void;
    aw(a: StructuredTableReference): void;
    ax(a: TblToken): void;
    ay(a: UnaryOperatorToken): void;
    static a5(a: FormulaContext, b: BiffRecordStream, c: boolean, d: FormulaToken[], e: number[]): WorkbookSaveManagerExcel2003_SaveTokenVisitor;
    private a7;
}
/**
 * @hidden
 */
export declare class WorkbookLoadManagerExcel2003 extends WorkbookLoadManager {
    static $t: Type;
    _a8: boolean;
    private readonly _bd;
    private readonly _be;
    private _a1;
    private _az;
    private _a2;
    private _a5;
    private _bn;
    private _cb;
    private _bo;
    private _cc;
    private _bp;
    private _bq;
    private _br;
    private _bs;
    readonly _bf: Dictionary$2<NameToken, number>;
    private _a9;
    private _bt;
    private _bu;
    readonly _ay: WorkbookLoadManagerExcel2003_ResolveNamedReferenceVisitor;
    private readonly _ak;
    private _bv;
    private readonly _bg;
    private _af;
    private readonly _bh;
    private readonly _b8;
    private readonly _bi;
    private _b7;
    private _aw;
    static staticInit(): void;
    constructor(a: Workbook, b: Stream, c: string, d: WorkbookLoadOptions);
    protected disposeCore(a: boolean): void;
    _r(): WorksheetCellFormatData;
    _cf(a: NamedReference, b: SingleTargetFormula, c: boolean): void;
    protected _p(): WorkItem;
    _z(): void;
    _cu(a: WorksheetShapeGroup): Rect;
    _a4(a: number): WorkbookStyle;
    _a6(a: Worksheet, b: number): WorksheetRow;
    _as(a: number[], b: number): {
        ret: ArrayFormula;
        p0?: number[];
        p1?: number;
    };
    _ao(): WorkItem;
    _ci(a: Stream, b: DocumentSummaryInformation, c: SummaryInformation): void;
    _at(a: FormulaType, b: number[], c: number): {
        ret: Formula;
        p1?: number[];
        p2?: number;
    };
    _au(a: FormulaType, b: number, c: number[], d: number): {
        ret: Formula;
        p2?: number[];
        p3?: number;
    };
    _cj(): void;
    _ck(a: Biff8RecordStream): void;
    _cl(a: Biff8RecordStream): void;
    _cm(a: WorksheetRow): void;
    _cn(a: WorkbookReferenceBase): void;
    _co(a: number): void;
    _cs(a: WorksheetShapeGroup, b: Rect): void;
    _ct(a: Worksheet): void;
    _ar(): WorkItem;
    _ax(a: Worksheet): WorksheetCFInfo;
    private _cp;
    private _cg;
    private _am;
    static _an(a: Workbook, b: Stream, c: string, d: WorkbookLoadOptions): WorkItem;
    private _ch;
    private _ap;
    private _aq;
    private _cq;
    private _cr;
    readonly _ba: boolean;
    readonly _bj: Dictionary$2<number, List$1<WorksheetCellFormatData>>;
    readonly _ai: ContextStack;
    readonly _a0: WorkbookReferenceBase;
    readonly _a3: WorksheetReference;
    _av: Biff8RecordStream;
    _a7: WorksheetTableStyle;
    readonly _bw: List$1<DXFRecordInfo>;
    _cd: Nullable$1<number>;
    readonly _bx: List$1<FONTRecordInfo>;
    _ce: Nullable$1<number>;
    readonly _by: List$1<STYLEEXTRecordInfo>;
    readonly _bz: List$1<STYLERecordInfo>;
    readonly _b0: List$1<XFEXTRecordInfo>;
    readonly _b1: List$1<XFRecordInfo>;
    readonly _b2: List$1<WorksheetCellFormatData>;
    _bb: boolean;
    readonly _b3: List$1<WorkbookSerializationDataExcel2003_ImageHolder>;
    _bc: boolean;
    readonly _b4: List$1<WorksheetCellComment>;
    readonly _b5: List$1<WorkbookStyle>;
    _b6: number;
    readonly _al: IPackageFactory;
    readonly _bk: Dictionary$2<WorksheetCellAddress, ExcelCalcValue>;
    _aj: InPlaceTransform;
    readonly _bl: Dictionary$2<WorksheetCellAddress, Formula>;
    readonly _ca: Stream;
    readonly _b9: BinaryReader;
    readonly _bm: Dictionary$2<number, number>;
    readonly _ah: number[];
    _ag(): number[];
}
/**
 * @hidden
 */
export declare class WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor extends FormulaTokenVisitor {
    static $t: Type;
    private static a1;
    az: number[];
    a3: number;
    private a0;
    constructor();
    g(): void;
    o(a: ArrayToken): void;
    ae(a: MemAreaOperator): void;
    static a2(a: FormulaContext, b: WorkbookLoadManagerExcel2003, c: number[], d: number): WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor;
}
/**
 * @hidden
 */
export declare class WorkbookLoadManagerExcel2003_LoadTokenVisitor extends FormulaTokenVisitor {
    static $t: Type;
    private static a2;
    az: number[];
    a6: number;
    private a5;
    private a1;
    private a0;
    constructor();
    e(a: FormulaToken): void;
    g(): void;
    j(a: Area3DToken): void;
    l(a: AreaErrToken): void;
    n(a: AreaToken): void;
    o(a: ArrayToken): void;
    p(a: AttrChooseToken): void;
    q(a: AttrIfToken): void;
    r(a: AttrSkipToken): void;
    s(a: AttrSpaceToken): void;
    t(a: AttrSumToken): void;
    u(a: AttrVolatileToken): void;
    v(a: BinaryOperatorToken): void;
    w(a: BoolToken): void;
    y(a: ErrToken): void;
    z(a: ExpToken): void;
    aa(a: FunctionOperator): void;
    ac(a: FunctionVOperator): void;
    ad(a: IntToken): void;
    ae(a: MemAreaOperator): void;
    af(a: MemErrOperator): void;
    ag(a: MemFuncOperator): void;
    ah(a: MemNoMemOperator): void;
    ai(a: MissArgToken): void;
    aj(a: NameToken): void;
    ak(a: NameXToken): void;
    al(a: NumberToken): void;
    an(a: ParenToken): void;
    ap(a: Ref3DToken): void;
    as(a: RefErrToken): void;
    au(a: RefToken): void;
    av(a: StrToken): void;
    aw(a: StructuredTableReference): void;
    ax(a: TblToken): void;
    ay(a: UnaryOperatorToken): void;
    static a3(a: FormulaContext, b: WorkbookLoadManagerExcel2003, c: boolean, d: number[], e: number): WorkbookLoadManagerExcel2003_LoadTokenVisitor;
    protected a4(): WorksheetReference;
    a7(a: NameToken, b: number): void;
}
/**
 * @hidden
 */
export declare class WorkbookLoadManagerExcel2003_ResolveNamedReferenceVisitor extends FormulaTokenVisitor$2<number, boolean> {
    static $t: Type;
    private readonly a3;
    constructor(a: WorkbookLoadManagerExcel2003);
    d(a: FormulaToken, b: number): boolean;
    af(a: NameToken, b: number): boolean;
    ag(a: NameXToken, b: number): boolean;
}
/**
 * @hidden
 */
export declare class WorkbookSerializationDataExcel2003 extends ValueType {
    static $t: Type;
    constructor(a: number, b: Stream);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private readonly g;
    private readonly f;
    private readonly i;
    private readonly h;
    private readonly j;
    private readonly k;
    private readonly l;
    readonly b: ContextStack;
    d: Biff8RecordStream;
    readonly p: List$1<WorksheetCellFormatData>;
    readonly q: List$1<WorkbookSerializationDataExcel2003_ImageHolder>;
    readonly c: SeekableBufferedStream;
    a: number[];
    s(a: number): void;
    e(a: BIFF8RecordType): Biff8RecordBase;
}
/**
 * @hidden
 */
export declare class WorkbookSerializationDataExcel2003_ImageHolder extends Base {
    static $t: Type;
    constructor(a: ExcelImage, b: number);
    equals(a: any): boolean;
    getHashCode(): number;
    a: ExcelImage;
    d: number;
}
/**
 * @hidden
 */
export declare abstract class BiffRecordStream extends Stream implements IBiffRecordStream {
    static $t: Type;
    private _aj;
    private _bi;
    private _bm;
    private _bl;
    private _a4;
    private _a7;
    private _am;
    private _aw;
    private _ah;
    private _a8;
    private _au;
    private _at;
    private _w;
    private _ap;
    private _o;
    private _ai;
    private readonly _q;
    constructor(a: number, b: InPlaceTransform);
    constructor(a: number, b: WorkbookLoadManager, c: Stream, d: BinaryReader, e: InPlaceTransform);
    constructor(a: number, b: WorkbookSaveManager, c: Stream, d: number, e: InPlaceTransform);
    constructor(a: number, ..._rest: any[]);
    parentStreamRaw: IBiffRecordStream;
    writeByte(a: number): void;
    writeByteArray(a: number[]): void;
    writeDouble(a: number): void;
    writeString(a: string, b: LengthType): void;
    protected get_canRead(): boolean;
    readonly canRead: boolean;
    protected get_canSeek(): boolean;
    readonly canSeek: boolean;
    protected get_canWrite(): boolean;
    readonly canWrite: boolean;
    protected disposeCore(a: boolean): void;
    protected get_length(): number;
    readonly length: number;
    flush(): void;
    protected get_position(): number;
    protected set_position(a: number): void;
    position: number;
    read(a: number[], b: number, c: number): number;
    seek(a: number, b: SeekOrigin): number;
    setLength(a: number): void;
    write(a: number[], b: number, c: number): void;
    protected abstract _x(a: Stream, b: number): BiffRecordStream;
    protected abstract _a0(): number;
    protected abstract _ba(a: BinaryReader): number;
    protected abstract _bb(a: BinaryReader): number;
    protected abstract _cu(a: Stream, b: number, c: boolean): void;
    protected abstract _cv(a: Stream, b: number): void;
    abstract writeFullColorExt(a: WorkbookColorInfo, b: ColorableItem): void;
    abstract writeXFExtGradient(a: CellFillGradient): void;
    _addSubStream(a: IBiffRecordStream): void;
    _appendNextRecordIfType(a: number): boolean;
    _capCurrentBlock(): void;
    _getDataSize(a: number, b: LengthType, c: string): number;
    _getStartOfRecord(): number;
    readByteFromBuffer(a: number[], b: number): {
        ret: number;
        p0?: number[];
        p1?: number;
    };
    _readBytes(a: number): number[];
    readBytesFromBuffer(a: number, b: number[], c: number): {
        ret: number[];
        p1?: number[];
        p2?: number;
    };
    _readDouble(): number;
    readDoubleFromBuffer(a: number[], b: number): {
        ret: number;
        p0?: number[];
        p1?: number;
    };
    _readFormattedString(a: LengthType): StringElement;
    _readFormattedString1(a: number): StringElement;
    _tryReadFormattedString(a: number, b: StringElement): {
        ret: boolean;
        p1: StringElement;
    };
    _readFormattedStringBlock(a: number, b: List$1<StringElement>): WorkItem;
    readFormattedStringFromBuffer(a: LengthType, b: number[], c: number): {
        ret: StringElement;
        p1?: number[];
        p2?: number;
    };
    _readFormattedStringFromBuffer1(a: number, b: number[], c: number): {
        ret: StringElement;
        p1?: number[];
        p2?: number;
    };
    _readFormulaCellAddressFromBuffer(a: number[], b: number): {
        ret: CellAddress;
        p0?: number[];
        p1?: number;
    };
    _readFormulaCellAddressRangeFromBuffer(a: number[], b: number): {
        ret: CellAddressRange;
        p0?: number[];
        p1?: number;
    };
    _ao(a: number[], b: number): {
        ret: List$1<CellAddressRange>;
        p0?: number[];
        p1?: number;
    };
    _readInt16(): number;
    _readInt32(): number;
    _readInt16FromBuffer(a: number[], b: number): {
        ret: number;
        p0?: number[];
        p1?: number;
    };
    _readInt32FromBuffer(a: number[], b: number): {
        ret: number;
        p0?: number[];
        p1?: number;
    };
    _readNextBlockType(): Nullable$1<number>;
    _readNullTerminatedUnicodeString(): string;
    _writeNullTerminatedUnicodeString(a: string): void;
    _readRect(): Rect;
    _readUInt16(): number;
    _readUInt16FromBuffer(a: number[], b: number): {
        ret: number;
        p0?: number[];
        p1?: number;
    };
    _readUInt32(): number;
    _readUInt32FromBuffer(a: number[], b: number): {
        ret: number;
        p0?: number[];
        p1?: number;
    };
    _syncWorkbookStreamPosition(): void;
    _write9(a: number): void;
    _write2(a: number[]): void;
    _write10(a: number): void;
    _write12(a: number): void;
    _write11(a: number): void;
    _write17(a: number): void;
    _write18(a: number): void;
    _write19(a: number): void;
    _write14(a: string): void;
    _write15(a: string, b: LengthType): void;
    _write16(a: string, b: LengthType, c: boolean): void;
    _write3(a: CellAddress): void;
    _write4(a: CellAddressRange): void;
    _write1(a: List$1<CellAddressRange>, b?: boolean): number;
    _write5(a: StringElement): void;
    _write8(a: StringElement, b: boolean): void;
    _write6(a: StringElement, b: LengthType): void;
    _write7(a: StringElement, b: LengthType, c: boolean): void;
    _write13(a: MemoryStream): void;
    _writeEMURect(a: Rect): void;
    protected _bw(): void;
    protected _af(a: number): boolean;
    private _ay;
    protected _aa(a: number, b: number): BiffRecordStream_RecordBlockInfo;
    protected _b3(a: BiffRecordStream, b: Stream, c: number): void;
    protected _z(a: number): BiffRecordStream_FormattedStringInfo;
    protected _ak(a: number, b: number): boolean;
    protected _bh(a: number[], b: number, c: number): number;
    protected _ct(a: number): void;
    private _bv;
    private _bx;
    private _by;
    private static _t;
    private static _b0;
    private _b1;
    private _a3;
    private _b2;
    private _b4;
    private _b5;
    private _y;
    private _b6;
    _readFormattingRunsFromBuffer(a: FormattedStringElement, b: number, c: number[], d: number): {
        p2?: number[];
        p3?: number;
    };
    private _bc;
    private _b8;
    private _b9;
    private _cx;
    private _cy;
    private _cz;
    protected abstract _ax(): number;
    protected abstract _bj(): number;
    protected abstract _a1(): number;
    protected abstract _a2(): number;
    protected readonly _an: List$1<BiffRecordStream_RecordBlockInfo>;
    readonly _bytesAvailableInCurrentBlock: number;
    readonly endUnderlyingStreamPosition: number;
    private _loadManager_1;
    _loadManager: WorkbookLoadManager;
    _nextBlockTypeInternal: number;
    protected readonly _bn: Stream;
    readonly _positionInCurrentBlock: number;
    readonly _bf: number;
    private _saveManager;
    saveManager: WorkbookSaveManager;
    readonly _transform: InPlaceTransform;
}
/**
 * @hidden
 */
export declare class BiffRecordStream_RecordBlockInfo extends Base {
    static $t: Type;
    private f;
    private a;
    private c;
    constructor(a: number, b: number, c: number);
    h(): void;
    readonly e: number;
    b: number;
    readonly g: number;
    readonly d: number;
}
/**
 * @hidden
 */
export declare class BiffRecordStream_FormattedStringInfo extends Base {
    static $t: Type;
    c: string;
    a: boolean;
    b: number;
    d: number;
}
/**
 * @hidden
 */
export declare class WorkbookCFInfo extends Base {
    static $t: Type;
    private b;
    a(a: Worksheet): WorksheetCFInfo;
    c(a: Worksheet): IList$1<CondFmtWrapper>;
}
/**
 * @hidden
 */
export declare class WorksheetCFInfo extends Base {
    static $t: Type;
    private e;
    private g;
    constructor(a: Worksheet);
    h(a: CondFmtWrapper): void;
    c(a: number): CondFmtWrapper;
    f(): IList$1<CondFmtWrapper>;
    b: CondFmtWrapper;
    d: Worksheet;
    a: CfExWrapper;
}
/**
 * @hidden
 */
export declare class CondFmtBase extends Base {
    static $t: Type;
    e: number;
    b: boolean;
    d: number;
    a: WorksheetRegion;
    c: IList$1<WorksheetRegion>;
    toString(): string;
}
/**
 * @hidden
 */
export declare class CONDFMTSerializer extends CondFmtBase {
    static $t: Type;
    constructor();
    h: IList$1<ConditionBase>;
    g(): WorksheetRegion;
}
/**
 * @hidden
 */
export declare class CondFmtWrapper extends CondFmtBase {
    static $t: Type;
    constructor();
    i: IList$1<CfWrapper>;
    g: CfExWrapper;
    h: boolean;
}
/**
 * @hidden
 */
export declare class CfWrapper extends Base {
    static $t: Type;
    constructor();
    e: CfCommonProps;
    l: CfTemplateParams;
    m: CfType;
    k: CfOperator;
    n: WorksheetCellFormatData;
    a: Formula;
    b: Formula;
    c: Formula;
    i: CfExWrapper;
    h: CfExNonCf12Wrapper;
    d: CfColorScale;
    g: CFExFilterParams;
    f: CfDataBar;
    j: CfIconSet;
    o(a: CfExWrapper): void;
}
/**
 * @hidden
 */
export declare class CfExWrapper extends Base {
    static $t: Type;
    f: number;
    e: boolean;
    d: boolean;
    c: WorksheetRegion;
    b: CondFmtWrapper;
    a: CfExNonCf12Wrapper;
}
/**
 * @hidden
 */
export declare class CfExNonCf12Wrapper extends Base {
    static $t: Type;
    constructor();
    a: CfCommonProps;
    c: CfTemplateParams;
    e: number;
    b: CfOperator;
    d: WorksheetCellFormatData;
}
/**
 * @hidden
 */
export declare class CfTemplateParams extends Base {
    static $t: Type;
    c: CFExFilterParams;
    d: CFExTextTemplateParams;
    b: CFExDateTemplateParams;
    a: CFExAveragesTemplateParams;
}
/**
 * @hidden
 */
export declare class CfCommonProps extends Base {
    static $t: Type;
    a: boolean;
    d: number;
    b: boolean;
    c: Nullable$1<CfTemplate>;
}
/**
 * @hidden
 */
export declare class CFExFilterParams extends Base {
    static $t: Type;
    b: boolean;
    a: boolean;
    c: number;
}
/**
 * @hidden
 */
export declare class CFExTextTemplateParams extends Base {
    static $t: Type;
    a: CfTextOperator;
}
/**
 * @hidden
 */
export declare class CFExDateTemplateParams extends Base {
    static $t: Type;
    a: CfDateOperator;
}
/**
 * @hidden
 */
export declare class CFExAveragesTemplateParams extends Base {
    static $t: Type;
    a: number;
}
/**
 * @hidden
 */
export declare class CfVo extends Base {
    static $t: Type;
    b: CfValueType;
    a: Formula;
    c: number;
}
/**
 * @hidden
 */
export declare class CfColorScale extends Base {
    static $t: Type;
    b: CfVo[];
    a: WorkbookColorInfo[];
}
/**
 * @hidden
 */
export declare class CfDataBar extends Base {
    static $t: Type;
    d: boolean;
    e: boolean;
    g: number;
    f: number;
    c: WorkbookColorInfo;
    b: CfVo;
    a: CfVo;
}
/**
 * @hidden
 */
export declare class CfIconSet extends Base {
    static $t: Type;
    e: number;
    b: IconSet;
    d: boolean;
    c: boolean;
    a: CfIconCriterion[];
}
/**
 * @hidden
 */
export declare class CfIconCriterion extends Base {
    static $t: Type;
    a: CfVo;
    b: boolean;
}
/**
 * @hidden
 */
export declare class ConditionFactory_BIFF8 extends Base {
    static $t: Type;
    static i(a: CfType, b: Nullable$1<CfTemplate>): FormatConditionType;
    static d(a: FormatConditionType, b: CondFmtWrapper, c: CfWrapper, d: Worksheet): ConditionBase;
    private static a;
    private static o;
    private static n;
    private static j;
    private static p;
    private static f;
    private static e;
    private static c;
    private static k;
    private static b;
    private static l;
    private static h;
    private static m;
    private static q;
    private static g;
    private static s;
    private static t;
    static r(a: Formula, b: SingleTargetFormula, c?: boolean): {
        p1: SingleTargetFormula;
    };
}
/**
 * @hidden
 */
export declare class CFSerializer extends Base {
    static $t: Type;
    private d;
    constructor(a: Worksheet);
    static a(a: Worksheet): CFSerializer;
    b: Worksheet;
    private e;
    readonly c: IList$1<CONDFMTSerializer>;
}
/**
 * @hidden
 */
export declare class Extensions_BIFF8 extends Base {
    static $t: Type;
    static e(a: CfType): FormatConditionType;
    static a(a: CfTemplate, b: boolean): FormatConditionAboveBelow;
    static b(a: CfOperator): FormatConditionOperator;
    static i(a: FormatConditionOperator): CfOperator;
    static c(a: CfTextOperator): FormatConditionTextOperator;
    static d(a: CfWrapper): FormatConditionTimePeriod;
    static f(a: CfValueType): FormatConditionValueType;
    static g(a: CfIconSet): FormatConditionIconSet;
    static r(a: ConditionValue, b: CfVo): void;
    static n(a: ConditionValue): CfVo;
    static q(a: ColorScaleCriterion, b: CfVo, c: WorkbookColorInfo): void;
    static u(a: ColorScaleConditionalFormat, b: CfWrapper): void;
    static v(a: DataBarConditionalFormat, b: CfWrapper): void;
    static w(a: IconSetConditionalFormat, b: CfWrapper): void;
    private static x;
    static t(a: IconSetCriterionCollection, b: CfIconCriterion[]): void;
    static s(a: IconCriterion, b: CfIconCriterion): void;
    static l(a: ConditionBase): CfType;
    static j(a: ConditionBase): CfTemplate;
    static m(a: FormatConditionValueType): CfValueType;
    static p(a: FormatConditionAboveBelow): boolean;
    static k(a: FormatConditionTextOperator): CfTextOperator;
    static h(a: FormatConditionTimePeriod): CfDateOperator;
    static o(a: FormatConditionIconSet): IconSet;
}
/**
 * @hidden
 */
export declare class ConditionPriority extends Base {
    static $t: Type;
    a: ConditionBase;
    b: number;
}
/**
 * @hidden
 */
export declare class ConditionPrioritySortComparer extends Base implements IComparer$1<ConditionPriority> {
    static $t: Type;
    compare(a: ConditionPriority, b: ConditionPriority): number;
}
/**
 * @hidden
 */
export declare class CFUtils extends Base {
    static $t: Type;
    static a(a: WorkbookLoadManagerExcel2003, b?: boolean): Worksheet;
}
/**
 * @hidden
 */
export declare class TableColumnFilterData extends Base {
    static $t: Type;
    readonly f: IList$1<string>;
    readonly b: RelativeIndex;
    readonly a: Filter;
    readonly c: WorksheetTableColumn;
    readonly d: boolean;
    readonly e: boolean;
    constructor(a: number, b: number, c: WorksheetTableColumn);
    constructor(a: number, b: number, c: Filter);
    constructor(a: number, ..._rest: any[]);
}
/**
 * @hidden
 */
export declare class Biff8RecordStream extends BiffRecordStream {
    static $t: Type;
    static readonly _headerSize: number;
    static readonly _maxBlockSize: number;
    private _et;
    private _ew;
    constructor(a: number, b: InPlaceTransform);
    constructor(a: number, b: WorkbookLoadManagerExcel2003);
    constructor(a: number, b: WorkbookLoadManagerExcel2003, c: Stream, d: BinaryReader);
    constructor(a: number, b: WorkbookSaveManagerExcel2003, c: BIFF8RecordType);
    constructor(a: number, b: WorkbookSaveManagerExcel2003, c: Stream, d: BinaryReader);
    constructor(a: number, ..._rest: any[]);
    protected _ax(): number;
    protected _bj(): number;
    protected _x(a: Stream, b: number): BiffRecordStream;
    protected _a1(): number;
    protected disposeCore(a: boolean): void;
    protected _a2(): number;
    protected _a0(): number;
    protected _z(a: number): BiffRecordStream_FormattedStringInfo;
    protected _ba(a: BinaryReader): number;
    protected _bb(a: BinaryReader): number;
    protected _ak(a: number, b: number): boolean;
    protected _cu(a: Stream, b: number, c: boolean): void;
    protected _cv(a: Stream, b: number): void;
    protected _bh(a: number[], b: number, c: number): number;
    _debugLogRecord(): void;
    private static _eu;
    private _fm;
    private static _c4;
    private _ev;
    _readAF12CellIcon(a: Nullable$1<ST_IconSetType>, b: number): {
        p0: Nullable$1<ST_IconSetType>;
        p1: number;
    };
    _writeAF12CellIcon(a: ST_IconSetType, b: number): void;
    _readAF12Criteria(a: Worksheet): Biff8RecordStream_AFDOper;
    _writeAF12Criteria(a: WorksheetRegion, b: Biff8RecordStream_AFDOper): void;
    _readAF12DateInfo(a: Worksheet): FixedDateGroup;
    _writeAF12DateInfo(a: WorksheetRegion, b: FixedDateGroup): void;
    private _dd;
    private _gc;
    _readAFDOperBoolErr(): any;
    _writeAFDOperBoolErr(a: any): void;
    _readAFDOperRk(): number;
    private _fa;
    private _ge;
    _readAutoFilter(a: Worksheet, b: IFilterable): Filter;
    _writeAutoFilter(a: TableColumnFilterData): void;
    _readBes(): any;
    _writeBes(a: any): void;
    private _fo;
    private _gh;
    _readCFColor(): WorkbookColorInfo;
    _writeCFColor(a: WorkbookColorInfo, b: ColorableItem): void;
    _readCFFlag(a: Nullable$1<ST_IconSetType>, b: number): {
        p0: Nullable$1<ST_IconSetType>;
        p1: number;
    };
    _writeCFFlag(a: ST_IconSetType, b: number): void;
    _readCondDataValue(a: ST_SortBy, b: SortDirection): SortCondition;
    _writeCondDataValue$1<T extends ISortable>($t: Type, a: T, b: SortCondition, c: boolean, d: WorksheetSerializationCache): void;
    _readCondFmt(a: Worksheet, b?: boolean): CondFmtWrapper;
    _readCondFmt12(a: Worksheet): CondFmtWrapper;
    _writeCondFmt12(a: CONDFMTSerializer, b: Worksheet): void;
    _readCf(a: WorkbookLoadManagerExcel2003, b: Worksheet): CfWrapper;
    _readCf12(a: WorkbookLoadManagerExcel2003, b: Worksheet): CfWrapper;
    _writeCf12(a: CONDFMTSerializer, b: ConditionBase, c: Worksheet, d: WorkbookSaveManagerExcel2003): void;
    private _hx;
    private _dx;
    _readCfEx(a: WorkbookLoadManagerExcel2003, b: Worksheet): CfExWrapper;
    _readCfExNonCf12(a: WorkbookLoadManagerExcel2003, b: Worksheet): CfExNonCf12Wrapper;
    private _dt;
    private _dm;
    private _gn;
    private _dq;
    private _go;
    private _dl;
    private _gm;
    private _dk;
    private _gl;
    private _dn;
    private _fp;
    private _gp;
    private _di;
    private _fr;
    private _gr;
    private _ee;
    private _du;
    private _gt;
    private _dj;
    private _gk;
    private _ds;
    private _gs;
    _readDXFALC(a: WorksheetCellFormatData, b: boolean, c: boolean, d: boolean, e: boolean, f: boolean, g: boolean, h: boolean, i: boolean, j: boolean): void;
    _writeDXFALC(a: WorksheetCellFormatData, b: boolean, c: boolean, d: boolean, e: boolean, f: boolean, g: boolean, h: boolean, i: boolean, j: boolean): void;
    _readDXFBdr(a: WorksheetCellFormatData, b: boolean, c: boolean, d: boolean, e: boolean, f: boolean, g: boolean): void;
    _writeDXFBdr(a: WorksheetCellFormatData, b: boolean, c: boolean, d: boolean, e: boolean, f: boolean, g: boolean): void;
    _readDXFFntD(a: IWorkbookFont, b: boolean): void;
    _writeDXFFntD(a: IWorkbookFont): void;
    _readDXFN(): WorksheetCellFormatData;
    _writeDXFN(a: WorksheetCellFormatData): void;
    _readDXFN12(): WorksheetCellFormatData;
    private _g0;
    _readDXFN12List(a: number): WorksheetCellFormatData;
    _writeDXFN12List(a: WorksheetCellFormatData): void;
    _readDXFN12NoCB(): WorksheetCellFormatData;
    _writeDXFN12NoCB(a: WorksheetCellFormatData): void;
    _readDXFNum(a: WorksheetCellFormatData, b: boolean, c: boolean): void;
    _writeDXFNum(a: WorksheetCellFormatData, b: boolean): void;
    _readDXFNumIFmt(a: WorksheetCellFormatData, b: boolean): void;
    _writeDXFNumIFmt(a: WorksheetCellFormatData): void;
    _readDXFNumUsr(a: WorksheetCellFormatData): void;
    _writeDXFNumUsr(a: WorksheetCellFormatData): void;
    _readDXFPat(a: WorksheetCellFormatData, b: boolean, c: boolean, d: boolean): void;
    _writeDXFPat(a: WorksheetCellFormatData, b: boolean, c: boolean, d: boolean): void;
    _readDXFProt(a: WorksheetCellFormatData, b: boolean, c: boolean): void;
    _writeDXFProt(a: WorksheetCellFormatData, b: boolean, c: boolean): void;
    _readExtProp(): ExtProp;
    _writeExtProp(a: ExtProp): void;
    _readFeatProtection(): WorksheetProtectedRange;
    _writeFeatProtection(a: WorksheetProtectedRange): void;
    _readFeat11FdaAutoFilter(a: Worksheet, b: WorksheetTableColumn): Filter;
    _writeFeat11FdaAutoFilter(a: WorksheetTableColumn, b: TableColumnFilterData): void;
    private _es;
    _writeFeat11FieldDataItem(a: WorksheetTableColumn, b: SortedList$2<number, TableColumnFilterData>, c: boolean): void;
    private _fc;
    private _hd;
    _ey(): Date;
    _readFontScheme(): FontScheme;
    _writeFontScheme(a: FontScheme): void;
    _readFormat(a: number, b: string): {
        p0: number;
        p1: string;
    };
    _writeFormat(a: number, b: string): void;
    _readFrtHeader(): void;
    _writeFrtHeader(): void;
    protected _ct(a: number): void;
    _readFrtHeaderU(a: Worksheet): WorksheetRegion;
    _writeFrtHeaderU(a: WorksheetRegion): void;
    _readFrtRefHeader(a: Worksheet): WorksheetRegion;
    _readFrtRefHeader1(a: Worksheet, b: BIFF8RecordType): WorksheetRegion;
    _writeFrtRefHeader(a: WorksheetRegion): void;
    _writeFrtRefHeader1(a: WorksheetRegion, b: BIFF8RecordType): void;
    _readFrtRefHeaderNoGrbit(a: Worksheet): WorksheetRegion;
    _writeFrtRefHeaderNoGrbit(a: WorksheetRegion): void;
    _readFullColorExt(): FullColorExtInfo;
    writeFullColorExt(a: WorkbookColorInfo, b: ColorableItem): void;
    _readGradStop(): GradStopInfo;
    _writeGradStop(a: CellFillGradientStop): void;
    _readHorizAlign(): HorizontalCellAlignment;
    _writeHorizAlign(a: HorizontalCellAlignment): void;
    private static readonly _e6;
    private static readonly _e3;
    private static readonly _e2;
    private static readonly _e1;
    private static readonly _e4;
    _readHyperlinkMoniker(): string;
    _writeHyperlinkMoniker(a: string): void;
    _readHyperlinkString(): string;
    _writeHyperlinkString(a: string): void;
    _readList12BlockLevel(a: WorksheetTable): void;
    _writeList12BlockLevel(a: WorksheetTable): void;
    _readList12DisplayName(a: WorksheetTable): void;
    _writeList12DisplayName(a: WorksheetTable): void;
    _readList12TableStyleClientInfo(a: WorksheetTable): void;
    _writeList12TableStyleClientInfo(a: WorksheetTable): void;
    _readLPWideString(): string;
    _writeLPWideString(a: string): void;
    _readRef8U(a: Worksheet): WorksheetRegion;
    _writeRef8U(a: WorksheetRegion): void;
    _readRefU(a: Worksheet): WorksheetRegion;
    _writeRefU(a: WorksheetRegion): void;
    _readRFX(a: Worksheet): WorksheetRegion;
    _writeRFX(a: WorksheetRegion): void;
    _readScript(): FontSuperscriptSubscriptStyle;
    _writeScript(a: FontSuperscriptSubscriptStyle): void;
    private _c2;
    private _hz;
    _readSortCond12$1<T extends ISortable>($t: Type, a: Worksheet, b: SortSettings$1<T>, c: WorksheetRegionAddress, d: (arg1: number) => T): void;
    _writeSortCond12$1<T extends ISortable>($t: Type, a: T, b: SortCondition, c: WorksheetRegion, d: boolean, e: WorksheetSerializationCache): void;
    private _ex;
    private _h1;
    private _f2;
    private _hl;
    private _de;
    private _h2;
    _readTableFeatureType(a: Worksheet, b: WorksheetRegion): WorksheetTable;
    _writeTableFeatureType(a: WorksheetTable, b: SortedList$2<number, TableColumnFilterData>): void;
    private _df;
    private _h4;
    private _c9;
    private _h5;
    _readUnicodeString(a: number): string;
    _writeUnicodeString(a: string): void;
    private static readonly _e5;
    private _fh;
    private _h8;
    private _h7;
    _readXFExtGradient(): XFExtGradientInfo;
    writeXFExtGradient(a: CellFillGradient): void;
    _readXFExtNoFRT(a: WorksheetCellFormatData): void;
    _writeXFExtNoFRT(a: WorksheetCellFormatData): void;
    _readXFProp(): XFProp;
    _writeXFProp(a: XFProp): void;
    private _f8;
    private _ic;
    _readXFPropColor(): XFPropColorInfo;
    _writeXFPropColor(a: WorkbookColorInfo, b: ColorableItem): void;
    _readXFPropGradientFill(): XFPropGradientFill;
    _writeXFPropGradientFill(a: XFPropGradientFill): void;
    _readXFPropGradientStop(): XFPropGradientStopLoaded;
    _writeXFPropGradientStop(a: XFPropGradientStop): void;
    _readXFProps(): XFProp[];
    static _applyXFProps(a: Workbook, b: WorksheetCellFormatData, c: boolean, d: XFProp[]): void;
    _writeXFProps(a: WorksheetCellFormatData): void;
    _readVertAlign(): VerticalCellAlignment;
    _writeVertAlign(a: VerticalCellAlignment): void;
    _readXLUnicodeString(): string;
    _writeXLUnicodeString(a: string): void;
    _readXLUnicodeStringNoCch(a: number): string;
    _writeXLUnicodeStringNoCch(a: string): void;
    _writeXLUnicodeStringNoCch1(a: string, b: boolean): void;
    private _e0;
    private _il;
    private _g2;
    readonly _loadManagerBiff8: WorkbookLoadManagerExcel2003;
    _nextBlockType: BIFF8RecordType;
    readonly _parentStream: Biff8RecordStream;
    readonly _recordType: BIFF8RecordType;
    readonly _saveManagerBiff8: WorkbookSaveManagerExcel2003;
}
/**
 * @hidden
 */
export declare class Biff8RecordStream_AFDOper extends Base {
    static $t: Type;
    c: number;
    a: ST_FilterOperator;
    l: any;
    m: string;
    constructor(a: number);
    constructor(a: number, b: string);
    constructor(a: number, b: any, c: ST_FilterOperator);
    constructor(a: number, b: WorkbookSaveManager, c: CustomFilterCondition);
    constructor(a: number, ..._rest: any[]);
    private n;
    readonly k: any;
    readonly b: boolean;
}
/**
 * @hidden
 */
export declare class Biff8RecordStream_Stxp extends Base {
    static $t: Type;
    e: number;
    a: Biff8RecordStream_Ts;
    f: number;
    g: number;
    d: number;
    c: number;
    b: number;
}
/**
 * @hidden
 */
export declare class Biff8RecordStream_Ts extends Base {
    static $t: Type;
    a: boolean;
    b: boolean;
}
/**
 * @hidden
 */
export declare class ObjExtensionMethods extends Base {
    static $t: Type;
    static w(a: Obj, b: WorkbookLoadManagerExcel2003): void;
    static an(a: Obj, b: WorkbookSaveManagerExcel2003): void;
    static a(a: WorkbookLoadManagerExcel2003): FtCbls;
    static x(a: FtCbls, b: WorkbookSaveManagerExcel2003): void;
    static b(a: WorkbookLoadManagerExcel2003, b: Obj): FtCblsData;
    static y(a: FtCblsData, b: WorkbookSaveManagerExcel2003, c: Obj): void;
    static c(a: WorkbookLoadManagerExcel2003): FtCf;
    static z(a: FtCf, b: WorkbookSaveManagerExcel2003): void;
    static d(a: WorkbookLoadManagerExcel2003): FtCmo;
    static aa(a: FtCmo, b: WorkbookSaveManagerExcel2003): void;
    static e(a: WorkbookLoadManagerExcel2003): FtEdoData;
    static ab(a: FtEdoData, b: WorkbookSaveManagerExcel2003): void;
    static f(a: WorkbookLoadManagerExcel2003): FtGboData;
    static ac(a: FtGboData, b: WorkbookSaveManagerExcel2003): void;
    static g(a: WorkbookLoadManagerExcel2003): FtGmo;
    static ad(a: FtGmo, b: WorkbookSaveManagerExcel2003): void;
    static h(a: WorkbookLoadManagerExcel2003, b: Obj): FtLbsData;
    static ae(a: FtLbsData, b: WorkbookSaveManagerExcel2003, c: Obj): void;
    static af(a: FtMacro, b: WorkbookSaveManagerExcel2003): void;
    static i(a: WorkbookLoadManagerExcel2003): FtMacro;
    static j(a: WorkbookLoadManagerExcel2003): FtNts;
    static ag(a: FtNts, b: WorkbookSaveManagerExcel2003): void;
    static ah(a: FtPictFmla, b: WorkbookSaveManagerExcel2003, c: Obj): void;
    static k(a: WorkbookLoadManagerExcel2003, b: Obj): FtPictFmla;
    static l(a: WorkbookLoadManagerExcel2003): FtPioGrbit;
    static ai(a: FtPioGrbit, b: WorkbookSaveManagerExcel2003): void;
    static m(a: WorkbookLoadManagerExcel2003): FtRbo;
    static aj(a: FtRbo, b: WorkbookSaveManagerExcel2003): void;
    static n(a: WorkbookLoadManagerExcel2003): FtRboData;
    static ak(a: FtRboData, b: WorkbookSaveManagerExcel2003): void;
    static o(a: WorkbookLoadManagerExcel2003): FtSbs;
    static al(a: FtSbs, b: WorkbookSaveManagerExcel2003): void;
    static q(a: WorkbookLoadManagerExcel2003): ObjectParsedFormula;
    static ao(a: ObjectParsedFormula, b: WorkbookSaveManagerExcel2003): void;
    static r(a: WorkbookLoadManagerExcel2003): ObjFmla;
    static ap(a: ObjFmla, b: WorkbookSaveManagerExcel2003): void;
    static aq(a: ObjLinkFmla, b: WorkbookSaveManagerExcel2003, c: Obj): void;
    static s(a: WorkbookLoadManagerExcel2003, b: Obj): ObjLinkFmla;
    static u(a: WorkbookLoadManagerExcel2003): PictFmlaKey;
    static as(a: PictFmlaKey, b: WorkbookSaveManagerExcel2003): void;
    static v(a: WorkbookLoadManagerExcel2003, b: number): Rgce;
    static at(a: Rgce, b: WorkbookSaveManagerExcel2003): void;
    static p(a: WorkbookLoadManagerExcel2003): LbsDropData;
    static am(a: LbsDropData, b: Biff8RecordStream): void;
    static t(a: WorkbookLoadManagerExcel2003): PictFmlaEmbedInfo;
    static ar(a: PictFmlaEmbedInfo, b: Biff8RecordStream): void;
}
/**
 * @hidden
 */
export declare class ObjUtilities extends Base {
    static $t: Type;
    static a(a: WorkbookLoadManagerExcel2003, b: OBJRecordType): boolean;
    static b(a: WorkbookLoadManagerExcel2003, b: OBJRecordType, c: boolean): boolean;
}
/**
 * @hidden
 */
export declare abstract class EscherRecordBase extends Base implements IEscherRecord {
    static $t: Type;
    private c;
    private f;
    private h;
    private j;
    constructor(a: number, b: number, c: number);
    d: EscherRecordContainerBase;
    i: number;
    k: number;
    toString(): string;
    abstract l(a: WorkbookLoadManagerExcel2003): void;
    m(a: WorkbookSaveManagerExcel2003): void;
    abstract readonly e: EscherRecordType;
    static b(a: WorkbookLoadManagerExcel2003, b?: EscherRecordContainerBase): EscherRecordBase;
    private static a;
}
/**
 * @hidden
 */
export declare class BLIP extends EscherRecordBase {
    static $t: Type;
    private static v;
    private static w;
    private t;
    private r;
    private p;
    private o;
    private x;
    private u;
    private n;
    static staticInit(): void;
    constructor(a: number, b: ExcelImage);
    constructor(a: number, b: EscherRecordType, c: number, d: number, e: number);
    constructor(a: number, ..._rest: any[]);
    l(a: WorkbookLoadManagerExcel2003): void;
    m(a: WorkbookSaveManagerExcel2003): void;
    private z;
    private aa;
    private ab;
    private ac;
    private ad;
    private ae;
    readonly s: BLIPType;
    readonly q: ExcelImage;
    readonly y: Guid;
    protected get_e(): EscherRecordType;
    readonly e: EscherRecordType;
}
/**
 * @hidden
 */
export declare abstract class EscherRecordContainerBase extends EscherRecordBase {
    static $t: Type;
    private p;
    constructor(a: number, b: number, c: number);
    r(a: EscherRecordBase): void;
    n<T extends EscherRecordBase>($t: Type): T;
    l(a: WorkbookLoadManagerExcel2003): void;
    m(a: WorkbookSaveManagerExcel2003): void;
    toString(): string;
    protected abstract o(a: EscherRecordBase): boolean;
    readonly q: number;
}
/**
 * @hidden
 */
export declare class BLIPStoreContainer extends EscherRecordContainerBase {
    static $t: Type;
    constructor(a: number, b: List$1<WorkbookSerializationDataExcel2003_ImageHolder>);
    constructor(a: number, b: number, c: number, d: number);
    constructor(a: number, ..._rest: any[]);
    protected o(a: EscherRecordBase): boolean;
    protected get_e(): EscherRecordType;
    readonly e: EscherRecordType;
}
/**
 * @hidden
 */
export declare class BLIPStoreEntry extends EscherRecordBase {
    static $t: Type;
    private p;
    private o;
    private r;
    private s;
    private t;
    private v;
    private u;
    private q;
    private n;
    constructor(a: number, b: BLIP, c: number);
    constructor(a: number, b: number, c: number, d: number);
    constructor(a: number, ..._rest: any[]);
    l(a: WorkbookLoadManagerExcel2003): void;
    m(a: WorkbookSaveManagerExcel2003): void;
    toString(): string;
    protected get_e(): EscherRecordType;
    readonly e: EscherRecordType;
}
/**
 * @hidden
 */
export declare class CalloutRule extends EscherRecordBase implements ICalloutRule {
    static $t: Type;
    private n;
    private o;
    constructor(a: number, b: number, c: number);
    l(a: WorkbookLoadManagerExcel2003): void;
    m(a: WorkbookSaveManagerExcel2003): void;
    shapeId: number;
    protected get_e(): EscherRecordType;
    readonly e: EscherRecordType;
}
/**
 * @hidden
 */
export declare class ChildAnchor extends EscherRecordBase {
    static $t: Type;
    private n;
    constructor(a: number, b: WorksheetShape);
    constructor(a: number, b: number, c: number, d: number);
    constructor(a: number, ..._rest: any[]);
    l(a: WorkbookLoadManagerExcel2003): void;
    m(a: WorkbookSaveManagerExcel2003): void;
    toString(): string;
    protected get_e(): EscherRecordType;
    readonly e: EscherRecordType;
    readonly o: Rect;
}
/**
 * @hidden
 */
export declare class ClientAnchor extends EscherRecordBase {
    static $t: Type;
    private n;
    private s;
    private t;
    private o;
    private p;
    constructor(a: number, b: WorksheetShape);
    constructor(a: number, b: number, c: number, d: number);
    constructor(a: number, ..._rest: any[]);
    private static q;
    private static r;
    l(a: WorkbookLoadManagerExcel2003): void;
    m(a: WorkbookSaveManagerExcel2003): void;
    toString(): string;
    protected get_e(): EscherRecordType;
    readonly e: EscherRecordType;
}
/**
 * @hidden
 */
export declare class ClientData extends EscherRecordBase {
    static $t: Type;
    private o;
    constructor(a: number, b: WorksheetShape);
    constructor(a: number, b: number, c: number, d: number);
    constructor(a: number, ..._rest: any[]);
    l(a: WorkbookLoadManagerExcel2003): void;
    private n;
    m(a: WorkbookSaveManagerExcel2003): void;
    protected get_e(): EscherRecordType;
    readonly e: EscherRecordType;
}
/**
 * @hidden
 */
export declare class ClientTextBox extends EscherRecordBase {
    static $t: Type;
    private n;
    constructor(a: number, b: WorksheetShape);
    constructor(a: number, b: number, c: number, d: number);
    constructor(a: number, ..._rest: any[]);
    l(a: WorkbookLoadManagerExcel2003): void;
    m(a: WorkbookSaveManagerExcel2003): void;
    protected get_e(): EscherRecordType;
    readonly e: EscherRecordType;
}
/**
 * @hidden
 */
export declare class ConnectorRule extends EscherRecordBase {
    static $t: Type;
    constructor(a: number, b: number, c: number);
    l(a: WorkbookLoadManagerExcel2003): void;
    m(a: WorkbookSaveManagerExcel2003): void;
    protected get_e(): EscherRecordType;
    readonly e: EscherRecordType;
}
/**
 * @hidden
 */
export declare class Drawing extends EscherRecordBase {
    static $t: Type;
    private o;
    private n;
    constructor(a: number, b: WorkbookSaveManagerExcel2003, c: Worksheet);
    constructor(a: number, b: number, c: number, d: number);
    constructor(a: number, ..._rest: any[]);
    l(a: WorkbookLoadManagerExcel2003): void;
    m(a: WorkbookSaveManagerExcel2003): void;
    toString(): string;
    protected get_e(): EscherRecordType;
    readonly e: EscherRecordType;
}
/**
 * @hidden
 */
export declare class DrawingContainer extends EscherRecordContainerBase {
    static $t: Type;
    constructor(a: number, b: WorkbookSaveManagerExcel2003);
    constructor(a: number, b: number, c: number, d: number);
    constructor(a: number, ..._rest: any[]);
    protected o(a: EscherRecordBase): boolean;
    protected get_e(): EscherRecordType;
    readonly e: EscherRecordType;
}
/**
 * @hidden
 */
export declare class DrawingGroup extends EscherRecordBase {
    static $t: Type;
    constructor(a: number, b: IList$1<Sheet>);
    constructor(a: number, b: number, c: number, d: number);
    constructor(a: number, ..._rest: any[]);
    l(a: WorkbookLoadManagerExcel2003): void;
    m(a: WorkbookSaveManagerExcel2003): void;
    toString(): string;
    protected get_e(): EscherRecordType;
    readonly e: EscherRecordType;
}
/**
 * @hidden
 */
export declare class DrawingGroupContainer extends EscherRecordContainerBase {
    static $t: Type;
    constructor(a: number, b: WorkbookSaveManagerExcel2003);
    constructor(a: number, b: number, c: number, d: number);
    constructor(a: number, ..._rest: any[]);
    protected o(a: EscherRecordBase): boolean;
    protected get_e(): EscherRecordType;
    readonly e: EscherRecordType;
}
/**
 * @hidden
 */
export declare class GroupContainer extends EscherRecordContainerBase {
    static $t: Type;
    constructor(a: number, b: WorkbookSaveManagerExcel2003, c: Worksheet);
    constructor(a: number, b: WorkbookSaveManagerExcel2003, c: WorksheetShapeGroup);
    constructor(a: number, b: number, c: number, d: number);
    constructor(a: number, ..._rest: any[]);
    private s;
    l(a: WorkbookLoadManagerExcel2003): void;
    protected o(a: EscherRecordBase): boolean;
    protected get_e(): EscherRecordType;
    readonly e: EscherRecordType;
}
/**
 * @hidden
 */
export declare class GroupShape extends EscherRecordBase {
    static $t: Type;
    private n;
    constructor(a: number, b: WorksheetShapeGroup);
    constructor(a: number, b: number, c: number, d: number);
    constructor(a: number, ..._rest: any[]);
    l(a: WorkbookLoadManagerExcel2003): void;
    m(a: WorkbookSaveManagerExcel2003): void;
    toString(): string;
    protected get_e(): EscherRecordType;
    readonly e: EscherRecordType;
    readonly o: Rect;
}
/**
 * @hidden
 */
export declare abstract class PropertyTableBase extends EscherRecordBase {
    static $t: Type;
    private n;
    constructor(a: number, b: List$1<PropertyTableBase_PropertyValue>);
    constructor(a: number, b: number, c: number, d: number);
    constructor(a: number, ..._rest: any[]);
    l(a: WorkbookLoadManagerExcel2003): void;
    m(a: WorkbookSaveManagerExcel2003): void;
    protected readonly o: List$1<PropertyTableBase_PropertyValue>;
}
/**
 * @hidden
 */
export declare class PropertyTable1 extends PropertyTableBase {
    static $t: Type;
    constructor(a: number, b: WorksheetShape);
    constructor(a: number, b: List$1<PropertyTableBase_PropertyValue>);
    constructor(a: number, b: number, c: number, d: number);
    constructor(a: number, ..._rest: any[]);
    l(a: WorkbookLoadManagerExcel2003): void;
    private static c3;
    private c4;
    protected get_e(): EscherRecordType;
    readonly e: EscherRecordType;
}
/**
 * @hidden
 */
export declare class PropertyTable2 extends PropertyTableBase {
    static $t: Type;
    constructor(a: number, b: WorksheetShape);
    constructor(a: number, b: number, c: number, d: number);
    constructor(a: number, ..._rest: any[]);
    l(a: WorkbookLoadManagerExcel2003): void;
    protected get_e(): EscherRecordType;
    readonly e: EscherRecordType;
}
/**
 * @hidden
 */
export declare class PropertyTable3 extends PropertyTableBase {
    static $t: Type;
    constructor(a: number, b: WorksheetShape);
    constructor(a: number, b: List$1<PropertyTableBase_PropertyValue>);
    constructor(a: number, b: number, c: number, d: number);
    constructor(a: number, ..._rest: any[]);
    l(a: WorkbookLoadManagerExcel2003): void;
    private c3;
    protected get_e(): EscherRecordType;
    readonly e: EscherRecordType;
}
/**
 * @hidden
 */
export declare class Regroup extends EscherRecordBase {
    static $t: Type;
    private n;
    private o;
    constructor(a: number, b: number, c: number);
    l(a: WorkbookLoadManagerExcel2003): void;
    m(a: WorkbookSaveManagerExcel2003): void;
    toString(): string;
    protected get_e(): EscherRecordType;
    readonly e: EscherRecordType;
}
/**
 * @hidden
 */
export declare class Selections extends EscherRecordBase {
    static $t: Type;
    constructor(a: number, b: number, c: number);
    l(a: WorkbookLoadManagerExcel2003): void;
    m(a: WorkbookSaveManagerExcel2003): void;
    protected get_e(): EscherRecordType;
    readonly e: EscherRecordType;
}
/**
 * @hidden
 */
export declare class EscherShape extends EscherRecordBase {
    static $t: Type;
    private o;
    private n;
    constructor(a: number, b: WorksheetShape);
    constructor(a: number, b: number, c: number, d: number);
    constructor(a: number, ..._rest: any[]);
    l(a: WorkbookLoadManagerExcel2003): void;
    m(a: WorkbookSaveManagerExcel2003): void;
    toString(): string;
    protected get_e(): EscherRecordType;
    readonly e: EscherRecordType;
}
/**
 * @hidden
 */
export declare class Shape_PatriarchShape extends WorksheetShapeGroup {
    static $t: Type;
    private _d9;
    constructor(a: WorkbookSaveManagerExcel2003, b: Worksheet);
    _getBoundsInTwips1(a: PositioningOptions): Rect;
    protected get__a8(): boolean;
    protected get__cn(): number;
    protected set__cn(a: number): void;
}
/**
 * @hidden
 */
export declare class ShapeContainer extends EscherRecordContainerBase {
    static $t: Type;
    constructor(a: number, b: WorkbookSaveManagerExcel2003, c: WorksheetShape);
    constructor(a: number, b: number, c: number, d: number);
    constructor(a: number, ..._rest: any[]);
    l(a: WorkbookLoadManagerExcel2003): void;
    private static s;
    protected o(a: EscherRecordBase): boolean;
    protected get_e(): EscherRecordType;
    readonly e: EscherRecordType;
    private static t;
    private static u;
}
/**
 * @hidden
 */
export declare class SolverContainer extends EscherRecordContainerBase {
    static $t: Type;
    constructor(a: number, b: Worksheet);
    constructor(a: number, b: number, c: number, d: number);
    constructor(a: number, ..._rest: any[]);
    l(a: WorkbookLoadManagerExcel2003): void;
    protected o(a: EscherRecordBase): boolean;
    protected get_e(): EscherRecordType;
    readonly e: EscherRecordType;
}
/**
 * @hidden
 */
export declare class SplitMenuColors extends EscherRecordBase {
    static $t: Type;
    constructor(a: number);
    constructor(a: number, b: number, c: number, d: number);
    constructor(a: number, ..._rest: any[]);
    l(a: WorkbookLoadManagerExcel2003): void;
    m(a: WorkbookSaveManagerExcel2003): void;
    protected get_e(): EscherRecordType;
    readonly e: EscherRecordType;
}
/**
 * @hidden
 */
export declare abstract class Biff8RecordBase extends BiffRecordBase$3<BIFF8RecordType, WorkbookLoadManagerExcel2003, WorkbookSaveManagerExcel2003> {
    static $t: Type;
    constructor();
    private static l;
    static readonly m: (type: BIFF8RecordType) => BiffRecordBase$3<BIFF8RecordType, WorkbookLoadManagerExcel2003, WorkbookSaveManagerExcel2003>;
    static j(a: BIFF8RecordType): BIFF8RecordType;
    static k(a: BIFF8RecordType): BiffRecordBase$3<BIFF8RecordType, WorkbookLoadManagerExcel2003, WorkbookSaveManagerExcel2003>;
    protected get_n(): boolean;
    readonly n: boolean;
}
/**
 * @hidden
 */
export declare class Record1904 extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class ACTIVEXMARKERRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class ARRAYRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare abstract class AUTOFILTERRecordBase extends Biff8RecordBase {
    static $t: Type;
}
/**
 * @hidden
 */
export declare class AUTOFILTER12Record extends AUTOFILTERRecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class AUTOFILTERRecord extends AUTOFILTERRecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class AUTOFILTERINFORecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class BACKUPRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class BITMAPRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare abstract class CellValueRecordBase extends Biff8RecordBase {
    static $t: Type;
    protected abstract o(a: WorkbookLoadManagerExcel2003, b: number[], c: number, d: any, e: any): {
        p1?: number[];
        p2?: number;
        p3: any;
        p4: any;
    };
    protected abstract p(a: WorkbookSaveManagerExcel2003, b: MemoryStream): void;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
}
/**
 * @hidden
 */
export declare class BLANKRecord extends CellValueRecordBase {
    static $t: Type;
    protected o(a: WorkbookLoadManagerExcel2003, b: number[], c: number, d: any, e: any): {
        p1?: number[];
        p2?: number;
        p3: any;
        p4: any;
    };
    protected p(a: WorkbookSaveManagerExcel2003, b: MemoryStream): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class BOFRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_n(): boolean;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class BOOKBOOLRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class BOOKEXTRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class BOOLERRRecord extends CellValueRecordBase {
    static $t: Type;
    protected o(a: WorkbookLoadManagerExcel2003, b: number[], c: number, d: any, e: any): {
        p1?: number[];
        p2?: number;
        p3: any;
        p4: any;
    };
    protected p(a: WorkbookSaveManagerExcel2003, b: MemoryStream): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class BOTTOMMARGINRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class BOUNDSHEETRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class CALCCOUNTRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class CALCMODERecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class CF12Record extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class CFEXRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class CFRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class CODEPAGERecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class COLINFORecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class CONDFMT12Record extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class CONDFMTRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class COUNTRYRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class CRNRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class DBCELLRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class DBCELLRecord_DBCELLInfo extends Base {
    static $t: Type;
    private a;
    private c;
    constructor(a: number, b: List$1<number>);
    readonly b: List$1<number>;
    readonly d: number;
}
/**
 * @hidden
 */
export declare class DEFAULTROWHEIGHTRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class DEFCOLWIDTHRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class DELTARecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class DIMENSIONSRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class DSFRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class DVALRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class DVRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
    private static o;
    private static p;
}
/**
 * @hidden
 */
export declare class DXFRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    static o(a: WorkbookLoadManagerExcel2003, b: DXFRecordInfo): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class DXFRecordInfo extends Base {
    static $t: Type;
    b: boolean;
    a: XFProp[];
}
/**
 * @hidden
 */
export declare class EOFRecord extends Biff8RecordBase {
    static $t: Type;
    protected get_e(): boolean;
    h(a: WorkbookLoadManagerExcel2003): void;
    a(a: WorkbookLoadManagerExcel2003): WorkItem;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class EXCEL9FILERecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class EXTERNNAMERecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class EXTERNSHEETRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class EXTSSTRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class FEAT11Record extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class FEAT12Record extends FEAT11Record {
    static $t: Type;
    protected get_d(): BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class FEATHEADR11Record extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class FEATHEADRRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class FEATRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class FILEPASSRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    private static q;
    protected get_n(): boolean;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class FILESHARINGRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class FILTERMODERecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class FNGROUPCOUNTRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class FONTRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    static o(a: WorkbookLoadManagerExcel2003, b: FONTRecordInfo): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class FONTRecordInfo extends Base {
    static $t: Type;
    f: number;
    i: number;
    g: number;
    e: number;
    h: number;
    c: number;
    b: number;
    a: number;
    d: string;
}
/**
 * @hidden
 */
export declare class FOOTERRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class FORMATRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class FORMULARecord extends CellValueRecordBase {
    static $t: Type;
    protected o(a: WorkbookLoadManagerExcel2003, b: number[], c: number, d: any, e: any): {
        p1?: number[];
        p2?: number;
        p3: any;
        p4: any;
    };
    protected p(a: WorkbookSaveManagerExcel2003, b: MemoryStream): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
    private static s;
    private static t;
    private static q;
    private static r;
}
/**
 * @hidden
 */
export declare class GRIDSETRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class GUTSRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class HCENTERRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class HEADERFOOTERRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class HEADERRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class HFPICTURERecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class HIDEOBJRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class HLINKRecord extends Biff8RecordBase {
    static $t: Type;
    private static readonly o;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class HLINKTOOLTIPRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class HORIZONTALPAGEBREAKSRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class INDEXRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class INTERFACEENDRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class INTERFACEHDRRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_n(): boolean;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class ITERATIONRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class LABELRecord extends CellValueRecordBase {
    static $t: Type;
    protected o(a: WorkbookLoadManagerExcel2003, b: number[], c: number, d: any, e: any): {
        p1?: number[];
        p2?: number;
        p3: any;
        p4: any;
    };
    protected p(a: WorkbookSaveManagerExcel2003, b: MemoryStream): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class LABELSSTRecord extends CellValueRecordBase {
    static $t: Type;
    protected o(a: WorkbookLoadManagerExcel2003, b: number[], c: number, d: any, e: any): {
        p1?: number[];
        p2?: number;
        p3: any;
        p4: any;
    };
    protected p(a: WorkbookSaveManagerExcel2003, b: MemoryStream): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class LEFTMARGINRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class LIST12Record extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class MERGEDCELLSRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class MMSRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class MSODRAWINGGROUPRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class MSODRAWINGRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class MSODRAWINGSELECTIONRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare abstract class MultipleCellValueRecordBase extends Biff8RecordBase {
    static $t: Type;
    protected abstract o(a: WorkbookLoadManagerExcel2003, b: number, c: number[], d: number): {
        ret: CellDefinition[];
        p2?: number[];
        p3?: number;
    };
    protected abstract p(a: WorkbookSaveManagerExcel2003, b: CellDefinition[]): void;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
}
/**
 * @hidden
 */
export declare class MULBLANKRecord extends MultipleCellValueRecordBase {
    static $t: Type;
    protected o(a: WorkbookLoadManagerExcel2003, b: number, c: number[], d: number): {
        ret: CellDefinition[];
        p2?: number[];
        p3?: number;
    };
    protected p(a: WorkbookSaveManagerExcel2003, b: CellDefinition[]): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class MULRKRecord extends MultipleCellValueRecordBase {
    static $t: Type;
    protected o(a: WorkbookLoadManagerExcel2003, b: number, c: number[], d: number): {
        ret: CellDefinition[];
        p2?: number[];
        p3?: number;
    };
    protected p(a: WorkbookSaveManagerExcel2003, b: CellDefinition[]): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class CellDefinition extends ValueType {
    static $t: Type;
    constructor(a: number, b: number, c: any);
    constructor();
    constructor(a: number, ..._rest: any[]);
    readonly a: any;
    readonly b: number;
}
/**
 * @hidden
 */
export declare class NAMEEXTRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class NAMERecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class NOTERecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class NUMBERRecord extends CellValueRecordBase {
    static $t: Type;
    protected o(a: WorkbookLoadManagerExcel2003, b: number[], c: number, d: any, e: any): {
        p1?: number[];
        p2?: number;
        p3: any;
        p4: any;
    };
    protected p(a: WorkbookSaveManagerExcel2003, b: MemoryStream): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class OBJPROTECTRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class OBJRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class OBPROJRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class OLESIZERecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class PAGELAYOUTINFORecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class PALETTERecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class PANERecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class PASSWORDRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class PLSRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class PRECISIONRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class PRINTGRIDLINESRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class PRINTHEADERSRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class PROT4REVPASSRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class PROT4REVRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class PROTECTRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class RECALCIDRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class REFMODERecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class REFRESHALLRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class RIGHTMARGINRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class RKRecord extends CellValueRecordBase {
    static $t: Type;
    protected o(a: WorkbookLoadManagerExcel2003, b: number[], c: number, d: any, e: any): {
        p1?: number[];
        p2?: number;
        p3: any;
        p4: any;
    };
    protected p(a: WorkbookSaveManagerExcel2003, b: MemoryStream): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class ROWRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class RSTRINGRecord extends CellValueRecordBase {
    static $t: Type;
    protected o(a: WorkbookLoadManagerExcel2003, b: number[], c: number, d: any, e: any): {
        p1?: number[];
        p2?: number;
        p3: any;
        p4: any;
    };
    protected p(a: WorkbookSaveManagerExcel2003, b: MemoryStream): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class SAVERECALCRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class SCENPROTECTRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class SCLRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class SELECTIONRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class SETUPRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class SHEETEXTRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class SHRFMLARecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class SORTDATA12Record extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    private static o;
    i(a: WorkbookSaveManagerExcel2003): void;
    private static p;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class SSTRecord extends Biff8RecordBase {
    static $t: Type;
    protected get_e(): boolean;
    h(a: WorkbookLoadManagerExcel2003): void;
    a(a: WorkbookLoadManagerExcel2003): WorkItem;
    b(a: WorkbookSaveManagerExcel2003): WorkItem;
    i(a: WorkbookSaveManagerExcel2003): void;
    private static o;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class STANDARDWIDTHRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class STRINGRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class STYLEEXTRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    static o(a: WorkbookLoadManagerExcel2003, b: STYLEEXTRecordInfo): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class STYLEEXTRecordInfo extends Base {
    static $t: Type;
    c: number;
    b: number;
    e: number;
    d: string;
    a: XFProp[];
}
/**
 * @hidden
 */
export declare class STYLERecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    static o(a: WorkbookLoadManagerExcel2003, b: STYLERecordInfo): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class STYLERecordInfo extends Base {
    static $t: Type;
    d: number;
    b: boolean;
    a: BuiltInStyleType;
    c: number;
    e: string;
}
/**
 * @hidden
 */
export declare class SUPBOOKRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class TABIDRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class TABLERecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class TABLESTYLEELEMENTRecord extends Biff8RecordBase {
    static $t: Type;
    protected get_e(): boolean;
    h(a: WorkbookLoadManagerExcel2003): void;
    a(a: WorkbookLoadManagerExcel2003): WorkItem;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class TABLESTYLERecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class TABLESTYLESRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class TEMPLATERecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class THEMERecord extends Biff8RecordBase {
    static $t: Type;
    protected get_e(): boolean;
    h(a: WorkbookLoadManagerExcel2003): void;
    a(a: WorkbookLoadManagerExcel2003): WorkItem;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class TOPMARGINRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class TXORecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    private static o;
    i(a: WorkbookSaveManagerExcel2003): void;
    private static p;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class USERBVIEWRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class USERSVIEWBEGINRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class USERSVIEWENDRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class USESELFSRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class VBAOBJECTNAMERecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class VCENTERRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class VERTICALPAGEBREAKSRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class WINDOW1Record extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class WINDOW2Record extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class WINDOWPROTECTRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class WRITEACCESSRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class WRITEPROTRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class WSBOOLRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class XCTRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class XFCRCRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class XFEXTRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    static o(a: WorkbookLoadManagerExcel2003, b: XFEXTRecordInfo): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class XFEXTRecordInfo extends Base {
    static $t: Type;
    c: number;
    b: number;
    d: number;
    a: ExtProp[];
}
/**
 * @hidden
 */
export declare class XFRecord extends Biff8RecordBase {
    static $t: Type;
    h(a: WorkbookLoadManagerExcel2003): void;
    static o(a: WorkbookLoadManagerExcel2003, b: XFRecordInfo): void;
    i(a: WorkbookSaveManagerExcel2003): void;
    protected get_d(): BIFF8RecordType;
    readonly d: BIFF8RecordType;
}
/**
 * @hidden
 */
export declare class XFRecord_XFContext extends Base {
    static $t: Type;
    readonly a: WorksheetCellFormatData;
    readonly c: number;
    readonly b: List$1<ExtProp>;
    constructor(a: WorksheetCellFormatData, b: number, c: List$1<ExtProp>);
}
/**
 * @hidden
 */
export declare class XFRecordInfo extends Base {
    static $t: Type;
    d: number;
    c: number;
    b: number;
    e: number;
    a: number;
    f: number;
    g: number;
    h: number;
    j: number;
    i: number;
}
