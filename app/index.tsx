import { Text, View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import CustomBackground from "@/components/background";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <>
      <StatusBar
        style="light"
        translucent={true}
        backgroundColor="transparent"
      />
      <CustomBackground>
        <View className="flex-1 justify-end items-center pb-12 px-6">
          <Text className="text-white text-5xl font-bold text-center mb-4">
            You want Authentic, here you go!
          </Text>
          <Text className="text-white text-2xl text-center mb-8 font-light">
            Find it here, buy it now!
          </Text>

          <Link href="../OnBoardingScreen" asChild>
            <TouchableOpacity className="bg-[#F83758] py-3 px-6 rounded-xl">
              <Text className="text-white text-2xl font-semibold">
                Get Started!
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </CustomBackground>
    </>
  );
}
