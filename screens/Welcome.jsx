import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  BackHandler,
  Alert,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import nft04 from "../assets/images/nft04.jpg";
import nft08 from "../assets/images/nft08.jpg";
import nft06 from "../assets/images/nft06.jpg";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();
  const pressHandler = () => {
    navigation.navigate("Home");
  };

  const moveImagesAnimation = useRef(
    new Animated.ValueXY({ x: 100, y: 100 })
  ).current;
  const fadeImagesAnimation = useRef(new Animated.Value(0)).current;
  const fadeTextAnimation = useRef(new Animated.Value(0)).current;

  const imagesAnimationHandler = () => {
    Animated.sequence([
      Animated.timing(fadeImagesAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(moveImagesAnimation, {
        toValue: { x: 0, y: 0 },
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const textAnimationHandler = () => {
    Animated.timing(fadeTextAnimation, {
      toValue: 1,
      duration: 1000,
      delay: 1300,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    const exitHandler = () => {
      Alert.alert("Exit App", "Are You Sure You Want To Exist App", [
        {
          text: "Cancel",
          onPress: () => null,
          style:'cancel',
        },
        {
          text:'Ok',
          onPress: ()=> BackHandler.exitApp(),
          style:'destructive'
        }
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener("hardwareBackPress", exitHandler);
    textAnimationHandler();
    imagesAnimationHandler();
    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.imagesContainer,
          {
            opacity: fadeImagesAnimation,
            transform: moveImagesAnimation.getTranslateTransform(),
          },
        ]}
      >
        <View style={styles.imageCard}>
          <Image style={styles.image} source={nft06} />
        </View>
        <View style={[styles.imageCard, { top: SIZES.xLarge }]}>
          <Image style={styles.image} source={nft08} />
        </View>
        <View style={styles.imageCard}>
          <Image style={styles.image} source={nft04} />
        </View>
      </Animated.View>
      <Animated.View
        style={[
          styles.textContainer,
          {
            opacity: fadeTextAnimation,
          },
        ]}
      >
        <Text style={styles.mainText}>Find, Collect and Sell Amazing NFTs</Text>
        <Text style={styles.secondText}>
          Explore the top collection of NFTs and buy and sell your NFTs as well
        </Text>
      </Animated.View>
      <TouchableOpacity style={styles.ButtonStyle} onPress={pressHandler}>
        <Text style={styles.ButtonTextStyle}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.bg,
  },
  imagesContainer: {
    flexDirection: "row",
    gap: SIZES.small + 2,
  },
  imageCard: {
    backgroundColor: COLORS.cardBg,
    padding: SIZES.small + 1,
    borderRadius: SIZES.medium,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: SIZES.medium,
  },
  textContainer: {
    marginTop: SIZES.xLarge + 20,
    marginHorizontal: SIZES.medium,
    paddingHorizontal: SIZES.xLarge,
  },
  mainText: {
    textAlign: "center",
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.xLarge + 4,
  },
  secondText: {
    color: COLORS.gray,
    textAlign: "center",
    marginVertical: SIZES.large,
  },
  ButtonStyle: {
    backgroundColor: COLORS.second,
    padding: SIZES.medium + 1,
    borderRadius: SIZES.medium,
    width: 250,
    alignItems: "center",
    position: "absolute",
    bottom: SIZES.xLarge + 10,
    marginVertical: SIZES.xLarge + 5,
  },
  ButtonTextStyle: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.large,
  },
});
