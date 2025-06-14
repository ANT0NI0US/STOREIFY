import { FaCheckCircle } from "react-icons/fa";
import GridContainer from "@/ui/GridContainer";
import StarRatings from "@/ui/StarRatings";
import { Review } from "@/utils/types";

type Props = {
  reviews: Review[] | undefined;
};

function adjustRating(rating: number | undefined | null) {
  if (typeof rating !== "number" || isNaN(rating)) {
    return 0;
  }
  return Math.round(rating);
}

export default function AllExistReviews({ reviews }: Props) {
  if (reviews?.length === 0) {
    return (
      <div className="flexCenter pt-[80px] text-center text-xl font-semibold">
        No reviews found.
      </div>
    );
  }
  return (
    <GridContainer>
      {reviews?.map((review, index) => (
        <div
          key={index}
          className="border-secondary-color hover:border-primary-color! hover:shadow-primary-color! flex flex-col gap-2 rounded-md border-[0.5px] p-3 shadow-md drop-shadow-2xl transition-all duration-500 hover:shadow-2xl! sm:gap-3 sm:p-4"
        >
          <StarRatings
            defaultRating={adjustRating(review.rating)}
            size={25}
            readOnly={true}
          />
          <div className="flex items-center gap-1">
            <p className="text-base font-extrabold capitalize sm:text-xl">
              {review?.name || "Antonious Nasr"}
            </p>
            <FaCheckCircle className="text-orange-color text-base sm:text-lg" />
          </div>
          <p className="text-sm">"{review.text}"</p>
        </div>
      ))}
    </GridContainer>
  );
}
