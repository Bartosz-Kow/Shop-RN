import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import IconsRow from "@/components/register  UI/IconsRow";
import IconInput from "@/components/register  UI/IconInput";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
            <Text className="text-4xl font-montserrat-semibold mb-2 text-left w-full">
              Create an
            </Text>
            <Text className="text-4xl font-montserrat-semibold mb-6 text-left w-full">
              Account
            </Text>
            <IconInput
              placeholder="Email"
              iconName="envelope"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <IconInput
              placeholder="Password"
              iconName="lock"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <IconInput
              placeholder="Confirm Password"
              iconName="lock"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />

            <Text className="text-sm text-center mb-6 font-montserrat-regular">
              By clicking the{" "}
              <Text className="text-[#F83758] font-montserrat-semibold">
                Register
              </Text>{" "}
              button, you agree to the public offer
            </Text>
            <Link href={"/(tabs)"} asChild>
              <TouchableOpacity className="w-full py-3 bg-[#F83758] rounded-lg mb-4">
                <Text className="text-white text-center font-montserrat-semibold text-xl">
                  Create Account
                </Text>
              </TouchableOpacity>
            </Link>
            <Text className="text-center text-lg mb-4 font-montserrat-regular">
              - OR continue with -
            </Text>

            <IconsRow />

            <View className="flex-row justify-center items-center">
              <Text className="text-lg font-montserrat-regular">
                I already have an account{" "}
              </Text>
              <Link href="/login" asChild>
                <TouchableOpacity>
                  <Text className="text-[#F83758] underline text-lg font-montserrat-semibold">
                    Login
                  </Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Register;
