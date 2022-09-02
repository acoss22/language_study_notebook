import { useState } from "react";

const AddSentence = () => {
  let initialValues = {
    word: "arigato",
  };

  const [quote, setQuote] = useState(initialValues);

  const handleClick = (e: any) => {
    e.preventDefault();
    console.log("handleClick 👉️", quote);
  };

  const onChange = (e: any) => {
    setQuote({ ...quote, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input
        name="word"
        type="text"
        onChange={onChange}
        value={quote.word}
        autoComplete="off"
      />
      <button onClick={handleClick} className="btn toggle-btn" aria-pressed="true" >Add</button>
      
    </div>
  );
};

export default AddSentence;
