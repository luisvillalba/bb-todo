var app = app || {};

$.extend(app, {
	"Templates": [],
	"conf": {
		"tplPath": 'js/views/templates/',
		"tplExt": ".hbs",
		"tplNames": [
			"item-template",
			"stats-template"
		]
	},
	
	/* Initializes the application */
	"init": function () {
		this.loadTemplates();
		//new app.AppView();
	},
	
	/* Loads the templates to the app */
	"loadTemplates": function () {
		var i, 
			name;

		/* Loads every template configured on the Template array of the app */
		for (i in this.conf.tplNames) {
			name = this.conf.tplNames[i];
			this.Templates[name] = this.getTemplate(name);
		};
		console.log(this.Templates);
	},
	
	/* Gets a template via ajax */
	"getTemplate": function (name) {
		$.ajax({
			"url": this.conf.tplPath + name + this.conf.tplExt,
			"type": 'get',
			"success": function(html) {
				console.log(html);
				return html;
			}
		});
	}
});