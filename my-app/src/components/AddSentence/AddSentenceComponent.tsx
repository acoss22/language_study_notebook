import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSentence, deleteSentence, editSentence } from "../../actions/sequence/actions";
import SentenceItem from "./SentenceItem";

const AddSentence = () => {
  const words = useSelector((state: any) => state.sentences.items);
  const dispatch = useDispatch();
  const [quote, setQuote] = useState('');

  const handleClick = (e: any) => {
    e.preventDefault();
    dispatch<any>(addSentence(quote));
    setQuote('');
  };

  const onChange = (e: any) => {
    setQuote(e.target.value);
  };

  const handleEdit = (item: any, index: any) => {
    const newItem = { 
      index: index, 
      newValue: item
    };
    console.log('newItem', newItem);

    dispatch<any>(editSentence(newItem));
  }  

  const handleDelete = (index: any) => {
    dispatch<any>(deleteSentence(index))
  } 

  useEffect(() => {
    console.log('useEffect', words);
  }, [dispatch, words]);

  return (
    <div>
      <input
        name="word"
        type="text"
        onChange={onChange}
        value={quote}
        autoComplete="off"
      />
      <button onClick={handleClick} className="btn toggle-btn" aria-pressed="true" >Add</button>
      <ul>
      {words && words.map((item:any, index: any) => {   
        return (
        <li key={index}> <SentenceItem  item={item} index={index} editFunc={handleEdit} deleteFunc={handleDelete} /></li>
        )
      })}
      </ul>
     </div>
  );
};

export default AddSentence;
