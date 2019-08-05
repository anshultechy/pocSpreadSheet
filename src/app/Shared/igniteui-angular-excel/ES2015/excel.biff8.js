/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ValueType, markEnum, Base, markType, Stream, Nullable$1, callStaticConstructors, Number_$type, typeCast, fromEnum, Boolean_$type, enumGetBox, markStruct, typeGetValue, EnumUtil, String_$type, Delegate_$type, getInstanceType, Point_$type, Date_$type, getEnumerator } from "../../igniteui-angular-core/ES2015/type";
import { WorkbookLoadManager, WorkbookSaveManager, CellContext, CellDataContext, WorksheetCellFormatData, WorkbookStyle, Workbook, SingleTargetFormula, WorksheetCell, WorkbookStyleCollection, WorkbookFontData, WorkbookBuiltInStyle, ExcelImage, WorksheetShape, WorksheetChart, WorksheetReferenceCollection, WorkbookFormatCollection, Worksheet, Formula, WorksheetRow, DataValidationRule, FormulaContext, FormulaToken, SharedTokenConverter, TokenReferenceResolver, FormulaTokenVisitor$1, FormulaTokenVisitor, WorksheetHyperlink, Sheet, PrintOptions, WorksheetTable, WorksheetTableColumn, MultipleCellBlankInfo, MultipleCellRKInfo, ArrayInteriorFormula, WorksheetRegion, ExcelUtils, MultipleCellValueInfo, ErrorValue, StringElementIndex, ArrayFormula, DataTableInteriorFormula, WorksheetColumnBlock, CustomView, DisplayOptions, WorkbookReferenceBase, NamedReferenceBase, CurrentWorkbookReference, WorksheetPaneSelection, WorksheetTableStyle, WorksheetCellComment, SortedList$2, WorksheetFilterSettings, UtilitiesInt32Comparer, RelativeIndex, ConditionBase, CellAddressRange, WorkbookColorInfo, WorksheetTableStyleArea_$type, ExpToken, FunctionVOperator, NameToken, StrToken, TblToken, WorksheetShapeVisitor$2, PropertyTableBase_PropertyValue, ShapeFill, ShapeOutline, WorksheetShapeWithText, UnknownShape, WorksheetImage, PredefinedShapeType_$type, Constant, AttrTokenBase, CellAddress, Function, WorksheetCellAddress, ExcelCalcValue, WorksheetShapeGroup, NamedReference, FtRboData, Obj, FtCmo, AddInFunctionResolver, StringElement, FormulaTokenVisitor$2, BIFF8RecordType_$type, EndOfStreamException, FormattedStringElement, FormattedStringRun, FormattingRunBase, IBiffRecordStream_$type, CfTemplate_$type, AverageConditionalFormat, RankConditionalFormat, OperatorConditionalFormat, FormulaConditionalFormat, TextOperatorConditionalFormat, NamedReferenceFormula, DateTimeConditionalFormat, DataBarConditionalFormat, ColorScaleConditionalFormat, IconSetConditionalFormat, BlanksConditionalFormat, NoBlanksConditionalFormat, ErrorsConditionalFormat, NoErrorsConditionalFormat, UniqueConditionalFormat, DuplicateConditionalFormat, ConditionalFormatBase, FormatConditionType_$type, CellReferenceMode_$type, ThresholdConditionBase, IconCriterion, FormatConditionTimePeriod_$type, IconSet_$type, CustomFilterCondition, FixedValuesFilter, FixedDateGroup, WorksheetColumnFilter, TopOrBottomFilter, CustomFilter, OrderedSortCondition, FillSortCondition, FontColorSortCondition, Rgce, ConditionalFormattingUtils, CellFillPattern, ExtPropColorLoaded, ExtPropFontScheme, ExtPropGradientFillLoaded, ExtPropTextIndentationLevel, WorksheetProtectedRange, FullColorExtInfo, MathUtilities, GradStopInfo, CellFillGradientStop, WorksheetRegionAddress, IconSortCondition, CustomListSortCondition, XFExtGradientInfo, CellFillLinearGradient, CellFillRectangularGradient, XFPropColorInfo, XFPropBorderLoaded, XFPropBool, XFPropColorLoaded, XFPropFontBold, XFPropByte, XFPropFontHeight, XFPropFontName, XFPropFontUnderline, XFPropFontScheme, XFPropFontSubscriptSuperscript, XFPropHorizontalAlignment, XFPropNumberFormat, XFPropNumberFormatId, XFPropFillPattern, XFPropTextIndentationLevel, XFPropTextIndentationLevelRelative, XFPropTextRotation, XFPropVerticalAlignment, XFPropGradientFill, XFPropGradientStopLoaded, WorksheetTableColumnArea_$type, FontSuperscriptSubscriptStyle_$type, FontUnderlineStyle_$type, WorksheetTableArea_$type, FillPatternStyle_$type, FtGmo, FtCf, FtPioGrbit, FtCbls, FtRbo, FtSbs, FtNts, FtMacro, FtPictFmla, ObjLinkFmla, FtCblsData, FtLbsData, FtEdoData, FtGboData, ObjFmla, LbsDropData, PictFmlaKey, ObjectParsedFormula, PictFmlaEmbedInfo, EscherRecordType_$type, IEscherRecord_$type, BLIPType_$type, ICalloutRule_$type, FontXInfo, IWorksheetImage_$type, SystemColorsInternal, IWorksheetShapeOwner_$type, DynamicValuesFilter, FillFilter, FontColorFilter, IconFilter, AverageFilter, DatePeriodFilter, DateRangeFilter, IColorFilter_$type, CalcUtilities, CalculationMode_$type, WorksheetReferenceExternal, ListDataValidationRule, AnyValueDataValidationRule, CustomDataValidationRule, TwoConstraintDataValidationRule, OneConstraintDataValidationRule, OleLinkWorkbookReference, DdeLinkWorkbookReference, OleItem, DdeItem, OleLinkNamedReference, DdeLinkNamedReference, HorizontalPageBreak, FormattedString, PaperSize_$type, BuiltInStyleType_$type, BuiltInStyleInfo, WorkbookUserDefinedStyle, ExternalWorkbookReference, AddInFunctionsWorkbookReference, FormattedText, FormattedTextRun, VerticalPageBreak } from "./excel.core";
import { Dictionary$2 } from "../../igniteui-angular-core/ES2015/Dictionary$2";
import { ContextStack, SeekableBufferedStream, InPlaceTransform, WorkItemExtensions, StructuredStorageManager, Async, DocumentSummaryInformation, SummaryInformation, DocCoreUtils, ProtectionValidationInfo, CryptoUtilities, ST_IconSetType_$type, ImageFormat, BinaryData, CT_Transform2D, CT_GroupTransform2D, CT_Point2D, ST_Coordinate, CT_PositiveSize2D, ST_PositiveCoordinate, StringUtilities } from "./documents.core";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { BinaryReader } from "../../igniteui-angular-core/ES2015/BinaryReader";
import { Enumerable } from "../../igniteui-angular-core/ES2015/Enumerable";
import { CultureInfo } from "../../igniteui-angular-core/ES2015/culture";
import { Convert } from "../../igniteui-angular-core/ES2015/Convert";
import { KeyValuePair$2 } from "../../igniteui-angular-core/ES2015/KeyValuePair$2";
import { arrayShallowClone, boxArray$1 } from "../../igniteui-angular-core/ES2015/array";
import { u32BitwiseAnd, u32BitwiseOr, intSToU, u32LS } from "../../igniteui-angular-core/ES2015/numberExtended";
import { Rect } from "../../igniteui-angular-core/ES2015/Rect";
import { Tuple$3 } from "../../igniteui-angular-core/ES2015/Tuple$3";
import { Tuple } from "../../igniteui-angular-core/ES2015/Tuple";
import { Encoding } from "../../igniteui-angular-core/ES2015/Encoding";
import { ArgumentException } from "../../igniteui-angular-core/ES2015/ArgumentException";
import { nullableNotEquals, nullableEquals, nullableIsNull } from "../../igniteui-angular-core/ES2015/nullable";
import { stringEmpty, stringIsNullOrEmpty, stringStartsWith, stringContains, stringReplace } from "../../igniteui-angular-core/ES2015/string";
import { Buffer } from "../../igniteui-angular-core/ES2015/Buffer";
import { intDivide, truncate, isNaN_ } from "../../igniteui-angular-core/ES2015/number";
import { MemoryStream } from "../../igniteui-angular-core/ES2015/MemoryStream";
import { BitConverter } from "../../igniteui-angular-core/ES2015/BitConverter";
import { stringFormat } from "../../igniteui-angular-core/ES2015/stringExtended";
import { IComparer$1_$type } from "../../igniteui-angular-core/ES2015/IComparer$1";
import { Color } from "../../igniteui-angular-core/ES2015/Color";
import { Guid } from "../../igniteui-angular-core/ES2015/Guid";
import { Uri } from "../../igniteui-angular-core/ES2015/Uri";
import { dateGetMonth, dateFromFileTimeUtc } from "../../igniteui-angular-core/ES2015/date";
import { InvalidOperationException } from "../../igniteui-angular-core/ES2015/InvalidOperationException";
import { BinaryWriter } from "../../igniteui-angular-core/ES2015/BinaryWriter";
import { StringBuilder } from "../../igniteui-angular-core/ES2015/StringBuilder";
/**
 * @hidden
 */
export let LIST12Record_LIST12DataType_$type = markEnum('LIST12Record_LIST12DataType', 'BlockLevelFormatting,0|StyleInfo,1|DisplayName,2');
/**
 * @hidden
 */
export let BOFRecord_BiffVersion_$type = markEnum('BOFRecord_BiffVersion', 'Biff2_1,0|Biff2_2,7|Biff2_3,512|Biff3,768|Biff4,1024|Biff5,1280|Biff7,1280|Biff8,1536');
/**
 * @hidden
 */
export class BiffRecordBase$3 extends Base {
    constructor($recordTypeEnum, $loadContextType, $saveContextType) {
        super();
        this.$recordTypeEnum = null;
        this.$loadContextType = null;
        this.$saveContextType = null;
        this.$recordTypeEnum = $recordTypeEnum;
        this.$loadContextType = $loadContextType;
        this.$saveContextType = $saveContextType;
        this.$type = this.$type.specialize(this.$recordTypeEnum, this.$loadContextType, this.$saveContextType);
    }
    get_e() {
        return false;
    }
    get e() {
        return this.get_e();
    }
    a(a) {
        return null;
    }
    b(a) {
        return null;
    }
    static g($recordTypeEnum, $loadContextType, $saveContextType) {
        if (BiffRecordBase$3.$t.specialize($recordTypeEnum, $loadContextType, $saveContextType).getStaticFields().f == null) {
            BiffRecordBase$3.$t.specialize($recordTypeEnum, $loadContextType, $saveContextType).getStaticFields().f = new Dictionary$2($recordTypeEnum, BiffRecordBase$3.$.specialize($recordTypeEnum, $loadContextType, $saveContextType), 0);
        }
        return BiffRecordBase$3.$t.specialize($recordTypeEnum, $loadContextType, $saveContextType).getStaticFields().f;
    }
    static c($recordTypeEnum, $loadContextType, $saveContextType, a, b) {
        let c;
        if (((() => { let d = BiffRecordBase$3.g($recordTypeEnum, $loadContextType, $saveContextType).tryGetValue(a, c); c = d.p1; return d.ret; })())) {
            return c;
        }
        c = b(a);
        BiffRecordBase$3.g($recordTypeEnum, $loadContextType, $saveContextType).addItem(a, c);
        return c;
    }
}
BiffRecordBase$3.$t = markType(BiffRecordBase$3, 'BiffRecordBase$3', Base.$, null, function () {
    this.f = null;
});
/**
 * @hidden
 */
export class WorkbookSaveManagerExcel2003 extends WorkbookSaveManager {
    constructor(a, b, c, d) {
        super(a, c, d);
        this._cs = null;
        this._ck = new WorkbookSerializationDataExcel2003();
        this._ct = null;
        this._cz = 0;
        this._cq = null;
        this._cr = null;
        this._cu = null;
        this._cp = null;
        this._co = null;
        this._cj = null;
        this._cg = null;
        this._b8 = null;
        this._ck = new WorkbookSerializationDataExcel2003(1, b);
        this._ct = new List$1(WorkbookSaveManagerExcel2003_ExtSstItem.$, 0);
        this._cq = new Dictionary$2(Base.$, SingleTargetFormula.$, 0);
        this._cr = new Dictionary$2(Base.$, WorksheetCell.$, 0);
        this._cu = new List$1(WorkbookStyle.$, 0);
        this._cp = new Dictionary$2(Number_$type, Number_$type, 0);
    }
    static staticInit() {
        Workbook._e2 = WorkbookSaveManagerExcel2003._b9;
    }
    disposeCore(a) {
        if (a) {
            if (this._ci != null) {
                this._ci.dispose();
                this._ci = null;
            }
            this._c4.dispose();
        }
    }
    get__r() {
        return this._cj;
    }
    set__r(a) {
        this._cj = a;
    }
    get__q() {
        return this._ch;
    }
    set__q(a) {
        this._ch = a;
    }
    _a6(a) {
        let b = this._b._ca;
        let c = b._p;
        if (a == c) {
            return 15;
        }
        let d = b._g(c);
        let e = b._g(a);
        if (e > d) {
            e--;
        }
        return (this._cz + e);
    }
    _a7(a) {
        let b;
        let c = this._at.tryGetValue(a, b);
        b = c.p1;
        return b;
    }
    _bk() {
        let a = this._b._styles$i;
        let b = a.normalStyle;
        let c = b._i;
        this._bd(c._bp, c);
        let d = this._h;
        d.add(d._inner[0]);
        d.add(d._inner[0]);
        d.add(d._inner[0]);
        d.add(null);
        this._c6(b);
        this._c6(a._j(1, 0));
        this._c6(a._j(2, 0));
        this._c6(a._j(1, 1));
        this._c6(a._j(2, 1));
        this._c6(a._j(1, 2));
        this._c6(a._j(2, 2));
        this._c6(a._j(1, 3));
        this._c6(a._j(2, 3));
        this._c6(a._j(1, 4));
        this._c6(a._j(2, 4));
        this._c6(a._j(1, 5));
        this._c6(a._j(2, 5));
        this._c6(a._j(1, 6));
        this._c6(a._j(2, 6));
        this._c5(this._b._ca._p);
        this._c6(a._i(3));
        this._c6(a._i(6));
        this._c6(a._i(4));
        this._c6(a._i(7));
        this._c6(a._i(5));
        for (let e of fromEnum(this._b._styles$i)) {
            if (e._o == false) {
                continue;
            }
            let f = typeCast(WorkbookBuiltInStyle.$, e);
            if (f != null) {
                switch (f._ac) {
                    case 2:
                    case 1:
                    case 3:
                    case 6:
                    case 4:
                    case 7:
                    case 0:
                    case 5:
                        this._cy.add(e);
                        continue;
                }
            }
            this._cy.add(e);
            this._c6(e);
        }
        this._cz = this._cw.count;
        let g = this._b._ca;
        for (let h of fromEnum(g)) {
            if (h == g._p) {
                continue;
            }
            this._c5(h);
        }
    }
    _bo(a) {
        super._bo(a);
        let b = a.image;
        if (b == null) {
            return;
        }
        let c = new WorkbookSerializationDataExcel2003_ImageHolder(b, 1);
        let d = this._cx.indexOf(c);
        if (d < 0) {
            this._cx.add(c);
        }
        else {
            c = this._cx._inner[d];
            c.d++;
        }
    }
    get__ag() {
        return false;
    }
    get _ag() {
        return this.get__ag();
    }
    _b4(a) {
        let b = super._b4(a);
        a = b.p0;
        if (a == null) {
            return {
                p0: a
            };
        }
        if (a == null || a._b0.hasValue == false || a._b9 != null) {
            a = null;
            return {
                p0: a
            };
        }
        let c = typeCast(WorksheetChart.$, a);
        if (c != null) {
            if (c._ec == null) {
                a = null;
            }
            return {
                p0: a
            };
        }
        return {
            p0: a
        };
    }
    _p() {
        let a = new List$1(Number_$type, 0);
        let b = 384;
        let c = 164;
        let d = this._b._b2;
        for (let e of fromEnum(d.m())) {
            if (e >= b) {
                while (d.c(c)) {
                    c++;
                }
                this._cp.item(e, c);
            }
        }
        for (let f of fromEnum(this._b._worksheets$i)) {
            if (f._conditionalFormats$i.count == 0) {
                continue;
            }
            if (this._co == null) {
                this._co = new Dictionary$2(Worksheet.$, CFSerializer.$, 0);
            }
            this._co.addItem(f, CFSerializer.a(f));
        }
        return WorkItemExtensions.a(WorkItemExtensions.c(this._cd(), () => Async.d(Sheet.$, this._az, (g) => {
            a.add(this._c4.position);
            return this._ca(g);
        })), () => this._db(a));
    }
    _c0(a) {
        let b;
        if (((() => { let c = this._cp.tryGetValue(a, b); b = c.p1; return c.ret; })())) {
            return b;
        }
        return a;
    }
    _cl(a) {
        return this._cq.item(a._bg);
    }
    _cm(a, b, c) {
        let d = c._bg;
        let e;
        if (((() => { let f = this._cr.tryGetValue(d, e); e = f.p1; return f.ret; })()) == false) {
            this._cr.item(d, e = a._cells$i.item(b));
            this._cq.item(d, Formula._u(c, e));
        }
        return e;
    }
    _c8(a) {
        this._ci = a._parentStream;
    }
    _c9(a) {
        if (this._ci != null) {
            this._ci._addSubStream(a);
        }
        this._ci = a;
    }
    _da(a) {
        a._am(WorkbookSaveManagerExcel2003.$, Boolean_$type, WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor.d, this);
    }
    static _b9(a, b, c) {
        return Async.n(StructuredStorageManager.$, new StructuredStorageManager(b, false), (d) => {
            if (a._cr) {
                a.documentProperties._ah(d);
            }
            return WorkItemExtensions.a(Async.n(Stream.$, d._ab("Workbook"), (e) => Async.n(WorkbookSaveManagerExcel2003.$, new WorkbookSaveManagerExcel2003(a, e, ExcelUtils.ee(b), c), (f) => f._o())), () => {
                for (let e of fromEnum(a._d7())) {
                    let f = d._ab(e.key);
                    try {
                        f.write(e.value, 0, e.value.length);
                    }
                    finally {
                        if (f != null) {
                            f.dispose();
                        }
                    }
                }
            });
        });
    }
    _c2(a, b, c, d = true) {
        let e = this._ci;
        let f = 0;
        if (b) {
            e._write17(0);
        }
        if (a._e.length == 0) {
            return f;
        }
        let g = e.position;
        let h = a._ab == null ? -1 : a._ab.index;
        let i = new FormulaContext(1, e.saveManager._b, a);
        let j = a._e;
        if (d) {
            j = arrayShallowClone(j);
            let k = SharedTokenConverter.a3(i, false);
            for (let l = 0; l < a._e.length; l++) {
                j[l] = a._e[l].d(FormulaToken.$, k);
            }
            k.a1();
        }
        if (a._aq == false) {
            let m = TokenReferenceResolver.bk(i, j);
            let n = m.a2();
        }
        let o = new Array(j.length);
        let p = WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.a5(i, e, c, o);
        let q = g;
        for (let r = 0; r < j.length; r++) {
            let s = j[r];
            o[r] = q;
            q += s.d(Number_$type, p);
        }
        p.a1();
        let t = WorkbookSaveManagerExcel2003_SaveTokenVisitor.a5(i, e, c, j, o);
        t.h();
        let u = e.position;
        f = (u - g);
        if (b) {
            e.position = g - 2;
            e._write17(f);
            e.position = u;
        }
        let v = WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor.a1(i, e);
        v.h();
        return f;
    }
    _dp(a) {
        {
            let b = new Biff8RecordStream(3, this, a);
            try {
                let c = this._ck.e(a);
                if (c.n == false) {
                    b._transform.k();
                }
                c.i(this);
                if (c.n == false) {
                    b._transform.i();
                }
            }
            finally {
                if (b != null) {
                    b.dispose();
                }
            }
        }
    }
    _cc(a) {
        return Async.n(Biff8RecordStream.$, new Biff8RecordStream(3, this, a), (b) => {
            let c = this._ck.e(a);
            if (c.n == false) {
                b._transform.k();
            }
            return WorkItemExtensions.a(c.b(this), () => {
                if (c.n == false) {
                    b._transform.i();
                }
            });
        });
    }
    _c5(a) {
        this._bd(a._bp, a);
        this._cw.add(a);
    }
    _c6(a) {
        if (a != null) {
            this._at.addItem(a, this._cw.count);
            this._c5(a._i);
        }
        else {
            let b = new WorksheetCellFormatData(this._b, 1);
            this._c5(b);
        }
    }
    _c7(a, b, c) {
        let d = this._c4.position;
        this._c4.position = a;
        let e = new BinaryReader(1, this._c4);
        {
            let f = new Biff8RecordStream(4, this, this._c4, e);
            try {
                f.position = 12;
                f._write18(b);
                f.position = 16;
                for (let g of fromEnum(c)) {
                    f._write18(g);
                }
            }
            finally {
                if (f != null) {
                    f.dispose();
                }
            }
        }
        this._c4.position = d;
    }
    _ca(a) {
        if (a.type == 0) {
            return this._cb(a);
        }
        else {
            return null;
        }
    }
    _cb(a) {
        this._b7.k(a.displayOptions);
        this._b7.k(a.printOptions);
        this._b7.k(a);
        this._dp(2057);
        let b = this._c4.position;
        this._dp(523);
        this._dp(13);
        this._dp(12);
        this._dp(15);
        this._dp(17);
        this._dp(16);
        this._dp(95);
        this._dp(42);
        this._dp(43);
        this._dp(130);
        this._dp(128);
        this._dp(549);
        this._dp(129);
        if (a.printOptions._cp) {
            this._dp(27);
        }
        if (a.printOptions._cr) {
            this._dp(26);
        }
        this._dp(20);
        this._dp(21);
        this._dp(131);
        this._dp(132);
        this._dp(38);
        this._dp(39);
        this._dp(40);
        this._dp(41);
        this._dp(161);
        this._dp(2204);
        if (a._je != null) {
            this._dp(233);
        }
        if (a.isProtected) {
            this._dp(18);
            if (a.protection.allowEditScenarios == false) {
                this._dp(221);
            }
            if (a.protection.allowEditObjects == false) {
                this._dp(99);
            }
            let c = a.protection._c.h();
            if (c.hasValue && c.value != 0) {
                this._dp(19);
            }
        }
        let d = this._c4.position;
        this._dp(85);
        this._dd(a);
        this._dp(512);
        return WorkItemExtensions.e(List$1.$.specialize(Number_$type), this._cf(a), (e) => {
            let f = WorkItemExtensions.m(List$1.$.specialize(Number_$type), e);
            this._c7(b, d, f);
            if (this._ah) {
                this._dp(236);
            }
            this._dt(a);
            this._dp(574);
            this._dp(2187);
            this._dn(a);
            this._dj(a);
            this._dq(a.displayOptions);
            this._df(a);
            if (a._ek) {
                this._dp(153);
            }
            if (this._ae(a)) {
                this._dp(229);
            }
            if (a._d8) {
                for (let g of fromEnum(a._hyperlinks$i)) {
                    this._b7.k(g);
                    this._dp(440);
                    if (g.toolTip != null) {
                        this._dp(2048);
                    }
                    this._b7.h();
                }
            }
            if (a._d6) {
                this._dp(434);
                for (let h of fromEnum(a._dataValidationRules$i)) {
                    let i = new List$1(CellAddressRange.$, 0);
                    for (let j of fromEnum(h.value)) {
                        i.add(new CellAddressRange(2, j));
                    }
                    this._b7.k(h.key);
                    this._b7.k(i);
                    while (i.count != 0) {
                        this._dp(446);
                    }
                    this._b7.h();
                    this._b7.h();
                }
            }
            if (this._b._cp && a._ak != null) {
                this._dp(442);
            }
            if (WorkbookColorInfo.l_op_Inequality(a.displayOptions.tabColorInfo, null)) {
                this._dp(2146);
            }
            if (this._co != null && this._co.containsKey(a)) {
                this._de(a);
            }
            this._dp(2151);
            let k = a.protection._allowedEditRanges$i;
            for (let l = k.count - 1; l >= 0; l--) {
                this._b7.k(k.item(l));
                this._dp(2152);
                this._b7.h();
            }
            this._dv(a);
            this._du(a);
            this._dp(10);
            this._b7.h();
            this._b7.h();
            this._b7.h();
        });
    }
    static _cn(a) {
        if (a.isHeaderRowVisible == false) {
            return true;
        }
        return Enumerable.d(WorksheetTableColumn.$, a._columns$i, (b) => b.totalFormula != null || b.totalLabel != null);
    }
    _db(a) {
        if (this._cs == null) {
            return;
        }
        let b = new BinaryReader(1, this._c4);
        for (let c = 0; c < a.count; c++) {
            this._c4.position = this._cs._inner[c];
            {
                let d = new Biff8RecordStream(4, this, this._c4, b);
                try {
                    d._transform.k();
                    d._write18(a._inner[c]);
                    d._transform.i();
                }
                finally {
                    if (d != null) {
                        d.dispose();
                    }
                }
            }
        }
        this._cs = null;
    }
    _dc() {
        this._cs = new List$1(Number_$type, 0);
        for (let a of fromEnum(this._az)) {
            this._cs.add(this._c4.position);
            this._b7.k(a);
            this._dp(133);
            this._b7.h();
        }
    }
    _c3() {
        let a = this._a3(this._cj.b, this._ch);
        let b = this._ch.r;
        this._cj.c = a;
        if (ExcelUtils.a9(a)) {
            let c = MultipleCellBlankInfo.o(this);
            if (c != null) {
                this._b7.k(c);
                this._dp(190);
                this._b7.h();
                return c.k;
            }
            this._dp(513);
            return b;
        }
        if (ExcelUtils.ba(a)) {
            let d = Convert.toDouble4(a, CultureInfo.invariantCulture);
            let e;
            if (((() => { let f = ExcelUtils.bz(d, e); e = f.p1; return f.ret; })())) {
                let f = MultipleCellRKInfo.o(this);
                if (f != null) {
                    this._b7.k(f);
                    this._dp(189);
                    this._b7.h();
                    return f.k;
                }
                this._dp(638);
            }
            else {
                this._dp(515);
            }
            return b;
        }
        if (typeCast(Boolean_$type, a) !== null || typeCast(ErrorValue.$, a) !== null) {
            this._dp(517);
            return b;
        }
        if (typeCast(StringElementIndex.$, a) !== null) {
            this._dp(253);
            a.d();
            return b;
        }
        let g = typeCast(Formula.$, a);
        if (g != null) {
            if (g._as) {
                let h = this._cm(this._cj.b, b, g);
                this._b7.k(h);
                this._dp(6);
                this._b7.h();
            }
            else {
                this._dp(6);
                if (g._ak) {
                    let i = g;
                    if (i._cz.cellRange.firstRow == this._cj.b.index && i._cz.cellRange.firstColumn == b) {
                        this._dp(545);
                    }
                }
                else if (g._am) {
                    let j = g._cz.cellsInTable;
                    if (j.firstRow == this._cj.b.index - 1 && j.firstColumn == b - 1) {
                        this._dp(566);
                    }
                }
            }
            return b;
        }
        return b;
    }
    _dd(a) {
        let b = new List$1(WorksheetColumnBlock.$, 1, a._ff);
        if (b.count == 1 && b._inner[0].k) {
            return;
        }
        for (let c of fromEnum(b)) {
            if (c.k) {
                continue;
            }
            this._b7.k(c);
            this._dp(125);
            this._b7.h();
        }
    }
    _df(a) {
        if (this._b._cq == false) {
            return;
        }
        for (let b of fromEnum(this._b._customViews$i)) {
            let c = b.getDisplayOptions(a, false);
            if (c == null) {
                continue;
            }
            let d = b.getPrintOptions(a, false);
            if (d != null) {
                this._b7.k(d);
            }
            this._b7.k(c);
            this._b7.k(b);
            this._dh(d != null);
            this._b7.h();
            this._b7.h();
            if (d != null) {
                this._b7.h();
            }
        }
    }
    _dg() {
        if (this._b._cq == false) {
            return;
        }
        for (let a of fromEnum(this._b._customViews$i)) {
            this._b7.k(a);
            this._dp(425);
            this._b7.h();
        }
    }
    _dh(a) {
        this._dp(426);
        this._dq(this._b7.a(DisplayOptions.$));
        if (a) {
            let b = this._b7.a(PrintOptions.$);
            if (b._cp) {
                this._dp(27);
            }
            if (b._cr) {
                this._dp(26);
            }
            this._dp(20);
            this._dp(21);
            this._dp(131);
            this._dp(132);
            this._dp(38);
            this._dp(39);
            this._dp(40);
            this._dp(41);
            this._dp(161);
            this._dp(2204);
        }
        this._dp(427);
    }
    _di() {
        let a = this._i;
        if (a.count == 0) {
            return;
        }
        for (let b of fromEnum(a)) {
            this._b7.k(b);
            this._dp(430);
            if ((typeCast(CurrentWorkbookReference.$, b) !== null) == false) {
                for (let c of fromEnum(b.u)) {
                    this._b7.k(c);
                    this._dp(35);
                    this._b7.h();
                }
            }
            this._b7.h();
        }
        this._dp(23);
    }
    _dj(a) {
        if (a.displayOptions._b3 != 100) {
            this._dp(160);
        }
    }
    _dk() {
        for (let a of fromEnum(this._b._bb.u)) {
            this._b7.k(a);
            this._dp(24);
            if (a.comment != null && a.comment.length > 0) {
                this._dp(2196);
            }
            this._b7.h();
        }
    }
    _dl(a) {
        this._b7.k(new WorkbookSaveManagerExcel2003_FormatHolder(a, this._b._b2.ad(a)));
        this._dp(1054);
        this._b7.h();
    }
    _dm() {
        this._dl(5);
        this._dl(6);
        this._dl(7);
        this._dl(8);
        this._dl(42);
        this._dl(41);
        this._dl(44);
        this._dl(43);
        if (this._b._ct) {
            for (let a of fromEnum(this._b._b2.m())) {
                this._dl(a);
            }
        }
    }
    _dn(a) {
        let b = a.displayOptions;
        let c;
        if (b.panesAreFrozen) {
            c = b.frozenPaneSettings.frozenColumns != 0 || b.frozenPaneSettings.frozenRows != 0;
        }
        else {
            c = b.unfrozenPaneSettings.leftPaneWidth != 0 || b.unfrozenPaneSettings.topPaneHeight != 0;
        }
        if (c) {
            this._dp(65);
        }
    }
    _dq(a) {
        a._br();
        if (a._ai && a._af.b.count > 0) {
            for (let b of fromEnum(a._af.b)) {
                this._b7.k(b);
                this._dp(29);
                this._b7.h();
            }
        }
        else {
            this._dp(29);
        }
    }
    _dr() {
        for (let a of fromEnum(this._h)) {
            if (a == null) {
                continue;
            }
            this._b7.k(a);
            this._dp(49);
            this._b7.h();
        }
    }
    _cd() {
        this._b7.k(this._b);
        this._dp(2057);
        if (this._b._cs) {
            this._dp(134);
        }
        if (this._b._cw) {
            this._dp(47);
        }
        if (this._b.currentFormat == 1) {
            this._dp(96);
        }
        if (this._b._cs) {
            this._dp(91);
        }
        this._dp(66);
        this._dp(353);
        this._dp(448);
        this._dp(317);
        if (this._b._cp) {
            this._dp(211);
            if (this._b._co) {
                this._dp(445);
            }
            this._dp(442);
        }
        this._dp(156);
        this._dp(25);
        this._dp(18);
        this._dp(19);
        this._dp(61);
        this._dp(64);
        this._dp(141);
        this._dp(34);
        this._dp(14);
        this._dp(439);
        this._dp(218);
        this._dr();
        this._dm();
        let a = this._c4.position;
        let b = new List$1(XFRecord_XFContext.$, 0);
        for (let c = 0; c < this._cw.count; c++) {
            let d = this._cw._inner[c];
            let e = new XFRecord_XFContext(d, c, d._cg());
            this._b7.k(e);
            this._dp(224);
            this._b7.h();
            if (e.b.count != 0) {
                b.add(e);
            }
        }
        this._ck.s(a);
        if (b.count != 0) {
            this._dp(2172);
            for (let f of fromEnum(b)) {
                this._b7.k(f);
                this._dp(2173);
                this._b7.h();
            }
        }
        for (let g of fromEnum(this._g)) {
            this._b7.k(g);
            this._dp(2189);
            this._b7.h();
        }
        this._ds();
        this._dp(2190);
        for (let h of fromEnum(this._b._customTableStyles$i)) {
            this._dw(h);
        }
        this._dg();
        if (this._b._palette$i.isCustom) {
            this._dp(146);
        }
        this._dp(352);
        this._dc();
        this._dp(140);
        this._di();
        this._dk();
        if (this._ah) {
            this._dp(235);
        }
        return WorkItemExtensions.a(this._cc(252), () => {
            this._dp(255);
            this._dp(2198);
            this._dp(10);
            this._b7.h();
        });
    }
    _ds() {
        if (this._cu.count == 0) {
            return;
        }
        for (let a of fromEnum(this._cu)) {
            this._b7.k(a);
            this._dp(659);
            if (a._i._ch().count != 0) {
                this._dp(2194);
            }
            this._b7.h();
        }
    }
    _dt(a) {
        let b = this._w(a);
        for (let c of fromEnum(b.j)) {
            this._b7.k(c.cell);
            this._dp(28);
            this._b7.h();
        }
    }
    _du(a) {
        if (a.filterSettings.region == null) {
            return;
        }
        this._dp(155);
        this._dp(157);
        this._b7.k(a.filterSettings);
        let b = a.filterSettings.region._ad;
        let c = new SortedList$2(Number_$type, TableColumnFilterData.$, 1, UtilitiesInt32Comparer._c);
        for (let d = 0; d < b; d++) {
            let e = a.filterSettings.getFilter(d);
            if (e != null) {
                let f = new TableColumnFilterData(1, d, e);
                if (f.e) {
                    c._m(d, f);
                }
            }
        }
        this._b7.k(c);
        for (let g of fromEnum(c._j)) {
            this._b7.k(g);
            this._dp(158);
            if (g.d) {
                this._dp(2174);
            }
        }
        this._b7.h();
        if (a.filterSettings.sortSettings._o) {
            this._dp(2197);
        }
        this._b7.h();
    }
    _ce(a, b) {
        let c = this._c4.position;
        for (let d of fromEnum(b)) {
            this._b7.k(d);
            this._dp(520);
            this._b7.h();
        }
        let e = new List$1(Number_$type, 0);
        let f = 0;
        return WorkItemExtensions.g(Number_$type, Async.d(WorksheetRow.$, b, (g) => {
            e.add(this._c4.position);
            let h = g._hasCellFormat ? g._cellFormatInternal.d : null;
            let i = this._u(g);
            this._cj = new CellContext(g, i);
            let j = -1;
            return WorkItemExtensions.a(Async.e(CellDataContext.$, g._ch(), (k) => {
                if (k.r <= j) {
                    return true;
                }
                if (k.j == null) {
                    k.j = h || a._cb(k.r).b;
                }
                this._ch = k;
                j = this._c3();
                f += j + 1 - k.r;
                if (1000 < f) {
                    f = 0;
                    return false;
                }
                return true;
            }), () => {
                this._cj = null;
                this._ch = null;
            });
        }), () => {
            let g = this._c4.position;
            let h = new DBCELLRecord_DBCELLInfo(c, e);
            this._b7.k(h);
            this._dp(215);
            this._b7.h();
            return g;
        });
    }
    _cf(a) {
        let b = new List$1(Number_$type, 0);
        let c = new List$1(WorksheetRow.$, 0);
        let d = -1;
        return WorkItemExtensions.g(List$1.$.specialize(Number_$type), WorkItemExtensions.c(Async.d(WorksheetRow.$, this._aw(a), (e) => {
            let f = this._u(e);
            if (f == null) {
                return null;
            }
            if (d < 0) {
                d = e.index;
            }
            return WorkItemExtensions.a(Async.g(e.index - d > 31, () => WorkItemExtensions.e(Number_$type, this._ce(a, c), (g) => {
                b.add(WorkItemExtensions.m(Number_$type, g));
                c.clear();
                d = e.index;
            })), () => c.add(e));
        }), () => Async.g(c.count > 0, () => WorkItemExtensions.e(Number_$type, this._ce(a, c), (e) => b.add(WorkItemExtensions.m(Number_$type, e))))), () => b);
    }
    _dv(a) {
        if (a._tables$i.count == 0) {
            return;
        }
        this._dp(2161);
        for (let b of fromEnum(a._tables$i)) {
            let c = new SortedList$2(Number_$type, TableColumnFilterData.$, 1, UtilitiesInt32Comparer._c);
            for (let d = 0; d < b._columns$i.count; d++) {
                let e = b._columns$i._item(d);
                let f = new TableColumnFilterData(0, d, e);
                if (f.e) {
                    c._m(e.index, f);
                }
            }
            this._b7.k(b);
            this._b7.k(c);
            if (WorkbookSaveManagerExcel2003._cn(b)) {
                this._dp(2168);
            }
            else {
                this._dp(2162);
            }
            this._b7.k(enumGetBox(LIST12Record_LIST12DataType_$type, 0));
            this._dp(2167);
            this._b7.h();
            for (let g of fromEnum(c._j)) {
                if (g.d) {
                    this._b7.k(g);
                    this._dp(2174);
                    this._b7.h();
                }
            }
            this._b7.k(enumGetBox(LIST12Record_LIST12DataType_$type, 1));
            this._dp(2167);
            this._b7.h();
            this._b7.k(enumGetBox(LIST12Record_LIST12DataType_$type, 2));
            this._dp(2167);
            this._b7.h();
            if (b.sortSettings._o) {
                this._dp(2197);
            }
            this._b7.h();
            this._b7.h();
        }
    }
    _dw(a) {
        this._b7.k(a);
        this._dp(2191);
        for (let b of fromEnum(this._aa(a))) {
            this._b7.k(enumGetBox(WorksheetTableStyleArea_$type, b.key));
            this._b7.k(b.value);
            this._dp(2192);
            this._b7.h();
            this._b7.h();
        }
        this._b7.h();
    }
    _de(a) {
        if (this._co == null) {
            return;
        }
        let b = null;
        if (((() => { let c = this._co.tryGetValue(a, b); b = c.p1; return c.ret; })()) == false) {
            return;
        }
        for (let c of fromEnum(b.c)) {
            this._b7.k(c);
            this._dp(2169);
            for (let d of fromEnum(c.h)) {
                this._b7.k(d);
                this._dp(2170);
                this._b7.h();
            }
            this._b7.h();
        }
    }
    get _b7() {
        return this._ck.b;
    }
    get _ch() {
        return this._cg;
    }
    set _ch(a) {
        if (this._cg != a) {
            if (this._cg != null) {
                this._cg.u();
            }
            this._cg = a;
        }
    }
    get _ci() {
        return this._ck.d;
    }
    set _ci(a) {
        this._ck.d = a;
    }
    get _cv() {
        return this._ct;
    }
    get _cw() {
        return this._ck.p;
    }
    get _cx() {
        return this._ck.q;
    }
    get _cy() {
        return this._cu;
    }
    get _c4() {
        return this._ck.c;
    }
    get _b6() {
        return this._ck.a;
    }
}
WorkbookSaveManagerExcel2003.$t = markType(WorkbookSaveManagerExcel2003, 'WorkbookSaveManagerExcel2003', WorkbookSaveManager.$);
/**
 * @hidden
 */
export class WorkbookSaveManagerExcel2003_ExtSstItem extends ValueType {
    constructor() {
        super();
        this.b = 0;
        this.a = 0;
    }
}
WorkbookSaveManagerExcel2003_ExtSstItem.$t = markStruct(WorkbookSaveManagerExcel2003_ExtSstItem, 'WorkbookSaveManagerExcel2003_ExtSstItem');
/**
 * @hidden
 */
export class WorkbookSaveManagerExcel2003_FormatHolder extends Base {
    constructor(a, b) {
        super();
        this.a = 0;
        this.c = null;
        this.a = a;
        this.c = b;
    }
    get d() {
        return this.c;
    }
    get b() {
        return this.a;
    }
}
WorkbookSaveManagerExcel2003_FormatHolder.$t = markType(WorkbookSaveManagerExcel2003_FormatHolder, 'WorkbookSaveManagerExcel2003_FormatHolder');
/**
 * @hidden
 */
export class WorkbookSaveManagerExcel2003_GetSizeTokenVisitor extends FormulaTokenVisitor$1 {
    constructor() {
        super(Number_$type);
        this.a6 = false;
        this.a3 = null;
        this.a2 = null;
    }
    d(a) {
        return 0;
    }
    a1() {
        this.a6 = false;
        this.a3 = null;
        this.a2 = null;
        super.a1();
    }
    f(a) {
        if (this.a6) {
            return 13;
        }
        return 11;
    }
    h(a) {
        return 9;
    }
    j(a) {
        return 9;
    }
    k(a) {
        return 8;
    }
    l(a) {
        return WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.a7(a);
    }
    m(a) {
        return 4;
    }
    n(a) {
        return 4;
    }
    o(a) {
        return 4;
    }
    p(a) {
        return 4;
    }
    q(a) {
        return 4;
    }
    r(a) {
        return 1;
    }
    s(a) {
        return 2;
    }
    u(a) {
        return 2;
    }
    v(a) {
        return 5;
    }
    w(a) {
        return 3;
    }
    y(a) {
        return 4;
    }
    z(a) {
        return 3;
    }
    aa(a) {
        return 7;
    }
    ab(a) {
        return 7;
    }
    ac(a) {
        return 3;
    }
    ad(a) {
        return 7;
    }
    ae(a) {
        return 1;
    }
    af(a) {
        return 5;
    }
    ag(a) {
        if (this.a6) {
            return 9;
        }
        return 7;
    }
    ah(a) {
        return 9;
    }
    aj(a) {
        return 1;
    }
    al(a) {
        if (this.a6) {
            return 9;
        }
        return 7;
    }
    ao(a) {
        return 5;
    }
    aq(a) {
        return 5;
    }
    ar(a) {
        return (1 + this.a3._getDataSize(this.a2[this.az], 0, a.p));
    }
    as(a) {
        return 0;
    }
    at(a) {
        return 5;
    }
    au(a) {
        return 1;
    }
    static a5(a, b, c, d) {
        if (WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.a4 == null) {
            WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.a4 = new WorkbookSaveManagerExcel2003_GetSizeTokenVisitor();
        }
        WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.a4.c = a;
        WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.a4.a3 = b;
        WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.a4.a6 = c;
        WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.a4.a2 = d;
        return WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.a4;
    }
    static a7(a) {
        return (6 + (2 * a.skipTokenIndexes.count));
    }
}
WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.$t = markType(WorkbookSaveManagerExcel2003_GetSizeTokenVisitor, 'WorkbookSaveManagerExcel2003_GetSizeTokenVisitor', FormulaTokenVisitor$1.$.specialize(Number_$type));
WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.a4 = null;
/**
 * @hidden
 */
export class WorkbookSaveManagerExcel2003_PopuplateShapeKnownPropertiesVisitor extends WorksheetShapeVisitor$2 {
    constructor() {
        super(WorkbookSaveManagerExcel2003.$, Boolean_$type);
    }
    b(a, b) {
        let c = false;
        if (a._bi == null) {
            a._bi = new List$1(PropertyTableBase_PropertyValue.$, 0);
        }
        else {
            for (let d = a._bi.count - 1; d >= 0; d--) {
                let e = a._bi._inner[d];
                switch (e._b) {
                    case 129:
                    case 130:
                    case 131:
                    case 132:
                    case 385:
                    case 386:
                    case 447:
                    case 448:
                    case 449:
                    case 511:
                    case 4:
                        a._bi.removeAt(d);
                        break;
                    case 191:
                        {
                            if ((typeof e._i === 'number') == false) {
                                a._bi.removeAt(d);
                                break;
                            }
                            let f = typeGetValue(e._i);
                            e._i = f;
                        }
                        break;
                    case 959:
                        {
                            if ((typeof e._i === 'number') == false) {
                                a._bi.removeAt(d);
                                break;
                            }
                            c = true;
                            let g = typeGetValue(e._i);
                            if (a.visible) {
                                g = u32BitwiseAnd(g, ~2);
                            }
                            else {
                                g = u32BitwiseOr(g, 2);
                            }
                            e._i = g;
                            break;
                        }
                }
            }
        }
        if (c == false) {
            let h = 131072;
            if (a.visible == false) {
                h = u32BitwiseOr(h, 2);
            }
            a._bi.add(new PropertyTableBase_PropertyValue(0, 959, h));
        }
        if (a._ar) {
            a._k._d(a);
        }
        if (a._as) {
            a._n._h(a);
        }
        if (a._b6 != 0) {
            let i = ExcelUtils.ey(a._b6);
            a._bi.add(new PropertyTableBase_PropertyValue(0, 4, i));
        }
        return true;
    }
    c(a, b) {
        super.c(a, b);
        if (a._d6 != 144) {
            a._bi.add(new PropertyTableBase_PropertyValue(0, 129, intSToU(ExcelUtils.dn(a._d6))));
        }
        if (a._ed != 72) {
            a._bi.add(new PropertyTableBase_PropertyValue(0, 130, intSToU(ExcelUtils.dn(a._ed))));
        }
        if (a._ea != 144) {
            a._bi.add(new PropertyTableBase_PropertyValue(0, 131, intSToU(ExcelUtils.dn(a._ea))));
        }
        if (a._d2 != 72) {
            a._bi.add(new PropertyTableBase_PropertyValue(0, 132, intSToU(ExcelUtils.dn(a._d2))));
        }
        return true;
    }
}
WorkbookSaveManagerExcel2003_PopuplateShapeKnownPropertiesVisitor.$t = markType(WorkbookSaveManagerExcel2003_PopuplateShapeKnownPropertiesVisitor, 'WorkbookSaveManagerExcel2003_PopuplateShapeKnownPropertiesVisitor', WorksheetShapeVisitor$2.$.specialize(WorkbookSaveManagerExcel2003.$, Boolean_$type));
WorkbookSaveManagerExcel2003_PopuplateShapeKnownPropertiesVisitor.d = new WorkbookSaveManagerExcel2003_PopuplateShapeKnownPropertiesVisitor();
/**
 * @hidden
 */
export class WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor extends WorksheetShapeVisitor$2 {
    constructor() {
        super(WorkbookSaveManagerExcel2003.$, Boolean_$type);
    }
    visitUnknownShape(shape, saveManager) {
        return this._visitUnknownShape$i.apply(this, arguments);
    }
    _visitUnknownShape$i(a, b) {
        super._visitUnknownShape$i(a, b);
        let c = a.image;
        if (c != null) {
            let d = a._bi;
            let e = WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor.f(b, c, d);
            d = e.p2;
            a._bi = d;
        }
        return true;
    }
    visitWorksheetCellComment(shape, saveManager) {
        return this._visitWorksheetCellComment$i.apply(this, arguments);
    }
    _visitWorksheetCellComment$i(a, b) {
        if (a._bi == null) {
            a._bi = new List$1(PropertyTableBase_PropertyValue.$, 0);
        }
        if (a._bi.count == 0) {
            a._bi.add(new PropertyTableBase_PropertyValue(1, 139, intSToU(655368), false, false));
            a._bi.add(new PropertyTableBase_PropertyValue(1, 344, intSToU(0), false, false));
            a._bi.add(new PropertyTableBase_PropertyValue(1, 387, intSToU(14811135), false, false));
            a._bi.add(new PropertyTableBase_PropertyValue(1, 389, intSToU(268435700), false, false));
            a._bi.add(new PropertyTableBase_PropertyValue(1, 451, intSToU(268435700), false, false));
            a._bi.add(new PropertyTableBase_PropertyValue(1, 513, intSToU(0), false, false));
            a._bi.add(new PropertyTableBase_PropertyValue(1, 515, intSToU(268435700), false, false));
            a._bi.add(new PropertyTableBase_PropertyValue(1, 575, intSToU(196611), false, false));
        }
        return super._visitWorksheetCellComment$i(a, b);
    }
    visitWorksheetImage(shape, saveManager) {
        return this._visitWorksheetImage$i.apply(this, arguments);
    }
    _visitWorksheetImage$i(a, b) {
        super._visitWorksheetImage$i(a, b);
        let c = a._bi;
        let d = WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor.f(b, a._image, c);
        c = d.p2;
        a._bi = c;
        return true;
    }
    b(a, b) {
        if (a._b0.hasValue && EnumUtil.isDefined(PredefinedShapeType_$type, enumGetBox(PredefinedShapeType_$type, (a._b0.value)))) {
            this.e(a);
        }
        a._am(WorkbookSaveManagerExcel2003.$, Boolean_$type, WorkbookSaveManagerExcel2003_PopuplateShapeKnownPropertiesVisitor.d, b);
        return true;
    }
    static f(a, b, c) {
        if (c != null) {
            for (let d = c.count - 1; d >= 0; d--) {
                if (c._inner[d]._d) {
                    c.removeAt(d);
                }
            }
        }
        else {
            c = new List$1(PropertyTableBase_PropertyValue.$, 0);
        }
        let e = a._cx.indexOf(new WorkbookSerializationDataExcel2003_ImageHolder(b, 1));
        if (e >= 0) {
            c.add(new PropertyTableBase_PropertyValue(1, 260, intSToU((e + 1)), false, true));
        }
        return {
            p2: c
        };
    }
    e(a) {
        if (a._bi == null) {
            a._bi = new List$1(PropertyTableBase_PropertyValue.$, 0);
        }
        if (a._bi.count == 0) {
            if (a._a5) {
                a._bi.add(new PropertyTableBase_PropertyValue(1, 383, intSToU(65536), false, false));
                a._bi.add(new PropertyTableBase_PropertyValue(1, 771, intSToU(0), false, false));
            }
            else {
                let b = typeCast(WorksheetShapeWithText.$, a);
                let c = b != null && b._d0;
                if (c) {
                    a._bi.add(new PropertyTableBase_PropertyValue(1, 127, intSToU(262144), false, false));
                    a._bi.add(new PropertyTableBase_PropertyValue(1, 135, intSToU(1), false, false));
                    a._bi.add(new PropertyTableBase_PropertyValue(1, 139, intSToU(2), false, false));
                }
                a._bi.add(new PropertyTableBase_PropertyValue(1, 191, intSToU(2031640), false, false));
                a._bi.add(new PropertyTableBase_PropertyValue(1, 459, intSToU(25400), false, false));
            }
        }
        if (a._bm == null) {
            a._bm = new List$1(PropertyTableBase_PropertyValue.$, 0);
        }
        if (a._bm.count == 0) {
            if (a._a5) {
                a._bm.add(new PropertyTableBase_PropertyValue(1, 511, intSToU(4194304), false, false));
            }
            else {
                a._bm.add(new PropertyTableBase_PropertyValue(1, 511, intSToU(4194304), false, false));
            }
        }
    }
}
WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor.$t = markType(WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor, 'WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor', WorksheetShapeVisitor$2.$.specialize(WorkbookSaveManagerExcel2003.$, Boolean_$type));
WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor.d = new WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor();
/**
 * @hidden
 */
export class WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor extends FormulaTokenVisitor {
    constructor() {
        super();
        this.az = null;
    }
    g() {
        this.az = null;
        super.g();
    }
    o(a) {
        let b = a.q.length;
        let c = a.q[0].length;
        this.az._write9((b - 1));
        this.az._write17((c - 1));
        for (let d = 0; d < c; d++) {
            for (let e = 0; e < b; e++) {
                let f = a.q[e][d];
                this.az._write9(f.b);
                f.g(this.az);
            }
        }
    }
    ae(a) {
        this.az._write17(a.r.length);
        for (let b = 0; b < a.r.length; b++) {
            this.az._write4(a.r[b]);
        }
    }
    static a1(a, b) {
        if (WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor.a0 == null) {
            WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor.a0 = new WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor();
        }
        WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor.a0.b = a;
        WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor.a0.az = b;
        return WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor.a0;
    }
}
WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor.$t = markType(WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor, 'WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor', FormulaTokenVisitor.$);
WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor.a0 = null;
/**
 * @hidden
 */
export class WorkbookSaveManagerExcel2003_SaveTokenVisitor extends FormulaTokenVisitor {
    constructor() {
        super();
        this.a6 = false;
        this.a1 = null;
        this.a3 = null;
        this.a2 = null;
    }
    e(a) {
    }
    g() {
        this.a6 = false;
        this.a1 = null;
        this.a3 = null;
        this.a2 = null;
        super.g();
    }
    h() {
        let a = this.a1.length;
        for (this.d = 0; this.d < a; this.d++) {
            let b = this.a1[this.d];
            this.a3._write9(b.f);
            b.m(this);
        }
        this.g();
    }
    j(a) {
        this.a7(a.o);
        this.n(a);
    }
    l(a) {
        this.a3._write2(WorkbookSaveManagerExcel2003_SaveTokenVisitor.a0);
    }
    n(a) {
        this.a3._write4(a.x);
    }
    o(a) {
        this.a3._write2(WorkbookSaveManagerExcel2003_SaveTokenVisitor.az);
    }
    p(a) {
        this.a3._write9(a.p);
        this.a3._write17((a.skipTokenIndexes.count));
        let b = this.a2[this.d];
        let c = WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.a7(a);
        this.a3._write17((c - 4));
        for (let d = 0; d < a.skipTokenIndexes.count; d++) {
            let e = this.a2[a.skipTokenIndexes._inner[d]];
            this.a3._write17((e - b));
        }
    }
    q(a) {
        this.a3._write9(a.p);
        if (a.skipTokenIndexes.count == 0) {
            this.a3._write17(0);
            return;
        }
        let b = this.a2[this.d];
        let c = b + 4;
        let d = this.a2[a.skipTokenIndexes._inner[0]];
        let e = d + 4;
        this.a3._write17((e - c));
    }
    r(a) {
        this.a3._write9(a.p);
        let b = this.a2[this.d];
        let c = b + 4;
        let d = this.a2[a.t];
        let e = d + 4;
        this.a3._write17((e - c - 1));
    }
    s(a) {
        this.a3._write9(a.p);
        this.a3._write9(a.t);
        this.a3._write9(a.v);
    }
    t(a) {
        this.a3._write9(a.p);
        this.a3._write17(0);
    }
    u(a) {
        this.a3._write9(a.p);
        this.a3._write17(0);
    }
    v(a) {
    }
    w(a) {
        this.a3._write9((a.r ? 1 : 0));
    }
    y(a) {
        this.a3._write9(a.p._y);
    }
    z(a) {
        this.a3._write17(a.p.t);
        this.a3._write17(a.p.r);
    }
    aa(a) {
        this.a3._write17(a.$function._vv);
    }
    ac(a) {
        let b = a.argumentCount;
        if (a.$function._qk) {
            b++;
        }
        this.a3._write9(b);
        this.aa(a);
    }
    ad(a) {
        this.a3._write17(a.p);
    }
    ae(a) {
        this.a3._write18(intSToU(0));
        this.a3._write17(a.p);
    }
    af(a) {
        this.a3._write18(intSToU(0));
        this.a3._write17(a.p);
    }
    ag(a) {
        this.a3._write17(a.p);
    }
    ah(a) {
        this.a3._write18(intSToU(0));
        this.a3._write17(a.p);
    }
    ai(a) {
    }
    aj(a) {
        let b = this.a3.saveManager._b._bb;
        let c = b.u.indexOf(a.u);
        if (c < 0) {
            let d = b.c(a.u.name, this.a3.saveManager._b, false);
            c = b.u.indexOf(d);
        }
        this.a3._write17((c + 1));
        this.a3._write17(0);
    }
    ak(a) {
        this.a7(a.o);
        let b = a.o.e.u.indexOf(a.u);
        this.a3._write17((b + 1));
        this.a3._write17(0);
    }
    al(a) {
        this.a3._write10(a.p);
    }
    an(a) {
    }
    ap(a) {
        this.a7(a.o);
        this.au(a);
    }
    as(a) {
        this.a3._write18(intSToU(0));
    }
    au(a) {
        this.a3._write3(a.y);
    }
    av(a) {
        this.a3._write15(a.p, 0);
    }
    aw(a) {
    }
    ax(a) {
        this.a3._write17(a.p.t);
        this.a3._write17(a.p.r);
    }
    ay(a) {
    }
    static a5(a, b, c, d, e) {
        if (WorkbookSaveManagerExcel2003_SaveTokenVisitor.a4 == null) {
            WorkbookSaveManagerExcel2003_SaveTokenVisitor.a4 = new WorkbookSaveManagerExcel2003_SaveTokenVisitor();
        }
        WorkbookSaveManagerExcel2003_SaveTokenVisitor.a4.b = a;
        WorkbookSaveManagerExcel2003_SaveTokenVisitor.a4.a3 = b;
        WorkbookSaveManagerExcel2003_SaveTokenVisitor.a4.a6 = c;
        WorkbookSaveManagerExcel2003_SaveTokenVisitor.a4.a1 = d;
        WorkbookSaveManagerExcel2003_SaveTokenVisitor.a4.a2 = e;
        return WorkbookSaveManagerExcel2003_SaveTokenVisitor.a4;
    }
    a7(a) {
        if (this.a6) {
            this.a3._write17(a.l);
            this.a3._write17(a.m);
        }
        else {
            let b = this.a3.saveManager._j.indexOf(a);
            this.a3._write17(b);
        }
    }
}
WorkbookSaveManagerExcel2003_SaveTokenVisitor.$t = markType(WorkbookSaveManagerExcel2003_SaveTokenVisitor, 'WorkbookSaveManagerExcel2003_SaveTokenVisitor', FormulaTokenVisitor.$);
WorkbookSaveManagerExcel2003_SaveTokenVisitor.a4 = null;
WorkbookSaveManagerExcel2003_SaveTokenVisitor.az = new Array(7);
WorkbookSaveManagerExcel2003_SaveTokenVisitor.a0 = new Array(8);
/**
 * @hidden
 */
export class WorkbookLoadManagerExcel2003 extends WorkbookLoadManager {
    constructor(a, b, c, d) {
        super(a, c);
        this._a8 = false;
        this._bd = null;
        this._be = null;
        this._a1 = new WorkbookSerializationDataExcel2003();
        this._az = null;
        this._a2 = null;
        this._a5 = null;
        this._bn = null;
        this._cb = Nullable$1.toNullable(Number_$type, null);
        this._bo = null;
        this._cc = Nullable$1.toNullable(Number_$type, null);
        this._bp = null;
        this._bq = null;
        this._br = null;
        this._bs = null;
        this._bf = null;
        this._a9 = false;
        this._bt = null;
        this._bu = null;
        this._ay = null;
        this._ak = null;
        this._bv = null;
        this._bg = null;
        this._af = null;
        this._bh = null;
        this._b8 = null;
        this._bi = null;
        this._b7 = 0;
        this._aw = null;
        this._a7 = null;
        this._bb = false;
        this._bc = false;
        this._b6 = 0;
        this._aj = null;
        this._ak = d._d;
        this._bd = new Dictionary$2(WorksheetShapeGroup.$, Rect.$, 0);
        this._be = new Dictionary$2(Number_$type, List$1.$.specialize(WorksheetCellFormatData.$), 0);
        this._bf = new Dictionary$2(NameToken.$, Number_$type, 0);
        this._ay = new WorkbookLoadManagerExcel2003_ResolveNamedReferenceVisitor(this);
        this._bg = new Dictionary$2(WorksheetCellAddress.$, ExcelCalcValue.$, 0);
        this._bh = new Dictionary$2(WorksheetCellAddress.$, Formula.$, 0);
        this._bi = new Dictionary$2(Number_$type, Number_$type, 0);
        this._a1 = new WorkbookSerializationDataExcel2003(1, b);
        this._b8 = new BinaryReader(1, this._a1.c);
    }
    static staticInit() {
        Workbook._ez = WorkbookLoadManagerExcel2003._an;
    }
    disposeCore(a) {
        if (a) {
            if (this._av != null) {
                this._av.dispose();
                this._av = null;
            }
            if (this._b8 != null) {
                this._b8.close();
            }
            this._ca.dispose();
        }
        super.disposeCore(a);
    }
    _r() {
        if (this._b2.count <= 15) {
            return null;
        }
        return this._b2._inner[15];
    }
    _cf(a, b, c) {
        if (this._a8) {
            if (b != null) {
                this._cr(b);
            }
            a._bb(b, false);
            this._y(a, c);
        }
        else {
            if (this._bv == null) {
                this._bv = new List$1(Tuple$3.$.specialize(NamedReference.$, SingleTargetFormula.$, Boolean_$type), 0);
            }
            this._bv.add(Tuple.b(NamedReference.$, SingleTargetFormula.$, Boolean_$type, a, b, c));
        }
    }
    _p() {
        this._b7 = -1;
        return WorkItemExtensions.a(this._am(), () => {
            this._cq();
            this._cp();
        });
    }
    _z() {
        super._z();
        this._a8 = true;
        for (let a of fromEnum(this._b._bb.u)) {
            if (a._j != null) {
                this._cr(a._j);
            }
        }
        if (this._bv != null) {
            for (let b of fromEnum(this._bv)) {
                this._cf(b.c, b.d, b.e);
            }
            this._bv = null;
        }
        if (this._b._dz != null) {
            for (let c of fromEnum(this._b._dz.values)) {
                for (let d of fromEnum(c.u)) {
                    if (d._j != null) {
                        this._cr(d._j);
                    }
                }
            }
        }
        this._bf.clear();
    }
    _cu(a) {
        let b;
        let c = this._bd.tryGetValue(a, b);
        b = c.p1;
        return b;
    }
    _a4(a) {
        if (a == -1) {
            return null;
        }
        if (0 <= a && a < this._b5.count) {
            return this._b5._inner[a];
        }
        return null;
    }
    _a6(a, b) {
        if (this._a5 != null && this._a5.index == b && this._a5.worksheet == a) {
            return this._a5;
        }
        let c = null;
        if (this._af != null) {
            let d = this._af[0];
            if (d != null) {
                let e = b - d.index;
                if (0 <= e && e < this._af.length) {
                    c = this._af[e];
                }
            }
        }
        if (c == null) {
            c = a._rows$i.item(b);
            this._a5 = c;
        }
        return c;
    }
    _as(a, b) {
        return {
            ret: ((() => { let c = this._at(1, a, b); a = c.p1; b = c.p2; return c.ret; })()),
            p0: a,
            p1: b
        };
    }
    _ao() {
        let a = this._av;
        let b = this._a1.e(a._recordType);
        if (b == null) {
            return null;
        }
        return this._aq(b);
    }
    _ci(a, b, c) {
    }
    _at(a, b, c) {
        let d = ((() => { let e = this._av._readUInt16FromBuffer(b, c); b = e.p0; c = e.p1; return e.ret; })());
        let e = Formula._h(this._b.cellReferenceMode, a);
        let f = this._ch(e, d, b, c);
        b = f.p2;
        c = f.p3;
        return {
            ret: e,
            p1: b,
            p2: c
        };
    }
    _au(a, b, c, d) {
        if (b == 0) {
            return {
                ret: null,
                p2: c,
                p3: d
            };
        }
        let e = Formula._h(this._b.cellReferenceMode, a);
        let f = this._ch(e, b, c, d);
        c = f.p2;
        d = f.p3;
        return {
            ret: e,
            p2: c,
            p3: d
        };
    }
    _cj() {
        this._af = null;
    }
    _ck(a) {
        this._av = a._parentStream;
    }
    _cl(a) {
        if (this._av != null) {
            this._av._addSubStream(a);
        }
        this._av = a;
    }
    _cm(a) {
        if (this._af == null) {
            this._af = new Array(32);
        }
        let b = this._af[0];
        if (b == null) {
            this._af[0] = a;
        }
        else {
            let c = a.index - b.index;
            if (0 <= c && c < this._af.length) {
                this._af[c] = a;
            }
        }
    }
    _cn(a) {
        this._az = a;
        this._a2 = null;
    }
    _co(a) {
        if (this._az != null) {
            this._a2 = this._az.i(a);
        }
        else {
            this._a2 = null;
        }
    }
    _cs(a, b) {
        this._bd.item(a, b);
    }
    _ct(a) {
        for (let b of fromEnum(this._i)) {
            let c = typeCast(CurrentWorkbookReference.$, b);
            if (c == null) {
                continue;
            }
            c.ak(a);
        }
    }
    _ar() {
        if (this._a9) {
            return null;
        }
        this._a9 = true;
        if (this._bo != null) {
            for (let a = 0; a < this._bo.count; a++) {
                FONTRecord.o(this, this._bo._inner[a]);
            }
            this._bo = null;
        }
        if (this._bs != null) {
            for (let b = 0; b < this._bs.count; b++) {
                XFRecord.o(this, this._bs._inner[b]);
            }
            this._bs = null;
        }
        if (this._br != null) {
            for (let c = 0; c < this._br.count; c++) {
                XFEXTRecord.o(this, this._br._inner[c]);
            }
            this._br = null;
        }
        if (this._bn != null) {
            for (let d = 0; d < this._bn.count; d++) {
                DXFRecord.o(this, this._bn._inner[d]);
            }
            this._bn = null;
        }
        if (this._bq != null) {
            for (let e = 0; e < this._bq.count; e++) {
                STYLERecord.o(this, this._bq._inner[e]);
            }
            this._bq = null;
        }
        if (this._bp != null) {
            for (let f = 0; f < this._bp.count; f++) {
                STYLEEXTRecord.o(this, this._bp._inner[f]);
            }
            this._bp = null;
        }
        return WorkItemExtensions.a(WorkItemExtensions.c(Async.g(nullableNotEquals(this._cc, null), () => WorkItemExtensions.g(Nullable$1.$.specialize(Number_$type), this._ap(this._cc.value), () => this._cc = Nullable$1.toNullable(Number_$type, null))), () => Async.g(nullableNotEquals(this._cb, null), () => WorkItemExtensions.g(Nullable$1.$.specialize(Number_$type), this._ap(this._cb.value), () => this._cb = Nullable$1.toNullable(Number_$type, null)))), () => this._a9 = false);
    }
    _ax(a) {
        if (this._aw == null) {
            this._aw = new WorkbookCFInfo();
        }
        return this._aw.a(a);
    }
    _cp() {
        if (this._aw == null) {
            return;
        }
        for (let a of fromEnum(this._b._worksheets$i)) {
            let b = this._ax(a);
            if (b == null) {
                continue;
            }
            let c = b.f();
            let d = new List$1(ConditionPriority.$, 0);
            for (let e of fromEnum(c)) {
                for (let f of fromEnum(e.i)) {
                    let g = ConditionFactory_BIFF8.i(f.m, f.e.c);
                    let h = ConditionFactory_BIFF8.d(g, e, f, a);
                    let i = f.e != null ? f.e.d : f.h != null ? f.h.a.d : 0;
                    if (h != null) {
                        d.add(((() => {
                            let $ret = new ConditionPriority();
                            $ret.a = h;
                            $ret.b = i;
                            return $ret;
                        })()));
                    }
                }
            }
            DocCoreUtils.ar(ConditionPriority.$, d, new ConditionPrioritySortComparer());
            let j = new List$1(ConditionBase.$, 2, d.count);
            for (let k = 0; k < d.count; k++) {
                j.add(d._inner[k].a);
            }
            a._conditionalFormats$i._aw(j);
        }
    }
    _cg(a, b, c) {
        for (let d of fromEnum(a)) {
            let e = typeCast(WorksheetShapeGroup.$, d);
            if (e != null) {
                this._cg(e._shapes$i, b, c);
            }
            if (d._h == null || d._h.e == null) {
                continue;
            }
            b.item(d._h.e.t, d);
            if (d._h.t != null) {
                c.add(d._h.t);
            }
        }
    }
    _am() {
        let a = this._ca.length - 2;
        while (this._ca.position <= a) {
            let b = this._ca.position;
            let c = null;
            try {
                c = new Biff8RecordStream(1, this);
                if (this._av._recordType == 0) {
                    return null;
                }
                if (this._b7 < 0) {
                    if (this._av._recordType == 224) {
                        this._b7 = b;
                    }
                }
                else if (this._ah == null) {
                    if (this._av._recordType != 224) {
                        this._a1.s(this._b7);
                    }
                }
                let d = this._ao();
                if (d == null) {
                    continue;
                }
                let e = c;
                c = null;
                return WorkItemExtensions.c(WorkItemExtensions.b(d, (f) => {
                    if (e != null) {
                        e.dispose();
                    }
                    f.y();
                }), () => this._am());
            }
            finally {
                if (c != null) {
                    c.dispose();
                }
            }
        }
        return null;
    }
    static _an(a, b, c, d) {
        for (let e = a._styles$i.count - 1; e >= 0; e--) {
            if (a._styles$i._item(e)._k == false) {
                a._styles$i.removeAt(e);
            }
        }
        return Async.n(StructuredStorageManager.$, new StructuredStorageManager(b, true), (f) => {
            let g = new DocumentSummaryInformation();
            let h = new SummaryInformation();
            {
                let i = f._ac("\u0005SummaryInformation");
                try {
                    if (i != null && i.length != 0) {
                        h.k(i);
                    }
                }
                finally {
                    if (i != null) {
                        i.dispose();
                    }
                }
            }
            {
                let j = f._ac("\u0005DocumentSummaryInformation");
                try {
                    if (j != null && j.length != 0) {
                        g.k(j);
                    }
                }
                finally {
                    if (j != null) {
                        j.dispose();
                    }
                }
            }
            let k = f._ac("Workbook");
            if (k == null) {
                k = f._ac("Book");
                if (k == null) {
                    throw new ArgumentException(2, ExcelUtils.ef("LE_ArgumentException_FileDoesntContainsWorkbookStream"), c);
                }
            }
            let l = f._ac("encryption");
            return WorkItemExtensions.a(Async.h(() => {
                let m = ExcelUtils.ee(b);
                return WorkItemExtensions.a(Async.n(WorkbookLoadManagerExcel2003.$, new WorkbookLoadManagerExcel2003(a, k, m, d), (n) => WorkItemExtensions.a(n._o(), () => n._ci(l, g, h))), () => a._hf(f, f._a, stringEmpty()));
            }, () => {
                k.close();
                if (l != null) {
                    l.close();
                }
            }), () => a.documentProperties._ag(h, g));
        });
    }
    _ch(a, b, c, d) {
        if (b == 0) {
            return {
                p2: c,
                p3: d
            };
        }
        let e = d + b;
        let f = false;
        let g = new FormulaContext(1, this._b, a);
        let h = WorkbookLoadManagerExcel2003_LoadTokenVisitor.a3(g, this, a._s == 4, c, d);
        let i = new List$1(FormulaToken.$, 0);
        let j = this._av;
        while (h.a6 < e) {
            let k = h.a6;
            let l = ((() => { let m = j.readByteFromBuffer(h.az, h.a6); h.az = m.p0; h.a6 = m.p1; return m.ret; })());
            let m = l == 25 ? ((() => { let n = FormulaToken.b(j, l, h.az, h.a6); h.az = n.p2; h.a6 = n.p3; return n.ret; })()) : FormulaToken.c(j, l);
            if (m == null) {
                break;
            }
            m.m(h);
            let n = typeCast(AttrTokenBase.$, m);
            if (n != null && n.q) {
                a._ax = true;
            }
            let o = typeCast(FunctionVOperator.$, m);
            if (o != null) {
                if (o.$function._vv == 255) {
                    f = true;
                }
                else if (o.$function._vv == 359) {
                    a._ai = true;
                }
                else if (o.$function._qu) {
                    a._at = true;
                }
            }
            i.add(m);
        }
        a._e = i.toArray();
        c = h.az;
        d = h.a6;
        h.g();
        if (d != e) {
            d = e;
        }
        let p = WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor.a2(g, this, c, d);
        p.h();
        if (a._aq == false && f) {
            let q = AddInFunctionResolver.bi(g);
            let r = q.a2();
        }
        return {
            p2: c,
            p3: d
        };
    }
    _ap(a) {
        let b = this._ca.position;
        this._ca.position = a;
        return WorkItemExtensions.a(Async.n(Biff8RecordStream.$, new Biff8RecordStream(1, this), (c) => this._aq(this._a1.e(c._recordType))), () => this._ca.position = b);
    }
    _aq(a) {
        if (a.n == false) {
            this._av._transform.k();
        }
        return WorkItemExtensions.a(Async.g(a.e, () => a.a(this), () => {
            a.h(this);
            return null;
        }), () => {
            if (a.n == false) {
                this._av._transform.i();
            }
        });
    }
    _cq() {
        let a = new Dictionary$2(Number_$type, WorksheetShape.$, 0);
        let b = new List$1(FtRboData.$, 0);
        for (let c of fromEnum(this._b._sheets$i)) {
            this._cg(c._p, a, b);
        }
        for (let d of fromEnum(a)) {
            let e = typeCast(UnknownShape.$, d.value);
            if (e != null && e._ek) {
                this._b._d6.add_1(d.key);
            }
        }
        for (let f = 0; f < b.count; f++) {
            let g = b._inner[f];
            let h;
            if (((() => { let i = a.tryGetValue(g.e, h); h = i.p1; return i.ret; })())) {
                g.b = h;
            }
            else {
            }
        }
    }
    _cr(a) {
        let b = false;
        let e = a._e;
        for (let d = 0; d < e.length; d++) {
            let c = e[d];
            let f = typeCast(NameToken.$, c);
            if (f == null) {
                let g = typeCast(FunctionVOperator.$, c);
                if (g != null && g.$function._vv == 255 && g.$function == Function._q) {
                    b = true;
                }
                continue;
            }
            let h;
            if (((() => { let i = this._bf.tryGetValue(f, h); h = i.p1; return i.ret; })()) == false) {
                continue;
            }
            f.e(Number_$type, Boolean_$type, this._ay, h);
        }
        if (b) {
            let i = new FormulaContext(1, this._b, a);
            let j = AddInFunctionResolver.bi(i);
            let k = j.a2();
        }
    }
    get _ba() {
        if (this._bs != null && this._bs.count != 0 && (this._br == null || this._br.count == 0)) {
            return true;
        }
        if (this._bq != null && this._bq.count != 0 && (this._bp == null || this._bp.count == 0)) {
            return true;
        }
        return false;
    }
    get _bj() {
        return this._be;
    }
    get _ai() {
        return this._a1.b;
    }
    get _a0() {
        return this._az;
    }
    get _a3() {
        return this._a2;
    }
    get _av() {
        return this._a1.d;
    }
    set _av(a) {
        this._a1.d = a;
    }
    get _bw() {
        if (this._bn == null) {
            this._bn = new List$1(DXFRecordInfo.$, 0);
        }
        return this._bn;
    }
    get _cd() {
        return this._cb;
    }
    set _cd(a) {
        this._cb = a;
    }
    get _bx() {
        if (this._bo == null) {
            this._bo = new List$1(FONTRecordInfo.$, 0);
        }
        return this._bo;
    }
    get _ce() {
        return this._cc;
    }
    set _ce(a) {
        this._cc = a;
    }
    get _by() {
        if (this._bp == null) {
            this._bp = new List$1(STYLEEXTRecordInfo.$, 0);
        }
        return this._bp;
    }
    get _bz() {
        if (this._bq == null) {
            this._bq = new List$1(STYLERecordInfo.$, 0);
        }
        return this._bq;
    }
    get _b0() {
        if (this._br == null) {
            this._br = new List$1(XFEXTRecordInfo.$, 0);
        }
        return this._br;
    }
    get _b1() {
        if (this._bs == null) {
            this._bs = new List$1(XFRecordInfo.$, 0);
        }
        return this._bs;
    }
    get _b2() {
        return this._a1.p;
    }
    get _b3() {
        return this._a1.q;
    }
    get _b4() {
        if (this._bt == null) {
            this._bt = new List$1(WorksheetCellComment.$, 0);
        }
        return this._bt;
    }
    get _b5() {
        if (this._bu == null) {
            this._bu = new List$1(WorkbookStyle.$, 0);
        }
        return this._bu;
    }
    get _al() {
        return this._ak;
    }
    get _bk() {
        return this._bg;
    }
    get _bl() {
        return this._bh;
    }
    get _ca() {
        return this._a1.c;
    }
    get _b9() {
        return this._b8;
    }
    get _bm() {
        return this._bi;
    }
    get _ah() {
        return this._a1.a;
    }
    _ag() {
        return Encoding.unicode.getBytes1("VelvetSweatshop");
    }
}
WorkbookLoadManagerExcel2003.$t = markType(WorkbookLoadManagerExcel2003, 'WorkbookLoadManagerExcel2003', WorkbookLoadManager.$);
/**
 * @hidden
 */
export class WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor extends FormulaTokenVisitor {
    constructor() {
        super();
        this.az = null;
        this.a3 = 0;
        this.a0 = null;
    }
    g() {
        this.az = null;
        this.a3 = 0;
        this.a0 = null;
        super.g();
    }
    o(a) {
        let b = this.a0._av;
        let c = ((() => { let d = b.readByteFromBuffer(this.az, this.a3); this.az = d.p0; this.a3 = d.p1; return d.ret; })()) + 1;
        let d = ((() => { let e = b._readUInt16FromBuffer(this.az, this.a3); this.az = e.p0; this.a3 = e.p1; return e.ret; })()) + 1;
        a.q = new Array(c);
        for (let e = 0; e < c; e++) {
            a.q[e] = new Array(d);
        }
        for (let f = 0; f < d; f++) {
            for (let g = 0; g < c; g++) {
                let h = ((() => { let i = Constant.a(b, this.az, this.a3); this.az = i.p1; this.a3 = i.p2; return i.ret; })());
                let i = h.f(b, this.az, this.a3);
                this.az = i.p1;
                this.a3 = i.p2;
                a.q[g][f] = h;
            }
        }
    }
    ae(a) {
        let b = this.a0._av;
        let c = ((() => { let d = b._readUInt16FromBuffer(this.az, this.a3); this.az = d.p0; this.a3 = d.p1; return d.ret; })());
        a.r = new Array(c);
        for (let d = 0; d < c; d++) {
            a.r[d] = ((() => { let e = b._readFormulaCellAddressRangeFromBuffer(this.az, this.a3); this.az = e.p0; this.a3 = e.p1; return e.ret; })());
        }
    }
    static a2(a, b, c, d) {
        if (WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor.a1 == null) {
            WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor.a1 = new WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor();
        }
        WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor.a1.b = a;
        WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor.a1.az = c;
        WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor.a1.a3 = d;
        WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor.a1.a0 = b;
        return WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor.a1;
    }
}
WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor.$t = markType(WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor, 'WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor', FormulaTokenVisitor.$);
WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor.a1 = null;
/**
 * @hidden
 */
export class WorkbookLoadManagerExcel2003_LoadTokenVisitor extends FormulaTokenVisitor {
    constructor() {
        super();
        this.az = null;
        this.a6 = 0;
        this.a5 = false;
        this.a1 = null;
        this.a0 = null;
    }
    e(a) {
    }
    g() {
        this.az = null;
        this.a6 = 0;
        this.a5 = false;
        this.a1 = null;
        this.a0 = null;
        super.g();
    }
    j(a) {
        a.o = this.a4();
        this.n(a);
    }
    l(a) {
        let b = this.a0.readBytesFromBuffer(8, this.az, this.a6);
        this.az = b.p1;
        this.a6 = b.p2;
    }
    n(a) {
        a.x = ((() => { let b = this.a0._readFormulaCellAddressRangeFromBuffer(this.az, this.a6); this.az = b.p0; this.a6 = b.p1; return b.ret; })());
    }
    o(a) {
        let b = this.a0.readBytesFromBuffer(7, this.az, this.a6);
        this.az = b.p1;
        this.a6 = b.p2;
    }
    p(a) {
        let b = ((() => { let c = this.a0._readUInt16FromBuffer(this.az, this.a6); this.az = c.p0; this.a6 = c.p1; return c.ret; })());
        for (let c = 0; c < b; c++) {
            let d = this.a0._readUInt16FromBuffer(this.az, this.a6);
            this.az = d.p0;
            this.a6 = d.p1;
        }
        let e = this.a0._readUInt16FromBuffer(this.az, this.a6);
        this.az = e.p0;
        this.a6 = e.p1;
    }
    q(a) {
        let b = this.a0._readUInt16FromBuffer(this.az, this.a6);
        this.az = b.p0;
        this.a6 = b.p1;
    }
    r(a) {
        let b = this.a0._readUInt16FromBuffer(this.az, this.a6);
        this.az = b.p0;
        this.a6 = b.p1;
    }
    s(a) {
        a.t = ((() => { let b = this.a0.readByteFromBuffer(this.az, this.a6); this.az = b.p0; this.a6 = b.p1; return b.ret; })());
        a.v = ((() => { let b = this.a0.readByteFromBuffer(this.az, this.a6); this.az = b.p0; this.a6 = b.p1; return b.ret; })());
    }
    t(a) {
        let b = this.a0._readUInt16FromBuffer(this.az, this.a6);
        this.az = b.p0;
        this.a6 = b.p1;
    }
    u(a) {
        let b = this.a0._readUInt16FromBuffer(this.az, this.a6);
        this.az = b.p0;
        this.a6 = b.p1;
    }
    v(a) {
    }
    w(a) {
        let b = ((() => { let c = this.a0.readByteFromBuffer(this.az, this.a6); this.az = c.p0; this.a6 = c.p1; return c.ret; })());
        a.r = b != 0;
    }
    y(a) {
        a.p = ErrorValue._j(((() => { let b = this.a0.readByteFromBuffer(this.az, this.a6); this.az = b.p0; this.a6 = b.p1; return b.ret; })()));
    }
    z(a) {
        let b = ((() => { let c = this.a0._readUInt16FromBuffer(this.az, this.a6); this.az = c.p0; this.a6 = c.p1; return c.ret; })());
        let c = ((() => { let d = this.a0._readInt16FromBuffer(this.az, this.a6); this.az = d.p0; this.a6 = d.p1; return d.ret; })());
        a.p = new CellAddress(1, b, false, c, false);
    }
    aa(a) {
        a.$function = Function._gu(((() => { let b = this.a0._readUInt16FromBuffer(this.az, this.a6); this.az = b.p0; this.a6 = b.p1; return b.ret; })()));
        a.argumentCount = a.$function._q1;
    }
    ac(a) {
        let b = ((() => { let c = this.a0.readByteFromBuffer(this.az, this.a6); this.az = c.p0; this.a6 = c.p1; return c.ret; })());
        b &= 127;
        let c = ((() => { let d = this.a0._readUInt16FromBuffer(this.az, this.a6); this.az = d.p0; this.a6 = d.p1; return d.ret; })());
        c &= 32767;
        a.argumentCount = b;
        a.$function = Function._gu(c);
        if (a.$function._qk) {
            a.argumentCount--;
        }
    }
    ad(a) {
        a.p = ((() => { let b = this.a0._readUInt16FromBuffer(this.az, this.a6); this.az = b.p0; this.a6 = b.p1; return b.ret; })());
    }
    ae(a) {
        let b = this.a0._readUInt32FromBuffer(this.az, this.a6);
        this.az = b.p0;
        this.a6 = b.p1;
        a.p = ((() => { let c = this.a0._readUInt16FromBuffer(this.az, this.a6); this.az = c.p0; this.a6 = c.p1; return c.ret; })());
    }
    af(a) {
        let b = this.a0._readUInt32FromBuffer(this.az, this.a6);
        this.az = b.p0;
        this.a6 = b.p1;
        a.p = ((() => { let c = this.a0._readUInt16FromBuffer(this.az, this.a6); this.az = c.p0; this.a6 = c.p1; return c.ret; })());
    }
    ag(a) {
        a.p = ((() => { let b = this.a0._readUInt16FromBuffer(this.az, this.a6); this.az = b.p0; this.a6 = b.p1; return b.ret; })());
    }
    ah(a) {
        let b = this.a0._readUInt32FromBuffer(this.az, this.a6);
        this.az = b.p0;
        this.a6 = b.p1;
        a.p = ((() => { let c = this.a0._readUInt16FromBuffer(this.az, this.a6); this.az = c.p0; this.a6 = c.p1; return c.ret; })());
    }
    ai(a) {
    }
    aj(a) {
        let b = ((() => { let c = this.a0._readUInt16FromBuffer(this.az, this.a6); this.az = c.p0; this.a6 = c.p1; return c.ret; })());
        let c = this.a0._readUInt16FromBuffer(this.az, this.a6);
        this.az = c.p0;
        this.a6 = c.p1;
        this.a7(a, b - 1);
    }
    ak(a) {
        a.o = this.a4();
        let b = ((() => { let c = this.a0._readUInt16FromBuffer(this.az, this.a6); this.az = c.p0; this.a6 = c.p1; return c.ret; })());
        let c = this.a0._readUInt16FromBuffer(this.az, this.a6);
        this.az = c.p0;
        this.a6 = c.p1;
        this.a7(a, b - 1);
        if (this.a5 == false && a.o.l == -2 && typeCast(Worksheet.$, a.u._af) !== null) {
            let d = this.a1._j;
            for (let e = 0, f = d.count; e < f; e++) {
                let g = d._inner[e];
                if (!g.j && g.l >= 0 && g.n == a.u._af) {
                    a.o = g;
                    break;
                }
            }
        }
    }
    al(a) {
        a.p = ((() => { let b = this.a0.readDoubleFromBuffer(this.az, this.a6); this.az = b.p0; this.a6 = b.p1; return b.ret; })());
    }
    an(a) {
    }
    ap(a) {
        a.o = this.a4();
        this.au(a);
    }
    as(a) {
        let b = this.a0._readUInt32FromBuffer(this.az, this.a6);
        this.az = b.p0;
        this.a6 = b.p1;
    }
    au(a) {
        a.y = ((() => { let b = this.a0._readFormulaCellAddressFromBuffer(this.az, this.a6); this.az = b.p0; this.a6 = b.p1; return b.ret; })());
    }
    av(a) {
        a.p = ((() => { let b = this.a0.readFormattedStringFromBuffer(0, this.az, this.a6); this.az = b.p1; this.a6 = b.p2; return b.ret; })())._y;
    }
    aw(a) {
    }
    ax(a) {
        let b = ((() => { let c = this.a0._readUInt16FromBuffer(this.az, this.a6); this.az = c.p0; this.a6 = c.p1; return c.ret; })());
        let c = ((() => { let d = this.a0._readInt16FromBuffer(this.az, this.a6); this.az = d.p0; this.a6 = d.p1; return d.ret; })());
        a.p = new CellAddress(1, b, false, c, false);
    }
    ay(a) {
    }
    static a3(a, b, c, d, e) {
        if (WorkbookLoadManagerExcel2003_LoadTokenVisitor.a2 == null) {
            WorkbookLoadManagerExcel2003_LoadTokenVisitor.a2 = new WorkbookLoadManagerExcel2003_LoadTokenVisitor();
        }
        WorkbookLoadManagerExcel2003_LoadTokenVisitor.a2.b = a;
        WorkbookLoadManagerExcel2003_LoadTokenVisitor.a2.az = d;
        WorkbookLoadManagerExcel2003_LoadTokenVisitor.a2.a6 = e;
        WorkbookLoadManagerExcel2003_LoadTokenVisitor.a2.a1 = b;
        WorkbookLoadManagerExcel2003_LoadTokenVisitor.a2.a0 = b._av;
        WorkbookLoadManagerExcel2003_LoadTokenVisitor.a2.a5 = c;
        return WorkbookLoadManagerExcel2003_LoadTokenVisitor.a2;
    }
    a4() {
        if (this.a5) {
            let a = ((() => { let b = this.a0._readUInt16FromBuffer(this.az, this.a6); this.az = b.p0; this.a6 = b.p1; return b.ret; })());
            let b = ((() => { let c = this.a0._readUInt16FromBuffer(this.az, this.a6); this.az = c.p0; this.a6 = c.p1; return c.ret; })());
            let c = this.a1._i;
            let d = c._inner[c.count - 1];
            let e = d.aa(a);
            let f = null;
            if (a != b) {
                f = d.aa(b);
            }
            return d.g(e, f);
        }
        else {
            let g = ((() => { let h = this.a0._readUInt16FromBuffer(this.az, this.a6); this.az = h.p0; this.a6 = h.p1; return h.ret; })());
            return this.a1._q(g);
        }
    }
    a7(a, b) {
        if (this.a1._a8) {
            a.e(Number_$type, Boolean_$type, this.a1._ay, b);
        }
        else {
            this.a1._bf.item(a, b);
        }
    }
}
WorkbookLoadManagerExcel2003_LoadTokenVisitor.$t = markType(WorkbookLoadManagerExcel2003_LoadTokenVisitor, 'WorkbookLoadManagerExcel2003_LoadTokenVisitor', FormulaTokenVisitor.$);
WorkbookLoadManagerExcel2003_LoadTokenVisitor.a2 = null;
/**
 * @hidden
 */
export class WorkbookLoadManagerExcel2003_ResolveNamedReferenceVisitor extends FormulaTokenVisitor$2 {
    constructor(a) {
        super(Number_$type, Boolean_$type);
        this.a3 = null;
        this.a3 = a;
    }
    d(a, b) {
        return false;
    }
    af(a, b) {
        a.u = this.a3._b._bb.u.item(b);
        return true;
    }
    ag(a, b) {
        a.u = a.o.e.u.item(b);
        return true;
    }
}
WorkbookLoadManagerExcel2003_ResolveNamedReferenceVisitor.$t = markType(WorkbookLoadManagerExcel2003_ResolveNamedReferenceVisitor, 'WorkbookLoadManagerExcel2003_ResolveNamedReferenceVisitor', FormulaTokenVisitor$2.$.specialize(Number_$type, Boolean_$type));
/**
 * @hidden
 */
export class WorkbookSerializationDataExcel2003 extends ValueType {
    constructor(a, ..._rest) {
        super();
        this.g = null;
        this.f = null;
        this.i = null;
        this.h = null;
        this.j = null;
        this.k = null;
        this.l = null;
        this.b = null;
        this.d = null;
        this.p = null;
        this.q = null;
        this.c = null;
        this.a = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    let c = _rest[0];
                    this.b = new ContextStack();
                    this.d = null;
                    this.p = new List$1(WorksheetCellFormatData.$, 0);
                    this.q = new List$1(WorkbookSerializationDataExcel2003_ImageHolder.$, 0);
                    this.c = new SeekableBufferedStream(c);
                    this.a = null;
                    this.g = new BOOLERRRecord();
                    this.f = new BLANKRecord();
                    this.i = new LABELSSTRecord();
                    this.h = new FORMULARecord();
                    this.j = new NUMBERRecord();
                    this.k = new RKRecord();
                    this.l = new ROWRecord();
                }
                break;
        }
    }
    s(a) {
        let b = this.c.position;
        try {
            let c = new Array((this.c.position - a));
            this.c.position = a;
            this.c.read(c, 0, c.length);
            let d = 20;
            let e = d + 4;
            let f = intDivide(c.length, e);
            this.a = new Array(f * d);
            for (let g = 0; g < f; g++) {
                let h = (g * e) + 4;
                let i = (g * d);
                Buffer.c(c, h, this.a, i, d);
            }
        }
        finally {
            this.c.position = b;
        }
    }
    e(a) {
        switch (a) {
            case 517: return this.g;
            case 513: return this.f;
            case 253: return this.i;
            case 6: return this.h;
            case 515: return this.j;
            case 638: return this.k;
            case 520: return this.l;
        }
        return BiffRecordBase$3.c(BIFF8RecordType_$type, WorkbookLoadManagerExcel2003.$, WorkbookSaveManagerExcel2003.$, a, Biff8RecordBase.m);
    }
}
WorkbookSerializationDataExcel2003.$t = markStruct(WorkbookSerializationDataExcel2003, 'WorkbookSerializationDataExcel2003');
/**
 * @hidden
 */
export class WorkbookSerializationDataExcel2003_ImageHolder extends Base {
    constructor(a, b) {
        super();
        this.a = null;
        this.d = 0;
        this.a = a;
        this.d = b;
    }
    equals(a) {
        let b = typeCast(WorkbookSerializationDataExcel2003_ImageHolder.$, a);
        return b != null && Base.equalsStatic(this.a, b.a);
    }
    getHashCode() {
        return Base.getHashCodeStatic(this.a);
    }
}
WorkbookSerializationDataExcel2003_ImageHolder.$t = markType(WorkbookSerializationDataExcel2003_ImageHolder, 'WorkbookSerializationDataExcel2003_ImageHolder');
/**
 * @hidden
 */
export class BiffRecordStream extends Stream {
    constructor(a, ..._rest) {
        super();
        this._aj = false;
        this._bi = 0;
        this._bm = null;
        this._bl = null;
        this._a4 = 0;
        this._a7 = 0;
        this._am = new List$1(BiffRecordStream_RecordBlockInfo.$, 0);
        this._aw = 0;
        this._ah = false;
        this._a8 = 0;
        this._au = 0;
        this._at = 0;
        this._w = null;
        this._ap = null;
        this._o = null;
        this._ai = false;
        this._q = null;
        this._loadManager_1 = null;
        this._saveManager = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    this._o = new Array(8);
                    this._q = c || InPlaceTransform.b;
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    let f = _rest[3];
                    let g = [f];
                    {
                        let i = g[0];
                        this._o = new Array(8);
                        this._q = i || InPlaceTransform.b;
                    }
                    this._ai = true;
                    this._aj = true;
                    this._loadManager = c;
                    this._bm = d;
                    this._bl = e;
                    this._au = this._bb(e);
                    if (this._au == this._a1()) {
                        this._am.add(this._aa(this._bm.position, 0));
                        return;
                    }
                    let h = this._ba(this._bl);
                    this._bi = this._bm.position;
                    this._a4 = h;
                    this._am.add(this._aa(this._bm.position, h));
                    this._bm.position = this._bi + this._a4;
                    this._bw();
                    this._bm.position = this._bi;
                    this._b8(0);
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    let f = _rest[3];
                    let g = [f];
                    {
                        let i = g[0];
                        this._o = new Array(8);
                        this._q = i || InPlaceTransform.b;
                    }
                    this._aj = true;
                    this.saveManager = c;
                    this._bm = d;
                    this._au = e;
                    this._am.add(this._aa(this._bm.position + this._ax() + this._bj(), 0));
                    this._bi = this._bm.position;
                    this._b8(0);
                }
                break;
        }
    }
    get parentStreamRaw() {
        return this._w;
    }
    set parentStreamRaw(a) {
        this._w = typeCast(BiffRecordStream.$, a);
    }
    writeByte(a) {
        this._write9(a);
    }
    writeByteArray(a) {
        this._write2(a);
    }
    writeDouble(a) {
        this._write10(a);
    }
    writeString(a, b) {
        this._write15(a, b);
    }
    get_canRead() {
        return true;
    }
    get canRead() {
        return this.get_canRead();
    }
    get_canSeek() {
        return true;
    }
    get canSeek() {
        return this.get_canSeek();
    }
    get_canWrite() {
        return true;
    }
    get canWrite() {
        return this.get_canWrite();
    }
    disposeCore(a) {
        try {
            if (a) {
                this._b1();
                if (this._q.d && this._q.c == false) {
                    for (let b = 0; b < this._am.count; b++) {
                        let c = this._am._inner[b];
                        this._bm.position = c.g;
                        this._q.g(this._bm, c.b);
                    }
                    this._q.f();
                }
                this._bm.position = this.endUnderlyingStreamPosition;
                if (this._w != null) {
                    this._w._aj = true;
                }
            }
            this._aj = false;
        }
        finally {
            super.disposeCore(a);
        }
    }
    get_length() {
        return this._a4;
    }
    get length() {
        return this.get_length();
    }
    flush() {
    }
    get_position() {
        return this._a7;
    }
    set_position(a) {
        if (this._aj == false) {
            return;
        }
        if (this._a7 == a) {
            return;
        }
        if (a < 0) {
            return;
        }
        let b = (a - this._a7);
        let c = this._a8 + b;
        this._a7 = a;
        if (this._bi == this._bm.position && 0 <= c && c < this._am._inner[this._aw].b) {
            this._a8 = c;
            this._bi += b;
            this._bm.position = this._bi;
        }
        else {
            this._b9();
        }
    }
    get position() {
        return this.get_position();
    }
    set position(a) {
        this.set_position(a);
    }
    read(a, b, c) {
        if (this._aj == false) {
            return 0;
        }
        if (a == null) {
            return 0;
        }
        if (b < 0) {
            return 0;
        }
        if (c < 0) {
            return 0;
        }
        if (b + c > a.length) {
            return 0;
        }
        let d = Math.min(c, (this._a4 - this._a7));
        if (d < 0) {
            return 0;
        }
        let e = 0;
        while (e < d) {
            e += this._bc(a, b + e, d - e);
        }
        return e;
    }
    seek(a, b) {
        switch (b) {
            case 0:
                this.position = a;
                break;
            case 1:
                this.position += a;
                break;
            case 2:
                this.position = this.length + a;
                break;
            default: break;
        }
        return this._a7;
    }
    setLength(a) {
        if (a == this._a4) {
            return;
        }
        if (a < this._a4) {
            return;
        }
        let b = a - this._a4;
        this._a4 = a;
        let c = false;
        let d = this._bm.position;
        while (true) {
            let e = this._am.count - 1;
            let f = this._am._inner[e];
            let g = f.b;
            if (g + b <= f.d) {
                f.b = (g + b);
                break;
            }
            else {
                let h = f.d - f.b;
                b -= h;
                f.b = f.d;
                this._bm.position += h;
                this._cz(this._a3());
                c = true;
            }
        }
        if (c) {
            this._bm.position = d;
        }
    }
    write(a, b, c) {
        if (a == null) {
            return;
        }
        if (b < 0) {
            return;
        }
        if (c < 0) {
            return;
        }
        if (b + c > a.length) {
            return;
        }
        let d = 0;
        let e = true;
        if (this._ai == false) {
            this._cx(Math.min(c, this._am._inner[0].d));
            e = false;
        }
        let f = this._a7 + c;
        if (f > this.length) {
            this.setLength(f);
        }
        while (d < c) {
            d += this._bh(a, b + d, c - d);
        }
        if (e == false) {
            this._ah = false;
        }
    }
    _addSubStream(a) {
        let b = typeCast(BiffRecordStream.$, a);
        if (this._ap == null) {
            this._ap = new List$1(IBiffRecordStream_$type, 0);
        }
        this._ap.add(a);
        b.parentStreamRaw = this;
        this._aj = false;
        this._am._inner[this._aw].h();
    }
    _appendNextRecordIfType(a) {
        if (this._af(a) == false) {
            return false;
        }
        this._bm.seek(this._am._inner[this._am.count - 1].b, 1);
        this._bw();
        return true;
    }
    _capCurrentBlock() {
        this._syncWorkbookStreamPosition();
        this._am._inner[this._aw].h();
    }
    _getDataSize(a, b, c) {
        let d = this.position;
        try {
            this.position = a;
            {
                let e = new MemoryStream(0);
                try {
                    let f = this._x(e, -a);
                    if (f._a4 < a) {
                        f.setLength(a);
                    }
                    f.position = a;
                    f._write15(c, b);
                    return e.position;
                }
                finally {
                    if (e != null) {
                        e.dispose();
                    }
                }
            }
        }
        finally {
            this.position = d;
        }
    }
    _getStartOfRecord() {
        return this._am._inner[0].g - this._ax() - this._bj();
    }
    readByteFromBuffer(a, b) {
        if (b == a.length) {
            let c = this._by(a, b);
            a = c.p0;
            b = c.p1;
        }
        return {
            ret: a[b++],
            p0: a,
            p1: b
        };
    }
    _readBytes(a) {
        if (a < 0) {
            return new Array(0);
        }
        let b = new Array(a);
        let c = this.read(b, 0, a);
        if (c == a) {
            return b;
        }
        if (c == 0) {
            return new Array(0);
        }
        let d = new Array(c);
        Buffer.c(b, 0, d, 0, c);
        return d;
    }
    readBytesFromBuffer(a, b, c) {
        if (a < 0) {
            return {
                ret: new Array(0),
                p1: b,
                p2: c
            };
        }
        let d = new Array(a);
        let e = 0;
        while (true) {
            let f = Math.min(a - e, b.length - c);
            Buffer.c(b, c, d, e, f);
            c += f;
            e += f;
            if (e == a) {
                return {
                    ret: d,
                    p1: b,
                    p2: c
                };
            }
            if (this.position == this.length) {
                let g = new Array(e);
                Buffer.c(d, 0, g, 0, e);
                return {
                    ret: g,
                    p1: b,
                    p2: c
                };
            }
            let h = this._by(b, c);
            b = h.p0;
            c = h.p1;
        }
    }
    _readDouble() {
        if (this.read(this._o, 0, 8) != 8) {
            throw new EndOfStreamException(null, null);
        }
        return BitConverter.o(this._o, 0);
    }
    readDoubleFromBuffer(a, b) {
        if (b + 8 > a.length) {
            let c = this._by(a, b);
            a = c.p0;
            b = c.p1;
        }
        let d = BitConverter.o(a, b);
        b += 8;
        return {
            ret: d,
            p0: a,
            p1: b
        };
    }
    _readFormattedString(a) {
        if (a != 0 && a != 1) {
            return null;
        }
        let b = a == 0 ? this.readByte() : this._readUInt16();
        return this._readFormattedString1(b);
    }
    _readFormattedString1(a) {
        let b;
        if (((() => { let c = this._tryReadFormattedString(a, b); b = c.p1; return c.ret; })()) == false) {
            throw new EndOfStreamException(null, null);
        }
        return b;
    }
    _tryReadFormattedString(a, b) {
        b = null;
        let c = this._z(a);
        if (c == null) {
            return {
                ret: false,
                p1: b
            };
        }
        if (c.a) {
            let d = new FormattedStringElement(1, c.c);
            this._b6(d, c.d);
            b = d;
        }
        else {
            b = new StringElement(c.c);
        }
        this._b4(c.b);
        return {
            ret: true,
            p1: b
        };
    }
    _readFormattedStringBlock(a, b) {
        if (a == 0) {
            return null;
        }
        let c = new Array(0);
        let d = 0;
        let e = this._by(c, d);
        c = e.p0;
        d = e.p1;
        let f = 0;
        return Async.f(0, a, 1, (g) => {
            b.add(((() => { let h = this.readFormattedStringFromBuffer(1, c, d); c = h.p1; d = h.p2; return h.ret; })()));
            f++;
            if (1000 < f) {
                f = 0;
                return false;
            }
            return true;
        });
    }
    readFormattedStringFromBuffer(a, b, c) {
        let d = a == 0 ? ((() => { let e = this.readByteFromBuffer(b, c); b = e.p0; c = e.p1; return e.ret; })()) : ((() => { let e = this._readUInt16FromBuffer(b, c); b = e.p0; c = e.p1; return e.ret; })());
        return {
            ret: ((() => { let e = this._readFormattedStringFromBuffer1(d, b, c); b = e.p1; c = e.p2; return e.ret; })()),
            p1: b,
            p2: c
        };
    }
    _readFormattedStringFromBuffer1(a, b, c) {
        let d = ((() => { let e = this._y(a, b, c); b = e.p1; c = e.p2; return e.ret; })());
        let e;
        if (d.a) {
            let f = new FormattedStringElement(1, d.c);
            let g = this._readFormattingRunsFromBuffer(f, d.d, b, c);
            b = g.p2;
            c = g.p3;
            e = f;
        }
        else {
            e = new StringElement(d.c);
        }
        let h = this._b5(b, c, d.b);
        b = h.p0;
        c = h.p1;
        return {
            ret: e,
            p1: b,
            p2: c
        };
    }
    _readFormulaCellAddressFromBuffer(a, b) {
        let c = ((() => { let d = this._readUInt16FromBuffer(a, b); a = d.p0; b = d.p1; return d.ret; })());
        let d = ((() => { let e = this._readUInt16FromBuffer(a, b); a = e.p0; b = e.p1; return e.ret; })());
        return {
            ret: BiffRecordStream._t(c, d),
            p0: a,
            p1: b
        };
    }
    _readFormulaCellAddressRangeFromBuffer(a, b) {
        let c = ((() => { let d = this._readUInt16FromBuffer(a, b); a = d.p0; b = d.p1; return d.ret; })());
        let d = ((() => { let e = this._readUInt16FromBuffer(a, b); a = e.p0; b = e.p1; return e.ret; })());
        let e = ((() => { let f = this._readUInt16FromBuffer(a, b); a = f.p0; b = f.p1; return f.ret; })());
        let f = ((() => { let g = this._readUInt16FromBuffer(a, b); a = g.p0; b = g.p1; return g.ret; })());
        let g = BiffRecordStream._t(c, e);
        let h = BiffRecordStream._t(d, f);
        return {
            ret: new CellAddressRange(1, g, h),
            p0: a,
            p1: b
        };
    }
    _ao(a, b) {
        let c = ((() => { let d = this._readUInt16FromBuffer(a, b); a = d.p0; b = d.p1; return d.ret; })());
        let d = new List$1(CellAddressRange.$, 2, c);
        for (let e = 0; e < c; e++) {
            d.add(((() => { let f = this._readFormulaCellAddressRangeFromBuffer(a, b); a = f.p0; b = f.p1; return f.ret; })()));
        }
        return {
            ret: d,
            p0: a,
            p1: b
        };
    }
    _readInt16() {
        if (this.read(this._o, 0, 2) != 2) {
            throw new EndOfStreamException(null, null);
        }
        return BitConverter.p(this._o, 0);
    }
    _readInt32() {
        if (this.read(this._o, 0, 4) != 4) {
            throw new EndOfStreamException(null, null);
        }
        return BitConverter.q(this._o, 0);
    }
    _readInt16FromBuffer(a, b) {
        if (b + 2 > a.length) {
            let c = this._by(a, b);
            a = c.p0;
            b = c.p1;
        }
        let d = BitConverter.p(a, b);
        b += 2;
        return {
            ret: d,
            p0: a,
            p1: b
        };
    }
    _readInt32FromBuffer(a, b) {
        if (b + 4 > a.length) {
            let c = this._by(a, b);
            a = c.p0;
            b = c.p1;
        }
        let d = BitConverter.q(a, b);
        b += 4;
        return {
            ret: d,
            p0: a,
            p1: b
        };
    }
    _readNextBlockType() {
        if (this._bm.position >= this._bm.length - 1) {
            return Nullable$1.toNullable(Number_$type, null);
        }
        let a = this._bm.position;
        let b = this._bb(this._bl);
        this._bm.position = a;
        return Nullable$1.toNullable(Number_$type, b);
    }
    _readNullTerminatedUnicodeString() {
        let a = new List$1(Number_$type, 0);
        while (true) {
            let b = this.readByte();
            let c = this.readByte();
            if (b <= 0 && c <= 0) {
                break;
            }
            a.add(b);
            a.add(c);
        }
        return Encoding.unicode.getString(a.toArray());
    }
    _writeNullTerminatedUnicodeString(a) {
        this._write2(Encoding.unicode.getBytes1(a));
        this.writeByte(0);
        this.writeByte(0);
    }
    _readRect() {
        let a = this._readInt32();
        let b = this._readInt32();
        let c = this._readInt32();
        let d = this._readInt32();
        return new Rect(0, a, b, c - a, d - b);
    }
    _readUInt16() {
        if (this.read(this._o, 0, 2) != 2) {
            throw new EndOfStreamException(null, null);
        }
        return BitConverter.w(this._o, 0);
    }
    _readUInt16FromBuffer(a, b) {
        if (b + 2 > a.length) {
            let c = this._by(a, b);
            a = c.p0;
            b = c.p1;
        }
        let d = BitConverter.w(a, b);
        b += 2;
        return {
            ret: d,
            p0: a,
            p1: b
        };
    }
    _readUInt32() {
        if (this.read(this._o, 0, 4) != 4) {
            throw new EndOfStreamException(null, null);
        }
        return BitConverter.x(this._o, 0);
    }
    _readUInt32FromBuffer(a, b) {
        if (b + 4 > a.length) {
            let c = this._by(a, b);
            a = c.p0;
            b = c.p1;
        }
        let d = BitConverter.x(a, b);
        b += 4;
        return {
            ret: d,
            p0: a,
            p1: b
        };
    }
    _syncWorkbookStreamPosition() {
        if (this._bi == this._bm.position) {
            return;
        }
        this._b9();
    }
    _write9(a) {
        let b = new Array(1);
        b[0] = a;
        this._write2(b);
    }
    _write2(a) {
        if (a == null) {
            return;
        }
        this.write(a, 0, a.length);
    }
    _write10(a) {
        this._write2(BitConverter.c(a));
    }
    _write12(a) {
        this._write2(BitConverter.e(a));
    }
    _write11(a) {
        this._write2(BitConverter.d(a));
    }
    _write17(a) {
        this._write2(BitConverter.h(a));
    }
    _write18(a) {
        this._write2(BitConverter.i(a));
    }
    _write19(a) {
        this._write2(BitConverter.j(a));
    }
    _write14(a) {
        this._write5(new StringElement(a));
    }
    _write15(a, b) {
        this._write6(new StringElement(a), b);
    }
    _write16(a, b, c) {
        this._write7(new StringElement(a), b, c);
    }
    _write3(a) {
        let b;
        let c;
        let d = BiffRecordStream._b0(a, b, c);
        b = d.p1;
        c = d.p2;
        this._write17(b);
        this._write17(c);
    }
    _write4(a) {
        let b;
        let c;
        let d;
        let e;
        let f = BiffRecordStream._b0(a.d, b, d);
        b = f.p1;
        d = f.p2;
        let g = BiffRecordStream._b0(a.b, c, e);
        c = g.p1;
        e = g.p2;
        this._write17(b);
        this._write17(c);
        this._write17(d);
        this._write17(e);
    }
    _write1(a, b = true) {
        let c = this.position;
        this._write17(0);
        let d;
        for (d = 0; d < a.count; d++) {
            if (b == false && this._bytesAvailableInCurrentBlock < 8) {
                break;
            }
            this._write4(a._inner[d]);
        }
        let e = this.position;
        this.position = c;
        this._write17(d);
        this.position = e;
        return d;
    }
    _write5(a) {
        this._write8(a, true);
    }
    _write8(a, b) {
        this._cy(a, 0, true, false, 0, true, b);
    }
    _write6(a, b) {
        this._write7(a, b, true);
    }
    _write7(a, b, c) {
        if (b != 0 && b != 1) {
            return;
        }
        this._cy(a, 0, true, true, b, c, true);
    }
    _write13(a) {
        let b = a.length;
        let c = this._am._inner[0];
        if (this._ai || a.length > c.d) {
            this.write(a.getBuffer(), 0, b);
            return;
        }
        let d = this._getStartOfRecord();
        if (this._bi != d || this._bi != this._bm.position) {
            this._bi = d;
            this._bm.position = d;
        }
        let e = new Array(4 + b);
        Buffer.c(BitConverter.d(this._au), 0, e, 0, 2);
        Buffer.c(BitConverter.d(b), 0, e, 2, 2);
        Buffer.c(a.getBuffer(), 0, e, 4, b);
        this._q.l(this._bm.position + 4, e, 4, b);
        this._bm.write(e, 0, e.length);
        this._ai = true;
        this._bi += e.length;
        this._a4 = this._a7 = this._a8 = c.b = b;
    }
    _writeEMURect(a) {
        this._write12(truncate(a.left));
        this._write12(truncate(a.top));
        this._write12(truncate(a.right));
        this._write12(truncate(a.bottom));
    }
    _bw() {
        let a = this._a3();
        while (true) {
            if (this._af(a) == false) {
                break;
            }
            this._bm.position += this._am._inner[this._am.count - 1].b;
        }
    }
    _af(a) {
        if (this._bm.position >= this._bm.length - 1) {
            return false;
        }
        let b = this._bm.position;
        let c = this._bb(this._bl);
        if (this._ak(a, c) == false) {
            this._bm.position = b;
            return false;
        }
        let d = this._ba(this._bl);
        let e = this._ay(c);
        d -= e;
        this._bn.position += e;
        this._a4 += d;
        this._am.add(this._aa(this._bm.position, d));
        return true;
    }
    _ay(a) {
        switch (a) {
            case 2165: return 12;
            default: return 0;
        }
    }
    _aa(a, b) {
        return new BiffRecordStream_RecordBlockInfo(a, b, this._a2());
    }
    _b3(a, b, c) {
        a._bi = -1;
        a._a4 = this._a4;
        a._a7 = this._a7;
        a._am = new List$1(BiffRecordStream_RecordBlockInfo.$, 0);
        let d = c - this._am._inner[0].g;
        for (let e of fromEnum(this._am)) {
            a._am.add(new BiffRecordStream_RecordBlockInfo(e.g + d, e.b, e.d));
        }
        a._aw = this._aw;
        a._a8 = this._a8;
        a._au = this._au;
        a._aj = this._aj;
        a._loadManager = this._loadManager;
        a._bm = b;
        a._w = this._w;
        a.saveManager = this.saveManager;
        if (this._ap != null) {
            a._ap = new List$1(IBiffRecordStream_$type, 1, this._ap);
        }
        a._at = this._at;
        a._ai = this._ai;
    }
    _z(a) {
        if (this.position == this.length) {
            return null;
        }
        let b = this.readByte();
        let c = (b & 1) == 0;
        let d = (b & 4) == 4;
        let e = (b & 8) == 8;
        if (e && this.position + 1 >= this.length) {
            return null;
        }
        let f = e ? this._readUInt16() : 0;
        let g = 0;
        if (d) {
            if (this.position + 3 >= this.length) {
                return null;
            }
            g = this._readInt32();
        }
        let h = c ? Workbook._g1 : Encoding.unicode;
        let i = a;
        if (c == false) {
            i *= 2;
        }
        let j = new Array(i);
        let k = this._bc(j, 0, i);
        let l = h.getString1(j, 0, k);
        if (l.length != a && this._bytesAvailableInCurrentBlock == 0) {
            let m = this._z(a - l.length);
            if (m == null) {
                return null;
            }
            l += m.c;
        }
        let n = new BiffRecordStream_FormattedStringInfo();
        n.b = g;
        n.a = e;
        n.d = f;
        n.c = l;
        return n;
    }
    _ak(a, b) {
        return a == b;
    }
    _bh(a, b, c) {
        this._syncWorkbookStreamPosition();
        let d = this._am._inner[this._aw];
        if (this._a8 == d.d) {
            this._b2();
            d = this._am._inner[this._aw];
            this._a8 = 0;
            this._bm.position = d.g;
            this._bi = this._bm.position;
            this._ct(this._au);
        }
        let e = Math.min(c, d.d - this._a8);
        this._q.l(this._bm.position, a, b, e);
        this._bm.write(a, b, e);
        let f = (this._bm.position - this._bi);
        if (f > 0) {
            this._ah = true;
        }
        this._a8 += f;
        this._a7 += f;
        this._bi += f;
        return f;
    }
    _ct(a) {
    }
    _bv(a, b, c) {
        if (b + c > a.length) {
            let d = this._by(a, b);
            a = d.p0;
            b = d.p1;
        }
        b += c;
        return {
            p0: a,
            p1: b
        };
    }
    _bx() {
        this._cz(this._a3());
        this._bi += 4;
        this._b2();
        this._a8 = 0;
    }
    _by(a, b) {
        let c = 0;
        if (b < a.length) {
            c = a.length - b;
        }
        let d = this._am._inner[this._aw];
        let e = d.b;
        let f;
        if (this._a8 == e) {
            f = this._am._inner[this._aw + 1].b;
        }
        else {
            f = e - this._a8;
        }
        let g = new Array(c + f);
        if (c != 0) {
            Buffer.c(a, b, g, 0, c);
        }
        this._bc(g, c, f);
        b = 0;
        a = g;
        return {
            p0: a,
            p1: b
        };
    }
    static _t(a, b) {
        let c = (b & 16384) == 16384;
        let d = (b & 32768) == 32768;
        let e = (b & 255);
        return new CellAddress(1, a, d, e, c);
    }
    static _b0(a, b, c) {
        c = a.r;
        if (a.g) {
            c |= 16384;
        }
        if (a.p) {
            c |= 32768;
        }
        b = a.t;
        return {
            p1: b,
            p2: c
        };
    }
    _b1() {
        if (this._ah) {
            let a = this._bm.position;
            let b = this._am._inner[this._aw];
            this._bm.position = b.g - this._ax();
            this._cu(this._bm, b.b, false);
            this._bm.position = a;
            this._ah = false;
        }
        else if (this._ai == false) {
            this._cx(0);
        }
    }
    _a3() {
        let a = this._nextBlockTypeInternal;
        if (a == this._a1()) {
            return this._a0();
        }
        this._nextBlockTypeInternal = this._a1();
        return a;
    }
    _b2() {
        this._b1();
        this._b8(this._aw + 1);
    }
    _b4(a) {
        this.seek(a, 1);
    }
    _b5(a, b, c) {
        let d = this._bv(a, b, c);
        a = d.p0;
        b = d.p1;
        return {
            p0: a,
            p1: b
        };
    }
    _y(a, b, c) {
        let d = ((() => { let e = this.readByteFromBuffer(b, c); b = e.p0; c = e.p1; return e.ret; })());
        let e = (d & 1) == 0;
        let f = (d & 4) == 4;
        let g = (d & 8) == 8;
        let h = g ? ((() => { let i = this._readUInt16FromBuffer(b, c); b = i.p0; c = i.p1; return i.ret; })()) : 0;
        let i = 0;
        if (f) {
            i = ((() => { let j = this._readInt32FromBuffer(b, c); b = j.p0; c = j.p1; return j.ret; })());
        }
        let j = e ? Workbook._g1 : Encoding.unicode;
        let k = a;
        if (e == false) {
            k *= 2;
        }
        let l = Math.min(k, b.length - c);
        let m = j.getString1(b, c, l);
        c += l;
        if (m.length != a && c >= b.length) {
            let n = this._by(b, c);
            b = n.p0;
            c = n.p1;
            let o = ((() => { let p = this._y(a - m.length, b, c); b = p.p1; c = p.p2; return p.ret; })());
            m += o.c;
        }
        let p = new BiffRecordStream_FormattedStringInfo();
        p.b = i;
        p.a = g;
        p.d = h;
        p.c = m;
        return {
            ret: p,
            p1: b,
            p2: c
        };
    }
    _b6(a, b) {
        let c = this._loadManager._b;
        for (let d = 0; d < b; d++) {
            let e = this._readUInt16();
            let f = this._readUInt16();
            let g = new FormattedStringRun(a, e);
            g.f(c).setFontFormatting(this._loadManager._h._inner[f]);
            a._ah.add(g);
        }
    }
    _readFormattingRunsFromBuffer(a, b, c, d) {
        let e = this._loadManager;
        let f = e._b;
        for (let g = 0; g < b; g++) {
            let h = ((() => { let i = this._readUInt16FromBuffer(c, d); c = i.p0; d = i.p1; return i.ret; })());
            let i = ((() => { let j = this._readUInt16FromBuffer(c, d); c = j.p0; d = j.p1; return j.ret; })());
            if (h < a._w) {
                let j = new FormattedStringRun(a, h);
                j.d(f).setFontFormatting(e._h._inner[i]);
                a._ah.add(j);
            }
        }
        return {
            p2: c,
            p3: d
        };
    }
    _bc(a, b, c) {
        if (c == 0) {
            return 0;
        }
        this._syncWorkbookStreamPosition();
        let d = this._am._inner[this._aw];
        let e = d.b;
        if (this._a8 == e) {
            if (this._aw == this._am.count - 1) {
                return 0;
            }
            else {
                this._b2();
                d = this._am._inner[this._aw];
                this._a8 = 0;
                this._bm.position = d.g;
                this._bi = this._bm.position;
                e = d.b;
            }
        }
        let f = Math.min(c, e - this._a8);
        let g = this._bm.read(a, b, f);
        this._q.l(this._bi, a, b, g);
        this._a8 += g;
        this._a7 += g;
        this._bi += g;
        return f;
    }
    _b8(a) {
        this._aw = a;
        if (this._aw < this._am.count) {
            this._q.j(this._am._inner[this._aw].b);
        }
    }
    _b9() {
        this._b1();
        this._b8(0);
        let a = 0;
        while (true) {
            if (this._aw == this._am.count) {
                this._bi = -1;
                return;
            }
            let b = this._am._inner[this._aw];
            let c = b.b;
            let d = b.g;
            this._a8 = (this._a7 - a);
            if (this._a8 <= c) {
                d += this._a8;
                this._bi = d;
                this._bm.position = this._bi;
                return;
            }
            a += c;
            this._b2();
        }
    }
    _cx(a) {
        let b = this._getStartOfRecord();
        if (this._bi != b || this._bi != this._bm.position) {
            this._bm.position = b;
            this._bi = b;
        }
        this._cv(this._bm, this._au);
        this._cu(this._bm, a, false);
        this._ai = true;
        this._bi = this._bm.position;
    }
    _cy(a, b, c, d, e, f, g) {
        let h = typeCast(FormattedStringElement.$, a);
        let i = 0;
        let j = 0;
        if (h != null) {
            i = h._ah.count;
            if (i != 0) {
                let k = h._ah._inner[0];
                if (k.i == 0) {
                    let l = k.f(this.saveManager._b);
                    if (l._r.getValueOrDefault() == 0) {
                        j++;
                        i--;
                    }
                }
            }
        }
        let m = 0;
        let n = false;
        if (c) {
            if (d) {
                if (e == 0) {
                    m += 1;
                }
                else {
                    m += 2;
                }
            }
            if (g) {
                n = i != 0;
            }
        }
        m++;
        if (n) {
            m += 2;
        }
        let o = m;
        if (b < a._y.length) {
            if (f == false || ExcelUtils.bf(a._y.substr(b, 1))) {
                o += 2;
            }
            else {
                o += 1;
            }
        }
        if (this._bytesAvailableInCurrentBlock < o) {
            this._syncWorkbookStreamPosition();
            this._b1();
            this._bx();
        }
        let p = this._bytesAvailableInCurrentBlock - m;
        if (c) {
            if (d) {
                if (e == 0) {
                    this._write9(a._y.length);
                }
                else {
                    this._write17(a._y.length);
                }
            }
        }
        let q = a._y.length - b;
        let r;
        let s;
        if (f) {
            r = a._y.substr(b, Math.min(q, p));
            s = true;
            if (ExcelUtils.bf(r)) {
                r = a._y.substr(b, Math.min(q, intDivide(p, 2)));
                s = false;
            }
        }
        else {
            r = a._y.substr(b, Math.min(q, intDivide(p, 2)));
            s = false;
        }
        let t = 0;
        {
            if (s == false) {
                t |= 1;
            }
            if (n) {
                t |= 8;
            }
        }
        this._write9(t);
        if (n) {
            this._write17(i);
        }
        let u = s ? Workbook._g1 : Encoding.unicode;
        this._write2(u.getBytes1(r));
        let v = b + r.length;
        if (v < a._y.length) {
            this._cy(a, v, false, false, e, f, g);
        }
        if (n) {
            for (let w = j; w < h._ah.count; w++) {
                let x = h._ah._inner[w];
                if (this._bytesAvailableInCurrentBlock < 4) {
                    this._b1();
                    this._bx();
                }
                this._write17(x.i);
                let y = 0;
                if (x.h) {
                    let z = x.f(this.saveManager._b)._r;
                    y = z.getValueOrDefault();
                }
                this._write17(y);
            }
        }
    }
    _cz(a) {
        this._cv(this._bm, a);
        this._cu(this._bm, 0, false);
        this._am.add(this._aa(this._bm.position, 0));
    }
    get _an() {
        return this._am;
    }
    get _bytesAvailableInCurrentBlock() {
        this._syncWorkbookStreamPosition();
        return this._am._inner[this._aw].d - this._a8;
    }
    get endUnderlyingStreamPosition() {
        let a = this._am._inner[this._am.count - 1].e;
        if (this._ap != null) {
            for (let b of fromEnum(this._ap)) {
                a = Math.max(a, b.endUnderlyingStreamPosition);
            }
        }
        return a;
    }
    get _loadManager() {
        return this._loadManager_1;
    }
    set _loadManager(a) {
        this._loadManager_1 = a;
    }
    get _nextBlockTypeInternal() {
        return this._at;
    }
    set _nextBlockTypeInternal(a) {
        this._at = a;
    }
    get _bn() {
        return this._bm;
    }
    get _positionInCurrentBlock() {
        return this._a8;
    }
    get _bf() {
        return this._au;
    }
    get saveManager() {
        return this._saveManager;
    }
    set saveManager(a) {
        this._saveManager = a;
    }
    get _transform() {
        return this._q;
    }
}
BiffRecordStream.$t = markType(BiffRecordStream, 'BiffRecordStream', Stream.$, [IBiffRecordStream_$type]);
/**
 * @hidden
 */
export class BiffRecordStream_RecordBlockInfo extends Base {
    constructor(a, b, c) {
        super();
        this.f = 0;
        this.a = 0;
        this.c = 0;
        this.f = a;
        this.a = b;
        this.c = c;
    }
    h() {
        this.c = this.a;
    }
    get e() {
        return this.f + this.a;
    }
    get b() {
        return this.a;
    }
    set b(a) {
        this.a = a;
    }
    get g() {
        return this.f;
    }
    get d() {
        return this.c;
    }
}
BiffRecordStream_RecordBlockInfo.$t = markType(BiffRecordStream_RecordBlockInfo, 'BiffRecordStream_RecordBlockInfo');
/**
 * @hidden
 */
export class BiffRecordStream_FormattedStringInfo extends Base {
    constructor() {
        super(...arguments);
        this.c = null;
        this.a = false;
        this.b = 0;
        this.d = 0;
    }
}
BiffRecordStream_FormattedStringInfo.$t = markType(BiffRecordStream_FormattedStringInfo, 'BiffRecordStream_FormattedStringInfo');
/**
 * @hidden
 */
export class WorkbookCFInfo extends Base {
    constructor() {
        super(...arguments);
        this.b = null;
    }
    a(a) {
        if (this.b == null) {
            this.b = new Dictionary$2(Worksheet.$, WorksheetCFInfo.$, 0);
        }
        let b = null;
        if (((() => { let c = this.b.tryGetValue(a, b); b = c.p1; return c.ret; })()) == false) {
            b = new WorksheetCFInfo(a);
            this.b.addItem(a, b);
        }
        return b;
    }
    c(a) {
        let b = null;
        if (((() => { let c = this.b.tryGetValue(a, b); b = c.p1; return c.ret; })()) == false) {
            return b.f();
        }
        return null;
    }
}
WorkbookCFInfo.$t = markType(WorkbookCFInfo, 'WorkbookCFInfo');
/**
 * @hidden
 */
export class WorksheetCFInfo extends Base {
    constructor(a) {
        super();
        this.e = null;
        this.g = null;
        this.b = null;
        this.d = null;
        this.a = null;
        this.d = a;
        this.e = new Dictionary$2(Number_$type, CondFmtWrapper.$, 0);
        this.g = new List$1(CondFmtWrapper.$, 0);
    }
    h(a) {
        let b = null;
        if (a.d == 0) {
            this.g.add(a);
        }
        else if (((() => { let c = this.e.tryGetValue(a.d, b); b = c.p1; return c.ret; })())) {
            let c = a.h ? "CONDFMT12" : "CONDFMT";
        }
        else {
            this.e.addItem(a.d, a);
        }
        this.b = a;
    }
    c(a) {
        let b = null;
        if (((() => { let c = this.e.tryGetValue(a, b); b = c.p1; return c.ret; })())) {
            return b;
        }
        else {
        }
        return null;
    }
    f() {
        let a = new List$1(CondFmtWrapper.$, 2, this.e.count);
        if (this.g != null) {
            for (let b of fromEnum(this.g)) {
                a.add(b);
            }
        }
        for (let c of fromEnum(this.e.values)) {
            a.add(c);
        }
        return a;
    }
}
WorksheetCFInfo.$t = markType(WorksheetCFInfo, 'WorksheetCFInfo');
/**
 * @hidden
 */
export class CondFmtBase extends Base {
    constructor() {
        super(...arguments);
        this.e = 0;
        this.b = false;
        this.d = 0;
        this.a = null;
        this.c = null;
    }
    toString() {
        if (this.c.count == 0) {
            return super.toString();
        }
        let a = this.c.item(0).worksheet;
        let b = ConditionBase._a1(a, this.c);
        return stringFormat("ID={0} ({1})", this.d, b);
    }
}
CondFmtBase.$t = markType(CondFmtBase, 'CondFmtBase');
/**
 * @hidden
 */
export class CONDFMTSerializer extends CondFmtBase {
    constructor() {
        super();
        this.h = null;
        this.h = new List$1(ConditionBase.$, 0);
    }
    g() {
        if (this.c.count == 1) {
            return this.c.item(0);
        }
        let a = this.c.item(0);
        for (let b = 1; b < this.c.count; b++) {
            let c = this.c.item(b);
            a = WorksheetRegion._g(a, c);
        }
        return a;
    }
}
CONDFMTSerializer.$t = markType(CONDFMTSerializer, 'CONDFMTSerializer', CondFmtBase.$);
/**
 * @hidden
 */
export class CondFmtWrapper extends CondFmtBase {
    constructor() {
        super();
        this.i = null;
        this.g = null;
        this.h = false;
        this.i = new List$1(CfWrapper.$, 0);
    }
}
CondFmtWrapper.$t = markType(CondFmtWrapper, 'CondFmtWrapper', CondFmtBase.$);
/**
 * @hidden
 */
export class CfWrapper extends Base {
    constructor() {
        super();
        this.e = null;
        this.l = null;
        this.m = 0;
        this.k = 0;
        this.n = null;
        this.a = null;
        this.b = null;
        this.c = null;
        this.i = null;
        this.h = null;
        this.d = null;
        this.g = null;
        this.f = null;
        this.j = null;
        this.e = new CfCommonProps();
    }
    o(a) {
        let b = a.b.i.indexOf(this);
    }
}
CfWrapper.$t = markType(CfWrapper, 'CfWrapper');
/**
 * @hidden
 */
export class CfExWrapper extends Base {
    constructor() {
        super(...arguments);
        this.f = 0;
        this.e = false;
        this.d = false;
        this.c = null;
        this.b = null;
        this.a = null;
    }
}
CfExWrapper.$t = markType(CfExWrapper, 'CfExWrapper');
/**
 * @hidden
 */
export class CfExNonCf12Wrapper extends Base {
    constructor() {
        super();
        this.a = null;
        this.c = null;
        this.e = 0;
        this.b = 0;
        this.d = null;
        this.a = new CfCommonProps();
    }
}
CfExNonCf12Wrapper.$t = markType(CfExNonCf12Wrapper, 'CfExNonCf12Wrapper');
/**
 * @hidden
 */
export class CfTemplateParams extends Base {
    constructor() {
        super(...arguments);
        this.c = null;
        this.d = null;
        this.b = null;
        this.a = null;
    }
}
CfTemplateParams.$t = markType(CfTemplateParams, 'CfTemplateParams');
/**
 * @hidden
 */
export class CfCommonProps extends Base {
    constructor() {
        super(...arguments);
        this.a = false;
        this.d = 0;
        this.b = false;
        this.c = Nullable$1.toNullable(CfTemplate_$type, null);
    }
}
CfCommonProps.$t = markType(CfCommonProps, 'CfCommonProps');
/**
 * @hidden
 */
export class CFExFilterParams extends Base {
    constructor() {
        super(...arguments);
        this.b = false;
        this.a = false;
        this.c = 0;
    }
}
CFExFilterParams.$t = markType(CFExFilterParams, 'CFExFilterParams');
/**
 * @hidden
 */
export class CFExTextTemplateParams extends Base {
    constructor() {
        super(...arguments);
        this.a = 0;
    }
}
CFExTextTemplateParams.$t = markType(CFExTextTemplateParams, 'CFExTextTemplateParams');
/**
 * @hidden
 */
export class CFExDateTemplateParams extends Base {
    constructor() {
        super(...arguments);
        this.a = 0;
    }
}
CFExDateTemplateParams.$t = markType(CFExDateTemplateParams, 'CFExDateTemplateParams');
/**
 * @hidden
 */
export class CFExAveragesTemplateParams extends Base {
    constructor() {
        super(...arguments);
        this.a = 0;
    }
}
CFExAveragesTemplateParams.$t = markType(CFExAveragesTemplateParams, 'CFExAveragesTemplateParams');
/**
 * @hidden
 */
export class CfVo extends Base {
    constructor() {
        super(...arguments);
        this.b = 0;
        this.a = null;
        this.c = 0;
    }
}
CfVo.$t = markType(CfVo, 'CfVo');
/**
 * @hidden
 */
export class CfColorScale extends Base {
    constructor() {
        super(...arguments);
        this.b = null;
        this.a = null;
    }
}
CfColorScale.$t = markType(CfColorScale, 'CfColorScale');
/**
 * @hidden
 */
export class CfDataBar extends Base {
    constructor() {
        super(...arguments);
        this.d = false;
        this.e = false;
        this.g = 0;
        this.f = 0;
        this.c = null;
        this.b = null;
        this.a = null;
    }
}
CfDataBar.$t = markType(CfDataBar, 'CfDataBar');
/**
 * @hidden
 */
export class CfIconSet extends Base {
    constructor() {
        super(...arguments);
        this.e = 0;
        this.b = 0;
        this.d = false;
        this.c = false;
        this.a = null;
    }
}
CfIconSet.$t = markType(CfIconSet, 'CfIconSet');
/**
 * @hidden
 */
export class CfIconCriterion extends Base {
    constructor() {
        super(...arguments);
        this.a = null;
        this.b = false;
    }
}
CfIconCriterion.$t = markType(CfIconCriterion, 'CfIconCriterion');
/**
 * @hidden
 */
export class ConditionFactory_BIFF8 extends Base {
    static i(a, b) {
        let c = Nullable$1.toNullable(FormatConditionType_$type, null);
        if (b.hasValue) {
            switch (b.value) {
                case 25:
                case 29:
                case 26:
                case 30:
                    c = Nullable$1.toNullable(FormatConditionType_$type, 11);
                    break;
                case 9:
                    c = Nullable$1.toNullable(FormatConditionType_$type, 9);
                    break;
                case 0:
                    c = Nullable$1.toNullable(FormatConditionType_$type, 0);
                    break;
                case 2:
                    c = Nullable$1.toNullable(FormatConditionType_$type, 2);
                    break;
                case 8:
                    c = Nullable$1.toNullable(FormatConditionType_$type, 8);
                    break;
                case 3:
                    c = Nullable$1.toNullable(FormatConditionType_$type, 3);
                    break;
                case 27:
                    c = Nullable$1.toNullable(FormatConditionType_$type, 7);
                    break;
                case 11:
                    c = Nullable$1.toNullable(FormatConditionType_$type, 13);
                    break;
                case 5:
                    c = Nullable$1.toNullable(FormatConditionType_$type, 4);
                    break;
                case 1:
                    c = Nullable$1.toNullable(FormatConditionType_$type, 1);
                    break;
                case 4:
                    c = Nullable$1.toNullable(FormatConditionType_$type, 5);
                    break;
                case 18:
                case 19:
                case 23:
                case 24:
                case 21:
                case 15:
                case 16:
                case 17:
                case 20:
                case 22:
                    c = Nullable$1.toNullable(FormatConditionType_$type, 10);
                    break;
                case 10:
                    c = Nullable$1.toNullable(FormatConditionType_$type, 12);
                    break;
                case 12:
                    c = Nullable$1.toNullable(FormatConditionType_$type, 14);
                    break;
                case 7:
                    c = Nullable$1.toNullable(FormatConditionType_$type, 6);
                    break;
            }
        }
        if (b.hasValue) {
        }
        if (c.hasValue == false) {
            c = Nullable$1.toNullable(FormatConditionType_$type, Extensions_BIFF8.e(a));
        }
        return c.hasValue ? c.value : 0;
    }
    static d(a, b, c, d) {
        let e = null;
        switch (a) {
            case 11:
                e = ConditionFactory_BIFF8.a(b, c, d);
                break;
            case 9:
                e = ConditionFactory_BIFF8.b(b, c, d);
                break;
            case 0:
                e = ConditionFactory_BIFF8.n(b, c, d);
                break;
            case 2:
                e = ConditionFactory_BIFF8.c(b, c, d);
                break;
            case 3:
                e = ConditionFactory_BIFF8.e(b, c, d);
                break;
            case 7:
                e = ConditionFactory_BIFF8.g(b, c, d);
                break;
            case 13:
                e = ConditionFactory_BIFF8.h(b, c, d);
                break;
            case 1:
                e = ConditionFactory_BIFF8.j(b, c, d);
                break;
            case 5:
                e = ConditionFactory_BIFF8.k(b, c, d);
                break;
            case 12:
                e = ConditionFactory_BIFF8.l(b, c, d);
                break;
            case 14:
                e = ConditionFactory_BIFF8.m(b, c, d);
                break;
            case 4:
                e = ConditionFactory_BIFF8.o(b, c, d);
                break;
            case 8:
                e = ConditionFactory_BIFF8.p(b, c, d);
                break;
            case 10:
                e = ConditionFactory_BIFF8.f(b, c, d);
                break;
            case 6:
                e = ConditionFactory_BIFF8.q(b, c, d);
                break;
            default: break;
        }
        return e;
    }
    static a(a, b, c) {
        let d = new AverageConditionalFormat(1, a.c, 0);
        ConditionFactory_BIFF8.s(d, b);
        ConditionFactory_BIFF8.t(d, b);
        let e = b.l != null ? b.l.a : null;
        if (e != null) {
            let f = e.a > 0;
            let g = b.e.c.hasValue ? b.e.c.value : 25;
            d.aboveBelow = Extensions_BIFF8.a(g, f);
            d.numericStandardDeviation = e != null ? e.a : 0;
        }
        return d;
    }
    static o(a, b, c) {
        let d = new RankConditionalFormat(1, a.c, 1, 10);
        ConditionFactory_BIFF8.s(d, b);
        ConditionFactory_BIFF8.t(d, b);
        let e = b.l != null ? b.l.c : b.g != null ? b.g : null;
        if (e == null) {
        }
        else {
            d.topBottom = e.b ? 1 : 0;
            d.isPercent = e.a;
            d.rank = e.c;
        }
        return d;
    }
    static n(a, b, c) {
        let d = new OperatorConditionalFormat(1, a.c, 2);
        ConditionFactory_BIFF8.s(d, b);
        ConditionFactory_BIFF8.t(d, b);
        d.operator = Extensions_BIFF8.b(b.k);
        let e = null;
        let f = null;
        let g = ConditionFactory_BIFF8.r(b.b, e);
        e = g.p1;
        let h = ConditionFactory_BIFF8.r(b.c, f);
        f = h.p1;
        if (e != null) {
            d._cd = e;
        }
        if (f != null) {
            d._ce = f;
        }
        return d;
    }
    static j(a, b, c) {
        let d = new FormulaConditionalFormat(1, a.c, null, Nullable$1.toNullable(CellReferenceMode_$type, null));
        ConditionFactory_BIFF8.s(d, b);
        ConditionFactory_BIFF8.t(d, b);
        let e = null;
        let f = ConditionFactory_BIFF8.r(b.b, e);
        e = f.p1;
        if (e != null) {
            d._b5 = e;
        }
        return d;
    }
    static p(a, b, c) {
        let d = new TextOperatorConditionalFormat(1, a.c, null, 2);
        ConditionFactory_BIFF8.s(d, b);
        ConditionFactory_BIFF8.t(d, b);
        let e = b.l != null ? b.l.d : null;
        d.textOperator = Extensions_BIFF8.c(e.a);
        let f = null;
        let g = typeCast(NamedReferenceFormula.$, b.b);
        if (g != null) {
            let j = g._e;
            for (let i = 0; i < j.length; i++) {
                let h = j[i];
                let k = typeCast(StrToken.$, h);
                if (k != null) {
                    f = k.p;
                    break;
                }
            }
        }
        else {
        }
        d.text = f;
        return d;
    }
    static f(a, b, c) {
        let d = new DateTimeConditionalFormat(1, a.c, 0);
        ConditionFactory_BIFF8.s(d, b);
        ConditionFactory_BIFF8.t(d, b);
        d.dateOperator = Extensions_BIFF8.d(b);
        return d;
    }
    static e(a, b, c) {
        let d = new DataBarConditionalFormat(1, a.c);
        ConditionFactory_BIFF8.s(d, b);
        d.barFillType = 1;
        d.direction = -5003;
        Extensions_BIFF8.v(d, b);
        let e = b.f;
        if (e != null) {
            d.barColor = e.c;
            Extensions_BIFF8.r(d.minPoint, e.b);
            Extensions_BIFF8.r(d.maxPoint, e.a);
            d.direction = e.d ? -5004 : -5003;
            d.fillPercentMin = e.g;
            d.fillPercentMax = e.f;
            d.showValue = (e.e == false);
        }
        return d;
    }
    static c(a, b, c) {
        let d = b.d;
        let e = d != null && d.a != null ? d.a.length : 2;
        let f = e == 3 ? 1 : 0;
        let g = new ColorScaleConditionalFormat(1, a.c, f);
        ConditionFactory_BIFF8.s(g, b);
        Extensions_BIFF8.u(g, b);
        if (d != null && d.a != null) {
            Extensions_BIFF8.q(g.minimumThreshold, d.b[0], d.a[0]);
            switch (f) {
                case 0:
                    Extensions_BIFF8.q(g.maximumThreshold, d.b[1], d.a[1]);
                    break;
                case 1:
                    Extensions_BIFF8.q(g.midpointThreshold, d.b[1], d.a[1]);
                    Extensions_BIFF8.q(g.maximumThreshold, d.b[2], d.a[2]);
                    break;
            }
        }
        return g;
    }
    static k(a, b, c) {
        let d = new IconSetConditionalFormat(1, a.c, 4);
        ConditionFactory_BIFF8.s(d, b);
        Extensions_BIFF8.w(d, b);
        let e = b.j;
        if (e != null) {
            d.iconSet = Extensions_BIFF8.g(e);
            Extensions_BIFF8.t(d._iconCriteria$i, e.a);
            d.isReverseOrder = e.c;
            d.showValue = (e.d == false);
        }
        return d;
    }
    static b(a, b, c) {
        let d = new BlanksConditionalFormat(1, a.c);
        ConditionFactory_BIFF8.s(d, b);
        ConditionFactory_BIFF8.t(d, b);
        return d;
    }
    static l(a, b, c) {
        let d = new NoBlanksConditionalFormat(1, a.c);
        ConditionFactory_BIFF8.s(d, b);
        ConditionFactory_BIFF8.t(d, b);
        return d;
    }
    static h(a, b, c) {
        let d = new ErrorsConditionalFormat(1, a.c);
        ConditionFactory_BIFF8.s(d, b);
        ConditionFactory_BIFF8.t(d, b);
        return d;
    }
    static m(a, b, c) {
        let d = new NoErrorsConditionalFormat(1, a.c);
        ConditionFactory_BIFF8.s(d, b);
        ConditionFactory_BIFF8.t(d, b);
        return d;
    }
    static q(a, b, c) {
        let d = new UniqueConditionalFormat(1, a.c);
        ConditionFactory_BIFF8.s(d, b);
        ConditionFactory_BIFF8.t(d, b);
        return d;
    }
    static g(a, b, c) {
        let d = new DuplicateConditionalFormat(1, a.c);
        ConditionFactory_BIFF8.s(d, b);
        ConditionFactory_BIFF8.t(d, b);
        return d;
    }
    static s(a, b) {
        a.priority = b.e.d;
        a.stopIfTrue = b.e.b;
    }
    static t(a, b) {
        a._bw = b.h != null && b.h.d != null ? b.h.d : b.n != null ? b.n : null;
    }
    static r(a, b, c = true) {
        b = null;
        if (a == null) {
            return {
                p1: b
            };
        }
        b = typeCast(SingleTargetFormula.$, a);
        if (c) {
        }
        return {
            p1: b
        };
    }
}
ConditionFactory_BIFF8.$t = markType(ConditionFactory_BIFF8, 'ConditionFactory_BIFF8');
/**
 * @hidden
 */
export class CFSerializer extends Base {
    constructor(a) {
        super();
        this.d = null;
        this.b = null;
        this.b = a;
    }
    static a(a) {
        if (a == null || a._conditionalFormats$i.count == 0) {
            return null;
        }
        let b = new CFSerializer(a);
        b.e(a._conditionalFormats$i);
        return b;
    }
    e(a) {
        let b = new Dictionary$2(String_$type, CONDFMTSerializer.$, 0);
        for (let c of fromEnum(a)) {
            let d = c._a0(1);
            let e = null;
            if (((() => { let f = b.tryGetValue(d, e); e = f.p1; return f.ret; })()) == false) {
                e = new CONDFMTSerializer();
                e.d = b.count + 1;
                e.c = c.regions;
                e.a = e.g();
                b.addItem(d, e);
            }
            e.h.add(c);
            e.e = e.h.count;
        }
        this.d = new List$1(CONDFMTSerializer.$, 2, b.count);
        for (let f of fromEnum(b.values)) {
            this.d.add(f);
        }
    }
    get c() {
        return this.d;
    }
}
CFSerializer.$t = markType(CFSerializer, 'CFSerializer');
/**
 * @hidden
 */
export class Extensions_BIFF8 extends Base {
    static e(a) {
        let b = 0;
        switch (a) {
            case 1:
                b = 0;
                break;
            case 3:
                b = 2;
                break;
            case 4:
                b = 3;
                break;
            case 5:
                b = 4;
                break;
            case 2:
                b = 1;
                break;
            case 6:
                b = 5;
                break;
            case 0: break;
        }
        return b;
    }
    static a(a, b) {
        let c = 0;
        switch (a) {
            case 25:
                c = b ? 4 : 0;
                break;
            case 29:
                c = 2;
                break;
            case 26:
                c = b ? 5 : 1;
                break;
            case 30:
                c = 3;
                break;
            default: break;
        }
        return c;
    }
    static b(a) {
        let b = 2;
        switch (a) {
            case 1:
                b = 0;
                break;
            case 3: break;
            case 7:
                b = 6;
                break;
            case 5:
                b = 4;
                break;
            case 8:
                b = 7;
                break;
            case 6:
                b = 5;
                break;
            case 2:
                b = 1;
                break;
            case 4:
                b = 3;
                break;
            default: break;
        }
        return b;
    }
    static i(a) {
        let b = 3;
        switch (a) {
            case 0:
                b = 1;
                break;
            case 2: break;
            case 4:
                b = 5;
                break;
            case 6:
                b = 7;
                break;
            case 5:
                b = 6;
                break;
            case 7:
                b = 8;
                break;
            case 1:
                b = 2;
                break;
            case 3:
                b = 4;
                break;
            default: break;
        }
        return b;
    }
    static c(a) {
        let b = 2;
        switch (a) {
            case 2:
                b = 0;
                break;
            case 3:
                b = 1;
                break;
            case 0:
                b = 2;
                break;
            case 1:
                b = 3;
                break;
            default: break;
        }
        return b;
    }
    static d(a) {
        let b = Nullable$1.toNullable(FormatConditionTimePeriod_$type, null);
        let c = a.l != null ? a.l.b : null;
        if (c != null) {
            switch (c.a) {
                case 2:
                    b = Nullable$1.toNullable(FormatConditionTimePeriod_$type, 6);
                    break;
                case 5:
                    b = Nullable$1.toNullable(FormatConditionTimePeriod_$type, 9);
                    break;
                case 4:
                    b = Nullable$1.toNullable(FormatConditionTimePeriod_$type, 5);
                    break;
                case 8:
                    b = Nullable$1.toNullable(FormatConditionTimePeriod_$type, 8);
                    break;
                case 7:
                    b = Nullable$1.toNullable(FormatConditionTimePeriod_$type, 4);
                    break;
                case 9:
                    b = Nullable$1.toNullable(FormatConditionTimePeriod_$type, 7);
                    break;
                case 3:
                    b = Nullable$1.toNullable(FormatConditionTimePeriod_$type, 3);
                    break;
                case 0:
                    b = Nullable$1.toNullable(FormatConditionTimePeriod_$type, 0);
                    break;
                case 6:
                    b = Nullable$1.toNullable(FormatConditionTimePeriod_$type, 1);
                    break;
                case 1:
                    b = Nullable$1.toNullable(FormatConditionTimePeriod_$type, 2);
                    break;
                default: break;
            }
        }
        if (b.hasValue) {
            return b.value;
        }
        if (a.e.c.hasValue) {
            switch (a.e.c.value) {
                case 18:
                    b = Nullable$1.toNullable(FormatConditionTimePeriod_$type, 6);
                    break;
                case 19:
                    b = Nullable$1.toNullable(FormatConditionTimePeriod_$type, 9);
                    break;
                case 23:
                    b = Nullable$1.toNullable(FormatConditionTimePeriod_$type, 5);
                    break;
                case 20:
                    b = Nullable$1.toNullable(FormatConditionTimePeriod_$type, 8);
                    break;
                case 22:
                    b = Nullable$1.toNullable(FormatConditionTimePeriod_$type, 4);
                    break;
                case 24:
                    b = Nullable$1.toNullable(FormatConditionTimePeriod_$type, 7);
                    break;
                case 21:
                    b = Nullable$1.toNullable(FormatConditionTimePeriod_$type, 3);
                    break;
                case 15:
                    b = Nullable$1.toNullable(FormatConditionTimePeriod_$type, 0);
                    break;
                case 16:
                    b = Nullable$1.toNullable(FormatConditionTimePeriod_$type, 1);
                    break;
                case 17:
                    b = Nullable$1.toNullable(FormatConditionTimePeriod_$type, 2);
                    break;
                default: break;
            }
        }
        return b.hasValue ? b.value : 0;
    }
    static f(a) {
        let b = 0;
        switch (a) {
            case 7:
                b = 3;
                break;
            case 3:
                b = 5;
                break;
            case 2:
                b = 4;
                break;
            case 1: break;
            case 4:
                b = 1;
                break;
            case 5:
                b = 2;
                break;
            default: break;
        }
        return b;
    }
    static g(a) {
        let b = a.b;
        b += 1;
        return b;
    }
    static r(a, b) {
        let c = Extensions_BIFF8.f(b.b);
        if (c == 3) {
            let d = null;
            let e = ConditionFactory_BIFF8.r(b.a, d);
            d = e.p1;
            a._ai(d);
        }
        else if (c != 4 && c != 5) {
            a._setValue1(b.c, c);
        }
        else {
            a._setValue(c);
        }
    }
    static n(a) {
        let b = new CfVo();
        b.b = Extensions_BIFF8.m(a.valueType);
        switch (a.valueType) {
            case 6:
            case 4:
            case 7:
            case 5: break;
            case 0:
            case 1:
            case 2:
                b.c = a.value;
                break;
            case 3:
                b.a = a.formula;
                break;
        }
        return b;
    }
    static q(a, b, c) {
        Extensions_BIFF8.r(a._b, b);
        a.formatColor = c;
    }
    static u(a, b) {
        Extensions_BIFF8.x(a, b);
    }
    static v(a, b) {
        Extensions_BIFF8.x(a, b);
    }
    static w(a, b) {
        Extensions_BIFF8.x(a, b);
    }
    static x(a, b) {
        if (b.a == null) {
            return;
        }
        let c = null;
        let d = ConditionFactory_BIFF8.r(b.a, c);
        c = d.p1;
        if (c != null) {
            a._b6(c);
        }
    }
    static t(a, b) {
        let c = new Array(b.length);
        let d = a._d;
        let e = IconSetConditionalFormat._b9(d.iconSet);
        for (let f = 0; f < b.length; f++) {
            c[f] = new IconCriterion(1, a, f, d.iconSet, e[f]);
            Extensions_BIFF8.s(c[f], b[f]);
        }
        a._q(c);
    }
    static s(a, b) {
        a.comparison = b.b ? 0 : 1;
        Extensions_BIFF8.r(a._b, b.a);
    }
    static l(a) {
        switch (a.conditionType) {
            case 0: return 1;
            case 2: return 3;
            case 3: return 4;
            case 5: return 6;
            case 4: return 5;
            case 11:
            case 9:
            case 12:
            case 13:
            case 14:
            case 1:
            case 8:
            case 10:
            case 6:
            case 7: return 2;
            default: return 2;
        }
    }
    static j(a) {
        let b = 0;
        switch (a.conditionType) {
            case 11:
                let c = typeCast(AverageConditionalFormat.$, a);
                switch (c.aboveBelow) {
                    case 0:
                    case 4:
                        b = 25;
                        break;
                    case 2:
                        b = 29;
                        break;
                    case 1:
                    case 5:
                        b = 26;
                        break;
                    case 3:
                        b = 30;
                        break;
                }
                break;
            case 9:
                b = 9;
                break;
            case 0:
                b = 0;
                break;
            case 2:
                b = 2;
                break;
            case 3:
                b = 3;
                break;
            case 7:
                b = 27;
                break;
            case 13:
                b = 11;
                break;
            case 1:
                b = 1;
                break;
            case 5:
                b = 4;
                break;
            case 12:
                b = 10;
                break;
            case 14:
                b = 12;
                break;
            case 4:
                b = 5;
                break;
            case 8:
                b = 8;
                break;
            case 10:
                let d = typeCast(DateTimeConditionalFormat.$, a);
                switch (d.dateOperator) {
                    case 9:
                        b = 19;
                        break;
                    case 6:
                        b = 18;
                        break;
                    case 5:
                        b = 23;
                        break;
                    case 8:
                        b = 20;
                        break;
                    case 4:
                        b = 22;
                        break;
                    case 7:
                        b = 24;
                        break;
                    case 3:
                        b = 21;
                        break;
                    case 0:
                        b = 15;
                        break;
                    case 1:
                        b = 16;
                        break;
                    case 2:
                        b = 17;
                        break;
                }
                break;
            case 6:
                b = 7;
                break;
        }
        return b;
    }
    static m(a) {
        let b = 1;
        switch (a) {
            case 7:
            case 5:
                b = 3;
                break;
            case 6:
            case 4:
                b = 2;
                break;
            case 0:
                b = 1;
                break;
            case 1:
                b = 4;
                break;
            case 2:
                b = 5;
                break;
            case 3:
                b = 7;
                break;
        }
        return b;
    }
    static p(a) {
        let b = false;
        switch (a) {
            case 0:
            case 4:
            case 2:
                b = true;
                break;
            case 1:
            case 5:
            case 3:
                b = false;
                break;
        }
        return b;
    }
    static k(a) {
        let b = 0;
        switch (a) {
            case 0:
                b = 2;
                break;
            case 1:
                b = 3;
                break;
            case 2:
                b = 0;
                break;
            case 3:
                b = 1;
                break;
        }
        return b;
    }
    static h(a) {
        let b = 0;
        switch (a) {
            case 0: break;
            case 1:
                b = 6;
                break;
            case 2:
                b = 1;
                break;
            case 9:
                b = 5;
                break;
            case 6:
                b = 2;
                break;
            case 5:
                b = 4;
                break;
            case 8:
                b = 8;
                break;
            case 4:
                b = 7;
                break;
            case 7:
                b = 9;
                break;
            case 3:
                b = 3;
                break;
        }
        return b;
    }
    static o(a) {
        let b = (a - 1);
        if (EnumUtil.isDefined(IconSet_$type, enumGetBox(IconSet_$type, b)) == false) {
            b = 3;
        }
        return b;
    }
}
Extensions_BIFF8.$t = markType(Extensions_BIFF8, 'Extensions_BIFF8');
/**
 * @hidden
 */
export class ConditionPriority extends Base {
    constructor() {
        super(...arguments);
        this.a = null;
        this.b = 0;
    }
}
ConditionPriority.$t = markType(ConditionPriority, 'ConditionPriority');
/**
 * @hidden
 */
export class ConditionPrioritySortComparer extends Base {
    compare(a, b) {
        if (a == null || b == null) {
            return 0;
        }
        return Base.compareSimple(a.b, b.b);
    }
}
ConditionPrioritySortComparer.$t = markType(ConditionPrioritySortComparer, 'ConditionPrioritySortComparer', Base.$, [IComparer$1_$type.specialize(ConditionPriority.$)]);
/**
 * @hidden
 */
export class CFUtils extends Base {
    static a(a, b = true) {
        let c = a._ai.a(Worksheet.$);
        if (c == null) {
            if (b) {
            }
            return null;
        }
        return c;
    }
}
CFUtils.$t = markType(CFUtils, 'CFUtils');
/**
 * @hidden
 */
export class TableColumnFilterData extends Base {
    constructor(a, ..._rest) {
        super();
        this.f = null;
        this.b = null;
        this.a = null;
        this.c = null;
        this.d = false;
        this.e = false;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = [c, d.filter];
                    {
                        let g = e[0];
                        let h = e[1];
                        this.b = new RelativeIndex(g);
                        this.a = h;
                        if (this.a == null) {
                            this.e = false;
                            return;
                        }
                        let i;
                        let j;
                        this.e = ((() => { let k = this.a._g(i, j); i = k.p0; j = k.p1; return k.ret; })());
                        this.d = i;
                        this.f = j;
                    }
                    this.c = d;
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    this.b = new RelativeIndex(c);
                    this.a = d;
                    if (this.a == null) {
                        this.e = false;
                        return;
                    }
                    let e;
                    let f;
                    this.e = ((() => { let g = this.a._g(e, f); e = g.p0; f = g.p1; return g.ret; })());
                    this.d = e;
                    this.f = f;
                }
                break;
        }
    }
}
TableColumnFilterData.$t = markType(TableColumnFilterData, 'TableColumnFilterData');
/**
 * @hidden
 */
export class Biff8RecordStream extends BiffRecordStream {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    super(0, c);
                    this._et = true;
                    this._ew = false;
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = [c, c._ca, c._b9];
                    {
                        let f = d[0];
                        let g = d[1];
                        let h = d[2];
                        super(1, f, g, h, f._aj);
                        this._et = true;
                        this._ew = false;
                        f._cl(this);
                    }
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    super(1, c, d, e, c._aj);
                    this._et = true;
                    this._ew = false;
                    c._cl(this);
                }
                break;
            case 3:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    super(2, c, c._c4, d, c._b8);
                    this._et = true;
                    this._ew = false;
                    c._c9(this);
                }
                break;
            case 4:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    super(1, null, d, e, c._b8);
                    this._et = true;
                    this._ew = false;
                    this.saveManager = c;
                }
                break;
        }
    }
    _ax() {
        return 2;
    }
    _bj() {
        return 2;
    }
    _x(a, b) {
        let c = new Biff8RecordStream(0, this._transform);
        this._b3(c, a, b);
        return c;
    }
    _a1() {
        return 0;
    }
    disposeCore(a) {
        super.disposeCore(a);
        if (a) {
            let b = this._loadManagerBiff8;
            if (b != null) {
                b._ck(this);
            }
            let c = this._saveManagerBiff8;
            if (c != null) {
                c._c8(this);
            }
        }
    }
    _a2() {
        return 8224;
    }
    _a0() {
        return Biff8RecordBase.j(this._recordType);
    }
    _z(a) {
        if (this._ew && this.length == this.position) {
            this._af(60);
        }
        return super._z(a);
    }
    _ba(a) {
        return a.readUInt16();
    }
    _bb(a) {
        return a.readUInt16();
    }
    _ak(a, b) {
        if (this._recordType == 438) {
            if (this._ev()) {
                return false;
            }
        }
        if (super._ak(a, b)) {
            return true;
        }
        let c = b;
        if (c == Biff8RecordBase.j(a)) {
            return true;
        }
        if (this._recordType == 235 && c == 235) {
            return true;
        }
        return false;
    }
    _cu(a, b, c) {
        if (c) {
            a.seek(-2, 1);
        }
        a.write(BitConverter.h(b), 0, 2);
    }
    _cv(a, b) {
        a.write(BitConverter.h(b), 0, 2);
    }
    _bh(a, b, c) {
        if (this._et == false) {
            return c;
        }
        return super._bh(a, b, c);
    }
    _debugLogRecord() {
        if (false) {
            let a = this.position;
            this.position = 0;
            let b = this._readBytes(this.length);
            if (EnumUtil.isDefined(BIFF8RecordType_$type, enumGetBox(BIFF8RecordType_$type, this._recordType))) {
            }
            else {
            }
            this.position = a;
        }
        else {
        }
    }
    static _eu(a, b) {
        if (a != null) {
            if (a.comparisonOperator != 0 || a._f) {
                return false;
            }
            let c = typeCast(String_$type, a.value);
            if (c == null) {
                return false;
            }
            if (c.length == 0) {
                b.includeBlanks = true;
            }
            else {
                b._displayValues$i.add(ExcelUtils.el(c));
            }
        }
        return true;
    }
    _fm(a, b, c, d, e) {
        d = 0;
        e = 0;
        if (WorkbookColorInfo.l_op_Equality(a, null)) {
            c = 4;
        }
        else {
            if (a._tint$i.hasValue) {
                d = a._tint$i.value;
            }
            if (a.isAutomatic) {
                c = 0;
            }
            else if (a._color$i.hasValue) {
                let f = a._color$i.value;
                if (ExcelUtils.am(f)) {
                    c = 1;
                    e = intSToU(a._y(this.saveManager._b, b));
                }
                else {
                    c = 2;
                    e = ExcelUtils.ev(a._color$i.value);
                }
            }
            else if (a._themeColorType$i.hasValue) {
                c = 3;
                e = a._themeColorType$i.value;
            }
            else {
                c = 4;
            }
        }
        return {
            p2: c,
            p3: d,
            p4: e
        };
    }
    static _c4(a) {
        switch (a.c) {
            case 0: break;
            case 2:
            case 4:
            case 6:
            case 8: return CustomFilterCondition._a(a.a, a.k);
            case 12: return CustomFilterCondition._a(2, stringEmpty());
            case 14: return CustomFilterCondition._a(5, stringEmpty());
            default: break;
        }
        return null;
    }
    _ev() {
        let a = this._bn.position;
        let b = this.position;
        try {
            this.position = 10;
            let c = this._readUInt16();
            if (c == 0) {
                return true;
            }
            if (this._an.count < 3) {
                return false;
            }
            let d = this._readUInt16();
            this.position = 18;
            let e;
            if (((() => { let f = this._tryReadFormattedString(c, e); e = f.p1; return f.ret; })()) == false) {
                return false;
            }
            if (d > this.length - this.position) {
                return false;
            }
            return true;
        }
        finally {
            this.position = b;
            this._bn.position = a;
        }
    }
    _readAF12CellIcon(a, b) {
        let c = this._readUInt32();
        b = this._readUInt32();
        if (c == 4294967295) {
            a = Nullable$1.toNullable(ST_IconSetType_$type, null);
        }
        else {
            a = Nullable$1.toNullable(ST_IconSetType_$type, c);
        }
        return {
            p0: a,
            p1: b
        };
    }
    _writeAF12CellIcon(a, b) {
        this._write18(a);
        this._write18(b);
    }
    _readAF12Criteria(a) {
        this._readFrtRefHeader1(a, 2175);
        let b = this._dd(true);
        if (b.c == 6) {
            b.m = this._readXLUnicodeStringNoCch(typeGetValue(b.l));
        }
        return b;
    }
    _writeAF12Criteria(a, b) {
        this._writeFrtRefHeader1(a, 2175);
        this._gc(b, true);
        if (b.m != null) {
            this._writeXLUnicodeStringNoCch(b.m);
        }
    }
    _readAF12DateInfo(a) {
        this._readFrtRefHeader1(a, 2175);
        let b = this._readUInt16();
        let c = this._readUInt16();
        let d = this._readUInt32();
        let e = this._readUInt16();
        let f = this._readUInt16();
        let g = this._readUInt16();
        let h = this._readUInt16();
        let i = this._readUInt32();
        let j = this._readUInt32();
        return FixedDateGroup._b(j, b, Nullable$1.toNullable(Number_$type, c), Nullable$1.toNullable(Number_$type, d), Nullable$1.toNullable(Number_$type, e), Nullable$1.toNullable(Number_$type, f), Nullable$1.toNullable(Number_$type, g));
    }
    _writeAF12DateInfo(a, b) {
        this._writeFrtRefHeader1(a, 2175);
        this._write17(b.value.getFullYear());
        this._write17(dateGetMonth(b.value));
        this._write18(intSToU(b.value.getDate()));
        this._write17(b.value.getHours());
        this._write17(b.value.getMinutes());
        this._write17(b.value.getSeconds());
        this._write17(0);
        this._write18(intSToU(0));
        this._write18(b._f);
    }
    _dd(a) {
        let b = new Biff8RecordStream_AFDOper(0);
        b.c = this.readByte();
        b.a = this.readByte();
        switch (b.c) {
            case 0:
            case 12:
            case 14:
                this._readBytes(8);
                break;
            case 2:
                b.l = this._readAFDOperRk();
                break;
            case 4:
                b.l = this._e0();
                break;
            case 6:
                b.l = this._fa(a);
                break;
            case 8:
                b.l = this._readAFDOperBoolErr();
                break;
            default: break;
        }
        return b;
    }
    _gc(a, b) {
        this._write9(a.c);
        this._write9(a.a);
        switch (a.c) {
            case 0:
            case 12:
            case 14:
                this._write2(new Array(8));
                break;
            case 4:
                this._il(a.l);
                break;
            case 6:
                this._ge(typeGetValue(a.l), a.b, b);
                break;
            case 8:
                this._writeAFDOperBoolErr(a.l);
                break;
            default: break;
        }
    }
    _readAFDOperBoolErr() {
        let a = this._readBes();
        let b = this._readUInt16();
        let c = this._readUInt32();
        return a;
    }
    _writeAFDOperBoolErr(a) {
        this._writeBes(a);
        this._write17(0);
        this._write18(intSToU(0));
    }
    _readAFDOperRk() {
        let a = this._readUInt32();
        let b = this._readUInt32();
        return ExcelUtils.ci(a);
    }
    _fa(a) {
        if (a == false) {
            let b = this._readUInt32();
        }
        let c = this.readByte();
        let d = this.readByte();
        let e = this.readByte();
        let f = this.readByte();
        if (a) {
            let g = this._readUInt32();
        }
        return c;
    }
    _ge(a, b, c) {
        let d = (b ? 0 : 1);
        if (c == false) {
            this._write18(intSToU(0));
        }
        this._write9(a);
        this._write9(d);
        this._write9(0);
        this._write9(0);
        if (c) {
            this._write18(intSToU(0));
        }
    }
    _readAutoFilter(a, b) {
        let c = this._readUInt16();
        let d = typeCast(WorksheetColumnFilter.$, b);
        if (d != null) {
            d._h(c);
        }
        let e = this._readUInt16();
        let f = ExcelUtils.c6(e, 0, 1);
        let g = ExcelUtils.bt(e, 2);
        let h = ExcelUtils.bt(e, 3);
        let i = ExcelUtils.bt(e, 4);
        let j = ExcelUtils.bt(e, 5);
        let k = ExcelUtils.bt(e, 6);
        let l = ExcelUtils.c6(e, 7, 15);
        let m = this._dd(false);
        let n = this._dd(false);
        if (i) {
            let o = TopOrBottomFilter._t(k, j);
            let p = NaN;
            if (typeof m.k === 'number') {
                p = m.k;
            }
            let q = new TopOrBottomFilter(2, b, o, l, p);
            return q;
        }
        if (m.c == 6) {
            m.m = this._readXLUnicodeStringNoCch(typeGetValue(m.l));
        }
        if (n.c == 6) {
            n.m = this._readXLUnicodeStringNoCch(typeGetValue(n.l));
        }
        let r = Biff8RecordStream._c4(m);
        let s = Biff8RecordStream._c4(n);
        if (r != null || s != null) {
            let t = new FixedValuesFilter(b);
            if (Biff8RecordStream._eu(r, t) && Biff8RecordStream._eu(s, t)) {
                let u = t._aa();
                if (u == 0) {
                    return null;
                }
                if (u == 1 || f == 1) {
                    let v;
                    let w;
                    let x = b.getDataAreaRowIndexes(v, w);
                    v = x.p0;
                    w = x.p1;
                    let y = false;
                    if (v >= 0) {
                        for (let z = v; z <= w; z++) {
                            let aa = a._rows$i._aj(z);
                            if (t._e(a, aa, z, b.columnIndex)) {
                                y = true;
                                break;
                            }
                        }
                    }
                    if (y) {
                        return t;
                    }
                }
            }
        }
        if (r == null) {
            if (s == null) {
                return null;
            }
            r = s;
            s = null;
        }
        return new CustomFilter(1, b, r, s, f);
    }
    _writeAutoFilter(a) {
        let b = a.a;
        let c = 0;
        let d = null;
        let e = null;
        let f = typeCast(CustomFilter.$, b);
        if (f != null) {
            c = f.conditionalOperator;
            d = new Biff8RecordStream_AFDOper(3, this.saveManager, f.condition1);
            e = new Biff8RecordStream_AFDOper(3, this.saveManager, f.condition2);
        }
        let g = typeCast(FixedValuesFilter.$, b);
        if (g != null && a.e && a.d == false) {
            if (g.includeBlanks) {
                let h = new Biff8RecordStream_AFDOper(0);
                h.c = 12;
                if (a.f != null && a.f.count != 0) {
                    c = 1;
                    d = new Biff8RecordStream_AFDOper(1, ExcelUtils.ea(a.f.item(0)));
                    e = h;
                }
                else {
                    d = h;
                }
            }
            else if (a.f != null && a.f.count != 0) {
                d = new Biff8RecordStream_AFDOper(1, ExcelUtils.ea(a.f.item(0)));
                if (a.f.count != 1) {
                    c = 1;
                    e = new Biff8RecordStream_AFDOper(1, ExcelUtils.ea(a.f.item(1)));
                }
            }
        }
        let i = false;
        let j = false;
        let k = false;
        let l = 0;
        let m = typeCast(TopOrBottomFilter.$, b);
        if (m != null) {
            i = true;
            j = m._x;
            k = m._w;
            l = m.value;
            if (isNaN_(m._z) == false) {
                d = new Biff8RecordStream_AFDOper(2, m._z, m._v);
            }
        }
        if (d == null) {
            d = new Biff8RecordStream_AFDOper(0);
        }
        if (e == null) {
            e = new Biff8RecordStream_AFDOper(0);
        }
        this._write17((a.c != null ? 0 : a.b.index));
        let n = 0;
        let o = ExcelUtils.e1(n, c, 0, 1);
        n = o.p0;
        let p = ExcelUtils.f7(n, i, 4);
        n = p.p0;
        let q = ExcelUtils.f7(n, j, 5);
        n = q.p0;
        let r = ExcelUtils.f7(n, k, 6);
        n = r.p0;
        let s = ExcelUtils.e1(n, l, 7, 15);
        n = s.p0;
        this._write17(n);
        this._gc(d, false);
        this._gc(e, false);
        let t = typeCast(String_$type, d.k);
        if (t != null) {
            this._writeXLUnicodeStringNoCch(t);
        }
        let u = typeCast(String_$type, e.k);
        if (u != null) {
            this._writeXLUnicodeStringNoCch(u);
        }
    }
    _readBes() {
        let a = this.readByte();
        let b = this.readByte();
        if (b == 0) {
            return a != 0;
        }
        return ErrorValue._j(a);
    }
    _writeBes(a) {
        let b;
        let c;
        if (typeCast(Boolean_$type, a) !== null) {
            b = a ? 1 : 0;
            c = 0;
        }
        else {
            b = a._y;
            c = 1;
        }
        this._write9(b);
        this._write9(c);
    }
    _fo(a, b) {
        let c = this._readUInt32();
        let d = null;
        if (c != 0) {
            d = this._readDXFN12List(c);
        }
        let e = null;
        if (b) {
            let f = this._readXLUnicodeString();
            e = this._loadManager._b._styles$i._item1(f);
        }
        if (d != null || e != null) {
            this._loadManager._ac(WorksheetTableColumnArea_$type, a._areaFormats$i, 1, WorksheetTableColumn._ap, e, d);
        }
    }
    _gh(a, b, c) {
        let d = this.position;
        this._write18(intSToU(0));
        this._g2(d, c);
        if (b != null) {
            this._writeXLUnicodeString(b.name);
        }
    }
    _readCFColor() {
        let a = this._readUInt32();
        let b = this._readUInt32();
        let c = this._readDouble();
        let d = Nullable$1.toNullable(Number_$type, null);
        if (c != 0) {
            d = Nullable$1.toNullable(Number_$type, c);
        }
        return ExcelUtils.ac(this._loadManager._b, a, b, d);
    }
    _writeCFColor(a, b) {
        let c;
        let d;
        let e;
        let f = this._fm(a, b, c, d, e);
        c = f.p2;
        d = f.p3;
        e = f.p4;
        this._write18(c);
        this._write18(e);
        this._write10(d);
    }
    _readCFFlag(a, b) {
        let c = this._readUInt32();
        b = this._readUInt32();
        if (c == 4294967295) {
            a = Nullable$1.toNullable(ST_IconSetType_$type, null);
        }
        else {
            a = Nullable$1.toNullable(ST_IconSetType_$type, c);
        }
        return {
            p0: a,
            p1: b
        };
    }
    _writeCFFlag(a, b) {
        this._write18(a);
        this._write18(b);
    }
    _readCondDataValue(a, b) {
        let c = this._readUInt32();
        let d;
        switch (a) {
            case 0:
                d = new OrderedSortCondition(b);
                break;
            case 1:
                d = FillSortCondition._k(this._loadManager, Nullable$1.toNullable(Number_$type, c), b);
                break;
            case 2:
                d = FontColorSortCondition._i(this._loadManager, Nullable$1.toNullable(Number_$type, c), b);
                break;
            default:
                d = null;
                break;
        }
        let e = this._readUInt32();
        return d;
    }
    _writeCondDataValue$1($t, a, b, c, d) {
        if (typeCast(WorksheetTableColumn.$, a) !== null) {
            this._write18(this.saveManager._a2(typeCast(WorksheetTableColumn.$, a)).getValueOrDefault());
        }
        else if (typeCast(RelativeIndex.$, a) !== null) {
            let e = a.index;
            if (c) {
                this._write18(d.l(e).getValueOrDefault());
            }
            else {
                this._write18(d.m(e).getValueOrDefault());
            }
        }
        else {
            return;
        }
        this._write18(intSToU(0));
    }
    _readCondFmt(a, b = false) {
        let c = this._readUInt16();
        let d = this._readUInt16();
        let e = ExcelUtils.bt(d, 0);
        let f = ExcelUtils.c6(d, 1, 15);
        let g = this._readRef8U(a);
        let h = this._ex(a);
        return ((() => {
            let $ret = new CondFmtWrapper();
            $ret.e = c;
            $ret.b = e;
            $ret.d = f;
            $ret.a = g;
            $ret.c = h;
            $ret.h = b;
            return $ret;
        })());
    }
    _readCondFmt12(a) {
        let b;
        let c;
        let d;
        let e;
        let f = this._f2(a, b, c, d, e);
        b = f.p1;
        c = f.p2;
        d = f.p3;
        e = f.p4;
        return this._readCondFmt(a, true);
    }
    _writeCondFmt12(a, b) {
        this._hl(2169, a.a);
        let c = a.h.count;
        this._write17(c);
        let d = 0;
        let e = ExcelUtils.f7(d, true, 0);
        d = e.p0;
        let f = ExcelUtils.e1(d, a.d, 1, 15);
        d = f.p0;
        this._write17(d);
        this._writeRef8U(a.a);
        this._h1(a.c);
    }
    _readCf(a, b) {
        return this._dx(a, b, false);
    }
    _readCf12(a, b) {
        return this._dx(a, b, true);
    }
    _writeCf12(a, b, c, d) {
        let e = b.conditionType;
        let f = e == 0 ? typeCast(OperatorConditionalFormat.$, b) : null;
        let g = e == 8 ? typeCast(TextOperatorConditionalFormat.$, b) : null;
        let h = e == 10 ? typeCast(DateTimeConditionalFormat.$, b) : null;
        let i = null;
        let j = e == 2 || e == 3 || e == 5 ? typeCast(ThresholdConditionBase.$, b) : null;
        this._writeFrtRefHeader1(null, 2170);
        let k = Extensions_BIFF8.l(b);
        this._write9(k);
        let l = 0;
        if (e == 0) {
            l = Extensions_BIFF8.i(f.operator);
        }
        this._write9(l);
        let m = null;
        let n = null;
        let o = null;
        let p = null;
        switch (e) {
            case 0:
                n = f.operand1;
                o = f.operand2;
                break;
            case 1:
                let q = typeCast(FormulaConditionalFormat.$, b);
                n = q.formula;
                break;
            case 2:
            case 3:
            case 5:
                m = j.formula;
                break;
            case 9:
            case 12:
            case 13:
            case 14:
            case 6:
            case 7:
            case 11:
                i = typeCast(ConditionalFormatBase.$, b);
                p = ConditionalFormattingUtils.d(i);
                break;
            case 8:
                p = ConditionalFormattingUtils.f(g);
                break;
            case 10:
                p = ConditionalFormattingUtils.e(h);
                break;
        }
        if (stringIsNullOrEmpty(p) == false) {
            p = FormulaConditionalFormat._b9(p);
            n = Formula._parse(p, 1);
        }
        let r = n != null ? ((() => {
            let $ret = new Rgce();
            $ret.a = n;
            return $ret;
        })()) : null;
        let s = o != null ? ((() => {
            let $ret = new Rgce();
            $ret.a = o;
            return $ret;
        })()) : null;
        let t = m != null ? ((() => {
            let $ret = new Rgce();
            $ret.a = m;
            return $ret;
        })()) : null;
        let u = 0;
        let v = 0;
        let w = this.position;
        this._write17(u);
        let x = this.position;
        this._write17(v);
        i = typeCast(ConditionalFormatBase.$, b);
        let y = i != null ? i._bw : null;
        this._g0(y);
        this._hx(r, w, d);
        this._hx(s, x, d);
        let z = this.position;
        this._write17(0);
        this._hx(t, z, d);
        let aa = j == null && b.stopIfTrue;
        let ab = 0;
        let ac = ExcelUtils.f5(ab, aa, 1);
        ab = ac.p0;
        this._write9(ab);
        let ad = b.priority;
        this._write17(ad);
        let ae = Extensions_BIFF8.j(b);
        this._write17(ae);
        ab = 16;
        this._write9(ab);
        switch (ae) {
            case 5:
                this._gn(typeCast(RankConditionalFormat.$, b));
                break;
            case 25:
            case 29:
            case 26:
            case 30:
                this._gl(typeCast(AverageConditionalFormat.$, b));
                break;
            case 8:
                this._go(typeCast(TextOperatorConditionalFormat.$, b));
                break;
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 23:
            case 24:
            case 21:
            case 22:
            case 20:
                this._gm(typeCast(DateTimeConditionalFormat.$, b));
                break;
            default:
                this._write2(new Array(16));
                break;
        }
        switch (e) {
            case 2:
                let af = typeCast(ColorScaleConditionalFormat.$, b);
                this._gr(af, d);
                break;
            case 3:
                let ag = typeCast(DataBarConditionalFormat.$, b);
                this._gk(ag, d);
                break;
            case 5:
                this._gs(typeCast(IconSetConditionalFormat.$, b), d);
                break;
            case 4:
                let ah = typeCast(RankConditionalFormat.$, b);
                this._gp(ah);
                break;
            default: break;
        }
    }
    _hx(a, b, c) {
        if (a == null) {
            return;
        }
        let d = this.position;
        ObjExtensionMethods.at(a, c);
        let e = this.position;
        let f = (e - d);
        this.position = b;
        this._write17(f);
        this.position = e;
    }
    _dx(a, b, c) {
        let d = null;
        if (c) {
            d = this._readFrtRefHeader1(b, 2170);
        }
        let e = new CfWrapper();
        let f;
        f = this.readByte();
        e.m = f;
        f = this.readByte();
        e.k = f;
        let g = this._readUInt16();
        let h = this._readUInt16();
        e.n = c ? this._readDXFN12() : this._readDXFN();
        let i = null;
        if (g > 0) {
            i = ObjExtensionMethods.v(a, g);
            e.b = i != null ? i.b : null;
        }
        if (h > 0) {
            i = ObjExtensionMethods.v(a, h);
            e.c = i != null ? i.b : null;
        }
        if (c) {
            let j = this._readUInt16();
            if (j > 0) {
                i = ObjExtensionMethods.v(a, j);
                e.a = i != null ? i.b : null;
            }
            f = this.readByte();
            e.e.b = ExcelUtils.bt(f, 1);
            e.e.d = this._readUInt16();
            e.e.c = Nullable$1.toNullable(CfTemplate_$type, this._readUInt16());
            this.readByte();
            e.l = this._dt(e.e);
            switch (e.m) {
                case 1:
                case 2: break;
                case 5:
                    let k = this._dn();
                    let l = e.l != null ? e.l.c : null;
                    if (l != null) {
                        let m = l.b != k.b || l.a != k.a || l.c != k.c;
                    }
                    e.g = k != null ? k : l;
                    break;
                case 3:
                    e.d = this._di(a);
                    break;
                case 4:
                    e.f = this._dj(a, b);
                    break;
                case 6:
                    e.j = this._ds(a, b);
                    break;
            }
        }
        return e;
    }
    _readCfEx(a, b) {
        let c;
        let d;
        let e;
        let f;
        let g = this._f2(b, c, d, e, f);
        c = g.p1;
        d = g.p2;
        e = g.p3;
        f = g.p4;
        let h = this._readUInt32();
        let i = this._readUInt16();
        let j = null;
        if (h == 0) {
            j = this._readCfExNonCf12(a, b);
        }
        let k = a._ax(b);
        let l = k.c(i);
        let m = ((() => {
            let $ret = new CfExWrapper();
            $ret.f = c;
            $ret.e = d;
            $ret.d = e;
            $ret.c = f;
            $ret.a = j;
            $ret.b = l;
            return $ret;
        })());
        l.g = m;
        if (m.a != null) {
            let n = m.a.e;
            if (n >= l.i.count) {
            }
            else {
                let o = l.i.item(n);
                o.h = m.a;
            }
        }
        return m;
    }
    _readCfExNonCf12(a, b) {
        let c = this._readUInt16();
        let d = this.readByte();
        let e = this.readByte();
        let f = this._readUInt16();
        let g = null;
        let h = this.readByte();
        let i = ExcelUtils.bt(h, 0);
        let j = ExcelUtils.bt(h, 1);
        h = this.readByte();
        let k = (h == 1);
        if (k) {
            g = this._readDXFN12();
        }
        this.readByte();
        let l = ((() => {
            let $ret = new CfExNonCf12Wrapper();
            $ret.e = c;
            $ret.d = g;
            $ret.b = d;
            return $ret;
        })());
        l.a.a = i;
        l.a.d = f;
        l.a.b = j;
        l.a.c = Nullable$1.toNullable(CfTemplate_$type, e);
        l.c = this._dt(l.a);
        return l;
    }
    _dt(a) {
        let b = null;
        let c = 0;
        if (a.c.hasValue == false) {
        }
        else {
            c = a.c.value;
        }
        switch (c) {
            case 5:
                b = new CfTemplateParams();
                b.c = this._dm(c);
                break;
            case 25:
            case 29:
            case 26:
            case 30:
                b = new CfTemplateParams();
                b.a = this._dk(c);
                break;
            case 8:
                b = new CfTemplateParams();
                b.d = this._dq(c);
                break;
            case 15:
            case 16:
            case 17:
            case 18:
            case 23:
            case 19:
            case 21:
            case 24:
            case 22:
            case 20:
                b = new CfTemplateParams();
                b.b = this._dl(c);
                break;
            default:
                this._readBytes(16);
                break;
        }
        return b;
    }
    _dm(a) {
        if (a != 5) {
            return null;
        }
        let b = this.readByte();
        let c = ExcelUtils.bt(b, 0);
        let d = ExcelUtils.bt(b, 1);
        let e = this._readUInt16();
        this._readBytes(13);
        return ((() => {
            let $ret = new CFExFilterParams();
            $ret.a = d;
            $ret.c = e;
            $ret.b = c;
            return $ret;
        })());
    }
    _gn(a) {
        let b = 0;
        let c = a.topBottom == 1;
        let d = a.isPercent;
        let e = ExcelUtils.f5(b, c, 0);
        b = e.p0;
        let f = ExcelUtils.f5(b, d, 1);
        b = f.p0;
        this._write9(b);
        let g = a.rank;
        this._write17(g);
        this._write2(new Array(13));
    }
    _dq(a) {
        if (a != 8) {
            return null;
        }
        let b = this._readUInt16();
        this._readBytes(14);
        return ((() => {
            let $ret = new CFExTextTemplateParams();
            $ret.a = b;
            return $ret;
        })());
    }
    _go(a) {
        let b = Extensions_BIFF8.k(a.textOperator);
        this._write17(b);
        this._write2(new Array(14));
    }
    _dl(a) {
        switch (a) {
            case 15:
            case 16:
            case 17:
            case 18:
            case 23:
            case 19:
            case 21:
            case 24:
            case 22:
            case 20: break;
            default: return null;
        }
        let b = this._readUInt16();
        this._readBytes(14);
        return ((() => {
            let $ret = new CFExDateTemplateParams();
            $ret.a = b;
            return $ret;
        })());
    }
    _gm(a) {
        let b = Extensions_BIFF8.h(a.dateOperator);
        this._write17(b);
        this._write2(new Array(14));
    }
    _dk(a) {
        switch (a) {
            case 25:
            case 29:
            case 26:
            case 30: break;
            default: return null;
        }
        let b = this._readUInt16();
        this._readBytes(14);
        return ((() => {
            let $ret = new CFExAveragesTemplateParams();
            $ret.a = b;
            return $ret;
        })());
    }
    _gl(a) {
        let b = 0;
        switch (a.aboveBelow) {
            case 4:
            case 5:
                b = a.numericStandardDeviation;
                break;
        }
        this._write17(b);
        this._write2(new Array(14));
    }
    _dn() {
        let a;
        let b;
        let c;
        let d = this._fp(a, b, c);
        a = d.p0;
        b = d.p1;
        c = d.p2;
        return ((() => {
            let $ret = new CFExFilterParams();
            $ret.b = a;
            $ret.a = b;
            $ret.c = c;
            return $ret;
        })());
    }
    _fp(a, b, c) {
        a = false;
        b = false;
        c = 0;
        let d = this._readUInt16();
        let e = this.readByte();
        let f = this.readByte();
        a = ExcelUtils.bt(f, 0);
        b = ExcelUtils.bt(f, 1);
        c = this._readUInt16();
        return {
            p0: a,
            p1: b,
            p2: c
        };
    }
    _gp(a) {
        this._write17(4);
        let b = 0;
        this._write9(b);
        b = 0;
        let c = a.topBottom == 1;
        let d = a.isPercent;
        let e = ExcelUtils.f5(b, c, 0);
        b = e.p0;
        let f = ExcelUtils.f5(b, d, 1);
        b = f.p0;
        this._write9(b);
        this._write17(a.rank);
    }
    _di(a) {
        let b = null;
        let c = null;
        let d = this._fr(a, b, c);
        b = d.p1;
        c = d.p2;
        return ((() => {
            let $ret = new CfColorScale();
            $ret.b = b;
            $ret.a = c;
            return $ret;
        })());
    }
    _fr(a, b, c) {
        this._readBytes(3);
        let d = this.readByte();
        let e = this.readByte();
        let f = this.readByte();
        b = new Array(d);
        c = new Array(d);
        let g = new Array(d);
        for (let h = 0; h < d; h++) {
            b[h] = this._du(a);
            g[h] = this._readDouble();
        }
        for (let i = 0; i < d; i++) {
            let j = 0;
            c[i] = ((() => { let k = this._ee(j); j = k.p0; return k.ret; })());
        }
        return {
            p1: b,
            p2: c
        };
    }
    _gr(a, b) {
        this._write2(new Array(3));
        let c = a.colorScaleType == 1 ? 3 : 2;
        this._write9(c);
        this._write9(c);
        let d = 0;
        let e = ExcelUtils.f5(d, true, 0);
        d = e.p0;
        let f = ExcelUtils.f5(d, true, 1);
        d = f.p0;
        this._write9(d);
        let g = null;
        let h = null;
        if (a.colorScaleType == 1) {
            g = [a.minimumThreshold, a.midpointThreshold, a.maximumThreshold];
            h = [0, 0.5, 1];
        }
        else {
            g = [a.minimumThreshold, a.maximumThreshold];
            h = [0, 1];
        }
        for (let i = 0; i < g.length; i++) {
            let j = g[i]._b;
            this._gt(j, b);
            this._write10(h[i]);
        }
        for (let k = 0; k < g.length; k++) {
            this._write10(h[k]);
            this._writeCFColor(g[k]._al, 1);
        }
    }
    _ee(a) {
        a = this._readDouble();
        return {
            ret: this._readCFColor(),
            p0: a
        };
    }
    _du(a) {
        let b = new CfVo();
        b.b = this.readByte();
        let c = this._readUInt16();
        if (c > 0) {
            let d = ObjExtensionMethods.v(a, c);
            b.a = d != null ? d.b : null;
        }
        else if (b.b != 2 && b.b != 3) {
            b.c = this._readDouble();
        }
        return b;
    }
    _gt(a, b) {
        let c = Extensions_BIFF8.m(a.valueType);
        this._write9(c);
        if (a.valueType == 3 && a.formula != null) {
            let d = ((() => {
                let $ret = new Rgce();
                $ret.a = a.formula;
                return $ret;
            })());
            let e = this.position;
            this._write17(0);
            this._hx(d, e, b);
        }
        else {
            this._write17(0);
            if (c != 2 && c != 3) {
                this._write10(a.value);
            }
        }
    }
    _dj(a, b) {
        let c = new CfDataBar();
        this._readBytes(3);
        let d = this.readByte();
        c.d = ExcelUtils.bt(d, 0);
        c.e = ExcelUtils.bt(d, 1);
        c.g = this.readByte();
        c.f = this.readByte();
        c.c = this._readCFColor();
        c.b = this._du(a);
        c.a = this._du(a);
        return c;
    }
    _gk(a, b) {
        this._write2(new Array(3));
        let c = 0;
        let d = ExcelUtils.f5(c, a.direction == -5004, 0);
        c = d.p0;
        let e = ExcelUtils.f5(c, a.showValue == false, 1);
        c = e.p0;
        this._write9(c);
        let f = a.fillPercentMin;
        let g = a.fillPercentMax;
        this._write9(f);
        this._write9(g);
        this._writeCFColor(a._cv, 1);
        this._gt(a.minPoint, b);
        this._gt(a.maxPoint, b);
    }
    _ds(a, b) {
        let c = new CfIconSet();
        this._readBytes(3);
        c.e = this.readByte();
        c.b = this.readByte();
        let d = this.readByte();
        c.d = ExcelUtils.bt(d, 0);
        c.c = ExcelUtils.bt(d, 2);
        let e = new Array(c.e);
        for (let f = 0; f < c.e; f++) {
            let g = new CfIconCriterion();
            g.a = this._du(a);
            let h = this.readByte();
            g.b = (h == 1);
            this._readBytes(4);
            e[f] = g;
        }
        c.a = e;
        return c;
    }
    _gs(a, b) {
        this._write2(new Array(3));
        let c = IconCriterion._an(a.iconSet);
        this._write9(c);
        let d = Extensions_BIFF8.o(a.iconSet);
        this._write9(d);
        let e = a.showValue == false;
        let f = a.isReverseOrder;
        let g = 0;
        let h = ExcelUtils.f5(g, e, 0);
        g = h.p0;
        let i = ExcelUtils.f5(g, f, 2);
        g = i.p0;
        this._write9(g);
        for (let j = 0; j < c; j++) {
            let k = a._iconCriteria$i.item(j);
            let l = Extensions_BIFF8.n(k._b);
            this._gt(k._b, b);
            let m = k.comparison == 0 ? 1 : 0;
            this._write9(m);
            this._write2(new Array(4));
        }
    }
    _readDXFALC(a, b, c, d, e, f, g, h, i, j) {
        let k = this._readUInt32();
        let l = ExcelUtils.c7(k, 0, 2);
        let m = ExcelUtils.bu(k, 3);
        let n = ExcelUtils.c7(k, 4, 6);
        let o = ExcelUtils.bu(k, 7);
        let p = ExcelUtils.c7(k, 8, 15);
        let q = ExcelUtils.c7(k, 16, 19);
        let r = ExcelUtils.bu(k, 20);
        let s = ExcelUtils.bu(k, 21);
        let t = ExcelUtils.c7(k, 22, 23);
        let u = this._readInt32();
        if (b == false) {
            a.alignment = l;
        }
        if (c == false) {
            a.verticalAlignment = n;
        }
        if (d == false) {
            a._wrapText$i = ExcelUtils.dv(m);
        }
        if (e == false) {
            a.rotation = p;
        }
        if (f == false && o) {
            a._b6 = true;
        }
        if (g == false) {
            a.indent = q;
            if (u != 255) {
                a.indent += u;
            }
        }
        if (h == false) {
            a._shrinkToFit$i = ExcelUtils.dv(r);
        }
        if (i == false) {
        }
        if (j == false) {
        }
    }
    _writeDXFALC(a, b, c, d, e, f, g, h, i, j) {
        let k = 0;
        let l = false;
        let m = 2;
        let n = false;
        let o = 0;
        let p = 0;
        let q = false;
        let r = false;
        let s = 0;
        let t = 255;
        if (b == false) {
            k = a._a4;
        }
        if (c == false) {
            m = a._a9;
        }
        if (d == false) {
            l = nullableEquals(a._c7, true);
        }
        if (e == false) {
            o = a._cw;
        }
        if (g == false) {
            let u = a._ct;
            p = Math.min(15, u);
            if (15 < u) {
                t = u - p;
            }
        }
        if (h == false) {
            q = nullableEquals(a._c6, true);
        }
        let v = 0;
        let w = ExcelUtils.e2(v, k, 0, 2);
        v = w.p0;
        let x = ExcelUtils.f9(v, l, 3);
        v = x.p0;
        let y = ExcelUtils.e2(v, m, 4, 6);
        v = y.p0;
        let z = ExcelUtils.f9(v, n, 7);
        v = z.p0;
        let aa = ExcelUtils.e2(v, o, 8, 15);
        v = aa.p0;
        let ab = ExcelUtils.e2(v, p, 16, 19);
        v = ab.p0;
        let ac = ExcelUtils.f9(v, q, 20);
        v = ac.p0;
        let ad = ExcelUtils.f9(v, r, 21);
        v = ad.p0;
        let ae = ExcelUtils.e2(v, s, 22, 23);
        v = ae.p0;
        this._write18(v);
        this._write12(t);
    }
    _readDXFBdr(a, b, c, d, e, f, g) {
        let h = this._readUInt32();
        let i = ExcelUtils.c7(h, 0, 3);
        let j = ExcelUtils.c7(h, 4, 7);
        let k = ExcelUtils.c7(h, 8, 11);
        let l = ExcelUtils.c7(h, 12, 15);
        let m = ExcelUtils.c7(h, 16, 22);
        let n = ExcelUtils.c7(h, 23, 29);
        let o = ExcelUtils.bu(h, 30);
        let p = ExcelUtils.bu(h, 31);
        h = this._readUInt32();
        let q = ExcelUtils.c7(h, 0, 6);
        let r = ExcelUtils.c7(h, 7, 13);
        let s = ExcelUtils.c7(h, 14, 20);
        let t = ExcelUtils.c7(h, 21, 24);
        let u = this._loadManager._b;
        if (b == false) {
            a.leftBorderStyle = i;
            if (i != 0) {
                a.leftBorderColorInfo = new WorkbookColorInfo(u, m);
            }
        }
        if (c == false) {
            a.rightBorderStyle = j;
            if (j != 0) {
                a.rightBorderColorInfo = new WorkbookColorInfo(u, n);
            }
        }
        if (d == false) {
            a.topBorderStyle = k;
            if (k != 0) {
                a.topBorderColorInfo = new WorkbookColorInfo(u, q);
            }
        }
        if (e == false) {
            a.bottomBorderStyle = l;
            if (l != 0) {
                a.bottomBorderColorInfo = new WorkbookColorInfo(u, r);
            }
        }
        let v = 1;
        if (f == false && o) {
            v |= 3;
        }
        if (g == false && p) {
            v |= 5;
        }
        if (f == false || g == false) {
            a.diagonalBorders = v;
            a.diagonalBorderStyle = t;
            if (t != 0) {
                a.diagonalBorderColorInfo = new WorkbookColorInfo(u, s);
            }
        }
    }
    _writeDXFBdr(a, b, c, d, e, f, g) {
        let h = 0;
        let i = 0;
        let j = 0;
        let k = 0;
        let l = 0;
        let m = 0;
        let n = false;
        let o = false;
        let p = 0;
        let q = 0;
        let r = 0;
        let s = 0;
        let t = this.saveManager._b;
        if (b == false) {
            h = a._an;
            if (h != 0) {
                l = a._bk._y(t, 0);
            }
        }
        if (c == false) {
            i = a._ao;
            if (i != 0) {
                m = a._bl._y(t, 0);
            }
        }
        if (d == false) {
            j = a._ap;
            if (j != 0) {
                p = a._bm._y(t, 0);
            }
        }
        if (e == false) {
            k = a._al;
            if (k != 0) {
                q = a._bf._y(t, 0);
            }
        }
        if (f == false || g == false) {
            s = a._am;
            if (s != 0) {
                r = a._bg._y(t, 0);
            }
            let u = a._aw;
            if (ExcelUtils.bv(u, 3)) {
                n = true;
            }
            if (ExcelUtils.bv(u, 5)) {
                o = true;
            }
        }
        let v = 0;
        let w = ExcelUtils.e2(v, h, 0, 3);
        v = w.p0;
        let x = ExcelUtils.e2(v, i, 4, 7);
        v = x.p0;
        let y = ExcelUtils.e2(v, j, 8, 11);
        v = y.p0;
        let z = ExcelUtils.e2(v, k, 12, 15);
        v = z.p0;
        let aa = ExcelUtils.e2(v, l, 16, 22);
        v = aa.p0;
        let ab = ExcelUtils.e2(v, m, 23, 29);
        v = ab.p0;
        let ac = ExcelUtils.f9(v, n, 30);
        v = ac.p0;
        let ad = ExcelUtils.f9(v, o, 31);
        v = ad.p0;
        this._write18(v);
        v = 0;
        let ae = ExcelUtils.e2(v, p, 0, 6);
        v = ae.p0;
        let af = ExcelUtils.e2(v, q, 7, 13);
        v = af.p0;
        let ag = ExcelUtils.e2(v, r, 14, 20);
        v = ag.p0;
        let ah = ExcelUtils.e2(v, s, 21, 24);
        v = ah.p0;
        this._write18(v);
    }
    _readDXFFntD(a, b) {
        let c = this.readByte();
        let d = this.position;
        let e = null;
        if (c != 0) {
            e = this._readXLUnicodeStringNoCch(c);
        }
        let f = this.position;
        let g = this._readBytes(63 - (f - d));
        let h = this._de();
        let i = this._readInt32();
        let j = this._readUInt32();
        let k = this._df();
        let l = this._readUInt32();
        let m = this._readUInt32();
        let n = this._readUInt32();
        let o = this._readUInt32();
        let p = this._readInt32();
        let q = this._readInt32();
        let r = this._readUInt16();
        if (b || r > 0) {
            a.name = e;
        }
        if (h.e != -1) {
            a.height = h.e;
        }
        if (k.a == false) {
            a._italic$i = ExcelUtils.dv(h.a.a);
        }
        if (k.b == false) {
            a._strikeout$i = ExcelUtils.dv(h.a.b);
        }
        if (n == 0) {
            let t1 = h.f;
            L0: while (true) {
                switch (t1) {
                    case 400:
                        a._bold$i = Nullable$1.toNullable(Boolean_$type, false);
                        break;
                    case 700:
                        a._bold$i = Nullable$1.toNullable(Boolean_$type, true);
                        break;
                    case 65535: break;
                    default:
                        if (h.f < 400) {
                            t1 = 400;
                            continue L0;
                        }
                        t1 = 700;
                        continue L0;
                }
                break;
            }
        }
        if (l == 0) {
            if (h.g != 65535) {
                let s = h.g;
                if (EnumUtil.isDefined(FontSuperscriptSubscriptStyle_$type, enumGetBox(FontSuperscriptSubscriptStyle_$type, s))) {
                    a.superscriptSubscriptStyle = s;
                }
                else {
                }
            }
        }
        if (m == 0) {
            if (h.d != 255) {
                let t = h.d;
                if (EnumUtil.isDefined(FontUnderlineStyle_$type, enumGetBox(FontUnderlineStyle_$type, t))) {
                    a.underlineStyle = t;
                }
                else {
                }
            }
        }
        if (i != -1) {
            a.colorInfo = new WorkbookColorInfo(this._loadManager._b._palette$i._ae(i));
        }
    }
    _writeDXFFntD(a) {
        let b = this.position + 1;
        if (a.name == null) {
            this.writeByte(0);
        }
        else {
            this.writeByte(a.name.length);
            this._writeXLUnicodeStringNoCch1(a.name, true);
        }
        let c = 63 - (this.position - b);
        this._write2(new Array(c));
        let d = new Biff8RecordStream_Ts();
        d.a = nullableEquals(a._italic$i, true);
        d.b = nullableEquals(a._strikeout$i, true);
        let e = new Biff8RecordStream_Stxp();
        e.e = a.height;
        e.a = d;
        switch (ExcelUtils.dk(a._bold$i)) {
            case 0:
                e.f = 65535;
                break;
            case 2:
                e.f = 400;
                break;
            case 1:
                e.f = 700;
                break;
        }
        e.g = a.superscriptSubscriptStyle;
        e.d = a.underlineStyle;
        this._h2(e);
        let f = -1;
        if (WorkbookColorInfo.l_op_Inequality(a.colorInfo, null)) {
            f = a.colorInfo._y(this.saveManager._b, 2);
        }
        this._write12(f);
        this._write18(intSToU(0));
        let g = new Biff8RecordStream_Ts();
        g.a = (nullableEquals(a._italic$i, null));
        g.b = (nullableEquals(a._strikeout$i, null));
        this._h4(g);
        let h = (a.superscriptSubscriptStyle == -1) ? intSToU(1) : 0;
        this._write18(h);
        let i = (a.underlineStyle == -1) ? intSToU(1) : 0;
        this._write18(i);
        let j = (nullableEquals(a._bold$i, null)) ? intSToU(1) : 0;
        this._write18(j);
        this._write18(intSToU(0));
        this._write12(0);
        this._write12(0);
        if (a.name == null) {
            this._write17(0);
        }
        else {
            this._write17(1);
        }
    }
    _readDXFN() {
        let a = this._readUInt32();
        let b = ExcelUtils.bu(a, 0);
        let c = ExcelUtils.bu(a, 1);
        let d = ExcelUtils.bu(a, 2);
        let e = ExcelUtils.bu(a, 3);
        let f = ExcelUtils.bu(a, 4);
        let g = ExcelUtils.bu(a, 5);
        let h = ExcelUtils.bu(a, 6);
        let i = ExcelUtils.bu(a, 7);
        let j = ExcelUtils.bu(a, 8);
        let k = ExcelUtils.bu(a, 9);
        let l = ExcelUtils.bu(a, 10);
        let m = ExcelUtils.bu(a, 11);
        let n = ExcelUtils.bu(a, 12);
        let o = ExcelUtils.bu(a, 13);
        let p = ExcelUtils.bu(a, 14);
        let q = ExcelUtils.bu(a, 15);
        let r = ExcelUtils.bu(a, 16);
        let s = ExcelUtils.bu(a, 17);
        let t = ExcelUtils.bu(a, 18);
        let u = ExcelUtils.bu(a, 19);
        let v = ExcelUtils.bu(a, 20);
        let w = ExcelUtils.bu(a, 21);
        let x = ExcelUtils.c7(a, 22, 24);
        let y = ExcelUtils.bu(a, 25);
        let z = ExcelUtils.bu(a, 26);
        let aa = ExcelUtils.bu(a, 27);
        let ab = ExcelUtils.bu(a, 28);
        let ac = ExcelUtils.bu(a, 29);
        let ad = ExcelUtils.bu(a, 30);
        let ae = ExcelUtils.bu(a, 31);
        let af = this._readUInt16();
        let ag = ExcelUtils.bt(af, 0);
        let ah = ExcelUtils.bt(af, 1);
        let ai = ExcelUtils.bt(af, 2);
        let aj = ExcelUtils.c6(af, 3, 14);
        let ak = ExcelUtils.bt(af, 15);
        let al = this._loadManager._b._cd(2);
        if (y) {
            this._readDXFNum(al, ag, u);
        }
        if (z) {
            this._readDXFFntD(al.font, v);
        }
        if (aa) {
            this._readDXFALC(al, b, c, d, e, f, g, h, i, ae);
        }
        if (ab) {
            this._readDXFBdr(al, l, m, n, o, p, q);
        }
        if (ac) {
            this._readDXFPat(al, r, s, t);
        }
        if (ad) {
            this._readDXFProt(al, j, k);
        }
        return al;
    }
    _writeDXFN(a) {
        let b = a.alignment == -1;
        let c = a.verticalAlignment == -1;
        let d = nullableEquals(a._wrapText$i, null);
        let e = a.rotation == -1;
        let f = true;
        let g = a.indent == -1;
        let h = nullableEquals(a._shrinkToFit$i, null);
        let i = true;
        let j = nullableEquals(a._locked$i, null);
        let k = true;
        let l = a.leftBorderStyle == -1 && WorkbookColorInfo.l_op_Equality(a.leftBorderColorInfo, null);
        let m = a.rightBorderStyle == -1 && WorkbookColorInfo.l_op_Equality(a.rightBorderColorInfo, null);
        let n = a.topBorderStyle == -1 && WorkbookColorInfo.l_op_Equality(a.topBorderColorInfo, null);
        let o = a.bottomBorderStyle == -1 && WorkbookColorInfo.l_op_Equality(a.bottomBorderColorInfo, null);
        let p = a.diagonalBorderStyle == -1 && WorkbookColorInfo.l_op_Equality(a.diagonalBorderColorInfo, null) && a.diagonalBorders == 0;
        let q = p;
        let r = a.fill == null;
        let s = r;
        let t = r;
        let u = a._cr == -1;
        let v = true;
        let w = ExcelUtils.bx(a.formatOptions, 1);
        let x = ExcelUtils.bx(a.formatOptions, 4);
        let y = ExcelUtils.bx(a.formatOptions, 2);
        let z = ExcelUtils.bx(a.formatOptions, 8);
        let aa = ExcelUtils.bx(a.formatOptions, 16);
        let ab = ExcelUtils.bx(a.formatOptions, 32);
        let ac = 0;
        let ad = ExcelUtils.f9(ac, b, 0);
        ac = ad.p0;
        let ae = ExcelUtils.f9(ac, c, 1);
        ac = ae.p0;
        let af = ExcelUtils.f9(ac, d, 2);
        ac = af.p0;
        let ag = ExcelUtils.f9(ac, e, 3);
        ac = ag.p0;
        let ah = ExcelUtils.f9(ac, f, 4);
        ac = ah.p0;
        let ai = ExcelUtils.f9(ac, g, 5);
        ac = ai.p0;
        let aj = ExcelUtils.f9(ac, h, 6);
        ac = aj.p0;
        let ak = ExcelUtils.f9(ac, i, 7);
        ac = ak.p0;
        let al = ExcelUtils.f9(ac, j, 8);
        ac = al.p0;
        let am = ExcelUtils.f9(ac, k, 9);
        ac = am.p0;
        let an = ExcelUtils.f9(ac, l, 10);
        ac = an.p0;
        let ao = ExcelUtils.f9(ac, m, 11);
        ac = ao.p0;
        let ap = ExcelUtils.f9(ac, n, 12);
        ac = ap.p0;
        let aq = ExcelUtils.f9(ac, o, 13);
        ac = aq.p0;
        let ar = ExcelUtils.f9(ac, p, 14);
        ac = ar.p0;
        let as = ExcelUtils.f9(ac, q, 15);
        ac = as.p0;
        let at = ExcelUtils.f9(ac, r, 16);
        ac = at.p0;
        let au = ExcelUtils.f9(ac, s, 17);
        ac = au.p0;
        let av = ExcelUtils.f9(ac, t, 18);
        ac = av.p0;
        let aw = ExcelUtils.f9(ac, u, 19);
        ac = aw.p0;
        let ax = ExcelUtils.f9(ac, true, 20);
        ac = ax.p0;
        let ay = ExcelUtils.f9(ac, true, 21);
        ac = ay.p0;
        let az = ExcelUtils.f9(ac, w, 25);
        ac = az.p0;
        let a0 = ExcelUtils.f9(ac, x, 26);
        ac = a0.p0;
        let a1 = ExcelUtils.f9(ac, y, 27);
        ac = a1.p0;
        let a2 = ExcelUtils.f9(ac, z, 28);
        ac = a2.p0;
        let a3 = ExcelUtils.f9(ac, aa, 29);
        ac = a3.p0;
        let a4 = ExcelUtils.f9(ac, ab, 30);
        ac = a4.p0;
        let a5 = ExcelUtils.f9(ac, v, 31);
        ac = a5.p0;
        this._write18(ac);
        let a6 = false;
        if (w) {
            a6 = (this.saveManager._b._b2.e(a._cs) == false);
        }
        let a7 = 0;
        let a8 = ExcelUtils.f7(a7, a6, 0);
        a7 = a8.p0;
        let a9 = ExcelUtils.f7(a7, true, 1);
        a7 = a9.p0;
        let ba = ExcelUtils.f7(a7, false, 2);
        a7 = ba.p0;
        let bb = ExcelUtils.f7(a7, true, 15);
        a7 = bb.p0;
        this._write17(a7);
        if (w) {
            this._writeDXFNum(a, a6);
        }
        if (x) {
            this._writeDXFFntD(a.font);
        }
        if (y) {
            this._writeDXFALC(a, b, c, d, e, f, g, h, i, v);
        }
        if (z) {
            this._writeDXFBdr(a, l, m, n, o, p, q);
        }
        if (aa) {
            this._writeDXFPat(a, r, s, t);
        }
        if (ab) {
            this._writeDXFProt(a, j, k);
        }
    }
    _readDXFN12() {
        let a = this._readUInt32();
        if (a == 0) {
            let b = this._readUInt16();
            return null;
        }
        return this._readDXFN12List(a);
    }
    _g0(a) {
        let b = this.position;
        let c = 0;
        this._write18(c);
        let d = this.position;
        if (a == null) {
            this._write17(0);
            return;
        }
        this._writeDXFN(a);
        this._writeXFExtNoFRT(a);
        let e = this.position;
        c = (e - d);
        this.position = b;
        this._write18(c);
        this.position = e;
    }
    _readDXFN12List(a) {
        let b = this.position + a;
        let c = this._readDXFN();
        if (this.position < b) {
            this._readXFExtNoFRT(c);
        }
        return c;
    }
    _writeDXFN12List(a) {
        this._writeDXFN(a);
        this._writeXFExtNoFRT(a);
    }
    _readDXFN12NoCB() {
        let a = this._readDXFN();
        if (this.position < this.length) {
            this._readXFExtNoFRT(a);
        }
        return a;
    }
    _writeDXFN12NoCB(a) {
        this._writeDXFN(a);
        this._writeXFExtNoFRT(a);
    }
    _readDXFNum(a, b, c) {
        if (b) {
            this._readDXFNumUsr(a);
        }
        else {
            this._readDXFNumIFmt(a, c);
        }
    }
    _writeDXFNum(a, b) {
        if (b) {
            this._writeDXFNumUsr(a);
        }
        else {
            this._writeDXFNumIFmt(a);
        }
    }
    _readDXFNumIFmt(a, b) {
        let c = this.readByte();
        let d = this.readByte();
        if (b == false) {
            a._cr = WorkbookFormatCollection.aj(d);
        }
    }
    _writeDXFNumIFmt(a) {
        this.writeByte(0);
        let b = WorkbookFormatCollection.ak(intSToU(a._cs));
        this.writeByte(b);
    }
    _readDXFNumUsr(a) {
        let b = this._readUInt16();
        let c = this._readXLUnicodeString();
        a.formatString = c;
    }
    _writeDXFNumUsr(a) {
        let b = this.position;
        this._write17(0);
        this._writeXLUnicodeString(a._dg);
        let c = this.position;
        let d = (c - b);
        this.position = b;
        this._write17(d);
        this.position = c;
    }
    _readDXFPat(a, b, c, d) {
        let e = this._readUInt32();
        let f = ExcelUtils.c7(e, 10, 15);
        let g = ExcelUtils.c7(e, 16, 22);
        let h = ExcelUtils.c7(e, 23, 29);
        let i = 0;
        if (b == false) {
            i = f;
        }
        let j = this._loadManager._b;
        let k = null;
        if (c == false) {
            k = new WorkbookColorInfo(j, g);
        }
        let l = null;
        if (d == false) {
            l = new WorkbookColorInfo(j, h);
        }
        if (b && c && d) {
            return;
        }
        a.fill = new CellFillPattern(l, k, i, a, true);
    }
    _writeDXFPat(a, b, c, d) {
        let e = 0;
        let f = 0;
        let g = 0;
        let h = a._ar;
        if (b == false) {
            e = a._ay(h);
        }
        let i = this.saveManager._b;
        if (c == false) {
            f = a._bi(h, false, true)._y(i, 1);
        }
        if (d == false) {
            g = a._bi(h, true, true)._y(i, 1);
        }
        let j = 0;
        let k = ExcelUtils.e2(j, e, 10, 15);
        j = k.p0;
        let l = ExcelUtils.e2(j, f, 16, 22);
        j = l.p0;
        let m = ExcelUtils.e2(j, g, 23, 29);
        j = m.p0;
        this._write18(j);
    }
    _readDXFProt(a, b, c) {
        let d = this._readUInt16();
        let e = ExcelUtils.bt(d, 0);
        let f = ExcelUtils.bt(d, 1);
        if (b == false) {
            a._locked$i = ExcelUtils.dv(e);
        }
    }
    _writeDXFProt(a, b, c) {
        let d = true;
        let e = false;
        if (b == false) {
            d = nullableEquals(a._c5, true);
        }
        let f = 0;
        let g = ExcelUtils.f7(f, d, 0);
        f = g.p0;
        let h = ExcelUtils.f7(f, e, 1);
        f = h.p0;
        this._write17(f);
    }
    _readExtProp() {
        let a = this.position;
        let b = this._readUInt16();
        let c = this._readUInt16();
        try {
            switch (b) {
                case 5:
                case 8:
                case 13:
                case 11:
                case 4:
                case 9:
                case 10:
                case 7: return new ExtPropColorLoaded(this._readFullColorExt(), b);
                case 14:
                    let d = this.readByte();
                    return new ExtPropFontScheme(d);
                case 6: return new ExtPropGradientFillLoaded(this._readXFExtGradient());
                case 15:
                    let e = this._readUInt16();
                    e = Math.min(250, e);
                    return new ExtPropTextIndentationLevel(e);
                default: return null;
            }
        }
        finally {
            let f = a + c;
            this.position = f;
        }
    }
    _writeExtProp(a) {
        if (a == null) {
            return;
        }
        let b = this.position;
        this._write17(a.a);
        this._write17(0);
        a.c(this);
        let c = this.position;
        let d = (c - b);
        this.position = b + 2;
        this._write11(d);
        this.position = c;
    }
    _readFeatProtection() {
        let a = this._readUInt32();
        let b = this._readUInt32();
        let c = this._readXLUnicodeString();
        let d = null;
        if (a != 0) {
            d = this._c2();
        }
        let e = new WorksheetProtectedRange(c);
        if (b != 0) {
            e._c.b = ProtectionValidationInfo.c(b);
        }
        if (d != null) {
            e._o(d);
        }
        return e;
    }
    _writeFeatProtection(a) {
        let b = a._b();
        let c = intSToU((b != null && b.length > 0 ? 1 : 0));
        CryptoUtilities.f(this, c);
        let d = a._c.h();
        CryptoUtilities.f(this, (!nullableIsNull(d) ? d.value : 0));
        this._writeXLUnicodeString(a.title);
        if (c != 0) {
            this._hz(b);
        }
    }
    _readFeat11FdaAutoFilter(a, b) {
        let c = this._readUInt32();
        let d = this._readUInt16();
        if (c == 0) {
            return null;
        }
        return this._readAutoFilter(a, b);
    }
    _writeFeat11FdaAutoFilter(a, b) {
        let c = this.position;
        this._write18(intSToU(0));
        this._write17(65535);
        if (b != null && b.e) {
            let d = this.position;
            this._writeAutoFilter(b);
            let e = this.position;
            let f = (e - d);
            this.position = c;
            this._write17(f);
            this.position = e;
        }
    }
    _es(a, b, c, d) {
        let e = this._readUInt32();
        let f = this._readUInt32();
        let g = this._readUInt32();
        let h = this._readUInt32();
        let i = this._readUInt32();
        let j = this._readInt32();
        let k = this._readUInt32();
        let l = ExcelUtils.bu(k, 0);
        let m = ExcelUtils.bu(k, 1);
        let n = ExcelUtils.bu(k, 2);
        let o = ExcelUtils.bu(k, 3);
        let p = ExcelUtils.c7(k, 4, 5);
        let q = ExcelUtils.bu(k, 6);
        let r = ExcelUtils.bu(k, 7);
        let s = ExcelUtils.bu(k, 8);
        let t = ExcelUtils.bu(k, 9);
        let u = ExcelUtils.bu(k, 10);
        let v = ExcelUtils.bu(k, 11);
        let w = ExcelUtils.c7(k, 12, 31);
        let x = this._readUInt32();
        let y = this._readInt32();
        let z = this._readXLUnicodeString();
        let aa = z;
        if (c == false) {
            let ab = this._readXLUnicodeString();
            aa = ab;
        }
        let ac = b._b5(e);
        ac.name = aa;
        ac.totalFormula = this._loadManager._b._ao(ac, h);
        let ad = this._loadManagerBiff8._a4(j);
        let ae = null;
        if (i != 0) {
            ae = this._readDXFN12List(i);
        }
        let af = this._loadManagerBiff8._a4(y);
        let ag = null;
        if (x != 0) {
            ag = this._readDXFN12List(x);
        }
        if (l) {
            ac.filter = this._readFeat11FdaAutoFilter(a, ac);
        }
        if (n) {
        }
        if (o) {
        }
        if (r) {
            let ah = s ? 1 : 0;
            let ai = this._readBytes((this.length - this.position));
            let aj = 0;
            let ak = ((() => { let al = this._loadManagerBiff8._at(ah, ai, aj); ai = al.p1; aj = al.p2; return al.ret; })());
            this.seek(aj - ai.length, 1);
            ac.totalFormula = ak;
        }
        if (u) {
            let al = this._readXLUnicodeString();
            ac.totalLabel = al;
        }
        if (d == 0 && c == false) {
            this._fo(ac, t);
        }
        this._loadManager._ac(WorksheetTableColumnArea_$type, ac._areaFormats$i, 0, WorksheetTableColumn._ap, af, ag);
        this._loadManager._ac(WorksheetTableColumnArea_$type, ac._areaFormats$i, 2, WorksheetTableColumn._ap, ad, ae);
        if (v) {
            let am;
            let an;
            let ao = b._d8(am, an);
            am = ao.p0;
            an = ao.p1;
            let ap = a._rows$i.item(an)._cells$i.item(ac._at).formula;
            if (ap != null) {
                ap = ap._w(an, ac._at, this._loadManager._b.currentFormat);
                ac._bz(ap);
            }
        }
        return ac;
    }
    _writeFeat11FieldDataItem(a, b, c) {
        let d;
        let e;
        let f = this.saveManager._bf(WorksheetTableColumnArea_$type, a._areaFormats$i, 0, d, e);
        d = f.p2;
        e = f.p3;
        let g;
        let h;
        let i = this.saveManager._bf(WorksheetTableColumnArea_$type, a._areaFormats$i, 2, g, h);
        g = i.p2;
        h = i.p3;
        let j = -1;
        if (d != null) {
            j = this._saveManagerBiff8._cy.indexOf(d);
        }
        let k = -1;
        if (g != null) {
            k = this._saveManagerBiff8._cy.indexOf(g);
        }
        this._write18(a._a9);
        this._write18(intSToU(0));
        this._write18(intSToU(0));
        let l = this.saveManager._b._ck(a);
        this._write18(l);
        let m = this.position;
        this._write18(intSToU(0));
        this._write12(k);
        let n;
        let o = b._d(a.index, n);
        n = o.p1;
        let p = (n != null && n.e) || a.table.isFilterUIVisible;
        let q = l == 9;
        let r = l == 0 && a.table.isTotalsRowVisible == false && a.totalLabel != null;
        let s = null;
        let t = null;
        if (a.table.isHeaderRowVisible == false) {
            let u = this.saveManager._bf(WorksheetTableColumnArea_$type, a._areaFormats$i, 1, s, t);
            s = u.p2;
            t = u.p3;
        }
        let v = (s != null);
        let w = 0;
        let x = ExcelUtils.f9(w, p, 0);
        w = x.p0;
        let y = ExcelUtils.f9(w, q, 7);
        w = y.p0;
        let z = ExcelUtils.f9(w, q && typeCast(ArrayFormula.$, a.totalFormula) !== null, 8);
        w = z.p0;
        let aa = ExcelUtils.f9(w, v, 9);
        w = aa.p0;
        let ab = ExcelUtils.f9(w, r, 10);
        w = ab.p0;
        let ac = ExcelUtils.f9(w, a.columnFormula != null, 11);
        w = ac.p0;
        this._write18(w);
        let ad = this.position;
        this._write18(intSToU(0));
        this._write12(j);
        this._writeXLUnicodeString(a._a9.toString());
        if (c == false) {
            this._writeXLUnicodeString(a.name);
        }
        this._g2(m, h);
        this._g2(ad, e);
        if (p) {
            this._writeFeat11FdaAutoFilter(a, n);
        }
        if (q) {
            this._saveManagerBiff8._c2(a.totalFormula, true, false);
        }
        if (r) {
            this._writeXLUnicodeString(a.totalLabel);
        }
        if (a.table.isHeaderRowVisible == false) {
            this._gh(a, s, t);
        }
    }
    _fc() {
        let a = this._readUInt16();
        let b = this._readUInt32();
        let c = this._readBytes(b);
        let d = Workbook._g1.getString1(c, 0, b - 1);
        for (let e = 0; e < a; e++) {
            d = "..\\" + d;
        }
        let f = this._readUInt16();
        let g = this._readUInt16();
        let h = this._readBytes(16);
        let i = this._readUInt32();
        let j = this._readUInt32();
        if (j == 0) {
            return d;
        }
        let k = this._readUInt32();
        let l = this._readUInt16();
        let m = this._readBytes(k);
        let n = Encoding.unicode.getString(m);
        for (let o = 0; o < a; o++) {
            n = "..\\" + n;
        }
        return n;
    }
    _hd(a) {
        let b = 0;
        while (stringStartsWith(a, "..\\")) {
            a = a.substr(3);
            b++;
        }
        this._write17(b);
        let c = Workbook._g1.getBytes1(a);
        this._write18(intSToU((c.length + 1)));
        this._write2(c);
        this.writeByte(0);
        this._write17(65535);
        this._write17(57005);
        this._write2(new Array(16));
        this._write18(intSToU(0));
        if (b == 0 && Workbook._g1.getString(c) == a) {
            this._write18(intSToU(0));
        }
        else {
            let d = (a.length * 2) + 6;
            this._write18(intSToU(d));
            let e = a.length * 2;
            this._write18(intSToU(e));
            this._write17(3);
            this._write2(Encoding.unicode.getBytes1(a));
        }
    }
    _ey() {
        let a = this._readUInt32();
        let b = this._readUInt32();
        let c = u32BitwiseOr(u32LS(b, 32), a);
        return dateFromFileTimeUtc(c);
    }
    _readFontScheme() {
        return this.readByte();
    }
    _writeFontScheme(a) {
        this._write9(a);
    }
    _readFormat(a, b) {
        a = this._readUInt16();
        b = this._readXLUnicodeString();
        return {
            p0: a,
            p1: b
        };
    }
    _writeFormat(a, b) {
        this._write17(a);
        this._writeXLUnicodeString(b);
    }
    _readFrtHeader() {
        let a = this._readUInt16();
        let b = this._readUInt16();
        this.seek(8, 1);
    }
    _writeFrtHeader() {
        this._write17(this._bf);
        this._write17(0);
        this._write2(new Array(8));
    }
    _ct(a) {
        switch (a) {
            case 2162:
                this._write17(2165);
                this._write17(0);
                this._write2(new Array(8));
                break;
        }
    }
    _readFrtHeaderU(a) {
        let b = this._readUInt16();
        let c = this._readUInt16();
        return this._readRef8U(a);
    }
    _writeFrtHeaderU(a) {
        this._write17(this._bf);
        this._write17(1);
        this._writeRef8U(a);
    }
    _readFrtRefHeader(a) {
        return this._readFrtRefHeader1(a, this._recordType);
    }
    _readFrtRefHeader1(a, b) {
        let c = this._readUInt16();
        let d = this._readUInt16();
        if (ExcelUtils.bt(d, 0)) {
            return this._readRef8U(a);
        }
        this.seek(8, 1);
        return null;
    }
    _writeFrtRefHeader(a) {
        this._writeFrtRefHeader1(a, this._recordType);
    }
    _writeFrtRefHeader1(a, b) {
        this._write17(b);
        if (a != null) {
            this._write17(1);
            this._writeRef8U(a);
        }
        else {
            this._write17(0);
            this._write2(new Array(8));
        }
    }
    _readFrtRefHeaderNoGrbit(a) {
        let b = this._readUInt16();
        return this._readRef8U(a);
    }
    _writeFrtRefHeaderNoGrbit(a) {
        this._write17(this._bf);
        this._writeRef8U(a);
    }
    _readFullColorExt() {
        let a = new FullColorExtInfo();
        a.a = this._readUInt16();
        a.b = this._readInt16();
        a.c = this._readUInt32();
        this.seek(8, 1);
        return a;
    }
    writeFullColorExt(a, b) {
        let c;
        let d;
        let e;
        let f = this._fm(a, b, c, d, e);
        c = f.p2;
        d = f.p3;
        e = f.p4;
        let g = truncate(MathUtilities.f(d * 32767));
        this._write17(c);
        this._write11(g);
        this._write18(e);
        this._write2(new Array(8));
    }
    _readGradStop() {
        let a = new GradStopInfo();
        a.a = this._readUInt16();
        a.d = this._readUInt32();
        a.b = this._readDouble();
        a.c = this._readDouble();
        return a;
    }
    _writeGradStop(a) {
        let b = a.offset;
        let c;
        let d;
        let e;
        let f = this._fm(a.colorInfo, 1, c, d, e);
        c = f.p2;
        d = f.p3;
        e = f.p4;
        this._write17(c);
        this._write18(e);
        this._write10(b);
        this._write10(d);
    }
    _readHorizAlign() {
        let a = this.readByte();
        if (a == 255) {
            return -1;
        }
        return a;
    }
    _writeHorizAlign(a) {
        if (a == -1) {
            this._write9(255);
        }
        else {
            this._write9(a);
        }
    }
    _readHyperlinkMoniker() {
        let a = new Guid(1, this._readBytes(16));
        if (Guid.l_op_Equality(a, Biff8RecordStream._e6)) {
            return this._fh();
        }
        else if (Guid.l_op_Equality(a, Biff8RecordStream._e3)) {
            return this._fc();
        }
        else if (Guid.l_op_Equality(a, Biff8RecordStream._e2)) {
        }
        else if (Guid.l_op_Equality(a, Biff8RecordStream._e1)) {
        }
        else if (Guid.l_op_Equality(a, Biff8RecordStream._e4)) {
        }
        else {
        }
        return null;
    }
    _writeHyperlinkMoniker(a) {
        let b;
        if (!((() => { let c = Uri.tryCreate(a, 0, b); b = c.p2; return c.ret; })())) {
            this._write2(Biff8RecordStream._e6.toByteArray());
            this._h7(a);
        }
        else if (b.isAbsoluteUri == false || b.scheme.toLowerCase() == "file") {
            this._write2(Biff8RecordStream._e3.toByteArray());
            this._hd(a);
        }
        else {
            this._write2(Biff8RecordStream._e6.toByteArray());
            this._h8(b);
        }
    }
    _readHyperlinkString() {
        let a = this._readUInt32();
        let b = this._readBytes((a * 2));
        return Encoding.unicode.getString1(b, 0, b.length - 2);
    }
    _writeHyperlinkString(a) {
        let b = new Array((a.length + 1) * 2);
        this._write18(intSToU((a.length + 1)));
        Encoding.unicode.getBytes3(a, 0, a.length, b, 0);
        this._write2(b);
    }
    _readList12BlockLevel(a) {
        let b = this._readInt32();
        let c = this._readInt32();
        let d = this._loadManagerBiff8._a4(c);
        let e = this._readInt32();
        let f = this._readInt32();
        let g = this._loadManagerBiff8._a4(f);
        let h = this._readInt32();
        let i = this._readInt32();
        let j = this._loadManagerBiff8._a4(i);
        let k = this._readInt32();
        let l = this._readInt32();
        let m = this._readInt32();
        let n = null;
        if (b != 0) {
            n = this._readDXFN12List(b);
        }
        let o = null;
        if (e != 0) {
            o = this._readDXFN12List(e);
        }
        let p = null;
        if (h != 0) {
            p = this._readDXFN12List(h);
        }
        let q = null;
        if (k != 0) {
            q = this._readDXFN12List(k);
        }
        let r = null;
        if (l != 0) {
            r = this._readDXFN12List(l);
        }
        let s = null;
        if (m != 0) {
            s = this._readDXFN12List(m);
        }
        if (c != -1) {
            let t = this._readXLUnicodeString();
        }
        if (f != -1) {
            let u = this._readXLUnicodeString();
        }
        if (i != -1) {
            let v = this._readXLUnicodeString();
        }
        this._loadManager._ad(WorksheetTableArea_$type, a._areaFormats$i, 2, WorksheetTable._cd, d, n, r, 2, 4);
        this._loadManager._ac(WorksheetTableArea_$type, a._areaFormats$i, 1, WorksheetTable._cd, g, o);
        this._loadManager._ad(WorksheetTableArea_$type, a._areaFormats$i, 3, WorksheetTable._cd, j, p, s, 67108864, 134217728);
        this._loadManager._ad(WorksheetTableArea_$type, a._areaFormats$i, 0, WorksheetTable._cd, null, null, q, 262144, 524288, 67108864, 134217728, 2097152, 4194304, 2, 4);
    }
    _writeList12BlockLevel(a) {
        let b = this.position;
        let c;
        let d;
        let e;
        let f = this.saveManager._bg(WorksheetTableArea_$type, a._areaFormats$i, 2, c, d, e, 2, 4);
        c = f.p2;
        d = f.p3;
        e = f.p4;
        let g;
        let h;
        let i = this.saveManager._bf(WorksheetTableArea_$type, a._areaFormats$i, 1, g, h);
        g = i.p2;
        h = i.p3;
        let j;
        let k;
        let l;
        let m = this.saveManager._bg(WorksheetTableArea_$type, a._areaFormats$i, 3, j, k, l, 67108864, 134217728);
        j = m.p2;
        k = m.p3;
        l = m.p4;
        let n;
        let o;
        let p;
        let q = this.saveManager._bg(WorksheetTableArea_$type, a._areaFormats$i, 0, n, o, p, 262144, 524288, 67108864, 134217728, 2097152, 4194304, 2, 4);
        n = q.p2;
        o = q.p3;
        p = q.p4;
        let r = -1;
        if (c != null) {
            r = this._saveManagerBiff8._cy.indexOf(c);
        }
        let s = -1;
        if (g != null) {
            s = this._saveManagerBiff8._cy.indexOf(g);
        }
        let t = -1;
        if (j != null) {
            t = this._saveManagerBiff8._cy.indexOf(j);
        }
        this._write12(0);
        this._write12(r);
        this._write12(0);
        this._write12(s);
        this._write12(0);
        this._write12(t);
        this._write12(0);
        this._write12(0);
        this._write12(0);
        this._g2(b, d);
        this._g2(b + 8, h);
        this._g2(b + 16, k);
        this._g2(b + 24, p);
        this._g2(b + 28, e);
        this._g2(b + 32, l);
        if (c != null) {
            this._writeXLUnicodeString(c.name);
        }
        if (g != null) {
            this._writeXLUnicodeString(g.name);
        }
        if (j != null) {
            this._writeXLUnicodeString(j.name);
        }
    }
    _readList12DisplayName(a) {
        let b = this._readXLUnicodeString();
        let c = this._readXLUnicodeString();
        if (stringIsNullOrEmpty(c) == false) {
            a.comment = c;
        }
    }
    _writeList12DisplayName(a) {
        this._writeXLUnicodeString(a.name);
        this._writeXLUnicodeString(a.comment != null ? a.comment : stringEmpty());
    }
    _readList12TableStyleClientInfo(a) {
        let b = this._readUInt16();
        let c = ExcelUtils.bt(b, 0);
        let d = ExcelUtils.bt(b, 1);
        let e = ExcelUtils.bt(b, 2);
        let f = ExcelUtils.bt(b, 3);
        let g = ExcelUtils.bt(b, 6);
        let h = this._readXLUnicodeString();
        a.style = this._loadManager._b._cj(h);
        a.displayBandedColumns = f;
        a.displayBandedRows = e;
        a.displayFirstColumnFormatting = c;
        a.displayLastColumnFormatting = d;
    }
    _writeList12TableStyleClientInfo(a) {
        let b = 0;
        let c = ExcelUtils.f7(b, a.displayFirstColumnFormatting, 0);
        b = c.p0;
        let d = ExcelUtils.f7(b, a.displayLastColumnFormatting, 1);
        b = d.p0;
        let e = ExcelUtils.f7(b, a.displayBandedRows, 2);
        b = e.p0;
        let f = ExcelUtils.f7(b, a.displayBandedColumns, 3);
        b = f.p0;
        let g = ExcelUtils.f7(b, a.style == this.saveManager._b.defaultTableStyle, 6);
        b = g.p0;
        this._write17(b);
        this._writeXLUnicodeString(a.style.name);
    }
    _readLPWideString() {
        let a = this._readUInt16();
        let b = this._readBytes(a * 2);
        return Encoding.unicode.getString(b);
    }
    _writeLPWideString(a) {
        this._write17(a.length);
        this._write2(Encoding.unicode.getBytes1(a));
    }
    _readRef8U(a) {
        let b = this._readUInt16();
        let c = this._readUInt16();
        let d = this._readUInt16();
        let e = this._readUInt16();
        return a._cx(b, d, c, e);
    }
    _writeRef8U(a) {
        this._write17(a.firstRow);
        this._write17(a.lastRow);
        this._write17(a._v);
        this._write17(a._w);
    }
    _readRefU(a) {
        let b = this._readUInt16();
        let c = this._readUInt16();
        let d = this.readByte();
        let e = this.readByte();
        return a._cx(b, d, c, e);
    }
    _writeRefU(a) {
        this._write17(a.firstRow);
        this._write17(a.lastRow);
        this._write9(a._v);
        this._write9(a._w);
    }
    _readRFX(a) {
        let b = this._readUInt32();
        let c = this._readUInt32();
        let d = this._readUInt32();
        let e = this._readUInt32();
        return a._cx(b, d, c, e);
    }
    _writeRFX(a) {
        this._write18(intSToU(a.firstRow));
        this._write18(intSToU(a.lastRow));
        this._write18(a._v);
        this._write18(a._w);
    }
    _readScript() {
        return this._readUInt16();
    }
    _writeScript(a) {
        this._write17(a);
    }
    _c2() {
        let a = this._readUInt32();
        return this._readBytes(a);
    }
    _hz(a) {
        CryptoUtilities.f(this, intSToU(a.length));
        this._write2(a);
    }
    _readSortCond12$1($t, a, b, c, d) {
        this._readFrtRefHeader1(a, 2175);
        let e = this._readUInt16();
        let f = ExcelUtils.bt(e, 0);
        let g = ExcelUtils.c6(e, 1, 4);
        let h = ExcelUtils.c6(e, 5, 15);
        let i = this._readRFX(a);
        let j = i.firstColumn - c._w;
        if (j < 0 || c._af <= j) {
            return;
        }
        let k = d(j);
        if (typeCast(WorksheetTableColumn.$, k) !== null) {
        }
        let l = f ? 1 : 0;
        let m;
        switch (g) {
            case 0:
            case 1:
            case 2:
                m = this._readCondDataValue(g, l);
                break;
            case 3:
                let n;
                let o;
                let p = this._readCFFlag(n, o);
                n = p.p0;
                o = p.p1;
                if (n.hasValue) {
                    m = new IconSortCondition(l == 0, n.value, Nullable$1.toNullable(Number_$type, o));
                }
                else {
                    m = null;
                }
                break;
            default: return;
        }
        let q = this._readInt32();
        if (m == null) {
            return;
        }
        if (g != 0) {
        }
        else {
            if (q > 0) {
                let r = this._readXLUnicodeStringNoCch(q);
                m = new CustomListSortCondition(l, ...r.split(','));
            }
        }
        b._sortConditions$i._addItem$i(k, m);
    }
    _writeSortCond12$1($t, a, b, c, d, e) {
        this._writeFrtRefHeader1(null, 2175);
        let f = 0;
        let g = ExcelUtils.f7(f, b.sortDirection == 1, 0);
        f = g.p0;
        let h = ExcelUtils.e1(f, b._d, 1, 4);
        f = h.p0;
        this._write17(f);
        this._writeRFX(c);
        switch (b._d) {
            case 0:
            case 1:
            case 2:
                this._writeCondDataValue$1($t, a, b, d, e);
                break;
            case 3:
                let i = typeCast(IconSortCondition.$, b);
                if (i != null) {
                    this._writeCFFlag(i._k, i._n.getValueOrDefault());
                }
                else {
                }
                break;
            default: return;
        }
        let j = typeCast(CustomListSortCondition.$, b);
        if (j == null) {
            this._write12(0);
        }
        else {
            let k = j._l();
            this._write12(k.length);
            this._writeXLUnicodeStringNoCch(k);
        }
    }
    _ex(a) {
        let b = this._readUInt16();
        let c = new List$1(WorksheetRegion.$, 2, b);
        for (let d = 0; d < b; d++) {
            let e = this._readRef8U(a);
            c.add(e);
        }
        return c;
    }
    _h1(a) {
        if (a.count == 0) {
            return;
        }
        let b = a.count;
        this._write17(b);
        for (let c of fromEnum(a)) {
            this._writeRef8U(c);
        }
    }
    _f2(a, b, c, d, e) {
        b = this._readUInt16();
        let f = this._readUInt16();
        c = ExcelUtils.bt(f, 0);
        d = ExcelUtils.bt(f, 1);
        e = this._readRef8U(a);
        return {
            p1: b,
            p2: c,
            p3: d,
            p4: e
        };
    }
    _hl(a, b) {
        let c = a;
        this._write17(c);
        let d = 0;
        let e = ExcelUtils.f7(d, b != null, 0);
        d = e.p0;
        this._write17(d);
        if (b != null) {
            this._writeRef8U(b);
        }
        else {
            this._write12(0);
            this._write12(0);
        }
    }
    _de() {
        let a = new Biff8RecordStream_Stxp();
        a.e = this._readInt32();
        a.a = this._df();
        a.f = this._readUInt16();
        a.g = this._readUInt16();
        a.d = this.readByte();
        a.c = this.readByte();
        a.b = this.readByte();
        let b = this.readByte();
        return a;
    }
    _h2(a) {
        this._write12(a.e);
        this._h4(a.a);
        this._write17(a.f);
        this._write17(a.g);
        this.writeByte(a.d);
        this.writeByte(a.c);
        this.writeByte(a.b);
        this.writeByte(0);
    }
    _readTableFeatureType(a, b) {
        let c = this._readUInt32();
        if (c != 0) {
            return null;
        }
        let d = this._readUInt32();
        let e = this._readUInt32();
        let f = this._readUInt32();
        let g = this._readUInt32();
        let h = this._readUInt32();
        let i = this._readUInt16();
        let j = this._readUInt16();
        let k = this._readUInt16();
        let l = ExcelUtils.bt(k, 0);
        let m = ExcelUtils.bt(k, 1);
        let n = ExcelUtils.bt(k, 2);
        let o = ExcelUtils.bt(k, 3);
        let p = ExcelUtils.bt(k, 4);
        let q = ExcelUtils.bt(k, 5);
        let r = ExcelUtils.bt(k, 6);
        let s = ExcelUtils.bt(k, 7);
        let t = ExcelUtils.bt(k, 8);
        let u = ExcelUtils.bt(k, 9);
        let v = ExcelUtils.bt(k, 10);
        let w = ExcelUtils.bt(k, 11);
        let x = ExcelUtils.bt(k, 12);
        let y = ExcelUtils.bt(k, 13);
        let z = ExcelUtils.bt(k, 14);
        let aa = ExcelUtils.bt(k, 15);
        k = this._readUInt16();
        let ab = ExcelUtils.c6(k, 0, 3);
        let ac = ExcelUtils.bt(k, 4);
        let ad = ExcelUtils.bt(k, 5);
        let ae = ExcelUtils.bt(k, 6);
        let af = ExcelUtils.bt(k, 7);
        let ag = ExcelUtils.bt(k, 8);
        let ah = ExcelUtils.c6(k, 9, 15);
        let ai = this._readUInt32();
        let aj = this._readUInt32();
        let ak = this._readUInt32();
        let al = this._readUInt32();
        let am = this._readBytes(16);
        let an = this._readXLUnicodeString();
        let ao = this._readUInt16();
        if (z) {
            let ap = this._readXLUnicodeString();
        }
        if (ac) {
            let aq = this._readXLUnicodeString();
        }
        let ar = new WorksheetTable(an, d, b.firstRow, b.lastRow, b._v, b._w);
        ar.isHeaderRowVisible = (e != 0);
        if (ar.isHeaderRowVisible) {
            ar.isFilterUIVisible = m;
        }
        ar.isTotalsRowVisible = (f != 0);
        ar._dt = g;
        ar._cs = o && x;
        ar._c5 = p;
        ar._cm = r;
        ar._c0 = ag;
        ar.style = this._loadManager._b.defaultTableStyle;
        for (let as = 0; as < ao; as++) {
            this._es(a, ar, u, e);
        }
        if (q) {
        }
        if (aa) {
        }
        if (ad) {
        }
        return ar;
    }
    _writeTableFeatureType(a, b) {
        let c = false;
        this._write18(0);
        this._write18(a._ds);
        this._write18(intSToU((a.isHeaderRowVisible ? 1 : 0)));
        this._write18(intSToU((a.isTotalsRowVisible ? 1 : 0)));
        this._write18(a._dt);
        this._write18(intSToU(64));
        this._write17(0);
        this._write17(0);
        let d = 0;
        let e = ExcelUtils.f7(d, a.isFilterUIVisible, 1);
        d = e.p0;
        let f = ExcelUtils.f7(d, a.isFilterUIVisible, 2);
        d = f.p0;
        let g = ExcelUtils.f7(d, a._cs, 3);
        d = g.p0;
        let h = ExcelUtils.f7(d, a._c5, 4);
        d = h.p0;
        let i = ExcelUtils.f7(d, a._cm, 6);
        d = i.p0;
        let j = ExcelUtils.f7(d, c, 9);
        d = j.p0;
        let k = ExcelUtils.f7(d, true, 11);
        d = k.p0;
        let l = ExcelUtils.f7(d, a._cs, 12);
        d = l.p0;
        this._write17(d);
        d = 0;
        let m = ExcelUtils.e1(d, 14, 0, 3);
        d = m.p0;
        let n = ExcelUtils.f7(d, true, 4);
        d = n.p0;
        let o = ExcelUtils.f7(d, false, 6);
        d = o.p0;
        let p = ExcelUtils.f7(d, a._c0, 8);
        d = p.p0;
        this._write17(d);
        this._write18(intSToU(0));
        this._write18(intSToU(0));
        this._write18(intSToU(0));
        this._write18(intSToU(0));
        this._write2(new Array(16));
        this._writeXLUnicodeString(a.name);
        this._write17(a._columns$i.count);
        this._writeXLUnicodeString(a._ds.toString());
        for (let q = 0; q < a._columns$i.count; q++) {
            this._writeFeat11FieldDataItem(a._columns$i._item(q), b, c);
        }
    }
    _df() {
        let a = new Biff8RecordStream_Ts();
        let b = this._readUInt32();
        a.a = ExcelUtils.bu(b, 1);
        a.b = ExcelUtils.bu(b, 7);
        return a;
    }
    _h4(a) {
        let b = 0;
        let c = ExcelUtils.f9(b, a.a, 1);
        b = c.p0;
        let d = ExcelUtils.f9(b, a.b, 7);
        b = d.p0;
        this._write18(b);
    }
    _c9() {
        return this._readUInt16();
    }
    _h5(a) {
        this._write17(a);
    }
    _readUnicodeString(a) {
        let b = this._readBytes(a * 2);
        return Encoding.unicode.getString(b);
    }
    _writeUnicodeString(a) {
        this._write2(Encoding.unicode.getBytes1(a));
    }
    _fh() {
        let a = this._readUInt32();
        let b = this.position;
        let c = this._readNullTerminatedUnicodeString();
        if (a == this.position - b) {
            return c;
        }
        let d = new Guid(1, this._readBytes(16));
        let e = this._readUInt32();
        let f = this._readUInt32();
        let g = ExcelUtils.bu(f, 0);
        let h = ExcelUtils.bu(f, 1);
        let i = ExcelUtils.bu(f, 2);
        let j = ExcelUtils.bu(f, 3);
        let k = ExcelUtils.bu(f, 4);
        let l = ExcelUtils.bu(f, 5);
        let m = ExcelUtils.bu(f, 6);
        let n = ExcelUtils.bu(f, 7);
        let o = ExcelUtils.bu(f, 8);
        let p = ExcelUtils.bu(f, 9);
        let q = ExcelUtils.bu(f, 10);
        let r = ExcelUtils.bu(f, 11);
        let s = ExcelUtils.bu(f, 12);
        let t = ExcelUtils.bu(f, 13);
        let u = ExcelUtils.bu(f, 14);
        let v = ExcelUtils.bu(f, 15);
        return c;
    }
    _h8(a) {
        let b;
        try {
            b = Uri.escapeUriString(a.toString());
        }
        catch (c) {
            b = a.originalString;
        }
        this._h7(b);
    }
    _h7(a) {
        let b = intSToU(((a.length + 1) * 2 + 24));
        this._write18(b);
        this._writeNullTerminatedUnicodeString(a);
        this._write2(Biff8RecordStream._e5.toByteArray());
        this._write18(intSToU(0));
        let c = 43941;
        this._write18(c);
    }
    _readXFExtGradient() {
        let a = new XFExtGradientInfo();
        a.g = this._readInt32();
        a.b = this._readDouble();
        a.d = this._readDouble();
        a.e = this._readDouble();
        a.f = this._readDouble();
        a.c = this._readDouble();
        let b = this._readUInt32();
        a.a = new Array(b);
        for (let c = 0; c < b; c++) {
            a.a[c] = this._readGradStop();
        }
        return a;
    }
    writeXFExtGradient(a) {
        let b = 0;
        let c = 0;
        let d = 0;
        let e = 0;
        let f = 0;
        let g = 0;
        let h = typeCast(CellFillLinearGradient.$, a);
        let i = typeCast(CellFillRectangularGradient.$, a);
        if (h != null) {
            b = 0;
            c = h.angle;
        }
        else if (i != null) {
            b = 1;
            d = i.left;
            e = i.right;
            f = i.top;
            g = i.bottom;
        }
        else {
        }
        this._write12(b);
        this._write10(c);
        this._write10(d);
        this._write10(e);
        this._write10(f);
        this._write10(g);
        this._write18(intSToU(a.stops.count));
        for (let j = 0; j < a.stops.count; j++) {
            this._writeGradStop(a.stops.item(j));
        }
    }
    _readXFExtNoFRT(a) {
        let b = this._readUInt16();
        let c = this._readUInt16();
        let d = this._readUInt16();
        let e = this._readUInt16();
        for (let f = 0; f < e; f++) {
            let g = this._readExtProp();
            g.b(this._loadManagerBiff8, a);
        }
    }
    _writeXFExtNoFRT(a) {
        let b = a._cg();
        if (b.count == 0) {
            return;
        }
        this._write17(0);
        this._write17(65535);
        this._write17(0);
        this._write17(b.count);
        for (let c = 0; c < b.count; c++) {
            this._writeExtProp(b._inner[c]);
        }
    }
    _readXFProp() {
        let a = this._readUInt16();
        let b = this._readUInt16();
        switch (a) {
            case 7:
            case 10:
            case 12:
            case 8:
            case 9:
            case 6:
            case 11:
                let c;
                let d;
                let e = this._f8(c, d);
                c = e.p0;
                d = e.p1;
                return new XFPropBorderLoaded(a, c, d);
            case 23:
            case 14:
            case 13:
            case 32:
            case 33:
            case 28:
            case 30:
            case 31:
            case 29:
            case 44:
            case 21:
            case 43:
            case 22:
            case 20: return new XFPropBool(2, a, this.readByte());
            case 1:
            case 2:
            case 5: return new XFPropColorLoaded(a, this._readXFPropColor());
            case 25: return new XFPropFontBold(0, this._readUInt16());
            case 34:
            case 35:
            case 19: return new XFPropByte(a, this.readByte());
            case 36: return new XFPropFontHeight(this._readUInt32());
            case 24: return new XFPropFontName(this._readLPWideString());
            case 26: return new XFPropFontUnderline(this._c9());
            case 37: return new XFPropFontScheme(this._readFontScheme());
            case 27: return new XFPropFontSubscriptSuperscript(this._readScript());
            case 3: return this._readXFPropGradientFill();
            case 4: return this._readXFPropGradientStop();
            case 15: return new XFPropHorizontalAlignment(this._readHorizAlign());
            case 38:
                let f;
                let g;
                let h = this._readFormat(f, g);
                f = h.p0;
                g = h.p1;
                return new XFPropNumberFormat(f, g);
            case 41: return new XFPropNumberFormatId(this._readUInt16());
            case 0:
                let i = this.readByte();
                return new XFPropFillPattern(i);
            case 18: return new XFPropTextIndentationLevel(this._readUInt16());
            case 42: return new XFPropTextIndentationLevelRelative(this._readInt16());
            case 17: return new XFPropTextRotation(this.readByte());
            case 16: return new XFPropVerticalAlignment(this._readVertAlign());
            default: return null;
        }
    }
    _writeXFProp(a) {
        let b = this.position;
        this._write17(a.a);
        this._write17(0);
        switch (a.a) {
            case 7:
            case 10:
            case 12:
            case 8:
            case 9:
            case 6:
            case 11:
                let c = a;
                let d = c.f(this.saveManager._b);
                let e = c.d;
                this._ic(d, e);
                break;
            case 23:
            case 14:
            case 13:
            case 32:
            case 33:
            case 28:
            case 30:
            case 31:
            case 29:
            case 44:
            case 21:
            case 43:
            case 22:
            case 20:
                this._write9(a.f);
                break;
            case 1:
            case 2:
                this._writeXFPropColor(a.f, 1);
                break;
            case 25:
                this._write17(a.e);
                break;
            case 34:
            case 35:
            case 19:
                this._write17(a.e);
                break;
            case 5:
                this._writeXFPropColor(a.f, 2);
                break;
            case 36:
                this._write18(a.d);
                break;
            case 24:
                this._writeLPWideString(a.d);
                break;
            case 26:
                this._h5(a.d);
                break;
            case 37:
                this._writeFontScheme(a.d);
                break;
            case 27:
                this._writeScript(a.d);
                break;
            case 3:
                this._writeXFPropGradientFill(a);
                break;
            case 4:
                this._writeXFPropGradientStop(a);
                break;
            case 15:
                this._writeHorizAlign(a.d);
                break;
            case 38:
                let f = typeCast(XFPropNumberFormat.$, a);
                let g = f.f;
                let h = f.d;
                let i = this._readFormat(g, h);
                g = i.p0;
                h = i.p1;
                break;
            case 41:
                this._write17(a.d);
                break;
            case 0:
                this._write9(a.d);
                break;
            case 18:
                this._write17(a.d);
                break;
            case 42:
                this._write11(a.d);
                break;
            case 17:
                this._write9(a.d);
                break;
            case 16:
                this._writeVertAlign(a.d);
                break;
            default: break;
        }
        let j = this.position;
        let k = (j - b);
        this.position = b + 2;
        this._write17(k);
        this.position = j;
    }
    _f8(a, b) {
        a = this._readXFPropColor();
        b = this._readUInt16();
        return {
            p0: a,
            p1: b
        };
    }
    _ic(a, b) {
        this._writeXFPropColor(a, 0);
        this._write17(b);
    }
    _readXFPropColor() {
        let a = new XFPropColorInfo();
        a.b = this.readByte();
        a.a = this.readByte();
        a.c = this._readInt16();
        a.d = this._readUInt32();
        return a;
    }
    _writeXFPropColor(a, b) {
        let c;
        let d;
        let e;
        let f = this._fm(a, b, c, d, e);
        c = f.p2;
        d = f.p3;
        e = f.p4;
        let g = 255;
        let h = e;
        if (c == 3 || c == 1) {
            g = e;
        }
        let i = truncate(MathUtilities.f(d * 32767));
        let j = 0;
        let k = ExcelUtils.f5(j, true, 0);
        j = k.p0;
        let l = ExcelUtils.e0(j, c, 1, 7);
        j = l.p0;
        this._write9(j);
        this._write9(g);
        this._write11(i);
        this._write18(h);
    }
    _readXFPropGradientFill() {
        let a = this._readUInt32();
        let b = this._readDouble();
        let c = this._readDouble();
        let d = this._readDouble();
        let e = this._readDouble();
        let f = this._readDouble();
        return new XFPropGradientFill(a != 0, b, c, d, e, f);
    }
    _writeXFPropGradientFill(a) {
        this._write18(intSToU((a.d ? 1 : 0)));
        this._write10(a.j);
        this._write10(a.l);
        this._write10(a.m);
        this._write10(a.n);
        this._write10(a.k);
    }
    _readXFPropGradientStop() {
        let a = this._readUInt16();
        let b = this._readDouble();
        let c = this._readXFPropColor();
        return new XFPropGradientStopLoaded(c, b);
    }
    _writeXFPropGradientStop(a) {
        this._write17(0);
        this._write10(a.e);
        this._writeXFPropColor(a.c(this.saveManager._b), 1);
    }
    _readXFProps() {
        let a = this._readUInt16();
        let b = this._readUInt16();
        let c = new Array(b);
        for (let d = 0; d < b; d++) {
            c[d] = this._readXFProp();
        }
        return c;
    }
    static _applyXFProps(a, b, c, d) {
        let e = Nullable$1.toNullable(FillPatternStyle_$type, null);
        let f = null;
        let g = null;
        let h = null;
        let i = new List$1(CellFillGradientStop.$, 0);
        for (let j = 0; j < d.length; j++) {
            let k = d[j];
            if (k == null) {
                continue;
            }
            switch (k.a) {
                case 0:
                    e = Nullable$1.toNullable(FillPatternStyle_$type, k.d);
                    break;
                case 2:
                    f = k.c(a);
                    break;
                case 1:
                    g = k.c(a);
                    break;
                case 3:
                    h = k;
                    break;
                case 4:
                    let l = k;
                    i.add(new CellFillGradientStop(l.c(a), l.e));
                    break;
                default:
                    k.b(a, b);
                    break;
            }
        }
        if (h != null && i.count >= 2) {
            if (h.d) {
                b.fill = new CellFillRectangularGradient(h.l, h.n, h.m, h.k, ...i.toArray());
            }
            else {
                b.fill = new CellFillLinearGradient(h.j, ...i.toArray());
            }
        }
        else if (e.hasValue || WorkbookColorInfo.l_op_Inequality(f, null) || WorkbookColorInfo.l_op_Inequality(g, null)) {
            if (e.hasValue == false) {
                e = Nullable$1.toNullable(FillPatternStyle_$type, 1);
            }
            b.fill = new CellFillPattern(f, g, e.value, b, true);
        }
    }
    _writeXFProps(a) {
        this._write17(0);
        let b = a._ch();
        this._write17(b.count);
        for (let c = 0; c < b.count; c++) {
            this._writeXFProp(b._inner[c]);
        }
    }
    _readVertAlign() {
        return this.readByte();
    }
    _writeVertAlign(a) {
        this._write9(a);
    }
    _readXLUnicodeString() {
        let a = this._readUInt16();
        return this._readXLUnicodeStringNoCch(a);
    }
    _writeXLUnicodeString(a) {
        this._write17(a.length);
        this._writeXLUnicodeStringNoCch(a);
    }
    _readXLUnicodeStringNoCch(a) {
        let b = this.readByte();
        let c = ExcelUtils.bt(b, 0);
        let d = ExcelUtils.c4(b, 1, 7);
        let e = new Array(a * 2);
        for (let f = 0; f < e.length; f++) {
            e[f] = this.readByte();
            if (c == false) {
                e[++f] = 0;
            }
        }
        return Encoding.unicode.getString(e);
    }
    _writeXLUnicodeStringNoCch(a) {
        this._writeXLUnicodeStringNoCch1(a, false);
    }
    _writeXLUnicodeStringNoCch1(a, b) {
        let c = Encoding.unicode.getBytes1(a);
        let d = false;
        let e = new Array(intDivide(c.length, 2));
        if (b) {
            d = true;
        }
        else {
            for (let f = 1; f < c.length; f += 2) {
                if (c[f] != 0) {
                    d = true;
                    break;
                }
                e[intDivide(f, 2)] = c[f - 1];
            }
        }
        let g = d ? c : e;
        this.writeByte(Convert.toByte(d));
        this._write2(g);
    }
    _e0() {
        return this._readDouble();
    }
    _il(a) {
        this._write10(a);
    }
    _g2(a, b) {
        if (b == null) {
            return;
        }
        let c = this.position;
        this._writeDXFN12List(b);
        let d = this.position;
        let e = (d - c);
        this.position = a;
        this._write12(e);
        this.position = d;
    }
    get _loadManagerBiff8() {
        return this._loadManager;
    }
    get _nextBlockType() {
        return this._nextBlockTypeInternal;
    }
    set _nextBlockType(a) {
        this._nextBlockTypeInternal = a;
    }
    get _parentStream() {
        return this.parentStreamRaw;
    }
    get _recordType() {
        return this._bf;
    }
    get _saveManagerBiff8() {
        return this.saveManager;
    }
}
Biff8RecordStream.$t = markType(Biff8RecordStream, 'Biff8RecordStream', BiffRecordStream.$);
Biff8RecordStream._headerSize = 4;
Biff8RecordStream._maxBlockSize = 8224;
Biff8RecordStream._e6 = new Guid(2, 2045430240, 47865, 4558, 140, 130, 0, 170, 0, 75, 169, 11);
Biff8RecordStream._e3 = new Guid(2, 771, 0, 0, 192, 0, 0, 0, 0, 0, 0, 70);
Biff8RecordStream._e2 = new Guid(2, 777, 0, 0, 192, 0, 0, 0, 0, 0, 0, 70);
Biff8RecordStream._e1 = new Guid(2, 773, 0, 0, 192, 0, 0, 0, 0, 0, 0, 70);
Biff8RecordStream._e4 = new Guid(2, 772, 0, 0, 192, 0, 0, 0, 0, 0, 0, 70);
Biff8RecordStream._e5 = new Guid(2, 4102117497, 7483, 18559, 175, 44, 130, 93, 196, 133, 39, 99);
/**
 * @hidden
 */
export class Biff8RecordStream_AFDOper extends Base {
    constructor(a, ..._rest) {
        super();
        this.c = 0;
        this.a = 2;
        this.l = null;
        this.m = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    let c = _rest[0];
                    if (c.length > 255) {
                        c = c.substr(0, 255);
                    }
                    this.m = c;
                    this.c = 6;
                    this.l = c.length;
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    this.n(c, d);
                }
                break;
            case 3:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    if (d == null) {
                        return;
                    }
                    let e;
                    let f;
                    let g = d._q(c, e, f);
                    e = g.p1;
                    f = g.p2;
                    this.n(f, e);
                }
                break;
        }
    }
    n(a, b) {
        this.a = b;
        let c = typeCast(String_$type, a);
        if (c != null) {
            if (c.length == 0 && this.a == 5) {
                this.c = 14;
            }
            else {
                this.c = 6;
                this.m = c;
                this.l = this.m.length;
            }
        }
        else {
            this.l = a;
            if (typeof a === 'number') {
                this.c = 4;
            }
            else if (typeCast(Boolean_$type, a) !== null || typeCast(ErrorValue.$, a) !== null) {
                this.c = 8;
            }
            else {
            }
        }
    }
    get k() {
        if (this.c == 6) {
            return this.m;
        }
        return this.l;
    }
    get b() {
        if (this.c != 6) {
            return false;
        }
        return stringContains(this.m, "*") || stringContains(this.m, "?");
    }
}
Biff8RecordStream_AFDOper.$t = markType(Biff8RecordStream_AFDOper, 'Biff8RecordStream_AFDOper');
/**
 * @hidden
 */
export class Biff8RecordStream_Stxp extends Base {
    constructor() {
        super(...arguments);
        this.e = 0;
        this.a = null;
        this.f = 0;
        this.g = 0;
        this.d = 0;
        this.c = 0;
        this.b = 0;
    }
}
Biff8RecordStream_Stxp.$t = markType(Biff8RecordStream_Stxp, 'Biff8RecordStream_Stxp');
/**
 * @hidden
 */
export class Biff8RecordStream_Ts extends Base {
    constructor() {
        super(...arguments);
        this.a = false;
        this.b = false;
    }
}
Biff8RecordStream_Ts.$t = markType(Biff8RecordStream_Ts, 'Biff8RecordStream_Ts');
/**
 * @hidden
 */
export class ObjExtensionMethods extends Base {
    static w(a, b) {
        a.d = ObjExtensionMethods.d(b);
        let c = a.d.b;
        switch (c) {
            case 0:
                a.h = ObjExtensionMethods.g(b);
                break;
            case 8:
                a.c = ObjExtensionMethods.c(b) || new FtCf();
                a.p = ObjExtensionMethods.l(b) || new FtPioGrbit(false);
                break;
            case 11:
            case 12:
                a.a = ObjExtensionMethods.a(b);
                if (c == 12) {
                    a.r = ObjExtensionMethods.m(b);
                }
                break;
            case 16:
            case 17:
            case 18:
            case 20:
                a.u = ObjExtensionMethods.o(b);
                break;
            case 25:
                a.m = ObjExtensionMethods.j(b);
                break;
        }
        a.k = ObjExtensionMethods.i(b);
        switch (c) {
            case 8:
                a.n = ObjExtensionMethods.k(b, a);
                break;
            case 11:
            case 12:
                a.v = ObjExtensionMethods.s(b, a);
                a.b = ObjExtensionMethods.b(b, a);
                if (c == 12) {
                    a.s = ObjExtensionMethods.n(b);
                }
                break;
            case 16:
            case 17:
            case 18:
            case 20:
                a.v = ObjExtensionMethods.s(b, a);
                if (c == 18 || c == 20) {
                    a.i = ObjExtensionMethods.h(b, a);
                }
                break;
            case 13:
                a.f = ObjExtensionMethods.e(b);
                break;
            case 19:
                a.g = ObjExtensionMethods.f(b);
                break;
        }
        if (c != 18 && c != 20) {
            let d = b._av._readUInt32();
        }
    }
    static an(a, b) {
        if (a.d == null) {
            return;
        }
        ObjExtensionMethods.aa(a.d, b);
        let c = a.d.b;
        switch (c) {
            case 0:
                if (a.h == null) {
                    return;
                }
                ObjExtensionMethods.ad(a.h, b);
                break;
            case 8:
                if (a.c == null) {
                    return;
                }
                if (a.p == null) {
                    return;
                }
                ObjExtensionMethods.z(a.c, b);
                ObjExtensionMethods.ai(a.p, b);
                break;
            case 11:
            case 12:
                if (a.a == null) {
                    return;
                }
                ObjExtensionMethods.x(a.a, b);
                if (c == 12) {
                    if (a.r == null) {
                        return;
                    }
                    ObjExtensionMethods.aj(a.r, b);
                }
                break;
            case 16:
            case 17:
            case 18:
            case 20:
                if (a.u == null) {
                    return;
                }
                ObjExtensionMethods.al(a.u, b);
                break;
            case 25:
                if (a.m == null) {
                    return;
                }
                ObjExtensionMethods.ag(a.m, b);
                break;
        }
        if (a.k != null) {
            ObjExtensionMethods.af(a.k, b);
        }
        switch (c) {
            case 8:
                if (a.n != null) {
                    ObjExtensionMethods.ah(a.n, b, a);
                }
                break;
            case 11:
            case 12:
                if (a.v != null) {
                    ObjExtensionMethods.aq(a.v, b, a);
                }
                if (a.b == null) {
                    return;
                }
                ObjExtensionMethods.y(a.b, b, a);
                if (c == 12) {
                    if (a.s == null) {
                        return;
                    }
                    ObjExtensionMethods.ak(a.s, b);
                }
                break;
            case 16:
            case 17:
            case 18:
            case 20:
                if (a.v != null) {
                    ObjExtensionMethods.aq(a.v, b, a);
                }
                if (c == 18 || c == 20) {
                    if (a.i == null) {
                        return;
                    }
                    ObjExtensionMethods.ae(a.i, b, a);
                }
                break;
            case 13:
                if (a.f == null) {
                    return;
                }
                ObjExtensionMethods.ab(a.f, b);
                break;
            case 19:
                if (a.g == null) {
                    return;
                }
                ObjExtensionMethods.ac(a.g, b);
                break;
        }
        if (c != 18 && c != 20) {
            b._ci._write18(intSToU(0));
        }
    }
    static a(a) {
        if (ObjUtilities.a(a, 10) == false) {
            return null;
        }
        let b = a._av;
        let c = new FtCbls();
        let d = b._readUInt16();
        c.b = b._readUInt32();
        c.c = b._readUInt32();
        c.d = b._readUInt32();
        return c;
    }
    static x(a, b) {
        let c = b._ci;
        c._write17(10);
        c._write17(12);
        c._write18(a.b);
        c._write18(a.c);
        c._write18(a.d);
    }
    static b(a, b) {
        if (ObjUtilities.a(a, 18) == false) {
            return null;
        }
        let c = a._av;
        let d = new FtCblsData();
        let e = c._readUInt16();
        d.c = c._readUInt16();
        d.b = c._readUInt16();
        let f = c._readUInt16();
        let g = c._readUInt16();
        d.a = (g & 1) == 1;
        return d;
    }
    static y(a, b, c) {
        let d = b._ci;
        let e = 0;
        if (a.a) {
            e |= 1;
        }
        d._write17(18);
        d._write17(8);
        d._write17(a.c);
        d._write17(a.b);
        d._write17(0);
        d._write17(e);
    }
    static c(a) {
        if (ObjUtilities.a(a, 7) == false) {
            return null;
        }
        let b = a._av;
        let c = new FtCf();
        let d = b._readUInt16();
        c.a = b._readUInt16();
        return c;
    }
    static z(a, b) {
        let c = b._ci;
        c._write17(7);
        c._write17(2);
        c._write17(a.a);
    }
    static d(a) {
        if (ObjUtilities.a(a, 21) == false) {
            return null;
        }
        let b = a._av;
        let c = new FtCmo(0);
        let d = b._readUInt16();
        c.a = b._readUInt16();
        c.s = b._readUInt16();
        c.u = b._readUInt16();
        c.w = b._readUInt32();
        c.x = b._readUInt32();
        c.y = b._readUInt32();
        return c;
    }
    static aa(a, b) {
        let c = b._ci;
        c._write17(21);
        c._write17(18);
        c._write17(a.a);
        c._write17(a.s);
        c._write17(a.u);
        c._write18(a.w);
        c._write18(a.x);
        c._write18(a.y);
    }
    static e(a) {
        if (ObjUtilities.a(a, 16) == false) {
            return null;
        }
        let b = a._av;
        let c = new FtEdoData();
        let d = b._readUInt16();
        c.d = b._readUInt16();
        let e = b._readUInt16();
        c.a = (e != 0);
        let f = b._readUInt16();
        c.b = (f != 0);
        c.c = b._readUInt16();
        return c;
    }
    static ab(a, b) {
        let c = b._ci;
        c._write17(16);
        c._write17(8);
        c._write17(a.d);
        c._write17((a.a ? 1 : 0));
        c._write17((a.b ? 1 : 0));
        c._write17(a.c);
    }
    static f(a) {
        if (ObjUtilities.a(a, 15) == false) {
            return null;
        }
        let b = a._av;
        let c = new FtGboData();
        let d = b._readUInt16();
        c.b = b._readUInt16();
        let e = b._readUInt16();
        let f = b._readUInt16();
        c.a = (f & 1) == 1;
        return c;
    }
    static ac(a, b) {
        let c = b._ci;
        c._write17(15);
        c._write17(6);
        c._write17(a.b);
        c._write17(0);
        c._write17((a.a ? 1 : 0));
    }
    static g(a) {
        if (ObjUtilities.a(a, 6) == false) {
            return null;
        }
        let b = a._av;
        let c = new FtGmo();
        let d = b._readUInt16();
        c.b = b._readUInt16();
        return c;
    }
    static ad(a, b) {
        let c = b._ci;
        c._write17(6);
        c._write17(2);
        c._write17(a.b);
    }
    static h(a, b) {
        if (ObjUtilities.a(a, 19) == false) {
            return null;
        }
        let c = a._av;
        let d = new FtLbsData();
        d.f = c._readUInt16();
        if (d.f != 0) {
            d.d = ObjExtensionMethods.r(a);
            d.g = c._readUInt16();
            d.j = c._readUInt16();
            d.h = c._readUInt16();
            let e = (d.h & 2) == 2;
            let f = ((d.h & 48) >> 4);
            d.i = c._readUInt16();
            if (b.e.b == 20) {
                d.c = ObjExtensionMethods.p(a);
            }
            if (e) {
                d.b = new Array(d.g);
                for (let g = 0; g < d.g; g++) {
                    d.b[g] = c._readXLUnicodeString();
                }
            }
            if (f != 0) {
                d.a = new Array(d.g);
                for (let h = 0; h < d.g; h++) {
                    let i = c.readByte();
                    d.a[h] = (i != 0);
                }
            }
        }
        return d;
    }
    static ae(a, b, c) {
        let d = b._ci;
        d._write17(19);
        d._write17(a.f);
        if (a.f == 0) {
            return;
        }
        ObjExtensionMethods.ap(a.d, b);
        d._write17(a.g);
        d._write17(a.j);
        d._write17(a.h);
        d._write17(a.i);
        if (c.e.b == 20) {
            if (a.c != null) {
                ObjExtensionMethods.am(a.c, d);
            }
        }
        if (a.b != null) {
            for (let e = 0; e < a.g; e++) {
                d._writeXLUnicodeString(a.b[e]);
            }
        }
        if (a.a != null) {
            for (let f = 0; f < a.g; f++) {
                d._write9((a.a[f] ? 1 : 0));
            }
        }
    }
    static af(a, b) {
        if (a.c == null) {
            return;
        }
        b._ci._write17(4);
        ObjExtensionMethods.ap(a.c, b);
    }
    static i(a) {
        if (ObjUtilities.b(a, 4, false) == false) {
            return null;
        }
        let b = new FtMacro();
        b.b = ObjExtensionMethods.r(a);
        return b;
    }
    static j(a) {
        if (ObjUtilities.a(a, 13) == false) {
            return null;
        }
        let b = a._av;
        let c = new FtNts();
        let d = b._readUInt16();
        c.a = new Guid(1, b._readBytes(16));
        c.b = b._readUInt16();
        c.d = b._readUInt32();
        return c;
    }
    static ag(a, b) {
        let c = b._ci;
        c._write17(13);
        c._write17(22);
        c._write2(a.a.toByteArray());
        c._write17(a.b);
        c._write18(a.d);
    }
    static ah(a, b, c) {
        if (a.b == null) {
            return;
        }
        if (c.q.d && a.e == null) {
            return;
        }
        let d = b._ci;
        d._write17(9);
        d._write17(0);
        let e = d.position;
        ObjExtensionMethods.ap(a.c, b);
        let f = a.a();
        if (f != null && f._e.length >= 1 && typeCast(TblToken.$, f._e[0]) !== null) {
            d._write18(a.g);
            if (c.q.i) {
                d._write18(a.f);
            }
        }
        if (c.q.d) {
            ObjExtensionMethods.as(a.d, b);
        }
        let g = d.position;
        let h = (g - e);
        d.position = e - 2;
        d._write17(h);
        d.position = g;
    }
    static k(a, b) {
        if (ObjUtilities.b(a, 9, false) == false) {
            return null;
        }
        let c = a._av;
        let d = new FtPictFmla();
        let e = c._readUInt16();
        let f = c.position;
        d.b = ObjExtensionMethods.r(a);
        let g = d.a();
        if (g != null && g._e.length >= 1 && typeCast(TblToken.$, g._e[0]) !== null) {
            d.g = c._readUInt32();
            if (b.q.i) {
                d.f = c._readUInt32();
            }
        }
        if (b.q.d) {
            d.d = ObjExtensionMethods.u(a);
        }
        return d;
    }
    static l(a) {
        if (ObjUtilities.a(a, 8) == false) {
            return null;
        }
        let b = a._av;
        let c = new FtPioGrbit(true);
        let d = b._readUInt16();
        c.j = b._readUInt16();
        return c;
    }
    static ai(a, b) {
        let c = b._ci;
        c._write17(8);
        c._write17(2);
        c._write17(a.j);
    }
    static m(a) {
        if (ObjUtilities.a(a, 11) == false) {
            return null;
        }
        let b = a._av;
        let c = new FtRbo();
        let d = b._readUInt16();
        c.c = b._readUInt32();
        c.b = b._readUInt16();
        return c;
    }
    static aj(a, b) {
        let c = b._ci;
        c._write17(11);
        c._write17(6);
        c._write18(a.c);
        c._write17(a.b);
    }
    static n(a) {
        if (ObjUtilities.a(a, 17) == false) {
            return null;
        }
        let b = a._av;
        let c = new FtRboData();
        let d = b._readUInt16();
        c.d = b._readUInt16();
        let e = b._readUInt16();
        c.c = (e != 0);
        return c;
    }
    static ak(a, b) {
        let c = b._ci;
        if (a.a != null && a.a.sheet != null) {
            a.d = a.a._h.e.t;
        }
        else {
            a.d = 0;
        }
        c._write17(17);
        c._write17(4);
        c._write17(a.d);
        c._write17((a.c ? 1 : 0));
    }
    static o(a) {
        if (ObjUtilities.a(a, 12) == false) {
            return null;
        }
        let b = a._av;
        let c = new FtSbs();
        let d = b._readUInt16();
        c.j = b._readUInt32();
        c.h = b._readUInt16();
        c.g = b._readUInt16();
        c.f = b._readUInt16();
        c.a = b._readUInt16();
        c.b = b._readUInt16();
        c.d = b._readUInt16();
        c.c = b._readUInt16();
        c.e = b._readUInt16();
        return c;
    }
    static al(a, b) {
        let c = b._ci;
        c._write17(12);
        c._write17(20);
        c._write18(a.j);
        c._write17(a.h);
        c._write17(a.g);
        c._write17(a.f);
        c._write17(a.a);
        c._write17(a.b);
        c._write17(a.d);
        c._write17(a.c);
        c._write17(a.e);
    }
    static q(a) {
        let b = a._av;
        let c = new ObjectParsedFormula();
        let d = b._readUInt16();
        let e = (d & 61439);
        let f = (d & 32768);
        c.c = b._readUInt32();
        c.b = ObjExtensionMethods.v(a, e);
        return c;
    }
    static ao(a, b) {
        if (a.b == null) {
            return;
        }
        let c = b._ci;
        c._write17(0);
        c._write18(a.c);
        let d = c.position;
        ObjExtensionMethods.at(a.b, b);
        let e = c.position;
        let f = (e - d);
        c.position = d - 6;
        c._write17(f);
        c.position = e;
    }
    static r(a) {
        let b = a._av;
        let c = new ObjFmla();
        let d = b._readUInt16();
        let e = b.position;
        if (d > 0) {
            c.b = ObjExtensionMethods.q(a);
            let f = c.a();
            if (f != null && f._e.length >= 1 && typeCast(TblToken.$, f._e[0]) !== null) {
                c.d = ObjExtensionMethods.t(a);
            }
        }
        let g = d - (b.position - e);
        b._readBytes(g);
        return c;
    }
    static ap(a, b) {
        let c = a.a();
        let d = c != null && c._e.length >= 1 && typeCast(TblToken.$, c._e[0]) !== null;
        if (d && a.d == null) {
            return;
        }
        let e = b._ci;
        e._write17(0);
        if (a.b == null) {
            return;
        }
        let f = e.position;
        ObjExtensionMethods.ao(a.b, b);
        if (d) {
            ObjExtensionMethods.ar(a.d, e);
        }
        let g = e.position;
        let h = g - f;
        if (h % 4 != 0) {
            let i = (4 - (h % 4));
            e._write2(new Array(i));
            h += i;
        }
        e.position = f - 2;
        e._write17(h);
        e.seek(h, 1);
    }
    static aq(a, b, c) {
        if (a.a == null) {
            return;
        }
        let d;
        switch (c.e.b) {
            case 11:
            case 12:
                d = 20;
                break;
            case 16:
            case 17:
            case 18:
            case 20:
                d = 14;
                break;
            default: return;
        }
        b._ci._write17(d);
        ObjExtensionMethods.ap(a.a, b);
    }
    static s(a, b) {
        switch (b.e.b) {
            case 11:
            case 12:
                if (ObjUtilities.b(a, 20, false) == false) {
                    return null;
                }
                break;
            case 16:
            case 17:
            case 18:
            case 20:
                if (ObjUtilities.b(a, 14, false) == false) {
                    return null;
                }
                break;
            default: return null;
        }
        let c = new ObjLinkFmla();
        c.a = ObjExtensionMethods.r(a);
        return c;
    }
    static u(a) {
        let b = new PictFmlaKey();
        let c = a._av._readUInt32();
        b.a = a._av._readBytes(c);
        b.b = ObjExtensionMethods.r(a);
        b.d = ObjExtensionMethods.r(a);
        return b;
    }
    static as(a, b) {
        if (a.b == null) {
            return;
        }
        if (a.d == null) {
            return;
        }
        let c = b._ci;
        c._write18(intSToU(a.a.length));
        c._write2(a.a);
        ObjExtensionMethods.ap(a.b, b);
        ObjExtensionMethods.ap(a.d, b);
    }
    static v(a, b) {
        let c = new Rgce();
        let d = 0;
        let e = a._av._readBytes(b);
        c.a = ((() => { let f = a._au(3, b, e, d); e = f.p2; d = f.p3; return f.ret; })());
        return c;
    }
    static at(a, b) {
        if (a.a == null) {
            return;
        }
        b._c2(a.a, false, false);
    }
    static p(a) {
        let b = a._av;
        let c = new LbsDropData();
        let d = b._readUInt16();
        c.a = (d & 3);
        c.c = b._readUInt16();
        c.d = b._readUInt16();
        let e = b.position;
        c.b = b._readXLUnicodeString();
        let f = b.position - e;
        if (f % 2 == 1) {
            b.readByte();
        }
        return c;
    }
    static am(a, b) {
        let c = 0;
        c |= a.a;
        b._write17(c);
        b._write17(a.c);
        b._write17(a.d);
        let d = b.position;
        b._writeXLUnicodeString(a.b);
        let e = b.position - d;
        if (e % 2 == 1) {
            b.writeByte(0);
        }
    }
    static t(a) {
        let b = new PictFmlaEmbedInfo();
        let c = a._av.readByte();
        let d = a._av.readByte();
        let e = a._av.readByte();
        if (d != 0) {
            b.a = a._av._readXLUnicodeStringNoCch(d);
        }
        return b;
    }
    static ar(a, b) {
        let c = 0;
        if (a.a != null) {
            c = a.a.length;
        }
        b.writeByte(3);
        b.writeByte(c);
        b.writeByte(0);
        b._writeXLUnicodeStringNoCch(a.a);
    }
}
ObjExtensionMethods.$t = markType(ObjExtensionMethods, 'ObjExtensionMethods');
/**
 * @hidden
 */
export class ObjUtilities extends Base {
    static a(a, b) {
        return ObjUtilities.b(a, b, true);
    }
    static b(a, b, c) {
        let d = a._av._readUInt16();
        if (d != b) {
            a._av.seek(-2, 1);
            return false;
        }
        return true;
    }
}
ObjUtilities.$t = markType(ObjUtilities, 'ObjUtilities');
/**
 * @hidden
 */
export class EscherRecordBase extends Base {
    constructor(a, b, c) {
        super();
        this.c = null;
        this.f = 0;
        this.h = 0;
        this.j = 0;
        this.f = a;
        this.h = b;
        this.j = c;
    }
    get d() {
        return this.c;
    }
    set d(a) {
        this.c = a;
    }
    get i() {
        return this.h;
    }
    set i(a) {
        this.h = a;
    }
    get k() {
        return this.j;
    }
    set k(a) {
        if (this.d != null) {
            if (this.j < a) {
                this.d.k += a - this.j;
            }
            else {
                this.d.k -= this.j - a;
            }
        }
        this.j = a;
    }
    toString() {
        return EnumUtil.getName(EscherRecordType_$type, this.e) + ": " + this.j;
    }
    m(a) {
        let b = 0;
        b |= this.f;
        b |= ((this.h & 4095) << 4);
        b |= (this.e << 16);
        a._ci._write18(intSToU(b));
        a._ci._write18(this.j);
    }
    static b(a, b = null) {
        let c = a._av._readUInt32();
        let d = a._av._readUInt32();
        let e = (c & 15);
        let f = ((c & 65520) >>> 4);
        let g = ((u32BitwiseAnd(c, 4294901760)) >>> 16);
        let h = EscherRecordBase.a(g, e, f, d);
        if (h == null) {
            return h;
        }
        h.c = b;
        let i = a._av.position + d;
        if (h != null) {
            h.l(a);
        }
        a._av.position = i;
        return h;
    }
    static a(a, b, c, d) {
        switch (a) {
            case 61440: return new DrawingGroupContainer(1, b, c, d);
            case 61441: return new BLIPStoreContainer(1, b, c, d);
            case 61442: return new DrawingContainer(1, b, c, d);
            case 61443: return new GroupContainer(2, b, c, d);
            case 61444: return new ShapeContainer(1, b, c, d);
            case 61445: return new SolverContainer(1, b, c, d);
            case 61446: return new DrawingGroup(1, b, c, d);
            case 61447: return new BLIPStoreEntry(1, b, c, d);
            case 61448: return new Drawing(1, b, c, d);
            case 61449: return new GroupShape(1, b, c, d);
            case 61450: return new EscherShape(1, b, c, d);
            case 61451: return new PropertyTable1(2, b, c, d);
            case 61452: break;
            case 61453: return new ClientTextBox(1, b, c, d);
            case 61454: break;
            case 61455: return new ChildAnchor(1, b, c, d);
            case 61456: return new ClientAnchor(1, b, c, d);
            case 61457: return new ClientData(1, b, c, d);
            case 61458: return new ConnectorRule(b, c, d);
            case 61459: break;
            case 61460: break;
            case 61461: break;
            case 61462: break;
            case 61463: return new CalloutRule(b, c, d);
            case 61720: return new Regroup(b, c, d);
            case 61721: return new Selections(b, c, d);
            case 61722: break;
            case 61725: break;
            case 61726: return new SplitMenuColors(1, b, c, d);
            case 61727: break;
            case 61728: break;
            case 61729: return new PropertyTable2(1, b, c, d);
            case 61730: return new PropertyTable3(2, b, c, d);
            default:
                if (61464 <= a && a <= 61719) {
                    return new BLIP(1, a, b, c, d);
                }
                return null;
        }
        return null;
    }
}
EscherRecordBase.$t = markType(EscherRecordBase, 'EscherRecordBase', Base.$, [IEscherRecord_$type]);
/**
 * @hidden
 */
export class BLIP extends EscherRecordBase {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    super(0, 0, 0);
                    this.t = 0;
                    this.r = 0;
                    this.p = null;
                    this.o = null;
                    this.x = new Guid();
                    this.u = 0;
                    this.n = null;
                    this.u = 255;
                    this.p = c;
                    try {
                        let d = this.p.d;
                        if (Base.equalsStatic(d, ImageFormat.c)) {
                            this.r = 2;
                            this.i = 980;
                        }
                        else if (Base.equalsStatic(d, ImageFormat.i)) {
                            this.r = 3;
                            this.i = 534;
                        }
                        else if (Base.equalsStatic(d, ImageFormat.f)) {
                            this.r = 5;
                            this.i = 1130;
                        }
                        else {
                            this.r = 6;
                            this.i = 1760;
                        }
                    }
                    catch (e) {
                        throw new InvalidOperationException(2, ExcelUtils.ef("LE_InvalidOperationException_ImageDisposed"), e);
                    }
                    {
                        let f = new MemoryStream(0);
                        try {
                            this.z(f);
                            f.position = 0;
                            this.o = new Array(f.length);
                            f.read(this.o, 0, this.o.length);
                        }
                        finally {
                            if (f != null) {
                                f.dispose();
                            }
                        }
                    }
                    this.t = (this.r + 61464);
                    this.k = intSToU(this.o.length) + 17;
                    this.x = ExcelUtils.cr(this.o);
                    if (this.r == 2 || this.r == 3) {
                        if (Guid.l_op_Inequality_Lifted(c.h, Nullable$1.toNullable(Guid.$, null))) {
                            this.x = c.h.value;
                        }
                        this.n = this.o;
                        this.k = intSToU((50 + this.o.length));
                    }
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    let f = _rest[3];
                    super(d, e, f);
                    this.t = 0;
                    this.r = 0;
                    this.p = null;
                    this.o = null;
                    this.x = new Guid();
                    this.u = 0;
                    this.n = null;
                    this.t = c;
                    this.r = (this.t - 61464);
                }
                break;
        }
    }
    static staticInit() {
        BLIP.v = new Dictionary$2(BLIPType_$type, Delegate_$type, 0);
        BLIP.v.item(5, (a, b) => a.p.i(b, ImageFormat.f));
        BLIP.v.item(6, (a, b) => a.p.i(b, ImageFormat.g));
        BLIP.w = new Dictionary$2(BLIPType_$type, Delegate_$type, 0);
        BLIP.w.item(5, (a, b) => a.ad(b));
        BLIP.w.item(6, (a, b) => a.ad(b));
        BLIP.w.item(2, (a, b) => a.ae(b));
        BLIP.w.item(3, (a, b) => a.ae(b));
    }
    l(a) {
        switch (this.r) {
            case 5:
                this.aa(a, ImageFormat.f);
                break;
            case 6:
                this.aa(a, ImageFormat.g);
                break;
            case 7:
                this.ab(a);
                break;
            case 2:
                this.ac(a);
                break;
            case 3:
                this.ac(a);
                break;
            default: break;
        }
    }
    m(a) {
        super.m(a);
        let b;
        if (((() => { let c = BLIP.w.tryGetValue(this.r, b); b = c.p1; return c.ret; })()) == false) {
            b = BLIP.w.item(5);
        }
        b(this, a);
    }
    z(a) {
        let b;
        if (((() => { let c = BLIP.v.tryGetValue(this.r, b); b = c.p1; return c.ret; })()) == false) {
            b = BLIP.v.item(5);
        }
        b(this, a);
    }
    aa(a, b) {
        this.x = new Guid(1, a._av._readBytes(16));
        this.u = a._av.readByte();
        this.o = a._av._readBytes((this.k - 17));
        let c = new MemoryStream(2, this.o);
        this.p = new ExcelImage(1, b, c);
    }
    ab(a) {
        this.x = new Guid(1, a._av._readBytes(16));
        this.u = a._av.readByte();
        let b = (this.k - 17);
        let c = new Array(14 + b);
        a._av.read(c, 14, b);
        let d = new MemoryStream(2, c);
        let e = new BinaryWriter(1, d);
        e.m(66);
        e.m(77);
        e.q(c.length);
        e.q(0);
        e.q(54);
        d.position = 0;
        this.p = new ExcelImage(1, ImageFormat.b, d);
    }
    ac(a) {
        this.x = new Guid(1, a._av._readBytes(16));
        let b = a._av._readInt32();
        let c = a._av._readInt32();
        let d = a._av._readInt32();
        let e = a._av._readInt32();
        let f = a._av._readInt32();
        let g = a._av._readInt32();
        let h = a._av._readInt32();
        let i = a._av._readInt32();
        let j = a._av.readByte();
        let k = a._av.readByte();
        this.n = a._av._readBytes(i);
        this.p = new ExcelImage(0, ImageFormat.c, new MemoryStream(2, this.n), truncate(Workbook._er(a._b, ExcelUtils.c1(g), false, true)), truncate(Workbook._er(a._b, ExcelUtils.c1(h), true, true)), j == 0, this.x);
    }
    ad(a) {
        a._ci._write2(this.x.toByteArray());
        a._ci._write9(this.u);
        a._ci._write2(this.o);
    }
    ae(a) {
        a._ci._write2(this.x.toByteArray());
        a._ci._write12(this.o.length);
        a._ci._write12(0);
        a._ci._write12(0);
        a._ci._write12(this.p.g);
        a._ci._write12(this.p.f);
        a._ci._write12(ExcelUtils.dm(Workbook._ep(a._b, this.p.g, false)));
        a._ci._write12(ExcelUtils.dm(Workbook._ep(a._b, this.p.f, true)));
        if (this.n != null && this.n != this.o) {
            a._ci._write12(this.n.length);
            a._ci._write9(0);
            a._ci._write9(254);
            a._ci._write2(this.n);
        }
        else {
            let b = 254;
            if (this.p.e) {
                b = 0;
            }
            a._ci._write12(this.o.length);
            a._ci._write9(b);
            a._ci._write9(254);
            a._ci._write2(this.o);
        }
    }
    get s() {
        return this.r;
    }
    get q() {
        return this.p;
    }
    get y() {
        return this.x;
    }
    get_e() {
        return this.t;
    }
    get e() {
        return this.get_e();
    }
}
BLIP.$t = markType(BLIP, 'BLIP', EscherRecordBase.$);
BLIP.v = null;
BLIP.w = null;
/**
 * @hidden
 */
export class EscherRecordContainerBase extends EscherRecordBase {
    constructor(a, b, c) {
        super(a, b, c);
        this.p = null;
    }
    r(a) {
        if (this.p == null) {
            this.p = new List$1(EscherRecordBase.$, 0);
        }
        if (this.o(a)) {
            a.d = this;
            this.p.add(a);
            this.k += 8 + a.k;
        }
        else {
        }
    }
    n($t) {
        if (this.p == null) {
            return null;
        }
        for (let a of fromEnum(this.p)) {
            if ($t.isAssignableFrom(getInstanceType(a))) {
                return a;
            }
        }
        return null;
    }
    l(a) {
        this.p = new List$1(EscherRecordBase.$, 0);
        let b = a._av.position + this.k;
        while (a._av.position < b) {
            if (a._av.position == a._av.length) {
                break;
            }
            let c = EscherRecordBase.b(a, this);
            if (c != null) {
                if (this.o(c)) {
                    this.p.add(c);
                }
                else {
                    c.d = null;
                }
            }
        }
    }
    m(a) {
        super.m(a);
        if (this.p == null) {
            return;
        }
        for (let b of fromEnum(this.p)) {
            b.m(a);
        }
    }
    toString() {
        let a = new StringBuilder(0);
        a.l("------------------------------");
        a.l("\n");
        a.l(super.toString());
        a.l("\n\n");
        if (this.p != null) {
            for (let b of fromEnum(this.p)) {
                a.l("\t");
                a.l(stringReplace(b.toString(), "\n", "\n\t"));
                a.l("\n");
            }
        }
        a.l("------------------------------");
        return a.toString();
    }
    get q() {
        return this.p == null ? 0 : this.p.count;
    }
}
EscherRecordContainerBase.$t = markType(EscherRecordContainerBase, 'EscherRecordContainerBase', EscherRecordBase.$);
/**
 * @hidden
 */
export class BLIPStoreContainer extends EscherRecordContainerBase {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    super(15, c.count, 0);
                    for (let d of fromEnum(c)) {
                        let e = new BLIP(0, d.a);
                        let f = new BLIPStoreEntry(0, e, d.d);
                        this.r(f);
                    }
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    super(c, d, e);
                }
                break;
        }
    }
    o(a) {
        if (a.e == 61447) {
            return true;
        }
        if (61464 <= a.e && a.e <= 61719) {
            return true;
        }
        return false;
    }
    get_e() {
        return 61441;
    }
    get e() {
        return this.get_e();
    }
}
BLIPStoreContainer.$t = markType(BLIPStoreContainer, 'BLIPStoreContainer', EscherRecordContainerBase.$);
/**
 * @hidden
 */
export class BLIPStoreEntry extends EscherRecordBase {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    super(2, c.s, 36 + 8 + c.k);
                    this.p = 0;
                    this.o = 0;
                    this.r = new Guid();
                    this.s = 0;
                    this.t = 0;
                    this.v = 0;
                    this.u = 0;
                    this.q = 0;
                    this.n = null;
                    this.p = c.s;
                    this.o = c.s;
                    this.r = c.y;
                    this.s = 255;
                    this.t = c.k + 8;
                    this.v = d;
                    this.q = 0;
                    this.n = c;
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    super(c, d, e);
                    this.p = 0;
                    this.o = 0;
                    this.r = new Guid();
                    this.s = 0;
                    this.t = 0;
                    this.v = 0;
                    this.u = 0;
                    this.q = 0;
                    this.n = null;
                }
                break;
        }
    }
    l(a) {
        this.p = a._av.readByte();
        this.o = a._av.readByte();
        this.r = new Guid(1, a._av._readBytes(16));
        this.s = a._av._readUInt16();
        this.t = a._av._readUInt32();
        this.v = a._av._readUInt32();
        this.u = a._av._readUInt32();
        this.q = a._av.readByte();
        let b = a._av.readByte();
        a._av.readByte();
        a._av.readByte();
        if (this.t > 0) {
            this.n = EscherRecordBase.b(a);
            a._b3.add(new WorkbookSerializationDataExcel2003_ImageHolder(this.n.q, this.v));
        }
        else {
            a._b3.add(new WorkbookSerializationDataExcel2003_ImageHolder(null, this.v));
        }
    }
    m(a) {
        super.m(a);
        a._ci._write9(this.p);
        a._ci._write9(this.o);
        a._ci._write2(this.r.toByteArray());
        a._ci._write17(this.s);
        a._ci._write18(this.t);
        a._ci._write18(this.v);
        a._ci._write18(this.u);
        a._ci._write9(this.q);
        a._ci._write9(0);
        a._ci._write9(0);
        a._ci._write9(0);
        if (this.n != null) {
            this.n.m(a);
        }
    }
    toString() {
        let a = new StringBuilder(0);
        a.l("------------------------------");
        a.l("\n");
        a.l(super.toString());
        a.l("\n\n");
        a.l("Reference Count on the BLIP: " + this.v);
        a.l("\n");
        a.l("------------------------------");
        return a.toString();
    }
    get_e() {
        return 61447;
    }
    get e() {
        return this.get_e();
    }
}
BLIPStoreEntry.$t = markType(BLIPStoreEntry, 'BLIPStoreEntry', EscherRecordBase.$);
/**
 * @hidden
 */
export class CalloutRule extends EscherRecordBase {
    constructor(a, b, c) {
        super(a, b, c);
        this.n = 0;
        this.o = 0;
    }
    l(a) {
        this.n = a._av._readUInt32();
        this.o = a._av._readUInt32();
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c;
        let d = ((() => { let e = b._da(this.o, c); c = e.p1; return e.ret; })());
        if (d == null) {
            return;
        }
        d._f = this;
    }
    m(a) {
        super.m(a);
        a._ci._write18(this.n);
        a._ci._write18(this.o);
    }
    get shapeId() {
        return this.o;
    }
    set shapeId(a) {
        this.o = a;
    }
    get_e() {
        return 61463;
    }
    get e() {
        return this.get_e();
    }
}
CalloutRule.$t = markType(CalloutRule, 'CalloutRule', EscherRecordBase.$, [ICalloutRule_$type]);
/**
 * @hidden
 */
export class ChildAnchor extends EscherRecordBase {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    super(0, 0, 16);
                    this.n = null;
                    this.n = ExcelUtils.hb(c._getBoundsInTwips());
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    super(c, d, e);
                    this.n = null;
                }
                break;
        }
    }
    l(a) {
        this.n = a._av._readRect();
    }
    m(a) {
        super.m(a);
        a._ci._writeEMURect(this.n);
    }
    toString() {
        let a = new StringBuilder(0);
        a.l("------------------------------");
        a.l("\n");
        a.l(super.toString());
        a.l("\n\n");
        a.l("Shape Bounds (EMUS): " + this.n);
        a.l("\n");
        a.l("------------------------------");
        return a.toString();
    }
    get_e() {
        return 61455;
    }
    get e() {
        return this.get_e();
    }
    get o() {
        return this.n;
    }
}
ChildAnchor.$t = markType(ChildAnchor, 'ChildAnchor', EscherRecordBase.$);
/**
 * @hidden
 */
export class ClientAnchor extends EscherRecordBase {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    super(0, 0, 18);
                    this.n = 0;
                    this.s = null;
                    this.t = null;
                    this.o = null;
                    this.p = null;
                    this.n = c.positioningMode;
                    if (c.topLeftCornerCell.worksheet == null || c.bottomRightCornerCell.worksheet == null) {
                        return;
                    }
                    this.s = { $type: Point_$type, x: c._ah.m, y: c._ah.o };
                    this.o = { $type: Point_$type, x: c._ad.m, y: c._ad.o };
                    this.t = ClientAnchor.q(c._topLeftCornerPosition$i);
                    this.p = ClientAnchor.q(c._bottomRightCornerPosition$i);
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    super(c, d, e);
                    this.n = 0;
                    this.s = null;
                    this.t = null;
                    this.o = null;
                    this.p = null;
                }
                break;
        }
    }
    static q(a) {
        return { $type: Point_$type, x: truncate(MathUtilities.f((a.x / 100) * 1024)), y: truncate(MathUtilities.f((a.y / 100) * 256)) };
    }
    static r(a) {
        let b = Math.max(0, (a.x * 100) / 1024);
        let c = Math.max(0, (a.y * 100) / 256);
        return { $type: Point_$type, x: b, y: c };
    }
    l(a) {
        this.n = a._av._readUInt16();
        let b = a._av._readUInt16();
        let c = a._av._readUInt16();
        let d = a._av._readUInt16();
        let e = a._av._readUInt16();
        let f = a._av._readUInt16();
        let g = a._av._readUInt16();
        let h = a._av._readUInt16();
        let i = a._av._readUInt16();
        this.s = { $type: Point_$type, x: b, y: d };
        this.t = { $type: Point_$type, x: c, y: e };
        this.o = { $type: Point_$type, x: f, y: h };
        this.p = { $type: Point_$type, x: g, y: i };
        let j = a._ai.a(Worksheet.$);
        if (j == null) {
            return;
        }
        let k = a._ai.a(WorksheetShape.$);
        if (k == null) {
            return;
        }
        k._da(this.n, false);
        if (this.p.x == 0 && this.o.x == j._columns$i.maxCount) {
            this.o.x -= 1;
            this.p.x = 1024;
        }
        if (this.o.y == 0 && this.o.y == j._rows$i.maxCount) {
            this.o.y -= 1;
            this.p.y = 256;
        }
        k._bottomRightCornerPosition$i = ClientAnchor.r(this.p);
        k._topLeftCornerPosition$i = ClientAnchor.r(this.t);
        k.bottomRightCornerCell = j._rows$i.item(truncate(this.o.y))._cells$i.item(truncate(this.o.x));
        k.topLeftCornerCell = j._rows$i.item(truncate(this.s.y))._cells$i.item(truncate(this.s.x));
    }
    m(a) {
        super.m(a);
        a._ci._write17(this.n);
        a._ci._write17(truncate(this.s.x));
        a._ci._write17(truncate(this.t.x));
        a._ci._write17(truncate(this.s.y));
        a._ci._write17(truncate(this.t.y));
        a._ci._write17(truncate(this.o.x));
        a._ci._write17(truncate(this.p.x));
        a._ci._write17(truncate(this.o.y));
        a._ci._write17(truncate(this.p.y));
    }
    toString() {
        let a = new StringBuilder(0);
        a.l("------------------------------");
        a.l("\n");
        a.l(super.toString());
        a.l("\n\n");
        a.l("Top Left Cell: " + this.s);
        a.l("\n");
        a.l("Top Left Offset: " + this.t);
        a.l("\n");
        a.l("Bottom Right Cell: " + this.o);
        a.l("\n");
        a.l("Bottom Right Offset: " + this.p);
        a.l("\n");
        a.l("------------------------------");
        return a.toString();
    }
    get_e() {
        return 61456;
    }
    get e() {
        return this.get_e();
    }
}
ClientAnchor.$t = markType(ClientAnchor, 'ClientAnchor', EscherRecordBase.$);
/**
 * @hidden
 */
export class ClientData extends EscherRecordBase {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    super(0, 0, 0);
                    this.o = null;
                    this.o = c;
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    super(c, d, e);
                    this.o = null;
                }
                break;
        }
    }
    l(a) {
        let b = this.n(a);
        a._av._appendNextRecordIfType(236);
        if (b == null) {
            return;
        }
        let c = a._ai.a(WorksheetShape.$);
        if (c == null) {
            return;
        }
        c._h = b;
        if (b != null && b.e != null && b.e.b == 25) {
            let d = typeCast(UnknownShape.$, c);
            if (d != null) {
                let e = new WorksheetCellComment(d);
                a._ai.m(d, e);
                a._b4.add(e);
            }
        }
    }
    n(a) {
        if (nullableNotEquals(a._av._readNextBlockType(), 93)) {
            return null;
        }
        let b = new Obj(0);
        {
            let c = new Biff8RecordStream(1, a);
            try {
                ObjExtensionMethods.w(b, a);
            }
            finally {
                if (c != null) {
                    c.dispose();
                }
            }
        }
        if (b.e != null && b.e.b == 5) {
            let d = a._ca.position;
            {
                let e = new Biff8RecordStream(1, a);
                try {
                }
                finally {
                    if (e != null) {
                        e.dispose();
                    }
                }
            }
            let f = new List$1(FontXInfo.$, 0);
            let g = new List$1(Formula.$, 0);
            while (true) {
                {
                    let h = new Biff8RecordStream(1, a);
                    try {
                        switch (h._recordType) {
                            case 4177:
                                {
                                    let i = h._readBytes(h.length);
                                    let j = 6;
                                    let k = ((() => { let l = a._at(0, i, j); i = l.p1; j = l.p2; return l.ret; })());
                                    g.add(k);
                                }
                                break;
                            case 4134:
                                {
                                    let l = h._readUInt16();
                                    f.add(new FontXInfo(l, a));
                                }
                                break;
                        }
                        if (h._recordType == 10) {
                            break;
                        }
                    }
                    finally {
                        if (h != null) {
                            h.dispose();
                        }
                    }
                }
            }
            let m = a._ca.position;
            a._ca.position = d;
            let n = new Array(m - d);
            a._ca.read(n, 0, n.length);
            let o = typeCast(UnknownShape.$, a._ai.h());
            let p;
            if (o == null) {
                p = new WorksheetChart(0);
            }
            else {
                p = new WorksheetChart(1, o);
            }
            p._ec = new BinaryData(n);
            p._g4 = f;
            p._g3 = g;
            a._ai.k(p);
        }
        let q = this.n(a);
        return b;
    }
    m(a) {
        super.m(a);
        if (this.o._h == null) {
            this.o._h = new Obj(1, this.o);
        }
        let b = this.o._h.e;
        {
            let c = new Biff8RecordStream(3, a, 93);
            try {
                ObjExtensionMethods.an(this.o._h, a);
            }
            finally {
                if (c != null) {
                    c.dispose();
                }
            }
        }
        if (b != null && b.b == 5) {
            let d = typeCast(WorksheetChart.$, this.o);
            if (d != null && d._ec != null) {
                let e = 0;
                let f = 0;
                let g = d._ec.a;
                let h = 0;
                while (h < g.length) {
                    let i = BitConverter.w(g, h);
                    let j = BitConverter.w(g, h + 2);
                    let k = h + 4;
                    {
                        let l = new Biff8RecordStream(3, a, i);
                        try {
                            let t1 = i;
                            L0: while (true) {
                                switch (t1) {
                                    case 4177:
                                        {
                                            if (d._g3.count <= f) {
                                                t1 = void 0;
                                                continue L0;
                                            }
                                            let m = d._g3._inner[f++];
                                            l.write(g, k, 6);
                                            a._c2(m, true, false);
                                        }
                                        break;
                                    case 4134:
                                        {
                                            if (d._g4.count <= e) {
                                                t1 = void 0;
                                                continue L0;
                                            }
                                            let n = d._g4._inner[e++];
                                            l._write17(n.e(a));
                                        }
                                        break;
                                    default:
                                        l.write(g, k, j);
                                        break;
                                }
                                break;
                            }
                        }
                        finally {
                            if (l != null) {
                                l.dispose();
                            }
                        }
                    }
                    h += (4 + j);
                }
            }
            else {
            }
        }
        a._ci._nextBlockType = 236;
    }
    get_e() {
        return 61457;
    }
    get e() {
        return this.get_e();
    }
}
ClientData.$t = markType(ClientData, 'ClientData', EscherRecordBase.$);
/**
 * @hidden
 */
export class ClientTextBox extends EscherRecordBase {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    super(0, 0, 0);
                    this.n = null;
                    this.n = c;
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    super(c, d, e);
                    this.n = null;
                }
                break;
        }
    }
    l(a) {
        {
            let b = new Biff8RecordStream(1, a);
            try {
                WorkItemExtensions.n(a._ao());
            }
            finally {
                if (b != null) {
                    b.dispose();
                }
            }
        }
        a._av._appendNextRecordIfType(236);
    }
    m(a) {
        super.m(a);
        a._b7.k(this.n);
        a._dp(438);
        a._ci._nextBlockType = 236;
        a._b7.h();
    }
    get_e() {
        return 61453;
    }
    get e() {
        return this.get_e();
    }
}
ClientTextBox.$t = markType(ClientTextBox, 'ClientTextBox', EscherRecordBase.$);
/**
 * @hidden
 */
export class ConnectorRule extends EscherRecordBase {
    constructor(a, b, c) {
        super(a, b, c);
    }
    l(a) {
    }
    m(a) {
        super.m(a);
    }
    get_e() {
        return 61458;
    }
    get e() {
        return this.get_e();
    }
}
ConnectorRule.$t = markType(ConnectorRule, 'ConnectorRule', EscherRecordBase.$);
/**
 * @hidden
 */
export class Drawing extends EscherRecordBase {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    super(0, d._am, 8);
                    this.o = 0;
                    this.n = 0;
                    let e = c._w(d);
                    this.o = e.c;
                    this.n = e.b;
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    super(c, d, e);
                    this.o = 0;
                    this.n = 0;
                }
                break;
        }
    }
    l(a) {
        this.o = a._av._readUInt32();
        this.n = a._av._readUInt32();
    }
    m(a) {
        super.m(a);
        a._ci._write18(this.o);
        a._ci._write18(this.n);
    }
    toString() {
        let a = new StringBuilder(0);
        a.l("------------------------------");
        a.l("\n");
        a.l(super.toString());
        a.l("\n\n");
        a.l("Drawing ID: " + this.i);
        a.l("\n");
        a.l("Number of Shapes in this Drawing: " + this.o);
        a.l("\n");
        a.l("Last SPID Given to a Shape: " + this.n);
        a.l("\n");
        a.l("------------------------------");
        return a.toString();
    }
    get_e() {
        return 61448;
    }
    get e() {
        return this.get_e();
    }
}
Drawing.$t = markType(Drawing, 'Drawing', EscherRecordBase.$);
/**
 * @hidden
 */
export class DrawingContainer extends EscherRecordContainerBase {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    super(15, 0, 0);
                    let d = c._b7.a(Worksheet.$);
                    if (d == null) {
                        return;
                    }
                    this.r(new Drawing(0, c, d));
                    this.r(new GroupContainer(0, c, d));
                    let e = new SolverContainer(0, d);
                    if (e.q > 0) {
                        this.r(e);
                    }
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    super(c, d, e);
                }
                break;
        }
    }
    o(a) {
        switch (a.e) {
            case 61448:
            case 61720:
            case 61728:
            case 61443:
            case 61445: return true;
        }
        return false;
    }
    get_e() {
        return 61442;
    }
    get e() {
        return this.get_e();
    }
}
DrawingContainer.$t = markType(DrawingContainer, 'DrawingContainer', EscherRecordContainerBase.$);
/**
 * @hidden
 */
export class DrawingGroup extends EscherRecordBase {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    super(0, 0, 16 + (8 * intSToU(c.count)));
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    super(c, d, e);
                }
                break;
        }
    }
    l(a) {
        a._av.seek(this.k, 1);
    }
    m(a) {
        super.m(a);
        let b = 0;
        for (let c of fromEnum(a._az)) {
            b += a._s(c).c;
        }
        a._ci._write18(a._bb);
        a._ci._write18(intSToU((a._az.count + 1)));
        a._ci._write18(b);
        a._ci._write18(intSToU(a._az.count));
        for (let d of fromEnum(a._az)) {
            a._ci._write18(d._am);
            let e = a._s(d);
            a._ci._write18(e.c);
        }
    }
    toString() {
        let a = new StringBuilder(0);
        a.l("------------------------------");
        a.l("\n");
        a.l(super.toString());
        a.l("\n\n");
        a.l("------------------------------");
        return a.toString();
    }
    get_e() {
        return 61446;
    }
    get e() {
        return this.get_e();
    }
}
DrawingGroup.$t = markType(DrawingGroup, 'DrawingGroup', EscherRecordBase.$);
/**
 * @hidden
 */
export class DrawingGroupContainer extends EscherRecordContainerBase {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    super(15, 0, 0);
                    this.r(new DrawingGroup(0, c._az));
                    if (c._cx.count > 0) {
                        this.r(new BLIPStoreContainer(0, c._cx));
                    }
                    if (c._b._ej != null && c._b._ej.count > 0) {
                        this.r(new PropertyTable1(1, c._b._ej));
                    }
                    if (c._b._el != null && c._b._el.count > 0) {
                        this.r(new PropertyTable3(1, c._b._el));
                    }
                    this.r(new SplitMenuColors(0));
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    super(c, d, e);
                }
                break;
        }
    }
    o(a) {
        switch (a.e) {
            case 61446:
            case 61462:
            case 61451:
            case 61730:
            case 61722:
            case 61726:
            case 61441: return true;
        }
        return false;
    }
    get_e() {
        return 61440;
    }
    get e() {
        return this.get_e();
    }
}
DrawingGroupContainer.$t = markType(DrawingGroupContainer, 'DrawingGroupContainer', EscherRecordContainerBase.$);
/**
 * @hidden
 */
export class GroupContainer extends EscherRecordContainerBase {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    super(15, 0, 0);
                    this.r(new ShapeContainer(0, c, new Shape_PatriarchShape(c, d)));
                    this.s(c, d._shapes$i);
                    let e = c._w(d);
                    for (let f of fromEnum(e.j)) {
                        this.r(new ShapeContainer(0, c, f));
                    }
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    super(15, 0, 0);
                    this.r(new ShapeContainer(0, c, d));
                    this.s(c, d._shapes$i);
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    super(c, d, e);
                }
                break;
        }
    }
    s(a, b) {
        for (let c = 0; c < b.count; c++) {
            let d = a._z(b.item(c));
            if (d == null) {
                continue;
            }
            let e = typeCast(WorksheetShapeGroup.$, d);
            if (e != null) {
                this.r(new GroupContainer(1, a, e));
            }
            else {
                this.r(new ShapeContainer(0, a, d));
            }
        }
    }
    l(a) {
        super.l(a);
        let b = typeCast(WorksheetShapeGroup.$, a._ai.h());
        if (b != null) {
            b._d3();
        }
    }
    o(a) {
        switch (a.e) {
            case 61443:
            case 61444: return true;
        }
        return false;
    }
    get_e() {
        return 61443;
    }
    get e() {
        return this.get_e();
    }
}
GroupContainer.$t = markType(GroupContainer, 'GroupContainer', EscherRecordContainerBase.$);
/**
 * @hidden
 */
export class GroupShape extends EscherRecordBase {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    super(1, 0, 16);
                    this.n = null;
                    this.n = ExcelUtils.hb(c._getBoundsInTwips());
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    super(c, d, e);
                    this.n = null;
                }
                break;
        }
    }
    l(a) {
        this.n = a._av._readRect();
    }
    m(a) {
        super.m(a);
        a._ci._writeEMURect(this.n);
    }
    toString() {
        let a = new StringBuilder(0);
        a.l("------------------------------");
        a.l("\n");
        a.l(super.toString());
        a.l("\n\n");
        a.l("Group Bounds (EMUS): " + this.n);
        a.l("\n");
        a.l("------------------------------");
        return a.toString();
    }
    get_e() {
        return 61449;
    }
    get e() {
        return this.get_e();
    }
    get o() {
        return this.n;
    }
}
GroupShape.$t = markType(GroupShape, 'GroupShape', EscherRecordBase.$);
/**
 * @hidden
 */
export class PropertyTableBase extends EscherRecordBase {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    let d = [3, c.count, 0];
                    {
                        let f = d[0];
                        let g = d[1];
                        let h = d[2];
                        super(f, g, h);
                        this.n = null;
                    }
                    this.n = c;
                    let e = 0;
                    for (let f of fromEnum(this.n)) {
                        e += 6;
                        if (f._f) {
                            e += intSToU(f._i.a.length);
                        }
                    }
                    this.k = e;
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    super(c, d, e);
                    this.n = null;
                }
                break;
        }
    }
    l(a) {
        let b = a._ai.a(WorksheetShape.$);
        this.n = new List$1(PropertyTableBase_PropertyValue.$, 0);
        let c = false;
        for (let d = 0; d < this.i; d++) {
            let e = a._av._readUInt16();
            let f = a._av._readUInt32();
            let g = (e & 16383);
            let h = (e & 32768) == 32768;
            let i = (e & 16384) == 16384 && h == false;
            let j = new PropertyTableBase_PropertyValue(1, g, f, h, i);
            if (i && b != null) {
                c = true;
                let k = typeCast(IWorksheetImage_$type, b);
                if (k != null) {
                    k.image = a._b3._inner[f - 1].a;
                }
            }
            this.n.add(j);
        }
        this.n.y();
        for (let l of fromEnum(this.n)) {
            if (l._f == false) {
                continue;
            }
            let m = typeGetValue(l._i);
            if (m == 0) {
                l._i = new BinaryData(new Array(0));
                continue;
            }
            if (l._g) {
                let n = 6;
                if (m < n) {
                    l._i = new BinaryData(a._av._readBytes(m));
                }
                else {
                    let o = a._av._readBytes(n);
                    let p = BitConverter.w(o, 0);
                    let q = BitConverter.w(o, 2);
                    let r = BitConverter.w(o, 4);
                    let s = r == 65520 ? 4 : r;
                    let t = p * s;
                    let u = m - n;
                    let v = Math.max(t, u);
                    let w = a._av._readBytes(v);
                    let x = new Array(o.length + w.length);
                    Buffer.c(o, 0, x, 0, o.length);
                    Buffer.c(w, 0, x, o.length, w.length);
                    l._i = new BinaryData(x);
                }
            }
            else {
                l._i = new BinaryData(a._av._readBytes(m));
            }
        }
    }
    m(a) {
        super.m(a);
        for (let b of fromEnum(this.n)) {
            let c = 0;
            let d = 0;
            d |= b._b;
            if (b._f) {
                d |= 49152;
                let e = typeCast(BinaryData.$, b._i);
                if (e != null) {
                    c = intSToU(e.a.length);
                }
            }
            else {
                c = typeGetValue(b._i);
            }
            if (b._d) {
                d |= 16384;
            }
            a._ci._write17(d);
            a._ci._write18(c);
        }
        for (let f of fromEnum(this.n)) {
            if (f._f == false) {
                continue;
            }
            let g = typeCast(BinaryData.$, f._i);
            if (g != null) {
                a._ci._write2(g.a);
            }
        }
    }
    get o() {
        return this.n;
    }
}
PropertyTableBase.$t = markType(PropertyTableBase, 'PropertyTableBase', EscherRecordBase.$);
/**
 * @hidden
 */
export class PropertyTable1 extends PropertyTableBase {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    super(0, c._bi);
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    super(0, c);
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    super(1, c, d, e);
                }
                break;
        }
    }
    l(a) {
        super.l(a);
        let b = a._ai.a(WorksheetShape.$);
        if (b != null) {
            b._bi = this.o;
            this.c4(a, b);
        }
        else {
            a._b._ej = this.o;
        }
    }
    static c3(a, b, c) {
        let d = Nullable$1.toNullable(Number_$type, null);
        let e = Nullable$1.toNullable(Number_$type, null);
        if (b != null) {
            d = Nullable$1.toNullable(Number_$type, typeGetValue(b._i));
        }
        if (c != null) {
            e = Nullable$1.toNullable(Number_$type, typeGetValue(c._i));
        }
        let f = ExcelUtils.dx(Color.$, new Color());
        let g;
        let h;
        let i;
        let j = DocCoreUtils.al(d, e, f, g, h, i);
        f = j.p2;
        g = j.p3;
        h = j.p4;
        i = j.p5;
        if (Color.e(f, Nullable$1.toNullable(Color.$, null))) {
            return Nullable$1.toNullable(Color.$, f.value);
        }
        if (nullableNotEquals(g, null)) {
            return Nullable$1.toNullable(Color.$, ExcelUtils.g1(a._b._palette$i._ae(g.value)));
        }
        if (nullableNotEquals(h, null)) {
            switch (h.value) {
                case 0: return Nullable$1.toNullable(Color.$, SystemColorsInternal.l);
                case 1: return Nullable$1.toNullable(Color.$, SystemColorsInternal.bf);
                case 2: return Nullable$1.toNullable(Color.$, SystemColorsInternal.a3);
                case 3: return Nullable$1.toNullable(Color.$, SystemColorsInternal.al);
                case 4: return Nullable$1.toNullable(Color.$, SystemColorsInternal.an);
                case 5: return Nullable$1.toNullable(Color.$, SystemColorsInternal.h);
                case 6: return Nullable$1.toNullable(Color.$, SystemColorsInternal.f);
                case 7: return Nullable$1.toNullable(Color.$, SystemColorsInternal.n);
                case 8: return Nullable$1.toNullable(Color.$, SystemColorsInternal.p);
                case 9: return Nullable$1.toNullable(Color.$, SystemColorsInternal.z);
                case 10: return Nullable$1.toNullable(Color.$, SystemColorsInternal.aj);
                case 11: return Nullable$1.toNullable(Color.$, SystemColorsInternal.at);
                case 12: return Nullable$1.toNullable(Color.$, SystemColorsInternal.av);
                case 13: return Nullable$1.toNullable(Color.$, SystemColorsInternal.ax);
                case 14: return Nullable$1.toNullable(Color.$, SystemColorsInternal.az);
                case 15: return Nullable$1.toNullable(Color.$, SystemColorsInternal.a7);
                case 16: return Nullable$1.toNullable(Color.$, SystemColorsInternal.a9);
                case 17: return Nullable$1.toNullable(Color.$, SystemColorsInternal.bb);
                case 18: return Nullable$1.toNullable(Color.$, SystemColorsInternal.bd);
                case 19: return Nullable$1.toNullable(Color.$, SystemColorsInternal.v);
                default: break;
            }
        }
        return Nullable$1.toNullable(Color.$, null);
    }
    c4(a, b) {
        let c = null;
        let d = null;
        let e = null;
        let f = null;
        let g = null;
        let h = null;
        let i = typeCast(WorksheetShapeWithText.$, b);
        for (let j = 0; j < this.o.count; j++) {
            let k = this.o._inner[j];
            switch (k._b) {
                case 4:
                    b._b6 = ExcelUtils.d1(typeGetValue(k._i));
                    break;
                case 129:
                    if (i != null) {
                        i._d6 = ExcelUtils.c1(typeGetValue(k._i));
                    }
                    break;
                case 130:
                    if (i != null) {
                        i._ed = ExcelUtils.c1(typeGetValue(k._i));
                    }
                    break;
                case 131:
                    if (i != null) {
                        i._ea = ExcelUtils.c1(typeGetValue(k._i));
                    }
                    break;
                case 132:
                    if (i != null) {
                        i._d2 = ExcelUtils.c1(typeGetValue(k._i));
                    }
                    break;
                case 385:
                    c = k;
                    break;
                case 386:
                    d = k;
                    break;
                case 447:
                    e = k;
                    break;
                case 448:
                    f = k;
                    break;
                case 449:
                    g = k;
                    break;
                case 511:
                    h = k;
                    break;
            }
        }
        let l = false;
        let m = l;
        let n = e != null || c != null;
        if (e != null && typeof e._i === 'number') {
            m = ExcelUtils.bu(typeGetValue(e._i), 20);
            if (m) {
                n = ExcelUtils.bu(typeGetValue(e._i), 4);
            }
        }
        if (n) {
            let o = PropertyTable1.c3(a, c, d);
            b.fill = ShapeFill._fromColor$i(!nullableIsNull(o) ? o.value : SystemColorsInternal.bb);
        }
        let p = false;
        let q = p;
        let r = h != null || f != null;
        if (h != null && typeof h._i === 'number') {
            q = ExcelUtils.bu(typeGetValue(h._i), 19);
            if (q) {
                r = ExcelUtils.bu(typeGetValue(h._i), 3);
            }
        }
        if (r) {
            let s = PropertyTable1.c3(a, f, g);
            b.outline = ShapeOutline._fromColor$i(!nullableIsNull(s) ? s.value : SystemColorsInternal.bf);
        }
    }
    get_e() {
        return 61451;
    }
    get e() {
        return this.get_e();
    }
}
PropertyTable1.$t = markType(PropertyTable1, 'PropertyTable1', PropertyTableBase.$);
/**
 * @hidden
 */
export class PropertyTable2 extends PropertyTableBase {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    super(0, c._bk);
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    super(1, c, d, e);
                }
                break;
        }
    }
    l(a) {
        super.l(a);
        let b = a._ai.a(WorksheetShape.$);
        if (b != null) {
            b._bk = this.o;
        }
        else {
        }
    }
    get_e() {
        return 61729;
    }
    get e() {
        return this.get_e();
    }
}
PropertyTable2.$t = markType(PropertyTable2, 'PropertyTable2', PropertyTableBase.$);
/**
 * @hidden
 */
export class PropertyTable3 extends PropertyTableBase {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    super(0, c._bm);
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    super(0, c);
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    super(1, c, d, e);
                }
                break;
        }
    }
    l(a) {
        super.l(a);
        let b = a._ai.a(WorksheetShape.$);
        if (b != null) {
            b._bm = this.o;
            this.c3(a, b);
        }
        else {
            a._b._el = this.o;
        }
    }
    c3(a, b) {
        let c = null;
        for (let d = 0; d < this.o.count; d++) {
            let e = this.o._inner[d];
            switch (e._b) {
                case 937:
                    c = e._i.a;
                    break;
            }
        }
        if (c != null && a._al != null) {
        }
    }
    get_e() {
        return 61730;
    }
    get e() {
        return this.get_e();
    }
}
PropertyTable3.$t = markType(PropertyTable3, 'PropertyTable3', PropertyTableBase.$);
/**
 * @hidden
 */
export class Regroup extends EscherRecordBase {
    constructor(a, b, c) {
        super(a, b, c);
        this.n = null;
        this.o = null;
    }
    l(a) {
        this.n = new Array(this.i);
        this.o = new Array(this.i);
        for (let b = 0; b < this.n.length; b++) {
            this.n[b] = a._av._readUInt16();
            this.o[b] = a._av._readUInt16();
        }
    }
    m(a) {
        super.m(a);
        if (this.n != null) {
            for (let b = 0; b < this.n.length; b++) {
                a._ci._write17(this.n[b]);
                a._ci._write17(this.o[b]);
            }
        }
    }
    toString() {
        let a = new StringBuilder(0);
        a.l("------------------------------");
        a.l("\n");
        a.l(super.toString());
        a.l("\n\n");
        if (this.n != null) {
            for (let b = 0; b < this.n.length; b++) {
                a.j(b);
                a.l(": ");
                a.j(this.n[b]);
                a.l(", ");
                a.j(this.o[b]);
                a.t();
            }
        }
        a.l("------------------------------");
        return a.toString();
    }
    get_e() {
        return 61720;
    }
    get e() {
        return this.get_e();
    }
}
Regroup.$t = markType(Regroup, 'Regroup', EscherRecordBase.$);
/**
 * @hidden
 */
export class Selections extends EscherRecordBase {
    constructor(a, b, c) {
        super(a, b, c);
    }
    l(a) {
        let b = a._av._readUInt32();
        let c = a._av._readUInt32();
        let d = a._av._readUInt32();
        let e = intDivide((a._av.length - 20), 4);
        for (let f = 0; f < e; f++) {
            let g = a._av._readUInt32();
        }
    }
    m(a) {
        super.m(a);
    }
    get_e() {
        return 61721;
    }
    get e() {
        return this.get_e();
    }
}
Selections.$t = markType(Selections, 'Selections', EscherRecordBase.$);
/**
 * @hidden
 */
export class EscherShape extends EscherRecordBase {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    super(2, c._b0.value, 8);
                    this.o = 0;
                    this.n = null;
                    this.n = c;
                    this.o = c._cn;
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    super(c, d, e);
                    this.o = 0;
                    this.n = null;
                }
                break;
        }
    }
    l(a) {
        this.o = a._av._readUInt32();
        let b = a._av._readUInt32();
        let c = (b & 1) == 1;
        let d = (b & 4) == 4;
        let e = (b & 8) == 8;
        let f = (b & 16) == 16;
        let g = (b & 32) == 32;
        let h = (b & 64) == 64;
        let i = (b & 128) == 128;
        let j = (b & 256) == 256;
        let k = (b & 1024) == 1024;
        if (e) {
            return;
        }
        if (d) {
            a._ai.k(a._ai.a(Worksheet.$));
            return;
        }
        let l;
        if (c) {
            let m = new WorksheetShapeGroup(true);
            l = m;
            if (this.d != null) {
                let n = this.d.n(GroupShape.$);
                if (n != null) {
                    a._cs(m, n.o);
                }
            }
        }
        else {
            let o = this.i;
            let t1 = o;
            L0: while (true) {
                switch (t1) {
                    case 0:
                        t1 = void 0;
                        continue L0;
                    case 75:
                        l = new WorksheetImage(false);
                        break;
                    case 202:
                        l = new UnknownShape(0, o, b);
                        break;
                    default:
                        let p = o;
                        if (EnumUtil.isDefined(PredefinedShapeType_$type, enumGetBox(PredefinedShapeType_$type, p))) {
                            l = WorksheetShape._al(p, false);
                        }
                        else {
                            l = new UnknownShape(0, o, b);
                        }
                        break;
                }
                break;
            }
        }
        let q = typeCast(UnknownShape.$, l);
        if (q != null) {
            q._ek = f;
        }
        else {
        }
        l._cn = this.o;
        l.flippedHorizontally = h;
        l.flippedVertically = i;
        a._ai.k(l);
    }
    m(a) {
        super.m(a);
        let b = 0;
        let c = typeCast(UnknownShape.$, this.n);
        if (c != null) {
            b = (u32BitwiseAnd(c._ep, ~2567));
        }
        else {
            let d = typeCast(WorksheetChart.$, this.n);
            if (d != null) {
                b = (u32BitwiseAnd(d._i5, ~2567));
            }
        }
        if (typeCast(WorksheetShapeGroup.$, this.n) !== null) {
            b = u32BitwiseOr(b, 1);
        }
        if (this.n._a8 == false) {
            b = u32BitwiseOr(b, 2);
        }
        if (typeCast(Shape_PatriarchShape.$, this.n) !== null) {
            b = u32BitwiseOr(b, 4);
        }
        if (c != null && c._ek) {
            b = u32BitwiseOr(b, 16);
        }
        if (this.n.flippedHorizontally) {
            b = u32BitwiseOr(b, 64);
        }
        if (this.n.flippedVertically) {
            b = u32BitwiseOr(b, 128);
        }
        if (this.n._a5) {
            b = u32BitwiseOr(b, 256);
        }
        if ((typeCast(Shape_PatriarchShape.$, this.n) !== null) == false) {
            b = u32BitwiseOr(b, 512);
        }
        if (this.i != 0) {
            b = u32BitwiseOr(b, 2048);
        }
        a._ci._write18(this.o);
        a._ci._write18(b);
    }
    toString() {
        let a = new StringBuilder(0);
        a.l("------------------------------");
        a.l("\n");
        a.l(super.toString());
        a.l("\n\n");
        a.l("Shape Type: " + this.i);
        a.l("\n");
        a.l("Shape ID: " + this.o);
        a.l("\n");
        a.l("------------------------------");
        return a.toString();
    }
    get_e() {
        return 61450;
    }
    get e() {
        return this.get_e();
    }
}
EscherShape.$t = markType(EscherShape, 'EscherShape', EscherRecordBase.$);
/**
 * @hidden
 */
export class Shape_PatriarchShape extends WorksheetShapeGroup {
    constructor(a, b) {
        super();
        this._d9 = 0;
        this._d9 = a._w(b).d;
    }
    _getBoundsInTwips1(a) {
        return Rect.empty;
    }
    get__a8() {
        return true;
    }
    get__cn() {
        return this._d9;
    }
    set__cn(a) {
    }
}
Shape_PatriarchShape.$t = markType(Shape_PatriarchShape, 'Shape_PatriarchShape', WorksheetShapeGroup.$);
/**
 * @hidden
 */
export class ShapeContainer extends EscherRecordContainerBase {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    super(15, 0, 0);
                    if (d._b0.hasValue == false) {
                        return;
                    }
                    c._da(d);
                    let e = typeCast(WorksheetShapeGroup.$, d);
                    if (e != null) {
                        this.r(new GroupShape(0, e));
                        if (typeCast(Shape_PatriarchShape.$, e) !== null) {
                            this.r(new EscherShape(0, e));
                            return;
                        }
                    }
                    this.r(new EscherShape(0, d));
                    if (d._a1) {
                        d._bi.y();
                        this.r(new PropertyTable1(0, d));
                    }
                    if (d._a2) {
                        d._bk.y();
                        this.r(new PropertyTable2(0, d));
                    }
                    if (d._a3) {
                        d._bm.y();
                        this.r(new PropertyTable3(0, d));
                    }
                    this.r(ShapeContainer.s(d));
                    this.r(new ClientData(0, d));
                    let f = typeCast(WorksheetShapeWithText.$, d);
                    let g = typeCast(WorksheetCellComment.$, d);
                    if ((f != null && f._d0) || (g != null)) {
                        this.r(new ClientTextBox(0, d));
                    }
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    super(c, d, e);
                }
                break;
        }
    }
    l(a) {
        super.l(a);
        if (typeCast(WorksheetShape.$, a._ai.f) !== null) {
            let b = a._ai.h();
            let c = a._ai.a(Worksheet.$);
            let d = a._ai.a(IWorksheetShapeOwner_$type);
            if (c == null || d == null) {
                return;
            }
            let e = this.n(ChildAnchor.$);
            let f = typeCast(WorksheetShapeGroup.$, d);
            if (f != null) {
                if (e != null && c != null) {
                    let g = ShapeContainer.u(e.o);
                    let h = f._getBoundsInTwips();
                    let i = a._cu(f);
                    let j = ShapeContainer.t(h, i);
                    let k = a._ae(g, b._b6, j, h);
                    b._setBoundsInTwips(c, k);
                }
            }
            else if (e != null) {
                b._setBoundsInTwips(c, ExcelUtils.ha(e.o));
            }
            if (WorksheetCell.l_op_Equality(b.topLeftCornerCell, null)) {
                return;
            }
            d.ChildShapes._add4(b, false);
            if (typeCast(WorksheetShapeGroup.$, b) !== null) {
                a._ai.k(b);
            }
        }
    }
    static s(a) {
        if (a._a8) {
            return new ClientAnchor(0, a);
        }
        else {
            return new ChildAnchor(0, a);
        }
    }
    o(a) {
        switch (a.e) {
            case 61449:
            case 61450:
            case 61451:
            case 61729:
            case 61730:
            case 61452:
            case 61453:
            case 61454:
            case 61455:
            case 61456:
            case 61457:
            case 61727:
            case 61725: return true;
        }
        return false;
    }
    get_e() {
        return 61444;
    }
    get e() {
        return this.get_e();
    }
    static t(a, b) {
        return ((() => {
            let $ret = new CT_GroupTransform2D();
            $ret.a = ((() => {
                let $ret = new CT_Point2D();
                $ret.a = ST_Coordinate.b(truncate(a.x));
                $ret.b = ST_Coordinate.b(truncate(a.y));
                return $ret;
            })());
            $ret.b = ((() => {
                let $ret = new CT_PositiveSize2D();
                $ret.a = ST_PositiveCoordinate.a(truncate(a.width));
                $ret.b = ST_PositiveCoordinate.a(truncate(a.height));
                return $ret;
            })());
            $ret.l = ((() => {
                let $ret = new CT_Point2D();
                $ret.a = ST_Coordinate.b(truncate(b.x));
                $ret.b = ST_Coordinate.b(truncate(b.y));
                return $ret;
            })());
            $ret.m = ((() => {
                let $ret = new CT_PositiveSize2D();
                $ret.a = ST_PositiveCoordinate.a(truncate(b.width));
                $ret.b = ST_PositiveCoordinate.a(truncate(b.height));
                return $ret;
            })());
            return $ret;
        })());
    }
    static u(a) {
        return ((() => {
            let $ret = new CT_Transform2D();
            $ret.a = ((() => {
                let $ret = new CT_Point2D();
                $ret.a = ST_Coordinate.b(truncate(a.x));
                $ret.b = ST_Coordinate.b(truncate(a.y));
                return $ret;
            })());
            $ret.b = ((() => {
                let $ret = new CT_PositiveSize2D();
                $ret.a = ST_PositiveCoordinate.a(truncate(a.width));
                $ret.b = ST_PositiveCoordinate.a(truncate(a.height));
                return $ret;
            })());
            return $ret;
        })());
    }
}
ShapeContainer.$t = markType(ShapeContainer, 'ShapeContainer', EscherRecordContainerBase.$);
/**
 * @hidden
 */
export class SolverContainer extends EscherRecordContainerBase {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    super(15, 0, 0);
                    let d = c._fg();
                    for (let e of fromEnum(d)) {
                        this.r(e);
                    }
                    this.i = this.q;
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    super(c, d, e);
                }
                break;
        }
    }
    l(a) {
        super.l(a);
    }
    o(a) {
        switch (a.e) {
            case 61458:
            case 61459:
            case 61460:
            case 61461:
            case 61463: return true;
        }
        return false;
    }
    get_e() {
        return 61445;
    }
    get e() {
        return this.get_e();
    }
}
SolverContainer.$t = markType(SolverContainer, 'SolverContainer', EscherRecordContainerBase.$);
/**
 * @hidden
 */
export class SplitMenuColors extends EscherRecordBase {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = [0, 4, 16];
                    {
                        let e = c[0];
                        let f = c[1];
                        let g = c[2];
                        super(e, f, g);
                    }
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    super(c, d, e);
                }
                break;
        }
    }
    l(a) {
        for (let b = 0; b < this.i; b++) {
            a._av._readUInt32();
        }
    }
    m(a) {
        super.m(a);
        a._ci._write18(intSToU(134217741));
        a._ci._write18(intSToU(134217740));
        a._ci._write18(intSToU(134217751));
        a._ci._write18(intSToU(268435703));
    }
    get_e() {
        return 61726;
    }
    get e() {
        return this.get_e();
    }
}
SplitMenuColors.$t = markType(SplitMenuColors, 'SplitMenuColors', EscherRecordBase.$);
/**
 * @hidden
 */
export class Biff8RecordBase extends BiffRecordBase$3 {
    constructor() {
        super(BIFF8RecordType_$type, WorkbookLoadManagerExcel2003.$, WorkbookSaveManagerExcel2003.$);
    }
    static get m() {
        if (Biff8RecordBase.l == null) {
            Biff8RecordBase.l = Biff8RecordBase.k;
        }
        return Biff8RecordBase.l;
    }
    static j(a) {
        switch (a) {
            case 93:
            case 0: return 0;
            case 229: return 229;
            case 2198:
            case 2174:
            case 2197: return 2175;
            case 2162: return 2165;
        }
        return 60;
    }
    static k(a) {
        switch (a) {
            case 220: return null;
            case 34: return new Record1904();
            case 445: return new ACTIVEXMARKERRecord();
            case 135: break;
            case 194: break;
            case 545: return new ARRAYRecord();
            case 158: return new AUTOFILTERRecord();
            case 2174: return new AUTOFILTER12Record();
            case 157: return new AUTOFILTERINFORecord();
            case 64: return new BACKUPRecord();
            case 513: return new BLANKRecord();
            case 233: return new BITMAPRecord();
            case 2057: return new BOFRecord();
            case 218: return new BOOKBOOLRecord();
            case 2147: return new BOOKEXTRecord();
            case 517: return new BOOLERRRecord();
            case 41: return new BOTTOMMARGINRecord();
            case 133: return new BOUNDSHEETRecord();
            case 12: return new CALCCOUNTRecord();
            case 13: return new CALCMODERecord();
            case 2156: break;
            case 433: return new CFRecord();
            case 2170: return new CF12Record();
            case 2171: return new CFEXRecord();
            case 66: return new CODEPAGERecord();
            case 125: return new COLINFORecord();
            case 432: return new CONDFMTRecord();
            case 2169: return new CONDFMT12Record();
            case 60: break;
            case 2066: break;
            case 2165: break;
            case 2175: break;
            case 169: break;
            case 140: return new COUNTRYRecord();
            case 2149: break;
            case 90: return new CRNRecord();
            case 2251: break;
            case 2154: break;
            case 2155: break;
            case 215: return new DBCELLRecord();
            case 2051: break;
            case 80: break;
            case 437: break;
            case 82: break;
            case 81: break;
            case 549: return new DEFAULTROWHEIGHTRecord();
            case 85: return new DEFCOLWIDTHRecord();
            case 195: break;
            case 16: return new DELTARecord();
            case 512: return new DIMENSIONSRecord();
            case 184: break;
            case 2164: break;
            case 353: return new DSFRecord();
            case 446: return new DVRecord();
            case 434: return new DVALRecord();
            case 2189: return new DXFRecord();
            case 136: break;
            case 69: break;
            case 10: return new EOFRecord();
            case 448: return new EXCEL9FILERecord();
            case 22: break;
            case 35: return new EXTERNNAMERecord();
            case 23: return new EXTERNSHEETRecord();
            case 255: return new EXTSSTRecord();
            case 2052: break;
            case 2152: return new FEATRecord();
            case 2162: return new FEAT11Record();
            case 2168: return new FEAT12Record();
            case 2151: return new FEATHEADRRecord();
            case 2161: return new FEATHEADR11Record();
            case 47: return new FILEPASSRecord();
            case 91: return new FILESHARINGRecord();
            case 293: break;
            case 155: return new FILTERMODERecord();
            case 2246: break;
            case 2247: break;
            case 156: return new FNGROUPCOUNTRecord();
            case 154: break;
            case 49: return new FONTRecord();
            case 21: return new FOOTERRecord();
            case 1054: return new FORMATRecord();
            case 6: return new FORMULARecord();
            case 171: break;
            case 130: return new GRIDSETRecord();
            case 128: return new GUTSRecord();
            case 131: return new HCENTERRecord();
            case 20: return new HEADERRecord();
            case 2204: return new HEADERFOOTERRecord();
            case 2150: return new HFPICTURERecord();
            case 141: return new HIDEOBJRecord();
            case 440: return new HLINKRecord();
            case 2048: return new HLINKTOOLTIPRecord();
            case 27: return new HORIZONTALPAGEBREAKSRecord();
            case 127: break;
            case 523: return new INDEXRecord();
            case 226: return new INTERFACEENDRecord();
            case 225: return new INTERFACEHDRRecord();
            case 17: return new ITERATIONRecord();
            case 516: return new LABELRecord();
            case 351: break;
            case 253: return new LABELSSTRecord();
            case 38: return new LEFTMARGINRecord();
            case 149: break;
            case 148: break;
            case 2167: return new LIST12Record();
            case 2245: break;
            case 2244: break;
            case 2243: break;
            case 2242: break;
            case 2241: break;
            case 2249: break;
            case 152: break;
            case 229: return new MERGEDCELLSRecord();
            case 2250: break;
            case 193: return new MMSRecord();
            case 236: return new MSODRAWINGRecord();
            case 235: return new MSODRAWINGGROUPRecord();
            case 237: return new MSODRAWINGSELECTIONRecord();
            case 190: return new MULBLANKRecord();
            case 189: return new MULRKRecord();
            case 24: return new NAMERecord();
            case 2196: return new NAMEEXTRecord();
            case 28: return new NOTERecord();
            case 515: return new NUMBERRecord();
            case 93: return new OBJRecord();
            case 99: return new OBJPROTECTRecord();
            case 211: return new OBPROJRecord();
            case 2058: break;
            case 222: return new OLESIZERecord();
            case 2187: return new PAGELAYOUTINFORecord();
            case 146: return new PALETTERecord();
            case 65: return new PANERecord();
            case 19: return new PASSWORDRecord();
            case 77: return new PLSRecord();
            case 2248: break;
            case 14: return new PRECISIONRecord();
            case 43: return new PRINTGRIDLINESRecord();
            case 42: return new PRINTHEADERSRecord();
            case 18: return new PROTECTRecord();
            case 431: return new PROT4REVRecord();
            case 444: return new PROT4REVPASSRecord();
            case 137: break;
            case 429: break;
            case 2055: break;
            case 2054: break;
            case 2050: break;
            case 2067: break;
            case 449: return new RECALCIDRecord();
            case 185: break;
            case 15: return new REFMODERecord();
            case 439: return new REFRESHALLRecord();
            case 39: return new RIGHTMARGINRecord();
            case 638: return new RKRecord();
            case 520: return new ROWRecord();
            case 95: return new SAVERECALCRecord();
            case 175: break;
            case 174: break;
            case 221: return new SCENPROTECTRecord();
            case 160: return new SCLRecord();
            case 29: return new SELECTIONRecord();
            case 161: return new SETUPRecord();
            case 2146: return new SHEETEXTRecord();
            case 1212: return new SHRFMLARecord();
            case 144: break;
            case 2197: return new SORTDATA12Record();
            case 150: break;
            case 252: return new SSTRecord();
            case 153: return new STANDARDWIDTHRecord();
            case 519: return new STRINGRecord();
            case 659: return new STYLERecord();
            case 2194: return new STYLEEXTRecord();
            case 145: break;
            case 430: return new SUPBOOKRecord();
            case 2148: break;
            case 198: break;
            case 290: break;
            case 197: break;
            case 244: break;
            case 241: break;
            case 443: break;
            case 242: break;
            case 249: break;
            case 251: break;
            case 259: break;
            case 213: break;
            case 245: break;
            case 180: break;
            case 181: break;
            case 246: break;
            case 248: break;
            case 182: break;
            case 2062: break;
            case 240: break;
            case 247: break;
            case 205: break;
            case 208: break;
            case 210: break;
            case 209: break;
            case 2061: break;
            case 177: break;
            case 256: break;
            case 2063: break;
            case 178: break;
            case 176: break;
            case 2060: break;
            case 2064: break;
            case 227: break;
            case 317: return new TABIDRecord();
            case 234: break;
            case 566: return new TABLERecord();
            case 2191: return new TABLESTYLERecord();
            case 2192: return new TABLESTYLEELEMENTRecord();
            case 2190: return new TABLESTYLESRecord();
            case 96: return new TEMPLATERecord();
            case 2198: return new THEMERecord();
            case 40: return new TOPMARGINRecord();
            case 438: return new TXORecord();
            case 2053: break;
            case 223: break;
            case 94: break;
            case 425: return new USERBVIEWRecord();
            case 426: return new USERSVIEWBEGINRecord();
            case 427: return new USERSVIEWENDRecord();
            case 352: return new USESELFSRecord();
            case 442: return new VBAOBJECTNAMERecord();
            case 132: return new VCENTERRecord();
            case 26: return new VERTICALPAGEBREAKSRecord();
            case 2049: break;
            case 61: return new WINDOW1Record();
            case 574: return new WINDOW2Record();
            case 25: return new WINDOWPROTECTRecord();
            case 2059: break;
            case 92: return new WRITEACCESSRecord();
            case 134: return new WRITEPROTRecord();
            case 129: return new WSBOOLRecord();
            case 89: return new XCTRecord();
            case 224: return new XFRecord();
            case 2172: return new XFCRCRecord();
            case 2173: return new XFEXTRecord();
            case 354: break;
            case 214: return new RSTRINGRecord();
        }
        return null;
    }
    get_n() {
        return true;
    }
    get n() {
        return this.get_n();
    }
}
Biff8RecordBase.$t = markType(Biff8RecordBase, 'Biff8RecordBase', BiffRecordBase$3.$.specialize(BIFF8RecordType_$type, WorkbookLoadManagerExcel2003.$, WorkbookSaveManagerExcel2003.$));
Biff8RecordBase.l = null;
/**
 * @hidden
 */
export class Record1904 extends Biff8RecordBase {
    h(a) {
        a._b.dateSystem = a._av._readUInt16();
    }
    i(a) {
        a._ci._write17(a._b.dateSystem);
    }
    get_d() {
        return 34;
    }
    get d() {
        return this.get_d();
    }
}
Record1904.$t = markType(Record1904, 'Record1904', Biff8RecordBase.$);
/**
 * @hidden
 */
export class ACTIVEXMARKERRecord extends Biff8RecordBase {
    h(a) {
    }
    i(a) {
        a._b._co = true;
    }
    get_d() {
        return 445;
    }
    get d() {
        return this.get_d();
    }
}
ACTIVEXMARKERRecord.$t = markType(ACTIVEXMARKERRecord, 'ACTIVEXMARKERRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class ARRAYRecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = new Array(0);
        let d = 0;
        let e = ((() => { let f = a._av._readUInt16FromBuffer(c, d); c = f.p0; d = f.p1; return f.ret; })());
        let f = ((() => { let g = a._av._readUInt16FromBuffer(c, d); c = g.p0; d = g.p1; return g.ret; })());
        let g = ((() => { let h = a._av.readByteFromBuffer(c, d); c = h.p0; d = h.p1; return h.ret; })());
        let h = ((() => { let i = a._av.readByteFromBuffer(c, d); c = i.p0; d = i.p1; return i.ret; })());
        let i = ((() => { let j = a._av._readUInt16FromBuffer(c, d); c = j.p0; d = j.p1; return j.ret; })());
        let j = (i & 1) == 1;
        let k = (i & 2) == 2;
        let l = a._av._readUInt32FromBuffer(c, d);
        c = l.p0;
        d = l.p1;
        let m = ((() => { let n = a._as(c, d); c = n.p0; d = n.p1; return n.ret; })());
        m._an = k;
        m._applyTo3(b._cx(e, g, f, h));
        let n = new List$1(KeyValuePair$2.$.specialize(WorksheetCellAddress.$, ExcelCalcValue.$), 1, a._bk);
        for (let o of fromEnum(n)) {
            let p = o.key;
            let q = o.value;
            let r = p.o;
            let s = p.m;
            if (e <= r && r <= f && g <= s && s <= h) {
                a._bk.removeItem(p);
                b._rows$i.item(r)._d0(s, q);
            }
        }
    }
    i(a) {
        let b = a._cj;
        let c = typeCast(ArrayInteriorFormula.$, b.c);
        if (c == null) {
            return;
        }
        let d = c._cz;
        a._ci._write17(d.cellRange.firstRow);
        a._ci._write17(d.cellRange.lastRow);
        a._ci._write9(d.cellRange.firstColumn);
        a._ci._write9(d.cellRange.lastColumn);
        let e = 0;
        if (d._ax) {
            e |= 1;
        }
        if (b.b._as(a._ch.r)._be()) {
            e |= 2;
        }
        a._ci._write17(e);
        a._ci._write18(intSToU(0));
        a._c2(d, true, false);
    }
    get_d() {
        return 545;
    }
    get d() {
        return this.get_d();
    }
}
ARRAYRecord.$t = markType(ARRAYRecord, 'ARRAYRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class AUTOFILTERRecordBase extends Biff8RecordBase {
}
AUTOFILTERRecordBase.$t = markType(AUTOFILTERRecordBase, 'AUTOFILTERRecordBase', Biff8RecordBase.$);
/**
 * @hidden
 */
export class AUTOFILTER12Record extends AUTOFILTERRecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = a._av._readFrtRefHeader(b);
        let d = a._av._readUInt16();
        let e = a._av._readUInt32();
        let f = a._av._readUInt32();
        let g = a._av._readUInt32();
        let h = a._av._readUInt32();
        let i = a._av._readUInt32();
        let j = a._av._readUInt16();
        let k = ExcelUtils.bt(j, 3);
        let l = a._av._readUInt32();
        let m = a._av._readUInt32();
        let n = null;
        let o;
        if (m == 4294967295) {
            if (b.filterSettings.region == null) {
                b.filterSettings._bm(c);
            }
            else {
            }
            o = new WorksheetColumnFilter(1, b, d);
        }
        else {
            let p = b._tables$i._g(m);
            if (p == null) {
                return;
            }
            if (p._columns$i.count <= d) {
                return;
            }
            n = p._columns$i._item(d);
            o = n;
        }
        let q = a._av._readBytes(16);
        let r = null;
        let s = Nullable$1.toNullable(Number_$type, null);
        let t = Nullable$1.toNullable(Number_$type, null);
        switch (g) {
            case 0: break;
            case 1:
            case 2:
                {
                    let u = null;
                    if (h >= 1) {
                        u = a._av._readAF12Criteria(b);
                    }
                    let v;
                    if (g == 1) {
                        v = 4;
                    }
                    else {
                        v = 1;
                    }
                    if (u != null && u.c == 4 && u.a == v) {
                        s = Nullable$1.toNullable(Number_$type, u.l);
                    }
                    else {
                    }
                }
                break;
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
                {
                    let w = null;
                    let x = null;
                    if (h >= 1) {
                        w = a._av._readAF12Criteria(b);
                        if (h >= 2) {
                            x = a._av._readAF12Criteria(b);
                        }
                    }
                    if (w != null && w.c == 4 && w.a == 6) {
                        s = Nullable$1.toNullable(Number_$type, w.l);
                    }
                    else {
                    }
                    if (x != null && x.c == 4 && x.a == 1) {
                        t = Nullable$1.toNullable(Number_$type, x.l);
                    }
                    else {
                    }
                }
                break;
            case 24:
            case 25:
            case 26:
            case 27:
            case 28:
            case 29:
            case 30:
            case 31:
            case 32:
            case 33:
            case 34:
            case 35:
            case 36:
            case 37:
            case 38:
            case 39:
                {
                    if (h >= 1) {
                        let y = a._av._readAF12Criteria(b);
                        if (h >= 2) {
                            let z = a._av._readAF12Criteria(b);
                        }
                    }
                }
                break;
            default: break;
        }
        r = DynamicValuesFilter._l(a, o, g, s, t);
        if (r == null) {
            switch (f) {
                case 0:
                    {
                        let aa = null;
                        if (h != 0) {
                            if (aa == null) {
                                aa = new FixedValuesFilter(o);
                            }
                            for (let ab = 0; ab < h; ab++) {
                                let ac = a._av._readAF12Criteria(b);
                                if (ac.c == 12) {
                                    aa.includeBlanks = true;
                                }
                                else if (ac.k != null) {
                                    aa._displayValues$i.add(ac.k.toString());
                                }
                                else {
                                }
                            }
                        }
                        if (i != 0) {
                            if (aa == null) {
                                aa = new FixedValuesFilter(o);
                            }
                            for (let ad = 0; ad < i; ad++) {
                                let ae = a._av._readAF12DateInfo(b);
                                if (ae != null) {
                                    aa._dateGroups$i.add(ae);
                                }
                            }
                        }
                        r = aa;
                    }
                    break;
                case 1:
                    {
                        let af = a._av._readDXFN12NoCB();
                        r = FillFilter._p(n, af);
                    }
                    break;
                case 2:
                    {
                        let ag = a._av._readDXFN12NoCB();
                        r = FontColorFilter._n(n, ag);
                    }
                    break;
                case 3:
                    {
                        let ah;
                        let ai;
                        let aj = a._av._readAF12CellIcon(ah, ai);
                        ah = aj.p0;
                        ai = aj.p1;
                        if (ah.hasValue) {
                            r = new IconFilter(n, ah.value, Nullable$1.toNullable(Number_$type, ai));
                        }
                    }
                    break;
                default: break;
            }
        }
        if (r == null) {
            return;
        }
        if (n != null) {
            n.filter = r;
        }
        else {
            let ak = typeCast(WorksheetColumnFilter.$, o);
            ak._g(r);
            b.filterSettings._a3(ak);
        }
    }
    i(a) {
        let b = a._b7.a(TableColumnFilterData.$);
        if (b == null) {
            return;
        }
        let c = a._b7.a(Worksheet.$);
        if (c == null) {
            return;
        }
        let d = b.a;
        let e = b.c != null ? b.c.table._bq : c.filterSettings.region;
        let f = 0;
        let g = typeCast(IColorFilter_$type, d);
        if (g != null) {
            if (g.isCellColorFilter) {
                f = 1;
            }
            else {
                f = 2;
            }
        }
        let h = typeCast(IconFilter.$, d);
        if (h != null) {
            f = 3;
        }
        let i = 0;
        let j = new List$1(Biff8RecordStream_AFDOper.$, 0);
        let k;
        let l = typeCast(FixedValuesFilter.$, d);
        if (l != null) {
            if (b.f != null) {
                for (let m = 0; m < b.f.count; m++) {
                    j.add(new Biff8RecordStream_AFDOper(1, b.f.item(m)));
                }
            }
            if (l.includeBlanks) {
                let n = new Biff8RecordStream_AFDOper(0);
                n.c = 12;
                j.add(n);
            }
            k = l._dateGroups$i;
        }
        else {
            k = boxArray$1(new Array(0));
            let o = typeCast(DynamicValuesFilter.$, d);
            if (o != null) {
                i = intSToU(o._n);
                let p = typeCast(AverageFilter.$, d);
                let q = typeCast(DatePeriodFilter.$, d);
                let r = typeCast(DateRangeFilter.$, d);
                if (p != null) {
                    let s = p.type == 0 ? 4 : 1;
                    j.add(new Biff8RecordStream_AFDOper(2, p.average, s));
                }
                else if (q != null) {
                    j.add(new Biff8RecordStream_AFDOper(2, 6.50121220736663E-319, 6));
                    j.add(new Biff8RecordStream_AFDOper(2, 1.66431042389899E-316, 1));
                }
                else if (r != null) {
                    let t = ExcelCalcValue._dateTimeToExcelDate(a._b, r.start);
                    let u = ExcelCalcValue._dateTimeToExcelDate(a._b, r.end);
                    if (t.hasValue && u.hasValue) {
                        j.add(new Biff8RecordStream_AFDOper(2, t.value, 6));
                        j.add(new Biff8RecordStream_AFDOper(2, u.value, 1));
                    }
                    else {
                    }
                }
            }
        }
        let v = b.c == null;
        let w = 4294967295;
        if (v == false) {
            w = b.c.table._ds;
        }
        a._ci._writeFrtRefHeader(e);
        a._ci._write17(v ? b.b.index : b.c.index);
        a._ci._write18(intSToU(0));
        a._ci._write18(f);
        a._ci._write18(i);
        a._ci._write18(intSToU(j.count));
        a._ci._write18(intSToU(k.count));
        let x = 0;
        let y = ExcelUtils.f7(x, v, 3);
        x = y.p0;
        a._ci._write17(x);
        a._ci._write18(intSToU(0));
        a._ci._write18(w);
        a._ci._write2(new Array(16));
        switch (f) {
            case 0:
                {
                    for (let z = 0; z < j.count; z++) {
                        a._ci._capCurrentBlock();
                        a._ci._writeAF12Criteria(e, j._inner[z]);
                    }
                    for (let aa = 0; aa < k.count; aa++) {
                        a._ci._capCurrentBlock();
                        a._ci._writeAF12DateInfo(e, k.item(aa));
                    }
                }
                break;
            case 1:
            case 2:
                {
                    let ab = a._y(g);
                    a._ci._writeDXFN12NoCB(ab);
                }
                break;
            case 3:
                a._ci._writeAF12CellIcon(h._m, h._p.getValueOrDefault());
                break;
            default: break;
        }
    }
    get_d() {
        return 2174;
    }
    get d() {
        return this.get_d();
    }
}
AUTOFILTER12Record.$t = markType(AUTOFILTER12Record, 'AUTOFILTER12Record', AUTOFILTERRecordBase.$);
/**
 * @hidden
 */
export class AUTOFILTERRecord extends AUTOFILTERRecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        if (b.filterSettings.region == null) {
            return;
        }
        let c = new WorksheetColumnFilter(0, b);
        let d = a._av._readAutoFilter(b, c);
        if (d != null) {
            c._g(d);
            b.filterSettings._a3(c);
        }
    }
    i(a) {
        let b = a._b7.a(TableColumnFilterData.$);
        if (b == null) {
            return;
        }
        a._ci._writeAutoFilter(b);
    }
    get_d() {
        return 158;
    }
    get d() {
        return this.get_d();
    }
}
AUTOFILTERRecord.$t = markType(AUTOFILTERRecord, 'AUTOFILTERRecord', AUTOFILTERRecordBase.$);
/**
 * @hidden
 */
export class AUTOFILTERINFORecord extends Biff8RecordBase {
    h(a) {
        let b = a._av._readUInt16();
    }
    i(a) {
        let b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        if (b.filterSettings.region == null) {
            return;
        }
        a._ci._write17(b.filterSettings.region._ad);
    }
    get_d() {
        return 157;
    }
    get d() {
        return this.get_d();
    }
}
AUTOFILTERINFORecord.$t = markType(AUTOFILTERINFORecord, 'AUTOFILTERINFORecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class BACKUPRecord extends Biff8RecordBase {
    h(a) {
        let b = a._av._readUInt16() == 1;
    }
    i(a) {
        a._ci._write17(0);
    }
    get_d() {
        return 64;
    }
    get d() {
        return this.get_d();
    }
}
BACKUPRecord.$t = markType(BACKUPRecord, 'BACKUPRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class BITMAPRecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = a._av._readUInt16();
        let d = a._av._readUInt16();
        let e = a._av._readUInt32();
        let f = a._av._readUInt16();
        let g = a._av._readUInt16();
        let h = a._av._readUInt16();
        let i = a._av._readUInt16();
        let j = ExcelUtils.dj(h * 3, 4);
        let k = j * i;
        let l = a._av._readUInt16();
        let m = a._av._readUInt16();
        let n = a._av._readBytes(k);
        b._je = ExcelUtils.g3(n, h, i);
    }
    i(a) {
        let b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = b._je;
        if (c == null) {
            return;
        }
        let d;
        let e;
        let f = ((() => { let g = ExcelUtils.b(c, d, e); d = g.p1; e = g.p2; return g.ret; })());
        a._ci._write17(9);
        a._ci._write17(1);
        a._ci._write18(intSToU((f.length + 12)));
        a._ci._write17(12);
        a._ci._write17(0);
        a._ci._write17(d);
        a._ci._write17(e);
        a._ci._write17(1);
        a._ci._write17(24);
        a._ci._write2(f);
    }
    get_d() {
        return 233;
    }
    get d() {
        return this.get_d();
    }
}
BITMAPRecord.$t = markType(BITMAPRecord, 'BITMAPRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class CellValueRecordBase extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = new Array(0);
        let d = 0;
        let e = ((() => { let f = a._av._readUInt16FromBuffer(c, d); c = f.p0; d = f.p1; return f.ret; })());
        let f = ((() => { let g = a._av._readInt16FromBuffer(c, d); c = g.p0; d = g.p1; return g.ret; })());
        let g = a._a6(b, e);
        let h = ((() => { let i = a._av._readUInt16FromBuffer(c, d); c = i.p0; d = i.p1; return i.ret; })());
        let i;
        if (h < a._b2.count) {
            i = a._b2._inner[h];
        }
        else {
            i = a._b._ca._p;
        }
        {
            g._d3(f, i);
        }
        let j;
        let k;
        let l = this.o(a, c, d, j, k);
        c = l.p1;
        d = l.p2;
        j = l.p3;
        k = l.p4;
        let m = typeCast(Formula.$, j);
        if (m != null) {
            if (m._aq == false) {
                m._bp(g, f);
                g._d0(f, CalcUtilities.c(k));
            }
            else {
                let n = typeCast(ExpToken.$, m._e[0]);
                if (n != null) {
                    let o = n.p.r;
                    let p = n.p.t;
                    let q = new WorksheetCellAddress(1, p, o);
                    let r;
                    if (((() => { let s = a._bl.tryGetValue(q, r); r = s.p1; return s.ret; })())) {
                        r._bp(g, f);
                        g._d0(f, CalcUtilities.c(k));
                    }
                    else if (p == g.index && o == f) {
                        a._bk.item(q, CalcUtilities.c(k));
                    }
                }
            }
        }
        else {
            g._d6(f, j);
        }
    }
    i(a) {
        let b = a._cj;
        let c = a._ch;
        let d = new MemoryStream(1, 32);
        d.write(BitConverter.h(b.b.index), 0, 2);
        d.write(BitConverter.d(c.r), 0, 2);
        let e = a._a6(c.j);
        if (e < 0) {
            e = 0;
        }
        d.write(BitConverter.h(e), 0, 2);
        this.p(a, d);
    }
}
CellValueRecordBase.$t = markType(CellValueRecordBase, 'CellValueRecordBase', Biff8RecordBase.$);
/**
 * @hidden
 */
export class BLANKRecord extends CellValueRecordBase {
    o(a, b, c, d, e) {
        d = e = null;
        return {
            p1: b,
            p2: c,
            p3: d,
            p4: e
        };
    }
    p(a, b) {
        a._ci._write13(b);
    }
    get_d() {
        return 513;
    }
    get d() {
        return this.get_d();
    }
}
BLANKRecord.$t = markType(BLANKRecord, 'BLANKRecord', CellValueRecordBase.$);
/**
 * @hidden
 */
export class BOFRecord extends Biff8RecordBase {
    h(a) {
        let b = a._av._readUInt16();
        let c = null;
        switch (b) {
            case 0:
            case 7:
            case 512:
                c = "BIFF2";
                break;
            case 768:
                c = "BIFF3";
                break;
            case 1024:
                c = "BIFF4";
                break;
            case 1280:
                c = "BIFF5/BIFF7";
                break;
            case 1536: break;
            default: throw new InvalidOperationException(1, ExcelUtils.ef("LE_InvalidOperationException_UnknownBIFFFormat"));
        }
        if (c != null) {
            throw new InvalidOperationException(1, ExcelUtils.eg("LE_InvalidOperationException_UnsupportedBIFFFormat", c));
        }
        let d = a._av._readUInt16();
        a._av._readUInt16();
        a._av._readUInt16();
        switch (d) {
            case 5:
                {
                    a._ai.k(a._b);
                }
                break;
            case 16:
                {
                    let e = a._b._worksheets$i._item(a._b6);
                    a._ai.k(e.displayOptions);
                    a._ai.k(e.printOptions);
                    a._ai.k(e);
                }
                break;
            default:
                {
                    a._av.position = a._av.length;
                    while (true) {
                        {
                            let f = new Biff8RecordStream(1, a);
                            try {
                                f.position = f.length;
                                if (f._recordType == 10 || a._ca.position == a._ca.length) {
                                    break;
                                }
                            }
                            finally {
                                if (f != null) {
                                    f.dispose();
                                }
                            }
                        }
                    }
                    a._b6++;
                }
                break;
        }
        if (a._av.position == a._av.length) {
            return;
        }
        a._av._readUInt32();
        a._av._readUInt32();
    }
    i(a) {
        a._ci._write17(1536);
        let b = a._b7.f;
        let c = typeCast(Worksheet.$, b);
        if (c != null) {
            a._ci._write17(16);
        }
        else {
            a._ci._write17(5);
        }
        a._ci._write17(3515);
        a._ci._write17(1996);
        a._ci._write18(intSToU(0));
        a._ci._write18(1536);
    }
    get_n() {
        return false;
    }
    get_d() {
        return 2057;
    }
    get d() {
        return this.get_d();
    }
}
BOFRecord.$t = markType(BOFRecord, 'BOFRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class BOOKBOOLRecord extends Biff8RecordBase {
    h(a) {
        let b = a._av._readUInt16();
        let c = (b & 1) == 1;
        a._b.saveExternalLinkedValues = (c == false);
    }
    i(a) {
        let b = 0;
        if (a._b.saveExternalLinkedValues == false) {
            b |= 1;
        }
        a._ci._write17(b);
    }
    get_d() {
        return 218;
    }
    get d() {
        return this.get_d();
    }
}
BOOKBOOLRecord.$t = markType(BOOKBOOLRecord, 'BOOKBOOLRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class BOOKEXTRecord extends Biff8RecordBase {
    h(a) {
    }
    i(a) {
    }
    get_d() {
        return 2147;
    }
    get d() {
        return this.get_d();
    }
}
BOOKEXTRecord.$t = markType(BOOKEXTRecord, 'BOOKEXTRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class BOOLERRRecord extends CellValueRecordBase {
    o(a, b, c, d, e) {
        let f = ((() => { let g = a._av.readByteFromBuffer(b, c); b = g.p0; c = g.p1; return g.ret; })());
        let g = ((() => { let h = a._av.readByteFromBuffer(b, c); b = h.p0; c = h.p1; return h.ret; })()) == 1;
        if (g) {
            d = ErrorValue._j(f);
        }
        else {
            d = Convert.toBoolean1(f);
        }
        e = d;
        return {
            p1: b,
            p2: c,
            p3: d,
            p4: e
        };
    }
    p(a, b) {
        let c = a._cj.c;
        let d = typeCast(ErrorValue.$, c);
        if (d != null) {
            b.writeByte(d._y);
            b.writeByte(1);
        }
        else if (typeCast(Boolean_$type, c) !== null) {
            b.writeByte(Convert.toByte(c));
            b.writeByte(0);
        }
        else {
        }
        a._ci._write13(b);
    }
    get_d() {
        return 517;
    }
    get d() {
        return this.get_d();
    }
}
BOOLERRRecord.$t = markType(BOOLERRRecord, 'BOOLERRRecord', CellValueRecordBase.$);
/**
 * @hidden
 */
export class BOTTOMMARGINRecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        b.bottomMargin = a._av._readDouble();
    }
    i(a) {
        let b = a._b7.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        a._ci._write10(b.bottomMargin);
    }
    get_d() {
        return 41;
    }
    get d() {
        return this.get_d();
    }
}
BOTTOMMARGINRecord.$t = markType(BOTTOMMARGINRecord, 'BOTTOMMARGINRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class BOUNDSHEETRecord extends Biff8RecordBase {
    h(a) {
        a._av._readUInt32();
        let b = a._av.readByte();
        let c = a._av.readByte();
        let d = a._av._readFormattedString(0);
        {
            let e;
            if (((() => { let f = a._bm.tryGetValue(a._b._sheets$i.count, e); e = f.p1; return f.ret; })()) == false) {
                e = a._b._g2();
            }
            let f = c == 2 ? 1 : 0;
            let g = a._b._sheets$i._add2(d._y, e, f);
            let h = g.type == 0 ? g : null;
            if (h != null) {
                h._ek = false;
                h._br = c;
            }
            g._e.visibility = b;
            if (h != null) {
                h._em = true;
                a._ct(h);
            }
        }
    }
    i(a) {
        let b = a._b7.a(Sheet.$);
        if (b == null) {
            return;
        }
        let c;
        switch (b.type) {
            case 0:
                c = 0;
                break;
            case 1:
                c = 2;
                break;
            default: return;
        }
        a._ci._write18(intSToU(0));
        a._ci._write9(b._e.visibility);
        a._ci._write9(c);
        a._ci._write15(b.name, 0);
    }
    get_d() {
        return 133;
    }
    get d() {
        return this.get_d();
    }
}
BOUNDSHEETRecord.$t = markType(BOUNDSHEETRecord, 'BOUNDSHEETRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class CALCCOUNTRecord extends Biff8RecordBase {
    h(a) {
        a._b.maxRecursionIterations = a._av._readUInt16();
    }
    i(a) {
        a._ci._write17(a._b.maxRecursionIterations);
    }
    get_d() {
        return 12;
    }
    get d() {
        return this.get_d();
    }
}
CALCCOUNTRecord.$t = markType(CALCCOUNTRecord, 'CALCCOUNTRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class CALCMODERecord extends Biff8RecordBase {
    h(a) {
        let b = a._av._readUInt16();
        a._b.calculationMode = b;
        if (EnumUtil.isDefined(CalculationMode_$type, enumGetBox(CalculationMode_$type, a._b.calculationMode)) == false) {
            a._b.calculationMode = 2;
        }
    }
    i(a) {
        a._ci._write17(a._b.calculationMode);
    }
    get_d() {
        return 13;
    }
    get d() {
        return this.get_d();
    }
}
CALCMODERecord.$t = markType(CALCMODERecord, 'CALCMODERecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class CF12Record extends Biff8RecordBase {
    h(a) {
        let b = CFUtils.a(a);
        if (b == null) {
            return;
        }
        let c = a._ax(b);
        let d = c.b;
        if (d == null || d.h == false) {
            if (c.a != null && c.a.b != null) {
                d = c.a.b;
            }
            else {
                return;
            }
        }
        let e = a._av._readCf12(a, b);
        d.i.add(e);
    }
    i(a) {
        let b = a._b7.a(Worksheet.$);
        let c = a._b7.a(CONDFMTSerializer.$);
        let d = a._b7.a(ConditionBase.$);
        a._ci._writeCf12(c, d, b, a);
    }
    get_d() {
        return 2170;
    }
    get d() {
        return this.get_d();
    }
}
CF12Record.$t = markType(CF12Record, 'CF12Record', Biff8RecordBase.$);
/**
 * @hidden
 */
export class CFEXRecord extends Biff8RecordBase {
    h(a) {
        let b = CFUtils.a(a);
        if (b == null) {
            return;
        }
        let c = a._ax(b);
        let d = a._av._readCfEx(a, b);
        if (d == null || d.f != 2171) {
            return;
        }
        let e = d.a != null ? d.b.i.item(d.a.e) : null;
        if (e != null) {
            e.e = d.a.a;
            if (e.l == null) {
                e.l = d.a.c;
            }
            if (e.n == null) {
                e.n = d.a.d;
            }
        }
        else {
            c.a = d;
        }
    }
    i(a) {
    }
    get_d() {
        return 2171;
    }
    get d() {
        return this.get_d();
    }
}
CFEXRecord.$t = markType(CFEXRecord, 'CFEXRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class CFRecord extends Biff8RecordBase {
    h(a) {
        let b = CFUtils.a(a);
        if (b == null) {
            return;
        }
        let c = a._ax(b);
        let d = c.b;
        if (d == null) {
            return;
        }
        let e = a._av._readCf(a, b);
        d.i.add(e);
    }
    i(a) {
    }
    get_d() {
        return 433;
    }
    get d() {
        return this.get_d();
    }
}
CFRecord.$t = markType(CFRecord, 'CFRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class CODEPAGERecord extends Biff8RecordBase {
    h(a) {
        let b = a._av._readUInt16();
    }
    i(a) {
        a._ci._write17(ExcelUtils.c2(Encoding.unicode));
    }
    get_d() {
        return 66;
    }
    get d() {
        return this.get_d();
    }
}
CODEPAGERecord.$t = markType(CODEPAGERecord, 'CODEPAGERecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class COLINFORecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = a._av._readUInt16();
        let d = a._av._readUInt16();
        let e = a._av._readUInt16();
        let f = a._av._readUInt16();
        if (f < 0) {
            f = 0;
        }
        let g = a._av._readUInt16();
        let h = (g & 1) == 1;
        let i = (g & 1792) >> 8;
        let j = (g & 4096) == 4096;
        let k = a._b2._inner[f];
        if (d == 256) {
            b._b2 = k._bu();
        }
        if (c != 256) {
            d = Math.min(255, d);
            b._hw(c, d, e, h, i, k);
        }
        a._av.seek(2, 1);
    }
    i(a) {
        let b = a._b7.a(WorksheetColumnBlock.$);
        if (b == null) {
            return;
        }
        let c = a._b7.a(Worksheet.$);
        if (c == null) {
            return;
        }
        a._ci._write17(b.q);
        let d = b.r;
        if (d == 255) {
            d = 256;
        }
        a._ci._write17(d);
        if (b.v < 0) {
            a._ci._write17(c.defaultColumnWidth);
        }
        else {
            a._ci._write17(b.v);
        }
        a._ci._write17(a._a6(b.b));
        let e = 2;
        if (b.i) {
            e |= 1;
        }
        e |= (b.m << 8);
        if (a._ad(b)) {
            e |= 4096;
        }
        a._ci._write17(e);
        a._ci._write17(0);
    }
    get_d() {
        return 125;
    }
    get d() {
        return this.get_d();
    }
}
COLINFORecord.$t = markType(COLINFORecord, 'COLINFORecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class CONDFMT12Record extends Biff8RecordBase {
    h(a) {
        let b = CFUtils.a(a);
        if (b == null) {
            return;
        }
        let c = a._ax(b);
        let d = a._av._readCondFmt12(b);
        c.h(d);
    }
    i(a) {
        let b = a._b7.a(Worksheet.$);
        let c = a._b7.a(CONDFMTSerializer.$);
        if (c == null) {
            return;
        }
        a._ci._writeCondFmt12(c, b);
    }
    get_d() {
        return 2169;
    }
    get d() {
        return this.get_d();
    }
}
CONDFMT12Record.$t = markType(CONDFMT12Record, 'CONDFMT12Record', Biff8RecordBase.$);
/**
 * @hidden
 */
export class CONDFMTRecord extends Biff8RecordBase {
    h(a) {
        let b = CFUtils.a(a);
        if (b == null) {
            return;
        }
        let c = a._ax(b);
        let d = a._av._readCondFmt(b);
        c.h(d);
    }
    i(a) {
    }
    get_d() {
        return 432;
    }
    get d() {
        return this.get_d();
    }
}
CONDFMTRecord.$t = markType(CONDFMTRecord, 'CONDFMTRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class COUNTRYRecord extends Biff8RecordBase {
    h(a) {
        a._av._readUInt16();
        a._av._readUInt16();
    }
    i(a) {
        a._ci._write17(1);
        a._ci._write17(1);
    }
    get_d() {
        return 140;
    }
    get d() {
        return this.get_d();
    }
}
COUNTRYRecord.$t = markType(COUNTRYRecord, 'COUNTRYRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class CRNRecord extends Biff8RecordBase {
    h(a) {
        let b = typeCast(WorksheetReferenceExternal.$, a._a3);
        if (b == null) {
            return;
        }
        let c = a._av.readByte();
        let d = a._av.readByte();
        let e = a._av._readUInt16();
        for (let f = d; f <= c; f++) {
            let g = a._av.readByte();
            let h;
            switch (g) {
                case 1:
                    h = a._av._readDouble();
                    break;
                case 2:
                    h = a._av._readFormattedString(1);
                    break;
                case 4:
                    h = a._av._readUInt16() != 0;
                    a._av.seek(6, 1);
                    break;
                case 16:
                    h = ErrorValue._j(a._av._readUInt16());
                    a._av.seek(6, 1);
                    break;
                default:
                    h = null;
                    return;
            }
            b.aa(e, f, h);
        }
    }
    i(a) {
    }
    get_d() {
        return 90;
    }
    get d() {
        return this.get_d();
    }
}
CRNRecord.$t = markType(CRNRecord, 'CRNRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class DBCELLRecord extends Biff8RecordBase {
    h(a) {
        a._cj();
    }
    i(a) {
        let b = a._b7.a(DBCELLRecord_DBCELLInfo.$);
        if (b == null) {
            return;
        }
        a._ci._syncWorkbookStreamPosition();
        let c = a._ci._getStartOfRecord();
        let d = b.d + 20;
        let e = new List$1(Number_$type, 0);
        e.add((b.b._inner[0] - d));
        for (let f = 0; f < b.b.count - 1; f++) {
            e.add((b.b._inner[f + 1] - b.b._inner[f]));
        }
        a._ci._write18((c - b.d));
        for (let g of fromEnum(e)) {
            a._ci._write17(g);
        }
    }
    get_d() {
        return 215;
    }
    get d() {
        return this.get_d();
    }
}
DBCELLRecord.$t = markType(DBCELLRecord, 'DBCELLRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class DBCELLRecord_DBCELLInfo extends Base {
    constructor(a, b) {
        super();
        this.a = null;
        this.c = 0;
        this.a = b;
        this.c = a;
    }
    get b() {
        return this.a;
    }
    get d() {
        return this.c;
    }
}
DBCELLRecord_DBCELLInfo.$t = markType(DBCELLRecord_DBCELLInfo, 'DBCELLRecord_DBCELLInfo');
/**
 * @hidden
 */
export class DEFAULTROWHEIGHTRecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = a._av._readUInt16();
        let d = (c & 1) == 1;
        b._dv = (c & 2) == 2;
        b._dt = (c & 4) == 4;
        b._ds = (c & 8) == 8;
        let e = a._av._readUInt16();
        if (d) {
            b.defaultRowHeight = e;
        }
    }
    i(a) {
        let b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = 0;
        if (b._d4) {
            c |= 1;
        }
        if (b._dv) {
            c |= 2;
        }
        if (b._dt) {
            c |= 4;
        }
        if (b._ds) {
            c |= 8;
        }
        a._ci._write17(c);
        a._ci._write17(b.defaultRowHeight);
    }
    get_d() {
        return 549;
    }
    get d() {
        return this.get_d();
    }
}
DEFAULTROWHEIGHTRecord.$t = markType(DEFAULTROWHEIGHTRecord, 'DEFAULTROWHEIGHTRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class DEFCOLWIDTHRecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = a._av._readUInt16();
        b._iq(c, 2, true, false);
        b._d7 = true;
    }
    i(a) {
        let b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = truncate(MathUtilities.j(b.getDefaultColumnWidth(2)));
        a._ci._write17(c);
    }
    get_d() {
        return 85;
    }
    get d() {
        return this.get_d();
    }
}
DEFCOLWIDTHRecord.$t = markType(DEFCOLWIDTHRecord, 'DEFCOLWIDTHRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class DELTARecord extends Biff8RecordBase {
    h(a) {
        a._b.maxChangeInIteration = a._av._readDouble();
    }
    i(a) {
        a._ci._write10(a._b.maxChangeInIteration);
    }
    get_d() {
        return 16;
    }
    get d() {
        return this.get_d();
    }
}
DELTARecord.$t = markType(DELTARecord, 'DELTARecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class DIMENSIONSRecord extends Biff8RecordBase {
    h(a) {
        a._av._readUInt32();
        a._av._readUInt32();
        a._av._readUInt16();
        a._av._readUInt16();
        let b = a._av._readUInt16();
    }
    i(a) {
        let b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = a._w(b);
        a._ci._write18(c.p);
        a._ci._write18(c.q);
        a._ci._write17(c.n);
        a._ci._write17(c.o);
        a._ci._write17(0);
    }
    get_d() {
        return 512;
    }
    get d() {
        return this.get_d();
    }
}
DIMENSIONSRecord.$t = markType(DIMENSIONSRecord, 'DIMENSIONSRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class DSFRecord extends Biff8RecordBase {
    h(a) {
        let b = a._av._readUInt16() == 1;
    }
    i(a) {
        a._ci._write17(0);
    }
    get_d() {
        return 353;
    }
    get d() {
        return this.get_d();
    }
}
DSFRecord.$t = markType(DSFRecord, 'DSFRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class DVALRecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = a._av._readUInt16();
        let d = a._av._readInt32();
        let e = a._av._readInt32();
        let f = a._av._readInt32();
        let g = a._av._readInt32();
    }
    i(a) {
        let b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        if (b._d6 == false) {
            return;
        }
        a._ci._write17(0);
        a._ci._write12(0);
        a._ci._write12(0);
        a._ci._write12(-1);
        a._ci._write12(b._dataValidationRules$i.count);
    }
    get_d() {
        return 434;
    }
    get d() {
        return this.get_d();
    }
}
DVALRecord.$t = markType(DVALRecord, 'DVALRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class DVRecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = new Array(0);
        let d = 0;
        let e = ((() => { let f = a._av._readUInt32FromBuffer(c, d); c = f.p0; d = f.p1; return f.ret; })());
        let f = (e & 15);
        let g = ((e & 112) >>> 4);
        let h = (e & 128) != 0;
        let i = (e & 256) != 0;
        let j = (e & 512) != 0;
        let k = (e & 261120) >>> 10;
        let l = (e & 262144) != 0;
        let m = (e & 524288) != 0;
        let n = ((e & 15728640) >>> 20);
        let o;
        switch (f) {
            case 0:
                o = new AnyValueDataValidationRule();
                break;
            case 3:
                let p = new ListDataValidationRule();
                p.showDropdown = (j == false);
                o = p;
                break;
            case 7:
                o = new CustomDataValidationRule();
                break;
            case 4:
            case 2:
            case 6:
            case 5:
            case 1:
                switch (n) {
                    case 0:
                    case 1:
                        o = new TwoConstraintDataValidationRule(n, f);
                        break;
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        o = new OneConstraintDataValidationRule(n, f);
                        break;
                    default: return;
                }
                break;
            default: return;
        }
        o._p = i;
        o.errorStyle = g;
        o.showInputMessage = l;
        o.showErrorMessageForInvalidValue = m;
        let q = ((() => { let r = a._av.readFormattedStringFromBuffer(1, c, d); c = r.p1; d = r.p2; return r.ret; })())._y;
        let r = DVRecord.o(q);
        q = r.p0;
        o.inputMessageTitle = q;
        let s = ((() => { let t = a._av.readFormattedStringFromBuffer(1, c, d); c = t.p1; d = t.p2; return t.ret; })())._y;
        let t = DVRecord.o(s);
        s = t.p0;
        o.errorMessageTitle = s;
        let u = ((() => { let v = a._av.readFormattedStringFromBuffer(1, c, d); c = v.p1; d = v.p2; return v.ret; })())._y;
        let v = DVRecord.o(u);
        u = v.p0;
        o.inputMessageDescription = u;
        let w = ((() => { let x = a._av.readFormattedStringFromBuffer(1, c, d); c = x.p1; d = x.p2; return x.ret; })())._y;
        let x = DVRecord.o(w);
        w = x.p0;
        o.errorMessageDescription = w;
        let y = ((() => { let z = a._av._readUInt16FromBuffer(c, d); c = z.p0; d = z.p1; return z.ret; })());
        d += 2;
        let z = ((() => { let aa = a._au(o._i, y, c, d); c = aa.p2; d = aa.p3; return aa.ret; })());
        o._aq(z, null);
        if (h && z != null && z._e.length == 1) {
            let aa = typeCast(StrToken.$, z._e[0]);
            if (aa != null) {
                z._e[0] = new StrToken(1, stringReplace(aa.p, '\0', ','));
            }
        }
        let ab = ((() => { let ac = a._av._readUInt16FromBuffer(c, d); c = ac.p0; d = ac.p1; return ac.ret; })());
        d += 2;
        let ac = ((() => { let ad = a._au(o._i, ab, c, d); c = ad.p2; d = ad.p3; return ad.ret; })());
        o._ar(ac, null);
        let ad = ((() => { let ae = a._av._ao(c, d); c = ae.p0; d = ae.p1; return ae.ret; })());
        let ae = new WorksheetReferenceCollection(b);
        for (let af of fromEnum(ad)) {
            let ag = af.j(b, -1, -1, false);
            if (ag != null) {
                ae._add(ag);
            }
            else {
            }
        }
        b._dataValidationRules$i._al(o, ae);
    }
    i(a) {
        let b = a._b7.a(DataValidationRule.$);
        let c = a._b7.a(List$1.$.specialize(CellAddressRange.$));
        if (b == null || c == null) {
            return;
        }
        let d = typeCast(ListDataValidationRule.$, b);
        let e = b._l(null);
        let f = 0;
        f = u32BitwiseOr(f, b._k);
        f = u32BitwiseOr(f, u32LS(b.errorStyle, 4));
        if (d != null && e != null && e._e.length == 1 && typeCast(StrToken.$, e._e[0]) !== null) {
            e = e._g();
            let g = e._e[0];
            e._e[0] = new StrToken(1, stringReplace(g.p, ",", "\0"));
            f = u32BitwiseOr(f, 128);
        }
        if (b._p) {
            f = u32BitwiseOr(f, 256);
        }
        if (d != null && d.showDropdown == false) {
            f = u32BitwiseOr(f, 512);
        }
        if (b.showInputMessage) {
            f = u32BitwiseOr(f, 262144);
        }
        if (b.showErrorMessageForInvalidValue) {
            f = u32BitwiseOr(f, 524288);
        }
        f = u32BitwiseOr(f, u32LS(b._j, 20));
        a._ci._write18(f);
        let h = b.inputMessageTitle;
        let i = DVRecord.p(h);
        h = i.p0;
        a._ci._write15(h, 1);
        let j = b.errorMessageTitle;
        let k = DVRecord.p(j);
        j = k.p0;
        a._ci._write15(j, 1);
        let l = b.inputMessageDescription;
        l = ExcelUtils.eh(l);
        let m = DVRecord.p(l);
        l = m.p0;
        a._ci._write15(l, 1);
        let n = b.errorMessageDescription;
        n = ExcelUtils.eh(n);
        let o = DVRecord.p(n);
        n = o.p0;
        a._ci._write15(n, 1);
        let p = a._ci.position;
        a._ci._write17(0);
        a._ci._write17(0);
        if (e != null) {
            let q = a._c2(e, false, false, false);
            let r = a._ci.position;
            a._ci.position = p;
            a._ci._write12(q);
            a._ci.position = r;
        }
        let s = a._ci.position;
        a._ci._write17(0);
        a._ci._write17(0);
        let t = b._m(null);
        if (t != null) {
            let u = a._c2(t, false, false, false);
            let v = a._ci.position;
            a._ci.position = s;
            a._ci._write12(u);
            a._ci.position = v;
        }
        let w = a._ci._write1(c, false);
        c.v(0, w);
    }
    get_d() {
        return 446;
    }
    get d() {
        return this.get_d();
    }
    static o(a) {
        if (a.length == 1 && a.charAt(0) == String.fromCharCode(0)) {
            a = stringEmpty();
        }
        return {
            p0: a
        };
    }
    static p(a) {
        if (stringIsNullOrEmpty(a)) {
            a = "\0";
        }
        return {
            p0: a
        };
    }
}
DVRecord.$t = markType(DVRecord, 'DVRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class DXFRecord extends Biff8RecordBase {
    h(a) {
        a._av._readFrtHeader();
        let b = new DXFRecordInfo();
        let c = a._av._readUInt16();
        b.b = ExcelUtils.bt(c, 0);
        let d = ExcelUtils.bt(c, 1);
        let e = ExcelUtils.c6(c, 3, 15);
        b.a = a._av._readXFProps();
        a._bw.add(b);
    }
    static o(a, b) {
        let c = a._b._cd(2);
        Biff8RecordStream._applyXFProps(a._b, c, b.b, b.a);
        a._g.add(c);
    }
    i(a) {
        let b = a._b7.a(WorksheetCellFormatData.$);
        if (b == null) {
            return;
        }
        a._ci._writeFrtHeader();
        let c = true;
        let d = 0;
        let e = ExcelUtils.f7(d, c, 0);
        d = e.p0;
        let f = ExcelUtils.f7(d, true, 1);
        d = f.p0;
        a._ci._write17(d);
        a._ci._writeXFProps(b);
    }
    get_d() {
        return 2189;
    }
    get d() {
        return this.get_d();
    }
}
DXFRecord.$t = markType(DXFRecord, 'DXFRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class DXFRecordInfo extends Base {
    constructor() {
        super(...arguments);
        this.b = false;
        this.a = null;
    }
}
DXFRecordInfo.$t = markType(DXFRecordInfo, 'DXFRecordInfo');
/**
 * @hidden
 */
export class EOFRecord extends Biff8RecordBase {
    get_e() {
        return true;
    }
    h(a) {
    }
    a(a) {
        let b = a._ai.h();
        return Async.g(typeCast(Workbook.$, b) !== null, () => WorkItemExtensions.a(a._ar(), () => a._z()), () => {
            let c = typeCast(Worksheet.$, b);
            if (c != null) {
                c._shapes$i._ao();
            }
            a._ai.h();
            a._ai.h();
            a._b6++;
            a._bl.clear();
            a._bk.clear();
            return null;
        });
    }
    i(a) {
    }
    get_d() {
        return 10;
    }
    get d() {
        return this.get_d();
    }
}
EOFRecord.$t = markType(EOFRecord, 'EOFRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class EXCEL9FILERecord extends Biff8RecordBase {
    h(a) {
    }
    i(a) {
    }
    get_d() {
        return 448;
    }
    get d() {
        return this.get_d();
    }
}
EXCEL9FILERecord.$t = markType(EXCEL9FILERecord, 'EXCEL9FILERecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class EXTERNNAMERecord extends Biff8RecordBase {
    h(a) {
        let b = new Array(0);
        let c = 0;
        let d = ((() => { let e = a._av._readUInt16FromBuffer(b, c); b = e.p0; c = e.p1; return e.ret; })());
        let e = ExcelUtils.bt(d, 0);
        let f = ExcelUtils.bt(d, 1);
        let g = ExcelUtils.bt(d, 2);
        let h = ExcelUtils.bt(d, 3);
        let i = ExcelUtils.bt(d, 4);
        if (typeCast(OleLinkWorkbookReference.$, a._a0) !== null || typeCast(DdeLinkWorkbookReference.$, a._a0) !== null) {
            let j = ((() => { let k = a._av._readUInt32FromBuffer(b, c); b = k.p0; c = k.p1; return k.ret; })());
            let k = ((() => { let l = a._av.readFormattedStringFromBuffer(0, b, c); b = l.p1; c = l.p2; return l.ret; })())._y;
            a._a0.c(k, a._a0, true);
            let l = typeCast(OleLinkWorkbookReference.$, a._a0);
            if (l != null) {
                l.ag.add(new OleItem(k, false, f, g));
            }
            else {
                let m = typeCast(DdeLinkWorkbookReference.$, a._a0);
                m.ag.add(new DdeItem(k, h, f, g));
            }
        }
        else {
            let n = ((() => { let o = a._av._readUInt16FromBuffer(b, c); b = o.p0; c = o.p1; return o.ret; })());
            let o = a._av._readUInt16FromBuffer(b, c);
            b = o.p0;
            c = o.p1;
            let p = a._i;
            let q = p._inner[p.count - 1];
            let r = ((() => { let s = a._av.readFormattedStringFromBuffer(0, b, c); b = s.p1; c = s.p2; return s.ret; })())._y;
            let s = ((() => { let t = a._at(4, b, c); b = t.p1; c = t.p2; return t.ret; })());
            let t = q;
            if (n > 0) {
                t = q.i(n - 1);
            }
            if (e) {
                r = NamedReferenceBase._av(r.charAt(0).charCodeAt(0));
            }
            let u = q.c(r, t, true);
            u._bb(s, false);
        }
    }
    i(a) {
        let b = a._b7.a(NamedReferenceBase.$);
        if (b == null || b._j == null) {
            return;
        }
        let c = false;
        let d = false;
        let e = false;
        let f = false;
        let g = typeCast(OleLinkNamedReference.$, b);
        if (g != null) {
            f = true;
            let h = typeCast(OleLinkWorkbookReference.$, g._h);
            if (h != null) {
                let i = Enumerable.ag(OleItem.$, h.ag, (j) => StringUtilities.e.equalsC(j.d, g.name));
                if (i == null) {
                    i = new OleItem(g.name, false, true, false);
                    h.ag.add(i);
                }
                c = i.a;
                d = i.c;
            }
        }
        else if (typeCast(DdeLinkNamedReference.$, b) !== null) {
            let j = b;
            let k = typeCast(DdeLinkWorkbookReference.$, j._h);
            if (k != null) {
                let l = Enumerable.ag(DdeItem.$, k.ag, (m) => StringUtilities.e.equalsC(m.d, j.name));
                if (l == null) {
                    l = new DdeItem(j.name, j.name == "StdDocumentName", false, false);
                    k.ag.add(l);
                }
                c = l.a;
                d = l.c;
                e = l.b;
            }
        }
        let m = b.name;
        if (b._r) {
            m = String.fromCharCode(b._c).toString();
        }
        let n = 0;
        if (b._r) {
            let o = ExcelUtils.f7(n, true, 0);
            n = o.p0;
        }
        if (c) {
            let p = ExcelUtils.f7(n, true, 1);
            n = p.p0;
        }
        if (d) {
            let q = ExcelUtils.f7(n, true, 2);
            n = q.p0;
        }
        if (e) {
            let r = ExcelUtils.f7(n, true, 3);
            n = r.p0;
        }
        if (f) {
            let s = ExcelUtils.f7(n, true, 4);
            n = s.p0;
        }
        a._ci._write17(n);
        if (b._g == 2) {
            a._ci._write18(intSToU(0));
            a._ci._write15(m, 0);
        }
        else {
            if (typeCast(WorkbookReferenceBase.$, b.scope) !== null || typeCast(Workbook.$, b.scope) !== null) {
                a._ci._write17(0);
            }
            else {
                a._ci._write17((b.scope.l + 1));
            }
            a._ci._write17(0);
            a._ci._write15(m, 0);
            a._c2(b._j, true, true);
        }
    }
    get_d() {
        return 35;
    }
    get d() {
        return this.get_d();
    }
}
EXTERNNAMERecord.$t = markType(EXTERNNAMERecord, 'EXTERNNAMERecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class EXTERNSHEETRecord extends Biff8RecordBase {
    h(a) {
        let b = a._av._readUInt16();
        let c = a._i;
        let d = a._j;
        for (let e = 0; e < b; e++) {
            let f = a._av._readUInt16();
            let g = a._av._readInt16();
            let h = a._av._readInt16();
            let i = c._inner[f];
            let j;
            let k = i.i(g);
            if (h == g) {
                j = k;
            }
            else {
                let l = i.i(h);
                j = i.f(k, l);
            }
            d.add(j);
        }
    }
    i(a) {
        let b = a._j;
        let c = a._i;
        a._ci._write17(b.count);
        for (let d of fromEnum(b)) {
            let e = c.indexOf(d.e);
            a._ci._write17(e);
            a._ci._write11(d.l);
            a._ci._write11(d.m);
        }
    }
    get_d() {
        return 23;
    }
    get d() {
        return this.get_d();
    }
}
EXTERNSHEETRecord.$t = markType(EXTERNSHEETRecord, 'EXTERNSHEETRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class EXTSSTRecord extends Biff8RecordBase {
    h(a) {
        if (nullableNotEquals(a._ce, null)) {
            a._cd = Nullable$1.toNullable(Number_$type, a._av._getStartOfRecord());
            return;
        }
        let b = a._av._readUInt16();
        if (b == 0) {
            return;
        }
        let c = a._u.count;
        if (c > 0) {
            let d = (intDivide((c - 1), b)) + 1;
            for (let e = 0; e < d; e++) {
                if (a._av.position == a._av.length) {
                    break;
                }
                a._av._readUInt32();
                a._av._readUInt16();
                a._av._readUInt16();
            }
        }
    }
    i(a) {
        a._ci._write17(8);
        if (a._a1 > 0) {
            for (let b = 0; b < a._cv.count; b++) {
                let c = a._cv._inner[b];
                a._ci._write18(c.b);
                a._ci._write17(c.a);
                a._ci._write17(0);
            }
        }
    }
    get_d() {
        return 255;
    }
    get d() {
        return this.get_d();
    }
}
EXTSSTRecord.$t = markType(EXTSSTRecord, 'EXTSSTRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class FEAT11Record extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = a._av._readFrtHeaderU(b);
        let d = a._av._readUInt16();
        let e = a._av.readByte();
        let f = a._av._readUInt32();
        let g = a._av._readUInt16();
        let h = a._av._readUInt32();
        let i = h;
        if (i == 0) {
            i = (a._av.length - (8 * g) - 27);
        }
        let j = a._av._readUInt16();
        let k = new Array(g);
        for (let l = 0; l < g; l++) {
            k[l] = a._av._readRef8U(b);
        }
        let m = c;
        if (k.length == 1) {
            m = k[0];
        }
        let n = a._av._readTableFeatureType(b, m);
        if (n != null) {
            b._tables$i._t(n);
        }
    }
    i(a) {
        let b = a._b7.a(WorksheetTable.$);
        let c = a._b7.a(SortedList$2.$.specialize(Number_$type, TableColumnFilterData.$));
        if (b == null || c == null) {
            return;
        }
        let d = b.wholeTableRegion;
        a._ci._writeFrtHeaderU(d);
        a._ci._write17(5);
        a._ci.writeByte(0);
        a._ci._write18(intSToU(0));
        a._ci._write17(1);
        a._ci._write18(intSToU(0));
        a._ci._write17(0);
        a._ci._writeRef8U(d);
        a._ci._writeTableFeatureType(b, c);
    }
    get_d() {
        return 2162;
    }
    get d() {
        return this.get_d();
    }
}
FEAT11Record.$t = markType(FEAT11Record, 'FEAT11Record', Biff8RecordBase.$);
/**
 * @hidden
 */
export class FEAT12Record extends FEAT11Record {
    get_d() {
        return 2168;
    }
}
FEAT12Record.$t = markType(FEAT12Record, 'FEAT12Record', FEAT11Record.$);
/**
 * @hidden
 */
export class FEATHEADR11Record extends Biff8RecordBase {
    h(a) {
        a._av._readFrtHeader();
        let b = a._av._readUInt16();
        let c = a._av.readByte();
        let d = a._av._readUInt32();
        let e = a._av._readUInt32();
        let f = a._av._readUInt32();
        a._b._g6 = f;
        let g = a._av._readUInt16();
    }
    i(a) {
        a._ci._writeFrtHeader();
        a._ci._write17(5);
        a._ci.writeByte(1);
        a._ci._write18(4294967295);
        a._ci._write18(4294967295);
        a._ci._write18(a._b._g6);
        a._ci._write17(0);
    }
    get_d() {
        return 2161;
    }
    get d() {
        return this.get_d();
    }
}
FEATHEADR11Record.$t = markType(FEATHEADR11Record, 'FEATHEADR11Record', Biff8RecordBase.$);
/**
 * @hidden
 */
export class FEATHEADRRecord extends Biff8RecordBase {
    h(a) {
        a._av._readFrtHeader();
        let b = a._av._readUInt16();
        if (b == 2) {
            let c = a._ai.a(Worksheet.$);
            let d = a._av;
            let e = d.readByte();
            let f = d._readInt32();
            if (f == -1) {
                let g = d._readBytes((d.length - d.position));
                let h = c.protection;
                h.allowEditObjects = (g[0] & 1) != 0;
                h.allowEditScenarios = (g[0] & 2) != 0;
                h.allowFormattingCells = (g[0] & 4) != 0;
                h.allowFormattingColumns = (g[0] & 8) != 0;
                h.allowFormattingRows = (g[0] & 16) != 0;
                h.allowInsertingColumns = (g[0] & 32) != 0;
                h.allowInsertingRows = (g[0] & 64) != 0;
                h.allowInsertingHyperlinks = (g[0] & 128) != 0;
                h.allowDeletingColumns = (g[1] & 1) != 0;
                h.allowDeletingRows = (g[1] & 2) != 0;
                let i = (g[1] & 4) != 0;
                h.allowSorting = (g[1] & 8) != 0;
                h.allowFiltering = (g[1] & 16) != 0;
                h.allowUsingPivotTables = (g[1] & 32) != 0;
                let j = (g[1] & 64) != 0;
                h._ag(i, j);
            }
        }
    }
    i(a) {
        let b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        a._ci._writeFrtHeader();
        a._ci._write17(2);
        a._ci.writeByte(1);
        a._ci._write18(4294967295);
        let c = b.protection;
        let d = ((c.allowEditObjects ? 1 : 0) | (c.allowEditScenarios ? 2 : 0) | (c.allowFormattingCells ? 4 : 0) | (c.allowFormattingColumns ? 8 : 0) | (c.allowFormattingRows ? 16 : 0) | (c.allowInsertingColumns ? 32 : 0) | (c.allowInsertingRows ? 64 : 0) | (c.allowInsertingHyperlinks ? 128 : 0));
        let e = ((c.allowDeletingColumns ? 1 : 0) | (c.allowDeletingRows ? 2 : 0) | (c._ab ? 4 : 0) | (c.allowSorting ? 8 : 0) | (c.allowFiltering ? 16 : 0) | (c.allowUsingPivotTables ? 32 : 0) | (c._ac ? 64 : 0));
        a._ci.writeByte(d);
        a._ci.writeByte(e);
        a._ci.writeByte(0);
        a._ci.writeByte(0);
    }
    get_d() {
        return 2151;
    }
    get d() {
        return this.get_d();
    }
}
FEATHEADRRecord.$t = markType(FEATHEADRRecord, 'FEATHEADRRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class FEATRecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        a._av._readFrtHeader();
        let c = a._av._readUInt16();
        if (c != 2) {
            return;
        }
        let d = a._av.readByte();
        let e = a._av._readUInt32();
        let f = a._av._readUInt16();
        let g = a._av._readUInt32();
        let h = a._av._readUInt16();
        let i = new List$1(WorksheetRegion.$, 0);
        for (let j = 0; j < f; j++) {
            i.add(a._av._readRef8U(b));
        }
        let k = a._av._readFeatProtection();
        for (let l of fromEnum(i)) {
            k.ranges.add(l);
        }
        b.protection._allowedEditRanges$i.insert(0, k);
    }
    i(a) {
        let b = a._b7.a(WorksheetProtectedRange.$);
        if (b == null) {
        }
        a._ci._writeFrtHeader();
        a._ci._write17(2);
        a._ci.writeByte(0);
        a._ci._write18(intSToU(0));
        a._ci._write17(b.ranges.count);
        a._ci._write18(intSToU(0));
        a._ci._write17(0);
        for (let c of fromEnum(b.ranges)) {
            a._ci._writeRef8U(c);
        }
        a._ci._writeFeatProtection(b);
    }
    get_d() {
        return 2152;
    }
    get d() {
        return this.get_d();
    }
}
FEATRecord.$t = markType(FEATRecord, 'FEATRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class FILEPASSRecord extends Biff8RecordBase {
    h(a) {
        FILEPASSRecord.q(a);
        if (a._aj == null) {
            a._b._i3();
        }
    }
    i(a) {
    }
    static q(a) {
    }
    get_n() {
        return false;
    }
    get_d() {
        return 47;
    }
    get d() {
        return this.get_d();
    }
}
FILEPASSRecord.$t = markType(FILEPASSRecord, 'FILEPASSRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class FILESHARINGRecord extends Biff8RecordBase {
    h(a) {
        let b = a._av._readUInt16();
        let c = a._av._readUInt16();
        if (c == 0) {
            let d = a._av._readUInt16();
        }
        else {
            let e = a._av._readXLUnicodeString();
        }
    }
    i(a) {
    }
    get_d() {
        return 91;
    }
    get d() {
        return this.get_d();
    }
}
FILESHARINGRecord.$t = markType(FILESHARINGRecord, 'FILESHARINGRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class FILTERMODERecord extends Biff8RecordBase {
    h(a) {
    }
    i(a) {
    }
    get_d() {
        return 155;
    }
    get d() {
        return this.get_d();
    }
}
FILTERMODERecord.$t = markType(FILTERMODERecord, 'FILTERMODERecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class FNGROUPCOUNTRecord extends Biff8RecordBase {
    h(a) {
        let b = a._av._readUInt16();
    }
    i(a) {
        a._ci._write17(16);
    }
    get_d() {
        return 156;
    }
    get d() {
        return this.get_d();
    }
}
FNGROUPCOUNTRecord.$t = markType(FNGROUPCOUNTRecord, 'FNGROUPCOUNTRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class FONTRecord extends Biff8RecordBase {
    h(a) {
        let b = new FONTRecordInfo();
        b.f = a._av._readUInt16();
        b.i = a._av._readUInt16();
        b.g = a._av._readUInt16();
        b.e = a._av._readUInt16();
        b.h = a._av._readUInt16();
        b.c = a._av.readByte();
        b.b = a._av.readByte();
        b.a = a._av.readByte();
        a._av.readByte();
        b.d = a._av._readFormattedString(0)._y;
        a._bx.add(b);
    }
    static o(a, b) {
        let c = a._b.createNewWorkbookFont();
        if (b.f < 20) {
            b.f = 20;
        }
        c.height = b.f;
        c._italic$i = Nullable$1.toNullable(Boolean_$type, (b.i & 2) == 2 ? true : false);
        c._strikeout$i = Nullable$1.toNullable(Boolean_$type, (b.i & 8) == 8 ? true : false);
        c.colorInfo = new WorkbookColorInfo(a._b, b.g);
        c._bold$i = Nullable$1.toNullable(Boolean_$type, b.e < 700 ? false : true);
        c.superscriptSubscriptStyle = b.h;
        c.underlineStyle = b.c;
        c.name = b.d;
        if (a._h.count == 4) {
            a._h.add(null);
        }
        if (a._h.count == 0) {
            a._b._av._p = c;
        }
        a._h.add(c);
    }
    i(a) {
        let b = a._b7.a(WorkbookFontData.$);
        if (b == null) {
            return;
        }
        a._ci._write17(b.height);
        let c = 0;
        if (nullableEquals(b._italic$i, true)) {
            c |= 2;
        }
        if (nullableEquals(b._strikeout$i, true)) {
            c |= 8;
        }
        a._ci._write17(c);
        a._ci._write17(b.colorInfo._y(a._b, 2));
        let d = (nullableEquals(b._bold$i, true) ? 700 : 400);
        a._ci._write17(d);
        a._ci._write17(b.superscriptSubscriptStyle);
        a._ci._write9(b.underlineStyle);
        a._ci._write9(ExcelUtils.s(b.name));
        a._ci._write9(0);
        a._ci._write9(0);
        a._ci._write16(b.name, 0, false);
    }
    get_d() {
        return 49;
    }
    get d() {
        return this.get_d();
    }
}
FONTRecord.$t = markType(FONTRecord, 'FONTRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class FONTRecordInfo extends Base {
    constructor() {
        super(...arguments);
        this.f = 0;
        this.i = 0;
        this.g = 0;
        this.e = 0;
        this.h = 0;
        this.c = 0;
        this.b = 0;
        this.a = 0;
        this.d = null;
    }
}
FONTRecordInfo.$t = markType(FONTRecordInfo, 'FONTRecordInfo');
/**
 * @hidden
 */
export class FOOTERRecord extends Biff8RecordBase {
    h(a) {
        if (a._av.length == 0) {
            return;
        }
        let b = a._ai.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        let c = a._av._readFormattedString(1);
        b.footer = c._y;
    }
    i(a) {
        let b = a._b7.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        if (stringIsNullOrEmpty(b.footer)) {
            return;
        }
        a._ci._write15(b.footer, 1);
    }
    get_d() {
        return 21;
    }
    get d() {
        return this.get_d();
    }
}
FOOTERRecord.$t = markType(FOOTERRecord, 'FOOTERRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class FORMATRecord extends Biff8RecordBase {
    h(a) {
        let b = a._av._readUInt16();
        let c = a._av._readFormattedString(1)._y;
        a._b._b2.ap(b, c);
    }
    i(a) {
        let b = a._b7.a(WorkbookSaveManagerExcel2003_FormatHolder.$);
        if (b == null) {
            return;
        }
        let c = a._c0(b.b);
        a._ci._write17(c);
        a._ci._write15(b.d, 1);
    }
    get_d() {
        return 1054;
    }
    get d() {
        return this.get_d();
    }
}
FORMATRecord.$t = markType(FORMATRecord, 'FORMATRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class FORMULARecord extends CellValueRecordBase {
    o(a, b, c, d, e) {
        e = FORMULARecord.s(a, b, c);
        c += 8;
        let f = ((() => { let g = a._av._readUInt16FromBuffer(b, c); b = g.p0; c = g.p1; return g.ret; })());
        let g = (f & 1) == 1;
        let h = (f & 2) == 2;
        let i = a._av._readUInt32FromBuffer(b, c);
        b = i.p0;
        c = i.p1;
        let j = ((() => { let k = a._at(0, b, c); b = k.p1; c = k.p2; return k.ret; })());
        j._an = h;
        d = j;
        return {
            p1: b,
            p2: c,
            p3: d,
            p4: e
        };
    }
    p(a, b) {
        let c = a._cj;
        let d = ExcelUtils.z(c.c);
        if (d == null) {
            return;
        }
        let e = a._ch;
        let f = a._a3(c.b, e, true);
        let g = d._as;
        let h = null;
        if (g) {
            h = a._b7.a(WorksheetCell.$);
            d = a._cl(d);
        }
        let i;
        let j = ((() => { let k = FORMULARecord.q(a._b, f, i); i = k.p2; return k.ret; })());
        b.write(j, 0, j.length);
        let k = 0;
        if (d._ax) {
            k |= 1;
        }
        if (c.b._as(e.r)._be()) {
            k |= 2;
        }
        if (g) {
            k |= 8;
        }
        b.write(BitConverter.h(k), 0, 2);
        b.write(BitConverter.i(intSToU(0)), 0, 4);
        a._ci._write13(b);
        a._c2(d, true, false);
        if (g && h.rowIndex == c.b.index && h._ab == e.r) {
            a._dp(1212);
        }
        if (i == null) {
            return;
        }
        a._b7.k(i);
        a._dp(519);
        a._b7.h();
    }
    get_d() {
        return 6;
    }
    get d() {
        return this.get_d();
    }
    static s(a, b, c) {
        let d = BitConverter.o(b, c);
        if (isNaN_(d) == false) {
            return d;
        }
        switch (b[c]) {
            case 0:
                {
                    let e = a._av.position;
                    a._av.position = a._av.length;
                    try {
                        {
                            let f = new Biff8RecordStream(1, a);
                            try {
                                if (f._recordType == 1212 || f._recordType == 545) {
                                    WorkItemExtensions.n(a._ao());
                                    {
                                        let g = new Biff8RecordStream(1, a);
                                        try {
                                            return FORMULARecord.t(g);
                                        }
                                        finally {
                                            if (g != null) {
                                                g.dispose();
                                            }
                                        }
                                    }
                                }
                                else {
                                    return FORMULARecord.t(f);
                                }
                            }
                            finally {
                                if (f != null) {
                                    f.dispose();
                                }
                            }
                        }
                    }
                    finally {
                        a._av.position = e;
                    }
                }
            case 1: return BitConverter.l(b, c + 2);
            case 2: return ErrorValue._j(b[c + 2]);
            case 3: return stringEmpty();
            default: return null;
        }
    }
    static t(a) {
        if (a._recordType != 519) {
            return stringEmpty();
        }
        let b = a._loadManagerBiff8;
        WorkItemExtensions.n(b._ao());
        let c = typeCast(String_$type, b._ai.f);
        if (c != null) {
            b._ai.h();
            return c;
        }
        return stringEmpty();
    }
    static q(a, b, c) {
        return {
            ret: ((() => { let d = FORMULARecord.r(a, b, c); c = d.p2; return d.ret; })()),
            p2: c
        };
    }
    static r(a, b, c) {
        c = null;
        if (typeCast(Boolean_$type, b) !== null) {
            return {
                ret: [1, 0, Convert.toByte(b), 0, 0, 0, 255, 255],
                p2: c
            };
        }
        let d = typeCast(ErrorValue.$, b);
        if (d != null) {
            return {
                ret: [2, 0, d._y, 0, 0, 0, 255, 255],
                p2: c
            };
        }
        let e = typeCast(String_$type, b);
        if (e == null) {
            let f = typeCast(StringElement.$, b);
            if (f != null) {
                e = f._y;
            }
        }
        if (e != null) {
            c = e;
            return {
                ret: [0, 0, 0, 0, 0, 0, 255, 255],
                p2: c
            };
        }
        if (typeCast(Date_$type, b) !== null) {
            let g = ExcelCalcValue._dateTimeToExcelDate(a, b);
            if (g.hasValue) {
                return {
                    ret: BitConverter.c(g.value),
                    p2: c
                };
            }
            return {
                ret: new Array(8),
                p2: c
            };
        }
        try {
            let h = Convert.toDouble4(b, a._e6);
            return {
                ret: BitConverter.c(h),
                p2: c
            };
        }
        catch (i) {
            return {
                ret: new Array(8),
                p2: c
            };
        }
    }
}
FORMULARecord.$t = markType(FORMULARecord, 'FORMULARecord', CellValueRecordBase.$);
/**
 * @hidden
 */
export class GRIDSETRecord extends Biff8RecordBase {
    h(a) {
        a._av._readUInt16();
    }
    i(a) {
        a._ci._write17(1);
    }
    get_d() {
        return 130;
    }
    get d() {
        return this.get_d();
    }
}
GRIDSETRecord.$t = markType(GRIDSETRecord, 'GRIDSETRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class GUTSRecord extends Biff8RecordBase {
    h(a) {
        let b = a._av._readUInt16();
        let c = a._av._readUInt16();
        let d = a._av._readUInt16();
        let e = a._av._readUInt16();
        if (e != 0) {
            e--;
        }
        if (d != 0) {
            d--;
        }
    }
    i(a) {
        let b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = a._w(b);
        let d = c.e;
        let e = c.f;
        if (e > 0) {
            a._ci._write17(((12 * e) + 17));
            e++;
        }
        else {
            a._ci._write17(0);
        }
        if (d > 0) {
            a._ci._write17(((12 * d) + 17));
            d++;
        }
        else {
            a._ci._write17(0);
        }
        a._ci._write17(e);
        a._ci._write17(d);
    }
    get_d() {
        return 128;
    }
    get d() {
        return this.get_d();
    }
}
GUTSRecord.$t = markType(GUTSRecord, 'GUTSRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class HCENTERRecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        b.centerHorizontally = Convert.toBoolean1(a._av._readUInt16());
    }
    i(a) {
        let b = a._b7.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        a._ci._write17(Convert.toUInt16(b.centerHorizontally));
    }
    get_d() {
        return 131;
    }
    get d() {
        return this.get_d();
    }
}
HCENTERRecord.$t = markType(HCENTERRecord, 'HCENTERRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class HEADERFOOTERRecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(PrintOptions.$);
        let c = a._ai.a(CustomView.$);
        if (b == null) {
            return;
        }
        a._av._readFrtHeader();
        let d = new Guid(1, a._av._readBytes(16));
        let e = a._av._readUInt16();
        let f = ExcelUtils.bt(e, 0);
        let g = ExcelUtils.bt(e, 1);
        let h = ExcelUtils.bt(e, 2);
        let i = ExcelUtils.bt(e, 3);
        let j = a._av._readUInt16();
        let k = a._av._readUInt16();
        let l = a._av._readUInt16();
        let m = a._av._readUInt16();
        if (j != 0) {
            let n = a._av._readXLUnicodeString();
        }
        if (k != 0) {
            let o = a._av._readXLUnicodeString();
        }
        if (l != 0) {
            let p = a._av._readXLUnicodeString();
        }
        if (m != 0) {
            let q = a._av._readXLUnicodeString();
        }
        b.alignHeadersAndFootersWithMargins = i;
        b.scaleHeadersAndFootersWithDocument = h;
    }
    i(a) {
        let b = a._b7.a(PrintOptions.$);
        let c = a._b7.a(CustomView.$);
        if (b == null) {
            return;
        }
        a._ci._writeFrtHeader();
        if (c == null) {
            a._ci._write2(new Array(16));
        }
        else {
            a._ci._write2(c._t.toByteArray());
        }
        let d = 0;
        let e = ExcelUtils.f7(d, b.scaleHeadersAndFootersWithDocument, 2);
        d = e.p0;
        let f = ExcelUtils.f7(d, b.alignHeadersAndFootersWithMargins, 3);
        d = f.p0;
        a._ci._write17(d);
        a._ci._write17(0);
        a._ci._write17(0);
        a._ci._write17(0);
        a._ci._write17(0);
    }
    get_d() {
        return 2204;
    }
    get d() {
        return this.get_d();
    }
}
HEADERFOOTERRecord.$t = markType(HEADERFOOTERRecord, 'HEADERFOOTERRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class HEADERRecord extends Biff8RecordBase {
    h(a) {
        if (a._av.length == 0) {
            return;
        }
        let b = a._ai.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        let c = a._av._readFormattedString(1);
        b.header = c._y;
    }
    i(a) {
        let b = a._b7.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        if (stringIsNullOrEmpty(b.header)) {
            return;
        }
        a._ci._write15(b.header, 1);
    }
    get_d() {
        return 20;
    }
    get d() {
        return this.get_d();
    }
}
HEADERRecord.$t = markType(HEADERRecord, 'HEADERRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class HFPICTURERecord extends Biff8RecordBase {
    h(a) {
        let b = a._av._readUInt16();
        let c = a._av._readUInt16();
        a._av.seek(8, 1);
        let d = a._av.readByte();
        let e = (d & 1) == 1;
        let f = (d & 2) == 2;
        let g = (d & 4) == 4;
        a._av.seek(1, 1);
    }
    i(a) {
    }
    get_d() {
        return 2150;
    }
    get d() {
        return this.get_d();
    }
}
HFPICTURERecord.$t = markType(HFPICTURERecord, 'HFPICTURERecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class HIDEOBJRecord extends Biff8RecordBase {
    h(a) {
        a._b.windowOptions.objectDisplayStyle = a._av._readUInt16();
    }
    i(a) {
        a._ci._write17(a._b.windowOptions.objectDisplayStyle);
    }
    get_d() {
        return 141;
    }
    get d() {
        return this.get_d();
    }
}
HIDEOBJRecord.$t = markType(HIDEOBJRecord, 'HIDEOBJRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class HLINKRecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = a._av._readRef8U(b);
        let d = new Guid(1, a._av._readBytes(16));
        let e = a._av._readUInt32();
        let f = a._av._readUInt32();
        let g = ExcelUtils.bu(f, 0);
        let h = ExcelUtils.bu(f, 1);
        let i = ExcelUtils.bu(f, 2);
        let j = ExcelUtils.bu(f, 3);
        let k = ExcelUtils.bu(f, 4);
        let l = ExcelUtils.bu(f, 5);
        let m = ExcelUtils.bu(f, 6);
        let n = ExcelUtils.bu(f, 7);
        let o = ExcelUtils.bu(f, 8);
        let p = ExcelUtils.bu(f, 9);
        let q = k ? a._av._readHyperlinkString() : null;
        let r = n ? a._av._readHyperlinkString() : null;
        let s = g && o ? a._av._readHyperlinkString() : null;
        let t = null;
        if (g && (o == false)) {
            t = a._av._readHyperlinkMoniker();
            if (t == null) {
                return;
            }
        }
        let u = j ? a._av._readHyperlinkString() : null;
        let v = l ? new Guid(1, a._av._readBytes(16)) : new Guid();
        let w = m ? a._av._ey() : new Date();
        let x = WorkbookLoadManager._v(a._b, s != null ? s : t, u);
        let y = new WorksheetHyperlink(c, x, q, null);
        y._t = u != null && typeof x === 'string' && u == x;
        b._hyperlinks$i.add(y);
    }
    i(a) {
        let b = a._b7.a(WorksheetHyperlink.$);
        if (b == null) {
            return;
        }
        let c;
        let d;
        let e;
        let f = WorkbookSaveManager._b5(b, c, d, e);
        c = f.p1;
        d = f.p2;
        e = f.p3;
        a._ci._writeRef8U(b.sourceRegion);
        a._ci._write2(HLINKRecord.o.toByteArray());
        let g = 0;
        if (c != null) {
            let h = ExcelUtils.f9(g, true, 0);
            g = h.p0;
        }
        if (d != null) {
            let i = ExcelUtils.f9(g, true, 3);
            g = i.p0;
        }
        let j = ExcelUtils.f9(g, true, 4);
        g = j.p0;
        a._ci._write18(intSToU(2));
        a._ci._write18(g);
        a._ci._writeHyperlinkString(e);
        if (c != null) {
            a._ci._writeHyperlinkMoniker(c);
        }
        if (d != null) {
            a._ci._writeHyperlinkString(d);
        }
    }
    get_d() {
        return 440;
    }
    get d() {
        return this.get_d();
    }
}
HLINKRecord.$t = markType(HLINKRecord, 'HLINKRecord', Biff8RecordBase.$);
HLINKRecord.o = new Guid(2, 2045430224, 47865, 4558, 140, 130, 0, 170, 0, 75, 169, 11);
/**
 * @hidden
 */
export class HLINKTOOLTIPRecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null || b._hyperlinks$i.count == 0) {
            return;
        }
        let c = a._av._readFrtRefHeaderNoGrbit(b);
        let d = a._av._readNullTerminatedUnicodeString();
        let e = b._hyperlinks$i.item(b._hyperlinks$i.count - 1);
        if (e.sourceRegion != c) {
            e = null;
            for (let f = 0; f < b._hyperlinks$i.count; f++) {
                if (b._hyperlinks$i.item(f).sourceRegion == c) {
                    e = b._hyperlinks$i.item(f);
                    break;
                }
            }
        }
        if (e == null) {
            return;
        }
        e.toolTip = d;
    }
    i(a) {
        let b = a._b7.a(WorksheetHyperlink.$);
        if (b == null) {
            return;
        }
        a._ci._writeFrtRefHeaderNoGrbit(b.sourceRegion);
        a._ci._writeNullTerminatedUnicodeString(b.toolTip);
    }
    get_d() {
        return 2048;
    }
    get d() {
        return this.get_d();
    }
}
HLINKTOOLTIPRecord.$t = markType(HLINKTOOLTIPRecord, 'HLINKTOOLTIPRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class HORIZONTALPAGEBREAKSRecord extends Biff8RecordBase {
    h(a) {
        if (a._av.length == 0) {
            return;
        }
        let b = a._ai.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        let c = a._av._readUInt16();
        for (let d = 0; d < c; d++) {
            let e = a._av._readUInt16();
            let f = a._av._readUInt16();
            let g = a._av._readUInt16();
            let h = Nullable$1.toNullable(Number_$type, f);
            if (f == 0) {
                h = Nullable$1.toNullable(Number_$type, null);
            }
            let i = Nullable$1.toNullable(Number_$type, g);
            if (g == a._b._ff - 1) {
                i = Nullable$1.toNullable(Number_$type, null);
            }
            let j = b._printAreas$i._e(e, Nullable$1.toNullable(Number_$type, f), Nullable$1.toNullable(Number_$type, g), false);
            let k;
            if (j != null) {
                k = new HorizontalPageBreak(e, j);
            }
            else {
                k = new HorizontalPageBreak(e, h, i);
                k.printArea = j;
            }
            b._horizontalPageBreaks$i._add$i(k);
        }
    }
    i(a) {
        let b = a._b7.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        a._ci._write17(b._horizontalPageBreaks$i.count);
        for (let c = 0; c < b._horizontalPageBreaks$i.count; c++) {
            let d = b._horizontalPageBreaks$i._item(c);
            a._ci._write17(d._k);
            a._ci._write17(d._m);
            let e = Math.min(d._l, a._b._ff - 1);
            a._ci._write17(e);
        }
    }
    get_d() {
        return 27;
    }
    get d() {
        return this.get_d();
    }
}
HORIZONTALPAGEBREAKSRecord.$t = markType(HORIZONTALPAGEBREAKSRecord, 'HORIZONTALPAGEBREAKSRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class INDEXRecord extends Biff8RecordBase {
    h(a) {
        let b = a._av._readUInt32();
        let c = a._av._readUInt32();
        let d = a._av._readUInt32();
        a._av._readUInt32();
        if (c != d) {
            let e = intDivide((a._av.length - a._av.position), 4);
            for (let f = 0; f < e; f++) {
                a._av._readUInt32();
            }
        }
        else {
        }
    }
    i(a) {
        let b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = a._w(b);
        a._ci._write18(intSToU(0));
        a._ci._write18(c.p);
        a._ci._write18(c.q);
        a._ci._write18(intSToU(0));
        if (c.p != c.q) {
            let d = c.k;
            for (let e = 0; e < d; e++) {
                a._ci._write18(intSToU(0));
            }
        }
        else {
        }
    }
    get_d() {
        return 523;
    }
    get d() {
        return this.get_d();
    }
}
INDEXRecord.$t = markType(INDEXRecord, 'INDEXRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class INTERFACEENDRecord extends Biff8RecordBase {
    h(a) {
    }
    i(a) {
    }
    get_d() {
        return 226;
    }
    get d() {
        return this.get_d();
    }
}
INTERFACEENDRecord.$t = markType(INTERFACEENDRecord, 'INTERFACEENDRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class INTERFACEHDRRecord extends Biff8RecordBase {
    h(a) {
        if (a._av.length > 0) {
            let b = a._av._readUInt16();
        }
    }
    i(a) {
        a._ci._write17(ExcelUtils.c2(Encoding.unicode));
    }
    get_n() {
        return false;
    }
    get_d() {
        return 225;
    }
    get d() {
        return this.get_d();
    }
}
INTERFACEHDRRecord.$t = markType(INTERFACEHDRRecord, 'INTERFACEHDRRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class ITERATIONRecord extends Biff8RecordBase {
    h(a) {
        a._b.iterativeCalculationsEnabled = Convert.toBoolean1(a._av._readUInt16());
    }
    i(a) {
        a._ci._write17(Convert.toUInt16(a._b.iterativeCalculationsEnabled));
    }
    get_d() {
        return 17;
    }
    get d() {
        return this.get_d();
    }
}
ITERATIONRecord.$t = markType(ITERATIONRecord, 'ITERATIONRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class LABELRecord extends CellValueRecordBase {
    o(a, b, c, d, e) {
        let f = ((() => { let g = a._av.readFormattedStringFromBuffer(1, b, c); b = g.p1; c = g.p2; return g.ret; })());
        let g = typeCast(FormattedStringElement.$, f);
        if (g != null && g._u) {
            d = new FormattedString(a._b, g);
        }
        else {
            d = f;
        }
        e = d;
        return {
            p1: b,
            p2: c,
            p3: d,
            p4: e
        };
    }
    p(a, b) {
        a._ci._write13(b);
    }
    get_d() {
        return 516;
    }
    get d() {
        return this.get_d();
    }
}
LABELRecord.$t = markType(LABELRecord, 'LABELRecord', CellValueRecordBase.$);
/**
 * @hidden
 */
export class LABELSSTRecord extends CellValueRecordBase {
    o(a, b, c, d, e) {
        let f = ((() => { let g = a._av._readInt32FromBuffer(b, c); b = g.p0; c = g.p1; return g.ret; })());
        let g = a._u._inner[f];
        let h = typeCast(FormattedStringElement.$, g);
        if (h != null && h._u) {
            d = new FormattedString(a._b, h);
        }
        else {
            d = g;
        }
        e = d;
        return {
            p1: b,
            p2: c,
            p3: d,
            p4: e
        };
    }
    p(a, b) {
        let c = typeCast(StringElementIndex.$, a._cj.c);
        if (c != null) {
            b.write(BitConverter.e(c.c), 0, 4);
        }
        else {
            b.write(BitConverter.e(0), 0, 4);
        }
        a._ci._write13(b);
    }
    get_d() {
        return 253;
    }
    get d() {
        return this.get_d();
    }
}
LABELSSTRecord.$t = markType(LABELSSTRecord, 'LABELSSTRecord', CellValueRecordBase.$);
/**
 * @hidden
 */
export class LEFTMARGINRecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        b.leftMargin = a._av._readDouble();
    }
    i(a) {
        let b = a._b7.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        a._ci._write10(b.leftMargin);
    }
    get_d() {
        return 38;
    }
    get d() {
        return this.get_d();
    }
}
LEFTMARGINRecord.$t = markType(LEFTMARGINRecord, 'LEFTMARGINRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class LIST12Record extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        a._av._readFrtHeader();
        let c = a._av._readUInt16();
        let d = a._av._readUInt32();
        let e = b._tables$i._g(d);
        if (e == null) {
            return;
        }
        switch (c) {
            case 0:
                a._av._readList12BlockLevel(e);
                break;
            case 1:
                a._av._readList12TableStyleClientInfo(e);
                break;
            case 2:
                a._av._readList12DisplayName(e);
                break;
            default: break;
        }
    }
    i(a) {
        let b = a._b7.a(WorksheetTable.$);
        let c = a._b7.a(LIST12Record_LIST12DataType_$type);
        if (b == null) {
            return;
        }
        a._ci._writeFrtHeader();
        a._ci._write17(c);
        a._ci._write18(b._ds);
        switch (c) {
            case 0:
                a._ci._writeList12BlockLevel(b);
                break;
            case 1:
                a._ci._writeList12TableStyleClientInfo(b);
                break;
            case 2:
                a._ci._writeList12DisplayName(b);
                break;
            default: break;
        }
    }
    get_d() {
        return 2167;
    }
    get d() {
        return this.get_d();
    }
}
LIST12Record.$t = markType(LIST12Record, 'LIST12Record', Biff8RecordBase.$);
/**
 * @hidden
 */
export class MERGEDCELLSRecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = ExcelUtils.b8();
        while (a._av.position < a._av.length) {
            let d = a._av._readUInt16();
            for (let e = 0; e < d; e++) {
                let f = a._av._readUInt16();
                let g = a._av._readUInt16();
                let h = a._av._readUInt16();
                let i = a._av._readUInt16();
                let j = ExcelUtils.g9(h, f, i - h, g - f);
                if (c.add_1(j) == false) {
                    continue;
                }
                b._mergedCellsRegions$i._add1(f, h, g, i);
            }
        }
    }
    i(a) {
        let b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        {
            let c = getEnumerator(a._av(b));
            try {
                let d = c.moveNext();
                do {
                    let e = a._ci.position;
                    let f = 0;
                    a._ci._write17(0);
                    while (d && a._ci._bytesAvailableInCurrentBlock >= 8) {
                        let g = c.current;
                        a._ci._write17(g.firstRow);
                        a._ci._write17(g.lastRow);
                        a._ci._write17(g.firstColumn);
                        a._ci._write17(g.lastColumn);
                        f++;
                        d = c.moveNext();
                    }
                    let h = a._ci.position;
                    a._ci.position = e;
                    a._ci._write17(f);
                    a._ci.position = h;
                    a._ci._capCurrentBlock();
                } while (d);
            }
            finally {
                if (c != null) {
                    c.dispose();
                }
            }
        }
    }
    get_d() {
        return 229;
    }
    get d() {
        return this.get_d();
    }
}
MERGEDCELLSRecord.$t = markType(MERGEDCELLSRecord, 'MERGEDCELLSRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class MMSRecord extends Biff8RecordBase {
    h(a) {
        a._av.readByte();
        a._av.readByte();
    }
    i(a) {
        a._ci._write9(0);
        a._ci._write9(0);
    }
    get_d() {
        return 193;
    }
    get d() {
        return this.get_d();
    }
}
MMSRecord.$t = markType(MMSRecord, 'MMSRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class MSODRAWINGGROUPRecord extends Biff8RecordBase {
    h(a) {
        let b = EscherRecordBase.b(a);
    }
    i(a) {
        let b = new DrawingGroupContainer(0, a);
        b.m(a);
    }
    get_d() {
        return 235;
    }
    get d() {
        return this.get_d();
    }
}
MSODRAWINGGROUPRecord.$t = markType(MSODRAWINGGROUPRecord, 'MSODRAWINGGROUPRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class MSODRAWINGRecord extends Biff8RecordBase {
    h(a) {
        let b = EscherRecordBase.b(a);
    }
    i(a) {
        let b = new DrawingContainer(0, a);
        b.m(a);
    }
    get_d() {
        return 236;
    }
    get d() {
        return this.get_d();
    }
}
MSODRAWINGRecord.$t = markType(MSODRAWINGRecord, 'MSODRAWINGRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class MSODRAWINGSELECTIONRecord extends Biff8RecordBase {
    h(a) {
        let b = EscherRecordBase.b(a);
    }
    i(a) {
    }
    get_d() {
        return 237;
    }
    get d() {
        return this.get_d();
    }
}
MSODRAWINGSELECTIONRecord.$t = markType(MSODRAWINGSELECTIONRecord, 'MSODRAWINGSELECTIONRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class MultipleCellValueRecordBase extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = new Array(0);
        let d = 0;
        let e = ((() => { let f = a._av._readUInt16FromBuffer(c, d); c = f.p0; d = f.p1; return f.ret; })());
        let f = ((() => { let g = a._av._readInt16FromBuffer(c, d); c = g.p0; d = g.p1; return g.ret; })());
        let g;
        if (c.length == a._av.length) {
            g = BitConverter.w(c, c.length - 2);
        }
        else {
            a._av.position = a._av.length - 2;
            g = a._av._readUInt16();
        }
        let h = ((() => { let i = this.o(a, g - f + 1, c, d); c = i.p2; d = i.p3; return i.ret; })());
        let i = a._a6(b, e);
        for (let j = 0, k = f; k <= g; j++, k++) {
            let l = a._b2._inner[h[j].b];
            {
                i._d3(k, l);
            }
            i._d6(k, h[j].a);
        }
    }
    i(a) {
        let b = a._b7.a(MultipleCellValueInfo.$);
        if (b == null) {
            return;
        }
        a._ci._write17(b.m);
        a._ci._write17(b.j);
        let c = new Array(b.l);
        for (let d = 0; d < b.l; d++) {
            c[d] = new CellDefinition(1, a._a6(b.d(d)), b.n(d));
        }
        this.p(a, c);
        a._ci._write17(b.k);
    }
}
MultipleCellValueRecordBase.$t = markType(MultipleCellValueRecordBase, 'MultipleCellValueRecordBase', Biff8RecordBase.$);
/**
 * @hidden
 */
export class MULBLANKRecord extends MultipleCellValueRecordBase {
    o(a, b, c, d) {
        let e = new Array(b);
        for (let f = 0; f < b; f++) {
            e[f] = new CellDefinition(1, ((() => { let g = a._av._readUInt16FromBuffer(c, d); c = g.p0; d = g.p1; return g.ret; })()), null);
        }
        return {
            ret: e,
            p2: c,
            p3: d
        };
    }
    p(a, b) {
        for (let c = 0; c < b.length; c++) {
            a._ci._write17(b[c].b);
        }
    }
    get_d() {
        return 190;
    }
    get d() {
        return this.get_d();
    }
}
MULBLANKRecord.$t = markType(MULBLANKRecord, 'MULBLANKRecord', MultipleCellValueRecordBase.$);
/**
 * @hidden
 */
export class MULRKRecord extends MultipleCellValueRecordBase {
    o(a, b, c, d) {
        let e = new Array(b);
        for (let f = 0; f < b; f++) {
            e[f] = new CellDefinition(1, ((() => { let g = a._av._readUInt16FromBuffer(c, d); c = g.p0; d = g.p1; return g.ret; })()), ExcelUtils.ci(((() => { let g = a._av._readUInt32FromBuffer(c, d); c = g.p0; d = g.p1; return g.ret; })())));
        }
        return {
            ret: e,
            p2: c,
            p3: d
        };
    }
    p(a, b) {
        for (let c = 0; c < b.length; c++) {
            a._ci._write17(b[c].b);
            a._ci._write18(typeGetValue(b[c].a));
        }
    }
    get_d() {
        return 189;
    }
    get d() {
        return this.get_d();
    }
}
MULRKRecord.$t = markType(MULRKRecord, 'MULRKRecord', MultipleCellValueRecordBase.$);
/**
 * @hidden
 */
export class CellDefinition extends ValueType {
    constructor(a, ..._rest) {
        super();
        this.a = null;
        this.b = 0;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    this.a = d;
                    this.b = c;
                }
                break;
        }
    }
}
CellDefinition.$t = markStruct(CellDefinition, 'CellDefinition');
/**
 * @hidden
 */
export class NAMEEXTRecord extends Biff8RecordBase {
    h(a) {
        let b = a._av._readUInt16();
        a._av._readUInt16();
        a._av._readUInt32();
        a._av._readUInt32();
        let c = a._av._readUInt16();
        let d = a._av._readUInt16();
        let e = a._av._readFormattedString1(c)._y;
        let f = a._av._readFormattedString1(d)._y;
        let g = a._b._bb.u;
        let h = g.item(g.count - 1);
        h.comment = f;
    }
    i(a) {
        let b = a._b7.a(NamedReferenceBase.$);
        if (b == null) {
            return;
        }
        a._ci._write17(this.d);
        a._ci._write17(0);
        a._ci._write19(0);
        a._ci._write17(b.name.length);
        a._ci._write17(b.comment.length);
        a._ci._write14(b.name);
        a._ci._write14(b.comment);
    }
    get_d() {
        return 2196;
    }
    get d() {
        return this.get_d();
    }
}
NAMEEXTRecord.$t = markType(NAMEEXTRecord, 'NAMEEXTRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class NAMERecord extends Biff8RecordBase {
    h(a) {
        let b = new Array(0);
        let c = 0;
        let d = ((() => { let e = a._av._readUInt16FromBuffer(b, c); b = e.p0; c = e.p1; return e.ret; })());
        let e = (d & 1) == 1;
        let f = (d & 2) == 2;
        let g = (d & 4) == 4;
        let h = (d & 8) == 8;
        let i = (d & 32) == 32;
        let j = (d & 4096) == 4096;
        if (j) {
            return;
        }
        let k = a._av.readByteFromBuffer(b, c);
        b = k.p0;
        c = k.p1;
        let l = ((() => { let m = a._av.readByteFromBuffer(b, c); b = m.p0; c = m.p1; return m.ret; })());
        let m = ((() => { let n = a._av._readUInt16FromBuffer(b, c); b = n.p0; c = n.p1; return n.ret; })());
        let n = a._av._readUInt16FromBuffer(b, c);
        b = n.p0;
        c = n.p1;
        let o = ((() => { let p = a._av._readUInt16FromBuffer(b, c); b = p.p0; c = p.p1; return p.ret; })());
        let p = ((() => { let q = a._av.readByteFromBuffer(b, c); b = q.p0; c = q.p1; return q.ret; })());
        let q = ((() => { let r = a._av.readByteFromBuffer(b, c); b = r.p0; c = r.p1; return r.ret; })());
        let r = ((() => { let s = a._av.readByteFromBuffer(b, c); b = s.p0; c = s.p1; return s.ret; })());
        let s = ((() => { let t = a._av.readByteFromBuffer(b, c); b = t.p0; c = t.p1; return t.ret; })());
        let t = ((() => { let u = a._av._readFormattedStringFromBuffer1(l, b, c); b = u.p1; c = u.p2; return u.ret; })())._y;
        if (f && stringStartsWith(t, "_xlfn.")) {
            t = t.substr(6);
        }
        let u = ((() => { let v = a._au(3, m, b, c); b = v.p2; c = v.p3; return v.ret; })());
        if (p > 0) {
            let v = a._av._readFormattedStringFromBuffer1(p, b, c);
            b = v.p1;
            c = v.p2;
        }
        if (q > 0) {
            let w = a._av._readFormattedStringFromBuffer1(q, b, c);
            b = w.p1;
            c = w.p2;
        }
        if (r > 0) {
            let x = a._av._readFormattedStringFromBuffer1(r, b, c);
            b = x.p1;
            c = x.p2;
        }
        if (s > 0) {
            let y = a._av._readFormattedStringFromBuffer1(s, b, c);
            b = y.p1;
            c = y.p2;
        }
        let z = a._b;
        if (o > 0) {
            z = a._b._worksheets$i._item(o - 1);
        }
        if (i) {
            t = NamedReferenceBase._av(t.charAt(0).charCodeAt(0));
        }
        let aa = new NamedReference(1, a._b._namedReferences$i, z, e);
        aa._bd(t, false);
        a._b._bb.aj(aa);
        aa._v = f;
        aa._x = h;
        a._cf(aa, u, e);
    }
    i(a) {
        let b = a._b7.a(NamedReferenceBase.$);
        if (b == null) {
            return;
        }
        let c = b.name;
        if (b._r) {
            c = String.fromCharCode(b._c).toString();
        }
        let d = 0;
        if (b._p) {
            d |= 1;
        }
        if (b._v) {
            c = "_xlfn." + c;
            d |= 2;
        }
        if (b._x) {
            d |= 8;
        }
        if (b._r) {
            d |= 32;
        }
        a._ci._write17(d);
        a._ci._write9(0);
        a._ci._write9(c.length);
        a._ci._write17(0);
        a._ci._write17(0);
        if (typeCast(Workbook.$, b.scope) !== null) {
            a._ci._write17(0);
        }
        else {
            let e = a._az.indexOf(b.scope);
            a._ci._write17((e + 1));
        }
        a._ci._write9(0);
        a._ci._write9(0);
        a._ci._write9(0);
        a._ci._write9(0);
        a._ci._write14(c);
        let f = 0;
        if (b._j != null) {
            f = a._c2(b._j, false, false);
        }
        a._ci.position = 4;
        a._ci._write17(f);
        a._ci.position = a._ci.length;
    }
    get_d() {
        return 24;
    }
    get d() {
        return this.get_d();
    }
}
NAMERecord.$t = markType(NAMERecord, 'NAMERecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class NOTERecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = a._av._readUInt16();
        let d = a._av._readInt16();
        let e = b._rows$i.item(c);
        let f = a._av._readUInt16();
        let g = a._av._readUInt16();
        let h = a._av._readFormattedString(1);
        for (let i = 0; i < a._b4.count; i++) {
            let j = a._b4._inner[i];
            if (j._b0.hasValue == false || j._b0.value != 202) {
                continue;
            }
            if (j._h == null || j._h.e == null) {
                continue;
            }
            if (j._h.e.t != g) {
                continue;
            }
            j.author = h._y;
            j._ec = f;
            e._d2(d, j);
            a._b4.removeAt(i);
            return;
        }
    }
    i(a) {
        let b = a._b7.a(WorksheetCell.$);
        if (WorksheetCell.l_op_Equality(b, null)) {
            return;
        }
        if (b.worksheet == null) {
            return;
        }
        if (b.comment == null) {
            return;
        }
        if (b.comment._h == null && b.comment._h.e == null) {
            return;
        }
        a._ci._write17(b.rowIndex);
        a._ci._write17(b.columnIndex);
        a._ci._write17(b.comment._ec);
        a._ci._write17(b.comment._h.e.t);
        a._ci._write15(b.comment.author, 1);
        if (a._ci.length % 2 == 0) {
            a._ci._write9(0);
        }
    }
    get_d() {
        return 28;
    }
    get d() {
        return this.get_d();
    }
}
NOTERecord.$t = markType(NOTERecord, 'NOTERecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class NUMBERRecord extends CellValueRecordBase {
    o(a, b, c, d, e) {
        d = ((() => { let f = a._av.readDoubleFromBuffer(b, c); b = f.p0; c = f.p1; return f.ret; })());
        e = d;
        return {
            p1: b,
            p2: c,
            p3: d,
            p4: e
        };
    }
    p(a, b) {
        b.write(BitConverter.c(Convert.toDouble4(a._cj.c, a._b._e6)), 0, 8);
        a._ci._write13(b);
    }
    get_d() {
        return 515;
    }
    get d() {
        return this.get_d();
    }
}
NUMBERRecord.$t = markType(NUMBERRecord, 'NUMBERRecord', CellValueRecordBase.$);
/**
 * @hidden
 */
export class OBJPROTECTRecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        b.protection.allowEditObjects = (a._av._readUInt16() != 1);
    }
    i(a) {
        let b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        a._ci._write17(Convert.toUInt16(b.protection.allowEditObjects == false));
    }
    get_d() {
        return 99;
    }
    get d() {
        return this.get_d();
    }
}
OBJPROTECTRecord.$t = markType(OBJPROTECTRecord, 'OBJPROTECTRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class OBJRecord extends Biff8RecordBase {
    h(a) {
        let b = new Obj(0);
        ObjExtensionMethods.w(b, a);
    }
    i(a) {
    }
    get_d() {
        return 93;
    }
    get d() {
        return this.get_d();
    }
}
OBJRecord.$t = markType(OBJRecord, 'OBJRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class OBPROJRecord extends Biff8RecordBase {
    h(a) {
    }
    i(a) {
    }
    get_d() {
        return 211;
    }
    get d() {
        return this.get_d();
    }
}
OBPROJRecord.$t = markType(OBPROJRecord, 'OBPROJRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class OLESIZERecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Workbook.$);
        let c = a._av;
        let d = new Array(0);
        let e = 0;
        let f = ((() => { let g = c._readUInt16FromBuffer(d, e); d = g.p0; e = g.p1; return g.ret; })());
        let g = ((() => { let h = c._readUInt16FromBuffer(d, e); d = h.p0; e = h.p1; return h.ret; })());
        let h = ((() => { let i = c._readUInt16FromBuffer(d, e); d = i.p0; e = i.p1; return i.ret; })());
        let i = ((() => { let j = c.readByteFromBuffer(d, e); d = j.p0; e = j.p1; return j.ret; })());
        let j = ((() => { let k = c.readByteFromBuffer(d, e); d = k.p0; e = k.p1; return k.ret; })());
        if (g == 0 && h == 16383) {
            h = 65535;
        }
        b._gn = Nullable$1.toNullable(WorksheetRegionAddress.$, new WorksheetRegionAddress(1, g, h, i, j));
    }
    i(a) {
    }
    get_d() {
        return 222;
    }
    get d() {
        return this.get_d();
    }
}
OLESIZERecord.$t = markType(OLESIZERecord, 'OLESIZERecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class PAGELAYOUTINFORecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = a._av._readUInt16();
        a._av._readUInt16();
        a._av._readBytes(8);
        let d = a._av._readUInt16();
        if (d == 0) {
            d = 100;
        }
        let e = ExcelUtils.fj(d);
        d = e.p0;
        b.displayOptions.magnificationInPageLayoutView = d;
        let f = a._av._readUInt16();
        let g = (f & 1) == 1;
        b.displayOptions.showRulerInPageLayoutView = (f & 2) == 2;
        b.displayOptions.showWhitespaceInPageLayoutView = (f & 4) != 4;
        if (g) {
            b.displayOptions.view = 1;
        }
    }
    i(a) {
        let b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        a._ci._write17(this.d);
        a._ci._write17(0);
        a._ci._write2(new Array(8));
        a._ci._write17(b.displayOptions.magnificationInPageLayoutView);
        let c = 0;
        if (b.displayOptions.view == 1) {
            c |= 1;
        }
        if (b.displayOptions.showRulerInPageLayoutView) {
            c |= 2;
        }
        if (b.displayOptions.showWhitespaceInPageLayoutView == false) {
            c |= 4;
        }
        a._ci._write17(c);
    }
    get_d() {
        return 2187;
    }
    get d() {
        return this.get_d();
    }
}
PAGELAYOUTINFORecord.$t = markType(PAGELAYOUTINFORecord, 'PAGELAYOUTINFORecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class PALETTERecord extends Biff8RecordBase {
    h(a) {
        let b = a._b._palette$i;
        let c = a._av._readUInt16();
        c = Math.min(c, 56);
        for (let d = 0; d < c; d++) {
            let e = a._av.readByte();
            let f = a._av.readByte();
            let g = a._av.readByte();
            a._av.readByte();
            b._item$i(d, ExcelUtils.gw(e, f, g));
        }
    }
    i(a) {
        let b = a._b._palette$i;
        a._ci._write17(56);
        for (let c = 0; c < 56; c++) {
            let d = b._item$i(c);
            a._ci._write9(d.o);
            a._ci._write9(d.n);
            a._ci._write9(d.m);
            a._ci._write9(0);
        }
    }
    get_d() {
        return 146;
    }
    get d() {
        return this.get_d();
    }
}
PALETTERecord.$t = markType(PALETTERecord, 'PALETTERecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class PANERecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = a._av._readUInt16();
        let d = a._av._readUInt16();
        let e = a._av._readUInt16();
        let f = a._av._readUInt16();
        let g = a._av._readUInt16();
        b.displayOptions._z = g;
        if (b.displayOptions.panesAreFrozen) {
            if (c > 0) {
                b.displayOptions.unfrozenPaneSettings.firstColumnInLeftPane = b.displayOptions.frozenPaneSettings.firstColumnInRightPane;
                b.displayOptions.frozenPaneSettings.firstColumnInRightPane = f;
            }
            if (d > 0) {
                b.displayOptions.unfrozenPaneSettings.firstRowInTopPane = b.displayOptions.frozenPaneSettings.firstRowInBottomPane;
                b.displayOptions.frozenPaneSettings.firstRowInBottomPane = e;
            }
            b.displayOptions.frozenPaneSettings.frozenColumns = c;
            b.displayOptions.frozenPaneSettings.frozenRows = d;
        }
        else {
            if (c > 0) {
                b.displayOptions.unfrozenPaneSettings.firstColumnInLeftPane = b.displayOptions.unfrozenPaneSettings.firstColumnInRightPane;
                b.displayOptions.unfrozenPaneSettings.firstColumnInRightPane = f;
            }
            if (d > 0) {
                b.displayOptions.unfrozenPaneSettings.firstRowInTopPane = b.displayOptions.unfrozenPaneSettings.firstRowInBottomPane;
                b.displayOptions.unfrozenPaneSettings.firstRowInBottomPane = e;
            }
            b.displayOptions.unfrozenPaneSettings.leftPaneWidth = c;
            b.displayOptions.unfrozenPaneSettings.topPaneHeight = d;
        }
    }
    i(a) {
        let b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        b.displayOptions._br();
        if (b.displayOptions.panesAreFrozen) {
            let c = b.displayOptions.frozenPaneSettings.frozenRows;
            let d = b.displayOptions.frozenPaneSettings.frozenColumns;
            a._ci._write17(d);
            a._ci._write17(c);
            if (b.displayOptions.frozenPaneSettings.frozenRows > 0) {
                let e = Math.max(c, b.displayOptions.frozenPaneSettings.firstRowInBottomPane);
                a._ci._write17(e);
            }
            else {
                a._ci._write17(0);
            }
            if (b.displayOptions.frozenPaneSettings.frozenColumns > 0) {
                let f = Math.max(d, b.displayOptions.frozenPaneSettings.firstColumnInRightPane);
                a._ci._write17(f);
            }
            else {
                a._ci._write17(0);
            }
        }
        else {
            let g = b.displayOptions.unfrozenPaneSettings.leftPaneWidth;
            let h = b.displayOptions.unfrozenPaneSettings.topPaneHeight;
            a._ci._write17(g);
            a._ci._write17(h);
            if (h > 0) {
                a._ci._write17(b.displayOptions.unfrozenPaneSettings.firstRowInBottomPane);
            }
            else {
                a._ci._write17(0);
            }
            if (g > 0) {
                a._ci._write17(b.displayOptions.unfrozenPaneSettings.firstColumnInRightPane);
            }
            else {
                a._ci._write17(0);
            }
        }
        a._ci._write17(b.displayOptions._z);
    }
    get_d() {
        return 65;
    }
    get d() {
        return this.get_d();
    }
}
PANERecord.$t = markType(PANERecord, 'PANERecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class PASSWORDRecord extends Biff8RecordBase {
    h(a) {
        let b = a._av._readUInt16();
        if (b == 0) {
            return;
        }
        let c = ProtectionValidationInfo.c(b);
        let d = a._ai.a(Worksheet.$);
        if (d == null) {
            a._b.protection._b.b = c;
            return;
        }
        d.protection._c.b = c;
    }
    i(a) {
        let b = a._b7.a(Worksheet.$);
        let c;
        if (b == null) {
            c = (((d) => !nullableIsNull(d) ? d.value : 0)(a._b.protection._b.h()));
        }
        else {
            c = (((d) => !nullableIsNull(d) ? d.value : 0)(b.protection._c.h()));
            if (c == 0) {
                return;
            }
        }
        a._ci._write17(c);
    }
    get_d() {
        return 19;
    }
    get d() {
        return this.get_d();
    }
}
PASSWORDRecord.$t = markType(PASSWORDRecord, 'PASSWORDRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class PLSRecord extends Biff8RecordBase {
    h(a) {
    }
    i(a) {
    }
    get_d() {
        return 77;
    }
    get d() {
        return this.get_d();
    }
}
PLSRecord.$t = markType(PLSRecord, 'PLSRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class PRECISIONRecord extends Biff8RecordBase {
    h(a) {
        a._b.precision = a._av._readUInt16();
    }
    i(a) {
        a._ci._write17(a._b.precision);
    }
    get_d() {
        return 14;
    }
    get d() {
        return this.get_d();
    }
}
PRECISIONRecord.$t = markType(PRECISIONRecord, 'PRECISIONRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class PRINTGRIDLINESRecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        b.printOptions.printGridlines = Convert.toBoolean1(a._av._readUInt16());
    }
    i(a) {
        let b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        a._ci._write17(Convert.toUInt16(b.printOptions.printGridlines));
    }
    get_d() {
        return 43;
    }
    get d() {
        return this.get_d();
    }
}
PRINTGRIDLINESRecord.$t = markType(PRINTGRIDLINESRecord, 'PRINTGRIDLINESRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class PRINTHEADERSRecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        b.printOptions.printRowAndColumnHeaders = Convert.toBoolean1(a._av._readUInt16());
    }
    i(a) {
        let b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        a._ci._write17(Convert.toUInt16(b.printOptions.printRowAndColumnHeaders));
    }
    get_d() {
        return 42;
    }
    get d() {
        return this.get_d();
    }
}
PRINTHEADERSRecord.$t = markType(PRINTHEADERSRecord, 'PRINTHEADERSRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class PROT4REVPASSRecord extends Biff8RecordBase {
    h(a) {
        a._av._readUInt16();
    }
    i(a) {
        a._ci._write17(0);
    }
    get_d() {
        return 444;
    }
    get d() {
        return this.get_d();
    }
}
PROT4REVPASSRecord.$t = markType(PROT4REVPASSRecord, 'PROT4REVPASSRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class PROT4REVRecord extends Biff8RecordBase {
    h(a) {
        a._av._readUInt16();
    }
    i(a) {
        a._ci._write17(0);
    }
    get_d() {
        return 431;
    }
    get d() {
        return this.get_d();
    }
}
PROT4REVRecord.$t = markType(PROT4REVRecord, 'PROT4REVRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class PROTECTRecord extends Biff8RecordBase {
    h(a) {
        let b = a._av._readUInt16() == 1;
        let c = a._ai.a(Worksheet.$);
        if (c != null) {
            c.protection._c.j(b);
        }
        else {
            a._b.protection.allowEditStructure = b == false;
            a._b.protection._b.j(b || a._b.isProtected);
        }
    }
    i(a) {
        let b;
        let c = a._b7.a(Worksheet.$);
        if (c != null) {
            b = c.isProtected;
        }
        else {
            b = a._b.isProtected && a._b.protection.allowEditStructure == false;
        }
        a._ci._write17(Convert.toUInt16(b));
    }
    get_d() {
        return 18;
    }
    get d() {
        return this.get_d();
    }
}
PROTECTRecord.$t = markType(PROTECTRecord, 'PROTECTRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class RECALCIDRecord extends Biff8RecordBase {
    h(a) {
        let b = a._av._readUInt16();
        let c = a._av._readUInt16();
        a._av._readUInt32();
    }
    i(a) {
    }
    get_d() {
        return 449;
    }
    get d() {
        return this.get_d();
    }
}
RECALCIDRecord.$t = markType(RECALCIDRecord, 'RECALCIDRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class REFMODERecord extends Biff8RecordBase {
    h(a) {
        a._b.cellReferenceMode = a._av._readUInt16();
    }
    i(a) {
        a._ci._write17(a._b.cellReferenceMode);
    }
    get_d() {
        return 15;
    }
    get d() {
        return this.get_d();
    }
}
REFMODERecord.$t = markType(REFMODERecord, 'REFMODERecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class REFRESHALLRecord extends Biff8RecordBase {
    h(a) {
        a._b._dj = Convert.toBoolean1(a._av._readUInt16());
    }
    i(a) {
        a._ci._write17(Convert.toUInt16(a._b._dj));
    }
    get_d() {
        return 439;
    }
    get d() {
        return this.get_d();
    }
}
REFRESHALLRecord.$t = markType(REFRESHALLRecord, 'REFRESHALLRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class RIGHTMARGINRecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        b.rightMargin = a._av._readDouble();
    }
    i(a) {
        let b = a._b7.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        a._ci._write10(b.rightMargin);
    }
    get_d() {
        return 39;
    }
    get d() {
        return this.get_d();
    }
}
RIGHTMARGINRecord.$t = markType(RIGHTMARGINRecord, 'RIGHTMARGINRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class RKRecord extends CellValueRecordBase {
    o(a, b, c, d, e) {
        d = ExcelUtils.ci(((() => { let f = a._av._readUInt32FromBuffer(b, c); b = f.p0; c = f.p1; return f.ret; })()));
        e = d;
        return {
            p1: b,
            p2: c,
            p3: d,
            p4: e
        };
    }
    p(a, b) {
        let c = 0;
        if (((() => { let d = ExcelUtils.bz(Convert.toDouble4(a._cj.c, a._b._e6), c); c = d.p1; return d.ret; })()) == false) {
        }
        b.write(BitConverter.i(c), 0, 4);
        a._ci._write13(b);
    }
    get_d() {
        return 638;
    }
    get d() {
        return this.get_d();
    }
}
RKRecord.$t = markType(RKRecord, 'RKRecord', CellValueRecordBase.$);
/**
 * @hidden
 */
export class ROWRecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = new Array(0);
        let d = 0;
        let e = ((() => { let f = a._av._readUInt16FromBuffer(c, d); c = f.p0; d = f.p1; return f.ret; })());
        let f = b._rows$i.item(e);
        a._cm(f);
        d += 4;
        let g = ((() => { let h = a._av._readUInt16FromBuffer(c, d); c = h.p0; d = h.p1; return h.ret; })());
        d += 4;
        let h = ((() => { let i = a._av._readUInt32FromBuffer(c, d); c = i.p0; d = i.p1; return i.ret; })());
        f.outlineLevel = (h & 7);
        let i = (h & 32) == 32;
        let j = (h & 64) == 64;
        let k = (h & 128) == 128;
        let l = ((h & 268369920) >>> 16);
        f._b4 = (h & 268435456) == 268435456;
        f._b1 = (h & 536870912) == 536870912;
        if (j) {
            f.height = g;
        }
        else if (b._d4) {
            f._cm = g;
        }
        f.hidden = i;
        if (k == false) {
            return;
        }
        let m = a._b2._inner[l];
        if (m._ca(a._b._ca._p) == false) {
            f.cellFormat.setFormatting(m);
        }
    }
    i(a) {
        let b = a._b7.a(WorksheetRow.$);
        if (b == null) {
            return;
        }
        let c = a._u(b);
        if (c == null) {
            return;
        }
        let d = new MemoryStream(1, 16);
        d.write(BitConverter.h(b.index), 0, 2);
        d.write(BitConverter.h(c.c), 0, 2);
        d.write(BitConverter.h(c.d), 0, 2);
        let e = b._cm < 0 ? b.worksheet.defaultRowHeight : b._cm;
        d.write(BitConverter.h(e), 0, 2);
        d.write(BitConverter.i(intSToU(0)), 0, 4);
        let f = 256;
        f = u32BitwiseOr(f, intSToU(b.outlineLevel));
        if (c.a) {
            f = u32BitwiseOr(f, 16);
        }
        if (b.hidden) {
            f = u32BitwiseOr(f, 32);
        }
        let g = a._b._ca._p;
        let h = b._hasCellFormat ? b._cellFormatInternal.d : g;
        if (b._bz) {
            f = u32BitwiseOr(f, 64);
        }
        let i = a._a6(h);
        if (i < 0) {
            i = 0;
        }
        if (h._ca(g) == false) {
            f = u32BitwiseOr(f, 128);
        }
        f = u32BitwiseOr(f, u32LS(intSToU(i), 16));
        if (b._b4) {
            f = u32BitwiseOr(f, 268435456);
        }
        if (b._b1) {
            f = u32BitwiseOr(f, 536870912);
        }
        d.write(BitConverter.i(f), 0, 4);
        a._ci._write13(d);
    }
    get_d() {
        return 520;
    }
    get d() {
        return this.get_d();
    }
}
ROWRecord.$t = markType(ROWRecord, 'ROWRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class RSTRINGRecord extends CellValueRecordBase {
    o(a, b, c, d, e) {
        let f = a._av;
        let g = ((() => { let h = f.readFormattedStringFromBuffer(1, b, c); b = h.p1; c = h.p2; return h.ret; })());
        let h = typeCast(FormattedStringElement.$, g);
        if (h == null) {
            let i = ((() => { let j = f._readUInt16FromBuffer(b, c); b = j.p0; c = j.p1; return j.ret; })());
            h = FormattedStringElement._af(g);
            let j = f._readFormattingRunsFromBuffer(h, i, b, c);
            b = j.p2;
            c = j.p3;
        }
        d = new FormattedString(a._b, h);
        e = d;
        return {
            p1: b,
            p2: c,
            p3: d,
            p4: e
        };
    }
    p(a, b) {
        a._ci._write13(b);
    }
    get_d() {
        return 214;
    }
    get d() {
        return this.get_d();
    }
}
RSTRINGRecord.$t = markType(RSTRINGRecord, 'RSTRINGRecord', CellValueRecordBase.$);
/**
 * @hidden
 */
export class SAVERECALCRecord extends Biff8RecordBase {
    h(a) {
        a._b.recalculateBeforeSave = Convert.toBoolean1(a._av._readUInt16());
    }
    i(a) {
        a._ci._write17(Convert.toUInt16(a._b.recalculateBeforeSave));
    }
    get_d() {
        return 95;
    }
    get d() {
        return this.get_d();
    }
}
SAVERECALCRecord.$t = markType(SAVERECALCRecord, 'SAVERECALCRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class SCENPROTECTRecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        b.protection.allowEditScenarios = (a._av._readUInt16() != 1);
    }
    i(a) {
        let b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        a._ci._write17(Convert.toUInt16(b.protection.allowEditScenarios == false));
    }
    get_d() {
        return 221;
    }
    get d() {
        return this.get_d();
    }
}
SCENPROTECTRecord.$t = markType(SCENPROTECTRecord, 'SCENPROTECTRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class SCLRecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = a._av._readUInt16();
        let d = a._av._readUInt16();
        let e = truncate(((c / d) * 100));
        let f = ExcelUtils.fj(e);
        e = f.p0;
        if (b.displayOptions.view == 0) {
            b.displayOptions.magnificationInNormalView = e;
        }
        else if (b.displayOptions.view == 2) {
            b.displayOptions.magnificationInPageBreakView = e;
        }
        else {
            b.displayOptions.magnificationInPageLayoutView = e;
        }
    }
    i(a) {
        let b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c;
        if (b.displayOptions.view == 0) {
            c = b.displayOptions.magnificationInNormalView;
        }
        else if (b.displayOptions.view == 2) {
            c = b.displayOptions.magnificationInPageBreakView;
        }
        else {
            c = b.displayOptions.magnificationInPageLayoutView;
        }
        let d = c;
        let e = 100;
        let f = ExcelUtils.fz(d, e);
        d = f.p0;
        e = f.p1;
        a._ci._write17(d);
        a._ci._write17(e);
    }
    get_d() {
        return 160;
    }
    get d() {
        return this.get_d();
    }
}
SCLRecord.$t = markType(SCLRecord, 'SCLRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class SELECTIONRecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(DisplayOptions.$);
        let c = new WorksheetPaneSelection();
        c.a = a._av.readByte();
        let d = a._av._readUInt16();
        let e = a._av._readUInt16();
        c.b = new WorksheetCellAddress(1, d, e);
        c.f = a._av._readUInt16();
        let f = a._av._readUInt16();
        for (let g = 0; g < f; g++) {
            let h = a._av._readUInt16();
            let i = a._av._readUInt16();
            let j = a._av.readByte();
            let k = a._av.readByte();
            if (h == 0 && i == 16383) {
                i = 65535;
            }
            c.d.add(new WorksheetRegionAddress(1, h, i, j, k));
        }
        b._af.b.add(c);
    }
    i(a) {
        let b = a._b7.a(WorksheetPaneSelection.$) || WorksheetPaneSelection.c(3);
        a._ci._write9(b.a);
        a._ci._write17(b.b.o);
        a._ci._write17(b.b.m);
        a._ci._write17(b.f);
        a._ci._write17(b.d.count);
        for (let c of fromEnum(b.d)) {
            a._ci._write17(c._ac);
            a._ci._write17(c._ae);
            a._ci._write9(c._w);
            a._ci._write9(c._x);
        }
    }
    get_d() {
        return 29;
    }
    get d() {
        return this.get_d();
    }
}
SELECTIONRecord.$t = markType(SELECTIONRecord, 'SELECTIONRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class SETUPRecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        let c = a._av._readUInt16();
        let d = a._av._readUInt16();
        b.startPageNumber = a._av._readInt16();
        b.maxPagesHorizontally = a._av._readUInt16();
        b.maxPagesVertically = a._av._readUInt16();
        let e = a._av._readUInt16();
        let f = a._av._readUInt16();
        let g = a._av._readUInt16();
        b.headerMargin = a._av._readDouble();
        b.footerMargin = a._av._readDouble();
        let h = a._av._readUInt16();
        b.pageOrder = (e & 1);
        let i = ((e & 2) >> 1);
        let j = (e & 4) == 4;
        b.printInBlackAndWhite = (e & 8) == 8;
        b.draftQuality = (e & 16) == 16;
        let k = (e & 32) == 32;
        let l = (e & 64) == 64;
        b.pageNumbering = ((e & 128) >> 7);
        let m = (e & 512) == 512;
        b.printErrors = ((e & 3072) >> 10);
        if (j) {
            c = 1;
            d = 100;
            i = 1;
            f = 600;
            g = 600;
            h = 1;
        }
        else if (l) {
            i = 1;
        }
        if (EnumUtil.isDefined(PaperSize_$type, enumGetBox(PaperSize_$type, c)) == false) {
            c = 1;
        }
        b.paperSize = c;
        b._dq(d, false);
        b.resolution = f;
        b.verticalResolution = g;
        b.numberOfCopies = h;
        b.orientation = i;
        if (k) {
            if (m) {
                b.printNotes = 2;
            }
            else {
                b.printNotes = 1;
            }
        }
        else {
            b.printNotes = 0;
        }
    }
    i(a) {
        let b = a._b7.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        a._ci._write17(b.paperSize);
        a._ci._write17(b.scalingFactor);
        a._ci._write17(b.startPageNumber);
        a._ci._write17(b.maxPagesHorizontally);
        a._ci._write17(b.maxPagesVertically);
        let c = 0;
        c |= b.pageOrder;
        c |= (b.orientationResolved << 1);
        if (b.printInBlackAndWhite) {
            c |= 8;
        }
        if (b.draftQuality) {
            c |= 16;
        }
        if (b.printNotes != 0) {
            c |= 32;
        }
        c |= (b.pageNumbering << 7);
        if (b.printNotes == 2) {
            c |= 512;
        }
        c |= (b.printErrors << 10);
        a._ci._write17(c);
        a._ci._write17(b.resolution);
        a._ci._write17(b.verticalResolution);
        a._ci._write10(b.headerMargin);
        a._ci._write10(b.footerMargin);
        a._ci._write17(b.numberOfCopies);
    }
    get_d() {
        return 161;
    }
    get d() {
        return this.get_d();
    }
}
SETUPRecord.$t = markType(SETUPRecord, 'SETUPRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class SHEETEXTRecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        a._av._readFrtHeader();
        let c = a._av._readUInt32();
        let d = a._av._readUInt32();
        let e = ExcelUtils.c7(d, 0, 6);
        if (c < 40) {
            b.displayOptions.tabColorInfo = new WorkbookColorInfo(a._b, e);
        }
        else {
            let f = a._av._readUInt32();
            let g = ExcelUtils.c7(f, 0, 6);
            let h = ExcelUtils.bu(f, 7);
            let i = ExcelUtils.bu(f, 8);
            b.displayOptions.tabColorInfo = a._av._readCFColor();
        }
    }
    i(a) {
        let b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        a._ci._writeFrtHeader();
        a._ci._write18(40);
        let c = b.displayOptions.tabColorInfo;
        let d = c._y(a._b, 4);
        a._ci._write12(d);
        let e = 0;
        let f = ExcelUtils.e2(e, d, 0, 6);
        e = f.p0;
        let g = ExcelUtils.f9(e, true, 7);
        e = g.p0;
        let h = ExcelUtils.f9(e, false, 8);
        e = h.p0;
        a._ci._write18(e);
        a._ci._writeCFColor(c, 4);
    }
    get_d() {
        return 2146;
    }
    get d() {
        return this.get_d();
    }
}
SHEETEXTRecord.$t = markType(SHEETEXTRecord, 'SHEETEXTRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class SHRFMLARecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = new Array(0);
        let d = 0;
        let e = ((() => { let f = a._av._readUInt16FromBuffer(c, d); c = f.p0; d = f.p1; return f.ret; })());
        let f = ((() => { let g = a._av._readUInt16FromBuffer(c, d); c = g.p0; d = g.p1; return g.ret; })());
        let g = ((() => { let h = a._av.readByteFromBuffer(c, d); c = h.p0; d = h.p1; return h.ret; })());
        let h = ((() => { let i = a._av.readByteFromBuffer(c, d); c = i.p0; d = i.p1; return i.ret; })());
        let i = a._av.readByteFromBuffer(c, d);
        c = i.p0;
        d = i.p1;
        let j = a._av.readByteFromBuffer(c, d);
        c = j.p0;
        d = j.p1;
        let k = ((() => { let l = a._at(2, c, d); c = l.p1; d = l.p2; return l.ret; })());
        b._h2(k, b._cx(e, g, f, h));
        let l = b._rows$i.item(e);
        a._bl.item(new WorksheetCellAddress(1, e, g), k);
        let m = new List$1(KeyValuePair$2.$.specialize(WorksheetCellAddress.$, ExcelCalcValue.$), 1, a._bk);
        for (let n of fromEnum(m)) {
            let o = n.key;
            let p = n.value;
            let q = o.o;
            let r = o.m;
            if (e <= q && q <= f && g <= r && r <= h) {
                a._bk.removeItem(o);
                let s = b._rows$i.item(q);
                k._bp(s, r);
                s._d0(r, p);
                let t = s._ar(r);
                a._bl.item(new WorksheetCellAddress(1, q, r), t);
            }
        }
    }
    i(a) {
        let b = a._cj;
        let c = ExcelUtils.z(b.c);
        if (c == null) {
            return;
        }
        let d = a._b7.a(Worksheet.$);
        if (d == null) {
            return;
        }
        let e = d._c2(c);
        a._ci._writeRefU(e);
        a._ci.writeByte(0);
        a._ci.writeByte((e._aa * e._ad));
        a._c2(c, true, false, false);
    }
    get_d() {
        return 1212;
    }
    get d() {
        return this.get_d();
    }
}
SHRFMLARecord.$t = markType(SHRFMLARecord, 'SHRFMLARecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class SORTDATA12Record extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        a._av._readFrtHeader();
        let c = a._av._readUInt16();
        let d = ExcelUtils.bt(c, 0);
        let e = ExcelUtils.bt(c, 1);
        let f = ExcelUtils.bt(c, 2);
        let g = ExcelUtils.c6(c, 3, 5);
        let h = a._av._readRFX(b);
        let i = a._av._readUInt32();
        let j = a._av._readUInt32();
        let k = b._tables$i._g(j);
        if (k != null) {
            if (g != 1) {
                return;
            }
            SORTDATA12Record.o(WorksheetTableColumn.$, a, b, k.sortSettings, k._by, e, f, i, (l) => k._columns$i._item(l));
        }
        else {
            a._av.position -= 4;
            if (g != 0) {
                return;
            }
            b.filterSettings._bm(h);
            SORTDATA12Record.o(RelativeIndex.$, a, b, b.filterSettings.sortSettings, h._h, e, f, i, (l) => new RelativeIndex(l));
        }
    }
    static o($t, a, b, c, d, e, f, g, h) {
        c.caseSensitive = e;
        c._i = (f || a._b._e6.name == "zh-TW") ? 2 : 1;
        for (let i = 0; i < g; i++) {
            a._av._readSortCond12$1($t, b, c, d, h);
        }
    }
    i(a) {
        let b = a._b7.a(WorksheetTable.$);
        if (b != null) {
            SORTDATA12Record.p(WorksheetTableColumn.$, a, b.sortSettings, b._bs, b._ds, true, false, false, (c) => c._ai);
            return;
        }
        let c = a._b7.a(WorksheetFilterSettings.$);
        if (c == null) {
            return;
        }
        SORTDATA12Record.p(RelativeIndex.$, a, c.sortSettings, c.region, 0, false, true, false, (d) => c._ad(d));
    }
    static p($t, a, b, c, d, e, f, g, h) {
        a._ci._writeFrtHeader();
        let i = f ? 0 : 1;
        let j = b._n;
        let k = 0;
        let l = ExcelUtils.f7(k, false, 0);
        k = l.p0;
        let m = ExcelUtils.f7(k, b.caseSensitive, 1);
        k = m.p0;
        let n = ExcelUtils.f7(k, j, 2);
        k = n.p0;
        let o = ExcelUtils.e1(k, i, 3, 5);
        k = o.p0;
        a._ci._write17(k);
        a._ci._writeRFX(c);
        a._ci._write18(intSToU(b._sortConditions$i.count));
        if (e) {
            a._ci._write18(d);
        }
        let p = a._w(c.worksheet);
        for (let q of fromEnum(b._sortConditions$i)) {
            a._ci._capCurrentBlock();
            a._ci._writeSortCond12$1($t, q.key, q.value, h(q.key), f, p);
        }
    }
    get_d() {
        return 2197;
    }
    get d() {
        return this.get_d();
    }
}
SORTDATA12Record.$t = markType(SORTDATA12Record, 'SORTDATA12Record', Biff8RecordBase.$);
/**
 * @hidden
 */
export class SSTRecord extends Biff8RecordBase {
    get_e() {
        return true;
    }
    h(a) {
    }
    a(a) {
        if (a._ba) {
            a._ce = Nullable$1.toNullable(Number_$type, a._av._getStartOfRecord());
            return null;
        }
        return WorkItemExtensions.c(a._ar(), () => {
            a._av._readUInt32();
            let b = a._av._readUInt32();
            return a._av._readFormattedStringBlock(b, a._u);
        });
    }
    b(a) {
        a._ci._write18(a._bc);
        a._ci._write18(intSToU(a._a1));
        let b = a._b.shouldRemoveCarriageReturnsOnSave;
        let c = 0;
        let d = 0;
        return Async.e(StringElement.$, a._ax(), (e) => {
            let f = SSTRecord.o(a, e, b, c);
            c = f.p3;
            d++;
            if (1000 < d) {
                d = 0;
                return false;
            }
            return true;
        });
    }
    i(a) {
    }
    static o(a, b, c, d) {
        if (d % 8 == 0) {
            let e = new WorkbookSaveManagerExcel2003_ExtSstItem();
            e.b = a._ci.position;
            e.a = a._ci._positionInCurrentBlock;
            a._cv.add(e);
        }
        if (c) {
            b = b._s(a._b);
        }
        a._ci._write6(b, 1);
        d++;
        return {
            p3: d
        };
    }
    get_d() {
        return 252;
    }
    get d() {
        return this.get_d();
    }
}
SSTRecord.$t = markType(SSTRecord, 'SSTRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class STANDARDWIDTHRecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = a._av._readUInt16();
        if (c != 0) {
            b.defaultColumnWidth = c;
        }
        b._ek = true;
    }
    i(a) {
        let b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = b.defaultColumnWidth;
        if (Enumerable.b(WorksheetColumnBlock.$, b._ff, (d) => d.i)) {
            c = 0;
        }
        a._ci._write17(c);
    }
    get_d() {
        return 153;
    }
    get d() {
        return this.get_d();
    }
}
STANDARDWIDTHRecord.$t = markType(STANDARDWIDTHRecord, 'STANDARDWIDTHRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class STRINGRecord extends Biff8RecordBase {
    h(a) {
        let b = a._av._readFormattedString(1)._y;
        a._ai.k(b);
    }
    i(a) {
        let b = typeCast(String_$type, a._b7.f);
        if (b == null) {
            return;
        }
        a._ci._write15(b, 1);
    }
    get_d() {
        return 519;
    }
    get d() {
        return this.get_d();
    }
}
STRINGRecord.$t = markType(STRINGRecord, 'STRINGRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class STYLEEXTRecord extends Biff8RecordBase {
    h(a) {
        let b = new STYLEEXTRecordInfo();
        a._av._readFrtHeader();
        b.c = a._av.readByte();
        b.b = a._av.readByte();
        b.e = a._av._readUInt16();
        b.d = a._av._readLPWideString();
        b.a = a._av._readXFProps();
        a._by.add(b);
    }
    static o(a, b) {
        let c = a._b._styles$i;
        let d = a._b5;
        let e = ExcelUtils.bt(b.c, 0);
        let f = ExcelUtils.bt(b.c, 1);
        let g = ExcelUtils.bt(b.c, 2);
        let h = (b.e >>> 8);
        let i = (b.e & 255);
        let j = null;
        if (e) {
            j = c._i(i);
        }
        if (j == null) {
            j = c._item1(b.d);
        }
        if (j == null) {
            return;
        }
        if (f) {
            c.remove(j);
        }
        let k = typeCast(WorkbookBuiltInStyle.$, j);
        if (e) {
            if (EnumUtil.isDefined(BuiltInStyleType_$type, enumGetBox(BuiltInStyleType_$type, i))) {
                if (k == null) {
                    let l = d.indexOf(j);
                    k = new WorkbookBuiltInStyle(a._b, j._i, i, h);
                    c.remove(j);
                    c._add(k);
                    j = k;
                    if (l < 0) {
                    }
                    else {
                        d._inner[l] = j;
                    }
                }
            }
        }
        Biff8RecordStream._applyXFProps(a._b, j._i, false, b.a);
        if (k != null) {
            k._ah = g;
        }
    }
    i(a) {
        let b = a._b7.a(WorkbookStyle.$);
        if (b == null) {
            return;
        }
        let c = typeCast(WorkbookBuiltInStyle.$, b);
        let d = c != null && c._ah;
        a._ci._writeFrtHeader();
        let e = 0;
        let f = ExcelUtils.f5(e, b.isBuiltIn, 0);
        e = f.p0;
        let g = ExcelUtils.f5(e, false, 1);
        e = g.p0;
        let h = ExcelUtils.f5(e, d, 2);
        e = h.p0;
        a._ci._write9(e);
        a._ci._write9(b._e);
        let i = 65535;
        if (c != null) {
            i = ((c._ak << 8) | c._ac);
        }
        a._ci._write17(i);
        a._ci._writeLPWideString(b.name);
        a._ci._writeXFProps(b._i);
    }
    get_d() {
        return 2194;
    }
    get d() {
        return this.get_d();
    }
}
STYLEEXTRecord.$t = markType(STYLEEXTRecord, 'STYLEEXTRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class STYLEEXTRecordInfo extends Base {
    constructor() {
        super(...arguments);
        this.c = 0;
        this.b = 0;
        this.e = 0;
        this.d = null;
        this.a = null;
    }
}
STYLEEXTRecordInfo.$t = markType(STYLEEXTRecordInfo, 'STYLEEXTRecordInfo');
/**
 * @hidden
 */
export class STYLERecord extends Biff8RecordBase {
    h(a) {
        let b = new STYLERecordInfo();
        let c = a._av._readUInt16();
        b.d = (c & 4095);
        b.b = (c & 32768) == 32768;
        if (b.b) {
            b.a = a._av.readByte();
            b.c = a._av.readByte();
        }
        else {
            b.e = a._av._readFormattedString(1)._y;
        }
        a._bz.add(b);
    }
    static o(a, b) {
        let c = a._b2._inner[b.d];
        if (c._b1 != 1) {
            c = c._bu();
            c._b1 = 1;
        }
        let d;
        if (b.b) {
            d = new WorkbookBuiltInStyle(a._b, c, b.a, b.c);
        }
        else {
            let e = new BuiltInStyleInfo();
            if (((() => { let f = WorkbookStyleCollection._t.tryGetValue(b.e, e); e = f.p1; return f.ret; })())) {
                d = new WorkbookBuiltInStyle(a._b, c, e.a, e.b);
            }
            else {
                d = new WorkbookUserDefinedStyle(a._b, c, b.e);
            }
        }
        d = a._b._styles$i._add(d);
        a._b5.add(d);
        let f;
        if (((() => { let g = a._bj.tryGetValue(b.d, f); f = g.p1; return g.ret; })())) {
            let g = d._i;
            for (let h = 0; h < f.count; h++) {
                let i = f._inner[h];
                i.style = d;
                let j = i.formatOptions;
                if (ExcelUtils.bx(j, 2) == false) {
                    if (i._a4 != g._a4 || i._ct != g._ct || i._cw != g._cw || nullableNotEquals(i._c6, g._c6) || i._a9 != g._a9 || nullableNotEquals(i._c7, g._c7)) {
                        j |= 2;
                    }
                }
                if (ExcelUtils.bx(j, 8) == false) {
                    if (WorkbookColorInfo.l_op_Inequality(i._bf, g._bf) || i._al != g._al || WorkbookColorInfo.l_op_Inequality(i._bg, g._bg) || i._aw != g._aw || i._am != g._am || WorkbookColorInfo.l_op_Inequality(i._bk, g._bk) || i._an != g._an || WorkbookColorInfo.l_op_Inequality(i._bl, g._bl) || i._ao != g._ao || WorkbookColorInfo.l_op_Inequality(i._bm, g._bm) || i._ap != g._ap) {
                        j |= 8;
                    }
                }
                if (ExcelUtils.bx(j, 16) == false) {
                    if (Base.equalsStatic(i._ar, g._ar) == false) {
                        j |= 16;
                    }
                }
                if (ExcelUtils.bx(j, 4) == false) {
                    if (nullableNotEquals(i._c2, g._c2) || WorkbookColorInfo.l_op_Inequality(i._bh, g._bh) || i._cq != g._cq || nullableNotEquals(i._c3, g._c3) || i._df != g._df || nullableNotEquals(i._c4, g._c4) || i._a0 != g._a0 || i._a1 != g._a1) {
                        j |= 4;
                    }
                }
                if (ExcelUtils.bx(j, 1) == false) {
                    if (i._dg != g._dg) {
                        j |= 1;
                    }
                }
                if (ExcelUtils.bx(j, 32) == false) {
                    if (nullableNotEquals(i._c5, g._c5)) {
                        j |= 32;
                    }
                }
                i.formatOptions = j;
                i._dh(j, g);
                i._dr(63 & ~j);
            }
        }
    }
    i(a) {
        let b = a._b7.a(WorkbookStyle.$);
        if (b == null) {
            return;
        }
        let c = a._a7(b);
        if (c < 0) {
            c = 0;
        }
        let d = typeCast(WorkbookBuiltInStyle.$, b);
        let e = d != null && d._ag;
        let f = 0;
        f |= c;
        let g = ExcelUtils.f7(f, e, 15);
        f = g.p0;
        a._ci._write17(f);
        if (e) {
            a._ci._write9(d._ac);
            a._ci._write9(d._ak);
        }
        else {
            a._ci._write15(b.name, 1);
        }
    }
    get_d() {
        return 659;
    }
    get d() {
        return this.get_d();
    }
}
STYLERecord.$t = markType(STYLERecord, 'STYLERecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class STYLERecordInfo extends Base {
    constructor() {
        super(...arguments);
        this.d = 0;
        this.b = false;
        this.a = 0;
        this.c = 0;
        this.e = null;
    }
}
STYLERecordInfo.$t = markType(STYLERecordInfo, 'STYLERecordInfo');
/**
 * @hidden
 */
export class SUPBOOKRecord extends Biff8RecordBase {
    h(a) {
        let b = a._av._readUInt16();
        let c = a._av._readUInt16();
        let d;
        if (c == 1025) {
            d = a._b._bb;
        }
        else if (c == 14849) {
            d = a._b._a9;
        }
        else {
            let e = a._av._readFormattedString1(c)._y;
            e = ExcelUtils.d7(a._l, e);
            let f = e == null ? -1 : e.indexOf("\u0003");
            if (0 <= f) {
                d = a._b._be(e, "\u0003");
            }
            else {
                let g = new Array(b);
                for (let h = 0; h < b; h++) {
                    g[h] = a._av._readFormattedString(1)._y;
                }
                d = a._b._bf(e);
                let i = typeCast(ExternalWorkbookReference.$, d);
                if (i != null) {
                    i.ag.o(g);
                }
            }
        }
        a._i.add(d);
        a._cn(d);
    }
    i(a) {
        let b = a._b7.a(WorkbookReferenceBase.$);
        if (b == null) {
            return;
        }
        if (typeCast(CurrentWorkbookReference.$, b) !== null) {
            a._ci._write17(a._az.count);
            a._ci._write17(1025);
        }
        else if (typeCast(AddInFunctionsWorkbookReference.$, b) !== null) {
            a._ci._write17(1);
            a._ci._write17(14849);
        }
        else {
            let c = typeCast(ExternalWorkbookReference.$, b);
            if (c != null) {
                a._ci._write17(c.ag.count);
                a._ci._write15(ExcelUtils.d8(c.x), 1);
                for (let d of fromEnum(c.ag)) {
                    a._ci._write15(d, 1);
                }
            }
            else {
                let e = typeCast(OleLinkWorkbookReference.$, b);
                if (e != null) {
                    a._ci._write17(0);
                    a._ci._write15(e.ai + "\u0003" + e.ak.originalString, 1);
                }
                else {
                    let f = typeCast(DdeLinkWorkbookReference.$, b);
                    if (f != null) {
                        a._ci._write17(0);
                        a._ci._write15(f.ak + "\u0003" + f.al, 1);
                    }
                }
            }
        }
    }
    get_d() {
        return 430;
    }
    get d() {
        return this.get_d();
    }
}
SUPBOOKRecord.$t = markType(SUPBOOKRecord, 'SUPBOOKRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class TABIDRecord extends Biff8RecordBase {
    h(a) {
        let b = intDivide(a._av.length, 2);
        for (let c = 0; c < b; c++) {
            let d = a._av._readUInt16();
            a._bm.addItem(c, d);
        }
    }
    i(a) {
        for (let b = 0; b < a._az.count; b++) {
            a._ci._write17(a._az.item(b)._am);
        }
    }
    get_d() {
        return 317;
    }
    get d() {
        return this.get_d();
    }
}
TABIDRecord.$t = markType(TABIDRecord, 'TABIDRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class TABLERecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = a._av._readUInt16();
        let d = a._av._readUInt16();
        let e = a._av.readByte();
        let f = a._av.readByte();
        let g = a._av._readUInt16();
        let h = (g & 4) == 4;
        let i = (g & 8) == 8;
        let j = a._av._readUInt16();
        let k = a._av._readUInt16();
        let l = a._av._readUInt16();
        let m = a._av._readUInt16();
        let n = null;
        let o = null;
        if (i) {
            n = b._rows$i.item(j)._cells$i.item(k);
            o = b._rows$i.item(l)._cells$i.item(m);
        }
        else if (h) {
            n = b._rows$i.item(j)._cells$i.item(k);
        }
        else {
            o = b._rows$i.item(j)._cells$i.item(k);
        }
        b._dataTables$i._add1(b._cx(c - 1, e - 1, d, f), o, n);
    }
    i(a) {
        let b = a._cj;
        let c = typeCast(DataTableInteriorFormula.$, b.c);
        if (c == null) {
            return;
        }
        let d = c._cz;
        let e = d.cellsInTable;
        a._ci._write17((e.firstRow + 1));
        a._ci._write17(e.lastRow);
        a._ci._write9((e.firstColumn + 1));
        a._ci._write9(e.lastColumn);
        let f = 0;
        let g = 0;
        let h = 0;
        let i = 0;
        let j = 0;
        let k = d.rowInputCell;
        let l = d.columnInputCell;
        if (WorksheetCell.l_op_Inequality(l, null) && WorksheetCell.l_op_Inequality(k, null)) {
            f |= 8;
            g = k.rowIndex;
            h = k.columnIndex;
            i = l.rowIndex;
            j = l.columnIndex;
        }
        else if (WorksheetCell.l_op_Inequality(k, null)) {
            f |= 4;
            g = k.rowIndex;
            h = k.columnIndex;
        }
        else {
            g = l.rowIndex;
            h = l.columnIndex;
        }
        a._ci._write17(f);
        a._ci._write17(g);
        a._ci._write17(h);
        a._ci._write17(i);
        a._ci._write17(j);
    }
    get_d() {
        return 566;
    }
    get d() {
        return this.get_d();
    }
}
TABLERecord.$t = markType(TABLERecord, 'TABLERecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class TABLESTYLEELEMENTRecord extends Biff8RecordBase {
    get_e() {
        return true;
    }
    h(a) {
    }
    a(a) {
        return WorkItemExtensions.a(a._ar(), () => {
            a._av._readFrtHeader();
            let b = a._av._readUInt32();
            let c = a._av._readUInt32();
            let d = a._av._readUInt32();
            if (a._a7 == null) {
                return;
            }
            if (a._g.count <= d) {
                return;
            }
            let e = b;
            if (EnumUtil.isDefined(WorksheetTableStyleArea_$type, enumGetBox(WorksheetTableStyleArea_$type, e)) == false) {
                return;
            }
            let f = a._a7;
            let g = a._g._inner[d];
            if (g._cd == false) {
                if (WorkbookColorInfo.l_op_Inequality(g.diagonalBorderColorInfo, null) || g.diagonalBorderStyle != -1) {
                    g = g._bu();
                    g.diagonalBorderColorInfo = null;
                    g.diagonalBorderStyle = -1;
                }
                f._areaFormats$i.item(e).setFormatting(g);
            }
            switch (e) {
                case 7:
                    f.columnStripeWidth = c;
                    break;
                case 8:
                    f.alternateColumnStripeWidth = c;
                    break;
                case 5:
                    f.rowStripeHeight = c;
                    break;
                case 6:
                    f.alternateRowStripeHeight = c;
                    break;
                default: break;
            }
        });
    }
    i(a) {
        let b = a._b7.a(WorksheetTableStyle.$);
        if (b == null) {
            return;
        }
        let c = a._b7.a(WorksheetTableStyleArea_$type);
        let d = a._b7.a(Number_$type);
        let e = b._ak(c);
        if (e.hasValue == false) {
            e = Nullable$1.toNullable(Number_$type, 0);
        }
        a._ci._writeFrtHeader();
        a._ci._write18(c);
        a._ci._write18(e.value);
        a._ci._write18(d);
    }
    get_d() {
        return 2192;
    }
    get d() {
        return this.get_d();
    }
}
TABLESTYLEELEMENTRecord.$t = markType(TABLESTYLEELEMENTRecord, 'TABLESTYLEELEMENTRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class TABLESTYLERecord extends Biff8RecordBase {
    h(a) {
        a._av._readFrtHeader();
        let b = a._av._readUInt16();
        let c = ExcelUtils.bt(b, 0);
        let d = ExcelUtils.bt(b, 1);
        let e = ExcelUtils.bt(b, 2);
        let f = ExcelUtils.c6(b, 3, 15);
        let g = a._av._readUInt32();
        let h = a._av._readUInt16();
        let i = a._av._readUnicodeString(h);
        if (e && i.length > 0) {
            a._a7 = new WorksheetTableStyle(i);
            a._b._customTableStyles$i.add(a._a7);
        }
        else {
            a._a7 = null;
        }
    }
    i(a) {
        let b = a._b7.a(WorksheetTableStyle.$);
        if (b == null) {
            return;
        }
        a._ci._writeFrtHeader();
        let c = 0;
        let d = ExcelUtils.f7(c, true, 2);
        c = d.p0;
        a._ci._write17(c);
        a._ci._write18(intSToU(a._aa(b)._k));
        a._ci._write17(b.name.length);
        a._ci._writeUnicodeString(b.name);
    }
    get_d() {
        return 2191;
    }
    get d() {
        return this.get_d();
    }
}
TABLESTYLERecord.$t = markType(TABLESTYLERecord, 'TABLESTYLERecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class TABLESTYLESRecord extends Biff8RecordBase {
    h(a) {
        a._av._readFrtHeader();
        let b = a._av._readUInt32();
        let c = a._av._readUInt16();
        let d = a._av._readUInt16();
        let e = Encoding.unicode.getString(a._av._readBytes(c * 2));
        let f = Encoding.unicode.getString(a._av._readBytes(d * 2));
        a._b.defaultTableStyle = a._b._cj(e);
    }
    i(a) {
        a._ci._writeFrtHeader();
        let b = intSToU((144 + a._b._customTableStyles$i.count));
        a._ci._write18(b);
        let c = a._b.defaultTableStyle.name;
        let d = "PivotStyleMedium9";
        a._ci._write17(c.length);
        a._ci._write17(d.length);
        a._ci._write2(Encoding.unicode.getBytes1(c));
        a._ci._write2(Encoding.unicode.getBytes1(d));
    }
    get_d() {
        return 2190;
    }
    get d() {
        return this.get_d();
    }
}
TABLESTYLESRecord.$t = markType(TABLESTYLESRecord, 'TABLESTYLESRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class TEMPLATERecord extends Biff8RecordBase {
    h(a) {
        a._b._iz(1);
    }
    i(a) {
    }
    get_d() {
        return 96;
    }
    get d() {
        return this.get_d();
    }
}
TEMPLATERecord.$t = markType(TEMPLATERecord, 'TEMPLATERecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class THEMERecord extends Biff8RecordBase {
    get_e() {
        return true;
    }
    h(a) {
    }
    a(a) {
        a._av._readFrtHeader();
        let b = a._av._readUInt32();
        if (b != 124226) {
            let c = (a._av.length - a._av.position);
            a._b._e = a._av._readBytes(c);
            a._b._g3 = b;
            if (a._b._e != null && Workbook._e0 != null) {
                return Async.n(MemoryStream.$, new MemoryStream(2, a._b._e), (d) => Workbook._e0(a._b, d, a._al));
            }
        }
        else {
        }
        return null;
    }
    i(a) {
        a._ci._writeFrtHeader();
        if (a._b._e != null) {
            a._ci._write18(a._b._g3);
            a._ci._write2(a._b._e);
        }
        else {
            a._ci._write18(124226);
        }
    }
    get_d() {
        return 2198;
    }
    get d() {
        return this.get_d();
    }
}
THEMERecord.$t = markType(THEMERecord, 'THEMERecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class TOPMARGINRecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        b.topMargin = a._av._readDouble();
    }
    i(a) {
        let b = a._b7.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        a._ci._write10(b.topMargin);
    }
    get_d() {
        return 40;
    }
    get d() {
        return this.get_d();
    }
}
TOPMARGINRecord.$t = markType(TOPMARGINRecord, 'TOPMARGINRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class TXORecord extends Biff8RecordBase {
    h(a) {
        let b = a._av._readUInt16();
        let c = ExcelUtils.c6(b, 1, 3);
        let d = ExcelUtils.c6(b, 4, 6);
        let e = a._av._readUInt16();
        a._av.seek(6, 1);
        let f = a._av._readUInt16();
        let g = a._av._readUInt16();
        a._av.seek(4, 1);
        let h = a._ai.a(WorksheetShape.$);
        let i = typeCast(WorksheetCellComment.$, h);
        let j = typeCast(WorksheetShapeWithText.$, h);
        let k;
        if (i != null) {
            if (f == 0) {
                k = new FormattedStringElement(0);
            }
            else {
                let l = a._av._readFormattedString1(f);
                k = new FormattedStringElement(1, l._y);
                let m = intDivide(g, 8);
                for (let n = 0; n < m; n++) {
                    let o = a._av._readUInt16();
                    let p = a._av._readUInt16();
                    a._av.seek(4, 1);
                    if (o < f) {
                        let q = new FormattedStringRun(k, o);
                        q.d(a._b).setFontFormatting(TXORecord.o(a, p, true));
                        k._ah.add(q);
                    }
                }
            }
            i.text = new FormattedString(a._b, k, false, false);
        }
        else if (j != null) {
            let r;
            if (f == 0) {
                r = new FormattedText(stringEmpty());
            }
            else {
                let s = a._av._readFormattedString1(f);
                r = new FormattedText(s._y);
                {
                    let t = r._paragraphs$i.getEnumerator();
                    try {
                        let u = t.moveNext();
                        if (u == false) {
                            return;
                        }
                        let v = t.current;
                        let w = t.moveNext() ? t.current : null;
                        let x = intDivide(g, 8);
                        let y = null;
                        for (let z = 0; z < x; z++) {
                            let aa = a._av._readUInt16();
                            let ab = a._av._readUInt16();
                            a._av.seek(4, 1);
                            if (w != null && w.startIndex <= aa) {
                                if (aa != w.startIndex) {
                                    if (y != null) {
                                        let ac = new FormattedTextRun(w, 0);
                                        ac.m(y, a._b);
                                        w._u(ac);
                                    }
                                }
                                v = w;
                                w = t.moveNext() ? t.current : null;
                            }
                            if (aa < f) {
                                let ad = new FormattedTextRun(v, aa - v.startIndex);
                                ad.d(a._b).setFontFormatting(TXORecord.o(a, ab, false));
                                v._u(ad);
                                y = ad;
                            }
                        }
                    }
                    finally {
                        if (t != null) {
                            t.dispose();
                        }
                    }
                }
            }
            let ae;
            switch (d) {
                case 1:
                    ae = 2;
                    break;
                case 2:
                    ae = 1;
                    break;
                case 3:
                    ae = 0;
                    break;
                case 4:
                case 7:
                    ae = 1;
                    break;
                default:
                    ae = 1;
                    break;
            }
            r.verticalAlignment = ae;
            let af;
            switch (c) {
                case 1:
                    af = 4;
                    break;
                case 2:
                    af = 0;
                    break;
                case 3:
                    af = 5;
                    break;
                case 4:
                    af = 2;
                    break;
                case 7:
                    af = 1;
                    break;
                default:
                    af = 0;
                    break;
            }
            for (let ag = 0; ag < r._paragraphs$i.count; ag++) {
                r._paragraphs$i.item(ag).alignment = af;
            }
            j.text = r;
        }
        else {
        }
        h._cc = b;
        h._ce = e;
    }
    static o(a, b, c) {
        let d = a._h._inner[b];
        if (WorkbookColorInfo.l_op_Inequality(d.colorInfo, null)) {
            if (d.colorInfo._p) {
                let e = a._b._palette$i._l(d.colorInfo, 2);
                if (c) {
                    if (e == 81) {
                        return d;
                    }
                }
                else {
                    if (e == 64 || e == 64) {
                        return d;
                    }
                }
                if (64 <= e && e <= 81) {
                    d = d._aj(a._b);
                    d.colorInfo = new WorkbookColorInfo(c ? SystemColorsInternal.az : SystemColorsInternal.bf);
                    return d;
                }
            }
        }
        return d;
    }
    i(a) {
        let b = a._b7.a(WorksheetShape.$);
        if (b == null) {
            return;
        }
        let c = typeCast(WorksheetCellComment.$, b);
        let d = typeCast(WorksheetShapeWithText.$, b);
        let e = b._cc;
        if (d != null && d.text != null) {
            e &= 65409;
            let f;
            switch (d.text.verticalAlignment) {
                case 2:
                    f = 1;
                    break;
                case 1:
                    f = 2;
                    break;
                case 0:
                    f = 3;
                    break;
                default:
                    f = 2;
                    break;
            }
            let g = ExcelUtils.e1(e, f, 4, 6);
            e = g.p0;
            let h = 2;
            if (d.text._paragraphs$i.count != 0) {
                switch (d.text._paragraphs$i.item(0).alignment) {
                    case 4:
                        h = 1;
                        break;
                    case 0:
                        h = 2;
                        break;
                    case 5:
                        h = 3;
                        break;
                    case 2:
                    case 3:
                        h = 4;
                        break;
                    case 1:
                    case 6:
                        h = 7;
                        break;
                    default:
                        f = 2;
                        break;
                }
            }
            let i = ExcelUtils.e1(e, h, 1, 3);
            e = i.p0;
        }
        a._ci._write17(e);
        a._ci._write17(b._ce);
        a._ci._write2(new Array(6));
        if (c != null) {
            let j = typeCast(FormattedStringElement.$, c.text._m);
            if (j == null) {
                j = c.text._e();
            }
            let k = new List$1(FormattingRunBase.$, 1, j._ah);
            if (k.count == 0) {
                k.add(new FormattedStringRun(j, 0));
            }
            TXORecord.p(a, j._y, k);
        }
        else if (d != null) {
            if (d.text == null) {
                a._ci._write17(0);
                return;
            }
            let l = new List$1(FormattingRunBase.$, 0);
            for (let m = 0; m < d.text._paragraphs$i.count; m++) {
                let n = d.text._paragraphs$i.item(m);
                l.o(n._getFormattingRuns(a._b));
            }
            if (l.count == 0) {
                let o;
                if (d.text._paragraphs$i.count == 0) {
                    o = d.text._paragraphs$i._add1(stringEmpty());
                }
                else {
                    o = d.text._paragraphs$i.item(0);
                }
                l.add(new FormattedTextRun(o, 0));
            }
            TXORecord.p(a, d.text.toString(), l);
        }
        else {
            return;
        }
    }
    static p(a, b, c) {
        a._ci._write17(b.length);
        let d = c.count;
        if (b.length == 0) {
            a._ci._write17(0);
        }
        else {
            a._ci._write17((8 * (d + 1)));
        }
        a._ci._write2(new Array(4));
        if (b.length == 0) {
            return;
        }
        a._ci._capCurrentBlock();
        a._ci._write14(b);
        a._ci._capCurrentBlock();
        for (let e of fromEnum(c)) {
            let f = e.f(a._b);
            let g = f._r.getValueOrDefault();
            a._ci._write17(e.i);
            a._ci._write17(g);
            a._ci._write2(new Array(4));
        }
        a._ci._write17(b.length);
        a._ci._write17(0);
        a._ci._write2(new Array(4));
    }
    get_d() {
        return 438;
    }
    get d() {
        return this.get_d();
    }
}
TXORecord.$t = markType(TXORecord, 'TXORecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class USERBVIEWRecord extends Biff8RecordBase {
    h(a) {
        let b = a._av._readUInt32();
        let c = a._av._readInt32();
        let d = new Guid(1, a._av._readBytes(16));
        let e = a._av._readInt32();
        let f = a._av._readInt32();
        let g = a._av._readInt32();
        let h = a._av._readInt32();
        let i = a._av._readUInt16();
        let j = a._av._readUInt16();
        let k = (j & 1) == 1;
        let l = (j & 2) == 2;
        let m = (j & 16) == 16;
        let n = (j & 32) == 32;
        let o = (j & 64) == 64;
        let p = (j & 128) == 128;
        let q = ((j & 768) >> 8);
        let r = (j & 1024) == 1024;
        let s = (j & 2048) == 2048;
        let t = 0;
        t |= m ? 1 : 0;
        t |= n ? 2 : 0;
        a._av._readUInt16();
        a._av._readUInt16();
        a._av._readUInt16();
        let u = a._av._readFormattedString(1)._y;
        let v = a._b._customViews$i._add(u, r, s);
        v._t = d;
        v.windowOptions._boundsInPixels$i = ExcelUtils.g9(e, f, g, h);
        v.windowOptions.maximized = p;
        v.windowOptions.objectDisplayStyle = q;
        v.windowOptions.scrollBars = t;
        v.windowOptions._ao = c;
        v.windowOptions.showFormulaBar = k;
        v.windowOptions.showStatusBar = l;
        v.windowOptions.tabBarVisible = o;
        v.windowOptions.tabBarWidth = i;
    }
    i(a) {
        let b = a._b7.a(CustomView.$);
        if (b == null) {
            return;
        }
        a._ci._write18(intSToU(2190));
        let c = b.windowOptions.selectedSheet;
        if (c == null) {
            a._ci._write18(intSToU(0));
        }
        else {
            a._ci._write18((c._am));
        }
        a._ci._write2(b._t.toByteArray());
        a._ci._write18(truncate(b.windowOptions._boundsInPixels$i.left));
        a._ci._write18(truncate(b.windowOptions._boundsInPixels$i.top));
        a._ci._write18(truncate(b.windowOptions._boundsInPixels$i.width));
        a._ci._write18(truncate(b.windowOptions._boundsInPixels$i.height));
        a._ci._write17(b.windowOptions.tabBarWidth);
        let d = 4;
        if (b.windowOptions.showFormulaBar) {
            d |= 1;
        }
        if (b.windowOptions.showStatusBar) {
            d |= 2;
        }
        if ((b.windowOptions.scrollBars & 1) != 0) {
            d |= 16;
        }
        if ((b.windowOptions.scrollBars & 2) != 0) {
            d |= 32;
        }
        if (b.windowOptions.tabBarVisible) {
            d |= 64;
        }
        if (b.windowOptions.maximized) {
            d |= 128;
        }
        d |= (b.windowOptions.objectDisplayStyle << 8);
        if (b.savePrintOptions) {
            d |= 1024;
        }
        if (b.saveHiddenRowsAndColumns) {
            d |= 2048;
        }
        if (c == null) {
            d |= 4096;
        }
        a._ci._write17(d);
        let e = 100;
        a._ci._write17(e);
        a._ci._write17(Convert.toUInt16(false));
        a._ci._write17(65535);
        a._ci._write15(b.name, 1);
    }
    get_d() {
        return 425;
    }
    get d() {
        return this.get_d();
    }
}
USERBVIEWRecord.$t = markType(USERBVIEWRecord, 'USERBVIEWRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class USERSVIEWBEGINRecord extends Biff8RecordBase {
    h(a) {
        let b = new Guid(1, a._av._readBytes(16));
        let c = a._b._customViews$i._item(b);
        if (c == null) {
            return;
        }
        let d = a._av._readInt32();
        let e = a._ai.a(Worksheet.$);
        let f = a._av._readInt32();
        let g = a._av._readInt32();
        let h = a._av._readUInt32();
        let i = a._av._readUInt32();
        let j = (i & 2) == 2;
        let k = (i & 4) == 4;
        let l = (i & 8) == 8;
        let m = (i & 16) == 16;
        let n = (i & 32) == 32;
        let o = (i & 64) == 64;
        let p = (i & 128) == 128;
        let q = (i & 256) == 256;
        let r = (i & 512) == 512;
        let s = (i & 1024) == 1024;
        let t = (i & 32768) == 32768;
        let u = (i & 65536) == 65536;
        let v = (i & 131072) == 131072;
        let w = (i & 262144) == 262144;
        let x = ((i & 12582912) >>> 22);
        let y = (i & 67108864) == 67108864;
        let z = (i & 134217728) == 134217728;
        let aa = (i & 536870912) == 536870912;
        let ab = a._av._readUInt16();
        a._av._readUInt16();
        let ac = a._av._readUInt16();
        a._av._readUInt16();
        let ad = a._av._readDouble();
        let ae = a._av._readDouble();
        let af = a._av._readUInt16();
        let ag = a._av._readUInt16();
        let ah = c.getDisplayOptions(e, true);
        if (ah != null) {
            ah.panesAreFrozen = t;
            if (t) {
                ah.frozenPaneSettings._z = !u;
                if (w) {
                    ah.unfrozenPaneSettings.firstRowInTopPane = ab;
                    ah.frozenPaneSettings.frozenRows = truncate(MathUtilities.f(ae));
                    ah.frozenPaneSettings.firstRowInBottomPane = ag;
                }
                else {
                    ah.frozenPaneSettings.firstRowInBottomPane = ab;
                }
                if (v) {
                    ah.unfrozenPaneSettings.firstColumnInLeftPane = ac;
                    ah.frozenPaneSettings.frozenColumns = truncate(MathUtilities.f(ad));
                    ah.frozenPaneSettings.firstColumnInRightPane = af;
                }
                else {
                    ah.frozenPaneSettings.firstColumnInRightPane = ac;
                }
            }
            else {
                if (w) {
                    ah.unfrozenPaneSettings.firstRowInTopPane = ab;
                    ah.unfrozenPaneSettings.firstRowInBottomPane = ag;
                    ah.unfrozenPaneSettings.topPaneHeight = 0;
                    for (let ai = ab; ae > 0; ai++) {
                        let aj = e._gh(ai);
                        let ak = Math.min(1, ae);
                        ah.unfrozenPaneSettings.topPaneHeight += truncate((ak * aj));
                        ae -= 1;
                    }
                }
                else {
                    ah.unfrozenPaneSettings.firstRowInTopPane = ab;
                }
                if (v) {
                    ah.unfrozenPaneSettings.firstColumnInLeftPane = ac;
                    ah.unfrozenPaneSettings.firstColumnInRightPane = af;
                    ah.unfrozenPaneSettings.leftPaneWidth = 0;
                    for (let al = ac; ad > 0; al++) {
                        let am = e._gd(al);
                        let an = Math.min(1, ad);
                        ah.unfrozenPaneSettings.leftPaneWidth += truncate((an * am));
                        ad -= 1;
                    }
                }
                else {
                    ah.unfrozenPaneSettings.firstColumnInLeftPane = ac;
                }
            }
            if (g != 64) {
                ah._a2 = false;
            }
            ah._a8 = g;
            ah._z = h;
            if (y) {
                ah.view = 2;
            }
            else if (z) {
                ah.view = 1;
            }
            else {
                ah.view = 0;
            }
            ah.magnificationInCurrentView = f;
            ah.showFormulasInCells = j;
            ah.showGridlines = k;
            ah.showOutlineSymbols = m;
            ah.showRowAndColumnHeaders = l;
            ah.showRulerInPageLayoutView = aa;
            ah.showZeroValues = n;
            ah.visibility = x;
        }
        if (c.savePrintOptions) {
            let ao = c.getPrintOptions(e, true);
            a._ai.k(ao);
            if (ao != null) {
                ao.centerHorizontally = o;
                ao.centerVertically = p;
                ao.printGridlines = r;
                ao.printRowAndColumnHeaders = q;
                if (s) {
                    ao.scalingType = 1;
                }
                else {
                    ao.scalingType = 0;
                }
            }
        }
        a._ai.k(ah);
        a._ai.k(c);
    }
    i(a) {
        let b = a._b7.a(CustomView.$);
        let c = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        if (c == null) {
            return;
        }
        let d = 100;
        let e = 64;
        let f = 3;
        let g = false;
        let h = false;
        let i = true;
        let j = true;
        let k = true;
        let l = true;
        let m = false;
        let n = false;
        let o = false;
        let p = false;
        let q = false;
        let r = false;
        let s = false;
        let t = false;
        let u = false;
        let v = false;
        let w = false;
        let x = false;
        let y = false;
        let z = false;
        let aa = 0;
        let ab = false;
        let ac = false;
        let ad = false;
        let ae = false;
        let af = true;
        let ag = false;
        let ah = 0;
        let ai = 0;
        let aj = 0;
        let ak = 0;
        let al = 65535;
        let am = 65535;
        let an = b.getDisplayOptions(c, false);
        if (an != null) {
            an._br();
            f = an._z;
            v = an.panesAreFrozen;
            if (an.panesAreFrozen) {
                ag = !an.frozenPaneSettings._z;
                if (an.frozenPaneSettings.frozenRows > 0) {
                    x = true;
                    ah = an.unfrozenPaneSettings.firstRowInTopPane;
                    ak = an.frozenPaneSettings.frozenRows;
                    am = an.frozenPaneSettings.firstRowInBottomPane;
                }
                else {
                    x = false;
                    ah = an.frozenPaneSettings.firstRowInBottomPane;
                    ak = 0;
                    am = 65535;
                }
                if (an.frozenPaneSettings.frozenColumns > 0) {
                    w = true;
                    ai = an.unfrozenPaneSettings.firstColumnInLeftPane;
                    aj = an.frozenPaneSettings.frozenColumns;
                    al = an.frozenPaneSettings.firstColumnInRightPane;
                }
                else {
                    w = false;
                    ai = an.frozenPaneSettings.firstColumnInRightPane;
                    aj = 0;
                    al = 65535;
                }
            }
            else {
                if (an.unfrozenPaneSettings.topPaneHeight > 0) {
                    x = true;
                    ah = an.unfrozenPaneSettings.firstRowInTopPane;
                    am = an.unfrozenPaneSettings.firstRowInBottomPane;
                    let ao = an.unfrozenPaneSettings.topPaneHeight;
                    ak = 0;
                    for (let ap = ah;; ap++) {
                        let aq = c._gh(ap);
                        if (aq < ao) {
                            ak += 1;
                            ao -= aq;
                        }
                        else {
                            ak += ao / aq;
                            break;
                        }
                    }
                }
                else {
                    x = false;
                    ah = an.unfrozenPaneSettings.firstRowInTopPane;
                    am = 65535;
                }
                if (an.unfrozenPaneSettings.leftPaneWidth > 0) {
                    x = true;
                    ai = an.unfrozenPaneSettings.firstColumnInLeftPane;
                    al = an.unfrozenPaneSettings.firstColumnInRightPane;
                    let ar = an.unfrozenPaneSettings.leftPaneWidth;
                    aj = 0;
                    for (let as = ai;; as++) {
                        let at = c._gd(as);
                        if (at < ar) {
                            aj += 1;
                            ar -= at;
                        }
                        else {
                            aj += ar / at;
                            break;
                        }
                    }
                }
                else {
                    w = false;
                    ai = an.unfrozenPaneSettings.firstColumnInLeftPane;
                    al = 65535;
                }
            }
            e = an._a8;
            if (an.view == 0) {
                ad = false;
                ae = false;
            }
            else if (an.view == 2) {
                ad = true;
                ae = false;
            }
            else {
                ad = false;
                ae = true;
            }
            d = an.magnificationInCurrentView;
            h = an.showFormulasInCells;
            i = an.showGridlines;
            k = an.showOutlineSymbols;
            j = an.showRowAndColumnHeaders;
            af = an.showRulerInPageLayoutView;
            l = an.showZeroValues;
            aa = an.visibility;
        }
        let au = b.getPrintOptions(c, false);
        if (au != null) {
            m = au.centerHorizontally;
            n = au.centerVertically;
            p = au.printGridlines;
            o = au.printRowAndColumnHeaders;
            q = au.scalingType == 1;
        }
        let av = b.getHiddenColumns(c, false);
        if (av != null && av.count > 0) {
            z = true;
        }
        let aw = b.getHiddenRows(c, false);
        if (aw != null && aw.count > 0) {
            y = true;
        }
        let ax = 0;
        if (g) {
            ax = u32BitwiseOr(ax, 1);
        }
        if (h) {
            ax = u32BitwiseOr(ax, 2);
        }
        if (i) {
            ax = u32BitwiseOr(ax, 4);
        }
        if (j) {
            ax = u32BitwiseOr(ax, 8);
        }
        if (k) {
            ax = u32BitwiseOr(ax, 16);
        }
        if (l) {
            ax = u32BitwiseOr(ax, 32);
        }
        if (m) {
            ax = u32BitwiseOr(ax, 64);
        }
        if (n) {
            ax = u32BitwiseOr(ax, 128);
        }
        if (o) {
            ax = u32BitwiseOr(ax, 256);
        }
        if (p) {
            ax = u32BitwiseOr(ax, 512);
        }
        if (q) {
            ax = u32BitwiseOr(ax, 1024);
        }
        if (r) {
            ax = u32BitwiseOr(ax, 2048);
        }
        if (s) {
            ax = u32BitwiseOr(ax, 4096);
        }
        if (t) {
            ax = u32BitwiseOr(ax, 8192);
        }
        if (u) {
            ax = u32BitwiseOr(ax, 16384);
        }
        if (v) {
            ax = u32BitwiseOr(ax, 32768);
        }
        if (ag) {
            ax = u32BitwiseOr(ax, 65536);
        }
        if (w) {
            ax = u32BitwiseOr(ax, 131072);
        }
        if (x) {
            ax = u32BitwiseOr(ax, 262144);
        }
        if (y) {
            ax = u32BitwiseOr(ax, 524288);
        }
        if (z) {
            ax = u32BitwiseOr(ax, 2097152);
        }
        ax = u32BitwiseOr(ax, (u32LS(aa, 22)));
        if (ab) {
            ax = u32BitwiseOr(ax, 16777216);
        }
        if (ac) {
            ax = u32BitwiseOr(ax, 33554432);
        }
        if (ad) {
            ax = u32BitwiseOr(ax, 67108864);
        }
        if (ae) {
            ax = u32BitwiseOr(ax, 134217728);
        }
        if (af) {
            ax = u32BitwiseOr(ax, 536870912);
        }
        a._ci._write2(b._t.toByteArray());
        a._ci._write12((c._am));
        a._ci._write12(d);
        a._ci._write12(e);
        a._ci._write18(f);
        a._ci._write18(ax);
        a._ci._write17(ah);
        a._ci._write17((ah + 1));
        a._ci._write17(ai);
        a._ci._write17((ai + 1));
        a._ci._write10(aj);
        a._ci._write10(ak);
        a._ci._write17(al);
        a._ci._write17(am);
    }
    get_d() {
        return 426;
    }
    get d() {
        return this.get_d();
    }
}
USERSVIEWBEGINRecord.$t = markType(USERSVIEWBEGINRecord, 'USERSVIEWBEGINRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class USERSVIEWENDRecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(CustomView.$);
        if (b == null) {
            return;
        }
        let c = Convert.toBoolean1(a._av._readUInt16());
        if (c == false) {
        }
        a._ai.h();
        a._ai.h();
        if (b.savePrintOptions) {
            a._ai.h();
        }
    }
    i(a) {
        a._ci._write17(Convert.toUInt16(true));
    }
    get_d() {
        return 427;
    }
    get d() {
        return this.get_d();
    }
}
USERSVIEWENDRecord.$t = markType(USERSVIEWENDRecord, 'USERSVIEWENDRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class USESELFSRecord extends Biff8RecordBase {
    h(a) {
        a._av._readUInt16();
    }
    i(a) {
        a._ci._write17(0);
    }
    get_d() {
        return 352;
    }
    get d() {
        return this.get_d();
    }
}
USESELFSRecord.$t = markType(USESELFSRecord, 'USESELFSRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class VBAOBJECTNAMERecord extends Biff8RecordBase {
    h(a) {
        let b = a._av._readFormattedString(1)._y;
        let c = a._ai.a(Worksheet.$);
        if (c != null) {
            c._ak = b;
        }
        else {
            a._b._g0 = b;
        }
    }
    i(a) {
        let b = null;
        let c = a._b7.a(Worksheet.$);
        if (c != null) {
            b = c._ak;
        }
        else {
            b = a._b._g0;
        }
        a._ci._write15(b, 1);
    }
    get_d() {
        return 442;
    }
    get d() {
        return this.get_d();
    }
}
VBAOBJECTNAMERecord.$t = markType(VBAOBJECTNAMERecord, 'VBAOBJECTNAMERecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class VCENTERRecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        b.centerVertically = Convert.toBoolean1(a._av._readUInt16());
    }
    i(a) {
        let b = a._b7.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        a._ci._write17(Convert.toUInt16(b.centerVertically));
    }
    get_d() {
        return 132;
    }
    get d() {
        return this.get_d();
    }
}
VCENTERRecord.$t = markType(VCENTERRecord, 'VCENTERRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class VERTICALPAGEBREAKSRecord extends Biff8RecordBase {
    h(a) {
        if (a._av.length == 0) {
            return;
        }
        let b = a._ai.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        let c = a._av._readUInt16();
        for (let d = 0; d < c; d++) {
            let e = a._av._readUInt16();
            let f = a._av._readUInt16();
            let g = a._av._readUInt16();
            let h = Nullable$1.toNullable(Number_$type, f);
            if (f == 0) {
                h = Nullable$1.toNullable(Number_$type, null);
            }
            let i = Nullable$1.toNullable(Number_$type, g);
            if (g == a._b.maxRowCount - 1) {
                i = Nullable$1.toNullable(Number_$type, null);
            }
            b._verticalPageBreaks$i._add$i(new VerticalPageBreak(e, b._printAreas$i._e(e, Nullable$1.toNullable(Number_$type, f), Nullable$1.toNullable(Number_$type, g), true)));
        }
    }
    i(a) {
        let b = a._b7.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        a._ci._write17(b._verticalPageBreaks$i.count);
        for (let c = 0; c < b._verticalPageBreaks$i.count; c++) {
            let d = b._verticalPageBreaks$i._item(c);
            a._ci._write17(d._k);
            a._ci._write17(d._m);
            let e = Math.min(d._l, a._b.maxRowCount - 1);
            a._ci._write17(e);
        }
    }
    get_d() {
        return 26;
    }
    get d() {
        return this.get_d();
    }
}
VERTICALPAGEBREAKSRecord.$t = markType(VERTICALPAGEBREAKSRecord, 'VERTICALPAGEBREAKSRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class WINDOW1Record extends Biff8RecordBase {
    h(a) {
        let b = a._av._readInt16();
        let c = a._av._readInt16();
        let d = a._av._readUInt16();
        let e = a._av._readUInt16();
        a._b.windowOptions._boundsInTwips$i = ExcelUtils.g9(b, c, d, e);
        let f = a._av._readUInt16();
        a._b.windowOptions.minimized = (f & 2) == 2;
        let g = (f & 8) == 8;
        let h = (f & 16) == 16;
        a._b.windowOptions.tabBarVisible = (f & 32) == 32;
        let i = 0;
        i |= g ? 1 : 0;
        i |= h ? 2 : 0;
        a._b.windowOptions.scrollBars = i;
        a._b.windowOptions._as = a._av._readUInt16();
        a._b.windowOptions.firstVisibleTabIndex = a._av._readUInt16();
        a._av._readUInt16();
        a._b.windowOptions.tabBarWidth = a._av._readUInt16();
    }
    i(a) {
        let b = a._b.windowOptions;
        a._ci._write11(ExcelUtils.cs(truncate(b._boundsInTwips$i.left)));
        a._ci._write11(ExcelUtils.cs(truncate(b._boundsInTwips$i.top)));
        a._ci._write17(ExcelUtils.et(truncate(b._boundsInTwips$i.width)));
        a._ci._write17(ExcelUtils.et(truncate(b._boundsInTwips$i.height)));
        let c = 0;
        if (b.minimized) {
            c |= 2;
        }
        if ((b.scrollBars & 1) != 0) {
            c |= 8;
        }
        if ((b.scrollBars & 2) != 0) {
            c |= 16;
        }
        if (b.tabBarVisible) {
            c |= 32;
        }
        a._ci._write17(c);
        let d = a._az.indexOf(b.selectedSheet);
        let e = Math.min(b.firstVisibleTabIndex, a._az.count - 1);
        a._ci._write17(d);
        a._ci._write17(e);
        a._ci._write17(1);
        a._ci._write17(b.tabBarWidth);
    }
    get_d() {
        return 61;
    }
    get d() {
        return this.get_d();
    }
}
WINDOW1Record.$t = markType(WINDOW1Record, 'WINDOW1Record', Biff8RecordBase.$);
/**
 * @hidden
 */
export class WINDOW2Record extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = a._av._readUInt16();
        b.displayOptions.showFormulasInCells = (c & 1) == 1;
        b.displayOptions.showGridlines = (c & 2) == 2;
        b.displayOptions.showRowAndColumnHeaders = (c & 4) == 4;
        b.displayOptions.panesAreFrozen = (c & 8) == 8;
        b.displayOptions.showZeroValues = (c & 16) == 16;
        b.displayOptions._a2 = (c & 32) == 32;
        b.displayOptions.orderColumnsRightToLeft = (c & 64) == 64;
        b.displayOptions.showOutlineSymbols = (c & 128) == 128;
        let d = (c & 256) == 256;
        b._w = (c & 512) == 512;
        let e = (c & 1024) == 1024;
        let f = (c & 2048) == 2048;
        if (f) {
            b.displayOptions.view = 2;
        }
        let g = a._av._readUInt16();
        let h = a._av._readUInt16();
        if (b.displayOptions.panesAreFrozen) {
            b.displayOptions.frozenPaneSettings._z = !d;
            b.displayOptions.frozenPaneSettings.firstColumnInRightPane = h;
            b.displayOptions.frozenPaneSettings.firstRowInBottomPane = g;
        }
        else {
            b.displayOptions.unfrozenPaneSettings.firstColumnInRightPane = h;
            b.displayOptions.unfrozenPaneSettings.firstRowInBottomPane = g;
        }
        if (a._av.length == 10) {
            let i = a._av.readByte();
            let j = a._av.readByte();
            let k = a._av.readByte();
            a._av.readByte();
            let l = ExcelUtils.gw(i, j, k);
            if (!b.displayOptions._a2) {
                b.displayOptions._gridlineColor$i = l;
            }
            return;
        }
        b.displayOptions._a8 = a._av._readUInt16();
        a._av._readUInt16();
        let m = a._av._readUInt16();
        if (m == 0) {
            m = 60;
        }
        let n = ExcelUtils.fj(m);
        m = n.p0;
        b.displayOptions.magnificationInPageBreakView = m;
        let o = a._av._readUInt16();
        if (o == 0) {
            o = 100;
        }
        let p = ExcelUtils.fj(o);
        o = p.p0;
        b.displayOptions.magnificationInNormalView = o;
        a._av._readUInt32();
    }
    i(a) {
        let b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = 0;
        if (b.displayOptions.showFormulasInCells) {
            c |= 1;
        }
        if (b.displayOptions.showGridlines) {
            c |= 2;
        }
        if (b.displayOptions.showRowAndColumnHeaders) {
            c |= 4;
        }
        if (b.displayOptions.panesAreFrozen) {
            c |= 8;
        }
        if (b.displayOptions.showZeroValues) {
            c |= 16;
        }
        if (b.displayOptions._a2) {
            c |= 32;
        }
        if (b.displayOptions.orderColumnsRightToLeft) {
            c |= 64;
        }
        if (b.displayOptions.showOutlineSymbols) {
            c |= 128;
        }
        if (b.displayOptions.panesAreFrozen && b.displayOptions.frozenPaneSettings._z == false) {
            c |= 256;
        }
        if (b._w) {
            c |= 512;
        }
        if (b == b.workbook.windowOptions.selectedWorksheet) {
            c |= 512;
            c |= 1024;
        }
        if (b.displayOptions.view == 2) {
            c |= 2048;
        }
        a._ci._write17(c);
        if (b.displayOptions.panesAreFrozen) {
            if (b.displayOptions.frozenPaneSettings.frozenRows == 0) {
                a._ci._write17(b.displayOptions.frozenPaneSettings.firstRowInBottomPane);
            }
            else {
                a._ci._write17(b.displayOptions.unfrozenPaneSettings.firstRowInTopPane);
            }
            if (b.displayOptions.frozenPaneSettings.frozenColumns == 0) {
                a._ci._write17(b.displayOptions.frozenPaneSettings.firstColumnInRightPane);
            }
            else {
                a._ci._write17(b.displayOptions.unfrozenPaneSettings.firstColumnInLeftPane);
            }
        }
        else {
            if (b.displayOptions.unfrozenPaneSettings.topPaneHeight == 0) {
                a._ci._write17(b.displayOptions.unfrozenPaneSettings.firstRowInBottomPane);
            }
            else {
                a._ci._write17(b.displayOptions.unfrozenPaneSettings.firstRowInTopPane);
            }
            if (b.displayOptions.unfrozenPaneSettings.leftPaneWidth == 0) {
                a._ci._write17(b.displayOptions.unfrozenPaneSettings.firstColumnInRightPane);
            }
            else {
                a._ci._write17(b.displayOptions.unfrozenPaneSettings.firstColumnInLeftPane);
            }
        }
        a._ci._write17(b.displayOptions._a8);
        a._ci._write17(0);
        let d = b.displayOptions.magnificationInPageBreakView;
        if (d == 60 && b.displayOptions.view != 2) {
            d = 0;
        }
        a._ci._write17(d);
        let e = b.displayOptions.magnificationInNormalView;
        if (e == 100 && b.displayOptions.view != 0) {
            e = 0;
        }
        a._ci._write17(e);
        a._ci._write18(intSToU(0));
    }
    get_d() {
        return 574;
    }
    get d() {
        return this.get_d();
    }
}
WINDOW2Record.$t = markType(WINDOW2Record, 'WINDOW2Record', Biff8RecordBase.$);
/**
 * @hidden
 */
export class WINDOWPROTECTRecord extends Biff8RecordBase {
    h(a) {
        let b = a._av._readUInt16() == 1;
        a._b.protection.allowEditWindows = b == false;
        a._b.protection._b.j(b || a._b.isProtected);
    }
    i(a) {
        let b = a._b.isProtected && a._b.protection.allowEditWindows == false ? 1 : 0;
        a._ci._write17(b);
    }
    get_d() {
        return 25;
    }
    get d() {
        return this.get_d();
    }
}
WINDOWPROTECTRecord.$t = markType(WINDOWPROTECTRecord, 'WINDOWPROTECTRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class WRITEACCESSRecord extends Biff8RecordBase {
    h(a) {
        try {
            a._av._readFormattedString(1);
        }
        catch (b) {
        }
    }
    i(a) {
    }
    get_d() {
        return 92;
    }
    get d() {
        return this.get_d();
    }
}
WRITEACCESSRecord.$t = markType(WRITEACCESSRecord, 'WRITEACCESSRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class WRITEPROTRecord extends Biff8RecordBase {
    h(a) {
        a._bc = true;
    }
    i(a) {
    }
    get_d() {
        return 134;
    }
    get d() {
        return this.get_d();
    }
}
WRITEPROTRecord.$t = markType(WRITEPROTRecord, 'WRITEPROTRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class WSBOOLRecord extends Biff8RecordBase {
    h(a) {
        let b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = a._av._readUInt16();
        b._em = (c & 64) == 64;
        b.displayOptions._showExpansionIndicatorBelowGroupedRows$i = Nullable$1.toNullable(Boolean_$type, b._em ? true : false);
        b.displayOptions._showExpansionIndicatorToRightOfGroupedColumns$i = Nullable$1.toNullable(Boolean_$type, (c & 128) == 128 ? true : false);
        let d = (c & 256) == 256;
        if (d) {
            b.printOptions.scalingType = 1;
        }
        else {
            b.printOptions.scalingType = 0;
        }
    }
    i(a) {
        let b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        let c = 1025;
        if (b.displayOptions._an) {
            c |= 64;
        }
        if (b.displayOptions._ao) {
            c |= 128;
        }
        if (b.printOptions.scalingType == 1) {
            c |= 256;
        }
        a._ci._write17(c);
    }
    get_d() {
        return 129;
    }
    get d() {
        return this.get_d();
    }
}
WSBOOLRecord.$t = markType(WSBOOLRecord, 'WSBOOLRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class XCTRecord extends Biff8RecordBase {
    h(a) {
        a._av._readUInt16();
        let b = a._av._readUInt16();
        a._co(b);
    }
    i(a) {
    }
    get_d() {
        return 89;
    }
    get d() {
        return this.get_d();
    }
}
XCTRecord.$t = markType(XCTRecord, 'XCTRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class XFCRCRecord extends Biff8RecordBase {
    h(a) {
        a._av._readFrtHeader();
        let b = a._av._readUInt16();
        let c = a._av._readUInt16();
        let d = a._av._readUInt32();
        if (a._ah == null) {
            return;
        }
        if (d != ExcelUtils.eu(0, a._ah)) {
            a._bb = true;
        }
    }
    i(a) {
        if (a._b6 == null) {
            return;
        }
        let b = ExcelUtils.eu(0, a._b6);
        a._ci._writeFrtHeader();
        a._ci._write17(0);
        a._ci._write17(a._cw.count);
        a._ci._write18(b);
    }
    get_d() {
        return 2172;
    }
    get d() {
        return this.get_d();
    }
}
XFCRCRecord.$t = markType(XFCRCRecord, 'XFCRCRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class XFEXTRecord extends Biff8RecordBase {
    h(a) {
        let b = new XFEXTRecordInfo();
        a._av._readFrtHeader();
        b.c = a._av._readUInt16();
        b.b = a._av._readUInt16();
        b.d = a._av._readUInt16();
        let c = a._av._readUInt16();
        b.a = new Array(c);
        for (let d = 0; d < c; d++) {
            b.a[d] = a._av._readExtProp();
        }
        a._b0.add(b);
    }
    static o(a, b) {
        if (a._bb) {
            return;
        }
        if (a._b2.count <= b.b) {
            return;
        }
        let c = a._b2._inner[b.b];
        let d = c.formatOptions;
        for (let e = 0; e < b.a.length; e++) {
            b.a[e].b(a, c);
        }
        c._dt(d);
    }
    i(a) {
        let b = a._b7.a(XFRecord_XFContext.$);
        if (b == null) {
            return;
        }
        let c = b.a;
        let d = b.b;
        a._ci._writeFrtHeader();
        a._ci._write17(0);
        a._ci._write17(b.c);
        a._ci._write17(0);
        a._ci._write17(d.count);
        for (let e = 0; e < d.count; e++) {
            a._ci._writeExtProp(d._inner[e]);
        }
    }
    get_d() {
        return 2173;
    }
    get d() {
        return this.get_d();
    }
}
XFEXTRecord.$t = markType(XFEXTRecord, 'XFEXTRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class XFEXTRecordInfo extends Base {
    constructor() {
        super(...arguments);
        this.c = 0;
        this.b = 0;
        this.d = 0;
        this.a = null;
    }
}
XFEXTRecordInfo.$t = markType(XFEXTRecordInfo, 'XFEXTRecordInfo');
/**
 * @hidden
 */
export class XFRecord extends Biff8RecordBase {
    h(a) {
        let b = new XFRecordInfo();
        b.d = a._av._readUInt16();
        b.c = a._av._readUInt16();
        b.e = a._av._readUInt16();
        b.a = a._av.readByte();
        b.b = a._av.readByte();
        b.f = a._av._readUInt16();
        b.g = a._av._readUInt16();
        b.h = a._av._readUInt16();
        b.j = a._av._readUInt32();
        b.i = a._av._readUInt16();
        a._b1.add(b);
    }
    static o(a, b) {
        let c = ExcelUtils.bt(b.e, 0);
        let d = ExcelUtils.bt(b.e, 1);
        let e = ExcelUtils.bt(b.e, 2);
        let f = ExcelUtils.bt(b.e, 3);
        let g = ExcelUtils.c6(b.e, 4, 15);
        let h = ExcelUtils.c4(b.a, 0, 2);
        let i = ExcelUtils.bt(b.a, 3);
        let j = ExcelUtils.c4(b.a, 4, 6);
        let k = ExcelUtils.bt(b.a, 7);
        let l = ExcelUtils.c6(b.f, 0, 3);
        let m = ExcelUtils.bt(b.f, 4);
        let n = ExcelUtils.bt(b.f, 5);
        let o = ExcelUtils.c6(b.f, 6, 7);
        let p = ExcelUtils.bt(b.f, 10);
        let q = ExcelUtils.bt(b.f, 11);
        let r = ExcelUtils.bt(b.f, 12);
        let s = ExcelUtils.bt(b.f, 13);
        let t = ExcelUtils.bt(b.f, 14);
        let u = ExcelUtils.bt(b.f, 15);
        let v = ExcelUtils.c6(b.g, 0, 3);
        let w = ExcelUtils.c6(b.g, 4, 7);
        let x = ExcelUtils.c6(b.g, 8, 11);
        let y = ExcelUtils.c6(b.g, 12, 15);
        let z = ExcelUtils.c6(b.h, 0, 6);
        let aa = ExcelUtils.c6(b.h, 7, 13);
        let ab = ExcelUtils.c6(b.h, 14, 15);
        let ac = ExcelUtils.c7(b.j, 0, 6);
        let ad = ExcelUtils.c7(b.j, 7, 13);
        let ae = ExcelUtils.c7(b.j, 14, 20);
        let af = ExcelUtils.c7(b.j, 21, 24);
        let ag = ExcelUtils.bu(b.j, 25);
        let ah = ExcelUtils.c7(b.j, 26, 31);
        let ai = ExcelUtils.c6(b.i, 0, 6);
        let aj = ExcelUtils.c6(b.i, 7, 13);
        let ak = ExcelUtils.bt(b.i, 14);
        let al = a._b._cd(e ? 1 : 0);
        let am = null;
        if (e) {
            p = !p;
            q = !q;
            r = !r;
            s = !s;
            t = !t;
            u = !u;
        }
        else if (0 <= g && g < a._b2.count) {
            am = a._b2._inner[g];
            let an;
            if (((() => { let ao = a._bj.tryGetValue(g, an); an = ao.p1; return ao.ret; })()) == false) {
                an = new List$1(WorksheetCellFormatData.$, 0);
                a._bj.addItem(g, an);
            }
            an.add(al);
        }
        else {
        }
        if (0 <= b.d && b.d < a._h.count) {
            al.font.setFontFormatting(a._h._inner[b.d]);
        }
        else {
        }
        let ao = a._b;
        al._b6 = k;
        al.alignment = h;
        if (ad != 0) {
            al.bottomBorderColorInfo = new WorkbookColorInfo(ao, ad);
            al.bottomBorderStyle = y;
        }
        else if (s) {
            al.bottomBorderStyle = y;
        }
        if (ae != 0) {
            al.diagonalBorderColorInfo = new WorkbookColorInfo(ao, ae);
            al.diagonalBorders = 1 | (ab << 1);
            al.diagonalBorderStyle = af;
        }
        else if (ab != 0) {
            al.diagonalBorders = 1 | (ab << 1);
            al.diagonalBorderStyle = af;
        }
        else if (s) {
            al.diagonalBorderStyle = af;
        }
        al.fill = new CellFillPattern(aj, ai, ah, al);
        al._cr = b.c;
        al.indent = l;
        if (z != 0) {
            al.leftBorderColorInfo = new WorkbookColorInfo(ao, z);
            al.leftBorderStyle = v;
        }
        else if (s) {
            al.leftBorderStyle = v;
        }
        al._locked$i = ExcelUtils.dv(c);
        if (aa != 0) {
            al.rightBorderColorInfo = new WorkbookColorInfo(ao, aa);
            al.rightBorderStyle = w;
        }
        else if (s) {
            al.rightBorderStyle = w;
        }
        al.rotation = b.b;
        al._shrinkToFit$i = ExcelUtils.dv(m);
        if (ac != 0) {
            al.topBorderColorInfo = new WorkbookColorInfo(ao, ac);
            al.topBorderStyle = x;
        }
        else if (s) {
            al.topBorderStyle = x;
        }
        al.verticalAlignment = j;
        al._wrapText$i = ExcelUtils.dv(i);
        let ap = 0;
        if (p) {
            ap |= 1;
        }
        if (q) {
            ap |= 4;
        }
        if (r) {
            ap |= 2;
        }
        if (s) {
            ap |= 8;
        }
        if (t) {
            ap |= 16;
        }
        if (u) {
            ap |= 32;
        }
        if (al._b1 == 1) {
            al.formatOptions = ap;
        }
        else {
            al._dt(ap);
        }
        let aq = a._b2.count;
        a._b2.add(al);
    }
    i(a) {
        let b = a._b7.a(XFRecord_XFContext.$);
        if (b == null) {
            return;
        }
        let c = b.a;
        let d = a._b;
        let e = c._bp._r.getValueOrDefault();
        a._ci._write17(e);
        let f = c._cs;
        if (f < 0) {
            f = 0;
        }
        else {
            f = a._c0(f);
        }
        a._ci._write17(f);
        let g;
        if (c._b1 != 1) {
            g = a._a7(c.style);
            if (g < 0) {
                g = 0;
            }
        }
        else {
            g = 4095;
        }
        let h = 0;
        let i = ExcelUtils.f8(h, c._c5, 0);
        h = i.p0;
        let j = ExcelUtils.f7(h, c._b1 == 1, 2);
        h = j.p0;
        let k = ExcelUtils.e1(h, g, 4, 15);
        h = k.p0;
        a._ci._write17(h);
        let l = 0;
        let m = ExcelUtils.e0(l, c._a4, 0, 2);
        l = m.p0;
        let n = ExcelUtils.f6(l, c._c7, 3);
        l = n.p0;
        let o = ExcelUtils.e0(l, c._a9, 4, 6);
        l = o.p0;
        let p = ExcelUtils.f5(l, c._b6, 7);
        l = p.p0;
        a._ci._write9(l);
        let q = c._cw % 256;
        if (q < 0) {
            q += 256;
        }
        a._ci._write9(q);
        let r = (c._b1 != 1);
        let s = ExcelUtils.bx(c.formatOptions, 1) == r;
        let t = ExcelUtils.bx(c.formatOptions, 4) == r;
        let u = ExcelUtils.bx(c.formatOptions, 2) == r;
        let v = ExcelUtils.bx(c.formatOptions, 8) == r;
        let w = ExcelUtils.bx(c.formatOptions, 16) == r;
        let x = ExcelUtils.bx(c.formatOptions, 32) == r;
        h = 0;
        let y = ExcelUtils.e1(h, Math.min(15, c._ct), 0, 3);
        h = y.p0;
        let z = ExcelUtils.f8(h, c._c6, 4);
        h = z.p0;
        let aa = ExcelUtils.f7(h, s, 10);
        h = aa.p0;
        let ab = ExcelUtils.f7(h, t, 11);
        h = ab.p0;
        let ac = ExcelUtils.f7(h, u, 12);
        h = ac.p0;
        let ad = ExcelUtils.f7(h, v, 13);
        h = ad.p0;
        let ae = ExcelUtils.f7(h, w, 14);
        h = ae.p0;
        let af = ExcelUtils.f7(h, x, 15);
        h = af.p0;
        a._ci._write17(h);
        let ag;
        let ah;
        let ai;
        let aj;
        let ak;
        let al;
        let am;
        let an;
        let ao;
        let ap;
        if (c.bottomBorderStyle != -1 || WorkbookColorInfo.l_op_Inequality(c.bottomBorderColorInfo, null)) {
            aj = c._al;
            ao = c._bf._y(d, 0);
        }
        else {
            aj = 0;
            ao = 0;
        }
        if (c.diagonalBorderStyle != -1 || c.diagonalBorders != 0 || WorkbookColorInfo.l_op_Inequality(c.diagonalBorderColorInfo, null)) {
            ak = c._am;
            ap = c._bg._y(d, 0);
        }
        else {
            ak = 0;
            ap = 0;
        }
        if (c.leftBorderStyle != -1 || WorkbookColorInfo.l_op_Inequality(c.leftBorderColorInfo, null)) {
            ag = c._an;
            al = c._bk._y(d, 0);
        }
        else {
            ag = 0;
            al = 0;
        }
        if (c.rightBorderStyle != -1 || WorkbookColorInfo.l_op_Inequality(c.rightBorderColorInfo, null)) {
            ah = c._ao;
            am = c._bl._y(d, 0);
        }
        else {
            ah = 0;
            am = 0;
        }
        if (c.topBorderStyle != -1 || WorkbookColorInfo.l_op_Inequality(c.topBorderColorInfo, null)) {
            ai = c._ap;
            an = c._bm._y(d, 0);
        }
        else {
            ai = 0;
            an = 0;
        }
        h = 0;
        let aq = ExcelUtils.e1(h, ag, 0, 3);
        h = aq.p0;
        let ar = ExcelUtils.e1(h, ah, 4, 7);
        h = ar.p0;
        let as = ExcelUtils.e1(h, ai, 8, 11);
        h = as.p0;
        let at = ExcelUtils.e1(h, aj, 12, 15);
        h = at.p0;
        a._ci._write17(h);
        let au = c._aw >> 1;
        h = 0;
        let av = ExcelUtils.e1(h, al, 0, 6);
        h = av.p0;
        let aw = ExcelUtils.e1(h, am, 7, 13);
        h = aw.p0;
        let ax = ExcelUtils.e1(h, au, 14, 15);
        h = ax.p0;
        a._ci._write17(h);
        let ay = c._ar;
        let az = c._ay(ay);
        let a0 = b.b.count != 0;
        let a1 = 0;
        let a2 = ExcelUtils.e2(a1, an, 0, 6);
        a1 = a2.p0;
        let a3 = ExcelUtils.e2(a1, ao, 7, 13);
        a1 = a3.p0;
        let a4 = ExcelUtils.e2(a1, ap, 14, 20);
        a1 = a4.p0;
        let a5 = ExcelUtils.e2(a1, ak, 21, 24);
        a1 = a5.p0;
        let a6 = ExcelUtils.f9(a1, a0, 25);
        a1 = a6.p0;
        let a7 = ExcelUtils.e2(a1, az, 26, 31);
        a1 = a7.p0;
        a._ci._write18(a1);
        let a8 = c._bi(ay, false, true)._y(d, 1);
        let a9 = c._bi(ay, true, true)._y(d, 1);
        h = 0;
        let ba = ExcelUtils.e1(h, a8, 0, 6);
        h = ba.p0;
        let bb = ExcelUtils.e1(h, a9, 7, 13);
        h = bb.p0;
        a._ci._write17(h);
    }
    get_d() {
        return 224;
    }
    get d() {
        return this.get_d();
    }
}
XFRecord.$t = markType(XFRecord, 'XFRecord', Biff8RecordBase.$);
/**
 * @hidden
 */
export class XFRecord_XFContext extends Base {
    constructor(a, b, c) {
        super();
        this.a = null;
        this.c = 0;
        this.b = null;
        this.a = a;
        this.c = b;
        this.b = c;
    }
}
XFRecord_XFContext.$t = markType(XFRecord_XFContext, 'XFRecord_XFContext');
/**
 * @hidden
 */
export class XFRecordInfo extends Base {
    constructor() {
        super(...arguments);
        this.d = 0;
        this.c = 0;
        this.b = 0;
        this.e = 0;
        this.a = 0;
        this.f = 0;
        this.g = 0;
        this.h = 0;
        this.j = 0;
        this.i = 0;
    }
}
XFRecordInfo.$t = markType(XFRecordInfo, 'XFRecordInfo');
callStaticConstructors();
//# sourceMappingURL=excel.biff8.js.map
