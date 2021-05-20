$(document).ready(function(){
$(window).scroll(function(){
  if(this.scrollY > 20){
    $('.navbar1').addClass("sticky")
  }
  else{
    $('.navbar1').removeClass("sticky")
  }
})

$('.menu-btn').click(function(){
  $('.navbar1 .menu').toggleClass('active');
  $('.menu-btn i').toggleClass('active');
})

});


// letm launchDate = new Date("Jan 28, 2020 12:00:00").getTime();
// let timer = setInterval(tick, 1000);
//
// function tick() {
//   let now = new Date().getTime();
//
//   let t = launchdate - now;
//
//   if(t>0){
//     let days = Math.floor(t/(1000*60*60*24));
//
//  if(days<10){
//    days="0" + days;
//  }
//
// let hours = Math.floor((t%(1000*60*60*24))/(1000*60*60))
//
//  if(hours<10){hours = "0" + hours;}
//
// let mins = Math.floor((t%(1000*60*60))/(1000*60))
// if(mins<10){mins = "0" + mins;}
//
// let secs = Math.floor((t%(1000*60))/1000);
// if(secs<10){secs = "0" + secs;}
//
// let time = '${days} : ${hours} : ${mins} : ${secs}';
//
//
// document.querySelector('.countdown').innertext = time;
//
//
//   }
//
// }


var typed = new typed(".typing",{
  strings: ["Student","FreeLancer","Blogger"],
  typespeed: 100,
  backspeed: 60,
  loop: true
});


const option = {
  bottom: '64px', // default: '32px'
right: '32px', // default: '32px'
left: 'unset', // default: 'unset'
time: '0.5s', // default: '0.3s'
mixColor: '#fff', // default: '#fff'
backgroundColor: '#fff',  // default: '#fff'
buttonColorDark: '#100f2c',  // default: '#100f2c'
buttonColorLight: '#fff', // default: '#fff'
saveInCookies: false, // default: true,
label: '🌓', // default: ''
autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();
