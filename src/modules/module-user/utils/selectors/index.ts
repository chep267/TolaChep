/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** types */
import type { UserType } from '@module-user/models';
import type { AccountType } from '@module-auth/models';

const genUid = (id = `${Date.now()}`) => `uid-${id}`;

const genNewUser = (payload: {
    uid?: string;
    email: string;
    name?: string;
    phone?: string;
    contact?: string;
    type?: AccountType;
}): UserType => {
    const { uid = '', email = '', phone = '', type = 'account' } = payload;
    return {
        uid: uid || genUid(),
        info: {
            account: '',
            email,
            name: '',
            contact: email,
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
};

export * from './Avatar';
export { genUid, genNewUser };
