

Package.describe({
  summary: "Call client methods from the server"
});



Package.on_use(function (api, where) {

  if(api.export) {
    api.use('deps', ['client', 'server']);
    api.use('mongo-livedata', ['client', 'server']);
  }

  api.add_files([
    'files/_.js',
    'files/_database.js',
  ], [
    'client',
    'server',
  ]);

  api.add_files([
    'files/publish.js',
    'files/call.js',
    'files/cleanup.js',
  ], [
    'server',
  ]);

  api.add_files([
    'files/methods.js',
    'files/subscribe.js',
    'files/receive.js',
  ], [
    'client',
  ]);

});



