/*!
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
let _typeIdentifierCache = {};
let _nextTypeIdentifier = 0;
// interface Function {
//     $type?: Type;
// }
export function getInstanceType(obj) {
    if (obj.$type) {
        return obj.$type;
    }
    else if (typeof obj === 'number') {
        return Number_$type;
    }
    else if (typeof obj === 'string') {
        return String_$type;
    }
    else if (typeof obj === 'boolean') {
        return Boolean_$type;
    }
    else if (obj instanceof Date) {
        return Date_$type;
    }
    return Base.prototype.$type;
}
export class Base {
    constructor() {
    }
    equals(other) {
        return this === other;
    }
    static equalsStatic(a, b) {
        var aIsNull = (a == null) || (!!a.isNullable && !a.hasValue);
        var bIsNull = (b == null) || (!!b.isNullable && !b.hasValue);
        if (aIsNull || bIsNull) {
            return aIsNull && bIsNull;
        }
        if (a.equals) {
            return a.equals(b);
        }
        if (b.equals) {
            return b.equals(a);
        }
        if (Number.isNaN(a) && Number.isNaN(b)) {
            return true;
        }
        if (a instanceof Date) {
            return b instanceof Date && +a === +b;
        }
        return a == b && typeof a == typeof b;
    }
    static equalsSimple(item1, item2) {
        return item1 == item2;
    }
    ;
    static compareSimple(item1, item2) {
        if (item1 == item2) {
            return 0;
        }
        if (item1 < item2) {
            return -1;
        }
        return 1;
    }
    ;
    static compare(item1, item2) {
        if (item1 === item2) {
            return 0;
        }
        var xComparable = typeCast(IComparable_$type, item1);
        if (xComparable !== null && xComparable.compareToObject) {
            return xComparable.compareToObject(item2);
        }
        var yComparable = typeCast(IComparable_$type, item2);
        if (yComparable !== null && yComparable.compareToObject) {
            return -yComparable.compareToObject(item1);
        }
        return Base.compareSimple(item1, item2);
    }
    ;
    getHashCode() {
        if (this.$hashCode === undefined) {
            this.$hashCode = Base.nextHashCode++;
        }
        return this.$hashCode;
    }
    static getHashCodeStatic(obj) {
        if (obj.getHashCode) {
            return obj.getHashCode();
        }
        if (obj.$hashCode !== undefined) {
            return obj.$hashCode;
        }
        if (!(typeof obj == "object")) {
            return Type.getPrimitiveHashCode(obj);
        }
        else {
            obj.$hashCode = Base.nextHashCode++;
            return obj.$hashCode;
        }
    }
    memberwiseClone() {
        class Cons {
        }
        Cons.prototype = this.$type.InstanceConstructor.prototype;
        let clone = new Cons();
        for (var prop in this) {
            if (this.hasOwnProperty(prop)) {
                clone[prop] = this[prop];
            }
        }
        return clone;
    }
    static referenceEquals(a, b) {
        return a === b || (a == null && b == null);
    }
    static getArrayOfValues(obj) {
        var result = [];
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                result.push(obj[i]);
            }
        }
        return result;
    }
    static getArrayOfProperties(obj) {
        var result = [];
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                result.push(i);
            }
        }
        return result;
    }
    ;
}
Base.nextHashCode = 0;
export class Type extends Base {
    constructor(instanceConstructor, identifier, baseType = Base.prototype.$type, interfaces = null, staticInitializer = null) {
        super();
        this.specializationCache = null;
        this._staticInitializer = null;
        this.name = null;
        this.typeArguments = null;
        this.baseType = null;
        this.interfaces = null;
        this.isEnumType = false;
        this._isGenericType = undefined;
        this._staticFields = null;
        this.isNullable = false;
        this._$nullNullable = null;
        this.enumInfo = null;
        this.specializationCache = {};
        this._staticInitializer = staticInitializer;
        this._fullName = identifier;
        this.name = identifier;
        this.InstanceConstructor = instanceConstructor;
        var lastDotIndex = this.name.lastIndexOf(".");
        if (lastDotIndex >= 0) {
            this.name = this.name.substr(lastDotIndex + 1);
        }
        this.typeArguments = null;
        this.baseType = null;
        this.interfaces = null;
        if (baseType) {
            this.baseType = baseType;
        }
        if (interfaces) {
            this.interfaces = interfaces;
        }
        if (_typeIdentifierCache[identifier]) {
            this.identifier = _typeIdentifierCache[identifier];
        }
        else {
            this.identifier = _nextTypeIdentifier++;
            _typeIdentifierCache[identifier] = this.identifier;
        }
        // rather than always evaluating a function on a type to see if it is an enum
        // we can just cache it once on the type
        // if (baseType && Enum && baseType == Enum.prototype.$type) {
        //     this.isEnumType = true;
        // }
    }
    get typeName() {
        return this.name;
    }
    get fullName() {
        return this._fullName;
    }
    getSpecId(types) {
        if (types.length === 1) {
            if (!types[0]) {
                return "undef";
            }
            else if (types[0] === -1) {
                return undefined;
            }
            else if (!types[0].typeName) {
                return types[0].toString();
            }
            else if (types[0].stringId) {
                return types[0].stringId;
            }
            else {
                return types[0].identifier.toString();
            }
        }
        var ret = "";
        for (var i = 0; i < types.length; i++) {
            var type = types[i];
            if (!type) {
                ret += "undef";
            }
            else if (type == -1) {
                return undefined;
            }
            else if (!type.typeName) {
                ret += type.toString();
            }
            else if (type.stringId) {
                ret += type.stringId;
            }
            else {
                ret += type.identifier.toString();
            }
        }
        return ret;
    }
    get isGenericType() {
        if (this._isGenericType === undefined) {
            this._isGenericType = this.name.indexOf("$") >= 0;
        }
        return this._isGenericType;
    }
    get isGenericTypeDefinition() {
        return this.typeArguments === null && this.isGenericType;
    }
    get genericTypeArguments() {
        return this.typeArguments;
    }
    getStaticFields(type) {
        if (type === undefined) {
            type = this;
        }
        var t = this;
        while (t != null) {
            if (t === type || t._fullName == type._fullName) {
                if (t._staticFields == null && t._staticInitializer) {
                    t._staticFields = {};
                    t._staticInitializer.apply(t._staticFields, t.typeArguments);
                }
                return t._staticFields;
            }
            t = t.baseType;
        }
        return null;
    }
    initSelfReferences(replacement) {
        var i, j;
        if (replacement) {
            if (this.typeArguments) {
                var updateCache = false;
                for (j = 0; j < this.typeArguments.length; j++) {
                    var typeArg = this.typeArguments[j];
                    if (typeArg == -1) {
                        updateCache = true;
                        this.typeArguments[j] = replacement;
                    }
                    else if (typeArg &&
                        typeArg instanceof Type &&
                        typeArg.initSelfReferences) {
                        typeArg.initSelfReferences(replacement);
                    }
                }
                if (updateCache) {
                    var specId = this.getSpecId(this.typeArguments);
                    var ret = this.specializationCache[specId];
                    if (!ret) {
                        this.specializationCache[specId] = this;
                    }
                }
            }
        }
        else {
            if (this.baseType) {
                this.baseType.initSelfReferences(this);
            }
            if (this.interfaces) {
                for (i = 0; i < this.interfaces.length; i++) {
                    this.interfaces[i].initSelfReferences(this);
                }
            }
        }
        return this;
    }
    specialize(...rest) {
        var i;
        if (!this.isGenericType) {
            return this;
        }
        var specId = this.getSpecId(Array.from(arguments));
        var ret = this.specializationCache[specId];
        if (ret) {
            return ret;
        }
        ret = new Type(this.InstanceConstructor, this._fullName, this.baseType, this.interfaces, this._staticInitializer);
        ret.specializationCache = this.specializationCache;
        var placeholders = this.typeArguments;
        var hasPlaceholders = false;
        // Make sure the placeholders are actually numbers. If they are types, we are re-specializing an
        // already specialized type.
        if (placeholders && placeholders.length) {
            /* going back to how it used to be. we shouldn't assume that the number/order of the arguments
                relates to the typearguments. this may be an interface that has its type information already
                and either has placeholders or is a closed type
            // you can have a mixed bag where some are placeholders and others are not and the
            // placeholder doesn't have to be the first slot
            for (i = 0; i < placeholders.length; i++) {
                if (isFinite(placeholders[ i ])) {
                    hasPlaceholders = true;
                    break;
                }
            }*/
            hasPlaceholders = true;
        }
        ret.typeArguments = [];
        if (hasPlaceholders) {
            for (i = 0; i < placeholders.length; i++) {
                // if the argument being provided is a placeholder index and we already have
                // a placeholder then keep the index we have. otherwise we're taking the index
                // of the parent type
                if (typeof placeholders[i] === "number" &&
                    isFinite(placeholders[i]) && !isFinite(arguments[placeholders[i]])) {
                    ret.typeArguments[i] = arguments[placeholders[i]];
                }
                else {
                    ret.typeArguments[i] = placeholders[i];
                }
            }
        }
        else {
            for (i = 0; i < arguments.length; i++) {
                ret.typeArguments[i] = arguments[i];
            }
        }
        // since the placeholder indexes for the basetype and interfaces implemented are based
        // on the order of the type arguments for the defining types we should pass its typeargs
        // and not the outermost type's type arguments which may be different in number and order
        // than the base type of the base types and interfaces implemented
        if (this.baseType && this.baseType.typeArguments) {
            ret.baseType = this.specialize.apply(this.baseType, ret.typeArguments);
        }
        if (this.interfaces) {
            ret.interfaces = [];
            for (i = 0; i < this.interfaces.length; i++) {
                ret.interfaces[i] = this.specialize.apply(this.interfaces[i], ret.typeArguments);
            }
        }
        // rather than doing this check in various places we could just cache a field on the type
        if (this._fullName == "Nullable$1" && ret.typeArguments.length == 1) {
            ret.isNullable = true;
        }
        // if this was a self referencing type (e.g. IEquatable<Int32> for Int32 then we won't have the
        // specId yet because we don't know the type argument. we'll update the cache when we update
        // the self references. otherwise other types that use self references (but for a different type)
        // will get and use the wrong type arguments
        if (specId) {
            this.specializationCache[specId] = ret;
            ret.stringId = ret.generateString();
        }
        else {
            // the self referencing type needs to be able to put itself into the specialization cache
            // of the original type
            //ret.specializationCache = this.specializationCache;
        }
        if (this.InstanceConstructor != null) {
            var _self = this;
            ret.InstanceConstructor = function () {
                _self.InstanceConstructor.apply(this, ret.typeArguments.concat(Array.prototype.slice.call(arguments, 0)));
                return this;
            };
            ret.InstanceConstructor.prototype = this.InstanceConstructor.prototype;
        }
        return ret;
    }
    equals(other) {
        if (!(other instanceof Type)) {
            return false;
        }
        if (this.identifier !== other.identifier) {
            return false;
        }
        if (this.typeArguments === null && other.typeArguments === null) {
            return true;
        }
        if (this.typeArguments === null && other.typeArguments !== null) {
            return false;
        }
        if (this.typeArguments !== null && other.typeArguments === null) {
            return false;
        }
        if (this.typeArguments.length !== other.typeArguments.length) {
            return false;
        }
        for (var i = 0; i < this.typeArguments.length; i++) {
            //TODO: handle covariance case here.
            //if (!$.ig.util.canAssign(this.typeArguments[ i ], other.typeArguments[ i ])) {
            //    return false;
            //}
            if (!Type.checkEquals(this.typeArguments[i], other.typeArguments[i])) {
                return false;
            }
        }
        return true;
    }
    static checkEquals(type1, type2) {
        if (type1 instanceof Type) {
            return type1.equals(type2);
        }
        else if (type2 instanceof Type) {
            return type2.equals(type1);
        }
        else {
            return type1 === type2;
        }
    }
    static op_Equality(type1, type2) {
        return type1.equals(type2);
    }
    static op_Inequality(type1, type2) {
        return !type1.equals(type2);
    }
    generateString() {
        if (!this.typeArguments || !this.typeArguments.length) {
            return this.identifier.toString();
        }
        else {
            var ret = this.identifier.toString() + "[";
            var first = true;
            for (var i = 0; i < this.typeArguments.length; i++) {
                if (this.typeArguments[i] == undefined) {
                    continue;
                }
                if (first) {
                    first = false;
                }
                else {
                    ret += ",";
                }
                if (this.typeArguments[i].toString) {
                    ret += this.typeArguments[i].toString();
                }
                else {
                    ret += this.typeArguments[i].identifier.toString();
                }
            }
            ret += "]";
            return ret;
        }
    }
    get isValueType() {
        return this.baseType === ValueType.prototype.$type;
    }
    isAssignableFrom(tOther) {
        // TODO: Unit test and make sure this is right (especially with generics
        if (this === tOther) {
            return true;
        }
        if (tOther.baseType && this.isAssignableFrom(tOther.baseType)) {
            return true;
        }
        if (tOther.interfaces) {
            for (var i = 0; i < tOther.interfaces.length; i++) {
                if (this.isAssignableFrom(tOther.interfaces[i])) {
                    return true;
                }
            }
        }
        return false;
    }
    isInstanceOfType(value) {
        return typeCast(this, value) !== null;
    }
    get isPrimitive() {
        return this === Number_$type ||
            this === Boolean_$type;
    }
    static canAssign(targetType, type) {
        if (targetType.name === 'Nullable$1' && type.name !== 'Nullable$1') {
            targetType = Nullable.getUnderlyingType(targetType);
        }
        return Type.canAssignSimple(targetType, type);
    }
    static canAssignSimple(targetType, type) {
        if (targetType === type || Type.checkEquals(targetType, type)) {
            return true;
        }
        if (type.interfaces) {
            for (var i = 0; i < type.interfaces.length; i++) {
                if (Type.canAssignSimple(targetType, type.interfaces[i])) {
                    return true;
                }
            }
        }
        if (type.baseType) {
            return Type.canAssignSimple(targetType, type.baseType);
        }
        return false;
    }
    static createInstance($t) {
        if ($t === Number || $t == Number_$type ||
            $t.isEnumType) {
            return 0;
        }
        if ($t == Boolean || $t == Boolean_$type) {
            return false;
        }
        if ($t.InstanceConstructor) {
            var result;
            //result = Object.create((<Type>$t).InstanceConstructor.prototype);
            let C = $t.InstanceConstructor;
            //(<Type>$t).InstanceConstructor.apply(result, Array.prototype.slice.call(arguments, 1));
            result = new C(...Array.prototype.slice.call(arguments, 1));
            return result;
        }
        throw new Error("Cannot find instance constructor for the type parameter");
    }
    ;
    static getDefaultValue($t) {
        if ($t === Number_$type ||
            $t.isEnumType) {
            return 0;
        }
        if ($t == Boolean_$type) {
            return false;
        }
        if ($t.baseType === ValueType.$type) {
            return Type.createInstance($t);
        }
        return null;
    }
    ;
    static getPrimitiveHashCode(v) {
        var val = typeof v;
        if (val === "string" || v instanceof String) {
            var hash = 0, i, chr, len;
            if (v.length === 0) {
                return hash;
            }
            for (i = 0, len = this.length; i < len; i++) {
                chr = v.charCodeAt(i);
                /*jslint bitwise: true */
                hash = ((hash << 5) - hash) + chr;
                hash |= 0; // Convert to 32bit integer
            }
            return hash;
        }
        else if (val === "boolean" || v instanceof Boolean) {
            return +v;
        }
        else {
            return v;
        }
    }
    // static mark(t: Function, name: string,
    //     baseType: Type = Base.prototype.$type, 
    //     interfaces: Type[] = null, 
    //     staticInitializer: () => void = null) {
    //     t.prototype.$type = new Type(t, name, baseType, interfaces, staticInitializer);
    //     (<any>t).$type = t.prototype.$type;
    // }
    static decodePropType(val) {
        if (val === 0) {
            return Boolean_$type;
        }
        else if (val === 1) {
            return Number_$type;
        }
        else if (val === 2) {
            return String_$type;
        }
        else if (val === 3) {
            return Date_$type;
        }
        else {
            return val;
        }
    }
    static dep(depProp, PropMeta, t, changedFunction, props) {
        let names = [];
        let currName = "";
        let currOpts = [];
        let hasDefaultValue = false;
        let defaultValue = null;
        let propType = null;
        let changeHandler = null;
        let setterFunc = null;
        let getterFunc = null;
        let aliasName = null;
        let propertyAlias = null;
        //debugger;
        for (var i = 0; i < props.length; i++) {
            if (i % 2 == 0) {
                currName = props[i];
                if (currName.indexOf(":") >= 0) {
                    let parts = currName.split(':');
                    if (parts.length == 2) {
                        currName = parts[0];
                        aliasName = parts[1];
                        propertyAlias = currName.substring(0, 1).toLowerCase() + currName.substring(1) + "Property";
                    }
                    else {
                        currName = parts[0];
                        aliasName = parts[1];
                        if (aliasName.length == 0) {
                            aliasName = currName.substring(0, 1).toLowerCase() + currName.substring(1);
                        }
                        propertyAlias = parts[2];
                    }
                }
                else {
                    aliasName = currName.substring(0, 1).toLowerCase() + currName.substring(1);
                    propertyAlias = aliasName + "Property";
                }
                names.push(currName);
            }
            else {
                currOpts = props[i];
                if (currOpts.length == 2) {
                    hasDefaultValue = true;
                    defaultValue = currOpts[1];
                    propType = Type.decodePropType(currOpts[0]);
                }
                else {
                    hasDefaultValue = false;
                    propType = Type.decodePropType(currOpts[0]);
                }
                let changedName = currName;
                changeHandler = (o, a) => {
                    o[changedFunction].call(o, changedName, a.oldValue, a.newValue);
                };
                let meta = null;
                if (hasDefaultValue) {
                    meta = PropMeta.createWithDefaultAndCallback(defaultValue, changeHandler);
                }
                else {
                    meta = PropMeta.createWithCallback(changeHandler);
                }
                let dp = depProp.registerAlt(currName, propType, t.$type, meta);
                setterFunc = function (v) {
                    this.setValueAlt(dp, v);
                };
                if (propType.isEnumType) {
                    getterFunc = function () {
                        return typeGetValue(this.getValueAlt(dp));
                    };
                }
                else {
                    getterFunc = function () {
                        return this.getValueAlt(dp);
                    };
                }
                Object.defineProperty(t.prototype, aliasName, {
                    set: setterFunc,
                    get: getterFunc,
                    configurable: true
                });
                t[propertyAlias] = dp;
            }
        }
        // let superClass = (<any>t).$type.baseType;
        // if (superClass !== null && superClass !== undefined) {
        //     let superNames = superClass.InstanceConstructor.$$p;
        //     if (superNames) {
        //         for (var j = superNames.length - 1; j >= 0; j--) {
        //             names.unshift(superNames[j]);
        //         }
        //     }
        // }
        t.$$p = names;
    }
}
markType(Type, "Type");
markType(Base, "Base", null);
export function typeGetValue(v) {
    if (v !== null && v.$type && v.$type.isEnumType) {
        return v.value;
    }
    return v;
}
export function typeCast(targetType, obj) {
    if (obj === undefined || obj === null) {
        return null;
    }
    if (targetType === Array) {
        return ((obj instanceof Array) ? obj : null);
    }
    if (targetType === String) {
        targetType = String_$type;
    }
    if (targetType === Number) {
        targetType = Number_$type;
    }
    if (targetType === Boolean) {
        targetType = Boolean_$type;
    }
    if (targetType === Date) {
        targetType = Date_$type;
    }
    var type = obj;
    if (obj.$type) {
        type = obj.$type;
    }
    else if (typeof obj === 'number') {
        type = targetType === Number ? Number : Number_$type;
    }
    else if (typeof obj === 'string') {
        type = String_$type;
    }
    else if (typeof obj === 'boolean') {
        type = Boolean_$type;
    }
    else if (obj instanceof Date) {
        type = Date_$type;
    }
    else if (obj instanceof Array) {
        type = Array_$type;
    }
    if (Type.canAssignSimple(targetType, type)) {
        return obj;
    }
    if (targetType.name === 'Nullable$1' && type.name !== 'Nullable$1') {
        targetType = Nullable.getUnderlyingType(targetType);
        if (Type.canAssignSimple(targetType, type)) {
            return Nullable$1.toNullable(targetType, obj);
        }
        return Nullable$1.toNullable(targetType, null);
    }
    return null;
}
export function typeCastObjTo$t($t, v) {
    var shouldWrap = false;
    if ($t.isNullable) {
        $t = $t.typeArguments[0];
        shouldWrap = true;
    }
    if (v !== null && $t.isEnumType) {
        v = v.value;
    }
    return shouldWrap ? Nullable$1.toNullable($t, v) : v;
}
let pendingStaticCtors = new Array();
export function markStruct(t, name, baseType = ValueType.prototype.$type, interfaces = null, staticInitializer = null) {
    t.prototype.$type = new Type(t, name, baseType, interfaces, staticInitializer);
    //TODO: do we need/want a flag on the function like we have in js?
    if (typeof t.staticInit === "function") {
        pendingStaticCtors.push(t);
    }
    t.$type = t.prototype.$type;
    t.$ = t.prototype.$type;
    return t.prototype.$type;
}
export function markEnum(name, encodedDef) {
    let t = new Type(null, name, Base.prototype.$type, [IConvertible_$type]);
    t.isEnumType = true;
    let parts = encodedDef.split("|");
    let names = [];
    let actualNames = [];
    let namesValuesMap = {};
    let actualNamesValuesMap = {};
    for (var i = 0; i < parts.length; i++) {
        let subParts = parts[i].split(",");
        let nameParts = subParts[0].split(":");
        let name = nameParts[0];
        let actualName = nameParts[0];
        if (nameParts.length > 1) {
            actualName = nameParts[1];
        }
        names.push(name);
        actualNames.push(actualName);
        //TODO: did we support string enums??
        namesValuesMap[name] = parseInt(subParts[1]);
        actualNamesValuesMap[actualName] = parseInt(subParts[1]);
    }
    let info = {
        names: names,
        actualNames: actualNames,
        namesValuesMap: namesValuesMap,
        actualNamesValuesMap: actualNamesValuesMap
    };
    t.enumInfo = info;
    return t;
}
export function markType(t, name, baseType = Base.prototype.$type, interfaces = null, staticInitializer = null) {
    t.prototype.$type = new Type(t, name, baseType, interfaces, staticInitializer);
    //TODO: do we need/want a flag on the function like we have in js?
    if (typeof t.staticInit === "function") {
        pendingStaticCtors.push(t);
    }
    //t.prototype.$ = t.prototype.$type;
    t.$type = t.prototype.$type;
    t.$ = t.prototype.$type;
    return t.prototype.$type;
}
export function callStaticConstructors() {
    if (pendingStaticCtors.length > 0) {
        //TODO: is the copy of the array needed? 
        let classes = Array.from(pendingStaticCtors);
        pendingStaticCtors.length = 0;
        for (let c of classes) {
            c.staticInit();
        }
    }
}
export let IConvertible_$type = new Type(null, "IConvertible");
export class Enum extends Base {
}
Enum.$t = markType(Enum, "Enum");
class EnumBox extends Enum {
    constructor(value, type) {
        super();
        this.value = value;
        this.$type = type;
    }
    getHashCode() {
        return this.value;
    }
    // TODO: Fill out remaining IConvertible implementation
    toDouble(provider) {
        return this.value;
    }
    toString() {
        return EnumUtil.getName(this.$type, this.value);
    }
}
export function getBoxIfEnum($t, v) {
    if (v !== null && $t) { // TODO: Remove the $t check here and fix the null ref issue
        if ($t.isNullable) {
            $t = $t.typeArguments[0];
        }
        if ($t.isEnumType) {
            return enumGetBox($t, v);
        }
    }
    return v;
}
;
export function enumGetBox($t, v) {
    if (!$t._boxes) {
        $t._boxes = {};
    }
    if (!$t._boxes[v]) {
        $t._boxes[v] = new EnumBox(v, $t);
    }
    return $t._boxes[v];
}
export class EnumUtil {
    static getValueFromName(values, enumType, value, ignoreCase) {
        if (values.hasOwnProperty(value)) {
            return enumGetBox(enumType, values[value]);
        }
        else if (ignoreCase) {
            var upper = value.toUpperCase();
            for (var x in values) {
                if (x.toUpperCase() === upper) {
                    return enumGetBox(enumType, values[x]);
                }
            }
        }
        else {
            // A.S. Nov 4, 2016 Adjusted to handle case where leading char is _.
            var firstChar = value.charAt(0);
            if (firstChar != "_") {
                value = firstChar.toLowerCase() + value.substr(1);
            }
            else {
                value = "_" + value.charAt(1).toLowerCase() + value.substr(2);
            }
            if (values.hasOwnProperty(value)) {
                return enumGetBox(enumType, values[value]);
            }
        }
        return null;
    }
    static parse(enumType, value, ignoreCase) {
        //var info = Type.getDefinedNameAndNamespace(enumType.fullName);
        //if (Type.canAssign(this.$type, enumType)) 
        {
            //var p = info.namespace[ info.name ].prototype;
            var values = enumType.isEnumType ? enumType.enumInfo.actualNamesValuesMap : enumType.InstanceConstructor.prototype;
            let val = EnumUtil.getValueFromName(values, enumType, value, ignoreCase);
            if (val !== null) {
                return val;
            }
            if (enumType.isEnumType) {
                values = enumType.enumInfo.namesValuesMap;
                let val = EnumUtil.getValueFromName(values, enumType, value, ignoreCase);
                if (val !== null) {
                    return val;
                }
            }
        }
        throw new Error("Invalid " + enumType.name + " value: " + value);
    }
    // static $getName(value: number): string {
    // }
    // static $value(): number {
    // }
    //private _v: number;
    static enumHasFlag(value, flag) {
        /*jslint bitwise: true */
        return (value & flag) === flag;
    }
    static toString(enumType, value) {
        return EnumUtil.getName(enumType, value);
    }
    static getName(enumType, v) {
        if (enumType._nameMap == undefined) {
            let vals = EnumUtil.getValues(enumType);
            let names = enumType.isEnumType ? enumType.enumInfo.names : EnumUtil.getNames(enumType);
            let map = {};
            for (let i = 0; i < vals.length; i++) {
                map[vals[i]] = names[i];
            }
            enumType._nameMap = map;
        }
        let lookup = enumType._nameMap;
        return lookup[v];
    }
    static getFlaggedName(enumType, v, getName) {
        var names = [];
        var original = v;
        var zeroValueName;
        var value;
        var values = [];
        for (var p in this) {
            if (this.hasOwnProperty(p)) {
                value = enumType[p];
                if (typeof enumType[p] == "number") {
                    values.push(p);
                }
            }
        }
        values.sort((a, b) => { return this[a] - this[b]; });
        for (var i = values.length - 1; i >= 0; i--) {
            value = this[values[i]];
            if (value === 0) {
                zeroValueName = getName(0);
            }
            /*jslint bitwise: true */
            else if ((v & value) === value) {
                v -= value;
                names.unshift(getName(value));
            }
        }
        if (v !== 0) {
            return original.toString();
        }
        if (original !== 0) {
            return names.join(", ");
        }
        return zeroValueName || "0";
    }
    static getValues($t) {
        var result = [];
        if ($t.isEnumType) {
            for (let i = 0; i < $t.enumInfo.actualNames.length; i++) {
                result.push($t.enumInfo.actualNamesValuesMap[$t.enumInfo.actualNames[i]]);
            }
            return result;
        }
        var p = $t.isEnumType ?
            $t.enumInfo.actualNames : $t.InstanceConstructor.prototype;
        for (var member in p) {
            if (p.hasOwnProperty(member)) {
                if (typeof p[member] === "number") {
                    result.push(p[member]);
                }
            }
        }
        return result;
    }
    static getNames($t) {
        var result = [];
        if ($t.isEnumType) {
            for (let i = 0; i < $t.enumInfo.actualNames.length; i++) {
                result.push($t.enumInfo.actualNames[i]);
            }
            return result;
        }
        var p = $t.isEnumType ?
            $t.enumInfo.actualNames : $t.InstanceConstructor.prototype;
        for (var member in p) {
            if (p.hasOwnProperty(member)) {
                if (typeof p[member] === "number") {
                    result.push(member);
                }
            }
        }
        return result;
    }
    static getEnumValue($t, v) {
        if (v !== null) {
            if (typeof v === "number") {
                return v;
            }
            else {
                return v.value;
            }
        }
        return 0;
    }
    static isDefined($t, value) {
        value = typeGetValue(value);
        var p = $t.isEnumType ?
            $t.enumInfo.actualNamesValuesMap : $t.InstanceConstructor.prototype;
        for (var member in p) {
            if (p.hasOwnProperty(member)) {
                if (p[member] === value) {
                    return true;
                }
            }
        }
        return false;
    }
    // TODO: Fill out remaining IConvertible implementation
    static toDouble(enumType, value, provider) {
        return value.value;
    }
    static toObject($t, value) {
        return value;
    }
    static tryParse$1($tEnum, value, ignoreCase, result) {
        try {
            return {
                ret: true,
                p2: typeGetValue(EnumUtil.parse($tEnum, value, ignoreCase))
            };
        }
        catch (e) {
            result = Type.createInstance($tEnum);
            return {
                ret: false,
                p2: result
            };
        }
    }
}
export class ValueType extends Base {
}
ValueType.$t = markType(ValueType, "ValueType");
export class Nullable extends Base {
    static getUnderlyingType(nullableType) {
        if (nullableType.isGenericType !== undefined && nullableType.isGenericType &&
            !nullableType.isGenericTypeDefinition &&
            Nullable$1.prototype.$type.typeName == nullableType.typeName) {
            return nullableType.genericTypeArguments[0];
        }
        return null;
    }
}
Nullable.$t = markType(Nullable, "Nullable");
export class Nullable$1 extends Base {
    constructor($t, value) {
        super();
        this.$t = null;
        this._value = null;
        this.isNullable = true;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
        if (value !== undefined) {
            this._value = value;
        }
    }
    static nullableEquals(v1, v2) {
        /*jshint eqnull:true */
        var v1IsNull = (v1 == null) || (!!v1.isNullable && !v1.hasValue);
        var v2IsNull = (v2 == null) || (!!v2.isNullable && !v2.hasValue);
        if (v1IsNull && v2IsNull) {
            return true;
        }
        if (v1IsNull != v2IsNull) {
            return false;
        }
        var val1 = v1;
        var val2 = v2;
        if (v1.isNullable) {
            val1 = v1.value;
        }
        if (v2.isNullable) {
            val2 = v2.value;
        }
        return val1 == val2;
    }
    equals(value) {
        return Nullable$1.nullableEquals(this, value);
    }
    getHashCode() {
        if (this._value === null) {
            return 0;
        }
        if (this._value["getHashCode"] !== undefined) {
            return this._value.getHashCode();
        }
        return Type.getPrimitiveHashCode(this._value);
    }
    get hasValue() {
        return this._value !== null;
    }
    toString() {
        return this._value === null ? "" : this._value.toString();
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    getValueOrDefault() {
        if (this.hasValue) {
            return this._value;
        }
        else {
            return this.getDefaultValue();
        }
    }
    getDefaultValue() {
        if (Type.canAssign(Number_$type, this.$t)) {
            return 0;
        }
        else if (Type.canAssign(Boolean_$type, this.$t)) {
            return false;
        }
        else if (this.$t.baseType == ValueType.prototype.$type) {
            return Type.createInstance(this.$t);
        }
        else {
            return null;
        }
    }
    getValueOrDefault1(defaultValue) {
        if (this.hasValue) {
            return this._value;
        }
        else {
            return defaultValue;
        }
    }
    preIncrement() {
        if (!this.hasValue) {
            return this;
        }
        this._value = (this._value + 1);
        return this;
    }
    preDecrement() {
        if (!this.hasValue) {
            return this;
        }
        this._value = (this._value - 1);
        return this;
    }
    postIncrement() {
        if (!this.hasValue) {
            return this;
        }
        var originalValue = this._value;
        this._value = (this._value + 1);
        return new Nullable$1(this.$t, originalValue);
    }
    postDecrement() {
        if (!this.hasValue) {
            return this;
        }
        var originalValue = this._value;
        this._value = (this._value - 1);
        return new Nullable$1(this.$t, originalValue);
    }
    static toNullable(t, value) {
        if (value == null) {
            return t._$nullNullable || (t._$nullNullable = new Nullable$1(t, null));
        }
        else if (value.isNullable) {
            return value;
        }
        return new Nullable$1(t, value);
    }
}
Nullable$1.$t = markType(Nullable$1, "Nullable$1");
export let IComparable_$type = new Type(null, "IComparable");
export let IComparable$1_$type = new Type(null, "IComparable$1");
export let IEquatable$1_$type = new Type(null, "IEquatable$1");
export let INotifyPropertyChanged_$type = new Type(null, "INotifyPropertyChanged");
export class PropertyChangedEventArgs extends Base {
    constructor(propertyName) {
        super();
        this._propertyName = null;
        this._propertyName = propertyName;
    }
    get propertyName() {
        return this._propertyName;
    }
    set propertyName(value) {
        this._propertyName = value;
    }
}
PropertyChangedEventArgs.$t = markType(PropertyChangedEventArgs, "PropertyChangedEventArgs");
export class IteratorWrapper {
    constructor(inner, getNew) {
        this._inner = null;
        this._getNew = null;
        this._hasNext = true;
        this._current = null;
        this._inner = inner;
        this._getNew = getNew;
    }
    moveNext() {
        let next = this._inner.next();
        this._hasNext = !next.done;
        this._current = next.value;
        return this._hasNext;
    }
    get current() {
        return this._current;
    }
    get currentObject() {
        return this._current;
    }
    dispose() {
    }
    reset() {
        this._inner = this._getNew();
        this._current = null;
        this._hasNext = true;
    }
}
export class IterableWrapper {
    constructor(inner) {
        this._inner = null;
        this._inner = inner;
    }
    getEnumerator() {
        return new IteratorWrapper(this._inner()[Symbol.iterator](), () => this._inner()[Symbol.iterator]());
    }
    getEnumeratorObject() {
        return new IteratorWrapper(this._inner()[Symbol.iterator](), () => this._inner()[Symbol.iterator]());
    }
}
export class EnumeratorWrapper {
    constructor(inner) {
        this._inner = null;
        this._inner = inner;
    }
    next() {
        let done = !this._inner.moveNext();
        let value = null;
        if (!done) {
            value = this._inner.current;
        }
        return {
            done: done,
            value: value
        };
    }
}
export class EnumeratorWrapperObject {
    constructor(inner) {
        this._inner = null;
        this._inner = inner;
    }
    next() {
        let done = !this._inner.moveNext();
        let value = null;
        if (!done) {
            value = this._inner.currentObject;
        }
        return {
            done: done,
            value: value
        };
    }
}
export function* getEn(arr) {
    for (let item of arr) {
        yield item;
    }
}
export function getEnumeratorObject(en) {
    if (en.$type === undefined &&
        (en instanceof Array || Array.isArray(en))) {
        let arr = en;
        return new IteratorWrapper(getEn(arr), () => getEn(arr));
    }
    return en.getEnumeratorObject();
}
export function getEnumerator(en) {
    if (en.$type === undefined &&
        (en instanceof Array || Array.isArray(en))) {
        let arr = en;
        return new IteratorWrapper(getEn(arr), () => getEn(arr));
    }
    return en.getEnumerator();
}
export class EnumerableWrapper {
    constructor(inner) {
        this._inner = null;
        this._inner = inner;
    }
    [Symbol.iterator]() {
        return new EnumeratorWrapper(getEnumerator(this._inner));
    }
}
export class EnumerableWrapperObject {
    constructor(inner) {
        this._inner = null;
        this._inner = inner;
    }
    [Symbol.iterator]() {
        return new EnumeratorWrapperObject(getEnumeratorObject(this._inner));
    }
}
export function toEnum(v) {
    return new IterableWrapper(v);
}
export function fromEnum(v) {
    return new EnumerableWrapper(v);
}
export function toEn(v) {
    return new IterableWrapper(v);
}
export function fromEn(v) {
    return new EnumerableWrapperObject(v);
}
export function* fromDict(v) {
    for (let item of v) {
        let [key, value] = item;
        yield { key: key, value: value };
    }
}
export let Number_$type = new Type(Number, "Number", Base.prototype.$type, [IComparable_$type, IConvertible_$type]);
export let String_$type = new Type(String, "String", Base.prototype.$type, [IComparable_$type, IConvertible_$type]);
export let Date_$type = new Type(Date, "Date", Base.prototype.$type, [IComparable_$type, IConvertible_$type]);
export let Boolean_$type = new Type(Boolean, "Boolean", Base.prototype.$type, [IComparable_$type, IConvertible_$type]);
export let Void_$type = new Type(null, "Void", Base.prototype.$type);
export let n$ = Number_$type;
export let s$ = String_$type;
export let d$ = Date_$type;
export let b$ = Boolean_$type;
export let v$ = Void_$type;
export let Delegate_$type = new Type(null, "Delegate");
export function runOn(target, func) {
    var self = func;
    var ret = function () {
        return self.apply(target, arguments);
    };
    ret.original = self;
    ret.target = target;
    return ret;
}
export function delegateCombine(del1, del2) {
    if (!del1) {
        return del2;
    }
    if (!del2) {
        return del1;
    }
    var ret = function () {
        del1.apply(null, arguments);
        return del2.apply(null, arguments);
    };
    ret.enumerate = function (arr) {
        if (del1) {
            if (del1.enumerate) {
                del1.enumerate(arr);
            }
            else {
                arr.push(del1);
            }
        }
        if (del2) {
            if (del2.enumerate) {
                del2.enumerate(arr);
            }
            else {
                arr.push(del2);
            }
        }
    };
    return ret;
}
;
export function delegateRemove(del1, del2) {
    if (!del1) {
        return null;
    }
    if (!del2) {
        return del1;
    }
    var arr = [];
    var del = null;
    if (del1.enumerate) {
        del1.enumerate(arr);
    }
    else {
        arr.push(del1);
    }
    for (var i = 0; i < arr.length; i++) {
        if (del2.original) {
            if (arr[i].original == del2.original &&
                arr[i].target == del2.target) {
                continue;
            }
        }
        if (arr[i] == del2) {
            continue;
        }
        del = delegateCombine(del, arr[i]);
    }
    return del;
}
;
export let IDisposable_$type = new Type(null, 'IDisposable');
export let IEnumerable_$type = new Type(null, "IEnumerable");
export let IEnumerator_$type = new Type(null, "IEnumerator");
export let IEqualityComparer$1_$type = new Type(null, "IEqualityComparer$1");
export let IEqualityComparer_$type = new Type(null, "IEqualityComparer");
export let ICollection_$type = new Type(null, "ICollection", null, [IEnumerable_$type]);
export let IList_$type = new Type(null, "IList", null, [IEnumerable_$type, ICollection_$type]);
export let IEnumerable$1_$type = new Type(null, "IEnumerable$1", null, [IEnumerable_$type]);
export let ICollection$1_$type = new Type(null, "ICollection$1", null, [IEnumerable$1_$type.specialize(0), IEnumerable_$type]);
export let IList$1_$type = new Type(null, "IList$1", null, [
    ICollection$1_$type.specialize(0),
    IEnumerable$1_$type.specialize(0),
    IEnumerable_$type
]);
export let IEnumerator$1_$type = new Type(null, "IEnumerator$1", null, [IEnumerator_$type, IDisposable_$type]);
export let IDictionary_$type = new Type(null, "IDictionary");
export class BaseError extends Base {
    constructor(initNumber = -1, ...rest) {
        super();
        this._message = null;
        this._innerException = null;
        if (initNumber >= 0) {
            switch (initNumber) {
                case 1:
                    this.init1.apply(this, arguments);
                    break;
                case 2:
                    this.init2.apply(this, arguments);
                    break;
            }
        }
        return;
    }
    get_message() {
        return this._message;
    }
    get message() {
        return this.get_message();
    }
    get innerException() {
        return this._innerException;
    }
    init1(initNumber, message) {
        this._message = message;
    }
    init2(initNumber, message, innerException) {
        this._message = message;
        this._innerException = innerException;
    }
    toString() {
        return this._message;
    }
}
BaseError.$t = markType(BaseError, "BaseError");
export class SystemException extends BaseError {
    constructor(initNumber, ...rest) {
        super(0);
        if (initNumber > 0) {
            switch (initNumber) {
                case 1:
                    this.init1.apply(this, arguments);
                    break;
                case 2:
                    this.init2.apply(this, arguments);
                    break;
            }
            return;
        }
        //super(0);
    }
    init1(initNumber, message) {
        super.init1(1, message);
    }
    init2(initNumber, message, innerException) {
        super.init2(2, message, innerException);
    }
}
SystemException.$t = markType(SystemException, "SystemException", BaseError.prototype.$type);
export class NotSupportedException extends SystemException {
    constructor(initNumber, ...rest) {
        super(0);
        if (initNumber > 0) {
            switch (initNumber) {
                case 1:
                    this.init1.apply(this, arguments);
                    break;
                case 2:
                    this.init2.apply(this, arguments);
                    break;
            }
            return;
        }
    }
    init1(initNumber, message) {
        super.init1(1, message);
    }
    init2(initNumber, message, innerException) {
        super.init2(2, message, innerException);
    }
}
NotSupportedException.$t = markType(NotSupportedException, "NotSupportedException", SystemException.prototype.$type);
export class FormatException extends SystemException {
    constructor(initNumber, ...rest) {
        super(0);
        if (initNumber > 0) {
            switch (initNumber) {
                case 1:
                    this.init1.apply(this, arguments);
                    break;
                case 2:
                    this.init2.apply(this, arguments);
                    break;
            }
            return;
        }
    }
    init1(initNumber, message) {
        super.init1(1, message);
    }
    init2(initNumber, message, innerException) {
        super.init2(2, message, innerException);
    }
}
FormatException.$t = markType(FormatException, "FormatException", SystemException.prototype.$type);
export class PointUtil {
    static equals(p1, p2) {
        if (p1 == null && p2 == null) {
            return true;
        }
        if (p1 == null && p2 != null) {
            return false;
        }
        if (p1 != null && p2 == null) {
            return false;
        }
        return p1.x == p2.x && p1.y == p2.y;
    }
    static notEquals(p1, p2) {
        return !PointUtil.equals(p1, p2);
    }
    static create() {
        return { x: 0, y: 0, $type: Point_$type };
    }
    static createXY(x, y) {
        return { x: x, y: y, $type: Point_$type };
    }
}
export let Point_$type = new Type(null, "Point");
export var SeekOrigin;
(function (SeekOrigin) {
    SeekOrigin[SeekOrigin["Begin"] = 0] = "Begin";
    SeekOrigin[SeekOrigin["Current"] = 1] = "Current";
    SeekOrigin[SeekOrigin["End"] = 2] = "End";
})(SeekOrigin || (SeekOrigin = {}));
export class Stream extends Base {
    close() {
        this.disposeCore(true);
    }
    dispose() {
        this.close();
    }
    disposeCore(disposing) {
    }
    readByte() {
        var bytes = [0];
        var count = this.read(bytes, 0, 1);
        if (count === 0) {
            return -1;
        }
        return bytes[0];
    }
    writeByte(value) {
        this.write([value], 0, 1);
    }
}
Stream.$t = markType(Stream, "Stream");
export class EventArgs extends Base {
    static get empty() {
        if (EventArgs._empty) {
            return EventArgs._empty;
        }
        EventArgs._empty = new EventArgs;
        return EventArgs._empty;
    }
}
EventArgs.$t = markType(EventArgs, "EventArgs");
export let IFormatProvider_$type = new Type(null, 'IFormatProvider');
export let Array_$type = new Type(Array, "Array", Base.prototype.$type, [IEnumerable_$type, ICollection_$type]);
export let a$ = Array_$type;
export class TypeRegistrar {
    static create(typeName, ...rest) {
        if (TypeRegistrar.isRegistered(typeName)) {
            let C = TypeRegistrar.get(typeName);
            return new C(...rest);
        }
        else {
            return null;
        }
    }
    static register(typeName, type) {
        TypeRegistrar._registrar.set(typeName, type.InstanceConstructor);
    }
    static registerCons(typeName, type) {
        TypeRegistrar._registrar.set(typeName, type);
    }
    static callRegister(typeName) {
        let type = TypeRegistrar.get(typeName);
        if (type !== undefined && type !== null &&
            type["register"] !== undefined) {
            type["register"]();
        }
    }
    static isRegistered(typeName) {
        return TypeRegistrar.get(typeName) !== null;
    }
    static get(typeName) {
        if (TypeRegistrar._registrar.has(typeName)) {
            return TypeRegistrar._registrar.get(typeName);
        }
        if (typeName.indexOf("Igx") == 0) {
            let igc = typeName.replace("Igx", "Igc");
            if (TypeRegistrar._registrar.has(igc)) {
                return TypeRegistrar._registrar.get(igc);
            }
            let igr = typeName.replace("Igx", "Igr");
            if (igr.indexOf("Component") == igr.length - 9) {
                igr = igr.substring(0, igr.length - 9);
            }
            if (TypeRegistrar._registrar.has(igr)) {
                return TypeRegistrar._registrar.get(igr);
            }
        }
        return null;
    }
    static createFromInternal(internal, prefix, postfix) {
        if (!internal) {
            return null;
        }
        if (!internal.$type) {
            return null;
        }
        let name = internal.$type.name;
        let externalName = prefix + name + postfix;
        if (!TypeRegistrar.isRegistered(externalName)) {
            return null;
        }
        return TypeRegistrar.create(externalName);
    }
}
TypeRegistrar._registrar = new Map();
//# sourceMappingURL=type.js.map