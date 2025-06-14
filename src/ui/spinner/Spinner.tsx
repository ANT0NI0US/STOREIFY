import styles from "./Spinner.module.css";

interface spinnerProps {
  height?: string;
}

export default function Spinner({
  height = "h-screen min-h-full",
}: spinnerProps) {
  return (
    <div className={`flexCenter ${height} bg-transparent backdrop-blur-xs`}>
      <div className={`${styles.loader}`}></div>
    </div>
  );
}
