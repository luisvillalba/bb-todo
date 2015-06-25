define([
'backbone',
'todocol'
],
    function (Backbone, Todos) {
        var Workspace = Backbone.Router.extend({
            routes: {
                '*filter': 'setFilter'
            },

            setFilter: function (param) {
                if (param) {
                    param = param.trim();
                }
				
				Global.TodoFilter = param || '';
				
                Todos.trigger('filter');
            }
        });
    
        return Workspace;
    }
);