import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <FaFacebook className="icon" />
        <FaInstagram className="icon" />
        <FaTwitter className="icon" />
        <FaPinterest className="icon" />
      </div>
      <div className="container">
        <div className="col">
          <h3>О нас</h3>
          <p>Компания</p>
          <p>Детали</p>
          <p>Оплата</p>
          <p>Обратная связь</p>
        </div>
        <div className="col">
          <h3>Компания</h3>
          <p>Компания</p>
          <p>Детали</p>
          <p>Оплата</p>
          <p>Обратная связь</p>
        </div>
        <div className="col">
          <h3>Лицензия</h3>
          <p>Компания</p>
          <p>Детали</p>
          <p>Оплата</p>
          <p>Обратная связь</p>
        </div>
        <div className="col">
          <h3>Информация</h3>
          <p>Компания</p>
          <p>Детали</p>
          <p>Оплата</p>
          <p>Обратная связь</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
