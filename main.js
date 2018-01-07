$( document ).ready(function(){
  $('select[name="colorpicker_color"]').simplecolorpicker({ picker: true });
  $('select[name="colorpicker_color"]').simplecolorpicker('selectColor', '#7bd148');
  $('select[name="colorpicker_bordercolor"]').simplecolorpicker({ picker: true });
  $('select[name="colorpicker_bordercolor"]').simplecolorpicker('selectColor', '#ffb878');


  var canvas = document.getElementById('canvas');
  var ctx =  canvas.getContext('2d');

  canvas.width = canvas.parentElement.clientWidth - 20;
  canvas.height = canvas.parentElement.clientHeight - 20;

  interfac = new Interface(ctx, {
    'canvas': $('#canvas'),
    'color': $('select[name="colorpicker_color"]'),
    'borderColor': $('select[name="colorpicker_bordercolor"]'),
    'borderWidth':$('#borderWidth'),
    'width': $('#width'),
    'height': $('#height'),
    'angle': $('#angle'),
    'sideCount': $('#sideCount'),
    'spikeCount': $('#spikeCount'),
    'polygon': $('#polygon'),
    'star': $('#star'),
    'circle': $('#circle'),
    'edit': $('#edit'),
    'delete_figure': $('#delete_figure'),
    'figuresList': $('#figures_list')
  });



});


/*
  poligon = new Polygon(ctx, 120, 180, 50, 50, 0, 2, 'grey', 'black', 4);
  poligon.draw();

  poligon = new Star(ctx, 180, 120, 50, 50, 0, 2, 'green', 'black', 5);
  poligon.draw();
*/
