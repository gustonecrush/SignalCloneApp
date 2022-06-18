import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, SafeAreaView } from "react-native";
import { Button, Input, Image } from "react-native-elements";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login");
    }, 4000);
  }, [navigation]);
  
  return (
    <SafeAreaView
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#FFF",
      }}
    >
      <StatusBar style="light" />
      <Image
        style={{ width: 150, height: 150 }}
        source={{
          uri: "https://seeklogo.com/images/S/signal-logo-20A1616F60-seeklogo.com.png",
        }}
      />
    </SafeAreaView>
  );
};

export default SplashScreen;
