import React from 'react';
import Yogurts from '../components/Yogurt';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
  const [item, setItem] = useState(0);
  function handleOnClick() {
    setItem(item + 1);
  }

  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signin">SignIn</Link>
            </li>
            <li>
              <Link to="/event">Event</Link>
            </li>
            <li className="cart">
              <Link to="/cart">Cart</Link>
              {'  '}
              <i class="fa-solid fa-square">
                <span>{item}</span>
              </i>
            </li>
          </ul>
        </nav>
        <header className="header">
          <h2>
            <b>YO</b>o we <b>G</b>ot <b>UR</b> bes<b>T</b>!
          </h2>
          <p>-represent the best yogurt only for you-</p>
        </header>
      </div>
      <Yogurts addItem={handleOnClick} />
      <footer className="footer">@YOoweGotURbesT all rights reserved</footer>
    </>
  );
}
