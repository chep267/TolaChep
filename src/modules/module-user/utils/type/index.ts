import { USER_STORE_KEY } from '@module-user/constants';

/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

export interface TYPE_USER {
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

export type TYPE_USER_STORE_HAS_USER = {
    [key: string]: {
        itemIds: string[];
        total: number;
    };
};

export type TYPE_USER_STORE_USER = {
    [key: string]: {
        data: TYPE_USER;
    };
};

export type TYPE_USER_STORE = {
    [USER_STORE_KEY.HAS_USER]: TYPE_USER_STORE_HAS_USER;
    [USER_STORE_KEY.USER]: TYPE_USER_STORE_USER;
};
