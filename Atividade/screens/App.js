import React, {useState} from "react";
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/screens./Home";
import Create from "./src/screens./Create";
import Edit from "./src/screens./Edit";

const stack = createStackNavigator();

export default function App() {
    const [notes, setNotes] = useState([]);
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home">
                    {(props) => <Home{...props} notes={notes} setNotes={setNotes} />}
                </Stack.Screen>

                <Stack.Screen name="Create">
                    {(props) => <Create{...props} notes={notes} setNotes={setNotes} />}
                </Stack.Screen>

                <Stack.Screen name="Edit">
                    {(props) => <Edit{...props} notes={notes} setNotes={setNotes} />}
                </Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    );
}