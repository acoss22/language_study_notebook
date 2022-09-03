import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSentence } from "../../actions/sequence/actions";

const AddSentence = () => {
  const words = useSelector((state: any) => state.sentences.items);

  const dispatch = useDispatch();
  const [quote, setQuote] = useState('');

  const handleClick = (e: any) => {
    e.preventDefault();
    dispatch<any>(addSentence(quote))
  };

  const onChange = (e: any) => {
    setQuote(e.target.value);
  };

  useEffect(() => {
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
      {words && words.map((item:any, key: any) => {   
        return <li>{item}</li>
      })}
      </ul>
     </div>
  );
};

export default AddSentence;
