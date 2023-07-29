import React from 'react';
import MenuItem from './MenuItem';
import "../styles/menu.css";

const MenuSet = ({title, assets, setViewState, isEnglish}) => {
  return (
    <div id="menuCover">
      <p id="menuTitle">{title}</p>
      <div id="menuSet">
        {assets.map(({name, enName, src, desc, enDesc, price, tag}, idx) => {
          return <MenuItem key={idx} name={isEnglish ? enName : name} src={src} desc={isEnglish ? enDesc : desc} price={price} tag={tag} setViewState={setViewState}/>
        })}
      </div>
    </div>
  );
};

export default MenuSet;