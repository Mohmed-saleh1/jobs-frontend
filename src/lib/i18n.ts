import { promises as fs } from "fs";
import path from "path";
import { Locale } from "../config/i18n";

const loadTranslations = async (locale: Locale) => {
  try {
    const filePath = await path.join(
      process.cwd(),
      "public",
      "locales",
      `${locale}.json`
    );
    const fileContents = await fs.readFile(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Error loading ${locale} translations:`, error);
    const defaultPath = path.join(
      process.cwd(),
      "public",
      "locales",
      "en.json"
    );
    const defaultContents = await fs.readFile(defaultPath, "utf8");
    return JSON.parse(defaultContents);
  }
};

export const getTranslations = async (locale: Locale) => {
  return await loadTranslations(locale);
};
