/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var DEFAULT_DATE_FORMAT = 'mediumDate';
/** @type {?} */
var DEBOUNCE_TIME = 200;
/**
 * @hidden
 */
var IgxResizeHandleDirective = /** @class */ (function () {
    function IgxResizeHandleDirective(zone, element, colResizingService) {
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
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxResizeHandleDirective.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.destroy$.next(true);
        this.destroy$.complete();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxResizeHandleDirective.prototype.ngAfterViewInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.column.columnGroup && this.column.resizable) {
            this.zone.runOutsideAngular(function () {
                fromEvent(_this.element.nativeElement, 'mousedown').pipe(debounceTime(DEBOUNCE_TIME), takeUntil(_this.destroy$)).subscribe(function (event) {
                    if (_this._dblClick) {
                        _this._dblClick = false;
                        return;
                    }
                    if (event.button === 0) {
                        _this._onResizeAreaMouseDown(event);
                        _this.column.grid.resizeLine.resizer.onMousedown(event);
                    }
                });
            });
            fromEvent(this.element.nativeElement, 'mouseup').pipe(debounceTime(DEBOUNCE_TIME), takeUntil(this.destroy$)).subscribe(function () {
                _this.colResizingService.isColumnResizing = false;
                _this.colResizingService.showResizer = false;
                _this.column.grid.cdr.detectChanges();
            });
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxResizeHandleDirective.prototype.onMouseOver = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.colResizingService.resizeCursor = 'col-resize';
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxResizeHandleDirective.prototype.onDoubleClick = /**
     * @hidden
     * @return {?}
     */
    function () {
        this._dblClick = true;
        this.colResizingService.column = this.column;
        this.colResizingService.autosizeColumnOnDblClick();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @private
     * @param {?} event
     * @return {?}
     */
    IgxResizeHandleDirective.prototype._onResizeAreaMouseDown = /**
     * @hidden
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.colResizingService.column = this.column;
        this.colResizingService.isColumnResizing = true;
        this.colResizingService.startResizePos = event.clientX;
        this.colResizingService.showResizer = true;
        this.column.grid.cdr.detectChanges();
    };
    IgxResizeHandleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxResizeHandle]'
                },] }
    ];
    /** @nocollapse */
    IgxResizeHandleDirective.ctorParameters = function () { return [
        { type: NgZone },
        { type: ElementRef },
        { type: IgxColumnResizingService }
    ]; };
    IgxResizeHandleDirective.propDecorators = {
        column: [{ type: Input, args: ['igxResizeHandle',] }],
        onMouseOver: [{ type: HostListener, args: ['mouseover',] }],
        onDoubleClick: [{ type: HostListener, args: ['dblclick',] }]
    };
    return IgxResizeHandleDirective;
}());
export { IgxResizeHandleDirective };
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
var IgxColumnResizerDirective = /** @class */ (function () {
    function IgxColumnResizerDirective(element, document, zone) {
        var _this = this;
        this.element = element;
        this.document = document;
        this.zone = zone;
        this.restrictHResizeMin = Number.MIN_SAFE_INTEGER;
        this.restrictHResizeMax = Number.MAX_SAFE_INTEGER;
        this.resizeEnd = new Subject();
        this.resizeStart = new Subject();
        this.resize = new Subject();
        this._destroy = new Subject();
        this.resizeStart.pipe(map(function (event) { return event.clientX; }), takeUntil(this._destroy), switchMap(function (offset) { return _this.resize.pipe(map(function (event) { return event.clientX - offset; }), takeUntil(_this.resizeEnd), takeUntil(_this._destroy)); })).subscribe(function (pos) {
            /** @type {?} */
            var left = _this._left + pos;
            /** @type {?} */
            var min = _this._left - _this.restrictHResizeMin;
            /** @type {?} */
            var max = _this._left + _this.restrictHResizeMax;
            _this.left = left < min ? min : left;
            if (left > max) {
                _this.left = max;
            }
        });
    }
    /**
     * @return {?}
     */
    IgxColumnResizerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            fromEvent(_this.document.defaultView, 'mousemove').pipe(throttle(function () { return interval(0, animationFrameScheduler); }), takeUntil(_this._destroy)).subscribe(function (res) { return _this.onMousemove(res); });
            fromEvent(_this.document.defaultView, 'mouseup').pipe(takeUntil(_this._destroy))
                .subscribe(function (res) { return _this.onMouseup(res); });
        });
    };
    /**
     * @return {?}
     */
    IgxColumnResizerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy.next(true);
        this._destroy.complete();
    };
    Object.defineProperty(IgxColumnResizerDirective.prototype, "left", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var _this = this;
            requestAnimationFrame(function () { return _this.element.nativeElement.style.left = val + 'px'; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnResizerDirective.prototype, "top", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var _this = this;
            requestAnimationFrame(function () { return _this.element.nativeElement.style.top = val + 'px'; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    IgxColumnResizerDirective.prototype.onMouseup = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.resizeEnd.next(event);
        this.resizeEnd.complete();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IgxColumnResizerDirective.prototype.onMousedown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        /** @type {?} */
        var parent = this.element.nativeElement.parentElement.parentElement;
        this.left = this._left = event.clientX - parent.getBoundingClientRect().left;
        this.top = event.target.getBoundingClientRect().top - parent.getBoundingClientRect().top;
        this.resizeStart.next(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IgxColumnResizerDirective.prototype.onMousemove = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        this.resize.next(event);
    };
    IgxColumnResizerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxResizer]'
                },] }
    ];
    /** @nocollapse */
    IgxColumnResizerDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: NgZone }
    ]; };
    IgxColumnResizerDirective.propDecorators = {
        restrictHResizeMin: [{ type: Input }],
        restrictHResizeMax: [{ type: Input }],
        resizeEnd: [{ type: Output }],
        resizeStart: [{ type: Output }],
        resize: [{ type: Output }]
    };
    return IgxColumnResizerDirective;
}());
export { IgxColumnResizerDirective };
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
var IgxFilterCellTemplateDirective = /** @class */ (function () {
    function IgxFilterCellTemplateDirective(template) {
        this.template = template;
    }
    IgxFilterCellTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxFilterCellTemplate]'
                },] }
    ];
    /** @nocollapse */
    IgxFilterCellTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return IgxFilterCellTemplateDirective;
}());
export { IgxFilterCellTemplateDirective };
if (false) {
    /** @type {?} */
    IgxFilterCellTemplateDirective.prototype.template;
}
var IgxCellTemplateDirective = /** @class */ (function () {
    function IgxCellTemplateDirective(template) {
        this.template = template;
    }
    IgxCellTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxCell]'
                },] }
    ];
    /** @nocollapse */
    IgxCellTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return IgxCellTemplateDirective;
}());
export { IgxCellTemplateDirective };
if (false) {
    /** @type {?} */
    IgxCellTemplateDirective.prototype.template;
}
var IgxCellHeaderTemplateDirective = /** @class */ (function () {
    function IgxCellHeaderTemplateDirective(template) {
        this.template = template;
    }
    IgxCellHeaderTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxHeader]'
                },] }
    ];
    /** @nocollapse */
    IgxCellHeaderTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return IgxCellHeaderTemplateDirective;
}());
export { IgxCellHeaderTemplateDirective };
if (false) {
    /** @type {?} */
    IgxCellHeaderTemplateDirective.prototype.template;
}
/**
 * @hidden
 */
var IgxCellFooterTemplateDirective = /** @class */ (function () {
    function IgxCellFooterTemplateDirective(template) {
        this.template = template;
    }
    IgxCellFooterTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxFooter]'
                },] }
    ];
    /** @nocollapse */
    IgxCellFooterTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return IgxCellFooterTemplateDirective;
}());
export { IgxCellFooterTemplateDirective };
if (false) {
    /** @type {?} */
    IgxCellFooterTemplateDirective.prototype.template;
}
var IgxCellEditorTemplateDirective = /** @class */ (function () {
    function IgxCellEditorTemplateDirective(template) {
        this.template = template;
    }
    IgxCellEditorTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxCellEditor]'
                },] }
    ];
    /** @nocollapse */
    IgxCellEditorTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return IgxCellEditorTemplateDirective;
}());
export { IgxCellEditorTemplateDirective };
if (false) {
    /** @type {?} */
    IgxCellEditorTemplateDirective.prototype.template;
}
/**
 * @hidden
 */
var IgxColumnMovingService = /** @class */ (function () {
    function IgxColumnMovingService() {
    }
    Object.defineProperty(IgxColumnMovingService.prototype, "column", {
        get: /**
         * @return {?}
         */
        function () {
            return this._column;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val) {
                this._column = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnMovingService.prototype, "icon", {
        get: /**
         * @return {?}
         */
        function () {
            return this._icon;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val) {
                this._icon = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    IgxColumnMovingService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ IgxColumnMovingService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function IgxColumnMovingService_Factory() { return new IgxColumnMovingService(); }, token: IgxColumnMovingService, providedIn: "root" });
    return IgxColumnMovingService;
}());
export { IgxColumnMovingService };
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
var DropPosition = {
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
var IgxColumnMovingDragDirective = /** @class */ (function (_super) {
    tslib_1.__extends(IgxColumnMovingDragDirective, _super);
    function IgxColumnMovingDragDirective(_element, _zone, _renderer, _cdr, cms) {
        var _this = _super.call(this, _cdr, _element, _zone, _renderer) || this;
        _this.cms = cms;
        _this._ghostImageClass = 'igx-grid__drag-ghost-image';
        _this.dragGhostImgIconClass = 'igx-grid__drag-ghost-image-icon';
        _this.dragGhostImgIconGroupClass = 'igx-grid__drag-ghost-image-icon-group';
        return _this;
    }
    Object.defineProperty(IgxColumnMovingDragDirective.prototype, "data", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._column = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnMovingDragDirective.prototype, "column", {
        get: /**
         * @return {?}
         */
        function () {
            return this._column;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnMovingDragDirective.prototype, "draggable", {
        get: /**
         * @return {?}
         */
        function () {
            return this.column && (this.column.movable || (this.column.groupable && !this.column.columnGroup));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnMovingDragDirective.prototype, "icon", {
        get: /**
         * @return {?}
         */
        function () {
            return this.cms.icon;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IgxColumnMovingDragDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._unsubscribe();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IgxColumnMovingDragDirective.prototype.onEscape = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cms.cancelDrop = true;
        this.onPointerUp(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IgxColumnMovingDragDirective.prototype.onPointerDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (!this.draggable || event.target.getAttribute('draggable') === 'false') {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        this._removeOnDestroy = false;
        this.cms.column = this.column;
        this.ghostImageClass = this._ghostImageClass;
        _super.prototype.onPointerDown.call(this, event);
        this.cms.isColumnMoving = true;
        this.column.grid.cdr.detectChanges();
        /** @type {?} */
        var args = {
            source: this.column
        };
        this.column.grid.onColumnMovingStart.emit(args);
        this.subscription$ = fromEvent(this.column.grid.document.defaultView, 'keydown').subscribe(function (ev) {
            if (ev.key === "Escape" /* ESCAPE */ || ev.key === "Esc" /* ESCAPE_IE */) {
                _this.onEscape(ev);
            }
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IgxColumnMovingDragDirective.prototype.onPointerMove = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        _super.prototype.onPointerMove.call(this, event);
        if (this._dragStarted && this.dragGhost && !this.column.grid.draggedColumn) {
            this.column.grid.draggedColumn = this.column;
            this.column.grid.cdr.detectChanges();
        }
        if (this.cms.isColumnMoving) {
            /** @type {?} */
            var args = {
                source: this.column,
                cancel: false
            };
            this.column.grid.onColumnMoving.emit(args);
            if (args.cancel) {
                this.onEscape(event);
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IgxColumnMovingDragDirective.prototype.onPointerUp = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        // Run it explicitly inside the zone because sometimes onPointerUp executes after the code below.
        this.zone.run(function () {
            _super.prototype.onPointerUp.call(_this, event);
            _this.cms.isColumnMoving = false;
            _this.column.grid.draggedColumn = null;
            _this.column.grid.cdr.detectChanges();
        });
        this._unsubscribe();
    };
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    IgxColumnMovingDragDirective.prototype.createDragGhost = /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        _super.prototype.createDragGhost.call(this, event);
        /** @type {?} */
        var pageX;
        /** @type {?} */
        var pageY;
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
        var icon = document.createElement('i');
        /** @type {?} */
        var text = document.createTextNode('block');
        icon.appendChild(text);
        icon.classList.add('material-icons');
        this.cms.icon = icon;
        /** @type {?} */
        var hostElemLeft = this.dragGhostHost ? this.dragGhostHost.getBoundingClientRect().left : 0;
        /** @type {?} */
        var hostElemTop = this.dragGhostHost ? this.dragGhostHost.getBoundingClientRect().top : 0;
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
    };
    /**
     * @private
     * @return {?}
     */
    IgxColumnMovingDragDirective.prototype._unsubscribe = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.subscription$) {
            this.subscription$.unsubscribe();
            this.subscription$ = null;
        }
    };
    IgxColumnMovingDragDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxColumnMovingDrag]'
                },] }
    ];
    /** @nocollapse */
    IgxColumnMovingDragDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: IgxColumnMovingService }
    ]; };
    IgxColumnMovingDragDirective.propDecorators = {
        data: [{ type: Input, args: ['igxColumnMovingDrag',] }]
    };
    return IgxColumnMovingDragDirective;
}(IgxDragDirective));
export { IgxColumnMovingDragDirective };
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
var IgxColumnMovingDropDirective = /** @class */ (function (_super) {
    tslib_1.__extends(IgxColumnMovingDropDirective, _super);
    function IgxColumnMovingDropDirective(elementRef, renderer, zone, cms) {
        var _this = _super.call(this, elementRef, renderer, zone) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.zone = zone;
        _this.cms = cms;
        _this._dropIndicator = null;
        _this._lastDropIndicator = null;
        _this._dragLeave = new Subject();
        _this._dropIndicatorClass = 'igx-grid__th-drop-indicator--active';
        return _this;
    }
    Object.defineProperty(IgxColumnMovingDropDirective.prototype, "data", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val instanceof IgxColumnComponent) {
                this._column = val;
            }
            if (val instanceof IgxGridForOfDirective) {
                this._hVirtDir = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnMovingDropDirective.prototype, "column", {
        get: /**
         * @return {?}
         */
        function () {
            return this._column;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnMovingDropDirective.prototype, "isDropTarget", {
        get: /**
         * @return {?}
         */
        function () {
            return this._column && this._column.grid.hasMovableColumns && this.cms.column.movable &&
                ((!this._column.pinned && this.cms.column.disablePinning) || !this.cms.column.disablePinning);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnMovingDropDirective.prototype, "horizontalScroll", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._hVirtDir) {
                return this._hVirtDir;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IgxColumnMovingDropDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._dragLeave.next(true);
        this._dragLeave.complete();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IgxColumnMovingDropDirective.prototype.onDragOver = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var drag = event.detail.owner;
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
            var clientRect = this.elementRef.nativeElement.getBoundingClientRect();
            /** @type {?} */
            var pos = clientRect.left + clientRect.width / 2;
            /** @type {?} */
            var parent_1 = this.elementRef.nativeElement.parentElement;
            if (event.detail.pageX < pos) {
                this._dropPos = DropPosition.BeforeDropTarget;
                this._lastDropIndicator = this._dropIndicator = parent_1.firstElementChild;
            }
            else {
                this._dropPos = DropPosition.AfterDropTarget;
                this._lastDropIndicator = this._dropIndicator = parent_1.lastElementChild;
            }
            if (this.cms.icon.innerText !== 'block') {
                this.renderer.addClass(this._dropIndicator, this._dropIndicatorClass);
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IgxColumnMovingDropDirective.prototype.onDragEnter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var drag = event.detail.owner;
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
                var nextPinnedWidth = this.column.grid.getPinnedWidth(true) + parseFloat(this.cms.column.width);
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
            interval(100).pipe(takeUntil(this._dragLeave)).subscribe(function () {
                _this.cms.column.grid.wheelHandler();
                event.target.id === 'right' ? _this.horizontalScroll.getHorizontalScroll().scrollLeft += 15 :
                    _this.horizontalScroll.getHorizontalScroll().scrollLeft -= 15;
            });
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IgxColumnMovingDropDirective.prototype.onDragLeave = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var drag = event.detail.owner;
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IgxColumnMovingDropDirective.prototype.onDragDrop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        /** @type {?} */
        var drag = event.detail.owner;
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
            var args = {
                source: this.cms.column,
                target: this.column
            };
            /** @type {?} */
            var nextPinnedWidth = void 0;
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
    };
    IgxColumnMovingDropDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxColumnMovingDrop]'
                },] }
    ];
    /** @nocollapse */
    IgxColumnMovingDropDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgZone },
        { type: IgxColumnMovingService }
    ]; };
    IgxColumnMovingDropDirective.propDecorators = {
        data: [{ type: Input, args: ['igxColumnMovingDrop',] }]
    };
    return IgxColumnMovingDropDirective;
}(IgxDropDirective));
export { IgxColumnMovingDropDirective };
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
var IgxGridBodyDirective = /** @class */ (function () {
    function IgxGridBodyDirective() {
    }
    IgxGridBodyDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxGridBody]',
                    providers: [IgxForOfSyncService]
                },] }
    ];
    return IgxGridBodyDirective;
}());
export { IgxGridBodyDirective };
/**
 * @hidden
 */
var IgxDatePipeComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxDatePipeComponent, _super);
    function IgxDatePipeComponent(locale) {
        // D.P. constructor duplication due to es6 compilation, might be obsolete in the future
        return _super.call(this, locale) || this;
    }
    /**
     * @param {?} value
     * @param {?} locale
     * @return {?}
     */
    IgxDatePipeComponent.prototype.transform = /**
     * @param {?} value
     * @param {?} locale
     * @return {?}
     */
    function (value, locale) {
        if (value && value instanceof Date) {
            if (locale) {
                return _super.prototype.transform.call(this, value, DEFAULT_DATE_FORMAT, undefined, locale);
            }
            else {
                return _super.prototype.transform.call(this, value);
            }
        }
        else {
            return value;
        }
    };
    IgxDatePipeComponent.decorators = [
        { type: Pipe, args: [{
                    name: 'igxdate'
                },] }
    ];
    /** @nocollapse */
    IgxDatePipeComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    return IgxDatePipeComponent;
}(DatePipe));
export { IgxDatePipeComponent };
/**
 * @hidden
 */
var IgxDecimalPipeComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxDecimalPipeComponent, _super);
    function IgxDecimalPipeComponent(locale) {
        // D.P. constructor duplication due to es6 compilation, might be obsolete in the future
        return _super.call(this, locale) || this;
    }
    /**
     * @param {?} value
     * @param {?} locale
     * @return {?}
     */
    IgxDecimalPipeComponent.prototype.transform = /**
     * @param {?} value
     * @param {?} locale
     * @return {?}
     */
    function (value, locale) {
        if (value && typeof value === 'number') {
            if (locale) {
                return _super.prototype.transform.call(this, value, undefined, locale);
            }
            else {
                return _super.prototype.transform.call(this, value);
            }
        }
        else {
            return value;
        }
    };
    IgxDecimalPipeComponent.decorators = [
        { type: Pipe, args: [{
                    name: 'igxdecimal'
                },] }
    ];
    /** @nocollapse */
    IgxDecimalPipeComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    return IgxDecimalPipeComponent;
}(DecimalPipe));
export { IgxDecimalPipeComponent };
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
var /**
 * @hidden
 */
ContainerPositioningStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(ContainerPositioningStrategy, _super);
    function ContainerPositioningStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isTop = false;
        _this.isTopInitialPosition = null;
        return _this;
    }
    /**
     * @param {?} contentElement
     * @param {?} size
     * @param {?=} document
     * @param {?=} initialCall
     * @return {?}
     */
    ContainerPositioningStrategy.prototype.position = /**
     * @param {?} contentElement
     * @param {?} size
     * @param {?=} document
     * @param {?=} initialCall
     * @return {?}
     */
    function (contentElement, size, document, initialCall) {
        /** @type {?} */
        var container = this.settings.container;
        // grid.tbody
        /** @type {?} */
        var target = (/** @type {?} */ (this.settings.target));
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
        _super.prototype.position.call(this, contentElement, { width: target.clientWidth, height: target.clientHeight }, document, initialCall);
    };
    return ContainerPositioningStrategy;
}(ConnectedPositioningStrategy));
/**
 * @hidden
 */
export { ContainerPositioningStrategy };
if (false) {
    /** @type {?} */
    ContainerPositioningStrategy.prototype.isTop;
    /** @type {?} */
    ContainerPositioningStrategy.prototype.isTopInitialPosition;
    /** @type {?} */
    ContainerPositioningStrategy.prototype.settings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21tb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2dyaWQuY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEUsT0FBTyxFQUNILGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFHTixNQUFNLEVBQ04sSUFBSSxFQUVKLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUVULFlBQVksRUFDZixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBb0IsTUFBTSwrQkFBK0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMENBQTBD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SCxDQUFDO0lBQ0wsbUNBQUM7QUFBRCxDQUFDLEFBeEJELENBQWtELDRCQUE0QixHQXdCN0U7Ozs7Ozs7SUF2QkcsNkNBQWM7O0lBQ2QsNERBQTRCOztJQUM1QixnREFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCwgRGF0ZVBpcGUsIERlY2ltYWxQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgRGlyZWN0aXZlLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSW5qZWN0LFxuICAgIEluamVjdGFibGUsXG4gICAgSW5wdXQsXG4gICAgTmdab25lLFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgT3V0cHV0LFxuICAgIFBpcGUsXG4gICAgUGlwZVRyYW5zZm9ybSxcbiAgICBSZW5kZXJlcjIsXG4gICAgVGVtcGxhdGVSZWYsXG4gICAgTE9DQUxFX0lELFxuICAgIEFmdGVyVmlld0luaXQsXG4gICAgSG9zdExpc3RlbmVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIsIGZyb21FdmVudCwgaW50ZXJ2YWwsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCwgdGhyb3R0bGUsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElneENvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4vY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hEcmFnRGlyZWN0aXZlLCBJZ3hEcm9wRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9kcmFnZHJvcC9kcmFnZHJvcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4R3JpZEZvck9mRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9mb3Itb2YvZm9yX29mLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb25uZWN0ZWRQb3NpdGlvbmluZ1N0cmF0ZWd5IH0gZnJvbSAnLi4vc2VydmljZXMnO1xuaW1wb3J0IHsgVmVydGljYWxBbGlnbm1lbnQsIFBvc2l0aW9uU2V0dGluZ3MgfSBmcm9tICcuLi9zZXJ2aWNlcy9vdmVybGF5L3V0aWxpdGllcyc7XG5pbXBvcnQgeyBzY2FsZUluVmVyQm90dG9tLCBzY2FsZUluVmVyVG9wIH0gZnJvbSAnLi4vYW5pbWF0aW9ucy9tYWluJztcbmltcG9ydCB7IEtFWVMgfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IElneENvbHVtblJlc2l6aW5nU2VydmljZSB9IGZyb20gJy4vZ3JpZC1jb2x1bW4tcmVzaXppbmcuc2VydmljZSc7XG5pbXBvcnQgeyBJZ3hGb3JPZlN5bmNTZXJ2aWNlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9mb3Itb2YvZm9yX29mLnN5bmMuc2VydmljZSc7XG5cbmNvbnN0IERFRkFVTFRfREFURV9GT1JNQVQgPSAnbWVkaXVtRGF0ZSc7XG5jb25zdCBERUJPVU5DRV9USU1FID0gMjAwO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4UmVzaXplSGFuZGxlXSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4UmVzaXplSGFuZGxlRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASW5wdXQoJ2lneFJlc2l6ZUhhbmRsZScpXG4gICAgcHVibGljIGNvbHVtbjogSWd4Q29sdW1uQ29tcG9uZW50O1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX2RibENsaWNrID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICAgICAgICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgIHB1YmxpYyBjb2xSZXNpemluZ1NlcnZpY2U6IElneENvbHVtblJlc2l6aW5nU2VydmljZSkgeyB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbHVtbi5jb2x1bW5Hcm91cCAmJiB0aGlzLmNvbHVtbi5yZXNpemFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgZnJvbUV2ZW50KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnbW91c2Vkb3duJykucGlwZShcbiAgICAgICAgICAgICAgICAgICAgZGVib3VuY2VUaW1lKERFQk9VTkNFX1RJTUUpLFxuICAgICAgICAgICAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgICAgICAgICAgICApLnN1YnNjcmliZSgoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGJsQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2RibENsaWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vblJlc2l6ZUFyZWFNb3VzZURvd24oZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2x1bW4uZ3JpZC5yZXNpemVMaW5lLnJlc2l6ZXIub25Nb3VzZWRvd24oZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZnJvbUV2ZW50KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnbW91c2V1cCcpLnBpcGUoXG4gICAgICAgICAgICAgICAgZGVib3VuY2VUaW1lKERFQk9VTkNFX1RJTUUpLFxuICAgICAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgICAgICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sUmVzaXppbmdTZXJ2aWNlLmlzQ29sdW1uUmVzaXppbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbFJlc2l6aW5nU2VydmljZS5zaG93UmVzaXplciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uLmdyaWQuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlb3ZlcicpXG4gICAgcHVibGljIG9uTW91c2VPdmVyKCkge1xuICAgICAgICB0aGlzLmNvbFJlc2l6aW5nU2VydmljZS5yZXNpemVDdXJzb3IgPSAnY29sLXJlc2l6ZSc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2RibGNsaWNrJylcbiAgICBwdWJsaWMgb25Eb3VibGVDbGljaygpIHtcbiAgICAgICAgdGhpcy5fZGJsQ2xpY2sgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbFJlc2l6aW5nU2VydmljZS5jb2x1bW4gPSB0aGlzLmNvbHVtbjtcbiAgICAgICAgdGhpcy5jb2xSZXNpemluZ1NlcnZpY2UuYXV0b3NpemVDb2x1bW5PbkRibENsaWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX29uUmVzaXplQXJlYU1vdXNlRG93bihldmVudCkge1xuICAgICAgICB0aGlzLmNvbFJlc2l6aW5nU2VydmljZS5jb2x1bW4gPSB0aGlzLmNvbHVtbjtcbiAgICAgICAgdGhpcy5jb2xSZXNpemluZ1NlcnZpY2UuaXNDb2x1bW5SZXNpemluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuY29sUmVzaXppbmdTZXJ2aWNlLnN0YXJ0UmVzaXplUG9zID0gZXZlbnQuY2xpZW50WDtcblxuICAgICAgICB0aGlzLmNvbFJlc2l6aW5nU2VydmljZS5zaG93UmVzaXplciA9IHRydWU7XG4gICAgICAgIHRoaXMuY29sdW1uLmdyaWQuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG59XG5cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneFJlc2l6ZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hDb2x1bW5SZXNpemVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcmVzdHJpY3RIUmVzaXplTWluOiBudW1iZXIgPSBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHJlc3RyaWN0SFJlc2l6ZU1heDogbnVtYmVyID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgcmVzaXplRW5kID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIHJlc2l6ZVN0YXJ0ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIHJlc2l6ZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICAgIHByaXZhdGUgX2xlZnQ7XG4gICAgcHJpdmF0ZSBfZGVzdHJveSA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZiwgQEluamVjdChET0NVTUVOVCkgcHVibGljIGRvY3VtZW50LCBwdWJsaWMgem9uZTogTmdab25lKSB7XG5cbiAgICAgICAgdGhpcy5yZXNpemVTdGFydC5waXBlKFxuICAgICAgICAgICAgbWFwKChldmVudCkgPT4gZXZlbnQuY2xpZW50WCksXG4gICAgICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKG9mZnNldCkgPT4gdGhpcy5yZXNpemUucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoKGV2ZW50KSA9PiBldmVudC5jbGllbnRYIC0gb2Zmc2V0KSxcbiAgICAgICAgICAgICAgICB0YWtlVW50aWwodGhpcy5yZXNpemVFbmQpLFxuICAgICAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KVxuICAgICAgICAgICAgKSlcbiAgICAgICAgKS5zdWJzY3JpYmUoKHBvcykgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5fbGVmdCArIHBvcztcblxuICAgICAgICAgICAgY29uc3QgbWluID0gdGhpcy5fbGVmdCAtIHRoaXMucmVzdHJpY3RIUmVzaXplTWluO1xuICAgICAgICAgICAgY29uc3QgbWF4ID0gdGhpcy5fbGVmdCArIHRoaXMucmVzdHJpY3RIUmVzaXplTWF4O1xuXG4gICAgICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0IDwgbWluID8gbWluIDogbGVmdDtcblxuICAgICAgICAgICAgaWYgKGxlZnQgPiBtYXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQgPSBtYXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICBmcm9tRXZlbnQodGhpcy5kb2N1bWVudC5kZWZhdWx0VmlldywgJ21vdXNlbW92ZScpLnBpcGUoXG4gICAgICAgICAgICAgICAgdGhyb3R0bGUoKCkgPT4gaW50ZXJ2YWwoMCwgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIpKSxcbiAgICAgICAgICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSlcbiAgICAgICAgICAgICkuc3Vic2NyaWJlKChyZXMpID0+IHRoaXMub25Nb3VzZW1vdmUocmVzKSk7XG5cbiAgICAgICAgICAgIGZyb21FdmVudCh0aGlzLmRvY3VtZW50LmRlZmF1bHRWaWV3LCAnbW91c2V1cCcpLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlcykgPT4gdGhpcy5vbk1vdXNldXAocmVzKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9kZXN0cm95Lm5leHQodHJ1ZSk7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGxlZnQodmFsKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gdmFsICsgJ3B4Jyk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB0b3AodmFsKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSB2YWwgKyAncHgnKTtcbiAgICB9XG5cbiAgICBvbk1vdXNldXAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5yZXNpemVFbmQubmV4dChldmVudCk7XG4gICAgICAgIHRoaXMucmVzaXplRW5kLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgb25Nb3VzZWRvd24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIHRoaXMubGVmdCA9IHRoaXMuX2xlZnQgPSBldmVudC5jbGllbnRYIC0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICAgIHRoaXMudG9wID0gZXZlbnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG5cbiAgICAgICAgdGhpcy5yZXNpemVTdGFydC5uZXh0KGV2ZW50KTtcbiAgICB9XG5cbiAgICBvbk1vdXNlbW92ZShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnJlc2l6ZS5uZXh0KGV2ZW50KTtcbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneEZpbHRlckNlbGxUZW1wbGF0ZV0nXG59KVxuZXhwb3J0IGNsYXNzIElneEZpbHRlckNlbGxUZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hDZWxsXSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4Q2VsbFRlbXBsYXRlRGlyZWN0aXZlIHtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneEhlYWRlcl0nXG59KVxuZXhwb3J0IGNsYXNzIElneENlbGxIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxuXG59XG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4Rm9vdGVyXSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4Q2VsbEZvb3RlclRlbXBsYXRlRGlyZWN0aXZlIHtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneENlbGxFZGl0b3JdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hDZWxsRWRpdG9yVGVtcGxhdGVEaXJlY3RpdmUge1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIElneENvbHVtbk1vdmluZ1NlcnZpY2Uge1xuICAgIHByaXZhdGUgX2ljb246IGFueTtcbiAgICBwcml2YXRlIF9jb2x1bW46IElneENvbHVtbkNvbXBvbmVudDtcblxuICAgIHB1YmxpYyBjYW5jZWxEcm9wOiBib29sZWFuO1xuICAgIHB1YmxpYyBpc0NvbHVtbk1vdmluZzogYm9vbGVhbjtcblxuICAgIGdldCBjb2x1bW4oKTogSWd4Q29sdW1uQ29tcG9uZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbjtcbiAgICB9XG4gICAgc2V0IGNvbHVtbih2YWw6IElneENvbHVtbkNvbXBvbmVudCkge1xuICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgICB0aGlzLl9jb2x1bW4gPSB2YWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgaWNvbigpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWNvbjtcbiAgICB9XG4gICAgc2V0IGljb24odmFsOiBhbnkpIHtcbiAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgICAgdGhpcy5faWNvbiA9IHZhbDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBlbnVtIERyb3BQb3NpdGlvbiB7XG4gICAgQmVmb3JlRHJvcFRhcmdldCxcbiAgICBBZnRlckRyb3BUYXJnZXQsXG4gICAgTm9uZVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4Q29sdW1uTW92aW5nRHJhZ10nXG59KVxuZXhwb3J0IGNsYXNzIElneENvbHVtbk1vdmluZ0RyYWdEaXJlY3RpdmUgZXh0ZW5kcyBJZ3hEcmFnRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgnaWd4Q29sdW1uTW92aW5nRHJhZycpXG4gICAgc2V0IGRhdGEodmFsKSB7XG4gICAgICAgIHRoaXMuX2NvbHVtbiA9IHZhbDtcbiAgICB9XG5cbiAgICBnZXQgY29sdW1uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sdW1uO1xuICAgIH1cblxuICAgIGdldCBkcmFnZ2FibGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbHVtbiAmJiAodGhpcy5jb2x1bW4ubW92YWJsZSB8fCAodGhpcy5jb2x1bW4uZ3JvdXBhYmxlICYmICF0aGlzLmNvbHVtbi5jb2x1bW5Hcm91cCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaWNvbigpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNtcy5pY29uO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uJDogU3Vic2NyaXB0aW9uO1xuICAgIHByaXZhdGUgX2NvbHVtbjogSWd4Q29sdW1uQ29tcG9uZW50O1xuICAgIHByaXZhdGUgX2dob3N0SW1hZ2VDbGFzcyA9ICdpZ3gtZ3JpZF9fZHJhZy1naG9zdC1pbWFnZSc7XG4gICAgcHJpdmF0ZSBkcmFnR2hvc3RJbWdJY29uQ2xhc3MgPSAnaWd4LWdyaWRfX2RyYWctZ2hvc3QtaW1hZ2UtaWNvbic7XG4gICAgcHJpdmF0ZSBkcmFnR2hvc3RJbWdJY29uR3JvdXBDbGFzcyA9ICdpZ3gtZ3JpZF9fZHJhZy1naG9zdC1pbWFnZS1pY29uLWdyb3VwJztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBfZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgX3pvbmU6IE5nWm9uZSxcbiAgICAgICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgIF9jZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBwcml2YXRlIGNtczogSWd4Q29sdW1uTW92aW5nU2VydmljZSxcbiAgICApIHtcbiAgICAgICAgc3VwZXIoX2NkciwgX2VsZW1lbnQsIF96b25lLCBfcmVuZGVyZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fdW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Fc2NhcGUoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5jbXMuY2FuY2VsRHJvcCA9IHRydWU7XG4gICAgICAgIHRoaXMub25Qb2ludGVyVXAoZXZlbnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblBvaW50ZXJEb3duKGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5kcmFnZ2FibGUgfHwgZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJykgPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHRoaXMuX3JlbW92ZU9uRGVzdHJveSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNtcy5jb2x1bW4gPSB0aGlzLmNvbHVtbjtcbiAgICAgICAgdGhpcy5naG9zdEltYWdlQ2xhc3MgPSB0aGlzLl9naG9zdEltYWdlQ2xhc3M7XG5cbiAgICAgICAgc3VwZXIub25Qb2ludGVyRG93bihldmVudCk7XG5cbiAgICAgICAgdGhpcy5jbXMuaXNDb2x1bW5Nb3ZpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbHVtbi5ncmlkLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgY29uc3QgYXJncyA9IHtcbiAgICAgICAgICAgIHNvdXJjZTogdGhpcy5jb2x1bW5cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2x1bW4uZ3JpZC5vbkNvbHVtbk1vdmluZ1N0YXJ0LmVtaXQoYXJncyk7XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24kID0gZnJvbUV2ZW50KHRoaXMuY29sdW1uLmdyaWQuZG9jdW1lbnQuZGVmYXVsdFZpZXcsICdrZXlkb3duJykuc3Vic2NyaWJlKChldjogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2LmtleSA9PT0gS0VZUy5FU0NBUEUgfHwgZXYua2V5ID09PSBLRVlTLkVTQ0FQRV9JRSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25Fc2NhcGUoZXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Qb2ludGVyTW92ZShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzdXBlci5vblBvaW50ZXJNb3ZlKGV2ZW50KTtcblxuICAgICAgICBpZiAodGhpcy5fZHJhZ1N0YXJ0ZWQgJiYgdGhpcy5kcmFnR2hvc3QgJiYgIXRoaXMuY29sdW1uLmdyaWQuZHJhZ2dlZENvbHVtbikge1xuICAgICAgICAgICAgdGhpcy5jb2x1bW4uZ3JpZC5kcmFnZ2VkQ29sdW1uID0gdGhpcy5jb2x1bW47XG4gICAgICAgICAgICB0aGlzLmNvbHVtbi5ncmlkLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jbXMuaXNDb2x1bW5Nb3ZpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSB7XG4gICAgICAgICAgICAgICAgc291cmNlOiB0aGlzLmNvbHVtbixcbiAgICAgICAgICAgICAgICBjYW5jZWw6IGZhbHNlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5jb2x1bW4uZ3JpZC5vbkNvbHVtbk1vdmluZy5lbWl0KGFyZ3MpO1xuXG4gICAgICAgICAgICBpZiAoYXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uRXNjYXBlKGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblBvaW50ZXJVcChldmVudCkge1xuICAgICAgICAvLyBSdW4gaXQgZXhwbGljaXRseSBpbnNpZGUgdGhlIHpvbmUgYmVjYXVzZSBzb21ldGltZXMgb25Qb2ludGVyVXAgZXhlY3V0ZXMgYWZ0ZXIgdGhlIGNvZGUgYmVsb3cuXG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgc3VwZXIub25Qb2ludGVyVXAoZXZlbnQpO1xuXG4gICAgICAgICAgICB0aGlzLmNtcy5pc0NvbHVtbk1vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jb2x1bW4uZ3JpZC5kcmFnZ2VkQ29sdW1uID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuY29sdW1uLmdyaWQuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fdW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRHJhZ0dob3N0KGV2ZW50KSB7XG4gICAgICAgIHN1cGVyLmNyZWF0ZURyYWdHaG9zdChldmVudCk7XG5cbiAgICAgICAgbGV0IHBhZ2VYLCBwYWdlWTtcbiAgICAgICAgaWYgKHRoaXMucG9pbnRlckV2ZW50c0VuYWJsZWQgfHwgIXRoaXMudG91Y2hFdmVudHNFbmFibGVkKSB7XG4gICAgICAgICAgICBwYWdlWCA9IGV2ZW50LnBhZ2VYO1xuICAgICAgICAgICAgcGFnZVkgPSBldmVudC5wYWdlWTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhZ2VYID0gZXZlbnQudG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgIHBhZ2VZID0gZXZlbnQudG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZHJhZ0dob3N0LnN0eWxlLmhlaWdodCA9IG51bGw7XG4gICAgICAgIHRoaXMuZHJhZ0dob3N0LnN0eWxlLm1pbldpZHRoID0gbnVsbDtcbiAgICAgICAgdGhpcy5kcmFnR2hvc3Quc3R5bGUuZmxleEJhc2lzID0gbnVsbDtcbiAgICAgICAgdGhpcy5kcmFnR2hvc3Quc3R5bGUucG9zaXRpb24gPSBudWxsO1xuXG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnYmxvY2snKTtcbiAgICAgICAgaWNvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XG4gICAgICAgIHRoaXMuY21zLmljb24gPSBpY29uO1xuXG4gICAgICAgIGNvbnN0IGhvc3RFbGVtTGVmdCA9IHRoaXMuZHJhZ0dob3N0SG9zdCA/IHRoaXMuZHJhZ0dob3N0SG9zdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IDogMDtcbiAgICAgICAgY29uc3QgaG9zdEVsZW1Ub3AgPSB0aGlzLmRyYWdHaG9zdEhvc3QgPyB0aGlzLmRyYWdHaG9zdEhvc3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDogMDtcblxuICAgICAgICBpZiAoIXRoaXMuY29sdW1uLmNvbHVtbkdyb3VwKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGljb24sIHRoaXMuZHJhZ0dob3N0SW1nSWNvbkNsYXNzKTtcblxuICAgICAgICAgICAgdGhpcy5kcmFnR2hvc3QuaW5zZXJ0QmVmb3JlKGljb24sIHRoaXMuZHJhZ0dob3N0LmZpcnN0RWxlbWVudENoaWxkKTtcblxuICAgICAgICAgICAgdGhpcy5sZWZ0ID0gdGhpcy5fZHJhZ1N0YXJ0WCA9IHBhZ2VYIC0gKCh0aGlzLmRyYWdHaG9zdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAvIDMpICogMikgLSBob3N0RWxlbUxlZnQ7XG4gICAgICAgICAgICB0aGlzLnRvcCA9IHRoaXMuX2RyYWdTdGFydFkgPSBwYWdlWSAtICgodGhpcy5kcmFnR2hvc3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC8gMykgKiAyKSAtIGhvc3RFbGVtVG9wO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kcmFnR2hvc3QuaW5zZXJ0QmVmb3JlKGljb24sIHRoaXMuZHJhZ0dob3N0LmNoaWxkTm9kZXNbMF0pO1xuXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGljb24sIHRoaXMuZHJhZ0dob3N0SW1nSWNvbkdyb3VwQ2xhc3MpO1xuICAgICAgICAgICAgdGhpcy5kcmFnR2hvc3QuY2hpbGRyZW5bMF0uc3R5bGUucGFkZGluZ0xlZnQgPSAnMHB4JztcblxuICAgICAgICAgICAgdGhpcy5sZWZ0ID0gdGhpcy5fZHJhZ1N0YXJ0WCA9IHBhZ2VYIC0gKCh0aGlzLmRyYWdHaG9zdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAvIDMpICogMikgLSBob3N0RWxlbUxlZnQ7XG4gICAgICAgICAgICB0aGlzLnRvcCA9IHRoaXMuX2RyYWdTdGFydFkgPSBwYWdlWSAtICgodGhpcy5kcmFnR2hvc3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC8gMykgKiAyKSAtIGhvc3RFbGVtVG9wO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbiQpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uJC51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24kID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8qKlxuICogQGhpZGRlblxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hDb2x1bW5Nb3ZpbmdEcm9wXSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4Q29sdW1uTW92aW5nRHJvcERpcmVjdGl2ZSBleHRlbmRzIElneERyb3BEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIEBJbnB1dCgnaWd4Q29sdW1uTW92aW5nRHJvcCcpXG4gICAgc2V0IGRhdGEodmFsOiBhbnkpIHtcbiAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIElneENvbHVtbkNvbXBvbmVudCkge1xuICAgICAgICAgICAgdGhpcy5fY29sdW1uID0gdmFsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIElneEdyaWRGb3JPZkRpcmVjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5faFZpcnREaXIgPSB2YWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgY29sdW1uKCk6IElneENvbHVtbkNvbXBvbmVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2x1bW47XG4gICAgfVxuXG4gICAgZ2V0IGlzRHJvcFRhcmdldCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbiAmJiB0aGlzLl9jb2x1bW4uZ3JpZC5oYXNNb3ZhYmxlQ29sdW1ucyAmJiB0aGlzLmNtcy5jb2x1bW4ubW92YWJsZSAmJlxuICAgICAgICAgICAgKCghdGhpcy5fY29sdW1uLnBpbm5lZCAmJiB0aGlzLmNtcy5jb2x1bW4uZGlzYWJsZVBpbm5pbmcpIHx8ICF0aGlzLmNtcy5jb2x1bW4uZGlzYWJsZVBpbm5pbmcpO1xuICAgIH1cblxuICAgIGdldCBob3Jpem9udGFsU2Nyb2xsKCk6IGFueSB7XG4gICAgICAgIGlmICh0aGlzLl9oVmlydERpcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hWaXJ0RGlyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZHJvcFBvczogRHJvcFBvc2l0aW9uO1xuICAgIHByaXZhdGUgX2Ryb3BJbmRpY2F0b3I6IGFueSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfbGFzdERyb3BJbmRpY2F0b3I6IGFueSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfY29sdW1uOiBJZ3hDb2x1bW5Db21wb25lbnQ7XG4gICAgcHJpdmF0ZSBfaFZpcnREaXI6IElneEdyaWRGb3JPZkRpcmVjdGl2ZTxhbnk+O1xuICAgIHByaXZhdGUgX2RyYWdMZWF2ZSA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgcHJpdmF0ZSBfZHJvcEluZGljYXRvckNsYXNzID0gJ2lneC1ncmlkX190aC1kcm9wLWluZGljYXRvci0tYWN0aXZlJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSBjbXM6IElneENvbHVtbk1vdmluZ1NlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIoZWxlbWVudFJlZiwgcmVuZGVyZXIsIHpvbmUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fZHJhZ0xlYXZlLm5leHQodHJ1ZSk7XG4gICAgICAgIHRoaXMuX2RyYWdMZWF2ZS5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkRyYWdPdmVyKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGRyYWcgPSBldmVudC5kZXRhaWwub3duZXI7XG4gICAgICAgIGlmICghKGRyYWcgaW5zdGFuY2VvZiBJZ3hDb2x1bW5Nb3ZpbmdEcmFnRGlyZWN0aXZlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNEcm9wVGFyZ2V0ICYmXG4gICAgICAgICAgICB0aGlzLmNtcy5jb2x1bW4gIT09IHRoaXMuY29sdW1uICYmXG4gICAgICAgICAgICB0aGlzLmNtcy5jb2x1bW4ubGV2ZWwgPT09IHRoaXMuY29sdW1uLmxldmVsICYmXG4gICAgICAgICAgICB0aGlzLmNtcy5jb2x1bW4ucGFyZW50ID09PSB0aGlzLmNvbHVtbi5wYXJlbnQpIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX2xhc3REcm9wSW5kaWNhdG9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9kcm9wSW5kaWNhdG9yLCB0aGlzLl9kcm9wSW5kaWNhdG9yQ2xhc3MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjbGllbnRSZWN0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSBjbGllbnRSZWN0LmxlZnQgKyBjbGllbnRSZWN0LndpZHRoIC8gMjtcblxuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGlmIChldmVudC5kZXRhaWwucGFnZVggPCBwb3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kcm9wUG9zID0gRHJvcFBvc2l0aW9uLkJlZm9yZURyb3BUYXJnZXQ7XG4gICAgICAgICAgICAgICAgdGhpcy5fbGFzdERyb3BJbmRpY2F0b3IgPSB0aGlzLl9kcm9wSW5kaWNhdG9yID0gcGFyZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kcm9wUG9zID0gRHJvcFBvc2l0aW9uLkFmdGVyRHJvcFRhcmdldDtcbiAgICAgICAgICAgICAgICB0aGlzLl9sYXN0RHJvcEluZGljYXRvciA9IHRoaXMuX2Ryb3BJbmRpY2F0b3IgPSBwYXJlbnQubGFzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuY21zLmljb24uaW5uZXJUZXh0ICE9PSAnYmxvY2snKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9kcm9wSW5kaWNhdG9yLCB0aGlzLl9kcm9wSW5kaWNhdG9yQ2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uRHJhZ0VudGVyKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGRyYWcgPSBldmVudC5kZXRhaWwub3duZXI7XG4gICAgICAgIGlmICghKGRyYWcgaW5zdGFuY2VvZiBJZ3hDb2x1bW5Nb3ZpbmdEcmFnRGlyZWN0aXZlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29sdW1uICYmIHRoaXMuY21zLmNvbHVtbi5ncmlkLmlkICE9PSB0aGlzLmNvbHVtbi5ncmlkLmlkKSB7XG4gICAgICAgICAgICB0aGlzLmNtcy5pY29uLmlubmVyVGV4dCA9ICdibG9jayc7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0Ryb3BUYXJnZXQgJiZcbiAgICAgICAgICAgIHRoaXMuY21zLmNvbHVtbiAhPT0gdGhpcy5jb2x1bW4gJiZcbiAgICAgICAgICAgIHRoaXMuY21zLmNvbHVtbi5sZXZlbCA9PT0gdGhpcy5jb2x1bW4ubGV2ZWwgJiZcbiAgICAgICAgICAgIHRoaXMuY21zLmNvbHVtbi5wYXJlbnQgPT09IHRoaXMuY29sdW1uLnBhcmVudCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvbHVtbi5waW5uZWQgfHwgKHRoaXMuY29sdW1uLnBpbm5lZCAmJiB0aGlzLmNtcy5jb2x1bW4ucGlubmVkKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNtcy5pY29uLmlubmVyVGV4dCA9ICdzd2FwX2hvcml6JztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY21zLmNvbHVtbi5waW5uZWQgJiYgdGhpcy5jb2x1bW4ucGlubmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRQaW5uZWRXaWR0aCA9IHRoaXMuY29sdW1uLmdyaWQuZ2V0UGlubmVkV2lkdGgodHJ1ZSkgKyBwYXJzZUZsb2F0KHRoaXMuY21zLmNvbHVtbi53aWR0aCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRQaW5uZWRXaWR0aCA8PSB0aGlzLmNvbHVtbi5ncmlkLmNhbGNQaW5uZWRDb250YWluZXJNYXhXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbXMuaWNvbi5pbm5lclRleHQgPSAnbG9jayc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNtcy5pY29uLmlubmVyVGV4dCA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY21zLmljb24uaW5uZXJUZXh0ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaG9yaXpvbnRhbFNjcm9sbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY21zLmljb24uaW5uZXJUZXh0ID0gZXZlbnQudGFyZ2V0LmlkID09PSAncmlnaHQnID8gJ2Fycm93X2ZvcndhcmQnIDogJ2Fycm93X2JhY2snO1xuXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWwoMTAwKS5waXBlKHRha2VVbnRpbCh0aGlzLl9kcmFnTGVhdmUpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNtcy5jb2x1bW4uZ3JpZC53aGVlbEhhbmRsZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmlkID09PSAncmlnaHQnID8gdGhpcy5ob3Jpem9udGFsU2Nyb2xsLmdldEhvcml6b250YWxTY3JvbGwoKS5zY3JvbGxMZWZ0ICs9IDE1IDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbFNjcm9sbC5nZXRIb3Jpem9udGFsU2Nyb2xsKCkuc2Nyb2xsTGVmdCAtPSAxNTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25EcmFnTGVhdmUoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZHJhZyA9IGV2ZW50LmRldGFpbC5vd25lcjtcbiAgICAgICAgaWYgKCEoZHJhZyBpbnN0YW5jZW9mIElneENvbHVtbk1vdmluZ0RyYWdEaXJlY3RpdmUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNtcy5pY29uLmlubmVyVGV4dCA9ICdibG9jayc7XG5cbiAgICAgICAgaWYgKHRoaXMuX2Ryb3BJbmRpY2F0b3IpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZHJvcEluZGljYXRvciwgdGhpcy5fZHJvcEluZGljYXRvckNsYXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhvcml6b250YWxTY3JvbGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2RyYWdMZWF2ZS5uZXh0KHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uRHJhZ0Ryb3AoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZHJhZyA9IGV2ZW50LmRldGFpbC5vd25lcjtcbiAgICAgICAgaWYgKCEoZHJhZyBpbnN0YW5jZW9mIElneENvbHVtbk1vdmluZ0RyYWdEaXJlY3RpdmUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb2x1bW4gJiYgKHRoaXMuY21zLmNvbHVtbi5ncmlkLmlkICE9PSB0aGlzLmNvbHVtbi5ncmlkLmlkKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaG9yaXpvbnRhbFNjcm9sbCkge1xuICAgICAgICAgICAgdGhpcy5fZHJhZ0xlYXZlLm5leHQodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0Ryb3BUYXJnZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSB7XG4gICAgICAgICAgICAgICAgc291cmNlOiB0aGlzLmNtcy5jb2x1bW4sXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmNvbHVtblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbGV0IG5leHRQaW5uZWRXaWR0aDtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbHVtbi5waW5uZWQgJiYgIXRoaXMuY21zLmNvbHVtbi5waW5uZWQpIHtcbiAgICAgICAgICAgICAgICBuZXh0UGlubmVkV2lkdGggPSB0aGlzLmNvbHVtbi5ncmlkLmdldFBpbm5lZFdpZHRoKHRydWUpICsgcGFyc2VGbG9hdCh0aGlzLmNtcy5jb2x1bW4ud2lkdGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoKG5leHRQaW5uZWRXaWR0aCAmJiBuZXh0UGlubmVkV2lkdGggPiB0aGlzLmNvbHVtbi5ncmlkLmNhbGNQaW5uZWRDb250YWluZXJNYXhXaWR0aCkgfHxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbi5sZXZlbCAhPT0gdGhpcy5jbXMuY29sdW1uLmxldmVsIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5jb2x1bW4ucGFyZW50ICE9PSB0aGlzLmNtcy5jb2x1bW4ucGFyZW50IHx8XG4gICAgICAgICAgICAgICAgdGhpcy5jbXMuY2FuY2VsRHJvcCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNtcy5jYW5jZWxEcm9wID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uLmdyaWQub25Db2x1bW5Nb3ZpbmdFbmQuZW1pdChhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNvbHVtbi5ncmlkLm1vdmVDb2x1bW4odGhpcy5jbXMuY29sdW1uLCB0aGlzLmNvbHVtbiwgdGhpcy5fZHJvcFBvcyk7XG5cbiAgICAgICAgICAgIHRoaXMuY29sdW1uLmdyaWQuZHJhZ2dlZENvbHVtbiA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmNvbHVtbi5ncmlkLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hHcmlkQm9keV0nLFxuICAgIHByb3ZpZGVyczogW0lneEZvck9mU3luY1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIElneEdyaWRCb2R5RGlyZWN0aXZlIHt9XG5cbi8qKlxuICpAaGlkZGVuXG4gKi9cbkBQaXBlKHtcbiAgICBuYW1lOiAnaWd4ZGF0ZSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4RGF0ZVBpcGVDb21wb25lbnQgZXh0ZW5kcyBEYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoTE9DQUxFX0lEKSBsb2NhbGU6IHN0cmluZykge1xuICAgICAgICAvLyBELlAuIGNvbnN0cnVjdG9yIGR1cGxpY2F0aW9uIGR1ZSB0byBlczYgY29tcGlsYXRpb24sIG1pZ2h0IGJlIG9ic29sZXRlIGluIHRoZSBmdXR1cmVcbiAgICAgICAgc3VwZXIobG9jYWxlKTtcbiAgICB9XG4gICAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGxvY2FsZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgaWYgKGxvY2FsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdXBlci50cmFuc2Zvcm0odmFsdWUsIERFRkFVTFRfREFURV9GT1JNQVQsIHVuZGVmaW5lZCwgbG9jYWxlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqQGhpZGRlblxuICovXG5AUGlwZSh7XG4gICAgbmFtZTogJ2lneGRlY2ltYWwnXG59KVxuZXhwb3J0IGNsYXNzIElneERlY2ltYWxQaXBlQ29tcG9uZW50IGV4dGVuZHMgRGVjaW1hbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgbG9jYWxlOiBzdHJpbmcpIHtcbiAgICAgICAgLy8gRC5QLiBjb25zdHJ1Y3RvciBkdXBsaWNhdGlvbiBkdWUgdG8gZXM2IGNvbXBpbGF0aW9uLCBtaWdodCBiZSBvYnNvbGV0ZSBpbiB0aGUgZnV0dXJlXG4gICAgICAgIHN1cGVyKGxvY2FsZSk7XG4gICAgfVxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBsb2NhbGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpZiAobG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybSh2YWx1ZSwgdW5kZWZpbmVkLCBsb2NhbGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3VwZXIudHJhbnNmb3JtKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29udGFpbmVyUG9zaXRpb25TZXR0aW5ncyBleHRlbmRzIFBvc2l0aW9uU2V0dGluZ3Mge1xuICAgIGNvbnRhaW5lcj86IEhUTUxFbGVtZW50O1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRhaW5lclBvc2l0aW9uaW5nU3RyYXRlZ3kgZXh0ZW5kcyBDb25uZWN0ZWRQb3NpdGlvbmluZ1N0cmF0ZWd5IHtcbiAgICBpc1RvcCA9IGZhbHNlO1xuICAgIGlzVG9wSW5pdGlhbFBvc2l0aW9uID0gbnVsbDtcbiAgICBwdWJsaWMgc2V0dGluZ3M6IENvbnRhaW5lclBvc2l0aW9uU2V0dGluZ3M7XG4gICAgcG9zaXRpb24oY29udGVudEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzaXplOiB7IHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyIH0sIGRvY3VtZW50PzogRG9jdW1lbnQsIGluaXRpYWxDYWxsPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLnNldHRpbmdzLmNvbnRhaW5lcjsgLy8gZ3JpZC50Ym9keVxuICAgICAgICBjb25zdCB0YXJnZXQgPSA8SFRNTEVsZW1lbnQ+dGhpcy5zZXR0aW5ncy50YXJnZXQ7IC8vIGN1cnJlbnQgZ3JpZC5yb3dcblxuICAgICAgICAvLyBQb3NpdGlvbiBvZiB0aGUgb3ZlcmxheSBkZXBlbmRzIG9uIHRoZSBhdmFpbGFibGUgc3BhY2UgaW4gdGhlIGdyaWQuXG4gICAgICAgIC8vIElmIHRoZSBib3R0b20gc3BhY2UgaXMgbm90IGVub3VnaCB0aGVuIHRoZSB0aGUgcm93IG92ZXJsYXkgd2lsbCBzaG93IGF0IHRoZSB0b3Agb2YgdGhlIHJvdy5cbiAgICAgICAgLy8gT25jZSBzaG93biwgZWl0aGVyIHRvcCBvciBib3R0b20sIHRoZW4gdGhpcyBwb3NpdGlvbiBzdGF5cyB1bnRpbCB0aGUgb3ZlcmxheSBpcyBjbG9zZWQgKGlzVG9wSW5pdGlhbFBvc2l0aW9uIHByb3BlcnR5KSxcbiAgICAgICAgLy8gd2hpY2ggbWVhbnMgdGhhdCB3aGVuIHNjcm9sbGluZyB0aGVuIG92ZXJsYXkgbWF5IGhpZGUsIHdoaWxlIHRoZSByb3cgaXMgc3RpbGwgdmlzaWJsZSAoVVggcmVxdWlyZW1lbnQpLlxuICAgICAgICB0aGlzLmlzVG9wID0gdGhpcy5pc1RvcEluaXRpYWxQb3NpdGlvbiAhPT0gbnVsbCA/XG4gICAgICAgICAgICB0aGlzLmlzVG9wSW5pdGlhbFBvc2l0aW9uIDpcbiAgICAgICAgICAgIGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPFxuICAgICAgICAgICAgICAgIHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gKyBjb250ZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICAgICAgLy8gU2V0IHdpZHRoIG9mIHRoZSByb3cgZWRpdGluZyBvdmVybGF5IHRvIGVxdWFsIHJvdyB3aWR0aCwgb3RoZXJ3aXNlIGl0IGZpdHMgMTAwJSBvZiB0aGUgZ3JpZC5cbiAgICAgICAgY29udGVudEVsZW1lbnQuc3R5bGUud2lkdGggPSB0YXJnZXQuY2xpZW50V2lkdGggKyAncHgnO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnZlcnRpY2FsU3RhcnRQb2ludCA9IHRoaXMuc2V0dGluZ3MudmVydGljYWxEaXJlY3Rpb24gPSB0aGlzLmlzVG9wID8gVmVydGljYWxBbGlnbm1lbnQuVG9wIDogVmVydGljYWxBbGlnbm1lbnQuQm90dG9tO1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW5BbmltYXRpb24gPSB0aGlzLmlzVG9wID8gc2NhbGVJblZlckJvdHRvbSA6IHNjYWxlSW5WZXJUb3A7XG5cbiAgICAgICAgc3VwZXIucG9zaXRpb24oY29udGVudEVsZW1lbnQsIHsgd2lkdGg6IHRhcmdldC5jbGllbnRXaWR0aCwgaGVpZ2h0OiB0YXJnZXQuY2xpZW50SGVpZ2h0IH0sIGRvY3VtZW50LCBpbml0aWFsQ2FsbCk7XG4gICAgfVxufVxuIl19