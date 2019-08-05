/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GridBaseAPIService } from '../api.service';
import { DataUtil } from '../../data-operations/data-util';
import { cloneArray } from '../../core/utils';
export class IgxGridAPIService extends GridBaseAPIService {
    /**
     * @param {?} expression
     * @return {?}
     */
    groupBy(expression) {
        /** @type {?} */
        const groupingState = cloneArray(this.grid.groupingExpressions);
        /** @type {?} */
        const sortingState = cloneArray(this.grid.sortingExpressions);
        this.prepare_sorting_expression([sortingState, groupingState], expression);
        this.grid.groupingExpressions = groupingState;
        this.arrange_sorting_expressions();
    }
    /**
     * @param {?} expressions
     * @return {?}
     */
    groupBy_multiple(expressions) {
        /** @type {?} */
        const groupingState = cloneArray(this.grid.groupingExpressions);
        /** @type {?} */
        const sortingState = cloneArray(this.grid.sortingExpressions);
        for (const each of expressions) {
            this.prepare_sorting_expression([sortingState, groupingState], each);
        }
        this.grid.groupingExpressions = groupingState;
        this.arrange_sorting_expressions();
    }
    /**
     * @param {?=} name
     * @return {?}
     */
    clear_groupby(name) {
        /** @type {?} */
        const groupingState = cloneArray(this.grid.groupingExpressions);
        /** @type {?} */
        const sortingState = cloneArray(this.grid.sortingExpressions);
        if (name) {
            /** @type {?} */
            const names = typeof name === 'string' ? [name] : name;
            /** @type {?} */
            const groupedCols = groupingState.filter((state) => names.indexOf(state.fieldName) < 0);
            /** @type {?} */
            const newSortingExpr = sortingState.filter((state) => names.indexOf(state.fieldName) < 0);
            this.grid.groupingExpressions = groupedCols;
            this.grid.sortingExpressions = newSortingExpr;
            names.forEach((colName) => {
                /** @type {?} */
                const grExprIndex = groupingState.findIndex((exp) => exp.fieldName === colName);
                /** @type {?} */
                const grpExpandState = this.grid.groupingExpansionState;
                /* remove expansion states related to the cleared group
                and all with deeper hierarchy than the cleared group */
                this.grid.groupingExpansionState = grpExpandState
                    .filter((val) => {
                    return val.hierarchy && val.hierarchy.length <= grExprIndex;
                });
            });
        }
        else {
            // clear all
            this.grid.groupingExpressions = [];
            this.grid.groupingExpansionState = [];
            for (const grExpr of groupingState) {
                /** @type {?} */
                const sortExprIndex = sortingState.findIndex((exp) => exp.fieldName === grExpr.fieldName);
                if (sortExprIndex > -1) {
                    sortingState.splice(sortExprIndex, 1);
                }
            }
            this.grid.sortingExpressions = sortingState;
        }
    }
    /**
     * @param {?} groupRow
     * @return {?}
     */
    groupBy_get_expanded_for_group(groupRow) {
        /** @type {?} */
        const grState = this.grid.groupingExpansionState;
        /** @type {?} */
        const hierarchy = DataUtil.getHierarchy(groupRow);
        return grState.find((state) => DataUtil.isHierarchyMatch(state.hierarchy || [{ fieldName: groupRow.expression.fieldName, value: groupRow.value }], hierarchy));
    }
    /**
     * @param {?} groupRow
     * @param {?} rowID
     * @return {?}
     */
    groupBy_is_row_in_group(groupRow, rowID) {
        /** @type {?} */
        const grid = this.grid;
        /** @type {?} */
        let rowInGroup = false;
        groupRow.records.forEach(row => {
            if (grid.primaryKey ? row[grid.primaryKey] === rowID : row === rowID) {
                rowInGroup = true;
            }
        });
        return rowInGroup;
    }
    /**
     * @param {?} groupRow
     * @return {?}
     */
    groupBy_toggle_group(groupRow) {
        /** @type {?} */
        const grid = this.grid;
        /** @type {?} */
        const expansionState = grid.groupingExpansionState;
        /** @type {?} */
        let toggleRowEditingOverlay;
        /** @type {?} */
        let isEditRowInGroup = false;
        if (grid.rowEditable) {
            /** @type {?} */
            const rowState = this.grid.crudService.row;
            // Toggle only row editing overlays that are inside current expanded/collapsed group.
            isEditRowInGroup = rowState ? this.groupBy_is_row_in_group(groupRow, rowState.id) : false;
        }
        /** @type {?} */
        const state = this.groupBy_get_expanded_for_group(groupRow);
        if (state) {
            state.expanded = !state.expanded;
            if (isEditRowInGroup) {
                toggleRowEditingOverlay = state.expanded;
            }
        }
        else {
            expansionState.push({
                expanded: !grid.groupsExpanded,
                hierarchy: DataUtil.getHierarchy(groupRow)
            });
            if (isEditRowInGroup) {
                toggleRowEditingOverlay = false;
            }
        }
        this.grid.groupingExpansionState = expansionState;
        if (grid.rowEditable) {
            grid.repositionRowEditingOverlay(grid.rowInEditMode);
        }
    }
    /**
     * @param {?} groupRow
     * @return {?}
     */
    groupBy_fully_expand_group(groupRow) {
        /** @type {?} */
        const state = this.groupBy_get_expanded_for_group(groupRow);
        /** @type {?} */
        const expanded = state ? state.expanded : this.grid.groupsExpanded;
        if (!expanded) {
            this.groupBy_toggle_group(groupRow);
        }
        if (groupRow.groupParent) {
            this.groupBy_fully_expand_group(groupRow.groupParent);
        }
    }
    /**
     * @protected
     * @param {?} fieldName
     * @return {?}
     */
    remove_grouping_expression(fieldName) {
        /** @type {?} */
        const groupingExpressions = this.grid.groupingExpressions;
        /** @type {?} */
        const index = groupingExpressions.findIndex((expr) => expr.fieldName === fieldName);
        if (index !== -1) {
            groupingExpressions.splice(index, 1);
        }
    }
    /**
     * @return {?}
     */
    arrange_sorting_expressions() {
        /** @type {?} */
        const groupingState = this.grid.groupingExpressions;
        this.grid.sortingExpressions.sort((a, b) => {
            /** @type {?} */
            const groupExprA = groupingState.find((expr) => expr.fieldName === a.fieldName);
            /** @type {?} */
            const groupExprB = groupingState.find((expr) => expr.fieldName === b.fieldName);
            if (groupExprA && groupExprB) {
                return groupingState.indexOf(groupExprA) > groupingState.indexOf(groupExprB) ? 1 : -1;
            }
            else if (groupExprA) {
                return -1;
            }
            else if (groupExprB) {
                return 1;
            }
            else {
                return 0;
            }
        });
    }
    /**
     * @param {?} gRow
     * @return {?}
     */
    get_groupBy_record_id(gRow) {
        /** @type {?} */
        let recordId = '{ ';
        /** @type {?} */
        const hierrarchy = DataUtil.getHierarchy(gRow);
        for (let i = 0; i < hierrarchy.length; i++) {
            /** @type {?} */
            const groupByKey = hierrarchy[i];
            recordId += `'${groupByKey.fieldName}': '${groupByKey.value}'`;
            if (i < hierrarchy.length - 1) {
                recordId += ', ';
            }
        }
        recordId += ' }';
        return recordId;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1hcGkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvZ3JpZC9ncmlkLWFwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUlwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRzlDLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxrQkFBb0M7Ozs7O0lBRWhFLE9BQU8sQ0FBQyxVQUErQjs7Y0FDcEMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDOztjQUN6RCxZQUFZLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDN0QsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsYUFBYSxDQUFDO1FBQzlDLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRU0sZ0JBQWdCLENBQUMsV0FBa0M7O2NBQ2hELGFBQWEsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQzs7Y0FDekQsWUFBWSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBRTdELEtBQUssTUFBTSxJQUFJLElBQUksV0FBVyxFQUFFO1lBQzVCLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN4RTtRQUVELElBQUks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QyxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNoQyxRQUFRLElBQUksSUFBSSxVQUFVLENBQUMsU0FBUyxPQUFPLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQztZQUUvRCxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDM0IsUUFBUSxJQUFJLElBQUksQ0FBQzthQUNwQjtTQUNKO1FBQ0QsUUFBUSxJQUFJLElBQUksQ0FBQztRQUVqQixPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmlkQmFzZUFQSVNlcnZpY2UgfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBJZ3hHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi9ncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJR3JvdXBCeVJlY29yZCB9IGZyb20gJy4uLy4uL2RhdGEtb3BlcmF0aW9ucy9ncm91cGJ5LXJlY29yZC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSUdyb3VwQnlFeHBhbmRTdGF0ZSB9IGZyb20gJy4uLy4uL2RhdGEtb3BlcmF0aW9ucy9ncm91cGJ5LWV4cGFuZC1zdGF0ZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGF0YVV0aWwgfSBmcm9tICcuLi8uLi9kYXRhLW9wZXJhdGlvbnMvZGF0YS11dGlsJztcbmltcG9ydCB7IGNsb25lQXJyYXkgfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IElHcm91cGluZ0V4cHJlc3Npb24gfSBmcm9tICcuLi8uLi9kYXRhLW9wZXJhdGlvbnMvZ3JvdXBpbmctZXhwcmVzc2lvbi5pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgSWd4R3JpZEFQSVNlcnZpY2UgZXh0ZW5kcyBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4R3JpZENvbXBvbmVudD4ge1xuXG4gICAgcHVibGljIGdyb3VwQnkoZXhwcmVzc2lvbjogSUdyb3VwaW5nRXhwcmVzc2lvbik6IHZvaWQge1xuICAgICAgICBjb25zdCBncm91cGluZ1N0YXRlID0gY2xvbmVBcnJheSh0aGlzLmdyaWQuZ3JvdXBpbmdFeHByZXNzaW9ucyk7XG4gICAgICAgIGNvbnN0IHNvcnRpbmdTdGF0ZSA9IGNsb25lQXJyYXkodGhpcy5ncmlkLnNvcnRpbmdFeHByZXNzaW9ucyk7XG4gICAgICAgIHRoaXMucHJlcGFyZV9zb3J0aW5nX2V4cHJlc3Npb24oW3NvcnRpbmdTdGF0ZSwgZ3JvdXBpbmdTdGF0ZV0sIGV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLmdyaWQuZ3JvdXBpbmdFeHByZXNzaW9ucyA9IGdyb3VwaW5nU3RhdGU7XG4gICAgICAgIHRoaXMuYXJyYW5nZV9zb3J0aW5nX2V4cHJlc3Npb25zKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdyb3VwQnlfbXVsdGlwbGUoZXhwcmVzc2lvbnM6IElHcm91cGluZ0V4cHJlc3Npb25bXSk6IHZvaWQge1xuICAgICAgICBjb25zdCBncm91cGluZ1N0YXRlID0gY2xvbmVBcnJheSh0aGlzLmdyaWQuZ3JvdXBpbmdFeHByZXNzaW9ucyk7XG4gICAgICAgIGNvbnN0IHNvcnRpbmdTdGF0ZSA9IGNsb25lQXJyYXkodGhpcy5ncmlkLnNvcnRpbmdFeHByZXNzaW9ucyk7XG5cbiAgICAgICAgZm9yIChjb25zdCBlYWNoIG9mIGV4cHJlc3Npb25zKSB7XG4gICAgICAgICAgICB0aGlzLnByZXBhcmVfc29ydGluZ19leHByZXNzaW9uKFtzb3J0aW5nU3RhdGUsIGdyb3VwaW5nU3RhdGVdLCBlYWNoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ3JpZC5ncm91cGluZ0V4cHJlc3Npb25zID0gZ3JvdXBpbmdTdGF0ZTtcbiAgICAgICAgdGhpcy5hcnJhbmdlX3NvcnRpbmdfZXhwcmVzc2lvbnMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJfZ3JvdXBieShuYW1lPzogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPikge1xuICAgICAgICBjb25zdCBncm91cGluZ1N0YXRlID0gY2xvbmVBcnJheSh0aGlzLmdyaWQuZ3JvdXBpbmdFeHByZXNzaW9ucyk7XG4gICAgICAgIGNvbnN0IHNvcnRpbmdTdGF0ZSA9IGNsb25lQXJyYXkodGhpcy5ncmlkLnNvcnRpbmdFeHByZXNzaW9ucyk7XG5cbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWVzID0gdHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnID8gWyBuYW1lIF0gOiBuYW1lO1xuICAgICAgICAgICAgY29uc3QgZ3JvdXBlZENvbHMgPSBncm91cGluZ1N0YXRlLmZpbHRlcigoc3RhdGUpID0+IG5hbWVzLmluZGV4T2Yoc3RhdGUuZmllbGROYW1lKSA8IDApO1xuICAgICAgICAgICAgY29uc3QgbmV3U29ydGluZ0V4cHIgPSBzb3J0aW5nU3RhdGUuZmlsdGVyKChzdGF0ZSkgPT4gbmFtZXMuaW5kZXhPZihzdGF0ZS5maWVsZE5hbWUpIDwgMCk7XG4gICAgICAgICAgICB0aGlzLmdyaWQuZ3JvdXBpbmdFeHByZXNzaW9ucyA9IGdyb3VwZWRDb2xzO1xuICAgICAgICAgICAgdGhpcy5ncmlkLnNvcnRpbmdFeHByZXNzaW9ucyA9IG5ld1NvcnRpbmdFeHByO1xuICAgICAgICAgICAgbmFtZXMuZm9yRWFjaCgoY29sTmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyRXhwckluZGV4ID0gZ3JvdXBpbmdTdGF0ZS5maW5kSW5kZXgoKGV4cCkgPT4gZXhwLmZpZWxkTmFtZSA9PT0gY29sTmFtZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JwRXhwYW5kU3RhdGUgPSB0aGlzLmdyaWQuZ3JvdXBpbmdFeHBhbnNpb25TdGF0ZTtcbiAgICAgICAgICAgICAgICAvKiByZW1vdmUgZXhwYW5zaW9uIHN0YXRlcyByZWxhdGVkIHRvIHRoZSBjbGVhcmVkIGdyb3VwXG4gICAgICAgICAgICAgICAgYW5kIGFsbCB3aXRoIGRlZXBlciBoaWVyYXJjaHkgdGhhbiB0aGUgY2xlYXJlZCBncm91cCAqL1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5ncm91cGluZ0V4cGFuc2lvblN0YXRlID0gZ3JwRXhwYW5kU3RhdGVcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmhpZXJhcmNoeSAmJiB2YWwuaGllcmFyY2h5Lmxlbmd0aCA8PSBnckV4cHJJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNsZWFyIGFsbFxuICAgICAgICAgICAgdGhpcy5ncmlkLmdyb3VwaW5nRXhwcmVzc2lvbnMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5ncm91cGluZ0V4cGFuc2lvblN0YXRlID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGdyRXhwciBvZiBncm91cGluZ1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc29ydEV4cHJJbmRleCA9IHNvcnRpbmdTdGF0ZS5maW5kSW5kZXgoKGV4cCkgPT4gZXhwLmZpZWxkTmFtZSA9PT0gZ3JFeHByLmZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKHNvcnRFeHBySW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBzb3J0aW5nU3RhdGUuc3BsaWNlKHNvcnRFeHBySW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ3JpZC5zb3J0aW5nRXhwcmVzc2lvbnMgPSBzb3J0aW5nU3RhdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ3JvdXBCeV9nZXRfZXhwYW5kZWRfZm9yX2dyb3VwKGdyb3VwUm93OiBJR3JvdXBCeVJlY29yZCk6IElHcm91cEJ5RXhwYW5kU3RhdGUge1xuICAgICAgICBjb25zdCBnclN0YXRlID0gdGhpcy5ncmlkLmdyb3VwaW5nRXhwYW5zaW9uU3RhdGU7XG4gICAgICAgIGNvbnN0IGhpZXJhcmNoeSA9IERhdGFVdGlsLmdldEhpZXJhcmNoeShncm91cFJvdyk7XG4gICAgICAgIHJldHVybiBnclN0YXRlLmZpbmQoKHN0YXRlKSA9PlxuICAgICAgICAgICAgRGF0YVV0aWwuaXNIaWVyYXJjaHlNYXRjaChzdGF0ZS5oaWVyYXJjaHkgfHwgW3sgZmllbGROYW1lOiBncm91cFJvdy5leHByZXNzaW9uLmZpZWxkTmFtZSwgdmFsdWU6IGdyb3VwUm93LnZhbHVlIH1dLCBoaWVyYXJjaHkpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ3JvdXBCeV9pc19yb3dfaW5fZ3JvdXAoZ3JvdXBSb3c6IElHcm91cEJ5UmVjb3JkLCByb3dJRCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBncmlkID0gdGhpcy5ncmlkO1xuICAgICAgICBsZXQgcm93SW5Hcm91cCA9IGZhbHNlO1xuICAgICAgICBncm91cFJvdy5yZWNvcmRzLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgIGlmIChncmlkLnByaW1hcnlLZXkgPyByb3dbZ3JpZC5wcmltYXJ5S2V5XSA9PT0gcm93SUQgOiByb3cgPT09IHJvd0lEKSB7XG4gICAgICAgICAgICAgICAgcm93SW5Hcm91cCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcm93SW5Hcm91cDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ3JvdXBCeV90b2dnbGVfZ3JvdXAoZ3JvdXBSb3c6IElHcm91cEJ5UmVjb3JkKSB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSB0aGlzLmdyaWQ7XG4gICAgICAgIGNvbnN0IGV4cGFuc2lvblN0YXRlID0gZ3JpZC5ncm91cGluZ0V4cGFuc2lvblN0YXRlO1xuICAgICAgICBsZXQgdG9nZ2xlUm93RWRpdGluZ092ZXJsYXk6IGJvb2xlYW47XG4gICAgICAgIGxldCBpc0VkaXRSb3dJbkdyb3VwID0gZmFsc2U7XG4gICAgICAgIGlmIChncmlkLnJvd0VkaXRhYmxlKSB7XG4gICAgICAgICAgICBjb25zdCByb3dTdGF0ZSA9IHRoaXMuZ3JpZC5jcnVkU2VydmljZS5yb3c7XG5cbiAgICAgICAgICAgIC8vIFRvZ2dsZSBvbmx5IHJvdyBlZGl0aW5nIG92ZXJsYXlzIHRoYXQgYXJlIGluc2lkZSBjdXJyZW50IGV4cGFuZGVkL2NvbGxhcHNlZCBncm91cC5cbiAgICAgICAgICAgIGlzRWRpdFJvd0luR3JvdXAgPSByb3dTdGF0ZSA/IHRoaXMuZ3JvdXBCeV9pc19yb3dfaW5fZ3JvdXAoZ3JvdXBSb3csIHJvd1N0YXRlLmlkKSA6IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXRlOiBJR3JvdXBCeUV4cGFuZFN0YXRlID0gdGhpcy5ncm91cEJ5X2dldF9leHBhbmRlZF9mb3JfZ3JvdXAoZ3JvdXBSb3cpO1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLmV4cGFuZGVkID0gIXN0YXRlLmV4cGFuZGVkO1xuICAgICAgICAgICAgaWYgKGlzRWRpdFJvd0luR3JvdXApIHtcbiAgICAgICAgICAgICAgICB0b2dnbGVSb3dFZGl0aW5nT3ZlcmxheSA9IHN0YXRlLmV4cGFuZGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXhwYW5zaW9uU3RhdGUucHVzaCh7XG4gICAgICAgICAgICAgICAgZXhwYW5kZWQ6ICFncmlkLmdyb3Vwc0V4cGFuZGVkLFxuICAgICAgICAgICAgICAgIGhpZXJhcmNoeTogRGF0YVV0aWwuZ2V0SGllcmFyY2h5KGdyb3VwUm93KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoaXNFZGl0Um93SW5Hcm91cCkge1xuICAgICAgICAgICAgICAgIHRvZ2dsZVJvd0VkaXRpbmdPdmVybGF5ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ncmlkLmdyb3VwaW5nRXhwYW5zaW9uU3RhdGUgPSBleHBhbnNpb25TdGF0ZTtcbiAgICAgICAgaWYgKGdyaWQucm93RWRpdGFibGUpIHtcbiAgICAgICAgICAgIGdyaWQucmVwb3NpdGlvblJvd0VkaXRpbmdPdmVybGF5KGdyaWQucm93SW5FZGl0TW9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ3JvdXBCeV9mdWxseV9leHBhbmRfZ3JvdXAoZ3JvdXBSb3c6IElHcm91cEJ5UmVjb3JkKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlOiBJR3JvdXBCeUV4cGFuZFN0YXRlID0gdGhpcy5ncm91cEJ5X2dldF9leHBhbmRlZF9mb3JfZ3JvdXAoZ3JvdXBSb3cpO1xuICAgICAgICBjb25zdCBleHBhbmRlZCA9IHN0YXRlID8gc3RhdGUuZXhwYW5kZWQgOiB0aGlzLmdyaWQuZ3JvdXBzRXhwYW5kZWQ7XG4gICAgICAgIGlmICghZXhwYW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JvdXBCeV90b2dnbGVfZ3JvdXAoZ3JvdXBSb3cpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChncm91cFJvdy5ncm91cFBhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5ncm91cEJ5X2Z1bGx5X2V4cGFuZF9ncm91cChncm91cFJvdy5ncm91cFBhcmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVtb3ZlX2dyb3VwaW5nX2V4cHJlc3Npb24oZmllbGROYW1lKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwaW5nRXhwcmVzc2lvbnMgPSB0aGlzLmdyaWQuZ3JvdXBpbmdFeHByZXNzaW9ucztcbiAgICAgICAgY29uc3QgaW5kZXggPSBncm91cGluZ0V4cHJlc3Npb25zLmZpbmRJbmRleCgoZXhwcikgPT4gZXhwci5maWVsZE5hbWUgPT09IGZpZWxkTmFtZSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGdyb3VwaW5nRXhwcmVzc2lvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhcnJhbmdlX3NvcnRpbmdfZXhwcmVzc2lvbnMoKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwaW5nU3RhdGUgPSB0aGlzLmdyaWQuZ3JvdXBpbmdFeHByZXNzaW9ucztcbiAgICAgICAgdGhpcy5ncmlkLnNvcnRpbmdFeHByZXNzaW9ucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBncm91cEV4cHJBID0gZ3JvdXBpbmdTdGF0ZS5maW5kKChleHByKSA9PiBleHByLmZpZWxkTmFtZSA9PT0gYS5maWVsZE5hbWUpO1xuICAgICAgICAgICAgY29uc3QgZ3JvdXBFeHByQiA9IGdyb3VwaW5nU3RhdGUuZmluZCgoZXhwcikgPT4gZXhwci5maWVsZE5hbWUgPT09IGIuZmllbGROYW1lKTtcbiAgICAgICAgICAgIGlmIChncm91cEV4cHJBICYmIGdyb3VwRXhwckIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ3JvdXBpbmdTdGF0ZS5pbmRleE9mKGdyb3VwRXhwckEpID4gZ3JvdXBpbmdTdGF0ZS5pbmRleE9mKGdyb3VwRXhwckIpID8gMSA6IC0xO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChncm91cEV4cHJBKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChncm91cEV4cHJCKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0X2dyb3VwQnlfcmVjb3JkX2lkKGdSb3c6IElHcm91cEJ5UmVjb3JkKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHJlY29yZElkID0gJ3sgJztcbiAgICAgICAgY29uc3QgaGllcnJhcmNoeSA9IERhdGFVdGlsLmdldEhpZXJhcmNoeShnUm93KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhpZXJyYXJjaHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwQnlLZXkgPSBoaWVycmFyY2h5W2ldO1xuICAgICAgICAgICAgcmVjb3JkSWQgKz0gYCcke2dyb3VwQnlLZXkuZmllbGROYW1lfSc6ICcke2dyb3VwQnlLZXkudmFsdWV9J2A7XG5cbiAgICAgICAgICAgIGlmIChpIDwgaGllcnJhcmNoeS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgcmVjb3JkSWQgKz0gJywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZWNvcmRJZCArPSAnIH0nO1xuXG4gICAgICAgIHJldHVybiByZWNvcmRJZDtcbiAgICB9XG5cbn1cbiJdfQ==