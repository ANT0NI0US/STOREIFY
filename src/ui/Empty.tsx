import Button from "./Button";

interface EmptyProps {
  title: string;
}

export default function Empty({ title }: EmptyProps) {
  return (
    <div className="flexCenter flex-col gap-3">
      <h2 className="mx-auto w-full text-center text-2xl font-extrabold">
        {title}
      </h2>
      <div className="w-[150px]">
        <Button to="/shop" aria-label="Shopping Now" title="Shopping Now">
          Shop
        </Button>
      </div>
    </div>
  );
}
