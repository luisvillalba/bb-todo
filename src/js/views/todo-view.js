define([
	"backbone",
	"handlebars",
	"hbHelpers",
	"text!views/templates/hbs/item_template.hbs"
],
	function (Backbone, Handlebars, helpers, template) {
		var TodoView = Backbone.View.extend({

			tagName: "li",

			template: Handlebars.compile(template),

			events: {
				"click .toggle": "togglecompleted",
				"dblclick label": "edit",
				"click .destroy": "clear",
				"keypress .edit": "updateOnEnter",
				"blur .edit": "close"
			},

			initialize: function () {
				this.listenTo(this.model, "change", this.render);
				this.listenTo(this.model, "destroy", this.remove);
				this.listenTo(this.model, "visible", this.toggleVisible);
			},

			render: function () {
				this.$el.html(this.template(this.model.attributes));

				this.$el.toggleClass("completed", this.model.get("completed"));
				this.toggleVisible();

				this.$input = this.$(".edit");
				return this;
			},

			toggleVisible: function () {
				this.$el.toggleClass("hidden", this.isHidden());
			},

			isHidden: function () {
				var isCompleted = this.model.get("completed");
				return (
				(!isCompleted && Global.TodoFilter === "completed")
				|| (isCompleted && Global.TodoFilter === "active")
				);
			},

			togglecompleted: function () {
				this.model.toggle();
			},

			edit: function () {
				this.$el.addClass("editing");
				this.$input.focus();
			},

			close: function () {
				var value = this.$input.val().trim();

				if (value) {
					this.model.save({
						title: value
					});
				} else {
					this.clear(); // NEW
				}

				this.$el.removeClass("editing");
			},

			updateOnEnter: function (e) {
				if (e.which === Global.ENTER_KEY) {
					this.close();
				}
			},


			clear: function () {
				this.model.destroy();
			}
		});

		return TodoView;
	}
);