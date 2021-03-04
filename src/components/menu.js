import React, { useState } from 'react';
import HamburgerIcon from './hamburgericon';
import './menu.scss';

const Menu = ({
  language,
  isMonochrome,
  onChangeLanguage,
  onChangeBackground,
  onChangeMonochrome,
  onRotateText,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <>
          <div className="menu__overlay" onClick={() => setIsOpen(false)} aria-hidden="true" />
          <ul className="menu__popup">
            <li>
              <label htmlFor="language">Select language</label>
              &nbsp;
              <select value={language} id="language" onBlur={e => onChangeLanguage(e.target.value)} onChange={e => onChangeLanguage(e.target.value)}>
                <option value="en">English</option>
                <option value="sv">Swedish</option>
              </select>
            </li>
            <li>
              <button type="button" onClick={onChangeBackground}>
                Change BG color
              </button>
            </li>
            <li>
              <label htmlFor="monochrome">Set monochrome</label>
              &nbsp;
              <input type="checkbox" id="monochrome" checked={isMonochrome} onChange={onChangeMonochrome} />
            </li>
            <li>
              <button type="button" onClick={onRotateText}>
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
