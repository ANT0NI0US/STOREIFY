interface StuffProps {
  singleStuff: {
    id: number;
    name: string;
    job: string;
    image: string;
  };
}

export default function CardStuff({ singleStuff }: StuffProps) {
  const { id, image, name, job } = singleStuff;
  return (
    <>
      <div className="bg-primary-light-color dark:bg-primary-dark-color rounded-tl-md rounded-tr-md">
        <img
          alt={`stuff-${id}`}
          src={image}
          loading="lazy"
          className="h-[250px] w-full object-contain object-center"
        />
      </div>
      <div className="bg-accent-light-color dark:bg-accent-dark-color flex flex-col gap-1 rounded-br-md rounded-bl-md p-6">
        <h3 className="text-3xl font-semibold tracking-wider capitalize">
          {name}
        </h3>
        <p className="font-medium">{job}</p>
      </div>
    </>
  );
}
