let input = document.querySelector(".input");
let btnAdd = document.querySelector(".btnAdd");
let notification = document.querySelector(".notification");
let closeerror = document.querySelector(".closeerror");
let listat = document.querySelector(".listat");
let list = document.querySelector(".list");
let selected = [];
let notSelected = [];
let mood = 'add';
let temp;

//* create items

let items = [];

function createItems() {
  //* create object
  let newItem = {
    title: input.value,
  };
  if (mood === 'add') {
    if (input.value == "") {
      notification.classList.add("dclose");
      const closeNot = () => {
        notification.classList.remove("dclose");
      };
      closeerror.addEventListener("click", closeNot);
    } else {
      items.push(newItem);
    }
  } else {
    items[temp].title = newItem.title;

    mood = 'add';
    const btna = `ADD
    <i class="fa-solid fa-circle-plus"></i>
`
    btnAdd.innerHTML = btna;
  }

  clearInput();
  showItem();
}

//* show item
function showItem() {
  let list = "";
  for (let i = 0; i < items.length; i++) {
    const element = items[i].title;
    list += `
         <li class="list">
         <h5>${i}</h5>
         <h3>${element}</h3>
         <div class="btns">
             <!-- variables -->
             <button ><i onclick="selectItem(${i})" class=" validate fa-solid fa-circle-check "></i></button>
             <button ><i onclick="updateItem(${i})" class=" modItem fa-solid fa-pen"></i></button>
             <button ><i onclick="deletItem(${i})" class=" deletItem deletItem fa-solid fa-trash-can "></i></button>
         </div>
     </li>
         `;
    listat.innerHTML = list;
  }
}
//! clear input
function clearInput() {
  input.value = "";
}

//* delete items

function deletItem(i) {
  items.splice(i, 1);
  if (items.length == 0) {
    listat.innerHTML = "";
  }
  showItem();
}

//* update items

function updateItem(i) {
  input.value = items[i].title;
  btnAdd.innerHTML = "UPDATE";
  mood = 'update';
  temp = i;
 
}

//* select items




function selectItem(i){
list.classList.add("val");
  console.log(i);

  showItem(); 
}


btnAdd.addEventListener("click", createItems);
/* btnAdd.addEventListener("click", () => {
    let item = input.value;
    if (input.value == "") {
        notification.classList.add("dclose")
        const closeNot = () => {
            notification.classList.remove("dclose")
        }
        closeerror.addEventListener("click", closeNot)
    }
    else {     
        let listat = ""
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            listat.innerHTML += `
        <li class="list">
        <h5>${i}</h5>
        <h3>${item}</h3>
        <div class="btns">
            <!-- variables -->
            <button ><i class=" validate fa-solid fa-circle-check "></i></button>
            <button ><i class=" modItem fa-solid fa-pen"></i></button>
            <button ><i onclick="modif(${item})" class=" deletItem deletItem fa-solid fa-trash-can "></i></button>
        </div>
    </li>
        `; 
        }
       

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

/* 
document.addEventListener('click', function(ev) {
  if (ev.target.className.includes("validate") ) {
    ev.target.parentElement.parentElement.parentElement.classList.toggle('sele');
    selected.push(ev.target.parentElement.parentElement.parentElement);
    console.log(selected);
  }


});

function modif() {
alert("hello")
}
function delet() {

}

modItem.addEventListener("click",modif);
deletItem.addEventListener("click",delet);  */
