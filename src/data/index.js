import { HOME, WORK, CONTACT, ABOUT } from "../contants/routes";

import startupIcon from "../static/icons/startup.svg";
import establishedIcon from "../static/icons/established.svg";
import enterpriseIcon from "../static/icons/enterprise.svg";

import discover1Image from "../static/images/discover1.png";
import discover2Image from "../static/images/discover2.png";
import discover3Image from "../static/images/discover3.png";

import transform1Image from "../static/images/transform1.png";
import transform2Image from "../static/images/transform2.png";
import transform3Image from "../static/images/transform3.png";

import design1Image from "../static/images/design1.png";
import design2Image from "../static/images/design2.png";
import design3Image from "../static/images/design3.png";

import scale1Image from "../static/images/scale1.png";
import scale2Image from "../static/images/scale2.png";
import scale3Image from "../static/images/scale3.png";

//projects
import esgateImage from "../static/images/projects/esgate.png";
import mgamerImage from "../static/images/projects/mgamer.png";
import studytorchImage from "../static/images/projects/studytorch.png";
import adGenImage from "../static/images/projects/adGen.png";
import ayushImage from "../static/images/projects/ayush.png";
import brandBookImage from "../static/images/projects/brandBook.png";
import mealqImage from "../static/images/projects/mealq.png";
import mPaisaImage from "../static/images/projects/mPaisa.png";

export const headerButtons = [
  {
    name: "Home",
    redirect: HOME,
    key: 1,
  },
  {
    name: "Work",
    redirect: WORK,
    key: 2,
  },
  {
    name: "About",
    redirect: ABOUT,
    key: 3,
  },
  {
    name: "Contact",
    redirect: CONTACT,
    key: 4,
  },
];

export const homeProjects = [
  {
    heading: "ESGATE",
    description: "Making your crypto experience safe and fun.",
    image: esgateImage,
    tags: ["Brand", "Web", "Illustration"],
  },
  {
    heading: "mGamer",
    description: "Making your crypto experience safe and fun.",
    image: mgamerImage,
    tags: ["Brand", "Web", "Illustration"],
  },
  {
    heading: "StudyTorch",
    description: "Making your crypto experience safe and fun.",
    image: studytorchImage,
    tags: ["Brand", "Web", "Illustration"],
  },
];

export const projects = [
  {
    heading: "ESGATE",
    description: "Making your crypto experience safe and fun.",
    image: esgateImage,
    tags: ["Brand", "Web", "Illustration"],
  },
  {
    heading: "BrandBook",
    description: "Making your crypto experience safe and fun.",
    image: brandBookImage,
    tags: ["Brand", "Web", "Illustration"],
  },
  {
    heading: "AdGen",
    description: "Making your crypto experience safe and fun.",
    image: adGenImage,
    tags: ["Brand", "Web", "Illustration"],
  },

  {
    heading: "StudyTorch",
    description: "Making your crypto experience safe and fun.",
    image: studytorchImage,
    tags: ["Brand", "Web", "Illustration"],
  },
  {
    heading: "mGamer",
    description: "Making your crypto experience safe and fun.",
    image: mgamerImage,
    tags: ["Brand", "Web", "Illustration"],
  },

  {
    heading: "mPaisa",
    description: "Making your crypto experience safe and fun.",
    image: mPaisaImage,
    tags: ["Brand", "Web", "Illustration"],
  },
  {
    heading: "Ayush",
    description: "Making your crypto experience safe and fun.",
    image: ayushImage,
    tags: ["Brand", "Web", "Illustration"],
  },
  {
    heading: "MealQ",
    description: "Making your crypto experience safe and fun.",
    image: mealqImage,
    tags: ["Brand", "Web", "Illustration"],
  },
];

export const businerssPartners = [
  {
    heading: "Startup",
    image: startupIcon,
  },
  {
    heading: "Established",
    image: establishedIcon,
  },
  {
    heading: "Enterprise",
    image: enterpriseIcon,
  },
];

export const businessDesigns = [
  {
    heading: "Discover",
    description:
      "We start by understanding your product, business goals, and vision. From there, we conduct thorough research to identify gaps and challenges, turning our findings into actionable insights and clear goals.",
    images: [discover1Image, discover2Image, discover3Image],
  },
  {
    heading: "Transform",
    description:
      "We create an information architecture to guide seamless end-user navigation, focusing on innovative features for an ideal experience. Finally, we wireframe, prototype, and test the product with real users.",
    images: [transform1Image, transform2Image, transform3Image],
  },
  {
    heading: "Design for impact",
    description:
      "UI design is more than just adding visuals; it’s about bringing experiences to life. We carefully craft each element to deliver a consistent and engaging visual experience.",
    images: [design1Image, design2Image, design3Image],
  },
  {
    heading: "Scale for growth",
    description:
      "We build custom front-end projects and work with no-code platforms like Webflow. If development isn’t handled by us, our project manager supports your dev team with any questions or concerns.",
    images: [scale1Image, scale2Image, scale3Image],
  },
];

export const projectTypes = [
  { label: "Logo/Branding", value: "Logo/Branding" },
  { label: "Illustration", value: "Illustration" },
  { label: "Web Design", value: "Web Design" },
  { label: "Design Product", value: "Design Product" },
  { label: "App Design", value: "App Design" },
  { label: "Webflow Development", value: "Webflow Development" },
  { label: "Other", value: "Other" },
];

export const budgets = [
  { label: "Less than $20k", value: "20" },
  { label: "$20k-$50k", value: "20-50" },
  { label: "$50k-$75k", value: "50-75" },
  { label: "$75k-$100k", value: "75-100" },
  { label: "$100k+", value: "100" },
];

//about

export const strategies = [
  {
    heading: "UX Research and Data Analysis",
    description:
      "We combine cutting-edge tools with tried-and-true intuition to uncover the reasons behind user behavior. By gathering the necessary data, we create a UI/UX design that will leave your users thrilled.",
  },
  {
    heading: "User Flows and Customer Journey",
    description:
      "From the instant a user clicks on your website to the final checkout, we’ll craft a seamless experience that leaves them amazed. With our approach, you can be confident that your design will provide a smooth and memorable journey for your customers.",
  },
  {
    heading: "Surveys and User Interviews",
    description:
      "Ready to discover what your users truly want? We’ll dig deep to understand their thoughts and leave no stone unturned in our pursuit of user-centered design excellence, whether through in-person interviews, online surveys, or focus groups.",
  },
  {
    heading: "Wireframing",
    description:
      "Wireframing serves as the blueprint for your website or app, and we’re the architects! Whether you’re building from the ground up or updating an existing design, we’ll ensure that every element is strategically positioned, making it easy for your users to find what they need.",
  },
  {
    heading: "UX Audits",
    description:
      "Our UX audits act as a thorough check-up for your digital presence. We’ll thoroughly examine every detail to identify pain points and usability issues that may be affecting your user experience.",
  },
];

export const designs = [
  {
    heading: "UI/UX Design",
    description:
      "Our UI/UX designs seamlessly combine creativity and usability. We’ll collaborate with you throughout the process to bring your vision to life, ensuring your design stands out and leaves a lasting impression on your users. Let’s get set design !",
  },
  {
    heading: "Interaction Design",
    description:
      "We’ll create a seamless user experience that keeps visitors engaged and returning. With intuitive navigation and captivating animations, we’ll bring your digital vision to life, leading users to digital bliss!",
  },
  {
    heading: "Web/ Mobile App Design",
    description:
      "Our designs are not only visually appealing but also intuitive and user-friendly. Whether it’s a website, a mobile app, or both, we’ll create a digital experience that feels like a pot of gold at the end of the internet rainbow for your users.",
  },
  {
    heading: "Usability Testing",
    description:
      "Is your design user-friendly? Let’s discover! We’ll gather a diverse group of users to navigate your website or app, identifying pain points and usability issues, providing you with the data needed to enhance your digital presence.",
  },
  {
    heading: "Digital Prototyping",
    description:
      "We’ll develop a working model of your website or app, featuring interactive elements and real-life user scenarios. We’ll refine the design until it’s perfect, giving you a fully functional prototype ready to make an impact in the digital world.",
  },
];

export const hightlights = [
  {
    heading: "300+",
    description:
      "Designs and products delivered, proving our dedication to creativity.",
  },
  {
    heading: "$1 Mn",
    description:
      "Raised by clients, underscoring the success of our collaborations.",
  },
  {
    heading: "150+",
    description: "Earned 5-star reviews on Freelancer.com from happy clients.",
  },
  {
    heading: "Top 5%",
    description: "Certified UI/UX design",
  },
];
