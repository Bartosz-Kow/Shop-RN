import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const IconsRow = () => {
  return (
    <View>
      <View className="flex-row justify-center mb-8">
        <TouchableOpacity className="w-16 h-16 justify-center items-center rounded-full bg-[#FCF3F6] mx-3 border-2 border-[##F83758]">
          <Icon name="google" size={32} color="#db4437" />
        </TouchableOpacity>
        <TouchableOpacity className="w-16 h-16 justify-center items-center rounded-full bg-[#FCF3F6] mx-3 border-2 border-[##F83758]">
          <Icon name="facebook" size={32} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity className="w-16 h-16 justify-center items-center rounded-full bg-[#FCF3F6] mx-3 border-2 border-[##F83758]">
          <Icon name="apple" size={32} color="#100000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IconsRow;
