import styles from "./NavigationBar.module.css";
import { Locale } from "../../config/i18n";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "../../lib/i18n";
import LanguageSwitcher from "../langSwitcher/LanguageSwitcher";
import MobileMenu from "./MobileMenu";

interface NavigationBarProps {
  lang: Locale;
}

const NavigationBar = async ({ lang }: NavigationBarProps) => {
  const translations = await getTranslations(lang);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <Link href={`/${lang}/home`} className={styles.logoContainer}>
        <Image
          src="/assets/logo.png"
          alt={translations.nav.title}
          width={170}
          height={60}
          priority
        />
        {/* <h1 className={styles.title}>{translations.nav.title}</h1> */}
      </Link>

      {/* Desktop Navigation Links */}
      <div className={styles.navLinks}>
        <Link className={styles.navLink} href={`/${lang}/home`}>
          {translations.nav.home}
        </Link>
        <Link className={styles.navLink} href={`/${lang}/about`}>
          {translations.nav.about}
        </Link>
        <Link className={styles.navLink} href={`/${lang}/contact`}>
          {translations.nav.contact}
        </Link>
      </div>

      {/* Right Side: Language + Job Button + Mobile Menu */}
      <div className={styles.rightContainer}>
        <LanguageSwitcher lang={lang} />
        <Link className={styles.jobButton} href={`/${lang}/job`}>
          {translations.nav.job}
        </Link>

        {/* Mobile Menu */}
        <MobileMenu lang={lang} translations={translations} />
      </div>
    </nav>
  );
};

export default NavigationBar;
