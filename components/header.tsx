import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <View className="bg-background w-full h-16 flex flex-row items-center justify-center px-4 mt-8 relative">
      <Text className="font-montserrat-semibold text-[#4392F9] text-2xl">
        Stylish
      </Text>

      <TouchableOpacity className="absolute right-4">
        <Avatar.Icon
          size={40}
          icon="account"
          style={{ backgroundColor: "#F83758" }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
