export interface EasingFunctionHandler {
    (time: number): number;
}
export interface Action {
    (): void;
}
export declare class EventArgs {
}
export declare enum ListSortDirection {
    Ascending = 0,
    Descending = 1
}
export declare class SortDescription {
    private _propertyName;
    readonly propertyName: string;
    propertName: string;
    private _direction;
    direction: ListSortDirection;
}
