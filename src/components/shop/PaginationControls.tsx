import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Button from "@/ui/Button";
import { PAGE_SIZE } from "@/utils/constants";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  count: number;
  onPageChange: (page: number) => void;
}

export default function PaginationControls({
  currentPage,
  totalPages,
  count,
  onPageChange,
}: PaginationControlsProps) {
  return (
    <div className="bg-accent-light-color dark:bg-accent-dark-color flex min-h-[50px] flex-wrap items-center justify-around gap-2 rounded-md p-4 text-base sm:flex-nowrap sm:justify-between">
      <div className="flexBetween gap-5">
        <Button
          AriaLabel="Previous"
          variation="secondary"
          onClick={() => onPageChange(currentPage - 1)}
          size="actions"
          Font="!w-10"
          disabled={currentPage === 1}
        >
          <MdKeyboardArrowLeft size={20} />
        </Button>

        <Button
          AriaLabel="Next"
          variation="secondary"
          onClick={() => onPageChange(currentPage + 1)}
          size="actions"
          Font="!w-10"
          disabled={currentPage === totalPages}
        >
          <MdKeyboardArrowRight size={20} />
        </Button>
      </div>

      <p className="flex items-center gap-1">
        Showing
        <span className="font-semibold">
          {(currentPage - 1) * PAGE_SIZE + 1}
        </span>
        To
        <span className="font-semibold">
          {currentPage === totalPages ? count : currentPage * PAGE_SIZE}
        </span>
        Of <span className="font-semibold">{count}</span>
        Results
      </p>

      <p>
        Total Pages: ( <span className="font-semibold">{totalPages}</span> )
      </p>
    </div>
  );
}
