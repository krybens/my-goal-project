define(['ko'], function(ko) {
    return {
        tasks: [
            {
                taskId: 0,
                title: 'aaaaaaaa',
                description: 'bbbbbbbbbb',
                categoryId: 0
            },
            {
                taskId: 1,
                title: 'cccccccc',
                description: 'ddddddddd',
                categoryId: 1
            },
            {
                taskId: 2,
                title: 'eeeeeee',
                description: 'gggggggg',
                categoryId: 1
            }
        ],

        currentState: ko.observable(this.tasks),

        setCurrentState: function(newState) {
           if (!newState) this.currentState(this.tasks);

            this.currentState(newState);
        },

        filterTasksByCategoryId: function(categoryId) {
            this.currentState(this.tasks.filter(function(task) {
                return task.categoryId == categoryId
            }));
        },

        saveTask: function(newTask) {
            var selectedTask = null,
                taskIndex;
            if (newTask.taskId && newTask.taskId <= this.tasks[this.tasks.length-1].taskId) {
                selectedTask = this.tasks.filter(function(item, index) {
                    if (item.taskId == newTask.taskId) taskIndex = index;
                    return item.taskId == newTask.taskId;
                });

                if (!selectedTask) {
                    this.tasks.push(newTask);
                    this.setCurrentState(this.tasks);
                }

                this.tasks[taskIndex] = newTask;
                this.setCurrentState(this.tasks);
            } else {
                newTask.taskId = ++this.tasks[this.tasks.length-1].taskId;
                this.tasks.push(newTask);
                this.setCurrentState(this.tasks);
            }
        }
    }
});