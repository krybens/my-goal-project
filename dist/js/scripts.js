require(['ko'], function(ko) {
	//taskRender.init();

	ko.components.register('task-list', {
		viewModel: {require: 'taskRender'},
		template: {require: 'text!taskTemplate.html'}
	});

	ko.components.register('category-item', {
		viewModel: function(item) {
			this.title = item.data.title;
		},
		template: '<div data-bind="text: title"></div>'
	});


	ko.components.register('categories-list', {
		viewModel: function() {
			this.categories = [
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
			]
		},
		template: '<div data-bind="foreach: categories "> ' +
		'<category-item params="data: $data"></category-item>' +
		'</div>'
	});

	ko.applyBindings();

	var categories = ko.observableArray([
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

});