import { useState } from "react";

export const AlphabetItem = (props: any) => {

    const [isEditMode, setEditMode] = useState(false);
    const [newCharacter, setNewCharacter] = useState('');

    const handleSave = (e: any) => {
        e.preventDefault();
        setEditMode(false);
        props.editFunc(newCharacter, props.index);
    }

    const handleCancel = (e: any) => {
        e.preventDefault();
        setEditMode(false);
    }

    const handleEdit = (e: any) => {
        e.preventDefault();
        setEditMode(true);
    }

    const handleDelete = () => {
        props.deleteFunc(props.index);
    }

    const handleNewCharacterChange = (e: any) => {
        setNewCharacter(e.target.value);
    };

    return (
        <div>
            {

                isEditMode ? (
                    <>
                        <input type="text" value={newCharacter} onChange={handleNewCharacterChange} />
                        <button onClick={handleSave}>Save</button>
                        <button onClick={handleCancel}>Cancel</button>
                    </>) : (
                    <>
                        {props.item}
                        <button onClick={handleEdit}>Edit</button>
                        <button onClick={handleDelete} >Delete</button>
                    </>)
            }
        </div>
    )
};

export default AlphabetItem;
AlphabetItem