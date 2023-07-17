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
      <MenuSet title="Coffee" assets={coffee} setViewState={setViewState}/>
      <MenuSet title="Milk" assets={milk} setViewState={setViewState}/>
      <MenuSet title="Fresh juice" assets={freshJuice} setViewState={setViewState}/>
      <MenuSet title="Tea" assets={tea} setViewState={setViewState}/>
      <MenuSet title="Ade & Smoothie" assets={adeAndSmoothie} setViewState={setViewState}/>

      {viewState.name !== "" && viewState.src !== "" &&
        <Viewer src={viewState.src} name={viewState.name} setViewState={setViewState}/>
      }
    </div>
  );
};

export default Menu;