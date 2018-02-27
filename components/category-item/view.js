define(['ko'], function (ko) {
    function viewModel(category) {
        this.title = category.data.title;

        this.chooseCategory = function() {

        }
    }

    return viewModel;
});
