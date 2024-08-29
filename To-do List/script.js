todoList= [] ; 


function addTodo() {
  const inputElement = document.querySelector('.js-input').value;
  const inputDate = document.querySelector('.js-date').value;
  const inputObject = {name:inputElement,date:inputDate};
  todoList.push(inputObject);
  displayTodo();
}

function displayTodo() {
  let todoListHTML = ''
  for (let i =0 ; i <todoList.length ; i++) {
    let tasksObj = todoList[i];
    const {name ,date} = tasksObj; 
    const html = 
    <div>${name}</div>
    <div>${date}</div>
    <button onclick='todoList.splice(${i},1);displayTodo();'>
      Delete
    </button>
    ;
    todoListHTML += html
  }
  console.log(todoListHTML);
  document.querySelector('.js-todo-row-input').innerHTML = todoListHTML
}
