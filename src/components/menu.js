import React, { useState } from 'react';
import HamburgerIcon from './hamburgericon';
import './menu.scss';

const Menu = ({
  language,
  setLanguage,
  randomMeter,
  setRandomMeter,
  isMonochrome,
  setIsMonochrome,
  isUpsideDown,
  setIsUpsideDown,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <>
          <div className="menu__overlay" onClick={() => setIsOpen(false)} />
          <ul className="menu__popup">
            <li>
              <label htmlFor="language">Select language</label>
              <select value={language} id="language" onChange={e => setLanguage(e.target.value)}>
                <option value="en">English</option>
                <option value="sv">Swedish</option>
              </select>
            </li>
            <li>
              <button type="button" onClick={() => setRandomMeter(randomMeter + 1)}>
                Change BG color
              </button>
            </li>
            <li>
              <label htmlFor="monochrome">Set monochrome</label>
              <input type="checkbox" id="monochrome" checked={isMonochrome} onChange={() => setIsMonochrome(!isMonochrome)} />
            </li>
            <li>
              <button type="button" onClick={() => setIsUpsideDown(!isUpsideDown)}>
                Rotate text
              </button>
            </li>
          </ul>
        </>
      )}
      <button
        className="menu__button"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HamburgerIcon clicked={isOpen} height={50} width={50} />
      </button>
    </>
  );
};

export default Menu;
