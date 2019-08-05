/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { IteratorWrapper } from "./type";
var DictionaryUtil = /** @class */ (function () {
    function DictionaryUtil() {
    }
    DictionaryUtil.dictionaryCreate = function (capacity) {
        return new Map();
    };
    DictionaryUtil.en = function (map) {
        var e_1, _a, map_1, map_1_1, item, _b, key, value, e_1_1;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 5, 6, 7]);
                    map_1 = tslib_1.__values(map), map_1_1 = map_1.next();
                    _c.label = 1;
                case 1:
                    if (!!map_1_1.done) return [3 /*break*/, 4];
                    item = map_1_1.value;
                    _b = tslib_1.__read(item, 2), key = _b[0], value = _b[1];
                    return [4 /*yield*/, { key: key, value: value }];
                case 2:
                    _c.sent();
                    _c.label = 3;
                case 3:
                    map_1_1 = map_1.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_1_1 = _c.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (map_1_1 && !map_1_1.done && (_a = map_1.return)) _a.call(map_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
    DictionaryUtil.dictionaryGetEnumerator = function (map) {
        return new IteratorWrapper(DictionaryUtil.en(map), function () { return DictionaryUtil.en(map); });
    };
    DictionaryUtil.dictionaryGetKeys = function (map) {
        return new IteratorWrapper(map.keys(), function () { return map.keys(); });
    };
    DictionaryUtil.dictionaryGetValues = function (map) {
        return new IteratorWrapper(map.values(), function () { return map.values(); });
    };
    DictionaryUtil.dictionaryGetDictionary = function (obj) {
        var map = new Map();
        for (var p in obj) {
            map.set(p.toString(), obj[p]);
        }
        return map;
    };
    return DictionaryUtil;
}());
export { DictionaryUtil };
//# sourceMappingURL=dictionary.js.map