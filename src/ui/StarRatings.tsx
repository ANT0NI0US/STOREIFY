import { useEffect, useState } from "react";

interface StarRatingsProps {
  maxRating?: number;
  defaultRating?: number;
  color?: string;
  messages?: string[];
  className?: string;
  onSetRating?: (rating: number) => void;
  readOnly?: boolean;
}

interface StarProps {
  onRate: () => void;
  full: boolean;
  onHoverIn: () => void;
  onHoverOut: () => void;
  color: string;
  readOnly: boolean;
}

export default function StarRatings({
  maxRating = 5,
  color = "#c18500",
  className = "",
  messages = [],
  defaultRating = 0,
  onSetRating,
  readOnly = false,
}: StarRatingsProps) {
  const [rating, setRating] = useState<number>(defaultRating || 0);
  const [tempRating, setTempRating] = useState<number>(0);

  function handleRating(rating: number) {
    if (!readOnly) {
      setRating(rating);
      if (onSetRating) {
        onSetRating(rating);
      }
    }
  }

  const textStyle = {
    color,
  };

  useEffect(() => {
    setRating(defaultRating);
  }, [defaultRating]);

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex items-center">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => !readOnly && setTempRating(i + 1)}
            onHoverOut={() => !readOnly && setTempRating(0)}
            color={color}
            readOnly={readOnly}
          />
        ))}
      </div>
      {!readOnly && (
        <p className="m-0 text-xl leading-0 md:text-2xl" style={textStyle}>
          {messages.length === maxRating
            ? messages[tempRating ? tempRating - 1 : rating - 1]
            : tempRating || rating || ""}
        </p>
      )}
    </div>
  );
}

function Star({
  onRate,
  full,
  onHoverIn,
  onHoverOut,
  color,
  readOnly,
}: StarProps) {
  return (
    <span
      role="button"
      className={`block size-6 md:size-8 ${readOnly ? "cursor-default" : "cursor-pointer"}`}
      onClick={!readOnly ? onRate : undefined}
      onMouseEnter={!readOnly ? onHoverIn : undefined}
      onMouseLeave={!readOnly ? onHoverOut : undefined}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}
