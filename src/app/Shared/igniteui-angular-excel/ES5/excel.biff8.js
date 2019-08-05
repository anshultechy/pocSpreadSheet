/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ValueType, markEnum, Base, markType, Stream, Nullable$1, callStaticConstructors, Number_$type, typeCast, fromEnum, Boolean_$type, enumGetBox, markStruct, typeGetValue, EnumUtil, String_$type, Delegate_$type, getInstanceType, Point_$type, Date_$type, getEnumerator } from "../../igniteui-angular-core/ES5/type";
import { WorkbookLoadManager, WorkbookSaveManager, CellContext, CellDataContext, WorksheetCellFormatData, WorkbookStyle, Workbook, SingleTargetFormula, WorksheetCell, WorkbookStyleCollection, WorkbookFontData, WorkbookBuiltInStyle, ExcelImage, WorksheetShape, WorksheetChart, WorksheetReferenceCollection, WorkbookFormatCollection, Worksheet, Formula, WorksheetRow, DataValidationRule, FormulaContext, FormulaToken, SharedTokenConverter, TokenReferenceResolver, FormulaTokenVisitor$1, FormulaTokenVisitor, WorksheetHyperlink, Sheet, PrintOptions, WorksheetTable, WorksheetTableColumn, MultipleCellBlankInfo, MultipleCellRKInfo, ArrayInteriorFormula, WorksheetRegion, ExcelUtils, MultipleCellValueInfo, ErrorValue, StringElementIndex, ArrayFormula, DataTableInteriorFormula, WorksheetColumnBlock, CustomView, DisplayOptions, WorkbookReferenceBase, NamedReferenceBase, CurrentWorkbookReference, WorksheetPaneSelection, WorksheetTableStyle, WorksheetCellComment, SortedList$2, WorksheetFilterSettings, UtilitiesInt32Comparer, RelativeIndex, ConditionBase, CellAddressRange, WorkbookColorInfo, WorksheetTableStyleArea_$type, ExpToken, FunctionVOperator, NameToken, StrToken, TblToken, WorksheetShapeVisitor$2, PropertyTableBase_PropertyValue, ShapeFill, ShapeOutline, WorksheetShapeWithText, UnknownShape, WorksheetImage, PredefinedShapeType_$type, Constant, AttrTokenBase, CellAddress, Function, WorksheetCellAddress, ExcelCalcValue, WorksheetShapeGroup, NamedReference, FtRboData, Obj, FtCmo, AddInFunctionResolver, StringElement, FormulaTokenVisitor$2, BIFF8RecordType_$type, EndOfStreamException, FormattedStringElement, FormattedStringRun, FormattingRunBase, IBiffRecordStream_$type, CfTemplate_$type, AverageConditionalFormat, RankConditionalFormat, OperatorConditionalFormat, FormulaConditionalFormat, TextOperatorConditionalFormat, NamedReferenceFormula, DateTimeConditionalFormat, DataBarConditionalFormat, ColorScaleConditionalFormat, IconSetConditionalFormat, BlanksConditionalFormat, NoBlanksConditionalFormat, ErrorsConditionalFormat, NoErrorsConditionalFormat, UniqueConditionalFormat, DuplicateConditionalFormat, ConditionalFormatBase, FormatConditionType_$type, CellReferenceMode_$type, ThresholdConditionBase, IconCriterion, FormatConditionTimePeriod_$type, IconSet_$type, CustomFilterCondition, FixedValuesFilter, FixedDateGroup, WorksheetColumnFilter, TopOrBottomFilter, CustomFilter, OrderedSortCondition, FillSortCondition, FontColorSortCondition, Rgce, ConditionalFormattingUtils, CellFillPattern, ExtPropColorLoaded, ExtPropFontScheme, ExtPropGradientFillLoaded, ExtPropTextIndentationLevel, WorksheetProtectedRange, FullColorExtInfo, MathUtilities, GradStopInfo, CellFillGradientStop, WorksheetRegionAddress, IconSortCondition, CustomListSortCondition, XFExtGradientInfo, CellFillLinearGradient, CellFillRectangularGradient, XFPropColorInfo, XFPropBorderLoaded, XFPropBool, XFPropColorLoaded, XFPropFontBold, XFPropByte, XFPropFontHeight, XFPropFontName, XFPropFontUnderline, XFPropFontScheme, XFPropFontSubscriptSuperscript, XFPropHorizontalAlignment, XFPropNumberFormat, XFPropNumberFormatId, XFPropFillPattern, XFPropTextIndentationLevel, XFPropTextIndentationLevelRelative, XFPropTextRotation, XFPropVerticalAlignment, XFPropGradientFill, XFPropGradientStopLoaded, WorksheetTableColumnArea_$type, FontSuperscriptSubscriptStyle_$type, FontUnderlineStyle_$type, WorksheetTableArea_$type, FillPatternStyle_$type, FtGmo, FtCf, FtPioGrbit, FtCbls, FtRbo, FtSbs, FtNts, FtMacro, FtPictFmla, ObjLinkFmla, FtCblsData, FtLbsData, FtEdoData, FtGboData, ObjFmla, LbsDropData, PictFmlaKey, ObjectParsedFormula, PictFmlaEmbedInfo, EscherRecordType_$type, IEscherRecord_$type, BLIPType_$type, ICalloutRule_$type, FontXInfo, IWorksheetImage_$type, SystemColorsInternal, IWorksheetShapeOwner_$type, DynamicValuesFilter, FillFilter, FontColorFilter, IconFilter, AverageFilter, DatePeriodFilter, DateRangeFilter, IColorFilter_$type, CalcUtilities, CalculationMode_$type, WorksheetReferenceExternal, ListDataValidationRule, AnyValueDataValidationRule, CustomDataValidationRule, TwoConstraintDataValidationRule, OneConstraintDataValidationRule, OleLinkWorkbookReference, DdeLinkWorkbookReference, OleItem, DdeItem, OleLinkNamedReference, DdeLinkNamedReference, HorizontalPageBreak, FormattedString, PaperSize_$type, BuiltInStyleType_$type, BuiltInStyleInfo, WorkbookUserDefinedStyle, ExternalWorkbookReference, AddInFunctionsWorkbookReference, FormattedText, FormattedTextRun, VerticalPageBreak } from "./excel.core";
import { Dictionary$2 } from "../../igniteui-angular-core/ES5/Dictionary$2";
import { ContextStack, SeekableBufferedStream, InPlaceTransform, WorkItemExtensions, StructuredStorageManager, Async, DocumentSummaryInformation, SummaryInformation, DocCoreUtils, ProtectionValidationInfo, CryptoUtilities, ST_IconSetType_$type, ImageFormat, BinaryData, CT_Transform2D, CT_GroupTransform2D, CT_Point2D, ST_Coordinate, CT_PositiveSize2D, ST_PositiveCoordinate, StringUtilities } from "./documents.core";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { BinaryReader } from "../../igniteui-angular-core/ES5/BinaryReader";
import { Enumerable } from "../../igniteui-angular-core/ES5/Enumerable";
import { CultureInfo } from "../../igniteui-angular-core/ES5/culture";
import { Convert } from "../../igniteui-angular-core/ES5/Convert";
import { KeyValuePair$2 } from "../../igniteui-angular-core/ES5/KeyValuePair$2";
import { arrayShallowClone, boxArray$1 } from "../../igniteui-angular-core/ES5/array";
import { u32BitwiseAnd, u32BitwiseOr, intSToU, u32LS } from "../../igniteui-angular-core/ES5/numberExtended";
import { Rect } from "../../igniteui-angular-core/ES5/Rect";
import { Tuple$3 } from "../../igniteui-angular-core/ES5/Tuple$3";
import { Tuple } from "../../igniteui-angular-core/ES5/Tuple";
import { Encoding } from "../../igniteui-angular-core/ES5/Encoding";
import { ArgumentException } from "../../igniteui-angular-core/ES5/ArgumentException";
import { nullableNotEquals, nullableEquals, nullableIsNull } from "../../igniteui-angular-core/ES5/nullable";
import { stringEmpty, stringIsNullOrEmpty, stringStartsWith, stringContains, stringReplace } from "../../igniteui-angular-core/ES5/string";
import { Buffer } from "../../igniteui-angular-core/ES5/Buffer";
import { intDivide, truncate, isNaN_ } from "../../igniteui-angular-core/ES5/number";
import { MemoryStream } from "../../igniteui-angular-core/ES5/MemoryStream";
import { BitConverter } from "../../igniteui-angular-core/ES5/BitConverter";
import { stringFormat } from "../../igniteui-angular-core/ES5/stringExtended";
import { IComparer$1_$type } from "../../igniteui-angular-core/ES5/IComparer$1";
import { Color } from "../../igniteui-angular-core/ES5/Color";
import { Guid } from "../../igniteui-angular-core/ES5/Guid";
import { Uri } from "../../igniteui-angular-core/ES5/Uri";
import { dateGetMonth, dateFromFileTimeUtc } from "../../igniteui-angular-core/ES5/date";
import { InvalidOperationException } from "../../igniteui-angular-core/ES5/InvalidOperationException";
import { BinaryWriter } from "../../igniteui-angular-core/ES5/BinaryWriter";
import { StringBuilder } from "../../igniteui-angular-core/ES5/StringBuilder";
/**
 * @hidden
 */
export var LIST12Record_LIST12DataType_$type = markEnum('LIST12Record_LIST12DataType', 'BlockLevelFormatting,0|StyleInfo,1|DisplayName,2');
/**
 * @hidden
 */
export var BOFRecord_BiffVersion_$type = markEnum('BOFRecord_BiffVersion', 'Biff2_1,0|Biff2_2,7|Biff2_3,512|Biff3,768|Biff4,1024|Biff5,1280|Biff7,1280|Biff8,1536');
/**
 * @hidden
 */
var BiffRecordBase$3 = /** @class */ (function (_super) {
    tslib_1.__extends(BiffRecordBase$3, _super);
    function BiffRecordBase$3($recordTypeEnum, $loadContextType, $saveContextType) {
        var _this = _super.call(this) || this;
        _this.$recordTypeEnum = null;
        _this.$loadContextType = null;
        _this.$saveContextType = null;
        _this.$recordTypeEnum = $recordTypeEnum;
        _this.$loadContextType = $loadContextType;
        _this.$saveContextType = $saveContextType;
        _this.$type = _this.$type.specialize(_this.$recordTypeEnum, _this.$loadContextType, _this.$saveContextType);
        return _this;
    }
    BiffRecordBase$3.prototype.get_e = function () {
        return false;
    };
    Object.defineProperty(BiffRecordBase$3.prototype, "e", {
        get: function () {
            return this.get_e();
        },
        enumerable: true,
        configurable: true
    });
    BiffRecordBase$3.prototype.a = function (a) {
        return null;
    };
    BiffRecordBase$3.prototype.b = function (a) {
        return null;
    };
    BiffRecordBase$3.g = function ($recordTypeEnum, $loadContextType, $saveContextType) {
        if (BiffRecordBase$3.$t.specialize($recordTypeEnum, $loadContextType, $saveContextType).getStaticFields().f == null) {
            BiffRecordBase$3.$t.specialize($recordTypeEnum, $loadContextType, $saveContextType).getStaticFields().f = new Dictionary$2($recordTypeEnum, BiffRecordBase$3.$.specialize($recordTypeEnum, $loadContextType, $saveContextType), 0);
        }
        return BiffRecordBase$3.$t.specialize($recordTypeEnum, $loadContextType, $saveContextType).getStaticFields().f;
    };
    BiffRecordBase$3.c = function ($recordTypeEnum, $loadContextType, $saveContextType, a, b) {
        var c;
        if (((function () { var d = BiffRecordBase$3.g($recordTypeEnum, $loadContextType, $saveContextType).tryGetValue(a, c); c = d.p1; return d.ret; })())) {
            return c;
        }
        c = b(a);
        BiffRecordBase$3.g($recordTypeEnum, $loadContextType, $saveContextType).addItem(a, c);
        return c;
    };
    BiffRecordBase$3.$t = markType(BiffRecordBase$3, 'BiffRecordBase$3', Base.$, null, function () {
        this.f = null;
    });
    return BiffRecordBase$3;
}(Base));
export { BiffRecordBase$3 };
/**
 * @hidden
 */
var WorkbookSaveManagerExcel2003 = /** @class */ (function (_super) {
    tslib_1.__extends(WorkbookSaveManagerExcel2003, _super);
    function WorkbookSaveManagerExcel2003(a, b, c, d) {
        var _this = _super.call(this, a, c, d) || this;
        _this._cs = null;
        _this._ck = new WorkbookSerializationDataExcel2003();
        _this._ct = null;
        _this._cz = 0;
        _this._cq = null;
        _this._cr = null;
        _this._cu = null;
        _this._cp = null;
        _this._co = null;
        _this._cj = null;
        _this._cg = null;
        _this._b8 = null;
        _this._ck = new WorkbookSerializationDataExcel2003(1, b);
        _this._ct = new List$1(WorkbookSaveManagerExcel2003_ExtSstItem.$, 0);
        _this._cq = new Dictionary$2(Base.$, SingleTargetFormula.$, 0);
        _this._cr = new Dictionary$2(Base.$, WorksheetCell.$, 0);
        _this._cu = new List$1(WorkbookStyle.$, 0);
        _this._cp = new Dictionary$2(Number_$type, Number_$type, 0);
        return _this;
    }
    WorkbookSaveManagerExcel2003.staticInit = function () {
        Workbook._e2 = WorkbookSaveManagerExcel2003._b9;
    };
    WorkbookSaveManagerExcel2003.prototype.disposeCore = function (a) {
        if (a) {
            if (this._ci != null) {
                this._ci.dispose();
                this._ci = null;
            }
            this._c4.dispose();
        }
    };
    WorkbookSaveManagerExcel2003.prototype.get__r = function () {
        return this._cj;
    };
    WorkbookSaveManagerExcel2003.prototype.set__r = function (a) {
        this._cj = a;
    };
    WorkbookSaveManagerExcel2003.prototype.get__q = function () {
        return this._ch;
    };
    WorkbookSaveManagerExcel2003.prototype.set__q = function (a) {
        this._ch = a;
    };
    WorkbookSaveManagerExcel2003.prototype._a6 = function (a) {
        var b = this._b._ca;
        var c = b._p;
        if (a == c) {
            return 15;
        }
        var d = b._g(c);
        var e = b._g(a);
        if (e > d) {
            e--;
        }
        return (this._cz + e);
    };
    WorkbookSaveManagerExcel2003.prototype._a7 = function (a) {
        var b;
        var c = this._at.tryGetValue(a, b);
        b = c.p1;
        return b;
    };
    WorkbookSaveManagerExcel2003.prototype._bk = function () {
        var e_1, _0, e_2, _1;
        var a = this._b._styles$i;
        var b = a.normalStyle;
        var c = b._i;
        this._bd(c._bp, c);
        var d = this._h;
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
        try {
            for (var _2 = tslib_1.__values(fromEnum(this._b._styles$i)), _3 = _2.next(); !_3.done; _3 = _2.next()) {
                var e = _3.value;
                if (e._o == false) {
                    continue;
                }
                var f = typeCast(WorkbookBuiltInStyle.$, e);
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
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_3 && !_3.done && (_0 = _2.return)) _0.call(_2);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this._cz = this._cw.count;
        var g = this._b._ca;
        try {
            for (var _4 = tslib_1.__values(fromEnum(g)), _5 = _4.next(); !_5.done; _5 = _4.next()) {
                var h = _5.value;
                if (h == g._p) {
                    continue;
                }
                this._c5(h);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_5 && !_5.done && (_1 = _4.return)) _1.call(_4);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    WorkbookSaveManagerExcel2003.prototype._bo = function (a) {
        _super.prototype._bo.call(this, a);
        var b = a.image;
        if (b == null) {
            return;
        }
        var c = new WorkbookSerializationDataExcel2003_ImageHolder(b, 1);
        var d = this._cx.indexOf(c);
        if (d < 0) {
            this._cx.add(c);
        }
        else {
            c = this._cx._inner[d];
            c.d++;
        }
    };
    WorkbookSaveManagerExcel2003.prototype.get__ag = function () {
        return false;
    };
    Object.defineProperty(WorkbookSaveManagerExcel2003.prototype, "_ag", {
        get: function () {
            return this.get__ag();
        },
        enumerable: true,
        configurable: true
    });
    WorkbookSaveManagerExcel2003.prototype._b4 = function (a) {
        var b = _super.prototype._b4.call(this, a);
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
        var c = typeCast(WorksheetChart.$, a);
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
    };
    WorkbookSaveManagerExcel2003.prototype._p = function () {
        var _this = this;
        var e_3, _0, e_4, _1;
        var a = new List$1(Number_$type, 0);
        var b = 384;
        var c = 164;
        var d = this._b._b2;
        try {
            for (var _2 = tslib_1.__values(fromEnum(d.m())), _3 = _2.next(); !_3.done; _3 = _2.next()) {
                var e = _3.value;
                if (e >= b) {
                    while (d.c(c)) {
                        c++;
                    }
                    this._cp.item(e, c);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_3 && !_3.done && (_0 = _2.return)) _0.call(_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        try {
            for (var _4 = tslib_1.__values(fromEnum(this._b._worksheets$i)), _5 = _4.next(); !_5.done; _5 = _4.next()) {
                var f = _5.value;
                if (f._conditionalFormats$i.count == 0) {
                    continue;
                }
                if (this._co == null) {
                    this._co = new Dictionary$2(Worksheet.$, CFSerializer.$, 0);
                }
                this._co.addItem(f, CFSerializer.a(f));
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_5 && !_5.done && (_1 = _4.return)) _1.call(_4);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return WorkItemExtensions.a(WorkItemExtensions.c(this._cd(), function () { return Async.d(Sheet.$, _this._az, function (g) {
            a.add(_this._c4.position);
            return _this._ca(g);
        }); }), function () { return _this._db(a); });
    };
    WorkbookSaveManagerExcel2003.prototype._c0 = function (a) {
        var _this = this;
        var b;
        if (((function () { var c = _this._cp.tryGetValue(a, b); b = c.p1; return c.ret; })())) {
            return b;
        }
        return a;
    };
    WorkbookSaveManagerExcel2003.prototype._cl = function (a) {
        return this._cq.item(a._bg);
    };
    WorkbookSaveManagerExcel2003.prototype._cm = function (a, b, c) {
        var _this = this;
        var d = c._bg;
        var e;
        if (((function () { var f = _this._cr.tryGetValue(d, e); e = f.p1; return f.ret; })()) == false) {
            this._cr.item(d, e = a._cells$i.item(b));
            this._cq.item(d, Formula._u(c, e));
        }
        return e;
    };
    WorkbookSaveManagerExcel2003.prototype._c8 = function (a) {
        this._ci = a._parentStream;
    };
    WorkbookSaveManagerExcel2003.prototype._c9 = function (a) {
        if (this._ci != null) {
            this._ci._addSubStream(a);
        }
        this._ci = a;
    };
    WorkbookSaveManagerExcel2003.prototype._da = function (a) {
        a._am(WorkbookSaveManagerExcel2003.$, Boolean_$type, WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor.d, this);
    };
    WorkbookSaveManagerExcel2003._b9 = function (a, b, c) {
        return Async.n(StructuredStorageManager.$, new StructuredStorageManager(b, false), function (d) {
            if (a._cr) {
                a.documentProperties._ah(d);
            }
            return WorkItemExtensions.a(Async.n(Stream.$, d._ab("Workbook"), function (e) { return Async.n(WorkbookSaveManagerExcel2003.$, new WorkbookSaveManagerExcel2003(a, e, ExcelUtils.ee(b), c), function (f) { return f._o(); }); }), function () {
                var e_5, _0;
                try {
                    for (var _1 = tslib_1.__values(fromEnum(a._d7())), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                        var e = _2.value;
                        var f = d._ab(e.key);
                        try {
                            f.write(e.value, 0, e.value.length);
                        }
                        finally {
                            if (f != null) {
                                f.dispose();
                            }
                        }
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
            });
        });
    };
    WorkbookSaveManagerExcel2003.prototype._c2 = function (a, b, c, d) {
        if (d === void 0) { d = true; }
        var e = this._ci;
        var f = 0;
        if (b) {
            e._write17(0);
        }
        if (a._e.length == 0) {
            return f;
        }
        var g = e.position;
        var h = a._ab == null ? -1 : a._ab.index;
        var i = new FormulaContext(1, e.saveManager._b, a);
        var j = a._e;
        if (d) {
            j = arrayShallowClone(j);
            var k = SharedTokenConverter.a3(i, false);
            for (var l = 0; l < a._e.length; l++) {
                j[l] = a._e[l].d(FormulaToken.$, k);
            }
            k.a1();
        }
        if (a._aq == false) {
            var m = TokenReferenceResolver.bk(i, j);
            var n = m.a2();
        }
        var o = new Array(j.length);
        var p = WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.a5(i, e, c, o);
        var q = g;
        for (var r = 0; r < j.length; r++) {
            var s = j[r];
            o[r] = q;
            q += s.d(Number_$type, p);
        }
        p.a1();
        var t = WorkbookSaveManagerExcel2003_SaveTokenVisitor.a5(i, e, c, j, o);
        t.h();
        var u = e.position;
        f = (u - g);
        if (b) {
            e.position = g - 2;
            e._write17(f);
            e.position = u;
        }
        var v = WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor.a1(i, e);
        v.h();
        return f;
    };
    WorkbookSaveManagerExcel2003.prototype._dp = function (a) {
        {
            var b = new Biff8RecordStream(3, this, a);
            try {
                var c = this._ck.e(a);
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
    };
    WorkbookSaveManagerExcel2003.prototype._cc = function (a) {
        var _this = this;
        return Async.n(Biff8RecordStream.$, new Biff8RecordStream(3, this, a), function (b) {
            var c = _this._ck.e(a);
            if (c.n == false) {
                b._transform.k();
            }
            return WorkItemExtensions.a(c.b(_this), function () {
                if (c.n == false) {
                    b._transform.i();
                }
            });
        });
    };
    WorkbookSaveManagerExcel2003.prototype._c5 = function (a) {
        this._bd(a._bp, a);
        this._cw.add(a);
    };
    WorkbookSaveManagerExcel2003.prototype._c6 = function (a) {
        if (a != null) {
            this._at.addItem(a, this._cw.count);
            this._c5(a._i);
        }
        else {
            var b = new WorksheetCellFormatData(this._b, 1);
            this._c5(b);
        }
    };
    WorkbookSaveManagerExcel2003.prototype._c7 = function (a, b, c) {
        var e_6, _0;
        var d = this._c4.position;
        this._c4.position = a;
        var e = new BinaryReader(1, this._c4);
        {
            var f = new Biff8RecordStream(4, this, this._c4, e);
            try {
                f.position = 12;
                f._write18(b);
                f.position = 16;
                try {
                    for (var _1 = tslib_1.__values(fromEnum(c)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                        var g = _2.value;
                        f._write18(g);
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
            }
            finally {
                if (f != null) {
                    f.dispose();
                }
            }
        }
        this._c4.position = d;
    };
    WorkbookSaveManagerExcel2003.prototype._ca = function (a) {
        if (a.type == 0) {
            return this._cb(a);
        }
        else {
            return null;
        }
    };
    WorkbookSaveManagerExcel2003.prototype._cb = function (a) {
        var _this = this;
        this._b7.k(a.displayOptions);
        this._b7.k(a.printOptions);
        this._b7.k(a);
        this._dp(2057);
        var b = this._c4.position;
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
            var c = a.protection._c.h();
            if (c.hasValue && c.value != 0) {
                this._dp(19);
            }
        }
        var d = this._c4.position;
        this._dp(85);
        this._dd(a);
        this._dp(512);
        return WorkItemExtensions.e(List$1.$.specialize(Number_$type), this._cf(a), function (e) {
            var e_7, _0, e_8, _1, e_9, _2;
            var f = WorkItemExtensions.m(List$1.$.specialize(Number_$type), e);
            _this._c7(b, d, f);
            if (_this._ah) {
                _this._dp(236);
            }
            _this._dt(a);
            _this._dp(574);
            _this._dp(2187);
            _this._dn(a);
            _this._dj(a);
            _this._dq(a.displayOptions);
            _this._df(a);
            if (a._ek) {
                _this._dp(153);
            }
            if (_this._ae(a)) {
                _this._dp(229);
            }
            if (a._d8) {
                try {
                    for (var _3 = tslib_1.__values(fromEnum(a._hyperlinks$i)), _4 = _3.next(); !_4.done; _4 = _3.next()) {
                        var g = _4.value;
                        _this._b7.k(g);
                        _this._dp(440);
                        if (g.toolTip != null) {
                            _this._dp(2048);
                        }
                        _this._b7.h();
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (_4 && !_4.done && (_0 = _3.return)) _0.call(_3);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
            }
            if (a._d6) {
                _this._dp(434);
                try {
                    for (var _5 = tslib_1.__values(fromEnum(a._dataValidationRules$i)), _6 = _5.next(); !_6.done; _6 = _5.next()) {
                        var h = _6.value;
                        var i = new List$1(CellAddressRange.$, 0);
                        try {
                            for (var _7 = tslib_1.__values(fromEnum(h.value)), _8 = _7.next(); !_8.done; _8 = _7.next()) {
                                var j = _8.value;
                                i.add(new CellAddressRange(2, j));
                            }
                        }
                        catch (e_9_1) { e_9 = { error: e_9_1 }; }
                        finally {
                            try {
                                if (_8 && !_8.done && (_2 = _7.return)) _2.call(_7);
                            }
                            finally { if (e_9) throw e_9.error; }
                        }
                        _this._b7.k(h.key);
                        _this._b7.k(i);
                        while (i.count != 0) {
                            _this._dp(446);
                        }
                        _this._b7.h();
                        _this._b7.h();
                    }
                }
                catch (e_8_1) { e_8 = { error: e_8_1 }; }
                finally {
                    try {
                        if (_6 && !_6.done && (_1 = _5.return)) _1.call(_5);
                    }
                    finally { if (e_8) throw e_8.error; }
                }
            }
            if (_this._b._cp && a._ak != null) {
                _this._dp(442);
            }
            if (WorkbookColorInfo.l_op_Inequality(a.displayOptions.tabColorInfo, null)) {
                _this._dp(2146);
            }
            if (_this._co != null && _this._co.containsKey(a)) {
                _this._de(a);
            }
            _this._dp(2151);
            var k = a.protection._allowedEditRanges$i;
            for (var l = k.count - 1; l >= 0; l--) {
                _this._b7.k(k.item(l));
                _this._dp(2152);
                _this._b7.h();
            }
            _this._dv(a);
            _this._du(a);
            _this._dp(10);
            _this._b7.h();
            _this._b7.h();
            _this._b7.h();
        });
    };
    WorkbookSaveManagerExcel2003._cn = function (a) {
        if (a.isHeaderRowVisible == false) {
            return true;
        }
        return Enumerable.d(WorksheetTableColumn.$, a._columns$i, function (b) { return b.totalFormula != null || b.totalLabel != null; });
    };
    WorkbookSaveManagerExcel2003.prototype._db = function (a) {
        if (this._cs == null) {
            return;
        }
        var b = new BinaryReader(1, this._c4);
        for (var c = 0; c < a.count; c++) {
            this._c4.position = this._cs._inner[c];
            {
                var d = new Biff8RecordStream(4, this, this._c4, b);
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
    };
    WorkbookSaveManagerExcel2003.prototype._dc = function () {
        var e_10, _0;
        this._cs = new List$1(Number_$type, 0);
        try {
            for (var _1 = tslib_1.__values(fromEnum(this._az)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var a = _2.value;
                this._cs.add(this._c4.position);
                this._b7.k(a);
                this._dp(133);
                this._b7.h();
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_10) throw e_10.error; }
        }
    };
    WorkbookSaveManagerExcel2003.prototype._c3 = function () {
        var a = this._a3(this._cj.b, this._ch);
        var b = this._ch.r;
        this._cj.c = a;
        if (ExcelUtils.a9(a)) {
            var c = MultipleCellBlankInfo.o(this);
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
            var d_1 = Convert.toDouble4(a, CultureInfo.invariantCulture);
            var e_11;
            if (((function () { var f = ExcelUtils.bz(d_1, e_11); e_11 = f.p1; return f.ret; })())) {
                var f = MultipleCellRKInfo.o(this);
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
        var g = typeCast(Formula.$, a);
        if (g != null) {
            if (g._as) {
                var h = this._cm(this._cj.b, b, g);
                this._b7.k(h);
                this._dp(6);
                this._b7.h();
            }
            else {
                this._dp(6);
                if (g._ak) {
                    var i = g;
                    if (i._cz.cellRange.firstRow == this._cj.b.index && i._cz.cellRange.firstColumn == b) {
                        this._dp(545);
                    }
                }
                else if (g._am) {
                    var j = g._cz.cellsInTable;
                    if (j.firstRow == this._cj.b.index - 1 && j.firstColumn == b - 1) {
                        this._dp(566);
                    }
                }
            }
            return b;
        }
        return b;
    };
    WorkbookSaveManagerExcel2003.prototype._dd = function (a) {
        var e_12, _0;
        var b = new List$1(WorksheetColumnBlock.$, 1, a._ff);
        if (b.count == 1 && b._inner[0].k) {
            return;
        }
        try {
            for (var _1 = tslib_1.__values(fromEnum(b)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var c = _2.value;
                if (c.k) {
                    continue;
                }
                this._b7.k(c);
                this._dp(125);
                this._b7.h();
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_12) throw e_12.error; }
        }
    };
    WorkbookSaveManagerExcel2003.prototype._df = function (a) {
        var e_13, _0;
        if (this._b._cq == false) {
            return;
        }
        try {
            for (var _1 = tslib_1.__values(fromEnum(this._b._customViews$i)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var b = _2.value;
                var c = b.getDisplayOptions(a, false);
                if (c == null) {
                    continue;
                }
                var d = b.getPrintOptions(a, false);
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
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_13) throw e_13.error; }
        }
    };
    WorkbookSaveManagerExcel2003.prototype._dg = function () {
        var e_14, _0;
        if (this._b._cq == false) {
            return;
        }
        try {
            for (var _1 = tslib_1.__values(fromEnum(this._b._customViews$i)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var a = _2.value;
                this._b7.k(a);
                this._dp(425);
                this._b7.h();
            }
        }
        catch (e_14_1) { e_14 = { error: e_14_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_14) throw e_14.error; }
        }
    };
    WorkbookSaveManagerExcel2003.prototype._dh = function (a) {
        this._dp(426);
        this._dq(this._b7.a(DisplayOptions.$));
        if (a) {
            var b = this._b7.a(PrintOptions.$);
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
    };
    WorkbookSaveManagerExcel2003.prototype._di = function () {
        var e_15, _0, e_16, _1;
        var a = this._i;
        if (a.count == 0) {
            return;
        }
        try {
            for (var _2 = tslib_1.__values(fromEnum(a)), _3 = _2.next(); !_3.done; _3 = _2.next()) {
                var b = _3.value;
                this._b7.k(b);
                this._dp(430);
                if ((typeCast(CurrentWorkbookReference.$, b) !== null) == false) {
                    try {
                        for (var _4 = tslib_1.__values(fromEnum(b.u)), _5 = _4.next(); !_5.done; _5 = _4.next()) {
                            var c = _5.value;
                            this._b7.k(c);
                            this._dp(35);
                            this._b7.h();
                        }
                    }
                    catch (e_16_1) { e_16 = { error: e_16_1 }; }
                    finally {
                        try {
                            if (_5 && !_5.done && (_1 = _4.return)) _1.call(_4);
                        }
                        finally { if (e_16) throw e_16.error; }
                    }
                }
                this._b7.h();
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_3 && !_3.done && (_0 = _2.return)) _0.call(_2);
            }
            finally { if (e_15) throw e_15.error; }
        }
        this._dp(23);
    };
    WorkbookSaveManagerExcel2003.prototype._dj = function (a) {
        if (a.displayOptions._b3 != 100) {
            this._dp(160);
        }
    };
    WorkbookSaveManagerExcel2003.prototype._dk = function () {
        var e_17, _0;
        try {
            for (var _1 = tslib_1.__values(fromEnum(this._b._bb.u)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var a = _2.value;
                this._b7.k(a);
                this._dp(24);
                if (a.comment != null && a.comment.length > 0) {
                    this._dp(2196);
                }
                this._b7.h();
            }
        }
        catch (e_17_1) { e_17 = { error: e_17_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_17) throw e_17.error; }
        }
    };
    WorkbookSaveManagerExcel2003.prototype._dl = function (a) {
        this._b7.k(new WorkbookSaveManagerExcel2003_FormatHolder(a, this._b._b2.ad(a)));
        this._dp(1054);
        this._b7.h();
    };
    WorkbookSaveManagerExcel2003.prototype._dm = function () {
        var e_18, _0;
        this._dl(5);
        this._dl(6);
        this._dl(7);
        this._dl(8);
        this._dl(42);
        this._dl(41);
        this._dl(44);
        this._dl(43);
        if (this._b._ct) {
            try {
                for (var _1 = tslib_1.__values(fromEnum(this._b._b2.m())), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                    var a = _2.value;
                    this._dl(a);
                }
            }
            catch (e_18_1) { e_18 = { error: e_18_1 }; }
            finally {
                try {
                    if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
                }
                finally { if (e_18) throw e_18.error; }
            }
        }
    };
    WorkbookSaveManagerExcel2003.prototype._dn = function (a) {
        var b = a.displayOptions;
        var c;
        if (b.panesAreFrozen) {
            c = b.frozenPaneSettings.frozenColumns != 0 || b.frozenPaneSettings.frozenRows != 0;
        }
        else {
            c = b.unfrozenPaneSettings.leftPaneWidth != 0 || b.unfrozenPaneSettings.topPaneHeight != 0;
        }
        if (c) {
            this._dp(65);
        }
    };
    WorkbookSaveManagerExcel2003.prototype._dq = function (a) {
        var e_19, _0;
        a._br();
        if (a._ai && a._af.b.count > 0) {
            try {
                for (var _1 = tslib_1.__values(fromEnum(a._af.b)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                    var b = _2.value;
                    this._b7.k(b);
                    this._dp(29);
                    this._b7.h();
                }
            }
            catch (e_19_1) { e_19 = { error: e_19_1 }; }
            finally {
                try {
                    if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
                }
                finally { if (e_19) throw e_19.error; }
            }
        }
        else {
            this._dp(29);
        }
    };
    WorkbookSaveManagerExcel2003.prototype._dr = function () {
        var e_20, _0;
        try {
            for (var _1 = tslib_1.__values(fromEnum(this._h)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var a = _2.value;
                if (a == null) {
                    continue;
                }
                this._b7.k(a);
                this._dp(49);
                this._b7.h();
            }
        }
        catch (e_20_1) { e_20 = { error: e_20_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_20) throw e_20.error; }
        }
    };
    WorkbookSaveManagerExcel2003.prototype._cd = function () {
        var _this = this;
        var e_21, _0, e_22, _1, e_23, _2;
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
        var a = this._c4.position;
        var b = new List$1(XFRecord_XFContext.$, 0);
        for (var c = 0; c < this._cw.count; c++) {
            var d = this._cw._inner[c];
            var e = new XFRecord_XFContext(d, c, d._cg());
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
            try {
                for (var _3 = tslib_1.__values(fromEnum(b)), _4 = _3.next(); !_4.done; _4 = _3.next()) {
                    var f = _4.value;
                    this._b7.k(f);
                    this._dp(2173);
                    this._b7.h();
                }
            }
            catch (e_21_1) { e_21 = { error: e_21_1 }; }
            finally {
                try {
                    if (_4 && !_4.done && (_0 = _3.return)) _0.call(_3);
                }
                finally { if (e_21) throw e_21.error; }
            }
        }
        try {
            for (var _5 = tslib_1.__values(fromEnum(this._g)), _6 = _5.next(); !_6.done; _6 = _5.next()) {
                var g = _6.value;
                this._b7.k(g);
                this._dp(2189);
                this._b7.h();
            }
        }
        catch (e_22_1) { e_22 = { error: e_22_1 }; }
        finally {
            try {
                if (_6 && !_6.done && (_1 = _5.return)) _1.call(_5);
            }
            finally { if (e_22) throw e_22.error; }
        }
        this._ds();
        this._dp(2190);
        try {
            for (var _7 = tslib_1.__values(fromEnum(this._b._customTableStyles$i)), _8 = _7.next(); !_8.done; _8 = _7.next()) {
                var h = _8.value;
                this._dw(h);
            }
        }
        catch (e_23_1) { e_23 = { error: e_23_1 }; }
        finally {
            try {
                if (_8 && !_8.done && (_2 = _7.return)) _2.call(_7);
            }
            finally { if (e_23) throw e_23.error; }
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
        return WorkItemExtensions.a(this._cc(252), function () {
            _this._dp(255);
            _this._dp(2198);
            _this._dp(10);
            _this._b7.h();
        });
    };
    WorkbookSaveManagerExcel2003.prototype._ds = function () {
        var e_24, _0;
        if (this._cu.count == 0) {
            return;
        }
        try {
            for (var _1 = tslib_1.__values(fromEnum(this._cu)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var a = _2.value;
                this._b7.k(a);
                this._dp(659);
                if (a._i._ch().count != 0) {
                    this._dp(2194);
                }
                this._b7.h();
            }
        }
        catch (e_24_1) { e_24 = { error: e_24_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_24) throw e_24.error; }
        }
    };
    WorkbookSaveManagerExcel2003.prototype._dt = function (a) {
        var e_25, _0;
        var b = this._w(a);
        try {
            for (var _1 = tslib_1.__values(fromEnum(b.j)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var c = _2.value;
                this._b7.k(c.cell);
                this._dp(28);
                this._b7.h();
            }
        }
        catch (e_25_1) { e_25 = { error: e_25_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_25) throw e_25.error; }
        }
    };
    WorkbookSaveManagerExcel2003.prototype._du = function (a) {
        var e_26, _0;
        if (a.filterSettings.region == null) {
            return;
        }
        this._dp(155);
        this._dp(157);
        this._b7.k(a.filterSettings);
        var b = a.filterSettings.region._ad;
        var c = new SortedList$2(Number_$type, TableColumnFilterData.$, 1, UtilitiesInt32Comparer._c);
        for (var d = 0; d < b; d++) {
            var e = a.filterSettings.getFilter(d);
            if (e != null) {
                var f = new TableColumnFilterData(1, d, e);
                if (f.e) {
                    c._m(d, f);
                }
            }
        }
        this._b7.k(c);
        try {
            for (var _1 = tslib_1.__values(fromEnum(c._j)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var g = _2.value;
                this._b7.k(g);
                this._dp(158);
                if (g.d) {
                    this._dp(2174);
                }
            }
        }
        catch (e_26_1) { e_26 = { error: e_26_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_26) throw e_26.error; }
        }
        this._b7.h();
        if (a.filterSettings.sortSettings._o) {
            this._dp(2197);
        }
        this._b7.h();
    };
    WorkbookSaveManagerExcel2003.prototype._ce = function (a, b) {
        var _this = this;
        var e_27, _0;
        var c = this._c4.position;
        try {
            for (var _1 = tslib_1.__values(fromEnum(b)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var d = _2.value;
                this._b7.k(d);
                this._dp(520);
                this._b7.h();
            }
        }
        catch (e_27_1) { e_27 = { error: e_27_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_27) throw e_27.error; }
        }
        var e = new List$1(Number_$type, 0);
        var f = 0;
        return WorkItemExtensions.g(Number_$type, Async.d(WorksheetRow.$, b, function (g) {
            e.add(_this._c4.position);
            var h = g._hasCellFormat ? g._cellFormatInternal.d : null;
            var i = _this._u(g);
            _this._cj = new CellContext(g, i);
            var j = -1;
            return WorkItemExtensions.a(Async.e(CellDataContext.$, g._ch(), function (k) {
                if (k.r <= j) {
                    return true;
                }
                if (k.j == null) {
                    k.j = h || a._cb(k.r).b;
                }
                _this._ch = k;
                j = _this._c3();
                f += j + 1 - k.r;
                if (1000 < f) {
                    f = 0;
                    return false;
                }
                return true;
            }), function () {
                _this._cj = null;
                _this._ch = null;
            });
        }), function () {
            var g = _this._c4.position;
            var h = new DBCELLRecord_DBCELLInfo(c, e);
            _this._b7.k(h);
            _this._dp(215);
            _this._b7.h();
            return g;
        });
    };
    WorkbookSaveManagerExcel2003.prototype._cf = function (a) {
        var _this = this;
        var b = new List$1(Number_$type, 0);
        var c = new List$1(WorksheetRow.$, 0);
        var d = -1;
        return WorkItemExtensions.g(List$1.$.specialize(Number_$type), WorkItemExtensions.c(Async.d(WorksheetRow.$, this._aw(a), function (e) {
            var f = _this._u(e);
            if (f == null) {
                return null;
            }
            if (d < 0) {
                d = e.index;
            }
            return WorkItemExtensions.a(Async.g(e.index - d > 31, function () { return WorkItemExtensions.e(Number_$type, _this._ce(a, c), function (g) {
                b.add(WorkItemExtensions.m(Number_$type, g));
                c.clear();
                d = e.index;
            }); }), function () { return c.add(e); });
        }), function () { return Async.g(c.count > 0, function () { return WorkItemExtensions.e(Number_$type, _this._ce(a, c), function (e) { return b.add(WorkItemExtensions.m(Number_$type, e)); }); }); }), function () { return b; });
    };
    WorkbookSaveManagerExcel2003.prototype._dv = function (a) {
        var e_28, _0, e_29, _1;
        if (a._tables$i.count == 0) {
            return;
        }
        this._dp(2161);
        try {
            for (var _2 = tslib_1.__values(fromEnum(a._tables$i)), _3 = _2.next(); !_3.done; _3 = _2.next()) {
                var b = _3.value;
                var c = new SortedList$2(Number_$type, TableColumnFilterData.$, 1, UtilitiesInt32Comparer._c);
                for (var d = 0; d < b._columns$i.count; d++) {
                    var e = b._columns$i._item(d);
                    var f = new TableColumnFilterData(0, d, e);
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
                try {
                    for (var _4 = tslib_1.__values(fromEnum(c._j)), _5 = _4.next(); !_5.done; _5 = _4.next()) {
                        var g = _5.value;
                        if (g.d) {
                            this._b7.k(g);
                            this._dp(2174);
                            this._b7.h();
                        }
                    }
                }
                catch (e_29_1) { e_29 = { error: e_29_1 }; }
                finally {
                    try {
                        if (_5 && !_5.done && (_1 = _4.return)) _1.call(_4);
                    }
                    finally { if (e_29) throw e_29.error; }
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
        catch (e_28_1) { e_28 = { error: e_28_1 }; }
        finally {
            try {
                if (_3 && !_3.done && (_0 = _2.return)) _0.call(_2);
            }
            finally { if (e_28) throw e_28.error; }
        }
    };
    WorkbookSaveManagerExcel2003.prototype._dw = function (a) {
        var e_30, _0;
        this._b7.k(a);
        this._dp(2191);
        try {
            for (var _1 = tslib_1.__values(fromEnum(this._aa(a))), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var b = _2.value;
                this._b7.k(enumGetBox(WorksheetTableStyleArea_$type, b.key));
                this._b7.k(b.value);
                this._dp(2192);
                this._b7.h();
                this._b7.h();
            }
        }
        catch (e_30_1) { e_30 = { error: e_30_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_30) throw e_30.error; }
        }
        this._b7.h();
    };
    WorkbookSaveManagerExcel2003.prototype._de = function (a) {
        var _this = this;
        var e_31, _0, e_32, _1;
        if (this._co == null) {
            return;
        }
        var b = null;
        if (((function () { var c = _this._co.tryGetValue(a, b); b = c.p1; return c.ret; })()) == false) {
            return;
        }
        try {
            for (var _2 = tslib_1.__values(fromEnum(b.c)), _3 = _2.next(); !_3.done; _3 = _2.next()) {
                var c = _3.value;
                this._b7.k(c);
                this._dp(2169);
                try {
                    for (var _4 = tslib_1.__values(fromEnum(c.h)), _5 = _4.next(); !_5.done; _5 = _4.next()) {
                        var d = _5.value;
                        this._b7.k(d);
                        this._dp(2170);
                        this._b7.h();
                    }
                }
                catch (e_32_1) { e_32 = { error: e_32_1 }; }
                finally {
                    try {
                        if (_5 && !_5.done && (_1 = _4.return)) _1.call(_4);
                    }
                    finally { if (e_32) throw e_32.error; }
                }
                this._b7.h();
            }
        }
        catch (e_31_1) { e_31 = { error: e_31_1 }; }
        finally {
            try {
                if (_3 && !_3.done && (_0 = _2.return)) _0.call(_2);
            }
            finally { if (e_31) throw e_31.error; }
        }
    };
    Object.defineProperty(WorkbookSaveManagerExcel2003.prototype, "_b7", {
        get: function () {
            return this._ck.b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookSaveManagerExcel2003.prototype, "_ch", {
        get: function () {
            return this._cg;
        },
        set: function (a) {
            if (this._cg != a) {
                if (this._cg != null) {
                    this._cg.u();
                }
                this._cg = a;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookSaveManagerExcel2003.prototype, "_ci", {
        get: function () {
            return this._ck.d;
        },
        set: function (a) {
            this._ck.d = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookSaveManagerExcel2003.prototype, "_cv", {
        get: function () {
            return this._ct;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookSaveManagerExcel2003.prototype, "_cw", {
        get: function () {
            return this._ck.p;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookSaveManagerExcel2003.prototype, "_cx", {
        get: function () {
            return this._ck.q;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookSaveManagerExcel2003.prototype, "_cy", {
        get: function () {
            return this._cu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookSaveManagerExcel2003.prototype, "_c4", {
        get: function () {
            return this._ck.c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookSaveManagerExcel2003.prototype, "_b6", {
        get: function () {
            return this._ck.a;
        },
        enumerable: true,
        configurable: true
    });
    WorkbookSaveManagerExcel2003.$t = markType(WorkbookSaveManagerExcel2003, 'WorkbookSaveManagerExcel2003', WorkbookSaveManager.$);
    return WorkbookSaveManagerExcel2003;
}(WorkbookSaveManager));
export { WorkbookSaveManagerExcel2003 };
/**
 * @hidden
 */
var WorkbookSaveManagerExcel2003_ExtSstItem = /** @class */ (function (_super) {
    tslib_1.__extends(WorkbookSaveManagerExcel2003_ExtSstItem, _super);
    function WorkbookSaveManagerExcel2003_ExtSstItem() {
        var _this = _super.call(this) || this;
        _this.b = 0;
        _this.a = 0;
        return _this;
    }
    WorkbookSaveManagerExcel2003_ExtSstItem.$t = markStruct(WorkbookSaveManagerExcel2003_ExtSstItem, 'WorkbookSaveManagerExcel2003_ExtSstItem');
    return WorkbookSaveManagerExcel2003_ExtSstItem;
}(ValueType));
export { WorkbookSaveManagerExcel2003_ExtSstItem };
/**
 * @hidden
 */
var WorkbookSaveManagerExcel2003_FormatHolder = /** @class */ (function (_super) {
    tslib_1.__extends(WorkbookSaveManagerExcel2003_FormatHolder, _super);
    function WorkbookSaveManagerExcel2003_FormatHolder(a, b) {
        var _this = _super.call(this) || this;
        _this.a = 0;
        _this.c = null;
        _this.a = a;
        _this.c = b;
        return _this;
    }
    Object.defineProperty(WorkbookSaveManagerExcel2003_FormatHolder.prototype, "d", {
        get: function () {
            return this.c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookSaveManagerExcel2003_FormatHolder.prototype, "b", {
        get: function () {
            return this.a;
        },
        enumerable: true,
        configurable: true
    });
    WorkbookSaveManagerExcel2003_FormatHolder.$t = markType(WorkbookSaveManagerExcel2003_FormatHolder, 'WorkbookSaveManagerExcel2003_FormatHolder');
    return WorkbookSaveManagerExcel2003_FormatHolder;
}(Base));
export { WorkbookSaveManagerExcel2003_FormatHolder };
/**
 * @hidden
 */
var WorkbookSaveManagerExcel2003_GetSizeTokenVisitor = /** @class */ (function (_super) {
    tslib_1.__extends(WorkbookSaveManagerExcel2003_GetSizeTokenVisitor, _super);
    function WorkbookSaveManagerExcel2003_GetSizeTokenVisitor() {
        var _this = _super.call(this, Number_$type) || this;
        _this.a6 = false;
        _this.a3 = null;
        _this.a2 = null;
        return _this;
    }
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.d = function (a) {
        return 0;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.a1 = function () {
        this.a6 = false;
        this.a3 = null;
        this.a2 = null;
        _super.prototype.a1.call(this);
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.f = function (a) {
        if (this.a6) {
            return 13;
        }
        return 11;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.h = function (a) {
        return 9;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.j = function (a) {
        return 9;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.k = function (a) {
        return 8;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.l = function (a) {
        return WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.a7(a);
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.m = function (a) {
        return 4;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.n = function (a) {
        return 4;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.o = function (a) {
        return 4;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.p = function (a) {
        return 4;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.q = function (a) {
        return 4;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.r = function (a) {
        return 1;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.s = function (a) {
        return 2;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.u = function (a) {
        return 2;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.v = function (a) {
        return 5;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.w = function (a) {
        return 3;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.y = function (a) {
        return 4;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.z = function (a) {
        return 3;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.aa = function (a) {
        return 7;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.ab = function (a) {
        return 7;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.ac = function (a) {
        return 3;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.ad = function (a) {
        return 7;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.ae = function (a) {
        return 1;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.af = function (a) {
        return 5;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.ag = function (a) {
        if (this.a6) {
            return 9;
        }
        return 7;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.ah = function (a) {
        return 9;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.aj = function (a) {
        return 1;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.al = function (a) {
        if (this.a6) {
            return 9;
        }
        return 7;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.ao = function (a) {
        return 5;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.aq = function (a) {
        return 5;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.ar = function (a) {
        return (1 + this.a3._getDataSize(this.a2[this.az], 0, a.p));
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.as = function (a) {
        return 0;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.at = function (a) {
        return 5;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.prototype.au = function (a) {
        return 1;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.a5 = function (a, b, c, d) {
        if (WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.a4 == null) {
            WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.a4 = new WorkbookSaveManagerExcel2003_GetSizeTokenVisitor();
        }
        WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.a4.c = a;
        WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.a4.a3 = b;
        WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.a4.a6 = c;
        WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.a4.a2 = d;
        return WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.a4;
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.a7 = function (a) {
        return (6 + (2 * a.skipTokenIndexes.count));
    };
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.$t = markType(WorkbookSaveManagerExcel2003_GetSizeTokenVisitor, 'WorkbookSaveManagerExcel2003_GetSizeTokenVisitor', FormulaTokenVisitor$1.$.specialize(Number_$type));
    WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.a4 = null;
    return WorkbookSaveManagerExcel2003_GetSizeTokenVisitor;
}(FormulaTokenVisitor$1));
export { WorkbookSaveManagerExcel2003_GetSizeTokenVisitor };
/**
 * @hidden
 */
var WorkbookSaveManagerExcel2003_PopuplateShapeKnownPropertiesVisitor = /** @class */ (function (_super) {
    tslib_1.__extends(WorkbookSaveManagerExcel2003_PopuplateShapeKnownPropertiesVisitor, _super);
    function WorkbookSaveManagerExcel2003_PopuplateShapeKnownPropertiesVisitor() {
        return _super.call(this, WorkbookSaveManagerExcel2003.$, Boolean_$type) || this;
    }
    WorkbookSaveManagerExcel2003_PopuplateShapeKnownPropertiesVisitor.prototype.b = function (a, b) {
        var c = false;
        if (a._bi == null) {
            a._bi = new List$1(PropertyTableBase_PropertyValue.$, 0);
        }
        else {
            for (var d = a._bi.count - 1; d >= 0; d--) {
                var e = a._bi._inner[d];
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
                            var f = typeGetValue(e._i);
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
                            var g = typeGetValue(e._i);
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
            var h = 131072;
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
            var i = ExcelUtils.ey(a._b6);
            a._bi.add(new PropertyTableBase_PropertyValue(0, 4, i));
        }
        return true;
    };
    WorkbookSaveManagerExcel2003_PopuplateShapeKnownPropertiesVisitor.prototype.c = function (a, b) {
        _super.prototype.c.call(this, a, b);
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
    };
    WorkbookSaveManagerExcel2003_PopuplateShapeKnownPropertiesVisitor.$t = markType(WorkbookSaveManagerExcel2003_PopuplateShapeKnownPropertiesVisitor, 'WorkbookSaveManagerExcel2003_PopuplateShapeKnownPropertiesVisitor', WorksheetShapeVisitor$2.$.specialize(WorkbookSaveManagerExcel2003.$, Boolean_$type));
    WorkbookSaveManagerExcel2003_PopuplateShapeKnownPropertiesVisitor.d = new WorkbookSaveManagerExcel2003_PopuplateShapeKnownPropertiesVisitor();
    return WorkbookSaveManagerExcel2003_PopuplateShapeKnownPropertiesVisitor;
}(WorksheetShapeVisitor$2));
export { WorkbookSaveManagerExcel2003_PopuplateShapeKnownPropertiesVisitor };
/**
 * @hidden
 */
var WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor = /** @class */ (function (_super) {
    tslib_1.__extends(WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor, _super);
    function WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor() {
        return _super.call(this, WorkbookSaveManagerExcel2003.$, Boolean_$type) || this;
    }
    WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor.prototype.visitUnknownShape = function (shape, saveManager) {
        return this._visitUnknownShape$i.apply(this, arguments);
    };
    WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor.prototype._visitUnknownShape$i = function (a, b) {
        _super.prototype._visitUnknownShape$i.call(this, a, b);
        var c = a.image;
        if (c != null) {
            var d = a._bi;
            var e = WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor.f(b, c, d);
            d = e.p2;
            a._bi = d;
        }
        return true;
    };
    WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor.prototype.visitWorksheetCellComment = function (shape, saveManager) {
        return this._visitWorksheetCellComment$i.apply(this, arguments);
    };
    WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor.prototype._visitWorksheetCellComment$i = function (a, b) {
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
        return _super.prototype._visitWorksheetCellComment$i.call(this, a, b);
    };
    WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor.prototype.visitWorksheetImage = function (shape, saveManager) {
        return this._visitWorksheetImage$i.apply(this, arguments);
    };
    WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor.prototype._visitWorksheetImage$i = function (a, b) {
        _super.prototype._visitWorksheetImage$i.call(this, a, b);
        var c = a._bi;
        var d = WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor.f(b, a._image, c);
        c = d.p2;
        a._bi = c;
        return true;
    };
    WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor.prototype.b = function (a, b) {
        if (a._b0.hasValue && EnumUtil.isDefined(PredefinedShapeType_$type, enumGetBox(PredefinedShapeType_$type, (a._b0.value)))) {
            this.e(a);
        }
        a._am(WorkbookSaveManagerExcel2003.$, Boolean_$type, WorkbookSaveManagerExcel2003_PopuplateShapeKnownPropertiesVisitor.d, b);
        return true;
    };
    WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor.f = function (a, b, c) {
        if (c != null) {
            for (var d = c.count - 1; d >= 0; d--) {
                if (c._inner[d]._d) {
                    c.removeAt(d);
                }
            }
        }
        else {
            c = new List$1(PropertyTableBase_PropertyValue.$, 0);
        }
        var e = a._cx.indexOf(new WorkbookSerializationDataExcel2003_ImageHolder(b, 1));
        if (e >= 0) {
            c.add(new PropertyTableBase_PropertyValue(1, 260, intSToU((e + 1)), false, true));
        }
        return {
            p2: c
        };
    };
    WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor.prototype.e = function (a) {
        if (a._bi == null) {
            a._bi = new List$1(PropertyTableBase_PropertyValue.$, 0);
        }
        if (a._bi.count == 0) {
            if (a._a5) {
                a._bi.add(new PropertyTableBase_PropertyValue(1, 383, intSToU(65536), false, false));
                a._bi.add(new PropertyTableBase_PropertyValue(1, 771, intSToU(0), false, false));
            }
            else {
                var b = typeCast(WorksheetShapeWithText.$, a);
                var c = b != null && b._d0;
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
    };
    WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor.$t = markType(WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor, 'WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor', WorksheetShapeVisitor$2.$.specialize(WorkbookSaveManagerExcel2003.$, Boolean_$type));
    WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor.d = new WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor();
    return WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor;
}(WorksheetShapeVisitor$2));
export { WorkbookSaveManagerExcel2003_PopuplateShapeDrawingPropertiesVisitor };
/**
 * @hidden
 */
var WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor = /** @class */ (function (_super) {
    tslib_1.__extends(WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor, _super);
    function WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor() {
        var _this = _super.call(this) || this;
        _this.az = null;
        return _this;
    }
    WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor.prototype.g = function () {
        this.az = null;
        _super.prototype.g.call(this);
    };
    WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor.prototype.o = function (a) {
        var b = a.q.length;
        var c = a.q[0].length;
        this.az._write9((b - 1));
        this.az._write17((c - 1));
        for (var d = 0; d < c; d++) {
            for (var e = 0; e < b; e++) {
                var f = a.q[e][d];
                this.az._write9(f.b);
                f.g(this.az);
            }
        }
    };
    WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor.prototype.ae = function (a) {
        this.az._write17(a.r.length);
        for (var b = 0; b < a.r.length; b++) {
            this.az._write4(a.r[b]);
        }
    };
    WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor.a1 = function (a, b) {
        if (WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor.a0 == null) {
            WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor.a0 = new WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor();
        }
        WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor.a0.b = a;
        WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor.a0.az = b;
        return WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor.a0;
    };
    WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor.$t = markType(WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor, 'WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor', FormulaTokenVisitor.$);
    WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor.a0 = null;
    return WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor;
}(FormulaTokenVisitor));
export { WorkbookSaveManagerExcel2003_SaveAdditionalDataTokenVisitor };
/**
 * @hidden
 */
var WorkbookSaveManagerExcel2003_SaveTokenVisitor = /** @class */ (function (_super) {
    tslib_1.__extends(WorkbookSaveManagerExcel2003_SaveTokenVisitor, _super);
    function WorkbookSaveManagerExcel2003_SaveTokenVisitor() {
        var _this = _super.call(this) || this;
        _this.a6 = false;
        _this.a1 = null;
        _this.a3 = null;
        _this.a2 = null;
        return _this;
    }
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.e = function (a) {
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.g = function () {
        this.a6 = false;
        this.a1 = null;
        this.a3 = null;
        this.a2 = null;
        _super.prototype.g.call(this);
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.h = function () {
        var a = this.a1.length;
        for (this.d = 0; this.d < a; this.d++) {
            var b = this.a1[this.d];
            this.a3._write9(b.f);
            b.m(this);
        }
        this.g();
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.j = function (a) {
        this.a7(a.o);
        this.n(a);
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.l = function (a) {
        this.a3._write2(WorkbookSaveManagerExcel2003_SaveTokenVisitor.a0);
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.n = function (a) {
        this.a3._write4(a.x);
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.o = function (a) {
        this.a3._write2(WorkbookSaveManagerExcel2003_SaveTokenVisitor.az);
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.p = function (a) {
        this.a3._write9(a.p);
        this.a3._write17((a.skipTokenIndexes.count));
        var b = this.a2[this.d];
        var c = WorkbookSaveManagerExcel2003_GetSizeTokenVisitor.a7(a);
        this.a3._write17((c - 4));
        for (var d = 0; d < a.skipTokenIndexes.count; d++) {
            var e = this.a2[a.skipTokenIndexes._inner[d]];
            this.a3._write17((e - b));
        }
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.q = function (a) {
        this.a3._write9(a.p);
        if (a.skipTokenIndexes.count == 0) {
            this.a3._write17(0);
            return;
        }
        var b = this.a2[this.d];
        var c = b + 4;
        var d = this.a2[a.skipTokenIndexes._inner[0]];
        var e = d + 4;
        this.a3._write17((e - c));
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.r = function (a) {
        this.a3._write9(a.p);
        var b = this.a2[this.d];
        var c = b + 4;
        var d = this.a2[a.t];
        var e = d + 4;
        this.a3._write17((e - c - 1));
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.s = function (a) {
        this.a3._write9(a.p);
        this.a3._write9(a.t);
        this.a3._write9(a.v);
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.t = function (a) {
        this.a3._write9(a.p);
        this.a3._write17(0);
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.u = function (a) {
        this.a3._write9(a.p);
        this.a3._write17(0);
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.v = function (a) {
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.w = function (a) {
        this.a3._write9((a.r ? 1 : 0));
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.y = function (a) {
        this.a3._write9(a.p._y);
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.z = function (a) {
        this.a3._write17(a.p.t);
        this.a3._write17(a.p.r);
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.aa = function (a) {
        this.a3._write17(a.$function._vv);
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.ac = function (a) {
        var b = a.argumentCount;
        if (a.$function._qk) {
            b++;
        }
        this.a3._write9(b);
        this.aa(a);
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.ad = function (a) {
        this.a3._write17(a.p);
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.ae = function (a) {
        this.a3._write18(intSToU(0));
        this.a3._write17(a.p);
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.af = function (a) {
        this.a3._write18(intSToU(0));
        this.a3._write17(a.p);
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.ag = function (a) {
        this.a3._write17(a.p);
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.ah = function (a) {
        this.a3._write18(intSToU(0));
        this.a3._write17(a.p);
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.ai = function (a) {
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.aj = function (a) {
        var b = this.a3.saveManager._b._bb;
        var c = b.u.indexOf(a.u);
        if (c < 0) {
            var d = b.c(a.u.name, this.a3.saveManager._b, false);
            c = b.u.indexOf(d);
        }
        this.a3._write17((c + 1));
        this.a3._write17(0);
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.ak = function (a) {
        this.a7(a.o);
        var b = a.o.e.u.indexOf(a.u);
        this.a3._write17((b + 1));
        this.a3._write17(0);
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.al = function (a) {
        this.a3._write10(a.p);
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.an = function (a) {
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.ap = function (a) {
        this.a7(a.o);
        this.au(a);
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.as = function (a) {
        this.a3._write18(intSToU(0));
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.au = function (a) {
        this.a3._write3(a.y);
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.av = function (a) {
        this.a3._write15(a.p, 0);
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.aw = function (a) {
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.ax = function (a) {
        this.a3._write17(a.p.t);
        this.a3._write17(a.p.r);
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.ay = function (a) {
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.a5 = function (a, b, c, d, e) {
        if (WorkbookSaveManagerExcel2003_SaveTokenVisitor.a4 == null) {
            WorkbookSaveManagerExcel2003_SaveTokenVisitor.a4 = new WorkbookSaveManagerExcel2003_SaveTokenVisitor();
        }
        WorkbookSaveManagerExcel2003_SaveTokenVisitor.a4.b = a;
        WorkbookSaveManagerExcel2003_SaveTokenVisitor.a4.a3 = b;
        WorkbookSaveManagerExcel2003_SaveTokenVisitor.a4.a6 = c;
        WorkbookSaveManagerExcel2003_SaveTokenVisitor.a4.a1 = d;
        WorkbookSaveManagerExcel2003_SaveTokenVisitor.a4.a2 = e;
        return WorkbookSaveManagerExcel2003_SaveTokenVisitor.a4;
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.prototype.a7 = function (a) {
        if (this.a6) {
            this.a3._write17(a.l);
            this.a3._write17(a.m);
        }
        else {
            var b = this.a3.saveManager._j.indexOf(a);
            this.a3._write17(b);
        }
    };
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.$t = markType(WorkbookSaveManagerExcel2003_SaveTokenVisitor, 'WorkbookSaveManagerExcel2003_SaveTokenVisitor', FormulaTokenVisitor.$);
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.a4 = null;
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.az = new Array(7);
    WorkbookSaveManagerExcel2003_SaveTokenVisitor.a0 = new Array(8);
    return WorkbookSaveManagerExcel2003_SaveTokenVisitor;
}(FormulaTokenVisitor));
export { WorkbookSaveManagerExcel2003_SaveTokenVisitor };
/**
 * @hidden
 */
var WorkbookLoadManagerExcel2003 = /** @class */ (function (_super) {
    tslib_1.__extends(WorkbookLoadManagerExcel2003, _super);
    function WorkbookLoadManagerExcel2003(a, b, c, d) {
        var _this = _super.call(this, a, c) || this;
        _this._a8 = false;
        _this._bd = null;
        _this._be = null;
        _this._a1 = new WorkbookSerializationDataExcel2003();
        _this._az = null;
        _this._a2 = null;
        _this._a5 = null;
        _this._bn = null;
        _this._cb = Nullable$1.toNullable(Number_$type, null);
        _this._bo = null;
        _this._cc = Nullable$1.toNullable(Number_$type, null);
        _this._bp = null;
        _this._bq = null;
        _this._br = null;
        _this._bs = null;
        _this._bf = null;
        _this._a9 = false;
        _this._bt = null;
        _this._bu = null;
        _this._ay = null;
        _this._ak = null;
        _this._bv = null;
        _this._bg = null;
        _this._af = null;
        _this._bh = null;
        _this._b8 = null;
        _this._bi = null;
        _this._b7 = 0;
        _this._aw = null;
        _this._a7 = null;
        _this._bb = false;
        _this._bc = false;
        _this._b6 = 0;
        _this._aj = null;
        _this._ak = d._d;
        _this._bd = new Dictionary$2(WorksheetShapeGroup.$, Rect.$, 0);
        _this._be = new Dictionary$2(Number_$type, List$1.$.specialize(WorksheetCellFormatData.$), 0);
        _this._bf = new Dictionary$2(NameToken.$, Number_$type, 0);
        _this._ay = new WorkbookLoadManagerExcel2003_ResolveNamedReferenceVisitor(_this);
        _this._bg = new Dictionary$2(WorksheetCellAddress.$, ExcelCalcValue.$, 0);
        _this._bh = new Dictionary$2(WorksheetCellAddress.$, Formula.$, 0);
        _this._bi = new Dictionary$2(Number_$type, Number_$type, 0);
        _this._a1 = new WorkbookSerializationDataExcel2003(1, b);
        _this._b8 = new BinaryReader(1, _this._a1.c);
        return _this;
    }
    WorkbookLoadManagerExcel2003.staticInit = function () {
        Workbook._ez = WorkbookLoadManagerExcel2003._an;
    };
    WorkbookLoadManagerExcel2003.prototype.disposeCore = function (a) {
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
        _super.prototype.disposeCore.call(this, a);
    };
    WorkbookLoadManagerExcel2003.prototype._r = function () {
        if (this._b2.count <= 15) {
            return null;
        }
        return this._b2._inner[15];
    };
    WorkbookLoadManagerExcel2003.prototype._cf = function (a, b, c) {
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
    };
    WorkbookLoadManagerExcel2003.prototype._p = function () {
        var _this = this;
        this._b7 = -1;
        return WorkItemExtensions.a(this._am(), function () {
            _this._cq();
            _this._cp();
        });
    };
    WorkbookLoadManagerExcel2003.prototype._z = function () {
        var e_33, _0, e_34, _1, e_35, _2, e_36, _3;
        _super.prototype._z.call(this);
        this._a8 = true;
        try {
            for (var _4 = tslib_1.__values(fromEnum(this._b._bb.u)), _5 = _4.next(); !_5.done; _5 = _4.next()) {
                var a = _5.value;
                if (a._j != null) {
                    this._cr(a._j);
                }
            }
        }
        catch (e_33_1) { e_33 = { error: e_33_1 }; }
        finally {
            try {
                if (_5 && !_5.done && (_0 = _4.return)) _0.call(_4);
            }
            finally { if (e_33) throw e_33.error; }
        }
        if (this._bv != null) {
            try {
                for (var _6 = tslib_1.__values(fromEnum(this._bv)), _7 = _6.next(); !_7.done; _7 = _6.next()) {
                    var b = _7.value;
                    this._cf(b.c, b.d, b.e);
                }
            }
            catch (e_34_1) { e_34 = { error: e_34_1 }; }
            finally {
                try {
                    if (_7 && !_7.done && (_1 = _6.return)) _1.call(_6);
                }
                finally { if (e_34) throw e_34.error; }
            }
            this._bv = null;
        }
        if (this._b._dz != null) {
            try {
                for (var _8 = tslib_1.__values(fromEnum(this._b._dz.values)), _9 = _8.next(); !_9.done; _9 = _8.next()) {
                    var c = _9.value;
                    try {
                        for (var _10 = tslib_1.__values(fromEnum(c.u)), _11 = _10.next(); !_11.done; _11 = _10.next()) {
                            var d = _11.value;
                            if (d._j != null) {
                                this._cr(d._j);
                            }
                        }
                    }
                    catch (e_36_1) { e_36 = { error: e_36_1 }; }
                    finally {
                        try {
                            if (_11 && !_11.done && (_3 = _10.return)) _3.call(_10);
                        }
                        finally { if (e_36) throw e_36.error; }
                    }
                }
            }
            catch (e_35_1) { e_35 = { error: e_35_1 }; }
            finally {
                try {
                    if (_9 && !_9.done && (_2 = _8.return)) _2.call(_8);
                }
                finally { if (e_35) throw e_35.error; }
            }
        }
        this._bf.clear();
    };
    WorkbookLoadManagerExcel2003.prototype._cu = function (a) {
        var b;
        var c = this._bd.tryGetValue(a, b);
        b = c.p1;
        return b;
    };
    WorkbookLoadManagerExcel2003.prototype._a4 = function (a) {
        if (a == -1) {
            return null;
        }
        if (0 <= a && a < this._b5.count) {
            return this._b5._inner[a];
        }
        return null;
    };
    WorkbookLoadManagerExcel2003.prototype._a6 = function (a, b) {
        if (this._a5 != null && this._a5.index == b && this._a5.worksheet == a) {
            return this._a5;
        }
        var c = null;
        if (this._af != null) {
            var d = this._af[0];
            if (d != null) {
                var e = b - d.index;
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
    };
    WorkbookLoadManagerExcel2003.prototype._as = function (a, b) {
        var _this = this;
        return {
            ret: ((function () { var c = _this._at(1, a, b); a = c.p1; b = c.p2; return c.ret; })()),
            p0: a,
            p1: b
        };
    };
    WorkbookLoadManagerExcel2003.prototype._ao = function () {
        var a = this._av;
        var b = this._a1.e(a._recordType);
        if (b == null) {
            return null;
        }
        return this._aq(b);
    };
    WorkbookLoadManagerExcel2003.prototype._ci = function (a, b, c) {
    };
    WorkbookLoadManagerExcel2003.prototype._at = function (a, b, c) {
        var _this = this;
        var d = ((function () { var e = _this._av._readUInt16FromBuffer(b, c); b = e.p0; c = e.p1; return e.ret; })());
        var e = Formula._h(this._b.cellReferenceMode, a);
        var f = this._ch(e, d, b, c);
        b = f.p2;
        c = f.p3;
        return {
            ret: e,
            p1: b,
            p2: c
        };
    };
    WorkbookLoadManagerExcel2003.prototype._au = function (a, b, c, d) {
        if (b == 0) {
            return {
                ret: null,
                p2: c,
                p3: d
            };
        }
        var e = Formula._h(this._b.cellReferenceMode, a);
        var f = this._ch(e, b, c, d);
        c = f.p2;
        d = f.p3;
        return {
            ret: e,
            p2: c,
            p3: d
        };
    };
    WorkbookLoadManagerExcel2003.prototype._cj = function () {
        this._af = null;
    };
    WorkbookLoadManagerExcel2003.prototype._ck = function (a) {
        this._av = a._parentStream;
    };
    WorkbookLoadManagerExcel2003.prototype._cl = function (a) {
        if (this._av != null) {
            this._av._addSubStream(a);
        }
        this._av = a;
    };
    WorkbookLoadManagerExcel2003.prototype._cm = function (a) {
        if (this._af == null) {
            this._af = new Array(32);
        }
        var b = this._af[0];
        if (b == null) {
            this._af[0] = a;
        }
        else {
            var c = a.index - b.index;
            if (0 <= c && c < this._af.length) {
                this._af[c] = a;
            }
        }
    };
    WorkbookLoadManagerExcel2003.prototype._cn = function (a) {
        this._az = a;
        this._a2 = null;
    };
    WorkbookLoadManagerExcel2003.prototype._co = function (a) {
        if (this._az != null) {
            this._a2 = this._az.i(a);
        }
        else {
            this._a2 = null;
        }
    };
    WorkbookLoadManagerExcel2003.prototype._cs = function (a, b) {
        this._bd.item(a, b);
    };
    WorkbookLoadManagerExcel2003.prototype._ct = function (a) {
        var e_37, _0;
        try {
            for (var _1 = tslib_1.__values(fromEnum(this._i)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var b = _2.value;
                var c = typeCast(CurrentWorkbookReference.$, b);
                if (c == null) {
                    continue;
                }
                c.ak(a);
            }
        }
        catch (e_37_1) { e_37 = { error: e_37_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_37) throw e_37.error; }
        }
    };
    WorkbookLoadManagerExcel2003.prototype._ar = function () {
        var _this = this;
        if (this._a9) {
            return null;
        }
        this._a9 = true;
        if (this._bo != null) {
            for (var a = 0; a < this._bo.count; a++) {
                FONTRecord.o(this, this._bo._inner[a]);
            }
            this._bo = null;
        }
        if (this._bs != null) {
            for (var b = 0; b < this._bs.count; b++) {
                XFRecord.o(this, this._bs._inner[b]);
            }
            this._bs = null;
        }
        if (this._br != null) {
            for (var c = 0; c < this._br.count; c++) {
                XFEXTRecord.o(this, this._br._inner[c]);
            }
            this._br = null;
        }
        if (this._bn != null) {
            for (var d = 0; d < this._bn.count; d++) {
                DXFRecord.o(this, this._bn._inner[d]);
            }
            this._bn = null;
        }
        if (this._bq != null) {
            for (var e = 0; e < this._bq.count; e++) {
                STYLERecord.o(this, this._bq._inner[e]);
            }
            this._bq = null;
        }
        if (this._bp != null) {
            for (var f = 0; f < this._bp.count; f++) {
                STYLEEXTRecord.o(this, this._bp._inner[f]);
            }
            this._bp = null;
        }
        return WorkItemExtensions.a(WorkItemExtensions.c(Async.g(nullableNotEquals(this._cc, null), function () { return WorkItemExtensions.g(Nullable$1.$.specialize(Number_$type), _this._ap(_this._cc.value), function () { return _this._cc = Nullable$1.toNullable(Number_$type, null); }); }), function () { return Async.g(nullableNotEquals(_this._cb, null), function () { return WorkItemExtensions.g(Nullable$1.$.specialize(Number_$type), _this._ap(_this._cb.value), function () { return _this._cb = Nullable$1.toNullable(Number_$type, null); }); }); }), function () { return _this._a9 = false; });
    };
    WorkbookLoadManagerExcel2003.prototype._ax = function (a) {
        if (this._aw == null) {
            this._aw = new WorkbookCFInfo();
        }
        return this._aw.a(a);
    };
    WorkbookLoadManagerExcel2003.prototype._cp = function () {
        var e_38, _0, e_39, _1, e_40, _2;
        if (this._aw == null) {
            return;
        }
        try {
            for (var _3 = tslib_1.__values(fromEnum(this._b._worksheets$i)), _4 = _3.next(); !_4.done; _4 = _3.next()) {
                var a = _4.value;
                var b = this._ax(a);
                if (b == null) {
                    continue;
                }
                var c = b.f();
                var d = new List$1(ConditionPriority.$, 0);
                try {
                    for (var _5 = tslib_1.__values(fromEnum(c)), _6 = _5.next(); !_6.done; _6 = _5.next()) {
                        var e = _6.value;
                        var _loop_1 = function (f) {
                            var g = ConditionFactory_BIFF8.i(f.m, f.e.c);
                            var h = ConditionFactory_BIFF8.d(g, e, f, a);
                            var i = f.e != null ? f.e.d : f.h != null ? f.h.a.d : 0;
                            if (h != null) {
                                d.add(((function () {
                                    var $ret = new ConditionPriority();
                                    $ret.a = h;
                                    $ret.b = i;
                                    return $ret;
                                })()));
                            }
                        };
                        try {
                            for (var _7 = tslib_1.__values(fromEnum(e.i)), _8 = _7.next(); !_8.done; _8 = _7.next()) {
                                var f = _8.value;
                                _loop_1(f);
                            }
                        }
                        catch (e_40_1) { e_40 = { error: e_40_1 }; }
                        finally {
                            try {
                                if (_8 && !_8.done && (_2 = _7.return)) _2.call(_7);
                            }
                            finally { if (e_40) throw e_40.error; }
                        }
                    }
                }
                catch (e_39_1) { e_39 = { error: e_39_1 }; }
                finally {
                    try {
                        if (_6 && !_6.done && (_1 = _5.return)) _1.call(_5);
                    }
                    finally { if (e_39) throw e_39.error; }
                }
                DocCoreUtils.ar(ConditionPriority.$, d, new ConditionPrioritySortComparer());
                var j = new List$1(ConditionBase.$, 2, d.count);
                for (var k = 0; k < d.count; k++) {
                    j.add(d._inner[k].a);
                }
                a._conditionalFormats$i._aw(j);
            }
        }
        catch (e_38_1) { e_38 = { error: e_38_1 }; }
        finally {
            try {
                if (_4 && !_4.done && (_0 = _3.return)) _0.call(_3);
            }
            finally { if (e_38) throw e_38.error; }
        }
    };
    WorkbookLoadManagerExcel2003.prototype._cg = function (a, b, c) {
        var e_41, _0;
        try {
            for (var _1 = tslib_1.__values(fromEnum(a)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var d = _2.value;
                var e = typeCast(WorksheetShapeGroup.$, d);
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
        catch (e_41_1) { e_41 = { error: e_41_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_41) throw e_41.error; }
        }
    };
    WorkbookLoadManagerExcel2003.prototype._am = function () {
        var _this = this;
        var a = this._ca.length - 2;
        var _loop_2 = function () {
            var b = this_1._ca.position;
            var c = null;
            try {
                c = new Biff8RecordStream(1, this_1);
                if (this_1._av._recordType == 0) {
                    return { value: null };
                }
                if (this_1._b7 < 0) {
                    if (this_1._av._recordType == 224) {
                        this_1._b7 = b;
                    }
                }
                else if (this_1._ah == null) {
                    if (this_1._av._recordType != 224) {
                        this_1._a1.s(this_1._b7);
                    }
                }
                var d = this_1._ao();
                if (d == null) {
                    return "continue";
                }
                var e_42 = c;
                c = null;
                return { value: WorkItemExtensions.c(WorkItemExtensions.b(d, function (f) {
                        if (e_42 != null) {
                            e_42.dispose();
                        }
                        f.y();
                    }), function () { return _this._am(); }) };
            }
            finally {
                if (c != null) {
                    c.dispose();
                }
            }
        };
        var this_1 = this;
        while (this._ca.position <= a) {
            var state_1 = _loop_2();
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return null;
    };
    WorkbookLoadManagerExcel2003._an = function (a, b, c, d) {
        for (var e = a._styles$i.count - 1; e >= 0; e--) {
            if (a._styles$i._item(e)._k == false) {
                a._styles$i.removeAt(e);
            }
        }
        return Async.n(StructuredStorageManager.$, new StructuredStorageManager(b, true), function (f) {
            var g = new DocumentSummaryInformation();
            var h = new SummaryInformation();
            {
                var i = f._ac("\u0005SummaryInformation");
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
                var j = f._ac("\u0005DocumentSummaryInformation");
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
            var k = f._ac("Workbook");
            if (k == null) {
                k = f._ac("Book");
                if (k == null) {
                    throw new ArgumentException(2, ExcelUtils.ef("LE_ArgumentException_FileDoesntContainsWorkbookStream"), c);
                }
            }
            var l = f._ac("encryption");
            return WorkItemExtensions.a(Async.h(function () {
                var m = ExcelUtils.ee(b);
                return WorkItemExtensions.a(Async.n(WorkbookLoadManagerExcel2003.$, new WorkbookLoadManagerExcel2003(a, k, m, d), function (n) { return WorkItemExtensions.a(n._o(), function () { return n._ci(l, g, h); }); }), function () { return a._hf(f, f._a, stringEmpty()); });
            }, function () {
                k.close();
                if (l != null) {
                    l.close();
                }
            }), function () { return a.documentProperties._ag(h, g); });
        });
    };
    WorkbookLoadManagerExcel2003.prototype._ch = function (a, b, c, d) {
        if (b == 0) {
            return {
                p2: c,
                p3: d
            };
        }
        var e = d + b;
        var f = false;
        var g = new FormulaContext(1, this._b, a);
        var h = WorkbookLoadManagerExcel2003_LoadTokenVisitor.a3(g, this, a._s == 4, c, d);
        var i = new List$1(FormulaToken.$, 0);
        var j = this._av;
        var _loop_3 = function () {
            var k = h.a6;
            var l = ((function () { var m = j.readByteFromBuffer(h.az, h.a6); h.az = m.p0; h.a6 = m.p1; return m.ret; })());
            var m = l == 25 ? ((function () { var n = FormulaToken.b(j, l, h.az, h.a6); h.az = n.p2; h.a6 = n.p3; return n.ret; })()) : FormulaToken.c(j, l);
            if (m == null) {
                return "break";
            }
            m.m(h);
            var n = typeCast(AttrTokenBase.$, m);
            if (n != null && n.q) {
                a._ax = true;
            }
            var o = typeCast(FunctionVOperator.$, m);
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
        };
        while (h.a6 < e) {
            var state_2 = _loop_3();
            if (state_2 === "break")
                break;
        }
        a._e = i.toArray();
        c = h.az;
        d = h.a6;
        h.g();
        if (d != e) {
            d = e;
        }
        var p = WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor.a2(g, this, c, d);
        p.h();
        if (a._aq == false && f) {
            var q = AddInFunctionResolver.bi(g);
            var r = q.a2();
        }
        return {
            p2: c,
            p3: d
        };
    };
    WorkbookLoadManagerExcel2003.prototype._ap = function (a) {
        var _this = this;
        var b = this._ca.position;
        this._ca.position = a;
        return WorkItemExtensions.a(Async.n(Biff8RecordStream.$, new Biff8RecordStream(1, this), function (c) { return _this._aq(_this._a1.e(c._recordType)); }), function () { return _this._ca.position = b; });
    };
    WorkbookLoadManagerExcel2003.prototype._aq = function (a) {
        var _this = this;
        if (a.n == false) {
            this._av._transform.k();
        }
        return WorkItemExtensions.a(Async.g(a.e, function () { return a.a(_this); }, function () {
            a.h(_this);
            return null;
        }), function () {
            if (a.n == false) {
                _this._av._transform.i();
            }
        });
    };
    WorkbookLoadManagerExcel2003.prototype._cq = function () {
        var e_43, _0, e_44, _1;
        var a = new Dictionary$2(Number_$type, WorksheetShape.$, 0);
        var b = new List$1(FtRboData.$, 0);
        try {
            for (var _2 = tslib_1.__values(fromEnum(this._b._sheets$i)), _3 = _2.next(); !_3.done; _3 = _2.next()) {
                var c = _3.value;
                this._cg(c._p, a, b);
            }
        }
        catch (e_43_1) { e_43 = { error: e_43_1 }; }
        finally {
            try {
                if (_3 && !_3.done && (_0 = _2.return)) _0.call(_2);
            }
            finally { if (e_43) throw e_43.error; }
        }
        try {
            for (var _4 = tslib_1.__values(fromEnum(a)), _5 = _4.next(); !_5.done; _5 = _4.next()) {
                var d = _5.value;
                var e = typeCast(UnknownShape.$, d.value);
                if (e != null && e._ek) {
                    this._b._d6.add_1(d.key);
                }
            }
        }
        catch (e_44_1) { e_44 = { error: e_44_1 }; }
        finally {
            try {
                if (_5 && !_5.done && (_1 = _4.return)) _1.call(_4);
            }
            finally { if (e_44) throw e_44.error; }
        }
        var _loop_4 = function (f) {
            var g = b._inner[f];
            var h;
            if (((function () { var i = a.tryGetValue(g.e, h); h = i.p1; return i.ret; })())) {
                g.b = h;
            }
            else {
            }
        };
        for (var f = 0; f < b.count; f++) {
            _loop_4(f);
        }
    };
    WorkbookLoadManagerExcel2003.prototype._cr = function (a) {
        var _this = this;
        var b = false;
        var e = a._e;
        var _loop_5 = function (d) {
            var c = e[d];
            var f = typeCast(NameToken.$, c);
            if (f == null) {
                var g = typeCast(FunctionVOperator.$, c);
                if (g != null && g.$function._vv == 255 && g.$function == Function._q) {
                    b = true;
                }
                return "continue";
            }
            var h;
            if (((function () { var i = _this._bf.tryGetValue(f, h); h = i.p1; return i.ret; })()) == false) {
                return "continue";
            }
            f.e(Number_$type, Boolean_$type, this_2._ay, h);
        };
        var this_2 = this;
        for (var d = 0; d < e.length; d++) {
            _loop_5(d);
        }
        if (b) {
            var i = new FormulaContext(1, this._b, a);
            var j = AddInFunctionResolver.bi(i);
            var k = j.a2();
        }
    };
    Object.defineProperty(WorkbookLoadManagerExcel2003.prototype, "_ba", {
        get: function () {
            if (this._bs != null && this._bs.count != 0 && (this._br == null || this._br.count == 0)) {
                return true;
            }
            if (this._bq != null && this._bq.count != 0 && (this._bp == null || this._bp.count == 0)) {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookLoadManagerExcel2003.prototype, "_bj", {
        get: function () {
            return this._be;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookLoadManagerExcel2003.prototype, "_ai", {
        get: function () {
            return this._a1.b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookLoadManagerExcel2003.prototype, "_a0", {
        get: function () {
            return this._az;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookLoadManagerExcel2003.prototype, "_a3", {
        get: function () {
            return this._a2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookLoadManagerExcel2003.prototype, "_av", {
        get: function () {
            return this._a1.d;
        },
        set: function (a) {
            this._a1.d = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookLoadManagerExcel2003.prototype, "_bw", {
        get: function () {
            if (this._bn == null) {
                this._bn = new List$1(DXFRecordInfo.$, 0);
            }
            return this._bn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookLoadManagerExcel2003.prototype, "_cd", {
        get: function () {
            return this._cb;
        },
        set: function (a) {
            this._cb = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookLoadManagerExcel2003.prototype, "_bx", {
        get: function () {
            if (this._bo == null) {
                this._bo = new List$1(FONTRecordInfo.$, 0);
            }
            return this._bo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookLoadManagerExcel2003.prototype, "_ce", {
        get: function () {
            return this._cc;
        },
        set: function (a) {
            this._cc = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookLoadManagerExcel2003.prototype, "_by", {
        get: function () {
            if (this._bp == null) {
                this._bp = new List$1(STYLEEXTRecordInfo.$, 0);
            }
            return this._bp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookLoadManagerExcel2003.prototype, "_bz", {
        get: function () {
            if (this._bq == null) {
                this._bq = new List$1(STYLERecordInfo.$, 0);
            }
            return this._bq;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookLoadManagerExcel2003.prototype, "_b0", {
        get: function () {
            if (this._br == null) {
                this._br = new List$1(XFEXTRecordInfo.$, 0);
            }
            return this._br;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookLoadManagerExcel2003.prototype, "_b1", {
        get: function () {
            if (this._bs == null) {
                this._bs = new List$1(XFRecordInfo.$, 0);
            }
            return this._bs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookLoadManagerExcel2003.prototype, "_b2", {
        get: function () {
            return this._a1.p;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookLoadManagerExcel2003.prototype, "_b3", {
        get: function () {
            return this._a1.q;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookLoadManagerExcel2003.prototype, "_b4", {
        get: function () {
            if (this._bt == null) {
                this._bt = new List$1(WorksheetCellComment.$, 0);
            }
            return this._bt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookLoadManagerExcel2003.prototype, "_b5", {
        get: function () {
            if (this._bu == null) {
                this._bu = new List$1(WorkbookStyle.$, 0);
            }
            return this._bu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookLoadManagerExcel2003.prototype, "_al", {
        get: function () {
            return this._ak;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookLoadManagerExcel2003.prototype, "_bk", {
        get: function () {
            return this._bg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookLoadManagerExcel2003.prototype, "_bl", {
        get: function () {
            return this._bh;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookLoadManagerExcel2003.prototype, "_ca", {
        get: function () {
            return this._a1.c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookLoadManagerExcel2003.prototype, "_b9", {
        get: function () {
            return this._b8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookLoadManagerExcel2003.prototype, "_bm", {
        get: function () {
            return this._bi;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookLoadManagerExcel2003.prototype, "_ah", {
        get: function () {
            return this._a1.a;
        },
        enumerable: true,
        configurable: true
    });
    WorkbookLoadManagerExcel2003.prototype._ag = function () {
        return Encoding.unicode.getBytes1("VelvetSweatshop");
    };
    WorkbookLoadManagerExcel2003.$t = markType(WorkbookLoadManagerExcel2003, 'WorkbookLoadManagerExcel2003', WorkbookLoadManager.$);
    return WorkbookLoadManagerExcel2003;
}(WorkbookLoadManager));
export { WorkbookLoadManagerExcel2003 };
/**
 * @hidden
 */
var WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor = /** @class */ (function (_super) {
    tslib_1.__extends(WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor, _super);
    function WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor() {
        var _this = _super.call(this) || this;
        _this.az = null;
        _this.a3 = 0;
        _this.a0 = null;
        return _this;
    }
    WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor.prototype.g = function () {
        this.az = null;
        this.a3 = 0;
        this.a0 = null;
        _super.prototype.g.call(this);
    };
    WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor.prototype.o = function (a) {
        var _this = this;
        var b = this.a0._av;
        var c = ((function () { var d = b.readByteFromBuffer(_this.az, _this.a3); _this.az = d.p0; _this.a3 = d.p1; return d.ret; })()) + 1;
        var d = ((function () { var e = b._readUInt16FromBuffer(_this.az, _this.a3); _this.az = e.p0; _this.a3 = e.p1; return e.ret; })()) + 1;
        a.q = new Array(c);
        for (var e = 0; e < c; e++) {
            a.q[e] = new Array(d);
        }
        for (var f = 0; f < d; f++) {
            for (var g = 0; g < c; g++) {
                var h = ((function () { var i = Constant.a(b, _this.az, _this.a3); _this.az = i.p1; _this.a3 = i.p2; return i.ret; })());
                var i = h.f(b, this.az, this.a3);
                this.az = i.p1;
                this.a3 = i.p2;
                a.q[g][f] = h;
            }
        }
    };
    WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor.prototype.ae = function (a) {
        var _this = this;
        var b = this.a0._av;
        var c = ((function () { var d = b._readUInt16FromBuffer(_this.az, _this.a3); _this.az = d.p0; _this.a3 = d.p1; return d.ret; })());
        a.r = new Array(c);
        for (var d = 0; d < c; d++) {
            a.r[d] = ((function () { var e = b._readFormulaCellAddressRangeFromBuffer(_this.az, _this.a3); _this.az = e.p0; _this.a3 = e.p1; return e.ret; })());
        }
    };
    WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor.a2 = function (a, b, c, d) {
        if (WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor.a1 == null) {
            WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor.a1 = new WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor();
        }
        WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor.a1.b = a;
        WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor.a1.az = c;
        WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor.a1.a3 = d;
        WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor.a1.a0 = b;
        return WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor.a1;
    };
    WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor.$t = markType(WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor, 'WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor', FormulaTokenVisitor.$);
    WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor.a1 = null;
    return WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor;
}(FormulaTokenVisitor));
export { WorkbookLoadManagerExcel2003_LoadAdditionalDataTokenVisitor };
/**
 * @hidden
 */
var WorkbookLoadManagerExcel2003_LoadTokenVisitor = /** @class */ (function (_super) {
    tslib_1.__extends(WorkbookLoadManagerExcel2003_LoadTokenVisitor, _super);
    function WorkbookLoadManagerExcel2003_LoadTokenVisitor() {
        var _this = _super.call(this) || this;
        _this.az = null;
        _this.a6 = 0;
        _this.a5 = false;
        _this.a1 = null;
        _this.a0 = null;
        return _this;
    }
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.e = function (a) {
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.g = function () {
        this.az = null;
        this.a6 = 0;
        this.a5 = false;
        this.a1 = null;
        this.a0 = null;
        _super.prototype.g.call(this);
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.j = function (a) {
        a.o = this.a4();
        this.n(a);
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.l = function (a) {
        var b = this.a0.readBytesFromBuffer(8, this.az, this.a6);
        this.az = b.p1;
        this.a6 = b.p2;
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.n = function (a) {
        var _this = this;
        a.x = ((function () { var b = _this.a0._readFormulaCellAddressRangeFromBuffer(_this.az, _this.a6); _this.az = b.p0; _this.a6 = b.p1; return b.ret; })());
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.o = function (a) {
        var b = this.a0.readBytesFromBuffer(7, this.az, this.a6);
        this.az = b.p1;
        this.a6 = b.p2;
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.p = function (a) {
        var _this = this;
        var b = ((function () { var c = _this.a0._readUInt16FromBuffer(_this.az, _this.a6); _this.az = c.p0; _this.a6 = c.p1; return c.ret; })());
        for (var c = 0; c < b; c++) {
            var d = this.a0._readUInt16FromBuffer(this.az, this.a6);
            this.az = d.p0;
            this.a6 = d.p1;
        }
        var e = this.a0._readUInt16FromBuffer(this.az, this.a6);
        this.az = e.p0;
        this.a6 = e.p1;
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.q = function (a) {
        var b = this.a0._readUInt16FromBuffer(this.az, this.a6);
        this.az = b.p0;
        this.a6 = b.p1;
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.r = function (a) {
        var b = this.a0._readUInt16FromBuffer(this.az, this.a6);
        this.az = b.p0;
        this.a6 = b.p1;
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.s = function (a) {
        var _this = this;
        a.t = ((function () { var b = _this.a0.readByteFromBuffer(_this.az, _this.a6); _this.az = b.p0; _this.a6 = b.p1; return b.ret; })());
        a.v = ((function () { var b = _this.a0.readByteFromBuffer(_this.az, _this.a6); _this.az = b.p0; _this.a6 = b.p1; return b.ret; })());
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.t = function (a) {
        var b = this.a0._readUInt16FromBuffer(this.az, this.a6);
        this.az = b.p0;
        this.a6 = b.p1;
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.u = function (a) {
        var b = this.a0._readUInt16FromBuffer(this.az, this.a6);
        this.az = b.p0;
        this.a6 = b.p1;
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.v = function (a) {
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.w = function (a) {
        var _this = this;
        var b = ((function () { var c = _this.a0.readByteFromBuffer(_this.az, _this.a6); _this.az = c.p0; _this.a6 = c.p1; return c.ret; })());
        a.r = b != 0;
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.y = function (a) {
        var _this = this;
        a.p = ErrorValue._j(((function () { var b = _this.a0.readByteFromBuffer(_this.az, _this.a6); _this.az = b.p0; _this.a6 = b.p1; return b.ret; })()));
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.z = function (a) {
        var _this = this;
        var b = ((function () { var c = _this.a0._readUInt16FromBuffer(_this.az, _this.a6); _this.az = c.p0; _this.a6 = c.p1; return c.ret; })());
        var c = ((function () { var d = _this.a0._readInt16FromBuffer(_this.az, _this.a6); _this.az = d.p0; _this.a6 = d.p1; return d.ret; })());
        a.p = new CellAddress(1, b, false, c, false);
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.aa = function (a) {
        var _this = this;
        a.$function = Function._gu(((function () { var b = _this.a0._readUInt16FromBuffer(_this.az, _this.a6); _this.az = b.p0; _this.a6 = b.p1; return b.ret; })()));
        a.argumentCount = a.$function._q1;
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.ac = function (a) {
        var _this = this;
        var b = ((function () { var c = _this.a0.readByteFromBuffer(_this.az, _this.a6); _this.az = c.p0; _this.a6 = c.p1; return c.ret; })());
        b &= 127;
        var c = ((function () { var d = _this.a0._readUInt16FromBuffer(_this.az, _this.a6); _this.az = d.p0; _this.a6 = d.p1; return d.ret; })());
        c &= 32767;
        a.argumentCount = b;
        a.$function = Function._gu(c);
        if (a.$function._qk) {
            a.argumentCount--;
        }
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.ad = function (a) {
        var _this = this;
        a.p = ((function () { var b = _this.a0._readUInt16FromBuffer(_this.az, _this.a6); _this.az = b.p0; _this.a6 = b.p1; return b.ret; })());
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.ae = function (a) {
        var _this = this;
        var b = this.a0._readUInt32FromBuffer(this.az, this.a6);
        this.az = b.p0;
        this.a6 = b.p1;
        a.p = ((function () { var c = _this.a0._readUInt16FromBuffer(_this.az, _this.a6); _this.az = c.p0; _this.a6 = c.p1; return c.ret; })());
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.af = function (a) {
        var _this = this;
        var b = this.a0._readUInt32FromBuffer(this.az, this.a6);
        this.az = b.p0;
        this.a6 = b.p1;
        a.p = ((function () { var c = _this.a0._readUInt16FromBuffer(_this.az, _this.a6); _this.az = c.p0; _this.a6 = c.p1; return c.ret; })());
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.ag = function (a) {
        var _this = this;
        a.p = ((function () { var b = _this.a0._readUInt16FromBuffer(_this.az, _this.a6); _this.az = b.p0; _this.a6 = b.p1; return b.ret; })());
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.ah = function (a) {
        var _this = this;
        var b = this.a0._readUInt32FromBuffer(this.az, this.a6);
        this.az = b.p0;
        this.a6 = b.p1;
        a.p = ((function () { var c = _this.a0._readUInt16FromBuffer(_this.az, _this.a6); _this.az = c.p0; _this.a6 = c.p1; return c.ret; })());
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.ai = function (a) {
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.aj = function (a) {
        var _this = this;
        var b = ((function () { var c = _this.a0._readUInt16FromBuffer(_this.az, _this.a6); _this.az = c.p0; _this.a6 = c.p1; return c.ret; })());
        var c = this.a0._readUInt16FromBuffer(this.az, this.a6);
        this.az = c.p0;
        this.a6 = c.p1;
        this.a7(a, b - 1);
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.ak = function (a) {
        var _this = this;
        a.o = this.a4();
        var b = ((function () { var c = _this.a0._readUInt16FromBuffer(_this.az, _this.a6); _this.az = c.p0; _this.a6 = c.p1; return c.ret; })());
        var c = this.a0._readUInt16FromBuffer(this.az, this.a6);
        this.az = c.p0;
        this.a6 = c.p1;
        this.a7(a, b - 1);
        if (this.a5 == false && a.o.l == -2 && typeCast(Worksheet.$, a.u._af) !== null) {
            var d = this.a1._j;
            for (var e = 0, f = d.count; e < f; e++) {
                var g = d._inner[e];
                if (!g.j && g.l >= 0 && g.n == a.u._af) {
                    a.o = g;
                    break;
                }
            }
        }
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.al = function (a) {
        var _this = this;
        a.p = ((function () { var b = _this.a0.readDoubleFromBuffer(_this.az, _this.a6); _this.az = b.p0; _this.a6 = b.p1; return b.ret; })());
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.an = function (a) {
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.ap = function (a) {
        a.o = this.a4();
        this.au(a);
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.as = function (a) {
        var b = this.a0._readUInt32FromBuffer(this.az, this.a6);
        this.az = b.p0;
        this.a6 = b.p1;
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.au = function (a) {
        var _this = this;
        a.y = ((function () { var b = _this.a0._readFormulaCellAddressFromBuffer(_this.az, _this.a6); _this.az = b.p0; _this.a6 = b.p1; return b.ret; })());
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.av = function (a) {
        var _this = this;
        a.p = ((function () { var b = _this.a0.readFormattedStringFromBuffer(0, _this.az, _this.a6); _this.az = b.p1; _this.a6 = b.p2; return b.ret; })())._y;
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.aw = function (a) {
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.ax = function (a) {
        var _this = this;
        var b = ((function () { var c = _this.a0._readUInt16FromBuffer(_this.az, _this.a6); _this.az = c.p0; _this.a6 = c.p1; return c.ret; })());
        var c = ((function () { var d = _this.a0._readInt16FromBuffer(_this.az, _this.a6); _this.az = d.p0; _this.a6 = d.p1; return d.ret; })());
        a.p = new CellAddress(1, b, false, c, false);
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.ay = function (a) {
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.a3 = function (a, b, c, d, e) {
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
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.a4 = function () {
        var _this = this;
        if (this.a5) {
            var a = ((function () { var b = _this.a0._readUInt16FromBuffer(_this.az, _this.a6); _this.az = b.p0; _this.a6 = b.p1; return b.ret; })());
            var b = ((function () { var c = _this.a0._readUInt16FromBuffer(_this.az, _this.a6); _this.az = c.p0; _this.a6 = c.p1; return c.ret; })());
            var c = this.a1._i;
            var d = c._inner[c.count - 1];
            var e = d.aa(a);
            var f = null;
            if (a != b) {
                f = d.aa(b);
            }
            return d.g(e, f);
        }
        else {
            var g = ((function () { var h = _this.a0._readUInt16FromBuffer(_this.az, _this.a6); _this.az = h.p0; _this.a6 = h.p1; return h.ret; })());
            return this.a1._q(g);
        }
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.prototype.a7 = function (a, b) {
        if (this.a1._a8) {
            a.e(Number_$type, Boolean_$type, this.a1._ay, b);
        }
        else {
            this.a1._bf.item(a, b);
        }
    };
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.$t = markType(WorkbookLoadManagerExcel2003_LoadTokenVisitor, 'WorkbookLoadManagerExcel2003_LoadTokenVisitor', FormulaTokenVisitor.$);
    WorkbookLoadManagerExcel2003_LoadTokenVisitor.a2 = null;
    return WorkbookLoadManagerExcel2003_LoadTokenVisitor;
}(FormulaTokenVisitor));
export { WorkbookLoadManagerExcel2003_LoadTokenVisitor };
/**
 * @hidden
 */
var WorkbookLoadManagerExcel2003_ResolveNamedReferenceVisitor = /** @class */ (function (_super) {
    tslib_1.__extends(WorkbookLoadManagerExcel2003_ResolveNamedReferenceVisitor, _super);
    function WorkbookLoadManagerExcel2003_ResolveNamedReferenceVisitor(a) {
        var _this = _super.call(this, Number_$type, Boolean_$type) || this;
        _this.a3 = null;
        _this.a3 = a;
        return _this;
    }
    WorkbookLoadManagerExcel2003_ResolveNamedReferenceVisitor.prototype.d = function (a, b) {
        return false;
    };
    WorkbookLoadManagerExcel2003_ResolveNamedReferenceVisitor.prototype.af = function (a, b) {
        a.u = this.a3._b._bb.u.item(b);
        return true;
    };
    WorkbookLoadManagerExcel2003_ResolveNamedReferenceVisitor.prototype.ag = function (a, b) {
        a.u = a.o.e.u.item(b);
        return true;
    };
    WorkbookLoadManagerExcel2003_ResolveNamedReferenceVisitor.$t = markType(WorkbookLoadManagerExcel2003_ResolveNamedReferenceVisitor, 'WorkbookLoadManagerExcel2003_ResolveNamedReferenceVisitor', FormulaTokenVisitor$2.$.specialize(Number_$type, Boolean_$type));
    return WorkbookLoadManagerExcel2003_ResolveNamedReferenceVisitor;
}(FormulaTokenVisitor$2));
export { WorkbookLoadManagerExcel2003_ResolveNamedReferenceVisitor };
/**
 * @hidden
 */
var WorkbookSerializationDataExcel2003 = /** @class */ (function (_super) {
    tslib_1.__extends(WorkbookSerializationDataExcel2003, _super);
    function WorkbookSerializationDataExcel2003(a) {
        var _rest = [];
        for (var _0 = 1; _0 < arguments.length; _0++) {
            _rest[_0 - 1] = arguments[_0];
        }
        var _this = _super.call(this) || this;
        _this.g = null;
        _this.f = null;
        _this.i = null;
        _this.h = null;
        _this.j = null;
        _this.k = null;
        _this.l = null;
        _this.b = null;
        _this.d = null;
        _this.p = null;
        _this.q = null;
        _this.c = null;
        _this.a = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    var c = _rest[0];
                    _this.b = new ContextStack();
                    _this.d = null;
                    _this.p = new List$1(WorksheetCellFormatData.$, 0);
                    _this.q = new List$1(WorkbookSerializationDataExcel2003_ImageHolder.$, 0);
                    _this.c = new SeekableBufferedStream(c);
                    _this.a = null;
                    _this.g = new BOOLERRRecord();
                    _this.f = new BLANKRecord();
                    _this.i = new LABELSSTRecord();
                    _this.h = new FORMULARecord();
                    _this.j = new NUMBERRecord();
                    _this.k = new RKRecord();
                    _this.l = new ROWRecord();
                }
                break;
        }
        return _this;
    }
    WorkbookSerializationDataExcel2003.prototype.s = function (a) {
        var b = this.c.position;
        try {
            var c = new Array((this.c.position - a));
            this.c.position = a;
            this.c.read(c, 0, c.length);
            var d = 20;
            var e = d + 4;
            var f = intDivide(c.length, e);
            this.a = new Array(f * d);
            for (var g = 0; g < f; g++) {
                var h = (g * e) + 4;
                var i = (g * d);
                Buffer.c(c, h, this.a, i, d);
            }
        }
        finally {
            this.c.position = b;
        }
    };
    WorkbookSerializationDataExcel2003.prototype.e = function (a) {
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
    };
    WorkbookSerializationDataExcel2003.$t = markStruct(WorkbookSerializationDataExcel2003, 'WorkbookSerializationDataExcel2003');
    return WorkbookSerializationDataExcel2003;
}(ValueType));
export { WorkbookSerializationDataExcel2003 };
/**
 * @hidden
 */
var WorkbookSerializationDataExcel2003_ImageHolder = /** @class */ (function (_super) {
    tslib_1.__extends(WorkbookSerializationDataExcel2003_ImageHolder, _super);
    function WorkbookSerializationDataExcel2003_ImageHolder(a, b) {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.d = 0;
        _this.a = a;
        _this.d = b;
        return _this;
    }
    WorkbookSerializationDataExcel2003_ImageHolder.prototype.equals = function (a) {
        var b = typeCast(WorkbookSerializationDataExcel2003_ImageHolder.$, a);
        return b != null && Base.equalsStatic(this.a, b.a);
    };
    WorkbookSerializationDataExcel2003_ImageHolder.prototype.getHashCode = function () {
        return Base.getHashCodeStatic(this.a);
    };
    WorkbookSerializationDataExcel2003_ImageHolder.$t = markType(WorkbookSerializationDataExcel2003_ImageHolder, 'WorkbookSerializationDataExcel2003_ImageHolder');
    return WorkbookSerializationDataExcel2003_ImageHolder;
}(Base));
export { WorkbookSerializationDataExcel2003_ImageHolder };
/**
 * @hidden
 */
var BiffRecordStream = /** @class */ (function (_super) {
    tslib_1.__extends(BiffRecordStream, _super);
    function BiffRecordStream(a) {
        var _rest = [];
        for (var _0 = 1; _0 < arguments.length; _0++) {
            _rest[_0 - 1] = arguments[_0];
        }
        var _this = _super.call(this) || this;
        _this._aj = false;
        _this._bi = 0;
        _this._bm = null;
        _this._bl = null;
        _this._a4 = 0;
        _this._a7 = 0;
        _this._am = new List$1(BiffRecordStream_RecordBlockInfo.$, 0);
        _this._aw = 0;
        _this._ah = false;
        _this._a8 = 0;
        _this._au = 0;
        _this._at = 0;
        _this._w = null;
        _this._ap = null;
        _this._o = null;
        _this._ai = false;
        _this._q = null;
        _this._loadManager_1 = null;
        _this._saveManager = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    _this._o = new Array(8);
                    _this._q = c || InPlaceTransform.b;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    var f = _rest[3];
                    var g = [f];
                    {
                        var i = g[0];
                        _this._o = new Array(8);
                        _this._q = i || InPlaceTransform.b;
                    }
                    _this._ai = true;
                    _this._aj = true;
                    _this._loadManager = c;
                    _this._bm = d;
                    _this._bl = e;
                    _this._au = _this._bb(e);
                    if (_this._au == _this._a1()) {
                        _this._am.add(_this._aa(_this._bm.position, 0));
                        return _this;
                    }
                    var h = _this._ba(_this._bl);
                    _this._bi = _this._bm.position;
                    _this._a4 = h;
                    _this._am.add(_this._aa(_this._bm.position, h));
                    _this._bm.position = _this._bi + _this._a4;
                    _this._bw();
                    _this._bm.position = _this._bi;
                    _this._b8(0);
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    var f = _rest[3];
                    var g = [f];
                    {
                        var i = g[0];
                        _this._o = new Array(8);
                        _this._q = i || InPlaceTransform.b;
                    }
                    _this._aj = true;
                    _this.saveManager = c;
                    _this._bm = d;
                    _this._au = e;
                    _this._am.add(_this._aa(_this._bm.position + _this._ax() + _this._bj(), 0));
                    _this._bi = _this._bm.position;
                    _this._b8(0);
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(BiffRecordStream.prototype, "parentStreamRaw", {
        get: function () {
            return this._w;
        },
        set: function (a) {
            this._w = typeCast(BiffRecordStream.$, a);
        },
        enumerable: true,
        configurable: true
    });
    BiffRecordStream.prototype.writeByte = function (a) {
        this._write9(a);
    };
    BiffRecordStream.prototype.writeByteArray = function (a) {
        this._write2(a);
    };
    BiffRecordStream.prototype.writeDouble = function (a) {
        this._write10(a);
    };
    BiffRecordStream.prototype.writeString = function (a, b) {
        this._write15(a, b);
    };
    BiffRecordStream.prototype.get_canRead = function () {
        return true;
    };
    Object.defineProperty(BiffRecordStream.prototype, "canRead", {
        get: function () {
            return this.get_canRead();
        },
        enumerable: true,
        configurable: true
    });
    BiffRecordStream.prototype.get_canSeek = function () {
        return true;
    };
    Object.defineProperty(BiffRecordStream.prototype, "canSeek", {
        get: function () {
            return this.get_canSeek();
        },
        enumerable: true,
        configurable: true
    });
    BiffRecordStream.prototype.get_canWrite = function () {
        return true;
    };
    Object.defineProperty(BiffRecordStream.prototype, "canWrite", {
        get: function () {
            return this.get_canWrite();
        },
        enumerable: true,
        configurable: true
    });
    BiffRecordStream.prototype.disposeCore = function (a) {
        try {
            if (a) {
                this._b1();
                if (this._q.d && this._q.c == false) {
                    for (var b = 0; b < this._am.count; b++) {
                        var c = this._am._inner[b];
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
            _super.prototype.disposeCore.call(this, a);
        }
    };
    BiffRecordStream.prototype.get_length = function () {
        return this._a4;
    };
    Object.defineProperty(BiffRecordStream.prototype, "length", {
        get: function () {
            return this.get_length();
        },
        enumerable: true,
        configurable: true
    });
    BiffRecordStream.prototype.flush = function () {
    };
    BiffRecordStream.prototype.get_position = function () {
        return this._a7;
    };
    BiffRecordStream.prototype.set_position = function (a) {
        if (this._aj == false) {
            return;
        }
        if (this._a7 == a) {
            return;
        }
        if (a < 0) {
            return;
        }
        var b = (a - this._a7);
        var c = this._a8 + b;
        this._a7 = a;
        if (this._bi == this._bm.position && 0 <= c && c < this._am._inner[this._aw].b) {
            this._a8 = c;
            this._bi += b;
            this._bm.position = this._bi;
        }
        else {
            this._b9();
        }
    };
    Object.defineProperty(BiffRecordStream.prototype, "position", {
        get: function () {
            return this.get_position();
        },
        set: function (a) {
            this.set_position(a);
        },
        enumerable: true,
        configurable: true
    });
    BiffRecordStream.prototype.read = function (a, b, c) {
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
        var d = Math.min(c, (this._a4 - this._a7));
        if (d < 0) {
            return 0;
        }
        var e = 0;
        while (e < d) {
            e += this._bc(a, b + e, d - e);
        }
        return e;
    };
    BiffRecordStream.prototype.seek = function (a, b) {
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
    };
    BiffRecordStream.prototype.setLength = function (a) {
        if (a == this._a4) {
            return;
        }
        if (a < this._a4) {
            return;
        }
        var b = a - this._a4;
        this._a4 = a;
        var c = false;
        var d = this._bm.position;
        while (true) {
            var e = this._am.count - 1;
            var f = this._am._inner[e];
            var g = f.b;
            if (g + b <= f.d) {
                f.b = (g + b);
                break;
            }
            else {
                var h = f.d - f.b;
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
    };
    BiffRecordStream.prototype.write = function (a, b, c) {
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
        var d = 0;
        var e = true;
        if (this._ai == false) {
            this._cx(Math.min(c, this._am._inner[0].d));
            e = false;
        }
        var f = this._a7 + c;
        if (f > this.length) {
            this.setLength(f);
        }
        while (d < c) {
            d += this._bh(a, b + d, c - d);
        }
        if (e == false) {
            this._ah = false;
        }
    };
    BiffRecordStream.prototype._addSubStream = function (a) {
        var b = typeCast(BiffRecordStream.$, a);
        if (this._ap == null) {
            this._ap = new List$1(IBiffRecordStream_$type, 0);
        }
        this._ap.add(a);
        b.parentStreamRaw = this;
        this._aj = false;
        this._am._inner[this._aw].h();
    };
    BiffRecordStream.prototype._appendNextRecordIfType = function (a) {
        if (this._af(a) == false) {
            return false;
        }
        this._bm.seek(this._am._inner[this._am.count - 1].b, 1);
        this._bw();
        return true;
    };
    BiffRecordStream.prototype._capCurrentBlock = function () {
        this._syncWorkbookStreamPosition();
        this._am._inner[this._aw].h();
    };
    BiffRecordStream.prototype._getDataSize = function (a, b, c) {
        var d = this.position;
        try {
            this.position = a;
            {
                var e = new MemoryStream(0);
                try {
                    var f = this._x(e, -a);
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
    };
    BiffRecordStream.prototype._getStartOfRecord = function () {
        return this._am._inner[0].g - this._ax() - this._bj();
    };
    BiffRecordStream.prototype.readByteFromBuffer = function (a, b) {
        if (b == a.length) {
            var c = this._by(a, b);
            a = c.p0;
            b = c.p1;
        }
        return {
            ret: a[b++],
            p0: a,
            p1: b
        };
    };
    BiffRecordStream.prototype._readBytes = function (a) {
        if (a < 0) {
            return new Array(0);
        }
        var b = new Array(a);
        var c = this.read(b, 0, a);
        if (c == a) {
            return b;
        }
        if (c == 0) {
            return new Array(0);
        }
        var d = new Array(c);
        Buffer.c(b, 0, d, 0, c);
        return d;
    };
    BiffRecordStream.prototype.readBytesFromBuffer = function (a, b, c) {
        if (a < 0) {
            return {
                ret: new Array(0),
                p1: b,
                p2: c
            };
        }
        var d = new Array(a);
        var e = 0;
        while (true) {
            var f = Math.min(a - e, b.length - c);
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
                var g = new Array(e);
                Buffer.c(d, 0, g, 0, e);
                return {
                    ret: g,
                    p1: b,
                    p2: c
                };
            }
            var h = this._by(b, c);
            b = h.p0;
            c = h.p1;
        }
    };
    BiffRecordStream.prototype._readDouble = function () {
        if (this.read(this._o, 0, 8) != 8) {
            throw new EndOfStreamException(null, null);
        }
        return BitConverter.o(this._o, 0);
    };
    BiffRecordStream.prototype.readDoubleFromBuffer = function (a, b) {
        if (b + 8 > a.length) {
            var c = this._by(a, b);
            a = c.p0;
            b = c.p1;
        }
        var d = BitConverter.o(a, b);
        b += 8;
        return {
            ret: d,
            p0: a,
            p1: b
        };
    };
    BiffRecordStream.prototype._readFormattedString = function (a) {
        if (a != 0 && a != 1) {
            return null;
        }
        var b = a == 0 ? this.readByte() : this._readUInt16();
        return this._readFormattedString1(b);
    };
    BiffRecordStream.prototype._readFormattedString1 = function (a) {
        var _this = this;
        var b;
        if (((function () { var c = _this._tryReadFormattedString(a, b); b = c.p1; return c.ret; })()) == false) {
            throw new EndOfStreamException(null, null);
        }
        return b;
    };
    BiffRecordStream.prototype._tryReadFormattedString = function (a, b) {
        b = null;
        var c = this._z(a);
        if (c == null) {
            return {
                ret: false,
                p1: b
            };
        }
        if (c.a) {
            var d = new FormattedStringElement(1, c.c);
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
    };
    BiffRecordStream.prototype._readFormattedStringBlock = function (a, b) {
        var _this = this;
        if (a == 0) {
            return null;
        }
        var c = new Array(0);
        var d = 0;
        var e = this._by(c, d);
        c = e.p0;
        d = e.p1;
        var f = 0;
        return Async.f(0, a, 1, function (g) {
            b.add(((function () { var h = _this.readFormattedStringFromBuffer(1, c, d); c = h.p1; d = h.p2; return h.ret; })()));
            f++;
            if (1000 < f) {
                f = 0;
                return false;
            }
            return true;
        });
    };
    BiffRecordStream.prototype.readFormattedStringFromBuffer = function (a, b, c) {
        var _this = this;
        var d = a == 0 ? ((function () { var e = _this.readByteFromBuffer(b, c); b = e.p0; c = e.p1; return e.ret; })()) : ((function () { var e = _this._readUInt16FromBuffer(b, c); b = e.p0; c = e.p1; return e.ret; })());
        return {
            ret: ((function () { var e = _this._readFormattedStringFromBuffer1(d, b, c); b = e.p1; c = e.p2; return e.ret; })()),
            p1: b,
            p2: c
        };
    };
    BiffRecordStream.prototype._readFormattedStringFromBuffer1 = function (a, b, c) {
        var _this = this;
        var d = ((function () { var e = _this._y(a, b, c); b = e.p1; c = e.p2; return e.ret; })());
        var e;
        if (d.a) {
            var f = new FormattedStringElement(1, d.c);
            var g = this._readFormattingRunsFromBuffer(f, d.d, b, c);
            b = g.p2;
            c = g.p3;
            e = f;
        }
        else {
            e = new StringElement(d.c);
        }
        var h = this._b5(b, c, d.b);
        b = h.p0;
        c = h.p1;
        return {
            ret: e,
            p1: b,
            p2: c
        };
    };
    BiffRecordStream.prototype._readFormulaCellAddressFromBuffer = function (a, b) {
        var _this = this;
        var c = ((function () { var d = _this._readUInt16FromBuffer(a, b); a = d.p0; b = d.p1; return d.ret; })());
        var d = ((function () { var e = _this._readUInt16FromBuffer(a, b); a = e.p0; b = e.p1; return e.ret; })());
        return {
            ret: BiffRecordStream._t(c, d),
            p0: a,
            p1: b
        };
    };
    BiffRecordStream.prototype._readFormulaCellAddressRangeFromBuffer = function (a, b) {
        var _this = this;
        var c = ((function () { var d = _this._readUInt16FromBuffer(a, b); a = d.p0; b = d.p1; return d.ret; })());
        var d = ((function () { var e = _this._readUInt16FromBuffer(a, b); a = e.p0; b = e.p1; return e.ret; })());
        var e = ((function () { var f = _this._readUInt16FromBuffer(a, b); a = f.p0; b = f.p1; return f.ret; })());
        var f = ((function () { var g = _this._readUInt16FromBuffer(a, b); a = g.p0; b = g.p1; return g.ret; })());
        var g = BiffRecordStream._t(c, e);
        var h = BiffRecordStream._t(d, f);
        return {
            ret: new CellAddressRange(1, g, h),
            p0: a,
            p1: b
        };
    };
    BiffRecordStream.prototype._ao = function (a, b) {
        var _this = this;
        var c = ((function () { var d = _this._readUInt16FromBuffer(a, b); a = d.p0; b = d.p1; return d.ret; })());
        var d = new List$1(CellAddressRange.$, 2, c);
        for (var e = 0; e < c; e++) {
            d.add(((function () { var f = _this._readFormulaCellAddressRangeFromBuffer(a, b); a = f.p0; b = f.p1; return f.ret; })()));
        }
        return {
            ret: d,
            p0: a,
            p1: b
        };
    };
    BiffRecordStream.prototype._readInt16 = function () {
        if (this.read(this._o, 0, 2) != 2) {
            throw new EndOfStreamException(null, null);
        }
        return BitConverter.p(this._o, 0);
    };
    BiffRecordStream.prototype._readInt32 = function () {
        if (this.read(this._o, 0, 4) != 4) {
            throw new EndOfStreamException(null, null);
        }
        return BitConverter.q(this._o, 0);
    };
    BiffRecordStream.prototype._readInt16FromBuffer = function (a, b) {
        if (b + 2 > a.length) {
            var c = this._by(a, b);
            a = c.p0;
            b = c.p1;
        }
        var d = BitConverter.p(a, b);
        b += 2;
        return {
            ret: d,
            p0: a,
            p1: b
        };
    };
    BiffRecordStream.prototype._readInt32FromBuffer = function (a, b) {
        if (b + 4 > a.length) {
            var c = this._by(a, b);
            a = c.p0;
            b = c.p1;
        }
        var d = BitConverter.q(a, b);
        b += 4;
        return {
            ret: d,
            p0: a,
            p1: b
        };
    };
    BiffRecordStream.prototype._readNextBlockType = function () {
        if (this._bm.position >= this._bm.length - 1) {
            return Nullable$1.toNullable(Number_$type, null);
        }
        var a = this._bm.position;
        var b = this._bb(this._bl);
        this._bm.position = a;
        return Nullable$1.toNullable(Number_$type, b);
    };
    BiffRecordStream.prototype._readNullTerminatedUnicodeString = function () {
        var a = new List$1(Number_$type, 0);
        while (true) {
            var b = this.readByte();
            var c = this.readByte();
            if (b <= 0 && c <= 0) {
                break;
            }
            a.add(b);
            a.add(c);
        }
        return Encoding.unicode.getString(a.toArray());
    };
    BiffRecordStream.prototype._writeNullTerminatedUnicodeString = function (a) {
        this._write2(Encoding.unicode.getBytes1(a));
        this.writeByte(0);
        this.writeByte(0);
    };
    BiffRecordStream.prototype._readRect = function () {
        var a = this._readInt32();
        var b = this._readInt32();
        var c = this._readInt32();
        var d = this._readInt32();
        return new Rect(0, a, b, c - a, d - b);
    };
    BiffRecordStream.prototype._readUInt16 = function () {
        if (this.read(this._o, 0, 2) != 2) {
            throw new EndOfStreamException(null, null);
        }
        return BitConverter.w(this._o, 0);
    };
    BiffRecordStream.prototype._readUInt16FromBuffer = function (a, b) {
        if (b + 2 > a.length) {
            var c = this._by(a, b);
            a = c.p0;
            b = c.p1;
        }
        var d = BitConverter.w(a, b);
        b += 2;
        return {
            ret: d,
            p0: a,
            p1: b
        };
    };
    BiffRecordStream.prototype._readUInt32 = function () {
        if (this.read(this._o, 0, 4) != 4) {
            throw new EndOfStreamException(null, null);
        }
        return BitConverter.x(this._o, 0);
    };
    BiffRecordStream.prototype._readUInt32FromBuffer = function (a, b) {
        if (b + 4 > a.length) {
            var c = this._by(a, b);
            a = c.p0;
            b = c.p1;
        }
        var d = BitConverter.x(a, b);
        b += 4;
        return {
            ret: d,
            p0: a,
            p1: b
        };
    };
    BiffRecordStream.prototype._syncWorkbookStreamPosition = function () {
        if (this._bi == this._bm.position) {
            return;
        }
        this._b9();
    };
    BiffRecordStream.prototype._write9 = function (a) {
        var b = new Array(1);
        b[0] = a;
        this._write2(b);
    };
    BiffRecordStream.prototype._write2 = function (a) {
        if (a == null) {
            return;
        }
        this.write(a, 0, a.length);
    };
    BiffRecordStream.prototype._write10 = function (a) {
        this._write2(BitConverter.c(a));
    };
    BiffRecordStream.prototype._write12 = function (a) {
        this._write2(BitConverter.e(a));
    };
    BiffRecordStream.prototype._write11 = function (a) {
        this._write2(BitConverter.d(a));
    };
    BiffRecordStream.prototype._write17 = function (a) {
        this._write2(BitConverter.h(a));
    };
    BiffRecordStream.prototype._write18 = function (a) {
        this._write2(BitConverter.i(a));
    };
    BiffRecordStream.prototype._write19 = function (a) {
        this._write2(BitConverter.j(a));
    };
    BiffRecordStream.prototype._write14 = function (a) {
        this._write5(new StringElement(a));
    };
    BiffRecordStream.prototype._write15 = function (a, b) {
        this._write6(new StringElement(a), b);
    };
    BiffRecordStream.prototype._write16 = function (a, b, c) {
        this._write7(new StringElement(a), b, c);
    };
    BiffRecordStream.prototype._write3 = function (a) {
        var b;
        var c;
        var d = BiffRecordStream._b0(a, b, c);
        b = d.p1;
        c = d.p2;
        this._write17(b);
        this._write17(c);
    };
    BiffRecordStream.prototype._write4 = function (a) {
        var b;
        var c;
        var d;
        var e;
        var f = BiffRecordStream._b0(a.d, b, d);
        b = f.p1;
        d = f.p2;
        var g = BiffRecordStream._b0(a.b, c, e);
        c = g.p1;
        e = g.p2;
        this._write17(b);
        this._write17(c);
        this._write17(d);
        this._write17(e);
    };
    BiffRecordStream.prototype._write1 = function (a, b) {
        if (b === void 0) { b = true; }
        var c = this.position;
        this._write17(0);
        var d;
        for (d = 0; d < a.count; d++) {
            if (b == false && this._bytesAvailableInCurrentBlock < 8) {
                break;
            }
            this._write4(a._inner[d]);
        }
        var e = this.position;
        this.position = c;
        this._write17(d);
        this.position = e;
        return d;
    };
    BiffRecordStream.prototype._write5 = function (a) {
        this._write8(a, true);
    };
    BiffRecordStream.prototype._write8 = function (a, b) {
        this._cy(a, 0, true, false, 0, true, b);
    };
    BiffRecordStream.prototype._write6 = function (a, b) {
        this._write7(a, b, true);
    };
    BiffRecordStream.prototype._write7 = function (a, b, c) {
        if (b != 0 && b != 1) {
            return;
        }
        this._cy(a, 0, true, true, b, c, true);
    };
    BiffRecordStream.prototype._write13 = function (a) {
        var b = a.length;
        var c = this._am._inner[0];
        if (this._ai || a.length > c.d) {
            this.write(a.getBuffer(), 0, b);
            return;
        }
        var d = this._getStartOfRecord();
        if (this._bi != d || this._bi != this._bm.position) {
            this._bi = d;
            this._bm.position = d;
        }
        var e = new Array(4 + b);
        Buffer.c(BitConverter.d(this._au), 0, e, 0, 2);
        Buffer.c(BitConverter.d(b), 0, e, 2, 2);
        Buffer.c(a.getBuffer(), 0, e, 4, b);
        this._q.l(this._bm.position + 4, e, 4, b);
        this._bm.write(e, 0, e.length);
        this._ai = true;
        this._bi += e.length;
        this._a4 = this._a7 = this._a8 = c.b = b;
    };
    BiffRecordStream.prototype._writeEMURect = function (a) {
        this._write12(truncate(a.left));
        this._write12(truncate(a.top));
        this._write12(truncate(a.right));
        this._write12(truncate(a.bottom));
    };
    BiffRecordStream.prototype._bw = function () {
        var a = this._a3();
        while (true) {
            if (this._af(a) == false) {
                break;
            }
            this._bm.position += this._am._inner[this._am.count - 1].b;
        }
    };
    BiffRecordStream.prototype._af = function (a) {
        if (this._bm.position >= this._bm.length - 1) {
            return false;
        }
        var b = this._bm.position;
        var c = this._bb(this._bl);
        if (this._ak(a, c) == false) {
            this._bm.position = b;
            return false;
        }
        var d = this._ba(this._bl);
        var e = this._ay(c);
        d -= e;
        this._bn.position += e;
        this._a4 += d;
        this._am.add(this._aa(this._bm.position, d));
        return true;
    };
    BiffRecordStream.prototype._ay = function (a) {
        switch (a) {
            case 2165: return 12;
            default: return 0;
        }
    };
    BiffRecordStream.prototype._aa = function (a, b) {
        return new BiffRecordStream_RecordBlockInfo(a, b, this._a2());
    };
    BiffRecordStream.prototype._b3 = function (a, b, c) {
        var e_45, _0;
        a._bi = -1;
        a._a4 = this._a4;
        a._a7 = this._a7;
        a._am = new List$1(BiffRecordStream_RecordBlockInfo.$, 0);
        var d = c - this._am._inner[0].g;
        try {
            for (var _1 = tslib_1.__values(fromEnum(this._am)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var e = _2.value;
                a._am.add(new BiffRecordStream_RecordBlockInfo(e.g + d, e.b, e.d));
            }
        }
        catch (e_45_1) { e_45 = { error: e_45_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_45) throw e_45.error; }
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
    };
    BiffRecordStream.prototype._z = function (a) {
        if (this.position == this.length) {
            return null;
        }
        var b = this.readByte();
        var c = (b & 1) == 0;
        var d = (b & 4) == 4;
        var e = (b & 8) == 8;
        if (e && this.position + 1 >= this.length) {
            return null;
        }
        var f = e ? this._readUInt16() : 0;
        var g = 0;
        if (d) {
            if (this.position + 3 >= this.length) {
                return null;
            }
            g = this._readInt32();
        }
        var h = c ? Workbook._g1 : Encoding.unicode;
        var i = a;
        if (c == false) {
            i *= 2;
        }
        var j = new Array(i);
        var k = this._bc(j, 0, i);
        var l = h.getString1(j, 0, k);
        if (l.length != a && this._bytesAvailableInCurrentBlock == 0) {
            var m = this._z(a - l.length);
            if (m == null) {
                return null;
            }
            l += m.c;
        }
        var n = new BiffRecordStream_FormattedStringInfo();
        n.b = g;
        n.a = e;
        n.d = f;
        n.c = l;
        return n;
    };
    BiffRecordStream.prototype._ak = function (a, b) {
        return a == b;
    };
    BiffRecordStream.prototype._bh = function (a, b, c) {
        this._syncWorkbookStreamPosition();
        var d = this._am._inner[this._aw];
        if (this._a8 == d.d) {
            this._b2();
            d = this._am._inner[this._aw];
            this._a8 = 0;
            this._bm.position = d.g;
            this._bi = this._bm.position;
            this._ct(this._au);
        }
        var e = Math.min(c, d.d - this._a8);
        this._q.l(this._bm.position, a, b, e);
        this._bm.write(a, b, e);
        var f = (this._bm.position - this._bi);
        if (f > 0) {
            this._ah = true;
        }
        this._a8 += f;
        this._a7 += f;
        this._bi += f;
        return f;
    };
    BiffRecordStream.prototype._ct = function (a) {
    };
    BiffRecordStream.prototype._bv = function (a, b, c) {
        if (b + c > a.length) {
            var d = this._by(a, b);
            a = d.p0;
            b = d.p1;
        }
        b += c;
        return {
            p0: a,
            p1: b
        };
    };
    BiffRecordStream.prototype._bx = function () {
        this._cz(this._a3());
        this._bi += 4;
        this._b2();
        this._a8 = 0;
    };
    BiffRecordStream.prototype._by = function (a, b) {
        var c = 0;
        if (b < a.length) {
            c = a.length - b;
        }
        var d = this._am._inner[this._aw];
        var e = d.b;
        var f;
        if (this._a8 == e) {
            f = this._am._inner[this._aw + 1].b;
        }
        else {
            f = e - this._a8;
        }
        var g = new Array(c + f);
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
    };
    BiffRecordStream._t = function (a, b) {
        var c = (b & 16384) == 16384;
        var d = (b & 32768) == 32768;
        var e = (b & 255);
        return new CellAddress(1, a, d, e, c);
    };
    BiffRecordStream._b0 = function (a, b, c) {
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
    };
    BiffRecordStream.prototype._b1 = function () {
        if (this._ah) {
            var a = this._bm.position;
            var b = this._am._inner[this._aw];
            this._bm.position = b.g - this._ax();
            this._cu(this._bm, b.b, false);
            this._bm.position = a;
            this._ah = false;
        }
        else if (this._ai == false) {
            this._cx(0);
        }
    };
    BiffRecordStream.prototype._a3 = function () {
        var a = this._nextBlockTypeInternal;
        if (a == this._a1()) {
            return this._a0();
        }
        this._nextBlockTypeInternal = this._a1();
        return a;
    };
    BiffRecordStream.prototype._b2 = function () {
        this._b1();
        this._b8(this._aw + 1);
    };
    BiffRecordStream.prototype._b4 = function (a) {
        this.seek(a, 1);
    };
    BiffRecordStream.prototype._b5 = function (a, b, c) {
        var d = this._bv(a, b, c);
        a = d.p0;
        b = d.p1;
        return {
            p0: a,
            p1: b
        };
    };
    BiffRecordStream.prototype._y = function (a, b, c) {
        var _this = this;
        var d = ((function () { var e = _this.readByteFromBuffer(b, c); b = e.p0; c = e.p1; return e.ret; })());
        var e = (d & 1) == 0;
        var f = (d & 4) == 4;
        var g = (d & 8) == 8;
        var h = g ? ((function () { var i = _this._readUInt16FromBuffer(b, c); b = i.p0; c = i.p1; return i.ret; })()) : 0;
        var i = 0;
        if (f) {
            i = ((function () { var j = _this._readInt32FromBuffer(b, c); b = j.p0; c = j.p1; return j.ret; })());
        }
        var j = e ? Workbook._g1 : Encoding.unicode;
        var k = a;
        if (e == false) {
            k *= 2;
        }
        var l = Math.min(k, b.length - c);
        var m = j.getString1(b, c, l);
        c += l;
        if (m.length != a && c >= b.length) {
            var n = this._by(b, c);
            b = n.p0;
            c = n.p1;
            var o = ((function () { var p = _this._y(a - m.length, b, c); b = p.p1; c = p.p2; return p.ret; })());
            m += o.c;
        }
        var p = new BiffRecordStream_FormattedStringInfo();
        p.b = i;
        p.a = g;
        p.d = h;
        p.c = m;
        return {
            ret: p,
            p1: b,
            p2: c
        };
    };
    BiffRecordStream.prototype._b6 = function (a, b) {
        var c = this._loadManager._b;
        for (var d = 0; d < b; d++) {
            var e = this._readUInt16();
            var f = this._readUInt16();
            var g = new FormattedStringRun(a, e);
            g.f(c).setFontFormatting(this._loadManager._h._inner[f]);
            a._ah.add(g);
        }
    };
    BiffRecordStream.prototype._readFormattingRunsFromBuffer = function (a, b, c, d) {
        var _this = this;
        var e = this._loadManager;
        var f = e._b;
        for (var g = 0; g < b; g++) {
            var h = ((function () { var i = _this._readUInt16FromBuffer(c, d); c = i.p0; d = i.p1; return i.ret; })());
            var i = ((function () { var j = _this._readUInt16FromBuffer(c, d); c = j.p0; d = j.p1; return j.ret; })());
            if (h < a._w) {
                var j = new FormattedStringRun(a, h);
                j.d(f).setFontFormatting(e._h._inner[i]);
                a._ah.add(j);
            }
        }
        return {
            p2: c,
            p3: d
        };
    };
    BiffRecordStream.prototype._bc = function (a, b, c) {
        if (c == 0) {
            return 0;
        }
        this._syncWorkbookStreamPosition();
        var d = this._am._inner[this._aw];
        var e = d.b;
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
        var f = Math.min(c, e - this._a8);
        var g = this._bm.read(a, b, f);
        this._q.l(this._bi, a, b, g);
        this._a8 += g;
        this._a7 += g;
        this._bi += g;
        return f;
    };
    BiffRecordStream.prototype._b8 = function (a) {
        this._aw = a;
        if (this._aw < this._am.count) {
            this._q.j(this._am._inner[this._aw].b);
        }
    };
    BiffRecordStream.prototype._b9 = function () {
        this._b1();
        this._b8(0);
        var a = 0;
        while (true) {
            if (this._aw == this._am.count) {
                this._bi = -1;
                return;
            }
            var b = this._am._inner[this._aw];
            var c = b.b;
            var d = b.g;
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
    };
    BiffRecordStream.prototype._cx = function (a) {
        var b = this._getStartOfRecord();
        if (this._bi != b || this._bi != this._bm.position) {
            this._bm.position = b;
            this._bi = b;
        }
        this._cv(this._bm, this._au);
        this._cu(this._bm, a, false);
        this._ai = true;
        this._bi = this._bm.position;
    };
    BiffRecordStream.prototype._cy = function (a, b, c, d, e, f, g) {
        var h = typeCast(FormattedStringElement.$, a);
        var i = 0;
        var j = 0;
        if (h != null) {
            i = h._ah.count;
            if (i != 0) {
                var k = h._ah._inner[0];
                if (k.i == 0) {
                    var l = k.f(this.saveManager._b);
                    if (l._r.getValueOrDefault() == 0) {
                        j++;
                        i--;
                    }
                }
            }
        }
        var m = 0;
        var n = false;
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
        var o = m;
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
        var p = this._bytesAvailableInCurrentBlock - m;
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
        var q = a._y.length - b;
        var r;
        var s;
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
        var t = 0;
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
        var u = s ? Workbook._g1 : Encoding.unicode;
        this._write2(u.getBytes1(r));
        var v = b + r.length;
        if (v < a._y.length) {
            this._cy(a, v, false, false, e, f, g);
        }
        if (n) {
            for (var w = j; w < h._ah.count; w++) {
                var x = h._ah._inner[w];
                if (this._bytesAvailableInCurrentBlock < 4) {
                    this._b1();
                    this._bx();
                }
                this._write17(x.i);
                var y = 0;
                if (x.h) {
                    var z = x.f(this.saveManager._b)._r;
                    y = z.getValueOrDefault();
                }
                this._write17(y);
            }
        }
    };
    BiffRecordStream.prototype._cz = function (a) {
        this._cv(this._bm, a);
        this._cu(this._bm, 0, false);
        this._am.add(this._aa(this._bm.position, 0));
    };
    Object.defineProperty(BiffRecordStream.prototype, "_an", {
        get: function () {
            return this._am;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BiffRecordStream.prototype, "_bytesAvailableInCurrentBlock", {
        get: function () {
            this._syncWorkbookStreamPosition();
            return this._am._inner[this._aw].d - this._a8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BiffRecordStream.prototype, "endUnderlyingStreamPosition", {
        get: function () {
            var e_46, _0;
            var a = this._am._inner[this._am.count - 1].e;
            if (this._ap != null) {
                try {
                    for (var _1 = tslib_1.__values(fromEnum(this._ap)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                        var b = _2.value;
                        a = Math.max(a, b.endUnderlyingStreamPosition);
                    }
                }
                catch (e_46_1) { e_46 = { error: e_46_1 }; }
                finally {
                    try {
                        if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
                    }
                    finally { if (e_46) throw e_46.error; }
                }
            }
            return a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BiffRecordStream.prototype, "_loadManager", {
        get: function () {
            return this._loadManager_1;
        },
        set: function (a) {
            this._loadManager_1 = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BiffRecordStream.prototype, "_nextBlockTypeInternal", {
        get: function () {
            return this._at;
        },
        set: function (a) {
            this._at = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BiffRecordStream.prototype, "_bn", {
        get: function () {
            return this._bm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BiffRecordStream.prototype, "_positionInCurrentBlock", {
        get: function () {
            return this._a8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BiffRecordStream.prototype, "_bf", {
        get: function () {
            return this._au;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BiffRecordStream.prototype, "saveManager", {
        get: function () {
            return this._saveManager;
        },
        set: function (a) {
            this._saveManager = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BiffRecordStream.prototype, "_transform", {
        get: function () {
            return this._q;
        },
        enumerable: true,
        configurable: true
    });
    BiffRecordStream.$t = markType(BiffRecordStream, 'BiffRecordStream', Stream.$, [IBiffRecordStream_$type]);
    return BiffRecordStream;
}(Stream));
export { BiffRecordStream };
/**
 * @hidden
 */
var BiffRecordStream_RecordBlockInfo = /** @class */ (function (_super) {
    tslib_1.__extends(BiffRecordStream_RecordBlockInfo, _super);
    function BiffRecordStream_RecordBlockInfo(a, b, c) {
        var _this = _super.call(this) || this;
        _this.f = 0;
        _this.a = 0;
        _this.c = 0;
        _this.f = a;
        _this.a = b;
        _this.c = c;
        return _this;
    }
    BiffRecordStream_RecordBlockInfo.prototype.h = function () {
        this.c = this.a;
    };
    Object.defineProperty(BiffRecordStream_RecordBlockInfo.prototype, "e", {
        get: function () {
            return this.f + this.a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BiffRecordStream_RecordBlockInfo.prototype, "b", {
        get: function () {
            return this.a;
        },
        set: function (a) {
            this.a = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BiffRecordStream_RecordBlockInfo.prototype, "g", {
        get: function () {
            return this.f;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BiffRecordStream_RecordBlockInfo.prototype, "d", {
        get: function () {
            return this.c;
        },
        enumerable: true,
        configurable: true
    });
    BiffRecordStream_RecordBlockInfo.$t = markType(BiffRecordStream_RecordBlockInfo, 'BiffRecordStream_RecordBlockInfo');
    return BiffRecordStream_RecordBlockInfo;
}(Base));
export { BiffRecordStream_RecordBlockInfo };
/**
 * @hidden
 */
var BiffRecordStream_FormattedStringInfo = /** @class */ (function (_super) {
    tslib_1.__extends(BiffRecordStream_FormattedStringInfo, _super);
    function BiffRecordStream_FormattedStringInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.c = null;
        _this.a = false;
        _this.b = 0;
        _this.d = 0;
        return _this;
    }
    BiffRecordStream_FormattedStringInfo.$t = markType(BiffRecordStream_FormattedStringInfo, 'BiffRecordStream_FormattedStringInfo');
    return BiffRecordStream_FormattedStringInfo;
}(Base));
export { BiffRecordStream_FormattedStringInfo };
/**
 * @hidden
 */
var WorkbookCFInfo = /** @class */ (function (_super) {
    tslib_1.__extends(WorkbookCFInfo, _super);
    function WorkbookCFInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.b = null;
        return _this;
    }
    WorkbookCFInfo.prototype.a = function (a) {
        var _this = this;
        if (this.b == null) {
            this.b = new Dictionary$2(Worksheet.$, WorksheetCFInfo.$, 0);
        }
        var b = null;
        if (((function () { var c = _this.b.tryGetValue(a, b); b = c.p1; return c.ret; })()) == false) {
            b = new WorksheetCFInfo(a);
            this.b.addItem(a, b);
        }
        return b;
    };
    WorkbookCFInfo.prototype.c = function (a) {
        var _this = this;
        var b = null;
        if (((function () { var c = _this.b.tryGetValue(a, b); b = c.p1; return c.ret; })()) == false) {
            return b.f();
        }
        return null;
    };
    WorkbookCFInfo.$t = markType(WorkbookCFInfo, 'WorkbookCFInfo');
    return WorkbookCFInfo;
}(Base));
export { WorkbookCFInfo };
/**
 * @hidden
 */
var WorksheetCFInfo = /** @class */ (function (_super) {
    tslib_1.__extends(WorksheetCFInfo, _super);
    function WorksheetCFInfo(a) {
        var _this = _super.call(this) || this;
        _this.e = null;
        _this.g = null;
        _this.b = null;
        _this.d = null;
        _this.a = null;
        _this.d = a;
        _this.e = new Dictionary$2(Number_$type, CondFmtWrapper.$, 0);
        _this.g = new List$1(CondFmtWrapper.$, 0);
        return _this;
    }
    WorksheetCFInfo.prototype.h = function (a) {
        var _this = this;
        var b = null;
        if (a.d == 0) {
            this.g.add(a);
        }
        else if (((function () { var c = _this.e.tryGetValue(a.d, b); b = c.p1; return c.ret; })())) {
            var c = a.h ? "CONDFMT12" : "CONDFMT";
        }
        else {
            this.e.addItem(a.d, a);
        }
        this.b = a;
    };
    WorksheetCFInfo.prototype.c = function (a) {
        var _this = this;
        var b = null;
        if (((function () { var c = _this.e.tryGetValue(a, b); b = c.p1; return c.ret; })())) {
            return b;
        }
        else {
        }
        return null;
    };
    WorksheetCFInfo.prototype.f = function () {
        var e_47, _0, e_48, _1;
        var a = new List$1(CondFmtWrapper.$, 2, this.e.count);
        if (this.g != null) {
            try {
                for (var _2 = tslib_1.__values(fromEnum(this.g)), _3 = _2.next(); !_3.done; _3 = _2.next()) {
                    var b = _3.value;
                    a.add(b);
                }
            }
            catch (e_47_1) { e_47 = { error: e_47_1 }; }
            finally {
                try {
                    if (_3 && !_3.done && (_0 = _2.return)) _0.call(_2);
                }
                finally { if (e_47) throw e_47.error; }
            }
        }
        try {
            for (var _4 = tslib_1.__values(fromEnum(this.e.values)), _5 = _4.next(); !_5.done; _5 = _4.next()) {
                var c = _5.value;
                a.add(c);
            }
        }
        catch (e_48_1) { e_48 = { error: e_48_1 }; }
        finally {
            try {
                if (_5 && !_5.done && (_1 = _4.return)) _1.call(_4);
            }
            finally { if (e_48) throw e_48.error; }
        }
        return a;
    };
    WorksheetCFInfo.$t = markType(WorksheetCFInfo, 'WorksheetCFInfo');
    return WorksheetCFInfo;
}(Base));
export { WorksheetCFInfo };
/**
 * @hidden
 */
var CondFmtBase = /** @class */ (function (_super) {
    tslib_1.__extends(CondFmtBase, _super);
    function CondFmtBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.e = 0;
        _this.b = false;
        _this.d = 0;
        _this.a = null;
        _this.c = null;
        return _this;
    }
    CondFmtBase.prototype.toString = function () {
        if (this.c.count == 0) {
            return _super.prototype.toString.call(this);
        }
        var a = this.c.item(0).worksheet;
        var b = ConditionBase._a1(a, this.c);
        return stringFormat("ID={0} ({1})", this.d, b);
    };
    CondFmtBase.$t = markType(CondFmtBase, 'CondFmtBase');
    return CondFmtBase;
}(Base));
export { CondFmtBase };
/**
 * @hidden
 */
var CONDFMTSerializer = /** @class */ (function (_super) {
    tslib_1.__extends(CONDFMTSerializer, _super);
    function CONDFMTSerializer() {
        var _this = _super.call(this) || this;
        _this.h = null;
        _this.h = new List$1(ConditionBase.$, 0);
        return _this;
    }
    CONDFMTSerializer.prototype.g = function () {
        if (this.c.count == 1) {
            return this.c.item(0);
        }
        var a = this.c.item(0);
        for (var b = 1; b < this.c.count; b++) {
            var c = this.c.item(b);
            a = WorksheetRegion._g(a, c);
        }
        return a;
    };
    CONDFMTSerializer.$t = markType(CONDFMTSerializer, 'CONDFMTSerializer', CondFmtBase.$);
    return CONDFMTSerializer;
}(CondFmtBase));
export { CONDFMTSerializer };
/**
 * @hidden
 */
var CondFmtWrapper = /** @class */ (function (_super) {
    tslib_1.__extends(CondFmtWrapper, _super);
    function CondFmtWrapper() {
        var _this = _super.call(this) || this;
        _this.i = null;
        _this.g = null;
        _this.h = false;
        _this.i = new List$1(CfWrapper.$, 0);
        return _this;
    }
    CondFmtWrapper.$t = markType(CondFmtWrapper, 'CondFmtWrapper', CondFmtBase.$);
    return CondFmtWrapper;
}(CondFmtBase));
export { CondFmtWrapper };
/**
 * @hidden
 */
var CfWrapper = /** @class */ (function (_super) {
    tslib_1.__extends(CfWrapper, _super);
    function CfWrapper() {
        var _this = _super.call(this) || this;
        _this.e = null;
        _this.l = null;
        _this.m = 0;
        _this.k = 0;
        _this.n = null;
        _this.a = null;
        _this.b = null;
        _this.c = null;
        _this.i = null;
        _this.h = null;
        _this.d = null;
        _this.g = null;
        _this.f = null;
        _this.j = null;
        _this.e = new CfCommonProps();
        return _this;
    }
    CfWrapper.prototype.o = function (a) {
        var b = a.b.i.indexOf(this);
    };
    CfWrapper.$t = markType(CfWrapper, 'CfWrapper');
    return CfWrapper;
}(Base));
export { CfWrapper };
/**
 * @hidden
 */
var CfExWrapper = /** @class */ (function (_super) {
    tslib_1.__extends(CfExWrapper, _super);
    function CfExWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.f = 0;
        _this.e = false;
        _this.d = false;
        _this.c = null;
        _this.b = null;
        _this.a = null;
        return _this;
    }
    CfExWrapper.$t = markType(CfExWrapper, 'CfExWrapper');
    return CfExWrapper;
}(Base));
export { CfExWrapper };
/**
 * @hidden
 */
var CfExNonCf12Wrapper = /** @class */ (function (_super) {
    tslib_1.__extends(CfExNonCf12Wrapper, _super);
    function CfExNonCf12Wrapper() {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.c = null;
        _this.e = 0;
        _this.b = 0;
        _this.d = null;
        _this.a = new CfCommonProps();
        return _this;
    }
    CfExNonCf12Wrapper.$t = markType(CfExNonCf12Wrapper, 'CfExNonCf12Wrapper');
    return CfExNonCf12Wrapper;
}(Base));
export { CfExNonCf12Wrapper };
/**
 * @hidden
 */
var CfTemplateParams = /** @class */ (function (_super) {
    tslib_1.__extends(CfTemplateParams, _super);
    function CfTemplateParams() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.c = null;
        _this.d = null;
        _this.b = null;
        _this.a = null;
        return _this;
    }
    CfTemplateParams.$t = markType(CfTemplateParams, 'CfTemplateParams');
    return CfTemplateParams;
}(Base));
export { CfTemplateParams };
/**
 * @hidden
 */
var CfCommonProps = /** @class */ (function (_super) {
    tslib_1.__extends(CfCommonProps, _super);
    function CfCommonProps() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.a = false;
        _this.d = 0;
        _this.b = false;
        _this.c = Nullable$1.toNullable(CfTemplate_$type, null);
        return _this;
    }
    CfCommonProps.$t = markType(CfCommonProps, 'CfCommonProps');
    return CfCommonProps;
}(Base));
export { CfCommonProps };
/**
 * @hidden
 */
var CFExFilterParams = /** @class */ (function (_super) {
    tslib_1.__extends(CFExFilterParams, _super);
    function CFExFilterParams() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.b = false;
        _this.a = false;
        _this.c = 0;
        return _this;
    }
    CFExFilterParams.$t = markType(CFExFilterParams, 'CFExFilterParams');
    return CFExFilterParams;
}(Base));
export { CFExFilterParams };
/**
 * @hidden
 */
var CFExTextTemplateParams = /** @class */ (function (_super) {
    tslib_1.__extends(CFExTextTemplateParams, _super);
    function CFExTextTemplateParams() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.a = 0;
        return _this;
    }
    CFExTextTemplateParams.$t = markType(CFExTextTemplateParams, 'CFExTextTemplateParams');
    return CFExTextTemplateParams;
}(Base));
export { CFExTextTemplateParams };
/**
 * @hidden
 */
var CFExDateTemplateParams = /** @class */ (function (_super) {
    tslib_1.__extends(CFExDateTemplateParams, _super);
    function CFExDateTemplateParams() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.a = 0;
        return _this;
    }
    CFExDateTemplateParams.$t = markType(CFExDateTemplateParams, 'CFExDateTemplateParams');
    return CFExDateTemplateParams;
}(Base));
export { CFExDateTemplateParams };
/**
 * @hidden
 */
var CFExAveragesTemplateParams = /** @class */ (function (_super) {
    tslib_1.__extends(CFExAveragesTemplateParams, _super);
    function CFExAveragesTemplateParams() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.a = 0;
        return _this;
    }
    CFExAveragesTemplateParams.$t = markType(CFExAveragesTemplateParams, 'CFExAveragesTemplateParams');
    return CFExAveragesTemplateParams;
}(Base));
export { CFExAveragesTemplateParams };
/**
 * @hidden
 */
var CfVo = /** @class */ (function (_super) {
    tslib_1.__extends(CfVo, _super);
    function CfVo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.b = 0;
        _this.a = null;
        _this.c = 0;
        return _this;
    }
    CfVo.$t = markType(CfVo, 'CfVo');
    return CfVo;
}(Base));
export { CfVo };
/**
 * @hidden
 */
var CfColorScale = /** @class */ (function (_super) {
    tslib_1.__extends(CfColorScale, _super);
    function CfColorScale() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.b = null;
        _this.a = null;
        return _this;
    }
    CfColorScale.$t = markType(CfColorScale, 'CfColorScale');
    return CfColorScale;
}(Base));
export { CfColorScale };
/**
 * @hidden
 */
var CfDataBar = /** @class */ (function (_super) {
    tslib_1.__extends(CfDataBar, _super);
    function CfDataBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.d = false;
        _this.e = false;
        _this.g = 0;
        _this.f = 0;
        _this.c = null;
        _this.b = null;
        _this.a = null;
        return _this;
    }
    CfDataBar.$t = markType(CfDataBar, 'CfDataBar');
    return CfDataBar;
}(Base));
export { CfDataBar };
/**
 * @hidden
 */
var CfIconSet = /** @class */ (function (_super) {
    tslib_1.__extends(CfIconSet, _super);
    function CfIconSet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.e = 0;
        _this.b = 0;
        _this.d = false;
        _this.c = false;
        _this.a = null;
        return _this;
    }
    CfIconSet.$t = markType(CfIconSet, 'CfIconSet');
    return CfIconSet;
}(Base));
export { CfIconSet };
/**
 * @hidden
 */
var CfIconCriterion = /** @class */ (function (_super) {
    tslib_1.__extends(CfIconCriterion, _super);
    function CfIconCriterion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.a = null;
        _this.b = false;
        return _this;
    }
    CfIconCriterion.$t = markType(CfIconCriterion, 'CfIconCriterion');
    return CfIconCriterion;
}(Base));
export { CfIconCriterion };
/**
 * @hidden
 */
var ConditionFactory_BIFF8 = /** @class */ (function (_super) {
    tslib_1.__extends(ConditionFactory_BIFF8, _super);
    function ConditionFactory_BIFF8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConditionFactory_BIFF8.i = function (a, b) {
        var c = Nullable$1.toNullable(FormatConditionType_$type, null);
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
    };
    ConditionFactory_BIFF8.d = function (a, b, c, d) {
        var e = null;
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
    };
    ConditionFactory_BIFF8.a = function (a, b, c) {
        var d = new AverageConditionalFormat(1, a.c, 0);
        ConditionFactory_BIFF8.s(d, b);
        ConditionFactory_BIFF8.t(d, b);
        var e = b.l != null ? b.l.a : null;
        if (e != null) {
            var f = e.a > 0;
            var g = b.e.c.hasValue ? b.e.c.value : 25;
            d.aboveBelow = Extensions_BIFF8.a(g, f);
            d.numericStandardDeviation = e != null ? e.a : 0;
        }
        return d;
    };
    ConditionFactory_BIFF8.o = function (a, b, c) {
        var d = new RankConditionalFormat(1, a.c, 1, 10);
        ConditionFactory_BIFF8.s(d, b);
        ConditionFactory_BIFF8.t(d, b);
        var e = b.l != null ? b.l.c : b.g != null ? b.g : null;
        if (e == null) {
        }
        else {
            d.topBottom = e.b ? 1 : 0;
            d.isPercent = e.a;
            d.rank = e.c;
        }
        return d;
    };
    ConditionFactory_BIFF8.n = function (a, b, c) {
        var d = new OperatorConditionalFormat(1, a.c, 2);
        ConditionFactory_BIFF8.s(d, b);
        ConditionFactory_BIFF8.t(d, b);
        d.operator = Extensions_BIFF8.b(b.k);
        var e = null;
        var f = null;
        var g = ConditionFactory_BIFF8.r(b.b, e);
        e = g.p1;
        var h = ConditionFactory_BIFF8.r(b.c, f);
        f = h.p1;
        if (e != null) {
            d._cd = e;
        }
        if (f != null) {
            d._ce = f;
        }
        return d;
    };
    ConditionFactory_BIFF8.j = function (a, b, c) {
        var d = new FormulaConditionalFormat(1, a.c, null, Nullable$1.toNullable(CellReferenceMode_$type, null));
        ConditionFactory_BIFF8.s(d, b);
        ConditionFactory_BIFF8.t(d, b);
        var e = null;
        var f = ConditionFactory_BIFF8.r(b.b, e);
        e = f.p1;
        if (e != null) {
            d._b5 = e;
        }
        return d;
    };
    ConditionFactory_BIFF8.p = function (a, b, c) {
        var d = new TextOperatorConditionalFormat(1, a.c, null, 2);
        ConditionFactory_BIFF8.s(d, b);
        ConditionFactory_BIFF8.t(d, b);
        var e = b.l != null ? b.l.d : null;
        d.textOperator = Extensions_BIFF8.c(e.a);
        var f = null;
        var g = typeCast(NamedReferenceFormula.$, b.b);
        if (g != null) {
            var j = g._e;
            for (var i = 0; i < j.length; i++) {
                var h = j[i];
                var k = typeCast(StrToken.$, h);
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
    };
    ConditionFactory_BIFF8.f = function (a, b, c) {
        var d = new DateTimeConditionalFormat(1, a.c, 0);
        ConditionFactory_BIFF8.s(d, b);
        ConditionFactory_BIFF8.t(d, b);
        d.dateOperator = Extensions_BIFF8.d(b);
        return d;
    };
    ConditionFactory_BIFF8.e = function (a, b, c) {
        var d = new DataBarConditionalFormat(1, a.c);
        ConditionFactory_BIFF8.s(d, b);
        d.barFillType = 1;
        d.direction = -5003;
        Extensions_BIFF8.v(d, b);
        var e = b.f;
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
    };
    ConditionFactory_BIFF8.c = function (a, b, c) {
        var d = b.d;
        var e = d != null && d.a != null ? d.a.length : 2;
        var f = e == 3 ? 1 : 0;
        var g = new ColorScaleConditionalFormat(1, a.c, f);
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
    };
    ConditionFactory_BIFF8.k = function (a, b, c) {
        var d = new IconSetConditionalFormat(1, a.c, 4);
        ConditionFactory_BIFF8.s(d, b);
        Extensions_BIFF8.w(d, b);
        var e = b.j;
        if (e != null) {
            d.iconSet = Extensions_BIFF8.g(e);
            Extensions_BIFF8.t(d._iconCriteria$i, e.a);
            d.isReverseOrder = e.c;
            d.showValue = (e.d == false);
        }
        return d;
    };
    ConditionFactory_BIFF8.b = function (a, b, c) {
        var d = new BlanksConditionalFormat(1, a.c);
        ConditionFactory_BIFF8.s(d, b);
        ConditionFactory_BIFF8.t(d, b);
        return d;
    };
    ConditionFactory_BIFF8.l = function (a, b, c) {
        var d = new NoBlanksConditionalFormat(1, a.c);
        ConditionFactory_BIFF8.s(d, b);
        ConditionFactory_BIFF8.t(d, b);
        return d;
    };
    ConditionFactory_BIFF8.h = function (a, b, c) {
        var d = new ErrorsConditionalFormat(1, a.c);
        ConditionFactory_BIFF8.s(d, b);
        ConditionFactory_BIFF8.t(d, b);
        return d;
    };
    ConditionFactory_BIFF8.m = function (a, b, c) {
        var d = new NoErrorsConditionalFormat(1, a.c);
        ConditionFactory_BIFF8.s(d, b);
        ConditionFactory_BIFF8.t(d, b);
        return d;
    };
    ConditionFactory_BIFF8.q = function (a, b, c) {
        var d = new UniqueConditionalFormat(1, a.c);
        ConditionFactory_BIFF8.s(d, b);
        ConditionFactory_BIFF8.t(d, b);
        return d;
    };
    ConditionFactory_BIFF8.g = function (a, b, c) {
        var d = new DuplicateConditionalFormat(1, a.c);
        ConditionFactory_BIFF8.s(d, b);
        ConditionFactory_BIFF8.t(d, b);
        return d;
    };
    ConditionFactory_BIFF8.s = function (a, b) {
        a.priority = b.e.d;
        a.stopIfTrue = b.e.b;
    };
    ConditionFactory_BIFF8.t = function (a, b) {
        a._bw = b.h != null && b.h.d != null ? b.h.d : b.n != null ? b.n : null;
    };
    ConditionFactory_BIFF8.r = function (a, b, c) {
        if (c === void 0) { c = true; }
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
    };
    ConditionFactory_BIFF8.$t = markType(ConditionFactory_BIFF8, 'ConditionFactory_BIFF8');
    return ConditionFactory_BIFF8;
}(Base));
export { ConditionFactory_BIFF8 };
/**
 * @hidden
 */
var CFSerializer = /** @class */ (function (_super) {
    tslib_1.__extends(CFSerializer, _super);
    function CFSerializer(a) {
        var _this = _super.call(this) || this;
        _this.d = null;
        _this.b = null;
        _this.b = a;
        return _this;
    }
    CFSerializer.a = function (a) {
        if (a == null || a._conditionalFormats$i.count == 0) {
            return null;
        }
        var b = new CFSerializer(a);
        b.e(a._conditionalFormats$i);
        return b;
    };
    CFSerializer.prototype.e = function (a) {
        var e_49, _0, e_50, _1;
        var b = new Dictionary$2(String_$type, CONDFMTSerializer.$, 0);
        var _loop_6 = function (c) {
            var d = c._a0(1);
            var e = null;
            if (((function () { var f = b.tryGetValue(d, e); e = f.p1; return f.ret; })()) == false) {
                e = new CONDFMTSerializer();
                e.d = b.count + 1;
                e.c = c.regions;
                e.a = e.g();
                b.addItem(d, e);
            }
            e.h.add(c);
            e.e = e.h.count;
        };
        try {
            for (var _2 = tslib_1.__values(fromEnum(a)), _3 = _2.next(); !_3.done; _3 = _2.next()) {
                var c = _3.value;
                _loop_6(c);
            }
        }
        catch (e_49_1) { e_49 = { error: e_49_1 }; }
        finally {
            try {
                if (_3 && !_3.done && (_0 = _2.return)) _0.call(_2);
            }
            finally { if (e_49) throw e_49.error; }
        }
        this.d = new List$1(CONDFMTSerializer.$, 2, b.count);
        try {
            for (var _4 = tslib_1.__values(fromEnum(b.values)), _5 = _4.next(); !_5.done; _5 = _4.next()) {
                var f = _5.value;
                this.d.add(f);
            }
        }
        catch (e_50_1) { e_50 = { error: e_50_1 }; }
        finally {
            try {
                if (_5 && !_5.done && (_1 = _4.return)) _1.call(_4);
            }
            finally { if (e_50) throw e_50.error; }
        }
    };
    Object.defineProperty(CFSerializer.prototype, "c", {
        get: function () {
            return this.d;
        },
        enumerable: true,
        configurable: true
    });
    CFSerializer.$t = markType(CFSerializer, 'CFSerializer');
    return CFSerializer;
}(Base));
export { CFSerializer };
/**
 * @hidden
 */
var Extensions_BIFF8 = /** @class */ (function (_super) {
    tslib_1.__extends(Extensions_BIFF8, _super);
    function Extensions_BIFF8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Extensions_BIFF8.e = function (a) {
        var b = 0;
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
    };
    Extensions_BIFF8.a = function (a, b) {
        var c = 0;
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
    };
    Extensions_BIFF8.b = function (a) {
        var b = 2;
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
    };
    Extensions_BIFF8.i = function (a) {
        var b = 3;
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
    };
    Extensions_BIFF8.c = function (a) {
        var b = 2;
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
    };
    Extensions_BIFF8.d = function (a) {
        var b = Nullable$1.toNullable(FormatConditionTimePeriod_$type, null);
        var c = a.l != null ? a.l.b : null;
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
    };
    Extensions_BIFF8.f = function (a) {
        var b = 0;
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
    };
    Extensions_BIFF8.g = function (a) {
        var b = a.b;
        b += 1;
        return b;
    };
    Extensions_BIFF8.r = function (a, b) {
        var c = Extensions_BIFF8.f(b.b);
        if (c == 3) {
            var d = null;
            var e = ConditionFactory_BIFF8.r(b.a, d);
            d = e.p1;
            a._ai(d);
        }
        else if (c != 4 && c != 5) {
            a._setValue1(b.c, c);
        }
        else {
            a._setValue(c);
        }
    };
    Extensions_BIFF8.n = function (a) {
        var b = new CfVo();
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
    };
    Extensions_BIFF8.q = function (a, b, c) {
        Extensions_BIFF8.r(a._b, b);
        a.formatColor = c;
    };
    Extensions_BIFF8.u = function (a, b) {
        Extensions_BIFF8.x(a, b);
    };
    Extensions_BIFF8.v = function (a, b) {
        Extensions_BIFF8.x(a, b);
    };
    Extensions_BIFF8.w = function (a, b) {
        Extensions_BIFF8.x(a, b);
    };
    Extensions_BIFF8.x = function (a, b) {
        if (b.a == null) {
            return;
        }
        var c = null;
        var d = ConditionFactory_BIFF8.r(b.a, c);
        c = d.p1;
        if (c != null) {
            a._b6(c);
        }
    };
    Extensions_BIFF8.t = function (a, b) {
        var c = new Array(b.length);
        var d = a._d;
        var e = IconSetConditionalFormat._b9(d.iconSet);
        for (var f = 0; f < b.length; f++) {
            c[f] = new IconCriterion(1, a, f, d.iconSet, e[f]);
            Extensions_BIFF8.s(c[f], b[f]);
        }
        a._q(c);
    };
    Extensions_BIFF8.s = function (a, b) {
        a.comparison = b.b ? 0 : 1;
        Extensions_BIFF8.r(a._b, b.a);
    };
    Extensions_BIFF8.l = function (a) {
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
    };
    Extensions_BIFF8.j = function (a) {
        var b = 0;
        switch (a.conditionType) {
            case 11:
                var c = typeCast(AverageConditionalFormat.$, a);
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
                var d = typeCast(DateTimeConditionalFormat.$, a);
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
    };
    Extensions_BIFF8.m = function (a) {
        var b = 1;
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
    };
    Extensions_BIFF8.p = function (a) {
        var b = false;
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
    };
    Extensions_BIFF8.k = function (a) {
        var b = 0;
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
    };
    Extensions_BIFF8.h = function (a) {
        var b = 0;
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
    };
    Extensions_BIFF8.o = function (a) {
        var b = (a - 1);
        if (EnumUtil.isDefined(IconSet_$type, enumGetBox(IconSet_$type, b)) == false) {
            b = 3;
        }
        return b;
    };
    Extensions_BIFF8.$t = markType(Extensions_BIFF8, 'Extensions_BIFF8');
    return Extensions_BIFF8;
}(Base));
export { Extensions_BIFF8 };
/**
 * @hidden
 */
var ConditionPriority = /** @class */ (function (_super) {
    tslib_1.__extends(ConditionPriority, _super);
    function ConditionPriority() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.a = null;
        _this.b = 0;
        return _this;
    }
    ConditionPriority.$t = markType(ConditionPriority, 'ConditionPriority');
    return ConditionPriority;
}(Base));
export { ConditionPriority };
/**
 * @hidden
 */
var ConditionPrioritySortComparer = /** @class */ (function (_super) {
    tslib_1.__extends(ConditionPrioritySortComparer, _super);
    function ConditionPrioritySortComparer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConditionPrioritySortComparer.prototype.compare = function (a, b) {
        if (a == null || b == null) {
            return 0;
        }
        return Base.compareSimple(a.b, b.b);
    };
    ConditionPrioritySortComparer.$t = markType(ConditionPrioritySortComparer, 'ConditionPrioritySortComparer', Base.$, [IComparer$1_$type.specialize(ConditionPriority.$)]);
    return ConditionPrioritySortComparer;
}(Base));
export { ConditionPrioritySortComparer };
/**
 * @hidden
 */
var CFUtils = /** @class */ (function (_super) {
    tslib_1.__extends(CFUtils, _super);
    function CFUtils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CFUtils.a = function (a, b) {
        if (b === void 0) { b = true; }
        var c = a._ai.a(Worksheet.$);
        if (c == null) {
            if (b) {
            }
            return null;
        }
        return c;
    };
    CFUtils.$t = markType(CFUtils, 'CFUtils');
    return CFUtils;
}(Base));
export { CFUtils };
/**
 * @hidden
 */
var TableColumnFilterData = /** @class */ (function (_super) {
    tslib_1.__extends(TableColumnFilterData, _super);
    function TableColumnFilterData(a) {
        var _rest = [];
        for (var _0 = 1; _0 < arguments.length; _0++) {
            _rest[_0 - 1] = arguments[_0];
        }
        var _this = _super.call(this) || this;
        _this.f = null;
        _this.b = null;
        _this.a = null;
        _this.c = null;
        _this.d = false;
        _this.e = false;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = [c, d.filter];
                    {
                        var g = e[0];
                        var h = e[1];
                        _this.b = new RelativeIndex(g);
                        _this.a = h;
                        if (_this.a == null) {
                            _this.e = false;
                            return _this;
                        }
                        var i_1;
                        var j_1;
                        _this.e = ((function () { var k = _this.a._g(i_1, j_1); i_1 = k.p0; j_1 = k.p1; return k.ret; })());
                        _this.d = i_1;
                        _this.f = j_1;
                    }
                    _this.c = d;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this.b = new RelativeIndex(c);
                    _this.a = d;
                    if (_this.a == null) {
                        _this.e = false;
                        return _this;
                    }
                    var e_51;
                    var f_1;
                    _this.e = ((function () { var g = _this.a._g(e_51, f_1); e_51 = g.p0; f_1 = g.p1; return g.ret; })());
                    _this.d = e_51;
                    _this.f = f_1;
                }
                break;
        }
        return _this;
    }
    TableColumnFilterData.$t = markType(TableColumnFilterData, 'TableColumnFilterData');
    return TableColumnFilterData;
}(Base));
export { TableColumnFilterData };
/**
 * @hidden
 */
var Biff8RecordStream = /** @class */ (function (_super) {
    tslib_1.__extends(Biff8RecordStream, _super);
    function Biff8RecordStream(a) {
        var _rest = [];
        for (var _0 = 1; _0 < arguments.length; _0++) {
            _rest[_0 - 1] = arguments[_0];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    _this = _super.call(this, 0, c) || this;
                    _this._et = true;
                    _this._ew = false;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = [c, c._ca, c._b9];
                    {
                        var f = d[0];
                        var g = d[1];
                        var h = d[2];
                        _this = _super.call(this, 1, f, g, h, f._aj) || this;
                        _this._et = true;
                        _this._ew = false;
                        f._cl(_this);
                    }
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this = _super.call(this, 1, c, d, e, c._aj) || this;
                    _this._et = true;
                    _this._ew = false;
                    c._cl(_this);
                }
                break;
            case 3:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this = _super.call(this, 2, c, c._c4, d, c._b8) || this;
                    _this._et = true;
                    _this._ew = false;
                    c._c9(_this);
                }
                break;
            case 4:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this = _super.call(this, 1, null, d, e, c._b8) || this;
                    _this._et = true;
                    _this._ew = false;
                    _this.saveManager = c;
                }
                break;
        }
        return _this;
    }
    Biff8RecordStream.prototype._ax = function () {
        return 2;
    };
    Biff8RecordStream.prototype._bj = function () {
        return 2;
    };
    Biff8RecordStream.prototype._x = function (a, b) {
        var c = new Biff8RecordStream(0, this._transform);
        this._b3(c, a, b);
        return c;
    };
    Biff8RecordStream.prototype._a1 = function () {
        return 0;
    };
    Biff8RecordStream.prototype.disposeCore = function (a) {
        _super.prototype.disposeCore.call(this, a);
        if (a) {
            var b = this._loadManagerBiff8;
            if (b != null) {
                b._ck(this);
            }
            var c = this._saveManagerBiff8;
            if (c != null) {
                c._c8(this);
            }
        }
    };
    Biff8RecordStream.prototype._a2 = function () {
        return 8224;
    };
    Biff8RecordStream.prototype._a0 = function () {
        return Biff8RecordBase.j(this._recordType);
    };
    Biff8RecordStream.prototype._z = function (a) {
        if (this._ew && this.length == this.position) {
            this._af(60);
        }
        return _super.prototype._z.call(this, a);
    };
    Biff8RecordStream.prototype._ba = function (a) {
        return a.readUInt16();
    };
    Biff8RecordStream.prototype._bb = function (a) {
        return a.readUInt16();
    };
    Biff8RecordStream.prototype._ak = function (a, b) {
        if (this._recordType == 438) {
            if (this._ev()) {
                return false;
            }
        }
        if (_super.prototype._ak.call(this, a, b)) {
            return true;
        }
        var c = b;
        if (c == Biff8RecordBase.j(a)) {
            return true;
        }
        if (this._recordType == 235 && c == 235) {
            return true;
        }
        return false;
    };
    Biff8RecordStream.prototype._cu = function (a, b, c) {
        if (c) {
            a.seek(-2, 1);
        }
        a.write(BitConverter.h(b), 0, 2);
    };
    Biff8RecordStream.prototype._cv = function (a, b) {
        a.write(BitConverter.h(b), 0, 2);
    };
    Biff8RecordStream.prototype._bh = function (a, b, c) {
        if (this._et == false) {
            return c;
        }
        return _super.prototype._bh.call(this, a, b, c);
    };
    Biff8RecordStream.prototype._debugLogRecord = function () {
        if (false) {
            var a = this.position;
            this.position = 0;
            var b = this._readBytes(this.length);
            if (EnumUtil.isDefined(BIFF8RecordType_$type, enumGetBox(BIFF8RecordType_$type, this._recordType))) {
            }
            else {
            }
            this.position = a;
        }
        else {
        }
    };
    Biff8RecordStream._eu = function (a, b) {
        if (a != null) {
            if (a.comparisonOperator != 0 || a._f) {
                return false;
            }
            var c = typeCast(String_$type, a.value);
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
    };
    Biff8RecordStream.prototype._fm = function (a, b, c, d, e) {
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
                var f = a._color$i.value;
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
    };
    Biff8RecordStream._c4 = function (a) {
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
    };
    Biff8RecordStream.prototype._ev = function () {
        var _this = this;
        var a = this._bn.position;
        var b = this.position;
        try {
            this.position = 10;
            var c_1 = this._readUInt16();
            if (c_1 == 0) {
                return true;
            }
            if (this._an.count < 3) {
                return false;
            }
            var d = this._readUInt16();
            this.position = 18;
            var e_52;
            if (((function () { var f = _this._tryReadFormattedString(c_1, e_52); e_52 = f.p1; return f.ret; })()) == false) {
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
    };
    Biff8RecordStream.prototype._readAF12CellIcon = function (a, b) {
        var c = this._readUInt32();
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
    };
    Biff8RecordStream.prototype._writeAF12CellIcon = function (a, b) {
        this._write18(a);
        this._write18(b);
    };
    Biff8RecordStream.prototype._readAF12Criteria = function (a) {
        this._readFrtRefHeader1(a, 2175);
        var b = this._dd(true);
        if (b.c == 6) {
            b.m = this._readXLUnicodeStringNoCch(typeGetValue(b.l));
        }
        return b;
    };
    Biff8RecordStream.prototype._writeAF12Criteria = function (a, b) {
        this._writeFrtRefHeader1(a, 2175);
        this._gc(b, true);
        if (b.m != null) {
            this._writeXLUnicodeStringNoCch(b.m);
        }
    };
    Biff8RecordStream.prototype._readAF12DateInfo = function (a) {
        this._readFrtRefHeader1(a, 2175);
        var b = this._readUInt16();
        var c = this._readUInt16();
        var d = this._readUInt32();
        var e = this._readUInt16();
        var f = this._readUInt16();
        var g = this._readUInt16();
        var h = this._readUInt16();
        var i = this._readUInt32();
        var j = this._readUInt32();
        return FixedDateGroup._b(j, b, Nullable$1.toNullable(Number_$type, c), Nullable$1.toNullable(Number_$type, d), Nullable$1.toNullable(Number_$type, e), Nullable$1.toNullable(Number_$type, f), Nullable$1.toNullable(Number_$type, g));
    };
    Biff8RecordStream.prototype._writeAF12DateInfo = function (a, b) {
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
    };
    Biff8RecordStream.prototype._dd = function (a) {
        var b = new Biff8RecordStream_AFDOper(0);
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
    };
    Biff8RecordStream.prototype._gc = function (a, b) {
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
    };
    Biff8RecordStream.prototype._readAFDOperBoolErr = function () {
        var a = this._readBes();
        var b = this._readUInt16();
        var c = this._readUInt32();
        return a;
    };
    Biff8RecordStream.prototype._writeAFDOperBoolErr = function (a) {
        this._writeBes(a);
        this._write17(0);
        this._write18(intSToU(0));
    };
    Biff8RecordStream.prototype._readAFDOperRk = function () {
        var a = this._readUInt32();
        var b = this._readUInt32();
        return ExcelUtils.ci(a);
    };
    Biff8RecordStream.prototype._fa = function (a) {
        if (a == false) {
            var b = this._readUInt32();
        }
        var c = this.readByte();
        var d = this.readByte();
        var e = this.readByte();
        var f = this.readByte();
        if (a) {
            var g = this._readUInt32();
        }
        return c;
    };
    Biff8RecordStream.prototype._ge = function (a, b, c) {
        var d = (b ? 0 : 1);
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
    };
    Biff8RecordStream.prototype._readAutoFilter = function (a, b) {
        var c = this._readUInt16();
        var d = typeCast(WorksheetColumnFilter.$, b);
        if (d != null) {
            d._h(c);
        }
        var e = this._readUInt16();
        var f = ExcelUtils.c6(e, 0, 1);
        var g = ExcelUtils.bt(e, 2);
        var h = ExcelUtils.bt(e, 3);
        var i = ExcelUtils.bt(e, 4);
        var j = ExcelUtils.bt(e, 5);
        var k = ExcelUtils.bt(e, 6);
        var l = ExcelUtils.c6(e, 7, 15);
        var m = this._dd(false);
        var n = this._dd(false);
        if (i) {
            var o = TopOrBottomFilter._t(k, j);
            var p = NaN;
            if (typeof m.k === 'number') {
                p = m.k;
            }
            var q = new TopOrBottomFilter(2, b, o, l, p);
            return q;
        }
        if (m.c == 6) {
            m.m = this._readXLUnicodeStringNoCch(typeGetValue(m.l));
        }
        if (n.c == 6) {
            n.m = this._readXLUnicodeStringNoCch(typeGetValue(n.l));
        }
        var r = Biff8RecordStream._c4(m);
        var s = Biff8RecordStream._c4(n);
        if (r != null || s != null) {
            var t = new FixedValuesFilter(b);
            if (Biff8RecordStream._eu(r, t) && Biff8RecordStream._eu(s, t)) {
                var u = t._aa();
                if (u == 0) {
                    return null;
                }
                if (u == 1 || f == 1) {
                    var v = void 0;
                    var w = void 0;
                    var x = b.getDataAreaRowIndexes(v, w);
                    v = x.p0;
                    w = x.p1;
                    var y = false;
                    if (v >= 0) {
                        for (var z = v; z <= w; z++) {
                            var aa = a._rows$i._aj(z);
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
    };
    Biff8RecordStream.prototype._writeAutoFilter = function (a) {
        var b = a.a;
        var c = 0;
        var d = null;
        var e = null;
        var f = typeCast(CustomFilter.$, b);
        if (f != null) {
            c = f.conditionalOperator;
            d = new Biff8RecordStream_AFDOper(3, this.saveManager, f.condition1);
            e = new Biff8RecordStream_AFDOper(3, this.saveManager, f.condition2);
        }
        var g = typeCast(FixedValuesFilter.$, b);
        if (g != null && a.e && a.d == false) {
            if (g.includeBlanks) {
                var h = new Biff8RecordStream_AFDOper(0);
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
        var i = false;
        var j = false;
        var k = false;
        var l = 0;
        var m = typeCast(TopOrBottomFilter.$, b);
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
        var n = 0;
        var o = ExcelUtils.e1(n, c, 0, 1);
        n = o.p0;
        var p = ExcelUtils.f7(n, i, 4);
        n = p.p0;
        var q = ExcelUtils.f7(n, j, 5);
        n = q.p0;
        var r = ExcelUtils.f7(n, k, 6);
        n = r.p0;
        var s = ExcelUtils.e1(n, l, 7, 15);
        n = s.p0;
        this._write17(n);
        this._gc(d, false);
        this._gc(e, false);
        var t = typeCast(String_$type, d.k);
        if (t != null) {
            this._writeXLUnicodeStringNoCch(t);
        }
        var u = typeCast(String_$type, e.k);
        if (u != null) {
            this._writeXLUnicodeStringNoCch(u);
        }
    };
    Biff8RecordStream.prototype._readBes = function () {
        var a = this.readByte();
        var b = this.readByte();
        if (b == 0) {
            return a != 0;
        }
        return ErrorValue._j(a);
    };
    Biff8RecordStream.prototype._writeBes = function (a) {
        var b;
        var c;
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
    };
    Biff8RecordStream.prototype._fo = function (a, b) {
        var c = this._readUInt32();
        var d = null;
        if (c != 0) {
            d = this._readDXFN12List(c);
        }
        var e = null;
        if (b) {
            var f = this._readXLUnicodeString();
            e = this._loadManager._b._styles$i._item1(f);
        }
        if (d != null || e != null) {
            this._loadManager._ac(WorksheetTableColumnArea_$type, a._areaFormats$i, 1, WorksheetTableColumn._ap, e, d);
        }
    };
    Biff8RecordStream.prototype._gh = function (a, b, c) {
        var d = this.position;
        this._write18(intSToU(0));
        this._g2(d, c);
        if (b != null) {
            this._writeXLUnicodeString(b.name);
        }
    };
    Biff8RecordStream.prototype._readCFColor = function () {
        var a = this._readUInt32();
        var b = this._readUInt32();
        var c = this._readDouble();
        var d = Nullable$1.toNullable(Number_$type, null);
        if (c != 0) {
            d = Nullable$1.toNullable(Number_$type, c);
        }
        return ExcelUtils.ac(this._loadManager._b, a, b, d);
    };
    Biff8RecordStream.prototype._writeCFColor = function (a, b) {
        var c;
        var d;
        var e;
        var f = this._fm(a, b, c, d, e);
        c = f.p2;
        d = f.p3;
        e = f.p4;
        this._write18(c);
        this._write18(e);
        this._write10(d);
    };
    Biff8RecordStream.prototype._readCFFlag = function (a, b) {
        var c = this._readUInt32();
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
    };
    Biff8RecordStream.prototype._writeCFFlag = function (a, b) {
        this._write18(a);
        this._write18(b);
    };
    Biff8RecordStream.prototype._readCondDataValue = function (a, b) {
        var c = this._readUInt32();
        var d;
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
        var e = this._readUInt32();
        return d;
    };
    Biff8RecordStream.prototype._writeCondDataValue$1 = function ($t, a, b, c, d) {
        if (typeCast(WorksheetTableColumn.$, a) !== null) {
            this._write18(this.saveManager._a2(typeCast(WorksheetTableColumn.$, a)).getValueOrDefault());
        }
        else if (typeCast(RelativeIndex.$, a) !== null) {
            var e = a.index;
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
    };
    Biff8RecordStream.prototype._readCondFmt = function (a, b) {
        if (b === void 0) { b = false; }
        var c = this._readUInt16();
        var d = this._readUInt16();
        var e = ExcelUtils.bt(d, 0);
        var f = ExcelUtils.c6(d, 1, 15);
        var g = this._readRef8U(a);
        var h = this._ex(a);
        return ((function () {
            var $ret = new CondFmtWrapper();
            $ret.e = c;
            $ret.b = e;
            $ret.d = f;
            $ret.a = g;
            $ret.c = h;
            $ret.h = b;
            return $ret;
        })());
    };
    Biff8RecordStream.prototype._readCondFmt12 = function (a) {
        var b;
        var c;
        var d;
        var e;
        var f = this._f2(a, b, c, d, e);
        b = f.p1;
        c = f.p2;
        d = f.p3;
        e = f.p4;
        return this._readCondFmt(a, true);
    };
    Biff8RecordStream.prototype._writeCondFmt12 = function (a, b) {
        this._hl(2169, a.a);
        var c = a.h.count;
        this._write17(c);
        var d = 0;
        var e = ExcelUtils.f7(d, true, 0);
        d = e.p0;
        var f = ExcelUtils.e1(d, a.d, 1, 15);
        d = f.p0;
        this._write17(d);
        this._writeRef8U(a.a);
        this._h1(a.c);
    };
    Biff8RecordStream.prototype._readCf = function (a, b) {
        return this._dx(a, b, false);
    };
    Biff8RecordStream.prototype._readCf12 = function (a, b) {
        return this._dx(a, b, true);
    };
    Biff8RecordStream.prototype._writeCf12 = function (a, b, c, d) {
        var e = b.conditionType;
        var f = e == 0 ? typeCast(OperatorConditionalFormat.$, b) : null;
        var g = e == 8 ? typeCast(TextOperatorConditionalFormat.$, b) : null;
        var h = e == 10 ? typeCast(DateTimeConditionalFormat.$, b) : null;
        var i = null;
        var j = e == 2 || e == 3 || e == 5 ? typeCast(ThresholdConditionBase.$, b) : null;
        this._writeFrtRefHeader1(null, 2170);
        var k = Extensions_BIFF8.l(b);
        this._write9(k);
        var l = 0;
        if (e == 0) {
            l = Extensions_BIFF8.i(f.operator);
        }
        this._write9(l);
        var m = null;
        var n = null;
        var o = null;
        var p = null;
        switch (e) {
            case 0:
                n = f.operand1;
                o = f.operand2;
                break;
            case 1:
                var q = typeCast(FormulaConditionalFormat.$, b);
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
        var r = n != null ? ((function () {
            var $ret = new Rgce();
            $ret.a = n;
            return $ret;
        })()) : null;
        var s = o != null ? ((function () {
            var $ret = new Rgce();
            $ret.a = o;
            return $ret;
        })()) : null;
        var t = m != null ? ((function () {
            var $ret = new Rgce();
            $ret.a = m;
            return $ret;
        })()) : null;
        var u = 0;
        var v = 0;
        var w = this.position;
        this._write17(u);
        var x = this.position;
        this._write17(v);
        i = typeCast(ConditionalFormatBase.$, b);
        var y = i != null ? i._bw : null;
        this._g0(y);
        this._hx(r, w, d);
        this._hx(s, x, d);
        var z = this.position;
        this._write17(0);
        this._hx(t, z, d);
        var aa = j == null && b.stopIfTrue;
        var ab = 0;
        var ac = ExcelUtils.f5(ab, aa, 1);
        ab = ac.p0;
        this._write9(ab);
        var ad = b.priority;
        this._write17(ad);
        var ae = Extensions_BIFF8.j(b);
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
                var af = typeCast(ColorScaleConditionalFormat.$, b);
                this._gr(af, d);
                break;
            case 3:
                var ag = typeCast(DataBarConditionalFormat.$, b);
                this._gk(ag, d);
                break;
            case 5:
                this._gs(typeCast(IconSetConditionalFormat.$, b), d);
                break;
            case 4:
                var ah = typeCast(RankConditionalFormat.$, b);
                this._gp(ah);
                break;
            default: break;
        }
    };
    Biff8RecordStream.prototype._hx = function (a, b, c) {
        if (a == null) {
            return;
        }
        var d = this.position;
        ObjExtensionMethods.at(a, c);
        var e = this.position;
        var f = (e - d);
        this.position = b;
        this._write17(f);
        this.position = e;
    };
    Biff8RecordStream.prototype._dx = function (a, b, c) {
        var d = null;
        if (c) {
            d = this._readFrtRefHeader1(b, 2170);
        }
        var e = new CfWrapper();
        var f;
        f = this.readByte();
        e.m = f;
        f = this.readByte();
        e.k = f;
        var g = this._readUInt16();
        var h = this._readUInt16();
        e.n = c ? this._readDXFN12() : this._readDXFN();
        var i = null;
        if (g > 0) {
            i = ObjExtensionMethods.v(a, g);
            e.b = i != null ? i.b : null;
        }
        if (h > 0) {
            i = ObjExtensionMethods.v(a, h);
            e.c = i != null ? i.b : null;
        }
        if (c) {
            var j = this._readUInt16();
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
                    var k = this._dn();
                    var l = e.l != null ? e.l.c : null;
                    if (l != null) {
                        var m = l.b != k.b || l.a != k.a || l.c != k.c;
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
    };
    Biff8RecordStream.prototype._readCfEx = function (a, b) {
        var c;
        var d;
        var e;
        var f;
        var g = this._f2(b, c, d, e, f);
        c = g.p1;
        d = g.p2;
        e = g.p3;
        f = g.p4;
        var h = this._readUInt32();
        var i = this._readUInt16();
        var j = null;
        if (h == 0) {
            j = this._readCfExNonCf12(a, b);
        }
        var k = a._ax(b);
        var l = k.c(i);
        var m = ((function () {
            var $ret = new CfExWrapper();
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
            var n = m.a.e;
            if (n >= l.i.count) {
            }
            else {
                var o = l.i.item(n);
                o.h = m.a;
            }
        }
        return m;
    };
    Biff8RecordStream.prototype._readCfExNonCf12 = function (a, b) {
        var c = this._readUInt16();
        var d = this.readByte();
        var e = this.readByte();
        var f = this._readUInt16();
        var g = null;
        var h = this.readByte();
        var i = ExcelUtils.bt(h, 0);
        var j = ExcelUtils.bt(h, 1);
        h = this.readByte();
        var k = (h == 1);
        if (k) {
            g = this._readDXFN12();
        }
        this.readByte();
        var l = ((function () {
            var $ret = new CfExNonCf12Wrapper();
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
    };
    Biff8RecordStream.prototype._dt = function (a) {
        var b = null;
        var c = 0;
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
    };
    Biff8RecordStream.prototype._dm = function (a) {
        if (a != 5) {
            return null;
        }
        var b = this.readByte();
        var c = ExcelUtils.bt(b, 0);
        var d = ExcelUtils.bt(b, 1);
        var e = this._readUInt16();
        this._readBytes(13);
        return ((function () {
            var $ret = new CFExFilterParams();
            $ret.a = d;
            $ret.c = e;
            $ret.b = c;
            return $ret;
        })());
    };
    Biff8RecordStream.prototype._gn = function (a) {
        var b = 0;
        var c = a.topBottom == 1;
        var d = a.isPercent;
        var e = ExcelUtils.f5(b, c, 0);
        b = e.p0;
        var f = ExcelUtils.f5(b, d, 1);
        b = f.p0;
        this._write9(b);
        var g = a.rank;
        this._write17(g);
        this._write2(new Array(13));
    };
    Biff8RecordStream.prototype._dq = function (a) {
        if (a != 8) {
            return null;
        }
        var b = this._readUInt16();
        this._readBytes(14);
        return ((function () {
            var $ret = new CFExTextTemplateParams();
            $ret.a = b;
            return $ret;
        })());
    };
    Biff8RecordStream.prototype._go = function (a) {
        var b = Extensions_BIFF8.k(a.textOperator);
        this._write17(b);
        this._write2(new Array(14));
    };
    Biff8RecordStream.prototype._dl = function (a) {
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
        var b = this._readUInt16();
        this._readBytes(14);
        return ((function () {
            var $ret = new CFExDateTemplateParams();
            $ret.a = b;
            return $ret;
        })());
    };
    Biff8RecordStream.prototype._gm = function (a) {
        var b = Extensions_BIFF8.h(a.dateOperator);
        this._write17(b);
        this._write2(new Array(14));
    };
    Biff8RecordStream.prototype._dk = function (a) {
        switch (a) {
            case 25:
            case 29:
            case 26:
            case 30: break;
            default: return null;
        }
        var b = this._readUInt16();
        this._readBytes(14);
        return ((function () {
            var $ret = new CFExAveragesTemplateParams();
            $ret.a = b;
            return $ret;
        })());
    };
    Biff8RecordStream.prototype._gl = function (a) {
        var b = 0;
        switch (a.aboveBelow) {
            case 4:
            case 5:
                b = a.numericStandardDeviation;
                break;
        }
        this._write17(b);
        this._write2(new Array(14));
    };
    Biff8RecordStream.prototype._dn = function () {
        var a;
        var b;
        var c;
        var d = this._fp(a, b, c);
        a = d.p0;
        b = d.p1;
        c = d.p2;
        return ((function () {
            var $ret = new CFExFilterParams();
            $ret.b = a;
            $ret.a = b;
            $ret.c = c;
            return $ret;
        })());
    };
    Biff8RecordStream.prototype._fp = function (a, b, c) {
        a = false;
        b = false;
        c = 0;
        var d = this._readUInt16();
        var e = this.readByte();
        var f = this.readByte();
        a = ExcelUtils.bt(f, 0);
        b = ExcelUtils.bt(f, 1);
        c = this._readUInt16();
        return {
            p0: a,
            p1: b,
            p2: c
        };
    };
    Biff8RecordStream.prototype._gp = function (a) {
        this._write17(4);
        var b = 0;
        this._write9(b);
        b = 0;
        var c = a.topBottom == 1;
        var d = a.isPercent;
        var e = ExcelUtils.f5(b, c, 0);
        b = e.p0;
        var f = ExcelUtils.f5(b, d, 1);
        b = f.p0;
        this._write9(b);
        this._write17(a.rank);
    };
    Biff8RecordStream.prototype._di = function (a) {
        var b = null;
        var c = null;
        var d = this._fr(a, b, c);
        b = d.p1;
        c = d.p2;
        return ((function () {
            var $ret = new CfColorScale();
            $ret.b = b;
            $ret.a = c;
            return $ret;
        })());
    };
    Biff8RecordStream.prototype._fr = function (a, b, c) {
        var _this = this;
        this._readBytes(3);
        var d = this.readByte();
        var e = this.readByte();
        var f = this.readByte();
        b = new Array(d);
        c = new Array(d);
        var g = new Array(d);
        for (var h = 0; h < d; h++) {
            b[h] = this._du(a);
            g[h] = this._readDouble();
        }
        var _loop_7 = function (i) {
            var j = 0;
            c[i] = ((function () { var k = _this._ee(j); j = k.p0; return k.ret; })());
        };
        for (var i = 0; i < d; i++) {
            _loop_7(i);
        }
        return {
            p1: b,
            p2: c
        };
    };
    Biff8RecordStream.prototype._gr = function (a, b) {
        this._write2(new Array(3));
        var c = a.colorScaleType == 1 ? 3 : 2;
        this._write9(c);
        this._write9(c);
        var d = 0;
        var e = ExcelUtils.f5(d, true, 0);
        d = e.p0;
        var f = ExcelUtils.f5(d, true, 1);
        d = f.p0;
        this._write9(d);
        var g = null;
        var h = null;
        if (a.colorScaleType == 1) {
            g = [a.minimumThreshold, a.midpointThreshold, a.maximumThreshold];
            h = [0, 0.5, 1];
        }
        else {
            g = [a.minimumThreshold, a.maximumThreshold];
            h = [0, 1];
        }
        for (var i = 0; i < g.length; i++) {
            var j = g[i]._b;
            this._gt(j, b);
            this._write10(h[i]);
        }
        for (var k = 0; k < g.length; k++) {
            this._write10(h[k]);
            this._writeCFColor(g[k]._al, 1);
        }
    };
    Biff8RecordStream.prototype._ee = function (a) {
        a = this._readDouble();
        return {
            ret: this._readCFColor(),
            p0: a
        };
    };
    Biff8RecordStream.prototype._du = function (a) {
        var b = new CfVo();
        b.b = this.readByte();
        var c = this._readUInt16();
        if (c > 0) {
            var d = ObjExtensionMethods.v(a, c);
            b.a = d != null ? d.b : null;
        }
        else if (b.b != 2 && b.b != 3) {
            b.c = this._readDouble();
        }
        return b;
    };
    Biff8RecordStream.prototype._gt = function (a, b) {
        var c = Extensions_BIFF8.m(a.valueType);
        this._write9(c);
        if (a.valueType == 3 && a.formula != null) {
            var d = ((function () {
                var $ret = new Rgce();
                $ret.a = a.formula;
                return $ret;
            })());
            var e = this.position;
            this._write17(0);
            this._hx(d, e, b);
        }
        else {
            this._write17(0);
            if (c != 2 && c != 3) {
                this._write10(a.value);
            }
        }
    };
    Biff8RecordStream.prototype._dj = function (a, b) {
        var c = new CfDataBar();
        this._readBytes(3);
        var d = this.readByte();
        c.d = ExcelUtils.bt(d, 0);
        c.e = ExcelUtils.bt(d, 1);
        c.g = this.readByte();
        c.f = this.readByte();
        c.c = this._readCFColor();
        c.b = this._du(a);
        c.a = this._du(a);
        return c;
    };
    Biff8RecordStream.prototype._gk = function (a, b) {
        this._write2(new Array(3));
        var c = 0;
        var d = ExcelUtils.f5(c, a.direction == -5004, 0);
        c = d.p0;
        var e = ExcelUtils.f5(c, a.showValue == false, 1);
        c = e.p0;
        this._write9(c);
        var f = a.fillPercentMin;
        var g = a.fillPercentMax;
        this._write9(f);
        this._write9(g);
        this._writeCFColor(a._cv, 1);
        this._gt(a.minPoint, b);
        this._gt(a.maxPoint, b);
    };
    Biff8RecordStream.prototype._ds = function (a, b) {
        var c = new CfIconSet();
        this._readBytes(3);
        c.e = this.readByte();
        c.b = this.readByte();
        var d = this.readByte();
        c.d = ExcelUtils.bt(d, 0);
        c.c = ExcelUtils.bt(d, 2);
        var e = new Array(c.e);
        for (var f = 0; f < c.e; f++) {
            var g = new CfIconCriterion();
            g.a = this._du(a);
            var h = this.readByte();
            g.b = (h == 1);
            this._readBytes(4);
            e[f] = g;
        }
        c.a = e;
        return c;
    };
    Biff8RecordStream.prototype._gs = function (a, b) {
        this._write2(new Array(3));
        var c = IconCriterion._an(a.iconSet);
        this._write9(c);
        var d = Extensions_BIFF8.o(a.iconSet);
        this._write9(d);
        var e = a.showValue == false;
        var f = a.isReverseOrder;
        var g = 0;
        var h = ExcelUtils.f5(g, e, 0);
        g = h.p0;
        var i = ExcelUtils.f5(g, f, 2);
        g = i.p0;
        this._write9(g);
        for (var j = 0; j < c; j++) {
            var k = a._iconCriteria$i.item(j);
            var l = Extensions_BIFF8.n(k._b);
            this._gt(k._b, b);
            var m = k.comparison == 0 ? 1 : 0;
            this._write9(m);
            this._write2(new Array(4));
        }
    };
    Biff8RecordStream.prototype._readDXFALC = function (a, b, c, d, e, f, g, h, i, j) {
        var k = this._readUInt32();
        var l = ExcelUtils.c7(k, 0, 2);
        var m = ExcelUtils.bu(k, 3);
        var n = ExcelUtils.c7(k, 4, 6);
        var o = ExcelUtils.bu(k, 7);
        var p = ExcelUtils.c7(k, 8, 15);
        var q = ExcelUtils.c7(k, 16, 19);
        var r = ExcelUtils.bu(k, 20);
        var s = ExcelUtils.bu(k, 21);
        var t = ExcelUtils.c7(k, 22, 23);
        var u = this._readInt32();
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
    };
    Biff8RecordStream.prototype._writeDXFALC = function (a, b, c, d, e, f, g, h, i, j) {
        var k = 0;
        var l = false;
        var m = 2;
        var n = false;
        var o = 0;
        var p = 0;
        var q = false;
        var r = false;
        var s = 0;
        var t = 255;
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
            var u = a._ct;
            p = Math.min(15, u);
            if (15 < u) {
                t = u - p;
            }
        }
        if (h == false) {
            q = nullableEquals(a._c6, true);
        }
        var v = 0;
        var w = ExcelUtils.e2(v, k, 0, 2);
        v = w.p0;
        var x = ExcelUtils.f9(v, l, 3);
        v = x.p0;
        var y = ExcelUtils.e2(v, m, 4, 6);
        v = y.p0;
        var z = ExcelUtils.f9(v, n, 7);
        v = z.p0;
        var aa = ExcelUtils.e2(v, o, 8, 15);
        v = aa.p0;
        var ab = ExcelUtils.e2(v, p, 16, 19);
        v = ab.p0;
        var ac = ExcelUtils.f9(v, q, 20);
        v = ac.p0;
        var ad = ExcelUtils.f9(v, r, 21);
        v = ad.p0;
        var ae = ExcelUtils.e2(v, s, 22, 23);
        v = ae.p0;
        this._write18(v);
        this._write12(t);
    };
    Biff8RecordStream.prototype._readDXFBdr = function (a, b, c, d, e, f, g) {
        var h = this._readUInt32();
        var i = ExcelUtils.c7(h, 0, 3);
        var j = ExcelUtils.c7(h, 4, 7);
        var k = ExcelUtils.c7(h, 8, 11);
        var l = ExcelUtils.c7(h, 12, 15);
        var m = ExcelUtils.c7(h, 16, 22);
        var n = ExcelUtils.c7(h, 23, 29);
        var o = ExcelUtils.bu(h, 30);
        var p = ExcelUtils.bu(h, 31);
        h = this._readUInt32();
        var q = ExcelUtils.c7(h, 0, 6);
        var r = ExcelUtils.c7(h, 7, 13);
        var s = ExcelUtils.c7(h, 14, 20);
        var t = ExcelUtils.c7(h, 21, 24);
        var u = this._loadManager._b;
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
        var v = 1;
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
    };
    Biff8RecordStream.prototype._writeDXFBdr = function (a, b, c, d, e, f, g) {
        var h = 0;
        var i = 0;
        var j = 0;
        var k = 0;
        var l = 0;
        var m = 0;
        var n = false;
        var o = false;
        var p = 0;
        var q = 0;
        var r = 0;
        var s = 0;
        var t = this.saveManager._b;
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
            var u = a._aw;
            if (ExcelUtils.bv(u, 3)) {
                n = true;
            }
            if (ExcelUtils.bv(u, 5)) {
                o = true;
            }
        }
        var v = 0;
        var w = ExcelUtils.e2(v, h, 0, 3);
        v = w.p0;
        var x = ExcelUtils.e2(v, i, 4, 7);
        v = x.p0;
        var y = ExcelUtils.e2(v, j, 8, 11);
        v = y.p0;
        var z = ExcelUtils.e2(v, k, 12, 15);
        v = z.p0;
        var aa = ExcelUtils.e2(v, l, 16, 22);
        v = aa.p0;
        var ab = ExcelUtils.e2(v, m, 23, 29);
        v = ab.p0;
        var ac = ExcelUtils.f9(v, n, 30);
        v = ac.p0;
        var ad = ExcelUtils.f9(v, o, 31);
        v = ad.p0;
        this._write18(v);
        v = 0;
        var ae = ExcelUtils.e2(v, p, 0, 6);
        v = ae.p0;
        var af = ExcelUtils.e2(v, q, 7, 13);
        v = af.p0;
        var ag = ExcelUtils.e2(v, r, 14, 20);
        v = ag.p0;
        var ah = ExcelUtils.e2(v, s, 21, 24);
        v = ah.p0;
        this._write18(v);
    };
    Biff8RecordStream.prototype._readDXFFntD = function (a, b) {
        var c = this.readByte();
        var d = this.position;
        var e = null;
        if (c != 0) {
            e = this._readXLUnicodeStringNoCch(c);
        }
        var f = this.position;
        var g = this._readBytes(63 - (f - d));
        var h = this._de();
        var i = this._readInt32();
        var j = this._readUInt32();
        var k = this._df();
        var l = this._readUInt32();
        var m = this._readUInt32();
        var n = this._readUInt32();
        var o = this._readUInt32();
        var p = this._readInt32();
        var q = this._readInt32();
        var r = this._readUInt16();
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
            var t1 = h.f;
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
                var s = h.g;
                if (EnumUtil.isDefined(FontSuperscriptSubscriptStyle_$type, enumGetBox(FontSuperscriptSubscriptStyle_$type, s))) {
                    a.superscriptSubscriptStyle = s;
                }
                else {
                }
            }
        }
        if (m == 0) {
            if (h.d != 255) {
                var t = h.d;
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
    };
    Biff8RecordStream.prototype._writeDXFFntD = function (a) {
        var b = this.position + 1;
        if (a.name == null) {
            this.writeByte(0);
        }
        else {
            this.writeByte(a.name.length);
            this._writeXLUnicodeStringNoCch1(a.name, true);
        }
        var c = 63 - (this.position - b);
        this._write2(new Array(c));
        var d = new Biff8RecordStream_Ts();
        d.a = nullableEquals(a._italic$i, true);
        d.b = nullableEquals(a._strikeout$i, true);
        var e = new Biff8RecordStream_Stxp();
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
        var f = -1;
        if (WorkbookColorInfo.l_op_Inequality(a.colorInfo, null)) {
            f = a.colorInfo._y(this.saveManager._b, 2);
        }
        this._write12(f);
        this._write18(intSToU(0));
        var g = new Biff8RecordStream_Ts();
        g.a = (nullableEquals(a._italic$i, null));
        g.b = (nullableEquals(a._strikeout$i, null));
        this._h4(g);
        var h = (a.superscriptSubscriptStyle == -1) ? intSToU(1) : 0;
        this._write18(h);
        var i = (a.underlineStyle == -1) ? intSToU(1) : 0;
        this._write18(i);
        var j = (nullableEquals(a._bold$i, null)) ? intSToU(1) : 0;
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
    };
    Biff8RecordStream.prototype._readDXFN = function () {
        var a = this._readUInt32();
        var b = ExcelUtils.bu(a, 0);
        var c = ExcelUtils.bu(a, 1);
        var d = ExcelUtils.bu(a, 2);
        var e = ExcelUtils.bu(a, 3);
        var f = ExcelUtils.bu(a, 4);
        var g = ExcelUtils.bu(a, 5);
        var h = ExcelUtils.bu(a, 6);
        var i = ExcelUtils.bu(a, 7);
        var j = ExcelUtils.bu(a, 8);
        var k = ExcelUtils.bu(a, 9);
        var l = ExcelUtils.bu(a, 10);
        var m = ExcelUtils.bu(a, 11);
        var n = ExcelUtils.bu(a, 12);
        var o = ExcelUtils.bu(a, 13);
        var p = ExcelUtils.bu(a, 14);
        var q = ExcelUtils.bu(a, 15);
        var r = ExcelUtils.bu(a, 16);
        var s = ExcelUtils.bu(a, 17);
        var t = ExcelUtils.bu(a, 18);
        var u = ExcelUtils.bu(a, 19);
        var v = ExcelUtils.bu(a, 20);
        var w = ExcelUtils.bu(a, 21);
        var x = ExcelUtils.c7(a, 22, 24);
        var y = ExcelUtils.bu(a, 25);
        var z = ExcelUtils.bu(a, 26);
        var aa = ExcelUtils.bu(a, 27);
        var ab = ExcelUtils.bu(a, 28);
        var ac = ExcelUtils.bu(a, 29);
        var ad = ExcelUtils.bu(a, 30);
        var ae = ExcelUtils.bu(a, 31);
        var af = this._readUInt16();
        var ag = ExcelUtils.bt(af, 0);
        var ah = ExcelUtils.bt(af, 1);
        var ai = ExcelUtils.bt(af, 2);
        var aj = ExcelUtils.c6(af, 3, 14);
        var ak = ExcelUtils.bt(af, 15);
        var al = this._loadManager._b._cd(2);
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
    };
    Biff8RecordStream.prototype._writeDXFN = function (a) {
        var b = a.alignment == -1;
        var c = a.verticalAlignment == -1;
        var d = nullableEquals(a._wrapText$i, null);
        var e = a.rotation == -1;
        var f = true;
        var g = a.indent == -1;
        var h = nullableEquals(a._shrinkToFit$i, null);
        var i = true;
        var j = nullableEquals(a._locked$i, null);
        var k = true;
        var l = a.leftBorderStyle == -1 && WorkbookColorInfo.l_op_Equality(a.leftBorderColorInfo, null);
        var m = a.rightBorderStyle == -1 && WorkbookColorInfo.l_op_Equality(a.rightBorderColorInfo, null);
        var n = a.topBorderStyle == -1 && WorkbookColorInfo.l_op_Equality(a.topBorderColorInfo, null);
        var o = a.bottomBorderStyle == -1 && WorkbookColorInfo.l_op_Equality(a.bottomBorderColorInfo, null);
        var p = a.diagonalBorderStyle == -1 && WorkbookColorInfo.l_op_Equality(a.diagonalBorderColorInfo, null) && a.diagonalBorders == 0;
        var q = p;
        var r = a.fill == null;
        var s = r;
        var t = r;
        var u = a._cr == -1;
        var v = true;
        var w = ExcelUtils.bx(a.formatOptions, 1);
        var x = ExcelUtils.bx(a.formatOptions, 4);
        var y = ExcelUtils.bx(a.formatOptions, 2);
        var z = ExcelUtils.bx(a.formatOptions, 8);
        var aa = ExcelUtils.bx(a.formatOptions, 16);
        var ab = ExcelUtils.bx(a.formatOptions, 32);
        var ac = 0;
        var ad = ExcelUtils.f9(ac, b, 0);
        ac = ad.p0;
        var ae = ExcelUtils.f9(ac, c, 1);
        ac = ae.p0;
        var af = ExcelUtils.f9(ac, d, 2);
        ac = af.p0;
        var ag = ExcelUtils.f9(ac, e, 3);
        ac = ag.p0;
        var ah = ExcelUtils.f9(ac, f, 4);
        ac = ah.p0;
        var ai = ExcelUtils.f9(ac, g, 5);
        ac = ai.p0;
        var aj = ExcelUtils.f9(ac, h, 6);
        ac = aj.p0;
        var ak = ExcelUtils.f9(ac, i, 7);
        ac = ak.p0;
        var al = ExcelUtils.f9(ac, j, 8);
        ac = al.p0;
        var am = ExcelUtils.f9(ac, k, 9);
        ac = am.p0;
        var an = ExcelUtils.f9(ac, l, 10);
        ac = an.p0;
        var ao = ExcelUtils.f9(ac, m, 11);
        ac = ao.p0;
        var ap = ExcelUtils.f9(ac, n, 12);
        ac = ap.p0;
        var aq = ExcelUtils.f9(ac, o, 13);
        ac = aq.p0;
        var ar = ExcelUtils.f9(ac, p, 14);
        ac = ar.p0;
        var as = ExcelUtils.f9(ac, q, 15);
        ac = as.p0;
        var at = ExcelUtils.f9(ac, r, 16);
        ac = at.p0;
        var au = ExcelUtils.f9(ac, s, 17);
        ac = au.p0;
        var av = ExcelUtils.f9(ac, t, 18);
        ac = av.p0;
        var aw = ExcelUtils.f9(ac, u, 19);
        ac = aw.p0;
        var ax = ExcelUtils.f9(ac, true, 20);
        ac = ax.p0;
        var ay = ExcelUtils.f9(ac, true, 21);
        ac = ay.p0;
        var az = ExcelUtils.f9(ac, w, 25);
        ac = az.p0;
        var a0 = ExcelUtils.f9(ac, x, 26);
        ac = a0.p0;
        var a1 = ExcelUtils.f9(ac, y, 27);
        ac = a1.p0;
        var a2 = ExcelUtils.f9(ac, z, 28);
        ac = a2.p0;
        var a3 = ExcelUtils.f9(ac, aa, 29);
        ac = a3.p0;
        var a4 = ExcelUtils.f9(ac, ab, 30);
        ac = a4.p0;
        var a5 = ExcelUtils.f9(ac, v, 31);
        ac = a5.p0;
        this._write18(ac);
        var a6 = false;
        if (w) {
            a6 = (this.saveManager._b._b2.e(a._cs) == false);
        }
        var a7 = 0;
        var a8 = ExcelUtils.f7(a7, a6, 0);
        a7 = a8.p0;
        var a9 = ExcelUtils.f7(a7, true, 1);
        a7 = a9.p0;
        var ba = ExcelUtils.f7(a7, false, 2);
        a7 = ba.p0;
        var bb = ExcelUtils.f7(a7, true, 15);
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
    };
    Biff8RecordStream.prototype._readDXFN12 = function () {
        var a = this._readUInt32();
        if (a == 0) {
            var b = this._readUInt16();
            return null;
        }
        return this._readDXFN12List(a);
    };
    Biff8RecordStream.prototype._g0 = function (a) {
        var b = this.position;
        var c = 0;
        this._write18(c);
        var d = this.position;
        if (a == null) {
            this._write17(0);
            return;
        }
        this._writeDXFN(a);
        this._writeXFExtNoFRT(a);
        var e = this.position;
        c = (e - d);
        this.position = b;
        this._write18(c);
        this.position = e;
    };
    Biff8RecordStream.prototype._readDXFN12List = function (a) {
        var b = this.position + a;
        var c = this._readDXFN();
        if (this.position < b) {
            this._readXFExtNoFRT(c);
        }
        return c;
    };
    Biff8RecordStream.prototype._writeDXFN12List = function (a) {
        this._writeDXFN(a);
        this._writeXFExtNoFRT(a);
    };
    Biff8RecordStream.prototype._readDXFN12NoCB = function () {
        var a = this._readDXFN();
        if (this.position < this.length) {
            this._readXFExtNoFRT(a);
        }
        return a;
    };
    Biff8RecordStream.prototype._writeDXFN12NoCB = function (a) {
        this._writeDXFN(a);
        this._writeXFExtNoFRT(a);
    };
    Biff8RecordStream.prototype._readDXFNum = function (a, b, c) {
        if (b) {
            this._readDXFNumUsr(a);
        }
        else {
            this._readDXFNumIFmt(a, c);
        }
    };
    Biff8RecordStream.prototype._writeDXFNum = function (a, b) {
        if (b) {
            this._writeDXFNumUsr(a);
        }
        else {
            this._writeDXFNumIFmt(a);
        }
    };
    Biff8RecordStream.prototype._readDXFNumIFmt = function (a, b) {
        var c = this.readByte();
        var d = this.readByte();
        if (b == false) {
            a._cr = WorkbookFormatCollection.aj(d);
        }
    };
    Biff8RecordStream.prototype._writeDXFNumIFmt = function (a) {
        this.writeByte(0);
        var b = WorkbookFormatCollection.ak(intSToU(a._cs));
        this.writeByte(b);
    };
    Biff8RecordStream.prototype._readDXFNumUsr = function (a) {
        var b = this._readUInt16();
        var c = this._readXLUnicodeString();
        a.formatString = c;
    };
    Biff8RecordStream.prototype._writeDXFNumUsr = function (a) {
        var b = this.position;
        this._write17(0);
        this._writeXLUnicodeString(a._dg);
        var c = this.position;
        var d = (c - b);
        this.position = b;
        this._write17(d);
        this.position = c;
    };
    Biff8RecordStream.prototype._readDXFPat = function (a, b, c, d) {
        var e = this._readUInt32();
        var f = ExcelUtils.c7(e, 10, 15);
        var g = ExcelUtils.c7(e, 16, 22);
        var h = ExcelUtils.c7(e, 23, 29);
        var i = 0;
        if (b == false) {
            i = f;
        }
        var j = this._loadManager._b;
        var k = null;
        if (c == false) {
            k = new WorkbookColorInfo(j, g);
        }
        var l = null;
        if (d == false) {
            l = new WorkbookColorInfo(j, h);
        }
        if (b && c && d) {
            return;
        }
        a.fill = new CellFillPattern(l, k, i, a, true);
    };
    Biff8RecordStream.prototype._writeDXFPat = function (a, b, c, d) {
        var e = 0;
        var f = 0;
        var g = 0;
        var h = a._ar;
        if (b == false) {
            e = a._ay(h);
        }
        var i = this.saveManager._b;
        if (c == false) {
            f = a._bi(h, false, true)._y(i, 1);
        }
        if (d == false) {
            g = a._bi(h, true, true)._y(i, 1);
        }
        var j = 0;
        var k = ExcelUtils.e2(j, e, 10, 15);
        j = k.p0;
        var l = ExcelUtils.e2(j, f, 16, 22);
        j = l.p0;
        var m = ExcelUtils.e2(j, g, 23, 29);
        j = m.p0;
        this._write18(j);
    };
    Biff8RecordStream.prototype._readDXFProt = function (a, b, c) {
        var d = this._readUInt16();
        var e = ExcelUtils.bt(d, 0);
        var f = ExcelUtils.bt(d, 1);
        if (b == false) {
            a._locked$i = ExcelUtils.dv(e);
        }
    };
    Biff8RecordStream.prototype._writeDXFProt = function (a, b, c) {
        var d = true;
        var e = false;
        if (b == false) {
            d = nullableEquals(a._c5, true);
        }
        var f = 0;
        var g = ExcelUtils.f7(f, d, 0);
        f = g.p0;
        var h = ExcelUtils.f7(f, e, 1);
        f = h.p0;
        this._write17(f);
    };
    Biff8RecordStream.prototype._readExtProp = function () {
        var a = this.position;
        var b = this._readUInt16();
        var c = this._readUInt16();
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
                    var d = this.readByte();
                    return new ExtPropFontScheme(d);
                case 6: return new ExtPropGradientFillLoaded(this._readXFExtGradient());
                case 15:
                    var e = this._readUInt16();
                    e = Math.min(250, e);
                    return new ExtPropTextIndentationLevel(e);
                default: return null;
            }
        }
        finally {
            var f = a + c;
            this.position = f;
        }
    };
    Biff8RecordStream.prototype._writeExtProp = function (a) {
        if (a == null) {
            return;
        }
        var b = this.position;
        this._write17(a.a);
        this._write17(0);
        a.c(this);
        var c = this.position;
        var d = (c - b);
        this.position = b + 2;
        this._write11(d);
        this.position = c;
    };
    Biff8RecordStream.prototype._readFeatProtection = function () {
        var a = this._readUInt32();
        var b = this._readUInt32();
        var c = this._readXLUnicodeString();
        var d = null;
        if (a != 0) {
            d = this._c2();
        }
        var e = new WorksheetProtectedRange(c);
        if (b != 0) {
            e._c.b = ProtectionValidationInfo.c(b);
        }
        if (d != null) {
            e._o(d);
        }
        return e;
    };
    Biff8RecordStream.prototype._writeFeatProtection = function (a) {
        var b = a._b();
        var c = intSToU((b != null && b.length > 0 ? 1 : 0));
        CryptoUtilities.f(this, c);
        var d = a._c.h();
        CryptoUtilities.f(this, (!nullableIsNull(d) ? d.value : 0));
        this._writeXLUnicodeString(a.title);
        if (c != 0) {
            this._hz(b);
        }
    };
    Biff8RecordStream.prototype._readFeat11FdaAutoFilter = function (a, b) {
        var c = this._readUInt32();
        var d = this._readUInt16();
        if (c == 0) {
            return null;
        }
        return this._readAutoFilter(a, b);
    };
    Biff8RecordStream.prototype._writeFeat11FdaAutoFilter = function (a, b) {
        var c = this.position;
        this._write18(intSToU(0));
        this._write17(65535);
        if (b != null && b.e) {
            var d = this.position;
            this._writeAutoFilter(b);
            var e = this.position;
            var f = (e - d);
            this.position = c;
            this._write17(f);
            this.position = e;
        }
    };
    Biff8RecordStream.prototype._es = function (a, b, c, d) {
        var _this = this;
        var e = this._readUInt32();
        var f = this._readUInt32();
        var g = this._readUInt32();
        var h = this._readUInt32();
        var i = this._readUInt32();
        var j = this._readInt32();
        var k = this._readUInt32();
        var l = ExcelUtils.bu(k, 0);
        var m = ExcelUtils.bu(k, 1);
        var n = ExcelUtils.bu(k, 2);
        var o = ExcelUtils.bu(k, 3);
        var p = ExcelUtils.c7(k, 4, 5);
        var q = ExcelUtils.bu(k, 6);
        var r = ExcelUtils.bu(k, 7);
        var s = ExcelUtils.bu(k, 8);
        var t = ExcelUtils.bu(k, 9);
        var u = ExcelUtils.bu(k, 10);
        var v = ExcelUtils.bu(k, 11);
        var w = ExcelUtils.c7(k, 12, 31);
        var x = this._readUInt32();
        var y = this._readInt32();
        var z = this._readXLUnicodeString();
        var aa = z;
        if (c == false) {
            var ab = this._readXLUnicodeString();
            aa = ab;
        }
        var ac = b._b5(e);
        ac.name = aa;
        ac.totalFormula = this._loadManager._b._ao(ac, h);
        var ad = this._loadManagerBiff8._a4(j);
        var ae = null;
        if (i != 0) {
            ae = this._readDXFN12List(i);
        }
        var af = this._loadManagerBiff8._a4(y);
        var ag = null;
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
            var ah_1 = s ? 1 : 0;
            var ai_1 = this._readBytes((this.length - this.position));
            var aj_1 = 0;
            var ak = ((function () { var al = _this._loadManagerBiff8._at(ah_1, ai_1, aj_1); ai_1 = al.p1; aj_1 = al.p2; return al.ret; })());
            this.seek(aj_1 - ai_1.length, 1);
            ac.totalFormula = ak;
        }
        if (u) {
            var al = this._readXLUnicodeString();
            ac.totalLabel = al;
        }
        if (d == 0 && c == false) {
            this._fo(ac, t);
        }
        this._loadManager._ac(WorksheetTableColumnArea_$type, ac._areaFormats$i, 0, WorksheetTableColumn._ap, af, ag);
        this._loadManager._ac(WorksheetTableColumnArea_$type, ac._areaFormats$i, 2, WorksheetTableColumn._ap, ad, ae);
        if (v) {
            var am = void 0;
            var an = void 0;
            var ao = b._d8(am, an);
            am = ao.p0;
            an = ao.p1;
            var ap = a._rows$i.item(an)._cells$i.item(ac._at).formula;
            if (ap != null) {
                ap = ap._w(an, ac._at, this._loadManager._b.currentFormat);
                ac._bz(ap);
            }
        }
        return ac;
    };
    Biff8RecordStream.prototype._writeFeat11FieldDataItem = function (a, b, c) {
        var d;
        var e;
        var f = this.saveManager._bf(WorksheetTableColumnArea_$type, a._areaFormats$i, 0, d, e);
        d = f.p2;
        e = f.p3;
        var g;
        var h;
        var i = this.saveManager._bf(WorksheetTableColumnArea_$type, a._areaFormats$i, 2, g, h);
        g = i.p2;
        h = i.p3;
        var j = -1;
        if (d != null) {
            j = this._saveManagerBiff8._cy.indexOf(d);
        }
        var k = -1;
        if (g != null) {
            k = this._saveManagerBiff8._cy.indexOf(g);
        }
        this._write18(a._a9);
        this._write18(intSToU(0));
        this._write18(intSToU(0));
        var l = this.saveManager._b._ck(a);
        this._write18(l);
        var m = this.position;
        this._write18(intSToU(0));
        this._write12(k);
        var n;
        var o = b._d(a.index, n);
        n = o.p1;
        var p = (n != null && n.e) || a.table.isFilterUIVisible;
        var q = l == 9;
        var r = l == 0 && a.table.isTotalsRowVisible == false && a.totalLabel != null;
        var s = null;
        var t = null;
        if (a.table.isHeaderRowVisible == false) {
            var u = this.saveManager._bf(WorksheetTableColumnArea_$type, a._areaFormats$i, 1, s, t);
            s = u.p2;
            t = u.p3;
        }
        var v = (s != null);
        var w = 0;
        var x = ExcelUtils.f9(w, p, 0);
        w = x.p0;
        var y = ExcelUtils.f9(w, q, 7);
        w = y.p0;
        var z = ExcelUtils.f9(w, q && typeCast(ArrayFormula.$, a.totalFormula) !== null, 8);
        w = z.p0;
        var aa = ExcelUtils.f9(w, v, 9);
        w = aa.p0;
        var ab = ExcelUtils.f9(w, r, 10);
        w = ab.p0;
        var ac = ExcelUtils.f9(w, a.columnFormula != null, 11);
        w = ac.p0;
        this._write18(w);
        var ad = this.position;
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
    };
    Biff8RecordStream.prototype._fc = function () {
        var a = this._readUInt16();
        var b = this._readUInt32();
        var c = this._readBytes(b);
        var d = Workbook._g1.getString1(c, 0, b - 1);
        for (var e = 0; e < a; e++) {
            d = "..\\" + d;
        }
        var f = this._readUInt16();
        var g = this._readUInt16();
        var h = this._readBytes(16);
        var i = this._readUInt32();
        var j = this._readUInt32();
        if (j == 0) {
            return d;
        }
        var k = this._readUInt32();
        var l = this._readUInt16();
        var m = this._readBytes(k);
        var n = Encoding.unicode.getString(m);
        for (var o = 0; o < a; o++) {
            n = "..\\" + n;
        }
        return n;
    };
    Biff8RecordStream.prototype._hd = function (a) {
        var b = 0;
        while (stringStartsWith(a, "..\\")) {
            a = a.substr(3);
            b++;
        }
        this._write17(b);
        var c = Workbook._g1.getBytes1(a);
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
            var d = (a.length * 2) + 6;
            this._write18(intSToU(d));
            var e = a.length * 2;
            this._write18(intSToU(e));
            this._write17(3);
            this._write2(Encoding.unicode.getBytes1(a));
        }
    };
    Biff8RecordStream.prototype._ey = function () {
        var a = this._readUInt32();
        var b = this._readUInt32();
        var c = u32BitwiseOr(u32LS(b, 32), a);
        return dateFromFileTimeUtc(c);
    };
    Biff8RecordStream.prototype._readFontScheme = function () {
        return this.readByte();
    };
    Biff8RecordStream.prototype._writeFontScheme = function (a) {
        this._write9(a);
    };
    Biff8RecordStream.prototype._readFormat = function (a, b) {
        a = this._readUInt16();
        b = this._readXLUnicodeString();
        return {
            p0: a,
            p1: b
        };
    };
    Biff8RecordStream.prototype._writeFormat = function (a, b) {
        this._write17(a);
        this._writeXLUnicodeString(b);
    };
    Biff8RecordStream.prototype._readFrtHeader = function () {
        var a = this._readUInt16();
        var b = this._readUInt16();
        this.seek(8, 1);
    };
    Biff8RecordStream.prototype._writeFrtHeader = function () {
        this._write17(this._bf);
        this._write17(0);
        this._write2(new Array(8));
    };
    Biff8RecordStream.prototype._ct = function (a) {
        switch (a) {
            case 2162:
                this._write17(2165);
                this._write17(0);
                this._write2(new Array(8));
                break;
        }
    };
    Biff8RecordStream.prototype._readFrtHeaderU = function (a) {
        var b = this._readUInt16();
        var c = this._readUInt16();
        return this._readRef8U(a);
    };
    Biff8RecordStream.prototype._writeFrtHeaderU = function (a) {
        this._write17(this._bf);
        this._write17(1);
        this._writeRef8U(a);
    };
    Biff8RecordStream.prototype._readFrtRefHeader = function (a) {
        return this._readFrtRefHeader1(a, this._recordType);
    };
    Biff8RecordStream.prototype._readFrtRefHeader1 = function (a, b) {
        var c = this._readUInt16();
        var d = this._readUInt16();
        if (ExcelUtils.bt(d, 0)) {
            return this._readRef8U(a);
        }
        this.seek(8, 1);
        return null;
    };
    Biff8RecordStream.prototype._writeFrtRefHeader = function (a) {
        this._writeFrtRefHeader1(a, this._recordType);
    };
    Biff8RecordStream.prototype._writeFrtRefHeader1 = function (a, b) {
        this._write17(b);
        if (a != null) {
            this._write17(1);
            this._writeRef8U(a);
        }
        else {
            this._write17(0);
            this._write2(new Array(8));
        }
    };
    Biff8RecordStream.prototype._readFrtRefHeaderNoGrbit = function (a) {
        var b = this._readUInt16();
        return this._readRef8U(a);
    };
    Biff8RecordStream.prototype._writeFrtRefHeaderNoGrbit = function (a) {
        this._write17(this._bf);
        this._writeRef8U(a);
    };
    Biff8RecordStream.prototype._readFullColorExt = function () {
        var a = new FullColorExtInfo();
        a.a = this._readUInt16();
        a.b = this._readInt16();
        a.c = this._readUInt32();
        this.seek(8, 1);
        return a;
    };
    Biff8RecordStream.prototype.writeFullColorExt = function (a, b) {
        var c;
        var d;
        var e;
        var f = this._fm(a, b, c, d, e);
        c = f.p2;
        d = f.p3;
        e = f.p4;
        var g = truncate(MathUtilities.f(d * 32767));
        this._write17(c);
        this._write11(g);
        this._write18(e);
        this._write2(new Array(8));
    };
    Biff8RecordStream.prototype._readGradStop = function () {
        var a = new GradStopInfo();
        a.a = this._readUInt16();
        a.d = this._readUInt32();
        a.b = this._readDouble();
        a.c = this._readDouble();
        return a;
    };
    Biff8RecordStream.prototype._writeGradStop = function (a) {
        var b = a.offset;
        var c;
        var d;
        var e;
        var f = this._fm(a.colorInfo, 1, c, d, e);
        c = f.p2;
        d = f.p3;
        e = f.p4;
        this._write17(c);
        this._write18(e);
        this._write10(b);
        this._write10(d);
    };
    Biff8RecordStream.prototype._readHorizAlign = function () {
        var a = this.readByte();
        if (a == 255) {
            return -1;
        }
        return a;
    };
    Biff8RecordStream.prototype._writeHorizAlign = function (a) {
        if (a == -1) {
            this._write9(255);
        }
        else {
            this._write9(a);
        }
    };
    Biff8RecordStream.prototype._readHyperlinkMoniker = function () {
        var a = new Guid(1, this._readBytes(16));
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
    };
    Biff8RecordStream.prototype._writeHyperlinkMoniker = function (a) {
        var b;
        if (!((function () { var c = Uri.tryCreate(a, 0, b); b = c.p2; return c.ret; })())) {
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
    };
    Biff8RecordStream.prototype._readHyperlinkString = function () {
        var a = this._readUInt32();
        var b = this._readBytes((a * 2));
        return Encoding.unicode.getString1(b, 0, b.length - 2);
    };
    Biff8RecordStream.prototype._writeHyperlinkString = function (a) {
        var b = new Array((a.length + 1) * 2);
        this._write18(intSToU((a.length + 1)));
        Encoding.unicode.getBytes3(a, 0, a.length, b, 0);
        this._write2(b);
    };
    Biff8RecordStream.prototype._readList12BlockLevel = function (a) {
        var b = this._readInt32();
        var c = this._readInt32();
        var d = this._loadManagerBiff8._a4(c);
        var e = this._readInt32();
        var f = this._readInt32();
        var g = this._loadManagerBiff8._a4(f);
        var h = this._readInt32();
        var i = this._readInt32();
        var j = this._loadManagerBiff8._a4(i);
        var k = this._readInt32();
        var l = this._readInt32();
        var m = this._readInt32();
        var n = null;
        if (b != 0) {
            n = this._readDXFN12List(b);
        }
        var o = null;
        if (e != 0) {
            o = this._readDXFN12List(e);
        }
        var p = null;
        if (h != 0) {
            p = this._readDXFN12List(h);
        }
        var q = null;
        if (k != 0) {
            q = this._readDXFN12List(k);
        }
        var r = null;
        if (l != 0) {
            r = this._readDXFN12List(l);
        }
        var s = null;
        if (m != 0) {
            s = this._readDXFN12List(m);
        }
        if (c != -1) {
            var t = this._readXLUnicodeString();
        }
        if (f != -1) {
            var u = this._readXLUnicodeString();
        }
        if (i != -1) {
            var v = this._readXLUnicodeString();
        }
        this._loadManager._ad(WorksheetTableArea_$type, a._areaFormats$i, 2, WorksheetTable._cd, d, n, r, 2, 4);
        this._loadManager._ac(WorksheetTableArea_$type, a._areaFormats$i, 1, WorksheetTable._cd, g, o);
        this._loadManager._ad(WorksheetTableArea_$type, a._areaFormats$i, 3, WorksheetTable._cd, j, p, s, 67108864, 134217728);
        this._loadManager._ad(WorksheetTableArea_$type, a._areaFormats$i, 0, WorksheetTable._cd, null, null, q, 262144, 524288, 67108864, 134217728, 2097152, 4194304, 2, 4);
    };
    Biff8RecordStream.prototype._writeList12BlockLevel = function (a) {
        var b = this.position;
        var c;
        var d;
        var e;
        var f = this.saveManager._bg(WorksheetTableArea_$type, a._areaFormats$i, 2, c, d, e, 2, 4);
        c = f.p2;
        d = f.p3;
        e = f.p4;
        var g;
        var h;
        var i = this.saveManager._bf(WorksheetTableArea_$type, a._areaFormats$i, 1, g, h);
        g = i.p2;
        h = i.p3;
        var j;
        var k;
        var l;
        var m = this.saveManager._bg(WorksheetTableArea_$type, a._areaFormats$i, 3, j, k, l, 67108864, 134217728);
        j = m.p2;
        k = m.p3;
        l = m.p4;
        var n;
        var o;
        var p;
        var q = this.saveManager._bg(WorksheetTableArea_$type, a._areaFormats$i, 0, n, o, p, 262144, 524288, 67108864, 134217728, 2097152, 4194304, 2, 4);
        n = q.p2;
        o = q.p3;
        p = q.p4;
        var r = -1;
        if (c != null) {
            r = this._saveManagerBiff8._cy.indexOf(c);
        }
        var s = -1;
        if (g != null) {
            s = this._saveManagerBiff8._cy.indexOf(g);
        }
        var t = -1;
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
    };
    Biff8RecordStream.prototype._readList12DisplayName = function (a) {
        var b = this._readXLUnicodeString();
        var c = this._readXLUnicodeString();
        if (stringIsNullOrEmpty(c) == false) {
            a.comment = c;
        }
    };
    Biff8RecordStream.prototype._writeList12DisplayName = function (a) {
        this._writeXLUnicodeString(a.name);
        this._writeXLUnicodeString(a.comment != null ? a.comment : stringEmpty());
    };
    Biff8RecordStream.prototype._readList12TableStyleClientInfo = function (a) {
        var b = this._readUInt16();
        var c = ExcelUtils.bt(b, 0);
        var d = ExcelUtils.bt(b, 1);
        var e = ExcelUtils.bt(b, 2);
        var f = ExcelUtils.bt(b, 3);
        var g = ExcelUtils.bt(b, 6);
        var h = this._readXLUnicodeString();
        a.style = this._loadManager._b._cj(h);
        a.displayBandedColumns = f;
        a.displayBandedRows = e;
        a.displayFirstColumnFormatting = c;
        a.displayLastColumnFormatting = d;
    };
    Biff8RecordStream.prototype._writeList12TableStyleClientInfo = function (a) {
        var b = 0;
        var c = ExcelUtils.f7(b, a.displayFirstColumnFormatting, 0);
        b = c.p0;
        var d = ExcelUtils.f7(b, a.displayLastColumnFormatting, 1);
        b = d.p0;
        var e = ExcelUtils.f7(b, a.displayBandedRows, 2);
        b = e.p0;
        var f = ExcelUtils.f7(b, a.displayBandedColumns, 3);
        b = f.p0;
        var g = ExcelUtils.f7(b, a.style == this.saveManager._b.defaultTableStyle, 6);
        b = g.p0;
        this._write17(b);
        this._writeXLUnicodeString(a.style.name);
    };
    Biff8RecordStream.prototype._readLPWideString = function () {
        var a = this._readUInt16();
        var b = this._readBytes(a * 2);
        return Encoding.unicode.getString(b);
    };
    Biff8RecordStream.prototype._writeLPWideString = function (a) {
        this._write17(a.length);
        this._write2(Encoding.unicode.getBytes1(a));
    };
    Biff8RecordStream.prototype._readRef8U = function (a) {
        var b = this._readUInt16();
        var c = this._readUInt16();
        var d = this._readUInt16();
        var e = this._readUInt16();
        return a._cx(b, d, c, e);
    };
    Biff8RecordStream.prototype._writeRef8U = function (a) {
        this._write17(a.firstRow);
        this._write17(a.lastRow);
        this._write17(a._v);
        this._write17(a._w);
    };
    Biff8RecordStream.prototype._readRefU = function (a) {
        var b = this._readUInt16();
        var c = this._readUInt16();
        var d = this.readByte();
        var e = this.readByte();
        return a._cx(b, d, c, e);
    };
    Biff8RecordStream.prototype._writeRefU = function (a) {
        this._write17(a.firstRow);
        this._write17(a.lastRow);
        this._write9(a._v);
        this._write9(a._w);
    };
    Biff8RecordStream.prototype._readRFX = function (a) {
        var b = this._readUInt32();
        var c = this._readUInt32();
        var d = this._readUInt32();
        var e = this._readUInt32();
        return a._cx(b, d, c, e);
    };
    Biff8RecordStream.prototype._writeRFX = function (a) {
        this._write18(intSToU(a.firstRow));
        this._write18(intSToU(a.lastRow));
        this._write18(a._v);
        this._write18(a._w);
    };
    Biff8RecordStream.prototype._readScript = function () {
        return this._readUInt16();
    };
    Biff8RecordStream.prototype._writeScript = function (a) {
        this._write17(a);
    };
    Biff8RecordStream.prototype._c2 = function () {
        var a = this._readUInt32();
        return this._readBytes(a);
    };
    Biff8RecordStream.prototype._hz = function (a) {
        CryptoUtilities.f(this, intSToU(a.length));
        this._write2(a);
    };
    Biff8RecordStream.prototype._readSortCond12$1 = function ($t, a, b, c, d) {
        this._readFrtRefHeader1(a, 2175);
        var e = this._readUInt16();
        var f = ExcelUtils.bt(e, 0);
        var g = ExcelUtils.c6(e, 1, 4);
        var h = ExcelUtils.c6(e, 5, 15);
        var i = this._readRFX(a);
        var j = i.firstColumn - c._w;
        if (j < 0 || c._af <= j) {
            return;
        }
        var k = d(j);
        if (typeCast(WorksheetTableColumn.$, k) !== null) {
        }
        var l = f ? 1 : 0;
        var m;
        switch (g) {
            case 0:
            case 1:
            case 2:
                m = this._readCondDataValue(g, l);
                break;
            case 3:
                var n = void 0;
                var o = void 0;
                var p = this._readCFFlag(n, o);
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
        var q = this._readInt32();
        if (m == null) {
            return;
        }
        if (g != 0) {
        }
        else {
            if (q > 0) {
                var r = this._readXLUnicodeStringNoCch(q);
                m = new (CustomListSortCondition.bind.apply(CustomListSortCondition, tslib_1.__spread([void 0, l], r.split(','))))();
            }
        }
        b._sortConditions$i._addItem$i(k, m);
    };
    Biff8RecordStream.prototype._writeSortCond12$1 = function ($t, a, b, c, d, e) {
        this._writeFrtRefHeader1(null, 2175);
        var f = 0;
        var g = ExcelUtils.f7(f, b.sortDirection == 1, 0);
        f = g.p0;
        var h = ExcelUtils.e1(f, b._d, 1, 4);
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
                var i = typeCast(IconSortCondition.$, b);
                if (i != null) {
                    this._writeCFFlag(i._k, i._n.getValueOrDefault());
                }
                else {
                }
                break;
            default: return;
        }
        var j = typeCast(CustomListSortCondition.$, b);
        if (j == null) {
            this._write12(0);
        }
        else {
            var k = j._l();
            this._write12(k.length);
            this._writeXLUnicodeStringNoCch(k);
        }
    };
    Biff8RecordStream.prototype._ex = function (a) {
        var b = this._readUInt16();
        var c = new List$1(WorksheetRegion.$, 2, b);
        for (var d = 0; d < b; d++) {
            var e = this._readRef8U(a);
            c.add(e);
        }
        return c;
    };
    Biff8RecordStream.prototype._h1 = function (a) {
        var e_53, _0;
        if (a.count == 0) {
            return;
        }
        var b = a.count;
        this._write17(b);
        try {
            for (var _1 = tslib_1.__values(fromEnum(a)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var c = _2.value;
                this._writeRef8U(c);
            }
        }
        catch (e_53_1) { e_53 = { error: e_53_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_53) throw e_53.error; }
        }
    };
    Biff8RecordStream.prototype._f2 = function (a, b, c, d, e) {
        b = this._readUInt16();
        var f = this._readUInt16();
        c = ExcelUtils.bt(f, 0);
        d = ExcelUtils.bt(f, 1);
        e = this._readRef8U(a);
        return {
            p1: b,
            p2: c,
            p3: d,
            p4: e
        };
    };
    Biff8RecordStream.prototype._hl = function (a, b) {
        var c = a;
        this._write17(c);
        var d = 0;
        var e = ExcelUtils.f7(d, b != null, 0);
        d = e.p0;
        this._write17(d);
        if (b != null) {
            this._writeRef8U(b);
        }
        else {
            this._write12(0);
            this._write12(0);
        }
    };
    Biff8RecordStream.prototype._de = function () {
        var a = new Biff8RecordStream_Stxp();
        a.e = this._readInt32();
        a.a = this._df();
        a.f = this._readUInt16();
        a.g = this._readUInt16();
        a.d = this.readByte();
        a.c = this.readByte();
        a.b = this.readByte();
        var b = this.readByte();
        return a;
    };
    Biff8RecordStream.prototype._h2 = function (a) {
        this._write12(a.e);
        this._h4(a.a);
        this._write17(a.f);
        this._write17(a.g);
        this.writeByte(a.d);
        this.writeByte(a.c);
        this.writeByte(a.b);
        this.writeByte(0);
    };
    Biff8RecordStream.prototype._readTableFeatureType = function (a, b) {
        var c = this._readUInt32();
        if (c != 0) {
            return null;
        }
        var d = this._readUInt32();
        var e = this._readUInt32();
        var f = this._readUInt32();
        var g = this._readUInt32();
        var h = this._readUInt32();
        var i = this._readUInt16();
        var j = this._readUInt16();
        var k = this._readUInt16();
        var l = ExcelUtils.bt(k, 0);
        var m = ExcelUtils.bt(k, 1);
        var n = ExcelUtils.bt(k, 2);
        var o = ExcelUtils.bt(k, 3);
        var p = ExcelUtils.bt(k, 4);
        var q = ExcelUtils.bt(k, 5);
        var r = ExcelUtils.bt(k, 6);
        var s = ExcelUtils.bt(k, 7);
        var t = ExcelUtils.bt(k, 8);
        var u = ExcelUtils.bt(k, 9);
        var v = ExcelUtils.bt(k, 10);
        var w = ExcelUtils.bt(k, 11);
        var x = ExcelUtils.bt(k, 12);
        var y = ExcelUtils.bt(k, 13);
        var z = ExcelUtils.bt(k, 14);
        var aa = ExcelUtils.bt(k, 15);
        k = this._readUInt16();
        var ab = ExcelUtils.c6(k, 0, 3);
        var ac = ExcelUtils.bt(k, 4);
        var ad = ExcelUtils.bt(k, 5);
        var ae = ExcelUtils.bt(k, 6);
        var af = ExcelUtils.bt(k, 7);
        var ag = ExcelUtils.bt(k, 8);
        var ah = ExcelUtils.c6(k, 9, 15);
        var ai = this._readUInt32();
        var aj = this._readUInt32();
        var ak = this._readUInt32();
        var al = this._readUInt32();
        var am = this._readBytes(16);
        var an = this._readXLUnicodeString();
        var ao = this._readUInt16();
        if (z) {
            var ap = this._readXLUnicodeString();
        }
        if (ac) {
            var aq = this._readXLUnicodeString();
        }
        var ar = new WorksheetTable(an, d, b.firstRow, b.lastRow, b._v, b._w);
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
        for (var as = 0; as < ao; as++) {
            this._es(a, ar, u, e);
        }
        if (q) {
        }
        if (aa) {
        }
        if (ad) {
        }
        return ar;
    };
    Biff8RecordStream.prototype._writeTableFeatureType = function (a, b) {
        var c = false;
        this._write18(0);
        this._write18(a._ds);
        this._write18(intSToU((a.isHeaderRowVisible ? 1 : 0)));
        this._write18(intSToU((a.isTotalsRowVisible ? 1 : 0)));
        this._write18(a._dt);
        this._write18(intSToU(64));
        this._write17(0);
        this._write17(0);
        var d = 0;
        var e = ExcelUtils.f7(d, a.isFilterUIVisible, 1);
        d = e.p0;
        var f = ExcelUtils.f7(d, a.isFilterUIVisible, 2);
        d = f.p0;
        var g = ExcelUtils.f7(d, a._cs, 3);
        d = g.p0;
        var h = ExcelUtils.f7(d, a._c5, 4);
        d = h.p0;
        var i = ExcelUtils.f7(d, a._cm, 6);
        d = i.p0;
        var j = ExcelUtils.f7(d, c, 9);
        d = j.p0;
        var k = ExcelUtils.f7(d, true, 11);
        d = k.p0;
        var l = ExcelUtils.f7(d, a._cs, 12);
        d = l.p0;
        this._write17(d);
        d = 0;
        var m = ExcelUtils.e1(d, 14, 0, 3);
        d = m.p0;
        var n = ExcelUtils.f7(d, true, 4);
        d = n.p0;
        var o = ExcelUtils.f7(d, false, 6);
        d = o.p0;
        var p = ExcelUtils.f7(d, a._c0, 8);
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
        for (var q = 0; q < a._columns$i.count; q++) {
            this._writeFeat11FieldDataItem(a._columns$i._item(q), b, c);
        }
    };
    Biff8RecordStream.prototype._df = function () {
        var a = new Biff8RecordStream_Ts();
        var b = this._readUInt32();
        a.a = ExcelUtils.bu(b, 1);
        a.b = ExcelUtils.bu(b, 7);
        return a;
    };
    Biff8RecordStream.prototype._h4 = function (a) {
        var b = 0;
        var c = ExcelUtils.f9(b, a.a, 1);
        b = c.p0;
        var d = ExcelUtils.f9(b, a.b, 7);
        b = d.p0;
        this._write18(b);
    };
    Biff8RecordStream.prototype._c9 = function () {
        return this._readUInt16();
    };
    Biff8RecordStream.prototype._h5 = function (a) {
        this._write17(a);
    };
    Biff8RecordStream.prototype._readUnicodeString = function (a) {
        var b = this._readBytes(a * 2);
        return Encoding.unicode.getString(b);
    };
    Biff8RecordStream.prototype._writeUnicodeString = function (a) {
        this._write2(Encoding.unicode.getBytes1(a));
    };
    Biff8RecordStream.prototype._fh = function () {
        var a = this._readUInt32();
        var b = this.position;
        var c = this._readNullTerminatedUnicodeString();
        if (a == this.position - b) {
            return c;
        }
        var d = new Guid(1, this._readBytes(16));
        var e = this._readUInt32();
        var f = this._readUInt32();
        var g = ExcelUtils.bu(f, 0);
        var h = ExcelUtils.bu(f, 1);
        var i = ExcelUtils.bu(f, 2);
        var j = ExcelUtils.bu(f, 3);
        var k = ExcelUtils.bu(f, 4);
        var l = ExcelUtils.bu(f, 5);
        var m = ExcelUtils.bu(f, 6);
        var n = ExcelUtils.bu(f, 7);
        var o = ExcelUtils.bu(f, 8);
        var p = ExcelUtils.bu(f, 9);
        var q = ExcelUtils.bu(f, 10);
        var r = ExcelUtils.bu(f, 11);
        var s = ExcelUtils.bu(f, 12);
        var t = ExcelUtils.bu(f, 13);
        var u = ExcelUtils.bu(f, 14);
        var v = ExcelUtils.bu(f, 15);
        return c;
    };
    Biff8RecordStream.prototype._h8 = function (a) {
        var b;
        try {
            b = Uri.escapeUriString(a.toString());
        }
        catch (c) {
            b = a.originalString;
        }
        this._h7(b);
    };
    Biff8RecordStream.prototype._h7 = function (a) {
        var b = intSToU(((a.length + 1) * 2 + 24));
        this._write18(b);
        this._writeNullTerminatedUnicodeString(a);
        this._write2(Biff8RecordStream._e5.toByteArray());
        this._write18(intSToU(0));
        var c = 43941;
        this._write18(c);
    };
    Biff8RecordStream.prototype._readXFExtGradient = function () {
        var a = new XFExtGradientInfo();
        a.g = this._readInt32();
        a.b = this._readDouble();
        a.d = this._readDouble();
        a.e = this._readDouble();
        a.f = this._readDouble();
        a.c = this._readDouble();
        var b = this._readUInt32();
        a.a = new Array(b);
        for (var c = 0; c < b; c++) {
            a.a[c] = this._readGradStop();
        }
        return a;
    };
    Biff8RecordStream.prototype.writeXFExtGradient = function (a) {
        var b = 0;
        var c = 0;
        var d = 0;
        var e = 0;
        var f = 0;
        var g = 0;
        var h = typeCast(CellFillLinearGradient.$, a);
        var i = typeCast(CellFillRectangularGradient.$, a);
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
        for (var j = 0; j < a.stops.count; j++) {
            this._writeGradStop(a.stops.item(j));
        }
    };
    Biff8RecordStream.prototype._readXFExtNoFRT = function (a) {
        var b = this._readUInt16();
        var c = this._readUInt16();
        var d = this._readUInt16();
        var e = this._readUInt16();
        for (var f = 0; f < e; f++) {
            var g = this._readExtProp();
            g.b(this._loadManagerBiff8, a);
        }
    };
    Biff8RecordStream.prototype._writeXFExtNoFRT = function (a) {
        var b = a._cg();
        if (b.count == 0) {
            return;
        }
        this._write17(0);
        this._write17(65535);
        this._write17(0);
        this._write17(b.count);
        for (var c = 0; c < b.count; c++) {
            this._writeExtProp(b._inner[c]);
        }
    };
    Biff8RecordStream.prototype._readXFProp = function () {
        var a = this._readUInt16();
        var b = this._readUInt16();
        switch (a) {
            case 7:
            case 10:
            case 12:
            case 8:
            case 9:
            case 6:
            case 11:
                var c = void 0;
                var d = void 0;
                var e = this._f8(c, d);
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
                var f = void 0;
                var g = void 0;
                var h = this._readFormat(f, g);
                f = h.p0;
                g = h.p1;
                return new XFPropNumberFormat(f, g);
            case 41: return new XFPropNumberFormatId(this._readUInt16());
            case 0:
                var i = this.readByte();
                return new XFPropFillPattern(i);
            case 18: return new XFPropTextIndentationLevel(this._readUInt16());
            case 42: return new XFPropTextIndentationLevelRelative(this._readInt16());
            case 17: return new XFPropTextRotation(this.readByte());
            case 16: return new XFPropVerticalAlignment(this._readVertAlign());
            default: return null;
        }
    };
    Biff8RecordStream.prototype._writeXFProp = function (a) {
        var b = this.position;
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
                var c = a;
                var d = c.f(this.saveManager._b);
                var e = c.d;
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
                var f = typeCast(XFPropNumberFormat.$, a);
                var g = f.f;
                var h = f.d;
                var i = this._readFormat(g, h);
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
        var j = this.position;
        var k = (j - b);
        this.position = b + 2;
        this._write17(k);
        this.position = j;
    };
    Biff8RecordStream.prototype._f8 = function (a, b) {
        a = this._readXFPropColor();
        b = this._readUInt16();
        return {
            p0: a,
            p1: b
        };
    };
    Biff8RecordStream.prototype._ic = function (a, b) {
        this._writeXFPropColor(a, 0);
        this._write17(b);
    };
    Biff8RecordStream.prototype._readXFPropColor = function () {
        var a = new XFPropColorInfo();
        a.b = this.readByte();
        a.a = this.readByte();
        a.c = this._readInt16();
        a.d = this._readUInt32();
        return a;
    };
    Biff8RecordStream.prototype._writeXFPropColor = function (a, b) {
        var c;
        var d;
        var e;
        var f = this._fm(a, b, c, d, e);
        c = f.p2;
        d = f.p3;
        e = f.p4;
        var g = 255;
        var h = e;
        if (c == 3 || c == 1) {
            g = e;
        }
        var i = truncate(MathUtilities.f(d * 32767));
        var j = 0;
        var k = ExcelUtils.f5(j, true, 0);
        j = k.p0;
        var l = ExcelUtils.e0(j, c, 1, 7);
        j = l.p0;
        this._write9(j);
        this._write9(g);
        this._write11(i);
        this._write18(h);
    };
    Biff8RecordStream.prototype._readXFPropGradientFill = function () {
        var a = this._readUInt32();
        var b = this._readDouble();
        var c = this._readDouble();
        var d = this._readDouble();
        var e = this._readDouble();
        var f = this._readDouble();
        return new XFPropGradientFill(a != 0, b, c, d, e, f);
    };
    Biff8RecordStream.prototype._writeXFPropGradientFill = function (a) {
        this._write18(intSToU((a.d ? 1 : 0)));
        this._write10(a.j);
        this._write10(a.l);
        this._write10(a.m);
        this._write10(a.n);
        this._write10(a.k);
    };
    Biff8RecordStream.prototype._readXFPropGradientStop = function () {
        var a = this._readUInt16();
        var b = this._readDouble();
        var c = this._readXFPropColor();
        return new XFPropGradientStopLoaded(c, b);
    };
    Biff8RecordStream.prototype._writeXFPropGradientStop = function (a) {
        this._write17(0);
        this._write10(a.e);
        this._writeXFPropColor(a.c(this.saveManager._b), 1);
    };
    Biff8RecordStream.prototype._readXFProps = function () {
        var a = this._readUInt16();
        var b = this._readUInt16();
        var c = new Array(b);
        for (var d = 0; d < b; d++) {
            c[d] = this._readXFProp();
        }
        return c;
    };
    Biff8RecordStream._applyXFProps = function (a, b, c, d) {
        var e = Nullable$1.toNullable(FillPatternStyle_$type, null);
        var f = null;
        var g = null;
        var h = null;
        var i = new List$1(CellFillGradientStop.$, 0);
        for (var j = 0; j < d.length; j++) {
            var k = d[j];
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
                    var l = k;
                    i.add(new CellFillGradientStop(l.c(a), l.e));
                    break;
                default:
                    k.b(a, b);
                    break;
            }
        }
        if (h != null && i.count >= 2) {
            if (h.d) {
                b.fill = new (CellFillRectangularGradient.bind.apply(CellFillRectangularGradient, tslib_1.__spread([void 0, h.l, h.n, h.m, h.k], i.toArray())))();
            }
            else {
                b.fill = new (CellFillLinearGradient.bind.apply(CellFillLinearGradient, tslib_1.__spread([void 0, h.j], i.toArray())))();
            }
        }
        else if (e.hasValue || WorkbookColorInfo.l_op_Inequality(f, null) || WorkbookColorInfo.l_op_Inequality(g, null)) {
            if (e.hasValue == false) {
                e = Nullable$1.toNullable(FillPatternStyle_$type, 1);
            }
            b.fill = new CellFillPattern(f, g, e.value, b, true);
        }
    };
    Biff8RecordStream.prototype._writeXFProps = function (a) {
        this._write17(0);
        var b = a._ch();
        this._write17(b.count);
        for (var c = 0; c < b.count; c++) {
            this._writeXFProp(b._inner[c]);
        }
    };
    Biff8RecordStream.prototype._readVertAlign = function () {
        return this.readByte();
    };
    Biff8RecordStream.prototype._writeVertAlign = function (a) {
        this._write9(a);
    };
    Biff8RecordStream.prototype._readXLUnicodeString = function () {
        var a = this._readUInt16();
        return this._readXLUnicodeStringNoCch(a);
    };
    Biff8RecordStream.prototype._writeXLUnicodeString = function (a) {
        this._write17(a.length);
        this._writeXLUnicodeStringNoCch(a);
    };
    Biff8RecordStream.prototype._readXLUnicodeStringNoCch = function (a) {
        var b = this.readByte();
        var c = ExcelUtils.bt(b, 0);
        var d = ExcelUtils.c4(b, 1, 7);
        var e = new Array(a * 2);
        for (var f = 0; f < e.length; f++) {
            e[f] = this.readByte();
            if (c == false) {
                e[++f] = 0;
            }
        }
        return Encoding.unicode.getString(e);
    };
    Biff8RecordStream.prototype._writeXLUnicodeStringNoCch = function (a) {
        this._writeXLUnicodeStringNoCch1(a, false);
    };
    Biff8RecordStream.prototype._writeXLUnicodeStringNoCch1 = function (a, b) {
        var c = Encoding.unicode.getBytes1(a);
        var d = false;
        var e = new Array(intDivide(c.length, 2));
        if (b) {
            d = true;
        }
        else {
            for (var f = 1; f < c.length; f += 2) {
                if (c[f] != 0) {
                    d = true;
                    break;
                }
                e[intDivide(f, 2)] = c[f - 1];
            }
        }
        var g = d ? c : e;
        this.writeByte(Convert.toByte(d));
        this._write2(g);
    };
    Biff8RecordStream.prototype._e0 = function () {
        return this._readDouble();
    };
    Biff8RecordStream.prototype._il = function (a) {
        this._write10(a);
    };
    Biff8RecordStream.prototype._g2 = function (a, b) {
        if (b == null) {
            return;
        }
        var c = this.position;
        this._writeDXFN12List(b);
        var d = this.position;
        var e = (d - c);
        this.position = a;
        this._write12(e);
        this.position = d;
    };
    Object.defineProperty(Biff8RecordStream.prototype, "_loadManagerBiff8", {
        get: function () {
            return this._loadManager;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Biff8RecordStream.prototype, "_nextBlockType", {
        get: function () {
            return this._nextBlockTypeInternal;
        },
        set: function (a) {
            this._nextBlockTypeInternal = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Biff8RecordStream.prototype, "_parentStream", {
        get: function () {
            return this.parentStreamRaw;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Biff8RecordStream.prototype, "_recordType", {
        get: function () {
            return this._bf;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Biff8RecordStream.prototype, "_saveManagerBiff8", {
        get: function () {
            return this.saveManager;
        },
        enumerable: true,
        configurable: true
    });
    Biff8RecordStream.$t = markType(Biff8RecordStream, 'Biff8RecordStream', BiffRecordStream.$);
    Biff8RecordStream._headerSize = 4;
    Biff8RecordStream._maxBlockSize = 8224;
    Biff8RecordStream._e6 = new Guid(2, 2045430240, 47865, 4558, 140, 130, 0, 170, 0, 75, 169, 11);
    Biff8RecordStream._e3 = new Guid(2, 771, 0, 0, 192, 0, 0, 0, 0, 0, 0, 70);
    Biff8RecordStream._e2 = new Guid(2, 777, 0, 0, 192, 0, 0, 0, 0, 0, 0, 70);
    Biff8RecordStream._e1 = new Guid(2, 773, 0, 0, 192, 0, 0, 0, 0, 0, 0, 70);
    Biff8RecordStream._e4 = new Guid(2, 772, 0, 0, 192, 0, 0, 0, 0, 0, 0, 70);
    Biff8RecordStream._e5 = new Guid(2, 4102117497, 7483, 18559, 175, 44, 130, 93, 196, 133, 39, 99);
    return Biff8RecordStream;
}(BiffRecordStream));
export { Biff8RecordStream };
/**
 * @hidden
 */
var Biff8RecordStream_AFDOper = /** @class */ (function (_super) {
    tslib_1.__extends(Biff8RecordStream_AFDOper, _super);
    function Biff8RecordStream_AFDOper(a) {
        var _rest = [];
        for (var _0 = 1; _0 < arguments.length; _0++) {
            _rest[_0 - 1] = arguments[_0];
        }
        var _this = _super.call(this) || this;
        _this.c = 0;
        _this.a = 2;
        _this.l = null;
        _this.m = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    var c = _rest[0];
                    if (c.length > 255) {
                        c = c.substr(0, 255);
                    }
                    _this.m = c;
                    _this.c = 6;
                    _this.l = c.length;
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this.n(c, d);
                }
                break;
            case 3:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    if (d == null) {
                        return _this;
                    }
                    var e = void 0;
                    var f = void 0;
                    var g = d._q(c, e, f);
                    e = g.p1;
                    f = g.p2;
                    _this.n(f, e);
                }
                break;
        }
        return _this;
    }
    Biff8RecordStream_AFDOper.prototype.n = function (a, b) {
        this.a = b;
        var c = typeCast(String_$type, a);
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
    };
    Object.defineProperty(Biff8RecordStream_AFDOper.prototype, "k", {
        get: function () {
            if (this.c == 6) {
                return this.m;
            }
            return this.l;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Biff8RecordStream_AFDOper.prototype, "b", {
        get: function () {
            if (this.c != 6) {
                return false;
            }
            return stringContains(this.m, "*") || stringContains(this.m, "?");
        },
        enumerable: true,
        configurable: true
    });
    Biff8RecordStream_AFDOper.$t = markType(Biff8RecordStream_AFDOper, 'Biff8RecordStream_AFDOper');
    return Biff8RecordStream_AFDOper;
}(Base));
export { Biff8RecordStream_AFDOper };
/**
 * @hidden
 */
var Biff8RecordStream_Stxp = /** @class */ (function (_super) {
    tslib_1.__extends(Biff8RecordStream_Stxp, _super);
    function Biff8RecordStream_Stxp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.e = 0;
        _this.a = null;
        _this.f = 0;
        _this.g = 0;
        _this.d = 0;
        _this.c = 0;
        _this.b = 0;
        return _this;
    }
    Biff8RecordStream_Stxp.$t = markType(Biff8RecordStream_Stxp, 'Biff8RecordStream_Stxp');
    return Biff8RecordStream_Stxp;
}(Base));
export { Biff8RecordStream_Stxp };
/**
 * @hidden
 */
var Biff8RecordStream_Ts = /** @class */ (function (_super) {
    tslib_1.__extends(Biff8RecordStream_Ts, _super);
    function Biff8RecordStream_Ts() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.a = false;
        _this.b = false;
        return _this;
    }
    Biff8RecordStream_Ts.$t = markType(Biff8RecordStream_Ts, 'Biff8RecordStream_Ts');
    return Biff8RecordStream_Ts;
}(Base));
export { Biff8RecordStream_Ts };
/**
 * @hidden
 */
var ObjExtensionMethods = /** @class */ (function (_super) {
    tslib_1.__extends(ObjExtensionMethods, _super);
    function ObjExtensionMethods() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObjExtensionMethods.w = function (a, b) {
        a.d = ObjExtensionMethods.d(b);
        var c = a.d.b;
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
            var d = b._av._readUInt32();
        }
    };
    ObjExtensionMethods.an = function (a, b) {
        if (a.d == null) {
            return;
        }
        ObjExtensionMethods.aa(a.d, b);
        var c = a.d.b;
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
    };
    ObjExtensionMethods.a = function (a) {
        if (ObjUtilities.a(a, 10) == false) {
            return null;
        }
        var b = a._av;
        var c = new FtCbls();
        var d = b._readUInt16();
        c.b = b._readUInt32();
        c.c = b._readUInt32();
        c.d = b._readUInt32();
        return c;
    };
    ObjExtensionMethods.x = function (a, b) {
        var c = b._ci;
        c._write17(10);
        c._write17(12);
        c._write18(a.b);
        c._write18(a.c);
        c._write18(a.d);
    };
    ObjExtensionMethods.b = function (a, b) {
        if (ObjUtilities.a(a, 18) == false) {
            return null;
        }
        var c = a._av;
        var d = new FtCblsData();
        var e = c._readUInt16();
        d.c = c._readUInt16();
        d.b = c._readUInt16();
        var f = c._readUInt16();
        var g = c._readUInt16();
        d.a = (g & 1) == 1;
        return d;
    };
    ObjExtensionMethods.y = function (a, b, c) {
        var d = b._ci;
        var e = 0;
        if (a.a) {
            e |= 1;
        }
        d._write17(18);
        d._write17(8);
        d._write17(a.c);
        d._write17(a.b);
        d._write17(0);
        d._write17(e);
    };
    ObjExtensionMethods.c = function (a) {
        if (ObjUtilities.a(a, 7) == false) {
            return null;
        }
        var b = a._av;
        var c = new FtCf();
        var d = b._readUInt16();
        c.a = b._readUInt16();
        return c;
    };
    ObjExtensionMethods.z = function (a, b) {
        var c = b._ci;
        c._write17(7);
        c._write17(2);
        c._write17(a.a);
    };
    ObjExtensionMethods.d = function (a) {
        if (ObjUtilities.a(a, 21) == false) {
            return null;
        }
        var b = a._av;
        var c = new FtCmo(0);
        var d = b._readUInt16();
        c.a = b._readUInt16();
        c.s = b._readUInt16();
        c.u = b._readUInt16();
        c.w = b._readUInt32();
        c.x = b._readUInt32();
        c.y = b._readUInt32();
        return c;
    };
    ObjExtensionMethods.aa = function (a, b) {
        var c = b._ci;
        c._write17(21);
        c._write17(18);
        c._write17(a.a);
        c._write17(a.s);
        c._write17(a.u);
        c._write18(a.w);
        c._write18(a.x);
        c._write18(a.y);
    };
    ObjExtensionMethods.e = function (a) {
        if (ObjUtilities.a(a, 16) == false) {
            return null;
        }
        var b = a._av;
        var c = new FtEdoData();
        var d = b._readUInt16();
        c.d = b._readUInt16();
        var e = b._readUInt16();
        c.a = (e != 0);
        var f = b._readUInt16();
        c.b = (f != 0);
        c.c = b._readUInt16();
        return c;
    };
    ObjExtensionMethods.ab = function (a, b) {
        var c = b._ci;
        c._write17(16);
        c._write17(8);
        c._write17(a.d);
        c._write17((a.a ? 1 : 0));
        c._write17((a.b ? 1 : 0));
        c._write17(a.c);
    };
    ObjExtensionMethods.f = function (a) {
        if (ObjUtilities.a(a, 15) == false) {
            return null;
        }
        var b = a._av;
        var c = new FtGboData();
        var d = b._readUInt16();
        c.b = b._readUInt16();
        var e = b._readUInt16();
        var f = b._readUInt16();
        c.a = (f & 1) == 1;
        return c;
    };
    ObjExtensionMethods.ac = function (a, b) {
        var c = b._ci;
        c._write17(15);
        c._write17(6);
        c._write17(a.b);
        c._write17(0);
        c._write17((a.a ? 1 : 0));
    };
    ObjExtensionMethods.g = function (a) {
        if (ObjUtilities.a(a, 6) == false) {
            return null;
        }
        var b = a._av;
        var c = new FtGmo();
        var d = b._readUInt16();
        c.b = b._readUInt16();
        return c;
    };
    ObjExtensionMethods.ad = function (a, b) {
        var c = b._ci;
        c._write17(6);
        c._write17(2);
        c._write17(a.b);
    };
    ObjExtensionMethods.h = function (a, b) {
        if (ObjUtilities.a(a, 19) == false) {
            return null;
        }
        var c = a._av;
        var d = new FtLbsData();
        d.f = c._readUInt16();
        if (d.f != 0) {
            d.d = ObjExtensionMethods.r(a);
            d.g = c._readUInt16();
            d.j = c._readUInt16();
            d.h = c._readUInt16();
            var e = (d.h & 2) == 2;
            var f = ((d.h & 48) >> 4);
            d.i = c._readUInt16();
            if (b.e.b == 20) {
                d.c = ObjExtensionMethods.p(a);
            }
            if (e) {
                d.b = new Array(d.g);
                for (var g = 0; g < d.g; g++) {
                    d.b[g] = c._readXLUnicodeString();
                }
            }
            if (f != 0) {
                d.a = new Array(d.g);
                for (var h = 0; h < d.g; h++) {
                    var i = c.readByte();
                    d.a[h] = (i != 0);
                }
            }
        }
        return d;
    };
    ObjExtensionMethods.ae = function (a, b, c) {
        var d = b._ci;
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
            for (var e = 0; e < a.g; e++) {
                d._writeXLUnicodeString(a.b[e]);
            }
        }
        if (a.a != null) {
            for (var f = 0; f < a.g; f++) {
                d._write9((a.a[f] ? 1 : 0));
            }
        }
    };
    ObjExtensionMethods.af = function (a, b) {
        if (a.c == null) {
            return;
        }
        b._ci._write17(4);
        ObjExtensionMethods.ap(a.c, b);
    };
    ObjExtensionMethods.i = function (a) {
        if (ObjUtilities.b(a, 4, false) == false) {
            return null;
        }
        var b = new FtMacro();
        b.b = ObjExtensionMethods.r(a);
        return b;
    };
    ObjExtensionMethods.j = function (a) {
        if (ObjUtilities.a(a, 13) == false) {
            return null;
        }
        var b = a._av;
        var c = new FtNts();
        var d = b._readUInt16();
        c.a = new Guid(1, b._readBytes(16));
        c.b = b._readUInt16();
        c.d = b._readUInt32();
        return c;
    };
    ObjExtensionMethods.ag = function (a, b) {
        var c = b._ci;
        c._write17(13);
        c._write17(22);
        c._write2(a.a.toByteArray());
        c._write17(a.b);
        c._write18(a.d);
    };
    ObjExtensionMethods.ah = function (a, b, c) {
        if (a.b == null) {
            return;
        }
        if (c.q.d && a.e == null) {
            return;
        }
        var d = b._ci;
        d._write17(9);
        d._write17(0);
        var e = d.position;
        ObjExtensionMethods.ap(a.c, b);
        var f = a.a();
        if (f != null && f._e.length >= 1 && typeCast(TblToken.$, f._e[0]) !== null) {
            d._write18(a.g);
            if (c.q.i) {
                d._write18(a.f);
            }
        }
        if (c.q.d) {
            ObjExtensionMethods.as(a.d, b);
        }
        var g = d.position;
        var h = (g - e);
        d.position = e - 2;
        d._write17(h);
        d.position = g;
    };
    ObjExtensionMethods.k = function (a, b) {
        if (ObjUtilities.b(a, 9, false) == false) {
            return null;
        }
        var c = a._av;
        var d = new FtPictFmla();
        var e = c._readUInt16();
        var f = c.position;
        d.b = ObjExtensionMethods.r(a);
        var g = d.a();
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
    };
    ObjExtensionMethods.l = function (a) {
        if (ObjUtilities.a(a, 8) == false) {
            return null;
        }
        var b = a._av;
        var c = new FtPioGrbit(true);
        var d = b._readUInt16();
        c.j = b._readUInt16();
        return c;
    };
    ObjExtensionMethods.ai = function (a, b) {
        var c = b._ci;
        c._write17(8);
        c._write17(2);
        c._write17(a.j);
    };
    ObjExtensionMethods.m = function (a) {
        if (ObjUtilities.a(a, 11) == false) {
            return null;
        }
        var b = a._av;
        var c = new FtRbo();
        var d = b._readUInt16();
        c.c = b._readUInt32();
        c.b = b._readUInt16();
        return c;
    };
    ObjExtensionMethods.aj = function (a, b) {
        var c = b._ci;
        c._write17(11);
        c._write17(6);
        c._write18(a.c);
        c._write17(a.b);
    };
    ObjExtensionMethods.n = function (a) {
        if (ObjUtilities.a(a, 17) == false) {
            return null;
        }
        var b = a._av;
        var c = new FtRboData();
        var d = b._readUInt16();
        c.d = b._readUInt16();
        var e = b._readUInt16();
        c.c = (e != 0);
        return c;
    };
    ObjExtensionMethods.ak = function (a, b) {
        var c = b._ci;
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
    };
    ObjExtensionMethods.o = function (a) {
        if (ObjUtilities.a(a, 12) == false) {
            return null;
        }
        var b = a._av;
        var c = new FtSbs();
        var d = b._readUInt16();
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
    };
    ObjExtensionMethods.al = function (a, b) {
        var c = b._ci;
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
    };
    ObjExtensionMethods.q = function (a) {
        var b = a._av;
        var c = new ObjectParsedFormula();
        var d = b._readUInt16();
        var e = (d & 61439);
        var f = (d & 32768);
        c.c = b._readUInt32();
        c.b = ObjExtensionMethods.v(a, e);
        return c;
    };
    ObjExtensionMethods.ao = function (a, b) {
        if (a.b == null) {
            return;
        }
        var c = b._ci;
        c._write17(0);
        c._write18(a.c);
        var d = c.position;
        ObjExtensionMethods.at(a.b, b);
        var e = c.position;
        var f = (e - d);
        c.position = d - 6;
        c._write17(f);
        c.position = e;
    };
    ObjExtensionMethods.r = function (a) {
        var b = a._av;
        var c = new ObjFmla();
        var d = b._readUInt16();
        var e = b.position;
        if (d > 0) {
            c.b = ObjExtensionMethods.q(a);
            var f = c.a();
            if (f != null && f._e.length >= 1 && typeCast(TblToken.$, f._e[0]) !== null) {
                c.d = ObjExtensionMethods.t(a);
            }
        }
        var g = d - (b.position - e);
        b._readBytes(g);
        return c;
    };
    ObjExtensionMethods.ap = function (a, b) {
        var c = a.a();
        var d = c != null && c._e.length >= 1 && typeCast(TblToken.$, c._e[0]) !== null;
        if (d && a.d == null) {
            return;
        }
        var e = b._ci;
        e._write17(0);
        if (a.b == null) {
            return;
        }
        var f = e.position;
        ObjExtensionMethods.ao(a.b, b);
        if (d) {
            ObjExtensionMethods.ar(a.d, e);
        }
        var g = e.position;
        var h = g - f;
        if (h % 4 != 0) {
            var i = (4 - (h % 4));
            e._write2(new Array(i));
            h += i;
        }
        e.position = f - 2;
        e._write17(h);
        e.seek(h, 1);
    };
    ObjExtensionMethods.aq = function (a, b, c) {
        if (a.a == null) {
            return;
        }
        var d;
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
    };
    ObjExtensionMethods.s = function (a, b) {
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
        var c = new ObjLinkFmla();
        c.a = ObjExtensionMethods.r(a);
        return c;
    };
    ObjExtensionMethods.u = function (a) {
        var b = new PictFmlaKey();
        var c = a._av._readUInt32();
        b.a = a._av._readBytes(c);
        b.b = ObjExtensionMethods.r(a);
        b.d = ObjExtensionMethods.r(a);
        return b;
    };
    ObjExtensionMethods.as = function (a, b) {
        if (a.b == null) {
            return;
        }
        if (a.d == null) {
            return;
        }
        var c = b._ci;
        c._write18(intSToU(a.a.length));
        c._write2(a.a);
        ObjExtensionMethods.ap(a.b, b);
        ObjExtensionMethods.ap(a.d, b);
    };
    ObjExtensionMethods.v = function (a, b) {
        var c = new Rgce();
        var d = 0;
        var e = a._av._readBytes(b);
        c.a = ((function () { var f = a._au(3, b, e, d); e = f.p2; d = f.p3; return f.ret; })());
        return c;
    };
    ObjExtensionMethods.at = function (a, b) {
        if (a.a == null) {
            return;
        }
        b._c2(a.a, false, false);
    };
    ObjExtensionMethods.p = function (a) {
        var b = a._av;
        var c = new LbsDropData();
        var d = b._readUInt16();
        c.a = (d & 3);
        c.c = b._readUInt16();
        c.d = b._readUInt16();
        var e = b.position;
        c.b = b._readXLUnicodeString();
        var f = b.position - e;
        if (f % 2 == 1) {
            b.readByte();
        }
        return c;
    };
    ObjExtensionMethods.am = function (a, b) {
        var c = 0;
        c |= a.a;
        b._write17(c);
        b._write17(a.c);
        b._write17(a.d);
        var d = b.position;
        b._writeXLUnicodeString(a.b);
        var e = b.position - d;
        if (e % 2 == 1) {
            b.writeByte(0);
        }
    };
    ObjExtensionMethods.t = function (a) {
        var b = new PictFmlaEmbedInfo();
        var c = a._av.readByte();
        var d = a._av.readByte();
        var e = a._av.readByte();
        if (d != 0) {
            b.a = a._av._readXLUnicodeStringNoCch(d);
        }
        return b;
    };
    ObjExtensionMethods.ar = function (a, b) {
        var c = 0;
        if (a.a != null) {
            c = a.a.length;
        }
        b.writeByte(3);
        b.writeByte(c);
        b.writeByte(0);
        b._writeXLUnicodeStringNoCch(a.a);
    };
    ObjExtensionMethods.$t = markType(ObjExtensionMethods, 'ObjExtensionMethods');
    return ObjExtensionMethods;
}(Base));
export { ObjExtensionMethods };
/**
 * @hidden
 */
var ObjUtilities = /** @class */ (function (_super) {
    tslib_1.__extends(ObjUtilities, _super);
    function ObjUtilities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObjUtilities.a = function (a, b) {
        return ObjUtilities.b(a, b, true);
    };
    ObjUtilities.b = function (a, b, c) {
        var d = a._av._readUInt16();
        if (d != b) {
            a._av.seek(-2, 1);
            return false;
        }
        return true;
    };
    ObjUtilities.$t = markType(ObjUtilities, 'ObjUtilities');
    return ObjUtilities;
}(Base));
export { ObjUtilities };
/**
 * @hidden
 */
var EscherRecordBase = /** @class */ (function (_super) {
    tslib_1.__extends(EscherRecordBase, _super);
    function EscherRecordBase(a, b, c) {
        var _this = _super.call(this) || this;
        _this.c = null;
        _this.f = 0;
        _this.h = 0;
        _this.j = 0;
        _this.f = a;
        _this.h = b;
        _this.j = c;
        return _this;
    }
    Object.defineProperty(EscherRecordBase.prototype, "d", {
        get: function () {
            return this.c;
        },
        set: function (a) {
            this.c = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EscherRecordBase.prototype, "i", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EscherRecordBase.prototype, "k", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            if (this.d != null) {
                if (this.j < a) {
                    this.d.k += a - this.j;
                }
                else {
                    this.d.k -= this.j - a;
                }
            }
            this.j = a;
        },
        enumerable: true,
        configurable: true
    });
    EscherRecordBase.prototype.toString = function () {
        return EnumUtil.getName(EscherRecordType_$type, this.e) + ": " + this.j;
    };
    EscherRecordBase.prototype.m = function (a) {
        var b = 0;
        b |= this.f;
        b |= ((this.h & 4095) << 4);
        b |= (this.e << 16);
        a._ci._write18(intSToU(b));
        a._ci._write18(this.j);
    };
    EscherRecordBase.b = function (a, b) {
        if (b === void 0) { b = null; }
        var c = a._av._readUInt32();
        var d = a._av._readUInt32();
        var e = (c & 15);
        var f = ((c & 65520) >>> 4);
        var g = ((u32BitwiseAnd(c, 4294901760)) >>> 16);
        var h = EscherRecordBase.a(g, e, f, d);
        if (h == null) {
            return h;
        }
        h.c = b;
        var i = a._av.position + d;
        if (h != null) {
            h.l(a);
        }
        a._av.position = i;
        return h;
    };
    EscherRecordBase.a = function (a, b, c, d) {
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
    };
    EscherRecordBase.$t = markType(EscherRecordBase, 'EscherRecordBase', Base.$, [IEscherRecord_$type]);
    return EscherRecordBase;
}(Base));
export { EscherRecordBase };
/**
 * @hidden
 */
var BLIP = /** @class */ (function (_super) {
    tslib_1.__extends(BLIP, _super);
    function BLIP(a) {
        var _rest = [];
        for (var _0 = 1; _0 < arguments.length; _0++) {
            _rest[_0 - 1] = arguments[_0];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    _this = _super.call(this, 0, 0, 0) || this;
                    _this.t = 0;
                    _this.r = 0;
                    _this.p = null;
                    _this.o = null;
                    _this.x = new Guid();
                    _this.u = 0;
                    _this.n = null;
                    _this.u = 255;
                    _this.p = c;
                    try {
                        var d = _this.p.d;
                        if (Base.equalsStatic(d, ImageFormat.c)) {
                            _this.r = 2;
                            _this.i = 980;
                        }
                        else if (Base.equalsStatic(d, ImageFormat.i)) {
                            _this.r = 3;
                            _this.i = 534;
                        }
                        else if (Base.equalsStatic(d, ImageFormat.f)) {
                            _this.r = 5;
                            _this.i = 1130;
                        }
                        else {
                            _this.r = 6;
                            _this.i = 1760;
                        }
                    }
                    catch (e) {
                        throw new InvalidOperationException(2, ExcelUtils.ef("LE_InvalidOperationException_ImageDisposed"), e);
                    }
                    {
                        var f = new MemoryStream(0);
                        try {
                            _this.z(f);
                            f.position = 0;
                            _this.o = new Array(f.length);
                            f.read(_this.o, 0, _this.o.length);
                        }
                        finally {
                            if (f != null) {
                                f.dispose();
                            }
                        }
                    }
                    _this.t = (_this.r + 61464);
                    _this.k = intSToU(_this.o.length) + 17;
                    _this.x = ExcelUtils.cr(_this.o);
                    if (_this.r == 2 || _this.r == 3) {
                        if (Guid.l_op_Inequality_Lifted(c.h, Nullable$1.toNullable(Guid.$, null))) {
                            _this.x = c.h.value;
                        }
                        _this.n = _this.o;
                        _this.k = intSToU((50 + _this.o.length));
                    }
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    var f = _rest[3];
                    _this = _super.call(this, d, e, f) || this;
                    _this.t = 0;
                    _this.r = 0;
                    _this.p = null;
                    _this.o = null;
                    _this.x = new Guid();
                    _this.u = 0;
                    _this.n = null;
                    _this.t = c;
                    _this.r = (_this.t - 61464);
                }
                break;
        }
        return _this;
    }
    BLIP.staticInit = function () {
        BLIP.v = new Dictionary$2(BLIPType_$type, Delegate_$type, 0);
        BLIP.v.item(5, function (a, b) { return a.p.i(b, ImageFormat.f); });
        BLIP.v.item(6, function (a, b) { return a.p.i(b, ImageFormat.g); });
        BLIP.w = new Dictionary$2(BLIPType_$type, Delegate_$type, 0);
        BLIP.w.item(5, function (a, b) { return a.ad(b); });
        BLIP.w.item(6, function (a, b) { return a.ad(b); });
        BLIP.w.item(2, function (a, b) { return a.ae(b); });
        BLIP.w.item(3, function (a, b) { return a.ae(b); });
    };
    BLIP.prototype.l = function (a) {
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
    };
    BLIP.prototype.m = function (a) {
        var _this = this;
        _super.prototype.m.call(this, a);
        var b;
        if (((function () { var c = BLIP.w.tryGetValue(_this.r, b); b = c.p1; return c.ret; })()) == false) {
            b = BLIP.w.item(5);
        }
        b(this, a);
    };
    BLIP.prototype.z = function (a) {
        var _this = this;
        var b;
        if (((function () { var c = BLIP.v.tryGetValue(_this.r, b); b = c.p1; return c.ret; })()) == false) {
            b = BLIP.v.item(5);
        }
        b(this, a);
    };
    BLIP.prototype.aa = function (a, b) {
        this.x = new Guid(1, a._av._readBytes(16));
        this.u = a._av.readByte();
        this.o = a._av._readBytes((this.k - 17));
        var c = new MemoryStream(2, this.o);
        this.p = new ExcelImage(1, b, c);
    };
    BLIP.prototype.ab = function (a) {
        this.x = new Guid(1, a._av._readBytes(16));
        this.u = a._av.readByte();
        var b = (this.k - 17);
        var c = new Array(14 + b);
        a._av.read(c, 14, b);
        var d = new MemoryStream(2, c);
        var e = new BinaryWriter(1, d);
        e.m(66);
        e.m(77);
        e.q(c.length);
        e.q(0);
        e.q(54);
        d.position = 0;
        this.p = new ExcelImage(1, ImageFormat.b, d);
    };
    BLIP.prototype.ac = function (a) {
        this.x = new Guid(1, a._av._readBytes(16));
        var b = a._av._readInt32();
        var c = a._av._readInt32();
        var d = a._av._readInt32();
        var e = a._av._readInt32();
        var f = a._av._readInt32();
        var g = a._av._readInt32();
        var h = a._av._readInt32();
        var i = a._av._readInt32();
        var j = a._av.readByte();
        var k = a._av.readByte();
        this.n = a._av._readBytes(i);
        this.p = new ExcelImage(0, ImageFormat.c, new MemoryStream(2, this.n), truncate(Workbook._er(a._b, ExcelUtils.c1(g), false, true)), truncate(Workbook._er(a._b, ExcelUtils.c1(h), true, true)), j == 0, this.x);
    };
    BLIP.prototype.ad = function (a) {
        a._ci._write2(this.x.toByteArray());
        a._ci._write9(this.u);
        a._ci._write2(this.o);
    };
    BLIP.prototype.ae = function (a) {
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
            var b = 254;
            if (this.p.e) {
                b = 0;
            }
            a._ci._write12(this.o.length);
            a._ci._write9(b);
            a._ci._write9(254);
            a._ci._write2(this.o);
        }
    };
    Object.defineProperty(BLIP.prototype, "s", {
        get: function () {
            return this.r;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BLIP.prototype, "q", {
        get: function () {
            return this.p;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BLIP.prototype, "y", {
        get: function () {
            return this.x;
        },
        enumerable: true,
        configurable: true
    });
    BLIP.prototype.get_e = function () {
        return this.t;
    };
    Object.defineProperty(BLIP.prototype, "e", {
        get: function () {
            return this.get_e();
        },
        enumerable: true,
        configurable: true
    });
    BLIP.$t = markType(BLIP, 'BLIP', EscherRecordBase.$);
    BLIP.v = null;
    BLIP.w = null;
    return BLIP;
}(EscherRecordBase));
export { BLIP };
/**
 * @hidden
 */
var EscherRecordContainerBase = /** @class */ (function (_super) {
    tslib_1.__extends(EscherRecordContainerBase, _super);
    function EscherRecordContainerBase(a, b, c) {
        var _this = _super.call(this, a, b, c) || this;
        _this.p = null;
        return _this;
    }
    EscherRecordContainerBase.prototype.r = function (a) {
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
    };
    EscherRecordContainerBase.prototype.n = function ($t) {
        var e_54, _0;
        if (this.p == null) {
            return null;
        }
        try {
            for (var _1 = tslib_1.__values(fromEnum(this.p)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var a = _2.value;
                if ($t.isAssignableFrom(getInstanceType(a))) {
                    return a;
                }
            }
        }
        catch (e_54_1) { e_54 = { error: e_54_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_54) throw e_54.error; }
        }
        return null;
    };
    EscherRecordContainerBase.prototype.l = function (a) {
        this.p = new List$1(EscherRecordBase.$, 0);
        var b = a._av.position + this.k;
        while (a._av.position < b) {
            if (a._av.position == a._av.length) {
                break;
            }
            var c = EscherRecordBase.b(a, this);
            if (c != null) {
                if (this.o(c)) {
                    this.p.add(c);
                }
                else {
                    c.d = null;
                }
            }
        }
    };
    EscherRecordContainerBase.prototype.m = function (a) {
        var e_55, _0;
        _super.prototype.m.call(this, a);
        if (this.p == null) {
            return;
        }
        try {
            for (var _1 = tslib_1.__values(fromEnum(this.p)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var b = _2.value;
                b.m(a);
            }
        }
        catch (e_55_1) { e_55 = { error: e_55_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_55) throw e_55.error; }
        }
    };
    EscherRecordContainerBase.prototype.toString = function () {
        var e_56, _0;
        var a = new StringBuilder(0);
        a.l("------------------------------");
        a.l("\n");
        a.l(_super.prototype.toString.call(this));
        a.l("\n\n");
        if (this.p != null) {
            try {
                for (var _1 = tslib_1.__values(fromEnum(this.p)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                    var b = _2.value;
                    a.l("\t");
                    a.l(stringReplace(b.toString(), "\n", "\n\t"));
                    a.l("\n");
                }
            }
            catch (e_56_1) { e_56 = { error: e_56_1 }; }
            finally {
                try {
                    if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
                }
                finally { if (e_56) throw e_56.error; }
            }
        }
        a.l("------------------------------");
        return a.toString();
    };
    Object.defineProperty(EscherRecordContainerBase.prototype, "q", {
        get: function () {
            return this.p == null ? 0 : this.p.count;
        },
        enumerable: true,
        configurable: true
    });
    EscherRecordContainerBase.$t = markType(EscherRecordContainerBase, 'EscherRecordContainerBase', EscherRecordBase.$);
    return EscherRecordContainerBase;
}(EscherRecordBase));
export { EscherRecordContainerBase };
/**
 * @hidden
 */
var BLIPStoreContainer = /** @class */ (function (_super) {
    tslib_1.__extends(BLIPStoreContainer, _super);
    function BLIPStoreContainer(a) {
        var e_57, _0;
        var _rest = [];
        for (var _1 = 1; _1 < arguments.length; _1++) {
            _rest[_1 - 1] = arguments[_1];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    _this = _super.call(this, 15, c.count, 0) || this;
                    try {
                        for (var _2 = tslib_1.__values(fromEnum(c)), _3 = _2.next(); !_3.done; _3 = _2.next()) {
                            var d = _3.value;
                            var e = new BLIP(0, d.a);
                            var f = new BLIPStoreEntry(0, e, d.d);
                            _this.r(f);
                        }
                    }
                    catch (e_57_1) { e_57 = { error: e_57_1 }; }
                    finally {
                        try {
                            if (_3 && !_3.done && (_0 = _2.return)) _0.call(_2);
                        }
                        finally { if (e_57) throw e_57.error; }
                    }
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this = _super.call(this, c, d, e) || this;
                }
                break;
        }
        return _this;
    }
    BLIPStoreContainer.prototype.o = function (a) {
        if (a.e == 61447) {
            return true;
        }
        if (61464 <= a.e && a.e <= 61719) {
            return true;
        }
        return false;
    };
    BLIPStoreContainer.prototype.get_e = function () {
        return 61441;
    };
    Object.defineProperty(BLIPStoreContainer.prototype, "e", {
        get: function () {
            return this.get_e();
        },
        enumerable: true,
        configurable: true
    });
    BLIPStoreContainer.$t = markType(BLIPStoreContainer, 'BLIPStoreContainer', EscherRecordContainerBase.$);
    return BLIPStoreContainer;
}(EscherRecordContainerBase));
export { BLIPStoreContainer };
/**
 * @hidden
 */
var BLIPStoreEntry = /** @class */ (function (_super) {
    tslib_1.__extends(BLIPStoreEntry, _super);
    function BLIPStoreEntry(a) {
        var _rest = [];
        for (var _0 = 1; _0 < arguments.length; _0++) {
            _rest[_0 - 1] = arguments[_0];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this = _super.call(this, 2, c.s, 36 + 8 + c.k) || this;
                    _this.p = 0;
                    _this.o = 0;
                    _this.r = new Guid();
                    _this.s = 0;
                    _this.t = 0;
                    _this.v = 0;
                    _this.u = 0;
                    _this.q = 0;
                    _this.n = null;
                    _this.p = c.s;
                    _this.o = c.s;
                    _this.r = c.y;
                    _this.s = 255;
                    _this.t = c.k + 8;
                    _this.v = d;
                    _this.q = 0;
                    _this.n = c;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this = _super.call(this, c, d, e) || this;
                    _this.p = 0;
                    _this.o = 0;
                    _this.r = new Guid();
                    _this.s = 0;
                    _this.t = 0;
                    _this.v = 0;
                    _this.u = 0;
                    _this.q = 0;
                    _this.n = null;
                }
                break;
        }
        return _this;
    }
    BLIPStoreEntry.prototype.l = function (a) {
        this.p = a._av.readByte();
        this.o = a._av.readByte();
        this.r = new Guid(1, a._av._readBytes(16));
        this.s = a._av._readUInt16();
        this.t = a._av._readUInt32();
        this.v = a._av._readUInt32();
        this.u = a._av._readUInt32();
        this.q = a._av.readByte();
        var b = a._av.readByte();
        a._av.readByte();
        a._av.readByte();
        if (this.t > 0) {
            this.n = EscherRecordBase.b(a);
            a._b3.add(new WorkbookSerializationDataExcel2003_ImageHolder(this.n.q, this.v));
        }
        else {
            a._b3.add(new WorkbookSerializationDataExcel2003_ImageHolder(null, this.v));
        }
    };
    BLIPStoreEntry.prototype.m = function (a) {
        _super.prototype.m.call(this, a);
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
    };
    BLIPStoreEntry.prototype.toString = function () {
        var a = new StringBuilder(0);
        a.l("------------------------------");
        a.l("\n");
        a.l(_super.prototype.toString.call(this));
        a.l("\n\n");
        a.l("Reference Count on the BLIP: " + this.v);
        a.l("\n");
        a.l("------------------------------");
        return a.toString();
    };
    BLIPStoreEntry.prototype.get_e = function () {
        return 61447;
    };
    Object.defineProperty(BLIPStoreEntry.prototype, "e", {
        get: function () {
            return this.get_e();
        },
        enumerable: true,
        configurable: true
    });
    BLIPStoreEntry.$t = markType(BLIPStoreEntry, 'BLIPStoreEntry', EscherRecordBase.$);
    return BLIPStoreEntry;
}(EscherRecordBase));
export { BLIPStoreEntry };
/**
 * @hidden
 */
var CalloutRule = /** @class */ (function (_super) {
    tslib_1.__extends(CalloutRule, _super);
    function CalloutRule(a, b, c) {
        var _this = _super.call(this, a, b, c) || this;
        _this.n = 0;
        _this.o = 0;
        return _this;
    }
    CalloutRule.prototype.l = function (a) {
        var _this = this;
        this.n = a._av._readUInt32();
        this.o = a._av._readUInt32();
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c;
        var d = ((function () { var e = b._da(_this.o, c); c = e.p1; return e.ret; })());
        if (d == null) {
            return;
        }
        d._f = this;
    };
    CalloutRule.prototype.m = function (a) {
        _super.prototype.m.call(this, a);
        a._ci._write18(this.n);
        a._ci._write18(this.o);
    };
    Object.defineProperty(CalloutRule.prototype, "shapeId", {
        get: function () {
            return this.o;
        },
        set: function (a) {
            this.o = a;
        },
        enumerable: true,
        configurable: true
    });
    CalloutRule.prototype.get_e = function () {
        return 61463;
    };
    Object.defineProperty(CalloutRule.prototype, "e", {
        get: function () {
            return this.get_e();
        },
        enumerable: true,
        configurable: true
    });
    CalloutRule.$t = markType(CalloutRule, 'CalloutRule', EscherRecordBase.$, [ICalloutRule_$type]);
    return CalloutRule;
}(EscherRecordBase));
export { CalloutRule };
/**
 * @hidden
 */
var ChildAnchor = /** @class */ (function (_super) {
    tslib_1.__extends(ChildAnchor, _super);
    function ChildAnchor(a) {
        var _rest = [];
        for (var _0 = 1; _0 < arguments.length; _0++) {
            _rest[_0 - 1] = arguments[_0];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    _this = _super.call(this, 0, 0, 16) || this;
                    _this.n = null;
                    _this.n = ExcelUtils.hb(c._getBoundsInTwips());
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this = _super.call(this, c, d, e) || this;
                    _this.n = null;
                }
                break;
        }
        return _this;
    }
    ChildAnchor.prototype.l = function (a) {
        this.n = a._av._readRect();
    };
    ChildAnchor.prototype.m = function (a) {
        _super.prototype.m.call(this, a);
        a._ci._writeEMURect(this.n);
    };
    ChildAnchor.prototype.toString = function () {
        var a = new StringBuilder(0);
        a.l("------------------------------");
        a.l("\n");
        a.l(_super.prototype.toString.call(this));
        a.l("\n\n");
        a.l("Shape Bounds (EMUS): " + this.n);
        a.l("\n");
        a.l("------------------------------");
        return a.toString();
    };
    ChildAnchor.prototype.get_e = function () {
        return 61455;
    };
    Object.defineProperty(ChildAnchor.prototype, "e", {
        get: function () {
            return this.get_e();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChildAnchor.prototype, "o", {
        get: function () {
            return this.n;
        },
        enumerable: true,
        configurable: true
    });
    ChildAnchor.$t = markType(ChildAnchor, 'ChildAnchor', EscherRecordBase.$);
    return ChildAnchor;
}(EscherRecordBase));
export { ChildAnchor };
/**
 * @hidden
 */
var ClientAnchor = /** @class */ (function (_super) {
    tslib_1.__extends(ClientAnchor, _super);
    function ClientAnchor(a) {
        var _rest = [];
        for (var _0 = 1; _0 < arguments.length; _0++) {
            _rest[_0 - 1] = arguments[_0];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    _this = _super.call(this, 0, 0, 18) || this;
                    _this.n = 0;
                    _this.s = null;
                    _this.t = null;
                    _this.o = null;
                    _this.p = null;
                    _this.n = c.positioningMode;
                    if (c.topLeftCornerCell.worksheet == null || c.bottomRightCornerCell.worksheet == null) {
                        return;
                    }
                    _this.s = { $type: Point_$type, x: c._ah.m, y: c._ah.o };
                    _this.o = { $type: Point_$type, x: c._ad.m, y: c._ad.o };
                    _this.t = ClientAnchor.q(c._topLeftCornerPosition$i);
                    _this.p = ClientAnchor.q(c._bottomRightCornerPosition$i);
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this = _super.call(this, c, d, e) || this;
                    _this.n = 0;
                    _this.s = null;
                    _this.t = null;
                    _this.o = null;
                    _this.p = null;
                }
                break;
        }
        return _this;
    }
    ClientAnchor.q = function (a) {
        return { $type: Point_$type, x: truncate(MathUtilities.f((a.x / 100) * 1024)), y: truncate(MathUtilities.f((a.y / 100) * 256)) };
    };
    ClientAnchor.r = function (a) {
        var b = Math.max(0, (a.x * 100) / 1024);
        var c = Math.max(0, (a.y * 100) / 256);
        return { $type: Point_$type, x: b, y: c };
    };
    ClientAnchor.prototype.l = function (a) {
        this.n = a._av._readUInt16();
        var b = a._av._readUInt16();
        var c = a._av._readUInt16();
        var d = a._av._readUInt16();
        var e = a._av._readUInt16();
        var f = a._av._readUInt16();
        var g = a._av._readUInt16();
        var h = a._av._readUInt16();
        var i = a._av._readUInt16();
        this.s = { $type: Point_$type, x: b, y: d };
        this.t = { $type: Point_$type, x: c, y: e };
        this.o = { $type: Point_$type, x: f, y: h };
        this.p = { $type: Point_$type, x: g, y: i };
        var j = a._ai.a(Worksheet.$);
        if (j == null) {
            return;
        }
        var k = a._ai.a(WorksheetShape.$);
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
    };
    ClientAnchor.prototype.m = function (a) {
        _super.prototype.m.call(this, a);
        a._ci._write17(this.n);
        a._ci._write17(truncate(this.s.x));
        a._ci._write17(truncate(this.t.x));
        a._ci._write17(truncate(this.s.y));
        a._ci._write17(truncate(this.t.y));
        a._ci._write17(truncate(this.o.x));
        a._ci._write17(truncate(this.p.x));
        a._ci._write17(truncate(this.o.y));
        a._ci._write17(truncate(this.p.y));
    };
    ClientAnchor.prototype.toString = function () {
        var a = new StringBuilder(0);
        a.l("------------------------------");
        a.l("\n");
        a.l(_super.prototype.toString.call(this));
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
    };
    ClientAnchor.prototype.get_e = function () {
        return 61456;
    };
    Object.defineProperty(ClientAnchor.prototype, "e", {
        get: function () {
            return this.get_e();
        },
        enumerable: true,
        configurable: true
    });
    ClientAnchor.$t = markType(ClientAnchor, 'ClientAnchor', EscherRecordBase.$);
    return ClientAnchor;
}(EscherRecordBase));
export { ClientAnchor };
/**
 * @hidden
 */
var ClientData = /** @class */ (function (_super) {
    tslib_1.__extends(ClientData, _super);
    function ClientData(a) {
        var _rest = [];
        for (var _0 = 1; _0 < arguments.length; _0++) {
            _rest[_0 - 1] = arguments[_0];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    _this = _super.call(this, 0, 0, 0) || this;
                    _this.o = null;
                    _this.o = c;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this = _super.call(this, c, d, e) || this;
                    _this.o = null;
                }
                break;
        }
        return _this;
    }
    ClientData.prototype.l = function (a) {
        var b = this.n(a);
        a._av._appendNextRecordIfType(236);
        if (b == null) {
            return;
        }
        var c = a._ai.a(WorksheetShape.$);
        if (c == null) {
            return;
        }
        c._h = b;
        if (b != null && b.e != null && b.e.b == 25) {
            var d = typeCast(UnknownShape.$, c);
            if (d != null) {
                var e = new WorksheetCellComment(d);
                a._ai.m(d, e);
                a._b4.add(e);
            }
        }
    };
    ClientData.prototype.n = function (a) {
        if (nullableNotEquals(a._av._readNextBlockType(), 93)) {
            return null;
        }
        var b = new Obj(0);
        {
            var c = new Biff8RecordStream(1, a);
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
            var d = a._ca.position;
            {
                var e = new Biff8RecordStream(1, a);
                try {
                }
                finally {
                    if (e != null) {
                        e.dispose();
                    }
                }
            }
            var f = new List$1(FontXInfo.$, 0);
            var g = new List$1(Formula.$, 0);
            var _loop_8 = function () {
                {
                    var h = new Biff8RecordStream(1, a);
                    try {
                        switch (h._recordType) {
                            case 4177:
                                {
                                    var i_2 = h._readBytes(h.length);
                                    var j_2 = 6;
                                    var k = ((function () { var l = a._at(0, i_2, j_2); i_2 = l.p1; j_2 = l.p2; return l.ret; })());
                                    g.add(k);
                                }
                                break;
                            case 4134:
                                {
                                    var l = h._readUInt16();
                                    f.add(new FontXInfo(l, a));
                                }
                                break;
                        }
                        if (h._recordType == 10) {
                            return "break";
                        }
                    }
                    finally {
                        if (h != null) {
                            h.dispose();
                        }
                    }
                }
            };
            while (true) {
                var state_3 = _loop_8();
                if (state_3 === "break")
                    break;
            }
            var m = a._ca.position;
            a._ca.position = d;
            var n = new Array(m - d);
            a._ca.read(n, 0, n.length);
            var o = typeCast(UnknownShape.$, a._ai.h());
            var p = void 0;
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
        var q = this.n(a);
        return b;
    };
    ClientData.prototype.m = function (a) {
        _super.prototype.m.call(this, a);
        if (this.o._h == null) {
            this.o._h = new Obj(1, this.o);
        }
        var b = this.o._h.e;
        {
            var c = new Biff8RecordStream(3, a, 93);
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
            var d = typeCast(WorksheetChart.$, this.o);
            if (d != null && d._ec != null) {
                var e = 0;
                var f = 0;
                var g = d._ec.a;
                var h = 0;
                while (h < g.length) {
                    var i = BitConverter.w(g, h);
                    var j = BitConverter.w(g, h + 2);
                    var k = h + 4;
                    {
                        var l = new Biff8RecordStream(3, a, i);
                        try {
                            var t1 = i;
                            L0: while (true) {
                                switch (t1) {
                                    case 4177:
                                        {
                                            if (d._g3.count <= f) {
                                                t1 = void 0;
                                                continue L0;
                                            }
                                            var m = d._g3._inner[f++];
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
                                            var n = d._g4._inner[e++];
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
    };
    ClientData.prototype.get_e = function () {
        return 61457;
    };
    Object.defineProperty(ClientData.prototype, "e", {
        get: function () {
            return this.get_e();
        },
        enumerable: true,
        configurable: true
    });
    ClientData.$t = markType(ClientData, 'ClientData', EscherRecordBase.$);
    return ClientData;
}(EscherRecordBase));
export { ClientData };
/**
 * @hidden
 */
var ClientTextBox = /** @class */ (function (_super) {
    tslib_1.__extends(ClientTextBox, _super);
    function ClientTextBox(a) {
        var _rest = [];
        for (var _0 = 1; _0 < arguments.length; _0++) {
            _rest[_0 - 1] = arguments[_0];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    _this = _super.call(this, 0, 0, 0) || this;
                    _this.n = null;
                    _this.n = c;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this = _super.call(this, c, d, e) || this;
                    _this.n = null;
                }
                break;
        }
        return _this;
    }
    ClientTextBox.prototype.l = function (a) {
        {
            var b = new Biff8RecordStream(1, a);
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
    };
    ClientTextBox.prototype.m = function (a) {
        _super.prototype.m.call(this, a);
        a._b7.k(this.n);
        a._dp(438);
        a._ci._nextBlockType = 236;
        a._b7.h();
    };
    ClientTextBox.prototype.get_e = function () {
        return 61453;
    };
    Object.defineProperty(ClientTextBox.prototype, "e", {
        get: function () {
            return this.get_e();
        },
        enumerable: true,
        configurable: true
    });
    ClientTextBox.$t = markType(ClientTextBox, 'ClientTextBox', EscherRecordBase.$);
    return ClientTextBox;
}(EscherRecordBase));
export { ClientTextBox };
/**
 * @hidden
 */
var ConnectorRule = /** @class */ (function (_super) {
    tslib_1.__extends(ConnectorRule, _super);
    function ConnectorRule(a, b, c) {
        return _super.call(this, a, b, c) || this;
    }
    ConnectorRule.prototype.l = function (a) {
    };
    ConnectorRule.prototype.m = function (a) {
        _super.prototype.m.call(this, a);
    };
    ConnectorRule.prototype.get_e = function () {
        return 61458;
    };
    Object.defineProperty(ConnectorRule.prototype, "e", {
        get: function () {
            return this.get_e();
        },
        enumerable: true,
        configurable: true
    });
    ConnectorRule.$t = markType(ConnectorRule, 'ConnectorRule', EscherRecordBase.$);
    return ConnectorRule;
}(EscherRecordBase));
export { ConnectorRule };
/**
 * @hidden
 */
var Drawing = /** @class */ (function (_super) {
    tslib_1.__extends(Drawing, _super);
    function Drawing(a) {
        var _rest = [];
        for (var _0 = 1; _0 < arguments.length; _0++) {
            _rest[_0 - 1] = arguments[_0];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this = _super.call(this, 0, d._am, 8) || this;
                    _this.o = 0;
                    _this.n = 0;
                    var e = c._w(d);
                    _this.o = e.c;
                    _this.n = e.b;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this = _super.call(this, c, d, e) || this;
                    _this.o = 0;
                    _this.n = 0;
                }
                break;
        }
        return _this;
    }
    Drawing.prototype.l = function (a) {
        this.o = a._av._readUInt32();
        this.n = a._av._readUInt32();
    };
    Drawing.prototype.m = function (a) {
        _super.prototype.m.call(this, a);
        a._ci._write18(this.o);
        a._ci._write18(this.n);
    };
    Drawing.prototype.toString = function () {
        var a = new StringBuilder(0);
        a.l("------------------------------");
        a.l("\n");
        a.l(_super.prototype.toString.call(this));
        a.l("\n\n");
        a.l("Drawing ID: " + this.i);
        a.l("\n");
        a.l("Number of Shapes in this Drawing: " + this.o);
        a.l("\n");
        a.l("Last SPID Given to a Shape: " + this.n);
        a.l("\n");
        a.l("------------------------------");
        return a.toString();
    };
    Drawing.prototype.get_e = function () {
        return 61448;
    };
    Object.defineProperty(Drawing.prototype, "e", {
        get: function () {
            return this.get_e();
        },
        enumerable: true,
        configurable: true
    });
    Drawing.$t = markType(Drawing, 'Drawing', EscherRecordBase.$);
    return Drawing;
}(EscherRecordBase));
export { Drawing };
/**
 * @hidden
 */
var DrawingContainer = /** @class */ (function (_super) {
    tslib_1.__extends(DrawingContainer, _super);
    function DrawingContainer(a) {
        var _rest = [];
        for (var _0 = 1; _0 < arguments.length; _0++) {
            _rest[_0 - 1] = arguments[_0];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    _this = _super.call(this, 15, 0, 0) || this;
                    var d = c._b7.a(Worksheet.$);
                    if (d == null) {
                        return;
                    }
                    _this.r(new Drawing(0, c, d));
                    _this.r(new GroupContainer(0, c, d));
                    var e = new SolverContainer(0, d);
                    if (e.q > 0) {
                        _this.r(e);
                    }
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this = _super.call(this, c, d, e) || this;
                }
                break;
        }
        return _this;
    }
    DrawingContainer.prototype.o = function (a) {
        switch (a.e) {
            case 61448:
            case 61720:
            case 61728:
            case 61443:
            case 61445: return true;
        }
        return false;
    };
    DrawingContainer.prototype.get_e = function () {
        return 61442;
    };
    Object.defineProperty(DrawingContainer.prototype, "e", {
        get: function () {
            return this.get_e();
        },
        enumerable: true,
        configurable: true
    });
    DrawingContainer.$t = markType(DrawingContainer, 'DrawingContainer', EscherRecordContainerBase.$);
    return DrawingContainer;
}(EscherRecordContainerBase));
export { DrawingContainer };
/**
 * @hidden
 */
var DrawingGroup = /** @class */ (function (_super) {
    tslib_1.__extends(DrawingGroup, _super);
    function DrawingGroup(a) {
        var _rest = [];
        for (var _0 = 1; _0 < arguments.length; _0++) {
            _rest[_0 - 1] = arguments[_0];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    _this = _super.call(this, 0, 0, 16 + (8 * intSToU(c.count))) || this;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this = _super.call(this, c, d, e) || this;
                }
                break;
        }
        return _this;
    }
    DrawingGroup.prototype.l = function (a) {
        a._av.seek(this.k, 1);
    };
    DrawingGroup.prototype.m = function (a) {
        var e_58, _0, e_59, _1;
        _super.prototype.m.call(this, a);
        var b = 0;
        try {
            for (var _2 = tslib_1.__values(fromEnum(a._az)), _3 = _2.next(); !_3.done; _3 = _2.next()) {
                var c = _3.value;
                b += a._s(c).c;
            }
        }
        catch (e_58_1) { e_58 = { error: e_58_1 }; }
        finally {
            try {
                if (_3 && !_3.done && (_0 = _2.return)) _0.call(_2);
            }
            finally { if (e_58) throw e_58.error; }
        }
        a._ci._write18(a._bb);
        a._ci._write18(intSToU((a._az.count + 1)));
        a._ci._write18(b);
        a._ci._write18(intSToU(a._az.count));
        try {
            for (var _4 = tslib_1.__values(fromEnum(a._az)), _5 = _4.next(); !_5.done; _5 = _4.next()) {
                var d = _5.value;
                a._ci._write18(d._am);
                var e = a._s(d);
                a._ci._write18(e.c);
            }
        }
        catch (e_59_1) { e_59 = { error: e_59_1 }; }
        finally {
            try {
                if (_5 && !_5.done && (_1 = _4.return)) _1.call(_4);
            }
            finally { if (e_59) throw e_59.error; }
        }
    };
    DrawingGroup.prototype.toString = function () {
        var a = new StringBuilder(0);
        a.l("------------------------------");
        a.l("\n");
        a.l(_super.prototype.toString.call(this));
        a.l("\n\n");
        a.l("------------------------------");
        return a.toString();
    };
    DrawingGroup.prototype.get_e = function () {
        return 61446;
    };
    Object.defineProperty(DrawingGroup.prototype, "e", {
        get: function () {
            return this.get_e();
        },
        enumerable: true,
        configurable: true
    });
    DrawingGroup.$t = markType(DrawingGroup, 'DrawingGroup', EscherRecordBase.$);
    return DrawingGroup;
}(EscherRecordBase));
export { DrawingGroup };
/**
 * @hidden
 */
var DrawingGroupContainer = /** @class */ (function (_super) {
    tslib_1.__extends(DrawingGroupContainer, _super);
    function DrawingGroupContainer(a) {
        var _rest = [];
        for (var _0 = 1; _0 < arguments.length; _0++) {
            _rest[_0 - 1] = arguments[_0];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    _this = _super.call(this, 15, 0, 0) || this;
                    _this.r(new DrawingGroup(0, c._az));
                    if (c._cx.count > 0) {
                        _this.r(new BLIPStoreContainer(0, c._cx));
                    }
                    if (c._b._ej != null && c._b._ej.count > 0) {
                        _this.r(new PropertyTable1(1, c._b._ej));
                    }
                    if (c._b._el != null && c._b._el.count > 0) {
                        _this.r(new PropertyTable3(1, c._b._el));
                    }
                    _this.r(new SplitMenuColors(0));
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this = _super.call(this, c, d, e) || this;
                }
                break;
        }
        return _this;
    }
    DrawingGroupContainer.prototype.o = function (a) {
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
    };
    DrawingGroupContainer.prototype.get_e = function () {
        return 61440;
    };
    Object.defineProperty(DrawingGroupContainer.prototype, "e", {
        get: function () {
            return this.get_e();
        },
        enumerable: true,
        configurable: true
    });
    DrawingGroupContainer.$t = markType(DrawingGroupContainer, 'DrawingGroupContainer', EscherRecordContainerBase.$);
    return DrawingGroupContainer;
}(EscherRecordContainerBase));
export { DrawingGroupContainer };
/**
 * @hidden
 */
var GroupContainer = /** @class */ (function (_super) {
    tslib_1.__extends(GroupContainer, _super);
    function GroupContainer(a) {
        var e_60, _0;
        var _rest = [];
        for (var _1 = 1; _1 < arguments.length; _1++) {
            _rest[_1 - 1] = arguments[_1];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this = _super.call(this, 15, 0, 0) || this;
                    _this.r(new ShapeContainer(0, c, new Shape_PatriarchShape(c, d)));
                    _this.s(c, d._shapes$i);
                    var e = c._w(d);
                    try {
                        for (var _2 = tslib_1.__values(fromEnum(e.j)), _3 = _2.next(); !_3.done; _3 = _2.next()) {
                            var f = _3.value;
                            _this.r(new ShapeContainer(0, c, f));
                        }
                    }
                    catch (e_60_1) { e_60 = { error: e_60_1 }; }
                    finally {
                        try {
                            if (_3 && !_3.done && (_0 = _2.return)) _0.call(_2);
                        }
                        finally { if (e_60) throw e_60.error; }
                    }
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this = _super.call(this, 15, 0, 0) || this;
                    _this.r(new ShapeContainer(0, c, d));
                    _this.s(c, d._shapes$i);
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this = _super.call(this, c, d, e) || this;
                }
                break;
        }
        return _this;
    }
    GroupContainer.prototype.s = function (a, b) {
        for (var c = 0; c < b.count; c++) {
            var d = a._z(b.item(c));
            if (d == null) {
                continue;
            }
            var e = typeCast(WorksheetShapeGroup.$, d);
            if (e != null) {
                this.r(new GroupContainer(1, a, e));
            }
            else {
                this.r(new ShapeContainer(0, a, d));
            }
        }
    };
    GroupContainer.prototype.l = function (a) {
        _super.prototype.l.call(this, a);
        var b = typeCast(WorksheetShapeGroup.$, a._ai.h());
        if (b != null) {
            b._d3();
        }
    };
    GroupContainer.prototype.o = function (a) {
        switch (a.e) {
            case 61443:
            case 61444: return true;
        }
        return false;
    };
    GroupContainer.prototype.get_e = function () {
        return 61443;
    };
    Object.defineProperty(GroupContainer.prototype, "e", {
        get: function () {
            return this.get_e();
        },
        enumerable: true,
        configurable: true
    });
    GroupContainer.$t = markType(GroupContainer, 'GroupContainer', EscherRecordContainerBase.$);
    return GroupContainer;
}(EscherRecordContainerBase));
export { GroupContainer };
/**
 * @hidden
 */
var GroupShape = /** @class */ (function (_super) {
    tslib_1.__extends(GroupShape, _super);
    function GroupShape(a) {
        var _rest = [];
        for (var _0 = 1; _0 < arguments.length; _0++) {
            _rest[_0 - 1] = arguments[_0];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    _this = _super.call(this, 1, 0, 16) || this;
                    _this.n = null;
                    _this.n = ExcelUtils.hb(c._getBoundsInTwips());
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this = _super.call(this, c, d, e) || this;
                    _this.n = null;
                }
                break;
        }
        return _this;
    }
    GroupShape.prototype.l = function (a) {
        this.n = a._av._readRect();
    };
    GroupShape.prototype.m = function (a) {
        _super.prototype.m.call(this, a);
        a._ci._writeEMURect(this.n);
    };
    GroupShape.prototype.toString = function () {
        var a = new StringBuilder(0);
        a.l("------------------------------");
        a.l("\n");
        a.l(_super.prototype.toString.call(this));
        a.l("\n\n");
        a.l("Group Bounds (EMUS): " + this.n);
        a.l("\n");
        a.l("------------------------------");
        return a.toString();
    };
    GroupShape.prototype.get_e = function () {
        return 61449;
    };
    Object.defineProperty(GroupShape.prototype, "e", {
        get: function () {
            return this.get_e();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GroupShape.prototype, "o", {
        get: function () {
            return this.n;
        },
        enumerable: true,
        configurable: true
    });
    GroupShape.$t = markType(GroupShape, 'GroupShape', EscherRecordBase.$);
    return GroupShape;
}(EscherRecordBase));
export { GroupShape };
/**
 * @hidden
 */
var PropertyTableBase = /** @class */ (function (_super) {
    tslib_1.__extends(PropertyTableBase, _super);
    function PropertyTableBase(a) {
        var e_61, _0;
        var _rest = [];
        for (var _1 = 1; _1 < arguments.length; _1++) {
            _rest[_1 - 1] = arguments[_1];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    var d = [3, c.count, 0];
                    {
                        var f = d[0];
                        var g = d[1];
                        var h = d[2];
                        _this = _super.call(this, f, g, h) || this;
                        _this.n = null;
                    }
                    _this.n = c;
                    var e = 0;
                    try {
                        for (var _2 = tslib_1.__values(fromEnum(_this.n)), _3 = _2.next(); !_3.done; _3 = _2.next()) {
                            var f = _3.value;
                            e += 6;
                            if (f._f) {
                                e += intSToU(f._i.a.length);
                            }
                        }
                    }
                    catch (e_61_1) { e_61 = { error: e_61_1 }; }
                    finally {
                        try {
                            if (_3 && !_3.done && (_0 = _2.return)) _0.call(_2);
                        }
                        finally { if (e_61) throw e_61.error; }
                    }
                    _this.k = e;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this = _super.call(this, c, d, e) || this;
                    _this.n = null;
                }
                break;
        }
        return _this;
    }
    PropertyTableBase.prototype.l = function (a) {
        var e_62, _0;
        var b = a._ai.a(WorksheetShape.$);
        this.n = new List$1(PropertyTableBase_PropertyValue.$, 0);
        var c = false;
        for (var d = 0; d < this.i; d++) {
            var e = a._av._readUInt16();
            var f = a._av._readUInt32();
            var g = (e & 16383);
            var h = (e & 32768) == 32768;
            var i = (e & 16384) == 16384 && h == false;
            var j = new PropertyTableBase_PropertyValue(1, g, f, h, i);
            if (i && b != null) {
                c = true;
                var k = typeCast(IWorksheetImage_$type, b);
                if (k != null) {
                    k.image = a._b3._inner[f - 1].a;
                }
            }
            this.n.add(j);
        }
        this.n.y();
        try {
            for (var _1 = tslib_1.__values(fromEnum(this.n)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var l = _2.value;
                if (l._f == false) {
                    continue;
                }
                var m = typeGetValue(l._i);
                if (m == 0) {
                    l._i = new BinaryData(new Array(0));
                    continue;
                }
                if (l._g) {
                    var n = 6;
                    if (m < n) {
                        l._i = new BinaryData(a._av._readBytes(m));
                    }
                    else {
                        var o = a._av._readBytes(n);
                        var p = BitConverter.w(o, 0);
                        var q = BitConverter.w(o, 2);
                        var r = BitConverter.w(o, 4);
                        var s = r == 65520 ? 4 : r;
                        var t = p * s;
                        var u = m - n;
                        var v = Math.max(t, u);
                        var w = a._av._readBytes(v);
                        var x = new Array(o.length + w.length);
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
        catch (e_62_1) { e_62 = { error: e_62_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_62) throw e_62.error; }
        }
    };
    PropertyTableBase.prototype.m = function (a) {
        var e_63, _0, e_64, _1;
        _super.prototype.m.call(this, a);
        try {
            for (var _2 = tslib_1.__values(fromEnum(this.n)), _3 = _2.next(); !_3.done; _3 = _2.next()) {
                var b = _3.value;
                var c = 0;
                var d = 0;
                d |= b._b;
                if (b._f) {
                    d |= 49152;
                    var e = typeCast(BinaryData.$, b._i);
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
        }
        catch (e_63_1) { e_63 = { error: e_63_1 }; }
        finally {
            try {
                if (_3 && !_3.done && (_0 = _2.return)) _0.call(_2);
            }
            finally { if (e_63) throw e_63.error; }
        }
        try {
            for (var _4 = tslib_1.__values(fromEnum(this.n)), _5 = _4.next(); !_5.done; _5 = _4.next()) {
                var f = _5.value;
                if (f._f == false) {
                    continue;
                }
                var g = typeCast(BinaryData.$, f._i);
                if (g != null) {
                    a._ci._write2(g.a);
                }
            }
        }
        catch (e_64_1) { e_64 = { error: e_64_1 }; }
        finally {
            try {
                if (_5 && !_5.done && (_1 = _4.return)) _1.call(_4);
            }
            finally { if (e_64) throw e_64.error; }
        }
    };
    Object.defineProperty(PropertyTableBase.prototype, "o", {
        get: function () {
            return this.n;
        },
        enumerable: true,
        configurable: true
    });
    PropertyTableBase.$t = markType(PropertyTableBase, 'PropertyTableBase', EscherRecordBase.$);
    return PropertyTableBase;
}(EscherRecordBase));
export { PropertyTableBase };
/**
 * @hidden
 */
var PropertyTable1 = /** @class */ (function (_super) {
    tslib_1.__extends(PropertyTable1, _super);
    function PropertyTable1(a) {
        var _rest = [];
        for (var _0 = 1; _0 < arguments.length; _0++) {
            _rest[_0 - 1] = arguments[_0];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    _this = _super.call(this, 0, c._bi) || this;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    _this = _super.call(this, 0, c) || this;
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this = _super.call(this, 1, c, d, e) || this;
                }
                break;
        }
        return _this;
    }
    PropertyTable1.prototype.l = function (a) {
        _super.prototype.l.call(this, a);
        var b = a._ai.a(WorksheetShape.$);
        if (b != null) {
            b._bi = this.o;
            this.c4(a, b);
        }
        else {
            a._b._ej = this.o;
        }
    };
    PropertyTable1.c3 = function (a, b, c) {
        var d = Nullable$1.toNullable(Number_$type, null);
        var e = Nullable$1.toNullable(Number_$type, null);
        if (b != null) {
            d = Nullable$1.toNullable(Number_$type, typeGetValue(b._i));
        }
        if (c != null) {
            e = Nullable$1.toNullable(Number_$type, typeGetValue(c._i));
        }
        var f = ExcelUtils.dx(Color.$, new Color());
        var g;
        var h;
        var i;
        var j = DocCoreUtils.al(d, e, f, g, h, i);
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
    };
    PropertyTable1.prototype.c4 = function (a, b) {
        var c = null;
        var d = null;
        var e = null;
        var f = null;
        var g = null;
        var h = null;
        var i = typeCast(WorksheetShapeWithText.$, b);
        for (var j = 0; j < this.o.count; j++) {
            var k = this.o._inner[j];
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
        var l = false;
        var m = l;
        var n = e != null || c != null;
        if (e != null && typeof e._i === 'number') {
            m = ExcelUtils.bu(typeGetValue(e._i), 20);
            if (m) {
                n = ExcelUtils.bu(typeGetValue(e._i), 4);
            }
        }
        if (n) {
            var o = PropertyTable1.c3(a, c, d);
            b.fill = ShapeFill._fromColor$i(!nullableIsNull(o) ? o.value : SystemColorsInternal.bb);
        }
        var p = false;
        var q = p;
        var r = h != null || f != null;
        if (h != null && typeof h._i === 'number') {
            q = ExcelUtils.bu(typeGetValue(h._i), 19);
            if (q) {
                r = ExcelUtils.bu(typeGetValue(h._i), 3);
            }
        }
        if (r) {
            var s = PropertyTable1.c3(a, f, g);
            b.outline = ShapeOutline._fromColor$i(!nullableIsNull(s) ? s.value : SystemColorsInternal.bf);
        }
    };
    PropertyTable1.prototype.get_e = function () {
        return 61451;
    };
    Object.defineProperty(PropertyTable1.prototype, "e", {
        get: function () {
            return this.get_e();
        },
        enumerable: true,
        configurable: true
    });
    PropertyTable1.$t = markType(PropertyTable1, 'PropertyTable1', PropertyTableBase.$);
    return PropertyTable1;
}(PropertyTableBase));
export { PropertyTable1 };
/**
 * @hidden
 */
var PropertyTable2 = /** @class */ (function (_super) {
    tslib_1.__extends(PropertyTable2, _super);
    function PropertyTable2(a) {
        var _rest = [];
        for (var _0 = 1; _0 < arguments.length; _0++) {
            _rest[_0 - 1] = arguments[_0];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    _this = _super.call(this, 0, c._bk) || this;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this = _super.call(this, 1, c, d, e) || this;
                }
                break;
        }
        return _this;
    }
    PropertyTable2.prototype.l = function (a) {
        _super.prototype.l.call(this, a);
        var b = a._ai.a(WorksheetShape.$);
        if (b != null) {
            b._bk = this.o;
        }
        else {
        }
    };
    PropertyTable2.prototype.get_e = function () {
        return 61729;
    };
    Object.defineProperty(PropertyTable2.prototype, "e", {
        get: function () {
            return this.get_e();
        },
        enumerable: true,
        configurable: true
    });
    PropertyTable2.$t = markType(PropertyTable2, 'PropertyTable2', PropertyTableBase.$);
    return PropertyTable2;
}(PropertyTableBase));
export { PropertyTable2 };
/**
 * @hidden
 */
var PropertyTable3 = /** @class */ (function (_super) {
    tslib_1.__extends(PropertyTable3, _super);
    function PropertyTable3(a) {
        var _rest = [];
        for (var _0 = 1; _0 < arguments.length; _0++) {
            _rest[_0 - 1] = arguments[_0];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    _this = _super.call(this, 0, c._bm) || this;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    _this = _super.call(this, 0, c) || this;
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this = _super.call(this, 1, c, d, e) || this;
                }
                break;
        }
        return _this;
    }
    PropertyTable3.prototype.l = function (a) {
        _super.prototype.l.call(this, a);
        var b = a._ai.a(WorksheetShape.$);
        if (b != null) {
            b._bm = this.o;
            this.c3(a, b);
        }
        else {
            a._b._el = this.o;
        }
    };
    PropertyTable3.prototype.c3 = function (a, b) {
        var c = null;
        for (var d = 0; d < this.o.count; d++) {
            var e = this.o._inner[d];
            switch (e._b) {
                case 937:
                    c = e._i.a;
                    break;
            }
        }
        if (c != null && a._al != null) {
        }
    };
    PropertyTable3.prototype.get_e = function () {
        return 61730;
    };
    Object.defineProperty(PropertyTable3.prototype, "e", {
        get: function () {
            return this.get_e();
        },
        enumerable: true,
        configurable: true
    });
    PropertyTable3.$t = markType(PropertyTable3, 'PropertyTable3', PropertyTableBase.$);
    return PropertyTable3;
}(PropertyTableBase));
export { PropertyTable3 };
/**
 * @hidden
 */
var Regroup = /** @class */ (function (_super) {
    tslib_1.__extends(Regroup, _super);
    function Regroup(a, b, c) {
        var _this = _super.call(this, a, b, c) || this;
        _this.n = null;
        _this.o = null;
        return _this;
    }
    Regroup.prototype.l = function (a) {
        this.n = new Array(this.i);
        this.o = new Array(this.i);
        for (var b = 0; b < this.n.length; b++) {
            this.n[b] = a._av._readUInt16();
            this.o[b] = a._av._readUInt16();
        }
    };
    Regroup.prototype.m = function (a) {
        _super.prototype.m.call(this, a);
        if (this.n != null) {
            for (var b = 0; b < this.n.length; b++) {
                a._ci._write17(this.n[b]);
                a._ci._write17(this.o[b]);
            }
        }
    };
    Regroup.prototype.toString = function () {
        var a = new StringBuilder(0);
        a.l("------------------------------");
        a.l("\n");
        a.l(_super.prototype.toString.call(this));
        a.l("\n\n");
        if (this.n != null) {
            for (var b = 0; b < this.n.length; b++) {
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
    };
    Regroup.prototype.get_e = function () {
        return 61720;
    };
    Object.defineProperty(Regroup.prototype, "e", {
        get: function () {
            return this.get_e();
        },
        enumerable: true,
        configurable: true
    });
    Regroup.$t = markType(Regroup, 'Regroup', EscherRecordBase.$);
    return Regroup;
}(EscherRecordBase));
export { Regroup };
/**
 * @hidden
 */
var Selections = /** @class */ (function (_super) {
    tslib_1.__extends(Selections, _super);
    function Selections(a, b, c) {
        return _super.call(this, a, b, c) || this;
    }
    Selections.prototype.l = function (a) {
        var b = a._av._readUInt32();
        var c = a._av._readUInt32();
        var d = a._av._readUInt32();
        var e = intDivide((a._av.length - 20), 4);
        for (var f = 0; f < e; f++) {
            var g = a._av._readUInt32();
        }
    };
    Selections.prototype.m = function (a) {
        _super.prototype.m.call(this, a);
    };
    Selections.prototype.get_e = function () {
        return 61721;
    };
    Object.defineProperty(Selections.prototype, "e", {
        get: function () {
            return this.get_e();
        },
        enumerable: true,
        configurable: true
    });
    Selections.$t = markType(Selections, 'Selections', EscherRecordBase.$);
    return Selections;
}(EscherRecordBase));
export { Selections };
/**
 * @hidden
 */
var EscherShape = /** @class */ (function (_super) {
    tslib_1.__extends(EscherShape, _super);
    function EscherShape(a) {
        var _rest = [];
        for (var _0 = 1; _0 < arguments.length; _0++) {
            _rest[_0 - 1] = arguments[_0];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    _this = _super.call(this, 2, c._b0.value, 8) || this;
                    _this.o = 0;
                    _this.n = null;
                    _this.n = c;
                    _this.o = c._cn;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this = _super.call(this, c, d, e) || this;
                    _this.o = 0;
                    _this.n = null;
                }
                break;
        }
        return _this;
    }
    EscherShape.prototype.l = function (a) {
        this.o = a._av._readUInt32();
        var b = a._av._readUInt32();
        var c = (b & 1) == 1;
        var d = (b & 4) == 4;
        var e = (b & 8) == 8;
        var f = (b & 16) == 16;
        var g = (b & 32) == 32;
        var h = (b & 64) == 64;
        var i = (b & 128) == 128;
        var j = (b & 256) == 256;
        var k = (b & 1024) == 1024;
        if (e) {
            return;
        }
        if (d) {
            a._ai.k(a._ai.a(Worksheet.$));
            return;
        }
        var l;
        if (c) {
            var m = new WorksheetShapeGroup(true);
            l = m;
            if (this.d != null) {
                var n = this.d.n(GroupShape.$);
                if (n != null) {
                    a._cs(m, n.o);
                }
            }
        }
        else {
            var o = this.i;
            var t1 = o;
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
                        var p = o;
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
        var q = typeCast(UnknownShape.$, l);
        if (q != null) {
            q._ek = f;
        }
        else {
        }
        l._cn = this.o;
        l.flippedHorizontally = h;
        l.flippedVertically = i;
        a._ai.k(l);
    };
    EscherShape.prototype.m = function (a) {
        _super.prototype.m.call(this, a);
        var b = 0;
        var c = typeCast(UnknownShape.$, this.n);
        if (c != null) {
            b = (u32BitwiseAnd(c._ep, ~2567));
        }
        else {
            var d = typeCast(WorksheetChart.$, this.n);
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
    };
    EscherShape.prototype.toString = function () {
        var a = new StringBuilder(0);
        a.l("------------------------------");
        a.l("\n");
        a.l(_super.prototype.toString.call(this));
        a.l("\n\n");
        a.l("Shape Type: " + this.i);
        a.l("\n");
        a.l("Shape ID: " + this.o);
        a.l("\n");
        a.l("------------------------------");
        return a.toString();
    };
    EscherShape.prototype.get_e = function () {
        return 61450;
    };
    Object.defineProperty(EscherShape.prototype, "e", {
        get: function () {
            return this.get_e();
        },
        enumerable: true,
        configurable: true
    });
    EscherShape.$t = markType(EscherShape, 'EscherShape', EscherRecordBase.$);
    return EscherShape;
}(EscherRecordBase));
export { EscherShape };
/**
 * @hidden
 */
var Shape_PatriarchShape = /** @class */ (function (_super) {
    tslib_1.__extends(Shape_PatriarchShape, _super);
    function Shape_PatriarchShape(a, b) {
        var _this = _super.call(this) || this;
        _this._d9 = 0;
        _this._d9 = a._w(b).d;
        return _this;
    }
    Shape_PatriarchShape.prototype._getBoundsInTwips1 = function (a) {
        return Rect.empty;
    };
    Shape_PatriarchShape.prototype.get__a8 = function () {
        return true;
    };
    Shape_PatriarchShape.prototype.get__cn = function () {
        return this._d9;
    };
    Shape_PatriarchShape.prototype.set__cn = function (a) {
    };
    Shape_PatriarchShape.$t = markType(Shape_PatriarchShape, 'Shape_PatriarchShape', WorksheetShapeGroup.$);
    return Shape_PatriarchShape;
}(WorksheetShapeGroup));
export { Shape_PatriarchShape };
/**
 * @hidden
 */
var ShapeContainer = /** @class */ (function (_super) {
    tslib_1.__extends(ShapeContainer, _super);
    function ShapeContainer(a) {
        var _rest = [];
        for (var _0 = 1; _0 < arguments.length; _0++) {
            _rest[_0 - 1] = arguments[_0];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this = _super.call(this, 15, 0, 0) || this;
                    if (d._b0.hasValue == false) {
                        return;
                    }
                    c._da(d);
                    var e = typeCast(WorksheetShapeGroup.$, d);
                    if (e != null) {
                        _this.r(new GroupShape(0, e));
                        if (typeCast(Shape_PatriarchShape.$, e) !== null) {
                            _this.r(new EscherShape(0, e));
                            return;
                        }
                    }
                    _this.r(new EscherShape(0, d));
                    if (d._a1) {
                        d._bi.y();
                        _this.r(new PropertyTable1(0, d));
                    }
                    if (d._a2) {
                        d._bk.y();
                        _this.r(new PropertyTable2(0, d));
                    }
                    if (d._a3) {
                        d._bm.y();
                        _this.r(new PropertyTable3(0, d));
                    }
                    _this.r(ShapeContainer.s(d));
                    _this.r(new ClientData(0, d));
                    var f = typeCast(WorksheetShapeWithText.$, d);
                    var g = typeCast(WorksheetCellComment.$, d);
                    if ((f != null && f._d0) || (g != null)) {
                        _this.r(new ClientTextBox(0, d));
                    }
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this = _super.call(this, c, d, e) || this;
                }
                break;
        }
        return _this;
    }
    ShapeContainer.prototype.l = function (a) {
        _super.prototype.l.call(this, a);
        if (typeCast(WorksheetShape.$, a._ai.f) !== null) {
            var b = a._ai.h();
            var c = a._ai.a(Worksheet.$);
            var d = a._ai.a(IWorksheetShapeOwner_$type);
            if (c == null || d == null) {
                return;
            }
            var e = this.n(ChildAnchor.$);
            var f = typeCast(WorksheetShapeGroup.$, d);
            if (f != null) {
                if (e != null && c != null) {
                    var g = ShapeContainer.u(e.o);
                    var h = f._getBoundsInTwips();
                    var i = a._cu(f);
                    var j = ShapeContainer.t(h, i);
                    var k = a._ae(g, b._b6, j, h);
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
    };
    ShapeContainer.s = function (a) {
        if (a._a8) {
            return new ClientAnchor(0, a);
        }
        else {
            return new ChildAnchor(0, a);
        }
    };
    ShapeContainer.prototype.o = function (a) {
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
    };
    ShapeContainer.prototype.get_e = function () {
        return 61444;
    };
    Object.defineProperty(ShapeContainer.prototype, "e", {
        get: function () {
            return this.get_e();
        },
        enumerable: true,
        configurable: true
    });
    ShapeContainer.t = function (a, b) {
        return ((function () {
            var $ret = new CT_GroupTransform2D();
            $ret.a = ((function () {
                var $ret = new CT_Point2D();
                $ret.a = ST_Coordinate.b(truncate(a.x));
                $ret.b = ST_Coordinate.b(truncate(a.y));
                return $ret;
            })());
            $ret.b = ((function () {
                var $ret = new CT_PositiveSize2D();
                $ret.a = ST_PositiveCoordinate.a(truncate(a.width));
                $ret.b = ST_PositiveCoordinate.a(truncate(a.height));
                return $ret;
            })());
            $ret.l = ((function () {
                var $ret = new CT_Point2D();
                $ret.a = ST_Coordinate.b(truncate(b.x));
                $ret.b = ST_Coordinate.b(truncate(b.y));
                return $ret;
            })());
            $ret.m = ((function () {
                var $ret = new CT_PositiveSize2D();
                $ret.a = ST_PositiveCoordinate.a(truncate(b.width));
                $ret.b = ST_PositiveCoordinate.a(truncate(b.height));
                return $ret;
            })());
            return $ret;
        })());
    };
    ShapeContainer.u = function (a) {
        return ((function () {
            var $ret = new CT_Transform2D();
            $ret.a = ((function () {
                var $ret = new CT_Point2D();
                $ret.a = ST_Coordinate.b(truncate(a.x));
                $ret.b = ST_Coordinate.b(truncate(a.y));
                return $ret;
            })());
            $ret.b = ((function () {
                var $ret = new CT_PositiveSize2D();
                $ret.a = ST_PositiveCoordinate.a(truncate(a.width));
                $ret.b = ST_PositiveCoordinate.a(truncate(a.height));
                return $ret;
            })());
            return $ret;
        })());
    };
    ShapeContainer.$t = markType(ShapeContainer, 'ShapeContainer', EscherRecordContainerBase.$);
    return ShapeContainer;
}(EscherRecordContainerBase));
export { ShapeContainer };
/**
 * @hidden
 */
var SolverContainer = /** @class */ (function (_super) {
    tslib_1.__extends(SolverContainer, _super);
    function SolverContainer(a) {
        var e_65, _0;
        var _rest = [];
        for (var _1 = 1; _1 < arguments.length; _1++) {
            _rest[_1 - 1] = arguments[_1];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    _this = _super.call(this, 15, 0, 0) || this;
                    var d = c._fg();
                    try {
                        for (var _2 = tslib_1.__values(fromEnum(d)), _3 = _2.next(); !_3.done; _3 = _2.next()) {
                            var e = _3.value;
                            _this.r(e);
                        }
                    }
                    catch (e_65_1) { e_65 = { error: e_65_1 }; }
                    finally {
                        try {
                            if (_3 && !_3.done && (_0 = _2.return)) _0.call(_2);
                        }
                        finally { if (e_65) throw e_65.error; }
                    }
                    _this.i = _this.q;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this = _super.call(this, c, d, e) || this;
                }
                break;
        }
        return _this;
    }
    SolverContainer.prototype.l = function (a) {
        _super.prototype.l.call(this, a);
    };
    SolverContainer.prototype.o = function (a) {
        switch (a.e) {
            case 61458:
            case 61459:
            case 61460:
            case 61461:
            case 61463: return true;
        }
        return false;
    };
    SolverContainer.prototype.get_e = function () {
        return 61445;
    };
    Object.defineProperty(SolverContainer.prototype, "e", {
        get: function () {
            return this.get_e();
        },
        enumerable: true,
        configurable: true
    });
    SolverContainer.$t = markType(SolverContainer, 'SolverContainer', EscherRecordContainerBase.$);
    return SolverContainer;
}(EscherRecordContainerBase));
export { SolverContainer };
/**
 * @hidden
 */
var SplitMenuColors = /** @class */ (function (_super) {
    tslib_1.__extends(SplitMenuColors, _super);
    function SplitMenuColors(a) {
        var _rest = [];
        for (var _0 = 1; _0 < arguments.length; _0++) {
            _rest[_0 - 1] = arguments[_0];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = [0, 4, 16];
                    {
                        var e = c[0];
                        var f = c[1];
                        var g = c[2];
                        _this = _super.call(this, e, f, g) || this;
                    }
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this = _super.call(this, c, d, e) || this;
                }
                break;
        }
        return _this;
    }
    SplitMenuColors.prototype.l = function (a) {
        for (var b = 0; b < this.i; b++) {
            a._av._readUInt32();
        }
    };
    SplitMenuColors.prototype.m = function (a) {
        _super.prototype.m.call(this, a);
        a._ci._write18(intSToU(134217741));
        a._ci._write18(intSToU(134217740));
        a._ci._write18(intSToU(134217751));
        a._ci._write18(intSToU(268435703));
    };
    SplitMenuColors.prototype.get_e = function () {
        return 61726;
    };
    Object.defineProperty(SplitMenuColors.prototype, "e", {
        get: function () {
            return this.get_e();
        },
        enumerable: true,
        configurable: true
    });
    SplitMenuColors.$t = markType(SplitMenuColors, 'SplitMenuColors', EscherRecordBase.$);
    return SplitMenuColors;
}(EscherRecordBase));
export { SplitMenuColors };
/**
 * @hidden
 */
var Biff8RecordBase = /** @class */ (function (_super) {
    tslib_1.__extends(Biff8RecordBase, _super);
    function Biff8RecordBase() {
        return _super.call(this, BIFF8RecordType_$type, WorkbookLoadManagerExcel2003.$, WorkbookSaveManagerExcel2003.$) || this;
    }
    Object.defineProperty(Biff8RecordBase, "m", {
        get: function () {
            if (Biff8RecordBase.l == null) {
                Biff8RecordBase.l = Biff8RecordBase.k;
            }
            return Biff8RecordBase.l;
        },
        enumerable: true,
        configurable: true
    });
    Biff8RecordBase.j = function (a) {
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
    };
    Biff8RecordBase.k = function (a) {
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
    };
    Biff8RecordBase.prototype.get_n = function () {
        return true;
    };
    Object.defineProperty(Biff8RecordBase.prototype, "n", {
        get: function () {
            return this.get_n();
        },
        enumerable: true,
        configurable: true
    });
    Biff8RecordBase.$t = markType(Biff8RecordBase, 'Biff8RecordBase', BiffRecordBase$3.$.specialize(BIFF8RecordType_$type, WorkbookLoadManagerExcel2003.$, WorkbookSaveManagerExcel2003.$));
    Biff8RecordBase.l = null;
    return Biff8RecordBase;
}(BiffRecordBase$3));
export { Biff8RecordBase };
/**
 * @hidden
 */
var Record1904 = /** @class */ (function (_super) {
    tslib_1.__extends(Record1904, _super);
    function Record1904() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Record1904.prototype.h = function (a) {
        a._b.dateSystem = a._av._readUInt16();
    };
    Record1904.prototype.i = function (a) {
        a._ci._write17(a._b.dateSystem);
    };
    Record1904.prototype.get_d = function () {
        return 34;
    };
    Object.defineProperty(Record1904.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    Record1904.$t = markType(Record1904, 'Record1904', Biff8RecordBase.$);
    return Record1904;
}(Biff8RecordBase));
export { Record1904 };
/**
 * @hidden
 */
var ACTIVEXMARKERRecord = /** @class */ (function (_super) {
    tslib_1.__extends(ACTIVEXMARKERRecord, _super);
    function ACTIVEXMARKERRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ACTIVEXMARKERRecord.prototype.h = function (a) {
    };
    ACTIVEXMARKERRecord.prototype.i = function (a) {
        a._b._co = true;
    };
    ACTIVEXMARKERRecord.prototype.get_d = function () {
        return 445;
    };
    Object.defineProperty(ACTIVEXMARKERRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    ACTIVEXMARKERRecord.$t = markType(ACTIVEXMARKERRecord, 'ACTIVEXMARKERRecord', Biff8RecordBase.$);
    return ACTIVEXMARKERRecord;
}(Biff8RecordBase));
export { ACTIVEXMARKERRecord };
/**
 * @hidden
 */
var ARRAYRecord = /** @class */ (function (_super) {
    tslib_1.__extends(ARRAYRecord, _super);
    function ARRAYRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ARRAYRecord.prototype.h = function (a) {
        var e_66, _0;
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = new Array(0);
        var d = 0;
        var e = ((function () { var f = a._av._readUInt16FromBuffer(c, d); c = f.p0; d = f.p1; return f.ret; })());
        var f = ((function () { var g = a._av._readUInt16FromBuffer(c, d); c = g.p0; d = g.p1; return g.ret; })());
        var g = ((function () { var h = a._av.readByteFromBuffer(c, d); c = h.p0; d = h.p1; return h.ret; })());
        var h = ((function () { var i = a._av.readByteFromBuffer(c, d); c = i.p0; d = i.p1; return i.ret; })());
        var i = ((function () { var j = a._av._readUInt16FromBuffer(c, d); c = j.p0; d = j.p1; return j.ret; })());
        var j = (i & 1) == 1;
        var k = (i & 2) == 2;
        var l = a._av._readUInt32FromBuffer(c, d);
        c = l.p0;
        d = l.p1;
        var m = ((function () { var n = a._as(c, d); c = n.p0; d = n.p1; return n.ret; })());
        m._an = k;
        m._applyTo3(b._cx(e, g, f, h));
        var n = new List$1(KeyValuePair$2.$.specialize(WorksheetCellAddress.$, ExcelCalcValue.$), 1, a._bk);
        try {
            for (var _1 = tslib_1.__values(fromEnum(n)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var o = _2.value;
                var p = o.key;
                var q = o.value;
                var r = p.o;
                var s = p.m;
                if (e <= r && r <= f && g <= s && s <= h) {
                    a._bk.removeItem(p);
                    b._rows$i.item(r)._d0(s, q);
                }
            }
        }
        catch (e_66_1) { e_66 = { error: e_66_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_66) throw e_66.error; }
        }
    };
    ARRAYRecord.prototype.i = function (a) {
        var b = a._cj;
        var c = typeCast(ArrayInteriorFormula.$, b.c);
        if (c == null) {
            return;
        }
        var d = c._cz;
        a._ci._write17(d.cellRange.firstRow);
        a._ci._write17(d.cellRange.lastRow);
        a._ci._write9(d.cellRange.firstColumn);
        a._ci._write9(d.cellRange.lastColumn);
        var e = 0;
        if (d._ax) {
            e |= 1;
        }
        if (b.b._as(a._ch.r)._be()) {
            e |= 2;
        }
        a._ci._write17(e);
        a._ci._write18(intSToU(0));
        a._c2(d, true, false);
    };
    ARRAYRecord.prototype.get_d = function () {
        return 545;
    };
    Object.defineProperty(ARRAYRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    ARRAYRecord.$t = markType(ARRAYRecord, 'ARRAYRecord', Biff8RecordBase.$);
    return ARRAYRecord;
}(Biff8RecordBase));
export { ARRAYRecord };
/**
 * @hidden
 */
var AUTOFILTERRecordBase = /** @class */ (function (_super) {
    tslib_1.__extends(AUTOFILTERRecordBase, _super);
    function AUTOFILTERRecordBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AUTOFILTERRecordBase.$t = markType(AUTOFILTERRecordBase, 'AUTOFILTERRecordBase', Biff8RecordBase.$);
    return AUTOFILTERRecordBase;
}(Biff8RecordBase));
export { AUTOFILTERRecordBase };
/**
 * @hidden
 */
var AUTOFILTER12Record = /** @class */ (function (_super) {
    tslib_1.__extends(AUTOFILTER12Record, _super);
    function AUTOFILTER12Record() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AUTOFILTER12Record.prototype.h = function (a) {
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = a._av._readFrtRefHeader(b);
        var d = a._av._readUInt16();
        var e = a._av._readUInt32();
        var f = a._av._readUInt32();
        var g = a._av._readUInt32();
        var h = a._av._readUInt32();
        var i = a._av._readUInt32();
        var j = a._av._readUInt16();
        var k = ExcelUtils.bt(j, 3);
        var l = a._av._readUInt32();
        var m = a._av._readUInt32();
        var n = null;
        var o;
        if (m == 4294967295) {
            if (b.filterSettings.region == null) {
                b.filterSettings._bm(c);
            }
            else {
            }
            o = new WorksheetColumnFilter(1, b, d);
        }
        else {
            var p = b._tables$i._g(m);
            if (p == null) {
                return;
            }
            if (p._columns$i.count <= d) {
                return;
            }
            n = p._columns$i._item(d);
            o = n;
        }
        var q = a._av._readBytes(16);
        var r = null;
        var s = Nullable$1.toNullable(Number_$type, null);
        var t = Nullable$1.toNullable(Number_$type, null);
        switch (g) {
            case 0: break;
            case 1:
            case 2:
                {
                    var u = null;
                    if (h >= 1) {
                        u = a._av._readAF12Criteria(b);
                    }
                    var v = void 0;
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
                    var w = null;
                    var x = null;
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
                        var y = a._av._readAF12Criteria(b);
                        if (h >= 2) {
                            var z = a._av._readAF12Criteria(b);
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
                        var aa = null;
                        if (h != 0) {
                            if (aa == null) {
                                aa = new FixedValuesFilter(o);
                            }
                            for (var ab = 0; ab < h; ab++) {
                                var ac = a._av._readAF12Criteria(b);
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
                            for (var ad = 0; ad < i; ad++) {
                                var ae = a._av._readAF12DateInfo(b);
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
                        var af = a._av._readDXFN12NoCB();
                        r = FillFilter._p(n, af);
                    }
                    break;
                case 2:
                    {
                        var ag = a._av._readDXFN12NoCB();
                        r = FontColorFilter._n(n, ag);
                    }
                    break;
                case 3:
                    {
                        var ah = void 0;
                        var ai = void 0;
                        var aj = a._av._readAF12CellIcon(ah, ai);
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
            var ak = typeCast(WorksheetColumnFilter.$, o);
            ak._g(r);
            b.filterSettings._a3(ak);
        }
    };
    AUTOFILTER12Record.prototype.i = function (a) {
        var b = a._b7.a(TableColumnFilterData.$);
        if (b == null) {
            return;
        }
        var c = a._b7.a(Worksheet.$);
        if (c == null) {
            return;
        }
        var d = b.a;
        var e = b.c != null ? b.c.table._bq : c.filterSettings.region;
        var f = 0;
        var g = typeCast(IColorFilter_$type, d);
        if (g != null) {
            if (g.isCellColorFilter) {
                f = 1;
            }
            else {
                f = 2;
            }
        }
        var h = typeCast(IconFilter.$, d);
        if (h != null) {
            f = 3;
        }
        var i = 0;
        var j = new List$1(Biff8RecordStream_AFDOper.$, 0);
        var k;
        var l = typeCast(FixedValuesFilter.$, d);
        if (l != null) {
            if (b.f != null) {
                for (var m = 0; m < b.f.count; m++) {
                    j.add(new Biff8RecordStream_AFDOper(1, b.f.item(m)));
                }
            }
            if (l.includeBlanks) {
                var n = new Biff8RecordStream_AFDOper(0);
                n.c = 12;
                j.add(n);
            }
            k = l._dateGroups$i;
        }
        else {
            k = boxArray$1(new Array(0));
            var o = typeCast(DynamicValuesFilter.$, d);
            if (o != null) {
                i = intSToU(o._n);
                var p = typeCast(AverageFilter.$, d);
                var q = typeCast(DatePeriodFilter.$, d);
                var r = typeCast(DateRangeFilter.$, d);
                if (p != null) {
                    var s = p.type == 0 ? 4 : 1;
                    j.add(new Biff8RecordStream_AFDOper(2, p.average, s));
                }
                else if (q != null) {
                    j.add(new Biff8RecordStream_AFDOper(2, 6.50121220736663E-319, 6));
                    j.add(new Biff8RecordStream_AFDOper(2, 1.66431042389899E-316, 1));
                }
                else if (r != null) {
                    var t = ExcelCalcValue._dateTimeToExcelDate(a._b, r.start);
                    var u = ExcelCalcValue._dateTimeToExcelDate(a._b, r.end);
                    if (t.hasValue && u.hasValue) {
                        j.add(new Biff8RecordStream_AFDOper(2, t.value, 6));
                        j.add(new Biff8RecordStream_AFDOper(2, u.value, 1));
                    }
                    else {
                    }
                }
            }
        }
        var v = b.c == null;
        var w = 4294967295;
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
        var x = 0;
        var y = ExcelUtils.f7(x, v, 3);
        x = y.p0;
        a._ci._write17(x);
        a._ci._write18(intSToU(0));
        a._ci._write18(w);
        a._ci._write2(new Array(16));
        switch (f) {
            case 0:
                {
                    for (var z = 0; z < j.count; z++) {
                        a._ci._capCurrentBlock();
                        a._ci._writeAF12Criteria(e, j._inner[z]);
                    }
                    for (var aa = 0; aa < k.count; aa++) {
                        a._ci._capCurrentBlock();
                        a._ci._writeAF12DateInfo(e, k.item(aa));
                    }
                }
                break;
            case 1:
            case 2:
                {
                    var ab = a._y(g);
                    a._ci._writeDXFN12NoCB(ab);
                }
                break;
            case 3:
                a._ci._writeAF12CellIcon(h._m, h._p.getValueOrDefault());
                break;
            default: break;
        }
    };
    AUTOFILTER12Record.prototype.get_d = function () {
        return 2174;
    };
    Object.defineProperty(AUTOFILTER12Record.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    AUTOFILTER12Record.$t = markType(AUTOFILTER12Record, 'AUTOFILTER12Record', AUTOFILTERRecordBase.$);
    return AUTOFILTER12Record;
}(AUTOFILTERRecordBase));
export { AUTOFILTER12Record };
/**
 * @hidden
 */
var AUTOFILTERRecord = /** @class */ (function (_super) {
    tslib_1.__extends(AUTOFILTERRecord, _super);
    function AUTOFILTERRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AUTOFILTERRecord.prototype.h = function (a) {
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        if (b.filterSettings.region == null) {
            return;
        }
        var c = new WorksheetColumnFilter(0, b);
        var d = a._av._readAutoFilter(b, c);
        if (d != null) {
            c._g(d);
            b.filterSettings._a3(c);
        }
    };
    AUTOFILTERRecord.prototype.i = function (a) {
        var b = a._b7.a(TableColumnFilterData.$);
        if (b == null) {
            return;
        }
        a._ci._writeAutoFilter(b);
    };
    AUTOFILTERRecord.prototype.get_d = function () {
        return 158;
    };
    Object.defineProperty(AUTOFILTERRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    AUTOFILTERRecord.$t = markType(AUTOFILTERRecord, 'AUTOFILTERRecord', AUTOFILTERRecordBase.$);
    return AUTOFILTERRecord;
}(AUTOFILTERRecordBase));
export { AUTOFILTERRecord };
/**
 * @hidden
 */
var AUTOFILTERINFORecord = /** @class */ (function (_super) {
    tslib_1.__extends(AUTOFILTERINFORecord, _super);
    function AUTOFILTERINFORecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AUTOFILTERINFORecord.prototype.h = function (a) {
        var b = a._av._readUInt16();
    };
    AUTOFILTERINFORecord.prototype.i = function (a) {
        var b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        if (b.filterSettings.region == null) {
            return;
        }
        a._ci._write17(b.filterSettings.region._ad);
    };
    AUTOFILTERINFORecord.prototype.get_d = function () {
        return 157;
    };
    Object.defineProperty(AUTOFILTERINFORecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    AUTOFILTERINFORecord.$t = markType(AUTOFILTERINFORecord, 'AUTOFILTERINFORecord', Biff8RecordBase.$);
    return AUTOFILTERINFORecord;
}(Biff8RecordBase));
export { AUTOFILTERINFORecord };
/**
 * @hidden
 */
var BACKUPRecord = /** @class */ (function (_super) {
    tslib_1.__extends(BACKUPRecord, _super);
    function BACKUPRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BACKUPRecord.prototype.h = function (a) {
        var b = a._av._readUInt16() == 1;
    };
    BACKUPRecord.prototype.i = function (a) {
        a._ci._write17(0);
    };
    BACKUPRecord.prototype.get_d = function () {
        return 64;
    };
    Object.defineProperty(BACKUPRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    BACKUPRecord.$t = markType(BACKUPRecord, 'BACKUPRecord', Biff8RecordBase.$);
    return BACKUPRecord;
}(Biff8RecordBase));
export { BACKUPRecord };
/**
 * @hidden
 */
var BITMAPRecord = /** @class */ (function (_super) {
    tslib_1.__extends(BITMAPRecord, _super);
    function BITMAPRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BITMAPRecord.prototype.h = function (a) {
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = a._av._readUInt16();
        var d = a._av._readUInt16();
        var e = a._av._readUInt32();
        var f = a._av._readUInt16();
        var g = a._av._readUInt16();
        var h = a._av._readUInt16();
        var i = a._av._readUInt16();
        var j = ExcelUtils.dj(h * 3, 4);
        var k = j * i;
        var l = a._av._readUInt16();
        var m = a._av._readUInt16();
        var n = a._av._readBytes(k);
        b._je = ExcelUtils.g3(n, h, i);
    };
    BITMAPRecord.prototype.i = function (a) {
        var b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = b._je;
        if (c == null) {
            return;
        }
        var d;
        var e;
        var f = ((function () { var g = ExcelUtils.b(c, d, e); d = g.p1; e = g.p2; return g.ret; })());
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
    };
    BITMAPRecord.prototype.get_d = function () {
        return 233;
    };
    Object.defineProperty(BITMAPRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    BITMAPRecord.$t = markType(BITMAPRecord, 'BITMAPRecord', Biff8RecordBase.$);
    return BITMAPRecord;
}(Biff8RecordBase));
export { BITMAPRecord };
/**
 * @hidden
 */
var CellValueRecordBase = /** @class */ (function (_super) {
    tslib_1.__extends(CellValueRecordBase, _super);
    function CellValueRecordBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CellValueRecordBase.prototype.h = function (a) {
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = new Array(0);
        var d = 0;
        var e = ((function () { var f = a._av._readUInt16FromBuffer(c, d); c = f.p0; d = f.p1; return f.ret; })());
        var f = ((function () { var g = a._av._readInt16FromBuffer(c, d); c = g.p0; d = g.p1; return g.ret; })());
        var g = a._a6(b, e);
        var h = ((function () { var i = a._av._readUInt16FromBuffer(c, d); c = i.p0; d = i.p1; return i.ret; })());
        var i;
        if (h < a._b2.count) {
            i = a._b2._inner[h];
        }
        else {
            i = a._b._ca._p;
        }
        {
            g._d3(f, i);
        }
        var j;
        var k;
        var l = this.o(a, c, d, j, k);
        c = l.p1;
        d = l.p2;
        j = l.p3;
        k = l.p4;
        var m = typeCast(Formula.$, j);
        if (m != null) {
            if (m._aq == false) {
                m._bp(g, f);
                g._d0(f, CalcUtilities.c(k));
            }
            else {
                var n = typeCast(ExpToken.$, m._e[0]);
                if (n != null) {
                    var o = n.p.r;
                    var p = n.p.t;
                    var q_1 = new WorksheetCellAddress(1, p, o);
                    var r_1;
                    if (((function () { var s = a._bl.tryGetValue(q_1, r_1); r_1 = s.p1; return s.ret; })())) {
                        r_1._bp(g, f);
                        g._d0(f, CalcUtilities.c(k));
                    }
                    else if (p == g.index && o == f) {
                        a._bk.item(q_1, CalcUtilities.c(k));
                    }
                }
            }
        }
        else {
            g._d6(f, j);
        }
    };
    CellValueRecordBase.prototype.i = function (a) {
        var b = a._cj;
        var c = a._ch;
        var d = new MemoryStream(1, 32);
        d.write(BitConverter.h(b.b.index), 0, 2);
        d.write(BitConverter.d(c.r), 0, 2);
        var e = a._a6(c.j);
        if (e < 0) {
            e = 0;
        }
        d.write(BitConverter.h(e), 0, 2);
        this.p(a, d);
    };
    CellValueRecordBase.$t = markType(CellValueRecordBase, 'CellValueRecordBase', Biff8RecordBase.$);
    return CellValueRecordBase;
}(Biff8RecordBase));
export { CellValueRecordBase };
/**
 * @hidden
 */
var BLANKRecord = /** @class */ (function (_super) {
    tslib_1.__extends(BLANKRecord, _super);
    function BLANKRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BLANKRecord.prototype.o = function (a, b, c, d, e) {
        d = e = null;
        return {
            p1: b,
            p2: c,
            p3: d,
            p4: e
        };
    };
    BLANKRecord.prototype.p = function (a, b) {
        a._ci._write13(b);
    };
    BLANKRecord.prototype.get_d = function () {
        return 513;
    };
    Object.defineProperty(BLANKRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    BLANKRecord.$t = markType(BLANKRecord, 'BLANKRecord', CellValueRecordBase.$);
    return BLANKRecord;
}(CellValueRecordBase));
export { BLANKRecord };
/**
 * @hidden
 */
var BOFRecord = /** @class */ (function (_super) {
    tslib_1.__extends(BOFRecord, _super);
    function BOFRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BOFRecord.prototype.h = function (a) {
        var b = a._av._readUInt16();
        var c = null;
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
        var d = a._av._readUInt16();
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
                    var e = a._b._worksheets$i._item(a._b6);
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
                            var f = new Biff8RecordStream(1, a);
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
    };
    BOFRecord.prototype.i = function (a) {
        a._ci._write17(1536);
        var b = a._b7.f;
        var c = typeCast(Worksheet.$, b);
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
    };
    BOFRecord.prototype.get_n = function () {
        return false;
    };
    BOFRecord.prototype.get_d = function () {
        return 2057;
    };
    Object.defineProperty(BOFRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    BOFRecord.$t = markType(BOFRecord, 'BOFRecord', Biff8RecordBase.$);
    return BOFRecord;
}(Biff8RecordBase));
export { BOFRecord };
/**
 * @hidden
 */
var BOOKBOOLRecord = /** @class */ (function (_super) {
    tslib_1.__extends(BOOKBOOLRecord, _super);
    function BOOKBOOLRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BOOKBOOLRecord.prototype.h = function (a) {
        var b = a._av._readUInt16();
        var c = (b & 1) == 1;
        a._b.saveExternalLinkedValues = (c == false);
    };
    BOOKBOOLRecord.prototype.i = function (a) {
        var b = 0;
        if (a._b.saveExternalLinkedValues == false) {
            b |= 1;
        }
        a._ci._write17(b);
    };
    BOOKBOOLRecord.prototype.get_d = function () {
        return 218;
    };
    Object.defineProperty(BOOKBOOLRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    BOOKBOOLRecord.$t = markType(BOOKBOOLRecord, 'BOOKBOOLRecord', Biff8RecordBase.$);
    return BOOKBOOLRecord;
}(Biff8RecordBase));
export { BOOKBOOLRecord };
/**
 * @hidden
 */
var BOOKEXTRecord = /** @class */ (function (_super) {
    tslib_1.__extends(BOOKEXTRecord, _super);
    function BOOKEXTRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BOOKEXTRecord.prototype.h = function (a) {
    };
    BOOKEXTRecord.prototype.i = function (a) {
    };
    BOOKEXTRecord.prototype.get_d = function () {
        return 2147;
    };
    Object.defineProperty(BOOKEXTRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    BOOKEXTRecord.$t = markType(BOOKEXTRecord, 'BOOKEXTRecord', Biff8RecordBase.$);
    return BOOKEXTRecord;
}(Biff8RecordBase));
export { BOOKEXTRecord };
/**
 * @hidden
 */
var BOOLERRRecord = /** @class */ (function (_super) {
    tslib_1.__extends(BOOLERRRecord, _super);
    function BOOLERRRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BOOLERRRecord.prototype.o = function (a, b, c, d, e) {
        var f = ((function () { var g = a._av.readByteFromBuffer(b, c); b = g.p0; c = g.p1; return g.ret; })());
        var g = ((function () { var h = a._av.readByteFromBuffer(b, c); b = h.p0; c = h.p1; return h.ret; })()) == 1;
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
    };
    BOOLERRRecord.prototype.p = function (a, b) {
        var c = a._cj.c;
        var d = typeCast(ErrorValue.$, c);
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
    };
    BOOLERRRecord.prototype.get_d = function () {
        return 517;
    };
    Object.defineProperty(BOOLERRRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    BOOLERRRecord.$t = markType(BOOLERRRecord, 'BOOLERRRecord', CellValueRecordBase.$);
    return BOOLERRRecord;
}(CellValueRecordBase));
export { BOOLERRRecord };
/**
 * @hidden
 */
var BOTTOMMARGINRecord = /** @class */ (function (_super) {
    tslib_1.__extends(BOTTOMMARGINRecord, _super);
    function BOTTOMMARGINRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BOTTOMMARGINRecord.prototype.h = function (a) {
        var b = a._ai.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        b.bottomMargin = a._av._readDouble();
    };
    BOTTOMMARGINRecord.prototype.i = function (a) {
        var b = a._b7.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        a._ci._write10(b.bottomMargin);
    };
    BOTTOMMARGINRecord.prototype.get_d = function () {
        return 41;
    };
    Object.defineProperty(BOTTOMMARGINRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    BOTTOMMARGINRecord.$t = markType(BOTTOMMARGINRecord, 'BOTTOMMARGINRecord', Biff8RecordBase.$);
    return BOTTOMMARGINRecord;
}(Biff8RecordBase));
export { BOTTOMMARGINRecord };
/**
 * @hidden
 */
var BOUNDSHEETRecord = /** @class */ (function (_super) {
    tslib_1.__extends(BOUNDSHEETRecord, _super);
    function BOUNDSHEETRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BOUNDSHEETRecord.prototype.h = function (a) {
        a._av._readUInt32();
        var b = a._av.readByte();
        var c = a._av.readByte();
        var d = a._av._readFormattedString(0);
        {
            var e_67;
            if (((function () { var f = a._bm.tryGetValue(a._b._sheets$i.count, e_67); e_67 = f.p1; return f.ret; })()) == false) {
                e_67 = a._b._g2();
            }
            var f = c == 2 ? 1 : 0;
            var g = a._b._sheets$i._add2(d._y, e_67, f);
            var h = g.type == 0 ? g : null;
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
    };
    BOUNDSHEETRecord.prototype.i = function (a) {
        var b = a._b7.a(Sheet.$);
        if (b == null) {
            return;
        }
        var c;
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
    };
    BOUNDSHEETRecord.prototype.get_d = function () {
        return 133;
    };
    Object.defineProperty(BOUNDSHEETRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    BOUNDSHEETRecord.$t = markType(BOUNDSHEETRecord, 'BOUNDSHEETRecord', Biff8RecordBase.$);
    return BOUNDSHEETRecord;
}(Biff8RecordBase));
export { BOUNDSHEETRecord };
/**
 * @hidden
 */
var CALCCOUNTRecord = /** @class */ (function (_super) {
    tslib_1.__extends(CALCCOUNTRecord, _super);
    function CALCCOUNTRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CALCCOUNTRecord.prototype.h = function (a) {
        a._b.maxRecursionIterations = a._av._readUInt16();
    };
    CALCCOUNTRecord.prototype.i = function (a) {
        a._ci._write17(a._b.maxRecursionIterations);
    };
    CALCCOUNTRecord.prototype.get_d = function () {
        return 12;
    };
    Object.defineProperty(CALCCOUNTRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    CALCCOUNTRecord.$t = markType(CALCCOUNTRecord, 'CALCCOUNTRecord', Biff8RecordBase.$);
    return CALCCOUNTRecord;
}(Biff8RecordBase));
export { CALCCOUNTRecord };
/**
 * @hidden
 */
var CALCMODERecord = /** @class */ (function (_super) {
    tslib_1.__extends(CALCMODERecord, _super);
    function CALCMODERecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CALCMODERecord.prototype.h = function (a) {
        var b = a._av._readUInt16();
        a._b.calculationMode = b;
        if (EnumUtil.isDefined(CalculationMode_$type, enumGetBox(CalculationMode_$type, a._b.calculationMode)) == false) {
            a._b.calculationMode = 2;
        }
    };
    CALCMODERecord.prototype.i = function (a) {
        a._ci._write17(a._b.calculationMode);
    };
    CALCMODERecord.prototype.get_d = function () {
        return 13;
    };
    Object.defineProperty(CALCMODERecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    CALCMODERecord.$t = markType(CALCMODERecord, 'CALCMODERecord', Biff8RecordBase.$);
    return CALCMODERecord;
}(Biff8RecordBase));
export { CALCMODERecord };
/**
 * @hidden
 */
var CF12Record = /** @class */ (function (_super) {
    tslib_1.__extends(CF12Record, _super);
    function CF12Record() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CF12Record.prototype.h = function (a) {
        var b = CFUtils.a(a);
        if (b == null) {
            return;
        }
        var c = a._ax(b);
        var d = c.b;
        if (d == null || d.h == false) {
            if (c.a != null && c.a.b != null) {
                d = c.a.b;
            }
            else {
                return;
            }
        }
        var e = a._av._readCf12(a, b);
        d.i.add(e);
    };
    CF12Record.prototype.i = function (a) {
        var b = a._b7.a(Worksheet.$);
        var c = a._b7.a(CONDFMTSerializer.$);
        var d = a._b7.a(ConditionBase.$);
        a._ci._writeCf12(c, d, b, a);
    };
    CF12Record.prototype.get_d = function () {
        return 2170;
    };
    Object.defineProperty(CF12Record.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    CF12Record.$t = markType(CF12Record, 'CF12Record', Biff8RecordBase.$);
    return CF12Record;
}(Biff8RecordBase));
export { CF12Record };
/**
 * @hidden
 */
var CFEXRecord = /** @class */ (function (_super) {
    tslib_1.__extends(CFEXRecord, _super);
    function CFEXRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CFEXRecord.prototype.h = function (a) {
        var b = CFUtils.a(a);
        if (b == null) {
            return;
        }
        var c = a._ax(b);
        var d = a._av._readCfEx(a, b);
        if (d == null || d.f != 2171) {
            return;
        }
        var e = d.a != null ? d.b.i.item(d.a.e) : null;
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
    };
    CFEXRecord.prototype.i = function (a) {
    };
    CFEXRecord.prototype.get_d = function () {
        return 2171;
    };
    Object.defineProperty(CFEXRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    CFEXRecord.$t = markType(CFEXRecord, 'CFEXRecord', Biff8RecordBase.$);
    return CFEXRecord;
}(Biff8RecordBase));
export { CFEXRecord };
/**
 * @hidden
 */
var CFRecord = /** @class */ (function (_super) {
    tslib_1.__extends(CFRecord, _super);
    function CFRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CFRecord.prototype.h = function (a) {
        var b = CFUtils.a(a);
        if (b == null) {
            return;
        }
        var c = a._ax(b);
        var d = c.b;
        if (d == null) {
            return;
        }
        var e = a._av._readCf(a, b);
        d.i.add(e);
    };
    CFRecord.prototype.i = function (a) {
    };
    CFRecord.prototype.get_d = function () {
        return 433;
    };
    Object.defineProperty(CFRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    CFRecord.$t = markType(CFRecord, 'CFRecord', Biff8RecordBase.$);
    return CFRecord;
}(Biff8RecordBase));
export { CFRecord };
/**
 * @hidden
 */
var CODEPAGERecord = /** @class */ (function (_super) {
    tslib_1.__extends(CODEPAGERecord, _super);
    function CODEPAGERecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CODEPAGERecord.prototype.h = function (a) {
        var b = a._av._readUInt16();
    };
    CODEPAGERecord.prototype.i = function (a) {
        a._ci._write17(ExcelUtils.c2(Encoding.unicode));
    };
    CODEPAGERecord.prototype.get_d = function () {
        return 66;
    };
    Object.defineProperty(CODEPAGERecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    CODEPAGERecord.$t = markType(CODEPAGERecord, 'CODEPAGERecord', Biff8RecordBase.$);
    return CODEPAGERecord;
}(Biff8RecordBase));
export { CODEPAGERecord };
/**
 * @hidden
 */
var COLINFORecord = /** @class */ (function (_super) {
    tslib_1.__extends(COLINFORecord, _super);
    function COLINFORecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    COLINFORecord.prototype.h = function (a) {
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = a._av._readUInt16();
        var d = a._av._readUInt16();
        var e = a._av._readUInt16();
        var f = a._av._readUInt16();
        if (f < 0) {
            f = 0;
        }
        var g = a._av._readUInt16();
        var h = (g & 1) == 1;
        var i = (g & 1792) >> 8;
        var j = (g & 4096) == 4096;
        var k = a._b2._inner[f];
        if (d == 256) {
            b._b2 = k._bu();
        }
        if (c != 256) {
            d = Math.min(255, d);
            b._hw(c, d, e, h, i, k);
        }
        a._av.seek(2, 1);
    };
    COLINFORecord.prototype.i = function (a) {
        var b = a._b7.a(WorksheetColumnBlock.$);
        if (b == null) {
            return;
        }
        var c = a._b7.a(Worksheet.$);
        if (c == null) {
            return;
        }
        a._ci._write17(b.q);
        var d = b.r;
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
        var e = 2;
        if (b.i) {
            e |= 1;
        }
        e |= (b.m << 8);
        if (a._ad(b)) {
            e |= 4096;
        }
        a._ci._write17(e);
        a._ci._write17(0);
    };
    COLINFORecord.prototype.get_d = function () {
        return 125;
    };
    Object.defineProperty(COLINFORecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    COLINFORecord.$t = markType(COLINFORecord, 'COLINFORecord', Biff8RecordBase.$);
    return COLINFORecord;
}(Biff8RecordBase));
export { COLINFORecord };
/**
 * @hidden
 */
var CONDFMT12Record = /** @class */ (function (_super) {
    tslib_1.__extends(CONDFMT12Record, _super);
    function CONDFMT12Record() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CONDFMT12Record.prototype.h = function (a) {
        var b = CFUtils.a(a);
        if (b == null) {
            return;
        }
        var c = a._ax(b);
        var d = a._av._readCondFmt12(b);
        c.h(d);
    };
    CONDFMT12Record.prototype.i = function (a) {
        var b = a._b7.a(Worksheet.$);
        var c = a._b7.a(CONDFMTSerializer.$);
        if (c == null) {
            return;
        }
        a._ci._writeCondFmt12(c, b);
    };
    CONDFMT12Record.prototype.get_d = function () {
        return 2169;
    };
    Object.defineProperty(CONDFMT12Record.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    CONDFMT12Record.$t = markType(CONDFMT12Record, 'CONDFMT12Record', Biff8RecordBase.$);
    return CONDFMT12Record;
}(Biff8RecordBase));
export { CONDFMT12Record };
/**
 * @hidden
 */
var CONDFMTRecord = /** @class */ (function (_super) {
    tslib_1.__extends(CONDFMTRecord, _super);
    function CONDFMTRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CONDFMTRecord.prototype.h = function (a) {
        var b = CFUtils.a(a);
        if (b == null) {
            return;
        }
        var c = a._ax(b);
        var d = a._av._readCondFmt(b);
        c.h(d);
    };
    CONDFMTRecord.prototype.i = function (a) {
    };
    CONDFMTRecord.prototype.get_d = function () {
        return 432;
    };
    Object.defineProperty(CONDFMTRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    CONDFMTRecord.$t = markType(CONDFMTRecord, 'CONDFMTRecord', Biff8RecordBase.$);
    return CONDFMTRecord;
}(Biff8RecordBase));
export { CONDFMTRecord };
/**
 * @hidden
 */
var COUNTRYRecord = /** @class */ (function (_super) {
    tslib_1.__extends(COUNTRYRecord, _super);
    function COUNTRYRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    COUNTRYRecord.prototype.h = function (a) {
        a._av._readUInt16();
        a._av._readUInt16();
    };
    COUNTRYRecord.prototype.i = function (a) {
        a._ci._write17(1);
        a._ci._write17(1);
    };
    COUNTRYRecord.prototype.get_d = function () {
        return 140;
    };
    Object.defineProperty(COUNTRYRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    COUNTRYRecord.$t = markType(COUNTRYRecord, 'COUNTRYRecord', Biff8RecordBase.$);
    return COUNTRYRecord;
}(Biff8RecordBase));
export { COUNTRYRecord };
/**
 * @hidden
 */
var CRNRecord = /** @class */ (function (_super) {
    tslib_1.__extends(CRNRecord, _super);
    function CRNRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CRNRecord.prototype.h = function (a) {
        var b = typeCast(WorksheetReferenceExternal.$, a._a3);
        if (b == null) {
            return;
        }
        var c = a._av.readByte();
        var d = a._av.readByte();
        var e = a._av._readUInt16();
        for (var f = d; f <= c; f++) {
            var g = a._av.readByte();
            var h = void 0;
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
    };
    CRNRecord.prototype.i = function (a) {
    };
    CRNRecord.prototype.get_d = function () {
        return 90;
    };
    Object.defineProperty(CRNRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    CRNRecord.$t = markType(CRNRecord, 'CRNRecord', Biff8RecordBase.$);
    return CRNRecord;
}(Biff8RecordBase));
export { CRNRecord };
/**
 * @hidden
 */
var DBCELLRecord = /** @class */ (function (_super) {
    tslib_1.__extends(DBCELLRecord, _super);
    function DBCELLRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DBCELLRecord.prototype.h = function (a) {
        a._cj();
    };
    DBCELLRecord.prototype.i = function (a) {
        var e_68, _0;
        var b = a._b7.a(DBCELLRecord_DBCELLInfo.$);
        if (b == null) {
            return;
        }
        a._ci._syncWorkbookStreamPosition();
        var c = a._ci._getStartOfRecord();
        var d = b.d + 20;
        var e = new List$1(Number_$type, 0);
        e.add((b.b._inner[0] - d));
        for (var f = 0; f < b.b.count - 1; f++) {
            e.add((b.b._inner[f + 1] - b.b._inner[f]));
        }
        a._ci._write18((c - b.d));
        try {
            for (var _1 = tslib_1.__values(fromEnum(e)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var g = _2.value;
                a._ci._write17(g);
            }
        }
        catch (e_68_1) { e_68 = { error: e_68_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_68) throw e_68.error; }
        }
    };
    DBCELLRecord.prototype.get_d = function () {
        return 215;
    };
    Object.defineProperty(DBCELLRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    DBCELLRecord.$t = markType(DBCELLRecord, 'DBCELLRecord', Biff8RecordBase.$);
    return DBCELLRecord;
}(Biff8RecordBase));
export { DBCELLRecord };
/**
 * @hidden
 */
var DBCELLRecord_DBCELLInfo = /** @class */ (function (_super) {
    tslib_1.__extends(DBCELLRecord_DBCELLInfo, _super);
    function DBCELLRecord_DBCELLInfo(a, b) {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.c = 0;
        _this.a = b;
        _this.c = a;
        return _this;
    }
    Object.defineProperty(DBCELLRecord_DBCELLInfo.prototype, "b", {
        get: function () {
            return this.a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DBCELLRecord_DBCELLInfo.prototype, "d", {
        get: function () {
            return this.c;
        },
        enumerable: true,
        configurable: true
    });
    DBCELLRecord_DBCELLInfo.$t = markType(DBCELLRecord_DBCELLInfo, 'DBCELLRecord_DBCELLInfo');
    return DBCELLRecord_DBCELLInfo;
}(Base));
export { DBCELLRecord_DBCELLInfo };
/**
 * @hidden
 */
var DEFAULTROWHEIGHTRecord = /** @class */ (function (_super) {
    tslib_1.__extends(DEFAULTROWHEIGHTRecord, _super);
    function DEFAULTROWHEIGHTRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DEFAULTROWHEIGHTRecord.prototype.h = function (a) {
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = a._av._readUInt16();
        var d = (c & 1) == 1;
        b._dv = (c & 2) == 2;
        b._dt = (c & 4) == 4;
        b._ds = (c & 8) == 8;
        var e = a._av._readUInt16();
        if (d) {
            b.defaultRowHeight = e;
        }
    };
    DEFAULTROWHEIGHTRecord.prototype.i = function (a) {
        var b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = 0;
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
    };
    DEFAULTROWHEIGHTRecord.prototype.get_d = function () {
        return 549;
    };
    Object.defineProperty(DEFAULTROWHEIGHTRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    DEFAULTROWHEIGHTRecord.$t = markType(DEFAULTROWHEIGHTRecord, 'DEFAULTROWHEIGHTRecord', Biff8RecordBase.$);
    return DEFAULTROWHEIGHTRecord;
}(Biff8RecordBase));
export { DEFAULTROWHEIGHTRecord };
/**
 * @hidden
 */
var DEFCOLWIDTHRecord = /** @class */ (function (_super) {
    tslib_1.__extends(DEFCOLWIDTHRecord, _super);
    function DEFCOLWIDTHRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DEFCOLWIDTHRecord.prototype.h = function (a) {
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = a._av._readUInt16();
        b._iq(c, 2, true, false);
        b._d7 = true;
    };
    DEFCOLWIDTHRecord.prototype.i = function (a) {
        var b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = truncate(MathUtilities.j(b.getDefaultColumnWidth(2)));
        a._ci._write17(c);
    };
    DEFCOLWIDTHRecord.prototype.get_d = function () {
        return 85;
    };
    Object.defineProperty(DEFCOLWIDTHRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    DEFCOLWIDTHRecord.$t = markType(DEFCOLWIDTHRecord, 'DEFCOLWIDTHRecord', Biff8RecordBase.$);
    return DEFCOLWIDTHRecord;
}(Biff8RecordBase));
export { DEFCOLWIDTHRecord };
/**
 * @hidden
 */
var DELTARecord = /** @class */ (function (_super) {
    tslib_1.__extends(DELTARecord, _super);
    function DELTARecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DELTARecord.prototype.h = function (a) {
        a._b.maxChangeInIteration = a._av._readDouble();
    };
    DELTARecord.prototype.i = function (a) {
        a._ci._write10(a._b.maxChangeInIteration);
    };
    DELTARecord.prototype.get_d = function () {
        return 16;
    };
    Object.defineProperty(DELTARecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    DELTARecord.$t = markType(DELTARecord, 'DELTARecord', Biff8RecordBase.$);
    return DELTARecord;
}(Biff8RecordBase));
export { DELTARecord };
/**
 * @hidden
 */
var DIMENSIONSRecord = /** @class */ (function (_super) {
    tslib_1.__extends(DIMENSIONSRecord, _super);
    function DIMENSIONSRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DIMENSIONSRecord.prototype.h = function (a) {
        a._av._readUInt32();
        a._av._readUInt32();
        a._av._readUInt16();
        a._av._readUInt16();
        var b = a._av._readUInt16();
    };
    DIMENSIONSRecord.prototype.i = function (a) {
        var b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = a._w(b);
        a._ci._write18(c.p);
        a._ci._write18(c.q);
        a._ci._write17(c.n);
        a._ci._write17(c.o);
        a._ci._write17(0);
    };
    DIMENSIONSRecord.prototype.get_d = function () {
        return 512;
    };
    Object.defineProperty(DIMENSIONSRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    DIMENSIONSRecord.$t = markType(DIMENSIONSRecord, 'DIMENSIONSRecord', Biff8RecordBase.$);
    return DIMENSIONSRecord;
}(Biff8RecordBase));
export { DIMENSIONSRecord };
/**
 * @hidden
 */
var DSFRecord = /** @class */ (function (_super) {
    tslib_1.__extends(DSFRecord, _super);
    function DSFRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DSFRecord.prototype.h = function (a) {
        var b = a._av._readUInt16() == 1;
    };
    DSFRecord.prototype.i = function (a) {
        a._ci._write17(0);
    };
    DSFRecord.prototype.get_d = function () {
        return 353;
    };
    Object.defineProperty(DSFRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    DSFRecord.$t = markType(DSFRecord, 'DSFRecord', Biff8RecordBase.$);
    return DSFRecord;
}(Biff8RecordBase));
export { DSFRecord };
/**
 * @hidden
 */
var DVALRecord = /** @class */ (function (_super) {
    tslib_1.__extends(DVALRecord, _super);
    function DVALRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DVALRecord.prototype.h = function (a) {
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = a._av._readUInt16();
        var d = a._av._readInt32();
        var e = a._av._readInt32();
        var f = a._av._readInt32();
        var g = a._av._readInt32();
    };
    DVALRecord.prototype.i = function (a) {
        var b = a._b7.a(Worksheet.$);
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
    };
    DVALRecord.prototype.get_d = function () {
        return 434;
    };
    Object.defineProperty(DVALRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    DVALRecord.$t = markType(DVALRecord, 'DVALRecord', Biff8RecordBase.$);
    return DVALRecord;
}(Biff8RecordBase));
export { DVALRecord };
/**
 * @hidden
 */
var DVRecord = /** @class */ (function (_super) {
    tslib_1.__extends(DVRecord, _super);
    function DVRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DVRecord.prototype.h = function (a) {
        var e_69, _0;
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = new Array(0);
        var d = 0;
        var e = ((function () { var f = a._av._readUInt32FromBuffer(c, d); c = f.p0; d = f.p1; return f.ret; })());
        var f = (e & 15);
        var g = ((e & 112) >>> 4);
        var h = (e & 128) != 0;
        var i = (e & 256) != 0;
        var j = (e & 512) != 0;
        var k = (e & 261120) >>> 10;
        var l = (e & 262144) != 0;
        var m = (e & 524288) != 0;
        var n = ((e & 15728640) >>> 20);
        var o;
        switch (f) {
            case 0:
                o = new AnyValueDataValidationRule();
                break;
            case 3:
                var p = new ListDataValidationRule();
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
        var q = ((function () { var r = a._av.readFormattedStringFromBuffer(1, c, d); c = r.p1; d = r.p2; return r.ret; })())._y;
        var r = DVRecord.o(q);
        q = r.p0;
        o.inputMessageTitle = q;
        var s = ((function () { var t = a._av.readFormattedStringFromBuffer(1, c, d); c = t.p1; d = t.p2; return t.ret; })())._y;
        var t = DVRecord.o(s);
        s = t.p0;
        o.errorMessageTitle = s;
        var u = ((function () { var v = a._av.readFormattedStringFromBuffer(1, c, d); c = v.p1; d = v.p2; return v.ret; })())._y;
        var v = DVRecord.o(u);
        u = v.p0;
        o.inputMessageDescription = u;
        var w = ((function () { var x = a._av.readFormattedStringFromBuffer(1, c, d); c = x.p1; d = x.p2; return x.ret; })())._y;
        var x = DVRecord.o(w);
        w = x.p0;
        o.errorMessageDescription = w;
        var y = ((function () { var z = a._av._readUInt16FromBuffer(c, d); c = z.p0; d = z.p1; return z.ret; })());
        d += 2;
        var z = ((function () { var aa = a._au(o._i, y, c, d); c = aa.p2; d = aa.p3; return aa.ret; })());
        o._aq(z, null);
        if (h && z != null && z._e.length == 1) {
            var aa = typeCast(StrToken.$, z._e[0]);
            if (aa != null) {
                z._e[0] = new StrToken(1, stringReplace(aa.p, '\0', ','));
            }
        }
        var ab = ((function () { var ac = a._av._readUInt16FromBuffer(c, d); c = ac.p0; d = ac.p1; return ac.ret; })());
        d += 2;
        var ac = ((function () { var ad = a._au(o._i, ab, c, d); c = ad.p2; d = ad.p3; return ad.ret; })());
        o._ar(ac, null);
        var ad = ((function () { var ae = a._av._ao(c, d); c = ae.p0; d = ae.p1; return ae.ret; })());
        var ae = new WorksheetReferenceCollection(b);
        try {
            for (var _1 = tslib_1.__values(fromEnum(ad)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var af = _2.value;
                var ag = af.j(b, -1, -1, false);
                if (ag != null) {
                    ae._add(ag);
                }
                else {
                }
            }
        }
        catch (e_69_1) { e_69 = { error: e_69_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_69) throw e_69.error; }
        }
        b._dataValidationRules$i._al(o, ae);
    };
    DVRecord.prototype.i = function (a) {
        var b = a._b7.a(DataValidationRule.$);
        var c = a._b7.a(List$1.$.specialize(CellAddressRange.$));
        if (b == null || c == null) {
            return;
        }
        var d = typeCast(ListDataValidationRule.$, b);
        var e = b._l(null);
        var f = 0;
        f = u32BitwiseOr(f, b._k);
        f = u32BitwiseOr(f, u32LS(b.errorStyle, 4));
        if (d != null && e != null && e._e.length == 1 && typeCast(StrToken.$, e._e[0]) !== null) {
            e = e._g();
            var g = e._e[0];
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
        var h = b.inputMessageTitle;
        var i = DVRecord.p(h);
        h = i.p0;
        a._ci._write15(h, 1);
        var j = b.errorMessageTitle;
        var k = DVRecord.p(j);
        j = k.p0;
        a._ci._write15(j, 1);
        var l = b.inputMessageDescription;
        l = ExcelUtils.eh(l);
        var m = DVRecord.p(l);
        l = m.p0;
        a._ci._write15(l, 1);
        var n = b.errorMessageDescription;
        n = ExcelUtils.eh(n);
        var o = DVRecord.p(n);
        n = o.p0;
        a._ci._write15(n, 1);
        var p = a._ci.position;
        a._ci._write17(0);
        a._ci._write17(0);
        if (e != null) {
            var q = a._c2(e, false, false, false);
            var r = a._ci.position;
            a._ci.position = p;
            a._ci._write12(q);
            a._ci.position = r;
        }
        var s = a._ci.position;
        a._ci._write17(0);
        a._ci._write17(0);
        var t = b._m(null);
        if (t != null) {
            var u = a._c2(t, false, false, false);
            var v = a._ci.position;
            a._ci.position = s;
            a._ci._write12(u);
            a._ci.position = v;
        }
        var w = a._ci._write1(c, false);
        c.v(0, w);
    };
    DVRecord.prototype.get_d = function () {
        return 446;
    };
    Object.defineProperty(DVRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    DVRecord.o = function (a) {
        if (a.length == 1 && a.charAt(0) == String.fromCharCode(0)) {
            a = stringEmpty();
        }
        return {
            p0: a
        };
    };
    DVRecord.p = function (a) {
        if (stringIsNullOrEmpty(a)) {
            a = "\0";
        }
        return {
            p0: a
        };
    };
    DVRecord.$t = markType(DVRecord, 'DVRecord', Biff8RecordBase.$);
    return DVRecord;
}(Biff8RecordBase));
export { DVRecord };
/**
 * @hidden
 */
var DXFRecord = /** @class */ (function (_super) {
    tslib_1.__extends(DXFRecord, _super);
    function DXFRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DXFRecord.prototype.h = function (a) {
        a._av._readFrtHeader();
        var b = new DXFRecordInfo();
        var c = a._av._readUInt16();
        b.b = ExcelUtils.bt(c, 0);
        var d = ExcelUtils.bt(c, 1);
        var e = ExcelUtils.c6(c, 3, 15);
        b.a = a._av._readXFProps();
        a._bw.add(b);
    };
    DXFRecord.o = function (a, b) {
        var c = a._b._cd(2);
        Biff8RecordStream._applyXFProps(a._b, c, b.b, b.a);
        a._g.add(c);
    };
    DXFRecord.prototype.i = function (a) {
        var b = a._b7.a(WorksheetCellFormatData.$);
        if (b == null) {
            return;
        }
        a._ci._writeFrtHeader();
        var c = true;
        var d = 0;
        var e = ExcelUtils.f7(d, c, 0);
        d = e.p0;
        var f = ExcelUtils.f7(d, true, 1);
        d = f.p0;
        a._ci._write17(d);
        a._ci._writeXFProps(b);
    };
    DXFRecord.prototype.get_d = function () {
        return 2189;
    };
    Object.defineProperty(DXFRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    DXFRecord.$t = markType(DXFRecord, 'DXFRecord', Biff8RecordBase.$);
    return DXFRecord;
}(Biff8RecordBase));
export { DXFRecord };
/**
 * @hidden
 */
var DXFRecordInfo = /** @class */ (function (_super) {
    tslib_1.__extends(DXFRecordInfo, _super);
    function DXFRecordInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.b = false;
        _this.a = null;
        return _this;
    }
    DXFRecordInfo.$t = markType(DXFRecordInfo, 'DXFRecordInfo');
    return DXFRecordInfo;
}(Base));
export { DXFRecordInfo };
/**
 * @hidden
 */
var EOFRecord = /** @class */ (function (_super) {
    tslib_1.__extends(EOFRecord, _super);
    function EOFRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EOFRecord.prototype.get_e = function () {
        return true;
    };
    EOFRecord.prototype.h = function (a) {
    };
    EOFRecord.prototype.a = function (a) {
        var b = a._ai.h();
        return Async.g(typeCast(Workbook.$, b) !== null, function () { return WorkItemExtensions.a(a._ar(), function () { return a._z(); }); }, function () {
            var c = typeCast(Worksheet.$, b);
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
    };
    EOFRecord.prototype.i = function (a) {
    };
    EOFRecord.prototype.get_d = function () {
        return 10;
    };
    Object.defineProperty(EOFRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    EOFRecord.$t = markType(EOFRecord, 'EOFRecord', Biff8RecordBase.$);
    return EOFRecord;
}(Biff8RecordBase));
export { EOFRecord };
/**
 * @hidden
 */
var EXCEL9FILERecord = /** @class */ (function (_super) {
    tslib_1.__extends(EXCEL9FILERecord, _super);
    function EXCEL9FILERecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EXCEL9FILERecord.prototype.h = function (a) {
    };
    EXCEL9FILERecord.prototype.i = function (a) {
    };
    EXCEL9FILERecord.prototype.get_d = function () {
        return 448;
    };
    Object.defineProperty(EXCEL9FILERecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    EXCEL9FILERecord.$t = markType(EXCEL9FILERecord, 'EXCEL9FILERecord', Biff8RecordBase.$);
    return EXCEL9FILERecord;
}(Biff8RecordBase));
export { EXCEL9FILERecord };
/**
 * @hidden
 */
var EXTERNNAMERecord = /** @class */ (function (_super) {
    tslib_1.__extends(EXTERNNAMERecord, _super);
    function EXTERNNAMERecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EXTERNNAMERecord.prototype.h = function (a) {
        var b = new Array(0);
        var c = 0;
        var d = ((function () { var e = a._av._readUInt16FromBuffer(b, c); b = e.p0; c = e.p1; return e.ret; })());
        var e = ExcelUtils.bt(d, 0);
        var f = ExcelUtils.bt(d, 1);
        var g = ExcelUtils.bt(d, 2);
        var h = ExcelUtils.bt(d, 3);
        var i = ExcelUtils.bt(d, 4);
        if (typeCast(OleLinkWorkbookReference.$, a._a0) !== null || typeCast(DdeLinkWorkbookReference.$, a._a0) !== null) {
            var j = ((function () { var k = a._av._readUInt32FromBuffer(b, c); b = k.p0; c = k.p1; return k.ret; })());
            var k = ((function () { var l = a._av.readFormattedStringFromBuffer(0, b, c); b = l.p1; c = l.p2; return l.ret; })())._y;
            a._a0.c(k, a._a0, true);
            var l = typeCast(OleLinkWorkbookReference.$, a._a0);
            if (l != null) {
                l.ag.add(new OleItem(k, false, f, g));
            }
            else {
                var m = typeCast(DdeLinkWorkbookReference.$, a._a0);
                m.ag.add(new DdeItem(k, h, f, g));
            }
        }
        else {
            var n = ((function () { var o = a._av._readUInt16FromBuffer(b, c); b = o.p0; c = o.p1; return o.ret; })());
            var o = a._av._readUInt16FromBuffer(b, c);
            b = o.p0;
            c = o.p1;
            var p = a._i;
            var q = p._inner[p.count - 1];
            var r = ((function () { var s = a._av.readFormattedStringFromBuffer(0, b, c); b = s.p1; c = s.p2; return s.ret; })())._y;
            var s = ((function () { var t = a._at(4, b, c); b = t.p1; c = t.p2; return t.ret; })());
            var t = q;
            if (n > 0) {
                t = q.i(n - 1);
            }
            if (e) {
                r = NamedReferenceBase._av(r.charAt(0).charCodeAt(0));
            }
            var u = q.c(r, t, true);
            u._bb(s, false);
        }
    };
    EXTERNNAMERecord.prototype.i = function (a) {
        var b = a._b7.a(NamedReferenceBase.$);
        if (b == null || b._j == null) {
            return;
        }
        var c = false;
        var d = false;
        var e = false;
        var f = false;
        var g = typeCast(OleLinkNamedReference.$, b);
        if (g != null) {
            f = true;
            var h = typeCast(OleLinkWorkbookReference.$, g._h);
            if (h != null) {
                var i = Enumerable.ag(OleItem.$, h.ag, function (j) { return StringUtilities.e.equalsC(j.d, g.name); });
                if (i == null) {
                    i = new OleItem(g.name, false, true, false);
                    h.ag.add(i);
                }
                c = i.a;
                d = i.c;
            }
        }
        else if (typeCast(DdeLinkNamedReference.$, b) !== null) {
            var j_3 = b;
            var k = typeCast(DdeLinkWorkbookReference.$, j_3._h);
            if (k != null) {
                var l = Enumerable.ag(DdeItem.$, k.ag, function (m) { return StringUtilities.e.equalsC(m.d, j_3.name); });
                if (l == null) {
                    l = new DdeItem(j_3.name, j_3.name == "StdDocumentName", false, false);
                    k.ag.add(l);
                }
                c = l.a;
                d = l.c;
                e = l.b;
            }
        }
        var m = b.name;
        if (b._r) {
            m = String.fromCharCode(b._c).toString();
        }
        var n = 0;
        if (b._r) {
            var o = ExcelUtils.f7(n, true, 0);
            n = o.p0;
        }
        if (c) {
            var p = ExcelUtils.f7(n, true, 1);
            n = p.p0;
        }
        if (d) {
            var q = ExcelUtils.f7(n, true, 2);
            n = q.p0;
        }
        if (e) {
            var r = ExcelUtils.f7(n, true, 3);
            n = r.p0;
        }
        if (f) {
            var s = ExcelUtils.f7(n, true, 4);
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
    };
    EXTERNNAMERecord.prototype.get_d = function () {
        return 35;
    };
    Object.defineProperty(EXTERNNAMERecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    EXTERNNAMERecord.$t = markType(EXTERNNAMERecord, 'EXTERNNAMERecord', Biff8RecordBase.$);
    return EXTERNNAMERecord;
}(Biff8RecordBase));
export { EXTERNNAMERecord };
/**
 * @hidden
 */
var EXTERNSHEETRecord = /** @class */ (function (_super) {
    tslib_1.__extends(EXTERNSHEETRecord, _super);
    function EXTERNSHEETRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EXTERNSHEETRecord.prototype.h = function (a) {
        var b = a._av._readUInt16();
        var c = a._i;
        var d = a._j;
        for (var e = 0; e < b; e++) {
            var f = a._av._readUInt16();
            var g = a._av._readInt16();
            var h = a._av._readInt16();
            var i = c._inner[f];
            var j = void 0;
            var k = i.i(g);
            if (h == g) {
                j = k;
            }
            else {
                var l = i.i(h);
                j = i.f(k, l);
            }
            d.add(j);
        }
    };
    EXTERNSHEETRecord.prototype.i = function (a) {
        var e_70, _0;
        var b = a._j;
        var c = a._i;
        a._ci._write17(b.count);
        try {
            for (var _1 = tslib_1.__values(fromEnum(b)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var d = _2.value;
                var e = c.indexOf(d.e);
                a._ci._write17(e);
                a._ci._write11(d.l);
                a._ci._write11(d.m);
            }
        }
        catch (e_70_1) { e_70 = { error: e_70_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_70) throw e_70.error; }
        }
    };
    EXTERNSHEETRecord.prototype.get_d = function () {
        return 23;
    };
    Object.defineProperty(EXTERNSHEETRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    EXTERNSHEETRecord.$t = markType(EXTERNSHEETRecord, 'EXTERNSHEETRecord', Biff8RecordBase.$);
    return EXTERNSHEETRecord;
}(Biff8RecordBase));
export { EXTERNSHEETRecord };
/**
 * @hidden
 */
var EXTSSTRecord = /** @class */ (function (_super) {
    tslib_1.__extends(EXTSSTRecord, _super);
    function EXTSSTRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EXTSSTRecord.prototype.h = function (a) {
        if (nullableNotEquals(a._ce, null)) {
            a._cd = Nullable$1.toNullable(Number_$type, a._av._getStartOfRecord());
            return;
        }
        var b = a._av._readUInt16();
        if (b == 0) {
            return;
        }
        var c = a._u.count;
        if (c > 0) {
            var d = (intDivide((c - 1), b)) + 1;
            for (var e = 0; e < d; e++) {
                if (a._av.position == a._av.length) {
                    break;
                }
                a._av._readUInt32();
                a._av._readUInt16();
                a._av._readUInt16();
            }
        }
    };
    EXTSSTRecord.prototype.i = function (a) {
        a._ci._write17(8);
        if (a._a1 > 0) {
            for (var b = 0; b < a._cv.count; b++) {
                var c = a._cv._inner[b];
                a._ci._write18(c.b);
                a._ci._write17(c.a);
                a._ci._write17(0);
            }
        }
    };
    EXTSSTRecord.prototype.get_d = function () {
        return 255;
    };
    Object.defineProperty(EXTSSTRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    EXTSSTRecord.$t = markType(EXTSSTRecord, 'EXTSSTRecord', Biff8RecordBase.$);
    return EXTSSTRecord;
}(Biff8RecordBase));
export { EXTSSTRecord };
/**
 * @hidden
 */
var FEAT11Record = /** @class */ (function (_super) {
    tslib_1.__extends(FEAT11Record, _super);
    function FEAT11Record() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FEAT11Record.prototype.h = function (a) {
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = a._av._readFrtHeaderU(b);
        var d = a._av._readUInt16();
        var e = a._av.readByte();
        var f = a._av._readUInt32();
        var g = a._av._readUInt16();
        var h = a._av._readUInt32();
        var i = h;
        if (i == 0) {
            i = (a._av.length - (8 * g) - 27);
        }
        var j = a._av._readUInt16();
        var k = new Array(g);
        for (var l = 0; l < g; l++) {
            k[l] = a._av._readRef8U(b);
        }
        var m = c;
        if (k.length == 1) {
            m = k[0];
        }
        var n = a._av._readTableFeatureType(b, m);
        if (n != null) {
            b._tables$i._t(n);
        }
    };
    FEAT11Record.prototype.i = function (a) {
        var b = a._b7.a(WorksheetTable.$);
        var c = a._b7.a(SortedList$2.$.specialize(Number_$type, TableColumnFilterData.$));
        if (b == null || c == null) {
            return;
        }
        var d = b.wholeTableRegion;
        a._ci._writeFrtHeaderU(d);
        a._ci._write17(5);
        a._ci.writeByte(0);
        a._ci._write18(intSToU(0));
        a._ci._write17(1);
        a._ci._write18(intSToU(0));
        a._ci._write17(0);
        a._ci._writeRef8U(d);
        a._ci._writeTableFeatureType(b, c);
    };
    FEAT11Record.prototype.get_d = function () {
        return 2162;
    };
    Object.defineProperty(FEAT11Record.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    FEAT11Record.$t = markType(FEAT11Record, 'FEAT11Record', Biff8RecordBase.$);
    return FEAT11Record;
}(Biff8RecordBase));
export { FEAT11Record };
/**
 * @hidden
 */
var FEAT12Record = /** @class */ (function (_super) {
    tslib_1.__extends(FEAT12Record, _super);
    function FEAT12Record() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FEAT12Record.prototype.get_d = function () {
        return 2168;
    };
    FEAT12Record.$t = markType(FEAT12Record, 'FEAT12Record', FEAT11Record.$);
    return FEAT12Record;
}(FEAT11Record));
export { FEAT12Record };
/**
 * @hidden
 */
var FEATHEADR11Record = /** @class */ (function (_super) {
    tslib_1.__extends(FEATHEADR11Record, _super);
    function FEATHEADR11Record() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FEATHEADR11Record.prototype.h = function (a) {
        a._av._readFrtHeader();
        var b = a._av._readUInt16();
        var c = a._av.readByte();
        var d = a._av._readUInt32();
        var e = a._av._readUInt32();
        var f = a._av._readUInt32();
        a._b._g6 = f;
        var g = a._av._readUInt16();
    };
    FEATHEADR11Record.prototype.i = function (a) {
        a._ci._writeFrtHeader();
        a._ci._write17(5);
        a._ci.writeByte(1);
        a._ci._write18(4294967295);
        a._ci._write18(4294967295);
        a._ci._write18(a._b._g6);
        a._ci._write17(0);
    };
    FEATHEADR11Record.prototype.get_d = function () {
        return 2161;
    };
    Object.defineProperty(FEATHEADR11Record.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    FEATHEADR11Record.$t = markType(FEATHEADR11Record, 'FEATHEADR11Record', Biff8RecordBase.$);
    return FEATHEADR11Record;
}(Biff8RecordBase));
export { FEATHEADR11Record };
/**
 * @hidden
 */
var FEATHEADRRecord = /** @class */ (function (_super) {
    tslib_1.__extends(FEATHEADRRecord, _super);
    function FEATHEADRRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FEATHEADRRecord.prototype.h = function (a) {
        a._av._readFrtHeader();
        var b = a._av._readUInt16();
        if (b == 2) {
            var c = a._ai.a(Worksheet.$);
            var d = a._av;
            var e = d.readByte();
            var f = d._readInt32();
            if (f == -1) {
                var g = d._readBytes((d.length - d.position));
                var h = c.protection;
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
                var i = (g[1] & 4) != 0;
                h.allowSorting = (g[1] & 8) != 0;
                h.allowFiltering = (g[1] & 16) != 0;
                h.allowUsingPivotTables = (g[1] & 32) != 0;
                var j = (g[1] & 64) != 0;
                h._ag(i, j);
            }
        }
    };
    FEATHEADRRecord.prototype.i = function (a) {
        var b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        a._ci._writeFrtHeader();
        a._ci._write17(2);
        a._ci.writeByte(1);
        a._ci._write18(4294967295);
        var c = b.protection;
        var d = ((c.allowEditObjects ? 1 : 0) | (c.allowEditScenarios ? 2 : 0) | (c.allowFormattingCells ? 4 : 0) | (c.allowFormattingColumns ? 8 : 0) | (c.allowFormattingRows ? 16 : 0) | (c.allowInsertingColumns ? 32 : 0) | (c.allowInsertingRows ? 64 : 0) | (c.allowInsertingHyperlinks ? 128 : 0));
        var e = ((c.allowDeletingColumns ? 1 : 0) | (c.allowDeletingRows ? 2 : 0) | (c._ab ? 4 : 0) | (c.allowSorting ? 8 : 0) | (c.allowFiltering ? 16 : 0) | (c.allowUsingPivotTables ? 32 : 0) | (c._ac ? 64 : 0));
        a._ci.writeByte(d);
        a._ci.writeByte(e);
        a._ci.writeByte(0);
        a._ci.writeByte(0);
    };
    FEATHEADRRecord.prototype.get_d = function () {
        return 2151;
    };
    Object.defineProperty(FEATHEADRRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    FEATHEADRRecord.$t = markType(FEATHEADRRecord, 'FEATHEADRRecord', Biff8RecordBase.$);
    return FEATHEADRRecord;
}(Biff8RecordBase));
export { FEATHEADRRecord };
/**
 * @hidden
 */
var FEATRecord = /** @class */ (function (_super) {
    tslib_1.__extends(FEATRecord, _super);
    function FEATRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FEATRecord.prototype.h = function (a) {
        var e_71, _0;
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        a._av._readFrtHeader();
        var c = a._av._readUInt16();
        if (c != 2) {
            return;
        }
        var d = a._av.readByte();
        var e = a._av._readUInt32();
        var f = a._av._readUInt16();
        var g = a._av._readUInt32();
        var h = a._av._readUInt16();
        var i = new List$1(WorksheetRegion.$, 0);
        for (var j = 0; j < f; j++) {
            i.add(a._av._readRef8U(b));
        }
        var k = a._av._readFeatProtection();
        try {
            for (var _1 = tslib_1.__values(fromEnum(i)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var l = _2.value;
                k.ranges.add(l);
            }
        }
        catch (e_71_1) { e_71 = { error: e_71_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_71) throw e_71.error; }
        }
        b.protection._allowedEditRanges$i.insert(0, k);
    };
    FEATRecord.prototype.i = function (a) {
        var e_72, _0;
        var b = a._b7.a(WorksheetProtectedRange.$);
        if (b == null) {
        }
        a._ci._writeFrtHeader();
        a._ci._write17(2);
        a._ci.writeByte(0);
        a._ci._write18(intSToU(0));
        a._ci._write17(b.ranges.count);
        a._ci._write18(intSToU(0));
        a._ci._write17(0);
        try {
            for (var _1 = tslib_1.__values(fromEnum(b.ranges)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var c = _2.value;
                a._ci._writeRef8U(c);
            }
        }
        catch (e_72_1) { e_72 = { error: e_72_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_72) throw e_72.error; }
        }
        a._ci._writeFeatProtection(b);
    };
    FEATRecord.prototype.get_d = function () {
        return 2152;
    };
    Object.defineProperty(FEATRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    FEATRecord.$t = markType(FEATRecord, 'FEATRecord', Biff8RecordBase.$);
    return FEATRecord;
}(Biff8RecordBase));
export { FEATRecord };
/**
 * @hidden
 */
var FILEPASSRecord = /** @class */ (function (_super) {
    tslib_1.__extends(FILEPASSRecord, _super);
    function FILEPASSRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FILEPASSRecord.prototype.h = function (a) {
        FILEPASSRecord.q(a);
        if (a._aj == null) {
            a._b._i3();
        }
    };
    FILEPASSRecord.prototype.i = function (a) {
    };
    FILEPASSRecord.q = function (a) {
    };
    FILEPASSRecord.prototype.get_n = function () {
        return false;
    };
    FILEPASSRecord.prototype.get_d = function () {
        return 47;
    };
    Object.defineProperty(FILEPASSRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    FILEPASSRecord.$t = markType(FILEPASSRecord, 'FILEPASSRecord', Biff8RecordBase.$);
    return FILEPASSRecord;
}(Biff8RecordBase));
export { FILEPASSRecord };
/**
 * @hidden
 */
var FILESHARINGRecord = /** @class */ (function (_super) {
    tslib_1.__extends(FILESHARINGRecord, _super);
    function FILESHARINGRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FILESHARINGRecord.prototype.h = function (a) {
        var b = a._av._readUInt16();
        var c = a._av._readUInt16();
        if (c == 0) {
            var d = a._av._readUInt16();
        }
        else {
            var e = a._av._readXLUnicodeString();
        }
    };
    FILESHARINGRecord.prototype.i = function (a) {
    };
    FILESHARINGRecord.prototype.get_d = function () {
        return 91;
    };
    Object.defineProperty(FILESHARINGRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    FILESHARINGRecord.$t = markType(FILESHARINGRecord, 'FILESHARINGRecord', Biff8RecordBase.$);
    return FILESHARINGRecord;
}(Biff8RecordBase));
export { FILESHARINGRecord };
/**
 * @hidden
 */
var FILTERMODERecord = /** @class */ (function (_super) {
    tslib_1.__extends(FILTERMODERecord, _super);
    function FILTERMODERecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FILTERMODERecord.prototype.h = function (a) {
    };
    FILTERMODERecord.prototype.i = function (a) {
    };
    FILTERMODERecord.prototype.get_d = function () {
        return 155;
    };
    Object.defineProperty(FILTERMODERecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    FILTERMODERecord.$t = markType(FILTERMODERecord, 'FILTERMODERecord', Biff8RecordBase.$);
    return FILTERMODERecord;
}(Biff8RecordBase));
export { FILTERMODERecord };
/**
 * @hidden
 */
var FNGROUPCOUNTRecord = /** @class */ (function (_super) {
    tslib_1.__extends(FNGROUPCOUNTRecord, _super);
    function FNGROUPCOUNTRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FNGROUPCOUNTRecord.prototype.h = function (a) {
        var b = a._av._readUInt16();
    };
    FNGROUPCOUNTRecord.prototype.i = function (a) {
        a._ci._write17(16);
    };
    FNGROUPCOUNTRecord.prototype.get_d = function () {
        return 156;
    };
    Object.defineProperty(FNGROUPCOUNTRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    FNGROUPCOUNTRecord.$t = markType(FNGROUPCOUNTRecord, 'FNGROUPCOUNTRecord', Biff8RecordBase.$);
    return FNGROUPCOUNTRecord;
}(Biff8RecordBase));
export { FNGROUPCOUNTRecord };
/**
 * @hidden
 */
var FONTRecord = /** @class */ (function (_super) {
    tslib_1.__extends(FONTRecord, _super);
    function FONTRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FONTRecord.prototype.h = function (a) {
        var b = new FONTRecordInfo();
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
    };
    FONTRecord.o = function (a, b) {
        var c = a._b.createNewWorkbookFont();
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
    };
    FONTRecord.prototype.i = function (a) {
        var b = a._b7.a(WorkbookFontData.$);
        if (b == null) {
            return;
        }
        a._ci._write17(b.height);
        var c = 0;
        if (nullableEquals(b._italic$i, true)) {
            c |= 2;
        }
        if (nullableEquals(b._strikeout$i, true)) {
            c |= 8;
        }
        a._ci._write17(c);
        a._ci._write17(b.colorInfo._y(a._b, 2));
        var d = (nullableEquals(b._bold$i, true) ? 700 : 400);
        a._ci._write17(d);
        a._ci._write17(b.superscriptSubscriptStyle);
        a._ci._write9(b.underlineStyle);
        a._ci._write9(ExcelUtils.s(b.name));
        a._ci._write9(0);
        a._ci._write9(0);
        a._ci._write16(b.name, 0, false);
    };
    FONTRecord.prototype.get_d = function () {
        return 49;
    };
    Object.defineProperty(FONTRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    FONTRecord.$t = markType(FONTRecord, 'FONTRecord', Biff8RecordBase.$);
    return FONTRecord;
}(Biff8RecordBase));
export { FONTRecord };
/**
 * @hidden
 */
var FONTRecordInfo = /** @class */ (function (_super) {
    tslib_1.__extends(FONTRecordInfo, _super);
    function FONTRecordInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.f = 0;
        _this.i = 0;
        _this.g = 0;
        _this.e = 0;
        _this.h = 0;
        _this.c = 0;
        _this.b = 0;
        _this.a = 0;
        _this.d = null;
        return _this;
    }
    FONTRecordInfo.$t = markType(FONTRecordInfo, 'FONTRecordInfo');
    return FONTRecordInfo;
}(Base));
export { FONTRecordInfo };
/**
 * @hidden
 */
var FOOTERRecord = /** @class */ (function (_super) {
    tslib_1.__extends(FOOTERRecord, _super);
    function FOOTERRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FOOTERRecord.prototype.h = function (a) {
        if (a._av.length == 0) {
            return;
        }
        var b = a._ai.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        var c = a._av._readFormattedString(1);
        b.footer = c._y;
    };
    FOOTERRecord.prototype.i = function (a) {
        var b = a._b7.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        if (stringIsNullOrEmpty(b.footer)) {
            return;
        }
        a._ci._write15(b.footer, 1);
    };
    FOOTERRecord.prototype.get_d = function () {
        return 21;
    };
    Object.defineProperty(FOOTERRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    FOOTERRecord.$t = markType(FOOTERRecord, 'FOOTERRecord', Biff8RecordBase.$);
    return FOOTERRecord;
}(Biff8RecordBase));
export { FOOTERRecord };
/**
 * @hidden
 */
var FORMATRecord = /** @class */ (function (_super) {
    tslib_1.__extends(FORMATRecord, _super);
    function FORMATRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FORMATRecord.prototype.h = function (a) {
        var b = a._av._readUInt16();
        var c = a._av._readFormattedString(1)._y;
        a._b._b2.ap(b, c);
    };
    FORMATRecord.prototype.i = function (a) {
        var b = a._b7.a(WorkbookSaveManagerExcel2003_FormatHolder.$);
        if (b == null) {
            return;
        }
        var c = a._c0(b.b);
        a._ci._write17(c);
        a._ci._write15(b.d, 1);
    };
    FORMATRecord.prototype.get_d = function () {
        return 1054;
    };
    Object.defineProperty(FORMATRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    FORMATRecord.$t = markType(FORMATRecord, 'FORMATRecord', Biff8RecordBase.$);
    return FORMATRecord;
}(Biff8RecordBase));
export { FORMATRecord };
/**
 * @hidden
 */
var FORMULARecord = /** @class */ (function (_super) {
    tslib_1.__extends(FORMULARecord, _super);
    function FORMULARecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FORMULARecord.prototype.o = function (a, b, c, d, e) {
        e = FORMULARecord.s(a, b, c);
        c += 8;
        var f = ((function () { var g = a._av._readUInt16FromBuffer(b, c); b = g.p0; c = g.p1; return g.ret; })());
        var g = (f & 1) == 1;
        var h = (f & 2) == 2;
        var i = a._av._readUInt32FromBuffer(b, c);
        b = i.p0;
        c = i.p1;
        var j = ((function () { var k = a._at(0, b, c); b = k.p1; c = k.p2; return k.ret; })());
        j._an = h;
        d = j;
        return {
            p1: b,
            p2: c,
            p3: d,
            p4: e
        };
    };
    FORMULARecord.prototype.p = function (a, b) {
        var c = a._cj;
        var d = ExcelUtils.z(c.c);
        if (d == null) {
            return;
        }
        var e = a._ch;
        var f = a._a3(c.b, e, true);
        var g = d._as;
        var h = null;
        if (g) {
            h = a._b7.a(WorksheetCell.$);
            d = a._cl(d);
        }
        var i;
        var j = ((function () { var k = FORMULARecord.q(a._b, f, i); i = k.p2; return k.ret; })());
        b.write(j, 0, j.length);
        var k = 0;
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
    };
    FORMULARecord.prototype.get_d = function () {
        return 6;
    };
    Object.defineProperty(FORMULARecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    FORMULARecord.s = function (a, b, c) {
        var d = BitConverter.o(b, c);
        if (isNaN_(d) == false) {
            return d;
        }
        switch (b[c]) {
            case 0:
                {
                    var e = a._av.position;
                    a._av.position = a._av.length;
                    try {
                        {
                            var f = new Biff8RecordStream(1, a);
                            try {
                                if (f._recordType == 1212 || f._recordType == 545) {
                                    WorkItemExtensions.n(a._ao());
                                    {
                                        var g = new Biff8RecordStream(1, a);
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
    };
    FORMULARecord.t = function (a) {
        if (a._recordType != 519) {
            return stringEmpty();
        }
        var b = a._loadManagerBiff8;
        WorkItemExtensions.n(b._ao());
        var c = typeCast(String_$type, b._ai.f);
        if (c != null) {
            b._ai.h();
            return c;
        }
        return stringEmpty();
    };
    FORMULARecord.q = function (a, b, c) {
        return {
            ret: ((function () { var d = FORMULARecord.r(a, b, c); c = d.p2; return d.ret; })()),
            p2: c
        };
    };
    FORMULARecord.r = function (a, b, c) {
        c = null;
        if (typeCast(Boolean_$type, b) !== null) {
            return {
                ret: [1, 0, Convert.toByte(b), 0, 0, 0, 255, 255],
                p2: c
            };
        }
        var d = typeCast(ErrorValue.$, b);
        if (d != null) {
            return {
                ret: [2, 0, d._y, 0, 0, 0, 255, 255],
                p2: c
            };
        }
        var e = typeCast(String_$type, b);
        if (e == null) {
            var f = typeCast(StringElement.$, b);
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
            var g = ExcelCalcValue._dateTimeToExcelDate(a, b);
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
            var h = Convert.toDouble4(b, a._e6);
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
    };
    FORMULARecord.$t = markType(FORMULARecord, 'FORMULARecord', CellValueRecordBase.$);
    return FORMULARecord;
}(CellValueRecordBase));
export { FORMULARecord };
/**
 * @hidden
 */
var GRIDSETRecord = /** @class */ (function (_super) {
    tslib_1.__extends(GRIDSETRecord, _super);
    function GRIDSETRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GRIDSETRecord.prototype.h = function (a) {
        a._av._readUInt16();
    };
    GRIDSETRecord.prototype.i = function (a) {
        a._ci._write17(1);
    };
    GRIDSETRecord.prototype.get_d = function () {
        return 130;
    };
    Object.defineProperty(GRIDSETRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    GRIDSETRecord.$t = markType(GRIDSETRecord, 'GRIDSETRecord', Biff8RecordBase.$);
    return GRIDSETRecord;
}(Biff8RecordBase));
export { GRIDSETRecord };
/**
 * @hidden
 */
var GUTSRecord = /** @class */ (function (_super) {
    tslib_1.__extends(GUTSRecord, _super);
    function GUTSRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GUTSRecord.prototype.h = function (a) {
        var b = a._av._readUInt16();
        var c = a._av._readUInt16();
        var d = a._av._readUInt16();
        var e = a._av._readUInt16();
        if (e != 0) {
            e--;
        }
        if (d != 0) {
            d--;
        }
    };
    GUTSRecord.prototype.i = function (a) {
        var b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = a._w(b);
        var d = c.e;
        var e = c.f;
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
    };
    GUTSRecord.prototype.get_d = function () {
        return 128;
    };
    Object.defineProperty(GUTSRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    GUTSRecord.$t = markType(GUTSRecord, 'GUTSRecord', Biff8RecordBase.$);
    return GUTSRecord;
}(Biff8RecordBase));
export { GUTSRecord };
/**
 * @hidden
 */
var HCENTERRecord = /** @class */ (function (_super) {
    tslib_1.__extends(HCENTERRecord, _super);
    function HCENTERRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HCENTERRecord.prototype.h = function (a) {
        var b = a._ai.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        b.centerHorizontally = Convert.toBoolean1(a._av._readUInt16());
    };
    HCENTERRecord.prototype.i = function (a) {
        var b = a._b7.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        a._ci._write17(Convert.toUInt16(b.centerHorizontally));
    };
    HCENTERRecord.prototype.get_d = function () {
        return 131;
    };
    Object.defineProperty(HCENTERRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    HCENTERRecord.$t = markType(HCENTERRecord, 'HCENTERRecord', Biff8RecordBase.$);
    return HCENTERRecord;
}(Biff8RecordBase));
export { HCENTERRecord };
/**
 * @hidden
 */
var HEADERFOOTERRecord = /** @class */ (function (_super) {
    tslib_1.__extends(HEADERFOOTERRecord, _super);
    function HEADERFOOTERRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HEADERFOOTERRecord.prototype.h = function (a) {
        var b = a._ai.a(PrintOptions.$);
        var c = a._ai.a(CustomView.$);
        if (b == null) {
            return;
        }
        a._av._readFrtHeader();
        var d = new Guid(1, a._av._readBytes(16));
        var e = a._av._readUInt16();
        var f = ExcelUtils.bt(e, 0);
        var g = ExcelUtils.bt(e, 1);
        var h = ExcelUtils.bt(e, 2);
        var i = ExcelUtils.bt(e, 3);
        var j = a._av._readUInt16();
        var k = a._av._readUInt16();
        var l = a._av._readUInt16();
        var m = a._av._readUInt16();
        if (j != 0) {
            var n = a._av._readXLUnicodeString();
        }
        if (k != 0) {
            var o = a._av._readXLUnicodeString();
        }
        if (l != 0) {
            var p = a._av._readXLUnicodeString();
        }
        if (m != 0) {
            var q = a._av._readXLUnicodeString();
        }
        b.alignHeadersAndFootersWithMargins = i;
        b.scaleHeadersAndFootersWithDocument = h;
    };
    HEADERFOOTERRecord.prototype.i = function (a) {
        var b = a._b7.a(PrintOptions.$);
        var c = a._b7.a(CustomView.$);
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
        var d = 0;
        var e = ExcelUtils.f7(d, b.scaleHeadersAndFootersWithDocument, 2);
        d = e.p0;
        var f = ExcelUtils.f7(d, b.alignHeadersAndFootersWithMargins, 3);
        d = f.p0;
        a._ci._write17(d);
        a._ci._write17(0);
        a._ci._write17(0);
        a._ci._write17(0);
        a._ci._write17(0);
    };
    HEADERFOOTERRecord.prototype.get_d = function () {
        return 2204;
    };
    Object.defineProperty(HEADERFOOTERRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    HEADERFOOTERRecord.$t = markType(HEADERFOOTERRecord, 'HEADERFOOTERRecord', Biff8RecordBase.$);
    return HEADERFOOTERRecord;
}(Biff8RecordBase));
export { HEADERFOOTERRecord };
/**
 * @hidden
 */
var HEADERRecord = /** @class */ (function (_super) {
    tslib_1.__extends(HEADERRecord, _super);
    function HEADERRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HEADERRecord.prototype.h = function (a) {
        if (a._av.length == 0) {
            return;
        }
        var b = a._ai.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        var c = a._av._readFormattedString(1);
        b.header = c._y;
    };
    HEADERRecord.prototype.i = function (a) {
        var b = a._b7.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        if (stringIsNullOrEmpty(b.header)) {
            return;
        }
        a._ci._write15(b.header, 1);
    };
    HEADERRecord.prototype.get_d = function () {
        return 20;
    };
    Object.defineProperty(HEADERRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    HEADERRecord.$t = markType(HEADERRecord, 'HEADERRecord', Biff8RecordBase.$);
    return HEADERRecord;
}(Biff8RecordBase));
export { HEADERRecord };
/**
 * @hidden
 */
var HFPICTURERecord = /** @class */ (function (_super) {
    tslib_1.__extends(HFPICTURERecord, _super);
    function HFPICTURERecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HFPICTURERecord.prototype.h = function (a) {
        var b = a._av._readUInt16();
        var c = a._av._readUInt16();
        a._av.seek(8, 1);
        var d = a._av.readByte();
        var e = (d & 1) == 1;
        var f = (d & 2) == 2;
        var g = (d & 4) == 4;
        a._av.seek(1, 1);
    };
    HFPICTURERecord.prototype.i = function (a) {
    };
    HFPICTURERecord.prototype.get_d = function () {
        return 2150;
    };
    Object.defineProperty(HFPICTURERecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    HFPICTURERecord.$t = markType(HFPICTURERecord, 'HFPICTURERecord', Biff8RecordBase.$);
    return HFPICTURERecord;
}(Biff8RecordBase));
export { HFPICTURERecord };
/**
 * @hidden
 */
var HIDEOBJRecord = /** @class */ (function (_super) {
    tslib_1.__extends(HIDEOBJRecord, _super);
    function HIDEOBJRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HIDEOBJRecord.prototype.h = function (a) {
        a._b.windowOptions.objectDisplayStyle = a._av._readUInt16();
    };
    HIDEOBJRecord.prototype.i = function (a) {
        a._ci._write17(a._b.windowOptions.objectDisplayStyle);
    };
    HIDEOBJRecord.prototype.get_d = function () {
        return 141;
    };
    Object.defineProperty(HIDEOBJRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    HIDEOBJRecord.$t = markType(HIDEOBJRecord, 'HIDEOBJRecord', Biff8RecordBase.$);
    return HIDEOBJRecord;
}(Biff8RecordBase));
export { HIDEOBJRecord };
/**
 * @hidden
 */
var HLINKRecord = /** @class */ (function (_super) {
    tslib_1.__extends(HLINKRecord, _super);
    function HLINKRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HLINKRecord.prototype.h = function (a) {
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = a._av._readRef8U(b);
        var d = new Guid(1, a._av._readBytes(16));
        var e = a._av._readUInt32();
        var f = a._av._readUInt32();
        var g = ExcelUtils.bu(f, 0);
        var h = ExcelUtils.bu(f, 1);
        var i = ExcelUtils.bu(f, 2);
        var j = ExcelUtils.bu(f, 3);
        var k = ExcelUtils.bu(f, 4);
        var l = ExcelUtils.bu(f, 5);
        var m = ExcelUtils.bu(f, 6);
        var n = ExcelUtils.bu(f, 7);
        var o = ExcelUtils.bu(f, 8);
        var p = ExcelUtils.bu(f, 9);
        var q = k ? a._av._readHyperlinkString() : null;
        var r = n ? a._av._readHyperlinkString() : null;
        var s = g && o ? a._av._readHyperlinkString() : null;
        var t = null;
        if (g && (o == false)) {
            t = a._av._readHyperlinkMoniker();
            if (t == null) {
                return;
            }
        }
        var u = j ? a._av._readHyperlinkString() : null;
        var v = l ? new Guid(1, a._av._readBytes(16)) : new Guid();
        var w = m ? a._av._ey() : new Date();
        var x = WorkbookLoadManager._v(a._b, s != null ? s : t, u);
        var y = new WorksheetHyperlink(c, x, q, null);
        y._t = u != null && typeof x === 'string' && u == x;
        b._hyperlinks$i.add(y);
    };
    HLINKRecord.prototype.i = function (a) {
        var b = a._b7.a(WorksheetHyperlink.$);
        if (b == null) {
            return;
        }
        var c;
        var d;
        var e;
        var f = WorkbookSaveManager._b5(b, c, d, e);
        c = f.p1;
        d = f.p2;
        e = f.p3;
        a._ci._writeRef8U(b.sourceRegion);
        a._ci._write2(HLINKRecord.o.toByteArray());
        var g = 0;
        if (c != null) {
            var h = ExcelUtils.f9(g, true, 0);
            g = h.p0;
        }
        if (d != null) {
            var i = ExcelUtils.f9(g, true, 3);
            g = i.p0;
        }
        var j = ExcelUtils.f9(g, true, 4);
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
    };
    HLINKRecord.prototype.get_d = function () {
        return 440;
    };
    Object.defineProperty(HLINKRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    HLINKRecord.$t = markType(HLINKRecord, 'HLINKRecord', Biff8RecordBase.$);
    HLINKRecord.o = new Guid(2, 2045430224, 47865, 4558, 140, 130, 0, 170, 0, 75, 169, 11);
    return HLINKRecord;
}(Biff8RecordBase));
export { HLINKRecord };
/**
 * @hidden
 */
var HLINKTOOLTIPRecord = /** @class */ (function (_super) {
    tslib_1.__extends(HLINKTOOLTIPRecord, _super);
    function HLINKTOOLTIPRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HLINKTOOLTIPRecord.prototype.h = function (a) {
        var b = a._ai.a(Worksheet.$);
        if (b == null || b._hyperlinks$i.count == 0) {
            return;
        }
        var c = a._av._readFrtRefHeaderNoGrbit(b);
        var d = a._av._readNullTerminatedUnicodeString();
        var e = b._hyperlinks$i.item(b._hyperlinks$i.count - 1);
        if (e.sourceRegion != c) {
            e = null;
            for (var f = 0; f < b._hyperlinks$i.count; f++) {
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
    };
    HLINKTOOLTIPRecord.prototype.i = function (a) {
        var b = a._b7.a(WorksheetHyperlink.$);
        if (b == null) {
            return;
        }
        a._ci._writeFrtRefHeaderNoGrbit(b.sourceRegion);
        a._ci._writeNullTerminatedUnicodeString(b.toolTip);
    };
    HLINKTOOLTIPRecord.prototype.get_d = function () {
        return 2048;
    };
    Object.defineProperty(HLINKTOOLTIPRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    HLINKTOOLTIPRecord.$t = markType(HLINKTOOLTIPRecord, 'HLINKTOOLTIPRecord', Biff8RecordBase.$);
    return HLINKTOOLTIPRecord;
}(Biff8RecordBase));
export { HLINKTOOLTIPRecord };
/**
 * @hidden
 */
var HORIZONTALPAGEBREAKSRecord = /** @class */ (function (_super) {
    tslib_1.__extends(HORIZONTALPAGEBREAKSRecord, _super);
    function HORIZONTALPAGEBREAKSRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HORIZONTALPAGEBREAKSRecord.prototype.h = function (a) {
        if (a._av.length == 0) {
            return;
        }
        var b = a._ai.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        var c = a._av._readUInt16();
        for (var d = 0; d < c; d++) {
            var e = a._av._readUInt16();
            var f = a._av._readUInt16();
            var g = a._av._readUInt16();
            var h = Nullable$1.toNullable(Number_$type, f);
            if (f == 0) {
                h = Nullable$1.toNullable(Number_$type, null);
            }
            var i = Nullable$1.toNullable(Number_$type, g);
            if (g == a._b._ff - 1) {
                i = Nullable$1.toNullable(Number_$type, null);
            }
            var j = b._printAreas$i._e(e, Nullable$1.toNullable(Number_$type, f), Nullable$1.toNullable(Number_$type, g), false);
            var k = void 0;
            if (j != null) {
                k = new HorizontalPageBreak(e, j);
            }
            else {
                k = new HorizontalPageBreak(e, h, i);
                k.printArea = j;
            }
            b._horizontalPageBreaks$i._add$i(k);
        }
    };
    HORIZONTALPAGEBREAKSRecord.prototype.i = function (a) {
        var b = a._b7.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        a._ci._write17(b._horizontalPageBreaks$i.count);
        for (var c = 0; c < b._horizontalPageBreaks$i.count; c++) {
            var d = b._horizontalPageBreaks$i._item(c);
            a._ci._write17(d._k);
            a._ci._write17(d._m);
            var e = Math.min(d._l, a._b._ff - 1);
            a._ci._write17(e);
        }
    };
    HORIZONTALPAGEBREAKSRecord.prototype.get_d = function () {
        return 27;
    };
    Object.defineProperty(HORIZONTALPAGEBREAKSRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    HORIZONTALPAGEBREAKSRecord.$t = markType(HORIZONTALPAGEBREAKSRecord, 'HORIZONTALPAGEBREAKSRecord', Biff8RecordBase.$);
    return HORIZONTALPAGEBREAKSRecord;
}(Biff8RecordBase));
export { HORIZONTALPAGEBREAKSRecord };
/**
 * @hidden
 */
var INDEXRecord = /** @class */ (function (_super) {
    tslib_1.__extends(INDEXRecord, _super);
    function INDEXRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    INDEXRecord.prototype.h = function (a) {
        var b = a._av._readUInt32();
        var c = a._av._readUInt32();
        var d = a._av._readUInt32();
        a._av._readUInt32();
        if (c != d) {
            var e = intDivide((a._av.length - a._av.position), 4);
            for (var f = 0; f < e; f++) {
                a._av._readUInt32();
            }
        }
        else {
        }
    };
    INDEXRecord.prototype.i = function (a) {
        var b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = a._w(b);
        a._ci._write18(intSToU(0));
        a._ci._write18(c.p);
        a._ci._write18(c.q);
        a._ci._write18(intSToU(0));
        if (c.p != c.q) {
            var d = c.k;
            for (var e = 0; e < d; e++) {
                a._ci._write18(intSToU(0));
            }
        }
        else {
        }
    };
    INDEXRecord.prototype.get_d = function () {
        return 523;
    };
    Object.defineProperty(INDEXRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    INDEXRecord.$t = markType(INDEXRecord, 'INDEXRecord', Biff8RecordBase.$);
    return INDEXRecord;
}(Biff8RecordBase));
export { INDEXRecord };
/**
 * @hidden
 */
var INTERFACEENDRecord = /** @class */ (function (_super) {
    tslib_1.__extends(INTERFACEENDRecord, _super);
    function INTERFACEENDRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    INTERFACEENDRecord.prototype.h = function (a) {
    };
    INTERFACEENDRecord.prototype.i = function (a) {
    };
    INTERFACEENDRecord.prototype.get_d = function () {
        return 226;
    };
    Object.defineProperty(INTERFACEENDRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    INTERFACEENDRecord.$t = markType(INTERFACEENDRecord, 'INTERFACEENDRecord', Biff8RecordBase.$);
    return INTERFACEENDRecord;
}(Biff8RecordBase));
export { INTERFACEENDRecord };
/**
 * @hidden
 */
var INTERFACEHDRRecord = /** @class */ (function (_super) {
    tslib_1.__extends(INTERFACEHDRRecord, _super);
    function INTERFACEHDRRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    INTERFACEHDRRecord.prototype.h = function (a) {
        if (a._av.length > 0) {
            var b = a._av._readUInt16();
        }
    };
    INTERFACEHDRRecord.prototype.i = function (a) {
        a._ci._write17(ExcelUtils.c2(Encoding.unicode));
    };
    INTERFACEHDRRecord.prototype.get_n = function () {
        return false;
    };
    INTERFACEHDRRecord.prototype.get_d = function () {
        return 225;
    };
    Object.defineProperty(INTERFACEHDRRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    INTERFACEHDRRecord.$t = markType(INTERFACEHDRRecord, 'INTERFACEHDRRecord', Biff8RecordBase.$);
    return INTERFACEHDRRecord;
}(Biff8RecordBase));
export { INTERFACEHDRRecord };
/**
 * @hidden
 */
var ITERATIONRecord = /** @class */ (function (_super) {
    tslib_1.__extends(ITERATIONRecord, _super);
    function ITERATIONRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITERATIONRecord.prototype.h = function (a) {
        a._b.iterativeCalculationsEnabled = Convert.toBoolean1(a._av._readUInt16());
    };
    ITERATIONRecord.prototype.i = function (a) {
        a._ci._write17(Convert.toUInt16(a._b.iterativeCalculationsEnabled));
    };
    ITERATIONRecord.prototype.get_d = function () {
        return 17;
    };
    Object.defineProperty(ITERATIONRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    ITERATIONRecord.$t = markType(ITERATIONRecord, 'ITERATIONRecord', Biff8RecordBase.$);
    return ITERATIONRecord;
}(Biff8RecordBase));
export { ITERATIONRecord };
/**
 * @hidden
 */
var LABELRecord = /** @class */ (function (_super) {
    tslib_1.__extends(LABELRecord, _super);
    function LABELRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LABELRecord.prototype.o = function (a, b, c, d, e) {
        var f = ((function () { var g = a._av.readFormattedStringFromBuffer(1, b, c); b = g.p1; c = g.p2; return g.ret; })());
        var g = typeCast(FormattedStringElement.$, f);
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
    };
    LABELRecord.prototype.p = function (a, b) {
        a._ci._write13(b);
    };
    LABELRecord.prototype.get_d = function () {
        return 516;
    };
    Object.defineProperty(LABELRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    LABELRecord.$t = markType(LABELRecord, 'LABELRecord', CellValueRecordBase.$);
    return LABELRecord;
}(CellValueRecordBase));
export { LABELRecord };
/**
 * @hidden
 */
var LABELSSTRecord = /** @class */ (function (_super) {
    tslib_1.__extends(LABELSSTRecord, _super);
    function LABELSSTRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LABELSSTRecord.prototype.o = function (a, b, c, d, e) {
        var f = ((function () { var g = a._av._readInt32FromBuffer(b, c); b = g.p0; c = g.p1; return g.ret; })());
        var g = a._u._inner[f];
        var h = typeCast(FormattedStringElement.$, g);
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
    };
    LABELSSTRecord.prototype.p = function (a, b) {
        var c = typeCast(StringElementIndex.$, a._cj.c);
        if (c != null) {
            b.write(BitConverter.e(c.c), 0, 4);
        }
        else {
            b.write(BitConverter.e(0), 0, 4);
        }
        a._ci._write13(b);
    };
    LABELSSTRecord.prototype.get_d = function () {
        return 253;
    };
    Object.defineProperty(LABELSSTRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    LABELSSTRecord.$t = markType(LABELSSTRecord, 'LABELSSTRecord', CellValueRecordBase.$);
    return LABELSSTRecord;
}(CellValueRecordBase));
export { LABELSSTRecord };
/**
 * @hidden
 */
var LEFTMARGINRecord = /** @class */ (function (_super) {
    tslib_1.__extends(LEFTMARGINRecord, _super);
    function LEFTMARGINRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LEFTMARGINRecord.prototype.h = function (a) {
        var b = a._ai.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        b.leftMargin = a._av._readDouble();
    };
    LEFTMARGINRecord.prototype.i = function (a) {
        var b = a._b7.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        a._ci._write10(b.leftMargin);
    };
    LEFTMARGINRecord.prototype.get_d = function () {
        return 38;
    };
    Object.defineProperty(LEFTMARGINRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    LEFTMARGINRecord.$t = markType(LEFTMARGINRecord, 'LEFTMARGINRecord', Biff8RecordBase.$);
    return LEFTMARGINRecord;
}(Biff8RecordBase));
export { LEFTMARGINRecord };
/**
 * @hidden
 */
var LIST12Record = /** @class */ (function (_super) {
    tslib_1.__extends(LIST12Record, _super);
    function LIST12Record() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LIST12Record.prototype.h = function (a) {
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        a._av._readFrtHeader();
        var c = a._av._readUInt16();
        var d = a._av._readUInt32();
        var e = b._tables$i._g(d);
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
    };
    LIST12Record.prototype.i = function (a) {
        var b = a._b7.a(WorksheetTable.$);
        var c = a._b7.a(LIST12Record_LIST12DataType_$type);
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
    };
    LIST12Record.prototype.get_d = function () {
        return 2167;
    };
    Object.defineProperty(LIST12Record.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    LIST12Record.$t = markType(LIST12Record, 'LIST12Record', Biff8RecordBase.$);
    return LIST12Record;
}(Biff8RecordBase));
export { LIST12Record };
/**
 * @hidden
 */
var MERGEDCELLSRecord = /** @class */ (function (_super) {
    tslib_1.__extends(MERGEDCELLSRecord, _super);
    function MERGEDCELLSRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MERGEDCELLSRecord.prototype.h = function (a) {
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = ExcelUtils.b8();
        while (a._av.position < a._av.length) {
            var d = a._av._readUInt16();
            for (var e = 0; e < d; e++) {
                var f = a._av._readUInt16();
                var g = a._av._readUInt16();
                var h = a._av._readUInt16();
                var i = a._av._readUInt16();
                var j = ExcelUtils.g9(h, f, i - h, g - f);
                if (c.add_1(j) == false) {
                    continue;
                }
                b._mergedCellsRegions$i._add1(f, h, g, i);
            }
        }
    };
    MERGEDCELLSRecord.prototype.i = function (a) {
        var b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        {
            var c = getEnumerator(a._av(b));
            try {
                var d = c.moveNext();
                do {
                    var e = a._ci.position;
                    var f = 0;
                    a._ci._write17(0);
                    while (d && a._ci._bytesAvailableInCurrentBlock >= 8) {
                        var g = c.current;
                        a._ci._write17(g.firstRow);
                        a._ci._write17(g.lastRow);
                        a._ci._write17(g.firstColumn);
                        a._ci._write17(g.lastColumn);
                        f++;
                        d = c.moveNext();
                    }
                    var h = a._ci.position;
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
    };
    MERGEDCELLSRecord.prototype.get_d = function () {
        return 229;
    };
    Object.defineProperty(MERGEDCELLSRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    MERGEDCELLSRecord.$t = markType(MERGEDCELLSRecord, 'MERGEDCELLSRecord', Biff8RecordBase.$);
    return MERGEDCELLSRecord;
}(Biff8RecordBase));
export { MERGEDCELLSRecord };
/**
 * @hidden
 */
var MMSRecord = /** @class */ (function (_super) {
    tslib_1.__extends(MMSRecord, _super);
    function MMSRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MMSRecord.prototype.h = function (a) {
        a._av.readByte();
        a._av.readByte();
    };
    MMSRecord.prototype.i = function (a) {
        a._ci._write9(0);
        a._ci._write9(0);
    };
    MMSRecord.prototype.get_d = function () {
        return 193;
    };
    Object.defineProperty(MMSRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    MMSRecord.$t = markType(MMSRecord, 'MMSRecord', Biff8RecordBase.$);
    return MMSRecord;
}(Biff8RecordBase));
export { MMSRecord };
/**
 * @hidden
 */
var MSODRAWINGGROUPRecord = /** @class */ (function (_super) {
    tslib_1.__extends(MSODRAWINGGROUPRecord, _super);
    function MSODRAWINGGROUPRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MSODRAWINGGROUPRecord.prototype.h = function (a) {
        var b = EscherRecordBase.b(a);
    };
    MSODRAWINGGROUPRecord.prototype.i = function (a) {
        var b = new DrawingGroupContainer(0, a);
        b.m(a);
    };
    MSODRAWINGGROUPRecord.prototype.get_d = function () {
        return 235;
    };
    Object.defineProperty(MSODRAWINGGROUPRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    MSODRAWINGGROUPRecord.$t = markType(MSODRAWINGGROUPRecord, 'MSODRAWINGGROUPRecord', Biff8RecordBase.$);
    return MSODRAWINGGROUPRecord;
}(Biff8RecordBase));
export { MSODRAWINGGROUPRecord };
/**
 * @hidden
 */
var MSODRAWINGRecord = /** @class */ (function (_super) {
    tslib_1.__extends(MSODRAWINGRecord, _super);
    function MSODRAWINGRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MSODRAWINGRecord.prototype.h = function (a) {
        var b = EscherRecordBase.b(a);
    };
    MSODRAWINGRecord.prototype.i = function (a) {
        var b = new DrawingContainer(0, a);
        b.m(a);
    };
    MSODRAWINGRecord.prototype.get_d = function () {
        return 236;
    };
    Object.defineProperty(MSODRAWINGRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    MSODRAWINGRecord.$t = markType(MSODRAWINGRecord, 'MSODRAWINGRecord', Biff8RecordBase.$);
    return MSODRAWINGRecord;
}(Biff8RecordBase));
export { MSODRAWINGRecord };
/**
 * @hidden
 */
var MSODRAWINGSELECTIONRecord = /** @class */ (function (_super) {
    tslib_1.__extends(MSODRAWINGSELECTIONRecord, _super);
    function MSODRAWINGSELECTIONRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MSODRAWINGSELECTIONRecord.prototype.h = function (a) {
        var b = EscherRecordBase.b(a);
    };
    MSODRAWINGSELECTIONRecord.prototype.i = function (a) {
    };
    MSODRAWINGSELECTIONRecord.prototype.get_d = function () {
        return 237;
    };
    Object.defineProperty(MSODRAWINGSELECTIONRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    MSODRAWINGSELECTIONRecord.$t = markType(MSODRAWINGSELECTIONRecord, 'MSODRAWINGSELECTIONRecord', Biff8RecordBase.$);
    return MSODRAWINGSELECTIONRecord;
}(Biff8RecordBase));
export { MSODRAWINGSELECTIONRecord };
/**
 * @hidden
 */
var MultipleCellValueRecordBase = /** @class */ (function (_super) {
    tslib_1.__extends(MultipleCellValueRecordBase, _super);
    function MultipleCellValueRecordBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultipleCellValueRecordBase.prototype.h = function (a) {
        var _this = this;
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = new Array(0);
        var d = 0;
        var e = ((function () { var f = a._av._readUInt16FromBuffer(c, d); c = f.p0; d = f.p1; return f.ret; })());
        var f = ((function () { var g = a._av._readInt16FromBuffer(c, d); c = g.p0; d = g.p1; return g.ret; })());
        var g;
        if (c.length == a._av.length) {
            g = BitConverter.w(c, c.length - 2);
        }
        else {
            a._av.position = a._av.length - 2;
            g = a._av._readUInt16();
        }
        var h = ((function () { var i = _this.o(a, g - f + 1, c, d); c = i.p2; d = i.p3; return i.ret; })());
        var i = a._a6(b, e);
        for (var j = 0, k = f; k <= g; j++, k++) {
            var l = a._b2._inner[h[j].b];
            {
                i._d3(k, l);
            }
            i._d6(k, h[j].a);
        }
    };
    MultipleCellValueRecordBase.prototype.i = function (a) {
        var b = a._b7.a(MultipleCellValueInfo.$);
        if (b == null) {
            return;
        }
        a._ci._write17(b.m);
        a._ci._write17(b.j);
        var c = new Array(b.l);
        for (var d = 0; d < b.l; d++) {
            c[d] = new CellDefinition(1, a._a6(b.d(d)), b.n(d));
        }
        this.p(a, c);
        a._ci._write17(b.k);
    };
    MultipleCellValueRecordBase.$t = markType(MultipleCellValueRecordBase, 'MultipleCellValueRecordBase', Biff8RecordBase.$);
    return MultipleCellValueRecordBase;
}(Biff8RecordBase));
export { MultipleCellValueRecordBase };
/**
 * @hidden
 */
var MULBLANKRecord = /** @class */ (function (_super) {
    tslib_1.__extends(MULBLANKRecord, _super);
    function MULBLANKRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MULBLANKRecord.prototype.o = function (a, b, c, d) {
        var e = new Array(b);
        for (var f = 0; f < b; f++) {
            e[f] = new CellDefinition(1, ((function () { var g = a._av._readUInt16FromBuffer(c, d); c = g.p0; d = g.p1; return g.ret; })()), null);
        }
        return {
            ret: e,
            p2: c,
            p3: d
        };
    };
    MULBLANKRecord.prototype.p = function (a, b) {
        for (var c = 0; c < b.length; c++) {
            a._ci._write17(b[c].b);
        }
    };
    MULBLANKRecord.prototype.get_d = function () {
        return 190;
    };
    Object.defineProperty(MULBLANKRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    MULBLANKRecord.$t = markType(MULBLANKRecord, 'MULBLANKRecord', MultipleCellValueRecordBase.$);
    return MULBLANKRecord;
}(MultipleCellValueRecordBase));
export { MULBLANKRecord };
/**
 * @hidden
 */
var MULRKRecord = /** @class */ (function (_super) {
    tslib_1.__extends(MULRKRecord, _super);
    function MULRKRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MULRKRecord.prototype.o = function (a, b, c, d) {
        var e = new Array(b);
        for (var f = 0; f < b; f++) {
            e[f] = new CellDefinition(1, ((function () { var g = a._av._readUInt16FromBuffer(c, d); c = g.p0; d = g.p1; return g.ret; })()), ExcelUtils.ci(((function () { var g = a._av._readUInt32FromBuffer(c, d); c = g.p0; d = g.p1; return g.ret; })())));
        }
        return {
            ret: e,
            p2: c,
            p3: d
        };
    };
    MULRKRecord.prototype.p = function (a, b) {
        for (var c = 0; c < b.length; c++) {
            a._ci._write17(b[c].b);
            a._ci._write18(typeGetValue(b[c].a));
        }
    };
    MULRKRecord.prototype.get_d = function () {
        return 189;
    };
    Object.defineProperty(MULRKRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    MULRKRecord.$t = markType(MULRKRecord, 'MULRKRecord', MultipleCellValueRecordBase.$);
    return MULRKRecord;
}(MultipleCellValueRecordBase));
export { MULRKRecord };
/**
 * @hidden
 */
var CellDefinition = /** @class */ (function (_super) {
    tslib_1.__extends(CellDefinition, _super);
    function CellDefinition(a) {
        var _rest = [];
        for (var _0 = 1; _0 < arguments.length; _0++) {
            _rest[_0 - 1] = arguments[_0];
        }
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.b = 0;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this.a = d;
                    _this.b = c;
                }
                break;
        }
        return _this;
    }
    CellDefinition.$t = markStruct(CellDefinition, 'CellDefinition');
    return CellDefinition;
}(ValueType));
export { CellDefinition };
/**
 * @hidden
 */
var NAMEEXTRecord = /** @class */ (function (_super) {
    tslib_1.__extends(NAMEEXTRecord, _super);
    function NAMEEXTRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NAMEEXTRecord.prototype.h = function (a) {
        var b = a._av._readUInt16();
        a._av._readUInt16();
        a._av._readUInt32();
        a._av._readUInt32();
        var c = a._av._readUInt16();
        var d = a._av._readUInt16();
        var e = a._av._readFormattedString1(c)._y;
        var f = a._av._readFormattedString1(d)._y;
        var g = a._b._bb.u;
        var h = g.item(g.count - 1);
        h.comment = f;
    };
    NAMEEXTRecord.prototype.i = function (a) {
        var b = a._b7.a(NamedReferenceBase.$);
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
    };
    NAMEEXTRecord.prototype.get_d = function () {
        return 2196;
    };
    Object.defineProperty(NAMEEXTRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    NAMEEXTRecord.$t = markType(NAMEEXTRecord, 'NAMEEXTRecord', Biff8RecordBase.$);
    return NAMEEXTRecord;
}(Biff8RecordBase));
export { NAMEEXTRecord };
/**
 * @hidden
 */
var NAMERecord = /** @class */ (function (_super) {
    tslib_1.__extends(NAMERecord, _super);
    function NAMERecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NAMERecord.prototype.h = function (a) {
        var b = new Array(0);
        var c = 0;
        var d = ((function () { var e = a._av._readUInt16FromBuffer(b, c); b = e.p0; c = e.p1; return e.ret; })());
        var e = (d & 1) == 1;
        var f = (d & 2) == 2;
        var g = (d & 4) == 4;
        var h = (d & 8) == 8;
        var i = (d & 32) == 32;
        var j = (d & 4096) == 4096;
        if (j) {
            return;
        }
        var k = a._av.readByteFromBuffer(b, c);
        b = k.p0;
        c = k.p1;
        var l = ((function () { var m = a._av.readByteFromBuffer(b, c); b = m.p0; c = m.p1; return m.ret; })());
        var m = ((function () { var n = a._av._readUInt16FromBuffer(b, c); b = n.p0; c = n.p1; return n.ret; })());
        var n = a._av._readUInt16FromBuffer(b, c);
        b = n.p0;
        c = n.p1;
        var o = ((function () { var p = a._av._readUInt16FromBuffer(b, c); b = p.p0; c = p.p1; return p.ret; })());
        var p = ((function () { var q = a._av.readByteFromBuffer(b, c); b = q.p0; c = q.p1; return q.ret; })());
        var q = ((function () { var r = a._av.readByteFromBuffer(b, c); b = r.p0; c = r.p1; return r.ret; })());
        var r = ((function () { var s = a._av.readByteFromBuffer(b, c); b = s.p0; c = s.p1; return s.ret; })());
        var s = ((function () { var t = a._av.readByteFromBuffer(b, c); b = t.p0; c = t.p1; return t.ret; })());
        var t = ((function () { var u = a._av._readFormattedStringFromBuffer1(l, b, c); b = u.p1; c = u.p2; return u.ret; })())._y;
        if (f && stringStartsWith(t, "_xlfn.")) {
            t = t.substr(6);
        }
        var u = ((function () { var v = a._au(3, m, b, c); b = v.p2; c = v.p3; return v.ret; })());
        if (p > 0) {
            var v = a._av._readFormattedStringFromBuffer1(p, b, c);
            b = v.p1;
            c = v.p2;
        }
        if (q > 0) {
            var w = a._av._readFormattedStringFromBuffer1(q, b, c);
            b = w.p1;
            c = w.p2;
        }
        if (r > 0) {
            var x = a._av._readFormattedStringFromBuffer1(r, b, c);
            b = x.p1;
            c = x.p2;
        }
        if (s > 0) {
            var y = a._av._readFormattedStringFromBuffer1(s, b, c);
            b = y.p1;
            c = y.p2;
        }
        var z = a._b;
        if (o > 0) {
            z = a._b._worksheets$i._item(o - 1);
        }
        if (i) {
            t = NamedReferenceBase._av(t.charAt(0).charCodeAt(0));
        }
        var aa = new NamedReference(1, a._b._namedReferences$i, z, e);
        aa._bd(t, false);
        a._b._bb.aj(aa);
        aa._v = f;
        aa._x = h;
        a._cf(aa, u, e);
    };
    NAMERecord.prototype.i = function (a) {
        var b = a._b7.a(NamedReferenceBase.$);
        if (b == null) {
            return;
        }
        var c = b.name;
        if (b._r) {
            c = String.fromCharCode(b._c).toString();
        }
        var d = 0;
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
            var e = a._az.indexOf(b.scope);
            a._ci._write17((e + 1));
        }
        a._ci._write9(0);
        a._ci._write9(0);
        a._ci._write9(0);
        a._ci._write9(0);
        a._ci._write14(c);
        var f = 0;
        if (b._j != null) {
            f = a._c2(b._j, false, false);
        }
        a._ci.position = 4;
        a._ci._write17(f);
        a._ci.position = a._ci.length;
    };
    NAMERecord.prototype.get_d = function () {
        return 24;
    };
    Object.defineProperty(NAMERecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    NAMERecord.$t = markType(NAMERecord, 'NAMERecord', Biff8RecordBase.$);
    return NAMERecord;
}(Biff8RecordBase));
export { NAMERecord };
/**
 * @hidden
 */
var NOTERecord = /** @class */ (function (_super) {
    tslib_1.__extends(NOTERecord, _super);
    function NOTERecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NOTERecord.prototype.h = function (a) {
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = a._av._readUInt16();
        var d = a._av._readInt16();
        var e = b._rows$i.item(c);
        var f = a._av._readUInt16();
        var g = a._av._readUInt16();
        var h = a._av._readFormattedString(1);
        for (var i = 0; i < a._b4.count; i++) {
            var j = a._b4._inner[i];
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
    };
    NOTERecord.prototype.i = function (a) {
        var b = a._b7.a(WorksheetCell.$);
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
    };
    NOTERecord.prototype.get_d = function () {
        return 28;
    };
    Object.defineProperty(NOTERecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    NOTERecord.$t = markType(NOTERecord, 'NOTERecord', Biff8RecordBase.$);
    return NOTERecord;
}(Biff8RecordBase));
export { NOTERecord };
/**
 * @hidden
 */
var NUMBERRecord = /** @class */ (function (_super) {
    tslib_1.__extends(NUMBERRecord, _super);
    function NUMBERRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NUMBERRecord.prototype.o = function (a, b, c, d, e) {
        d = ((function () { var f = a._av.readDoubleFromBuffer(b, c); b = f.p0; c = f.p1; return f.ret; })());
        e = d;
        return {
            p1: b,
            p2: c,
            p3: d,
            p4: e
        };
    };
    NUMBERRecord.prototype.p = function (a, b) {
        b.write(BitConverter.c(Convert.toDouble4(a._cj.c, a._b._e6)), 0, 8);
        a._ci._write13(b);
    };
    NUMBERRecord.prototype.get_d = function () {
        return 515;
    };
    Object.defineProperty(NUMBERRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    NUMBERRecord.$t = markType(NUMBERRecord, 'NUMBERRecord', CellValueRecordBase.$);
    return NUMBERRecord;
}(CellValueRecordBase));
export { NUMBERRecord };
/**
 * @hidden
 */
var OBJPROTECTRecord = /** @class */ (function (_super) {
    tslib_1.__extends(OBJPROTECTRecord, _super);
    function OBJPROTECTRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OBJPROTECTRecord.prototype.h = function (a) {
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        b.protection.allowEditObjects = (a._av._readUInt16() != 1);
    };
    OBJPROTECTRecord.prototype.i = function (a) {
        var b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        a._ci._write17(Convert.toUInt16(b.protection.allowEditObjects == false));
    };
    OBJPROTECTRecord.prototype.get_d = function () {
        return 99;
    };
    Object.defineProperty(OBJPROTECTRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    OBJPROTECTRecord.$t = markType(OBJPROTECTRecord, 'OBJPROTECTRecord', Biff8RecordBase.$);
    return OBJPROTECTRecord;
}(Biff8RecordBase));
export { OBJPROTECTRecord };
/**
 * @hidden
 */
var OBJRecord = /** @class */ (function (_super) {
    tslib_1.__extends(OBJRecord, _super);
    function OBJRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OBJRecord.prototype.h = function (a) {
        var b = new Obj(0);
        ObjExtensionMethods.w(b, a);
    };
    OBJRecord.prototype.i = function (a) {
    };
    OBJRecord.prototype.get_d = function () {
        return 93;
    };
    Object.defineProperty(OBJRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    OBJRecord.$t = markType(OBJRecord, 'OBJRecord', Biff8RecordBase.$);
    return OBJRecord;
}(Biff8RecordBase));
export { OBJRecord };
/**
 * @hidden
 */
var OBPROJRecord = /** @class */ (function (_super) {
    tslib_1.__extends(OBPROJRecord, _super);
    function OBPROJRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OBPROJRecord.prototype.h = function (a) {
    };
    OBPROJRecord.prototype.i = function (a) {
    };
    OBPROJRecord.prototype.get_d = function () {
        return 211;
    };
    Object.defineProperty(OBPROJRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    OBPROJRecord.$t = markType(OBPROJRecord, 'OBPROJRecord', Biff8RecordBase.$);
    return OBPROJRecord;
}(Biff8RecordBase));
export { OBPROJRecord };
/**
 * @hidden
 */
var OLESIZERecord = /** @class */ (function (_super) {
    tslib_1.__extends(OLESIZERecord, _super);
    function OLESIZERecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OLESIZERecord.prototype.h = function (a) {
        var b = a._ai.a(Workbook.$);
        var c = a._av;
        var d = new Array(0);
        var e = 0;
        var f = ((function () { var g = c._readUInt16FromBuffer(d, e); d = g.p0; e = g.p1; return g.ret; })());
        var g = ((function () { var h = c._readUInt16FromBuffer(d, e); d = h.p0; e = h.p1; return h.ret; })());
        var h = ((function () { var i = c._readUInt16FromBuffer(d, e); d = i.p0; e = i.p1; return i.ret; })());
        var i = ((function () { var j = c.readByteFromBuffer(d, e); d = j.p0; e = j.p1; return j.ret; })());
        var j = ((function () { var k = c.readByteFromBuffer(d, e); d = k.p0; e = k.p1; return k.ret; })());
        if (g == 0 && h == 16383) {
            h = 65535;
        }
        b._gn = Nullable$1.toNullable(WorksheetRegionAddress.$, new WorksheetRegionAddress(1, g, h, i, j));
    };
    OLESIZERecord.prototype.i = function (a) {
    };
    OLESIZERecord.prototype.get_d = function () {
        return 222;
    };
    Object.defineProperty(OLESIZERecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    OLESIZERecord.$t = markType(OLESIZERecord, 'OLESIZERecord', Biff8RecordBase.$);
    return OLESIZERecord;
}(Biff8RecordBase));
export { OLESIZERecord };
/**
 * @hidden
 */
var PAGELAYOUTINFORecord = /** @class */ (function (_super) {
    tslib_1.__extends(PAGELAYOUTINFORecord, _super);
    function PAGELAYOUTINFORecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PAGELAYOUTINFORecord.prototype.h = function (a) {
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = a._av._readUInt16();
        a._av._readUInt16();
        a._av._readBytes(8);
        var d = a._av._readUInt16();
        if (d == 0) {
            d = 100;
        }
        var e = ExcelUtils.fj(d);
        d = e.p0;
        b.displayOptions.magnificationInPageLayoutView = d;
        var f = a._av._readUInt16();
        var g = (f & 1) == 1;
        b.displayOptions.showRulerInPageLayoutView = (f & 2) == 2;
        b.displayOptions.showWhitespaceInPageLayoutView = (f & 4) != 4;
        if (g) {
            b.displayOptions.view = 1;
        }
    };
    PAGELAYOUTINFORecord.prototype.i = function (a) {
        var b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        a._ci._write17(this.d);
        a._ci._write17(0);
        a._ci._write2(new Array(8));
        a._ci._write17(b.displayOptions.magnificationInPageLayoutView);
        var c = 0;
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
    };
    PAGELAYOUTINFORecord.prototype.get_d = function () {
        return 2187;
    };
    Object.defineProperty(PAGELAYOUTINFORecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    PAGELAYOUTINFORecord.$t = markType(PAGELAYOUTINFORecord, 'PAGELAYOUTINFORecord', Biff8RecordBase.$);
    return PAGELAYOUTINFORecord;
}(Biff8RecordBase));
export { PAGELAYOUTINFORecord };
/**
 * @hidden
 */
var PALETTERecord = /** @class */ (function (_super) {
    tslib_1.__extends(PALETTERecord, _super);
    function PALETTERecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PALETTERecord.prototype.h = function (a) {
        var b = a._b._palette$i;
        var c = a._av._readUInt16();
        c = Math.min(c, 56);
        for (var d = 0; d < c; d++) {
            var e = a._av.readByte();
            var f = a._av.readByte();
            var g = a._av.readByte();
            a._av.readByte();
            b._item$i(d, ExcelUtils.gw(e, f, g));
        }
    };
    PALETTERecord.prototype.i = function (a) {
        var b = a._b._palette$i;
        a._ci._write17(56);
        for (var c = 0; c < 56; c++) {
            var d = b._item$i(c);
            a._ci._write9(d.o);
            a._ci._write9(d.n);
            a._ci._write9(d.m);
            a._ci._write9(0);
        }
    };
    PALETTERecord.prototype.get_d = function () {
        return 146;
    };
    Object.defineProperty(PALETTERecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    PALETTERecord.$t = markType(PALETTERecord, 'PALETTERecord', Biff8RecordBase.$);
    return PALETTERecord;
}(Biff8RecordBase));
export { PALETTERecord };
/**
 * @hidden
 */
var PANERecord = /** @class */ (function (_super) {
    tslib_1.__extends(PANERecord, _super);
    function PANERecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PANERecord.prototype.h = function (a) {
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = a._av._readUInt16();
        var d = a._av._readUInt16();
        var e = a._av._readUInt16();
        var f = a._av._readUInt16();
        var g = a._av._readUInt16();
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
    };
    PANERecord.prototype.i = function (a) {
        var b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        b.displayOptions._br();
        if (b.displayOptions.panesAreFrozen) {
            var c = b.displayOptions.frozenPaneSettings.frozenRows;
            var d = b.displayOptions.frozenPaneSettings.frozenColumns;
            a._ci._write17(d);
            a._ci._write17(c);
            if (b.displayOptions.frozenPaneSettings.frozenRows > 0) {
                var e = Math.max(c, b.displayOptions.frozenPaneSettings.firstRowInBottomPane);
                a._ci._write17(e);
            }
            else {
                a._ci._write17(0);
            }
            if (b.displayOptions.frozenPaneSettings.frozenColumns > 0) {
                var f = Math.max(d, b.displayOptions.frozenPaneSettings.firstColumnInRightPane);
                a._ci._write17(f);
            }
            else {
                a._ci._write17(0);
            }
        }
        else {
            var g = b.displayOptions.unfrozenPaneSettings.leftPaneWidth;
            var h = b.displayOptions.unfrozenPaneSettings.topPaneHeight;
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
    };
    PANERecord.prototype.get_d = function () {
        return 65;
    };
    Object.defineProperty(PANERecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    PANERecord.$t = markType(PANERecord, 'PANERecord', Biff8RecordBase.$);
    return PANERecord;
}(Biff8RecordBase));
export { PANERecord };
/**
 * @hidden
 */
var PASSWORDRecord = /** @class */ (function (_super) {
    tslib_1.__extends(PASSWORDRecord, _super);
    function PASSWORDRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PASSWORDRecord.prototype.h = function (a) {
        var b = a._av._readUInt16();
        if (b == 0) {
            return;
        }
        var c = ProtectionValidationInfo.c(b);
        var d = a._ai.a(Worksheet.$);
        if (d == null) {
            a._b.protection._b.b = c;
            return;
        }
        d.protection._c.b = c;
    };
    PASSWORDRecord.prototype.i = function (a) {
        var b = a._b7.a(Worksheet.$);
        var c;
        if (b == null) {
            c = ((function (d) { return !nullableIsNull(d) ? d.value : 0; })(a._b.protection._b.h()));
        }
        else {
            c = ((function (d) { return !nullableIsNull(d) ? d.value : 0; })(b.protection._c.h()));
            if (c == 0) {
                return;
            }
        }
        a._ci._write17(c);
    };
    PASSWORDRecord.prototype.get_d = function () {
        return 19;
    };
    Object.defineProperty(PASSWORDRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    PASSWORDRecord.$t = markType(PASSWORDRecord, 'PASSWORDRecord', Biff8RecordBase.$);
    return PASSWORDRecord;
}(Biff8RecordBase));
export { PASSWORDRecord };
/**
 * @hidden
 */
var PLSRecord = /** @class */ (function (_super) {
    tslib_1.__extends(PLSRecord, _super);
    function PLSRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PLSRecord.prototype.h = function (a) {
    };
    PLSRecord.prototype.i = function (a) {
    };
    PLSRecord.prototype.get_d = function () {
        return 77;
    };
    Object.defineProperty(PLSRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    PLSRecord.$t = markType(PLSRecord, 'PLSRecord', Biff8RecordBase.$);
    return PLSRecord;
}(Biff8RecordBase));
export { PLSRecord };
/**
 * @hidden
 */
var PRECISIONRecord = /** @class */ (function (_super) {
    tslib_1.__extends(PRECISIONRecord, _super);
    function PRECISIONRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PRECISIONRecord.prototype.h = function (a) {
        a._b.precision = a._av._readUInt16();
    };
    PRECISIONRecord.prototype.i = function (a) {
        a._ci._write17(a._b.precision);
    };
    PRECISIONRecord.prototype.get_d = function () {
        return 14;
    };
    Object.defineProperty(PRECISIONRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    PRECISIONRecord.$t = markType(PRECISIONRecord, 'PRECISIONRecord', Biff8RecordBase.$);
    return PRECISIONRecord;
}(Biff8RecordBase));
export { PRECISIONRecord };
/**
 * @hidden
 */
var PRINTGRIDLINESRecord = /** @class */ (function (_super) {
    tslib_1.__extends(PRINTGRIDLINESRecord, _super);
    function PRINTGRIDLINESRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PRINTGRIDLINESRecord.prototype.h = function (a) {
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        b.printOptions.printGridlines = Convert.toBoolean1(a._av._readUInt16());
    };
    PRINTGRIDLINESRecord.prototype.i = function (a) {
        var b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        a._ci._write17(Convert.toUInt16(b.printOptions.printGridlines));
    };
    PRINTGRIDLINESRecord.prototype.get_d = function () {
        return 43;
    };
    Object.defineProperty(PRINTGRIDLINESRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    PRINTGRIDLINESRecord.$t = markType(PRINTGRIDLINESRecord, 'PRINTGRIDLINESRecord', Biff8RecordBase.$);
    return PRINTGRIDLINESRecord;
}(Biff8RecordBase));
export { PRINTGRIDLINESRecord };
/**
 * @hidden
 */
var PRINTHEADERSRecord = /** @class */ (function (_super) {
    tslib_1.__extends(PRINTHEADERSRecord, _super);
    function PRINTHEADERSRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PRINTHEADERSRecord.prototype.h = function (a) {
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        b.printOptions.printRowAndColumnHeaders = Convert.toBoolean1(a._av._readUInt16());
    };
    PRINTHEADERSRecord.prototype.i = function (a) {
        var b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        a._ci._write17(Convert.toUInt16(b.printOptions.printRowAndColumnHeaders));
    };
    PRINTHEADERSRecord.prototype.get_d = function () {
        return 42;
    };
    Object.defineProperty(PRINTHEADERSRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    PRINTHEADERSRecord.$t = markType(PRINTHEADERSRecord, 'PRINTHEADERSRecord', Biff8RecordBase.$);
    return PRINTHEADERSRecord;
}(Biff8RecordBase));
export { PRINTHEADERSRecord };
/**
 * @hidden
 */
var PROT4REVPASSRecord = /** @class */ (function (_super) {
    tslib_1.__extends(PROT4REVPASSRecord, _super);
    function PROT4REVPASSRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PROT4REVPASSRecord.prototype.h = function (a) {
        a._av._readUInt16();
    };
    PROT4REVPASSRecord.prototype.i = function (a) {
        a._ci._write17(0);
    };
    PROT4REVPASSRecord.prototype.get_d = function () {
        return 444;
    };
    Object.defineProperty(PROT4REVPASSRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    PROT4REVPASSRecord.$t = markType(PROT4REVPASSRecord, 'PROT4REVPASSRecord', Biff8RecordBase.$);
    return PROT4REVPASSRecord;
}(Biff8RecordBase));
export { PROT4REVPASSRecord };
/**
 * @hidden
 */
var PROT4REVRecord = /** @class */ (function (_super) {
    tslib_1.__extends(PROT4REVRecord, _super);
    function PROT4REVRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PROT4REVRecord.prototype.h = function (a) {
        a._av._readUInt16();
    };
    PROT4REVRecord.prototype.i = function (a) {
        a._ci._write17(0);
    };
    PROT4REVRecord.prototype.get_d = function () {
        return 431;
    };
    Object.defineProperty(PROT4REVRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    PROT4REVRecord.$t = markType(PROT4REVRecord, 'PROT4REVRecord', Biff8RecordBase.$);
    return PROT4REVRecord;
}(Biff8RecordBase));
export { PROT4REVRecord };
/**
 * @hidden
 */
var PROTECTRecord = /** @class */ (function (_super) {
    tslib_1.__extends(PROTECTRecord, _super);
    function PROTECTRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PROTECTRecord.prototype.h = function (a) {
        var b = a._av._readUInt16() == 1;
        var c = a._ai.a(Worksheet.$);
        if (c != null) {
            c.protection._c.j(b);
        }
        else {
            a._b.protection.allowEditStructure = b == false;
            a._b.protection._b.j(b || a._b.isProtected);
        }
    };
    PROTECTRecord.prototype.i = function (a) {
        var b;
        var c = a._b7.a(Worksheet.$);
        if (c != null) {
            b = c.isProtected;
        }
        else {
            b = a._b.isProtected && a._b.protection.allowEditStructure == false;
        }
        a._ci._write17(Convert.toUInt16(b));
    };
    PROTECTRecord.prototype.get_d = function () {
        return 18;
    };
    Object.defineProperty(PROTECTRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    PROTECTRecord.$t = markType(PROTECTRecord, 'PROTECTRecord', Biff8RecordBase.$);
    return PROTECTRecord;
}(Biff8RecordBase));
export { PROTECTRecord };
/**
 * @hidden
 */
var RECALCIDRecord = /** @class */ (function (_super) {
    tslib_1.__extends(RECALCIDRecord, _super);
    function RECALCIDRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RECALCIDRecord.prototype.h = function (a) {
        var b = a._av._readUInt16();
        var c = a._av._readUInt16();
        a._av._readUInt32();
    };
    RECALCIDRecord.prototype.i = function (a) {
    };
    RECALCIDRecord.prototype.get_d = function () {
        return 449;
    };
    Object.defineProperty(RECALCIDRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    RECALCIDRecord.$t = markType(RECALCIDRecord, 'RECALCIDRecord', Biff8RecordBase.$);
    return RECALCIDRecord;
}(Biff8RecordBase));
export { RECALCIDRecord };
/**
 * @hidden
 */
var REFMODERecord = /** @class */ (function (_super) {
    tslib_1.__extends(REFMODERecord, _super);
    function REFMODERecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    REFMODERecord.prototype.h = function (a) {
        a._b.cellReferenceMode = a._av._readUInt16();
    };
    REFMODERecord.prototype.i = function (a) {
        a._ci._write17(a._b.cellReferenceMode);
    };
    REFMODERecord.prototype.get_d = function () {
        return 15;
    };
    Object.defineProperty(REFMODERecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    REFMODERecord.$t = markType(REFMODERecord, 'REFMODERecord', Biff8RecordBase.$);
    return REFMODERecord;
}(Biff8RecordBase));
export { REFMODERecord };
/**
 * @hidden
 */
var REFRESHALLRecord = /** @class */ (function (_super) {
    tslib_1.__extends(REFRESHALLRecord, _super);
    function REFRESHALLRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    REFRESHALLRecord.prototype.h = function (a) {
        a._b._dj = Convert.toBoolean1(a._av._readUInt16());
    };
    REFRESHALLRecord.prototype.i = function (a) {
        a._ci._write17(Convert.toUInt16(a._b._dj));
    };
    REFRESHALLRecord.prototype.get_d = function () {
        return 439;
    };
    Object.defineProperty(REFRESHALLRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    REFRESHALLRecord.$t = markType(REFRESHALLRecord, 'REFRESHALLRecord', Biff8RecordBase.$);
    return REFRESHALLRecord;
}(Biff8RecordBase));
export { REFRESHALLRecord };
/**
 * @hidden
 */
var RIGHTMARGINRecord = /** @class */ (function (_super) {
    tslib_1.__extends(RIGHTMARGINRecord, _super);
    function RIGHTMARGINRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RIGHTMARGINRecord.prototype.h = function (a) {
        var b = a._ai.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        b.rightMargin = a._av._readDouble();
    };
    RIGHTMARGINRecord.prototype.i = function (a) {
        var b = a._b7.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        a._ci._write10(b.rightMargin);
    };
    RIGHTMARGINRecord.prototype.get_d = function () {
        return 39;
    };
    Object.defineProperty(RIGHTMARGINRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    RIGHTMARGINRecord.$t = markType(RIGHTMARGINRecord, 'RIGHTMARGINRecord', Biff8RecordBase.$);
    return RIGHTMARGINRecord;
}(Biff8RecordBase));
export { RIGHTMARGINRecord };
/**
 * @hidden
 */
var RKRecord = /** @class */ (function (_super) {
    tslib_1.__extends(RKRecord, _super);
    function RKRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RKRecord.prototype.o = function (a, b, c, d, e) {
        d = ExcelUtils.ci(((function () { var f = a._av._readUInt32FromBuffer(b, c); b = f.p0; c = f.p1; return f.ret; })()));
        e = d;
        return {
            p1: b,
            p2: c,
            p3: d,
            p4: e
        };
    };
    RKRecord.prototype.p = function (a, b) {
        var c = 0;
        if (((function () { var d = ExcelUtils.bz(Convert.toDouble4(a._cj.c, a._b._e6), c); c = d.p1; return d.ret; })()) == false) {
        }
        b.write(BitConverter.i(c), 0, 4);
        a._ci._write13(b);
    };
    RKRecord.prototype.get_d = function () {
        return 638;
    };
    Object.defineProperty(RKRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    RKRecord.$t = markType(RKRecord, 'RKRecord', CellValueRecordBase.$);
    return RKRecord;
}(CellValueRecordBase));
export { RKRecord };
/**
 * @hidden
 */
var ROWRecord = /** @class */ (function (_super) {
    tslib_1.__extends(ROWRecord, _super);
    function ROWRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ROWRecord.prototype.h = function (a) {
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = new Array(0);
        var d = 0;
        var e = ((function () { var f = a._av._readUInt16FromBuffer(c, d); c = f.p0; d = f.p1; return f.ret; })());
        var f = b._rows$i.item(e);
        a._cm(f);
        d += 4;
        var g = ((function () { var h = a._av._readUInt16FromBuffer(c, d); c = h.p0; d = h.p1; return h.ret; })());
        d += 4;
        var h = ((function () { var i = a._av._readUInt32FromBuffer(c, d); c = i.p0; d = i.p1; return i.ret; })());
        f.outlineLevel = (h & 7);
        var i = (h & 32) == 32;
        var j = (h & 64) == 64;
        var k = (h & 128) == 128;
        var l = ((h & 268369920) >>> 16);
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
        var m = a._b2._inner[l];
        if (m._ca(a._b._ca._p) == false) {
            f.cellFormat.setFormatting(m);
        }
    };
    ROWRecord.prototype.i = function (a) {
        var b = a._b7.a(WorksheetRow.$);
        if (b == null) {
            return;
        }
        var c = a._u(b);
        if (c == null) {
            return;
        }
        var d = new MemoryStream(1, 16);
        d.write(BitConverter.h(b.index), 0, 2);
        d.write(BitConverter.h(c.c), 0, 2);
        d.write(BitConverter.h(c.d), 0, 2);
        var e = b._cm < 0 ? b.worksheet.defaultRowHeight : b._cm;
        d.write(BitConverter.h(e), 0, 2);
        d.write(BitConverter.i(intSToU(0)), 0, 4);
        var f = 256;
        f = u32BitwiseOr(f, intSToU(b.outlineLevel));
        if (c.a) {
            f = u32BitwiseOr(f, 16);
        }
        if (b.hidden) {
            f = u32BitwiseOr(f, 32);
        }
        var g = a._b._ca._p;
        var h = b._hasCellFormat ? b._cellFormatInternal.d : g;
        if (b._bz) {
            f = u32BitwiseOr(f, 64);
        }
        var i = a._a6(h);
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
    };
    ROWRecord.prototype.get_d = function () {
        return 520;
    };
    Object.defineProperty(ROWRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    ROWRecord.$t = markType(ROWRecord, 'ROWRecord', Biff8RecordBase.$);
    return ROWRecord;
}(Biff8RecordBase));
export { ROWRecord };
/**
 * @hidden
 */
var RSTRINGRecord = /** @class */ (function (_super) {
    tslib_1.__extends(RSTRINGRecord, _super);
    function RSTRINGRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RSTRINGRecord.prototype.o = function (a, b, c, d, e) {
        var f = a._av;
        var g = ((function () { var h = f.readFormattedStringFromBuffer(1, b, c); b = h.p1; c = h.p2; return h.ret; })());
        var h = typeCast(FormattedStringElement.$, g);
        if (h == null) {
            var i = ((function () { var j = f._readUInt16FromBuffer(b, c); b = j.p0; c = j.p1; return j.ret; })());
            h = FormattedStringElement._af(g);
            var j = f._readFormattingRunsFromBuffer(h, i, b, c);
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
    };
    RSTRINGRecord.prototype.p = function (a, b) {
        a._ci._write13(b);
    };
    RSTRINGRecord.prototype.get_d = function () {
        return 214;
    };
    Object.defineProperty(RSTRINGRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    RSTRINGRecord.$t = markType(RSTRINGRecord, 'RSTRINGRecord', CellValueRecordBase.$);
    return RSTRINGRecord;
}(CellValueRecordBase));
export { RSTRINGRecord };
/**
 * @hidden
 */
var SAVERECALCRecord = /** @class */ (function (_super) {
    tslib_1.__extends(SAVERECALCRecord, _super);
    function SAVERECALCRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SAVERECALCRecord.prototype.h = function (a) {
        a._b.recalculateBeforeSave = Convert.toBoolean1(a._av._readUInt16());
    };
    SAVERECALCRecord.prototype.i = function (a) {
        a._ci._write17(Convert.toUInt16(a._b.recalculateBeforeSave));
    };
    SAVERECALCRecord.prototype.get_d = function () {
        return 95;
    };
    Object.defineProperty(SAVERECALCRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    SAVERECALCRecord.$t = markType(SAVERECALCRecord, 'SAVERECALCRecord', Biff8RecordBase.$);
    return SAVERECALCRecord;
}(Biff8RecordBase));
export { SAVERECALCRecord };
/**
 * @hidden
 */
var SCENPROTECTRecord = /** @class */ (function (_super) {
    tslib_1.__extends(SCENPROTECTRecord, _super);
    function SCENPROTECTRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SCENPROTECTRecord.prototype.h = function (a) {
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        b.protection.allowEditScenarios = (a._av._readUInt16() != 1);
    };
    SCENPROTECTRecord.prototype.i = function (a) {
        var b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        a._ci._write17(Convert.toUInt16(b.protection.allowEditScenarios == false));
    };
    SCENPROTECTRecord.prototype.get_d = function () {
        return 221;
    };
    Object.defineProperty(SCENPROTECTRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    SCENPROTECTRecord.$t = markType(SCENPROTECTRecord, 'SCENPROTECTRecord', Biff8RecordBase.$);
    return SCENPROTECTRecord;
}(Biff8RecordBase));
export { SCENPROTECTRecord };
/**
 * @hidden
 */
var SCLRecord = /** @class */ (function (_super) {
    tslib_1.__extends(SCLRecord, _super);
    function SCLRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SCLRecord.prototype.h = function (a) {
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = a._av._readUInt16();
        var d = a._av._readUInt16();
        var e = truncate(((c / d) * 100));
        var f = ExcelUtils.fj(e);
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
    };
    SCLRecord.prototype.i = function (a) {
        var b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c;
        if (b.displayOptions.view == 0) {
            c = b.displayOptions.magnificationInNormalView;
        }
        else if (b.displayOptions.view == 2) {
            c = b.displayOptions.magnificationInPageBreakView;
        }
        else {
            c = b.displayOptions.magnificationInPageLayoutView;
        }
        var d = c;
        var e = 100;
        var f = ExcelUtils.fz(d, e);
        d = f.p0;
        e = f.p1;
        a._ci._write17(d);
        a._ci._write17(e);
    };
    SCLRecord.prototype.get_d = function () {
        return 160;
    };
    Object.defineProperty(SCLRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    SCLRecord.$t = markType(SCLRecord, 'SCLRecord', Biff8RecordBase.$);
    return SCLRecord;
}(Biff8RecordBase));
export { SCLRecord };
/**
 * @hidden
 */
var SELECTIONRecord = /** @class */ (function (_super) {
    tslib_1.__extends(SELECTIONRecord, _super);
    function SELECTIONRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SELECTIONRecord.prototype.h = function (a) {
        var b = a._ai.a(DisplayOptions.$);
        var c = new WorksheetPaneSelection();
        c.a = a._av.readByte();
        var d = a._av._readUInt16();
        var e = a._av._readUInt16();
        c.b = new WorksheetCellAddress(1, d, e);
        c.f = a._av._readUInt16();
        var f = a._av._readUInt16();
        for (var g = 0; g < f; g++) {
            var h = a._av._readUInt16();
            var i = a._av._readUInt16();
            var j = a._av.readByte();
            var k = a._av.readByte();
            if (h == 0 && i == 16383) {
                i = 65535;
            }
            c.d.add(new WorksheetRegionAddress(1, h, i, j, k));
        }
        b._af.b.add(c);
    };
    SELECTIONRecord.prototype.i = function (a) {
        var e_73, _0;
        var b = a._b7.a(WorksheetPaneSelection.$) || WorksheetPaneSelection.c(3);
        a._ci._write9(b.a);
        a._ci._write17(b.b.o);
        a._ci._write17(b.b.m);
        a._ci._write17(b.f);
        a._ci._write17(b.d.count);
        try {
            for (var _1 = tslib_1.__values(fromEnum(b.d)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var c = _2.value;
                a._ci._write17(c._ac);
                a._ci._write17(c._ae);
                a._ci._write9(c._w);
                a._ci._write9(c._x);
            }
        }
        catch (e_73_1) { e_73 = { error: e_73_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_73) throw e_73.error; }
        }
    };
    SELECTIONRecord.prototype.get_d = function () {
        return 29;
    };
    Object.defineProperty(SELECTIONRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    SELECTIONRecord.$t = markType(SELECTIONRecord, 'SELECTIONRecord', Biff8RecordBase.$);
    return SELECTIONRecord;
}(Biff8RecordBase));
export { SELECTIONRecord };
/**
 * @hidden
 */
var SETUPRecord = /** @class */ (function (_super) {
    tslib_1.__extends(SETUPRecord, _super);
    function SETUPRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SETUPRecord.prototype.h = function (a) {
        var b = a._ai.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        var c = a._av._readUInt16();
        var d = a._av._readUInt16();
        b.startPageNumber = a._av._readInt16();
        b.maxPagesHorizontally = a._av._readUInt16();
        b.maxPagesVertically = a._av._readUInt16();
        var e = a._av._readUInt16();
        var f = a._av._readUInt16();
        var g = a._av._readUInt16();
        b.headerMargin = a._av._readDouble();
        b.footerMargin = a._av._readDouble();
        var h = a._av._readUInt16();
        b.pageOrder = (e & 1);
        var i = ((e & 2) >> 1);
        var j = (e & 4) == 4;
        b.printInBlackAndWhite = (e & 8) == 8;
        b.draftQuality = (e & 16) == 16;
        var k = (e & 32) == 32;
        var l = (e & 64) == 64;
        b.pageNumbering = ((e & 128) >> 7);
        var m = (e & 512) == 512;
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
    };
    SETUPRecord.prototype.i = function (a) {
        var b = a._b7.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        a._ci._write17(b.paperSize);
        a._ci._write17(b.scalingFactor);
        a._ci._write17(b.startPageNumber);
        a._ci._write17(b.maxPagesHorizontally);
        a._ci._write17(b.maxPagesVertically);
        var c = 0;
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
    };
    SETUPRecord.prototype.get_d = function () {
        return 161;
    };
    Object.defineProperty(SETUPRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    SETUPRecord.$t = markType(SETUPRecord, 'SETUPRecord', Biff8RecordBase.$);
    return SETUPRecord;
}(Biff8RecordBase));
export { SETUPRecord };
/**
 * @hidden
 */
var SHEETEXTRecord = /** @class */ (function (_super) {
    tslib_1.__extends(SHEETEXTRecord, _super);
    function SHEETEXTRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SHEETEXTRecord.prototype.h = function (a) {
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        a._av._readFrtHeader();
        var c = a._av._readUInt32();
        var d = a._av._readUInt32();
        var e = ExcelUtils.c7(d, 0, 6);
        if (c < 40) {
            b.displayOptions.tabColorInfo = new WorkbookColorInfo(a._b, e);
        }
        else {
            var f = a._av._readUInt32();
            var g = ExcelUtils.c7(f, 0, 6);
            var h = ExcelUtils.bu(f, 7);
            var i = ExcelUtils.bu(f, 8);
            b.displayOptions.tabColorInfo = a._av._readCFColor();
        }
    };
    SHEETEXTRecord.prototype.i = function (a) {
        var b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        a._ci._writeFrtHeader();
        a._ci._write18(40);
        var c = b.displayOptions.tabColorInfo;
        var d = c._y(a._b, 4);
        a._ci._write12(d);
        var e = 0;
        var f = ExcelUtils.e2(e, d, 0, 6);
        e = f.p0;
        var g = ExcelUtils.f9(e, true, 7);
        e = g.p0;
        var h = ExcelUtils.f9(e, false, 8);
        e = h.p0;
        a._ci._write18(e);
        a._ci._writeCFColor(c, 4);
    };
    SHEETEXTRecord.prototype.get_d = function () {
        return 2146;
    };
    Object.defineProperty(SHEETEXTRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    SHEETEXTRecord.$t = markType(SHEETEXTRecord, 'SHEETEXTRecord', Biff8RecordBase.$);
    return SHEETEXTRecord;
}(Biff8RecordBase));
export { SHEETEXTRecord };
/**
 * @hidden
 */
var SHRFMLARecord = /** @class */ (function (_super) {
    tslib_1.__extends(SHRFMLARecord, _super);
    function SHRFMLARecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SHRFMLARecord.prototype.h = function (a) {
        var e_74, _0;
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = new Array(0);
        var d = 0;
        var e = ((function () { var f = a._av._readUInt16FromBuffer(c, d); c = f.p0; d = f.p1; return f.ret; })());
        var f = ((function () { var g = a._av._readUInt16FromBuffer(c, d); c = g.p0; d = g.p1; return g.ret; })());
        var g = ((function () { var h = a._av.readByteFromBuffer(c, d); c = h.p0; d = h.p1; return h.ret; })());
        var h = ((function () { var i = a._av.readByteFromBuffer(c, d); c = i.p0; d = i.p1; return i.ret; })());
        var i = a._av.readByteFromBuffer(c, d);
        c = i.p0;
        d = i.p1;
        var j = a._av.readByteFromBuffer(c, d);
        c = j.p0;
        d = j.p1;
        var k = ((function () { var l = a._at(2, c, d); c = l.p1; d = l.p2; return l.ret; })());
        b._h2(k, b._cx(e, g, f, h));
        var l = b._rows$i.item(e);
        a._bl.item(new WorksheetCellAddress(1, e, g), k);
        var m = new List$1(KeyValuePair$2.$.specialize(WorksheetCellAddress.$, ExcelCalcValue.$), 1, a._bk);
        try {
            for (var _1 = tslib_1.__values(fromEnum(m)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var n = _2.value;
                var o = n.key;
                var p = n.value;
                var q = o.o;
                var r = o.m;
                if (e <= q && q <= f && g <= r && r <= h) {
                    a._bk.removeItem(o);
                    var s = b._rows$i.item(q);
                    k._bp(s, r);
                    s._d0(r, p);
                    var t = s._ar(r);
                    a._bl.item(new WorksheetCellAddress(1, q, r), t);
                }
            }
        }
        catch (e_74_1) { e_74 = { error: e_74_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_74) throw e_74.error; }
        }
    };
    SHRFMLARecord.prototype.i = function (a) {
        var b = a._cj;
        var c = ExcelUtils.z(b.c);
        if (c == null) {
            return;
        }
        var d = a._b7.a(Worksheet.$);
        if (d == null) {
            return;
        }
        var e = d._c2(c);
        a._ci._writeRefU(e);
        a._ci.writeByte(0);
        a._ci.writeByte((e._aa * e._ad));
        a._c2(c, true, false, false);
    };
    SHRFMLARecord.prototype.get_d = function () {
        return 1212;
    };
    Object.defineProperty(SHRFMLARecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    SHRFMLARecord.$t = markType(SHRFMLARecord, 'SHRFMLARecord', Biff8RecordBase.$);
    return SHRFMLARecord;
}(Biff8RecordBase));
export { SHRFMLARecord };
/**
 * @hidden
 */
var SORTDATA12Record = /** @class */ (function (_super) {
    tslib_1.__extends(SORTDATA12Record, _super);
    function SORTDATA12Record() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SORTDATA12Record.prototype.h = function (a) {
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        a._av._readFrtHeader();
        var c = a._av._readUInt16();
        var d = ExcelUtils.bt(c, 0);
        var e = ExcelUtils.bt(c, 1);
        var f = ExcelUtils.bt(c, 2);
        var g = ExcelUtils.c6(c, 3, 5);
        var h = a._av._readRFX(b);
        var i = a._av._readUInt32();
        var j = a._av._readUInt32();
        var k = b._tables$i._g(j);
        if (k != null) {
            if (g != 1) {
                return;
            }
            SORTDATA12Record.o(WorksheetTableColumn.$, a, b, k.sortSettings, k._by, e, f, i, function (l) { return k._columns$i._item(l); });
        }
        else {
            a._av.position -= 4;
            if (g != 0) {
                return;
            }
            b.filterSettings._bm(h);
            SORTDATA12Record.o(RelativeIndex.$, a, b, b.filterSettings.sortSettings, h._h, e, f, i, function (l) { return new RelativeIndex(l); });
        }
    };
    SORTDATA12Record.o = function ($t, a, b, c, d, e, f, g, h) {
        c.caseSensitive = e;
        c._i = (f || a._b._e6.name == "zh-TW") ? 2 : 1;
        for (var i = 0; i < g; i++) {
            a._av._readSortCond12$1($t, b, c, d, h);
        }
    };
    SORTDATA12Record.prototype.i = function (a) {
        var b = a._b7.a(WorksheetTable.$);
        if (b != null) {
            SORTDATA12Record.p(WorksheetTableColumn.$, a, b.sortSettings, b._bs, b._ds, true, false, false, function (c) { return c._ai; });
            return;
        }
        var c = a._b7.a(WorksheetFilterSettings.$);
        if (c == null) {
            return;
        }
        SORTDATA12Record.p(RelativeIndex.$, a, c.sortSettings, c.region, 0, false, true, false, function (d) { return c._ad(d); });
    };
    SORTDATA12Record.p = function ($t, a, b, c, d, e, f, g, h) {
        var e_75, _0;
        a._ci._writeFrtHeader();
        var i = f ? 0 : 1;
        var j = b._n;
        var k = 0;
        var l = ExcelUtils.f7(k, false, 0);
        k = l.p0;
        var m = ExcelUtils.f7(k, b.caseSensitive, 1);
        k = m.p0;
        var n = ExcelUtils.f7(k, j, 2);
        k = n.p0;
        var o = ExcelUtils.e1(k, i, 3, 5);
        k = o.p0;
        a._ci._write17(k);
        a._ci._writeRFX(c);
        a._ci._write18(intSToU(b._sortConditions$i.count));
        if (e) {
            a._ci._write18(d);
        }
        var p = a._w(c.worksheet);
        try {
            for (var _1 = tslib_1.__values(fromEnum(b._sortConditions$i)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var q = _2.value;
                a._ci._capCurrentBlock();
                a._ci._writeSortCond12$1($t, q.key, q.value, h(q.key), f, p);
            }
        }
        catch (e_75_1) { e_75 = { error: e_75_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_75) throw e_75.error; }
        }
    };
    SORTDATA12Record.prototype.get_d = function () {
        return 2197;
    };
    Object.defineProperty(SORTDATA12Record.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    SORTDATA12Record.$t = markType(SORTDATA12Record, 'SORTDATA12Record', Biff8RecordBase.$);
    return SORTDATA12Record;
}(Biff8RecordBase));
export { SORTDATA12Record };
/**
 * @hidden
 */
var SSTRecord = /** @class */ (function (_super) {
    tslib_1.__extends(SSTRecord, _super);
    function SSTRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SSTRecord.prototype.get_e = function () {
        return true;
    };
    SSTRecord.prototype.h = function (a) {
    };
    SSTRecord.prototype.a = function (a) {
        if (a._ba) {
            a._ce = Nullable$1.toNullable(Number_$type, a._av._getStartOfRecord());
            return null;
        }
        return WorkItemExtensions.c(a._ar(), function () {
            a._av._readUInt32();
            var b = a._av._readUInt32();
            return a._av._readFormattedStringBlock(b, a._u);
        });
    };
    SSTRecord.prototype.b = function (a) {
        a._ci._write18(a._bc);
        a._ci._write18(intSToU(a._a1));
        var b = a._b.shouldRemoveCarriageReturnsOnSave;
        var c = 0;
        var d = 0;
        return Async.e(StringElement.$, a._ax(), function (e) {
            var f = SSTRecord.o(a, e, b, c);
            c = f.p3;
            d++;
            if (1000 < d) {
                d = 0;
                return false;
            }
            return true;
        });
    };
    SSTRecord.prototype.i = function (a) {
    };
    SSTRecord.o = function (a, b, c, d) {
        if (d % 8 == 0) {
            var e = new WorkbookSaveManagerExcel2003_ExtSstItem();
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
    };
    SSTRecord.prototype.get_d = function () {
        return 252;
    };
    Object.defineProperty(SSTRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    SSTRecord.$t = markType(SSTRecord, 'SSTRecord', Biff8RecordBase.$);
    return SSTRecord;
}(Biff8RecordBase));
export { SSTRecord };
/**
 * @hidden
 */
var STANDARDWIDTHRecord = /** @class */ (function (_super) {
    tslib_1.__extends(STANDARDWIDTHRecord, _super);
    function STANDARDWIDTHRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    STANDARDWIDTHRecord.prototype.h = function (a) {
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = a._av._readUInt16();
        if (c != 0) {
            b.defaultColumnWidth = c;
        }
        b._ek = true;
    };
    STANDARDWIDTHRecord.prototype.i = function (a) {
        var b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = b.defaultColumnWidth;
        if (Enumerable.b(WorksheetColumnBlock.$, b._ff, function (d) { return d.i; })) {
            c = 0;
        }
        a._ci._write17(c);
    };
    STANDARDWIDTHRecord.prototype.get_d = function () {
        return 153;
    };
    Object.defineProperty(STANDARDWIDTHRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    STANDARDWIDTHRecord.$t = markType(STANDARDWIDTHRecord, 'STANDARDWIDTHRecord', Biff8RecordBase.$);
    return STANDARDWIDTHRecord;
}(Biff8RecordBase));
export { STANDARDWIDTHRecord };
/**
 * @hidden
 */
var STRINGRecord = /** @class */ (function (_super) {
    tslib_1.__extends(STRINGRecord, _super);
    function STRINGRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    STRINGRecord.prototype.h = function (a) {
        var b = a._av._readFormattedString(1)._y;
        a._ai.k(b);
    };
    STRINGRecord.prototype.i = function (a) {
        var b = typeCast(String_$type, a._b7.f);
        if (b == null) {
            return;
        }
        a._ci._write15(b, 1);
    };
    STRINGRecord.prototype.get_d = function () {
        return 519;
    };
    Object.defineProperty(STRINGRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    STRINGRecord.$t = markType(STRINGRecord, 'STRINGRecord', Biff8RecordBase.$);
    return STRINGRecord;
}(Biff8RecordBase));
export { STRINGRecord };
/**
 * @hidden
 */
var STYLEEXTRecord = /** @class */ (function (_super) {
    tslib_1.__extends(STYLEEXTRecord, _super);
    function STYLEEXTRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    STYLEEXTRecord.prototype.h = function (a) {
        var b = new STYLEEXTRecordInfo();
        a._av._readFrtHeader();
        b.c = a._av.readByte();
        b.b = a._av.readByte();
        b.e = a._av._readUInt16();
        b.d = a._av._readLPWideString();
        b.a = a._av._readXFProps();
        a._by.add(b);
    };
    STYLEEXTRecord.o = function (a, b) {
        var c = a._b._styles$i;
        var d = a._b5;
        var e = ExcelUtils.bt(b.c, 0);
        var f = ExcelUtils.bt(b.c, 1);
        var g = ExcelUtils.bt(b.c, 2);
        var h = (b.e >>> 8);
        var i = (b.e & 255);
        var j = null;
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
        var k = typeCast(WorkbookBuiltInStyle.$, j);
        if (e) {
            if (EnumUtil.isDefined(BuiltInStyleType_$type, enumGetBox(BuiltInStyleType_$type, i))) {
                if (k == null) {
                    var l = d.indexOf(j);
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
    };
    STYLEEXTRecord.prototype.i = function (a) {
        var b = a._b7.a(WorkbookStyle.$);
        if (b == null) {
            return;
        }
        var c = typeCast(WorkbookBuiltInStyle.$, b);
        var d = c != null && c._ah;
        a._ci._writeFrtHeader();
        var e = 0;
        var f = ExcelUtils.f5(e, b.isBuiltIn, 0);
        e = f.p0;
        var g = ExcelUtils.f5(e, false, 1);
        e = g.p0;
        var h = ExcelUtils.f5(e, d, 2);
        e = h.p0;
        a._ci._write9(e);
        a._ci._write9(b._e);
        var i = 65535;
        if (c != null) {
            i = ((c._ak << 8) | c._ac);
        }
        a._ci._write17(i);
        a._ci._writeLPWideString(b.name);
        a._ci._writeXFProps(b._i);
    };
    STYLEEXTRecord.prototype.get_d = function () {
        return 2194;
    };
    Object.defineProperty(STYLEEXTRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    STYLEEXTRecord.$t = markType(STYLEEXTRecord, 'STYLEEXTRecord', Biff8RecordBase.$);
    return STYLEEXTRecord;
}(Biff8RecordBase));
export { STYLEEXTRecord };
/**
 * @hidden
 */
var STYLEEXTRecordInfo = /** @class */ (function (_super) {
    tslib_1.__extends(STYLEEXTRecordInfo, _super);
    function STYLEEXTRecordInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.c = 0;
        _this.b = 0;
        _this.e = 0;
        _this.d = null;
        _this.a = null;
        return _this;
    }
    STYLEEXTRecordInfo.$t = markType(STYLEEXTRecordInfo, 'STYLEEXTRecordInfo');
    return STYLEEXTRecordInfo;
}(Base));
export { STYLEEXTRecordInfo };
/**
 * @hidden
 */
var STYLERecord = /** @class */ (function (_super) {
    tslib_1.__extends(STYLERecord, _super);
    function STYLERecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    STYLERecord.prototype.h = function (a) {
        var b = new STYLERecordInfo();
        var c = a._av._readUInt16();
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
    };
    STYLERecord.o = function (a, b) {
        var c = a._b2._inner[b.d];
        if (c._b1 != 1) {
            c = c._bu();
            c._b1 = 1;
        }
        var d;
        if (b.b) {
            d = new WorkbookBuiltInStyle(a._b, c, b.a, b.c);
        }
        else {
            var e_76 = new BuiltInStyleInfo();
            if (((function () { var f = WorkbookStyleCollection._t.tryGetValue(b.e, e_76); e_76 = f.p1; return f.ret; })())) {
                d = new WorkbookBuiltInStyle(a._b, c, e_76.a, e_76.b);
            }
            else {
                d = new WorkbookUserDefinedStyle(a._b, c, b.e);
            }
        }
        d = a._b._styles$i._add(d);
        a._b5.add(d);
        var f;
        if (((function () { var g = a._bj.tryGetValue(b.d, f); f = g.p1; return g.ret; })())) {
            var g = d._i;
            for (var h = 0; h < f.count; h++) {
                var i = f._inner[h];
                i.style = d;
                var j = i.formatOptions;
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
    };
    STYLERecord.prototype.i = function (a) {
        var b = a._b7.a(WorkbookStyle.$);
        if (b == null) {
            return;
        }
        var c = a._a7(b);
        if (c < 0) {
            c = 0;
        }
        var d = typeCast(WorkbookBuiltInStyle.$, b);
        var e = d != null && d._ag;
        var f = 0;
        f |= c;
        var g = ExcelUtils.f7(f, e, 15);
        f = g.p0;
        a._ci._write17(f);
        if (e) {
            a._ci._write9(d._ac);
            a._ci._write9(d._ak);
        }
        else {
            a._ci._write15(b.name, 1);
        }
    };
    STYLERecord.prototype.get_d = function () {
        return 659;
    };
    Object.defineProperty(STYLERecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    STYLERecord.$t = markType(STYLERecord, 'STYLERecord', Biff8RecordBase.$);
    return STYLERecord;
}(Biff8RecordBase));
export { STYLERecord };
/**
 * @hidden
 */
var STYLERecordInfo = /** @class */ (function (_super) {
    tslib_1.__extends(STYLERecordInfo, _super);
    function STYLERecordInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.d = 0;
        _this.b = false;
        _this.a = 0;
        _this.c = 0;
        _this.e = null;
        return _this;
    }
    STYLERecordInfo.$t = markType(STYLERecordInfo, 'STYLERecordInfo');
    return STYLERecordInfo;
}(Base));
export { STYLERecordInfo };
/**
 * @hidden
 */
var SUPBOOKRecord = /** @class */ (function (_super) {
    tslib_1.__extends(SUPBOOKRecord, _super);
    function SUPBOOKRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SUPBOOKRecord.prototype.h = function (a) {
        var b = a._av._readUInt16();
        var c = a._av._readUInt16();
        var d;
        if (c == 1025) {
            d = a._b._bb;
        }
        else if (c == 14849) {
            d = a._b._a9;
        }
        else {
            var e = a._av._readFormattedString1(c)._y;
            e = ExcelUtils.d7(a._l, e);
            var f = e == null ? -1 : e.indexOf("\u0003");
            if (0 <= f) {
                d = a._b._be(e, "\u0003");
            }
            else {
                var g = new Array(b);
                for (var h = 0; h < b; h++) {
                    g[h] = a._av._readFormattedString(1)._y;
                }
                d = a._b._bf(e);
                var i = typeCast(ExternalWorkbookReference.$, d);
                if (i != null) {
                    i.ag.o(g);
                }
            }
        }
        a._i.add(d);
        a._cn(d);
    };
    SUPBOOKRecord.prototype.i = function (a) {
        var e_77, _0;
        var b = a._b7.a(WorkbookReferenceBase.$);
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
            var c = typeCast(ExternalWorkbookReference.$, b);
            if (c != null) {
                a._ci._write17(c.ag.count);
                a._ci._write15(ExcelUtils.d8(c.x), 1);
                try {
                    for (var _1 = tslib_1.__values(fromEnum(c.ag)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                        var d = _2.value;
                        a._ci._write15(d, 1);
                    }
                }
                catch (e_77_1) { e_77 = { error: e_77_1 }; }
                finally {
                    try {
                        if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
                    }
                    finally { if (e_77) throw e_77.error; }
                }
            }
            else {
                var e = typeCast(OleLinkWorkbookReference.$, b);
                if (e != null) {
                    a._ci._write17(0);
                    a._ci._write15(e.ai + "\u0003" + e.ak.originalString, 1);
                }
                else {
                    var f = typeCast(DdeLinkWorkbookReference.$, b);
                    if (f != null) {
                        a._ci._write17(0);
                        a._ci._write15(f.ak + "\u0003" + f.al, 1);
                    }
                }
            }
        }
    };
    SUPBOOKRecord.prototype.get_d = function () {
        return 430;
    };
    Object.defineProperty(SUPBOOKRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    SUPBOOKRecord.$t = markType(SUPBOOKRecord, 'SUPBOOKRecord', Biff8RecordBase.$);
    return SUPBOOKRecord;
}(Biff8RecordBase));
export { SUPBOOKRecord };
/**
 * @hidden
 */
var TABIDRecord = /** @class */ (function (_super) {
    tslib_1.__extends(TABIDRecord, _super);
    function TABIDRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TABIDRecord.prototype.h = function (a) {
        var b = intDivide(a._av.length, 2);
        for (var c = 0; c < b; c++) {
            var d = a._av._readUInt16();
            a._bm.addItem(c, d);
        }
    };
    TABIDRecord.prototype.i = function (a) {
        for (var b = 0; b < a._az.count; b++) {
            a._ci._write17(a._az.item(b)._am);
        }
    };
    TABIDRecord.prototype.get_d = function () {
        return 317;
    };
    Object.defineProperty(TABIDRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    TABIDRecord.$t = markType(TABIDRecord, 'TABIDRecord', Biff8RecordBase.$);
    return TABIDRecord;
}(Biff8RecordBase));
export { TABIDRecord };
/**
 * @hidden
 */
var TABLERecord = /** @class */ (function (_super) {
    tslib_1.__extends(TABLERecord, _super);
    function TABLERecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TABLERecord.prototype.h = function (a) {
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = a._av._readUInt16();
        var d = a._av._readUInt16();
        var e = a._av.readByte();
        var f = a._av.readByte();
        var g = a._av._readUInt16();
        var h = (g & 4) == 4;
        var i = (g & 8) == 8;
        var j = a._av._readUInt16();
        var k = a._av._readUInt16();
        var l = a._av._readUInt16();
        var m = a._av._readUInt16();
        var n = null;
        var o = null;
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
    };
    TABLERecord.prototype.i = function (a) {
        var b = a._cj;
        var c = typeCast(DataTableInteriorFormula.$, b.c);
        if (c == null) {
            return;
        }
        var d = c._cz;
        var e = d.cellsInTable;
        a._ci._write17((e.firstRow + 1));
        a._ci._write17(e.lastRow);
        a._ci._write9((e.firstColumn + 1));
        a._ci._write9(e.lastColumn);
        var f = 0;
        var g = 0;
        var h = 0;
        var i = 0;
        var j = 0;
        var k = d.rowInputCell;
        var l = d.columnInputCell;
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
    };
    TABLERecord.prototype.get_d = function () {
        return 566;
    };
    Object.defineProperty(TABLERecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    TABLERecord.$t = markType(TABLERecord, 'TABLERecord', Biff8RecordBase.$);
    return TABLERecord;
}(Biff8RecordBase));
export { TABLERecord };
/**
 * @hidden
 */
var TABLESTYLEELEMENTRecord = /** @class */ (function (_super) {
    tslib_1.__extends(TABLESTYLEELEMENTRecord, _super);
    function TABLESTYLEELEMENTRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TABLESTYLEELEMENTRecord.prototype.get_e = function () {
        return true;
    };
    TABLESTYLEELEMENTRecord.prototype.h = function (a) {
    };
    TABLESTYLEELEMENTRecord.prototype.a = function (a) {
        return WorkItemExtensions.a(a._ar(), function () {
            a._av._readFrtHeader();
            var b = a._av._readUInt32();
            var c = a._av._readUInt32();
            var d = a._av._readUInt32();
            if (a._a7 == null) {
                return;
            }
            if (a._g.count <= d) {
                return;
            }
            var e = b;
            if (EnumUtil.isDefined(WorksheetTableStyleArea_$type, enumGetBox(WorksheetTableStyleArea_$type, e)) == false) {
                return;
            }
            var f = a._a7;
            var g = a._g._inner[d];
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
    };
    TABLESTYLEELEMENTRecord.prototype.i = function (a) {
        var b = a._b7.a(WorksheetTableStyle.$);
        if (b == null) {
            return;
        }
        var c = a._b7.a(WorksheetTableStyleArea_$type);
        var d = a._b7.a(Number_$type);
        var e = b._ak(c);
        if (e.hasValue == false) {
            e = Nullable$1.toNullable(Number_$type, 0);
        }
        a._ci._writeFrtHeader();
        a._ci._write18(c);
        a._ci._write18(e.value);
        a._ci._write18(d);
    };
    TABLESTYLEELEMENTRecord.prototype.get_d = function () {
        return 2192;
    };
    Object.defineProperty(TABLESTYLEELEMENTRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    TABLESTYLEELEMENTRecord.$t = markType(TABLESTYLEELEMENTRecord, 'TABLESTYLEELEMENTRecord', Biff8RecordBase.$);
    return TABLESTYLEELEMENTRecord;
}(Biff8RecordBase));
export { TABLESTYLEELEMENTRecord };
/**
 * @hidden
 */
var TABLESTYLERecord = /** @class */ (function (_super) {
    tslib_1.__extends(TABLESTYLERecord, _super);
    function TABLESTYLERecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TABLESTYLERecord.prototype.h = function (a) {
        a._av._readFrtHeader();
        var b = a._av._readUInt16();
        var c = ExcelUtils.bt(b, 0);
        var d = ExcelUtils.bt(b, 1);
        var e = ExcelUtils.bt(b, 2);
        var f = ExcelUtils.c6(b, 3, 15);
        var g = a._av._readUInt32();
        var h = a._av._readUInt16();
        var i = a._av._readUnicodeString(h);
        if (e && i.length > 0) {
            a._a7 = new WorksheetTableStyle(i);
            a._b._customTableStyles$i.add(a._a7);
        }
        else {
            a._a7 = null;
        }
    };
    TABLESTYLERecord.prototype.i = function (a) {
        var b = a._b7.a(WorksheetTableStyle.$);
        if (b == null) {
            return;
        }
        a._ci._writeFrtHeader();
        var c = 0;
        var d = ExcelUtils.f7(c, true, 2);
        c = d.p0;
        a._ci._write17(c);
        a._ci._write18(intSToU(a._aa(b)._k));
        a._ci._write17(b.name.length);
        a._ci._writeUnicodeString(b.name);
    };
    TABLESTYLERecord.prototype.get_d = function () {
        return 2191;
    };
    Object.defineProperty(TABLESTYLERecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    TABLESTYLERecord.$t = markType(TABLESTYLERecord, 'TABLESTYLERecord', Biff8RecordBase.$);
    return TABLESTYLERecord;
}(Biff8RecordBase));
export { TABLESTYLERecord };
/**
 * @hidden
 */
var TABLESTYLESRecord = /** @class */ (function (_super) {
    tslib_1.__extends(TABLESTYLESRecord, _super);
    function TABLESTYLESRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TABLESTYLESRecord.prototype.h = function (a) {
        a._av._readFrtHeader();
        var b = a._av._readUInt32();
        var c = a._av._readUInt16();
        var d = a._av._readUInt16();
        var e = Encoding.unicode.getString(a._av._readBytes(c * 2));
        var f = Encoding.unicode.getString(a._av._readBytes(d * 2));
        a._b.defaultTableStyle = a._b._cj(e);
    };
    TABLESTYLESRecord.prototype.i = function (a) {
        a._ci._writeFrtHeader();
        var b = intSToU((144 + a._b._customTableStyles$i.count));
        a._ci._write18(b);
        var c = a._b.defaultTableStyle.name;
        var d = "PivotStyleMedium9";
        a._ci._write17(c.length);
        a._ci._write17(d.length);
        a._ci._write2(Encoding.unicode.getBytes1(c));
        a._ci._write2(Encoding.unicode.getBytes1(d));
    };
    TABLESTYLESRecord.prototype.get_d = function () {
        return 2190;
    };
    Object.defineProperty(TABLESTYLESRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    TABLESTYLESRecord.$t = markType(TABLESTYLESRecord, 'TABLESTYLESRecord', Biff8RecordBase.$);
    return TABLESTYLESRecord;
}(Biff8RecordBase));
export { TABLESTYLESRecord };
/**
 * @hidden
 */
var TEMPLATERecord = /** @class */ (function (_super) {
    tslib_1.__extends(TEMPLATERecord, _super);
    function TEMPLATERecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TEMPLATERecord.prototype.h = function (a) {
        a._b._iz(1);
    };
    TEMPLATERecord.prototype.i = function (a) {
    };
    TEMPLATERecord.prototype.get_d = function () {
        return 96;
    };
    Object.defineProperty(TEMPLATERecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    TEMPLATERecord.$t = markType(TEMPLATERecord, 'TEMPLATERecord', Biff8RecordBase.$);
    return TEMPLATERecord;
}(Biff8RecordBase));
export { TEMPLATERecord };
/**
 * @hidden
 */
var THEMERecord = /** @class */ (function (_super) {
    tslib_1.__extends(THEMERecord, _super);
    function THEMERecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    THEMERecord.prototype.get_e = function () {
        return true;
    };
    THEMERecord.prototype.h = function (a) {
    };
    THEMERecord.prototype.a = function (a) {
        a._av._readFrtHeader();
        var b = a._av._readUInt32();
        if (b != 124226) {
            var c = (a._av.length - a._av.position);
            a._b._e = a._av._readBytes(c);
            a._b._g3 = b;
            if (a._b._e != null && Workbook._e0 != null) {
                return Async.n(MemoryStream.$, new MemoryStream(2, a._b._e), function (d) { return Workbook._e0(a._b, d, a._al); });
            }
        }
        else {
        }
        return null;
    };
    THEMERecord.prototype.i = function (a) {
        a._ci._writeFrtHeader();
        if (a._b._e != null) {
            a._ci._write18(a._b._g3);
            a._ci._write2(a._b._e);
        }
        else {
            a._ci._write18(124226);
        }
    };
    THEMERecord.prototype.get_d = function () {
        return 2198;
    };
    Object.defineProperty(THEMERecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    THEMERecord.$t = markType(THEMERecord, 'THEMERecord', Biff8RecordBase.$);
    return THEMERecord;
}(Biff8RecordBase));
export { THEMERecord };
/**
 * @hidden
 */
var TOPMARGINRecord = /** @class */ (function (_super) {
    tslib_1.__extends(TOPMARGINRecord, _super);
    function TOPMARGINRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TOPMARGINRecord.prototype.h = function (a) {
        var b = a._ai.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        b.topMargin = a._av._readDouble();
    };
    TOPMARGINRecord.prototype.i = function (a) {
        var b = a._b7.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        a._ci._write10(b.topMargin);
    };
    TOPMARGINRecord.prototype.get_d = function () {
        return 40;
    };
    Object.defineProperty(TOPMARGINRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    TOPMARGINRecord.$t = markType(TOPMARGINRecord, 'TOPMARGINRecord', Biff8RecordBase.$);
    return TOPMARGINRecord;
}(Biff8RecordBase));
export { TOPMARGINRecord };
/**
 * @hidden
 */
var TXORecord = /** @class */ (function (_super) {
    tslib_1.__extends(TXORecord, _super);
    function TXORecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TXORecord.prototype.h = function (a) {
        var b = a._av._readUInt16();
        var c = ExcelUtils.c6(b, 1, 3);
        var d = ExcelUtils.c6(b, 4, 6);
        var e = a._av._readUInt16();
        a._av.seek(6, 1);
        var f = a._av._readUInt16();
        var g = a._av._readUInt16();
        a._av.seek(4, 1);
        var h = a._ai.a(WorksheetShape.$);
        var i = typeCast(WorksheetCellComment.$, h);
        var j = typeCast(WorksheetShapeWithText.$, h);
        var k;
        if (i != null) {
            if (f == 0) {
                k = new FormattedStringElement(0);
            }
            else {
                var l = a._av._readFormattedString1(f);
                k = new FormattedStringElement(1, l._y);
                var m = intDivide(g, 8);
                for (var n = 0; n < m; n++) {
                    var o = a._av._readUInt16();
                    var p = a._av._readUInt16();
                    a._av.seek(4, 1);
                    if (o < f) {
                        var q = new FormattedStringRun(k, o);
                        q.d(a._b).setFontFormatting(TXORecord.o(a, p, true));
                        k._ah.add(q);
                    }
                }
            }
            i.text = new FormattedString(a._b, k, false, false);
        }
        else if (j != null) {
            var r = void 0;
            if (f == 0) {
                r = new FormattedText(stringEmpty());
            }
            else {
                var s = a._av._readFormattedString1(f);
                r = new FormattedText(s._y);
                {
                    var t = r._paragraphs$i.getEnumerator();
                    try {
                        var u = t.moveNext();
                        if (u == false) {
                            return;
                        }
                        var v = t.current;
                        var w = t.moveNext() ? t.current : null;
                        var x = intDivide(g, 8);
                        var y = null;
                        for (var z = 0; z < x; z++) {
                            var aa = a._av._readUInt16();
                            var ab = a._av._readUInt16();
                            a._av.seek(4, 1);
                            if (w != null && w.startIndex <= aa) {
                                if (aa != w.startIndex) {
                                    if (y != null) {
                                        var ac = new FormattedTextRun(w, 0);
                                        ac.m(y, a._b);
                                        w._u(ac);
                                    }
                                }
                                v = w;
                                w = t.moveNext() ? t.current : null;
                            }
                            if (aa < f) {
                                var ad = new FormattedTextRun(v, aa - v.startIndex);
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
            var ae = void 0;
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
            var af = void 0;
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
            for (var ag = 0; ag < r._paragraphs$i.count; ag++) {
                r._paragraphs$i.item(ag).alignment = af;
            }
            j.text = r;
        }
        else {
        }
        h._cc = b;
        h._ce = e;
    };
    TXORecord.o = function (a, b, c) {
        var d = a._h._inner[b];
        if (WorkbookColorInfo.l_op_Inequality(d.colorInfo, null)) {
            if (d.colorInfo._p) {
                var e = a._b._palette$i._l(d.colorInfo, 2);
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
    };
    TXORecord.prototype.i = function (a) {
        var b = a._b7.a(WorksheetShape.$);
        if (b == null) {
            return;
        }
        var c = typeCast(WorksheetCellComment.$, b);
        var d = typeCast(WorksheetShapeWithText.$, b);
        var e = b._cc;
        if (d != null && d.text != null) {
            e &= 65409;
            var f = void 0;
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
            var g = ExcelUtils.e1(e, f, 4, 6);
            e = g.p0;
            var h = 2;
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
            var i = ExcelUtils.e1(e, h, 1, 3);
            e = i.p0;
        }
        a._ci._write17(e);
        a._ci._write17(b._ce);
        a._ci._write2(new Array(6));
        if (c != null) {
            var j = typeCast(FormattedStringElement.$, c.text._m);
            if (j == null) {
                j = c.text._e();
            }
            var k = new List$1(FormattingRunBase.$, 1, j._ah);
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
            var l = new List$1(FormattingRunBase.$, 0);
            for (var m = 0; m < d.text._paragraphs$i.count; m++) {
                var n = d.text._paragraphs$i.item(m);
                l.o(n._getFormattingRuns(a._b));
            }
            if (l.count == 0) {
                var o = void 0;
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
    };
    TXORecord.p = function (a, b, c) {
        var e_78, _0;
        a._ci._write17(b.length);
        var d = c.count;
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
        try {
            for (var _1 = tslib_1.__values(fromEnum(c)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var e = _2.value;
                var f = e.f(a._b);
                var g = f._r.getValueOrDefault();
                a._ci._write17(e.i);
                a._ci._write17(g);
                a._ci._write2(new Array(4));
            }
        }
        catch (e_78_1) { e_78 = { error: e_78_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_78) throw e_78.error; }
        }
        a._ci._write17(b.length);
        a._ci._write17(0);
        a._ci._write2(new Array(4));
    };
    TXORecord.prototype.get_d = function () {
        return 438;
    };
    Object.defineProperty(TXORecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    TXORecord.$t = markType(TXORecord, 'TXORecord', Biff8RecordBase.$);
    return TXORecord;
}(Biff8RecordBase));
export { TXORecord };
/**
 * @hidden
 */
var USERBVIEWRecord = /** @class */ (function (_super) {
    tslib_1.__extends(USERBVIEWRecord, _super);
    function USERBVIEWRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    USERBVIEWRecord.prototype.h = function (a) {
        var b = a._av._readUInt32();
        var c = a._av._readInt32();
        var d = new Guid(1, a._av._readBytes(16));
        var e = a._av._readInt32();
        var f = a._av._readInt32();
        var g = a._av._readInt32();
        var h = a._av._readInt32();
        var i = a._av._readUInt16();
        var j = a._av._readUInt16();
        var k = (j & 1) == 1;
        var l = (j & 2) == 2;
        var m = (j & 16) == 16;
        var n = (j & 32) == 32;
        var o = (j & 64) == 64;
        var p = (j & 128) == 128;
        var q = ((j & 768) >> 8);
        var r = (j & 1024) == 1024;
        var s = (j & 2048) == 2048;
        var t = 0;
        t |= m ? 1 : 0;
        t |= n ? 2 : 0;
        a._av._readUInt16();
        a._av._readUInt16();
        a._av._readUInt16();
        var u = a._av._readFormattedString(1)._y;
        var v = a._b._customViews$i._add(u, r, s);
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
    };
    USERBVIEWRecord.prototype.i = function (a) {
        var b = a._b7.a(CustomView.$);
        if (b == null) {
            return;
        }
        a._ci._write18(intSToU(2190));
        var c = b.windowOptions.selectedSheet;
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
        var d = 4;
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
        var e = 100;
        a._ci._write17(e);
        a._ci._write17(Convert.toUInt16(false));
        a._ci._write17(65535);
        a._ci._write15(b.name, 1);
    };
    USERBVIEWRecord.prototype.get_d = function () {
        return 425;
    };
    Object.defineProperty(USERBVIEWRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    USERBVIEWRecord.$t = markType(USERBVIEWRecord, 'USERBVIEWRecord', Biff8RecordBase.$);
    return USERBVIEWRecord;
}(Biff8RecordBase));
export { USERBVIEWRecord };
/**
 * @hidden
 */
var USERSVIEWBEGINRecord = /** @class */ (function (_super) {
    tslib_1.__extends(USERSVIEWBEGINRecord, _super);
    function USERSVIEWBEGINRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    USERSVIEWBEGINRecord.prototype.h = function (a) {
        var b = new Guid(1, a._av._readBytes(16));
        var c = a._b._customViews$i._item(b);
        if (c == null) {
            return;
        }
        var d = a._av._readInt32();
        var e = a._ai.a(Worksheet.$);
        var f = a._av._readInt32();
        var g = a._av._readInt32();
        var h = a._av._readUInt32();
        var i = a._av._readUInt32();
        var j = (i & 2) == 2;
        var k = (i & 4) == 4;
        var l = (i & 8) == 8;
        var m = (i & 16) == 16;
        var n = (i & 32) == 32;
        var o = (i & 64) == 64;
        var p = (i & 128) == 128;
        var q = (i & 256) == 256;
        var r = (i & 512) == 512;
        var s = (i & 1024) == 1024;
        var t = (i & 32768) == 32768;
        var u = (i & 65536) == 65536;
        var v = (i & 131072) == 131072;
        var w = (i & 262144) == 262144;
        var x = ((i & 12582912) >>> 22);
        var y = (i & 67108864) == 67108864;
        var z = (i & 134217728) == 134217728;
        var aa = (i & 536870912) == 536870912;
        var ab = a._av._readUInt16();
        a._av._readUInt16();
        var ac = a._av._readUInt16();
        a._av._readUInt16();
        var ad = a._av._readDouble();
        var ae = a._av._readDouble();
        var af = a._av._readUInt16();
        var ag = a._av._readUInt16();
        var ah = c.getDisplayOptions(e, true);
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
                    for (var ai = ab; ae > 0; ai++) {
                        var aj = e._gh(ai);
                        var ak = Math.min(1, ae);
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
                    for (var al = ac; ad > 0; al++) {
                        var am = e._gd(al);
                        var an = Math.min(1, ad);
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
            var ao = c.getPrintOptions(e, true);
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
    };
    USERSVIEWBEGINRecord.prototype.i = function (a) {
        var b = a._b7.a(CustomView.$);
        var c = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        if (c == null) {
            return;
        }
        var d = 100;
        var e = 64;
        var f = 3;
        var g = false;
        var h = false;
        var i = true;
        var j = true;
        var k = true;
        var l = true;
        var m = false;
        var n = false;
        var o = false;
        var p = false;
        var q = false;
        var r = false;
        var s = false;
        var t = false;
        var u = false;
        var v = false;
        var w = false;
        var x = false;
        var y = false;
        var z = false;
        var aa = 0;
        var ab = false;
        var ac = false;
        var ad = false;
        var ae = false;
        var af = true;
        var ag = false;
        var ah = 0;
        var ai = 0;
        var aj = 0;
        var ak = 0;
        var al = 65535;
        var am = 65535;
        var an = b.getDisplayOptions(c, false);
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
                    var ao = an.unfrozenPaneSettings.topPaneHeight;
                    ak = 0;
                    for (var ap = ah;; ap++) {
                        var aq = c._gh(ap);
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
                    var ar = an.unfrozenPaneSettings.leftPaneWidth;
                    aj = 0;
                    for (var as = ai;; as++) {
                        var at = c._gd(as);
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
        var au = b.getPrintOptions(c, false);
        if (au != null) {
            m = au.centerHorizontally;
            n = au.centerVertically;
            p = au.printGridlines;
            o = au.printRowAndColumnHeaders;
            q = au.scalingType == 1;
        }
        var av = b.getHiddenColumns(c, false);
        if (av != null && av.count > 0) {
            z = true;
        }
        var aw = b.getHiddenRows(c, false);
        if (aw != null && aw.count > 0) {
            y = true;
        }
        var ax = 0;
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
    };
    USERSVIEWBEGINRecord.prototype.get_d = function () {
        return 426;
    };
    Object.defineProperty(USERSVIEWBEGINRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    USERSVIEWBEGINRecord.$t = markType(USERSVIEWBEGINRecord, 'USERSVIEWBEGINRecord', Biff8RecordBase.$);
    return USERSVIEWBEGINRecord;
}(Biff8RecordBase));
export { USERSVIEWBEGINRecord };
/**
 * @hidden
 */
var USERSVIEWENDRecord = /** @class */ (function (_super) {
    tslib_1.__extends(USERSVIEWENDRecord, _super);
    function USERSVIEWENDRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    USERSVIEWENDRecord.prototype.h = function (a) {
        var b = a._ai.a(CustomView.$);
        if (b == null) {
            return;
        }
        var c = Convert.toBoolean1(a._av._readUInt16());
        if (c == false) {
        }
        a._ai.h();
        a._ai.h();
        if (b.savePrintOptions) {
            a._ai.h();
        }
    };
    USERSVIEWENDRecord.prototype.i = function (a) {
        a._ci._write17(Convert.toUInt16(true));
    };
    USERSVIEWENDRecord.prototype.get_d = function () {
        return 427;
    };
    Object.defineProperty(USERSVIEWENDRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    USERSVIEWENDRecord.$t = markType(USERSVIEWENDRecord, 'USERSVIEWENDRecord', Biff8RecordBase.$);
    return USERSVIEWENDRecord;
}(Biff8RecordBase));
export { USERSVIEWENDRecord };
/**
 * @hidden
 */
var USESELFSRecord = /** @class */ (function (_super) {
    tslib_1.__extends(USESELFSRecord, _super);
    function USESELFSRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    USESELFSRecord.prototype.h = function (a) {
        a._av._readUInt16();
    };
    USESELFSRecord.prototype.i = function (a) {
        a._ci._write17(0);
    };
    USESELFSRecord.prototype.get_d = function () {
        return 352;
    };
    Object.defineProperty(USESELFSRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    USESELFSRecord.$t = markType(USESELFSRecord, 'USESELFSRecord', Biff8RecordBase.$);
    return USESELFSRecord;
}(Biff8RecordBase));
export { USESELFSRecord };
/**
 * @hidden
 */
var VBAOBJECTNAMERecord = /** @class */ (function (_super) {
    tslib_1.__extends(VBAOBJECTNAMERecord, _super);
    function VBAOBJECTNAMERecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VBAOBJECTNAMERecord.prototype.h = function (a) {
        var b = a._av._readFormattedString(1)._y;
        var c = a._ai.a(Worksheet.$);
        if (c != null) {
            c._ak = b;
        }
        else {
            a._b._g0 = b;
        }
    };
    VBAOBJECTNAMERecord.prototype.i = function (a) {
        var b = null;
        var c = a._b7.a(Worksheet.$);
        if (c != null) {
            b = c._ak;
        }
        else {
            b = a._b._g0;
        }
        a._ci._write15(b, 1);
    };
    VBAOBJECTNAMERecord.prototype.get_d = function () {
        return 442;
    };
    Object.defineProperty(VBAOBJECTNAMERecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    VBAOBJECTNAMERecord.$t = markType(VBAOBJECTNAMERecord, 'VBAOBJECTNAMERecord', Biff8RecordBase.$);
    return VBAOBJECTNAMERecord;
}(Biff8RecordBase));
export { VBAOBJECTNAMERecord };
/**
 * @hidden
 */
var VCENTERRecord = /** @class */ (function (_super) {
    tslib_1.__extends(VCENTERRecord, _super);
    function VCENTERRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VCENTERRecord.prototype.h = function (a) {
        var b = a._ai.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        b.centerVertically = Convert.toBoolean1(a._av._readUInt16());
    };
    VCENTERRecord.prototype.i = function (a) {
        var b = a._b7.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        a._ci._write17(Convert.toUInt16(b.centerVertically));
    };
    VCENTERRecord.prototype.get_d = function () {
        return 132;
    };
    Object.defineProperty(VCENTERRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    VCENTERRecord.$t = markType(VCENTERRecord, 'VCENTERRecord', Biff8RecordBase.$);
    return VCENTERRecord;
}(Biff8RecordBase));
export { VCENTERRecord };
/**
 * @hidden
 */
var VERTICALPAGEBREAKSRecord = /** @class */ (function (_super) {
    tslib_1.__extends(VERTICALPAGEBREAKSRecord, _super);
    function VERTICALPAGEBREAKSRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VERTICALPAGEBREAKSRecord.prototype.h = function (a) {
        if (a._av.length == 0) {
            return;
        }
        var b = a._ai.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        var c = a._av._readUInt16();
        for (var d = 0; d < c; d++) {
            var e = a._av._readUInt16();
            var f = a._av._readUInt16();
            var g = a._av._readUInt16();
            var h = Nullable$1.toNullable(Number_$type, f);
            if (f == 0) {
                h = Nullable$1.toNullable(Number_$type, null);
            }
            var i = Nullable$1.toNullable(Number_$type, g);
            if (g == a._b.maxRowCount - 1) {
                i = Nullable$1.toNullable(Number_$type, null);
            }
            b._verticalPageBreaks$i._add$i(new VerticalPageBreak(e, b._printAreas$i._e(e, Nullable$1.toNullable(Number_$type, f), Nullable$1.toNullable(Number_$type, g), true)));
        }
    };
    VERTICALPAGEBREAKSRecord.prototype.i = function (a) {
        var b = a._b7.a(PrintOptions.$);
        if (b == null) {
            return;
        }
        a._ci._write17(b._verticalPageBreaks$i.count);
        for (var c = 0; c < b._verticalPageBreaks$i.count; c++) {
            var d = b._verticalPageBreaks$i._item(c);
            a._ci._write17(d._k);
            a._ci._write17(d._m);
            var e = Math.min(d._l, a._b.maxRowCount - 1);
            a._ci._write17(e);
        }
    };
    VERTICALPAGEBREAKSRecord.prototype.get_d = function () {
        return 26;
    };
    Object.defineProperty(VERTICALPAGEBREAKSRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    VERTICALPAGEBREAKSRecord.$t = markType(VERTICALPAGEBREAKSRecord, 'VERTICALPAGEBREAKSRecord', Biff8RecordBase.$);
    return VERTICALPAGEBREAKSRecord;
}(Biff8RecordBase));
export { VERTICALPAGEBREAKSRecord };
/**
 * @hidden
 */
var WINDOW1Record = /** @class */ (function (_super) {
    tslib_1.__extends(WINDOW1Record, _super);
    function WINDOW1Record() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WINDOW1Record.prototype.h = function (a) {
        var b = a._av._readInt16();
        var c = a._av._readInt16();
        var d = a._av._readUInt16();
        var e = a._av._readUInt16();
        a._b.windowOptions._boundsInTwips$i = ExcelUtils.g9(b, c, d, e);
        var f = a._av._readUInt16();
        a._b.windowOptions.minimized = (f & 2) == 2;
        var g = (f & 8) == 8;
        var h = (f & 16) == 16;
        a._b.windowOptions.tabBarVisible = (f & 32) == 32;
        var i = 0;
        i |= g ? 1 : 0;
        i |= h ? 2 : 0;
        a._b.windowOptions.scrollBars = i;
        a._b.windowOptions._as = a._av._readUInt16();
        a._b.windowOptions.firstVisibleTabIndex = a._av._readUInt16();
        a._av._readUInt16();
        a._b.windowOptions.tabBarWidth = a._av._readUInt16();
    };
    WINDOW1Record.prototype.i = function (a) {
        var b = a._b.windowOptions;
        a._ci._write11(ExcelUtils.cs(truncate(b._boundsInTwips$i.left)));
        a._ci._write11(ExcelUtils.cs(truncate(b._boundsInTwips$i.top)));
        a._ci._write17(ExcelUtils.et(truncate(b._boundsInTwips$i.width)));
        a._ci._write17(ExcelUtils.et(truncate(b._boundsInTwips$i.height)));
        var c = 0;
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
        var d = a._az.indexOf(b.selectedSheet);
        var e = Math.min(b.firstVisibleTabIndex, a._az.count - 1);
        a._ci._write17(d);
        a._ci._write17(e);
        a._ci._write17(1);
        a._ci._write17(b.tabBarWidth);
    };
    WINDOW1Record.prototype.get_d = function () {
        return 61;
    };
    Object.defineProperty(WINDOW1Record.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    WINDOW1Record.$t = markType(WINDOW1Record, 'WINDOW1Record', Biff8RecordBase.$);
    return WINDOW1Record;
}(Biff8RecordBase));
export { WINDOW1Record };
/**
 * @hidden
 */
var WINDOW2Record = /** @class */ (function (_super) {
    tslib_1.__extends(WINDOW2Record, _super);
    function WINDOW2Record() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WINDOW2Record.prototype.h = function (a) {
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = a._av._readUInt16();
        b.displayOptions.showFormulasInCells = (c & 1) == 1;
        b.displayOptions.showGridlines = (c & 2) == 2;
        b.displayOptions.showRowAndColumnHeaders = (c & 4) == 4;
        b.displayOptions.panesAreFrozen = (c & 8) == 8;
        b.displayOptions.showZeroValues = (c & 16) == 16;
        b.displayOptions._a2 = (c & 32) == 32;
        b.displayOptions.orderColumnsRightToLeft = (c & 64) == 64;
        b.displayOptions.showOutlineSymbols = (c & 128) == 128;
        var d = (c & 256) == 256;
        b._w = (c & 512) == 512;
        var e = (c & 1024) == 1024;
        var f = (c & 2048) == 2048;
        if (f) {
            b.displayOptions.view = 2;
        }
        var g = a._av._readUInt16();
        var h = a._av._readUInt16();
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
            var i = a._av.readByte();
            var j = a._av.readByte();
            var k = a._av.readByte();
            a._av.readByte();
            var l = ExcelUtils.gw(i, j, k);
            if (!b.displayOptions._a2) {
                b.displayOptions._gridlineColor$i = l;
            }
            return;
        }
        b.displayOptions._a8 = a._av._readUInt16();
        a._av._readUInt16();
        var m = a._av._readUInt16();
        if (m == 0) {
            m = 60;
        }
        var n = ExcelUtils.fj(m);
        m = n.p0;
        b.displayOptions.magnificationInPageBreakView = m;
        var o = a._av._readUInt16();
        if (o == 0) {
            o = 100;
        }
        var p = ExcelUtils.fj(o);
        o = p.p0;
        b.displayOptions.magnificationInNormalView = o;
        a._av._readUInt32();
    };
    WINDOW2Record.prototype.i = function (a) {
        var b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = 0;
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
        var d = b.displayOptions.magnificationInPageBreakView;
        if (d == 60 && b.displayOptions.view != 2) {
            d = 0;
        }
        a._ci._write17(d);
        var e = b.displayOptions.magnificationInNormalView;
        if (e == 100 && b.displayOptions.view != 0) {
            e = 0;
        }
        a._ci._write17(e);
        a._ci._write18(intSToU(0));
    };
    WINDOW2Record.prototype.get_d = function () {
        return 574;
    };
    Object.defineProperty(WINDOW2Record.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    WINDOW2Record.$t = markType(WINDOW2Record, 'WINDOW2Record', Biff8RecordBase.$);
    return WINDOW2Record;
}(Biff8RecordBase));
export { WINDOW2Record };
/**
 * @hidden
 */
var WINDOWPROTECTRecord = /** @class */ (function (_super) {
    tslib_1.__extends(WINDOWPROTECTRecord, _super);
    function WINDOWPROTECTRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WINDOWPROTECTRecord.prototype.h = function (a) {
        var b = a._av._readUInt16() == 1;
        a._b.protection.allowEditWindows = b == false;
        a._b.protection._b.j(b || a._b.isProtected);
    };
    WINDOWPROTECTRecord.prototype.i = function (a) {
        var b = a._b.isProtected && a._b.protection.allowEditWindows == false ? 1 : 0;
        a._ci._write17(b);
    };
    WINDOWPROTECTRecord.prototype.get_d = function () {
        return 25;
    };
    Object.defineProperty(WINDOWPROTECTRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    WINDOWPROTECTRecord.$t = markType(WINDOWPROTECTRecord, 'WINDOWPROTECTRecord', Biff8RecordBase.$);
    return WINDOWPROTECTRecord;
}(Biff8RecordBase));
export { WINDOWPROTECTRecord };
/**
 * @hidden
 */
var WRITEACCESSRecord = /** @class */ (function (_super) {
    tslib_1.__extends(WRITEACCESSRecord, _super);
    function WRITEACCESSRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WRITEACCESSRecord.prototype.h = function (a) {
        try {
            a._av._readFormattedString(1);
        }
        catch (b) {
        }
    };
    WRITEACCESSRecord.prototype.i = function (a) {
    };
    WRITEACCESSRecord.prototype.get_d = function () {
        return 92;
    };
    Object.defineProperty(WRITEACCESSRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    WRITEACCESSRecord.$t = markType(WRITEACCESSRecord, 'WRITEACCESSRecord', Biff8RecordBase.$);
    return WRITEACCESSRecord;
}(Biff8RecordBase));
export { WRITEACCESSRecord };
/**
 * @hidden
 */
var WRITEPROTRecord = /** @class */ (function (_super) {
    tslib_1.__extends(WRITEPROTRecord, _super);
    function WRITEPROTRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WRITEPROTRecord.prototype.h = function (a) {
        a._bc = true;
    };
    WRITEPROTRecord.prototype.i = function (a) {
    };
    WRITEPROTRecord.prototype.get_d = function () {
        return 134;
    };
    Object.defineProperty(WRITEPROTRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    WRITEPROTRecord.$t = markType(WRITEPROTRecord, 'WRITEPROTRecord', Biff8RecordBase.$);
    return WRITEPROTRecord;
}(Biff8RecordBase));
export { WRITEPROTRecord };
/**
 * @hidden
 */
var WSBOOLRecord = /** @class */ (function (_super) {
    tslib_1.__extends(WSBOOLRecord, _super);
    function WSBOOLRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WSBOOLRecord.prototype.h = function (a) {
        var b = a._ai.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = a._av._readUInt16();
        b._em = (c & 64) == 64;
        b.displayOptions._showExpansionIndicatorBelowGroupedRows$i = Nullable$1.toNullable(Boolean_$type, b._em ? true : false);
        b.displayOptions._showExpansionIndicatorToRightOfGroupedColumns$i = Nullable$1.toNullable(Boolean_$type, (c & 128) == 128 ? true : false);
        var d = (c & 256) == 256;
        if (d) {
            b.printOptions.scalingType = 1;
        }
        else {
            b.printOptions.scalingType = 0;
        }
    };
    WSBOOLRecord.prototype.i = function (a) {
        var b = a._b7.a(Worksheet.$);
        if (b == null) {
            return;
        }
        var c = 1025;
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
    };
    WSBOOLRecord.prototype.get_d = function () {
        return 129;
    };
    Object.defineProperty(WSBOOLRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    WSBOOLRecord.$t = markType(WSBOOLRecord, 'WSBOOLRecord', Biff8RecordBase.$);
    return WSBOOLRecord;
}(Biff8RecordBase));
export { WSBOOLRecord };
/**
 * @hidden
 */
var XCTRecord = /** @class */ (function (_super) {
    tslib_1.__extends(XCTRecord, _super);
    function XCTRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XCTRecord.prototype.h = function (a) {
        a._av._readUInt16();
        var b = a._av._readUInt16();
        a._co(b);
    };
    XCTRecord.prototype.i = function (a) {
    };
    XCTRecord.prototype.get_d = function () {
        return 89;
    };
    Object.defineProperty(XCTRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    XCTRecord.$t = markType(XCTRecord, 'XCTRecord', Biff8RecordBase.$);
    return XCTRecord;
}(Biff8RecordBase));
export { XCTRecord };
/**
 * @hidden
 */
var XFCRCRecord = /** @class */ (function (_super) {
    tslib_1.__extends(XFCRCRecord, _super);
    function XFCRCRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XFCRCRecord.prototype.h = function (a) {
        a._av._readFrtHeader();
        var b = a._av._readUInt16();
        var c = a._av._readUInt16();
        var d = a._av._readUInt32();
        if (a._ah == null) {
            return;
        }
        if (d != ExcelUtils.eu(0, a._ah)) {
            a._bb = true;
        }
    };
    XFCRCRecord.prototype.i = function (a) {
        if (a._b6 == null) {
            return;
        }
        var b = ExcelUtils.eu(0, a._b6);
        a._ci._writeFrtHeader();
        a._ci._write17(0);
        a._ci._write17(a._cw.count);
        a._ci._write18(b);
    };
    XFCRCRecord.prototype.get_d = function () {
        return 2172;
    };
    Object.defineProperty(XFCRCRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    XFCRCRecord.$t = markType(XFCRCRecord, 'XFCRCRecord', Biff8RecordBase.$);
    return XFCRCRecord;
}(Biff8RecordBase));
export { XFCRCRecord };
/**
 * @hidden
 */
var XFEXTRecord = /** @class */ (function (_super) {
    tslib_1.__extends(XFEXTRecord, _super);
    function XFEXTRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XFEXTRecord.prototype.h = function (a) {
        var b = new XFEXTRecordInfo();
        a._av._readFrtHeader();
        b.c = a._av._readUInt16();
        b.b = a._av._readUInt16();
        b.d = a._av._readUInt16();
        var c = a._av._readUInt16();
        b.a = new Array(c);
        for (var d = 0; d < c; d++) {
            b.a[d] = a._av._readExtProp();
        }
        a._b0.add(b);
    };
    XFEXTRecord.o = function (a, b) {
        if (a._bb) {
            return;
        }
        if (a._b2.count <= b.b) {
            return;
        }
        var c = a._b2._inner[b.b];
        var d = c.formatOptions;
        for (var e = 0; e < b.a.length; e++) {
            b.a[e].b(a, c);
        }
        c._dt(d);
    };
    XFEXTRecord.prototype.i = function (a) {
        var b = a._b7.a(XFRecord_XFContext.$);
        if (b == null) {
            return;
        }
        var c = b.a;
        var d = b.b;
        a._ci._writeFrtHeader();
        a._ci._write17(0);
        a._ci._write17(b.c);
        a._ci._write17(0);
        a._ci._write17(d.count);
        for (var e = 0; e < d.count; e++) {
            a._ci._writeExtProp(d._inner[e]);
        }
    };
    XFEXTRecord.prototype.get_d = function () {
        return 2173;
    };
    Object.defineProperty(XFEXTRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    XFEXTRecord.$t = markType(XFEXTRecord, 'XFEXTRecord', Biff8RecordBase.$);
    return XFEXTRecord;
}(Biff8RecordBase));
export { XFEXTRecord };
/**
 * @hidden
 */
var XFEXTRecordInfo = /** @class */ (function (_super) {
    tslib_1.__extends(XFEXTRecordInfo, _super);
    function XFEXTRecordInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.c = 0;
        _this.b = 0;
        _this.d = 0;
        _this.a = null;
        return _this;
    }
    XFEXTRecordInfo.$t = markType(XFEXTRecordInfo, 'XFEXTRecordInfo');
    return XFEXTRecordInfo;
}(Base));
export { XFEXTRecordInfo };
/**
 * @hidden
 */
var XFRecord = /** @class */ (function (_super) {
    tslib_1.__extends(XFRecord, _super);
    function XFRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XFRecord.prototype.h = function (a) {
        var b = new XFRecordInfo();
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
    };
    XFRecord.o = function (a, b) {
        var c = ExcelUtils.bt(b.e, 0);
        var d = ExcelUtils.bt(b.e, 1);
        var e = ExcelUtils.bt(b.e, 2);
        var f = ExcelUtils.bt(b.e, 3);
        var g = ExcelUtils.c6(b.e, 4, 15);
        var h = ExcelUtils.c4(b.a, 0, 2);
        var i = ExcelUtils.bt(b.a, 3);
        var j = ExcelUtils.c4(b.a, 4, 6);
        var k = ExcelUtils.bt(b.a, 7);
        var l = ExcelUtils.c6(b.f, 0, 3);
        var m = ExcelUtils.bt(b.f, 4);
        var n = ExcelUtils.bt(b.f, 5);
        var o = ExcelUtils.c6(b.f, 6, 7);
        var p = ExcelUtils.bt(b.f, 10);
        var q = ExcelUtils.bt(b.f, 11);
        var r = ExcelUtils.bt(b.f, 12);
        var s = ExcelUtils.bt(b.f, 13);
        var t = ExcelUtils.bt(b.f, 14);
        var u = ExcelUtils.bt(b.f, 15);
        var v = ExcelUtils.c6(b.g, 0, 3);
        var w = ExcelUtils.c6(b.g, 4, 7);
        var x = ExcelUtils.c6(b.g, 8, 11);
        var y = ExcelUtils.c6(b.g, 12, 15);
        var z = ExcelUtils.c6(b.h, 0, 6);
        var aa = ExcelUtils.c6(b.h, 7, 13);
        var ab = ExcelUtils.c6(b.h, 14, 15);
        var ac = ExcelUtils.c7(b.j, 0, 6);
        var ad = ExcelUtils.c7(b.j, 7, 13);
        var ae = ExcelUtils.c7(b.j, 14, 20);
        var af = ExcelUtils.c7(b.j, 21, 24);
        var ag = ExcelUtils.bu(b.j, 25);
        var ah = ExcelUtils.c7(b.j, 26, 31);
        var ai = ExcelUtils.c6(b.i, 0, 6);
        var aj = ExcelUtils.c6(b.i, 7, 13);
        var ak = ExcelUtils.bt(b.i, 14);
        var al = a._b._cd(e ? 1 : 0);
        var am = null;
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
            var an_1;
            if (((function () { var ao = a._bj.tryGetValue(g, an_1); an_1 = ao.p1; return ao.ret; })()) == false) {
                an_1 = new List$1(WorksheetCellFormatData.$, 0);
                a._bj.addItem(g, an_1);
            }
            an_1.add(al);
        }
        else {
        }
        if (0 <= b.d && b.d < a._h.count) {
            al.font.setFontFormatting(a._h._inner[b.d]);
        }
        else {
        }
        var ao = a._b;
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
        var ap = 0;
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
        var aq = a._b2.count;
        a._b2.add(al);
    };
    XFRecord.prototype.i = function (a) {
        var b = a._b7.a(XFRecord_XFContext.$);
        if (b == null) {
            return;
        }
        var c = b.a;
        var d = a._b;
        var e = c._bp._r.getValueOrDefault();
        a._ci._write17(e);
        var f = c._cs;
        if (f < 0) {
            f = 0;
        }
        else {
            f = a._c0(f);
        }
        a._ci._write17(f);
        var g;
        if (c._b1 != 1) {
            g = a._a7(c.style);
            if (g < 0) {
                g = 0;
            }
        }
        else {
            g = 4095;
        }
        var h = 0;
        var i = ExcelUtils.f8(h, c._c5, 0);
        h = i.p0;
        var j = ExcelUtils.f7(h, c._b1 == 1, 2);
        h = j.p0;
        var k = ExcelUtils.e1(h, g, 4, 15);
        h = k.p0;
        a._ci._write17(h);
        var l = 0;
        var m = ExcelUtils.e0(l, c._a4, 0, 2);
        l = m.p0;
        var n = ExcelUtils.f6(l, c._c7, 3);
        l = n.p0;
        var o = ExcelUtils.e0(l, c._a9, 4, 6);
        l = o.p0;
        var p = ExcelUtils.f5(l, c._b6, 7);
        l = p.p0;
        a._ci._write9(l);
        var q = c._cw % 256;
        if (q < 0) {
            q += 256;
        }
        a._ci._write9(q);
        var r = (c._b1 != 1);
        var s = ExcelUtils.bx(c.formatOptions, 1) == r;
        var t = ExcelUtils.bx(c.formatOptions, 4) == r;
        var u = ExcelUtils.bx(c.formatOptions, 2) == r;
        var v = ExcelUtils.bx(c.formatOptions, 8) == r;
        var w = ExcelUtils.bx(c.formatOptions, 16) == r;
        var x = ExcelUtils.bx(c.formatOptions, 32) == r;
        h = 0;
        var y = ExcelUtils.e1(h, Math.min(15, c._ct), 0, 3);
        h = y.p0;
        var z = ExcelUtils.f8(h, c._c6, 4);
        h = z.p0;
        var aa = ExcelUtils.f7(h, s, 10);
        h = aa.p0;
        var ab = ExcelUtils.f7(h, t, 11);
        h = ab.p0;
        var ac = ExcelUtils.f7(h, u, 12);
        h = ac.p0;
        var ad = ExcelUtils.f7(h, v, 13);
        h = ad.p0;
        var ae = ExcelUtils.f7(h, w, 14);
        h = ae.p0;
        var af = ExcelUtils.f7(h, x, 15);
        h = af.p0;
        a._ci._write17(h);
        var ag;
        var ah;
        var ai;
        var aj;
        var ak;
        var al;
        var am;
        var an;
        var ao;
        var ap;
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
        var aq = ExcelUtils.e1(h, ag, 0, 3);
        h = aq.p0;
        var ar = ExcelUtils.e1(h, ah, 4, 7);
        h = ar.p0;
        var as = ExcelUtils.e1(h, ai, 8, 11);
        h = as.p0;
        var at = ExcelUtils.e1(h, aj, 12, 15);
        h = at.p0;
        a._ci._write17(h);
        var au = c._aw >> 1;
        h = 0;
        var av = ExcelUtils.e1(h, al, 0, 6);
        h = av.p0;
        var aw = ExcelUtils.e1(h, am, 7, 13);
        h = aw.p0;
        var ax = ExcelUtils.e1(h, au, 14, 15);
        h = ax.p0;
        a._ci._write17(h);
        var ay = c._ar;
        var az = c._ay(ay);
        var a0 = b.b.count != 0;
        var a1 = 0;
        var a2 = ExcelUtils.e2(a1, an, 0, 6);
        a1 = a2.p0;
        var a3 = ExcelUtils.e2(a1, ao, 7, 13);
        a1 = a3.p0;
        var a4 = ExcelUtils.e2(a1, ap, 14, 20);
        a1 = a4.p0;
        var a5 = ExcelUtils.e2(a1, ak, 21, 24);
        a1 = a5.p0;
        var a6 = ExcelUtils.f9(a1, a0, 25);
        a1 = a6.p0;
        var a7 = ExcelUtils.e2(a1, az, 26, 31);
        a1 = a7.p0;
        a._ci._write18(a1);
        var a8 = c._bi(ay, false, true)._y(d, 1);
        var a9 = c._bi(ay, true, true)._y(d, 1);
        h = 0;
        var ba = ExcelUtils.e1(h, a8, 0, 6);
        h = ba.p0;
        var bb = ExcelUtils.e1(h, a9, 7, 13);
        h = bb.p0;
        a._ci._write17(h);
    };
    XFRecord.prototype.get_d = function () {
        return 224;
    };
    Object.defineProperty(XFRecord.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    XFRecord.$t = markType(XFRecord, 'XFRecord', Biff8RecordBase.$);
    return XFRecord;
}(Biff8RecordBase));
export { XFRecord };
/**
 * @hidden
 */
var XFRecord_XFContext = /** @class */ (function (_super) {
    tslib_1.__extends(XFRecord_XFContext, _super);
    function XFRecord_XFContext(a, b, c) {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.c = 0;
        _this.b = null;
        _this.a = a;
        _this.c = b;
        _this.b = c;
        return _this;
    }
    XFRecord_XFContext.$t = markType(XFRecord_XFContext, 'XFRecord_XFContext');
    return XFRecord_XFContext;
}(Base));
export { XFRecord_XFContext };
/**
 * @hidden
 */
var XFRecordInfo = /** @class */ (function (_super) {
    tslib_1.__extends(XFRecordInfo, _super);
    function XFRecordInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.d = 0;
        _this.c = 0;
        _this.b = 0;
        _this.e = 0;
        _this.a = 0;
        _this.f = 0;
        _this.g = 0;
        _this.h = 0;
        _this.j = 0;
        _this.i = 0;
        return _this;
    }
    XFRecordInfo.$t = markType(XFRecordInfo, 'XFRecordInfo');
    return XFRecordInfo;
}(Base));
export { XFRecordInfo };
callStaticConstructors();
//# sourceMappingURL=excel.biff8.js.map
