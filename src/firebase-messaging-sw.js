
 importScripts(
   "https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js"
 );
 importScripts(
   "https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js"
 );



firebase.initializeApp({
  apiKey: "AIzaSyCGRfL0iGh-F1m3Dvzwwx7Nc4fTXNZzk0A",
  authDomain: "notif-b16b2.firebaseapp.com",
  projectId: "notif-b16b2",
  storageBucket: "notif-b16b2.appspot.com",
  messagingSenderId: "457702336002",
  appId: "1:457702336002:web:3e919cba04066829e6691b",
  measurementId: "G-RRL8DMME06",
});

const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function(payload) {
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: "assets/firebase-logo.png",
//   };

//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });
