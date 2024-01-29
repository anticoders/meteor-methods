import { check } from 'meteor/check'
// SERVER ONLY


Meteor.publish('meteor-clientCall-channel', function(clientId) {
  if(!clientId) return [];
  check(clientId, String);
  return Meteor.ClientCall._messages.find({clientId: clientId});
});

