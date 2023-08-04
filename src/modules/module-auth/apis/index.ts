/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as EmailJS from '@emailjs/browser';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

/** utils */
import { firebaseApp } from '@module-global/utils';

/** constants */
import { emptyFunction } from '@module-base/constants';

const sendEmail = (payload: { code: number; email: string; onSuccess: () => void; onFailure: () => void }) => {
    const { code = 123456, email = 'dongntd267@gmail.com', onSuccess = emptyFunction, onFailure = emptyFunction } = payload;

    const name = email.split('@')[0];
    const param = {
        name,
        code,
        email,
    };

    EmailJS.send('gmail', 'template_qu3gm6k', param, 'Om5edOnUewEAJd_O5').then(onSuccess, onFailure);
};
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

export { sendEmail, getAuth, signOutAccount, signInAccount, registerAccount };
