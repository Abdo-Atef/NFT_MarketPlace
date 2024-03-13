import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React, { useRef } from 'react'
import image from '../assets/images/avatars/avatar03.jpg'
import { COLORS, FONTS, SIZES } from '../constants/theme'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

export default function HeaderSection({searchHandler}) {

  return (
    <>
    {/* Creator Section */}
    <View style={styles.infoStyles}>
        <Image style={styles.imageStyles} source={image} />
        <View>
          <View style={styles.creatorNameContainer}>
            <Text style={styles.creatorName}>Abdelrhman Atef</Text>
            <MaterialCommunityIcons
                name="check-decagram"
                size={22}
                color="white"
              />
          </View>
          <Text style={{color:COLORS.white}}>Creator</Text>
        </View>
      </View>
    {/* Search Section */}
      <View style={styles.searchContainer}>
      <MaterialIcons name="search" size={24} color={COLORS.white} />
        <TextInput 
        style={[styles.searchInput]}
        placeholderTextColor={COLORS.white}
        placeholder='Search By NFT Name'
        onChangeText={searchHandler}
        />
      </View>
    </>
      
  )
}

const styles = StyleSheet.create({
  infoStyles:{
    flexDirection:'row',
    gap:15,
    marginBottom:15
  },
  imageStyles:{
    width: 45,
    height: 45,
    borderRadius:50
  },
  creatorNameContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:5
  },
  creatorName:{
    color:COLORS.white,
    fontFamily:FONTS.bold,
    fontSize:SIZES.xLarge
  },
  searchContainer:{
    backgroundColor:COLORS.cardBg,
    marginVertical:SIZES.medium,
    flexDirection:'row',
    alignItems:'center',
    borderRadius:5,
    paddingHorizontal:10,
  },
  searchInput:{
    color:COLORS.white,
    paddingVertical:7,
    paddingHorizontal:10,
    flex:1
  }
})