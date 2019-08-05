import { Rect } from "./Rect";
import { Type } from "./type";
import { RectChangedEventArgs } from "./RectChangedEventArgs";
/**
 * @hidden
 */
export interface IZoomSlider {
    provideContainer(a: any): void;
    windowRect: Rect;
    windowRectChanged: (sender: any, e: RectChangedEventArgs) => void;
    hide(): void;
    show(): void;
    startInset: number;
    endInset: number;
    trackStartInset: number;
    trackEndInset: number;
    notifySizeChanged(): void;
    barExtent: number;
}
/**
 * @hidden
 */
export declare let IZoomSlider_$type: Type;