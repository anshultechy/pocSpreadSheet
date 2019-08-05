/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { NgZone } from '@angular/core';
import { List$1 } from "./List$1";
import { String_$type } from './type';
import { CssHelper } from './CssHelper';
var AngularRenderer = /** @class */ (function () {
    function AngularRenderer(container, renderer, document, ngZone, useDefaultsSource, defaultsSource) {
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
    AngularRenderer.prototype.addSizeWatcher = function (onResized) {
        var _this = this;
        var previousWidth = this._rootElement.offsetWidth;
        var previousHeight = this._rootElement.offsetHeight;
        if (this._checkResized == null) {
            this._checkResized = function () {
                var currWidth = _this._rootElement.offsetWidth;
                var currHeight = _this._rootElement.offsetHeight;
                var changed = false;
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
        this._resizeListener = this.globalListen("window", "resize", function (ev) { return _this._checkResized(); });
        var self = this;
        this._resizeTicking = true;
        function resizeTick() {
            if (self._resizeTicking) {
                self._checkResized();
                self.setTimeout(resizeTick, 100);
            }
        }
        this.setTimeout(resizeTick, 100);
    };
    AngularRenderer.prototype.destroy = function () {
        for (var i = 0; i < this._toUnbind.length; i++) {
            this._toUnbind[i]();
        }
        this._toUnbind = [];
        this.removeSizeWatcher();
        this._rootWrapper.destroy();
        this._rootWrapper = null;
        this._rootElement = null;
    };
    AngularRenderer.prototype.removeSizeWatcher = function () {
        this._resizeTicking = false;
        if (this._resizeListener != null) {
            this._resizeListener();
            this._resizeListener = null;
        }
    };
    AngularRenderer.prototype.withRenderer = function (act) {
        //if (NgZone.isInAngularZone()) {
        act(this._renderer);
        //    return;
        //} else {
        //    this._ngZone.run(() => {
        //        act(this._renderer);
        //    });
        //}
    };
    AngularRenderer.prototype.supportsAnimation = function () {
        return true;
    };
    AngularRenderer.prototype.getRequestAnimationFrame = function () {
        var _this = this;
        var ret = function (act) {
            _this._ngZone.runOutsideAngular(function () {
                requestAnimationFrame(act);
            });
        };
        return ret;
    };
    AngularRenderer.prototype.setTimeout = function (act, millisecondsDelay) {
        var val;
        this._ngZone.runOutsideAngular(function () {
            val = window.setTimeout(act, millisecondsDelay);
        });
        return val;
    };
    AngularRenderer.prototype.clearTimeout = function (timerId) {
        this._ngZone.runOutsideAngular(function () {
            window.clearTimeout(timerId);
        });
    };
    Object.defineProperty(AngularRenderer.prototype, "rootWrapper", {
        get: function () {
            return this._rootWrapper;
        },
        enumerable: true,
        configurable: true
    });
    AngularRenderer.prototype.querySelector = function (selector) {
        var _this = this;
        var wrapper = null;
        this.withRenderer(function (ren) {
            var ele = _this.rootWrapper.getNativeElement().querySelector(selector);
            wrapper = new AngularWrapper(ele, ren, _this._ngZone);
        });
        return wrapper;
    };
    AngularRenderer.prototype.getWrapper = function (ele) {
        var _this = this;
        var wrapper = null;
        this.withRenderer(function (ren) {
            wrapper = new AngularWrapper(ele, ren, _this._ngZone);
        });
        return wrapper;
    };
    AngularRenderer.prototype.getResourceString = function (resourceId) {
        //TODO: fix this;
        return "";
    };
    AngularRenderer.prototype.append = function (child) {
        this._rootWrapper.append(child);
        return this;
    };
    AngularRenderer.prototype.appendToBody = function (element) {
        if (this._document !== null && this._document.body !== null) {
            this._document.body.appendChild(element.getNativeElement());
        }
    };
    AngularRenderer.prototype.runInMainZone = function (action) {
        if (NgZone.isInAngularZone()) {
            action();
            return;
        }
        else {
            this._ngZone.run(function () {
                action();
            });
        }
    };
    AngularRenderer.prototype.createElement = function (elementName) {
        var ele;
        this.withRenderer(function (ren) {
            ele = ren.createElement(elementName);
        });
        var wrap = new AngularWrapper(ele, this._renderer, this._ngZone);
        return wrap;
    };
    AngularRenderer.prototype.endCSSQuery = function () {
        this._currentFontQuery = null;
        if (!this.hasBody()) {
            return;
        }
        if (this._discStack.length > 0) {
            var toRemove = this._discStack.pop();
            var parent_1 = toRemove.getNativeElement().parentElement;
            if (parent_1) {
                parent_1.removeChild(toRemove.getNativeElement());
            }
            //toRemove.remove();
        }
    };
    AngularRenderer.prototype.expandTemplate = function (template, args) {
        throw new Error("not implemented");
    };
    AngularRenderer.prototype.get2DCanvasContext = function (canvas) {
        var context = null;
        this.withRenderer(function (ren) {
            var canv = (canvas.getNativeElement());
            context = canv.getContext("2d");
        });
        return context;
    };
    Object.defineProperty(AngularRenderer.prototype, "isComputedFontQuery", {
        get: function () {
            return this._currentFontQuery != null &&
                this.hasBody();
        },
        enumerable: true,
        configurable: true
    });
    AngularRenderer.prototype.getCssDefaultPropertyValue = function (className, propertyName) {
        if (this._useDefaultsSource && !this.isComputedFontQuery) {
            var c = this._defaultsSource[className];
            if (className == "" || className == null) {
                c = this._defaultsSource;
            }
            if (c === undefined) {
                return null;
            }
            var v = c[propertyName];
            if (v === undefined) {
                return null;
            }
            return v;
        }
        return this._cssHelper.getPropertyValue(this.getCurrentDiscovery(), className, propertyName);
    };
    AngularRenderer.prototype.getCssDefaultValuesForClassCollection = function (classPrefix, propertyNames) {
        if (this._useDefaultsSource) {
            var ret = [];
            for (var k in this._defaultsSource) {
                if (k.indexOf(classPrefix) === 0) {
                    var subRet = [];
                    ret.push(subRet);
                    for (var i = 0; i < propertyNames.length; i++) {
                        var v = this._defaultsSource[k][propertyNames[i]];
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
    };
    AngularRenderer.prototype.getDefaultFontHeight = function () {
        if (this._defaultsSource["default-font-height"] !== undefined) {
            return +this._defaultsSource["default-font-height"];
        }
        return 16;
    };
    AngularRenderer.prototype.getHeightForFontString = function (fontString, text, useOffsetHeight) {
        var _this = this;
        var key = fontString + ";" + text + ";" + (useOffsetHeight ? ";true" : ";false");
        if (AngularRenderer._fontHeightCache[key] !== undefined) {
            return AngularRenderer._fontHeightCache[key];
        }
        if (this._rootWrapper.getNativeElement() == null) {
            //TODO: some voodoo here.
            return 12;
        }
        this.startCSSQuery();
        var disc = this.getCurrentDiscovery();
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
        var span;
        this.withRenderer(function (ren) {
            span = _this._renderer.createElement("span");
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
    };
    AngularRenderer.prototype.getSubRenderer = function (root) {
        var elem = root;
        elem = elem.getNativeElement();
        return new AngularRenderer(elem, this._renderer, this._document, this._ngZone, this._useDefaultsSource, this._defaultsSource);
    };
    AngularRenderer.prototype.globalListen = function (element, eventName, handler) {
        var _this = this;
        var retVal = null;
        this._ngZone.runOutsideAngular(function () {
            var $self = _this;
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
            var ret = _this._renderer.listen(element, eventName, a);
            var self = _this;
            retVal = function () {
                var ind = self._toUnbind.indexOf(retVal);
                if (ind >= 0) {
                    self._toUnbind.splice(ind, 1);
                }
                ret();
                a = null;
            };
            _this._toUnbind.push(retVal);
        });
        return retVal;
    };
    AngularRenderer.prototype.hasBody = function () {
        return this._document !== null && this._document.body !== null;
    };
    AngularRenderer.prototype.hasWindow = function () {
        //todo: hmmm
        return true;
    };
    AngularRenderer.prototype.getCurrentDiscovery = function () {
        if (this._discStack.length <= 0) {
            return null;
        }
        return this._discStack[this._discStack.length - 1];
    };
    AngularRenderer.prototype.setCssQueryFontString = function (fontString) {
        if (this._useDefaultsSource) {
            this._currentFontQuery = fontString;
        }
        this.getCurrentDiscovery().setStyleProperty("font", fontString);
    };
    AngularRenderer.prototype.startCSSQuery = function () {
        if (!this.hasBody()) {
            return;
        }
        var disc = this._cssHelper.getDiscoveryElement(this._rootElement, this._ngZone);
        this._discStack.push(disc);
        this._rootWrapper.getNativeElement().appendChild(disc.getNativeElement());
    };
    AngularRenderer.prototype.supportsDOMEvents = function () {
        //todo: hmmm.
        return true;
    };
    AngularRenderer._fontHeightCache = {};
    return AngularRenderer;
}());
export { AngularRenderer };
var AngularWrapper = /** @class */ (function () {
    function AngularWrapper(ele, renderer, ngZone) {
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
    AngularWrapper.prototype.destroy = function () {
        this.unlistenAll();
        this.ele = null;
    };
    AngularWrapper.prototype.withRenderer = function (act) {
        //if (NgZone.isInAngularZone()) {
        act(this.renderer);
        //    return;
        // } else {
        //    this.ngZone.run(() => {
        //         act(this.renderer);
        //     });
        //}
    };
    AngularWrapper.prototype.addClass = function (className) {
        var _this = this;
        if (className == null || className.length == 0) {
            return this;
        }
        this.withRenderer(function (ren) {
            className.split(" ").forEach(function (item) { return ren.addClass(_this.ele, item); });
        });
        return this;
    };
    AngularWrapper.prototype.append = function (child) {
        var _this = this;
        this.withRenderer(function (ren) {
            ren.appendChild(_this.ele, child.getNativeElement());
        });
        return this;
    };
    AngularWrapper.prototype.getAttribute = function (propertyName) {
        if (this._attrCache.has(propertyName)) {
            return this._attrCache.get(propertyName);
        }
        return null;
    };
    AngularWrapper.prototype.setAttribute = function (propertyName, value) {
        this._attrCache.set(propertyName, value);
        //this.withRenderer((ren) => {
        var ren = this.renderer;
        ren.setAttribute(this.ele, propertyName, value);
        //});
        return this;
    };
    AngularWrapper.prototype.before = function (child) {
        this.ele.parentElement.insertBefore(child.getNativeElement(), this.ele);
        return this;
    };
    AngularWrapper.prototype.clone = function () {
        return new AngularWrapper(this.getNativeElement().cloneNode(true), this.renderer, this.ngZone);
    };
    AngularWrapper.prototype.getStyleProperty = function (propertyName) {
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
    };
    AngularWrapper.prototype.setStyleProperty = function (propertyName, value) {
        this._styleCache.set(propertyName, value);
        //this.withRenderer((ren) => {
        this.renderer.setStyle(this.ele, propertyName, value);
        //});
        return this;
    };
    AngularWrapper.prototype.findByClass = function (className) {
        if (className.substring(0, 1) == '.') {
            className = className.substring(1);
        }
        var ret = this.ele.getElementsByClassName(className);
        var retVal = [];
        retVal.length = ret.length;
        for (var i = 0; i < ret.length; i++) {
            retVal[i] = new AngularWrapper(ret[i], this.renderer, this.ngZone);
        }
        return retVal;
    };
    AngularWrapper.prototype.focus = function () {
        if (this.getNativeElement() !== null && this.getNativeElement().focus !== undefined) {
            this.getNativeElement().focus();
        }
        return this;
    };
    AngularWrapper.prototype.getChildAt = function (i) {
        var child = this.ele.children[i];
        return new AngularWrapper(child, this.renderer, this.ngZone);
    };
    AngularWrapper.prototype.getChildCount = function () {
        return this.ele.children.length;
    };
    AngularWrapper.prototype.getNativeElement = function () {
        var nativeElement = null;
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
    };
    AngularWrapper.prototype.height = function () {
        var ret = this.getStyleProperty("height");
        if (ret == null) {
            //todo: some voodoo here.
            return 500;
        }
        var val = parseFloat(ret.replace("px", ""));
        if (isNaN(val)) {
            return 0;
        }
        return val;
    };
    AngularWrapper.prototype.hide = function () {
        this.setStyleProperty("display", "none");
        return this;
    };
    AngularWrapper.prototype.listen = function (eventName, handler) {
        var _this = this;
        var retVal = null;
        this.ngZone.runOutsideAngular(function () {
            var $self = _this;
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
            var ret = _this.renderer.listen(_this.ele, eventName, a);
            var self = _this;
            retVal = function () {
                var ind = self._toUnbind.indexOf(retVal);
                if (ind >= 0) {
                    self._toUnbind.splice(ind, 1);
                }
                ret();
                a = null;
            };
            _this._toUnbind.push(retVal);
        });
        return retVal;
    };
    AngularWrapper.prototype.getOffsetHelper = function (ele) {
        var clientRect = ele.getBoundingClientRect();
        return {
            top: clientRect.top + window.pageYOffset,
            left: clientRect.left + window.pageXOffset
        };
    };
    AngularWrapper.prototype.getOffset = function () {
        return this.getOffsetHelper(this.getNativeElement());
    };
    AngularWrapper.prototype.setOffset = function (x, y) {
        var par = this.getNativeElement().offsetParent || this.getNativeElement().parentElement;
        var parentOffset = this.getOffsetHelper(par);
        return this.setRawPosition(x - parentOffset.left, y - parentOffset.top);
        //return this;
    };
    AngularWrapper.prototype.outerHeight = function () {
        return this.getProperty("offsetHeight");
    };
    AngularWrapper.prototype.outerHeightWithMargin = function () {
        var height = this.outerHeight();
        height += parseInt(this.getStyleProperty("marginTop"));
        height += parseInt(this.getStyleProperty("marginBottom"));
        return height;
    };
    AngularWrapper.prototype.outerWidth = function () {
        return this.getProperty("offsetWidth");
    };
    AngularWrapper.prototype.outerWidthWithMargin = function () {
        var width = this.outerWidth();
        width += parseInt(this.getStyleProperty("marginLeft"));
        width += parseInt(this.getStyleProperty("marginRight"));
        return width;
    };
    AngularWrapper.prototype.getProperty = function (propertyName) {
        var native = this.getNativeElement();
        return native[propertyName];
    };
    AngularWrapper.prototype.setProperty = function (propertyName, value) {
        var _this = this;
        this.withRenderer(function (ren) {
            ren.setProperty(_this.ele, propertyName, value);
        });
        return this;
    };
    AngularWrapper.prototype.remove = function () {
        var _this = this;
        this.withRenderer(function (ren) {
            var ele = _this.getNativeElement();
            if (ele.parentElement != null) {
                if (_this._useRenderer) {
                    ren.removeChild(ele.parentElement, ele);
                }
                else {
                    ele.parentElement.removeChild(ele);
                }
            }
            //ren.detachView([this.getNativeElement()]);
        });
        return this;
    };
    AngularWrapper.prototype.removeChild = function (child) {
        var _this = this;
        this.withRenderer(function (ren) {
            if (_this._useRenderer) {
                ren.removeChild(_this.getNativeElement(), child.getNativeElement());
            }
            else {
                _this.getNativeElement().removeChild(child.getNativeElement());
            }
            //ren.detachView([child.getNativeElement()]);
        });
        return this;
    };
    AngularWrapper.prototype.removeChildren = function () {
        for (var i = this.getChildCount() - 1; i >= 0; i--) {
            this.removeChild(this.getChildAt(i));
        }
        return this;
    };
    AngularWrapper.prototype.removeClass = function (className) {
        var _this = this;
        if (className == null || className.length == 0) {
            return this;
        }
        this.withRenderer(function (ren) {
            className.split(" ").forEach(function (item) { return ren.removeClass(_this.ele, item); });
        });
        return this;
    };
    AngularWrapper.prototype.setRawStyleProperty = function (propertyName, value) {
        //this.withRenderer((ren) => {
        //  ren.setStyle(this.ele, propertyName, value);
        //})
        this.ele.style[propertyName] = value;
        return this;
    };
    AngularWrapper.prototype.setRawPosition = function (x, y) {
        this.ele.style.left = x + "px";
        this.ele.style.top = y + "px";
        return this;
    };
    AngularWrapper.prototype.setRawXPosition = function (x) {
        this.ele.style.left = x + "px";
        return this;
    };
    AngularWrapper.prototype.setRawYPosition = function (y) {
        this.ele.style.top = y + "px";
        return this;
    };
    AngularWrapper.prototype.setRawSize = function (width, height) {
        this.ele.style.width = width + "px";
        this.ele.style.height = height + "px";
        return this;
    };
    AngularWrapper.prototype.show = function () {
        this.setStyleProperty("display", "");
        return this;
    };
    AngularWrapper.prototype.getText = function () {
        if (this._innerText != undefined) {
            return this._innerText;
        }
        return this.getNativeElement().innerText;
    };
    AngularWrapper.prototype.setText = function (value) {
        var _this = this;
        this._innerText = value;
        this.withRenderer(function (ren) {
            //workaround warning:
            _this.getNativeElement().innerText = value;
            //ren.setText(this.ele, value);
        });
        return this;
    };
    AngularWrapper.prototype.setRawText = function (value) {
        this._innerText = value;
        this.ele.textContent = value;
        return this;
    };
    AngularWrapper.prototype.unlistenAll = function () {
        var toUnbind = [];
        for (var i = 0; i < this._toUnbind.length; i++) {
            toUnbind.push(this._toUnbind[i]);
        }
        for (var i = 0; i < toUnbind.length; i++) {
            toUnbind[i]();
        }
        this._toUnbind.length = 0;
        return this;
    };
    AngularWrapper.prototype.width = function () {
        var ret = this.getStyleProperty("width");
        if (ret == null) {
            //todo: some voodoo here.
            return 500;
        }
        var val = parseFloat(ret.replace("px", ""));
        if (isNaN(val)) {
            return 0;
        }
        return val;
    };
    AngularWrapper.prototype.parent = function () {
        return this.ele == null || this.ele.parentElement == null ? null :
            new AngularWrapper(this.ele.parentElement, this.renderer, this.ngZone);
    };
    AngularWrapper.prototype.querySelectorAll = function (selector) {
        var _this = this;
        var elements = tslib_1.__spread(this.ele.querySelectorAll(selector));
        var result = [];
        elements.forEach(function (element) { return result.push(new AngularWrapper(element, _this.renderer, _this.ngZone)); });
        return result;
    };
    return AngularWrapper;
}());
export { AngularWrapper };
var AngularCssHelper = /** @class */ (function () {
    function AngularCssHelper(renderer, document) {
        this.renderer = renderer;
        this.document = document;
    }
    Object.defineProperty(AngularCssHelper.prototype, "hasWindow", {
        get: function () {
            //TODO
            return true;
        },
        enumerable: true,
        configurable: true
    });
    AngularCssHelper.prototype.getDiscoveryElement = function (container, ngZone) {
        //console.log(container);
        var ele = this.renderer.createElement("fakediscoveryelement");
        var wrapper = new AngularWrapper(ele, this.renderer, ngZone);
        wrapper.setStyleProperty("box-sizing", "content-box");
        return wrapper;
    };
    AngularCssHelper.prototype.getPropertyValue = function (discoveryElement, className, propertyName) {
        //console.log("fetching: " + className + ", prop: " + propertyName);
        var ret = CssHelper.getPropertyValue1(discoveryElement, className, propertyName);
        //console.log("for: " + className + ", prop: " + propertyName + " value: " + ret);
        return ret;
    };
    AngularCssHelper.prototype.getValuesForClassCollection = function (discoveryElement, classPrefix, propertyNames) {
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
    };
    return AngularCssHelper;
}());
//# sourceMappingURL=angular-renderer.js.map