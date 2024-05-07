const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('#msg');
const userList = document.querySelector('#users');

myForm.addEventListener('sumbit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        msg.innerHTML = 'Please enter fields';

        setTimeout(() => msg.remove(),3000);
    } else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNodel('$ {nameInput.value} : ${emailInput.value}'));
    userList.appendChild(li);
    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
    }

}