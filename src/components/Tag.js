import React from 'react';
import '../styles/tag.css';

const Tag = ({background, color, text}) => {
  return (
    <div id="tagWrap">
      <div id="tag" style={{backgroundColor: background, color}}>
        <p id="tagText">{text}</p>
      </div>
    </div>
  );
};

export default Tag;