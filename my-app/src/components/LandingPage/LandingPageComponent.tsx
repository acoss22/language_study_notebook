import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const goToSentences = () => {
    navigate("/sentences");
  };

  const goToAlphabet = () => {
    navigate("/alphabet");
  };


  return (
    <div>
      <button
        onClick={goToSentences}
        className="btn toggle-btn"
        aria-pressed="true"
      >
        Add a sentence
      </button>
      <button
        onClick={goToAlphabet}
        className="btn toggle-btn"
        aria-pressed="true"
      >
        Add an alphabet character
      </button>
    </div>
  );
};
export default LandingPage;
