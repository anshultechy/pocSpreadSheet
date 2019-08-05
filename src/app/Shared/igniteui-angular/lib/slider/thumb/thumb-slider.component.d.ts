import { ElementRef, EventEmitter, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { SliderHandle } from '../slider.common';
import { Subject } from 'rxjs';
/**
 * @hidden
 */
export declare class IgxSliderThumbComponent implements OnInit, OnDestroy {
    private _elementRef;
    private _isActiveLabel;
    private _isPressed;
    private _destroy$;
    private readonly thumbPositionX;
    isActive: boolean;
    value: number;
    continuous: boolean;
    thumbLabelVisibilityDuration: any;
    disabled: boolean;
    onPan: Subject<number>;
    stepDistance: number;
    step: number;
    templateRef: TemplateRef<any>;
    context: any;
    type: SliderHandle;
    onThumbValueChange: EventEmitter<number>;
    onChange: EventEmitter<any>;
    onHoverChange: EventEmitter<boolean>;
    tabindex: number;
    zIndex: number;
    readonly thumbFromClass: boolean;
    readonly thumbToClass: boolean;
    readonly thumbFromActiveClass: boolean;
    readonly thumbToActiveClass: boolean;
    readonly thumbPressedClass: boolean;
    readonly nativeElement: any;
    readonly destroy: Subject<boolean>;
    constructor(_elementRef: ElementRef);
    /**
     * @hidden
     */
    ngOnInit(): void;
    /**
     * @hidden
     */
    ngOnDestroy(): void;
    onPinterEnter(): void;
    onPointerLeave(): void;
    onKeyDown(event: KeyboardEvent): void;
    onBlur(): void;
    onFocusListener(): void;
    /**
     * Show thumb label and ripple.
     */
    showThumbIndicators(): void;
    /**
     * Hide thumb label and ripple.
     */
    hideThumbIndicators(): void;
    private updateThumbValue;
    private calculateTrackUpdate;
    private stepToProceed;
    private toggleThumbIndicators;
}