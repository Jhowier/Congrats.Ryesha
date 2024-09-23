import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import About from './assets/Pages/About';
import Confetti from 'react-confetti';

import './Congrats.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home component with header and banner */}
        <Route path="/about" element={<About />} /> {/* About Page */}
      </Routes>
    </Router>
  );
};

// Define Home component with confetti effect on click and hover
const Home = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  // Trigger confetti for 3 seconds on card click
  const handleCardClick = () => {
    triggerConfetti();
  };

  // Trigger confetti when mouse hovers over the card
  const handleMouseEnter = () => {
    triggerConfetti();
  };

  // Function to trigger confetti and set it to disappear after 3 seconds
  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000); // Confetti disappears after 3 seconds
  };

  return (
    <div>
      {/* Header Section */}
      <header>
        <div className="left"></div>
      </header>

      {/* Banner Section */}
      <div className="banner">
        <div className="product"></div>

        {/* Rock Images */}
        <div className="rock"></div>
      </div>

      {/* Birthday Card Section */}
      <div
        className="birthdayCard"
        onClick={handleCardClick}
        onMouseEnter={handleMouseEnter}
      >
        <div className="birthdayCard2">
          <div className="cardFront">
            <div className="front-text">
              <h3 className="happy">CONGRATULA</h3>
              <h2 className="bday">BIRTHDAY</h2>
              <h3 className="toyou">to you!</h3>
            </div>
            <div className="wrap-deco">
              <div className="decorations"></div>
              <div className="decorationsTwo"></div>
            </div>
            <div className="wrap-decoTwo">
              <div className="decorations"></div>
              <div className="decorationsThree"></div>
            </div>
            <div className="plate">
              {/* Replace confetti with an image */}
              <img src="images/RYESHA.png" alt="Birthday Celebration" className="birthday-image" />
            </div>
          </div>

          <div className="cardInside">
            <div className="inside-text">
              <h3 className="happy">
                CONGRATS ON</h3>
              <h2 className="bday">PASSING THE</h2>
              <h3 className="toyou">BOARD!! </h3>
            </div>
            <div className="wishes">
              <p>Dear Friend,</p>
              <p>Congratulations, Ryesha! 🥳 hope you can read this letter and rest assured that it’s not a phishing link or hack. Wishing you all the best in achieving your dreams!</p>
              
              <h4 className="name">- Jhowier ❤</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Confetti Effect */}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={300} // Adjust the number of confetti pieces as needed
        />
      )}
    </div>
  );
};

export default App;
