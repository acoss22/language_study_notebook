import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPageComponent';
import AddSentence from './components/SentencesPage/AddSentenceComponent';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>   
          </ul>
        </nav>
        <Routes>
          <Route path="/"  element={
            <LandingPage /> 
          }
          />
          <Route path="/addSentence"  element={
            <AddSentence /> 
          }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
