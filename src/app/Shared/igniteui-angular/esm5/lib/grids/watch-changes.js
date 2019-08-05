/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SimpleChange } from '@angular/core';
/**
 * @hidden
 * @return {?}
 */
export function WatchChanges() {
    return function (target, key, propDesc) {
        /** @type {?} */
        var privateKey = '_' + key.toString();
        propDesc = propDesc || {
            configurable: true,
            enumerable: true,
        };
        propDesc.get = propDesc.get || (function () { return this[privateKey]; });
        /** @type {?} */
        var originalSetter = propDesc.set || (function (val) { this[privateKey] = val; });
        propDesc.set = function (val) {
            var _a;
            /** @type {?} */
            var init = this._init;
            /** @type {?} */
            var oldValue = this[key];
            if (val !== oldValue || (typeof val === 'object' && val === oldValue)) {
                originalSetter.call(this, val);
                if (this.ngOnChanges && !init) {
                    // in case wacthed prop changes trigger ngOnChanges manually
                    /** @type {?} */
                    var changes = (_a = {},
                        _a[key] = new SimpleChange(oldValue, val, false),
                        _a);
                    this.ngOnChanges(changes);
                }
            }
        };
        return propDesc;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0Y2gtY2hhbmdlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvd2F0Y2gtY2hhbmdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBSzVELE1BQU0sVUFBVSxZQUFZO0lBQ3hCLE9BQU8sVUFBQyxNQUFXLEVBQUUsR0FBVyxFQUFFLFFBQTZCOztZQUNyRCxVQUFVLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUU7UUFDdkMsUUFBUSxHQUFHLFFBQVEsSUFBSTtZQUNuQixZQUFZLEVBQUUsSUFBSTtZQUNsQixVQUFVLEVBQUUsSUFBSTtTQUNuQixDQUFDO1FBQ0YsUUFBUSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBdUIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7WUFDN0UsY0FBYyxHQUFHLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFxQixHQUFRLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVuRyxRQUFRLENBQUMsR0FBRyxHQUFHLFVBQXFCLEdBQVE7OztnQkFDbEMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLOztnQkFDakIsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDMUIsSUFBSSxHQUFHLEtBQUssUUFBUSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLEdBQUcsS0FBSyxRQUFRLENBQUMsRUFBRTtnQkFDbkUsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQy9CLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksRUFBRTs7O3dCQUVyQixPQUFPO3dCQUNULEdBQUMsR0FBRyxJQUFHLElBQUksWUFBWSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDOzJCQUNoRDtvQkFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUM5QjthQUNIO1FBQ0wsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQyxDQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpbXBsZUNoYW5nZXMsIFNpbXBsZUNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiogQGhpZGRlblxuKi9cbmV4cG9ydCBmdW5jdGlvbiBXYXRjaENoYW5nZXMoKTogUHJvcGVydHlEZWNvcmF0b3Ige1xuICAgIHJldHVybiAodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nLCBwcm9wRGVzYz86IFByb3BlcnR5RGVzY3JpcHRvcikgPT4ge1xuICAgICAgICBjb25zdCBwcml2YXRlS2V5ID0gJ18nICsga2V5LnRvU3RyaW5nKCk7XG4gICAgICAgIHByb3BEZXNjID0gcHJvcERlc2MgfHwge1xuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgcHJvcERlc2MuZ2V0ID0gcHJvcERlc2MuZ2V0IHx8IChmdW5jdGlvbiAodGhpczogYW55KSB7IHJldHVybiB0aGlzW3ByaXZhdGVLZXldOyB9KTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxTZXR0ZXIgPSBwcm9wRGVzYy5zZXQgfHwgKGZ1bmN0aW9uICh0aGlzOiBhbnksIHZhbDogYW55KSB7IHRoaXNbcHJpdmF0ZUtleV0gPSB2YWw7IH0pO1xuXG4gICAgICAgIHByb3BEZXNjLnNldCA9IGZ1bmN0aW9uICh0aGlzOiBhbnksIHZhbDogYW55KSB7XG4gICAgICAgICAgICBjb25zdCBpbml0ID0gdGhpcy5faW5pdDtcbiAgICAgICAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpc1trZXldO1xuICAgICAgICAgICAgaWYgKHZhbCAhPT0gb2xkVmFsdWUgfHwgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbCA9PT0gb2xkVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxTZXR0ZXIuY2FsbCh0aGlzLCB2YWwpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5nT25DaGFuZ2VzICYmICFpbml0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGluIGNhc2Ugd2FjdGhlZCBwcm9wIGNoYW5nZXMgdHJpZ2dlciBuZ09uQ2hhbmdlcyBtYW51YWxseVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgW2tleV06IG5ldyBTaW1wbGVDaGFuZ2Uob2xkVmFsdWUsIHZhbCwgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmdPbkNoYW5nZXMoY2hhbmdlcyk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBwcm9wRGVzYztcbiAgICB9O1xufVxuIl19