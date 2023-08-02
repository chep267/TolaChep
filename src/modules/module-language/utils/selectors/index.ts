/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** constants */
import { localeObject } from '@module-language/constants';

/** types */
import type { LocaleType } from '@module-language/models';

const getDeviceLanguage = (): LocaleType => {
    const deviceLanguage = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;
    // vi_VN | en_UK | en_US | ...
    const defaultLocal = `${deviceLanguage || localeObject.vi}`.slice(0, 2) as LocaleType;
    return localeObject[defaultLocal] ? defaultLocal : localeObject.vi;
};

export { getDeviceLanguage };
