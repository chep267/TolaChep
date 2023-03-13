/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import emailjs from '@emailjs/browser';
import { emptyFunction } from '@module-base/constants';

const templateParams = (name: string, code: string, email: string) => ({
    name,
    code,
    email,
});

const doSendEmail = (payload: any) => {
    const { code = 123456, email = 'vuquangtu0906@gmail.com', onFailure = emptyFunction } = payload;
    // const email = 'vuquangtu0906@gmail.com';
    const name = email.split('@')[0];
    const param = templateParams(name, code, email);
    emailjs.send('gmail', 'template_qu3gm6k', param, 'Om5edOnUewEAJd_O5').then(emptyFunction, () => onFailure('server'));
};

export default doSendEmail;
