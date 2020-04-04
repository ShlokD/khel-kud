import { useState } from "react";
import { getTicketsModel } from "../domain/tickets";

export const TicketSelector = ({
  selector,
  label,
  amount,
  upperLimit,
  lowerLimit,
  setValue,
  price
}) => {
  const increment = () => setValue(amount + 1);
  const decrement = () => setValue(amount - 1);
  return (
    <div data-test={`${selector}-ticket-selector`} className="flex flex-column items-center justify-center">
      <p className="f3 bg-white pa3">{label}</p>
      <div className="flex items-center">
        <p>{label}</p>
        <button
          data-test={`${selector}-ticket-decrement`}
          className="mh1 pa4 br-100 bg-white b--none shadow f3 o-90"
          disabled={amount === lowerLimit}
          onClick={decrement}
        >
          -
        </button>
        <p data-test={`${selector}-ticket-amount`} className="b f2 tc pa4 br-100 bg-light-purple white">{amount}</p>
        <button
          data-test={`${selector}-ticket-increment`}
          className="mh1 pa4 br-100 bg-white b--none shadow f3 o-90"
          disabled={amount === upperLimit}
          onClick={increment}
        >
          +
        </button>
      </div>
      <p className="white pa3 bg-light-purple br2 f3">Total: Rs.{amount * price} </p>
    </div>
  );
};

export const TicketsPage = ({ prices, limits }) => {
  const [childTickets, setChildTickets] = useState(0);
  const [adultTickets, setAdultTickets] = useState(0);

  return (
    <div className="flex flex-column items-center justify-center">
      <div className="flex">
        <TicketSelector
          label="Child"
          selector="child"
          amount={childTickets}
          price={prices.child}
          setValue={setChildTickets}
          upperLimit={limits.upper}
          lowerLimit={limits.lower}
        />
        <TicketSelector
          label="Adult"
          selector="adult"
          amount={adultTickets}
          price={prices.adult}
          setValue={setAdultTickets}
          upperLimit={limits.upper}
          lowerLimit={limits.lower}
        />
      </div>

      <button className="ph6 pv2 mv2 bg-light-purple white b--light-purple f2 br4">
        Buy
      </button>
      <p className="f4 white tc">
        You'll receive an email with the details. Your tickets will be on hold
        and ready for collection at the gate. Please bring a valid photo ID
      </p>
    </div>
  );
};

TicketsPage.getInitialProps = () => getTicketsModel();

export default TicketsPage;
