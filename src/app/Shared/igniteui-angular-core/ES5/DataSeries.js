/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, typeCast, enumGetBox, fromEnum, markType } from "./type";
import { DataSeriesType_$type } from "./DataSeriesType";
import { List$1 } from "./List$1";
import { DataSeriesMemberPathHint } from "./DataSeriesMemberPathHint";
import { stringIsNullOrEmpty } from "./string";
/**
 * @hidden
 */
var DataSeries = /** @class */ (function (_super) {
    tslib_1.__extends(DataSeries, _super);
    function DataSeries() {
        var _this = _super.call(this) || this;
        _this.j = null;
        _this._name = null;
        _this._title = null;
        _this._data = null;
        _this._priority = 0;
        _this._index = 0;
        _this._suggestedPrimaryAxis = 0;
        _this._suggestedSecondaryAxis = 0;
        _this._suggestedSeries = 0;
        _this._dataPath = null;
        _this._suggestedMarker = 0;
        _this.j = new List$1(DataSeriesMemberPathHint.$, 0);
        _this.suggestedMarker = 0;
        _this.index = -1;
        _this.priority = -1;
        return _this;
    }
    Object.defineProperty(DataSeries.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (a) {
            this._name = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSeries.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (a) {
            this._title = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSeries.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (a) {
            this._data = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSeries.prototype, "priority", {
        get: function () {
            return this._priority;
        },
        set: function (a) {
            this._priority = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSeries.prototype, "index", {
        get: function () {
            return this._index;
        },
        set: function (a) {
            this._index = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSeries.prototype, "suggestedPrimaryAxis", {
        get: function () {
            return this._suggestedPrimaryAxis;
        },
        set: function (a) {
            this._suggestedPrimaryAxis = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSeries.prototype, "suggestedSecondaryAxis", {
        get: function () {
            return this._suggestedSecondaryAxis;
        },
        set: function (a) {
            this._suggestedSecondaryAxis = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSeries.prototype, "suggestedSeries", {
        get: function () {
            return this._suggestedSeries;
        },
        set: function (a) {
            this._suggestedSeries = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSeries.prototype, "dataPath", {
        get: function () {
            return this._dataPath;
        },
        set: function (a) {
            this._dataPath = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSeries.prototype, "suggestedMarker", {
        get: function () {
            return this._suggestedMarker;
        },
        set: function (a) {
            this._suggestedMarker = a;
        },
        enumerable: true,
        configurable: true
    });
    DataSeries.prototype.addMemberPathHint = function (a) {
        this.j.add(a);
    };
    DataSeries.prototype.addMemberPathHint1 = function (a, b) {
        var c = a.clone();
        c.intent = b;
        this.j.add(c);
    };
    DataSeries.prototype.addMemberPathHint2 = function (a, b) {
        var c = new DataSeriesMemberPathHint();
        c.intent = b;
        c.path = a;
        this.j.add(c);
    };
    DataSeries.prototype.removeMemberPathHint = function (a) {
        this.j.remove(a);
    };
    DataSeries.prototype.clearMemberPathHints = function () {
        this.j.clear();
    };
    DataSeries.prototype.getMemberPathHintCount = function () {
        return this.j.count;
    };
    DataSeries.prototype.getMemberPathHintAt = function (a) {
        return this.j._inner[a];
    };
    DataSeries.prototype.findMatchingHint = function (a) {
        for (var b = 0; b < this.j.count; b++) {
            if (this.j._inner[b].intent == a) {
                return this.j._inner[b];
            }
        }
        return null;
    };
    DataSeries.prototype.getMemberPathFor = function (a) {
        var b = this.findMatchingHint(a);
        if (b == null) {
            return "";
        }
        return b.path;
    };
    DataSeries.prototype.hasMatchingHint = function (a) {
        var b = this.findMatchingHint(a);
        if (b == null) {
            return false;
        }
        if (stringIsNullOrEmpty(b.path)) {
            return false;
        }
        return true;
    };
    DataSeries.prototype.i = function () {
        return this.j;
    };
    DataSeries.prototype.equals = function (a) {
        var b = typeCast(DataSeries.$, a);
        if (b == null) {
            return false;
        }
        if (!Base.equalsStatic(this.name, b.name)) {
            return false;
        }
        if (!Base.equalsStatic(this.title, b.title)) {
            return false;
        }
        if (this.data != b.data) {
            return false;
        }
        if (this.priority != b.priority) {
            return false;
        }
        if (this.suggestedPrimaryAxis != b.suggestedPrimaryAxis) {
            return false;
        }
        if (this.suggestedSecondaryAxis != b.suggestedSecondaryAxis) {
            return false;
        }
        if (this.suggestedSeries != b.suggestedSeries) {
            return false;
        }
        if (this.suggestedMarker != b.suggestedMarker) {
            return false;
        }
        if (!Base.equalsStatic(this.dataPath, b.dataPath)) {
            return false;
        }
        var c = this.i();
        var d = b.i();
        if (c.count != d.count) {
            return false;
        }
        for (var e = 0; e < c.count; e++) {
            if (!c.item(e).equals(d.item(e))) {
                return false;
            }
        }
        return true;
    };
    DataSeries.prototype.toString = function () {
        var e_1, _a;
        var a = enumGetBox(DataSeriesType_$type, this.suggestedSeries) + " hints: ";
        try {
            for (var _b = tslib_1.__values(fromEnum(this.j)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var b = _c.value;
                a += " {" + b.toString() + "}, ";
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return a;
    };
    DataSeries.$t = markType(DataSeries, 'DataSeries');
    return DataSeries;
}(Base));
export { DataSeries };
//# sourceMappingURL=DataSeries.js.map