import React from 'react';
import data from '../data';

export default function Yogurts() {
  return (
    <div className="yogurtSection">
      {data.products.map((yogurt) => (
        <div key={yogurt.id} className="littleYogurt">
          <img src={yogurt.image} alt={yogurt.slug}></img>
          <h1>{yogurt.name}</h1>
          <p>count in stock: {yogurt.countInStock}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
