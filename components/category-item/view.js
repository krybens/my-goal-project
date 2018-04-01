define(['ko', 'model/tasks'], function (ko, tasksModel) {
    function viewModel(category) {
        this.title = category.data.title;
        this.id = category.data.id;

        this.chooseCategory = function(categoryItem) {
            tasksModel.filterTasksByCategoryId(categoryItem.id);
        }
    }

    return viewModel;
});
