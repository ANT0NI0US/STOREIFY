import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { AiOutlinePhone } from "react-icons/ai";
import { MdDriveFileRenameOutline, MdOutlineEmail } from "react-icons/md";
import Input from "@/ui/Input";
import TextArea from "@/ui/TextArea";
import Button from "@/ui/Button";
import { isOnlySpaces } from "@/utils/helpers";
import {
  EMAIL_REGEX,
  MAX_INPUT_LENGTH,
  MAX_TEXTAREA_LENGTH,
  MIN_INPUT_LENGTH,
  PHONE_NUMBER_REGEX,
} from "@/utils/constants";

const initialState = {
  user_name: "",
  user_last_name: "",
  user_email: "",
  user_phone: "",
  message: "",
};

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm({
    mode: "onBlur",
    defaultValues: initialState,
  });

  const sendEmail = () => {
    if (!formRef.current) {
      return;
    }
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_yijk9v8",
        "template_dolvl3a",
        formRef.current,
        "5MRR9-mIUN-47nrvy",
      )
      .then(
        () => {
          toast.success("Form submitted successfully!");
          reset();
        },
        () => {
          toast.error("An error occurred. Please try again.");
        },
      )
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(sendEmail)}
      className="bg-primary-light-color dark:bg-primary-dark-color flex w-full flex-col gap-4 rounded-md p-4 shadow-md md:basis-3/5 md:gap-6 md:p-6"
    >
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-6">
        <Input
          label="First Name"
          placeholder="First Name"
          disabled={isLoading}
          register={register("user_name", {
            required: "This Field is required",
            validate: {
              noOnlySpaces: (value) =>
                !isOnlySpaces(value) || "It Mustn't contains only spaces",
            },
            minLength: {
              value: MIN_INPUT_LENGTH,
              message: "Must be at least 3 characters long",
            },
            maxLength: {
              value: MAX_INPUT_LENGTH,
              message: "Must be at most 50 characters long",
            },
          })}
          error={errors?.user_name?.message}
          Icon={<MdDriveFileRenameOutline />}
        />

        <Input
          label="Last Name"
          placeholder="Last Name"
          disabled={isLoading}
          register={register("user_last_name", {
            required: "This Field is required",
            validate: {
              noOnlySpaces: (value) =>
                !isOnlySpaces(value) || "It Mustn't contains only spaces",
            },
            minLength: {
              value: MIN_INPUT_LENGTH,
              message: "Must be at least 3 characters long",
            },
            maxLength: {
              value: MAX_INPUT_LENGTH,
              message: "Must be at most 50 characters long",
            },
          })}
          error={errors?.user_last_name?.message}
          Icon={<MdDriveFileRenameOutline />}
        />
      </div>

      <Input
        label="Email"
        placeholder="Email"
        disabled={isLoading}
        register={register("user_email", {
          required: "This Field is required",
          validate: {
            noOnlySpaces: (value) =>
              !isOnlySpaces(value) || "It Mustn't contains only spaces",
          },
          pattern: {
            value: EMAIL_REGEX,
            message: "Enter a valid email.",
          },
        })}
        error={errors?.user_email?.message}
        Icon={<MdOutlineEmail />}
      />

      <Input
        label="Phone"
        placeholder="Phone"
        disabled={isLoading}
        register={register("user_phone", {
          required: "This Field is required",
          validate: {
            noOnlySpaces: (value) =>
              !isOnlySpaces(value) || "It Mustn't contains only spaces",
          },
          pattern: {
            value: PHONE_NUMBER_REGEX,
            message: "Enter a valid mobile phone number.",
          },
        })}
        error={errors?.user_phone?.message}
        Icon={<AiOutlinePhone />}
      />

      <TextArea
        label="Message"
        disabled={isLoading}
        register={register("message", {
          required: "This Field is required",
          validate: {
            noOnlySpaces: (value) =>
              !isOnlySpaces(value) || "It Mustn't contains only spaces",
          },
          minLength: {
            value: MIN_INPUT_LENGTH,
            message: "Must be at least 3 characters long",
          },
          maxLength: {
            value: MAX_TEXTAREA_LENGTH,
            message: "Must be at most 250 characters long",
          },
        })}
        error={errors?.message?.message}
      />

      <Button type="submit" AriaLabel="Submit Form" loading={isLoading}>
        Submit
      </Button>
    </form>
  );
}
