import firebase from '../services/firebase';

export const fetchActions = async (options = {}) => {
  const { currentUser } = firebase.auth();
  if (currentUser) {
    let query = await firebase.firestore().collection(`user/${currentUser.uid}/actions`);
    if (options?.filters?.length) {
      options.filters.forEach((o) => {
        query = query.where(o.field, o.opperand, o.value);
      });
    }
    const querySnapshot = await query.get();
    const results = [];
    querySnapshot.forEach((doc) => {
      results.push({ id: doc.id, ...(doc.data()) });
    });
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
  const { id, ...restAction } = action;
  await firebase
    .firestore()
    .collection(`user/${currentUser.uid}/actions`)
    .doc(id)
    .set(JSON.parse(JSON.stringify(restAction)));
};

export const updateAction = async (action) => {
  const { currentUser } = firebase.auth();
  const { id, ...restAction } = action;
  if (currentUser) {
    await firebase
      .firestore()
      .collection(`user/${currentUser.uid}/actions`)
      .doc(id)
      .set(JSON.parse(JSON.stringify(restAction)));
    return {
      id, ...restAction,
    };
  }
  throw new Error('Failed to create.');
};

export const deleteAction = async (id) => {
  const { currentUser } = firebase.auth();
  if (currentUser) {
    await firebase
      .firestore()
      .collection(`user/${currentUser.uid}/actions`)
      .doc(id)
      .delete();
    return;
  }
  throw new Error('Failed to delete.');
};
