define([
    'jquery',
    'underscore',
    'backbone',
    'todomodel',
    'todocol',
    'router',
    'appview'
    ],
    function ($, _, Backbone, todomodel, todocol, router, appview) {
        'use strict';

        var app = {
            "TodoModel": todomodel,
            "Todos": todocol,
            "TodoFilter": router.todofilter,
            "AppView": appview
        };

        /* Initializes the application */
        var init = function () {    
            new app.AppView();
        }

        return init;
    }
);