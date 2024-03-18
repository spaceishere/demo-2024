import {
  Alert,
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Link, router } from 'expo-router';
import { data, gyms } from '../../data/Client';
import { useClientWelcomed } from '../zustand/welcomedUser';
import { useBookmarks } from '../zustand/useBookmarks';

export default function TabOneScreen(): React.ReactNode {
  const logOut = useClientWelcomed((state) => state.logOut);
  const items = useBookmarks((state) => state.items);
  const SavedId = items.map((e) => e.id);
  const filteredId = gyms.filter((e) => SavedId.includes(e.id));
  return (
    <View style={styles.container}>
      <ScrollView style={{ display: 'flex', gap: 30 }}>
        <View style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            source={{
              uri: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
            }}
            width={150}
            height={150}
            style={{ borderRadius: 150 }}
          />
        </View>
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
              <Text style={{ fontSize: 20 }}>{data.username}</Text>
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
              <Text style={{ fontSize: 20 }}>{data.username}</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              width: 350,
              display: 'flex',
              paddingBottom: 10,
              alignItems: 'center',
              borderBottomWidth: 1,
              marginBottom: 20,
            }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Liked</Text>
          </View>

          <FlatList
            data={filteredId}
            numColumns={3}
            renderItem={({ item }) => (
              <View style={{ display: 'flex', width: 120, alignItems: 'center' }}>
                <Image
                  source={{ uri: item.images[0] }}
                  width={110}
                  height={150}
                  style={{ marginBottom: 20 }}
                />
              </View>
            )}
          />
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
              logOut;
              router.push('../loginClient');
            }}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
