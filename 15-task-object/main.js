'use strict';

const ToDoList = {
    tasks: [],
		lastId: 0,
    findById(id) {
        const task = this.tasks.find(el => el.id === id);
					if(!task) {
					this.log(`задача с ${id} не найдена`)
					}
			return task;
    },
    addTask(priority, title) {
			//#region old
      // if(priority && title) {
      //   const id = this.tasks.length + 1;
      //   this.tasks.push(
      //       {
      //           id,
      //           priority,
      //           title
      //       }
      //   )
      //   console.log(`Новая задача добавлена.\nВаши задачи: ${this.tasks.map(el => el.title).join(', ')}`);
      // } else {
      //   console.log('Заполните приоритетность или добавьте название задачи.');
      // }
			//#endregion
    if(!title){
        this.log(`Название задачи не может быть пустым`);
        return;
    }
    if(!priority){
        this.log(`Приоритет задачи не может быть пустым`);
        return;
    }
    
      this.tasks.push({
        id: ++this.lastId,
        priority,
        title,
      });
        this.log(
        `Новая задача добавлена.\nВаши задачи: ${this.tasks
          .map((el) => el.title)
          .join(", ")}`
      );
    },
    removeTasksById(id) {
			//#region oldCode
        // const index = this.findById(id);
        // if(index !== -1) {
        //     this.tasks.slice(index, 1);
        //     console.log(`Задача с id: ${id} успешно удалена.`);
        // }else {
        //     console.log(`Задачи с таким: ${id} не существует.`);
        // }
				//#endregion
				const task = this.findById(id);
				if (task) {
					this.tasks = this.tasks.filter(f => f.id !== id)
					this.log(`Задача с id: ${id} успешно удалена.`);
				} 
				return this;
    },
    sortTasksByPriority() {
        this.tasks.sort((a,b) => a.priority - b.priority );
        this.log('Ваш ToDoList отсортирован по приоритетности.');
    },
    refreshTitleById(id, title) {
        const task = this.findById(id);
        if(task) {
            // const oldTitle = this.tasks[index].title;
						const oldTitle = task.title;
            // this.tasks[index].title = title;
						this.tasks.map(el => el === task).title = title;
    
            console.log(`Ваша задача с id: ${id} - ${oldTitle} изменена на ${title}`);
        }else {
            console.log(`Задачи с таким: ${id} не существует.`);
        }
    },
		log(message){
			console.log(`${Date.now()}: ${message}`);
		}
}

ToDoList.addTask(2,'something');
console.log(ToDoList.tasks);

export default ToDoList;