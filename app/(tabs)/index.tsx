import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import Header from "@/components/header";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Header />
      <View className="flex p-5">
        <Searchbar
          placeholder="Search any Product.."
          onChangeText={(query) => setSearchQuery(query)}
          value={searchQuery}
          iconColor="grey"
          rippleColor="grey"
          placeholderTextColor="grey"
          style={{ backgroundColor: "white", borderRadius: 5, color: "grey" }}
        />
      </View>
    </>
  );
};

export default Index;
