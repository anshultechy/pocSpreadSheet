import { Type } from "./type";
/**
 * Describes available interaction states of the chart or geographic map control.
 */
export declare enum InteractionState {
    /**
     * User gesture will not change the state of the chart.
     */
    None = 0,
    /**
     * User gesture will start a drag rectangle to zoom the chart.
     */
    DragZoom = 1,
    /**
     * User gesture will start a pan action to move the chart's window.
     */
    DragPan = 2,
    /**
     * User gesture will start a pan action in a touch environment and a drag rectangle in a mouse environment.
     */
    Auto = 3
}
/**
 * @hidden
 */
export declare let InteractionState_$type: Type;