import React, { useState } from 'react';
import MenuSet from '../components/MenuSet';
import { coffee, milk, freshJuice, tea, adeAndSmoothie } from '../assets/menu';
import '../styles/menu.css';
import Viewer from '../components/Viewer';

const Menu = () => {
  const [viewState, setViewState] = useState({
    name: "",
    src: "",
  });

  return (
    <div id="menu">
      <div className="menuBundle" id="menuBundle1">
        <MenuSet title="Coffee" assets={coffee} setViewState={setViewState}/>
      </div>
      <div className="menuBundle" id="menuBundle2">
        <MenuSet title="Milk" assets={milk} setViewState={setViewState}/>
        <MenuSet title="Fresh juice" assets={freshJuice} setViewState={setViewState}/>
      </div>
      <div className="menuBundle" id="menuBundle3">
        <MenuSet title="Tea" assets={tea} setViewState={setViewState}/>
        <MenuSet title="Ade & Smoothie" assets={adeAndSmoothie} setViewState={setViewState}/>
      </div>

      {viewState.name !== "" && viewState.src !== "" &&
        <Viewer src={viewState.src} name={viewState.name} setViewState={setViewState}/>
      }
    </div>
  );
};

export default Menu;