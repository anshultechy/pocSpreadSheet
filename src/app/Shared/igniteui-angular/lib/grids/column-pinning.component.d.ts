import { ChangeDetectorRef } from '@angular/core';
import { ColumnChooserBase } from './column-chooser-base';
import { ColumnChooserItemBase } from './column-chooser-item-base';
export declare class IgxColumnPinningItemDirective extends ColumnChooserItemBase {
    constructor();
    /**
     * Returns whether a column could be pinned.
     * It's not possible to pin a column if there is not enough space for the unpinned area.
     * ```typescript
     * const columnItem: IgxColumnPinningItemDirective;
     * this.columnItem.pinnable;
     * ```
     */
    readonly pinnable: boolean;
}
export declare class IgxColumnPinningComponent extends ColumnChooserBase {
    cdr: ChangeDetectorRef;
    constructor(cdr: ChangeDetectorRef);
    /**
     * @hidden
     */
    createColumnItem(container: any, column: any): IgxColumnPinningItemDirective;
    /**
     * @hidden
     */
    checkboxValueChange(event: any, columnItem: IgxColumnPinningItemDirective): boolean;
}
/**
 * @hidden
 */
export declare class IgxColumnPinningModule {
}