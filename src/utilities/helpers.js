import { HOME, WORK, CONTACT, ABOUT } from "../contants/routes";
import esgateImage from "../static/images/projects/esgate.png";
import mgamerImage from "../static/images/projects/mgamer.png";
import studytorchImage from "../static/images/projects/studytorch.png";
import startupIcon from "../static/icons/startup.svg";
import establishedIcon from "../static/icons/established.svg";
import enterpriseIcon from "../static/icons/enterprise.svg";

import discover1Image from "../static/images/discover1.png";
import discover2Image from "../static/images/discover2.png";
import discover3Image from "../static/images/discover3.png";

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

export const projects = [
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
      "We begin with understanding your product,business goals and vision. Once we know what needs to be achieved, we dive deep into product research and discovery that helps us find gaps and unforeseen challenges. This research is then converted into actionable insights and structured goals.",
    images: [discover1Image, discover2Image, discover3Image],
  },
  {
    heading: "Transform",
    description:
      "We then start building an information architecture that helps you seamlessly navigatethrough the end-user journey. Here, we place emphasis on innovating through features that would create an ideal user experience. Finally, we wireframe, prototype and test the product with live users",
    images: [discover1Image, discover2Image, discover3Image],
  },
  {
    heading: "Design for impact",
    description:
      "User interface design is not just creating interfaces with paint on top. We’re aiming to bring the experiences to life. With careful consideration of every UI design element, the goal is to ensure that we deliver a consistent visual experience",
    images: [discover1Image, discover2Image, discover3Image],
  },
  {
    heading: "Scale for growth",
    description:
      "We help companies create custom front-end development projects and work with no-code platforms like Webflow.  If the development is not being taken up abrighttorque, our project manager is usually supporting your dev team for all the questions and concerns they may face during the development.",
    images: [discover1Image, discover2Image, discover3Image],
  },
];

export const scrollContainer = (scrollOffset, containerRef) => {
  const container = containerRef.current;
  const startPosition = container.scrollLeft;
  const duration = 300; // milliseconds

  const startTime = performance.now();

  const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  const animateScroll = (currentTime) => {
    const elapsedTime = currentTime - startTime;
    const scrollProgress = Math.min(1, elapsedTime / duration);
    const easedProgress = easeInOutQuad(scrollProgress);
    container.scrollLeft = startPosition + scrollOffset * easedProgress;

    if (elapsedTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

export const projectTypes = [
  {label :"Logo/Branding", value : "Logo/Branding"},
  {label :"Illustration",value : "Illustration"},
  {label :"Web Design", value : "Web Design"},
  {label :"Design Product", value : "Design Product"},
  {label :"App Design", value : "App Design"},
  {label :"Webflow Development", value : "Webflow Development"},
  {label :"Other", value : "Other"},
];

export const budgets = [
  {label : "Less than $20k",value : "20"},
  {label :"$20k-$50k",value : "20-50"},
  {label :"$50k-$75k",value : "50-75"},
 {label : "$75k-$100k",value : "75-100"},
  {label :"$100k+",value : "100000"},
];
