/**
 * This works as a backbone collection to group the instances of
 * Todo models
 * @filename 
 */
define([
		'backbone',
		'todomodel',
		'ls'
	], 
	function (Backbone, todomodel, ls) {
		var TodoList = Backbone.Collection.extend({
			/** 
			 *	This collection groups Todo models, so it has to be linked to the model definition
			 */
			"model": todomodel,

			/* This attribute is going to act as a namespace for the backbone app on the LS */
			"localStorage": new Backbone.LocalStorage('todos-backbone'),

			/*=============================== Utilities ===============================*/
			/** 
			 *	Returns the next index of the collection so items can be stored in order
			 *	@return int Next order
			 */
			"nextOrder": function () {
				if (!this.length) {
					return 1;
				}
				return this.last().get('order') + 1;
			},

			/** 
			 *	Returns the order of the given model
			 *	@param model A backbone model
			 *	@return int Order of the given model
			 */
			"comparator": function (todo) {
				return todo.get('order');
			},

			/*=============================== Filters ===============================*/
			/** 
			 *	This filter will return only the completed tasks 
			 *	@return [model] List of models which are completed
			 */
			"getCompleted": function () {
				return this.filter(function (todo) {
					return todo.get('completed');
				});
			},

			/** 
			 *	This filter will return only the remaining tasks 
			 *	@return [model] List of models which aren't completed
			 */
			"getRemaining": function () {
				return this.without.apply(this, this.getCompleted());
			}
		});
		
		return new TodoList();
	}
);