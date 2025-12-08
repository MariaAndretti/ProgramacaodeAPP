import React, {useState} from "react";
import { View } from "react-native";
import NoteForm from "../components/NoteForm"

export default function Edit ({route, navigation, notes, setNotes}) {
    const {index} = route.params;
    const {title, setTitle} = useState(notes[index].title);
    const [description, setDescription] = useState(notes[index].description);
    function updateNote(){
        const updated = [...notes];
        updated[index] = {title, description};
        setNotes(updated);
        navigation.goBack();

    }

    return (
        <View style={{ padding: 20}}>
            <NoteForm
            title={title}
            description={description}
            setTitle={setTitle}
            setDescription={setDescription}
            buttonText="Atualizar"
            onSubmit={updateNote}
            />
        </View>
    )
}