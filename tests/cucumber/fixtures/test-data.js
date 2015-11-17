Meteor.methods({
  "testData": function(tasks) {
    tasks.forEach(function(data) {
      // console.log(data);
      Tasks.insert({
        text: data.text,
        username: data.username,
        owner: data.userId,
        // createdAt: moment(data.time, "HH:mm:ss").toDate()
        createdAt: new Date()
      });
    });
  },
  "reset": function() {
    Tasks.remove({});
  },
  "testUser": function(user, password) {
    try {
      Accounts.createUser({
        username: user,
        password: password,
        email: 'noop@example.org'
      });
    } catch (err) {
      if (err.reason !== 'Username already exists.') {
        throw err;
      }
    }
  }
});