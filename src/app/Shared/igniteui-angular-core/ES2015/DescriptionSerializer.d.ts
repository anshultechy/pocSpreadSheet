import { Base, Type } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Description } from "./Description";
import { DescriptionTreeNode } from "./DescriptionTreeNode";
import { DescriptionSerializerBuilder } from "./DescriptionSerializerBuilder";
import { DescriptionResult } from "./DescriptionResult";
import { JsonDictionaryItem } from "./JsonDictionaryItem";
/**
 * @hidden
 */
export declare class DescriptionSerializer extends Base {
    static $t: Type;
    constructor();
    h(a: TypeDescriptionContext, b: Description): string;
    l(a: TypeDescriptionContext, b: DescriptionTreeNode, c: DescriptionSerializerBuilder): void;
    c(a: TypeDescriptionContext, b: string): DescriptionResult;
    private e;
    d(a: TypeDescriptionContext, b: JsonDictionaryItem, c: boolean): DescriptionResult;
    private b;
    private a;
    private f;
    private i;
    private g;
    private j;
    private m;
    private k;
}
