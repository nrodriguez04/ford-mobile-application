import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const StyledButton = (props) => {

    const type = props.type;

    const content = props.content;
    const onPress = props.onPress;

    const backgroundColor = type === 'primary' ? '#1351d8BF' : '#BFb4b4b4';
    const color = type === 'primary' ? 'white' : 'black';

    return (
        <View style={styles.container}>
            <Pressable style={[styles.button, {backgroundColor}]} onPress={() => onPress()}>
                <Text style={[styles.text, {color}]}>{content}</Text>
            </Pressable>
        </View>
    );
};

export default StyledButton;