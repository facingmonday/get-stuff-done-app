import { CommonActions } from '@react-navigation/native';

let _navigator;

export function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

export function navigate(routeName, params) {
  _navigator.dispatch(
    CommonActions.navigate({
      routeName,
      params,
    }),
  );
}

export function replace(routeName, params) {
  _navigator.dispatch(
    CommonActions.replace({
      routeName,
      params,
    }),
  );
}

export default {
  navigate,
  replace,
  setTopLevelNavigator,
};
