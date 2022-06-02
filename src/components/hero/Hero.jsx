import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <h1>Найдите идеальное место</h1>
        <p className="search-text">самый большой выбор роскошных квартир, коттеджей и танхаусов.</p>
        <form className="search">
          <div>
            <input type="text" placeholder="Поиск..." />
          </div>
          <div className="radio">
            <input type="radio" />
            <label>Buy</label>
            <input type="radio" />
            <label>Rent</label>
            <button type="submit">
              <AiOutlineSearch className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
