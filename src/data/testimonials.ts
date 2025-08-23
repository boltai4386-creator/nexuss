export interface VideoTestimonial {
  id: number;
  url: string;
  title: string;
}

export interface TextTestimonial {
  id: number;
  content: string;
  author: string;
  company: string;
}

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    url: "https://drive.google.com/file/d/17OPoz37zeRFWX6UHBsMee4nA4aYy8jMb/preview",
    title: "Client Nexus Growthh"
  },
  // {
  //   id: 2,
  //   url: "https://drive.google.com/file/d/1Fne2xejDttvQHV87rt_e4DlNAnPWArcP/preview",
  //   title: "Client"
  // }
];

export const textTestimonials: TextTestimonial[] = [
  {
    id: 1,
    content: "Working with this team has been transformative for our business. Their attention to detail and innovative solutions have helped us achieve remarkable growth.",
    author: "David Wilson",
    company: "GrowthTech Solutions"
  },
  {
    id: 2,
    content: "The AI integration services provided by the team have revolutionized our customer support system. We've seen a 300% increase in customer satisfaction.",
    author: "Lisa Zhang",
    company: "AI Innovations"
  },
  {
    id: 3,
    content: "Their design expertise and technical prowess created a website that not only looks stunning but performs exceptionally well. Couldn't be happier!",
    author: "James Anderson",
    company: "Digital Ventures"
  },
  {
    id: 4,
    content: "The custom web development solutions delivered by the team exceeded our expectations. Our conversion rates have doubled since launch.",
    author: "Maria Garcia",
    company: "E-commerce Plus"
  },
  {
    id: 5,
    content: "Outstanding service and remarkable results. The team's dedication to excellence is evident in every aspect of their work.",
    author: "Tom Bradley",
    company: "Innovation Hub"
  }
];