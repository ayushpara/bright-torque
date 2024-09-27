"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import starIcon from "../../static/icons/contactStar.svg";
import { Plus_Jakarta_Sans } from "next/font/google";
import ContactForm from "../ContactForm";

const jarkata = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});

const ContactBanner = () => {
  const rotateVariants = {
    animate: {
      rotateY: 360,
      x: "0%",
      y: "0%",
      translateX: "-50%",
      translateY: "-50%",
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      },
    },
    initial: {
      x: "50%",
      y: "50%",
    },
  };

  return (
    <div className="w-full bg-primary">
      <div className="p-5 sm:px-[70px] sm:py-16">
        <div className="w-full sm:flex-row flex-col flex ">
          <div className="flex flex-col order-last sm:order-none sm:w-3/4">
           
            <p className="text-green-3 sm:text-[72px] text-[36px] leading-[40px] sm:leading-[84px] text-base sm:pt-5 pt-3">
            Let's  have a <br/>
            Conversation  
            </p>
          </div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={rotateVariants}
            className=" justify-end items-center flex"
          >
            <div className="relative sm:w-[123px] sm:h-[123px] w-[45px] h-[45px]">
              <Image
                style={{ transformOrigin: "center center" }}
                src={starIcon}
                alt="star"
                className="object-cover absolute w-full h-full"
              />
            </div>
          </motion.div>
        </div>

        <div className="space-y-5">
        <ContactForm />
      </div>
      </div>

      
     
    </div>
  );
};

export default ContactBanner;
