import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import StarRatings from "@/ui/StarRatings";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import TextArea from "@/ui/TextArea";
import { isOnlySpaces } from "@/utils/helpers";
import { productState } from "@/utils/types";
import { AppDispatch } from "@/store";
import { addReviewToProduct } from "@/store/service/productService";

interface newReviewProps {
  name: string;
  text: string;
  rating: number | null;
}

const initialState: newReviewProps = {
  name: "",
  text: "",
  rating: 5,
};

export default function TabForm() {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<{ id: string }>();

  const [rate, setRate] = useState<number | null>(5);
  const { isLoading }: { isLoading: boolean } = useSelector(
    (state: productState) => state.product,
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialState,
    mode: "onChange",
  });

  const handleAddReview = (data: newReviewProps) => {
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
    <div className="mx-auto w-[90%] md:w-5/6">
      <h4 className="text-center text-xl font-semibold md:text-left">
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
          <StarRatings size={40} onSetRating={setRate} defaultRating={5} />
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

        <motion.div whileTap={{ scale: 1.1 }}>
          <Button ArialLabel="submitReview" type="submit" loading={isLoading}>
            Submit
          </Button>
        </motion.div>
      </form>
    </div>
  );
}
