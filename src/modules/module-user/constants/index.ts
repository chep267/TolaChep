/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */
import { TYPE_USER } from '@module-user/utils';

export const PATH_USER_FIREBASE = '/users/';
export const USER_STORE_KEY = {
    ROOT: 'StoreUser',
    USER: 'User',
    HAS_USER: 'HasUser',
} as const;

export const emptyUser: TYPE_USER = {
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
};
