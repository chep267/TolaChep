/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** utils */
import lodash from 'lodash';

const getState = (state: object, path: Array<string>) => lodash.get(state, path);

export { getState };
