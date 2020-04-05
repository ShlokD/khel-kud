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
        subtitle: "No synthetic ingredients",
        color: "light-blue",
        image: "/icecream.svg",
        imgAlt: "Icecream"
      }
    ],
    credentials: [
      "Award Winning Rides",
      "Customer Support",
      "High Safety & Security",
      "Well Designed & Decorated"
    ],
    dialogMessages: {
      SUBSCRIPTION_EXISTS: "You're already subscribed to the newsletter!",
      SUBSCRIPTION_SUCCESS:
        "You've successfully subscribed to our newsletter. Check your inbox for updates!",
      SUBSCRIPTION_ERROR: "Error while subscribing. Please try again!"
    },
    visitDescription: `Come and spend a day in our theme park.

    It's fun for the whole family`
  };
};
