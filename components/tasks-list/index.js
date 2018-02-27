define(['ko'], function(ko) {
    ko.components.register('task-list', {
        viewModel: {require: 'components/tasks-list/view'},
        template: {require: 'text!components/tasks-list/template.html'}
    });
});
