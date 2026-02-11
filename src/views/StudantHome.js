import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';


export default function StudentHome() {
   return (
   <View style={styles.container}>
       <Text style={styles.title}>Área do Estudante</Text>
       <Text style={styles.subtitle}>Bem vindo estudante</Text>


       <TouchableOpacity style={styles.button}>
       <Text style={styles.buttonText}>Sair</Text>
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
   subtitle: {
       fontSize: 18,
       fontWeight: '800',
       marginBottom: 20,
       color: '#666'
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
