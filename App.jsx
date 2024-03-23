import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,Button } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLogin = () => {
    // Perform login authentication or navigation to the next screen
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleSignInPress = () => {
    // Handle navigation to sign in screen or any other action
    console.log('Sign In pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('./assets/PNG image 1.png')} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={handleEmailChange}
          value={email}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          onChangeText={handlePasswordChange}
          value={password}
          placeholder="Password"
          secureTextEntry
        />
        <Text style={styles.forgetButton} >Forget Password</Text>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.ascontainer}>
    <Text style={styles.legalText}>Don't have an account? </Text>
    <Text style={styles.legalLink} onPress={handleSignInPress}>Sign up</Text> {/* Use SignUpButton component */}

  </View>
    <View style={styles.legalLinks}> 
      <Text style={styles.legalText}>By signing in, I accept the </Text>
      <Text onPress={() => console.log("Terms of Service pressed")} style={styles.legalLink}>Terms of Service</Text>
      <Text style={styles.legalText}> and </Text>
      <Text onPress={() => console.log("Community Guidelines pressed")} style={styles.legalLink}>Community Guidelines</Text>
      <Text style={styles.legalText}> and have </Text>
      <Text onPress={() => console.log("Privacy Policy pressed")} style={styles.legalLink}>read the Privacy Policy</Text>
    </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#470D25',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 150,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'white',
    backgroundColor:'white'
  },
  loginButton: {
    backgroundColor: 'orange',
    marginTop: 5,
    paddingVertical: 6,
    borderRadius: 5,
    alignItems: 'center',
    width:300,
    marginLeft:'auto',
    marginRight:'auto'
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  forgetButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
   alignItems:'center'
  },
  ascontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:10
    
  },

  legalLinks: {
    lineHeight:20,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap', // Allow legal links to wrap if needed
    marginTop: 50, // Add some margin for better separation
  },
  legalText: {
    color:'#F6BED6',
    fontSize: 16, // Adjust font size as needed
     // Adjust color as needed
  },
  legalLink: {
    
    fontSize: 16, // Adjust font size as needed
    color: 'white',
    textDecorationLine: 'underline', // Add underline for clarity
  },

  
});


