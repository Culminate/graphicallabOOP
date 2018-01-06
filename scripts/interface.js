class Interface{
  constructor(ctx){
      if (!ctx) throw new Error(`The ctx must implement.`);
      this._ctx = ctx;

      this._canvas = new Canvas(this.ctx);
      this._currentFigure = null;

      this._options = {
        color: null,
        width: null,
        height: null,
        angle: null,
        borderWidth: null,
        borderColor: null,
        spikeCount: null,
        sideCount: null
      }
  }

  addPolygon(x, y){
    let polygon =  new Polygon(this.ctx, x, y, 50, 50, 0, 2, this.color, 'black', 4);
    this._canvas.addItem(polygon);
    this._canvas.draw();
  }

  get ctx(){ return this._ctx; }
  set ctx(value) { throw new Error(`The ctx property cannot be written. ${value} was passed.`); }

  get color(){ return this._options.color; }
  set color(value){ this._options.color = value; }
}
