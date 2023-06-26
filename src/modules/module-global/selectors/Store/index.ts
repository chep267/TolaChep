/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** utils */
import { deepGet } from '@module-base/utils';

const getState = (state: object, path: Array<string>) => deepGet(state, path);

export { getState };
