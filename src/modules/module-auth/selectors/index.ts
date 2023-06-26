/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** selectors */
import { getState } from '@module-global/selectors';

/** constants */
import { emptyUser } from '@module-user/constants';
import { AUTH_STORE_KEY } from '@module-auth/constants';

/** types */
import type { UserType } from '@module-user/utils';

const getMe = (state: object): UserType => getState(state, [AUTH_STORE_KEY.ROOT, 'me']) || emptyUser;
const getMeId = (state: object): string => getState(state, [AUTH_STORE_KEY.ROOT, 'meId']);
const getMeName = (state: object) => getMe(state).meId.info.name;

export { getMeId, getMe, getMeName };
