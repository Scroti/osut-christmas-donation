import { useContext, useState } from 'react';
import { Link, Route, useLocation, useRoutes } from 'react-router-dom';
import osut from '../../assets/OSUT.svg';
import useWindowDimensions from '../../hooks/useWindowDimensions';
export default function Navbar() {
  const { height, width } = useWindowDimensions();
  const [isPhone, setIsPhone] = useState('false');
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  const validateDimesions = () => {
    if (width < 1024) {
      setIsPhone(true);
    }
  };
  var currentRoutes = useLocation().pathname;
  return (
    <nav className="flex items-center justify-between  bg-transparent p-6 matahari  ">
      <div class="flex items-center  text-white mr-6 ">
        <Link to="/">
          <img src={osut} alt="logo" className="w-24 ml-24" />
        </Link>
      </div>
      {currentRoutes === '/ourreason' ? (
        <button className="bg-transparent  font-semibold r-0  text-black py-1 px-3 border matahari   border-black rounded-md flex align-items-center ">
          <a
            href="https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies"
            target={'_blank'}
          >
            Donează &nbsp;
          </a>

          <svg
            class="w-6 h-6 -mt-0.5"
            fill="none"
            stroke="black"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
            ></path>
          </svg>
        </button>
      ) : null}
    </nav>
  );
}
