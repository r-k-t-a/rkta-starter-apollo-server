import areIntlLocalesSupported from 'intl-locales-supported';

export function isValidLocale(tag: string): boolean {
  try {
    return areIntlLocalesSupported([tag], [Intl.PluralRules]);
  } catch (error) {
    return false;
  }
}
