import { AfterViewInit, ElementRef, OnChanges, OnDestroy, Renderer2, SimpleChanges, AfterViewChecked } from '@angular/core';
interface ISearchInfo {
    searchedText: string;
    content: string;
    matchCount: number;
    caseSensitive: boolean;
    exactMatch: boolean;
}
/**
 * An interface describing information for the active highlight.
 */
export interface IActiveHighlightInfo {
    /**
     * The row index of the highlight. This property is deprecated, use `row` instead.
     */
    rowIndex?: number;
    /**
     * The column index of the highlight. This property is deprecated, use `column` instead.
     */
    columnIndex?: number;
    /**
     * The page index of the highlight. This property is deprecated.
     */
    page?: number;
    /**
     * The row of the highlight.
     */
    row?: any;
    /**
     * The column of the highlight.
     */
    column?: any;
    /**
     * The index of the highlight.
     */
    index: number;
}
export declare class IgxTextHighlightDirective implements AfterViewInit, AfterViewChecked, OnDestroy, OnChanges {
    private element;
    renderer: Renderer2;
    private static onActiveElementChanged;
    static highlightGroupsMap: Map<string, IActiveHighlightInfo>;
    private _lastSearchInfo;
    private _div;
    private _observer;
    private _nodeWasRemoved;
    private _forceEvaluation;
    private _activeElementIndex;
    private _valueChanged;
    /**
     * Determines the `CSS` class of the highlight elements.
     * This allows the developer to provide custom `CSS` to customize the highlight.
     *
     * ```html
     * <div
     *   igxTextHighlight
     *   [cssClass]="myClass">
     * </div>
     * ```
     */
    cssClass: string;
    /**
     * Determines the `CSS` class of the active highlight element.
     * This allows the developer to provide custom `CSS` to customize the highlight.
     *
     * ```html
     * <div
     *   igxTextHighlight
     *   [activeCssClass]="activeHighlightClass">
     * </div>
     * ```
     */
    activeCssClass: string;
    /**
     * @hidden
     */
    containerClass: string;
    /**
     * Identifies the highlight within a unique group.
     * This allows it to have several different highlight groups,
     * with each of them having their own active highlight.
     *
     * ```html
     * <div
     *   igxTextHighlight
     *   [groupName]="myGroupName">
     * </div>
     * ```
     */
    groupName: string;
    private _value;
    /**
     * The underlying value of the element that will be highlighted.
     *
     * ```typescript
     * // get
     * const elementValue = this.textHighlight.value;
     * ```
     *
     * ```html
     * <!--set-->
     * <div
     *   igxTextHighlight
     *   [value]="newValue">
     * </div>
     * ```
     */
    value: any;
    /**
     * The identifier of the row on which the directive is currently on.
     *
     * ```html
     * <div
     *   igxTextHighlight
     *   [row]="0">
     * </div>
     * ```
     */
    row: any;
    /**
     * The identifier of the column on which the directive is currently on.
     *
     * ```html
     * <div
     *   igxTextHighlight
     *   [column]="0">
     * </div>
     * ```
     */
    column: any;
    page: number;
    /**
     * @hidden
     */
    readonly lastSearchInfo: ISearchInfo;
    /**
     * @hidden
     */
    parentElement: any;
    private _container;
    private destroy$;
    /**
     * Activates the highlight at a given index.
     * (if such index exists)
     */
    static setActiveHighlight(groupName: string, highlight: IActiveHighlightInfo): void;
    /**
     * Clears any existing highlight.
     */
    static clearActiveHighlight(groupName: any): void;
    constructor(element: ElementRef, renderer: Renderer2);
    /**
     * @hidden
     */
    ngOnDestroy(): void;
    /**
     * @hidden
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @hidden
     */
    ngAfterViewInit(): void;
    /**
     * @hidden
     */
    ngAfterViewChecked(): void;
    /**
     * Clears the existing highlight and highlights the searched text.
     * Returns how many times the element contains the searched text.
     */
    highlight(text: string, caseSensitive?: boolean, exactMatch?: boolean): number;
    /**
     * Clears any existing highlight.
     */
    clearHighlight(): void;
    /**
     * Activates the highlight if it is on the currently active row, column and page.
     */
    activateIfNecessary(): void;
    /**
     * Attaches a MutationObserver to the parentElement and watches for when the container element is removed/readded to the DOM.
     * Should be used only when necessary as using many observers may lead to performance degradation.
     */
    observe(): void;
    private activate;
    private deactivate;
    private clearChildElements;
    private getHighlightedText;
    private appendText;
    private appendSpan;
    private appendDiv;
    private searchNeedsEvaluation;
}
/**
 * @hidden
 */
export declare class IgxTextHighlightModule {
}
export {};
