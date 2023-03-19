/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

export type TypeLocale = 'vi' | 'en';
export type TypeLocaleObject = Readonly<{ [key in TypeLocale]: key }>;
export type TypeMessages = Readonly<{ [key in TypeLocale]: Record<string, string> }>;
