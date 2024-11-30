import React from "react";
import {
  View,
  TextInput,
  TextInputProps,
  StyleProp,
  TextStyle,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

interface IconInputProps extends TextInputProps {
  placeholder: string;
  iconName: string;
  secureTextEntry?: boolean;
  inputStyle?: StyleProp<TextStyle>;
}

const IconInput: React.FC<IconInputProps> = ({
  placeholder,
  iconName,
  secureTextEntry = false,
  value,
  onChangeText,
  keyboardType = "default",
  inputStyle,
  ...rest
}) => {
  return (
    <View className="w-full mb-4 relative">
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#B0B0B0"
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        className="w-full p-4 border-2 border-gray-300 rounded-lg pl-12 font-montserrat-regular"
        style={inputStyle}
        {...rest}
      />
      <Icon
        name={iconName}
        size={20}
        color="#B0B0B0"
        style={{ position: "absolute", left: 16, top: 16 }}
      />
    </View>
  );
};

export default IconInput;
