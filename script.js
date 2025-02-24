function changecol(ele) {
    let a = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);
    let c = Math.ceil(Math.random() * 255);
    ele.style.background = `rgb(${a},${b},${c})`;
}
const navbar = document.getElementById("navbar");
navbar.addEventListener("mouseover",function(){
    changecol(navbar);
})

let last=0;
window.addEventListener("scroll",function(){
    let now = Math.floor(window.scrollY/100)*100; 
    if (now !== last) { 
        changecol(navbar);
        last = now; 
    }
});