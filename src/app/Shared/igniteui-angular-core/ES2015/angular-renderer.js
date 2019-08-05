/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { NgZone } from '@angular/core';
import { List$1 } from "./List$1";
import { String_$type } from './type';
import { CssHelper } from './CssHelper';
export class AngularRenderer {
    constructor(container, renderer, document, ngZone, useDefaultsSource, defaultsSource) {
        this.container = container;
        this._useRenderer = false;
        this._useDefaultsSource = false;
        this._checkResized = null;
        this._resizeTicking = false;
        this._discStack = [];
        this._toUnbind = [];
        this._currentFontQuery = null;
        this._renderer = renderer;
        this._document = document;
        this._ngZone = ngZone;
        this._container = container;
        this._rootElement = container;
        this._rootWrapper = new AngularWrapper(this._rootElement, this._renderer, this._ngZone);
        this._cssHelper = new AngularCssHelper(this._renderer, this._document);
        this._useDefaultsSource = useDefaultsSource;
        this._defaultsSource = defaultsSource;
    }
    addSizeWatcher(onResized) {
        let previousWidth = this._rootElement.offsetWidth;
        let previousHeight = this._rootElement.offsetHeight;
        if (this._checkResized == null) {
            this._checkResized = () => {
                let currWidth = this._rootElement.offsetWidth;
                let currHeight = this._rootElement.offsetHeight;
                let changed = false;
                if (previousWidth != currWidth ||
                    previousHeight != currHeight) {
                    changed = true;
                }
                previousWidth = currWidth;
                previousHeight = currHeight;
                if (changed) {
                    onResized();
                }
            };
        }
        this._resizeListener = this.globalListen("window", "resize", (ev) => this._checkResized());
        let self = this;
        this._resizeTicking = true;
        function resizeTick() {
            if (self._resizeTicking) {
                self._checkResized();
                self.setTimeout(resizeTick, 100);
            }
        }
        this.setTimeout(resizeTick, 100);
    }
    destroy() {
        for (let i = 0; i < this._toUnbind.length; i++) {
            this._toUnbind[i]();
        }
        this._toUnbind = [];
        this.removeSizeWatcher();
        this._rootWrapper.destroy();
        this._rootWrapper = null;
        this._rootElement = null;
    }
    removeSizeWatcher() {
        this._resizeTicking = false;
        if (this._resizeListener != null) {
            this._resizeListener();
            this._resizeListener = null;
        }
    }
    withRenderer(act) {
        //if (NgZone.isInAngularZone()) {
        act(this._renderer);
        //    return;
        //} else {
        //    this._ngZone.run(() => {
        //        act(this._renderer);
        //    });
        //}
    }
    supportsAnimation() {
        return true;
    }
    getRequestAnimationFrame() {
        let ret = (act) => {
            this._ngZone.runOutsideAngular(() => {
                requestAnimationFrame(act);
            });
        };
        return ret;
    }
    setTimeout(act, millisecondsDelay) {
        let val;
        this._ngZone.runOutsideAngular(() => {
            val = window.setTimeout(act, millisecondsDelay);
        });
        return val;
    }
    clearTimeout(timerId) {
        this._ngZone.runOutsideAngular(() => {
            window.clearTimeout(timerId);
        });
    }
    get rootWrapper() {
        return this._rootWrapper;
    }
    querySelector(selector) {
        let wrapper = null;
        this.withRenderer((ren) => {
            let ele = this.rootWrapper.getNativeElement().querySelector(selector);
            wrapper = new AngularWrapper(ele, ren, this._ngZone);
        });
        return wrapper;
    }
    getWrapper(ele) {
        let wrapper = null;
        this.withRenderer((ren) => {
            wrapper = new AngularWrapper(ele, ren, this._ngZone);
        });
        return wrapper;
    }
    getResourceString(resourceId) {
        //TODO: fix this;
        return "";
    }
    append(child) {
        this._rootWrapper.append(child);
        return this;
    }
    appendToBody(element) {
        if (this._document !== null && this._document.body !== null) {
            this._document.body.appendChild(element.getNativeElement());
        }
    }
    runInMainZone(action) {
        if (NgZone.isInAngularZone()) {
            action();
            return;
        }
        else {
            this._ngZone.run(() => {
                action();
            });
        }
    }
    createElement(elementName) {
        let ele;
        this.withRenderer((ren) => {
            ele = ren.createElement(elementName);
        });
        let wrap = new AngularWrapper(ele, this._renderer, this._ngZone);
        return wrap;
    }
    endCSSQuery() {
        this._currentFontQuery = null;
        if (!this.hasBody()) {
            return;
        }
        if (this._discStack.length > 0) {
            var toRemove = this._discStack.pop();
            let parent = toRemove.getNativeElement().parentElement;
            if (parent) {
                parent.removeChild(toRemove.getNativeElement());
            }
            //toRemove.remove();
        }
    }
    expandTemplate(template, args) {
        throw new Error("not implemented");
    }
    get2DCanvasContext(canvas) {
        let context = null;
        this.withRenderer((ren) => {
            var canv = (canvas.getNativeElement());
            context = canv.getContext("2d");
        });
        return context;
    }
    get isComputedFontQuery() {
        return this._currentFontQuery != null &&
            this.hasBody();
    }
    getCssDefaultPropertyValue(className, propertyName) {
        if (this._useDefaultsSource && !this.isComputedFontQuery) {
            let c = this._defaultsSource[className];
            if (className == "" || className == null) {
                c = this._defaultsSource;
            }
            if (c === undefined) {
                return null;
            }
            let v = c[propertyName];
            if (v === undefined) {
                return null;
            }
            return v;
        }
        return this._cssHelper.getPropertyValue(this.getCurrentDiscovery(), className, propertyName);
    }
    getCssDefaultValuesForClassCollection(classPrefix, propertyNames) {
        if (this._useDefaultsSource) {
            let ret = [];
            for (let k in this._defaultsSource) {
                if (k.indexOf(classPrefix) === 0) {
                    let subRet = [];
                    ret.push(subRet);
                    for (let i = 0; i < propertyNames.length; i++) {
                        let v = this._defaultsSource[k][propertyNames[i]];
                        if (v === undefined) {
                            subRet.push(null);
                        }
                        else {
                            subRet.push(v);
                        }
                    }
                }
            }
            return ret;
        }
        return this._cssHelper.getValuesForClassCollection(this.getCurrentDiscovery(), classPrefix, propertyNames);
    }
    getDefaultFontHeight() {
        if (this._defaultsSource["default-font-height"] !== undefined) {
            return +this._defaultsSource["default-font-height"];
        }
        return 16;
    }
    getHeightForFontString(fontString, text, useOffsetHeight) {
        let key = fontString + ";" + text + ";" + (useOffsetHeight ? ";true" : ";false");
        if (AngularRenderer._fontHeightCache[key] !== undefined) {
            return AngularRenderer._fontHeightCache[key];
        }
        if (this._rootWrapper.getNativeElement() == null) {
            //TODO: some voodoo here.
            return 12;
        }
        this.startCSSQuery();
        let disc = this.getCurrentDiscovery();
        if (disc == null || !this.hasWindow) {
            return this.getDefaultFontHeight();
        }
        if (disc.getNativeElement().parentElement) {
            disc.getNativeElement().parentElement.removeChild(disc.getNativeElement());
        }
        disc.setStyleProperty("position", "absolute");
        disc.setStyleProperty("visibility", "hidden");
        disc.setStyleProperty("font", fontString);
        document.body.appendChild(disc.getNativeElement());
        let span;
        this.withRenderer((ren) => {
            span = this._renderer.createElement("span");
        });
        var spanWrap = new AngularWrapper(span, this._renderer, this._ngZone);
        this.getCurrentDiscovery().append(spanWrap);
        spanWrap.setText(text);
        var height;
        if (useOffsetHeight) {
            var offHeight = spanWrap.getNativeElement().offsetHeight;
            height = offHeight;
            AngularRenderer._fontHeightCache[key] = height;
        }
        else {
            height = spanWrap.getNativeElement().height();
            AngularRenderer._fontHeightCache[key] = height;
        }
        if (height == 0) {
            //HACK: HACK! HACK! HACK!
            return this.getDefaultFontHeight();
        }
        //console.log("font height: " + height);
        document.body.removeChild(disc.getNativeElement());
        this.endCSSQuery();
        return height;
    }
    getSubRenderer(root) {
        var elem = root;
        elem = elem.getNativeElement();
        return new AngularRenderer(elem, this._renderer, this._document, this._ngZone, this._useDefaultsSource, this._defaultsSource);
    }
    globalListen(element, eventName, handler) {
        let retVal = null;
        this._ngZone.runOutsideAngular(() => {
            var $self = this;
            var a = function (e) {
                var inner = {};
                //TODO: normalize here?
                inner.originalEvent = e;
                inner.altKey = e.altKey;
                inner.button = e.button;
                inner.ctrlKey = e.ctrlKey;
                inner.offsetX = e.offsetX;
                inner.offsetY = e.offsetY;
                inner.pageX = e.pageX;
                inner.pageY = e.pageY;
                if (e.touches && e.touches.length > 0) {
                    inner.pageX = e.touches[0].pageX;
                    inner.pageY = e.touches[0].pageY;
                }
                inner.shiftKey = e.shiftKey;
                inner.which = e.which;
                inner.preventDefault = function () {
                    e.preventDefault();
                };
                inner.stopPropagation = function () {
                    e.stopPropagation();
                };
                //console.log(e);
                handler(inner);
            };
            var ret = this._renderer.listen(element, eventName, a);
            var self = this;
            retVal = function () {
                var ind = self._toUnbind.indexOf(retVal);
                if (ind >= 0) {
                    self._toUnbind.splice(ind, 1);
                }
                ret();
                a = null;
            };
            this._toUnbind.push(retVal);
        });
        return retVal;
    }
    hasBody() {
        return this._document !== null && this._document.body !== null;
    }
    hasWindow() {
        //todo: hmmm
        return true;
    }
    getCurrentDiscovery() {
        if (this._discStack.length <= 0) {
            return null;
        }
        return this._discStack[this._discStack.length - 1];
    }
    setCssQueryFontString(fontString) {
        if (this._useDefaultsSource) {
            this._currentFontQuery = fontString;
        }
        this.getCurrentDiscovery().setStyleProperty("font", fontString);
    }
    startCSSQuery() {
        if (!this.hasBody()) {
            return;
        }
        var disc = this._cssHelper.getDiscoveryElement(this._rootElement, this._ngZone);
        this._discStack.push(disc);
        this._rootWrapper.getNativeElement().appendChild(disc.getNativeElement());
    }
    supportsDOMEvents() {
        //todo: hmmm.
        return true;
    }
}
AngularRenderer._fontHeightCache = {};
export class AngularWrapper {
    constructor(ele, renderer, ngZone) {
        this.ele = ele;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this._toUnbind = [];
        this._attrCache = new Map();
        this._styleCache = new Map();
        this._useRenderer = false;
        this._innerText = undefined;
        this._toUnbind = [];
    }
    destroy() {
        this.unlistenAll();
        this.ele = null;
    }
    withRenderer(act) {
        //if (NgZone.isInAngularZone()) {
        act(this.renderer);
        //    return;
        // } else {
        //    this.ngZone.run(() => {
        //         act(this.renderer);
        //     });
        //}
    }
    addClass(className) {
        if (className == null || className.length == 0) {
            return this;
        }
        this.withRenderer((ren) => {
            className.split(" ").forEach((item) => ren.addClass(this.ele, item));
        });
        return this;
    }
    append(child) {
        this.withRenderer((ren) => {
            ren.appendChild(this.ele, child.getNativeElement());
        });
        return this;
    }
    getAttribute(propertyName) {
        if (this._attrCache.has(propertyName)) {
            return this._attrCache.get(propertyName);
        }
        return null;
    }
    setAttribute(propertyName, value) {
        this._attrCache.set(propertyName, value);
        //this.withRenderer((ren) => {
        let ren = this.renderer;
        ren.setAttribute(this.ele, propertyName, value);
        //});
        return this;
    }
    before(child) {
        this.ele.parentElement.insertBefore(child.getNativeElement(), this.ele);
        return this;
    }
    clone() {
        return new AngularWrapper(this.getNativeElement().cloneNode(true), this.renderer, this.ngZone);
    }
    getStyleProperty(propertyName) {
        if (this.getNativeElement() !== null) {
            if (getComputedStyle !== undefined) {
                var computed = getComputedStyle(this.getNativeElement());
                //console.log("getting computed value for: " + propertyName + ": " + computed[propertyName]);
                return computed[propertyName];
            }
        }
        if (this._styleCache.has(propertyName)) {
            return this._styleCache.get(propertyName);
        }
        return null;
    }
    setStyleProperty(propertyName, value) {
        this._styleCache.set(propertyName, value);
        //this.withRenderer((ren) => {
        this.renderer.setStyle(this.ele, propertyName, value);
        //});
        return this;
    }
    findByClass(className) {
        if (className.substring(0, 1) == '.') {
            className = className.substring(1);
        }
        let ret = this.ele.getElementsByClassName(className);
        let retVal = [];
        retVal.length = ret.length;
        for (var i = 0; i < ret.length; i++) {
            retVal[i] = new AngularWrapper(ret[i], this.renderer, this.ngZone);
        }
        return retVal;
    }
    focus() {
        if (this.getNativeElement() !== null && this.getNativeElement().focus !== undefined) {
            this.getNativeElement().focus();
        }
        return this;
    }
    getChildAt(i) {
        let child = this.ele.children[i];
        return new AngularWrapper(child, this.renderer, this.ngZone);
    }
    getChildCount() {
        return this.ele.children.length;
    }
    getNativeElement() {
        let nativeElement = null;
        //this.withRenderer((ren) => {
        if (this.ele == null) {
            nativeElement = null;
            return nativeElement;
        }
        if (this.ele.getNativeElement == undefined) {
            nativeElement = this.ele;
            return nativeElement;
        }
        nativeElement = this.ele.getNativeElement();
        //});
        return nativeElement;
    }
    height() {
        var ret = this.getStyleProperty("height");
        if (ret == null) {
            //todo: some voodoo here.
            return 500;
        }
        let val = parseFloat(ret.replace("px", ""));
        if (isNaN(val)) {
            return 0;
        }
        return val;
    }
    hide() {
        this.setStyleProperty("display", "none");
        return this;
    }
    listen(eventName, handler) {
        let retVal = null;
        this.ngZone.runOutsideAngular(() => {
            var $self = this;
            var a = function (e) {
                var inner = {};
                //TODO: normalize here?
                inner.originalEvent = e;
                inner.altKey = e.altKey;
                inner.button = e.button;
                inner.ctrlKey = e.ctrlKey;
                inner.offsetX = e.offsetX;
                inner.offsetY = e.offsetY;
                inner.pageX = e.pageX;
                inner.pageY = e.pageY;
                if (e.touches && e.touches.length > 0) {
                    inner.pageX = e.touches[0].pageX;
                    inner.pageY = e.touches[0].pageY;
                }
                inner.shiftKey = e.shiftKey;
                inner.which = e.which;
                inner.preventDefault = function () {
                    e.preventDefault();
                };
                inner.stopPropagation = function () {
                    e.stopPropagation();
                };
                //console.log(e);
                handler(inner);
            };
            var ret = this.renderer.listen(this.ele, eventName, a);
            var self = this;
            retVal = function () {
                var ind = self._toUnbind.indexOf(retVal);
                if (ind >= 0) {
                    self._toUnbind.splice(ind, 1);
                }
                ret();
                a = null;
            };
            this._toUnbind.push(retVal);
        });
        return retVal;
    }
    getOffsetHelper(ele) {
        var clientRect = ele.getBoundingClientRect();
        return {
            top: clientRect.top + window.pageYOffset,
            left: clientRect.left + window.pageXOffset
        };
    }
    getOffset() {
        return this.getOffsetHelper(this.getNativeElement());
    }
    setOffset(x, y) {
        let par = this.getNativeElement().offsetParent || this.getNativeElement().parentElement;
        let parentOffset = this.getOffsetHelper(par);
        return this.setRawPosition(x - parentOffset.left, y - parentOffset.top);
        //return this;
    }
    outerHeight() {
        return this.getProperty("offsetHeight");
    }
    outerHeightWithMargin() {
        let height = this.outerHeight();
        height += parseInt(this.getStyleProperty("marginTop"));
        height += parseInt(this.getStyleProperty("marginBottom"));
        return height;
    }
    outerWidth() {
        return this.getProperty("offsetWidth");
    }
    outerWidthWithMargin() {
        let width = this.outerWidth();
        width += parseInt(this.getStyleProperty("marginLeft"));
        width += parseInt(this.getStyleProperty("marginRight"));
        return width;
    }
    getProperty(propertyName) {
        let native = this.getNativeElement();
        return native[propertyName];
    }
    setProperty(propertyName, value) {
        this.withRenderer((ren) => {
            ren.setProperty(this.ele, propertyName, value);
        });
        return this;
    }
    remove() {
        this.withRenderer((ren) => {
            let ele = this.getNativeElement();
            if (ele.parentElement != null) {
                if (this._useRenderer) {
                    ren.removeChild(ele.parentElement, ele);
                }
                else {
                    ele.parentElement.removeChild(ele);
                }
            }
            //ren.detachView([this.getNativeElement()]);
        });
        return this;
    }
    removeChild(child) {
        this.withRenderer((ren) => {
            if (this._useRenderer) {
                ren.removeChild(this.getNativeElement(), child.getNativeElement());
            }
            else {
                this.getNativeElement().removeChild(child.getNativeElement());
            }
            //ren.detachView([child.getNativeElement()]);
        });
        return this;
    }
    removeChildren() {
        for (let i = this.getChildCount() - 1; i >= 0; i--) {
            this.removeChild(this.getChildAt(i));
        }
        return this;
    }
    removeClass(className) {
        if (className == null || className.length == 0) {
            return this;
        }
        this.withRenderer((ren) => {
            className.split(" ").forEach((item) => ren.removeClass(this.ele, item));
        });
        return this;
    }
    setRawStyleProperty(propertyName, value) {
        //this.withRenderer((ren) => {
        //  ren.setStyle(this.ele, propertyName, value);
        //})
        this.ele.style[propertyName] = value;
        return this;
    }
    setRawPosition(x, y) {
        this.ele.style.left = x + "px";
        this.ele.style.top = y + "px";
        return this;
    }
    setRawXPosition(x) {
        this.ele.style.left = x + "px";
        return this;
    }
    setRawYPosition(y) {
        this.ele.style.top = y + "px";
        return this;
    }
    setRawSize(width, height) {
        this.ele.style.width = width + "px";
        this.ele.style.height = height + "px";
        return this;
    }
    show() {
        this.setStyleProperty("display", "");
        return this;
    }
    getText() {
        if (this._innerText != undefined) {
            return this._innerText;
        }
        return this.getNativeElement().innerText;
    }
    setText(value) {
        this._innerText = value;
        this.withRenderer((ren) => {
            //workaround warning:
            this.getNativeElement().innerText = value;
            //ren.setText(this.ele, value);
        });
        return this;
    }
    setRawText(value) {
        this._innerText = value;
        this.ele.textContent = value;
        return this;
    }
    unlistenAll() {
        var toUnbind = [];
        for (var i = 0; i < this._toUnbind.length; i++) {
            toUnbind.push(this._toUnbind[i]);
        }
        for (var i = 0; i < toUnbind.length; i++) {
            toUnbind[i]();
        }
        this._toUnbind.length = 0;
        return this;
    }
    width() {
        var ret = this.getStyleProperty("width");
        if (ret == null) {
            //todo: some voodoo here.
            return 500;
        }
        let val = parseFloat(ret.replace("px", ""));
        if (isNaN(val)) {
            return 0;
        }
        return val;
    }
    parent() {
        return this.ele == null || this.ele.parentElement == null ? null :
            new AngularWrapper(this.ele.parentElement, this.renderer, this.ngZone);
    }
    querySelectorAll(selector) {
        let elements = [...this.ele.querySelectorAll(selector)];
        let result = [];
        elements.forEach(element => result.push(new AngularWrapper(element, this.renderer, this.ngZone)));
        return result;
    }
}
class AngularCssHelper {
    constructor(renderer, document) {
        this.renderer = renderer;
        this.document = document;
    }
    get hasWindow() {
        //TODO
        return true;
    }
    getDiscoveryElement(container, ngZone) {
        //console.log(container);
        var ele = this.renderer.createElement("fakediscoveryelement");
        var wrapper = new AngularWrapper(ele, this.renderer, ngZone);
        wrapper.setStyleProperty("box-sizing", "content-box");
        return wrapper;
    }
    getPropertyValue(discoveryElement, className, propertyName) {
        //console.log("fetching: " + className + ", prop: " + propertyName);
        var ret = CssHelper.getPropertyValue1(discoveryElement, className, propertyName);
        //console.log("for: " + className + ", prop: " + propertyName + " value: " + ret);
        return ret;
    }
    getValuesForClassCollection(discoveryElement, classPrefix, propertyNames) {
        var prop = new List$1(String_$type, 0);
        for (var i = 0; i < propertyNames.length; i++) {
            prop.add(propertyNames[i]);
        }
        var ret = CssHelper.getValuesForClassCollection(discoveryElement, classPrefix, prop);
        var retVal = new Array(ret.count);
        for (var i1 = 0; i1 < ret.count; i1++) {
            retVal[i1] = new Array(ret._inner[i1].count);
            for (var j = 0; j < ret._inner[i1].count; j++) {
                retVal[i1][j] = ret._inner[i1]._inner[j];
            }
        }
        return retVal;
    }
}
//# sourceMappingURL=angular-renderer.js.map