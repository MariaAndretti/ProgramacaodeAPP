import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function NoteForm({
    title,
    description,
    setTitle,
    setDescription,
    buttonText,
    onSubmit,
}) {
    return (
        <view>
            
            <TextInput
            style={Styles.input}
            placeholder="Titulo"
            value={title}
            onChangeText={setTitle}
            />


            <TextInput
            style={[Styles.input, {height: 100}]}
            placeholder="descricao"
            value={description}
            onChangeText={setDescription}
            multiline
            />

        </view>
    )
}