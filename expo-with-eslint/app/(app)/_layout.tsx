import { Stack } from 'expo-router';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import { useClientWelcomed } from '../zustand/welcomedUser';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import LoginClient from '../LoginClient';

const AppLayout = () => {
  const welcomed = useClientWelcomed((state) => state.welcomed);
  const client = new ApolloClient({
    uri: 'https://2024-demo-backend-3tq4.vercel.app/api/graphql',
    cache: new InMemoryCache(),
  });
  if (!welcomed) {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ApolloProvider client={client}>
          <LoginClient />
        </ApolloProvider>
      </KeyboardAvoidingView>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
};
export default AppLayout;
