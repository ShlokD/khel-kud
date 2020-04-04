import { getExploreModel } from "../domain/explore";
import { Fragment, useState } from "react";

const Accordion = ({ title, children, containerClasses }) => {
  const [expanded, setExpanded] = useState(false);
  const maxHeight = expanded ? 50000 : 0;
  return (
    <div data-test="explore-accordion" className="flex flex-column pa4 ma2 justify-center items-center w-100">
      <button
        className="b pa4 w-90 f1 light-purple bg-transparent b--dashed pointer accordion-button"
        onClick={() => setExpanded(!expanded)}
      >
        {title}
      </button>
      <div
        style={{ maxHeight }}
        className={`${containerClasses} overflow-hidden animate-height`}
      >
        {children}
      </div>
    </div>
  );
};

const AttractionCard = ({ name, image, description }) => {
  return (
    <div data-test="attraction-card" className="pa2 ma2 flex items-center justify-center bg-white w-50 h-50 shadow-4">
      <img className="h-50 w-50" alt={name} src={image} />
      <div className="ma2 pa2 flex flex-column tc">
        <p className="f2">{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

const ExplorePage = ({ rides, restaurants, shows }) => {
  return (
    <Fragment>
      <h1 className="b white tc f-headline">So Much to Do and See!</h1>
      <img
        className="h-33 w-33 db mr-auto ml-auto shadow-4"
        src="/explore.jpg"
      />
      <p className="white pa4 tc f3">
        Come be immersed in a land full of fun things to do for the whole
        family. Take a thriling ride, eat some yummy food and marvel at our
        amazing shows.
      </p>
      <Accordion
        containerClasses="flex flex-wrap items-center justify-center mv2"
        title="Rides"
      >
        {rides.map((ride, index) => (
          <AttractionCard key={index} {...ride} />
        ))}
      </Accordion>
      <Accordion
        containerClasses="flex flex-wrap items-center justify-center mv2"
        title="Restaurants"
      >
        {restaurants.map((restaurant, index) => (
          <AttractionCard key={index} {...restaurant} />
        ))}
      </Accordion>
      <Accordion
        containerClasses="flex flex-wrap items-center justify-center mv2"
        title="Shows"
      >
        {shows.map((show, index) => (
          <AttractionCard key={index} {...show} />
        ))}
      </Accordion>
    </Fragment>
  );
};

ExplorePage.getInitialProps = () => {
  return getExploreModel();
};

export default ExplorePage;
