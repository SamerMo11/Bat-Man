let images = document.getElementById('images');
let screens = document.getElementById('screens');
let mainimg = document.getElementById('main-img');
let wall = document.getElementById('wall');
let screen = document.getElementById('screen');
let games = document.getElementById('games');
let gaming = document.getElementById('gaming');


wall.addEventListener('click', function(){
    images.style.display='flex';
    screens.style.display='none';
    gaming.style.display='none';
    this.style.background='#2596be';
    this.style.color='#171717';
    screen.style.background='#171717';
    screen.style.color='#2596be';
    games.style.background='#171717';
    games.style.color='#2596be';
})
screen.addEventListener('click', function(){
    images.style.display='none';
    gaming.style.display='none';
    screens.style.display='flex';
    this.style.background='#2596be';
    this.style.color='#171717';
    wall.style.background='#171717';
    wall.style.color='#2596be';
    games.style.background='#171717';
    games.style.color='#2596be';
})
games.addEventListener('click', function(){
    images.style.display='none';
    screens.style.display='none';
    gaming.style.display='flex';
    this.style.background='#2596be';
    this.style.color='#171717';
    wall.style.background='#171717';
    wall.style.color='#2596be';
    screen.style.background='#171717';
    screen.style.color='#2596be';
})


window.addEventListener('scroll',reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length ; i++){

    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 0;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}