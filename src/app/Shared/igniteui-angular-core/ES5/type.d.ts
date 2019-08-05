/*!
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
export declare function getInstanceType(obj: any): Type;
export declare class Base {
    constructor();
    equals(other: any): boolean;
    static equalsStatic(a: any, b: any): boolean;
    static equalsSimple(item1: any, item2: any): boolean;
    static compareSimple(item1: any, item2: any): number;
    static compare(item1: any, item2: any): number;
    private $hashCode;
    static nextHashCode: number;
    getHashCode(): number;
    static getHashCodeStatic(obj: any): number;
    memberwiseClone(): Base;
    static referenceEquals(a: any, b: any): boolean;
    static getArrayOfValues(obj: any): any[];
    static getArrayOfProperties(obj: any): any[];
    $type: Type;
}
export declare type InstanceConstructor = Function;
export declare class Type extends Base {
    specializationCache: {
        [val: string]: Type;
    };
    private _staticInitializer;
    private _fullName;
    name: string;
    typeArguments: (number | Type)[];
    baseType: Type;
    interfaces: Type[];
    identifier: number;
    isEnumType: boolean;
    private _isGenericType;
    private _staticFields;
    InstanceConstructor: InstanceConstructor;
    isNullable: boolean;
    stringId: string;
    _$nullNullable: any;
    enumInfo: EnumInfo;
    constructor(instanceConstructor: InstanceConstructor, identifier: string, baseType?: Type, interfaces?: Type[], staticInitializer?: () => void);
    readonly typeName: string;
    readonly fullName: string;
    getSpecId(types: (number | Type)[]): string;
    readonly isGenericType: boolean;
    readonly isGenericTypeDefinition: boolean;
    readonly genericTypeArguments: (number | Type)[];
    getStaticFields(type?: Type): any;
    initSelfReferences(replacement?: Type): Type;
    specialize(...rest: (Type | number | Function)[]): Type;
    equals(other: Type): boolean;
    static checkEquals(type1: any, type2: any): boolean;
    static op_Equality(type1: Type, type2: Type): boolean;
    static op_Inequality(type1: Type, type2: Type): boolean;
    generateString(): string;
    readonly isValueType: boolean;
    isAssignableFrom(tOther: Type): boolean;
    isInstanceOfType(value: Type | string): boolean;
    readonly isPrimitive: boolean;
    static canAssign(targetType: Type, type: Type): boolean;
    static canAssignSimple(targetType: Type, type: Type): boolean;
    static createInstance<T>($t: Type | Function): T;
    static getDefaultValue<T>($t: Type): T;
    static getPrimitiveHashCode(v: any): number;
    private static decodePropType;
    static dep(depProp: Function, PropMeta: Function, t: Function, changedFunction: string, props: any[]): void;
}
export declare function typeGetValue(v: any): any;
export declare function typeCast<T>(targetType: Type | Function, obj: any): T;
export declare function typeCastObjTo$t<T>($t: Type, v: any): any;
export declare function markStruct(t: Function, name: string, baseType?: Type, interfaces?: Type[], staticInitializer?: () => void): any;
export interface EnumInfo {
    names: string[];
    actualNames: string[];
    namesValuesMap: {
        [index: string]: number;
    };
    actualNamesValuesMap: {
        [index: string]: number;
    };
}
export declare function markEnum(name: string, encodedDef: string): Type;
export declare function markType(t: Function, name: string, baseType?: Type, interfaces?: Type[], staticInitializer?: () => void): Type;
export declare function callStaticConstructors(): void;
export interface IConvertible {
    toBoolean(provider: IFormatProvider): boolean;
    toByte(provider: IFormatProvider): number;
    toChar(provider: IFormatProvider): string;
    toDateTime(provider: IFormatProvider): Date;
    toDecimal(provider: IFormatProvider): number;
    toDouble(provider: IFormatProvider): number;
    toInt16(provider: IFormatProvider): number;
    toInt32(provider: IFormatProvider): number;
    toInt64(provider: IFormatProvider): number;
    toSByte(provider: IFormatProvider): number;
    toSingle(provider: IFormatProvider): number;
    toString1(provider: IFormatProvider): string;
    toUInt16(provider: IFormatProvider): number;
    toUInt32(provider: IFormatProvider): number;
    toUInt64(provider: IFormatProvider): number;
}
export declare let IConvertible_$type: Type;
export declare class Enum extends Base {
    static $t: Type;
}
export declare function getBoxIfEnum<T>($t: Type, v: any): any;
export declare function enumGetBox<T>($t: Type, v: number): T;
export declare class EnumUtil {
    private static getValueFromName;
    static parse(enumType: Type, value: string, ignoreCase: boolean): {};
    static enumHasFlag(value: number, flag: number): boolean;
    static toString(enumType: Type, value: any): string;
    static getName<T>(enumType: Type, v: number): string;
    static getFlaggedName(enumType: Type, v: number, getName: (v: number) => string): string;
    static getValues<T>($t: Type): number[];
    static getNames<T>($t: Type): string[];
    static getEnumValue<T>($t: Type, v: any): T;
    static isDefined<T>($t: Type, value: T): boolean;
    static toDouble(enumType: Type, value: any, provider: any): number;
    static toObject<T>($t: Type, value: T): any;
    static tryParse$1<TEnum>($tEnum: Type, value: string, ignoreCase: boolean, result: TEnum): {
        ret: boolean;
        p2: TEnum;
    };
}
export declare class ValueType extends Base {
    static $t: Type;
}
export declare class Nullable extends Base {
    static getUnderlyingType(nullableType: Type): Type;
    static $t: Type;
}
export declare class Nullable$1<T> extends Base {
    protected $t: Type;
    private _value;
    constructor($t: Type, value: T);
    static nullableEquals(v1: any, v2: any): boolean;
    equals(value: Nullable$1<T>): boolean;
    getHashCode(): number;
    readonly hasValue: boolean;
    toString(): string;
    value: T;
    getValueOrDefault(): T;
    getDefaultValue(): T;
    getValueOrDefault1(defaultValue: T): T;
    preIncrement(): Nullable$1<T>;
    preDecrement(): Nullable$1<T>;
    postIncrement(): Nullable$1<T>;
    postDecrement(): Nullable$1<T>;
    readonly isNullable = true;
    static toNullable<T>(t: Type, value: T | Nullable$1<T>): Nullable$1<T>;
    static $t: Type;
}
export interface IComparable {
    compareToObject(other: object): number;
}
export declare let IComparable_$type: Type;
export interface IComparable$1<T> {
    compareTo(other: T): number;
}
export declare let IComparable$1_$type: Type;
export interface IEquatable$1<T> {
    equals(other: T): boolean;
}
export declare let IEquatable$1_$type: Type;
export interface INotifyPropertyChanged {
    propertyChanged: (sender: object, args: PropertyChangedEventArgs) => void;
}
export declare let INotifyPropertyChanged_$type: Type;
export declare class PropertyChangedEventArgs extends Base {
    constructor(propertyName: string);
    private _propertyName;
    propertyName: string;
    static $t: Type;
}
export declare class IteratorWrapper<T> implements IEnumerator$1<T> {
    private _inner;
    private _getNew;
    constructor(inner: Iterator<T>, getNew: () => Iterator<T>);
    private _hasNext;
    private _current;
    moveNext(): boolean;
    readonly current: T;
    readonly currentObject: T;
    dispose(): void;
    reset(): void;
}
export declare class IterableWrapper<T> implements IEnumerable$1<T>, IEnumerable {
    private _inner;
    constructor(inner: () => Iterable<T>);
    getEnumerator(): IEnumerator$1<T>;
    getEnumeratorObject(): IEnumerator;
}
export declare class EnumeratorWrapper<T> implements Iterator<T> {
    private _inner;
    constructor(inner: IEnumerator$1<T>);
    next(): IteratorResult<T>;
}
export declare class EnumeratorWrapperObject<T> implements Iterator<T> {
    private _inner;
    constructor(inner: IEnumerator);
    next(): IteratorResult<T>;
}
export declare function getEn(arr: any[]): IterableIterator<any>;
export declare function getEnumeratorObject(en: any): IEnumerator;
export declare function getEnumerator(en: any): IEnumerator$1<any>;
export declare class EnumerableWrapper<T> implements Iterable<T> {
    private _inner;
    constructor(inner: IEnumerable$1<T>);
    [Symbol.iterator](): EnumeratorWrapper<T>;
}
export declare class EnumerableWrapperObject implements Iterable<any> {
    private _inner;
    constructor(inner: IEnumerable);
    [Symbol.iterator](): EnumeratorWrapperObject<any>;
}
export declare function toEnum<T>(v: () => Iterable<T>): IEnumerable$1<T>;
export declare function fromEnum<T>(v: IEnumerable$1<T>): Iterable<T>;
export declare function toEn(v: () => Iterable<any>): IEnumerable;
export declare function fromEn<T>(v: IEnumerable): Iterable<T>;
export declare function fromDict<T>(v: Map<string, any>): Iterable<{
    key: string;
    value: any;
}>;
export declare let Number_$type: Type;
export declare let String_$type: Type;
export declare let Date_$type: Type;
export declare let Boolean_$type: Type;
export declare let Void_$type: Type;
export declare let n$: Type;
export declare let s$: Type;
export declare let d$: Type;
export declare let b$: Type;
export declare let v$: Type;
export interface Delegate extends Function {
    enumerate?(arr: any[]): void;
    original?: any;
    target?: any;
}
export declare let Delegate_$type: Type;
export declare function runOn<T>(target: any, func: T): T;
export declare function delegateCombine<T extends Delegate>(del1: T, del2: T): T;
export declare function delegateRemove<T extends Delegate>(del1: T, del2: T): T;
export interface IDisposable {
    dispose(): void;
}
export declare let IDisposable_$type: Type;
export interface IEnumerable {
    getEnumeratorObject(): IEnumerator;
}
export declare let IEnumerable_$type: Type;
export interface IEnumerator {
    currentObject: any;
    moveNext(): boolean;
    reset(): void;
}
export declare let IEnumerator_$type: Type;
export interface IEqualityComparer$1<T> {
    equalsC(x: T, y: T): boolean;
    getHashCodeC(obj: T): number;
}
export declare let IEqualityComparer$1_$type: Type;
export interface IEqualityComparer {
    equals(x: any, y: any): boolean;
    getHashCode(obj: any): number;
}
export declare let IEqualityComparer_$type: Type;
export interface ICollection extends IEnumerable {
    readonly count: number;
    copyTo(array: any[], index: number): void;
    readonly isSynchronized: boolean;
    readonly syncRoot: any;
}
export declare let ICollection_$type: Type;
export interface IList extends ICollection {
    readonly isFixedSize: boolean;
    readonly isReadOnly: boolean;
    isSynchronized: boolean;
    item(index: number, value?: any): any;
    add(item: any): void;
    clear(): void;
    contains(item: any): boolean;
    indexOf(item: any): number;
    insert(index: number, item: any): void;
    remove(item: any): boolean;
    removeAt(index: number): void;
}
export declare let IList_$type: Type;
export interface IEnumerable$1<T> extends IEnumerable {
    getEnumerator(): IEnumerator$1<T>;
}
export declare let IEnumerable$1_$type: Type;
export interface ICollection$1<T> extends IEnumerable$1<T>, IEnumerable {
    readonly count: number;
    readonly isReadOnly: boolean;
    add(item: T): void;
    clear(): void;
    contains(item: T): boolean;
    copyTo(array: T[], arrayIndex: number): void;
    remove(item: T): boolean;
}
export declare let ICollection$1_$type: Type;
export interface IList$1<T> extends ICollection$1<T>, IEnumerable$1<T>, IEnumerable {
    item(index: number, value?: T): T;
    indexOf(item: T): number;
    insert(index: number, item: T): void;
    removeAt(index: number): void;
}
export declare let IList$1_$type: Type;
export interface IEnumerator$1<T> extends IEnumerator, IDisposable {
    current: T;
    moveNext(): boolean;
    reset(): void;
}
export declare let IEnumerator$1_$type: Type;
export interface IDictionary {
}
export declare let IDictionary_$type: Type;
export declare class BaseError extends Base {
    static $t: Type;
    constructor(initNumber?: number, ...rest: any[]);
    protected get_message(): string;
    readonly message: string;
    readonly innerException: any;
    private _message;
    private _innerException;
    init1(initNumber: number, message: string): void;
    init2(initNumber: number, message: string, innerException: any): void;
    toString(): string;
}
export declare class SystemException extends BaseError {
    constructor(initNumber: number, ...rest: any[]);
    init1(initNumber: number, message: string): void;
    init2(initNumber: number, message: string, innerException: any): void;
    static $t: Type;
}
export declare class NotSupportedException extends SystemException {
    constructor(initNumber: number, ...rest: any[]);
    init1(initNumber: number, message: string): void;
    init2(initNumber: number, message: string, innerException: any): void;
    static $t: Type;
}
export declare class FormatException extends SystemException {
    constructor(initNumber: number, ...rest: any[]);
    init1(initNumber: number, message: string): void;
    init2(initNumber: number, message: string, innerException: any): void;
    static $t: Type;
}
export declare class PointUtil {
    static equals(p1: Point, p2: Point): boolean;
    static notEquals(p1: Point, p2: Point): boolean;
    static create(): {
        x: number;
        y: number;
        $type: Type;
    };
    static createXY(x: number, y: number): {
        x: number;
        y: number;
        $type: Type;
    };
}
export interface Point {
    x: number;
    y: number;
}
export declare let Point_$type: Type;
export declare enum SeekOrigin {
    Begin = 0,
    Current = 1,
    End = 2
}
export declare abstract class Stream extends Base {
    close(): void;
    dispose(): void;
    protected disposeCore(disposing: boolean): void;
    abstract flush(): void;
    readByte(): number;
    writeByte(value: number): void;
    abstract read(bytes: number[], offset: number, count: number): number;
    abstract seek(offset: number, origin: SeekOrigin): number;
    abstract setLength(value: number): void;
    abstract write(buffer: number[], offset: number, count: number): void;
    abstract readonly canRead: boolean;
    abstract readonly canSeek: boolean;
    abstract readonly canWrite: boolean;
    abstract readonly length: number;
    abstract position: number;
    static $t: Type;
}
export declare class EventArgs extends Base {
    private static _empty;
    static readonly empty: EventArgs;
    static $t: Type;
}
export interface IFormatProvider {
    getFormat(formatType: Type): any;
}
export declare let IFormatProvider_$type: Type;
export declare let Array_$type: Type;
export declare let a$: Type;
export declare class TypeRegistrar {
    static _registrar: Map<string, Function>;
    static create(typeName: string, ...rest: any[]): any;
    static register(typeName: string, type: Type): void;
    static registerCons(typeName: string, type: Function): void;
    static callRegister(typeName: string): void;
    static isRegistered(typeName: string): boolean;
    static get(typeName: string): any;
    static createFromInternal(internal: any, prefix: string, postfix: string): any;
}
