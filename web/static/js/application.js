var menu_start = document.getElementById("menu"),
    menu_stick = "submenu-stick",
    main_stick = "main-stick",
    header = document.getElementsByClassName("top-bg-container")[0],
    main = document.getElementById("main"),
    top_style = window.getComputedStyle(header),
    header = parseInt(top_style.getPropertyValue('height'))

window.addEventListener("scroll", function(e) {
  if( window.scrollY > header) {
    addClass(menu_start, menu_stick)
    addClass(main, main_stick)
  } else {
    removeClass(menu_start, menu_stick)
    removeClass(main, main_stick)
  }
})

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}
