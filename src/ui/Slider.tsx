import { ReactNode } from "react";
import Carousel from "react-multi-carousel";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

interface SliderProps {
  children: ReactNode;
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1060 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1060, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

export default function Slider({ children }: SliderProps) {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={3000}
      customLeftArrow={
        <MdArrowBackIosNew
          size={40}
          className="hover:bg-accent-light-color hover:dark:bg-accent-dark-color absolute top-1/2 left-4 -translate-y-[50%] cursor-pointer rounded-full bg-transparent p-2 transition-all"
        />
      }
      customRightArrow={
        <MdArrowForwardIos
          size={40}
          className="hover:bg-accent-light-color hover:dark:bg-accent-dark-color absolute top-1/2 right-4 -translate-y-[50%] cursor-pointer rounded-full bg-transparent p-2 transition-all"
        />
      }
      containerClass="container-with-dots"
      draggable
      infinite
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      shouldResetAutoplay
      slidesToSlide={1}
      swipeable
      responsive={responsive}
      className="py-3"
    >
      {children}
    </Carousel>
  );
}
