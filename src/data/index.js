import { HOME, WORK, CONTACT, ABOUT, EDITORIAL } from "../contants/routes";

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

import esgateImage from "../static/images/projects/esgate.png";
import PathviImage from "../static/images/projects/Patahvi.png";
import JDPOLYImage from "../static/images/projects/JDoly.png";
import FalconImage from "../static/images/projects/Falcon.png";


import mgamerImage from "../static/images/projects/mgamer.png";
import studytorchImage from "../static/images/projects/studytorch.png";
import ParkingEyeImage from "../static/images/projects/ParkingEye.png";
//import TuromImage from "../static/images/projects/turom.png";
import OctowasteImage from "../static/images/projects/OctowasteImage.png";
import adGenImage from "../static/images/projects/adGen.png";
import ayushImage from "../static/images/projects/ayush.png";
import brandBookImage from "../static/images/projects/brandBook.png";
import mealqImage from "../static/images/projects/mealq.png";
import mPaisaImage from "../static/images/projects/mPaisa.png";
import { Plus_Jakarta_Sans } from "next/font/google";

const jarkata = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});
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
    name: "Editorial",
    redirect: EDITORIAL,
    key: 4,
  },
  {
    name: "Contact",
    redirect: CONTACT,
    key: 5,
  },
];

export const homeProjects = [
  {
    heading: "Patahvi Farms",
    description: "We designed Pathavi as a transparency-first digital experience, where trust is built through proof, not promises. Every interaction reveals the true journey of the product — from seed to bottle.",
    image: PathviImage,
    tags: ["Brand", "Web", "SaaS"],
  },
  {
    heading: "Jaldhara Polytubes",
    description: "We designed this project to showcase our expertise in delivering Industrial Brand design & delivering a stunning web portfolio site. ",
    image: JDPOLYImage,
    tags: ["Brand", "Web"],
  },
  {
    heading: "Falcon Fitness",
    description: "We designed and delivered a personalized fitness experience that helps gym members train smarter, stay consistent, and track progress effortlessly.",
    image: FalconImage,
    tags: ["Brand", "App"],
  },
];

export const projects = [{
  heading: "Patahvi Farms",
  description: "We designed Pathavi as a transparency-first digital experience, where trust is built through proof, not promises. Every interaction reveals the true journey of the product — from seed to bottle.",
  image: PathviImage,
  tags: ["Brand", "Web", "SaaS"],
},

{
  heading: "Jaldhara Polytubes",
  description: "We designed this project to showcase our expertise in delivering Industrial Brand design & delivering a stunning web portfolio site. ",
  image: JDPOLYImage,
  tags: ["Brand", "Web"],
},
{
  heading: "Falcon Fitness",
  description: "We designed and delivered a personalized fitness experience that helps gym members train smarter, stay consistent, and track progress effortlessly.",
  image: FalconImage,
  tags: ["Brand", "App"],
},
{
  heading: "Parking Eye",
  description: "We designed the Parking Eye project in Australia — a smart app that assists people in booking parking slots seamlessly by scanning QR codes on parking meters.",
  image: ParkingEyeImage,
  tags: ["Brand", "App"],
},
{
  heading: "ESGATE",
  description: "ESGATE provides investors with detailed ESG data and insights, highlighting the significance of accurate, niche-specific information for sustainable finance.",
  image: esgateImage,
  tags: ["Brand", "Web", "SaaS"],
},
{
  heading: "Octowaste",
  description: "We designed a marketplace for Octowaste, an Australian clean-tech company focused on the responsible exit of solar assets — enabling sustainable, efficient, and transparent solutions for the solar industry.",
  image: OctowasteImage,
  tags: ["Marketplace", "Web"],
},
{
  heading: "Launchbees",
  description: "Efficiently manage feature releases, upsells, and configurations without redeploying code.",
  image: brandBookImage,
  tags: ["Brand", "Web", "SaaS"],
},
{
  heading: "AdGen",
  description: "Convert inactive users into revenue leads with simple tasks and rewards.",
  image: adGenImage,
  tags: ["Brand", "Web"],
},
{
  heading: "StudyTorch",
  description: "An App for creating, organizing study notes, collections, quizzes, and sharing with friends.",
  image: studytorchImage,
  tags: ["Brand", "Web", "SaaS"],
},
{
  heading: "mGamer",
  description: "An App lets users earn money and game credits by completing tasks like watching ads and surveys.",
  image: mgamerImage,
  tags: ["Brand", "App", "Illustration"],
},
{
  heading: "mPaisa",
  description: "Earn money and gift cards by playing games, completing tasks, and answering surveys.",
  image: mPaisaImage,
  tags: ["Brand", "Web", "Illustration"],
},
{
  heading: "Revu",
  description: "Revu is a revolutionary learning tool that intelligently leverages the concepts of spaced repetition",
  image: ayushImage,
  tags: ["Brand", "App"],
},
{
  heading: "MealQ",
  description: "MealsQ is a quick food ordering App specifically designed for the Australian users.",
  image: mealqImage,
  tags: ["Brand", "Web"],
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
  { label: "Less then 1000$", value: "1000" },
  { label: "$1k - $2.5k", value: "1-2.5" },
  { label: "$2.5 - $5k", value: "2.5-5" },
  { label: "$5k - $10k", value: "5-10" },
  { label: "$10k - $15k", value: "10-15" },
];
export const accordionItems = [
  {
    key: '1',
    label: 'Generative UI',
    children: <div className={`${jarkata.className}`}>
      <p>
        We build adaptive interfaces that evolve based on user intent and context. Moving beyond static screens to fluid, intelligent experiences.
      </p>
      <br />
      <p><span>Dynamic Components</span> <span>Generative Prompts</span> <spna>Real time Wireframes</spna></p>
    </div>,
  },
  {
    key: '2',
    label: 'System Architecture',
    children: <div className={`${jarkata.className}`}>
      <p>
        Creating robust design systems that scale with AI. We define the tokens, rules, and constraints that allow agents to build consistent UI
      </p>
      <br />
      <p><span>Tokens</span> <span>Guidlines</span> <spna>Scalability</spna></p>
    </div>,
  },
  {
    key: '3',
    label: 'Neural UX',
    children: <div className={`${jarkata.className}`}>
      <p>
        Optimizing the interaction layer between human cognition and artificial intelligence. Making complex models accessible and intuitive.
      </p>
      <br />
      <p><span>Tokens</span> <span>Guidlines</span> <spna>Scalability</spna></p>
    </div>,
  },
  {
    key: '4',
    label: 'Product Strategy',
    children: <div className={`${jarkata.className}`}>
      <p>
        Defining the role of AI in your product lifecycle. From feature discovery to deployment, we map the path to intelligent utility.
      </p>
      <br />
      <p><span>Roadmap Discovery</span> <span>UX Direction</span> <spna>PMF(Product Market Fit)</spna></p>
    </div>,
  },
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
