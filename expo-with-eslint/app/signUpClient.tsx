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
        <Text style={styles.header}>Бүртгүүлэх</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Нэр"
          onChangeText={(newText) => SetUserName(newText)}
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.textInput}
          placeholder="И-мэйл хаяг"
          onChangeText={(newText) => SetEmail(newText)}
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Нууц үг"
          onChangeText={(newText) => setPassword(newText)}
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Нууц үг баталгаажуулах"
          onChangeText={(newText) => setConfirmPassword(newText)}
          placeholderTextColor="white"
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Үргэлжлүүлэх →</Text>
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
    gap: 1,
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
    paddingBottom: 20,
    color: 'white',
  },
  textInput: {
    width: '70%',
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    marginBottom: 20,
    color: 'white',
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
