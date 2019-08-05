/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Brush } from './Brush';
import { Size } from './Size';
import { Rect } from './Rect';
import { BrushCollection } from './BrushCollection';
import { PointUtil } from './type';
import { EnumUtil, typeGetValue } from './type';
import { stringEndsWith } from './string';
import { ObservableColorCollection } from './ObservableColorCollection';
export function brushToString(v) {
    if (v == null) {
        return null;
    }
    return v.fill;
}
export function stringToBrush(v) {
    if (v == null) {
        return null;
    }
    var brush = Brush.create(v);
    return brush;
}
export function ensureEnum($t, v) {
    if (v == null) {
        return 0;
    }
    if (typeof v == "number") {
        var n = v;
        if (EnumUtil.getName($t, n) == undefined) {
            return 0;
        }
        return v;
    }
    var ret = typeGetValue(EnumUtil.parse($t, v, true));
    return ret;
}
export function enumToString($t, v) {
    return EnumUtil.toString($t, v);
}
export function ensureBool(v) {
    if (v == null) {
        return false;
    }
    if (typeof v == "boolean") {
        return v;
    }
    return v.toString().toLowerCase() == "true";
}
export function colorToString(v) {
    if (v == null) {
        return null;
    }
    return v.colorString;
}
export function stringToColor(v) {
    if (v == null) {
        return null;
    }
    var brush = Brush.create(v);
    return brush.color;
}
export function fromSize(v) {
    if (v == null) {
        return null;
    }
    return {
        width: v.width,
        height: v.height
    };
}
export function sizeToString(v) {
    if (!v) {
        return null;
    }
    return v.width + " " + v.height;
}
export function toSize(v) {
    if (v == null) {
        return Size.empty;
    }
    var size = null;
    if (typeof v == "string") {
        v = v.trim();
        var parts = v.split(" ");
        if (parts.length != 2) {
            parts = v.split(",");
        }
        if (parts.length != 2) {
            return Size.empty;
        }
        parts[0] = parts[0].trim();
        parts[1] = parts[1].trim();
        var width = parseFloat(parts[0]);
        var height = parseFloat(parts[1]);
        return new Size(0, width, height);
    }
    else {
        if (v != null) {
            size = new Size(0, v.width, v.height);
        }
    }
    return size;
}
export function fromPoint(v) {
    return v;
}
export function pointToString(v) {
    if (!v) {
        return null;
    }
    return v.x + " " + v.y;
}
export function toPoint(v) {
    if (v == null) {
        return PointUtil.createXY(NaN, NaN);
    }
    var point = null;
    if (typeof v == "string") {
        v = v.trim();
        var parts = v.split(" ");
        if (parts.length != 2) {
            parts = v.split(",");
        }
        if (parts.length != 2) {
            return PointUtil.createXY(NaN, NaN);
        }
        parts[0] = parts[0].trim();
        parts[1] = parts[1].trim();
        var x = parseFloat(parts[0]);
        var y = parseFloat(parts[1]);
        return PointUtil.createXY(x, y);
    }
    else {
        if (v != null) {
            point = PointUtil.createXY(v.x, v.y);
        }
    }
    return point;
}
export function fromRect(v) {
    if (v == null) {
        return null;
    }
    return {
        top: v.top,
        left: v.left,
        width: v.width,
        height: v.height
    };
}
export function rectToString(v) {
    if (!v) {
        return null;
    }
    return v.left + " " + v.top + " " + v.width + " " + v.height;
}
export function toRect(v) {
    if (v == null) {
        return Rect.empty;
    }
    var size = null;
    if (typeof v == "string") {
        var parts = v.split(" ");
        if (parts.length != 4) {
            parts = v.split(",");
        }
        if (parts.length != 4) {
            return Rect.empty;
        }
        parts[0] = parts[0].trim();
        parts[1] = parts[1].trim();
        parts[2] = parts[2].trim();
        parts[3] = parts[4].trim();
        var left = parseFloat(parts[0]);
        var top_1 = parseFloat(parts[1]);
        var width = parseFloat(parts[2]);
        var height = parseFloat(parts[3]);
        return new Rect(0, left, top_1, width, height);
    }
    else {
        if (v != null) {
            size = new Rect(0, v.left, v.top, v.width, v.height);
        }
    }
    return size;
}
export function brushCollectionToString(v) {
    var bArray = fromBrushCollection(v);
    if (bArray == null) {
        return null;
    }
    return bArray.join(" ");
}
export function toBrushCollection(v) {
    if (v == null) {
        return null;
    }
    var isRGB = true;
    if (typeof v == "string") {
        v = v.trim();
        v = v.split(/[\s,]+(?![^(]*\))/gm);
        for (var i_1 = 0; i_1 < v.length; i_1++) {
            v[i_1] = v[i_1].trim();
        }
    }
    var val = v ? v[0] : null;
    if (typeof val == 'string' && val == 'HSV' || val == 'RGB') {
        if (v[0] == 'HSV') {
            isRGB = false;
        }
        v = v.slice(1);
    }
    var brushCollection = new BrushCollection();
    for (var i = 0; v && i < v.length; i++) {
        var brush = Brush.create(v[i]);
        brushCollection.add(brush);
    }
    return brushCollection;
}
export function fromBrushCollection(v) {
    if (v == null) {
        return null;
    }
    var internalCollection = v;
    var ret = [];
    for (var i = 0; i < internalCollection.count; i++) {
        ret.push(internalCollection.item(i).fill);
    }
    return ret;
}
export function colorCollectionToString(v) {
    var bArray = fromColorCollection(v);
    if (bArray == null) {
        return null;
    }
    return bArray.join(" ");
}
export function toColorCollection(v) {
    if (v == null) {
        return null;
    }
    var isRGB = true;
    if (typeof v == "string") {
        v = v.trim();
        v = v.split(/[\s,]+(?![^(]*\))/gm);
        for (var i_2 = 0; i_2 < v.length; i_2++) {
            v[i_2] = v[i_2].trim();
        }
    }
    var val = v ? v[0] : null;
    if (typeof val == 'string' && val == 'HSV' || val == 'RGB') {
        if (v[0] == 'HSV') {
            isRGB = false;
        }
        v = v.slice(1);
    }
    var colorCollection = new ObservableColorCollection();
    for (var i = 0; v && i < v.length; i++) {
        var color = stringToColor(v[i]);
        colorCollection.add(color);
    }
    return colorCollection;
}
export function fromColorCollection(v) {
    if (v == null) {
        return null;
    }
    var internalCollection = v;
    var ret = [];
    for (var i = 0; i < internalCollection.count; i++) {
        ret.push(internalCollection.item(i).colorString);
    }
    return ret;
}
var CollectionAdapter = /** @class */ (function () {
    function CollectionAdapter(query, target, allList, toTarget, onItemAdded, onItemRemoved, collisionChecker) {
        var _this = this;
        this._manualItems = [];
        this._collisionChecker = null;
        this.actualContent = [];
        this._removedManualKeys = new Set();
        if (collisionChecker) {
            this._collisionChecker = collisionChecker;
        }
        this._query = query;
        this._target = target;
        this._toTarget = toTarget;
        this._allList = allList;
        this._onItemAdded = onItemAdded;
        this._onItemRemoved = onItemRemoved;
        this.syncItems();
        if (this._query.changes) {
            this._query.changes.subscribe(function (v) { return _this.onQueryChanged(v); });
        }
    }
    Object.defineProperty(CollectionAdapter.prototype, "collisionChecker", {
        get: function () {
            return this._collisionChecker;
        },
        set: function (v) {
            this._collisionChecker = v;
        },
        enumerable: true,
        configurable: true
    });
    CollectionAdapter.prototype.updateQuery = function (q) {
        var _this = this;
        this._query = q;
        if (this._query.changes) {
            this._query.changes.subscribe(function (v) { return _this.onQueryChanged(v); });
        }
        this.notifyContentChanged();
    };
    CollectionAdapter.prototype.shiftContentToManual = function (manualCollection, onMoving) {
        var queryArray = null;
        if (this._query.toArray) {
            queryArray = this._query.toArray();
        }
        else {
            queryArray = this._query;
        }
        var item = null;
        var manualSet = new Set();
        if (this.collisionChecker) {
            for (var i = 0; i < this._manualItems.length; i++) {
                item = this._manualItems[i];
                if (item) {
                    var key = this.collisionChecker(item);
                    if (key) {
                        if (!manualSet.has(key)) {
                            manualSet.add(key);
                        }
                    }
                }
            }
        }
        var mapWasEmpty = manualSet.size == 0;
        for (var i = 0; i < queryArray.length; i++) {
            item = queryArray[i];
            if (!this._hasShiftedOnceAlready) {
                this._manualItems.splice(i, 0, item);
                manualCollection.insert(i, item);
                onMoving(item);
            }
            else {
                var key = this.collisionChecker(item);
                if (!key) {
                    this._manualItems.splice(i, 0, item);
                    manualCollection.insert(i, item);
                    onMoving(item);
                }
                else {
                    if (!manualSet.has(key)) {
                        this._manualItems.splice(manualCollection.count, 0, item);
                        manualCollection.insert(manualCollection.count, item);
                        onMoving(item);
                    }
                }
            }
        }
        this.syncItems();
        this._hasShiftedOnceAlready = true;
    };
    CollectionAdapter.prototype.syncItems = function () {
        var targetMap = new Map();
        var queryMap = new Map();
        var manualMap = new Map();
        var item = null;
        for (var i = 0; i < this._allList.length; i++) {
            item = this._allList[i];
            targetMap.set(item, true);
        }
        var queryArray = null;
        if (this._query.toArray) {
            queryArray = this._query.toArray();
        }
        else {
            queryArray = this._query;
        }
        this.actualContent = queryArray;
        if (this.collisionChecker) {
            queryArray = queryArray.slice(0);
            this.actualContent = queryArray;
            var manualKeySet = new Set();
            for (var i_3 = 0; i_3 < this._manualItems.length; i_3++) {
                item = this._manualItems[i_3];
                if (item) {
                    var key = this.collisionChecker(item);
                    if (key) {
                        if (!manualKeySet.has(key)) {
                            manualKeySet.add(key);
                        }
                    }
                }
            }
            for (var i_4 = queryArray.length - 1; i_4 >= 0; i_4--) {
                item = queryArray[i_4];
                if (!item) {
                    queryArray.splice(i_4, 1);
                }
                else {
                    var key = this.collisionChecker(item);
                    if (key && (manualKeySet.has(key) || this._removedManualKeys.has(key))) {
                        queryArray.splice(i_4, 1);
                    }
                }
            }
        }
        for (var i = 0; i < queryArray.length; i++) {
            item = queryArray[i];
            queryMap.set(item, true);
        }
        for (var i = 0; i < this._manualItems.length; i++) {
            item = this._manualItems[i];
            manualMap.set(item, true);
        }
        for (var i = this._allList.length - 1; i >= 0; i--) {
            item = this._allList[i];
            if (!queryMap.has(item) && !manualMap.has(item)) {
                this._allList.splice(i, 1);
                this._target.removeAt(i);
                this._onItemRemoved(item);
            }
        }
        var ind = 0;
        var ins = 0;
        var insItem = null;
        var maxLen = queryArray.length + this._manualItems.length;
        while (ind < maxLen) {
            if (ind < queryArray.length) {
                insItem = queryArray[ind];
            }
            else if ((ind - queryArray.length) < this._manualItems.length) {
                insItem = this._manualItems[ind - queryArray.length];
            }
            else {
                break;
            }
            if (ins < this._allList.length) {
                item = this._allList[ins];
                if (item === insItem) {
                    ins++;
                    ind++;
                }
                else {
                    this._allList.splice(ins, 0, insItem);
                    this._target.insert(ins, this._toTarget(insItem));
                    this._onItemAdded(insItem);
                    ind++;
                    ins++;
                }
            }
            else {
                this._allList.push(insItem);
                this._target.add(this._toTarget(insItem));
                this._onItemAdded(insItem);
                ind++;
                ins++;
            }
        }
    };
    CollectionAdapter.prototype.notifyContentChanged = function () {
        this.onQueryChanged(this._query);
    };
    CollectionAdapter.prototype.onQueryChanged = function (currentItems) {
        this.syncItems();
    };
    CollectionAdapter.prototype.addManualItem = function (item) {
        if (this.collisionChecker) {
            var key = this.collisionChecker(item);
            if (key) {
                if (this._removedManualKeys.has(key)) {
                    this._removedManualKeys.delete(key);
                }
            }
        }
        this._manualItems.push(item);
        this.syncItems();
    };
    CollectionAdapter.prototype.removeManualItem = function (item) {
        var ind = this._manualItems.indexOf(item);
        if (ind >= 0) {
            if (this.collisionChecker) {
                var key = this.collisionChecker(item);
                if (key) {
                    if (!this._removedManualKeys.has(key)) {
                        this._removedManualKeys.add(key);
                    }
                }
            }
            this._manualItems.splice(ind, 1);
            this.syncItems();
            return true;
        }
        return false;
    };
    CollectionAdapter.prototype.removeManualItemAt = function (index) {
        if (index < this._manualItems.length) {
            var item = this._manualItems[index];
            if (this.collisionChecker) {
                var key = this.collisionChecker(item);
                if (key) {
                    if (!this._removedManualKeys.has(key)) {
                        this._removedManualKeys.add(key);
                    }
                }
            }
        }
        this._manualItems.splice(index, 1);
        this.syncItems();
    };
    CollectionAdapter.prototype.clearManualItems = function () {
        if (this.collisionChecker) {
            this._removedManualKeys.clear();
        }
        this._manualItems.length = 0;
        this.syncItems();
    };
    CollectionAdapter.prototype.insertManualItem = function (index, item) {
        if (this.collisionChecker) {
            var key = this.collisionChecker(item);
            if (key) {
                if (this._removedManualKeys.has(key)) {
                    this._removedManualKeys.delete(key);
                }
            }
        }
        this._manualItems.splice(index, 0, item);
        this.syncItems();
    };
    return CollectionAdapter;
}());
export { CollectionAdapter };
export function addPaletteThemeEntry(theme, clss, background, border, foreground) {
    if (theme[clss] === undefined) {
        theme[clss] = {};
    }
    if (background !== null) {
        theme[clss]["background-color"] = background;
    }
    if (border !== null && border !== undefined) {
        theme[clss]["border-top-color"] = border;
        theme[clss]["border-left-color"] = border;
        theme[clss]["border-right-color"] = border;
        theme[clss]["border-bottom-color"] = border;
    }
    if (foreground !== null && foreground !== undefined) {
        theme[clss]["color"] = foreground;
    }
}
export function addTextThemeEntry(theme, clss, fontFamily, fontSize, textColor, leftMargin, topMargin, rightMargin, bottomMargin, horizontalAlignment, verticalAlignment) {
    if (theme[clss] === undefined) {
        theme[clss] = {};
    }
    var t = theme[clss];
    if (fontFamily !== null && fontFamily !== undefined) {
        t["font-family"] = fontFamily;
        t["font-weight"] = "";
        t["font-style"] = "";
        t["font-variant"] = "";
        t["line-height"] = "";
    }
    if (fontSize !== null && fontSize !== undefined) {
        t["font-size"] = fontSize;
        t["font-weight"] = "";
        t["font-style"] = "";
        t["font-variant"] = "";
        t["line-height"] = "";
    }
    if (textColor !== null && textColor !== undefined) {
        t["color"] = textColor;
    }
    if (leftMargin !== null && leftMargin !== undefined) {
        t["margin-left"] = leftMargin;
    }
    if (topMargin !== null && topMargin !== undefined) {
        t["margin-top"] = topMargin;
    }
    if (rightMargin !== null && rightMargin !== undefined) {
        t["margin-right"] = rightMargin;
    }
    if (bottomMargin !== null && bottomMargin !== undefined) {
        t["margin-bottom"] = bottomMargin;
    }
    if (horizontalAlignment !== null && horizontalAlignment !== undefined) {
        t["text-align"] = horizontalAlignment;
    }
    if (verticalAlignment !== null && verticalAlignment !== undefined) {
        t["vertical-align"] = verticalAlignment;
    }
}
function isStylableProperty(name) {
    // using lower case to prevent issGrues with matching case of properties (e.g. chart.brushes)
    var propName = name.toLowerCase();
    // skip non-stylable properties
    if (propName == "height" ||
        propName == "width") {
        return false;
    }
    // check for all stylable properties
    if (stringEndsWith(propName, "height") || // grid.rowHeight
        stringEndsWith(propName, "width") || // zoomSlider.HigherThumbWidth
        stringEndsWith(propName, "width") || // zoomSlider.HigherCalloutOutline
        stringEndsWith(propName, "inset") || // zoomSlider.EndInset
        stringEndsWith(propName, "orientation") || // zoomSlider.Orientation
        stringEndsWith(propName, "duration") || // zoomSlider.PanTransitionDuration
        stringEndsWith(propName, "outline") || // zoomSlider.BarOutline
        stringEndsWith(propName, "brush") ||
        stringEndsWith(propName, "background") ||
        stringEndsWith(propName, "opacity") ||
        stringEndsWith(propName, "textstyle") ||
        stringEndsWith(propName, "brushes") || // chart.brushes  || chart.negativeBrushes
        stringEndsWith(propName, "outlines") || // chart.outlines || chart.negativeOutlines
        stringEndsWith(propName, "thickness") || // chart.AxisStrokeThickness
        stringEndsWith(propName, "colors") || //
        stringEndsWith(propName, "color") || // chart.AxisLabelTextColor
        stringEndsWith(propName, "margin") || // chart.AxisLabelTopMargin
        stringEndsWith(propName, "location") || // chart.AxisLabelLocation
        stringEndsWith(propName, "style") || // chart.AxisLabelTextStyle
        stringEndsWith(propName, "alignment") || // chart.AxisLabelHorizontalAlignment
        stringEndsWith(propName, "visibility") || // chart.AxisLabelVisibility
        stringEndsWith(propName, "extent") || // chart.AxisExtent
        stringEndsWith(propName, "length") || // chart.AxisTickLength
        stringEndsWith(propName, "strip") || // chart.AxisStrip
        stringEndsWith(propName, "stroke") || // chart.AxisStroke
        stringEndsWith(propName, "fill") || // piechart.OthersCategoryFill
        stringEndsWith(propName, "visible")) { // chart.isToolbarVisible
        return true;
    }
    return false;
}
function resolveUnits(val) {
    // TODO convert "em, px, pt, cm, in" units to "px"?
    // https://www.w3.org/Style/Examples/007/units.en.html
    var value = val.toLowerCase();
    if (stringEndsWith(value, "px")) { // 20px
        value = value.replace("px", "");
        value = value.replace(" ", "");
    }
    return value;
}
export function toSpinal(value) {
    if (value == null) {
        return null;
    }
    var output = [];
    var upperRun = 0;
    for (var i = 0; i < value.length; i++) {
        var curr = value[i];
        var upperChar = curr.toUpperCase();
        var lowerChar = curr.toLowerCase();
        var charIsNewWord = (upperRun == 0 && output.length > 0);
        var previousCharWasNewWord = (upperRun > 1);
        if (upperChar == curr) {
            if (charIsNewWord) {
                output.push('-');
            }
            upperRun++;
        }
        else if (lowerChar == curr) {
            if (previousCharWasNewWord) {
                output.splice(output.length - 1, 0, '-');
            }
            upperRun = 0;
        }
        else {
            upperRun = 0;
        }
        output.push(lowerChar);
    }
    var sb = "";
    for (var i = 0; i < output.length; i++) {
        sb += output[i];
    }
    return sb;
}
export function fromSpinal(value) {
    if (value == null) {
        return value;
    }
    var parts = value.split('-');
    for (var j = 1; j < parts.length; j++) {
        parts[j] = parts[j].substr(0, 1).toUpperCase() + parts[j].substr(1);
    }
    var ret = "";
    for (var j = 0; j < parts.length; j++) {
        ret += parts[j];
    }
    return ret;
}
function toCssPropertyName(value) {
    var sb = toSpinal(value);
    return sb;
}
// get all property names for specified component and its base classes
export function getAllPropertyNames(comp) {
    var members = [];
    while (comp = (comp.prototype || Object.getPrototypeOf(comp))) {
        if (comp == HTMLElement.prototype) {
            break;
        }
        var props = Object.getOwnPropertyNames(comp.constructor.prototype);
        for (var i = 0; i < props.length; i++) {
            members.push(props[i]);
        }
    }
    return members;
}
var stylableMap = new Map();
export function initializePropertiesFromCss(ele, comp, cssPrefix, ignoredProperties, prefixRequired, additionalPrefixes) {
    var e_1, _a;
    var styles = getComputedStyle(ele);
    var props = getAllPropertyNames(comp);
    var filtered = false;
    var stylableProperties = [];
    if (stylableMap.has(comp.prototype || Object.getPrototypeOf(comp))) {
        stylableProperties = stylableMap.get(comp.prototype || Object.getPrototypeOf(comp));
        props = stylableProperties;
        filtered = true;
    }
    var compName = comp.constructor.name;
    try {
        for (var props_1 = tslib_1.__values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
            var prop = props_1_1.value;
            var cssPropName = null;
            if (filtered) {
                cssPropName = prop[1];
                prop = prop[0];
            }
            if (ignoredProperties && ignoredProperties.has(prop)) {
                if (!filtered && isStylableProperty(prop)) {
                    var cssName = toCssPropertyName(prop);
                    stylableProperties.push([prop, cssName]);
                }
                continue;
            }
            if (filtered || isStylableProperty(prop)) {
                var cssName = "";
                if (cssPropName) {
                    cssName = cssPropName;
                }
                else {
                    cssName = toCssPropertyName(prop);
                }
                // check if custom property is set with a prefix
                var cssValue = styles.getPropertyValue("--" + cssPrefix + cssName);
                if (cssValue && cssValue.length && cssValue.length > 0) {
                    comp[prop] = resolveUnits(cssValue.trim());
                }
                if (additionalPrefixes) {
                    for (var i = 0; i < additionalPrefixes.length; i++) {
                        var p = additionalPrefixes[i];
                        cssValue = styles.getPropertyValue("--" + p + cssName);
                        if (cssValue && cssValue.length && cssValue.length > 0) {
                            comp[prop] = resolveUnits(cssValue.trim());
                        }
                    }
                }
                if (!prefixRequired) {
                    // check if custom property is set without a prefix
                    cssValue = styles.getPropertyValue("--" + cssName);
                    if (cssValue && cssValue.length && cssValue.length > 0) {
                        comp[prop] = resolveUnits(cssValue.trim());
                    }
                }
                if (!filtered) {
                    stylableProperties.push([prop, cssName]);
                }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    if (!filtered) {
        stylableMap.set(comp.prototype || Object.getPrototypeOf(comp), stylableProperties);
    }
}
export function addBrushPaletteThemeEntry(theme, clss, backgrounds, outlines) {
    if (outlines == null) {
        outlines = backgrounds;
    }
    var t = theme;
    for (var i = 0; i < Math.max(backgrounds.length, outlines.length); i++) {
        var pName = clss + "-" + (i + 1);
        if (t[pName] === undefined) {
            t[pName] = {};
        }
        if (backgrounds[i] !== undefined) {
            t[pName]["background-color"] = backgrounds[i];
        }
        if (outlines[i] !== undefined) {
            t[pName]["border-top-color"] = outlines[i];
            t[pName]["border-left-color"] = outlines[i];
            t[pName]["border-right-color"] = outlines[i];
            t[pName]["border-bottom-color"] = outlines[i];
        }
    }
}
export function getModifiedProps(prevProps, nextProps) {
    var e_2, _a;
    var mod = {};
    try {
        for (var _b = tslib_1.__values(Object.keys(nextProps)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var p = _c.value;
            if (prevProps[p] == undefined ||
                prevProps[p] !== nextProps[p]) {
                mod[p] = nextProps[p];
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return mod;
}
export function isValidProp(owner, prop) {
    while (owner = (owner.prototype || Object.getPrototypeOf(owner))) {
        if (owner == HTMLElement.prototype) {
            break;
        }
        if (owner.hasOwnProperty(prop)) {
            return true;
        }
    }
    return false;
}
var NamePatcher = /** @class */ (function () {
    function NamePatcher() {
    }
    NamePatcher.ensureStylablePatched = function (prot) {
        this.ensurePatched(prot, isStylableProperty);
    };
    NamePatcher.ensurePatched = function (prot, nameFilter) {
        var e_3, _a;
        if (!prot) {
            return;
        }
        if (prot === Object.prototype || prot === HTMLElement.prototype) {
            return;
        }
        if (this._patched.has(prot)) {
            return;
        }
        this._patched.add(prot);
        var _loop_1 = function (key) {
            if (nameFilter && !nameFilter(key)) {
                return "continue";
            }
            var p = Object.getOwnPropertyDescriptor(prot, key);
            if (!p) {
                return "continue";
            }
            var set = p.set;
            var name_1 = key;
            if (set !== undefined) {
                var newSet = function (v) {
                    this.__p = name_1;
                    if (this.__m) {
                        this.__m(name_1);
                    }
                    set.call(this, v);
                };
                Object.defineProperty(prot, key, tslib_1.__assign({}, p, { set: newSet }));
            }
        };
        try {
            for (var _b = tslib_1.__values(Object.keys(prot)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                _loop_1(key);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        var base = Object.getPrototypeOf(prot);
        if (base) {
            this.ensurePatched(base, nameFilter);
        }
    };
    NamePatcher._patched = new Set();
    return NamePatcher;
}());
export { NamePatcher };
//# sourceMappingURL=componentUtil.js.map