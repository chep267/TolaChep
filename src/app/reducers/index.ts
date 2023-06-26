/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { combineReducers } from 'redux';

/** reducers */
import moduleAuthReducer from '@module-auth/reducers';
import moduleUserReducer from '@module-user/reducers';
import moduleGlobalReducer from '@module-global/reduces';

const rootReducer = combineReducers({
    ...moduleAuthReducer,
    ...moduleUserReducer,
    ...moduleGlobalReducer,
});

export default rootReducer;
