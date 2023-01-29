const sec = document.querySelectorAll("section");
const nav = document.querySelectorAll(".nav_item");

function activeMenu(){
    let len = sec.length;
    while(--len && window.scrollY + 100 <sec[len].offsetTop){}
    nav.forEach(nav => nav.classList.remove("active"));
    nav[len].classList.add("active");
}
activeMenu
window.addEventListener("scroll", activeMenu);