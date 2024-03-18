import { Link, useRouter } from 'expo-router';
import React, { JSXElementConstructor, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useClientWelcomed } from './zustand/welcomedUser';

export default function loginClient() {
  const router = useRouter();
  const change = useClientWelcomed((state) => state.change);
  const data = {
    email: '123',
    username: '123',
    password: '123',
  };

  const [username, SetUserName] = useState('');
  const [email, SetEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confpassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    router.replace('/signUpClient');
  };

  const handleSignUp = () => {
    if (email.length === 0) return Alert.alert(`email field is empty`);
    if (password.length === 0) return Alert.alert(`password field is empty`);
    if (username.length === 0) return Alert.alert(`name field is empty`);

    if (data.email === email) {
      if (data.username === username) {
        if (data.password === password) {
          change();
          router.replace('/(tabs)/Defualt');
          Alert.alert(`login succes`);
        } else {
          Alert.alert(`email , username or password is mistake`);
        }
      } else {
        Alert.alert(`email , username or password is mistake`);
      }
    } else {
      Alert.alert(`email , username or password is mistake`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.header}>Login</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your username"
          onChangeText={(newText) => SetUserName(newText)}
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.textInput}
          placeholder="example@gmai.com"
          onChangeText={(newText) => SetEmail(newText)}
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.textInput}
          placeholder="password"
          onChangeText={(newText) => setPassword(newText)}
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.textInput}
          placeholder="confirm password"
          onChangeText={(newText) => setConfirmPassword(newText)}
          placeholderTextColor="black"
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Press Here</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegister}>
          <Text>push sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  textInput: {
    width: '70%',
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    marginBottom: 20,
    // Added to create space between inputs
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '70%',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
  },
});
