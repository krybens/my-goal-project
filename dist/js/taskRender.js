define(['jquery', 'ko', 'text!taskTemplate.html', 'modal'], function($, ko, template, modal) {
    function Model() {
        var self = this;

        this.tasks = ko.observableArray([
            new Task({
                title: 'Play the guitar',
                description: 'I want to play the guitar'
            }),
            new Task({
                title: 'Money',
                description: 'I want to get a lot of money'
            })
        ]);

        function Task(task) {
            this.title = ko.observable(task.title);
            this.description = ko.observable(task.description);
        }

        this.newTask = ko.observable(new Task(""));

        this.addTaskForm = function() {
            modal.addTaskForm();
        };

        this.editTaskForm = function(task) {
            self.newTask(task);
            modal.addTaskForm();

        };

        this.editTask = function() {

        };

        this.saveTask = function(form) {
            self.tasks.push(new Task({title: form}));
            self.newTask(new Task(""));
        };

        this.removeTask = function($item) {
            self.tasks.remove($item);
        }

    }

    return {
        init: function() {
            $("#content").html(template);
            ko.applyBindings(new Model());
        }
    }

});
