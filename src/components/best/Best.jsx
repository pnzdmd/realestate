import React from 'react';

import Apt1 from '../../assets/apt1.jpeg';
import Apt2 from '../../assets/apt2.jpeg';
import Apt3 from '../../assets/apt3.jpeg';

import './Best.css';

const Best = () => {
  return (
    <div className="best">
      <h1>Найдите недвижимость с лучшим рейтингом</h1>
      <div>
        <p>
          <span className="bold">Все</span>
        </p>
        <p>Коммерческая</p>
        <p>Жилая</p>
        <p>Дачи</p>
      </div>
      <div className="container">
        <img src={Apt1} alt="" />
        <img src={Apt2} alt="" />
        <img src={Apt3} alt="" />
      </div>
      <button className="btn">Просмотреть Все</button>
    </div>
  );
};

export default Best;
