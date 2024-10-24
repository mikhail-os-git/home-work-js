import ToDoList from '../15-task-object/main.js';

function extendedTaskList(priority, title, description = null) {
  const newToDoList = {
    tasks: [],
  }

  //Переиспользование функции
  const addTask = ToDoList.addTask.bind(newToDoList) 
  addTask(priority,title);
  if(description && typeof description === 'string' && description != '' ) {
    const index = newToDoList.tasks.length - 1;
    newToDoList.tasks[index].description = description;
    console.log('Это расширенный ToDo с описанием');
  } 
  return newToDoList;
}

const extendedToDo = extendedTaskList(2, 'some','тест');
console.log(extendedToDo.tasks[extendedToDo.tasks.length - 1]);

