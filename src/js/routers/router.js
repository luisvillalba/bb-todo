define([
'backbone'
],
    function (Backbone) {
        var Workspace = Backbone.Router.extend({
            routes: {
                '*filter': 'setFilter'
            },

            setFilter: function (param) {
                // Set the current filter to be used
                if (param) {
                    param = param.trim();
                }
                TodoFilter = param || '';

                // Trigger a collection filter event, causing hiding/unhiding
                // of Todo view items
                Todos.trigger('filter');
				return TodoFilter;
            }
        }),
		TodoFilter;

        Backbone.history.start();
    
        return {
            "workspace": Workspace,
            "todofilter": TodoFilter
        };
    }
);