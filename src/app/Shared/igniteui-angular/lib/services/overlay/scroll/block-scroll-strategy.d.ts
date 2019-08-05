import { IgxOverlayService } from '../overlay';
import { ScrollStrategy } from './scroll-strategy';
/**
 * Prevents scrolling while the overlay content is shown.
 */
export declare class BlockScrollStrategy extends ScrollStrategy {
    private _initialized;
    private _document;
    private _initialScrollTop;
    private _initialScrollLeft;
    private _sourceElement;
    constructor(scrollContainer?: HTMLElement);
    /** @inheritdoc */
    initialize(document: Document, overlayService: IgxOverlayService, id: string): void;
    /** @inheritdoc */
    attach(): void;
    /** @inheritdoc */
    detach(): void;
    private onScroll;
    private onWheel;
}
