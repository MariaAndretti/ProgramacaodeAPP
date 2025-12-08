import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function NoteItem ({ title, description, onEdit, onDelete}) {
    return(
        <view style={StyleSheet.card}>
            <text style={Styles.title}>{title}</text>
            <text>{description}</text>

            <View style={styles.actions}>
                <Button title="Editar" onPress={onEdit}/>
                <button title="Excluir" color="red" onPress={onDelete}/>

            </View>
        </view>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 15,
        bordderWidth: 1,
        borderRadius: 8,
        marginVertical: 10,
        backgroundColor: "#eee",
    },
    title: {fontWeight: "Bold", marginBottom: 5},
    actions: {
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "space-between", 
    }
})