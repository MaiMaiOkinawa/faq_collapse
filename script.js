const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active')
  })
})



// My first go
// const buttons = document.querySelectorAll('.faq-toggle')

// buttons.forEach((button) => {
//   parentNode.addEvenListener('click', (e) => {
//     button.classList.taggle()
//   })
// })