/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** types */
import type { UserType } from '@module-user/utils';
import type { AccountType } from '@module-auth/utils';

const genUid = (id = '') => `uid-${id || Date.now()}`;

const genNewUser = ({
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
    type: AccountType;
}) => {
    const user: UserType = {
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

export { genUid, genNewUser };
