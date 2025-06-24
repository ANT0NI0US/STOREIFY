interface ErrorProps {
  message?: string;
}

export function Error({ message }: ErrorProps) {
  if (!message) return null;

  return (
    <div className="text-error-light dark:text-error mt-1 pl-1 text-xs">
      {message}
    </div>
  );
}
