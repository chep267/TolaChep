import { USER_STORE_KEY } from '@module-user/constants';

/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

export interface TypeUser {
    uid: string;
    info: {
        account: string;
        email: string;
        name: string;
        contact: string;
        age: string;
        phone: string;
    };
    image: {
        avatar: string;
        cover: string;
    };
    config: {
        type: string;
    };
}

export type TypeUser_STORE_HAS_USER = {
    [key: string]: {
        itemIds: string[];
        total: number;
    };
};

export type TypeUser_STORE_USER = {
    [key: string]: {
        data: TypeUser;
    };
};

export type TypeUser_STORE = {
    [USER_STORE_KEY.HAS_USER]: TypeUser_STORE_HAS_USER;
    [USER_STORE_KEY.USER]: TypeUser_STORE_USER;
};
