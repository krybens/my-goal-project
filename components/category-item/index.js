define(['ko', 'components/category-item/view', 'text!components/category-item/template.html'], function(ko) {
    ko.components.register('categories-item', {
        viewModel: require('components/category-item/view'),
        template: require('text!components/category-item/template.html')
    });
});