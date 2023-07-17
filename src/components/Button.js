import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/button.css';

const Button = ({title, link}) => {
  const navigate = useNavigate();

  const click = () => {
    navigate(link);
  };

  return (
    <div className="buttonSet">
      <input type="button" id="button" onClick={() => click()} value={title}></input>
    </div>
  );
};

export default Button;