import { Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function Header() {
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
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <Link href="/(tabs)/Defualt">
          <AntDesign name="github" size={34} />
        </Link>
        <Text style={{ fontSize: 33 }}>Username</Text>
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
        <Text style={{ color: 'white' }}>logo</Text>
      </View>
    </View>
  );
}
