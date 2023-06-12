let input = document.querySelector(".input");
let btnAdd = document.querySelector(".btnAdd");
let notification = document.querySelector(".notification");
let closeerror = document.querySelector(".closeerror");
let listat = document.querySelector(".listat");
let lista = document.querySelector(".list");
let btnSelect = document.querySelector(".select");
let mood = "add";
let temp;
input.addEventListener("keyup", (e) => {
    if (e.keyCode == 13) {
        createItems();
    }
})
//* create items

let items = [];

function createItems() {
    //* create object
    let newItem = {
        title: input.value,
    };
    if (mood === "add") {
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
        mood = "add";
        const btna = `ADD
    <i class="fa-solid fa-circle-plus"></i>
`;
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

//* select items

let sel = [];
let notSel = [];
function selectItem(i) {
    let liste = listat.children[i];
    liste.classList.toggle("val");
    if (liste.className.includes("val")) {
        notSel.splice(i, 1)
        sel.push(liste)
        console.log(sel);
    } else {
        liste.classList.toggle("not_val");
        sel.splice(i, 1)
        notSel.push(liste);
        console.log(notSel);

    }
}
btnSelect.addEventListener("change", (e) => {
    let targetSelect = e.target.value;
    console.log(targetSelect);
   

    if (targetSelect == "selected") {
        for (let i = 0; i < sel.length; i++) {
            const elem = sel[i];
            console.log(elem);

        }

    }
    else if (targetSelect == "notSelected") {

        for (let i = 0; i < sel.length; i++) {
            const elemn = notSel[i];
            console.log(elemn);
        }

    }
    else {
        showItem();
    }
});



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
    mood = "update";
    temp = i;
}

btnAdd.addEventListener("click", createItems);
