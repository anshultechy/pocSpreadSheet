import { IGridResourceStrings } from './grid-resources';
import { ITimePickerResourceStrings } from './time-picker-resources';
export interface IResourceStrings extends IGridResourceStrings, ITimePickerResourceStrings {
}
/**
 * @hidden
 */
export declare const CurrentResourceStrings: {
    GridResStrings: any;
    TimePickerResStrings: any;
};
/**
 * Changes the resource strings for all components in the application
 * ```
 * @param resourceStrings to be applied
 */
export declare function changei18n(resourceStrings: IResourceStrings): void;
/**
 * Returns current resource strings for all components
 */
export declare function getCurrentResourceStrings(): IResourceStrings;
