import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBU59qjROQKQWQPUA8HCAd9WSdzx0uO6WI",
  authDomain: "proyectoreactmobilestore.firebaseapp.com",
  projectId: "proyectoreactmobilestore",
  storageBucket: "proyectoreactmobilestore.appspot.com",
  messagingSenderId: "670971237689",
  appId: "1:670971237689:web:6d933bb70fe692358744e8",
};

const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp);

export async function getAllPhones() {
  const collectionRef = collection(db, "phones");
  let results = await getDocs(collectionRef);
  let dataPhones = results.docs.map((item) => {
    return { id: item.id, ...item.data() };
  });
  return dataPhones;
}

export async function getPhone(idParam) {
  try {
    const docRef = doc(db, "phones", idParam);
    const docResult = await getDoc(docRef);
    if (docResult.exists()) {
      return { id: docResult.id, ...docResult.data() };
    } else {
      throw new Error("El item no existe");
    }
  } catch (errorMsg) {
    console.log(errorMsg);
  }
}

export async function getPhonesByCategory(category) {
  const collectionRef = collection(db, "phones");
  const queryPhones = query(collectionRef, where("category", "==", category));
  let results = await getDocs(queryPhones);
  let dataPhones = results.docs.map((item) => {
    return { id: item.id, ...item.data() };
  });
  return dataPhones;
}

export default FirebaseApp;
