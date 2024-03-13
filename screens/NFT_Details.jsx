import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import NFTCardAvatars from "../components/NFTCardAvatars";
import NFTCardInfo from "../components/NFTCardInfo";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export default function NFT_Details({ route, navigation }) {
  const [NFTData, setNFTData] = useState(route.params.data);

  const backHandler = () => {
    navigation.goBack();
  };
  return (
    <ScrollView style={styles.cardContainer}>
      <Image style={styles.image} source={NFTData.image} />
      <View style={styles.imageHeader}>
        <TouchableOpacity onPress={backHandler} style={styles.headerButtons}>
          <Feather name="arrow-left" size={22} color={COLORS.second} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButtons}>
          <AntDesign name="heart" size={22} color={COLORS.second} />
        </TouchableOpacity>
      </View>
      <View style={styles.contentStyles}>
        <NFTCardAvatars avatars={NFTData.avatars} />
        <Text style={styles.nameStyle}>{NFTData.name}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 2,
          }}
        >
          <View style={{ flexDirection: "row", gap: 7 }}>
            <Text style={styles.creatorStyle}>{NFTData.creator}</Text>
            <MaterialCommunityIcons
              name="check-decagram"
              size={22}
              color="white"
            />
          </View>
          <Text style={styles.dateStyles}>{NFTData.date}</Text>
        </View>
        <NFTCardInfo data={NFTData} heart={false} />
        <View style={{ marginTop: SIZES.small }}>
          <View style={styles.details}>
            <Text style={styles.title}>Contract Address</Text>
            <Text style={styles.value}>{NFTData.address}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.title}>Token ID</Text>
            <Text style={styles.value}>{NFTData.tokenId}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.title}>Token Standerd</Text>
            <Text style={styles.value}>{NFTData.tokenSt}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.title}>Blockchain</Text>
            <Text style={styles.value}>{NFTData.blockchain}</Text>
          </View>
        </View>
        <View style={styles.topBidContainer}>
          <View>
            <Text style={styles.bidText}>Top bid</Text>
            <Text style={styles.bidText}>{NFTData.topBid}</Text>
          </View>
          <TouchableOpacity style={styles.bidButton}>
            <Text style={styles.bidButtonText}>Place a bid</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  image: {
    width: "100%",
    height: 350,
    objectFit: "fill",
    borderBottomRightRadius: SIZES.large,
    borderBottomLeftRadius: SIZES.large,
  },
  imageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    left: SIZES.large,
    right: SIZES.large,
    top: SIZES.large,
  },
  headerButtons: {
    backgroundColor: COLORS.white,
    width: 45,
    height: 45,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  contentStyles: {
    marginHorizontal: SIZES.xLarge + 2,
  },
  nameStyle: {
    fontFamily: FONTS.bold,
    color: COLORS.white,
    fontSize: SIZES.large + 5,
    marginTop: SIZES.small,
  },
  creatorStyle: {
    color: COLORS.white,
    fontSize: SIZES.medium + 2,
  },
  dateStyles: {
    color: COLORS.white,
    fontFamily: FONTS.regular,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.cardBg,
    marginVertical: SIZES.small - 4,
  },
  title: {
    color: COLORS.white,
  },
  value: {
    color: COLORS.gray,
    marginBottom: SIZES.small - 2,
  },
  topBidContainer: {
    backgroundColor: COLORS.cardBg,
    flexDirection: "row",
    justifyContent: "center",
    gap: SIZES.xLarge + 2,
    padding: SIZES.xLarge - 1,
    borderRadius: SIZES.large,
    marginHorizontal: SIZES.large,
    marginVertical: SIZES.medium,
  },
  bidText: {
    color: COLORS.white,
    fontFamily: FONTS.regular,
  },
  bidButton: {
    backgroundColor: COLORS.second,
    alignItems: "center",
    width: 150,
    paddingVertical: SIZES.medium + 2,
    borderRadius: SIZES.medium,
  },
  bidButtonText: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
  },
});
