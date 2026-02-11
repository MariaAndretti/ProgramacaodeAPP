import {useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { text } from 'stream/consumers';

export default function LoginScreen() {
   
   const { login } = useContext(AppContext)
   
    return (
        <View style={styles.container}>
            <text style={styles.title}>Tela de Login</text>
            <TouchableOpacity style={styles.button}>
               <text style={styles.buttonText} onPress={login}>Entrar como Aluno</text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
               <text style={styles.buttonText} onPress={login}>Entrar como ADM</text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#333',
    },
    button: {
        width: '80%',
        paddingVertical: 15,
        borderRadius: 15,
        alignItems: 'center',
        elevation: 3,
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
 })
 
 