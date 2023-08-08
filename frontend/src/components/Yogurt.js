import React from 'react';
import data from '../data';
import { useState } from 'react';

export default function Yogurts({ addItem }) {
  return (
    <div className="yogurtSection">
      {data.products.map((yogurt) => (
        <div key={yogurt.id} className="littleYogurt">
          <img src={yogurt.image} alt={yogurt.slug}></img>
          <h1>{yogurt.name}</h1>
          <p>price: ${yogurt.price}</p>
          <button onClick={addItem}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
