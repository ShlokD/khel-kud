import { getExploreModel } from "../domain/explore";
import { Fragment, useState } from "react";

const Accordion = ({ title, children }) => {
  const [ expanded, setExpanded ] = useState(false);
  const height = expanded ? 330 : 0;
  return (
    <div className="flex flex-column pa4 ma2 justify-center items-center w-100">
      <button className="b pa4 w-90 f1 light-purple bg-transparent b--dashed pointer accordion-button" onClick={() => setExpanded(!expanded)}>{title}</button>
      <div style={{ height }} className={`overflow-hidden animate-height`}>{children}</div>
    </div>
  );
};

const ExplorePage = ({ rides, restaurants, shows }) => {
  return (
    <Fragment>
      <h1 className="b white tc f-headline">So Much to Do and See!</h1>
      <img className="h-50 w-50 db mr-auto ml-auto shadow-4" src="/explore.jpg" />
      <p className="white pa4 tc f3">
      Come be immersed in a land full of fun things to do for the whole family. 
      Take a thriling ride, eat some yummy food and marvel at our amazing shows.
      </p>
      <Accordion title="Rides">
        {rides.map(ride => (
          <p className="white">{ride.name}</p>
        ))}
      </Accordion>
      <Accordion title="Restaurants">
        {restaurants.map(restaurant => (
          <p className="white">{restaurant.name}</p>
        ))}
      </Accordion>
      <Accordion title="Shows">
        {shows.map(show => (
          <p className="white">{show.name}</p>
        ))}
      </Accordion>
    </Fragment>
  );
};

ExplorePage.getInitialProps = () => {
  return getExploreModel();
};

export default ExplorePage;
