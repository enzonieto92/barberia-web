// src/lib/firestoreConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQonoA6eQR0IlTvPavoRo9ISufKpAZ3ng",
  authDomain: "barbershop-leman.firebaseapp.com",
  databaseURL: "https://barbershop-leman-default-rtdb.firebaseio.com",
  projectId: "barbershop-leman",
  storageBucket: "barbershop-leman.appspot.com",
  messagingSenderId: "848048291681",
  appId: "1:848048291681:web:f26e8f9a2a4d41c1418f20"
};
// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const firestore = getFirestore(app);

export default firestore;
