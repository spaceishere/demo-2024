import { Stack } from 'expo-router';

import Header from './component/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useClientWelcomed } from './zustand/welcomedUser';
import loginClient from './loginClient';
const RootLayoutNav: React.FC = () => {
  const welcomed = useClientWelcomed((state) => state.welcomed);

  if (!welcomed) {
    return <loginClient />;
  }
  return (
    <>
      <Header />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="signUpClient" options={{ headerShown: false }} />
        <Stack.Screen name="loginClient" options={{ headerShown: false }} />
        <Stack.Screen name="GymDetail/[id]" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default RootLayoutNav;
