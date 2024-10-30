'use strict';

import ToDoList from '../15-task-object/main.js';


function extendedTaskList(priority, title, description = null) {
  const newToDoList = {
    tasks: [],
		lastId: 0
  }
	newToDoList.log = ToDoList.log;

  //Переиспользование методов
  const addTask = ToDoList.addTask.bind(newToDoList) 
  addTask(priority,title);
  if(description && typeof description === 'string' && description != '' ) {
    const index = newToDoList.tasks.length - 1;
    newToDoList.tasks[index].description = description;
    console.log('Это расширенный ToDo с описанием');
  } 

	//Прямое копирование остальных методов
	newToDoList.findById = ToDoList.findById;
	newToDoList.refreshTitleById = ToDoList.refreshTitleById;
	newToDoList.removeTasksById = ToDoList.removeTasksById;
  return newToDoList;
}


const extendedToDo = extendedTaskList(2, 'some','тест');
extendedToDo.refreshTitleById(1,'описание');
console.log(extendedToDo);
