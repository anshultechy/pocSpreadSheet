import { ILegendOwner } from "./ILegendOwner";
import { Type } from "./type";
/**
 * @hidden
 */
export interface ILegendSeries {
    readonly container: ILegendOwner;
    resolveLegendIndex(): number;
    readonly isStacked: boolean;
    readonly isVertical: boolean;
    readonly isUsableInLegend: boolean;
    readonly name: string;
    readonly hasSubItems: boolean;
    forSubItems(a: (arg1: any) => void): void;
    readonly hasMarkers: boolean;
}
/**
 * @hidden
 */
export declare let ILegendSeries_$type: Type;