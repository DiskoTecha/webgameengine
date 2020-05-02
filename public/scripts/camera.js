class camera {
	constructor(followTarget, orthographicSize, dynamic) {
		this.pos = {
			x : 0,
			y : 0
		};

    // Half the height of the screen in pixels
		this.orthographicSize = orthographicSize;

    // Change this when implementing zoom to be the width/height in zoomed view
    this.viewWidth = SCREEN_WIDTH;
    this.viewHeight = SCREEN_HEIGHT;

		this.followTarget = followTarget;

    this.dynamic = dynamic;

    // Initialize updateCallback function member
    this.updateCallback = null;
	}

	getPosition() {
		return this.pos;
	}

  setPosition(x, y) {
    this.pos.x = x;
    this.pos.y = y;
  }

  setFollowTarget(entity) {
    this.followTarget = entity;
  }

  checkIfFollowing() {
    if (this.followTarget === null || this.followTarget === undefined) {
      return false;
    }
    // Else
    return true;
  }

  getFollowPosition() {
    if (!this.checkIfFollowing()) {
      console.log("Camera trying to find target position while followTarget is null/undefined");
      return this.pos;
    }
    return this.followTarget.getPosition();
  }

  centerOnFollow() {
    if (!this.checkIfFollowing()) {
      console.log("Camera trying to center on target while followTarget is null/undefined");
      return;
    }

    this.pos.x = this.followTarget.getPosition().x - this.viewWidth / 2 + this.followTarget.getWidth() / 2;
    this.pos.y = this.followTarget.getPosition().y - this.viewHeight / 2 + this.followTarget.getHeight() / 2;
  }

  // dynamicUpdate() function & callback
  setUpdateCallback(callback) {
    this.updateCallback = callback;
  }

  dynamicUpdate(timePerFrame, timeAtFrame) {
    if (this.updateCallback) {
      this.updateCallback(timePerFrame, timeAtFrame);
    }
    else if (dynamic) {
      console.log("dynamic set true on camera constructor for " + this.name + ", however updateCallback function has not been set");
      console.log("use setUpdateCallback() member function on " + this.name + " to activate updating");
    }
  }
}


var activeCamera = new camera(null, SCREEN_HEIGHT / 2, true);
activeCamera.setUpdateCallback(function (timePerFrame, timeAtFrame) {
  var speed = 0.1 // pixels/sec
  var sPerFrame = timePerFrame / 1000; // sec/frame
  var moveDist = speed * sPerFrame; // pixels/frame

  activeCamera.setPosition(activeCamera.getPosition().x + moveDist, activeCamera.getPosition().y);
});

var newCamera = new camera(null, SCREEN_HEIGHT / 2, true);
newCamera.setUpdateCallback(function (timePerFrame, timeAtFrame) {
  newCamera.centerOnFollow();
});

activeCamera = newCamera;
