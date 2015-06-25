define([
    'appview'
    ],
    function (appview) {
        'use strict';
		var App = {
			"init": function() {
				console.log("Initializing App");
				new appview();
			}
		};
	
		return App;
    }
);