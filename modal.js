const modalContainer = document.querySelector('.modal-container');
const btn = document.querySelectorAll('.btn');
const btnClose = document.querySelector('.btnClose');


const stateModal = () => modalContainer.classList.add('show')
const setModal = () => modalContainer.classList.remove('show')

for(let i = 0;i < btn.length; i++) btn[i].addEventListener('click',stateModal)
btnClose.addEventListener('click', setModal)

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && modalContainer.classList.contains('show')){
        setModal();
        console.log(e);
    }
})

