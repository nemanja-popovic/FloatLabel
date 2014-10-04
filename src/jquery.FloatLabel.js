/*
 * FloatLabel
 * 
 *
 * Copyright (c) 2014 Nemanja Popovic
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.FloatLabel = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.FloatLabel = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.FloatLabel.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.FloatLabel.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].FloatLabel = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
