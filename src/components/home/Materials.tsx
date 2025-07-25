import { motion } from "framer-motion";

export default function Materials() {
  return (
    <section className="flexCenter w-full py-[80px] md:h-[calc(100vh-80px)] md:py-[80px]">
      <div className="flexBetween mx-auto w-full flex-col overflow-hidden md:flex-row">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.5, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mx-auto flex w-[90%] flex-col gap-4 pb-[80px] text-center sm:w-5/6 md:w-fit md:basis-3/5 md:px-[30px] md:pb-0 md:text-left"
        >
          <p className="font-medium">MATERIALS</p>
          <h2 className="my-2 text-2xl font-semibold md:text-4xl">
            Very Serious Materials For Making Furniture
          </h2>
          <p className="leading-7 md:w-3/4">
            Each piece is thoughtfully crafted to blend seamlessly into modern
            living spaces, offering both comfort and sophistication while
            maintaining a strong focus on sustainability and timeless design
            aesthetics.
          </p>
        </motion.div>
        <div className="flex w-full basis-3/4 flex-col-reverse items-center md:flex-row md:gap-[30px]">
          <div className="hidden gap-[30px] md:flex md:w-[35%] md:flex-col">
            <img
              loading="lazy"
              className="h-[250px] rounded-xl"
              src="https://firebasestorage.googleapis.com/v0/b/furniture-ecommerce-841f4.appspot.com/o/siteImages%2Fmaterials-two.webp?alt=media&token=6c926c64-4b5a-4bb9-aac1-13f431f72470"
              alt="material-image-two"
            />
            <img
              loading="lazy"
              className="h-[200px] rounded-xl"
              src="https://firebasestorage.googleapis.com/v0/b/furniture-ecommerce-841f4.appspot.com/o/siteImages%2Fmaterials-three.webp?alt=media&token=c22384dc-f50f-497a-a4b2-69b6438afb30"
              alt="material-image-three"
            />
          </div>
          <img
            loading="lazy"
            className="w-full rounded-none md:w-[65%] md:rounded-tl-lg md:rounded-bl-lg"
            src="https://firebasestorage.googleapis.com/v0/b/furniture-ecommerce-841f4.appspot.com/o/siteImages%2Fmaterials-one.webp?alt=media&token=be327d9e-b8c7-422e-a522-5f0708a60e83"
            alt="material-image-one"
          />
        </div>
      </div>
    </section>
  );
}
