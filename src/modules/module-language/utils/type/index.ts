/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

export type TYPE_LOCALE = 'VI' | 'EN';
export type TYPE_LOCALE_OBJECT = Readonly<Record<TYPE_LOCALE, TYPE_LOCALE>>;
export type TYPE_MESSAGES = Readonly<Record<TYPE_LOCALE, Record<string, string>>>;
