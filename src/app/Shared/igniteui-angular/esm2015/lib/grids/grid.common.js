/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT, DatePipe, DecimalPipe } from '@angular/common';
import { ChangeDetectorRef, Directive, ElementRef, Inject, Injectable, Input, NgZone, Output, Pipe, Renderer2, TemplateRef, LOCALE_ID, HostListener } from '@angular/core';
import { animationFrameScheduler, fromEvent, interval, Subject } from 'rxjs';
import { map, switchMap, takeUntil, throttle, debounceTime } from 'rxjs/operators';
import { IgxColumnComponent } from './column.component';
import { IgxDragDirective, IgxDropDirective } from '../directives/dragdrop/dragdrop.directive';
import { IgxGridForOfDirective } from '../directives/for-of/for_of.directive';
import { ConnectedPositioningStrategy } from '../services';
import { VerticalAlignment } from '../services/overlay/utilities';
import { scaleInVerBottom, scaleInVerTop } from '../animations/main';
import { IgxColumnResizingService } from './grid-column-resizing.service';
import { IgxForOfSyncService } from '../directives/for-of/for_of.sync.service';
import * as i0 from "@angular/core";
/** @type {?} */
const DEFAULT_DATE_FORMAT = 'mediumDate';
/** @type {?} */
const DEBOUNCE_TIME = 200;
/**
 * @hidden
 */
export class IgxResizeHandleDirective {
    /**
     * @param {?} zone
     * @param {?} element
     * @param {?} colResizingService
     */
    constructor(zone, element, colResizingService) {
        this.zone = zone;
        this.element = element;
        this.colResizingService = colResizingService;
        /**
         * @hidden
         */
        this._dblClick = false;
        /**
         * @hidden
         */
        this.destroy$ = new Subject();
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    /**
     * @hidden
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.column.columnGroup && this.column.resizable) {
            this.zone.runOutsideAngular(() => {
                fromEvent(this.element.nativeElement, 'mousedown').pipe(debounceTime(DEBOUNCE_TIME), takeUntil(this.destroy$)).subscribe((event) => {
                    if (this._dblClick) {
                        this._dblClick = false;
                        return;
                    }
                    if (event.button === 0) {
                        this._onResizeAreaMouseDown(event);
                        this.column.grid.resizeLine.resizer.onMousedown(event);
                    }
                });
            });
            fromEvent(this.element.nativeElement, 'mouseup').pipe(debounceTime(DEBOUNCE_TIME), takeUntil(this.destroy$)).subscribe(() => {
                this.colResizingService.isColumnResizing = false;
                this.colResizingService.showResizer = false;
                this.column.grid.cdr.detectChanges();
            });
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    onMouseOver() {
        this.colResizingService.resizeCursor = 'col-resize';
    }
    /**
     * @hidden
     * @return {?}
     */
    onDoubleClick() {
        this._dblClick = true;
        this.colResizingService.column = this.column;
        this.colResizingService.autosizeColumnOnDblClick();
    }
    /**
     * @hidden
     * @private
     * @param {?} event
     * @return {?}
     */
    _onResizeAreaMouseDown(event) {
        this.colResizingService.column = this.column;
        this.colResizingService.isColumnResizing = true;
        this.colResizingService.startResizePos = event.clientX;
        this.colResizingService.showResizer = true;
        this.column.grid.cdr.detectChanges();
    }
}
IgxResizeHandleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxResizeHandle]'
            },] }
];
/** @nocollapse */
IgxResizeHandleDirective.ctorParameters = () => [
    { type: NgZone },
    { type: ElementRef },
    { type: IgxColumnResizingService }
];
IgxResizeHandleDirective.propDecorators = {
    column: [{ type: Input, args: ['igxResizeHandle',] }],
    onMouseOver: [{ type: HostListener, args: ['mouseover',] }],
    onDoubleClick: [{ type: HostListener, args: ['dblclick',] }]
};
if (false) {
    /**
     * @hidden
     * @type {?}
     */
    IgxResizeHandleDirective.prototype.column;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxResizeHandleDirective.prototype._dblClick;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxResizeHandleDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    IgxResizeHandleDirective.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    IgxResizeHandleDirective.prototype.element;
    /** @type {?} */
    IgxResizeHandleDirective.prototype.colResizingService;
}
/**
 * @hidden
 */
export class IgxColumnResizerDirective {
    /**
     * @param {?} element
     * @param {?} document
     * @param {?} zone
     */
    constructor(element, document, zone) {
        this.element = element;
        this.document = document;
        this.zone = zone;
        this.restrictHResizeMin = Number.MIN_SAFE_INTEGER;
        this.restrictHResizeMax = Number.MAX_SAFE_INTEGER;
        this.resizeEnd = new Subject();
        this.resizeStart = new Subject();
        this.resize = new Subject();
        this._destroy = new Subject();
        this.resizeStart.pipe(map((event) => event.clientX), takeUntil(this._destroy), switchMap((offset) => this.resize.pipe(map((event) => event.clientX - offset), takeUntil(this.resizeEnd), takeUntil(this._destroy)))).subscribe((pos) => {
            /** @type {?} */
            const left = this._left + pos;
            /** @type {?} */
            const min = this._left - this.restrictHResizeMin;
            /** @type {?} */
            const max = this._left + this.restrictHResizeMax;
            this.left = left < min ? min : left;
            if (left > max) {
                this.left = max;
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.zone.runOutsideAngular(() => {
            fromEvent(this.document.defaultView, 'mousemove').pipe(throttle(() => interval(0, animationFrameScheduler)), takeUntil(this._destroy)).subscribe((res) => this.onMousemove(res));
            fromEvent(this.document.defaultView, 'mouseup').pipe(takeUntil(this._destroy))
                .subscribe((res) => this.onMouseup(res));
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy.next(true);
        this._destroy.complete();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set left(val) {
        requestAnimationFrame(() => this.element.nativeElement.style.left = val + 'px');
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set top(val) {
        requestAnimationFrame(() => this.element.nativeElement.style.top = val + 'px');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseup(event) {
        this.resizeEnd.next(event);
        this.resizeEnd.complete();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMousedown(event) {
        event.preventDefault();
        /** @type {?} */
        const parent = this.element.nativeElement.parentElement.parentElement;
        this.left = this._left = event.clientX - parent.getBoundingClientRect().left;
        this.top = event.target.getBoundingClientRect().top - parent.getBoundingClientRect().top;
        this.resizeStart.next(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMousemove(event) {
        event.preventDefault();
        this.resize.next(event);
    }
}
IgxColumnResizerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxResizer]'
            },] }
];
/** @nocollapse */
IgxColumnResizerDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NgZone }
];
IgxColumnResizerDirective.propDecorators = {
    restrictHResizeMin: [{ type: Input }],
    restrictHResizeMax: [{ type: Input }],
    resizeEnd: [{ type: Output }],
    resizeStart: [{ type: Output }],
    resize: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    IgxColumnResizerDirective.prototype.restrictHResizeMin;
    /** @type {?} */
    IgxColumnResizerDirective.prototype.restrictHResizeMax;
    /** @type {?} */
    IgxColumnResizerDirective.prototype.resizeEnd;
    /** @type {?} */
    IgxColumnResizerDirective.prototype.resizeStart;
    /** @type {?} */
    IgxColumnResizerDirective.prototype.resize;
    /**
     * @type {?}
     * @private
     */
    IgxColumnResizerDirective.prototype._left;
    /**
     * @type {?}
     * @private
     */
    IgxColumnResizerDirective.prototype._destroy;
    /** @type {?} */
    IgxColumnResizerDirective.prototype.element;
    /** @type {?} */
    IgxColumnResizerDirective.prototype.document;
    /** @type {?} */
    IgxColumnResizerDirective.prototype.zone;
}
export class IgxFilterCellTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
IgxFilterCellTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxFilterCellTemplate]'
            },] }
];
/** @nocollapse */
IgxFilterCellTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    IgxFilterCellTemplateDirective.prototype.template;
}
export class IgxCellTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
IgxCellTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxCell]'
            },] }
];
/** @nocollapse */
IgxCellTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    IgxCellTemplateDirective.prototype.template;
}
export class IgxCellHeaderTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
IgxCellHeaderTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxHeader]'
            },] }
];
/** @nocollapse */
IgxCellHeaderTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    IgxCellHeaderTemplateDirective.prototype.template;
}
/**
 * @hidden
 */
export class IgxCellFooterTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
IgxCellFooterTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxFooter]'
            },] }
];
/** @nocollapse */
IgxCellFooterTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    IgxCellFooterTemplateDirective.prototype.template;
}
export class IgxCellEditorTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
IgxCellEditorTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxCellEditor]'
            },] }
];
/** @nocollapse */
IgxCellEditorTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    IgxCellEditorTemplateDirective.prototype.template;
}
/**
 * @hidden
 */
export class IgxColumnMovingService {
    /**
     * @return {?}
     */
    get column() {
        return this._column;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set column(val) {
        if (val) {
            this._column = val;
        }
    }
    /**
     * @return {?}
     */
    get icon() {
        return this._icon;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set icon(val) {
        if (val) {
            this._icon = val;
        }
    }
}
IgxColumnMovingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ IgxColumnMovingService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function IgxColumnMovingService_Factory() { return new IgxColumnMovingService(); }, token: IgxColumnMovingService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxColumnMovingService.prototype._icon;
    /**
     * @type {?}
     * @private
     */
    IgxColumnMovingService.prototype._column;
    /** @type {?} */
    IgxColumnMovingService.prototype.cancelDrop;
    /** @type {?} */
    IgxColumnMovingService.prototype.isColumnMoving;
}
/** @enum {number} */
const DropPosition = {
    BeforeDropTarget: 0,
    AfterDropTarget: 1,
    None: 2,
};
export { DropPosition };
DropPosition[DropPosition.BeforeDropTarget] = 'BeforeDropTarget';
DropPosition[DropPosition.AfterDropTarget] = 'AfterDropTarget';
DropPosition[DropPosition.None] = 'None';
/**
 * @hidden
 */
export class IgxColumnMovingDragDirective extends IgxDragDirective {
    /**
     * @param {?} _element
     * @param {?} _zone
     * @param {?} _renderer
     * @param {?} _cdr
     * @param {?} cms
     */
    constructor(_element, _zone, _renderer, _cdr, cms) {
        super(_cdr, _element, _zone, _renderer);
        this.cms = cms;
        this._ghostImageClass = 'igx-grid__drag-ghost-image';
        this.dragGhostImgIconClass = 'igx-grid__drag-ghost-image-icon';
        this.dragGhostImgIconGroupClass = 'igx-grid__drag-ghost-image-icon-group';
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set data(val) {
        this._column = val;
    }
    /**
     * @return {?}
     */
    get column() {
        return this._column;
    }
    /**
     * @return {?}
     */
    get draggable() {
        return this.column && (this.column.movable || (this.column.groupable && !this.column.columnGroup));
    }
    /**
     * @return {?}
     */
    get icon() {
        return this.cms.icon;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._unsubscribe();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onEscape(event) {
        this.cms.cancelDrop = true;
        this.onPointerUp(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onPointerDown(event) {
        if (!this.draggable || event.target.getAttribute('draggable') === 'false') {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        this._removeOnDestroy = false;
        this.cms.column = this.column;
        this.ghostImageClass = this._ghostImageClass;
        super.onPointerDown(event);
        this.cms.isColumnMoving = true;
        this.column.grid.cdr.detectChanges();
        /** @type {?} */
        const args = {
            source: this.column
        };
        this.column.grid.onColumnMovingStart.emit(args);
        this.subscription$ = fromEvent(this.column.grid.document.defaultView, 'keydown').subscribe((ev) => {
            if (ev.key === "Escape" /* ESCAPE */ || ev.key === "Esc" /* ESCAPE_IE */) {
                this.onEscape(ev);
            }
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onPointerMove(event) {
        event.preventDefault();
        super.onPointerMove(event);
        if (this._dragStarted && this.dragGhost && !this.column.grid.draggedColumn) {
            this.column.grid.draggedColumn = this.column;
            this.column.grid.cdr.detectChanges();
        }
        if (this.cms.isColumnMoving) {
            /** @type {?} */
            const args = {
                source: this.column,
                cancel: false
            };
            this.column.grid.onColumnMoving.emit(args);
            if (args.cancel) {
                this.onEscape(event);
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onPointerUp(event) {
        // Run it explicitly inside the zone because sometimes onPointerUp executes after the code below.
        this.zone.run(() => {
            super.onPointerUp(event);
            this.cms.isColumnMoving = false;
            this.column.grid.draggedColumn = null;
            this.column.grid.cdr.detectChanges();
        });
        this._unsubscribe();
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    createDragGhost(event) {
        super.createDragGhost(event);
        /** @type {?} */
        let pageX;
        /** @type {?} */
        let pageY;
        if (this.pointerEventsEnabled || !this.touchEventsEnabled) {
            pageX = event.pageX;
            pageY = event.pageY;
        }
        else {
            pageX = event.touches[0].pageX;
            pageY = event.touches[0].pageY;
        }
        this.dragGhost.style.height = null;
        this.dragGhost.style.minWidth = null;
        this.dragGhost.style.flexBasis = null;
        this.dragGhost.style.position = null;
        /** @type {?} */
        const icon = document.createElement('i');
        /** @type {?} */
        const text = document.createTextNode('block');
        icon.appendChild(text);
        icon.classList.add('material-icons');
        this.cms.icon = icon;
        /** @type {?} */
        const hostElemLeft = this.dragGhostHost ? this.dragGhostHost.getBoundingClientRect().left : 0;
        /** @type {?} */
        const hostElemTop = this.dragGhostHost ? this.dragGhostHost.getBoundingClientRect().top : 0;
        if (!this.column.columnGroup) {
            this.renderer.addClass(icon, this.dragGhostImgIconClass);
            this.dragGhost.insertBefore(icon, this.dragGhost.firstElementChild);
            this.left = this._dragStartX = pageX - ((this.dragGhost.getBoundingClientRect().width / 3) * 2) - hostElemLeft;
            this.top = this._dragStartY = pageY - ((this.dragGhost.getBoundingClientRect().height / 3) * 2) - hostElemTop;
        }
        else {
            this.dragGhost.insertBefore(icon, this.dragGhost.childNodes[0]);
            this.renderer.addClass(icon, this.dragGhostImgIconGroupClass);
            this.dragGhost.children[0].style.paddingLeft = '0px';
            this.left = this._dragStartX = pageX - ((this.dragGhost.getBoundingClientRect().width / 3) * 2) - hostElemLeft;
            this.top = this._dragStartY = pageY - ((this.dragGhost.getBoundingClientRect().height / 3) * 2) - hostElemTop;
        }
    }
    /**
     * @private
     * @return {?}
     */
    _unsubscribe() {
        if (this.subscription$) {
            this.subscription$.unsubscribe();
            this.subscription$ = null;
        }
    }
}
IgxColumnMovingDragDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxColumnMovingDrag]'
            },] }
];
/** @nocollapse */
IgxColumnMovingDragDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: IgxColumnMovingService }
];
IgxColumnMovingDragDirective.propDecorators = {
    data: [{ type: Input, args: ['igxColumnMovingDrag',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxColumnMovingDragDirective.prototype.subscription$;
    /**
     * @type {?}
     * @private
     */
    IgxColumnMovingDragDirective.prototype._column;
    /**
     * @type {?}
     * @private
     */
    IgxColumnMovingDragDirective.prototype._ghostImageClass;
    /**
     * @type {?}
     * @private
     */
    IgxColumnMovingDragDirective.prototype.dragGhostImgIconClass;
    /**
     * @type {?}
     * @private
     */
    IgxColumnMovingDragDirective.prototype.dragGhostImgIconGroupClass;
    /**
     * @type {?}
     * @private
     */
    IgxColumnMovingDragDirective.prototype.cms;
}
/**
 * @hidden
 */
export class IgxColumnMovingDropDirective extends IgxDropDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} zone
     * @param {?} cms
     */
    constructor(elementRef, renderer, zone, cms) {
        super(elementRef, renderer, zone);
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.zone = zone;
        this.cms = cms;
        this._dropIndicator = null;
        this._lastDropIndicator = null;
        this._dragLeave = new Subject();
        this._dropIndicatorClass = 'igx-grid__th-drop-indicator--active';
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set data(val) {
        if (val instanceof IgxColumnComponent) {
            this._column = val;
        }
        if (val instanceof IgxGridForOfDirective) {
            this._hVirtDir = val;
        }
    }
    /**
     * @return {?}
     */
    get column() {
        return this._column;
    }
    /**
     * @return {?}
     */
    get isDropTarget() {
        return this._column && this._column.grid.hasMovableColumns && this.cms.column.movable &&
            ((!this._column.pinned && this.cms.column.disablePinning) || !this.cms.column.disablePinning);
    }
    /**
     * @return {?}
     */
    get horizontalScroll() {
        if (this._hVirtDir) {
            return this._hVirtDir;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._dragLeave.next(true);
        this._dragLeave.complete();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragOver(event) {
        /** @type {?} */
        const drag = event.detail.owner;
        if (!(drag instanceof IgxColumnMovingDragDirective)) {
            return;
        }
        if (this.isDropTarget &&
            this.cms.column !== this.column &&
            this.cms.column.level === this.column.level &&
            this.cms.column.parent === this.column.parent) {
            if (this._lastDropIndicator) {
                this.renderer.removeClass(this._dropIndicator, this._dropIndicatorClass);
            }
            /** @type {?} */
            const clientRect = this.elementRef.nativeElement.getBoundingClientRect();
            /** @type {?} */
            const pos = clientRect.left + clientRect.width / 2;
            /** @type {?} */
            const parent = this.elementRef.nativeElement.parentElement;
            if (event.detail.pageX < pos) {
                this._dropPos = DropPosition.BeforeDropTarget;
                this._lastDropIndicator = this._dropIndicator = parent.firstElementChild;
            }
            else {
                this._dropPos = DropPosition.AfterDropTarget;
                this._lastDropIndicator = this._dropIndicator = parent.lastElementChild;
            }
            if (this.cms.icon.innerText !== 'block') {
                this.renderer.addClass(this._dropIndicator, this._dropIndicatorClass);
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragEnter(event) {
        /** @type {?} */
        const drag = event.detail.owner;
        if (!(drag instanceof IgxColumnMovingDragDirective)) {
            return;
        }
        if (this.column && this.cms.column.grid.id !== this.column.grid.id) {
            this.cms.icon.innerText = 'block';
            return;
        }
        if (this.isDropTarget &&
            this.cms.column !== this.column &&
            this.cms.column.level === this.column.level &&
            this.cms.column.parent === this.column.parent) {
            if (!this.column.pinned || (this.column.pinned && this.cms.column.pinned)) {
                this.cms.icon.innerText = 'swap_horiz';
            }
            if (!this.cms.column.pinned && this.column.pinned) {
                /** @type {?} */
                const nextPinnedWidth = this.column.grid.getPinnedWidth(true) + parseFloat(this.cms.column.width);
                if (nextPinnedWidth <= this.column.grid.calcPinnedContainerMaxWidth) {
                    this.cms.icon.innerText = 'lock';
                }
                else {
                    this.cms.icon.innerText = 'block';
                }
            }
        }
        else {
            this.cms.icon.innerText = 'block';
        }
        if (this.horizontalScroll) {
            this.cms.icon.innerText = event.target.id === 'right' ? 'arrow_forward' : 'arrow_back';
            interval(100).pipe(takeUntil(this._dragLeave)).subscribe(() => {
                this.cms.column.grid.wheelHandler();
                event.target.id === 'right' ? this.horizontalScroll.getHorizontalScroll().scrollLeft += 15 :
                    this.horizontalScroll.getHorizontalScroll().scrollLeft -= 15;
            });
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragLeave(event) {
        /** @type {?} */
        const drag = event.detail.owner;
        if (!(drag instanceof IgxColumnMovingDragDirective)) {
            return;
        }
        this.cms.icon.innerText = 'block';
        if (this._dropIndicator) {
            this.renderer.removeClass(this._dropIndicator, this._dropIndicatorClass);
        }
        if (this.horizontalScroll) {
            this._dragLeave.next(true);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragDrop(event) {
        event.preventDefault();
        /** @type {?} */
        const drag = event.detail.owner;
        if (!(drag instanceof IgxColumnMovingDragDirective)) {
            return;
        }
        if (this.column && (this.cms.column.grid.id !== this.column.grid.id)) {
            return;
        }
        if (this.horizontalScroll) {
            this._dragLeave.next(true);
        }
        if (this.isDropTarget) {
            /** @type {?} */
            const args = {
                source: this.cms.column,
                target: this.column
            };
            /** @type {?} */
            let nextPinnedWidth;
            if (this.column.pinned && !this.cms.column.pinned) {
                nextPinnedWidth = this.column.grid.getPinnedWidth(true) + parseFloat(this.cms.column.width);
            }
            if ((nextPinnedWidth && nextPinnedWidth > this.column.grid.calcPinnedContainerMaxWidth) ||
                this.column.level !== this.cms.column.level ||
                this.column.parent !== this.cms.column.parent ||
                this.cms.cancelDrop) {
                this.cms.cancelDrop = false;
                this.column.grid.onColumnMovingEnd.emit(args);
                return;
            }
            this.column.grid.moveColumn(this.cms.column, this.column, this._dropPos);
            this.column.grid.draggedColumn = null;
            this.column.grid.cdr.detectChanges();
        }
    }
}
IgxColumnMovingDropDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxColumnMovingDrop]'
            },] }
];
/** @nocollapse */
IgxColumnMovingDropDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgZone },
    { type: IgxColumnMovingService }
];
IgxColumnMovingDropDirective.propDecorators = {
    data: [{ type: Input, args: ['igxColumnMovingDrop',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxColumnMovingDropDirective.prototype._dropPos;
    /**
     * @type {?}
     * @private
     */
    IgxColumnMovingDropDirective.prototype._dropIndicator;
    /**
     * @type {?}
     * @private
     */
    IgxColumnMovingDropDirective.prototype._lastDropIndicator;
    /**
     * @type {?}
     * @private
     */
    IgxColumnMovingDropDirective.prototype._column;
    /**
     * @type {?}
     * @private
     */
    IgxColumnMovingDropDirective.prototype._hVirtDir;
    /**
     * @type {?}
     * @private
     */
    IgxColumnMovingDropDirective.prototype._dragLeave;
    /**
     * @type {?}
     * @private
     */
    IgxColumnMovingDropDirective.prototype._dropIndicatorClass;
    /**
     * @type {?}
     * @private
     */
    IgxColumnMovingDropDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    IgxColumnMovingDropDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    IgxColumnMovingDropDirective.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    IgxColumnMovingDropDirective.prototype.cms;
}
export class IgxGridBodyDirective {
}
IgxGridBodyDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxGridBody]',
                providers: [IgxForOfSyncService]
            },] }
];
/**
 * @hidden
 */
export class IgxDatePipeComponent extends DatePipe {
    /**
     * @param {?} locale
     */
    constructor(locale) {
        // D.P. constructor duplication due to es6 compilation, might be obsolete in the future
        super(locale);
    }
    /**
     * @param {?} value
     * @param {?} locale
     * @return {?}
     */
    transform(value, locale) {
        if (value && value instanceof Date) {
            if (locale) {
                return super.transform(value, DEFAULT_DATE_FORMAT, undefined, locale);
            }
            else {
                return super.transform(value);
            }
        }
        else {
            return value;
        }
    }
}
IgxDatePipeComponent.decorators = [
    { type: Pipe, args: [{
                name: 'igxdate'
            },] }
];
/** @nocollapse */
IgxDatePipeComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
/**
 * @hidden
 */
export class IgxDecimalPipeComponent extends DecimalPipe {
    /**
     * @param {?} locale
     */
    constructor(locale) {
        // D.P. constructor duplication due to es6 compilation, might be obsolete in the future
        super(locale);
    }
    /**
     * @param {?} value
     * @param {?} locale
     * @return {?}
     */
    transform(value, locale) {
        if (value && typeof value === 'number') {
            if (locale) {
                return super.transform(value, undefined, locale);
            }
            else {
                return super.transform(value);
            }
        }
        else {
            return value;
        }
    }
}
IgxDecimalPipeComponent.decorators = [
    { type: Pipe, args: [{
                name: 'igxdecimal'
            },] }
];
/** @nocollapse */
IgxDecimalPipeComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
/**
 * @hidden
 * @record
 */
export function ContainerPositionSettings() { }
if (false) {
    /** @type {?|undefined} */
    ContainerPositionSettings.prototype.container;
}
/**
 * @hidden
 */
export class ContainerPositioningStrategy extends ConnectedPositioningStrategy {
    constructor() {
        super(...arguments);
        this.isTop = false;
        this.isTopInitialPosition = null;
    }
    /**
     * @param {?} contentElement
     * @param {?} size
     * @param {?=} document
     * @param {?=} initialCall
     * @return {?}
     */
    position(contentElement, size, document, initialCall) {
        /** @type {?} */
        const container = this.settings.container;
        // grid.tbody
        /** @type {?} */
        const target = (/** @type {?} */ (this.settings.target));
        // Position of the overlay depends on the available space in the grid.
        // If the bottom space is not enough then the the row overlay will show at the top of the row.
        // Once shown, either top or bottom, then this position stays until the overlay is closed (isTopInitialPosition property),
        // which means that when scrolling then overlay may hide, while the row is still visible (UX requirement).
        this.isTop = this.isTopInitialPosition !== null ?
            this.isTopInitialPosition :
            container.getBoundingClientRect().bottom <
                target.getBoundingClientRect().bottom + contentElement.getBoundingClientRect().height;
        // Set width of the row editing overlay to equal row width, otherwise it fits 100% of the grid.
        contentElement.style.width = target.clientWidth + 'px';
        this.settings.verticalStartPoint = this.settings.verticalDirection = this.isTop ? VerticalAlignment.Top : VerticalAlignment.Bottom;
        this.settings.openAnimation = this.isTop ? scaleInVerBottom : scaleInVerTop;
        super.position(contentElement, { width: target.clientWidth, height: target.clientHeight }, document, initialCall);
    }
}
if (false) {
    /** @type {?} */
    ContainerPositioningStrategy.prototype.isTop;
    /** @type {?} */
    ContainerPositioningStrategy.prototype.isTopInitialPosition;
    /** @type {?} */
    ContainerPositioningStrategy.prototype.settings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21tb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2dyaWQuY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRSxPQUFPLEVBQ0gsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUdOLE1BQU0sRUFDTixJQUFJLEVBRUosU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBRVQsWUFBWSxFQUNmLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDM0YsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFvQixNQUFNLCtCQUErQixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQ0FBMEMs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QUFXLENBQUMsQ0FBQztJQUN0SCxDQUFDO0NBQ0o7OztJQXZCRyw2Q0FBYzs7SUFDZCw0REFBNEI7O0lBQzVCLGdEQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5ULCBEYXRlUGlwZSwgRGVjaW1hbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBEaXJlY3RpdmUsXG4gICAgRWxlbWVudFJlZixcbiAgICBJbmplY3QsXG4gICAgSW5qZWN0YWJsZSxcbiAgICBJbnB1dCxcbiAgICBOZ1pvbmUsXG4gICAgT25EZXN0cm95LFxuICAgIE9uSW5pdCxcbiAgICBPdXRwdXQsXG4gICAgUGlwZSxcbiAgICBQaXBlVHJhbnNmb3JtLFxuICAgIFJlbmRlcmVyMixcbiAgICBUZW1wbGF0ZVJlZixcbiAgICBMT0NBTEVfSUQsXG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBIb3N0TGlzdGVuZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRpb25GcmFtZVNjaGVkdWxlciwgZnJvbUV2ZW50LCBpbnRlcnZhbCwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgdGFrZVVudGlsLCB0aHJvdHRsZSwgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSWd4Q29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB7IElneERyYWdEaXJlY3RpdmUsIElneERyb3BEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2RyYWdkcm9wL2RyYWdkcm9wLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJZ3hHcmlkRm9yT2ZEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2Zvci1vZi9mb3Jfb2YuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbm5lY3RlZFBvc2l0aW9uaW5nU3RyYXRlZ3kgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBWZXJ0aWNhbEFsaWdubWVudCwgUG9zaXRpb25TZXR0aW5ncyB9IGZyb20gJy4uL3NlcnZpY2VzL292ZXJsYXkvdXRpbGl0aWVzJztcbmltcG9ydCB7IHNjYWxlSW5WZXJCb3R0b20sIHNjYWxlSW5WZXJUb3AgfSBmcm9tICcuLi9hbmltYXRpb25zL21haW4nO1xuaW1wb3J0IHsgS0VZUyB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgSWd4Q29sdW1uUmVzaXppbmdTZXJ2aWNlIH0gZnJvbSAnLi9ncmlkLWNvbHVtbi1yZXNpemluZy5zZXJ2aWNlJztcbmltcG9ydCB7IElneEZvck9mU3luY1NlcnZpY2UgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2Zvci1vZi9mb3Jfb2Yuc3luYy5zZXJ2aWNlJztcblxuY29uc3QgREVGQVVMVF9EQVRFX0ZPUk1BVCA9ICdtZWRpdW1EYXRlJztcbmNvbnN0IERFQk9VTkNFX1RJTUUgPSAyMDA7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hSZXNpemVIYW5kbGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hSZXNpemVIYW5kbGVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBJbnB1dCgnaWd4UmVzaXplSGFuZGxlJylcbiAgICBwdWJsaWMgY29sdW1uOiBJZ3hDb2x1bW5Db21wb25lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZGJsQ2xpY2sgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lLFxuICAgICAgICAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgcHVibGljIGNvbFJlc2l6aW5nU2VydmljZTogSWd4Q29sdW1uUmVzaXppbmdTZXJ2aWNlKSB7IH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICAgICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBpZiAoIXRoaXMuY29sdW1uLmNvbHVtbkdyb3VwICYmIHRoaXMuY29sdW1uLnJlc2l6YWJsZSkge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgICBmcm9tRXZlbnQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdtb3VzZWRvd24nKS5waXBlKFxuICAgICAgICAgICAgICAgICAgICBkZWJvdW5jZVRpbWUoREVCT1VOQ0VfVElNRSksXG4gICAgICAgICAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgICAgICAgICAgICkuc3Vic2NyaWJlKChldmVudDogTW91c2VFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kYmxDbGljaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGJsQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5idXR0b24gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29uUmVzaXplQXJlYU1vdXNlRG93bihldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbi5ncmlkLnJlc2l6ZUxpbmUucmVzaXplci5vbk1vdXNlZG93bihldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmcm9tRXZlbnQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdtb3VzZXVwJykucGlwZShcbiAgICAgICAgICAgICAgICBkZWJvdW5jZVRpbWUoREVCT1VOQ0VfVElNRSksXG4gICAgICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICAgICAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xSZXNpemluZ1NlcnZpY2UuaXNDb2x1bW5SZXNpemluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuY29sUmVzaXppbmdTZXJ2aWNlLnNob3dSZXNpemVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2x1bW4uZ3JpZC5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VvdmVyJylcbiAgICBwdWJsaWMgb25Nb3VzZU92ZXIoKSB7XG4gICAgICAgIHRoaXMuY29sUmVzaXppbmdTZXJ2aWNlLnJlc2l6ZUN1cnNvciA9ICdjb2wtcmVzaXplJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignZGJsY2xpY2snKVxuICAgIHB1YmxpYyBvbkRvdWJsZUNsaWNrKCkge1xuICAgICAgICB0aGlzLl9kYmxDbGljayA9IHRydWU7XG4gICAgICAgIHRoaXMuY29sUmVzaXppbmdTZXJ2aWNlLmNvbHVtbiA9IHRoaXMuY29sdW1uO1xuICAgICAgICB0aGlzLmNvbFJlc2l6aW5nU2VydmljZS5hdXRvc2l6ZUNvbHVtbk9uRGJsQ2xpY2soKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfb25SZXNpemVBcmVhTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuY29sUmVzaXppbmdTZXJ2aWNlLmNvbHVtbiA9IHRoaXMuY29sdW1uO1xuICAgICAgICB0aGlzLmNvbFJlc2l6aW5nU2VydmljZS5pc0NvbHVtblJlc2l6aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb2xSZXNpemluZ1NlcnZpY2Uuc3RhcnRSZXNpemVQb3MgPSBldmVudC5jbGllbnRYO1xuXG4gICAgICAgIHRoaXMuY29sUmVzaXppbmdTZXJ2aWNlLnNob3dSZXNpemVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb2x1bW4uZ3JpZC5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbn1cblxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4UmVzaXplcl0nXG59KVxuZXhwb3J0IGNsYXNzIElneENvbHVtblJlc2l6ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyByZXN0cmljdEhSZXNpemVNaW46IG51bWJlciA9IE51bWJlci5NSU5fU0FGRV9JTlRFR0VSO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcmVzdHJpY3RIUmVzaXplTWF4OiBudW1iZXIgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyByZXNpemVFbmQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgcmVzaXplU3RhcnQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgcmVzaXplID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gICAgcHJpdmF0ZSBfbGVmdDtcbiAgICBwcml2YXRlIF9kZXN0cm95ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLCBASW5qZWN0KERPQ1VNRU5UKSBwdWJsaWMgZG9jdW1lbnQsIHB1YmxpYyB6b25lOiBOZ1pvbmUpIHtcblxuICAgICAgICB0aGlzLnJlc2l6ZVN0YXJ0LnBpcGUoXG4gICAgICAgICAgICBtYXAoKGV2ZW50KSA9PiBldmVudC5jbGllbnRYKSxcbiAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSxcbiAgICAgICAgICAgIHN3aXRjaE1hcCgob2Zmc2V0KSA9PiB0aGlzLnJlc2l6ZS5waXBlKFxuICAgICAgICAgICAgICAgIG1hcCgoZXZlbnQpID0+IGV2ZW50LmNsaWVudFggLSBvZmZzZXQpLFxuICAgICAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLnJlc2l6ZUVuZCksXG4gICAgICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpXG4gICAgICAgICAgICApKVxuICAgICAgICApLnN1YnNjcmliZSgocG9zKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLl9sZWZ0ICsgcG9zO1xuXG4gICAgICAgICAgICBjb25zdCBtaW4gPSB0aGlzLl9sZWZ0IC0gdGhpcy5yZXN0cmljdEhSZXNpemVNaW47XG4gICAgICAgICAgICBjb25zdCBtYXggPSB0aGlzLl9sZWZ0ICsgdGhpcy5yZXN0cmljdEhSZXNpemVNYXg7XG5cbiAgICAgICAgICAgIHRoaXMubGVmdCA9IGxlZnQgPCBtaW4gPyBtaW4gOiBsZWZ0O1xuXG4gICAgICAgICAgICBpZiAobGVmdCA+IG1heCkge1xuICAgICAgICAgICAgICAgIHRoaXMubGVmdCA9IG1heDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgIGZyb21FdmVudCh0aGlzLmRvY3VtZW50LmRlZmF1bHRWaWV3LCAnbW91c2Vtb3ZlJykucGlwZShcbiAgICAgICAgICAgICAgICB0aHJvdHRsZSgoKSA9PiBpbnRlcnZhbCgwLCBhbmltYXRpb25GcmFtZVNjaGVkdWxlcikpLFxuICAgICAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KVxuICAgICAgICAgICAgKS5zdWJzY3JpYmUoKHJlcykgPT4gdGhpcy5vbk1vdXNlbW92ZShyZXMpKTtcblxuICAgICAgICAgICAgZnJvbUV2ZW50KHRoaXMuZG9jdW1lbnQuZGVmYXVsdFZpZXcsICdtb3VzZXVwJykucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSkpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzKSA9PiB0aGlzLm9uTW91c2V1cChyZXMpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kubmV4dCh0cnVlKTtcbiAgICAgICAgdGhpcy5fZGVzdHJveS5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbGVmdCh2YWwpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSB2YWwgKyAncHgnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHRvcCh2YWwpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IHZhbCArICdweCcpO1xuICAgIH1cblxuICAgIG9uTW91c2V1cChldmVudCkge1xuICAgICAgICB0aGlzLnJlc2l6ZUVuZC5uZXh0KGV2ZW50KTtcbiAgICAgICAgdGhpcy5yZXNpemVFbmQuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICBvbk1vdXNlZG93bihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5sZWZ0ID0gdGhpcy5fbGVmdCA9IGV2ZW50LmNsaWVudFggLSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgICAgdGhpcy50b3AgPSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcblxuICAgICAgICB0aGlzLnJlc2l6ZVN0YXJ0Lm5leHQoZXZlbnQpO1xuICAgIH1cblxuICAgIG9uTW91c2Vtb3ZlKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucmVzaXplLm5leHQoZXZlbnQpO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4RmlsdGVyQ2VsbFRlbXBsYXRlXSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4RmlsdGVyQ2VsbFRlbXBsYXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHt9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneENlbGxdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hDZWxsVGVtcGxhdGVEaXJlY3RpdmUge1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4SGVhZGVyXSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4Q2VsbEhlYWRlclRlbXBsYXRlRGlyZWN0aXZlIHtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG5cbn1cbi8qKlxuICogQGhpZGRlblxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hGb290ZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hDZWxsRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUge1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4Q2VsbEVkaXRvcl0nXG59KVxuZXhwb3J0IGNsYXNzIElneENlbGxFZGl0b3JUZW1wbGF0ZURpcmVjdGl2ZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgSWd4Q29sdW1uTW92aW5nU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfaWNvbjogYW55O1xuICAgIHByaXZhdGUgX2NvbHVtbjogSWd4Q29sdW1uQ29tcG9uZW50O1xuXG4gICAgcHVibGljIGNhbmNlbERyb3A6IGJvb2xlYW47XG4gICAgcHVibGljIGlzQ29sdW1uTW92aW5nOiBib29sZWFuO1xuXG4gICAgZ2V0IGNvbHVtbigpOiBJZ3hDb2x1bW5Db21wb25lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sdW1uO1xuICAgIH1cbiAgICBzZXQgY29sdW1uKHZhbDogSWd4Q29sdW1uQ29tcG9uZW50KSB7XG4gICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbHVtbiA9IHZhbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBpY29uKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pY29uO1xuICAgIH1cbiAgICBzZXQgaWNvbih2YWw6IGFueSkge1xuICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgICB0aGlzLl9pY29uID0gdmFsO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGVudW0gRHJvcFBvc2l0aW9uIHtcbiAgICBCZWZvcmVEcm9wVGFyZ2V0LFxuICAgIEFmdGVyRHJvcFRhcmdldCxcbiAgICBOb25lXG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hDb2x1bW5Nb3ZpbmdEcmFnXSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4Q29sdW1uTW92aW5nRHJhZ0RpcmVjdGl2ZSBleHRlbmRzIElneERyYWdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCdpZ3hDb2x1bW5Nb3ZpbmdEcmFnJylcbiAgICBzZXQgZGF0YSh2YWwpIHtcbiAgICAgICAgdGhpcy5fY29sdW1uID0gdmFsO1xuICAgIH1cblxuICAgIGdldCBjb2x1bW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2x1bW47XG4gICAgfVxuXG4gICAgZ2V0IGRyYWdnYWJsZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uICYmICh0aGlzLmNvbHVtbi5tb3ZhYmxlIHx8ICh0aGlzLmNvbHVtbi5ncm91cGFibGUgJiYgIXRoaXMuY29sdW1uLmNvbHVtbkdyb3VwKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpY29uKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY21zLmljb247XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb24kOiBTdWJzY3JpcHRpb247XG4gICAgcHJpdmF0ZSBfY29sdW1uOiBJZ3hDb2x1bW5Db21wb25lbnQ7XG4gICAgcHJpdmF0ZSBfZ2hvc3RJbWFnZUNsYXNzID0gJ2lneC1ncmlkX19kcmFnLWdob3N0LWltYWdlJztcbiAgICBwcml2YXRlIGRyYWdHaG9zdEltZ0ljb25DbGFzcyA9ICdpZ3gtZ3JpZF9fZHJhZy1naG9zdC1pbWFnZS1pY29uJztcbiAgICBwcml2YXRlIGRyYWdHaG9zdEltZ0ljb25Hcm91cENsYXNzID0gJ2lneC1ncmlkX19kcmFnLWdob3N0LWltYWdlLWljb24tZ3JvdXAnO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIF9lbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICBfem9uZTogTmdab25lLFxuICAgICAgICBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIHByaXZhdGUgY21zOiBJZ3hDb2x1bW5Nb3ZpbmdTZXJ2aWNlLFxuICAgICkge1xuICAgICAgICBzdXBlcihfY2RyLCBfZWxlbWVudCwgX3pvbmUsIF9yZW5kZXJlcik7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLl91bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkVzY2FwZShldmVudCkge1xuICAgICAgICB0aGlzLmNtcy5jYW5jZWxEcm9wID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vblBvaW50ZXJVcChldmVudCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uUG9pbnRlckRvd24oZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRyYWdnYWJsZSB8fCBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnKSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5fcmVtb3ZlT25EZXN0cm95ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY21zLmNvbHVtbiA9IHRoaXMuY29sdW1uO1xuICAgICAgICB0aGlzLmdob3N0SW1hZ2VDbGFzcyA9IHRoaXMuX2dob3N0SW1hZ2VDbGFzcztcblxuICAgICAgICBzdXBlci5vblBvaW50ZXJEb3duKGV2ZW50KTtcblxuICAgICAgICB0aGlzLmNtcy5pc0NvbHVtbk1vdmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuY29sdW1uLmdyaWQuY2RyLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICBjb25zdCBhcmdzID0ge1xuICAgICAgICAgICAgc291cmNlOiB0aGlzLmNvbHVtblxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbHVtbi5ncmlkLm9uQ29sdW1uTW92aW5nU3RhcnQuZW1pdChhcmdzKTtcblxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiQgPSBmcm9tRXZlbnQodGhpcy5jb2x1bW4uZ3JpZC5kb2N1bWVudC5kZWZhdWx0VmlldywgJ2tleWRvd24nKS5zdWJzY3JpYmUoKGV2OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXYua2V5ID09PSBLRVlTLkVTQ0FQRSB8fCBldi5rZXkgPT09IEtFWVMuRVNDQVBFX0lFKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkVzY2FwZShldik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblBvaW50ZXJNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHN1cGVyLm9uUG9pbnRlck1vdmUoZXZlbnQpO1xuXG4gICAgICAgIGlmICh0aGlzLl9kcmFnU3RhcnRlZCAmJiB0aGlzLmRyYWdHaG9zdCAmJiAhdGhpcy5jb2x1bW4uZ3JpZC5kcmFnZ2VkQ29sdW1uKSB7XG4gICAgICAgICAgICB0aGlzLmNvbHVtbi5ncmlkLmRyYWdnZWRDb2x1bW4gPSB0aGlzLmNvbHVtbjtcbiAgICAgICAgICAgIHRoaXMuY29sdW1uLmdyaWQuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNtcy5pc0NvbHVtbk1vdmluZykge1xuICAgICAgICAgICAgY29uc3QgYXJncyA9IHtcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHRoaXMuY29sdW1uLFxuICAgICAgICAgICAgICAgIGNhbmNlbDogZmFsc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmNvbHVtbi5ncmlkLm9uQ29sdW1uTW92aW5nLmVtaXQoYXJncyk7XG5cbiAgICAgICAgICAgIGlmIChhcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgICAgIHRoaXMub25Fc2NhcGUoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uUG9pbnRlclVwKGV2ZW50KSB7XG4gICAgICAgIC8vIFJ1biBpdCBleHBsaWNpdGx5IGluc2lkZSB0aGUgem9uZSBiZWNhdXNlIHNvbWV0aW1lcyBvblBvaW50ZXJVcCBleGVjdXRlcyBhZnRlciB0aGUgY29kZSBiZWxvdy5cbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICBzdXBlci5vblBvaW50ZXJVcChldmVudCk7XG5cbiAgICAgICAgICAgIHRoaXMuY21zLmlzQ29sdW1uTW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNvbHVtbi5ncmlkLmRyYWdnZWRDb2x1bW4gPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5jb2x1bW4uZ3JpZC5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl91bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVEcmFnR2hvc3QoZXZlbnQpIHtcbiAgICAgICAgc3VwZXIuY3JlYXRlRHJhZ0dob3N0KGV2ZW50KTtcblxuICAgICAgICBsZXQgcGFnZVgsIHBhZ2VZO1xuICAgICAgICBpZiAodGhpcy5wb2ludGVyRXZlbnRzRW5hYmxlZCB8fCAhdGhpcy50b3VjaEV2ZW50c0VuYWJsZWQpIHtcbiAgICAgICAgICAgIHBhZ2VYID0gZXZlbnQucGFnZVg7XG4gICAgICAgICAgICBwYWdlWSA9IGV2ZW50LnBhZ2VZO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFnZVggPSBldmVudC50b3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICAgICAgcGFnZVkgPSBldmVudC50b3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kcmFnR2hvc3Quc3R5bGUuaGVpZ2h0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5kcmFnR2hvc3Quc3R5bGUubWluV2lkdGggPSBudWxsO1xuICAgICAgICB0aGlzLmRyYWdHaG9zdC5zdHlsZS5mbGV4QmFzaXMgPSBudWxsO1xuICAgICAgICB0aGlzLmRyYWdHaG9zdC5zdHlsZS5wb3NpdGlvbiA9IG51bGw7XG5cbiAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdibG9jaycpO1xuICAgICAgICBpY29uLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcbiAgICAgICAgdGhpcy5jbXMuaWNvbiA9IGljb247XG5cbiAgICAgICAgY29uc3QgaG9zdEVsZW1MZWZ0ID0gdGhpcy5kcmFnR2hvc3RIb3N0ID8gdGhpcy5kcmFnR2hvc3RIb3N0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgOiAwO1xuICAgICAgICBjb25zdCBob3N0RWxlbVRvcCA9IHRoaXMuZHJhZ0dob3N0SG9zdCA/IHRoaXMuZHJhZ0dob3N0SG9zdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgOiAwO1xuXG4gICAgICAgIGlmICghdGhpcy5jb2x1bW4uY29sdW1uR3JvdXApIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoaWNvbiwgdGhpcy5kcmFnR2hvc3RJbWdJY29uQ2xhc3MpO1xuXG4gICAgICAgICAgICB0aGlzLmRyYWdHaG9zdC5pbnNlcnRCZWZvcmUoaWNvbiwgdGhpcy5kcmFnR2hvc3QuZmlyc3RFbGVtZW50Q2hpbGQpO1xuXG4gICAgICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLl9kcmFnU3RhcnRYID0gcGFnZVggLSAoKHRoaXMuZHJhZ0dob3N0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC8gMykgKiAyKSAtIGhvc3RFbGVtTGVmdDtcbiAgICAgICAgICAgIHRoaXMudG9wID0gdGhpcy5fZHJhZ1N0YXJ0WSA9IHBhZ2VZIC0gKCh0aGlzLmRyYWdHaG9zdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLyAzKSAqIDIpIC0gaG9zdEVsZW1Ub3A7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRyYWdHaG9zdC5pbnNlcnRCZWZvcmUoaWNvbiwgdGhpcy5kcmFnR2hvc3QuY2hpbGROb2Rlc1swXSk7XG5cbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoaWNvbiwgdGhpcy5kcmFnR2hvc3RJbWdJY29uR3JvdXBDbGFzcyk7XG4gICAgICAgICAgICB0aGlzLmRyYWdHaG9zdC5jaGlsZHJlblswXS5zdHlsZS5wYWRkaW5nTGVmdCA9ICcwcHgnO1xuXG4gICAgICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLl9kcmFnU3RhcnRYID0gcGFnZVggLSAoKHRoaXMuZHJhZ0dob3N0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC8gMykgKiAyKSAtIGhvc3RFbGVtTGVmdDtcbiAgICAgICAgICAgIHRoaXMudG9wID0gdGhpcy5fZHJhZ1N0YXJ0WSA9IHBhZ2VZIC0gKCh0aGlzLmRyYWdHaG9zdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLyAzKSAqIDIpIC0gaG9zdEVsZW1Ub3A7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF91bnN1YnNjcmliZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uJCkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24kLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneENvbHVtbk1vdmluZ0Ryb3BdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hDb2x1bW5Nb3ZpbmdEcm9wRGlyZWN0aXZlIGV4dGVuZHMgSWd4RHJvcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCdpZ3hDb2x1bW5Nb3ZpbmdEcm9wJylcbiAgICBzZXQgZGF0YSh2YWw6IGFueSkge1xuICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgSWd4Q29sdW1uQ29tcG9uZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9jb2x1bW4gPSB2YWw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgSWd4R3JpZEZvck9mRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLl9oVmlydERpciA9IHZhbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBjb2x1bW4oKTogSWd4Q29sdW1uQ29tcG9uZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbjtcbiAgICB9XG5cbiAgICBnZXQgaXNEcm9wVGFyZ2V0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sdW1uICYmIHRoaXMuX2NvbHVtbi5ncmlkLmhhc01vdmFibGVDb2x1bW5zICYmIHRoaXMuY21zLmNvbHVtbi5tb3ZhYmxlICYmXG4gICAgICAgICAgICAoKCF0aGlzLl9jb2x1bW4ucGlubmVkICYmIHRoaXMuY21zLmNvbHVtbi5kaXNhYmxlUGlubmluZykgfHwgIXRoaXMuY21zLmNvbHVtbi5kaXNhYmxlUGlubmluZyk7XG4gICAgfVxuXG4gICAgZ2V0IGhvcml6b250YWxTY3JvbGwoKTogYW55IHtcbiAgICAgICAgaWYgKHRoaXMuX2hWaXJ0RGlyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faFZpcnREaXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9kcm9wUG9zOiBEcm9wUG9zaXRpb247XG4gICAgcHJpdmF0ZSBfZHJvcEluZGljYXRvcjogYW55ID0gbnVsbDtcbiAgICBwcml2YXRlIF9sYXN0RHJvcEluZGljYXRvcjogYW55ID0gbnVsbDtcbiAgICBwcml2YXRlIF9jb2x1bW46IElneENvbHVtbkNvbXBvbmVudDtcbiAgICBwcml2YXRlIF9oVmlydERpcjogSWd4R3JpZEZvck9mRGlyZWN0aXZlPGFueT47XG4gICAgcHJpdmF0ZSBfZHJhZ0xlYXZlID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICBwcml2YXRlIF9kcm9wSW5kaWNhdG9yQ2xhc3MgPSAnaWd4LWdyaWRfX3RoLWRyb3AtaW5kaWNhdG9yLS1hY3RpdmUnO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgem9uZTogTmdab25lLCBwcml2YXRlIGNtczogSWd4Q29sdW1uTW92aW5nU2VydmljZSkge1xuICAgICAgICBzdXBlcihlbGVtZW50UmVmLCByZW5kZXJlciwgem9uZSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9kcmFnTGVhdmUubmV4dCh0cnVlKTtcbiAgICAgICAgdGhpcy5fZHJhZ0xlYXZlLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRHJhZ092ZXIoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZHJhZyA9IGV2ZW50LmRldGFpbC5vd25lcjtcbiAgICAgICAgaWYgKCEoZHJhZyBpbnN0YW5jZW9mIElneENvbHVtbk1vdmluZ0RyYWdEaXJlY3RpdmUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0Ryb3BUYXJnZXQgJiZcbiAgICAgICAgICAgIHRoaXMuY21zLmNvbHVtbiAhPT0gdGhpcy5jb2x1bW4gJiZcbiAgICAgICAgICAgIHRoaXMuY21zLmNvbHVtbi5sZXZlbCA9PT0gdGhpcy5jb2x1bW4ubGV2ZWwgJiZcbiAgICAgICAgICAgIHRoaXMuY21zLmNvbHVtbi5wYXJlbnQgPT09IHRoaXMuY29sdW1uLnBhcmVudCkge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fbGFzdERyb3BJbmRpY2F0b3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2Ryb3BJbmRpY2F0b3IsIHRoaXMuX2Ryb3BJbmRpY2F0b3JDbGFzcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGNsaWVudFJlY3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IGNsaWVudFJlY3QubGVmdCArIGNsaWVudFJlY3Qud2lkdGggLyAyO1xuXG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRldGFpbC5wYWdlWCA8IHBvcykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Ryb3BQb3MgPSBEcm9wUG9zaXRpb24uQmVmb3JlRHJvcFRhcmdldDtcbiAgICAgICAgICAgICAgICB0aGlzLl9sYXN0RHJvcEluZGljYXRvciA9IHRoaXMuX2Ryb3BJbmRpY2F0b3IgPSBwYXJlbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Ryb3BQb3MgPSBEcm9wUG9zaXRpb24uQWZ0ZXJEcm9wVGFyZ2V0O1xuICAgICAgICAgICAgICAgIHRoaXMuX2xhc3REcm9wSW5kaWNhdG9yID0gdGhpcy5fZHJvcEluZGljYXRvciA9IHBhcmVudC5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5jbXMuaWNvbi5pbm5lclRleHQgIT09ICdibG9jaycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2Ryb3BJbmRpY2F0b3IsIHRoaXMuX2Ryb3BJbmRpY2F0b3JDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25EcmFnRW50ZXIoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZHJhZyA9IGV2ZW50LmRldGFpbC5vd25lcjtcbiAgICAgICAgaWYgKCEoZHJhZyBpbnN0YW5jZW9mIElneENvbHVtbk1vdmluZ0RyYWdEaXJlY3RpdmUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb2x1bW4gJiYgdGhpcy5jbXMuY29sdW1uLmdyaWQuaWQgIT09IHRoaXMuY29sdW1uLmdyaWQuaWQpIHtcbiAgICAgICAgICAgIHRoaXMuY21zLmljb24uaW5uZXJUZXh0ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzRHJvcFRhcmdldCAmJlxuICAgICAgICAgICAgdGhpcy5jbXMuY29sdW1uICE9PSB0aGlzLmNvbHVtbiAmJlxuICAgICAgICAgICAgdGhpcy5jbXMuY29sdW1uLmxldmVsID09PSB0aGlzLmNvbHVtbi5sZXZlbCAmJlxuICAgICAgICAgICAgdGhpcy5jbXMuY29sdW1uLnBhcmVudCA9PT0gdGhpcy5jb2x1bW4ucGFyZW50KSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29sdW1uLnBpbm5lZCB8fCAodGhpcy5jb2x1bW4ucGlubmVkICYmIHRoaXMuY21zLmNvbHVtbi5waW5uZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY21zLmljb24uaW5uZXJUZXh0ID0gJ3N3YXBfaG9yaXonO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jbXMuY29sdW1uLnBpbm5lZCAmJiB0aGlzLmNvbHVtbi5waW5uZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dFBpbm5lZFdpZHRoID0gdGhpcy5jb2x1bW4uZ3JpZC5nZXRQaW5uZWRXaWR0aCh0cnVlKSArIHBhcnNlRmxvYXQodGhpcy5jbXMuY29sdW1uLndpZHRoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFBpbm5lZFdpZHRoIDw9IHRoaXMuY29sdW1uLmdyaWQuY2FsY1Bpbm5lZENvbnRhaW5lck1heFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNtcy5pY29uLmlubmVyVGV4dCA9ICdsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY21zLmljb24uaW5uZXJUZXh0ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbXMuaWNvbi5pbm5lclRleHQgPSAnYmxvY2snO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5ob3Jpem9udGFsU2Nyb2xsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbXMuaWNvbi5pbm5lclRleHQgPSBldmVudC50YXJnZXQuaWQgPT09ICdyaWdodCcgPyAnYXJyb3dfZm9yd2FyZCcgOiAnYXJyb3dfYmFjayc7XG5cbiAgICAgICAgICAgICAgICBpbnRlcnZhbCgxMDApLnBpcGUodGFrZVVudGlsKHRoaXMuX2RyYWdMZWF2ZSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY21zLmNvbHVtbi5ncmlkLndoZWVsSGFuZGxlcigpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuaWQgPT09ICdyaWdodCcgPyB0aGlzLmhvcml6b250YWxTY3JvbGwuZ2V0SG9yaXpvbnRhbFNjcm9sbCgpLnNjcm9sbExlZnQgKz0gMTUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3Jpem9udGFsU2Nyb2xsLmdldEhvcml6b250YWxTY3JvbGwoKS5zY3JvbGxMZWZ0IC09IDE1O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbkRyYWdMZWF2ZShldmVudCkge1xuICAgICAgICBjb25zdCBkcmFnID0gZXZlbnQuZGV0YWlsLm93bmVyO1xuICAgICAgICBpZiAoIShkcmFnIGluc3RhbmNlb2YgSWd4Q29sdW1uTW92aW5nRHJhZ0RpcmVjdGl2ZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY21zLmljb24uaW5uZXJUZXh0ID0gJ2Jsb2NrJztcblxuICAgICAgICBpZiAodGhpcy5fZHJvcEluZGljYXRvcikge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9kcm9wSW5kaWNhdG9yLCB0aGlzLl9kcm9wSW5kaWNhdG9yQ2xhc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaG9yaXpvbnRhbFNjcm9sbCkge1xuICAgICAgICAgICAgdGhpcy5fZHJhZ0xlYXZlLm5leHQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25EcmFnRHJvcChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBkcmFnID0gZXZlbnQuZGV0YWlsLm93bmVyO1xuICAgICAgICBpZiAoIShkcmFnIGluc3RhbmNlb2YgSWd4Q29sdW1uTW92aW5nRHJhZ0RpcmVjdGl2ZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbHVtbiAmJiAodGhpcy5jbXMuY29sdW1uLmdyaWQuaWQgIT09IHRoaXMuY29sdW1uLmdyaWQuaWQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ob3Jpem9udGFsU2Nyb2xsKSB7XG4gICAgICAgICAgICB0aGlzLl9kcmFnTGVhdmUubmV4dCh0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzRHJvcFRhcmdldCkge1xuICAgICAgICAgICAgY29uc3QgYXJncyA9IHtcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHRoaXMuY21zLmNvbHVtbixcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuY29sdW1uXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsZXQgbmV4dFBpbm5lZFdpZHRoO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29sdW1uLnBpbm5lZCAmJiAhdGhpcy5jbXMuY29sdW1uLnBpbm5lZCkge1xuICAgICAgICAgICAgICAgIG5leHRQaW5uZWRXaWR0aCA9IHRoaXMuY29sdW1uLmdyaWQuZ2V0UGlubmVkV2lkdGgodHJ1ZSkgKyBwYXJzZUZsb2F0KHRoaXMuY21zLmNvbHVtbi53aWR0aCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgobmV4dFBpbm5lZFdpZHRoICYmIG5leHRQaW5uZWRXaWR0aCA+IHRoaXMuY29sdW1uLmdyaWQuY2FsY1Bpbm5lZENvbnRhaW5lck1heFdpZHRoKSB8fFxuICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uLmxldmVsICE9PSB0aGlzLmNtcy5jb2x1bW4ubGV2ZWwgfHxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbi5wYXJlbnQgIT09IHRoaXMuY21zLmNvbHVtbi5wYXJlbnQgfHxcbiAgICAgICAgICAgICAgICB0aGlzLmNtcy5jYW5jZWxEcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY21zLmNhbmNlbERyb3AgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2x1bW4uZ3JpZC5vbkNvbHVtbk1vdmluZ0VuZC5lbWl0KGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY29sdW1uLmdyaWQubW92ZUNvbHVtbih0aGlzLmNtcy5jb2x1bW4sIHRoaXMuY29sdW1uLCB0aGlzLl9kcm9wUG9zKTtcblxuICAgICAgICAgICAgdGhpcy5jb2x1bW4uZ3JpZC5kcmFnZ2VkQ29sdW1uID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuY29sdW1uLmdyaWQuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneEdyaWRCb2R5XScsXG4gICAgcHJvdmlkZXJzOiBbSWd4Rm9yT2ZTeW5jU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgSWd4R3JpZEJvZHlEaXJlY3RpdmUge31cblxuLyoqXG4gKkBoaWRkZW5cbiAqL1xuQFBpcGUoe1xuICAgIG5hbWU6ICdpZ3hkYXRlJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hEYXRlUGlwZUNvbXBvbmVudCBleHRlbmRzIERhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgY29uc3RydWN0b3IoQEluamVjdChMT0NBTEVfSUQpIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgICAgIC8vIEQuUC4gY29uc3RydWN0b3IgZHVwbGljYXRpb24gZHVlIHRvIGVzNiBjb21waWxhdGlvbiwgbWlnaHQgYmUgb2Jzb2xldGUgaW4gdGhlIGZ1dHVyZVxuICAgICAgICBzdXBlcihsb2NhbGUpO1xuICAgIH1cbiAgICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgbG9jYWxlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICBpZiAobG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybSh2YWx1ZSwgREVGQVVMVF9EQVRFX0ZPUk1BVCwgdW5kZWZpbmVkLCBsb2NhbGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3VwZXIudHJhbnNmb3JtKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8qKlxuICpAaGlkZGVuXG4gKi9cbkBQaXBlKHtcbiAgICBuYW1lOiAnaWd4ZGVjaW1hbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4RGVjaW1hbFBpcGVDb21wb25lbnQgZXh0ZW5kcyBEZWNpbWFsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoTE9DQUxFX0lEKSBsb2NhbGU6IHN0cmluZykge1xuICAgICAgICAvLyBELlAuIGNvbnN0cnVjdG9yIGR1cGxpY2F0aW9uIGR1ZSB0byBlczYgY29tcGlsYXRpb24sIG1pZ2h0IGJlIG9ic29sZXRlIGluIHRoZSBmdXR1cmVcbiAgICAgICAgc3VwZXIobG9jYWxlKTtcbiAgICB9XG4gICAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGxvY2FsZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGlmIChsb2NhbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3VwZXIudHJhbnNmb3JtKHZhbHVlLCB1bmRlZmluZWQsIGxvY2FsZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdXBlci50cmFuc2Zvcm0odmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb250YWluZXJQb3NpdGlvblNldHRpbmdzIGV4dGVuZHMgUG9zaXRpb25TZXR0aW5ncyB7XG4gICAgY29udGFpbmVyPzogSFRNTEVsZW1lbnQ7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQ29udGFpbmVyUG9zaXRpb25pbmdTdHJhdGVneSBleHRlbmRzIENvbm5lY3RlZFBvc2l0aW9uaW5nU3RyYXRlZ3kge1xuICAgIGlzVG9wID0gZmFsc2U7XG4gICAgaXNUb3BJbml0aWFsUG9zaXRpb24gPSBudWxsO1xuICAgIHB1YmxpYyBzZXR0aW5nczogQ29udGFpbmVyUG9zaXRpb25TZXR0aW5ncztcbiAgICBwb3NpdGlvbihjb250ZW50RWxlbWVudDogSFRNTEVsZW1lbnQsIHNpemU6IHsgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIgfSwgZG9jdW1lbnQ/OiBEb2N1bWVudCwgaW5pdGlhbENhbGw/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuc2V0dGluZ3MuY29udGFpbmVyOyAvLyBncmlkLnRib2R5XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IDxIVE1MRWxlbWVudD50aGlzLnNldHRpbmdzLnRhcmdldDsgLy8gY3VycmVudCBncmlkLnJvd1xuXG4gICAgICAgIC8vIFBvc2l0aW9uIG9mIHRoZSBvdmVybGF5IGRlcGVuZHMgb24gdGhlIGF2YWlsYWJsZSBzcGFjZSBpbiB0aGUgZ3JpZC5cbiAgICAgICAgLy8gSWYgdGhlIGJvdHRvbSBzcGFjZSBpcyBub3QgZW5vdWdoIHRoZW4gdGhlIHRoZSByb3cgb3ZlcmxheSB3aWxsIHNob3cgYXQgdGhlIHRvcCBvZiB0aGUgcm93LlxuICAgICAgICAvLyBPbmNlIHNob3duLCBlaXRoZXIgdG9wIG9yIGJvdHRvbSwgdGhlbiB0aGlzIHBvc2l0aW9uIHN0YXlzIHVudGlsIHRoZSBvdmVybGF5IGlzIGNsb3NlZCAoaXNUb3BJbml0aWFsUG9zaXRpb24gcHJvcGVydHkpLFxuICAgICAgICAvLyB3aGljaCBtZWFucyB0aGF0IHdoZW4gc2Nyb2xsaW5nIHRoZW4gb3ZlcmxheSBtYXkgaGlkZSwgd2hpbGUgdGhlIHJvdyBpcyBzdGlsbCB2aXNpYmxlIChVWCByZXF1aXJlbWVudCkuXG4gICAgICAgIHRoaXMuaXNUb3AgPSB0aGlzLmlzVG9wSW5pdGlhbFBvc2l0aW9uICE9PSBudWxsID9cbiAgICAgICAgICAgIHRoaXMuaXNUb3BJbml0aWFsUG9zaXRpb24gOlxuICAgICAgICAgICAgY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA8XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSArIGNvbnRlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgICAgICAvLyBTZXQgd2lkdGggb2YgdGhlIHJvdyBlZGl0aW5nIG92ZXJsYXkgdG8gZXF1YWwgcm93IHdpZHRoLCBvdGhlcndpc2UgaXQgZml0cyAxMDAlIG9mIHRoZSBncmlkLlxuICAgICAgICBjb250ZW50RWxlbWVudC5zdHlsZS53aWR0aCA9IHRhcmdldC5jbGllbnRXaWR0aCArICdweCc7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudmVydGljYWxTdGFydFBvaW50ID0gdGhpcy5zZXR0aW5ncy52ZXJ0aWNhbERpcmVjdGlvbiA9IHRoaXMuaXNUb3AgPyBWZXJ0aWNhbEFsaWdubWVudC5Ub3AgOiBWZXJ0aWNhbEFsaWdubWVudC5Cb3R0b207XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3BlbkFuaW1hdGlvbiA9IHRoaXMuaXNUb3AgPyBzY2FsZUluVmVyQm90dG9tIDogc2NhbGVJblZlclRvcDtcblxuICAgICAgICBzdXBlci5wb3NpdGlvbihjb250ZW50RWxlbWVudCwgeyB3aWR0aDogdGFyZ2V0LmNsaWVudFdpZHRoLCBoZWlnaHQ6IHRhcmdldC5jbGllbnRIZWlnaHQgfSwgZG9jdW1lbnQsIGluaXRpYWxDYWxsKTtcbiAgICB9XG59XG4iXX0=