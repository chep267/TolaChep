/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { fork, take } from 'redux-saga/effects';

/** actions */
import { GLOBAL_ACTION } from '@module-global/actions';

/** workers */
import { doStartApp } from '@module-global/sagas/workers';

function* watchStartApp(): any {
    while (true) {
        const action = yield take(GLOBAL_ACTION.START_APP.REQUEST);
        yield fork(doStartApp, action.payload);
    }
}

const GlobalSaga = Object.freeze([watchStartApp]);
export default GlobalSaga;
