var calcTP = (a, b) => {
  var c = Math.pow( Math.pow(a, 2)+Math.pow(b, 2), 0.5 );
  return c;
};

module.exports = calcTP;
