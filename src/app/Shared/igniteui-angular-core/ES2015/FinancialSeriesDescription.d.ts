import { SeriesDescription } from "./SeriesDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare abstract class FinancialSeriesDescription extends SeriesDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private b0;
    negativeBrush: string;
    private b6;
    xAxisRef: string;
    private b7;
    yAxisRef: string;
    private b1;
    openMemberPath: string;
    private by;
    highMemberPath: string;
    private bz;
    lowMemberPath: string;
    private bx;
    closeMemberPath: string;
    private b5;
    volumeMemberPath: string;
    private bs;
    isCustomCategoryStyleAllowed: boolean;
    private b2;
    transitionInMode: string;
    private bt;
    isTransitionInEnabled: boolean;
    private bw;
    AssigningCategoryStyleRef: string;
    private b3;
    TypicalRef: string;
    private b4;
    TypicalBasedOnRef: string;
}
