interface stuffProps {
  singleStuff: {
    id: number;
    name: string;
    job: string;
    image: string;
  };
}

export default function CardStuff({ singleStuff }: stuffProps) {
  const { id, image, name, job } = singleStuff;
  return (
    <>
      <div className="bg-secondary-color-light dark:bg-secondary-color">
        <img
          alt={`stuff-${id}`}
          src={image}
          loading="lazy"
          className="h-[350px] w-full object-contain object-center"
        />
      </div>
      <div className="flex flex-col gap-1 p-6">
        <h3 className="text-orange-color-light dark:text-orange-color text-3xl font-semibold tracking-wider capitalize">
          {name}
        </h3>
        <p className="font-medium">{job}</p>
      </div>
    </>
  );
}
