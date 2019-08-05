/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { XNode } from "./XNode";
import { XName } from "./XName";
import { XmlUtils } from "./XmlUtils";
import { typeCast, markType } from "./type";
import { List$1 } from "./List$1";
import { XAttribute } from "./XAttribute";
/**
 * @hidden
 */
export class XContainer extends XNode {
    constructor(a) {
        super(a);
    }
    element(a) {
        let b = null;
        let c = this.backingNode;
        let d = c.childNodes;
        let e = d.length;
        let f = a.localName;
        let g = a.namespaceName;
        for (let h = 0; h < e; h++) {
            let i = d.item(h);
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
    }
    elements() {
        return this.f(null);
    }
    elements1(a) {
        return this.f(a);
    }
    f(a) {
        let b = new List$1(XElement.$, 0);
        for (let c = 0; c < this.backingNode.childNodes.length; c++) {
            let d = this.backingNode.childNodes.item(c);
            if (d.nodeType == 1) {
                let e = false;
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
    }
    add(a) {
        let b = this.backingNode;
        let c;
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
    }
}
XContainer.$t = markType(XContainer, 'XContainer', XNode.$);
/**
 * @hidden
 */
export class XDocument extends XContainer {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    super(c);
                }
                break;
            case 1:
                {
                    super(XmlUtils.j());
                }
                break;
        }
    }
    get_nodeType() {
        return 9;
    }
    get nodeType() {
        return this.get_nodeType();
    }
    static parse(a) {
        return new XDocument(0, XmlUtils.n(a));
    }
}
XDocument.$t = markType(XDocument, 'XDocument', XContainer.$);
/**
 * @hidden
 */
export class XElement extends XContainer {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    super(c);
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = [c, null];
                    {
                        let f = d[0];
                        let g = d[1];
                        super(XmlUtils.o(f.localName, f.namespaceName));
                        let h = g == null ? "" : g.toString();
                        this.value = h;
                    }
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    super(XmlUtils.o(c.localName, c.namespaceName));
                    let e = d == null ? "" : d.toString();
                    this.value = e;
                }
                break;
        }
    }
    get value() {
        return XmlUtils.c(this.backingNode);
    }
    set value(a) {
        XmlUtils.h(this.backingNode, a);
    }
    get_nodeType() {
        return 1;
    }
    get nodeType() {
        return this.get_nodeType();
    }
    get name() {
        return XName.get(XmlUtils.d(this.backingNode), this.backingNode.namespaceURI);
    }
    attribute(a) {
        return new XAttribute(XmlUtils.i(this.backingNode, a.localName, a.namespaceName));
    }
    j(a, b) {
        if (this.backingNode.ownerDocument != b) {
            this.backingNode = XmlUtils.p(b, this.backingNode);
        }
        a.appendChild(this.backingNode);
    }
}
XElement.$t = markType(XElement, 'XElement', XContainer.$);
//# sourceMappingURL=XContainer_combined.js.map