define(['ko'], function(ko) {
    function viewModel(task) {
        this.task = task;
        this.title = task.data.title;
        this.description = task.data.description;
        this.super = task.super;

        this.editTaskForm = function (task) {
            this.task.super.editTaskForm(this.task.data);
        };

        this.saveTask = function (form) {
            this.task.super.saveTask(this.task.data);
        };

        this.removeTask = function () {
            this.super.removeTask(this.task.data);
        };
    }

    return viewModel;
});