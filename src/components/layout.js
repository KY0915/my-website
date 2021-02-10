import React from 'react';
import Container from './container';
import Header from './header';

export default function Layout({ children }) {
  return (
    <div>
      <Header></Header>
      <Container>{children}</Container>
    </div>
  );
}
