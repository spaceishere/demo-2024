import { Image, ImageBackground, Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { useGlobalSearchParams } from 'expo-router';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Gym, useGetGymsQuery } from '@/graphql/generated';

export default function GymDetail() {
  const { data: gyms } = useGetGymsQuery();
  const { id } = useGlobalSearchParams(); // Verify that 'id' is correctly retrieved

  const data = gyms?.getGyms.find((gym: any) => gym.id === id);

  const xValue = Number(data?.postition[0]);
  const yValue = Number(data?.postition[1]);
  console.log(data);

  if (!gyms) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Gym not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <ScrollView>
      <View style={{ display: 'flex', gap: 10 }}>
        <ImageBackground
          source={{ uri: data?.thumbnail }}
          resizeMode="cover"
          style={styles.imageBackground}>
          <Text style={styles.headerText}>hello kings</Text>
        </ImageBackground>
        <FlatList
          data={data?.image}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image source={{ uri: item }} style={styles.image} />
              <Text>lol</Text>
            </View>
          )}
        />
        <View style={styles.footerContainer}>
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
              title={data?.name} // Changed from "lol" to use gym name
            />
          </MapView>
          <Text style={styles.footerTitle}>{data?.name} </Text>
          <Text style={styles.footerText}>{data?.title}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  imageContainer: {
    flex: 1,
    paddingLeft: 8,
    width: 370,
    height: 200,
    borderRadius: 18,
  },
  image: {
    height: 200,
    width: '100%',
    justifyContent: 'space-between',
    paddingBottom: 50,
    borderRadius: 18,
    overflow: 'hidden',
    display: 'flex',
  },
  footerContainer: {
    alignItems: 'center', // Centers the footer content
    marginVertical: 20, // Adds vertical space around the footer content
    display: 'flex',
    gap: 40,
  },
  footerTitle: {
    fontWeight: 'bold',
    fontSize: 40,
  },
  footerText: {
    fontSize: 20, // Adds a specific font size for consistency
  },
  map: {
    width: '100%',
    height: 250, // Adjusted for better visibility
  },
});
