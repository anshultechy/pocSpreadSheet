/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Type, markEnum } from "./type";
export let XmlDocument_$type = new Type(null, 'XmlDocument');
export let XmlElement_$type = new Type(null, 'XmlElement');
export let XmlNode_$type = new Type(null, 'XmlNode');
export let XmlAttribute_$type = new Type(null, 'XmlAttribute');
export let XmlLinkedNode_$type = new Type(null, 'XmlLinkedNode');
export let XmlNodeList_$type = new Type(null, 'XmlNodeList');
export let XmlNamedNodeMap_$type = new Type(null, 'XmlNamedNodeMap');
export var XmlNodeType;
(function (XmlNodeType) {
    XmlNodeType[XmlNodeType["None"] = 0] = "None";
    XmlNodeType[XmlNodeType["Element"] = 1] = "Element";
    XmlNodeType[XmlNodeType["Attribute"] = 2] = "Attribute";
    XmlNodeType[XmlNodeType["Text"] = 3] = "Text";
    XmlNodeType[XmlNodeType["CDATA"] = 4] = "CDATA";
    XmlNodeType[XmlNodeType["EntityReference"] = 5] = "EntityReference";
    XmlNodeType[XmlNodeType["Entity"] = 6] = "Entity";
    XmlNodeType[XmlNodeType["ProcessingInstruction"] = 7] = "ProcessingInstruction";
    XmlNodeType[XmlNodeType["Comment"] = 8] = "Comment";
    XmlNodeType[XmlNodeType["Document"] = 9] = "Document";
    XmlNodeType[XmlNodeType["DocumentType"] = 10] = "DocumentType";
    XmlNodeType[XmlNodeType["DocumentFragment"] = 11] = "DocumentFragment";
    XmlNodeType[XmlNodeType["Notation"] = 12] = "Notation";
    XmlNodeType[XmlNodeType["Whitespace"] = 13] = "Whitespace";
    XmlNodeType[XmlNodeType["SignificantWhitespace"] = 14] = "SignificantWhitespace";
    XmlNodeType[XmlNodeType["EndElement"] = 15] = "EndElement";
    XmlNodeType[XmlNodeType["EndEntity"] = 16] = "EndEntity";
    XmlNodeType[XmlNodeType["XmlDeclaration"] = 17] = "XmlDeclaration";
})(XmlNodeType || (XmlNodeType = {}));
export let XmlNodeType_$type = markEnum("XmlNodeType", "Node,0;Element,1;Attribute,2;Text,3;CData,4;EntityReference,5;Entity,6;ProcessingInstruction,7;Comment,8;Document,9;DocumentType,10;DocumentFragment,11;Notation,12;Whitespace,13;SignificantWhitespace,14;EndElement,15;EndEntity,16;XmlDeclaration,17");
//# sourceMappingURL=xml.js.map