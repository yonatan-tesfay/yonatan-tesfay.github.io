
let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let themeToggler = document.querySelector('#theme-toggler');
let currentTheme=localStorage.getItem('currentTheme');
if(currentTheme)document.body.classList.add(currentTheme);
themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    document.body.classList.toggle('active');
    if(document.body.classList.contains('active')){
       localStorage.setItem('currentTheme','active');
    }else{
       localStorage.removeItem('currentTheme');
    }
}
var options = {
    strings: ['', 'Problem Solver','Web Developer','UI Designer','Critical Thinker'],
    typeSpeed: 80,loop:true
  };
   var typed = new Typed('.type', options);

const accordion=document.getElementsByClassName('contentBx')
for(i=0;i<accordion.length;i++){
    accordion[i].addEventListener('click',function(){
        for (j= 0;j<accordion.length;j++) { 
            if(j==i)continue;  
            accordion[j].classList.toggle('active', false);
         }
         this.classList.toggle('active');
    });
}

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "yoni.yrk@gmail.com",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
