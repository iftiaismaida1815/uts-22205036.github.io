importScripts('https://www.gstatic.com/firebasejs/7.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.2.1/firebase-messaging.js');
// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
importScripts('https://www.gstatic.com/firebasejs/7.2.1/firebase-analytics.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
const config = {
  apiKey: "AIzaSyC1cPHlb8RxpMHlHD52SfiuFdB5USvS9Vk",
  authDomain: "uass-4cefd.firebaseapp.com",
  projectId: "uass-4cefd",
  storageBucket: "uass-4cefd.appspot.com",
  messagingSenderId: "13383968446",
  appId: "1:13383968446:web:33249c4894a3f472da60ef",
  measurementId: "G-SKDSKS4RVP"
  };

firebase.initializeApp({
  messagingSenderId: '13383968446'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  // Customize notification here
  const notification = JSON.parse(payload.data.notification);
  const notificationTitle = notification.title;
  const notificationOptions = {
    body: notification.body
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});