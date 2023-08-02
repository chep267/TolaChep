/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as EmailJS from '@emailjs/browser';

/** constants */
import { emptyFunction } from '@module-base/constants';

const doSendEmail = (payload: { code: number; email: string; onSuccess: () => void; onFailure: () => void }) => {
    const { code = 123456, email = 'dongntd267@gmail.com', onSuccess = emptyFunction, onFailure = emptyFunction } = payload;

    const name = email.split('@')[0];
    const param = {
        name,
        code,
        email,
    };

    EmailJS.send('gmail', 'template_qu3gm6k', param, 'Om5edOnUewEAJd_O5').then(onSuccess, onFailure);
};

export default doSendEmail;
