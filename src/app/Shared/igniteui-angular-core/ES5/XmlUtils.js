/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
/**
 * @hidden
 */
var XmlUtils = /** @class */ (function (_super) {
    tslib_1.__extends(XmlUtils, _super);
    function XmlUtils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XmlUtils.a = function () {
        return (!!window.DOMParser);
    };
    XmlUtils.m = function (a) {
        var text_ = a;
        return ((new DOMParser()).parseFromString(text_, 'text/xml'));
    };
    XmlUtils.l = function (a) {
        var text_ = a;
        return ((function (xml) {
            var xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
            xmlDoc.async = false;
            xmlDoc.loadXML(xml);
            return xmlDoc;
        })(text_));
    };
    XmlUtils.f = function (a) {
        var node_ = a;
        return ((new XMLSerializer()).serializeToString(node_));
    };
    XmlUtils.e = function (a) {
        var node_ = a;
        return (node_.xml);
    };
    XmlUtils.k = function () {
        return (new ActiveXObject('Microsoft.XMLDOM'));
    };
    XmlUtils.n = function (a) {
        if (XmlUtils.a()) {
            return XmlUtils.m(a);
        }
        else {
            return XmlUtils.l(a);
        }
    };
    XmlUtils.xmlNodeToString = function (a) {
        if (XmlUtils.a()) {
            return XmlUtils.f(a);
        }
        else {
            return XmlUtils.e(a);
        }
    };
    XmlUtils.j = function () {
        var a;
        if (XmlUtils.a()) {
            a = XmlUtils.m("<dummy/>");
            a.removeChild(a.documentElement);
        }
        else {
            a = XmlUtils.k();
        }
        return a;
    };
    XmlUtils.o = function (a, b) {
        var doc_ = XmlUtils.j();
        if (XmlUtils.a()) {
            return doc_.createElementNS(b, a);
        }
        else {
            var name_ = a;
            var namespaceURI_ = b;
            return (doc_.createNode(1 /*NODE_ELEMENT*/, name_, namespaceURI_));
        }
    };
    XmlUtils.c = function (a) {
        if (XmlUtils.a()) {
            return a.textContent;
        }
        else {
            var node_ = a;
            return (node_.text);
        }
    };
    XmlUtils.h = function (a, b) {
        if (XmlUtils.a()) {
            a.textContent = b;
        }
        else {
            var node_ = a;
            var text_ = b;
            node_.text = text_;
        }
    };
    XmlUtils.p = function (a, b) {
        if (XmlUtils.a()) {
            return a.importNode(b, true);
        }
        else {
            return b;
        }
    };
    XmlUtils.d = function (a) {
        if (XmlUtils.a()) {
            return a.localName;
        }
        else {
            var node_ = a;
            return (node_.baseName);
        }
    };
    XmlUtils.i = function (a, b, c) {
        if (XmlUtils.a()) {
            return a.getAttributeNodeNS(c, b);
        }
        else {
            var elem_ = a;
            var ln_ = b;
            var nn_ = c;
            return (elem_.attributes.getQualifiedItem(ln_, nn_));
        }
    };
    XmlUtils.b = function (a) {
        if (XmlUtils.a()) {
            return a.nodeValue;
        }
        else {
            var attr_ = a;
            return (attr_.value);
        }
    };
    XmlUtils.$t = markType(XmlUtils, 'XmlUtils');
    return XmlUtils;
}(Base));
export { XmlUtils };
//# sourceMappingURL=XmlUtils.js.map