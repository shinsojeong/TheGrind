import React from 'react';
import Tag from '../components/Tag';
import '../styles/menu.css';

const MenuItem = ({src, name, desc, price, tag, setViewState}) => {
  const click = () => {
    // if (window.screen.width < 1024) {
      setViewState({
        name,
        src,
      });
    // }
  };

  return (
    <div id="menuItem" onClick={() => click()}>
      <p id="menuName">{name}</p>
      {desc && <p id="menuDesc">{desc}</p>}
      <p id="menuPrice">{price}</p>
      <div id="menuImgCover">
        <img src={`${process.env.PUBLIC_URL}/images/menu/${src}`} alt={name} id="menuImg"/>
      </div>
      {tag && <Tag background={tag.background} color={tag.color} text={tag.text} />}
    </div>
  );
};

export default MenuItem;