import { XObject } from "./XObject";
import { XmlNodeType, XmlAttribute, XmlElement } from "./xml";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class XAttribute extends XObject {
    static $t: Type;
    constructor(a: XmlAttribute);
    e(a: XmlElement): void;
    protected get_nodeType(): XmlNodeType;
    readonly nodeType: XmlNodeType;
    readonly value: string;
}