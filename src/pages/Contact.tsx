import ContactHeader from "@/components/contact/ContactHeader";
import ContactInformation from "@/components/contact/ContactInformation";
import ContactForm from "@/components/contact/ContactForm";
import CommonSection from "@/ui/CommonSection";
import Container from "@/ui/Container";
import useHelmet from "@/hooks/useHelmet";

export default function Contact() {
  useHelmet("Contact");
  return (
    <>
      <CommonSection title="Contact" />
      <section className="bg-secondary-light-color dark:bg-secondary-dark-color">
        <Container Styles="md:py-[80px] py-[40px]">
          <ContactHeader />
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:gap-6">
            {/* CONTACT INFORMATION */}
            <ContactInformation />

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
