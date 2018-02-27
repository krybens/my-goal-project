define(['ko', 'koStore'], function (ko, store) {
    function viewModel() {
        this.categories = ko.observableArray([
            {
                id: 0,
                title: 'music',
                description: 'skils which i want to achieve in music'
            },
            {
                id: 1,
                title: 'material',
                description: 'my material position'
            }
        ]);
    }

    return viewModel;
});
