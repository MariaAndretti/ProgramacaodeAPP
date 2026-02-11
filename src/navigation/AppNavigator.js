import {NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator } from "@react-navigation/native-stack";

import {AppContext} from '../context/AppContext';
import LoginScreen from '../views/LoginScreen';
import StudantHome from '../views/StudantHome';
import AdminHome from '../views/AdminHome';
import { useContext } from "react/cjs/react.development";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    const { user } = useContext(AppContext);

    return (
        
        <NavigationContainer>

    <Stack.Navigator>
        {user == null ? (
        <Stack.Screen>
            name='Login'
            componente={LoginScreen}
            options={{ headerShow: false}}
        </Stack.Screen>
        ) : user.role === 'admin' ? (
        <Stack.Screen name= 'AdminHome' componente={AdminHome}></Stack.Screen>

        ) : (

            <Stack.Screen>
            name='StudantHome'
            component={StudantHome}
            </Stack.Screen>
        )} 
            
    </Stack.Navigator>
    </NavigationContainer>

    )} 