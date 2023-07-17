import React from 'react';
import '../styles/menu.css';

const MenuItem = ({src, name, price, setViewState}) => {
  const click = () => {
    console.log("The Grind");
    // setViewState({
    //   name,
    //   src,
    // });
  };

  return (
    <div id="menuItem" onClick={() => click()}>
      <p id="menuName">{name}</p>
      <p id="menuPrice">{price}</p>
      <div id="menuImgCover">
        <img src={`${process.env.PUBLIC_URL}/images/menu/${src}`} alt={name} id="menuImg"/>
      </div>
    </div>
  );
};

export default MenuItem;