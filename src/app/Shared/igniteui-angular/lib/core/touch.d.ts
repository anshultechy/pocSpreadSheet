
import { NgZone } from '@angular/core';
/**
 * Touch gestures manager based on Hammer.js
 * Use with caution, this will track references for single manager per element. Very TBD. Much TODO.
 * @hidden
 */
export declare class HammerGesturesManager {
    private _zone;
    private doc;
    /**
     * Event option defaults for each recognizer, see http://hammerjs.github.io/api/ for API listing.
     */
    protected hammerOptions: any;
    private _hammerManagers;
    constructor(_zone: NgZone, doc: any);
    supports(eventName: string): boolean;
    /**
     * Add listener extended with options for Hammer.js. Will use defaults if none are provided.
     * Modeling after other event plugins for easy future modifications.
     */
    addEventListener(element: HTMLElement, eventName: string, eventHandler: (eventObj: any) => void, options?: object): () => void;
    /**
     * Add listener extended with options for Hammer.js. Will use defaults if none are provided.
     * Modeling after other event plugins for easy future modifications.
     *
     * @param target Can be one of either window, body or document(fallback default).
     */
    addGlobalEventListener(target: string, eventName: string, eventHandler: (eventObj: any) => void): () => void;
    /**
     * Exposes [Dom]Adapter.getGlobalEventTarget to get global event targets.
     * Supported: window, document, body. Defaults to document for invalid args.
     * @param target Target name
     */
    getGlobalEventTarget(target: string): EventTarget;
    /**
     * Set HammerManager options.
     *
     * @param element The DOM element used to create the manager on.
     *
     * ### Example
     *
     * ```ts
     * manager.setManagerOption(myElem, "pan", { pointers: 1 });
     * ```
     */
    setManagerOption(element: EventTarget, event: string, options: any): void;
    /**
     * Add an element and manager map to the internal collection.
     *
     * @param element The DOM element used to create the manager on.
     */
    addManagerForElement(element: EventTarget, manager: any): void;
    /**
     * Get HammerManager for the element or null
     *
     * @param element The DOM element used to create the manager on.
     */
    getManagerForElement(element: EventTarget): any;
    /**
     * Destroys the HammerManager for the element, removing event listeners in the process.
     *
     * @param element The DOM element used to create the manager on.
     */
    removeManagerForElement(element: HTMLElement): void;
    /** Destroys all internally tracked HammerManagers, removing event listeners in the process. */
    destroy(): void;
}