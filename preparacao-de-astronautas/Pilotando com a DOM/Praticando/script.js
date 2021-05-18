let buttonOpenModal = document.querySelector('#openModal');
let modalWrapper = document.querySelector('.modal-wrapper');

/* buttonOpenModal.onclick = function() {
  modalWrapper
    .classList
    .remove('invisible')
} */

buttonOpenModal.addEventListener('click', function() {
  modalWrapper
    .classList
    .remove('invisible')
});

document.addEventListener('keydown', function(event) {
  const isKeyEsc = event.key === 'Escape';

  if(isKeyEsc) {
    modalWrapper.classList.add('invisible')
  }
})
