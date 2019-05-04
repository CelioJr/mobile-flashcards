import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { cyan, white } from '../utils/colors'

const styles = StyleSheet.create({
    cardBox: {
        flex: 1,
        minHeight: 150,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: cyan,
        padding: 10,
        justifyContent: 'center',
        borderRadius: 5,
        marginLeft: 8,
        marginRight: 8,
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
        color: white
    },
    count: {
        fontSize: 20,
        color: white,
        marginTop: 5
    }
})

export default DeckerItem = ({item, navigation}) => {
    const count = item.questions.length !== null 
        ? item.questions.length
        : 0

    return (
        <TouchableOpacity 
        style={styles.cardBox}
        onPress={() => navigation.navigate('DeckDetails', { 'deck': item.title })}
        >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.count}>{count} Cards</Text>
        </TouchableOpacity>
    )
}