import React from 'react';
import Yogurts from '../components/Yogurt';
import { Link } from 'react-router-dom';

export default function Home() {
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
              <i class="fa-solid fa-square"></i>
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
      <Yogurts />
      <footer className="footer">@YOoweGotURbesT all rights reserved</footer>
    </>
  );
}
