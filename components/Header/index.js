import React from 'react';
import { View, Image } from 'react-native';

//Styles
import styles from './styles';

const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/images/Logo.png')} />
            <Image style={styles.menu} source={require('../../assets/images/Menu.png')} />
        </View>
    );
};

export default Header;