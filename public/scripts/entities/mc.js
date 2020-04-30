
var mc = {
  name : "Main Character",
  img : null,
  source : "images/mc.png",

  pos : {
    x : 0,
    y : 0
  },

  preload : function() {
    this.img = new Image();
    this.img.src = source;
  }
}

// IIFE to add entity to list of renderable entities
;(function () {
  addToRenderables(0, mc);
})();
