import AsyncStorage from '@react-native-community/async-storage';
import { buildUrl, formatFilterAndSortOptions } from '../utils';

const PATH = '/{{camelCaseName}}s';

export const fetch{{PascalCase}}s = async (options = {}) => {
  const url = `${buildUrl(PATH)}${formatFilterAndSortOptions(options)}`;
  const token = await AsyncStorage.getItem('token');
  if (!token) {
    const e = new Error();
    e.code = 401;
    e.message = 'Failed to get token';
    throw e;
  }
  const response = await fetch(url, {
    method: 'GET',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }),
    mode: 'cors',
  });
  if (response.status === 200 || response.status === 201) {
    return response.json();
  }
  const e = new Error();
  e.code = response.status;
  throw e;
};

export const fetch{{PascalCase}} = async id => {
  const url = `${buildUrl(PATH)}/${id}`;
  const token = await AsyncStorage.getItem('token');
  if (!token) {
    const e = new Error();
    e.code = 401;
    e.message = 'Failed to get token';
    throw e;
  }
  const response = await fetch(url, {
    method: 'GET',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }),
    mode: 'cors',
  });
  if (response.status === 200 || response.status === 201) {
    return response.json();
  }
  if (response.status === 204) {
    return response.status;
  }
  const e = new Error();
  e.code = response.status;
  e.message = response.statusText;
  throw e;
};

export const save{{PascalCase}} = async {{camelCaseName}} => {
  const url = {{camelCaseName}}.{{camelCaseName}}Id ? `${buildUrl(PATH)}/${ {{camelCaseName}}.{{camelCaseName}}Id}` : `${buildUrl(PATH)}`;
  const token = await AsyncStorage.getItem('token');
  if (!token) {
    const e = new Error();
    e.code = 401;
    e.message = 'Failed to get token';
    throw e;
  }
  const response = await fetch(url, {
    method: {{camelCaseName}}.{{camelCaseName}}Id ? 'PUT' : 'POST',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }),
    mode: 'cors',
    body: JSON.stringify({{camelCaseName}}),
  });
  if (response.status === 200 || response.status === 201) {
    return response.json();
  }
  if (response.status === 204) {
    return response.status;
  }
  const e = new Error();
  e.code = response.status;
  e.message = response.statusText;
  throw e;
};

export const delete{{PascalCase}} = async {{camelCaseName}}Id => {
  const url = `${buildUrl(PATH)}/` + {{camelCaseName}}Id;
  const token = await AsyncStorage.getItem('token');
  if (!token) {
    const e = new Error();
    e.code = 401;
    e.message = 'Failed to get token';
    throw e;
  }
  const response = await fetch(url, {
    method: 'DELETE',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }),
    mode: 'cors',
  });

  if (response.status === 200 || response.status === 201) {
    return response.json();
  }
  if (response.status === 204) {
    return response.status;
  }
  const e = new Error();
  e.code = response.status;
  e.message = response.statusText;
  throw e;
};
