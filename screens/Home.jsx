import { View, StyleSheet, FlatList, StatusBar, Text } from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { DATA } from "../constants/data";
import NFTCard from "../components/NFTCard";
import HeaderSection from "../components/HeaderSection";

export default function Home() {
  const [NFTData, setNFTData] = useState(DATA);
  const searchHandler = (value) => {
    const searchResult = DATA.filter((NFT) =>
      NFT.name.toLowerCase().includes(value.toLowerCase())
    );
    searchResult ? setNFTData(searchResult) : setNFTData(DATA);
  };

  return (
    <View style={styles.container}>
      <HeaderSection searchHandler={searchHandler} />
      {NFTData.length > 0 ? (
        <FlatList
          data={NFTData}
          renderItem={({ item }) => <NFTCard data={item} />}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View style={styles.notFoundContainer}>
          <Text style={styles.notFoundText}>Opps...!</Text>
          <Text style={styles.notFoundText}>Not found the NFT</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    paddingHorizontal: SIZES.medium,
    backgroundColor: COLORS.bg,
  },
  notFoundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  notFoundText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.large + 5,
  },
});
