import { Image, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { useClientWelcomed } from '../zustand/welcomedUser';
import { useClientStore } from '../zustand/setClinet';
import { MaterialIcons } from '@expo/vector-icons';
export default function Header() {
  const user = useClientStore((state) => state.user);
  const welcomed = useClientWelcomed((state) => state.welcomed);
  if (!welcomed) {
    return <></>;
  }
  return (
    <View
      style={{
        height: 70,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 30,
        marginVertical: 40,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 1,
          gap: 5,
        }}>
        <Link href={'/(app)/(tabs)/Defualt'}>
          <Image
            source={{ uri: 'https://i.ibb.co/ZN5T8Bd/fitness-high-resolution-logo.png' }}
            width={140}
            height={80}
          />
        </Link>

        <Text style={{ fontSize: 33, color: '#f0e59f' }}> hello 👋 {user.name}</Text>
      </View>
    </View>
  );
}
