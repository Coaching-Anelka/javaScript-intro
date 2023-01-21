const form = document.querySelector(".form-data");
console.log(form);

const submit = document.querySelector('.submit');
console.log(submit)

const screen = document.getElementById('screen');
const Vname = document.querySelector('#name');

// console.log(screen)



//Add event listeners

// submit.addEventListener('name of event', callbackFunction)
submit.addEventListener('click', submitFunction);
Vname.addEventListener('keydown', typeFunction)
function submitFunction(e) {
    e.preventDefault();
    console.log("Form submited, successfully")
    screen.innerHTML = Vname.value
}



function typeFunction(e) {
    console.log("key pressed");
    console.log(e.target.value)
}

// console.log(document.body)

const theme = document.querySelector('.theme');
theme.addEventListener('click', toggleThemeFunc)

function toggleThemeFunc() {
    const body = document.body;

    body.classList.toggle('dark')
}
