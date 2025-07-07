import { useEffect } from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail, MdSms } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "@/ui/spinner/Spinner";
import { ContactState } from "@/utils/types";
import { AppDispatch } from "@/store";
import { getContactData } from "@/store/service/contactService";

interface allContactsProps {
  href: string;
  icon: JSX.Element;
  text: string | undefined;
  rel?: string;
  target?: string;
  title: string;
}

export default function ContactInformation() {
  const dispatch = useDispatch<AppDispatch>();

  const { isLoading, Contacts } = useSelector(
    (state: ContactState) => state.contact,
  );

  useEffect(() => {
    dispatch(getContactData());
  }, [dispatch]);

  const allContacts: Array<allContactsProps> = [
    {
      title: "Email",
      href: `mailto:${Contacts?.email}`,
      icon: <MdEmail />,
      text: Contacts?.email,
    },
    {
      title: "SMS",
      href: `sms:${Contacts?.sms}`,
      icon: <MdSms />,
      text: Contacts?.sms,
    },
    {
      title: "Phone",
      href: `tel:${Contacts?.phone}`,
      icon: <FaPhone />,
      text: Contacts?.phone,
    },
    {
      title: "Address",
      href: "https://www.google.com/maps/place/my+home",
      icon: <FaLocationDot />,
      text: Contacts?.address,
      rel: "noopener noreferrer",
      target: "_blank",
    },
  ];

  return (
    <div className="bg-primary-light-color dark:bg-primary-dark-color w-full rounded-md p-4 shadow-md md:basis-2/5 md:p-6">
      <h3 className="mb-8 text-center text-3xl font-bold md:text-start">
        Contact Information
      </h3>
      {isLoading ? (
        <Spinner height="h-[63dvh]" />
      ) : (
        <div className="md:divide-accent-light-color dark:md:divide-accent-dark-color flex flex-col gap-4 divide-y sm:grid sm:grid-cols-2 sm:divide-y-0 md:grid-cols-1 md:gap-6 md:divide-y">
          {allContacts.map(
            ({ title, href, icon, text, target, rel }: allContactsProps) => (
              <div
                key={href}
                className="mx-auto flex w-full flex-col items-center gap-1 not-last:pb-4 md:mx-0 md:flex-row md:items-start md:gap-3 md:not-last:pb-6"
              >
                <div className="text-3xl">{icon}</div>
                <div className="flex flex-col gap-1 text-center md:text-start">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <a
                    href={href}
                    target={target || undefined}
                    rel={rel || undefined}
                    className="mx-auto w-fit hover:underline md:mx-0"
                  >
                    {text}
                  </a>
                </div>
              </div>
            ),
          )}
        </div>
      )}
    </div>
  );
}
