import { IgxComboBase } from './combo.common';
/**
 * @hidden
 */
export declare class IgxComboAPIService {
    protected combo: IgxComboBase;
    disableTransitions: boolean;
    register(combo: IgxComboBase): void;
    clear(): void;
    readonly item_focusable: boolean;
    readonly isRemote: boolean;
    add_custom_item(): void;
    readonly comboID: string;
    set_selected_item(itemID: any, event?: Event): void;
    is_item_selected(itemID: any): boolean;
}
