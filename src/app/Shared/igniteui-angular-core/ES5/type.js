/*!
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
var _typeIdentifierCache = {};
var _nextTypeIdentifier = 0;
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
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.equals = function (other) {
        return this === other;
    };
    Base.equalsStatic = function (a, b) {
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
    };
    Base.equalsSimple = function (item1, item2) {
        return item1 == item2;
    };
    ;
    Base.compareSimple = function (item1, item2) {
        if (item1 == item2) {
            return 0;
        }
        if (item1 < item2) {
            return -1;
        }
        return 1;
    };
    ;
    Base.compare = function (item1, item2) {
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
    };
    ;
    Base.prototype.getHashCode = function () {
        if (this.$hashCode === undefined) {
            this.$hashCode = Base.nextHashCode++;
        }
        return this.$hashCode;
    };
    Base.getHashCodeStatic = function (obj) {
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
    };
    Base.prototype.memberwiseClone = function () {
        var Cons = /** @class */ (function () {
            function Cons() {
            }
            return Cons;
        }());
        Cons.prototype = this.$type.InstanceConstructor.prototype;
        var clone = new Cons();
        for (var prop in this) {
            if (this.hasOwnProperty(prop)) {
                clone[prop] = this[prop];
            }
        }
        return clone;
    };
    Base.referenceEquals = function (a, b) {
        return a === b || (a == null && b == null);
    };
    Base.getArrayOfValues = function (obj) {
        var result = [];
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                result.push(obj[i]);
            }
        }
        return result;
    };
    Base.getArrayOfProperties = function (obj) {
        var result = [];
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                result.push(i);
            }
        }
        return result;
    };
    ;
    Base.nextHashCode = 0;
    return Base;
}());
export { Base };
var Type = /** @class */ (function (_super) {
    tslib_1.__extends(Type, _super);
    function Type(instanceConstructor, identifier, baseType, interfaces, staticInitializer) {
        if (baseType === void 0) { baseType = Base.prototype.$type; }
        if (interfaces === void 0) { interfaces = null; }
        if (staticInitializer === void 0) { staticInitializer = null; }
        var _this = _super.call(this) || this;
        _this.specializationCache = null;
        _this._staticInitializer = null;
        _this.name = null;
        _this.typeArguments = null;
        _this.baseType = null;
        _this.interfaces = null;
        _this.isEnumType = false;
        _this._isGenericType = undefined;
        _this._staticFields = null;
        _this.isNullable = false;
        _this._$nullNullable = null;
        _this.enumInfo = null;
        _this.specializationCache = {};
        _this._staticInitializer = staticInitializer;
        _this._fullName = identifier;
        _this.name = identifier;
        _this.InstanceConstructor = instanceConstructor;
        var lastDotIndex = _this.name.lastIndexOf(".");
        if (lastDotIndex >= 0) {
            _this.name = _this.name.substr(lastDotIndex + 1);
        }
        _this.typeArguments = null;
        _this.baseType = null;
        _this.interfaces = null;
        if (baseType) {
            _this.baseType = baseType;
        }
        if (interfaces) {
            _this.interfaces = interfaces;
        }
        if (_typeIdentifierCache[identifier]) {
            _this.identifier = _typeIdentifierCache[identifier];
        }
        else {
            _this.identifier = _nextTypeIdentifier++;
            _typeIdentifierCache[identifier] = _this.identifier;
        }
        return _this;
        // rather than always evaluating a function on a type to see if it is an enum
        // we can just cache it once on the type
        // if (baseType && Enum && baseType == Enum.prototype.$type) {
        //     this.isEnumType = true;
        // }
    }
    Object.defineProperty(Type.prototype, "typeName", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Type.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        enumerable: true,
        configurable: true
    });
    Type.prototype.getSpecId = function (types) {
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
    };
    Object.defineProperty(Type.prototype, "isGenericType", {
        get: function () {
            if (this._isGenericType === undefined) {
                this._isGenericType = this.name.indexOf("$") >= 0;
            }
            return this._isGenericType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Type.prototype, "isGenericTypeDefinition", {
        get: function () {
            return this.typeArguments === null && this.isGenericType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Type.prototype, "genericTypeArguments", {
        get: function () {
            return this.typeArguments;
        },
        enumerable: true,
        configurable: true
    });
    Type.prototype.getStaticFields = function (type) {
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
    };
    Type.prototype.initSelfReferences = function (replacement) {
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
    };
    Type.prototype.specialize = function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
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
    };
    Type.prototype.equals = function (other) {
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
    };
    Type.checkEquals = function (type1, type2) {
        if (type1 instanceof Type) {
            return type1.equals(type2);
        }
        else if (type2 instanceof Type) {
            return type2.equals(type1);
        }
        else {
            return type1 === type2;
        }
    };
    Type.op_Equality = function (type1, type2) {
        return type1.equals(type2);
    };
    Type.op_Inequality = function (type1, type2) {
        return !type1.equals(type2);
    };
    Type.prototype.generateString = function () {
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
    };
    Object.defineProperty(Type.prototype, "isValueType", {
        get: function () {
            return this.baseType === ValueType.prototype.$type;
        },
        enumerable: true,
        configurable: true
    });
    Type.prototype.isAssignableFrom = function (tOther) {
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
    };
    Type.prototype.isInstanceOfType = function (value) {
        return typeCast(this, value) !== null;
    };
    Object.defineProperty(Type.prototype, "isPrimitive", {
        get: function () {
            return this === Number_$type ||
                this === Boolean_$type;
        },
        enumerable: true,
        configurable: true
    });
    Type.canAssign = function (targetType, type) {
        if (targetType.name === 'Nullable$1' && type.name !== 'Nullable$1') {
            targetType = Nullable.getUnderlyingType(targetType);
        }
        return Type.canAssignSimple(targetType, type);
    };
    Type.canAssignSimple = function (targetType, type) {
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
    };
    Type.createInstance = function ($t) {
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
            var C = $t.InstanceConstructor;
            //(<Type>$t).InstanceConstructor.apply(result, Array.prototype.slice.call(arguments, 1));
            result = new (C.bind.apply(C, tslib_1.__spread([void 0], Array.prototype.slice.call(arguments, 1))))();
            return result;
        }
        throw new Error("Cannot find instance constructor for the type parameter");
    };
    ;
    Type.getDefaultValue = function ($t) {
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
    };
    ;
    Type.getPrimitiveHashCode = function (v) {
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
    };
    // static mark(t: Function, name: string,
    //     baseType: Type = Base.prototype.$type, 
    //     interfaces: Type[] = null, 
    //     staticInitializer: () => void = null) {
    //     t.prototype.$type = new Type(t, name, baseType, interfaces, staticInitializer);
    //     (<any>t).$type = t.prototype.$type;
    // }
    Type.decodePropType = function (val) {
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
    };
    Type.dep = function (depProp, PropMeta, t, changedFunction, props) {
        var names = [];
        var currName = "";
        var currOpts = [];
        var hasDefaultValue = false;
        var defaultValue = null;
        var propType = null;
        var changeHandler = null;
        var setterFunc = null;
        var getterFunc = null;
        var aliasName = null;
        var propertyAlias = null;
        var _loop_1 = function () {
            if (i % 2 == 0) {
                currName = props[i];
                if (currName.indexOf(":") >= 0) {
                    var parts = currName.split(':');
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
                var changedName_1 = currName;
                changeHandler = function (o, a) {
                    o[changedFunction].call(o, changedName_1, a.oldValue, a.newValue);
                };
                var meta = null;
                if (hasDefaultValue) {
                    meta = PropMeta.createWithDefaultAndCallback(defaultValue, changeHandler);
                }
                else {
                    meta = PropMeta.createWithCallback(changeHandler);
                }
                var dp_1 = depProp.registerAlt(currName, propType, t.$type, meta);
                setterFunc = function (v) {
                    this.setValueAlt(dp_1, v);
                };
                if (propType.isEnumType) {
                    getterFunc = function () {
                        return typeGetValue(this.getValueAlt(dp_1));
                    };
                }
                else {
                    getterFunc = function () {
                        return this.getValueAlt(dp_1);
                    };
                }
                Object.defineProperty(t.prototype, aliasName, {
                    set: setterFunc,
                    get: getterFunc,
                    configurable: true
                });
                t[propertyAlias] = dp_1;
            }
        };
        //debugger;
        for (var i = 0; i < props.length; i++) {
            _loop_1();
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
    };
    return Type;
}(Base));
export { Type };
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
var pendingStaticCtors = new Array();
export function markStruct(t, name, baseType, interfaces, staticInitializer) {
    if (baseType === void 0) { baseType = ValueType.prototype.$type; }
    if (interfaces === void 0) { interfaces = null; }
    if (staticInitializer === void 0) { staticInitializer = null; }
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
    var t = new Type(null, name, Base.prototype.$type, [IConvertible_$type]);
    t.isEnumType = true;
    var parts = encodedDef.split("|");
    var names = [];
    var actualNames = [];
    var namesValuesMap = {};
    var actualNamesValuesMap = {};
    for (var i = 0; i < parts.length; i++) {
        var subParts = parts[i].split(",");
        var nameParts = subParts[0].split(":");
        var name_1 = nameParts[0];
        var actualName = nameParts[0];
        if (nameParts.length > 1) {
            actualName = nameParts[1];
        }
        names.push(name_1);
        actualNames.push(actualName);
        //TODO: did we support string enums??
        namesValuesMap[name_1] = parseInt(subParts[1]);
        actualNamesValuesMap[actualName] = parseInt(subParts[1]);
    }
    var info = {
        names: names,
        actualNames: actualNames,
        namesValuesMap: namesValuesMap,
        actualNamesValuesMap: actualNamesValuesMap
    };
    t.enumInfo = info;
    return t;
}
export function markType(t, name, baseType, interfaces, staticInitializer) {
    if (baseType === void 0) { baseType = Base.prototype.$type; }
    if (interfaces === void 0) { interfaces = null; }
    if (staticInitializer === void 0) { staticInitializer = null; }
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
    var e_1, _a;
    if (pendingStaticCtors.length > 0) {
        //TODO: is the copy of the array needed? 
        var classes = Array.from(pendingStaticCtors);
        pendingStaticCtors.length = 0;
        try {
            for (var classes_1 = tslib_1.__values(classes), classes_1_1 = classes_1.next(); !classes_1_1.done; classes_1_1 = classes_1.next()) {
                var c = classes_1_1.value;
                c.staticInit();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (classes_1_1 && !classes_1_1.done && (_a = classes_1.return)) _a.call(classes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
}
export var IConvertible_$type = new Type(null, "IConvertible");
var Enum = /** @class */ (function (_super) {
    tslib_1.__extends(Enum, _super);
    function Enum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Enum.$t = markType(Enum, "Enum");
    return Enum;
}(Base));
export { Enum };
var EnumBox = /** @class */ (function (_super) {
    tslib_1.__extends(EnumBox, _super);
    function EnumBox(value, type) {
        var _this = _super.call(this) || this;
        _this.value = value;
        _this.$type = type;
        return _this;
    }
    EnumBox.prototype.getHashCode = function () {
        return this.value;
    };
    // TODO: Fill out remaining IConvertible implementation
    EnumBox.prototype.toDouble = function (provider) {
        return this.value;
    };
    EnumBox.prototype.toString = function () {
        return EnumUtil.getName(this.$type, this.value);
    };
    return EnumBox;
}(Enum));
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
var EnumUtil = /** @class */ (function () {
    function EnumUtil() {
    }
    EnumUtil.getValueFromName = function (values, enumType, value, ignoreCase) {
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
    };
    EnumUtil.parse = function (enumType, value, ignoreCase) {
        //var info = Type.getDefinedNameAndNamespace(enumType.fullName);
        //if (Type.canAssign(this.$type, enumType)) 
        {
            //var p = info.namespace[ info.name ].prototype;
            var values = enumType.isEnumType ? enumType.enumInfo.actualNamesValuesMap : enumType.InstanceConstructor.prototype;
            var val = EnumUtil.getValueFromName(values, enumType, value, ignoreCase);
            if (val !== null) {
                return val;
            }
            if (enumType.isEnumType) {
                values = enumType.enumInfo.namesValuesMap;
                var val_1 = EnumUtil.getValueFromName(values, enumType, value, ignoreCase);
                if (val_1 !== null) {
                    return val_1;
                }
            }
        }
        throw new Error("Invalid " + enumType.name + " value: " + value);
    };
    // static $getName(value: number): string {
    // }
    // static $value(): number {
    // }
    //private _v: number;
    EnumUtil.enumHasFlag = function (value, flag) {
        /*jslint bitwise: true */
        return (value & flag) === flag;
    };
    EnumUtil.toString = function (enumType, value) {
        return EnumUtil.getName(enumType, value);
    };
    EnumUtil.getName = function (enumType, v) {
        if (enumType._nameMap == undefined) {
            var vals = EnumUtil.getValues(enumType);
            var names = enumType.isEnumType ? enumType.enumInfo.names : EnumUtil.getNames(enumType);
            var map = {};
            for (var i = 0; i < vals.length; i++) {
                map[vals[i]] = names[i];
            }
            enumType._nameMap = map;
        }
        var lookup = enumType._nameMap;
        return lookup[v];
    };
    EnumUtil.getFlaggedName = function (enumType, v, getName) {
        var _this = this;
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
        values.sort(function (a, b) { return _this[a] - _this[b]; });
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
    };
    EnumUtil.getValues = function ($t) {
        var result = [];
        if ($t.isEnumType) {
            for (var i = 0; i < $t.enumInfo.actualNames.length; i++) {
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
    };
    EnumUtil.getNames = function ($t) {
        var result = [];
        if ($t.isEnumType) {
            for (var i = 0; i < $t.enumInfo.actualNames.length; i++) {
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
    };
    EnumUtil.getEnumValue = function ($t, v) {
        if (v !== null) {
            if (typeof v === "number") {
                return v;
            }
            else {
                return v.value;
            }
        }
        return 0;
    };
    EnumUtil.isDefined = function ($t, value) {
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
    };
    // TODO: Fill out remaining IConvertible implementation
    EnumUtil.toDouble = function (enumType, value, provider) {
        return value.value;
    };
    EnumUtil.toObject = function ($t, value) {
        return value;
    };
    EnumUtil.tryParse$1 = function ($tEnum, value, ignoreCase, result) {
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
    };
    return EnumUtil;
}());
export { EnumUtil };
var ValueType = /** @class */ (function (_super) {
    tslib_1.__extends(ValueType, _super);
    function ValueType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValueType.$t = markType(ValueType, "ValueType");
    return ValueType;
}(Base));
export { ValueType };
var Nullable = /** @class */ (function (_super) {
    tslib_1.__extends(Nullable, _super);
    function Nullable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Nullable.getUnderlyingType = function (nullableType) {
        if (nullableType.isGenericType !== undefined && nullableType.isGenericType &&
            !nullableType.isGenericTypeDefinition &&
            Nullable$1.prototype.$type.typeName == nullableType.typeName) {
            return nullableType.genericTypeArguments[0];
        }
        return null;
    };
    Nullable.$t = markType(Nullable, "Nullable");
    return Nullable;
}(Base));
export { Nullable };
var Nullable$1 = /** @class */ (function (_super) {
    tslib_1.__extends(Nullable$1, _super);
    function Nullable$1($t, value) {
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this._value = null;
        _this.isNullable = true;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        if (value !== undefined) {
            _this._value = value;
        }
        return _this;
    }
    Nullable$1.nullableEquals = function (v1, v2) {
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
    };
    Nullable$1.prototype.equals = function (value) {
        return Nullable$1.nullableEquals(this, value);
    };
    Nullable$1.prototype.getHashCode = function () {
        if (this._value === null) {
            return 0;
        }
        if (this._value["getHashCode"] !== undefined) {
            return this._value.getHashCode();
        }
        return Type.getPrimitiveHashCode(this._value);
    };
    Object.defineProperty(Nullable$1.prototype, "hasValue", {
        get: function () {
            return this._value !== null;
        },
        enumerable: true,
        configurable: true
    });
    Nullable$1.prototype.toString = function () {
        return this._value === null ? "" : this._value.toString();
    };
    Object.defineProperty(Nullable$1.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Nullable$1.prototype.getValueOrDefault = function () {
        if (this.hasValue) {
            return this._value;
        }
        else {
            return this.getDefaultValue();
        }
    };
    Nullable$1.prototype.getDefaultValue = function () {
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
    };
    Nullable$1.prototype.getValueOrDefault1 = function (defaultValue) {
        if (this.hasValue) {
            return this._value;
        }
        else {
            return defaultValue;
        }
    };
    Nullable$1.prototype.preIncrement = function () {
        if (!this.hasValue) {
            return this;
        }
        this._value = (this._value + 1);
        return this;
    };
    Nullable$1.prototype.preDecrement = function () {
        if (!this.hasValue) {
            return this;
        }
        this._value = (this._value - 1);
        return this;
    };
    Nullable$1.prototype.postIncrement = function () {
        if (!this.hasValue) {
            return this;
        }
        var originalValue = this._value;
        this._value = (this._value + 1);
        return new Nullable$1(this.$t, originalValue);
    };
    Nullable$1.prototype.postDecrement = function () {
        if (!this.hasValue) {
            return this;
        }
        var originalValue = this._value;
        this._value = (this._value - 1);
        return new Nullable$1(this.$t, originalValue);
    };
    Nullable$1.toNullable = function (t, value) {
        if (value == null) {
            return t._$nullNullable || (t._$nullNullable = new Nullable$1(t, null));
        }
        else if (value.isNullable) {
            return value;
        }
        return new Nullable$1(t, value);
    };
    Nullable$1.$t = markType(Nullable$1, "Nullable$1");
    return Nullable$1;
}(Base));
export { Nullable$1 };
export var IComparable_$type = new Type(null, "IComparable");
export var IComparable$1_$type = new Type(null, "IComparable$1");
export var IEquatable$1_$type = new Type(null, "IEquatable$1");
export var INotifyPropertyChanged_$type = new Type(null, "INotifyPropertyChanged");
var PropertyChangedEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(PropertyChangedEventArgs, _super);
    function PropertyChangedEventArgs(propertyName) {
        var _this = _super.call(this) || this;
        _this._propertyName = null;
        _this._propertyName = propertyName;
        return _this;
    }
    Object.defineProperty(PropertyChangedEventArgs.prototype, "propertyName", {
        get: function () {
            return this._propertyName;
        },
        set: function (value) {
            this._propertyName = value;
        },
        enumerable: true,
        configurable: true
    });
    PropertyChangedEventArgs.$t = markType(PropertyChangedEventArgs, "PropertyChangedEventArgs");
    return PropertyChangedEventArgs;
}(Base));
export { PropertyChangedEventArgs };
var IteratorWrapper = /** @class */ (function () {
    function IteratorWrapper(inner, getNew) {
        this._inner = null;
        this._getNew = null;
        this._hasNext = true;
        this._current = null;
        this._inner = inner;
        this._getNew = getNew;
    }
    IteratorWrapper.prototype.moveNext = function () {
        var next = this._inner.next();
        this._hasNext = !next.done;
        this._current = next.value;
        return this._hasNext;
    };
    Object.defineProperty(IteratorWrapper.prototype, "current", {
        get: function () {
            return this._current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IteratorWrapper.prototype, "currentObject", {
        get: function () {
            return this._current;
        },
        enumerable: true,
        configurable: true
    });
    IteratorWrapper.prototype.dispose = function () {
    };
    IteratorWrapper.prototype.reset = function () {
        this._inner = this._getNew();
        this._current = null;
        this._hasNext = true;
    };
    return IteratorWrapper;
}());
export { IteratorWrapper };
var IterableWrapper = /** @class */ (function () {
    function IterableWrapper(inner) {
        this._inner = null;
        this._inner = inner;
    }
    IterableWrapper.prototype.getEnumerator = function () {
        var _this = this;
        return new IteratorWrapper(this._inner()[Symbol.iterator](), function () { return _this._inner()[Symbol.iterator](); });
    };
    IterableWrapper.prototype.getEnumeratorObject = function () {
        var _this = this;
        return new IteratorWrapper(this._inner()[Symbol.iterator](), function () { return _this._inner()[Symbol.iterator](); });
    };
    return IterableWrapper;
}());
export { IterableWrapper };
var EnumeratorWrapper = /** @class */ (function () {
    function EnumeratorWrapper(inner) {
        this._inner = null;
        this._inner = inner;
    }
    EnumeratorWrapper.prototype.next = function () {
        var done = !this._inner.moveNext();
        var value = null;
        if (!done) {
            value = this._inner.current;
        }
        return {
            done: done,
            value: value
        };
    };
    return EnumeratorWrapper;
}());
export { EnumeratorWrapper };
var EnumeratorWrapperObject = /** @class */ (function () {
    function EnumeratorWrapperObject(inner) {
        this._inner = null;
        this._inner = inner;
    }
    EnumeratorWrapperObject.prototype.next = function () {
        var done = !this._inner.moveNext();
        var value = null;
        if (!done) {
            value = this._inner.currentObject;
        }
        return {
            done: done,
            value: value
        };
    };
    return EnumeratorWrapperObject;
}());
export { EnumeratorWrapperObject };
export function getEn(arr) {
    var e_2, _a, arr_1, arr_1_1, item, e_2_1;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, 6, 7]);
                arr_1 = tslib_1.__values(arr), arr_1_1 = arr_1.next();
                _b.label = 1;
            case 1:
                if (!!arr_1_1.done) return [3 /*break*/, 4];
                item = arr_1_1.value;
                return [4 /*yield*/, item];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3:
                arr_1_1 = arr_1.next();
                return [3 /*break*/, 1];
            case 4: return [3 /*break*/, 7];
            case 5:
                e_2_1 = _b.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 7];
            case 6:
                try {
                    if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return)) _a.call(arr_1);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 7: return [2 /*return*/];
        }
    });
}
export function getEnumeratorObject(en) {
    if (en.$type === undefined &&
        (en instanceof Array || Array.isArray(en))) {
        var arr_2 = en;
        return new IteratorWrapper(getEn(arr_2), function () { return getEn(arr_2); });
    }
    return en.getEnumeratorObject();
}
export function getEnumerator(en) {
    if (en.$type === undefined &&
        (en instanceof Array || Array.isArray(en))) {
        var arr_3 = en;
        return new IteratorWrapper(getEn(arr_3), function () { return getEn(arr_3); });
    }
    return en.getEnumerator();
}
var EnumerableWrapper = /** @class */ (function () {
    function EnumerableWrapper(inner) {
        this._inner = null;
        this._inner = inner;
    }
    EnumerableWrapper.prototype[Symbol.iterator] = function () {
        return new EnumeratorWrapper(getEnumerator(this._inner));
    };
    return EnumerableWrapper;
}());
export { EnumerableWrapper };
var EnumerableWrapperObject = /** @class */ (function () {
    function EnumerableWrapperObject(inner) {
        this._inner = null;
        this._inner = inner;
    }
    EnumerableWrapperObject.prototype[Symbol.iterator] = function () {
        return new EnumeratorWrapperObject(getEnumeratorObject(this._inner));
    };
    return EnumerableWrapperObject;
}());
export { EnumerableWrapperObject };
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
export function fromDict(v) {
    var e_3, _a, v_1, v_1_1, item, _b, key, value, e_3_1;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 5, 6, 7]);
                v_1 = tslib_1.__values(v), v_1_1 = v_1.next();
                _c.label = 1;
            case 1:
                if (!!v_1_1.done) return [3 /*break*/, 4];
                item = v_1_1.value;
                _b = tslib_1.__read(item, 2), key = _b[0], value = _b[1];
                return [4 /*yield*/, { key: key, value: value }];
            case 2:
                _c.sent();
                _c.label = 3;
            case 3:
                v_1_1 = v_1.next();
                return [3 /*break*/, 1];
            case 4: return [3 /*break*/, 7];
            case 5:
                e_3_1 = _c.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 7];
            case 6:
                try {
                    if (v_1_1 && !v_1_1.done && (_a = v_1.return)) _a.call(v_1);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 7: return [2 /*return*/];
        }
    });
}
export var Number_$type = new Type(Number, "Number", Base.prototype.$type, [IComparable_$type, IConvertible_$type]);
export var String_$type = new Type(String, "String", Base.prototype.$type, [IComparable_$type, IConvertible_$type]);
export var Date_$type = new Type(Date, "Date", Base.prototype.$type, [IComparable_$type, IConvertible_$type]);
export var Boolean_$type = new Type(Boolean, "Boolean", Base.prototype.$type, [IComparable_$type, IConvertible_$type]);
export var Void_$type = new Type(null, "Void", Base.prototype.$type);
export var n$ = Number_$type;
export var s$ = String_$type;
export var d$ = Date_$type;
export var b$ = Boolean_$type;
export var v$ = Void_$type;
export var Delegate_$type = new Type(null, "Delegate");
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
export var IDisposable_$type = new Type(null, 'IDisposable');
export var IEnumerable_$type = new Type(null, "IEnumerable");
export var IEnumerator_$type = new Type(null, "IEnumerator");
export var IEqualityComparer$1_$type = new Type(null, "IEqualityComparer$1");
export var IEqualityComparer_$type = new Type(null, "IEqualityComparer");
export var ICollection_$type = new Type(null, "ICollection", null, [IEnumerable_$type]);
export var IList_$type = new Type(null, "IList", null, [IEnumerable_$type, ICollection_$type]);
export var IEnumerable$1_$type = new Type(null, "IEnumerable$1", null, [IEnumerable_$type]);
export var ICollection$1_$type = new Type(null, "ICollection$1", null, [IEnumerable$1_$type.specialize(0), IEnumerable_$type]);
export var IList$1_$type = new Type(null, "IList$1", null, [
    ICollection$1_$type.specialize(0),
    IEnumerable$1_$type.specialize(0),
    IEnumerable_$type
]);
export var IEnumerator$1_$type = new Type(null, "IEnumerator$1", null, [IEnumerator_$type, IDisposable_$type]);
export var IDictionary_$type = new Type(null, "IDictionary");
var BaseError = /** @class */ (function (_super) {
    tslib_1.__extends(BaseError, _super);
    function BaseError(initNumber) {
        if (initNumber === void 0) { initNumber = -1; }
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this._message = null;
        _this._innerException = null;
        if (initNumber >= 0) {
            switch (initNumber) {
                case 1:
                    _this.init1.apply(_this, arguments);
                    break;
                case 2:
                    _this.init2.apply(_this, arguments);
                    break;
            }
        }
        return _this;
    }
    BaseError.prototype.get_message = function () {
        return this._message;
    };
    Object.defineProperty(BaseError.prototype, "message", {
        get: function () {
            return this.get_message();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseError.prototype, "innerException", {
        get: function () {
            return this._innerException;
        },
        enumerable: true,
        configurable: true
    });
    BaseError.prototype.init1 = function (initNumber, message) {
        this._message = message;
    };
    BaseError.prototype.init2 = function (initNumber, message, innerException) {
        this._message = message;
        this._innerException = innerException;
    };
    BaseError.prototype.toString = function () {
        return this._message;
    };
    BaseError.$t = markType(BaseError, "BaseError");
    return BaseError;
}(Base));
export { BaseError };
var SystemException = /** @class */ (function (_super) {
    tslib_1.__extends(SystemException, _super);
    function SystemException(initNumber) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this, 0) || this;
        if (initNumber > 0) {
            switch (initNumber) {
                case 1:
                    _this.init1.apply(_this, arguments);
                    break;
                case 2:
                    _this.init2.apply(_this, arguments);
                    break;
            }
            return _this;
        }
        return _this;
        //super(0);
    }
    SystemException.prototype.init1 = function (initNumber, message) {
        _super.prototype.init1.call(this, 1, message);
    };
    SystemException.prototype.init2 = function (initNumber, message, innerException) {
        _super.prototype.init2.call(this, 2, message, innerException);
    };
    SystemException.$t = markType(SystemException, "SystemException", BaseError.prototype.$type);
    return SystemException;
}(BaseError));
export { SystemException };
var NotSupportedException = /** @class */ (function (_super) {
    tslib_1.__extends(NotSupportedException, _super);
    function NotSupportedException(initNumber) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this, 0) || this;
        if (initNumber > 0) {
            switch (initNumber) {
                case 1:
                    _this.init1.apply(_this, arguments);
                    break;
                case 2:
                    _this.init2.apply(_this, arguments);
                    break;
            }
            return _this;
        }
        return _this;
    }
    NotSupportedException.prototype.init1 = function (initNumber, message) {
        _super.prototype.init1.call(this, 1, message);
    };
    NotSupportedException.prototype.init2 = function (initNumber, message, innerException) {
        _super.prototype.init2.call(this, 2, message, innerException);
    };
    NotSupportedException.$t = markType(NotSupportedException, "NotSupportedException", SystemException.prototype.$type);
    return NotSupportedException;
}(SystemException));
export { NotSupportedException };
var FormatException = /** @class */ (function (_super) {
    tslib_1.__extends(FormatException, _super);
    function FormatException(initNumber) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this, 0) || this;
        if (initNumber > 0) {
            switch (initNumber) {
                case 1:
                    _this.init1.apply(_this, arguments);
                    break;
                case 2:
                    _this.init2.apply(_this, arguments);
                    break;
            }
            return _this;
        }
        return _this;
    }
    FormatException.prototype.init1 = function (initNumber, message) {
        _super.prototype.init1.call(this, 1, message);
    };
    FormatException.prototype.init2 = function (initNumber, message, innerException) {
        _super.prototype.init2.call(this, 2, message, innerException);
    };
    FormatException.$t = markType(FormatException, "FormatException", SystemException.prototype.$type);
    return FormatException;
}(SystemException));
export { FormatException };
var PointUtil = /** @class */ (function () {
    function PointUtil() {
    }
    PointUtil.equals = function (p1, p2) {
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
    };
    PointUtil.notEquals = function (p1, p2) {
        return !PointUtil.equals(p1, p2);
    };
    PointUtil.create = function () {
        return { x: 0, y: 0, $type: Point_$type };
    };
    PointUtil.createXY = function (x, y) {
        return { x: x, y: y, $type: Point_$type };
    };
    return PointUtil;
}());
export { PointUtil };
export var Point_$type = new Type(null, "Point");
export var SeekOrigin;
(function (SeekOrigin) {
    SeekOrigin[SeekOrigin["Begin"] = 0] = "Begin";
    SeekOrigin[SeekOrigin["Current"] = 1] = "Current";
    SeekOrigin[SeekOrigin["End"] = 2] = "End";
})(SeekOrigin || (SeekOrigin = {}));
var Stream = /** @class */ (function (_super) {
    tslib_1.__extends(Stream, _super);
    function Stream() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stream.prototype.close = function () {
        this.disposeCore(true);
    };
    Stream.prototype.dispose = function () {
        this.close();
    };
    Stream.prototype.disposeCore = function (disposing) {
    };
    Stream.prototype.readByte = function () {
        var bytes = [0];
        var count = this.read(bytes, 0, 1);
        if (count === 0) {
            return -1;
        }
        return bytes[0];
    };
    Stream.prototype.writeByte = function (value) {
        this.write([value], 0, 1);
    };
    Stream.$t = markType(Stream, "Stream");
    return Stream;
}(Base));
export { Stream };
var EventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(EventArgs, _super);
    function EventArgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EventArgs, "empty", {
        get: function () {
            if (EventArgs._empty) {
                return EventArgs._empty;
            }
            EventArgs._empty = new EventArgs;
            return EventArgs._empty;
        },
        enumerable: true,
        configurable: true
    });
    EventArgs.$t = markType(EventArgs, "EventArgs");
    return EventArgs;
}(Base));
export { EventArgs };
export var IFormatProvider_$type = new Type(null, 'IFormatProvider');
export var Array_$type = new Type(Array, "Array", Base.prototype.$type, [IEnumerable_$type, ICollection_$type]);
export var a$ = Array_$type;
var TypeRegistrar = /** @class */ (function () {
    function TypeRegistrar() {
    }
    TypeRegistrar.create = function (typeName) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        if (TypeRegistrar.isRegistered(typeName)) {
            var C = TypeRegistrar.get(typeName);
            return new (C.bind.apply(C, tslib_1.__spread([void 0], rest)))();
        }
        else {
            return null;
        }
    };
    TypeRegistrar.register = function (typeName, type) {
        TypeRegistrar._registrar.set(typeName, type.InstanceConstructor);
    };
    TypeRegistrar.registerCons = function (typeName, type) {
        TypeRegistrar._registrar.set(typeName, type);
    };
    TypeRegistrar.callRegister = function (typeName) {
        var type = TypeRegistrar.get(typeName);
        if (type !== undefined && type !== null &&
            type["register"] !== undefined) {
            type["register"]();
        }
    };
    TypeRegistrar.isRegistered = function (typeName) {
        return TypeRegistrar.get(typeName) !== null;
    };
    TypeRegistrar.get = function (typeName) {
        if (TypeRegistrar._registrar.has(typeName)) {
            return TypeRegistrar._registrar.get(typeName);
        }
        if (typeName.indexOf("Igx") == 0) {
            var igc = typeName.replace("Igx", "Igc");
            if (TypeRegistrar._registrar.has(igc)) {
                return TypeRegistrar._registrar.get(igc);
            }
            var igr = typeName.replace("Igx", "Igr");
            if (igr.indexOf("Component") == igr.length - 9) {
                igr = igr.substring(0, igr.length - 9);
            }
            if (TypeRegistrar._registrar.has(igr)) {
                return TypeRegistrar._registrar.get(igr);
            }
        }
        return null;
    };
    TypeRegistrar.createFromInternal = function (internal, prefix, postfix) {
        if (!internal) {
            return null;
        }
        if (!internal.$type) {
            return null;
        }
        var name = internal.$type.name;
        var externalName = prefix + name + postfix;
        if (!TypeRegistrar.isRegistered(externalName)) {
            return null;
        }
        return TypeRegistrar.create(externalName);
    };
    TypeRegistrar._registrar = new Map();
    return TypeRegistrar;
}());
export { TypeRegistrar };
//# sourceMappingURL=type.js.map