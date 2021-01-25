import { LocaleExport } from '../i18n';

const localeCode = 'en';

const messages = {
    greetings: {
        hello: 'hello'
    }
};

const numberFormat = {
    [localeCode]: {
        currency: {
            style: 'currency',
            currencyDisplay: '$',
            currency: 'USD'
        }
    }
};

const dateTimeFormat = {
    [localeCode]: {}
};

export default {
    localeCode,
    messages,
    numberFormat,
    dateTimeFormat
} as LocaleExport;
