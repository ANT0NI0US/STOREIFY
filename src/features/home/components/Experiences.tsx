import { motion } from "framer-motion";

export default function Experiences() {
  return (
    <section className="flexCenter w-full bg-light-color pb-0 pt-[80px] text-primary-color-light dark:bg-main-color dark:text-primary-color md:h-[calc(100vh-80px)] md:pb-[80px]">
      <div
        className={`flexBetween mx-auto w-full flex-col-reverse overflow-hidden md:flex-row`}
      >
        <img
          loading="lazy"
          className={`max-h-full w-full basis-3/5 rounded-none object-cover object-center md:rounded-br-lg md:rounded-tr-lg`}
          src="https://firebasestorage.googleapis.com/v0/b/furniture-ecommerce-841f4.appspot.com/o/siteImages%2Fexperience.webp?alt=media&token=8361f283-de20-49de-9dd4-e7aaa33e8db8"
          alt="experience-image"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.5, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className={`mx-auto w-[90%] space-y-4 pb-[80px] text-center sm:w-5/6 md:w-fit md:basis-3/5 md:px-[30px] md:pb-0 md:text-left`}
        >
          <p className="font-medium">EXPERIENCES</p>
          <h2 className="my-2 text-2xl font-semibold text-orange-color-light dark:text-orange-color md:text-4xl">
            We Provide You The Best Experience
          </h2>
          <p className="leading-[28px]">
            You don't have worry about the result because all of these interiors
            are made by people who are professionals in their fields with an
            elegant and luxurious style and with premium quality materials.
          </p>
        </motion.div>
      </div>
    </section>
  );
}