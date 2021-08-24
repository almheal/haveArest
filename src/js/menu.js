const button = document.querySelector('.burger__menu')

button.addEventListener('click', openModalMenu)

function openModalMenu() {
  const modal = document.querySelector('.menu__modal')
  const body = document.querySelector('body')
  body.classList.toggle('overflow')
  modal.classList.toggle('show')
  this.classList.toggle('active')
}
