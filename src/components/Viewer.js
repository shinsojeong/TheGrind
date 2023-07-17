import React from 'react';
import '../styles/viewer.css';

const Viewer = ({name, src, setViewState}) => {
  const close = () => {
    if (window.screen.width < 1024) {
      setViewState({
        name: "",
        src: "",
      })
    }
  };

  return (
    <div id="viewer" onClick={() => close()}>
      <img id="viewerImg" src={`${process.env.PUBLIC_URL}/images/menu/${src}`} alt={name} />
      {/* <p id="viewerName">{name}</p> */}
    </div>
  );
};

export default Viewer;