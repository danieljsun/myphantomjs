/* global require, phantom */
(function() {
'use strict';
var page = require('webpage').create();
//page.pagerSize = { format: 'A5', orientation: 'portrait', border: '1cm' };
//page.pagerSize = { format: 'A5', orientation: 'landscape', border: '1cm' };
page.pagerSize = { format: 'A4', orientation: 'landscape', border: '1cm' };
page.open('https://github.com/ariya/phantomjs/wiki/API-Reference-WebPage', function () {
	page.render('phantomjs_api_a4_landscape.pdf');
	phantom.exit();
});
}());
