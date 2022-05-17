var Tv = /** @class */ (function () {
    function Tv(brand, size, resolution, connections) {
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
    }
    Tv.prototype.turnOn = function () {
        console.log("Televis\u00E3o ".concat(this._brand, ", ").concat(this._size, " polegadas.\n    Resolu\u00E7\u00E3o: ").concat(this._resolution, ". Conex\u00F5es dispon\u00EDveis: ").concat(this._connections));
    };
    Object.defineProperty(Tv.prototype, "connectedTo", {
        get: function () {
            return this._connectedTo;
        },
        set: function (newValue) {
            var validConnection = this._connections.filter(function (conn) { return conn === newValue; });
            if (validConnection.length !== 0) {
                this._connectedTo = newValue;
            }
            else {
                console.log('Sorry, connection unavailable!');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Tv;
}());
var tv1 = new Tv('Sansung', 52, '4k', ['HDMI1', 'HDMI2', 'Ethernet']);
tv1.turnOn();
tv1.connectedTo = 'HDMI1';
console.log("Connected to: ".concat(tv1.connectedTo));
