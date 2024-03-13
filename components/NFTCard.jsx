import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import NFTCardAvatars from "./NFTCardAvatars";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NFTCardInfo from "./NFTCardInfo";
import { useNavigation } from "@react-navigation/native";

export default function NFTCard({ data }) {

  const navigation = useNavigation()
  const pressHandler = () => {
    navigation.navigate('NFT_Details', {data})
  }
  
  return (
    <TouchableWithoutFeedback>
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={pressHandler}>
          <Image source={data.image} style={styles.cardImage} />
        </TouchableOpacity>
        <View style={styles.contentStyles}>
          <NFTCardAvatars avatars={data.avatars} />
          <Text style={styles.nameStyle}>{data.name}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop:2
            }}
          >
            <View style={{ flexDirection: "row", gap: 7 }}>
              <Text style={styles.creatorStyle}>{data.creator}</Text>
              <MaterialCommunityIcons
                name="check-decagram"
                size={22}
                color="white"
              />
            </View>
            <Text style={styles.dateStyles}>{data.date}</Text>
          </View>
          <NFTCardInfo data= {data} heart={true} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.cardBg,
    marginVertical: SIZES.medium,
    borderRadius: SIZES.medium,
    padding: SIZES.small + 2,
    paddingBottom: SIZES.large,
  },
  cardImage: {
    width: "100%",
    height: 300,
    borderRadius: SIZES.xLarge,
  },
  contentStyles: {
    marginHorizontal: SIZES.small,
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
});
