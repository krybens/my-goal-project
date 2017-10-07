define(['jquery', 'jquery-ui'], function($) {
    function Modal() {
        this.addTaskForm = function() {
            $('.add-task-form').dialog();
        };
    }

    return new Modal();
});