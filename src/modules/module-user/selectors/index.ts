/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { TYPE_USER } from '@module-user/utils';

export const genUid = (id = '') => `uid-${id || Date.now()}`;

export const genNewUser = ({
    uid = '',
    email = '',
    phone = '',
    type = 'account',
}: {
    uid?: string;
    email: string;
    name?: string;
    phone?: string;
    contact?: string;
    type: 'account' | 'facebook' | 'google';
}) => {
    const user: TYPE_USER = {
        uid: uid || genUid(),
        info: {
            account: '',
            email,
            name: '',
            contact: '',
            age: '',
            phone,
        },
        image: {
            avatar: '',
            cover: '',
        },
        config: {
            type,
        },
    };

    return user;
};
