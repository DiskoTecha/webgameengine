// Control everything with a global object and then have its members set to key/touch values
// TODO: Thinking about adding functionality that makes it so these values aren't switched unless they're checked for, for optimization
var controller = {
  key : {
    ArrowRight : false,
    ArrowLeft : false,
    ArrowUp : false,
    ArrowDown : false,
    End : false,
    Home : false,
    PageDown : false,
    PageUp : false,
    Alt : false,
    CapsLock : false,
    Control : false,
    Fn : false,
    Meta : false,
    NumLock : false,
    ScrollLock : false,
    Shift : false,
    Enter : false,
    Tab : false,
    // Space key needs special checking within "keydownHandler()" and "keyupHandler()" functions, replace property name with " " for key value
    Space : false,
    //
    Backspace : false,
    Delete : false,
    Insert : false,
    Escape : false,
    F1 : false,
    F2 : false,
    F3 : false,
    F4 : false,
    F5 : false,
    F6 : false,
    F7 : false,
    F8 : false,
    F9 : false,
    F10 : false,
    F11 : false,
    F12 : false,
    // All of these keypad values need to be replaced with ".", "*", "+", "/", and "-" in the keydown/keyup handler functions
    Decimal : false,
    Multiply : false,
    Add : false,
    Divide : false,
    Subtract : false,
    //
    a : false,
    b : false,
    c : false,
    d : false,
    e : false,
    f : false,
    g : false,
    h : false,
    i : false,
    j : false,
    k : false,
    l : false,
    m : false,
    n : false,
    o : false,
    p : false,
    q : false,
    r : false,
    s : false,
    t : false,
    u : false,
    v : false,
    w : false,
    x : false,
    y : false,
    z : false,
    // All these need to be replaced with "0", "1", "2", etc. in the keydown/keyup handler functions
    n0 : false,
    n1 : false,
    n2 : false,
    n3 : false,
    n4 : false,
    n5 : false,
    n6 : false,
    n7 : false,
    n8 : false,
    n9 : false
    //
  },

  // Then do touch values for touch screens or whatever
  touch : {
    // These are going to have to be objects themselves, with members for position and arrays of touches and stuff
  },

  // Then mouse values
  mouse : {
    // Also probably objects for position and stuff (at least one will be an object)
  }
}

// TODO: PREVENT DEFAULT BEHAVIOR
document.addEventListener('keydown', keydownHandler, false);
document.addEventListener('keyup', keyupHandler, false);

function keydownHandler(e) {
  for (var keyPropertyName in controller.key) {
    if (e.key === keyPropertyName) {
      controller.key[keyPropertyName] = true;
      console.log(keyPropertyName);
    }
  }
}

function keyupHandler(e) {
  for (var keyPropertyName in controller.key) {
    if (e.key === keyPropertyName) {
      controller.key[keyPropertyName] = false;
    }
  }
}
