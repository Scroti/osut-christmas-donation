import React from 'react';
import { Link } from 'react-router-dom';
import charity from '../../assets/charity.svg';

import './Felicitare.css';

const Felicitare = () => {
  return (
    <div className="flex rubik-font md:flex-row justify-between w-screen h-screen absolute -z-10 overflow-hidden  top-0 flex-col">
      <div className="flex w-screen  flex-col font-bold bg-[#033545] left  text-white items-center justify-center text-center">
        <h1 className="lg:text-6xl lg:-mt-12 ">
          Facem familii fericite de Crăciun!
        </h1>
        <p className="lg:whitespace-wrap lg:text-left  mt-20 w-[75%]">
          LLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          vestibulum congue ornare. Vestibulum fringilla ipsum lorem. Curabitur
          et arcu id quam rhoncus scelerisque. Donec accumsan nunc quis
          porttitor suscipit.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Aenean vestibulum congue ornare. Vestibulum fringilla ipsum
          lorem. Curabitur et arcu id quam rhoncus scelerisque. Donec accumsan
          nunc quis porttitor suscipit.
        </p>
        <button className="border-white bg-transparent w-1/5 p-2 border-solid border-2 rounded text-white mt-20 -ml-[55%]">
          <Link to="/ourreason">Crează-ți felicitarea!</Link>
        </button>
      </div>
      <div className="w-screen left-border bg-white glance">
        <img src={charity} alt="" />
      </div>
    </div>
  );
};

export default Felicitare;
