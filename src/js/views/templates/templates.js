(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['item_template'] = template({"1":function(depth0,helpers,partials,data) {
    return " checked ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<!-- This is the template for each to-do item -->\n<div class=\"view\">\n  <input class=\"toggle\" type=\"checkbox\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n  <label>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</label>\n  <button class=\"destroy\"></button>\n</div>\n<input class=\"edit\" value=\""
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">";
},"useData":true});
templates['stats_template'] = template({"1":function(depth0,helpers,partials,data) {
    return " item ";
},"3":function(depth0,helpers,partials,data) {
    return " items ";
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return "    <button id=\"clear-completed\">Clear completed ("
    + this.escapeExpression(((helper = (helper = helpers.completed || (depth0 != null ? depth0.completed : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"completed","hash":{},"data":data}) : helper)))
    + ")</button>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing;

  return "<span id=\"todo-count\">\n    <strong>"
    + this.escapeExpression(((helper = (helper = helpers.remaining || (depth0 != null ? depth0.remaining : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"remaining","hash":{},"data":data}) : helper)))
    + "</strong> \n    "
    + ((stack1 = (helpers.ifEqual || (depth0 && depth0.ifEqual) || alias1).call(depth0,(depth0 != null ? depth0.remaining : depth0),1,{"name":"ifEqual","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + " left\n</span>\n<ul id=\"filters\">\n    <li>\n        <a class=\"selected\" href=\"#/\">All</a>\n    </li>\n    <li>\n        <a href=\"#/active\">Active</a>\n    </li>\n    <li>\n        <a href=\"#/completed\">Completed</a>\n    </li>\n</ul>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();