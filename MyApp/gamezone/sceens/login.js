import React, { useState } from 'react';
import { TouchableOpacity, ImageBackground, StyleSheet, Text, TextInput, View, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { globalStyles } from '../styles/global';


export default function Login({ navigation }) {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [pName, setpName] = useState('')
    const [pPassword, setpPassword] = useState('')

    const Validation = () => {
        if (name == "yusa" && password == "123") {
            setpName('')
            setpPassword('')
            navigation.navigate('About');
        }
        else if (name == "yusa") {
            setpName('');
            setpPassword('Hatalı Şifre')
        }
        else if (password == "123") {
            setpPassword('')
            setpName('Hatalı Kullanıcı adı');
        }
        else {

            setpName('Hatalı Kullanıcı adı');
            setpPassword('Hatalı Şifre')

            //Alert.alert('Oops','Yanlış giriş yaptınız')
        }

    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>


            <ImageBackground style={globalStyles.ImgBg} source={require('../img/watch.png')}>
                <View style={globalStyles.container}>
                    <View style={styles.welcomeView}>
                        <Text style={styles.welcomeText}>Welcome to Arien</Text>
                    </View>


                    <View style={styles.singin}>

                        <View style={styles.textBox}>
                            <TextInput onChangeText={value => setName(value)} style={styles.input} placeholderTextColor={'#87A1B6'} placeholder={"User Name"} />
                            <Text style={{ color: '#f60' }}>{pName}</Text>
                            <TextInput onChangeText={value => setPassword(value)} style={styles.input} placeholderTextColor={'#87A1B6'} placeholder={"Password"} />
                            <Text style={{ color: '#f60' }}>{pPassword}</Text>

                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity style={styles.button} onPress={Validation}>
                                    <Text style={styles.text}>Sing in</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.memberButton} onPress={() => navigation.navigate('Details')}>
                                    <Text style={styles.member}>Not aa member ?</Text>
                                </TouchableOpacity>
                            </View>



                        </View>




                    </View>
                    <View style={styles.media}>
                        <View style={{ flex: 1, alignItems: 'center', }}><Image style={styles.mediaImage} source={require('../img/google.png')} /></View>
                        <View style={{ flex: 1, alignItems: 'center' }}><Image style={styles.mediaImage} source={require('../img/twitter.png')} /></View>
                        <View style={{ flex: 1, alignItems: 'center' }}><Image style={styles.mediaImage} source={require('../img/facebook.png')} /></View>



                    </View>

                </View>

            </ImageBackground>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    singin: {
        width: '100%', height: 400,
        borderRadius: 40, flex: 8,

    },
    ImgBg: {
        flex: 1,
        opacity: 0.9
    },
    textBox: {
        padding: 50
    },
    input: {
        borderBottomWidth: 1, height: 50, color: "#413D3D",
        borderBottomColor: '#413D3D', fontSize: 20,
    },
    button: {
        width: 165, height: 50, borderWidth: 3, borderRadius: 40, borderColor: "#413D3D",
        alignItems: 'center', justifyContent: 'center',
        marginVertical: 20, marginHorizontal: 70
    },
    text: {
        color: '#413D3D', fontSize: 25, fontWeight: "bold"
    },
    memberButton: {
        alignItems: 'center', justifyContent: 'center',
        marginHorizontal: 70, marginTop: -15, width: 165, height: 40,
    },
    member: {
        color: '#413D3D', fontSize: 15,
    },
    welcomeView: {
        alignItems: 'center', flex: 2, marginTop: -70,
    },
    welcomeText: {
        color: '#5470A5', marginTop: 100, fontSize: 40,
    },
    media: {
        width: 200, flexDirection: 'row', flex:1
    },
    mediaImage: {
        width: 36, height: 36,

    }

})