/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { call } from 'redux-saga/effects';

/** apis */
import { FIREBASE_GET } from '@module-global/apis';

/** utils */
import { Decrypt } from '@module-base/utils';

// export function* doGetUser(payload: { meIdCookie: string }) {
//     const user = yield call(() => {});
//     // do
//     return user;
// }

//

//
// export function check_recoverEmail(email, users) {
//   if (users === null || users === undefined) return 404;
//   const LIST_USERS = Object.values(users);
//   for (const user of LIST_USERS) {
//     if (user.email === email) {
//       return user.id;
//     }
//   }
//   return 0;
// }

export function* checkRegister(email: string): any {
    const users = yield call(getListUserFromServer);
    if (users === null || users === undefined) return 1;
    for (const user of users) {
        if (user.info.email === email) {
            return user;
        }
    }
    return 1;
}

export function* checkSignIn(email: string, password: string): any {
    const users = yield call(getListUserFromServer);
    if (users === null || users === undefined) return 404;
    for (const user of users) {
        if (user.info.email === email && Decrypt(user.info.password) === password) {
            return user;
        }
    }
    return 0;
}

export function* checkSignGoogle(email: string): any {
    const users = yield call(getListUserFromServer);
    if (users === null || users === undefined) return 0;
    for (const user of users) {
        if (user.info.email === email) {
            return user;
        }
    }
    return 0;
}

export function* getUserFromServer(uid = ''): any {
    if (!uid) return null;
    const user = yield call(FIREBASE_GET, { path: `/users/${uid}` });
    return user.exists() ? user.val() : null;
}

export function* getListUserFromServer(): any {
    const users = yield call(FIREBASE_GET, { path: '/users/' });
    return users.exists() ? Object.values(users.val()) : null;
}
