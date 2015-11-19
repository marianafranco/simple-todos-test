Package.describe({
  summary: "Provides unit tests for simple-todos application.",
  internal: true
});


Package.on_test(function (api) {

  api.use('tinytest');
  api.use(["spacebars", "tinytest", "test-helpers"]);
  api.use("templating", "client");

  // api.add_files('test-stubs.js', 'client');
  // api.add_files('../../simple-todos.js', 'client');

  //api.use('session', 'client');
  //api.use('session-extended-api');
  //api.use('deps');
  //api.use('mongo-livedata');
  api.add_files('unittests.js', 'client');
});