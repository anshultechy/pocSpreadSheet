/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { markEnum, Base, markType, callStaticConstructors, fromEn, Number_$type, fromEnum, Date_$type, String_$type, typeCast, Boolean_$type, Nullable$1, runOn, getEnumerator } from "../../igniteui-angular-core/ES5/type";
import { isNaN_, isPositiveInfinity, isNegativeInfinity, truncate, isInfinity, log10, logBase, intDivide } from "../../igniteui-angular-core/ES5/number";
import { UltraCalcFunctionFactory, BuiltInFunctionBase, ExcelCalcValue, ExcelCalcNumberStack, CalcFunctionUtilities, ExcelCalcErrorValue, ExcelCalcFunction, MathUtilities, FinancialUtils, Workbook, ArrayProxy, CalcManagerUtilities, ExcelUtils, DivideByZeroException, ValueFormatter, CellCalcReference, WorksheetRegion, RefBase, CalculationContext, ErrorValue, CellAddress, TempCellCalcReference, MatrixUtilities, HyperlinkResult, ExcelCalcEngine, ExcelReferenceError, CalcUtilities, RegionGroupCalcReference, NamedCalcReferenceUnconnected, CalcArgumentHelper, CalcDateUtilities, WorksheetCell, GetFormulaStringInfo, FormattedString, ArrayInteriorFormula } from "./excel.core";
import { StringBuilder } from "../../igniteui-angular-core/ES5/StringBuilder";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { round10N, ieeeRemainder, tryParseInt64_2, numberToString2, tryParseInt32_1 } from "../../igniteui-angular-core/ES5/numberExtended";
import { Random } from "../../igniteui-angular-core/ES5/Random";
import { stringToLocaleLower, stringToLocaleUpper, stringEmpty, stringEndsWith, stringStartsWith, stringIsNullOrEmpty, stringToCharArray, stringCompare, stringReplace, stringContains, stringIsNullOrWhiteSpace, stringCreateFromChar } from "../../igniteui-angular-core/ES5/string";
import { trim, stringFormat, stringCompare1, startsWith1, stringFormat1, stringEquals1, isLetter } from "../../igniteui-angular-core/ES5/stringExtended";
import { timeSpanDays, timeSpanTicks, timeSpanInit1, timeSpanInit2, timeSpanTotalDays, timeSpanTotalHours, timeSpanTotalMinutes, timeSpanTotalSeconds } from "../../igniteui-angular-core/ES5/timespan";
import { daysInMonth, dateFromValues, dateGetMonth, dateNow, dateGetTimeOfDay, dateFromTicks, dateToday, dateGetDate, dateAddDays } from "../../igniteui-angular-core/ES5/date";
import { Convert } from "../../igniteui-angular-core/ES5/Convert";
import { dateTryParse } from "../../igniteui-angular-core/ES5/dateExtended";
import { Dictionary$2 } from "../../igniteui-angular-core/ES5/Dictionary$2";
import { ArgumentException } from "../../igniteui-angular-core/ES5/ArgumentException";
import { ArgumentOutOfRangeException } from "../../igniteui-angular-core/ES5/ArgumentOutOfRangeException";
import { Stack$1 } from "../../igniteui-angular-core/ES5/Stack$1";
import { Tuple$2 } from "../../igniteui-angular-core/ES5/Tuple$2";
import { Tuple } from "../../igniteui-angular-core/ES5/Tuple";
import { boxArray$1, arrayGetLength } from "../../igniteui-angular-core/ES5/array";
import { Regex } from "../../igniteui-angular-core/ES5/Regex";
import { StringUtilities } from "./documents.core";
import { ReadOnlyCollection$1 } from "../../igniteui-angular-core/ES5/ReadOnlyCollection$1";
import { boolCompare, tryParseBool } from "../../igniteui-angular-core/ES5/bool";
import { nullableIsNull, nullableEquals } from "../../igniteui-angular-core/ES5/nullable";
/**
 * @hidden
 */
export var UltraCalcConditionalFunctionBase_CriteriaEvaluator_Operator_$type = markEnum('UltraCalcConditionalFunctionBase_CriteriaEvaluator_Operator', 'Equals,0|NotEquals,1|GreaterThan,2|GreaterThanOrEqual,3|LessThan,4|LessThanOrEqual,5');
/**
 * @hidden
 */
export var UltraCalcFunctionConvert_MeasurementUnitCategory_$type = markEnum('UltraCalcFunctionConvert_MeasurementUnitCategory', 'Unknown,0|WeightAndMass,1|Distance,2|Time,3|Pressure,4|Force,5|Energy,6|Power,7|Magnetism,8|Temperature,9|LiquidMeasure,10');
/**
 * @hidden
 */
var ErfUtils = /** @class */ (function (_super) {
    tslib_1.__extends(ErfUtils, _super);
    function ErfUtils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErfUtils.bb = function (a) {
        var b = new ArrayBuffer(8);
        ;
        var c = new Float64Array(b);
        var d = new Int32Array(b);
        c[0] = a;
        return (d[1]);
    };
    ErfUtils.a8 = function (a) {
        var b = new ArrayBuffer(8);
        ;
        var c = new Float64Array(b);
        var d = new Int32Array(b);
        c[0] = a;
        d[0] = 0;
        return (c[0]);
    };
    ErfUtils.c = function (a) {
        if (isNaN_(a)) {
            return NaN;
        }
        if (isPositiveInfinity(a)) {
            return 1;
        }
        if (isNegativeInfinity(a)) {
            return -1;
        }
        var b, c;
        var d, e, f, g, h, i, j, k;
        b = ErfUtils.bb(a);
        c = b & 2147483647;
        if (c < 1072365568) {
            if (c < 1043333120) {
                if (c < 8388608) {
                    return (8 * a + 1.0270333367641007 * a) / 8;
                }
                return a + 0.12837916709551259 * a;
            }
            j = a * a;
            k = 0.12837916709551256 + j * (-0.3250421072470015 + j * (-0.02848174957559851 + j * (-0.0057702702964894416 + j * -2.3763016656650163E-05)));
            h = 1 + j * (0.39791722395915535 + j * (0.0650222499887673 + j * (0.0050813062818757656 + j * (0.00013249473800432165 + j * -3.9602282787753681E-06))));
            i = k / h;
            return a + a * i;
        }
        if (c < 1072955392) {
            h = Math.abs(a) - 1;
            f = -0.0023621185607526594 + h * (0.41485611868374833 + h * (-0.37220787603570132 + h * (0.31834661990116175 + h * (-0.11089469428239668 + h * (0.035478304325618236 + h * -0.0021663755948687908)))));
            g = 1 + h * (0.10642088040084423 + h * (0.540397917702171 + h * (0.071828654414196266 + h * (0.12617121980876164 + h * (0.013637083912029051 + h * 0.011984499846799107)))));
            if (b >= 0) {
                return 0.84506291151046753 + f / g;
            }
            else {
                return -0.84506291151046753 - f / g;
            }
        }
        if (c >= 1075314688) {
            if (b >= 0) {
                return 1 - 1E-300;
            }
            else {
                return 1E-300 - 1;
            }
        }
        a = Math.abs(a);
        h = 1 / (a * a);
        if (c < 1074191214) {
            d = -0.0098649440348471482 + h * (-0.69385857270718176 + h * (-10.558626225323291 + h * (-62.375332450326006 + h * (-162.39666946257347 + h * (-184.60509290671104 + h * (-81.2874355063066 + h * -9.8143293441691455))))));
            e = 1 + h * (19.651271667439257 + h * (137.65775414351904 + h * (434.56587747522923 + h * (645.38727173326788 + h * (429.00814002756783 + h * (108.63500554177944 + h * (6.5702497703192817 + h * -0.0604244152148581)))))));
        }
        else {
            d = -0.0098649429247001 + h * (-0.799283237680523 + h * (-17.757954917754752 + h * (-160.63638485582192 + h * (-637.56644336838963 + h * (-1025.0951316110773 + h * -483.5191916086514)))));
            e = 1 + h * (30.338060743482458 + h * (325.79251299657392 + h * (1536.729586084437 + h * (3199.8582195085955 + h * (2553.0504064331644 + h * (474.52854120695537 + h * -22.440952446585818))))));
        }
        j = ErfUtils.a8(a);
        k = Math.exp(-j * j - 0.5625) * Math.exp((j - a) * (j + a) + d / e);
        if (b >= 0) {
            return 1 - k / a;
        }
        else {
            return k / a - 1;
        }
    };
    ErfUtils.d = function (a) {
        if (isNaN_(a)) {
            return NaN;
        }
        if (isPositiveInfinity(a)) {
            return 0;
        }
        if (isNegativeInfinity(a)) {
            return 2;
        }
        var b, c;
        var d, e, f, g, h, i, j, k;
        b = ErfUtils.bb(a);
        c = b & 2147483647;
        if (c < 1072365568) {
            if (c < 1013972992) {
                return 1 - a;
            }
            j = a * a;
            k = 0.12837916709551256 + j * (-0.3250421072470015 + j * (-0.02848174957559851 + j * (-0.0057702702964894416 + j * -2.3763016656650163E-05)));
            h = 1 + j * (0.39791722395915535 + j * (0.0650222499887673 + j * (0.0050813062818757656 + j * (0.00013249473800432165 + j * -3.9602282787753681E-06))));
            i = k / h;
            if (b < 1070596096) {
                return 1 - (a + a * i);
            }
            else {
                k = a * i;
                k += (a - 0.5);
                return 0.5 - k;
            }
        }
        if (c < 1072955392) {
            h = Math.abs(a) - 1;
            f = -0.0023621185607526594 + h * (0.41485611868374833 + h * (-0.37220787603570132 + h * (0.31834661990116175 + h * (-0.11089469428239668 + h * (0.035478304325618236 + h * -0.0021663755948687908)))));
            g = 1 + h * (0.10642088040084423 + h * (0.540397917702171 + h * (0.071828654414196266 + h * (0.12617121980876164 + h * (0.013637083912029051 + h * 0.011984499846799107)))));
            if (b >= 0) {
                j = 1 - 0.84506291151046753;
                return j - f / g;
            }
            else {
                j = 0.84506291151046753 + f / g;
                return 1 + j;
            }
        }
        if (c < 1077673984) {
            a = Math.abs(a);
            h = 1 / (a * a);
            if (c < 1074191213) {
                d = -0.0098649440348471482 + h * (-0.69385857270718176 + h * (-10.558626225323291 + h * (-62.375332450326006 + h * (-162.39666946257347 + h * (-184.60509290671104 + h * (-81.2874355063066 + h * -9.8143293441691455))))));
                e = 1 + h * (19.651271667439257 + h * (137.65775414351904 + h * (434.56587747522923 + h * (645.38727173326788 + h * (429.00814002756783 + h * (108.63500554177944 + h * (6.5702497703192817 + h * -0.0604244152148581)))))));
            }
            else {
                if (b < 0 && c >= 1075314688) {
                    return 2 - 1E-300;
                }
                d = -0.0098649429247001 + h * (-0.799283237680523 + h * (-17.757954917754752 + h * (-160.63638485582192 + h * (-637.56644336838963 + h * (-1025.0951316110773 + h * -483.5191916086514)))));
                e = 1 + h * (30.338060743482458 + h * (325.79251299657392 + h * (1536.729586084437 + h * (3199.8582195085955 + h * (2553.0504064331644 + h * (474.52854120695537 + h * -22.440952446585818))))));
            }
            j = ErfUtils.a8(a);
            k = Math.exp(-j * j - 0.5625) * Math.exp((j - a) * (j + a) + d / e);
            if (b > 0) {
                return k / a;
            }
            else {
                return 2 - k / a;
            }
        }
        else {
            if (b > 0) {
                return 1E-300 * 1E-300;
            }
            else {
                return 2 - 1E-300;
            }
        }
    };
    ErfUtils.$t = markType(ErfUtils, 'ErfUtils');
    return ErfUtils;
}(Base));
export { ErfUtils };
/**
 * @hidden
 */
var UltraCalcFunctionLoader = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionLoader, _super);
    function UltraCalcFunctionLoader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionLoader.staticInit = function () {
        UltraCalcFunctionLoader.b();
    };
    UltraCalcFunctionLoader.b = function () {
        UltraCalcFunctionFactory._f = function (a) {
            a._g(new UltraCalcFunctionSum());
            a._g(new UltraCalcFunctionAverage());
            a._g(new UltraCalcFunctionIf());
            a._g(new UltraCalcFunctionAbs());
            a._g(new UltraCalcFunctionMod());
            a._g(new UltraCalcFunctionQuotient());
            a._g(new UltraCalcFunctionProduct());
            a._g(new UltraCalcFunctionPower());
            a._g(new UltraCalcFunctionInt());
            a._g(new UltraCalcFunctionCount());
            a._g(new UltraCalcFunctionTrue());
            a._g(new UltraCalcFunctionFalse());
            a._g(new UltraCalcFunctionAnd());
            a._g(new UltraCalcFunctionOr());
            a._g(new UltraCalcFunctionNot());
            a._g(new UltraCalcFunctionMax());
            a._g(new UltraCalcFunctionMin());
            a._g(new UltraCalcFunctionMedian());
            a._g(new UltraCalcFunctionVar());
            a._g(new UltraCalcFunctionStdev());
            a._g(new UltraCalcFunctionRound());
            a._g(new UltraCalcFunctionExp());
            a._g(new UltraCalcFunctionPi());
            a._g(new UltraCalcFunctionSqrt());
            a._g(new UltraCalcFunctionCos());
            a._g(new UltraCalcFunctionCosh());
            a._g(new UltraCalcFunctionACos());
            a._g(new UltraCalcFunctionSin());
            a._g(new UltraCalcFunctionSinh());
            a._g(new UltraCalcFunctionASin());
            a._g(new UltraCalcFunctionTan());
            a._g(new UltraCalcFunctionTanh());
            a._g(new UltraCalcFunctionATan());
            a._g(new UltraCalcFunctionATan2());
            a._g(new UltraCalcFunctionFloor());
            a._g(new UltraCalcFunctionCeiling());
            a._g(new UltraCalcFunctionRand());
            a._g(new UltraCalcFunctionLn());
            a._g(new UltraCalcFunctionLog());
            a._g(new UltraCalcFunctionLog10());
            a._g(new UltraCalcFunctionNPV());
            a._g(new UltraCalcFunctionFV());
            a._g(new UltraCalcFunctionPV());
            a._g(new UltraCalcFunctionPmt());
            a._g(new UltraCalcFunctionNPer());
            a._g(new UltraCalcFunctionTrunc());
            a._g(new UltraCalcFunctionEven());
            a._g(new UltraCalcFunctionOdd());
            a._g(new UltraCalcFunctionPPmt());
            a._g(new UltraCalcFunctionIPmt());
            a._g(new UltraCalcFunctionConcatenate());
            a._g(new UltraCalcFunctionLower());
            a._g(new UltraCalcFunctionUpper());
            a._g(new UltraCalcFunctionLeft());
            a._g(new UltraCalcFunctionRight());
            a._g(new UltraCalcFunctionMid());
            a._g(new UltraCalcFunctionLen());
            a._g(new UltraCalcFunctionTrim());
            a._g(new UltraCalcFunctionValue());
            a._g(new UltraCalcFunctionFind());
            a._g(new UltraCalcFunctionReplace());
            a._g(new UltraCalcFunctionSYD());
            a._g(new UltraCalcFunctionSLN());
            a._g(new UltraCalcFunctionDB());
            a._g(new UltraCalcFunctionDDB());
            a._g(new UltraCalcFunctionIntRate());
            a._g(new UltraCalcFunctionDate());
            a._g(new UltraCalcFunctionDateValue());
            a._g(new UltraCalcFunctionDays360());
            a._g(new UltraCalcFunctionDay());
            a._g(new UltraCalcFunctionMonth());
            a._g(new UltraCalcFunctionYear());
            a._g(new UltraCalcFunctionHour());
            a._g(new UltraCalcFunctionMinute());
            a._g(new UltraCalcFunctionSecond());
            a._g(new UltraCalcFunctionTime());
            a._g(new UltraCalcFunctionNow());
            a._g(new UltraCalcFunctionTimeValue());
            a._g(new UltraCalcFunctionNa());
            a._g(new UltraCalcFunctionType());
            a._g(new UltraCalcFunctionErrorType());
            a._g(new UltraCalcFunctionIsBlank());
            a._g(new UltraCalcFunctionIsErr());
            a._g(new UltraCalcFunctionIsError());
            a._g(new UltraCalcFunctionIsLogical());
            a._g(new UltraCalcFunctionIsNa());
            a._g(new UltraCalcFunctionIsNonText());
            a._g(new UltraCalcFunctionIsNumber());
            a._g(new UltraCalcFunctionIsRef());
            a._g(new UltraCalcFunctionIsText());
            a._g(new UltraCalcFunctionIsOdd());
            a._g(new UltraCalcFunctionIsEven());
            a._g(new UltraCalcFunctionIRR());
            a._g(new UltraCalcFunctionRate());
            a._g(new UltraCalcFunctionNull());
            a._g(new UltraCalcFunctionIsNull());
            a._g(new UltraCalcFunctionDBNull());
            a._g(new UltraCalcFunctionIsDBNull());
            a._g(new UltraCalcFunctionDateAdd());
            a._g(new UltraCalcFunctionDateDiff());
            a._g(new UltraCalcFunctionChar());
            a._g(new UltraCalcFunctionCode());
            a._g(new UltraCalcFunctionFixed());
            a._g(new UltraCalcFunctionToday());
            a._g(new UltraCalcFunctionASinh());
            a._g(new UltraCalcFunctionATanh());
            a._g(new UltraCalcFunctionACosh());
            a._g(new UltraCalcFunctionEDate());
            a._g(new UltraCalcFunctionEOMonth());
            a._g(new UltraCalcFunctionWeekDay());
            a._g(new UltraCalcFunctionNetWorkDays());
            a._g(new UltraCalcFunctionWeekNum());
            a._g(new UltraCalcFunctionWorkDay());
            a._g(new UltraCalcFunctionDec2Bin());
            a._g(new UltraCalcFunctionDec2Hex());
            a._g(new UltraCalcFunctionDec2Oct());
            a._g(new UltraCalcFunctionBin2Dec());
            a._g(new UltraCalcFunctionHex2Dec());
            a._g(new UltraCalcFunctionOct2Dec());
            a._g(new UltraCalcFunctionBin2Oct());
            a._g(new UltraCalcFunctionBin2Hex());
            a._g(new UltraCalcFunctionOct2Bin());
            a._g(new UltraCalcFunctionOct2Hex());
            a._g(new UltraCalcFunctionHex2Bin());
            a._g(new UltraCalcFunctionHex2Oct());
            a._g(new UltraCalcFunctionConvert());
            a._g(new UltraCalcFunctionDelta());
            a._g(new UltraCalcFunctionGeStep());
            a._g(new UltraCalcFunctionComplex());
            a._g(new UltraCalcFunctionImAbs());
            a._g(new UltraCalcFunctionImaginary());
            a._g(new UltraCalcFunctionImReal());
            a._g(new UltraCalcFunctionImArgument());
            a._g(new UltraCalcFunctionImConjugate());
            a._g(new UltraCalcFunctionImCos());
            a._g(new UltraCalcFunctionImDiv());
            a._g(new UltraCalcFunctionImProduct());
            a._g(new UltraCalcFunctionImSum());
            a._g(new UltraCalcFunctionImSub());
            a._g(new UltraCalcFunctionImExp());
            a._g(new UltraCalcFunctionImLn());
            a._g(new UltraCalcFunctionImLog10());
            a._g(new UltraCalcFunctionImLog2());
            a._g(new UltraCalcFunctionImSin());
            a._g(new UltraCalcFunctionImSqrt());
            a._g(new UltraCalcFunctionImPower());
            a._g(new UltraCalcFunctionDollarFr());
            a._g(new UltraCalcFunctionDollarDe());
            a._g(new UltraCalcFunctionInfo());
            a._g(new UltraCalcFunctionN());
            a._g(new UltraCalcFunctionFact());
            a._g(new UltraCalcFunctionFactDouble());
            a._g(new UltraCalcFunctionCombin());
            a._g(new UltraCalcFunctionDegrees());
            a._g(new UltraCalcFunctionRadians());
            a._g(new UltraCalcFunctionGcd());
            a._g(new UltraCalcFunctionLcm());
            a._g(new UltraCalcFunctionMultinomial());
            a._g(new UltraCalcFunctionMRound());
            a._g(new UltraCalcFunctionRandBetween());
            a._g(new UltraCalcFunctionRoman());
            a._g(new UltraCalcFunctionRoundDown());
            a._g(new UltraCalcFunctionRoundUp());
            a._g(new UltraCalcFunctionSeriesSum());
            a._g(new UltraCalcFunctionSign());
            a._g(new UltraCalcFunctionSqrtPi());
            a._g(new UltraCalcFunctionChoose());
            a._g(new UltraCalcFunctionRept());
            a._g(new UltraCalcFunctionSubtotal());
            a._g(new UltraCalcFunctionText());
            a._g(new UltraCalcFunctionIfError());
            a._g(new UltraCalcFunctionCountA());
            a._g(new UltraCalcFunctionSearch());
            a._g(new UltraCalcFunctionSearchB());
            a._g(new UltraCalcFunctionAveDev());
            a._g(new UltraCalcFunctionCombina());
            a._g(new UltraCalcFunctionBinomDist());
            a._g(new UltraCalcFunctionCritBinom());
            a._g(new UltraCalcFunctionBinom_Dist());
            a._g(new UltraCalcFunctionBinom_Dist_Range());
            a._g(new UltraCalcFunctionBinom_Inv());
            a._g(new UltraCalcFunctionAddress());
            a._g(new UltraCalcFunctionAreas());
            a._g(new UltraCalcFunctionAverageIf());
            a._g(new UltraCalcFunctionColumn());
            a._g(new UltraCalcFunctionColumns());
            a._g(new UltraCalcFunctionCorrel());
            a._g(new UltraCalcFunctionCountIf());
            a._g(new UltraCalcFunctionCovar());
            a._g(new UltraCalcFunctionForecast());
            a._g(new UltraCalcFunctionHLookup());
            a._g(new UltraCalcFunctionHyperlink());
            a._g(new UltraCalcFunctionIndex());
            a._g(new UltraCalcFunctionIndirect());
            a._g(new UltraCalcFunctionIntercept());
            a._g(new UltraCalcFunctionLookup());
            a._g(new UltraCalcFunctionMatch());
            a._g(new UltraCalcFunctionMdeterm());
            a._g(new UltraCalcFunctionMinverse());
            a._g(new UltraCalcFunctionMmult());
            a._g(new UltraCalcFunctionOffset());
            a._g(new UltraCalcFunctionPearson());
            a._g(new UltraCalcFunctionRow());
            a._g(new UltraCalcFunctionRows());
            a._g(new UltraCalcFunctionRsq());
            a._g(new UltraCalcFunctionSlope());
            a._g(new UltraCalcFunctionSteyx());
            a._g(new UltraCalcFunctionSumIf());
            a._g(new UltraCalcFunctionSumproduct());
            a._g(new UltraCalcFunctionSumx2my2());
            a._g(new UltraCalcFunctionSumx2py2());
            a._g(new UltraCalcFunctionSumxmy2());
            a._g(new UltraCalcFunctionTranspose());
            a._g(new UltraCalcFunctionVLookup());
            UltraCalcFunctionLoader.a(a);
        };
    };
    UltraCalcFunctionLoader.a = function (a) {
        a._g(new UltraCalcFunctionCeilingPrecise());
        a._g(new UltraCalcFunctionAverageA());
        a._g(new UltraCalcFunctionIsoCeiling());
        a._g(new UltraCalcFunctionEcmaCeiling());
        a._g(new UltraCalcFunctionCeilingMath());
        a._g(new UltraCalcFunctionFloorPrecise());
        a._g(new UltraCalcFunctionFloorMath());
        a._g(new UltraCalcFunctionNumberValue());
        a._g(new UltraCalcFunctionIfs());
        a._g(new UltraCalcFunctionSwitch());
        a._g(new UltraCalcFunctionConcatEx());
        a._g(new UltraCalcFunctionTextJoin());
        a._g(new UltraCalcFunctionCountBlank());
        a._g(new UltraCalcFunctionDecimal());
        a._g(new UltraCalcFunctionUSDollar());
        a._g(new UltraCalcFunctionDollar());
        a._g(new UltraCalcFunctionExact());
        a._g(new UltraCalcFunctionProper());
        a._g(new UltraCalcFunctionSubstitute());
        a._g(new UltraCalcFunctionMode());
        a._g(new UltraCalcFunctionModeMult());
        a._g(new UltraCalcFunctionModeSngl());
        a._g(new UltraCalcFunctionRank());
        a._g(new UltraCalcFunctionRankEqual());
        a._g(new UltraCalcFunctionRankAverage());
        a._g(new UltraCalcFunctionPercentRank());
        a._g(new UltraCalcFunctionPercentRankInclusive());
        a._g(new UltraCalcFunctionPercentRankExclusive());
        a._g(new UltraCalcFunctionDevSq());
        a._g(new UltraCalcFunctionSumSq());
        a._g(new UltraCalcFunctionVar_S());
        a._g(new UltraCalcFunctionVarA());
        a._g(new UltraCalcFunctionVarP());
        a._g(new UltraCalcFunctionVar_P());
        a._g(new UltraCalcFunctionVarPA());
        a._g(new UltraCalcFunctionStDev_S());
        a._g(new UltraCalcFunctionStDevA());
        a._g(new UltraCalcFunctionStDevP());
        a._g(new UltraCalcFunctionStDev_P());
        a._g(new UltraCalcFunctionStDevPA());
        a._g(new UltraCalcFunctionPercentile());
        a._g(new UltraCalcFunctionPercentileInclusive());
        a._g(new UltraCalcFunctionPercentileExclusive());
        a._g(new UltraCalcFunctionQuartile());
        a._g(new UltraCalcFunctionQuartileInclusive());
        a._g(new UltraCalcFunctionQuartileExclusive());
        a._g(new UltraCalcFunctionSmall());
        a._g(new UltraCalcFunctionLarge());
        a._g(new UltraCalcFunctionSec());
        a._g(new UltraCalcFunctionSecH());
        a._g(new UltraCalcFunctionCsc());
        a._g(new UltraCalcFunctionCscH());
        a._g(new UltraCalcFunctionCot());
        a._g(new UltraCalcFunctionCotH());
        a._g(new UltraCalcFunctionAcot());
        a._g(new UltraCalcFunctionAcotH());
        a._g(new UltraCalcFunctionBitAnd());
        a._g(new UltraCalcFunctionBitOr());
        a._g(new UltraCalcFunctionBitXor());
        a._g(new UltraCalcFunctionBitLShift());
        a._g(new UltraCalcFunctionBitRShift());
        a._g(new UltraCalcFunctionFisher());
        a._g(new UltraCalcFunctionFisherInv());
        a._g(new UltraCalcFunctionIfNa());
        a._g(new UltraCalcFunctionArabic());
        a._g(new UltraCalcFunctionXor());
        a._g(new UltraCalcFunctionSkew());
        a._g(new UltraCalcFunctionSkew_P());
        a._g(new UltraCalcFunctionClean());
        a._g(new UltraCalcFunctionBase());
        a._g(new UltraCalcFunctionStandardize());
        a._g(new UltraCalcFunctionEffect());
        a._g(new UltraCalcFunctionNominal());
        a._g(new UltraCalcFunctionRRI());
        a._g(new UltraCalcFunctionPDuration());
        a._g(new UltraCalcFunctionDays());
        a._g(new UltraCalcFunctionYearFrac());
        a._g(new UltraCalcFunctionProbFunction());
        a._g(new UltraCalcFunctionPermutationA());
        a._g(new UltraCalcFunctionPermut());
        a._g(new UltraCalcFunctionPoisson());
        a._g(new UltraCalcFunctionPoissonDist());
        a._g(new UltraCalcFunctionErf());
        a._g(new UltraCalcFunctionErfPrecise());
        a._g(new UltraCalcFunctionErfc());
        a._g(new UltraCalcFunctionErfcPrecise());
        a._g(new UltraCalcFunctionExponDist());
        a._g(new UltraCalcFunctionExpon_Dist());
        a._g(new UltraCalcFunctionWeibull());
        a._g(new UltraCalcFunctionWeibullDist());
        a._g(new UltraCalcFunctionTrimMean());
        a._g(new UltraCalcFunctionIsFormula());
        a._g(new UltraCalcFunctionFormulaText());
        a._g(new UltraCalcFunctionAverageIfs());
        a._g(new UltraCalcFunctionCountIfs());
        a._g(new UltraCalcFunctionMaxIfs());
        a._g(new UltraCalcFunctionMinIfs());
        a._g(new UltraCalcFunctionSumIfs());
        a._g(new UltraCalcFunctionCovarianceP());
        a._g(new UltraCalcFunctionCovarianceS());
        a._g(new UltraCalcFunctionSheet());
        a._g(new UltraCalcFunctionSheets());
        a._g(new UltraCalcFunctionCell());
    };
    UltraCalcFunctionLoader.$t = markType(UltraCalcFunctionLoader, 'UltraCalcFunctionLoader');
    return UltraCalcFunctionLoader;
}(Base));
export { UltraCalcFunctionLoader };
/**
 * @hidden
 */
var UltraCalcFunctionConcatenate = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionConcatenate, _super);
    function UltraCalcFunctionConcatenate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionConcatenate.prototype.evaluate = function (a, b) {
        var e_1, _e;
        var c = new StringBuilder(0);
        var d = new List$1(ExcelCalcValue.$, 0);
        for (var e = 0; e < b; e++) {
            d.add(a.pop());
        }
        for (var f = d.count; f > 0; f--) {
            var g = d._inner[f - 1];
            if (!true && g.isReference && g.toReference().isEnumerable) {
                var h = g.toReference().references;
                try {
                    for (var _h = tslib_1.__values(fromEn(h)), _j = _h.next(); !_j.done; _j = _h.next()) {
                        var i = _j.value;
                        if (i.value.isError) {
                            return new ExcelCalcValue(i.value.toErrorValue());
                        }
                        c.l(i.value.toString());
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_j && !_j.done && (_e = _h.return)) _e.call(_h);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            else {
                if (g.isError) {
                    return new ExcelCalcValue(g.toErrorValue());
                }
                c.l(g.toString());
            }
        }
        return new ExcelCalcValue(c.toString());
    };
    UltraCalcFunctionConcatenate.prototype.canParameterBeEnumerable = function (a) {
        return true;
    };
    UltraCalcFunctionConcatenate.prototype.get_name = function () {
        return "concatenate";
    };
    Object.defineProperty(UltraCalcFunctionConcatenate.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionConcatenate.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionConcatenate.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionConcatenate.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionConcatenate.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionConcatenate.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionConcatenate.$t = markType(UltraCalcFunctionConcatenate, 'UltraCalcFunctionConcatenate', BuiltInFunctionBase.$);
    return UltraCalcFunctionConcatenate;
}(BuiltInFunctionBase));
export { UltraCalcFunctionConcatenate };
/**
 * @hidden
 */
var UltraCalcFunctionAverage = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionAverage, _super);
    function UltraCalcFunctionAverage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionAverage.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.d(a, b, 1229, UltraCalcFunctionAverage._ak);
    };
    UltraCalcFunctionAverage.prototype.canParameterBeEnumerable = function (a) {
        return true;
    };
    UltraCalcFunctionAverage._ak = function (a) {
        return a.count == 0 ? new ExcelCalcValue(new ExcelCalcErrorValue(2)) : new ExcelCalcValue(CalcFunctionUtilities.q(a));
    };
    UltraCalcFunctionAverage.prototype.get_name = function () {
        return "average";
    };
    Object.defineProperty(UltraCalcFunctionAverage.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAverage.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionAverage.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAverage.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionAverage.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAverage.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionAverage.$t = markType(UltraCalcFunctionAverage, 'UltraCalcFunctionAverage', BuiltInFunctionBase.$);
    return UltraCalcFunctionAverage;
}(BuiltInFunctionBase));
export { UltraCalcFunctionAverage };
/**
 * @hidden
 */
var UltraCalcFunctionSum = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSum, _super);
    function UltraCalcFunctionSum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSum.prototype.evaluate = function (a, b) {
        var c = 0;
        return CalcFunctionUtilities.f(a, b, CalcFunctionUtilities.b(a, false, false, false), function (d) { return c += d; }) || new ExcelCalcValue(c);
    };
    UltraCalcFunctionSum.prototype.canParameterBeEnumerable = function (a) {
        return true;
    };
    UltraCalcFunctionSum.prototype.get_name = function () {
        return "sum";
    };
    Object.defineProperty(UltraCalcFunctionSum.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSum.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionSum.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSum.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionSum.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSum.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionSum.$t = markType(UltraCalcFunctionSum, 'UltraCalcFunctionSum', BuiltInFunctionBase.$);
    return UltraCalcFunctionSum;
}(BuiltInFunctionBase));
export { UltraCalcFunctionSum };
/**
 * @hidden
 */
var UltraCalcFunctionIf = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionIf, _super);
    function UltraCalcFunctionIf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionIf.prototype.evaluate = function (a, b) {
        var c = null;
        if (b == 3) {
            c = a.pop();
        }
        var d = a.pop();
        var e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        if (e._toBoolean1() == true) {
            return d;
        }
        else {
            if (c == null) {
                return new ExcelCalcValue(false);
            }
            return c;
        }
    };
    UltraCalcFunctionIf.prototype.get_name = function () {
        return "if";
    };
    Object.defineProperty(UltraCalcFunctionIf.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIf.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionIf.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIf.prototype.get_maxArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionIf.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIf.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionIf.prototype.get__s = function () {
        return true;
    };
    UltraCalcFunctionIf.prototype._v = function (a) {
        if (a == 1 || a == 2) {
            return false;
        }
        return true;
    };
    UltraCalcFunctionIf.$t = markType(UltraCalcFunctionIf, 'UltraCalcFunctionIf', BuiltInFunctionBase.$);
    return UltraCalcFunctionIf;
}(BuiltInFunctionBase));
export { UltraCalcFunctionIf };
/**
 * @hidden
 */
var UltraCalcFunctionAbs = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionAbs, _super);
    function UltraCalcFunctionAbs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionAbs.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d;
        if (!((function () { var e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        return new ExcelCalcValue(Math.abs(d));
    };
    UltraCalcFunctionAbs.prototype.get_name = function () {
        return "abs";
    };
    Object.defineProperty(UltraCalcFunctionAbs.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAbs.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionAbs.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAbs.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionAbs.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAbs.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionAbs.$t = markType(UltraCalcFunctionAbs, 'UltraCalcFunctionAbs', BuiltInFunctionBase.$);
    return UltraCalcFunctionAbs;
}(BuiltInFunctionBase));
export { UltraCalcFunctionAbs };
/**
 * @hidden
 */
var UltraCalcFunctionMod = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionMod, _super);
    function UltraCalcFunctionMod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionMod.prototype.evaluate = function (a, b) {
        var c = a.pop();
        var d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var e, f;
        if (!((function () { var g = c._toDouble1(e); e = g.p0; return g.ret; })()) || !((function () { var g = d._toDouble1(f); f = g.p0; return g.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (e == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(2));
        }
        else {
            var g = f % e;
            var h = Math.sign(g);
            if (h != 0 && h != Math.sign(e)) {
                g *= -1;
            }
            return new ExcelCalcValue(g);
        }
    };
    UltraCalcFunctionMod.prototype.get_name = function () {
        return "mod";
    };
    Object.defineProperty(UltraCalcFunctionMod.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMod.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionMod.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMod.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionMod.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMod.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionMod.$t = markType(UltraCalcFunctionMod, 'UltraCalcFunctionMod', BuiltInFunctionBase.$);
    return UltraCalcFunctionMod;
}(BuiltInFunctionBase));
export { UltraCalcFunctionMod };
/**
 * @hidden
 */
var UltraCalcFunctionQuotient = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionQuotient, _super);
    function UltraCalcFunctionQuotient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionQuotient.prototype.evaluate = function (a, b) {
        var c = a.pop();
        var d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var e, f;
        if (!((function () { var g = c._toDouble1(e); e = g.p0; return g.ret; })()) || !((function () { var g = d._toDouble1(f); f = g.p0; return g.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (e == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(2));
        }
        else {
            return new ExcelCalcValue((f - (f % e)) / e);
        }
    };
    UltraCalcFunctionQuotient.prototype.get_name = function () {
        return "quotient";
    };
    Object.defineProperty(UltraCalcFunctionQuotient.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionQuotient.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionQuotient.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionQuotient.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionQuotient.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionQuotient.$t = markType(UltraCalcFunctionQuotient, 'UltraCalcFunctionQuotient', BuiltInFunctionBase.$);
    return UltraCalcFunctionQuotient;
}(BuiltInFunctionBase));
export { UltraCalcFunctionQuotient };
/**
 * @hidden
 */
var UltraCalcFunctionProduct = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionProduct, _super);
    function UltraCalcFunctionProduct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionProduct.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.d(a, b, 1229, UltraCalcFunctionProduct._ak);
    };
    UltraCalcFunctionProduct.prototype.canParameterBeEnumerable = function (a) {
        return true;
    };
    UltraCalcFunctionProduct._ak = function (a) {
        return new ExcelCalcValue(CalcFunctionUtilities.v(a));
    };
    UltraCalcFunctionProduct.prototype.get_name = function () {
        return "product";
    };
    Object.defineProperty(UltraCalcFunctionProduct.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionProduct.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionProduct.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionProduct.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionProduct.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionProduct.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionProduct.$t = markType(UltraCalcFunctionProduct, 'UltraCalcFunctionProduct', BuiltInFunctionBase.$);
    return UltraCalcFunctionProduct;
}(BuiltInFunctionBase));
export { UltraCalcFunctionProduct };
/**
 * @hidden
 */
var UltraCalcFunctionPower = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionPower, _super);
    function UltraCalcFunctionPower() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionPower.prototype.evaluate = function (a, b) {
        var c = a.pop();
        var d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var e, f;
        if (!((function () { var g = c._toDouble1(f); f = g.p0; return g.ret; })()) || !((function () { var g = d._toDouble1(e); e = g.p0; return g.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        if (true && e == 0) {
            if (f == 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            else if (f < 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(2));
            }
        }
        return new ExcelCalcValue(Math.pow(e, f));
    };
    UltraCalcFunctionPower.prototype.get_name = function () {
        return "power";
    };
    Object.defineProperty(UltraCalcFunctionPower.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPower.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionPower.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPower.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionPower.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPower.$t = markType(UltraCalcFunctionPower, 'UltraCalcFunctionPower', BuiltInFunctionBase.$);
    return UltraCalcFunctionPower;
}(BuiltInFunctionBase));
export { UltraCalcFunctionPower };
/**
 * @hidden
 */
var UltraCalcFunctionInt = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionInt, _super);
    function UltraCalcFunctionInt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionInt.prototype.evaluate = function (a, b) {
        var c = a.pop()._toDecimal2();
        return new ExcelCalcValue(truncate(Math.floor(c)));
    };
    UltraCalcFunctionInt.prototype.get_name = function () {
        return "int";
    };
    Object.defineProperty(UltraCalcFunctionInt.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionInt.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionInt.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionInt.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionInt.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionInt.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionInt.$t = markType(UltraCalcFunctionInt, 'UltraCalcFunctionInt', BuiltInFunctionBase.$);
    return UltraCalcFunctionInt;
}(BuiltInFunctionBase));
export { UltraCalcFunctionInt };
/**
 * @hidden
 */
var UltraCalcFunctionTrunc = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionTrunc, _super);
    function UltraCalcFunctionTrunc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionTrunc.prototype.evaluate = function (a, b) {
        var c = 0;
        if (b == 2) {
            var d = a.pop();
            if (d.isError) {
                return new ExcelCalcValue(d.toErrorValue());
            }
            c = d._toInt321();
        }
        var e;
        var f = a.pop();
        if (f.isError) {
            return new ExcelCalcValue(f.toErrorValue());
        }
        if (!((function () { var g = f._toDouble1(e); e = g.p0; return g.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var g = Math.pow(10, c);
        var h = e * g;
        h = h >= 0 ? Math.floor(h) : Math.ceil(h);
        h /= g;
        return new ExcelCalcValue(h);
    };
    UltraCalcFunctionTrunc.prototype.get_name = function () {
        return "trunc";
    };
    Object.defineProperty(UltraCalcFunctionTrunc.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTrunc.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionTrunc.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTrunc.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionTrunc.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTrunc.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionTrunc.$t = markType(UltraCalcFunctionTrunc, 'UltraCalcFunctionTrunc', BuiltInFunctionBase.$);
    return UltraCalcFunctionTrunc;
}(BuiltInFunctionBase));
export { UltraCalcFunctionTrunc };
/**
 * @hidden
 */
var UltraCalcFunctionCount = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionCount, _super);
    function UltraCalcFunctionCount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionCount.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.k(a, b, 1485);
    };
    UltraCalcFunctionCount.prototype.canParameterBeEnumerable = function (a) {
        return true;
    };
    UltraCalcFunctionCount.prototype.get_name = function () {
        return "count";
    };
    Object.defineProperty(UltraCalcFunctionCount.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCount.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionCount.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCount.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionCount.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCount.$t = markType(UltraCalcFunctionCount, 'UltraCalcFunctionCount', BuiltInFunctionBase.$);
    return UltraCalcFunctionCount;
}(BuiltInFunctionBase));
export { UltraCalcFunctionCount };
/**
 * @hidden
 */
var UltraCalcFunctionTrue = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionTrue, _super);
    function UltraCalcFunctionTrue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionTrue.prototype.evaluate = function (a, b) {
        return new ExcelCalcValue(true);
    };
    UltraCalcFunctionTrue.prototype.get_name = function () {
        return "true";
    };
    Object.defineProperty(UltraCalcFunctionTrue.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTrue.prototype.get_minArgs = function () {
        return 0;
    };
    Object.defineProperty(UltraCalcFunctionTrue.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTrue.prototype.get_maxArgs = function () {
        return 0;
    };
    Object.defineProperty(UltraCalcFunctionTrue.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTrue.$t = markType(UltraCalcFunctionTrue, 'UltraCalcFunctionTrue', BuiltInFunctionBase.$);
    return UltraCalcFunctionTrue;
}(BuiltInFunctionBase));
export { UltraCalcFunctionTrue };
/**
 * @hidden
 */
var UltraCalcFunctionFalse = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionFalse, _super);
    function UltraCalcFunctionFalse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionFalse.prototype.evaluate = function (a, b) {
        return new ExcelCalcValue(false);
    };
    UltraCalcFunctionFalse.prototype.get_name = function () {
        return "false";
    };
    Object.defineProperty(UltraCalcFunctionFalse.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFalse.prototype.get_minArgs = function () {
        return 0;
    };
    Object.defineProperty(UltraCalcFunctionFalse.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFalse.prototype.get_maxArgs = function () {
        return 0;
    };
    Object.defineProperty(UltraCalcFunctionFalse.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFalse.$t = markType(UltraCalcFunctionFalse, 'UltraCalcFunctionFalse', BuiltInFunctionBase.$);
    return UltraCalcFunctionFalse;
}(BuiltInFunctionBase));
export { UltraCalcFunctionFalse };
/**
 * @hidden
 */
var UltraCalcFunctionNot = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionNot, _super);
    function UltraCalcFunctionNot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionNot.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        return new ExcelCalcValue(!c._toBoolean1());
    };
    UltraCalcFunctionNot.prototype.get_name = function () {
        return "not";
    };
    Object.defineProperty(UltraCalcFunctionNot.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionNot.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionNot.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionNot.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionNot.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionNot.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionNot.$t = markType(UltraCalcFunctionNot, 'UltraCalcFunctionNot', BuiltInFunctionBase.$);
    return UltraCalcFunctionNot;
}(BuiltInFunctionBase));
export { UltraCalcFunctionNot };
/**
 * @hidden
 */
var UltraCalcFunctionAnd = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionAnd, _super);
    function UltraCalcFunctionAnd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionAnd.prototype.evaluate = function (a, b) {
        var c = true;
        var d = false;
        var e = this._getArguments(a, b, true);
        for (var g = 0; g < e.length; g++) {
            var f = e[g];
            if (f.isError) {
                return new ExcelCalcValue(f.toErrorValue());
            }
            try {
                if (!f._toBoolean1()) {
                    c = false;
                }
                d = true;
            }
            catch (h) {
            }
        }
        if (d) {
            return new ExcelCalcValue(c);
        }
        return new ExcelCalcValue(new ExcelCalcErrorValue(1));
    };
    UltraCalcFunctionAnd.prototype.canParameterBeEnumerable = function (a) {
        return true;
    };
    UltraCalcFunctionAnd.prototype.get_name = function () {
        return "and";
    };
    Object.defineProperty(UltraCalcFunctionAnd.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAnd.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionAnd.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAnd.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionAnd.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAnd.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionAnd.$t = markType(UltraCalcFunctionAnd, 'UltraCalcFunctionAnd', BuiltInFunctionBase.$);
    return UltraCalcFunctionAnd;
}(BuiltInFunctionBase));
export { UltraCalcFunctionAnd };
/**
 * @hidden
 */
var UltraCalcFunctionOr = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionOr, _super);
    function UltraCalcFunctionOr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionOr.prototype.evaluate = function (a, b) {
        var c = false;
        var d = false;
        var e = this._getArguments(a, b, true);
        for (var g = 0; g < e.length; g++) {
            var f = e[g];
            if (f.isError) {
                return new ExcelCalcValue(f.toErrorValue());
            }
            try {
                if (f._toBoolean1()) {
                    c = true;
                }
                d = true;
            }
            catch (h) {
            }
        }
        if (d) {
            return new ExcelCalcValue(c);
        }
        return new ExcelCalcValue(new ExcelCalcErrorValue(1));
    };
    UltraCalcFunctionOr.prototype.canParameterBeEnumerable = function (a) {
        return true;
    };
    UltraCalcFunctionOr.prototype.get_name = function () {
        return "or";
    };
    Object.defineProperty(UltraCalcFunctionOr.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionOr.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionOr.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionOr.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionOr.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionOr.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionOr.$t = markType(UltraCalcFunctionOr, 'UltraCalcFunctionOr', BuiltInFunctionBase.$);
    return UltraCalcFunctionOr;
}(BuiltInFunctionBase));
export { UltraCalcFunctionOr };
/**
 * @hidden
 */
var UltraCalcFunctionMin = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionMin, _super);
    function UltraCalcFunctionMin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionMin.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.d(a, b, 1229, UltraCalcFunctionMin._ak);
    };
    UltraCalcFunctionMin.prototype.canParameterBeEnumerable = function (a) {
        return true;
    };
    UltraCalcFunctionMin._ak = function (a) {
        if (a.count == 0) {
            return new ExcelCalcValue(0);
        }
        var b = a._inner[0];
        for (var c = 1; c < a.count; c++) {
            if (a._inner[c] < b) {
                b = a._inner[c];
            }
        }
        return new ExcelCalcValue(b);
    };
    UltraCalcFunctionMin.prototype.get_name = function () {
        return "min";
    };
    Object.defineProperty(UltraCalcFunctionMin.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMin.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionMin.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMin.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionMin.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMin.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionMin.$t = markType(UltraCalcFunctionMin, 'UltraCalcFunctionMin', BuiltInFunctionBase.$);
    return UltraCalcFunctionMin;
}(BuiltInFunctionBase));
export { UltraCalcFunctionMin };
/**
 * @hidden
 */
var UltraCalcFunctionMax = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionMax, _super);
    function UltraCalcFunctionMax() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionMax.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.d(a, b, 1229, UltraCalcFunctionMax._ak);
    };
    UltraCalcFunctionMax.prototype.canParameterBeEnumerable = function (a) {
        return true;
    };
    UltraCalcFunctionMax._ak = function (a) {
        if (a.count == 0) {
            return new ExcelCalcValue(0);
        }
        var b = a._inner[0];
        for (var c = 1; c < a.count; c++) {
            if (a._inner[c] > b) {
                b = a._inner[c];
            }
        }
        return new ExcelCalcValue(b);
    };
    UltraCalcFunctionMax.prototype.get_name = function () {
        return "max";
    };
    Object.defineProperty(UltraCalcFunctionMax.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMax.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionMax.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMax.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionMax.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMax.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionMax.$t = markType(UltraCalcFunctionMax, 'UltraCalcFunctionMax', BuiltInFunctionBase.$);
    return UltraCalcFunctionMax;
}(BuiltInFunctionBase));
export { UltraCalcFunctionMax };
/**
 * @hidden
 */
var UltraCalcFunctionExp = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionExp, _super);
    function UltraCalcFunctionExp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionExp.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d;
        if (!((function () { var e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        var e = Math.exp(d);
        if (true && isInfinity(e)) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        return new ExcelCalcValue(e);
    };
    UltraCalcFunctionExp.prototype.get_name = function () {
        return "exp";
    };
    Object.defineProperty(UltraCalcFunctionExp.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionExp.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionExp.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionExp.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionExp.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionExp.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionExp.$t = markType(UltraCalcFunctionExp, 'UltraCalcFunctionExp', BuiltInFunctionBase.$);
    return UltraCalcFunctionExp;
}(BuiltInFunctionBase));
export { UltraCalcFunctionExp };
/**
 * @hidden
 */
var UltraCalcFunctionRound = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionRound, _super);
    function UltraCalcFunctionRound() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionRound.prototype.evaluate = function (a, b) {
        var c = null;
        if (b == 3) {
            c = a.pop();
        }
        var d = a.pop();
        var e = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        if (c != null && c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var f;
        if (!((function () { var g = d._toDouble1(f); f = g.p0; return g.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var g;
        if (!((function () { var h = e._toDouble1(g); g = h.p0; return h.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (true) {
            g = MathUtilities.i(g);
        }
        var h = 0;
        if (c != null) {
            if (!((function () { var i = c._toDouble1(h); h = i.p0; return i.ret; })())) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            if (truncate(h) < 0 || truncate(h) > 1) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
        }
        return new ExcelCalcValue(UltraCalcFunctionRound._al(g, truncate(f), truncate(h)));
    };
    UltraCalcFunctionRound.prototype.get_name = function () {
        return "round";
    };
    Object.defineProperty(UltraCalcFunctionRound.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRound.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionRound.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRound.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionRound.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRound._ak = function (a, b) {
        return UltraCalcFunctionRound._al(a, b, 0);
    };
    UltraCalcFunctionRound._al = function (a, b, c) {
        if (c == 0) {
            return MathUtilities.g(a, b);
        }
        if (b <= 15) {
            return round10N(a, b);
        }
        var d = Math.pow(10, b);
        var e = MathUtilities.i(a * d);
        return Math.round(e) / d;
    };
    UltraCalcFunctionRound.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionRound.$t = markType(UltraCalcFunctionRound, 'UltraCalcFunctionRound', BuiltInFunctionBase.$);
    return UltraCalcFunctionRound;
}(BuiltInFunctionBase));
export { UltraCalcFunctionRound };
/**
 * @hidden
 */
var UltraCalcFunctionPi = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionPi, _super);
    function UltraCalcFunctionPi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionPi.prototype.evaluate = function (a, b) {
        return new ExcelCalcValue(3.14159265358979);
    };
    UltraCalcFunctionPi.prototype.get_name = function () {
        return "pi";
    };
    Object.defineProperty(UltraCalcFunctionPi.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPi.prototype.get_minArgs = function () {
        return 0;
    };
    Object.defineProperty(UltraCalcFunctionPi.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPi.prototype.get_maxArgs = function () {
        return 0;
    };
    Object.defineProperty(UltraCalcFunctionPi.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPi.$t = markType(UltraCalcFunctionPi, 'UltraCalcFunctionPi', BuiltInFunctionBase.$);
    return UltraCalcFunctionPi;
}(BuiltInFunctionBase));
export { UltraCalcFunctionPi };
/**
 * @hidden
 */
var UltraCalcFunctionSqrt = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSqrt, _super);
    function UltraCalcFunctionSqrt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSqrt.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d;
        if (!((function () { var e = c._toDouble1(d); d = e.p0; return e.ret; })()) || d < 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(Math.sqrt(d));
    };
    UltraCalcFunctionSqrt.prototype.get_name = function () {
        return "sqrt";
    };
    Object.defineProperty(UltraCalcFunctionSqrt.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSqrt.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionSqrt.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSqrt.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionSqrt.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSqrt.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionSqrt.$t = markType(UltraCalcFunctionSqrt, 'UltraCalcFunctionSqrt', BuiltInFunctionBase.$);
    return UltraCalcFunctionSqrt;
}(BuiltInFunctionBase));
export { UltraCalcFunctionSqrt };
/**
 * @hidden
 */
var UltraCalcFunctionCos = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionCos, _super);
    function UltraCalcFunctionCos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionCos.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d;
        if (!((function () { var e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(Math.cos(d));
    };
    UltraCalcFunctionCos.prototype.get_name = function () {
        return "cos";
    };
    Object.defineProperty(UltraCalcFunctionCos.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCos.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionCos.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCos.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionCos.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCos.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionCos.$t = markType(UltraCalcFunctionCos, 'UltraCalcFunctionCos', BuiltInFunctionBase.$);
    return UltraCalcFunctionCos;
}(BuiltInFunctionBase));
export { UltraCalcFunctionCos };
/**
 * @hidden
 */
var UltraCalcFunctionACos = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionACos, _super);
    function UltraCalcFunctionACos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionACos.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d;
        if (!((function () { var e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(Math.acos(d));
    };
    UltraCalcFunctionACos.prototype.get_name = function () {
        return "acos";
    };
    Object.defineProperty(UltraCalcFunctionACos.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionACos.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionACos.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionACos.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionACos.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionACos.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionACos.$t = markType(UltraCalcFunctionACos, 'UltraCalcFunctionACos', BuiltInFunctionBase.$);
    return UltraCalcFunctionACos;
}(BuiltInFunctionBase));
export { UltraCalcFunctionACos };
/**
 * @hidden
 */
var UltraCalcFunctionCosh = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionCosh, _super);
    function UltraCalcFunctionCosh() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionCosh.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d;
        if (!((function () { var e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(Math.cosh(d));
    };
    UltraCalcFunctionCosh.prototype.get_name = function () {
        return "cosh";
    };
    Object.defineProperty(UltraCalcFunctionCosh.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCosh.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionCosh.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCosh.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionCosh.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCosh.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionCosh.$t = markType(UltraCalcFunctionCosh, 'UltraCalcFunctionCosh', BuiltInFunctionBase.$);
    return UltraCalcFunctionCosh;
}(BuiltInFunctionBase));
export { UltraCalcFunctionCosh };
/**
 * @hidden
 */
var UltraCalcFunctionSin = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSin, _super);
    function UltraCalcFunctionSin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSin.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d;
        if (!((function () { var e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(Math.sin(d));
    };
    UltraCalcFunctionSin.prototype.get_name = function () {
        return "sin";
    };
    Object.defineProperty(UltraCalcFunctionSin.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSin.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionSin.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSin.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionSin.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSin.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionSin.$t = markType(UltraCalcFunctionSin, 'UltraCalcFunctionSin', BuiltInFunctionBase.$);
    return UltraCalcFunctionSin;
}(BuiltInFunctionBase));
export { UltraCalcFunctionSin };
/**
 * @hidden
 */
var UltraCalcFunctionSinh = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSinh, _super);
    function UltraCalcFunctionSinh() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSinh.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d;
        if (!((function () { var e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(Math.sinh(d));
    };
    UltraCalcFunctionSinh.prototype.get_name = function () {
        return "sinh";
    };
    Object.defineProperty(UltraCalcFunctionSinh.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSinh.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionSinh.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSinh.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionSinh.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSinh.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionSinh.$t = markType(UltraCalcFunctionSinh, 'UltraCalcFunctionSinh', BuiltInFunctionBase.$);
    return UltraCalcFunctionSinh;
}(BuiltInFunctionBase));
export { UltraCalcFunctionSinh };
/**
 * @hidden
 */
var UltraCalcFunctionASin = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionASin, _super);
    function UltraCalcFunctionASin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionASin.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d;
        if (!((function () { var e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(Math.asin(d));
    };
    UltraCalcFunctionASin.prototype.get_name = function () {
        return "asin";
    };
    Object.defineProperty(UltraCalcFunctionASin.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionASin.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionASin.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionASin.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionASin.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionASin.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionASin.$t = markType(UltraCalcFunctionASin, 'UltraCalcFunctionASin', BuiltInFunctionBase.$);
    return UltraCalcFunctionASin;
}(BuiltInFunctionBase));
export { UltraCalcFunctionASin };
/**
 * @hidden
 */
var UltraCalcFunctionTan = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionTan, _super);
    function UltraCalcFunctionTan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionTan.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d;
        if (!((function () { var e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(Math.tan(d));
    };
    UltraCalcFunctionTan.prototype.get_name = function () {
        return "tan";
    };
    Object.defineProperty(UltraCalcFunctionTan.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTan.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionTan.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTan.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionTan.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTan.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionTan.$t = markType(UltraCalcFunctionTan, 'UltraCalcFunctionTan', BuiltInFunctionBase.$);
    return UltraCalcFunctionTan;
}(BuiltInFunctionBase));
export { UltraCalcFunctionTan };
/**
 * @hidden
 */
var UltraCalcFunctionTanh = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionTanh, _super);
    function UltraCalcFunctionTanh() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionTanh.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d;
        if (!((function () { var e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(Math.tanh(d));
    };
    UltraCalcFunctionTanh.prototype.get_name = function () {
        return "tanh";
    };
    Object.defineProperty(UltraCalcFunctionTanh.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTanh.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionTanh.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTanh.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionTanh.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTanh.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionTanh.$t = markType(UltraCalcFunctionTanh, 'UltraCalcFunctionTanh', BuiltInFunctionBase.$);
    return UltraCalcFunctionTanh;
}(BuiltInFunctionBase));
export { UltraCalcFunctionTanh };
/**
 * @hidden
 */
var UltraCalcFunctionATan = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionATan, _super);
    function UltraCalcFunctionATan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionATan.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d;
        if (!((function () { var e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(Math.atan(d));
    };
    UltraCalcFunctionATan.prototype.get_name = function () {
        return "atan";
    };
    Object.defineProperty(UltraCalcFunctionATan.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionATan.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionATan.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionATan.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionATan.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionATan.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionATan.$t = markType(UltraCalcFunctionATan, 'UltraCalcFunctionATan', BuiltInFunctionBase.$);
    return UltraCalcFunctionATan;
}(BuiltInFunctionBase));
export { UltraCalcFunctionATan };
/**
 * @hidden
 */
var UltraCalcFunctionATan2 = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionATan2, _super);
    function UltraCalcFunctionATan2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionATan2.prototype.evaluate = function (a, b) {
        var c = a.pop();
        var d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var e, f;
        if (!((function () { var g = c._toDouble1(f); f = g.p0; return g.ret; })()) || !((function () { var g = d._toDouble1(e); e = g.p0; return g.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (e == 0 && f == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(2));
        }
        return new ExcelCalcValue(Math.atan2(f, e));
    };
    UltraCalcFunctionATan2.prototype.get_name = function () {
        return "atan2";
    };
    Object.defineProperty(UltraCalcFunctionATan2.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionATan2.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionATan2.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionATan2.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionATan2.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionATan2.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionATan2.$t = markType(UltraCalcFunctionATan2, 'UltraCalcFunctionATan2', BuiltInFunctionBase.$);
    return UltraCalcFunctionATan2;
}(BuiltInFunctionBase));
export { UltraCalcFunctionATan2 };
/**
 * @hidden
 */
var UltraCalcFunctionFloor = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionFloor, _super);
    function UltraCalcFunctionFloor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionFloor.prototype.evaluate = function (a, b) {
        var c = 1;
        if (b > 1) {
            var d_1 = a.pop();
            if (d_1.isError) {
                return new ExcelCalcValue(d_1.toErrorValue());
            }
            if (!((function () { var e = d_1._toDouble1(c); c = e.p0; return e.ret; })())) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
        }
        var e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        var f;
        if (!((function () { var g = e._toDouble1(f); f = g.p0; return g.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (f == 0 && c == 0) {
            return new ExcelCalcValue(0);
        }
        if (c == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(2));
        }
        var g = f < 0 ? -1 : 1;
        var h = c < 0 ? -1 : 1;
        if (true) {
            if (f != 0 && c != 0 && 0 < g && h < 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
        }
        var i = Math.floor(MathUtilities.i(f / c)) * c;
        return new ExcelCalcValue(i);
    };
    UltraCalcFunctionFloor.prototype.get_name = function () {
        return "floor";
    };
    Object.defineProperty(UltraCalcFunctionFloor.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFloor.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionFloor.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFloor.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionFloor.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFloor.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionFloor.$t = markType(UltraCalcFunctionFloor, 'UltraCalcFunctionFloor', BuiltInFunctionBase.$);
    return UltraCalcFunctionFloor;
}(BuiltInFunctionBase));
export { UltraCalcFunctionFloor };
/**
 * @hidden
 */
var UltraCalcFunctionCeiling = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionCeiling, _super);
    function UltraCalcFunctionCeiling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionCeiling.prototype.evaluate = function (a, b) {
        var c = 1;
        if (b > 1) {
            var d_2 = a.pop();
            if (d_2.isError) {
                return new ExcelCalcValue(d_2.toErrorValue());
            }
            if (!((function () { var e = d_2._toDouble1(c); c = e.p0; return e.ret; })())) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
        }
        var e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        var f;
        if (!((function () { var g = e._toDouble1(f); f = g.p0; return g.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (c == 0) {
            return new ExcelCalcValue(0);
        }
        var g = f < 0 ? -1 : 1;
        var h = c < 0 ? -1 : 1;
        if (true) {
            if (f != 0 && c != 0 && 0 < g && h < 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
        }
        var i = Math.ceil(MathUtilities.i(f / c)) * c;
        return new ExcelCalcValue(i);
    };
    UltraCalcFunctionCeiling.prototype.get_name = function () {
        return "ceiling";
    };
    Object.defineProperty(UltraCalcFunctionCeiling.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCeiling.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionCeiling.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCeiling.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionCeiling.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCeiling.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionCeiling.$t = markType(UltraCalcFunctionCeiling, 'UltraCalcFunctionCeiling', BuiltInFunctionBase.$);
    return UltraCalcFunctionCeiling;
}(BuiltInFunctionBase));
export { UltraCalcFunctionCeiling };
/**
 * @hidden
 */
var UltraCalcFunctionRand = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionRand, _super);
    function UltraCalcFunctionRand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._ak = new Random(0);
        return _this;
    }
    UltraCalcFunctionRand.prototype.evaluate = function (a, b) {
        return new ExcelCalcValue(this._ak.nextDouble());
    };
    UltraCalcFunctionRand.prototype.get_name = function () {
        return "rand";
    };
    Object.defineProperty(UltraCalcFunctionRand.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRand.prototype.get_minArgs = function () {
        return 0;
    };
    Object.defineProperty(UltraCalcFunctionRand.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRand.prototype.get_maxArgs = function () {
        return 0;
    };
    Object.defineProperty(UltraCalcFunctionRand.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRand.$t = markType(UltraCalcFunctionRand, 'UltraCalcFunctionRand', BuiltInFunctionBase.$);
    return UltraCalcFunctionRand;
}(BuiltInFunctionBase));
export { UltraCalcFunctionRand };
/**
 * @hidden
 */
var UltraCalcFunctionLn = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionLn, _super);
    function UltraCalcFunctionLn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionLn.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d;
        if (!((function () { var e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        var e = Math.log(d);
        if (true && isInfinity(e)) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(e);
    };
    UltraCalcFunctionLn.prototype.get_name = function () {
        return "ln";
    };
    Object.defineProperty(UltraCalcFunctionLn.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionLn.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionLn.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionLn.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionLn.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionLn.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionLn.$t = markType(UltraCalcFunctionLn, 'UltraCalcFunctionLn', BuiltInFunctionBase.$);
    return UltraCalcFunctionLn;
}(BuiltInFunctionBase));
export { UltraCalcFunctionLn };
/**
 * @hidden
 */
var UltraCalcFunctionLog10 = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionLog10, _super);
    function UltraCalcFunctionLog10() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionLog10.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d;
        if (!((function () { var e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        if (true && d == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(log10(d));
    };
    UltraCalcFunctionLog10.prototype.get_name = function () {
        return "log10";
    };
    Object.defineProperty(UltraCalcFunctionLog10.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionLog10.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionLog10.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionLog10.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionLog10.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionLog10.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionLog10.$t = markType(UltraCalcFunctionLog10, 'UltraCalcFunctionLog10', BuiltInFunctionBase.$);
    return UltraCalcFunctionLog10;
}(BuiltInFunctionBase));
export { UltraCalcFunctionLog10 };
/**
 * @hidden
 */
var UltraCalcFunctionLog = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionLog, _super);
    function UltraCalcFunctionLog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionLog.prototype.evaluate = function (a, b) {
        var c = null;
        if (b == 2) {
            c = a.pop();
        }
        var d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c != null && c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var e, f;
        if (c != null) {
            if (((function () { var g = c._toDouble1(e); e = g.p0; return g.ret; })()) == false) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
        }
        else {
            e = 10;
        }
        if (((function () { var g = d._toDouble1(f); f = g.p0; return g.ret; })()) == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        if (true && f == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(logBase(f, e));
    };
    UltraCalcFunctionLog.prototype.get_name = function () {
        return "log";
    };
    Object.defineProperty(UltraCalcFunctionLog.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionLog.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionLog.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionLog.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionLog.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionLog.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionLog.$t = markType(UltraCalcFunctionLog, 'UltraCalcFunctionLog', BuiltInFunctionBase.$);
    return UltraCalcFunctionLog;
}(BuiltInFunctionBase));
export { UltraCalcFunctionLog };
/**
 * @hidden
 */
var UltraCalcFunctionNPV = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionNPV, _super);
    function UltraCalcFunctionNPV() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionNPV.prototype.evaluate = function (a, b) {
        var c;
        var d = 0;
        var e = new Array(b - 1);
        for (var f = 0; f < b - 1; f++) {
            e[f] = a.pop();
        }
        var g;
        if (!((function () { var h = a.pop()._toDouble1(g); g = h.p0; return h.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        g += 1;
        var h = 1;
        var _loop_1 = function (i) {
            var e_2, _e;
            var j = e[i - 1];
            if (j.isReference && j.toReference().isEnumerable) {
                var k = j.toReference().references;
                var _loop_2 = function (l) {
                    var m = l.value;
                    if (m.isError) {
                        return { value: new ExcelCalcValue(m.toErrorValue()) };
                    }
                    if (((function () { var n = m._toDouble1(c); c = n.p0; return n.ret; })())) {
                        d += c / Math.pow(g, h++);
                    }
                };
                try {
                    for (var _h = tslib_1.__values(fromEn(k)), _j = _h.next(); !_j.done; _j = _h.next()) {
                        var l = _j.value;
                        var state_2 = _loop_2(l);
                        if (typeof state_2 === "object")
                            return state_2;
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_j && !_j.done && (_e = _h.return)) _e.call(_h);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            else {
                if (j.isError) {
                    return { value: new ExcelCalcValue(j.toErrorValue()) };
                }
                if (((function () { var n = j._toDouble1(c); c = n.p0; return n.ret; })())) {
                    d += c / Math.pow(g, h++);
                }
            }
        };
        for (var i = e.length; i > 0; i--) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return new ExcelCalcValue(d);
    };
    UltraCalcFunctionNPV.prototype.canParameterBeEnumerable = function (a) {
        return 1 <= a;
    };
    UltraCalcFunctionNPV.prototype.get_name = function () {
        return "npv";
    };
    Object.defineProperty(UltraCalcFunctionNPV.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionNPV.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionNPV.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionNPV.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionNPV.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionNPV.$t = markType(UltraCalcFunctionNPV, 'UltraCalcFunctionNPV', BuiltInFunctionBase.$);
    return UltraCalcFunctionNPV;
}(BuiltInFunctionBase));
export { UltraCalcFunctionNPV };
/**
 * @hidden
 */
var UltraCalcFunctionFV = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionFV, _super);
    function UltraCalcFunctionFV() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionFV.prototype.evaluate = function (a, b) {
        var c = 0;
        if (b == 5) {
            var d = a.pop();
            if (d.isError) {
                return d;
            }
            c = d._toInt321();
        }
        var e = 0;
        if (b >= 4) {
            var f_1 = a.pop();
            if (f_1.isError) {
                return new ExcelCalcValue(f_1.toErrorValue());
            }
            if (!((function () { var g = f_1._toDouble1(e); e = g.p0; return g.ret; })())) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
        }
        var g, h, i;
        var j = a.pop();
        var k = a.pop();
        var l = a.pop();
        if (l.isError) {
            return l;
        }
        if (k.isError) {
            return k;
        }
        if (j.isError) {
            return j;
        }
        if (!((function () { var m = j._toDouble1(g); g = m.p0; return m.ret; })()) || !((function () { var m = k._toDouble1(h); h = m.p0; return m.ret; })()) || !((function () { var m = l._toDouble1(i); i = m.p0; return m.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(UltraCalcFunctionFV._ak(i, h, g, e, c));
    };
    UltraCalcFunctionFV._ak = function (a, b, c, d, e) {
        return (c * ((Math.pow(1 + a, e == 0 ? b : b + 1) - 1) / a) - (e == 0 ? 0 : c) + (d * Math.pow(1 + a, b))) * -1;
    };
    UltraCalcFunctionFV.prototype.get_name = function () {
        return "fv";
    };
    Object.defineProperty(UltraCalcFunctionFV.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFV.prototype.get_minArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionFV.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFV.prototype.get_maxArgs = function () {
        return 5;
    };
    Object.defineProperty(UltraCalcFunctionFV.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFV.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionFV.$t = markType(UltraCalcFunctionFV, 'UltraCalcFunctionFV', BuiltInFunctionBase.$);
    return UltraCalcFunctionFV;
}(BuiltInFunctionBase));
export { UltraCalcFunctionFV };
/**
 * @hidden
 */
var UltraCalcFunctionPV = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionPV, _super);
    function UltraCalcFunctionPV() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionPV.prototype.evaluate = function (a, b) {
        var c = 0;
        if (b == 5) {
            c = a.pop()._toInt321();
        }
        var d = 0;
        if (b >= 4 && !((function () { var e = a.pop()._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var e, f, g;
        if (!((function () { var h = a.pop()._toDouble1(e); e = h.p0; return h.ret; })()) || !((function () { var h = a.pop()._toDouble1(f); f = h.p0; return h.ret; })()) || !((function () { var h = a.pop()._toDouble1(g); g = h.p0; return h.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (c != 0) {
            e *= 1 + g;
        }
        return new ExcelCalcValue((e * (1 - Math.pow(1 + g, -f)) / g + (d / Math.pow(1 + g, f))) * -1);
    };
    UltraCalcFunctionPV.prototype.get_name = function () {
        return "pv";
    };
    Object.defineProperty(UltraCalcFunctionPV.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPV.prototype.get_minArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionPV.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPV.prototype.get_maxArgs = function () {
        return 5;
    };
    Object.defineProperty(UltraCalcFunctionPV.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPV.$t = markType(UltraCalcFunctionPV, 'UltraCalcFunctionPV', BuiltInFunctionBase.$);
    return UltraCalcFunctionPV;
}(BuiltInFunctionBase));
export { UltraCalcFunctionPV };
/**
 * @hidden
 */
var UltraCalcFunctionPmt = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionPmt, _super);
    function UltraCalcFunctionPmt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionPmt.prototype.evaluate = function (a, b) {
        var c = 0;
        if (b == 5) {
            c = a.pop()._toInt321();
        }
        var d = 0;
        if (b >= 4 && !((function () { var e = a.pop()._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var e, f, g;
        if (!((function () { var h = a.pop()._toDouble1(e); e = h.p0; return h.ret; })()) || !((function () { var h = a.pop()._toDouble1(f); f = h.p0; return h.ret; })()) || !((function () { var h = a.pop()._toDouble1(g); g = h.p0; return h.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (d != 0 && g != 0) {
            d = c == 0 ? (d * g) / (1 - Math.pow(g + 1, f)) : ((d * g) / (1 - Math.pow(g + 1, f))) / (g + 1);
        }
        if (g != 0) {
            if (c == 0) {
                return new ExcelCalcValue((e * (g / (1 - Math.pow(g + 1, -f))) - d) * -1);
            }
            else {
                return new ExcelCalcValue(((e / (1 + g)) * (g / (1 - Math.pow(g + 1, -f))) - d) * -1);
            }
        }
        return new ExcelCalcValue((e / f - d) * -1);
    };
    UltraCalcFunctionPmt.prototype.get_name = function () {
        return "pmt";
    };
    Object.defineProperty(UltraCalcFunctionPmt.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPmt.prototype.get_minArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionPmt.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPmt.prototype.get_maxArgs = function () {
        return 5;
    };
    Object.defineProperty(UltraCalcFunctionPmt.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPmt.$t = markType(UltraCalcFunctionPmt, 'UltraCalcFunctionPmt', BuiltInFunctionBase.$);
    return UltraCalcFunctionPmt;
}(BuiltInFunctionBase));
export { UltraCalcFunctionPmt };
/**
 * @hidden
 */
var UltraCalcFunctionNPer = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionNPer, _super);
    function UltraCalcFunctionNPer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionNPer.prototype.evaluate = function (a, b) {
        var c = 0;
        if (b == 5) {
            c = a.pop()._toInt321();
        }
        var d = 0;
        if (b >= 4 && !((function () { var e = a.pop()._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var e, f, g;
        if (!((function () { var h = a.pop()._toDouble1(e); e = h.p0; return h.ret; })()) || !((function () { var h = a.pop()._toDouble1(f); f = h.p0; return h.ret; })()) || f == 0 || !((function () { var h = a.pop()._toDouble1(g); g = h.p0; return h.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (g <= -1) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (g == 0 && f == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var h = c;
        var i = FinancialUtils.nPer(g, f, e, d, h);
        return new ExcelCalcValue(i);
    };
    UltraCalcFunctionNPer.prototype.get_name = function () {
        return "nper";
    };
    Object.defineProperty(UltraCalcFunctionNPer.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionNPer.prototype.get_minArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionNPer.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionNPer.prototype.get_maxArgs = function () {
        return 5;
    };
    Object.defineProperty(UltraCalcFunctionNPer.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionNPer.$t = markType(UltraCalcFunctionNPer, 'UltraCalcFunctionNPer', BuiltInFunctionBase.$);
    return UltraCalcFunctionNPer;
}(BuiltInFunctionBase));
export { UltraCalcFunctionNPer };
/**
 * @hidden
 */
var UltraCalcFunctionEven = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionEven, _super);
    function UltraCalcFunctionEven() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionEven.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d;
        if (!((function () { var e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var e = Math.ceil(Math.abs(d));
        var f = e + Math.abs(ieeeRemainder(e, 2));
        if (d < 0) {
            f *= -1;
        }
        return new ExcelCalcValue(f);
    };
    UltraCalcFunctionEven.prototype.get_name = function () {
        return "even";
    };
    Object.defineProperty(UltraCalcFunctionEven.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionEven.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionEven.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionEven.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionEven.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionEven.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionEven.$t = markType(UltraCalcFunctionEven, 'UltraCalcFunctionEven', BuiltInFunctionBase.$);
    return UltraCalcFunctionEven;
}(BuiltInFunctionBase));
export { UltraCalcFunctionEven };
/**
 * @hidden
 */
var UltraCalcFunctionOdd = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionOdd, _super);
    function UltraCalcFunctionOdd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionOdd.prototype.evaluate = function (a, b) {
        var c;
        var d = a.pop();
        if (d.isError) {
            return d;
        }
        if (((function () { var e = d._toDouble1(c); c = e.p0; return e.ret; })()) == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var e = Math.ceil(Math.abs(c));
        var f = Math.abs(ieeeRemainder(e, 2));
        if (f == 0) {
            e++;
        }
        if (c < 0) {
            e *= -1;
        }
        return new ExcelCalcValue(e);
    };
    UltraCalcFunctionOdd.prototype.get_name = function () {
        return "odd";
    };
    Object.defineProperty(UltraCalcFunctionOdd.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionOdd.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionOdd.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionOdd.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionOdd.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionOdd.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionOdd.$t = markType(UltraCalcFunctionOdd, 'UltraCalcFunctionOdd', BuiltInFunctionBase.$);
    return UltraCalcFunctionOdd;
}(BuiltInFunctionBase));
export { UltraCalcFunctionOdd };
/**
 * @hidden
 */
var UltraCalcFunctionPPmt = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionPPmt, _super);
    function UltraCalcFunctionPPmt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionPPmt.prototype.evaluate = function (a, b) {
        var c = 0;
        var d = 0;
        var e = 0;
        var f, g, h, i;
        if ((b == 6 && !((function () { var j = a.pop()._toDouble1(d); d = j.p0; return j.ret; })())) || (b >= 5 && !((function () { var j = a.pop()._toDouble1(e); e = j.p0; return j.ret; })())) || !((function () { var j = a.pop()._toDouble1(f); f = j.p0; return j.ret; })()) || !((function () { var j = a.pop()._toDouble1(g); g = j.p0; return j.ret; })()) || !((function () { var j = a.pop()._toDouble1(h); h = j.p0; return j.ret; })()) || !((function () { var j = a.pop()._toDouble1(i); i = j.p0; return j.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (g <= 0 || h <= 0 || h > g) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var j = d;
        c = FinancialUtils.pPmt(i, h, g, f, e, j);
        return new ExcelCalcValue(c);
    };
    UltraCalcFunctionPPmt.prototype.get_name = function () {
        return "ppmt";
    };
    Object.defineProperty(UltraCalcFunctionPPmt.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPPmt.prototype.get_minArgs = function () {
        return 4;
    };
    Object.defineProperty(UltraCalcFunctionPPmt.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPPmt.prototype.get_maxArgs = function () {
        return 6;
    };
    Object.defineProperty(UltraCalcFunctionPPmt.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPPmt.$t = markType(UltraCalcFunctionPPmt, 'UltraCalcFunctionPPmt', BuiltInFunctionBase.$);
    return UltraCalcFunctionPPmt;
}(BuiltInFunctionBase));
export { UltraCalcFunctionPPmt };
/**
 * @hidden
 */
var UltraCalcFunctionIPmt = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionIPmt, _super);
    function UltraCalcFunctionIPmt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionIPmt.prototype.evaluate = function (a, b) {
        var c = 0;
        var d = 0;
        var e, f, g, h;
        if ((b == 6 && !((function () { var i = a.pop()._toDouble1(c); c = i.p0; return i.ret; })())) || (b >= 5 && !((function () { var i = a.pop()._toDouble1(d); d = i.p0; return i.ret; })())) || !((function () { var i = a.pop()._toDouble1(e); e = i.p0; return i.ret; })()) || !((function () { var i = a.pop()._toDouble1(f); f = i.p0; return i.ret; })()) || !((function () { var i = a.pop()._toDouble1(g); g = i.p0; return i.ret; })()) || !((function () { var i = a.pop()._toDouble1(h); h = i.p0; return i.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (f <= 0 || g <= 0 || g > f) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var i = 0;
        var j = c;
        i = FinancialUtils.iPmt(h, g, f, e, d, j);
        return new ExcelCalcValue(i);
    };
    UltraCalcFunctionIPmt.prototype.get_name = function () {
        return "ipmt";
    };
    Object.defineProperty(UltraCalcFunctionIPmt.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIPmt.prototype.get_minArgs = function () {
        return 4;
    };
    Object.defineProperty(UltraCalcFunctionIPmt.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIPmt.prototype.get_maxArgs = function () {
        return 6;
    };
    Object.defineProperty(UltraCalcFunctionIPmt.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIPmt.$t = markType(UltraCalcFunctionIPmt, 'UltraCalcFunctionIPmt', BuiltInFunctionBase.$);
    return UltraCalcFunctionIPmt;
}(BuiltInFunctionBase));
export { UltraCalcFunctionIPmt };
/**
 * @hidden
 */
var UltraCalcFunctionLower = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionLower, _super);
    function UltraCalcFunctionLower() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionLower.prototype.evaluate = function (a, b) {
        if (true) {
            var c = a.pop();
            if (c.isError) {
                return c;
            }
            return new ExcelCalcValue(c.toString().toLowerCase());
        }
        if (a.peek().isString) {
            return new ExcelCalcValue(stringToLocaleLower(a.pop().toString(), a._w));
        }
        else {
            return a.pop();
        }
    };
    UltraCalcFunctionLower.prototype.get_name = function () {
        return "lower";
    };
    Object.defineProperty(UltraCalcFunctionLower.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionLower.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionLower.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionLower.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionLower.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionLower.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionLower.$t = markType(UltraCalcFunctionLower, 'UltraCalcFunctionLower', BuiltInFunctionBase.$);
    return UltraCalcFunctionLower;
}(BuiltInFunctionBase));
export { UltraCalcFunctionLower };
/**
 * @hidden
 */
var UltraCalcFunctionUpper = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionUpper, _super);
    function UltraCalcFunctionUpper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionUpper.prototype.evaluate = function (a, b) {
        if (true) {
            var c = a.pop();
            if (c.isError) {
                return c;
            }
            return new ExcelCalcValue(c.toString().toUpperCase());
        }
        if (a.peek().isString) {
            return new ExcelCalcValue(stringToLocaleUpper(a.pop().toString(), a._w));
        }
        else {
            return a.pop();
        }
    };
    UltraCalcFunctionUpper.prototype.get_name = function () {
        return "upper";
    };
    Object.defineProperty(UltraCalcFunctionUpper.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionUpper.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionUpper.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionUpper.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionUpper.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionUpper.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionUpper.$t = markType(UltraCalcFunctionUpper, 'UltraCalcFunctionUpper', BuiltInFunctionBase.$);
    return UltraCalcFunctionUpper;
}(BuiltInFunctionBase));
export { UltraCalcFunctionUpper };
/**
 * @hidden
 */
var UltraCalcFunctionLeft = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionLeft, _super);
    function UltraCalcFunctionLeft() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionLeft.prototype.evaluate = function (a, b) {
        var c = 1;
        if (b > 1) {
            var d = a.pop();
            if (d.isError) {
                return new ExcelCalcValue(d.toErrorValue());
            }
            c = d._toInt321();
            if (c < 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
        }
        var e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        var f = e.toString();
        return new ExcelCalcValue(f.substr(0, c > f.length ? f.length : c));
    };
    UltraCalcFunctionLeft.prototype.get_name = function () {
        return "left";
    };
    Object.defineProperty(UltraCalcFunctionLeft.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionLeft.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionLeft.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionLeft.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionLeft.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionLeft.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionLeft.$t = markType(UltraCalcFunctionLeft, 'UltraCalcFunctionLeft', BuiltInFunctionBase.$);
    return UltraCalcFunctionLeft;
}(BuiltInFunctionBase));
export { UltraCalcFunctionLeft };
/**
 * @hidden
 */
var UltraCalcFunctionRight = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionRight, _super);
    function UltraCalcFunctionRight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionRight.prototype.evaluate = function (a, b) {
        var c = 1;
        if (b > 1) {
            var d = a.pop();
            if (d.isError) {
                return new ExcelCalcValue(d.toErrorValue());
            }
            c = d._toInt321();
            if (c < 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
        }
        if (c < 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        var e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        var f = e.toString();
        return new ExcelCalcValue(f.substr(c > f.length ? 0 : f.length - c));
    };
    UltraCalcFunctionRight.prototype.get_name = function () {
        return "right";
    };
    Object.defineProperty(UltraCalcFunctionRight.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRight.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionRight.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRight.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionRight.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRight.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionRight.$t = markType(UltraCalcFunctionRight, 'UltraCalcFunctionRight', BuiltInFunctionBase.$);
    return UltraCalcFunctionRight;
}(BuiltInFunctionBase));
export { UltraCalcFunctionRight };
/**
 * @hidden
 */
var UltraCalcFunctionMid = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionMid, _super);
    function UltraCalcFunctionMid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionMid.prototype.evaluate = function (a, b) {
        var c = 0;
        if (b > 2) {
            var d = a.pop();
            if (d.isError) {
                return new ExcelCalcValue(d.toErrorValue());
            }
            c = d._toInt321();
            if (c < 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
        }
        var e = 1;
        if (b > 1) {
            var f = a.pop();
            if (f.isError) {
                return new ExcelCalcValue(f.toErrorValue());
            }
            e = f._toInt321();
            if (c < 1) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
        }
        var g = a.pop();
        if (g.isError) {
            return new ExcelCalcValue(g.toErrorValue());
        }
        var h = g.toString();
        if (e > h.length) {
            return new ExcelCalcValue(stringEmpty());
        }
        else if (e + c - 1 > h.length) {
            return new ExcelCalcValue(h.substr(e - 1));
        }
        else {
            return new ExcelCalcValue(h.substr(e - 1, c));
        }
    };
    UltraCalcFunctionMid.prototype.get_name = function () {
        return "mid";
    };
    Object.defineProperty(UltraCalcFunctionMid.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMid.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionMid.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMid.prototype.get_maxArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionMid.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMid.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionMid.$t = markType(UltraCalcFunctionMid, 'UltraCalcFunctionMid', BuiltInFunctionBase.$);
    return UltraCalcFunctionMid;
}(BuiltInFunctionBase));
export { UltraCalcFunctionMid };
/**
 * @hidden
 */
var UltraCalcFunctionTrim = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionTrim, _super);
    function UltraCalcFunctionTrim() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionTrim.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d = c.toString().trim();
        var e = new StringBuilder(1, d.length);
        var f = false;
        for (var g = 0; g < d.length; g++) {
            var h = d.charAt(g);
            var i = /\s/i.test(h);
            if (!f || !i) {
                e.h(h);
            }
            f = i;
        }
        return new ExcelCalcValue(e.toString());
    };
    UltraCalcFunctionTrim.prototype.get_name = function () {
        return "trim";
    };
    Object.defineProperty(UltraCalcFunctionTrim.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTrim.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionTrim.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTrim.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionTrim.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTrim.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionTrim.$t = markType(UltraCalcFunctionTrim, 'UltraCalcFunctionTrim', BuiltInFunctionBase.$);
    return UltraCalcFunctionTrim;
}(BuiltInFunctionBase));
export { UltraCalcFunctionTrim };
/**
 * @hidden
 */
var UltraCalcFunctionLen = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionLen, _super);
    function UltraCalcFunctionLen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionLen.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        return new ExcelCalcValue(c.toString().length);
    };
    UltraCalcFunctionLen.prototype.get_name = function () {
        return "len";
    };
    Object.defineProperty(UltraCalcFunctionLen.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionLen.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionLen.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionLen.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionLen.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionLen.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionLen.$t = markType(UltraCalcFunctionLen, 'UltraCalcFunctionLen', BuiltInFunctionBase.$);
    return UltraCalcFunctionLen;
}(BuiltInFunctionBase));
export { UltraCalcFunctionLen };
/**
 * @hidden
 */
var UltraCalcFunctionValue = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionValue, _super);
    function UltraCalcFunctionValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionValue.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d = false;
        var e = 0;
        if (typeof c.value === 'string') {
            var f_2 = (c.value).trim();
            if (stringEndsWith(f_2, "kr")) {
                f_2 = f_2.substr(0, f_2.length - 2);
            }
            else if (stringStartsWith(f_2, "R$") || stringStartsWith(f_2, "S/")) {
                f_2 = f_2.substr(2, f_2.length - 2);
            }
            else {
                f_2 = trim.apply(void 0, tslib_1.__spread([f_2], UltraCalcFunctionValue._ak));
            }
            d = ((function () { var g = MathUtilities.c(f_2, a._w, e); e = g.p2; return g.ret; })());
        }
        if (!d) {
            d = ((function () { var g = c._toDouble1(e); e = g.p0; return g.ret; })());
        }
        return (d) ? new ExcelCalcValue(e) : new ExcelCalcValue(new ExcelCalcErrorValue(4));
    };
    UltraCalcFunctionValue.prototype.get_name = function () {
        return "value";
    };
    Object.defineProperty(UltraCalcFunctionValue.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionValue.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionValue.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionValue.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionValue.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionValue.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionValue.$t = markType(UltraCalcFunctionValue, 'UltraCalcFunctionValue', BuiltInFunctionBase.$);
    UltraCalcFunctionValue._ak = ['$', '\u0080', '£', '¤', '¥', '৲', '৳', '฿', '៛', '₠', '₡', '₢', '₣', '₤', '₦', '₧', '₨', '₩', '₪', '₫', '€', '₭', '₮', '₯', '﷼', '﹩', '＄', '￡', '￥', '￦'];
    return UltraCalcFunctionValue;
}(BuiltInFunctionBase));
export { UltraCalcFunctionValue };
/**
 * @hidden
 */
var UltraCalcFunctionFind = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionFind, _super);
    function UltraCalcFunctionFind() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionFind.prototype.evaluate = function (a, b) {
        var c = 0;
        if (b > 2) {
            if (a.peek().isError) {
                return new ExcelCalcValue(a.pop().toErrorValue());
            }
            c = a.pop()._toInt321() - 1;
            if (c < 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
        }
        if (a.peek().isError) {
            return new ExcelCalcValue(a.pop().toErrorValue());
        }
        var d = a.pop().toString();
        if (c > d.length - 1) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        if (a.peek().isError) {
            return new ExcelCalcValue(a.pop().toErrorValue());
        }
        var e = -1;
        var f = a.pop().toString();
        if (f.length == 0) {
            e = 1;
        }
        else {
            e = d.indexOf(f, c);
        }
        if (e != -1) {
            return new ExcelCalcValue(e + 1);
        }
        else {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
    };
    UltraCalcFunctionFind.prototype.get_name = function () {
        return "find";
    };
    Object.defineProperty(UltraCalcFunctionFind.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFind.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionFind.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFind.prototype.get_maxArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionFind.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFind.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionFind.$t = markType(UltraCalcFunctionFind, 'UltraCalcFunctionFind', BuiltInFunctionBase.$);
    return UltraCalcFunctionFind;
}(BuiltInFunctionBase));
export { UltraCalcFunctionFind };
/**
 * @hidden
 */
var UltraCalcFunctionReplace = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionReplace, _super);
    function UltraCalcFunctionReplace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionReplace.prototype.evaluate = function (a, b) {
        var c = a.pop();
        var d = a.pop();
        var e = a.pop();
        var f = a.pop();
        if (f.isError) {
            return f;
        }
        if (e.isError) {
            return e;
        }
        if (d.isError) {
            return d;
        }
        if (c.isError) {
            return c;
        }
        var g = c.toString();
        var h = d._toInt321();
        var i = e._toInt321() - 1;
        var j = f.toString();
        if (i < 0 || i > j.length) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        if (h < 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        if (h > j.length - i) {
            h = j.length - i;
        }
        var k = j.substr(0, i) + g + j.substr(i + h);
        return new ExcelCalcValue(k);
    };
    UltraCalcFunctionReplace.prototype.get_name = function () {
        return "replace";
    };
    Object.defineProperty(UltraCalcFunctionReplace.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionReplace.prototype.get_minArgs = function () {
        return 4;
    };
    Object.defineProperty(UltraCalcFunctionReplace.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionReplace.prototype.get_maxArgs = function () {
        return 4;
    };
    Object.defineProperty(UltraCalcFunctionReplace.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionReplace.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionReplace.$t = markType(UltraCalcFunctionReplace, 'UltraCalcFunctionReplace', BuiltInFunctionBase.$);
    return UltraCalcFunctionReplace;
}(BuiltInFunctionBase));
export { UltraCalcFunctionReplace };
/**
 * @hidden
 */
var UltraCalcFunctionSYD = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSYD, _super);
    function UltraCalcFunctionSYD() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSYD.prototype.evaluate = function (a, b) {
        var c = a.pop()._toInt321();
        if (c <= 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var d = a.pop()._toInt321();
        if (d <= 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var e, f;
        if (!((function () { var g = a.pop()._toDouble1(e); e = g.p0; return g.ret; })()) || !((function () { var g = a.pop()._toDouble1(f); f = g.p0; return g.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(((f - e) * (d - c + 1) * 2) / (d * (d + 1)));
    };
    UltraCalcFunctionSYD.prototype.get_name = function () {
        return "syd";
    };
    Object.defineProperty(UltraCalcFunctionSYD.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSYD.prototype.get_minArgs = function () {
        return 4;
    };
    Object.defineProperty(UltraCalcFunctionSYD.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSYD.prototype.get_maxArgs = function () {
        return 4;
    };
    Object.defineProperty(UltraCalcFunctionSYD.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSYD.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionSYD.$t = markType(UltraCalcFunctionSYD, 'UltraCalcFunctionSYD', BuiltInFunctionBase.$);
    return UltraCalcFunctionSYD;
}(BuiltInFunctionBase));
export { UltraCalcFunctionSYD };
/**
 * @hidden
 */
var UltraCalcFunctionSLN = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSLN, _super);
    function UltraCalcFunctionSLN() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSLN.prototype.evaluate = function (a, b) {
        var c = a.pop()._toInt321();
        if (c == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(2));
        }
        var d, e;
        if (!((function () { var f = a.pop()._toDouble1(d); d = f.p0; return f.ret; })()) || !((function () { var f = a.pop()._toDouble1(e); e = f.p0; return f.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue((e - d) / c);
    };
    UltraCalcFunctionSLN.prototype.get_name = function () {
        return "sln";
    };
    Object.defineProperty(UltraCalcFunctionSLN.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSLN.prototype.get_minArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionSLN.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSLN.prototype.get_maxArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionSLN.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSLN.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionSLN.$t = markType(UltraCalcFunctionSLN, 'UltraCalcFunctionSLN', BuiltInFunctionBase.$);
    return UltraCalcFunctionSLN;
}(BuiltInFunctionBase));
export { UltraCalcFunctionSLN };
/**
 * @hidden
 */
var UltraCalcFunctionDB = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionDB, _super);
    function UltraCalcFunctionDB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionDB.prototype.evaluate = function (a, b) {
        var c = 12;
        if (b > 4) {
            c = a.pop()._toInt321();
        }
        var d = a.pop()._toInt321();
        if (d <= 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var e;
        if (!((function () { var f = a.pop()._toDouble1(e); e = f.p0; return f.ret; })()) || e <= 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var f, g;
        if (!((function () { var h = a.pop()._toDouble1(f); f = h.p0; return h.ret; })()) || !((function () { var h = a.pop()._toDouble1(g); g = h.p0; return h.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var h = round10N(1 - Math.pow(f / g, 1 / e), 3);
        if (d > e + 1) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if ((d == e + 1) && c == 12) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var i = 0;
        var j = 0;
        var k = g;
        for (var l = 1; l <= d; l++) {
            if (l == 1) {
                i = k * h * (c / 12);
            }
            else if ((l == (e + 1)) && c < 12) {
                i = (k * h * (12 - c)) / 12;
            }
            else {
                i = k * h;
            }
            j += i;
            k -= i;
        }
        return new ExcelCalcValue(i);
    };
    UltraCalcFunctionDB.prototype.get_name = function () {
        return "db";
    };
    Object.defineProperty(UltraCalcFunctionDB.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDB.prototype.get_minArgs = function () {
        return 4;
    };
    Object.defineProperty(UltraCalcFunctionDB.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDB.prototype.get_maxArgs = function () {
        return 5;
    };
    Object.defineProperty(UltraCalcFunctionDB.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDB.$t = markType(UltraCalcFunctionDB, 'UltraCalcFunctionDB', BuiltInFunctionBase.$);
    return UltraCalcFunctionDB;
}(BuiltInFunctionBase));
export { UltraCalcFunctionDB };
/**
 * @hidden
 */
var UltraCalcFunctionDDB = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionDDB, _super);
    function UltraCalcFunctionDDB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionDDB.prototype.evaluate = function (a, b) {
        var c = b > 4 ? a.pop() : new ExcelCalcValue(2);
        var d = a.pop();
        var e = a.pop();
        var f = a.pop();
        var g = a.pop();
        if (c.isNull || d.isNull || e.isNull || f.isNull || g.isNull) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var h, i, j, k, l;
        if (!((function () { var m = c._toDouble1(h); h = m.p0; return m.ret; })()) || !((function () { var m = d._toDouble1(i); i = m.p0; return m.ret; })()) || !((function () { var m = e._toDouble1(j); j = m.p0; return m.ret; })()) || !((function () { var m = f._toDouble1(k); k = m.p0; return m.ret; })()) || !((function () { var m = g._toDouble1(l); l = m.p0; return m.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        var m = l * Math.pow(1 - h / j, i - 1);
        var n = m - (m * (1 - h / j));
        if (k > m - n) {
            if (m - k > 0) {
                n = m - k;
            }
            else {
                n = 0;
            }
        }
        return new ExcelCalcValue(n);
    };
    UltraCalcFunctionDDB.prototype.get_name = function () {
        return "ddb";
    };
    Object.defineProperty(UltraCalcFunctionDDB.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDDB.prototype.get_minArgs = function () {
        return 4;
    };
    Object.defineProperty(UltraCalcFunctionDDB.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDDB.prototype.get_maxArgs = function () {
        return 5;
    };
    Object.defineProperty(UltraCalcFunctionDDB.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDDB.$t = markType(UltraCalcFunctionDDB, 'UltraCalcFunctionDDB', BuiltInFunctionBase.$);
    return UltraCalcFunctionDDB;
}(BuiltInFunctionBase));
export { UltraCalcFunctionDDB };
/**
 * @hidden
 */
var UltraCalcFunctionIntRate = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionIntRate, _super);
    function UltraCalcFunctionIntRate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionIntRate.prototype.evaluate = function (a, b) {
        var c = 0;
        if (b > 4 && !((function () { var d = a.pop()._toDouble1(c); c = d.p0; return d.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (c < 0 || c > 4) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var d, e;
        if (!((function () { var f = a.pop()._toDouble1(d); d = f.p0; return f.ret; })()) || !((function () { var f = a.pop()._toDouble1(e); e = f.p0; return f.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (e <= 0 || d <= 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var f = a.pop();
        var g = f._toDateTime1();
        var h = a.pop();
        var i = h._toDateTime1();
        if (i >= g) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var j;
        var k;
        if (c == 0 || c == 4) {
            var l_1 = UltraCalcFunctionDays360._ak(i, g, c != 4 ? false : true);
            if (((function () { var m = l_1._toDouble1(k); k = m.p0; return m.ret; })()) == false) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            j = 360;
        }
        else {
            if (c == 1) {
                j = 365.2422;
            }
            else if (c == 2) {
                j = 360;
            }
            else {
                j = 365;
            }
            k = timeSpanDays((+g - +i));
        }
        return new ExcelCalcValue(((d - e) / e) * (j / k));
    };
    UltraCalcFunctionIntRate.prototype.get_name = function () {
        return "intrate";
    };
    Object.defineProperty(UltraCalcFunctionIntRate.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIntRate.prototype.get_minArgs = function () {
        return 4;
    };
    Object.defineProperty(UltraCalcFunctionIntRate.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIntRate.prototype.get_maxArgs = function () {
        return 5;
    };
    Object.defineProperty(UltraCalcFunctionIntRate.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIntRate.$t = markType(UltraCalcFunctionIntRate, 'UltraCalcFunctionIntRate', BuiltInFunctionBase.$);
    return UltraCalcFunctionIntRate;
}(BuiltInFunctionBase));
export { UltraCalcFunctionIntRate };
/**
 * @hidden
 */
var UltraCalcFunctionDateValue = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionDateValue, _super);
    function UltraCalcFunctionDateValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionDateValue.prototype.evaluate = function (a, b) {
        var c = a.pop();
        var d;
        if (((function () { var e = c._aj(c._a0, d); d = e.p1; return e.ret; })()) == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        return new ExcelCalcValue(d);
    };
    UltraCalcFunctionDateValue.prototype.get_name = function () {
        return "datevalue";
    };
    Object.defineProperty(UltraCalcFunctionDateValue.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDateValue.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionDateValue.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDateValue.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionDateValue.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDateValue.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionDateValue.$t = markType(UltraCalcFunctionDateValue, 'UltraCalcFunctionDateValue', BuiltInFunctionBase.$);
    return UltraCalcFunctionDateValue;
}(BuiltInFunctionBase));
export { UltraCalcFunctionDateValue };
/**
 * @hidden
 */
var UltraCalcFunctionDate = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionDate, _super);
    function UltraCalcFunctionDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionDate.prototype.evaluate = function (a, b) {
        var c = a.pop();
        var d = a.pop();
        var e = a.pop();
        if (e.isError) {
            return e;
        }
        var f;
        if (((function () { var g = e._toDouble1(f); f = g.p0; return g.ret; })()) == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        if (d.isError) {
            return d;
        }
        var g;
        if (((function () { var h = d._toDouble1(g); g = h.p0; return h.ret; })()) == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        if (c.isError) {
            return c;
        }
        var h;
        if (((function () { var i = c._toDouble1(h); h = i.p0; return i.ret; })()) == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        var i = truncate(Math.floor(f));
        var j = truncate(Math.floor(g));
        var k = truncate(Math.floor(h));
        if (true) {
            var l = 1900;
            if (i < l) {
                i += l;
            }
        }
        while (true) {
            var m = (j - 1);
            var n = intDivide(m, 12);
            if (n > 0) {
                i += n;
                j = (m % 12) + 1;
            }
            if (10000 <= i) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            var o = daysInMonth(i, j);
            if (k <= o) {
                break;
            }
            k -= o;
            j++;
        }
        if (true) {
            if (i < 1900) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            var p = ExcelCalcFunction._l(a);
            if (p != null && p.dateSystem == 1 && i < 1904) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            if (10000 <= i) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
        }
        else {
            if (i < 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
        }
        var q = dateFromValues(i, j, k, 0, 0, 0, 0);
        return new ExcelCalcValue(q);
    };
    UltraCalcFunctionDate.prototype.get_name = function () {
        return "date";
    };
    Object.defineProperty(UltraCalcFunctionDate.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDate.prototype.get_minArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionDate.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDate.prototype.get_maxArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionDate.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDate.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionDate.$t = markType(UltraCalcFunctionDate, 'UltraCalcFunctionDate', BuiltInFunctionBase.$);
    return UltraCalcFunctionDate;
}(BuiltInFunctionBase));
export { UltraCalcFunctionDate };
/**
 * @hidden
 */
var UltraCalcFunctionDays360 = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionDays360, _super);
    function UltraCalcFunctionDays360() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionDays360.prototype.evaluate = function (a, b) {
        var c = false;
        if (b > 2) {
            if (a.peek().isError) {
                return new ExcelCalcValue(a.pop().toErrorValue());
            }
            c = a.pop()._toBoolean1();
        }
        var d = a.pop()._toDateTime1();
        var e = a.pop()._toDateTime1();
        return UltraCalcFunctionDays360._ak(e, d, c);
    };
    UltraCalcFunctionDays360._ak = function (a, b, c) {
        if (a.getDate() == 31) {
            a = dateFromValues(a.getFullYear(), dateGetMonth(a), 30, 0, 0, 0, 0);
        }
        if (b.getDate() == 31) {
            if (!c) {
                if (a.getDate() < 30) {
                    b = dateFromValues(dateGetMonth(b) < 12 ? b.getFullYear() : b.getFullYear() + 1, dateGetMonth(b) < 12 ? dateGetMonth(b) + 1 : 1, 1, 0, 0, 0, 0);
                }
                else {
                    b = dateFromValues(b.getFullYear(), dateGetMonth(b), 30, 0, 0, 0, 0);
                }
            }
            else {
                b = dateFromValues(b.getFullYear(), dateGetMonth(b), 30, 0, 0, 0, 0);
            }
        }
        return new ExcelCalcValue((b.getFullYear() * 360 + dateGetMonth(b) * 30 + b.getDate()) - (a.getFullYear() * 360 + dateGetMonth(a) * 30 + a.getDate()));
    };
    UltraCalcFunctionDays360.prototype.get_name = function () {
        return "days360";
    };
    Object.defineProperty(UltraCalcFunctionDays360.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDays360.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionDays360.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDays360.prototype.get_maxArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionDays360.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDays360.$t = markType(UltraCalcFunctionDays360, 'UltraCalcFunctionDays360', BuiltInFunctionBase.$);
    return UltraCalcFunctionDays360;
}(BuiltInFunctionBase));
export { UltraCalcFunctionDays360 };
/**
 * @hidden
 */
var UltraCalcFunctionDay = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionDay, _super);
    function UltraCalcFunctionDay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionDay.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        if (true) {
            var d_3;
            if (c.isNull || (((function () { var e = c._toDouble1(d_3); d_3 = e.p0; return e.ret; })()) && d_3 == 0)) {
                return new ExcelCalcValue(0);
            }
        }
        if (c.isString && stringIsNullOrEmpty(c.toString())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        var e = c._toDateTime1();
        return new ExcelCalcValue(e.getDate());
    };
    UltraCalcFunctionDay.prototype.get_name = function () {
        return "day";
    };
    Object.defineProperty(UltraCalcFunctionDay.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDay.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionDay.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDay.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionDay.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDay.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionDay.$t = markType(UltraCalcFunctionDay, 'UltraCalcFunctionDay', BuiltInFunctionBase.$);
    return UltraCalcFunctionDay;
}(BuiltInFunctionBase));
export { UltraCalcFunctionDay };
/**
 * @hidden
 */
var UltraCalcFunctionMonth = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionMonth, _super);
    function UltraCalcFunctionMonth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionMonth.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        if (true) {
            var d_4;
            if (c.isNull || (((function () { var e = c._toDouble1(d_4); d_4 = e.p0; return e.ret; })()) && d_4 == 0)) {
                return new ExcelCalcValue(1);
            }
        }
        var e = c._toDateTime1();
        return new ExcelCalcValue(dateGetMonth(e));
    };
    UltraCalcFunctionMonth.prototype.get_name = function () {
        return "month";
    };
    Object.defineProperty(UltraCalcFunctionMonth.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMonth.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionMonth.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMonth.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionMonth.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMonth.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionMonth.$t = markType(UltraCalcFunctionMonth, 'UltraCalcFunctionMonth', BuiltInFunctionBase.$);
    return UltraCalcFunctionMonth;
}(BuiltInFunctionBase));
export { UltraCalcFunctionMonth };
/**
 * @hidden
 */
var UltraCalcFunctionYear = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionYear, _super);
    function UltraCalcFunctionYear() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionYear.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        if (true) {
            var d_5;
            if (c.isNull || (((function () { var e = c._toDouble1(d_5); d_5 = e.p0; return e.ret; })()) && d_5 == 0)) {
                var e = a._r;
                if (e != null && e.dateSystem == 1) {
                    return new ExcelCalcValue(1904);
                }
                return new ExcelCalcValue(1900);
            }
        }
        var f = c._toDateTime1();
        return new ExcelCalcValue(f.getFullYear());
    };
    UltraCalcFunctionYear.prototype.get_name = function () {
        return "year";
    };
    Object.defineProperty(UltraCalcFunctionYear.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionYear.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionYear.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionYear.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionYear.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionYear.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionYear.$t = markType(UltraCalcFunctionYear, 'UltraCalcFunctionYear', BuiltInFunctionBase.$);
    return UltraCalcFunctionYear;
}(BuiltInFunctionBase));
export { UltraCalcFunctionYear };
/**
 * @hidden
 */
var UltraCalcFunctionHour = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionHour, _super);
    function UltraCalcFunctionHour() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionHour.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        if (true) {
            var d_6;
            if (c.isNull || (((function () { var e = c._toDouble1(d_6); d_6 = e.p0; return e.ret; })()) && d_6 == 0)) {
                return new ExcelCalcValue(0);
            }
        }
        var e = c._toDateTime1();
        return new ExcelCalcValue(e.getHours());
    };
    UltraCalcFunctionHour.prototype.get_name = function () {
        return "hour";
    };
    Object.defineProperty(UltraCalcFunctionHour.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionHour.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionHour.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionHour.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionHour.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionHour.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionHour.$t = markType(UltraCalcFunctionHour, 'UltraCalcFunctionHour', BuiltInFunctionBase.$);
    return UltraCalcFunctionHour;
}(BuiltInFunctionBase));
export { UltraCalcFunctionHour };
/**
 * @hidden
 */
var UltraCalcFunctionMinute = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionMinute, _super);
    function UltraCalcFunctionMinute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionMinute.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        if (true) {
            var d_7;
            if (c.isNull || (((function () { var e = c._toDouble1(d_7); d_7 = e.p0; return e.ret; })()) && d_7 == 0)) {
                return new ExcelCalcValue(0);
            }
        }
        var e = c._toDateTime1();
        return new ExcelCalcValue(e.getMinutes());
    };
    UltraCalcFunctionMinute.prototype.get_name = function () {
        return "minute";
    };
    Object.defineProperty(UltraCalcFunctionMinute.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMinute.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionMinute.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMinute.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionMinute.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMinute.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionMinute.$t = markType(UltraCalcFunctionMinute, 'UltraCalcFunctionMinute', BuiltInFunctionBase.$);
    return UltraCalcFunctionMinute;
}(BuiltInFunctionBase));
export { UltraCalcFunctionMinute };
/**
 * @hidden
 */
var UltraCalcFunctionSecond = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSecond, _super);
    function UltraCalcFunctionSecond() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSecond.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        if (true) {
            var d_8;
            if (c.isNull || (((function () { var e = c._toDouble1(d_8); d_8 = e.p0; return e.ret; })()) && d_8 == 0)) {
                return new ExcelCalcValue(0);
            }
        }
        var e = c._toDateTime1();
        return new ExcelCalcValue(e.getSeconds());
    };
    UltraCalcFunctionSecond.prototype.get_name = function () {
        return "second";
    };
    Object.defineProperty(UltraCalcFunctionSecond.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSecond.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionSecond.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSecond.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionSecond.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSecond.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionSecond.$t = markType(UltraCalcFunctionSecond, 'UltraCalcFunctionSecond', BuiltInFunctionBase.$);
    return UltraCalcFunctionSecond;
}(BuiltInFunctionBase));
export { UltraCalcFunctionSecond };
/**
 * @hidden
 */
var UltraCalcFunctionNow = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionNow, _super);
    function UltraCalcFunctionNow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionNow.prototype.evaluate = function (a, b) {
        return new ExcelCalcValue(dateNow());
    };
    UltraCalcFunctionNow.prototype.get_name = function () {
        return "now";
    };
    Object.defineProperty(UltraCalcFunctionNow.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionNow.prototype.get_minArgs = function () {
        return 0;
    };
    Object.defineProperty(UltraCalcFunctionNow.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionNow.prototype.get_maxArgs = function () {
        return 0;
    };
    Object.defineProperty(UltraCalcFunctionNow.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionNow.$t = markType(UltraCalcFunctionNow, 'UltraCalcFunctionNow', BuiltInFunctionBase.$);
    return UltraCalcFunctionNow;
}(BuiltInFunctionBase));
export { UltraCalcFunctionNow };
/**
 * @hidden
 */
var UltraCalcFunctionTimeValue = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionTimeValue, _super);
    function UltraCalcFunctionTimeValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionTimeValue.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return c;
        }
        var d = dateGetTimeOfDay(c._toDateTime1());
        if (true) {
            var e = ExcelCalcValue._ay(d);
            return new ExcelCalcValue(e);
        }
        return new ExcelCalcValue(dateFromTicks(timeSpanTicks(d)));
    };
    UltraCalcFunctionTimeValue.prototype.get_name = function () {
        return "timevalue";
    };
    Object.defineProperty(UltraCalcFunctionTimeValue.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTimeValue.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionTimeValue.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTimeValue.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionTimeValue.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTimeValue.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionTimeValue.$t = markType(UltraCalcFunctionTimeValue, 'UltraCalcFunctionTimeValue', BuiltInFunctionBase.$);
    return UltraCalcFunctionTimeValue;
}(BuiltInFunctionBase));
export { UltraCalcFunctionTimeValue };
/**
 * @hidden
 */
var UltraCalcFunctionTime = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionTime, _super);
    function UltraCalcFunctionTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionTime.prototype.evaluate = function (a, b) {
        var c = a.pop();
        var d = a.pop();
        var e = a.pop();
        if (e.isError) {
            return e;
        }
        if (d.isError) {
            return d;
        }
        if (c.isError) {
            return c;
        }
        var f = c._toInt321();
        var g = d._toInt321();
        var h = e._toInt321();
        if (true) {
            var i = 32767;
            if (f < 0 || g < 0 || h < 0 || i < f || i < g || i < h) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            g += (intDivide(f, 60));
            f = f % 60;
            h += (intDivide(g, 60));
            g = g % 60;
            h = h % 24;
        }
        if (true) {
            var j = timeSpanInit1(h, g, f);
            var k = ExcelCalcValue._ay(j);
            return new ExcelCalcValue(k);
        }
        else {
            var l = dateFromValues(1, 1, 1, h, g, f, 0);
            return new ExcelCalcValue(l.getTime());
        }
    };
    UltraCalcFunctionTime.prototype.get_name = function () {
        return "time";
    };
    Object.defineProperty(UltraCalcFunctionTime.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTime.prototype.get_minArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionTime.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTime.prototype.get_maxArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionTime.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTime.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionTime.$t = markType(UltraCalcFunctionTime, 'UltraCalcFunctionTime', BuiltInFunctionBase.$);
    return UltraCalcFunctionTime;
}(BuiltInFunctionBase));
export { UltraCalcFunctionTime };
/**
 * @hidden
 */
var UltraCalcFunctionMedian = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionMedian, _super);
    function UltraCalcFunctionMedian() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionMedian.prototype.evaluate = function (a, b) {
        var c = new List$1(Number_$type, 0);
        if (!ExcelCalcFunction._t(a, b, c, true, true)) {
            return a.pop();
        }
        c.y();
        if (c.count == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var d;
        var e = intDivide(c.count, 2);
        if (c.count % 2 == 1) {
            d = c._inner[e];
        }
        else {
            var f = (c._inner[e - 1] + c._inner[e]) / 2;
            d = f;
        }
        return new ExcelCalcValue(d);
    };
    UltraCalcFunctionMedian.prototype.canParameterBeEnumerable = function (a) {
        return true;
    };
    UltraCalcFunctionMedian.prototype.get_name = function () {
        return "median";
    };
    Object.defineProperty(UltraCalcFunctionMedian.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMedian.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionMedian.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMedian.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionMedian.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMedian.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionMedian.$t = markType(UltraCalcFunctionMedian, 'UltraCalcFunctionMedian', BuiltInFunctionBase.$);
    return UltraCalcFunctionMedian;
}(BuiltInFunctionBase));
export { UltraCalcFunctionMedian };
/**
 * @hidden
 */
var UltraCalcFunctionVar = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionVar, _super);
    function UltraCalcFunctionVar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionVar.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.d(a, b, 1229, function (c) { return UltraCalcFunctionVar._ak(c, true); });
    };
    UltraCalcFunctionVar.prototype.canParameterBeEnumerable = function (a) {
        return true;
    };
    UltraCalcFunctionVar._ak = function (a, b) {
        if (a.count < 2) {
            if (!b && a.count == 1) {
                return new ExcelCalcValue(0);
            }
            return new ExcelCalcValue(new ExcelCalcErrorValue(2));
        }
        return new ExcelCalcValue(CalcFunctionUtilities.ab(a, b));
    };
    UltraCalcFunctionVar.prototype.get_name = function () {
        return "var";
    };
    Object.defineProperty(UltraCalcFunctionVar.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionVar.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionVar.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionVar.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionVar.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionVar.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionVar.$t = markType(UltraCalcFunctionVar, 'UltraCalcFunctionVar', BuiltInFunctionBase.$);
    return UltraCalcFunctionVar;
}(BuiltInFunctionBase));
export { UltraCalcFunctionVar };
/**
 * @hidden
 */
var UltraCalcFunctionStdev = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionStdev, _super);
    function UltraCalcFunctionStdev() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionStdev.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.d(a, b, 1229, function (c) { return UltraCalcFunctionStdev._al(c, true); });
    };
    UltraCalcFunctionStdev.prototype.canParameterBeEnumerable = function (a) {
        return true;
    };
    UltraCalcFunctionStdev._al = function (a, b) {
        if (a.count < 2) {
            if (!b && a.count == 1) {
                return new ExcelCalcValue(0);
            }
            return new ExcelCalcValue(new ExcelCalcErrorValue(2));
        }
        var c = CalcFunctionUtilities.r(a);
        return new ExcelCalcValue(CalcFunctionUtilities.y(c, a.count, b));
    };
    UltraCalcFunctionStdev.prototype.get_name = function () {
        return "stdev";
    };
    UltraCalcFunctionStdev.prototype.get_minArgs = function () {
        return 1;
    };
    UltraCalcFunctionStdev.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    UltraCalcFunctionStdev.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionStdev.$t = markType(UltraCalcFunctionStdev, 'UltraCalcFunctionStdev', UltraCalcFunctionVar.$);
    return UltraCalcFunctionStdev;
}(UltraCalcFunctionVar));
export { UltraCalcFunctionStdev };
/**
 * @hidden
 */
var UltraCalcFunctionType = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionType, _super);
    function UltraCalcFunctionType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionType.prototype.evaluate = function (a, b) {
        var c;
        var d = a.pop();
        if (d.isError) {
            c = 16;
        }
        else if (d.isBoolean) {
            c = 4;
        }
        else if (d.isString) {
            c = 2;
        }
        else if (d.isArray) {
            c = 64;
        }
        else {
            var e_3;
            if (!((function () { var f = d._toDouble1(e_3); e_3 = f.p0; return f.ret; })())) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
            c = 1;
        }
        return new ExcelCalcValue(c);
    };
    UltraCalcFunctionType.prototype.get_name = function () {
        return "type";
    };
    Object.defineProperty(UltraCalcFunctionType.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionType.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionType.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionType.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionType.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionType.$t = markType(UltraCalcFunctionType, 'UltraCalcFunctionType', BuiltInFunctionBase.$);
    return UltraCalcFunctionType;
}(BuiltInFunctionBase));
export { UltraCalcFunctionType };
/**
 * @hidden
 */
var UltraCalcFunctionErrorType = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionErrorType, _super);
    function UltraCalcFunctionErrorType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionErrorType.prototype.evaluate = function (a, b) {
        var c;
        var d = a.pop();
        if (d.isError) {
            var e = d.toErrorValue();
            switch (e.code) {
                case 6:
                    c = 1;
                    break;
                case 2:
                    c = 2;
                    break;
                case 1:
                    c = 3;
                    break;
                case 0:
                    c = 4;
                    break;
                case 7:
                    c = 5;
                    break;
                case 4:
                    c = 6;
                    break;
                case 3:
                    c = 7;
                    break;
                default: return new ExcelCalcValue(new ExcelCalcErrorValue(3));
            }
            return new ExcelCalcValue(c);
        }
        else {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
    };
    UltraCalcFunctionErrorType.prototype.get_name = function () {
        return "errortype";
    };
    Object.defineProperty(UltraCalcFunctionErrorType.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionErrorType.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionErrorType.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionErrorType.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionErrorType.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionErrorType.$t = markType(UltraCalcFunctionErrorType, 'UltraCalcFunctionErrorType', BuiltInFunctionBase.$);
    return UltraCalcFunctionErrorType;
}(BuiltInFunctionBase));
export { UltraCalcFunctionErrorType };
/**
 * @hidden
 */
var UltraCalcFunctionNa = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionNa, _super);
    function UltraCalcFunctionNa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionNa.prototype.evaluate = function (a, b) {
        return new ExcelCalcValue(new ExcelCalcErrorValue(3));
    };
    UltraCalcFunctionNa.prototype.get_name = function () {
        return "na";
    };
    Object.defineProperty(UltraCalcFunctionNa.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionNa.prototype.get_minArgs = function () {
        return 0;
    };
    Object.defineProperty(UltraCalcFunctionNa.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionNa.prototype.get_maxArgs = function () {
        return 0;
    };
    Object.defineProperty(UltraCalcFunctionNa.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionNa.$t = markType(UltraCalcFunctionNa, 'UltraCalcFunctionNa', BuiltInFunctionBase.$);
    return UltraCalcFunctionNa;
}(BuiltInFunctionBase));
export { UltraCalcFunctionNa };
/**
 * @hidden
 */
var UltraCalcFunctionIsBlank = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionIsBlank, _super);
    function UltraCalcFunctionIsBlank() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionIsBlank.prototype.evaluate = function (a, b) {
        var c = a.pop();
        return new ExcelCalcValue(c.isNull);
    };
    UltraCalcFunctionIsBlank.prototype.get_name = function () {
        return "isblank";
    };
    Object.defineProperty(UltraCalcFunctionIsBlank.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsBlank.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIsBlank.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsBlank.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIsBlank.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsBlank.$t = markType(UltraCalcFunctionIsBlank, 'UltraCalcFunctionIsBlank', BuiltInFunctionBase.$);
    return UltraCalcFunctionIsBlank;
}(BuiltInFunctionBase));
export { UltraCalcFunctionIsBlank };
/**
 * @hidden
 */
var UltraCalcFunctionIsErr = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionIsErr, _super);
    function UltraCalcFunctionIsErr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionIsErr.prototype.evaluate = function (a, b) {
        var c = a.pop();
        return new ExcelCalcValue(c.isError && c.toErrorValue().code != 3);
    };
    UltraCalcFunctionIsErr.prototype.get_name = function () {
        return "iserr";
    };
    Object.defineProperty(UltraCalcFunctionIsErr.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsErr.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIsErr.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsErr.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIsErr.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsErr.$t = markType(UltraCalcFunctionIsErr, 'UltraCalcFunctionIsErr', BuiltInFunctionBase.$);
    return UltraCalcFunctionIsErr;
}(BuiltInFunctionBase));
export { UltraCalcFunctionIsErr };
/**
 * @hidden
 */
var UltraCalcFunctionIsError = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionIsError, _super);
    function UltraCalcFunctionIsError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionIsError.prototype.evaluate = function (a, b) {
        var c = a.pop();
        return new ExcelCalcValue(c.isError);
    };
    UltraCalcFunctionIsError.prototype.get_name = function () {
        return "iserror";
    };
    Object.defineProperty(UltraCalcFunctionIsError.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsError.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIsError.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsError.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIsError.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsError.$t = markType(UltraCalcFunctionIsError, 'UltraCalcFunctionIsError', BuiltInFunctionBase.$);
    return UltraCalcFunctionIsError;
}(BuiltInFunctionBase));
export { UltraCalcFunctionIsError };
/**
 * @hidden
 */
var UltraCalcFunctionIsLogical = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionIsLogical, _super);
    function UltraCalcFunctionIsLogical() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionIsLogical.prototype.evaluate = function (a, b) {
        var c = a.pop();
        return new ExcelCalcValue(c.isBoolean);
    };
    UltraCalcFunctionIsLogical.prototype.get_name = function () {
        return "islogical";
    };
    Object.defineProperty(UltraCalcFunctionIsLogical.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsLogical.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIsLogical.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsLogical.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIsLogical.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsLogical.$t = markType(UltraCalcFunctionIsLogical, 'UltraCalcFunctionIsLogical', BuiltInFunctionBase.$);
    return UltraCalcFunctionIsLogical;
}(BuiltInFunctionBase));
export { UltraCalcFunctionIsLogical };
/**
 * @hidden
 */
var UltraCalcFunctionIsNa = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionIsNa, _super);
    function UltraCalcFunctionIsNa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionIsNa.prototype.evaluate = function (a, b) {
        var c = a.pop();
        return new ExcelCalcValue(c.isError && c.toErrorValue().code == 3);
    };
    UltraCalcFunctionIsNa.prototype.get_name = function () {
        return "isna";
    };
    Object.defineProperty(UltraCalcFunctionIsNa.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsNa.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIsNa.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsNa.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIsNa.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsNa.$t = markType(UltraCalcFunctionIsNa, 'UltraCalcFunctionIsNa', BuiltInFunctionBase.$);
    return UltraCalcFunctionIsNa;
}(BuiltInFunctionBase));
export { UltraCalcFunctionIsNa };
/**
 * @hidden
 */
var UltraCalcFunctionIsNonText = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionIsNonText, _super);
    function UltraCalcFunctionIsNonText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionIsNonText.prototype.evaluate = function (a, b) {
        var c = a.pop();
        return new ExcelCalcValue(!c.isString);
    };
    UltraCalcFunctionIsNonText.prototype.get_name = function () {
        return "isnontext";
    };
    Object.defineProperty(UltraCalcFunctionIsNonText.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsNonText.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIsNonText.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsNonText.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIsNonText.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsNonText.$t = markType(UltraCalcFunctionIsNonText, 'UltraCalcFunctionIsNonText', BuiltInFunctionBase.$);
    return UltraCalcFunctionIsNonText;
}(BuiltInFunctionBase));
export { UltraCalcFunctionIsNonText };
/**
 * @hidden
 */
var UltraCalcFunctionIsNumber = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionIsNumber, _super);
    function UltraCalcFunctionIsNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionIsNumber.prototype.evaluate = function (a, b) {
        var c = a.count();
        var d = a.pop();
        if (true) {
            if (d.isNull) {
                return new ExcelCalcValue(false);
            }
        }
        var e;
        return new ExcelCalcValue(((function () { var f = d._toDouble1(e); e = f.p0; return f.ret; })()));
    };
    UltraCalcFunctionIsNumber.prototype.get_name = function () {
        return "isnumber";
    };
    Object.defineProperty(UltraCalcFunctionIsNumber.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsNumber.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIsNumber.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsNumber.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIsNumber.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsNumber.$t = markType(UltraCalcFunctionIsNumber, 'UltraCalcFunctionIsNumber', BuiltInFunctionBase.$);
    return UltraCalcFunctionIsNumber;
}(BuiltInFunctionBase));
export { UltraCalcFunctionIsNumber };
/**
 * @hidden
 */
var UltraCalcFunctionIsRef = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionIsRef, _super);
    function UltraCalcFunctionIsRef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionIsRef.prototype.evaluate = function (a, b) {
        var c = a.pop();
        return new ExcelCalcValue(c.isReference);
    };
    UltraCalcFunctionIsRef.prototype.get_name = function () {
        return "isref";
    };
    Object.defineProperty(UltraCalcFunctionIsRef.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsRef.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIsRef.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsRef.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIsRef.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsRef.$t = markType(UltraCalcFunctionIsRef, 'UltraCalcFunctionIsRef', BuiltInFunctionBase.$);
    return UltraCalcFunctionIsRef;
}(BuiltInFunctionBase));
export { UltraCalcFunctionIsRef };
/**
 * @hidden
 */
var UltraCalcFunctionIsText = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionIsText, _super);
    function UltraCalcFunctionIsText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionIsText.prototype.evaluate = function (a, b) {
        var c = a.pop();
        return new ExcelCalcValue(c.isString);
    };
    UltraCalcFunctionIsText.prototype.get_name = function () {
        return "istext";
    };
    Object.defineProperty(UltraCalcFunctionIsText.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsText.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIsText.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsText.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIsText.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsText.$t = markType(UltraCalcFunctionIsText, 'UltraCalcFunctionIsText', BuiltInFunctionBase.$);
    return UltraCalcFunctionIsText;
}(BuiltInFunctionBase));
export { UltraCalcFunctionIsText };
/**
 * @hidden
 */
var UltraCalcFunctionIsEven = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionIsEven, _super);
    function UltraCalcFunctionIsEven() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionIsEven.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d;
        if (!((function () { var e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        d = Math.floor(d);
        return new ExcelCalcValue(d % 2 == 0);
    };
    UltraCalcFunctionIsEven.prototype.get_name = function () {
        return "iseven";
    };
    Object.defineProperty(UltraCalcFunctionIsEven.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsEven.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIsEven.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsEven.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIsEven.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsEven.$t = markType(UltraCalcFunctionIsEven, 'UltraCalcFunctionIsEven', BuiltInFunctionBase.$);
    return UltraCalcFunctionIsEven;
}(BuiltInFunctionBase));
export { UltraCalcFunctionIsEven };
/**
 * @hidden
 */
var UltraCalcFunctionIsOdd = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionIsOdd, _super);
    function UltraCalcFunctionIsOdd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionIsOdd.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d;
        if (!((function () { var e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        d = Math.floor(d);
        var e = truncate((d % 2));
        return new ExcelCalcValue(1 == e || -1 == e);
    };
    UltraCalcFunctionIsOdd.prototype.get_name = function () {
        return "isodd";
    };
    Object.defineProperty(UltraCalcFunctionIsOdd.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsOdd.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIsOdd.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsOdd.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIsOdd.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsOdd.$t = markType(UltraCalcFunctionIsOdd, 'UltraCalcFunctionIsOdd', BuiltInFunctionBase.$);
    return UltraCalcFunctionIsOdd;
}(BuiltInFunctionBase));
export { UltraCalcFunctionIsOdd };
/**
 * @hidden
 */
var UltraCalcFunctionIRR = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionIRR, _super);
    function UltraCalcFunctionIRR() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionIRR.prototype.evaluate = function (a, b) {
        var e_4, _e;
        var c = 1E-07;
        var d = 0.1;
        if (b == 2) {
            var e_5 = a.pop();
            if (!((function () { var f = e_5._toDouble1(d); d = f.p0; return f.ret; })())) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            if (Math.abs(d) < c) {
                d = 0.1;
            }
        }
        d += 1;
        var f = a.pop();
        if (f._s == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        var g = 0;
        var h = 0;
        var i = 0;
        for (var j = 0; j < 20; ++j) {
            var k = true;
            var l = 0;
            var m = false;
            var n = false;
            var o = f.toArrayProxy();
            var _loop_3 = function (p) {
                if (!((function () { var q = p._toDouble1(i); i = q.p0; return q.ret; })())) {
                    return "continue";
                }
                if (i < 0) {
                    n = true;
                }
                else if (0 < i) {
                    m = true;
                }
                l++;
                if (k) {
                    g = i;
                    h = 0;
                    k = false;
                }
                else {
                    h = g + (h * d);
                    g = i + (g * d);
                }
            };
            try {
                for (var _h = tslib_1.__values(fromEnum(o)), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var p = _j.value;
                    _loop_3(p);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_e = _h.return)) _e.call(_h);
                }
                finally { if (e_4) throw e_4.error; }
            }
            if (l < 2 || n == false || m == false) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            var q = g / h;
            d -= q;
            if (Math.abs(q) < c) {
                return new ExcelCalcValue(d - 1);
            }
            if (Math.abs(d) < c) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
        }
        return new ExcelCalcValue(new ExcelCalcErrorValue(4));
    };
    UltraCalcFunctionIRR.prototype.canParameterBeEnumerable = function (a) {
        return a == 0;
    };
    UltraCalcFunctionIRR.prototype.get_name = function () {
        return "irr";
    };
    Object.defineProperty(UltraCalcFunctionIRR.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIRR.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIRR.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIRR.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionIRR.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIRR.$t = markType(UltraCalcFunctionIRR, 'UltraCalcFunctionIRR', BuiltInFunctionBase.$);
    return UltraCalcFunctionIRR;
}(BuiltInFunctionBase));
export { UltraCalcFunctionIRR };
/**
 * @hidden
 */
var UltraCalcFunctionRate = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionRate, _super);
    function UltraCalcFunctionRate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionRate.prototype.evaluate = function (a, b) {
        var c = 0;
        var d = 0;
        var e = 0;
        var f = 0;
        var g = 0;
        var h = 0.1;
        if (b < 3 || b > 6) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        if (b == 6 && !((function () { var i = a.pop()._toDouble1(h); h = i.p0; return i.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (b >= 5) {
            g = a.pop()._toInt();
            if (g < 0 || g > 1) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
        }
        if (b >= 4 && !((function () { var i = a.pop()._toDouble1(c); c = i.p0; return i.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (b >= 3) {
            if (!((function () { var i = a.pop()._toDouble1(d); d = i.p0; return i.ret; })()) || !((function () { var i = a.pop()._toDouble1(e); e = i.p0; return i.ret; })()) || !((function () { var i = a.pop()._toDouble1(f); f = i.p0; return i.ret; })())) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            if (f <= 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
        }
        var i = function (j) { return c + e * (1 + j * g) * (Math.pow(1 + j, f) - 1) / j + d * Math.pow(1 + j, f); };
        var j = function (k) { return (e * (f * k * Math.pow(1 + k, f - 1 + g) - Math.pow(1 + k, f) + 1) / (k * k)) + f * d * Math.pow(1 + k, f - 1); };
        var k = 1E-08;
        var l = h;
        for (var m = 0; m < 40; m++) {
            var n = i(l);
            var o = j(l);
            if (Math.abs(o) <= 4.94065645841247E-324) {
                break;
            }
            var p = l - n / o;
            if (Math.abs(p - l) <= k) {
                return new ExcelCalcValue(p);
            }
            l = p;
        }
        return new ExcelCalcValue(new ExcelCalcErrorValue(4));
    };
    UltraCalcFunctionRate.prototype.get_name = function () {
        return "rate";
    };
    Object.defineProperty(UltraCalcFunctionRate.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRate.prototype.get_minArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionRate.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRate.prototype.get_maxArgs = function () {
        return 6;
    };
    Object.defineProperty(UltraCalcFunctionRate.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRate.$t = markType(UltraCalcFunctionRate, 'UltraCalcFunctionRate', BuiltInFunctionBase.$);
    return UltraCalcFunctionRate;
}(BuiltInFunctionBase));
export { UltraCalcFunctionRate };
/**
 * @hidden
 */
var UltraCalcFunctionIsNull = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionIsNull, _super);
    function UltraCalcFunctionIsNull() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionIsNull.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isReference) {
            c = c.toReference().value;
        }
        return new ExcelCalcValue(c.value == null);
    };
    UltraCalcFunctionIsNull.prototype.get_name = function () {
        return "isnull";
    };
    Object.defineProperty(UltraCalcFunctionIsNull.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsNull.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIsNull.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsNull.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIsNull.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsNull.$t = markType(UltraCalcFunctionIsNull, 'UltraCalcFunctionIsNull', BuiltInFunctionBase.$);
    return UltraCalcFunctionIsNull;
}(BuiltInFunctionBase));
export { UltraCalcFunctionIsNull };
/**
 * @hidden
 */
var UltraCalcFunctionNull = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionNull, _super);
    function UltraCalcFunctionNull() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionNull.prototype.evaluate = function (a, b) {
        return new ExcelCalcValue(null);
    };
    UltraCalcFunctionNull.prototype.get_name = function () {
        return "null";
    };
    Object.defineProperty(UltraCalcFunctionNull.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionNull.prototype.get_minArgs = function () {
        return 0;
    };
    Object.defineProperty(UltraCalcFunctionNull.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionNull.prototype.get_maxArgs = function () {
        return 0;
    };
    Object.defineProperty(UltraCalcFunctionNull.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionNull.$t = markType(UltraCalcFunctionNull, 'UltraCalcFunctionNull', BuiltInFunctionBase.$);
    return UltraCalcFunctionNull;
}(BuiltInFunctionBase));
export { UltraCalcFunctionNull };
/**
 * @hidden
 */
var UltraCalcFunctionIsDBNull = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionIsDBNull, _super);
    function UltraCalcFunctionIsDBNull() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionIsDBNull.prototype.evaluate = function (a, b) {
        return new ExcelCalcValue(a.pop().isDBNull);
    };
    UltraCalcFunctionIsDBNull.prototype.get_name = function () {
        return "isdbnull";
    };
    Object.defineProperty(UltraCalcFunctionIsDBNull.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsDBNull.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIsDBNull.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsDBNull.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIsDBNull.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsDBNull.$t = markType(UltraCalcFunctionIsDBNull, 'UltraCalcFunctionIsDBNull', BuiltInFunctionBase.$);
    return UltraCalcFunctionIsDBNull;
}(BuiltInFunctionBase));
export { UltraCalcFunctionIsDBNull };
/**
 * @hidden
 */
var UltraCalcFunctionDBNull = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionDBNull, _super);
    function UltraCalcFunctionDBNull() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionDBNull.prototype.evaluate = function (a, b) {
        return new ExcelCalcValue(null);
    };
    UltraCalcFunctionDBNull.prototype.get_name = function () {
        return "dbnull";
    };
    Object.defineProperty(UltraCalcFunctionDBNull.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDBNull.prototype.get_minArgs = function () {
        return 0;
    };
    Object.defineProperty(UltraCalcFunctionDBNull.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDBNull.prototype.get_maxArgs = function () {
        return 0;
    };
    Object.defineProperty(UltraCalcFunctionDBNull.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDBNull.$t = markType(UltraCalcFunctionDBNull, 'UltraCalcFunctionDBNull', BuiltInFunctionBase.$);
    return UltraCalcFunctionDBNull;
}(BuiltInFunctionBase));
export { UltraCalcFunctionDBNull };
/**
 * @hidden
 */
var UltraCalcFunctionDateAdd = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionDateAdd, _super);
    function UltraCalcFunctionDateAdd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionDateAdd.prototype.evaluate = function (a, b) {
        var c = a.pop()._toDateTime1();
        var d;
        if (!((function () { var e = a.pop()._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var e = a.pop().toString().toLowerCase().trim();
        var f = CalcManagerUtilities.c(e, d, c);
        return new ExcelCalcValue(f);
    };
    UltraCalcFunctionDateAdd.prototype.get_name = function () {
        return "dateadd";
    };
    Object.defineProperty(UltraCalcFunctionDateAdd.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDateAdd.prototype.get_minArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionDateAdd.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDateAdd.prototype.get_maxArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionDateAdd.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDateAdd.$t = markType(UltraCalcFunctionDateAdd, 'UltraCalcFunctionDateAdd', BuiltInFunctionBase.$);
    return UltraCalcFunctionDateAdd;
}(BuiltInFunctionBase));
export { UltraCalcFunctionDateAdd };
/**
 * @hidden
 */
var UltraCalcFunctionDateDiff = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionDateDiff, _super);
    function UltraCalcFunctionDateDiff() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionDateDiff.prototype.evaluate = function (a, b) {
        var c = a.pop();
        var d = a.pop();
        var e = a.pop().toString().toLowerCase().trim();
        if (c.isNull || d.isNull) {
            var f = new ExcelCalcErrorValue(4);
            return new ExcelCalcValue(f);
        }
        var g = c._toDateTime1();
        var h = d._toDateTime1();
        var i = UltraCalcFunctionDateDiff._an(a._w, e, h, g);
        return new ExcelCalcValue(i);
    };
    UltraCalcFunctionDateDiff._al = function (a) {
        if (a >= 0) {
            return Math.floor(a);
        }
        return -Math.floor(-a);
    };
    UltraCalcFunctionDateDiff.prototype.get_name = function () {
        return "datediff";
    };
    Object.defineProperty(UltraCalcFunctionDateDiff.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDateDiff.prototype.get_minArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionDateDiff.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDateDiff.prototype.get_maxArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionDateDiff.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDateDiff._ak = function (a) {
        switch (a) {
            case 2: return 2;
            case 1: return 3;
            case 0:
            default: return 1;
        }
    };
    UltraCalcFunctionDateDiff._an = function (a, b, c, d) {
        var e = 1;
        var f = UltraCalcFunctionDateDiff._ak(0);
        var g = CalcManagerUtilities.e(b, c, d, e, f);
        return g;
    };
    UltraCalcFunctionDateDiff._am = function (a, b, c, d) {
        var e = 1;
        var f = UltraCalcFunctionDateDiff._ak(0);
        var g = CalcManagerUtilities.d(b, c, d, e, f);
        return g;
    };
    UltraCalcFunctionDateDiff.$t = markType(UltraCalcFunctionDateDiff, 'UltraCalcFunctionDateDiff', BuiltInFunctionBase.$);
    return UltraCalcFunctionDateDiff;
}(BuiltInFunctionBase));
export { UltraCalcFunctionDateDiff };
/**
 * @hidden
 */
var UltraCalcFunctionChar = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionChar, _super);
    function UltraCalcFunctionChar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionChar.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d = c._toInt321();
        return new ExcelCalcValue(Convert.toChar1(d));
    };
    UltraCalcFunctionChar.prototype.get_name = function () {
        return "char";
    };
    Object.defineProperty(UltraCalcFunctionChar.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionChar.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionChar.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionChar.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionChar.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionChar.$t = markType(UltraCalcFunctionChar, 'UltraCalcFunctionChar', BuiltInFunctionBase.$);
    return UltraCalcFunctionChar;
}(BuiltInFunctionBase));
export { UltraCalcFunctionChar };
/**
 * @hidden
 */
var UltraCalcFunctionCode = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionCode, _super);
    function UltraCalcFunctionCode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionCode.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d = c.toString();
        if (d == null || d.length == 0) {
            return new ExcelCalcValue(0);
        }
        return new ExcelCalcValue(d.charAt(0).charCodeAt(0));
    };
    UltraCalcFunctionCode.prototype.get_name = function () {
        return "code";
    };
    Object.defineProperty(UltraCalcFunctionCode.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCode.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionCode.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCode.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionCode.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCode.$t = markType(UltraCalcFunctionCode, 'UltraCalcFunctionCode', BuiltInFunctionBase.$);
    return UltraCalcFunctionCode;
}(BuiltInFunctionBase));
export { UltraCalcFunctionCode };
/**
 * @hidden
 */
var UltraCalcFunctionFixed = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionFixed, _super);
    function UltraCalcFunctionFixed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionFixed.prototype.evaluate = function (a, b) {
        var c = 0;
        var d = 2;
        var e = false;
        var f = new StringBuilder(1, 100);
        var g;
        if (2 < b) {
            g = a.pop();
            if (g.isError) {
                return new ExcelCalcValue(g.toErrorValue());
            }
            e = g._toBoolean1();
        }
        if (1 < b) {
            g = a.pop();
            if (g.isError) {
                return new ExcelCalcValue(g.toErrorValue());
            }
            d = g._toInt();
        }
        g = a.pop();
        if (g.isError) {
            return new ExcelCalcValue(g.toErrorValue());
        }
        c = g._toDouble3();
        var h = (c.toLocaleString(a._w.name, { minimumFractionDigits: d, maximumFractionDigits: d, useGrouping: e }));
        if (h == null || h.length == 0) {
            h = "0";
        }
        return new ExcelCalcValue(h);
    };
    UltraCalcFunctionFixed.prototype.get_name = function () {
        return "fixed";
    };
    Object.defineProperty(UltraCalcFunctionFixed.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFixed.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionFixed.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFixed.prototype.get_maxArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionFixed.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFixed.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionFixed.$t = markType(UltraCalcFunctionFixed, 'UltraCalcFunctionFixed', BuiltInFunctionBase.$);
    return UltraCalcFunctionFixed;
}(BuiltInFunctionBase));
export { UltraCalcFunctionFixed };
/**
 * @hidden
 */
var UltraCalcFunctionToday = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionToday, _super);
    function UltraCalcFunctionToday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionToday.prototype.evaluate = function (a, b) {
        return new ExcelCalcValue(dateToday());
    };
    UltraCalcFunctionToday.prototype.get_name = function () {
        return "today";
    };
    Object.defineProperty(UltraCalcFunctionToday.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionToday.prototype.get_minArgs = function () {
        return 0;
    };
    Object.defineProperty(UltraCalcFunctionToday.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionToday.prototype.get_maxArgs = function () {
        return 0;
    };
    Object.defineProperty(UltraCalcFunctionToday.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionToday.$t = markType(UltraCalcFunctionToday, 'UltraCalcFunctionToday', BuiltInFunctionBase.$);
    return UltraCalcFunctionToday;
}(BuiltInFunctionBase));
export { UltraCalcFunctionToday };
/**
 * @hidden
 */
var UltraCalcFunctionASinh = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionASinh, _super);
    function UltraCalcFunctionASinh() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionASinh.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d;
        if (!((function () { var e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var e = Math.log(d + Math.sqrt((d * d) + 1));
        return new ExcelCalcValue(e);
    };
    UltraCalcFunctionASinh.prototype.get_name = function () {
        return "asinh";
    };
    Object.defineProperty(UltraCalcFunctionASinh.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionASinh.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionASinh.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionASinh.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionASinh.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionASinh.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionASinh.$t = markType(UltraCalcFunctionASinh, 'UltraCalcFunctionASinh', BuiltInFunctionBase.$);
    return UltraCalcFunctionASinh;
}(BuiltInFunctionBase));
export { UltraCalcFunctionASinh };
/**
 * @hidden
 */
var UltraCalcFunctionATanh = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionATanh, _super);
    function UltraCalcFunctionATanh() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionATanh.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d;
        if (!((function () { var e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var e;
        if (1 == d) {
            e = Number.POSITIVE_INFINITY;
        }
        else if (-1 == d) {
            e = Number.NEGATIVE_INFINITY;
        }
        else {
            e = Math.log((1 + d) / (1 - d)) / 2;
        }
        return new ExcelCalcValue(e);
    };
    UltraCalcFunctionATanh.prototype.get_name = function () {
        return "atanh";
    };
    Object.defineProperty(UltraCalcFunctionATanh.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionATanh.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionATanh.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionATanh.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionATanh.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionATanh.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionATanh.$t = markType(UltraCalcFunctionATanh, 'UltraCalcFunctionATanh', BuiltInFunctionBase.$);
    return UltraCalcFunctionATanh;
}(BuiltInFunctionBase));
export { UltraCalcFunctionATanh };
/**
 * @hidden
 */
var UltraCalcFunctionACosh = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionACosh, _super);
    function UltraCalcFunctionACosh() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionACosh.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d;
        if (!((function () { var e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (d < 1) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var e = Math.log(d + Math.sqrt((d * d) - 1));
        return new ExcelCalcValue(e);
    };
    UltraCalcFunctionACosh.prototype.get_name = function () {
        return "acosh";
    };
    Object.defineProperty(UltraCalcFunctionACosh.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionACosh.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionACosh.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionACosh.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionACosh.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionACosh.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionACosh.$t = markType(UltraCalcFunctionACosh, 'UltraCalcFunctionACosh', BuiltInFunctionBase.$);
    return UltraCalcFunctionACosh;
}(BuiltInFunctionBase));
export { UltraCalcFunctionACosh };
/**
 * @hidden
 */
var UltraCalcFunctionEDate = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionEDate, _super);
    function UltraCalcFunctionEDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionEDate.prototype.evaluate = function (a, b) {
        var c = a.pop()._toDouble3();
        var d = dateGetDate(a.pop()._toDateTime1());
        d = CalcManagerUtilities.b(2, c, d);
        return new ExcelCalcValue(d);
    };
    UltraCalcFunctionEDate.prototype.get_name = function () {
        return "edate";
    };
    Object.defineProperty(UltraCalcFunctionEDate.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionEDate.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionEDate.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionEDate.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionEDate.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionEDate.$t = markType(UltraCalcFunctionEDate, 'UltraCalcFunctionEDate', BuiltInFunctionBase.$);
    return UltraCalcFunctionEDate;
}(BuiltInFunctionBase));
export { UltraCalcFunctionEDate };
/**
 * @hidden
 */
var UltraCalcFunctionEOMonth = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionEOMonth, _super);
    function UltraCalcFunctionEOMonth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionEOMonth.prototype.evaluate = function (a, b) {
        var c = a.pop()._toDouble3();
        var d = dateGetDate(a.pop()._toDateTime1());
        d = CalcManagerUtilities.b(2, c, d);
        d = dateFromValues(d.getFullYear(), dateGetMonth(d), daysInMonth(d.getFullYear(), dateGetMonth(d)), 0, 0, 0, 0);
        return new ExcelCalcValue(d);
    };
    UltraCalcFunctionEOMonth.prototype.get_name = function () {
        return "eomonth";
    };
    Object.defineProperty(UltraCalcFunctionEOMonth.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionEOMonth.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionEOMonth.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionEOMonth.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionEOMonth.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionEOMonth.$t = markType(UltraCalcFunctionEOMonth, 'UltraCalcFunctionEOMonth', BuiltInFunctionBase.$);
    return UltraCalcFunctionEOMonth;
}(BuiltInFunctionBase));
export { UltraCalcFunctionEOMonth };
/**
 * @hidden
 */
var UltraCalcFunctionWeekDay = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionWeekDay, _super);
    function UltraCalcFunctionWeekDay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionWeekDay.prototype.evaluate = function (a, b) {
        var c = (b == 2) ? a.pop()._toInt321() : 1;
        var d = dateGetDate(a.pop()._toDateTime1());
        if (true) {
            if (d <= dateFromValues(1900, 3, 1, 0, 0, 0, 0)) {
                d = dateAddDays(d, -1);
            }
        }
        var e = d.getDay();
        var f = e;
        switch (c) {
            case 1:
                f++;
                break;
            case 2:
                if (e == 0) {
                    f += 7;
                }
                break;
            case 3:
                f += (e != 0) ? -1 : 6;
                break;
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
                f = (f + 7 - (c - 10)) % 7 + 1;
                break;
            default: return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(f);
    };
    UltraCalcFunctionWeekDay.prototype.get_name = function () {
        return "weekday";
    };
    Object.defineProperty(UltraCalcFunctionWeekDay.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionWeekDay.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionWeekDay.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionWeekDay.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionWeekDay.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionWeekDay.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionWeekDay.$t = markType(UltraCalcFunctionWeekDay, 'UltraCalcFunctionWeekDay', BuiltInFunctionBase.$);
    return UltraCalcFunctionWeekDay;
}(BuiltInFunctionBase));
export { UltraCalcFunctionWeekDay };
/**
 * @hidden
 */
var UltraCalcFunctionNetWorkDays = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionNetWorkDays, _super);
    function UltraCalcFunctionNetWorkDays() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionNetWorkDays.prototype.evaluate = function (a, b) {
        var e_6, _e;
        var c = this._getArguments(a, b - 2, true);
        var d;
        var e;
        var f = ((function () { var g = UltraCalcFunctionWorkDay._ak(c, d, e); d = g.p1; e = g.p2; return g.ret; })());
        if (f == false) {
            return e;
        }
        var g = dateGetDate(a.pop()._toDateTime1());
        var h = dateGetDate(a.pop()._toDateTime1());
        var i = 1;
        if (h > g) {
            i = -1;
            var j = h;
            h = g;
            g = j;
        }
        var k = UltraCalcFunctionDateDiff._am(a._w, 4, h, g);
        k += 1;
        if (k > 0) {
            var l = (intDivide(k, 7));
            var m = (k % 7);
            k -= (l * 2);
            switch (h.getDay()) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    var n = 8 - h.getDay();
                    if (m >= n) {
                        k -= Math.min(2, n);
                    }
                    else if (m == (n - 1)) {
                        k -= Math.min(1, n);
                    }
                    break;
                case 0:
                    if (m >= 1) {
                        k -= 1;
                    }
                    break;
                default: break;
            }
            if (d != null) {
                try {
                    for (var _h = tslib_1.__values(fromEnum(d.keys)), _j = _h.next(); !_j.done; _j = _h.next()) {
                        var o = _j.value;
                        if (o >= h && o <= g) {
                            k -= 1;
                        }
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (_j && !_j.done && (_e = _h.return)) _e.call(_h);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
            }
            k *= i;
        }
        return new ExcelCalcValue(k);
    };
    UltraCalcFunctionNetWorkDays.prototype.canParameterBeEnumerable = function (a) {
        return a == 2;
    };
    UltraCalcFunctionNetWorkDays.prototype.get_name = function () {
        return "networkdays";
    };
    Object.defineProperty(UltraCalcFunctionNetWorkDays.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionNetWorkDays.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionNetWorkDays.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionNetWorkDays.prototype.get_maxArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionNetWorkDays.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionNetWorkDays.$t = markType(UltraCalcFunctionNetWorkDays, 'UltraCalcFunctionNetWorkDays', BuiltInFunctionBase.$);
    return UltraCalcFunctionNetWorkDays;
}(BuiltInFunctionBase));
export { UltraCalcFunctionNetWorkDays };
/**
 * @hidden
 */
var UltraCalcFunctionWeekNum = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionWeekNum, _super);
    function UltraCalcFunctionWeekNum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionWeekNum.prototype.evaluate = function (a, b) {
        var c = (b == 2) ? a.pop()._toInt321() : 1;
        var d;
        switch (c) {
            case 1:
                d = 0;
                break;
            case 2:
                d = 1;
                break;
            default: return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var e = dateGetDate(a.pop()._toDateTime1());
        var f = dateFromValues(e.getFullYear(), 1, 1, 0, 0, 0, 0);
        var g = f;
        while (g.getDay() != d) {
            g = dateAddDays(g, 1);
        }
        var h = (intDivide((timeSpanDays((+e - +g))), 7)) + 1;
        if (+f != +g && e >= g) {
            h += 1;
        }
        return new ExcelCalcValue(h);
    };
    UltraCalcFunctionWeekNum.prototype.get_name = function () {
        return "weeknum";
    };
    Object.defineProperty(UltraCalcFunctionWeekNum.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionWeekNum.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionWeekNum.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionWeekNum.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionWeekNum.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionWeekNum.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionWeekNum.$t = markType(UltraCalcFunctionWeekNum, 'UltraCalcFunctionWeekNum', BuiltInFunctionBase.$);
    return UltraCalcFunctionWeekNum;
}(BuiltInFunctionBase));
export { UltraCalcFunctionWeekNum };
/**
 * @hidden
 */
var UltraCalcFunctionWorkDay = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionWorkDay, _super);
    function UltraCalcFunctionWorkDay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionWorkDay.prototype.evaluate = function (a, b) {
        var c = this._getArguments(a, b - 2, true);
        var d;
        var e;
        var f = ((function () { var g = UltraCalcFunctionWorkDay._ak(c, d, e); d = g.p1; e = g.p2; return g.ret; })());
        if (f == false) {
            return e;
        }
        var g = a.pop()._toInt321();
        var h = dateGetDate(a.pop()._toDateTime1());
        var i = h;
        var j = Math.abs(g);
        var k = 0;
        if (g != 0) {
            var l = g < 0 ? -1 : 1;
            do {
                i = dateAddDays(i, l);
                k += this._an(i, d) ? 1 : 0;
            } while (k < j);
        }
        return new ExcelCalcValue(i);
    };
    UltraCalcFunctionWorkDay.prototype.canParameterBeEnumerable = function (a) {
        return a == 2;
    };
    UltraCalcFunctionWorkDay.prototype._an = function (a, b) {
        if (UltraCalcFunctionWorkDay._al(a)) {
            return false;
        }
        if (b != null && b.containsKey(a)) {
            return false;
        }
        return true;
    };
    UltraCalcFunctionWorkDay.prototype.get_name = function () {
        return "workday";
    };
    Object.defineProperty(UltraCalcFunctionWorkDay.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionWorkDay.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionWorkDay.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionWorkDay.prototype.get_maxArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionWorkDay.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionWorkDay._ak = function (a, b, c) {
        if (a.length > 0) {
            b = new Dictionary$2(Date_$type, Base.$, 1, a.length);
            for (var e = 0; e < a.length; e++) {
                var d = a[e];
                if (d.isError) {
                    c = new ExcelCalcValue(d.toErrorValue());
                    return {
                        ret: false,
                        p1: b,
                        p2: c
                    };
                }
                var f = dateGetDate(d._toDateTime1());
                if (UltraCalcFunctionWorkDay._al(f) == false) {
                    if (b.containsKey(f) == false) {
                        b.addItem(f, null);
                    }
                }
            }
        }
        else {
            b = null;
        }
        c = null;
        return {
            ret: true,
            p1: b,
            p2: c
        };
    };
    UltraCalcFunctionWorkDay._al = function (a) {
        return UltraCalcFunctionWorkDay._am(a.getDay());
    };
    UltraCalcFunctionWorkDay._am = function (a) {
        return a == 6 || a == 0;
    };
    UltraCalcFunctionWorkDay.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionWorkDay.$t = markType(UltraCalcFunctionWorkDay, 'UltraCalcFunctionWorkDay', BuiltInFunctionBase.$);
    return UltraCalcFunctionWorkDay;
}(BuiltInFunctionBase));
export { UltraCalcFunctionWorkDay };
/**
 * @hidden
 */
var UltraCalcFunctionDec2XBase = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionDec2XBase, _super);
    function UltraCalcFunctionDec2XBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionDec2XBase.prototype.evaluate = function (a, b) {
        var c = 0;
        if (b == 2) {
            var d = a.pop()._toInt321();
            if (d <= 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            else {
                c = d;
            }
        }
        var e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        var f = e._toInt641();
        if (f < this._ap || f > this._al) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var g = UltraCalcFunctionDec2XBase._at(f, this._ak, this._ap, this._al);
        if (c > 0) {
            if (g.length < 10 && g.length > c) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
        }
        else {
            c = 1;
        }
        while (g.length < c) {
            g = stringFormat("{0}{1}", "0", g);
        }
        return new ExcelCalcValue(g);
    };
    UltraCalcFunctionDec2XBase.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionDec2XBase.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDec2XBase.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionDec2XBase.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDec2XBase._at = function (a, b, c, d) {
        var e = false;
        if (a < 0) {
            a -= c;
            e = true;
        }
        a &= d;
        if (e) {
            a |= (-c);
        }
        var f = stringEmpty();
        if (a == 0) {
            f = "0";
        }
        while (a > 0) {
            var g = a % b;
            var h = void 0;
            if (g < 10) {
                h = g.toString();
            }
            else {
                g = g - 10;
                h = String.fromCharCode((g + 65)).toString();
            }
            f = stringFormat("{0}{1}", h, f);
            a = intDivide(a, b);
        }
        return f;
    };
    UltraCalcFunctionDec2XBase.$t = markType(UltraCalcFunctionDec2XBase, 'UltraCalcFunctionDec2XBase', BuiltInFunctionBase.$);
    return UltraCalcFunctionDec2XBase;
}(BuiltInFunctionBase));
export { UltraCalcFunctionDec2XBase };
/**
 * @hidden
 */
var UltraCalcFunctionDec2Bin = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionDec2Bin, _super);
    function UltraCalcFunctionDec2Bin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionDec2Bin.prototype.get_name = function () {
        return "dec2bin";
    };
    Object.defineProperty(UltraCalcFunctionDec2Bin.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDec2Bin.prototype.get__ap = function () {
        return -512;
    };
    Object.defineProperty(UltraCalcFunctionDec2Bin.prototype, "_ap", {
        get: function () {
            return this.get__ap();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDec2Bin.prototype.get__al = function () {
        return 511;
    };
    Object.defineProperty(UltraCalcFunctionDec2Bin.prototype, "_al", {
        get: function () {
            return this.get__al();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDec2Bin.prototype.get__ak = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionDec2Bin.prototype, "_ak", {
        get: function () {
            return this.get__ak();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDec2Bin.$t = markType(UltraCalcFunctionDec2Bin, 'UltraCalcFunctionDec2Bin', UltraCalcFunctionDec2XBase.$);
    return UltraCalcFunctionDec2Bin;
}(UltraCalcFunctionDec2XBase));
export { UltraCalcFunctionDec2Bin };
/**
 * @hidden
 */
var UltraCalcFunctionDec2Hex = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionDec2Hex, _super);
    function UltraCalcFunctionDec2Hex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionDec2Hex.prototype.get_name = function () {
        return "dec2hex";
    };
    Object.defineProperty(UltraCalcFunctionDec2Hex.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDec2Hex.prototype.get__ap = function () {
        return -549755813888;
    };
    Object.defineProperty(UltraCalcFunctionDec2Hex.prototype, "_ap", {
        get: function () {
            return this.get__ap();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDec2Hex.prototype.get__al = function () {
        return 0x7FFFFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionDec2Hex.prototype, "_al", {
        get: function () {
            return this.get__al();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDec2Hex.prototype.get__ak = function () {
        return 16;
    };
    Object.defineProperty(UltraCalcFunctionDec2Hex.prototype, "_ak", {
        get: function () {
            return this.get__ak();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDec2Hex.$t = markType(UltraCalcFunctionDec2Hex, 'UltraCalcFunctionDec2Hex', UltraCalcFunctionDec2XBase.$);
    return UltraCalcFunctionDec2Hex;
}(UltraCalcFunctionDec2XBase));
export { UltraCalcFunctionDec2Hex };
/**
 * @hidden
 */
var UltraCalcFunctionDec2Oct = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionDec2Oct, _super);
    function UltraCalcFunctionDec2Oct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionDec2Oct.prototype.get_name = function () {
        return "dec2oct";
    };
    Object.defineProperty(UltraCalcFunctionDec2Oct.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDec2Oct.prototype.get__ap = function () {
        return -536870912;
    };
    Object.defineProperty(UltraCalcFunctionDec2Oct.prototype, "_ap", {
        get: function () {
            return this.get__ap();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDec2Oct.prototype.get__al = function () {
        return 536870911;
    };
    Object.defineProperty(UltraCalcFunctionDec2Oct.prototype, "_al", {
        get: function () {
            return this.get__al();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDec2Oct.prototype.get__ak = function () {
        return 8;
    };
    Object.defineProperty(UltraCalcFunctionDec2Oct.prototype, "_ak", {
        get: function () {
            return this.get__ak();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDec2Oct.$t = markType(UltraCalcFunctionDec2Oct, 'UltraCalcFunctionDec2Oct', UltraCalcFunctionDec2XBase.$);
    return UltraCalcFunctionDec2Oct;
}(UltraCalcFunctionDec2XBase));
export { UltraCalcFunctionDec2Oct };
/**
 * @hidden
 */
var UltraCalcFunctionXBase2Dec = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionXBase2Dec, _super);
    function UltraCalcFunctionXBase2Dec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionXBase2Dec.prototype.evaluate = function (a, b) {
        var _this = this;
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d = c.toString();
        if (d.length > this._am) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var e;
        var f = ((function () { var g = UltraCalcFunctionXBase2Dec._al(a._w, d, _this._ak, _this._ao, _this._an, e); e = g.p5; return g.ret; })());
        if (null != e) {
            return new ExcelCalcValue(e);
        }
        return new ExcelCalcValue(f);
    };
    UltraCalcFunctionXBase2Dec.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionXBase2Dec.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionXBase2Dec.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionXBase2Dec.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionXBase2Dec._al = function (a, b, c, d, e, f) {
        f = null;
        b = b.trim();
        var g = 0;
        var h = b.length;
        var i = stringToCharArray(b);
        var j = 1;
        var k = String.fromCharCode(0);
        var _loop_4 = function (l) {
            var m = i[l];
            if (m == '-') {
                return "continue";
            }
            var n;
            var o = ((function () { var p = tryParseInt64_2(m.toString(), 167 | 64, a, n); n = p.p3; return p.ret; })());
            if (o == false) {
                n = m.charCodeAt(0) - 65;
                n += 10;
            }
            if (n >= c) {
                k = m;
                return "continue";
            }
            g += n * j;
            j *= c;
        };
        for (var l = h - 1; l >= 0; l--) {
            _loop_4(l);
        }
        if (0 != k.charCodeAt(0)) {
            f = new ExcelCalcErrorValue(4, ExcelUtils.eg("Error_InvalidNumberSystemDigit", k, b, c));
            return {
                ret: 0,
                p5: f
            };
        }
        if (e < g) {
            g -= (e - d + 1);
        }
        return {
            ret: g,
            p5: f
        };
    };
    UltraCalcFunctionXBase2Dec.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionXBase2Dec.$t = markType(UltraCalcFunctionXBase2Dec, 'UltraCalcFunctionXBase2Dec', BuiltInFunctionBase.$);
    return UltraCalcFunctionXBase2Dec;
}(BuiltInFunctionBase));
export { UltraCalcFunctionXBase2Dec };
/**
 * @hidden
 */
var UltraCalcFunctionBin2Dec = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionBin2Dec, _super);
    function UltraCalcFunctionBin2Dec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionBin2Dec.prototype.get_name = function () {
        return "bin2dec";
    };
    Object.defineProperty(UltraCalcFunctionBin2Dec.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBin2Dec.prototype.get__ao = function () {
        return -512;
    };
    Object.defineProperty(UltraCalcFunctionBin2Dec.prototype, "_ao", {
        get: function () {
            return this.get__ao();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBin2Dec.prototype.get__an = function () {
        return 511;
    };
    Object.defineProperty(UltraCalcFunctionBin2Dec.prototype, "_an", {
        get: function () {
            return this.get__an();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBin2Dec.prototype.get__ak = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionBin2Dec.prototype, "_ak", {
        get: function () {
            return this.get__ak();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBin2Dec.prototype.get__am = function () {
        return 10;
    };
    Object.defineProperty(UltraCalcFunctionBin2Dec.prototype, "_am", {
        get: function () {
            return this.get__am();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBin2Dec.$t = markType(UltraCalcFunctionBin2Dec, 'UltraCalcFunctionBin2Dec', UltraCalcFunctionXBase2Dec.$);
    return UltraCalcFunctionBin2Dec;
}(UltraCalcFunctionXBase2Dec));
export { UltraCalcFunctionBin2Dec };
/**
 * @hidden
 */
var UltraCalcFunctionHex2Dec = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionHex2Dec, _super);
    function UltraCalcFunctionHex2Dec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionHex2Dec.prototype.get_name = function () {
        return "hex2dec";
    };
    Object.defineProperty(UltraCalcFunctionHex2Dec.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionHex2Dec.prototype.get__ao = function () {
        return -549755813888;
    };
    Object.defineProperty(UltraCalcFunctionHex2Dec.prototype, "_ao", {
        get: function () {
            return this.get__ao();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionHex2Dec.prototype.get__an = function () {
        return 0x7FFFFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionHex2Dec.prototype, "_an", {
        get: function () {
            return this.get__an();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionHex2Dec.prototype.get__ak = function () {
        return 16;
    };
    Object.defineProperty(UltraCalcFunctionHex2Dec.prototype, "_ak", {
        get: function () {
            return this.get__ak();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionHex2Dec.prototype.get__am = function () {
        return 10;
    };
    Object.defineProperty(UltraCalcFunctionHex2Dec.prototype, "_am", {
        get: function () {
            return this.get__am();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionHex2Dec.$t = markType(UltraCalcFunctionHex2Dec, 'UltraCalcFunctionHex2Dec', UltraCalcFunctionXBase2Dec.$);
    return UltraCalcFunctionHex2Dec;
}(UltraCalcFunctionXBase2Dec));
export { UltraCalcFunctionHex2Dec };
/**
 * @hidden
 */
var UltraCalcFunctionOct2Dec = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionOct2Dec, _super);
    function UltraCalcFunctionOct2Dec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionOct2Dec.prototype.get_name = function () {
        return "oct2dec";
    };
    Object.defineProperty(UltraCalcFunctionOct2Dec.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionOct2Dec.prototype.get__ao = function () {
        return -536870912;
    };
    Object.defineProperty(UltraCalcFunctionOct2Dec.prototype, "_ao", {
        get: function () {
            return this.get__ao();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionOct2Dec.prototype.get__an = function () {
        return 536870911;
    };
    Object.defineProperty(UltraCalcFunctionOct2Dec.prototype, "_an", {
        get: function () {
            return this.get__an();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionOct2Dec.prototype.get__ak = function () {
        return 8;
    };
    Object.defineProperty(UltraCalcFunctionOct2Dec.prototype, "_ak", {
        get: function () {
            return this.get__ak();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionOct2Dec.prototype.get__am = function () {
        return 10;
    };
    Object.defineProperty(UltraCalcFunctionOct2Dec.prototype, "_am", {
        get: function () {
            return this.get__am();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionOct2Dec.$t = markType(UltraCalcFunctionOct2Dec, 'UltraCalcFunctionOct2Dec', UltraCalcFunctionXBase2Dec.$);
    return UltraCalcFunctionOct2Dec;
}(UltraCalcFunctionXBase2Dec));
export { UltraCalcFunctionOct2Dec };
/**
 * @hidden
 */
var UltraCalcFunctionXBase2XBase = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionXBase2XBase, _super);
    function UltraCalcFunctionXBase2XBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionXBase2XBase.prototype.evaluate = function (a, b) {
        var _this = this;
        var c = 0;
        if (b == 2) {
            var d = a.pop()._toInt321();
            if (d <= 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            else {
                c = d;
            }
        }
        var e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        var f = e.toString();
        if (f.length > this._am) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var g;
        var h = ((function () { var i = UltraCalcFunctionXBase2Dec._al(a._w, f, _this._al, _this._aq, _this._ap, g); g = i.p5; return i.ret; })());
        if (null != g) {
            return new ExcelCalcValue(g);
        }
        if (h < this._ao || this._an < h) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var i = UltraCalcFunctionDec2XBase._at(h, this._ak, this._ao, this._an);
        if (c > 0) {
            if (i.length < 10 && i.length > c) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
        }
        else {
            c = 1;
        }
        while (i.length < c) {
            i = stringFormat("{0}{1}", "0", i);
        }
        return new ExcelCalcValue(i);
    };
    UltraCalcFunctionXBase2XBase.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionXBase2XBase.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionXBase2XBase.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionXBase2XBase.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionXBase2XBase.$t = markType(UltraCalcFunctionXBase2XBase, 'UltraCalcFunctionXBase2XBase', BuiltInFunctionBase.$);
    return UltraCalcFunctionXBase2XBase;
}(BuiltInFunctionBase));
export { UltraCalcFunctionXBase2XBase };
/**
 * @hidden
 */
var UltraCalcFunctionBin2Oct = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionBin2Oct, _super);
    function UltraCalcFunctionBin2Oct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionBin2Oct.prototype.get_name = function () {
        return "bin2oct";
    };
    Object.defineProperty(UltraCalcFunctionBin2Oct.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBin2Oct.prototype.get__aq = function () {
        return -512;
    };
    Object.defineProperty(UltraCalcFunctionBin2Oct.prototype, "_aq", {
        get: function () {
            return this.get__aq();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBin2Oct.prototype.get__ap = function () {
        return 511;
    };
    Object.defineProperty(UltraCalcFunctionBin2Oct.prototype, "_ap", {
        get: function () {
            return this.get__ap();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBin2Oct.prototype.get__ao = function () {
        return -536870912;
    };
    Object.defineProperty(UltraCalcFunctionBin2Oct.prototype, "_ao", {
        get: function () {
            return this.get__ao();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBin2Oct.prototype.get__an = function () {
        return 536870911;
    };
    Object.defineProperty(UltraCalcFunctionBin2Oct.prototype, "_an", {
        get: function () {
            return this.get__an();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBin2Oct.prototype.get__al = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionBin2Oct.prototype, "_al", {
        get: function () {
            return this.get__al();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBin2Oct.prototype.get__ak = function () {
        return 8;
    };
    Object.defineProperty(UltraCalcFunctionBin2Oct.prototype, "_ak", {
        get: function () {
            return this.get__ak();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBin2Oct.prototype.get__am = function () {
        return 10;
    };
    Object.defineProperty(UltraCalcFunctionBin2Oct.prototype, "_am", {
        get: function () {
            return this.get__am();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBin2Oct.$t = markType(UltraCalcFunctionBin2Oct, 'UltraCalcFunctionBin2Oct', UltraCalcFunctionXBase2XBase.$);
    return UltraCalcFunctionBin2Oct;
}(UltraCalcFunctionXBase2XBase));
export { UltraCalcFunctionBin2Oct };
/**
 * @hidden
 */
var UltraCalcFunctionBin2Hex = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionBin2Hex, _super);
    function UltraCalcFunctionBin2Hex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionBin2Hex.prototype.get_name = function () {
        return "bin2hex";
    };
    Object.defineProperty(UltraCalcFunctionBin2Hex.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBin2Hex.prototype.get__aq = function () {
        return -512;
    };
    Object.defineProperty(UltraCalcFunctionBin2Hex.prototype, "_aq", {
        get: function () {
            return this.get__aq();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBin2Hex.prototype.get__ap = function () {
        return 511;
    };
    Object.defineProperty(UltraCalcFunctionBin2Hex.prototype, "_ap", {
        get: function () {
            return this.get__ap();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBin2Hex.prototype.get__ao = function () {
        return -549755813888;
    };
    Object.defineProperty(UltraCalcFunctionBin2Hex.prototype, "_ao", {
        get: function () {
            return this.get__ao();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBin2Hex.prototype.get__an = function () {
        return 0x7FFFFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionBin2Hex.prototype, "_an", {
        get: function () {
            return this.get__an();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBin2Hex.prototype.get__al = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionBin2Hex.prototype, "_al", {
        get: function () {
            return this.get__al();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBin2Hex.prototype.get__ak = function () {
        return 16;
    };
    Object.defineProperty(UltraCalcFunctionBin2Hex.prototype, "_ak", {
        get: function () {
            return this.get__ak();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBin2Hex.prototype.get__am = function () {
        return 10;
    };
    Object.defineProperty(UltraCalcFunctionBin2Hex.prototype, "_am", {
        get: function () {
            return this.get__am();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBin2Hex.$t = markType(UltraCalcFunctionBin2Hex, 'UltraCalcFunctionBin2Hex', UltraCalcFunctionXBase2XBase.$);
    return UltraCalcFunctionBin2Hex;
}(UltraCalcFunctionXBase2XBase));
export { UltraCalcFunctionBin2Hex };
/**
 * @hidden
 */
var UltraCalcFunctionOct2Bin = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionOct2Bin, _super);
    function UltraCalcFunctionOct2Bin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionOct2Bin.prototype.get_name = function () {
        return "oct2bin";
    };
    Object.defineProperty(UltraCalcFunctionOct2Bin.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionOct2Bin.prototype.get__aq = function () {
        return -536870912;
    };
    Object.defineProperty(UltraCalcFunctionOct2Bin.prototype, "_aq", {
        get: function () {
            return this.get__aq();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionOct2Bin.prototype.get__ap = function () {
        return 536870911;
    };
    Object.defineProperty(UltraCalcFunctionOct2Bin.prototype, "_ap", {
        get: function () {
            return this.get__ap();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionOct2Bin.prototype.get__ao = function () {
        return -512;
    };
    Object.defineProperty(UltraCalcFunctionOct2Bin.prototype, "_ao", {
        get: function () {
            return this.get__ao();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionOct2Bin.prototype.get__an = function () {
        return 511;
    };
    Object.defineProperty(UltraCalcFunctionOct2Bin.prototype, "_an", {
        get: function () {
            return this.get__an();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionOct2Bin.prototype.get__al = function () {
        return 8;
    };
    Object.defineProperty(UltraCalcFunctionOct2Bin.prototype, "_al", {
        get: function () {
            return this.get__al();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionOct2Bin.prototype.get__ak = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionOct2Bin.prototype, "_ak", {
        get: function () {
            return this.get__ak();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionOct2Bin.prototype.get__am = function () {
        return 10;
    };
    Object.defineProperty(UltraCalcFunctionOct2Bin.prototype, "_am", {
        get: function () {
            return this.get__am();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionOct2Bin.$t = markType(UltraCalcFunctionOct2Bin, 'UltraCalcFunctionOct2Bin', UltraCalcFunctionXBase2XBase.$);
    return UltraCalcFunctionOct2Bin;
}(UltraCalcFunctionXBase2XBase));
export { UltraCalcFunctionOct2Bin };
/**
 * @hidden
 */
var UltraCalcFunctionOct2Hex = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionOct2Hex, _super);
    function UltraCalcFunctionOct2Hex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionOct2Hex.prototype.get_name = function () {
        return "oct2hex";
    };
    Object.defineProperty(UltraCalcFunctionOct2Hex.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionOct2Hex.prototype.get__aq = function () {
        return -536870912;
    };
    Object.defineProperty(UltraCalcFunctionOct2Hex.prototype, "_aq", {
        get: function () {
            return this.get__aq();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionOct2Hex.prototype.get__ap = function () {
        return 536870911;
    };
    Object.defineProperty(UltraCalcFunctionOct2Hex.prototype, "_ap", {
        get: function () {
            return this.get__ap();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionOct2Hex.prototype.get__ao = function () {
        return -549755813888;
    };
    Object.defineProperty(UltraCalcFunctionOct2Hex.prototype, "_ao", {
        get: function () {
            return this.get__ao();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionOct2Hex.prototype.get__an = function () {
        return 0x7FFFFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionOct2Hex.prototype, "_an", {
        get: function () {
            return this.get__an();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionOct2Hex.prototype.get__al = function () {
        return 8;
    };
    Object.defineProperty(UltraCalcFunctionOct2Hex.prototype, "_al", {
        get: function () {
            return this.get__al();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionOct2Hex.prototype.get__ak = function () {
        return 16;
    };
    Object.defineProperty(UltraCalcFunctionOct2Hex.prototype, "_ak", {
        get: function () {
            return this.get__ak();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionOct2Hex.prototype.get__am = function () {
        return 10;
    };
    Object.defineProperty(UltraCalcFunctionOct2Hex.prototype, "_am", {
        get: function () {
            return this.get__am();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionOct2Hex.$t = markType(UltraCalcFunctionOct2Hex, 'UltraCalcFunctionOct2Hex', UltraCalcFunctionXBase2XBase.$);
    return UltraCalcFunctionOct2Hex;
}(UltraCalcFunctionXBase2XBase));
export { UltraCalcFunctionOct2Hex };
/**
 * @hidden
 */
var UltraCalcFunctionHex2Bin = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionHex2Bin, _super);
    function UltraCalcFunctionHex2Bin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionHex2Bin.prototype.get_name = function () {
        return "hex2bin";
    };
    Object.defineProperty(UltraCalcFunctionHex2Bin.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionHex2Bin.prototype.get__aq = function () {
        return -549755813888;
    };
    Object.defineProperty(UltraCalcFunctionHex2Bin.prototype, "_aq", {
        get: function () {
            return this.get__aq();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionHex2Bin.prototype.get__ap = function () {
        return 0x7FFFFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionHex2Bin.prototype, "_ap", {
        get: function () {
            return this.get__ap();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionHex2Bin.prototype.get__ao = function () {
        return -512;
    };
    Object.defineProperty(UltraCalcFunctionHex2Bin.prototype, "_ao", {
        get: function () {
            return this.get__ao();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionHex2Bin.prototype.get__an = function () {
        return 511;
    };
    Object.defineProperty(UltraCalcFunctionHex2Bin.prototype, "_an", {
        get: function () {
            return this.get__an();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionHex2Bin.prototype.get__al = function () {
        return 16;
    };
    Object.defineProperty(UltraCalcFunctionHex2Bin.prototype, "_al", {
        get: function () {
            return this.get__al();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionHex2Bin.prototype.get__ak = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionHex2Bin.prototype, "_ak", {
        get: function () {
            return this.get__ak();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionHex2Bin.prototype.get__am = function () {
        return 10;
    };
    Object.defineProperty(UltraCalcFunctionHex2Bin.prototype, "_am", {
        get: function () {
            return this.get__am();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionHex2Bin.$t = markType(UltraCalcFunctionHex2Bin, 'UltraCalcFunctionHex2Bin', UltraCalcFunctionXBase2XBase.$);
    return UltraCalcFunctionHex2Bin;
}(UltraCalcFunctionXBase2XBase));
export { UltraCalcFunctionHex2Bin };
/**
 * @hidden
 */
var UltraCalcFunctionHex2Oct = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionHex2Oct, _super);
    function UltraCalcFunctionHex2Oct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionHex2Oct.prototype.get_name = function () {
        return "hex2oct";
    };
    Object.defineProperty(UltraCalcFunctionHex2Oct.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionHex2Oct.prototype.get__aq = function () {
        return -549755813888;
    };
    Object.defineProperty(UltraCalcFunctionHex2Oct.prototype, "_aq", {
        get: function () {
            return this.get__aq();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionHex2Oct.prototype.get__ap = function () {
        return 0x7FFFFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionHex2Oct.prototype, "_ap", {
        get: function () {
            return this.get__ap();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionHex2Oct.prototype.get__ao = function () {
        return -536870912;
    };
    Object.defineProperty(UltraCalcFunctionHex2Oct.prototype, "_ao", {
        get: function () {
            return this.get__ao();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionHex2Oct.prototype.get__an = function () {
        return 536870911;
    };
    Object.defineProperty(UltraCalcFunctionHex2Oct.prototype, "_an", {
        get: function () {
            return this.get__an();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionHex2Oct.prototype.get__al = function () {
        return 16;
    };
    Object.defineProperty(UltraCalcFunctionHex2Oct.prototype, "_al", {
        get: function () {
            return this.get__al();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionHex2Oct.prototype.get__ak = function () {
        return 8;
    };
    Object.defineProperty(UltraCalcFunctionHex2Oct.prototype, "_ak", {
        get: function () {
            return this.get__ak();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionHex2Oct.prototype.get__am = function () {
        return 10;
    };
    Object.defineProperty(UltraCalcFunctionHex2Oct.prototype, "_am", {
        get: function () {
            return this.get__am();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionHex2Oct.$t = markType(UltraCalcFunctionHex2Oct, 'UltraCalcFunctionHex2Oct', UltraCalcFunctionXBase2XBase.$);
    return UltraCalcFunctionHex2Oct;
}(UltraCalcFunctionXBase2XBase));
export { UltraCalcFunctionHex2Oct };
/**
 * @hidden
 */
var UltraCalcFunctionConvert = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionConvert, _super);
    function UltraCalcFunctionConvert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionConvert.prototype.evaluate = function (a, b) {
        var c = a.pop().toString();
        var d = a.pop().toString();
        var e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        var f = e._toDouble3();
        var g = UltraCalcFunctionConvert_UnitInfo.d(d);
        var h = UltraCalcFunctionConvert_UnitInfo.d(c);
        if (g == null || h == null) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        var i = h.c;
        var j = g.c;
        if (i == 0 || j == 0 || i != j) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        d = g.l;
        c = h.l;
        f *= g.j;
        var k;
        switch (i) {
            case 1:
                k = UltraCalcFunctionConvert._at(f, d, c);
                break;
            case 2:
                k = UltraCalcFunctionConvert._ak(f, d, c);
                break;
            case 3:
                k = UltraCalcFunctionConvert._as(f, d, c);
                break;
            case 4:
                k = UltraCalcFunctionConvert._aq(f, d, c);
                break;
            case 5:
                k = UltraCalcFunctionConvert._am(f, d, c);
                break;
            case 6:
                k = UltraCalcFunctionConvert._al(f, d, c);
                break;
            case 7:
                k = UltraCalcFunctionConvert._ap(f, d, c);
                break;
            case 8:
                k = UltraCalcFunctionConvert._ao(f, d, c);
                break;
            case 9:
                k = UltraCalcFunctionConvert._ar(f, d, c);
                break;
            case 10:
                k = UltraCalcFunctionConvert._an(f, d, c);
                break;
            default: return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        k /= h.j;
        k = MathUtilities.i(k);
        return new ExcelCalcValue(k);
    };
    UltraCalcFunctionConvert.prototype.get_name = function () {
        return "convert";
    };
    Object.defineProperty(UltraCalcFunctionConvert.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionConvert.prototype.get_minArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionConvert.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionConvert.prototype.get_maxArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionConvert.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionConvert._as = function (a, b, c) {
        var d = 365.25;
        var e = 24;
        var f = 60;
        var g = 60;
        var h = 0;
        switch (b) {
            case "yr":
                h = a * d * e * f * g;
                break;
            case "day":
                h = a * e * f * g;
                break;
            case "hr":
                h = a * f * g;
                break;
            case "mn":
                h = a * g;
                break;
            case "sec":
                h = a;
                break;
            default: throw new ArgumentException(1, "fromUnit");
        }
        var i = truncate(round10N(h, 0));
        var j = truncate(((h - i) * 1000));
        var k = timeSpanInit2(0, 0, 0, i, j);
        switch (c) {
            case "yr": return timeSpanTotalDays(k) / d;
            case "day": return timeSpanTotalDays(k);
            case "hr": return timeSpanTotalHours(k);
            case "mn": return timeSpanTotalMinutes(k);
            case "sec": return timeSpanTotalSeconds(k);
            default: throw new ArgumentException(1, "toUnit");
        }
    };
    UltraCalcFunctionConvert._at = function (a, b, c) {
        var d = 14593.9029372064;
        var e = 453.59237;
        var f = 28.349523125;
        var g = 1.66053100460465E-24;
        var h = 0;
        switch (b) {
            case "sg":
                h = a * d;
                break;
            case "lbm":
                h = a * e;
                break;
            case "ozm":
                h = a * f;
                break;
            case "g":
                h = a;
                break;
            case "u":
                h = a * g;
                break;
            default: throw new ArgumentException(1, "fromUnit");
        }
        switch (c) {
            case "u": return h / g;
            case "g": return h;
            case "ozm": return h / f;
            case "lbm": return h / e;
            case "sg": return h / d;
            default: throw new ArgumentException(1, "toUnit");
        }
    };
    UltraCalcFunctionConvert._ak = function (a, b, c) {
        var d = 72913.3858267717;
        var e = 63360;
        var f = 39.3700787401575;
        var g = 36;
        var h = 12;
        var i = 0.0138888888888889;
        var j = 0.166666666666667;
        var k = 3.93700787401575E-09;
        var l = 0;
        switch (b) {
            case "Nmi":
                l = a * d;
                break;
            case "mi":
                l = a * e;
                break;
            case "m":
                l = a * f;
                break;
            case "yd":
                l = a * g;
                break;
            case "ft":
                l = a * h;
                break;
            case "in":
                l = a;
                break;
            case "pica":
                l = a * j;
                break;
            case "Pica":
                l = a * i;
                break;
            case "ang":
                l = a * k;
                break;
            default: throw new ArgumentException(1, "fromUnit");
        }
        switch (c) {
            case "ang": return l / k;
            case "pica": return l / j;
            case "Pica": return l / i;
            case "in": return l;
            case "ft": return l / h;
            case "yd": return l / g;
            case "m": return l / f;
            case "mi": return l / e;
            case "Nmi": return l / d;
            default: throw new ArgumentException(1, "toUnit");
        }
    };
    UltraCalcFunctionConvert._aq = function (a, b, c) {
        var d = 760;
        var e = 0.0075006168270417;
        var f = 0;
        switch (b) {
            case "Pa":
            case "p":
                f = a * e;
                break;
            case "atm":
            case "at":
                f = a * d;
                break;
            case "mmHg":
                f = a;
                break;
            default: throw new ArgumentException(1, "fromUnit");
        }
        switch (c) {
            case "mmHg": return f;
            case "Pa":
            case "p": return f / e;
            case "atm":
            case "at": return f / d;
            default: throw new ArgumentException(1, "toUnit");
        }
    };
    UltraCalcFunctionConvert._am = function (a, b, c) {
        var d = 4.4482216152605;
        var e = 1E-05;
        var f = 0;
        switch (b) {
            case "lbf":
                f = a * d;
                break;
            case "N":
                f = a;
                break;
            case "dyn":
            case "dy":
                f = a * e;
                break;
            default: throw new ArgumentException(1, "fromUnit");
        }
        switch (c) {
            case "dyn":
            case "dy": return f / e;
            case "N": return f;
            case "lbf": return f / d;
            default: throw new ArgumentException(1, "toUnit");
        }
    };
    UltraCalcFunctionConvert._al = function (a, b, c) {
        var d = 26845195376961.7;
        var e = 36000000000;
        var f = 10550558526.2;
        var g = 41868000;
        var h = 41840000;
        var i = 10000000;
        var j = 13558179.483314;
        var k = 1.60219000146921E-12;
        var l;
        switch (b) {
            case "HPh":
            case "hh":
                l = a * d;
                break;
            case "Wh":
            case "wh":
                l = a * e;
                break;
            case "BTU":
            case "btu":
                l = a * f;
                break;
            case "cal":
                l = a * g;
                break;
            case "c":
                l = a * h;
                break;
            case "J":
                l = a * i;
                break;
            case "flb":
                l = a * j;
                break;
            case "e":
                l = a;
                break;
            case "eV":
            case "ev":
                l = a * k;
                break;
            default: throw new ArgumentException(1, "fromUnit");
        }
        switch (c) {
            case "eV":
            case "ev": return l / k;
            case "e": return l;
            case "flb": return l / j;
            case "J": return l / i;
            case "c": return l / h;
            case "cal": return l / g;
            case "BTU":
            case "btu": return l / f;
            case "Wh":
            case "wh": return l / e;
            case "HPh":
            case "hh": return l / d;
            default: throw new ArgumentException(1, "toUnit");
        }
    };
    UltraCalcFunctionConvert._ap = function (a, b, c) {
        var d = 745.69987158227;
        var e;
        switch (b) {
            case "HP":
            case "h":
                e = a * d;
                break;
            case "W":
            case "w":
                e = a;
                break;
            default: throw new ArgumentException(1, "fromUnit");
        }
        switch (c) {
            case "W":
            case "w": return e;
            case "HP":
            case "h": return e / d;
            default: throw new ArgumentException(1, "toUnit");
        }
    };
    UltraCalcFunctionConvert._ao = function (a, b, c) {
        var d = 10000;
        var e;
        switch (b) {
            case "T":
                e = a * d;
                break;
            case "ga":
                e = a;
                break;
            default: throw new ArgumentException(1, "fromUnit");
        }
        switch (c) {
            case "ga": return e;
            case "T": return e / d;
            default: throw new ArgumentException(1, "toUnit");
        }
    };
    UltraCalcFunctionConvert._an = function (a, b, c) {
        var d = 768;
        var e = 202.884136211058;
        var f = 192;
        var g = 115.291192848466;
        var h = 96;
        var i = 48;
        var j = 6;
        var k = 3;
        var l;
        switch (b) {
            case "gal":
                l = a * d;
                break;
            case "l":
            case "lt":
                l = a * e;
                break;
            case "qt":
                l = a * f;
                break;
            case "uk_pt":
                l = a * g;
                break;
            case "pt":
            case "us_pt":
                l = a * h;
                break;
            case "cup":
                l = a * i;
                break;
            case "oz":
                l = a * j;
                break;
            case "tbs":
                l = a * k;
                break;
            case "tsp":
                l = a;
                break;
            default: throw new ArgumentException(1, "fromUnit");
        }
        switch (c) {
            case "tsp": return l;
            case "tbs": return l / k;
            case "oz": return l / j;
            case "cup": return l / i;
            case "pt":
            case "us_pt": return l / h;
            case "uk_pt": return l / g;
            case "qt": return l / f;
            case "l":
            case "lt": return l / e;
            case "gal": return l / d;
            default: throw new ArgumentException(1, "toUnit");
        }
    };
    UltraCalcFunctionConvert._ar = function (a, b, c) {
        b = UltraCalcFunctionConvert._au(b);
        c = UltraCalcFunctionConvert._au(c);
        if (stringCompare(b, c) == 0) {
            return a;
        }
        var d;
        switch (b) {
            case "C": switch (c) {
                case "F": return ((a * 9) / 5) + 32;
                case "K": return a + 273.15;
                default: throw new ArgumentException(1, "toUnit");
            }
            case "F":
                d = ((a - 32) / 9) * 5;
                switch (c) {
                    case "C": return d;
                    case "K": return d + 273.15;
                    default: throw new ArgumentException(1, "toUnit");
                }
            case "K":
                d = (a - 273.15);
                switch (c) {
                    case "C": return d;
                    case "F": return ((d * 9) / 5) + 32;
                    default: throw new ArgumentException(1, "toUnit");
                }
            default: throw new ArgumentException(1, "fromUnit");
        }
    };
    UltraCalcFunctionConvert._au = function (a) {
        switch (a) {
            case "C":
            case "cel": return "C";
            case "F":
            case "fah": return "F";
            case "K":
            case "kel": return "K";
            default: throw new ArgumentException(1, "unit");
        }
    };
    UltraCalcFunctionConvert.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionConvert.$t = markType(UltraCalcFunctionConvert, 'UltraCalcFunctionConvert', BuiltInFunctionBase.$);
    return UltraCalcFunctionConvert;
}(BuiltInFunctionBase));
export { UltraCalcFunctionConvert };
/**
 * @hidden
 */
var UltraCalcFunctionConvert_UnitInfo = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionConvert_UnitInfo, _super);
    function UltraCalcFunctionConvert_UnitInfo(a, b, c, d) {
        var _this = _super.call(this) || this;
        _this.k = null;
        _this.e = false;
        _this.i = 0;
        _this.b = 0;
        _this.k = a;
        _this.e = b;
        _this.i = c;
        _this.b = d;
        return _this;
    }
    UltraCalcFunctionConvert_UnitInfo.d = function (a) {
        var b = a;
        var c = 1;
        var d = UltraCalcFunctionConvert_UnitInfo.a(b);
        if (d == 0) {
            b = b.substr(1);
            d = UltraCalcFunctionConvert_UnitInfo.a(b);
            if (d == 0) {
                return null;
            }
            else {
                var e = ((function () { var f = UltraCalcFunctionConvert_UnitInfo.h(a.substr(0, 1), c); c = f.p1; return f.ret; })());
                if (e == false) {
                    return null;
                }
            }
        }
        var f = UltraCalcFunctionConvert_UnitInfo.g(b);
        if (f == false && c != 1) {
            return null;
        }
        return new UltraCalcFunctionConvert_UnitInfo(b, f, c, d);
    };
    Object.defineProperty(UltraCalcFunctionConvert_UnitInfo.prototype, "l", {
        get: function () {
            return this.k;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UltraCalcFunctionConvert_UnitInfo.prototype, "f", {
        get: function () {
            return this.e;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UltraCalcFunctionConvert_UnitInfo.prototype, "j", {
        get: function () {
            return this.i;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UltraCalcFunctionConvert_UnitInfo.prototype, "c", {
        get: function () {
            return this.b;
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionConvert_UnitInfo.a = function (a) {
        switch (a) {
            case "g":
            case "sg":
            case "lbm":
            case "u":
            case "ozm": return 1;
            case "m":
            case "mi":
            case "Nmi":
            case "in":
            case "ft":
            case "yd":
            case "ang":
            case "pica":
            case "Pica": return 2;
            case "yr":
            case "day":
            case "hr":
            case "mn":
            case "sec": return 3;
            case "Pa":
            case "p":
            case "atm":
            case "at":
            case "mmHg": return 4;
            case "N":
            case "dyn":
            case "dy":
            case "lbf": return 5;
            case "J":
            case "e":
            case "c":
            case "cal":
            case "eV":
            case "ev":
            case "HPh":
            case "hh":
            case "Wh":
            case "wh":
            case "flb":
            case "BTU":
            case "btu": return 6;
            case "HP":
            case "h":
            case "W":
            case "w": return 7;
            case "T":
            case "ga": return 8;
            case "C":
            case "cel":
            case "F":
            case "fah":
            case "K":
            case "kel": return 9;
            case "tsp":
            case "tbs":
            case "oz":
            case "cup":
            case "pt":
            case "us_pt":
            case "uk_pt":
            case "qt":
            case "gal":
            case "l":
            case "lt": return 10;
        }
        return 0;
    };
    UltraCalcFunctionConvert_UnitInfo.h = function (a, b) {
        switch (a) {
            case "E":
                b = 1E+18;
                return {
                    ret: true,
                    p1: b
                };
            case "P":
                b = 1E+15;
                return {
                    ret: true,
                    p1: b
                };
            case "T":
                b = 1000000000000;
                return {
                    ret: true,
                    p1: b
                };
            case "G":
                b = 1000000000;
                return {
                    ret: true,
                    p1: b
                };
            case "M":
                b = 1000000;
                return {
                    ret: true,
                    p1: b
                };
            case "k":
                b = 1000;
                return {
                    ret: true,
                    p1: b
                };
            case "h":
                b = 100;
                return {
                    ret: true,
                    p1: b
                };
            case "e":
                b = 10;
                return {
                    ret: true,
                    p1: b
                };
            case "d":
                b = 0.1;
                return {
                    ret: true,
                    p1: b
                };
            case "c":
                b = 0.01;
                return {
                    ret: true,
                    p1: b
                };
            case "m":
                b = 0.001;
                return {
                    ret: true,
                    p1: b
                };
            case "u":
                b = 1E-06;
                return {
                    ret: true,
                    p1: b
                };
            case "n":
                b = 1E-09;
                return {
                    ret: true,
                    p1: b
                };
            case "p":
                b = 1E-12;
                return {
                    ret: true,
                    p1: b
                };
            case "f":
                b = 1E-15;
                return {
                    ret: true,
                    p1: b
                };
            case "a":
                b = 1E-18;
                return {
                    ret: true,
                    p1: b
                };
        }
        b = 1;
        return {
            ret: false,
            p1: b
        };
    };
    UltraCalcFunctionConvert_UnitInfo.g = function (a) {
        switch (a) {
            case "g":
            case "u": return true;
            case "sg":
            case "lbm":
            case "ozm": return false;
            case "m":
            case "ang": return true;
            case "mi":
            case "Nmi":
            case "in":
            case "ft":
            case "yd":
            case "pica":
            case "Pica": return false;
            case "sec": return true;
            case "yr":
            case "day":
            case "hr":
            case "mn": return false;
            case "Pa":
            case "p":
            case "atm":
            case "at":
            case "mmHg": return true;
            case "N":
            case "dyn":
            case "dy": return true;
            case "lbf": return false;
            case "J":
            case "e":
            case "c":
            case "cal":
            case "eV":
            case "ev":
            case "Wh":
            case "wh": return true;
            case "HPh":
            case "hh":
            case "flb":
            case "BTU":
            case "btu": return false;
            case "HP":
            case "h": return false;
            case "W":
            case "w": return true;
            case "T":
            case "ga": return true;
            case "C":
            case "cel":
            case "F":
            case "fah": return false;
            case "K":
            case "kel": return true;
            case "tsp":
            case "tbs":
            case "oz":
            case "cup":
            case "pt":
            case "us_pt":
            case "uk_pt":
            case "qt":
            case "gal": return false;
            case "l":
            case "lt": return true;
        }
        throw new ArgumentException(2, "baseUnit must be a unit with no metric prefix", "baseUnit");
    };
    UltraCalcFunctionConvert_UnitInfo.$t = markType(UltraCalcFunctionConvert_UnitInfo, 'UltraCalcFunctionConvert_UnitInfo');
    return UltraCalcFunctionConvert_UnitInfo;
}(Base));
export { UltraCalcFunctionConvert_UnitInfo };
/**
 * @hidden
 */
var UltraCalcFunctionDelta = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionDelta, _super);
    function UltraCalcFunctionDelta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionDelta.prototype.evaluate = function (a, b) {
        var c;
        var d;
        if (b == 2) {
            c = a.pop();
            if (c.isError) {
                return new ExcelCalcValue(c.toErrorValue());
            }
            d = c._toDouble3();
        }
        else {
            d = 0;
        }
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var e = c._toDouble3();
        var f = (e == d) ? 1 : 0;
        return new ExcelCalcValue(f);
    };
    UltraCalcFunctionDelta.prototype.get_name = function () {
        return "delta";
    };
    Object.defineProperty(UltraCalcFunctionDelta.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDelta.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionDelta.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDelta.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionDelta.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDelta.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionDelta.$t = markType(UltraCalcFunctionDelta, 'UltraCalcFunctionDelta', BuiltInFunctionBase.$);
    return UltraCalcFunctionDelta;
}(BuiltInFunctionBase));
export { UltraCalcFunctionDelta };
/**
 * @hidden
 */
var UltraCalcFunctionGeStep = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionGeStep, _super);
    function UltraCalcFunctionGeStep() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionGeStep.prototype.evaluate = function (a, b) {
        var c;
        var d;
        if (b == 2) {
            c = a.pop();
            if (c.isError) {
                return new ExcelCalcValue(c.toErrorValue());
            }
            d = c._toDouble3();
        }
        else {
            d = 0;
        }
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var e = c._toDouble3();
        var f = (e >= d) ? 1 : 0;
        return new ExcelCalcValue(f);
    };
    UltraCalcFunctionGeStep.prototype.get_name = function () {
        return "gestep";
    };
    Object.defineProperty(UltraCalcFunctionGeStep.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionGeStep.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionGeStep.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionGeStep.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionGeStep.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionGeStep.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionGeStep.$t = markType(UltraCalcFunctionGeStep, 'UltraCalcFunctionGeStep', BuiltInFunctionBase.$);
    return UltraCalcFunctionGeStep;
}(BuiltInFunctionBase));
export { UltraCalcFunctionGeStep };
/**
 * @hidden
 */
var UltraCalcFunctionComplex = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionComplex, _super);
    function UltraCalcFunctionComplex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionComplex.prototype.evaluate = function (a, b) {
        var c;
        var d = (b == 3) ? a.pop().toString() : "i";
        if (stringCompare1(d, "i", 4) != 0 && stringCompare1(d, "j", 4) != 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var e = c._toDouble3();
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var f = c._toDouble3();
        var g = new UltraCalcFunctionComplex_ComplexNumber(0, f, e, d);
        var h = g.toString();
        return new ExcelCalcValue(h);
    };
    UltraCalcFunctionComplex.prototype.get_name = function () {
        return "complex";
    };
    Object.defineProperty(UltraCalcFunctionComplex.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionComplex.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionComplex.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionComplex.prototype.get_maxArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionComplex.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionComplex.$t = markType(UltraCalcFunctionComplex, 'UltraCalcFunctionComplex', BuiltInFunctionBase.$);
    return UltraCalcFunctionComplex;
}(BuiltInFunctionBase));
export { UltraCalcFunctionComplex };
/**
 * @hidden
 */
var UltraCalcFunctionComplex_ComplexNumber = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionComplex_ComplexNumber, _super);
    function UltraCalcFunctionComplex_ComplexNumber(a) {
        var _rest = [];
        for (var _e = 1; _e < arguments.length; _e++) {
            _rest[_e - 1] = arguments[_e];
        }
        var _this = _super.call(this) || this;
        _this.ai = 0;
        _this.ae = 0;
        _this.am = null;
        _this.x = false;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    var f = [c, d, e, true];
                    {
                        var h = f[0];
                        var i = f[1];
                        var j = f[2];
                        var k = f[3];
                        _this.ai = h;
                        _this.ae = i;
                        _this.am = j;
                        _this.x = k;
                    }
                }
                break;
            case 1:
                {
                    var c_1 = _rest[0];
                    var d_9 = _rest[1];
                    _this.x = ((function () { var e = UltraCalcFunctionComplex_ComplexNumber.z(c_1, d_9, _this.ai, _this.ae, _this.am); _this.ai = e.p2; _this.ae = e.p3; _this.am = e.p4; return e.ret; })());
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    var f = _rest[3];
                    _this.ai = c;
                    _this.ae = d;
                    _this.am = e;
                    _this.x = f;
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(UltraCalcFunctionComplex_ComplexNumber.prototype, "aj", {
        get: function () {
            return this.ai;
        },
        set: function (a) {
            this.ai = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UltraCalcFunctionComplex_ComplexNumber.prototype, "af", {
        get: function () {
            return this.ae;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UltraCalcFunctionComplex_ComplexNumber.prototype, "an", {
        get: function () {
            return this.am;
        },
        set: function (a) {
            if (a != "i" && a != "j") {
                throw new ArgumentOutOfRangeException(0);
            }
            this.am = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UltraCalcFunctionComplex_ComplexNumber.prototype, "y", {
        get: function () {
            if (isInfinity(this.aj) || isNaN_(this.aj)) {
                return false;
            }
            if (isInfinity(this.af) || isNaN_(this.af)) {
                return false;
            }
            return this.x;
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionComplex_ComplexNumber.prototype.toString = function () {
        if (this.y == false) {
            return "#NUM";
        }
        return UltraCalcFunctionComplex_ComplexNumber.al(this.aj, this.af, this.an);
    };
    UltraCalcFunctionComplex_ComplexNumber.prototype.ab = function () {
        return Math.sqrt(Math.pow(this.aj, 2) + Math.pow(this.af, 2));
    };
    UltraCalcFunctionComplex_ComplexNumber.prototype.ac = function () {
        if (this.af == 0 && this.aj == 0) {
            throw new DivideByZeroException(null, null);
        }
        return Math.atan2(this.af, this.aj);
    };
    UltraCalcFunctionComplex_ComplexNumber.prototype.c = function () {
        return new UltraCalcFunctionComplex_ComplexNumber(0, this.ai, -this.ae, this.am);
    };
    UltraCalcFunctionComplex_ComplexNumber.prototype.d = function () {
        var a = Math.cos(this.aj) * Math.cosh(this.af);
        var b = -(Math.sin(this.aj) * Math.sinh(this.af));
        return new UltraCalcFunctionComplex_ComplexNumber(0, a, b, this.an);
    };
    UltraCalcFunctionComplex_ComplexNumber.prototype.e = function () {
        var a = Math.pow(2.7182818284590451, this.aj);
        var b = Math.cos(this.af) * a;
        var c = Math.sin(this.af) * a;
        var d = new UltraCalcFunctionComplex_ComplexNumber(0, b, c, this.an);
        return d;
    };
    UltraCalcFunctionComplex_ComplexNumber.prototype.ad = function () {
        var a = Math.pow(this.aj, 2);
        var b = Math.pow(this.af, 2);
        var c = a + b;
        var d = Math.sqrt(c);
        return d;
    };
    UltraCalcFunctionComplex_ComplexNumber.prototype.m = function () {
        var a = this.ad();
        var b = Math.log(a);
        var c = this.ak();
        var d = new UltraCalcFunctionComplex_ComplexNumber(0, b, c, this.an);
        return d;
    };
    UltraCalcFunctionComplex_ComplexNumber.prototype.n = function () {
        return UltraCalcFunctionComplex_ComplexNumber.k(this.m(), UltraCalcFunctionComplex_ComplexNumber.ag);
    };
    UltraCalcFunctionComplex_ComplexNumber.prototype.o = function () {
        return UltraCalcFunctionComplex_ComplexNumber.k(this.m(), UltraCalcFunctionComplex_ComplexNumber.ah);
    };
    UltraCalcFunctionComplex_ComplexNumber.prototype.u = function (a) {
        var b = this.ad();
        var c = this.ak();
        var d = Math.pow(b, a);
        var e = c * a;
        var f = d * (Math.cos(e));
        var g = d * (Math.sin(e));
        return new UltraCalcFunctionComplex_ComplexNumber(0, f, g, this.an);
    };
    UltraCalcFunctionComplex_ComplexNumber.prototype.v = function () {
        var a = Math.sin(this.aj) * Math.cosh(this.af);
        var b = Math.cos(this.aj) * Math.sinh(this.af);
        return new UltraCalcFunctionComplex_ComplexNumber(0, a, b, this.an);
    };
    UltraCalcFunctionComplex_ComplexNumber.prototype.w = function () {
        var a = this.ad();
        var b = this.ak();
        var c = Math.sqrt(a);
        var d = b / 2;
        var e = c * Math.cos(d);
        var f = c * Math.sin(d);
        return new UltraCalcFunctionComplex_ComplexNumber(0, e, f, this.an);
    };
    UltraCalcFunctionComplex_ComplexNumber.prototype.ak = function () {
        return Math.atan2(this.af, this.aj);
    };
    UltraCalcFunctionComplex_ComplexNumber.z = function (a, b, c, d, e) {
        b = stringReplace(b, " ", "");
        var f = UltraCalcFunctionComplex_ComplexNumber.b(b);
        var g = f.length;
        if (g > 2 || g <= 0) {
            c = 0;
            d = 0;
            e = "i";
            return {
                ret: false,
                p2: c,
                p3: d,
                p4: e
            };
        }
        var h;
        var i;
        var j;
        if (g == 1) {
            i = b;
            j = ((function () { var k = UltraCalcFunctionComplex_ComplexNumber.aa(a, b, d, e); d = k.p2; e = k.p3; return k.ret; })());
            if (j) {
                c = 0;
            }
            else {
                d = 0;
                j = ((function () { var k = MathUtilities.c(b, a, c); c = k.p2; return k.ret; })());
                if (j == false) {
                    return {
                        ret: false,
                        p2: c,
                        p3: d,
                        p4: e
                    };
                }
            }
        }
        else {
            h = f[0];
            i = f[1];
            j = ((function () { var k = MathUtilities.c(h, a, c); c = k.p2; return k.ret; })());
            if (j == false) {
                d = 0;
                e = "i";
                return {
                    ret: false,
                    p2: c,
                    p3: d,
                    p4: e
                };
            }
            j = ((function () { var k = UltraCalcFunctionComplex_ComplexNumber.aa(a, i, d, e); d = k.p2; e = k.p3; return k.ret; })());
            if (j == false) {
                return {
                    ret: false,
                    p2: c,
                    p3: d,
                    p4: e
                };
            }
        }
        return {
            ret: true,
            p2: c,
            p3: d,
            p4: e
        };
    };
    UltraCalcFunctionComplex_ComplexNumber.aa = function (a, b, c, d) {
        d = stringContains(b, "j") ? "j" : "i";
        if (stringContains(b, "i") == false && stringContains(b, "j") == false) {
            c = 0;
            return {
                ret: false,
                p2: c,
                p3: d
            };
        }
        switch (b) {
            case "i":
            case "j":
            case "+i":
            case "+j":
                c = 1;
                return {
                    ret: true,
                    p2: c,
                    p3: d
                };
            case "-i":
            case "-j":
                c = -1;
                return {
                    ret: true,
                    p2: c,
                    p3: d
                };
        }
        b = stringReplace(b, "i", stringEmpty());
        b = stringReplace(b, "j", stringEmpty());
        return {
            ret: ((function () { var e = MathUtilities.c(b, a, c); c = e.p2; return e.ret; })()),
            p2: c,
            p3: d
        };
    };
    UltraCalcFunctionComplex_ComplexNumber.b = function (a) {
        var b = new List$1(String_$type, 2, 1);
        var c = a.substr(0, 1);
        var d = stringToCharArray(a);
        for (var e = 1; e < d.length; e++) {
            var f = d[e];
            if (f == '-' || f == '+') {
                var g = d[e - 1].toString().toLowerCase();
                if (g != "e") {
                    b.add(c);
                    c = stringEmpty();
                }
            }
            c += f;
        }
        b.add(c);
        return b.toArray();
    };
    UltraCalcFunctionComplex_ComplexNumber.al = function (a, b, c) {
        var d = "G";
        a = MathUtilities.i(a);
        b = MathUtilities.i(b);
        var e;
        if (a == 0 && b == 0) {
            e = "0";
        }
        else if (a != 0 && b == 0) {
            e = numberToString2(a, d);
        }
        else {
            var f = (b > 0) ? "+" : "-";
            var g = void 0;
            if (a != 0) {
                g = numberToString2(a, d);
            }
            else {
                g = stringEmpty();
                if (f == "+") {
                    f = stringEmpty();
                }
            }
            b = Math.abs(b);
            var h = stringFormat("{0}{1}", f, (b == 1) ? stringEmpty() : numberToString2(b, d));
            e = stringFormat("{0}{1}{2}", g, h, c);
        }
        return e;
    };
    Object.defineProperty(UltraCalcFunctionComplex_ComplexNumber, "g", {
        get: function () {
            if (UltraCalcFunctionComplex_ComplexNumber.f == null) {
                UltraCalcFunctionComplex_ComplexNumber.f = new UltraCalcFunctionComplex_ComplexNumber(2, 0, 0, "i", false);
            }
            return UltraCalcFunctionComplex_ComplexNumber.f;
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionComplex_ComplexNumber.i = function (a, b) {
        if (stringCompare(b.an, a.an) != 0) {
            return UltraCalcFunctionComplex_ComplexNumber.g;
        }
        var c = Math.pow(b.aj, 2) + Math.pow(b.af, 2);
        var d = ((a.aj * b.aj) + (a.af * b.af)) / c;
        var e = ((a.af * b.aj) - (a.aj * b.af)) / c;
        var f = new UltraCalcFunctionComplex_ComplexNumber(0, d, e, a.an);
        return f;
    };
    UltraCalcFunctionComplex_ComplexNumber.j = function (a, b) {
        if (stringCompare(a.an, b.an) != 0) {
            return UltraCalcFunctionComplex_ComplexNumber.g;
        }
        var c = ((a.aj * b.aj) - (a.af * b.af));
        var d = ((a.aj * b.af) + (a.af * b.aj));
        var e = new UltraCalcFunctionComplex_ComplexNumber(0, c, d, a.an);
        return e;
    };
    UltraCalcFunctionComplex_ComplexNumber.k = function (a, b) {
        var c = a.an;
        var d = a.aj * b;
        var e = a.af * b;
        return new UltraCalcFunctionComplex_ComplexNumber(0, d, e, c);
    };
    UltraCalcFunctionComplex_ComplexNumber.h = function (a, b) {
        if (stringCompare(a.an, b.an) != 0) {
            return UltraCalcFunctionComplex_ComplexNumber.g;
        }
        var c = a.aj + b.aj;
        var d = a.af + b.af;
        var e = new UltraCalcFunctionComplex_ComplexNumber(0, c, d, a.an);
        return e;
    };
    UltraCalcFunctionComplex_ComplexNumber.l = function (a, b) {
        if (stringCompare(a.an, b.an) != 0) {
            return UltraCalcFunctionComplex_ComplexNumber.g;
        }
        var c = a.aj - b.aj;
        var d = a.af - b.af;
        var e = new UltraCalcFunctionComplex_ComplexNumber(0, c, d, a.an);
        return e;
    };
    UltraCalcFunctionComplex_ComplexNumber.$t = markType(UltraCalcFunctionComplex_ComplexNumber, 'UltraCalcFunctionComplex_ComplexNumber');
    UltraCalcFunctionComplex_ComplexNumber.f = null;
    UltraCalcFunctionComplex_ComplexNumber.a = ['+', '-'];
    UltraCalcFunctionComplex_ComplexNumber.ag = log10(2.7182818284590451);
    UltraCalcFunctionComplex_ComplexNumber.ah = logBase(2.7182818284590451, 2);
    return UltraCalcFunctionComplex_ComplexNumber;
}(Base));
export { UltraCalcFunctionComplex_ComplexNumber };
/**
 * @hidden
 */
var UltraCalcFunctionImAbs = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionImAbs, _super);
    function UltraCalcFunctionImAbs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionImAbs.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return c;
        }
        var d = c.toString();
        var e = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, d);
        if (e.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(e.ab());
    };
    UltraCalcFunctionImAbs.prototype.get_name = function () {
        return "imabs";
    };
    Object.defineProperty(UltraCalcFunctionImAbs.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImAbs.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionImAbs.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImAbs.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionImAbs.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImAbs.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionImAbs.$t = markType(UltraCalcFunctionImAbs, 'UltraCalcFunctionImAbs', BuiltInFunctionBase.$);
    return UltraCalcFunctionImAbs;
}(BuiltInFunctionBase));
export { UltraCalcFunctionImAbs };
/**
 * @hidden
 */
var UltraCalcFunctionImaginary = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionImaginary, _super);
    function UltraCalcFunctionImaginary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionImaginary.prototype.evaluate = function (a, b) {
        var c = a.pop().toString();
        var d = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, c);
        if (d.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(d.af);
    };
    UltraCalcFunctionImaginary.prototype.get_name = function () {
        return "imaginary";
    };
    Object.defineProperty(UltraCalcFunctionImaginary.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImaginary.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionImaginary.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImaginary.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionImaginary.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImaginary.$t = markType(UltraCalcFunctionImaginary, 'UltraCalcFunctionImaginary', BuiltInFunctionBase.$);
    return UltraCalcFunctionImaginary;
}(BuiltInFunctionBase));
export { UltraCalcFunctionImaginary };
/**
 * @hidden
 */
var UltraCalcFunctionImArgument = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionImArgument, _super);
    function UltraCalcFunctionImArgument() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionImArgument.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return c;
        }
        var d = c.toString();
        var e = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, d);
        if (e.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(e.ac());
    };
    UltraCalcFunctionImArgument.prototype.get_name = function () {
        return "imargument";
    };
    Object.defineProperty(UltraCalcFunctionImArgument.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImArgument.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionImArgument.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImArgument.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionImArgument.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImArgument.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionImArgument.$t = markType(UltraCalcFunctionImArgument, 'UltraCalcFunctionImArgument', BuiltInFunctionBase.$);
    return UltraCalcFunctionImArgument;
}(BuiltInFunctionBase));
export { UltraCalcFunctionImArgument };
/**
 * @hidden
 */
var UltraCalcFunctionImConjugate = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionImConjugate, _super);
    function UltraCalcFunctionImConjugate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionImConjugate.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return c;
        }
        var d = c.toString();
        var e = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, d);
        if (e.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var f = e.c();
        return new ExcelCalcValue(f.toString());
    };
    UltraCalcFunctionImConjugate.prototype.get_name = function () {
        return "imconjugate";
    };
    Object.defineProperty(UltraCalcFunctionImConjugate.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImConjugate.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionImConjugate.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImConjugate.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionImConjugate.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImConjugate.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionImConjugate.$t = markType(UltraCalcFunctionImConjugate, 'UltraCalcFunctionImConjugate', BuiltInFunctionBase.$);
    return UltraCalcFunctionImConjugate;
}(BuiltInFunctionBase));
export { UltraCalcFunctionImConjugate };
/**
 * @hidden
 */
var UltraCalcFunctionImCos = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionImCos, _super);
    function UltraCalcFunctionImCos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionImCos.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return c;
        }
        var d = c.toString();
        var e = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, d);
        if (e.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var f = e.d();
        return new ExcelCalcValue(f.toString());
    };
    UltraCalcFunctionImCos.prototype.get_name = function () {
        return "imcos";
    };
    Object.defineProperty(UltraCalcFunctionImCos.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImCos.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionImCos.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImCos.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionImCos.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImCos.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionImCos.$t = markType(UltraCalcFunctionImCos, 'UltraCalcFunctionImCos', BuiltInFunctionBase.$);
    return UltraCalcFunctionImCos;
}(BuiltInFunctionBase));
export { UltraCalcFunctionImCos };
/**
 * @hidden
 */
var UltraCalcFunctionImDiv = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionImDiv, _super);
    function UltraCalcFunctionImDiv() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionImDiv.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return c;
        }
        var d = c.toString();
        var e = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, d);
        if (e.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var f = a.pop();
        if (f.isError) {
            return f;
        }
        var g = f.toString();
        var h = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, g);
        if (h.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var i = UltraCalcFunctionComplex_ComplexNumber.i(h, e);
        if (i.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(i.toString());
    };
    UltraCalcFunctionImDiv.prototype.get_name = function () {
        return "imdiv";
    };
    Object.defineProperty(UltraCalcFunctionImDiv.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImDiv.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionImDiv.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImDiv.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionImDiv.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImDiv.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionImDiv.$t = markType(UltraCalcFunctionImDiv, 'UltraCalcFunctionImDiv', BuiltInFunctionBase.$);
    return UltraCalcFunctionImDiv;
}(BuiltInFunctionBase));
export { UltraCalcFunctionImDiv };
/**
 * @hidden
 */
var UltraCalcFunctionImExp = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionImExp, _super);
    function UltraCalcFunctionImExp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionImExp.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return c;
        }
        var d = c.toString();
        var e = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, d);
        if (e.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var f = e.e();
        if (f.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(f.toString());
    };
    UltraCalcFunctionImExp.prototype.get_name = function () {
        return "imexp";
    };
    Object.defineProperty(UltraCalcFunctionImExp.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImExp.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionImExp.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImExp.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionImExp.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImExp.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionImExp.$t = markType(UltraCalcFunctionImExp, 'UltraCalcFunctionImExp', BuiltInFunctionBase.$);
    return UltraCalcFunctionImExp;
}(BuiltInFunctionBase));
export { UltraCalcFunctionImExp };
/**
 * @hidden
 */
var UltraCalcFunctionImLn = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionImLn, _super);
    function UltraCalcFunctionImLn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionImLn.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return c;
        }
        var d = c.toString();
        var e = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, d);
        if (e.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var f = e.m();
        if (f.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(f.toString());
    };
    UltraCalcFunctionImLn.prototype.get_name = function () {
        return "imln";
    };
    Object.defineProperty(UltraCalcFunctionImLn.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImLn.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionImLn.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImLn.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionImLn.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImLn.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionImLn.$t = markType(UltraCalcFunctionImLn, 'UltraCalcFunctionImLn', BuiltInFunctionBase.$);
    return UltraCalcFunctionImLn;
}(BuiltInFunctionBase));
export { UltraCalcFunctionImLn };
/**
 * @hidden
 */
var UltraCalcFunctionImReal = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionImReal, _super);
    function UltraCalcFunctionImReal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionImReal.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return c;
        }
        var d = c.toString();
        var e = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, d);
        if (e.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(e.aj);
    };
    UltraCalcFunctionImReal.prototype.get_name = function () {
        return "imreal";
    };
    Object.defineProperty(UltraCalcFunctionImReal.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImReal.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionImReal.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImReal.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionImReal.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImReal.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionImReal.$t = markType(UltraCalcFunctionImReal, 'UltraCalcFunctionImReal', BuiltInFunctionBase.$);
    return UltraCalcFunctionImReal;
}(BuiltInFunctionBase));
export { UltraCalcFunctionImReal };
/**
 * @hidden
 */
var UltraCalcFunctionImSub = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionImSub, _super);
    function UltraCalcFunctionImSub() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionImSub.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return c;
        }
        var d = c.toString();
        var e = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, d);
        if (e.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var f = a.pop();
        if (f.isError) {
            return f;
        }
        var g = f.toString();
        var h = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, g);
        if (h.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var i = UltraCalcFunctionComplex_ComplexNumber.l(h, e);
        if (i.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(i.toString());
    };
    UltraCalcFunctionImSub.prototype.get_name = function () {
        return "imsub";
    };
    Object.defineProperty(UltraCalcFunctionImSub.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImSub.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionImSub.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImSub.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionImSub.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImSub.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionImSub.$t = markType(UltraCalcFunctionImSub, 'UltraCalcFunctionImSub', BuiltInFunctionBase.$);
    return UltraCalcFunctionImSub;
}(BuiltInFunctionBase));
export { UltraCalcFunctionImSub };
/**
 * @hidden
 */
var UltraCalcFunctionImProduct = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionImProduct, _super);
    function UltraCalcFunctionImProduct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionImProduct.prototype.evaluate = function (a, b) {
        var c = this._getArguments(a, b, true);
        c.reverse();
        var d = null;
        var e = null;
        for (var g = 0; g < c.length; g++) {
            var f = c[g];
            if (f.isError) {
                return new ExcelCalcValue(f.toErrorValue());
            }
            var h = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, f.toString());
            if (h.y == false) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            if (e == null) {
                e = h.an;
            }
            else if (h.an != e) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            if (d == null) {
                d = h;
            }
            else {
                d = UltraCalcFunctionComplex_ComplexNumber.j(d, h);
            }
        }
        if (d.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(d.toString());
    };
    UltraCalcFunctionImProduct.prototype.canParameterBeEnumerable = function (a) {
        return true;
    };
    UltraCalcFunctionImProduct.prototype.get_name = function () {
        return "improduct";
    };
    Object.defineProperty(UltraCalcFunctionImProduct.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImProduct.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionImProduct.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImProduct.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionImProduct.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImProduct.$t = markType(UltraCalcFunctionImProduct, 'UltraCalcFunctionImProduct', BuiltInFunctionBase.$);
    return UltraCalcFunctionImProduct;
}(BuiltInFunctionBase));
export { UltraCalcFunctionImProduct };
/**
 * @hidden
 */
var UltraCalcFunctionImSum = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionImSum, _super);
    function UltraCalcFunctionImSum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionImSum.prototype.evaluate = function (a, b) {
        var c = this._getArguments(a, b, true);
        c.reverse();
        var d = null;
        var e = null;
        for (var g = 0; g < c.length; g++) {
            var f = c[g];
            if (f.isError) {
                return new ExcelCalcValue(f.toErrorValue());
            }
            var h = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, f.toString());
            if (h.y == false) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            if (e == null) {
                e = h.an;
            }
            else if (h.an != e) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            if (d == null) {
                d = h;
            }
            else {
                d = UltraCalcFunctionComplex_ComplexNumber.h(d, h);
            }
        }
        if (d.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(d.toString());
    };
    UltraCalcFunctionImSum.prototype.canParameterBeEnumerable = function (a) {
        return true;
    };
    UltraCalcFunctionImSum.prototype.get_name = function () {
        return "imsum";
    };
    Object.defineProperty(UltraCalcFunctionImSum.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImSum.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionImSum.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImSum.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionImSum.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImSum.$t = markType(UltraCalcFunctionImSum, 'UltraCalcFunctionImSum', BuiltInFunctionBase.$);
    return UltraCalcFunctionImSum;
}(BuiltInFunctionBase));
export { UltraCalcFunctionImSum };
/**
 * @hidden
 */
var UltraCalcFunctionImLog10 = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionImLog10, _super);
    function UltraCalcFunctionImLog10() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionImLog10.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return c;
        }
        var d = c.toString();
        var e = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, d);
        if (e.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var f = e.n();
        if (f.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(f.toString());
    };
    UltraCalcFunctionImLog10.prototype.get_name = function () {
        return "imlog10";
    };
    Object.defineProperty(UltraCalcFunctionImLog10.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImLog10.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionImLog10.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImLog10.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionImLog10.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImLog10.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionImLog10.$t = markType(UltraCalcFunctionImLog10, 'UltraCalcFunctionImLog10', BuiltInFunctionBase.$);
    return UltraCalcFunctionImLog10;
}(BuiltInFunctionBase));
export { UltraCalcFunctionImLog10 };
/**
 * @hidden
 */
var UltraCalcFunctionImLog2 = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionImLog2, _super);
    function UltraCalcFunctionImLog2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionImLog2.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return c;
        }
        var d = c.toString();
        var e = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, d);
        if (e.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var f = e.o();
        if (f.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(f.toString());
    };
    UltraCalcFunctionImLog2.prototype.get_name = function () {
        return "imlog2";
    };
    Object.defineProperty(UltraCalcFunctionImLog2.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImLog2.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionImLog2.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImLog2.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionImLog2.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImLog2.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionImLog2.$t = markType(UltraCalcFunctionImLog2, 'UltraCalcFunctionImLog2', BuiltInFunctionBase.$);
    return UltraCalcFunctionImLog2;
}(BuiltInFunctionBase));
export { UltraCalcFunctionImLog2 };
/**
 * @hidden
 */
var UltraCalcFunctionImSin = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionImSin, _super);
    function UltraCalcFunctionImSin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionImSin.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return c;
        }
        var d = c.toString();
        var e = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, d);
        if (e.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var f = e.v();
        if (f.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(f.toString());
    };
    UltraCalcFunctionImSin.prototype.get_name = function () {
        return "imsin";
    };
    Object.defineProperty(UltraCalcFunctionImSin.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImSin.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionImSin.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImSin.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionImSin.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImSin.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionImSin.$t = markType(UltraCalcFunctionImSin, 'UltraCalcFunctionImSin', BuiltInFunctionBase.$);
    return UltraCalcFunctionImSin;
}(BuiltInFunctionBase));
export { UltraCalcFunctionImSin };
/**
 * @hidden
 */
var UltraCalcFunctionImSqrt = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionImSqrt, _super);
    function UltraCalcFunctionImSqrt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionImSqrt.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return c;
        }
        var d = c.toString();
        var e = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, d);
        if (e.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var f = e.w();
        if (f.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(f.toString());
    };
    UltraCalcFunctionImSqrt.prototype.get_name = function () {
        return "imsqrt";
    };
    Object.defineProperty(UltraCalcFunctionImSqrt.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImSqrt.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionImSqrt.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImSqrt.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionImSqrt.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImSqrt.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionImSqrt.$t = markType(UltraCalcFunctionImSqrt, 'UltraCalcFunctionImSqrt', BuiltInFunctionBase.$);
    return UltraCalcFunctionImSqrt;
}(BuiltInFunctionBase));
export { UltraCalcFunctionImSqrt };
/**
 * @hidden
 */
var UltraCalcFunctionImPower = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionImPower, _super);
    function UltraCalcFunctionImPower() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionImPower.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d = c._toDouble3();
        var e = a.pop();
        if (e.isError) {
            return e;
        }
        var f = e.toString();
        var g = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, f);
        if (g.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var h = g.u(d);
        if (h.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(h.toString());
    };
    UltraCalcFunctionImPower.prototype.get_name = function () {
        return "impower";
    };
    Object.defineProperty(UltraCalcFunctionImPower.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImPower.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionImPower.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImPower.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionImPower.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionImPower.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionImPower.$t = markType(UltraCalcFunctionImPower, 'UltraCalcFunctionImPower', BuiltInFunctionBase.$);
    return UltraCalcFunctionImPower;
}(BuiltInFunctionBase));
export { UltraCalcFunctionImPower };
/**
 * @hidden
 */
var UltraCalcFunctionDollarFr = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionDollarFr, _super);
    function UltraCalcFunctionDollarFr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionDollarFr.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d = c._toDecimal2();
        if (d < 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var e = truncate(d);
        if (e == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(2));
        }
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var f = c._toDouble3();
        var g = MathUtilities.j(f);
        var h = f - g;
        h *= e;
        var i = UltraCalcFunctionDollarFr._ak(e);
        h /= i;
        f = g + h;
        return new ExcelCalcValue(f);
    };
    UltraCalcFunctionDollarFr._ak = function (a) {
        var b = log10(a);
        var c = Math.round(b);
        var d = Math.pow(10, c);
        if (d < a) {
            d *= 10;
        }
        var e = round10N(d, 0);
        return e;
    };
    UltraCalcFunctionDollarFr.prototype.get_name = function () {
        return "dollarfr";
    };
    Object.defineProperty(UltraCalcFunctionDollarFr.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDollarFr.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionDollarFr.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDollarFr.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionDollarFr.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDollarFr.$t = markType(UltraCalcFunctionDollarFr, 'UltraCalcFunctionDollarFr', BuiltInFunctionBase.$);
    return UltraCalcFunctionDollarFr;
}(BuiltInFunctionBase));
export { UltraCalcFunctionDollarFr };
/**
 * @hidden
 */
var UltraCalcFunctionDollarDe = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionDollarDe, _super);
    function UltraCalcFunctionDollarDe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionDollarDe.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d = c._toDecimal2();
        if (d < 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var e = truncate(d);
        if (e == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(2));
        }
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var f = c._toDouble3();
        var g = MathUtilities.j(f);
        var h = f - g;
        h /= e;
        var i = UltraCalcFunctionDollarFr._ak(e);
        h *= i;
        f = g + h;
        return new ExcelCalcValue(f);
    };
    UltraCalcFunctionDollarDe.prototype.get_name = function () {
        return "dollarde";
    };
    Object.defineProperty(UltraCalcFunctionDollarDe.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDollarDe.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionDollarDe.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDollarDe.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionDollarDe.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDollarDe.$t = markType(UltraCalcFunctionDollarDe, 'UltraCalcFunctionDollarDe', BuiltInFunctionBase.$);
    return UltraCalcFunctionDollarDe;
}(BuiltInFunctionBase));
export { UltraCalcFunctionDollarDe };
/**
 * @hidden
 */
var UltraCalcFunctionInfo = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionInfo, _super);
    function UltraCalcFunctionInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionInfo.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d = c.toString();
        switch (d) {
            case "system": return new ExcelCalcValue("pcdos");
            case "numfile":
            case "origin":
            case "recalc":
            case "release": break;
            case "memavail":
            case "memused":
            case "totmem": break;
        }
        return new ExcelCalcValue(new ExcelCalcErrorValue(3));
    };
    UltraCalcFunctionInfo.prototype.get_name = function () {
        return "info";
    };
    Object.defineProperty(UltraCalcFunctionInfo.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionInfo.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionInfo.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionInfo.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionInfo.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionInfo.$t = markType(UltraCalcFunctionInfo, 'UltraCalcFunctionInfo', BuiltInFunctionBase.$);
    return UltraCalcFunctionInfo;
}(BuiltInFunctionBase));
export { UltraCalcFunctionInfo };
/**
 * @hidden
 */
var UltraCalcFunctionN = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionN, _super);
    function UltraCalcFunctionN() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionN.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d;
        if (c.isBoolean) {
            d = c._toBoolean1() ? 1 : 0;
            return new ExcelCalcValue(d);
        }
        var e = c._getResolvedValue();
        if (typeCast(Date_$type, e) !== null) {
            return new ExcelCalcValue(e);
        }
        if (typeof e === 'string') {
            return new ExcelCalcValue(0);
        }
        var f = ((function () { var g = c._toDouble1(d); d = g.p0; return g.ret; })());
        if (f) {
            return new ExcelCalcValue(d);
        }
        return new ExcelCalcValue(0);
    };
    UltraCalcFunctionN.prototype.get_name = function () {
        return "n";
    };
    Object.defineProperty(UltraCalcFunctionN.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionN.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionN.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionN.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionN.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionN.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionN.$t = markType(UltraCalcFunctionN, 'UltraCalcFunctionN', BuiltInFunctionBase.$);
    return UltraCalcFunctionN;
}(BuiltInFunctionBase));
export { UltraCalcFunctionN };
/**
 * @hidden
 */
var UltraCalcFunctionFact = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionFact, _super);
    function UltraCalcFunctionFact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionFact.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d = c._toDecimal2();
        if (d < 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var e = truncate(d);
        var f = UltraCalcFunctionFact._ak(e);
        if (isInfinity(f)) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(f);
    };
    UltraCalcFunctionFact.prototype.get_name = function () {
        return "fact";
    };
    Object.defineProperty(UltraCalcFunctionFact.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFact.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionFact.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFact.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionFact.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFact._ak = function (a, b) {
        if (b === void 0) { b = 1; }
        if (a == 0) {
            a = 1;
        }
        var c = 1;
        for (var d = a; d > 1; d -= b) {
            c *= d;
        }
        return c;
    };
    UltraCalcFunctionFact.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionFact.$t = markType(UltraCalcFunctionFact, 'UltraCalcFunctionFact', BuiltInFunctionBase.$);
    return UltraCalcFunctionFact;
}(BuiltInFunctionBase));
export { UltraCalcFunctionFact };
/**
 * @hidden
 */
var UltraCalcFunctionFactDouble = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionFactDouble, _super);
    function UltraCalcFunctionFactDouble() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionFactDouble.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d = c._toDecimal2();
        if (d < 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var e = truncate(d);
        var f = UltraCalcFunctionFact._ak(e, 2);
        if (isInfinity(f)) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(f);
    };
    UltraCalcFunctionFactDouble.prototype.get_name = function () {
        return "factdouble";
    };
    Object.defineProperty(UltraCalcFunctionFactDouble.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFactDouble.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionFactDouble.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFactDouble.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionFactDouble.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFactDouble.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionFactDouble.$t = markType(UltraCalcFunctionFactDouble, 'UltraCalcFunctionFactDouble', BuiltInFunctionBase.$);
    return UltraCalcFunctionFactDouble;
}(BuiltInFunctionBase));
export { UltraCalcFunctionFactDouble };
/**
 * @hidden
 */
var UltraCalcFunctionCombin = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionCombin, _super);
    function UltraCalcFunctionCombin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionCombin.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d = c._toDecimal2();
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var e = c._toDecimal2();
        var f = truncate(d);
        var g = truncate(e);
        if (e < 0 || d < 0 || g < f) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var h = UltraCalcFunctionCombin._am(g, f, false);
        if (isNaN_(h)) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(h);
    };
    UltraCalcFunctionCombin._am = function (a, b, c) {
        if (c) {
            a = a + b - 1;
        }
        if (a <= 170) {
            var d = UltraCalcFunctionFact._ak(a);
            var e = UltraCalcFunctionFact._ak(b);
            var f = a - b;
            var g = UltraCalcFunctionFact._ak(f);
            var h = d / (e * g);
            return h;
        }
        else {
            return UltraCalcFunctionCombin._an(a, b);
        }
    };
    UltraCalcFunctionCombin._an = function (a, b) {
        if (b > a) {
            return NaN;
        }
        if (UltraCalcFunctionCombin._ak == null) {
            UltraCalcFunctionCombin._ak = new Stack$1(Number_$type);
        }
        else {
            UltraCalcFunctionCombin._ak.g();
        }
        if (UltraCalcFunctionCombin._al == null) {
            UltraCalcFunctionCombin._al = new Stack$1(Number_$type);
        }
        else {
            UltraCalcFunctionCombin._al.g();
        }
        var c = 1;
        while (true) {
            if (b <= 0) {
                break;
            }
            if (b > intDivide(a, 2)) {
                b = a - b;
            }
            else {
                UltraCalcFunctionCombin._ak.h(b);
                UltraCalcFunctionCombin._al.h(a);
                a--;
                b--;
            }
        }
        while (UltraCalcFunctionCombin._al.f > 0) {
            var d = UltraCalcFunctionCombin._al.e();
            var e = UltraCalcFunctionCombin._ak.e();
            c = d * c / e;
        }
        return c;
    };
    UltraCalcFunctionCombin.prototype.get_name = function () {
        return "combin";
    };
    Object.defineProperty(UltraCalcFunctionCombin.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCombin.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionCombin.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCombin.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionCombin.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCombin.$t = markType(UltraCalcFunctionCombin, 'UltraCalcFunctionCombin', BuiltInFunctionBase.$);
    UltraCalcFunctionCombin._ak = null;
    UltraCalcFunctionCombin._al = null;
    return UltraCalcFunctionCombin;
}(BuiltInFunctionBase));
export { UltraCalcFunctionCombin };
/**
 * @hidden
 */
var UltraCalcFunctionCombina = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionCombina, _super);
    function UltraCalcFunctionCombina() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionCombina.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d = c._toDecimal2();
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var e = c._toDecimal2();
        var f = truncate(d);
        var g = truncate(e);
        if (e < 0 || d < 0 || (g == 0 && f > 0)) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var h = UltraCalcFunctionCombin._am(g, f, true);
        if (isNaN_(h)) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(h);
    };
    UltraCalcFunctionCombina.prototype.get_name = function () {
        return "combina";
    };
    Object.defineProperty(UltraCalcFunctionCombina.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCombina.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionCombina.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCombina.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionCombina.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCombina.$t = markType(UltraCalcFunctionCombina, 'UltraCalcFunctionCombina', BuiltInFunctionBase.$);
    return UltraCalcFunctionCombina;
}(BuiltInFunctionBase));
export { UltraCalcFunctionCombina };
/**
 * @hidden
 */
var UltraCalcFunctionBinomDist = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionBinomDist, _super);
    function UltraCalcFunctionBinomDist() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionBinomDist.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d = c._toBoolean1();
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var e = c._toDouble3();
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var f = truncate(c._toDecimal2());
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var g = truncate(c._toDecimal2());
        return UltraCalcFunctionBinomDist._ak(f, e, d ? 0 : g, g);
    };
    UltraCalcFunctionBinomDist._ak = function (a, b, c, d) {
        if (c < 0 || c > a || b < 0 || b > 1 || c > d || d > a) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var e = 0;
        if (a >= 1030) {
            var f = Math.pow(10, -12);
            var g = 0;
            var h = 0;
            var i = c;
            var j = d;
            var k = a;
            var l = b;
            var m = truncate((k * l));
            var n = c != d;
            g++;
            if (i <= m && m <= j) {
                h++;
            }
            var o = 1;
            var p = false;
            var q = m + 1;
            while (!p && q <= k) {
                var r = o * (k - q + 1) * l / (q * (1 - l));
                g += r;
                if (i <= q && q <= j) {
                    h += r;
                }
                if (r <= f) {
                    p = true;
                }
                o = r;
                q++;
            }
            o = 1;
            p = false;
            q = m - 1;
            while (!p && q >= 0) {
                var s = o * (q + 1) * (1 - l) / ((k - q) * l);
                g += s;
                if (i <= q && q <= j) {
                    h += s;
                }
                if (s <= f) {
                    p = true;
                }
                o = s;
                q--;
            }
            e = h / g;
        }
        else {
            for (var t = c; t <= d && !isNaN_(e); t++) {
                e += UltraCalcFunctionBinomDist._al(t, a, b);
            }
        }
        if (isNaN_(e)) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(e);
    };
    UltraCalcFunctionBinomDist._al = function (a, b, c) {
        var d = UltraCalcFunctionCombin._am(b, a, false);
        return d * Math.pow(c, a) * Math.pow(1 - c, b - a);
    };
    UltraCalcFunctionBinomDist.prototype.get_name = function () {
        return "binomdist";
    };
    Object.defineProperty(UltraCalcFunctionBinomDist.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBinomDist.prototype.get_minArgs = function () {
        return 4;
    };
    Object.defineProperty(UltraCalcFunctionBinomDist.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBinomDist.prototype.get_maxArgs = function () {
        return 4;
    };
    Object.defineProperty(UltraCalcFunctionBinomDist.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBinomDist.$t = markType(UltraCalcFunctionBinomDist, 'UltraCalcFunctionBinomDist', BuiltInFunctionBase.$);
    return UltraCalcFunctionBinomDist;
}(BuiltInFunctionBase));
export { UltraCalcFunctionBinomDist };
/**
 * @hidden
 */
var UltraCalcFunctionCritBinom = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionCritBinom, _super);
    function UltraCalcFunctionCritBinom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionCritBinom.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d = c._toDouble3();
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var e = c._toDouble3();
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var f = truncate(c._toDecimal2());
        if (f < 0 || e <= 0 || e >= 1 || d <= 0 || d >= 1) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var g = 0;
        if (f >= 1030) {
            var h = Math.pow(10, -12);
            var i = f;
            var j = e;
            var k = void 0, l = void 0;
            if (d <= 0.5) {
                k = Math.sqrt(Math.log(1 / (d * d)));
                l = -k + (2.515517 + 0.802853 * k + 0.010328 * k * k) / (1 + 1.432788 * k + 0.189269 * k * k + 0.001308 * k * k * k);
            }
            else {
                k = Math.sqrt(Math.log(1 / Math.pow(1 - d, 2)));
                l = k - (2.515517 + 0.802853 * k + 0.010328 * k * k) / (1 + 1.432788 * k + 0.189269 * k * k + 0.001308 * k * k * k);
            }
            var m = truncate(Math.floor(i * j + l * Math.sqrt(i * j * (1 - j))));
            if (m < 0) {
                m = 0;
            }
            else if (m > i) {
                m = i;
            }
            var n = truncate((i * j));
            var o = 0;
            var p = 0;
            var q = 0;
            o = o + 1;
            if (n == m) {
                p = p + 1;
            }
            if (n <= m) {
                q = q + 1;
            }
            var r = 1;
            var s = false;
            var t = n + 1;
            while (!s && t <= i) {
                var u = r * (i - t + 1) * j / (t * (1 - j));
                o += u;
                if (t == m) {
                    p += u;
                }
                if (t <= m) {
                    q += u;
                }
                if (u <= h) {
                    s = true;
                }
                r = u;
                t = t + 1;
            }
            r = 1;
            s = false;
            t = n - 1;
            while (!s && t >= 0) {
                var v = r * (t + 1) * (1 - j) / ((i - t) * j);
                o = o + v;
                if (t == m) {
                    p += v;
                }
                if (t <= m) {
                    q += v;
                }
                if (v <= h) {
                    s = true;
                }
                r = v;
                t = t - 1;
            }
            var w = p / o;
            var x = q / o;
            var y = x - w;
            while (true) {
                if (y < d && x >= d) {
                    g = m;
                    break;
                }
                if (y < d && x < d) {
                    var z = w * (i - m) * j / m / (1 - j);
                    y = x;
                    x = x + z;
                    w = z;
                    m++;
                }
                else if (y > d && x > d) {
                    var aa = w * m * (1 - j) / (i - m + 1) / j;
                    x = y;
                    y = y - w;
                    w = aa;
                    m--;
                }
                else {
                    break;
                }
            }
        }
        else {
            var ab = 0;
            for (g = 0; g <= f; g++) {
                ab += UltraCalcFunctionBinomDist._al(g, f, e);
                if (ab >= d) {
                    break;
                }
            }
        }
        return new ExcelCalcValue(g);
    };
    UltraCalcFunctionCritBinom.prototype.get_name = function () {
        return "critbinom";
    };
    Object.defineProperty(UltraCalcFunctionCritBinom.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCritBinom.prototype.get_minArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionCritBinom.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCritBinom.prototype.get_maxArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionCritBinom.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCritBinom.$t = markType(UltraCalcFunctionCritBinom, 'UltraCalcFunctionCritBinom', BuiltInFunctionBase.$);
    return UltraCalcFunctionCritBinom;
}(BuiltInFunctionBase));
export { UltraCalcFunctionCritBinom };
/**
 * @hidden
 */
var UltraCalcFunctionDegrees = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionDegrees, _super);
    function UltraCalcFunctionDegrees() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionDegrees.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d = c._toDouble3();
        var e = UltraCalcFunctionDegrees._ak(d);
        return new ExcelCalcValue(e);
    };
    UltraCalcFunctionDegrees.prototype.get_name = function () {
        return "degrees";
    };
    Object.defineProperty(UltraCalcFunctionDegrees.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDegrees.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionDegrees.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDegrees.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionDegrees.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDegrees._ak = function (a) {
        var b = 180 / Math.PI;
        return a * b;
    };
    UltraCalcFunctionDegrees.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionDegrees.$t = markType(UltraCalcFunctionDegrees, 'UltraCalcFunctionDegrees', BuiltInFunctionBase.$);
    return UltraCalcFunctionDegrees;
}(BuiltInFunctionBase));
export { UltraCalcFunctionDegrees };
/**
 * @hidden
 */
var UltraCalcFunctionRadians = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionRadians, _super);
    function UltraCalcFunctionRadians() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionRadians.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d = c._toDouble3();
        var e = UltraCalcFunctionRadians._ak(d);
        return new ExcelCalcValue(e);
    };
    UltraCalcFunctionRadians.prototype.get_name = function () {
        return "radians";
    };
    Object.defineProperty(UltraCalcFunctionRadians.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRadians.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionRadians.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRadians.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionRadians.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRadians._ak = function (a) {
        var b = Math.PI / 180;
        return a * b;
    };
    UltraCalcFunctionRadians.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionRadians.$t = markType(UltraCalcFunctionRadians, 'UltraCalcFunctionRadians', BuiltInFunctionBase.$);
    return UltraCalcFunctionRadians;
}(BuiltInFunctionBase));
export { UltraCalcFunctionRadians };
/**
 * @hidden
 */
var UltraCalcFunctionGcd = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionGcd, _super);
    function UltraCalcFunctionGcd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionGcd.prototype.evaluate = function (a, b) {
        var c = this._getArguments(a, b, true);
        var d = c[0]._toInt();
        if (d < 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var e;
        if (c.length == 1) {
            return new ExcelCalcValue(d);
        }
        for (var f = 1; f < c.length; f++) {
            var g = c[f];
            if (g.isError) {
                return new ExcelCalcValue(g.toErrorValue());
            }
            e = g._toInt();
            if (e < 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            d = UltraCalcFunctionGcd._ak(d, e);
        }
        return new ExcelCalcValue(d);
    };
    UltraCalcFunctionGcd.prototype.canParameterBeEnumerable = function (a) {
        return true;
    };
    UltraCalcFunctionGcd.prototype.get_name = function () {
        return "gcd";
    };
    Object.defineProperty(UltraCalcFunctionGcd.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionGcd.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionGcd.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionGcd.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionGcd.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionGcd._ak = function (a, b) {
        if (b == 0) {
            return a;
        }
        return UltraCalcFunctionGcd._ak(b, a % b);
    };
    UltraCalcFunctionGcd.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionGcd.$t = markType(UltraCalcFunctionGcd, 'UltraCalcFunctionGcd', BuiltInFunctionBase.$);
    return UltraCalcFunctionGcd;
}(BuiltInFunctionBase));
export { UltraCalcFunctionGcd };
/**
 * @hidden
 */
var UltraCalcFunctionLcm = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionLcm, _super);
    function UltraCalcFunctionLcm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionLcm.prototype.evaluate = function (a, b) {
        var c = this._getArguments(a, b, true);
        var d = c[0]._toInt();
        if (d < 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var e;
        if (c.length == 1) {
            return new ExcelCalcValue(d);
        }
        for (var f = 1; f < c.length; f++) {
            var g = c[f];
            if (g.isError) {
                return new ExcelCalcValue(g.toErrorValue());
            }
            e = g._toInt();
            if (e < 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            d = UltraCalcFunctionLcm._ak(d, e);
        }
        return new ExcelCalcValue(d);
    };
    UltraCalcFunctionLcm.prototype.canParameterBeEnumerable = function (a) {
        return true;
    };
    UltraCalcFunctionLcm.prototype.get_name = function () {
        return "lcm";
    };
    Object.defineProperty(UltraCalcFunctionLcm.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionLcm.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionLcm.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionLcm.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionLcm.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionLcm._ak = function (a, b) {
        if (a == 0 && b == 0) {
            return 0;
        }
        return intDivide((a * b), UltraCalcFunctionGcd._ak(a, b));
    };
    UltraCalcFunctionLcm.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionLcm.$t = markType(UltraCalcFunctionLcm, 'UltraCalcFunctionLcm', BuiltInFunctionBase.$);
    return UltraCalcFunctionLcm;
}(BuiltInFunctionBase));
export { UltraCalcFunctionLcm };
/**
 * @hidden
 */
var UltraCalcFunctionMultinomial = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionMultinomial, _super);
    function UltraCalcFunctionMultinomial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionMultinomial.prototype.evaluate = function (a, b) {
        var c = this._getArguments(a, b, true);
        var d = 0;
        var e = 1;
        for (var f = 0; f < c.length; f++) {
            var g = c[f];
            if (g.isError) {
                return new ExcelCalcValue(g.toErrorValue());
            }
            var h = g._toInt();
            if (h < 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            d += h;
            e *= UltraCalcFunctionFact._ak(h);
        }
        var i = UltraCalcFunctionFact._ak(d);
        var j = i / e;
        return new ExcelCalcValue(j);
    };
    UltraCalcFunctionMultinomial.prototype.canParameterBeEnumerable = function (a) {
        return true;
    };
    UltraCalcFunctionMultinomial.prototype.get_name = function () {
        return "multinomial";
    };
    Object.defineProperty(UltraCalcFunctionMultinomial.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMultinomial.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionMultinomial.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMultinomial.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionMultinomial.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMultinomial.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionMultinomial.$t = markType(UltraCalcFunctionMultinomial, 'UltraCalcFunctionMultinomial', BuiltInFunctionBase.$);
    return UltraCalcFunctionMultinomial;
}(BuiltInFunctionBase));
export { UltraCalcFunctionMultinomial };
/**
 * @hidden
 */
var UltraCalcFunctionMRound = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionMRound, _super);
    function UltraCalcFunctionMRound() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionMRound.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d = c._toDouble3();
        var e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        var f = e._toDouble3();
        if (f < 0 && d > 0 || f > 0 && d < 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var g = UltraCalcFunctionMRound._ak(f, d);
        return new ExcelCalcValue(g);
    };
    UltraCalcFunctionMRound.prototype.get_name = function () {
        return "mround";
    };
    Object.defineProperty(UltraCalcFunctionMRound.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMRound.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionMRound.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMRound.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionMRound.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMRound._ak = function (a, b) {
        var c = a / b;
        if (isInfinity(c) || isNaN_(c)) {
            return 0;
        }
        c += 0.5;
        c = Math.floor(c);
        return c * b;
    };
    UltraCalcFunctionMRound.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionMRound.$t = markType(UltraCalcFunctionMRound, 'UltraCalcFunctionMRound', BuiltInFunctionBase.$);
    return UltraCalcFunctionMRound;
}(BuiltInFunctionBase));
export { UltraCalcFunctionMRound };
/**
 * @hidden
 */
var UltraCalcFunctionRandBetween = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionRandBetween, _super);
    function UltraCalcFunctionRandBetween() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._ak = new Random(0);
        return _this;
    }
    UltraCalcFunctionRandBetween.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d = c._toInt();
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var e = c._toInt();
        if (d < e) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(this._ak.next2(e, d + 1));
    };
    UltraCalcFunctionRandBetween.prototype.get_name = function () {
        return "randbetween";
    };
    Object.defineProperty(UltraCalcFunctionRandBetween.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRandBetween.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionRandBetween.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRandBetween.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionRandBetween.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRandBetween.$t = markType(UltraCalcFunctionRandBetween, 'UltraCalcFunctionRandBetween', BuiltInFunctionBase.$);
    return UltraCalcFunctionRandBetween;
}(BuiltInFunctionBase));
export { UltraCalcFunctionRandBetween };
/**
 * @hidden
 */
var UltraCalcFunctionRoman = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionRoman, _super);
    function UltraCalcFunctionRoman() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionRoman.prototype.evaluate = function (a, b) {
        var c;
        var d;
        if (b == 2) {
            d = a.pop();
            if (d.isError) {
                return new ExcelCalcValue(d.toErrorValue());
            }
            var e = d._getResolvedValue();
            if (typeCast(Boolean_$type, e) !== null) {
                c = e ? 0 : 4;
            }
            else {
                c = d._toInt();
            }
        }
        else {
            c = 0;
        }
        d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        var f = d._toInt();
        if (f < 0 || f > 3999) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        var g = new UltraCalcFunctionRoman_RomanNumeral(f);
        return new ExcelCalcValue(g.p(c));
    };
    UltraCalcFunctionRoman.prototype.get_name = function () {
        return "roman";
    };
    Object.defineProperty(UltraCalcFunctionRoman.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRoman.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionRoman.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRoman.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionRoman.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRoman.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionRoman.$t = markType(UltraCalcFunctionRoman, 'UltraCalcFunctionRoman', BuiltInFunctionBase.$);
    return UltraCalcFunctionRoman;
}(BuiltInFunctionBase));
export { UltraCalcFunctionRoman };
/**
 * @hidden
 */
var UltraCalcFunctionRoman_RomanNumeral = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionRoman_RomanNumeral, _super);
    function UltraCalcFunctionRoman_RomanNumeral(a) {
        var _this = _super.call(this) || this;
        _this.k = 0;
        if (a < 0 || a > 3999) {
            throw new ArgumentException(2, "Number must be between 1 and 3999", "number");
        }
        _this.k = a;
        return _this;
    }
    Object.defineProperty(UltraCalcFunctionRoman_RomanNumeral.prototype, "l", {
        get: function () {
            return this.k;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UltraCalcFunctionRoman_RomanNumeral, "b", {
        get: function () {
            if (UltraCalcFunctionRoman_RomanNumeral.a == null) {
                UltraCalcFunctionRoman_RomanNumeral.a = new List$1(Tuple$2.$.specialize(Number_$type, String_$type), 2, 13);
                UltraCalcFunctionRoman_RomanNumeral.a.add(Tuple.a(Number_$type, String_$type, 1000, "M"));
                UltraCalcFunctionRoman_RomanNumeral.a.add(Tuple.a(Number_$type, String_$type, 900, "CM"));
                UltraCalcFunctionRoman_RomanNumeral.a.add(Tuple.a(Number_$type, String_$type, 500, "D"));
                UltraCalcFunctionRoman_RomanNumeral.a.add(Tuple.a(Number_$type, String_$type, 400, "CD"));
                UltraCalcFunctionRoman_RomanNumeral.a.add(Tuple.a(Number_$type, String_$type, 100, "C"));
                UltraCalcFunctionRoman_RomanNumeral.a.add(Tuple.a(Number_$type, String_$type, 90, "XC"));
                UltraCalcFunctionRoman_RomanNumeral.a.add(Tuple.a(Number_$type, String_$type, 50, "L"));
                UltraCalcFunctionRoman_RomanNumeral.a.add(Tuple.a(Number_$type, String_$type, 40, "XL"));
                UltraCalcFunctionRoman_RomanNumeral.a.add(Tuple.a(Number_$type, String_$type, 10, "X"));
                UltraCalcFunctionRoman_RomanNumeral.a.add(Tuple.a(Number_$type, String_$type, 9, "IX"));
                UltraCalcFunctionRoman_RomanNumeral.a.add(Tuple.a(Number_$type, String_$type, 5, "V"));
                UltraCalcFunctionRoman_RomanNumeral.a.add(Tuple.a(Number_$type, String_$type, 4, "IV"));
                UltraCalcFunctionRoman_RomanNumeral.a.add(Tuple.a(Number_$type, String_$type, 1, "I"));
            }
            return UltraCalcFunctionRoman_RomanNumeral.a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UltraCalcFunctionRoman_RomanNumeral, "d", {
        get: function () {
            if (UltraCalcFunctionRoman_RomanNumeral.c == null) {
                UltraCalcFunctionRoman_RomanNumeral.c = new List$1(Tuple$2.$.specialize(Number_$type, String_$type), 2, 17);
                UltraCalcFunctionRoman_RomanNumeral.c.add(Tuple.a(Number_$type, String_$type, 1000, "M"));
                UltraCalcFunctionRoman_RomanNumeral.c.add(Tuple.a(Number_$type, String_$type, 950, "LM"));
                UltraCalcFunctionRoman_RomanNumeral.c.add(Tuple.a(Number_$type, String_$type, 900, "CM"));
                UltraCalcFunctionRoman_RomanNumeral.c.add(Tuple.a(Number_$type, String_$type, 500, "D"));
                UltraCalcFunctionRoman_RomanNumeral.c.add(Tuple.a(Number_$type, String_$type, 450, "LD"));
                UltraCalcFunctionRoman_RomanNumeral.c.add(Tuple.a(Number_$type, String_$type, 400, "CD"));
                UltraCalcFunctionRoman_RomanNumeral.c.add(Tuple.a(Number_$type, String_$type, 100, "C"));
                UltraCalcFunctionRoman_RomanNumeral.c.add(Tuple.a(Number_$type, String_$type, 95, "VC"));
                UltraCalcFunctionRoman_RomanNumeral.c.add(Tuple.a(Number_$type, String_$type, 90, "XC"));
                UltraCalcFunctionRoman_RomanNumeral.c.add(Tuple.a(Number_$type, String_$type, 50, "L"));
                UltraCalcFunctionRoman_RomanNumeral.c.add(Tuple.a(Number_$type, String_$type, 45, "VL"));
                UltraCalcFunctionRoman_RomanNumeral.c.add(Tuple.a(Number_$type, String_$type, 40, "XL"));
                UltraCalcFunctionRoman_RomanNumeral.c.add(Tuple.a(Number_$type, String_$type, 10, "X"));
                UltraCalcFunctionRoman_RomanNumeral.c.add(Tuple.a(Number_$type, String_$type, 9, "IX"));
                UltraCalcFunctionRoman_RomanNumeral.c.add(Tuple.a(Number_$type, String_$type, 5, "V"));
                UltraCalcFunctionRoman_RomanNumeral.c.add(Tuple.a(Number_$type, String_$type, 4, "IV"));
                UltraCalcFunctionRoman_RomanNumeral.c.add(Tuple.a(Number_$type, String_$type, 1, "I"));
            }
            return UltraCalcFunctionRoman_RomanNumeral.c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UltraCalcFunctionRoman_RomanNumeral, "f", {
        get: function () {
            if (UltraCalcFunctionRoman_RomanNumeral.e == null) {
                UltraCalcFunctionRoman_RomanNumeral.e = new List$1(Tuple$2.$.specialize(Number_$type, String_$type), 2, 21);
                UltraCalcFunctionRoman_RomanNumeral.e.add(Tuple.a(Number_$type, String_$type, 1000, "M"));
                UltraCalcFunctionRoman_RomanNumeral.e.add(Tuple.a(Number_$type, String_$type, 990, "XM"));
                UltraCalcFunctionRoman_RomanNumeral.e.add(Tuple.a(Number_$type, String_$type, 950, "LM"));
                UltraCalcFunctionRoman_RomanNumeral.e.add(Tuple.a(Number_$type, String_$type, 900, "CM"));
                UltraCalcFunctionRoman_RomanNumeral.e.add(Tuple.a(Number_$type, String_$type, 500, "D"));
                UltraCalcFunctionRoman_RomanNumeral.e.add(Tuple.a(Number_$type, String_$type, 490, "XD"));
                UltraCalcFunctionRoman_RomanNumeral.e.add(Tuple.a(Number_$type, String_$type, 450, "LD"));
                UltraCalcFunctionRoman_RomanNumeral.e.add(Tuple.a(Number_$type, String_$type, 400, "CD"));
                UltraCalcFunctionRoman_RomanNumeral.e.add(Tuple.a(Number_$type, String_$type, 100, "C"));
                UltraCalcFunctionRoman_RomanNumeral.e.add(Tuple.a(Number_$type, String_$type, 99, "IC"));
                UltraCalcFunctionRoman_RomanNumeral.e.add(Tuple.a(Number_$type, String_$type, 95, "VC"));
                UltraCalcFunctionRoman_RomanNumeral.e.add(Tuple.a(Number_$type, String_$type, 90, "XC"));
                UltraCalcFunctionRoman_RomanNumeral.e.add(Tuple.a(Number_$type, String_$type, 50, "L"));
                UltraCalcFunctionRoman_RomanNumeral.e.add(Tuple.a(Number_$type, String_$type, 49, "IL"));
                UltraCalcFunctionRoman_RomanNumeral.e.add(Tuple.a(Number_$type, String_$type, 45, "VL"));
                UltraCalcFunctionRoman_RomanNumeral.e.add(Tuple.a(Number_$type, String_$type, 40, "XL"));
                UltraCalcFunctionRoman_RomanNumeral.e.add(Tuple.a(Number_$type, String_$type, 10, "X"));
                UltraCalcFunctionRoman_RomanNumeral.e.add(Tuple.a(Number_$type, String_$type, 9, "IX"));
                UltraCalcFunctionRoman_RomanNumeral.e.add(Tuple.a(Number_$type, String_$type, 5, "V"));
                UltraCalcFunctionRoman_RomanNumeral.e.add(Tuple.a(Number_$type, String_$type, 4, "IV"));
                UltraCalcFunctionRoman_RomanNumeral.e.add(Tuple.a(Number_$type, String_$type, 1, "I"));
            }
            return UltraCalcFunctionRoman_RomanNumeral.e;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UltraCalcFunctionRoman_RomanNumeral, "h", {
        get: function () {
            if (UltraCalcFunctionRoman_RomanNumeral.g == null) {
                UltraCalcFunctionRoman_RomanNumeral.g = new List$1(Tuple$2.$.specialize(Number_$type, String_$type), 2, 23);
                UltraCalcFunctionRoman_RomanNumeral.g.add(Tuple.a(Number_$type, String_$type, 1000, "M"));
                UltraCalcFunctionRoman_RomanNumeral.g.add(Tuple.a(Number_$type, String_$type, 995, "VM"));
                UltraCalcFunctionRoman_RomanNumeral.g.add(Tuple.a(Number_$type, String_$type, 990, "XM"));
                UltraCalcFunctionRoman_RomanNumeral.g.add(Tuple.a(Number_$type, String_$type, 950, "LM"));
                UltraCalcFunctionRoman_RomanNumeral.g.add(Tuple.a(Number_$type, String_$type, 900, "CM"));
                UltraCalcFunctionRoman_RomanNumeral.g.add(Tuple.a(Number_$type, String_$type, 500, "D"));
                UltraCalcFunctionRoman_RomanNumeral.g.add(Tuple.a(Number_$type, String_$type, 495, "VD"));
                UltraCalcFunctionRoman_RomanNumeral.g.add(Tuple.a(Number_$type, String_$type, 490, "XD"));
                UltraCalcFunctionRoman_RomanNumeral.g.add(Tuple.a(Number_$type, String_$type, 450, "LD"));
                UltraCalcFunctionRoman_RomanNumeral.g.add(Tuple.a(Number_$type, String_$type, 400, "CD"));
                UltraCalcFunctionRoman_RomanNumeral.g.add(Tuple.a(Number_$type, String_$type, 100, "C"));
                UltraCalcFunctionRoman_RomanNumeral.g.add(Tuple.a(Number_$type, String_$type, 99, "IC"));
                UltraCalcFunctionRoman_RomanNumeral.g.add(Tuple.a(Number_$type, String_$type, 95, "VC"));
                UltraCalcFunctionRoman_RomanNumeral.g.add(Tuple.a(Number_$type, String_$type, 90, "XC"));
                UltraCalcFunctionRoman_RomanNumeral.g.add(Tuple.a(Number_$type, String_$type, 50, "L"));
                UltraCalcFunctionRoman_RomanNumeral.g.add(Tuple.a(Number_$type, String_$type, 49, "IL"));
                UltraCalcFunctionRoman_RomanNumeral.g.add(Tuple.a(Number_$type, String_$type, 45, "VL"));
                UltraCalcFunctionRoman_RomanNumeral.g.add(Tuple.a(Number_$type, String_$type, 40, "XL"));
                UltraCalcFunctionRoman_RomanNumeral.g.add(Tuple.a(Number_$type, String_$type, 10, "X"));
                UltraCalcFunctionRoman_RomanNumeral.g.add(Tuple.a(Number_$type, String_$type, 9, "IX"));
                UltraCalcFunctionRoman_RomanNumeral.g.add(Tuple.a(Number_$type, String_$type, 5, "V"));
                UltraCalcFunctionRoman_RomanNumeral.g.add(Tuple.a(Number_$type, String_$type, 4, "IV"));
                UltraCalcFunctionRoman_RomanNumeral.g.add(Tuple.a(Number_$type, String_$type, 1, "I"));
            }
            return UltraCalcFunctionRoman_RomanNumeral.g;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UltraCalcFunctionRoman_RomanNumeral, "j", {
        get: function () {
            if (UltraCalcFunctionRoman_RomanNumeral.i == null) {
                UltraCalcFunctionRoman_RomanNumeral.i = new List$1(Tuple$2.$.specialize(Number_$type, String_$type), 2, 25);
                UltraCalcFunctionRoman_RomanNumeral.i.add(Tuple.a(Number_$type, String_$type, 1000, "M"));
                UltraCalcFunctionRoman_RomanNumeral.i.add(Tuple.a(Number_$type, String_$type, 999, "IM"));
                UltraCalcFunctionRoman_RomanNumeral.i.add(Tuple.a(Number_$type, String_$type, 995, "VM"));
                UltraCalcFunctionRoman_RomanNumeral.i.add(Tuple.a(Number_$type, String_$type, 990, "XM"));
                UltraCalcFunctionRoman_RomanNumeral.i.add(Tuple.a(Number_$type, String_$type, 950, "LM"));
                UltraCalcFunctionRoman_RomanNumeral.i.add(Tuple.a(Number_$type, String_$type, 900, "CM"));
                UltraCalcFunctionRoman_RomanNumeral.i.add(Tuple.a(Number_$type, String_$type, 500, "D"));
                UltraCalcFunctionRoman_RomanNumeral.i.add(Tuple.a(Number_$type, String_$type, 499, "ID"));
                UltraCalcFunctionRoman_RomanNumeral.i.add(Tuple.a(Number_$type, String_$type, 495, "VD"));
                UltraCalcFunctionRoman_RomanNumeral.i.add(Tuple.a(Number_$type, String_$type, 490, "XD"));
                UltraCalcFunctionRoman_RomanNumeral.i.add(Tuple.a(Number_$type, String_$type, 450, "LD"));
                UltraCalcFunctionRoman_RomanNumeral.i.add(Tuple.a(Number_$type, String_$type, 400, "CD"));
                UltraCalcFunctionRoman_RomanNumeral.i.add(Tuple.a(Number_$type, String_$type, 100, "C"));
                UltraCalcFunctionRoman_RomanNumeral.i.add(Tuple.a(Number_$type, String_$type, 99, "IC"));
                UltraCalcFunctionRoman_RomanNumeral.i.add(Tuple.a(Number_$type, String_$type, 95, "VC"));
                UltraCalcFunctionRoman_RomanNumeral.i.add(Tuple.a(Number_$type, String_$type, 90, "XC"));
                UltraCalcFunctionRoman_RomanNumeral.i.add(Tuple.a(Number_$type, String_$type, 50, "L"));
                UltraCalcFunctionRoman_RomanNumeral.i.add(Tuple.a(Number_$type, String_$type, 49, "IL"));
                UltraCalcFunctionRoman_RomanNumeral.i.add(Tuple.a(Number_$type, String_$type, 45, "VL"));
                UltraCalcFunctionRoman_RomanNumeral.i.add(Tuple.a(Number_$type, String_$type, 40, "XL"));
                UltraCalcFunctionRoman_RomanNumeral.i.add(Tuple.a(Number_$type, String_$type, 10, "X"));
                UltraCalcFunctionRoman_RomanNumeral.i.add(Tuple.a(Number_$type, String_$type, 9, "IX"));
                UltraCalcFunctionRoman_RomanNumeral.i.add(Tuple.a(Number_$type, String_$type, 5, "V"));
                UltraCalcFunctionRoman_RomanNumeral.i.add(Tuple.a(Number_$type, String_$type, 4, "IV"));
                UltraCalcFunctionRoman_RomanNumeral.i.add(Tuple.a(Number_$type, String_$type, 1, "I"));
            }
            return UltraCalcFunctionRoman_RomanNumeral.i;
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRoman_RomanNumeral.prototype.toString = function () {
        return this.p(0);
    };
    UltraCalcFunctionRoman_RomanNumeral.prototype.o = function (a) {
        if (a) {
            return this.p(0);
        }
        else {
            return this.p(4);
        }
    };
    UltraCalcFunctionRoman_RomanNumeral.prototype.p = function (a) {
        if (this.k == 0) {
            return stringEmpty();
        }
        return UltraCalcFunctionRoman_RomanNumeral.m(this.k, a);
    };
    UltraCalcFunctionRoman_RomanNumeral.m = function (a, b) {
        var e_7, _e;
        var c;
        switch (b) {
            case 0:
                c = UltraCalcFunctionRoman_RomanNumeral.b;
                break;
            case 1:
                c = UltraCalcFunctionRoman_RomanNumeral.d;
                break;
            case 2:
                c = UltraCalcFunctionRoman_RomanNumeral.f;
                break;
            case 3:
                c = UltraCalcFunctionRoman_RomanNumeral.h;
                break;
            case 4:
                c = UltraCalcFunctionRoman_RomanNumeral.j;
                break;
            default: throw new ArgumentException(1, "form");
        }
        var d = new StringBuilder(0);
        var e = stringEmpty();
        try {
            for (var _h = tslib_1.__values(fromEnum(c)), _j = _h.next(); !_j.done; _j = _h.next()) {
                var f = _j.value;
                while (a >= f.c) {
                    a -= f.c;
                    d.l(f.d);
                }
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_j && !_j.done && (_e = _h.return)) _e.call(_h);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return d.toString();
    };
    UltraCalcFunctionRoman_RomanNumeral.$t = markType(UltraCalcFunctionRoman_RomanNumeral, 'UltraCalcFunctionRoman_RomanNumeral');
    UltraCalcFunctionRoman_RomanNumeral.a = null;
    UltraCalcFunctionRoman_RomanNumeral.c = null;
    UltraCalcFunctionRoman_RomanNumeral.e = null;
    UltraCalcFunctionRoman_RomanNumeral.g = null;
    UltraCalcFunctionRoman_RomanNumeral.i = null;
    return UltraCalcFunctionRoman_RomanNumeral;
}(Base));
export { UltraCalcFunctionRoman_RomanNumeral };
/**
 * @hidden
 */
var UltraCalcFunctionRoundDown = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionRoundDown, _super);
    function UltraCalcFunctionRoundDown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionRoundDown.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d = c._toInt();
        var e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        var f = e._toDouble3();
        var g = d;
        var h = Math.pow(10, g);
        f *= h;
        f = MathUtilities.i(f);
        f = MathUtilities.j(f);
        f /= h;
        f = MathUtilities.i(f);
        if (f == -0) {
            f = 0;
        }
        return new ExcelCalcValue(f);
    };
    UltraCalcFunctionRoundDown.prototype.get_name = function () {
        return "rounddown";
    };
    Object.defineProperty(UltraCalcFunctionRoundDown.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRoundDown.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionRoundDown.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRoundDown.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionRoundDown.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRoundDown.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionRoundDown.$t = markType(UltraCalcFunctionRoundDown, 'UltraCalcFunctionRoundDown', BuiltInFunctionBase.$);
    return UltraCalcFunctionRoundDown;
}(BuiltInFunctionBase));
export { UltraCalcFunctionRoundDown };
/**
 * @hidden
 */
var UltraCalcFunctionRoundUp = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionRoundUp, _super);
    function UltraCalcFunctionRoundUp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionRoundUp.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d = c._toInt();
        var e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        var f = e._toDouble3();
        var g = f >= 0 ? 1 : -1;
        f = Math.abs(f);
        var h = Math.pow(10, d);
        f *= h;
        f = MathUtilities.i(f);
        f = Math.ceil(f);
        f /= h;
        f *= g;
        f = MathUtilities.i(f);
        if (f == -0) {
            f = 0;
        }
        return new ExcelCalcValue(f);
    };
    UltraCalcFunctionRoundUp.prototype.get_name = function () {
        return "roundup";
    };
    Object.defineProperty(UltraCalcFunctionRoundUp.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRoundUp.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionRoundUp.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRoundUp.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionRoundUp.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRoundUp.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionRoundUp.$t = markType(UltraCalcFunctionRoundUp, 'UltraCalcFunctionRoundUp', BuiltInFunctionBase.$);
    return UltraCalcFunctionRoundUp;
}(BuiltInFunctionBase));
export { UltraCalcFunctionRoundUp };
/**
 * @hidden
 */
var UltraCalcFunctionSeriesSum = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSeriesSum, _super);
    function UltraCalcFunctionSeriesSum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSeriesSum.prototype.evaluate = function (a, b) {
        var c = this._getArguments(a, b - 3, true);
        c.reverse();
        var d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        var e = d._toInt();
        d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        var f = d._toInt();
        d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        var g = d._toDouble3();
        var h = f;
        var i = 0;
        for (var k = 0; k < c.length; k++) {
            var j = c[k];
            if (j.isError) {
                return new ExcelCalcValue(j.toErrorValue());
            }
            var l = j._toDouble3();
            var m = l * Math.pow(g, h);
            i += m;
            h += e;
        }
        return new ExcelCalcValue(i);
    };
    UltraCalcFunctionSeriesSum.prototype.canParameterBeEnumerable = function (a) {
        return a == 3;
    };
    UltraCalcFunctionSeriesSum.prototype.get_name = function () {
        return "seriessum";
    };
    Object.defineProperty(UltraCalcFunctionSeriesSum.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSeriesSum.prototype.get_minArgs = function () {
        return 4;
    };
    Object.defineProperty(UltraCalcFunctionSeriesSum.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSeriesSum.prototype.get_maxArgs = function () {
        return 4;
    };
    Object.defineProperty(UltraCalcFunctionSeriesSum.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSeriesSum.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionSeriesSum.$t = markType(UltraCalcFunctionSeriesSum, 'UltraCalcFunctionSeriesSum', BuiltInFunctionBase.$);
    return UltraCalcFunctionSeriesSum;
}(BuiltInFunctionBase));
export { UltraCalcFunctionSeriesSum };
/**
 * @hidden
 */
var UltraCalcFunctionSign = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSign, _super);
    function UltraCalcFunctionSign() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSign.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d = c._toDouble3();
        var e;
        if (d < 0) {
            e = -1;
        }
        else if (d > 0) {
            e = 1;
        }
        else {
            e = 0;
        }
        return new ExcelCalcValue(e);
    };
    UltraCalcFunctionSign.prototype.get_name = function () {
        return "sign";
    };
    Object.defineProperty(UltraCalcFunctionSign.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSign.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionSign.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSign.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionSign.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSign.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionSign.$t = markType(UltraCalcFunctionSign, 'UltraCalcFunctionSign', BuiltInFunctionBase.$);
    return UltraCalcFunctionSign;
}(BuiltInFunctionBase));
export { UltraCalcFunctionSign };
/**
 * @hidden
 */
var UltraCalcFunctionSqrtPi = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSqrtPi, _super);
    function UltraCalcFunctionSqrtPi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSqrtPi.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d = c._toDouble3();
        if (d < 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var e = Math.sqrt(Math.PI * d);
        return new ExcelCalcValue(e);
    };
    UltraCalcFunctionSqrtPi.prototype.get_name = function () {
        return "sqrtpi";
    };
    Object.defineProperty(UltraCalcFunctionSqrtPi.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSqrtPi.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionSqrtPi.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSqrtPi.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionSqrtPi.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSqrtPi.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionSqrtPi.$t = markType(UltraCalcFunctionSqrtPi, 'UltraCalcFunctionSqrtPi', BuiltInFunctionBase.$);
    return UltraCalcFunctionSqrtPi;
}(BuiltInFunctionBase));
export { UltraCalcFunctionSqrtPi };
/**
 * @hidden
 */
var UltraCalcFunctionChoose = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionChoose, _super);
    function UltraCalcFunctionChoose() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionChoose.prototype.evaluate = function (a, b) {
        var c = new List$1(ExcelCalcValue.$, 0);
        for (var d = 0; d < b - 1; d++) {
            c.insert(0, a.pop());
        }
        var e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        var f;
        if (((function () { var g = e._toDouble1(f); f = g.p0; return g.ret; })()) == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        var g = truncate(Math.floor(f));
        if (g < 1 || c.count < g) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        return c._inner[g - 1];
    };
    UltraCalcFunctionChoose.prototype.get_name = function () {
        return "choose";
    };
    Object.defineProperty(UltraCalcFunctionChoose.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionChoose.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionChoose.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionChoose.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionChoose.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionChoose.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionChoose.prototype.get__s = function () {
        return true;
    };
    UltraCalcFunctionChoose.prototype._v = function (a) {
        if (a == 0) {
            return true;
        }
        return false;
    };
    UltraCalcFunctionChoose.$t = markType(UltraCalcFunctionChoose, 'UltraCalcFunctionChoose', BuiltInFunctionBase.$);
    return UltraCalcFunctionChoose;
}(BuiltInFunctionBase));
export { UltraCalcFunctionChoose };
/**
 * @hidden
 */
var UltraCalcFunctionRept = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionRept, _super);
    function UltraCalcFunctionRept() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionRept.prototype.evaluate = function (a, b) {
        var c = a.pop();
        var d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var e = c._toInt321();
        if (e < 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        var f = d.toString();
        if (e == 0 || stringIsNullOrEmpty(f)) {
            return new ExcelCalcValue(stringEmpty());
        }
        var g = f.length * e;
        if (32767 < g) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        var h = new StringBuilder(1, g);
        for (var i = 0; i < e; i++) {
            h.l(f);
        }
        return new ExcelCalcValue(h.toString());
    };
    UltraCalcFunctionRept.prototype.get_name = function () {
        return "rept";
    };
    Object.defineProperty(UltraCalcFunctionRept.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRept.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionRept.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRept.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionRept.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRept.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionRept.$t = markType(UltraCalcFunctionRept, 'UltraCalcFunctionRept', BuiltInFunctionBase.$);
    return UltraCalcFunctionRept;
}(BuiltInFunctionBase));
export { UltraCalcFunctionRept };
/**
 * @hidden
 */
var UltraCalcFunctionSubtotal = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSubtotal, _super);
    function UltraCalcFunctionSubtotal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSubtotal.prototype.evaluate = function (a, b) {
        var c = new Array(b - 1);
        for (var d = c.length - 1; d >= 0; d--) {
            var e = a.pop();
            c[d] = e;
        }
        var f = a.pop();
        if (f.isError) {
            return f;
        }
        var g;
        if (((function () { var h = f._toDouble1(g); g = h.p0; return h.ret; })()) == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        var h = truncate(g);
        var i = false;
        if (h > 100) {
            i = true;
            h -= 100;
        }
        switch (h) {
            case 1: return CalcFunctionUtilities.e(boxArray$1(c), CalcFunctionUtilities.b(a, false, false, i) | 2048, UltraCalcFunctionAverage._ak);
            case 2: return CalcFunctionUtilities.l(boxArray$1(c), CalcFunctionUtilities.c(a, false, false, i) | 2048);
            case 3: return CalcFunctionUtilities.l(boxArray$1(c), CalcFunctionUtilities.c(a, true, false, i) | 2048);
            case 4: return CalcFunctionUtilities.e(boxArray$1(c), CalcFunctionUtilities.b(a, false, false, i) | 2048, UltraCalcFunctionMax._ak);
            case 5: return CalcFunctionUtilities.e(boxArray$1(c), CalcFunctionUtilities.b(a, false, false, i) | 2048, UltraCalcFunctionMin._ak);
            case 6: return CalcFunctionUtilities.e(boxArray$1(c), CalcFunctionUtilities.b(a, false, false, i) | 2048, UltraCalcFunctionProduct._ak);
            case 7: return CalcFunctionUtilities.e(boxArray$1(c), CalcFunctionUtilities.b(a, false, false, i) | 2048, function (j) { return UltraCalcFunctionStdev._al(j, true); });
            case 8: return CalcFunctionUtilities.e(boxArray$1(c), CalcFunctionUtilities.b(a, false, false, i) | 2048, function (j) { return UltraCalcFunctionStdev._al(j, false); });
            case 9:
                {
                    var j_1 = 0;
                    return CalcFunctionUtilities.g(boxArray$1(c), CalcFunctionUtilities.b(a, false, false, i) | 2048, function (k) { return j_1 += k; }) || new ExcelCalcValue(j_1);
                }
            case 10: return CalcFunctionUtilities.e(boxArray$1(c), CalcFunctionUtilities.b(a, false, false, i) | 2048, function (k) { return UltraCalcFunctionVar._ak(k, true); });
            case 11: return CalcFunctionUtilities.e(boxArray$1(c), CalcFunctionUtilities.b(a, false, false, i) | 2048, function (k) { return UltraCalcFunctionVar._ak(k, false); });
            default: return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
    };
    UltraCalcFunctionSubtotal.prototype.canParameterBeEnumerable = function (a) {
        return 1 <= a;
    };
    UltraCalcFunctionSubtotal.prototype.get_name = function () {
        return "subtotal";
    };
    Object.defineProperty(UltraCalcFunctionSubtotal.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSubtotal.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionSubtotal.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSubtotal.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionSubtotal.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSubtotal.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionSubtotal.$t = markType(UltraCalcFunctionSubtotal, 'UltraCalcFunctionSubtotal', BuiltInFunctionBase.$);
    return UltraCalcFunctionSubtotal;
}(BuiltInFunctionBase));
export { UltraCalcFunctionSubtotal };
/**
 * @hidden
 */
var UltraCalcFunctionText = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionText, _super);
    function UltraCalcFunctionText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionText.prototype.evaluate = function (a, b) {
        var c = a.pop();
        var d = a.pop();
        if (d.isError) {
            return d;
        }
        if (c.isError) {
            return c;
        }
        if (c.isBoolean) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        var e = d.toString();
        var f = c.toString();
        var g;
        var h = ((function () { var i = d._toDouble1(g); g = i.p0; return i.ret; })());
        if (h == false && d.isString) {
            var i = this._ak(e);
            if (i.hasValue) {
                g = i.value;
                h = true;
            }
            else {
                var j_2;
                if (((function () { var k = dateTryParse(e, j_2); j_2 = k.p1; return k.ret; })())) {
                    var k = ExcelCalcValue._dateTimeToExcelDate(d._o, j_2);
                    if (k.hasValue) {
                        g = k.value;
                        h = true;
                    }
                }
            }
        }
        var l = NaN;
        if (h) {
            l = g;
        }
        var m = new ValueFormatter(0, d._o, f, a._w);
        var n;
        if (((function () { var o = m.v(l, e, n); n = o.p2; return o.ret; })()) == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        return new ExcelCalcValue(n);
    };
    UltraCalcFunctionText.prototype.get_name = function () {
        return "text";
    };
    Object.defineProperty(UltraCalcFunctionText.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionText.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionText.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionText.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionText.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionText.prototype._ak = function (a) {
        var b = UltraCalcFunctionText._am.i(a);
        if (b.i == false) {
            return Nullable$1.toNullable(Number_$type, null);
        }
        var c = 0;
        var d = 0;
        var e = 0;
        var f = 0;
        var g = b.m.item1("Hours");
        if (g.d != 0) {
            if (((function () { var h = tryParseInt32_1(g.g, c); c = h.p1; return h.ret; })()) == false) {
            }
        }
        var h = b.m.item1("Minutes");
        if (h.d != 0) {
            if (((function () { var i = tryParseInt32_1(h.g, d); d = i.p1; return i.ret; })()) == false) {
            }
        }
        var i = b.m.item1("Seconds");
        if (i.d != 0) {
            if (((function () { var j = tryParseInt32_1(i.g, e); e = j.p1; return j.ret; })()) == false) {
            }
        }
        var j = b.m.item1("Milliseconds");
        if (j.d != 0) {
            var k_1 = j.g;
            while (k_1.length < 4) {
                k_1 += "0";
            }
            if (((function () { var l = tryParseInt32_1(k_1, f); f = l.p1; return l.ret; })()) == false) {
            }
        }
        var l = b.m.item1("AMPM");
        if (l.d != 0) {
            if (c >= 12) {
                return Nullable$1.toNullable(Number_$type, null);
            }
            if (startsWith1(l.g, "P", StringUtilities.g)) {
                c += 12;
            }
        }
        return Nullable$1.toNullable(Number_$type, (c / 24) + (d / 1440) + (e / 86400) + (f / 864000000));
    };
    Object.defineProperty(UltraCalcFunctionText, "_am", {
        get: function () {
            if (UltraCalcFunctionText._al == null) {
                var a = "(?'Hours'[0-9]{1,4})\\s*";
                var b = "\\s*(?'Minutes'[0-9]?[0-9])\\s*";
                var c = "\\s*(?'Seconds'[0-9]?[0-9])\\s*";
                var d = ".\\s*(?'Milliseconds'[0-9]{0,4})[0-9]*\\s*";
                var e = "(\\s+(?'AMPM'(a|p)m?)\\s*)";
                var f = stringFormat("({0}{1})", a, e);
                var g = stringFormat1("({0}:{1}(:{2}({3})?)?{4}?)", a, b, c, d, e);
                var h = stringFormat1("({0}:{1}{2}{3}?)", b, c, d, e);
                UltraCalcFunctionText._al = new Regex(1, stringFormat("^({0}|{1}|{2})$", f, g, h), 8 | 1 | 32 | 512);
            }
            return UltraCalcFunctionText._al;
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionText.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionText.$t = markType(UltraCalcFunctionText, 'UltraCalcFunctionText', BuiltInFunctionBase.$);
    UltraCalcFunctionText._al = null;
    return UltraCalcFunctionText;
}(BuiltInFunctionBase));
export { UltraCalcFunctionText };
/**
 * @hidden
 */
var UltraCalcFunctionIfError = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionIfError, _super);
    function UltraCalcFunctionIfError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionIfError.prototype.evaluate = function (a, b) {
        var c = a.pop();
        var d = a.pop();
        var e = d._getResolvedValue();
        if (typeCast(ExcelCalcErrorValue.$, e) !== null) {
            return c;
        }
        return new ExcelCalcValue(e);
    };
    UltraCalcFunctionIfError.prototype.get_name = function () {
        return "iferror";
    };
    Object.defineProperty(UltraCalcFunctionIfError.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIfError.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionIfError.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIfError.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionIfError.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIfError.$t = markType(UltraCalcFunctionIfError, 'UltraCalcFunctionIfError', BuiltInFunctionBase.$);
    return UltraCalcFunctionIfError;
}(BuiltInFunctionBase));
export { UltraCalcFunctionIfError };
/**
 * @hidden
 */
var UltraCalcFunctionCountA = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionCountA, _super);
    function UltraCalcFunctionCountA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionCountA.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.k(a, b, 673);
    };
    UltraCalcFunctionCountA.prototype.canParameterBeEnumerable = function (a) {
        return true;
    };
    UltraCalcFunctionCountA.prototype.get_name = function () {
        return "counta";
    };
    Object.defineProperty(UltraCalcFunctionCountA.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCountA.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionCountA.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCountA.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionCountA.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCountA.$t = markType(UltraCalcFunctionCountA, 'UltraCalcFunctionCountA', BuiltInFunctionBase.$);
    return UltraCalcFunctionCountA;
}(BuiltInFunctionBase));
export { UltraCalcFunctionCountA };
/**
 * @hidden
 */
var UltraCalcFunctionSearch = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSearch, _super);
    function UltraCalcFunctionSearch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSearch.prototype.evaluate = function (a, b) {
        var c = null;
        if (b > 2) {
            c = a.pop();
        }
        var d = a.pop();
        var e = a.pop();
        if (e.isError) {
            return e;
        }
        if (d.isError) {
            return d;
        }
        if (c != null && c.isError) {
            return c;
        }
        var f = e.toString();
        var g = d.toString();
        var h = 0;
        if (c != null) {
            var i_1;
            if (((function () { var j = c._toDouble1(i_1); i_1 = j.p0; return j.ret; })()) == false) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
            h = truncate(MathUtilities.j(i_1)) - 1;
            if (h < 0 || g.length <= h) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
        }
        var j = a._w.compareInfo.indexOf6(g, f, h, 1);
        if (j < 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        return new ExcelCalcValue(j + 1);
    };
    UltraCalcFunctionSearch.prototype.get_name = function () {
        return "search";
    };
    Object.defineProperty(UltraCalcFunctionSearch.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSearch.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionSearch.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSearch.prototype.get_maxArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionSearch.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSearch.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionSearch.$t = markType(UltraCalcFunctionSearch, 'UltraCalcFunctionSearch', BuiltInFunctionBase.$);
    return UltraCalcFunctionSearch;
}(BuiltInFunctionBase));
export { UltraCalcFunctionSearch };
/**
 * @hidden
 */
var UltraCalcFunctionSearchB = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSearchB, _super);
    function UltraCalcFunctionSearchB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSearchB.prototype.get_name = function () {
        return "searchb";
    };
    UltraCalcFunctionSearchB.$t = markType(UltraCalcFunctionSearchB, 'UltraCalcFunctionSearchB', UltraCalcFunctionSearch.$);
    return UltraCalcFunctionSearchB;
}(UltraCalcFunctionSearch));
export { UltraCalcFunctionSearchB };
/**
 * @hidden
 */
var UltraCalcFunctionAveDev = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionAveDev, _super);
    function UltraCalcFunctionAveDev() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionAveDev.prototype.evaluate = function (a, b) {
        var c = 0;
        var d = this._getArguments(a, b, true);
        var e = new List$1(Number_$type, 2, d.length);
        var _loop_5 = function (g) {
            var f = d[g];
            if (f == null) {
                return "continue";
            }
            if (f.isError) {
                return { value: new ExcelCalcValue(f.toErrorValue()) };
            }
            var h;
            if (((function () { var i = f._toDouble1(h); h = i.p0; return i.ret; })())) {
                c += h;
                e.add(h);
            }
        };
        for (var g = 0; g < d.length; g++) {
            var state_3 = _loop_5(g);
            if (typeof state_3 === "object")
                return state_3.value;
        }
        var i = c / e.count;
        var j = 0;
        for (var k = 0; k < e.count; k++) {
            j += Math.abs(e._inner[k] - i);
        }
        var l = j / e.count;
        return new ExcelCalcValue(l);
    };
    UltraCalcFunctionAveDev.prototype.get_name = function () {
        return "avedev";
    };
    Object.defineProperty(UltraCalcFunctionAveDev.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAveDev.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionAveDev.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAveDev.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionAveDev.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAveDev.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionAveDev.$t = markType(UltraCalcFunctionAveDev, 'UltraCalcFunctionAveDev', BuiltInFunctionBase.$);
    return UltraCalcFunctionAveDev;
}(BuiltInFunctionBase));
export { UltraCalcFunctionAveDev };
/**
 * @hidden
 */
var UltraCalcConditionalFunctionBase = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcConditionalFunctionBase, _super);
    function UltraCalcConditionalFunctionBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcConditionalFunctionBase.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        if (a == 1) {
            return (b == false);
        }
        return false;
    };
    UltraCalcConditionalFunctionBase.prototype.evaluate = function (a, b) {
        var c = null;
        if (this._an && b == 3) {
            c = a.pop();
        }
        var d = a.pop();
        var e = a.pop();
        if (e.isError) {
            return e;
        }
        if (d.isError) {
            return d;
        }
        if (c != null && c.isError) {
            return c;
        }
        if (e.isArrayGroup || e.isReference == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        var f = new UltraCalcConditionalFunctionBase_CriteriaEvaluator(a, d._getResolvedValue());
        if (c != null && (c.isArrayGroup || c.isReference == false)) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        var g = e.toArrayProxy();
        var h = null;
        if (c != null) {
            h = typeCast(CellCalcReference.$, c._d(false).item(0, 0).value);
            if (h == null) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
        }
        var i = new UltraCalcConditionalFunctionBase_EvaluateHelper(this, f, g);
        if (h == null) {
            g._m(false, runOn(i, i.h));
        }
        else {
            var j = h._ao;
            var k = h._w.index;
            var l = h._u;
            var m = l._columns$i.maxCount - 1;
            var n = Math.min(m, j + g.getLength(0) - 1);
            var o = l._rows$i.maxCount - 1;
            var p = Math.min(o, k + g.getLength(1) - 1);
            var q = l._cx(k, j, p, n);
            var r = new ExcelCalcValue(q._c);
            r._n = c._n;
            r._y = true;
            var s = r._d(false);
            s._m(false, runOn(i, i.h));
        }
        return this._al(i.e, i.g);
    };
    UltraCalcConditionalFunctionBase.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcConditionalFunctionBase.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcConditionalFunctionBase.prototype.get_maxArgs = function () {
        if (this._an) {
            return 3;
        }
        return 2;
    };
    Object.defineProperty(UltraCalcConditionalFunctionBase.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcConditionalFunctionBase.prototype._v = function (a) {
        if (a == 2) {
            return false;
        }
        return true;
    };
    UltraCalcConditionalFunctionBase.prototype.get__am = function () {
        return true;
    };
    Object.defineProperty(UltraCalcConditionalFunctionBase.prototype, "_am", {
        get: function () {
            return this.get__am();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcConditionalFunctionBase.prototype.get__an = function () {
        return true;
    };
    Object.defineProperty(UltraCalcConditionalFunctionBase.prototype, "_an", {
        get: function () {
            return this.get__an();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcConditionalFunctionBase._ak = function (a, b, c, d, e) {
        if (e === void 0) { e = null; }
        if (e == null && b % 2 == 1) {
            return new ExcelCalcValue(ErrorValue.argumentOrFunctionNotAvailable);
        }
        else if (e != null && b % 2 == 0) {
            return new ExcelCalcValue(ErrorValue.argumentOrFunctionNotAvailable);
        }
        var f = 0;
        var g = 0;
        var h = new List$1(Tuple$2.$.specialize(UltraCalcConditionalFunctionBase_CriteriaEvaluator.$, ArrayProxy.$), 0);
        while (b > 1) {
            var i = a.pop();
            var j = a.pop();
            if (j.isArrayGroup || j.isReference == false) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
            var k = j.toArrayProxy();
            var l = new UltraCalcConditionalFunctionBase_CriteriaEvaluator(a, i._getResolvedValue());
            if (h.count == 0) {
                f = k.getLength(0);
                g = k.getLength(1);
            }
            else if (f != k.getLength(0) || g != k.getLength(1)) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
            h.add(Tuple.a(UltraCalcConditionalFunctionBase_CriteriaEvaluator.$, ArrayProxy.$, l, k));
            b -= 2;
        }
        h.w();
        var m = null;
        if (e != null) {
            var n = a.pop();
            if (n.isArrayGroup || n.isReference == false) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
            m = n.toArrayProxy();
            if (f != m.getLength(0) || g != m.getLength(1)) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
        }
        var o = a._w;
        var p = 0;
        var q = c;
        var r = null;
        var s = function (t, u) {
            if (r == null) {
                var v = true;
                for (var w = 0; w < h.count; w++) {
                    var x = h._inner[w];
                    var y = w == 0 ? t : x.d._b(u);
                    if (!h._inner[w].c.d(y)) {
                        v = false;
                        break;
                    }
                    if (w > 0 && x.d._g) {
                        ExcelCalcNumberStack._ad(y);
                    }
                }
                if (v) {
                    if (e == null) {
                        p++;
                    }
                    else {
                        var z_1 = m._b(u);
                        if (z_1.isError) {
                            r = z_1.toErrorValue();
                        }
                        else if (z_1.isBoolean || z_1.isString || z_1.isNull) {
                        }
                        else {
                            var aa_1 = z_1._getResolvedValue3(false);
                            var ab_1;
                            var ac_1;
                            if (((function () { var ad = z_1._ao(aa_1, ac_1, o, ab_1); ac_1 = ad.p1; ab_1 = ad.p3; return ad.ret; })())) {
                                p++;
                                q = e(q, ac_1);
                            }
                        }
                        if (m._g) {
                            ExcelCalcNumberStack._ad(z_1);
                        }
                    }
                }
            }
        };
        h._inner[0].d._m(false, s);
        if (r != null) {
            return new ExcelCalcValue(r);
        }
        return d(q, p);
    };
    UltraCalcConditionalFunctionBase.$t = markType(UltraCalcConditionalFunctionBase, 'UltraCalcConditionalFunctionBase', BuiltInFunctionBase.$);
    return UltraCalcConditionalFunctionBase;
}(BuiltInFunctionBase));
export { UltraCalcConditionalFunctionBase };
/**
 * @hidden
 */
var UltraCalcConditionalFunctionBase_CriteriaEvaluator = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcConditionalFunctionBase_CriteriaEvaluator, _super);
    function UltraCalcConditionalFunctionBase_CriteriaEvaluator(a, b) {
        var _this = _super.call(this) || this;
        _this.b = null;
        _this.f = null;
        _this.e = null;
        _this.c = 0;
        _this.g = null;
        _this.a = null;
        var c = a._w;
        _this.f = b != null ? b.toString() : null;
        var d;
        var e = typeCast(String_$type, b);
        if (stringIsNullOrEmpty(e) == false) {
            var f = true;
            var g_1 = null;
            switch (e.charAt(0)) {
                case '=':
                    _this.c = 0;
                    g_1 = e.substr(1);
                    break;
                case '<':
                    f = false;
                    if (e.length > 1) {
                        switch (e.charAt(1)) {
                            case '>':
                                _this.c = 1;
                                g_1 = e.substr(2);
                                break;
                            case '=':
                                _this.c = 5;
                                g_1 = e.substr(2);
                                break;
                        }
                    }
                    if (g_1 == null) {
                        _this.c = 4;
                        g_1 = e.substr(1);
                    }
                    break;
                case '>':
                    f = false;
                    if (e.length > 1 && e.charAt(1) == '=') {
                        _this.c = 3;
                        g_1 = e.substr(2);
                    }
                    else {
                        _this.c = 2;
                        g_1 = e.substr(1);
                    }
                    break;
                default:
                    g_1 = e;
                    break;
            }
            _this.f = g_1;
            var h_1;
            if (((function () { var i = MathUtilities.c(g_1.trim(), c, h_1); h_1 = i.p2; return i.ret; })())) {
                d = h_1;
                if (f == false) {
                    _this.f = null;
                }
            }
            else {
                if (stringContains(g_1, "*") || stringContains(g_1, "?")) {
                    var i_2;
                    _this.g = ((function () { var j = ExcelUtils.ep(g_1, i_2); i_2 = j.p1; return j.ret; })());
                }
                d = g_1;
            }
        }
        else {
            d = b;
        }
        _this.b = new ExcelCalcValue(d);
        _this.b._n = new CalculationContext(1, a, 64);
        _this.e = _this.b._getResolvedValue3(false);
        _this.a = typeCast(ExcelCalcErrorValue.$, d);
        return _this;
    }
    UltraCalcConditionalFunctionBase_CriteriaEvaluator.prototype.d = function (a) {
        var b = a._getResolvedValue3(false);
        if (ExcelCalcValue._aa(b)) {
            return this.a != null && this.a.code == b.code;
        }
        if (ExcelCalcValue._ac(b) != ExcelCalcValue._ac(this.e)) {
            return false;
        }
        var c = false;
        if (ExcelCalcValue._ag(b)) {
            if (this.f == null) {
                return false;
            }
            c = true;
        }
        if (ExcelCalcValue._u(b) != ExcelCalcValue._u(this.e)) {
            return false;
        }
        if (this.g != null) {
            return this.g.i(a._bp(b, a._a0)).i;
        }
        var d = ExcelCalcValue._a4(a, b, this.b, c ? this.f : this.e);
        switch (this.c) {
            case 0: return d == 0;
            case 1: return d != 0;
            case 2: return d > 0;
            case 3: return d >= 0;
            case 4: return d < 0;
            case 5: return d <= 0;
            default: return false;
        }
    };
    UltraCalcConditionalFunctionBase_CriteriaEvaluator.$t = markType(UltraCalcConditionalFunctionBase_CriteriaEvaluator, 'UltraCalcConditionalFunctionBase_CriteriaEvaluator');
    return UltraCalcConditionalFunctionBase_CriteriaEvaluator;
}(Base));
export { UltraCalcConditionalFunctionBase_CriteriaEvaluator };
/**
 * @hidden
 */
var UltraCalcConditionalFunctionBase_EvaluateHelper = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcConditionalFunctionBase_EvaluateHelper, _super);
    function UltraCalcConditionalFunctionBase_EvaluateHelper(a, b, c) {
        var _this = _super.call(this) || this;
        _this.c = null;
        _this.b = null;
        _this.a = null;
        _this.d = 0;
        _this.f = 0;
        _this.b = a;
        _this.c = b;
        _this.a = c;
        return _this;
    }
    UltraCalcConditionalFunctionBase_EvaluateHelper.prototype.h = function (a, b) {
        var c = this.a._b(b);
        if (this.c.d(c)) {
            this.f++;
            if (this.b._am) {
                var d_10;
                if (((function () { var e = a._toDouble1(d_10); d_10 = e.p0; return e.ret; })())) {
                    this.d += d_10;
                }
            }
        }
        if (this.a._g) {
            ExcelCalcNumberStack._ad(c);
        }
    };
    Object.defineProperty(UltraCalcConditionalFunctionBase_EvaluateHelper.prototype, "e", {
        get: function () {
            return this.d;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UltraCalcConditionalFunctionBase_EvaluateHelper.prototype, "g", {
        get: function () {
            return this.f;
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcConditionalFunctionBase_EvaluateHelper.$t = markType(UltraCalcConditionalFunctionBase_EvaluateHelper, 'UltraCalcConditionalFunctionBase_EvaluateHelper');
    return UltraCalcConditionalFunctionBase_EvaluateHelper;
}(Base));
export { UltraCalcConditionalFunctionBase_EvaluateHelper };
/**
 * @hidden
 */
var UltraCalcFunctionAddress = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionAddress, _super);
    function UltraCalcFunctionAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionAddress.prototype.evaluate = function (a, b) {
        var c = null;
        if (b == 5) {
            c = a.pop();
        }
        var d = null;
        if (b >= 4) {
            d = a.pop();
        }
        var e = null;
        if (b >= 3) {
            e = a.pop();
        }
        var f = a.pop();
        var g = a.pop();
        if (g.isError) {
            return g;
        }
        if (f.isError) {
            return f;
        }
        if (e != null && e.isError) {
            return e;
        }
        if (d != null && d.isError) {
            return d;
        }
        if (c != null && c.isError) {
            return c;
        }
        var h = g._toInt321();
        var i = f._toInt321();
        var j = e == null ? 1 : e._toInt321();
        var k = d == null ? true : d._toBoolean1();
        var l = c == null ? null : c.toString();
        var m = this._ak(a);
        var n = Workbook.getMaxRowCount(m);
        var o = Workbook.getMaxColumnCount(m);
        if (h < 1 || n < h) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        if (i < 1 || o < i) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        var p;
        var q;
        switch (j) {
            case 1:
                p = false;
                q = false;
                break;
            case 2:
                p = false;
                q = true;
                break;
            case 3:
                p = true;
                q = false;
                break;
            case 4:
                p = true;
                q = true;
                break;
            default: return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        var r = k ? 1 : 0;
        var s = stringEmpty();
        if (l != null) {
            s += ExcelUtils.d5(null, l);
        }
        if (r == 0) {
            if (p) {
                h++;
            }
            if (q) {
                i++;
            }
        }
        s += CellAddress.u(h - 1, i - 1, m, p, q, void 0, void 0, void 0, r);
        return new ExcelCalcValue(s);
    };
    UltraCalcFunctionAddress.prototype._ak = function (a) {
        var b = a._r;
        if (b != null) {
            return b.currentFormat;
        }
        return 2;
    };
    UltraCalcFunctionAddress.prototype.get_name = function () {
        return "address";
    };
    Object.defineProperty(UltraCalcFunctionAddress.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAddress.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionAddress.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAddress.prototype.get_maxArgs = function () {
        return 5;
    };
    Object.defineProperty(UltraCalcFunctionAddress.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAddress.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        if (a == 3) {
            return false;
        }
        return true;
    };
    UltraCalcFunctionAddress.$t = markType(UltraCalcFunctionAddress, 'UltraCalcFunctionAddress', BuiltInFunctionBase.$);
    return UltraCalcFunctionAddress;
}(BuiltInFunctionBase));
export { UltraCalcFunctionAddress };
/**
 * @hidden
 */
var UltraCalcFunctionAreas = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionAreas, _super);
    function UltraCalcFunctionAreas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionAreas.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isReference == false) {
            if (c.isError) {
                return c;
            }
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        return new ExcelCalcValue(c._b(false).length);
    };
    UltraCalcFunctionAreas.prototype.get_name = function () {
        return "areas";
    };
    Object.defineProperty(UltraCalcFunctionAreas.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAreas.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionAreas.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAreas.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionAreas.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAreas.prototype._v = function (a) {
        return false;
    };
    UltraCalcFunctionAreas.$t = markType(UltraCalcFunctionAreas, 'UltraCalcFunctionAreas', BuiltInFunctionBase.$);
    return UltraCalcFunctionAreas;
}(BuiltInFunctionBase));
export { UltraCalcFunctionAreas };
/**
 * @hidden
 */
var UltraCalcFunctionAverageIf = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionAverageIf, _super);
    function UltraCalcFunctionAverageIf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionAverageIf.prototype._al = function (a, b) {
        if (b == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(2));
        }
        return new ExcelCalcValue(a / b);
    };
    UltraCalcFunctionAverageIf.prototype.get_name = function () {
        return "averageif";
    };
    Object.defineProperty(UltraCalcFunctionAverageIf.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAverageIf.$t = markType(UltraCalcFunctionAverageIf, 'UltraCalcFunctionAverageIf', UltraCalcConditionalFunctionBase.$);
    return UltraCalcFunctionAverageIf;
}(UltraCalcConditionalFunctionBase));
export { UltraCalcFunctionAverageIf };
/**
 * @hidden
 */
var UltraCalcFunctionColumn = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionColumn, _super);
    function UltraCalcFunctionColumn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionColumn.prototype.evaluate = function (a, b) {
        var c;
        if (b == 0) {
            c = UltraCalcFunctionColumn._ak(a._k);
        }
        else {
            var d = a.pop();
            if (d.isReference == false) {
                if (d.isError) {
                    return d;
                }
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
            c = UltraCalcFunctionColumn._ak(d.toReference());
        }
        if (c == -1) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(0));
        }
        return new ExcelCalcValue(c);
    };
    UltraCalcFunctionColumn._ak = function (a) {
        var b = typeCast(CellCalcReference.$, a.context);
        if (b != null) {
            return b._ao + 1;
        }
        var c = typeCast(WorksheetRegion.$, a.context);
        if (c != null) {
            return c.firstColumn + 1;
        }
        var d = typeCast(ReadOnlyCollection$1.$.specialize(WorksheetRegion.$), a.context);
        if (d != null) {
            if (d.count != 1) {
                return -1;
            }
            return d.item(0).firstColumn + 1;
        }
        var e = typeCast(TempCellCalcReference.$, a.context);
        if (e != null) {
            return e._ao + 1;
        }
        return -1;
    };
    UltraCalcFunctionColumn.prototype.get_name = function () {
        return "column";
    };
    Object.defineProperty(UltraCalcFunctionColumn.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionColumn.prototype.get_minArgs = function () {
        return 0;
    };
    Object.defineProperty(UltraCalcFunctionColumn.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionColumn.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionColumn.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionColumn.prototype._v = function (a) {
        return false;
    };
    UltraCalcFunctionColumn.$t = markType(UltraCalcFunctionColumn, 'UltraCalcFunctionColumn', BuiltInFunctionBase.$);
    return UltraCalcFunctionColumn;
}(BuiltInFunctionBase));
export { UltraCalcFunctionColumn };
/**
 * @hidden
 */
var UltraCalcFunctionColumns = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionColumns, _super);
    function UltraCalcFunctionColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionColumns.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isReference == false && c.isError) {
            return c;
        }
        var d = c._b(false);
        if (d.length != 1) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(0));
        }
        return new ExcelCalcValue(d[0].getLength(0));
    };
    UltraCalcFunctionColumns.prototype.get_name = function () {
        return "columns";
    };
    Object.defineProperty(UltraCalcFunctionColumns.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionColumns.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionColumns.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionColumns.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionColumns.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionColumns.prototype._v = function (a) {
        return false;
    };
    UltraCalcFunctionColumns.$t = markType(UltraCalcFunctionColumns, 'UltraCalcFunctionColumns', BuiltInFunctionBase.$);
    return UltraCalcFunctionColumns;
}(BuiltInFunctionBase));
export { UltraCalcFunctionColumns };
/**
 * @hidden
 */
var UltraCalcFunctionTwoMatrixFunction = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionTwoMatrixFunction, _super);
    function UltraCalcFunctionTwoMatrixFunction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionTwoMatrixFunction.prototype._ak = function (a, b) {
        var c;
        var d;
        var e;
        var f = UltraCalcFunctionTwoMatrixFunction._ao(a, c, d, e);
        c = f.p1;
        d = f.p2;
        e = f.p3;
        if (c != null) {
            return new ExcelCalcValue(c);
        }
        return new ExcelCalcValue(UltraCalcFunctionTwoMatrixFunction._am(d, e, b));
    };
    UltraCalcFunctionTwoMatrixFunction._al = function (a, b) {
        b = null;
        var c;
        var d;
        var e = UltraCalcFunctionTwoMatrixFunction._ao(a, b, c, d);
        b = e.p1;
        c = e.p2;
        d = e.p3;
        if (b != null) {
            return {
                ret: 0,
                p1: b
            };
        }
        var f;
        var g;
        var h;
        var i = UltraCalcFunctionTwoMatrixFunction._ar(c, d, f, g, h);
        f = i.p2;
        g = i.p3;
        h = i.p4;
        var j = g / f;
        var k = h / f;
        var l = UltraCalcFunctionTwoMatrixFunction._am(c, d, function (m, n) { return (m - j) * (n - k); });
        var m = UltraCalcFunctionTwoMatrixFunction._an(c, function (n) { return Math.pow(n - j, 2); });
        var n = UltraCalcFunctionTwoMatrixFunction._an(d, function (o) { return Math.pow(o - k, 2); });
        var o = Math.sqrt(m * n);
        if (o == 0) {
            b = new ExcelCalcErrorValue(2);
            return {
                ret: 0,
                p1: b
            };
        }
        return {
            ret: l / o,
            p1: b
        };
    };
    UltraCalcFunctionTwoMatrixFunction._ao = function (a, b, c, d) {
        b = null;
        c = null;
        d = null;
        var e = a.pop();
        var f = a.pop();
        if (f.isError) {
            b = f.toErrorValue();
            return {
                p1: b,
                p2: c,
                p3: d
            };
        }
        if (e.isError) {
            b = e.toErrorValue();
            return {
                p1: b,
                p2: c,
                p3: d
            };
        }
        var g = f.toArrayProxy();
        var h = g.getLength(0);
        var i = g.getLength(1);
        var j = e.toArrayProxy();
        var k = j.getLength(0);
        var l = j.getLength(1);
        if (h != k || i != l) {
            b = new ExcelCalcErrorValue(3);
            return {
                p1: b,
                p2: c,
                p3: d
            };
        }
        c = ((function () { var m = MatrixUtilities.b(g, 2, b); b = m.p2; return m.ret; })());
        if (b != null) {
            return {
                p1: b,
                p2: c,
                p3: d
            };
        }
        d = ((function () { var m = MatrixUtilities.b(j, 2, b); b = m.p2; return m.ret; })());
        return {
            p1: b,
            p2: c,
            p3: d
        };
    };
    UltraCalcFunctionTwoMatrixFunction._aq = function (a, b, c, d) {
        d = null;
        b = 0;
        c = 0;
        var e;
        var f;
        var g = UltraCalcFunctionTwoMatrixFunction._ao(a, d, e, f);
        d = g.p1;
        e = g.p2;
        f = g.p3;
        if (d != null) {
            return {
                p1: b,
                p2: c,
                p3: d
            };
        }
        var h;
        var i;
        var j = UltraCalcFunctionTwoMatrixFunction._ap(e, f, h, i, b, c, d);
        h = j.p2;
        i = j.p3;
        b = j.p4;
        c = j.p5;
        d = j.p6;
        return {
            p1: b,
            p2: c,
            p3: d
        };
    };
    UltraCalcFunctionTwoMatrixFunction._ap = function (a, b, c, d, e, f, g) {
        g = null;
        e = 0;
        f = 0;
        var h;
        var i;
        var j;
        var k = UltraCalcFunctionTwoMatrixFunction._ar(a, b, h, i, j);
        h = k.p2;
        i = k.p3;
        j = k.p4;
        c = i / h;
        d = j / h;
        var l = c;
        var m = d;
        var n = UltraCalcFunctionTwoMatrixFunction._am(a, b, function (o, p) { return (o - l) * (p - m); });
        var o = UltraCalcFunctionTwoMatrixFunction._an(b, function (p) { return Math.pow(p - m, 2); });
        if (o == 0) {
            g = new ExcelCalcErrorValue(2);
            return {
                p2: c,
                p3: d,
                p4: e,
                p5: f,
                p6: g
            };
        }
        e = n / o;
        f = c - (e * d);
        return {
            p2: c,
            p3: d,
            p4: e,
            p5: f,
            p6: g
        };
    };
    UltraCalcFunctionTwoMatrixFunction._ar = function (a, b, c, d, e) {
        var f = arrayGetLength(a, 0);
        var g = arrayGetLength(a, 1);
        c = f * g;
        d = 0;
        e = 0;
        for (var h = 0; h < f; h++) {
            for (var i = 0; i < g; i++) {
                var j = a[h][i];
                var k = b[h][i];
                if (isNaN_(j) || isNaN_(k)) {
                    c--;
                    a[h][i] = NaN;
                    b[h][i] = NaN;
                    continue;
                }
                d += j;
                e += k;
            }
        }
        return {
            p2: c,
            p3: d,
            p4: e
        };
    };
    UltraCalcFunctionTwoMatrixFunction._an = function (a, b) {
        var c = arrayGetLength(a, 0);
        var d = arrayGetLength(a, 1);
        var e = 0;
        for (var f = 0; f < c; f++) {
            for (var g = 0; g < d; g++) {
                var h = a[f][g];
                if (isNaN_(h)) {
                    continue;
                }
                e += b(h);
            }
        }
        return e;
    };
    UltraCalcFunctionTwoMatrixFunction._am = function (a, b, c) {
        var d = arrayGetLength(a, 0);
        var e = arrayGetLength(a, 1);
        var f = 0;
        for (var g = 0; g < d; g++) {
            for (var h = 0; h < e; h++) {
                var i = a[g][h];
                var j = b[g][h];
                if (isNaN_(i) || isNaN_(j)) {
                    continue;
                }
                f += c(i, j);
            }
        }
        return f;
    };
    UltraCalcFunctionTwoMatrixFunction.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionTwoMatrixFunction.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTwoMatrixFunction.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionTwoMatrixFunction.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTwoMatrixFunction.$t = markType(UltraCalcFunctionTwoMatrixFunction, 'UltraCalcFunctionTwoMatrixFunction', BuiltInFunctionBase.$);
    return UltraCalcFunctionTwoMatrixFunction;
}(BuiltInFunctionBase));
export { UltraCalcFunctionTwoMatrixFunction };
/**
 * @hidden
 */
var UltraCalcFunctionCorrel = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionCorrel, _super);
    function UltraCalcFunctionCorrel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionCorrel.prototype.evaluate = function (a, b) {
        var c;
        var d;
        var e;
        var f = UltraCalcFunctionTwoMatrixFunction._ao(a, c, d, e);
        c = f.p1;
        d = f.p2;
        e = f.p3;
        if (c != null) {
            return new ExcelCalcValue(c);
        }
        var g;
        var h;
        var i;
        var j = UltraCalcFunctionTwoMatrixFunction._ar(d, e, g, h, i);
        g = j.p2;
        h = j.p3;
        i = j.p4;
        var k = function (l) { return l * l; };
        var l = UltraCalcFunctionTwoMatrixFunction._an(d, k);
        var m = UltraCalcFunctionTwoMatrixFunction._an(e, k);
        var n = l - ((h * h) / g);
        var o = m - ((i * i) / g);
        var p = UltraCalcFunctionTwoMatrixFunction._am(d, e, function (q, r) { return q * r; });
        var q = p - ((h * i) / g);
        if (n == 0 || o == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(2));
        }
        var r = q / (Math.sqrt(n) * Math.sqrt(o));
        return new ExcelCalcValue(r);
    };
    UltraCalcFunctionCorrel.prototype.get_name = function () {
        return "correl";
    };
    Object.defineProperty(UltraCalcFunctionCorrel.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCorrel.$t = markType(UltraCalcFunctionCorrel, 'UltraCalcFunctionCorrel', UltraCalcFunctionTwoMatrixFunction.$);
    return UltraCalcFunctionCorrel;
}(UltraCalcFunctionTwoMatrixFunction));
export { UltraCalcFunctionCorrel };
/**
 * @hidden
 */
var UltraCalcFunctionCountIf = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionCountIf, _super);
    function UltraCalcFunctionCountIf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionCountIf.prototype._al = function (a, b) {
        return new ExcelCalcValue(b);
    };
    UltraCalcFunctionCountIf.prototype.get_name = function () {
        return "countif";
    };
    Object.defineProperty(UltraCalcFunctionCountIf.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCountIf.prototype.get__am = function () {
        return false;
    };
    UltraCalcFunctionCountIf.prototype.get__an = function () {
        return false;
    };
    UltraCalcFunctionCountIf.$t = markType(UltraCalcFunctionCountIf, 'UltraCalcFunctionCountIf', UltraCalcConditionalFunctionBase.$);
    return UltraCalcFunctionCountIf;
}(UltraCalcConditionalFunctionBase));
export { UltraCalcFunctionCountIf };
/**
 * @hidden
 */
var UltraCalcFunctionCovar = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionCovar, _super);
    function UltraCalcFunctionCovar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionCovar.prototype.evaluate = function (a, b) {
        return UltraCalcFunctionCovar._as(a, b, false);
    };
    UltraCalcFunctionCovar._as = function (a, b, c) {
        var d;
        var e;
        var f;
        var g = UltraCalcFunctionTwoMatrixFunction._ao(a, d, e, f);
        d = g.p1;
        e = g.p2;
        f = g.p3;
        if (d != null) {
            return new ExcelCalcValue(d);
        }
        var h;
        var i;
        var j;
        var k = UltraCalcFunctionTwoMatrixFunction._ar(e, f, h, i, j);
        h = k.p2;
        i = k.p3;
        j = k.p4;
        if (h == 0 || (h == 1 && c)) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(2));
        }
        var l = i / h;
        var m = j / h;
        var n = UltraCalcFunctionTwoMatrixFunction._am(e, f, function (o, p) { return (o - l) * (p - m); });
        return new ExcelCalcValue(n / (h - (c ? 1 : 0)));
    };
    UltraCalcFunctionCovar.prototype.get_name = function () {
        return "covar";
    };
    Object.defineProperty(UltraCalcFunctionCovar.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCovar.$t = markType(UltraCalcFunctionCovar, 'UltraCalcFunctionCovar', UltraCalcFunctionTwoMatrixFunction.$);
    return UltraCalcFunctionCovar;
}(UltraCalcFunctionTwoMatrixFunction));
export { UltraCalcFunctionCovar };
/**
 * @hidden
 */
var UltraCalcFunctionForecast = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionForecast, _super);
    function UltraCalcFunctionForecast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionForecast.prototype.evaluate = function (a, b) {
        var c;
        var d;
        var e;
        var f = UltraCalcFunctionTwoMatrixFunction._ao(a, c, d, e);
        c = f.p1;
        d = f.p2;
        e = f.p3;
        var g = a.pop();
        if (g.isError) {
            return g;
        }
        var h = g._toDouble3();
        if (c != null) {
            return new ExcelCalcValue(c);
        }
        var i;
        var j;
        var k;
        var l;
        var m = UltraCalcFunctionTwoMatrixFunction._ap(d, e, i, j, k, l, c);
        i = m.p2;
        j = m.p3;
        k = m.p4;
        l = m.p5;
        c = m.p6;
        if (c != null) {
            return new ExcelCalcValue(c);
        }
        return new ExcelCalcValue(l + (k * h));
    };
    UltraCalcFunctionForecast.prototype.get_name = function () {
        return "forecast";
    };
    Object.defineProperty(UltraCalcFunctionForecast.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionForecast.prototype.get_minArgs = function () {
        return 3;
    };
    UltraCalcFunctionForecast.prototype.get_maxArgs = function () {
        return 3;
    };
    UltraCalcFunctionForecast.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionForecast.$t = markType(UltraCalcFunctionForecast, 'UltraCalcFunctionForecast', UltraCalcFunctionTwoMatrixFunction.$);
    return UltraCalcFunctionForecast;
}(UltraCalcFunctionTwoMatrixFunction));
export { UltraCalcFunctionForecast };
/**
 * @hidden
 */
var UltraCalcFunctionLookupBase = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionLookupBase, _super);
    function UltraCalcFunctionLookupBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionLookupBase._am = function (a, b, c, d, e, f, g) {
        var h = a._getResolvedValue();
        if (ExcelUtils.a9(h)) {
            return Nullable$1.toNullable(Number_$type, null);
        }
        if (b) {
            if (ExcelCalcValue._ag(h) == false) {
                return Nullable$1.toNullable(Number_$type, null);
            }
            var i = a._bp(h, a._a0);
            if (g == null) {
                return Nullable$1.toNullable(Number_$type, StringUtilities.c(i, c, a._a0, 1));
            }
            var j = g.i(i);
            if (j.i && j.d == i.length) {
                return Nullable$1.toNullable(Number_$type, 0);
            }
            return Nullable$1.toNullable(Number_$type, -1);
        }
        if (d) {
            if (a.isBoolean == false) {
                return Nullable$1.toNullable(Number_$type, null);
            }
            return Nullable$1.toNullable(Number_$type, boolCompare(a._toBoolean1(), e));
        }
        var k;
        var l;
        if (((function () { var m = a._ao(h, k, a._a0, l); k = m.p1; l = m.p3; return m.ret; })()) == false) {
            return Nullable$1.toNullable(Number_$type, null);
        }
        return Nullable$1.toNullable(Number_$type, Base.compareSimple(k, f));
    };
    UltraCalcFunctionLookupBase._an = function (a) {
        var b;
        return ((function () { var c = ExcelUtils.ep(a, b); b = c.p1; return c.ret; })());
    };
    UltraCalcFunctionLookupBase._al = function (a, b, c) {
        var e_8, _e;
        var d = b.isString;
        var e = d ? b.toString() : null;
        var f = b.isBoolean;
        var g = f ? b._toBoolean1() : false;
        var h = 0;
        if (f == false && d == false) {
            var i = b._toDouble1(h);
            h = i.p0;
        }
        var j = null;
        if (d && c == 0) {
            j = UltraCalcFunctionLookupBase._an(e);
        }
        var k = -1;
        try {
            for (var _h = tslib_1.__values(fromEnum(a)), _j = _h.next(); !_j.done; _j = _h.next()) {
                var l = _j.value;
                var m = l.key;
                var n = l.value;
                n._y = true;
                var o = UltraCalcFunctionLookupBase._am(n, d, e, f, g, h, j);
                if (o.hasValue == false) {
                    continue;
                }
                if (o.value == 0) {
                    return m;
                }
                if (c != 0) {
                    if (c < 0) {
                        if (o.value > 0) {
                            k = m;
                        }
                    }
                    else {
                        if (o.value < 0) {
                            k = m;
                        }
                    }
                }
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_j && !_j.done && (_e = _h.return)) _e.call(_h);
            }
            finally { if (e_8) throw e_8.error; }
        }
        return k;
    };
    UltraCalcFunctionLookupBase._ak = function (a, b) {
        b = true;
        if (a != null) {
            if (a.isBoolean) {
                b = a._toBoolean1();
            }
            else if (a.isDateTime) {
                b = true;
            }
            else {
                var c_2;
                if (((function () { var d = a._toDouble1(c_2); c_2 = d.p0; return d.ret; })())) {
                    b = (c_2 != 0);
                }
                else {
                    return {
                        ret: false,
                        p1: b
                    };
                }
            }
        }
        return {
            ret: true,
            p1: b
        };
    };
    UltraCalcFunctionLookupBase.prototype.get_minArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionLookupBase.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionLookupBase.prototype.get_maxArgs = function () {
        return 4;
    };
    Object.defineProperty(UltraCalcFunctionLookupBase.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionLookupBase.prototype._v = function (a) {
        if (a == 1) {
            return false;
        }
        return true;
    };
    UltraCalcFunctionLookupBase.$t = markType(UltraCalcFunctionLookupBase, 'UltraCalcFunctionLookupBase', BuiltInFunctionBase.$);
    return UltraCalcFunctionLookupBase;
}(BuiltInFunctionBase));
export { UltraCalcFunctionLookupBase };
/**
 * @hidden
 */
var UltraCalcFunctionHLookup = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionHLookup, _super);
    function UltraCalcFunctionHLookup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionHLookup.prototype.evaluate = function (a, b) {
        var c = null;
        if (b == 4) {
            c = a.pop();
        }
        var d = a.pop();
        var e = a.pop();
        var f = a.pop();
        if (f.isError) {
            return f;
        }
        if (e.isError) {
            return e;
        }
        if (d.isError) {
            return d;
        }
        if (c != null && c.isError) {
            return c;
        }
        if (f.isArray || f.isArrayGroup) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        if (f.isNull) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        var g = e._d(false);
        var h;
        if (((function () { var i = d._toDouble1(h); h = i.p0; return i.ret; })()) == false || h < 1) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        var i = truncate(Math.floor(h)) - 1;
        var j;
        if (((function () { var k = UltraCalcFunctionLookupBase._ak(c, j); j = k.p1; return k.ret; })()) == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        var k = g.getLength(0);
        var l = UltraCalcFunctionLookupBase._al(g._i(1, 0), f, j ? 1 : 0);
        if (l < 0 || k <= l) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        var m = g.getLength(1);
        if (m <= i) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(0));
        }
        var n = g.item(l, i);
        n._y = true;
        return new ExcelCalcValue(n._getResolvedValue());
    };
    UltraCalcFunctionHLookup.prototype.get_name = function () {
        return "hlookup";
    };
    Object.defineProperty(UltraCalcFunctionHLookup.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionHLookup.$t = markType(UltraCalcFunctionHLookup, 'UltraCalcFunctionHLookup', UltraCalcFunctionLookupBase.$);
    return UltraCalcFunctionHLookup;
}(UltraCalcFunctionLookupBase));
export { UltraCalcFunctionHLookup };
/**
 * @hidden
 */
var UltraCalcFunctionHyperlink = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionHyperlink, _super);
    function UltraCalcFunctionHyperlink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionHyperlink.prototype.evaluate = function (a, b) {
        var c = null;
        if (b == 2) {
            c = a.pop();
        }
        var d = a.pop();
        if (d.isError) {
            return d;
        }
        if (c != null && c.isError) {
            return c;
        }
        var e = d.toString();
        var f = c == null ? e : c.toString();
        return new ExcelCalcValue(new HyperlinkResult(e, f));
    };
    UltraCalcFunctionHyperlink.prototype.get_name = function () {
        return "hyperlink";
    };
    Object.defineProperty(UltraCalcFunctionHyperlink.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionHyperlink.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionHyperlink.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionHyperlink.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionHyperlink.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionHyperlink.$t = markType(UltraCalcFunctionHyperlink, 'UltraCalcFunctionHyperlink', BuiltInFunctionBase.$);
    return UltraCalcFunctionHyperlink;
}(BuiltInFunctionBase));
export { UltraCalcFunctionHyperlink };
/**
 * @hidden
 */
var UltraCalcFunctionIndex = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionIndex, _super);
    function UltraCalcFunctionIndex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionIndex.prototype.evaluate = function (a, b) {
        var c = null;
        if (b == 4) {
            c = a.pop();
        }
        var d = null;
        if (b >= 3) {
            d = a.pop();
        }
        var e = a.pop();
        var f = a.pop();
        if (f.isReference == false && f.isError) {
            return f;
        }
        if (e.isError) {
            return e;
        }
        if (d != null && d.isError) {
            return d;
        }
        if (c != null && c.isError) {
            return c;
        }
        if (f.isReference == false) {
            if (f.isString || f.isBoolean) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
        }
        var g = e._toInt321() - 1;
        var h = (d == null ? 1 : d._toInt321()) - 1;
        var i = (c == null ? 1 : c._toInt321()) - 1;
        var j = f._b(false);
        if (j.length <= i) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(0));
        }
        var k = j[i];
        var l = k.getLength(0);
        var m = k.getLength(1);
        if (d == null && l > 1) {
            if (m == 1) {
                h = g;
                g = 0;
            }
            else {
                return new ExcelCalcValue(new ExcelCalcErrorValue(0));
            }
        }
        if (l <= h || m <= g) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(0));
        }
        if (h < -1 || g < -1) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        if (g == -1 || h == -1) {
            if (g == -1) {
                if (h == -1) {
                    return new ExcelCalcValue(k._a());
                }
                else {
                    var n = ((function () {
                        var $firstRank;
                        var $ret = new Array($firstRank = 1);
                        var $currRet = $ret;
                        for (var $rankInit = 0; $rankInit < $firstRank; $rankInit++) {
                            $currRet[$rankInit] = new Array(m);
                        }
                        return $ret;
                    })());
                    for (var o = 0; o < m; o++) {
                        n[0][o] = k.item(h, o);
                    }
                    return new ExcelCalcValue(n);
                }
            }
            else {
                var p = ((function () {
                    var $firstRank;
                    var $ret = new Array($firstRank = l);
                    var $currRet = $ret;
                    for (var $rankInit = 0; $rankInit < $firstRank; $rankInit++) {
                        $currRet[$rankInit] = new Array(1);
                    }
                    return $ret;
                })());
                for (var q = 0; q < l; q++) {
                    p[q][0] = k.item(q, g);
                }
                return new ExcelCalcValue(p);
            }
        }
        return k.item(h, g);
    };
    UltraCalcFunctionIndex.prototype.get_name = function () {
        return "index";
    };
    Object.defineProperty(UltraCalcFunctionIndex.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIndex.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionIndex.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIndex.prototype.get_maxArgs = function () {
        return 4;
    };
    Object.defineProperty(UltraCalcFunctionIndex.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIndex.prototype._v = function (a) {
        if (a == 0) {
            return false;
        }
        return true;
    };
    UltraCalcFunctionIndex.$t = markType(UltraCalcFunctionIndex, 'UltraCalcFunctionIndex', BuiltInFunctionBase.$);
    return UltraCalcFunctionIndex;
}(BuiltInFunctionBase));
export { UltraCalcFunctionIndex };
/**
 * @hidden
 */
var UltraCalcFunctionIndirect = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionIndirect, _super);
    function UltraCalcFunctionIndirect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionIndirect.prototype.evaluate = function (a, b) {
        var c = null;
        if (b == 2) {
            c = a.pop();
        }
        var d = a.pop();
        if (d.isError) {
            return d;
        }
        if (c != null && c.isError) {
            return c;
        }
        var e = d.toString();
        var f = c == null ? true : c._toBoolean1();
        var g = f ? 1 : 0;
        var h = typeCast(RefBase.$, ExcelCalcEngine.b(a._k));
        if (h == null) {
            return new ExcelCalcValue(ExcelReferenceError._a2);
        }
        var i = CalcUtilities.f(e, h._w, h._ao, h._u, h._t, g);
        return new ExcelCalcValue(i);
    };
    UltraCalcFunctionIndirect.prototype.get_name = function () {
        return "indirect";
    };
    Object.defineProperty(UltraCalcFunctionIndirect.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIndirect.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIndirect.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIndirect.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionIndirect.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIndirect.$t = markType(UltraCalcFunctionIndirect, 'UltraCalcFunctionIndirect', BuiltInFunctionBase.$);
    return UltraCalcFunctionIndirect;
}(BuiltInFunctionBase));
export { UltraCalcFunctionIndirect };
/**
 * @hidden
 */
var UltraCalcFunctionIntercept = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionIntercept, _super);
    function UltraCalcFunctionIntercept() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionIntercept.prototype.evaluate = function (a, b) {
        var c;
        var d;
        var e;
        var f = UltraCalcFunctionTwoMatrixFunction._aq(a, d, e, c);
        d = f.p1;
        e = f.p2;
        c = f.p3;
        if (c != null) {
            return new ExcelCalcValue(c);
        }
        return new ExcelCalcValue(e);
    };
    UltraCalcFunctionIntercept.prototype.get_name = function () {
        return "intercept";
    };
    Object.defineProperty(UltraCalcFunctionIntercept.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIntercept.$t = markType(UltraCalcFunctionIntercept, 'UltraCalcFunctionIntercept', UltraCalcFunctionTwoMatrixFunction.$);
    return UltraCalcFunctionIntercept;
}(UltraCalcFunctionTwoMatrixFunction));
export { UltraCalcFunctionIntercept };
/**
 * @hidden
 */
var UltraCalcFunctionLookup = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionLookup, _super);
    function UltraCalcFunctionLookup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionLookup.prototype.evaluate = function (a, b) {
        var c = null;
        if (b == 3) {
            c = a.pop();
        }
        var d = a.pop();
        var e = a.pop();
        if (e.isError) {
            return e;
        }
        if (d.isError) {
            return d;
        }
        if (c != null && c.isError) {
            return c;
        }
        if (e.isNull) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        var f = d._d(false);
        var g = f.getLength(0);
        var h = f.getLength(1);
        var i = (h < g);
        var j = i ? g : h;
        var k = null;
        var l = 0;
        var m = 0;
        var n = false;
        if (c != null) {
            k = c.toArrayProxy();
            l = k.getLength(0);
            m = k.getLength(1);
            if (l == 1) {
                n = false;
            }
            else if (m == 1) {
                n = true;
            }
            else {
                return new ExcelCalcValue(new ExcelCalcErrorValue(3));
            }
        }
        var o = UltraCalcFunctionLookupBase._al(f._i(i ? 1 : 0, 0), e, 1);
        if (o < 0 || j <= o) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        var p;
        if (k != null) {
            if (n) {
                if (l <= o) {
                    return new ExcelCalcValue(new ExcelCalcErrorValue(3));
                }
                p = k.item(o, 0);
            }
            else {
                if (m <= o) {
                    return new ExcelCalcValue(new ExcelCalcErrorValue(3));
                }
                p = k.item(0, o);
            }
        }
        else {
            if (i) {
                p = f.item(o, h - 1);
            }
            else {
                p = f.item(g - 1, o);
            }
        }
        p._y = true;
        return new ExcelCalcValue(p._getResolvedValue());
    };
    UltraCalcFunctionLookup.prototype.get_minArgs = function () {
        return 2;
    };
    UltraCalcFunctionLookup.prototype.get_maxArgs = function () {
        return 3;
    };
    UltraCalcFunctionLookup.prototype.get_name = function () {
        return "lookup";
    };
    Object.defineProperty(UltraCalcFunctionLookup.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionLookup.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        if (a == 1) {
            return true;
        }
        return (b == false);
    };
    UltraCalcFunctionLookup.$t = markType(UltraCalcFunctionLookup, 'UltraCalcFunctionLookup', UltraCalcFunctionLookupBase.$);
    return UltraCalcFunctionLookup;
}(UltraCalcFunctionLookupBase));
export { UltraCalcFunctionLookup };
/**
 * @hidden
 */
var UltraCalcFunctionMatch = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionMatch, _super);
    function UltraCalcFunctionMatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionMatch.prototype.evaluate = function (a, b) {
        var c = null;
        if (b == 3) {
            c = a.pop();
        }
        var d = a.pop();
        var e = a.pop();
        if (e.isError) {
            return e;
        }
        if (d.isError) {
            return d;
        }
        if (c != null && c.isError) {
            return c;
        }
        if (e.isNull) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        var f = d._d(false);
        var g = f.getLength(0);
        var h = f.getLength(1);
        if (g != 1 && h != 1) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        var i = (h < g);
        var j = i ? g : h;
        var k = 1;
        if (c != null && ((function () { var l = c._toDouble1(k); k = l.p0; return l.ret; })()) == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        var l = truncate(MathUtilities.j(k));
        var m = UltraCalcFunctionLookupBase._al(f._i(i ? 1 : 0, 0), e, l);
        if (m < 0 || j <= m) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        return new ExcelCalcValue(m + 1);
    };
    UltraCalcFunctionMatch.prototype.get_name = function () {
        return "match";
    };
    Object.defineProperty(UltraCalcFunctionMatch.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMatch.prototype.get_minArgs = function () {
        return 2;
    };
    UltraCalcFunctionMatch.prototype.get_maxArgs = function () {
        return 3;
    };
    UltraCalcFunctionMatch.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionMatch.$t = markType(UltraCalcFunctionMatch, 'UltraCalcFunctionMatch', UltraCalcFunctionLookupBase.$);
    return UltraCalcFunctionMatch;
}(UltraCalcFunctionLookupBase));
export { UltraCalcFunctionMatch };
/**
 * @hidden
 */
var UltraCalcFunctionMdeterm = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionMdeterm, _super);
    function UltraCalcFunctionMdeterm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionMdeterm.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return c;
        }
        var d = c.toArrayProxy();
        var e = d.getLength(0);
        if (e != d.getLength(1)) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        var f;
        var g = ((function () { var h = MatrixUtilities.b(d, 0, f); f = h.p2; return h.ret; })());
        if (f != null) {
            return new ExcelCalcValue(f);
        }
        return new ExcelCalcValue(MatrixUtilities.g(g, e));
    };
    UltraCalcFunctionMdeterm.prototype.get_name = function () {
        return "mdeterm";
    };
    Object.defineProperty(UltraCalcFunctionMdeterm.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMdeterm.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionMdeterm.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMdeterm.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionMdeterm.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMdeterm.$t = markType(UltraCalcFunctionMdeterm, 'UltraCalcFunctionMdeterm', BuiltInFunctionBase.$);
    return UltraCalcFunctionMdeterm;
}(BuiltInFunctionBase));
export { UltraCalcFunctionMdeterm };
/**
 * @hidden
 */
var UltraCalcFunctionMinverse = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionMinverse, _super);
    function UltraCalcFunctionMinverse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionMinverse.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return c;
        }
        var d = c.toArrayProxy();
        var e = d.getLength(0);
        if (e != d.getLength(1)) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        var f;
        var g = ((function () { var h = MatrixUtilities.b(d, 0, f); f = h.p2; return h.ret; })());
        if (f != null) {
            return new ExcelCalcValue(f);
        }
        var h = ((function () { var i = MatrixUtilities.a(g, e, f); f = i.p2; return i.ret; })());
        if (f != null) {
            return new ExcelCalcValue(f);
        }
        var i = ((function () {
            var $firstRank;
            var $ret = new Array($firstRank = e);
            var $currRet = $ret;
            for (var $rankInit = 0; $rankInit < $firstRank; $rankInit++) {
                $currRet[$rankInit] = new Array(e);
            }
            return $ret;
        })());
        for (var j = 0; j < e; j++) {
            for (var k = 0; k < e; k++) {
                i[j][k] = new ExcelCalcValue(h[j][k]);
            }
        }
        return new ExcelCalcValue(i);
    };
    UltraCalcFunctionMinverse.prototype.get_name = function () {
        return "minverse";
    };
    Object.defineProperty(UltraCalcFunctionMinverse.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMinverse.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionMinverse.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMinverse.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionMinverse.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMinverse.$t = markType(UltraCalcFunctionMinverse, 'UltraCalcFunctionMinverse', BuiltInFunctionBase.$);
    return UltraCalcFunctionMinverse;
}(BuiltInFunctionBase));
export { UltraCalcFunctionMinverse };
/**
 * @hidden
 */
var UltraCalcFunctionMmult = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionMmult, _super);
    function UltraCalcFunctionMmult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionMmult.prototype.evaluate = function (a, b) {
        var c = a.pop();
        var d = a.pop();
        if (d.isError) {
            return d;
        }
        if (c.isError) {
            return c;
        }
        var e = d.toArrayProxy();
        var f = e.getLength(0);
        var g = e.getLength(1);
        var h = c.toArrayProxy();
        var i = h.getLength(0);
        var j = h.getLength(1);
        if (f != j) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        var k;
        var l = ((function () { var m = MatrixUtilities.b(e, 0, k); k = m.p2; return m.ret; })());
        if (k != null) {
            return new ExcelCalcValue(k);
        }
        var m = ((function () { var n = MatrixUtilities.b(h, 0, k); k = n.p2; return n.ret; })());
        if (k != null) {
            return new ExcelCalcValue(k);
        }
        var n = ((function () {
            var $firstRank;
            var $ret = new Array($firstRank = i);
            var $currRet = $ret;
            for (var $rankInit = 0; $rankInit < $firstRank; $rankInit++) {
                $currRet[$rankInit] = new Array(g);
            }
            return $ret;
        })());
        for (var o = 0; o < i; o++) {
            for (var p = 0; p < g; p++) {
                var q = 0;
                for (var r = 0; r < f; r++) {
                    q += l[r][p] * m[o][r];
                }
                n[o][p] = new ExcelCalcValue(q);
            }
        }
        return new ExcelCalcValue(n);
    };
    UltraCalcFunctionMmult.prototype.get_name = function () {
        return "mmult";
    };
    Object.defineProperty(UltraCalcFunctionMmult.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMmult.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionMmult.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMmult.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionMmult.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMmult.$t = markType(UltraCalcFunctionMmult, 'UltraCalcFunctionMmult', BuiltInFunctionBase.$);
    return UltraCalcFunctionMmult;
}(BuiltInFunctionBase));
export { UltraCalcFunctionMmult };
/**
 * @hidden
 */
var UltraCalcFunctionOffset = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionOffset, _super);
    function UltraCalcFunctionOffset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionOffset.prototype.evaluate = function (a, b) {
        var c = null;
        if (b == 5) {
            c = a.pop();
        }
        var d = null;
        if (b >= 4) {
            d = a.pop();
        }
        var e = a.pop();
        var f = a.pop();
        var g = a.pop();
        if (g.isReference == false && g.isError) {
            return g;
        }
        if (f.isError) {
            return f;
        }
        if (e.isError) {
            return e;
        }
        if (d != null && d.isError) {
            return d;
        }
        if (c != null && c.isError) {
            return c;
        }
        if (g.isReference == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        var h = RegionGroupCalcReference._a7(g.toReference());
        if (h._ba.count != 1) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        var i = h._ba.item(0);
        var j = f._toInt321();
        var k = e._toInt321();
        var l = d == null ? i._aa : d._toInt321();
        var m = c == null ? i._ad : c._toInt321();
        if (l <= 0 || m <= 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(0));
        }
        var n = i.firstRow + j;
        var o = i.firstColumn + k;
        if (o < 0 || n < 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(0));
        }
        var p = n + l - 1;
        var q = o + m - 1;
        var r = i.worksheet;
        if (r == null) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(0));
        }
        var s = r._rows$i.maxCount - 1;
        var t = r._columns$i.maxCount - 1;
        if (s < p || t < q) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(0));
        }
        return new ExcelCalcValue(r._cx(n, o, p, q)._c);
    };
    UltraCalcFunctionOffset.prototype.get_name = function () {
        return "offset";
    };
    Object.defineProperty(UltraCalcFunctionOffset.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionOffset.prototype.get_minArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionOffset.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionOffset.prototype.get_maxArgs = function () {
        return 5;
    };
    Object.defineProperty(UltraCalcFunctionOffset.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionOffset.prototype._v = function (a) {
        if (a == 0) {
            return false;
        }
        return true;
    };
    UltraCalcFunctionOffset.$t = markType(UltraCalcFunctionOffset, 'UltraCalcFunctionOffset', BuiltInFunctionBase.$);
    return UltraCalcFunctionOffset;
}(BuiltInFunctionBase));
export { UltraCalcFunctionOffset };
/**
 * @hidden
 */
var UltraCalcFunctionPearson = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionPearson, _super);
    function UltraCalcFunctionPearson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionPearson.prototype.evaluate = function (a, b) {
        var c;
        var d = ((function () { var e = UltraCalcFunctionTwoMatrixFunction._al(a, c); c = e.p1; return e.ret; })());
        if (c != null) {
            return new ExcelCalcValue(c);
        }
        return new ExcelCalcValue(d);
    };
    UltraCalcFunctionPearson.prototype.get_name = function () {
        return "pearson";
    };
    Object.defineProperty(UltraCalcFunctionPearson.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPearson.$t = markType(UltraCalcFunctionPearson, 'UltraCalcFunctionPearson', UltraCalcFunctionTwoMatrixFunction.$);
    return UltraCalcFunctionPearson;
}(UltraCalcFunctionTwoMatrixFunction));
export { UltraCalcFunctionPearson };
/**
 * @hidden
 */
var UltraCalcFunctionRow = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionRow, _super);
    function UltraCalcFunctionRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionRow.prototype.evaluate = function (a, b) {
        var c;
        if (b == 0) {
            c = UltraCalcFunctionRow._ak(a._k);
        }
        else {
            var d = a.pop();
            if (d.isReference == false) {
                if (d.isError) {
                    return d;
                }
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
            c = UltraCalcFunctionRow._ak(d.toReference());
        }
        if (c == -1) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(0));
        }
        return new ExcelCalcValue(c);
    };
    UltraCalcFunctionRow._ak = function (a) {
        var b = typeCast(CellCalcReference.$, a.context);
        if (b != null) {
            return b._w.index + 1;
        }
        var c = typeCast(WorksheetRegion.$, a.context);
        if (c != null) {
            return c.firstRow + 1;
        }
        var d = typeCast(ReadOnlyCollection$1.$.specialize(WorksheetRegion.$), a.context);
        if (d != null) {
            if (d.count != 1) {
                return -1;
            }
            return d.item(0).firstRow + 1;
        }
        var e = typeCast(TempCellCalcReference.$, a.context);
        if (e != null) {
            return e._as + 1;
        }
        return -1;
    };
    UltraCalcFunctionRow.prototype.get_name = function () {
        return "row";
    };
    Object.defineProperty(UltraCalcFunctionRow.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRow.prototype.get_minArgs = function () {
        return 0;
    };
    Object.defineProperty(UltraCalcFunctionRow.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRow.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionRow.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRow.prototype._v = function (a) {
        return false;
    };
    UltraCalcFunctionRow.$t = markType(UltraCalcFunctionRow, 'UltraCalcFunctionRow', BuiltInFunctionBase.$);
    return UltraCalcFunctionRow;
}(BuiltInFunctionBase));
export { UltraCalcFunctionRow };
/**
 * @hidden
 */
var UltraCalcFunctionRows = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionRows, _super);
    function UltraCalcFunctionRows() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionRows.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isReference == false && c.isError) {
            return c;
        }
        var d = c._b(false);
        if (d.length != 1) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(0));
        }
        return new ExcelCalcValue(d[0].getLength(1));
    };
    UltraCalcFunctionRows.prototype.get_name = function () {
        return "rows";
    };
    Object.defineProperty(UltraCalcFunctionRows.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRows.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionRows.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRows.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionRows.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRows.prototype._v = function (a) {
        return false;
    };
    UltraCalcFunctionRows.$t = markType(UltraCalcFunctionRows, 'UltraCalcFunctionRows', BuiltInFunctionBase.$);
    return UltraCalcFunctionRows;
}(BuiltInFunctionBase));
export { UltraCalcFunctionRows };
/**
 * @hidden
 */
var UltraCalcFunctionRsq = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionRsq, _super);
    function UltraCalcFunctionRsq() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionRsq.prototype.evaluate = function (a, b) {
        var c;
        var d = ((function () { var e = UltraCalcFunctionTwoMatrixFunction._al(a, c); c = e.p1; return e.ret; })());
        if (c != null) {
            return new ExcelCalcValue(c);
        }
        return new ExcelCalcValue(d * d);
    };
    UltraCalcFunctionRsq.prototype.get_name = function () {
        return "rsq";
    };
    Object.defineProperty(UltraCalcFunctionRsq.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRsq.$t = markType(UltraCalcFunctionRsq, 'UltraCalcFunctionRsq', UltraCalcFunctionTwoMatrixFunction.$);
    return UltraCalcFunctionRsq;
}(UltraCalcFunctionTwoMatrixFunction));
export { UltraCalcFunctionRsq };
/**
 * @hidden
 */
var UltraCalcFunctionSlope = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSlope, _super);
    function UltraCalcFunctionSlope() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSlope.prototype.evaluate = function (a, b) {
        var c;
        var d;
        var e;
        var f = UltraCalcFunctionTwoMatrixFunction._aq(a, d, e, c);
        d = f.p1;
        e = f.p2;
        c = f.p3;
        if (c != null) {
            return new ExcelCalcValue(c);
        }
        return new ExcelCalcValue(d);
    };
    UltraCalcFunctionSlope.prototype.get_name = function () {
        return "slope";
    };
    Object.defineProperty(UltraCalcFunctionSlope.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSlope.$t = markType(UltraCalcFunctionSlope, 'UltraCalcFunctionSlope', UltraCalcFunctionTwoMatrixFunction.$);
    return UltraCalcFunctionSlope;
}(UltraCalcFunctionTwoMatrixFunction));
export { UltraCalcFunctionSlope };
/**
 * @hidden
 */
var UltraCalcFunctionSteyx = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSteyx, _super);
    function UltraCalcFunctionSteyx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSteyx.prototype.evaluate = function (a, b) {
        var c;
        var d;
        var e;
        var f = UltraCalcFunctionTwoMatrixFunction._ao(a, c, d, e);
        c = f.p1;
        d = f.p2;
        e = f.p3;
        if (c != null) {
            return new ExcelCalcValue(c);
        }
        var g;
        var h;
        var i;
        var j = UltraCalcFunctionTwoMatrixFunction._ar(d, e, g, h, i);
        g = j.p2;
        h = j.p3;
        i = j.p4;
        if (g < 3) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(2));
        }
        var k = h / g;
        var l = i / g;
        var m = UltraCalcFunctionTwoMatrixFunction._am(d, e, function (n, o) { return (n - k) * (o - l); });
        var n = UltraCalcFunctionTwoMatrixFunction._an(d, function (o) { return Math.pow((o - k), 2); });
        var o = UltraCalcFunctionTwoMatrixFunction._an(e, function (p) { return Math.pow((p - l), 2); });
        if (o == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(2));
        }
        var p = 1 / (g - 2);
        var q = n - ((m * m) / o);
        var r = Math.sqrt(p * q);
        return new ExcelCalcValue(r);
    };
    UltraCalcFunctionSteyx.prototype.get_name = function () {
        return "steyx";
    };
    Object.defineProperty(UltraCalcFunctionSteyx.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSteyx.$t = markType(UltraCalcFunctionSteyx, 'UltraCalcFunctionSteyx', UltraCalcFunctionTwoMatrixFunction.$);
    return UltraCalcFunctionSteyx;
}(UltraCalcFunctionTwoMatrixFunction));
export { UltraCalcFunctionSteyx };
/**
 * @hidden
 */
var UltraCalcFunctionSumIf = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSumIf, _super);
    function UltraCalcFunctionSumIf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSumIf.prototype._al = function (a, b) {
        return new ExcelCalcValue(a);
    };
    UltraCalcFunctionSumIf.prototype.get_name = function () {
        return "sumif";
    };
    Object.defineProperty(UltraCalcFunctionSumIf.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSumIf.$t = markType(UltraCalcFunctionSumIf, 'UltraCalcFunctionSumIf', UltraCalcConditionalFunctionBase.$);
    return UltraCalcFunctionSumIf;
}(UltraCalcConditionalFunctionBase));
export { UltraCalcFunctionSumIf };
/**
 * @hidden
 */
var UltraCalcFunctionSumproduct = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSumproduct, _super);
    function UltraCalcFunctionSumproduct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSumproduct.prototype.evaluate = function (a, b) {
        var c = new Array(b);
        var d = 0;
        var e = 0;
        var f = 0;
        try {
            var _loop_6 = function () {
                var g = a.pop();
                if (g.isError) {
                    return { value: g };
                }
                var h;
                var i = ((function () { var j = MatrixUtilities.b(g.toArrayProxy(), 1, h); h = j.p2; return j.ret; })());
                if (h != null) {
                    return { value: new ExcelCalcValue(h) };
                }
                if (f == 0) {
                    d = arrayGetLength(i, 0);
                    e = arrayGetLength(i, 1);
                }
                else {
                    if (d != arrayGetLength(i, 0) || e != arrayGetLength(i, 1)) {
                        return { value: new ExcelCalcValue(new ExcelCalcErrorValue(1)) };
                    }
                }
                c[f] = i;
            };
            for (; f < b; f++) {
                var state_4 = _loop_6();
                if (typeof state_4 === "object")
                    return state_4.value;
            }
        }
        finally {
            for (f++; f < b; f++) {
                a.pop();
            }
        }
        var j = 0;
        for (var k = 0; k < d; k++) {
            for (var l = 0; l < e; l++) {
                var m = 1;
                for (var n = 0; n < b; n++) {
                    m *= c[n][k][l];
                }
                j += m;
            }
        }
        return new ExcelCalcValue(j);
    };
    UltraCalcFunctionSumproduct.prototype.get_name = function () {
        return "sumproduct";
    };
    Object.defineProperty(UltraCalcFunctionSumproduct.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSumproduct.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionSumproduct.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSumproduct.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionSumproduct.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSumproduct.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionSumproduct.$t = markType(UltraCalcFunctionSumproduct, 'UltraCalcFunctionSumproduct', BuiltInFunctionBase.$);
    return UltraCalcFunctionSumproduct;
}(BuiltInFunctionBase));
export { UltraCalcFunctionSumproduct };
/**
 * @hidden
 */
var UltraCalcFunctionSumx2my2 = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSumx2my2, _super);
    function UltraCalcFunctionSumx2my2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSumx2my2.prototype.evaluate = function (a, b) {
        return this._ak(a, function (c, d) { return (c * c) - (d * d); });
    };
    UltraCalcFunctionSumx2my2.prototype.get_name = function () {
        return "sumx2my2";
    };
    Object.defineProperty(UltraCalcFunctionSumx2my2.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSumx2my2.$t = markType(UltraCalcFunctionSumx2my2, 'UltraCalcFunctionSumx2my2', UltraCalcFunctionTwoMatrixFunction.$);
    return UltraCalcFunctionSumx2my2;
}(UltraCalcFunctionTwoMatrixFunction));
export { UltraCalcFunctionSumx2my2 };
/**
 * @hidden
 */
var UltraCalcFunctionSumx2py2 = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSumx2py2, _super);
    function UltraCalcFunctionSumx2py2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSumx2py2.prototype.evaluate = function (a, b) {
        return this._ak(a, function (c, d) { return (c * c) + (d * d); });
    };
    UltraCalcFunctionSumx2py2.prototype.get_name = function () {
        return "sumx2py2";
    };
    Object.defineProperty(UltraCalcFunctionSumx2py2.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSumx2py2.$t = markType(UltraCalcFunctionSumx2py2, 'UltraCalcFunctionSumx2py2', UltraCalcFunctionTwoMatrixFunction.$);
    return UltraCalcFunctionSumx2py2;
}(UltraCalcFunctionTwoMatrixFunction));
export { UltraCalcFunctionSumx2py2 };
/**
 * @hidden
 */
var UltraCalcFunctionSumxmy2 = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSumxmy2, _super);
    function UltraCalcFunctionSumxmy2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSumxmy2.prototype.evaluate = function (a, b) {
        return this._ak(a, function (c, d) { return Math.pow((c - d), 2); });
    };
    UltraCalcFunctionSumxmy2.prototype.get_name = function () {
        return "sumxmy2";
    };
    Object.defineProperty(UltraCalcFunctionSumxmy2.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSumxmy2.$t = markType(UltraCalcFunctionSumxmy2, 'UltraCalcFunctionSumxmy2', UltraCalcFunctionTwoMatrixFunction.$);
    return UltraCalcFunctionSumxmy2;
}(UltraCalcFunctionTwoMatrixFunction));
export { UltraCalcFunctionSumxmy2 };
/**
 * @hidden
 */
var UltraCalcFunctionTranspose = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionTranspose, _super);
    function UltraCalcFunctionTranspose() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionTranspose.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return c;
        }
        return new ExcelCalcValue(MatrixUtilities.d(c.toArrayProxy()));
    };
    UltraCalcFunctionTranspose.prototype.get_name = function () {
        return "transpose";
    };
    Object.defineProperty(UltraCalcFunctionTranspose.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTranspose.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionTranspose.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTranspose.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionTranspose.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTranspose.$t = markType(UltraCalcFunctionTranspose, 'UltraCalcFunctionTranspose', BuiltInFunctionBase.$);
    return UltraCalcFunctionTranspose;
}(BuiltInFunctionBase));
export { UltraCalcFunctionTranspose };
/**
 * @hidden
 */
var UltraCalcFunctionVLookup = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionVLookup, _super);
    function UltraCalcFunctionVLookup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionVLookup.prototype.evaluate = function (a, b) {
        var c = null;
        if (b == 4) {
            c = a.pop();
        }
        var d = a.pop();
        var e = a.pop();
        var f = a.pop();
        if (f.isError) {
            return f;
        }
        if (e.isError) {
            return e;
        }
        if (d.isError) {
            return d;
        }
        if (c != null && c.isError) {
            return c;
        }
        if (f.isArray || f.isArrayGroup) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        if (f.isNull) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        var g = e._d(false);
        var h;
        if (((function () { var i = d._toDouble1(h); h = i.p0; return i.ret; })()) == false || h < 1) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        var i = truncate(Math.floor(h)) - 1;
        var j;
        if (((function () { var k = UltraCalcFunctionLookupBase._ak(c, j); j = k.p1; return k.ret; })()) == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        var k = g.getLength(1);
        var l = UltraCalcFunctionLookupBase._al(g._i(0, 0), f, j ? 1 : 0);
        if (l < 0 || k <= l) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        var m = g.getLength(0);
        if (m <= i) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(0));
        }
        var n = g.item(i, l);
        n._y = true;
        return new ExcelCalcValue(n._getResolvedValue());
    };
    UltraCalcFunctionVLookup.prototype.get_name = function () {
        return "vlookup";
    };
    Object.defineProperty(UltraCalcFunctionVLookup.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionVLookup.$t = markType(UltraCalcFunctionVLookup, 'UltraCalcFunctionVLookup', UltraCalcFunctionLookupBase.$);
    return UltraCalcFunctionVLookup;
}(UltraCalcFunctionLookupBase));
export { UltraCalcFunctionVLookup };
/**
 * @hidden
 */
var UltraCalcFunctionBinom_Dist = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionBinom_Dist, _super);
    function UltraCalcFunctionBinom_Dist() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionBinom_Dist.prototype.get_name = function () {
        return "binom.dist";
    };
    UltraCalcFunctionBinom_Dist.$t = markType(UltraCalcFunctionBinom_Dist, 'UltraCalcFunctionBinom_Dist', UltraCalcFunctionBinomDist.$);
    return UltraCalcFunctionBinom_Dist;
}(UltraCalcFunctionBinomDist));
export { UltraCalcFunctionBinom_Dist };
/**
 * @hidden
 */
var UltraCalcFunctionBinom_Inv = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionBinom_Inv, _super);
    function UltraCalcFunctionBinom_Inv() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionBinom_Inv.prototype.get_name = function () {
        return "binom.inv";
    };
    UltraCalcFunctionBinom_Inv.$t = markType(UltraCalcFunctionBinom_Inv, 'UltraCalcFunctionBinom_Inv', UltraCalcFunctionCritBinom.$);
    return UltraCalcFunctionBinom_Inv;
}(UltraCalcFunctionCritBinom));
export { UltraCalcFunctionBinom_Inv };
/**
 * @hidden
 */
var UltraCalcFunctionBinom_Dist_Range = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionBinom_Dist_Range, _super);
    function UltraCalcFunctionBinom_Dist_Range() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionBinom_Dist_Range.prototype.evaluate = function (a, b) {
        var c;
        var d = 0;
        if (b == 4) {
            c = a.pop();
            if (c.isError) {
                return new ExcelCalcValue(c.toErrorValue());
            }
            d = truncate(c._toDecimal2());
        }
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var e = truncate(c._toDecimal2());
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var f = c._toDouble3();
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var g = truncate(c._toDecimal2());
        if (b == 3 || d == e) {
            return UltraCalcFunctionBinomDist._ak(g, f, e, e);
        }
        else {
            return UltraCalcFunctionBinomDist._ak(g, f, e, d);
        }
    };
    UltraCalcFunctionBinom_Dist_Range.prototype.get_name = function () {
        return "binom.dist.range";
    };
    Object.defineProperty(UltraCalcFunctionBinom_Dist_Range.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBinom_Dist_Range.prototype.get_minArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionBinom_Dist_Range.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBinom_Dist_Range.prototype.get_maxArgs = function () {
        return 4;
    };
    Object.defineProperty(UltraCalcFunctionBinom_Dist_Range.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBinom_Dist_Range.$t = markType(UltraCalcFunctionBinom_Dist_Range, 'UltraCalcFunctionBinom_Dist_Range', BuiltInFunctionBase.$);
    return UltraCalcFunctionBinom_Dist_Range;
}(BuiltInFunctionBase));
export { UltraCalcFunctionBinom_Dist_Range };
/**
 * @hidden
 */
var UltraCalcFunctionAverageA = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionAverageA, _super);
    function UltraCalcFunctionAverageA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionAverageA.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.d(a, b, 1249 & ~1024, UltraCalcFunctionAverage._ak);
    };
    UltraCalcFunctionAverageA.prototype.canParameterBeEnumerable = function (a) {
        return true;
    };
    UltraCalcFunctionAverageA.prototype.get_name = function () {
        return "averagea";
    };
    Object.defineProperty(UltraCalcFunctionAverageA.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAverageA.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionAverageA.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAverageA.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionAverageA.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAverageA.$t = markType(UltraCalcFunctionAverageA, 'UltraCalcFunctionAverageA', BuiltInFunctionBase.$);
    return UltraCalcFunctionAverageA;
}(BuiltInFunctionBase));
export { UltraCalcFunctionAverageA };
/**
 * @hidden
 */
var UltraCalcFunctionCeilingPrecise = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionCeilingPrecise, _super);
    function UltraCalcFunctionCeilingPrecise() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionCeilingPrecise.prototype.evaluate = function (a, b) {
        var c = null;
        if (b == 2) {
            c = a.pop();
        }
        var d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c != null && c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var e = d._toDouble3();
        var f = c == null ? 1 : c._toDouble3();
        if (f < 0) {
            f *= -1;
        }
        if (e == 0 || f == 0) {
            return new ExcelCalcValue(0);
        }
        var g = MathUtilities.i(Math.ceil(e / f) * f);
        return new ExcelCalcValue(g);
    };
    UltraCalcFunctionCeilingPrecise.prototype.get_name = function () {
        return "ceiling.precise";
    };
    Object.defineProperty(UltraCalcFunctionCeilingPrecise.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCeilingPrecise.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionCeilingPrecise.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCeilingPrecise.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionCeilingPrecise.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCeilingPrecise.$t = markType(UltraCalcFunctionCeilingPrecise, 'UltraCalcFunctionCeilingPrecise', BuiltInFunctionBase.$);
    return UltraCalcFunctionCeilingPrecise;
}(BuiltInFunctionBase));
export { UltraCalcFunctionCeilingPrecise };
/**
 * @hidden
 */
var UltraCalcFunctionIsoCeiling = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionIsoCeiling, _super);
    function UltraCalcFunctionIsoCeiling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionIsoCeiling.prototype.evaluate = function (a, b) {
        var c = null;
        if (b == 2) {
            c = a.pop();
        }
        var d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c != null && c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var e = d._toDouble3();
        var f = c == null ? 1 : c._toDouble3();
        if (f < 0) {
            f *= -1;
        }
        if (e == 0 || f == 0) {
            return new ExcelCalcValue(0);
        }
        var g = MathUtilities.i(Math.ceil(e / f) * f);
        return new ExcelCalcValue(g);
    };
    UltraCalcFunctionIsoCeiling.prototype.get_name = function () {
        return "iso.ceiling";
    };
    Object.defineProperty(UltraCalcFunctionIsoCeiling.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsoCeiling.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIsoCeiling.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsoCeiling.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionIsoCeiling.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsoCeiling.$t = markType(UltraCalcFunctionIsoCeiling, 'UltraCalcFunctionIsoCeiling', BuiltInFunctionBase.$);
    return UltraCalcFunctionIsoCeiling;
}(BuiltInFunctionBase));
export { UltraCalcFunctionIsoCeiling };
/**
 * @hidden
 */
var UltraCalcFunctionEcmaCeiling = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionEcmaCeiling, _super);
    function UltraCalcFunctionEcmaCeiling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionEcmaCeiling.prototype.evaluate = function (a, b) {
        var c = null;
        if (b == 2) {
            c = a.pop();
        }
        var d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c != null && c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var e = d._toDouble3();
        var f = c == null ? 1 : c._toDouble3();
        if (e == 0 || f == 0) {
            return new ExcelCalcValue(0);
        }
        if (f < 0 && e > 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var g = MathUtilities.i(Math.ceil(e / f) * f);
        return new ExcelCalcValue(g);
    };
    UltraCalcFunctionEcmaCeiling.prototype.get_name = function () {
        return "ecma.ceiling";
    };
    Object.defineProperty(UltraCalcFunctionEcmaCeiling.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionEcmaCeiling.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionEcmaCeiling.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionEcmaCeiling.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionEcmaCeiling.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionEcmaCeiling.$t = markType(UltraCalcFunctionEcmaCeiling, 'UltraCalcFunctionEcmaCeiling', BuiltInFunctionBase.$);
    return UltraCalcFunctionEcmaCeiling;
}(BuiltInFunctionBase));
export { UltraCalcFunctionEcmaCeiling };
/**
 * @hidden
 */
var UltraCalcFunctionCeilingMath = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionCeilingMath, _super);
    function UltraCalcFunctionCeilingMath() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionCeilingMath.prototype.evaluate = function (a, b) {
        var c = null;
        var d = null;
        if (b == 3) {
            c = a.pop();
        }
        if (b >= 2) {
            d = a.pop();
        }
        var e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        if (d != null && d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c != null && c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var f = e._toDouble3();
        var g = d == null ? 1 : Math.abs(d._toDouble3());
        var h = c == null ? 0 : c._toDouble3();
        if (f == 0 || g == 0) {
            return new ExcelCalcValue(0);
        }
        var i = f / g;
        if (f < 0 && h != 0) {
            i = Math.floor(i);
        }
        else {
            i = Math.ceil(i);
        }
        return new ExcelCalcValue(MathUtilities.i(i * g));
    };
    UltraCalcFunctionCeilingMath.prototype.get_name = function () {
        return "ceiling.math";
    };
    Object.defineProperty(UltraCalcFunctionCeilingMath.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCeilingMath.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionCeilingMath.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCeilingMath.prototype.get_maxArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionCeilingMath.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCeilingMath.$t = markType(UltraCalcFunctionCeilingMath, 'UltraCalcFunctionCeilingMath', BuiltInFunctionBase.$);
    return UltraCalcFunctionCeilingMath;
}(BuiltInFunctionBase));
export { UltraCalcFunctionCeilingMath };
/**
 * @hidden
 */
var UltraCalcFunctionFloorPrecise = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionFloorPrecise, _super);
    function UltraCalcFunctionFloorPrecise() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionFloorPrecise.prototype.evaluate = function (a, b) {
        var c = null;
        if (b == 2) {
            c = a.pop();
        }
        var d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c != null && c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var e = d._toDouble3();
        var f = c == null ? 1 : Math.abs(c._toDouble3());
        if (e == 0 || f == 0) {
            return new ExcelCalcValue(0);
        }
        var g = MathUtilities.i(Math.floor(e / f) * f);
        return new ExcelCalcValue(g);
    };
    UltraCalcFunctionFloorPrecise.prototype.get_name = function () {
        return "floor.precise";
    };
    Object.defineProperty(UltraCalcFunctionFloorPrecise.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFloorPrecise.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionFloorPrecise.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFloorPrecise.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionFloorPrecise.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFloorPrecise.$t = markType(UltraCalcFunctionFloorPrecise, 'UltraCalcFunctionFloorPrecise', BuiltInFunctionBase.$);
    return UltraCalcFunctionFloorPrecise;
}(BuiltInFunctionBase));
export { UltraCalcFunctionFloorPrecise };
/**
 * @hidden
 */
var UltraCalcFunctionFloorMath = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionFloorMath, _super);
    function UltraCalcFunctionFloorMath() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionFloorMath.prototype.evaluate = function (a, b) {
        var c = null;
        var d = null;
        if (b == 3) {
            c = a.pop();
        }
        if (b >= 2) {
            d = a.pop();
        }
        var e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        if (d != null && d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c != null && c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var f = e._toDouble3();
        var g = d == null ? 1 : Math.abs(d._toDouble3());
        var h = c == null ? 0 : c._toDouble3();
        if (f == 0 || g == 0) {
            return new ExcelCalcValue(0);
        }
        var i = f / g;
        if (f < 0 && h != 0) {
            i = Math.ceil(i);
        }
        else {
            i = Math.floor(i);
        }
        return new ExcelCalcValue(MathUtilities.i(i * g));
    };
    UltraCalcFunctionFloorMath.prototype.get_name = function () {
        return "floor.math";
    };
    Object.defineProperty(UltraCalcFunctionFloorMath.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFloorMath.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionFloorMath.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFloorMath.prototype.get_maxArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionFloorMath.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFloorMath.$t = markType(UltraCalcFunctionFloorMath, 'UltraCalcFunctionFloorMath', BuiltInFunctionBase.$);
    return UltraCalcFunctionFloorMath;
}(BuiltInFunctionBase));
export { UltraCalcFunctionFloorMath };
/**
 * @hidden
 */
var UltraCalcFunctionNumberValue = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionNumberValue, _super);
    function UltraCalcFunctionNumberValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionNumberValue.prototype.evaluate = function (a, b) {
        var c = null;
        var d = null;
        if (b == 3) {
            c = a.pop();
        }
        if (b >= 2) {
            d = a.pop();
        }
        var e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        if (d != null && d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c != null && c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var f = e.toString();
        var g = d == null ? a._w.numberFormat.numberDecimalSeparator : d.toString();
        var h = c == null ? a._w.numberFormat.numberGroupSeparator : c.toString();
        if (stringIsNullOrEmpty(h) || stringIsNullOrEmpty(g)) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        var i = h.charAt(0);
        var j = g.charAt(0);
        if (j == i) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        if (stringIsNullOrWhiteSpace(f)) {
            return new ExcelCalcValue(0);
        }
        var k = false;
        var l = "";
        var m = "";
        var n = 0;
        var o = false;
        var p = 0;
        var _loop_7 = function (q) {
            var r = f.charAt(q);
            if (/\s/i.test(r)) {
            }
            else if (r == j) {
                if (k || n > 0) {
                    o = true;
                }
                k = true;
            }
            else if (r == i) {
                if (k) {
                    o = true;
                }
            }
            else if (r == '%') {
                n++;
            }
            else if ('0'.charCodeAt(0) <= r.charCodeAt(0) && r.charCodeAt(0) <= '9'.charCodeAt(0)) {
                if (n > 0) {
                    o = true;
                }
                else {
                    var s = r;
                    if (p == 15) {
                        s = '0';
                    }
                    else if (p > 0 || s != '0') {
                        p++;
                    }
                    if (k) {
                        m += s;
                    }
                    else {
                        l += s;
                    }
                }
            }
            else {
                if (!e.isBoolean) {
                    var t_1;
                    if (((function () { var u = e._toDouble1(t_1); t_1 = u.p0; return u.ret; })())) {
                        return { value: new ExcelCalcValue(t_1) };
                    }
                }
                o = true;
            }
            if (o) {
                return "break";
            }
        };
        for (var q = 0; q < f.length; q++) {
            var state_5 = _loop_7(q);
            if (typeof state_5 === "object")
                return state_5.value;
            if (state_5 === "break")
                break;
        }
        if (o) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        var u = l.length > 0 ? parseFloat(l) : 0;
        if (m.length > 0) {
            u += parseFloat(m) / Math.pow(10, m.length);
        }
        if (n > 0) {
            u /= Math.pow(10, n * 2);
        }
        return new ExcelCalcValue(MathUtilities.i(u));
    };
    UltraCalcFunctionNumberValue.prototype.get_name = function () {
        return "numbervalue";
    };
    Object.defineProperty(UltraCalcFunctionNumberValue.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionNumberValue.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionNumberValue.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionNumberValue.prototype.get_maxArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionNumberValue.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionNumberValue.$t = markType(UltraCalcFunctionNumberValue, 'UltraCalcFunctionNumberValue', BuiltInFunctionBase.$);
    return UltraCalcFunctionNumberValue;
}(BuiltInFunctionBase));
export { UltraCalcFunctionNumberValue };
/**
 * @hidden
 */
var UltraCalcFunctionIfs = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionIfs, _super);
    function UltraCalcFunctionIfs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionIfs.prototype.evaluate = function (a, b) {
        var c = new List$1(ExcelCalcValue.$, 0);
        while (b > 0) {
            c.add(a.pop());
            b--;
        }
        for (var d = c.count - 1; d > 0; d -= 2) {
            var e = c._inner[d];
            var f = c._inner[d - 1];
            if (e.isError) {
                return new ExcelCalcValue(e.toErrorValue());
            }
            if (e._toBoolean1() == true) {
                return f;
            }
        }
        return new ExcelCalcValue(new ExcelCalcErrorValue(3));
    };
    UltraCalcFunctionIfs.prototype.get_name = function () {
        return "ifs";
    };
    Object.defineProperty(UltraCalcFunctionIfs.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIfs.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionIfs.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIfs.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionIfs.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIfs.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionIfs.prototype.get__s = function () {
        return true;
    };
    UltraCalcFunctionIfs.prototype._v = function (a) {
        if (a % 2 == 1) {
            return false;
        }
        return true;
    };
    UltraCalcFunctionIfs.$t = markType(UltraCalcFunctionIfs, 'UltraCalcFunctionIfs', BuiltInFunctionBase.$);
    return UltraCalcFunctionIfs;
}(BuiltInFunctionBase));
export { UltraCalcFunctionIfs };
/**
 * @hidden
 */
var UltraCalcFunctionSwitch = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSwitch, _super);
    function UltraCalcFunctionSwitch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSwitch.prototype.evaluate = function (a, b) {
        var c = new List$1(ExcelCalcValue.$, 0);
        var d = null;
        if (b % 2 == 0) {
            d = a.pop();
            b--;
        }
        while (b > 1) {
            c.add(a.pop());
            b--;
        }
        var e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        var f, g, h, i;
        f = g = h = i = false;
        var j;
        if (e.isNull) {
            f = true;
            j = null;
        }
        else if (e.isString) {
            j = e.toString();
            h = true;
        }
        else if (e.isBoolean) {
            j = e._toBoolean1();
            g = true;
        }
        else {
            var k = e._toDouble3();
            j = k;
            if (k == 0) {
                f = true;
            }
            else {
                i = true;
            }
        }
        var _loop_8 = function (l) {
            var m = c._inner[l];
            var n = c._inner[l - 1];
            if (m.isError) {
                return { value: new ExcelCalcValue(m.toErrorValue()) };
            }
            var o = false;
            if (f || i) {
                if (!m.isString && !m.isBoolean) {
                    if (m.isNull) {
                        o = f;
                    }
                    else {
                        var p_1;
                        if (((function () { var q = m._toDouble1(p_1); p_1 = q.p0; return q.ret; })())) {
                            if (f) {
                                o = p_1 == 0;
                            }
                            else {
                                o = p_1 == j;
                            }
                        }
                    }
                }
            }
            else if (h) {
                o = m.isString && StringUtilities.c(j, m.toString(), a._w, 1) == 0;
            }
            else {
                o = m.isBoolean && m._toBoolean1() == j;
            }
            if (o) {
                return { value: n };
            }
        };
        for (var l = c.count - 1; l > 0; l -= 2) {
            var state_6 = _loop_8(l);
            if (typeof state_6 === "object")
                return state_6.value;
        }
        if (d != null) {
            if (d.isError) {
                return new ExcelCalcValue(d.toErrorValue());
            }
            return d;
        }
        return new ExcelCalcValue(new ExcelCalcErrorValue(3));
    };
    UltraCalcFunctionSwitch.prototype.get_name = function () {
        return "switch";
    };
    Object.defineProperty(UltraCalcFunctionSwitch.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSwitch.prototype.get_minArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionSwitch.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSwitch.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionSwitch.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSwitch.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionSwitch.prototype.get__s = function () {
        return true;
    };
    UltraCalcFunctionSwitch.prototype._v = function (a) {
        if (a % 2 == 1) {
            return true;
        }
        return false;
    };
    UltraCalcFunctionSwitch.$t = markType(UltraCalcFunctionSwitch, 'UltraCalcFunctionSwitch', BuiltInFunctionBase.$);
    return UltraCalcFunctionSwitch;
}(BuiltInFunctionBase));
export { UltraCalcFunctionSwitch };
/**
 * @hidden
 */
var UltraCalcFunctionConcatEx = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionConcatEx, _super);
    function UltraCalcFunctionConcatEx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionConcatEx.prototype.evaluate = function (a, b) {
        var c = new List$1(ExcelCalcValue.$, 0);
        this._ad(c, a, b, true);
        var d = new StringBuilder(0);
        for (var e = 0; e < c.count; e++) {
            var f = c._inner[e];
            if (f.isError) {
                return new ExcelCalcValue(f.toErrorValue());
            }
            d.l(f.toString());
        }
        if (d.c > 32767) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        return new ExcelCalcValue(d.toString());
    };
    UltraCalcFunctionConcatEx.prototype.get_name = function () {
        return "concat";
    };
    Object.defineProperty(UltraCalcFunctionConcatEx.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionConcatEx.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionConcatEx.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionConcatEx.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionConcatEx.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionConcatEx.$t = markType(UltraCalcFunctionConcatEx, 'UltraCalcFunctionConcatEx', BuiltInFunctionBase.$);
    return UltraCalcFunctionConcatEx;
}(BuiltInFunctionBase));
export { UltraCalcFunctionConcatEx };
/**
 * @hidden
 */
var UltraCalcFunctionTextJoin = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionTextJoin, _super);
    function UltraCalcFunctionTextJoin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionTextJoin.prototype.evaluate = function (a, b) {
        var c = CalcFunctionUtilities.p(b - 2);
        var d = b - 2;
        var e = new List$1(ExcelCalcValue.$, 2, d);
        for (var f = 0; f < d; f++) {
            e.add(a.pop());
        }
        e.w();
        var g = a.pop();
        var h = a.pop();
        if (h.isError) {
            return new ExcelCalcValue(h.toErrorValue());
        }
        if (g.isError) {
            return new ExcelCalcValue(g.toErrorValue());
        }
        var i;
        if (g.isString) {
            if (!((function () { var j = tryParseBool(g.toString(), i); i = j.p1; return j.ret; })())) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
        }
        else {
            i = g._toBoolean1();
        }
        for (var j = 0; j < e.count; j++) {
            ExcelCalcFunction._ac(c, e._inner[j], i, false);
        }
        var k;
        if ((h.isReference && h.toReference().isEnumerable) || h.isArray || h.isArrayGroup) {
            var l = CalcFunctionUtilities.p(10);
            ExcelCalcFunction._ac(l, h, false, false);
            k = new Array(l.count);
            for (var m = 0; m < k.length; m++) {
                k[m] = l._inner[m].toString();
            }
        }
        else {
            k = new Array(1);
            k[0] = h.toString();
        }
        var n = new StringBuilder(0);
        for (var o = 0; o < c.count; o++) {
            if (o > 0) {
                n.l(k[(o - 1) % k.length]);
            }
            var p = c._inner[o];
            if (p.isError) {
                return new ExcelCalcValue(p.toErrorValue());
            }
            n.l(p.toString());
        }
        if (n.c > 32767) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        return new ExcelCalcValue(n.toString());
    };
    UltraCalcFunctionTextJoin.prototype.get_name = function () {
        return "textjoin";
    };
    Object.defineProperty(UltraCalcFunctionTextJoin.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTextJoin.prototype.get_minArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionTextJoin.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTextJoin.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionTextJoin.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTextJoin.$t = markType(UltraCalcFunctionTextJoin, 'UltraCalcFunctionTextJoin', BuiltInFunctionBase.$);
    return UltraCalcFunctionTextJoin;
}(BuiltInFunctionBase));
export { UltraCalcFunctionTextJoin };
/**
 * @hidden
 */
var UltraCalcFunctionCountBlank = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionCountBlank, _super);
    function UltraCalcFunctionCountBlank() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionCountBlank.prototype.evaluate = function (a, b) {
        var e_9, _e;
        var c = a.pop();
        if (!c.isReference) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        if (c.isArrayGroup) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        if (c.isArray) {
            var d = c.toArrayProxy();
            var e_10 = 0;
            d._m(false, function (f, g) {
                if (!f.isNull) {
                    e_10++;
                }
            });
            var f = d.getLength(0) * d.getLength(1);
            return new ExcelCalcValue(f - e_10);
        }
        var g = c.toReference();
        var h = 0;
        if (g.isEnumerable) {
            try {
                for (var _h = tslib_1.__values(fromEn(g.references)), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var i = _j.value;
                    if (i.value.isNull) {
                        h++;
                    }
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_e = _h.return)) _e.call(_h);
                }
                finally { if (e_9) throw e_9.error; }
            }
        }
        else if (typeCast(NamedCalcReferenceUnconnected.$, g) !== null) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(7));
        }
        else {
            h = c.isNull ? 1 : 0;
        }
        return new ExcelCalcValue(h);
    };
    UltraCalcFunctionCountBlank.prototype.get_name = function () {
        return "countblank";
    };
    Object.defineProperty(UltraCalcFunctionCountBlank.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCountBlank.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionCountBlank.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCountBlank.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionCountBlank.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCountBlank.$t = markType(UltraCalcFunctionCountBlank, 'UltraCalcFunctionCountBlank', BuiltInFunctionBase.$);
    return UltraCalcFunctionCountBlank;
}(BuiltInFunctionBase));
export { UltraCalcFunctionCountBlank };
/**
 * @hidden
 */
var UltraCalcFunctionUSDollar = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionUSDollar, _super);
    function UltraCalcFunctionUSDollar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionUSDollar.prototype.evaluate = function (a, b) {
        var c = null;
        if (b == 2) {
            c = a.pop();
        }
        var d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c != null && c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var e = d._toDouble3();
        var f = c == null ? 2 : c._toInt();
        if (f < 0) {
            e = MathUtilities.g(e, f);
        }
        var g = f > 0 ? stringFormat("$#,##0.{0};($#,##0.{0})", stringCreateFromChar('0', f)) : "$#,##0;($#,##0)";
        var h = new ValueFormatter(0, d._o, g, a._w);
        var i;
        if (((function () { var j = h.v(e, null, i); i = j.p2; return j.ret; })()) == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        return new ExcelCalcValue(i);
    };
    UltraCalcFunctionUSDollar.prototype.get_name = function () {
        return "usdollar";
    };
    Object.defineProperty(UltraCalcFunctionUSDollar.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionUSDollar.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionUSDollar.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionUSDollar.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionUSDollar.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionUSDollar.$t = markType(UltraCalcFunctionUSDollar, 'UltraCalcFunctionUSDollar', BuiltInFunctionBase.$);
    return UltraCalcFunctionUSDollar;
}(BuiltInFunctionBase));
export { UltraCalcFunctionUSDollar };
/**
 * @hidden
 */
var UltraCalcFunctionDollar = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionDollar, _super);
    function UltraCalcFunctionDollar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionDollar.prototype.get_name = function () {
        return "dollar";
    };
    UltraCalcFunctionDollar.$t = markType(UltraCalcFunctionDollar, 'UltraCalcFunctionDollar', UltraCalcFunctionUSDollar.$);
    return UltraCalcFunctionDollar;
}(UltraCalcFunctionUSDollar));
export { UltraCalcFunctionDollar };
/**
 * @hidden
 */
var UltraCalcFunctionExact = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionExact, _super);
    function UltraCalcFunctionExact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionExact.prototype.evaluate = function (a, b) {
        var c = a.pop();
        var d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var e;
        if (d.isString && c.isString) {
            e = stringEquals1(d.toString(), c.toString(), 0);
        }
        else {
            e = d.isSameValue(c);
        }
        return new ExcelCalcValue(e);
    };
    UltraCalcFunctionExact.prototype.get_name = function () {
        return "exact";
    };
    Object.defineProperty(UltraCalcFunctionExact.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionExact.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionExact.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionExact.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionExact.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionExact.$t = markType(UltraCalcFunctionExact, 'UltraCalcFunctionExact', BuiltInFunctionBase.$);
    return UltraCalcFunctionExact;
}(BuiltInFunctionBase));
export { UltraCalcFunctionExact };
/**
 * @hidden
 */
var UltraCalcFunctionSubstitute = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSubstitute, _super);
    function UltraCalcFunctionSubstitute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSubstitute.prototype.evaluate = function (a, b) {
        var c = 0;
        var d = null;
        if (b == 4) {
            d = a.pop();
        }
        var e = a.pop();
        var f = a.pop();
        var g = a.pop();
        if (g.isError) {
            return new ExcelCalcValue(g.toErrorValue());
        }
        if (f.isError) {
            return new ExcelCalcValue(f.toErrorValue());
        }
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        if (d != null) {
            if (d.isError) {
                return new ExcelCalcValue(d.toErrorValue());
            }
            c = d._toInt();
            if (c < 1) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
        }
        var h = g.toString();
        var i = f.toString();
        if (!stringIsNullOrEmpty(h) && !stringIsNullOrEmpty(i)) {
            var j = e.toString();
            if (c == 0) {
                h = stringReplace(h, i, j);
            }
            else {
                var k = 0;
                while (c > 0) {
                    k = h.indexOf(i, k);
                    c--;
                    if (c > 0 && k >= 0) {
                        k++;
                    }
                }
                if (k >= 0) {
                    var l = k > 0 ? h.substr(0, k) : "";
                    var m = k + i.length < h.length ? h.substr(k + i.length) : "";
                    h = l + j + m;
                }
            }
        }
        return new ExcelCalcValue(h);
    };
    UltraCalcFunctionSubstitute.prototype.get_name = function () {
        return "substitute";
    };
    Object.defineProperty(UltraCalcFunctionSubstitute.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSubstitute.prototype.get_minArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionSubstitute.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSubstitute.prototype.get_maxArgs = function () {
        return 4;
    };
    Object.defineProperty(UltraCalcFunctionSubstitute.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSubstitute.$t = markType(UltraCalcFunctionSubstitute, 'UltraCalcFunctionSubstitute', BuiltInFunctionBase.$);
    return UltraCalcFunctionSubstitute;
}(BuiltInFunctionBase));
export { UltraCalcFunctionSubstitute };
/**
 * @hidden
 */
var UltraCalcFunctionProper = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionProper, _super);
    function UltraCalcFunctionProper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionProper.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d;
        if (c.isNull) {
            d = null;
        }
        else {
            var e = c.toString();
            var f = new StringBuilder(0);
            var g = false;
            var h = a._w;
            for (var i = 0; i < e.length; i++) {
                var j = e.charAt(i);
                if (isLetter(j)) {
                    if (g) {
                        f.h(StringUtilities.a(j, h));
                    }
                    else {
                        g = true;
                        f.h(StringUtilities.b(j, h));
                    }
                }
                else {
                    g = false;
                    f.h(j);
                }
            }
            d = f.toString();
        }
        return new ExcelCalcValue(d);
    };
    UltraCalcFunctionProper.prototype.get_name = function () {
        return "proper";
    };
    Object.defineProperty(UltraCalcFunctionProper.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionProper.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionProper.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionProper.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionProper.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionProper.$t = markType(UltraCalcFunctionProper, 'UltraCalcFunctionProper', BuiltInFunctionBase.$);
    return UltraCalcFunctionProper;
}(BuiltInFunctionBase));
export { UltraCalcFunctionProper };
/**
 * @hidden
 */
var UltraCalcFunctionMode = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionMode, _super);
    function UltraCalcFunctionMode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionMode.prototype.evaluate = function (a, b) {
        return UltraCalcFunctionMode._ak(a, b, false);
    };
    UltraCalcFunctionMode._ak = function (a, b, c) {
        var e_11, _e;
        var d = CalcFunctionUtilities.p(b);
        var e = CalcFunctionUtilities.o(b);
        try {
            for (var f = 0; f < b; f++) {
                d.add(a.pop());
            }
            d.w();
            for (var g = 0; g < d.count; g++) {
                var h = d._inner[g];
                if (h.isError) {
                    return new ExcelCalcValue(h.toErrorValue());
                }
                var i = h.isArray || h.isArrayGroup || (h.isReference && h.toReference().isEnumerable);
                if (i) {
                    var j = CalcArgumentHelper.c(h, 0, 1101, runOn(e, e.add));
                    if (j != null) {
                        return j;
                    }
                    continue;
                }
                if (h.isBoolean || h.isString || h.isNull) {
                    return new ExcelCalcValue(new ExcelCalcErrorValue(1));
                }
                e.add(h._toDouble3());
            }
            var k_2 = new Dictionary$2(Number_$type, Number_$type, 0);
            var l = 0;
            var _loop_9 = function (m) {
                var n = e._inner[m];
                var o;
                if (!((function () { var p = k_2.tryGetValue(n, o); o = p.p1; return p.ret; })())) {
                    k_2.item(n, 1);
                }
                else {
                    k_2.item(n, o + 1);
                    if (o + 1 > l) {
                        l = o + 1;
                    }
                }
            };
            for (var m = 0; m < e.count; m++) {
                _loop_9(m);
            }
            if (l == 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(3));
            }
            var p_2 = new List$1(Number_$type, 0);
            try {
                for (var _h = tslib_1.__values(fromEnum(k_2)), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var q = _j.value;
                    if (q.value == l) {
                        p_2.add(q.key);
                    }
                }
            }
            catch (e_11_1) { e_11 = { error: e_11_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_e = _h.return)) _e.call(_h);
                }
                finally { if (e_11) throw e_11.error; }
            }
            if (p_2.count > 1) {
                p_2.aa(function (r, s) {
                    var t = e.indexOf(r);
                    var u = e.indexOf(s);
                    return Base.compareSimple(t, u);
                });
                if (c) {
                    var r = ((function () {
                        var $firstRank;
                        var $ret = new Array($firstRank = 1);
                        var $currRet = $ret;
                        for (var $rankInit = 0; $rankInit < $firstRank; $rankInit++) {
                            $currRet[$rankInit] = new Array(p_2.count);
                        }
                        return $ret;
                    })());
                    for (var s = 0; s < p_2.count; s++) {
                        r[0][s] = new ExcelCalcValue(p_2._inner[s]);
                    }
                    return new ExcelCalcValue(r);
                }
            }
            return new ExcelCalcValue(p_2._inner[0]);
        }
        finally {
            CalcFunctionUtilities.ac(e);
            CalcFunctionUtilities.ad(d);
        }
    };
    UltraCalcFunctionMode.prototype.get_name = function () {
        return "mode";
    };
    Object.defineProperty(UltraCalcFunctionMode.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMode.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionMode.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMode.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionMode.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMode.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return _super.prototype.doesParameterAllowIntermediateResultArray.call(this, a, b);
    };
    UltraCalcFunctionMode.$t = markType(UltraCalcFunctionMode, 'UltraCalcFunctionMode', BuiltInFunctionBase.$);
    return UltraCalcFunctionMode;
}(BuiltInFunctionBase));
export { UltraCalcFunctionMode };
/**
 * @hidden
 */
var UltraCalcFunctionModeMult = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionModeMult, _super);
    function UltraCalcFunctionModeMult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionModeMult.prototype.evaluate = function (a, b) {
        return UltraCalcFunctionMode._ak(a, b, true);
    };
    UltraCalcFunctionModeMult.prototype.get_name = function () {
        return "mode.mult";
    };
    UltraCalcFunctionModeMult.$t = markType(UltraCalcFunctionModeMult, 'UltraCalcFunctionModeMult', UltraCalcFunctionMode.$);
    return UltraCalcFunctionModeMult;
}(UltraCalcFunctionMode));
export { UltraCalcFunctionModeMult };
/**
 * @hidden
 */
var UltraCalcFunctionModeSngl = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionModeSngl, _super);
    function UltraCalcFunctionModeSngl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionModeSngl.prototype.get_name = function () {
        return "mode.sngl";
    };
    UltraCalcFunctionModeSngl.$t = markType(UltraCalcFunctionModeSngl, 'UltraCalcFunctionModeSngl', UltraCalcFunctionMode.$);
    return UltraCalcFunctionModeSngl;
}(UltraCalcFunctionMode));
export { UltraCalcFunctionModeSngl };
/**
 * @hidden
 */
var UltraCalcFunctionRankBase = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionRankBase, _super);
    function UltraCalcFunctionRankBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionRankBase._ak = function (a, b, c) {
        var d = true;
        if (b == 3) {
            var e = a.pop();
            d = !e._toBoolean1();
        }
        var f = a.pop();
        var g = a.pop();
        if (g.isError) {
            return new ExcelCalcValue(g.toErrorValue());
        }
        var h = g._toDouble3();
        var i = f.toArrayProxy();
        var j = i.getLength(0);
        var k = i.getLength(1);
        var l, m, n;
        l = m = n = 0;
        for (var o = 0; o < j; o++) {
            for (var p = 0; p < k; p++) {
                var q = i.item(o, p);
                if (q.isError) {
                    return new ExcelCalcValue(q.toErrorValue());
                }
                if (q.isNull || q.isString || q.isBoolean) {
                    l++;
                }
                else {
                    var r = Base.compareSimple(h, q._toDouble3());
                    if (r < 0) {
                        m++;
                    }
                    else if (r == 0) {
                        n++;
                    }
                }
            }
        }
        if (n == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        var s = !d ? (k * j) - (l + m + n) : m;
        var t = s + 1;
        if (c) {
            t += (n - 1) / 2;
        }
        return new ExcelCalcValue(t);
    };
    UltraCalcFunctionRankBase.prototype.get_maxArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionRankBase.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRankBase.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionRankBase.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRankBase.$t = markType(UltraCalcFunctionRankBase, 'UltraCalcFunctionRankBase', BuiltInFunctionBase.$);
    return UltraCalcFunctionRankBase;
}(BuiltInFunctionBase));
export { UltraCalcFunctionRankBase };
/**
 * @hidden
 */
var UltraCalcFunctionRank = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionRank, _super);
    function UltraCalcFunctionRank() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionRank.prototype.evaluate = function (a, b) {
        return UltraCalcFunctionRankBase._ak(a, b, false);
    };
    UltraCalcFunctionRank.prototype.get_name = function () {
        return "rank";
    };
    Object.defineProperty(UltraCalcFunctionRank.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRank.$t = markType(UltraCalcFunctionRank, 'UltraCalcFunctionRank', UltraCalcFunctionRankBase.$);
    return UltraCalcFunctionRank;
}(UltraCalcFunctionRankBase));
export { UltraCalcFunctionRank };
/**
 * @hidden
 */
var UltraCalcFunctionRankEqual = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionRankEqual, _super);
    function UltraCalcFunctionRankEqual() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionRankEqual.prototype.evaluate = function (a, b) {
        return UltraCalcFunctionRankBase._ak(a, b, false);
    };
    UltraCalcFunctionRankEqual.prototype.get_name = function () {
        return "rank.eq";
    };
    Object.defineProperty(UltraCalcFunctionRankEqual.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRankEqual.$t = markType(UltraCalcFunctionRankEqual, 'UltraCalcFunctionRankEqual', UltraCalcFunctionRankBase.$);
    return UltraCalcFunctionRankEqual;
}(UltraCalcFunctionRankBase));
export { UltraCalcFunctionRankEqual };
/**
 * @hidden
 */
var UltraCalcFunctionRankAverage = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionRankAverage, _super);
    function UltraCalcFunctionRankAverage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionRankAverage.prototype.evaluate = function (a, b) {
        return UltraCalcFunctionRankBase._ak(a, b, true);
    };
    UltraCalcFunctionRankAverage.prototype.get_name = function () {
        return "rank.avg";
    };
    Object.defineProperty(UltraCalcFunctionRankAverage.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRankAverage.$t = markType(UltraCalcFunctionRankAverage, 'UltraCalcFunctionRankAverage', UltraCalcFunctionRankBase.$);
    return UltraCalcFunctionRankAverage;
}(UltraCalcFunctionRankBase));
export { UltraCalcFunctionRankAverage };
/**
 * @hidden
 */
var UltraCalcFunctionPercentRankBase = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionPercentRankBase, _super);
    function UltraCalcFunctionPercentRankBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionPercentRankBase._ak = function (a, b, c) {
        var d = 3;
        if (b == 3) {
            var e = a.pop();
            d = e._toInt();
            if (d < 1) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
        }
        var f = a.pop();
        var g = a.pop();
        if (f.isError) {
            return new ExcelCalcValue(f.toErrorValue());
        }
        var h = f._toDouble3();
        var i = g.toArrayProxy();
        var j = i.getLength(0);
        var k = i.getLength(1);
        var l, m, n;
        l = m = n = 0;
        var o = Number.POSITIVE_INFINITY;
        var p = Number.NEGATIVE_INFINITY;
        var q, r;
        q = r = 0;
        for (var s = 0; s < j; s++) {
            for (var t = 0; t < k; t++) {
                var u = i.item(s, t);
                if (u.isError) {
                    return new ExcelCalcValue(u.toErrorValue());
                }
                if (u.isNull || u.isString || u.isBoolean) {
                    l++;
                }
                else {
                    var v = u._toDouble3();
                    var w = Base.compareSimple(h, v);
                    if (w == 0) {
                        if (n == 0) {
                            m += r;
                            r = q = 0;
                        }
                        n++;
                    }
                    else if (w < 0) {
                        if (n == 0) {
                            w = Base.compareSimple(o, v);
                            if (w == 0) {
                                q++;
                            }
                            else if (w > 0) {
                                q = 1;
                                o = v;
                            }
                        }
                    }
                    else {
                        if (n != 0) {
                            m++;
                        }
                        else {
                            w = Base.compareSimple(v, p);
                            if (w < 0) {
                                m++;
                            }
                            else if (w == 0) {
                                r++;
                            }
                            else {
                                m += r;
                                r = 1;
                                p = v;
                            }
                        }
                    }
                }
            }
        }
        var x = (k * j) - l;
        if (x == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        if (x == n) {
            return new ExcelCalcValue(x == 1 ? 1 : 0);
        }
        var y;
        if (c) {
            m++;
            x += 2;
        }
        if (n == 0) {
            if (q == 0 || r == 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(3));
            }
            var z = (m + r - 1) / (x - 1);
            var aa = (m + r) / (x - 1);
            var ab = (h - p) / (o - p);
            y = z + ab * (aa - z);
        }
        else if (m == 0) {
            y = 0;
        }
        else {
            y = m / (x - 1);
        }
        y = MathUtilities.k(y, d);
        return new ExcelCalcValue(y);
    };
    UltraCalcFunctionPercentRankBase.prototype.get_maxArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionPercentRankBase.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPercentRankBase.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionPercentRankBase.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPercentRankBase.$t = markType(UltraCalcFunctionPercentRankBase, 'UltraCalcFunctionPercentRankBase', BuiltInFunctionBase.$);
    return UltraCalcFunctionPercentRankBase;
}(BuiltInFunctionBase));
export { UltraCalcFunctionPercentRankBase };
/**
 * @hidden
 */
var UltraCalcFunctionPercentRank = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionPercentRank, _super);
    function UltraCalcFunctionPercentRank() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionPercentRank.prototype.evaluate = function (a, b) {
        return UltraCalcFunctionPercentRankBase._ak(a, b, false);
    };
    UltraCalcFunctionPercentRank.prototype.get_name = function () {
        return "percentrank";
    };
    Object.defineProperty(UltraCalcFunctionPercentRank.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPercentRank.$t = markType(UltraCalcFunctionPercentRank, 'UltraCalcFunctionPercentRank', UltraCalcFunctionPercentRankBase.$);
    return UltraCalcFunctionPercentRank;
}(UltraCalcFunctionPercentRankBase));
export { UltraCalcFunctionPercentRank };
/**
 * @hidden
 */
var UltraCalcFunctionPercentRankInclusive = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionPercentRankInclusive, _super);
    function UltraCalcFunctionPercentRankInclusive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionPercentRankInclusive.prototype.evaluate = function (a, b) {
        return UltraCalcFunctionPercentRankBase._ak(a, b, false);
    };
    UltraCalcFunctionPercentRankInclusive.prototype.get_name = function () {
        return "percentrank.inc";
    };
    Object.defineProperty(UltraCalcFunctionPercentRankInclusive.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPercentRankInclusive.$t = markType(UltraCalcFunctionPercentRankInclusive, 'UltraCalcFunctionPercentRankInclusive', UltraCalcFunctionPercentRankBase.$);
    return UltraCalcFunctionPercentRankInclusive;
}(UltraCalcFunctionPercentRankBase));
export { UltraCalcFunctionPercentRankInclusive };
/**
 * @hidden
 */
var UltraCalcFunctionPercentRankExclusive = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionPercentRankExclusive, _super);
    function UltraCalcFunctionPercentRankExclusive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionPercentRankExclusive.prototype.evaluate = function (a, b) {
        return UltraCalcFunctionPercentRankBase._ak(a, b, true);
    };
    UltraCalcFunctionPercentRankExclusive.prototype.get_name = function () {
        return "percentrank.exc";
    };
    Object.defineProperty(UltraCalcFunctionPercentRankExclusive.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPercentRankExclusive.$t = markType(UltraCalcFunctionPercentRankExclusive, 'UltraCalcFunctionPercentRankExclusive', UltraCalcFunctionPercentRankBase.$);
    return UltraCalcFunctionPercentRankExclusive;
}(UltraCalcFunctionPercentRankBase));
export { UltraCalcFunctionPercentRankExclusive };
/**
 * @hidden
 */
var UltraCalcFunctionDevSq = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionDevSq, _super);
    function UltraCalcFunctionDevSq() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionDevSq.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.d(a, b, 1229, function (c) {
            if (c.count == 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(2));
            }
            else if (c.count == 1) {
                return new ExcelCalcValue(0);
            }
            var d = CalcFunctionUtilities.r(c);
            return new ExcelCalcValue(d);
        });
    };
    UltraCalcFunctionDevSq.prototype.get_name = function () {
        return "devsq";
    };
    Object.defineProperty(UltraCalcFunctionDevSq.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDevSq.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionDevSq.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDevSq.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionDevSq.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDevSq.$t = markType(UltraCalcFunctionDevSq, 'UltraCalcFunctionDevSq', BuiltInFunctionBase.$);
    return UltraCalcFunctionDevSq;
}(BuiltInFunctionBase));
export { UltraCalcFunctionDevSq };
/**
 * @hidden
 */
var UltraCalcFunctionSumSq = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSumSq, _super);
    function UltraCalcFunctionSumSq() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSumSq.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.d(a, b, 1229, function (c) {
            if (c.count == 0) {
                return new ExcelCalcValue(0);
            }
            var d = 0;
            for (var e = 0; e < c.count; e++) {
                d += (c._inner[e] * c._inner[e]);
            }
            return new ExcelCalcValue(d);
        });
    };
    UltraCalcFunctionSumSq.prototype.get_name = function () {
        return "sumsq";
    };
    Object.defineProperty(UltraCalcFunctionSumSq.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSumSq.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionSumSq.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSumSq.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionSumSq.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSumSq.$t = markType(UltraCalcFunctionSumSq, 'UltraCalcFunctionSumSq', BuiltInFunctionBase.$);
    return UltraCalcFunctionSumSq;
}(BuiltInFunctionBase));
export { UltraCalcFunctionSumSq };
/**
 * @hidden
 */
var UltraCalcFunctionVarBase = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionVarBase, _super);
    function UltraCalcFunctionVarBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionVarBase.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionVarBase.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionVarBase.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionVarBase.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionVarBase.$t = markType(UltraCalcFunctionVarBase, 'UltraCalcFunctionVarBase', BuiltInFunctionBase.$);
    return UltraCalcFunctionVarBase;
}(BuiltInFunctionBase));
export { UltraCalcFunctionVarBase };
/**
 * @hidden
 */
var UltraCalcFunctionVar_S = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionVar_S, _super);
    function UltraCalcFunctionVar_S() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionVar_S.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.d(a, b, 1229, function (c) { return UltraCalcFunctionVar._ak(c, true); });
    };
    UltraCalcFunctionVar_S.prototype.get_name = function () {
        return "var.s";
    };
    Object.defineProperty(UltraCalcFunctionVar_S.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionVar_S.$t = markType(UltraCalcFunctionVar_S, 'UltraCalcFunctionVar_S', UltraCalcFunctionVarBase.$);
    return UltraCalcFunctionVar_S;
}(UltraCalcFunctionVarBase));
export { UltraCalcFunctionVar_S };
/**
 * @hidden
 */
var UltraCalcFunctionVarA = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionVarA, _super);
    function UltraCalcFunctionVarA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionVarA.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.d(a, b, 1249, function (c) { return UltraCalcFunctionVar._ak(c, true); });
    };
    UltraCalcFunctionVarA.prototype.get_name = function () {
        return "vara";
    };
    Object.defineProperty(UltraCalcFunctionVarA.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionVarA.$t = markType(UltraCalcFunctionVarA, 'UltraCalcFunctionVarA', UltraCalcFunctionVarBase.$);
    return UltraCalcFunctionVarA;
}(UltraCalcFunctionVarBase));
export { UltraCalcFunctionVarA };
/**
 * @hidden
 */
var UltraCalcFunctionVarP = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionVarP, _super);
    function UltraCalcFunctionVarP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionVarP.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.d(a, b, 1229, function (c) { return UltraCalcFunctionVar._ak(c, false); });
    };
    UltraCalcFunctionVarP.prototype.get_name = function () {
        return "varp";
    };
    Object.defineProperty(UltraCalcFunctionVarP.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionVarP.$t = markType(UltraCalcFunctionVarP, 'UltraCalcFunctionVarP', UltraCalcFunctionVarBase.$);
    return UltraCalcFunctionVarP;
}(UltraCalcFunctionVarBase));
export { UltraCalcFunctionVarP };
/**
 * @hidden
 */
var UltraCalcFunctionVar_P = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionVar_P, _super);
    function UltraCalcFunctionVar_P() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionVar_P.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.d(a, b, 1229, function (c) { return UltraCalcFunctionVar._ak(c, false); });
    };
    UltraCalcFunctionVar_P.prototype.get_name = function () {
        return "var.p";
    };
    Object.defineProperty(UltraCalcFunctionVar_P.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionVar_P.$t = markType(UltraCalcFunctionVar_P, 'UltraCalcFunctionVar_P', UltraCalcFunctionVarBase.$);
    return UltraCalcFunctionVar_P;
}(UltraCalcFunctionVarBase));
export { UltraCalcFunctionVar_P };
/**
 * @hidden
 */
var UltraCalcFunctionVarPA = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionVarPA, _super);
    function UltraCalcFunctionVarPA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionVarPA.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.d(a, b, 1249, function (c) { return UltraCalcFunctionVar._ak(c, false); });
    };
    UltraCalcFunctionVarPA.prototype.get_name = function () {
        return "varpa";
    };
    Object.defineProperty(UltraCalcFunctionVarPA.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionVarPA.$t = markType(UltraCalcFunctionVarPA, 'UltraCalcFunctionVarPA', UltraCalcFunctionVarBase.$);
    return UltraCalcFunctionVarPA;
}(UltraCalcFunctionVarBase));
export { UltraCalcFunctionVarPA };
/**
 * @hidden
 */
var UltraCalcFunctionStDevBase = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionStDevBase, _super);
    function UltraCalcFunctionStDevBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionStDevBase.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionStDevBase.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionStDevBase.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionStDevBase.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionStDevBase.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionStDevBase.$t = markType(UltraCalcFunctionStDevBase, 'UltraCalcFunctionStDevBase', BuiltInFunctionBase.$);
    return UltraCalcFunctionStDevBase;
}(BuiltInFunctionBase));
export { UltraCalcFunctionStDevBase };
/**
 * @hidden
 */
var UltraCalcFunctionStDev_S = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionStDev_S, _super);
    function UltraCalcFunctionStDev_S() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionStDev_S.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.d(a, b, 1229, function (c) { return UltraCalcFunctionStdev._al(c, true); });
    };
    UltraCalcFunctionStDev_S.prototype.get_name = function () {
        return "stdev.s";
    };
    Object.defineProperty(UltraCalcFunctionStDev_S.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionStDev_S.$t = markType(UltraCalcFunctionStDev_S, 'UltraCalcFunctionStDev_S', UltraCalcFunctionStDevBase.$);
    return UltraCalcFunctionStDev_S;
}(UltraCalcFunctionStDevBase));
export { UltraCalcFunctionStDev_S };
/**
 * @hidden
 */
var UltraCalcFunctionStDevA = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionStDevA, _super);
    function UltraCalcFunctionStDevA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionStDevA.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.d(a, b, 1249, function (c) { return UltraCalcFunctionStdev._al(c, true); });
    };
    UltraCalcFunctionStDevA.prototype.get_name = function () {
        return "stdeva";
    };
    Object.defineProperty(UltraCalcFunctionStDevA.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionStDevA.$t = markType(UltraCalcFunctionStDevA, 'UltraCalcFunctionStDevA', UltraCalcFunctionStDevBase.$);
    return UltraCalcFunctionStDevA;
}(UltraCalcFunctionStDevBase));
export { UltraCalcFunctionStDevA };
/**
 * @hidden
 */
var UltraCalcFunctionStDevP = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionStDevP, _super);
    function UltraCalcFunctionStDevP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionStDevP.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.d(a, b, 1229, function (c) { return UltraCalcFunctionStdev._al(c, false); });
    };
    UltraCalcFunctionStDevP.prototype.get_name = function () {
        return "stdevp";
    };
    Object.defineProperty(UltraCalcFunctionStDevP.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionStDevP.$t = markType(UltraCalcFunctionStDevP, 'UltraCalcFunctionStDevP', UltraCalcFunctionStDevBase.$);
    return UltraCalcFunctionStDevP;
}(UltraCalcFunctionStDevBase));
export { UltraCalcFunctionStDevP };
/**
 * @hidden
 */
var UltraCalcFunctionStDev_P = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionStDev_P, _super);
    function UltraCalcFunctionStDev_P() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionStDev_P.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.d(a, b, 1229, function (c) { return UltraCalcFunctionStdev._al(c, false); });
    };
    UltraCalcFunctionStDev_P.prototype.get_name = function () {
        return "stdev.p";
    };
    Object.defineProperty(UltraCalcFunctionStDev_P.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionStDev_P.$t = markType(UltraCalcFunctionStDev_P, 'UltraCalcFunctionStDev_P', UltraCalcFunctionStDevBase.$);
    return UltraCalcFunctionStDev_P;
}(UltraCalcFunctionStDevBase));
export { UltraCalcFunctionStDev_P };
/**
 * @hidden
 */
var UltraCalcFunctionStDevPA = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionStDevPA, _super);
    function UltraCalcFunctionStDevPA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionStDevPA.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.d(a, b, 1249, function (c) { return UltraCalcFunctionStdev._al(c, false); });
    };
    UltraCalcFunctionStDevPA.prototype.get_name = function () {
        return "stdevpa";
    };
    Object.defineProperty(UltraCalcFunctionStDevPA.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionStDevPA.$t = markType(UltraCalcFunctionStDevPA, 'UltraCalcFunctionStDevPA', UltraCalcFunctionStDevBase.$);
    return UltraCalcFunctionStDevPA;
}(UltraCalcFunctionStDevBase));
export { UltraCalcFunctionStDevPA };
/**
 * @hidden
 */
var UltraCalcFunctionPercentileBase = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionPercentileBase, _super);
    function UltraCalcFunctionPercentileBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionPercentileBase._ak = function (a, b, c) {
        var d = a.pop();
        var e = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        var f = d._toDouble3();
        if (c) {
            if (b) {
                if (f < 1 || f >= 4) {
                    return new ExcelCalcValue(new ExcelCalcErrorValue(4));
                }
            }
            else {
                if (f < 0 || f >= 5) {
                    return new ExcelCalcValue(new ExcelCalcErrorValue(4));
                }
            }
            f = truncate(f) / 4;
        }
        else {
            if (f < 0 || f > 1) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            if (b && (f == 0 || f == 1)) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
        }
        var g = new List$1(Number_$type, 0);
        var h = CalcArgumentHelper.c(e, 0, 1101, runOn(g, g.add));
        if (h != null) {
            return h;
        }
        if (g.count == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var i = 1 / (g.count + 1);
        if (b && (f < i || (f + i > 1))) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var j = g._inner[0];
        if (g.count > 1) {
            if (b) {
                f = (f - i) * (1 / (1 - i * 2));
            }
            g.y();
            var k = 1 / (g.count - 1);
            var l = (f % k) / k;
            var m = truncate(((g.count - 1) * f));
            j = g._inner[m];
            if (m < g.count - 1 && l != 0) {
                j += (g._inner[m + 1] - g._inner[m]) * l;
            }
        }
        return new ExcelCalcValue(j);
    };
    UltraCalcFunctionPercentileBase.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionPercentileBase.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPercentileBase.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionPercentileBase.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPercentileBase.$t = markType(UltraCalcFunctionPercentileBase, 'UltraCalcFunctionPercentileBase', BuiltInFunctionBase.$);
    return UltraCalcFunctionPercentileBase;
}(BuiltInFunctionBase));
export { UltraCalcFunctionPercentileBase };
/**
 * @hidden
 */
var UltraCalcFunctionPercentile = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionPercentile, _super);
    function UltraCalcFunctionPercentile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionPercentile.prototype.evaluate = function (a, b) {
        return UltraCalcFunctionPercentileBase._ak(a, false, false);
    };
    UltraCalcFunctionPercentile.prototype.get_name = function () {
        return "percentile";
    };
    Object.defineProperty(UltraCalcFunctionPercentile.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPercentile.$t = markType(UltraCalcFunctionPercentile, 'UltraCalcFunctionPercentile', UltraCalcFunctionPercentileBase.$);
    return UltraCalcFunctionPercentile;
}(UltraCalcFunctionPercentileBase));
export { UltraCalcFunctionPercentile };
/**
 * @hidden
 */
var UltraCalcFunctionPercentileInclusive = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionPercentileInclusive, _super);
    function UltraCalcFunctionPercentileInclusive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionPercentileInclusive.prototype.evaluate = function (a, b) {
        return UltraCalcFunctionPercentileBase._ak(a, false, false);
    };
    UltraCalcFunctionPercentileInclusive.prototype.get_name = function () {
        return "percentile.inc";
    };
    Object.defineProperty(UltraCalcFunctionPercentileInclusive.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPercentileInclusive.$t = markType(UltraCalcFunctionPercentileInclusive, 'UltraCalcFunctionPercentileInclusive', UltraCalcFunctionPercentileBase.$);
    return UltraCalcFunctionPercentileInclusive;
}(UltraCalcFunctionPercentileBase));
export { UltraCalcFunctionPercentileInclusive };
/**
 * @hidden
 */
var UltraCalcFunctionPercentileExclusive = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionPercentileExclusive, _super);
    function UltraCalcFunctionPercentileExclusive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionPercentileExclusive.prototype.evaluate = function (a, b) {
        return UltraCalcFunctionPercentileBase._ak(a, true, false);
    };
    UltraCalcFunctionPercentileExclusive.prototype.get_name = function () {
        return "percentile.exc";
    };
    Object.defineProperty(UltraCalcFunctionPercentileExclusive.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPercentileExclusive.$t = markType(UltraCalcFunctionPercentileExclusive, 'UltraCalcFunctionPercentileExclusive', UltraCalcFunctionPercentileBase.$);
    return UltraCalcFunctionPercentileExclusive;
}(UltraCalcFunctionPercentileBase));
export { UltraCalcFunctionPercentileExclusive };
/**
 * @hidden
 */
var UltraCalcFunctionQuartile = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionQuartile, _super);
    function UltraCalcFunctionQuartile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionQuartile.prototype.evaluate = function (a, b) {
        return UltraCalcFunctionPercentileBase._ak(a, false, true);
    };
    UltraCalcFunctionQuartile.prototype.get_name = function () {
        return "quartile";
    };
    Object.defineProperty(UltraCalcFunctionQuartile.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionQuartile.$t = markType(UltraCalcFunctionQuartile, 'UltraCalcFunctionQuartile', UltraCalcFunctionPercentileBase.$);
    return UltraCalcFunctionQuartile;
}(UltraCalcFunctionPercentileBase));
export { UltraCalcFunctionQuartile };
/**
 * @hidden
 */
var UltraCalcFunctionQuartileInclusive = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionQuartileInclusive, _super);
    function UltraCalcFunctionQuartileInclusive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionQuartileInclusive.prototype.evaluate = function (a, b) {
        return UltraCalcFunctionPercentileBase._ak(a, false, true);
    };
    UltraCalcFunctionQuartileInclusive.prototype.get_name = function () {
        return "quartile.inc";
    };
    Object.defineProperty(UltraCalcFunctionQuartileInclusive.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionQuartileInclusive.$t = markType(UltraCalcFunctionQuartileInclusive, 'UltraCalcFunctionQuartileInclusive', UltraCalcFunctionPercentileBase.$);
    return UltraCalcFunctionQuartileInclusive;
}(UltraCalcFunctionPercentileBase));
export { UltraCalcFunctionQuartileInclusive };
/**
 * @hidden
 */
var UltraCalcFunctionQuartileExclusive = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionQuartileExclusive, _super);
    function UltraCalcFunctionQuartileExclusive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionQuartileExclusive.prototype.evaluate = function (a, b) {
        return UltraCalcFunctionPercentileBase._ak(a, true, true);
    };
    UltraCalcFunctionQuartileExclusive.prototype.get_name = function () {
        return "quartile.exc";
    };
    Object.defineProperty(UltraCalcFunctionQuartileExclusive.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionQuartileExclusive.$t = markType(UltraCalcFunctionQuartileExclusive, 'UltraCalcFunctionQuartileExclusive', UltraCalcFunctionPercentileBase.$);
    return UltraCalcFunctionQuartileExclusive;
}(UltraCalcFunctionPercentileBase));
export { UltraCalcFunctionQuartileExclusive };
/**
 * @hidden
 */
var UltraCalcFunctionSmall = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSmall, _super);
    function UltraCalcFunctionSmall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSmall._ak = function (a, b) {
        var c = a.pop();
        var d = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var e = c._toDouble3();
        var f = new List$1(Number_$type, 0);
        var g = CalcArgumentHelper.c(d, 0, 1101, runOn(f, f.add));
        if (g != null) {
            return g;
        }
        if (e < 1) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (f.count == 0 || e > f.count) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        f.y();
        if (b) {
            e = f.count - e;
        }
        else {
            e--;
        }
        var h = f._inner[truncate(e)];
        return new ExcelCalcValue(h);
    };
    UltraCalcFunctionSmall.prototype.evaluate = function (a, b) {
        return UltraCalcFunctionSmall._ak(a, false);
    };
    UltraCalcFunctionSmall.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionSmall.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSmall.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionSmall.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSmall.prototype.get_name = function () {
        return "small";
    };
    Object.defineProperty(UltraCalcFunctionSmall.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSmall.$t = markType(UltraCalcFunctionSmall, 'UltraCalcFunctionSmall', BuiltInFunctionBase.$);
    return UltraCalcFunctionSmall;
}(BuiltInFunctionBase));
export { UltraCalcFunctionSmall };
/**
 * @hidden
 */
var UltraCalcFunctionLarge = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionLarge, _super);
    function UltraCalcFunctionLarge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionLarge.prototype.evaluate = function (a, b) {
        return UltraCalcFunctionSmall._ak(a, true);
    };
    UltraCalcFunctionLarge.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionLarge.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionLarge.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionLarge.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionLarge.prototype.get_name = function () {
        return "large";
    };
    Object.defineProperty(UltraCalcFunctionLarge.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionLarge.$t = markType(UltraCalcFunctionLarge, 'UltraCalcFunctionLarge', BuiltInFunctionBase.$);
    return UltraCalcFunctionLarge;
}(BuiltInFunctionBase));
export { UltraCalcFunctionLarge };
/**
 * @hidden
 */
var UltraCalcFunctionSec = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSec, _super);
    function UltraCalcFunctionSec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSec.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.h(a, true, function (c) {
            if (c <= -134217728 || c >= 134217728) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            return new ExcelCalcValue(1 / Math.cos(c));
        });
    };
    UltraCalcFunctionSec.prototype.get_name = function () {
        return "sec";
    };
    Object.defineProperty(UltraCalcFunctionSec.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSec.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionSec.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSec.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionSec.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSec.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionSec.$t = markType(UltraCalcFunctionSec, 'UltraCalcFunctionSec', BuiltInFunctionBase.$);
    return UltraCalcFunctionSec;
}(BuiltInFunctionBase));
export { UltraCalcFunctionSec };
/**
 * @hidden
 */
var UltraCalcFunctionSecH = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSecH, _super);
    function UltraCalcFunctionSecH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSecH.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.h(a, true, function (c) {
            if (c <= -134217728 || c >= 134217728) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            return new ExcelCalcValue(1 / Math.cosh(c));
        });
    };
    UltraCalcFunctionSecH.prototype.get_name = function () {
        return "sech";
    };
    Object.defineProperty(UltraCalcFunctionSecH.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSecH.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionSecH.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSecH.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionSecH.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSecH.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionSecH.$t = markType(UltraCalcFunctionSecH, 'UltraCalcFunctionSecH', BuiltInFunctionBase.$);
    return UltraCalcFunctionSecH;
}(BuiltInFunctionBase));
export { UltraCalcFunctionSecH };
/**
 * @hidden
 */
var UltraCalcFunctionCsc = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionCsc, _super);
    function UltraCalcFunctionCsc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionCsc.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.h(a, true, function (c) {
            if (c <= -134217728 || c >= 134217728) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            return new ExcelCalcValue(1 / Math.sin(c));
        });
    };
    UltraCalcFunctionCsc.prototype.get_name = function () {
        return "csc";
    };
    Object.defineProperty(UltraCalcFunctionCsc.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCsc.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionCsc.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCsc.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionCsc.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCsc.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionCsc.$t = markType(UltraCalcFunctionCsc, 'UltraCalcFunctionCsc', BuiltInFunctionBase.$);
    return UltraCalcFunctionCsc;
}(BuiltInFunctionBase));
export { UltraCalcFunctionCsc };
/**
 * @hidden
 */
var UltraCalcFunctionCscH = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionCscH, _super);
    function UltraCalcFunctionCscH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionCscH.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.h(a, true, function (c) {
            if (c <= -134217728 || c >= 134217728) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            return new ExcelCalcValue(1 / Math.sinh(c));
        });
    };
    UltraCalcFunctionCscH.prototype.get_name = function () {
        return "csch";
    };
    Object.defineProperty(UltraCalcFunctionCscH.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCscH.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionCscH.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCscH.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionCscH.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCscH.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionCscH.$t = markType(UltraCalcFunctionCscH, 'UltraCalcFunctionCscH', BuiltInFunctionBase.$);
    return UltraCalcFunctionCscH;
}(BuiltInFunctionBase));
export { UltraCalcFunctionCscH };
/**
 * @hidden
 */
var UltraCalcFunctionCot = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionCot, _super);
    function UltraCalcFunctionCot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionCot.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.h(a, true, function (c) {
            if (c <= -134217728 || c >= 134217728) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            return new ExcelCalcValue(1 / Math.tan(c));
        });
    };
    UltraCalcFunctionCot.prototype.get_name = function () {
        return "cot";
    };
    Object.defineProperty(UltraCalcFunctionCot.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCot.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionCot.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCot.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionCot.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCot.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionCot.$t = markType(UltraCalcFunctionCot, 'UltraCalcFunctionCot', BuiltInFunctionBase.$);
    return UltraCalcFunctionCot;
}(BuiltInFunctionBase));
export { UltraCalcFunctionCot };
/**
 * @hidden
 */
var UltraCalcFunctionCotH = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionCotH, _super);
    function UltraCalcFunctionCotH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionCotH.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.h(a, true, function (c) {
            if (c <= -134217728 || c >= 134217728) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            return new ExcelCalcValue(1 / Math.tanh(c));
        });
    };
    UltraCalcFunctionCotH.prototype.get_name = function () {
        return "coth";
    };
    Object.defineProperty(UltraCalcFunctionCotH.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCotH.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionCotH.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCotH.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionCotH.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCotH.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionCotH.$t = markType(UltraCalcFunctionCotH, 'UltraCalcFunctionCotH', BuiltInFunctionBase.$);
    return UltraCalcFunctionCotH;
}(BuiltInFunctionBase));
export { UltraCalcFunctionCotH };
/**
 * @hidden
 */
var UltraCalcFunctionAcot = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionAcot, _super);
    function UltraCalcFunctionAcot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionAcot.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.h(a, true, function (c) { return new ExcelCalcValue(Math.PI / 2 - Math.atan(c)); });
    };
    UltraCalcFunctionAcot.prototype.get_name = function () {
        return "acot";
    };
    Object.defineProperty(UltraCalcFunctionAcot.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAcot.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionAcot.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAcot.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionAcot.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAcot.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionAcot.$t = markType(UltraCalcFunctionAcot, 'UltraCalcFunctionAcot', BuiltInFunctionBase.$);
    return UltraCalcFunctionAcot;
}(BuiltInFunctionBase));
export { UltraCalcFunctionAcot };
/**
 * @hidden
 */
var UltraCalcFunctionAcotH = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionAcotH, _super);
    function UltraCalcFunctionAcotH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionAcotH.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.h(a, true, function (c) {
            if (Math.abs(c) <= 1) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            return new ExcelCalcValue(Math.log((c + 1) / (c - 1)) / 2);
        });
    };
    UltraCalcFunctionAcotH.prototype.get_name = function () {
        return "acoth";
    };
    Object.defineProperty(UltraCalcFunctionAcotH.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAcotH.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionAcotH.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAcotH.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionAcotH.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAcotH.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return true;
    };
    UltraCalcFunctionAcotH.$t = markType(UltraCalcFunctionAcotH, 'UltraCalcFunctionAcotH', BuiltInFunctionBase.$);
    return UltraCalcFunctionAcotH;
}(BuiltInFunctionBase));
export { UltraCalcFunctionAcotH };
/**
 * @hidden
 */
var UltraCalcFunctionBitOperation = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionBitOperation, _super);
    function UltraCalcFunctionBitOperation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionBitOperation.prototype.evaluate = function (a, b) {
        var _this = this;
        return CalcFunctionUtilities.j(a, true, function (c, d) {
            if (c < 0 || d < 0 || c % 1 != 0 || d % 1 != 0 || c >= 281474976710656 || d >= 281474976710656) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            return new ExcelCalcValue(_this._am(truncate(c), truncate(d)));
        });
    };
    UltraCalcFunctionBitOperation.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionBitOperation.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBitOperation.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionBitOperation.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBitOperation._ak = function (a, b) {
        if (a < 0 || a % 1 != 0 || a >= 281474976710656) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var c = truncate(Math.abs(b));
        if (c > 53) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var d = truncate(a);
        if (b < 0) {
            d >>= c;
        }
        else {
            d <<= c;
        }
        return new ExcelCalcValue(d);
    };
    UltraCalcFunctionBitOperation.$t = markType(UltraCalcFunctionBitOperation, 'UltraCalcFunctionBitOperation', BuiltInFunctionBase.$);
    return UltraCalcFunctionBitOperation;
}(BuiltInFunctionBase));
export { UltraCalcFunctionBitOperation };
/**
 * @hidden
 */
var UltraCalcFunctionBitAnd = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionBitAnd, _super);
    function UltraCalcFunctionBitAnd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionBitAnd.prototype._am = function (a, b) {
        return a & b;
    };
    UltraCalcFunctionBitAnd.prototype.get_name = function () {
        return "bitand";
    };
    Object.defineProperty(UltraCalcFunctionBitAnd.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBitAnd.$t = markType(UltraCalcFunctionBitAnd, 'UltraCalcFunctionBitAnd', UltraCalcFunctionBitOperation.$);
    return UltraCalcFunctionBitAnd;
}(UltraCalcFunctionBitOperation));
export { UltraCalcFunctionBitAnd };
/**
 * @hidden
 */
var UltraCalcFunctionBitOr = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionBitOr, _super);
    function UltraCalcFunctionBitOr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionBitOr.prototype._am = function (a, b) {
        return a | b;
    };
    UltraCalcFunctionBitOr.prototype.get_name = function () {
        return "bitor";
    };
    Object.defineProperty(UltraCalcFunctionBitOr.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBitOr.$t = markType(UltraCalcFunctionBitOr, 'UltraCalcFunctionBitOr', UltraCalcFunctionBitOperation.$);
    return UltraCalcFunctionBitOr;
}(UltraCalcFunctionBitOperation));
export { UltraCalcFunctionBitOr };
/**
 * @hidden
 */
var UltraCalcFunctionBitXor = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionBitXor, _super);
    function UltraCalcFunctionBitXor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionBitXor.prototype._am = function (a, b) {
        return a ^ b;
    };
    UltraCalcFunctionBitXor.prototype.get_name = function () {
        return "bitxor";
    };
    Object.defineProperty(UltraCalcFunctionBitXor.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBitXor.$t = markType(UltraCalcFunctionBitXor, 'UltraCalcFunctionBitXor', UltraCalcFunctionBitOperation.$);
    return UltraCalcFunctionBitXor;
}(UltraCalcFunctionBitOperation));
export { UltraCalcFunctionBitXor };
/**
 * @hidden
 */
var UltraCalcFunctionBitLShift = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionBitLShift, _super);
    function UltraCalcFunctionBitLShift() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionBitLShift.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.j(a, true, function (c, d) { return UltraCalcFunctionBitOperation._ak(c, d); });
    };
    UltraCalcFunctionBitLShift.prototype.get_name = function () {
        return "bitlshift";
    };
    Object.defineProperty(UltraCalcFunctionBitLShift.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBitLShift.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionBitLShift.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBitLShift.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionBitLShift.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBitLShift.$t = markType(UltraCalcFunctionBitLShift, 'UltraCalcFunctionBitLShift', BuiltInFunctionBase.$);
    return UltraCalcFunctionBitLShift;
}(BuiltInFunctionBase));
export { UltraCalcFunctionBitLShift };
/**
 * @hidden
 */
var UltraCalcFunctionBitRShift = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionBitRShift, _super);
    function UltraCalcFunctionBitRShift() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionBitRShift.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.j(a, true, function (c, d) { return UltraCalcFunctionBitOperation._ak(c, -d); });
    };
    UltraCalcFunctionBitRShift.prototype.get_name = function () {
        return "bitrshift";
    };
    Object.defineProperty(UltraCalcFunctionBitRShift.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBitRShift.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionBitRShift.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBitRShift.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionBitRShift.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBitRShift.$t = markType(UltraCalcFunctionBitRShift, 'UltraCalcFunctionBitRShift', BuiltInFunctionBase.$);
    return UltraCalcFunctionBitRShift;
}(BuiltInFunctionBase));
export { UltraCalcFunctionBitRShift };
/**
 * @hidden
 */
var UltraCalcFunctionFisher = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionFisher, _super);
    function UltraCalcFunctionFisher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionFisher.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.h(a, true, function (c) {
            if (c <= -1 || c >= 1) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            var d = Math.log((1 + c) / (1 - c)) / 2;
            return new ExcelCalcValue(d);
        });
    };
    UltraCalcFunctionFisher.prototype.get_name = function () {
        return "fisher";
    };
    Object.defineProperty(UltraCalcFunctionFisher.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFisher.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionFisher.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFisher.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionFisher.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFisher.$t = markType(UltraCalcFunctionFisher, 'UltraCalcFunctionFisher', BuiltInFunctionBase.$);
    return UltraCalcFunctionFisher;
}(BuiltInFunctionBase));
export { UltraCalcFunctionFisher };
/**
 * @hidden
 */
var UltraCalcFunctionFisherInv = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionFisherInv, _super);
    function UltraCalcFunctionFisherInv() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionFisherInv.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.h(a, true, function (c) { return new ExcelCalcValue(Math.tanh(c)); });
    };
    UltraCalcFunctionFisherInv.prototype.get_name = function () {
        return "fisherinv";
    };
    Object.defineProperty(UltraCalcFunctionFisherInv.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFisherInv.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionFisherInv.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFisherInv.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionFisherInv.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFisherInv.$t = markType(UltraCalcFunctionFisherInv, 'UltraCalcFunctionFisherInv', BuiltInFunctionBase.$);
    return UltraCalcFunctionFisherInv;
}(BuiltInFunctionBase));
export { UltraCalcFunctionFisherInv };
/**
 * @hidden
 */
var UltraCalcFunctionIfNa = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionIfNa, _super);
    function UltraCalcFunctionIfNa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionIfNa.prototype.evaluate = function (a, b) {
        var c = a.pop();
        var d = a.pop();
        var e = d._getResolvedValue();
        if (typeCast(ExcelCalcErrorValue.$, e) !== null && e.code == 3) {
            return c;
        }
        return new ExcelCalcValue(e);
    };
    UltraCalcFunctionIfNa.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionIfNa.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIfNa.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionIfNa.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIfNa.prototype.get_name = function () {
        return "ifna";
    };
    Object.defineProperty(UltraCalcFunctionIfNa.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIfNa.$t = markType(UltraCalcFunctionIfNa, 'UltraCalcFunctionIfNa', BuiltInFunctionBase.$);
    return UltraCalcFunctionIfNa;
}(BuiltInFunctionBase));
export { UltraCalcFunctionIfNa };
/**
 * @hidden
 */
var UltraCalcFunctionArabic = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionArabic, _super);
    function UltraCalcFunctionArabic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionArabic.prototype.evaluate = function (a, b) {
        var c = a.pop();
        var d = c.toString();
        var e = 0;
        if (!stringIsNullOrWhiteSpace(d)) {
            d = d.trim();
            var f = d.charAt(0) == '-';
            if (f && d.length == 1) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            var g = f ? 1 : 0;
            var h = 0;
            for (var i = d.length - 1; i >= g; i--) {
                var j = d.charAt(i);
                var k = -1;
                switch (j) {
                    case 'm':
                    case 'M':
                        k = 1000;
                        break;
                    case 'D':
                    case 'd':
                        k = 500;
                        break;
                    case 'C':
                    case 'c':
                        k = 100;
                        break;
                    case 'L':
                    case 'l':
                        k = 50;
                        break;
                    case 'X':
                    case 'x':
                        k = 10;
                        break;
                    case 'V':
                    case 'v':
                        k = 5;
                        break;
                    case 'I':
                    case 'i':
                        k = 1;
                        break;
                    default: return new ExcelCalcValue(new ExcelCalcErrorValue(1));
                }
                e += h <= k ? k : -k;
                if (k > h) {
                    h = k;
                }
            }
            if (f) {
                e = -e;
            }
        }
        return new ExcelCalcValue(e);
    };
    UltraCalcFunctionArabic.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionArabic.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionArabic.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionArabic.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionArabic.prototype.get_name = function () {
        return "arabic";
    };
    Object.defineProperty(UltraCalcFunctionArabic.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionArabic.$t = markType(UltraCalcFunctionArabic, 'UltraCalcFunctionArabic', BuiltInFunctionBase.$);
    return UltraCalcFunctionArabic;
}(BuiltInFunctionBase));
export { UltraCalcFunctionArabic };
/**
 * @hidden
 */
var UltraCalcFunctionXor = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionXor, _super);
    function UltraCalcFunctionXor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionXor.prototype.evaluate = function (a, b) {
        var c = 0;
        var d = CalcFunctionUtilities.p(b);
        try {
            this._ad(d, a, b, true);
            if (d.count == 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
            var _loop_10 = function (e) {
                var f = d._inner[e];
                if (f.isError) {
                    return { value: new ExcelCalcValue(f.toErrorValue()) };
                }
                var g;
                if (f.isString) {
                    if (!((function () { var h = tryParseBool(f.toString(), g); g = h.p1; return h.ret; })())) {
                        return { value: new ExcelCalcValue(new ExcelCalcErrorValue(1)) };
                    }
                }
                else {
                    g = f._toBoolean1();
                }
                if (g) {
                    c++;
                }
            };
            for (var e = 0; e < d.count; e++) {
                var state_7 = _loop_10(e);
                if (typeof state_7 === "object")
                    return state_7.value;
            }
            return new ExcelCalcValue(c % 2 == 0 ? false : true);
        }
        finally {
            CalcFunctionUtilities.ad(d);
        }
    };
    UltraCalcFunctionXor.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionXor.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionXor.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionXor.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionXor.prototype.get_name = function () {
        return "xor";
    };
    Object.defineProperty(UltraCalcFunctionXor.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionXor.prototype.doesParameterAllowIntermediateResultArray = function (a, b) {
        return (b == false);
    };
    UltraCalcFunctionXor.$t = markType(UltraCalcFunctionXor, 'UltraCalcFunctionXor', BuiltInFunctionBase.$);
    return UltraCalcFunctionXor;
}(BuiltInFunctionBase));
export { UltraCalcFunctionXor };
/**
 * @hidden
 */
var UltraCalcFunctionSkew = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSkew, _super);
    function UltraCalcFunctionSkew() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSkew.prototype.evaluate = function (a, b) {
        return UltraCalcFunctionSkew._ak(a, b, true);
    };
    UltraCalcFunctionSkew._ak = function (a, b, c) {
        return CalcFunctionUtilities.d(a, b, 1229, function (d) {
            if (d.count < 3) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(2));
            }
            var e = CalcFunctionUtilities.z(d);
            var f = CalcFunctionUtilities.t(d.count, e);
            var g = CalcFunctionUtilities.s(d, f);
            var h = CalcFunctionUtilities.y(g, d.count, c);
            if (h == 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(2));
            }
            var i = 0;
            for (var j = 0; j < d.count; j++) {
                var k = (d._inner[j] - f) / h;
                i += (k * k * k);
            }
            var l = c ? d.count / ((d.count - 1) * (d.count - 2)) : (1 / d.count);
            return new ExcelCalcValue(l * i);
        });
    };
    UltraCalcFunctionSkew.prototype.get_name = function () {
        return "skew";
    };
    Object.defineProperty(UltraCalcFunctionSkew.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSkew.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionSkew.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSkew.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionSkew.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSkew.$t = markType(UltraCalcFunctionSkew, 'UltraCalcFunctionSkew', BuiltInFunctionBase.$);
    return UltraCalcFunctionSkew;
}(BuiltInFunctionBase));
export { UltraCalcFunctionSkew };
/**
 * @hidden
 */
var UltraCalcFunctionSkew_P = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSkew_P, _super);
    function UltraCalcFunctionSkew_P() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSkew_P.prototype.evaluate = function (a, b) {
        return UltraCalcFunctionSkew._ak(a, b, false);
    };
    UltraCalcFunctionSkew_P.prototype.get_name = function () {
        return "skew.p";
    };
    Object.defineProperty(UltraCalcFunctionSkew_P.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSkew_P.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionSkew_P.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSkew_P.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionSkew_P.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSkew_P.$t = markType(UltraCalcFunctionSkew_P, 'UltraCalcFunctionSkew_P', BuiltInFunctionBase.$);
    return UltraCalcFunctionSkew_P;
}(BuiltInFunctionBase));
export { UltraCalcFunctionSkew_P };
/**
 * @hidden
 */
var UltraCalcFunctionClean = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionClean, _super);
    function UltraCalcFunctionClean() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionClean.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return c;
        }
        var d = c.toString();
        if (!stringIsNullOrEmpty(d)) {
            var e = null;
            var f = false;
            for (var g = 0; g < d.length; g++) {
                var h = d.charAt(g);
                if (h.charCodeAt(0) <= 31) {
                    f = true;
                }
                else {
                    switch (h.charCodeAt(0)) {
                        case 129:
                        case 141:
                        case 143:
                        case 144:
                        case 157:
                            f = true;
                            break;
                        default:
                            f = false;
                            break;
                    }
                }
                if (f) {
                    if (e == null) {
                        e = new StringBuilder(1, d.length - 1);
                        if (g > 0) {
                            e.m(d, 0, g);
                        }
                    }
                }
                else if (e != null) {
                    e.h(h);
                }
            }
            if (e != null) {
                d = e.toString();
            }
        }
        return new ExcelCalcValue(d);
    };
    UltraCalcFunctionClean.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionClean.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionClean.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionClean.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionClean.prototype.get_name = function () {
        return "clean";
    };
    Object.defineProperty(UltraCalcFunctionClean.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionClean.$t = markType(UltraCalcFunctionClean, 'UltraCalcFunctionClean', BuiltInFunctionBase.$);
    return UltraCalcFunctionClean;
}(BuiltInFunctionBase));
export { UltraCalcFunctionClean };
/**
 * @hidden
 */
var UltraCalcFunctionBase = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionBase, _super);
    function UltraCalcFunctionBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionBase.prototype.evaluate = function (a, b) {
        var c = null;
        if (b == 3) {
            c = a.pop();
        }
        var d = a.pop();
        var e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c != null && c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var f = e._toInt641();
        var g = d._toInt641();
        var h = c == null ? 1 : c._toInt();
        if (f < 0 || f >= 0x1FFFFFFFFFFFFE) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (g < 2 || g > 36) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (h < 0 || h > 255) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var i = new StringBuilder(0);
        var j = g;
        while (f > 0) {
            var k = f % j;
            f -= k;
            var l = void 0;
            if (k < 10) {
                l = String.fromCharCode((48 + k));
            }
            else {
                l = String.fromCharCode((55 + k));
            }
            i.w(0, l);
            f = truncate(Math.floor(f / j));
        }
        if (i.c < h) {
            i.x(0, stringCreateFromChar('0', h - i.c));
        }
        return new ExcelCalcValue(i.toString());
    };
    UltraCalcFunctionBase.prototype.get_maxArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionBase.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBase.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionBase.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBase.prototype.get_name = function () {
        return "base";
    };
    Object.defineProperty(UltraCalcFunctionBase.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionBase.$t = markType(UltraCalcFunctionBase, 'UltraCalcFunctionBase', BuiltInFunctionBase.$);
    return UltraCalcFunctionBase;
}(BuiltInFunctionBase));
export { UltraCalcFunctionBase };
/**
 * @hidden
 */
var UltraCalcFunctionDecimal = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionDecimal, _super);
    function UltraCalcFunctionDecimal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionDecimal.prototype.evaluate = function (a, b) {
        var c = a.pop();
        var d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var e = d.toString();
        var f = c._toInt641();
        if (e.length > 255) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        if (f < 2 || f > 36) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (Math.pow(f, e.length) > 0x7FFFFFFFFFFFFFFF) {
            var g = 1;
            var h = 0;
            for (var i = e.length - 1; i >= 0; i--) {
                var j = e.charAt(i);
                var k = void 0;
                if ('0'.charCodeAt(0) <= j.charCodeAt(0) && j.charCodeAt(0) <= '9'.charCodeAt(0)) {
                    k = j.charCodeAt(0) - 48;
                }
                else if ('a'.charCodeAt(0) <= j.charCodeAt(0) && j.charCodeAt(0) <= 'z'.charCodeAt(0)) {
                    k = j.charCodeAt(0) - 87;
                }
                else if ('A'.charCodeAt(0) <= j.charCodeAt(0) && j.charCodeAt(0) <= 'Z'.charCodeAt(0)) {
                    k = j.charCodeAt(0) - 55;
                }
                else {
                    k = 0x7FFFFFFF;
                }
                if (k > f) {
                    return new ExcelCalcValue(new ExcelCalcErrorValue(4));
                }
                h += (g * k);
                g *= f;
            }
            return new ExcelCalcValue(h);
        }
        else {
            var l = 1;
            var m = 0;
            for (var n = e.length - 1; n >= 0; n--) {
                var o = e.charAt(n);
                var p = void 0;
                if ('0'.charCodeAt(0) <= o.charCodeAt(0) && o.charCodeAt(0) <= '9'.charCodeAt(0)) {
                    p = o.charCodeAt(0) - 48;
                }
                else if ('a'.charCodeAt(0) <= o.charCodeAt(0) && o.charCodeAt(0) <= 'z'.charCodeAt(0)) {
                    p = o.charCodeAt(0) - 87;
                }
                else if ('A'.charCodeAt(0) <= o.charCodeAt(0) && o.charCodeAt(0) <= 'Z'.charCodeAt(0)) {
                    p = o.charCodeAt(0) - 55;
                }
                else {
                    p = 0x7FFFFFFF;
                }
                if (p > f) {
                    return new ExcelCalcValue(new ExcelCalcErrorValue(4));
                }
                m += (l * p);
                l *= f;
            }
            return new ExcelCalcValue(m);
        }
    };
    UltraCalcFunctionDecimal.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionDecimal.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDecimal.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionDecimal.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDecimal.prototype.get_name = function () {
        return "decimal";
    };
    Object.defineProperty(UltraCalcFunctionDecimal.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDecimal.$t = markType(UltraCalcFunctionDecimal, 'UltraCalcFunctionDecimal', BuiltInFunctionBase.$);
    return UltraCalcFunctionDecimal;
}(BuiltInFunctionBase));
export { UltraCalcFunctionDecimal };
/**
 * @hidden
 */
var UltraCalcFunctionStandardize = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionStandardize, _super);
    function UltraCalcFunctionStandardize() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionStandardize.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.i(a, true, function (c, d, e) {
            if (e <= 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            return new ExcelCalcValue((c - d) / e);
        });
    };
    UltraCalcFunctionStandardize.prototype.get_maxArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionStandardize.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionStandardize.prototype.get_minArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionStandardize.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionStandardize.prototype.get_name = function () {
        return "standardize";
    };
    Object.defineProperty(UltraCalcFunctionStandardize.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionStandardize.$t = markType(UltraCalcFunctionStandardize, 'UltraCalcFunctionStandardize', BuiltInFunctionBase.$);
    return UltraCalcFunctionStandardize;
}(BuiltInFunctionBase));
export { UltraCalcFunctionStandardize };
/**
 * @hidden
 */
var UltraCalcFunctionEffect = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionEffect, _super);
    function UltraCalcFunctionEffect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionEffect.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.j(a, false, function (c, d) {
            var e = truncate(d);
            var f = e;
            if (c <= 0 || f < 1) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            var g = Math.pow(1 + c / f, f) - 1;
            return new ExcelCalcValue(g);
        });
    };
    UltraCalcFunctionEffect.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionEffect.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionEffect.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionEffect.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionEffect.prototype.get_name = function () {
        return "effect";
    };
    Object.defineProperty(UltraCalcFunctionEffect.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionEffect.$t = markType(UltraCalcFunctionEffect, 'UltraCalcFunctionEffect', BuiltInFunctionBase.$);
    return UltraCalcFunctionEffect;
}(BuiltInFunctionBase));
export { UltraCalcFunctionEffect };
/**
 * @hidden
 */
var UltraCalcFunctionNominal = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionNominal, _super);
    function UltraCalcFunctionNominal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionNominal.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.j(a, false, function (c, d) {
            var e = truncate(d);
            var f = e;
            if (c <= 0 || f < 1) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            var g = (Math.pow(c + 1, 1 / f) - 1) * f;
            return new ExcelCalcValue(g);
        });
    };
    UltraCalcFunctionNominal.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionNominal.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionNominal.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionNominal.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionNominal.prototype.get_name = function () {
        return "nominal";
    };
    Object.defineProperty(UltraCalcFunctionNominal.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionNominal.$t = markType(UltraCalcFunctionNominal, 'UltraCalcFunctionNominal', BuiltInFunctionBase.$);
    return UltraCalcFunctionNominal;
}(BuiltInFunctionBase));
export { UltraCalcFunctionNominal };
/**
 * @hidden
 */
var UltraCalcFunctionRRI = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionRRI, _super);
    function UltraCalcFunctionRRI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionRRI.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.i(a, true, function (c, d, e) {
            if (c <= 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            var f = Math.pow(e / d, 1 / c) - 1;
            return new ExcelCalcValue(f);
        });
    };
    UltraCalcFunctionRRI.prototype.get_maxArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionRRI.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRRI.prototype.get_minArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionRRI.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRRI.prototype.get_name = function () {
        return "rri";
    };
    Object.defineProperty(UltraCalcFunctionRRI.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionRRI.$t = markType(UltraCalcFunctionRRI, 'UltraCalcFunctionRRI', BuiltInFunctionBase.$);
    return UltraCalcFunctionRRI;
}(BuiltInFunctionBase));
export { UltraCalcFunctionRRI };
/**
 * @hidden
 */
var UltraCalcFunctionPDuration = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionPDuration, _super);
    function UltraCalcFunctionPDuration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionPDuration.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.i(a, true, function (c, d, e) {
            if (c <= 0 || d <= 0 || e <= 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            var f = (Math.log(e) - Math.log(d)) / Math.log(1 + c);
            return new ExcelCalcValue(f);
        });
    };
    UltraCalcFunctionPDuration.prototype.get_maxArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionPDuration.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPDuration.prototype.get_minArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionPDuration.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPDuration.prototype.get_name = function () {
        return "pduration";
    };
    Object.defineProperty(UltraCalcFunctionPDuration.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPDuration.$t = markType(UltraCalcFunctionPDuration, 'UltraCalcFunctionPDuration', BuiltInFunctionBase.$);
    return UltraCalcFunctionPDuration;
}(BuiltInFunctionBase));
export { UltraCalcFunctionPDuration };
/**
 * @hidden
 */
var UltraCalcFunctionDays = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionDays, _super);
    function UltraCalcFunctionDays() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionDays.prototype.evaluate = function (a, b) {
        var c = a.pop();
        var d = a.pop();
        var e, f;
        if (d.isString) {
            var g_2;
            if (((function () { var h = d._aj(d._a0, g_2); g_2 = h.p1; return h.ret; })()) == false) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
            e = ((function (h) { return !nullableIsNull(h) ? h.value : -1; })(ExcelCalcValue._dateTimeToExcelDate(d._o, g_2)));
        }
        else {
            e = d._toDouble3();
        }
        if (c.isString) {
            var h_2;
            if (((function () { var i = c._aj(c._a0, h_2); h_2 = i.p1; return i.ret; })()) == false) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
            f = ((function (i) { return !nullableIsNull(i) ? i.value : -1; })(ExcelCalcValue._dateTimeToExcelDate(c._o, h_2)));
        }
        else {
            f = c._toDouble3();
        }
        var i = 2958466;
        if (f < 0 || f >= i || e < 0 || e >= i) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var j = Math.floor(e) - Math.floor(f);
        return new ExcelCalcValue(j);
    };
    UltraCalcFunctionDays.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionDays.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDays.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionDays.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDays.prototype.get_name = function () {
        return "days";
    };
    Object.defineProperty(UltraCalcFunctionDays.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionDays.$t = markType(UltraCalcFunctionDays, 'UltraCalcFunctionDays', BuiltInFunctionBase.$);
    return UltraCalcFunctionDays;
}(BuiltInFunctionBase));
export { UltraCalcFunctionDays };
/**
 * @hidden
 */
var UltraCalcFunctionYearFrac = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionYearFrac, _super);
    function UltraCalcFunctionYearFrac() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionYearFrac.prototype.evaluate = function (a, b) {
        var c = b == 3 ? a.pop() : null;
        var d = a.pop();
        var e = a.pop();
        var f, g;
        if (!((function () { var h = e._aj(a._w, f, false, true); f = h.p1; return h.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (!((function () { var h = d._aj(a._w, g, false, true); g = h.p1; return h.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var h = c == null ? 0 : c._toInt321();
        if (h < 0 || h > 4) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var i = CalcDateUtilities.d(f, g, h);
        return new ExcelCalcValue(MathUtilities.i(i));
    };
    UltraCalcFunctionYearFrac.prototype.get_maxArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionYearFrac.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionYearFrac.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionYearFrac.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionYearFrac.prototype.get_name = function () {
        return "yearfrac";
    };
    Object.defineProperty(UltraCalcFunctionYearFrac.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionYearFrac.$t = markType(UltraCalcFunctionYearFrac, 'UltraCalcFunctionYearFrac', BuiltInFunctionBase.$);
    return UltraCalcFunctionYearFrac;
}(BuiltInFunctionBase));
export { UltraCalcFunctionYearFrac };
/**
 * @hidden
 */
var UltraCalcFunctionProbFunction = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionProbFunction, _super);
    function UltraCalcFunctionProbFunction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionProbFunction.prototype.evaluate = function (a, b) {
        var c = 0;
        if (b == 4) {
            c = a.pop()._toDecimal2();
        }
        var d = a.pop()._toDecimal2();
        if (b < 4) {
            c = d;
        }
        var e = a.pop().toArrayProxy();
        var f = a.pop().toArrayProxy();
        var g = e.getLength(0) * e.getLength(1);
        var h = f.getLength(0) * f.getLength(1);
        if (g != h) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        var i = 0;
        var j = 0;
        var k = getEnumerator(e);
        var l = getEnumerator(f);
        while (k.moveNext()) {
            l.moveNext();
            var m = k.current;
            if (m.isError) {
                return new ExcelCalcValue(m.toErrorValue());
            }
            var n = l.current;
            if (n.isError) {
                return new ExcelCalcValue(n.toErrorValue());
            }
            var o = m._toDecimal2();
            if (o < 0 || o > 1) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            if (o > 0) {
                if (n.isString) {
                    return new ExcelCalcValue(new ExcelCalcErrorValue(4));
                }
                if (n.isBoolean || m.isBoolean) {
                    return new ExcelCalcValue(new ExcelCalcErrorValue(2));
                }
                i += o;
                var p = n._toDecimal2();
                if (d <= p && p <= c) {
                    j += o;
                }
            }
        }
        if (i != 1) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(j);
    };
    UltraCalcFunctionProbFunction.prototype.get_maxArgs = function () {
        return 4;
    };
    Object.defineProperty(UltraCalcFunctionProbFunction.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionProbFunction.prototype.get_minArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionProbFunction.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionProbFunction.prototype.get_name = function () {
        return "prob";
    };
    Object.defineProperty(UltraCalcFunctionProbFunction.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionProbFunction.$t = markType(UltraCalcFunctionProbFunction, 'UltraCalcFunctionProbFunction', BuiltInFunctionBase.$);
    return UltraCalcFunctionProbFunction;
}(BuiltInFunctionBase));
export { UltraCalcFunctionProbFunction };
/**
 * @hidden
 */
var UltraCalcFunctionPermutationA = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionPermutationA, _super);
    function UltraCalcFunctionPermutationA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionPermutationA.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d = c._toDouble3();
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var e = c._toDouble3();
        if (e < 0 || d < 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var f = Math.pow(e, d);
        return new ExcelCalcValue(f);
    };
    UltraCalcFunctionPermutationA.prototype.get_name = function () {
        return "permutationa";
    };
    Object.defineProperty(UltraCalcFunctionPermutationA.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPermutationA.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionPermutationA.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPermutationA.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionPermutationA.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPermutationA.$t = markType(UltraCalcFunctionPermutationA, 'UltraCalcFunctionPermutationA', BuiltInFunctionBase.$);
    return UltraCalcFunctionPermutationA;
}(BuiltInFunctionBase));
export { UltraCalcFunctionPermutationA };
/**
 * @hidden
 */
var UltraCalcFunctionPermut = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionPermut, _super);
    function UltraCalcFunctionPermut() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionPermut.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var d = truncate(c._toDecimal2());
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var e = truncate(c._toDecimal2());
        if (e < 0 || d < 0 || d > e) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var f = UltraCalcFunctionPermut._ak(e, d);
        return new ExcelCalcValue(f);
    };
    UltraCalcFunctionPermut.prototype.get_name = function () {
        return "permut";
    };
    Object.defineProperty(UltraCalcFunctionPermut.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPermut.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionPermut.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPermut.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionPermut.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPermut._ak = function (a, b) {
        if (b > a) {
            return NaN;
        }
        var c = 1;
        while (true) {
            if (b == 0) {
                break;
            }
            if (b < 0) {
                break;
            }
            if (b > intDivide(a, 2)) {
                b = a - b;
            }
            else {
                c *= a;
                a--;
                b--;
            }
        }
        return c;
    };
    UltraCalcFunctionPermut.$t = markType(UltraCalcFunctionPermut, 'UltraCalcFunctionPermut', BuiltInFunctionBase.$);
    return UltraCalcFunctionPermut;
}(BuiltInFunctionBase));
export { UltraCalcFunctionPermut };
/**
 * @hidden
 */
var UltraCalcFunctionPoisson = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionPoisson, _super);
    function UltraCalcFunctionPoisson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionPoisson.prototype.evaluate = function (a, b) {
        var c = a.pop();
        var d = a.pop();
        var e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var f = e._toDecimal2();
        var g = d._toDouble3();
        var h = c._toBoolean1();
        if (f < 0 || (f >= 1 && g < 0)) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var i = g;
        var j = truncate(f);
        var k = 0;
        if (j > 170 || j * log10(i) >= 290) {
            var l = 0;
            var m = 0;
            var n = truncate(i);
            l = l + 1;
            if (n == j) {
                m++;
            }
            if (h && n < j) {
                m++;
            }
            var o = n * 2;
            var p = 1;
            var q = false;
            var r = n + 1;
            while (!q && r <= o) {
                var s = p * i / r;
                l = l + s;
                if (r == j) {
                    m += s;
                }
                if (h && r < j) {
                    m += s;
                }
                p = s;
                r = r + 1;
            }
            p = 1;
            q = false;
            r = n - 1;
            while (!q && r >= 0) {
                var t = p * (r + 1) / i;
                l = l + t;
                if (r == j) {
                    m += t;
                }
                if (h && r < j) {
                    m += t;
                }
                p = t;
                r = r - 1;
            }
            k = m / l;
        }
        else {
            var u = h ? 0 : j;
            var v = UltraCalcFunctionFact._ak(u);
            var w = Math.exp(-i);
            for (var x = u; x <= j; x++) {
                k += w * Math.pow(i, x) / v;
                v *= (x + 1);
            }
        }
        return new ExcelCalcValue(k);
    };
    UltraCalcFunctionPoisson.prototype.get_name = function () {
        return "poisson";
    };
    Object.defineProperty(UltraCalcFunctionPoisson.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPoisson.prototype.get_minArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionPoisson.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPoisson.prototype.get_maxArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionPoisson.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionPoisson.$t = markType(UltraCalcFunctionPoisson, 'UltraCalcFunctionPoisson', BuiltInFunctionBase.$);
    return UltraCalcFunctionPoisson;
}(BuiltInFunctionBase));
export { UltraCalcFunctionPoisson };
/**
 * @hidden
 */
var UltraCalcFunctionPoissonDist = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionPoissonDist, _super);
    function UltraCalcFunctionPoissonDist() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionPoissonDist.prototype.get_name = function () {
        return "poisson.dist";
    };
    UltraCalcFunctionPoissonDist.$t = markType(UltraCalcFunctionPoissonDist, 'UltraCalcFunctionPoissonDist', UltraCalcFunctionPoisson.$);
    return UltraCalcFunctionPoissonDist;
}(UltraCalcFunctionPoisson));
export { UltraCalcFunctionPoissonDist };
/**
 * @hidden
 */
var UltraCalcFunctionErf = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionErf, _super);
    function UltraCalcFunctionErf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionErf.prototype.evaluate = function (a, b) {
        var c = 0;
        var d = null;
        if (b == 2) {
            d = a.pop();
        }
        var e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        else if (e.isBoolean) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        if (b == 2) {
            if (d.isError) {
                return new ExcelCalcValue(d.toErrorValue());
            }
            else if (d.isBoolean) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
            c = d._toDouble3();
        }
        var f = e._toDouble3();
        var g = ErfUtils.c(f);
        if (b == 2) {
            g = ErfUtils.c(c) - g;
        }
        return new ExcelCalcValue(g);
    };
    UltraCalcFunctionErf.prototype.get_name = function () {
        return "erf";
    };
    Object.defineProperty(UltraCalcFunctionErf.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionErf.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionErf.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionErf.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionErf.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionErf.$t = markType(UltraCalcFunctionErf, 'UltraCalcFunctionErf', BuiltInFunctionBase.$);
    return UltraCalcFunctionErf;
}(BuiltInFunctionBase));
export { UltraCalcFunctionErf };
/**
 * @hidden
 */
var UltraCalcFunctionErfPrecise = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionErfPrecise, _super);
    function UltraCalcFunctionErfPrecise() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionErfPrecise.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.h(a, false, function (c) { return new ExcelCalcValue(ErfUtils.c(c)); });
    };
    UltraCalcFunctionErfPrecise.prototype.get_name = function () {
        return "erf.precise";
    };
    Object.defineProperty(UltraCalcFunctionErfPrecise.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionErfPrecise.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionErfPrecise.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionErfPrecise.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionErfPrecise.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionErfPrecise.$t = markType(UltraCalcFunctionErfPrecise, 'UltraCalcFunctionErfPrecise', BuiltInFunctionBase.$);
    return UltraCalcFunctionErfPrecise;
}(BuiltInFunctionBase));
export { UltraCalcFunctionErfPrecise };
/**
 * @hidden
 */
var UltraCalcFunctionErfc = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionErfc, _super);
    function UltraCalcFunctionErfc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionErfc.prototype.evaluate = function (a, b) {
        return CalcFunctionUtilities.h(a, false, function (c) { return new ExcelCalcValue(ErfUtils.d(c)); });
    };
    UltraCalcFunctionErfc.prototype.get_name = function () {
        return "erfc";
    };
    Object.defineProperty(UltraCalcFunctionErfc.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionErfc.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionErfc.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionErfc.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionErfc.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionErfc.$t = markType(UltraCalcFunctionErfc, 'UltraCalcFunctionErfc', BuiltInFunctionBase.$);
    return UltraCalcFunctionErfc;
}(BuiltInFunctionBase));
export { UltraCalcFunctionErfc };
/**
 * @hidden
 */
var UltraCalcFunctionErfcPrecise = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionErfcPrecise, _super);
    function UltraCalcFunctionErfcPrecise() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionErfcPrecise.prototype.get_name = function () {
        return "erfc.precise";
    };
    UltraCalcFunctionErfcPrecise.$t = markType(UltraCalcFunctionErfcPrecise, 'UltraCalcFunctionErfcPrecise', UltraCalcFunctionErfc.$);
    return UltraCalcFunctionErfcPrecise;
}(UltraCalcFunctionErfc));
export { UltraCalcFunctionErfcPrecise };
/**
 * @hidden
 */
var UltraCalcFunctionExponDist = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionExponDist, _super);
    function UltraCalcFunctionExponDist() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionExponDist.prototype.evaluate = function (a, b) {
        var c = a.pop();
        var d = a.pop();
        var e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var f = e._toDouble3();
        var g = d._toDouble3();
        var h = c._toBoolean1();
        if (f < 0 || g <= 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var i = Math.exp(-f * g);
        var j = h ? 1 - i : g * i;
        return new ExcelCalcValue(j);
    };
    UltraCalcFunctionExponDist.prototype.get_name = function () {
        return "expondist";
    };
    Object.defineProperty(UltraCalcFunctionExponDist.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionExponDist.prototype.get_minArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionExponDist.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionExponDist.prototype.get_maxArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionExponDist.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionExponDist.$t = markType(UltraCalcFunctionExponDist, 'UltraCalcFunctionExponDist', BuiltInFunctionBase.$);
    return UltraCalcFunctionExponDist;
}(BuiltInFunctionBase));
export { UltraCalcFunctionExponDist };
/**
 * @hidden
 */
var UltraCalcFunctionExpon_Dist = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionExpon_Dist, _super);
    function UltraCalcFunctionExpon_Dist() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionExpon_Dist.prototype.get_name = function () {
        return "expon.dist";
    };
    UltraCalcFunctionExpon_Dist.$t = markType(UltraCalcFunctionExpon_Dist, 'UltraCalcFunctionExpon_Dist', UltraCalcFunctionExponDist.$);
    return UltraCalcFunctionExpon_Dist;
}(UltraCalcFunctionExponDist));
export { UltraCalcFunctionExpon_Dist };
/**
 * @hidden
 */
var UltraCalcFunctionWeibull = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionWeibull, _super);
    function UltraCalcFunctionWeibull() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionWeibull.prototype.evaluate = function (a, b) {
        var c = a.pop();
        var d = a.pop();
        var e = a.pop();
        var f = a.pop();
        if (f.isError) {
            return new ExcelCalcValue(f.toErrorValue());
        }
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var g = f._toDouble3();
        var h = e._toDouble3();
        var i = d._toDouble3();
        var j = c._toBoolean1();
        if (g < 0 || h <= 0 || i <= 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        var k = Math.exp(-Math.pow(g / i, h));
        var l = j ? (1 - k) : h / Math.pow(i, h) * Math.pow(g, h - 1) * k;
        return new ExcelCalcValue(l);
    };
    UltraCalcFunctionWeibull.prototype.get_name = function () {
        return "weibull";
    };
    Object.defineProperty(UltraCalcFunctionWeibull.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionWeibull.prototype.get_minArgs = function () {
        return 4;
    };
    Object.defineProperty(UltraCalcFunctionWeibull.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionWeibull.prototype.get_maxArgs = function () {
        return 4;
    };
    Object.defineProperty(UltraCalcFunctionWeibull.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionWeibull.$t = markType(UltraCalcFunctionWeibull, 'UltraCalcFunctionWeibull', BuiltInFunctionBase.$);
    return UltraCalcFunctionWeibull;
}(BuiltInFunctionBase));
export { UltraCalcFunctionWeibull };
/**
 * @hidden
 */
var UltraCalcFunctionWeibullDist = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionWeibullDist, _super);
    function UltraCalcFunctionWeibullDist() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionWeibullDist.prototype.get_name = function () {
        return "weibull.dist";
    };
    UltraCalcFunctionWeibullDist.$t = markType(UltraCalcFunctionWeibullDist, 'UltraCalcFunctionWeibullDist', UltraCalcFunctionWeibull.$);
    return UltraCalcFunctionWeibullDist;
}(UltraCalcFunctionWeibull));
export { UltraCalcFunctionWeibullDist };
/**
 * @hidden
 */
var UltraCalcFunctionTrimMean = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionTrimMean, _super);
    function UltraCalcFunctionTrimMean() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionTrimMean.prototype.evaluate = function (a, b) {
        var c = a.pop();
        var d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        var e = c._toDouble3();
        var f = CalcFunctionUtilities.o(10);
        if (e < 0 || e >= 1) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        try {
            CalcArgumentHelper.c(d, 0, 1229, runOn(f, f.add));
            if (f.count == 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            var g = truncate((e * f.count));
            g -= g % 2;
            if (g > 0) {
                f.y();
            }
            var h = 0;
            for (var i = (intDivide(g, 2)), j = f.count - (intDivide(g, 2)); i < j; i++) {
                h += f._inner[i];
            }
            var k = CalcFunctionUtilities.t(f.count - g, h);
            return new ExcelCalcValue(k);
        }
        finally {
            CalcFunctionUtilities.ac(f);
        }
    };
    UltraCalcFunctionTrimMean.prototype.get_name = function () {
        return "trimmean";
    };
    Object.defineProperty(UltraCalcFunctionTrimMean.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTrimMean.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionTrimMean.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTrimMean.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionTrimMean.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionTrimMean.$t = markType(UltraCalcFunctionTrimMean, 'UltraCalcFunctionTrimMean', BuiltInFunctionBase.$);
    return UltraCalcFunctionTrimMean;
}(BuiltInFunctionBase));
export { UltraCalcFunctionTrimMean };
/**
 * @hidden
 */
var UltraCalcFunctionAverageIfs = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionAverageIfs, _super);
    function UltraCalcFunctionAverageIfs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionAverageIfs.prototype.evaluate = function (a, b) {
        return UltraCalcConditionalFunctionBase._ak(a, b, 0, function (c, d) { return new ExcelCalcValue(d == 0 ? new ExcelCalcErrorValue(2) : (c / d)); }, function (c, d) { return c + d; });
    };
    UltraCalcFunctionAverageIfs.prototype.get_name = function () {
        return "averageifs";
    };
    Object.defineProperty(UltraCalcFunctionAverageIfs.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAverageIfs.prototype.get_minArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionAverageIfs.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAverageIfs.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionAverageIfs.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionAverageIfs.$t = markType(UltraCalcFunctionAverageIfs, 'UltraCalcFunctionAverageIfs', BuiltInFunctionBase.$);
    return UltraCalcFunctionAverageIfs;
}(BuiltInFunctionBase));
export { UltraCalcFunctionAverageIfs };
/**
 * @hidden
 */
var UltraCalcFunctionCell = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionCell, _super);
    function UltraCalcFunctionCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionCell.prototype.evaluate = function (a, b) {
        var c = null;
        if (b == 2) {
            c = a.pop();
        }
        var d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        var e = d.toString().toLowerCase();
        var f = null;
        var g;
        var h;
        var i, j;
        if (c == null) {
            var k = a._r._u;
            if (k.b == null || k.b.workbook == null) {
                k.e();
            }
            if (k.b == null || k.b.workbook == null) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
            h = k.b;
            j = k.c;
            i = k.d;
            g = a._r._bb.i(h.index);
        }
        else {
            f = typeCast(RefBase.$, c.toReference());
            if (f == null) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
            g = f._q;
            h = f._u;
            j = f._ao;
            i = f._as;
        }
        var l = h != null ? h._rows$i._aj(i) : null;
        var m;
        switch (e) {
            case "address":
                {
                    var n = CellAddress.u(i, j, h._o, false, false, -1, -1, false, h._c);
                    if (WorksheetCell.l_op_Equality(a.owningCell, null) || h != a.owningCell.worksheet) {
                        var o = g.o(GetFormulaStringInfo.a, true);
                        if (stringStartsWith(o, "'") && stringEndsWith(o, "'!")) {
                            o = o.substr(1, o.length - 3);
                            var p = o.indexOf("[");
                            if (p > 0) {
                                o = o.substr(p);
                            }
                            o += "!";
                        }
                        n = o + n;
                    }
                    m = n;
                    break;
                }
            case "col":
                {
                    m = j + 1;
                    break;
                }
            case "contents":
            case "type":
                {
                    m = UltraCalcFunctionCell._ak(c, f, g, j, l, false);
                    if (e == "type") {
                        if (m == null) {
                            m = "b";
                        }
                        else {
                            var q = typeCast(String_$type, m);
                            if (q != null) {
                                m = "l";
                            }
                            else {
                                m = "v";
                            }
                        }
                    }
                    break;
                }
            case "filename":
                {
                    if (!g.j && stringIsNullOrEmpty(g.e.x)) {
                        m = "";
                    }
                    else {
                        var r = g.o(GetFormulaStringInfo.a, true);
                        if (r != null && r.length > 0) {
                            if (r.charAt(r.length - 1) == '!') {
                                r = r.substr(0, r.length - 1);
                            }
                            if (stringStartsWith(r, "'") && stringEndsWith(r, "'")) {
                                r = r.substr(1, r.length - 2);
                            }
                        }
                        m = r;
                    }
                    break;
                }
            case "color":
            case "format":
            case "parentheses":
            case "prefix":
            case "protect":
                {
                    if (g.j) {
                        m = new ExcelCalcErrorValue(3);
                    }
                    else {
                        var s = h._b4(l, j);
                        switch (e) {
                            case "color":
                                {
                                    var t = s._cs;
                                    var u = h.workbook._b2.a(t);
                                    var v = u.c(1);
                                    m = v != null && !stringIsNullOrEmpty(v.color) ? 1 : 0;
                                    break;
                                }
                            case "parentheses":
                                {
                                    var w = s._cs;
                                    var x = h.workbook._b2.a(w);
                                    var y = x.c(0);
                                    m = y != null && y.hasParentheses && !y.hasVerbatimString ? 1 : 0;
                                    break;
                                }
                            case "prefix":
                                m = UltraCalcFunctionCell._ak(c, f, g, j, l, true);
                                if (typeof m === 'string') {
                                    switch (s._a4) {
                                        case 1:
                                        case 7:
                                        case 5:
                                        case 0:
                                            m = "'";
                                            break;
                                        case 2:
                                        case 6:
                                            m = "^";
                                            break;
                                        case 3:
                                            m = "'";
                                            break;
                                        case 4:
                                            m = "\\";
                                            break;
                                        default:
                                            m = "";
                                            break;
                                    }
                                }
                                else {
                                    m = "";
                                }
                                break;
                            case "protect":
                                m = nullableEquals(s._c5, false) ? 0 : 1;
                                break;
                            default:
                            case "format":
                                {
                                    var z = s._cs;
                                    var aa = h.workbook._b2.a(z);
                                    m = aa.ag();
                                    break;
                                }
                        }
                    }
                    break;
                }
            case "row":
                {
                    m = i + 1;
                    break;
                }
            case "width":
                {
                    if (g.j) {
                        m = new ExcelCalcErrorValue(3);
                    }
                    else {
                        var ab = h._fp(j, false);
                        m = MathUtilities.f(h._fn(ab));
                    }
                    break;
                }
            default:
                m = new ExcelCalcErrorValue(1);
                break;
        }
        return new ExcelCalcValue(m);
    };
    UltraCalcFunctionCell._ak = function (a, b, c, d, e, f) {
        var g;
        if (e == null) {
            if (a != null && c.j) {
                if (b.value != null) {
                    g = b.value.value;
                }
                else {
                    g = null;
                }
            }
            else {
                g = null;
            }
        }
        else {
            if (!e._bt(d)) {
                g = null;
            }
            else {
                if (f) {
                    var h = e.getCellFormula(d);
                    if (h != null) {
                        return h;
                    }
                }
                var i = null;
                if (b == null) {
                    b = e._as(d);
                    if (b._af && b._formula != null) {
                        i = b._formula.evaluateCore(e.worksheet.workbook);
                    }
                }
                if (i == null) {
                    i = new ExcelCalcValue(b);
                }
                var j = i._bj(false, false);
                if (typeCast(FormattedString.$, j) !== null) {
                    g = j.unformattedString;
                }
                else {
                    g = j;
                }
            }
        }
        return g;
    };
    UltraCalcFunctionCell.prototype.get_name = function () {
        return "cell";
    };
    Object.defineProperty(UltraCalcFunctionCell.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCell.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionCell.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCell.prototype.get_maxArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionCell.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCell.$t = markType(UltraCalcFunctionCell, 'UltraCalcFunctionCell', BuiltInFunctionBase.$);
    return UltraCalcFunctionCell;
}(BuiltInFunctionBase));
export { UltraCalcFunctionCell };
/**
 * @hidden
 */
var UltraCalcFunctionCountIfs = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionCountIfs, _super);
    function UltraCalcFunctionCountIfs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionCountIfs.prototype.evaluate = function (a, b) {
        return UltraCalcConditionalFunctionBase._ak(a, b, 0, function (c, d) { return new ExcelCalcValue(d); });
    };
    UltraCalcFunctionCountIfs.prototype.get_name = function () {
        return "countifs";
    };
    Object.defineProperty(UltraCalcFunctionCountIfs.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCountIfs.prototype.get_minArgs = function () {
        return 2;
    };
    Object.defineProperty(UltraCalcFunctionCountIfs.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCountIfs.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionCountIfs.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionCountIfs.$t = markType(UltraCalcFunctionCountIfs, 'UltraCalcFunctionCountIfs', BuiltInFunctionBase.$);
    return UltraCalcFunctionCountIfs;
}(BuiltInFunctionBase));
export { UltraCalcFunctionCountIfs };
/**
 * @hidden
 */
var UltraCalcFunctionCovarianceP = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionCovarianceP, _super);
    function UltraCalcFunctionCovarianceP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionCovarianceP.prototype.evaluate = function (a, b) {
        return UltraCalcFunctionCovar._as(a, b, false);
    };
    UltraCalcFunctionCovarianceP.prototype.get_name = function () {
        return "covariance.p";
    };
    UltraCalcFunctionCovarianceP.$t = markType(UltraCalcFunctionCovarianceP, 'UltraCalcFunctionCovarianceP', UltraCalcFunctionCovar.$);
    return UltraCalcFunctionCovarianceP;
}(UltraCalcFunctionCovar));
export { UltraCalcFunctionCovarianceP };
/**
 * @hidden
 */
var UltraCalcFunctionCovarianceS = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionCovarianceS, _super);
    function UltraCalcFunctionCovarianceS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionCovarianceS.prototype.evaluate = function (a, b) {
        return UltraCalcFunctionCovar._as(a, b, true);
    };
    UltraCalcFunctionCovarianceS.prototype.get_name = function () {
        return "covariance.s";
    };
    UltraCalcFunctionCovarianceS.$t = markType(UltraCalcFunctionCovarianceS, 'UltraCalcFunctionCovarianceS', UltraCalcFunctionCovar.$);
    return UltraCalcFunctionCovarianceS;
}(UltraCalcFunctionCovar));
export { UltraCalcFunctionCovarianceS };
/**
 * @hidden
 */
var UltraCalcFunctionFormulaText = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionFormulaText, _super);
    function UltraCalcFunctionFormulaText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionFormulaText.prototype.evaluate = function (a, b) {
        var c = a.pop();
        if (!c.isReference) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        var d = c.toReference();
        var e = d.value;
        var f = d.formula;
        if (f == null) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        var g;
        if (typeCast(ArrayInteriorFormula.$, f) !== null) {
            g = "{" + f._cz._toString() + "}";
        }
        else {
            g = f.formulaString;
        }
        return new ExcelCalcValue(g);
    };
    UltraCalcFunctionFormulaText.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionFormulaText.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFormulaText.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionFormulaText.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFormulaText.prototype.get_name = function () {
        return "formulatext";
    };
    Object.defineProperty(UltraCalcFunctionFormulaText.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionFormulaText.$t = markType(UltraCalcFunctionFormulaText, 'UltraCalcFunctionFormulaText', BuiltInFunctionBase.$);
    return UltraCalcFunctionFormulaText;
}(BuiltInFunctionBase));
export { UltraCalcFunctionFormulaText };
/**
 * @hidden
 */
var UltraCalcFunctionIsFormula = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionIsFormula, _super);
    function UltraCalcFunctionIsFormula() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionIsFormula.prototype.evaluate = function (a, b) {
        var c = a.pop();
        var d = false;
        if (c.isReference) {
            var e = c.toReference();
            var f = e.value;
            d = e.formula != null;
        }
        return new ExcelCalcValue(d);
    };
    UltraCalcFunctionIsFormula.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIsFormula.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsFormula.prototype.get_minArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionIsFormula.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsFormula.prototype.get_name = function () {
        return "isformula";
    };
    Object.defineProperty(UltraCalcFunctionIsFormula.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionIsFormula.$t = markType(UltraCalcFunctionIsFormula, 'UltraCalcFunctionIsFormula', BuiltInFunctionBase.$);
    return UltraCalcFunctionIsFormula;
}(BuiltInFunctionBase));
export { UltraCalcFunctionIsFormula };
/**
 * @hidden
 */
var UltraCalcFunctionMaxIfs = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionMaxIfs, _super);
    function UltraCalcFunctionMaxIfs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionMaxIfs.prototype.evaluate = function (a, b) {
        return UltraCalcConditionalFunctionBase._ak(a, b, -1.7976931348623157E+308, function (c, d) { return new ExcelCalcValue(d == 0 ? 0 : c); }, function (c, d) { return d > c ? d : c; });
    };
    UltraCalcFunctionMaxIfs.prototype.get_name = function () {
        return "maxifs";
    };
    Object.defineProperty(UltraCalcFunctionMaxIfs.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMaxIfs.prototype.get_minArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionMaxIfs.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMaxIfs.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionMaxIfs.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMaxIfs.$t = markType(UltraCalcFunctionMaxIfs, 'UltraCalcFunctionMaxIfs', BuiltInFunctionBase.$);
    return UltraCalcFunctionMaxIfs;
}(BuiltInFunctionBase));
export { UltraCalcFunctionMaxIfs };
/**
 * @hidden
 */
var UltraCalcFunctionMinIfs = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionMinIfs, _super);
    function UltraCalcFunctionMinIfs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionMinIfs.prototype.evaluate = function (a, b) {
        return UltraCalcConditionalFunctionBase._ak(a, b, 1.7976931348623157E+308, function (c, d) { return new ExcelCalcValue(d == 0 ? 0 : c); }, function (c, d) { return d < c ? d : c; });
    };
    UltraCalcFunctionMinIfs.prototype.get_name = function () {
        return "minifs";
    };
    Object.defineProperty(UltraCalcFunctionMinIfs.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMinIfs.prototype.get_minArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionMinIfs.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMinIfs.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionMinIfs.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionMinIfs.$t = markType(UltraCalcFunctionMinIfs, 'UltraCalcFunctionMinIfs', BuiltInFunctionBase.$);
    return UltraCalcFunctionMinIfs;
}(BuiltInFunctionBase));
export { UltraCalcFunctionMinIfs };
/**
 * @hidden
 */
var UltraCalcFunctionSheet = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSheet, _super);
    function UltraCalcFunctionSheet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSheet.prototype.evaluate = function (a, b) {
        var c = null;
        if (b == 1) {
            c = a.pop();
        }
        var d = null;
        if (b == 0) {
            if (WorksheetCell.l_op_Inequality(a.owningCell, null)) {
                d = a.owningCell.worksheet;
            }
        }
        else if (c.isReference) {
            var e = c.toReference();
            d = e._u;
            if (d == null) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(7));
            }
        }
        else if (c.isString) {
            var f = c.toString();
            if (!a._r._worksheets$i.exists(f)) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(3));
            }
            d = c._o._worksheets$i._item1(f);
        }
        else if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        else {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        if (d == null) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(0));
        }
        return new ExcelCalcValue(d.sheetIndex + 1);
    };
    UltraCalcFunctionSheet.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionSheet.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSheet.prototype.get_minArgs = function () {
        return 0;
    };
    Object.defineProperty(UltraCalcFunctionSheet.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSheet.prototype.get_name = function () {
        return "sheet";
    };
    Object.defineProperty(UltraCalcFunctionSheet.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSheet.$t = markType(UltraCalcFunctionSheet, 'UltraCalcFunctionSheet', BuiltInFunctionBase.$);
    return UltraCalcFunctionSheet;
}(BuiltInFunctionBase));
export { UltraCalcFunctionSheet };
/**
 * @hidden
 */
var UltraCalcFunctionSheets = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSheets, _super);
    function UltraCalcFunctionSheets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSheets.prototype.evaluate = function (a, b) {
        var e_12, _e;
        var c = null;
        if (b == 1) {
            c = a.pop();
        }
        var d;
        if (b == 0) {
            d = a._r._sheets$i.count;
        }
        else if (c.isReference) {
            var e = c.toReference();
            if (typeCast(NamedCalcReferenceUnconnected.$, e) !== null) {
                d = new ExcelCalcErrorValue(1);
            }
            else {
                var f = e._am();
                if (f.count == 1) {
                    d = 1;
                }
                else {
                    var g = 0x7FFFFFFF;
                    var h = -2147483648;
                    try {
                        for (var _h = tslib_1.__values(fromEnum(f)), _j = _h.next(); !_j.done; _j = _h.next()) {
                            var i = _j.value;
                            var j = i.worksheet.sheetIndex;
                            if (j < g) {
                                g = j;
                            }
                            if (j > h) {
                                h = j;
                            }
                        }
                    }
                    catch (e_12_1) { e_12 = { error: e_12_1 }; }
                    finally {
                        try {
                            if (_j && !_j.done && (_e = _h.return)) _e.call(_h);
                        }
                        finally { if (e_12) throw e_12.error; }
                    }
                    d = (h - g) + 1;
                }
            }
        }
        else if (c.isString || c.isBoolean) {
            d = new ExcelCalcErrorValue(1);
        }
        else if (c.isError) {
            d = c.toErrorValue();
        }
        else {
            d = new ExcelCalcErrorValue(3);
        }
        return new ExcelCalcValue(d);
    };
    UltraCalcFunctionSheets.prototype.get_maxArgs = function () {
        return 1;
    };
    Object.defineProperty(UltraCalcFunctionSheets.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSheets.prototype.get_minArgs = function () {
        return 0;
    };
    Object.defineProperty(UltraCalcFunctionSheets.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSheets.prototype.get_name = function () {
        return "sheets";
    };
    Object.defineProperty(UltraCalcFunctionSheets.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSheets.$t = markType(UltraCalcFunctionSheets, 'UltraCalcFunctionSheets', BuiltInFunctionBase.$);
    return UltraCalcFunctionSheets;
}(BuiltInFunctionBase));
export { UltraCalcFunctionSheets };
/**
 * @hidden
 */
var UltraCalcFunctionSumIfs = /** @class */ (function (_super) {
    tslib_1.__extends(UltraCalcFunctionSumIfs, _super);
    function UltraCalcFunctionSumIfs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltraCalcFunctionSumIfs.prototype.evaluate = function (a, b) {
        return UltraCalcConditionalFunctionBase._ak(a, b, 0, function (c, d) { return new ExcelCalcValue(c); }, function (c, d) { return c + d; });
    };
    UltraCalcFunctionSumIfs.prototype.get_name = function () {
        return "sumifs";
    };
    Object.defineProperty(UltraCalcFunctionSumIfs.prototype, "name", {
        get: function () {
            return this.get_name();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSumIfs.prototype.get_minArgs = function () {
        return 3;
    };
    Object.defineProperty(UltraCalcFunctionSumIfs.prototype, "minArgs", {
        get: function () {
            return this.get_minArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSumIfs.prototype.get_maxArgs = function () {
        return 0x7FFFFFFF;
    };
    Object.defineProperty(UltraCalcFunctionSumIfs.prototype, "maxArgs", {
        get: function () {
            return this.get_maxArgs();
        },
        enumerable: true,
        configurable: true
    });
    UltraCalcFunctionSumIfs.$t = markType(UltraCalcFunctionSumIfs, 'UltraCalcFunctionSumIfs', BuiltInFunctionBase.$);
    return UltraCalcFunctionSumIfs;
}(BuiltInFunctionBase));
export { UltraCalcFunctionSumIfs };
callStaticConstructors();
//# sourceMappingURL=excel.functions.js.map
