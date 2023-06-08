let input = document.querySelector(".input");
let btnAdd = document.querySelector(".btnAdd");
let notification = document.querySelector(".notification");
let closeerror = document.querySelector(".closeerror");
let listat = document.querySelector(".listat");
let items = [];
let selected = [];
let notSelected = [];




btnAdd.addEventListener("click", () => {
    let item = input.value;
    if (input.value == "") {
        notification.classList.add("dclose")
        const closeNot = () => {
            notification.classList.remove("dclose")
        }
        closeerror.addEventListener("click", closeNot)
    }
    else {     
        listat.innerHTML += `
        <li class="list">
        <h3>${item}</h3>
        <div class="btns">
            <!-- variables -->
            <button ><i class=" validate fa-solid fa-circle-check "></i></button>
            <button ><i class=" modItem fa-solid fa-pen"></i></button>
            <button ><i class=" deletItem deletItem fa-solid fa-trash-can "></i></button>
        </div>
    </li>
        `;

        input.value = "";
        items.push(item);
        console.log(items);



    }



})

let validate = document.querySelectorAll(".validate");
let modItem = document.querySelector(".modItem");
let deletItem = document.querySelector(".deletItem");
let list = document.querySelectorAll(".list");

function select() {
   alert("hello")
}


document.addEventListener('click', function(ev) {
  if (ev.target.className.includes("validate") ) {
    ev.target.parentElement.parentElement.parentElement.classList.toggle('sele');
    selected.push(ev.target.parentElement.parentElement.parentElement);
    console.log(selected);
  }

  console.log(ev.target);
});

/* function modif() {

}
function delet() {

}

modItem.addEventListener("click",modif);
deletItem.addEventListener("click",delet); */