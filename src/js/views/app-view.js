define([
		'underscore',
		'backbone',
		'todocol', 
		'todomodel',
		'templates'
	], 
	function (_, Backbone, Todos, todo, templates) {
		var ENTER_KEY = 13;
	
		var AppView = Backbone.View.extend({
			/* This makes the view to work over an existing element */
			el: '#todoapp',
			
			/* Statistics template */
			statsTemplate: templates['stats_template'],
			
			/* Define all the events of for the view and their handlers */
			events: {
				'keypress #new-todo': 'createOnEnter',
				'click #clear-completed': 'clearCompleted',
				'click #toggle-all': 'toggleAllComplete'
			},

			/* This method is going to be executed once the view is instantiated */
			initialize: function () {
				this.allCheckbox = this.$('#toggle-all')[0];
				this.$input = this.$('#new-todo');
				this.$footer = this.$('#footer');
				this.$main = this.$('#main');

				this.listenTo(Todos, 'add', this.addOne);
				this.listenTo(Todos, 'reset', this.addAll);

				// New
				this.listenTo(Todos, 'change:completed', this.filterOne);
				this.listenTo(Todos, 'filter', this.filterAll);
				this.listenTo(Todos, 'all', this.render);

				Todos.fetch();
			},

			render: function () {
				var completed = Todos.completed().length;
				var remaining = Todos.remaining().length;

				if (Todos.length) {
					this.$main.show();
					this.$footer.show();

					this.$footer.html(this.statsTemplate({
						completed: completed,
						remaining: remaining
					}));

					this.$('#filters li a')
						.removeClass('selected')
						.filter('[href="#/' + (app.TodoFilter || '') + '"]')
						.addClass('selected');
				} else {
					this.$main.hide();
					this.$footer.hide();
				}

				this.allCheckbox.checked = !remaining;
			},

			/* Adds a single todo to the list */
			addOne: function (todo) {
				var view = new app.TodoView({
					model: todo
				});
				$('#todo-list').append(view.render().el);
			},

			// Add all items in the **Todos** collection at once.
			addAll: function () {
				this.$('#todo-list').html('');
				Todos.each(this.addOne, this);
			},

			// New
			filterOne: function (todo) {
				todo.trigger('visible');
			},

			// New
			filterAll: function () {
				Todos.each(this.filterOne, this);
			},


			// New
			// Generate the attributes for a new Todo item.
			newAttributes: function () {
				return {
					title: this.$input.val().trim(),
					order: Todos.nextOrder(),
					completed: false
				};
			},

			// New
			// If you hit return in the main input field, create new Todo model,
			// persisting it to localStorage.
			createOnEnter: function (event) {
				if (event.which !== ENTER_KEY || !this.$input.val().trim()) {
					return;
				}

				Todos.create(this.newAttributes());
				this.$input.val('');
			},

			// New
			// Clear all completed todo items, destroying their models.
			clearCompleted: function () {
				_.invoke(Todos.completed(), 'destroy');
				return false;
			},

			// New
			toggleAllComplete: function () {
				var completed = this.allCheckbox.checked;

				Todos.each(function (todo) {
					todo.save({
						'completed': completed
					});
				});
			}
		});
		
		return  AppView;
	}
);

// The Application
// ---------------

