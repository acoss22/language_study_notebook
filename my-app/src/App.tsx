import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPageComponent';
import SentencesPage from './components/SentencesPage/SentenceComponent';
import AlphabetPage from './components/AlphabetPage/AlphabetComponent';


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
          <Route path="/sentences"  element={
            <SentencesPage />
          }
          />
           <Route path="/alphabet"  element={
            <AlphabetPage />
          }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
