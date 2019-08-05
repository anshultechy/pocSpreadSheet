import { IgCollection } from './IgCollection';
import { TypeRegistrar } from './type';
import { IgxComponentRendererContainerComponent } from './igx-component-renderer-container-component';
var ComponentRendererAdapter = /** @class */ (function () {
    function ComponentRendererAdapter() {
        this._platform = "Igx";
    }
    ComponentRendererAdapter.prototype.createObject = function (type, container, context) {
        var typeName = "Igx" + type + "Component";
        if (TypeRegistrar.isRegistered(typeName)) {
            return TypeRegistrar.create(typeName);
        }
    };
    //createRootObject(type: string, container: any, context: TypeDescriptionContext, continueActions: (resumeRequired: boolean) => void) {
    //    let typeName = "Igr" + type;
    //    if (TypeRegistrar.isRegistered(typeName)) {
    //        let t = TypeRegistrar.get(typeName);
    //        let crc = container as IgrComponentRendererContainer;
    //        crc.createRootObject(t, continueActions);
    //    }
    //}
    ComponentRendererAdapter.prototype.createColorCollection = function (colors) {
        return colors;
    };
    ComponentRendererAdapter.prototype.createBrushCollection = function (brushes) {
        return brushes;
    };
    ComponentRendererAdapter.prototype.coerceToEnum = function (type, context, value) {
        return value;
    };
    ComponentRendererAdapter.prototype.onUIThread = function (container, action) {
        action();
    };
    ComponentRendererAdapter.prototype.setOrUpdateCollectionOnTarget = function (container, propertyName, propertyMetadata, context, target, value) {
        var coll = this.getPropertyValue(target, propertyName);
        if (coll instanceof IgCollection) {
            coll.clear();
            var newArr = value;
            for (var i = 0; i < newArr.length; i++) {
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
                var newArr = value;
                for (var i = 0; i < newArr.length; i++) {
                    coll.add(newArr[i]);
                }
            }
        }
    };
    ComponentRendererAdapter.prototype.setPropertyValue = function (target, propertyName, value, oldValue) {
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
    };
    ComponentRendererAdapter.prototype.getPropertyValue = function (target, propertyName) {
        return target[propertyName];
    };
    ComponentRendererAdapter.prototype.clearContainer = function (container, context, continueActions) {
        if (this._platform === "Igc") {
            var crc_1 = IgxComponentRendererContainerComponent.fromElement(container);
            crc_1.clearContainer(continueActions);
            return;
        }
        var crc = container;
        crc.clearContainer(continueActions);
    };
    ComponentRendererAdapter.prototype.getRootObject = function (container) {
        var crc = container;
        return crc.getRootObject();
    };
    ComponentRendererAdapter.prototype.clearCollection = function (target, propertyName, metadata) {
        var coll = this.getPropertyValue(target, propertyName);
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
    };
    ComponentRendererAdapter.prototype.addItemToCollection = function (propertyName, propertyMetadata, target, newIndex, item) {
        var coll = this.getPropertyValue(target, propertyName);
        if (coll instanceof IgCollection) {
            coll.insert(newIndex, item);
        }
        else if (Array.isArray(coll)) {
            var newArr = [];
            for (var i = 0; i < coll.length; i++) {
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
    };
    ComponentRendererAdapter.prototype.resetPropertyOnTarget = function (container, propertyName, propertyMetadata, target) {
        //TODO: anything we can do here? store default?
    };
    ComponentRendererAdapter.prototype.replaceItemInCollection = function (propertyName, propertyMetadata, target, newIndex, item) {
        var coll = this.getPropertyValue(target, propertyName);
        if (coll instanceof IgCollection) {
            coll.item(newIndex, item);
        }
        else if (Array.isArray(coll)) {
            var newArr = [];
            for (var i = 0; i < coll.length; i++) {
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
    };
    ComponentRendererAdapter.prototype.removeItemFromCollection = function (propertyName, propertyMetadata, target, oldIndex) {
        var coll = this.getPropertyValue(target, propertyName);
        if (coll instanceof IgCollection) {
            coll.removeAt(oldIndex);
        }
        else if (Array.isArray(coll)) {
            var newArr = [];
            for (var i = 0; i < coll.length; i++) {
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
    };
    ComponentRendererAdapter.prototype.replaceRootItem = function (container, type, context, continueActions) {
        var typeName = "Igx" + type + "Component";
        if (TypeRegistrar.isRegistered(typeName)) {
            var t = TypeRegistrar.get(typeName);
            if (this._platform === "Igc") {
                var crc_2 = IgxComponentRendererContainerComponent.fromElement(container);
                crc_2.replaceRootItem(t, continueActions);
                return;
            }
            var crc = container;
            crc.replaceRootItem(t, continueActions);
        }
        else {
            if (this._platform === "Igc") {
                var crc_3 = IgxComponentRendererContainerComponent.fromElement(container);
                crc_3.clearContainer(continueActions);
                return;
            }
            var crc = container;
            crc.clearContainer(continueActions);
        }
    };
    ComponentRendererAdapter.prototype.removeRootItem = function (container, context, continueActions) {
        this.clearContainer(container, context, continueActions);
    };
    ComponentRendererAdapter.prototype.flushChanges = function (container) {
    };
    return ComponentRendererAdapter;
}());
export { ComponentRendererAdapter };
//# sourceMappingURL=ComponentRendererAdapter.js.map