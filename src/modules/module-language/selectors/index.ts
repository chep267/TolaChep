/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { LOCALE_OBJECT, TYPE_LOCALE } from '@module-language/constants';

export const getDeviceLanguage: () => TYPE_LOCALE = () => {
    const deviceLanguage = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;
    // vi_VN | en_UK | en_US | ...
    const defaultLocal = `${deviceLanguage || LOCALE_OBJECT.VI}`.slice(0, 2) as TYPE_LOCALE;
    return !!LOCALE_OBJECT[defaultLocal] ? defaultLocal : LOCALE_OBJECT.VI;
};
