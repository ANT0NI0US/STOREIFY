interface HeaderAuthProps {
  title: string;
  desc: string;
}

export default function HeaderAuth({ title, desc }: HeaderAuthProps) {
  return (
    <div className="flexCenter mb-6 flex-col text-center">
      <h1 className="xs:text-xl text-lg font-black uppercase sm:text-2xl md:text-3xl lg:text-4xl">
        {title}
      </h1>
      <h2 className="text-[0.7rem] font-semibold">{desc}</h2>
    </div>
  );
}
