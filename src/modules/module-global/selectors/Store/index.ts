/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { deepGet } from '@module-base/utils/deepObject';

const getState = (state: object, path: Array<string>) => deepGet(state, path);

export { getState };
