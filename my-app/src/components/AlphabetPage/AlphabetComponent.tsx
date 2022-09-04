import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCharacter, deleteCharacter, editCharacter } from "../../actions/alphabet/actions";
import AlphabetItem from "./AlphabetItem";

const AlphabetPage = () => {
    
  const words = useSelector((state: any) => state.alphabet.items);
  const dispatch = useDispatch();
  const [character, setCharacter] = useState("");

  const handleClick = (e: any) => {
    e.preventDefault();
    dispatch<any>(addCharacter(character));
    setCharacter("");
  };

  const onChange = (e: any) => {
    setCharacter(e.target.value);
  };

  const handleEdit = (item: any, index: any) => {
    const newItem = {
      index: index,
      newValue: item,
    };
    console.log("newItem", newItem);

    dispatch<any>(editCharacter(newItem));
  };

  const handleDelete = (index: any) => {
    dispatch<any>(deleteCharacter(index));
  };

  useEffect(() => {
    console.log("useEffect", words);
  }, [dispatch, words]);

  return (
    <div>
      <input
        name="word"
        type="text"
        onChange={onChange}
        value={character}
        autoComplete="off"
      />
      <button
        onClick={handleClick}
        className="btn toggle-btn"
        aria-pressed="true"
      >
        Add
      </button>
      <ul>
        {words &&
          words.map((item: any, index: any) => {
            return (
              <li key={index}>
                {" "}
                <AlphabetItem
                  item={item}
                  index={index}
                  editFunc={handleEdit}
                  deleteFunc={handleDelete}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default AlphabetPage;
