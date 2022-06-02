import React from 'react';

import House1 from '../../assets/house1.jpg';
import Bed1 from '../../assets/bed1.jpg';
import Bed2 from '../../assets/bed2.jpg';
import Kitchen from '../../assets/kitchen.jpg';
import Bathroom from '../../assets/bath1.jpg';

import House2 from '../../assets/house2.jpg';
import Bed3 from '../../assets/bed3.jpg';
import Bed4 from '../../assets/bed4.jpg';
import Bathroom2 from '../../assets/bath2.jpg';
import LivingRoom from '../../assets/living-room.jpg';

import './Featured.css';

const Featured = () => {
  return (
    <div className="featured">
      <h1 className="featured-text">Самые популярные списки</h1>
      <p className="featured-text">
        Выбранные объявления по городам, регионам и почтовым индексам на основе просмотров.
      </p>
      <div className="container">
        <img className="span-3 image-grid-row-2" src={House1} alt="" />
        <img src={Bed1} alt="" />
        <img src={Bed2} alt="" />
        <img src={Kitchen} alt="" />
        <img src={Bathroom} alt="" />
        <div className="span-3 img-details">
          <div className="top">
            <h2>Домодедово</h2>
            <p>Дом на продажу</p>
            <p className="price">22,600,000₽</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Комнат:</p>
                <p>5</p>
              </div>
              <div className="info">
                <p className="bold">Ванные комнаты:</p>
                <p>2</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold">Площадь:</p>
                <p>238</p>
              </div>
              <div className="info">
                <p className="bold">Аренда:</p>
                <p>₽ 85,000 /м </p>
              </div>
            </div>
          </div>
        </div>
        <div className="span-2 right-img-details">
          <p>
            Красивый современный дом в городе с полноразмерным бассейном. Просторный и роскошный дом
            расположен в пригороде Домодедово. Включая медиа-зал, тренажерный зал и встроенную
            сауну.
          </p>
          <button className="btn">Просмотреть список</button>
        </div>
      </div>

      {/* Section section */}
      <div className="container">
        <img className="order-2" src={Bed3} alt="" />
        <img className="order-3" src={Bed4} alt="" />

        <img className="span-3 image-grid-row-2 order-1" src={House2} alt="" />

        <img className="order-4" src={Bathroom2} alt="" />
        <img className="order-5" src={LivingRoom} alt="" />

        <div className="span-2 right-img-details order-7">
          <p>
            Красивый современный дом в городе с полноразмерным бассейном. Просторный и роскошный дом
            расположен в пригороде Подольска. Включая медиа-зал, тренажерный зал и встроенную сауну.
          </p>
          <button className="btn">Просмотреть список</button>
        </div>

        <div className="span-3 img-details order-6">
          <div className="top">
            <h2>Подольск</h2>
            <p>Дом на продажу</p>
            <p className="price">2,677,000 ₽</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Комнат:</p>
                <p>5</p>
              </div>
              <div className="info">
                <p className="bold">Ванные комнаты:</p>
                <p>7</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold">Площадь:</p>
                <p>280</p>
              </div>
              <div className="info">
                <p className="bold">Аренда:</p>
                <p>₽ 104,500 /м</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
