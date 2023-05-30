import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDx7bER80aML0-oK3UlLyygA18EDDHIi_g",
  authDomain: "meu-primeiro-projeto-578f3.firebaseapp.com",
  projectId: "meu-primeiro-projeto-578f3",
  storageBucket: "meu-primeiro-projeto-578f3.appspot.com",
  messagingSenderId: "957134467603",
  appId: "1:957134467603:web:c46ca716344dfaa5b345e6",
  measurementId: "G-LJXX4531PX"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };