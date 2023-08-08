/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** utils */
import { Encrypt } from '@module-base/utils';

export const meIdCookieKey = Encrypt('tlc_meId_cookie');
export const emailLocalKey = Encrypt('tlc_email_local');
export const localeLocalKey = Encrypt('tlc_locale_local');
export const themeLocalKey = Encrypt('tlc_theme_local');
export const avatarLocalKey = Encrypt('tlc_avatar_local');
export const coverLocalKey = Encrypt('tlc_cover_local');
export const routerLocalKey = Encrypt('tlc_router_local');
