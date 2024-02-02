import React, { useState } from 'react'

export default function Timer() {
  const [showText, setShowText] = useState(false);
  const handleButtonClick = () => {
    setShowText(!showText);
  };

  return (
    <div>
       <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      
      {showText && (
        <p>
          More text to show when the button is clicked. Add your additional content here.
        </p>
      )}

      <button onClick={handleButtonClick}>
        {showText ? 'Show Less' : 'Show More'}
      </button>
    </div>
    
    </div>
  )
}
