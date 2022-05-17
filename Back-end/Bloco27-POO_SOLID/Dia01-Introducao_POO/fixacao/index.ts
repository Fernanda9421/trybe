class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(brand:string, size:number, resolution:string, connections:string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn():void {
    console.log(`Televisão ${this._brand}, ${this._size} polegadas.
    Resolução: ${this._resolution}. Conexões disponíveis: ${this._connections}`);
  }

  get connectedTo(): string {
    return this._connectedTo as string;
  }

  set connectedTo(newValue: string) {
    const validConnection = this._connections.filter((conn) => conn === newValue);
    
    if (validConnection.length !== 0) {
      this._connectedTo = newValue
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const tv1 = new Tv('Sansung', 52, '4k', ['HDMI1', 'HDMI2', 'Ethernet']);
tv1.turnOn();
tv1.connectedTo = 'HDMI1';
console.log(`Connected to: ${tv1.connectedTo}`);
