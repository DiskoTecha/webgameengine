function cubicBezier(min, max, p1x, p2x, p1y, p2y, timeStart, timeLength, timeNow) {
  var timeRatio = (timeNow - timeStart) / timeLength;
  if (timeRatio >= 1) {
    return max;
  }
  else if (timeRatio <= 0) {
    return min;
  }
  // Else
  // console.log(timeRatio);
  // p0x is always zero and p3x is always 1
  var fxt = ( Math.pow((1 - timeRatio), 2) * 3 * timeRatio * p1x ) + ( Math.pow(timeRatio, 2) * (1 - timeRatio) * 3 * p2x ) + ( Math.pow(timeRatio, 3) );
  var fyt = ( Math.pow((1 - timeRatio), 2) * 3 * timeRatio * p1y ) + ( Math.pow(timeRatio, 2) * (1 - timeRatio) * 3 * p2y ) + ( Math.pow(timeRatio, 3) );

  if (fxt === 0) {
    return 0;
  }

  console.log(timeRatio);

  return (timeRatio * fyt / fxt) * (max - min) + min;
}
