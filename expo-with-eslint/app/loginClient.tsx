import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

import { useLoginUserMutation } from '@/graphql/generated';
import { useClientStore } from './zustand/setClinet';
import { useClientWelcomed } from './zustand/welcomedUser';

export default function LoginClient() {
  const { setUser, setToken } = useClientStore();
  const change = useClientWelcomed((state) => state.change);
  const router = useRouter();
  const [loginUser, { data, loading, error }] = useLoginUserMutation();
  const [email, SetEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    loginUser({
      variables: {
        input: {
          password: password,
          email: email,
        },
      },
    });
    if (data && data.loginUser) {
      let user = {
        name: data.loginUser.user.name,
        email: data.loginUser.user.email,
        id: data.loginUser.user.id,
        image: data.loginUser.user.image as string,
      };
      const token = data.loginUser.token;
      setUser(user);
      setToken(token);
      change();
      alert('succes');
      router.push('/(app)/(tabs)');
    }
  };

  if (loading) {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.header}>Login</Text>
        <View style={{ width: '100%', alignItems: 'center', display: 'flex', gap: 15 }}>
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
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Press Here</Text>
          </TouchableOpacity>
          <Link href="/SignUpClient">
            <Text>new user?</Text>
          </Link>
        </View>
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
    gap: 3,
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
