/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostBinding, Input, ViewChild, ViewContainerRef } from '@angular/core';
/**
 * @hidden
 */
var HVirtualHelperComponent = /** @class */ (function () {
    function HVirtualHelperComponent(elementRef) {
        this.elementRef = elementRef;
        this.cssClasses = 'igx-vhelper--horizontal';
    }
    HVirtualHelperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-horizontal-virtual-helper',
                    template: '<div #horizontal_container class="igx-vhelper__placeholder-content" [style.width.px]="width"></div>'
                }] }
    ];
    /** @nocollapse */
    HVirtualHelperComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    HVirtualHelperComponent.propDecorators = {
        _vcr: [{ type: ViewChild, args: ['horizontal_container', { read: ViewContainerRef, static: true },] }],
        width: [{ type: Input }],
        cssClasses: [{ type: HostBinding, args: ['class',] }]
    };
    return HVirtualHelperComponent;
}());
export { HVirtualHelperComponent };
if (false) {
    /** @type {?} */
    HVirtualHelperComponent.prototype._vcr;
    /** @type {?} */
    HVirtualHelperComponent.prototype.width;
    /** @type {?} */
    HVirtualHelperComponent.prototype.cssClasses;
    /** @type {?} */
    HVirtualHelperComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9yaXpvbnRhbC52aXJ0dWFsLmhlbHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvZm9yLW9mL2hvcml6b250YWwudmlydHVhbC5oZWxwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUt2RztJQVVJLGlDQUFtQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRmxDLGVBQVUsR0FBRyx5QkFBeUIsQ0FBQztJQUVELENBQUM7O2dCQVZqRCxTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsUUFBUSxFQUFFLHFHQUFxRztpQkFDbEg7Ozs7Z0JBUm1CLFVBQVU7Ozt1QkFVekIsU0FBUyxTQUFDLHNCQUFzQixFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7d0JBQzFFLEtBQUs7NkJBQ0wsV0FBVyxTQUFDLE9BQU87O0lBSXhCLDhCQUFDO0NBQUEsQUFYRCxJQVdDO1NBUFksdUJBQXVCOzs7SUFDaEMsdUNBQXlGOztJQUN6Rix3Q0FBOEI7O0lBQzlCLDZDQUM4Qzs7SUFFbEMsNkNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpZ3gtaG9yaXpvbnRhbC12aXJ0dWFsLWhlbHBlcicsXG4gICAgdGVtcGxhdGU6ICc8ZGl2ICNob3Jpem9udGFsX2NvbnRhaW5lciBjbGFzcz1cImlneC12aGVscGVyX19wbGFjZWhvbGRlci1jb250ZW50XCIgW3N0eWxlLndpZHRoLnB4XT1cIndpZHRoXCI+PC9kaXY+J1xufSlcbmV4cG9ydCBjbGFzcyBIVmlydHVhbEhlbHBlckNvbXBvbmVudCB7XG4gICAgQFZpZXdDaGlsZCgnaG9yaXpvbnRhbF9jb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgX3ZjcjtcbiAgICBASW5wdXQoKSBwdWJsaWMgd2lkdGg6IG51bWJlcjtcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgICBwdWJsaWMgY3NzQ2xhc3NlcyA9ICdpZ3gtdmhlbHBlci0taG9yaXpvbnRhbCc7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XG59XG4iXX0=