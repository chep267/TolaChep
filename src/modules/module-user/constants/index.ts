/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** types */
import type { UserType } from '@module-user/models';

const PATH_USER_FIREBASE = '/users/';

const USER_STORE_KEY = Object.freeze({
    ROOT: 'StoreUser',
    USER: 'User',
    HAS_USER: 'HasUser',
} as const);

const emptyUser: UserType = Object.freeze({
    uid: 'uid-test',
    info: {
        account: 'chep.tola',
        email: 'chep.tola@gmail.com',
        name: 'Chep',
        contact: '',
        age: '',
        phone: '',
    },
    image: {
        avatar: '',
        cover: '',
    },
    config: {
        type: 'account',
    },
});

const AVATAR_SIZE = {
    MINI: 'mini',
    SMALL: 'small',
    NORMAL: 'normal',
    LARGE: 'large',
    HUGE: 'huge',
};

const avatarSize = {
    mini: 26,
    small: 32,
    normal: 40,
    large: 56,
    huge: 150,
};

export { avatarSize, AVATAR_SIZE, PATH_USER_FIREBASE, USER_STORE_KEY, emptyUser };
