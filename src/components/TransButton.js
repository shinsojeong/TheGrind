import React from 'react';
import '../styles/button.css';

const TransButton = ({isEnglish}) => {
  return (
    <div id="transButtonSet">
      <span id="transTitle">{isEnglish ? "언어" : "Language"} :</span>
      <span id="transButton">
        {isEnglish ? "English" : "한국어"}
      </span>
    </div>
  );
};

export default TransButton;