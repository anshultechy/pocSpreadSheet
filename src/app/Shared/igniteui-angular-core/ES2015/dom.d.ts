import { Type } from './type';
export interface DomRenderer {
    readonly rootWrapper: DomWrapper;
    querySelector(selector: string): DomWrapper;
    supportsAnimation(): boolean;
    getRequestAnimationFrame(): (act: () => void) => void;
    getSubRenderer(root: DomWrapper): DomRenderer;
    createElement(elementName: string): DomWrapper;
    get2DCanvasContext(canvas: DomWrapper): CanvasRenderingContext2D;
    hasWindow(): boolean;
    hasBody(): boolean;
    append(child: DomWrapper): DomRenderer;
    globalListen(element: string, eventName: string, hander: (ev: any) => void): () => void;
    appendToBody(element: DomWrapper): void;
    expandTemplate(template: any, args: any): DomWrapper;
    startCSSQuery(): void;
    endCSSQuery(): void;
    getCssDefaultPropertyValue(className: string, propertyName: string): string;
    getCssDefaultValuesForClassCollection(classPrefix: string, propertyNames: string[]): string[][];
    setCssQueryFontString(fontString: string): void;
    getHeightForFontString(fontString: string, text: string, useOffsetHeight: boolean): number;
    supportsDOMEvents(): boolean;
    getResourceString(resourceId: string): string;
    setTimeout(act: () => void, millisecondsDelay: number): number;
    clearTimeout(timerId: number): void;
    destroy(): void;
    runInMainZone(action: () => void): void;
    getWrapper(element: any): DomWrapper;
}
export declare let DomRenderer_$type: Type;
export interface DomWrapper {
    getNativeElement(): any;
    addClass(className: string): DomWrapper;
    removeClass(className: string): DomWrapper;
    setProperty(propertyName: string, value: any): DomWrapper;
    getProperty(propertyName: string): any;
    setStyleProperty(propertyName: string, value: string): DomWrapper;
    getStyleProperty(propertyName: string): string;
    setRawStyleProperty(propertyName: string, value: string): DomWrapper;
    setRawPosition(x: number, y: number): DomWrapper;
    setRawXPosition(x: number): DomWrapper;
    setRawYPosition(y: number): DomWrapper;
    setRawSize(width: number, height: number): DomWrapper;
    clone(): DomWrapper;
    setAttribute(propertyName: string, value: string): DomWrapper;
    getAttribute(propertyName: string): string;
    setText(value: string): DomWrapper;
    setRawText(value: string): DomWrapper;
    getText(): string;
    remove(): DomWrapper;
    append(child: DomWrapper): DomWrapper;
    before(child: DomWrapper): DomWrapper;
    removeChild(child: DomWrapper): DomWrapper;
    hide(): DomWrapper;
    show(): DomWrapper;
    width(): number;
    height(): number;
    outerWidth(): number;
    outerHeight(): number;
    outerWidthWithMargin(): number;
    outerHeightWithMargin(): number;
    getOffset(): DomWrapperPosition;
    setOffset(x: number, y: number): DomWrapper;
    removeChildren(): void;
    listen(eventName: string, handler: (ev: any) => void): () => void;
    unlistenAll(): void;
    focus(): void;
    getChildCount(): number;
    getChildAt(i: number): DomWrapper;
    findByClass(className: string): DomWrapper[];
    parent(): DomWrapper;
    querySelectorAll(selector: string): DomWrapper[];
    destroy(): void;
}
export declare let DomWrapper_$type: Type;
export interface DomWrapperPosition {
    readonly left: number;
    readonly top: number;
}
export interface NormalizedEvent extends MouseEvent {
    originalEvent: MouseEvent & TouchEvent & MSPointerEvent & MSGestureEvent & WheelEvent;
    pageX: number;
    pageY: number;
    button: number;
    wheelDelta?: number;
    target: Node;
}
