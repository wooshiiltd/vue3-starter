import { createI18n } from 'vue-i18n';
import type { VueMessageType } from 'vue-i18n';
import type { NumberFormats, DateTimeFormat, LocaleMessages, Locale as IntlifyLocale } from '@intlify/core-base';
import en from './locales/en';

export const availableLocales: IntlifyLocale[] = ['en', 'hu'];
export type Locale = typeof availableLocales[number];

export type LocaleExport = {
    localeCode: Locale;
    messages: LocaleMessages<VueMessageType>;
    numberFormat: Record<Locale, NumberFormats>;
    dateTimeFormat: Record<Locale, DateTimeFormat>;
};


const i18n = createI18n({
    locale: 'en' as Locale,
    fallbackLocale: 'en' as Locale,
    messages: {
        [en.localeCode]: en.messages
    },
    numberFormats: {
        [en.localeCode]: en.numberFormat
    },
    datetimeFormats: {
        [en.localeCode]: en.dateTimeFormat
    }
});

export async function setLocale(locale: Locale): Promise<void> {
    try {
        const localeExport: { default: LocaleExport } = await import(`./locales/${locale}.ts`);
        i18n.global.setLocaleMessage(locale, localeExport.default.messages);
        i18n.global.setNumberFormat(locale, localeExport.default.numberFormat ?? {});
        i18n.global.setDateTimeFormat(locale, localeExport.default.dateTimeFormat ?? {});
        i18n.global.locale = locale;

        document.querySelector('html')?.setAttribute('lang', locale);
    } catch (e) {
        throw new Error(locale + ' locale could not be found.');
    }
}

export default i18n;
