import React, { Fragment } from "react";

export default () => {
  return (
    <footer>
      <hr className="white fw8" />
      <div className="flex justify-around white">
        <ul className="list">
          <li className="pa2">Events for Kids</li>
          <li className="pa2">Events for Parents</li>
          <li className="pa2">Events for Guests</li>
          <li className="pa2">Games and Gifts</li>
        </ul>
        <ul className="list">
          <li className="pa2">Events</li>
          <li className="pa2">Who We Are</li>
          <li className="pa2">Services</li>
          <li className="pa2">Features</li>
          <li className="pa2">Reviews</li>
        </ul>
        <ul className="list">
          <li className="pa2">Careers</li>
          <li className="pa2">Press</li>
          <li className="pa2">Help</li>
        </ul>
      </div>
    </footer>
  );
};
