import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Navigation(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;

  return (
    <header className="flex-row px-1">
      <nav className="nav-wrapper background-brown">
        <a className="color-white font-large" href="/">
        &nbsp;Scot Itakura
        </a>
        <ul id="nav-mobile" className="flex-row right">
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && 'navActive'
                }`}
              key={category.name}
            >
              <span
              className="cursor-pointer"
                onClick={() => {
                  setCurrentCategory(category)
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
      <section className="hero" alt="Scot Itakura in front of a waterfall"><div></div></section>
    </header>
  );
}

export default Navigation;