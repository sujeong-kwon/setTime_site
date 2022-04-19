'use strict'
//live watch
let t = null;

function startTime(){
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();
  let dates = today.getDate();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  // h = 12;
  // m = 51;
  s = checkTime(s);
  console.log(h, m, s);
  if( h == 12 && m > 49 || h == 13 && m <= 59 ){
    document.getElementById("img").style.animation = 'alarm 0.3s linear infinite both';
    document.getElementById("img").style.backgroundImage = 'url(./img/alarm-clock.png)';
    document.getElementById('txt').innerHTML = `<p>Let&acute;s Lunch Time!</p><p>${year}/0${month+1}/${dates}</p>${h}:${m}:${s}`;
    document.getElementById('txt').style.color = 'red';
  }else{
    document.getElementById("img").style.backgroundImage = 'url(./img/coding.png)';
    document.getElementById('txt').innerHTML = `<p>Coding Time!</p><p>${year}/0${month+1}/${dates}</p>${h}:${m}:${s}`;
  }
  t = setTimeout(startTime, 500);
}

function checkTime(i){
  if(i < 10){
    i = '0' + i;
  }
  return i;
}
