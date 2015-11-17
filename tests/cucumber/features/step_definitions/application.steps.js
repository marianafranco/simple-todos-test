module.exports = function() {

	var url = require('url');

	this.When(/^I visit the application$/, function() {
		browser.url(url.resolve(process.env.ROOT_URL, '/'));
		// browser.url(process.env.ROOT_URL);
	});
};