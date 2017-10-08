define(['jquery', 'jquery-ui'], function($) {
    function Modal() {
        this.addTaskForm = function() {
            $('.add-task-form').dialog();
        };

        this.closeDialog = function() {
            $('.add-task-form').dialog("close");
        };
    }

    return new Modal();
});