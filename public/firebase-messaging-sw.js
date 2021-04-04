/* eslint-disable */

// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/8.3.1/firebase-messaging.js")

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyCSJZdPFWqmk16jAkYjcrBhGO0vRhWMHEM",
  authDomain: "fir-examples-1bdae.firebaseapp.com",
  projectId: "fir-examples-1bdae",
  storageBucket: "fir-examples-1bdae.appspot.com",
  messagingSenderId: "37049027673",
  appId: "1:37049027673:web:84f8ae67fa4404bf5e7548",
  measurementId: "G-Q12XGCNXEJ"
})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()
//
// console.log(messaging)
//
// messaging.onBackgroundMessage((payload) => {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message ",
//     payload
//   )
//   const notificationTitle = payload.notification.title
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: payload.notification.icon
//   }
//
//   return self.registration.showNotification(
//     notificationTitle,
//     notificationOptions
//   )
// })
