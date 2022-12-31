// Handle Nav-links activate
const navItems = document.querySelectorAll('.nav-link')
console.log(navItems)
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(otherItem => {
      otherItem.classList.remove('nav-active')
    })
    item.classList.add('nav-active')
  })
});

// Mobile Nav Menu
let navOpen = false
const mobileMenu = document.querySelector('#mobile-menu')
const menuIcon = document.querySelector('.menu-icon i')
document.querySelector('#nav-toggle').addEventListener('click', ()=> {
  if (!navOpen) {
    mobileMenu.style.left = 0
    navOpen = true
    menuIcon.classList.remove('fa-bars')
    menuIcon.classList.add('fa-chevron-left')
  } else {
    mobileMenu.style.left = '-300px'
    navOpen = false
    menuIcon.classList.remove('fa-chevron-left')
    menuIcon.classList.add('fa-bars')
  }
})

// Hero Section Parallax
// const parallax = document.getElementById('hero-section')
// window.addEventListener('scroll', ()=> {
//   let offset = window.scrollY
//   parallax.style.backgroundPositionY = offset * 0.7 + 'px'
// })