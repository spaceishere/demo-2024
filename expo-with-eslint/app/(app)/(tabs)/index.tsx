import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { useClientWelcomed } from '../../zustand/welcomedUser';
import { useBookmarks } from '../../zustand/useBookmarks';
import { useClientStore } from '@/app/zustand/setClinet';

export default function TabOneScreen(): React.ReactNode {
  const user = useClientStore((state) => state.user);
  const logOut = useClientWelcomed((state) => state.logOut);
  const items = useBookmarks((state) => state.items);
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `${user.image}`,
        }}
        width={150}
        height={150}
        style={{ borderRadius: 150 }}
      />
      <View style={{ display: 'flex', gap: 25 }}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Name</Text>
          <View
            style={{
              borderWidth: 1,
              width: 350,
              height: 50,
              borderColor: 'gray',
              display: 'flex',
              justifyContent: 'center',
              paddingLeft: 15,
            }}>
            <Text style={{ fontSize: 20 }}>{user.name}</Text>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Email</Text>
          <View
            style={{
              borderWidth: 1,
              width: 350,
              height: 50,
              borderColor: 'gray',
              display: 'flex',
              justifyContent: 'center',
              paddingLeft: 15,
            }}>
            <Text style={{ fontSize: 20 }}>{user.email}</Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 30 }}>
        {/* <View
            style={{
              width: 350,
              display: 'flex',
              paddingBottom: 10,
              alignItems: 'center',
              borderBottomWidth: 1,
              marginBottom: 20,
            }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Liked</Text>
          </View> */}
      </View>
      <View style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            marginBottom: 50,
            borderWidth: 1,
            width: '80%',
            paddingHorizontal: 20,
            paddingVertical: 10,
            display: 'flex',
            alignItems: 'center',
            borderRadius: 8,
          }}
          onPress={() => {
            Alert.alert('log outed');
            logOut();
            router.push('../LoginClient');
          }}>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
