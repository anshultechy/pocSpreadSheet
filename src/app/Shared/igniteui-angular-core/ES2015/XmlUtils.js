/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
/**
 * @hidden
 */
export class XmlUtils extends Base {
    static a() {
        return (!!window.DOMParser);
    }
    static m(a) {
        let text_ = a;
        return ((new DOMParser()).parseFromString(text_, 'text/xml'));
    }
    static l(a) {
        let text_ = a;
        return ((function (xml) {
            var xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
            xmlDoc.async = false;
            xmlDoc.loadXML(xml);
            return xmlDoc;
        })(text_));
    }
    static f(a) {
        let node_ = a;
        return ((new XMLSerializer()).serializeToString(node_));
    }
    static e(a) {
        let node_ = a;
        return (node_.xml);
    }
    static k() {
        return (new ActiveXObject('Microsoft.XMLDOM'));
    }
    static n(a) {
        if (XmlUtils.a()) {
            return XmlUtils.m(a);
        }
        else {
            return XmlUtils.l(a);
        }
    }
    static xmlNodeToString(a) {
        if (XmlUtils.a()) {
            return XmlUtils.f(a);
        }
        else {
            return XmlUtils.e(a);
        }
    }
    static j() {
        let a;
        if (XmlUtils.a()) {
            a = XmlUtils.m("<dummy/>");
            a.removeChild(a.documentElement);
        }
        else {
            a = XmlUtils.k();
        }
        return a;
    }
    static o(a, b) {
        let doc_ = XmlUtils.j();
        if (XmlUtils.a()) {
            return doc_.createElementNS(b, a);
        }
        else {
            let name_ = a;
            let namespaceURI_ = b;
            return (doc_.createNode(1 /*NODE_ELEMENT*/, name_, namespaceURI_));
        }
    }
    static c(a) {
        if (XmlUtils.a()) {
            return a.textContent;
        }
        else {
            let node_ = a;
            return (node_.text);
        }
    }
    static h(a, b) {
        if (XmlUtils.a()) {
            a.textContent = b;
        }
        else {
            let node_ = a;
            let text_ = b;
            node_.text = text_;
        }
    }
    static p(a, b) {
        if (XmlUtils.a()) {
            return a.importNode(b, true);
        }
        else {
            return b;
        }
    }
    static d(a) {
        if (XmlUtils.a()) {
            return a.localName;
        }
        else {
            let node_ = a;
            return (node_.baseName);
        }
    }
    static i(a, b, c) {
        if (XmlUtils.a()) {
            return a.getAttributeNodeNS(c, b);
        }
        else {
            let elem_ = a;
            let ln_ = b;
            let nn_ = c;
            return (elem_.attributes.getQualifiedItem(ln_, nn_));
        }
    }
    static b(a) {
        if (XmlUtils.a()) {
            return a.nodeValue;
        }
        else {
            let attr_ = a;
            return (attr_.value);
        }
    }
}
XmlUtils.$t = markType(XmlUtils, 'XmlUtils');
//# sourceMappingURL=XmlUtils.js.map