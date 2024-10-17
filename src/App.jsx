import { useState } from 'react'
import './App.css'
import Texts from './Texts'

function App() {

  const [inputValue, setInputValue] = useState("");
  const [showKeypad, setShowKeypad] = useState(false);
  const [savedNumber, setSavedNumber] = useState("");

  const handleKeypadClick = (digit) => {
    setInputValue((prevValue) => prevValue + digit);
  };

  const handleBackspace = () => {
    setInputValue((prevValue) => prevValue.slice(0, -1));
  };

  const handleEnter = () => {
    setSavedNumber(inputValue);
    setShowKeypad(false);
  };

  const handleCloseKeypad = () => {
    setShowKeypad(false);
  };

  const handleSearchClick = () => {
    setShowKeypad(true);
  };

  return (
    <div>
      <input
        type="text"
        className="search-input"
        value={inputValue}
        readOnly
        onClick={handleSearchClick}
        placeholder="Click to open keypad"
      />
      {showKeypad && (
        <div className="container">
          <div className="keypad-container">
            <div className="keypad">
              {[...Array(10).keys()].map((digit) => (
                <button
                  key={digit}
                  className="keypad-button"
                  onClick={() => handleKeypadClick(digit)}
                >
                  {digit}
                </button>
              ))}
              <button className="keypad-button" onClick={handleBackspace}>
                ⌫
              </button>
              <button className="keypad-button" onClick={handleEnter}>
                Go
              </button>
              <button className="keypad-button" onClick={handleCloseKeypad}>
                X
              </button>
            </div>
          </div>
        </div>
      )}

      <Texts savedNumber={savedNumber}/>
    </div>

  )
}

export default App
