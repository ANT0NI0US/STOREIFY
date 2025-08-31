import Button from "./Button";

interface ConfirmMessageProps {
  onConfirm: () => void;
  message: string;
  disabled?: boolean;
  onCloseModal?: () => void;
}

export default function ConfirmMessage({
  onConfirm,
  message,
  disabled,
  onCloseModal,
}: ConfirmMessageProps) {
  return (
    <>
      <p className="bg-primary-light-color dark:bg-primary-dark-color rounded-tl-lg rounded-tr-lg p-3.5 text-xl font-semibold capitalize md:p-5">
        {message}
      </p>

      <div className="bg-secondary-light-color dark:bg-secondary-dark-color rounded-br-lg rounded-bl-lg border-t px-4 py-6">
        <div className="ms-auto flex w-full gap-[10px]">
          <Button
            aria-label="cancel confirm"
            title="cancel confirm"
            loading={disabled}
            variation="danger"
            onClick={onCloseModal}
          >
            Cancel
          </Button>
          <Button
            aria-label="accept confirm"
            title="accept confirm"
            loading={disabled}
            onClick={onConfirm}
          >
            Yes
          </Button>
        </div>
      </div>
    </>
  );
}
