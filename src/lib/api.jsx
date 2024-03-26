import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore/lite";
import { GetCurrentUser } from "./auth";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};

// miragejs server

// export async function getVans(id) {
//   const url = id ? `/api/vans/${id}` : "/api/vans";
//   const res = await fetch(url);
//   if (!res.ok) {
//     throw {
//       message: "Failed to fetch vans",
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }
//   const data = await res.json();
//   const vans = data.vans;
//   return vans;
// }

// export async function getHostVans(id) {
//   const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
//   const res = await fetch(url);
//   if (!res.ok) {
//     throw {
//       message: "Failed to fetch vans",
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }
//   const data = await res.json();
//   const vans = data.vans;
//   return vans;
// }

// FIREBASE DB

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const vansCollectionRef = collection(db, "vans");

export async function getVans() {
  const querySnapshot = await getDocs(vansCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return dataArr;
}

export async function getVan(id) {
  const docRef = doc(db, "vans", id);
  const vanSnap = await getDoc(docRef);
  return {
    ...vanSnap.data(),
    id: vanSnap.id,
  };
}

export async function getHostVans() {
  const user = GetCurrentUser();
  const q = query(vansCollectionRef, where("hostId", "==", user.id));
  const querySnapshot = await getDocs(q);
  const dataArr = querySnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return dataArr;
}

export async function getHostVan(id) {
  const docRef = doc(db, "vans", id);
  const vanSnap = await getDoc(docRef);
  return {
    ...vanSnap.data(),
    id: vanSnap.id,
  };
}

export async function LoginUser(email, password) {
  const auth = getAuth(firebaseApp);
  try {
    const data = await signInWithEmailAndPassword(auth, email, password);
    const user = data.user;
    const userJson = {
      id: user.uid,
      email: user.email,
      token: user.accessToken,
    };
    return userJson;
  } catch (err) {
    const errorCode = err.code;
    const errorMessage = err.message;
    throw {
      message: errorMessage,
      status: errorCode,
    };
  }
}
