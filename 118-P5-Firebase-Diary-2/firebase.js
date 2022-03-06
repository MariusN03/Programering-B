const firebaseConfig = {
    apiKey: "AIzaSyAMZUJ2vblNYp8-ix95oy5qw7MFnfSqs2M",
    authDomain: "p5-diary-1d14a.firebaseapp.com",
    projectId: "p5-diary-1d14a",
    storageBucket: "p5-diary-1d14a.appspot.com",
    messagingSenderId: "850849377042",
    appId: "1:850849377042:web:ba2302ee7fb197b039a1cb"
  };
  
  //start firebase
  firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore()
  