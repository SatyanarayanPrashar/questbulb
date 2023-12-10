import React, { useState } from 'react';

const Index = () => {
  const [showDescription, setShowDescription] = useState(false);

  const handleValidateClick = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className={`post-bar-out-box ${showDescription ? 'post-bar-out-box-expanded' : ''}`}>
      <div className='post-bar-top'>
        <div className="post-bar-input-container">
            <input type="text" className="post-bar-input" placeholder="Got an idea? Let's start with its title..." />
        </div>
        <div className="post-bar-bttn" onClick={handleValidateClick}>
            Validate
        </div>
      </div>

      {showDescription && (
        <div className="description-container">
          <textarea className="post-bar-input-oneliner" placeholder="Add an Oneliner" />
          <textarea className="post-bar-input-description" placeholder="Explain your idea" />
        </div>
      )}
    </div>
  );
};

export default Index;
