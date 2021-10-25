import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native'
const { width, height } = Dimensions.get('window')
import TextInputView from '../../components/TextInput/index'
import WhiteButton from '../../components/WhiteButton/index'

import { connect, useDispatch } from 'react-redux'
import NewmorphButton from '../../components/NewmorphButton/index'
import LinearGradient from 'react-native-linear-gradient'
import Feather from 'react-native-vector-icons/Feather'
import { ScrollView } from 'react-native-gesture-handler'

const RationalChallenge4 = ({ navigation, user }) => {
  const dispatch = useDispatch()

  return (
    <>
      <ScrollView>
        <StatusBar barStyle="dark-content" backgroundColor={'#BFCCE0'} />
        <LinearGradient
          style={styles.LinearGradient1}
          colors={['#BFCCE0', '#F8F7F4']}>
          <View style={styles.crossStyle}>
            <Feather  onPress={() => { navigation.navigate('BOB') }} name={'x'} size={50} color={'#A3A2BA'} />
          </View>
          <LinearGradient
            style={styles.LinearGradient2}
            colors={['#F8F7F4', '#BFCCE0']}>
            <View
              style={{
                flex: 1,
                justifyContent: 'space-evenly',
                alignItems: 'center',
                marginTop: 20
              }}>
              <Text style={styles.titleTextStyle}>The Rational Challenge</Text>
              <Text style={styles.QuestionTextStyle}>4. What’s the evidence?</Text>
              <View
                style={{
                  height: 250,
                  width: 260,
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                <TextInputView />
              </View>

              <View style={styles.buttonViewStyle}>
                <NewmorphButton
                  backgroundColor="#C7D3E3"
                  onPress={() => {
                    navigation.navigate('RationalChallenge5')
                  }}
                />
              </View>
            </View>
          </LinearGradient>
        </LinearGradient>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  LinearGradient1: {
    flex: 1,
    alignItems: 'center'
  },
  crossStyle: {
    width: '85%',

    marginTop: height * 0.02,
    alignItems: 'flex-end'
  },
  LinearGradient2: {
    width: '80%',
    height: height * 0.81,
    borderRadius: height/2,
    backgroundColor: 'transparent',
    overflow: 'hidden',
    // alignItems: 'center',
    justifyContent: 'center'
  },
  titleTextStyle: {
    color: '#6B6B8D',
    fontSize: 20,
    fontFamily: 'OPTIMA'
  },
  QuestionTextStyle: {
    color: '#6B6B8D',
    fontSize: 15,
    fontFamily: 'OPTIMA',
    textAlign: 'center',
  },
  centerTextViewStyle: {
    marginVertical: height * 0.065,
    width: '85%'
  },
  centerTextStyle: {
    color: '#6B6B8D',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 25
  },
  buttonViewStyle: {
    marginTop: height * 0.03
  }
})

const mapStateToProps = state => {
  return {
    user: state.userReducer.users
  }
}

export default connect(mapStateToProps, null)(RationalChallenge4)