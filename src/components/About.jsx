import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-700 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }} //ais ka matlab hay jasay nazar anay lagay tab chalay animation
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/3 lg:p-6"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl " src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }} //ais ka matlab hay jasay nazar anay lagay tab chalay animation
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-[60%]"
        >
          <div className="flex justify-center ">
            <p className="my-2 max-w-xl py-6 mx-4">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
