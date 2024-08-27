const checkBox = document.querySelector('.form-check-input[type="checkbox"]');
const navSection = document.querySelector("#navSection");
const navBar = document.querySelector(".nav");
const navLi = document.querySelectorAll(".navLi");
const LinkIcon = document.querySelectorAll(".link-Icons");
const skillCards = document.querySelector("#Skills");
const me = document.querySelector("#me");
const myPic = document.querySelector("#myPic");
const follower = document.querySelector("#mouseFollower");
const bentoContainer = document.querySelector("#bentoContainer");
const bgGrid = document.querySelector("#bg-grid");
const hamburger = document.querySelector("#hamburger");
const contactContainer = document.querySelector("#contactContainer");
const cover_up = document.querySelector("#up");
const cover_down = document.querySelector("#down");
const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
const binary = ['0000','0001','007','47','0010','0011','0100','0101','0110','0111','1000','1001','1010']
let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;





// *=================Mouse=Follower=================


window.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  follower.style.left = x +5 + "px";
  follower.style.top = y + 10 + "px";
  
  let index = Math.floor(Math.random()*10);
  follower.innerHTML = binary[index];
})


// *=================Array=of=skills==============
let SkillIcons = [
  "./media/html.png",
  "./media/css.png",
  "./media/bootstrap.png",
  "./media/git.png",
  "./media/js.png",
  "./media/python.webp",
  
]


// *================Nav=Scroll=Effect================
let defaultpos = 0;

window.addEventListener("scroll", () => {
  let Scrollvalue = window.scrollY
  if (Scrollvalue > defaultpos && Scrollvalue > 125) {
    navSection.classList.add("up");
  } else {
    navSection.classList.remove("up");
  }
  bgGrid.style.backgroundPositionY = `-${parseInt(Scrollvalue/10)}px`;
  
  defaultpos = Scrollvalue;
});

// *=================Array=of=skills=display=============
( () => {
  SkillIcons.forEach((e) => {
    skillCards.innerHTML += `<div class="techSkills"><img class="techIcons" src="${e}" alt="" /></div>`
  })
} ) ()

const techSkills = document.querySelectorAll(".techSkills");


// *=================Dark=Mode================

if(isDarkTheme)
{
  checkBox.checked = true;
  darkmode_on();
}


function darkmode_on()
{
  navBar.classList.toggle("darkMode");
  hamburger.classList.toggle("darkMode");
  hamburger.classList.toggle('invert');
  document.body.classList.toggle("darkMode");
  LinkIcon.forEach((e) => {
    e.classList.toggle('invert')
  })
}

checkBox.addEventListener("change", () => {
  darkmode_on()
});


// *=================Intersection=Observer=animations===============

function onscreen_id_check(entry)
{
  if(entry.target.id == "myPic")
    {
      entry.target.classList.add("animate-myPic-onScroll");
      me.classList.add("animate-me-onScroll");
    }
    else if(entry.target.id == "bentoContainer")
    {
      entry.target.children[0].classList.add("openLid");
    }
    else if(entry.target.id == "contactContainer")
    {
      cover_up.classList.add('open_cover_up');
      cover_down.classList.add('open_cover_down');
    }
}

function exit_id_check(entry)
{
  if(entry.target.id == "myPic")
    {
      entry.target.classList.remove("animate-myPic-onScroll","hide");
      me.classList.remove("animate-me-onScroll", "hide");
    }
    else if(entry.target.id == "bentoContainer")
    {
      entry.target.children[0].classList.remove("openLid");
    }
    else if(entry.target.id == "contactContainer")
    {
      cover_up.classList.remove('open_cover_up');
      cover_down.classList.remove('open_cover_down');
    }
}


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      onscreen_id_check(entry)
    }
    else{
        exit_id_check(entry)
    }
  })
}, {
  rootMargin:"10px",
  // threshold: 1,
})  

if(width >= 600)
{
  observer.observe(myPic)
  observer.observe(bentoContainer)
  observer.observe(contactContainer)
}



// techSkills.forEach((e) => observer.observe(e))



