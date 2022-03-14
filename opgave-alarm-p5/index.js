var time, fullDate, hr, min, sec, date, mth, yr, inputh, inputm, alarmh, alarmm, alarmsound;
var setalarmh, setalarmm, stopper;

function preload() {
  alarmsound = createAudio('./assets/imperial-march-cut.mp3');
  hr = hour();
  mint = minute();
  sec = second();
  if(month() == 1) {
    mth = 'January';
  }else if(month() == 2) {
    mth = 'February';
  }else if(month() == 3) {
    mth = 'March';
  }else if(month() == 4) {
    mth = 'April';
  }else if(month() == 5) {
    mth = 'May';
  }else if(month() == 6) {
    mth = 'June';
  }else if(month() == 7) {
    mth = 'July';
  }else if(month() == 8) {
    mth = 'August';
  }else if(month() == 9) {
    mth = 'September';
  }else if(month() == 10) {
    mth = 'October';
  }else if(month() == 11) {
    mth = 'November';
  }else if(month() == 12) {
    mth = 'December';
  }
  if(day() == 11 || day() == 12) {
    date = day() + 'th';
  }else if(day() % 10 == 1) {
    date = day() + 'st';
  }else if(day() % 10 == 2) {
		date = day() + 'nd';
  }else {
    date = day() + 'th';
  }
  yr = year();
}


function setup() {
  createCanvas(1000, 600);
  setInterval(addSec, 1000);
  inputh = createInput();
  inputh.position(300, 400);
  inputm = createInput();
  inputm.position(500, 400);
}

function draw() {
  background('#8bb3f4');
  fill('#fc4fe8');
  textAlign(CENTER);
  textSize(64);
  textStyle(BOLD);
  text(nf(hr, 2, 0) + ':' + nf(mint, 2, 0) + ':' + nf(sec, 2, 0), 500, 200);
  
  textSize(12);
  text("Set Alarm", 485, 375);
  text("Hours", 380, 390)
  text("Minutes", 580, 390)
  textSize(48)
  text(stopper, 475, 500)
}

function addSec() {
  sec++;
  if(sec >= 60) {
    sec = 0;
    mint++;
  }
  if(mint >= 60) {
    mint = 0;
    hr++;
  }
  if(hr >= 24) {
    window.location.reload();
  }
  if((hr == alarmh) && (mint == alarmm)) {
    alarmsound.duration(60);
    alarmsound.play();
    stopper = "Stop alarm by pressing enter!"
  }
}

function keyPressed() {
  if(keyCode == ENTER) {
    alarmh = int(inputh.value());
    alarmm = int(inputm.value());
    inputh.value('');
    inputm.value('');
    console.log(alarmh + ' ' + alarmm)
    stopper = ''
    alarmsound.stop()

  }
  
}

