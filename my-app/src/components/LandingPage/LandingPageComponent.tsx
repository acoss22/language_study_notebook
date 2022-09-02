import { useNavigate } from "react-router-dom";
import AddSentence from "../AddSentence/AddSentenceComponent";

const LandingPage = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/addSentence");
  };

  return (
    <div>
      <button onClick={clickHandler}>Add a sentence</button>
    </div>
  );
};
export default LandingPage;
