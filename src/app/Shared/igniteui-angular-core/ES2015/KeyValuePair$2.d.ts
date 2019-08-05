import { ValueType, Type } from "./type";
/**
 * @hidden
 */
export declare class KeyValuePair$2<TKey, TValue> extends ValueType {
    static $t: Type;
    protected $tKey: Type;
    protected $tValue: Type;
    constructor($tKey: Type, $tValue: Type, a: number, b: TKey, c: TValue);
    constructor($tKey: Type, $tValue: Type);
    constructor($tKey: Type, $tValue: Type, a: number, ..._rest: any[]);
    private a;
    private c;
    readonly key: TKey;
    readonly value: TValue;
}
