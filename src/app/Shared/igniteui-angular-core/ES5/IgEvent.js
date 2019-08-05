var IgEvent = /** @class */ (function () {
    function IgEvent() {
        this._callbacks = [];
    }
    IgEvent.prototype.emit = function (sender, args) {
        for (var i = 0; i < this._callbacks.length; i++) {
            this._callbacks[i](sender, args);
        }
    };
    IgEvent.prototype.add = function (callback) {
        this._callbacks.push(callback);
    };
    IgEvent.prototype.remove = function (callback) {
        var ind = this._callbacks.indexOf(callback);
        if (ind >= 0) {
            this._callbacks.splice(ind, 1);
        }
    };
    return IgEvent;
}());
export { IgEvent };
//# sourceMappingURL=IgEvent.js.map