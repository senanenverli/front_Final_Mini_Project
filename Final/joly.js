const myDialogModal = document.querySelector("#dialogModal");
const myOpenModalBtn = document.querySelector("#openModalBtn");
const myCloseModalBtn = document.querySelector("#closeModalBtn");

if (myDialogModal) {
  myOpenModalBtn &&
    myOpenModalBtn.addEventListener("click",(e) =>{
        e.preventDefault();
        myDialogModal.showModal()
    });

  myCloseModalBtn &&
    myCloseModalBtn.addEventListener("click", (e) =>{
        e.preventDefault();
        myDialogModal.close()
    });
}
