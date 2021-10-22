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

} from 'react-native'
const { width, height } = Dimensions.get('window');

import { connect, useDispatch } from 'react-redux'
import NewmorphButton from '../../components/NewmorphButton/index'
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather'

const WhoIsBob = ({navigation}) => {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={'#BFCCE0'} />
            <LinearGradient
                style={styles.LinearGradient1}
                colors={['#BFCCE0', '#F8F7F4']}>
                <View style={styles.crossStyle}>
                    <Feather onPress={() => navigation.goBack()} name={'x'} size={50} color={'#A3A2BA'} />
                </View>
                <LinearGradient
                    style={styles.LinearGradient2}
                    colors={['#F8F7F4', '#BFCCE0']}>
                    <View style={styles.textMainViewStyle}>

                        <Text style={styles.text1Style}>
                            BoB, a virtual companion, is ready to listen to you without judgment, anywhere, any time.  It is programmed to, in the moment, give you access to quick tools to help you calibrate your emotions when you are triggered.

                        </Text>
                        <Text style={styles.text1Style}>
                            In this way you will get accustomed to turning your reactions to responses.

                        </Text>
                        <Text style={styles.text1Style}>
                            It will also allow you to reflect on your triggers, thoughts, emotions, and responses.


                        </Text>
                        <Text style={styles.text1Style}>

                            Therefore, ensuring that you will proactively manage them in the
                            future. Bob also provides you with a safe environment to vent; by recording or typing your destructive thoughts and emotions, and eventually discarding them, therefore allowing you to let them go with gratitude.


                        </Text>
                        <Text style={styles.text1Style}>
                            BoB, should NOT be used in case
                            of emergency or self-harm, in this event, please contact your local emergency hotline.



                        </Text>
                    </View>


                </LinearGradient>

            </LinearGradient>


        </>
    )
}

const styles = StyleSheet.create({
    LinearGradient1: {
        flex: 1, alignItems: 'center'
    },
    crossStyle: {
        width: '85%',

        marginTop: height * 0.02,
        alignItems: 'flex-end'
    },
    LinearGradient2: {
        width: '80%', height: height * 0.81, borderRadius: 150, backgroundColor: 'transparent',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textMainViewStyle: {
        width: '85%',

    },
    text1Style: {
        textAlign: 'center',
        lineHeight: 18,
        marginBottom: 15,
        color: '#706F93'
    },



})

const mapStateToProps = state => {
    return {
        user: state.userReducer.users
    }
}

export default connect(mapStateToProps, null)(WhoIsBob)
