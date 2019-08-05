/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { DictionaryUtil } from "./dictionary";
import { UnsetValue } from "./UnsetValue";
/**
 * @hidden
 */
var DependencyObject = /** @class */ (function (_super) {
    tslib_1.__extends(DependencyObject, _super);
    function DependencyObject() {
        var _this = _super.call(this) || this;
        _this.localValues = null;
        _this.a = null;
        _this.localValues = DictionaryUtil.dictionaryCreate();
        _this.a = DictionaryUtil.dictionaryCreate();
        return _this;
    }
    DependencyObject.prototype.c = function (a) {
        if (this.localValues.has(a.name)) {
            return this.localValues.get(a.name);
        }
        return a.l.b;
    };
    DependencyObject.prototype.h = function (dp_, a) {
        if (dp_.b) {
            var oldValue_ = null;
            if (this.localValues.has(dp_._name)) {
                oldValue_ = this.localValues.get(dp_._name);
            }
            ;
            this.localValues.set(dp_._name, a);
            dp_.l.d(this, new DependencyPropertyChangedEventArgs(dp_, a, oldValue_));
        }
        else {
            this.localValues.set(dp_._name, a);
        }
    };
    DependencyObject.prototype.f = function (a) {
        this.localValues.delete(a._name);
    };
    DependencyObject.prototype.e = function (a) {
        if (this.localValues.has(a._name)) {
            return this.localValues.get(a.name);
        }
        return DependencyProperty.c;
    };
    DependencyObject.prototype.g = function (a, b) {
        if (a == null) {
            return;
        }
        this.a.set(a.name, b);
    };
    DependencyObject.prototype.getValueAlt = function (a) {
        return this.c(a);
    };
    DependencyObject.prototype.setValueAlt = function (dp_, a) {
        this.h(dp_, a);
    };
    DependencyObject.$t = markType(DependencyObject, 'DependencyObject');
    return DependencyObject;
}(Base));
export { DependencyObject };
/**
 * @hidden
 */
var DependencyProperty = /** @class */ (function (_super) {
    tslib_1.__extends(DependencyProperty, _super);
    function DependencyProperty(a, b, c) {
        var _this = _super.call(this) || this;
        _this._name = null;
        _this.f = null;
        _this.k = null;
        _this.a = false;
        _this._name = a;
        _this.f = b;
        _this.k = c;
        if (_this.k != null && _this.k.d != null) {
            _this.a = true;
        }
        else {
            _this.a = false;
        }
        return _this;
    }
    Object.defineProperty(DependencyProperty.prototype, "b", {
        get: function () {
            return this.a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DependencyProperty.prototype, "l", {
        get: function () {
            return this.k;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DependencyProperty.prototype, "propertyType", {
        get: function () {
            return this.f;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DependencyProperty.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    DependencyProperty.i = function (a, b, c, d) {
        return DependencyPropertiesCollection.c.e(a, b, c, d);
    };
    DependencyProperty.h = function (a, b) {
        if (b == null) {
            return null;
        }
        var c = DependencyPropertiesCollection.c.d(b.typeName + a);
        if (c != null) {
            return c;
        }
        return DependencyProperty.h(a, b.baseType);
    };
    DependencyProperty.registerAlt = function (a, b, c, d) {
        return DependencyProperty.i(a, b, c, d);
    };
    DependencyProperty.$t = markType(DependencyProperty, 'DependencyProperty');
    DependencyProperty.c = new UnsetValue();
    return DependencyProperty;
}(Base));
export { DependencyProperty };
/**
 * @hidden
 */
var DependencyPropertiesCollection = /** @class */ (function (_super) {
    tslib_1.__extends(DependencyPropertiesCollection, _super);
    function DependencyPropertiesCollection() {
        var _this = _super.call(this) || this;
        _this.a = null;
        if (_this.a == null) {
            _this.a = DictionaryUtil.dictionaryCreate();
        }
        return _this;
    }
    Object.defineProperty(DependencyPropertiesCollection, "c", {
        get: function () {
            if (DependencyPropertiesCollection.b == null) {
                DependencyPropertiesCollection.b = new DependencyPropertiesCollection();
            }
            return DependencyPropertiesCollection.b;
        },
        enumerable: true,
        configurable: true
    });
    DependencyPropertiesCollection.prototype.d = function (a) {
        return this.a.get(a);
    };
    DependencyPropertiesCollection.prototype.e = function (a, b, c, d) {
        var e = new DependencyProperty(a, b, d);
        this.a.set(c.typeName + a, e);
        return e;
    };
    DependencyPropertiesCollection.$t = markType(DependencyPropertiesCollection, 'DependencyPropertiesCollection');
    DependencyPropertiesCollection.b = null;
    return DependencyPropertiesCollection;
}(Base));
export { DependencyPropertiesCollection };
/**
 * @hidden
 */
var DependencyPropertyChangedEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(DependencyPropertyChangedEventArgs, _super);
    function DependencyPropertyChangedEventArgs(a, b, c) {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.b = null;
        _this.e = null;
        _this.a = b;
        _this.b = c;
        _this.e = a;
        return _this;
    }
    Object.defineProperty(DependencyPropertyChangedEventArgs.prototype, "f", {
        get: function () {
            return this.e;
        },
        set: function (a) {
            this.e = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DependencyPropertyChangedEventArgs.prototype, "newValue", {
        get: function () {
            return this.a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DependencyPropertyChangedEventArgs.prototype, "oldValue", {
        get: function () {
            return this.b;
        },
        enumerable: true,
        configurable: true
    });
    DependencyPropertyChangedEventArgs.$t = markType(DependencyPropertyChangedEventArgs, 'DependencyPropertyChangedEventArgs');
    return DependencyPropertyChangedEventArgs;
}(Base));
export { DependencyPropertyChangedEventArgs };
/**
 * @hidden
 */
var PropertyMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(PropertyMetadata, _super);
    function PropertyMetadata(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.c = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    _this.b = c;
                    _this.d = null;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    _this.b = null;
                    _this.d = c;
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this.b = c;
                    _this.d = d;
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(PropertyMetadata.prototype, "b", {
        get: function () {
            return this.a;
        },
        set: function (a) {
            this.a = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyMetadata.prototype, "d", {
        get: function () {
            return this.c;
        },
        set: function (a) {
            this.c = a;
        },
        enumerable: true,
        configurable: true
    });
    PropertyMetadata.createWithCallback = function (a) {
        return new PropertyMetadata(1, a);
    };
    PropertyMetadata.createWithDefaultAndCallback = function (a, b) {
        return new PropertyMetadata(2, a, b);
    };
    PropertyMetadata.$t = markType(PropertyMetadata, 'PropertyMetadata');
    return PropertyMetadata;
}(Base));
export { PropertyMetadata };
//# sourceMappingURL=DependencyObject_combined.js.map