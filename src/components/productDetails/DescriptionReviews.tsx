import { useState } from "react";
import ReviewsTab from "./ReviewsTab";
import { Container } from "@/ui";
import { Review } from "@/utils/types";

interface CertainProductDetailProps {
  description: string;
  reviews: Review[] | undefined;
}

export default function DescriptionReviews({
  reviews,
  description,
}: CertainProductDetailProps) {
  const [tab, setTab] = useState<"Description" | "Reviews">("Description");

  const tabOptions = [{ label: "Description" }, { label: "Reviews" }];

  return (
    <section>
      <Container Styles="py-[40px] md:py-[80px]">
        <div className="flex text-center text-sm font-medium sm:text-base">
          {tabOptions.map(({ label }) => (
            <div
              key={label}
              className={`border-accent-light-color dark:border-accent-dark-color basis-1/2 cursor-pointer border-b-2 py-3 transition-all duration-200 ${
                tab === label
                  ? "bg-secondary-light-color text-accent-light-color dark:bg-secondary-dark-color dark:text-text-dark-color font-semibold"
                  : "text-text-light-color dark:text-text-dark-color"
              }`}
              onClick={() => setTab(label as "Description" | "Reviews")}
            >
              {label}
            </div>
          ))}
        </div>

        {tab === "Description" ? (
          <div className="mt-5 text-left leading-8">{description}</div>
        ) : (
          <ReviewsTab reviews={reviews} />
        )}
      </Container>
    </section>
  );
}
