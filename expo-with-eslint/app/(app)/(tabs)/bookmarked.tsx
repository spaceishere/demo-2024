import React from 'react';
import MapView from 'react-native-maps';
import { GetGymsQuery, Gym, useGetGymsQuery } from '@/graphql/generated';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useBookmarks } from '../../zustand/useBookmarks';
import { useRouter } from 'expo-router';

export default function App() {
  const { data: gyms } = useGetGymsQuery();
  const router = useRouter();
  const items = useBookmarks((state) => state.items);
  const SavedId = items.map((e) => e.id);
  const filteredId = gyms?.getGyms.filter((e: any) => SavedId.includes(e.id));
  const { bookmark, isBookmarked } = useBookmarks();

  console.log(filteredId?.length);

  if (filteredId?.length === 0) {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>You dont have saved gym</Text>
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={filteredId}
        keyExtractor={(item: Gym) => item.id.toString()}
        renderItem={({ item }) => {
          const isAdded = isBookmarked(item.id);
          return (
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: `/GymDetail/[id]`,
                  params: { id: item.id },
                })
              }
              style={styles.itemContainer}>
              <Image style={styles.image} source={{ uri: item?.image[0] }} />
              <View style={styles.textContainer}>
                <Text style={styles.gymName}>{item.name}</Text>
                <Text style={styles.itemText}>{item.title.slice(0, 150)}</Text>
                <TouchableOpacity onPress={() => bookmark(item.id)} style={styles.addButton}>
                  {isAdded ? (
                    <Text style={styles.addButtonText}>Remove</Text>
                  ) : (
                    <Text style={styles.addButtonText}>+ My List</Text>
                  )}
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 2,
    padding: 7,
    borderRadius: 7,
    borderColor: 'black',
  },
  image: {
    width: 150,
    height: 180,
    borderRadius: 10,
  },
  textContainer: {
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingLeft: 30,
    width: '50%',
  },
  gymName: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  itemText: {
    color: 'black',
  },
  addButton: {
    borderWidth: 1,
    height: 30,
    paddingHorizontal: 30,
    justifyContent: 'center',
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  addButtonText: {
    fontSize: 18,
  },
});
