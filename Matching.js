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
var selected = {
  rc11: false,
  rc12: false,
  rc13: false,
  rc14: false,
  rc15: false,
  rc16: false,
  rc17: false,
  rc18: false,

  rc21: false,
  rc22: false,
  rc23: false,
  rc24: false,
  rc25: false,
  rc26: false,
  rc27: false,
  rc28: false,

  rc31: false,
  rc32: false,
  rc33: false,
  rc34: false,
  rc35: false,
  rc36: false,
  rc37: false,
  rc38: false,

  rc41: false,
  rc42: false,
  rc43: false,
  rc44: false,
  rc45: false,
  rc46: false,
  rc47: false,
  rc48: false,

  rc51: false,
  rc52: false,
  rc53: false,
  rc54: false,
  rc55: false,
  rc56: false,
  rc57: false,
  rc58: false,

  rc61: false,
  rc62: false,
  rc63: false,
  rc64: false,
  rc65: false,
  rc66: false,
  rc67: false,
  rc68: false,

  rc71: false,
  rc72: false,
  rc73: false,
  rc74: false,
  rc75: false,
  rc76: false,
  rc77: false,
  rc78: false,

  rc81: false,
  rc82: false,
  rc83: false,
  rc84: false,
  rc85: false,
  rc86: false,
  rc87: false,
  rc88: false
}
var matched = {
  rc11: false,
  rc12: false,
  rc13: false,
  rc14: false,
  rc15: false,
  rc16: false,
  rc17: false,
  rc18: false,

  rc21: false,
  rc22: false,
  rc23: false,
  rc24: false,
  rc25: false,
  rc26: false,
  rc27: false,
  rc28: false,

  rc31: false,
  rc32: false,
  rc33: false,
  rc34: false,
  rc35: false,
  rc36: false,
  rc37: false,
  rc38: false,

  rc41: false,
  rc42: false,
  rc43: false,
  rc44: false,
  rc45: false,
  rc46: false,
  rc47: false,
  rc48: false,

  rc51: false,
  rc52: false,
  rc53: false,
  rc54: false,
  rc55: false,
  rc56: false,
  rc57: false,
  rc58: false,

  rc61: false,
  rc62: false,
  rc63: false,
  rc64: false,
  rc65: false,
  rc66: false,
  rc67: false,
  rc68: false,

  rc71: false,
  rc72: false,
  rc73: false,
  rc74: false,
  rc75: false,
  rc76: false,
  rc77: false,
  rc78: false,

  rc81: false,
  rc82: false,
  rc83: false,
  rc84: false,
  rc85: false,
  rc86: false,
  rc87: false,
  rc88: false
}
var toCombine = [];
var isSelect = [];

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
    matched[rc] = false;
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
      if(matched[rc]) {
        $("#" + rc).css("background-color", "#000000");
        $("#" + rc + " p").css("color", "#ffffff");
      }
      else {
        $("#" + rc).css("background-color", "#dddddd");
        $("#" + rc + " p").css("color", "#000000");
      }
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
function testCombine() {
  var rc;
  for(i=1; i<=8; i++) {
    for(j=1; j<=8; j++) {
      rc = "rc" + String(i) + String(j);
      if(selected[rc]) {
        toCombine.push(rc);
      }
    }
  }
  var rc1 = board[toCombine[0]];
  var rc2 = board[toCombine[1]];
  if(rc1 == rc2) {
    $("#" + toCombine[0]).css("background-color", "#000000");
    $("#" + toCombine[1]).css("background-color", "#000000");
    $("#" + toCombine[0] + " p").css("color", "#ffffff");
    $("#" + toCombine[1] + " p").css("color", "#ffffff");
    matched[toCombine[0]] = true;
    matched[toCombine[1]] = true;
    selected[toCombine[0]] = false;
    selected[toCombine[1]] = false;
    toCombine = [];
    return true;
  }
  else {
    selected[toCombine[0]] = false;
    selected[toCombine[1]] = false;
    toCombine = [];
    return false;
  }
}

$("#newGame").click(function() {
  convertToRC(randomOrder());
  pairValues();
  displayOnBoard();
});

$(".box").click(function() {
  var clicked = $(this).attr("id");
  if(matched[clicked]) {
    return;
  }
  if(isSelect.length == 0) {
    isSelect.push(clicked);
    selected[clicked] = true;
  }
  else if(isSelect.length == 1) {
    isSelect.push(clicked);
    selected[clicked] = true;
    if(testCombine()) {

      alert("Match");

    }
    else {

      alert("Not Match");

    }
  }
  else if(isSelect.length == 2) {
    isSelect = [];
    isSelect.push(clicked);
    selected[clicked] = true;
  }
});
