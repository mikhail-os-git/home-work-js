'use strict';

const ToDoList = {
    tasks: [
        {
            id: 1,
            priority: 1,
            title: 'Example'
        }
    ],
    findById(id) {
        return this.tasks.findIndex(el => el.id === id);
    },
    addTask(priority, title) {
      if(priority && title) {
        const id = this.tasks.length + 1;
        this.tasks.push(
            {
                id,
                priority,
                title
            }
        )
        console.log(`Новая задача добавлена.\nВаши задачи: ${this.tasks.map(el => el.title).join(', ')}`);
      } else {
        console.log('Заполните приоритетность или добавьте название задачи.');
      }
        
    },
    removeTasksById(id) {
        const index = this.findById(id);
        if(index !== -1) {
            this.tasks.slice(index, 1);
            console.log(`Задача с id: ${id} успешно удалена.`);
        }else {
            console.log(`Задачи с таким: ${id} не существует.`);
        }
    },
    sortTasksByPriority() {
        this.tasks.sort((a,b) => a.priority - b.priority );
        console.log('Ваш ToDoList отсортирован по приоритетности.');
    },
    refreshTitleById(id, title) {
        const index = this.findById(id);
        if(index  !== -1 ) {
            const oldTitle = this.tasks[index].title;
            this.tasks[index].title = title;
    
            console.log(`Ваша задача с id: ${id} - ${oldTitle} изменена на ${title}`);
        }else {
            console.log(`Задачи с таким: ${id} не существует.`);
        }
    }
}

ToDoList.addTask(2,'something');
console.log(ToDoList.tasks);
