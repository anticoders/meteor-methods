
// CLIENT ONLY

ClientCall._clientIdDep = new Deps.Dependency();

ClientCall._clientId = null;

ClientCall.setClientId = function(clientId) {
  ClientCall._clientId = clientId;
  ClientCall._clientIdDep.changed();
}

ClientCall.getClientId = function() {
  ClientCall._clientIdDep.depend();
  return ClientCall._clientId;
}

Deps.autorun(function() {
  Meteor.subscribe('meteor-clientCall-channel', ClientCall.getClientId());
});


