interface HeaderAuthProps {
  title: string;
  desc: string;
}

export default function HeaderAuth({ title, desc }: HeaderAuthProps) {
  return (
    <div className="flexCenter mb-10 flex-col gap-3 text-center">
      <h1 className="xs:text-xl text-primary-color-light dark:text-orange-color text-lg font-extrabold sm:text-2xl md:text-3xl lg:text-4xl">
        {title}
      </h1>
      <h2 className="text-[0.7rem] font-bold uppercase">{desc}</h2>
    </div>
  );
}
