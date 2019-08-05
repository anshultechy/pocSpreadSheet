import { Description } from "./Description";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class AxisAnnotationDescription extends Description {
    static $t: Type;
    protected get_type(): string;
    readonly type: string;
    constructor();
    private u;
    valueRef: string;
    private s;
    text: string;
    private q;
    formatLabelRef: string;
    private t;
    textColor: string;
    private p;
    background: string;
    private r;
    outline: string;
    private j;
    strokeThickness: number;
    private g;
    backgroundPaddingLeft: number;
    private i;
    backgroundPaddingTop: number;
    private h;
    backgroundPaddingRight: number;
    private f;
    backgroundPaddingBottom: number;
}
