import { useState } from "react";
import AllExistReviews from "./AllExistReviews";
import TabForm from "./TabForm";
import { Button } from "@/ui";
import { Review } from "@/utils/types";

type ReviewsTabProps = {
  reviews: Review[] | undefined;
};

export default function ReviewsTab({ reviews }: ReviewsTabProps) {
  const [newReviewFormOpen, setNewReviewFormOpen] = useState<boolean>(false);
  return (
    <>
      <div className="my-7 flex items-center gap-1 text-left text-lg">
        <span className="font-semibold">All Reviews</span>
        <span>( {reviews?.length} )</span>
      </div>
      <AllExistReviews reviews={reviews} />
      <Button
        aria-label="ReviewForm"
        title="ReviewForm"
        styles="xs:w-[200px] w-full mt-3.5 md:mt-5 ms-auto"
        onClick={() => setNewReviewFormOpen((prev) => !prev)}
      >
        {newReviewFormOpen ? "Close the Review" : "Write a Review"}
      </Button>
      {newReviewFormOpen && <TabForm />}
    </>
  );
}
