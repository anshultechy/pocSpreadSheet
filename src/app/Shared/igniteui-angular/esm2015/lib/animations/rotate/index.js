/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, animation, style } from '@angular/animations';
import { EaseIn, EaseOut } from '../easings';
/** @type {?} */
const baseRecipe = [
    style({
        opacity: `{{startOpacity}}`,
        transform: `rotate3d({{rotateX}},{{rotateY}},{{rotateZ}},{{startAngle}}deg)`,
        transformOrigin: `{{xPos}} {{yPos}}`
    }),
    animate(`{{duration}} {{delay}} {{easing}}`, style({
        offset: 0,
        opacity: `{{endOpacity}}`,
        transform: `rotate3d({{rotateX}},{{rotateY}},{{rotateZ}},{{endAngle}}deg)`,
        transformOrigin: `{{xPos}} {{yPos}}`
    }))
];
/** @type {?} */
const baseInParams = {
    delay: '0s',
    duration: '600ms',
    easing: EaseOut.quad,
    endAngle: 0,
    endOpacity: 1,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 1,
    startAngle: -360,
    startOpacity: 0,
    xPos: 'center',
    yPos: 'center'
};
/** @type {?} */
const baseOutParams = Object.assign({}, baseInParams, { easing: EaseIn.quad, endOpacity: 0, startOpacity: 1 });
/** @type {?} */
const rotateInCenter = animation(baseRecipe, {
    params: Object.assign({}, baseInParams)
});
/** @type {?} */
const rotateOutCenter = animation(baseRecipe, {
    params: Object.assign({}, baseOutParams)
});
/** @type {?} */
const rotateInTop = animation(baseRecipe, {
    params: Object.assign({}, baseInParams, { xPos: 'top' })
});
/** @type {?} */
const rotateOutTop = animation(baseRecipe, {
    params: Object.assign({}, baseOutParams, { xPos: 'top' })
});
/** @type {?} */
const rotateInRight = animation(baseRecipe, {
    params: Object.assign({}, baseInParams, { xPos: 'right' })
});
/** @type {?} */
const rotateOutRight = animation(baseRecipe, {
    params: Object.assign({}, baseOutParams, { xPos: 'right' })
});
/** @type {?} */
const rotateInBottom = animation(baseRecipe, {
    params: Object.assign({}, baseInParams, { xPos: 'bottom' })
});
/** @type {?} */
const rotateOutBottom = animation(baseRecipe, {
    params: Object.assign({}, baseOutParams, { xPos: 'bottom' })
});
/** @type {?} */
const rotateInLeft = animation(baseRecipe, {
    params: Object.assign({}, baseInParams, { xPos: 'left' })
});
/** @type {?} */
const rotateOutLeft = animation(baseRecipe, {
    params: Object.assign({}, baseOutParams, { xPos: 'left' })
});
/** @type {?} */
const rotateInTr = animation(baseRecipe, {
    params: Object.assign({}, baseInParams, { xPos: 'right', yPos: 'top' })
});
/** @type {?} */
const rotateOutTr = animation(baseRecipe, {
    params: Object.assign({}, baseOutParams, { xPos: 'right', yPos: 'top' })
});
/** @type {?} */
const rotateInBr = animation(baseRecipe, {
    params: Object.assign({}, baseInParams, { xPos: 'right', yPos: 'bottom' })
});
/** @type {?} */
const rotateOutBr = animation(baseRecipe, {
    params: Object.assign({}, baseOutParams, { xPos: 'right', yPos: 'bottom' })
});
/** @type {?} */
const rotateInBl = animation(baseRecipe, {
    params: Object.assign({}, baseInParams, { xPos: 'left', yPos: 'bottom' })
});
/** @type {?} */
const rotateOutBl = animation(baseRecipe, {
    params: Object.assign({}, baseOutParams, { xPos: 'left', yPos: 'bottom' })
});
/** @type {?} */
const rotateInTl = animation(baseRecipe, {
    params: Object.assign({}, baseInParams, { xPos: 'left', yPos: 'top' })
});
/** @type {?} */
const rotateOutTl = animation(baseRecipe, {
    params: Object.assign({}, baseOutParams, { xPos: 'left', yPos: 'top' })
});
/** @type {?} */
const rotateInDiagonal1 = animation(baseRecipe, {
    params: Object.assign({}, baseInParams, { rotateX: 1, rotateY: 1, rotateZ: 0 })
});
/** @type {?} */
const rotateOutDiagonal1 = animation(baseRecipe, {
    params: Object.assign({}, baseOutParams, { rotateX: 1, rotateY: 1, rotateZ: 0 })
});
/** @type {?} */
const rotateInDiagonal2 = animation(baseRecipe, {
    params: Object.assign({}, baseInParams, { rotateX: -1, rotateY: 1, rotateZ: 0 })
});
/** @type {?} */
const rotateOutDiagonal2 = animation(baseRecipe, {
    params: Object.assign({}, baseOutParams, { rotateX: -1, rotateY: 1, rotateZ: 0 })
});
/** @type {?} */
const rotateInHor = animation(baseRecipe, {
    params: Object.assign({}, baseInParams, { rotateX: 0, rotateY: 1, rotateZ: 0 })
});
/** @type {?} */
const rotateOutHor = animation(baseRecipe, {
    params: Object.assign({}, baseOutParams, { rotateX: 0, rotateY: 1, rotateZ: 0 })
});
/** @type {?} */
const rotateInVer = animation(baseRecipe, {
    params: Object.assign({}, baseInParams, { rotateX: 1, rotateY: 0, rotateZ: 0 })
});
/** @type {?} */
const rotateOutVer = animation(baseRecipe, {
    params: Object.assign({}, baseOutParams, { rotateX: 1, rotateY: 0, rotateZ: 0 })
});
export { rotateInCenter, rotateInTop, rotateInRight, rotateInLeft, rotateInBottom, rotateInTr, rotateInBr, rotateInBl, rotateInTl, rotateInDiagonal1, rotateInDiagonal2, rotateInHor, rotateInVer, rotateOutCenter, rotateOutTop, rotateOutRight, rotateOutLeft, rotateOutBottom, rotateOutTr, rotateOutBr, rotateOutBl, rotateOutTl, rotateOutDiagonal1, rotateOutDiagonal2, rotateOutHor, rotateOutVer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2FuaW1hdGlvbnMvcm90YXRlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBaUQsS0FBSyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDL0csT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7O01BR3ZDLFVBQVUsR0FBd0I7SUFDcEMsS0FBSyxDQUFDO1FBQ0YsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixTQUFTLEVBQUUsaUVBQWlFO1FBQzVFLGVBQWUsRUFBRSxtQkFBbUI7S0FDdkMsQ0FBQztJQUNGLE9BQU8sQ0FDSCxtQ0FBbUMsRUFDbkMsS0FBSyxDQUFDO1FBQ0YsTUFBTSxFQUFFLENBQUM7UUFDVCxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFNBQVMsRUFBRSwrREFBK0Q7UUFDMUUsZUFBZSxFQUFFLG1CQUFtQjtLQUN2QyxDQUFDLENBQ0w7Q0FDSjs7TUFFSyxZQUFZLEdBQXFCO0lBQ25DLEtBQUssRUFBRSxJQUFJO0lBQ1gsUUFBUSxFQUFFLE9BQU87SUFDakIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxJQUFJO0lBQ3BCLFFBQVEsRUFBRSxDQUFDO0lBQ1gsVUFBVSxFQUFFLENBQUM7SUFDYixPQUFPLEVBQUUsQ0FBQztJQUNWLE9BQU8sRUFBRSxDQUFDO0lBQ1YsT0FBTyxFQUFFLENBQUM7SUFDVixVQUFVLEVBQUUsQ0FBQyxHQUFHO0lBQ2hCLFlBQVksRUFBRSxDQUFDO0lBQ2YsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtDQUNqQjs7TUFFSyxhQUFhLHFCQUNaLFlBQVksSUFDZixNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUksRUFDbkIsVUFBVSxFQUFFLENBQUMsRUFDYixZQUFZLEVBQUUsQ0FBQyxHQUNsQjs7TUFF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QkFDQyxZQUFZLElBQ2YsT0FBTyxFQUFFLENBQUMsRUFDVixPQUFPLEVBQUUsQ0FBQyxFQUNWLE9BQU8sRUFBRSxDQUFDLEdBQ2I7Q0FDSixDQUFDOztNQUVJLFlBQVksR0FBK0IsU0FBUyxDQUFDLFVBQVUsRUFBRTtJQUNuRSxNQUFNLG9CQUNDLGFBQWEsSUFDaEIsT0FBTyxFQUFFLENBQUMsRUFDVixPQUFPLEVBQUUsQ0FBQyxFQUNWLE9BQU8sRUFBRSxDQUFDLEdBQ2I7Q0FDSixDQUFDO0FBRUYsT0FBTyxFQUNILGNBQWMsRUFDZCxXQUFXLEVBQ1gsYUFBYSxFQUNiLFlBQVksRUFDWixjQUFjLEVBQ2QsVUFBVSxFQUNWLFVBQVUsRUFDVixVQUFVLEVBQ1YsVUFBVSxFQUNWLGlCQUFpQixFQUNqQixpQkFBaUIsRUFDakIsV0FBVyxFQUNYLFdBQVcsRUFDWCxlQUFlLEVBQ2YsWUFBWSxFQUNaLGNBQWMsRUFDZCxhQUFhLEVBQ2IsZUFBZSxFQUNmLFdBQVcsRUFDWCxXQUFXLEVBQ1gsV0FBVyxFQUNYLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLFlBQVksRUFDWixZQUFZLEVBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUsIGFuaW1hdGlvbiwgQW5pbWF0aW9uTWV0YWRhdGEsIEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhLCBzdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgRWFzZUluLCBFYXNlT3V0IH0gZnJvbSAnLi4vZWFzaW5ncyc7XG5pbXBvcnQgeyBJQW5pbWF0aW9uUGFyYW1zIH0gZnJvbSAnLi4vbWFpbic7XG5cbmNvbnN0IGJhc2VSZWNpcGU6IEFuaW1hdGlvbk1ldGFkYXRhW10gPSBbXG4gICAgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5OiBge3tzdGFydE9wYWNpdHl9fWAsXG4gICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZTNkKHt7cm90YXRlWH19LHt7cm90YXRlWX19LHt7cm90YXRlWn19LHt7c3RhcnRBbmdsZX19ZGVnKWAsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogYHt7eFBvc319IHt7eVBvc319YFxuICAgIH0pLFxuICAgIGFuaW1hdGUoXG4gICAgICAgIGB7e2R1cmF0aW9ufX0ge3tkZWxheX19IHt7ZWFzaW5nfX1gLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgICBvcGFjaXR5OiBge3tlbmRPcGFjaXR5fX1gLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlM2Qoe3tyb3RhdGVYfX0se3tyb3RhdGVZfX0se3tyb3RhdGVafX0se3tlbmRBbmdsZX19ZGVnKWAsXG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IGB7e3hQb3N9fSB7e3lQb3N9fWBcbiAgICAgICAgfSlcbiAgICApXG5dO1xuXG5jb25zdCBiYXNlSW5QYXJhbXM6IElBbmltYXRpb25QYXJhbXMgPSB7XG4gICAgZGVsYXk6ICcwcycsXG4gICAgZHVyYXRpb246ICc2MDBtcycsXG4gICAgZWFzaW5nOiBFYXNlT3V0LnF1YWQsXG4gICAgZW5kQW5nbGU6IDAsXG4gICAgZW5kT3BhY2l0eTogMSxcbiAgICByb3RhdGVYOiAwLFxuICAgIHJvdGF0ZVk6IDAsXG4gICAgcm90YXRlWjogMSxcbiAgICBzdGFydEFuZ2xlOiAtMzYwLFxuICAgIHN0YXJ0T3BhY2l0eTogMCxcbiAgICB4UG9zOiAnY2VudGVyJyxcbiAgICB5UG9zOiAnY2VudGVyJ1xufTtcblxuY29uc3QgYmFzZU91dFBhcmFtczogSUFuaW1hdGlvblBhcmFtcyA9IHtcbiAgICAuLi5iYXNlSW5QYXJhbXMsXG4gICAgZWFzaW5nOiBFYXNlSW4ucXVhZCxcbiAgICBlbmRPcGFjaXR5OiAwLFxuICAgIHN0YXJ0T3BhY2l0eTogMVxufTtcblxuY29uc3Qgcm90YXRlSW5DZW50ZXI6IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhID0gYW5pbWF0aW9uKGJhc2VSZWNpcGUsIHtcbiAgICBwYXJhbXM6IHsgLi4uYmFzZUluUGFyYW1zIH1cbn0pO1xuXG5jb25zdCByb3RhdGVPdXRDZW50ZXI6IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhID0gYW5pbWF0aW9uKGJhc2VSZWNpcGUsIHtcbiAgICBwYXJhbXM6IHsgLi4uYmFzZU91dFBhcmFtcyB9XG59KTtcblxuY29uc3Qgcm90YXRlSW5Ub3A6IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhID0gYW5pbWF0aW9uKGJhc2VSZWNpcGUsIHtcbiAgICBwYXJhbXM6IHtcbiAgICAgICAgLi4uYmFzZUluUGFyYW1zLFxuICAgICAgICB4UG9zOiAndG9wJ1xuICAgIH1cbn0pO1xuXG5jb25zdCByb3RhdGVPdXRUb3A6IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhID0gYW5pbWF0aW9uKGJhc2VSZWNpcGUsIHtcbiAgICBwYXJhbXM6IHtcbiAgICAgICAgLi4uYmFzZU91dFBhcmFtcyxcbiAgICAgICAgeFBvczogJ3RvcCdcbiAgICB9XG59KTtcblxuY29uc3Qgcm90YXRlSW5SaWdodDogQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEgPSBhbmltYXRpb24oYmFzZVJlY2lwZSwge1xuICAgIHBhcmFtczoge1xuICAgICAgICAuLi5iYXNlSW5QYXJhbXMsXG4gICAgICAgIHhQb3M6ICdyaWdodCdcbiAgICB9XG59KTtcblxuY29uc3Qgcm90YXRlT3V0UmlnaHQ6IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhID0gYW5pbWF0aW9uKGJhc2VSZWNpcGUsIHtcbiAgICBwYXJhbXM6IHtcbiAgICAgICAgLi4uYmFzZU91dFBhcmFtcyxcbiAgICAgICAgeFBvczogJ3JpZ2h0J1xuICAgIH1cbn0pO1xuXG5jb25zdCByb3RhdGVJbkJvdHRvbTogQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEgPSBhbmltYXRpb24oYmFzZVJlY2lwZSwge1xuICAgIHBhcmFtczoge1xuICAgICAgICAuLi5iYXNlSW5QYXJhbXMsXG4gICAgICAgIHhQb3M6ICdib3R0b20nXG4gICAgfVxufSk7XG5cbmNvbnN0IHJvdGF0ZU91dEJvdHRvbTogQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEgPSBhbmltYXRpb24oYmFzZVJlY2lwZSwge1xuICAgIHBhcmFtczoge1xuICAgICAgICAuLi5iYXNlT3V0UGFyYW1zLFxuICAgICAgICB4UG9zOiAnYm90dG9tJ1xuICAgIH1cbn0pO1xuXG5jb25zdCByb3RhdGVJbkxlZnQ6IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhID0gYW5pbWF0aW9uKGJhc2VSZWNpcGUsIHtcbiAgICBwYXJhbXM6IHtcbiAgICAgICAgLi4uYmFzZUluUGFyYW1zLFxuICAgICAgICB4UG9zOiAnbGVmdCdcbiAgICB9XG59KTtcblxuY29uc3Qgcm90YXRlT3V0TGVmdDogQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEgPSBhbmltYXRpb24oYmFzZVJlY2lwZSwge1xuICAgIHBhcmFtczoge1xuICAgICAgICAuLi5iYXNlT3V0UGFyYW1zLFxuICAgICAgICB4UG9zOiAnbGVmdCdcbiAgICB9XG59KTtcblxuY29uc3Qgcm90YXRlSW5UcjogQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEgPSBhbmltYXRpb24oYmFzZVJlY2lwZSwge1xuICAgIHBhcmFtczoge1xuICAgICAgICAuLi5iYXNlSW5QYXJhbXMsXG4gICAgICAgIHhQb3M6ICdyaWdodCcsXG4gICAgICAgIHlQb3M6ICd0b3AnXG4gICAgfVxufSk7XG5cbmNvbnN0IHJvdGF0ZU91dFRyOiBBbmltYXRpb25SZWZlcmVuY2VNZXRhZGF0YSA9IGFuaW1hdGlvbihiYXNlUmVjaXBlLCB7XG4gICAgcGFyYW1zOiB7XG4gICAgICAgIC4uLmJhc2VPdXRQYXJhbXMsXG4gICAgICAgIHhQb3M6ICdyaWdodCcsXG4gICAgICAgIHlQb3M6ICd0b3AnXG4gICAgfVxufSk7XG5cbmNvbnN0IHJvdGF0ZUluQnI6IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhID0gYW5pbWF0aW9uKGJhc2VSZWNpcGUsIHtcbiAgICBwYXJhbXM6IHtcbiAgICAgICAgLi4uYmFzZUluUGFyYW1zLFxuICAgICAgICB4UG9zOiAncmlnaHQnLFxuICAgICAgICB5UG9zOiAnYm90dG9tJ1xuICAgIH1cbn0pO1xuXG5jb25zdCByb3RhdGVPdXRCcjogQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEgPSBhbmltYXRpb24oYmFzZVJlY2lwZSwge1xuICAgIHBhcmFtczoge1xuICAgICAgICAuLi5iYXNlT3V0UGFyYW1zLFxuICAgICAgICB4UG9zOiAncmlnaHQnLFxuICAgICAgICB5UG9zOiAnYm90dG9tJ1xuICAgIH1cbn0pO1xuXG5jb25zdCByb3RhdGVJbkJsOiBBbmltYXRpb25SZWZlcmVuY2VNZXRhZGF0YSA9IGFuaW1hdGlvbihiYXNlUmVjaXBlLCB7XG4gICAgcGFyYW1zOiB7XG4gICAgICAgIC4uLmJhc2VJblBhcmFtcyxcbiAgICAgICAgeFBvczogJ2xlZnQnLFxuICAgICAgICB5UG9zOiAnYm90dG9tJ1xuICAgIH1cbn0pO1xuXG5jb25zdCByb3RhdGVPdXRCbDogQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEgPSBhbmltYXRpb24oYmFzZVJlY2lwZSwge1xuICAgIHBhcmFtczoge1xuICAgICAgICAuLi5iYXNlT3V0UGFyYW1zLFxuICAgICAgICB4UG9zOiAnbGVmdCcsXG4gICAgICAgIHlQb3M6ICdib3R0b20nXG4gICAgfVxufSk7XG5cbmNvbnN0IHJvdGF0ZUluVGw6IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhID0gYW5pbWF0aW9uKGJhc2VSZWNpcGUsIHtcbiAgICBwYXJhbXM6IHtcbiAgICAgICAgLi4uYmFzZUluUGFyYW1zLFxuICAgICAgICB4UG9zOiAnbGVmdCcsXG4gICAgICAgIHlQb3M6ICd0b3AnXG4gICAgfVxufSk7XG5cbmNvbnN0IHJvdGF0ZU91dFRsOiBBbmltYXRpb25SZWZlcmVuY2VNZXRhZGF0YSA9IGFuaW1hdGlvbihiYXNlUmVjaXBlLCB7XG4gICAgcGFyYW1zOiB7XG4gICAgICAgIC4uLmJhc2VPdXRQYXJhbXMsXG4gICAgICAgIHhQb3M6ICdsZWZ0JyxcbiAgICAgICAgeVBvczogJ3RvcCdcbiAgICB9XG59KTtcblxuY29uc3Qgcm90YXRlSW5EaWFnb25hbDE6IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhID0gYW5pbWF0aW9uKGJhc2VSZWNpcGUsIHtcbiAgICBwYXJhbXM6IHtcbiAgICAgICAgLi4uYmFzZUluUGFyYW1zLFxuICAgICAgICByb3RhdGVYOiAxLFxuICAgICAgICByb3RhdGVZOiAxLFxuICAgICAgICByb3RhdGVaOiAwXG4gICAgfVxufSk7XG5cbmNvbnN0IHJvdGF0ZU91dERpYWdvbmFsMTogQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEgPSBhbmltYXRpb24oYmFzZVJlY2lwZSwge1xuICAgIHBhcmFtczoge1xuICAgICAgICAuLi5iYXNlT3V0UGFyYW1zLFxuICAgICAgICByb3RhdGVYOiAxLFxuICAgICAgICByb3RhdGVZOiAxLFxuICAgICAgICByb3RhdGVaOiAwXG4gICAgfVxufSk7XG5cbmNvbnN0IHJvdGF0ZUluRGlhZ29uYWwyOiBBbmltYXRpb25SZWZlcmVuY2VNZXRhZGF0YSA9IGFuaW1hdGlvbihiYXNlUmVjaXBlLCB7XG4gICAgcGFyYW1zOiB7XG4gICAgICAgIC4uLmJhc2VJblBhcmFtcyxcbiAgICAgICAgcm90YXRlWDogLTEsXG4gICAgICAgIHJvdGF0ZVk6IDEsXG4gICAgICAgIHJvdGF0ZVo6IDBcbiAgICB9XG59KTtcblxuY29uc3Qgcm90YXRlT3V0RGlhZ29uYWwyOiBBbmltYXRpb25SZWZlcmVuY2VNZXRhZGF0YSA9IGFuaW1hdGlvbihiYXNlUmVjaXBlLCB7XG4gICAgcGFyYW1zOiB7XG4gICAgICAgIC4uLmJhc2VPdXRQYXJhbXMsXG4gICAgICAgIHJvdGF0ZVg6IC0xLFxuICAgICAgICByb3RhdGVZOiAxLFxuICAgICAgICByb3RhdGVaOiAwXG4gICAgfVxufSk7XG5cbmNvbnN0IHJvdGF0ZUluSG9yOiBBbmltYXRpb25SZWZlcmVuY2VNZXRhZGF0YSA9IGFuaW1hdGlvbihiYXNlUmVjaXBlLCB7XG4gICAgcGFyYW1zOiB7XG4gICAgICAgIC4uLmJhc2VJblBhcmFtcyxcbiAgICAgICAgcm90YXRlWDogMCxcbiAgICAgICAgcm90YXRlWTogMSxcbiAgICAgICAgcm90YXRlWjogMFxuICAgIH1cbn0pO1xuXG5jb25zdCByb3RhdGVPdXRIb3I6IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhID0gYW5pbWF0aW9uKGJhc2VSZWNpcGUsIHtcbiAgICBwYXJhbXM6IHtcbiAgICAgICAgLi4uYmFzZU91dFBhcmFtcyxcbiAgICAgICAgcm90YXRlWDogMCxcbiAgICAgICAgcm90YXRlWTogMSxcbiAgICAgICAgcm90YXRlWjogMFxuICAgIH1cbn0pO1xuXG5jb25zdCByb3RhdGVJblZlcjogQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEgPSBhbmltYXRpb24oYmFzZVJlY2lwZSwge1xuICAgIHBhcmFtczoge1xuICAgICAgICAuLi5iYXNlSW5QYXJhbXMsXG4gICAgICAgIHJvdGF0ZVg6IDEsXG4gICAgICAgIHJvdGF0ZVk6IDAsXG4gICAgICAgIHJvdGF0ZVo6IDBcbiAgICB9XG59KTtcblxuY29uc3Qgcm90YXRlT3V0VmVyOiBBbmltYXRpb25SZWZlcmVuY2VNZXRhZGF0YSA9IGFuaW1hdGlvbihiYXNlUmVjaXBlLCB7XG4gICAgcGFyYW1zOiB7XG4gICAgICAgIC4uLmJhc2VPdXRQYXJhbXMsXG4gICAgICAgIHJvdGF0ZVg6IDEsXG4gICAgICAgIHJvdGF0ZVk6IDAsXG4gICAgICAgIHJvdGF0ZVo6IDBcbiAgICB9XG59KTtcblxuZXhwb3J0IHtcbiAgICByb3RhdGVJbkNlbnRlcixcbiAgICByb3RhdGVJblRvcCxcbiAgICByb3RhdGVJblJpZ2h0LFxuICAgIHJvdGF0ZUluTGVmdCxcbiAgICByb3RhdGVJbkJvdHRvbSxcbiAgICByb3RhdGVJblRyLFxuICAgIHJvdGF0ZUluQnIsXG4gICAgcm90YXRlSW5CbCxcbiAgICByb3RhdGVJblRsLFxuICAgIHJvdGF0ZUluRGlhZ29uYWwxLFxuICAgIHJvdGF0ZUluRGlhZ29uYWwyLFxuICAgIHJvdGF0ZUluSG9yLFxuICAgIHJvdGF0ZUluVmVyLFxuICAgIHJvdGF0ZU91dENlbnRlcixcbiAgICByb3RhdGVPdXRUb3AsXG4gICAgcm90YXRlT3V0UmlnaHQsXG4gICAgcm90YXRlT3V0TGVmdCxcbiAgICByb3RhdGVPdXRCb3R0b20sXG4gICAgcm90YXRlT3V0VHIsXG4gICAgcm90YXRlT3V0QnIsXG4gICAgcm90YXRlT3V0QmwsXG4gICAgcm90YXRlT3V0VGwsXG4gICAgcm90YXRlT3V0RGlhZ29uYWwxLFxuICAgIHJvdGF0ZU91dERpYWdvbmFsMixcbiAgICByb3RhdGVPdXRIb3IsXG4gICAgcm90YXRlT3V0VmVyXG59O1xuIl19