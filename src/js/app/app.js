define([
    'jquery',
    'underscore',
    'backbone',
    'todomodel',
    'todocol'
    ],
    function ($, _, Backbone, todomodel, todocol) {
        'use strict';

        var app = {
            "TodoModel": todomodel,
            "Todos": todocol
        };

        /* Initializes the application */
        var init = function () {    
            new app.AppView();
        }

        return init;
    }
);