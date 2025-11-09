import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20 0C12.28 0 6 6.28 6 14c0 3.32 1.16 6.36 3.08 8.8L6 28h4v4h4v4h8v-4h4v-4h4l-3.08-5.2C32.84 20.36 34 17.32 34 14c0-7.72-6.28-14-14-14z"
        />
        <path d="M20 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
      </svg>
    ),
    title: "AI-Powered Insights",
    paragraph:
      "Leverage advanced AI to gain deep insights from your data, helping you make informed decisions faster and more accurately.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20 0C17.79 0 16 1.79 16 4v8h8V4c0-2.21-1.79-4-4-4zM10 12v8h20v-8H10zM6 24v8h28v-8H6z"
        />
        <path d="M20 4c1.1 0 2 .9 2 2v8h-4V6c0-1.1.9-2 2-2z" />
      </svg>
    ),
    title: "Seamless Integration",
    paragraph:
      "Easily integrate with your existing tools and workflows for a frictionless experience that boosts productivity.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M30 4H10c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM10 6h20v20H10V6z"
        />
        <path d="M14 10h12v2H14v-2zM14 14h12v2H14v-2zM14 18h8v2h-8v-2z" />
      </svg>
    ),
    title: "User-Friendly Interface",
    paragraph:
      "Enjoy an intuitive interface designed for users of all skill levels, ensuring ease of use and quick adoption.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M5 30h30v4H5v-4zM10 20h4v10h-4V20zM18 10h4v20h-4V10zM26 15h4v15h-4V15z"
        />
        <path d="M5 26h30v4H5v-4z" />
      </svg>
    ),
    title: "Scalable Solutions",
    paragraph:
      "Our solutions grow with your business, providing scalability to handle increasing demands without compromising performance.",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20 4c-4.42 0-8 3.58-8 8v4c0 4.42 3.58 8 8 8s8-3.58 8-8v-4c0-4.42-3.58-8-8-8zM32 16c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4s4-1.79 4-4v-8c0-2.21-1.79-4-4-4zM8 16c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4s4-1.79 4-4v-8c0-2.21-1.79-4-4-4z"
        />
        <path d="M20 8c-2.21 0-4 1.79-4 4v4c0 2.21 1.79 4 4 4s4-1.79 4-4v-4c0-2.21-1.79-4-4-4z" />
      </svg>
    ),
    title: "24/7 Support",
    paragraph:
      "Get round-the-clock support from our dedicated team, available whenever you need assistance to keep things running smoothly.",
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20 0C15.58 0 12 3.58 12 8c0 2.21 1.79 4 4 4v4c0 2.21 1.79 4 4 4s4-1.79 4-4v-4c2.21 0 4-1.79 4-4 0-4.42-3.58-8-8-8zM16 32h8v8h-8v-8z"
        />
        <path d="M20 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
      </svg>
    ),
    title: "Innovative Technology",
    paragraph:
      "Built with cutting-edge technology to deliver innovative features that set us apart and future-proof your operations.",
  },
];

export default featuresData;