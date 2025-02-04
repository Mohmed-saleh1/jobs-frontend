// app/[lang]/contact/page.tsx
import { Locale } from "@/config/i18n";
import { getTranslations } from "@/lib/i18n";
import ContactPageStyles from "./ContactPage.module.css";
import Image from "next/image";

export default async function ContactPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const lang = params.lang;
  const t = await getTranslations(lang);

  return (
    <div>
      <div>
        <Image
          src="/contact-header.jpg"
          layout="responsive"
          width={1200} // Aspect ratio width
          height={300}
          alt="Contact Support Team"
        />
      </div>

      <div className={ContactPageStyles.container}>
        <h1 className={ContactPageStyles.title}>{t.contact.title}</h1>

        <div className={ContactPageStyles.subContainer}>
          <p className={ContactPageStyles.subheading}>{t.contact.subheading}</p>
          <form
            className={ContactPageStyles.form}
            // onSubmit={handleSubmit}
          >
            <div className={ContactPageStyles.nameContainer}>
              <div className={ContactPageStyles.field}>
                <label htmlFor="firstName" className={ContactPageStyles.label}>
                  {t.contact.firstName}
                </label>
                <input
                  id="firstName"
                  type="text"
                  required
                  className={ContactPageStyles.input}
                />
              </div>
              <div className={ContactPageStyles.field}>
                <label htmlFor="lastName" className={ContactPageStyles.label}>
                  {t.contact.lastName}
                </label>
                <input
                  id="lastName"
                  type="text"
                  required
                  className={ContactPageStyles.input}
                />
              </div>
            </div>

            <div className={ContactPageStyles.field}>
              <label htmlFor="email" className={ContactPageStyles.label}>
                {t.contact.email}
              </label>
              <input
                id="email"
                type="email"
                required
                className={ContactPageStyles.input}
              />
            </div>

            <div className={ContactPageStyles.field}>
              <label htmlFor="message" className={ContactPageStyles.label}>
                {t.contact.message}
              </label>
              <textarea
                id="message"
                required
                className={ContactPageStyles.textarea}
              />
            </div>

            {/* <div className={ContactPageStyles.captcha}>
            <ReCaptcha
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={onCaptchaChange}
            />
          </div> */}

            <button
              type="submit"
              className={ContactPageStyles.submitButton}
              // disabled={isSubmitting}
            >
              {t.contact.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//   event.preventDefault();
//    Add form submission logic here
//   console.log("Form submitted");
// };

// const onCaptchaChange = (value: string) => {
//    Handle reCAPTCHA verification
//   console.log("Captcha value:", value);
// };
