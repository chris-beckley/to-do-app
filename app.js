function onReady(){
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');


function createNewToDo(){
  const newToDoText = document.getElementById('newToDoText');
  if (!newToDoText.value) { return; }

  toDos.push({
    title: newToDoText.value,
    complete: false,
    id: id
  });

  id++;
  newToDoText.value = '';

  renderTheUI();
}

function renderTheUI(){
  const toDoList = document.getElementById('toDoList');

  toDoList.textContent = '';

  toDos.forEach(function(toDo){
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    const deleteButton = document.createElement('button');
    checkbox.type = "checkbox";
    deleteButton.textContent = "Delete";
    newLi.textContent = toDo.title;

    deleteButton.addEventListener('click' , event => {
      toDos = toDos.filter(function(item){
        return item.id !== toDo.id;
      });

      renderTheUI();

    });

    toDoList.appendChild(newLi);
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteButton);
  });
}



addToDoForm.addEventListener('submit' , event => {
  event.preventDefault();
  createNewToDo();
});

  renderTheUI();
}
window.onload = function() {
   onReady();
 };
