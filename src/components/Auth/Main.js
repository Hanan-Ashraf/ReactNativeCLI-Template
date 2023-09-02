import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../Helper/Colors';
import ReactLogo from '../../assets/images/react-native.png';

const Main = ({mainTxt, descTxt, btnTitle, onPress}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.mainContainer}>
        <Image source={ReactLogo} style={styles.img} />
        <View style={styles.contentContainer}>
          <Text style={styles.text}>{mainTxt}</Text>
          <Text style={styles.text}>{descTxt}</Text>
          <Button
            title={btnTitle}
            onPress={onPress}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Main

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.light,
    },
    contentContainer : {
        backgroundColor : colors.light,
        alignItems : 'center',
    },
    text: {
        fontFamily : 'Manrope-SemiBold',
        fontSize: 20,
        color : colors.dark,
        paddingBottom: 10,
    },
    img: {
        width: 100,
        height: 100,
    },
})