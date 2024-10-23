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
    addTask(id, priority, titleText) {

        const isExisting = this.findById(id) === -1;
        if(isExisting) {
            this.tasks.push(
                {
                    id,
                    priority,
                    title: titleText
                }
            )
            console.log('Новая задача добавлена.');
            console.log(`Ваши задачи: ${this.tasks.map(el => el.title).join(', ')}`);
        }
        else {
            console.log(`Задачи с таким id: ${id} уже существует.`);
        }
    },
    removeTasksById(id) {
        const index = this.findById(id);
        if(index != -1) {
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
    refreshTitleById(id, titleText) {
        const index = this.findById(id);
        if(index  !== -1 ) {
            const oldTitle = this.tasks[index].title;
            this.tasks[index].title = titleText;
    
            console.log(`Ваша задача с id: ${id} - ${oldTitle} изменена на ${titleText}`);
        }else {
            console.log(`Задачи с таким: ${id} не существует.`);
        }
        
    }
}

ToDoList.addTask(2,3,'blabla');

ToDoList.refreshTitleById(2,'something');