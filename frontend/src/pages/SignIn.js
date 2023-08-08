import React from 'react';
import { useState } from 'react';

export default function SignIn() {
  const [name, setName] = useState('Yogurtholic');
  function handleSubmit(e) {
    e.preventDefault();
    alert('Sucessfully summited!');
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
}
