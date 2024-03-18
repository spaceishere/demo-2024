import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { create } from 'zustand';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import Gyms from '../component/Gyms';
import { useClientStore } from '../zustand/setClinet';
import { useBookmarks } from '../zustand/useBookmarks';

type ApiResponse = any;

export default function Home() {
  const name = useClientStore((state) => state.name);
  const change = useClientStore((state) => state.change);
  const changeBack = useClientStore((state) => state.changeBack);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="search by name"
        style={{
          width: '83%',
          height: 50,
          borderWidth: 1,
          paddingHorizontal: 20,
          fontSize: 20,
          borderRadius: 5,
          marginVertical: 20,
        }}
        placeholderTextColor="black"
      />
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
