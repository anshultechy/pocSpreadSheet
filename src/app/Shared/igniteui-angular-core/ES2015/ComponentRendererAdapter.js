import { IgCollection } from './IgCollection';
import { TypeRegistrar } from './type';
import { IgxComponentRendererContainerComponent } from './igx-component-renderer-container-component';
export class ComponentRendererAdapter {
    constructor() {
        this._platform = "Igx";
    }
    createObject(type, container, context) {
        let typeName = "Igx" + type + "Component";
        if (TypeRegistrar.isRegistered(typeName)) {
            return TypeRegistrar.create(typeName);
        }
    }
    //createRootObject(type: string, container: any, context: TypeDescriptionContext, continueActions: (resumeRequired: boolean) => void) {
    //    let typeName = "Igr" + type;
    //    if (TypeRegistrar.isRegistered(typeName)) {
    //        let t = TypeRegistrar.get(typeName);
    //        let crc = container as IgrComponentRendererContainer;
    //        crc.createRootObject(t, continueActions);
    //    }
    //}
    createColorCollection(colors) {
        return colors;
    }
    createBrushCollection(brushes) {
        return brushes;
    }
    coerceToEnum(type, context, value) {
        return value;
    }
    onUIThread(container, action) {
        action();
    }
    setOrUpdateCollectionOnTarget(container, propertyName, propertyMetadata, context, target, value) {
        let coll = this.getPropertyValue(target, propertyName);
        if (coll instanceof IgCollection) {
            coll.clear();
            let newArr = value;
            for (let i = 0; i < newArr.length; i++) {
                coll.add(newArr[i]);
            }
        }
        else if (Array.isArray(coll)) {
            this.setPropertyValue(target, propertyName, value, coll);
        }
        else {
            if (coll.clear !== undefined) {
                coll.clear();
            }
            if (coll.add !== undefined) {
                let newArr = value;
                for (let i = 0; i < newArr.length; i++) {
                    coll.add(newArr[i]);
                }
            }
        }
    }
    setPropertyValue(target, propertyName, value, oldValue) {
        if (this._platform == "Igx" &&
            IgxComponentRendererContainerComponent.isEvent &&
            IgxComponentRendererContainerComponent.isEvent(target[propertyName])) {
            if (target["_" + propertyName + "Subscription"]) {
                target["_" + propertyName + "Subscription"]();
                target["_" + propertyName + "Subscription"] = null;
            }
            var fun = function (ev) {
                value(ev.sender, ev.args);
            };
            var sub = target[propertyName].subscribe(fun);
            target["_" + propertyName + "Subscription"] = sub;
            return;
        }
        target[propertyName] = value;
    }
    getPropertyValue(target, propertyName) {
        return target[propertyName];
    }
    clearContainer(container, context, continueActions) {
        if (this._platform === "Igc") {
            let crc = IgxComponentRendererContainerComponent.fromElement(container);
            crc.clearContainer(continueActions);
            return;
        }
        let crc = container;
        crc.clearContainer(continueActions);
    }
    getRootObject(container) {
        let crc = container;
        return crc.getRootObject();
    }
    clearCollection(target, propertyName, metadata) {
        let coll = this.getPropertyValue(target, propertyName);
        if (coll instanceof IgCollection) {
            coll.clear();
        }
        else if (Array.isArray(coll)) {
            this.setPropertyValue(target, propertyName, [], coll);
        }
        else {
            if (coll.clear !== undefined) {
                coll.clear();
            }
        }
    }
    addItemToCollection(propertyName, propertyMetadata, target, newIndex, item) {
        let coll = this.getPropertyValue(target, propertyName);
        if (coll instanceof IgCollection) {
            coll.insert(newIndex, item);
        }
        else if (Array.isArray(coll)) {
            let newArr = [];
            for (let i = 0; i < coll.length; i++) {
                newArr[i] = coll[i];
            }
            newArr.splice(newIndex, 0, item);
            this.setPropertyValue(target, propertyName, newArr, coll);
        }
        else {
            if (coll.insert !== undefined) {
                coll.insert(newIndex, item);
            }
        }
    }
    resetPropertyOnTarget(container, propertyName, propertyMetadata, target) {
        //TODO: anything we can do here? store default?
    }
    replaceItemInCollection(propertyName, propertyMetadata, target, newIndex, item) {
        let coll = this.getPropertyValue(target, propertyName);
        if (coll instanceof IgCollection) {
            coll.item(newIndex, item);
        }
        else if (Array.isArray(coll)) {
            let newArr = [];
            for (let i = 0; i < coll.length; i++) {
                newArr[i] = coll[i];
            }
            newArr[newIndex] = item;
            this.setPropertyValue(target, propertyName, newArr, coll);
        }
        else {
            if (coll.item !== undefined) {
                coll.item(newIndex, item);
            }
        }
    }
    removeItemFromCollection(propertyName, propertyMetadata, target, oldIndex) {
        let coll = this.getPropertyValue(target, propertyName);
        if (coll instanceof IgCollection) {
            coll.removeAt(oldIndex);
        }
        else if (Array.isArray(coll)) {
            let newArr = [];
            for (let i = 0; i < coll.length; i++) {
                newArr[i] = coll[i];
            }
            newArr.splice(oldIndex, 1);
            this.setPropertyValue(target, propertyName, newArr, coll);
        }
        else {
            if (coll.removeAt !== undefined) {
                coll.removeAt(oldIndex);
            }
        }
    }
    replaceRootItem(container, type, context, continueActions) {
        let typeName = "Igx" + type + "Component";
        if (TypeRegistrar.isRegistered(typeName)) {
            let t = TypeRegistrar.get(typeName);
            if (this._platform === "Igc") {
                let crc = IgxComponentRendererContainerComponent.fromElement(container);
                crc.replaceRootItem(t, continueActions);
                return;
            }
            let crc = container;
            crc.replaceRootItem(t, continueActions);
        }
        else {
            if (this._platform === "Igc") {
                let crc = IgxComponentRendererContainerComponent.fromElement(container);
                crc.clearContainer(continueActions);
                return;
            }
            let crc = container;
            crc.clearContainer(continueActions);
        }
    }
    removeRootItem(container, context, continueActions) {
        this.clearContainer(container, context, continueActions);
    }
    flushChanges(container) {
    }
}
//# sourceMappingURL=ComponentRendererAdapter.js.map