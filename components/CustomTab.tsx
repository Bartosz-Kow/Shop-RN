import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const CustomTabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 20,
        left: 50,
        right: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 20,
      }}
    >
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const handlePress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={handlePress}
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 15,
            }}
          >
            <View
              style={{
                backgroundColor: isFocused ? "#F83758" : "transparent",
                borderRadius: 30,
                padding: 8,
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#ffff",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
                elevation: 2,
              }}
            >
              <FontAwesome
                name={
                  route.name === "index"
                    ? "home"
                    : route.name === "cart"
                    ? "shopping-cart"
                    : "cog"
                }
                size={32}
                color={isFocused ? "#fff" : "#B0B0B0"}
              />
              {!isFocused && (
                <Text
                  style={{
                    fontSize: 12,
                    color: "#B0B0B0",
                    fontWeight: "bold",
                  }}
                >
                  {options.title}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
