import React, { Fragment, useState } from "react";
import { getHomeModel } from "../domain/home";
import { addSubscription } from "../utils";

export const Title = () => (
  <section title="Khel Kud" className="flex flex-column white items-center pv5">
    <h1 data-test="app-title" className="fw6 f-headline pa0 ma0 tc">
      Khel Kud
    </h1>

    <div className="flex flex-column mh4">
      <p className="f2 tc">A park designed for the family</p>
      <a
        data-test="explore-link"
        href="/explore"
        className="ph4 pv3 ma2 br-pill f3 bg-orange b--none pointer no-underline white tc"
      >
        Explore
      </a>
      <a
        data-test="tickets-link"
        href="/tickets"
        className="ph4 pv3 ma2 br-pill f3 bg-light-purple b--none pointer no-underline white tc"
      >
        Buy Tickets
      </a>
    </div>
  </section>
);

export const Features = ({ features }) => (
  <section
    title="Features"
    className="flex flex-column flex-wrap flex-row-ns justify-around items-center pv5"
  >
    {features.map(({ title, subtitle, color, image, imgAlt }, index) => {
      return (
        <div
          data-test="feature"
          key={`feature-${index}`}
          className={`bg-${color} pa3 ma4 white br4 shadow-4 flex`}
        >
          <div className={`bg-${color} pa4 white br4 b--solid`}>
            <img alt={imgAlt} src={image} height={96} width={96} />
          </div>
          <div className="ma2 tc">
            <p className="f4 fw7">{title}</p>
            <p>{subtitle}</p>
          </div>
        </div>
      );
    })}
  </section>
);

export const Visit = ({ visitDescription }) => (
  <section
    title="Visit Us"
    className="flex flex-column flex-row-ns justify-center items-center pv5"
  >
    <img
      data-test="visit-image"
      alt="Kids playing"
      src="/kidsplaying.svg"
      className="w-50 h-50"
    />
    <div className="white flex flex-column tc pa4 f3 w-50 items-center justify-center">
      <p data-test="visit-description" className="f">
        {visitDescription}
      </p>
      <a
        data-test="visit-link"
        href="/visit"
        className="self-center bg-light-yellow black no-underline ph4 pv2 br4 b--none tc pointer"
      >
        Visit Now
      </a>
    </div>
  </section>
);

export const Credentials = ({ credentials }) => {
  return (
    <section
      title="Credentials"
      className="flex flex-column flex-row-ns justify-center items-center pv5"
    >
      <img alt="Park Entrance" src="/parkentrance.svg" className="w-50 h-50" />
      <div className="white flex flex-column tc pa4 f3 ml4-ns">
        <h2 className="tc">Why We are the best</h2>
        <div>
          {credentials.map((credential, index) => {
            return (
              <p
                data-test="credential"
                key={`credential-${index}}`}
                className="pa4 b--dashed ma2 center tc"
              >
                {credential}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const Connect = ({ dialogMessages }) => {
  const [dialogMessage, setDialogMessage] = useState("");

  async function onEmailSubmit(ev) {
    ev.preventDefault();
    if (!ev.isTrusted) return;

    const email = ev.target.elements.email.value;
    const status = await addSubscription(email);
    setDialogMessage(dialogMessages[status]);
  }

  return (
    <div className="flex flex-column items-center justify-center flex-column white pv4">
      <p className="white f2 tc">For kids who enjoy themselves</p>
      <form
        data-test="email-form"
        className="flex flex-column flex-row-ns items-center"
        onSubmit={onEmailSubmit}
      >
        <label htmlFor="email" className="f3 ph4 pv2">
          Subscribe to our newsletter
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="ph4 pv2 br4 f3"
          onSubmit={onEmailSubmit}
        ></input>
      </form>
      <p className={`tc ${dialogMessage.length > 0 ? "o-100" : "o-0"}`}>
        {dialogMessage}
      </p>
    </div>
  );
};

const Home = ({ features, credentials, dialogMessages, visitDescription }) => {
  return (
    <div className="w-100">
      <Title />
      <Features features={features} />
      <Visit visitDescription={visitDescription} />
      <Credentials credentials={credentials} />
      <Connect dialogMessages={dialogMessages} />
    </div>
  );
};

Home.getInitialProps = () => getHomeModel();
export default Home;
