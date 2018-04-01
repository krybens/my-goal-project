define(['ko', 'model/categories'], function (ko, categoriesModel) {
    function viewModel() {
        this.categories = ko.observableArray(categoriesModel.categories);
    }

    return viewModel;
});
