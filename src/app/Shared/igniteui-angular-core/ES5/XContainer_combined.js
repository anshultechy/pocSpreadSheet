/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { XNode } from "./XNode";
import { XName } from "./XName";
import { XmlUtils } from "./XmlUtils";
import { typeCast, markType } from "./type";
import { List$1 } from "./List$1";
import { XAttribute } from "./XAttribute";
/**
 * @hidden
 */
var XContainer = /** @class */ (function (_super) {
    tslib_1.__extends(XContainer, _super);
    function XContainer(a) {
        return _super.call(this, a) || this;
    }
    XContainer.prototype.element = function (a) {
        var b = null;
        var c = this.backingNode;
        var d = c.childNodes;
        var e = d.length;
        var f = a.localName;
        var g = a.namespaceName;
        for (var h = 0; h < e; h++) {
            var i = d.item(h);
            if (i.namespaceURI == g && i.nodeType == 1 && XmlUtils.d(i) == f) {
                b = i;
            }
        }
        if (b == null) {
            return null;
        }
        else {
            return new XElement(0, b);
        }
    };
    XContainer.prototype.elements = function () {
        return this.f(null);
    };
    XContainer.prototype.elements1 = function (a) {
        return this.f(a);
    };
    XContainer.prototype.f = function (a) {
        var b = new List$1(XElement.$, 0);
        for (var c = 0; c < this.backingNode.childNodes.length; c++) {
            var d = this.backingNode.childNodes.item(c);
            if (d.nodeType == 1) {
                var e = false;
                if (a != null) {
                    if (XmlUtils.d(d) == a.localName && d.namespaceURI == a.namespaceName) {
                        e = true;
                    }
                }
                else {
                    e = true;
                }
                if (e) {
                    b.add(new XElement(0, d));
                }
            }
        }
        return b;
    };
    XContainer.prototype.add = function (a) {
        var b = this.backingNode;
        var c;
        if (typeCast(XDocument.$, this) !== null) {
            c = this.backingNode;
        }
        else {
            c = this.backingNode.ownerDocument;
        }
        if (typeCast(XAttribute.$, a) !== null) {
            a.e(b);
        }
        else if (typeCast(XElement.$, a) !== null) {
            a.j(b, c);
        }
    };
    XContainer.$t = markType(XContainer, 'XContainer', XNode.$);
    return XContainer;
}(XNode));
export { XContainer };
/**
 * @hidden
 */
var XDocument = /** @class */ (function (_super) {
    tslib_1.__extends(XDocument, _super);
    function XDocument(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    _this = _super.call(this, c) || this;
                }
                break;
            case 1:
                {
                    _this = _super.call(this, XmlUtils.j()) || this;
                }
                break;
        }
        return _this;
    }
    XDocument.prototype.get_nodeType = function () {
        return 9;
    };
    Object.defineProperty(XDocument.prototype, "nodeType", {
        get: function () {
            return this.get_nodeType();
        },
        enumerable: true,
        configurable: true
    });
    XDocument.parse = function (a) {
        return new XDocument(0, XmlUtils.n(a));
    };
    XDocument.$t = markType(XDocument, 'XDocument', XContainer.$);
    return XDocument;
}(XContainer));
export { XDocument };
/**
 * @hidden
 */
var XElement = /** @class */ (function (_super) {
    tslib_1.__extends(XElement, _super);
    function XElement(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    _this = _super.call(this, c) || this;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = [c, null];
                    {
                        var f = d[0];
                        var g = d[1];
                        _this = _super.call(this, XmlUtils.o(f.localName, f.namespaceName)) || this;
                        var h = g == null ? "" : g.toString();
                        _this.value = h;
                    }
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this = _super.call(this, XmlUtils.o(c.localName, c.namespaceName)) || this;
                    var e = d == null ? "" : d.toString();
                    _this.value = e;
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(XElement.prototype, "value", {
        get: function () {
            return XmlUtils.c(this.backingNode);
        },
        set: function (a) {
            XmlUtils.h(this.backingNode, a);
        },
        enumerable: true,
        configurable: true
    });
    XElement.prototype.get_nodeType = function () {
        return 1;
    };
    Object.defineProperty(XElement.prototype, "nodeType", {
        get: function () {
            return this.get_nodeType();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XElement.prototype, "name", {
        get: function () {
            return XName.get(XmlUtils.d(this.backingNode), this.backingNode.namespaceURI);
        },
        enumerable: true,
        configurable: true
    });
    XElement.prototype.attribute = function (a) {
        return new XAttribute(XmlUtils.i(this.backingNode, a.localName, a.namespaceName));
    };
    XElement.prototype.j = function (a, b) {
        if (this.backingNode.ownerDocument != b) {
            this.backingNode = XmlUtils.p(b, this.backingNode);
        }
        a.appendChild(this.backingNode);
    };
    XElement.$t = markType(XElement, 'XElement', XContainer.$);
    return XElement;
}(XContainer));
export { XElement };
//# sourceMappingURL=XContainer_combined.js.map