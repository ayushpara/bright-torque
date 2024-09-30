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
      "We use a mix of high-tech tools and good old-fashioned intuition to uncover the secrets behind why your users do what they do. We'll gather the data needed to create a UI/UX design that will leave your users gushing with delight.",
  },
  {
    heading: "User Flows and Customer Journey",
    description:
      "From the moment the user click on your website to the final checkout, we'll create a seamless experience that will have them saying wow. With our  approach, you can trust that your design will be a smooth and memorable ride for your customers.",
  },
  {
    heading: "Surveys and User Interviews",
    description:
      "Ready to get the lowdown on what your users really want? We'll get the inside scoop on what your users are thinking and leave no stone unturned in our quest for user-centered design perfection.  Whether it's through face-to-face interviews, online surveys, or focus groups.",
  },
  {
    heading: "Wireframing",
    description:
      "Wireframing is like a blueprint for your website or app! And we're the architects! Whether you're starting from scratch or revamping your existing design, we'll make sure that every element is in the right place, so your users can find what they're looking for with ease.",
  },
  {
    heading: "UX Audits",
    description:
      "Our UX audits are like a comprehensive check-up for your digital presence. We'll take a deep dive into every nook and cranny to uncover any pain points and usability issues that may be hurting your user experience.",
  },
];

export const designs = [
  {
    heading: "UI/UX Design",
    description:
      "Our UI/UX designs are a perfect blend of creativity and usability. We’ll work with you every step of the way to bring your vision to life. You can trust that your design will stand out from the crowd and leave a lasting impression on your users. Let's get designing!",
  },
  {
    heading: "Interaction Design",
    description:
      "We'll craft a seamless user experience that keeps your visitors engaged and coming back for more. From intuitive navigation to engaging animations, we'll bring your digital vision to life in a way that will have your users clicking and tapping their way to digital bliss!",
  },
  {
    heading: "Web/ Mobile App Design",
    description:
      "Our designs are not only aesthetically pleasing, but also intuitive and user-friendly. Whether it's a website, a mobile app, or both, we'll craft a digital experience that will make your users feel like they've stumbled upon a pot of gold at the end of the internet rainbow.",
  },
  {
    heading: "Usability Testing",
    description:
      "Is your design user-friendly? Let's find out! We'll gather a diverse group of users and ask them to navigate your website or app to uncover any pain points or usability issues, and give you the data you need to make your digital presence the best it can be.",
  },
  {
    heading: "Digital Prototyping",
    description:
      "We'll create a working model of your website or app, complete with interactive elements and real-life user scenarios. We'll tweak and perfect the design until it's just right, and then you'll have a fully functional prototype that's ready to take the digital world by storm.",
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
