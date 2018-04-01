define(['jquery', 'ko', 'dist/js/modal', 'model/tasks', 'model/categories'], function ($, ko, modal, tasksModel, categoriesModel) {
    function Model() {
        var self = this;

        function Task(task) {
            this.title = ko.observable();
            this.description = ko.observable();
            this.categoryId = null;
            this.taskId = null;
        }

        this.tasks = ko.observable(tasksModel.tasks);

        tasksModel.currentState.subscribe(function(newValue) {
            self.tasks(newValue);
        });


        this.categoriesList = ko.observable(categoriesModel.categories);

        this.selectedTask = ko.observable();
        this.itemForEditing = ko.observable();

        this.editTaskForm = function (task) {
            self.selectedTask(task);
            self.itemForEditing(ko.toJS(task));
            modal.addTaskForm();
        };

        this.saveTask = function (form) {
            var self = this;
                selected = self.selectedTask(),
                edited = ko.toJS(self.itemForEditing()); //clean copy of edited

            //apply updates from the edited item to the selected item
            tasksModel.saveTask(self.prepareForm($(form).serializeArray()));

            //clear selected item
            self.selectedTask(null);
            self.itemForEditing(null);

            modal.closeDialog();
        };

        this.removeTask = function (item) {
            self.tasks.remove(item);
        };

        this.updateTask = function (task, selectedTask) {
            if (task) {
                selectedTask.title(task.title || "new item");
                selectedTask.description(task.description || "description");
                selectedTask.categoryId = task.categoryId;
                selectedTask.taskId = task.categoryId;
            } else {
                this.title("new item");
                this.description("description");
            }
        };

        //todo: to make separate component

        this.addTaskForm = function () {
            self.itemForEditing(new Task());
            modal.addTaskForm();
        };

        this.prepareForm = function (form) {
            var obj = {};

            form.forEach(function (item) {
                obj[item.name] = item.value;
            });

            return obj;
        }
    }

    return Model;

});
