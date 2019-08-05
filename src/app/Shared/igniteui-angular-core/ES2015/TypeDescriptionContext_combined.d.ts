import { Base, Type } from "./type";
import { TypeDescriptionPlatform } from "./TypeDescriptionPlatform";
import { Dictionary$2 } from "./Dictionary$2";
import { TypeDescriptionMetadata } from "./TypeDescriptionMetadata";
import { Description } from "./Description";
/**
 * @hidden
 */
export declare class TypeDescriptionContext extends Base {
    static $t: Type;
    constructor(a: IComponentRendererAdapter, b: TypeDescriptionPlatform);
    private e;
    private d;
    private a;
    private c;
    m(a: string, b: Dictionary$2<string, string>): void;
    n(a: string, b: () => any): void;
    static l(key_: string): string;
    static k(key_: string): string;
    b(a: string, b: string): TypeDescriptionMetadata;
    i(a: string): any;
    o(a: Description, b: string, c: any): void;
    h(a: any[]): any;
    g(a: any[]): any;
    j(a: string, b: any): any;
    f(a: string, b: string): any;
}
/**
 * @hidden
 */
export interface IComponentRendererAdapter {
    createObject(a: string, b: any, c: TypeDescriptionContext): any;
    createColorCollection(a: any[]): any;
    createBrushCollection(a: any[]): any;
    coerceToEnum(a: string, b: TypeDescriptionContext, c: string): any;
    onUIThread(a: any, b: () => void): void;
    setOrUpdateCollectionOnTarget(a: any, b: string, c: TypeDescriptionMetadata, d: TypeDescriptionContext, e: any, f: any): void;
    setPropertyValue(a: any, b: string, c: any, d: any): void;
    getPropertyValue(a: any, b: string): any;
    clearContainer(a: any, b: TypeDescriptionContext, c: (arg1: boolean) => void): void;
    getRootObject(a: any): any;
    clearCollection(a: any, b: string, c: TypeDescriptionMetadata): void;
    addItemToCollection(a: string, b: TypeDescriptionMetadata, c: any, d: number, e: any): void;
    resetPropertyOnTarget(a: any, b: string, c: TypeDescriptionMetadata, d: any): void;
    replaceItemInCollection(a: string, b: TypeDescriptionMetadata, c: any, d: number, e: any): void;
    removeItemFromCollection(a: string, b: TypeDescriptionMetadata, c: any, d: number): void;
    replaceRootItem(a: any, b: string, c: TypeDescriptionContext, d: (arg1: boolean) => void): void;
    removeRootItem(a: any, b: TypeDescriptionContext, c: (arg1: boolean) => void): void;
    flushChanges(a: any): void;
}
/**
 * @hidden
 */
export declare let IComponentRendererAdapter_$type: Type;