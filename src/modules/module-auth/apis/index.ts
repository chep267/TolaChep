/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as EmailJS from '@emailjs/browser';
import {
    EmailAuthProvider,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    fetchSignInMethodsForEmail,
    updatePassword,
    deleteUser,
    sendEmailVerification,
    sendPasswordResetEmail,
} from 'firebase/auth';

/** utils */
import { firebaseApp } from '@module-global/utils';

/** constants */
import { emptyFunction } from '@module-base/constants';
import { AUTH_FORM_ERROR } from '@module-auth/constants';

/** types */
import type { FormErrorType } from '@module-auth/models';

const authentication = getAuth(firebaseApp);

const sendEmail = (payload: {
    email: string;
    onSuccess?: (code: string) => void;
    onFailure?: (type: 'account' | 'code', value: FormErrorType) => void;
}) => {
    const { email = 'mariokun1998@gmail.com', onSuccess = emptyFunction, onFailure = emptyFunction } = payload;

    const code = `${Math.floor(Math.random() * 899999 + 100000)}`;
    const name = email.split('@')[0];
    const param = {
        name,
        code,
        email,
    };
    EmailJS.send('service_06qhpea', 'template_ycjqbor', param, 'eZpg0d1y6mO-WfEY7').then(
        () => onSuccess(code),
        () => onFailure('code', AUTH_FORM_ERROR.SEND_CODE)
    );
};

const detectAccount = (email: string) =>
    fetchSignInMethodsForEmail(authentication, email)
        .then((signInMethods) => {
            if (signInMethods.indexOf(EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD) != -1) {
                return {
                    response: true,
                };
            }
            return {
                error: true,
            };
        })
        .catch((error) => {
            // Some error occurred, you can inspect the code: error.code
            return {
                error,
            };
        });

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

const recoverAccount = (email: string) =>
    sendPasswordResetEmail(authentication, email).then(
        () => {
            return {
                response: true,
            };
        },
        () => {
            return {
                error: true,
            };
        }
    );

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

const deleteAccount = async () =>
    authentication.currentUser &&
    deleteUser(authentication.currentUser).then(
        () => {
            return {
                response: true,
            };
        },
        () => {
            return {
                error: true,
            };
        }
    );

export { sendEmail, detectAccount, getAuth, signOutAccount, signInAccount, registerAccount, deleteAccount, recoverAccount };
