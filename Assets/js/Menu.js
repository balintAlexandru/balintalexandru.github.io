const links = document.querySelectorAll(".scroll_to");
links.forEach((item) => {
    item.addEventListener("click", () => {
        const el = document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView({behavior:"smooth", block:"start"})
    })
})

window.addEventListener('resize', function() {
    var width = window.innerWidth;
    if(width > 900){
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});
const menu = document.querySelector(".nav-list");
const btn = document.querySelector(".fa-bars");
var width = window.innerWidth;
    if(width > 900){
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
btn.onclick = () => {
    if(menu.style.display !== "none"){
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
};

const home = document.querySelector("#home");
const projects = document.querySelector("#projects");
const aboutMe = document.querySelector("#aboutMe");
const contact = document.querySelector("#contact");
home.addEventListener("click", ()=>{
    var width = window.innerWidth;
    if(width < 900){
        menu.style.display = "none";
    }
    home.style.color = "#b62430";
    projects.style.color = "rgb(221, 219, 219)";
    aboutMe.style.color = "rgb(221, 219, 219)";
    contact.style.color = "rgb(221, 219, 219)";
})
projects.addEventListener("click", ()=>{
    var width = window.innerWidth;
    if(width < 900){
        menu.style.display = "none";
    }
    home.style.color = "rgb(221, 219, 219)";
    projects.style.color = "#b62430";
    aboutMe.style.color = "rgb(221, 219, 219)";
    contact.style.color = "rgb(221, 219, 219)";
})
aboutMe.addEventListener("click", ()=>{
    var width = window.innerWidth;
    if(width < 900){
        menu.style.display = "none";
    }
    home.style.color = "rgb(221, 219, 219)";
    projects.style.color = "rgb(221, 219, 219)";
    aboutMe.style.color = "#b62430";
    contact.style.color = "rgb(221, 219, 219)";
})
contact.addEventListener("click", ()=>{
    var width = window.innerWidth;
    if(width < 900){
        menu.style.display = "none";
    }
    home.style.color = "rgb(221, 219, 219)";
    projects.style.color = "rgb(221, 219, 219)";
    aboutMe.style.color = "rgb(221, 219, 219)";
    contact.style.color = "#b62430";
})
