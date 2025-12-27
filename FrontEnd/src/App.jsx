import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';
import "./App.css";
import newYear from "/newyear.webp";
import year from "../dist/2026.webp";
import { useGlobalContext } from "./Context/GlobalProvider";

function useVisualViewportSize() {
  const [size, setSize] = useState({
    width: window.VisualViewport?.width || window.innerWidth,
    height: window.VisualViewport?.height || window.innerHeight,
  })

  useEffect(() => {
    const update = () => {
      setSize({
        width:window.VisualViewport?.width || window.innerWidth,
        height: window.VisualViewport?.height || window.innerHeight,
      })
    }

    window.VisualViewport?.addEventListener("resize", update)
    window.addEventListener("resize", update)

    return () => {
      window.VisualViewport?.removeEventListener("resize", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return size
}

function App() {
  const { width, height } = useVisualViewportSize();
  const { user, setUser } = useGlobalContext();
  const params = useParams();
  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");

  useEffect(() => {
    if (params.name) {
      setName(params.name.charAt(0).toUpperCase() + params.name.slice(1));
    }
  }, []);

  return (
    <>
    <div className='wrapper'>

      <div className="container">
        <Confetti
        width={width}
        height={height}
        recycle={true}
        numberOfPieces={200}
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
        <div className="wish">May You have 
          a prosperous New Year</div>
      </div>
      <div className="container">
        <div className="greet-sec">!!HAPPY NEW YEAR 2026!!</div>
      </div>
      <div className="container">
        <div className="wish-sec-container">
        <div className="wish-sec">{`"${name} wishes you a happy new year 2026"`}</div>
        </div>
      </div>
      <div className="container">
        <div className="input">
          {user ? (
            <button
            className="element-button-sec"
              onClick={() => {
                window.location.href = `whatsapp://send?text=😳%20Have%20you%20seen%20this??%0A*${name.replace(' ','')}*%20sent%20you%20a%20suprise%20message%20🥰%0A*Tap%20here!*%0A👇%20👇%0Ahttps://new-year-suprise.onrender.com/${name.replace(' ','')}`;
              }}
              >
              Share with Friends
            </button>
          ) : (
            <>
              <input
                className="element-input"
                placeholder="👉Enter your Name here..."
                onChange={(e) => setNewName(e.target.value.toLowerCase())}
              />
              <Link to={"/" + newName}>
                <button 
                className="element-button" 
                onClick={() => {
                  setUser(true)
                  setName(newName.charAt(0).toUpperCase() + newName.slice(1))
                  }}>
                  👉GO
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
                </div>
    </>
  );
}

export default App;
