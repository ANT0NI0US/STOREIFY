const Year = new Date().getFullYear();

export default function CopyRight() {
  return (
    <div className="flexCenter border-accent-light-color dark:border-accent-dark-color text-accent-light-color dark:accent-accent-dark-color border-t-[0.5px] py-[15px] text-center">
      <p className="w-[90%] text-sm font-medium sm:w-5/6">
        Copyright © {Year}{" "}
        <span className="text-text-light-color dark:text-text-dark-color">
          STOREIFY
        </span>
        . All rights reserved.
      </p>
    </div>
  );
}
