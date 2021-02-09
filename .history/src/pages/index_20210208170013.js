import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';
export default function Contact() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Header headerText="hello" />
      <p>Send us a message!</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  );
}
