const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Helloooo, can you hearme');
});

const createNotif = notif => {
  return admin
    .firestore()
    .collection('notifications')
    .add(notif)
    .then(doc => console.log('notification added', doc));
};

exports.projectCreated = functions.firestore.document('project/{projectID}').onCreate(doc => {
  const project = doc.data();
  const notif = {
    content: 'Added a new note',
    user: `${project.authorFirstName} ${project.authorLastName}`,
    time: admin.firestore.FieldValue.serverTimestamp(),
  };
  return createNotif(notif);
});

exports.userJoined = functions.auth.user().onCreate(user => {
  return admin
    .firestore()
    .collection('users')
    .doc(user.uid)
    .get()
    .then(doc => {
      const newUser = doc.data();
      const notification = {
        content: 'Joined the party',
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp(),
      };
      return createNotif(notification);
    });
});
