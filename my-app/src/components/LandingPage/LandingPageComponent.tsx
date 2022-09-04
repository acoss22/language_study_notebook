import { useNavigate } from "react-router-dom";
import AddSentence from "../SentencesPage/AddSentenceComponent";

const LandingPage = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/addSentence");
  };

  return (
    <div>
      <button onClick={clickHandler} className="btn toggle-btn" aria-pressed="true" >Add a sentence</button>
    </div>
  );
};
export default LandingPage;
