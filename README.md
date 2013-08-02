CLIENT CALL
===========


Easily call client methods from server side.


INSTALLATION
============

In your Meteor.js app folder call

    mrt add client-call



USAGE
=====

### Defining methods

    Meteor.ClientCall.methods(methods)

Client-side function analogous to server-side `Meteor.methods`.

Example:

    Meteor.ClientCall.methods({

      'chatMessage': function(username, message) {
        ...
      },

    });



### Setting up connection

    Meteor.ClientCall.setClientId(id)

Client-side function that set up client id that will be used to communicate to this particular client.
Two clients with the same ID are indistinguishable.

Example:

    Deps.autorun(function() {
      Meteor.ClientCall.setClientId(Meteor.userId());
    });
    

### Calling methods


    Meteor.ClientCall.apply(clientId, method, arguments, callback)

Server-side function for calling client-side methods.

Optional callback receives two arguments: `error` and `result`, where result is the return value of the called method.

Example:

    Meteor.ClientCall.apply(receiver._id, 'chatMessage', [sender.name, sender.message], function(error, result) {
      console.log('CALLBACK', result);
    });


    