import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/sentences");
  };

  return (
    <div>
      <button onClick={clickHandler} className="btn toggle-btn" aria-pressed="true" >Add a sentence</button>
    </div>
  );
};
export default LandingPage;
