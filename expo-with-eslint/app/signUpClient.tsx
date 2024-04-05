import { router } from 'expo-router';
import { useSignUp } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRegisterUserMutation } from '@/graphql/generated';
export default function SignUpClient() {
  const [username, SetUserName] = useState('');
  const [email, SetEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confpassword, setConfirmPassword] = useState('');
  const [registerUser, { data, loading, error }] = useRegisterUserMutation();

  const handleSignUp = () => {
    registerUser({
      variables: {
        input: {
          email: email,
          image: 'https://i.pinimg.com/564x/8b/a5/ed/8ba5ed31934f2e6d448e82ef8a1cfb66.jpg',
          name: username,
          password: password,
        },
      },
    });
    alert('user created');
    router.push('/LoginClient');
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.header}>Sign Up</Text>
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
