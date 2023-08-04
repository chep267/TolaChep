/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** constants */
import { USER_STORE_KEY } from '@module-user/constants';

type UserType = {
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
};

type HasUserType = {
    [key: string]: {
        itemIds: string[];
        count: number;
        total: number;
    };
};

type UsersType = {
    [key: string]: {
        data: UserType;
    };
};

type UserStoreType = {
    [USER_STORE_KEY.HAS_USER]: HasUserType;
    [USER_STORE_KEY.USER]: UsersType;
};

export type { UserType, HasUserType, UsersType, UserStoreType };
