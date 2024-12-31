import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';
import "./App.css";
import newYear from "./../public/newyear.webp";
import year from "./../public/2025.webp";
import { useGlobalContext } from "./Context/GlobalProvider";

function App() {
  const { width, height } = useWindowSize()
  const { user, setUser } = useGlobalContext();
  const params = useParams();
  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");

  useEffect(() => {
    if (params.name) {
      setName(params.name);
    }
    console.log(user);
  }, []);

  return (
    <>
      <div className="container">
        <Confetti
        width={width}
        height={height}
        />
      </div>
      <div className="container">
        <div className="top-name">{name}</div>
      </div>
      <div className="container">
        <div className="subtitle">WISHES YOU</div>
      </div>
      <div className="container">
        <img className="new-year" src={newYear} width="450rem" />
      </div>
      <div className="container">
        <img className="year-digits" src={year} width="250rem" />
      </div>
      <div className="container">
        <div className="wish">May You have a prosperous New Year</div>
      </div>
      <div className="container">
        <div className="greet-sec">!!hAPPY nEW yEAR 2025!!</div>
      </div>
      <div className="container">
        <div className="wish-sec-container">
        <div className="wish-sec">{`"${name} wishes you a happy new year 2025"`}</div>
        </div>
      </div>
      <div className="container">
        <div className="input">
          {user ? (
            <button
              onClick={() => {
                window.location.href = "whatsapp://send?text=hey&there!";
              }}
            >
              Share with Friends
            </button>
          ) : (
            <>
              <input
                className="element-input"
                placeholder="Enter your Name here..."
                onChange={(e) => setNewName(e.target.value.toUpperCase())}
              />
              <Link to={"/" + newName}>
                <button 
                className="element-button" 
                onClick={() => {
                  setUser(true)
                  setName(newName)
                  }}>
                  GO
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
