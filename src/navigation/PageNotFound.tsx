import Button from "@/ui/Button";

export default function PageNotFound() {
  return (
    <main className="flexCenter bg-secondary-light-color dark:bg-secondary-dark-color h-screen w-full flex-col p-4">
      <h1 className="font-Merienda text-9xl font-extrabold tracking-widest sm:text-[15rem] md:text-[20rem]">
        404
      </h1>
      <h2 className="font-Merienda mb-6 text-center text-4xl font-black uppercase sm:text-6xl">
        Page Not Found
      </h2>

      <p className="mb-6 text-center">
        Sorry, we couldn't find the page you are looking for
      </p>

      <Button
        To="/"
        AriaLabel="Go to home"
        variation="secondary"
        replace
        Font="w-[150px]!"
      >
        Go Home &rarr;
      </Button>
    </main>
  );
}
