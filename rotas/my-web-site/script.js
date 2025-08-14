let imgMenu = document.getElementById('img-navbar-menu')
let siteNav = document.querySelector('.site-nav')
let nav = document.querySelector('.nav')
let controller = false

imgMenu.addEventListener('click', () => {
    console.log(siteNav.style.display)
    if (controller == false) {
        siteNav.style.display = "flex"
        controller = true

    } else {
        siteNav.style.display = "none"
        controller = false
    }
})

function openNav() {
if (window.innerWidth >= 1000) {
    siteNav.style.display = "flex"
    con
}else {
    siteNav.style.display = "none"
}
}

openNav()
window.addEventListener("resize", openNav)