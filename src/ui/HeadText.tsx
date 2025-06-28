interface Props {
  text: string;
}

export default function HeadText({ text }: Props) {
  return (
    <h2 className="mb-10 flex flex-row flex-nowrap items-center">
      <span className="border-text-light-color dark:border-text-dark-color block grow border-t" />
      <span className="bg-text-light-color text-secondary-light-color dark:bg-text-dark-color dark:text-secondary-dark-color mx-4 block flex-none rounded-sm px-4 py-2.5 text-xl leading-none font-medium">
        {text}
      </span>
      <span className="border-text-light-color dark:border-text-dark-color block grow border-t" />
    </h2>
  );
}
