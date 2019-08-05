import { IComponentRendererAdapter } from "./IComponentRendererAdapter";
import { TypeDescriptionContext } from './TypeDescriptionContext';
import { TypeDescriptionMetadata } from './TypeDescriptionMetadata';
export declare class ComponentRendererAdapter implements IComponentRendererAdapter {
    createObject(type: string, container: any, context: TypeDescriptionContext): any;
    private _platform;
    createColorCollection(colors: any[]): any[];
    createBrushCollection(brushes: any[]): any[];
    coerceToEnum(type: string, context: TypeDescriptionContext, value: string): string;
    onUIThread(container: any, action: () => void): void;
    setOrUpdateCollectionOnTarget(container: any, propertyName: string, propertyMetadata: TypeDescriptionMetadata, context: TypeDescriptionContext, target: any, value: any): void;
    setPropertyValue(target: any, propertyName: string, value: any, oldValue: any): void;
    getPropertyValue(target: any, propertyName: string): any;
    clearContainer(container: any, context: TypeDescriptionContext, continueActions: (resumeRequired: boolean) => void): void;
    getRootObject(container: any): any;
    clearCollection(target: any, propertyName: string, metadata: TypeDescriptionMetadata): void;
    addItemToCollection(propertyName: string, propertyMetadata: TypeDescriptionMetadata, target: any, newIndex: number, item: any): void;
    resetPropertyOnTarget(container: any, propertyName: string, propertyMetadata: TypeDescriptionMetadata, target: any): void;
    replaceItemInCollection(propertyName: string, propertyMetadata: TypeDescriptionMetadata, target: any, newIndex: number, item: any): void;
    removeItemFromCollection(propertyName: string, propertyMetadata: TypeDescriptionMetadata, target: any, oldIndex: number): void;
    replaceRootItem(container: any, type: string, context: TypeDescriptionContext, continueActions: (resumeRequired: boolean) => void): void;
    removeRootItem(container: any, context: TypeDescriptionContext, continueActions: (resumeRequired: boolean) => void): void;
    flushChanges(container: any): void;
}
