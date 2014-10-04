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
            direction: 'float-label-up'
        }, options);

        return this.each(function () {
    
            var selectedObj = this;

            var floatLabel = {
                I: $(selectedObj),
                L: '',
                hasIcon: settings.hasIcon,
                labelText: '',
                floatDirection:'',
                getConfigData: function () {
                    var E = this;

                    //Get text for label
                    var labelText = '';
                    if (E.I.attr('data-label-text')) {
                        labelText = E.I.data('label-text');
                    }
                    E.labelText = labelText;

                    //Get direction for label
                    var floatDirection = 'float-label-up';
                    if (E.I.attr('data-label-direction')) {
                        floatDirection = 'float-label-' + E.I.data('label-direction');
                    }
                    E.floatDirection = floatDirection;

                },
                //Function for creating elements
                createElements: function () {
                    var E = this;
                    //Wrapper
                    E.I.wrap('<div class="float-label-wrapper">');

                    //Label
                    E.L = $('<label class="float-label-label"></label>');
                    E.L.text(E.labelText);
                    //Append label
                    E.I.parent().append(E.L);

                    //Add class to input element
                    E.I.addClass('float-label-input');
                },
                hideLabel: function () {
                    var E = this;
                    E.I.removeClass('float-label-dirty');
                    E.L.removeClass(E.floatDirection);
                },
                showLabel: function () {
                    var E = this;
                    E.I.addClass('float-label-dirty');
                    E.L.addClass(E.floatDirection);
                },
                checkContent: function () {
                    var E = this;
                    var currentValue = E.I.val();
                    if (E.I.hasClass('float-label-dirty')) {
                        if (currentValue === '') {
                            E.hideLabel();
                        }
                    }
                    else {
                        if (currentValue !== '') {
                            E.showLabel();
                        }
                    }
                },
                //Events
                basicEvents: function () {
                    var E = this;
                    E.I.change(function () {
                        E.checkContent();
                    });
                    E.I.focus(function () {
                        E.checkContent();
                    });
                    E.I.blur(function () {
                        E.checkContent();
                    });
                    E.I.keyup(function () {
                        E.checkContent();
                    });
                },

                init: function () {
                    this.getConfigData();
                    this.createElements();
                    this.basicEvents();
                }
            };

            //Init element
            floatLabel.init();

        });
    };

}(jQuery));
