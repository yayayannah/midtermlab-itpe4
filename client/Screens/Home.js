import React, { useState, useEffect } from 'react';
import { View, Text, Button, ImageBackground, TouchableOpacity } from 'react-native'; // Changed import statement
import LottieView from 'lottie-react-native';

import Styles from '../Styles/mainStyles'
import { useNavigation } from '@react-navigation/native';


const Home = () => {
    const navigation = useNavigation();
    const [isPressed, setIsPressed] = useState(false);

    const handleProceed = () => {
        navigation.navigate('Movies');
      };

    const handlePressIn = () => {
        setIsPressed(true);
    };
    
    const handlePressOut = () => {
        setIsPressed(false);
    };

    return(

        <View style={Styles.container}>

            <View style={Styles.welcomeContainer} >
                <Text style={Styles.homeText} >
                    Welcome to 
                    <Text style={Styles.innerText} > MoviesDB </Text> 
                </Text>
            </View>

        
            <View style={Styles.gifContainer}>
                <LottieView style={{flex: 1}} source={require('../assets/Animation.json')} autoPlay loop />
            </View> 
            

            <View style={Styles.btnContainer}> 
                <TouchableOpacity style={Styles.btnProceed} title='Proceed' onPress={handleProceed} onPressIn={handlePressIn} onPressOut={handlePressOut}    >
                    <View >
                        <Text style={Styles.txtProceed}> View </Text>
                    </View>
                </TouchableOpacity>
            </View>


        </View>

    )

}

export default Home;