Package.describe({
  name:     "anti:methods",
  version:  "0.4.0",
  summary:  "Call client methods from the server",
  git:      "https://github.com/anticoders/meteor-methods.git",
});



Package.onUse(function(api, where) {

  api.versionsFrom('1.11.1')

  api.use('check')
  api.use('tracker', ['client', 'server'])
  api.use('mongo-livedata', ['client', 'server'])

  api.addFiles([
      'files/_.js',
      'files/_database.js',
  ], [
      'client',
      'server',
  ])

  api.addFiles([
      'files/publish.js',
      'files/call.js',
      'files/cleanup.js',
  ], [
      'server',
  ])

  api.addFiles([
      'files/methods.js',
      'files/subscribe.js',
      'files/receive.js',
  ], [
      'client',
  ])
})



