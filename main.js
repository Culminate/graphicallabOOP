$( document ).ready(function(){
  $('select[name="colorpicker_color"]').simplecolorpicker({ picker: true });
  $('select[name="colorpicker_color"]').simplecolorpicker('selectColor', '#7bd148');
  $('select[name="colorpicker_bordercolor"]').simplecolorpicker({ picker: true });
  $('select[name="colorpicker_bordercolor"]').simplecolorpicker('selectColor', '#ffb878');


  var canvas = document.getElementById('canvas');
  var ctx =  canvas.getContext('2d');

  canvas.width = canvas.parentElement.clientWidth
  canvas.height = canvas.parentElement.clientHeight;

  poligon = new Polygon(ctx, 120, 180, 50, 50, 0, 2, 'grey', 'black', 4);
  poligon.draw();

  poligon = new Star(ctx, 180, 120, 50, 50, 0, 2, 'green', 'black', 5);
  poligon.draw();

  interfac = new Interface(ctx);
  interfac.color =  $('select[name="colorpicker_color"]').val();
  $('select[name="colorpicker_color"]').on('change', function(){
    interfac.color =  $('select[name="colorpicker_color"]').val();
  })

  $('#canvas').click(function(e){
      var elm = $(this);
      var xPos = e.pageX - elm.offset().left;
      var yPos = e.pageY - elm.offset().top;

      console.log(xPos, yPos);
      interfac.addPolygon(xPos, yPos)
  })
});
