import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { auth, db } from "../../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      //   console.log(authUser);
      if (authUser) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        style={{ width: 150, height: 150 }}
        source={{
          uri: "https://seeklogo.com/images/S/signal-logo-20A1616F60-seeklogo.com.png",
        }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          type="password"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
          // style={{ fontFamily: 'Poppins-Regular' }}
        />
      </View>
      <Button
        title="Log In"
        containerStyle={[styles.btn, { marginTop: 15 }]}
        onPress={signIn}
      />
      <Button
        title="Register"
        containerStyle={[styles.btnRegister, styles.btn]}
        type={"outline"}
        onPress={() => navigation.navigate("Register")}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    backgroundColor: "#FFF",
  },
  inputContainer: {
    width: 300,
  },
  btn: {
    width: 200,
    marginBottom: 10,
  },
});

export default LoginScreen;
