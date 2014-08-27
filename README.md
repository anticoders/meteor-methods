Notes for updating to Meteor 0.9.0
----------------------------------

This package is now called `anti:methods`.



AntiMethods
===========


Easily call client methods from server side.

`Meteor.methods` give an easy way to call server code from client-side part of the application.
This package allows the same for the other way around.

The only important difference is the `setClientId` method that is necessary to set up connection.

**Caution:**

Currently, only `Meteor.ClientCall.apply` is implemented. `call` equivalent will be added soon.

**Disclaimer**

This package API will be slightly changed in the next few weeks to accomodate the changes in 0.9.0 version of Meteor.


INSTALLATION
============

In your Meteor.js app folder call

    meteor add anti:methods



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


    