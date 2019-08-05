import { MarkerSeriesDescription } from "./MarkerSeriesDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare abstract class CategorySeriesDescription extends MarkerSeriesDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private b7;
    isCustomCategoryStyleAllowed: boolean;
    private b6;
    isCustomCategoryMarkerStyleAllowed: boolean;
    private b9;
    useHighMarkerFidelity: boolean;
    private cg;
    transitionInMode: string;
    private b8;
    isTransitionInEnabled: boolean;
    private cf;
    AssigningCategoryStyleRef: string;
    private ce;
    AssigningCategoryMarkerStyleRef: string;
}
