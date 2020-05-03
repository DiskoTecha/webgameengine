class rect {
  constructor(left, right, top, bottom) {
    this.left = 0;
    this.right = 0;
    this.top = 0;
    this.bottom = 0;

    if (typeof left === 'number') {
      this.left = left;
    }
    if (typeof right === 'number') {
      this.right = right;
    }
    if (typeof top === 'number') {
      this.top = top;
    }
    if (typeof bottom === 'number') {
      this.bottom = bottom;
    }
  }

  setRect(left, right, top, bottom) {
    if (typeof left === 'number') {
      this.left = left;
    }
    if (typeof right === 'number') {
      this.right = right;
    }
    if (typeof top === 'number') {
      this.top = top;
    }
    if (typeof bottom === 'number') {
      this.bottom = bottom;
    }
  }
}

var r = new rect();
console.log(r.left, r.right, r.top, r.bottom);


function checkCollision(rect1, rect2) {
  // Check edges along each axes
  if ( ! (rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom)) {
    // Colliding
    return true;
  }
  // Else
  return false
}
