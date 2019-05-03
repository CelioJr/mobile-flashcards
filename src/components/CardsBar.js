import React from 'react'
import {View, Text, StatusBar} from 'react-native'
import { Constants } from 'expo'


export default function CardsBar ({backgroundColor, ...props}) {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
        </View>
    )
}