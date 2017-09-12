define([
	"backbone",
	"todocol",
	"todoview",
	"handlebars",
	"hbHelpers",
	"text!views/templates/hbs/stats_template.hbs"
],
	function (Backbone, todocol, todoview, Handlebars, helpers, template) {
		"use strict";

		var AppView = Backbone.View.extend({
			/* This makes the view to work over an existing element */
			el: "#todoapp",

			/* Statistics template */
			statsTemplate: Handlebars.compile(template),

			/* Define all the events of for the view and their handlers */
			events: {
				"keypress #new-todo": "createOnEnter",
				"click #clear-completed": "clearCompleted",
				"click #toggle-all": "toggleAllComplete"
			},

			/* This method is going to be executed once the view is instantiated */
			initialize: function () {
				this.Todos = todocol;
				this.allCheckbox = this.$("#toggle-all")[0];
				this.$input = this.$("#new-todo");
				this.$footer = this.$("#footer");
				this.$main = this.$("#main");

				this.listenTo(this.Todos, "add", this.addOne);
				this.listenTo(this.Todos, "reset", this.addAll);

				this.listenTo(this.Todos, "change:completed", this.filterOne);
				this.listenTo(this.Todos, "filter", this.filterAll);
				this.listenTo(this.Todos, "all", this.render);

				this.Todos.fetch();
			},

			render: function () {
				var completed = this.Todos.getCompleted().length;
				var remaining = this.Todos.getRemaining().length;

				if (this.Todos.length) {
					this.$main.show();
					this.$footer.show();

					this.$footer.html(this.statsTemplate({
						completed: completed,
						remaining: remaining
					}));

					this.$("#filters li a")
						.removeClass("selected")
						.filter("[href=\"#/" + (Global.TodoFilter || "") + "\"]")
						.addClass("selected");
				} else {
					this.$main.hide();
					this.$footer.hide();
				}

				this.allCheckbox.checked = !remaining;
			},

			/* Adds a single todo to the list */
			addOne: function (todo) {
				var view = new todoview({
					model: todo
				});
				$("#todo-list").append(view.render().el);
			},

			// Add all items in the **Todos** collection at once.
			addAll: function () {
				this.$("#todo-list").html("");
				this.Todos.each(this.addOne, this);
			},

			filterOne: function (todo) {
				todo.trigger("visible");
			},

			filterAll: function () {
				this.Todos.each(this.filterOne, this);
			},

			newAttributes: function () {
				return {
					title: this.$input.val().trim(),
					order: this.Todos.nextOrder(),
					completed: false
				};
			},

			createOnEnter: function (event) {
				if (event.which !== Global.ENTER_KEY || !this.$input.val().trim()) {
					return;
				}

				this.Todos.create(this.newAttributes());
				this.$input.val("");
			},

			clearCompleted: function () {
				_.invoke(this.Todos.getCompleted(), "destroy");
				return false;
			},

			toggleAllComplete: function () {
				var completed = this.allCheckbox.checked;

				this.Todos.each(function (todo) {
					todo.save({
						"completed": completed
					});
				});
			}
		});

		return AppView;
	}
);