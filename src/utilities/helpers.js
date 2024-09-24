import { HOME, WORK, CONTACT, ABOUT } from "../contants/routes";
import esgateImage from "../static/images/projects/esgate.png";
import mgamerImage from "../static/images/projects/mgamer.png";
import studytorchImage from "../static/images/projects/studytorch.png";
import startupIcon from "../static/icons/startup.svg";
import establishedIcon from "../static/icons/established.svg";
import enterpriseIcon from "../static/icons/enterprise.svg";

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
    tags : ["Brand","Web","Illustration"]
  },
  {
    heading: "mGamer",
    description: "Making your crypto experience safe and fun.",
    image: mgamerImage,
    tags : ["Brand","Web","Illustration"]
  },
  {
    heading: "StudyTorch",
    description: "Making your crypto experience safe and fun.",
    image: studytorchImage,
    tags : ["Brand","Web","Illustration"]
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
