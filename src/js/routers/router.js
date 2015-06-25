define([
'jquery',
'underscore',
'backbone',
'todocol'
],
    function ($, _, Backbone,Todos) {
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
            }
        });

        Backbone.history.start();
    
        return {
            "workspace": Workspace,
            "todofilter": TodoFilter
        };
    }
);