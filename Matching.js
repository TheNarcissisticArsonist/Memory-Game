var board = {
  rc11: 0,
  rc12: 0,
  rc13: 0,
  rc14: 0,
  rc15: 0,
  rc16: 0,
  rc17: 0,
  rc18: 0,

  rc21: 0,
  rc22: 0,
  rc23: 0,
  rc24: 0,
  rc25: 0,
  rc26: 0,
  rc27: 0,
  rc28: 0,

  rc31: 0,
  rc32: 0,
  rc33: 0,
  rc34: 0,
  rc35: 0,
  rc36: 0,
  rc37: 0,
  rc38: 0,

  rc41: 0,
  rc42: 0,
  rc43: 0,
  rc44: 0,
  rc45: 0,
  rc46: 0,
  rc47: 0,
  rc48: 0,

  rc51: 0,
  rc52: 0,
  rc53: 0,
  rc54: 0,
  rc55: 0,
  rc56: 0,
  rc57: 0,
  rc58: 0,

  rc61: 0,
  rc62: 0,
  rc63: 0,
  rc64: 0,
  rc65: 0,
  rc66: 0,
  rc67: 0,
  rc68: 0,

  rc71: 0,
  rc72: 0,
  rc73: 0,
  rc74: 0,
  rc75: 0,
  rc76: 0,
  rc77: 0,
  rc78: 0,

  rc81: 0,
  rc82: 0,
  rc83: 0,
  rc84: 0,
  rc85: 0,
  rc86: 0,
  rc87: 0,
  rc88: 0
}

function randomOrder() {
  var ordered = [];
  var num = Math.floor(Math.random() * 64 + 1);
  var used = false;
  ordered.push(num);
  while(ordered.length < 64) {
    num = Math.floor(Math.random() * 64 + 1);
    for(i=0; i<ordered.length; i++) {
      if(ordered[i] == num) {
        used = true;
      }
    }
    if(!used) {
      ordered.push(num);
    }
    used = false;
  }
  return ordered;
}
function convertToRC(convert) {
  var r = 1;
  var c = 1;
  var rc;
  for(i=0; i<convert.length; i++) {
    rc = "rc" + String(r) + String(c);
    board[rc] = convert[i];
    if(c == 8) {
      r++;
      c = 1;
    }
    else {
      c++;
    }
  }
  console.log(board);
}
function displayOnBoard() {
  //For testing and debugging
  var rc;
  for(i=1; i<=8; i++) {
    for(j=1; j<=8; j++) {
      rc = "r" + "c" + String(i) + String(j);
      $("#" + rc).html("<p>" + String(board[rc]) + "</p>");
    }
  }
}
function pairValues() {
  var rc;
  for(i=1; i<=8; i++) {
    for(j=1; j<=8; j++) {
      rc = "rc" + String(i) + String(j);
      board[rc] = Math.floor((board[rc] + 1)/2);
    }
  }
}

$("#newGame").click(function() {
  convertToRC(randomOrder());
  pairValues();
  displayOnBoard();
});
