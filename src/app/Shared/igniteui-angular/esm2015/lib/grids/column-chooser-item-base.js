/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class ItemPropertyValueChanged {
    /**
     * @param {?} propName
     */
    constructor(propName) {
        this.valueChanged = new EventEmitter();
        this._propName = propName;
    }
    /**
     * @return {?}
     */
    get object() {
        return this._object;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set object(value) {
        if (value) {
            this._object = value;
        }
    }
    /**
     * @return {?}
     */
    get value() {
        return (this.object) ? this.object[this._propName] : null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this.onValueChanged(value);
    }
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    onValueChanged(value) {
        /** @type {?} */
        const currentValue = this.value;
        if (value !== currentValue) {
            this.object[this._propName] = value;
            this.valueChanged.emit({ oldValue: currentValue, newValue: value });
        }
    }
}
ItemPropertyValueChanged.propDecorators = {
    value: [{ type: Input }],
    valueChanged: [{ type: Output }]
};
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
export class ColumnChooserItemBase extends ItemPropertyValueChanged {
    /**
     * @param {?} prop
     */
    constructor(prop) {
        super(prop);
        this.prop = prop;
        this.indentation = 30;
    }
    /**
     * @return {?}
     */
    get column() {
        return this.object;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set column(value) {
        if (value) {
            this.object = value;
        }
    }
    /**
     * @return {?}
     */
    get name() {
        return (this.column) ? ((this.column.header) ? this.column.header : this.column.field) : '';
    }
    /**
     * @return {?}
     */
    get level() {
        return this.column.level;
    }
    /**
     * @return {?}
     */
    get calcIndent() {
        return this.indentation * this.level;
    }
}
ColumnChooserItemBase.propDecorators = {
    column: [{ type: Input }],
    indentation: [{ type: Input }],
    container: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ColumnChooserItemBase.prototype.indentation;
    /** @type {?} */
    ColumnChooserItemBase.prototype.container;
    /** @type {?} */
    ColumnChooserItemBase.prototype.prop;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWNob29zZXItaXRlbS1iYXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9jb2x1bW4tY2hvb3Nlci1pdGVtLWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUU1RCw0Q0FHQzs7O0lBRkcsMENBQWM7O0lBQ2QsMENBQWM7Ozs7OztBQU1sQixNQUFNLE9BQWdCLHdCQUF3Qjs7OztJQTBCMUMsWUFBWSxRQUFnQjtRQUZyQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUEwQixDQUFDO1FBRzdELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzlCLENBQUM7Ozs7SUF4QkQsSUFBSSxNQUFNO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsSUFBSSxNQUFNLENBQUMsS0FBSztRQUNaLElBQUksS0FBSyxFQUFFO1lBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDeEI7SUFDTCxDQUFDOzs7O0lBRUQsSUFDSSxLQUFLO1FBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM5RCxDQUFDOzs7OztJQUVELElBQUksS0FBSyxDQUFDLEtBQUs7UUFDWCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7OztJQVNTLGNBQWMsQ0FBQyxLQUFLOztjQUNwQixZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUs7UUFDL0IsSUFBSSxLQUFLLEtBQUssWUFBWSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDdkU7SUFDTCxDQUFDOzs7b0JBdEJBLEtBQUs7MkJBU0wsTUFBTTs7Ozs7OztJQXRCUCwyQ0FBcUI7Ozs7O0lBQ3JCLDZDQUEwQjs7SUFxQjFCLGdEQUNpRTs7Ozs7QUFnQnJFLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSx3QkFBd0I7Ozs7SUFrQi9ELFlBQW1CLElBQVk7UUFDM0IsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBREcsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUx4QixnQkFBVyxHQUFHLEVBQUUsQ0FBQztJQU94QixDQUFDOzs7O0lBbkJELElBQ0ksTUFBTTtRQUNOLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELElBQUksTUFBTSxDQUFDLEtBQUs7UUFDWixJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQzs7OztJQVlELElBQUksSUFBSTtRQUNKLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2hHLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDTCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDVixPQUFPLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN6QyxDQUFDOzs7cUJBL0JBLEtBQUs7MEJBV0wsS0FBSzt3QkFHTCxLQUFLOzs7O0lBSE4sNENBQ3dCOztJQUV4QiwwQ0FDc0I7O0lBRVYscUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVZhbHVlQ2hhbmdlZEV2ZW50QXJncyB7XG4gICAgb2xkVmFsdWU6IGFueTtcbiAgICBuZXdWYWx1ZTogYW55O1xufVxuXG4vKipcbiAqQGhpZGRlblxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSXRlbVByb3BlcnR5VmFsdWVDaGFuZ2VkIHtcbiAgICBwcml2YXRlIF9vYmplY3Q6IGFueTtcbiAgICBwcml2YXRlIF9wcm9wTmFtZTogc3RyaW5nO1xuXG4gICAgZ2V0IG9iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29iamVjdDtcbiAgICB9XG5cbiAgICBzZXQgb2JqZWN0KHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fb2JqZWN0ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLm9iamVjdCkgPyB0aGlzLm9iamVjdFt0aGlzLl9wcm9wTmFtZV0gOiBudWxsO1xuICAgIH1cblxuICAgIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLm9uVmFsdWVDaGFuZ2VkKHZhbHVlKTtcbiAgICB9XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgdmFsdWVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxJVmFsdWVDaGFuZ2VkRXZlbnRBcmdzPigpO1xuXG4gICAgY29uc3RydWN0b3IocHJvcE5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wcm9wTmFtZSA9IHByb3BOYW1lO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvblZhbHVlQ2hhbmdlZCh2YWx1ZSkge1xuICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgIT09IGN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5vYmplY3RbdGhpcy5fcHJvcE5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZC5lbWl0KHsgb2xkVmFsdWU6IGN1cnJlbnRWYWx1ZSwgbmV3VmFsdWU6IHZhbHVlIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGNsYXNzIENvbHVtbkNob29zZXJJdGVtQmFzZSBleHRlbmRzIEl0ZW1Qcm9wZXJ0eVZhbHVlQ2hhbmdlZCB7XG4gICAgQElucHV0KClcbiAgICBnZXQgY29sdW1uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vYmplY3Q7XG4gICAgfVxuXG4gICAgc2V0IGNvbHVtbih2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpbmRlbnRhdGlvbiA9IDMwO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY29udGFpbmVyOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcHJvcDogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKHByb3ApO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuY29sdW1uKSA/ICgodGhpcy5jb2x1bW4uaGVhZGVyKSA/IHRoaXMuY29sdW1uLmhlYWRlciA6IHRoaXMuY29sdW1uLmZpZWxkKSA6ICcnO1xuICAgIH1cblxuICAgIGdldCBsZXZlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uLmxldmVsO1xuICAgIH1cblxuICAgIGdldCBjYWxjSW5kZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRlbnRhdGlvbiAqIHRoaXMubGV2ZWw7XG4gICAgfVxufVxuIl19