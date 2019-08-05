import { DefinitionBaseDescription } from "./DefinitionBaseDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare abstract class HeaderDescription extends DefinitionBaseDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private bb;
    paddingLeft: number;
    private bd;
    paddingTop: number;
    private bc;
    paddingRight: number;
    private ba;
    paddingBottom: number;
}
