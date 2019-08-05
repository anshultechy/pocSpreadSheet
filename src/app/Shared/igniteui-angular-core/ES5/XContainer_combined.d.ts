import { XNode } from "./XNode";
import { XmlNode, XmlElement, XmlDocument, XmlNodeType } from "./xml";
import { XName } from "./XName";
import { IEnumerable$1, Type } from "./type";
import { XAttribute } from "./XAttribute";
/**
 * @hidden
 */
export declare abstract class XContainer extends XNode {
    static $t: Type;
    constructor(a: XmlNode);
    element(a: XName): XElement;
    elements(): IEnumerable$1<XElement>;
    elements1(a: XName): IEnumerable$1<XElement>;
    private f;
    add(a: any): void;
}
/**
 * @hidden
 */
export declare class XDocument extends XContainer {
    static $t: Type;
    constructor(a: number, b: XmlDocument);
    constructor(a: number);
    constructor(a: number, ..._rest: any[]);
    protected get_nodeType(): XmlNodeType;
    readonly nodeType: XmlNodeType;
    static parse(a: string): XDocument;
}
/**
 * @hidden
 */
export declare class XElement extends XContainer {
    static $t: Type;
    constructor(a: number, b: XmlElement);
    constructor(a: number, b: XName);
    constructor(a: number, b: XName, c: any);
    constructor(a: number, ..._rest: any[]);
    value: string;
    protected get_nodeType(): XmlNodeType;
    readonly nodeType: XmlNodeType;
    readonly name: XName;
    attribute(a: XName): XAttribute;
    j(a: XmlNode, b: XmlDocument): void;
}