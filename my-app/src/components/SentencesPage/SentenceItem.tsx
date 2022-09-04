import { useState } from "react";

export const SentenceItem = (props: any) => {

    const [isEditMode, setEditMode] = useState(false);
    const [newSentence, setNewSentence] = useState('');

    const handleSave = (e: any) => {
        e.preventDefault();
        setEditMode(false);
        props.editFunc(newSentence, props.index);
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

    const handleNewSentenceChange = (e: any) => {
        setNewSentence(e.target.value);
    };

    return (
        <div>
            {

                isEditMode ? (
                    <>
                        <input type="text" value={newSentence} onChange={handleNewSentenceChange} />
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

export default SentenceItem;
