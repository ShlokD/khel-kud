export const getTicketsModel = () => {
  return {
    prices: {
      child: 350,
      adult: 550
    },
    limits: {
      lower: 0,
      upper: 16
    }
  };
};
