/* global require, phantom, window, console */
(function() {
	'use strict';
	var page = require('webpage').create();
	//page.pagerSize = { format: 'A4', orientation: 'landscape', border: '1cm' };
	//page.pagerSize = { width: '1280px', height: '800px', border: '20px' };
	//page.pagerSize = { width: '200px', height: '300px', border: '0px' };
	page.viewportSize = { width: 1800, height: 2400};
	//page.pagerSize = { width: '900px', height: '1200px', border: '20px' };
	//page.pagerSize = { format: 'A4', orientation: 'portrait', border: '2cm' };
	page.open('http://google.com', function(status) {
		if (status !== 'success') {
			console.log('Unable to load the address!');
			phantom.exit();
		} else {
			window.setTimeout(function() {
				page.render('google.pdf');
				phantom.exit();
			}, 200);
		}
	});
}());
