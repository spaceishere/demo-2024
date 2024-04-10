import { useClientWelcomed } from './zustand/welcomedUser';
import { Slot } from 'expo-router';
import { KeyboardAvoidingView } from 'react-native';

import Header from './component/Header';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
const RootLayoutNav: React.FC = () => {
  const client = new ApolloClient({
    uri: 'https://2024-demo-backend-3tq4.vercel.app/api/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: 'black' }}>
      <ApolloProvider client={client}>
        <Header />
        <Slot />
      </ApolloProvider>
    </KeyboardAvoidingView>
  );
};

export default RootLayoutNav;
