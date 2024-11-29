import React, { ReactNode } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

interface CustomBackgroundProps {
  children: ReactNode;
}

const CustomBackground: React.FC<CustomBackgroundProps> = ({ children }) => {
  const image = require("@/assets/images/background_image.png");

  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.overlay}>{children}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default CustomBackground;
