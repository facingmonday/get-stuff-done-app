import firebase from '../services/firebase';

export const fetchActions = async (options = {}) => {
  const { currentUser } = firebase.auth();
  if (currentUser) {
    console.log('currentUser', currentUser.uid);
    let query = await firebase.firestore().collection(`user/${currentUser.uid}/actions`);
    if (options?.filters?.length) {
      options.filters.forEach((o) => {
        query = query.where(o.field, o.opperand, o.value);
      });
    }
    const querySnapshot = await query.get();
    const results = [];
    querySnapshot.forEach((doc) => results.push({ id: doc.id, ...(doc.data()) }));
    return results;
  }
  throw new Error('Failed to fetch actions for current user.');
};

export const fetchAction = async (id) => {
  const { currentUser } = firebase.auth();
  if (currentUser) {
    const querySnapshot = await firebase
      .firestore()
      .collection('user')
      .doc(currentUser.uid)
      .collection('actions')
      .doc(id)
      .get();
    const results = [];
    querySnapshot.forEach((doc) => results.push({ id: doc.id, ...(doc.data()) }));
    return results;
  }
  throw new Error('Failed to fetch action');
};

export const createAction = async (action) => {
  const { currentUser } = firebase.auth();
  if (currentUser) {
    const docRef = await firebase
      .firestore()
      .collection(`user/${currentUser.uid}/actions`)
      .add(action);
    if (docRef.id) {
      const docSnapshot = await docRef.get();
      return docSnapshot.data();
    }
  }
  throw new Error('Failed to create.');
};

export const updateAction = async (action) => {
  const { currentUser } = firebase.auth();
  const { id, ...restAction } = action;
  if (currentUser) {
    await firebase
      .firestore()
      .collection(`user/${currentUser.uid}/actions`)
      .doc(id)
      .set(restAction, { merge: true });
    return {
      id, ...restAction,
    };
  }
  throw new Error('Failed to create.');
};

export const deleteAction = async (id) => {
  const { currentUser } = firebase.auth();
  if (currentUser) {
    const querySnapshot = await firebase
      .firestore()
      .collection('user')
      .doc(currentUser.uid)
      .collection('actions')
      .doc(id)
      .get();
    const results = [];
    querySnapshot.forEach((doc) => results.push({ id: doc.id, ...(doc.data()) }));
    return results;
  }
  throw new Error('Failed to delete.');
};
