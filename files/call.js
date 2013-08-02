
// SERVER ONLY

// TODO: add `call` method!
// TODO: implement callbacks!


Meteor.ClientCall._callbacks = {};

Meteor.ClientCall.apply = function(clientId, method, arguments, callback) {
  var messageId = Meteor.ClientCall._messages.insert({
    clientId: clientId,
    method: method,
    arguments: arguments,
    time: new Date().getTime(),
  });

  if(callback) Meteor.ClientCall._callbacks[messageId] = callback;
};



Meteor.methods({

  'meteor-clientCall-received': function(messageId, error, result) {
    Meteor.ClientCall._messages.remove(messageId);
    
    if(Meteor.ClientCall._callbacks[messageId]) {
      Meteor.ClientCall._callbacks[messageId].call(null, error, result);
      delete Meteor.ClientCall._callbacks[messageId];
    }
  },

});
