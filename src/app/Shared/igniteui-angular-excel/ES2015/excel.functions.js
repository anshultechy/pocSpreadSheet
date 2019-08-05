/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum, Base, markType, callStaticConstructors, fromEn, Number_$type, fromEnum, Date_$type, String_$type, typeCast, Boolean_$type, Nullable$1, runOn, getEnumerator } from "../../igniteui-angular-core/ES2015/type";
import { isNaN_, isPositiveInfinity, isNegativeInfinity, truncate, isInfinity, log10, logBase, intDivide } from "../../igniteui-angular-core/ES2015/number";
import { UltraCalcFunctionFactory, BuiltInFunctionBase, ExcelCalcValue, ExcelCalcNumberStack, CalcFunctionUtilities, ExcelCalcErrorValue, ExcelCalcFunction, MathUtilities, FinancialUtils, Workbook, ArrayProxy, CalcManagerUtilities, ExcelUtils, DivideByZeroException, ValueFormatter, CellCalcReference, WorksheetRegion, RefBase, CalculationContext, ErrorValue, CellAddress, TempCellCalcReference, MatrixUtilities, HyperlinkResult, ExcelCalcEngine, ExcelReferenceError, CalcUtilities, RegionGroupCalcReference, NamedCalcReferenceUnconnected, CalcArgumentHelper, CalcDateUtilities, WorksheetCell, GetFormulaStringInfo, FormattedString, ArrayInteriorFormula } from "./excel.core";
import { StringBuilder } from "../../igniteui-angular-core/ES2015/StringBuilder";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { round10N, ieeeRemainder, tryParseInt64_2, numberToString2, tryParseInt32_1 } from "../../igniteui-angular-core/ES2015/numberExtended";
import { Random } from "../../igniteui-angular-core/ES2015/Random";
import { stringToLocaleLower, stringToLocaleUpper, stringEmpty, stringEndsWith, stringStartsWith, stringIsNullOrEmpty, stringToCharArray, stringCompare, stringReplace, stringContains, stringIsNullOrWhiteSpace, stringCreateFromChar } from "../../igniteui-angular-core/ES2015/string";
import { trim, stringFormat, stringCompare1, startsWith1, stringFormat1, stringEquals1, isLetter } from "../../igniteui-angular-core/ES2015/stringExtended";
import { timeSpanDays, timeSpanTicks, timeSpanInit1, timeSpanInit2, timeSpanTotalDays, timeSpanTotalHours, timeSpanTotalMinutes, timeSpanTotalSeconds } from "../../igniteui-angular-core/ES2015/timespan";
import { daysInMonth, dateFromValues, dateGetMonth, dateNow, dateGetTimeOfDay, dateFromTicks, dateToday, dateGetDate, dateAddDays } from "../../igniteui-angular-core/ES2015/date";
import { Convert } from "../../igniteui-angular-core/ES2015/Convert";
import { dateTryParse } from "../../igniteui-angular-core/ES2015/dateExtended";
import { Dictionary$2 } from "../../igniteui-angular-core/ES2015/Dictionary$2";
import { ArgumentException } from "../../igniteui-angular-core/ES2015/ArgumentException";
import { ArgumentOutOfRangeException } from "../../igniteui-angular-core/ES2015/ArgumentOutOfRangeException";
import { Stack$1 } from "../../igniteui-angular-core/ES2015/Stack$1";
import { Tuple$2 } from "../../igniteui-angular-core/ES2015/Tuple$2";
import { Tuple } from "../../igniteui-angular-core/ES2015/Tuple";
import { boxArray$1, arrayGetLength } from "../../igniteui-angular-core/ES2015/array";
import { Regex } from "../../igniteui-angular-core/ES2015/Regex";
import { StringUtilities } from "./documents.core";
import { ReadOnlyCollection$1 } from "../../igniteui-angular-core/ES2015/ReadOnlyCollection$1";
import { boolCompare, tryParseBool } from "../../igniteui-angular-core/ES2015/bool";
import { nullableIsNull, nullableEquals } from "../../igniteui-angular-core/ES2015/nullable";
/**
 * @hidden
 */
export let UltraCalcConditionalFunctionBase_CriteriaEvaluator_Operator_$type = markEnum('UltraCalcConditionalFunctionBase_CriteriaEvaluator_Operator', 'Equals,0|NotEquals,1|GreaterThan,2|GreaterThanOrEqual,3|LessThan,4|LessThanOrEqual,5');
/**
 * @hidden
 */
export let UltraCalcFunctionConvert_MeasurementUnitCategory_$type = markEnum('UltraCalcFunctionConvert_MeasurementUnitCategory', 'Unknown,0|WeightAndMass,1|Distance,2|Time,3|Pressure,4|Force,5|Energy,6|Power,7|Magnetism,8|Temperature,9|LiquidMeasure,10');
/**
 * @hidden
 */
export class ErfUtils extends Base {
    static bb(a) {
        let b = new ArrayBuffer(8);
        ;
        let c = new Float64Array(b);
        let d = new Int32Array(b);
        c[0] = a;
        return (d[1]);
    }
    static a8(a) {
        let b = new ArrayBuffer(8);
        ;
        let c = new Float64Array(b);
        let d = new Int32Array(b);
        c[0] = a;
        d[0] = 0;
        return (c[0]);
    }
    static c(a) {
        if (isNaN_(a)) {
            return NaN;
        }
        if (isPositiveInfinity(a)) {
            return 1;
        }
        if (isNegativeInfinity(a)) {
            return -1;
        }
        let b, c;
        let d, e, f, g, h, i, j, k;
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
    }
    static d(a) {
        if (isNaN_(a)) {
            return NaN;
        }
        if (isPositiveInfinity(a)) {
            return 0;
        }
        if (isNegativeInfinity(a)) {
            return 2;
        }
        let b, c;
        let d, e, f, g, h, i, j, k;
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
    }
}
ErfUtils.$t = markType(ErfUtils, 'ErfUtils');
/**
 * @hidden
 */
export class UltraCalcFunctionLoader extends Base {
    static staticInit() {
        UltraCalcFunctionLoader.b();
    }
    static b() {
        UltraCalcFunctionFactory._f = (a) => {
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
    }
    static a(a) {
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
    }
}
UltraCalcFunctionLoader.$t = markType(UltraCalcFunctionLoader, 'UltraCalcFunctionLoader');
/**
 * @hidden
 */
export class UltraCalcFunctionConcatenate extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = new StringBuilder(0);
        let d = new List$1(ExcelCalcValue.$, 0);
        for (let e = 0; e < b; e++) {
            d.add(a.pop());
        }
        for (let f = d.count; f > 0; f--) {
            let g = d._inner[f - 1];
            if (!true && g.isReference && g.toReference().isEnumerable) {
                let h = g.toReference().references;
                for (let i of fromEn(h)) {
                    if (i.value.isError) {
                        return new ExcelCalcValue(i.value.toErrorValue());
                    }
                    c.l(i.value.toString());
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
    }
    canParameterBeEnumerable(a) {
        return true;
    }
    get_name() {
        return "concatenate";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionConcatenate.$t = markType(UltraCalcFunctionConcatenate, 'UltraCalcFunctionConcatenate', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionAverage extends BuiltInFunctionBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.d(a, b, 1229, UltraCalcFunctionAverage._ak);
    }
    canParameterBeEnumerable(a) {
        return true;
    }
    static _ak(a) {
        return a.count == 0 ? new ExcelCalcValue(new ExcelCalcErrorValue(2)) : new ExcelCalcValue(CalcFunctionUtilities.q(a));
    }
    get_name() {
        return "average";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionAverage.$t = markType(UltraCalcFunctionAverage, 'UltraCalcFunctionAverage', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSum extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = 0;
        return CalcFunctionUtilities.f(a, b, CalcFunctionUtilities.b(a, false, false, false), (d) => c += d) || new ExcelCalcValue(c);
    }
    canParameterBeEnumerable(a) {
        return true;
    }
    get_name() {
        return "sum";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionSum.$t = markType(UltraCalcFunctionSum, 'UltraCalcFunctionSum', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionIf extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = null;
        if (b == 3) {
            c = a.pop();
        }
        let d = a.pop();
        let e = a.pop();
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
    }
    get_name() {
        return "if";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 3;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
    get__s() {
        return true;
    }
    _v(a) {
        if (a == 1 || a == 2) {
            return false;
        }
        return true;
    }
}
UltraCalcFunctionIf.$t = markType(UltraCalcFunctionIf, 'UltraCalcFunctionIf', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionAbs extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d;
        if (!((() => { let e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        return new ExcelCalcValue(Math.abs(d));
    }
    get_name() {
        return "abs";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionAbs.$t = markType(UltraCalcFunctionAbs, 'UltraCalcFunctionAbs', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionMod extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        let d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let e, f;
        if (!((() => { let g = c._toDouble1(e); e = g.p0; return g.ret; })()) || !((() => { let g = d._toDouble1(f); f = g.p0; return g.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (e == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(2));
        }
        else {
            let g = f % e;
            let h = Math.sign(g);
            if (h != 0 && h != Math.sign(e)) {
                g *= -1;
            }
            return new ExcelCalcValue(g);
        }
    }
    get_name() {
        return "mod";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionMod.$t = markType(UltraCalcFunctionMod, 'UltraCalcFunctionMod', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionQuotient extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        let d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let e, f;
        if (!((() => { let g = c._toDouble1(e); e = g.p0; return g.ret; })()) || !((() => { let g = d._toDouble1(f); f = g.p0; return g.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (e == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(2));
        }
        else {
            return new ExcelCalcValue((f - (f % e)) / e);
        }
    }
    get_name() {
        return "quotient";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionQuotient.$t = markType(UltraCalcFunctionQuotient, 'UltraCalcFunctionQuotient', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionProduct extends BuiltInFunctionBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.d(a, b, 1229, UltraCalcFunctionProduct._ak);
    }
    canParameterBeEnumerable(a) {
        return true;
    }
    static _ak(a) {
        return new ExcelCalcValue(CalcFunctionUtilities.v(a));
    }
    get_name() {
        return "product";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionProduct.$t = markType(UltraCalcFunctionProduct, 'UltraCalcFunctionProduct', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionPower extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        let d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let e, f;
        if (!((() => { let g = c._toDouble1(f); f = g.p0; return g.ret; })()) || !((() => { let g = d._toDouble1(e); e = g.p0; return g.ret; })())) {
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
    }
    get_name() {
        return "power";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionPower.$t = markType(UltraCalcFunctionPower, 'UltraCalcFunctionPower', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionInt extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop()._toDecimal2();
        return new ExcelCalcValue(truncate(Math.floor(c)));
    }
    get_name() {
        return "int";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionInt.$t = markType(UltraCalcFunctionInt, 'UltraCalcFunctionInt', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionTrunc extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = 0;
        if (b == 2) {
            let d = a.pop();
            if (d.isError) {
                return new ExcelCalcValue(d.toErrorValue());
            }
            c = d._toInt321();
        }
        let e;
        let f = a.pop();
        if (f.isError) {
            return new ExcelCalcValue(f.toErrorValue());
        }
        if (!((() => { let g = f._toDouble1(e); e = g.p0; return g.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let g = Math.pow(10, c);
        let h = e * g;
        h = h >= 0 ? Math.floor(h) : Math.ceil(h);
        h /= g;
        return new ExcelCalcValue(h);
    }
    get_name() {
        return "trunc";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionTrunc.$t = markType(UltraCalcFunctionTrunc, 'UltraCalcFunctionTrunc', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionCount extends BuiltInFunctionBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.k(a, b, 1485);
    }
    canParameterBeEnumerable(a) {
        return true;
    }
    get_name() {
        return "count";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionCount.$t = markType(UltraCalcFunctionCount, 'UltraCalcFunctionCount', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionTrue extends BuiltInFunctionBase {
    evaluate(a, b) {
        return new ExcelCalcValue(true);
    }
    get_name() {
        return "true";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 0;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionTrue.$t = markType(UltraCalcFunctionTrue, 'UltraCalcFunctionTrue', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionFalse extends BuiltInFunctionBase {
    evaluate(a, b) {
        return new ExcelCalcValue(false);
    }
    get_name() {
        return "false";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 0;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionFalse.$t = markType(UltraCalcFunctionFalse, 'UltraCalcFunctionFalse', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionNot extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        return new ExcelCalcValue(!c._toBoolean1());
    }
    get_name() {
        return "not";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionNot.$t = markType(UltraCalcFunctionNot, 'UltraCalcFunctionNot', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionAnd extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = true;
        let d = false;
        let e = this._getArguments(a, b, true);
        for (let g = 0; g < e.length; g++) {
            let f = e[g];
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
    }
    canParameterBeEnumerable(a) {
        return true;
    }
    get_name() {
        return "and";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionAnd.$t = markType(UltraCalcFunctionAnd, 'UltraCalcFunctionAnd', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionOr extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = false;
        let d = false;
        let e = this._getArguments(a, b, true);
        for (let g = 0; g < e.length; g++) {
            let f = e[g];
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
    }
    canParameterBeEnumerable(a) {
        return true;
    }
    get_name() {
        return "or";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionOr.$t = markType(UltraCalcFunctionOr, 'UltraCalcFunctionOr', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionMin extends BuiltInFunctionBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.d(a, b, 1229, UltraCalcFunctionMin._ak);
    }
    canParameterBeEnumerable(a) {
        return true;
    }
    static _ak(a) {
        if (a.count == 0) {
            return new ExcelCalcValue(0);
        }
        let b = a._inner[0];
        for (let c = 1; c < a.count; c++) {
            if (a._inner[c] < b) {
                b = a._inner[c];
            }
        }
        return new ExcelCalcValue(b);
    }
    get_name() {
        return "min";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionMin.$t = markType(UltraCalcFunctionMin, 'UltraCalcFunctionMin', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionMax extends BuiltInFunctionBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.d(a, b, 1229, UltraCalcFunctionMax._ak);
    }
    canParameterBeEnumerable(a) {
        return true;
    }
    static _ak(a) {
        if (a.count == 0) {
            return new ExcelCalcValue(0);
        }
        let b = a._inner[0];
        for (let c = 1; c < a.count; c++) {
            if (a._inner[c] > b) {
                b = a._inner[c];
            }
        }
        return new ExcelCalcValue(b);
    }
    get_name() {
        return "max";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionMax.$t = markType(UltraCalcFunctionMax, 'UltraCalcFunctionMax', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionExp extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d;
        if (!((() => { let e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        let e = Math.exp(d);
        if (true && isInfinity(e)) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        return new ExcelCalcValue(e);
    }
    get_name() {
        return "exp";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionExp.$t = markType(UltraCalcFunctionExp, 'UltraCalcFunctionExp', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionRound extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = null;
        if (b == 3) {
            c = a.pop();
        }
        let d = a.pop();
        let e = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        if (c != null && c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let f;
        if (!((() => { let g = d._toDouble1(f); f = g.p0; return g.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let g;
        if (!((() => { let h = e._toDouble1(g); g = h.p0; return h.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (true) {
            g = MathUtilities.i(g);
        }
        let h = 0;
        if (c != null) {
            if (!((() => { let i = c._toDouble1(h); h = i.p0; return i.ret; })())) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            if (truncate(h) < 0 || truncate(h) > 1) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
        }
        return new ExcelCalcValue(UltraCalcFunctionRound._al(g, truncate(f), truncate(h)));
    }
    get_name() {
        return "round";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    static _ak(a, b) {
        return UltraCalcFunctionRound._al(a, b, 0);
    }
    static _al(a, b, c) {
        if (c == 0) {
            return MathUtilities.g(a, b);
        }
        if (b <= 15) {
            return round10N(a, b);
        }
        let d = Math.pow(10, b);
        let e = MathUtilities.i(a * d);
        return Math.round(e) / d;
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionRound.$t = markType(UltraCalcFunctionRound, 'UltraCalcFunctionRound', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionPi extends BuiltInFunctionBase {
    evaluate(a, b) {
        return new ExcelCalcValue(3.14159265358979);
    }
    get_name() {
        return "pi";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 0;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionPi.$t = markType(UltraCalcFunctionPi, 'UltraCalcFunctionPi', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSqrt extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d;
        if (!((() => { let e = c._toDouble1(d); d = e.p0; return e.ret; })()) || d < 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(Math.sqrt(d));
    }
    get_name() {
        return "sqrt";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionSqrt.$t = markType(UltraCalcFunctionSqrt, 'UltraCalcFunctionSqrt', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionCos extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d;
        if (!((() => { let e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(Math.cos(d));
    }
    get_name() {
        return "cos";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionCos.$t = markType(UltraCalcFunctionCos, 'UltraCalcFunctionCos', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionACos extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d;
        if (!((() => { let e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(Math.acos(d));
    }
    get_name() {
        return "acos";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionACos.$t = markType(UltraCalcFunctionACos, 'UltraCalcFunctionACos', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionCosh extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d;
        if (!((() => { let e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(Math.cosh(d));
    }
    get_name() {
        return "cosh";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionCosh.$t = markType(UltraCalcFunctionCosh, 'UltraCalcFunctionCosh', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSin extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d;
        if (!((() => { let e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(Math.sin(d));
    }
    get_name() {
        return "sin";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionSin.$t = markType(UltraCalcFunctionSin, 'UltraCalcFunctionSin', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSinh extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d;
        if (!((() => { let e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(Math.sinh(d));
    }
    get_name() {
        return "sinh";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionSinh.$t = markType(UltraCalcFunctionSinh, 'UltraCalcFunctionSinh', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionASin extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d;
        if (!((() => { let e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(Math.asin(d));
    }
    get_name() {
        return "asin";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionASin.$t = markType(UltraCalcFunctionASin, 'UltraCalcFunctionASin', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionTan extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d;
        if (!((() => { let e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(Math.tan(d));
    }
    get_name() {
        return "tan";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionTan.$t = markType(UltraCalcFunctionTan, 'UltraCalcFunctionTan', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionTanh extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d;
        if (!((() => { let e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(Math.tanh(d));
    }
    get_name() {
        return "tanh";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionTanh.$t = markType(UltraCalcFunctionTanh, 'UltraCalcFunctionTanh', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionATan extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d;
        if (!((() => { let e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(Math.atan(d));
    }
    get_name() {
        return "atan";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionATan.$t = markType(UltraCalcFunctionATan, 'UltraCalcFunctionATan', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionATan2 extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        let d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let e, f;
        if (!((() => { let g = c._toDouble1(f); f = g.p0; return g.ret; })()) || !((() => { let g = d._toDouble1(e); e = g.p0; return g.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (e == 0 && f == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(2));
        }
        return new ExcelCalcValue(Math.atan2(f, e));
    }
    get_name() {
        return "atan2";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionATan2.$t = markType(UltraCalcFunctionATan2, 'UltraCalcFunctionATan2', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionFloor extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = 1;
        if (b > 1) {
            let d = a.pop();
            if (d.isError) {
                return new ExcelCalcValue(d.toErrorValue());
            }
            if (!((() => { let e = d._toDouble1(c); c = e.p0; return e.ret; })())) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
        }
        let e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        let f;
        if (!((() => { let g = e._toDouble1(f); f = g.p0; return g.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (f == 0 && c == 0) {
            return new ExcelCalcValue(0);
        }
        if (c == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(2));
        }
        let g = f < 0 ? -1 : 1;
        let h = c < 0 ? -1 : 1;
        if (true) {
            if (f != 0 && c != 0 && 0 < g && h < 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
        }
        let i = Math.floor(MathUtilities.i(f / c)) * c;
        return new ExcelCalcValue(i);
    }
    get_name() {
        return "floor";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionFloor.$t = markType(UltraCalcFunctionFloor, 'UltraCalcFunctionFloor', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionCeiling extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = 1;
        if (b > 1) {
            let d = a.pop();
            if (d.isError) {
                return new ExcelCalcValue(d.toErrorValue());
            }
            if (!((() => { let e = d._toDouble1(c); c = e.p0; return e.ret; })())) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
        }
        let e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        let f;
        if (!((() => { let g = e._toDouble1(f); f = g.p0; return g.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (c == 0) {
            return new ExcelCalcValue(0);
        }
        let g = f < 0 ? -1 : 1;
        let h = c < 0 ? -1 : 1;
        if (true) {
            if (f != 0 && c != 0 && 0 < g && h < 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
        }
        let i = Math.ceil(MathUtilities.i(f / c)) * c;
        return new ExcelCalcValue(i);
    }
    get_name() {
        return "ceiling";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionCeiling.$t = markType(UltraCalcFunctionCeiling, 'UltraCalcFunctionCeiling', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionRand extends BuiltInFunctionBase {
    constructor() {
        super(...arguments);
        this._ak = new Random(0);
    }
    evaluate(a, b) {
        return new ExcelCalcValue(this._ak.nextDouble());
    }
    get_name() {
        return "rand";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 0;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionRand.$t = markType(UltraCalcFunctionRand, 'UltraCalcFunctionRand', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionLn extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d;
        if (!((() => { let e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        let e = Math.log(d);
        if (true && isInfinity(e)) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(e);
    }
    get_name() {
        return "ln";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionLn.$t = markType(UltraCalcFunctionLn, 'UltraCalcFunctionLn', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionLog10 extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d;
        if (!((() => { let e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        if (true && d == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(log10(d));
    }
    get_name() {
        return "log10";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionLog10.$t = markType(UltraCalcFunctionLog10, 'UltraCalcFunctionLog10', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionLog extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = null;
        if (b == 2) {
            c = a.pop();
        }
        let d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c != null && c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let e, f;
        if (c != null) {
            if (((() => { let g = c._toDouble1(e); e = g.p0; return g.ret; })()) == false) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
        }
        else {
            e = 10;
        }
        if (((() => { let g = d._toDouble1(f); f = g.p0; return g.ret; })()) == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        if (true && f == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(logBase(f, e));
    }
    get_name() {
        return "log";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionLog.$t = markType(UltraCalcFunctionLog, 'UltraCalcFunctionLog', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionNPV extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c;
        let d = 0;
        let e = new Array(b - 1);
        for (let f = 0; f < b - 1; f++) {
            e[f] = a.pop();
        }
        let g;
        if (!((() => { let h = a.pop()._toDouble1(g); g = h.p0; return h.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        g += 1;
        let h = 1;
        for (let i = e.length; i > 0; i--) {
            let j = e[i - 1];
            if (j.isReference && j.toReference().isEnumerable) {
                let k = j.toReference().references;
                for (let l of fromEn(k)) {
                    let m = l.value;
                    if (m.isError) {
                        return new ExcelCalcValue(m.toErrorValue());
                    }
                    if (((() => { let n = m._toDouble1(c); c = n.p0; return n.ret; })())) {
                        d += c / Math.pow(g, h++);
                    }
                }
            }
            else {
                if (j.isError) {
                    return new ExcelCalcValue(j.toErrorValue());
                }
                if (((() => { let n = j._toDouble1(c); c = n.p0; return n.ret; })())) {
                    d += c / Math.pow(g, h++);
                }
            }
        }
        return new ExcelCalcValue(d);
    }
    canParameterBeEnumerable(a) {
        return 1 <= a;
    }
    get_name() {
        return "npv";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionNPV.$t = markType(UltraCalcFunctionNPV, 'UltraCalcFunctionNPV', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionFV extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = 0;
        if (b == 5) {
            let d = a.pop();
            if (d.isError) {
                return d;
            }
            c = d._toInt321();
        }
        let e = 0;
        if (b >= 4) {
            let f = a.pop();
            if (f.isError) {
                return new ExcelCalcValue(f.toErrorValue());
            }
            if (!((() => { let g = f._toDouble1(e); e = g.p0; return g.ret; })())) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
        }
        let g, h, i;
        let j = a.pop();
        let k = a.pop();
        let l = a.pop();
        if (l.isError) {
            return l;
        }
        if (k.isError) {
            return k;
        }
        if (j.isError) {
            return j;
        }
        if (!((() => { let m = j._toDouble1(g); g = m.p0; return m.ret; })()) || !((() => { let m = k._toDouble1(h); h = m.p0; return m.ret; })()) || !((() => { let m = l._toDouble1(i); i = m.p0; return m.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(UltraCalcFunctionFV._ak(i, h, g, e, c));
    }
    static _ak(a, b, c, d, e) {
        return (c * ((Math.pow(1 + a, e == 0 ? b : b + 1) - 1) / a) - (e == 0 ? 0 : c) + (d * Math.pow(1 + a, b))) * -1;
    }
    get_name() {
        return "fv";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 3;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 5;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionFV.$t = markType(UltraCalcFunctionFV, 'UltraCalcFunctionFV', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionPV extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = 0;
        if (b == 5) {
            c = a.pop()._toInt321();
        }
        let d = 0;
        if (b >= 4 && !((() => { let e = a.pop()._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let e, f, g;
        if (!((() => { let h = a.pop()._toDouble1(e); e = h.p0; return h.ret; })()) || !((() => { let h = a.pop()._toDouble1(f); f = h.p0; return h.ret; })()) || !((() => { let h = a.pop()._toDouble1(g); g = h.p0; return h.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (c != 0) {
            e *= 1 + g;
        }
        return new ExcelCalcValue((e * (1 - Math.pow(1 + g, -f)) / g + (d / Math.pow(1 + g, f))) * -1);
    }
    get_name() {
        return "pv";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 3;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 5;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionPV.$t = markType(UltraCalcFunctionPV, 'UltraCalcFunctionPV', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionPmt extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = 0;
        if (b == 5) {
            c = a.pop()._toInt321();
        }
        let d = 0;
        if (b >= 4 && !((() => { let e = a.pop()._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let e, f, g;
        if (!((() => { let h = a.pop()._toDouble1(e); e = h.p0; return h.ret; })()) || !((() => { let h = a.pop()._toDouble1(f); f = h.p0; return h.ret; })()) || !((() => { let h = a.pop()._toDouble1(g); g = h.p0; return h.ret; })())) {
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
    }
    get_name() {
        return "pmt";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 3;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 5;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionPmt.$t = markType(UltraCalcFunctionPmt, 'UltraCalcFunctionPmt', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionNPer extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = 0;
        if (b == 5) {
            c = a.pop()._toInt321();
        }
        let d = 0;
        if (b >= 4 && !((() => { let e = a.pop()._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let e, f, g;
        if (!((() => { let h = a.pop()._toDouble1(e); e = h.p0; return h.ret; })()) || !((() => { let h = a.pop()._toDouble1(f); f = h.p0; return h.ret; })()) || f == 0 || !((() => { let h = a.pop()._toDouble1(g); g = h.p0; return h.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (g <= -1) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (g == 0 && f == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let h = c;
        let i = FinancialUtils.nPer(g, f, e, d, h);
        return new ExcelCalcValue(i);
    }
    get_name() {
        return "nper";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 3;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 5;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionNPer.$t = markType(UltraCalcFunctionNPer, 'UltraCalcFunctionNPer', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionEven extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d;
        if (!((() => { let e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let e = Math.ceil(Math.abs(d));
        let f = e + Math.abs(ieeeRemainder(e, 2));
        if (d < 0) {
            f *= -1;
        }
        return new ExcelCalcValue(f);
    }
    get_name() {
        return "even";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionEven.$t = markType(UltraCalcFunctionEven, 'UltraCalcFunctionEven', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionOdd extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c;
        let d = a.pop();
        if (d.isError) {
            return d;
        }
        if (((() => { let e = d._toDouble1(c); c = e.p0; return e.ret; })()) == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let e = Math.ceil(Math.abs(c));
        let f = Math.abs(ieeeRemainder(e, 2));
        if (f == 0) {
            e++;
        }
        if (c < 0) {
            e *= -1;
        }
        return new ExcelCalcValue(e);
    }
    get_name() {
        return "odd";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionOdd.$t = markType(UltraCalcFunctionOdd, 'UltraCalcFunctionOdd', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionPPmt extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = 0;
        let d = 0;
        let e = 0;
        let f, g, h, i;
        if ((b == 6 && !((() => { let j = a.pop()._toDouble1(d); d = j.p0; return j.ret; })())) || (b >= 5 && !((() => { let j = a.pop()._toDouble1(e); e = j.p0; return j.ret; })())) || !((() => { let j = a.pop()._toDouble1(f); f = j.p0; return j.ret; })()) || !((() => { let j = a.pop()._toDouble1(g); g = j.p0; return j.ret; })()) || !((() => { let j = a.pop()._toDouble1(h); h = j.p0; return j.ret; })()) || !((() => { let j = a.pop()._toDouble1(i); i = j.p0; return j.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (g <= 0 || h <= 0 || h > g) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let j = d;
        c = FinancialUtils.pPmt(i, h, g, f, e, j);
        return new ExcelCalcValue(c);
    }
    get_name() {
        return "ppmt";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 4;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 6;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionPPmt.$t = markType(UltraCalcFunctionPPmt, 'UltraCalcFunctionPPmt', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionIPmt extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = 0;
        let d = 0;
        let e, f, g, h;
        if ((b == 6 && !((() => { let i = a.pop()._toDouble1(c); c = i.p0; return i.ret; })())) || (b >= 5 && !((() => { let i = a.pop()._toDouble1(d); d = i.p0; return i.ret; })())) || !((() => { let i = a.pop()._toDouble1(e); e = i.p0; return i.ret; })()) || !((() => { let i = a.pop()._toDouble1(f); f = i.p0; return i.ret; })()) || !((() => { let i = a.pop()._toDouble1(g); g = i.p0; return i.ret; })()) || !((() => { let i = a.pop()._toDouble1(h); h = i.p0; return i.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (f <= 0 || g <= 0 || g > f) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let i = 0;
        let j = c;
        i = FinancialUtils.iPmt(h, g, f, e, d, j);
        return new ExcelCalcValue(i);
    }
    get_name() {
        return "ipmt";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 4;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 6;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionIPmt.$t = markType(UltraCalcFunctionIPmt, 'UltraCalcFunctionIPmt', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionLower extends BuiltInFunctionBase {
    evaluate(a, b) {
        if (true) {
            let c = a.pop();
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
    }
    get_name() {
        return "lower";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionLower.$t = markType(UltraCalcFunctionLower, 'UltraCalcFunctionLower', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionUpper extends BuiltInFunctionBase {
    evaluate(a, b) {
        if (true) {
            let c = a.pop();
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
    }
    get_name() {
        return "upper";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionUpper.$t = markType(UltraCalcFunctionUpper, 'UltraCalcFunctionUpper', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionLeft extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = 1;
        if (b > 1) {
            let d = a.pop();
            if (d.isError) {
                return new ExcelCalcValue(d.toErrorValue());
            }
            c = d._toInt321();
            if (c < 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
        }
        let e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        let f = e.toString();
        return new ExcelCalcValue(f.substr(0, c > f.length ? f.length : c));
    }
    get_name() {
        return "left";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionLeft.$t = markType(UltraCalcFunctionLeft, 'UltraCalcFunctionLeft', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionRight extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = 1;
        if (b > 1) {
            let d = a.pop();
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
        let e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        let f = e.toString();
        return new ExcelCalcValue(f.substr(c > f.length ? 0 : f.length - c));
    }
    get_name() {
        return "right";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionRight.$t = markType(UltraCalcFunctionRight, 'UltraCalcFunctionRight', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionMid extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = 0;
        if (b > 2) {
            let d = a.pop();
            if (d.isError) {
                return new ExcelCalcValue(d.toErrorValue());
            }
            c = d._toInt321();
            if (c < 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
        }
        let e = 1;
        if (b > 1) {
            let f = a.pop();
            if (f.isError) {
                return new ExcelCalcValue(f.toErrorValue());
            }
            e = f._toInt321();
            if (c < 1) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
        }
        let g = a.pop();
        if (g.isError) {
            return new ExcelCalcValue(g.toErrorValue());
        }
        let h = g.toString();
        if (e > h.length) {
            return new ExcelCalcValue(stringEmpty());
        }
        else if (e + c - 1 > h.length) {
            return new ExcelCalcValue(h.substr(e - 1));
        }
        else {
            return new ExcelCalcValue(h.substr(e - 1, c));
        }
    }
    get_name() {
        return "mid";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 3;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionMid.$t = markType(UltraCalcFunctionMid, 'UltraCalcFunctionMid', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionTrim extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d = c.toString().trim();
        let e = new StringBuilder(1, d.length);
        let f = false;
        for (let g = 0; g < d.length; g++) {
            let h = d.charAt(g);
            let i = /\s/i.test(h);
            if (!f || !i) {
                e.h(h);
            }
            f = i;
        }
        return new ExcelCalcValue(e.toString());
    }
    get_name() {
        return "trim";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionTrim.$t = markType(UltraCalcFunctionTrim, 'UltraCalcFunctionTrim', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionLen extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        return new ExcelCalcValue(c.toString().length);
    }
    get_name() {
        return "len";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionLen.$t = markType(UltraCalcFunctionLen, 'UltraCalcFunctionLen', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionValue extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d = false;
        let e = 0;
        if (typeof c.value === 'string') {
            let f = (c.value).trim();
            if (stringEndsWith(f, "kr")) {
                f = f.substr(0, f.length - 2);
            }
            else if (stringStartsWith(f, "R$") || stringStartsWith(f, "S/")) {
                f = f.substr(2, f.length - 2);
            }
            else {
                f = trim(f, ...UltraCalcFunctionValue._ak);
            }
            d = ((() => { let g = MathUtilities.c(f, a._w, e); e = g.p2; return g.ret; })());
        }
        if (!d) {
            d = ((() => { let g = c._toDouble1(e); e = g.p0; return g.ret; })());
        }
        return (d) ? new ExcelCalcValue(e) : new ExcelCalcValue(new ExcelCalcErrorValue(4));
    }
    get_name() {
        return "value";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionValue.$t = markType(UltraCalcFunctionValue, 'UltraCalcFunctionValue', BuiltInFunctionBase.$);
UltraCalcFunctionValue._ak = ['$', '\u0080', '£', '¤', '¥', '৲', '৳', '฿', '៛', '₠', '₡', '₢', '₣', '₤', '₦', '₧', '₨', '₩', '₪', '₫', '€', '₭', '₮', '₯', '﷼', '﹩', '＄', '￡', '￥', '￦'];
/**
 * @hidden
 */
export class UltraCalcFunctionFind extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = 0;
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
        let d = a.pop().toString();
        if (c > d.length - 1) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        if (a.peek().isError) {
            return new ExcelCalcValue(a.pop().toErrorValue());
        }
        let e = -1;
        let f = a.pop().toString();
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
    }
    get_name() {
        return "find";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 3;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionFind.$t = markType(UltraCalcFunctionFind, 'UltraCalcFunctionFind', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionReplace extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        let d = a.pop();
        let e = a.pop();
        let f = a.pop();
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
        let g = c.toString();
        let h = d._toInt321();
        let i = e._toInt321() - 1;
        let j = f.toString();
        if (i < 0 || i > j.length) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        if (h < 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        if (h > j.length - i) {
            h = j.length - i;
        }
        let k = j.substr(0, i) + g + j.substr(i + h);
        return new ExcelCalcValue(k);
    }
    get_name() {
        return "replace";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 4;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 4;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionReplace.$t = markType(UltraCalcFunctionReplace, 'UltraCalcFunctionReplace', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSYD extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop()._toInt321();
        if (c <= 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let d = a.pop()._toInt321();
        if (d <= 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let e, f;
        if (!((() => { let g = a.pop()._toDouble1(e); e = g.p0; return g.ret; })()) || !((() => { let g = a.pop()._toDouble1(f); f = g.p0; return g.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(((f - e) * (d - c + 1) * 2) / (d * (d + 1)));
    }
    get_name() {
        return "syd";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 4;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 4;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionSYD.$t = markType(UltraCalcFunctionSYD, 'UltraCalcFunctionSYD', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSLN extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop()._toInt321();
        if (c == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(2));
        }
        let d, e;
        if (!((() => { let f = a.pop()._toDouble1(d); d = f.p0; return f.ret; })()) || !((() => { let f = a.pop()._toDouble1(e); e = f.p0; return f.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue((e - d) / c);
    }
    get_name() {
        return "sln";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 3;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 3;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionSLN.$t = markType(UltraCalcFunctionSLN, 'UltraCalcFunctionSLN', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionDB extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = 12;
        if (b > 4) {
            c = a.pop()._toInt321();
        }
        let d = a.pop()._toInt321();
        if (d <= 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let e;
        if (!((() => { let f = a.pop()._toDouble1(e); e = f.p0; return f.ret; })()) || e <= 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let f, g;
        if (!((() => { let h = a.pop()._toDouble1(f); f = h.p0; return h.ret; })()) || !((() => { let h = a.pop()._toDouble1(g); g = h.p0; return h.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let h = round10N(1 - Math.pow(f / g, 1 / e), 3);
        if (d > e + 1) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if ((d == e + 1) && c == 12) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let i = 0;
        let j = 0;
        let k = g;
        for (let l = 1; l <= d; l++) {
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
    }
    get_name() {
        return "db";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 4;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 5;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionDB.$t = markType(UltraCalcFunctionDB, 'UltraCalcFunctionDB', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionDDB extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = b > 4 ? a.pop() : new ExcelCalcValue(2);
        let d = a.pop();
        let e = a.pop();
        let f = a.pop();
        let g = a.pop();
        if (c.isNull || d.isNull || e.isNull || f.isNull || g.isNull) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let h, i, j, k, l;
        if (!((() => { let m = c._toDouble1(h); h = m.p0; return m.ret; })()) || !((() => { let m = d._toDouble1(i); i = m.p0; return m.ret; })()) || !((() => { let m = e._toDouble1(j); j = m.p0; return m.ret; })()) || !((() => { let m = f._toDouble1(k); k = m.p0; return m.ret; })()) || !((() => { let m = g._toDouble1(l); l = m.p0; return m.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        let m = l * Math.pow(1 - h / j, i - 1);
        let n = m - (m * (1 - h / j));
        if (k > m - n) {
            if (m - k > 0) {
                n = m - k;
            }
            else {
                n = 0;
            }
        }
        return new ExcelCalcValue(n);
    }
    get_name() {
        return "ddb";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 4;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 5;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionDDB.$t = markType(UltraCalcFunctionDDB, 'UltraCalcFunctionDDB', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionIntRate extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = 0;
        if (b > 4 && !((() => { let d = a.pop()._toDouble1(c); c = d.p0; return d.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (c < 0 || c > 4) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let d, e;
        if (!((() => { let f = a.pop()._toDouble1(d); d = f.p0; return f.ret; })()) || !((() => { let f = a.pop()._toDouble1(e); e = f.p0; return f.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (e <= 0 || d <= 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let f = a.pop();
        let g = f._toDateTime1();
        let h = a.pop();
        let i = h._toDateTime1();
        if (i >= g) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let j;
        let k;
        if (c == 0 || c == 4) {
            let l = UltraCalcFunctionDays360._ak(i, g, c != 4 ? false : true);
            if (((() => { let m = l._toDouble1(k); k = m.p0; return m.ret; })()) == false) {
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
    }
    get_name() {
        return "intrate";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 4;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 5;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionIntRate.$t = markType(UltraCalcFunctionIntRate, 'UltraCalcFunctionIntRate', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionDateValue extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        let d;
        if (((() => { let e = c._aj(c._a0, d); d = e.p1; return e.ret; })()) == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        return new ExcelCalcValue(d);
    }
    get_name() {
        return "datevalue";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionDateValue.$t = markType(UltraCalcFunctionDateValue, 'UltraCalcFunctionDateValue', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionDate extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        let d = a.pop();
        let e = a.pop();
        if (e.isError) {
            return e;
        }
        let f;
        if (((() => { let g = e._toDouble1(f); f = g.p0; return g.ret; })()) == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        if (d.isError) {
            return d;
        }
        let g;
        if (((() => { let h = d._toDouble1(g); g = h.p0; return h.ret; })()) == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        if (c.isError) {
            return c;
        }
        let h;
        if (((() => { let i = c._toDouble1(h); h = i.p0; return i.ret; })()) == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        let i = truncate(Math.floor(f));
        let j = truncate(Math.floor(g));
        let k = truncate(Math.floor(h));
        if (true) {
            let l = 1900;
            if (i < l) {
                i += l;
            }
        }
        while (true) {
            let m = (j - 1);
            let n = intDivide(m, 12);
            if (n > 0) {
                i += n;
                j = (m % 12) + 1;
            }
            if (10000 <= i) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            let o = daysInMonth(i, j);
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
            let p = ExcelCalcFunction._l(a);
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
        let q = dateFromValues(i, j, k, 0, 0, 0, 0);
        return new ExcelCalcValue(q);
    }
    get_name() {
        return "date";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 3;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 3;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionDate.$t = markType(UltraCalcFunctionDate, 'UltraCalcFunctionDate', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionDays360 extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = false;
        if (b > 2) {
            if (a.peek().isError) {
                return new ExcelCalcValue(a.pop().toErrorValue());
            }
            c = a.pop()._toBoolean1();
        }
        let d = a.pop()._toDateTime1();
        let e = a.pop()._toDateTime1();
        return UltraCalcFunctionDays360._ak(e, d, c);
    }
    static _ak(a, b, c) {
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
    }
    get_name() {
        return "days360";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 3;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionDays360.$t = markType(UltraCalcFunctionDays360, 'UltraCalcFunctionDays360', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionDay extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        if (true) {
            let d;
            if (c.isNull || (((() => { let e = c._toDouble1(d); d = e.p0; return e.ret; })()) && d == 0)) {
                return new ExcelCalcValue(0);
            }
        }
        if (c.isString && stringIsNullOrEmpty(c.toString())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        let e = c._toDateTime1();
        return new ExcelCalcValue(e.getDate());
    }
    get_name() {
        return "day";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionDay.$t = markType(UltraCalcFunctionDay, 'UltraCalcFunctionDay', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionMonth extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        if (true) {
            let d;
            if (c.isNull || (((() => { let e = c._toDouble1(d); d = e.p0; return e.ret; })()) && d == 0)) {
                return new ExcelCalcValue(1);
            }
        }
        let e = c._toDateTime1();
        return new ExcelCalcValue(dateGetMonth(e));
    }
    get_name() {
        return "month";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionMonth.$t = markType(UltraCalcFunctionMonth, 'UltraCalcFunctionMonth', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionYear extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        if (true) {
            let d;
            if (c.isNull || (((() => { let e = c._toDouble1(d); d = e.p0; return e.ret; })()) && d == 0)) {
                let e = a._r;
                if (e != null && e.dateSystem == 1) {
                    return new ExcelCalcValue(1904);
                }
                return new ExcelCalcValue(1900);
            }
        }
        let f = c._toDateTime1();
        return new ExcelCalcValue(f.getFullYear());
    }
    get_name() {
        return "year";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionYear.$t = markType(UltraCalcFunctionYear, 'UltraCalcFunctionYear', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionHour extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        if (true) {
            let d;
            if (c.isNull || (((() => { let e = c._toDouble1(d); d = e.p0; return e.ret; })()) && d == 0)) {
                return new ExcelCalcValue(0);
            }
        }
        let e = c._toDateTime1();
        return new ExcelCalcValue(e.getHours());
    }
    get_name() {
        return "hour";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionHour.$t = markType(UltraCalcFunctionHour, 'UltraCalcFunctionHour', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionMinute extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        if (true) {
            let d;
            if (c.isNull || (((() => { let e = c._toDouble1(d); d = e.p0; return e.ret; })()) && d == 0)) {
                return new ExcelCalcValue(0);
            }
        }
        let e = c._toDateTime1();
        return new ExcelCalcValue(e.getMinutes());
    }
    get_name() {
        return "minute";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionMinute.$t = markType(UltraCalcFunctionMinute, 'UltraCalcFunctionMinute', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSecond extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        if (true) {
            let d;
            if (c.isNull || (((() => { let e = c._toDouble1(d); d = e.p0; return e.ret; })()) && d == 0)) {
                return new ExcelCalcValue(0);
            }
        }
        let e = c._toDateTime1();
        return new ExcelCalcValue(e.getSeconds());
    }
    get_name() {
        return "second";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionSecond.$t = markType(UltraCalcFunctionSecond, 'UltraCalcFunctionSecond', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionNow extends BuiltInFunctionBase {
    evaluate(a, b) {
        return new ExcelCalcValue(dateNow());
    }
    get_name() {
        return "now";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 0;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionNow.$t = markType(UltraCalcFunctionNow, 'UltraCalcFunctionNow', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionTimeValue extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return c;
        }
        let d = dateGetTimeOfDay(c._toDateTime1());
        if (true) {
            let e = ExcelCalcValue._ay(d);
            return new ExcelCalcValue(e);
        }
        return new ExcelCalcValue(dateFromTicks(timeSpanTicks(d)));
    }
    get_name() {
        return "timevalue";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionTimeValue.$t = markType(UltraCalcFunctionTimeValue, 'UltraCalcFunctionTimeValue', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionTime extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        let d = a.pop();
        let e = a.pop();
        if (e.isError) {
            return e;
        }
        if (d.isError) {
            return d;
        }
        if (c.isError) {
            return c;
        }
        let f = c._toInt321();
        let g = d._toInt321();
        let h = e._toInt321();
        if (true) {
            let i = 32767;
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
            let j = timeSpanInit1(h, g, f);
            let k = ExcelCalcValue._ay(j);
            return new ExcelCalcValue(k);
        }
        else {
            let l = dateFromValues(1, 1, 1, h, g, f, 0);
            return new ExcelCalcValue(l.getTime());
        }
    }
    get_name() {
        return "time";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 3;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 3;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionTime.$t = markType(UltraCalcFunctionTime, 'UltraCalcFunctionTime', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionMedian extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = new List$1(Number_$type, 0);
        if (!ExcelCalcFunction._t(a, b, c, true, true)) {
            return a.pop();
        }
        c.y();
        if (c.count == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let d;
        let e = intDivide(c.count, 2);
        if (c.count % 2 == 1) {
            d = c._inner[e];
        }
        else {
            let f = (c._inner[e - 1] + c._inner[e]) / 2;
            d = f;
        }
        return new ExcelCalcValue(d);
    }
    canParameterBeEnumerable(a) {
        return true;
    }
    get_name() {
        return "median";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionMedian.$t = markType(UltraCalcFunctionMedian, 'UltraCalcFunctionMedian', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionVar extends BuiltInFunctionBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.d(a, b, 1229, (c) => UltraCalcFunctionVar._ak(c, true));
    }
    canParameterBeEnumerable(a) {
        return true;
    }
    static _ak(a, b) {
        if (a.count < 2) {
            if (!b && a.count == 1) {
                return new ExcelCalcValue(0);
            }
            return new ExcelCalcValue(new ExcelCalcErrorValue(2));
        }
        return new ExcelCalcValue(CalcFunctionUtilities.ab(a, b));
    }
    get_name() {
        return "var";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionVar.$t = markType(UltraCalcFunctionVar, 'UltraCalcFunctionVar', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionStdev extends UltraCalcFunctionVar {
    evaluate(a, b) {
        return CalcFunctionUtilities.d(a, b, 1229, (c) => UltraCalcFunctionStdev._al(c, true));
    }
    canParameterBeEnumerable(a) {
        return true;
    }
    static _al(a, b) {
        if (a.count < 2) {
            if (!b && a.count == 1) {
                return new ExcelCalcValue(0);
            }
            return new ExcelCalcValue(new ExcelCalcErrorValue(2));
        }
        let c = CalcFunctionUtilities.r(a);
        return new ExcelCalcValue(CalcFunctionUtilities.y(c, a.count, b));
    }
    get_name() {
        return "stdev";
    }
    get_minArgs() {
        return 1;
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionStdev.$t = markType(UltraCalcFunctionStdev, 'UltraCalcFunctionStdev', UltraCalcFunctionVar.$);
/**
 * @hidden
 */
export class UltraCalcFunctionType extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c;
        let d = a.pop();
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
            let e;
            if (!((() => { let f = d._toDouble1(e); e = f.p0; return f.ret; })())) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
            c = 1;
        }
        return new ExcelCalcValue(c);
    }
    get_name() {
        return "type";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionType.$t = markType(UltraCalcFunctionType, 'UltraCalcFunctionType', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionErrorType extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c;
        let d = a.pop();
        if (d.isError) {
            let e = d.toErrorValue();
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
    }
    get_name() {
        return "errortype";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionErrorType.$t = markType(UltraCalcFunctionErrorType, 'UltraCalcFunctionErrorType', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionNa extends BuiltInFunctionBase {
    evaluate(a, b) {
        return new ExcelCalcValue(new ExcelCalcErrorValue(3));
    }
    get_name() {
        return "na";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 0;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionNa.$t = markType(UltraCalcFunctionNa, 'UltraCalcFunctionNa', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionIsBlank extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        return new ExcelCalcValue(c.isNull);
    }
    get_name() {
        return "isblank";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionIsBlank.$t = markType(UltraCalcFunctionIsBlank, 'UltraCalcFunctionIsBlank', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionIsErr extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        return new ExcelCalcValue(c.isError && c.toErrorValue().code != 3);
    }
    get_name() {
        return "iserr";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionIsErr.$t = markType(UltraCalcFunctionIsErr, 'UltraCalcFunctionIsErr', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionIsError extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        return new ExcelCalcValue(c.isError);
    }
    get_name() {
        return "iserror";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionIsError.$t = markType(UltraCalcFunctionIsError, 'UltraCalcFunctionIsError', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionIsLogical extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        return new ExcelCalcValue(c.isBoolean);
    }
    get_name() {
        return "islogical";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionIsLogical.$t = markType(UltraCalcFunctionIsLogical, 'UltraCalcFunctionIsLogical', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionIsNa extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        return new ExcelCalcValue(c.isError && c.toErrorValue().code == 3);
    }
    get_name() {
        return "isna";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionIsNa.$t = markType(UltraCalcFunctionIsNa, 'UltraCalcFunctionIsNa', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionIsNonText extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        return new ExcelCalcValue(!c.isString);
    }
    get_name() {
        return "isnontext";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionIsNonText.$t = markType(UltraCalcFunctionIsNonText, 'UltraCalcFunctionIsNonText', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionIsNumber extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.count();
        let d = a.pop();
        if (true) {
            if (d.isNull) {
                return new ExcelCalcValue(false);
            }
        }
        let e;
        return new ExcelCalcValue(((() => { let f = d._toDouble1(e); e = f.p0; return f.ret; })()));
    }
    get_name() {
        return "isnumber";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionIsNumber.$t = markType(UltraCalcFunctionIsNumber, 'UltraCalcFunctionIsNumber', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionIsRef extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        return new ExcelCalcValue(c.isReference);
    }
    get_name() {
        return "isref";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionIsRef.$t = markType(UltraCalcFunctionIsRef, 'UltraCalcFunctionIsRef', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionIsText extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        return new ExcelCalcValue(c.isString);
    }
    get_name() {
        return "istext";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionIsText.$t = markType(UltraCalcFunctionIsText, 'UltraCalcFunctionIsText', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionIsEven extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d;
        if (!((() => { let e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        d = Math.floor(d);
        return new ExcelCalcValue(d % 2 == 0);
    }
    get_name() {
        return "iseven";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionIsEven.$t = markType(UltraCalcFunctionIsEven, 'UltraCalcFunctionIsEven', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionIsOdd extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d;
        if (!((() => { let e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        d = Math.floor(d);
        let e = truncate((d % 2));
        return new ExcelCalcValue(1 == e || -1 == e);
    }
    get_name() {
        return "isodd";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionIsOdd.$t = markType(UltraCalcFunctionIsOdd, 'UltraCalcFunctionIsOdd', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionIRR extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = 1E-07;
        let d = 0.1;
        if (b == 2) {
            let e = a.pop();
            if (!((() => { let f = e._toDouble1(d); d = f.p0; return f.ret; })())) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            if (Math.abs(d) < c) {
                d = 0.1;
            }
        }
        d += 1;
        let f = a.pop();
        if (f._s == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        let g = 0;
        let h = 0;
        let i = 0;
        for (let j = 0; j < 20; ++j) {
            let k = true;
            let l = 0;
            let m = false;
            let n = false;
            let o = f.toArrayProxy();
            for (let p of fromEnum(o)) {
                if (!((() => { let q = p._toDouble1(i); i = q.p0; return q.ret; })())) {
                    continue;
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
            }
            if (l < 2 || n == false || m == false) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            let q = g / h;
            d -= q;
            if (Math.abs(q) < c) {
                return new ExcelCalcValue(d - 1);
            }
            if (Math.abs(d) < c) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
        }
        return new ExcelCalcValue(new ExcelCalcErrorValue(4));
    }
    canParameterBeEnumerable(a) {
        return a == 0;
    }
    get_name() {
        return "irr";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionIRR.$t = markType(UltraCalcFunctionIRR, 'UltraCalcFunctionIRR', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionRate extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = 0;
        let d = 0;
        let e = 0;
        let f = 0;
        let g = 0;
        let h = 0.1;
        if (b < 3 || b > 6) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        if (b == 6 && !((() => { let i = a.pop()._toDouble1(h); h = i.p0; return i.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (b >= 5) {
            g = a.pop()._toInt();
            if (g < 0 || g > 1) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
        }
        if (b >= 4 && !((() => { let i = a.pop()._toDouble1(c); c = i.p0; return i.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (b >= 3) {
            if (!((() => { let i = a.pop()._toDouble1(d); d = i.p0; return i.ret; })()) || !((() => { let i = a.pop()._toDouble1(e); e = i.p0; return i.ret; })()) || !((() => { let i = a.pop()._toDouble1(f); f = i.p0; return i.ret; })())) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            if (f <= 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
        }
        let i = (j) => c + e * (1 + j * g) * (Math.pow(1 + j, f) - 1) / j + d * Math.pow(1 + j, f);
        let j = (k) => (e * (f * k * Math.pow(1 + k, f - 1 + g) - Math.pow(1 + k, f) + 1) / (k * k)) + f * d * Math.pow(1 + k, f - 1);
        let k = 1E-08;
        let l = h;
        for (let m = 0; m < 40; m++) {
            let n = i(l);
            let o = j(l);
            if (Math.abs(o) <= 4.94065645841247E-324) {
                break;
            }
            let p = l - n / o;
            if (Math.abs(p - l) <= k) {
                return new ExcelCalcValue(p);
            }
            l = p;
        }
        return new ExcelCalcValue(new ExcelCalcErrorValue(4));
    }
    get_name() {
        return "rate";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 3;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 6;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionRate.$t = markType(UltraCalcFunctionRate, 'UltraCalcFunctionRate', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionIsNull extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isReference) {
            c = c.toReference().value;
        }
        return new ExcelCalcValue(c.value == null);
    }
    get_name() {
        return "isnull";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionIsNull.$t = markType(UltraCalcFunctionIsNull, 'UltraCalcFunctionIsNull', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionNull extends BuiltInFunctionBase {
    evaluate(a, b) {
        return new ExcelCalcValue(null);
    }
    get_name() {
        return "null";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 0;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionNull.$t = markType(UltraCalcFunctionNull, 'UltraCalcFunctionNull', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionIsDBNull extends BuiltInFunctionBase {
    evaluate(a, b) {
        return new ExcelCalcValue(a.pop().isDBNull);
    }
    get_name() {
        return "isdbnull";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionIsDBNull.$t = markType(UltraCalcFunctionIsDBNull, 'UltraCalcFunctionIsDBNull', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionDBNull extends BuiltInFunctionBase {
    evaluate(a, b) {
        return new ExcelCalcValue(null);
    }
    get_name() {
        return "dbnull";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 0;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionDBNull.$t = markType(UltraCalcFunctionDBNull, 'UltraCalcFunctionDBNull', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionDateAdd extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop()._toDateTime1();
        let d;
        if (!((() => { let e = a.pop()._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let e = a.pop().toString().toLowerCase().trim();
        let f = CalcManagerUtilities.c(e, d, c);
        return new ExcelCalcValue(f);
    }
    get_name() {
        return "dateadd";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 3;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 3;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionDateAdd.$t = markType(UltraCalcFunctionDateAdd, 'UltraCalcFunctionDateAdd', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionDateDiff extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        let d = a.pop();
        let e = a.pop().toString().toLowerCase().trim();
        if (c.isNull || d.isNull) {
            let f = new ExcelCalcErrorValue(4);
            return new ExcelCalcValue(f);
        }
        let g = c._toDateTime1();
        let h = d._toDateTime1();
        let i = UltraCalcFunctionDateDiff._an(a._w, e, h, g);
        return new ExcelCalcValue(i);
    }
    static _al(a) {
        if (a >= 0) {
            return Math.floor(a);
        }
        return -Math.floor(-a);
    }
    get_name() {
        return "datediff";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 3;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 3;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    static _ak(a) {
        switch (a) {
            case 2: return 2;
            case 1: return 3;
            case 0:
            default: return 1;
        }
    }
    static _an(a, b, c, d) {
        let e = 1;
        let f = UltraCalcFunctionDateDiff._ak(0);
        let g = CalcManagerUtilities.e(b, c, d, e, f);
        return g;
    }
    static _am(a, b, c, d) {
        let e = 1;
        let f = UltraCalcFunctionDateDiff._ak(0);
        let g = CalcManagerUtilities.d(b, c, d, e, f);
        return g;
    }
}
UltraCalcFunctionDateDiff.$t = markType(UltraCalcFunctionDateDiff, 'UltraCalcFunctionDateDiff', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionChar extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d = c._toInt321();
        return new ExcelCalcValue(Convert.toChar1(d));
    }
    get_name() {
        return "char";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionChar.$t = markType(UltraCalcFunctionChar, 'UltraCalcFunctionChar', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionCode extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d = c.toString();
        if (d == null || d.length == 0) {
            return new ExcelCalcValue(0);
        }
        return new ExcelCalcValue(d.charAt(0).charCodeAt(0));
    }
    get_name() {
        return "code";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionCode.$t = markType(UltraCalcFunctionCode, 'UltraCalcFunctionCode', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionFixed extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = 0;
        let d = 2;
        let e = false;
        let f = new StringBuilder(1, 100);
        let g;
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
        let h = (c.toLocaleString(a._w.name, { minimumFractionDigits: d, maximumFractionDigits: d, useGrouping: e }));
        if (h == null || h.length == 0) {
            h = "0";
        }
        return new ExcelCalcValue(h);
    }
    get_name() {
        return "fixed";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 3;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionFixed.$t = markType(UltraCalcFunctionFixed, 'UltraCalcFunctionFixed', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionToday extends BuiltInFunctionBase {
    evaluate(a, b) {
        return new ExcelCalcValue(dateToday());
    }
    get_name() {
        return "today";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 0;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionToday.$t = markType(UltraCalcFunctionToday, 'UltraCalcFunctionToday', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionASinh extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d;
        if (!((() => { let e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let e = Math.log(d + Math.sqrt((d * d) + 1));
        return new ExcelCalcValue(e);
    }
    get_name() {
        return "asinh";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionASinh.$t = markType(UltraCalcFunctionASinh, 'UltraCalcFunctionASinh', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionATanh extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d;
        if (!((() => { let e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let e;
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
    }
    get_name() {
        return "atanh";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionATanh.$t = markType(UltraCalcFunctionATanh, 'UltraCalcFunctionATanh', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionACosh extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d;
        if (!((() => { let e = c._toDouble1(d); d = e.p0; return e.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (d < 1) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let e = Math.log(d + Math.sqrt((d * d) - 1));
        return new ExcelCalcValue(e);
    }
    get_name() {
        return "acosh";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionACosh.$t = markType(UltraCalcFunctionACosh, 'UltraCalcFunctionACosh', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionEDate extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop()._toDouble3();
        let d = dateGetDate(a.pop()._toDateTime1());
        d = CalcManagerUtilities.b(2, c, d);
        return new ExcelCalcValue(d);
    }
    get_name() {
        return "edate";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionEDate.$t = markType(UltraCalcFunctionEDate, 'UltraCalcFunctionEDate', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionEOMonth extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop()._toDouble3();
        let d = dateGetDate(a.pop()._toDateTime1());
        d = CalcManagerUtilities.b(2, c, d);
        d = dateFromValues(d.getFullYear(), dateGetMonth(d), daysInMonth(d.getFullYear(), dateGetMonth(d)), 0, 0, 0, 0);
        return new ExcelCalcValue(d);
    }
    get_name() {
        return "eomonth";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionEOMonth.$t = markType(UltraCalcFunctionEOMonth, 'UltraCalcFunctionEOMonth', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionWeekDay extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = (b == 2) ? a.pop()._toInt321() : 1;
        let d = dateGetDate(a.pop()._toDateTime1());
        if (true) {
            if (d <= dateFromValues(1900, 3, 1, 0, 0, 0, 0)) {
                d = dateAddDays(d, -1);
            }
        }
        let e = d.getDay();
        let f = e;
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
    }
    get_name() {
        return "weekday";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionWeekDay.$t = markType(UltraCalcFunctionWeekDay, 'UltraCalcFunctionWeekDay', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionNetWorkDays extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = this._getArguments(a, b - 2, true);
        let d;
        let e;
        let f = ((() => { let g = UltraCalcFunctionWorkDay._ak(c, d, e); d = g.p1; e = g.p2; return g.ret; })());
        if (f == false) {
            return e;
        }
        let g = dateGetDate(a.pop()._toDateTime1());
        let h = dateGetDate(a.pop()._toDateTime1());
        let i = 1;
        if (h > g) {
            i = -1;
            let j = h;
            h = g;
            g = j;
        }
        let k = UltraCalcFunctionDateDiff._am(a._w, 4, h, g);
        k += 1;
        if (k > 0) {
            let l = (intDivide(k, 7));
            let m = (k % 7);
            k -= (l * 2);
            switch (h.getDay()) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    let n = 8 - h.getDay();
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
                for (let o of fromEnum(d.keys)) {
                    if (o >= h && o <= g) {
                        k -= 1;
                    }
                }
            }
            k *= i;
        }
        return new ExcelCalcValue(k);
    }
    canParameterBeEnumerable(a) {
        return a == 2;
    }
    get_name() {
        return "networkdays";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 3;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionNetWorkDays.$t = markType(UltraCalcFunctionNetWorkDays, 'UltraCalcFunctionNetWorkDays', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionWeekNum extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = (b == 2) ? a.pop()._toInt321() : 1;
        let d;
        switch (c) {
            case 1:
                d = 0;
                break;
            case 2:
                d = 1;
                break;
            default: return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let e = dateGetDate(a.pop()._toDateTime1());
        let f = dateFromValues(e.getFullYear(), 1, 1, 0, 0, 0, 0);
        let g = f;
        while (g.getDay() != d) {
            g = dateAddDays(g, 1);
        }
        let h = (intDivide((timeSpanDays((+e - +g))), 7)) + 1;
        if (+f != +g && e >= g) {
            h += 1;
        }
        return new ExcelCalcValue(h);
    }
    get_name() {
        return "weeknum";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionWeekNum.$t = markType(UltraCalcFunctionWeekNum, 'UltraCalcFunctionWeekNum', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionWorkDay extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = this._getArguments(a, b - 2, true);
        let d;
        let e;
        let f = ((() => { let g = UltraCalcFunctionWorkDay._ak(c, d, e); d = g.p1; e = g.p2; return g.ret; })());
        if (f == false) {
            return e;
        }
        let g = a.pop()._toInt321();
        let h = dateGetDate(a.pop()._toDateTime1());
        let i = h;
        let j = Math.abs(g);
        let k = 0;
        if (g != 0) {
            let l = g < 0 ? -1 : 1;
            do {
                i = dateAddDays(i, l);
                k += this._an(i, d) ? 1 : 0;
            } while (k < j);
        }
        return new ExcelCalcValue(i);
    }
    canParameterBeEnumerable(a) {
        return a == 2;
    }
    _an(a, b) {
        if (UltraCalcFunctionWorkDay._al(a)) {
            return false;
        }
        if (b != null && b.containsKey(a)) {
            return false;
        }
        return true;
    }
    get_name() {
        return "workday";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 3;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    static _ak(a, b, c) {
        if (a.length > 0) {
            b = new Dictionary$2(Date_$type, Base.$, 1, a.length);
            for (let e = 0; e < a.length; e++) {
                let d = a[e];
                if (d.isError) {
                    c = new ExcelCalcValue(d.toErrorValue());
                    return {
                        ret: false,
                        p1: b,
                        p2: c
                    };
                }
                let f = dateGetDate(d._toDateTime1());
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
    }
    static _al(a) {
        return UltraCalcFunctionWorkDay._am(a.getDay());
    }
    static _am(a) {
        return a == 6 || a == 0;
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionWorkDay.$t = markType(UltraCalcFunctionWorkDay, 'UltraCalcFunctionWorkDay', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionDec2XBase extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = 0;
        if (b == 2) {
            let d = a.pop()._toInt321();
            if (d <= 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            else {
                c = d;
            }
        }
        let e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        let f = e._toInt641();
        if (f < this._ap || f > this._al) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let g = UltraCalcFunctionDec2XBase._at(f, this._ak, this._ap, this._al);
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
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    static _at(a, b, c, d) {
        let e = false;
        if (a < 0) {
            a -= c;
            e = true;
        }
        a &= d;
        if (e) {
            a |= (-c);
        }
        let f = stringEmpty();
        if (a == 0) {
            f = "0";
        }
        while (a > 0) {
            let g = a % b;
            let h;
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
    }
}
UltraCalcFunctionDec2XBase.$t = markType(UltraCalcFunctionDec2XBase, 'UltraCalcFunctionDec2XBase', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionDec2Bin extends UltraCalcFunctionDec2XBase {
    get_name() {
        return "dec2bin";
    }
    get name() {
        return this.get_name();
    }
    get__ap() {
        return -512;
    }
    get _ap() {
        return this.get__ap();
    }
    get__al() {
        return 511;
    }
    get _al() {
        return this.get__al();
    }
    get__ak() {
        return 2;
    }
    get _ak() {
        return this.get__ak();
    }
}
UltraCalcFunctionDec2Bin.$t = markType(UltraCalcFunctionDec2Bin, 'UltraCalcFunctionDec2Bin', UltraCalcFunctionDec2XBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionDec2Hex extends UltraCalcFunctionDec2XBase {
    get_name() {
        return "dec2hex";
    }
    get name() {
        return this.get_name();
    }
    get__ap() {
        return -549755813888;
    }
    get _ap() {
        return this.get__ap();
    }
    get__al() {
        return 0x7FFFFFFFFF;
    }
    get _al() {
        return this.get__al();
    }
    get__ak() {
        return 16;
    }
    get _ak() {
        return this.get__ak();
    }
}
UltraCalcFunctionDec2Hex.$t = markType(UltraCalcFunctionDec2Hex, 'UltraCalcFunctionDec2Hex', UltraCalcFunctionDec2XBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionDec2Oct extends UltraCalcFunctionDec2XBase {
    get_name() {
        return "dec2oct";
    }
    get name() {
        return this.get_name();
    }
    get__ap() {
        return -536870912;
    }
    get _ap() {
        return this.get__ap();
    }
    get__al() {
        return 536870911;
    }
    get _al() {
        return this.get__al();
    }
    get__ak() {
        return 8;
    }
    get _ak() {
        return this.get__ak();
    }
}
UltraCalcFunctionDec2Oct.$t = markType(UltraCalcFunctionDec2Oct, 'UltraCalcFunctionDec2Oct', UltraCalcFunctionDec2XBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionXBase2Dec extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d = c.toString();
        if (d.length > this._am) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let e;
        let f = ((() => { let g = UltraCalcFunctionXBase2Dec._al(a._w, d, this._ak, this._ao, this._an, e); e = g.p5; return g.ret; })());
        if (null != e) {
            return new ExcelCalcValue(e);
        }
        return new ExcelCalcValue(f);
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    static _al(a, b, c, d, e, f) {
        f = null;
        b = b.trim();
        let g = 0;
        let h = b.length;
        let i = stringToCharArray(b);
        let j = 1;
        let k = String.fromCharCode(0);
        for (let l = h - 1; l >= 0; l--) {
            let m = i[l];
            if (m == '-') {
                continue;
            }
            let n;
            let o = ((() => { let p = tryParseInt64_2(m.toString(), 167 | 64, a, n); n = p.p3; return p.ret; })());
            if (o == false) {
                n = m.charCodeAt(0) - 65;
                n += 10;
            }
            if (n >= c) {
                k = m;
                continue;
            }
            g += n * j;
            j *= c;
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
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionXBase2Dec.$t = markType(UltraCalcFunctionXBase2Dec, 'UltraCalcFunctionXBase2Dec', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionBin2Dec extends UltraCalcFunctionXBase2Dec {
    get_name() {
        return "bin2dec";
    }
    get name() {
        return this.get_name();
    }
    get__ao() {
        return -512;
    }
    get _ao() {
        return this.get__ao();
    }
    get__an() {
        return 511;
    }
    get _an() {
        return this.get__an();
    }
    get__ak() {
        return 2;
    }
    get _ak() {
        return this.get__ak();
    }
    get__am() {
        return 10;
    }
    get _am() {
        return this.get__am();
    }
}
UltraCalcFunctionBin2Dec.$t = markType(UltraCalcFunctionBin2Dec, 'UltraCalcFunctionBin2Dec', UltraCalcFunctionXBase2Dec.$);
/**
 * @hidden
 */
export class UltraCalcFunctionHex2Dec extends UltraCalcFunctionXBase2Dec {
    get_name() {
        return "hex2dec";
    }
    get name() {
        return this.get_name();
    }
    get__ao() {
        return -549755813888;
    }
    get _ao() {
        return this.get__ao();
    }
    get__an() {
        return 0x7FFFFFFFFF;
    }
    get _an() {
        return this.get__an();
    }
    get__ak() {
        return 16;
    }
    get _ak() {
        return this.get__ak();
    }
    get__am() {
        return 10;
    }
    get _am() {
        return this.get__am();
    }
}
UltraCalcFunctionHex2Dec.$t = markType(UltraCalcFunctionHex2Dec, 'UltraCalcFunctionHex2Dec', UltraCalcFunctionXBase2Dec.$);
/**
 * @hidden
 */
export class UltraCalcFunctionOct2Dec extends UltraCalcFunctionXBase2Dec {
    get_name() {
        return "oct2dec";
    }
    get name() {
        return this.get_name();
    }
    get__ao() {
        return -536870912;
    }
    get _ao() {
        return this.get__ao();
    }
    get__an() {
        return 536870911;
    }
    get _an() {
        return this.get__an();
    }
    get__ak() {
        return 8;
    }
    get _ak() {
        return this.get__ak();
    }
    get__am() {
        return 10;
    }
    get _am() {
        return this.get__am();
    }
}
UltraCalcFunctionOct2Dec.$t = markType(UltraCalcFunctionOct2Dec, 'UltraCalcFunctionOct2Dec', UltraCalcFunctionXBase2Dec.$);
/**
 * @hidden
 */
export class UltraCalcFunctionXBase2XBase extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = 0;
        if (b == 2) {
            let d = a.pop()._toInt321();
            if (d <= 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            else {
                c = d;
            }
        }
        let e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        let f = e.toString();
        if (f.length > this._am) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let g;
        let h = ((() => { let i = UltraCalcFunctionXBase2Dec._al(a._w, f, this._al, this._aq, this._ap, g); g = i.p5; return i.ret; })());
        if (null != g) {
            return new ExcelCalcValue(g);
        }
        if (h < this._ao || this._an < h) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let i = UltraCalcFunctionDec2XBase._at(h, this._ak, this._ao, this._an);
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
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionXBase2XBase.$t = markType(UltraCalcFunctionXBase2XBase, 'UltraCalcFunctionXBase2XBase', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionBin2Oct extends UltraCalcFunctionXBase2XBase {
    get_name() {
        return "bin2oct";
    }
    get name() {
        return this.get_name();
    }
    get__aq() {
        return -512;
    }
    get _aq() {
        return this.get__aq();
    }
    get__ap() {
        return 511;
    }
    get _ap() {
        return this.get__ap();
    }
    get__ao() {
        return -536870912;
    }
    get _ao() {
        return this.get__ao();
    }
    get__an() {
        return 536870911;
    }
    get _an() {
        return this.get__an();
    }
    get__al() {
        return 2;
    }
    get _al() {
        return this.get__al();
    }
    get__ak() {
        return 8;
    }
    get _ak() {
        return this.get__ak();
    }
    get__am() {
        return 10;
    }
    get _am() {
        return this.get__am();
    }
}
UltraCalcFunctionBin2Oct.$t = markType(UltraCalcFunctionBin2Oct, 'UltraCalcFunctionBin2Oct', UltraCalcFunctionXBase2XBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionBin2Hex extends UltraCalcFunctionXBase2XBase {
    get_name() {
        return "bin2hex";
    }
    get name() {
        return this.get_name();
    }
    get__aq() {
        return -512;
    }
    get _aq() {
        return this.get__aq();
    }
    get__ap() {
        return 511;
    }
    get _ap() {
        return this.get__ap();
    }
    get__ao() {
        return -549755813888;
    }
    get _ao() {
        return this.get__ao();
    }
    get__an() {
        return 0x7FFFFFFFFF;
    }
    get _an() {
        return this.get__an();
    }
    get__al() {
        return 2;
    }
    get _al() {
        return this.get__al();
    }
    get__ak() {
        return 16;
    }
    get _ak() {
        return this.get__ak();
    }
    get__am() {
        return 10;
    }
    get _am() {
        return this.get__am();
    }
}
UltraCalcFunctionBin2Hex.$t = markType(UltraCalcFunctionBin2Hex, 'UltraCalcFunctionBin2Hex', UltraCalcFunctionXBase2XBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionOct2Bin extends UltraCalcFunctionXBase2XBase {
    get_name() {
        return "oct2bin";
    }
    get name() {
        return this.get_name();
    }
    get__aq() {
        return -536870912;
    }
    get _aq() {
        return this.get__aq();
    }
    get__ap() {
        return 536870911;
    }
    get _ap() {
        return this.get__ap();
    }
    get__ao() {
        return -512;
    }
    get _ao() {
        return this.get__ao();
    }
    get__an() {
        return 511;
    }
    get _an() {
        return this.get__an();
    }
    get__al() {
        return 8;
    }
    get _al() {
        return this.get__al();
    }
    get__ak() {
        return 2;
    }
    get _ak() {
        return this.get__ak();
    }
    get__am() {
        return 10;
    }
    get _am() {
        return this.get__am();
    }
}
UltraCalcFunctionOct2Bin.$t = markType(UltraCalcFunctionOct2Bin, 'UltraCalcFunctionOct2Bin', UltraCalcFunctionXBase2XBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionOct2Hex extends UltraCalcFunctionXBase2XBase {
    get_name() {
        return "oct2hex";
    }
    get name() {
        return this.get_name();
    }
    get__aq() {
        return -536870912;
    }
    get _aq() {
        return this.get__aq();
    }
    get__ap() {
        return 536870911;
    }
    get _ap() {
        return this.get__ap();
    }
    get__ao() {
        return -549755813888;
    }
    get _ao() {
        return this.get__ao();
    }
    get__an() {
        return 0x7FFFFFFFFF;
    }
    get _an() {
        return this.get__an();
    }
    get__al() {
        return 8;
    }
    get _al() {
        return this.get__al();
    }
    get__ak() {
        return 16;
    }
    get _ak() {
        return this.get__ak();
    }
    get__am() {
        return 10;
    }
    get _am() {
        return this.get__am();
    }
}
UltraCalcFunctionOct2Hex.$t = markType(UltraCalcFunctionOct2Hex, 'UltraCalcFunctionOct2Hex', UltraCalcFunctionXBase2XBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionHex2Bin extends UltraCalcFunctionXBase2XBase {
    get_name() {
        return "hex2bin";
    }
    get name() {
        return this.get_name();
    }
    get__aq() {
        return -549755813888;
    }
    get _aq() {
        return this.get__aq();
    }
    get__ap() {
        return 0x7FFFFFFFFF;
    }
    get _ap() {
        return this.get__ap();
    }
    get__ao() {
        return -512;
    }
    get _ao() {
        return this.get__ao();
    }
    get__an() {
        return 511;
    }
    get _an() {
        return this.get__an();
    }
    get__al() {
        return 16;
    }
    get _al() {
        return this.get__al();
    }
    get__ak() {
        return 2;
    }
    get _ak() {
        return this.get__ak();
    }
    get__am() {
        return 10;
    }
    get _am() {
        return this.get__am();
    }
}
UltraCalcFunctionHex2Bin.$t = markType(UltraCalcFunctionHex2Bin, 'UltraCalcFunctionHex2Bin', UltraCalcFunctionXBase2XBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionHex2Oct extends UltraCalcFunctionXBase2XBase {
    get_name() {
        return "hex2oct";
    }
    get name() {
        return this.get_name();
    }
    get__aq() {
        return -549755813888;
    }
    get _aq() {
        return this.get__aq();
    }
    get__ap() {
        return 0x7FFFFFFFFF;
    }
    get _ap() {
        return this.get__ap();
    }
    get__ao() {
        return -536870912;
    }
    get _ao() {
        return this.get__ao();
    }
    get__an() {
        return 536870911;
    }
    get _an() {
        return this.get__an();
    }
    get__al() {
        return 16;
    }
    get _al() {
        return this.get__al();
    }
    get__ak() {
        return 8;
    }
    get _ak() {
        return this.get__ak();
    }
    get__am() {
        return 10;
    }
    get _am() {
        return this.get__am();
    }
}
UltraCalcFunctionHex2Oct.$t = markType(UltraCalcFunctionHex2Oct, 'UltraCalcFunctionHex2Oct', UltraCalcFunctionXBase2XBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionConvert extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop().toString();
        let d = a.pop().toString();
        let e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        let f = e._toDouble3();
        let g = UltraCalcFunctionConvert_UnitInfo.d(d);
        let h = UltraCalcFunctionConvert_UnitInfo.d(c);
        if (g == null || h == null) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        let i = h.c;
        let j = g.c;
        if (i == 0 || j == 0 || i != j) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        d = g.l;
        c = h.l;
        f *= g.j;
        let k;
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
    }
    get_name() {
        return "convert";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 3;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 3;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    static _as(a, b, c) {
        let d = 365.25;
        let e = 24;
        let f = 60;
        let g = 60;
        let h = 0;
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
        let i = truncate(round10N(h, 0));
        let j = truncate(((h - i) * 1000));
        let k = timeSpanInit2(0, 0, 0, i, j);
        switch (c) {
            case "yr": return timeSpanTotalDays(k) / d;
            case "day": return timeSpanTotalDays(k);
            case "hr": return timeSpanTotalHours(k);
            case "mn": return timeSpanTotalMinutes(k);
            case "sec": return timeSpanTotalSeconds(k);
            default: throw new ArgumentException(1, "toUnit");
        }
    }
    static _at(a, b, c) {
        let d = 14593.9029372064;
        let e = 453.59237;
        let f = 28.349523125;
        let g = 1.66053100460465E-24;
        let h = 0;
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
    }
    static _ak(a, b, c) {
        let d = 72913.3858267717;
        let e = 63360;
        let f = 39.3700787401575;
        let g = 36;
        let h = 12;
        let i = 0.0138888888888889;
        let j = 0.166666666666667;
        let k = 3.93700787401575E-09;
        let l = 0;
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
    }
    static _aq(a, b, c) {
        let d = 760;
        let e = 0.0075006168270417;
        let f = 0;
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
    }
    static _am(a, b, c) {
        let d = 4.4482216152605;
        let e = 1E-05;
        let f = 0;
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
    }
    static _al(a, b, c) {
        let d = 26845195376961.7;
        let e = 36000000000;
        let f = 10550558526.2;
        let g = 41868000;
        let h = 41840000;
        let i = 10000000;
        let j = 13558179.483314;
        let k = 1.60219000146921E-12;
        let l;
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
    }
    static _ap(a, b, c) {
        let d = 745.69987158227;
        let e;
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
    }
    static _ao(a, b, c) {
        let d = 10000;
        let e;
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
    }
    static _an(a, b, c) {
        let d = 768;
        let e = 202.884136211058;
        let f = 192;
        let g = 115.291192848466;
        let h = 96;
        let i = 48;
        let j = 6;
        let k = 3;
        let l;
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
    }
    static _ar(a, b, c) {
        b = UltraCalcFunctionConvert._au(b);
        c = UltraCalcFunctionConvert._au(c);
        if (stringCompare(b, c) == 0) {
            return a;
        }
        let d;
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
    }
    static _au(a) {
        switch (a) {
            case "C":
            case "cel": return "C";
            case "F":
            case "fah": return "F";
            case "K":
            case "kel": return "K";
            default: throw new ArgumentException(1, "unit");
        }
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionConvert.$t = markType(UltraCalcFunctionConvert, 'UltraCalcFunctionConvert', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionConvert_UnitInfo extends Base {
    constructor(a, b, c, d) {
        super();
        this.k = null;
        this.e = false;
        this.i = 0;
        this.b = 0;
        this.k = a;
        this.e = b;
        this.i = c;
        this.b = d;
    }
    static d(a) {
        let b = a;
        let c = 1;
        let d = UltraCalcFunctionConvert_UnitInfo.a(b);
        if (d == 0) {
            b = b.substr(1);
            d = UltraCalcFunctionConvert_UnitInfo.a(b);
            if (d == 0) {
                return null;
            }
            else {
                let e = ((() => { let f = UltraCalcFunctionConvert_UnitInfo.h(a.substr(0, 1), c); c = f.p1; return f.ret; })());
                if (e == false) {
                    return null;
                }
            }
        }
        let f = UltraCalcFunctionConvert_UnitInfo.g(b);
        if (f == false && c != 1) {
            return null;
        }
        return new UltraCalcFunctionConvert_UnitInfo(b, f, c, d);
    }
    get l() {
        return this.k;
    }
    get f() {
        return this.e;
    }
    get j() {
        return this.i;
    }
    get c() {
        return this.b;
    }
    static a(a) {
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
    }
    static h(a, b) {
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
    }
    static g(a) {
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
    }
}
UltraCalcFunctionConvert_UnitInfo.$t = markType(UltraCalcFunctionConvert_UnitInfo, 'UltraCalcFunctionConvert_UnitInfo');
/**
 * @hidden
 */
export class UltraCalcFunctionDelta extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c;
        let d;
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
        let e = c._toDouble3();
        let f = (e == d) ? 1 : 0;
        return new ExcelCalcValue(f);
    }
    get_name() {
        return "delta";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionDelta.$t = markType(UltraCalcFunctionDelta, 'UltraCalcFunctionDelta', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionGeStep extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c;
        let d;
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
        let e = c._toDouble3();
        let f = (e >= d) ? 1 : 0;
        return new ExcelCalcValue(f);
    }
    get_name() {
        return "gestep";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionGeStep.$t = markType(UltraCalcFunctionGeStep, 'UltraCalcFunctionGeStep', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionComplex extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c;
        let d = (b == 3) ? a.pop().toString() : "i";
        if (stringCompare1(d, "i", 4) != 0 && stringCompare1(d, "j", 4) != 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let e = c._toDouble3();
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let f = c._toDouble3();
        let g = new UltraCalcFunctionComplex_ComplexNumber(0, f, e, d);
        let h = g.toString();
        return new ExcelCalcValue(h);
    }
    get_name() {
        return "complex";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 3;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionComplex.$t = markType(UltraCalcFunctionComplex, 'UltraCalcFunctionComplex', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionComplex_ComplexNumber extends Base {
    constructor(a, ..._rest) {
        super();
        this.ai = 0;
        this.ae = 0;
        this.am = null;
        this.x = false;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    let f = [c, d, e, true];
                    {
                        let h = f[0];
                        let i = f[1];
                        let j = f[2];
                        let k = f[3];
                        this.ai = h;
                        this.ae = i;
                        this.am = j;
                        this.x = k;
                    }
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    this.x = ((() => { let e = UltraCalcFunctionComplex_ComplexNumber.z(c, d, this.ai, this.ae, this.am); this.ai = e.p2; this.ae = e.p3; this.am = e.p4; return e.ret; })());
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    let f = _rest[3];
                    this.ai = c;
                    this.ae = d;
                    this.am = e;
                    this.x = f;
                }
                break;
        }
    }
    get aj() {
        return this.ai;
    }
    set aj(a) {
        this.ai = a;
    }
    get af() {
        return this.ae;
    }
    get an() {
        return this.am;
    }
    set an(a) {
        if (a != "i" && a != "j") {
            throw new ArgumentOutOfRangeException(0);
        }
        this.am = a;
    }
    get y() {
        if (isInfinity(this.aj) || isNaN_(this.aj)) {
            return false;
        }
        if (isInfinity(this.af) || isNaN_(this.af)) {
            return false;
        }
        return this.x;
    }
    toString() {
        if (this.y == false) {
            return "#NUM";
        }
        return UltraCalcFunctionComplex_ComplexNumber.al(this.aj, this.af, this.an);
    }
    ab() {
        return Math.sqrt(Math.pow(this.aj, 2) + Math.pow(this.af, 2));
    }
    ac() {
        if (this.af == 0 && this.aj == 0) {
            throw new DivideByZeroException(null, null);
        }
        return Math.atan2(this.af, this.aj);
    }
    c() {
        return new UltraCalcFunctionComplex_ComplexNumber(0, this.ai, -this.ae, this.am);
    }
    d() {
        let a = Math.cos(this.aj) * Math.cosh(this.af);
        let b = -(Math.sin(this.aj) * Math.sinh(this.af));
        return new UltraCalcFunctionComplex_ComplexNumber(0, a, b, this.an);
    }
    e() {
        let a = Math.pow(2.7182818284590451, this.aj);
        let b = Math.cos(this.af) * a;
        let c = Math.sin(this.af) * a;
        let d = new UltraCalcFunctionComplex_ComplexNumber(0, b, c, this.an);
        return d;
    }
    ad() {
        let a = Math.pow(this.aj, 2);
        let b = Math.pow(this.af, 2);
        let c = a + b;
        let d = Math.sqrt(c);
        return d;
    }
    m() {
        let a = this.ad();
        let b = Math.log(a);
        let c = this.ak();
        let d = new UltraCalcFunctionComplex_ComplexNumber(0, b, c, this.an);
        return d;
    }
    n() {
        return UltraCalcFunctionComplex_ComplexNumber.k(this.m(), UltraCalcFunctionComplex_ComplexNumber.ag);
    }
    o() {
        return UltraCalcFunctionComplex_ComplexNumber.k(this.m(), UltraCalcFunctionComplex_ComplexNumber.ah);
    }
    u(a) {
        let b = this.ad();
        let c = this.ak();
        let d = Math.pow(b, a);
        let e = c * a;
        let f = d * (Math.cos(e));
        let g = d * (Math.sin(e));
        return new UltraCalcFunctionComplex_ComplexNumber(0, f, g, this.an);
    }
    v() {
        let a = Math.sin(this.aj) * Math.cosh(this.af);
        let b = Math.cos(this.aj) * Math.sinh(this.af);
        return new UltraCalcFunctionComplex_ComplexNumber(0, a, b, this.an);
    }
    w() {
        let a = this.ad();
        let b = this.ak();
        let c = Math.sqrt(a);
        let d = b / 2;
        let e = c * Math.cos(d);
        let f = c * Math.sin(d);
        return new UltraCalcFunctionComplex_ComplexNumber(0, e, f, this.an);
    }
    ak() {
        return Math.atan2(this.af, this.aj);
    }
    static z(a, b, c, d, e) {
        b = stringReplace(b, " ", "");
        let f = UltraCalcFunctionComplex_ComplexNumber.b(b);
        let g = f.length;
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
        let h;
        let i;
        let j;
        if (g == 1) {
            i = b;
            j = ((() => { let k = UltraCalcFunctionComplex_ComplexNumber.aa(a, b, d, e); d = k.p2; e = k.p3; return k.ret; })());
            if (j) {
                c = 0;
            }
            else {
                d = 0;
                j = ((() => { let k = MathUtilities.c(b, a, c); c = k.p2; return k.ret; })());
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
            j = ((() => { let k = MathUtilities.c(h, a, c); c = k.p2; return k.ret; })());
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
            j = ((() => { let k = UltraCalcFunctionComplex_ComplexNumber.aa(a, i, d, e); d = k.p2; e = k.p3; return k.ret; })());
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
    }
    static aa(a, b, c, d) {
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
            ret: ((() => { let e = MathUtilities.c(b, a, c); c = e.p2; return e.ret; })()),
            p2: c,
            p3: d
        };
    }
    static b(a) {
        let b = new List$1(String_$type, 2, 1);
        let c = a.substr(0, 1);
        let d = stringToCharArray(a);
        for (let e = 1; e < d.length; e++) {
            let f = d[e];
            if (f == '-' || f == '+') {
                let g = d[e - 1].toString().toLowerCase();
                if (g != "e") {
                    b.add(c);
                    c = stringEmpty();
                }
            }
            c += f;
        }
        b.add(c);
        return b.toArray();
    }
    static al(a, b, c) {
        let d = "G";
        a = MathUtilities.i(a);
        b = MathUtilities.i(b);
        let e;
        if (a == 0 && b == 0) {
            e = "0";
        }
        else if (a != 0 && b == 0) {
            e = numberToString2(a, d);
        }
        else {
            let f = (b > 0) ? "+" : "-";
            let g;
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
            let h = stringFormat("{0}{1}", f, (b == 1) ? stringEmpty() : numberToString2(b, d));
            e = stringFormat("{0}{1}{2}", g, h, c);
        }
        return e;
    }
    static get g() {
        if (UltraCalcFunctionComplex_ComplexNumber.f == null) {
            UltraCalcFunctionComplex_ComplexNumber.f = new UltraCalcFunctionComplex_ComplexNumber(2, 0, 0, "i", false);
        }
        return UltraCalcFunctionComplex_ComplexNumber.f;
    }
    static i(a, b) {
        if (stringCompare(b.an, a.an) != 0) {
            return UltraCalcFunctionComplex_ComplexNumber.g;
        }
        let c = Math.pow(b.aj, 2) + Math.pow(b.af, 2);
        let d = ((a.aj * b.aj) + (a.af * b.af)) / c;
        let e = ((a.af * b.aj) - (a.aj * b.af)) / c;
        let f = new UltraCalcFunctionComplex_ComplexNumber(0, d, e, a.an);
        return f;
    }
    static j(a, b) {
        if (stringCompare(a.an, b.an) != 0) {
            return UltraCalcFunctionComplex_ComplexNumber.g;
        }
        let c = ((a.aj * b.aj) - (a.af * b.af));
        let d = ((a.aj * b.af) + (a.af * b.aj));
        let e = new UltraCalcFunctionComplex_ComplexNumber(0, c, d, a.an);
        return e;
    }
    static k(a, b) {
        let c = a.an;
        let d = a.aj * b;
        let e = a.af * b;
        return new UltraCalcFunctionComplex_ComplexNumber(0, d, e, c);
    }
    static h(a, b) {
        if (stringCompare(a.an, b.an) != 0) {
            return UltraCalcFunctionComplex_ComplexNumber.g;
        }
        let c = a.aj + b.aj;
        let d = a.af + b.af;
        let e = new UltraCalcFunctionComplex_ComplexNumber(0, c, d, a.an);
        return e;
    }
    static l(a, b) {
        if (stringCompare(a.an, b.an) != 0) {
            return UltraCalcFunctionComplex_ComplexNumber.g;
        }
        let c = a.aj - b.aj;
        let d = a.af - b.af;
        let e = new UltraCalcFunctionComplex_ComplexNumber(0, c, d, a.an);
        return e;
    }
}
UltraCalcFunctionComplex_ComplexNumber.$t = markType(UltraCalcFunctionComplex_ComplexNumber, 'UltraCalcFunctionComplex_ComplexNumber');
UltraCalcFunctionComplex_ComplexNumber.f = null;
UltraCalcFunctionComplex_ComplexNumber.a = ['+', '-'];
UltraCalcFunctionComplex_ComplexNumber.ag = log10(2.7182818284590451);
UltraCalcFunctionComplex_ComplexNumber.ah = logBase(2.7182818284590451, 2);
/**
 * @hidden
 */
export class UltraCalcFunctionImAbs extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return c;
        }
        let d = c.toString();
        let e = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, d);
        if (e.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(e.ab());
    }
    get_name() {
        return "imabs";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionImAbs.$t = markType(UltraCalcFunctionImAbs, 'UltraCalcFunctionImAbs', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionImaginary extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop().toString();
        let d = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, c);
        if (d.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(d.af);
    }
    get_name() {
        return "imaginary";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionImaginary.$t = markType(UltraCalcFunctionImaginary, 'UltraCalcFunctionImaginary', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionImArgument extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return c;
        }
        let d = c.toString();
        let e = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, d);
        if (e.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(e.ac());
    }
    get_name() {
        return "imargument";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionImArgument.$t = markType(UltraCalcFunctionImArgument, 'UltraCalcFunctionImArgument', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionImConjugate extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return c;
        }
        let d = c.toString();
        let e = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, d);
        if (e.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let f = e.c();
        return new ExcelCalcValue(f.toString());
    }
    get_name() {
        return "imconjugate";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionImConjugate.$t = markType(UltraCalcFunctionImConjugate, 'UltraCalcFunctionImConjugate', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionImCos extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return c;
        }
        let d = c.toString();
        let e = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, d);
        if (e.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let f = e.d();
        return new ExcelCalcValue(f.toString());
    }
    get_name() {
        return "imcos";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionImCos.$t = markType(UltraCalcFunctionImCos, 'UltraCalcFunctionImCos', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionImDiv extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return c;
        }
        let d = c.toString();
        let e = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, d);
        if (e.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let f = a.pop();
        if (f.isError) {
            return f;
        }
        let g = f.toString();
        let h = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, g);
        if (h.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let i = UltraCalcFunctionComplex_ComplexNumber.i(h, e);
        if (i.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(i.toString());
    }
    get_name() {
        return "imdiv";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionImDiv.$t = markType(UltraCalcFunctionImDiv, 'UltraCalcFunctionImDiv', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionImExp extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return c;
        }
        let d = c.toString();
        let e = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, d);
        if (e.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let f = e.e();
        if (f.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(f.toString());
    }
    get_name() {
        return "imexp";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionImExp.$t = markType(UltraCalcFunctionImExp, 'UltraCalcFunctionImExp', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionImLn extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return c;
        }
        let d = c.toString();
        let e = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, d);
        if (e.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let f = e.m();
        if (f.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(f.toString());
    }
    get_name() {
        return "imln";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionImLn.$t = markType(UltraCalcFunctionImLn, 'UltraCalcFunctionImLn', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionImReal extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return c;
        }
        let d = c.toString();
        let e = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, d);
        if (e.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(e.aj);
    }
    get_name() {
        return "imreal";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionImReal.$t = markType(UltraCalcFunctionImReal, 'UltraCalcFunctionImReal', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionImSub extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return c;
        }
        let d = c.toString();
        let e = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, d);
        if (e.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let f = a.pop();
        if (f.isError) {
            return f;
        }
        let g = f.toString();
        let h = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, g);
        if (h.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let i = UltraCalcFunctionComplex_ComplexNumber.l(h, e);
        if (i.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(i.toString());
    }
    get_name() {
        return "imsub";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionImSub.$t = markType(UltraCalcFunctionImSub, 'UltraCalcFunctionImSub', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionImProduct extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = this._getArguments(a, b, true);
        c.reverse();
        let d = null;
        let e = null;
        for (let g = 0; g < c.length; g++) {
            let f = c[g];
            if (f.isError) {
                return new ExcelCalcValue(f.toErrorValue());
            }
            let h = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, f.toString());
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
    }
    canParameterBeEnumerable(a) {
        return true;
    }
    get_name() {
        return "improduct";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionImProduct.$t = markType(UltraCalcFunctionImProduct, 'UltraCalcFunctionImProduct', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionImSum extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = this._getArguments(a, b, true);
        c.reverse();
        let d = null;
        let e = null;
        for (let g = 0; g < c.length; g++) {
            let f = c[g];
            if (f.isError) {
                return new ExcelCalcValue(f.toErrorValue());
            }
            let h = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, f.toString());
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
    }
    canParameterBeEnumerable(a) {
        return true;
    }
    get_name() {
        return "imsum";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionImSum.$t = markType(UltraCalcFunctionImSum, 'UltraCalcFunctionImSum', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionImLog10 extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return c;
        }
        let d = c.toString();
        let e = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, d);
        if (e.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let f = e.n();
        if (f.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(f.toString());
    }
    get_name() {
        return "imlog10";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionImLog10.$t = markType(UltraCalcFunctionImLog10, 'UltraCalcFunctionImLog10', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionImLog2 extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return c;
        }
        let d = c.toString();
        let e = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, d);
        if (e.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let f = e.o();
        if (f.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(f.toString());
    }
    get_name() {
        return "imlog2";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionImLog2.$t = markType(UltraCalcFunctionImLog2, 'UltraCalcFunctionImLog2', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionImSin extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return c;
        }
        let d = c.toString();
        let e = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, d);
        if (e.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let f = e.v();
        if (f.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(f.toString());
    }
    get_name() {
        return "imsin";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionImSin.$t = markType(UltraCalcFunctionImSin, 'UltraCalcFunctionImSin', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionImSqrt extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return c;
        }
        let d = c.toString();
        let e = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, d);
        if (e.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let f = e.w();
        if (f.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(f.toString());
    }
    get_name() {
        return "imsqrt";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionImSqrt.$t = markType(UltraCalcFunctionImSqrt, 'UltraCalcFunctionImSqrt', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionImPower extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d = c._toDouble3();
        let e = a.pop();
        if (e.isError) {
            return e;
        }
        let f = e.toString();
        let g = new UltraCalcFunctionComplex_ComplexNumber(1, a._w, f);
        if (g.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let h = g.u(d);
        if (h.y == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(h.toString());
    }
    get_name() {
        return "impower";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionImPower.$t = markType(UltraCalcFunctionImPower, 'UltraCalcFunctionImPower', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionDollarFr extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d = c._toDecimal2();
        if (d < 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let e = truncate(d);
        if (e == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(2));
        }
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let f = c._toDouble3();
        let g = MathUtilities.j(f);
        let h = f - g;
        h *= e;
        let i = UltraCalcFunctionDollarFr._ak(e);
        h /= i;
        f = g + h;
        return new ExcelCalcValue(f);
    }
    static _ak(a) {
        let b = log10(a);
        let c = Math.round(b);
        let d = Math.pow(10, c);
        if (d < a) {
            d *= 10;
        }
        let e = round10N(d, 0);
        return e;
    }
    get_name() {
        return "dollarfr";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionDollarFr.$t = markType(UltraCalcFunctionDollarFr, 'UltraCalcFunctionDollarFr', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionDollarDe extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d = c._toDecimal2();
        if (d < 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let e = truncate(d);
        if (e == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(2));
        }
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let f = c._toDouble3();
        let g = MathUtilities.j(f);
        let h = f - g;
        h /= e;
        let i = UltraCalcFunctionDollarFr._ak(e);
        h *= i;
        f = g + h;
        return new ExcelCalcValue(f);
    }
    get_name() {
        return "dollarde";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionDollarDe.$t = markType(UltraCalcFunctionDollarDe, 'UltraCalcFunctionDollarDe', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionInfo extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d = c.toString();
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
    }
    get_name() {
        return "info";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionInfo.$t = markType(UltraCalcFunctionInfo, 'UltraCalcFunctionInfo', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionN extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d;
        if (c.isBoolean) {
            d = c._toBoolean1() ? 1 : 0;
            return new ExcelCalcValue(d);
        }
        let e = c._getResolvedValue();
        if (typeCast(Date_$type, e) !== null) {
            return new ExcelCalcValue(e);
        }
        if (typeof e === 'string') {
            return new ExcelCalcValue(0);
        }
        let f = ((() => { let g = c._toDouble1(d); d = g.p0; return g.ret; })());
        if (f) {
            return new ExcelCalcValue(d);
        }
        return new ExcelCalcValue(0);
    }
    get_name() {
        return "n";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionN.$t = markType(UltraCalcFunctionN, 'UltraCalcFunctionN', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionFact extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d = c._toDecimal2();
        if (d < 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let e = truncate(d);
        let f = UltraCalcFunctionFact._ak(e);
        if (isInfinity(f)) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(f);
    }
    get_name() {
        return "fact";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    static _ak(a, b = 1) {
        if (a == 0) {
            a = 1;
        }
        let c = 1;
        for (let d = a; d > 1; d -= b) {
            c *= d;
        }
        return c;
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionFact.$t = markType(UltraCalcFunctionFact, 'UltraCalcFunctionFact', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionFactDouble extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d = c._toDecimal2();
        if (d < 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let e = truncate(d);
        let f = UltraCalcFunctionFact._ak(e, 2);
        if (isInfinity(f)) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(f);
    }
    get_name() {
        return "factdouble";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionFactDouble.$t = markType(UltraCalcFunctionFactDouble, 'UltraCalcFunctionFactDouble', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionCombin extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d = c._toDecimal2();
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let e = c._toDecimal2();
        let f = truncate(d);
        let g = truncate(e);
        if (e < 0 || d < 0 || g < f) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let h = UltraCalcFunctionCombin._am(g, f, false);
        if (isNaN_(h)) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(h);
    }
    static _am(a, b, c) {
        if (c) {
            a = a + b - 1;
        }
        if (a <= 170) {
            let d = UltraCalcFunctionFact._ak(a);
            let e = UltraCalcFunctionFact._ak(b);
            let f = a - b;
            let g = UltraCalcFunctionFact._ak(f);
            let h = d / (e * g);
            return h;
        }
        else {
            return UltraCalcFunctionCombin._an(a, b);
        }
    }
    static _an(a, b) {
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
        let c = 1;
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
            let d = UltraCalcFunctionCombin._al.e();
            let e = UltraCalcFunctionCombin._ak.e();
            c = d * c / e;
        }
        return c;
    }
    get_name() {
        return "combin";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionCombin.$t = markType(UltraCalcFunctionCombin, 'UltraCalcFunctionCombin', BuiltInFunctionBase.$);
UltraCalcFunctionCombin._ak = null;
UltraCalcFunctionCombin._al = null;
/**
 * @hidden
 */
export class UltraCalcFunctionCombina extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d = c._toDecimal2();
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let e = c._toDecimal2();
        let f = truncate(d);
        let g = truncate(e);
        if (e < 0 || d < 0 || (g == 0 && f > 0)) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let h = UltraCalcFunctionCombin._am(g, f, true);
        if (isNaN_(h)) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(h);
    }
    get_name() {
        return "combina";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionCombina.$t = markType(UltraCalcFunctionCombina, 'UltraCalcFunctionCombina', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionBinomDist extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d = c._toBoolean1();
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let e = c._toDouble3();
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let f = truncate(c._toDecimal2());
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let g = truncate(c._toDecimal2());
        return UltraCalcFunctionBinomDist._ak(f, e, d ? 0 : g, g);
    }
    static _ak(a, b, c, d) {
        if (c < 0 || c > a || b < 0 || b > 1 || c > d || d > a) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let e = 0;
        if (a >= 1030) {
            let f = Math.pow(10, -12);
            let g = 0;
            let h = 0;
            let i = c;
            let j = d;
            let k = a;
            let l = b;
            let m = truncate((k * l));
            let n = c != d;
            g++;
            if (i <= m && m <= j) {
                h++;
            }
            let o = 1;
            let p = false;
            let q = m + 1;
            while (!p && q <= k) {
                let r = o * (k - q + 1) * l / (q * (1 - l));
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
                let s = o * (q + 1) * (1 - l) / ((k - q) * l);
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
            for (let t = c; t <= d && !isNaN_(e); t++) {
                e += UltraCalcFunctionBinomDist._al(t, a, b);
            }
        }
        if (isNaN_(e)) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(e);
    }
    static _al(a, b, c) {
        let d = UltraCalcFunctionCombin._am(b, a, false);
        return d * Math.pow(c, a) * Math.pow(1 - c, b - a);
    }
    get_name() {
        return "binomdist";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 4;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 4;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionBinomDist.$t = markType(UltraCalcFunctionBinomDist, 'UltraCalcFunctionBinomDist', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionCritBinom extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d = c._toDouble3();
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let e = c._toDouble3();
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let f = truncate(c._toDecimal2());
        if (f < 0 || e <= 0 || e >= 1 || d <= 0 || d >= 1) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let g = 0;
        if (f >= 1030) {
            let h = Math.pow(10, -12);
            let i = f;
            let j = e;
            let k, l;
            if (d <= 0.5) {
                k = Math.sqrt(Math.log(1 / (d * d)));
                l = -k + (2.515517 + 0.802853 * k + 0.010328 * k * k) / (1 + 1.432788 * k + 0.189269 * k * k + 0.001308 * k * k * k);
            }
            else {
                k = Math.sqrt(Math.log(1 / Math.pow(1 - d, 2)));
                l = k - (2.515517 + 0.802853 * k + 0.010328 * k * k) / (1 + 1.432788 * k + 0.189269 * k * k + 0.001308 * k * k * k);
            }
            let m = truncate(Math.floor(i * j + l * Math.sqrt(i * j * (1 - j))));
            if (m < 0) {
                m = 0;
            }
            else if (m > i) {
                m = i;
            }
            let n = truncate((i * j));
            let o = 0;
            let p = 0;
            let q = 0;
            o = o + 1;
            if (n == m) {
                p = p + 1;
            }
            if (n <= m) {
                q = q + 1;
            }
            let r = 1;
            let s = false;
            let t = n + 1;
            while (!s && t <= i) {
                let u = r * (i - t + 1) * j / (t * (1 - j));
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
                let v = r * (t + 1) * (1 - j) / ((i - t) * j);
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
            let w = p / o;
            let x = q / o;
            let y = x - w;
            while (true) {
                if (y < d && x >= d) {
                    g = m;
                    break;
                }
                if (y < d && x < d) {
                    let z = w * (i - m) * j / m / (1 - j);
                    y = x;
                    x = x + z;
                    w = z;
                    m++;
                }
                else if (y > d && x > d) {
                    let aa = w * m * (1 - j) / (i - m + 1) / j;
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
            let ab = 0;
            for (g = 0; g <= f; g++) {
                ab += UltraCalcFunctionBinomDist._al(g, f, e);
                if (ab >= d) {
                    break;
                }
            }
        }
        return new ExcelCalcValue(g);
    }
    get_name() {
        return "critbinom";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 3;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 3;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionCritBinom.$t = markType(UltraCalcFunctionCritBinom, 'UltraCalcFunctionCritBinom', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionDegrees extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d = c._toDouble3();
        let e = UltraCalcFunctionDegrees._ak(d);
        return new ExcelCalcValue(e);
    }
    get_name() {
        return "degrees";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    static _ak(a) {
        let b = 180 / Math.PI;
        return a * b;
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionDegrees.$t = markType(UltraCalcFunctionDegrees, 'UltraCalcFunctionDegrees', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionRadians extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d = c._toDouble3();
        let e = UltraCalcFunctionRadians._ak(d);
        return new ExcelCalcValue(e);
    }
    get_name() {
        return "radians";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    static _ak(a) {
        let b = Math.PI / 180;
        return a * b;
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionRadians.$t = markType(UltraCalcFunctionRadians, 'UltraCalcFunctionRadians', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionGcd extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = this._getArguments(a, b, true);
        let d = c[0]._toInt();
        if (d < 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let e;
        if (c.length == 1) {
            return new ExcelCalcValue(d);
        }
        for (let f = 1; f < c.length; f++) {
            let g = c[f];
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
    }
    canParameterBeEnumerable(a) {
        return true;
    }
    get_name() {
        return "gcd";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    static _ak(a, b) {
        if (b == 0) {
            return a;
        }
        return UltraCalcFunctionGcd._ak(b, a % b);
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionGcd.$t = markType(UltraCalcFunctionGcd, 'UltraCalcFunctionGcd', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionLcm extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = this._getArguments(a, b, true);
        let d = c[0]._toInt();
        if (d < 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let e;
        if (c.length == 1) {
            return new ExcelCalcValue(d);
        }
        for (let f = 1; f < c.length; f++) {
            let g = c[f];
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
    }
    canParameterBeEnumerable(a) {
        return true;
    }
    get_name() {
        return "lcm";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    static _ak(a, b) {
        if (a == 0 && b == 0) {
            return 0;
        }
        return intDivide((a * b), UltraCalcFunctionGcd._ak(a, b));
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionLcm.$t = markType(UltraCalcFunctionLcm, 'UltraCalcFunctionLcm', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionMultinomial extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = this._getArguments(a, b, true);
        let d = 0;
        let e = 1;
        for (let f = 0; f < c.length; f++) {
            let g = c[f];
            if (g.isError) {
                return new ExcelCalcValue(g.toErrorValue());
            }
            let h = g._toInt();
            if (h < 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            d += h;
            e *= UltraCalcFunctionFact._ak(h);
        }
        let i = UltraCalcFunctionFact._ak(d);
        let j = i / e;
        return new ExcelCalcValue(j);
    }
    canParameterBeEnumerable(a) {
        return true;
    }
    get_name() {
        return "multinomial";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionMultinomial.$t = markType(UltraCalcFunctionMultinomial, 'UltraCalcFunctionMultinomial', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionMRound extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d = c._toDouble3();
        let e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        let f = e._toDouble3();
        if (f < 0 && d > 0 || f > 0 && d < 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let g = UltraCalcFunctionMRound._ak(f, d);
        return new ExcelCalcValue(g);
    }
    get_name() {
        return "mround";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    static _ak(a, b) {
        let c = a / b;
        if (isInfinity(c) || isNaN_(c)) {
            return 0;
        }
        c += 0.5;
        c = Math.floor(c);
        return c * b;
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionMRound.$t = markType(UltraCalcFunctionMRound, 'UltraCalcFunctionMRound', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionRandBetween extends BuiltInFunctionBase {
    constructor() {
        super(...arguments);
        this._ak = new Random(0);
    }
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d = c._toInt();
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let e = c._toInt();
        if (d < e) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(this._ak.next2(e, d + 1));
    }
    get_name() {
        return "randbetween";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionRandBetween.$t = markType(UltraCalcFunctionRandBetween, 'UltraCalcFunctionRandBetween', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionRoman extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c;
        let d;
        if (b == 2) {
            d = a.pop();
            if (d.isError) {
                return new ExcelCalcValue(d.toErrorValue());
            }
            let e = d._getResolvedValue();
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
        let f = d._toInt();
        if (f < 0 || f > 3999) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        let g = new UltraCalcFunctionRoman_RomanNumeral(f);
        return new ExcelCalcValue(g.p(c));
    }
    get_name() {
        return "roman";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionRoman.$t = markType(UltraCalcFunctionRoman, 'UltraCalcFunctionRoman', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionRoman_RomanNumeral extends Base {
    constructor(a) {
        super();
        this.k = 0;
        if (a < 0 || a > 3999) {
            throw new ArgumentException(2, "Number must be between 1 and 3999", "number");
        }
        this.k = a;
    }
    get l() {
        return this.k;
    }
    static get b() {
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
    }
    static get d() {
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
    }
    static get f() {
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
    }
    static get h() {
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
    }
    static get j() {
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
    }
    toString() {
        return this.p(0);
    }
    o(a) {
        if (a) {
            return this.p(0);
        }
        else {
            return this.p(4);
        }
    }
    p(a) {
        if (this.k == 0) {
            return stringEmpty();
        }
        return UltraCalcFunctionRoman_RomanNumeral.m(this.k, a);
    }
    static m(a, b) {
        let c;
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
        let d = new StringBuilder(0);
        let e = stringEmpty();
        for (let f of fromEnum(c)) {
            while (a >= f.c) {
                a -= f.c;
                d.l(f.d);
            }
        }
        return d.toString();
    }
}
UltraCalcFunctionRoman_RomanNumeral.$t = markType(UltraCalcFunctionRoman_RomanNumeral, 'UltraCalcFunctionRoman_RomanNumeral');
UltraCalcFunctionRoman_RomanNumeral.a = null;
UltraCalcFunctionRoman_RomanNumeral.c = null;
UltraCalcFunctionRoman_RomanNumeral.e = null;
UltraCalcFunctionRoman_RomanNumeral.g = null;
UltraCalcFunctionRoman_RomanNumeral.i = null;
/**
 * @hidden
 */
export class UltraCalcFunctionRoundDown extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d = c._toInt();
        let e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        let f = e._toDouble3();
        let g = d;
        let h = Math.pow(10, g);
        f *= h;
        f = MathUtilities.i(f);
        f = MathUtilities.j(f);
        f /= h;
        f = MathUtilities.i(f);
        if (f == -0) {
            f = 0;
        }
        return new ExcelCalcValue(f);
    }
    get_name() {
        return "rounddown";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionRoundDown.$t = markType(UltraCalcFunctionRoundDown, 'UltraCalcFunctionRoundDown', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionRoundUp extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d = c._toInt();
        let e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        let f = e._toDouble3();
        let g = f >= 0 ? 1 : -1;
        f = Math.abs(f);
        let h = Math.pow(10, d);
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
    }
    get_name() {
        return "roundup";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionRoundUp.$t = markType(UltraCalcFunctionRoundUp, 'UltraCalcFunctionRoundUp', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSeriesSum extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = this._getArguments(a, b - 3, true);
        c.reverse();
        let d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        let e = d._toInt();
        d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        let f = d._toInt();
        d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        let g = d._toDouble3();
        let h = f;
        let i = 0;
        for (let k = 0; k < c.length; k++) {
            let j = c[k];
            if (j.isError) {
                return new ExcelCalcValue(j.toErrorValue());
            }
            let l = j._toDouble3();
            let m = l * Math.pow(g, h);
            i += m;
            h += e;
        }
        return new ExcelCalcValue(i);
    }
    canParameterBeEnumerable(a) {
        return a == 3;
    }
    get_name() {
        return "seriessum";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 4;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 4;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionSeriesSum.$t = markType(UltraCalcFunctionSeriesSum, 'UltraCalcFunctionSeriesSum', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSign extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d = c._toDouble3();
        let e;
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
    }
    get_name() {
        return "sign";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionSign.$t = markType(UltraCalcFunctionSign, 'UltraCalcFunctionSign', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSqrtPi extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d = c._toDouble3();
        if (d < 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let e = Math.sqrt(Math.PI * d);
        return new ExcelCalcValue(e);
    }
    get_name() {
        return "sqrtpi";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionSqrtPi.$t = markType(UltraCalcFunctionSqrtPi, 'UltraCalcFunctionSqrtPi', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionChoose extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = new List$1(ExcelCalcValue.$, 0);
        for (let d = 0; d < b - 1; d++) {
            c.insert(0, a.pop());
        }
        let e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        let f;
        if (((() => { let g = e._toDouble1(f); f = g.p0; return g.ret; })()) == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        let g = truncate(Math.floor(f));
        if (g < 1 || c.count < g) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        return c._inner[g - 1];
    }
    get_name() {
        return "choose";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
    get__s() {
        return true;
    }
    _v(a) {
        if (a == 0) {
            return true;
        }
        return false;
    }
}
UltraCalcFunctionChoose.$t = markType(UltraCalcFunctionChoose, 'UltraCalcFunctionChoose', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionRept extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        let d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let e = c._toInt321();
        if (e < 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        let f = d.toString();
        if (e == 0 || stringIsNullOrEmpty(f)) {
            return new ExcelCalcValue(stringEmpty());
        }
        let g = f.length * e;
        if (32767 < g) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        let h = new StringBuilder(1, g);
        for (let i = 0; i < e; i++) {
            h.l(f);
        }
        return new ExcelCalcValue(h.toString());
    }
    get_name() {
        return "rept";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionRept.$t = markType(UltraCalcFunctionRept, 'UltraCalcFunctionRept', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSubtotal extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = new Array(b - 1);
        for (let d = c.length - 1; d >= 0; d--) {
            let e = a.pop();
            c[d] = e;
        }
        let f = a.pop();
        if (f.isError) {
            return f;
        }
        let g;
        if (((() => { let h = f._toDouble1(g); g = h.p0; return h.ret; })()) == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        let h = truncate(g);
        let i = false;
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
            case 7: return CalcFunctionUtilities.e(boxArray$1(c), CalcFunctionUtilities.b(a, false, false, i) | 2048, (j) => UltraCalcFunctionStdev._al(j, true));
            case 8: return CalcFunctionUtilities.e(boxArray$1(c), CalcFunctionUtilities.b(a, false, false, i) | 2048, (j) => UltraCalcFunctionStdev._al(j, false));
            case 9:
                {
                    let j = 0;
                    return CalcFunctionUtilities.g(boxArray$1(c), CalcFunctionUtilities.b(a, false, false, i) | 2048, (k) => j += k) || new ExcelCalcValue(j);
                }
            case 10: return CalcFunctionUtilities.e(boxArray$1(c), CalcFunctionUtilities.b(a, false, false, i) | 2048, (k) => UltraCalcFunctionVar._ak(k, true));
            case 11: return CalcFunctionUtilities.e(boxArray$1(c), CalcFunctionUtilities.b(a, false, false, i) | 2048, (k) => UltraCalcFunctionVar._ak(k, false));
            default: return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
    }
    canParameterBeEnumerable(a) {
        return 1 <= a;
    }
    get_name() {
        return "subtotal";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionSubtotal.$t = markType(UltraCalcFunctionSubtotal, 'UltraCalcFunctionSubtotal', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionText extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        let d = a.pop();
        if (d.isError) {
            return d;
        }
        if (c.isError) {
            return c;
        }
        if (c.isBoolean) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        let e = d.toString();
        let f = c.toString();
        let g;
        let h = ((() => { let i = d._toDouble1(g); g = i.p0; return i.ret; })());
        if (h == false && d.isString) {
            let i = this._ak(e);
            if (i.hasValue) {
                g = i.value;
                h = true;
            }
            else {
                let j;
                if (((() => { let k = dateTryParse(e, j); j = k.p1; return k.ret; })())) {
                    let k = ExcelCalcValue._dateTimeToExcelDate(d._o, j);
                    if (k.hasValue) {
                        g = k.value;
                        h = true;
                    }
                }
            }
        }
        let l = NaN;
        if (h) {
            l = g;
        }
        let m = new ValueFormatter(0, d._o, f, a._w);
        let n;
        if (((() => { let o = m.v(l, e, n); n = o.p2; return o.ret; })()) == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        return new ExcelCalcValue(n);
    }
    get_name() {
        return "text";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    _ak(a) {
        let b = UltraCalcFunctionText._am.i(a);
        if (b.i == false) {
            return Nullable$1.toNullable(Number_$type, null);
        }
        let c = 0;
        let d = 0;
        let e = 0;
        let f = 0;
        let g = b.m.item1("Hours");
        if (g.d != 0) {
            if (((() => { let h = tryParseInt32_1(g.g, c); c = h.p1; return h.ret; })()) == false) {
            }
        }
        let h = b.m.item1("Minutes");
        if (h.d != 0) {
            if (((() => { let i = tryParseInt32_1(h.g, d); d = i.p1; return i.ret; })()) == false) {
            }
        }
        let i = b.m.item1("Seconds");
        if (i.d != 0) {
            if (((() => { let j = tryParseInt32_1(i.g, e); e = j.p1; return j.ret; })()) == false) {
            }
        }
        let j = b.m.item1("Milliseconds");
        if (j.d != 0) {
            let k = j.g;
            while (k.length < 4) {
                k += "0";
            }
            if (((() => { let l = tryParseInt32_1(k, f); f = l.p1; return l.ret; })()) == false) {
            }
        }
        let l = b.m.item1("AMPM");
        if (l.d != 0) {
            if (c >= 12) {
                return Nullable$1.toNullable(Number_$type, null);
            }
            if (startsWith1(l.g, "P", StringUtilities.g)) {
                c += 12;
            }
        }
        return Nullable$1.toNullable(Number_$type, (c / 24) + (d / 1440) + (e / 86400) + (f / 864000000));
    }
    static get _am() {
        if (UltraCalcFunctionText._al == null) {
            let a = "(?'Hours'[0-9]{1,4})\\s*";
            let b = "\\s*(?'Minutes'[0-9]?[0-9])\\s*";
            let c = "\\s*(?'Seconds'[0-9]?[0-9])\\s*";
            let d = ".\\s*(?'Milliseconds'[0-9]{0,4})[0-9]*\\s*";
            let e = "(\\s+(?'AMPM'(a|p)m?)\\s*)";
            let f = stringFormat("({0}{1})", a, e);
            let g = stringFormat1("({0}:{1}(:{2}({3})?)?{4}?)", a, b, c, d, e);
            let h = stringFormat1("({0}:{1}{2}{3}?)", b, c, d, e);
            UltraCalcFunctionText._al = new Regex(1, stringFormat("^({0}|{1}|{2})$", f, g, h), 8 | 1 | 32 | 512);
        }
        return UltraCalcFunctionText._al;
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionText.$t = markType(UltraCalcFunctionText, 'UltraCalcFunctionText', BuiltInFunctionBase.$);
UltraCalcFunctionText._al = null;
/**
 * @hidden
 */
export class UltraCalcFunctionIfError extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        let d = a.pop();
        let e = d._getResolvedValue();
        if (typeCast(ExcelCalcErrorValue.$, e) !== null) {
            return c;
        }
        return new ExcelCalcValue(e);
    }
    get_name() {
        return "iferror";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionIfError.$t = markType(UltraCalcFunctionIfError, 'UltraCalcFunctionIfError', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionCountA extends BuiltInFunctionBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.k(a, b, 673);
    }
    canParameterBeEnumerable(a) {
        return true;
    }
    get_name() {
        return "counta";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionCountA.$t = markType(UltraCalcFunctionCountA, 'UltraCalcFunctionCountA', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSearch extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = null;
        if (b > 2) {
            c = a.pop();
        }
        let d = a.pop();
        let e = a.pop();
        if (e.isError) {
            return e;
        }
        if (d.isError) {
            return d;
        }
        if (c != null && c.isError) {
            return c;
        }
        let f = e.toString();
        let g = d.toString();
        let h = 0;
        if (c != null) {
            let i;
            if (((() => { let j = c._toDouble1(i); i = j.p0; return j.ret; })()) == false) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
            h = truncate(MathUtilities.j(i)) - 1;
            if (h < 0 || g.length <= h) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
        }
        let j = a._w.compareInfo.indexOf6(g, f, h, 1);
        if (j < 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        return new ExcelCalcValue(j + 1);
    }
    get_name() {
        return "search";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 3;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionSearch.$t = markType(UltraCalcFunctionSearch, 'UltraCalcFunctionSearch', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSearchB extends UltraCalcFunctionSearch {
    get_name() {
        return "searchb";
    }
}
UltraCalcFunctionSearchB.$t = markType(UltraCalcFunctionSearchB, 'UltraCalcFunctionSearchB', UltraCalcFunctionSearch.$);
/**
 * @hidden
 */
export class UltraCalcFunctionAveDev extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = 0;
        let d = this._getArguments(a, b, true);
        let e = new List$1(Number_$type, 2, d.length);
        for (let g = 0; g < d.length; g++) {
            let f = d[g];
            if (f == null) {
                continue;
            }
            if (f.isError) {
                return new ExcelCalcValue(f.toErrorValue());
            }
            let h;
            if (((() => { let i = f._toDouble1(h); h = i.p0; return i.ret; })())) {
                c += h;
                e.add(h);
            }
        }
        let i = c / e.count;
        let j = 0;
        for (let k = 0; k < e.count; k++) {
            j += Math.abs(e._inner[k] - i);
        }
        let l = j / e.count;
        return new ExcelCalcValue(l);
    }
    get_name() {
        return "avedev";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionAveDev.$t = markType(UltraCalcFunctionAveDev, 'UltraCalcFunctionAveDev', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcConditionalFunctionBase extends BuiltInFunctionBase {
    doesParameterAllowIntermediateResultArray(a, b) {
        if (a == 1) {
            return (b == false);
        }
        return false;
    }
    evaluate(a, b) {
        let c = null;
        if (this._an && b == 3) {
            c = a.pop();
        }
        let d = a.pop();
        let e = a.pop();
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
        let f = new UltraCalcConditionalFunctionBase_CriteriaEvaluator(a, d._getResolvedValue());
        if (c != null && (c.isArrayGroup || c.isReference == false)) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        let g = e.toArrayProxy();
        let h = null;
        if (c != null) {
            h = typeCast(CellCalcReference.$, c._d(false).item(0, 0).value);
            if (h == null) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
        }
        let i = new UltraCalcConditionalFunctionBase_EvaluateHelper(this, f, g);
        if (h == null) {
            g._m(false, runOn(i, i.h));
        }
        else {
            let j = h._ao;
            let k = h._w.index;
            let l = h._u;
            let m = l._columns$i.maxCount - 1;
            let n = Math.min(m, j + g.getLength(0) - 1);
            let o = l._rows$i.maxCount - 1;
            let p = Math.min(o, k + g.getLength(1) - 1);
            let q = l._cx(k, j, p, n);
            let r = new ExcelCalcValue(q._c);
            r._n = c._n;
            r._y = true;
            let s = r._d(false);
            s._m(false, runOn(i, i.h));
        }
        return this._al(i.e, i.g);
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        if (this._an) {
            return 3;
        }
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    _v(a) {
        if (a == 2) {
            return false;
        }
        return true;
    }
    get__am() {
        return true;
    }
    get _am() {
        return this.get__am();
    }
    get__an() {
        return true;
    }
    get _an() {
        return this.get__an();
    }
    static _ak(a, b, c, d, e = null) {
        if (e == null && b % 2 == 1) {
            return new ExcelCalcValue(ErrorValue.argumentOrFunctionNotAvailable);
        }
        else if (e != null && b % 2 == 0) {
            return new ExcelCalcValue(ErrorValue.argumentOrFunctionNotAvailable);
        }
        let f = 0;
        let g = 0;
        let h = new List$1(Tuple$2.$.specialize(UltraCalcConditionalFunctionBase_CriteriaEvaluator.$, ArrayProxy.$), 0);
        while (b > 1) {
            let i = a.pop();
            let j = a.pop();
            if (j.isArrayGroup || j.isReference == false) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
            let k = j.toArrayProxy();
            let l = new UltraCalcConditionalFunctionBase_CriteriaEvaluator(a, i._getResolvedValue());
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
        let m = null;
        if (e != null) {
            let n = a.pop();
            if (n.isArrayGroup || n.isReference == false) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
            m = n.toArrayProxy();
            if (f != m.getLength(0) || g != m.getLength(1)) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
        }
        let o = a._w;
        let p = 0;
        let q = c;
        let r = null;
        let s = (t, u) => {
            if (r == null) {
                let v = true;
                for (let w = 0; w < h.count; w++) {
                    let x = h._inner[w];
                    let y = w == 0 ? t : x.d._b(u);
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
                        let z = m._b(u);
                        if (z.isError) {
                            r = z.toErrorValue();
                        }
                        else if (z.isBoolean || z.isString || z.isNull) {
                        }
                        else {
                            let aa = z._getResolvedValue3(false);
                            let ab;
                            let ac;
                            if (((() => { let ad = z._ao(aa, ac, o, ab); ac = ad.p1; ab = ad.p3; return ad.ret; })())) {
                                p++;
                                q = e(q, ac);
                            }
                        }
                        if (m._g) {
                            ExcelCalcNumberStack._ad(z);
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
    }
}
UltraCalcConditionalFunctionBase.$t = markType(UltraCalcConditionalFunctionBase, 'UltraCalcConditionalFunctionBase', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcConditionalFunctionBase_CriteriaEvaluator extends Base {
    constructor(a, b) {
        super();
        this.b = null;
        this.f = null;
        this.e = null;
        this.c = 0;
        this.g = null;
        this.a = null;
        let c = a._w;
        this.f = b != null ? b.toString() : null;
        let d;
        let e = typeCast(String_$type, b);
        if (stringIsNullOrEmpty(e) == false) {
            let f = true;
            let g = null;
            switch (e.charAt(0)) {
                case '=':
                    this.c = 0;
                    g = e.substr(1);
                    break;
                case '<':
                    f = false;
                    if (e.length > 1) {
                        switch (e.charAt(1)) {
                            case '>':
                                this.c = 1;
                                g = e.substr(2);
                                break;
                            case '=':
                                this.c = 5;
                                g = e.substr(2);
                                break;
                        }
                    }
                    if (g == null) {
                        this.c = 4;
                        g = e.substr(1);
                    }
                    break;
                case '>':
                    f = false;
                    if (e.length > 1 && e.charAt(1) == '=') {
                        this.c = 3;
                        g = e.substr(2);
                    }
                    else {
                        this.c = 2;
                        g = e.substr(1);
                    }
                    break;
                default:
                    g = e;
                    break;
            }
            this.f = g;
            let h;
            if (((() => { let i = MathUtilities.c(g.trim(), c, h); h = i.p2; return i.ret; })())) {
                d = h;
                if (f == false) {
                    this.f = null;
                }
            }
            else {
                if (stringContains(g, "*") || stringContains(g, "?")) {
                    let i;
                    this.g = ((() => { let j = ExcelUtils.ep(g, i); i = j.p1; return j.ret; })());
                }
                d = g;
            }
        }
        else {
            d = b;
        }
        this.b = new ExcelCalcValue(d);
        this.b._n = new CalculationContext(1, a, 64);
        this.e = this.b._getResolvedValue3(false);
        this.a = typeCast(ExcelCalcErrorValue.$, d);
    }
    d(a) {
        let b = a._getResolvedValue3(false);
        if (ExcelCalcValue._aa(b)) {
            return this.a != null && this.a.code == b.code;
        }
        if (ExcelCalcValue._ac(b) != ExcelCalcValue._ac(this.e)) {
            return false;
        }
        let c = false;
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
        let d = ExcelCalcValue._a4(a, b, this.b, c ? this.f : this.e);
        switch (this.c) {
            case 0: return d == 0;
            case 1: return d != 0;
            case 2: return d > 0;
            case 3: return d >= 0;
            case 4: return d < 0;
            case 5: return d <= 0;
            default: return false;
        }
    }
}
UltraCalcConditionalFunctionBase_CriteriaEvaluator.$t = markType(UltraCalcConditionalFunctionBase_CriteriaEvaluator, 'UltraCalcConditionalFunctionBase_CriteriaEvaluator');
/**
 * @hidden
 */
export class UltraCalcConditionalFunctionBase_EvaluateHelper extends Base {
    constructor(a, b, c) {
        super();
        this.c = null;
        this.b = null;
        this.a = null;
        this.d = 0;
        this.f = 0;
        this.b = a;
        this.c = b;
        this.a = c;
    }
    h(a, b) {
        let c = this.a._b(b);
        if (this.c.d(c)) {
            this.f++;
            if (this.b._am) {
                let d;
                if (((() => { let e = a._toDouble1(d); d = e.p0; return e.ret; })())) {
                    this.d += d;
                }
            }
        }
        if (this.a._g) {
            ExcelCalcNumberStack._ad(c);
        }
    }
    get e() {
        return this.d;
    }
    get g() {
        return this.f;
    }
}
UltraCalcConditionalFunctionBase_EvaluateHelper.$t = markType(UltraCalcConditionalFunctionBase_EvaluateHelper, 'UltraCalcConditionalFunctionBase_EvaluateHelper');
/**
 * @hidden
 */
export class UltraCalcFunctionAddress extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = null;
        if (b == 5) {
            c = a.pop();
        }
        let d = null;
        if (b >= 4) {
            d = a.pop();
        }
        let e = null;
        if (b >= 3) {
            e = a.pop();
        }
        let f = a.pop();
        let g = a.pop();
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
        let h = g._toInt321();
        let i = f._toInt321();
        let j = e == null ? 1 : e._toInt321();
        let k = d == null ? true : d._toBoolean1();
        let l = c == null ? null : c.toString();
        let m = this._ak(a);
        let n = Workbook.getMaxRowCount(m);
        let o = Workbook.getMaxColumnCount(m);
        if (h < 1 || n < h) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        if (i < 1 || o < i) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        let p;
        let q;
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
        let r = k ? 1 : 0;
        let s = stringEmpty();
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
    }
    _ak(a) {
        let b = a._r;
        if (b != null) {
            return b.currentFormat;
        }
        return 2;
    }
    get_name() {
        return "address";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 5;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        if (a == 3) {
            return false;
        }
        return true;
    }
}
UltraCalcFunctionAddress.$t = markType(UltraCalcFunctionAddress, 'UltraCalcFunctionAddress', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionAreas extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isReference == false) {
            if (c.isError) {
                return c;
            }
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        return new ExcelCalcValue(c._b(false).length);
    }
    get_name() {
        return "areas";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    _v(a) {
        return false;
    }
}
UltraCalcFunctionAreas.$t = markType(UltraCalcFunctionAreas, 'UltraCalcFunctionAreas', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionAverageIf extends UltraCalcConditionalFunctionBase {
    _al(a, b) {
        if (b == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(2));
        }
        return new ExcelCalcValue(a / b);
    }
    get_name() {
        return "averageif";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionAverageIf.$t = markType(UltraCalcFunctionAverageIf, 'UltraCalcFunctionAverageIf', UltraCalcConditionalFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionColumn extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c;
        if (b == 0) {
            c = UltraCalcFunctionColumn._ak(a._k);
        }
        else {
            let d = a.pop();
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
    }
    static _ak(a) {
        let b = typeCast(CellCalcReference.$, a.context);
        if (b != null) {
            return b._ao + 1;
        }
        let c = typeCast(WorksheetRegion.$, a.context);
        if (c != null) {
            return c.firstColumn + 1;
        }
        let d = typeCast(ReadOnlyCollection$1.$.specialize(WorksheetRegion.$), a.context);
        if (d != null) {
            if (d.count != 1) {
                return -1;
            }
            return d.item(0).firstColumn + 1;
        }
        let e = typeCast(TempCellCalcReference.$, a.context);
        if (e != null) {
            return e._ao + 1;
        }
        return -1;
    }
    get_name() {
        return "column";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 0;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    _v(a) {
        return false;
    }
}
UltraCalcFunctionColumn.$t = markType(UltraCalcFunctionColumn, 'UltraCalcFunctionColumn', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionColumns extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isReference == false && c.isError) {
            return c;
        }
        let d = c._b(false);
        if (d.length != 1) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(0));
        }
        return new ExcelCalcValue(d[0].getLength(0));
    }
    get_name() {
        return "columns";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    _v(a) {
        return false;
    }
}
UltraCalcFunctionColumns.$t = markType(UltraCalcFunctionColumns, 'UltraCalcFunctionColumns', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionTwoMatrixFunction extends BuiltInFunctionBase {
    _ak(a, b) {
        let c;
        let d;
        let e;
        let f = UltraCalcFunctionTwoMatrixFunction._ao(a, c, d, e);
        c = f.p1;
        d = f.p2;
        e = f.p3;
        if (c != null) {
            return new ExcelCalcValue(c);
        }
        return new ExcelCalcValue(UltraCalcFunctionTwoMatrixFunction._am(d, e, b));
    }
    static _al(a, b) {
        b = null;
        let c;
        let d;
        let e = UltraCalcFunctionTwoMatrixFunction._ao(a, b, c, d);
        b = e.p1;
        c = e.p2;
        d = e.p3;
        if (b != null) {
            return {
                ret: 0,
                p1: b
            };
        }
        let f;
        let g;
        let h;
        let i = UltraCalcFunctionTwoMatrixFunction._ar(c, d, f, g, h);
        f = i.p2;
        g = i.p3;
        h = i.p4;
        let j = g / f;
        let k = h / f;
        let l = UltraCalcFunctionTwoMatrixFunction._am(c, d, (m, n) => (m - j) * (n - k));
        let m = UltraCalcFunctionTwoMatrixFunction._an(c, (n) => Math.pow(n - j, 2));
        let n = UltraCalcFunctionTwoMatrixFunction._an(d, (o) => Math.pow(o - k, 2));
        let o = Math.sqrt(m * n);
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
    }
    static _ao(a, b, c, d) {
        b = null;
        c = null;
        d = null;
        let e = a.pop();
        let f = a.pop();
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
        let g = f.toArrayProxy();
        let h = g.getLength(0);
        let i = g.getLength(1);
        let j = e.toArrayProxy();
        let k = j.getLength(0);
        let l = j.getLength(1);
        if (h != k || i != l) {
            b = new ExcelCalcErrorValue(3);
            return {
                p1: b,
                p2: c,
                p3: d
            };
        }
        c = ((() => { let m = MatrixUtilities.b(g, 2, b); b = m.p2; return m.ret; })());
        if (b != null) {
            return {
                p1: b,
                p2: c,
                p3: d
            };
        }
        d = ((() => { let m = MatrixUtilities.b(j, 2, b); b = m.p2; return m.ret; })());
        return {
            p1: b,
            p2: c,
            p3: d
        };
    }
    static _aq(a, b, c, d) {
        d = null;
        b = 0;
        c = 0;
        let e;
        let f;
        let g = UltraCalcFunctionTwoMatrixFunction._ao(a, d, e, f);
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
        let h;
        let i;
        let j = UltraCalcFunctionTwoMatrixFunction._ap(e, f, h, i, b, c, d);
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
    }
    static _ap(a, b, c, d, e, f, g) {
        g = null;
        e = 0;
        f = 0;
        let h;
        let i;
        let j;
        let k = UltraCalcFunctionTwoMatrixFunction._ar(a, b, h, i, j);
        h = k.p2;
        i = k.p3;
        j = k.p4;
        c = i / h;
        d = j / h;
        let l = c;
        let m = d;
        let n = UltraCalcFunctionTwoMatrixFunction._am(a, b, (o, p) => (o - l) * (p - m));
        let o = UltraCalcFunctionTwoMatrixFunction._an(b, (p) => Math.pow(p - m, 2));
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
    }
    static _ar(a, b, c, d, e) {
        let f = arrayGetLength(a, 0);
        let g = arrayGetLength(a, 1);
        c = f * g;
        d = 0;
        e = 0;
        for (let h = 0; h < f; h++) {
            for (let i = 0; i < g; i++) {
                let j = a[h][i];
                let k = b[h][i];
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
    }
    static _an(a, b) {
        let c = arrayGetLength(a, 0);
        let d = arrayGetLength(a, 1);
        let e = 0;
        for (let f = 0; f < c; f++) {
            for (let g = 0; g < d; g++) {
                let h = a[f][g];
                if (isNaN_(h)) {
                    continue;
                }
                e += b(h);
            }
        }
        return e;
    }
    static _am(a, b, c) {
        let d = arrayGetLength(a, 0);
        let e = arrayGetLength(a, 1);
        let f = 0;
        for (let g = 0; g < d; g++) {
            for (let h = 0; h < e; h++) {
                let i = a[g][h];
                let j = b[g][h];
                if (isNaN_(i) || isNaN_(j)) {
                    continue;
                }
                f += c(i, j);
            }
        }
        return f;
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionTwoMatrixFunction.$t = markType(UltraCalcFunctionTwoMatrixFunction, 'UltraCalcFunctionTwoMatrixFunction', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionCorrel extends UltraCalcFunctionTwoMatrixFunction {
    evaluate(a, b) {
        let c;
        let d;
        let e;
        let f = UltraCalcFunctionTwoMatrixFunction._ao(a, c, d, e);
        c = f.p1;
        d = f.p2;
        e = f.p3;
        if (c != null) {
            return new ExcelCalcValue(c);
        }
        let g;
        let h;
        let i;
        let j = UltraCalcFunctionTwoMatrixFunction._ar(d, e, g, h, i);
        g = j.p2;
        h = j.p3;
        i = j.p4;
        let k = (l) => l * l;
        let l = UltraCalcFunctionTwoMatrixFunction._an(d, k);
        let m = UltraCalcFunctionTwoMatrixFunction._an(e, k);
        let n = l - ((h * h) / g);
        let o = m - ((i * i) / g);
        let p = UltraCalcFunctionTwoMatrixFunction._am(d, e, (q, r) => q * r);
        let q = p - ((h * i) / g);
        if (n == 0 || o == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(2));
        }
        let r = q / (Math.sqrt(n) * Math.sqrt(o));
        return new ExcelCalcValue(r);
    }
    get_name() {
        return "correl";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionCorrel.$t = markType(UltraCalcFunctionCorrel, 'UltraCalcFunctionCorrel', UltraCalcFunctionTwoMatrixFunction.$);
/**
 * @hidden
 */
export class UltraCalcFunctionCountIf extends UltraCalcConditionalFunctionBase {
    _al(a, b) {
        return new ExcelCalcValue(b);
    }
    get_name() {
        return "countif";
    }
    get name() {
        return this.get_name();
    }
    get__am() {
        return false;
    }
    get__an() {
        return false;
    }
}
UltraCalcFunctionCountIf.$t = markType(UltraCalcFunctionCountIf, 'UltraCalcFunctionCountIf', UltraCalcConditionalFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionCovar extends UltraCalcFunctionTwoMatrixFunction {
    evaluate(a, b) {
        return UltraCalcFunctionCovar._as(a, b, false);
    }
    static _as(a, b, c) {
        let d;
        let e;
        let f;
        let g = UltraCalcFunctionTwoMatrixFunction._ao(a, d, e, f);
        d = g.p1;
        e = g.p2;
        f = g.p3;
        if (d != null) {
            return new ExcelCalcValue(d);
        }
        let h;
        let i;
        let j;
        let k = UltraCalcFunctionTwoMatrixFunction._ar(e, f, h, i, j);
        h = k.p2;
        i = k.p3;
        j = k.p4;
        if (h == 0 || (h == 1 && c)) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(2));
        }
        let l = i / h;
        let m = j / h;
        let n = UltraCalcFunctionTwoMatrixFunction._am(e, f, (o, p) => (o - l) * (p - m));
        return new ExcelCalcValue(n / (h - (c ? 1 : 0)));
    }
    get_name() {
        return "covar";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionCovar.$t = markType(UltraCalcFunctionCovar, 'UltraCalcFunctionCovar', UltraCalcFunctionTwoMatrixFunction.$);
/**
 * @hidden
 */
export class UltraCalcFunctionForecast extends UltraCalcFunctionTwoMatrixFunction {
    evaluate(a, b) {
        let c;
        let d;
        let e;
        let f = UltraCalcFunctionTwoMatrixFunction._ao(a, c, d, e);
        c = f.p1;
        d = f.p2;
        e = f.p3;
        let g = a.pop();
        if (g.isError) {
            return g;
        }
        let h = g._toDouble3();
        if (c != null) {
            return new ExcelCalcValue(c);
        }
        let i;
        let j;
        let k;
        let l;
        let m = UltraCalcFunctionTwoMatrixFunction._ap(d, e, i, j, k, l, c);
        i = m.p2;
        j = m.p3;
        k = m.p4;
        l = m.p5;
        c = m.p6;
        if (c != null) {
            return new ExcelCalcValue(c);
        }
        return new ExcelCalcValue(l + (k * h));
    }
    get_name() {
        return "forecast";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 3;
    }
    get_maxArgs() {
        return 3;
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionForecast.$t = markType(UltraCalcFunctionForecast, 'UltraCalcFunctionForecast', UltraCalcFunctionTwoMatrixFunction.$);
/**
 * @hidden
 */
export class UltraCalcFunctionLookupBase extends BuiltInFunctionBase {
    static _am(a, b, c, d, e, f, g) {
        let h = a._getResolvedValue();
        if (ExcelUtils.a9(h)) {
            return Nullable$1.toNullable(Number_$type, null);
        }
        if (b) {
            if (ExcelCalcValue._ag(h) == false) {
                return Nullable$1.toNullable(Number_$type, null);
            }
            let i = a._bp(h, a._a0);
            if (g == null) {
                return Nullable$1.toNullable(Number_$type, StringUtilities.c(i, c, a._a0, 1));
            }
            let j = g.i(i);
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
        let k;
        let l;
        if (((() => { let m = a._ao(h, k, a._a0, l); k = m.p1; l = m.p3; return m.ret; })()) == false) {
            return Nullable$1.toNullable(Number_$type, null);
        }
        return Nullable$1.toNullable(Number_$type, Base.compareSimple(k, f));
    }
    static _an(a) {
        let b;
        return ((() => { let c = ExcelUtils.ep(a, b); b = c.p1; return c.ret; })());
    }
    static _al(a, b, c) {
        let d = b.isString;
        let e = d ? b.toString() : null;
        let f = b.isBoolean;
        let g = f ? b._toBoolean1() : false;
        let h = 0;
        if (f == false && d == false) {
            let i = b._toDouble1(h);
            h = i.p0;
        }
        let j = null;
        if (d && c == 0) {
            j = UltraCalcFunctionLookupBase._an(e);
        }
        let k = -1;
        for (let l of fromEnum(a)) {
            let m = l.key;
            let n = l.value;
            n._y = true;
            let o = UltraCalcFunctionLookupBase._am(n, d, e, f, g, h, j);
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
        return k;
    }
    static _ak(a, b) {
        b = true;
        if (a != null) {
            if (a.isBoolean) {
                b = a._toBoolean1();
            }
            else if (a.isDateTime) {
                b = true;
            }
            else {
                let c;
                if (((() => { let d = a._toDouble1(c); c = d.p0; return d.ret; })())) {
                    b = (c != 0);
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
    }
    get_minArgs() {
        return 3;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 4;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    _v(a) {
        if (a == 1) {
            return false;
        }
        return true;
    }
}
UltraCalcFunctionLookupBase.$t = markType(UltraCalcFunctionLookupBase, 'UltraCalcFunctionLookupBase', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionHLookup extends UltraCalcFunctionLookupBase {
    evaluate(a, b) {
        let c = null;
        if (b == 4) {
            c = a.pop();
        }
        let d = a.pop();
        let e = a.pop();
        let f = a.pop();
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
        let g = e._d(false);
        let h;
        if (((() => { let i = d._toDouble1(h); h = i.p0; return i.ret; })()) == false || h < 1) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        let i = truncate(Math.floor(h)) - 1;
        let j;
        if (((() => { let k = UltraCalcFunctionLookupBase._ak(c, j); j = k.p1; return k.ret; })()) == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        let k = g.getLength(0);
        let l = UltraCalcFunctionLookupBase._al(g._i(1, 0), f, j ? 1 : 0);
        if (l < 0 || k <= l) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        let m = g.getLength(1);
        if (m <= i) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(0));
        }
        let n = g.item(l, i);
        n._y = true;
        return new ExcelCalcValue(n._getResolvedValue());
    }
    get_name() {
        return "hlookup";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionHLookup.$t = markType(UltraCalcFunctionHLookup, 'UltraCalcFunctionHLookup', UltraCalcFunctionLookupBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionHyperlink extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = null;
        if (b == 2) {
            c = a.pop();
        }
        let d = a.pop();
        if (d.isError) {
            return d;
        }
        if (c != null && c.isError) {
            return c;
        }
        let e = d.toString();
        let f = c == null ? e : c.toString();
        return new ExcelCalcValue(new HyperlinkResult(e, f));
    }
    get_name() {
        return "hyperlink";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionHyperlink.$t = markType(UltraCalcFunctionHyperlink, 'UltraCalcFunctionHyperlink', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionIndex extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = null;
        if (b == 4) {
            c = a.pop();
        }
        let d = null;
        if (b >= 3) {
            d = a.pop();
        }
        let e = a.pop();
        let f = a.pop();
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
        let g = e._toInt321() - 1;
        let h = (d == null ? 1 : d._toInt321()) - 1;
        let i = (c == null ? 1 : c._toInt321()) - 1;
        let j = f._b(false);
        if (j.length <= i) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(0));
        }
        let k = j[i];
        let l = k.getLength(0);
        let m = k.getLength(1);
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
                    let n = ((() => {
                        let $firstRank;
                        let $ret = new Array($firstRank = 1);
                        let $currRet = $ret;
                        for (let $rankInit = 0; $rankInit < $firstRank; $rankInit++) {
                            $currRet[$rankInit] = new Array(m);
                        }
                        return $ret;
                    })());
                    for (let o = 0; o < m; o++) {
                        n[0][o] = k.item(h, o);
                    }
                    return new ExcelCalcValue(n);
                }
            }
            else {
                let p = ((() => {
                    let $firstRank;
                    let $ret = new Array($firstRank = l);
                    let $currRet = $ret;
                    for (let $rankInit = 0; $rankInit < $firstRank; $rankInit++) {
                        $currRet[$rankInit] = new Array(1);
                    }
                    return $ret;
                })());
                for (let q = 0; q < l; q++) {
                    p[q][0] = k.item(q, g);
                }
                return new ExcelCalcValue(p);
            }
        }
        return k.item(h, g);
    }
    get_name() {
        return "index";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 4;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    _v(a) {
        if (a == 0) {
            return false;
        }
        return true;
    }
}
UltraCalcFunctionIndex.$t = markType(UltraCalcFunctionIndex, 'UltraCalcFunctionIndex', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionIndirect extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = null;
        if (b == 2) {
            c = a.pop();
        }
        let d = a.pop();
        if (d.isError) {
            return d;
        }
        if (c != null && c.isError) {
            return c;
        }
        let e = d.toString();
        let f = c == null ? true : c._toBoolean1();
        let g = f ? 1 : 0;
        let h = typeCast(RefBase.$, ExcelCalcEngine.b(a._k));
        if (h == null) {
            return new ExcelCalcValue(ExcelReferenceError._a2);
        }
        let i = CalcUtilities.f(e, h._w, h._ao, h._u, h._t, g);
        return new ExcelCalcValue(i);
    }
    get_name() {
        return "indirect";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionIndirect.$t = markType(UltraCalcFunctionIndirect, 'UltraCalcFunctionIndirect', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionIntercept extends UltraCalcFunctionTwoMatrixFunction {
    evaluate(a, b) {
        let c;
        let d;
        let e;
        let f = UltraCalcFunctionTwoMatrixFunction._aq(a, d, e, c);
        d = f.p1;
        e = f.p2;
        c = f.p3;
        if (c != null) {
            return new ExcelCalcValue(c);
        }
        return new ExcelCalcValue(e);
    }
    get_name() {
        return "intercept";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionIntercept.$t = markType(UltraCalcFunctionIntercept, 'UltraCalcFunctionIntercept', UltraCalcFunctionTwoMatrixFunction.$);
/**
 * @hidden
 */
export class UltraCalcFunctionLookup extends UltraCalcFunctionLookupBase {
    evaluate(a, b) {
        let c = null;
        if (b == 3) {
            c = a.pop();
        }
        let d = a.pop();
        let e = a.pop();
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
        let f = d._d(false);
        let g = f.getLength(0);
        let h = f.getLength(1);
        let i = (h < g);
        let j = i ? g : h;
        let k = null;
        let l = 0;
        let m = 0;
        let n = false;
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
        let o = UltraCalcFunctionLookupBase._al(f._i(i ? 1 : 0, 0), e, 1);
        if (o < 0 || j <= o) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        let p;
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
    }
    get_minArgs() {
        return 2;
    }
    get_maxArgs() {
        return 3;
    }
    get_name() {
        return "lookup";
    }
    get name() {
        return this.get_name();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        if (a == 1) {
            return true;
        }
        return (b == false);
    }
}
UltraCalcFunctionLookup.$t = markType(UltraCalcFunctionLookup, 'UltraCalcFunctionLookup', UltraCalcFunctionLookupBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionMatch extends UltraCalcFunctionLookupBase {
    evaluate(a, b) {
        let c = null;
        if (b == 3) {
            c = a.pop();
        }
        let d = a.pop();
        let e = a.pop();
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
        let f = d._d(false);
        let g = f.getLength(0);
        let h = f.getLength(1);
        if (g != 1 && h != 1) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        let i = (h < g);
        let j = i ? g : h;
        let k = 1;
        if (c != null && ((() => { let l = c._toDouble1(k); k = l.p0; return l.ret; })()) == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        let l = truncate(MathUtilities.j(k));
        let m = UltraCalcFunctionLookupBase._al(f._i(i ? 1 : 0, 0), e, l);
        if (m < 0 || j <= m) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        return new ExcelCalcValue(m + 1);
    }
    get_name() {
        return "match";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get_maxArgs() {
        return 3;
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionMatch.$t = markType(UltraCalcFunctionMatch, 'UltraCalcFunctionMatch', UltraCalcFunctionLookupBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionMdeterm extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return c;
        }
        let d = c.toArrayProxy();
        let e = d.getLength(0);
        if (e != d.getLength(1)) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        let f;
        let g = ((() => { let h = MatrixUtilities.b(d, 0, f); f = h.p2; return h.ret; })());
        if (f != null) {
            return new ExcelCalcValue(f);
        }
        return new ExcelCalcValue(MatrixUtilities.g(g, e));
    }
    get_name() {
        return "mdeterm";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionMdeterm.$t = markType(UltraCalcFunctionMdeterm, 'UltraCalcFunctionMdeterm', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionMinverse extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return c;
        }
        let d = c.toArrayProxy();
        let e = d.getLength(0);
        if (e != d.getLength(1)) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        let f;
        let g = ((() => { let h = MatrixUtilities.b(d, 0, f); f = h.p2; return h.ret; })());
        if (f != null) {
            return new ExcelCalcValue(f);
        }
        let h = ((() => { let i = MatrixUtilities.a(g, e, f); f = i.p2; return i.ret; })());
        if (f != null) {
            return new ExcelCalcValue(f);
        }
        let i = ((() => {
            let $firstRank;
            let $ret = new Array($firstRank = e);
            let $currRet = $ret;
            for (let $rankInit = 0; $rankInit < $firstRank; $rankInit++) {
                $currRet[$rankInit] = new Array(e);
            }
            return $ret;
        })());
        for (let j = 0; j < e; j++) {
            for (let k = 0; k < e; k++) {
                i[j][k] = new ExcelCalcValue(h[j][k]);
            }
        }
        return new ExcelCalcValue(i);
    }
    get_name() {
        return "minverse";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionMinverse.$t = markType(UltraCalcFunctionMinverse, 'UltraCalcFunctionMinverse', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionMmult extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        let d = a.pop();
        if (d.isError) {
            return d;
        }
        if (c.isError) {
            return c;
        }
        let e = d.toArrayProxy();
        let f = e.getLength(0);
        let g = e.getLength(1);
        let h = c.toArrayProxy();
        let i = h.getLength(0);
        let j = h.getLength(1);
        if (f != j) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        let k;
        let l = ((() => { let m = MatrixUtilities.b(e, 0, k); k = m.p2; return m.ret; })());
        if (k != null) {
            return new ExcelCalcValue(k);
        }
        let m = ((() => { let n = MatrixUtilities.b(h, 0, k); k = n.p2; return n.ret; })());
        if (k != null) {
            return new ExcelCalcValue(k);
        }
        let n = ((() => {
            let $firstRank;
            let $ret = new Array($firstRank = i);
            let $currRet = $ret;
            for (let $rankInit = 0; $rankInit < $firstRank; $rankInit++) {
                $currRet[$rankInit] = new Array(g);
            }
            return $ret;
        })());
        for (let o = 0; o < i; o++) {
            for (let p = 0; p < g; p++) {
                let q = 0;
                for (let r = 0; r < f; r++) {
                    q += l[r][p] * m[o][r];
                }
                n[o][p] = new ExcelCalcValue(q);
            }
        }
        return new ExcelCalcValue(n);
    }
    get_name() {
        return "mmult";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionMmult.$t = markType(UltraCalcFunctionMmult, 'UltraCalcFunctionMmult', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionOffset extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = null;
        if (b == 5) {
            c = a.pop();
        }
        let d = null;
        if (b >= 4) {
            d = a.pop();
        }
        let e = a.pop();
        let f = a.pop();
        let g = a.pop();
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
        let h = RegionGroupCalcReference._a7(g.toReference());
        if (h._ba.count != 1) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        let i = h._ba.item(0);
        let j = f._toInt321();
        let k = e._toInt321();
        let l = d == null ? i._aa : d._toInt321();
        let m = c == null ? i._ad : c._toInt321();
        if (l <= 0 || m <= 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(0));
        }
        let n = i.firstRow + j;
        let o = i.firstColumn + k;
        if (o < 0 || n < 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(0));
        }
        let p = n + l - 1;
        let q = o + m - 1;
        let r = i.worksheet;
        if (r == null) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(0));
        }
        let s = r._rows$i.maxCount - 1;
        let t = r._columns$i.maxCount - 1;
        if (s < p || t < q) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(0));
        }
        return new ExcelCalcValue(r._cx(n, o, p, q)._c);
    }
    get_name() {
        return "offset";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 3;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 5;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    _v(a) {
        if (a == 0) {
            return false;
        }
        return true;
    }
}
UltraCalcFunctionOffset.$t = markType(UltraCalcFunctionOffset, 'UltraCalcFunctionOffset', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionPearson extends UltraCalcFunctionTwoMatrixFunction {
    evaluate(a, b) {
        let c;
        let d = ((() => { let e = UltraCalcFunctionTwoMatrixFunction._al(a, c); c = e.p1; return e.ret; })());
        if (c != null) {
            return new ExcelCalcValue(c);
        }
        return new ExcelCalcValue(d);
    }
    get_name() {
        return "pearson";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionPearson.$t = markType(UltraCalcFunctionPearson, 'UltraCalcFunctionPearson', UltraCalcFunctionTwoMatrixFunction.$);
/**
 * @hidden
 */
export class UltraCalcFunctionRow extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c;
        if (b == 0) {
            c = UltraCalcFunctionRow._ak(a._k);
        }
        else {
            let d = a.pop();
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
    }
    static _ak(a) {
        let b = typeCast(CellCalcReference.$, a.context);
        if (b != null) {
            return b._w.index + 1;
        }
        let c = typeCast(WorksheetRegion.$, a.context);
        if (c != null) {
            return c.firstRow + 1;
        }
        let d = typeCast(ReadOnlyCollection$1.$.specialize(WorksheetRegion.$), a.context);
        if (d != null) {
            if (d.count != 1) {
                return -1;
            }
            return d.item(0).firstRow + 1;
        }
        let e = typeCast(TempCellCalcReference.$, a.context);
        if (e != null) {
            return e._as + 1;
        }
        return -1;
    }
    get_name() {
        return "row";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 0;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    _v(a) {
        return false;
    }
}
UltraCalcFunctionRow.$t = markType(UltraCalcFunctionRow, 'UltraCalcFunctionRow', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionRows extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isReference == false && c.isError) {
            return c;
        }
        let d = c._b(false);
        if (d.length != 1) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(0));
        }
        return new ExcelCalcValue(d[0].getLength(1));
    }
    get_name() {
        return "rows";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    _v(a) {
        return false;
    }
}
UltraCalcFunctionRows.$t = markType(UltraCalcFunctionRows, 'UltraCalcFunctionRows', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionRsq extends UltraCalcFunctionTwoMatrixFunction {
    evaluate(a, b) {
        let c;
        let d = ((() => { let e = UltraCalcFunctionTwoMatrixFunction._al(a, c); c = e.p1; return e.ret; })());
        if (c != null) {
            return new ExcelCalcValue(c);
        }
        return new ExcelCalcValue(d * d);
    }
    get_name() {
        return "rsq";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionRsq.$t = markType(UltraCalcFunctionRsq, 'UltraCalcFunctionRsq', UltraCalcFunctionTwoMatrixFunction.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSlope extends UltraCalcFunctionTwoMatrixFunction {
    evaluate(a, b) {
        let c;
        let d;
        let e;
        let f = UltraCalcFunctionTwoMatrixFunction._aq(a, d, e, c);
        d = f.p1;
        e = f.p2;
        c = f.p3;
        if (c != null) {
            return new ExcelCalcValue(c);
        }
        return new ExcelCalcValue(d);
    }
    get_name() {
        return "slope";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionSlope.$t = markType(UltraCalcFunctionSlope, 'UltraCalcFunctionSlope', UltraCalcFunctionTwoMatrixFunction.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSteyx extends UltraCalcFunctionTwoMatrixFunction {
    evaluate(a, b) {
        let c;
        let d;
        let e;
        let f = UltraCalcFunctionTwoMatrixFunction._ao(a, c, d, e);
        c = f.p1;
        d = f.p2;
        e = f.p3;
        if (c != null) {
            return new ExcelCalcValue(c);
        }
        let g;
        let h;
        let i;
        let j = UltraCalcFunctionTwoMatrixFunction._ar(d, e, g, h, i);
        g = j.p2;
        h = j.p3;
        i = j.p4;
        if (g < 3) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(2));
        }
        let k = h / g;
        let l = i / g;
        let m = UltraCalcFunctionTwoMatrixFunction._am(d, e, (n, o) => (n - k) * (o - l));
        let n = UltraCalcFunctionTwoMatrixFunction._an(d, (o) => Math.pow((o - k), 2));
        let o = UltraCalcFunctionTwoMatrixFunction._an(e, (p) => Math.pow((p - l), 2));
        if (o == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(2));
        }
        let p = 1 / (g - 2);
        let q = n - ((m * m) / o);
        let r = Math.sqrt(p * q);
        return new ExcelCalcValue(r);
    }
    get_name() {
        return "steyx";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionSteyx.$t = markType(UltraCalcFunctionSteyx, 'UltraCalcFunctionSteyx', UltraCalcFunctionTwoMatrixFunction.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSumIf extends UltraCalcConditionalFunctionBase {
    _al(a, b) {
        return new ExcelCalcValue(a);
    }
    get_name() {
        return "sumif";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionSumIf.$t = markType(UltraCalcFunctionSumIf, 'UltraCalcFunctionSumIf', UltraCalcConditionalFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSumproduct extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = new Array(b);
        let d = 0;
        let e = 0;
        let f = 0;
        try {
            for (; f < b; f++) {
                let g = a.pop();
                if (g.isError) {
                    return g;
                }
                let h;
                let i = ((() => { let j = MatrixUtilities.b(g.toArrayProxy(), 1, h); h = j.p2; return j.ret; })());
                if (h != null) {
                    return new ExcelCalcValue(h);
                }
                if (f == 0) {
                    d = arrayGetLength(i, 0);
                    e = arrayGetLength(i, 1);
                }
                else {
                    if (d != arrayGetLength(i, 0) || e != arrayGetLength(i, 1)) {
                        return new ExcelCalcValue(new ExcelCalcErrorValue(1));
                    }
                }
                c[f] = i;
            }
        }
        finally {
            for (f++; f < b; f++) {
                a.pop();
            }
        }
        let j = 0;
        for (let k = 0; k < d; k++) {
            for (let l = 0; l < e; l++) {
                let m = 1;
                for (let n = 0; n < b; n++) {
                    m *= c[n][k][l];
                }
                j += m;
            }
        }
        return new ExcelCalcValue(j);
    }
    get_name() {
        return "sumproduct";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionSumproduct.$t = markType(UltraCalcFunctionSumproduct, 'UltraCalcFunctionSumproduct', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSumx2my2 extends UltraCalcFunctionTwoMatrixFunction {
    evaluate(a, b) {
        return this._ak(a, (c, d) => (c * c) - (d * d));
    }
    get_name() {
        return "sumx2my2";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionSumx2my2.$t = markType(UltraCalcFunctionSumx2my2, 'UltraCalcFunctionSumx2my2', UltraCalcFunctionTwoMatrixFunction.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSumx2py2 extends UltraCalcFunctionTwoMatrixFunction {
    evaluate(a, b) {
        return this._ak(a, (c, d) => (c * c) + (d * d));
    }
    get_name() {
        return "sumx2py2";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionSumx2py2.$t = markType(UltraCalcFunctionSumx2py2, 'UltraCalcFunctionSumx2py2', UltraCalcFunctionTwoMatrixFunction.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSumxmy2 extends UltraCalcFunctionTwoMatrixFunction {
    evaluate(a, b) {
        return this._ak(a, (c, d) => Math.pow((c - d), 2));
    }
    get_name() {
        return "sumxmy2";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionSumxmy2.$t = markType(UltraCalcFunctionSumxmy2, 'UltraCalcFunctionSumxmy2', UltraCalcFunctionTwoMatrixFunction.$);
/**
 * @hidden
 */
export class UltraCalcFunctionTranspose extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return c;
        }
        return new ExcelCalcValue(MatrixUtilities.d(c.toArrayProxy()));
    }
    get_name() {
        return "transpose";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionTranspose.$t = markType(UltraCalcFunctionTranspose, 'UltraCalcFunctionTranspose', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionVLookup extends UltraCalcFunctionLookupBase {
    evaluate(a, b) {
        let c = null;
        if (b == 4) {
            c = a.pop();
        }
        let d = a.pop();
        let e = a.pop();
        let f = a.pop();
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
        let g = e._d(false);
        let h;
        if (((() => { let i = d._toDouble1(h); h = i.p0; return i.ret; })()) == false || h < 1) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        let i = truncate(Math.floor(h)) - 1;
        let j;
        if (((() => { let k = UltraCalcFunctionLookupBase._ak(c, j); j = k.p1; return k.ret; })()) == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        let k = g.getLength(1);
        let l = UltraCalcFunctionLookupBase._al(g._i(0, 0), f, j ? 1 : 0);
        if (l < 0 || k <= l) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        let m = g.getLength(0);
        if (m <= i) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(0));
        }
        let n = g.item(i, l);
        n._y = true;
        return new ExcelCalcValue(n._getResolvedValue());
    }
    get_name() {
        return "vlookup";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionVLookup.$t = markType(UltraCalcFunctionVLookup, 'UltraCalcFunctionVLookup', UltraCalcFunctionLookupBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionBinom_Dist extends UltraCalcFunctionBinomDist {
    get_name() {
        return "binom.dist";
    }
}
UltraCalcFunctionBinom_Dist.$t = markType(UltraCalcFunctionBinom_Dist, 'UltraCalcFunctionBinom_Dist', UltraCalcFunctionBinomDist.$);
/**
 * @hidden
 */
export class UltraCalcFunctionBinom_Inv extends UltraCalcFunctionCritBinom {
    get_name() {
        return "binom.inv";
    }
}
UltraCalcFunctionBinom_Inv.$t = markType(UltraCalcFunctionBinom_Inv, 'UltraCalcFunctionBinom_Inv', UltraCalcFunctionCritBinom.$);
/**
 * @hidden
 */
export class UltraCalcFunctionBinom_Dist_Range extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c;
        let d = 0;
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
        let e = truncate(c._toDecimal2());
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let f = c._toDouble3();
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let g = truncate(c._toDecimal2());
        if (b == 3 || d == e) {
            return UltraCalcFunctionBinomDist._ak(g, f, e, e);
        }
        else {
            return UltraCalcFunctionBinomDist._ak(g, f, e, d);
        }
    }
    get_name() {
        return "binom.dist.range";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 3;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 4;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionBinom_Dist_Range.$t = markType(UltraCalcFunctionBinom_Dist_Range, 'UltraCalcFunctionBinom_Dist_Range', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionAverageA extends BuiltInFunctionBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.d(a, b, 1249 & ~1024, UltraCalcFunctionAverage._ak);
    }
    canParameterBeEnumerable(a) {
        return true;
    }
    get_name() {
        return "averagea";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionAverageA.$t = markType(UltraCalcFunctionAverageA, 'UltraCalcFunctionAverageA', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionCeilingPrecise extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = null;
        if (b == 2) {
            c = a.pop();
        }
        let d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c != null && c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let e = d._toDouble3();
        let f = c == null ? 1 : c._toDouble3();
        if (f < 0) {
            f *= -1;
        }
        if (e == 0 || f == 0) {
            return new ExcelCalcValue(0);
        }
        let g = MathUtilities.i(Math.ceil(e / f) * f);
        return new ExcelCalcValue(g);
    }
    get_name() {
        return "ceiling.precise";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionCeilingPrecise.$t = markType(UltraCalcFunctionCeilingPrecise, 'UltraCalcFunctionCeilingPrecise', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionIsoCeiling extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = null;
        if (b == 2) {
            c = a.pop();
        }
        let d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c != null && c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let e = d._toDouble3();
        let f = c == null ? 1 : c._toDouble3();
        if (f < 0) {
            f *= -1;
        }
        if (e == 0 || f == 0) {
            return new ExcelCalcValue(0);
        }
        let g = MathUtilities.i(Math.ceil(e / f) * f);
        return new ExcelCalcValue(g);
    }
    get_name() {
        return "iso.ceiling";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionIsoCeiling.$t = markType(UltraCalcFunctionIsoCeiling, 'UltraCalcFunctionIsoCeiling', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionEcmaCeiling extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = null;
        if (b == 2) {
            c = a.pop();
        }
        let d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c != null && c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let e = d._toDouble3();
        let f = c == null ? 1 : c._toDouble3();
        if (e == 0 || f == 0) {
            return new ExcelCalcValue(0);
        }
        if (f < 0 && e > 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let g = MathUtilities.i(Math.ceil(e / f) * f);
        return new ExcelCalcValue(g);
    }
    get_name() {
        return "ecma.ceiling";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionEcmaCeiling.$t = markType(UltraCalcFunctionEcmaCeiling, 'UltraCalcFunctionEcmaCeiling', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionCeilingMath extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = null;
        let d = null;
        if (b == 3) {
            c = a.pop();
        }
        if (b >= 2) {
            d = a.pop();
        }
        let e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        if (d != null && d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c != null && c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let f = e._toDouble3();
        let g = d == null ? 1 : Math.abs(d._toDouble3());
        let h = c == null ? 0 : c._toDouble3();
        if (f == 0 || g == 0) {
            return new ExcelCalcValue(0);
        }
        let i = f / g;
        if (f < 0 && h != 0) {
            i = Math.floor(i);
        }
        else {
            i = Math.ceil(i);
        }
        return new ExcelCalcValue(MathUtilities.i(i * g));
    }
    get_name() {
        return "ceiling.math";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 3;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionCeilingMath.$t = markType(UltraCalcFunctionCeilingMath, 'UltraCalcFunctionCeilingMath', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionFloorPrecise extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = null;
        if (b == 2) {
            c = a.pop();
        }
        let d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c != null && c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let e = d._toDouble3();
        let f = c == null ? 1 : Math.abs(c._toDouble3());
        if (e == 0 || f == 0) {
            return new ExcelCalcValue(0);
        }
        let g = MathUtilities.i(Math.floor(e / f) * f);
        return new ExcelCalcValue(g);
    }
    get_name() {
        return "floor.precise";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionFloorPrecise.$t = markType(UltraCalcFunctionFloorPrecise, 'UltraCalcFunctionFloorPrecise', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionFloorMath extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = null;
        let d = null;
        if (b == 3) {
            c = a.pop();
        }
        if (b >= 2) {
            d = a.pop();
        }
        let e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        if (d != null && d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c != null && c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let f = e._toDouble3();
        let g = d == null ? 1 : Math.abs(d._toDouble3());
        let h = c == null ? 0 : c._toDouble3();
        if (f == 0 || g == 0) {
            return new ExcelCalcValue(0);
        }
        let i = f / g;
        if (f < 0 && h != 0) {
            i = Math.ceil(i);
        }
        else {
            i = Math.floor(i);
        }
        return new ExcelCalcValue(MathUtilities.i(i * g));
    }
    get_name() {
        return "floor.math";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 3;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionFloorMath.$t = markType(UltraCalcFunctionFloorMath, 'UltraCalcFunctionFloorMath', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionNumberValue extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = null;
        let d = null;
        if (b == 3) {
            c = a.pop();
        }
        if (b >= 2) {
            d = a.pop();
        }
        let e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        if (d != null && d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c != null && c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let f = e.toString();
        let g = d == null ? a._w.numberFormat.numberDecimalSeparator : d.toString();
        let h = c == null ? a._w.numberFormat.numberGroupSeparator : c.toString();
        if (stringIsNullOrEmpty(h) || stringIsNullOrEmpty(g)) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        let i = h.charAt(0);
        let j = g.charAt(0);
        if (j == i) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        if (stringIsNullOrWhiteSpace(f)) {
            return new ExcelCalcValue(0);
        }
        let k = false;
        let l = "";
        let m = "";
        let n = 0;
        let o = false;
        let p = 0;
        for (let q = 0; q < f.length; q++) {
            let r = f.charAt(q);
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
                    let s = r;
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
                    let t;
                    if (((() => { let u = e._toDouble1(t); t = u.p0; return u.ret; })())) {
                        return new ExcelCalcValue(t);
                    }
                }
                o = true;
            }
            if (o) {
                break;
            }
        }
        if (o) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        let u = l.length > 0 ? parseFloat(l) : 0;
        if (m.length > 0) {
            u += parseFloat(m) / Math.pow(10, m.length);
        }
        if (n > 0) {
            u /= Math.pow(10, n * 2);
        }
        return new ExcelCalcValue(MathUtilities.i(u));
    }
    get_name() {
        return "numbervalue";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 3;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionNumberValue.$t = markType(UltraCalcFunctionNumberValue, 'UltraCalcFunctionNumberValue', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionIfs extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = new List$1(ExcelCalcValue.$, 0);
        while (b > 0) {
            c.add(a.pop());
            b--;
        }
        for (let d = c.count - 1; d > 0; d -= 2) {
            let e = c._inner[d];
            let f = c._inner[d - 1];
            if (e.isError) {
                return new ExcelCalcValue(e.toErrorValue());
            }
            if (e._toBoolean1() == true) {
                return f;
            }
        }
        return new ExcelCalcValue(new ExcelCalcErrorValue(3));
    }
    get_name() {
        return "ifs";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
    get__s() {
        return true;
    }
    _v(a) {
        if (a % 2 == 1) {
            return false;
        }
        return true;
    }
}
UltraCalcFunctionIfs.$t = markType(UltraCalcFunctionIfs, 'UltraCalcFunctionIfs', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSwitch extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = new List$1(ExcelCalcValue.$, 0);
        let d = null;
        if (b % 2 == 0) {
            d = a.pop();
            b--;
        }
        while (b > 1) {
            c.add(a.pop());
            b--;
        }
        let e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        let f, g, h, i;
        f = g = h = i = false;
        let j;
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
            let k = e._toDouble3();
            j = k;
            if (k == 0) {
                f = true;
            }
            else {
                i = true;
            }
        }
        for (let l = c.count - 1; l > 0; l -= 2) {
            let m = c._inner[l];
            let n = c._inner[l - 1];
            if (m.isError) {
                return new ExcelCalcValue(m.toErrorValue());
            }
            let o = false;
            if (f || i) {
                if (!m.isString && !m.isBoolean) {
                    if (m.isNull) {
                        o = f;
                    }
                    else {
                        let p;
                        if (((() => { let q = m._toDouble1(p); p = q.p0; return q.ret; })())) {
                            if (f) {
                                o = p == 0;
                            }
                            else {
                                o = p == j;
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
                return n;
            }
        }
        if (d != null) {
            if (d.isError) {
                return new ExcelCalcValue(d.toErrorValue());
            }
            return d;
        }
        return new ExcelCalcValue(new ExcelCalcErrorValue(3));
    }
    get_name() {
        return "switch";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 3;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
    get__s() {
        return true;
    }
    _v(a) {
        if (a % 2 == 1) {
            return true;
        }
        return false;
    }
}
UltraCalcFunctionSwitch.$t = markType(UltraCalcFunctionSwitch, 'UltraCalcFunctionSwitch', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionConcatEx extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = new List$1(ExcelCalcValue.$, 0);
        this._ad(c, a, b, true);
        let d = new StringBuilder(0);
        for (let e = 0; e < c.count; e++) {
            let f = c._inner[e];
            if (f.isError) {
                return new ExcelCalcValue(f.toErrorValue());
            }
            d.l(f.toString());
        }
        if (d.c > 32767) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        return new ExcelCalcValue(d.toString());
    }
    get_name() {
        return "concat";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionConcatEx.$t = markType(UltraCalcFunctionConcatEx, 'UltraCalcFunctionConcatEx', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionTextJoin extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = CalcFunctionUtilities.p(b - 2);
        let d = b - 2;
        let e = new List$1(ExcelCalcValue.$, 2, d);
        for (let f = 0; f < d; f++) {
            e.add(a.pop());
        }
        e.w();
        let g = a.pop();
        let h = a.pop();
        if (h.isError) {
            return new ExcelCalcValue(h.toErrorValue());
        }
        if (g.isError) {
            return new ExcelCalcValue(g.toErrorValue());
        }
        let i;
        if (g.isString) {
            if (!((() => { let j = tryParseBool(g.toString(), i); i = j.p1; return j.ret; })())) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
        }
        else {
            i = g._toBoolean1();
        }
        for (let j = 0; j < e.count; j++) {
            ExcelCalcFunction._ac(c, e._inner[j], i, false);
        }
        let k;
        if ((h.isReference && h.toReference().isEnumerable) || h.isArray || h.isArrayGroup) {
            let l = CalcFunctionUtilities.p(10);
            ExcelCalcFunction._ac(l, h, false, false);
            k = new Array(l.count);
            for (let m = 0; m < k.length; m++) {
                k[m] = l._inner[m].toString();
            }
        }
        else {
            k = new Array(1);
            k[0] = h.toString();
        }
        let n = new StringBuilder(0);
        for (let o = 0; o < c.count; o++) {
            if (o > 0) {
                n.l(k[(o - 1) % k.length]);
            }
            let p = c._inner[o];
            if (p.isError) {
                return new ExcelCalcValue(p.toErrorValue());
            }
            n.l(p.toString());
        }
        if (n.c > 32767) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        return new ExcelCalcValue(n.toString());
    }
    get_name() {
        return "textjoin";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 3;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionTextJoin.$t = markType(UltraCalcFunctionTextJoin, 'UltraCalcFunctionTextJoin', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionCountBlank extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (!c.isReference) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        if (c.isArrayGroup) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        if (c.isArray) {
            let d = c.toArrayProxy();
            let e = 0;
            d._m(false, (f, g) => {
                if (!f.isNull) {
                    e++;
                }
            });
            let f = d.getLength(0) * d.getLength(1);
            return new ExcelCalcValue(f - e);
        }
        let g = c.toReference();
        let h = 0;
        if (g.isEnumerable) {
            for (let i of fromEn(g.references)) {
                if (i.value.isNull) {
                    h++;
                }
            }
        }
        else if (typeCast(NamedCalcReferenceUnconnected.$, g) !== null) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(7));
        }
        else {
            h = c.isNull ? 1 : 0;
        }
        return new ExcelCalcValue(h);
    }
    get_name() {
        return "countblank";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionCountBlank.$t = markType(UltraCalcFunctionCountBlank, 'UltraCalcFunctionCountBlank', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionUSDollar extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = null;
        if (b == 2) {
            c = a.pop();
        }
        let d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c != null && c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let e = d._toDouble3();
        let f = c == null ? 2 : c._toInt();
        if (f < 0) {
            e = MathUtilities.g(e, f);
        }
        let g = f > 0 ? stringFormat("$#,##0.{0};($#,##0.{0})", stringCreateFromChar('0', f)) : "$#,##0;($#,##0)";
        let h = new ValueFormatter(0, d._o, g, a._w);
        let i;
        if (((() => { let j = h.v(e, null, i); i = j.p2; return j.ret; })()) == false) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        return new ExcelCalcValue(i);
    }
    get_name() {
        return "usdollar";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionUSDollar.$t = markType(UltraCalcFunctionUSDollar, 'UltraCalcFunctionUSDollar', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionDollar extends UltraCalcFunctionUSDollar {
    get_name() {
        return "dollar";
    }
}
UltraCalcFunctionDollar.$t = markType(UltraCalcFunctionDollar, 'UltraCalcFunctionDollar', UltraCalcFunctionUSDollar.$);
/**
 * @hidden
 */
export class UltraCalcFunctionExact extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        let d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let e;
        if (d.isString && c.isString) {
            e = stringEquals1(d.toString(), c.toString(), 0);
        }
        else {
            e = d.isSameValue(c);
        }
        return new ExcelCalcValue(e);
    }
    get_name() {
        return "exact";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionExact.$t = markType(UltraCalcFunctionExact, 'UltraCalcFunctionExact', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSubstitute extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = 0;
        let d = null;
        if (b == 4) {
            d = a.pop();
        }
        let e = a.pop();
        let f = a.pop();
        let g = a.pop();
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
        let h = g.toString();
        let i = f.toString();
        if (!stringIsNullOrEmpty(h) && !stringIsNullOrEmpty(i)) {
            let j = e.toString();
            if (c == 0) {
                h = stringReplace(h, i, j);
            }
            else {
                let k = 0;
                while (c > 0) {
                    k = h.indexOf(i, k);
                    c--;
                    if (c > 0 && k >= 0) {
                        k++;
                    }
                }
                if (k >= 0) {
                    let l = k > 0 ? h.substr(0, k) : "";
                    let m = k + i.length < h.length ? h.substr(k + i.length) : "";
                    h = l + j + m;
                }
            }
        }
        return new ExcelCalcValue(h);
    }
    get_name() {
        return "substitute";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 3;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 4;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionSubstitute.$t = markType(UltraCalcFunctionSubstitute, 'UltraCalcFunctionSubstitute', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionProper extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d;
        if (c.isNull) {
            d = null;
        }
        else {
            let e = c.toString();
            let f = new StringBuilder(0);
            let g = false;
            let h = a._w;
            for (let i = 0; i < e.length; i++) {
                let j = e.charAt(i);
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
    }
    get_name() {
        return "proper";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionProper.$t = markType(UltraCalcFunctionProper, 'UltraCalcFunctionProper', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionMode extends BuiltInFunctionBase {
    evaluate(a, b) {
        return UltraCalcFunctionMode._ak(a, b, false);
    }
    static _ak(a, b, c) {
        let d = CalcFunctionUtilities.p(b);
        let e = CalcFunctionUtilities.o(b);
        try {
            for (let f = 0; f < b; f++) {
                d.add(a.pop());
            }
            d.w();
            for (let g = 0; g < d.count; g++) {
                let h = d._inner[g];
                if (h.isError) {
                    return new ExcelCalcValue(h.toErrorValue());
                }
                let i = h.isArray || h.isArrayGroup || (h.isReference && h.toReference().isEnumerable);
                if (i) {
                    let j = CalcArgumentHelper.c(h, 0, 1101, runOn(e, e.add));
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
            let k = new Dictionary$2(Number_$type, Number_$type, 0);
            let l = 0;
            for (let m = 0; m < e.count; m++) {
                let n = e._inner[m];
                let o;
                if (!((() => { let p = k.tryGetValue(n, o); o = p.p1; return p.ret; })())) {
                    k.item(n, 1);
                }
                else {
                    k.item(n, o + 1);
                    if (o + 1 > l) {
                        l = o + 1;
                    }
                }
            }
            if (l == 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(3));
            }
            let p = new List$1(Number_$type, 0);
            for (let q of fromEnum(k)) {
                if (q.value == l) {
                    p.add(q.key);
                }
            }
            if (p.count > 1) {
                p.aa((r, s) => {
                    let t = e.indexOf(r);
                    let u = e.indexOf(s);
                    return Base.compareSimple(t, u);
                });
                if (c) {
                    let r = ((() => {
                        let $firstRank;
                        let $ret = new Array($firstRank = 1);
                        let $currRet = $ret;
                        for (let $rankInit = 0; $rankInit < $firstRank; $rankInit++) {
                            $currRet[$rankInit] = new Array(p.count);
                        }
                        return $ret;
                    })());
                    for (let s = 0; s < p.count; s++) {
                        r[0][s] = new ExcelCalcValue(p._inner[s]);
                    }
                    return new ExcelCalcValue(r);
                }
            }
            return new ExcelCalcValue(p._inner[0]);
        }
        finally {
            CalcFunctionUtilities.ac(e);
            CalcFunctionUtilities.ad(d);
        }
    }
    get_name() {
        return "mode";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return super.doesParameterAllowIntermediateResultArray(a, b);
    }
}
UltraCalcFunctionMode.$t = markType(UltraCalcFunctionMode, 'UltraCalcFunctionMode', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionModeMult extends UltraCalcFunctionMode {
    evaluate(a, b) {
        return UltraCalcFunctionMode._ak(a, b, true);
    }
    get_name() {
        return "mode.mult";
    }
}
UltraCalcFunctionModeMult.$t = markType(UltraCalcFunctionModeMult, 'UltraCalcFunctionModeMult', UltraCalcFunctionMode.$);
/**
 * @hidden
 */
export class UltraCalcFunctionModeSngl extends UltraCalcFunctionMode {
    get_name() {
        return "mode.sngl";
    }
}
UltraCalcFunctionModeSngl.$t = markType(UltraCalcFunctionModeSngl, 'UltraCalcFunctionModeSngl', UltraCalcFunctionMode.$);
/**
 * @hidden
 */
export class UltraCalcFunctionRankBase extends BuiltInFunctionBase {
    static _ak(a, b, c) {
        let d = true;
        if (b == 3) {
            let e = a.pop();
            d = !e._toBoolean1();
        }
        let f = a.pop();
        let g = a.pop();
        if (g.isError) {
            return new ExcelCalcValue(g.toErrorValue());
        }
        let h = g._toDouble3();
        let i = f.toArrayProxy();
        let j = i.getLength(0);
        let k = i.getLength(1);
        let l, m, n;
        l = m = n = 0;
        for (let o = 0; o < j; o++) {
            for (let p = 0; p < k; p++) {
                let q = i.item(o, p);
                if (q.isError) {
                    return new ExcelCalcValue(q.toErrorValue());
                }
                if (q.isNull || q.isString || q.isBoolean) {
                    l++;
                }
                else {
                    let r = Base.compareSimple(h, q._toDouble3());
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
        let s = !d ? (k * j) - (l + m + n) : m;
        let t = s + 1;
        if (c) {
            t += (n - 1) / 2;
        }
        return new ExcelCalcValue(t);
    }
    get_maxArgs() {
        return 3;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
}
UltraCalcFunctionRankBase.$t = markType(UltraCalcFunctionRankBase, 'UltraCalcFunctionRankBase', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionRank extends UltraCalcFunctionRankBase {
    evaluate(a, b) {
        return UltraCalcFunctionRankBase._ak(a, b, false);
    }
    get_name() {
        return "rank";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionRank.$t = markType(UltraCalcFunctionRank, 'UltraCalcFunctionRank', UltraCalcFunctionRankBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionRankEqual extends UltraCalcFunctionRankBase {
    evaluate(a, b) {
        return UltraCalcFunctionRankBase._ak(a, b, false);
    }
    get_name() {
        return "rank.eq";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionRankEqual.$t = markType(UltraCalcFunctionRankEqual, 'UltraCalcFunctionRankEqual', UltraCalcFunctionRankBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionRankAverage extends UltraCalcFunctionRankBase {
    evaluate(a, b) {
        return UltraCalcFunctionRankBase._ak(a, b, true);
    }
    get_name() {
        return "rank.avg";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionRankAverage.$t = markType(UltraCalcFunctionRankAverage, 'UltraCalcFunctionRankAverage', UltraCalcFunctionRankBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionPercentRankBase extends BuiltInFunctionBase {
    static _ak(a, b, c) {
        let d = 3;
        if (b == 3) {
            let e = a.pop();
            d = e._toInt();
            if (d < 1) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
        }
        let f = a.pop();
        let g = a.pop();
        if (f.isError) {
            return new ExcelCalcValue(f.toErrorValue());
        }
        let h = f._toDouble3();
        let i = g.toArrayProxy();
        let j = i.getLength(0);
        let k = i.getLength(1);
        let l, m, n;
        l = m = n = 0;
        let o = Number.POSITIVE_INFINITY;
        let p = Number.NEGATIVE_INFINITY;
        let q, r;
        q = r = 0;
        for (let s = 0; s < j; s++) {
            for (let t = 0; t < k; t++) {
                let u = i.item(s, t);
                if (u.isError) {
                    return new ExcelCalcValue(u.toErrorValue());
                }
                if (u.isNull || u.isString || u.isBoolean) {
                    l++;
                }
                else {
                    let v = u._toDouble3();
                    let w = Base.compareSimple(h, v);
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
        let x = (k * j) - l;
        if (x == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        if (x == n) {
            return new ExcelCalcValue(x == 1 ? 1 : 0);
        }
        let y;
        if (c) {
            m++;
            x += 2;
        }
        if (n == 0) {
            if (q == 0 || r == 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(3));
            }
            let z = (m + r - 1) / (x - 1);
            let aa = (m + r) / (x - 1);
            let ab = (h - p) / (o - p);
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
    }
    get_maxArgs() {
        return 3;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
}
UltraCalcFunctionPercentRankBase.$t = markType(UltraCalcFunctionPercentRankBase, 'UltraCalcFunctionPercentRankBase', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionPercentRank extends UltraCalcFunctionPercentRankBase {
    evaluate(a, b) {
        return UltraCalcFunctionPercentRankBase._ak(a, b, false);
    }
    get_name() {
        return "percentrank";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionPercentRank.$t = markType(UltraCalcFunctionPercentRank, 'UltraCalcFunctionPercentRank', UltraCalcFunctionPercentRankBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionPercentRankInclusive extends UltraCalcFunctionPercentRankBase {
    evaluate(a, b) {
        return UltraCalcFunctionPercentRankBase._ak(a, b, false);
    }
    get_name() {
        return "percentrank.inc";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionPercentRankInclusive.$t = markType(UltraCalcFunctionPercentRankInclusive, 'UltraCalcFunctionPercentRankInclusive', UltraCalcFunctionPercentRankBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionPercentRankExclusive extends UltraCalcFunctionPercentRankBase {
    evaluate(a, b) {
        return UltraCalcFunctionPercentRankBase._ak(a, b, true);
    }
    get_name() {
        return "percentrank.exc";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionPercentRankExclusive.$t = markType(UltraCalcFunctionPercentRankExclusive, 'UltraCalcFunctionPercentRankExclusive', UltraCalcFunctionPercentRankBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionDevSq extends BuiltInFunctionBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.d(a, b, 1229, (c) => {
            if (c.count == 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(2));
            }
            else if (c.count == 1) {
                return new ExcelCalcValue(0);
            }
            let d = CalcFunctionUtilities.r(c);
            return new ExcelCalcValue(d);
        });
    }
    get_name() {
        return "devsq";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionDevSq.$t = markType(UltraCalcFunctionDevSq, 'UltraCalcFunctionDevSq', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSumSq extends BuiltInFunctionBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.d(a, b, 1229, (c) => {
            if (c.count == 0) {
                return new ExcelCalcValue(0);
            }
            let d = 0;
            for (let e = 0; e < c.count; e++) {
                d += (c._inner[e] * c._inner[e]);
            }
            return new ExcelCalcValue(d);
        });
    }
    get_name() {
        return "sumsq";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionSumSq.$t = markType(UltraCalcFunctionSumSq, 'UltraCalcFunctionSumSq', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionVarBase extends BuiltInFunctionBase {
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionVarBase.$t = markType(UltraCalcFunctionVarBase, 'UltraCalcFunctionVarBase', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionVar_S extends UltraCalcFunctionVarBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.d(a, b, 1229, (c) => UltraCalcFunctionVar._ak(c, true));
    }
    get_name() {
        return "var.s";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionVar_S.$t = markType(UltraCalcFunctionVar_S, 'UltraCalcFunctionVar_S', UltraCalcFunctionVarBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionVarA extends UltraCalcFunctionVarBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.d(a, b, 1249, (c) => UltraCalcFunctionVar._ak(c, true));
    }
    get_name() {
        return "vara";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionVarA.$t = markType(UltraCalcFunctionVarA, 'UltraCalcFunctionVarA', UltraCalcFunctionVarBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionVarP extends UltraCalcFunctionVarBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.d(a, b, 1229, (c) => UltraCalcFunctionVar._ak(c, false));
    }
    get_name() {
        return "varp";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionVarP.$t = markType(UltraCalcFunctionVarP, 'UltraCalcFunctionVarP', UltraCalcFunctionVarBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionVar_P extends UltraCalcFunctionVarBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.d(a, b, 1229, (c) => UltraCalcFunctionVar._ak(c, false));
    }
    get_name() {
        return "var.p";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionVar_P.$t = markType(UltraCalcFunctionVar_P, 'UltraCalcFunctionVar_P', UltraCalcFunctionVarBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionVarPA extends UltraCalcFunctionVarBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.d(a, b, 1249, (c) => UltraCalcFunctionVar._ak(c, false));
    }
    get_name() {
        return "varpa";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionVarPA.$t = markType(UltraCalcFunctionVarPA, 'UltraCalcFunctionVarPA', UltraCalcFunctionVarBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionStDevBase extends BuiltInFunctionBase {
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionStDevBase.$t = markType(UltraCalcFunctionStDevBase, 'UltraCalcFunctionStDevBase', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionStDev_S extends UltraCalcFunctionStDevBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.d(a, b, 1229, (c) => UltraCalcFunctionStdev._al(c, true));
    }
    get_name() {
        return "stdev.s";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionStDev_S.$t = markType(UltraCalcFunctionStDev_S, 'UltraCalcFunctionStDev_S', UltraCalcFunctionStDevBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionStDevA extends UltraCalcFunctionStDevBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.d(a, b, 1249, (c) => UltraCalcFunctionStdev._al(c, true));
    }
    get_name() {
        return "stdeva";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionStDevA.$t = markType(UltraCalcFunctionStDevA, 'UltraCalcFunctionStDevA', UltraCalcFunctionStDevBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionStDevP extends UltraCalcFunctionStDevBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.d(a, b, 1229, (c) => UltraCalcFunctionStdev._al(c, false));
    }
    get_name() {
        return "stdevp";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionStDevP.$t = markType(UltraCalcFunctionStDevP, 'UltraCalcFunctionStDevP', UltraCalcFunctionStDevBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionStDev_P extends UltraCalcFunctionStDevBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.d(a, b, 1229, (c) => UltraCalcFunctionStdev._al(c, false));
    }
    get_name() {
        return "stdev.p";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionStDev_P.$t = markType(UltraCalcFunctionStDev_P, 'UltraCalcFunctionStDev_P', UltraCalcFunctionStDevBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionStDevPA extends UltraCalcFunctionStDevBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.d(a, b, 1249, (c) => UltraCalcFunctionStdev._al(c, false));
    }
    get_name() {
        return "stdevpa";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionStDevPA.$t = markType(UltraCalcFunctionStDevPA, 'UltraCalcFunctionStDevPA', UltraCalcFunctionStDevBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionPercentileBase extends BuiltInFunctionBase {
    static _ak(a, b, c) {
        let d = a.pop();
        let e = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        let f = d._toDouble3();
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
        let g = new List$1(Number_$type, 0);
        let h = CalcArgumentHelper.c(e, 0, 1101, runOn(g, g.add));
        if (h != null) {
            return h;
        }
        if (g.count == 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let i = 1 / (g.count + 1);
        if (b && (f < i || (f + i > 1))) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let j = g._inner[0];
        if (g.count > 1) {
            if (b) {
                f = (f - i) * (1 / (1 - i * 2));
            }
            g.y();
            let k = 1 / (g.count - 1);
            let l = (f % k) / k;
            let m = truncate(((g.count - 1) * f));
            j = g._inner[m];
            if (m < g.count - 1 && l != 0) {
                j += (g._inner[m + 1] - g._inner[m]) * l;
            }
        }
        return new ExcelCalcValue(j);
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
}
UltraCalcFunctionPercentileBase.$t = markType(UltraCalcFunctionPercentileBase, 'UltraCalcFunctionPercentileBase', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionPercentile extends UltraCalcFunctionPercentileBase {
    evaluate(a, b) {
        return UltraCalcFunctionPercentileBase._ak(a, false, false);
    }
    get_name() {
        return "percentile";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionPercentile.$t = markType(UltraCalcFunctionPercentile, 'UltraCalcFunctionPercentile', UltraCalcFunctionPercentileBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionPercentileInclusive extends UltraCalcFunctionPercentileBase {
    evaluate(a, b) {
        return UltraCalcFunctionPercentileBase._ak(a, false, false);
    }
    get_name() {
        return "percentile.inc";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionPercentileInclusive.$t = markType(UltraCalcFunctionPercentileInclusive, 'UltraCalcFunctionPercentileInclusive', UltraCalcFunctionPercentileBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionPercentileExclusive extends UltraCalcFunctionPercentileBase {
    evaluate(a, b) {
        return UltraCalcFunctionPercentileBase._ak(a, true, false);
    }
    get_name() {
        return "percentile.exc";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionPercentileExclusive.$t = markType(UltraCalcFunctionPercentileExclusive, 'UltraCalcFunctionPercentileExclusive', UltraCalcFunctionPercentileBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionQuartile extends UltraCalcFunctionPercentileBase {
    evaluate(a, b) {
        return UltraCalcFunctionPercentileBase._ak(a, false, true);
    }
    get_name() {
        return "quartile";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionQuartile.$t = markType(UltraCalcFunctionQuartile, 'UltraCalcFunctionQuartile', UltraCalcFunctionPercentileBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionQuartileInclusive extends UltraCalcFunctionPercentileBase {
    evaluate(a, b) {
        return UltraCalcFunctionPercentileBase._ak(a, false, true);
    }
    get_name() {
        return "quartile.inc";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionQuartileInclusive.$t = markType(UltraCalcFunctionQuartileInclusive, 'UltraCalcFunctionQuartileInclusive', UltraCalcFunctionPercentileBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionQuartileExclusive extends UltraCalcFunctionPercentileBase {
    evaluate(a, b) {
        return UltraCalcFunctionPercentileBase._ak(a, true, true);
    }
    get_name() {
        return "quartile.exc";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionQuartileExclusive.$t = markType(UltraCalcFunctionQuartileExclusive, 'UltraCalcFunctionQuartileExclusive', UltraCalcFunctionPercentileBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSmall extends BuiltInFunctionBase {
    static _ak(a, b) {
        let c = a.pop();
        let d = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let e = c._toDouble3();
        let f = new List$1(Number_$type, 0);
        let g = CalcArgumentHelper.c(d, 0, 1101, runOn(f, f.add));
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
        let h = f._inner[truncate(e)];
        return new ExcelCalcValue(h);
    }
    evaluate(a, b) {
        return UltraCalcFunctionSmall._ak(a, false);
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_name() {
        return "small";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionSmall.$t = markType(UltraCalcFunctionSmall, 'UltraCalcFunctionSmall', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionLarge extends BuiltInFunctionBase {
    evaluate(a, b) {
        return UltraCalcFunctionSmall._ak(a, true);
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_name() {
        return "large";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionLarge.$t = markType(UltraCalcFunctionLarge, 'UltraCalcFunctionLarge', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSec extends BuiltInFunctionBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.h(a, true, (c) => {
            if (c <= -134217728 || c >= 134217728) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            return new ExcelCalcValue(1 / Math.cos(c));
        });
    }
    get_name() {
        return "sec";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionSec.$t = markType(UltraCalcFunctionSec, 'UltraCalcFunctionSec', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSecH extends BuiltInFunctionBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.h(a, true, (c) => {
            if (c <= -134217728 || c >= 134217728) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            return new ExcelCalcValue(1 / Math.cosh(c));
        });
    }
    get_name() {
        return "sech";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionSecH.$t = markType(UltraCalcFunctionSecH, 'UltraCalcFunctionSecH', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionCsc extends BuiltInFunctionBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.h(a, true, (c) => {
            if (c <= -134217728 || c >= 134217728) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            return new ExcelCalcValue(1 / Math.sin(c));
        });
    }
    get_name() {
        return "csc";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionCsc.$t = markType(UltraCalcFunctionCsc, 'UltraCalcFunctionCsc', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionCscH extends BuiltInFunctionBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.h(a, true, (c) => {
            if (c <= -134217728 || c >= 134217728) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            return new ExcelCalcValue(1 / Math.sinh(c));
        });
    }
    get_name() {
        return "csch";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionCscH.$t = markType(UltraCalcFunctionCscH, 'UltraCalcFunctionCscH', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionCot extends BuiltInFunctionBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.h(a, true, (c) => {
            if (c <= -134217728 || c >= 134217728) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            return new ExcelCalcValue(1 / Math.tan(c));
        });
    }
    get_name() {
        return "cot";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionCot.$t = markType(UltraCalcFunctionCot, 'UltraCalcFunctionCot', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionCotH extends BuiltInFunctionBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.h(a, true, (c) => {
            if (c <= -134217728 || c >= 134217728) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            return new ExcelCalcValue(1 / Math.tanh(c));
        });
    }
    get_name() {
        return "coth";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionCotH.$t = markType(UltraCalcFunctionCotH, 'UltraCalcFunctionCotH', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionAcot extends BuiltInFunctionBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.h(a, true, (c) => new ExcelCalcValue(Math.PI / 2 - Math.atan(c)));
    }
    get_name() {
        return "acot";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionAcot.$t = markType(UltraCalcFunctionAcot, 'UltraCalcFunctionAcot', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionAcotH extends BuiltInFunctionBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.h(a, true, (c) => {
            if (Math.abs(c) <= 1) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            return new ExcelCalcValue(Math.log((c + 1) / (c - 1)) / 2);
        });
    }
    get_name() {
        return "acoth";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return true;
    }
}
UltraCalcFunctionAcotH.$t = markType(UltraCalcFunctionAcotH, 'UltraCalcFunctionAcotH', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionBitOperation extends BuiltInFunctionBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.j(a, true, (c, d) => {
            if (c < 0 || d < 0 || c % 1 != 0 || d % 1 != 0 || c >= 281474976710656 || d >= 281474976710656) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            return new ExcelCalcValue(this._am(truncate(c), truncate(d)));
        });
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    static _ak(a, b) {
        if (a < 0 || a % 1 != 0 || a >= 281474976710656) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let c = truncate(Math.abs(b));
        if (c > 53) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let d = truncate(a);
        if (b < 0) {
            d >>= c;
        }
        else {
            d <<= c;
        }
        return new ExcelCalcValue(d);
    }
}
UltraCalcFunctionBitOperation.$t = markType(UltraCalcFunctionBitOperation, 'UltraCalcFunctionBitOperation', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionBitAnd extends UltraCalcFunctionBitOperation {
    _am(a, b) {
        return a & b;
    }
    get_name() {
        return "bitand";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionBitAnd.$t = markType(UltraCalcFunctionBitAnd, 'UltraCalcFunctionBitAnd', UltraCalcFunctionBitOperation.$);
/**
 * @hidden
 */
export class UltraCalcFunctionBitOr extends UltraCalcFunctionBitOperation {
    _am(a, b) {
        return a | b;
    }
    get_name() {
        return "bitor";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionBitOr.$t = markType(UltraCalcFunctionBitOr, 'UltraCalcFunctionBitOr', UltraCalcFunctionBitOperation.$);
/**
 * @hidden
 */
export class UltraCalcFunctionBitXor extends UltraCalcFunctionBitOperation {
    _am(a, b) {
        return a ^ b;
    }
    get_name() {
        return "bitxor";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionBitXor.$t = markType(UltraCalcFunctionBitXor, 'UltraCalcFunctionBitXor', UltraCalcFunctionBitOperation.$);
/**
 * @hidden
 */
export class UltraCalcFunctionBitLShift extends BuiltInFunctionBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.j(a, true, (c, d) => UltraCalcFunctionBitOperation._ak(c, d));
    }
    get_name() {
        return "bitlshift";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionBitLShift.$t = markType(UltraCalcFunctionBitLShift, 'UltraCalcFunctionBitLShift', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionBitRShift extends BuiltInFunctionBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.j(a, true, (c, d) => UltraCalcFunctionBitOperation._ak(c, -d));
    }
    get_name() {
        return "bitrshift";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionBitRShift.$t = markType(UltraCalcFunctionBitRShift, 'UltraCalcFunctionBitRShift', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionFisher extends BuiltInFunctionBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.h(a, true, (c) => {
            if (c <= -1 || c >= 1) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            let d = Math.log((1 + c) / (1 - c)) / 2;
            return new ExcelCalcValue(d);
        });
    }
    get_name() {
        return "fisher";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionFisher.$t = markType(UltraCalcFunctionFisher, 'UltraCalcFunctionFisher', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionFisherInv extends BuiltInFunctionBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.h(a, true, (c) => new ExcelCalcValue(Math.tanh(c)));
    }
    get_name() {
        return "fisherinv";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionFisherInv.$t = markType(UltraCalcFunctionFisherInv, 'UltraCalcFunctionFisherInv', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionIfNa extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        let d = a.pop();
        let e = d._getResolvedValue();
        if (typeCast(ExcelCalcErrorValue.$, e) !== null && e.code == 3) {
            return c;
        }
        return new ExcelCalcValue(e);
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_name() {
        return "ifna";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionIfNa.$t = markType(UltraCalcFunctionIfNa, 'UltraCalcFunctionIfNa', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionArabic extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        let d = c.toString();
        let e = 0;
        if (!stringIsNullOrWhiteSpace(d)) {
            d = d.trim();
            let f = d.charAt(0) == '-';
            if (f && d.length == 1) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            let g = f ? 1 : 0;
            let h = 0;
            for (let i = d.length - 1; i >= g; i--) {
                let j = d.charAt(i);
                let k = -1;
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
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_name() {
        return "arabic";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionArabic.$t = markType(UltraCalcFunctionArabic, 'UltraCalcFunctionArabic', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionXor extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = 0;
        let d = CalcFunctionUtilities.p(b);
        try {
            this._ad(d, a, b, true);
            if (d.count == 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
            for (let e = 0; e < d.count; e++) {
                let f = d._inner[e];
                if (f.isError) {
                    return new ExcelCalcValue(f.toErrorValue());
                }
                let g;
                if (f.isString) {
                    if (!((() => { let h = tryParseBool(f.toString(), g); g = h.p1; return h.ret; })())) {
                        return new ExcelCalcValue(new ExcelCalcErrorValue(1));
                    }
                }
                else {
                    g = f._toBoolean1();
                }
                if (g) {
                    c++;
                }
            }
            return new ExcelCalcValue(c % 2 == 0 ? false : true);
        }
        finally {
            CalcFunctionUtilities.ad(d);
        }
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_name() {
        return "xor";
    }
    get name() {
        return this.get_name();
    }
    doesParameterAllowIntermediateResultArray(a, b) {
        return (b == false);
    }
}
UltraCalcFunctionXor.$t = markType(UltraCalcFunctionXor, 'UltraCalcFunctionXor', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSkew extends BuiltInFunctionBase {
    evaluate(a, b) {
        return UltraCalcFunctionSkew._ak(a, b, true);
    }
    static _ak(a, b, c) {
        return CalcFunctionUtilities.d(a, b, 1229, (d) => {
            if (d.count < 3) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(2));
            }
            let e = CalcFunctionUtilities.z(d);
            let f = CalcFunctionUtilities.t(d.count, e);
            let g = CalcFunctionUtilities.s(d, f);
            let h = CalcFunctionUtilities.y(g, d.count, c);
            if (h == 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(2));
            }
            let i = 0;
            for (let j = 0; j < d.count; j++) {
                let k = (d._inner[j] - f) / h;
                i += (k * k * k);
            }
            let l = c ? d.count / ((d.count - 1) * (d.count - 2)) : (1 / d.count);
            return new ExcelCalcValue(l * i);
        });
    }
    get_name() {
        return "skew";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionSkew.$t = markType(UltraCalcFunctionSkew, 'UltraCalcFunctionSkew', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSkew_P extends BuiltInFunctionBase {
    evaluate(a, b) {
        return UltraCalcFunctionSkew._ak(a, b, false);
    }
    get_name() {
        return "skew.p";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionSkew_P.$t = markType(UltraCalcFunctionSkew_P, 'UltraCalcFunctionSkew_P', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionClean extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return c;
        }
        let d = c.toString();
        if (!stringIsNullOrEmpty(d)) {
            let e = null;
            let f = false;
            for (let g = 0; g < d.length; g++) {
                let h = d.charAt(g);
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
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_name() {
        return "clean";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionClean.$t = markType(UltraCalcFunctionClean, 'UltraCalcFunctionClean', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionBase extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = null;
        if (b == 3) {
            c = a.pop();
        }
        let d = a.pop();
        let e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c != null && c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let f = e._toInt641();
        let g = d._toInt641();
        let h = c == null ? 1 : c._toInt();
        if (f < 0 || f >= 0x1FFFFFFFFFFFFE) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (g < 2 || g > 36) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (h < 0 || h > 255) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let i = new StringBuilder(0);
        let j = g;
        while (f > 0) {
            let k = f % j;
            f -= k;
            let l;
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
    }
    get_maxArgs() {
        return 3;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_name() {
        return "base";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionBase.$t = markType(UltraCalcFunctionBase, 'UltraCalcFunctionBase', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionDecimal extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        let d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let e = d.toString();
        let f = c._toInt641();
        if (e.length > 255) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(1));
        }
        if (f < 2 || f > 36) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (Math.pow(f, e.length) > 0x7FFFFFFFFFFFFFFF) {
            let g = 1;
            let h = 0;
            for (let i = e.length - 1; i >= 0; i--) {
                let j = e.charAt(i);
                let k;
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
            let l = 1;
            let m = 0;
            for (let n = e.length - 1; n >= 0; n--) {
                let o = e.charAt(n);
                let p;
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
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_name() {
        return "decimal";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionDecimal.$t = markType(UltraCalcFunctionDecimal, 'UltraCalcFunctionDecimal', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionStandardize extends BuiltInFunctionBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.i(a, true, (c, d, e) => {
            if (e <= 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            return new ExcelCalcValue((c - d) / e);
        });
    }
    get_maxArgs() {
        return 3;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    get_minArgs() {
        return 3;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_name() {
        return "standardize";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionStandardize.$t = markType(UltraCalcFunctionStandardize, 'UltraCalcFunctionStandardize', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionEffect extends BuiltInFunctionBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.j(a, false, (c, d) => {
            let e = truncate(d);
            let f = e;
            if (c <= 0 || f < 1) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            let g = Math.pow(1 + c / f, f) - 1;
            return new ExcelCalcValue(g);
        });
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_name() {
        return "effect";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionEffect.$t = markType(UltraCalcFunctionEffect, 'UltraCalcFunctionEffect', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionNominal extends BuiltInFunctionBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.j(a, false, (c, d) => {
            let e = truncate(d);
            let f = e;
            if (c <= 0 || f < 1) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            let g = (Math.pow(c + 1, 1 / f) - 1) * f;
            return new ExcelCalcValue(g);
        });
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_name() {
        return "nominal";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionNominal.$t = markType(UltraCalcFunctionNominal, 'UltraCalcFunctionNominal', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionRRI extends BuiltInFunctionBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.i(a, true, (c, d, e) => {
            if (c <= 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            let f = Math.pow(e / d, 1 / c) - 1;
            return new ExcelCalcValue(f);
        });
    }
    get_maxArgs() {
        return 3;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    get_minArgs() {
        return 3;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_name() {
        return "rri";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionRRI.$t = markType(UltraCalcFunctionRRI, 'UltraCalcFunctionRRI', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionPDuration extends BuiltInFunctionBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.i(a, true, (c, d, e) => {
            if (c <= 0 || d <= 0 || e <= 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            let f = (Math.log(e) - Math.log(d)) / Math.log(1 + c);
            return new ExcelCalcValue(f);
        });
    }
    get_maxArgs() {
        return 3;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    get_minArgs() {
        return 3;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_name() {
        return "pduration";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionPDuration.$t = markType(UltraCalcFunctionPDuration, 'UltraCalcFunctionPDuration', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionDays extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        let d = a.pop();
        let e, f;
        if (d.isString) {
            let g;
            if (((() => { let h = d._aj(d._a0, g); g = h.p1; return h.ret; })()) == false) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
            e = (((h) => !nullableIsNull(h) ? h.value : -1)(ExcelCalcValue._dateTimeToExcelDate(d._o, g)));
        }
        else {
            e = d._toDouble3();
        }
        if (c.isString) {
            let h;
            if (((() => { let i = c._aj(c._a0, h); h = i.p1; return i.ret; })()) == false) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(1));
            }
            f = (((i) => !nullableIsNull(i) ? i.value : -1)(ExcelCalcValue._dateTimeToExcelDate(c._o, h)));
        }
        else {
            f = c._toDouble3();
        }
        let i = 2958466;
        if (f < 0 || f >= i || e < 0 || e >= i) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let j = Math.floor(e) - Math.floor(f);
        return new ExcelCalcValue(j);
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_name() {
        return "days";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionDays.$t = markType(UltraCalcFunctionDays, 'UltraCalcFunctionDays', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionYearFrac extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = b == 3 ? a.pop() : null;
        let d = a.pop();
        let e = a.pop();
        let f, g;
        if (!((() => { let h = e._aj(a._w, f, false, true); f = h.p1; return h.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        if (!((() => { let h = d._aj(a._w, g, false, true); g = h.p1; return h.ret; })())) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let h = c == null ? 0 : c._toInt321();
        if (h < 0 || h > 4) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let i = CalcDateUtilities.d(f, g, h);
        return new ExcelCalcValue(MathUtilities.i(i));
    }
    get_maxArgs() {
        return 3;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_name() {
        return "yearfrac";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionYearFrac.$t = markType(UltraCalcFunctionYearFrac, 'UltraCalcFunctionYearFrac', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionProbFunction extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = 0;
        if (b == 4) {
            c = a.pop()._toDecimal2();
        }
        let d = a.pop()._toDecimal2();
        if (b < 4) {
            c = d;
        }
        let e = a.pop().toArrayProxy();
        let f = a.pop().toArrayProxy();
        let g = e.getLength(0) * e.getLength(1);
        let h = f.getLength(0) * f.getLength(1);
        if (g != h) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        let i = 0;
        let j = 0;
        let k = getEnumerator(e);
        let l = getEnumerator(f);
        while (k.moveNext()) {
            l.moveNext();
            let m = k.current;
            if (m.isError) {
                return new ExcelCalcValue(m.toErrorValue());
            }
            let n = l.current;
            if (n.isError) {
                return new ExcelCalcValue(n.toErrorValue());
            }
            let o = m._toDecimal2();
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
                let p = n._toDecimal2();
                if (d <= p && p <= c) {
                    j += o;
                }
            }
        }
        if (i != 1) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        return new ExcelCalcValue(j);
    }
    get_maxArgs() {
        return 4;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    get_minArgs() {
        return 3;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_name() {
        return "prob";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionProbFunction.$t = markType(UltraCalcFunctionProbFunction, 'UltraCalcFunctionProbFunction', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionPermutationA extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d = c._toDouble3();
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let e = c._toDouble3();
        if (e < 0 || d < 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let f = Math.pow(e, d);
        return new ExcelCalcValue(f);
    }
    get_name() {
        return "permutationa";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionPermutationA.$t = markType(UltraCalcFunctionPermutationA, 'UltraCalcFunctionPermutationA', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionPermut extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let d = truncate(c._toDecimal2());
        c = a.pop();
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let e = truncate(c._toDecimal2());
        if (e < 0 || d < 0 || d > e) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let f = UltraCalcFunctionPermut._ak(e, d);
        return new ExcelCalcValue(f);
    }
    get_name() {
        return "permut";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    static _ak(a, b) {
        if (b > a) {
            return NaN;
        }
        let c = 1;
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
    }
}
UltraCalcFunctionPermut.$t = markType(UltraCalcFunctionPermut, 'UltraCalcFunctionPermut', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionPoisson extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        let d = a.pop();
        let e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let f = e._toDecimal2();
        let g = d._toDouble3();
        let h = c._toBoolean1();
        if (f < 0 || (f >= 1 && g < 0)) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let i = g;
        let j = truncate(f);
        let k = 0;
        if (j > 170 || j * log10(i) >= 290) {
            let l = 0;
            let m = 0;
            let n = truncate(i);
            l = l + 1;
            if (n == j) {
                m++;
            }
            if (h && n < j) {
                m++;
            }
            let o = n * 2;
            let p = 1;
            let q = false;
            let r = n + 1;
            while (!q && r <= o) {
                let s = p * i / r;
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
                let t = p * (r + 1) / i;
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
            let u = h ? 0 : j;
            let v = UltraCalcFunctionFact._ak(u);
            let w = Math.exp(-i);
            for (let x = u; x <= j; x++) {
                k += w * Math.pow(i, x) / v;
                v *= (x + 1);
            }
        }
        return new ExcelCalcValue(k);
    }
    get_name() {
        return "poisson";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 3;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 3;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionPoisson.$t = markType(UltraCalcFunctionPoisson, 'UltraCalcFunctionPoisson', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionPoissonDist extends UltraCalcFunctionPoisson {
    get_name() {
        return "poisson.dist";
    }
}
UltraCalcFunctionPoissonDist.$t = markType(UltraCalcFunctionPoissonDist, 'UltraCalcFunctionPoissonDist', UltraCalcFunctionPoisson.$);
/**
 * @hidden
 */
export class UltraCalcFunctionErf extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = 0;
        let d = null;
        if (b == 2) {
            d = a.pop();
        }
        let e = a.pop();
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
        let f = e._toDouble3();
        let g = ErfUtils.c(f);
        if (b == 2) {
            g = ErfUtils.c(c) - g;
        }
        return new ExcelCalcValue(g);
    }
    get_name() {
        return "erf";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionErf.$t = markType(UltraCalcFunctionErf, 'UltraCalcFunctionErf', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionErfPrecise extends BuiltInFunctionBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.h(a, false, (c) => new ExcelCalcValue(ErfUtils.c(c)));
    }
    get_name() {
        return "erf.precise";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionErfPrecise.$t = markType(UltraCalcFunctionErfPrecise, 'UltraCalcFunctionErfPrecise', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionErfc extends BuiltInFunctionBase {
    evaluate(a, b) {
        return CalcFunctionUtilities.h(a, false, (c) => new ExcelCalcValue(ErfUtils.d(c)));
    }
    get_name() {
        return "erfc";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionErfc.$t = markType(UltraCalcFunctionErfc, 'UltraCalcFunctionErfc', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionErfcPrecise extends UltraCalcFunctionErfc {
    get_name() {
        return "erfc.precise";
    }
}
UltraCalcFunctionErfcPrecise.$t = markType(UltraCalcFunctionErfcPrecise, 'UltraCalcFunctionErfcPrecise', UltraCalcFunctionErfc.$);
/**
 * @hidden
 */
export class UltraCalcFunctionExponDist extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        let d = a.pop();
        let e = a.pop();
        if (e.isError) {
            return new ExcelCalcValue(e.toErrorValue());
        }
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let f = e._toDouble3();
        let g = d._toDouble3();
        let h = c._toBoolean1();
        if (f < 0 || g <= 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let i = Math.exp(-f * g);
        let j = h ? 1 - i : g * i;
        return new ExcelCalcValue(j);
    }
    get_name() {
        return "expondist";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 3;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 3;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionExponDist.$t = markType(UltraCalcFunctionExponDist, 'UltraCalcFunctionExponDist', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionExpon_Dist extends UltraCalcFunctionExponDist {
    get_name() {
        return "expon.dist";
    }
}
UltraCalcFunctionExpon_Dist.$t = markType(UltraCalcFunctionExpon_Dist, 'UltraCalcFunctionExpon_Dist', UltraCalcFunctionExponDist.$);
/**
 * @hidden
 */
export class UltraCalcFunctionWeibull extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        let d = a.pop();
        let e = a.pop();
        let f = a.pop();
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
        let g = f._toDouble3();
        let h = e._toDouble3();
        let i = d._toDouble3();
        let j = c._toBoolean1();
        if (g < 0 || h <= 0 || i <= 0) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        let k = Math.exp(-Math.pow(g / i, h));
        let l = j ? (1 - k) : h / Math.pow(i, h) * Math.pow(g, h - 1) * k;
        return new ExcelCalcValue(l);
    }
    get_name() {
        return "weibull";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 4;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 4;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionWeibull.$t = markType(UltraCalcFunctionWeibull, 'UltraCalcFunctionWeibull', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionWeibullDist extends UltraCalcFunctionWeibull {
    get_name() {
        return "weibull.dist";
    }
}
UltraCalcFunctionWeibullDist.$t = markType(UltraCalcFunctionWeibullDist, 'UltraCalcFunctionWeibullDist', UltraCalcFunctionWeibull.$);
/**
 * @hidden
 */
export class UltraCalcFunctionTrimMean extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        let d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        if (c.isError) {
            return new ExcelCalcValue(c.toErrorValue());
        }
        let e = c._toDouble3();
        let f = CalcFunctionUtilities.o(10);
        if (e < 0 || e >= 1) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(4));
        }
        try {
            CalcArgumentHelper.c(d, 0, 1229, runOn(f, f.add));
            if (f.count == 0) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(4));
            }
            let g = truncate((e * f.count));
            g -= g % 2;
            if (g > 0) {
                f.y();
            }
            let h = 0;
            for (let i = (intDivide(g, 2)), j = f.count - (intDivide(g, 2)); i < j; i++) {
                h += f._inner[i];
            }
            let k = CalcFunctionUtilities.t(f.count - g, h);
            return new ExcelCalcValue(k);
        }
        finally {
            CalcFunctionUtilities.ac(f);
        }
    }
    get_name() {
        return "trimmean";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionTrimMean.$t = markType(UltraCalcFunctionTrimMean, 'UltraCalcFunctionTrimMean', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionAverageIfs extends BuiltInFunctionBase {
    evaluate(a, b) {
        return UltraCalcConditionalFunctionBase._ak(a, b, 0, (c, d) => new ExcelCalcValue(d == 0 ? new ExcelCalcErrorValue(2) : (c / d)), (c, d) => c + d);
    }
    get_name() {
        return "averageifs";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 3;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionAverageIfs.$t = markType(UltraCalcFunctionAverageIfs, 'UltraCalcFunctionAverageIfs', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionCell extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = null;
        if (b == 2) {
            c = a.pop();
        }
        let d = a.pop();
        if (d.isError) {
            return new ExcelCalcValue(d.toErrorValue());
        }
        let e = d.toString().toLowerCase();
        let f = null;
        let g;
        let h;
        let i, j;
        if (c == null) {
            let k = a._r._u;
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
        let l = h != null ? h._rows$i._aj(i) : null;
        let m;
        switch (e) {
            case "address":
                {
                    let n = CellAddress.u(i, j, h._o, false, false, -1, -1, false, h._c);
                    if (WorksheetCell.l_op_Equality(a.owningCell, null) || h != a.owningCell.worksheet) {
                        let o = g.o(GetFormulaStringInfo.a, true);
                        if (stringStartsWith(o, "'") && stringEndsWith(o, "'!")) {
                            o = o.substr(1, o.length - 3);
                            let p = o.indexOf("[");
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
                            let q = typeCast(String_$type, m);
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
                        let r = g.o(GetFormulaStringInfo.a, true);
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
                        let s = h._b4(l, j);
                        switch (e) {
                            case "color":
                                {
                                    let t = s._cs;
                                    let u = h.workbook._b2.a(t);
                                    let v = u.c(1);
                                    m = v != null && !stringIsNullOrEmpty(v.color) ? 1 : 0;
                                    break;
                                }
                            case "parentheses":
                                {
                                    let w = s._cs;
                                    let x = h.workbook._b2.a(w);
                                    let y = x.c(0);
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
                                    let z = s._cs;
                                    let aa = h.workbook._b2.a(z);
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
                        let ab = h._fp(j, false);
                        m = MathUtilities.f(h._fn(ab));
                    }
                    break;
                }
            default:
                m = new ExcelCalcErrorValue(1);
                break;
        }
        return new ExcelCalcValue(m);
    }
    static _ak(a, b, c, d, e, f) {
        let g;
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
                    let h = e.getCellFormula(d);
                    if (h != null) {
                        return h;
                    }
                }
                let i = null;
                if (b == null) {
                    b = e._as(d);
                    if (b._af && b._formula != null) {
                        i = b._formula.evaluateCore(e.worksheet.workbook);
                    }
                }
                if (i == null) {
                    i = new ExcelCalcValue(b);
                }
                let j = i._bj(false, false);
                if (typeCast(FormattedString.$, j) !== null) {
                    g = j.unformattedString;
                }
                else {
                    g = j;
                }
            }
        }
        return g;
    }
    get_name() {
        return "cell";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 2;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionCell.$t = markType(UltraCalcFunctionCell, 'UltraCalcFunctionCell', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionCountIfs extends BuiltInFunctionBase {
    evaluate(a, b) {
        return UltraCalcConditionalFunctionBase._ak(a, b, 0, (c, d) => new ExcelCalcValue(d));
    }
    get_name() {
        return "countifs";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 2;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionCountIfs.$t = markType(UltraCalcFunctionCountIfs, 'UltraCalcFunctionCountIfs', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionCovarianceP extends UltraCalcFunctionCovar {
    evaluate(a, b) {
        return UltraCalcFunctionCovar._as(a, b, false);
    }
    get_name() {
        return "covariance.p";
    }
}
UltraCalcFunctionCovarianceP.$t = markType(UltraCalcFunctionCovarianceP, 'UltraCalcFunctionCovarianceP', UltraCalcFunctionCovar.$);
/**
 * @hidden
 */
export class UltraCalcFunctionCovarianceS extends UltraCalcFunctionCovar {
    evaluate(a, b) {
        return UltraCalcFunctionCovar._as(a, b, true);
    }
    get_name() {
        return "covariance.s";
    }
}
UltraCalcFunctionCovarianceS.$t = markType(UltraCalcFunctionCovarianceS, 'UltraCalcFunctionCovarianceS', UltraCalcFunctionCovar.$);
/**
 * @hidden
 */
export class UltraCalcFunctionFormulaText extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        if (!c.isReference) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        let d = c.toReference();
        let e = d.value;
        let f = d.formula;
        if (f == null) {
            return new ExcelCalcValue(new ExcelCalcErrorValue(3));
        }
        let g;
        if (typeCast(ArrayInteriorFormula.$, f) !== null) {
            g = "{" + f._cz._toString() + "}";
        }
        else {
            g = f.formulaString;
        }
        return new ExcelCalcValue(g);
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_name() {
        return "formulatext";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionFormulaText.$t = markType(UltraCalcFunctionFormulaText, 'UltraCalcFunctionFormulaText', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionIsFormula extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = a.pop();
        let d = false;
        if (c.isReference) {
            let e = c.toReference();
            let f = e.value;
            d = e.formula != null;
        }
        return new ExcelCalcValue(d);
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    get_minArgs() {
        return 1;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_name() {
        return "isformula";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionIsFormula.$t = markType(UltraCalcFunctionIsFormula, 'UltraCalcFunctionIsFormula', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionMaxIfs extends BuiltInFunctionBase {
    evaluate(a, b) {
        return UltraCalcConditionalFunctionBase._ak(a, b, -1.7976931348623157E+308, (c, d) => new ExcelCalcValue(d == 0 ? 0 : c), (c, d) => d > c ? d : c);
    }
    get_name() {
        return "maxifs";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 3;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionMaxIfs.$t = markType(UltraCalcFunctionMaxIfs, 'UltraCalcFunctionMaxIfs', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionMinIfs extends BuiltInFunctionBase {
    evaluate(a, b) {
        return UltraCalcConditionalFunctionBase._ak(a, b, 1.7976931348623157E+308, (c, d) => new ExcelCalcValue(d == 0 ? 0 : c), (c, d) => d < c ? d : c);
    }
    get_name() {
        return "minifs";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 3;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionMinIfs.$t = markType(UltraCalcFunctionMinIfs, 'UltraCalcFunctionMinIfs', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSheet extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = null;
        if (b == 1) {
            c = a.pop();
        }
        let d = null;
        if (b == 0) {
            if (WorksheetCell.l_op_Inequality(a.owningCell, null)) {
                d = a.owningCell.worksheet;
            }
        }
        else if (c.isReference) {
            let e = c.toReference();
            d = e._u;
            if (d == null) {
                return new ExcelCalcValue(new ExcelCalcErrorValue(7));
            }
        }
        else if (c.isString) {
            let f = c.toString();
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
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    get_minArgs() {
        return 0;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_name() {
        return "sheet";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionSheet.$t = markType(UltraCalcFunctionSheet, 'UltraCalcFunctionSheet', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSheets extends BuiltInFunctionBase {
    evaluate(a, b) {
        let c = null;
        if (b == 1) {
            c = a.pop();
        }
        let d;
        if (b == 0) {
            d = a._r._sheets$i.count;
        }
        else if (c.isReference) {
            let e = c.toReference();
            if (typeCast(NamedCalcReferenceUnconnected.$, e) !== null) {
                d = new ExcelCalcErrorValue(1);
            }
            else {
                let f = e._am();
                if (f.count == 1) {
                    d = 1;
                }
                else {
                    let g = 0x7FFFFFFF;
                    let h = -2147483648;
                    for (let i of fromEnum(f)) {
                        let j = i.worksheet.sheetIndex;
                        if (j < g) {
                            g = j;
                        }
                        if (j > h) {
                            h = j;
                        }
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
    }
    get_maxArgs() {
        return 1;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
    get_minArgs() {
        return 0;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_name() {
        return "sheets";
    }
    get name() {
        return this.get_name();
    }
}
UltraCalcFunctionSheets.$t = markType(UltraCalcFunctionSheets, 'UltraCalcFunctionSheets', BuiltInFunctionBase.$);
/**
 * @hidden
 */
export class UltraCalcFunctionSumIfs extends BuiltInFunctionBase {
    evaluate(a, b) {
        return UltraCalcConditionalFunctionBase._ak(a, b, 0, (c, d) => new ExcelCalcValue(c), (c, d) => c + d);
    }
    get_name() {
        return "sumifs";
    }
    get name() {
        return this.get_name();
    }
    get_minArgs() {
        return 3;
    }
    get minArgs() {
        return this.get_minArgs();
    }
    get_maxArgs() {
        return 0x7FFFFFFF;
    }
    get maxArgs() {
        return this.get_maxArgs();
    }
}
UltraCalcFunctionSumIfs.$t = markType(UltraCalcFunctionSumIfs, 'UltraCalcFunctionSumIfs', BuiltInFunctionBase.$);
callStaticConstructors();
//# sourceMappingURL=excel.functions.js.map
