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
            hasIcon: true,
            iconSide:'right',
            direction: 'float-label-up'
        }, options);

        return this.each(function () {
    
            var selectedObj = this;

            var floatLabel = {
                I: $(selectedObj),
                L: '',
                labelText: '',
                Icon: '',
                iconName:'username',
                hasIcon: settings.hasIcon,
                iconSide:settings.iconSide,
                floatDirection: settings.direction,
                getConfigData: function () {
                    var E = this;

                    //Get text for label
                    if (E.I.attr('data-label-text')) {
                        E.labelText = E.I.data('label-text');
                    }

                    //Get direction for label
                    if (E.I.attr('data-label-direction')) {
                        E.floatDirection  = 'float-label-' + E.I.data('label-direction');
                    }

                    if (E.hasIcon) {
                        //Get icon
                        if (E.I.attr('data-label-icon')) {
                            E.iconName = '' + E.I.data('label-icon');
                        }
                    }
                    //Get side
                    if (E.I.attr('data-label-icon-side')) {
                        E.iconSide = E.I.data('label-icon-side');
                    }

                },
                //Function for creating elements
                createElements: function () {
                    var E = this;

                    //Add class to input element
                    E.I.addClass('float-label-input');

                    //Wrapper
                    E.I.wrap('<div class="float-label-wrapper">');

                    //Label
                    E.L = $('<label class="float-label-label"></label>');
                    E.L.text(E.labelText);
                    //Append label
                    E.I.parent().append(E.L);

                    //Icon
                    if (E.hasIcon) {
                        E.Icon = $('<i class="float-label-icon"></i>');
                        E.Icon.addClass('float-label-icon-' + E.iconName);
                        //Append icon
                        E.I.parent().prepend(E.Icon);

                        E.I.parent().addClass(E.iconSide + '-addon');
                    }

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
                    E.I.keydown(function () {
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
