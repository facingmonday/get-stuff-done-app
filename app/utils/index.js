import merge from 'deepmerge';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { API_HOST } from '../../config/constants';

// import Cookies from 'universal-cookie';
// const cookies = new Cookies();

export const setCookie = (name, value) => window.localStorage.setItem(name, value);

export const getCookie = (name) => window.localStorage.getItem(name);

export const deleteCookie = (name) => window.localStorage.removeItem(name);

export const buildUrl = (path) => `${API_HOST}/api/v1${path}`;

export const objectToEqualsString = (obj) => `${Object.keys(obj)[0]}=${Object.values(obj)[0]}`;

export const flattenOptions = (options) => {
  let args = [];

  Object.keys(options).forEach((key) => {
    const option = options[key];
    if (option instanceof Array) {
      option.forEach((k) => {
        args = args.concat(
          flattenOptions(k).map((opt) => ({ [`${key}.${Object.keys(opt)[0]}`]: Object.values(opt)[0] })),
        );
      });
    } else if (option !== null && typeof option !== 'undefined') {
      args.push({ [key]: option });
    }
  });
  return args;
};

export function formatFilterAndSortOptions(options = {}) {
  try {
    const flattenedOptions = flattenOptions(options);
    if (flattenedOptions && flattenedOptions.length) {
      return `?${flattenedOptions.map((option) => objectToEqualsString(option)).join('&')}`;
    }
    return '';
  } catch (e) {
    return '';
  }
}

export function mergeOptions(...args) {
  return merge.all(args);
}

export async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    // alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

export const formatStripeDate = (timeInSecondsSinceEpoc) => {
  const dateObj = new Date(timeInSecondsSinceEpoc * 1000);
  return `${dateObj.getMonth()}/${dateObj.getDate()}/${dateObj.getYear()}`;
};
