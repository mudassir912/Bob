import React from 'react'
import {
  View,
  Text,
  Image ,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StyleSheet
} from 'react-native'
import { connect, useDispatch } from 'react-redux'
import NewmorphButton from '../../components/NewmorphButton/index'
import VentOut from '../../components/VentOut/index'
import LinearGradient from 'react-native-linear-gradient'
const BOB = ({ navigation, user }) => {
    const dispatch = useDispatch() 
    return (
        <LinearGradient style={styles.container} colors={['#D1D9E5', '#8B97B4']} >
             <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={{paddingVertical:"13%",textAlign:"center",color:"#95A4B9",fontSize:16}}>Hey Daniel</Text>
            <View style={{marginBottom:20}}>
            <VentOut />
            </View>
            <View style={{marginBottom:20}}>
            <VentOut 
            decription={'Sample tools to calm down extreme emotions triggered in the moment'}
            imgIcon={require('../../assets/images/Group333.png')} title={'TRIGGERS'} />
            </View>
            <View style={{marginBottom:20}}>
            <VentOut imgWidth={{height: 18, width: 55,marginTop:20}} 
            title={'ASK THE EXPERT'}
            decription={'Getting a professional point of view'}
            imgIcon={require('../../assets/images/Path700.png')}/>
            </View>
            <View style={styles.foter}>
            <Image source={require('../../assets/images/Path701.png')} />
            <Image source={require('../../assets/images/MenuIcon.png')} />
            </View>
            </ScrollView>
        </LinearGradient >
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20
    },
    foter:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingTop:"20%",
        paddingVertical:10
    }
})








export default (BOB)