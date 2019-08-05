import { FaultException } from "./FaultException";
import { FaultReason } from "./FaultReason";
import { FaultCode } from "./FaultCode";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class FaultException$1<TDetail> extends FaultException {
    static $t: Type;
    protected $tDetail: Type;
    constructor($tDetail: Type, a: TDetail, b: FaultReason, c: FaultCode, d: string);
    private _detail;
    detail: TDetail;
}
