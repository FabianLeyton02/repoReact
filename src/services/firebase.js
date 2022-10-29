import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
  orderBy,
  writeBatch,
  documentId,
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
  const queryPhones = query(collectionRef, orderBy("category"));
  let results = await getDocs(queryPhones);
  let dataPhones = results.docs.map((item) => {
    return { id: item.id, ...item.data() };
  });
  return dataPhones;
}

export async function getPhone(idParam) {
  const docRef = doc(db, "phones", idParam);
  const docResult = await getDoc(docRef);
  if (docResult.exists()) {
    return { id: docResult.id, ...docResult.data() };
  } else {
    throw new Error("El item no existe");
  }
}

export async function getOrder(idParam) {
  const docRef = doc(db, "orders", idParam);
  const docResult = await getDoc(docRef);
  if (docResult.exists()) {
    return { id: docResult.id, ...docResult.data() };
  } else {
    throw new Error("La orden no existe");
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

export async function createBuyOrder(orderData) {
  const batch = writeBatch(db);
  const orderCollection = collection(db, "orders");
  const phoneCollection = collection(db, "phones");
  const arrayIds = orderData.cart.map((item) => item.id);
  const q = query(phoneCollection, where(documentId(), "in", arrayIds));
  let itemsToUpdate = await getDocs(q);
  itemsToUpdate.docs.forEach((doc) => {
    let itemInCart = orderData.cart.find((item) => item.id === doc.id);
    batch.update(doc.ref, { stock: doc.data().stock - itemInCart.count });
  });
  batch.commit();
  let response = await addDoc(orderCollection, orderData);
  return response.id;
}

export default FirebaseApp;
