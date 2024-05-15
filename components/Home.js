import React from 'react';
import Image from 'next/image';
import Pg from './page.module.css';
import Logo from '../components/icons/coffee.png';

function Home() {
  return (
    <div>
      <div className={Pg.maincont}>
        <div className={Pg.cont}>
          <div className={Pg.cont1}>
            <h2 style={{ "--i": 2 }}>Welcome to </h2>
            <h1 style={{ "--i": 3 }}>1ly Coffee</h1>
            <p style={{ "--i": 4 }}>
                Sip. Savour and Repeat every single brew you make using our Coffee
            </p>
          </div>
        </div>
        <div className={Pg.img}>
          <Image
            style={{ "--i": 1 }}
            className={Pg.image1}
            src={Logo}
            alt="logo"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
