import React from 'react';
import MenuItem from './MenuItem';
import "../styles/menu.css";

const MenuSet = ({title, assets, setViewState}) => {
  return (
    <div id="menuCover">
      <p id="menuTitle">{title}</p>
      <div id="menuSet">
        {assets.map(({name, src, price}, idx) => {
          return <MenuItem key={idx} name={name} src={src} price={price} setViewState={setViewState}/>
        })}
      </div>
    </div>
  );
};

export default MenuSet;