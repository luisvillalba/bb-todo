require.config({
    "baseUrl": "js",
    "paths": {
        "jquery": "vendor/jquery/dist/jquery.min",
		"underscore": "vendor/underscore/underscore-min",
		"backbone": "vendor/backbone/backbone-min",
		"ls": "vendor/backbone-localstorage/backbone-localstorage.min",
		"handlebars": "vendor/handlebars/handlebars.min",
		"hbHelpers": "app/hb-helpers",
		"templates": "views/templates/templates",
		"appview": "views/app-view",
		"todoview": "views/todo-view",
		"todomodel": "models/todo",
		"todocol": "collections/todos",
		"router": "routers/router"
    },
	"shim": {
		"underscore": {
			"exports": "_"
		},
		"backbone": {
			"deps": ['underscore', 'jquery'],
			"exports": "Backbone"
		},
		'backbone.localStorage': {
			"deps": ['backbone'],
			"exports": "Backbone"
		}
	}
});

require([
	'app/app'
], function(App){
	App.init();
});
