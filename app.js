function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
      event.preventDefault();

    // get the text
   let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // make delete button
    let button = document.createElement('button')

    // label button
    button.textContent = "Delete";

    // delete item




    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // render delete button
    newLi.appendChild(button);

    //empty the input
   newToDoText.value = '';
  });
}

window.onload = function() {
   onReady();
 };
