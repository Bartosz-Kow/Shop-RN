import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Register = () => {
  return (
    <>
      <StatusBar
        style="dark"
        translucent={true}
        backgroundColor="transparent"
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        >
          <View className="flex-1 justify-center items-center px-6 py-8">
            <Text className="text-4xl font-semibold mb-2 text-left w-full">
              Create an
            </Text>
            <Text className="text-4xl font-semibold mb-6 text-left w-full">
              Account
            </Text>

            <View className="w-full mb-4 relative">
              <TextInput
                placeholder="Email"
                placeholderTextColor="#B0B0B0"
                className="w-full p-4 mb-4 border-2 border-gray-300 rounded-lg pl-12"
              />
              <Icon
                name="envelope"
                size={20}
                color="#B0B0B0"
                style={{ position: "absolute", left: 16, top: 16 }}
              />
            </View>

            <View className="w-full mb-4 relative">
              <TextInput
                placeholder="Password"
                secureTextEntry
                placeholderTextColor="#B0B0B0"
                className="w-full p-4 mb-4 border-2 border-gray-300 rounded-lg pl-12"
              />
              <Icon
                name="lock"
                size={20}
                color="#B0B0B0"
                style={{ position: "absolute", left: 16, top: 16 }}
              />
            </View>

            <View className="w-full mb-4 relative">
              <TextInput
                placeholder="Confirm Password"
                secureTextEntry
                placeholderTextColor="#B0B0B0"
                className="w-full p-4 mb-4 border-2 border-gray-300 rounded-lg pl-12"
              />
              <Icon
                name="lock"
                size={20}
                color="#B0B0B0"
                style={{ position: "absolute", left: 16, top: 16 }}
              />
            </View>

            <Text className="text-sm text-center mb-6">
              By clicking the <Text className="text-[#F83758]">Register</Text>{" "}
              button, you agree to the public offer
            </Text>

            <TouchableOpacity className="w-full py-3 bg-[#F83758] rounded-lg mb-4">
              <Text className="text-white text-center font-semibold text-xl">
                Create Account
              </Text>
            </TouchableOpacity>

            <Text className="text-center text-lg mb-4">
              - OR continue with -
            </Text>

            <View className="flex-row justify-center mb-8">
              <TouchableOpacity className="w-16 h-16 justify-center items-center rounded-full bg-gray-200 mx-3">
                <Icon name="google" size={32} color="#db4437" />
              </TouchableOpacity>
              <TouchableOpacity className="w-16 h-16 justify-center items-center rounded-full bg-gray-200 mx-3">
                <Icon name="facebook" size={32} color="#3b5998" />
              </TouchableOpacity>
              <TouchableOpacity className="w-16 h-16 justify-center items-center rounded-full bg-gray-200 mx-3">
                <Icon name="instagram" size={32} color="#F83758" />
              </TouchableOpacity>
            </View>

            <Text className="text-lg text-center">
              I already have an account{" "}
              <Text className="text-[#F83758] font-bold underline">Login</Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Register;
