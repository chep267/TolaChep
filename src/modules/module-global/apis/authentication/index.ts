/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

/** utils */
import { firebaseApp } from '@module-global/utils';

const authentication = getAuth(firebaseApp);

const registerAccount = (email: string, password: string) =>
    createUserWithEmailAndPassword(authentication, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return {
                response: user,
            };
        })
        .catch((error) => {
            return { error };
        });

const signInAccount = (email: string, password: string) =>
    signInWithEmailAndPassword(authentication, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return {
                response: user,
            };
        })
        .catch((error) => {
            return { error };
        });

const signOutAccount = () =>
    signOut(authentication)
        .then(() => {
            return {
                response: true,
            };
        })
        .catch((error) => {
            return { error };
        });

export { getAuth, signOutAccount, signInAccount, registerAccount };
