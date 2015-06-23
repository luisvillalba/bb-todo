/**
 * This is the model which represents the data about a to-do task
 */
var app = app || {};

/** 
 *	Since we need to define some specific behaviors, the Todo model
 *	is going to extend the Backbone model object
 */
app.Todo = Backbone.Model.extend({
	/* This attributes are going to be set by default on every model instance */
	"defaults": {
		"title": "",
		"completed": false
	},
	
	/* This method is used to save the model state */
	"toggle": function () {
		this.save({
			completed: !this.get('completed')
		});
	}
});