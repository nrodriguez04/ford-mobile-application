import { StyleSheet, TouchableWithoutFeedback } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10 ,
    },
    button: {
        height: 40 ,
        borderRadius: 20 ,
        justifyContent: 'center' ,
        alignItems: 'center' ,
    },
    text: {
        fontSize: 14 ,
        fontWeight: '500' ,
        color: 'white' ,
        textTransform: 'uppercase' ,
    }
});

export default styles;