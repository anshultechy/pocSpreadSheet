import { DefinitionBaseDescription } from "./DefinitionBaseDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class SectionHeaderDescription extends DefinitionBaseDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private bj;
    selectedBackground: string;
    private bi;
    actualSelectedBackground: string;
    private bb;
    paddingLeft: number;
    private bd;
    paddingTop: number;
    private bc;
    paddingRight: number;
    private ba;
    paddingBottom: number;
}
