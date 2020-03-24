export const getHomeModel = () => {
  return {
    features: [
      {
        title: "Safe Rides",
        subtitle: "CC Certified",
        color: "pink",
        image: "/themepark.svg",
        imgAlt: "Rides"
      },
      {
        title: "Delicious Foods",
        subtitle: "Gluten Free",
        color: "orange",
        image: "/pizza.svg",
        imgAlt: "Pizza"
      },
      {
        title: "Entertainment",
        subtitle: "Suitable for all ages",
        color: "purple",
        image: "/juggling.svg",
        imgAlt:"Jugglers"
      },
      {
        title: "Ice-Cream",
        subtitle: "No synthetic",
        color: "light-blue",
        image: "/icecream.svg",
        imgAlt: "Icecream"
      }
    ],
    credentials: [
      "Non-Profit Organization",
      "Customer Support",
      "High Safety & Security",
      "Well Designed & Decorated"
    ],
    dialogMessages: {
      SUBSCRIPTION_EXISTS: "You're already subscribed to the newsletter!",
      SUBSCRIPTION_SUCCESS:
        "You've successfully subscribed to our newsletter. Check your inbox for updates!"
    },
    visitDescription: `The outdoor environment is age appropriate to play. 
    
    The playground has been designed according to a first responders theme.
    
    The project is set to open Spring 2020`
  };
};
