// import { collection, getDocs } from "firebase/firestore";
// import { db } from "./firebase";
// import FirebaseFetch from "./firebase.js";

// const colRef = collection(db, "markers");

// getDocs(colRef)
//   .then((snapshot) => {
//     let markers = [];
//     snapshot.docs.forEach((doc) => {
//       markers.push({ ...doc.data(), id: doc.id });
//     });
//     console.log(markers);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
