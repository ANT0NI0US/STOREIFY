import { motion } from "framer-motion";
import Button from "@/ui/Button";
import Container from "@/ui/Container";

const Year = new Date().getFullYear();

export default function Banner() {
  return (
    <section className="flexCenter min-h-screen w-full pt-[100px] pb-[10px] md:h-screen md:pb-0">
      <Container Styles="flexBetween flex-col gap-2 md:flex-row md:gap-12">
        <>
          {/* BANNER TEXT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex flex-col gap-2 text-center md:mt-0 md:basis-[55%] md:gap-3 md:text-left"
          >
            <p className="font-medium">Trending Product in {Year}</p>
            <h2 className="text-2xl font-semibold md:text-4xl">
              Make your Interior More Minimalistic & Modern
            </h2>
            <p className="leading-7">
              Explore a wide range of products with seamless shopping and secure
              checkout. Elevate your shopping experience with ease and
              convenience.
            </p>
            <motion.div
              whileTap={{ scale: 1.1 }}
              className="mx-auto w-[150px] md:mx-0"
            >
              <Button ArialLabel="Go-To-Shop" To="/shop">
                SHOP NOW
              </Button>
            </motion.div>
          </motion.div>

          {/* BANNER IMAGE */}
          <div className="md:basis-[45%]">
            <img
              className="object-contain object-center"
              src="https://i.ibb.co/sgv9Q0N/hero-img.webp"
              alt="hero-image"
            />
          </div>
        </>
      </Container>
    </section>
  );
}
