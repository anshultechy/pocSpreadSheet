import { BaseDOMEventProxy } from "./BaseDOMEventProxy";
import { EventProxy } from "./EventProxy";
import { DomWrapper, DomRenderer } from "./dom";
import { Type } from "./type";
import { List$1 } from "./List$1";
/**
 * @hidden
 */
export declare class CanvasGestureDOMEventProxy extends BaseDOMEventProxy {
    static $t: Type;
    private static c8;
    private c9;
    private da;
    private cw;
    d(): EventProxy;
    c7: MSGesture;
    constructor(a: DomWrapper, b: DomRenderer, c: boolean);
    private cy;
    private db;
    protected get_ah(): boolean;
    private df;
    private de;
    private dg;
    private dh;
    private di;
    private dj;
    private dk;
    private dd;
    private dc;
    static c0(): boolean;
    private c2;
    dl(a: any, b: string, c: List$1<() => void>): void;
    an(a: any, b: string): void;
    private dy;
    private cx;
    private ds;
    private dm;
    private dn;
    private c3;
    private c4;
    cz: boolean;
    private dp;
    private dq;
    private dr;
    private dv;
    private c5;
    private c6;
    private du;
    private c1;
    private dt;
    private dw;
    a9(a: any, b: string): void;
    ao(): void;
    static register(): void;
}
