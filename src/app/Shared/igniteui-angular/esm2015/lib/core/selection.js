/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @hidden
 */
export class IgxSelectionAPIService {
    constructor() {
        /**
         * If primaryKey is defined, then multiple selection is based on the primaryKey, and it is array of numbers, strings, etc.
         * If the primaryKey is omitted, then selection is based on the item data
         */
        this.selection = new Map();
    }
    /**
     * Get current component selection.
     * @param {?} componentID ID of the component.
     * @return {?}
     */
    get(componentID) {
        return this.selection.get(componentID);
    }
    /**
     * Set new component selection.
     * @param {?} componentID ID of the component.
     * @param {?} newSelection The new component selection to be set.
     * @return {?}
     */
    set(componentID, newSelection) {
        if (!componentID) {
            throw Error('Invalid value for component id!');
        }
        this.selection.set(componentID, newSelection);
    }
    /**
     * Clears selection for component.
     * @param {?} componentID ID of the component.
     * @return {?}
     */
    clear(componentID) {
        this.selection.set(componentID, this.get_empty());
    }
    /**
     * Get current component selection length.
     * @param {?} componentID ID of the component.
     * @return {?}
     */
    size(componentID) {
        /** @type {?} */
        const sel = this.get(componentID);
        return sel ? sel.size : 0;
    }
    /**
     * Creates new selection that consist of the new item added to the current component selection.
     * The returned collection is new Set,
     * therefore if you want to update component selection you need to call in addition the set_selection() method
     * or instead use the select_item() one.
     * @param {?} componentID ID of the component, which we add new item to.
     * @param {?} itemID ID of the item to add to component selection.
     * @param {?=} sel Used internally only by the selection (add_items method) to accumulate selection for multiple items.
     *
     * @return {?} Selection after the new item is added.
     */
    add_item(componentID, itemID, sel) {
        if (!sel) {
            sel = new Set(this.get(componentID));
        }
        if (sel === undefined) {
            sel = this.get_empty();
        }
        if (!itemID && itemID !== 0) {
            throw Error('Invalid value for item id!');
        }
        sel.add(itemID);
        return sel;
    }
    /**
     * Creates new selection that consist of the new items added to the current component selection.
     * The returned collection is new Set,
     * therefore if you want to update component selection you need to call in addition the set_selection() method
     * or instead use the select_items() one.
     * @param {?} componentID ID of the component, which we add new items to.
     * @param {?} itemIDs Array of IDs of the items to add to component selection.
     * @param {?=} clearSelection If true it will clear previous selection.
     *
     * @return {?} Selection after the new items are added.
     */
    add_items(componentID, itemIDs, clearSelection) {
        /** @type {?} */
        let selection;
        if (clearSelection) {
            selection = this.get_empty();
        }
        else if (itemIDs && itemIDs.length === 0) {
            selection = new Set(this.get(componentID));
        }
        itemIDs.forEach((item) => selection = this.add_item(componentID, item, selection));
        return selection;
    }
    /**
     * Add item to the current component selection.
     * @param {?} componentID ID of the component, which we add new item to.
     * @param {?} itemID ID of the item to add to component selection.
     * @param {?=} sel Used internally only by the selection (select_items method) to accumulate selection for multiple items.
     * @return {?}
     */
    select_item(componentID, itemID, sel) {
        this.set(componentID, this.add_item(componentID, itemID, sel));
    }
    /**
     * Add items to the current component selection.
     * @param {?} componentID ID of the component, which we add new items to.
     * @param {?} itemID
     * @param {?=} clearSelection If true it will clear previous selection.
     * @return {?}
     */
    select_items(componentID, itemID, clearSelection) {
        this.set(componentID, this.add_items(componentID, itemID, clearSelection));
    }
    /**
     * Creates new selection that consist of the new items excluded from the current component selection.
     * The returned collection is new Set,
     * therefore if you want to update component selection you need to call in addition the set_selection() method
     * or instead use the deselect_item() one.
     * @param {?} componentID ID of the component, which we remove items from.
     * @param {?} itemID ID of the item to remove from component selection.
     * @param {?=} sel Used internally only by the selection (delete_items method) to accumulate deselected items.
     *
     * @return {?} Selection after the item is removed.
     */
    delete_item(componentID, itemID, sel) {
        if (!sel) {
            sel = new Set(this.get(componentID));
        }
        if (sel === undefined) {
            return;
        }
        sel.delete(itemID);
        return sel;
    }
    /**
     * Creates new selection that consist of the new items removed to the current component selection.
     * The returned collection is new Set,
     * therefore if you want to update component selection you need to call in addition the set_selection() method
     * or instead use the deselect_items() one.
     * @param {?} componentID ID of the component, which we remove items from.
     * @param {?} itemIDs
     * @return {?} Selection after the items are removed.
     */
    delete_items(componentID, itemIDs) {
        /** @type {?} */
        let selection;
        itemIDs.forEach((deselectedItem) => selection = this.delete_item(componentID, deselectedItem, selection));
        return selection;
    }
    /**
     * Remove item from the current component selection.
     * @param {?} componentID ID of the component, which we remove item from.
     * @param {?} itemID ID of the item to remove from component selection.
     * @param {?=} sel Used internally only by the selection (deselect_items method) to accumulate selection for multiple items.
     * @return {?}
     */
    deselect_item(componentID, itemID, sel) {
        this.set(componentID, this.delete_item(componentID, itemID, sel));
    }
    /**
     * Remove items to the current component selection.
     * @param {?} componentID ID of the component, which we add new items to.
     * @param {?} itemID
     * @param {?=} clearSelection
     * @return {?}
     */
    deselect_items(componentID, itemID, clearSelection) {
        this.set(componentID, this.delete_items(componentID, itemID));
    }
    /**
     * Check if the item is selected in the component selection.
     * @param {?} componentID ID of the component.
     * @param {?} itemID ID of the item to search.
     *
     * @return {?} If item is selected.
     */
    is_item_selected(componentID, itemID) {
        /** @type {?} */
        const sel = this.get(componentID);
        if (!sel) {
            return false;
        }
        return sel.has(itemID);
    }
    /**
     * Get first element in the selection.
     * This is correct when we have only one item in the collection (for single selection purposes)
     * and the method returns that item.
     * @param {?} componentID ID of the component.
     *
     * @return {?} First element in the set.
     */
    first_item(componentID) {
        /** @type {?} */
        const sel = this.get(componentID);
        if (sel && sel.size > 0) {
            return sel.values().next().value;
        }
    }
    /**
     * Returns whether all items are selected.
     * @param {?} componentID ID of the component.
     * @param {?} dataCount
     * @return {?} If all items are selected.
     */
    are_all_selected(componentID, dataCount) {
        return dataCount > 0 && dataCount === this.size(componentID);
    }
    /**
     * Returns whether any of the items is selected.
     * @param {?} componentID ID of the component.
     * @return {?} If there is any item selected.
     */
    are_none_selected(componentID) {
        return this.size(componentID) === 0;
    }
    /**
     * Get all primary key values from a data array. If there isn't a primary key defined that the entire data is returned instead.
     * @param {?} data Entire data array.
     * @param {?=} primaryKey Data primary key.
     *
     * @return {?} Array of identifiers, either primary key values or the entire data array.
     */
    get_all_ids(data, primaryKey) {
        return primaryKey ? data.map((x) => x[primaryKey]) : data;
    }
    /**
     * Returns empty selection collection.
     * @return {?} empty set.
     */
    get_empty() {
        return new Set();
    }
}
IgxSelectionAPIService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ IgxSelectionAPIService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function IgxSelectionAPIService_Factory() { return new IgxSelectionAPIService(); }, token: IgxSelectionAPIService, providedIn: "root" });
if (false) {
    /**
     * If primaryKey is defined, then multiple selection is based on the primaryKey, and it is array of numbers, strings, etc.
     * If the primaryKey is omitted, then selection is based on the item data
     * @type {?}
     * @protected
     */
    IgxSelectionAPIService.prototype.selection;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL3NlbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFNM0MsTUFBTSxPQUFPLHNCQUFzQjtJQUhuQzs7Ozs7UUFRYyxjQUFTLEdBQTJCLElBQUksR0FBRyxFQUFvQixDQUFDO0tBeU83RTs7Ozs7O0lBbk9VLEdBQUcsQ0FBQyxXQUFtQjtRQUMxQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7Ozs7SUFPTSxHQUFHLENBQUMsV0FBbUIsRUFBRSxZQUFzQjtRQUNsRCxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2QsTUFBTSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztTQUNsRDtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7SUFNTSxLQUFLLENBQUMsV0FBbUI7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7OztJQU1NLElBQUksQ0FBQyxXQUFtQjs7Y0FDckIsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQ2pDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7Ozs7Ozs7O0lBYU0sUUFBUSxDQUFDLFdBQW1CLEVBQUUsTUFBTSxFQUFFLEdBQWM7UUFDdkQsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNOLEdBQUcsR0FBRyxJQUFJLEdBQUcs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Q0FBMEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAaGlkZGVuICovXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBJZ3hTZWxlY3Rpb25BUElTZXJ2aWNlIHtcbiAgICAvKipcbiAgICAgKiBJZiBwcmltYXJ5S2V5IGlzIGRlZmluZWQsIHRoZW4gbXVsdGlwbGUgc2VsZWN0aW9uIGlzIGJhc2VkIG9uIHRoZSBwcmltYXJ5S2V5LCBhbmQgaXQgaXMgYXJyYXkgb2YgbnVtYmVycywgc3RyaW5ncywgZXRjLlxuICAgICAqIElmIHRoZSBwcmltYXJ5S2V5IGlzIG9taXR0ZWQsIHRoZW4gc2VsZWN0aW9uIGlzIGJhc2VkIG9uIHRoZSBpdGVtIGRhdGFcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2VsZWN0aW9uOiBNYXA8c3RyaW5nLCAgU2V0PGFueT4+ID0gbmV3IE1hcDxzdHJpbmcsIFNldDxhbnk+PigpO1xuXG4gICAgLyoqXG4gICAgICogR2V0IGN1cnJlbnQgY29tcG9uZW50IHNlbGVjdGlvbi5cbiAgICAgKiBAcGFyYW0gY29tcG9uZW50SUQgSUQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0KGNvbXBvbmVudElEOiBzdHJpbmcpOiBTZXQ8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbi5nZXQoY29tcG9uZW50SUQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBuZXcgY29tcG9uZW50IHNlbGVjdGlvbi5cbiAgICAgKiBAcGFyYW0gY29tcG9uZW50SUQgSUQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBAcGFyYW0gbmV3U2VsZWN0aW9uIFRoZSBuZXcgY29tcG9uZW50IHNlbGVjdGlvbiB0byBiZSBzZXQuXG4gICAgICovXG4gICAgcHVibGljIHNldChjb21wb25lbnRJRDogc3RyaW5nLCBuZXdTZWxlY3Rpb246IFNldDxhbnk+KSB7XG4gICAgICAgIGlmICghY29tcG9uZW50SUQpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdJbnZhbGlkIHZhbHVlIGZvciBjb21wb25lbnQgaWQhJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3Rpb24uc2V0KGNvbXBvbmVudElELCBuZXdTZWxlY3Rpb24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyBzZWxlY3Rpb24gZm9yIGNvbXBvbmVudC5cbiAgICAgKiBAcGFyYW0gY29tcG9uZW50SUQgSUQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2xlYXIoY29tcG9uZW50SUQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5zZXQoY29tcG9uZW50SUQsIHRoaXMuZ2V0X2VtcHR5KCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBjdXJyZW50IGNvbXBvbmVudCBzZWxlY3Rpb24gbGVuZ3RoLlxuICAgICAqIEBwYXJhbSBjb21wb25lbnRJRCBJRCBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqL1xuICAgIHB1YmxpYyBzaXplKGNvbXBvbmVudElEOiBzdHJpbmcpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBzZWwgPSB0aGlzLmdldChjb21wb25lbnRJRCk7XG4gICAgICAgIHJldHVybiBzZWwgPyBzZWwuc2l6ZSA6IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBuZXcgc2VsZWN0aW9uIHRoYXQgY29uc2lzdCBvZiB0aGUgbmV3IGl0ZW0gYWRkZWQgdG8gdGhlIGN1cnJlbnQgY29tcG9uZW50IHNlbGVjdGlvbi5cbiAgICAgKiBUaGUgcmV0dXJuZWQgY29sbGVjdGlvbiBpcyBuZXcgU2V0LFxuICAgICAqIHRoZXJlZm9yZSBpZiB5b3Ugd2FudCB0byB1cGRhdGUgY29tcG9uZW50IHNlbGVjdGlvbiB5b3UgbmVlZCB0byBjYWxsIGluIGFkZGl0aW9uIHRoZSBzZXRfc2VsZWN0aW9uKCkgbWV0aG9kXG4gICAgICogb3IgaW5zdGVhZCB1c2UgdGhlIHNlbGVjdF9pdGVtKCkgb25lLlxuICAgICAqIEBwYXJhbSBjb21wb25lbnRJRCBJRCBvZiB0aGUgY29tcG9uZW50LCB3aGljaCB3ZSBhZGQgbmV3IGl0ZW0gdG8uXG4gICAgICogQHBhcmFtIGl0ZW1JRCBJRCBvZiB0aGUgaXRlbSB0byBhZGQgdG8gY29tcG9uZW50IHNlbGVjdGlvbi5cbiAgICAgKiBAcGFyYW0gc2VsIFVzZWQgaW50ZXJuYWxseSBvbmx5IGJ5IHRoZSBzZWxlY3Rpb24gKGFkZF9pdGVtcyBtZXRob2QpIHRvIGFjY3VtdWxhdGUgc2VsZWN0aW9uIGZvciBtdWx0aXBsZSBpdGVtcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFNlbGVjdGlvbiBhZnRlciB0aGUgbmV3IGl0ZW0gaXMgYWRkZWQuXG4gICAgICovXG4gICAgcHVibGljIGFkZF9pdGVtKGNvbXBvbmVudElEOiBzdHJpbmcsIGl0ZW1JRCwgc2VsPzogU2V0PGFueT4pOiBTZXQ8YW55PiB7XG4gICAgICAgIGlmICghc2VsKSB7XG4gICAgICAgICAgICBzZWwgPSBuZXcgU2V0KHRoaXMuZ2V0KGNvbXBvbmVudElEKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzZWwgPSB0aGlzLmdldF9lbXB0eSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXRlbUlEICYmIGl0ZW1JRCAhPT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgdmFsdWUgZm9yIGl0ZW0gaWQhJyk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsLmFkZChpdGVtSUQpO1xuICAgICAgICByZXR1cm4gc2VsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgbmV3IHNlbGVjdGlvbiB0aGF0IGNvbnNpc3Qgb2YgdGhlIG5ldyBpdGVtcyBhZGRlZCB0byB0aGUgY3VycmVudCBjb21wb25lbnQgc2VsZWN0aW9uLlxuICAgICAqIFRoZSByZXR1cm5lZCBjb2xsZWN0aW9uIGlzIG5ldyBTZXQsXG4gICAgICogdGhlcmVmb3JlIGlmIHlvdSB3YW50IHRvIHVwZGF0ZSBjb21wb25lbnQgc2VsZWN0aW9uIHlvdSBuZWVkIHRvIGNhbGwgaW4gYWRkaXRpb24gdGhlIHNldF9zZWxlY3Rpb24oKSBtZXRob2RcbiAgICAgKiBvciBpbnN0ZWFkIHVzZSB0aGUgc2VsZWN0X2l0ZW1zKCkgb25lLlxuICAgICAqIEBwYXJhbSBjb21wb25lbnRJRCBJRCBvZiB0aGUgY29tcG9uZW50LCB3aGljaCB3ZSBhZGQgbmV3IGl0ZW1zIHRvLlxuICAgICAqIEBwYXJhbSBpdGVtSURzIEFycmF5IG9mIElEcyBvZiB0aGUgaXRlbXMgdG8gYWRkIHRvIGNvbXBvbmVudCBzZWxlY3Rpb24uXG4gICAgICogQHBhcmFtIGNsZWFyU2VsZWN0aW9uIElmIHRydWUgaXQgd2lsbCBjbGVhciBwcmV2aW91cyBzZWxlY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBTZWxlY3Rpb24gYWZ0ZXIgdGhlIG5ldyBpdGVtcyBhcmUgYWRkZWQuXG4gICAgICovXG4gICAgcHVibGljIGFkZF9pdGVtcyhjb21wb25lbnRJRDogc3RyaW5nLCBpdGVtSURzOiBhbnlbXSwgY2xlYXJTZWxlY3Rpb24/OiBib29sZWFuKTogU2V0PGFueT4ge1xuICAgICAgICBsZXQgc2VsZWN0aW9uOiBTZXQ8YW55PjtcbiAgICAgICAgaWYgKGNsZWFyU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLmdldF9lbXB0eSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW1JRHMgJiYgaXRlbUlEcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbiA9IG5ldyBTZXQodGhpcy5nZXQoY29tcG9uZW50SUQpKTtcbiAgICAgICAgfVxuICAgICAgICBpdGVtSURzLmZvckVhY2goKGl0ZW0pID0+IHNlbGVjdGlvbiA9IHRoaXMuYWRkX2l0ZW0oY29tcG9uZW50SUQsIGl0ZW0sIHNlbGVjdGlvbikpO1xuICAgICAgICByZXR1cm4gc2VsZWN0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBpdGVtIHRvIHRoZSBjdXJyZW50IGNvbXBvbmVudCBzZWxlY3Rpb24uXG4gICAgICogQHBhcmFtIGNvbXBvbmVudElEIElEIG9mIHRoZSBjb21wb25lbnQsIHdoaWNoIHdlIGFkZCBuZXcgaXRlbSB0by5cbiAgICAgKiBAcGFyYW0gaXRlbUlEIElEIG9mIHRoZSBpdGVtIHRvIGFkZCB0byBjb21wb25lbnQgc2VsZWN0aW9uLlxuICAgICAqIEBwYXJhbSBzZWwgVXNlZCBpbnRlcm5hbGx5IG9ubHkgYnkgdGhlIHNlbGVjdGlvbiAoc2VsZWN0X2l0ZW1zIG1ldGhvZCkgdG8gYWNjdW11bGF0ZSBzZWxlY3Rpb24gZm9yIG11bHRpcGxlIGl0ZW1zLlxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3RfaXRlbShjb21wb25lbnRJRDogc3RyaW5nLCBpdGVtSUQsIHNlbD86IFNldDxhbnk+KSB7XG4gICAgICAgIHRoaXMuc2V0KGNvbXBvbmVudElELCB0aGlzLmFkZF9pdGVtKGNvbXBvbmVudElELCBpdGVtSUQsIHNlbCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBpdGVtcyB0byB0aGUgY3VycmVudCBjb21wb25lbnQgc2VsZWN0aW9uLlxuICAgICAqIEBwYXJhbSBjb21wb25lbnRJRCBJRCBvZiB0aGUgY29tcG9uZW50LCB3aGljaCB3ZSBhZGQgbmV3IGl0ZW1zIHRvLlxuICAgICAqIEBwYXJhbSBpdGVtSURzIEFycmF5IG9mIElEcyBvZiB0aGUgaXRlbXMgdG8gYWRkIHRvIGNvbXBvbmVudCBzZWxlY3Rpb24uXG4gICAgICogQHBhcmFtIGNsZWFyU2VsZWN0aW9uIElmIHRydWUgaXQgd2lsbCBjbGVhciBwcmV2aW91cyBzZWxlY3Rpb24uXG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdF9pdGVtcyhjb21wb25lbnRJRDogc3RyaW5nLCBpdGVtSUQ6IGFueVtdLCBjbGVhclNlbGVjdGlvbj86IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5zZXQoY29tcG9uZW50SUQsIHRoaXMuYWRkX2l0ZW1zKGNvbXBvbmVudElELCBpdGVtSUQsIGNsZWFyU2VsZWN0aW9uKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBuZXcgc2VsZWN0aW9uIHRoYXQgY29uc2lzdCBvZiB0aGUgbmV3IGl0ZW1zIGV4Y2x1ZGVkIGZyb20gdGhlIGN1cnJlbnQgY29tcG9uZW50IHNlbGVjdGlvbi5cbiAgICAgKiBUaGUgcmV0dXJuZWQgY29sbGVjdGlvbiBpcyBuZXcgU2V0LFxuICAgICAqIHRoZXJlZm9yZSBpZiB5b3Ugd2FudCB0byB1cGRhdGUgY29tcG9uZW50IHNlbGVjdGlvbiB5b3UgbmVlZCB0byBjYWxsIGluIGFkZGl0aW9uIHRoZSBzZXRfc2VsZWN0aW9uKCkgbWV0aG9kXG4gICAgICogb3IgaW5zdGVhZCB1c2UgdGhlIGRlc2VsZWN0X2l0ZW0oKSBvbmUuXG4gICAgICogQHBhcmFtIGNvbXBvbmVudElEIElEIG9mIHRoZSBjb21wb25lbnQsIHdoaWNoIHdlIHJlbW92ZSBpdGVtcyBmcm9tLlxuICAgICAqIEBwYXJhbSBpdGVtSUQgSUQgb2YgdGhlIGl0ZW0gdG8gcmVtb3ZlIGZyb20gY29tcG9uZW50IHNlbGVjdGlvbi5cbiAgICAgKiBAcGFyYW0gc2VsIFVzZWQgaW50ZXJuYWxseSBvbmx5IGJ5IHRoZSBzZWxlY3Rpb24gKGRlbGV0ZV9pdGVtcyBtZXRob2QpIHRvIGFjY3VtdWxhdGUgZGVzZWxlY3RlZCBpdGVtcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFNlbGVjdGlvbiBhZnRlciB0aGUgaXRlbSBpcyByZW1vdmVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZWxldGVfaXRlbShjb21wb25lbnRJRDogc3RyaW5nLCBpdGVtSUQsIHNlbD86IFNldDxhbnk+KSB7XG4gICAgICAgIGlmICghc2VsKSB7XG4gICAgICAgICAgICBzZWwgPSBuZXcgU2V0KHRoaXMuZ2V0KGNvbXBvbmVudElEKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2VsLmRlbGV0ZShpdGVtSUQpO1xuICAgICAgICByZXR1cm4gc2VsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgbmV3IHNlbGVjdGlvbiB0aGF0IGNvbnNpc3Qgb2YgdGhlIG5ldyBpdGVtcyByZW1vdmVkIHRvIHRoZSBjdXJyZW50IGNvbXBvbmVudCBzZWxlY3Rpb24uXG4gICAgICogVGhlIHJldHVybmVkIGNvbGxlY3Rpb24gaXMgbmV3IFNldCxcbiAgICAgKiB0aGVyZWZvcmUgaWYgeW91IHdhbnQgdG8gdXBkYXRlIGNvbXBvbmVudCBzZWxlY3Rpb24geW91IG5lZWQgdG8gY2FsbCBpbiBhZGRpdGlvbiB0aGUgc2V0X3NlbGVjdGlvbigpIG1ldGhvZFxuICAgICAqIG9yIGluc3RlYWQgdXNlIHRoZSBkZXNlbGVjdF9pdGVtcygpIG9uZS5cbiAgICAgKiBAcGFyYW0gY29tcG9uZW50SUQgSUQgb2YgdGhlIGNvbXBvbmVudCwgd2hpY2ggd2UgcmVtb3ZlIGl0ZW1zIGZyb20uXG4gICAgICogQHBhcmFtIGl0ZW1JRCBJRCBvZiB0aGUgaXRlbXMgdG8gcmVtb3ZlIGZyb20gY29tcG9uZW50IHNlbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFNlbGVjdGlvbiBhZnRlciB0aGUgaXRlbXMgYXJlIHJlbW92ZWQuXG4gICAgICovXG4gICAgcHVibGljIGRlbGV0ZV9pdGVtcyhjb21wb25lbnRJRDogc3RyaW5nLCBpdGVtSURzOiBhbnlbXSk6IFNldDxhbnk+IHtcbiAgICAgICAgbGV0IHNlbGVjdGlvbjogU2V0PGFueT47XG4gICAgICAgIGl0ZW1JRHMuZm9yRWFjaCgoZGVzZWxlY3RlZEl0ZW0pID0+IHNlbGVjdGlvbiA9IHRoaXMuZGVsZXRlX2l0ZW0oY29tcG9uZW50SUQsIGRlc2VsZWN0ZWRJdGVtLCBzZWxlY3Rpb24pKTtcbiAgICAgICAgcmV0dXJuIHNlbGVjdGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgaXRlbSBmcm9tIHRoZSBjdXJyZW50IGNvbXBvbmVudCBzZWxlY3Rpb24uXG4gICAgICogQHBhcmFtIGNvbXBvbmVudElEIElEIG9mIHRoZSBjb21wb25lbnQsIHdoaWNoIHdlIHJlbW92ZSBpdGVtIGZyb20uXG4gICAgICogQHBhcmFtIGl0ZW1JRCBJRCBvZiB0aGUgaXRlbSB0byByZW1vdmUgZnJvbSBjb21wb25lbnQgc2VsZWN0aW9uLlxuICAgICAqIEBwYXJhbSBzZWwgVXNlZCBpbnRlcm5hbGx5IG9ubHkgYnkgdGhlIHNlbGVjdGlvbiAoZGVzZWxlY3RfaXRlbXMgbWV0aG9kKSB0byBhY2N1bXVsYXRlIHNlbGVjdGlvbiBmb3IgbXVsdGlwbGUgaXRlbXMuXG4gICAgICovXG4gICAgcHVibGljIGRlc2VsZWN0X2l0ZW0oY29tcG9uZW50SUQ6IHN0cmluZywgaXRlbUlELCBzZWw/OiBTZXQ8YW55Pikge1xuICAgICAgICB0aGlzLnNldChjb21wb25lbnRJRCwgdGhpcy5kZWxldGVfaXRlbShjb21wb25lbnRJRCwgaXRlbUlELCBzZWwpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgaXRlbXMgdG8gdGhlIGN1cnJlbnQgY29tcG9uZW50IHNlbGVjdGlvbi5cbiAgICAgKiBAcGFyYW0gY29tcG9uZW50SUQgSUQgb2YgdGhlIGNvbXBvbmVudCwgd2hpY2ggd2UgYWRkIG5ldyBpdGVtcyB0by5cbiAgICAgKiBAcGFyYW0gaXRlbUlEcyBBcnJheSBvZiBJRHMgb2YgdGhlIGl0ZW1zIHRvIGFkZCB0byBjb21wb25lbnQgc2VsZWN0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNlbGVjdF9pdGVtcyhjb21wb25lbnRJRDogc3RyaW5nLCBpdGVtSUQ6IGFueVtdLCBjbGVhclNlbGVjdGlvbj86IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5zZXQoY29tcG9uZW50SUQsIHRoaXMuZGVsZXRlX2l0ZW1zKGNvbXBvbmVudElELCBpdGVtSUQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgaXRlbSBpcyBzZWxlY3RlZCBpbiB0aGUgY29tcG9uZW50IHNlbGVjdGlvbi5cbiAgICAgKiBAcGFyYW0gY29tcG9uZW50SUQgSUQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBAcGFyYW0gaXRlbUlEIElEIG9mIHRoZSBpdGVtIHRvIHNlYXJjaC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIElmIGl0ZW0gaXMgc2VsZWN0ZWQuXG4gICAgICovXG4gICAgcHVibGljIGlzX2l0ZW1fc2VsZWN0ZWQoY29tcG9uZW50SUQ6IHN0cmluZywgaXRlbUlEKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHNlbCA9IHRoaXMuZ2V0KGNvbXBvbmVudElEKTtcbiAgICAgICAgaWYgKCFzZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsLmhhcyhpdGVtSUQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBmaXJzdCBlbGVtZW50IGluIHRoZSBzZWxlY3Rpb24uXG4gICAgICogVGhpcyBpcyBjb3JyZWN0IHdoZW4gd2UgaGF2ZSBvbmx5IG9uZSBpdGVtIGluIHRoZSBjb2xsZWN0aW9uIChmb3Igc2luZ2xlIHNlbGVjdGlvbiBwdXJwb3NlcylcbiAgICAgKiBhbmQgdGhlIG1ldGhvZCByZXR1cm5zIHRoYXQgaXRlbS5cbiAgICAgKiBAcGFyYW0gY29tcG9uZW50SUQgSUQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIEZpcnN0IGVsZW1lbnQgaW4gdGhlIHNldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZmlyc3RfaXRlbShjb21wb25lbnRJRDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHNlbCA9IHRoaXMuZ2V0KGNvbXBvbmVudElEKTtcbiAgICAgICAgaWYgKHNlbCAmJiBzZWwuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBzZWwudmFsdWVzKCkubmV4dCgpLnZhbHVlO1xuICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgYWxsIGl0ZW1zIGFyZSBzZWxlY3RlZC5cbiAgICAgKiBAcGFyYW0gY29tcG9uZW50SUQgSUQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBAcGFyYW0gZGF0YUNvdW50OiBudW1iZXIgTnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBkYXRhLlxuICAgICAqXG4gICAgICogQHJldHVybnMgSWYgYWxsIGl0ZW1zIGFyZSBzZWxlY3RlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXJlX2FsbF9zZWxlY3RlZChjb21wb25lbnRJRDogc3RyaW5nLCBkYXRhQ291bnQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZGF0YUNvdW50ID4gMCAmJiBkYXRhQ291bnQgPT09IHRoaXMuc2l6ZShjb21wb25lbnRJRCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIGFueSBvZiB0aGUgaXRlbXMgaXMgc2VsZWN0ZWQuXG4gICAgICogQHBhcmFtIGNvbXBvbmVudElEIElEIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICogQHBhcmFtIGRhdGEgRW50aXJlIGRhdGEgYXJyYXkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBJZiB0aGVyZSBpcyBhbnkgaXRlbSBzZWxlY3RlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXJlX25vbmVfc2VsZWN0ZWQoY29tcG9uZW50SUQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zaXplKGNvbXBvbmVudElEKSA9PT0gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIHByaW1hcnkga2V5IHZhbHVlcyBmcm9tIGEgZGF0YSBhcnJheS4gSWYgdGhlcmUgaXNuJ3QgYSBwcmltYXJ5IGtleSBkZWZpbmVkIHRoYXQgdGhlIGVudGlyZSBkYXRhIGlzIHJldHVybmVkIGluc3RlYWQuXG4gICAgICogQHBhcmFtIGRhdGEgRW50aXJlIGRhdGEgYXJyYXkuXG4gICAgICogQHBhcmFtIHByaW1hcnlLZXkgRGF0YSBwcmltYXJ5IGtleS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIEFycmF5IG9mIGlkZW50aWZpZXJzLCBlaXRoZXIgcHJpbWFyeSBrZXkgdmFsdWVzIG9yIHRoZSBlbnRpcmUgZGF0YSBhcnJheS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0X2FsbF9pZHMoZGF0YSwgcHJpbWFyeUtleT8pIHtcbiAgICAgICAgcmV0dXJuIHByaW1hcnlLZXkgPyBkYXRhLm1hcCgoeCkgPT4geFtwcmltYXJ5S2V5XSkgOiBkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgZW1wdHkgc2VsZWN0aW9uIGNvbGxlY3Rpb24uXG4gICAgICogQHJldHVybnMgZW1wdHkgc2V0LlxuICAgICovXG4gICAgcHVibGljIGdldF9lbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZXQoKTtcbiAgICB9XG59XG4iXX0=