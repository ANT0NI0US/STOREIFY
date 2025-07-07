import { useState } from "react";
import AllExistReviews from "./AllExistReviews";
import TabForm from "./TabForm";
import Button from "@/ui/Button";
import { Review } from "@/utils/types";

type Props = {
  reviews: Review[] | undefined;
};

export default function ReviewsTab({ reviews }: Props) {
  const [newReviewFormOpen, setNewReviewFormOpen] = useState<boolean>(false);
  return (
    <>
      <div className="my-7 flex items-center gap-1 text-left text-lg">
        <span className="font-semibold">All Reviews</span>
        <span>( {reviews?.length} )</span>
      </div>
      <AllExistReviews reviews={reviews} />
      <Button
        AriaLabel="ReviewForm"
        Font="xs:w-[200px] w-full mt-3.5 md:mt-5 ms-auto"
        onClick={() => setNewReviewFormOpen((prev) => !prev)}
      >
        {newReviewFormOpen ? "Close the Review" : "Write a Review"}
      </Button>
      {newReviewFormOpen && <TabForm />}
    </>
  );
}
