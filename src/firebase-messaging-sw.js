
 importScripts(
   "https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js"
 );
 importScripts(
   "https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js"
 );



firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
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
