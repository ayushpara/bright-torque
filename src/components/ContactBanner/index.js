"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import starIcon from "../../static/icons/contactStar.svg";
import ContactForm from "../ContactForm";
import { rotateVariants } from "@/utilities/helpers";

const ContactBanner = () => {
  return (
    <div className="w-full bg-primary">
      <div className="p-5 sm:px-[70px] sm:py-16">
        <div className="w-full sm:flex-row flex-col flex ">
          <div className="flex flex-col order-last sm:order-none sm:w-3/4">
            <p className="text-green-3 sm:text-[72px] text-[36px] leading-[40px] sm:leading-[84px] text-base sm:pt-5 pt-3">
              Let's have a <br />
              Conversation
            </p>
          </div>
          <div className="flex flex-row justify-end items-center flex-1">
            <motion.div
              initial="initial"
              animate="animate"
              variants={rotateVariants}
              className="relative sm:h-[123px] sm:w-[123px] w-[45px] h-[45px]"
              style={{ transformOrigin: "center center" }}
            >
              <Image
                src={starIcon}
                alt="star"
                layout="fill"
                className="object-cover absolute w-full h-full"
                style={{ borderRadius: "50%" }}
              />
            </motion.div>
          </div>
        </div>

        <div className="space-y-5">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
