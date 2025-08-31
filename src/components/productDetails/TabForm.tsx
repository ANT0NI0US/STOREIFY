import { useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button, Input, StarRatings, TextArea } from "@/ui";
import { isOnlySpaces } from "@/utils/helpers";
import { addReviewToProduct } from "@/store/service/productService";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";

interface NewReviewProps {
  name: string;
  text: string;
  rating: number | null;
}

const initialState: NewReviewProps = {
  name: "",
  text: "",
  rating: 5,
};

export default function TabForm() {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const [rate, setRate] = useState<number | null>(5);
  const { isLoading } = useAppSelector((state) => state.product);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialState,
    mode: "onChange",
  });

  const handleAddReview = (data: NewReviewProps) => {
    if (id) {
      const newReview = {
        ...data,
        rating: rate,
      };
      dispatch(addReviewToProduct({ productId: id, review: newReview }))
        .unwrap()
        .then(() => {
          toast.success("Review has been Submitted successfully");
          reset();
        })
        .catch(() => {
          toast.error("Something went wrong");
        });
    }
  };

  return (
    <div className="bg-secondary-light-color dark:bg-secondary-dark-color mx-auto mt-3.5 w-full rounded-md p-3.5 md:mt-5 md:w-5/6 md:p-5">
      <h4 className="mb-3.5 text-center text-3xl font-semibold md:mb-5 md:text-left">
        Leave Your Experience
      </h4>
      <form
        onSubmit={handleSubmit(handleAddReview)}
        className="flex flex-col gap-5 py-4"
      >
        <Input
          label="Name"
          placeholder="Enter Name"
          disabled={isLoading}
          register={register("name", {
            required: "This Field is required",
            validate: {
              noOnlySpaces: (value) =>
                !isOnlySpaces(value) || "It Mustn't contains only spaces",
            },
          })}
          error={errors?.name?.message}
        />

        {/* STAR RATINGS */}
        <div className="flex flex-col items-start gap-2">
          <StarRatings onSetRating={setRate} defaultRating={5} />
        </div>

        <TextArea
          label="Review Message"
          placeholder="Message"
          disabled={isLoading}
          register={register("text", {
            required: "This Field is required",
            validate: {
              noOnlySpaces: (value) =>
                !isOnlySpaces(value) || "It Mustn't contains only spaces",
            },
          })}
          error={errors?.text?.message}
        />

        <Button
          aria-label="Submit Review"
          title="Submit Review"
          type="submit"
          loading={isLoading}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
