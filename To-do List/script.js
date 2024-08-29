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
    const {name ,date} = todoObj; 
    const html = `
    <p>
      ${name}   ${date}
      <button onclick='todoList.splice(${i},1);displayTodo();'>
       Delete
      </button>

    </p>`;
    todoListHTML += html
  }
  console.log(todoListHTML);
  document.querySelector('.js-todo-row-input').innerHTML = todoListHTML
}


