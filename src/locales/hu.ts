import { LocaleExport } from '@/i18n';

const localeCode = 'hu';

const messages = {
    greetings: {
        hello: 'hello but in hungarian'
    }
};

const numberFormat = {
    [localeCode]: {
        currency: {
            style: 'currency',
            currencyDisplay: 'Ft',
            currency: 'Forint'
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
