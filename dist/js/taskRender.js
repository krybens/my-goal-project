define(['jquery', 'ko', 'text!taskTemplate.html', 'modal'], function ($, ko, template, modal) {
    function Model() {
        var self = this;

        function Task(task) {
            this.title = ko.observable();
            this.description = ko.observable();

            this.update(task);
        }

        Task.prototype.update = function (task) {
            if (task) {
                this.title(task.title || "new item");
                this.description(task.description || "description");
            } else {
                this.title("new item");
                this.description("description");
            }
        };

        this.tasks = [
            new Task({
                title: 'Play the guitar',
                description: 'I want to play the guitar'
            }),
            new Task({
                title: 'Money',
                description: 'I want to get a lot of money'
            })
        ];

        this.categories = ko.observableArray([
            {
                id: 0,
                title: 'music',
                description: 'skils which i want to achieve in music'
            },
            {
                id: 1,
                title: 'material',
                description: 'my material position'
            }
        ]);

        this.selectedTask = ko.observable();
        this.itemForEditing = ko.observable();

        this.addTaskForm = function () {
            self.itemForEditing(new Task());
            modal.addTaskForm();
        };

        this.editTaskForm = function (task) {
            self.selectedTask(task);
            self.itemForEditing(new Task(ko.toJS(task)));
            modal.addTaskForm();
        };

        this.saveTask = function (form) {
            var selected = self.selectedTask(),
                edited = ko.toJS(self.itemForEditing()); //clean copy of edited

            //apply updates from the edited item to the selected item
            if (selected) {
                selected.update(edited);
            } else {
                self.tasks.push(new Task(self.prepareForm($(form).serializeArray())));
            }

            //clear selected item
            self.selectedTask(null);
            self.itemForEditing(null);

            modal.closeDialog();
        };

        this.removeTask = function ($item) {
            self.tasks.remove($item);
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
