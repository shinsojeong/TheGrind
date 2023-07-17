import React from 'react';
import '../styles/menu.css';

const MenuItem = ({src, name, setViewState}) => {
  const click = () => {
    setViewState({
      name,
      src,
    });
  };

  return (
    <div id="menuItem" onClick={() => click()}>
      <p id="menuName">{name}</p>
      <div id="menuImgCover">
        <img src={`${process.env.PUBLIC_URL}/images/menu/${src}`} alt={name} id="menuImg"/>
      </div>
    </div>
  );
};

export default MenuItem;