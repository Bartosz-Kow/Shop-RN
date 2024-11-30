import React from "react";
import { Image, Text, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { Link, useRouter } from "expo-router";

const OnBoardingScreen = () => {
  const router = useRouter();
  const handleSkip = () => {
    router.push("/register");
  };
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: "#FDFDFD",
          image: (
            <Image
              source={require("../assets/images/chooseProduct.png")}
              style={{
                width: 300,
                height: 300,
                borderRadius: 20,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 10,
              }}
            />
          ),
          title: (
            <Text className="text-3xl font-montserrat-extrabold text-gray-800 text-center mb-4">
              Choose Products
            </Text>
          ),
          subtitle: (
            <Text className="text-base text-[#A8A8A9] font-montserrat-semibold text-center px-6 mb-8">
              Explore our selection and find the perfect products for your
              needs.
            </Text>
          ),
        },
        {
          backgroundColor: "#FDFDFD",
          image: (
            <Image
              source={require("../assets/images/test33.png")}
              style={{
                width: 300,
                height: 300,
                borderRadius: 20,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 10,
              }}
            />
          ),
          title: (
            <Text className="text-3xl font-montserrat-extrabold text-gray-800 text-center mb-4">
              Make Payment
            </Text>
          ),
          subtitle: (
            <Text className="text-base text-[#A8A8A9] font-montserrat-semibold text-center px-6 mb-8">
              Complete your purchase quickly and securely with just a few
              clicks.
            </Text>
          ),
        },
        {
          backgroundColor: "#FDFDFD",
          image: (
            <Image
              source={require("../assets/images/test44.png")}
              style={{
                width: 350,
                height: 300,
                borderRadius: 20,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 10,
              }}
            />
          ),
          title: (
            <Text className="text-3xl font-montserrat-extrabold text-gray-800 text-center mb-4">
              Get Your Order
            </Text>
          ),
          subtitle: (
            <Text className="text-base text-[#A8A8A9] font-montserrat-semibold text-center px-6 mb-8">
              Relax while we deliver your order straight to your doorstep in no
              time.
            </Text>
          ),
        },
      ]}
      nextLabel={
        <Text className="text-[#F83758] text-lg font-montserrat-semibold">
          Next
        </Text>
      }
      skipLabel={
        <Text className="text-gray-500 text-lg font-montserrat-semibold">
          Skip
        </Text>
      }
      bottomBarColor="#FDFDFD"
      onSkip={handleSkip}
      onDone={handleSkip}
    />
  );
};

export default OnBoardingScreen;
