module.exports = function() {

	this.Given(/^there are the following tasks:$/, function(tasks) {
		this.server.call('reset');
		this.server.call('testData', tasks.hashes());
	});

  	this.Then(/^I should see (\d+) tasks$/, function(nrStr, callback) {
  		var nr = parseInt(nrStr);
		browser.waitForVisible('li');
		var tasks = browser.elements('li');
		console.log('Number of tasks: ' + tasks.value.length);
		expect(tasks.value.length).toEqual(nr);
	});
};