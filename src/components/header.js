import { Link } from 'gatsby';
import React from 'react';

const ListLink = (props) => (
  <li style={{ display: `inline-block`, marginRight: `2rem` }}>
    <Link
      hoveredStyle={{ textDecoration: 'underline' }}
      activeStyle={{ textDecoration: 'underline' }}
      className="noselect nounderscore white-font"
      to={props.to}
    >
      {props.children}
    </Link>
  </li>
);

export default function Header(props) {
  return (
    <header style={{ background: `black`, textAlign: `center` }}>
      <div
        style={{
          margin: '0 auto',
          padding: '1.45rem 1.0875rem',
          display: 'flex',
          justifyItems: 'center',
          alignItems: 'center',
        }}
      >
        <h1 style={{ margin: 0, flex: 1 }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Kyuho Yi
          </Link>
        </h1>
        <ul
          className="noselect nounderscore white-font"
          style={{
            justifyContent: 'center',
            display: 'flex',
            flex: 1,
            listStyleType: `none`,
            fontFamily: `roboto`,
            fontSize: `1.5rem`,
          }}
        >
          <ListLink to="/">Home</ListLink>
          <ListLink to="/post/">Post</ListLink>
          <ListLink to="/project/">Project</ListLink>
          <ListLink to="/about/">About</ListLink>
        </ul>
      </div>
    </header>
  );
}
