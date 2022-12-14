import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const TextLanding = () => {
  return (
    <div>
      <div className="w-1/4 absolute mt-44 ml-32 ">
        <div>
          <p className="matahari text-8xl">Vine Crăciunul, fă o faptă bună!</p>
        </div>
        <button className="bg-transparent animate-pulse white font-semibold  py-2 px-4 border font-poppins hover:animate-none border-white rounded-3xl flex whitespace-pre-line mt-8  hover:shadow-[0_15px_30px_-15px_rgba(255,255,255,0.3)]">
          <Link to="/ourreason">Hai să povestim mai multe &nbsp;</Link>
          <svg
            className="w-6 h-6 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TextLanding;
