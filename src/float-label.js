/*
 * FloatLabel
 * 
 *
 * Copyright (c) 2014 Nemanja Popovic
 * Licensed under the MIT license.
 */

(function ($) {
    'namespace FloatLabel';
    $.fn.FloatLabel = function (options) {
        var settings = $.extend({
            hasIcon: false,
        }, options);

        var selectedObj = this;

        //Check if it is already initialized??

        var floatLabel = {
            I: $(selectedObj),
            L: '',
            hasIcon: settings.hasIcon,

            init: function () {
                window.alert();
            }
        };

        floatLabel.init();

        //Return new element
        return floatLabel;
    };
   
}(jQuery));
