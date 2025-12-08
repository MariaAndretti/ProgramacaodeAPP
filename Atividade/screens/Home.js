import React from "react"
import {View, Flatlist, Button, StyleSheet } from "react-native";
import NoteItem from "../components/NoteItem";

export default function Home({ navigation, notes, setNotes}) {
    function deleteNote(index) {
        const newList = notes.filter((_, i) => i !== index);
        setNotes(nexList);


    }
}

return (
    <View style={StyleSheet.container}>
        <Button
        title="Nova Anotação"
        onPress={() =>navigation.navigate("Create")}
        />

        <Flatlist 
          data={notes}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index})=> (
            <NoteItem
            title={item.title}
            description={item. description}
            onEdit={()=> navigation.navigate("Edit", {index})}
            onDelete={()=> deleteNote(index)}
            />
          )}
         />
    </View>
);


const style = StyleSheet.create({
    container : {flex: 1, padding:20},

});
