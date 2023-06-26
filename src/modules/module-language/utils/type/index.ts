/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** constants */
import { localeObject } from '@module-language/constants';

type LocaleType = keyof typeof localeObject;
type LocaleObjectType = Readonly<{ [key in LocaleType]: key }>;
type MessagesType = Readonly<{ [key in LocaleType]: Record<string, string> }>;
type LanguageProps = {
    locale: LocaleType;
    messages: Record<string, string>;
    toggleLanguage: (value: LocaleType) => void;
};

export type { LocaleType, LocaleObjectType, MessagesType, LanguageProps };
