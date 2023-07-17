import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div id="header">
      <p id="text" onClick={() => navigate('/')}>THE GRIND</p>
    </div>
  );
};

export default Header;