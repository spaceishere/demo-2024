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
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 40,
      }}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
        <Link href="/(app)/(tabs)/Defualt">
          <MaterialIcons name="run-circle" size={50} color="black" />
        </Link>
        <Text style={{ fontSize: 33 }}> hello 👋 {user.name}</Text>
      </View>
      <View
        style={{
          width: 34,
          height: 34,
          backgroundColor: 'black',
          borderWidth: 1,
          borderRadius: 34,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri: `${user.image}`,
          }}
          width={35}
          height={35}
          style={{ borderRadius: 150 }}
        />
      </View>
    </View>
  );
}
