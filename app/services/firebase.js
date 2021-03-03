import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/firestore';

import firebaseConfig from '../../config/firebase';

firebase.initializeApp(firebaseConfig);

export async function getCollection(path, options = {}) {
  let ref = firebase.firestore().collection(path);

  if (options?.filters?.length) {
    options.filters.forEach((o) => {
      ref = ref.where(o.field, o.opperand, o.value);
    });
  }

  return ref.get();
}

export async function getDocument(path, id) {
  const docRef = await firebase.firestore().collection(path).doc(id).get();
  if (docRef.id) {
    return { id: docRef.id, ...docRef.data() };
  }
  return null;
}
export async function updateDocument(path, id, data) {
  return firebase.firestore().collection(path).doc(id).set(data);
}
export async function deleteDocument(path, id) {
  return firebase.firestore().collection(path).doc(id).delete();
}
export async function addDocument(path, document) {
  return firebase.firestore().collection(path).add(document);
}

export default firebase;
