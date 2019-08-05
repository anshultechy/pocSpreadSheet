/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
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
    let brush = Brush.create(v);
    return brush;
}
export function ensureEnum($t, v) {
    if (v == null) {
        return 0;
    }
    if (typeof v == "number") {
        let n = v;
        if (EnumUtil.getName($t, n) == undefined) {
            return 0;
        }
        return v;
    }
    let ret = typeGetValue(EnumUtil.parse($t, v, true));
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
    let brush = Brush.create(v);
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
    let size = null;
    if (typeof v == "string") {
        v = v.trim();
        let parts = v.split(" ");
        if (parts.length != 2) {
            parts = v.split(",");
        }
        if (parts.length != 2) {
            return Size.empty;
        }
        parts[0] = parts[0].trim();
        parts[1] = parts[1].trim();
        let width = parseFloat(parts[0]);
        let height = parseFloat(parts[1]);
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
    let point = null;
    if (typeof v == "string") {
        v = v.trim();
        let parts = v.split(" ");
        if (parts.length != 2) {
            parts = v.split(",");
        }
        if (parts.length != 2) {
            return PointUtil.createXY(NaN, NaN);
        }
        parts[0] = parts[0].trim();
        parts[1] = parts[1].trim();
        let x = parseFloat(parts[0]);
        let y = parseFloat(parts[1]);
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
    let size = null;
    if (typeof v == "string") {
        let parts = v.split(" ");
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
        let left = parseFloat(parts[0]);
        let top = parseFloat(parts[1]);
        let width = parseFloat(parts[2]);
        let height = parseFloat(parts[3]);
        return new Rect(0, left, top, width, height);
    }
    else {
        if (v != null) {
            size = new Rect(0, v.left, v.top, v.width, v.height);
        }
    }
    return size;
}
export function brushCollectionToString(v) {
    let bArray = fromBrushCollection(v);
    if (bArray == null) {
        return null;
    }
    return bArray.join(" ");
}
export function toBrushCollection(v) {
    if (v == null) {
        return null;
    }
    let isRGB = true;
    if (typeof v == "string") {
        v = v.trim();
        v = v.split(/[\s,]+(?![^(]*\))/gm);
        for (let i = 0; i < v.length; i++) {
            v[i] = v[i].trim();
        }
    }
    let val = v ? v[0] : null;
    if (typeof val == 'string' && val == 'HSV' || val == 'RGB') {
        if (v[0] == 'HSV') {
            isRGB = false;
        }
        v = v.slice(1);
    }
    let brushCollection = new BrushCollection();
    for (var i = 0; v && i < v.length; i++) {
        let brush = Brush.create(v[i]);
        brushCollection.add(brush);
    }
    return brushCollection;
}
export function fromBrushCollection(v) {
    if (v == null) {
        return null;
    }
    let internalCollection = v;
    let ret = [];
    for (let i = 0; i < internalCollection.count; i++) {
        ret.push(internalCollection.item(i).fill);
    }
    return ret;
}
export function colorCollectionToString(v) {
    let bArray = fromColorCollection(v);
    if (bArray == null) {
        return null;
    }
    return bArray.join(" ");
}
export function toColorCollection(v) {
    if (v == null) {
        return null;
    }
    let isRGB = true;
    if (typeof v == "string") {
        v = v.trim();
        v = v.split(/[\s,]+(?![^(]*\))/gm);
        for (let i = 0; i < v.length; i++) {
            v[i] = v[i].trim();
        }
    }
    let val = v ? v[0] : null;
    if (typeof val == 'string' && val == 'HSV' || val == 'RGB') {
        if (v[0] == 'HSV') {
            isRGB = false;
        }
        v = v.slice(1);
    }
    let colorCollection = new ObservableColorCollection();
    for (var i = 0; v && i < v.length; i++) {
        let color = stringToColor(v[i]);
        colorCollection.add(color);
    }
    return colorCollection;
}
export function fromColorCollection(v) {
    if (v == null) {
        return null;
    }
    let internalCollection = v;
    let ret = [];
    for (let i = 0; i < internalCollection.count; i++) {
        ret.push(internalCollection.item(i).colorString);
    }
    return ret;
}
export class CollectionAdapter {
    constructor(query, target, allList, toTarget, onItemAdded, onItemRemoved, collisionChecker) {
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
            this._query.changes.subscribe((v) => this.onQueryChanged(v));
        }
    }
    get collisionChecker() {
        return this._collisionChecker;
    }
    set collisionChecker(v) {
        this._collisionChecker = v;
    }
    updateQuery(q) {
        this._query = q;
        if (this._query.changes) {
            this._query.changes.subscribe((v) => this.onQueryChanged(v));
        }
        this.notifyContentChanged();
    }
    shiftContentToManual(manualCollection, onMoving) {
        let queryArray = null;
        if (this._query.toArray) {
            queryArray = this._query.toArray();
        }
        else {
            queryArray = this._query;
        }
        let item = null;
        let manualSet = new Set();
        if (this.collisionChecker) {
            for (var i = 0; i < this._manualItems.length; i++) {
                item = this._manualItems[i];
                if (item) {
                    let key = this.collisionChecker(item);
                    if (key) {
                        if (!manualSet.has(key)) {
                            manualSet.add(key);
                        }
                    }
                }
            }
        }
        let mapWasEmpty = manualSet.size == 0;
        for (var i = 0; i < queryArray.length; i++) {
            item = queryArray[i];
            if (!this._hasShiftedOnceAlready) {
                this._manualItems.splice(i, 0, item);
                manualCollection.insert(i, item);
                onMoving(item);
            }
            else {
                let key = this.collisionChecker(item);
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
    }
    syncItems() {
        let targetMap = new Map();
        let queryMap = new Map();
        let manualMap = new Map();
        let item = null;
        for (var i = 0; i < this._allList.length; i++) {
            item = this._allList[i];
            targetMap.set(item, true);
        }
        let queryArray = null;
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
            let manualKeySet = new Set();
            for (let i = 0; i < this._manualItems.length; i++) {
                item = this._manualItems[i];
                if (item) {
                    let key = this.collisionChecker(item);
                    if (key) {
                        if (!manualKeySet.has(key)) {
                            manualKeySet.add(key);
                        }
                    }
                }
            }
            for (let i = queryArray.length - 1; i >= 0; i--) {
                item = queryArray[i];
                if (!item) {
                    queryArray.splice(i, 1);
                }
                else {
                    let key = this.collisionChecker(item);
                    if (key && (manualKeySet.has(key) || this._removedManualKeys.has(key))) {
                        queryArray.splice(i, 1);
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
        let ind = 0;
        let ins = 0;
        let insItem = null;
        let maxLen = queryArray.length + this._manualItems.length;
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
    }
    notifyContentChanged() {
        this.onQueryChanged(this._query);
    }
    onQueryChanged(currentItems) {
        this.syncItems();
    }
    addManualItem(item) {
        if (this.collisionChecker) {
            let key = this.collisionChecker(item);
            if (key) {
                if (this._removedManualKeys.has(key)) {
                    this._removedManualKeys.delete(key);
                }
            }
        }
        this._manualItems.push(item);
        this.syncItems();
    }
    removeManualItem(item) {
        let ind = this._manualItems.indexOf(item);
        if (ind >= 0) {
            if (this.collisionChecker) {
                let key = this.collisionChecker(item);
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
    }
    removeManualItemAt(index) {
        if (index < this._manualItems.length) {
            let item = this._manualItems[index];
            if (this.collisionChecker) {
                let key = this.collisionChecker(item);
                if (key) {
                    if (!this._removedManualKeys.has(key)) {
                        this._removedManualKeys.add(key);
                    }
                }
            }
        }
        this._manualItems.splice(index, 1);
        this.syncItems();
    }
    clearManualItems() {
        if (this.collisionChecker) {
            this._removedManualKeys.clear();
        }
        this._manualItems.length = 0;
        this.syncItems();
    }
    insertManualItem(index, item) {
        if (this.collisionChecker) {
            let key = this.collisionChecker(item);
            if (key) {
                if (this._removedManualKeys.has(key)) {
                    this._removedManualKeys.delete(key);
                }
            }
        }
        this._manualItems.splice(index, 0, item);
        this.syncItems();
    }
}
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
    let t = theme[clss];
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
    let propName = name.toLowerCase();
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
    let value = val.toLowerCase();
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
    let output = [];
    let upperRun = 0;
    for (let i = 0; i < value.length; i++) {
        var curr = value[i];
        var upperChar = curr.toUpperCase();
        var lowerChar = curr.toLowerCase();
        let charIsNewWord = (upperRun == 0 && output.length > 0);
        let previousCharWasNewWord = (upperRun > 1);
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
    let sb = "";
    for (let i = 0; i < output.length; i++) {
        sb += output[i];
    }
    return sb;
}
export function fromSpinal(value) {
    if (value == null) {
        return value;
    }
    let parts = value.split('-');
    for (let j = 1; j < parts.length; j++) {
        parts[j] = parts[j].substr(0, 1).toUpperCase() + parts[j].substr(1);
    }
    let ret = "";
    for (let j = 0; j < parts.length; j++) {
        ret += parts[j];
    }
    return ret;
}
function toCssPropertyName(value) {
    let sb = toSpinal(value);
    return sb;
}
// get all property names for specified component and its base classes
export function getAllPropertyNames(comp) {
    let members = [];
    while (comp = (comp.prototype || Object.getPrototypeOf(comp))) {
        if (comp == HTMLElement.prototype) {
            break;
        }
        let props = Object.getOwnPropertyNames(comp.constructor.prototype);
        for (let i = 0; i < props.length; i++) {
            members.push(props[i]);
        }
    }
    return members;
}
let stylableMap = new Map();
export function initializePropertiesFromCss(ele, comp, cssPrefix, ignoredProperties, prefixRequired, additionalPrefixes) {
    let styles = getComputedStyle(ele);
    let props = getAllPropertyNames(comp);
    let filtered = false;
    let stylableProperties = [];
    if (stylableMap.has(comp.prototype || Object.getPrototypeOf(comp))) {
        stylableProperties = stylableMap.get(comp.prototype || Object.getPrototypeOf(comp));
        props = stylableProperties;
        filtered = true;
    }
    let compName = comp.constructor.name;
    for (let prop of props) {
        let cssPropName = null;
        if (filtered) {
            cssPropName = prop[1];
            prop = prop[0];
        }
        if (ignoredProperties && ignoredProperties.has(prop)) {
            if (!filtered && isStylableProperty(prop)) {
                let cssName = toCssPropertyName(prop);
                stylableProperties.push([prop, cssName]);
            }
            continue;
        }
        if (filtered || isStylableProperty(prop)) {
            let cssName = "";
            if (cssPropName) {
                cssName = cssPropName;
            }
            else {
                cssName = toCssPropertyName(prop);
            }
            // check if custom property is set with a prefix
            let cssValue = styles.getPropertyValue("--" + cssPrefix + cssName);
            if (cssValue && cssValue.length && cssValue.length > 0) {
                comp[prop] = resolveUnits(cssValue.trim());
            }
            if (additionalPrefixes) {
                for (let i = 0; i < additionalPrefixes.length; i++) {
                    let p = additionalPrefixes[i];
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
    if (!filtered) {
        stylableMap.set(comp.prototype || Object.getPrototypeOf(comp), stylableProperties);
    }
}
export function addBrushPaletteThemeEntry(theme, clss, backgrounds, outlines) {
    if (outlines == null) {
        outlines = backgrounds;
    }
    let t = theme;
    for (let i = 0; i < Math.max(backgrounds.length, outlines.length); i++) {
        let pName = clss + "-" + (i + 1);
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
    let mod = {};
    for (let p of Object.keys(nextProps)) {
        if (prevProps[p] == undefined ||
            prevProps[p] !== nextProps[p]) {
            mod[p] = nextProps[p];
        }
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
export class NamePatcher {
    static ensureStylablePatched(prot) {
        this.ensurePatched(prot, isStylableProperty);
    }
    static ensurePatched(prot, nameFilter) {
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
        for (const key of Object.keys(prot)) {
            if (nameFilter && !nameFilter(key)) {
                continue;
            }
            let p = Object.getOwnPropertyDescriptor(prot, key);
            if (!p) {
                continue;
            }
            const set = p.set;
            let name = key;
            if (set !== undefined) {
                let newSet = function (v) {
                    this.__p = name;
                    if (this.__m) {
                        this.__m(name);
                    }
                    set.call(this, v);
                };
                Object.defineProperty(prot, key, Object.assign({}, p, { set: newSet }));
            }
        }
        let base = Object.getPrototypeOf(prot);
        if (base) {
            this.ensurePatched(base, nameFilter);
        }
    }
}
NamePatcher._patched = new Set();
//# sourceMappingURL=componentUtil.js.map