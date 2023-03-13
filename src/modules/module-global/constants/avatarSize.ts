/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

const AVATAR_SIZE = {
    MINI: 'mini',
    SMALL: 'small',
    NORMAL: 'normal',
    LARGE: 'large',
    HUGE: 'huge',
};

export type AVATAR_TYPE = keyof typeof AVATAR_SIZE;

const avatarSize = {
    mini: 26,
    small: 32,
    normal: 40,
    large: 56,
    huge: 150,
};

export { avatarSize, AVATAR_SIZE };
