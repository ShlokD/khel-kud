export const getExploreModel = () => {
  return {
    rides: [
      { name: "Ferris Wheel", image: "/ferriswheel.jpg", description: "Marvel at the exotic views" },
      { name: "Cliffhanger", image: "/cliffhanger.jpg", description: "Thrills and spills" },
      { name: "Dodgems", image: "/dodgems.jpg", description: "Dodge and hit your friends" },
      { name: "Merry-Go-Round", image: "/carousel.jpg", description: "With horses and lions and bears, oh my!" }
    ],
    restaurants: [
      { name: "Sandwich Shop", image: "/sandwich.jpg", description: "Served with freshly baked bread" },
      { name: "Milkshake Space", image: "/milkshakes.jpg", description: "Enjoy some succulent concoctions" },
      { name: "Baljit's Burgers", image: "/burger.jpg", description: "Yummy, juicy burgers that everyone will love." }
    ],
    shows: [
      { name: "Jugglers Row", image: "/jugglers.jpg", description: "Meet our fine crew of fantastic jugglers" },
      { name: "Animals with Ananya", image: "/animals.jpg", description: "Our exotic menagerie puts on a show" }
    ]
  };
};
