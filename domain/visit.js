export const getVisitModel = () => {
  return {
    visitFeatures: [
      {
        title: "Hours",
        icon: "/clock.svg",
        featureImage: "/park.jpg",
        description: "The park is open 7 days a week, 9 AM to 6 PM",
        featureImageAlt: "Park Rides"
      },
      {
        title: "Address",
        icon: "/directions.svg",
        featureImage: "/parkmap.jpg",
        description:
          "144, Dariya Sthan Chamber,  Dariya Sthan Street, Opera House, Mumbai, Maharashtra",
        featureImageAlt: "Park Address Details"
      },
      {
        title: "Guest Services",
        icon: "/service.svg",
        featureImage: "/guestservices.jpg",
        description:
          "The guest services office is located at the park's main entrance. Open daily from park opening to closing.",
        featureImageAlt: "Guest Services Description"
      },
      {
        title: "Guests With Disabilities",
        icon: "/accessibility.svg",
        featureImage: "/parkbus.jpg",
        description:
          "We have several services to help guests with disabilities enjoy their visit. The park provides special parking, rest rooms, and access to shows, tour buses, and exhibits for guests with disabilities.",
        featureImageAlt: "Accessibility services"
      }
    ]
  };
};
