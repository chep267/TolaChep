/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { getState } from '@module-global/selectors';
import { emptyUser } from '@module-user/constants';
import { AUTH_STORE_KEY } from '@module-auth/constants';

const getMe = (state: object) => getState(state, [AUTH_STORE_KEY.ROOT, 'me']) || emptyUser;

const getMeId = (state: object) => getMe(state).meId;
const getMeName = (state: object) => getMe(state).meId.info.name;

export { getMeId, getMe, getMeName };
