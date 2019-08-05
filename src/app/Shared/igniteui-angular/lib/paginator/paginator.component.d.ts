import { EventEmitter } from '@angular/core';
import { IDisplayDensityOptions, DisplayDensityBase } from '../core/displayDensity';
export declare class IgxPaginatorComponent extends DisplayDensityBase {
    protected _displayDensityOptions: IDisplayDensityOptions;
    /**
     * Total pages calculated from totalRecords and perPage
     */
    totalPages: number;
    protected _page: number;
    protected _totalRecords: number;
    protected _selectOptions: any;
    private defaultSelectValues;
    protected _perPage: number;
    /**
     * Sets the class of the IgxPaginatorComponent based
     * on the provided displayDensity.
     */
    readonly classCosy: boolean;
    readonly classCompact: boolean;
    readonly classComfortable: boolean;
    /**
   * An @Input property, sets current page of the `IgxPaginatorComponent`.
   * The default is 0.
   * ```typescript
   * let page = this.paginator.page;
   * ```
   * @memberof IgxPaginatorComponent
   */
    page: number;
    /**
   * An @Input property, sets number of visible items per page in the `IgxPaginatorComponent`.
   * The default is 15.
   * ```typescript
   * let itemsPerPage = this.paginator.perPage;
   * ```
   * @memberof IgxPaginatorComponent
   */
    perPage: number;
    /**
    * An @Input property that sets the total records.
    * ```typescript
    * let totalRecords = this.paginator.totalRecords;
    * ```
    * @memberof IgxPaginatorComponent
    */
    totalRecords: number;
    /**
    * An @Input property that sets custom options in the select of the paginator
    * ```typescript
    * let options = this.paginator.selectOptions;
    * ```
    * @memberof IgxPaginatorComponent
    */
    selectOptions: Array<number>;
    /**
    * An @Input property that sets if the pager in the paginator should be enabled.
    * ```html
    * <igx-paginator [pagerEnabled]="true"></igx-paginator>
    * ```
    * @memberof IgxPaginatorComponent
    */
    pagerEnabled: boolean;
    /**
    * An @Input property that sets if the pager in the paginator should be hidden.
    * ```html
    * <igx-paginator [pagerHidden]="true"></igx-paginator>
    * ```
    * @memberof IgxPaginatorComponent
    */
    pagerHidden: boolean;
    /**
    * An @Input property that sets if the dropdown in the paginator should be enabled.
    * ```html
    * <igx-paginator [dropdownEnabled]="true"></igx-paginator>
    * ```
    * @memberof IgxPaginatorComponent
    */
    dropdownEnabled: boolean;
    /**
    * An @Input property that sets if the dropdown in the paginator should be hidden.
    * ```html
    * <igx-paginator [dropdownHidden]="true"></igx-paginator>
    * ```
    * @memberof IgxPaginatorComponent
    */
    dropdownHidden: boolean;
    /**
    * An @Input property, sets number of label of the select.
    * The default is 'Items per page' localized string.
    * ```html
    * <igx-paginator label="My custom label"></igx-paginator>
    * ```
    * @memberof IgxPaginatorComponent
    */
    selectLabel: any;
    /**
     *An event that is emitted when the select in the `IgxPaginatorComponent` changes its value.
    */
    perPageChange: EventEmitter<number>;
    /**
     *An event that is emitted when the paginating is used.
    */
    pageChange: EventEmitter<number>;
    constructor(_displayDensityOptions: IDisplayDensityOptions);
    /**
     * Returns if the current page is the last page.
     * ```typescript
     * const lastPage = this.paginator.isLastPage;
     * ```
     */
    readonly isLastPage: boolean;
    /**
     * Returns if the current page is the first page.
     * ```typescript
     * const lastPage = this.paginator.isFirstPage;
     * ```
     */
    readonly isFirstPage: boolean;
    private sortUniqueOptions;
    paginatorSelectDisplayDensity(): string;
    /**
     * Goes to the next page of the `IgxPaginatorComponent`, if the paginator is not already at the last page.
     * ```typescript
     * this.paginator.nextPage();
     * ```
     * @memberof IgxPaginatorComponent
     */
    nextPage(): void;
    /**
     * Goes to the previous page of the `IgxPaginatorComponent`, if the paginator is not already at the first page.
     * ```typescript
     * this.paginator.previousPage();
     * ```
     * @memberof IgxPaginatorComponent
     */
    previousPage(): void;
    /**
     * Goes to the desired page index.
     * ```typescript
     * this.pagiantor.paginate(1);
     * ```
     * @param val
     * @memberof IgxPaginatorComponent
     */
    paginate(val: number): void;
}
export declare class IgxPaginatorModule {
}