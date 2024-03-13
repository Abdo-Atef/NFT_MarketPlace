import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export default function NFTCardInfo({ data, heart }) {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Feather name="eye" size={20} color={COLORS.white} />
        <Text style={styles.infoText}>{data.views}</Text>
      </View>
      <View style={styles.info}>
        <MaterialCommunityIcons
          name="comment-text-outline"
          size={17}
          color={COLORS.white}
        />
        <Text style={styles.infoText}>{data.comments}</Text>
      </View>
      <View style={[styles.info, { gap: 0 }]}>
        <MaterialCommunityIcons name="ethereum" size={20} color="white" />
        <Text style={styles.infoText}>{data.topBid}</Text>
      </View>
      {heart && (
        <View>
          <TouchableOpacity>
            <View style={[styles.buttonHeart]}>
              <AntDesign name="heart" size={18} color={COLORS.second} />
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-between',
    marginVertical: 10,
    marginTop: 15,
  },
  info: {
    color: COLORS.white,
    backgroundColor: COLORS.second,
    // padding: 4,
    borderRadius: SIZES.large,
    flexBasis: '28%',
    height: SIZES.xLarge + 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
  },
  infoText: {
    color: COLORS.white,
    fontFamily:FONTS.regular,
    fontSize:SIZES.small + 3
  },
  buttonHeart: {
    backgroundColor: COLORS.bg,
    width: 31,
    height: 31,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderColor: COLORS.second,
    borderWidth: 1,
  },
});
