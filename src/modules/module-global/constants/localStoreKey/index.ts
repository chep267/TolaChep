/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { Encrypt } from '@module-base/utils/security';

export const meIdLocalKey = Encrypt('tlc_meId_local');
export const emailLocalKey = Encrypt('tlc_email_local');
export const localeLocalKey = Encrypt('tlc_locale_local');
export const themeLocalKey = Encrypt('tlc_theme_local');
export const avatarLocalKey = Encrypt('tlc_avatar_local');
export const coverLocalKey = Encrypt('tlc_cover_local');
export const routerLocalKey = Encrypt('tlc_router_local');
