/* ---- SELECTING FROM HTML ---- */
const alert = document.querySelector('.alert');
const form = document.querySelector('.tasks-form');
const input = document.querySelector('#input-task'); 
const submitBtn = document.querySelector('#btn-task');
const container = document.querySelector('.tasks');
const list = document.querySelector('.tasks-list');
const clearBtn = document.querySelector('.clear-btn');

//variables to edit items
let editElement;
let editFlag = false;
let editID = '';

/* ---- ADD EVENT LISTENERS ---- */

//submit form
form.addEventListener('submit', addItem);
form.addEventListener('keypress', submitEnter);

//clear all the values
clearBtn.addEventListener('click', clearItems);

/* ---- FUNCTIONS ---- */

function addItem(e) {

    e.preventDefault();
    const value = input.value;
    const id = new Date().getTime().toString();
    // the id value is some random number just to set it and don't take more than 1 element with the same id, it was used the Date method so I don't needed to handle with float numbers

    if(value && !editFlag) {
        
        const element = document.createElement('article');
        element.classList.add('task-item');
    
        //add id
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
            <!-- edit btn -->
            <button type="button" class="edit-btn">*</button>
            <!-- delete btn -->
            <button type="button" class="delete-btn">-</button>
        </div>`;

        //create event listener to edit items (created here because previously these elements weren't available, so an error message could appear at the console if were setted before)
        const deleteBtn = element.querySelector('.delete-btn');
        const editBtn = element.querySelector('.edit-btn');
        deleteBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem);

        // add element to the list
        list.appendChild(element);

        //show alert after send item
        displayAlert('item added sucessfully', 'success');

        //show container
        container.classList.add('show-tasks');

        //set back to default
        setBackToDefault();

    }else if(value && editFlag){
        editElement.innerHTML = value;
        displayAlert('value changed', 'success');

        setBackToDefault();

    }else {
        displayAlert('please enter value', 'danger');
    }  
}

function submitEnter(e) {

    if(e.keyCode === 13) {

        if(!input.value) {
            displayAlert('you need to write something', 'danger');
        }
        addItem(e);
        setBackToDefault();
    }

}

function displayAlert(text,action) {

    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    //remove alert from the screen
    setTimeout(function(){
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}

function clearItems() {

    const items = document.querySelectorAll('.task-list');

    if(items.length > 0) {
        items.forEach(function(item){
            list.removeChild(item);
        })
    };

    container.classList.remove('show-tasks');
    displayAlert('empty list', 'success');
    setBackToDefault();

}

function deleteItem(e) {

    const element = e.currentTarget.parentElement.parentElement; //to take the hole div, not only de btn just clicked
    const id = element.dataset.id;

    list.removeChild(element);

    if(list.children.length === 0) {
        container.classList.remove('show-tasks');
    }

    displayAlert('item removed', 'danger');
    setBackToDefault();

}

function editItem(e) {

    const element = e.currentTarget.parentElement.parentElement; 
    //to take the hole div, not only de btn just clicked

    //set edit item => ElementSibling is the 'p' item of the article
    editElement = e.currentTarget.parentElement.previousElementSibling;

    //set form value
    input.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "...";

}

function setBackToDefault() {

    input.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "+";

}