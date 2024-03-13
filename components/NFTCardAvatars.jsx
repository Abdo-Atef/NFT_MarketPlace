import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function NFTCardAvatars({avatars}) {
  return (
    <View style={styles.container}>
      {avatars.map((item)=> <Image 
        style={styles.imageStyles}
        source={item.image}
        key={item.id}
      />)}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    gap:-4,
    marginTop:-25,
  },
  imageStyles:{
    width:40,
    height:40,
    borderRadius:50
  }
})