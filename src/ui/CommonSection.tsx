interface CommonSectionProps {
  title: string;
}

export default function CommonSection({ title }: CommonSectionProps) {
  return (
    <section className="flexCenter bg-common-section-pattern h-screen bg-cover bg-center bg-no-repeat pt-[80px] text-center">
      <h1 className="text-text-dark-color text-4xl font-semibold tracking-wider uppercase">
        {title}
      </h1>
    </section>
  );
}
