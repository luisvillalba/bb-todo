var Global = {
  "ENTER_KEY": 13
};

define([
    "backbone",
    "appview",
    "todocol",
    "router"
  ],
  function (Backbone, appview, todocol, router) {
    "use strict";

    var App = {
      "init": function () {
        console.log("Initializing App");

        new router();

        Backbone.history.start();

        /* Initializes the main view of the app*/
        new appview();
      }
    };

    return App;
  }
);