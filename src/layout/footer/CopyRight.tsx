const Year = new Date().getFullYear();

export default function CopyRight() {
  return (
    <div className="flexCenter border-accent-light-color dark:border-orange-color text-accent-light-color border-t-[0.5px] py-[15px] text-center">
      <p className="w-[90%] text-sm font-medium sm:w-5/6">
        Copyright © {Year}{" "}
        <span className="text-text-light-color dark:text-orange-color">
          STOREIFY
        </span>
        . All rights reserved.
      </p>
    </div>
  );
}
