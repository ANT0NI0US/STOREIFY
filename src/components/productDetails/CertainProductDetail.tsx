import { productCardProps } from "@/utils/types";
import DetailsAction from "./DetailsAction";
import StarRatings from "@/ui/StarRatings";
import Container from "@/ui/Container";

interface CertainProductDetailProps {
  product: productCardProps;
}

function adjustRating(avgRating: number | undefined) {
  if (typeof avgRating !== "number" || isNaN(avgRating)) {
    return 0;
  }
  return Math.round(avgRating);
}

export default function CertainProductDetail({
  product,
}: CertainProductDetailProps) {
  const { id, imgUrl, productName, price, avgRating, category, shortDesc } =
    product;

  const adjustedRating = adjustRating(avgRating);

  return (
    <section
      id="my-product"
      className="bg-secondary-light-color dark:bg-secondary-dark-color"
    >
      <Container Styles="md:py-[80px] py-[40px]">
        <div className="flexBetween flex-col gap-5 md:flex-row md:gap-12">
          <div className="flexCenter h-full md:basis-1/2">
            {/* Product Image */}
            <img
              className="xs:w-[600px] h-full max-h-full w-full max-w-full object-contain"
              src={imgUrl}
              alt={productName}
            />
          </div>
          <div className="flex flex-col gap-4 text-center md:basis-1/2 md:text-left">
            {/* Product Head Details */}
            <h2 className="text-2xl font-semibold md:text-3xl">
              {productName}
            </h2>
            <p className="text-sm leading-6">{shortDesc}</p>

            {/* Ratings for the Product */}
            <div className="flexCenter flex-col gap-1 sm:flex-row sm:gap-9 md:justify-start">
              <StarRatings defaultRating={adjustedRating} readOnly={true} />
              <p className="leading-[28px]">
                (
                <span className="font-semibold text-lime-600">
                  {" "}
                  {adjustedRating}{" "}
                </span>
                Ratings )
              </p>
            </div>

            {/* Product Details */}
            <div className="flexBetween flex-col gap-4 sm:flex-row sm:justify-evenly md:justify-between">
              <p className="font-medium">
                Price:
                <span className="font-semibold capitalize"> ${price}</span>
              </p>
              <p className="font-medium">
                Category:
                <span className="font-semibold capitalize"> {category}</span>
              </p>
            </div>

            {/* Product Actions */}
            <DetailsAction
              id={id}
              productName={productName}
              price={price}
              imgUrl={imgUrl}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
