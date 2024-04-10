import React from 'react';
import { FlatList, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useBookmarks } from '../zustand/useBookmarks';
import { Gym, useGetGymsQuery } from '@/graphql/generated';

export default function Gyms() {
  const { data: gyms } = useGetGymsQuery();
  const router = useRouter();
  const { bookmark, isBookmarked } = useBookmarks();
  const pendingGyms = gyms?.getGyms.filter((gym: any) => gym.pending === true);
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
  if (pendingGyms?.length === 0) {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>dont have a gym</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={pendingGyms as Gym[]}
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
              <Image style={styles.image} source={{ uri: item?.thumbnail }} />
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
    borderColor: '#f0e59f',
    padding: 7,
    borderRadius: 7,
  },
  image: {
    width: 180,
    height: 200,
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
    color: '#f0e59f',
    fontWeight: 'bold',
  },
  itemText: {
    color: '#f0e59f',
  },
  addButton: {
    borderWidth: 1,
    borderColor: '#f0e59f',
    height: 30,
    width: 100,
    justifyContent: 'center',
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  addButtonText: {
    fontSize: 18,
    color: '#f0e59f',
  },
});
