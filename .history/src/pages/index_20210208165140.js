import React from 'react';
import Header from '../components/Header.js';
export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Header></Header>
      <h1>Hello Gatsby!</h1>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  );
}
