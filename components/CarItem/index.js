import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const CarItem = () => {
    return (
        <View style={styles.carContainer}>
          <ImageBackground 
          source={require('../../assets/images/Bronco.png')} 
          style={styles.image} />

          <View style={styles.titles}>
            <Text style={styles.title}>2021 Bronco</Text>
            <Text style={styles.subtitle}>Starting at $28,500</Text>
          </View>

          <StyledButton type="primary" content={"Custom Order"} onPress={() => {console.warn('Custom Order Was Pressed')}}/>
          <StyledButton type="secondary" content={"Inventory"} onPress={() => {console.warn('Inventory Was Pressed')}}/>

      </View>
    );
};

export default CarItem;