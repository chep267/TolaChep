/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// utils
import { firebaseApp } from '@module-global/utils';

const authentication = getAuth(firebaseApp);

export const registerAccount = (email: string, password: string) =>
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

export const signInAccount = (email: string, password: string) =>
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

export const signOutAccount = () =>
    signOut(authentication)
        .then(() => {
            return {
                response: true,
            };
        })
        .catch((error) => {
            return { error };
        });
