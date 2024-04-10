import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Gyms from '../../component/Gyms';
import { useClientStore } from '../../zustand/setClinet';

export default function Home() {
  return (
    <View style={styles.container}>
      <Gyms />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
  },
  notificationContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  iconBackground: {
    width: 50,
    height: 50,
    backgroundColor: 'gray',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  proBadge: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 56, // Adjusted for better visibility
    color: 'white',
    marginTop: 20,
  },
  textInput: {
    width: '90%',
    borderWidth: 2,
    borderColor: 'white',
    height: 60,
    marginBottom: 30,
    paddingLeft: 20,
    marginTop: 20, // Added some margin to separate from the greeting text
  },
});
