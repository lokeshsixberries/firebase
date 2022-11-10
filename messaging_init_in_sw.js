import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyC-HXiC_Hf1z3OEyAkthrdplYB9DGmILms",
  authDomain: "notifier-38398.firebaseapp.com",
  projectId: "notifier-38398",
  storageBucket: "notifier-38398.appspot.com",
  messagingSenderId: "333838449482",
  appId: "1:333838449482:web:7c61f69a17f981125b9fb3",
};

function requestPermission() {
  if (typeof Notification !== "undefined") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted.");
        const app = initializeApp(firebaseConfig);

        const messaging = getMessaging(app);
        getToken(messaging, {
          vapidKey:
            "BBTITZeJpiIyOsTLogH-H3A5dhtorapRDRUvJMYtxgti4z25cqhZpz2C-yRO_rrjZAk3Er-13oxW2D_IIhlvFvg",
        }).then((currentToken) => {
          if (currentToken) {
            console.log("currentToken: ", currentToken);
          } else {
            console.log("Can not get token");
          }
        });
      } else {
        console.log("Do not have permission!");
      }
    });
  }
}

requestPermission();

//key=AAAATbpSe0o:APA91bGrnl-ZuwFijC-VPscWyrfh5cCwP1Fx8BJBc78awbE0pBxUFp8Uo8f4ZC0Wke4askcH9JNFYJpcZ2fHvFn2UKvHkE_xzVntxPTQGh6xodq_CZj24b9ftA915mqG3pNp2D285ovN
