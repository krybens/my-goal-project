define(['ko', 'text!components/category-list/template.html', 'components/category-list/view'], function(ko) {
    ko.components.register('categories-list', {
        viewModel: require('components/category-list/view'),
        template: require('text!components/category-list/template.html')
    });
});