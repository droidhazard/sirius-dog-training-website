// Handle Nav-links activate
const navItems = document.querySelectorAll('.nav-link')
console.log(navItems)
navItems.forEach(item => {
  item.addEventListener('click', ()=> {
    navItems.forEach(otherItem => {
      otherItem.classList.remove('nav-active')
    })
    item.classList.add('nav-active')
  })
});