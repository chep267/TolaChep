/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { localeObject } from '@module-language/constants';
import { TypeLocale } from '@module-language/utils';

export const getDeviceLanguage: () => TypeLocale = () => {
    const deviceLanguage = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;
    // vi_VN | en_UK | en_US | ...
    const defaultLocal = `${deviceLanguage || localeObject.vi}`.slice(0, 2) as TypeLocale;
    return !!localeObject[defaultLocal] ? defaultLocal : localeObject.vi;
};
