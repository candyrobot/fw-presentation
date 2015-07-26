//
// - paper#click を使うと、斜めの線で威力を発する
// - material == line and path and shape and more... which is created from paper
//
(function(){
  window.Sketch = {};
  Sketch.mode = $('select').val();// default mode
  Sketch.$el = $('#svg_as_paper');
  Sketch.paper = Snap("#svg_as_paper");

  // filters
  var filterRep = Snap.filter.shadow(1,1,1,'#000',0.2);// get a code
  var filter = Sketch.paper.filter(filterRep);

  //----------------------------------------------------------------------------
  // Modules
  //----------------------------------------------------------------------------

  // module arrow
  (function(){
    var marker = Sketch.paper.path('M0,0L8,5L0,10L4,5z').addClass('sk-color-lightgreen sk-marker').marker();

    DragEventDefiner('arrow', {
      mousedown:function(e,x,y){
        var p = Sketch.paper.line(x,y,x,y);
        p.addClass('sk-color-lightgreen sk-stroke');
        p.attr({ markerEnd: marker, filter: filter });
        return p;
      },
      mousemove:function(e,p,x,y){
        p.attr({ x2:x, y2:y });
      },
      onclick:function(e,p,x,y){

      }
    });

  })();

  // module text
  (function(){
    Sketch.$el.on('click',function(e){
      if( Sketch.mode !== 'text' ) return;
      if( !$(e.target).is('svg') ) return;// ignore event on materials
      var x = e.offsetX;
      var y = e.offsetY;
      var str;
      if( !(str = prompt()) ) return;
      Sketch.paper.text(x,y,str);
    });

  })();

  // module shape
  (function(){

    DragEventDefiner('shape', {
      mousedown:function(e,x,y){
        var p = Sketch.paper.rect(x,y,0,0);
        p.addClass('sk-color-lightgreen sk-stroke');
        p.attr({ filter: filter });
        return p;
      },
      mousemove:function(e,p,x,y){
        var pX = p.node.x.baseVal.value;
        var pY = p.node.y.baseVal.value;
        p.attr({ width:x-pX, height:y-pY });
      },
      onclick:function(e,p,x,y){

      }
    });

  })();

  // module pen
  (function(){})();

  // module annotation
  (function(){})();




  //----------------------------------------------------------------------------
  // Abstract event definer as interface
  //----------------------------------------------------------------------------

  function DragEventDefiner( mode, eventHundlers ){
    // all events
    eventHundlers.mousedown = eventHundlers.mousedown || function(){};
    eventHundlers.mousemove = eventHundlers.mousemove || function(){};
    eventHundlers.mouseup   = eventHundlers.mouseup   || function(){};
    eventHundlers.onclick   = eventHundlers.onclick   || function(){};

    var p = null;// will be only working on.

    Sketch.$el.on('mousedown',function(e){
      if( Sketch.mode !== mode ) return;
      if( !$(e.target).is('svg') ) return;// ignore event on materials
      var x = e.offsetX;
      var y = e.offsetY;
      p = eventHundlers.mousedown(e,x,y);
      if( !p ) console.error('return paper object in mousedown event');
      p.click(eventHundlers.onclick);
    });

    $(window).on('mousemove',function(e){
      if( Sketch.mode !== mode ) return;
      var isDragging = e.which;
      if( isDragging && p ){
        var x = e.offsetX;
        var y = e.offsetY;
        eventHundlers.mousemove(e,p,x,y);
      }
    });

    $(window).on('mouseup',function(e){
      if( Sketch.mode !== mode ) return;
      var x = e.offsetX;
      var y = e.offsetY;
      eventHundlers.mouseup(e,p,x,y);
      // release
      p = null;
    });
  };


})();
