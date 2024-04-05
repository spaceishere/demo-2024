import React from 'react';
import { FlatList, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useBookmarks } from '../zustand/useBookmarks';
import { Gym, useGetGymsQuery } from '@/graphql/generated';

export default function Gyms() {
  const { data: gyms } = useGetGymsQuery();
  const router = useRouter();
  const { bookmark, isBookmarked } = useBookmarks();

  if (!gyms) {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>loading...!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={gyms?.getGyms as Gym[]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const isAdded: any = isBookmarked(item.id);
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
                <Text style={styles.itemText}>{item.name.slice(0, 150)}</Text>
                <TouchableOpacity onPress={() => bookmark(item.id)} style={styles.addButton}>
                  {isAdded ? (
                    <Text style={styles.addButtonText}>Remove</Text>
                  ) : (
                    <Text style={styles.addButtonText}>+ Add list</Text>
                  )}
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: 100,
    justifyContent: 'center',
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  addButtonText: {
    fontSize: 18,
  },
});
