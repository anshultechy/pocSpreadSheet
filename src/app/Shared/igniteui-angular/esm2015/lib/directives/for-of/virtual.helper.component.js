/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostBinding, Input, ViewChild, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
export class VirtualHelperComponent {
    /**
     * @param {?} elementRef
     * @param {?} cdr
     */
    constructor(elementRef, cdr) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.cssClasses = 'igx-vhelper--vertical';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set height(value) {
        if (this.destroyed) {
            return;
        }
        this._height = value;
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    get height() {
        return this._height;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed = true;
    }
}
VirtualHelperComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-virtual-helper',
                template: '<div #container class="igx-vhelper__placeholder-content" [style.height.px]="height"></div>'
            }] }
];
/** @nocollapse */
VirtualHelperComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
VirtualHelperComponent.propDecorators = {
    scrollTop: [{ type: HostBinding, args: ['scrollTop',] }],
    _vcr: [{ type: ViewChild, args: ['container', { read: ViewContainerRef, static: true },] }],
    itemsLength: [{ type: Input }],
    cssClasses: [{ type: HostBinding, args: ['class',] }]
};
if (false) {
    /** @type {?} */
    VirtualHelperComponent.prototype.scrollTop;
    /** @type {?} */
    VirtualHelperComponent.prototype._vcr;
    /** @type {?} */
    VirtualHelperComponent.prototype.itemsLength;
    /** @type {?} */
    VirtualHelperComponent.prototype.cssClasses;
    /** @type {?} */
    VirtualHelperComponent.prototype.destroyed;
    /**
     * @type {?}
     * @private
     */
    VirtualHelperComponent.prototype._height;
    /** @type {?} */
    VirtualHelperComponent.prototype.elementRef;
    /** @type {?} */
    VirtualHelperComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbC5oZWxwZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2Zvci1vZi92aXJ0dWFsLmhlbHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFhLE1BQU0sZUFBZSxDQUFDO0FBTXJJLE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBeUIvQixZQUFtQixVQUFzQixFQUFTLEdBQXNCO1FBQXJELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBUyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUxqRSxlQUFVLEdBQUcsdUJBQXVCLENBQUM7SUFLZ0MsQ0FBQzs7Ozs7SUFsQjdFLElBQVcsTUFBTSxDQUFDLEtBQUs7UUFDbkIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELElBQVcsTUFBTTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7O0lBVU0sV0FBVztRQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7OztZQWpDSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFLDRGQUE0RjthQUN6Rzs7OztZQUxtQixVQUFVO1lBQW1ELGlCQUFpQjs7O3dCQU83RixXQUFXLFNBQUMsV0FBVzttQkFHdkIsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzBCQUMvRCxLQUFLO3lCQWNMLFdBQVcsU0FBQyxPQUFPOzs7O0lBbEJwQiwyQ0FDaUI7O0lBRWpCLHNDQUE4RTs7SUFDOUUsNkNBQW9DOztJQWNwQyw0Q0FDNEM7O0lBRTVDLDJDQUFpQjs7Ozs7SUFDakIseUNBQXdCOztJQUVaLDRDQUE2Qjs7SUFBRSxxQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWd4LXZpcnR1YWwtaGVscGVyJyxcbiAgICB0ZW1wbGF0ZTogJzxkaXYgI2NvbnRhaW5lciBjbGFzcz1cImlneC12aGVscGVyX19wbGFjZWhvbGRlci1jb250ZW50XCIgW3N0eWxlLmhlaWdodC5weF09XCJoZWlnaHRcIj48L2Rpdj4nXG59KVxuZXhwb3J0IGNsYXNzIFZpcnR1YWxIZWxwZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIEBIb3N0QmluZGluZygnc2Nyb2xsVG9wJylcbiAgICBwdWJsaWMgc2Nyb2xsVG9wO1xuXG4gICAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSkgcHVibGljIF92Y3I7XG4gICAgQElucHV0KCkgcHVibGljIGl0ZW1zTGVuZ3RoOiBudW1iZXI7XG5cbiAgICBwdWJsaWMgc2V0IGhlaWdodCh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9oZWlnaHQgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICAgIHB1YmxpYyBjc3NDbGFzc2VzID0gJ2lneC12aGVscGVyLS12ZXJ0aWNhbCc7XG5cbiAgICBwdWJsaWMgZGVzdHJveWVkO1xuICAgIHByaXZhdGUgX2hlaWdodDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuICAgIH1cblxufVxuIl19