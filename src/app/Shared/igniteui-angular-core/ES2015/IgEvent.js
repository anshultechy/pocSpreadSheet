export class IgEvent {
    constructor() {
        this._callbacks = [];
    }
    emit(sender, args) {
        for (let i = 0; i < this._callbacks.length; i++) {
            this._callbacks[i](sender, args);
        }
    }
    add(callback) {
        this._callbacks.push(callback);
    }
    remove(callback) {
        let ind = this._callbacks.indexOf(callback);
        if (ind >= 0) {
            this._callbacks.splice(ind, 1);
        }
    }
}
//# sourceMappingURL=IgEvent.js.map