import React, {useState} from "react";
import { View } from "react-native";
import NoteForm from "../components/NoteForm";

export default function Create ({navigation, notes, setNotes}){
const [title, setTitle] = useState("");
const [description, setDescription] = useState ("");

function saveNote(){
 const newNote = { title, description};
 setNotes([...notes,newNote]);
 navigation.goBack ();
}


return (
    <view style={{padding: 20}}>
        <NoteForm
            title={title}
            description={description}
            setTittle={setTittle}
            setDescription={setDescription}
            buttonText="Salvar"
            onSubmit={saveNote}
        />
    </view>
)
}

