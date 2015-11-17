describe('simple-todos', function() {

	var thisContext = {userId: 1};

	describe('addTask', function () {
	    it('should error if not authenticated', function () {
	      	expect(function () {
		       Meteor.call('addTask', 'Test');
		    }).toThrow();
	    });
	});

	describe('addTask', function () {
	    it('should work if authenticated', function () {
	    	Meteor.userId = function () {
	    		return '1';
	    	};

	    	Meteor.user = function () {
	    		return {username : 'testuser'};
	    	};

	    	var text = 'Add Test';

	    	Meteor.call('addTask', text);
	    	expect(Tasks.find({text: text}).count()).toEqual(1);
	    });
	});

	describe('deleteTask', function () {
	    it('should work if authenticated', function () {
	    	Meteor.userId = function () {
	    		return '1';
	    	};

	    	Meteor.user = function () {
	    		return {username : 'testuser'};
	    	};

	    	var text = 'Delete Test';

	    	Meteor.call('addTask', text);

	    	var task = Tasks.find({text: text}).fetch();
	    	expect(task.length).toEqual(1);

	    	Meteor.call('deleteTask', task[0]._id);
	    	expect(Tasks.find({text: text}).count()).toEqual(0);
	    });
	});


	describe('setChecked', function () {
	    it('should work if authenticated', function () {
	    	Meteor.userId = function () {
	    		return '1';
	    	};

	    	Meteor.user = function () {
	    		return {username : 'testuser'};
	    	};

	    	var text = 'Set Checked Test';

	    	Meteor.call('addTask', text);

	    	var task = Tasks.find({text: text}).fetch();
	    	expect(task.length).toEqual(1);

	    	Meteor.call('setChecked', task[0]._id, true);
	    	expect(Tasks.find({text: text, checked: true}).count()).toEqual(1);

	    	Meteor.call('setChecked', task[0]._id, false);
	    	expect(Tasks.find({text: text, checked: true}).count()).toEqual(0);
	    	expect(Tasks.find({text: text, checked: false}).count()).toEqual(1);
	    });
	});


	describe('setPrivate', function () {
	    it('should work if authenticated', function () {
	    	Meteor.userId = function () {
	    		return '1';
	    	};

	    	Meteor.user = function () {
	    		return {username : 'testuser'};
	    	};

	    	var text = 'Set Private Test';

	    	Meteor.call('addTask', text);

	    	var task = Tasks.find({text: text}).fetch();
	    	expect(task.length).toEqual(1);

	    	Meteor.call('setPrivate', task[0]._id, true);
	    	expect(Tasks.find({text: text, private: true}).count()).toEqual(1);

	    	Meteor.call('setPrivate', task[0]._id, false);
	    	expect(Tasks.find({text: text, private: true}).count()).toEqual(0);
	    	expect(Tasks.find({text: text, private: false}).count()).toEqual(1);
	    });
	});

});