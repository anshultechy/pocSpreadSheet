import { Base, Type } from "./type";
import { DescriptionRefValueChangedEventArgs } from "./DescriptionRefValueChangedEventArgs";
/**
 * @hidden
 */
export declare class RefValueChangedTarget extends Base {
    static $t: Type;
    b: any;
    c: string;
    a: (sender: any, args: DescriptionRefValueChangedEventArgs) => void;
}
