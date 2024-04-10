import { Image, ImageBackground, Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { useGlobalSearchParams } from 'expo-router';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Gym, useGetGymsQuery } from '@/graphql/generated';

export default function GymDetail() {
  const { data: gyms } = useGetGymsQuery();

  const { id } = useGlobalSearchParams(); // Verify that 'id' is correctly retrieved

  const data = gyms?.getGyms.find((gym: any) => gym.id === id);
  console.log(data?.postition);

  const xValue = Number(data?.postition[0]);
  const yValue = Number(data?.postition[1]);

  if (!gyms) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Gym not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <ScrollView>
      <View style={{ flex: 1, gap: 20 }}>
        <View style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <Text style={styles.footerTitle}>{data?.name} </Text>
          <FlatList
            data={data?.image}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            renderItem={({ item }) => (
              <View style={styles.imageContainer}>
                <Image source={{ uri: item }} style={styles.image} />
              </View>
            )}
          />
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>{data?.title}</Text>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: 'center', gap: 20 }}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: xValue || 0,
              longitude: yValue || 0,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker
              image={require('../../assets/images/pin.png')} // Ensure the path to the image is correct
              coordinate={{
                latitude: xValue || 0,
                longitude: yValue || 0,
              }}
              title={data?.name}
            />
          </MapView>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    paddingLeft: 18,
    width: 370,
    height: 200,
    borderRadius: 18,
  },
  image: {
    borderWidth: 1,
    borderColor: '#f0e59f',
    height: 200,
    width: '100%',
    justifyContent: 'space-between',
    paddingBottom: 50,
    borderRadius: 18,
    overflow: 'hidden',
    display: 'flex',
  },
  footerContainer: {
    width: '100%',
    alignItems: 'center', // Centers the footer content
    display: 'flex',
    paddingHorizontal: 20,
  },
  footerTitle: {
    color: '#f0e59f',
    fontWeight: 'bold',
    fontSize: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    textAlign: 'center',
  },
  footerText: {
    fontSize: 20,
    color: '#f0e59f',
    // Adds a specific font size for consistency
  },
  map: {
    width: '90%',
    height: 230, // Adjusted for better visibility
  },
});
