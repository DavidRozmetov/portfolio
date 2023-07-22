import { ContactMeViaEmail } from "../components/ContactMeViaEmail";
import { ContactMeViaSocialMedia } from "../components/ContactMeViaSocialMedia";

export const ContactMe = () => {
  return (
    <div className="contact-me-page">
      <ContactMeViaSocialMedia />
      <ContactMeViaEmail />
    </div>
  );
};
