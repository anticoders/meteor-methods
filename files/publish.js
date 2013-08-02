
// SERVER ONLY


Meteor.publish('meteor-clientCall-channel', function(clientId) {
  if(!clientId) return [];
  return Meteor.ClientCall._messages.find({clientId: clientId});
});

