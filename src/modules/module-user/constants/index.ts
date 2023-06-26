/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** types */
import type { UserType } from '@module-user/utils';

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

export { PATH_USER_FIREBASE, USER_STORE_KEY, emptyUser };
