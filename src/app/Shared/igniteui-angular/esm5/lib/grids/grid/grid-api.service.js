/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { GridBaseAPIService } from '../api.service';
import { DataUtil } from '../../data-operations/data-util';
import { cloneArray } from '../../core/utils';
var IgxGridAPIService = /** @class */ (function (_super) {
    tslib_1.__extends(IgxGridAPIService, _super);
    function IgxGridAPIService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} expression
     * @return {?}
     */
    IgxGridAPIService.prototype.groupBy = /**
     * @param {?} expression
     * @return {?}
     */
    function (expression) {
        /** @type {?} */
        var groupingState = cloneArray(this.grid.groupingExpressions);
        /** @type {?} */
        var sortingState = cloneArray(this.grid.sortingExpressions);
        this.prepare_sorting_expression([sortingState, groupingState], expression);
        this.grid.groupingExpressions = groupingState;
        this.arrange_sorting_expressions();
    };
    /**
     * @param {?} expressions
     * @return {?}
     */
    IgxGridAPIService.prototype.groupBy_multiple = /**
     * @param {?} expressions
     * @return {?}
     */
    function (expressions) {
        var e_1, _a;
        /** @type {?} */
        var groupingState = cloneArray(this.grid.groupingExpressions);
        /** @type {?} */
        var sortingState = cloneArray(this.grid.sortingExpressions);
        try {
            for (var expressions_1 = tslib_1.__values(expressions), expressions_1_1 = expressions_1.next(); !expressions_1_1.done; expressions_1_1 = expressions_1.next()) {
                var each = expressions_1_1.value;
                this.prepare_sorting_expression([sortingState, groupingState], each);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (expressions_1_1 && !expressions_1_1.done && (_a = expressions_1.return)) _a.call(expressions_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.grid.groupingExpressions = groupingState;
        this.arrange_sorting_expressions();
    };
    /**
     * @param {?=} name
     * @return {?}
     */
    IgxGridAPIService.prototype.clear_groupby = /**
     * @param {?=} name
     * @return {?}
     */
    function (name) {
        var _this = this;
        var e_2, _a;
        /** @type {?} */
        var groupingState = cloneArray(this.grid.groupingExpressions);
        /** @type {?} */
        var sortingState = cloneArray(this.grid.sortingExpressions);
        if (name) {
            /** @type {?} */
            var names_1 = typeof name === 'string' ? [name] : name;
            /** @type {?} */
            var groupedCols = groupingState.filter(function (state) { return names_1.indexOf(state.fieldName) < 0; });
            /** @type {?} */
            var newSortingExpr = sortingState.filter(function (state) { return names_1.indexOf(state.fieldName) < 0; });
            this.grid.groupingExpressions = groupedCols;
            this.grid.sortingExpressions = newSortingExpr;
            names_1.forEach(function (colName) {
                /** @type {?} */
                var grExprIndex = groupingState.findIndex(function (exp) { return exp.fieldName === colName; });
                /** @type {?} */
                var grpExpandState = _this.grid.groupingExpansionState;
                /* remove expansion states related to the cleared group
                and all with deeper hierarchy than the cleared group */
                _this.grid.groupingExpansionState = grpExpandState
                    .filter(function (val) {
                    return val.hierarchy && val.hierarchy.length <= grExprIndex;
                });
            });
        }
        else {
            // clear all
            this.grid.groupingExpressions = [];
            this.grid.groupingExpansionState = [];
            var _loop_1 = function (grExpr) {
                /** @type {?} */
                var sortExprIndex = sortingState.findIndex(function (exp) { return exp.fieldName === grExpr.fieldName; });
                if (sortExprIndex > -1) {
                    sortingState.splice(sortExprIndex, 1);
                }
            };
            try {
                for (var groupingState_1 = tslib_1.__values(groupingState), groupingState_1_1 = groupingState_1.next(); !groupingState_1_1.done; groupingState_1_1 = groupingState_1.next()) {
                    var grExpr = groupingState_1_1.value;
                    _loop_1(grExpr);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (groupingState_1_1 && !groupingState_1_1.done && (_a = groupingState_1.return)) _a.call(groupingState_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            this.grid.sortingExpressions = sortingState;
        }
    };
    /**
     * @param {?} groupRow
     * @return {?}
     */
    IgxGridAPIService.prototype.groupBy_get_expanded_for_group = /**
     * @param {?} groupRow
     * @return {?}
     */
    function (groupRow) {
        /** @type {?} */
        var grState = this.grid.groupingExpansionState;
        /** @type {?} */
        var hierarchy = DataUtil.getHierarchy(groupRow);
        return grState.find(function (state) {
            return DataUtil.isHierarchyMatch(state.hierarchy || [{ fieldName: groupRow.expression.fieldName, value: groupRow.value }], hierarchy);
        });
    };
    /**
     * @param {?} groupRow
     * @param {?} rowID
     * @return {?}
     */
    IgxGridAPIService.prototype.groupBy_is_row_in_group = /**
     * @param {?} groupRow
     * @param {?} rowID
     * @return {?}
     */
    function (groupRow, rowID) {
        /** @type {?} */
        var grid = this.grid;
        /** @type {?} */
        var rowInGroup = false;
        groupRow.records.forEach(function (row) {
            if (grid.primaryKey ? row[grid.primaryKey] === rowID : row === rowID) {
                rowInGroup = true;
            }
        });
        return rowInGroup;
    };
    /**
     * @param {?} groupRow
     * @return {?}
     */
    IgxGridAPIService.prototype.groupBy_toggle_group = /**
     * @param {?} groupRow
     * @return {?}
     */
    function (groupRow) {
        /** @type {?} */
        var grid = this.grid;
        /** @type {?} */
        var expansionState = grid.groupingExpansionState;
        /** @type {?} */
        var toggleRowEditingOverlay;
        /** @type {?} */
        var isEditRowInGroup = false;
        if (grid.rowEditable) {
            /** @type {?} */
            var rowState = this.grid.crudService.row;
            // Toggle only row editing overlays that are inside current expanded/collapsed group.
            isEditRowInGroup = rowState ? this.groupBy_is_row_in_group(groupRow, rowState.id) : false;
        }
        /** @type {?} */
        var state = this.groupBy_get_expanded_for_group(groupRow);
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
    };
    /**
     * @param {?} groupRow
     * @return {?}
     */
    IgxGridAPIService.prototype.groupBy_fully_expand_group = /**
     * @param {?} groupRow
     * @return {?}
     */
    function (groupRow) {
        /** @type {?} */
        var state = this.groupBy_get_expanded_for_group(groupRow);
        /** @type {?} */
        var expanded = state ? state.expanded : this.grid.groupsExpanded;
        if (!expanded) {
            this.groupBy_toggle_group(groupRow);
        }
        if (groupRow.groupParent) {
            this.groupBy_fully_expand_group(groupRow.groupParent);
        }
    };
    /**
     * @protected
     * @param {?} fieldName
     * @return {?}
     */
    IgxGridAPIService.prototype.remove_grouping_expression = /**
     * @protected
     * @param {?} fieldName
     * @return {?}
     */
    function (fieldName) {
        /** @type {?} */
        var groupingExpressions = this.grid.groupingExpressions;
        /** @type {?} */
        var index = groupingExpressions.findIndex(function (expr) { return expr.fieldName === fieldName; });
        if (index !== -1) {
            groupingExpressions.splice(index, 1);
        }
    };
    /**
     * @return {?}
     */
    IgxGridAPIService.prototype.arrange_sorting_expressions = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var groupingState = this.grid.groupingExpressions;
        this.grid.sortingExpressions.sort(function (a, b) {
            /** @type {?} */
            var groupExprA = groupingState.find(function (expr) { return expr.fieldName === a.fieldName; });
            /** @type {?} */
            var groupExprB = groupingState.find(function (expr) { return expr.fieldName === b.fieldName; });
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
    };
    /**
     * @param {?} gRow
     * @return {?}
     */
    IgxGridAPIService.prototype.get_groupBy_record_id = /**
     * @param {?} gRow
     * @return {?}
     */
    function (gRow) {
        /** @type {?} */
        var recordId = '{ ';
        /** @type {?} */
        var hierrarchy = DataUtil.getHierarchy(gRow);
        for (var i = 0; i < hierrarchy.length; i++) {
            /** @type {?} */
            var groupByKey = hierrarchy[i];
            recordId += "'" + groupByKey.fieldName + "': '" + groupByKey.value + "'";
            if (i < hierrarchy.length - 1) {
                recordId += ', ';
            }
        }
        recordId += ' }';
        return recordId;
    };
    return IgxGridAPIService;
}(GridBaseAPIService));
export { IgxGridAPIService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1hcGkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvZ3JpZC9ncmlkLWFwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUc5QztJQUF1Qyw2Q0FBb0M7SUFBM0U7O0lBK0pBLENBQUM7Ozs7O0lBN0pVLG1DQUFPOzs7O0lBQWQsVUFBZSxVQUErQjs7WUFDcEMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDOztZQUN6RCxZQUFZLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDN0QsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsYUFBYSxDQUFDO1FBQzlDLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRU0sNENBQWdCOzs7O0lBQXZCLFVBQXdCLFdBQWtDOzs7WUFDaEQsYUFBYSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDOztZQUN6RCxZQUFZLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7O1lBRTdELEtBQW1CLElBQUEsZ0JBQUEsaUJBQUEsV0FBVyxDQUFBLHdDQUFBLGlFQUFFO2dCQUEzQixJQUFNLElBQUksd0JBQUE7Z0JBQ1gsSUFBSSxDQUFDLDBCQUEwQixDQUFD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TTtnQkFDSCxPQUFPLENBQUMsQ0FBQzthQUNaO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzs7OztJQUVNLGlEQUFxQjs7OztJQUE1QixVQUE2QixJQUFvQjs7WUFDekMsUUFBUSxHQUFHLElBQUk7O1lBQ2IsVUFBVSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1FBRTlDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDbEMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsUUFBUSxJQUFJLE1BQUksVUFBVSxDQUFDLFNBQVMsWUFBTyxVQUFVLENBQUMsS0FBSyxNQUFHLENBQUM7WUFFL0QsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzNCLFFBQVEsSUFBSSxJQUFJLENBQUM7YUFDcEI7U0FDSjtRQUNELFFBQVEsSUFBSSxJQUFJLENBQUM7UUFFakIsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUVMLHdCQUFDO0FBQUQsQ0FBQyxBQS9KRCxDQUF1QyxrQkFBa0IsR0ErSnhEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZEJhc2VBUElTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4R3JpZENvbXBvbmVudCB9IGZyb20gJy4vZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSUdyb3VwQnlSZWNvcmQgfSBmcm9tICcuLi8uLi9kYXRhLW9wZXJhdGlvbnMvZ3JvdXBieS1yZWNvcmQuaW50ZXJmYWNlJztcbmltcG9ydCB7IElHcm91cEJ5RXhwYW5kU3RhdGUgfSBmcm9tICcuLi8uLi9kYXRhLW9wZXJhdGlvbnMvZ3JvdXBieS1leHBhbmQtc3RhdGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhdGFVdGlsIH0gZnJvbSAnLi4vLi4vZGF0YS1vcGVyYXRpb25zL2RhdGEtdXRpbCc7XG5pbXBvcnQgeyBjbG9uZUFycmF5IH0gZnJvbSAnLi4vLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyBJR3JvdXBpbmdFeHByZXNzaW9uIH0gZnJvbSAnLi4vLi4vZGF0YS1vcGVyYXRpb25zL2dyb3VwaW5nLWV4cHJlc3Npb24uaW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIElneEdyaWRBUElTZXJ2aWNlIGV4dGVuZHMgR3JpZEJhc2VBUElTZXJ2aWNlPElneEdyaWRDb21wb25lbnQ+IHtcblxuICAgIHB1YmxpYyBncm91cEJ5KGV4cHJlc3Npb246IElHcm91cGluZ0V4cHJlc3Npb24pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZ3JvdXBpbmdTdGF0ZSA9IGNsb25lQXJyYXkodGhpcy5ncmlkLmdyb3VwaW5nRXhwcmVzc2lvbnMpO1xuICAgICAgICBjb25zdCBzb3J0aW5nU3RhdGUgPSBjbG9uZUFycmF5KHRoaXMuZ3JpZC5zb3J0aW5nRXhwcmVzc2lvbnMpO1xuICAgICAgICB0aGlzLnByZXBhcmVfc29ydGluZ19leHByZXNzaW9uKFtzb3J0aW5nU3RhdGUsIGdyb3VwaW5nU3RhdGVdLCBleHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5ncmlkLmdyb3VwaW5nRXhwcmVzc2lvbnMgPSBncm91cGluZ1N0YXRlO1xuICAgICAgICB0aGlzLmFycmFuZ2Vfc29ydGluZ19leHByZXNzaW9ucygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBncm91cEJ5X211bHRpcGxlKGV4cHJlc3Npb25zOiBJR3JvdXBpbmdFeHByZXNzaW9uW10pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZ3JvdXBpbmdTdGF0ZSA9IGNsb25lQXJyYXkodGhpcy5ncmlkLmdyb3VwaW5nRXhwcmVzc2lvbnMpO1xuICAgICAgICBjb25zdCBzb3J0aW5nU3RhdGUgPSBjbG9uZUFycmF5KHRoaXMuZ3JpZC5zb3J0aW5nRXhwcmVzc2lvbnMpO1xuXG4gICAgICAgIGZvciAoY29uc3QgZWFjaCBvZiBleHByZXNzaW9ucykge1xuICAgICAgICAgICAgdGhpcy5wcmVwYXJlX3NvcnRpbmdfZXhwcmVzc2lvbihbc29ydGluZ1N0YXRlLCBncm91cGluZ1N0YXRlXSwgZWFjaCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdyaWQuZ3JvdXBpbmdFeHByZXNzaW9ucyA9IGdyb3VwaW5nU3RhdGU7XG4gICAgICAgIHRoaXMuYXJyYW5nZV9zb3J0aW5nX2V4cHJlc3Npb25zKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyX2dyb3VwYnkobmFtZT86IHN0cmluZyB8IEFycmF5PHN0cmluZz4pIHtcbiAgICAgICAgY29uc3QgZ3JvdXBpbmdTdGF0ZSA9IGNsb25lQXJyYXkodGhpcy5ncmlkLmdyb3VwaW5nRXhwcmVzc2lvbnMpO1xuICAgICAgICBjb25zdCBzb3J0aW5nU3RhdGUgPSBjbG9uZUFycmF5KHRoaXMuZ3JpZC5zb3J0aW5nRXhwcmVzc2lvbnMpO1xuXG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lcyA9IHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJyA/IFsgbmFtZSBdIDogbmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwZWRDb2xzID0gZ3JvdXBpbmdTdGF0ZS5maWx0ZXIoKHN0YXRlKSA9PiBuYW1lcy5pbmRleE9mKHN0YXRlLmZpZWxkTmFtZSkgPCAwKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1NvcnRpbmdFeHByID0gc29ydGluZ1N0YXRlLmZpbHRlcigoc3RhdGUpID0+IG5hbWVzLmluZGV4T2Yoc3RhdGUuZmllbGROYW1lKSA8IDApO1xuICAgICAgICAgICAgdGhpcy5ncmlkLmdyb3VwaW5nRXhwcmVzc2lvbnMgPSBncm91cGVkQ29scztcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5zb3J0aW5nRXhwcmVzc2lvbnMgPSBuZXdTb3J0aW5nRXhwcjtcbiAgICAgICAgICAgIG5hbWVzLmZvckVhY2goKGNvbE5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBnckV4cHJJbmRleCA9IGdyb3VwaW5nU3RhdGUuZmluZEluZGV4KChleHApID0+IGV4cC5maWVsZE5hbWUgPT09IGNvbE5hbWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdycEV4cGFuZFN0YXRlID0gdGhpcy5ncmlkLmdyb3VwaW5nRXhwYW5zaW9uU3RhdGU7XG4gICAgICAgICAgICAgICAgLyogcmVtb3ZlIGV4cGFuc2lvbiBzdGF0ZXMgcmVsYXRlZCB0byB0aGUgY2xlYXJlZCBncm91cFxuICAgICAgICAgICAgICAgIGFuZCBhbGwgd2l0aCBkZWVwZXIgaGllcmFyY2h5IHRoYW4gdGhlIGNsZWFyZWQgZ3JvdXAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQuZ3JvdXBpbmdFeHBhbnNpb25TdGF0ZSA9IGdycEV4cGFuZFN0YXRlXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5oaWVyYXJjaHkgJiYgdmFsLmhpZXJhcmNoeS5sZW5ndGggPD0gZ3JFeHBySW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjbGVhciBhbGxcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5ncm91cGluZ0V4cHJlc3Npb25zID0gW107XG4gICAgICAgICAgICB0aGlzLmdyaWQuZ3JvdXBpbmdFeHBhbnNpb25TdGF0ZSA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBnckV4cHIgb2YgZ3JvdXBpbmdTdGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNvcnRFeHBySW5kZXggPSBzb3J0aW5nU3RhdGUuZmluZEluZGV4KChleHApID0+IGV4cC5maWVsZE5hbWUgPT09IGdyRXhwci5maWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChzb3J0RXhwckluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgc29ydGluZ1N0YXRlLnNwbGljZShzb3J0RXhwckluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdyaWQuc29ydGluZ0V4cHJlc3Npb25zID0gc29ydGluZ1N0YXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdyb3VwQnlfZ2V0X2V4cGFuZGVkX2Zvcl9ncm91cChncm91cFJvdzogSUdyb3VwQnlSZWNvcmQpOiBJR3JvdXBCeUV4cGFuZFN0YXRlIHtcbiAgICAgICAgY29uc3QgZ3JTdGF0ZSA9IHRoaXMuZ3JpZC5ncm91cGluZ0V4cGFuc2lvblN0YXRlO1xuICAgICAgICBjb25zdCBoaWVyYXJjaHkgPSBEYXRhVXRpbC5nZXRIaWVyYXJjaHkoZ3JvdXBSb3cpO1xuICAgICAgICByZXR1cm4gZ3JTdGF0ZS5maW5kKChzdGF0ZSkgPT5cbiAgICAgICAgICAgIERhdGFVdGlsLmlzSGllcmFyY2h5TWF0Y2goc3RhdGUuaGllcmFyY2h5IHx8IFt7IGZpZWxkTmFtZTogZ3JvdXBSb3cuZXhwcmVzc2lvbi5maWVsZE5hbWUsIHZhbHVlOiBncm91cFJvdy52YWx1ZSB9XSwgaGllcmFyY2h5KSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdyb3VwQnlfaXNfcm93X2luX2dyb3VwKGdyb3VwUm93OiBJR3JvdXBCeVJlY29yZCwgcm93SUQpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IHRoaXMuZ3JpZDtcbiAgICAgICAgbGV0IHJvd0luR3JvdXAgPSBmYWxzZTtcbiAgICAgICAgZ3JvdXBSb3cucmVjb3Jkcy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICBpZiAoZ3JpZC5wcmltYXJ5S2V5ID8gcm93W2dyaWQucHJpbWFyeUtleV0gPT09IHJvd0lEIDogcm93ID09PSByb3dJRCkge1xuICAgICAgICAgICAgICAgIHJvd0luR3JvdXAgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJvd0luR3JvdXA7XG4gICAgfVxuXG4gICAgcHVibGljIGdyb3VwQnlfdG9nZ2xlX2dyb3VwKGdyb3VwUm93OiBJR3JvdXBCeVJlY29yZCkge1xuICAgICAgICBjb25zdCBncmlkID0gdGhpcy5ncmlkO1xuICAgICAgICBjb25zdCBleHBhbnNpb25TdGF0ZSA9IGdyaWQuZ3JvdXBpbmdFeHBhbnNpb25TdGF0ZTtcbiAgICAgICAgbGV0IHRvZ2dsZVJvd0VkaXRpbmdPdmVybGF5OiBib29sZWFuO1xuICAgICAgICBsZXQgaXNFZGl0Um93SW5Hcm91cCA9IGZhbHNlO1xuICAgICAgICBpZiAoZ3JpZC5yb3dFZGl0YWJsZSkge1xuICAgICAgICAgICAgY29uc3Qgcm93U3RhdGUgPSB0aGlzLmdyaWQuY3J1ZFNlcnZpY2Uucm93O1xuXG4gICAgICAgICAgICAvLyBUb2dnbGUgb25seSByb3cgZWRpdGluZyBvdmVybGF5cyB0aGF0IGFyZSBpbnNpZGUgY3VycmVudCBleHBhbmRlZC9jb2xsYXBzZWQgZ3JvdXAuXG4gICAgICAgICAgICBpc0VkaXRSb3dJbkdyb3VwID0gcm93U3RhdGUgPyB0aGlzLmdyb3VwQnlfaXNfcm93X2luX2dyb3VwKGdyb3VwUm93LCByb3dTdGF0ZS5pZCkgOiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGF0ZTogSUdyb3VwQnlFeHBhbmRTdGF0ZSA9IHRoaXMuZ3JvdXBCeV9nZXRfZXhwYW5kZWRfZm9yX2dyb3VwKGdyb3VwUm93KTtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5leHBhbmRlZCA9ICFzdGF0ZS5leHBhbmRlZDtcbiAgICAgICAgICAgIGlmIChpc0VkaXRSb3dJbkdyb3VwKSB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlUm93RWRpdGluZ092ZXJsYXkgPSBzdGF0ZS5leHBhbmRlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4cGFuc2lvblN0YXRlLnB1c2goe1xuICAgICAgICAgICAgICAgIGV4cGFuZGVkOiAhZ3JpZC5ncm91cHNFeHBhbmRlZCxcbiAgICAgICAgICAgICAgICBoaWVyYXJjaHk6IERhdGFVdGlsLmdldEhpZXJhcmNoeShncm91cFJvdylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGlzRWRpdFJvd0luR3JvdXApIHtcbiAgICAgICAgICAgICAgICB0b2dnbGVSb3dFZGl0aW5nT3ZlcmxheSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ3JpZC5ncm91cGluZ0V4cGFuc2lvblN0YXRlID0gZXhwYW5zaW9uU3RhdGU7XG4gICAgICAgIGlmIChncmlkLnJvd0VkaXRhYmxlKSB7XG4gICAgICAgICAgICBncmlkLnJlcG9zaXRpb25Sb3dFZGl0aW5nT3ZlcmxheShncmlkLnJvd0luRWRpdE1vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdyb3VwQnlfZnVsbHlfZXhwYW5kX2dyb3VwKGdyb3VwUm93OiBJR3JvdXBCeVJlY29yZCkge1xuICAgICAgICBjb25zdCBzdGF0ZTogSUdyb3VwQnlFeHBhbmRTdGF0ZSA9IHRoaXMuZ3JvdXBCeV9nZXRfZXhwYW5kZWRfZm9yX2dyb3VwKGdyb3VwUm93KTtcbiAgICAgICAgY29uc3QgZXhwYW5kZWQgPSBzdGF0ZSA/IHN0YXRlLmV4cGFuZGVkIDogdGhpcy5ncmlkLmdyb3Vwc0V4cGFuZGVkO1xuICAgICAgICBpZiAoIWV4cGFuZGVkKSB7XG4gICAgICAgICAgICB0aGlzLmdyb3VwQnlfdG9nZ2xlX2dyb3VwKGdyb3VwUm93KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ3JvdXBSb3cuZ3JvdXBQYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JvdXBCeV9mdWxseV9leHBhbmRfZ3JvdXAoZ3JvdXBSb3cuZ3JvdXBQYXJlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlbW92ZV9ncm91cGluZ19leHByZXNzaW9uKGZpZWxkTmFtZSkge1xuICAgICAgICBjb25zdCBncm91cGluZ0V4cHJlc3Npb25zID0gdGhpcy5ncmlkLmdyb3VwaW5nRXhwcmVzc2lvbnM7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZ3JvdXBpbmdFeHByZXNzaW9ucy5maW5kSW5kZXgoKGV4cHIpID0+IGV4cHIuZmllbGROYW1lID09PSBmaWVsZE5hbWUpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBncm91cGluZ0V4cHJlc3Npb25zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYXJyYW5nZV9zb3J0aW5nX2V4cHJlc3Npb25zKCkge1xuICAgICAgICBjb25zdCBncm91cGluZ1N0YXRlID0gdGhpcy5ncmlkLmdyb3VwaW5nRXhwcmVzc2lvbnM7XG4gICAgICAgIHRoaXMuZ3JpZC5zb3J0aW5nRXhwcmVzc2lvbnMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ3JvdXBFeHByQSA9IGdyb3VwaW5nU3RhdGUuZmluZCgoZXhwcikgPT4gZXhwci5maWVsZE5hbWUgPT09IGEuZmllbGROYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwRXhwckIgPSBncm91cGluZ1N0YXRlLmZpbmQoKGV4cHIpID0+IGV4cHIuZmllbGROYW1lID09PSBiLmZpZWxkTmFtZSk7XG4gICAgICAgICAgICBpZiAoZ3JvdXBFeHByQSAmJiBncm91cEV4cHJCKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdyb3VwaW5nU3RhdGUuaW5kZXhPZihncm91cEV4cHJBKSA+IGdyb3VwaW5nU3RhdGUuaW5kZXhPZihncm91cEV4cHJCKSA/IDEgOiAtMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ3JvdXBFeHByQSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ3JvdXBFeHByQikge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldF9ncm91cEJ5X3JlY29yZF9pZChnUm93OiBJR3JvdXBCeVJlY29yZCk6IHN0cmluZyB7XG4gICAgICAgIGxldCByZWNvcmRJZCA9ICd7ICc7XG4gICAgICAgIGNvbnN0IGhpZXJyYXJjaHkgPSBEYXRhVXRpbC5nZXRIaWVyYXJjaHkoZ1Jvdyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoaWVycmFyY2h5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBncm91cEJ5S2V5ID0gaGllcnJhcmNoeVtpXTtcbiAgICAgICAgICAgIHJlY29yZElkICs9IGAnJHtncm91cEJ5S2V5LmZpZWxkTmFtZX0nOiAnJHtncm91cEJ5S2V5LnZhbHVlfSdgO1xuXG4gICAgICAgICAgICBpZiAoaSA8IGhpZXJyYXJjaHkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHJlY29yZElkICs9ICcsICc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVjb3JkSWQgKz0gJyB9JztcblxuICAgICAgICByZXR1cm4gcmVjb3JkSWQ7XG4gICAgfVxuXG59XG4iXX0=