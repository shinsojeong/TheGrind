import React, { useState } from 'react';
import MenuSet from '../components/MenuSet';
import { coffee, milk, freshJuice, tea, adeAndSmoothie, dessert } from '../assets/menu';
import '../styles/menu.css';
import Viewer from '../components/Viewer';
import TransButton from '../components/TransButton';

const Menu = () => {
  const [viewState, setViewState] = useState({
    name: "",
    src: "",
  });
  const [isEnglish, setIsEnglish] = useState(false);

  return (
    <div id="menu">
      <div onClick={() => setIsEnglish(!isEnglish)}>
        <TransButton isEnglish={isEnglish}/>
      </div>

      <div className="menuBundle" id="menuBundle1">
        <MenuSet title="Coffee" assets={coffee} setViewState={setViewState} isEnglish={isEnglish}/>
      </div>
      <div className="menuBundle" id="menuBundle2">
        <MenuSet title="Milk" assets={milk} setViewState={setViewState} isEnglish={isEnglish}/>
        <MenuSet title="Fresh juice" assets={freshJuice} setViewState={setViewState} isEnglish={isEnglish}/>
      </div>
      <div className="menuBundle" id="menuBundle3">
        <MenuSet title="Tea" assets={tea} setViewState={setViewState} isEnglish={isEnglish}/>
      </div>
      <div className="menuBundle" id="menuBundle4">
        <MenuSet title="Ade & Smoothie" assets={adeAndSmoothie} setViewState={setViewState} isEnglish={isEnglish}/>
        <MenuSet title="Dessert" assets={dessert} setViewState={setViewState} isEnglish={isEnglish}/>
      </div>

      {viewState.name !== "" && viewState.src !== "" &&
        <Viewer src={viewState.src} name={viewState.name} setViewState={setViewState}/>
      }
    </div>
  );
};

export default Menu;