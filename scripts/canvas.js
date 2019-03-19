class Canvas{
  constructor(ctx, pointPathCanvasCtx){
      if (!ctx) throw new Error(`The ctx must implement.`);
      this._ctx = ctx;
      this._pointPathCanvasCtx = pointPathCanvasCtx;

      this._items = [];
  }

  addPolygon(x, y, options){
    let polygon =  new Polygon(this.ctx, x, y, options.width, options.width, options.angle, options.borderWidth, options.color, options.borderColor, options.sideCount, false);
    this.addItem(polygon);
  }
  addStar(x, y, options){
    let star =  new Star(this.ctx, x, y, options.width, options.width, options.angle, options.borderWidth, options.color, options.borderColor, options.spikeCount, false);
    this.addItem(star);
  }
  addCircle(x, y, options){
    let circle =  new Circle(this.ctx, x, y, options.width, options.width, options.angle, options.borderWidth, options.color, options.borderColor, false);
    this.addItem(circle);
  }

  addItem(figure){
    if (figure instanceof Figure){
      this._items.push(figure);
    }else{
      throw new Error(`Parametr must be instance of Figure child`);
    }
  }

  deleteItem(index){
    this.items.splice(index, 1);
  }

  draw(){
    
    this._clear();
    this.items.forEach(function(figure) {
        figure.draw();
    });
  }

  getFigureIndexByCoord(x, y){
      for (var i = this.items.length-1; i > -1 ; i--) {
        this.items[i].draw(this._pointPathCanvasCtx);
        if (this._pointPathCanvasCtx.isPointInPath(x, y))
          return i
      }
      return null
  }

  _clear(){
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  get ctx(){ return this._ctx; }
  set ctx(value) { throw new Error(`The ctx property cannot be written. ${value} was passed.`); }
  get items(){ return this._items; }
  set items(value) { throw new Error(`The items property cannot be written. ${value} was passed.`); }
}
