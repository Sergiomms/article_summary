import { useEffect, useState } from 'react'
import './App.css'
import Texts from './Texts'
import myImage from './assets/images/c.jpeg';

function App() {

  const [inputValue, setInputValue] = useState("");
  const [showKeypad, setShowKeypad] = useState(false);
  const [savedNumber, setSavedNumber] = useState("");
  const [isVisible, setIsVisible] = useState(false);

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

  // Function to scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Show or hide the button depending on the scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      <div className='image-container'>
        <img
          className='image'
          src={myImage}
          alt='image'
        />  
      </div>
      
      <input
        type="text"
        className="search-input"
        value={inputValue}
        readOnly
        onClick={handleSearchClick}
        placeholder="Teclado Virtual"
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
                Ir
              </button>
              <button className="keypad-button" onClick={handleCloseKeypad}>
                X
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Back to Top Button */}
      {isVisible && (
        <button onClick={scrollToTop} className="back-to-top">
          Voltar ao topo
        </button>
      )}

      <Texts savedNumber={savedNumber} />
    </div>

  )
}

export default App
