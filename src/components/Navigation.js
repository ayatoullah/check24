import React from 'react';
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <a href="/">Überricht</a>
      <a href="/link">[Neuer Eintrag]</a>
      <a href="/blog">Impressum</a>
      <button>Login/Logout</button>
    </nav>
  );
};

export default Navigation;
