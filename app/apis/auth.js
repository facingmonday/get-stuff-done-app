import * as Facebook from 'expo-facebook';
import firebase from '../services/firebase';

export async function loginUser(credentials) {
  await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  const { user } = await firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password);
  if (user) {
    const token = await user.getIdToken();
    return {
      ...user.toJSON(),
      token,
    };
  }
  const e = new Error();
  e.code = 'auth';
  e.message = 'Unable to login user';
  throw e;
}

export async function registerUser(credentials) {
  await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  const { user: auth } = await firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password);
  if (auth) {
    await firebase
      .firestore()
      .collection('user')
      .doc(auth.uid)
      .set({
        uid: auth.uid,
        name: credentials.name,
        city: credentials.city,
        state: credentials.state,
        zip: credentials.zip,
      });
    return;
  }
  const e = new Error();
  e.code = 'auth';
  e.message = 'User not logged in.';
  throw e;
}

export async function saveProfile(profile) {
  const { currentUser } = firebase.auth();
  if (currentUser) {
    const userProfile = await currentUser.updateProfile(profile);
    if (userProfile) {
      return userProfile;
    }
    const e = new Error();
    e.code = 'profile';
    e.message = 'Failed to save user profile';
    throw e;
  }
  const e = new Error();
  e.code = 'auth';
  e.message = 'User not logged in.';
  throw e;
}

export async function reload() {
  const { currentUser } = firebase.auth();
  if (currentUser) {
    return currentUser.reload();
  }
  const e = new Error();
  e.code = 'auth';
  e.message = 'User not logged in.';
  throw e;
}

export async function signOut() {
  return firebase.auth().signOut();
}

export async function getCurrentUser() {
  const { currentUser } = firebase.auth();
  return currentUser;
}

export async function createUserWithEmailAndPassword(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

export async function signInWithEmailAndPassword(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export async function loginWithFacebook() {
  // https://power-list-cc413.firebaseapp.com/__/auth/handler
  await Facebook.initializeAsync('264102915202827');
  const { type, token } = await Facebook.logInWithReadPermissionsAsync({
    permissions: ['public_profile'],
  });

  if (type === 'success') {
    // Build Firebase credential with the Facebook access token.
    const credential = firebase.auth.FacebookAuthProvider.credential(token);

    // Sign in with credential from the Facebook user.
    const result = await firebase.auth().signInWithCredential(credential);
    return result;
  }

  // const provider = new firebase.auth.FacebookAuthProvider();
  // provider.setCustomParameters({
  //   display: 'popup',
  // });
  // // const result = await firebase.auth().signInWithPopup(provider);
  // const result = await firebase.auth().signInWithRedirect(provider);
  // console.log('result', result);
  // const { credential: { accessToken }, user } = result;
  // console.log('accessToken', accessToken);
  // if (user) {
  //   return {
  //     ...user.toJSON(),
  //     token: accessToken,
  //   };
  // }
  const e = new Error();
  e.code = 'auth';
  e.message = 'Unable to login user';
  throw e;
}

export async function signInAnonymously() {
  await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  return firebase.auth().signInAnonymously();
}

export async function updateProfile(profile) {
  const { currentUser } = firebase.auth();
  if (currentUser) {
    return currentUser.updateProfile(profile);
  }
  return false;
}
