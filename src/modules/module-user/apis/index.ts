/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { FIREBASE_SET, FIREBASE_REMOVE, FIREBASE_GET, FIREBASE_UPDATE } from '@module-global/apis';
import { PATH_USER_FIREBASE } from '@module-user/constants';

interface TYPE_API_CREATE_USER {
    userId: string;
    user: any;
}

const getPathUserFirebase = (arrPath: string[]) => `${PATH_USER_FIREBASE}${arrPath.join('/')}`;

const createUser = (payload: TYPE_API_CREATE_USER) => {
    const { userId } = payload;
    FIREBASE_SET({ path: getPathUserFirebase([]), data: {} }).then();
};

const getUser = (payload: TYPE_API_CREATE_USER) => {
    const { userId } = payload;
    FIREBASE_GET({ path: getPathUserFirebase([]), data: {} }).then();
};

const deleteUser = (payload: TYPE_API_CREATE_USER) => {
    const { userId } = payload;
    FIREBASE_REMOVE({ path: getPathUserFirebase([]), data: {} }).then();
};

const updateUser = (payload: TYPE_API_CREATE_USER) => {
    const { userId } = payload;
    FIREBASE_REMOVE({ path: getPathUserFirebase([]), data: {} }).then();
};

export { createUser, getUser, updateUser, deleteUser };
