/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter, Input, Output } from '@angular/core';
/**
 * @record
 */
export function IValueChangedEventArgs() { }
if (false) {
    /** @type {?} */
    IValueChangedEventArgs.prototype.oldValue;
    /** @type {?} */
    IValueChangedEventArgs.prototype.newValue;
}
/**
 * @hidden
 * @abstract
 */
var ItemPropertyValueChanged = /** @class */ (function () {
    function ItemPropertyValueChanged(propName) {
        this.valueChanged = new EventEmitter();
        this._propName = propName;
    }
    Object.defineProperty(ItemPropertyValueChanged.prototype, "object", {
        get: /**
         * @return {?}
         */
        function () {
            return this._object;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._object = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemPropertyValueChanged.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.object) ? this.object[this._propName] : null;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.onValueChanged(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    ItemPropertyValueChanged.prototype.onValueChanged = /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var currentValue = this.value;
        if (value !== currentValue) {
            this.object[this._propName] = value;
            this.valueChanged.emit({ oldValue: currentValue, newValue: value });
        }
    };
    ItemPropertyValueChanged.propDecorators = {
        value: [{ type: Input }],
        valueChanged: [{ type: Output }]
    };
    return ItemPropertyValueChanged;
}());
export { ItemPropertyValueChanged };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ItemPropertyValueChanged.prototype._object;
    /**
     * @type {?}
     * @private
     */
    ItemPropertyValueChanged.prototype._propName;
    /** @type {?} */
    ItemPropertyValueChanged.prototype.valueChanged;
}
/**
 * @hidden
 */
var ColumnChooserItemBase = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnChooserItemBase, _super);
    function ColumnChooserItemBase(prop) {
        var _this = _super.call(this, prop) || this;
        _this.prop = prop;
        _this.indentation = 30;
        return _this;
    }
    Object.defineProperty(ColumnChooserItemBase.prototype, "column", {
        get: /**
         * @return {?}
         */
        function () {
            return this.object;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.object = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnChooserItemBase.prototype, "name", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.column) ? ((this.column.header) ? this.column.header : this.column.field) : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnChooserItemBase.prototype, "level", {
        get: /**
         * @return {?}
         */
        function () {
            return this.column.level;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnChooserItemBase.prototype, "calcIndent", {
        get: /**
         * @return {?}
         */
        function () {
            return this.indentation * this.level;
        },
        enumerable: true,
        configurable: true
    });
    ColumnChooserItemBase.propDecorators = {
        column: [{ type: Input }],
        indentation: [{ type: Input }],
        container: [{ type: Input }]
    };
    return ColumnChooserItemBase;
}(ItemPropertyValueChanged));
export { ColumnChooserItemBase };
if (false) {
    /** @type {?} */
    ColumnChooserItemBase.prototype.indentation;
    /** @type {?} */
    ColumnChooserItemBase.prototype.container;
    /** @type {?} */
    ColumnChooserItemBase.prototype.prop;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWNob29zZXItaXRlbS1iYXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9jb2x1bW4tY2hvb3Nlci1pdGVtLWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFNUQsNENBR0M7OztJQUZHLDBDQUFjOztJQUNkLDBDQUFjOzs7Ozs7QUFNbEI7SUEwQkksa0NBQVksUUFBZ0I7UUFGckIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztRQUc3RCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUM5QixDQUFDO0lBeEJELHNCQUFJLDRDQUFNOzs7O1FBQVY7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzs7Ozs7UUFFRCxVQUFXLEtBQUs7WUFDWixJQUFJLEtBQUssRUFBRTtnQkFDUCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUN4QjtRQUNMLENBQUM7OztPQU5BO0lBUUQsc0JBQ0ksMkNBQUs7Ozs7UUFEVDtZQUVJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDOUQsQ0FBQzs7Ozs7UUFFRCxVQUFVLEtBQUs7WUFDWCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUM7OztPQUpBOzs7Ozs7SUFhUyxpREFBYzs7Ozs7SUFBeEIsVUFBeUIsS0FBSzs7WUFDcEIsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLO1FBQy9CLElBQUksS0FBSyxLQUFLLFlBQVksRUFBRTtZQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZFO0lBQ0wsQ0FBQzs7d0JBdEJBLEtBQUs7K0JBU0wsTUFBTTs7SUFjWCwrQkFBQztDQUFBLEFBckNELElBcUNDO1NBckNxQix3QkFBd0I7Ozs7OztJQUMxQywyQ0FBcUI7Ozs7O0lBQ3JCLDZDQUEwQjs7SUFxQjFCLGdEQUNpRTs7Ozs7QUFnQnJFO0lBQTJDLGlEQUF3QjtJQWtCL0QsK0JBQW1CLElBQVk7UUFBL0IsWUFDSSxrQkFBTSxJQUFJLENBQUMsU0FDZDtRQUZrQixVQUFJLEdBQUosSUFBSSxDQUFRO1FBTHhCLGlCQUFXLEdBQUcsRUFBRSxDQUFDOztJQU94QixDQUFDO0lBbkJELHNCQUNJLHlDQUFNOzs7O1FBRFY7WUFFSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFFRCxVQUFXLEtBQUs7WUFDWixJQUFJLEtBQUssRUFBRTtnQkFDUCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUN2QjtRQUNMLENBQUM7OztPQU5BO0lBa0JELHNCQUFJLHVDQUFJOzs7O1FBQVI7WUFDSSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNoRyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHdDQUFLOzs7O1FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNkNBQVU7Ozs7UUFBZDtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pDLENBQUM7OztPQUFBOzt5QkEvQkEsS0FBSzs4QkFXTCxLQUFLOzRCQUdMLEtBQUs7O0lBa0JWLDRCQUFDO0NBQUEsQUFqQ0QsQ0FBMkMsd0JBQXdCLEdBaUNsRTtTQWpDWSxxQkFBcUI7OztJQVk5Qiw0Q0FDd0I7O0lBRXhCLDBDQUNzQjs7SUFFVixxQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJVmFsdWVDaGFuZ2VkRXZlbnRBcmdzIHtcbiAgICBvbGRWYWx1ZTogYW55O1xuICAgIG5ld1ZhbHVlOiBhbnk7XG59XG5cbi8qKlxuICpAaGlkZGVuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJdGVtUHJvcGVydHlWYWx1ZUNoYW5nZWQge1xuICAgIHByaXZhdGUgX29iamVjdDogYW55O1xuICAgIHByaXZhdGUgX3Byb3BOYW1lOiBzdHJpbmc7XG5cbiAgICBnZXQgb2JqZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb2JqZWN0O1xuICAgIH1cblxuICAgIHNldCBvYmplY3QodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9vYmplY3QgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMub2JqZWN0KSA/IHRoaXMub2JqZWN0W3RoaXMuX3Byb3BOYW1lXSA6IG51bGw7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMub25WYWx1ZUNoYW5nZWQodmFsdWUpO1xuICAgIH1cblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyB2YWx1ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElWYWx1ZUNoYW5nZWRFdmVudEFyZ3M+KCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3Byb3BOYW1lID0gcHJvcE5hbWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uVmFsdWVDaGFuZ2VkKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLm9iamVjdFt0aGlzLl9wcm9wTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudmFsdWVDaGFuZ2VkLmVtaXQoeyBvbGRWYWx1ZTogY3VycmVudFZhbHVlLCBuZXdWYWx1ZTogdmFsdWUgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgY2xhc3MgQ29sdW1uQ2hvb3Nlckl0ZW1CYXNlIGV4dGVuZHMgSXRlbVByb3BlcnR5VmFsdWVDaGFuZ2VkIHtcbiAgICBASW5wdXQoKVxuICAgIGdldCBjb2x1bW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9iamVjdDtcbiAgICB9XG5cbiAgICBzZXQgY29sdW1uKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5vYmplY3QgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGluZGVudGF0aW9uID0gMzA7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjb250YWluZXI6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwcm9wOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIocHJvcCk7XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5jb2x1bW4pID8gKCh0aGlzLmNvbHVtbi5oZWFkZXIpID8gdGhpcy5jb2x1bW4uaGVhZGVyIDogdGhpcy5jb2x1bW4uZmllbGQpIDogJyc7XG4gICAgfVxuXG4gICAgZ2V0IGxldmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW4ubGV2ZWw7XG4gICAgfVxuXG4gICAgZ2V0IGNhbGNJbmRlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluZGVudGF0aW9uICogdGhpcy5sZXZlbDtcbiAgICB9XG59XG4iXX0=