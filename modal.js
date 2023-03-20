const modalContainer = document.querySelector('.modal-container');
const btn = document.querySelectorAll('.btn');
const btnClose = document.querySelector('.btnClose');


const stateModal = () => modalContainer.classList.add('show')
const setModal = () => modalContainer.classList.remove('show')
for(let i = 0;i < btn.length; i++) btn[i].addEventListener('click',stateModal)
btnClose.addEventListener('click', setModal)
const closeKey = (e) => e.key === 'Escape' && modalContainer.classList.contains('show') && setModal()
document.addEventListener('keydown', closeKey)

 