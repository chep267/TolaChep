/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { fork, take } from 'redux-saga/effects';
import { GLOBAL_ACTION } from '@module-global/actions';
import { doStartApp } from '@module-global/sagas/workers';

function* watchStartApp() {
    while (true) {
        const action = yield take(GLOBAL_ACTION.START_APP.REQUEST);
        yield fork(doStartApp, action.payload);
    }
}

const GlobalSaga = [watchStartApp];
export default GlobalSaga;
