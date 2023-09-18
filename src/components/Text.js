import React, { useState, useEffect } from "react";
import "./css/TextAnimation.css"; // Import your CSS file with animation styles

function Text() {
  const [isFirstTextVisible, setIsFirstTextVisible] = useState(true);

  useEffect(() => {
    // Toggle the visibility of the first text every 3 seconds
    const interval = setInterval(() => {
      setIsFirstTextVisible((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-animation-container">
      {isFirstTextVisible ? (
        <div className="text-animation">
          <div className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-center">
            {" "}
            <strong>
              LEARN TECHNOLOGY WITH
              <br /> INDUSTRY EXPERT
            </strong>
          </div>
        </div>
      ) : (
        <div className="text-animation">
          <div className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-center">
            {" "}
            <strong>
            BUILD YOUR CAREER IN
              <br />IT FIELD FROM SCRATCH
            </strong>
          </div>
        </div>
      )}
    </div>
  );
}

export default Text;
