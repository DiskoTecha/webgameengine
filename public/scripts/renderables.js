
var renderables = new Array();


function addToRenderables(layerNumber, entity) {
  // If there are no renderables yet, push it in
  if (renderables.length === 0) {
    renderables.push(
      {
        layer : layerNumber,
        entity : entity
      }
    )
  }
  else {
    for (var i = 0; i < renderables.length; i++) {
      if (layerNumber < renderables[i].layer) {
        renderables.unsh
      }
    }
  }

  // Use orderedDictionary to add values
}
