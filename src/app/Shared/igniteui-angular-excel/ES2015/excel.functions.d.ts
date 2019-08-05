import { Type, Base, IEnumerable$1, Nullable$1 } from "../../igniteui-angular-core/ES2015/type";
import { BuiltInFunctionBase, ExcelCalcValue, ExcelCalcNumberStack, ExcelCalcErrorValue, ArrayProxy, FirstWeekOfYear, DateInterval, ArrayValueContext } from "./excel.core";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { CalendarWeekRule, CultureInfo } from "../../igniteui-angular-core/ES2015/culture";
import { DayOfWeek } from "../../igniteui-angular-core/ES2015/dateExtended";
import { Dictionary$2 } from "../../igniteui-angular-core/ES2015/Dictionary$2";
import { Regex } from "../../igniteui-angular-core/ES2015/Regex";
import { KeyValuePair$2 } from "../../igniteui-angular-core/ES2015/KeyValuePair$2";
/**
 * @hidden
 */
export declare const enum UltraCalcConditionalFunctionBase_CriteriaEvaluator_Operator {
    Equals = 0,
    NotEquals = 1,
    GreaterThan = 2,
    GreaterThanOrEqual = 3,
    LessThan = 4,
    LessThanOrEqual = 5
}
/**
 * @hidden
 */
export declare let UltraCalcConditionalFunctionBase_CriteriaEvaluator_Operator_$type: Type;
/**
 * @hidden
 */
export declare const enum UltraCalcFunctionConvert_MeasurementUnitCategory {
    Unknown = 0,
    WeightAndMass = 1,
    Distance = 2,
    Time = 3,
    Pressure = 4,
    Force = 5,
    Energy = 6,
    Power = 7,
    Magnetism = 8,
    Temperature = 9,
    LiquidMeasure = 10
}
/**
 * @hidden
 */
export declare let UltraCalcFunctionConvert_MeasurementUnitCategory_$type: Type;
/**
 * @hidden
 */
export declare class ErfUtils extends Base {
    static $t: Type;
    static bb(a: number): number;
    static a8(a: number): number;
    static c(a: number): number;
    static d(a: number): number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionLoader extends Base {
    static $t: Type;
    static staticInit(): void;
    static b(): void;
    private static a;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionConcatenate extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    canParameterBeEnumerable(a: number): boolean;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionAverage extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    canParameterBeEnumerable(a: number): boolean;
    static _ak(a: List$1<number>): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSum extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    canParameterBeEnumerable(a: number): boolean;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionIf extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
    protected get__s(): boolean;
    _v(a: number): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionAbs extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionMod extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionQuotient extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionProduct extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    canParameterBeEnumerable(a: number): boolean;
    static _ak(a: List$1<number>): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionPower extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionInt extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionTrunc extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionCount extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    canParameterBeEnumerable(a: number): boolean;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionTrue extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionFalse extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionNot extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionAnd extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    canParameterBeEnumerable(a: number): boolean;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionOr extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    canParameterBeEnumerable(a: number): boolean;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionMin extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    canParameterBeEnumerable(a: number): boolean;
    static _ak(a: List$1<number>): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionMax extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    canParameterBeEnumerable(a: number): boolean;
    static _ak(a: List$1<number>): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionExp extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionRound extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    static _ak(a: number, b: number): number;
    static _al(a: number, b: number, c: number): number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionPi extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSqrt extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionCos extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionACos extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionCosh extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSin extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSinh extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionASin extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionTan extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionTanh extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionATan extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionATan2 extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionFloor extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionCeiling extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionRand extends BuiltInFunctionBase {
    static $t: Type;
    private _ak;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionLn extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionLog10 extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionLog extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionNPV extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    canParameterBeEnumerable(a: number): boolean;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionFV extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    static _ak(a: number, b: number, c: number, d: number, e: number): number;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionPV extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionPmt extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionNPer extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionEven extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionOdd extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionPPmt extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionIPmt extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionLower extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionUpper extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionLeft extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionRight extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionMid extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionTrim extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionLen extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionValue extends BuiltInFunctionBase {
    static $t: Type;
    private static readonly _ak;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionFind extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionReplace extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSYD extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSLN extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionDB extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionDDB extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionIntRate extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionDateValue extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionDate extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionDays360 extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    static _ak(a: Date, b: Date, c: boolean): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionDay extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionMonth extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionYear extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionHour extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionMinute extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSecond extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionNow extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionTimeValue extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionTime extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionMedian extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    canParameterBeEnumerable(a: number): boolean;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionVar extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    canParameterBeEnumerable(a: number): boolean;
    static _ak(a: List$1<number>, b: boolean): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionStdev extends UltraCalcFunctionVar {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    canParameterBeEnumerable(a: number): boolean;
    static _al(a: List$1<number>, b: boolean): ExcelCalcValue;
    protected get_name(): string;
    protected get_minArgs(): number;
    protected get_maxArgs(): number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionType extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionErrorType extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionNa extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionIsBlank extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionIsErr extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionIsError extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionIsLogical extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionIsNa extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionIsNonText extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionIsNumber extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionIsRef extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionIsText extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionIsEven extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionIsOdd extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionIRR extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    canParameterBeEnumerable(a: number): boolean;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionRate extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionIsNull extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionNull extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionIsDBNull extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionDBNull extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionDateAdd extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionDateDiff extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    private static _al;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    static _ak(a: CalendarWeekRule): FirstWeekOfYear;
    static _an(a: CultureInfo, b: string, c: Date, d: Date): number;
    static _am(a: CultureInfo, b: DateInterval, c: Date, d: Date): number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionChar extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionCode extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionFixed extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionToday extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionASinh extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionATanh extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionACosh extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionEDate extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionEOMonth extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionWeekDay extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionNetWorkDays extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    canParameterBeEnumerable(a: number): boolean;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionWeekNum extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionWorkDay extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    canParameterBeEnumerable(a: number): boolean;
    private _an;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    static _ak(a: ExcelCalcValue[], b: Dictionary$2<Date, any>, c: ExcelCalcValue): {
        ret: boolean;
        p1: Dictionary$2<Date, any>;
        p2: ExcelCalcValue;
    };
    static _al(a: Date): boolean;
    static _am(a: DayOfWeek): boolean;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare abstract class UltraCalcFunctionDec2XBase extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    abstract readonly _ap: number;
    abstract readonly _al: number;
    abstract readonly _ak: number;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    static _at(a: number, b: number, c: number, d: number): string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionDec2Bin extends UltraCalcFunctionDec2XBase {
    static $t: Type;
    protected get_name(): string;
    readonly name: string;
    protected get__ap(): number;
    readonly _ap: number;
    protected get__al(): number;
    readonly _al: number;
    protected get__ak(): number;
    readonly _ak: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionDec2Hex extends UltraCalcFunctionDec2XBase {
    static $t: Type;
    protected get_name(): string;
    readonly name: string;
    protected get__ap(): number;
    readonly _ap: number;
    protected get__al(): number;
    readonly _al: number;
    protected get__ak(): number;
    readonly _ak: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionDec2Oct extends UltraCalcFunctionDec2XBase {
    static $t: Type;
    protected get_name(): string;
    readonly name: string;
    protected get__ap(): number;
    readonly _ap: number;
    protected get__al(): number;
    readonly _al: number;
    protected get__ak(): number;
    readonly _ak: number;
}
/**
 * @hidden
 */
export declare abstract class UltraCalcFunctionXBase2Dec extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    abstract readonly _ao: number;
    abstract readonly _an: number;
    abstract readonly _ak: number;
    abstract readonly _am: number;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    static _al(a: CultureInfo, b: string, c: number, d: number, e: number, f: ExcelCalcErrorValue): {
        ret: number;
        p5: ExcelCalcErrorValue;
    };
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionBin2Dec extends UltraCalcFunctionXBase2Dec {
    static $t: Type;
    protected get_name(): string;
    readonly name: string;
    protected get__ao(): number;
    readonly _ao: number;
    protected get__an(): number;
    readonly _an: number;
    protected get__ak(): number;
    readonly _ak: number;
    protected get__am(): number;
    readonly _am: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionHex2Dec extends UltraCalcFunctionXBase2Dec {
    static $t: Type;
    protected get_name(): string;
    readonly name: string;
    protected get__ao(): number;
    readonly _ao: number;
    protected get__an(): number;
    readonly _an: number;
    protected get__ak(): number;
    readonly _ak: number;
    protected get__am(): number;
    readonly _am: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionOct2Dec extends UltraCalcFunctionXBase2Dec {
    static $t: Type;
    protected get_name(): string;
    readonly name: string;
    protected get__ao(): number;
    readonly _ao: number;
    protected get__an(): number;
    readonly _an: number;
    protected get__ak(): number;
    readonly _ak: number;
    protected get__am(): number;
    readonly _am: number;
}
/**
 * @hidden
 */
export declare abstract class UltraCalcFunctionXBase2XBase extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    abstract readonly _aq: number;
    abstract readonly _ap: number;
    abstract readonly _ao: number;
    abstract readonly _an: number;
    abstract readonly _al: number;
    abstract readonly _ak: number;
    abstract readonly _am: number;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionBin2Oct extends UltraCalcFunctionXBase2XBase {
    static $t: Type;
    protected get_name(): string;
    readonly name: string;
    protected get__aq(): number;
    readonly _aq: number;
    protected get__ap(): number;
    readonly _ap: number;
    protected get__ao(): number;
    readonly _ao: number;
    protected get__an(): number;
    readonly _an: number;
    protected get__al(): number;
    readonly _al: number;
    protected get__ak(): number;
    readonly _ak: number;
    protected get__am(): number;
    readonly _am: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionBin2Hex extends UltraCalcFunctionXBase2XBase {
    static $t: Type;
    protected get_name(): string;
    readonly name: string;
    protected get__aq(): number;
    readonly _aq: number;
    protected get__ap(): number;
    readonly _ap: number;
    protected get__ao(): number;
    readonly _ao: number;
    protected get__an(): number;
    readonly _an: number;
    protected get__al(): number;
    readonly _al: number;
    protected get__ak(): number;
    readonly _ak: number;
    protected get__am(): number;
    readonly _am: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionOct2Bin extends UltraCalcFunctionXBase2XBase {
    static $t: Type;
    protected get_name(): string;
    readonly name: string;
    protected get__aq(): number;
    readonly _aq: number;
    protected get__ap(): number;
    readonly _ap: number;
    protected get__ao(): number;
    readonly _ao: number;
    protected get__an(): number;
    readonly _an: number;
    protected get__al(): number;
    readonly _al: number;
    protected get__ak(): number;
    readonly _ak: number;
    protected get__am(): number;
    readonly _am: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionOct2Hex extends UltraCalcFunctionXBase2XBase {
    static $t: Type;
    protected get_name(): string;
    readonly name: string;
    protected get__aq(): number;
    readonly _aq: number;
    protected get__ap(): number;
    readonly _ap: number;
    protected get__ao(): number;
    readonly _ao: number;
    protected get__an(): number;
    readonly _an: number;
    protected get__al(): number;
    readonly _al: number;
    protected get__ak(): number;
    readonly _ak: number;
    protected get__am(): number;
    readonly _am: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionHex2Bin extends UltraCalcFunctionXBase2XBase {
    static $t: Type;
    protected get_name(): string;
    readonly name: string;
    protected get__aq(): number;
    readonly _aq: number;
    protected get__ap(): number;
    readonly _ap: number;
    protected get__ao(): number;
    readonly _ao: number;
    protected get__an(): number;
    readonly _an: number;
    protected get__al(): number;
    readonly _al: number;
    protected get__ak(): number;
    readonly _ak: number;
    protected get__am(): number;
    readonly _am: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionHex2Oct extends UltraCalcFunctionXBase2XBase {
    static $t: Type;
    protected get_name(): string;
    readonly name: string;
    protected get__aq(): number;
    readonly _aq: number;
    protected get__ap(): number;
    readonly _ap: number;
    protected get__ao(): number;
    readonly _ao: number;
    protected get__an(): number;
    readonly _an: number;
    protected get__al(): number;
    readonly _al: number;
    protected get__ak(): number;
    readonly _ak: number;
    protected get__am(): number;
    readonly _am: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionConvert extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    private static _as;
    private static _at;
    private static _ak;
    private static _aq;
    private static _am;
    private static _al;
    private static _ap;
    private static _ao;
    private static _an;
    private static _ar;
    private static _au;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionConvert_UnitInfo extends Base {
    static $t: Type;
    private k;
    private e;
    private i;
    private b;
    static d(a: string): UltraCalcFunctionConvert_UnitInfo;
    constructor(a: string, b: boolean, c: number, d: UltraCalcFunctionConvert_MeasurementUnitCategory);
    readonly l: string;
    readonly f: boolean;
    readonly j: number;
    readonly c: UltraCalcFunctionConvert_MeasurementUnitCategory;
    private static a;
    private static h;
    private static g;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionDelta extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionGeStep extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionComplex extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionComplex_ComplexNumber extends Base {
    static $t: Type;
    private static f;
    private static a;
    private static ag;
    private static ah;
    private ai;
    private ae;
    private am;
    private x;
    constructor(a: number, b: number, c: number, d: string);
    constructor(a: number, b: CultureInfo, c: string);
    constructor(a: number, b: number, c: number, d: string, e: boolean);
    constructor(a: number, ..._rest: any[]);
    aj: number;
    readonly af: number;
    an: string;
    readonly y: boolean;
    toString(): string;
    ab(): number;
    ac(): number;
    c(): UltraCalcFunctionComplex_ComplexNumber;
    d(): UltraCalcFunctionComplex_ComplexNumber;
    e(): UltraCalcFunctionComplex_ComplexNumber;
    ad(): number;
    m(): UltraCalcFunctionComplex_ComplexNumber;
    n(): UltraCalcFunctionComplex_ComplexNumber;
    o(): UltraCalcFunctionComplex_ComplexNumber;
    u(a: number): UltraCalcFunctionComplex_ComplexNumber;
    v(): UltraCalcFunctionComplex_ComplexNumber;
    w(): UltraCalcFunctionComplex_ComplexNumber;
    ak(): number;
    static z(a: CultureInfo, b: string, c: number, d: number, e: string): {
        ret: boolean;
        p2: number;
        p3: number;
        p4: string;
    };
    private static aa;
    private static b;
    static al(a: number, b: number, c: string): string;
    static readonly g: UltraCalcFunctionComplex_ComplexNumber;
    static i(a: UltraCalcFunctionComplex_ComplexNumber, b: UltraCalcFunctionComplex_ComplexNumber): UltraCalcFunctionComplex_ComplexNumber;
    static j(a: UltraCalcFunctionComplex_ComplexNumber, b: UltraCalcFunctionComplex_ComplexNumber): UltraCalcFunctionComplex_ComplexNumber;
    static k(a: UltraCalcFunctionComplex_ComplexNumber, b: number): UltraCalcFunctionComplex_ComplexNumber;
    static h(a: UltraCalcFunctionComplex_ComplexNumber, b: UltraCalcFunctionComplex_ComplexNumber): UltraCalcFunctionComplex_ComplexNumber;
    static l(a: UltraCalcFunctionComplex_ComplexNumber, b: UltraCalcFunctionComplex_ComplexNumber): UltraCalcFunctionComplex_ComplexNumber;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionImAbs extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionImaginary extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionImArgument extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionImConjugate extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionImCos extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionImDiv extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionImExp extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionImLn extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionImReal extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionImSub extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionImProduct extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    canParameterBeEnumerable(a: number): boolean;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionImSum extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    canParameterBeEnumerable(a: number): boolean;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionImLog10 extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionImLog2 extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionImSin extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionImSqrt extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionImPower extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionDollarFr extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    static _ak(a: number): number;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionDollarDe extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionInfo extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionN extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionFact extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    static _ak(a: number, b?: number): number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionFactDouble extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionCombin extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    static _am(a: number, b: number, c: boolean): number;
    private static _ak;
    private static _al;
    private static _an;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionCombina extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionBinomDist extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    static _ak(a: number, b: number, c: number, d: number): ExcelCalcValue;
    static _al(a: number, b: number, c: number): number;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionCritBinom extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionDegrees extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    static _ak(a: number): number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionRadians extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    static _ak(a: number): number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionGcd extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    canParameterBeEnumerable(a: number): boolean;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    static _ak(a: number, b: number): number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionLcm extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    canParameterBeEnumerable(a: number): boolean;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    static _ak(a: number, b: number): number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionMultinomial extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    canParameterBeEnumerable(a: number): boolean;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionMRound extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    static _ak(a: number, b: number): number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionRandBetween extends BuiltInFunctionBase {
    static $t: Type;
    private _ak;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionRoman extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionRoman_RomanNumeral extends Base {
    static $t: Type;
    private k;
    private static a;
    private static c;
    private static e;
    private static g;
    private static i;
    constructor(a: number);
    readonly l: number;
    private static readonly b;
    private static readonly d;
    private static readonly f;
    private static readonly h;
    private static readonly j;
    toString(): string;
    o(a: boolean): string;
    p(a: number): string;
    static m(a: number, b: number): string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionRoundDown extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionRoundUp extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSeriesSum extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    canParameterBeEnumerable(a: number): boolean;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSign extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSqrtPi extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionChoose extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
    protected get__s(): boolean;
    _v(a: number): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionRept extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSubtotal extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    canParameterBeEnumerable(a: number): boolean;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionText extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    _ak(a: string): Nullable$1<number>;
    private static _al;
    private static readonly _am;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionIfError extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionCountA extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    canParameterBeEnumerable(a: number): boolean;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSearch extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSearchB extends UltraCalcFunctionSearch {
    static $t: Type;
    protected get_name(): string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionAveDev extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare abstract class UltraCalcConditionalFunctionBase extends BuiltInFunctionBase {
    static $t: Type;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    _v(a: number): boolean;
    protected abstract _al(a: number, b: number): ExcelCalcValue;
    protected get__am(): boolean;
    readonly _am: boolean;
    protected get__an(): boolean;
    protected readonly _an: boolean;
    static _ak(a: ExcelCalcNumberStack, b: number, c: number, d: (arg1: number, arg2: number) => ExcelCalcValue, e?: (arg1: number, arg2: number) => number): ExcelCalcValue;
}
/**
 * @hidden
 */
export declare class UltraCalcConditionalFunctionBase_CriteriaEvaluator extends Base {
    static $t: Type;
    private b;
    private f;
    private e;
    private c;
    private g;
    private a;
    constructor(a: ExcelCalcNumberStack, b: any);
    d(a: ExcelCalcValue): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcConditionalFunctionBase_EvaluateHelper extends Base {
    static $t: Type;
    private c;
    private b;
    private a;
    private d;
    private f;
    constructor(a: UltraCalcConditionalFunctionBase, b: UltraCalcConditionalFunctionBase_CriteriaEvaluator, c: ArrayProxy);
    h(a: ExcelCalcValue, b: ArrayValueContext): void;
    readonly e: number;
    readonly g: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionAddress extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    private _ak;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionAreas extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    _v(a: number): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionAverageIf extends UltraCalcConditionalFunctionBase {
    static $t: Type;
    protected _al(a: number, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionColumn extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    private static _ak;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    _v(a: number): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionColumns extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    _v(a: number): boolean;
}
/**
 * @hidden
 */
export declare abstract class UltraCalcFunctionTwoMatrixFunction extends BuiltInFunctionBase {
    static $t: Type;
    protected _ak(a: ExcelCalcNumberStack, b: (element1: number, element2: number) => number): ExcelCalcValue;
    protected static _al(a: ExcelCalcNumberStack, b: ExcelCalcErrorValue): {
        ret: number;
        p1: ExcelCalcErrorValue;
    };
    protected static _ao(a: ExcelCalcNumberStack, b: ExcelCalcErrorValue, c: number[][], d: number[][]): {
        p1: ExcelCalcErrorValue;
        p2: number[][];
        p3: number[][];
    };
    protected static _aq(a: ExcelCalcNumberStack, b: number, c: number, d: ExcelCalcErrorValue): {
        p1: number;
        p2: number;
        p3: ExcelCalcErrorValue;
    };
    protected static _ap(a: number[][], b: number[][], c: number, d: number, e: number, f: number, g: ExcelCalcErrorValue): {
        p2: number;
        p3: number;
        p4: number;
        p5: number;
        p6: ExcelCalcErrorValue;
    };
    protected static _ar(a: number[][], b: number[][], c: number, d: number, e: number): {
        p2: number;
        p3: number;
        p4: number;
    };
    protected static _an(a: number[][], b: (element1: number) => number): number;
    protected static _am(a: number[][], b: number[][], c: (element1: number, element2: number) => number): number;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionCorrel extends UltraCalcFunctionTwoMatrixFunction {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionCountIf extends UltraCalcConditionalFunctionBase {
    static $t: Type;
    protected _al(a: number, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get__am(): boolean;
    protected get__an(): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionCovar extends UltraCalcFunctionTwoMatrixFunction {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    static _as(a: ExcelCalcNumberStack, b: number, c: boolean): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionForecast extends UltraCalcFunctionTwoMatrixFunction {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    protected get_maxArgs(): number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare abstract class UltraCalcFunctionLookupBase extends BuiltInFunctionBase {
    static $t: Type;
    private static _am;
    protected static _an(a: string): Regex;
    protected static _al(a: IEnumerable$1<KeyValuePair$2<number, ExcelCalcValue>>, b: ExcelCalcValue, c: number): number;
    protected static _ak(a: ExcelCalcValue, b: boolean): {
        ret: boolean;
        p1: boolean;
    };
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    _v(a: number): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionHLookup extends UltraCalcFunctionLookupBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionHyperlink extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionIndex extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    _v(a: number): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionIndirect extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionIntercept extends UltraCalcFunctionTwoMatrixFunction {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionLookup extends UltraCalcFunctionLookupBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_minArgs(): number;
    protected get_maxArgs(): number;
    protected get_name(): string;
    readonly name: string;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionMatch extends UltraCalcFunctionLookupBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    protected get_maxArgs(): number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionMdeterm extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionMinverse extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionMmult extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionOffset extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    _v(a: number): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionPearson extends UltraCalcFunctionTwoMatrixFunction {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionRow extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    private static _ak;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    _v(a: number): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionRows extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    _v(a: number): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionRsq extends UltraCalcFunctionTwoMatrixFunction {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSlope extends UltraCalcFunctionTwoMatrixFunction {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSteyx extends UltraCalcFunctionTwoMatrixFunction {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSumIf extends UltraCalcConditionalFunctionBase {
    static $t: Type;
    protected _al(a: number, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSumproduct extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSumx2my2 extends UltraCalcFunctionTwoMatrixFunction {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSumx2py2 extends UltraCalcFunctionTwoMatrixFunction {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSumxmy2 extends UltraCalcFunctionTwoMatrixFunction {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionTranspose extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionVLookup extends UltraCalcFunctionLookupBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionBinom_Dist extends UltraCalcFunctionBinomDist {
    static $t: Type;
    protected get_name(): string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionBinom_Inv extends UltraCalcFunctionCritBinom {
    static $t: Type;
    protected get_name(): string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionBinom_Dist_Range extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionAverageA extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    canParameterBeEnumerable(a: number): boolean;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionCeilingPrecise extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionIsoCeiling extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionEcmaCeiling extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionCeilingMath extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionFloorPrecise extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionFloorMath extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionNumberValue extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionIfs extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
    protected get__s(): boolean;
    _v(a: number): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSwitch extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
    protected get__s(): boolean;
    _v(a: number): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionConcatEx extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionTextJoin extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionCountBlank extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionUSDollar extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionDollar extends UltraCalcFunctionUSDollar {
    static $t: Type;
    protected get_name(): string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionExact extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSubstitute extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionProper extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionMode extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    static _ak(a: ExcelCalcNumberStack, b: number, c: boolean): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionModeMult extends UltraCalcFunctionMode {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionModeSngl extends UltraCalcFunctionMode {
    static $t: Type;
    protected get_name(): string;
}
/**
 * @hidden
 */
export declare abstract class UltraCalcFunctionRankBase extends BuiltInFunctionBase {
    static $t: Type;
    static _ak(a: ExcelCalcNumberStack, b: number, c: boolean): ExcelCalcValue;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    protected get_minArgs(): number;
    readonly minArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionRank extends UltraCalcFunctionRankBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionRankEqual extends UltraCalcFunctionRankBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionRankAverage extends UltraCalcFunctionRankBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare abstract class UltraCalcFunctionPercentRankBase extends BuiltInFunctionBase {
    static $t: Type;
    static _ak(a: ExcelCalcNumberStack, b: number, c: boolean): ExcelCalcValue;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    protected get_minArgs(): number;
    readonly minArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionPercentRank extends UltraCalcFunctionPercentRankBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionPercentRankInclusive extends UltraCalcFunctionPercentRankBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionPercentRankExclusive extends UltraCalcFunctionPercentRankBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionDevSq extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSumSq extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare abstract class UltraCalcFunctionVarBase extends BuiltInFunctionBase {
    static $t: Type;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionVar_S extends UltraCalcFunctionVarBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionVarA extends UltraCalcFunctionVarBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionVarP extends UltraCalcFunctionVarBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionVar_P extends UltraCalcFunctionVarBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionVarPA extends UltraCalcFunctionVarBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare abstract class UltraCalcFunctionStDevBase extends BuiltInFunctionBase {
    static $t: Type;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionStDev_S extends UltraCalcFunctionStDevBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionStDevA extends UltraCalcFunctionStDevBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionStDevP extends UltraCalcFunctionStDevBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionStDev_P extends UltraCalcFunctionStDevBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionStDevPA extends UltraCalcFunctionStDevBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare abstract class UltraCalcFunctionPercentileBase extends BuiltInFunctionBase {
    static $t: Type;
    static _ak(a: ExcelCalcNumberStack, b: boolean, c: boolean): ExcelCalcValue;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    protected get_minArgs(): number;
    readonly minArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionPercentile extends UltraCalcFunctionPercentileBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionPercentileInclusive extends UltraCalcFunctionPercentileBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionPercentileExclusive extends UltraCalcFunctionPercentileBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionQuartile extends UltraCalcFunctionPercentileBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionQuartileInclusive extends UltraCalcFunctionPercentileBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionQuartileExclusive extends UltraCalcFunctionPercentileBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSmall extends BuiltInFunctionBase {
    static $t: Type;
    static _ak(a: ExcelCalcNumberStack, b: boolean): ExcelCalcValue;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionLarge extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSec extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSecH extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionCsc extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionCscH extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionCot extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionCotH extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionAcot extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionAcotH extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare abstract class UltraCalcFunctionBitOperation extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    protected abstract _am(a: number, b: number): number;
    static _ak(a: number, b: number): ExcelCalcValue;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionBitAnd extends UltraCalcFunctionBitOperation {
    static $t: Type;
    protected _am(a: number, b: number): number;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionBitOr extends UltraCalcFunctionBitOperation {
    static $t: Type;
    protected _am(a: number, b: number): number;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionBitXor extends UltraCalcFunctionBitOperation {
    static $t: Type;
    protected _am(a: number, b: number): number;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionBitLShift extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionBitRShift extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionFisher extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionFisherInv extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionIfNa extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionArabic extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionXor extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_name(): string;
    readonly name: string;
    doesParameterAllowIntermediateResultArray(a: number, b: boolean): boolean;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSkew extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    static _ak(a: ExcelCalcNumberStack, b: number, c: boolean): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSkew_P extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionClean extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionBase extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionDecimal extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionStandardize extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionEffect extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionNominal extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionRRI extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionPDuration extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionDays extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionYearFrac extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionProbFunction extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionPermutationA extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionPermut extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    static _ak(a: number, b: number): number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionPoisson extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionPoissonDist extends UltraCalcFunctionPoisson {
    static $t: Type;
    protected get_name(): string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionErf extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionErfPrecise extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionErfc extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionErfcPrecise extends UltraCalcFunctionErfc {
    static $t: Type;
    protected get_name(): string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionExponDist extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionExpon_Dist extends UltraCalcFunctionExponDist {
    static $t: Type;
    protected get_name(): string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionWeibull extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionWeibullDist extends UltraCalcFunctionWeibull {
    static $t: Type;
    protected get_name(): string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionTrimMean extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionAverageIfs extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionCell extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    private static _ak;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionCountIfs extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionCovarianceP extends UltraCalcFunctionCovar {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionCovarianceS extends UltraCalcFunctionCovar {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionFormulaText extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionIsFormula extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionMaxIfs extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionMinIfs extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSheet extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSheets extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_name(): string;
    readonly name: string;
}
/**
 * @hidden
 */
export declare class UltraCalcFunctionSumIfs extends BuiltInFunctionBase {
    static $t: Type;
    protected evaluate(a: ExcelCalcNumberStack, b: number): ExcelCalcValue;
    protected get_name(): string;
    readonly name: string;
    protected get_minArgs(): number;
    readonly minArgs: number;
    protected get_maxArgs(): number;
    readonly maxArgs: number;
}
