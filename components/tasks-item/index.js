define(['ko'], function(ko) {
    ko.components.register('task-item', {
        viewModel: {require: 'components/tasks-item/view'},
        template: {require: 'text!components/tasks-item/template.html'}
    });
});
