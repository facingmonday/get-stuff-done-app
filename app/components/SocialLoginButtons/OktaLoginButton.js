import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest, useAutoDiscovery } from 'expo-auth-session';
import { Button, Platform } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

const useProxy = Platform.select({ web: false, default: true });

export default function OktaLoginButton({ onSuccess }) {
  // Endpoint
  const discovery = useAutoDiscovery('https://dev-22895487.okta.com/oauth2/default');
  // Request
  const redirect = makeRedirectUri({
    // For usage in bare and standalone
    native: 'com.okta.dev-22895487:/callback',
    useProxy,
  });
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '0oa46h55kv054kglg5d6',
      scopes: ['openid', 'profile'],
      // For usage in managed apps using the proxy
      redirectUri: redirect,
    },
    discovery,
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      onSuccess(code);
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync({ useProxy });
      }}
    />
  );
}
