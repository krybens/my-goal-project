define(['jquery', 'ko', 'text!taskTemplate.html'], function($, ko, template) {
    return {
        model: {
            tasks: ko.observableArray([
                {
                    title: 'Play the guitar',
                    description: 'I want to play the guitar'
                },
                {
                    title: 'Money',
                    description: 'I want to get a lot of money'
                }
            ]),

            addTask: function() {
                var newTask = {title: 'new task', description: 'new description'};
                this.tasks.push(newTask);
            },

            removeTask: function($parent) {
                this.tasks.remove(task);
            }
        },

        init: function() {
            $("#content").html(template);
            ko.applyBindings(this.model);
        }
    }

});
