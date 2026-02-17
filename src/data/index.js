import { HOME, WORK, CONTACT, ABOUT, EDITORIAL } from "../contants/routes";

import startupIcon from "../static/icons/startup.svg";
import establishedIcon from "../static/icons/established.svg";
import enterpriseIcon from "../static/icons/enterprise.svg";


import inLove from "../static/images/in-love.svg";
import thumbUp from "../static/images/thumb-up.svg";
import clientImage from "../static/images/clientImage.svg"

import esgateImage from "../static/images/projects/esgate.png";
import PathviImage from "../static/images/projects/Patahvi.png";
import JDPOLYImage from "../static/images/projects/JDoly.png";
import FalconImage from "../static/images/projects/Falcon.png";

// businessDesign Cards
import chatgpt from "../static/icons/chat-gpt.svg";
import figma from "../static/icons/figma-logo.svg";
import framer from "../static/icons/framer.svg";
import lovable from "../static/icons/lovable-logo.svg";
import notion from "../static/icons/notion-logo.svg";
import perplexity from "../static/icons/perplexity.svg";
import replit from "../static/icons/replit.svg";
import uizard from "../static/icons/uizard.svg";
import v0 from "../static/icons/v0-logo.svg";
import discover from "../static/images/discover-ideate.svg";
import deliver from "../static/images/deliver.svg";
import design from "../static/images/design.svg";
import prototype from "../static/images/prototype-smarter-faster.svg"

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
import calendar from "../static/icons/calendar.svg";
import leads from "../static/icons/leads.svg";
import rocket from "../static/icons/rocket.svg";
// clients images
import instapop from "../static/stats/instapop.svg";
import toast from "../static/stats/toast.svg";
import wordofMouth from "../static/stats/wordofmouth.svg";
import falconFitness from "../static/stats/falconfitness.svg";
import jaldhara from "../static/stats/jaldhara.svg"
import pathviFarms from "../static/stats/PF.svg";
import wishit from "../static/stats/wishIt.svg";
import visao from "../static/stats/visao.svg";

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
    name: "Contact",
    redirect: CONTACT,
    key: 4,
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
    heading: "Discover & Ideate with AI",
    description:
      "We start by gaining insights into your users and objectives, improving the discovery phase with AI. Our AI-driven tools provide user insights, behavioral patterns, and identify competitive gaps. With AI-assisted diagrams, we outline user journeys and information architecture, guaranteeing a clear path from the beginning.",
    whatYouget:['User Personas', "UX Research","UX Blueprints"],
    imagesToolsWeUse:[{image:chatgpt, title:"ChatGpt"},{image:perplexity, title:"Perplexity"},{image:figma, title:"Figma"}, {image:notion, title:"Notion"}, {text:"FigJam"}, {text:"Product Research"}],
    cardImage:discover,
  },
  {
    heading: "Plan Smarter, Faster",
    description:
      "We design an information architecture that facilitates smooth navigation for users, emphasizing innovative features for an optimal experience. By automatically generating user flows and screen designs, we create clickable, no-code prototypes that allow us to validate authentic user experiences and gather valuable feedback quickly. ",
      whatYouget:['Interactive Mockups', "Validated Flows","Early User Feedback"],
    imagesToolsWeUse:[{image:lovable, title:"Loveable"},{image:replit,title:"Replit"},{image:v0, title:"V0"},{image:notion, title:"Notion"}, {text:"FigJam"}, {text:"Product Research"}],
    cardImage:prototype,
  },
 {
    heading: "AI-Supported, Human-Led",
    description:
      "We create an information architecture to guide seamless end-user navigation, focusing on innovative features for an ideal experience. Finally, we wireframe, prototype, and test the product with real users.",
      whatYouget:['Polished UI Screens', "Reusable Design Components","Scalable Design System"],
    imagesToolsWeUse:[{image:framer, title:"Framer"},{image:uizard, title:"UiZard"}, {text:"Figma AI"}, {text:"Midjourney"}],
    cardImage:design,
  },
 {
    heading: "Deliver",
    description:
      "We create an information architecture to guide seamless end-user navigation, focusing on innovative features for an ideal experience. Finally, we wireframe, prototype, and test the product with real users.",
      whatYouget:['Source Code', "Style Guide","Handoff Files"],
    imagesToolsWeUse:[{image:notion, title:"Notion"},{image:figma, title:"Figma"}, {text:"Figma Dev Mode"}],
    cardImage:deliver,
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
const tagClass ="bg-primary py-1 px-2 p-1 text-xs rounded-md"
export const accordionItems = [
  {
    key: '1',
    label: 'Generative UI',
    children: <div className={`${jarkata.className} text-sm leading-6 !pl-0`}>
      <p>
        We build adaptive interfaces that evolve based on user intent and context. Moving beyond static screens to fluid, intelligent experiences.
      </p>
      <br />
      <div className="flex flex-row gap-4"><div className={tagClass}>Dynamic Components</div> <div className={tagClass}>Generative Prompts</div> <div className={tagClass}>Real time Wireframes</div></div>
    </div>,
  },
  {
    key: '2',
    label: 'System Architecture',
    children: <div className={`${jarkata.className} text-sm leading-6 !pl-0`}>
      <p>
        Creating robust design systems that scale with AI. We define the tokens, rules, and constraints that allow agents to build consistent UI
      </p>
      <br />
      <div className="flex flex-row gap-4"><div className={tagClass}>Tokens</div> <div className={tagClass}>Guidlines</div> <div className={tagClass}>Scalability</div></div>
    </div>,
  },
  {
    key: '3',
    label: 'Neural UX',
    children: <div className={`${jarkata.className} text-sm leading-6 !pl-0`}>
      <p>
        Optimizing the interaction layer between human cognition and artificial intelligence. Making complex models accessible and intuitive.
      </p>
      <br />
      <div className="flex flex-row gap-4"><div className={tagClass}>Tokens</div> <div className={tagClass}>Guidlines</div> <div className={tagClass}>Scalability</div></div>
    </div>,
  },
  {
    key: '4',
    label: 'Product Strategy',
    children: <div className={`${jarkata.className} text-sm leading-6 !pl-0`}>
      <p>
        Defining the role of AI in your product lifecycle. From feature discovery to deployment, we map the path to intelligent utility.
      </p>
      <br />
      <div className="flex flex-row gap-4"><div className={tagClass}>Roadmap Discovery</div> <div className={tagClass}>UX Direction</div> <div className={tagClass}>PMF(Product Market Fit)</div></div>
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

export const testimonials = [
  {
    message: "Your designers bring so many mind-project. I’m very impressed!",
    client: {
      name: "Jatin from Toast",
      feedbackImage:inLove,
      clientImage: clientImage,
      clientLogo:toast
    }
  },
 {
    message: "Your designers bring so many mind-project. I’m very impressed!",
    client: {
      name: "Jatin from instapop",
      feedbackImage:thumbUp,
      clientImage: clientImage,
     clientLogo:instapop
    }
  },
   {
    message: "Your designers bring so many mind-project. I’m very impressed!",
    client: {
      name: "Jatin from wordofMouth",
      feedbackImage:inLove,
      clientImage: clientImage,
      clientLogo:wordofMouth
    }
  },
     {
    message: "Your designers bring so many mind-project. I’m very impressed!",
    client: {
      name: "Jatin from falcon Fitness",
      feedbackImage:thumbUp,
      clientImage: clientImage,
      clientLogo:falconFitness
    }
  },
      {
    message: "Your designers bring so many mind-project. I’m very impressed!",
    client: {
      name: "Jatin from jaldhara polytubes",
      feedbackImage:inLove,
      clientImage: jaldhara,
      clientLogo:falconFitness
    }
  },
];

export const stats = [
    {
        title: "100+",
        subTitle: "Projects Designed",
        image: rocket
    },
    {
        title: "25%",
        subTitle: "Average increase in leads",
        image: leads
    },
    {
        title: "5 weeks",
        subTitle: "Average Design time",
        image: calendar
    }
];

export const clients = [
    {
        alt: "instapop",
        image: instapop
    },
    {
        alt: "toast",
        image: toast,
    },
    {
        alt: "word of mouth",
        image: wordofMouth,
    },
    {
        alt: "jaldhara polytubes",
        image: jaldhara
    },
    {
        alt: "falcon fitness",
        image: falconFitness
    },
    {
      alt:"Pathavi Farms",
      image:pathviFarms
    },
    {alt:"WishIt", 
      image:wishit,
    },
    {alt:"Visao",image:visao}
]

export const faqs =[
  {  key: '1',
    label: "What's unique about Nebula?",
    children: <div className={`${jarkata.className} text-sm leading-6 !pl-0 text-white text-sm`}>
      <p>
        We build adaptive interfaces that evolve based on user intent and context. Moving beyond static screens to fluid, intelligent experiences.
      </p>
      <br />
      <p><span>Dynamic Components</span> <span>Generative Prompts</span> <spna>Real time Wireframes</spna></p>
    </div>,
    },
     {  key: '2',
    label: "How many builds can I request each month?",
    children: <div className={`${jarkata.className} text-sm leading-6 !pl-0 text-white text-sm`}>
      <p>
        We build adaptive interfaces that evolve based on user intent and context. Moving beyond static screens to fluid, intelligent experiences.
      </p>
      <br />
      <p><span>Dynamic Components</span> <span>Generative Prompts</span> <spna>Real time Wireframes</spna></p>
    </div>,
    },
      {  key: '3',
    label:'Can I cancel my subscription at any time?',
    children: <div className={`${jarkata.className} text-sm leading-6 !pl-0 text-white text-sm`}>
      <p>
        We build adaptive interfaces that evolve based on user intent and context. Moving beyond static screens to fluid, intelligent experiences.
      </p>
      <br />
      <p><span>Dynamic Components</span> <span>Generative Prompts</span> <spna>Real time Wireframes</spna></p>
    </div>,
    },
          {  key: '4',
    label: 'How secure are your solutions?',
    children: <div className={`${jarkata.className} text-sm leading-6 !pl-0 text-white text-sm`}>
      <p>
        We build adaptive interfaces that evolve based on user intent and context. Moving beyond static screens to fluid, intelligent experiences.
      </p>
      <br />
      <p><span>Dynamic Components</span> <span>Generative Prompts</span> <spna>Real time Wireframes</spna></p>
    </div>,
    },
          {  key: '5',
    label: 'Can your solutions scale with my business growth?',
    children: <div className={`${jarkata.className} text-sm leading-6 !pl-0 text-white text-sm`}>
      <p>
        We build adaptive interfaces that evolve based on user intent and context. Moving beyond static screens to fluid, intelligent experiences.
      </p>
      <br />
      <p><span>Dynamic Components</span> <span>Generative Prompts</span> <spna>Real time Wireframes</spna></p>
    </div>,
    },
]