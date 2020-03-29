import React from "react";

export default () => (
  <header className="flex items-center justify-around flex-wrap">
    <a className="no-underline" href="/">
      <div className="flex bold f1 fw7 ml4">
        <p className="light-purple">Khel</p>
        <p className="white">Kud</p>
      </div>
    </a>
    <nav>
      <ul className="flex flex-row items-center justify-center ma2 pa2 white list">
        <li className="pa4 pointer">Events</li>
        <li className="pa4 pointer">Pricing</li>
        <li className="pa4 pointer">Blog</li>
        <li className="pa4 pointer">Login</li>
      </ul>
    </nav>
  </header>
);
